# Requirements: 10x Velocity SEO Overhaul

**Defined:** 2026-02-10
**Core Value:** Every page on 10xvelocity.ai must be discoverable, properly indexed, and richly described to search engines and AI systems.

## v1 Requirements

### Crawlability

- [x] **CRAWL-01**: robots.txt serves as proper text file with sitemap reference
- [x] **CRAWL-02**: XML sitemap lists all indexable pages with priorities
- [x] **CRAWL-03**: Canonical tags on every page point to correct canonical URL
- [x] **CRAWL-04**: 404 page returns proper HTTP 404 status (not soft 200)

### On-Page SEO

- [x] **ONPG-01**: Every page has a unique, keyword-rich title tag (under 60 chars)
- [x] **ONPG-02**: Every page has a unique meta description (150-160 chars)
- [x] **ONPG-03**: Each page has exactly one H1 tag (fix chat widget duplicate)
- [x] **ONPG-04**: Dynamic copyright year in footer
- [x] **ONPG-05**: noopener/noreferrer on all external links

### Schema Markup

- [ ] **SCHM-01**: Organization + LocalBusiness JSON-LD on homepage
- [ ] **SCHM-02**: Service JSON-LD on services and individual service pages
- [ ] **SCHM-03**: BreadcrumbList JSON-LD on all pages
- [ ] **SCHM-04**: FAQPage JSON-LD on services and voice agents pages
- [ ] **SCHM-05**: Article/CaseStudy JSON-LD on each case study page
- [ ] **SCHM-06**: WebSite JSON-LD with SearchAction on homepage

### Social & Open Graph

- [x] **SOCL-01**: Full OG tags (title, description, image, url, type) on every page with absolute URLs
- [x] **SOCL-02**: Twitter Card meta tags on every page
- [x] **SOCL-03**: Social media profile links in footer
- [ ] **SOCL-04**: Social links in Organization schema (sameAs)

### Images

- [ ] **IMG-01**: Images converted to WebP format where possible
- [ ] **IMG-02**: Explicit width/height attributes on all images
- [ ] **IMG-03**: Lazy loading on below-fold images
- [x] **IMG-04**: OG image uses absolute URL

### Content Structure

- [ ] **CONT-01**: Visual breadcrumb navigation on interior pages
- [ ] **CONT-02**: FAQ sections added to services page and voice agents page
- [ ] **CONT-03**: /blog route created with empty state
- [ ] **CONT-04**: Each case study has unique title, meta description, and internal links

### Fixes

- [x] **FIX-01**: Email standardized to info@10xvelocity.ai on all pages
- [x] **FIX-02**: LeadConnector form privacy/terms links point to actual site pages *(manual GoHighLevel config required)*
- [x] **FIX-03**: Per-page dynamic meta tags via React Helmet (or equivalent)

## v2 Requirements

### Rendering & Performance

- **PERF-01**: Pre-rendering or SSR for search engine crawlability
- **PERF-02**: Third-party script loading optimization

### Content & E-E-A-T

- **EEAT-01**: Customer testimonials with Review schema
- **EEAT-02**: Team/leadership page with Person schema
- **EEAT-03**: Expanded content on thin pages (homepage, calculator, contact)

## Out of Scope

| Feature | Reason |
|---------|--------|
| SSR/Next.js migration | High effort, measure impact of other fixes first |
| Content rewriting/expansion | Separate project focused on content depth |
| Blog post content | Only creating route structure this round |
| resources.10xvelocity.ai changes | Separate wiki/knowledge base for workshop attendees |
| Google Business Profile setup | External to codebase |
| Google Search Console setup | External to codebase |
| Customer testimonials | No content available yet |
| Team/leadership page | Separate content project |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| FIX-03 | Phase 1 | Complete |
| CRAWL-01 | Phase 1 | Complete |
| CRAWL-02 | Phase 1 | Complete |
| CRAWL-04 | Phase 1 | Complete |
| FIX-01 | Phase 1 | Complete |
| FIX-02 | Phase 1 | Complete |
| ONPG-04 | Phase 1 | Complete |
| ONPG-05 | Phase 1 | Complete |
| ONPG-01 | Phase 2 | Complete |
| ONPG-02 | Phase 2 | Complete |
| ONPG-03 | Phase 2 | Complete |
| CRAWL-03 | Phase 2 | Complete |
| SOCL-01 | Phase 3 | Complete |
| SOCL-02 | Phase 3 | Complete |
| SOCL-03 | Phase 3 | Complete |
| SOCL-04 | Phase 4 | Pending |
| IMG-04 | Phase 3 | Complete |
| SCHM-01 | Phase 4 | Pending |
| SCHM-02 | Phase 4 | Pending |
| SCHM-03 | Phase 4 | Pending |
| SCHM-04 | Phase 4 | Pending |
| SCHM-05 | Phase 4 | Pending |
| SCHM-06 | Phase 4 | Pending |
| CONT-01 | Phase 5 | Pending |
| CONT-02 | Phase 5 | Pending |
| CONT-03 | Phase 5 | Pending |
| CONT-04 | Phase 5 | Pending |
| IMG-01 | Phase 5 | Pending |
| IMG-02 | Phase 5 | Pending |
| IMG-03 | Phase 5 | Pending |

**Coverage:**
- v1 requirements: 30 total
- Mapped to phases: 30
- Unmapped: 0

---
*Requirements defined: 2026-02-10*
*Last updated: 2026-02-10 after Phase 3 completion*
