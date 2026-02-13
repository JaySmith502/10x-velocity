# 10x Velocity

## What This Is

Marketing website for 10xVelocity, an AI & automation consulting firm. React SPA deployed to Netlify. v1.0 shipped comprehensive SEO overhaul (38/100 → 90+). v1.1 shipped "40 in 40" campaign landing page with tiered service packages and GoHighLevel payment integration.

## Core Value

10xvelocity.ai converts visitors into paying clients by clearly communicating services, results, and a fast path to engagement.

## Current Milestone: None

No active milestone. v1.1 shipped 2026-02-13.

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
- ✓ Standalone `/packages` campaign landing page with hero, pricing cards, timeline, audience, advantage, CTA — v1.1
- ✓ 3 tiered pricing cards (Voice Agents $399/mo, Baseline Diagnostic $499 featured, Enterprise Review $1,999) — v1.1
- ✓ GoHighLevel/LeadConnector payment button placeholders on each card — v1.1
- ✓ Full SEO on /packages: Helmet, OG/Twitter, canonical, BreadcrumbList JSON-LD, visual breadcrumbs — v1.1
- ✓ Lazy-loaded route in App.tsx, sitemap entry at priority 0.8 — v1.1

### Active

*(None — no active milestone)*

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
- "40 in 40" is a time-boxed sales campaign: 40 days to close 40 fast-yes service engagements
- GovBrokers pricing page (`Govbrokers pricing.png`) is the visual reference for card layout
- Content source: `new-landing-page.md` at repo root
- "Simple Apps / Rebuilt Nodes" tier excluded — too niche, only discoverable after discussion

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

| 3 tiers not 4 | "Simple Apps" too niche for landing page, needs sales conversation first | ✓ Shipped |
| GoHighLevel for payments | Already using LeadConnector, consistent CRM integration | ✓ Shipped (placeholder URLs) |
| Baseline Diagnostic as featured | $499 is lowest-friction entry point for new prospects | ✓ Shipped |

---
*Last updated: 2026-02-13 after v1.1 milestone completion*
