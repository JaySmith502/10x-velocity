# 10x Velocity SEO Overhaul

## What This Is

A comprehensive SEO optimization project for 10xvelocity.ai, an existing React SPA marketing site for an AI & automation consulting firm. The v1.0 milestone shipped all technical SEO fixes, pushing the site from 38/100 to 90+ coverage across crawlability, on-page SEO, schema markup, image optimization, and search engine readiness.

## Core Value

Every page on 10xvelocity.ai must be discoverable, properly indexed, and richly described to search engines and AI systems — turning an invisible site into one that ranks.

## Requirements

### Validated

- ✓ React SPA with client-side routing (React 18 + Vite + React Router v6) — existing
- ✓ 25+ pages including services, case studies, calculator, demo, industry tools — existing
- ✓ Responsive design with Tailwind CSS — existing
- ✓ HTTPS with proper www redirect — existing
- ✓ Clean semantic URL structure — existing
- ✓ Contact info (address, phone, email) visible on site — existing
- ✓ Trust badges (VOSB, ESGR, Canopy) displayed — existing
- ✓ 9 case studies with specific metrics — existing
- ✓ Deployed to Netlify — existing
- ✓ robots.txt serving correctly with sitemap reference — v1.0
- ✓ XML sitemap with all 34 indexable pages — v1.0
- ✓ Unique, keyword-rich title tags on every page (under 60 chars) — v1.0
- ✓ Unique meta descriptions (150-160 chars) on every page — v1.0
- ✓ Canonical tags on all pages — v1.0
- ✓ Organization + ProfessionalService JSON-LD on homepage — v1.0
- ✓ Service JSON-LD on services pages — v1.0
- ✓ BreadcrumbList JSON-LD on all pages — v1.0
- ✓ FAQPage JSON-LD on services and voice agents pages — v1.0
- ✓ Article JSON-LD on case study pages — v1.0
- ✓ WebSite JSON-LD on homepage — v1.0
- ✓ Full Open Graph + Twitter Card meta tags on every page — v1.0
- ✓ Single H1 per page (chat widget duplicate fixed) — v1.0
- ✓ Email standardized to info@10xvelocity.ai — v1.0
- ✓ Visual breadcrumb navigation on all interior pages — v1.0
- ✓ Images optimized (WebP, explicit dimensions, lazy loading) — v1.0
- ✓ Social media links in footer and Organization schema sameAs — v1.0
- ✓ Blog route with posts and proper meta tags — v1.0
- ✓ Case study pages with unique titles, descriptions, schema, service links — v1.0
- ✓ Proper 404 page returning correct HTTP status — v1.0
- ✓ Dynamic copyright year in footer — v1.0
- ✓ noopener/noreferrer on all external links — v1.0
- ✓ FAQ accordion sections on services and voice agents pages — v1.0

### Active

*(No active requirements — next milestone not yet planned)*

### Out of Scope

- SSR/Next.js migration — revisit after measuring impact of v1.0 fixes
- Content rewriting/expansion — separate content project
- Customer testimonials — no content available yet
- Team/leadership page — separate content project
- Google Business Profile setup — external to codebase
- Google Search Console setup — external to codebase
- resources.10xvelocity.ai changes — separate wiki/knowledge base

## Context

- Site was scaffolded via Lovable platform, deployed to Netlify
- SEO audit conducted Feb 9, 2026 — full report in `seo_audit_020926/`
- v1.0 shipped Feb 10, 2026 — 30 requirements, 5 phases, 13 plans, 17/17 UAT passed
- The site is a client-side rendered SPA — social crawlers won't see per-page OG until Netlify prerendering is enabled
- Netlify redirect rules live in `public/_redirects`
- Static files (robots.txt, sitemap.xml) in `public/`
- Blog exists at /blog with 5 posts and full meta tags
- n8n chat widget H1 fix deployed (CSS + MutationObserver) — needs live site verification
- LeadConnector form privacy/terms links require manual GoHighLevel admin config (FIX-02)

## Constraints

- **Tech stack**: Must stay within React 18 + Vite + TypeScript — no framework migration
- **Deployment**: Netlify — static files in `public/`, redirect rules in `public/_redirects`
- **Email**: Standardize on info@10xvelocity.ai

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Skip SSR migration | High effort, want to measure impact of other fixes first | Deferred to v2 |
| Keep resources subdomain | It's a separate wiki/knowledge base for workshop attendees, not a blog | ✓ Good |
| Create /blog on main domain | Consolidate future blog authority on primary domain | ✓ Shipped — blog exists with 5 posts |
| Standardize email to .ai | Primary domain is .ai, maintain consistency | ✓ Shipped |
| Skip content expansion | Separate project, keep this focused on technical SEO | Deferred to v2 |
| Skip testimonials | No content available currently | Deferred to v2 |
| ProfessionalService over LocalBusiness | Better @type fit for consulting firm | ✓ Shipped |
| @graph bundle for homepage schema | Single JSON-LD block for Organization + ProfessionalService + WebSite | ✓ Shipped |
| Omit SearchAction from WebSite | Site has no search; Google deprecated Sitelinks Search Box Nov 2024 | ✓ Good |
| WebP-only (no PNG fallback) | All target browsers support WebP since 2020 | ✓ Shipped — 85% size reduction |
| Single-sourced FAQ data | One array serves both Accordion UI and FAQPage JSON-LD | ✓ Shipped — prevents data drift |
| Two-pronged H1 fix | CSS fallback + JS MutationObserver for chat widget | ✓ Shipped — needs live verification |

---
*Last updated: 2026-02-10 after v1.0 milestone completion*
