# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

10x Velocity is a React SPA marketing website for an AI & automation consulting firm. It was originally scaffolded via the Lovable platform and is deployed to Netlify. The site showcases services, case studies, industry tools, a savings calculator, and a blog.

## Commands

```bash
npm run dev        # Start dev server on port 8080
npm run build      # Production build to dist/
npm run build:dev  # Development build
npm run lint       # ESLint
npm run preview    # Preview production build locally
```

No test framework is configured.

## Tech Stack

- **React 18** with **TypeScript** via **Vite** (SWC plugin)
- **Tailwind CSS** with HSL CSS variables for theming
- **shadcn-ui** (Radix UI primitives) — configured in `components.json`
- **React Router v6** for client-side routing
- **React Query** for async state
- **React Hook Form** + **Zod** for form validation
- **Trigger.dev** for background jobs (`src/trigger/`)

## Path Aliases

`@` maps to `./src` (configured in both `vite.config.ts` and `tsconfig.json`). All imports use this alias:

```ts
import { Button } from "@/components/ui/button";
```

## Architecture

**Routing:** All routes are defined in `src/App.tsx` as a flat list under a single `<RootLayout />` wrapper that provides the shared Header/Footer. There is no nested routing beyond this layout wrapper.

**Pages:** Each route maps to a component in `src/pages/`. Case study pages live in `src/pages/case-studies/`. Service-specific pages live in `src/pages/services/`.

**Components:**
- `src/components/ui/` — shadcn-ui primitives (do not edit directly; regenerate with shadcn CLI)
- `src/components/landing/` — Header, Footer, MobileMenu
- `src/components/layout/RootLayout.tsx` — wraps all pages with header/footer via `<Outlet />`
- `src/components/savings-calculator/` — calculator feature components
- `src/components/industry-tools/` — tool filtering and modal components
- `src/components/blog/` — BlogPost component (renders individual posts by `:id` param)

**Static Data:** Blog posts and industry tools are defined as in-memory arrays in `src/data/`. There is no backend API.

**Global State:** `src/contexts/ContactPopupContext.tsx` manages contact popup visibility across pages, consumed via `src/hooks/useContactPopupContext.ts`.

## Styling

Custom brand colors are defined under the `velocity` namespace in `tailwind.config.ts`:
- `velocity-dark` (#1A1F2C), `velocity-light` (#F1F1F1), `velocity-accent` (#33C3F0), `velocity-muted` (#C8C8C9)

shadcn-ui theme colors use HSL CSS variables defined in `src/index.css`. Custom animations: `fade-up`, `fade-in`.

## External Integrations

- **Needle AI widget** — loaded via CDN script in `index.html`, configured with `VITE_NEEDLE_*` env vars in `.env.local`
- **Lovable** — auto-commits from Lovable UI are reflected in this repo; `lovable-tagger` plugin tags components in dev mode
- **Netlify** — deployment target, redirect rules in `public/_redirects`

## Adding New Pages

1. Create the page component in `src/pages/`
2. Import it in `src/App.tsx` and add a `<Route>` inside the `<RootLayout />` group
