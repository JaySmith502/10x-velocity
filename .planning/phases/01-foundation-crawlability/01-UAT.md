---
status: complete
phase: 01-foundation-crawlability
source: [01-01-SUMMARY.md, 01-02-SUMMARY.md]
started: 2026-02-10
updated: 2026-02-10
---

## Current Test

[testing complete]

## Tests

### 1. Homepage browser tab title
expected: Run `npm run dev` and visit http://localhost:8080/. The browser tab should show "AI & Automation Consulting | 10x Velocity" (not the generic SPA title).
result: pass

### 2. robots.txt serves correctly
expected: Visit http://localhost:8080/robots.txt. Should display plain text (not the React app) containing "User-agent: *", "Allow: /", and "Sitemap: https://www.10xvelocity.ai/sitemap.xml".
result: pass

### 3. sitemap.xml serves correctly
expected: Visit http://localhost:8080/sitemap.xml. Should display XML (not the React app) listing routes like https://www.10xvelocity.ai/, https://www.10xvelocity.ai/about, etc. with priority values.
result: pass

### 4. Email addresses show .ai domain
expected: Visit http://localhost:8080/contact. The email should read "info@10xvelocity.ai" (not .com). Also check /privacy-policy and /terms-of-service pages — all should show .ai.
result: pass

### 5. Footer copyright year is dynamic
expected: Scroll to the footer on any page. The copyright line should read "© 2026 10x Velocity. All rights reserved." (current year, not 2024).
result: pass

### 6. Footer external links open in new tab
expected: In the footer Resources section, click "Documentation", "Playbooks", or "Blog". Each should open in a new browser tab pointing to resources.10xvelocity.ai (not navigate within the same tab).
result: pass

### 7. Non-existent URL shows 404 page
expected: Visit http://localhost:8080/does-not-exist. The React app should show the NotFound/404 page. Note: proper HTTP 404 status requires Netlify deployment — locally it will still return 200 from Vite dev server. If you can only test locally, type "skip".
result: pass

## Summary

total: 7
passed: 7
issues: 0
pending: 0
skipped: 0

## Gaps

[none]
