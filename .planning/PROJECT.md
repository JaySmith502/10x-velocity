# 10x Velocity SEO Overhaul

## What This Is

A comprehensive SEO optimization project for 10xvelocity.ai, an existing React SPA marketing site for an AI & automation consulting firm. The site currently scores 38/100 on SEO audit. This project implements all technical SEO fixes to push the score above 90 — covering crawlability, on-page SEO, schema markup, image optimization, and search engine readiness.

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

### Active

- [ ] robots.txt file serving correctly (not returning HTML 404)
- [ ] XML sitemap with all indexable pages
- [ ] Unique, keyword-rich title tags on every page
- [ ] Unique, compelling meta descriptions (150-160 chars) on every page
- [ ] Canonical tags on all pages
- [ ] Organization + LocalBusiness JSON-LD schema on homepage
- [ ] Service schema on services pages
- [ ] BreadcrumbList schema on all pages
- [ ] FAQPage schema on key service pages
- [ ] CaseStudy/Article schema on case study pages
- [ ] Full Open Graph + Twitter Card meta tags (absolute URLs, per-page)
- [ ] Single H1 per page (fix chat widget injecting extra H1)
- [ ] Fix broken Privacy Policy/ToS links in LeadConnector form
- [ ] Standardize email to info@10xvelocity.ai everywhere
- [ ] Visual breadcrumb navigation on all pages
- [ ] Image optimization (WebP, explicit dimensions, lazy loading)
- [ ] Social media links in footer and schema
- [ ] /blog route created (empty state, ready for future content)
- [ ] Individual case study page SEO (unique titles, descriptions, schema)
- [ ] Proper 404 page returning correct HTTP status
- [ ] Dynamic copyright year in footer
- [ ] noopener/noreferrer standardization on external links

### Out of Scope

- SSR/Next.js migration — skipping for now, revisit after measuring impact of other fixes
- Content rewriting/expansion — separate project for page content depth
- Customer testimonials — no content available yet
- Team/leadership page — separate content project
- Google Business Profile setup — external to codebase
- Google Search Console setup — external to codebase
- Blog post content — only creating the route and structure
- resources.10xvelocity.ai changes — separate wiki/knowledge base for workshop attendees

## Context

- Site was scaffolded via Lovable platform, deployed to Netlify
- SEO audit conducted Feb 9, 2026 — full report in `seo_audit_020926/`
- Current score: 38/100 (Technical: 25, Content: 55, On-Page: 30, Schema: 5, Performance: 60, Images: 50, AI Readiness: 30)
- The site is a client-side rendered SPA — search engine bots may not see full content without pre-rendering
- Netlify redirect rules live in `public/_redirects`
- Static files (robots.txt, sitemap.xml) go in `public/` for Netlify to serve
- Blog on resources.10xvelocity.ai is a separate wiki for workshop attendees — keep it
- Need new /blog route on main domain for actual blog content
- n8n chat widget injects an H1 "Hi there!" on every page
- LeadConnector embedded forms have placeholder example.com links
- All meta tags currently set in index.html (single SPA entry point) — need per-page dynamic meta via React Helmet or equivalent

## Constraints

- **Tech stack**: Must stay within React 18 + Vite + TypeScript — no framework migration
- **Deployment**: Netlify — static files in `public/`, redirect rules in `public/_redirects`
- **Content**: No new page content this round — structural/technical SEO only
- **Email**: Standardize on info@10xvelocity.ai

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Skip SSR migration | High effort, want to measure impact of other fixes first | — Pending |
| Keep resources subdomain | It's a separate wiki/knowledge base for workshop attendees, not a blog | ✓ Good |
| Create /blog on main domain | Consolidate future blog authority on primary domain | — Pending |
| Standardize email to .ai | Primary domain is .ai, maintain consistency | — Pending |
| Skip content expansion | Separate project, keep this focused on technical SEO | — Pending |
| Skip testimonials | No content available currently | — Pending |

---
*Last updated: 2026-02-10 after initialization*
