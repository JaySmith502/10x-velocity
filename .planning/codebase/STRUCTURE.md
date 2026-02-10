# Codebase Structure

**Analysis Date:** 2026-02-10

## Directory Layout

```
10x-velocity/
├── public/                       # Static assets served as-is
│   ├── lovable-uploads/          # Images uploaded via Lovable platform (logos, badges)
│   ├── _redirects                # Netlify SPA redirect rule
│   ├── favicon.ico               # Site favicon
│   ├── llms.txt                  # LLM-facing site descriptor
│   ├── og-image.png              # OpenGraph preview image
│   └── placeholder.svg           # Placeholder image
├── src/                          # Application source code
│   ├── components/               # Shared React components
│   │   ├── blog/                 # Blog feature components
│   │   ├── industry-tools/       # Industry tool explorer components
│   │   ├── landing/              # Site-wide navigation (Header, Footer, MobileMenu)
│   │   ├── layout/               # Layout wrapper (RootLayout)
│   │   ├── savings-calculator/   # Calculator feature components
│   │   ├── ui/                   # shadcn-ui primitives (~50 components)
│   │   └── ScrollToTop.tsx       # Route-change scroll reset utility component
│   ├── contexts/                 # React Context providers
│   ├── data/                     # Static data arrays (blog posts, industry tools)
│   ├── hooks/                    # Custom React hooks
│   ├── lib/                      # Shared utility functions (cn helper)
│   ├── pages/                    # Route page components
│   │   ├── case-studies/         # Individual case study pages
│   │   └── services/            # Individual service pages
│   ├── trigger/                  # Trigger.dev background job definitions
│   ├── utils/                    # Domain-specific utility functions
│   ├── App.tsx                   # Route definitions and provider tree
│   ├── index.css                 # Global styles, Tailwind directives, custom classes
│   ├── main.tsx                  # React DOM entry point
│   └── vite-env.d.ts             # Vite type declarations
├── index.html                    # HTML shell with CDN scripts
├── components.json               # shadcn-ui configuration
├── eslint.config.js              # ESLint configuration
├── middleware.ts                  # Dormant Next.js middleware (not used by Vite)
├── package.json                  # Dependencies and scripts
├── postcss.config.js             # PostCSS configuration
├── tailwind.config.ts            # Tailwind CSS configuration with brand colors
├── trigger.config.ts             # Trigger.dev project configuration
├── tsconfig.json                 # TypeScript configuration (references app + node configs)
├── tsconfig.app.json             # TypeScript app config
├── tsconfig.node.json            # TypeScript node config
├── vite.config.ts                # Vite build configuration with @ alias
├── CLAUDE.md                     # Claude Code instructions
└── SECURITY_AUDIT_REPORT.md      # Security audit documentation
```

## Directory Purposes

**`src/pages/`:**
- Purpose: One component per route, each renders a complete page
- Contains: 30 `.tsx` files, each default-exported as a React component
- Key files: `src/pages/Index.tsx` (homepage), `src/pages/Blog.tsx` (blog listing), `src/pages/IndustryTools.tsx` (tool explorer), `src/pages/SavingsCalculator.tsx` (calculator)
- Subdirectories: `case-studies/` (9 case study pages), `services/` (3 service pages)

**`src/components/ui/`:**
- Purpose: shadcn-ui generated primitives -- do NOT edit directly
- Contains: ~50 Radix UI wrapper components (accordion, button, card, dialog, toast, etc.)
- Key custom additions: `DiscoveryButton.tsx` (CTA button), `ContactPopup.tsx` (lead capture popup), `ContactPopupTrigger.tsx` (popup trigger button)
- Regenerate with: `npx shadcn-ui add <component-name>`

**`src/components/landing/`:**
- Purpose: Site-wide navigation and footer components
- Contains: `Header.tsx` (sticky nav with desktop dropdown + mobile trigger), `Footer.tsx` (4-column footer), `MobileMenu.tsx` (slide-out mobile nav)

**`src/components/layout/`:**
- Purpose: Page layout shell
- Contains: `RootLayout.tsx` -- wraps `<Header />` + `<Outlet />` + `<Footer />` for all routes

**`src/components/blog/`:**
- Purpose: Blog post detail view
- Contains: `BlogPost.tsx` -- renders individual blog post by URL param `:id`

**`src/components/savings-calculator/`:**
- Purpose: Calculator feature split into input and output components
- Contains: `InputControls.tsx` (4 slider controls), `ResultsDisplay.tsx` (savings results cards)

**`src/components/industry-tools/`:**
- Purpose: Industry tool explorer feature components
- Contains: `CategoryFilter.tsx` (category pill buttons), `IndustryCard.tsx` (industry selection card), `ToolCard.tsx` (tool display card), `ToolModal.tsx` (tool detail dialog), `LeadCaptureModal.tsx` (email capture form dialog)

**`src/data/`:**
- Purpose: Static data definitions serving as the "database" for the site
- Contains: `blogPosts.ts` (5 blog post objects with `BlogPost` interface), `industryTools.ts` (6 industries with tools, `Tool` and `Industry` interfaces, `categories` array)

**`src/hooks/`:**
- Purpose: Reusable React hooks
- Contains: `use-mobile.tsx` (viewport width detection at 768px breakpoint), `use-toast.ts` (toast notification state via reducer pattern), `useContactPopup.ts` (popup auto-show and exit-intent logic), `useContactPopupContext.ts` (typed context consumer for ContactPopupContext)

**`src/contexts/`:**
- Purpose: React Context definitions and providers
- Contains: `ContactPopupContext.tsx` (provides `isVisible`, `hasShown`, `showPopup`, `hidePopup`, `resetPopup`)

**`src/lib/`:**
- Purpose: Shared low-level utilities used by shadcn-ui components
- Contains: `utils.ts` (exports `cn()` -- merges Tailwind classes via `clsx` + `tailwind-merge`)

**`src/utils/`:**
- Purpose: Domain-specific utility functions
- Contains: `savingsCalculator.ts` (exports `calculateSavings()` with `SavingsInputs` and `SavingsResults` interfaces)

**`src/trigger/`:**
- Purpose: Trigger.dev background job task definitions
- Contains: `example.ts` (placeholder hello-world task, not used in production)

**`public/lovable-uploads/`:**
- Purpose: Images uploaded through the Lovable platform
- Contains: Brand logos (company logo in two variants), partner badges (VOSB, ESGR, Canopy), case study logos
- Generated: Yes (by Lovable platform)
- Committed: Yes

## Key File Locations

**Entry Points:**
- `index.html`: HTML shell, CDN scripts (Needle AI widget, GPTEngineer)
- `src/main.tsx`: React DOM `createRoot` mount point
- `src/App.tsx`: Route table, provider tree (QueryClient, Tooltip, Toast, BrowserRouter)

**Configuration:**
- `vite.config.ts`: Dev server (port 8080), SWC React plugin, `@` path alias, lovable-tagger (dev only)
- `tailwind.config.ts`: Brand colors under `velocity` namespace, custom animations (`fade-up`, `fade-in`), container config
- `tsconfig.json`: Path alias `@/*` -> `./src/*`, strict checks disabled (`noImplicitAny: false`, `strictNullChecks: false`)
- `components.json`: shadcn-ui settings (default style, slate base, CSS variables enabled, component aliases)
- `trigger.config.ts`: Trigger.dev project ID, task directory `./src/trigger`, retry config
- `postcss.config.js`: Tailwind + Autoprefixer
- `eslint.config.js`: ESLint with react-hooks and react-refresh plugins

**Core Logic:**
- `src/utils/savingsCalculator.ts`: Savings calculation business logic
- `src/data/blogPosts.ts`: Blog content data
- `src/data/industryTools.ts`: Industry tools data with categories

**Styling:**
- `src/index.css`: CSS variables for shadcn theme, global body styles, custom utility classes (`.glass-card`, `.btn-primary`, `.heading-gradient`)
- `tailwind.config.ts`: `velocity` color tokens, animation keyframes

**Navigation:**
- `src/components/landing/Header.tsx`: Desktop nav with services dropdown, mobile hamburger trigger
- `src/components/landing/MobileMenu.tsx`: Slide-out mobile nav with collapsible services submenu
- `src/components/landing/Footer.tsx`: 4-column footer (Company, Solutions, Resources, Legal)

**Deployment:**
- `public/_redirects`: Netlify SPA catch-all (`/* /index.html 200`)

## Naming Conventions

**Files:**
- Page components: PascalCase matching the route concept (e.g., `SavingsCalculator.tsx`, `IndustryTools.tsx`, `AIGuideCertification.tsx`)
- UI components: kebab-case for shadcn-ui generated files (e.g., `alert-dialog.tsx`, `scroll-area.tsx`)
- Custom UI components: PascalCase (e.g., `DiscoveryButton.tsx`, `ContactPopup.tsx`)
- Feature components: PascalCase (e.g., `InputControls.tsx`, `CategoryFilter.tsx`, `ToolModal.tsx`)
- Hooks: camelCase with `use` prefix (e.g., `useContactPopup.ts`, `use-mobile.tsx`, `use-toast.ts`)
- Data files: camelCase (e.g., `blogPosts.ts`, `industryTools.ts`)
- Utility files: camelCase (e.g., `savingsCalculator.ts`, `utils.ts`)

**Directories:**
- kebab-case for feature directories (e.g., `case-studies/`, `industry-tools/`, `savings-calculator/`)
- lowercase for structural directories (e.g., `pages/`, `components/`, `hooks/`, `data/`, `lib/`, `utils/`)

**Components:**
- Default exports for all components and pages
- Named exports only for `NotFound` (dual export: named + default) and shadcn hooks (`useToast`, `toast`)

**Interfaces:**
- PascalCase with descriptive names (e.g., `SavingsInputs`, `SavingsResults`, `BlogPost`, `Tool`, `Industry`)
- Props interfaces named `{Component}Props` (e.g., `InputControlsProps`, `ToolModalProps`, `MobileMenuProps`)

## Where to Add New Code

**New Page:**
1. Create the page component in `src/pages/` (PascalCase `.tsx` file)
2. Use default export
3. Import it in `src/App.tsx`
4. Add a `<Route>` inside the `<Route element={<RootLayout />}>` group
5. Add navigation links to `src/components/landing/Header.tsx` and `src/components/landing/MobileMenu.tsx` if needed
6. Add footer link to `src/components/landing/Footer.tsx` if applicable

**New Service Page:**
- Create in `src/pages/services/` (e.g., `src/pages/services/NewService.tsx`)
- Add route as `/services/new-service` in `src/App.tsx`
- Add to the Services dropdown in `Header.tsx` and `MobileMenu.tsx`

**New Case Study Page:**
- Create in `src/pages/case-studies/` (e.g., `src/pages/case-studies/ClientName.tsx`)
- Follow the existing pattern: define `results` and `solutions` arrays at module scope, render with `DiscoveryButton` CTA
- Add route as `/case-studies/client-name` in `src/App.tsx`

**New Feature Component Group:**
- Create a new directory in `src/components/` with kebab-case (e.g., `src/components/new-feature/`)
- Place related components inside with PascalCase filenames
- Import from the page component in `src/pages/`

**New Shared Component:**
- Add to `src/components/ui/` only if it is a generic, reusable UI primitive
- For feature-specific shared components, use the appropriate feature directory

**New Static Data:**
- Add a new `.ts` file in `src/data/` with a typed interface and exported array
- Follow the pattern in `src/data/blogPosts.ts`: export the interface and the data array

**New Hook:**
- Add to `src/hooks/` with `use` prefix
- For shadcn-generated hooks, use kebab-case (e.g., `use-toast.ts`)
- For custom hooks, use camelCase (e.g., `useContactPopup.ts`)

**New Utility Function:**
- Domain-specific helpers: `src/utils/` (e.g., `src/utils/savingsCalculator.ts`)
- Generic helpers used by UI components: `src/lib/` (e.g., `src/lib/utils.ts`)

**New Background Job:**
- Add a new `.ts` file in `src/trigger/` following the pattern in `src/trigger/example.ts`
- Trigger.dev config at `trigger.config.ts` auto-discovers tasks in `./src/trigger`

## Special Directories

**`public/lovable-uploads/`:**
- Purpose: Image assets uploaded via the Lovable platform
- Generated: Yes (by Lovable UI)
- Committed: Yes
- Note: Referenced by UUID filenames throughout components (e.g., `d113002f-f6b2-41b5-aa96-2057ce8f4046.png` for the company logo)

**`src/components/ui/`:**
- Purpose: shadcn-ui generated primitives
- Generated: Yes (by `npx shadcn-ui add`)
- Committed: Yes
- Note: Do not manually edit. Configuration in `components.json`.

**`dist/`:**
- Purpose: Vite production build output
- Generated: Yes (by `npm run build`)
- Committed: No (should be in `.gitignore`)

**`.trigger/`:**
- Purpose: Trigger.dev internal working directory
- Generated: Yes
- Committed: No

**`seo_audit_020926/`:**
- Purpose: SEO audit report files
- Generated: External audit
- Committed: Untracked (visible in git status)

---

*Structure analysis: 2026-02-10*
