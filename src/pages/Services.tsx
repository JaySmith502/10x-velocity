
import React from "react";
import { Helmet } from "react-helmet";
import { helmetJsonLdProp } from "react-schemaorg";
import { breadcrumbJsonLd } from "@/schemas/breadcrumbs";
import { ArrowRight, Bot, ChartLine, Users, Database, GraduationCap, Search, FileText, Rocket } from "lucide-react";
import DiscoveryButton from "@/components/ui/DiscoveryButton";
import { Link } from "react-router-dom";
import { VisualBreadcrumb } from "@/components/VisualBreadcrumb";

const Services = () => {
  return (
    <>
      <Helmet
        script={[
          ...services.map(svc => helmetJsonLdProp<any>({
            "@context": "https://schema.org",
            "@type": "Service",
            name: svc.title,
            description: svc.description,
            provider: { "@type": "Organization", "@id": "https://10xvelocity.ai/#organization" },
            areaServed: { "@type": "Country", name: "US" },
            serviceType: "AI Consulting",
          })),
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
          breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]),
        ]}
      >
        <title>AI & Automation Services | 10x Velocity</title>
        <meta
          name="description"
          content="Explore our full suite of AI and automation services including voice agents, smart bots, data cleaning, and workshops. Transform your business operations."
        />
        <link rel="canonical" href="https://10xvelocity.ai/services" />
        <meta property="og:title" content="AI & Automation Services | 10x Velocity" />
        <meta property="og:description" content="Explore our full suite of AI and automation services including voice agents, smart bots, data cleaning, and workshops. Transform your business operations." />
        <meta property="og:url" content="https://10xvelocity.ai/services" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://10xvelocity.ai/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="min-h-screen flex flex-col">
      <VisualBreadcrumb items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]} />
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Comprehensive AI solutions to transform your operations and accelerate growth.
            We help businesses and nonprofits leverage cutting-edge technology to overcome capacity challenges.
          </p>
        </div>
      </section>

      {/* Services — editorial index */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto divide-y divide-border">
          {services.map((service, index) => (
            <div
              key={service.title}
              id={service.id}
              className="grid md:grid-cols-12 gap-6 md:gap-10 py-12 animate-fade-up scroll-mt-24"
            >
              <div className="md:col-span-5">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-display text-4xl font-extrabold text-border tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="font-body text-muted-foreground mb-4">{service.description}</p>
                {service.link && (
                  <Link
                    to={service.link}
                    className="text-accent-strong hover:text-foreground font-semibold text-sm inline-flex items-center gap-1"
                  >
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
              <div className="md:col-span-7 md:pl-10 md:border-l border-border">
                <h4 className="text-xs font-semibold tracking-widest uppercase text-accent-strong mb-4">
                  Key Benefits
                </h4>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <ArrowRight className="w-4 h-4 text-accent shrink-0 mt-1" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ — two-column list */}
      <section className="container mx-auto px-4 py-16 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-10">Frequently asked questions</h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {faqs.map((faq, index) => (
              <div key={index}>
                <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                <p className="font-body text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center bg-surface border border-border rounded-lg p-12 relative overflow-hidden">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Book a free 15-minute discovery call to discuss how our services can help your organization.
          </p>
          <DiscoveryButton />
        </div>
      </section>
    </div>
    </>
  );
};

const services = [
  {
    id: "team-training",
    title: "Team Training",
    description: "Equip your team with the skills to leverage AI tools effectively through targeted workshops and training.",
    icon: GraduationCap,
    benefits: [
      "Maximize productivity with AI chat models and tools",
      "Custom training for your industry and specific needs",
      "Reduce resistance to technology adoption",
      "Create internal AI champions within your organization"
    ]
  },
  {
    id: "opportunity-discovery",
    title: "Opportunity Discovery",
    description: "Identify high-impact areas for digital transformation through a comprehensive analysis of your operations.",
    icon: Search,
    benefits: [
      "Uncover hidden inefficiencies and opportunities",
      "Prioritize initiatives with highest ROI potential",
      "Align technology investments with business goals",
      "Create a roadmap for sustainable transformation"
    ]
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    description: "Transform your raw data into actionable insights with advanced analytics and visualization tools.",
    icon: ChartLine,
    benefits: [
      "Data-driven decision making at all levels",
      "Identify trends and patterns invisible to manual analysis",
      "Predictive analytics to anticipate market changes",
      "Customized dashboards and reporting for key stakeholders"
    ]
  },
  {
    id: "data-cleaning",
    title: "Data Cleaning",
    description: "Transform messy, inconsistent data into clean, reliable assets ready for analytics and automation.",
    icon: FileText,
    benefits: [
      "Improve data quality across all sources",
      "Handle structured and unstructured data types",
      "Standardize formats for better integration",
      "Prepare your data for AI and analytics"
    ],
    link: "/services/data-cleaning"
  },
  {
    id: "process-mining",
    title: "Process Mining",
    description: "Discover optimization opportunities in your business processes through AI-powered analysis and mapping.",
    icon: Database,
    benefits: [
      "Visualize and understand complex processes",
      "Identify bottlenecks and inefficiencies automatically",
      "Continuous improvement through ongoing monitoring",
      "Data-backed recommendations for process optimization"
    ]
  },
  {
    id: "process-automation",
    title: "AI Process Automation",
    description: "Streamline your operations with intelligent automation solutions that learn and adapt to your business processes.",
    icon: Bot,
    benefits: [
      "Reduce manual, repetitive tasks by up to 70%",
      "Minimize human error in routine processes",
      "Scale operations without proportional headcount increases",
      "24/7 processing capability with no downtime"
    ]
  },
  {
    id: "team-augmentation",
    title: "Team Augmentation",
    description: "Enhance your team's capabilities with AI-powered tools and expert support to achieve more with less.",
    icon: Users,
    benefits: [
      "Close skill gaps without lengthy hiring processes",
      "Access specialized expertise on-demand",
      "Reduce training costs for specialized tasks",
      "Improve team productivity with AI assistance"
    ]
  },
  {
    id: "rapid-prototypes",
    title: "Rapid Prototype Sprint",
    description: "Turn your automation or AI idea into a working prototype in 10 days—fast enough to test, pitch, or secure buy-in.",
    icon: Rocket,
    benefits: [
      "Validate ideas before investing $100K+ in development",
      "Clickable prototype with real logic and AI components",
      "Architecture overview and executive brief included",
      "Know exactly what's next in just 10 days"
    ],
    link: "/prototypes"
  }
];

const faqs = [
  {
    question: "What AI and automation services does 10x Velocity offer?",
    answer: "We offer a comprehensive suite of AI services including process automation, data cleaning, voice agents, smart bots, team training workshops, opportunity discovery, data analytics, and rapid prototype sprints.",
  },
  {
    question: "How long does it take to see results from AI automation?",
    answer: "Most clients see measurable results within 30 to 90 days. Our rapid prototype sprints deliver a working prototype in just 10 business days, so you can validate your idea quickly.",
  },
  {
    question: "Do I need technical expertise to work with 10x Velocity?",
    answer: "No. We handle the technical implementation and provide training so your team can manage the tools independently. Our workshops are designed for all skill levels.",
  },
  {
    question: "What industries does 10x Velocity serve?",
    answer: "We serve businesses and nonprofits across industries including real estate, PR and marketing, government contracting, manufacturing, and professional services. Our solutions adapt to any industry's workflows.",
  },
];

export default Services;
