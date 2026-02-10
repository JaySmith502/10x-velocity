---
phase: 04-schema-markup
plan: 02
subsystem: seo
tags: [json-ld, schema.org, service, faqpage, breadcrumblist, structured-data, react-schemaorg]

# Dependency graph
requires:
  - phase: 04-schema-markup/01
    provides: react-schemaorg, schema-dts, BUSINESS_DATA, breadcrumbJsonLd helper
  - phase: 02-meta-tags
    provides: existing Helmet blocks with meta descriptions on all service pages
provides:
  - Service JSON-LD on Services index (8 services) and 4 individual service pages
  - FAQPage JSON-LD on Services (authored), PhoneVoiceAgents (authored), AIWorkshops (existing faqs)
  - BreadcrumbList JSON-LD on all 5 service-related pages
  - SCHM-02 (Service schema), SCHM-03 (BreadcrumbList for services), SCHM-04 (FAQPage) fulfilled
affects: [04-03]

# Tech tracking
tech-stack:
  added: []
  patterns: [helmetJsonLdProp for per-page Service schema, FAQPage from existing data arrays, schema-only FAQ content for pages without visible FAQ UI]

key-files:
  created: []
  modified: [src/pages/Services.tsx, src/pages/services/DataCleaning.tsx, src/pages/services/PhoneVoiceAgents.tsx, src/pages/services/AIWorkshops.tsx, src/pages/SmartBots.tsx]

key-decisions:
  - "Services index maps over existing services array for DRY Service JSON-LD generation"
  - "AIWorkshops FAQPage maps over existing faqs array (question/answer fields) for consistency with visible FAQ content"
  - "Services and PhoneVoiceAgents get authored FAQ content in schema-only (visible FAQ UI deferred to Phase 5 CONT-02)"

patterns-established:
  - "Schema-only FAQ: author FAQ Q&A pairs in JSON-LD without visible UI when FAQ section is planned for later phase"
  - "Service JSON-LD pattern: name from page title, description from meta description, provider @id reference to Organization"

# Metrics
duration: 2min
completed: 2026-02-10
---

# Phase 4 Plan 02: Service Page Schema Summary

**Service JSON-LD for all 8 services, FAQPage on 3 pages (2 authored, 1 from existing data), and BreadcrumbList on all 5 service pages**

## Performance

- **Duration:** 2 min
- **Started:** 2026-02-10T18:47:11Z
- **Completed:** 2026-02-10T18:49:28Z
- **Tasks:** 1
- **Files modified:** 5

## Accomplishments
- Added Service JSON-LD to Services index page (8 services mapped from existing array) and 4 individual service pages (DataCleaning, PhoneVoiceAgents, AIWorkshops, SmartBots)
- Added FAQPage JSON-LD on 3 pages: Services (4 authored Q&A pairs), PhoneVoiceAgents (4 authored Q&A pairs), AIWorkshops (mapped from existing faqs array with 4 items)
- Added BreadcrumbList JSON-LD to all 5 service-related pages using breadcrumbJsonLd helper from Plan 01
- All Service schemas reference Organization via provider @id ("https://10xvelocity.ai/#organization")
- Fulfilled SCHM-02 (Service), SCHM-04 (FAQPage), and SCHM-03 partial (BreadcrumbList for service pages)

## Task Commits

Each task was committed atomically:

1. **Task 1: Service + FAQPage + BreadcrumbList JSON-LD on Services index and individual service pages** - `3cdc861` (feat)

## Files Created/Modified
- `src/pages/Services.tsx` - Added 8 Service JSON-LD (mapped from services array), FAQPage with 4 authored Q&A pairs, BreadcrumbList
- `src/pages/services/DataCleaning.tsx` - Added Service JSON-LD + BreadcrumbList
- `src/pages/services/PhoneVoiceAgents.tsx` - Added Service JSON-LD + FAQPage with 4 authored Q&A pairs + BreadcrumbList
- `src/pages/services/AIWorkshops.tsx` - Added Service JSON-LD + FAQPage mapped from existing faqs array + BreadcrumbList
- `src/pages/SmartBots.tsx` - Added Service JSON-LD + BreadcrumbList

## Decisions Made
- **DRY Service generation on Services index:** Mapped over existing `services` array to generate 8 Service JSON-LD blocks automatically rather than hardcoding each
- **AIWorkshops FAQPage from existing data:** Used the existing `faqs` array (with `question`/`answer` fields) to generate FAQPage JSON-LD, ensuring schema matches visible page content exactly
- **Schema-only FAQ content:** For Services and PhoneVoiceAgents pages, authored FAQ Q&A content that exists only in JSON-LD schema; visible FAQ UI sections are deferred to Phase 5 CONT-02

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness
- All service page schema markup complete
- Plan 04-03 (case study/blog Article schema + remaining BreadcrumbList) can proceed
- breadcrumbJsonLd helper pattern proven across 5 pages

---
*Phase: 04-schema-markup*
*Completed: 2026-02-10*
