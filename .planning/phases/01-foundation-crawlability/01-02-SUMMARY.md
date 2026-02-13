---
phase: 01-foundation-crawlability
plan: 02
subsystem: ui
tags: [seo, email, footer, copyright, external-links, accessibility]

# Dependency graph
requires:
  - phase: none
    provides: "No dependencies - independent content fixes"
provides:
  - "Corrected email addresses (info@10xvelocity.ai) across all pages"
  - "Dynamic copyright year in footer"
  - "Proper external link tags (target=_blank, rel=noopener noreferrer) in footer"
affects: [03-social-open-graph]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "External links use <a> with target=_blank and rel=noopener noreferrer (never React Router Link)"
    - "Dynamic dates via new Date().getFullYear() rather than hardcoded values"

key-files:
  created: []
  modified:
    - src/pages/Contact.tsx
    - src/pages/Blog.tsx
    - src/pages/PrivacyPolicy.tsx
    - src/pages/TermsOfService.tsx
    - src/components/landing/Footer.tsx

key-decisions:
  - "Link import preserved in Footer.tsx since 15 internal <Link> components still exist"
  - "FIX-02 (LeadConnector form privacy/terms links) documented as manual GoHighLevel admin step"

patterns-established:
  - "External URLs: always use native <a> tags, never React Router <Link>"
  - "Copyright year: always dynamic via JS Date, never hardcoded"

# Metrics
duration: 3min
completed: 2026-02-10
---

# Phase 1 Plan 2: Content Fixes Summary

**Standardized email to info@10xvelocity.ai across 4 pages, dynamic copyright year, and proper external link tags in footer**

## Performance

- **Duration:** 3 min
- **Started:** 2026-02-10T14:20:57Z
- **Completed:** 2026-02-10T14:23:16Z
- **Tasks:** 2
- **Files modified:** 5

## Accomplishments
- All email addresses across the site now read info@10xvelocity.ai (previously .com)
- Footer copyright year updates automatically via `new Date().getFullYear()` (was hardcoded 2024)
- Three external resource links in footer converted from React Router `<Link>` to native `<a>` tags with `target="_blank"` and `rel="noopener noreferrer"`

## Task Commits

Each task was committed atomically:

1. **Task 1: Fix email addresses across four pages** - `e1cfd28` (fix)
2. **Task 2: Fix Footer -- dynamic copyright year and external link tags** - `945618c` (fix)

## Files Created/Modified
- `src/pages/Contact.tsx` - Fixed mailto href and display text from .com to .ai
- `src/pages/Blog.tsx` - Fixed mailto href and display text from .com to .ai
- `src/pages/PrivacyPolicy.tsx` - Fixed plain-text email reference from .com to .ai
- `src/pages/TermsOfService.tsx` - Fixed plain-text email reference from .com to .ai
- `src/components/landing/Footer.tsx` - Dynamic copyright year + external links converted to `<a>` tags

## Decisions Made
- Preserved `Link` import in Footer.tsx because 15 internal `<Link>` components still reference it for client-side routing
- FIX-02 (LeadConnector form privacy/terms links) cannot be fixed in code -- requires manual GoHighLevel dashboard configuration (see User Setup Required below)

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
None

## User Setup Required

**FIX-02: LeadConnector embedded form links require manual GoHighLevel configuration.**

The contact forms on the site are loaded via iframe from `api.leadconnectorhq.com`. The privacy policy and terms of service links within these forms cannot be modified in code. To fix them:

1. Log into the GoHighLevel admin dashboard
2. Navigate to form settings for Form ID `mYtM8nnkSBtAzcDroeEO` (popup contact form)
3. Update the privacy policy link to point to `https://10xvelocity.ai/privacy-policy`
4. Update the terms of service link to point to `https://10xvelocity.ai/terms-of-service`
5. Repeat steps 2-4 for Form ID `oF3UAG9Kp3vwDm8QCJ1i` (contact page form)
6. Verify by loading the contact page and checking that the form footer links navigate correctly

## Next Phase Readiness
- Phase 1 Plan 2 complete. All content fixes applied.
- If Plan 1 (React Helmet, robots.txt, sitemap, 404) is also complete, Phase 1 is done and Phase 2 (per-page meta tags) can begin.
- No blockers or concerns.

---
*Phase: 01-foundation-crawlability*
*Completed: 2026-02-10*
