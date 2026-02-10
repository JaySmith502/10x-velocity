# Technology Stack

**Analysis Date:** 2026-02-10

## Languages

**Primary:**
- TypeScript ^5.5.3 - All application source code (`src/**/*.ts`, `src/**/*.tsx`)

**Secondary:**
- CSS - Tailwind utility classes plus custom CSS in `src/index.css`
- HTML - Single entry point `index.html`

## Runtime

**Environment:**
- Node.js v22.11.0 (detected on dev machine, no `.nvmrc` or `.node-version` pinned)
- Browser target: ES2020 (configured in `tsconfig.app.json`)

**Package Manager:**
- npm 11.5.2 (primary, `package-lock.json` present)
- bun lockfile (`bun.lockb`) also present; `bun` is listed as a dependency in `package.json`

## Frameworks

**Core:**
- React ^18.3.1 - UI library, SPA architecture
- React DOM ^18.3.1 - DOM rendering via `createRoot` in `src/main.tsx`
- React Router DOM ^6.26.2 - Client-side routing, flat route list in `src/App.tsx`

**UI Component Library:**
- shadcn-ui (Radix UI primitives) - Configured in `components.json`, components in `src/components/ui/`
- Radix UI - Full primitive suite (accordion, dialog, dropdown, tabs, tooltip, etc.)
- Tailwind CSS ^3.4.11 - Utility-first CSS framework
- tailwindcss-animate ^1.0.7 - Animation utilities plugin

**Async State:**
- TanStack React Query ^5.56.2 - Async state management (provider configured but no active queries detected in source)

**Forms:**
- React Hook Form ^7.53.0 - Form state management
- @hookform/resolvers ^3.9.0 - Validation resolvers
- Zod ^3.23.8 - Schema validation

**Background Jobs:**
- Trigger.dev SDK ^3.3.17 - Background task runner, configured in `trigger.config.ts`

**Build/Dev:**
- Vite ^5.4.1 - Build tool and dev server
- @vitejs/plugin-react-swc ^3.5.0 - React Fast Refresh via SWC
- lovable-tagger ^1.1.3 - Component tagging in dev mode only

**Linting:**
- ESLint ^9.9.0 - Flat config in `eslint.config.js`
- typescript-eslint ^8.0.1 - TypeScript ESLint rules
- eslint-plugin-react-hooks ^5.1.0-rc.0 - React hooks linting
- eslint-plugin-react-refresh ^0.4.9 - React Refresh linting

**CSS Processing:**
- PostCSS ^8.4.47 - CSS post-processing, configured in `postcss.config.js`
- Autoprefixer ^10.4.20 - Vendor prefix automation
- @tailwindcss/typography ^0.5.15 - Typography plugin (dev dependency)

**Testing:**
- None configured. No test framework, no test files.

## Key Dependencies

**Critical:**
- `react` ^18.3.1 - Core UI framework
- `react-router-dom` ^6.26.2 - All routing depends on this
- `tailwindcss` ^3.4.11 - All styling depends on Tailwind utility classes

**UI/UX:**
- `lucide-react` ^0.462.0 - Icon library used throughout all pages
- `class-variance-authority` ^0.7.1 - Component variant management (used by shadcn-ui)
- `clsx` ^2.1.1 - Conditional class merging (used in `src/lib/utils.ts`)
- `tailwind-merge` ^2.5.2 - Tailwind class deduplication (used in `src/lib/utils.ts`)
- `sonner` ^1.5.0 - Toast notifications
- `embla-carousel-react` ^8.3.0 - Carousel component
- `recharts` ^2.12.7 - Charts (used in case studies and savings calculator)
- `react-helmet` ^6.1.0 - Document head management (SEO meta tags)
- `react-day-picker` ^8.10.1 - Date picker component
- `date-fns` ^3.6.0 - Date utility library
- `cmdk` ^1.0.0 - Command palette component
- `input-otp` ^1.2.4 - OTP input component
- `vaul` ^0.9.3 - Drawer component
- `react-resizable-panels` ^2.1.3 - Resizable panel layouts
- `sweetalert2` ^11.17.2 - Alert dialogs (listed as dependency, usage not detected in source)
- `next-themes` ^0.4.4 - Theme management (listed as dependency, may be unused)

**Infrastructure:**
- `@trigger.dev/sdk` ^3.3.17 - Background jobs SDK
- `@trigger.dev/build` ^3.3.17 - Trigger.dev build tooling (dev dependency)
- `caniuse-lite` ^1.0.30001754 - Browser compatibility data

## Configuration

**TypeScript:**
- `tsconfig.json` - Root config, references `tsconfig.app.json` and `tsconfig.node.json`
- `tsconfig.app.json` - App source config: target ES2020, strict mode OFF, `noImplicitAny: false`, `strictNullChecks: false`
- `tsconfig.node.json` - Vite config: target ES2022, strict mode ON
- Path alias: `@/*` maps to `./src/*`

**Vite:**
- `vite.config.ts` - Dev server on port 8080, SWC React plugin, lovable-tagger in dev mode
- Path alias: `@` maps to `./src`

**Tailwind:**
- `tailwind.config.ts` - Content paths: `./src/**/*.{ts,tsx}`, dark mode via class strategy
- Custom `velocity` color namespace: `velocity-dark` (#1A1F2C), `velocity-light` (#F1F1F1), `velocity-accent` (#33C3F0), `velocity-muted` (#C8C8C9)
- HSL CSS variables for shadcn-ui theming in `src/index.css`
- Custom animations: `fade-up`, `fade-in`

**ESLint:**
- `eslint.config.js` - Flat config format (ESLint 9), TypeScript + React hooks rules
- `@typescript-eslint/no-unused-vars` is OFF

**PostCSS:**
- `postcss.config.js` - Tailwind CSS + Autoprefixer

**shadcn-ui:**
- `components.json` - Style: default, base color: slate, CSS variables enabled, RSC disabled
- Aliases: `@/components`, `@/lib`, `@/hooks`, `@/components/ui`

**Trigger.dev:**
- `trigger.config.ts` - Project ID: `proj_daasglpjvdsunblagfyg`, Node runtime, max duration 3600s, retries enabled with exponential backoff (max 3 attempts), task directory: `./src/trigger`

**Environment Variables:**
- `VITE_NEEDLE_CLIENT_KEY` - Needle AI widget client key
- `VITE_NEEDLE_COLLECTION_ID` - Needle AI widget collection ID
- Stored in `.env.local` (not committed)

## Build Commands

```bash
npm run dev        # Start Vite dev server on port 8080
npm run build      # Production build to dist/
npm run build:dev  # Development build (vite build --mode development)
npm run lint       # ESLint
npm run preview    # Preview production build locally
```

## Platform Requirements

**Development:**
- Node.js 22+ (inferred from dev machine)
- npm 11+ or compatible
- `.env.local` with Needle AI credentials for Smart Bots page

**Production:**
- Static SPA deployed to Netlify
- SPA redirect rule in `public/_redirects`: `/* /index.html 200`
- No server-side rendering

---

*Stack analysis: 2026-02-10*
