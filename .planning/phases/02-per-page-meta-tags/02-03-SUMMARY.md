---
phase: 02-per-page-meta-tags
plan: 03
subsystem: infra
tags: [sitemap, robots.txt, seo, mutation-observer, dom, chat-widget, h1]

# Dependency graph
requires:
  - phase: 01-foundation-crawlability
    provides: "sitemap.xml and robots.txt files created in Phase 1"
provides:
  - "Corrected canonical domain (non-www) in sitemap.xml and robots.txt"
  - "CSS + JS fix for duplicate H1 injected by n8n chat widget"
  - "MutationObserver pattern for third-party widget DOM manipulation"
affects: ["phase-05 (post-deploy verification of shadow DOM behavior)"]

# Tech tracking
tech-stack:
  added: []
  patterns: ["MutationObserver for third-party widget DOM fixes in RootLayout"]

key-files:
  created: []
  modified:
    - public/sitemap.xml
    - public/robots.txt
    - src/index.css
    - src/components/layout/RootLayout.tsx

key-decisions:
  - "Two-pronged H1 fix: CSS fallback for visual demote + JS MutationObserver for DOM replacement"
  - "Post-deploy verification needed for chat widget shadow DOM vs light DOM behavior"

patterns-established:
  - "useChatWidgetH1Fix: MutationObserver hook pattern for fixing third-party widget DOM issues"

# Metrics
duration: 12min
completed: 2026-02-10
---

# Phase 2 Plan 3: Infrastructure Fixes Summary

**Corrected www-to-non-www domain in sitemap/robots and eliminated duplicate H1 from n8n chat widget via CSS fallback + MutationObserver DOM replacement**

## Performance

- **Duration:** 12 min
- **Started:** 2026-02-10T15:51:51Z
- **Completed:** 2026-02-10T16:04:12Z
- **Tasks:** 2
- **Files modified:** 4

## Accomplishments
- Replaced all 34 sitemap.xml URLs from www.10xvelocity.ai to 10xvelocity.ai, eliminating 301 redirect waste
- Updated robots.txt Sitemap directive to match canonical non-www domain
- Added CSS fallback rule targeting .chat-layout .chat-header h1 to visually demote widget heading
- Implemented useChatWidgetH1Fix MutationObserver hook in RootLayout.tsx that replaces chat widget H1 with span

## Task Commits

Each task was committed atomically:

1. **Task 1: Fix www -> non-www domain in sitemap.xml and robots.txt** - `ed836bc` (fix)
2. **Task 2: Fix duplicate H1 from n8n chat widget (CSS + JS MutationObserver)** - `2032c2a` (fix)

## Files Created/Modified
- `public/sitemap.xml` - All 34 URL loc elements updated from www to non-www domain
- `public/robots.txt` - Sitemap directive updated to non-www domain
- `src/index.css` - Added CSS rule to visually demote chat widget H1
- `src/components/layout/RootLayout.tsx` - Added useChatWidgetH1Fix hook with MutationObserver

## Decisions Made
- Used two-pronged approach for H1 fix: CSS fallback handles visual styling while JS MutationObserver handles DOM element replacement. This provides defense in depth.
- Post-deploy verification required: The chat widget may use Shadow DOM, in which case querySelector cannot reach the H1. The CSS fallback covers the visual case regardless. Live site testing is needed to confirm JS approach effectiveness.

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
- Pre-existing build failure in InnesYoung.tsx (missing closing fragment tag) was investigated but found to be an artifact of uncommitted changes from prior plan executions, not a real bug in the committed codebase. No fix was needed.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness
- Phase 2 (Per-Page Meta Tags) is now complete across all 3 plans
- All pages have Helmet meta tags, sitemap uses correct canonical domain, and chat widget H1 is handled
- Post-deploy check needed to verify chat widget H1 fix works on live site (shadow DOM uncertainty)
- Ready to proceed to Phase 3 (Structured Data / Schema.org) and Phase 4 (Open Graph & Social) which can run in parallel

---
*Phase: 02-per-page-meta-tags*
*Completed: 2026-02-10*
