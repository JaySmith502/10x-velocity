import { ArrowRight, Zap, Target, Users, FileText, Presentation, Rocket } from "lucide-react";
import { Helmet } from "react-helmet";
import { breadcrumbJsonLd } from "@/schemas/breadcrumbs";
import { Button } from "@/components/ui/button";
import DiscoveryButton from "@/components/ui/DiscoveryButton";
import { VisualBreadcrumb } from "@/components/VisualBreadcrumb";

const Prototypes = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Helmet
        script={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Prototypes", path: "/prototypes" },
          ]),
        ]}
      >
        <title>Rapid AI Prototype Sprint | 10x Velocity</title>
        <meta name="description" content="Go from idea to interactive proof in just 10 days with our rapid prototype sprint. 10x Velocity builds functional AI prototypes to validate your concept." />
        <link rel="canonical" href="https://10xvelocity.ai/prototypes" />
        <meta property="og:title" content="Rapid AI Prototype Sprint | 10x Velocity" />
        <meta property="og:description" content="Go from idea to interactive proof in just 10 days with our rapid prototype sprint. 10x Velocity builds functional AI prototypes to validate your concept." />
        <meta property="og:url" content="https://10xvelocity.ai/prototypes" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://10xvelocity.ai/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <VisualBreadcrumb items={[{ name: "Home", path: "/" }, { name: "Prototypes", path: "/prototypes" }]} />
        {/* Hero Section */}
        <section className="container mx-auto px-4 pt-20 pb-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-velocity-accent/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10" />
        
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 heading-gradient">
            Rapid Prototype Sprint – From Idea to Interactive Proof in 10 Days
          </h1>
          <p className="text-2xl md:text-3xl font-semibold mb-4 text-velocity-light">
            Validate Before You Build.
          </p>
          <p className="text-lg md:text-xl text-velocity-muted mb-8">
            Turn your automation or AI idea into a working prototype in 10 days—fast enough to test, pitch, or secure buy-in.
          </p>
        </div>
      </section>

      {/* What It Is Section */}
      <section className="bg-gradient-to-b from-black/20 to-transparent py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 heading-gradient text-center">
              A 10-Day Sprint to Clarity and Momentum
            </h2>
            <div className="glass-card p-8 md:p-12 mb-8">
              <p className="text-xl text-velocity-light mb-6 font-medium">
                Ideas die in meetings. We turn them into proof.
              </p>
              <p className="text-lg text-velocity-muted mb-8">
                Our Rapid Prototype Sprint combines human creativity and AI-assisted design to build a clickable, functional prototype that reveals what your product could be—and whether it's worth building.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {deliverableFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-velocity-accent shrink-0 mt-1" />
                    <span className="text-velocity-muted">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 heading-gradient text-center">
            Built for Founders, Innovators, and Intrapreneurs
          </h2>
          <p className="text-lg text-velocity-muted text-center mb-12">
            This sprint isn't just for startups. It's for anyone who needs to make an idea tangible, fast.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {targetAudience.map((audience, index) => (
              <div
                key={audience.title}
                className="glass-card p-8 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-full bg-velocity-accent/20 flex items-center justify-center mb-4">
                  <audience.icon className="w-7 h-7 text-velocity-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-velocity-light">{audience.title}</h3>
                <p className="text-velocity-muted">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gradient-to-b from-transparent to-black/20 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 heading-gradient text-center">
              Our 10-Day Process
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {processSteps.map((step, index) => (
                <div key={step.title} className="text-center animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-16 h-16 rounded-full bg-velocity-accent/20 flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-velocity-accent">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-velocity-light">{step.title}</h3>
                  <p className="text-velocity-muted mb-2">{step.description}</p>
                  <p className="text-sm text-velocity-accent">{step.timeline}</p>
                </div>
              ))}
            </div>

            <div className="glass-card p-6 text-center">
              <p className="text-lg text-velocity-muted">
                <span className="font-semibold text-velocity-light">Optional Add-On:</span> Internal pitch deck to help secure stakeholder approval or funding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Works Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 heading-gradient text-center">
            Fast. Focused. Fundable.
          </h2>
          
          <div className="glass-card p-8 md:p-12 mb-8">
            <p className="text-xl text-velocity-light mb-6">
              Speed means nothing without insight.
            </p>
            <p className="text-lg text-velocity-muted mb-6">
              Each sprint is structured to surface ROI opportunities and operational fit—not just aesthetics. We focus on the why behind the workflow so your prototype becomes a reusable foundation, not a dead-end mockup.
            </p>
            
            <div className="border-l-4 border-velocity-accent pl-6 py-4 bg-velocity-accent/5 rounded-r-lg">
              <p className="text-2xl font-medium text-velocity-light italic">
                "Prototypes aren't about perfection—they're about momentum."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="bg-gradient-to-b from-transparent to-black/20 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 heading-gradient text-center">
              What You Get
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {deliverables.map((deliverable, index) => (
                <div
                  key={deliverable.title}
                  className="glass-card p-8 animate-fade-up flex items-start gap-4"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-full bg-velocity-accent/20 flex items-center justify-center shrink-0">
                    <deliverable.icon className="w-6 h-6 text-velocity-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-velocity-light">{deliverable.title}</h3>
                    <p className="text-velocity-muted">{deliverable.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-velocity-accent/20 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10" />
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 heading-gradient">
              $10,000 | 10 Days | Zero Waste
            </h2>
            <p className="text-lg md:text-xl text-velocity-muted mb-8">
              You'll know exactly what's next—build, buy, or integrate—before spending months or six figures on development.
            </p>
            <DiscoveryButton />
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

const deliverableFeatures = [
  "Real logic and working AI components",
  "Clickable design, ready for demos or funding",
  "Architecture and data flow overview",
  "Executive brief and next-step roadmap"
];

const targetAudience = [
  {
    title: "Founders",
    description: "Validate before investing $100K+ in development.",
    icon: Rocket,
  },
  {
    title: "Innovation Teams",
    description: "Build internal proof-of-concepts to win executive support.",
    icon: Users,
  },
  {
    title: "Consultants & Agencies",
    description: "Use prototypes to sell bold ideas and close new work.",
    icon: Presentation,
  },
];

const processSteps = [
  {
    title: "Frame It",
    description: "90-minute strategy session to define users, value, and core flow.",
    timeline: "Day 1",
  },
  {
    title: "Build It",
    description: "AI-assisted design and logic setup across Days 2–8.",
    timeline: "Days 2-8",
  },
  {
    title: "Demo It",
    description: "Clickable prototype, architecture map, and action plan delivered by Day 10.",
    timeline: "Day 10",
  },
];

const deliverables = [
  {
    title: "Clickable AI-Powered Prototype",
    description: "Interactive, functional prototype with real logic and working AI components ready for testing and demos.",
    icon: Zap,
  },
  {
    title: "Architecture Overview & Data Flow Diagram",
    description: "Complete technical documentation showing how your system components connect and communicate.",
    icon: Target,
  },
  {
    title: "Executive Summary with Build Plan",
    description: "Clear roadmap outlining next steps, investment requirements, and implementation timeline.",
    icon: FileText,
  },
  {
    title: "Optional Internal Pitch Deck",
    description: "Professional presentation materials to help secure stakeholder approval or funding.",
    icon: Presentation,
  },
];

export default Prototypes;
