---
phase: 05-content-structure-images
plan: 02
subsystem: ui
tags: [breadcrumb, internal-links, react-router, navigation, seo]

# Dependency graph
requires:
  - phase: 05-content-structure-images
    provides: VisualBreadcrumb component (Plan 01), BreadcrumbList JSON-LD on all pages (Phase 04)
provides:
  - Visual breadcrumb navigation on all 27 interior pages
  - Internal service links on all 9 case study pages
  - Complete CONT-01 (breadcrumb navigation) and CONT-04 (case study service links)
affects: []

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "VisualBreadcrumb items array always matches existing breadcrumbJsonLd() call for consistency"
    - "Service links use Link from react-router-dom with text-velocity-accent hover:underline styling"
    - "Service link paragraphs placed before CTA cards in What's Next sections"

key-files:
  created: []
  modified:
    - src/pages/About.tsx
    - src/pages/AIGuideCertification.tsx
    - src/pages/Blog.tsx
    - src/pages/CaseStudies.tsx
    - src/pages/Contact.tsx
    - src/pages/IndustryTools.tsx
    - src/pages/LexiFile.tsx
    - src/pages/LunchAndLearn.tsx
    - src/pages/OnboardingForm.tsx
    - src/pages/PowerAutomate.tsx
    - src/pages/PrivacyPolicy.tsx
    - src/pages/Prototypes.tsx
    - src/pages/SavingsCalculator.tsx
    - src/pages/SmartBots.tsx
    - src/pages/TermsOfService.tsx
    - src/pages/services/AIWorkshops.tsx
    - src/pages/services/DataCleaning.tsx
    - src/components/blog/BlogPost.tsx
    - src/pages/case-studies/InnesYoung.tsx
    - src/pages/case-studies/ECatalyst.tsx
    - src/pages/case-studies/HillcrestPartners.tsx
    - src/pages/case-studies/CatalystGroup.tsx
    - src/pages/case-studies/DirectorOfMarketing.tsx
    - src/pages/case-studies/BirchwoodRealEstate.tsx
    - src/pages/case-studies/GovBrokers.tsx
    - src/pages/case-studies/Inspyrd.tsx
    - src/pages/case-studies/TransportationDirector.tsx

key-decisions:
  - "SmartBots breadcrumb uses 3-item path (Home > Services > Smart Bots) matching existing JSON-LD, not 2-item as plan template suggested"
  - "OnboardingForm breadcrumb uses /demo path matching existing JSON-LD canonical"
  - "Service links placed before CTA glass-card in each case study What's Next section"

patterns-established:
  - "All interior pages now have VisualBreadcrumb as first visible element inside main content wrapper"
  - "Case study service links use contextual copy referencing specific services (data-cleaning, phone-voice-agents, ai-workshops)"

# Metrics
duration: 5min
completed: 2026-02-10
---

# Phase 5 Plan 2: Visual Breadcrumbs & Case Study Service Links Summary

**VisualBreadcrumb applied to all 27 interior pages matching JSON-LD data, plus internal service links on all 9 case studies for CONT-01 and CONT-04 completion**

## Performance

- **Duration:** 5 min
- **Started:** 2026-02-11T00:48:58Z
- **Completed:** 2026-02-11T00:54:24Z
- **Tasks:** 2
- **Files modified:** 27

## Accomplishments
- Applied VisualBreadcrumb component to all 18 remaining non-case-study interior pages (13 two-item, 2 nested-route two-item, 3 three-item breadcrumbs)
- Applied VisualBreadcrumb to all 9 case study pages with 3-item trails (Home > Case Studies > Name)
- Added BlogPost dynamic breadcrumb using post.title from resolved post data
- Added internal service links to 8 case studies (InnesYoung, ECatalyst, HillcrestPartners, CatalystGroup, DirectorOfMarketing, BirchwoodRealEstate, GovBrokers, Inspyrd)
- Augmented TransportationDirector with additional /services link alongside existing /power-automate link
- CONT-01 (breadcrumb navigation on all interior pages) complete
- CONT-04 (internal service links in all case studies) complete

## Task Commits

Each task was committed atomically:

1. **Task 1: Add breadcrumbs to all remaining interior pages** - `90c8a6e` (feat)
2. **Task 2: Add breadcrumbs and internal service links to all case studies** - `c8d8ac8` (feat)

## Files Created/Modified
- `src/pages/About.tsx` - Added 2-item breadcrumb (Home > About)
- `src/pages/AIGuideCertification.tsx` - Added 2-item breadcrumb (Home > AI Guide Certification)
- `src/pages/Blog.tsx` - Added 2-item breadcrumb (Home > Blog)
- `src/pages/CaseStudies.tsx` - Added 2-item breadcrumb (Home > Case Studies)
- `src/pages/Contact.tsx` - Added 2-item breadcrumb (Home > Contact)
- `src/pages/IndustryTools.tsx` - Added 2-item breadcrumb (Home > Industry Tools)
- `src/pages/LexiFile.tsx` - Added 2-item breadcrumb (Home > Lexi-File)
- `src/pages/LunchAndLearn.tsx` - Added 2-item breadcrumb (Home > Lunch & Learn)
- `src/pages/OnboardingForm.tsx` - Added 2-item breadcrumb (Home > Demo)
- `src/pages/PowerAutomate.tsx` - Added 2-item breadcrumb (Home > Power Automate)
- `src/pages/PrivacyPolicy.tsx` - Added 2-item breadcrumb (Home > Privacy Policy)
- `src/pages/Prototypes.tsx` - Added 2-item breadcrumb (Home > Prototypes)
- `src/pages/SavingsCalculator.tsx` - Added 2-item breadcrumb (Home > Savings Calculator)
- `src/pages/SmartBots.tsx` - Added 3-item breadcrumb (Home > Services > Smart Bots)
- `src/pages/TermsOfService.tsx` - Added 2-item breadcrumb (Home > Terms of Service)
- `src/pages/services/AIWorkshops.tsx` - Added 3-item breadcrumb (Home > Services > AI Workshops)
- `src/pages/services/DataCleaning.tsx` - Added 3-item breadcrumb (Home > Services > Data Cleaning)
- `src/components/blog/BlogPost.tsx` - Added dynamic 3-item breadcrumb (Home > Blog > Post Title)
- `src/pages/case-studies/InnesYoung.tsx` - Breadcrumb + service link to /services
- `src/pages/case-studies/ECatalyst.tsx` - Breadcrumb + service link to /services
- `src/pages/case-studies/HillcrestPartners.tsx` - Breadcrumb + links to /services/data-cleaning and /services
- `src/pages/case-studies/CatalystGroup.tsx` - Breadcrumb + service link to /services
- `src/pages/case-studies/DirectorOfMarketing.tsx` - Breadcrumb + service link to /services
- `src/pages/case-studies/BirchwoodRealEstate.tsx` - Breadcrumb + links to /services/phone-voice-agents and /services
- `src/pages/case-studies/GovBrokers.tsx` - Breadcrumb + service link to /services
- `src/pages/case-studies/Inspyrd.tsx` - Breadcrumb + links to /services/ai-workshops and /services
- `src/pages/case-studies/TransportationDirector.tsx` - Breadcrumb + additional /services link

## Decisions Made
- SmartBots breadcrumb uses 3-item path (Home > Services > Smart Bots) matching its existing JSON-LD BreadcrumbList, rather than the 2-item path suggested in plan text
- OnboardingForm breadcrumb uses /demo path matching its existing JSON-LD canonical URL
- Service link paragraphs placed immediately before CTA glass-cards in each case study's What's Next section for natural reading flow

## Deviations from Plan

None - plan executed exactly as written. The SmartBots breadcrumb correction (3-item vs 2-item) aligns with the plan's own instruction to match existing breadcrumbJsonLd() calls.

## Issues Encountered

None.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness
- All CONT-01 and CONT-04 requirements complete
- Phase 5 fully complete (Plans 01, 02, 03 all done)
- All 5 SEO phases complete -- project finished
- Build passes cleanly with zero errors

---
*Phase: 05-content-structure-images*
*Completed: 2026-02-10*
