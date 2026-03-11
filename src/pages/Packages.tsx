import { Helmet } from "react-helmet";
import { breadcrumbJsonLd } from "@/schemas/breadcrumbs";
import { VisualBreadcrumb } from "@/components/VisualBreadcrumb";
import DiscoveryButton from "@/components/ui/DiscoveryButton";
import { CheckCircle2, ArrowRight, Clock, Users, Shield, Zap } from "lucide-react";

const packages = [
  {
    id: "ai-diagnostic-review",
    name: "AI Diagnostic Review",
    subtitle: "10xV Core OS",
    price: "$129",
    priceNote: "",
    priceDetail: "One-Time Fee",
    description: "Get a focused expert review before you commit to tools or implementation. 10xV’s Chief Automation Engineer reviews your current workflows, technology posture, and operational needs to identify where artificial intelligence can create the greatest immediate impact inside your business.",
    items: [
      "Workflow and operational review",
      "Technology posture assessment",
      "Priority impact areas identified",
      "Expert recommendation on next-step AI options",
    ],
    itemsLabel: "Includes:",
    bestFor: "Companies that want an informed starting point before choosing the right AI stack.",
    featured: false,
    ctaText: "Start with a Diagnostic Review",
    paymentLink: "https://level.10xvelocity.ai/payment-link/69a872752769e62083195257",
  },
  {
    id: "essential-ai-stack",
    name: "Essential AI Stack",
    subtitle: "10xV Core OS",
    price: "$499",
    priceNote: "",
    priceDetail: "One-Time Fee",
    description: "Get a tailored AI plan your team can implement internally. 10xV’s Chief Automation Engineer conducts a remote audit of your business needs and delivers a customized AI Stack Plan with clear implementation guidance so your team can move forward with confidence.",
    items: [
      "Remote needs audit",
      "Tailored AI Stack Plan",
      "Recommended tools and use cases",
      "Clear implementation guidance for internal deployment",
    ],
    itemsLabel: "Includes:",
    bestFor: "Companies with internal IT support or team members who can manage straightforward setup and rollout.",
    featured: true,
    ctaText: "Get the Essential AI Stack",
    paymentLink: "https://level.10xvelocity.ai/payment-link/69a870bc45bed148f39e8a94",
  },
  {
    id: "advanced-ai-stack",
    name: "Advanced AI Stack",
    subtitle: "10xV Core OS",
    price: "$999",
    priceNote: "",
    priceDetail: "Starting at",
    description: "Move from recommendation to execution with done-for-you support. 10xV’s Chief Automation Engineer refines your recommended AI stack, implements the solution on your behalf, and develops a forward-looking plan for future upgrades and expansion.",
    items: [
      "Refined AI Stack Plan",
      "Hands-on implementation support",
      "Guided configuration and rollout",
      "Forward-looking upgrade roadmap",
    ],
    itemsLabel: "Includes:",
    bestFor: "Companies that want a more hands-on deployment with expert implementation support.",
    featured: false,
    ctaText: "Request the Advanced AI Stack",
    paymentLink: "https://level.10xvelocity.ai/payment-link/69a8722843b911350484265b",
  },
  {
    id: "ai-advantage-plan",
    name: "AI Advantage Plan",
    subtitle: "10xV Core OS",
    price: "$49",
    priceNote: "/ month",
    priceDetail: "Ongoing",
    description: "Stay current as AI changes fast. 10xV’s Automation Engineer team provides ongoing oversight of your AI stack to help ensure your systems remain current, effective, and aligned with emerging technology and changing business needs.",
    items: [
      "Ongoing AI stack oversight",
      "Periodic recommendations and updates",
      "Proactive guidance as tools evolve",
      "Continued alignment with business goals",
    ],
    itemsLabel: "Includes:",
    bestFor: "Companies that want continued expert guidance, periodic upgrades, and a proactive partner to help maintain their competitive edge.",
    featured: false,
    ctaText: "Join the AI Advantage Plan",
    paymentLink: "https://level.10xvelocity.ai/payment-link/69b1b30d1e612162507ef2b6",
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
        <meta name="description" content="Choose the 10xV Core OS package that fits where your business is today. Expert recommendation, tailored plans, or hands-on implementation from 10xVelocity." />
        <link rel="canonical" href="https://10xvelocity.ai/packages" />
        <meta property="og:title" content="AI & Automation Packages | 10x Velocity" />
        <meta property="og:description" content="Choose the 10xV Core OS package that fits where your business is today. Expert recommendation, tailored plans, or hands-on implementation from 10xVelocity." />
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
            <p className="text-xl md:text-2xl text-velocity-light mb-4 text-balance">Choose the 10xV Core OS package that fits where your business is today.</p>
            <p className="text-lg md:text-xl text-velocity-muted mb-4 text-pretty">Whether you need a clear expert recommendation, a tailored AI software plan, or hands-on implementation support, 10xVelocity helps you adopt artificial intelligence with clarity, control, and momentum.</p>
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
                    ? "glass-card p-8 flex flex-col h-full relative transform xl:-translate-y-2 border-2 border-velocity-accent"
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
                  <a href={pkg.paymentLink} className="block w-full text-center px-6 py-3 bg-velocity-accent text-white font-medium rounded-lg hover:bg-opacity-90 transition-colors">
                    {pkg.ctaText}
                  </a>
                ) : (
                  <a href={pkg.paymentLink} className="block w-full text-center px-6 py-3 border border-velocity-accent text-velocity-accent font-medium rounded-lg hover:bg-velocity-accent/10 transition-colors">
                    {pkg.ctaText}
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center max-w-2xl mx-auto glass-card p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-velocity-accent/10 rounded-full blur-2xl -z-10" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl -z-10" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4 heading-gradient">Not sure where to start?</h3>
            <p className="text-lg text-velocity-muted">
              Begin with the <a href="https://level.10xvelocity.ai/widget/form/q29C5iSULP1AO63r4Vjl" target="_blank" rel="noopener noreferrer" className="text-velocity-light font-medium hover:text-velocity-accent transition-colors border-b border-velocity-light hover:border-velocity-accent">AI Diagnostic Review</a> and get a clear expert recommendation before selecting the right implementation path.
            </p>
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
