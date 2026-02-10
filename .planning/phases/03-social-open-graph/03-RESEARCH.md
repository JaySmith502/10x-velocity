# Phase 3: Social & Open Graph - Research

**Researched:** 2026-02-10
**Domain:** Open Graph protocol, Twitter Cards, social media integration, React Helmet meta tags
**Confidence:** HIGH

## Summary

Phase 3 adds OG and Twitter Card meta tags to all 30 pages that already have React Helmet blocks from Phase 2, adds social media profile links to the footer, and prepares the `sameAs` property for the Organization schema in Phase 4. Every page already has `<title>`, `<meta name="description">`, and `<link rel="canonical">` in its Helmet block -- the OG and Twitter tags will reuse these same values plus add the OG image and type properties.

The critical limitation is that this is a client-side rendered SPA deployed on Netlify. Social media crawlers (Facebook, Twitter/X, LinkedIn) do NOT execute JavaScript, so they will not see React Helmet-injected OG tags. However, Netlify offers a Prerender extension that serves pre-rendered HTML to crawlers. Additionally, the existing `index.html` already has a static `<meta property="og:image" content="/og-image.png" />` which provides a baseline fallback for crawlers, though it uses a relative URL (violating IMG-04). The OG tags should still be added via Helmet for correctness and for when prerendering is enabled, and the `index.html` static tag should be updated to use an absolute URL as a fallback.

**Primary recommendation:** Add OG and Twitter Card meta tags to every page's existing Helmet block, update the `index.html` fallback OG image to use an absolute URL, add LinkedIn link to footer, and document the prerendering requirement as a known limitation with guidance for enabling it on Netlify.

## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| react-helmet | ^6.1.0 | Inject meta tags into document head | Already installed and used on all 30 pages from Phase 2 |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| lucide-react | (already installed) | Social media icons for footer | LinkedIn icon for footer link |

### No New Dependencies Required

Phase 3 requires zero new npm packages. All OG and Twitter Card tags are standard HTML `<meta>` elements injected via the existing `react-helmet` setup. Social icons are available from `lucide-react` which is already installed.

## Architecture Patterns

### Current Helmet Pattern (Phase 2 Established)

Every page follows this exact pattern:
```tsx
<Helmet>
  <title>Page Title | 10x Velocity</title>
  <meta name="description" content="Page description 150-160 chars." />
  <link rel="canonical" href="https://10xvelocity.ai/page-path" />
</Helmet>
```

### Target Helmet Pattern (Phase 3 Addition)

Add OG and Twitter meta tags to each existing Helmet block:
```tsx
<Helmet>
  <title>Page Title | 10x Velocity</title>
  <meta name="description" content="Page description 150-160 chars." />
  <link rel="canonical" href="https://10xvelocity.ai/page-path" />
  {/* OG Tags */}
  <meta property="og:title" content="Page Title | 10x Velocity" />
  <meta property="og:description" content="Page description 150-160 chars." />
  <meta property="og:url" content="https://10xvelocity.ai/page-path" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://10xvelocity.ai/og-image.png" />
  {/* Twitter Card Tags */}
  <meta name="twitter:card" content="summary_large_image" />
</Helmet>
```

### Key Design Decisions

1. **og:title reuses the page `<title>` value.** They should match for consistency.
2. **og:description reuses the `<meta name="description">` value.** Same content, different attribute.
3. **og:url reuses the canonical URL.** They should always match.
4. **og:type is "website" for all pages except blog posts.** Blog posts use "article".
5. **og:image uses the same absolute URL site-wide** (`https://10xvelocity.ai/og-image.png`) since there's only one OG image. Blog posts could use their Unsplash `post.image` URLs for page-specific images.
6. **Twitter Card fallback:** Twitter/X falls back to OG tags for title, description, and image when Twitter-specific tags are absent. Only `twitter:card` is strictly required to set the card type to `summary_large_image`. Adding `twitter:title`, `twitter:description`, and `twitter:image` is redundant if OG tags are present.

### Recommended Project Structure (No Changes)

No new files or directories needed. All changes are additions to existing Helmet blocks in existing page files, plus modifications to `Footer.tsx` and `index.html`.

### Anti-Patterns to Avoid
- **Duplicating values between OG and Twitter tags:** Twitter falls back to OG tags. Only `twitter:card` needs to be explicitly set; `twitter:title`, `twitter:description`, `twitter:image` are redundant.
- **Using relative URLs for og:image:** Social crawlers resolve against unknown bases. Always use absolute URLs starting with `https://10xvelocity.ai/`.
- **Creating a separate SEO component:** The existing Helmet-per-page pattern is established across 30 pages. Adding a wrapper component would require refactoring all 30 pages. Instead, simply add the meta tags inline to each existing Helmet block.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Meta tag injection | Custom DOM manipulation | react-helmet (already installed) | Handles deduplication, SSR support, ordering |
| Social media icons | Custom SVG icons | lucide-react (already installed) | Consistent icon set, already used throughout site |
| OG image generation | Dynamic image generation service | Static `og-image.png` already in `public/` | Site already has an OG image; dynamic generation is over-engineering for a consulting site |
| URL validation | Custom URL builder | Hardcoded absolute URLs matching canonical | Canonical URLs are already established and correct from Phase 2 |

## Common Pitfalls

### Pitfall 1: SPA Crawler Blindness (CRITICAL)
**What goes wrong:** Social crawlers (facebookexternalhit, Twitterbot, LinkedInBot) do NOT execute JavaScript. They see only the raw HTML from `index.html`, not React Helmet-injected tags. Sharing a link shows generic metadata instead of page-specific content.
**Why it happens:** React Helmet modifies the DOM client-side. Crawlers fetch HTML and parse it without running JS.
**How to avoid:**
1. Add OG tags via Helmet anyway (correct for JS-enabled consumers and future prerendering).
2. Update `index.html` static `og:image` tag to use absolute URL as baseline fallback.
3. Enable Netlify Prerender extension (separate operational task, not a code change).
**Warning signs:** Sharing links on Facebook/LinkedIn shows "10x Velocity | AI & Automation Consulting" generic title and no page-specific description.
**Confidence:** HIGH -- Verified via multiple sources including official React Helmet GitHub issues and Netlify documentation.

### Pitfall 2: Relative og:image URL
**What goes wrong:** The current `index.html` has `<meta property="og:image" content="/og-image.png" />` which is a relative URL. Social platforms may not resolve this correctly.
**Why it happens:** Original scaffolding used relative path.
**How to avoid:** Change to `content="https://10xvelocity.ai/og-image.png"` in `index.html`.
**Warning signs:** OG image doesn't appear in social previews.
**Confidence:** HIGH -- OG spec requires absolute URLs.

### Pitfall 3: Duplicate meta tags from index.html and Helmet
**What goes wrong:** `index.html` has `<meta property="og:image" content="...">` and Helmet also injects `<meta property="og:image" content="...">`. Both appear in the head.
**Why it happens:** React Helmet deduplicates by attribute. For `property`-based meta tags, it deduplicates based on `property` value. So Helmet's `og:image` will replace the static one from `index.html` at runtime.
**How to avoid:** This is actually handled correctly by react-helmet. The static tag in `index.html` serves as the fallback for crawlers that don't run JS, and Helmet overrides it for JS-enabled clients.
**Warning signs:** None -- this is the desired behavior.
**Confidence:** HIGH -- Verified from react-helmet documentation.

### Pitfall 4: Forgetting og:url on dynamic blog routes
**What goes wrong:** Blog post pages use dynamic routes (`/blog/:id`). The og:url must include the specific post ID.
**Why it happens:** Easy to hardcode a generic URL instead of using the dynamic canonical.
**How to avoid:** BlogPost.tsx already constructs dynamic canonical URLs. Use the same pattern for og:url.
**Confidence:** HIGH -- Verified from existing code.

## Code Examples

### Example 1: Static Page OG Tags (Homepage)

```tsx
// Source: Existing Index.tsx pattern + OG additions
<Helmet>
  <title>AI & Automation Consulting | 10x Velocity</title>
  <meta
    name="description"
    content="10x Velocity helps businesses automate workflows and leverage AI to save time and cut costs. AI consulting and automation services based in Louisville, KY."
  />
  <link rel="canonical" href="https://10xvelocity.ai/" />
  <meta property="og:title" content="AI & Automation Consulting | 10x Velocity" />
  <meta property="og:description" content="10x Velocity helps businesses automate workflows and leverage AI to save time and cut costs. AI consulting and automation services based in Louisville, KY." />
  <meta property="og:url" content="https://10xvelocity.ai/" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://10xvelocity.ai/og-image.png" />
  <meta name="twitter:card" content="summary_large_image" />
</Helmet>
```

### Example 2: Dynamic Blog Post OG Tags

```tsx
// Source: Existing BlogPost.tsx pattern + OG additions
<Helmet>
  <title>{`${blogTitle} | 10x Velocity`}</title>
  <meta name="description" content={post.excerpt} />
  <link rel="canonical" href={`https://10xvelocity.ai/blog/${post.id}`} />
  <meta property="og:title" content={`${blogTitle} | 10x Velocity`} />
  <meta property="og:description" content={post.excerpt} />
  <meta property="og:url" content={`https://10xvelocity.ai/blog/${post.id}`} />
  <meta property="og:type" content="article" />
  <meta property="og:image" content={post.image} />
  <meta name="twitter:card" content="summary_large_image" />
</Helmet>
```

Note: Blog posts can use their Unsplash `post.image` URL for page-specific OG images. The Unsplash URLs are already absolute (`https://images.unsplash.com/...`).

### Example 3: Footer Social Links

```tsx
// Source: Existing Footer.tsx structure + social link addition
import { Linkedin } from "lucide-react";

// Inside the footer grid, in the Company column after the address:
<li>
  <a
    href="https://www.linkedin.com/company/10x-velocity"
    target="_blank"
    rel="noopener noreferrer"
    className="text-velocity-muted hover:text-velocity-accent transition-colors inline-flex items-center gap-2"
  >
    <Linkedin className="w-4 h-4" />
    LinkedIn
  </a>
</li>
```

### Example 4: index.html OG Image Fix

```html
<!-- Before (relative URL - violates IMG-04) -->
<meta property="og:image" content="/og-image.png" />

<!-- After (absolute URL - satisfies IMG-04) -->
<meta property="og:image" content="https://10xvelocity.ai/og-image.png" />
```

## Current State Analysis

### All 30 Pages with Helmet (Phase 2 Complete)

Every page has this pattern: `<title>`, `<meta name="description">`, `<link rel="canonical">`. None have OG or Twitter tags yet. Complete list:

**Top-Level Pages (14 files):**
| File | Title | Canonical Path |
|------|-------|----------------|
| `src/pages/Index.tsx` | AI & Automation Consulting \| 10x Velocity | `/` (trailing slash) |
| `src/pages/About.tsx` | About Us - AI & Automation Consulting \| 10x Velocity | `/about` |
| `src/pages/Services.tsx` | AI & Automation Services \| 10x Velocity | `/services` |
| `src/pages/CaseStudies.tsx` | AI Case Studies & Client Results \| 10x Velocity | `/case-studies` |
| `src/pages/Blog.tsx` | AI & Automation Insights Blog \| 10x Velocity | `/blog` |
| `src/pages/Contact.tsx` | Contact Us \| 10x Velocity | `/contact` |
| `src/pages/SavingsCalculator.tsx` | Automation Savings Calculator \| 10x Velocity | `/savings-calculator` |
| `src/pages/IndustryTools.tsx` | AI Industry Tools Explorer \| 10x Velocity | `/industry-tools` |
| `src/pages/Prototypes.tsx` | Rapid AI Prototypes \| 10x Velocity | `/prototypes` |
| `src/pages/PowerAutomate.tsx` | Power Automate Solutions \| 10x Velocity | `/power-automate` |
| `src/pages/LexiFile.tsx` | LexiFile AI Document Assistant \| 10x Velocity | `/lexi-file` |
| `src/pages/LunchAndLearn.tsx` | AI Lunch & Learn Events \| 10x Velocity | `/events/lunch-and-learn` |
| `src/pages/OnboardingForm.tsx` | Client Onboarding \| 10x Velocity | `/demo` |
| `src/pages/AIGuideCertification.tsx` | AI Guide Certification \| 10x Velocity | `/programs/ai-guide-certification` |

**Service Pages (4 files):**
| File | Canonical Path |
|------|----------------|
| `src/pages/services/PhoneVoiceAgents.tsx` | `/services/phone-voice-agents` |
| `src/pages/services/DataCleaning.tsx` | `/services/data-cleaning` |
| `src/pages/services/AIWorkshops.tsx` | `/services/ai-workshops` |
| `src/pages/SmartBots.tsx` | `/services/smart-bots` |

**Case Study Pages (9 files):**
| File | Canonical Path |
|------|----------------|
| `src/pages/case-studies/InnesYoung.tsx` | `/case-studies/innes-young` |
| `src/pages/case-studies/ECatalyst.tsx` | `/case-studies/ecatalyst` |
| `src/pages/case-studies/HillcrestPartners.tsx` | `/case-studies/hillcrest-partners` |
| `src/pages/case-studies/CatalystGroup.tsx` | `/case-studies/catalyst-group` |
| `src/pages/case-studies/DirectorOfMarketing.tsx` | `/case-studies/director-of-marketing` |
| `src/pages/case-studies/BirchwoodRealEstate.tsx` | `/case-studies/birchwood-real-estate` |
| `src/pages/case-studies/GovBrokers.tsx` | `/case-studies/govbrokers` |
| `src/pages/case-studies/Inspyrd.tsx` | `/case-studies/inspyrd` |
| `src/pages/case-studies/TransportationDirector.tsx` | `/case-studies/transportation-director` |

**Legal Pages (2 files):**
| File | Canonical Path |
|------|----------------|
| `src/pages/PrivacyPolicy.tsx` | `/privacy-policy` |
| `src/pages/TermsOfService.tsx` | `/terms-of-service` |

**Dynamic Blog Post (1 file):**
| File | Canonical Pattern |
|------|-------------------|
| `src/components/blog/BlogPost.tsx` | `/blog/${post.id}` (5 posts: IDs 1-5) |

**NotFound page** (src/pages/NotFound.tsx): No Helmet block. Does NOT need OG tags (not indexable).

### OG Image Status

- **File exists:** `public/og-image.png` -- a screenshot of the homepage (1200px wide based on visual inspection, approximately 1200x630 which is the standard OG dimension)
- **Current index.html tag:** `<meta property="og:image" content="/og-image.png" />` -- uses RELATIVE URL (violates IMG-04)
- **Fix needed:** Change to `content="https://10xvelocity.ai/og-image.png"`

### Social Media Profiles Discovered

| Platform | URL | Confidence | Source |
|----------|-----|------------|--------|
| LinkedIn (Company) | `https://www.linkedin.com/company/10x-velocity` | HIGH | Verified via WebFetch - page exists, matches company in Louisville, KY 40299, links to 10xvelocity.ai |
| LinkedIn (Founder) | `https://www.linkedin.com/in/jaysmith502/` | HIGH | Found via WebSearch, verified via WebFetch |
| Facebook | Not found | MEDIUM | Searched extensively, no results |
| Twitter/X | Not found | MEDIUM | Searched extensively, no results |
| Instagram | Not found | MEDIUM | Searched extensively, no results |
| YouTube | Not found | MEDIUM | Searched extensively, no results |

**Recommendation:** Only add LinkedIn company page link to footer. The founder's personal LinkedIn is not appropriate for a company footer social link. If additional social profiles exist but were not indexed, they can be added later.

### Footer Structure

The footer (`src/components/landing/Footer.tsx`) has a 4-column grid layout:
1. **Company** - About link, email, address, logo
2. **Solutions** - Service page links
3. **Resources** - Tool Explorer, Case Studies, external links
4. **Legal** - Privacy, Terms, Cookie

Below the grid is a bottom bar with: copyright | certification logos | location text.

**Best place for social link:** In the Company column, after the address block, before the hidden logo. This keeps contact/company info together.

**Alternative placement:** A dedicated social icons row in the bottom bar section, between the copyright and certification logos. This is a common pattern but changes the grid layout.

**Recommended:** Company column placement is simplest and most conventional for a single LinkedIn link.

## SOCL-04 Scope Decision

**Requirement:** SOCL-04 says "Social links in Organization schema (sameAs)"

**Analysis:** The Organization schema is being built in Phase 4 (SCHM-01: "Organization + LocalBusiness JSON-LD on homepage"). The `sameAs` property is an array of URLs that belongs inside the Organization schema JSON-LD block.

**Recommendation:** Phase 3 should NOT implement the `sameAs` schema. Instead:
1. Phase 3 adds the LinkedIn link to the footer (SOCL-03).
2. Phase 3 documents the discovered social profile URL (`https://www.linkedin.com/company/10x-velocity`) so Phase 4 can reference it in the Organization schema.
3. Phase 4 (plan 04-01) includes `sameAs: ["https://www.linkedin.com/company/10x-velocity"]` in the Organization JSON-LD.

**Rationale:** Adding a standalone `sameAs` JSON-LD block in Phase 3 that Phase 4 would then merge/replace is wasteful. The Organization schema in Phase 4 is the natural home for `sameAs`. However, the ROADMAP assigns SOCL-04 to Phase 3. The planner should handle this by either:
- **(Option A)** Adding a minimal standalone JSON-LD block with just `sameAs` in Phase 3, which Phase 4 merges -- extra work, but satisfies the requirement traceability.
- **(Option B)** Noting that SOCL-04 is partially satisfied in Phase 3 (link collected/documented) and fully satisfied in Phase 4 (schema implemented) -- simpler, avoids throwaway code.

**Recommended: Option B.** Document the social URL in a data constant or comment, defer the actual schema to Phase 4.

## OG Tag Specification Per Page Type

### Standard Pages (og:type = "website")
All 29 static pages use:
- `og:title` = same as `<title>`
- `og:description` = same as `<meta name="description">`
- `og:url` = same as `<link rel="canonical">`
- `og:type` = `"website"`
- `og:image` = `"https://10xvelocity.ai/og-image.png"`
- `twitter:card` = `"summary_large_image"`

### Blog Posts (og:type = "article")
The 1 dynamic blog component uses:
- `og:title` = same as `<title>` (truncated blog title)
- `og:description` = `post.excerpt`
- `og:url` = `https://10xvelocity.ai/blog/${post.id}`
- `og:type` = `"article"`
- `og:image` = `post.image` (Unsplash URL, already absolute)
- `twitter:card` = `"summary_large_image"`

### Twitter Card Minimal Tags
Per X/Twitter's documentation, when OG tags are present, Twitter falls back to them. Only `twitter:card` is required to set the card type. Optional but not necessary:
- `twitter:site` -- only useful if the company has a Twitter handle (not found)
- `twitter:title`, `twitter:description`, `twitter:image` -- redundant with OG tags

## OG Image Best Practices

| Property | Recommendation | Source |
|----------|---------------|--------|
| Dimensions | 1200 x 630 pixels (1.91:1 ratio) | Multiple authoritative sources |
| Format | PNG or JPG | OG spec |
| File size | Under 1MB, ideally under 300KB | Facebook documentation |
| URL | Must be absolute with https:// | OG protocol specification |
| Fallback | Keep a default in index.html for crawler baseline | SPA best practice |

The existing `og-image.png` appears to be approximately 1200x630 based on visual inspection (shows the homepage hero section). This is the correct standard dimension.

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| react-helmet | react-helmet-async | 2020+ | react-helmet works fine but is unmaintained; async version is recommended for new projects. Existing codebase uses react-helmet and migrating is out of scope. |
| Separate Twitter tags for all properties | Twitter falls back to OG tags | Always supported | Only need `twitter:card` tag; title/description/image use OG fallback |
| Netlify legacy prerendering | Netlify Prerender extension | Jan 2026 | Legacy feature deprecated; new extension is GA as of Dec 2025 |

## Prerendering Consideration

**Status:** The site does NOT currently have prerendering enabled. No `netlify.toml` exists. The `_redirects` file handles SPA routing only.

**Impact on Phase 3:** Without prerendering, social crawlers see only the static `index.html` content, not per-page Helmet tags. This means:
- Facebook/LinkedIn shares will show the generic `index.html` title and the static OG image
- The per-page OG tags added via Helmet will only be visible to crawlers when prerendering is enabled

**Recommendation for Phase 3:**
1. Add OG tags via Helmet on all pages (correct implementation for when prerendering is active)
2. Fix the `index.html` OG image to absolute URL (immediate improvement)
3. Add `og:title`, `og:description`, `og:type`, and `og:url` static fallback tags to `index.html` for baseline
4. Document enabling Netlify Prerender as a separate operational step (not a code change in this phase, but called out in success criteria notes)

**Enabling prerendering is an operational/deployment concern, not a code change.** It requires installing an extension in the Netlify dashboard. The Phase 3 plans should note this as a post-deployment step.

## Plan Structure Recommendations

### Plan 03-01: OG and Twitter Card Meta Tags on All Pages (SOCL-01, SOCL-02, IMG-04)

**Scope:** 30 files + index.html

**Suggested task grouping:**
1. Fix `index.html`: Update static OG image to absolute URL, add static fallback OG tags
2. Top-level pages (14 files): Add OG + Twitter Card tags to existing Helmet blocks
3. Service pages (4 files): Add OG + Twitter Card tags
4. Case study pages (9 files): Add OG + Twitter Card tags
5. Legal pages (2 files): Add OG + Twitter Card tags
6. BlogPost dynamic component (1 file): Add OG + Twitter Card tags with dynamic values

**Pattern:** Each file gets the same 6 meta tags added to its existing Helmet block. The values are derived from the already-existing title, description, and canonical. This is highly mechanical and repetitive.

**Verification:** Use Facebook Sharing Debugger, Twitter Card Validator, and LinkedIn Post Inspector to test. Also verify via view-source that Helmet injects the tags correctly in-browser.

### Plan 03-02: Social Media Links in Footer and Schema Preparation (SOCL-03, SOCL-04)

**Scope:** 1 file (Footer.tsx) + documentation

**Tasks:**
1. Add LinkedIn company link to footer Company column
2. Document social profile URL for Phase 4 schema use
3. Note: SOCL-04 (sameAs schema) deferred to Phase 4 as part of Organization JSON-LD

**This is a small plan.** Could potentially be merged into 03-01 if the planner prefers fewer plans.

## Open Questions

1. **Are there undiscovered social profiles?**
   - What we know: LinkedIn company page exists and is verified. No Facebook, Twitter/X, Instagram, or YouTube accounts found via extensive web search.
   - What's unclear: The company owner may have social accounts not indexed by search engines.
   - Recommendation: Proceed with LinkedIn only. If additional profiles are discovered later, adding them to the footer and schema is a trivial change.

2. **Should prerendering be enabled as part of Phase 3?**
   - What we know: Without prerendering, social crawlers cannot see Helmet-injected OG tags. Netlify Prerender extension is available.
   - What's unclear: Whether the Netlify plan supports the extension, and whether enabling it has side effects on the existing deployment.
   - Recommendation: Document as a post-deployment operational step. The code changes in Phase 3 are correct regardless of whether prerendering is enabled. Enabling prerendering is noted in REQUIREMENTS.md as a v2 item (PERF-01).

3. **Should blog posts use Unsplash images as og:image?**
   - What we know: Blog posts have `post.image` fields pointing to Unsplash URLs. These are external URLs but are absolute and valid.
   - What's unclear: Whether Unsplash rate-limits or blocks crawler access to images.
   - Recommendation: Use `post.image` for blog OG images. Unsplash is a widely-used CDN and social crawlers routinely access it. Fallback to the site-wide OG image is unnecessary complexity.

## Sources

### Primary (HIGH confidence)
- Existing codebase inspection -- all 30 Helmet blocks verified via grep
- `public/og-image.png` -- file exists, visual inspection confirms homepage screenshot at standard dimensions
- `index.html` -- static OG image tag uses relative URL `/og-image.png`
- `src/components/landing/Footer.tsx` -- 4-column grid, no social links currently
- `src/data/blogPosts.ts` -- 5 posts with Unsplash image URLs
- LinkedIn company page verified via WebFetch: `https://www.linkedin.com/company/10x-velocity`
- [Open Graph Protocol specification](https://ogp.me/) -- og:type values, required properties
- [X/Twitter Cards markup docs](https://developer.x.com/en/docs/x-for-websites/cards/overview/markup) -- Twitter falls back to OG tags
- [Netlify Prerendering docs](https://docs.netlify.com/build/post-processing/prerendering/) -- prerender extension for SPA crawlers

### Secondary (MEDIUM confidence)
- [OG Image Size Guide](https://myogimage.com/blog/og-image-size-meta-tags-complete-guide) -- 1200x630 standard
- [FreeCodeCamp React Helmet examples](https://www.freecodecamp.org/news/react-helmet-examples/) -- Helmet meta property syntax
- [Netlify Prerender extension GA announcement](https://www.netlify.com/changelog/2025-12-16-prerender-extension-ga/) -- extension available since Dec 2025
- [Multiple sources on SPA + OG crawler blindness](https://whatabout.dev/open-graph-facebook-and-client-side-rendering/) -- social crawlers don't execute JS

### Tertiary (LOW confidence)
- Social media profile search results -- absence of Facebook/Twitter/Instagram/YouTube profiles for 10x Velocity (could exist but not indexed)

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH -- No new libraries needed, react-helmet already proven across 30 pages
- Architecture: HIGH -- Pattern is a direct extension of Phase 2's established Helmet pattern
- Pitfalls: HIGH -- SPA crawler limitation is well-documented and verified from multiple authoritative sources
- Social profiles: MEDIUM -- LinkedIn verified, absence of other profiles is based on search results (could exist but not found)
- OG image dimensions: MEDIUM -- Visual inspection only, exact pixel dimensions not measured

**Research date:** 2026-02-10
**Valid until:** 2026-03-10 (stable domain, OG spec doesn't change frequently)
