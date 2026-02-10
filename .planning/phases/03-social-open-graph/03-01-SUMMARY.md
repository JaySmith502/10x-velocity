---
phase: 03-social-open-graph
plan: 01
subsystem: seo
tags: [open-graph, twitter-cards, react-helmet, meta-tags, social-sharing]

# Dependency graph
requires:
  - phase: 02-per-page-meta
    provides: "title, description, and canonical tags on all 30 pages"
  - phase: 01-foundation
    provides: "react-helmet setup and sitemap with all 34 routes"
provides:
  - "OG and Twitter Card meta tags on all 30 page components"
  - "Static fallback OG tags in index.html for social crawlers"
  - "Absolute URL og:image in index.html (IMG-04 fix)"
  - "Blog posts use og:type article with post-specific Unsplash og:image"
affects: [04-structured-data, 05-content-structure]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "OG/Twitter meta tags inline in each Helmet block after canonical"
    - "Blog posts use og:type article; all other pages use og:type website"
    - "Single twitter:card tag only; Twitter falls back to OG for title/description/image"

key-files:
  created: []
  modified:
    - index.html
    - src/pages/Index.tsx
    - src/pages/About.tsx
    - src/pages/Services.tsx
    - src/pages/CaseStudies.tsx
    - src/pages/Blog.tsx
    - src/pages/Contact.tsx
    - src/pages/SavingsCalculator.tsx
    - src/pages/IndustryTools.tsx
    - src/pages/Prototypes.tsx
    - src/pages/PowerAutomate.tsx
    - src/pages/LexiFile.tsx
    - src/pages/LunchAndLearn.tsx
    - src/pages/OnboardingForm.tsx
    - src/pages/AIGuideCertification.tsx
    - src/pages/services/PhoneVoiceAgents.tsx
    - src/pages/services/DataCleaning.tsx
    - src/pages/services/AIWorkshops.tsx
    - src/pages/SmartBots.tsx
    - src/pages/PrivacyPolicy.tsx
    - src/pages/TermsOfService.tsx
    - src/pages/case-studies/InnesYoung.tsx
    - src/pages/case-studies/ECatalyst.tsx
    - src/pages/case-studies/HillcrestPartners.tsx
    - src/pages/case-studies/CatalystGroup.tsx
    - src/pages/case-studies/DirectorOfMarketing.tsx
    - src/pages/case-studies/BirchwoodRealEstate.tsx
    - src/pages/case-studies/GovBrokers.tsx
    - src/pages/case-studies/Inspyrd.tsx
    - src/pages/case-studies/TransportationDirector.tsx
    - src/components/blog/BlogPost.tsx

key-decisions:
  - "Only twitter:card tag needed; Twitter falls back to OG for title/description/image"
  - "Blog posts use og:type article with Unsplash post.image; all other pages use og:type website with site-wide og-image.png"
  - "OG tag values exactly match existing title/description/canonical -- no new copy written"

patterns-established:
  - "OG meta tags placed after canonical link in Helmet block: og:title, og:description, og:url, og:type, og:image, twitter:card"
  - "Static OG fallback tags in index.html for social crawlers that do not execute JavaScript"

# Metrics
duration: 7min
completed: 2026-02-10
---

# Phase 3 Plan 1: OG and Twitter Card Meta Tags Summary

**OG and Twitter Card meta tags on all 30 pages plus index.html static fallback with absolute og:image URL**

## Performance

- **Duration:** 7 min
- **Started:** 2026-02-10T17:29:13Z
- **Completed:** 2026-02-10T17:36:04Z
- **Tasks:** 2/2
- **Files modified:** 31

## Accomplishments

- Added 6 OG/Twitter meta tags (og:title, og:description, og:url, og:type, og:image, twitter:card) to all 30 page component Helmet blocks
- Fixed index.html og:image from relative `/og-image.png` to absolute `https://10xvelocity.ai/og-image.png` (IMG-04)
- Added static fallback OG tags to index.html for social crawlers that do not execute JavaScript
- Blog posts use og:type "article" with post-specific Unsplash images as og:image
- Build passes with zero errors; all 31 files verified via grep

## Task Commits

Each task was committed atomically:

1. **Task 1: Add OG and Twitter Card meta tags to index.html and 20 static pages** - `306d31f` (feat)
2. **Task 2: Add OG and Twitter Card meta tags to 9 case studies and BlogPost** - `43bc124` (feat)

## Files Created/Modified

- `index.html` - Static fallback OG tags with absolute og:image URL for social crawlers
- `src/pages/Index.tsx` - Homepage OG tags matching existing title/description/canonical
- `src/pages/About.tsx` - About page OG tags
- `src/pages/Services.tsx` - Services page OG tags
- `src/pages/CaseStudies.tsx` - Case Studies listing page OG tags
- `src/pages/Blog.tsx` - Blog listing page OG tags
- `src/pages/Contact.tsx` - Contact page OG tags
- `src/pages/SavingsCalculator.tsx` - Calculator page OG tags (inside TooltipProvider)
- `src/pages/IndustryTools.tsx` - Industry Tools page OG tags
- `src/pages/Prototypes.tsx` - Prototypes page OG tags
- `src/pages/PowerAutomate.tsx` - Power Automate page OG tags
- `src/pages/LexiFile.tsx` - LexiFile page OG tags
- `src/pages/LunchAndLearn.tsx` - Lunch & Learn page OG tags
- `src/pages/OnboardingForm.tsx` - Demo/Onboarding page OG tags
- `src/pages/AIGuideCertification.tsx` - AI Guide Certification page OG tags
- `src/pages/services/PhoneVoiceAgents.tsx` - Phone Voice Agents service page OG tags
- `src/pages/services/DataCleaning.tsx` - Data Cleaning service page OG tags
- `src/pages/services/AIWorkshops.tsx` - AI Workshops service page OG tags
- `src/pages/SmartBots.tsx` - Smart Bots service page OG tags
- `src/pages/PrivacyPolicy.tsx` - Privacy Policy page OG tags
- `src/pages/TermsOfService.tsx` - Terms of Service page OG tags
- `src/pages/case-studies/InnesYoung.tsx` - Innes & Young case study OG tags
- `src/pages/case-studies/ECatalyst.tsx` - eCatalyst case study OG tags
- `src/pages/case-studies/HillcrestPartners.tsx` - Hillcrest Partners case study OG tags
- `src/pages/case-studies/CatalystGroup.tsx` - Catalyst Group case study OG tags
- `src/pages/case-studies/DirectorOfMarketing.tsx` - Director of Marketing case study OG tags
- `src/pages/case-studies/BirchwoodRealEstate.tsx` - Birchwood Real Estate case study OG tags
- `src/pages/case-studies/GovBrokers.tsx` - GovBrokers case study OG tags
- `src/pages/case-studies/Inspyrd.tsx` - Inspyrd case study OG tags
- `src/pages/case-studies/TransportationDirector.tsx` - Transportation Director case study OG tags
- `src/components/blog/BlogPost.tsx` - Dynamic blog OG tags with og:type "article" and post-specific og:image

## Decisions Made

- **Only twitter:card tag needed:** Twitter/X falls back to OG tags for title, description, and image. Adding twitter:title, twitter:description, twitter:image would be redundant. No twitter:site added since company has no Twitter handle.
- **Blog og:type "article" vs "website":** Blog posts use og:type "article" since they are individual articles. All other 29 pages use "website".
- **Blog og:image uses post.image:** Each blog post's Unsplash image URL (already absolute) serves as a page-specific OG image, providing richer social previews than the generic site-wide og-image.png.
- **OG values match existing tags exactly:** All og:title, og:description, og:url values are exact copies of the existing title, meta description, and canonical values. No new copy was authored.

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None.

## User Setup Required

None - no external service configuration required.

**Note:** Social crawlers (Facebook, LinkedIn, Twitter/X) do not execute JavaScript and will only see the static fallback tags from index.html until Netlify Prerendering is enabled. This is a known limitation. The per-page Helmet OG tags are correct and will work once prerendering is active (operational step, not a code change).

## Next Phase Readiness

- All 30 pages have complete OG and Twitter Card tags, ready for Phase 4 structured data
- Social profile URL discovered: `https://www.linkedin.com/company/10x-velocity` (for Phase 4 Organization schema sameAs property)
- Plan 03-02 (footer LinkedIn link) is independent and can execute next

---
*Phase: 03-social-open-graph*
*Completed: 2026-02-10*
