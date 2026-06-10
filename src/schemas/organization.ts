export const BUSINESS_DATA = {
  name: "10x Velocity",
  url: "https://10xvelocity.ai/",
  logo: "https://10xvelocity.ai/lovable-uploads/d113002f-f6b2-41b5-aa96-2057dc8f4046.webp",
  email: "info@10xvelocity.ai",
  telephone: "+1-502-804-2559",
  description:
    "10x Velocity is a veteran-owned AI & automation consulting firm based in Louisville, Kentucky, serving mid-market companies and nonprofits nationally. Services include AI process automation, AI strategy and opportunity discovery, data cleaning, voice agents, smart bots, and team training.",
  linkedIn: "https://www.linkedin.com/company/10x-velocity",
  image: "https://10xvelocity.ai/og-image.png",
  priceRange: "$129 - $999+",
  address: {
    streetAddress: "10440 Bluegrass Pkwy",
    addressLocality: "Louisville",
    addressRegion: "KY",
    postalCode: "40299",
    addressCountry: "US",
  },
} as const;

/** Services offered, used for the schema.org OfferCatalog.
 *  Keep in sync with src/pages/Services.tsx. */
export const SERVICE_CATALOG = [
  { name: "AI Process Automation", url: "https://10xvelocity.ai/services" },
  { name: "AI Strategy & Opportunity Discovery", url: "https://10xvelocity.ai/services" },
  { name: "Data Cleaning", url: "https://10xvelocity.ai/services/data-cleaning" },
  { name: "Data Analytics", url: "https://10xvelocity.ai/services" },
  { name: "Process Mining", url: "https://10xvelocity.ai/services" },
  { name: "AI Voice Agents", url: "https://10xvelocity.ai/services/phone-voice-agents" },
  { name: "Smart Bots", url: "https://10xvelocity.ai/services/smart-bots" },
  { name: "Team Training & AI Workshops", url: "https://10xvelocity.ai/services/ai-workshops" },
  { name: "Rapid Prototype Sprint", url: "https://10xvelocity.ai/prototypes" },
] as const;

/**
 * Canonical identity @graph: Organization + ProfessionalService + WebSite.
 * Used by src/pages/Index.tsx (client-rendered) AND duplicated statically in
 * index.html so AI crawlers that don't execute JavaScript (GPTBot, ClaudeBot,
 * PerplexityBot) still receive it. If you change this, update index.html too.
 */
export function identityGraph() {
  const org = `${BUSINESS_DATA.url}#organization`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": org,
        name: BUSINESS_DATA.name,
        url: BUSINESS_DATA.url,
        logo: { "@type": "ImageObject", url: BUSINESS_DATA.logo },
        description: BUSINESS_DATA.description,
        email: BUSINESS_DATA.email,
        telephone: BUSINESS_DATA.telephone,
        sameAs: [BUSINESS_DATA.linkedIn],
        address: { "@type": "PostalAddress", ...BUSINESS_DATA.address },
        award: "Veteran-Owned Small Business (VOSB) Verified",
        areaServed: [
          { "@type": "City", name: "Louisville" },
          { "@type": "State", name: "Kentucky" },
          { "@type": "Country", name: "United States" },
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${BUSINESS_DATA.url}#localbusiness`,
        name: BUSINESS_DATA.name,
        url: BUSINESS_DATA.url,
        image: BUSINESS_DATA.image,
        telephone: BUSINESS_DATA.telephone,
        email: BUSINESS_DATA.email,
        priceRange: BUSINESS_DATA.priceRange,
        parentOrganization: { "@id": org },
        address: { "@type": "PostalAddress", ...BUSINESS_DATA.address },
        areaServed: [
          { "@type": "City", name: "Louisville" },
          { "@type": "Country", name: "United States" },
        ],
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "17:00",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "AI & Automation Consulting Services",
          itemListElement: SERVICE_CATALOG.map((svc) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: svc.name, url: svc.url },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${BUSINESS_DATA.url}#website`,
        url: BUSINESS_DATA.url,
        name: BUSINESS_DATA.name,
        description: "AI & Automation Consulting",
        publisher: { "@id": org },
      },
    ],
  };
}
