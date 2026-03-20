# Visual Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the Lovable scaffold aesthetic with a premium-approachable light-mode design that communicates authority to mid-market executive buyers.

**Architecture:** Three phases executed sequentially — design system tokens (cascades to all pages), layout shell (Header/Footer/RootLayout), then homepage rewrite. No test framework exists, so verification is `npm run build` + `npm run lint` + visual check.

**Tech Stack:** React 18, TypeScript, Vite, Tailwind CSS, shadcn-ui, next-themes (already installed), Google Fonts (Plus Jakarta Sans, Source Serif 4)

**Spec:** `docs/superpowers/specs/2026-03-19-visual-redesign-design.md`

---

## File Map

### Phase 1: Design System
| Action | File | Responsibility |
|--------|------|---------------|
| Modify | `index.html` | Add Google Fonts `<link>` |
| Rewrite | `tailwind.config.ts` | New color tokens, font families, remove velocity namespace |
| Rewrite | `src/index.css` | New CSS variables for light/dark, remove glass-card/heading-gradient/btn-primary |
| Rewrite | `src/App.css` | Remove stale styles |

### Phase 2: Layout Shell
| Action | File | Responsibility |
|--------|------|---------------|
| Modify | `src/App.tsx` | Wrap in ThemeProvider, update PageLoader token |
| Modify | `src/components/layout/RootLayout.tsx` | Add ThemeProvider from next-themes |
| Rewrite | `src/components/landing/Header.tsx` | New design, fix dropdown a11y bug |
| Rewrite | `src/components/landing/MobileMenu.tsx` | New design, use semantic tokens |
| Rewrite | `src/components/landing/Footer.tsx` | New design per spec |
| Rewrite | `src/components/ui/DiscoveryButton.tsx` | Fix target="_blank" bug, new style |

### Phase 3: Homepage
| Action | File | Responsibility |
|--------|------|---------------|
| Rewrite | `src/pages/Index.tsx` | Full homepage redesign per spec (6 sections) |

### Phase 1.5: Token Migration (after Phase 1, before Phase 2)
| Action | Scope | Responsibility |
|--------|-------|---------------|
| Find-replace | 47 files, ~694 occurrences | Migrate velocity-* tokens to semantic equivalents |

---

## Task 1: Add Google Fonts to index.html

**Files:**
- Modify: `index.html:4` (inside `<head>`)

- [ ] **Step 1: Add font preconnect and stylesheet links**

Add these lines after the `<meta name="viewport">` line (line 6) in `index.html`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400&display=swap" rel="stylesheet">
```

- [ ] **Step 2: Verify file is valid**

Run: `cat index.html | head -20` — confirm links are inside `<head>`, before `</head>`.

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add Plus Jakarta Sans and Source Serif 4 font loading"
```

---

## Task 2: Rewrite tailwind.config.ts

**Files:**
- Rewrite: `tailwind.config.ts`

- [ ] **Step 1: Replace tailwind.config.ts with new design system**

```ts
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        display: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
        body: ['"Source Serif 4"', "Georgia", "serif"],
        sans: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        surface: "hsl(var(--surface))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          secondary: "hsl(var(--accent-secondary))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
```

Key changes from current:
- Removed `velocity` color namespace entirely
- Added `fontFamily` with `display`, `body`, `sans`
- Added `surface` and `accent.secondary` color tokens
- All colors reference CSS variables (theming via class swap)

- [ ] **Step 2: Verify build**

Run: `cd "/c/Users/smith/Documents/2 Projects/10x-velocity" && npm run build`
Expected: Build succeeds (CSS variable references are valid regardless of values)

- [ ] **Step 3: Commit**

```bash
git add tailwind.config.ts
git commit -m "feat: replace velocity color tokens with semantic design system"
```

---

## Task 3: Rewrite src/index.css

**Files:**
- Rewrite: `src/index.css`

- [ ] **Step 1: Replace index.css with new light/dark theme variables**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Light mode (default) — warm tinted neutrals */
    --background: 40 20% 98%;       /* #FAFAF8 warm ivory */
    --surface: 0 0% 100%;           /* #FFFFFF white surface */
    --foreground: 20 14% 10%;       /* #1C1917 warm charcoal */
    --muted: 30 14% 94%;            /* #F3F1ED subtle bg */
    --muted-foreground: 25 8% 32%;  /* #57534E warm stone */
    --border: 30 10% 89%;           /* #E7E5E0 warm edge */
    --input: 30 10% 89%;
    --ring: 195 86% 57%;            /* #33C3F0 cyan accent */

    --card: 0 0% 100%;
    --card-foreground: 20 14% 10%;
    --popover: 0 0% 100%;
    --popover-foreground: 20 14% 10%;

    --primary: 20 14% 10%;          /* foreground as primary */
    --primary-foreground: 40 20% 98%;
    --secondary: 30 14% 94%;
    --secondary-foreground: 20 14% 10%;

    --accent: 195 86% 57%;          /* #33C3F0 cyan */
    --accent-foreground: 0 0% 100%;
    --accent-secondary: 290 75% 55%; /* #D043E6 purple */

    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 100%;

    --radius: 0.5rem;
  }

  .dark {
    /* Dark mode — warm near-black */
    --background: 20 8% 7%;         /* #121110 */
    --surface: 20 8% 10%;           /* #1C1A18 */
    --foreground: 30 14% 95%;       /* #F5F2ED warm cream */
    --muted: 20 8% 9%;              /* #1A1816 */
    --muted-foreground: 25 5% 64%;  /* #A8A29E */
    --border: 20 8% 16%;            /* #2C2926 */
    --input: 20 8% 16%;
    --ring: 195 86% 57%;

    --card: 20 8% 10%;
    --card-foreground: 30 14% 95%;
    --popover: 20 8% 10%;
    --popover-foreground: 30 14% 95%;

    --primary: 30 14% 95%;
    --primary-foreground: 20 8% 7%;
    --secondary: 20 8% 16%;
    --secondary-foreground: 30 14% 95%;

    --accent: 195 86% 57%;
    --accent-foreground: 0 0% 100%;
    --accent-secondary: 290 75% 55%;

    --destructive: 0 62% 50%;
    --destructive-foreground: 0 0% 100%;
  }

  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground font-sans antialiased;
  }

  /* Respect reduced motion */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
}

/* Fix duplicate H1 from n8n chat widget */
.chat-layout .chat-header h1 {
  font-size: inherit;
  font-weight: inherit;
  margin: 0;
  display: inline;
}
```

Key changes:
- Removed `.glass-card`, `.heading-gradient`, `.btn-primary`
- Light mode is default `:root`, dark mode is `.dark` class
- All neutrals warm-tinted (HSL hues 20-40)
- Body uses `font-sans` (Plus Jakarta Sans via tailwind config)
- Added `prefers-reduced-motion` media query
- Kept chat widget H1 fix (still needed)

- [ ] **Step 2: Rewrite src/App.css**

```css
#root {
  max-width: 100%;
  margin: 0 auto;
}
```

Removed: `text-align: center` (was centering everything), `.mobile-menu` hard-coded color, unused `logo-spin` animation.

- [ ] **Step 3: Verify build**

Run: `cd "/c/Users/smith/Documents/2 Projects/10x-velocity" && npm run build`
Expected: Build succeeds. Site will look broken (velocity-* classes no longer exist) — that's expected, we fix it in the next task.

- [ ] **Step 4: Commit**

```bash
git add src/index.css src/App.css
git commit -m "feat: light/dark theme CSS variables, remove glass-card and gradient-text"
```

---

## Task 4: Global Token Migration

**Files:**
- Modify: ~47 .tsx files across `src/`

This is a bulk find-and-replace. The velocity-* tokens no longer exist in tailwind config, so every reference must be replaced with semantic equivalents.

- [ ] **Step 1: Run these replacements across all .tsx files in src/**

| Find | Replace With |
|------|-------------|
| `bg-velocity-dark` | `bg-background` |
| `text-velocity-light` | `text-foreground` |
| `text-velocity-accent` | `text-accent` |
| `text-velocity-muted` | `text-muted-foreground` |
| `border-velocity-accent` | `border-accent` |
| `bg-velocity-accent` | `bg-accent` |
| `border-velocity-accent/20` | `border-accent/20` |
| `bg-velocity-accent/20` | `bg-accent/20` |
| `bg-velocity-accent/10` | `bg-accent/10` |

Also replace hard-coded colors that should be tokens:
| Find | Replace With |
|------|-------------|
| `bg-[#1A1F2C]` | `bg-background` |
| `text-[#151A24]` | `text-foreground` |
| `bg-[#151A24]` | `bg-foreground` |
| `border-white/10` | `border-border` |
| `bg-white/5` | `bg-surface` |
| `bg-white/10` | `bg-muted` |
| `bg-black/20` | `bg-muted` |
| `bg-black/70` | `bg-foreground/70` |

Use `sed` or editor find-replace for bulk operation. Run across all `.tsx` files in `src/`.

**Important:** Do NOT modify files inside `src/components/ui/` (shadcn primitives) — they use the semantic token system (`bg-primary`, `text-foreground`) already and don't reference velocity-* tokens, except `slider.tsx` which has a few references.

- [ ] **Step 2: Handle remaining glass-card and heading-gradient class references**

Search for any remaining `glass-card` or `heading-gradient` class usage:

```bash
grep -r "glass-card\|heading-gradient\|btn-primary" src/ --include="*.tsx" -l
```

For each file found, replace:
- `glass-card` → `bg-surface border border-border rounded-lg` (or remove if the element shouldn't be a card)
- `heading-gradient` → remove the class entirely (headings use `text-foreground` now)
- `btn-primary` → remove (buttons use component variants)

- [ ] **Step 3: Handle gradient button styles in components**

Search for inline gradient styles that need replacing:

```bash
grep -r "bg-gradient-to-r from-velocity" src/ --include="*.tsx" -l
```

Replace gradient button classes like `bg-gradient-to-r from-velocity-accent to-velocity-light text-[#151A24]` with `bg-foreground text-background`.

- [ ] **Step 4: Verify build**

Run: `cd "/c/Users/smith/Documents/2 Projects/10x-velocity" && npm run build`
Expected: Build succeeds with no Tailwind warnings about unknown classes.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: migrate all velocity-* tokens to semantic design system"
```

---

## Task 5: DiscoveryButton Bug Fix + Redesign

**Files:**
- Rewrite: `src/components/ui/DiscoveryButton.tsx`

- [ ] **Step 1: Rewrite DiscoveryButton**

```tsx
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface DiscoveryButtonProps {
  className?: string;
  text?: string;
  url?: string;
}

const DiscoveryButton: React.FC<DiscoveryButtonProps> = ({
  className,
  text = "Contact Us",
  url = "/contact",
}) => {
  const isExternal = url.startsWith("http");

  return (
    <Button
      asChild
      className={`bg-foreground text-background font-semibold hover:bg-foreground/90 transition-colors ${className ?? ""}`}
    >
      {isExternal ? (
        <a href={url} target="_blank" rel="noopener noreferrer">
          {text} <ArrowRight className="w-4 h-4" />
        </a>
      ) : (
        <Link to={url}>
          {text} <ArrowRight className="w-4 h-4" />
        </Link>
      )}
    </Button>
  );
};

export default DiscoveryButton;
```

Fixes:
- Uses `<Link>` for internal URLs (no more `target="_blank"` on `/contact`)
- Uses `<a>` only for external URLs
- Style: dark fill button (`bg-foreground text-background`), no gradient
- Default text changed to "Contact Us"

- [ ] **Step 2: Verify build**

Run: `cd "/c/Users/smith/Documents/2 Projects/10x-velocity" && npm run build`

- [ ] **Step 3: Commit**

```bash
git add src/components/ui/DiscoveryButton.tsx
git commit -m "fix: DiscoveryButton uses Link for internal routes, removes gradient"
```

---

## Task 6: Header Redesign

**Files:**
- Rewrite: `src/components/landing/Header.tsx`

- [ ] **Step 1: Rewrite Header with new design and a11y fix**

```tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, ChevronDown, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import DiscoveryButton from "@/components/ui/DiscoveryButton";
import MobileMenu from "./MobileMenu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const serviceLinks = [
  { to: "/services", label: "All Services" },
  { to: "/services/data-cleaning", label: "Data Cleaning" },
  { to: "/services/phone-voice-agents", label: "Phone Voice Agents" },
  { to: "/services/smart-bots", label: "Smart Bots" },
  { to: "/power-automate", label: "Power Automate" },
  { to: "/lexi-file", label: "Lexi-File" },
  { to: "/services/ai-workshops", label: "AI Workshops" },
  { to: "/prototypes", label: "Rapid Prototypes" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="border-b border-border bg-background/80 backdrop-blur-sm z-50 sticky top-0">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="hidden md:flex items-center">
              <img
                src="/lovable-uploads/d113002f-f6b2-41b5-aa96-2057ce8f4046.webp"
                alt="10x Velocity Logo"
                className="h-8 w-auto"
                width={400}
                height={242}
              />
            </Link>

            <button
              className="md:hidden text-muted-foreground hover:text-foreground p-2 -ml-2"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-6">
              <DropdownMenu>
                <DropdownMenuTrigger className="text-muted-foreground hover:text-foreground transition-colors font-semibold text-sm flex items-center gap-1 focus:outline-none">
                  Services <ChevronDown className="w-3.5 h-3.5" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-surface border-border text-foreground min-w-[200px]">
                  {serviceLinks.map((link) => (
                    <DropdownMenuItem key={link.to} asChild>
                      <Link to={link.to} className="w-full cursor-pointer">
                        {link.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors font-semibold text-sm">
                About
              </Link>
              <Link to="/case-studies" className="text-muted-foreground hover:text-foreground transition-colors font-semibold text-sm">
                Case Studies
              </Link>
              <Link to="/savings-calculator" className="text-muted-foreground hover:text-foreground transition-colors font-semibold text-sm">
                Calculator
              </Link>
            </nav>

            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle theme"
            >
              <Sun className="w-4 h-4 hidden dark:block" />
              <Moon className="w-4 h-4 block dark:hidden" />
            </button>

            <DiscoveryButton className="text-sm hidden sm:inline-flex" />
          </div>
        </div>
      </div>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
};

export default Header;
```

Key changes:
- `DropdownMenuItem asChild` with `<Link>` (fixes nested interactive element a11y bug)
- Service links extracted to array (DRY)
- Theme toggle button (sun/moon)
- Semantic tokens throughout (no hard-coded colors)
- Clean white background with subtle border, no glass effect
- Reduced logo dimensions to match display size

- [ ] **Step 2: Verify build**

Run: `cd "/c/Users/smith/Documents/2 Projects/10x-velocity" && npm run build`

- [ ] **Step 3: Commit**

```bash
git add src/components/landing/Header.tsx
git commit -m "feat: redesign header with theme toggle, fix dropdown a11y"
```

---

## Task 7: MobileMenu Redesign

**Files:**
- Rewrite: `src/components/landing/MobileMenu.tsx`

- [ ] **Step 1: Rewrite MobileMenu with semantic tokens**

```tsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { X, ChevronDown, ChevronUp } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const serviceLinks = [
  { to: "/services", label: "All Services" },
  { to: "/services/data-cleaning", label: "Data Cleaning" },
  { to: "/services/phone-voice-agents", label: "Phone Voice Agents" },
  { to: "/services/smart-bots", label: "Smart Bots" },
  { to: "/power-automate", label: "Power Automate" },
  { to: "/lexi-file", label: "Lexi-File" },
  { to: "/services/ai-workshops", label: "AI Workshops" },
  { to: "/prototypes", label: "Rapid Prototypes" },
];

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="absolute inset-0 bg-foreground/50" onClick={onClose} />

      <div className="relative w-4/5 max-w-xs h-full z-10 bg-background border-r border-border">
        <div className="flex flex-col h-full">
          <div className="p-4 flex justify-between items-center border-b border-border">
            <Link to="/" className="flex items-center" onClick={onClose}>
              <img
                src="/lovable-uploads/d113002f-f6b2-41b5-aa96-2057ce8f4046.webp"
                alt="10x Velocity Logo"
                className="h-8 w-auto"
                width={400}
                height={242}
              />
            </Link>
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground p-2"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex flex-col p-4 space-y-1">
            <div>
              <button
                className="text-foreground hover:text-accent transition-colors font-semibold py-3 flex items-center justify-between w-full text-sm"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services
                {servicesOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              {servicesOpen && (
                <div className="ml-4 space-y-1 border-l border-border pl-4">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="block text-muted-foreground hover:text-foreground transition-colors py-2 text-sm"
                      onClick={onClose}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {[
              { to: "/about", label: "About" },
              { to: "/case-studies", label: "Case Studies" },
              { to: "/savings-calculator", label: "Savings Calculator" },
              { to: "/demo", label: "Get Demo" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-foreground hover:text-accent transition-colors font-semibold py-3 text-sm"
                onClick={onClose}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-4">
              <Link
                to="/contact"
                className="block bg-foreground text-background font-semibold px-6 py-3 rounded-lg w-full text-center text-sm"
                onClick={onClose}
              >
                Contact Us
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
```

Key changes:
- All semantic tokens (no hard-coded colors)
- Service links in array (DRY, matches Header)
- Uses `<Link>` for CTA (not `<a>`)
- Lighter overlay (`bg-foreground/50` not `bg-black/70`)
- Clean white/surface background

- [ ] **Step 2: Verify build**

Run: `cd "/c/Users/smith/Documents/2 Projects/10x-velocity" && npm run build`

- [ ] **Step 3: Commit**

```bash
git add src/components/landing/MobileMenu.tsx
git commit -m "feat: redesign mobile menu with semantic tokens"
```

---

## Task 8: Footer Redesign

**Files:**
- Rewrite: `src/components/landing/Footer.tsx`

- [ ] **Step 1: Rewrite Footer per spec**

```tsx
import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-auto bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Company — wider first column */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img
                src="/lovable-uploads/d113002f-f6b2-41b5-aa96-2057ce8f4046.webp"
                alt="10x Velocity Logo"
                className="h-8 w-auto brightness-0 invert"
                width={400}
                height={242}
                loading="lazy"
              />
            </Link>
            <p className="text-background/60 text-sm leading-relaxed mb-4">
              AI & Automation Consulting
              <br />
              Louisville, KY
            </p>
            <a
              href="mailto:info@10xvelocity.ai"
              className="text-background/60 hover:text-background transition-colors text-sm"
            >
              info@10xvelocity.ai
            </a>
            <div className="mt-4">
              <a
                href="https://www.linkedin.com/company/10x-velocity"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/60 hover:text-background transition-colors inline-flex items-center gap-2 text-sm"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-background/80">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="text-background/50 hover:text-background transition-colors">All Services</Link></li>
              <li><Link to="/services/data-cleaning" className="text-background/50 hover:text-background transition-colors">Data Cleaning</Link></li>
              <li><Link to="/services/phone-voice-agents" className="text-background/50 hover:text-background transition-colors">Voice Agents</Link></li>
              <li><Link to="/services/smart-bots" className="text-background/50 hover:text-background transition-colors">Smart Bots</Link></li>
              <li><Link to="/prototypes" className="text-background/50 hover:text-background transition-colors">Rapid Prototypes</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-background/80">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-background/50 hover:text-background transition-colors">About</Link></li>
              <li><Link to="/case-studies" className="text-background/50 hover:text-background transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="text-background/50 hover:text-background transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-background/50 hover:text-background transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-background/80">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/savings-calculator" className="text-background/50 hover:text-background transition-colors">Savings Calculator</Link></li>
              <li><Link to="/industry-tools" className="text-background/50 hover:text-background transition-colors">Industry Tools</Link></li>
              <li><Link to="/programs/ai-guide-certification" className="text-background/50 hover:text-background transition-colors">AI Guide Cert</Link></li>
              <li><Link to="/privacy-policy" className="text-background/50 hover:text-background transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-background/50 hover:text-background transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-background/40 text-xs">
            © {new Date().getFullYear()} 10x Velocity. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <img
              src="/lovable-uploads/093e4cf4-8793-474f-a7d9-6ca869d392f7.webp"
              alt="VOSB Verified"
              className="h-10 w-auto opacity-60"
              width={100}
              height={100}
              loading="lazy"
            />
            <img
              src="/lovable-uploads/177aec5f-3604-4fb9-aac0-ec91a10d1639.webp"
              alt="ESGR"
              className="h-10 w-auto opacity-60"
              width={100}
              height={100}
              loading="lazy"
            />
            <a href="https://canopyky.org" target="_blank" rel="noopener noreferrer">
              <img
                src="/lovable-uploads/1078ef2b-dcf2-4e80-8022-0643ec9653ed.webp"
                alt="Canopy Certified"
                className="h-10 w-auto opacity-60"
                width={100}
                height={100}
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```

Key changes:
- Dark footer uses `bg-foreground text-background` (inverted, works in both themes)
- Removed gradient divider
- Opacity-based text hierarchy (background/80, /50, /40)
- Smaller, properly-dimensioned badge images
- Logo with `brightness-0 invert` for dark background
- No more velocity-* tokens

- [ ] **Step 2: Verify build**

Run: `cd "/c/Users/smith/Documents/2 Projects/10x-velocity" && npm run build`

- [ ] **Step 3: Commit**

```bash
git add src/components/landing/Footer.tsx
git commit -m "feat: redesign footer with inverted theme, semantic tokens"
```

---

## Task 9: RootLayout + ThemeProvider

**Files:**
- Modify: `src/components/layout/RootLayout.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Update RootLayout**

Replace the component (keep the useChatWidgetH1Fix hook as-is):

```tsx
import { useEffect } from "react";
import { ThemeProvider } from "next-themes";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { Outlet } from "react-router-dom";

const useChatWidgetH1Fix = () => {
  useEffect(() => {
    const fixChatH1 = (): boolean => {
      const chatH1 = document.querySelector('.chat-layout .chat-header h1');
      if (chatH1 && chatH1.parentNode) {
        const span = document.createElement('span');
        span.innerHTML = chatH1.innerHTML;
        span.className = chatH1.className;
        const style = chatH1.getAttribute('style');
        if (style) span.setAttribute('style', style);
        chatH1.parentNode.replaceChild(span, chatH1);
        return true;
      }
      return false;
    };

    if (fixChatH1()) return;

    const observer = new MutationObserver(() => {
      if (fixChatH1()) {
        observer.disconnect();
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);
};

const RootLayout = () => {
  useChatWidgetH1Fix();

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default RootLayout;
```

Changes:
- Wraps content in `ThemeProvider` (light default, class-based)
- Added `<main>` element for semantic HTML
- `flex-1` on main ensures footer stays at bottom

- [ ] **Step 2: Update PageLoader in App.tsx**

In `src/App.tsx`, update the PageLoader component (line 48-52) to use semantic tokens:

```tsx
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
  </div>
);
```

Change `border-velocity-accent` → `border-accent`.

- [ ] **Step 3: Verify build and dev server**

Run: `cd "/c/Users/smith/Documents/2 Projects/10x-velocity" && npm run build`

- [ ] **Step 4: Commit**

```bash
git add src/components/layout/RootLayout.tsx src/App.tsx
git commit -m "feat: add ThemeProvider, semantic main element, update PageLoader"
```

---

## Task 10: Homepage Redesign

**Files:**
- Rewrite: `src/pages/Index.tsx`

This is the largest task. The homepage gets a complete rewrite with 6 distinct sections per the spec.

- [ ] **Step 1: Rewrite Index.tsx**

```tsx
import { ArrowRight, Calculator } from "lucide-react";
import { Helmet } from "react-helmet";
import { helmetJsonLdProp } from "react-schemaorg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BUSINESS_DATA } from "@/schemas/organization";

const Index = () => {
  return (
    <>
      <Helmet
        script={[
          helmetJsonLdProp<any>({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": `${BUSINESS_DATA.url}#organization`,
                name: BUSINESS_DATA.name,
                url: BUSINESS_DATA.url,
                logo: { "@type": "ImageObject", url: BUSINESS_DATA.logo },
                description: BUSINESS_DATA.description,
                email: BUSINESS_DATA.email,
                sameAs: [BUSINESS_DATA.linkedIn],
                address: {
                  "@type": "PostalAddress",
                  ...BUSINESS_DATA.address,
                },
              },
              {
                "@type": "ProfessionalService",
                "@id": `${BUSINESS_DATA.url}#localbusiness`,
                name: BUSINESS_DATA.name,
                url: BUSINESS_DATA.url,
                image: BUSINESS_DATA.image,
                address: {
                  "@type": "PostalAddress",
                  ...BUSINESS_DATA.address,
                },
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "09:00",
                  closes: "17:00",
                },
              },
              {
                "@type": "WebSite",
                "@id": `${BUSINESS_DATA.url}#website`,
                url: BUSINESS_DATA.url,
                name: BUSINESS_DATA.name,
                description: "AI & Automation Consulting",
                publisher: { "@id": `${BUSINESS_DATA.url}#organization` },
              },
            ],
          }),
        ]}
      >
        <title>AI & Automation Consulting | 10x Velocity</title>
        <meta
          name="description"
          content="10x Velocity helps businesses automate workflows and leverage AI to save time and cut costs. AI consulting and automation services based in Louisville, KY."
        />
        <link rel="canonical" href="https://10xvelocity.ai/" />
        <meta property="og:title" content="AI & Automation Consulting | 10x Velocity" />
        <meta property="og:description" content="10x Velocity helps businesses automate workflows and leverage AI to save time and cut costs." />
        <meta property="og:url" content="https://10xvelocity.ai/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://10xvelocity.ai/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Hero */}
      <section className="container mx-auto px-4 pt-16 md:pt-24 pb-0">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12 max-w-6xl mx-auto">
          <div className="md:max-w-xl animate-fade-up">
            <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-4">
              AI & Automation Consulting
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] mb-6 text-foreground">
              Accelerate Your Business Growth with AI & Automation
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
              AI & automation consulting for companies ready to move faster. Based in Louisville, serving ambitious teams everywhere.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild className="bg-foreground text-background hover:bg-foreground/90 font-semibold">
                <Link to="/contact">
                  Book a Discovery Call <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-border text-foreground hover:bg-muted font-medium">
                <Link to="/savings-calculator">
                  Calculate Savings <Calculator className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Stats strip */}
          <div className="bg-foreground text-background rounded-xl p-6 md:p-8 flex md:flex-col gap-6 md:gap-8 md:min-w-[200px] animate-fade-up" style={{ animationDelay: "0.1s" }}>
            {[
              { value: "85%", label: "Time Saved" },
              { value: "$2.4M", label: "Client Savings" },
              { value: "40+", label: "Projects" },
            ].map((stat, i) => (
              <div key={stat.label} className={`text-center md:text-left ${i > 0 ? "md:pt-6 md:border-t md:border-background/15" : ""}`}>
                <div className="font-display text-3xl md:text-4xl font-extrabold">{stat.value}</div>
                <div className="text-xs text-background/50 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logo bar */}
      <section className="bg-muted py-6 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-2">
            <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">Trusted by</span>
            {["GovBrokers", "Innes & Young", "eCatalyst", "Hillcrest Partners", "Catalyst Group"].map((name) => (
              <span key={name} className="text-sm font-semibold text-muted-foreground/60">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured case study */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-6">Featured Result</p>
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
            <div className="md:flex-1">
              <h2 className="font-display text-2xl md:text-3xl font-extrabold leading-tight mb-4 text-foreground">
                GovBrokers cut processing time by 85% and saved $240K/year
              </h2>
              <p className="font-body text-base text-muted-foreground leading-relaxed mb-5">
                A government services firm drowning in manual document processing. We automated their core workflow in 6 weeks — now their team focuses on clients, not paperwork.
              </p>
              <Link to="/case-studies/govbrokers" className="text-sm font-semibold text-accent hover:underline inline-flex items-center gap-1">
                Read the full story <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3 md:gap-4 md:flex-1 w-full md:w-auto">
              {[
                { value: "85%", label: "Faster processing" },
                { value: "$240K", label: "Annual savings" },
                { value: "6 wk", label: "Implementation" },
                { value: "3 FTE", label: "Hours reclaimed" },
              ].map((metric) => (
                <div key={metric.label} className="bg-surface border border-border rounded-lg p-5">
                  <div className="font-display text-2xl md:text-3xl font-extrabold text-foreground">{metric.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-surface border-y border-border py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-10 gap-4">
              <h2 className="font-display text-2xl md:text-3xl font-extrabold text-foreground">How we work</h2>
              <p className="font-body text-sm text-muted-foreground md:max-w-xs md:text-right">
                A structured approach that moves fast without cutting corners.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              {[
                { num: "01", title: "Assess", body: "We map your current processes and identify where automation creates the most leverage." },
                { num: "02", title: "Build", body: "We implement targeted solutions — typically live within 4–8 weeks, not months." },
                { num: "03", title: "Scale", body: "We measure results and expand what works. Your team learns the systems alongside us." },
              ].map((step, i) => (
                <div
                  key={step.num}
                  className={`py-8 md:py-0 ${
                    i < 2 ? "border-b md:border-b-0 md:border-r border-border" : ""
                  } ${i === 0 ? "md:pr-10" : i === 1 ? "md:px-10" : "md:pl-10"}`}
                >
                  <div className="font-display text-5xl font-extrabold text-border mb-3">{step.num}</div>
                  <div className="font-display text-lg font-bold text-foreground mb-2">{step.title}</div>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dual audience */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="pb-10 md:pb-0 md:pr-12 border-b md:border-b-0 md:border-r border-border">
              <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">For Businesses</p>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">Scale operations without scaling headcount</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Automate repetitive tasks. Optimize workflows with AI. Free your team for strategic work that grows revenue.
              </p>
            </div>
            <div className="pt-10 md:pt-0 md:pl-12">
              <p className="text-xs font-semibold tracking-widest uppercase text-accent-secondary mb-3">For Nonprofits</p>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">Maximize impact with limited resources</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Streamline donor management, volunteer coordination, and program delivery — so you can focus on your mission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground text-background">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-extrabold mb-2">Ready to move faster?</h2>
              <p className="font-body text-sm text-background/60">
                15-minute call. No pitch deck. Just an honest look at what automation could do for you.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Button asChild className="bg-accent text-white hover:bg-accent/90 font-semibold">
                <Link to="/contact">
                  Book a Discovery Call <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-background/20 text-background hover:bg-background/10 font-medium">
                <Link to="/savings-calculator">
                  Calculate Savings
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
```

Key changes vs current:
- Left-aligned hero with asymmetric stats strip
- Bold provocative headline
- No gradient text, no glass cards, no blur orbs
- Logo bar with client names
- Featured case study with narrative + metric grid
- 3-step process with vertical dividers, not cards
- Dual audience split with accent color differentiation
- Dark CTA band with left copy / right buttons
- Font-display for headings, font-body for body text
- Varied spacing between sections (pt-16 pb-0, py-6, py-16, py-20, py-12)

- [ ] **Step 2: Verify build**

Run: `cd "/c/Users/smith/Documents/2 Projects/10x-velocity" && npm run build`
Expected: Clean build, no errors.

- [ ] **Step 3: Verify lint**

Run: `cd "/c/Users/smith/Documents/2 Projects/10x-velocity" && npm run lint`
Expected: No new lint errors.

- [ ] **Step 4: Commit**

```bash
git add src/pages/Index.tsx
git commit -m "feat: complete homepage redesign — bold momentum, light-first"
```

---

## Task 11: Final Verification

- [ ] **Step 1: Full build**

Run: `cd "/c/Users/smith/Documents/2 Projects/10x-velocity" && npm run build`
Expected: Clean build, zero errors.

- [ ] **Step 2: Start dev server and visually verify**

Run: `cd "/c/Users/smith/Documents/2 Projects/10x-velocity" && npm run dev`

Check in browser:
- [ ] Homepage loads with light background, warm neutrals
- [ ] Typography shows Plus Jakarta Sans headings, Source Serif body text
- [ ] Header has clean background, theme toggle works
- [ ] Dark mode toggle switches colors properly
- [ ] Stats strip shows dark inverted panel
- [ ] Case study section has narrative left, metrics right
- [ ] Process section has numbered steps with vertical dividers
- [ ] CTA section has dark band with cyan button
- [ ] Footer has dark background, 4-column layout
- [ ] Mobile menu opens and closes, uses correct colors
- [ ] No remaining gradient text or glass cards visible

- [ ] **Step 3: Check for stale velocity-* references**

```bash
grep -r "velocity-dark\|velocity-light\|velocity-accent\|velocity-muted\|glass-card\|heading-gradient\|btn-primary" src/ --include="*.tsx" --include="*.css"
```

Expected: Zero matches (or only in comments).

- [ ] **Step 4: Commit any cleanup**

If stale references found, fix and commit:
```bash
git add -A
git commit -m "chore: remove remaining legacy token references"
```
