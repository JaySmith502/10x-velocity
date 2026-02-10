---
phase: 04-schema-markup
plan: 01
subsystem: seo
tags: [json-ld, schema.org, react-schemaorg, schema-dts, structured-data, organization, professional-service, website]

# Dependency graph
requires:
  - phase: 01-foundation
    provides: react-helmet for head tag management
  - phase: 02-meta-tags
    provides: existing Helmet blocks on all pages
  - phase: 03-social-open-graph
    provides: OG tags on homepage; SOCL-04 sameAs deferred here
provides:
  - react-schemaorg and schema-dts installed for type-safe JSON-LD
  - BUSINESS_DATA constant with all org fields (src/schemas/organization.ts)
  - breadcrumbJsonLd helper function (src/schemas/breadcrumbs.ts)
  - Homepage Organization + ProfessionalService + WebSite JSON-LD via @graph
  - SOCL-04 fulfilled (sameAs with LinkedIn URL)
affects: [04-02, 04-03]

# Tech tracking
tech-stack:
  added: [react-schemaorg@2.0.0, schema-dts@1.1.5]
  patterns: [helmetJsonLdProp with @graph for related entities, BUSINESS_DATA constant for DRY schema data, breadcrumbJsonLd helper for reusable breadcrumbs]

key-files:
  created: [src/schemas/organization.ts, src/schemas/breadcrumbs.ts]
  modified: [src/pages/Index.tsx, package.json, package-lock.json]

key-decisions:
  - "Used @graph to bundle Organization + ProfessionalService + WebSite as related entities in single JSON-LD block"
  - "Omitted SearchAction from WebSite schema -- site has no search and Google deprecated Sitelinks Search Box Nov 2024"
  - "ProfessionalService (not generic LocalBusiness) as @type for consulting firm"

patterns-established:
  - "JSON-LD via helmetJsonLdProp: pass helmetJsonLdProp<Type>({...}) to Helmet script prop array"
  - "Shared constants: import BUSINESS_DATA from @/schemas/organization for DRY schema data"
  - "Breadcrumb helper: breadcrumbJsonLd([{name, path}]) returns ready-to-use Helmet script prop"

# Metrics
duration: 3min
completed: 2026-02-10
---

# Phase 4 Plan 01: Schema Foundation Summary

**react-schemaorg + schema-dts installed with Organization/ProfessionalService/WebSite JSON-LD on homepage and reusable breadcrumb helper**

## Performance

- **Duration:** 3 min
- **Started:** 2026-02-10T18:42:32Z
- **Completed:** 2026-02-10T18:45:03Z
- **Tasks:** 2
- **Files modified:** 5

## Accomplishments
- Installed react-schemaorg@2.0.0 and schema-dts@1.1.5 for type-safe JSON-LD
- Created BUSINESS_DATA constant centralizing all org fields (name, URL, logo, email, address, LinkedIn, image)
- Created breadcrumbJsonLd helper ready for use on all interior pages in plans 04-02 and 04-03
- Added @graph JSON-LD to homepage with Organization (sameAs LinkedIn), ProfessionalService (Mon-Fri 9-5), and WebSite (publisher ref)
- Fulfilled SCHM-01 (Organization), SCHM-06 (WebSite), and SOCL-04 (sameAs LinkedIn)

## Task Commits

Each task was committed atomically:

1. **Task 1: Install dependencies and create reusable schema helpers** - `7585371` (feat)
2. **Task 2: Add Organization + ProfessionalService + WebSite JSON-LD to homepage** - `5da3cc0` (feat)

## Files Created/Modified
- `src/schemas/organization.ts` - BUSINESS_DATA constant with all org fields (name, url, logo, email, description, linkedIn, image, address)
- `src/schemas/breadcrumbs.ts` - breadcrumbJsonLd helper function for BreadcrumbList JSON-LD
- `src/pages/Index.tsx` - Added helmetJsonLdProp import, BUSINESS_DATA import, and script prop with @graph JSON-LD
- `package.json` - Added react-schemaorg and schema-dts dependencies
- `package-lock.json` - Lock file updated

## Decisions Made
- **@graph for homepage entities:** Used a single JSON-LD block with @graph to bundle Organization, ProfessionalService, and WebSite as related entities (per research recommendation for related entities on same page)
- **No SearchAction:** Omitted SearchAction from WebSite schema because the site has no internal search functionality and Google deprecated Sitelinks Search Box in November 2024
- **ProfessionalService type:** Used ProfessionalService (more specific subtype of LocalBusiness) rather than generic LocalBusiness for the consulting firm

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness
- Schema foundation fully established: libraries installed, shared constants created, breadcrumb helper ready
- Plans 04-02 (Service + BreadcrumbList on service pages) and 04-03 (Article + BreadcrumbList on case study pages) can proceed
- All helpers are importable and TypeScript-verified

---
*Phase: 04-schema-markup*
*Completed: 2026-02-10*
