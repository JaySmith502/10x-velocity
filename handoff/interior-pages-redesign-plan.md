# Handoff: Interior Pages Redesign Plan

**Date:** 2026-07-04
**Branch:** `design/homepage-impeccable-pass` (clean at handoff)
**Context:** Full-site design audit completed (via /redesign-existing-projects skill). Homepage (`src/pages/Index.tsx`) was already redesigned in the "impeccable pass" and is the reference standard — DO NOT touch it. The interior ~30 pages never adopted the new design system and this plan brings them in line.

## Reference: the new design system (already in place)

- **Theme tokens** in `src/index.css`: warm light foundation (`--background: 40 20% 98%`), warm near-black dark mode, cyan accent (`--accent: 195 86% 57%`), magenta `--accent-secondary`, AA-safe text variants `--accent-strong` / `--accent-secondary-strong`, plus `surface`, `muted`, `background-muted`, `accent-ink`.
- **Fonts** in `tailwind.config.ts`: `font-display` / `font-sans` = Schibsted Grotesk, `font-body` = Source Serif 4. Loaded in `index.html`.
- **Homepage patterns to emulate**: `bg-background` / `bg-surface` / `bg-muted` sections separated by `border-border`; `bg-foreground text-background` used ONLY for the stats strip and final CTA band (with `text-background-muted` for de-emphasized text); editorial layouts (border-top metric grids, numbered columns with dividers) instead of equal card grids; uppercase tracking-widest kicker labels in `text-accent-strong`.
- **Hard rules** (from CLAUDE.md Design Context): light mode primary; no cyan-on-dark AI templates, no glassmorphism, no gradient text, no blur orbs, no identical card grids. Accents are sharp, not dominant.

## Execution passes (in order)

### Pass 1 — Kill dark remnants (HIGH, biggest visual win, low risk)

Replace legacy dark styling with theme tokens. Pattern: dark gradient washes → `bg-background` or `bg-muted` + `border-border`; hard-coded `text-white` → `text-foreground` (or `text-background` if legitimately on a `bg-foreground` band).

1. `src/pages/SmartBots.tsx:62` — remove `bg-gradient-to-br from-background to-black` full-page wrapper → `bg-background`. Line 78: `text-white` → `text-foreground`. Lines 86–106 dev-fallback widget: replace `bg-gray-800/900/600`, `text-gray-400/500` with tokens.
2. `src/pages/OnboardingForm.tsx:32` — `min-h-screen bg-gradient-to-br from-background to-black` → `min-h-screen bg-background`.
3. Dark hero overlays with nothing under them — remove `<div className="absolute inset-0 bg-gradient-to-b from-black/60 to-background/90 z-0" />` entirely (or swap section to `bg-muted border-b border-border`):
   - `src/pages/AIGuideCertification.tsx:42-43`
   - `src/pages/AIGuideThankYou.tsx:22-23`
   - `src/pages/LunchAndLearn.tsx:39-40` (also lines 50/54/58: `bg-black/30` chips → `bg-background/80 text-foreground border border-border`)
   - `src/pages/OnboardingConfirmation.tsx:22-23`
4. `bg-foreground` full-width section bands on the same 4 pages (`AIGuideCertification.tsx:66,124,174`, `AIGuideThankYou.tsx:41`, `OnboardingConfirmation.tsx:41`, `LunchAndLearn.tsx:99`) — replace with `bg-muted` or `bg-surface` sections; if a dark band is kept for a CTA (homepage does this once), ensure children explicitly use `text-background` / `text-background-muted`.
5. `src/pages/services/DataCleaning.tsx:111` and `src/pages/Prototypes.tsx:55,111,165` — remove `bg-gradient-to-b from-transparent to-black/20` section dividers → `border-t border-border` or `bg-muted`.
6. `src/pages/LexiFile.tsx:146-164` — emerald/green guarantee block (`from-emerald-500/10`, `text-emerald-400`, emerald glow, `from-emerald-400 to-green-300 text-black` button) → `bg-accent/10 border-accent/20 text-accent-strong`, button `bg-accent text-accent-ink`. Also line 274: `hover:bg-gradient-to-r hover:from-purple-400 hover:to-white` outline-button hover → `hover:bg-muted`.

**Verify:** `npm run build` + `npm run dev`, click through each touched page in BOTH light and dark mode.

### Pass 2 — Functional bugs

1. `src/components/industry-tools/LeadCaptureModal.tsx:27-44` — submit is fake (`setTimeout` then success toast); leads go nowhere. **Ask the user where leads should go** (GHL form? Netlify Forms? email?) before wiring — don't invent a backend. If no answer available, at minimum stop claiming "will be sent to your email."
2. `src/components/ContactPopup.tsx:86,91` — `bg-white` → `bg-background`; close button `bg-gray-100 hover:bg-gray-200` → `bg-muted hover:bg-muted/80 text-foreground` (invisible in dark mode today).
3. `src/pages/IndustryTools.tsx:78-84` — "Download Full Guide" button has `className=""` (no styling, no focus ring). Use the shadcn `Button` component.
4. `src/components/landing/Header.tsx` — no active nav state. Swap `Link` → `NavLink` with `aria-current="page"` and an active style (e.g. `text-foreground` + `border-b-2 border-accent` or similar restrained marker).

### Pass 3 — Token sweep (theme-blind hard-coded colors)

- `src/components/blog/BlogPost.tsx:98` — `prose-invert prose-violet` unconditional → `prose prose-neutral dark:prose-invert`.
- `src/pages/Blog.tsx:85` and `BlogPost.tsx:53` — `hover:text-purple-400` → `hover:text-foreground` or `hover:text-accent-strong`.
- `src/components/industry-tools/IndustryCard.tsx:57` — `hover:bg-white/15` → `hover:bg-muted`.
- `src/pages/PowerAutomate.tsx:61` — `hover:bg-gray-800/50` → `hover:bg-muted`.
- `src/pages/CaseStudies.tsx:50-52` — badge colors `text-orange-300/blue-300/purple-300 bg-*-500/20` were designed for dark theme; fail contrast on light. Use token-based badges (e.g. `text-accent-strong bg-accent/10`, `text-accent-secondary-strong bg-accent-secondary/10`) or darken to -700/-800 with `dark:` variants.
- `src/pages/Packages.tsx:172` — "Most Popular" badge `bg-accent text-white` fails AA (~2.4:1) → `bg-accent text-accent-ink`.
- Final check: `grep -rE "text-white|bg-white|gray-[0-9]|black/" src/pages src/components --include=*.tsx` and clear remaining hits (except legitimate uses on brand-dark bands).

### Pass 4 — Typography pass

- Add `font-display` to every interior hero `<h1>` and section `<h2>` (currently only Index.tsx uses it). Match homepage scale: hero `text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05]`; section headings `text-2xl md:text-3xl font-extrabold`.
- `src/pages/About.tsx:34` — `text-5xl md:text-7xl` on "About Us" → homepage hero scale.
- Add `font-body` to long-form/paragraph text, especially `PrivacyPolicy.tsx` and `TermsOfService.tsx` prose wrappers.
- Kicker labels: standardize on homepage pattern `text-xs font-semibold tracking-widest uppercase text-accent-strong`.

### Pass 5 — Content honesty (needs user input — ASK FIRST)

- `src/data/blogPosts.ts` — 5 posts with fictional authors (Sarah Johnson, Michael Chen, etc.), Unsplash stock photos, all dated Apr–May 2024; posts 3–5 have NO body (routes like /blog/3 render just an excerpt). Options: (a) user supplies real posts, (b) delete stubs and keep the 2 with bodies under real attribution, (c) remove blog from nav until real. **User decision required.**
- Timezone contradiction: `src/pages/Contact.tsx:50` says EST, `src/pages/Blog.tsx:114` says PST. Company is Louisville KY → use ET everywhere.
- Legal "Last updated" dates: `PrivacyPolicy.tsx:183` (July 1, 2024), `TermsOfService.tsx:139` (June 1, 2024) — flag to user for review; don't silently bump dates on legal docs without reviewing content.
- `src/pages/AIWorkshops.tsx:162-187` and `src/pages/services/PhoneVoiceAgents.tsx:158-183` — emoji icons (📈👥🎯🔧📚 / 💸🤝🚫🚀🌐) → Lucide icons in the homepage icon treatment.
- `index.html:11` — meta description is literally "10x velocity" → copy the real description from Index.tsx Helmet.
- `public/lovable-uploads/snippet.html` — publicly served stray file; confirm with user, then delete.

### Pass 6 — Layout differentiation (largest effort, do last, optional)

- Nearly every interior page uses identical `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8` card grids + identical accordion FAQ. Break the pattern using homepage vocabulary: border-top metric lists, numbered columns with `border-r` dividers, asymmetric featured-first layouts, 2-col zig-zag.
- Priority order: Services.tsx (main hub) → LexiFile → AIWorkshops → case-study pages.
- Also: blur-orb decorations still exist on Services.tsx:58, Packages.tsx:150, DataCleaning.tsx:45 etc. — brand guidelines say NO blur orbs; remove rather than fix their positioning.
- NotFound.tsx — bare 404; add on-brand copy + links to popular pages.
- BlogPost.tsx:161 — internal "Contact Us" opens in new tab; → `<Link to="/contact">` no target.

## Working rules

- **Analysis-vs-action:** user CLAUDE.md says review ≠ implement; the user has approved implementing THIS plan, but do not install/build beyond `npm run dev` / `npm run build` / `npm run lint` verification.
- One commit per pass, focused messages. No pushing unless told.
- No test framework exists; verification = build passes + lint + manual light/dark check of touched pages.
- Match existing code style; don't refactor untouched code; don't edit `src/components/ui/*` (shadcn primitives).
- Global CLAUDE.md suggests Codex delegation for non-trivial implementation — user's call; passes 1–4 are mechanical enough to do directly.
- Site is Netlify-deployed, Lovable-scaffolded; `lovable-uploads/` asset paths are real, keep them.

## Open questions for the user

1. Where should LeadCaptureModal leads actually go? (Pass 2.1)
2. Blog: real posts, prune to real ones, or hide from nav? (Pass 5)
3. OK to delete `public/lovable-uploads/snippet.html`?
4. Is Pass 6 (layout differentiation) in scope now, or ship passes 1–5 first?
