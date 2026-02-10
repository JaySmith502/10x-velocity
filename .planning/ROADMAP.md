# Roadmap: 10x Velocity SEO Overhaul

## Overview

This roadmap transforms 10xvelocity.ai from a 38/100 SEO score to 90+ by implementing technical SEO in five phases. Phase 1 lays the foundation (React Helmet infrastructure, crawlability files, quick fixes), then subsequent phases layer on per-page meta tags, social/OG tags, schema markup, and content structure improvements. Each phase delivers independently verifiable SEO improvements.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [x] **Phase 1: Foundation & Crawlability** - React Helmet infrastructure, robots.txt, sitemap, 404, and quick content fixes
- [ ] **Phase 2: Per-Page Meta Tags** - Unique titles, descriptions, canonicals, and H1 fix on every page
- [ ] **Phase 3: Social & Open Graph** - Full OG and Twitter Card tags, social media links, absolute OG image URL
- [ ] **Phase 4: Schema Markup** - All JSON-LD structured data (Organization, Service, Breadcrumb, FAQ, CaseStudy, WebSite)
- [ ] **Phase 5: Content Structure & Images** - Breadcrumbs, FAQ sections, blog route, case study SEO, image optimization

## Phase Details

### Phase 1: Foundation & Crawlability
**Goal**: Search engines can discover and crawl the site correctly, and the infrastructure for per-page meta tags exists
**Depends on**: Nothing (first phase)
**Requirements**: FIX-03, CRAWL-01, CRAWL-02, CRAWL-04, FIX-01, FIX-02, ONPG-04, ONPG-05
**Success Criteria** (what must be TRUE):
  1. React Helmet (or equivalent) is installed and rendering dynamic meta tags in the document head on at least one page
  2. Visiting /robots.txt returns a plain text file (not HTML) containing sitemap reference and crawl directives
  3. Visiting /sitemap.xml returns valid XML listing all indexable pages with priorities
  4. Visiting a non-existent URL (e.g., /does-not-exist) shows a 404 page and Netlify returns HTTP 404 status
  5. All instances of email on the site read info@10xvelocity.ai, footer copyright shows current year, all external links have noopener/noreferrer, and LeadConnector form links point to actual privacy/terms pages
**Plans**: 2 plans

Plans:
- [x] 01-01-PLAN.md -- React Helmet on homepage, robots.txt, sitemap.xml, and _redirects for proper 404
- [x] 01-02-PLAN.md -- Email fixes (.com to .ai), dynamic copyright year, footer external link tags

### Phase 2: Per-Page Meta Tags
**Goal**: Every page has unique, optimized metadata that search engines use for indexing and ranking
**Depends on**: Phase 1 (React Helmet infrastructure)
**Requirements**: ONPG-01, ONPG-02, ONPG-03, CRAWL-03
**Success Criteria** (what must be TRUE):
  1. Every page renders a unique title tag under 60 characters with relevant keywords (not the generic SPA title)
  2. Every page renders a unique meta description between 150-160 characters
  3. Every page renders a canonical link tag pointing to its own canonical URL (https://10xvelocity.ai/...)
  4. Every page has exactly one H1 tag (the chat widget no longer injects a duplicate H1)
**Plans**: 3 plans

Plans:
- [ ] 02-01-PLAN.md -- Helmet metadata for top-level pages, service pages, and canonical tags on existing Helmet pages (14 pages)
- [ ] 02-02-PLAN.md -- Helmet metadata for case studies, product/program pages, legal pages, and dynamic BlogPost (16 files)
- [ ] 02-03-PLAN.md -- Fix www->non-www in sitemap/robots and duplicate H1 from chat widget

### Phase 3: Social & Open Graph
**Goal**: Every page is shareable on social platforms with rich previews showing correct titles, descriptions, and images
**Depends on**: Phase 2 (per-page titles and descriptions available for OG reuse)
**Requirements**: SOCL-01, SOCL-02, SOCL-03, SOCL-04, IMG-04
**Success Criteria** (what must be TRUE):
  1. Sharing any page URL on Facebook/LinkedIn shows a rich preview with page-specific title, description, and image (not generic SPA fallback)
  2. Sharing any page URL on Twitter/X shows a summary_large_image card with page-specific content
  3. Footer contains links to all active social media profiles
  4. OG image meta tags use absolute URLs (https://10xvelocity.ai/og-image.png)
**Plans**: TBD

Plans:
- [ ] 03-01: OG and Twitter Card meta tags on all pages (SOCL-01, SOCL-02, IMG-04)
- [ ] 03-02: Social media links in footer and schema preparation (SOCL-03, SOCL-04)

### Phase 4: Schema Markup
**Goal**: Search engines understand the site's entities (business, services, pages, FAQs, case studies) through structured data
**Depends on**: Phase 1 (React Helmet for injecting JSON-LD)
**Requirements**: SCHM-01, SCHM-02, SCHM-03, SCHM-04, SCHM-05, SCHM-06
**Success Criteria** (what must be TRUE):
  1. Homepage contains valid Organization + LocalBusiness + WebSite JSON-LD (verifiable via Google Rich Results Test)
  2. Services page and individual service pages contain valid Service JSON-LD for each offering
  3. All interior pages contain valid BreadcrumbList JSON-LD matching the page hierarchy
  4. Services page and Voice Agents page contain valid FAQPage JSON-LD with real Q&A pairs
  5. Each case study page contains valid Article or CaseStudy JSON-LD with metrics and client info
**Plans**: TBD

Plans:
- [ ] 04-01: Organization, LocalBusiness, and WebSite schema on homepage (SCHM-01, SCHM-06)
- [ ] 04-02: Service schema on service pages (SCHM-02)
- [ ] 04-03: BreadcrumbList, FAQPage, and CaseStudy schema across the site (SCHM-03, SCHM-04, SCHM-05)

### Phase 5: Content Structure & Images
**Goal**: Users can navigate via breadcrumbs, find answers in FAQs, discover the blog, and experience fast-loading optimized images
**Depends on**: Phase 2 (per-page meta needed for case study SEO), Phase 4 (breadcrumb schema pairs with visual breadcrumbs)
**Requirements**: CONT-01, CONT-02, CONT-03, CONT-04, IMG-01, IMG-02, IMG-03
**Success Criteria** (what must be TRUE):
  1. All interior pages display a visual breadcrumb trail (e.g., Home > Services > Voice Agents) that links back to parent pages
  2. Services page and Voice Agents page each have a visible FAQ section with at least 3 Q&A pairs
  3. Visiting /blog shows a styled empty-state page (e.g., "Coming soon") with proper meta tags
  4. Each case study page has a unique title, unique meta description, and internal links to related services
  5. Images across the site use WebP format where possible, have explicit width/height attributes, and below-fold images use lazy loading
**Plans**: TBD

Plans:
- [ ] 05-01: Visual breadcrumb component and FAQ sections (CONT-01, CONT-02)
- [ ] 05-02: Blog route and case study SEO (CONT-03, CONT-04)
- [ ] 05-03: Image optimization (IMG-01, IMG-02, IMG-03)

## Progress

**Execution Order:**
Phases execute in numeric order: 1 -> 2 -> 3 -> 4 -> 5

Note: Phases 3 and 4 depend only on Phase 1/2, not on each other. With parallelization enabled, they could run concurrently after Phase 2 completes.

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Foundation & Crawlability | 2/2 | Complete | 2026-02-10 |
| 2. Per-Page Meta Tags | 0/3 | Planned | - |
| 3. Social & Open Graph | 0/2 | Not started | - |
| 4. Schema Markup | 0/3 | Not started | - |
| 5. Content Structure & Images | 0/3 | Not started | - |
