# Visual Redesign: 10x Velocity

## Summary

Complete visual overhaul of the 10x Velocity marketing site. Replace the Lovable scaffold aesthetic (cyan-on-dark, glassmorphism, gradient text, identical card grids) with a premium-approachable light-mode design that communicates authority and competence to mid-market executive buyers.

## Scope

**Phase 1 — Design System:** Tailwind config, global CSS, font loading, CSS variables for light/dark themes.
**Phase 2 — Layout Shell:** Header, Footer, RootLayout, theme toggle.
**Phase 3 — Homepage:** Full Index.tsx redesign as the flagship page.

Out of scope: All other pages (they inherit token changes but don't get layout rewrites in this pass).

## Audience

Mid-market executives (VP/Director, 50-500 employee companies) evaluating AI/automation vendors. Secondary: nonprofit leaders. They need to feel "these people know what they're doing" within 3 seconds.

## Design Decisions

### Typography

- **Display:** Plus Jakarta Sans (weights 500-800) — geometric, confident, modern
- **Body:** Source Serif 4 (weights 400, 600, italic 400) — editorial warmth, readability
- **Loading:** Google Fonts via `<link>` in `index.html` with `display=swap`
- **Scale:** Fluid sizing with `clamp()` for headings

### Color Palette

All neutrals warm-tinted toward stone/cream. No pure black or white.

**Light mode (default):**
| Token | Value | Usage |
|---|---|---|
| `background` | #FAFAF8 | Page background (warm ivory) |
| `surface` | #FFFFFF | Cards, elevated elements |
| `foreground` | #1C1917 | Primary text (warm charcoal) |
| `muted-foreground` | #57534E | Secondary text (warm stone) |
| `border` | #E7E5E0 | Borders, dividers |
| `muted` | #F3F1ED | Subtle backgrounds (logo bar) |

**Dark mode:**
| Token | Value | Usage |
|---|---|---|
| `background` | #121110 | Page background (warm near-black) |
| `surface` | #1C1A18 | Cards, elevated elements |
| `foreground` | #F5F2ED | Primary text (warm cream) |
| `muted-foreground` | #A8A29E | Secondary text |
| `border` | #2C2926 | Borders, dividers |
| `muted` | #1A1816 | Subtle backgrounds |

**Accents (both themes):**
| Token | Value | Usage |
|---|---|---|
| `accent` | #33C3F0 | Primary accent — CTAs, links, active states |
| `accent-secondary` | #D043E6 | Secondary accent — highlights, nonprofit color |

### Removed Patterns

These are deleted, not refactored:
- `.glass-card` class (bg-white/5 backdrop-blur)
- `.heading-gradient` class (gradient text)
- `.btn-primary` class (replaced by design tokens on Button component)
- Decorative blur orbs (bg-velocity-accent/20 blur-3xl divs)
- `velocity-dark`, `velocity-light`, `velocity-muted` color tokens (replaced by semantic tokens)
- `velocity-accent` renamed to `accent` in the semantic system

### Layout Principles

- Left-aligned text by default. Center only for short labels and CTAs.
- No section uses the same layout pattern as another on the same page.
- Dividers (1px borders) and whitespace create structure — not cards.
- Varied vertical spacing between sections (not uniform `py-20` everywhere).

## Phase 1: Design System

### Files Modified

**`tailwind.config.ts`:**
- Remove `velocity` color namespace
- Update CSS variable references to new semantic tokens
- Add `fontFamily` config: `display: ['Plus Jakarta Sans', ...]`, `body: ['Source Serif 4', ...]`
- Keep existing animations (`fade-up`, `fade-in`) — they're fine
- Add `accent-secondary` color token

**`src/index.css`:**
- Replace `:root` CSS variables with new light-mode palette
- Add `.dark` class variables for dark mode palette
- Delete `.glass-card`, `.heading-gradient`, `.btn-primary` custom classes
- Update `body` base styles to use new tokens
- Add font-smoothing for serif text

**`index.html`:**
- Add Google Fonts `<link>` for Plus Jakarta Sans and Source Serif 4
- Add `class="light"` to `<html>` (or no class — light is default)

### Token Migration

Old → New mapping for existing component references:
| Old | New |
|---|---|
| `bg-velocity-dark` | `bg-background` |
| `text-velocity-light` | `text-foreground` |
| `text-velocity-accent` | `text-accent` |
| `text-velocity-muted` | `text-muted-foreground` |
| `border-white/10` | `border-border` |
| `bg-white/5` | `bg-surface` |

## Phase 2: Layout Shell

### Header (`src/components/landing/Header.tsx`)

**Current:** Sticky, glass effect (bg-black/20 backdrop-blur-md), logo left, nav + CTA right. Dropdown wraps `<Link>` inside `<DropdownMenuItem>` (accessibility bug).

**New design:**
- Clean white/surface background with subtle bottom border. No glass effect.
- Logo left, nav center or right, dark CTA button right.
- Fix dropdown: use `DropdownMenuItem asChild` pattern with `<Link>` to eliminate nested interactive elements.
- On scroll: optionally add subtle shadow (not blur).
- Dark mode: surface background with border-border bottom.

**CTA button style:** Dark fill (`bg-foreground text-background`) — not gradient, not cyan. This is the "Contact Us" button. Accent color reserved for inline links and secondary actions.

### Footer (`src/components/landing/Footer.tsx`)

**Current:** 4-column grid on velocity-dark with gradient divider.

**New design:**
- Near-black background (#121110 / dark surface).
- 4-column grid: Company info (wider) | Solutions | Company | Resources.
- Warm muted text, subtle borders.
- Certification badges in footer bar.
- No gradient divider — 1px border-border line.

### RootLayout (`src/components/layout/RootLayout.tsx`)

- Add `ThemeProvider` from `next-themes` (already installed).
- Wrap app in provider with `attribute="class"`, `defaultTheme="light"`.
- Add theme toggle button (sun/moon icon) in header.

### DiscoveryButton (`src/components/ui/DiscoveryButton.tsx`)

**Bug fix:** Replace `<a href={url} target="_blank">` with React Router `<Link to={url}>` for internal routes. Only use `target="_blank"` when `url` starts with `http`.

**Style update:** Use `bg-foreground text-background` (dark button on light, light button on dark). Remove gradient.

## Phase 3: Homepage (`src/pages/Index.tsx`)

### Section 1: Hero

**Layout:** Two-column asymmetric (content 60% / stats strip 40%).

**Left column:**
- Eyebrow label: "AI & Automation Consulting" (uppercase, small, accent color)
- H1: "Stop hiring for work machines should do." (Plus Jakarta Sans 800, large fluid size)
- Body: Source Serif 4, muted-foreground color
- Two buttons: Primary dark ("Book a Discovery Call"), secondary outline ("Calculate Savings")

**Right column:**
- Dark stats strip (bg-foreground, inverted text): 3 key metrics (85% time saved, $2.4M client savings, 40+ projects)
- Stacked vertically with dividers

**Mobile:** Stack vertically — headline, body, buttons, then stats strip full-width.

### Section 2: Logo Bar

Subtle `bg-muted` band. "Trusted by" label + client names in muted-foreground. Names as text, not logos (unless logos are available).

### Section 3: Featured Case Study

**Layout:** Two-column (narrative left, metrics grid right).

- Left: H2 as result statement ("GovBrokers cut processing time by 85%..."), body in Source Serif 4, "Read the full story →" link in accent color.
- Right: 2x2 grid of metric cards (surface background, border, large number + label).

### Section 4: How We Work

**Layout:** 3-column with vertical dividers between columns (not cards).

- Each column: Large faded number (01/02/03) in border color, bold title, Source Serif 4 body text.
- Section header has title left, description right (asymmetric).

### Section 5: Dual Audience

**Layout:** Two-column split with vertical divider.

- Left: "For Businesses" (cyan accent label), headline, body.
- Right: "For Nonprofits" (purple accent label), headline, body.
- No cards — just text with the divider creating the split.

### Section 6: CTA

**Layout:** Dark band (bg-foreground), horizontal flex.

- Left: H2 + supporting copy.
- Right: Two buttons (accent primary, outline secondary).
- Copy: "Ready to move faster?" / "15-minute call. No pitch deck."

### Spacing Rhythm

Not uniform. Approximate vertical padding per section:
- Hero: `pt-24 pb-0` (flows into logo bar)
- Logo bar: `py-6`
- Case study: `py-16`
- How we work: `py-16`
- Dual audience: `py-16`
- CTA: `py-12`

The point is variation — tighter for simple sections, more generous for complex ones.

## Animation

Keep existing `fade-up` and `fade-in` animations. Apply sparingly:
- Hero headline: `animate-fade-up`
- Stats strip: `animate-fade-up` with slight delay
- Case study metrics: staggered `animate-fade-up`

No new animations needed. The design's impact comes from typography and layout, not motion.

## Accessibility Fixes

1. **Focus ring:** Change `--ring` CSS variable to accent color (#33C3F0) — visible on both light and dark backgrounds.
2. **Header dropdown:** Use `DropdownMenuItem asChild` with `<Link>` to fix nested interactive elements.
3. **DiscoveryButton:** Use `<Link>` for internal routes, `<a>` only for external URLs.
4. **Reduced motion:** Ensure `fade-up`/`fade-in` respect `prefers-reduced-motion` via Tailwind's `motion-safe:` prefix or CSS media query.

## What This Does NOT Change

- Routing structure (App.tsx routes unchanged)
- shadcn-ui primitives in `src/components/ui/` (they inherit new tokens automatically via CSS variables)
- Data files (`src/data/`)
- Non-homepage pages (they get new colors/fonts from token changes but keep their current layout)
- External integrations (Needle AI, GHL forms, GPT Engineer)
- Build/deploy configuration
