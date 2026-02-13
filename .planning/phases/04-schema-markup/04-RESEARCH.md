# Phase 4: Schema Markup - Research

**Researched:** 2026-02-10
**Domain:** Schema.org JSON-LD structured data for React SPA
**Confidence:** HIGH

## Summary

This phase adds JSON-LD structured data to the 10x Velocity site so search engines understand the site's entities (business, services, pages, FAQs, case studies). The codebase already uses `react-helmet@6.1.0` for `<head>` management (established in Phase 1). No JSON-LD or schema markup currently exists anywhere in the source code.

The standard approach is to use Google's `react-schemaorg` library (v2.0.0) with `schema-dts` (v1.1.5) for type-safe JSON-LD injection via React Helmet's `script` prop. This provides TypeScript type checking for all Schema.org types and a `helmetJsonLdProp()` helper designed specifically for React Helmet integration.

**Primary recommendation:** Install `react-schemaorg` and `schema-dts`, then inject JSON-LD via `<Helmet script={[helmetJsonLdProp<Type>({...})]} />` on each page that needs schema markup.

## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| react-schemaorg | 2.0.0 | Type-safe JSON-LD for React | Google-maintained; has dedicated `helmetJsonLdProp()` for React Helmet |
| schema-dts | 1.1.5 | TypeScript definitions for Schema.org | Peer dependency of react-schemaorg; provides compile-time type checking |
| react-helmet | 6.1.0 | Head tag injection (already installed) | Already used across all pages for meta tags |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| react-schemaorg | Raw JSON.stringify in Helmet script | No type safety; easy to produce invalid schema |
| react-schemaorg | next-seo / react-seo | Wrong framework (Next.js); 10x Velocity is a Vite SPA |

**Installation:**
```bash
npm install react-schemaorg schema-dts
```

## Architecture Patterns

### Recommended Pattern: JSON-LD via Helmet script prop

Every page already has a `<Helmet>` block for meta tags. JSON-LD is added by passing `helmetJsonLdProp()` to the `script` array prop:

```tsx
import { Helmet } from "react-helmet";
import { helmetJsonLdProp } from "react-schemaorg";
import { Organization } from "schema-dts";

<Helmet
  script={[
    helmetJsonLdProp<Organization>({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "10x Velocity",
      url: "https://10xvelocity.ai/",
      // ...
    }),
  ]}
>
  <title>...</title>
  <meta name="description" content="..." />
</Helmet>
```

### Multiple JSON-LD blocks per page

When a page needs multiple schema types (e.g., homepage needs Organization + LocalBusiness + WebSite), pass multiple items to the `script` array:

```tsx
<Helmet
  script={[
    helmetJsonLdProp<Organization>({ /* ... */ }),
    helmetJsonLdProp<LocalBusiness>({ /* ... */ }),
    helmetJsonLdProp<WebSite>({ /* ... */ }),
  ]}
>
```

Alternatively, use a single JSON-LD block with `@graph` to bundle multiple entities:

```tsx
helmetJsonLdProp<any>({
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", /* ... */ },
    { "@type": "LocalBusiness", /* ... */ },
    { "@type": "WebSite", /* ... */ },
  ]
})
```

**Recommendation:** Use `@graph` for the homepage (Organization + LocalBusiness + WebSite are related entities). Use separate `helmetJsonLdProp` calls when schema types are unrelated (e.g., BreadcrumbList + Article on a case study page).

### Recommended Project Structure

```
src/
├── schemas/                    # NEW: Reusable schema data/helpers
│   ├── organization.ts         # Organization + LocalBusiness constants
│   ├── breadcrumbs.ts          # BreadcrumbList builder function
│   └── types.ts                # Shared type definitions if needed
├── pages/
│   ├── Index.tsx               # Adds Organization + LocalBusiness + WebSite JSON-LD
│   ├── Services.tsx            # Adds Service[] + FAQPage JSON-LD
│   ├── services/
│   │   ├── PhoneVoiceAgents.tsx  # Adds Service + FAQPage JSON-LD
│   │   ├── DataCleaning.tsx      # Adds Service JSON-LD
│   │   ├── AIWorkshops.tsx       # Adds Service + FAQPage JSON-LD
│   │   └── SmartBots.tsx         # Adds Service JSON-LD
│   └── case-studies/
│       ├── InnesYoung.tsx        # Adds Article JSON-LD
│       └── ...                   # Each case study gets Article JSON-LD
```

### Anti-Patterns to Avoid
- **Duplicating Organization schema on every page:** Organization/LocalBusiness schema belongs on the homepage only, per Google guidance.
- **Inlining large JSON objects:** Extract shared business data (address, contact info) into `src/schemas/organization.ts` so it stays DRY.
- **Using `dangerouslySetInnerHTML` for script tags:** `react-schemaorg` handles this cleanly; do not hand-roll script injection.
- **Using generic `any` type with helmetJsonLdProp:** Always provide the specific Schema.org type generic (e.g., `helmetJsonLdProp<Organization>`) for compile-time validation.

## Business Data Inventory

All business details needed for schema markup, extracted from the existing codebase:

### Organization Details
| Field | Value | Source |
|-------|-------|--------|
| Name | 10x Velocity | Throughout site; `index.html` line 8; Footer |
| URL | https://10xvelocity.ai/ | Canonical URLs across pages |
| Logo | https://10xvelocity.ai/lovable-uploads/d113002f-f6b2-41b5-aa96-2057dc8f4046.png | Footer.tsx line 44-48 (desktop logo) |
| Email | info@10xvelocity.ai | Contact.tsx line 37; Footer.tsx line 21 |
| Street | 10440 Bluegrass Pkwy | Contact.tsx line 48; Footer.tsx line 27 |
| City | Louisville | Contact.tsx line 49; Footer.tsx line 29 |
| State | KY | Contact.tsx line 49; Footer.tsx line 29 |
| ZIP | 40299 | Contact.tsx line 49; Footer.tsx line 29 |
| Country | US | Inferred from KY address |
| Hours | Monday-Friday, 9am-5pm EST | Contact.tsx line 40-41 |
| Author | Jay Smith | index.html line 9 `<meta name="author">` |
| LinkedIn | https://www.linkedin.com/company/10x-velocity | Footer.tsx line 33; prior decision from Phase 3 |
| Description | "10x Velocity helps businesses automate workflows and leverage AI to save time and cut costs. AI consulting and automation services based in Louisville, KY." | Index.tsx meta description |
| Phone | NOT FOUND | No phone number exists in the codebase |

**Note on phone:** No telephone number appears anywhere in the codebase. The Organization/LocalBusiness schema should omit the `telephone` property unless the business provides one.

### OG Image
| Field | Value |
|-------|-------|
| Default OG Image | https://10xvelocity.ai/og-image.png |

### Service Data (from Services.tsx `services` array)
| ID | Title | Description | Dedicated Page |
|----|-------|-------------|----------------|
| team-training | Team Training | Equip your team with the skills to leverage AI tools effectively... | No (anchor on /services) |
| opportunity-discovery | Opportunity Discovery | Identify high-impact areas for digital transformation... | No (anchor on /services) |
| data-analytics | Data Analytics | Transform your raw data into actionable insights... | No (anchor on /services) |
| data-cleaning | Data Cleaning | Transform messy, inconsistent data into clean... | Yes: /services/data-cleaning |
| process-mining | Process Mining | Discover optimization opportunities in your business processes... | No (anchor on /services) |
| process-automation | AI Process Automation | Streamline your operations with intelligent automation... | No (anchor on /services) |
| team-augmentation | Team Augmentation | Enhance your team's capabilities with AI-powered tools... | No (anchor on /services) |
| rapid-prototypes | Rapid Prototype Sprint | Turn your automation or AI idea into a working prototype in 10 days... | Yes: /prototypes |

Additional service pages not in the main `services` array:
- /services/phone-voice-agents - AI Phone & Voice Agents
- /services/ai-workshops - AI Workshops for Teams
- /services/smart-bots - Smart Bots with Custom Knowledge

### FAQ Data Available in Codebase

**AIWorkshops.tsx** - 4 FAQ items (line 203-220):
1. "How do we pick the right workshop?" / "During our initial consultation..."
2. "What skills do participants need?" / "Our workshops are designed for all skill levels..."
3. "Can we mix and match modules?" / "Yes! We can combine elements..."
4. "Is there follow-up support?" / "Absolutely. All workshops include..."

**Services.tsx** - NO FAQ content exists
**PhoneVoiceAgents.tsx** - NO FAQ content exists

**Important:** The phase requirements (SCHM-04) specify FAQPage JSON-LD on "services and voice agents pages." Since no FAQ content exists on those pages, FAQ Q&A pairs will need to be authored as part of implementation. The planner should account for content creation tasks.

### Case Study Data Structure

All 9 case studies follow a consistent pattern:

| Case Study | Route | Client Name | Industry | Key Metrics |
|-----------|-------|-------------|----------|-------------|
| TransportationDirector | /case-studies/transportation-director | Transportation Director (unnamed manufacturer) | Manufacturing & Logistics | -85% doc errors, -70% labor hours, +60% productivity |
| InnesYoung | /case-studies/innes-young | Innes & Young | Public Relations / Media | 5x media placements, 400% lead growth, 75% less reporting time |
| ECatalyst | /case-studies/ecatalyst | eCatalyst (eCat) | Business Services | 70% less email triage, 65% more task completion |
| HillcrestPartners | /case-studies/hillcrest-partners | Hillcrest Partners (HCP) | Real Estate | 50% faster flips, 250% inbound leads, 300% social engagement |
| CatalystGroup | /case-studies/catalyst-group | The Catalyst Group (TCG) | Venture Investing | 300% LinkedIn conversations, 50% faster deal eval |
| DirectorOfMarketing | /case-studies/director-of-marketing | Director of Marketing Inc (DMI) | Marketing | 40% lower PPC costs, 300% social engagement |
| BirchwoodRealEstate | /case-studies/birchwood-real-estate | Birchwood Real Estate Partners | Real Estate | 400% lead processing, 300% inbound leads |
| GovBrokers | /case-studies/govbrokers | GovBrokers | Government Contracting | 35% win rate increase, 250% inbound leads |
| Inspyrd | /case-studies/inspyrd | Inspyrd | Nonprofit / Mental Health | 300% outreach engagement, 250% enrollment growth |

Each case study page has:
- `<Helmet>` with title, description, canonical, OG tags
- `<article>` wrapper (most use `<article>`, some use `<section>`)
- Sections: Client Overview, The Challenge, The Solution (with `solutions` array), Results & Impact (with `results` array), Conclusion, What's Next
- `results` array: string[] of key metrics
- `solutions` array: {title, description}[]

**Important for Article schema:** The case study pages do NOT have explicit `datePublished` or `dateModified` fields. These would need to be added as constants or omitted from the schema. Google recommends including dates but they are not required.

## Route Structure for Breadcrumbs

Complete route hierarchy from App.tsx:

```
/ (Home)
├── /about
├── /services
│   ├── /services/data-cleaning
│   ├── /services/phone-voice-agents
│   ├── /services/ai-workshops
│   └── /services/smart-bots
├── /lexi-file
├── /industry-tools
├── /power-automate
├── /prototypes
├── /programs/ai-guide-certification
├── /case-studies
│   ├── /case-studies/innes-young
│   ├── /case-studies/ecatalyst
│   ├── /case-studies/hillcrest-partners
│   ├── /case-studies/catalyst-group
│   ├── /case-studies/director-of-marketing
│   ├── /case-studies/birchwood-real-estate
│   ├── /case-studies/govbrokers
│   ├── /case-studies/inspyrd
│   └── /case-studies/transportation-director
├── /savings-calculator
├── /events/lunch-and-learn
├── /demo
├── /blog
│   └── /blog/:id
├── /contact
├── /privacy-policy
└── /terms-of-service
```

Breadcrumb mapping for pages requiring schema (SCHM-03 says "all interior pages"):

| Page | Breadcrumb Trail |
|------|-----------------|
| /about | Home > About Us |
| /services | Home > Services |
| /services/data-cleaning | Home > Services > Data Cleaning |
| /services/phone-voice-agents | Home > Services > Phone Voice Agents |
| /services/ai-workshops | Home > Services > AI Workshops |
| /services/smart-bots | Home > Services > Smart Bots |
| /case-studies | Home > Case Studies |
| /case-studies/innes-young | Home > Case Studies > Innes & Young |
| /contact | Home > Contact |
| etc. | Home > [Page Name] |

**Breadcrumb helper pattern:** Create a reusable function in `src/schemas/breadcrumbs.ts` that takes an array of `{name, path}` items and returns a `helmetJsonLdProp<BreadcrumbList>` object. Each page calls this with its specific trail.

## Schema Type Details

### SCHM-01: Organization + LocalBusiness (Homepage)

Use `@graph` with both types. LocalBusiness is a subtype of Organization but they serve different purposes (brand identity vs. physical location). For a consulting firm, use `ProfessionalService` as the `@type` for LocalBusiness (it is a more specific subtype).

```tsx
// Source: Google Organization docs + LocalBusiness docs
helmetJsonLdProp<any>({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://10xvelocity.ai/#organization",
      name: "10x Velocity",
      url: "https://10xvelocity.ai/",
      logo: {
        "@type": "ImageObject",
        url: "https://10xvelocity.ai/lovable-uploads/d113002f-f6b2-41b5-aa96-2057dc8f4046.png",
      },
      description: "10x Velocity helps businesses automate workflows and leverage AI to save time and cut costs.",
      email: "info@10xvelocity.ai",
      sameAs: ["https://www.linkedin.com/company/10x-velocity"],
      address: {
        "@type": "PostalAddress",
        streetAddress: "10440 Bluegrass Pkwy",
        addressLocality: "Louisville",
        addressRegion: "KY",
        postalCode: "40299",
        addressCountry: "US",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://10xvelocity.ai/#localbusiness",
      name: "10x Velocity",
      url: "https://10xvelocity.ai/",
      image: "https://10xvelocity.ai/og-image.png",
      address: {
        "@type": "PostalAddress",
        streetAddress: "10440 Bluegrass Pkwy",
        addressLocality: "Louisville",
        addressRegion: "KY",
        postalCode: "40299",
        addressCountry: "US",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    },
  ],
})
```

**Confidence:** HIGH - Based on Google's official Organization and LocalBusiness documentation.

### SCHM-06: WebSite Schema (Homepage)

Add WebSite schema to the homepage `@graph`. Note: Google deprecated the Sitelinks Search Box feature in November 2024, so SearchAction markup will NOT produce rich results. However, the SOCL-04 requirement and SCHM-06 still call for it. The WebSite schema itself remains valid Schema.org markup.

```tsx
{
  "@type": "WebSite",
  "@id": "https://10xvelocity.ai/#website",
  url: "https://10xvelocity.ai/",
  name: "10x Velocity",
  description: "AI & Automation Consulting",
  publisher: { "@id": "https://10xvelocity.ai/#organization" },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://10xvelocity.ai/?s={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
}
```

**Important caveat:** The site does NOT have internal search functionality. If no search exists, the SearchAction should either be omitted or pointed to a future search URL. The planner should decide whether to include SearchAction given the deprecation.

**Confidence:** HIGH for WebSite schema structure. MEDIUM for whether to include SearchAction (deprecated by Google, but still valid markup per Schema.org spec).

### SCHM-02: Service Schema

Use the `Service` type for each service. There is NO Google Rich Results feature for Service schema, but it helps search engines understand the site's offerings.

```tsx
helmetJsonLdProp<Service>({
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Process Automation",
  description: "Streamline your operations with intelligent automation solutions...",
  provider: { "@id": "https://10xvelocity.ai/#organization" },
  areaServed: {
    "@type": "Country",
    name: "US",
  },
  serviceType: "AI Consulting",
})
```

For the Services index page (/services), use an array of Service items or separate script blocks for each service.

**Confidence:** HIGH - schema.org/Service is well-documented. No Google rich results to worry about.

### SCHM-03: BreadcrumbList

```tsx
// Helper function pattern
function buildBreadcrumbJsonLd(items: Array<{name: string; path: string}>) {
  return helmetJsonLdProp<BreadcrumbList>({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem" as const,
      position: index + 1,
      name: item.name,
      ...(index < items.length - 1
        ? { item: `https://10xvelocity.ai${item.path}` }
        : {}),
    })),
  });
}

// Usage on a service page:
<Helmet
  script={[
    buildBreadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: "Data Cleaning", path: "/services/data-cleaning" },
    ]),
  ]}
>
```

**Google requirement:** Minimum 2 ListItem entries. The last item should omit the `item` property (Google uses the page URL).

**Confidence:** HIGH - Based on Google's official BreadcrumbList documentation.

### SCHM-04: FAQPage

**Critical finding:** Google restricts FAQPage rich results to authoritative government and health websites only (since August 2023). 10x Velocity will NOT get FAQ rich results. However, FAQPage schema remains valid markup and can help search engines understand content structure. It may also benefit AI-powered search features.

For pages that already have FAQ content (AIWorkshops.tsx), the schema maps directly to the existing `faqs` array. For Services.tsx and PhoneVoiceAgents.tsx, FAQ Q&A pairs will need to be authored.

```tsx
helmetJsonLdProp<FAQPage>({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(faq => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
})
```

**Confidence:** HIGH for markup pattern. The planner needs to decide whether to create new FAQ content for Services and Voice Agents pages, or limit FAQPage schema to pages that already have FAQ content (only AIWorkshops).

### SCHM-05: Article/CaseStudy on Case Study Pages

There is no official "CaseStudy" type in Schema.org that Google recognizes for rich results. Use `Article` type, which is the closest match. Google does not require any properties but recommends: headline, author, datePublished, dateModified, image.

```tsx
helmetJsonLdProp<Article>({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Innes & Young: AI-Powered PR Evolution",
  description: "See how 10x Velocity helped Innes & Young evolve their PR agency...",
  author: {
    "@type": "Organization",
    name: "10x Velocity",
    url: "https://10xvelocity.ai/",
  },
  publisher: {
    "@type": "Organization",
    name: "10x Velocity",
    logo: {
      "@type": "ImageObject",
      url: "https://10xvelocity.ai/lovable-uploads/d113002f-f6b2-41b5-aa96-2057dc8f4046.png",
    },
  },
  image: "https://10xvelocity.ai/og-image.png",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://10xvelocity.ai/case-studies/innes-young",
  },
})
```

**Note:** Case study pages do not have datePublished/dateModified. These can either be omitted (valid per Google docs) or added as hardcoded constants if the business knows the original publication dates.

**Confidence:** HIGH for Article schema pattern. MEDIUM for whether to include dates (recommended but not required).

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| JSON-LD script injection | Raw `<script>` tags with `dangerouslySetInnerHTML` | `react-schemaorg` `helmetJsonLdProp()` | Handles escaping, TypeScript validation, Helmet integration |
| Schema.org type definitions | Manual TypeScript interfaces for schema | `schema-dts` package | Complete, auto-generated types from official Schema.org vocabulary |
| JSON-LD validation | Custom validation logic | Google Rich Results Test (https://search.google.com/test/rich-results) | Authoritative Google tool; validates markup against current guidelines |
| Breadcrumb data derivation | Complex route parsing from React Router | Simple helper function with explicit breadcrumb data per page | Routes are flat (not nested); explicit data is clearer and less error-prone |

**Key insight:** The route structure in this SPA is flat (all routes defined directly in App.tsx, no nested routing). Do not try to auto-derive breadcrumbs from the URL path -- explicit breadcrumb definitions per page are simpler and more reliable.

## Common Pitfalls

### Pitfall 1: Duplicate Organization Schema
**What goes wrong:** Adding Organization JSON-LD to every page instead of just the homepage
**Why it happens:** Temptation to "be thorough" with schema markup
**How to avoid:** Organization and LocalBusiness schema go on the homepage ONLY. Other pages reference the organization via `@id`.
**Warning signs:** Multiple pages with `@type: "Organization"` in their Helmet blocks

### Pitfall 2: JSON-LD Content Mismatch
**What goes wrong:** Schema data doesn't match visible page content
**Why it happens:** Copying schema examples without updating to match actual page content
**How to avoid:** Schema names, descriptions, and addresses must exactly match what users see on the page
**Warning signs:** Google Search Console structured data errors saying content doesn't match

### Pitfall 3: Invalid JSON in Helmet Script
**What goes wrong:** Broken JSON-LD due to unescaped characters or template literal issues
**Why it happens:** Hand-building JSON strings instead of using `helmetJsonLdProp()`
**How to avoid:** Always use `react-schemaorg`'s helper functions which handle serialization correctly
**Warning signs:** Rich Results Test shows parsing errors

### Pitfall 4: SPA Rendering and Googlebot
**What goes wrong:** Googlebot doesn't see JSON-LD because it's injected client-side
**Why it happens:** React Helmet injects `<script>` tags at runtime; some crawlers don't execute JavaScript
**How to avoid:** This is a known limitation of SPAs. Google's crawler does execute JavaScript, so JSON-LD via React Helmet WILL be indexed by Google. However, other crawlers (Bing, social media) may not see it. Since the site is deployed to Netlify, consider Netlify's prerendering feature if non-Google crawler support becomes important later.
**Warning signs:** Structured data visible in browser but not in Google Search Console

### Pitfall 5: FAQ Content Must Exist on Page
**What goes wrong:** Adding FAQPage schema without visible FAQ content on the page
**Why it happens:** Creating schema markup without matching on-page content
**How to avoid:** FAQPage schema content must match visible Q&A pairs on the page. If adding FAQPage schema to Services or Voice Agents pages, the FAQ section with visible questions and answers must be added to the page first.
**Warning signs:** Google Search Console flags mismatch; potential manual penalty

### Pitfall 6: WebSite SearchAction Without Search Feature
**What goes wrong:** SearchAction points to a URL that doesn't actually search
**Why it happens:** Following Schema.org spec without verifying the site has search functionality
**How to avoid:** Either omit SearchAction entirely, or ensure the target URL actually performs a search. The 10x Velocity site currently has no internal search.
**Warning signs:** Users clicking search results get a 404 or non-functional page

## Code Examples

### Complete Homepage JSON-LD (Organization + LocalBusiness + WebSite)

```tsx
// src/schemas/organization.ts
export const BUSINESS_DATA = {
  name: "10x Velocity",
  url: "https://10xvelocity.ai/",
  logo: "https://10xvelocity.ai/lovable-uploads/d113002f-f6b2-41b5-aa96-2057dc8f4046.png",
  email: "info@10xvelocity.ai",
  description: "10x Velocity helps businesses automate workflows and leverage AI to save time and cut costs. AI consulting and automation services based in Louisville, KY.",
  linkedIn: "https://www.linkedin.com/company/10x-velocity",
  address: {
    streetAddress: "10440 Bluegrass Pkwy",
    addressLocality: "Louisville",
    addressRegion: "KY",
    postalCode: "40299",
    addressCountry: "US",
  },
} as const;
```

```tsx
// In Index.tsx
import { helmetJsonLdProp } from "react-schemaorg";
import { BUSINESS_DATA } from "@/schemas/organization";

<Helmet
  script={[
    helmetJsonLdProp<any>({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": `${BUSINESS_DATA.url}#organization`,
          name: BUSINESS_DATA.name,
          url: BUSINESS_DATA.url,
          logo: { "@type": "ImageObject", url: BUSINESS_DATA.logo },
          description: BUSINESS_DATA.description,
          email: BUSINESS_DATA.email,
          sameAs: [BUSINESS_DATA.linkedIn],
          address: {
            "@type": "PostalAddress",
            ...BUSINESS_DATA.address,
          },
        },
        {
          "@type": "ProfessionalService",
          "@id": `${BUSINESS_DATA.url}#localbusiness`,
          name: BUSINESS_DATA.name,
          url: BUSINESS_DATA.url,
          image: "https://10xvelocity.ai/og-image.png",
          address: {
            "@type": "PostalAddress",
            ...BUSINESS_DATA.address,
          },
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "17:00",
          },
        },
        {
          "@type": "WebSite",
          "@id": `${BUSINESS_DATA.url}#website`,
          url: BUSINESS_DATA.url,
          name: BUSINESS_DATA.name,
          description: "AI & Automation Consulting",
          publisher: { "@id": `${BUSINESS_DATA.url}#organization` },
        },
      ],
    }),
  ]}
>
  <title>AI & Automation Consulting | 10x Velocity</title>
  {/* ... existing meta tags ... */}
</Helmet>
```

### Breadcrumb Helper

```tsx
// src/schemas/breadcrumbs.ts
import { helmetJsonLdProp } from "react-schemaorg";
import { BreadcrumbList } from "schema-dts";

interface BreadcrumbItem {
  name: string;
  path: string;
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return helmetJsonLdProp<BreadcrumbList>({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem" as const,
      position: index + 1,
      name: item.name,
      ...(index < items.length - 1
        ? { item: `https://10xvelocity.ai${item.path}` }
        : {}),
    })),
  });
}
```

### Service Schema on Service Page

```tsx
// In a service page like DataCleaning.tsx
import { helmetJsonLdProp } from "react-schemaorg";
import { Service } from "schema-dts";
import { breadcrumbJsonLd } from "@/schemas/breadcrumbs";

<Helmet
  script={[
    helmetJsonLdProp<Service>({
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Data Cleaning Services",
      description: "Professional data cleaning and preparation services...",
      provider: {
        "@type": "Organization",
        "@id": "https://10xvelocity.ai/#organization",
      },
      areaServed: { "@type": "Country", name: "US" },
      serviceType: "Data Cleaning",
    }),
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: "Data Cleaning", path: "/services/data-cleaning" },
    ]),
  ]}
>
```

### Case Study Article Schema

```tsx
// In a case study page like InnesYoung.tsx
import { helmetJsonLdProp } from "react-schemaorg";
import { Article } from "schema-dts";
import { breadcrumbJsonLd } from "@/schemas/breadcrumbs";

<Helmet
  script={[
    helmetJsonLdProp<Article>({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Innes & Young: AI-Powered PR Evolution",
      description: "See how 10x Velocity helped Innes & Young evolve their PR agency...",
      author: {
        "@type": "Organization",
        name: "10x Velocity",
        url: "https://10xvelocity.ai/",
      },
      publisher: {
        "@type": "Organization",
        name: "10x Velocity",
        logo: {
          "@type": "ImageObject",
          url: "https://10xvelocity.ai/lovable-uploads/d113002f-f6b2-41b5-aa96-2057dc8f4046.png",
        },
      },
      image: "https://10xvelocity.ai/og-image.png",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://10xvelocity.ai/case-studies/innes-young",
      },
    }),
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Case Studies", path: "/case-studies" },
      { name: "Innes & Young", path: "/case-studies/innes-young" },
    ]),
  ]}
>
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Sitelinks Search Box (WebSite + SearchAction rich result) | Deprecated by Google | November 2024 | SearchAction markup won't produce rich results; markup still valid but pointless for Google |
| FAQPage rich results for all sites | Restricted to authoritative gov/health sites only | August 2023 | 10x Velocity will NOT get FAQ rich results; markup still valid for semantic understanding |
| Microdata or RDFa for structured data | JSON-LD is Google's strongly preferred format | ~2020+ | Always use JSON-LD format; never use inline microdata |
| ProfessionalService as standalone type | ProfessionalService is subtype of LocalBusiness | Current | Use ProfessionalService as the @type for consulting business LocalBusiness markup |

**Deprecated/outdated:**
- Sitelinks Search Box: Removed from Google Search November 2024. No need to implement SearchAction unless required by spec.
- FAQPage rich results for non-gov/health: Still works as markup but no visible rich results for consulting sites.

## Open Questions

1. **SearchAction on WebSite schema: Include or omit?**
   - What we know: Google deprecated Sitelinks Search Box Nov 2024; the site has no internal search
   - What's unclear: Whether SCHM-06 requirement strictly demands SearchAction or just WebSite schema
   - Recommendation: Include WebSite schema without SearchAction, since the site lacks search functionality and Google no longer uses it. Flag for stakeholder decision.

2. **FAQ content for Services and Voice Agents pages**
   - What we know: Only AIWorkshops has FAQ content. Services.tsx and PhoneVoiceAgents.tsx have zero FAQ content.
   - What's unclear: Should implementation create FAQ UI sections + schema, or is schema-only acceptable?
   - Recommendation: Create visible FAQ sections with Q&A pairs on Services and PhoneVoiceAgents pages (Google requires schema content to match visible page content). This is a content + code task, not just a schema task.

3. **Case study publication dates**
   - What we know: No datePublished/dateModified data exists in the codebase
   - What's unclear: Whether the business has original publication dates for each case study
   - Recommendation: Omit dates from Article schema initially (Google says they're recommended but not required). Can be added later if publication dates are provided.

4. **Logo URL stability**
   - What we know: Logo uses a `/lovable-uploads/` path which was auto-generated by the Lovable platform
   - What's unclear: Whether this path is stable long-term
   - Recommendation: Use the existing logo URL as-is. If it changes, schema markup will need updating.

## Sources

### Primary (HIGH confidence)
- [Google Organization Structured Data](https://developers.google.com/search/docs/appearance/structured-data/organization)
- [Google LocalBusiness Structured Data](https://developers.google.com/search/docs/appearance/structured-data/local-business)
- [Google FAQPage Structured Data](https://developers.google.com/search/docs/appearance/structured-data/faqpage)
- [Google BreadcrumbList Structured Data](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb)
- [Google Article Structured Data](https://developers.google.com/search/docs/appearance/structured-data/article)
- [Google Sitelinks Search Box Deprecation (Oct 2024)](https://developers.google.com/search/blog/2024/10/sitelinks-search-box)
- [react-schemaorg README](https://github.com/google/react-schemaorg/blob/main/README.md) - helmetJsonLdProp usage
- [schema.org/Service](https://schema.org/Service) - Service type properties
- [schema.org/ProfessionalService](https://schema.org/ProfessionalService) - Subtype of LocalBusiness

### Secondary (MEDIUM confidence)
- npm registry: react-schemaorg v2.0.0, schema-dts v1.1.5 (verified via npm view)
- react-helmet v6.1.0 (verified via npm ls)

### Tertiary (LOW confidence)
- WebSearch results for general best practices and community patterns

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - react-schemaorg is Google-maintained, well-documented, directly supports React Helmet
- Architecture: HIGH - Pattern is straightforward; inject JSON-LD via Helmet script prop
- Business data: HIGH - All data extracted directly from existing codebase
- Schema types: HIGH - All types verified against Google's official structured data documentation
- Pitfalls: HIGH - FAQPage restrictions and SearchAction deprecation verified against official Google announcements
- FAQ content gap: HIGH - Confirmed no FAQ content exists on Services.tsx or PhoneVoiceAgents.tsx

**Research date:** 2026-02-10
**Valid until:** 2026-04-10 (stable domain; schema.org types don't change frequently)
