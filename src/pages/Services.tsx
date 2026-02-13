
import React from "react";
import { Helmet } from "react-helmet";
import { helmetJsonLdProp } from "react-schemaorg";
import { breadcrumbJsonLd } from "@/schemas/breadcrumbs";
import { ArrowRight, Bot, ChartLine, Users, Database, GraduationCap, Search, FileText, Rocket } from "lucide-react";
import DiscoveryButton from "@/components/ui/DiscoveryButton";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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
        <div className="absolute top-0 right-0 w-96 h-96 bg-velocity-accent/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10" />
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 heading-gradient">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-velocity-muted mb-8">
            Comprehensive AI solutions to transform your operations and accelerate growth.
            We help businesses and nonprofits leverage cutting-edge technology to overcome capacity challenges.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              id={service.id}
              className="glass-card p-8 flex flex-col h-full animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="w-14 h-14 rounded-full bg-velocity-accent/20 flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-velocity-accent" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-velocity-muted mb-4">{service.description}</p>
              </div>
              <div className="mt-auto">
                <h4 className="font-medium mb-2 text-velocity-light">Key Benefits:</h4>
                <ul className="space-y-2 mb-6">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <ArrowRight className="w-5 h-5 text-velocity-accent shrink-0 mt-1" />
                      <span className="text-velocity-muted">{benefit}</span>
                    </li>
                  ))}
                </ul>
                {service.link && (
                  <Link 
                    to={service.link} 
                    className="text-velocity-accent hover:text-velocity-light font-medium flex items-center gap-2 mt-4"
                  >
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h3>
          <div className="glass-card p-8">
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

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center glass-card p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-velocity-accent/20 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6 heading-gradient">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-lg text-velocity-muted mb-8">
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
