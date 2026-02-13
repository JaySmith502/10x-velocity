import { Helmet } from "react-helmet";
import { breadcrumbJsonLd } from "@/schemas/breadcrumbs";
import { VisualBreadcrumb } from "@/components/VisualBreadcrumb";
import DiscoveryButton from "@/components/ui/DiscoveryButton";
import { CheckCircle2, ArrowRight, Clock, Users, Shield, Zap } from "lucide-react";

const packages = [
  {
    id: "voice-chat-agents",
    name: "Voice & Chat AI Agents",
    subtitle: "Door Opener",
    price: "$399",
    priceNote: "/ month",
    priceDetail: "3-month minimum",
    description: "Custom AI agents designed to handle repetitive communication and operational tasks without adding headcount.",
    items: [
      "AI receptionists",
      "Website chat agents",
      "Intake and triage agents",
      "Internal knowledge assistants",
    ],
    itemsLabel: "Common use cases:",
    bestFor: "Service-based businesses looking to reduce response time and operational load.",
    featured: false,
  },
  {
    id: "baseline-diagnostic",
    name: "Baseline Diagnostic",
    subtitle: "",
    price: "$499",
    priceNote: "",
    priceDetail: "One-Time Fee",
    description: "A focused systems assessment designed to quickly identify friction, inefficiencies, and near-term automation opportunities.",
    items: [
      "30-minute preliminary interview",
      "1-hour system assessment",
      "1-hour debrief and written report",
      "High-level tech and automation recommendations",
      "Clear next-step prioritization",
    ],
    itemsLabel: "Includes:",
    bestFor: "Businesses that want fast clarity before making automation or AI investments.",
    featured: true,
  },
  {
    id: "enterprise-review",
    name: "Enterprise Review",
    subtitle: "",
    price: "$1,999",
    priceNote: "",
    priceDetail: "One-Time Fee",
    description: "A comprehensive, hands-on systems review and working session designed to support enterprise-level decisions and execution planning.",
    items: [
      "30-minute preliminary interview",
      "1-hour system assessment",
      "3-hour working workshop",
      "Deep-dive system mapping and workflow analysis",
      "Prioritized automation roadmap",
      "Written debrief and implementation guidance",
    ],
    itemsLabel: "Includes:",
    bestFor: "Operators and leadership teams who want decision-grade clarity and a concrete execution plan.",
    featured: false,
  },
];

const timeline = [
  {
    days: "Day 1-3",
    title: "Intake & Setup",
    description: "Systems prepared, diagnostics scheduled, intake completed.",
    icon: Clock,
  },
  {
    days: "Day 4-10",
    title: "Diagnostics & Reviews",
    description: "Baseline Diagnostics and Enterprise Reviews executed.",
    icon: Shield,
  },
  {
    days: "Day 11-25",
    title: "Build & Deploy",
    description: "AI agents and Simple App builds deployed.",
    icon: Zap,
  },
  {
    days: "Day 26-40",
    title: "Refine & Expand",
    description: "Refinement, handoff, and expansion conversations for qualified clients.",
    icon: ArrowRight,
  },
];

const audienceBullets = [
  "Service businesses drowning in manual work",
  "Leadership teams overwhelmed by tools and half-built systems",
  "Operators who want AI to work, not become another distraction",
  "Companies that need leverage now -- not a 6-month roadmap",
];

const Packages = () => {
  return (
    <>
      <Helmet
        script={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Packages", path: "/packages" },
          ]),
        ]}
      >
        <title>AI & Automation Packages | 10x Velocity</title>
        <meta name="description" content="Choose from three AI service tiers: Voice & Chat AI Agents starting at $399/mo, Baseline Diagnostic at $499, or Enterprise Review at $1,999. Fast-start packages from 10x Velocity." />
        <link rel="canonical" href="https://10xvelocity.ai/packages" />
        <meta property="og:title" content="AI & Automation Packages | 10x Velocity" />
        <meta property="og:description" content="Choose from three AI service tiers: Voice & Chat AI Agents starting at $399/mo, Baseline Diagnostic at $499, or Enterprise Review at $1,999. Fast-start packages from 10x Velocity." />
        <meta property="og:url" content="https://10xvelocity.ai/packages" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://10xvelocity.ai/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <VisualBreadcrumb items={[{ name: "Home", path: "/" }, { name: "Packages", path: "/packages" }]} />

        {/* Hero */}
        <section className="container mx-auto px-4 py-20 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-velocity-accent/20 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10" />
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 heading-gradient">AI & Automation Packages</h1>
            <p className="text-xl md:text-2xl text-velocity-light mb-4">Choose from three AI service tiers: Voice & Chat AI Agents starting at $399/mo, Baseline Diagnostic at $499, or Enterprise Review at $1,999. Fast-start packages from 10x Velocity.</p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={
                  pkg.featured
                    ? "glass-card p-8 flex flex-col h-full relative transform lg:scale-105 border-2 border-velocity-accent"
                    : "glass-card p-8 flex flex-col h-full"
                }
              >
                {pkg.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-velocity-accent text-white text-sm font-semibold px-4 py-1 rounded-full">Most Popular</div>
                )}
                <h3 className="text-2xl font-semibold mb-1">{pkg.name}</h3>
                {pkg.subtitle ? (
                  <p className="text-velocity-accent text-sm font-medium mb-4">{pkg.subtitle}</p>
                ) : (
                  <div className="mb-4" />
                )}
                <div className="mb-4">
                  <span className="text-4xl font-bold heading-gradient">{pkg.price}</span>
                  {pkg.priceNote && <span className="text-velocity-muted text-lg"> {pkg.priceNote}</span>}
                </div>
                <p className="text-sm text-velocity-muted mb-4">{pkg.priceDetail}</p>
                <p className="text-velocity-muted mb-6">{pkg.description}</p>
                <p className="text-sm font-medium text-velocity-light mb-3">{pkg.itemsLabel}</p>
                <ul className="space-y-2 mb-6 flex-grow">
                  {pkg.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-velocity-accent shrink-0 mt-0.5" />
                      <span className="text-velocity-muted text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-velocity-muted mb-6 italic">
                  <span className="font-medium text-velocity-light not-italic">Best for: </span>
                  {pkg.bestFor}
                </p>
                {pkg.featured ? (
                  <a href="#" className="block w-full text-center px-6 py-3 bg-velocity-accent text-white font-medium rounded-lg hover:bg-opacity-90 transition-colors">
                    {/* TODO: Replace # with GoHighLevel payment link */}
                    Get Started
                  </a>
                ) : (
                  <a href="#" className="block w-full text-center px-6 py-3 border border-velocity-accent text-velocity-accent font-medium rounded-lg hover:bg-velocity-accent/10 transition-colors">
                    {/* TODO: Replace # with GoHighLevel payment link */}
                    Get Started
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Timeline — How the Process Runs */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 heading-gradient">How the Process Runs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {timeline.map((step) => (
              <div key={step.days} className="glass-card p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-velocity-accent/20 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-6 h-6 text-velocity-accent" />
                </div>
                <p className="text-velocity-accent font-semibold text-sm mb-2">{step.days}</p>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-velocity-muted text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Who This Is For */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 heading-gradient">Who This Is For</h2>
            <div className="glass-card p-8 md:p-12">
              <ul className="space-y-4">
                {audienceBullets.map((text) => (
                  <li key={text} className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-velocity-accent shrink-0 mt-1" />
                    <span className="text-lg text-velocity-muted">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* The 10xVelocity Advantage */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 heading-gradient">The 10xVelocity Advantage</h2>
            <p className="text-lg text-velocity-light mb-8">10xVelocity is pragmatic, human-centered, and contrarian to AI hype.</p>
            <p className="text-velocity-muted text-lg mb-3">We do not sell complexity.</p>
            <p className="text-velocity-muted text-lg mb-3">We do not chase shiny tools.</p>
            <p className="text-velocity-muted text-lg mb-3">We do not automate broken processes.</p>
            <p className="text-xl font-semibold text-velocity-light mt-6">We simplify first — then scale what matters.</p>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center glass-card p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-velocity-accent/20 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 heading-gradient">
              Ready to Move?
            </h2>
            <p className="text-lg text-velocity-muted mb-8">
              Book a free discovery call to lock in your spot.
            </p>
            <DiscoveryButton />
          </div>
        </section>
      </div>
    </>
  );
};

export default Packages;
