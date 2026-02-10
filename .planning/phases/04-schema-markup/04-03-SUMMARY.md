---
phase: 04-schema-markup
plan: 03
subsystem: seo
tags: [json-ld, schema.org, article, breadcrumblist, structured-data, case-studies]

# Dependency graph
requires:
  - phase: 04-schema-markup
    plan: 01
    provides: react-schemaorg, schema-dts, BUSINESS_DATA, breadcrumbJsonLd helper
  - phase: 02-meta-tags
    provides: existing Helmet blocks with title/description on all pages
  - phase: 03-social-open-graph
    provides: OG tags on all pages
provides:
  - Article JSON-LD on all 9 case study pages (SCHM-05)
  - BreadcrumbList JSON-LD on all interior pages (SCHM-03 complete)
  - Every non-homepage page now has appropriate schema markup
affects: []

# Tech tracking
tech-stack:
  added: []
  patterns: [Article JSON-LD with publisher ImageObject logo, BreadcrumbList helper reuse across all pages]

key-files:
  created: []
  modified:
    - src/pages/case-studies/InnesYoung.tsx
    - src/pages/case-studies/ECatalyst.tsx
    - src/pages/case-studies/HillcrestPartners.tsx
    - src/pages/case-studies/CatalystGroup.tsx
    - src/pages/case-studies/DirectorOfMarketing.tsx
    - src/pages/case-studies/BirchwoodRealEstate.tsx
    - src/pages/case-studies/GovBrokers.tsx
    - src/pages/case-studies/Inspyrd.tsx
    - src/pages/case-studies/TransportationDirector.tsx
    - src/pages/CaseStudies.tsx
    - src/pages/About.tsx
    - src/pages/Contact.tsx
    - src/pages/Blog.tsx
    - src/pages/SavingsCalculator.tsx
    - src/pages/IndustryTools.tsx
    - src/pages/PowerAutomate.tsx
    - src/pages/Prototypes.tsx
    - src/pages/LexiFile.tsx
    - src/pages/LunchAndLearn.tsx
    - src/pages/OnboardingForm.tsx
    - src/pages/AIGuideCertification.tsx
    - src/pages/PrivacyPolicy.tsx
    - src/pages/TermsOfService.tsx
    - src/components/blog/BlogPost.tsx

key-decisions:
  - "Nested routes (events/, programs/) use 2-item breadcrumbs since parent routes don't exist as real pages"
  - "Article schema omits datePublished/dateModified since no dates exist in the codebase -- valid per Google docs"
  - "BlogPost dynamic component uses post.title (full, not truncated) as breadcrumb name"

patterns-established:
  - "Article JSON-LD pattern: headline from Helmet title (minus suffix), description from meta, publisher with ImageObject logo, BUSINESS_DATA for author/publisher/image"
  - "BreadcrumbList reuse: all pages import breadcrumbJsonLd and pass trail array to Helmet script prop"

# Metrics
duration: 4min
completed: 2026-02-10
---

# Phase 4 Plan 03: Article + BreadcrumbList JSON-LD Summary

**Article JSON-LD on all 9 case study pages plus BreadcrumbList JSON-LD on all remaining interior pages, completing SCHM-03 and SCHM-05**

## Performance

- **Duration:** 4 min
- **Started:** 2026-02-10T18:47:11Z
- **Completed:** 2026-02-10T18:50:39Z
- **Tasks:** 2
- **Files modified:** 24

## Accomplishments
- Added Article JSON-LD to all 9 case study pages with headline, description, author (Organization), publisher (Organization with ImageObject logo), image, and mainEntityOfPage
- Added BreadcrumbList JSON-LD to all 9 case study pages (Home > Case Studies > [Client Name])
- Added BreadcrumbList JSON-LD to 14 remaining interior pages (About, Contact, Blog, CaseStudies index, SavingsCalculator, IndustryTools, PowerAutomate, Prototypes, LexiFile, LunchAndLearn, OnboardingForm, AIGuideCertification, PrivacyPolicy, TermsOfService)
- Added BreadcrumbList JSON-LD to BlogPost dynamic component (Home > Blog > [Post Title])
- SCHM-05 (Article/CaseStudy schema on case studies) fully fulfilled
- SCHM-03 (BreadcrumbList on ALL interior pages) fully fulfilled
- Every page on the site now has appropriate structured data markup

## Task Commits

Each task was committed atomically:

1. **Task 1: Article + BreadcrumbList JSON-LD on all 9 case study pages** - `2e98aa9` (feat)
2. **Task 2: BreadcrumbList JSON-LD on all remaining interior pages** - `9a84bce` (feat)

## Files Created/Modified
- 9 case study pages: Added helmetJsonLdProp, BUSINESS_DATA, and breadcrumbJsonLd imports; added Article + BreadcrumbList script prop to existing Helmet
- 14 interior pages: Added breadcrumbJsonLd import; added BreadcrumbList script prop to existing Helmet
- 1 dynamic component (BlogPost.tsx): Added breadcrumbJsonLd import; added BreadcrumbList with dynamic post title and id

## Decisions Made
- **Nested route breadcrumbs:** For routes under /events/ and /programs/ where no parent index page exists, used 2-item breadcrumbs (Home > [Page]) instead of 3-item trails with non-existent intermediate pages
- **No datePublished/dateModified:** Omitted from Article schema since no publication dates exist in the codebase; omitting is valid per Google structured data documentation
- **BlogPost breadcrumb name:** Used `post.title` (full title, not the truncated `blogTitle`) as the breadcrumb name for better user clarity

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness
- Phase 4 (Schema Markup) is now fully complete across all 3 plans
- All SCHM roadmap items fulfilled: SCHM-01 (Organization), SCHM-03 (BreadcrumbList), SCHM-05 (Article), SCHM-06 (WebSite), SOCL-04 (sameAs)
- Phase 5 (Image Optimization) can proceed independently

---
*Phase: 04-schema-markup*
*Completed: 2026-02-10*
