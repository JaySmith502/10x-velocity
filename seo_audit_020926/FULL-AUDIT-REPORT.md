# Full SEO Audit Report: 10xvelocity.ai

**Audit Date:** February 9, 2026
**Business Type:** B2B AI & Automation Consulting (Local + National)
**Location:** Louisville, KY

---

## Executive Summary

### Overall SEO Health Score: 38/100

| Category | Score | Weight | Weighted |
|----------|-------|--------|----------|
| Technical SEO | 25/100 | 25% | 6.25 |
| Content Quality | 55/100 | 25% | 13.75 |
| On-Page SEO | 30/100 | 20% | 6.00 |
| Schema / Structured Data | 5/100 | 10% | 0.50 |
| Performance (CWV) | 60/100 | 10% | 6.00 |
| Images | 50/100 | 5% | 2.50 |
| AI Search Readiness | 30/100 | 5% | 1.50 |
| **TOTAL** | | | **36.5** |

### Top 5 Critical Issues
1. **No robots.txt file** - Returns 404 HTML page instead of proper robots.txt
2. **No sitemap.xml** - Returns 404 HTML page; search engines cannot discover pages
3. **Identical title tags on ALL pages** - Every page uses "10x Velocity | AI & Automation Consulting"
4. **Identical meta descriptions on ALL pages** - Every page uses "10x velocity" (2 words)
5. **No structured data / schema markup** on any page

### Top 5 Quick Wins
1. Add unique, keyword-rich title tags to each page (1-2 hours)
2. Add unique, compelling meta descriptions 150-160 chars each (1-2 hours)
3. Create and deploy robots.txt and sitemap.xml (30 minutes)
4. Add LocalBusiness + Organization schema to homepage (1 hour)
5. Add canonical tags to all pages (30 minutes)

---

## Site Structure & Pages Crawled

| URL | Status | Title | Description |
|-----|--------|-------|-------------|
| / (Homepage) | 200 | 10x Velocity \| AI & Automation Consulting | "10x velocity" |
| /about | 200 | 10x Velocity \| AI & Automation Consulting | "10x velocity" |
| /services | 200 | 10x Velocity \| AI & Automation Consulting | "10x velocity" |
| /services/phone-voice-agents | 200 | 10x Velocity \| AI & Automation Consulting | "10x velocity" |
| /services/data-cleaning | Linked but not crawled | -- | -- |
| /case-studies | 200 | 10x Velocity \| AI & Automation Consulting | "10x velocity" |
| /case-studies/* (9 individual) | Linked but not crawled | -- | -- |
| /savings-calculator | 200 | 10x Velocity \| AI & Automation Consulting | "10x velocity" |
| /demo | 200 | 10x Velocity \| AI & Automation Consulting | "10x velocity" |
| /contact | 200 | 10x Velocity \| AI & Automation Consulting | "10x velocity" |
| /industry-tools | 200 | AI & Automation Tool Explorer by Industry \| 10x Velocity | Unique description |
| /prototypes | 200 | 10x Velocity \| AI & Automation Consulting | "10x velocity" |
| /privacy-policy | 200 | 10x Velocity \| AI & Automation Consulting | "10x velocity" |
| /terms-of-service | Linked but not crawled | -- | -- |
| /robots.txt | 404 (returns HTML) | -- | -- |
| /sitemap.xml | 404 (returns HTML) | -- | -- |

**Total pages discovered:** ~25+ (including 9 case study detail pages)

---

## 1. Technical SEO (Score: 25/100)

### Crawlability

| Check | Status | Details |
|-------|--------|---------|
| robots.txt | MISSING | Returns HTML 404 page, not a proper robots.txt file |
| sitemap.xml | MISSING | Returns HTML 404 page |
| Canonical tags | MISSING | No `<link rel="canonical">` found on any page |
| Hreflang tags | N/A | Single language site |
| 404 handling | PARTIAL | Custom 404 page exists but returns 200 status code (soft 404) |
| HTTPS | PASS | All pages served over HTTPS |
| www redirect | PASS | www.10xvelocity.ai redirects to 10xvelocity.ai |
| Mobile responsive | PASS | Viewport meta tag present, responsive design |

### Indexability Issues

- **Contact page has `robots: noindex`** meta tag - This is intentional but means it won't appear in search results
- **No canonical tags** on any page - risk of duplicate content issues, especially with www/non-www
- **SPA (Single Page Application)** - Site is React-based (client-side rendered), which can cause crawling issues with search engines. No evidence of server-side rendering (SSR) or pre-rendering.

### Security

| Check | Status |
|-------|--------|
| HTTPS | PASS |
| Mixed content | Not detected |
| Security headers | Not fully analyzed (requires HTTP header inspection) |

### URL Structure
- Clean, semantic URLs (good)
- Hash-based navigation for services page anchors (e.g., `/services#process-automation`) - These are not crawlable as separate pages

---

## 2. Content Quality (Score: 55/100)

### E-E-A-T Assessment

| Signal | Status | Details |
|--------|--------|---------|
| Author attribution | PARTIAL | `author: "Jay Smith"` in meta tags but no visible author bio on pages |
| About page | GOOD | Solid about page with philosophy, methodology, and values |
| Contact info | GOOD | Physical address, email, phone visible |
| Trust badges | GOOD | VOSB Verified, ESGR, Canopy Certified logos displayed |
| Case studies | GOOD | 9 case studies with specific metrics (400% growth, 85% error reduction, etc.) |
| Testimonials | MISSING | No customer testimonials or reviews |
| Team page | MISSING | No team members or leadership profiles |
| Credentials | PARTIAL | Trust badges present but no individual credentials |

### Content Depth by Page

| Page | Word Count (est.) | Assessment |
|------|-------------------|------------|
| Homepage | ~250 | THIN - needs more substantive content |
| About | ~450 | ADEQUATE - good philosophy content |
| Services | ~500 | ADEQUATE - but could be deeper per service |
| Phone Voice Agents | ~350 | THIN - needs more detail, FAQ, pricing info |
| Case Studies (index) | ~400 | ADEQUATE - good summary cards |
| Savings Calculator | ~150 | THIN - interactive tool but very little text content |
| Demo | ~150 | THIN - mostly a form |
| Prototypes | ~600 | GOOD - well-structured with pricing, process, deliverables |
| Industry Tools | ~100 | VERY THIN - just category cards with tool counts |
| Contact | ~100 | THIN - mostly embedded form |
| Privacy Policy | ~1000 | ADEQUATE |

### Readability
- Content is generally well-written and clear
- Good use of headings and bullet points
- Professional tone appropriate for B2B audience

### Duplicate Content Issues
- Footer content is identical across all pages (expected)
- N8n chat widget HTML duplicated on every page
- No significant body content duplication detected

---

## 3. On-Page SEO (Score: 30/100)

### Title Tags - CRITICAL FAILURE

**Every single page** (except /industry-tools) uses the identical title:
> "10x Velocity | AI & Automation Consulting"

This is a severe SEO issue. Each page needs a unique, descriptive title.

**Recommended titles:**
| Page | Recommended Title |
|------|-------------------|
| / | AI & Automation Consulting Louisville KY \| 10x Velocity |
| /about | About Us - AI-Powered Business Transformation \| 10x Velocity |
| /services | AI Automation Services - Process Mining, Data Analytics & More \| 10x Velocity |
| /services/phone-voice-agents | AI Phone Voice Agents - 24/7 Call Handling \| 10x Velocity |
| /case-studies | Case Studies - AI Automation Results \| 10x Velocity |
| /savings-calculator | Automation Savings Calculator \| 10x Velocity |
| /demo | Get a Demo - AI Voice Agent \| 10x Velocity |
| /prototypes | Rapid Prototype Sprint - Idea to Proof in 10 Days \| 10x Velocity |
| /contact | Contact Us - Free Consultation \| 10x Velocity |

### Meta Descriptions - CRITICAL FAILURE

**Every page** uses the same 2-word description: `"10x velocity"`

This is essentially no meta description at all. Google will auto-generate snippets, which are usually poor quality.

**Only exception:** `/industry-tools` has a proper description and `/demo` has og:description set.

### Heading Structure

| Page | H1 | Assessment |
|------|-----|------------|
| Homepage | "Accelerate Your Business Growth with AI & Automation" | GOOD |
| About | "About Us" | OK but generic |
| Services | "Our Services" | OK but generic |
| Phone Voice Agents | "Supercharge Your Customer Calls with AI-Powered Voice Agents" | GOOD |
| Case Studies | "Case Studies" | OK but generic |
| Savings Calculator | "Automation Savings Calculator" | GOOD |
| Demo | "Get A Demo For Your Business Now" | GOOD |
| Prototypes | "Rapid Prototype Sprint..." | GOOD |
| Industry Tools | "AI & Automation Tool Explorer" | GOOD |

**Issue:** Chat widget adds an extra H1 "Hi there!" on every page, creating multiple H1s per page.

### Internal Linking
- Good cross-linking between pages via navigation and footer
- Services page links to individual service pages
- Case studies index links to individual case studies
- **Missing:** No blog content to drive organic traffic
- **Missing:** No breadcrumb navigation

### Open Graph Tags
- `og:image` is set to `/og-image.png` (relative path - should be absolute)
- No `og:title` set on most pages (only on /demo)
- No `og:description` on most pages
- No Twitter Card meta tags

---

## 4. Schema / Structured Data (Score: 5/100)

### Current Implementation
**NONE.** No JSON-LD, Microdata, or RDFa structured data detected on any page.

### Missing Schema Opportunities

| Schema Type | Where | Priority |
|-------------|-------|----------|
| Organization | Homepage | CRITICAL |
| LocalBusiness | Homepage, Contact | CRITICAL |
| WebSite (with SearchAction) | Homepage | HIGH |
| Service | Services page | HIGH |
| BreadcrumbList | All pages | HIGH |
| FAQPage | Services, Voice Agents | MEDIUM |
| CaseStudy / Article | Case study pages | MEDIUM |
| ContactPage | Contact page | MEDIUM |
| HowTo | Prototypes page (10-day process) | LOW |

---

## 5. Performance (Score: 60/100)

### Observations
- Site is a React SPA (Single Page Application) - client-side rendered
- Uses Tailwind CSS (utility-first, generally efficient)
- Loads n8n chat widget on every page (external dependency)
- External font loading (Google Fonts via LeadConnector on contact page)
- Multiple third-party scripts: n8n chat, LeadConnector forms, reCAPTCHA

### Concerns
- **Client-side rendering** means search engine bots may not see full content
- **Third-party scripts** (n8n, LeadConnector) add load time
- **No lazy loading** detected on images
- Images served as PNG from `lovable-uploads/` - should be WebP/AVIF

---

## 6. Images (Score: 50/100)

### Image Audit

| Image | Alt Text | Format | Issue |
|-------|----------|--------|-------|
| Logo | "10x Velocity Logo" | PNG | OK alt, should be SVG |
| Mobile Logo | "10x Velocity Logo" | PNG | Duplicate alt |
| VOSB Badge | "VOSB Verified Logo" | PNG | OK |
| ESGR Badge | "ESGR Logo" | PNG | OK |
| Canopy Badge | "Canopy Certified Logo" | PNG | OK |
| Contact form banner | "Form banner image" | PNG (via CDN) | Generic alt text |
| OG Image | N/A | PNG | Uses relative path `/og-image.png` |

### Issues
- All images are PNG format - should use WebP/AVIF for performance
- No `width` and `height` attributes on images (CLS risk)
- Logo served from `lovable-uploads/` CDN - non-descriptive path
- OG image uses relative path instead of absolute URL
- No image compression optimization evident

---

## 7. AI Search Readiness (Score: 30/100)

### Citability Assessment

| Factor | Status | Details |
|--------|--------|---------|
| Clear, factual claims | PARTIAL | Case studies have specific metrics but feel templated |
| Named entities | PARTIAL | Company name, location, some client names |
| Structured content | PARTIAL | Good heading hierarchy but no schema |
| FAQ content | MISSING | No FAQ sections on any page |
| Definitions | MISSING | No glossary or definitional content |
| Statistics with sources | WEAK | Metrics in case studies but no external sources cited |
| Author expertise | WEAK | Author meta tag but no visible expertise signals |

### AI Overview Optimization
- **Weak position** for AI-generated search results
- No FAQ schema that could be pulled into AI Overviews
- Case study metrics are good citation material but lack schema markup
- Missing: Long-form blog content that AI systems can reference
- Missing: Comparison content (e.g., "AI automation vs manual processes")

---

## Contact Page Issues

### Specific Problems Found
1. **Email inconsistency:** Contact info shows `info@10xvelocity.com` but footer shows `info@10xvelocity.ai` - which is correct?
2. **Broken privacy/terms links in form:** The embedded LeadConnector form links to `https://www.example.com/` for Privacy Policy and Terms of Service - these are placeholder links that were never updated
3. **noindex tag:** Contact page has `robots: noindex` - intentional but worth noting
4. **Form UTM tracking field** is hidden but present - good for attribution

---

## WWW vs Non-WWW

- `www.10xvelocity.ai` properly redirects to `10xvelocity.ai`
- However, without canonical tags, search engines may still index both versions

---

## External Resources Subdomain

- `resources.10xvelocity.ai` is linked for Documentation, Playbooks, and Blog
- This subdomain was not crawled but represents a significant content opportunity
- Blog content on subdomain may not pass full SEO authority to main domain

---

## Footer Copyright

- Shows "2024" - should be updated to 2025 or use dynamic year

---
