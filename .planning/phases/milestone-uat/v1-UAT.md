---
status: complete
phase: v1-milestone
source: 01-01-SUMMARY.md, 01-02-SUMMARY.md, 02-01-SUMMARY.md, 02-02-SUMMARY.md, 02-03-SUMMARY.md, 03-01-SUMMARY.md, 03-02-SUMMARY.md, 04-01-SUMMARY.md, 04-02-SUMMARY.md, 04-03-SUMMARY.md, 05-01-SUMMARY.md, 05-02-SUMMARY.md, 05-03-SUMMARY.md
started: 2026-02-11T01:10:00Z
updated: 2026-02-11T01:30:00Z
---

## Current Test

[testing complete]

## Tests

### 1. Homepage loads with correct title
expected: Run `npm run dev`. Open http://localhost:8080. Browser tab shows "AI & Automation Consulting | 10x Velocity". Page renders normally with header, hero, and footer.
result: pass

### 2. robots.txt accessible
expected: Visit http://localhost:8080/robots.txt. Shows plain text (not HTML) with "User-agent", "Allow", and "Sitemap: https://10xvelocity.ai/sitemap.xml".
result: pass

### 3. sitemap.xml accessible
expected: Visit http://localhost:8080/sitemap.xml. Shows XML content with <urlset> containing multiple <url> entries. URLs use https://10xvelocity.ai (no www).
result: pass

### 4. 404 page for unknown routes
expected: Visit http://localhost:8080/does-not-exist. Shows a styled 404 page (not a blank page or the homepage).
result: pass

### 5. Footer copyright and external links
expected: Scroll to footer on any page. Copyright shows "2026" (current year). The "Power Platform Experts", "Copilot Studio Cookbook", and "Prompt Engineering Guide" links open in new browser tabs.
result: pass

### 6. Unique page titles across site
expected: Navigate to /services, /about, /case-studies, /blog, and /contact. Each page shows a different title in the browser tab. None show the generic "Vite + React + TS" or duplicate another page's title.
result: pass

### 7. LinkedIn link in footer
expected: In the footer Company column, there's a LinkedIn icon/link. Clicking it opens https://www.linkedin.com/company/10x-velocity in a new tab.
result: pass

### 8. Visual breadcrumbs on interior pages
expected: Visit /services. A breadcrumb trail "Home > Services" appears near the top of the page. Visit /services/phone-voice-agents. Breadcrumb shows "Home > Services > Phone Voice Agents". Visit /about. Breadcrumb shows "Home > About".
result: pass

### 9. Breadcrumb SPA navigation
expected: On /services/phone-voice-agents, click "Home" in the breadcrumb trail. Page navigates to homepage WITHOUT a full page reload (no white flash, instant transition). Click browser back. Returns to phone-voice-agents instantly.
result: pass

### 10. FAQ section on Services page
expected: Visit /services. Scroll down to find a "Frequently Asked Questions" section. Shows 4 collapsed Q&A items. Click one -- it expands to show the answer. Click another -- it expands (previous may collapse). Questions include "What AI and automation services does 10x Velocity offer?"
result: pass

### 11. FAQ section on Phone Voice Agents page
expected: Visit /services/phone-voice-agents. Scroll down to find a "Frequently Asked Questions" section. Shows 4 collapsed Q&A items. First question is "How do AI voice agents handle customer calls?" Click to expand -- shows answer about NLP and lead qualification.
result: pass

### 12. Case study internal service links
expected: Visit /case-studies/hillcrest-partners. In the What's Next section, find links to "/services/data-cleaning" and "/services". Links are styled (accent color) and clicking navigates within the SPA. Check one more case study (e.g., /case-studies/birchwood-real-estate) for links to "/services/phone-voice-agents".
result: pass

### 13. Images render as WebP
expected: Right-click the site logo in the header and "Open image in new tab" or inspect element. The image URL ends in .webp (not .png). In the footer, badge images also use .webp format.
result: pass

### 14. Images have proper dimensions (no layout shift)
expected: Hard-refresh any page (Ctrl+Shift+R). Watch the header logo and footer badges load. They should NOT cause content to jump/shift as they load. Images occupy their correct space immediately.
result: pass

### 15. Blog page works with proper meta tags
expected: Visit /blog. Shows blog post cards with images. Right-click > View Page Source (or inspect Helmet output). Page has a unique title containing "Blog" and meta description. OG tags present.
result: pass

### 16. JSON-LD schema on homepage
expected: Visit homepage. View Page Source (Ctrl+U). Search for "application/ld+json". Find a JSON-LD block containing "@type": "Organization" with "10x Velocity" name, and "@type": "WebSite".
result: pass

### 17. Email shows info@10xvelocity.ai
expected: Visit /contact. The displayed email address and mailto link both show info@10xvelocity.ai (not .com). Check footer -- email there also shows .ai domain.
result: pass

## Summary

total: 17
passed: 17
issues: 0
pending: 0
skipped: 0

## Gaps

[none]
