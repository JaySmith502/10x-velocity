# Codebase Concerns

**Analysis Date:** 2026-02-10

## Tech Debt

**Hardcoded Supabase Credentials in middleware.ts:**
- Issue: `middleware.ts` at the project root contains a hardcoded Supabase URL, anon key, and project ID in plaintext. This file uses Next.js imports (`NextResponse`, `NextRequest`) despite this being a Vite/React SPA -- the middleware is not functional in the current deployment target (Netlify static hosting).
- Files: `middleware.ts`
- Impact: The Supabase anon key is committed to the repository. The entire middleware (bot tracking, rate limiting, security scan logging) does not execute because Vite does not support Next.js middleware. All bot tracking and security scan detection is non-functional.
- Fix approach: Remove `middleware.ts` entirely or migrate its functionality to a Netlify Edge Function (`netlify/edge-functions/`). Move credentials to environment variables. If bot tracking is needed, implement via Netlify Functions or a separate edge worker.

**Dead/Orphaned Next.js Middleware:**
- Issue: `middleware.ts` imports from `next/server` but this is a Vite project. The file has no effect at runtime.
- Files: `middleware.ts`
- Impact: Confusing for developers; suggests features (rate limiting, bot tracking, security scan logging) that do not actually work. The in-memory `requestCounts` Map would also not persist across serverless invocations even if ported.
- Fix approach: Delete the file. If the functionality is needed, reimplement as Netlify Edge Functions.

**LeadCaptureModal Form is a No-Op:**
- Issue: The "Download Full Guide" lead capture form in `src/components/industry-tools/LeadCaptureModal.tsx` simulates a 1-second delay then shows a success toast, but never actually sends data anywhere. The form collects name, email, and company but discards them.
- Files: `src/components/industry-tools/LeadCaptureModal.tsx` (lines 27-43)
- Impact: Users are told "Your tool guide will be sent to your email shortly" but nothing is sent. This is a broken user promise and a lost lead capture opportunity.
- Fix approach: Connect the form submission to a backend endpoint (LeadConnectorHQ, n8n webhook, or similar) and actually deliver a PDF guide.

**Blog Posts Have No Real Content:**
- Issue: Blog post detail pages only render hardcoded content for posts with `id === 1` and `id === 2`. Posts 3-5 display only the excerpt paragraph with no article body.
- Files: `src/components/blog/BlogPost.tsx` (lines 74-125), `src/data/blogPosts.ts`
- Impact: Three of five blog post detail pages are essentially empty. Users click "Read more" and see a title, excerpt, and a CTA -- no actual article content.
- Fix approach: Either add content for all posts (in data or via a CMS/markdown), or remove the non-functional posts from the listing. Consider using a content field in the `BlogPost` interface rather than hardcoding conditional JSX by ID.

**Unused ContactPopup System:**
- Issue: A full contact popup system (`ContactPopupProvider`, `ContactPopup`, `ContactPopupTrigger`, `useContactPopup`, `useContactPopupContext`) is implemented but never wired into the app. `App.tsx` does not wrap routes with `ContactPopupProvider`, and no page uses `ContactPopupTrigger`. The `DiscoveryButton` component links to `/contact` via a plain `<a>` tag instead.
- Files: `src/contexts/ContactPopupContext.tsx`, `src/hooks/useContactPopup.ts`, `src/hooks/useContactPopupContext.ts`, `src/components/ui/ContactPopup.tsx`, `src/components/ui/ContactPopupTrigger.tsx`, `src/components/ui/ContactPopup.md`
- Impact: Dead code that inflates the bundle and confuses future developers. The popup has exit-intent and timed-display features that appear intentional but are unused.
- Fix approach: Either integrate `ContactPopupProvider` in `App.tsx` and use `ContactPopupTrigger` in place of `DiscoveryButton`, or remove all popup-related files.

**React Query Initialized but Never Used:**
- Issue: `QueryClientProvider` wraps the entire app in `src/App.tsx`, but no component in the codebase uses `useQuery`, `useMutation`, or any React Query hook. The site is entirely static data with no API calls.
- Files: `src/App.tsx` (lines 5, 41, 87)
- Impact: Unnecessary bundle size (~13kb gzipped for @tanstack/react-query). No functional impact.
- Fix approach: Remove `@tanstack/react-query` dependency and the `QueryClientProvider` wrapper from `App.tsx`, unless API integration is planned imminently.

**Bun Listed as Production Dependency:**
- Issue: `"bun": "^1.3.2"` is listed in `dependencies` rather than `devDependencies` in `package.json`. Bun is a runtime/package manager, not an application dependency.
- Files: `package.json` (line 44)
- Impact: Adds unnecessary weight to production installs. Confusing for developers about the intended runtime.
- Fix approach: Move `bun` to `devDependencies` or remove it entirely (the project uses npm based on `package-lock.json`).

**Massive Unused shadcn-ui Component Library:**
- Issue: The project installs the full shadcn-ui component set (50+ components) but only uses ~15 of them. Components like `sidebar.tsx` (761 lines), `chart.tsx` (363 lines), `carousel.tsx` (260 lines), `menubar.tsx` (234 lines), `context-menu.tsx` (198 lines), `resizable.tsx`, `input-otp.tsx`, `navigation-menu.tsx`, `hover-card.tsx`, `avatar.tsx`, `checkbox.tsx`, `radio-group.tsx`, `switch.tsx`, `table.tsx`, `tabs.tsx`, `textarea.tsx`, `breadcrumb.tsx`, `collapsible.tsx`, `popover.tsx`, `progress.tsx`, `scroll-area.tsx`, `select.tsx`, `sheet.tsx`, `skeleton.tsx` are never imported outside of `src/components/ui/`.
- Files: `src/components/ui/` (30+ unused component files)
- Impact: Code clutter. Tree-shaking should exclude unused components from the production bundle, so runtime impact is minimal, but it makes the codebase harder to navigate.
- Fix approach: Remove unused component files from `src/components/ui/`. They can be re-added via `npx shadcn-ui@latest add <component>` when needed.

**Dual Lockfiles (npm + bun):**
- Issue: Both `package-lock.json` and `bun.lockb` exist in the project root.
- Files: `package-lock.json`, `bun.lockb`
- Impact: Ambiguous about which package manager is canonical. Different lockfiles can resolve different dependency versions, causing inconsistencies.
- Fix approach: Pick one package manager (npm, given the npm scripts and package-lock.json presence) and remove the other lockfile. Add the removed lockfile pattern to `.gitignore`.

**Trigger.dev Integration is Boilerplate Only:**
- Issue: The only Trigger.dev task is a "hello-world" example that logs and waits 5 seconds. The `@trigger.dev/sdk` and `@trigger.dev/build` packages are installed, and `trigger.config.ts` is configured, but no real background jobs exist.
- Files: `src/trigger/example.ts`, `trigger.config.ts`
- Impact: Unnecessary dependency weight and configuration for unused functionality.
- Fix approach: Remove the Trigger.dev dependencies, config file, and example task unless background job development is imminent.

**No Code Splitting / Lazy Loading:**
- Issue: All 25+ page components are eagerly imported in `src/App.tsx`. There is no use of `React.lazy()` or `Suspense` anywhere in the codebase.
- Files: `src/App.tsx` (lines 1-39)
- Impact: The entire application is loaded in a single bundle. For a marketing site with 25+ pages, this means users download code for all pages even when visiting only the homepage. Increases initial load time.
- Fix approach: Use `React.lazy()` for page components in `src/App.tsx` and wrap routes with `<Suspense fallback={...}>`. Prioritize eagerly loading the Index page and lazy-loading everything else.

**Inconsistent Email Addresses:**
- Issue: The contact email differs across pages. Footer uses `info@10xvelocity.ai`, Contact page and Blog page use `info@10xvelocity.com`.
- Files: `src/components/landing/Footer.tsx` (line 19), `src/pages/Contact.tsx` (line 20), `src/pages/Blog.tsx` (line 82)
- Impact: Users may email the wrong address. One domain may not receive emails.
- Fix approach: Standardize on a single email address across all pages.

**Inconsistent Business Hours:**
- Issue: Contact page says "9am-5pm EST", Blog page says "9am-5pm PST".
- Files: `src/pages/Contact.tsx` (line 23), `src/pages/Blog.tsx` (line 85)
- Impact: Conflicting information for users. The company is in Louisville, KY (Eastern time), so PST is likely incorrect.
- Fix approach: Standardize to EST/ET across all pages.

## Known Bugs

**DiscoveryButton Opens Same-Origin Links in New Tab:**
- Symptoms: `DiscoveryButton` uses `<a href={url} target="_blank">` with a default URL of `/contact`. This opens the contact page in a new tab rather than navigating within the SPA. Same-site links should use React Router `<Link>` for SPA navigation.
- Files: `src/components/ui/DiscoveryButton.tsx` (lines 17-25)
- Trigger: Click any "15 minute discovery" or "Contact Us" button across the site.
- Workaround: None; users are taken out of the SPA flow.

**Footer Uses React Router Link for External URLs:**
- Symptoms: Three links in the Footer use `<Link to="https://resources.10xvelocity.ai/...">` which is incorrect for external URLs. React Router `<Link>` is for internal routing only. These will attempt client-side navigation and fail or produce unexpected behavior.
- Files: `src/components/landing/Footer.tsx` (lines 59-61)
- Trigger: Click "Documentation", "Playbooks", or "Blog" links in the footer.
- Workaround: None; links may not work correctly.

**MobileMenu Contact Button Uses `<a>` Instead of `<Link>`:**
- Symptoms: The "Contact Us" button in the mobile menu uses `<a href="/contact">` instead of React Router `<Link>`, causing a full page reload instead of SPA navigation.
- Files: `src/components/landing/MobileMenu.tsx` (line 167)
- Trigger: Tap "Contact Us" in mobile navigation.
- Workaround: Functional but causes unnecessary full-page reload.

**BlogPost Contact Link Opens in New Tab:**
- Symptoms: The "Contact Us" CTA at the bottom of blog posts uses `<a href="/contact" target="_blank">`, opening the internal contact page in a new browser tab unnecessarily.
- Files: `src/components/blog/BlogPost.tsx` (line 132)
- Trigger: Click "Contact Us" at the bottom of any blog post.
- Workaround: None.

**Footer Copyright Year is Hardcoded to 2024:**
- Symptoms: The footer displays "2024" regardless of the current year.
- Files: `src/components/landing/Footer.tsx` (line 76)
- Trigger: View any page.
- Workaround: None.

## Security Considerations

**Hardcoded Supabase Anon Key in Source Control:**
- Risk: `middleware.ts` contains a Supabase anon key in plaintext, committed to the repository. While anon keys have limited permissions (controlled by RLS), this key could be used by anyone to insert records into `security_scans` and `ai_bot_hits` tables if RLS is not configured.
- Files: `middleware.ts` (line 6)
- Current mitigation: The `.gitignore` excludes `*.local` files, but `middleware.ts` is a regular file and is committed.
- Recommendations: Rotate the Supabase anon key. Move to environment variables. Ensure Row Level Security is configured on the Supabase tables. Delete `middleware.ts` from the repository and Git history.

**Third-Party Scripts Without Integrity Checks:**
- Risk: Three external JavaScript files are loaded without Subresource Integrity (SRI) hashes. If these CDNs are compromised, malicious code could be injected.
- Files: `index.html` (lines 11, 17), `src/components/ui/ContactPopup.tsx` (line 19)
- Current mitigation: None.
- Recommendations: Add SRI hashes where supported. Implement Content Security Policy headers via Netlify `_headers` file.

**Unsandboxed Third-Party Iframes:**
- Risk: Forms from `api.leadconnectorhq.com` and `n8n.services.hiprag.com` are embedded via iframes without `sandbox` attributes, giving embedded content full access to browser APIs.
- Files: `src/pages/Contact.tsx` (lines 42-58), `src/pages/OnboardingForm.tsx` (lines 52-59), `src/components/ui/ContactPopup.tsx` (lines 112-130)
- Current mitigation: None.
- Recommendations: Add `sandbox="allow-scripts allow-forms allow-same-origin allow-popups"` to iframes. Test thoroughly as this may break form submission.

**Missing External Links with rel="noopener noreferrer":**
- Risk: Some `target="_blank"` links lack `rel="noopener noreferrer"`, enabling potential tabnabbing attacks.
- Files: `src/pages/LunchAndLearn.tsx` (line 218), `src/components/landing/Footer.tsx` (line 90)
- Current mitigation: Most external links have the attribute.
- Recommendations: Add `rel="noopener noreferrer"` to all `target="_blank"` links.

**No Content Security Policy:**
- Risk: The site loads scripts and iframes from multiple third-party origins without CSP headers.
- Files: `public/_redirects` (only contains SPA redirect rule, no security headers)
- Current mitigation: None.
- Recommendations: Create `public/_headers` with appropriate CSP, X-Frame-Options, X-Content-Type-Options, and Referrer-Policy headers.

**GPT Engineer Script in Production:**
- Risk: `index.html` loads `https://cdn.gpteng.co/gptengineer.js` with a comment "DO NOT REMOVE THIS SCRIPT TAG". This Lovable platform script runs in production, potentially sending analytics or injecting UI elements.
- Files: `index.html` (line 17)
- Current mitigation: None.
- Recommendations: Evaluate whether this script is still needed. If the project is no longer managed via Lovable, remove it. If needed for Lovable sync, consider restricting to development only.

## Performance Bottlenecks

**No Route-Level Code Splitting:**
- Problem: All 25+ page components (~11,600 lines of TSX) are bundled into a single JavaScript file.
- Files: `src/App.tsx` (all imports at top)
- Cause: Every page is eagerly imported via static `import` statements. Vite cannot tree-shake or split unused routes.
- Improvement path: Convert page imports to `React.lazy(() => import('./pages/PageName'))` and wrap with `<Suspense>`. This alone could reduce initial bundle size by 60-70%.

**Unsized Images Loaded from External CDN:**
- Problem: Blog post images load from `images.unsplash.com` with query parameters (`?w=600&h=400&fit=crop`) but without explicit `width`/`height` attributes on the `<img>` elements, causing layout shifts (CLS).
- Files: `src/pages/Blog.tsx` (lines 31-35), `src/components/blog/BlogPost.tsx` (lines 36-40)
- Cause: Images rely on CSS (`object-cover`, fixed container height) instead of intrinsic sizing.
- Improvement path: Add explicit `width` and `height` attributes. Consider self-hosting key images or using a build-time image optimization plugin.

**No SEO Meta Tags on Most Pages:**
- Problem: Only `src/pages/IndustryTools.tsx` uses `react-helmet` for page-specific meta tags. All other pages inherit the generic `<title>` and `<meta description>` from `index.html`.
- Files: `index.html` (lines 5-8), `src/pages/IndustryTools.tsx` (lines 43-49)
- Cause: `react-helmet` is installed but not used on 24 of 25 pages.
- Improvement path: Add `<Helmet>` with unique `<title>` and `<meta name="description">` to every page component. This is critical for SEO on a marketing site.

## Fragile Areas

**Navigation Link Duplication (Header + MobileMenu):**
- Files: `src/components/landing/Header.tsx`, `src/components/landing/MobileMenu.tsx`
- Why fragile: The service dropdown links are duplicated between desktop Header and MobileMenu. Adding, removing, or renaming a service requires updating both files manually. The link lists are defined inline, not shared.
- Safe modification: Extract a shared `navLinks` constant used by both Header and MobileMenu.
- Test coverage: No tests exist. Manual verification on both desktop and mobile viewports required.

**Route Definitions Coupled to Page Imports:**
- Files: `src/App.tsx`
- Why fragile: Every new page requires both a new import statement and a new `<Route>` element. With 25+ routes, `App.tsx` is growing and easy to misconfigure (wrong path, wrong component, missing import).
- Safe modification: Consider a route configuration array that maps paths to lazy-loaded components.
- Test coverage: None. A broken route will only be caught by manual navigation.

**Static Blog Data Coupled to Hardcoded Content:**
- Files: `src/data/blogPosts.ts`, `src/components/blog/BlogPost.tsx`
- Why fragile: Blog post content is hardcoded as conditional JSX blocks keyed by `post.id`. Adding a new post requires modifying both the data file and the BlogPost component with a new `{post.id === N && (...)}` block.
- Safe modification: Add a `content` field to the `BlogPost` interface or use markdown rendering.
- Test coverage: None.

## Scaling Limits

**In-Memory Static Data:**
- Current capacity: 5 blog posts, 6 industries with ~8-10 tools each.
- Limit: All data lives in TypeScript files (`src/data/blogPosts.ts`, `src/data/industryTools.ts`). Adding more content requires code changes and redeployment.
- Scaling path: Migrate to a headless CMS (Contentful, Sanity, or even markdown files with a build-time loader) for content that changes frequently.

**Single-Bundle SPA on Netlify:**
- Current capacity: ~12K lines of source code producing a single JS bundle.
- Limit: As pages and features grow, the initial bundle will become unacceptably large for mobile users on slow connections.
- Scaling path: Implement code splitting. Consider SSG/SSR (e.g., Astro, Next.js) if SEO becomes critical for all pages.

## Dependencies at Risk

**`react-helmet` (v6.1.0):**
- Risk: `react-helmet` is unmaintained. The last release was in 2020. It does not support React 18 Streaming SSR.
- Impact: May cause issues with future React upgrades. Already generates React warnings in strict mode.
- Migration plan: Switch to `react-helmet-async` (drop-in replacement) or use Vite SSR plugin meta tag support.

**`next-themes` (v0.4.4):**
- Risk: Installed as a dependency but imported only by `src/components/ui/sonner.tsx` (a shadcn-ui primitive). This is a Next.js-specific theming library being used in a Vite project.
- Impact: Unnecessary dependency. May not function correctly outside Next.js context.
- Migration plan: Remove if theme switching is not needed, or replace with a Vite-compatible alternative.

**`sweetalert2` (v11.17.2):**
- Risk: Installed but never imported anywhere in the source code.
- Impact: Unused dependency adding ~40kb to install.
- Migration plan: Remove from `package.json`.

**Outdated `react-router-dom` (v6.26.2):**
- Risk: The existing security audit report identifies a HIGH severity XSS vulnerability via `@remix-run/router` (<=1.23.1).
- Impact: Potential XSS via open redirects.
- Migration plan: Update to react-router-dom v7.x per the security audit recommendations.

## Missing Critical Features

**No Test Framework:**
- Problem: Zero tests exist. No test runner is configured (no Jest, Vitest, Playwright, or Cypress).
- Blocks: Cannot verify regressions before deployment. No CI safety net.

**No Error Boundary:**
- Problem: The app has no React Error Boundary. An unhandled error in any component will crash the entire application with a white screen.
- Blocks: Production resilience. Any runtime error (e.g., undefined data, network failure) takes down the whole site.

**No Sitemap or robots.txt:**
- Problem: No `sitemap.xml` or `robots.txt` exists in `public/`. For a marketing site, these are essential for SEO.
- Blocks: Search engine crawling efficiency. The site has 25+ pages that may not be fully indexed.

**No Analytics Integration:**
- Problem: No Google Analytics, Plausible, or other analytics solution is integrated (the bot tracker in `middleware.ts` does not function).
- Blocks: Cannot measure traffic, user behavior, or conversion rates.

## Test Coverage Gaps

**Entire Application is Untested:**
- What's not tested: Every component, page, hook, utility, and data file.
- Files: All files in `src/`
- Risk: Any change can introduce regressions with no automated detection. The savings calculator math (`src/utils/savingsCalculator.ts`), navigation routing, form submissions, and conditional rendering logic are all unverified.
- Priority: High. At minimum, add unit tests for `src/utils/savingsCalculator.ts` and integration tests for critical user flows (homepage load, navigation, calculator interaction).

---

*Concerns audit: 2026-02-10*
