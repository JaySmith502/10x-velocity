
import { CheckCircle2 } from "lucide-react";
import { Helmet } from "react-helmet";
import { helmetJsonLdProp } from "react-schemaorg";
import { BUSINESS_DATA } from "@/schemas/organization";
import { breadcrumbJsonLd } from "@/schemas/breadcrumbs";
import DiscoveryButton from "@/components/ui/DiscoveryButton";
import { VisualBreadcrumb } from "@/components/VisualBreadcrumb";
import { Link } from "react-router-dom";

const results = [
  "300% increase in outreach engagement, connecting with more first responders and reservists",
  "50% faster client onboarding, streamlining participant intake and support services",
  "250% growth in program enrollments, maximizing impact in the first phase of the U.S. expansion",
  "40% improvement in therapy personalization, driven by AI-powered recovery insights",
  "60% reduction in administrative workload, allowing therapists to focus on client care",
  "45% faster compliance approval, accelerating program scalability in the U.S.",
];

const solutions = [
  {
    title: "AI-Driven Outreach & Community Engagement",
    description: "Implemented AI-powered outreach tools to identify and connect with first responders, veterans, and military reservists through LinkedIn, email automation, and social media. Automated engagement workflows increased program awareness by 300% in the first 90 days."
  },
  {
    title: "Centralized Program Management & Client Tracking",
    description: "Integrated Trello, HubSpot, and G-Suite to centralize participant onboarding, program tracking, and therapist scheduling. AI-driven CRM workflows ensured 50% faster client onboarding and follow-up responses."
  },
  {
    title: "AI-Powered Data Insights & Predictive Analytics",
    description: "Deployed predictive AI modeling to analyze PTSD recovery trends, allowing Inspyrd to personalize therapy programs based on data-driven insights. Automated sentiment analysis on feedback surveys helped improve program effectiveness by 40%."
  },
  {
    title: "Digital Marketing & Automated Enrollment Optimization",
    description: "Launched AI-optimized social media campaigns targeted at high-risk populations, increasing participant sign-ups by 250%. Implemented chatbot automation to assist in real-time inquiries and pre-screening, reducing administrative workload by 60%."
  },
  {
    title: "Compliance Automation & Credentialing Support",
    description: "Developed an automated compliance and credentialing tracking system to navigate U.S. mental health regulations, ensuring faster approval for program therapists. Reduced compliance processing time by 45%, allowing for quicker program deployment."
  }
];

const Inspyrd = () => {
  return (
    <>
      <Helmet
        script={[
          helmetJsonLdProp<any>({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Inspyrd Trauma Recovery Program Case Study",
            description: "See how 10x Velocity empowered Inspyrd to launch a transformational trauma recovery program in the U.S. using AI-powered operations and workflow systems.",
            author: {
              "@type": "Organization",
              name: BUSINESS_DATA.name,
              url: BUSINESS_DATA.url,
            },
            publisher: {
              "@type": "Organization",
              name: BUSINESS_DATA.name,
              logo: {
                "@type": "ImageObject",
                url: BUSINESS_DATA.logo,
              },
            },
            image: BUSINESS_DATA.image,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://10xvelocity.ai/case-studies/inspyrd",
            },
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Case Studies", path: "/case-studies" },
            { name: "Inspyrd", path: "/case-studies/inspyrd" },
          ]),
        ]}
      >
        <title>Inspyrd Trauma Recovery Program Case Study | 10x Velocity</title>
        <meta name="description" content="See how 10x Velocity empowered Inspyrd to launch a transformational trauma recovery program in the U.S. using AI-powered operations and workflow systems." />
        <link rel="canonical" href="https://10xvelocity.ai/case-studies/inspyrd" />
        <meta property="og:title" content="Inspyrd Trauma Recovery Program Case Study | 10x Velocity" />
        <meta property="og:description" content="See how 10x Velocity empowered Inspyrd to launch a transformational trauma recovery program in the U.S. using AI-powered operations and workflow systems." />
        <meta property="og:url" content="https://10xvelocity.ai/case-studies/inspyrd" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://10xvelocity.ai/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <main className="flex-1">
        <VisualBreadcrumb items={[{ name: "Home", path: "/" }, { name: "Case Studies", path: "/case-studies" }, { name: "Inspyrd", path: "/case-studies/inspyrd" }]} />
        <article className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 heading-gradient">
              10x Velocity Empowers Inspyrd to Launch a Transformational Trauma Recovery Program in the U.S.
          </h1>
          
          {/* Client Overview */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-4">Client Overview</h2>
            <p className="text-velocity-muted">
              Inspyrd is a Canadian-based trauma recovery and mental wellness initiative designed to support individuals affected by trauma, including PTSD, first responders, and military reserve components. The organization focuses on structured therapy programs, resilience training, and mental wellness education to empower individuals on their healing journey. As Inspyrd sought to expand into the U.S. market with a pilot program, they encountered strategic and operational challenges that required advanced automation, workflow integration, and AI-driven outreach.
            </p>
          </section>

          {/* The Challenge */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
            <p className="text-velocity-muted mb-6">
              Despite a successful presence in Canada, Inspyrd faced several obstacles in establishing its U.S. pilot program:
            </p>
            <ul className="list-disc list-inside text-velocity-muted space-y-4 ml-4">
              <li>Limited U.S. Market Penetration: Inspyrd lacked a structured plan for reaching first responders and military reserve components in a competitive wellness space.</li>
              <li>Manual Outreach & Engagement: Traditional marketing and outreach efforts were labor-intensive, slowing program enrollment and limiting impact.</li>
              <li>Fragmented Operational Workflows: The organization relied on multiple tools for program management, client tracking, and community engagement, leading to inefficiencies.</li>
              <li>Lack of AI-Driven Data Insights: Inspyrd needed data-driven insights to understand PTSD-related trends and optimize program delivery.</li>
              <li>Compliance & Credentialing Challenges: Navigating U.S. mental health and wellness regulations required automation in credential tracking and compliance management.</li>
            </ul>
          </section>

          {/* The Solution */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">The 10x Velocity Solution</h2>
            <div className="grid gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="glass-card p-8">
                  <h3 className="text-xl font-semibold mb-3 text-velocity-accent">
                    {solution.title}
                  </h3>
                  <p className="text-velocity-muted">
                    {solution.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Results & Impact */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Results & Impact</h2>
            <div className="glass-card p-8">
              <p className="text-velocity-muted mb-6">
                After six months of AI-driven transformation, Inspyrd successfully launched its U.S. pilot program, achieving remarkable growth and impact:
              </p>
              <div className="grid gap-4">
                {results.map((result, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-velocity-accent shrink-0" />
                    <span className="text-velocity-muted">{result}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
            <p className="text-velocity-muted mb-6">
              By integrating 10x Velocity's AI-driven automation and strategic workflow enhancements, Inspyrd evolved into a highly efficient, data-driven trauma recovery initiative capable of scaling internationally. With automated outreach, predictive analytics, and streamlined operations, Inspyrd now delivers faster, more effective trauma recovery solutions to first responders and military personnel.
            </p>
            <p className="text-velocity-muted">
              10x Velocity's tailored AI strategies have revolutionized Inspyrd's expansion strategy, setting a new standard for trauma recovery and mental wellness innovation.
            </p>
          </section>

          {/* What's Next */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-4">What's Next?</h2>
            <p className="text-velocity-muted mb-6">
              With optimized operations, Inspyrd is now expanding into AI-driven telehealth solutions, virtual trauma coaching, and nationwide partnerships with first responder organizations, ensuring continued 10x scalability.
            </p>
            <p className="text-velocity-muted mb-6">
              Explore our <Link to="/services/ai-workshops" className="text-velocity-accent hover:underline">AI workshops</Link> and <Link to="/services" className="text-velocity-accent hover:underline">automation services</Link> to supercharge your outreach and data operations.
            </p>
            <div className="glass-card p-8 text-center">
              <p className="text-lg mb-6">
                Want to achieve 10x results in your trauma recovery initiative?
              </p>
              <DiscoveryButton text="Partner with 10x Velocity" />
            </div>
          </section>
        </div>
      </article>
    </main>
    </>
  );
};

export default Inspyrd;
