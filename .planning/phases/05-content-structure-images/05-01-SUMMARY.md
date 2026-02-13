---
phase: 05-content-structure-images
plan: 01
subsystem: ui
tags: [breadcrumb, faq, accordion, shadcn, react-router]

# Dependency graph
requires:
  - phase: 04-schema-markup
    provides: FAQPage JSON-LD schemas on Services and PhoneVoiceAgents pages, BreadcrumbList JSON-LD on all pages
provides:
  - Reusable VisualBreadcrumb component for all interior pages
  - Visible FAQ Accordion sections on Services and PhoneVoiceAgents pages
  - Single-sourced FAQ data pattern (one array serves both visible UI and schema)
affects: [05-02 (breadcrumb rollout to all 27+ pages), 05-03 (image optimization)]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "VisualBreadcrumb component accepts BreadcrumbItem[] (name + path) matching schema shape"
    - "FAQ single-source pattern: const faqs array referenced by both Accordion UI and FAQPage JSON-LD schema"
    - "asChild + React Router Link for SPA navigation in breadcrumbs"

key-files:
  created:
    - src/components/VisualBreadcrumb.tsx
  modified:
    - src/pages/Services.tsx
    - src/pages/services/PhoneVoiceAgents.tsx

key-decisions:
  - "VisualBreadcrumb defines BreadcrumbItemData interface locally rather than importing from schemas/breadcrumbs.ts to avoid coupling visual component to schema helper"
  - "FAQ sections placed before CTA sections matching AIWorkshops.tsx established pattern"

patterns-established:
  - "VisualBreadcrumb usage: import { VisualBreadcrumb } from '@/components/VisualBreadcrumb' with items array matching breadcrumbJsonLd items"
  - "FAQ single-source: extract FAQ content to const faqs array, reference from both schema and Accordion"

# Metrics
duration: 3min
completed: 2026-02-10
---

# Phase 5 Plan 1: FAQ Sections & VisualBreadcrumb Summary

**Reusable VisualBreadcrumb component with shadcn primitives + React Router Links, and visible FAQ Accordion sections on Services and PhoneVoiceAgents pages using single-sourced data**

## Performance

- **Duration:** 3 min
- **Started:** 2026-02-11T00:41:34Z
- **Completed:** 2026-02-11T00:44:12Z
- **Tasks:** 2
- **Files modified:** 3

## Accomplishments
- Created reusable VisualBreadcrumb component that renders linked breadcrumb trails using shadcn Breadcrumb primitives with React Router Links for SPA navigation
- Added visible FAQ sections with 4 expandable Q&A pairs to both Services and PhoneVoiceAgents pages
- Refactored inline FAQ schema content into shared faqs arrays -- single source of truth for both visible Accordion and FAQPage JSON-LD schema
- Added breadcrumb navigation to both pages (Services: Home > Services; PhoneVoiceAgents: Home > Services > Phone Voice Agents)

## Task Commits

Each task was committed atomically:

1. **Task 1: Create VisualBreadcrumb component** - `f5a98b2` (feat)
2. **Task 2: Add FAQ sections and breadcrumbs to Services and PhoneVoiceAgents** - `369fd1c` (feat)

## Files Created/Modified
- `src/components/VisualBreadcrumb.tsx` - Reusable breadcrumb trail component accepting BreadcrumbItem[] with asChild + Link for SPA navigation
- `src/pages/Services.tsx` - Added FAQ Accordion section, VisualBreadcrumb, extracted faqs array as single source of truth
- `src/pages/services/PhoneVoiceAgents.tsx` - Added FAQ Accordion section, VisualBreadcrumb, extracted faqs array as single source of truth

## Decisions Made
- Defined BreadcrumbItemData interface locally in VisualBreadcrumb.tsx rather than importing from schemas/breadcrumbs.ts, avoiding coupling the visual component to the schema helper module
- Placed FAQ sections before CTA sections, matching the established pattern from AIWorkshops.tsx

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness
- VisualBreadcrumb component ready for rollout to all 27+ interior pages in Plan 02
- FAQ single-source pattern established for any future pages that need visible FAQs
- Build passes cleanly with zero errors

---
*Phase: 05-content-structure-images*
*Completed: 2026-02-10*
