# Phase 1: Foundation & Crawlability - Research

**Researched:** 2026-02-10
**Domain:** SEO meta tags, crawlability files, Netlify deployment configuration
**Confidence:** HIGH

## Summary

Phase 1 addresses the foundational SEO problems preventing search engines from properly indexing the site. The site currently runs as a React SPA deployed to Netlify with a single catch-all rewrite rule (`/* /index.html 200`) that serves all routes with HTTP 200 status -- including non-existent pages. There are no robots.txt or sitemap.xml files. Meta tags are hardcoded once in `index.html` and never updated per-page.

The standard approach is: (1) use react-helmet (already installed at v6.1.0, already used on one page) to set per-page `<title>` and `<meta>` tags, (2) place static `robots.txt` and `sitemap.xml` files in `public/` where Netlify's shadowing mechanism serves them before the catch-all rewrite fires, and (3) restructure `_redirects` to return proper HTTP 404 status for unmatched routes. Additionally, several content fixes are needed: incorrect email addresses (.com instead of .ai), hardcoded copyright year, React Router `<Link>` used for external URLs (missing noopener/noreferrer), and LeadConnector form privacy/terms links.

**Primary recommendation:** Keep the existing react-helmet package (v6.1.0), extend its usage pattern from IndustryTools.tsx to all pages, fix _redirects ordering for proper 404 status, and place static crawl files in `public/`.

## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| react-helmet | 6.1.0 | Per-page `<title>` and `<meta>` management | Already installed and used in project; works fine for client-side SPA without SSR; no migration risk |
| @types/react-helmet | 6.1.11 | TypeScript types for react-helmet | Already installed as devDependency |

### Why Stick With react-helmet (Not react-helmet-async)

The project already has `react-helmet@6.1.0` installed and working on the IndustryTools page. Migrating to `react-helmet-async` would require:
1. Adding a `<HelmetProvider>` wrapper around the app
2. Changing all imports
3. Uninstalling the old package

This adds migration risk for zero practical benefit in this context:
- The site has no SSR (pure client-side SPA), so thread-safety is irrelevant
- React 18 is the target, and react-helmet 6.1.0 works with React 18
- The existing usage pattern on IndustryTools.tsx proves it works

If the project later adds SSR or upgrades to React 19, a migration to `@dr.pogodin/react-helmet` (the modern successor) would be appropriate. That is not this phase.

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| N/A - no additional libraries needed | - | - | - |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| react-helmet | react-helmet-async | Requires HelmetProvider wrapper, migration effort, no benefit for CSR-only SPA |
| react-helmet | @dr.pogodin/react-helmet | For React 19+ upgrade path; not needed for React 18 |
| Static sitemap.xml | vite-plugin-sitemap | Adds build dependency for what is a static file with ~30 known routes |

**Installation:**
```bash
# No new packages needed. react-helmet@6.1.0 and @types/react-helmet@6.1.11 already installed.
```

## Architecture Patterns

### Pattern 1: Per-Page Helmet Usage (Existing Pattern)
**What:** Each page component wraps its content with `<Helmet>` to set page-specific title and meta description.
**When to use:** Every page component in `src/pages/`.
**Existing example in codebase:**
```typescript
// Source: src/pages/IndustryTools.tsx (lines 1-49, already in project)
import { Helmet } from "react-helmet";

const IndustryTools = () => {
  return (
    <>
      <Helmet>
        <title>AI & Automation Tool Explorer by Industry | 10x Velocity</title>
        <meta
          name="description"
          content="Discover curated AI and automation tools for your industry."
        />
      </Helmet>
      {/* page content */}
    </>
  );
};
```

### Pattern 2: Netlify _redirects File Ordering
**What:** Netlify processes the first matching redirect rule. Static files in the publish directory shadow (take precedence over) rewrite rules. The catch-all SPA rewrite must be last.
**Critical rule:** The current `_redirects` file contains only `/* /index.html 200`. This must be preserved as the LAST rule, but a 404 fallback must be added BEFORE it to handle truly unmatched routes.

**However, there is a fundamental SPA conflict here:** A catch-all `/* /index.html 200` rewrite means Netlify ALWAYS returns 200 for every URL, since index.html always exists. The SPA then renders the 404 page client-side, but the HTTP status is still 200 (soft 404).

**Solution for proper 404 status on Netlify with SPA:**

The standard Netlify approach for SPAs that need proper 404s is to explicitly list all valid routes as 200 rewrites, and then use a catch-all 404 rule at the end:

```
# Static assets are served by shadowing (no rules needed)
# Explicitly list all SPA routes
/                      /index.html   200
/about                 /index.html   200
/services              /index.html   200
/services/*            /index.html   200
/case-studies          /index.html   200
/case-studies/*        /index.html   200
/savings-calculator    /index.html   200
/events/*              /index.html   200
/demo                  /index.html   200
/blog                  /index.html   200
/blog/*                /index.html   200
/contact               /index.html   200
/privacy-policy        /index.html   200
/terms-of-service      /index.html   200
/power-automate        /index.html   200
/lexi-file             /index.html   200
/industry-tools        /index.html   200
/prototypes            /index.html   200
/programs/*            /index.html   200
/smart-bots            /index.html   200

# Catch-all: everything else returns 404
/*                     /index.html   404
```

This way:
- Known routes get HTTP 200 and the SPA renders the correct page
- Unknown routes get HTTP 404 and the SPA renders the NotFound component
- Static files (robots.txt, sitemap.xml, favicon.ico, etc.) are served directly via shadowing

### Pattern 3: Static Crawl Files in public/
**What:** Place `robots.txt` and `sitemap.xml` in `public/` directory. Vite copies `public/` contents to `dist/` at build time. Netlify serves static files before applying redirect rules (shadowing).
**Verified:** Netlify documentation confirms static files take precedence over rewrite rules by default.

```
public/
├── _redirects          # (existing) Netlify redirect rules
├── robots.txt          # NEW - crawl directives
├── sitemap.xml         # NEW - page listing for crawlers
├── favicon.ico         # (existing)
├── og-image.png        # (existing)
└── ...
```

### Anti-Patterns to Avoid
- **Using React Router `<Link>` for external URLs:** The Footer currently uses `<Link to="https://resources.10xvelocity.ai/...">` for external links (lines 59-61). React Router's `<Link>` is for internal navigation only. External URLs must use `<a href="..." target="_blank" rel="noopener noreferrer">`.
- **Generating sitemap at runtime:** For a static set of known routes, a hand-written XML file is simpler and more reliable than a build plugin.
- **Soft 404s with catch-all 200 rewrite:** The current `/* /index.html 200` returns HTTP 200 for non-existent pages. Search engines interpret this as "this page exists" and may index 404 pages or waste crawl budget.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Per-page meta tags | Manual `document.title` manipulation | react-helmet (already installed) | Handles cleanup on unmount, supports all head elements, declarative |
| Sitemap generation | Build-time sitemap generator plugin | Hand-written `public/sitemap.xml` | Only ~25 static routes, all known at development time; a plugin adds complexity for no benefit |
| 404 HTTP status | Client-side-only 404 detection | Netlify `_redirects` with explicit route listing | HTTP status must come from the server/CDN; React cannot set it |

**Key insight:** The HTTP 404 status code is a server-level concern. No amount of client-side React code can make the server return a 404 status. This MUST be solved in Netlify's `_redirects` configuration.

## Common Pitfalls

### Pitfall 1: Soft 404 with SPA Catch-All
**What goes wrong:** The `/* /index.html 200` rule returns HTTP 200 for every URL, including non-existent ones. Google Search Console reports "Soft 404" errors.
**Why it happens:** SPAs need a catch-all to serve index.html for client-side routing, but the 200 status tells search engines the page is valid.
**How to avoid:** Explicitly list all valid SPA routes as 200 rewrites, then use `/* /index.html 404` as the final catch-all.
**Warning signs:** Google Search Console showing "Soft 404" or "Crawled - currently not indexed" for random URLs.

### Pitfall 2: robots.txt/sitemap.xml Served as HTML
**What goes wrong:** The catch-all rewrite intercepts requests for `/robots.txt` and `/sitemap.xml`, returning HTML (index.html) instead of the actual files.
**Why it happens:** If files are not in the publish directory (dist/), there is nothing to shadow the rewrite rule.
**How to avoid:** Place files in `public/` (Vite copies them to `dist/`). Netlify's shadowing serves actual files before applying rewrites. Verify after deployment by visiting the URLs directly.
**Warning signs:** Visiting `/robots.txt` in the browser shows the React app instead of plain text.

### Pitfall 3: react-helmet Tags Not Updating
**What goes wrong:** Navigating between pages doesn't update the document title or meta tags.
**Why it happens:** Helmet components must be inside the routed page component, not in a shared layout. If placed in RootLayout, the same tags apply everywhere.
**How to avoid:** Put `<Helmet>` inside each page component (the pattern already used in IndustryTools.tsx). Tags from child components override parent ones.
**Warning signs:** Browser tab title stays the same on every page.

### Pitfall 4: Sitemap URLs Not Matching Actual Routes
**What goes wrong:** Sitemap lists URLs that don't match the actual React Router routes, or misses dynamic routes like `/blog/:id`.
**Why it happens:** Sitemap is hand-written and gets out of sync with route definitions.
**How to avoid:** Build the sitemap by referencing the route list in `src/App.tsx`. For dynamic routes like `/blog/:id`, enumerate all known IDs from `src/data/blogPosts.ts` (currently IDs 1-5).
**Warning signs:** Google Search Console showing "Submitted URL not found (404)" errors.

### Pitfall 5: Footer External Links Using React Router Link
**What goes wrong:** `<Link to="https://external-url.com">` renders as a React Router navigation attempt, not an external link. The link may work in some browsers but doesn't open in a new tab and lacks security attributes.
**Why it happens:** Developers use `<Link>` from habit for all links.
**How to avoid:** Use `<a href="..." target="_blank" rel="noopener noreferrer">` for any URL starting with `http`.
**Warning signs:** Clicking external links in the footer causes a React Router navigation or shows a blank page.

## Code Examples

### Example 1: Standard Page with Helmet
```typescript
// Pattern for every page in src/pages/
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | 10x Velocity</title>
        <meta
          name="description"
          content="Learn about 10x Velocity, an AI & automation consulting firm based in Louisville, KY."
        />
        <meta property="og:title" content="About Us | 10x Velocity" />
        <meta property="og:description" content="Learn about 10x Velocity..." />
        <meta property="og:type" content="website" />
      </Helmet>
      {/* existing page JSX unchanged */}
    </>
  );
};
```

### Example 2: robots.txt Content
```text
# public/robots.txt
User-agent: *
Allow: /

Sitemap: https://www.10xvelocity.ai/sitemap.xml
```

### Example 3: sitemap.xml Structure
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.10xvelocity.ai/</loc>
    <priority>1.0</priority>
    <changefreq>weekly</changefreq>
  </url>
  <url>
    <loc>https://www.10xvelocity.ai/about</loc>
    <priority>0.8</priority>
    <changefreq>monthly</changefreq>
  </url>
  <!-- All routes from src/App.tsx -->
  <!-- Blog posts enumerated: /blog/1 through /blog/5 -->
</urlset>
```

### Example 4: Dynamic Copyright Year
```typescript
// In Footer.tsx, replace hardcoded "2024"
<p className="text-velocity-muted">
  &copy; {new Date().getFullYear()} 10x Velocity. All rights reserved.
</p>
```

### Example 5: External Link Fix (Footer)
```typescript
// Replace <Link to="https://..."> with proper <a> tags
<li>
  <a
    href="https://resources.10xvelocity.ai/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-velocity-muted hover:text-velocity-accent transition-colors"
  >
    Documentation
  </a>
</li>
```

### Example 6: Netlify _redirects for SPA with Proper 404
```
# Netlify _redirects - order matters, first match wins
# Static files (robots.txt, sitemap.xml, etc.) served by shadowing automatically

# SPA routes - serve index.html with 200 status
/                      /index.html   200
/about                 /index.html   200
/services              /index.html   200
/services/*            /index.html   200
/case-studies          /index.html   200
/case-studies/*        /index.html   200
/savings-calculator    /index.html   200
/events/*              /index.html   200
/demo                  /index.html   200
/blog                  /index.html   200
/blog/*                /index.html   200
/contact               /index.html   200
/privacy-policy        /index.html   200
/terms-of-service      /index.html   200
/power-automate        /index.html   200
/lexi-file             /index.html   200
/industry-tools        /index.html   200
/prototypes            /index.html   200
/programs/*            /index.html   200
/smart-bots            /index.html   200

# Fallback: unknown routes get 404 status
/*                     /index.html   404
```

## Current State Audit

### Files Needing Email Fix (.com -> .ai)
Found 4 files with `info@10xvelocity.com` that should be `info@10xvelocity.ai`:

| File | Line | Current | Fix |
|------|------|---------|-----|
| `src/pages/Contact.tsx` | 20 | `info@10xvelocity.com` (href and display text) | Change to `info@10xvelocity.ai` |
| `src/pages/Blog.tsx` | 82 | `info@10xvelocity.com` (href and display text) | Change to `info@10xvelocity.ai` |
| `src/pages/PrivacyPolicy.tsx` | 153 | `info@10xvelocity.com` (display text) | Change to `info@10xvelocity.ai` |
| `src/pages/TermsOfService.tsx` | 109 | `info@10xvelocity.com` (display text) | Change to `info@10xvelocity.ai` |

Note: `src/components/landing/Footer.tsx` already uses the correct `info@10xvelocity.ai`.

### External Links Missing noopener/noreferrer
Found 3 instances in Footer.tsx (lines 59-61) where `<Link to="https://...">` is used instead of `<a>` tags. These are:
- `https://resources.10xvelocity.ai/` (Documentation)
- `https://resources.10xvelocity.ai/` (Playbooks)
- `https://resources.10xvelocity.ai/blog` (Blog)

All other external `<a>` tags in the codebase already have `target="_blank" rel="noopener noreferrer"`.

### Copyright Year
- `src/components/landing/Footer.tsx` line 75: hardcoded `2024`
- Fix: replace with `{new Date().getFullYear()}`

### LeadConnector Form Privacy/Terms Links (FIX-02)
The LeadConnector forms are loaded via iframe from `api.leadconnectorhq.com`. The privacy/terms links within these forms are configured in GoHighLevel's admin dashboard, not in the React code. The fix requires:
1. Logging into GoHighLevel/LeadConnector admin
2. Editing the form settings for both forms:
   - Form ID `mYtM8nnkSBtAzcDroeEO` (popup contact form)
   - Form ID `oF3UAG9Kp3vwDm8QCJ1i` (contact page form)
3. Updating privacy policy link to `https://www.10xvelocity.ai/privacy-policy`
4. Updating terms of service link to `https://www.10xvelocity.ai/terms-of-service`

**This is NOT a code change** -- it is a configuration change in the GoHighLevel platform. The planner should note this as a manual step.

### Complete Route List for Sitemap
Extracted from `src/App.tsx`:
```
/
/about
/services
/services/data-cleaning
/services/phone-voice-agents
/services/ai-workshops
/services/smart-bots
/lexi-file
/industry-tools
/power-automate
/prototypes
/programs/ai-guide-certification
/case-studies
/case-studies/innes-young
/case-studies/ecatalyst
/case-studies/hillcrest-partners
/case-studies/catalyst-group
/case-studies/director-of-marketing
/case-studies/birchwood-real-estate
/case-studies/govbrokers
/case-studies/inspyrd
/case-studies/transportation-director
/savings-calculator
/events/lunch-and-learn
/demo
/blog
/blog/1
/blog/2
/blog/3
/blog/4
/blog/5
/contact
/privacy-policy
/terms-of-service
```

Excluded from sitemap (should not be indexed):
- `/privacy-policy` and `/terms-of-service` -- optional, can include at low priority
- The catch-all `*` (404 page) -- never include

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| react-helmet | react-helmet-async or @dr.pogodin/react-helmet | 2023+ | Only matters for SSR/React 19; for CSR React 18, react-helmet works fine |
| SPA catch-all `/* /index.html 200` | Explicit route listing + 404 catch-all | Always available in Netlify | Proper HTTP 404 status for SEO |
| Hardcoded meta in index.html | Per-page react-helmet | Standard practice | Critical for per-page SEO |

## Open Questions

1. **Site domain confirmation**
   - What we know: Footer email uses `10xvelocity.ai`, some pages use `10xvelocity.com`
   - What's unclear: Is the canonical domain `www.10xvelocity.ai` or `10xvelocity.ai` (with or without www)?
   - Recommendation: Use `https://www.10xvelocity.ai` in sitemap and canonical tags; verify with the actual Netlify domain settings

2. **LeadConnector form configuration access**
   - What we know: FIX-02 requires updating privacy/terms links in GoHighLevel forms
   - What's unclear: Whether the developer has GoHighLevel admin access
   - Recommendation: Document as a manual configuration step; cannot be done in code

3. **Blog post dynamic routes in sitemap**
   - What we know: Blog posts use numeric IDs (1-5) defined in `src/data/blogPosts.ts`
   - What's unclear: Whether more posts will be added frequently
   - Recommendation: Enumerate all current IDs in sitemap; add a comment noting the sitemap must be updated when posts are added

## Sources

### Primary (HIGH confidence)
- Codebase audit: `src/App.tsx`, `src/components/landing/Footer.tsx`, `src/pages/IndustryTools.tsx`, `public/_redirects`, `package.json`
- [Netlify Redirect Options Documentation](https://docs.netlify.com/manage/routing/redirects/redirect-options/) - Rule processing order, status codes, shadowing behavior
- [Netlify Rewrites & Proxies Documentation](https://docs.netlify.com/routing/redirects/rewrites-proxies/) - SPA catch-all pattern, static file shadowing

### Secondary (MEDIUM confidence)
- [Netlify Forum: SPA robots.txt/sitemap.xml](https://answers.netlify.com/t/cannot-access-sitemap-xml-nor-robots-txt-directly-on-my-spa/11071) - Confirmed shadowing serves static files before rewrites
- [Netlify Forum: Vite + React Router sitemap](https://answers.netlify.com/t/netlify-won-t-serve-sitemap-xml-and-robots-txt-in-vite-react-router-setup-tried-redirects-and-netlify-toml/152982) - Confirmed Vite public/ folder approach works
- [GoHighLevel: Privacy Policy Linking](https://help.gohighlevel.com/support/solutions/articles/155000000581-how-to-link-privacy-policy-when-you-collect-personal-data-from-your-leads-or-customers) - Form privacy/terms link configuration
- [react-helmet-async comparison](https://www.thatsoftwaredude.com/content/14126/react-helmet-vs-react-helmet-async) - Confirmed async variant only needed for SSR

### Tertiary (LOW confidence)
- None -- all findings verified with official sources or codebase

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - react-helmet already installed and working in project
- Architecture: HIGH - Netlify _redirects behavior verified with official docs; Vite public/ behavior is standard
- Pitfalls: HIGH - All derived from actual codebase audit and verified Netlify documentation
- Content fixes: HIGH - Exact file paths and line numbers from codebase grep

**Research date:** 2026-02-10
**Valid until:** 2026-04-10 (stable domain; Netlify and react-helmet are mature)
