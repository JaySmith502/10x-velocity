import { lazy, Suspense } from "react";
import { ArrowRight, Calculator } from "lucide-react";
import { Helmet } from "react-helmet";
import { helmetJsonLdProp } from "react-schemaorg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BUSINESS_DATA } from "@/schemas/organization";
import ThinkingAnimation from "@/components/landing/ThinkingAnimation";
import heroGraphic from "@/components/layout/Hero_graphic.png";

const GradientMesh = lazy(() => import("@/components/ui/GradientMesh"));

const Index = () => {
  return (
    <>
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
                image: BUSINESS_DATA.image,
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
        <meta
          name="description"
          content="10x Velocity helps businesses automate workflows and leverage AI to save time and cut costs. AI consulting and automation services based in Louisville, KY."
        />
        <link rel="canonical" href="https://10xvelocity.ai/" />
        <meta property="og:title" content="AI & Automation Consulting | 10x Velocity" />
        <meta property="og:description" content="10x Velocity helps businesses automate workflows and leverage AI to save time and cut costs." />
        <meta property="og:url" content="https://10xvelocity.ai/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://10xvelocity.ai/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* WebGL gradient mesh — lazy loaded, CSS fallback for no-JS/no-WebGL/reduced-motion */}
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_70%_30%,hsl(195_40%_95%)_0%,hsl(40_20%_98%)_50%,hsl(30_14%_94%)_100%)] dark:bg-[radial-gradient(ellipse_at_70%_30%,hsl(20_8%_9%)_0%,hsl(20_8%_7%)_50%,hsl(20_8%_5%)_100%)]"
        >
          <Suspense fallback={null}>
            <GradientMesh className="absolute inset-0 w-full h-full [&:not([data-active=true])]:hidden" />
          </Suspense>
        </div>
      <div className="container mx-auto px-4 pt-16 md:pt-24 pb-16 md:pb-20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12 max-w-6xl mx-auto">
          <div className="md:flex-1 md:max-w-xl animate-fade-up">
            <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-4">
              AI & Automation Consulting
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] mb-6 text-foreground">
              Accelerate Your Business Growth with AI & Automation
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
              AI & automation consulting for companies ready to move faster. Based in Louisville, serving ambitious teams everywhere.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild className="bg-foreground text-background hover:bg-foreground/90 font-semibold">
                <Link to="/contact">
                  Book a Discovery Call <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-border text-foreground hover:bg-muted hover:text-foreground font-medium">
                <Link to="/savings-calculator">
                  Calculate Savings <Calculator className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </div>
            <ThinkingAnimation />
          </div>

          {/* Hero illustration */}
          <div className="hidden md:flex items-center justify-center md:flex-1 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <img
              src={heroGraphic}
              alt="AI automation network diagram showing interconnected nodes and data flows"
              className="w-full max-w-md lg:max-w-lg mix-blend-screen"
              width={1800}
              height={1200}
            />
          </div>
        </div>
      </div>
      </section>

      {/* Logo bar */}
      <section className="bg-muted py-6 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-2">
            <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">Trusted by</span>
            {["GovBrokers", "Innes & Young", "eCatalyst", "Hillcrest Partners", "Catalyst Group"].map((name) => (
              <span key={name} className="text-sm font-semibold text-muted-foreground/60">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured case study */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-6">Featured Result</p>
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
            <div className="md:flex-1">
              <h2 className="font-display text-2xl md:text-3xl font-extrabold leading-tight mb-4 text-foreground">
                GovBrokers cut processing time by 85% and saved $240K/year
              </h2>
              <p className="font-body text-base text-muted-foreground leading-relaxed mb-5">
                A government services firm drowning in manual document processing. We automated their core workflow in 6 weeks — now their team focuses on clients, not paperwork.
              </p>
              <Link to="/case-studies/govbrokers" className="text-sm font-semibold text-accent hover:underline inline-flex items-center gap-1">
                Read the full story <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3 md:gap-4 md:flex-1 w-full md:w-auto">
              {[
                { value: "85%", label: "Faster processing" },
                { value: "$240K", label: "Annual savings" },
                { value: "6 wk", label: "Implementation" },
                { value: "3 FTE", label: "Hours reclaimed" },
              ].map((metric) => (
                <div key={metric.label} className="bg-surface border border-border rounded-lg p-5">
                  <div className="font-display text-2xl md:text-3xl font-extrabold text-foreground">{metric.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-surface border-y border-border py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-10 gap-4">
              <h2 className="font-display text-2xl md:text-3xl font-extrabold text-foreground">How we work</h2>
              <p className="font-body text-sm text-muted-foreground md:max-w-xs md:text-right">
                A structured approach that moves fast without cutting corners.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              {[
                { num: "01", title: "Assess", body: "We map your current processes and identify where automation creates the most leverage." },
                { num: "02", title: "Build", body: "We implement targeted solutions — typically live within 4–8 weeks, not months." },
                { num: "03", title: "Scale", body: "We measure results and expand what works. Your team learns the systems alongside us." },
              ].map((step, i) => (
                <div
                  key={step.num}
                  className={`py-8 md:py-0 ${
                    i < 2 ? "border-b md:border-b-0 md:border-r border-border" : ""
                  } ${i === 0 ? "md:pr-10" : i === 1 ? "md:px-10" : "md:pl-10"}`}
                >
                  <div className="font-display text-5xl font-extrabold text-border mb-3">{step.num}</div>
                  <div className="font-display text-lg font-bold text-foreground mb-2">{step.title}</div>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dual audience */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="pb-10 md:pb-0 md:pr-12 border-b md:border-b-0 md:border-r border-border">
              <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">For Businesses</p>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">Scale operations without scaling headcount</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Automate repetitive tasks. Optimize workflows with AI. Free your team for strategic work that grows revenue.
              </p>
            </div>
            <div className="pt-10 md:pt-0 md:pl-12">
              <p className="text-xs font-semibold tracking-widest uppercase text-accent-secondary mb-3">For Nonprofits</p>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">Maximize impact with limited resources</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Streamline donor management, volunteer coordination, and program delivery — so you can focus on your mission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground text-background">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-extrabold mb-2">Ready to move faster?</h2>
              <p className="font-body text-sm text-background/60">
                15-minute call. No pitch deck. Just an honest look at what automation could do for you.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Button asChild className="bg-accent text-white hover:bg-accent/90 font-semibold">
                <Link to="/contact">
                  Book a Discovery Call <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
              <Button asChild className="bg-transparent border border-background/30 text-background hover:bg-background/10 font-medium">
                <Link to="/savings-calculator">
                  Calculate Savings
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
