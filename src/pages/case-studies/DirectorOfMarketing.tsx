
import { CheckCircle2 } from "lucide-react";
import { Helmet } from "react-helmet";
import DiscoveryButton from "@/components/ui/DiscoveryButton";

const results = [
  "40% reduction in PPC costs, maximizing client ROI",
  "300% increase in social media engagement, improving brand awareness and lead generation",
  "70% automation of content scheduling, freeing up creative resources",
  "250% increase in Google My Business traffic, driving more local conversions",
  "60% reduction in project bottlenecks, leading to faster campaign execution",
  "80% reduction in manual reporting time, allowing for data-driven decision-making",
  "45% increase in client retention, thanks to AI-enhanced performance tracking",
];

const solutions = [
  {
    title: "AI-Enhanced PPC & Google AdWords Automation",
    description: "Implemented AI-driven bid optimization algorithms, reducing cost-per-click (CPC) by 40% while increasing ad conversion rates. Automated real-time performance tracking, cutting manual campaign adjustments by 50%."
  },
  {
    title: "Centralized Workflow & Task Automation",
    description: "Integrated Trello, Vendasta, and Google Ads into an AI-powered task management system, reducing project bottlenecks by 60%. AI-powered content scheduling and performance tracking, reducing social media post management time by 70%."
  },
  {
    title: "AI-Driven Social Media Marketing & Ad Targeting",
    description: "Deployed AI-powered audience segmentation, increasing engagement rates by 300%. Automated social media ad performance analysis, reducing manual reporting time by 75%. AI-enhanced content creation using Canva optimized visuals based on engagement data."
  },
  {
    title: "Google My Business Optimization & Local SEO Boost",
    description: "AI-driven review management and keyword optimization, leading to a 250% increase in GMB visibility. Automated review response system, improving customer engagement rates by 45%."
  },
  {
    title: "Real-Time Reporting & Data Intelligence Dashboards",
    description: "Implemented AI-powered Vendasta analytics dashboards, providing real-time performance insights on PPC, social media, and Google Ads. Reduced manual report creation time by 80%, improving client satisfaction and retention."
  }
];

const DirectorOfMarketing = () => {
  return (
    <>
      <Helmet>
        <title>Director of Marketing AI Case Study | 10x Velocity</title>
        <meta name="description" content="How 10x Velocity transformed Director of Marketing Inc into a high-performance social media marketing agency using AI-powered workflows and smart tools." />
        <link rel="canonical" href="https://10xvelocity.ai/case-studies/director-of-marketing" />
        <meta property="og:title" content="Director of Marketing AI Case Study | 10x Velocity" />
        <meta property="og:description" content="How 10x Velocity transformed Director of Marketing Inc into a high-performance social media marketing agency using AI-powered workflows and smart tools." />
        <meta property="og:url" content="https://10xvelocity.ai/case-studies/director-of-marketing" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://10xvelocity.ai/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <main className="flex-1">
        <article className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 heading-gradient">
              10x Velocity Transforms Director of Marketing Inc (DMI) into a High-Performance Social Media Marketing Agency
          </h1>
          
          {/* Client Overview */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-4">Client Overview</h2>
            <p className="text-velocity-muted">
              Director of Marketing Inc (DMI) is a premier social media marketing and digital advertising agency specializing in PPC campaigns, Google AdWords, Google My Business (GMB) optimization, and full-scale brand management. Leveraging platforms like Trello, Vendasta, and Canva, DMI crafts data-driven marketing strategies for businesses seeking to maximize their digital presence. However, as demand surged, inefficiencies in workflow management, campaign tracking, and automation became roadblocks to scalability.
            </p>
          </section>

          {/* The Challenge */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
            <p className="text-velocity-muted mb-6">
              Despite its expertise in digital marketing, DMI encountered several pain points preventing 10x growth:
            </p>
            <ul className="list-disc list-inside text-velocity-muted space-y-4 ml-4">
              <li>Time-Intensive Campaign Management: Manual PPC and Google AdWords optimization processes slowed down scalability.</li>
              <li>Fragmented Workflow Across Tools: Trello, Vendasta, and Canva operated in silos, creating workflow inefficiencies.</li>
              <li>Limited AI Automation in Social Media & Ad Targeting: Manual ad performance analysis and audience targeting reduced efficiency and accuracy.</li>
              <li>Underutilized Google My Business Optimization: Potential leads from local search traffic were being underleveraged.</li>
              <li>Scattered Reporting & Analytics: Lack of real-time campaign performance insights delayed decision-making and increased client churn.</li>
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
                After six months of AI-powered transformation, DMI achieved game-changing results:
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
              By integrating 10x Velocity's AI-driven automation and workflow optimization, DMI transformed from a high-effort, manually intensive agency into a scalable, data-driven digital marketing powerhouse. With predictive analytics, automated workflows, and AI-powered marketing, DMI now leads the industry in hyper-efficient campaign execution and measurable results.
            </p>
            <p className="text-velocity-muted">
              10x Velocity's strategic interventions have redefined digital marketing efficiency, positioning DMI as a leader in high-impact, AI-enhanced social media marketing and PPC advertising.
            </p>
          </section>

          {/* What's Next */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-4">What's Next?</h2>
            <p className="text-velocity-muted mb-6">
              With optimized operations, DMI is expanding into AI-powered video marketing, predictive customer analytics, and omnichannel automation, ensuring continued 10x scalability.
            </p>
            <div className="glass-card p-8 text-center">
              <p className="text-lg mb-6">
                Want to achieve 10x results in your organization?
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

export default DirectorOfMarketing;
