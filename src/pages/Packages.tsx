import { Helmet } from "react-helmet";
import { helmetJsonLdProp } from "react-schemaorg";
import { breadcrumbJsonLd } from "@/schemas/breadcrumbs";
import { VisualBreadcrumb } from "@/components/VisualBreadcrumb";
import DiscoveryButton from "@/components/ui/DiscoveryButton";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, ArrowRight, Search, Wrench, Users, TrendingUp } from "lucide-react";

const PAYMENT_LINKS = {
  core: "https://level.10xvelocity.ai/payment-link/6a86f21ed6768df054447056",
  growth: "https://level.10xvelocity.ai/payment-link/6a86f048d6768df054447052",
  pro: "https://level.10xvelocity.ai/payment-link/6a86f27ed6768df054447058",
  singleSession: "https://level.10xvelocity.ai/payment-link/6a86f2b6f9c8c807930b921b",
};

const packages = [
  {
    id: "10xv-core",
    name: "10xV Core",
    subtitle: "Biweekly cadence",
    price: "$2,000",
    priceNote: "/ 4 weeks",
    priceDetail: "One 10xV Core Meeting every two weeks on a standing biweekly cadence.",
    description: "Steady, managed progress toward AI adoption. Your dedicated strategist and architect work a standing biweekly rhythm, building between sessions so every meeting starts with finished work.",
    items: [
      "Biweekly 90-minute 10xV Core Meeting on a standing cadence",
      "A dedicated AI Strategist",
      "A dedicated Automation Architect",
      "5 hours of 10xV build time between each session",
      "Strategy, workflow guidance, training, and team enablement as needed",
      "Documentation and handoff for shipped work",
      "Client portal and async support between sessions",
      "Optional: add the Build Accelerator to double your build time",
    ],
    itemsLabel: "Includes:",
    bestFor: "Companies that want to make steady progress toward AI adoption with a practical, manageable cadence.",
    featured: false,
    ctaText: "Start with 10xV Core",
    paymentLink: PAYMENT_LINKS.core,
  },
  {
    id: "10xv-growth",
    name: "10xV Growth",
    subtitle: "Weekly cadence",
    price: "$4,000",
    priceNote: "/ 4 weeks",
    priceDetail: "One 10xV Growth Meeting every week on a standing weekly cadence.",
    description: "Weekly progress for teams actively prioritizing AI and automation. Twice the build time of Core, with a standing weekly session to keep initiatives moving instead of stacking up.",
    items: [
      "Weekly 90-minute 10x Core Meeting on a standing cadence",
      "A dedicated AI Strategist",
      "A dedicated Automation Architect",
      "5 hours of 10xV build time between each session",
      "Strategy, workflow guidance, training, and team enablement as needed",
      "Documentation and handoff for shipped work",
      "Client portal and async support between sessions",
      "Optional: add the Build Accelerator to double your build time",
    ],
    itemsLabel: "Includes:",
    bestFor: "Companies actively prioritizing AI and automation that want weekly progress.",
    featured: true,
    ctaText: "Get 10xV Growth",
    paymentLink: PAYMENT_LINKS.growth,
  },
  {
    id: "10xv-pro",
    name: "10xV Pro",
    subtitle: "Twice-weekly cadence",
    price: "$8,000",
    priceNote: "/ 4 weeks",
    priceDetail: "Two 10x Core Meetings every week on a standing twice-weekly cadence.",
    description: "Multi-department velocity. Two standing sessions a week and 40 hours of build time per cycle, so several workstreams can run in parallel without waiting on each other.",
    items: [
      "Twice-weekly 90-minute 10x Core Meetings on a standing cadence",
      "A dedicated AI Strategist",
      "A dedicated Automation Architect",
      "5 hours of 10xV build time between each session",
      "Strategy, workflow guidance, training, and team enablement as needed",
      "Documentation and handoff for shipped work",
      "Client portal and async support between sessions",
      "Optional: add the Build Accelerator to double your build time",
    ],
    itemsLabel: "Includes:",
    bestFor: "Teams that want to move faster across multiple departments.",
    featured: false,
    ctaText: "Request 10xV Pro",
    paymentLink: PAYMENT_LINKS.pro,
  },
  {
    id: "single-session",
    name: "Single Session",
    subtitle: "One-time",
    price: "$999",
    priceNote: "/ session",
    priceDetail: "One 2-hour working session, scheduled when it works for you.",
    description: "Not ready for an ongoing cadence? Book a single 2-hour 10x Core Meeting. Same team, same format, no commitment. Many clients start here to experience the format, then move into a standing cadence.",
    items: [
      "Single 2-hour 10x Core Meeting, scheduled when it works for you",
      "An AI strategist leads and an automation architect builds alongside, live inside your stack",
      "One of three focuses: opportunity mapping, team training, or a technical deep dive",
      "No ongoing commitment",
      "Pay per session, book another whenever you want",
    ],
    itemsLabel: "Includes:",
    bestFor: "Companies that want to experience the format before committing to a standing cadence.",
    featured: false,
    ctaText: "Book a Single Session",
    paymentLink: PAYMENT_LINKS.singleSession,
  },
];

const engagementSteps = [
  {
    label: "Getting Started",
    title: "Understand your business and build the roadmap",
    description:
      "We start by learning how your business operates, identifying repetitive work, operational bottlenecks, and opportunities where AI and automation can create the biggest impact. Together we prioritize the highest-value initiatives and create a practical roadmap for what comes next.",
    icon: Search,
  },
  {
    label: "Strategy, Building & Training",
    title: "Every session tailored to what creates the most value",
    description:
      "Some sessions focus on workflow improvement, automation design, and implementation. Others focus on AI strategy, hands-on training, or helping your team build confidence using AI tools. As your business evolves, so does the work.",
    icon: Wrench,
  },
  {
    label: "Dedicated Partner",
    title: "One strategist. One architect. One shared goal.",
    description:
      "We work alongside your team to prioritize initiatives, remove roadblocks, guide adoption, and keep momentum high. As your business evolves, we adapt with you, providing the accountability and collaboration needed to turn ideas into improvements.",
    icon: Users,
  },
  {
    label: "Continuous Progress",
    title: "The work doesn't stop when the meeting ends",
    description:
      "Between sessions your automation architect continues researching, building, testing, documenting, and deploying, so every session starts with meaningful progress instead of picking up where you left off.",
    icon: TrendingUp,
  },
];

const acceleratorRows = [
  { plan: "10xV Core", standard: "10 hours", accelerated: "20 hours", cost: "+$1,300" },
  { plan: "10xV Growth", standard: "20 hours", accelerated: "40 hours", cost: "+$2,600" },
  { plan: "10xV Pro", standard: "40 hours", accelerated: "80 hours", cost: "+$5,200" },
];

const outcomeBullets = [
  "Your AI and automation infrastructure fully configured and under your control (no vendor lock-in)",
  "Functional workflows that start saving time and unlocking bottlenecks immediately",
  "A prioritized roadmap and a strategic approach to leveraging AI and automation",
  "A done-with-you approach so your team learns as we build together",
];

const faqs = [
  {
    question: "Do I need technical knowledge?",
    answer: "No. You don't need coding or automation experience. We build with you, teaching as we go.",
  },
  {
    question: "Will this work with our existing tech stack?",
    answer: "Yes. We integrate with the tools you already use. There is no need to rip and replace.",
  },
  {
    question: "What happens between sessions?",
    answer: "Every plan includes 5 hours of 10xV build time between working sessions. Your automation architect researches, builds, tests, documents, and deploys so each session starts with finished work. Add the Build Accelerator to double those hours without adding meetings to your calendar.",
  },
  {
    question: "Am I locked into a contract?",
    answer: "No. Billing runs on a 4-week cycle with no long-term contract, no onboarding fees, and the ability to scale up or down at any time.",
  },
  {
    question: "Can I start with one session before committing to a cadence?",
    answer: "Absolutely. Many clients book a single 2-hour 10x Core Meeting to experience the format, then continue with additional sessions or move into a standing 10xV Core, Growth, or Pro cadence.",
  },
];

const Packages = () => {
  return (
    <>
      <Helmet
        script={[
          helmetJsonLdProp<any>({
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
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Packages", path: "/packages" },
          ]),
        ]}
      >
        <title>10x Core Meetings | AI & Automation Packages | 10x Velocity</title>
        <meta name="description" content="10x Core Meetings pair your business with a dedicated AI Strategist and Automation Architect on a standing cadence. Plans from $2,000 per 4 weeks, or a single 2-hour session for $999." />
        <link rel="canonical" href="https://10xvelocity.ai/packages" />
        <meta property="og:title" content="10x Core Meetings | AI & Automation Packages | 10x Velocity" />
        <meta property="og:description" content="10x Core Meetings pair your business with a dedicated AI Strategist and Automation Architect on a standing cadence. Plans from $2,000 per 4 weeks, or a single 2-hour session for $999." />
        <meta property="og:url" content="https://10xvelocity.ai/packages" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://10xvelocity.ai/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <VisualBreadcrumb items={[{ name: "Home", path: "/" }, { name: "Packages", path: "/packages" }]} />

        {/* Hero */}
        <section className="container mx-auto px-4 py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-hero-gradient dark:bg-hero-gradient-dark" />
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <p className="text-accent text-sm font-semibold tracking-wide uppercase mb-4">10xV Core OS</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">10x Core Meetings</h1>
            <p className="font-body text-xl md:text-2xl text-foreground mb-4 text-balance">Your fractional AI and automation partner.</p>
            <p className="font-body text-lg md:text-xl text-muted-foreground mb-4 text-pretty">Every engagement pairs your business with a dedicated AI Strategist and a dedicated Automation Architect. We map your opportunities, build real workflows alongside your team, and keep building between sessions.</p>
            <p className="font-body text-base text-muted-foreground">4-week billing. No long-term contract, no onboarding fees, and the ability to scale up or down at any time.</p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-[90rem] mx-auto items-stretch">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={
                  pkg.featured
                    ? "bg-surface border border-border rounded-lg p-8 flex flex-col h-full relative transform xl:-translate-y-2 border-2 border-accent"
                    : "bg-surface border border-border rounded-lg p-8 flex flex-col h-full"
                }
              >
                {pkg.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white text-sm font-semibold px-4 py-1 rounded-full">Most Popular</div>
                )}
                <h3 className="text-2xl font-semibold mb-1">{pkg.name}</h3>
                {pkg.subtitle ? (
                  <p className="text-accent text-sm font-medium mb-4">{pkg.subtitle}</p>
                ) : (
                  <div className="mb-4" />
                )}
                <div className="mb-4">
                  <span className="text-4xl font-bold">{pkg.price}</span>
                  {pkg.priceNote && <span className="text-muted-foreground text-lg"> {pkg.priceNote}</span>}
                </div>
                <p className="text-sm text-muted-foreground mb-4">{pkg.priceDetail}</p>
                <p className="font-body text-muted-foreground mb-6">{pkg.description}</p>
                <p className="text-sm font-medium text-foreground mb-3">{pkg.itemsLabel}</p>
                <ul className="space-y-2 mb-6 flex-grow">
                  {pkg.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-body text-sm text-muted-foreground mb-6 italic">
                  <span className="font-medium text-foreground not-italic">Best for: </span>
                  {pkg.bestFor}
                </p>
                {pkg.featured ? (
                  <a href={pkg.paymentLink} className="block w-full text-center px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-opacity-90 transition-colors">
                    {pkg.ctaText}
                  </a>
                ) : (
                  <a href={pkg.paymentLink} className="block w-full text-center px-6 py-3 border border-accent text-accent font-medium rounded-lg hover:bg-accent/10 transition-colors">
                    {pkg.ctaText}
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center max-w-2xl mx-auto bg-surface border border-border rounded-lg p-10 relative overflow-hidden">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Not sure which cadence fits?</h3>
            <p className="font-body text-lg text-muted-foreground">
              Book a free discovery call and we will recommend a cadence based on how much you want built and how fast you want to move.
            </p>
          </div>
        </section>

        {/* How the Engagement Works */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How the Engagement Works</h2>
            <p className="font-body text-lg text-muted-foreground">
              Every engagement follows the same proven methodology. Your dedicated AI Strategist and Automation Architect work alongside your team to identify opportunities, implement solutions, build AI capabilities, and keep initiatives moving forward between every session.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {engagementSteps.map((step) => (
              <div key={step.label} className="bg-surface border border-border rounded-lg p-6">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-muted-foreground" />
                </div>
                <p className="text-accent-secondary font-semibold text-sm mb-2">{step.label}</p>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="font-body text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Build Accelerator */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Build Accelerator</h2>
            <p className="font-body text-lg text-muted-foreground text-center mb-4">
              Every plan includes 5 hours of build time between working sessions. Add the Build Accelerator at checkout to 2X your output to 10 hours.
            </p>
            <p className="font-body text-muted-foreground text-center mb-10">
              Your meeting cadence stays exactly the same. What changes is how much the 10xV team can build between sessions, so more of what you scope gets finished before each meeting instead of carrying over to the next cycle. If you want more built without more meetings on your calendar, this is the best path to get there.
            </p>
            <div className="bg-surface border border-border rounded-lg p-4 md:p-8 overflow-x-auto">
              <table className="w-full text-left min-w-[32rem]">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-3 pr-4 text-sm font-semibold text-foreground">Plan</th>
                    <th className="py-3 pr-4 text-sm font-semibold text-foreground">Standard</th>
                    <th className="py-3 pr-4 text-sm font-semibold text-foreground">With Build Accelerator</th>
                    <th className="py-3 text-sm font-semibold text-foreground">Add-on cost</th>
                  </tr>
                </thead>
                <tbody>
                  {acceleratorRows.map((row) => (
                    <tr key={row.plan} className="border-b border-border last:border-0">
                      <td className="py-3 pr-4 font-medium text-foreground">{row.plan}</td>
                      <td className="py-3 pr-4 font-body text-muted-foreground">{row.standard}</td>
                      <td className="py-3 pr-4 font-body text-muted-foreground">{row.accelerated}</td>
                      <td className="py-3 font-medium text-accent">{row.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Businesses Choose 10x Velocity</h2>
            <div className="bg-surface border border-border rounded-lg p-8 md:p-12">
              <ul className="space-y-4">
                {outcomeBullets.map((text) => (
                  <li key={text} className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-muted-foreground shrink-0 mt-1" />
                    <span className="font-body text-lg text-muted-foreground">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="bg-surface border border-border rounded-lg p-8">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* The 10xVelocity Advantage */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">The 10xVelocity Advantage</h2>
            <p className="font-body text-lg text-foreground mb-8">10xVelocity is pragmatic, human-centered, and contrarian to AI hype.</p>
            <p className="font-body text-muted-foreground text-lg mb-3">We do not sell complexity.</p>
            <p className="font-body text-muted-foreground text-lg mb-3">We do not chase shiny tools.</p>
            <p className="font-body text-muted-foreground text-lg mb-3">We do not automate broken processes.</p>
            <p className="text-xl font-semibold text-foreground mt-6">We simplify first - then scale what matters.</p>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center bg-surface border border-border rounded-lg p-12 relative overflow-hidden">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Move?
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-8">
              Book a free discovery call to lock in your cadence.
            </p>
            <DiscoveryButton />
          </div>
        </section>
      </div>
    </>
  );
};

export default Packages;
