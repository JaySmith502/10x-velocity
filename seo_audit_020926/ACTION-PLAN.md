# SEO Action Plan: 10xvelocity.ai

**Generated:** February 9, 2026
**Current Score:** 38/100
**Target Score:** 75/100 (achievable within 30 days)

---

## CRITICAL Priority (Fix Immediately)

These issues are actively preventing indexing or causing penalties.

### 1. Create robots.txt
**Impact:** Crawlability | **Effort:** 15 min

```
User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://10xvelocity.ai/sitemap.xml
```

Deploy to `https://10xvelocity.ai/robots.txt` as a proper text file (not an HTML page).

---

### 2. Create XML Sitemap
**Impact:** Crawlability | **Effort:** 30 min

Create `sitemap.xml` with all indexable pages:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://10xvelocity.ai/</loc><priority>1.0</priority></url>
  <url><loc>https://10xvelocity.ai/about</loc><priority>0.8</priority></url>
  <url><loc>https://10xvelocity.ai/services</loc><priority>0.9</priority></url>
  <url><loc>https://10xvelocity.ai/services/phone-voice-agents</loc><priority>0.8</priority></url>
  <url><loc>https://10xvelocity.ai/services/data-cleaning</loc><priority>0.7</priority></url>
  <url><loc>https://10xvelocity.ai/case-studies</loc><priority>0.8</priority></url>
  <url><loc>https://10xvelocity.ai/case-studies/transportation-director</loc><priority>0.7</priority></url>
  <url><loc>https://10xvelocity.ai/case-studies/innes-young</loc><priority>0.7</priority></url>
  <url><loc>https://10xvelocity.ai/case-studies/ecatalyst</loc><priority>0.7</priority></url>
  <url><loc>https://10xvelocity.ai/case-studies/hillcrest-partners</loc><priority>0.7</priority></url>
  <url><loc>https://10xvelocity.ai/case-studies/catalyst-group</loc><priority>0.7</priority></url>
  <url><loc>https://10xvelocity.ai/case-studies/director-of-marketing</loc><priority>0.7</priority></url>
  <url><loc>https://10xvelocity.ai/case-studies/birchwood-real-estate</loc><priority>0.7</priority></url>
  <url><loc>https://10xvelocity.ai/case-studies/govbrokers</loc><priority>0.7</priority></url>
  <url><loc>https://10xvelocity.ai/case-studies/inspyrd</loc><priority>0.7</priority></url>
  <url><loc>https://10xvelocity.ai/savings-calculator</loc><priority>0.7</priority></url>
  <url><loc>https://10xvelocity.ai/demo</loc><priority>0.8</priority></url>
  <url><loc>https://10xvelocity.ai/industry-tools</loc><priority>0.7</priority></url>
  <url><loc>https://10xvelocity.ai/prototypes</loc><priority>0.8</priority></url>
  <url><loc>https://10xvelocity.ai/privacy-policy</loc><priority>0.3</priority></url>
  <url><loc>https://10xvelocity.ai/terms-of-service</loc><priority>0.3</priority></url>
</urlset>
```

---

### 3. Add Unique Title Tags to Every Page
**Impact:** Rankings + CTR | **Effort:** 1-2 hours

| Page | Current Title | Recommended Title |
|------|--------------|-------------------|
| / | 10x Velocity \| AI & Automation Consulting | AI & Automation Consulting Louisville KY \| 10x Velocity |
| /about | (same) | About 10x Velocity - Human-Centered AI Transformation |
| /services | (same) | AI Automation Services - Process Mining, Analytics & Training \| 10x Velocity |
| /services/phone-voice-agents | (same) | AI Phone Voice Agents - 24/7 Customer Call Handling \| 10x Velocity |
| /case-studies | (same) | AI Automation Case Studies - Proven Results \| 10x Velocity |
| /savings-calculator | (same) | Automation ROI Calculator - See Your Savings \| 10x Velocity |
| /demo | (same) | Try Our AI Voice Agent Demo \| 10x Velocity |
| /prototypes | (same) | Rapid AI Prototype Sprint - Idea to Proof in 10 Days \| 10x Velocity |
| /industry-tools | (already unique) | Keep current: "AI & Automation Tool Explorer by Industry" |
| /contact | (same) | Contact Us - Free 15-Min Discovery Call \| 10x Velocity |

---

### 4. Add Unique Meta Descriptions to Every Page
**Impact:** CTR from search results | **Effort:** 1-2 hours

| Page | Recommended Description (max 160 chars) |
|------|----------------------------------------|
| / | Transform your business with AI automation consulting. Based in Louisville, KY, 10x Velocity helps companies achieve 10x growth through intelligent automation. |
| /about | 10x Velocity deploys AI to unlock your team's full capacity. Our human-centered approach to automation creates sustainable acceleration, not one-off wins. |
| /services | AI process automation, data analytics, team training, process mining & more. Comprehensive solutions to overcome capacity challenges and scale operations. |
| /services/phone-voice-agents | AI-powered voice agents handle customer calls 24/7 in any language. Cut call center costs by 70% while boosting lead capture and customer satisfaction. |
| /case-studies | See how 10x Velocity clients achieved 400% lead growth, 85% error reduction, and 70% faster operations through AI-powered automation. Real results, real companies. |
| /savings-calculator | Calculate how much your business could save with automation. Estimate weekly and annual savings based on your team size, hours, and automation potential. |
| /demo | Experience our AI voice agent technology live. Enter your business info, receive a custom demo call, and see how AI handles customer inquiries 24/7. |
| /prototypes | Turn your AI or automation idea into a working prototype in 10 days for $10,000. Validate before you build. Clickable prototype with real logic included. |
| /industry-tools | (Keep current - already good) |
| /contact | Ready to accelerate your business? Book a free 15-minute discovery call with 10x Velocity. Louisville, KY office - serving companies worldwide. |

---

### 5. Fix Broken Form Links on Contact Page
**Impact:** Trust + Legal compliance | **Effort:** 15 min

The LeadConnector form on `/contact` links Privacy Policy and Terms of Service to `https://www.example.com/` (placeholder). Update to:
- Privacy Policy: `https://10xvelocity.ai/privacy-policy`
- Terms of Service: `https://10xvelocity.ai/terms-of-service`

---

### 6. Fix Email Inconsistency
**Impact:** Trust + User confusion | **Effort:** 5 min

Contact page body shows `info@10xvelocity.com` but footer shows `info@10xvelocity.ai`. Standardize to one email address across the entire site.

---

## HIGH Priority (Fix Within 1 Week)

### 7. Add Canonical Tags to All Pages
**Impact:** Prevents duplicate indexing | **Effort:** 30 min

Add to every page `<head>`:
```html
<link rel="canonical" href="https://10xvelocity.ai/[current-page-path]" />
```

---

### 8. Add Organization + LocalBusiness Schema
**Impact:** Rich results + Knowledge Panel | **Effort:** 1-2 hours

Add to homepage:
```json
{
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "name": "10x Velocity",
  "url": "https://10xvelocity.ai",
  "logo": "https://10xvelocity.ai/lovable-uploads/d113002f-f6b2-41b5-aa96-2057ce8f4046.png",
  "description": "AI & Automation consulting firm helping businesses achieve 10x growth through intelligent automation.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "10440 Bluegrass Pkwy",
    "addressLocality": "Louisville",
    "addressRegion": "KY",
    "postalCode": "40299",
    "addressCountry": "US"
  },
  "email": "info@10xvelocity.ai",
  "founder": {
    "@type": "Person",
    "name": "Jay Smith"
  },
  "sameAs": [],
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  }
}
```

---

### 9. Add Service Schema to Services Page
**Impact:** Rich results | **Effort:** 1 hour

Add JSON-LD for each service offering (Process Automation, Data Analytics, Team Augmentation, etc.)

---

### 10. Add BreadcrumbList Schema to All Pages
**Impact:** Rich results | **Effort:** 1 hour

Example for `/services/phone-voice-agents`:
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://10xvelocity.ai/"},
    {"@type": "ListItem", "position": 2, "name": "Services", "item": "https://10xvelocity.ai/services"},
    {"@type": "ListItem", "position": 3, "name": "Phone Voice Agents"}
  ]
}
```

---

### 11. Fix OG Image Path
**Impact:** Social sharing | **Effort:** 15 min

Change from relative path `/og-image.png` to absolute: `https://10xvelocity.ai/og-image.png`

Add complete Open Graph and Twitter Card tags to all pages:
```html
<meta property="og:title" content="[Page-specific title]" />
<meta property="og:description" content="[Page-specific description]" />
<meta property="og:image" content="https://10xvelocity.ai/og-image.png" />
<meta property="og:url" content="https://10xvelocity.ai/[path]" />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary_large_image" />
```

---

### 12. Fix Multiple H1 Tags
**Impact:** SEO clarity | **Effort:** 30 min

The n8n chat widget injects an `<h1>Hi there!</h1>` on every page. Change the chat widget heading to `<div>` or `<span>` instead of `<h1>`.

---

### 13. Consider Server-Side Rendering (SSR)
**Impact:** Crawlability | **Effort:** Significant (days/weeks)

The site is a React SPA (likely built with Lovable/Vite). Search engines struggle with client-side rendering. Options:
- Implement SSR with Next.js or similar
- Use pre-rendering service (e.g., Prerender.io)
- At minimum, ensure Google Search Console shows pages are rendering correctly

---

## MEDIUM Priority (Fix Within 1 Month)

### 14. Create Blog Content Strategy
**Impact:** Organic traffic + Authority | **Effort:** Ongoing

The blog lives on `resources.10xvelocity.ai` - consider moving it to `10xvelocity.ai/blog` to consolidate domain authority.

Target content topics:
- "AI automation for small business - getting started guide"
- "How to calculate ROI on business automation"
- "AI voice agents vs call centers - cost comparison"
- "Process mining explained for business owners"
- "Louisville business automation case studies"
- Industry-specific guides (real estate, legal, healthcare)

---

### 15. Add FAQ Sections to Key Pages
**Impact:** Featured snippets + AI Overviews | **Effort:** 2-3 hours

Add FAQ sections with FAQPage schema to:
- Services page: "What is process mining?", "How long does implementation take?"
- Voice Agents page: "How do AI voice agents work?", "Can they handle multiple languages?"
- Prototypes page: "What do I get in the 10-day sprint?", "Who is this for?"

---

### 16. Expand Thin Content Pages
**Impact:** Rankings | **Effort:** 3-5 hours

Priority pages to expand:
- **Homepage:** Add client logos, key metrics, brief testimonials
- **Savings Calculator:** Add methodology explanation, industry benchmarks
- **Industry Tools:** Add descriptions for each industry, link to relevant case studies
- **Contact:** Add FAQ, response time expectations

---

### 17. Add Customer Testimonials
**Impact:** E-E-A-T + Conversion | **Effort:** 2-3 hours (content gathering)

Add testimonial quotes to:
- Homepage (social proof section)
- Case study pages (client quotes)
- Services page

Use Review schema markup for testimonials.

---

### 18. Add Team/Leadership Page
**Impact:** E-E-A-T | **Effort:** 2-3 hours

Create a team page or add founder bio to about page with:
- Professional headshot
- LinkedIn profile link
- Credentials and experience
- Use Person schema markup

---

### 19. Optimize Images
**Impact:** Performance | **Effort:** 2-3 hours

- Convert PNG images to WebP format
- Add explicit `width` and `height` attributes
- Implement lazy loading for below-fold images
- Consider converting logo to SVG

---

### 20. Update Copyright Year
**Impact:** Freshness signal | **Effort:** 5 min

Change footer from "2024" to "2025" or implement dynamic year.

---

## LOW Priority (Backlog)

### 21. Set Up Google Business Profile
Ensure GBP is claimed and optimized for "AI consulting Louisville KY"

### 22. Submit to Google Search Console
If not already done, verify the site and submit sitemap

### 23. Add Social Media Links
No social media profiles linked anywhere on the site. Add to footer and use `sameAs` in schema.

### 24. Create 404 Page with Proper Status Code
Current 404 returns HTTP 200 (soft 404). Ensure it returns actual 404 status.

### 25. Individual Case Study SEO
Each case study page should have:
- Unique title tag with client name and industry
- Unique meta description with key metrics
- CaseStudy or Article schema
- Internal links to related services

### 26. Implement Breadcrumb Navigation
Visual breadcrumbs for user navigation + BreadcrumbList schema

### 27. Add rel="noopener noreferrer" Audit
Some external links have it, others don't. Standardize for security.

### 28. Consider Moving Blog to Main Domain
`resources.10xvelocity.ai` blog content should ideally live at `10xvelocity.ai/blog` to consolidate domain authority.

---

## Implementation Priority Matrix

```
                    HIGH IMPACT
                        |
     [3,4] Titles     [1,2] robots.txt
     & Descriptions    & Sitemap
                        |
LOW EFFORT ------------|------------- HIGH EFFORT
                        |
     [11] OG tags      [13] SSR
     [12] Fix H1s      [14] Blog
                        |
                    LOW IMPACT
```

## Expected Score After Fixes

| Priority | Fixes | Projected Score Impact |
|----------|-------|----------------------|
| Critical (items 1-6) | Same day | 38 -> 55 |
| High (items 7-13) | 1 week | 55 -> 68 |
| Medium (items 14-20) | 1 month | 68 -> 78 |
| Low (items 21-28) | Backlog | 78 -> 85+ |
