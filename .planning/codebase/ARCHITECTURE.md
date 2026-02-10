# Architecture

**Analysis Date:** 2026-02-10

## Pattern Overview

**Overall:** Single-Page Application (SPA) with flat client-side routing

**Key Characteristics:**
- Static marketing site with no backend API -- all data is in-memory TypeScript arrays
- Flat route structure: every page is a direct child of a single layout wrapper
- Component-driven UI built on shadcn-ui primitives (Radix UI)
- No server-side rendering; Vite builds a static bundle deployed to Netlify
- External forms and widgets are embedded via iframes (GoHighLevel / LeadConnector, n8n)
- A dormant Next.js-style `middleware.ts` exists at the project root for bot tracking (uses `NextRequest`/`NextResponse` imports) but is **not active** in the Vite build pipeline

## Layers

**Presentation Layer (Pages):**
- Purpose: Top-level route components; each renders a full page of content
- Location: `src/pages/`
- Contains: Page components that compose UI from primitives and inline JSX sections
- Depends on: `src/components/`, `src/data/`, `src/utils/`, `src/hooks/`
- Used by: `src/App.tsx` route definitions

**Shared Components Layer:**
- Purpose: Reusable UI elements shared across pages
- Location: `src/components/`
- Contains: Layout shell, navigation, feature-specific component groups, shadcn-ui primitives
- Depends on: `src/components/ui/`, `src/hooks/`, `src/data/`, `src/lib/utils.ts`
- Used by: Page components

**UI Primitives Layer (shadcn-ui):**
- Purpose: Low-level accessible UI components generated from shadcn CLI
- Location: `src/components/ui/`
- Contains: ~50 Radix UI wrapper components (button, dialog, toast, tabs, etc.)
- Depends on: `@radix-ui/*` packages, `src/lib/utils.ts`
- Used by: All other component layers
- **Rule:** Do not edit these files directly; regenerate with `npx shadcn-ui add <component>`

**Data Layer:**
- Purpose: Static data definitions (no API, no database)
- Location: `src/data/`
- Contains: In-memory TypeScript arrays with typed interfaces
- Depends on: Nothing
- Used by: Page and component layers
- Key files: `src/data/blogPosts.ts`, `src/data/industryTools.ts`

**Utilities Layer:**
- Purpose: Pure helper functions and shared logic
- Location: `src/lib/` and `src/utils/`
- Contains: `cn()` class merge utility (`src/lib/utils.ts`), savings calculator logic (`src/utils/savingsCalculator.ts`)
- Depends on: `clsx`, `tailwind-merge`
- Used by: All component layers

**Hooks Layer:**
- Purpose: Reusable React hooks for cross-cutting concerns
- Location: `src/hooks/`
- Contains: Mobile detection, toast management, contact popup state
- Depends on: React, `src/contexts/`
- Used by: Components across the application

**Context Layer:**
- Purpose: Global React state via Context API
- Location: `src/contexts/`
- Contains: `ContactPopupContext` -- single context for managing a contact popup
- Depends on: `src/hooks/useContactPopup.ts`
- Used by: `src/components/ui/ContactPopupTrigger.tsx`, any component needing popup control

**Background Jobs Layer (Trigger.dev):**
- Purpose: Placeholder for server-side background tasks
- Location: `src/trigger/`
- Contains: A single example "hello-world" task
- Depends on: `@trigger.dev/sdk`
- Used by: Not currently used in production; configured via `trigger.config.ts`

## Data Flow

**Page Rendering:**

1. `index.html` loads `src/main.tsx` which renders `<App />`
2. `App` wraps everything in `QueryClientProvider > TooltipProvider > BrowserRouter`
3. `<ScrollToTop />` resets scroll position on route changes
4. `<RootLayout />` renders `<Header />`, `<Outlet />` (matched page), `<Footer />`
5. The matched page component renders, pulling static data from `src/data/` as needed

**Blog Post Navigation:**

1. `src/pages/Blog.tsx` imports `blogPosts` array from `src/data/blogPosts.ts`
2. Renders cards linking to `/blog/:id`
3. `src/components/blog/BlogPost.tsx` reads `:id` param via `useParams()`
4. Looks up post in `blogPosts` array by numeric ID
5. Renders post or falls back to `<NotFound />`

**Industry Tools Filtering:**

1. `src/pages/IndustryTools.tsx` imports `industries` and `categories` from `src/data/industryTools.ts`
2. User selects an industry card -> `selectedIndustry` state updates
3. User optionally filters by category -> `selectedCategory` state updates
4. `getFilteredTools()` derives filtered list from state
5. Tool click opens `<ToolModal />` with the tool's details
6. "Download Guide" opens `<LeadCaptureModal />` (form submission is simulated, not connected to a backend)

**Savings Calculator:**

1. `src/pages/SavingsCalculator.tsx` manages `inputs` state (4 slider values)
2. On input change, calls `calculateSavings()` from `src/utils/savingsCalculator.ts`
3. Results state updates and passes to `<ResultsDisplay />`
4. Calculation is pure: `(employees * hours * automationPct * rate)` projected weekly and annually

**Contact / Lead Capture:**

1. Contact forms are external GoHighLevel iframes embedded directly in page JSX
2. `src/pages/Contact.tsx` embeds an iframe from `api.leadconnectorhq.com`
3. `src/components/ui/ContactPopup.tsx` embeds a popup variant of the same form
4. `src/pages/OnboardingForm.tsx` embeds an n8n form from `n8n.services.hiprag.com`
5. No form data is handled by the React application itself

**State Management:**
- **Local state only:** All interactive state uses `useState` / `useEffect` within individual page components
- **One global context:** `ContactPopupContext` for popup visibility across pages (currently not wired into the RootLayout provider tree in `App.tsx`)
- **React Query:** `QueryClientProvider` is mounted but no queries are defined -- it exists as infrastructure for future API integration
- **No Redux, Zustand, or other state management libraries**

## Key Abstractions

**DiscoveryButton:**
- Purpose: Reusable CTA button linking to the contact page (or custom URL)
- Examples: `src/components/ui/DiscoveryButton.tsx`
- Pattern: Accepts optional `text`, `url`, `className` props; renders a styled `<Button asChild>` with an anchor tag
- Used on: Index, SavingsCalculator, case study pages

**Glass Card:**
- Purpose: Consistent translucent card styling across the site
- Pattern: CSS utility class `.glass-card` defined in `src/index.css` applying `bg-white/5 backdrop-blur-md border border-white/10 rounded-lg shadow-lg`
- Used on: Nearly every page for content sections

**Heading Gradient:**
- Purpose: Brand-consistent gradient text for all page headings
- Pattern: CSS utility class `.heading-gradient` applying `bg-gradient-to-r from-velocity-accent to-velocity-light bg-clip-text text-transparent`
- Used on: All page titles and section headings

**ContactPopup System:**
- Purpose: Exit-intent and timed popup for lead capture
- Files: `src/hooks/useContactPopup.ts`, `src/contexts/ContactPopupContext.tsx`, `src/hooks/useContactPopupContext.ts`, `src/components/ui/ContactPopup.tsx`, `src/components/ui/ContactPopupTrigger.tsx`
- Pattern: Hook (`useContactPopup`) manages visibility with auto-show delay and mouse-leave detection; Context wraps the hook for app-wide consumption; `ContactPopupTrigger` renders a button that calls `showPopup()`

## Entry Points

**Browser Entry:**
- Location: `index.html` -> `src/main.tsx`
- Triggers: Page load in browser
- Responsibilities: Mounts React root to `#root` div, imports global CSS

**App Root:**
- Location: `src/App.tsx`
- Triggers: Rendered by `main.tsx`
- Responsibilities: Configures providers (QueryClient, Tooltip, Toast, Router), defines all routes

**Trigger.dev Entry:**
- Location: `trigger.config.ts` -> `src/trigger/example.ts`
- Triggers: Trigger.dev runtime (separate from browser)
- Responsibilities: Background job execution (currently only a hello-world placeholder)

## Error Handling

**Strategy:** Minimal -- relies on React's default error boundaries (none explicitly defined) and component-level null checks

**Patterns:**
- **404 Route:** `src/pages/NotFound.tsx` catches unmatched routes via `<Route path="*">` and logs to `console.error`
- **Blog Post Not Found:** `src/components/blog/BlogPost.tsx` renders `<NotFound />` if blog post ID does not match any entry in the data array
- **No try/catch blocks:** No async operations in the client code require error handling (forms are external iframes)
- **No error boundary components:** A React error boundary is not implemented

## Cross-Cutting Concerns

**Logging:** `console.error` for 404s only. No structured logging framework.

**Validation:** Not applicable for the client-side SPA. Form validation is handled by external iframe forms (GoHighLevel, n8n). Zod and react-hook-form are installed as dependencies but not actively used in current code.

**Authentication:** None. The site is fully public with no auth layer.

**SEO:** `react-helmet` is used on `src/pages/IndustryTools.tsx` for dynamic meta tags. Other pages rely on the static `<title>` and `<meta>` in `index.html`. The SPA catch-all redirect in `public/_redirects` ensures Netlify serves `index.html` for all routes.

**Analytics / Tracking:**
- Needle AI chat widget loaded via CDN in `index.html`
- Lovable/GPTEngineer script loaded in `index.html` (`gptengineer.js`)
- The dormant `middleware.ts` (Next.js-style) contains bot detection and Supabase logging, but this is **not executed** by the Vite runtime

---

*Architecture analysis: 2026-02-10*
