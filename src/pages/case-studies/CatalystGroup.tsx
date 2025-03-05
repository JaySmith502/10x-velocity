
import { CheckCircle2 } from "lucide-react";
import DiscoveryButton from "@/components/ui/DiscoveryButton";

const results = [
  "50% faster deal evaluation, allowing for rapid investment decisions",
  "300% increase in high-value LinkedIn conversations, driving new acquisition opportunities",
  "45% higher investor response rates, leading to stronger capital partnerships",
  "70% reduction in email triage time, improving executive productivity",
  "500% growth in social media engagement, strengthening brand credibility",
  "4x faster identification of undervalued business opportunities, maximizing ROI",
  "200% increase in inbound investor leads, accelerating business expansion",
];

const solutions = [
  {
    title: "AI-Powered Deal Flow & Pipeline Automation",
    description: "Integrated Trello, HubSpot, and CoPilot AI, creating an automated deal pipeline that tracks, scores, and prioritizes investment opportunities in real time. AI-assisted due diligence workflows reduced deal evaluation time by 50%, allowing faster acquisitions."
  },
  {
    title: "Lead Generation & Investor Engagement Optimization",
    description: "CoPilot AI for LinkedIn outreach automated personalized engagement with potential investors and acquisition targets, leading to a 300% increase in deal conversations. AI-driven email follow-up sequences in Gmelius & HubSpot improved investor response rates by 45%."
  },
  {
    title: "Market Intelligence & Competitive Analysis",
    description: "AI-enhanced trend tracking and financial modeling enabled TCG to identify undervalued businesses 4x faster. Automated web scraping and sentiment analysis provided real-time competitor insights, allowing proactive acquisition positioning."
  },
  {
    title: "Automated Communication & Workflow Efficiency",
    description: "Gmelius AI-powered email triage cut manual sorting time by 70%, ensuring faster investor and partner responses. AI-assisted meeting scheduling and follow-up automation freed up 40% of executive bandwidth, allowing more focus on high-value deals."
  },
  {
    title: "AI-Driven Social Media & Brand Authority",
    description: "AI-generated content and automated posting on LinkedIn led to a 500% increase in engagement, establishing TCG as a thought leader in business acquisitions. AI-optimized ad targeting on LinkedIn and social media boosted inbound investor leads by 200%."
  }
];

const CatalystGroup = () => {
  return (
    <main className="flex-1">
      <article className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 heading-gradient">
            10x Velocity Propels The Catalyst Group to Unprecedented Growth in Business Investment & Acquisitions
          </h1>
          
          {/* Client Overview */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-4">Client Overview</h2>
            <p className="text-velocity-muted">
              The Catalyst Group (TCG) is a business portfolio and investment firm specializing in acquisitions, scaling companies from 2x to 10x growth, and unlocking untapped market opportunities. TCG applies a structured approach to identifying high-potential businesses, streamlining operations, and maximizing value creation. However, as deal flow increased, inefficiencies in workflow management, lead tracking, and digital marketing threatened scalability.
            </p>
          </section>

          {/* The Challenge */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
            <p className="text-velocity-muted mb-6">
              Despite a strong acquisition pipeline, TCG faced several operational challenges that hindered rapid expansion and portfolio optimization:
            </p>
            <ul className="list-disc list-inside text-velocity-muted space-y-4 ml-4">
              <li>Fragmented Deal Flow Management: Investment opportunities were scattered across multiple platforms, slowing evaluation and decision-making.</li>
              <li>Inefficient Lead Nurturing & CRM Utilization: The lack of structured automation in HubSpot and LinkedIn outreach (CoPilot AI) resulted in missed investor and acquisition leads.</li>
              <li>Under-Leveraged AI for Market Intelligence: TCG needed deeper AI-driven insights for due diligence, market analysis, and competitor tracking.</li>
              <li>Manual Communication Processes: Excessive reliance on human intervention in email triage and follow-ups via Gmelius led to productivity losses.</li>
              <li>Limited Social Media Presence: Despite LinkedIn being a critical platform for acquisitions and investor relations, engagement was low due to inconsistent content strategy.</li>
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
                After six months of AI-powered transformation, The Catalyst Group achieved 10x operational efficiency and deal flow acceleration:
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
              By integrating 10x Velocity's AI-driven automation and business intelligence, TCG transformed into a high-performance, data-driven investment powerhouse. AI-powered deal sourcing, automated lead nurturing, and predictive market insights have enabled TCG to scale acquisitions efficiently, strengthen investor relations, and maximize portfolio growth.
            </p>
            <p className="text-velocity-muted">
              10x Velocity's strategic interventions have revolutionized TCG's investment model, setting a new benchmark for AI-enhanced business scaling and acquisitions.
            </p>
          </section>

          {/* What's Next */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-4">What's Next?</h2>
            <p className="text-velocity-muted mb-6">
              With optimized deal flow management and investor engagement, TCG is expanding into AI-driven risk assessment, automated due diligence modeling, and global investment outreach, ensuring continued 10x scalability.
            </p>
            <div className="glass-card p-8 text-center">
              <p className="text-lg mb-6">
                Want to achieve 10x results in your investment firm?
              </p>
              <DiscoveryButton text="Partner with 10x Velocity" />
            </div>
          </section>
        </div>
      </article>
    </main>
  );
};

export default CatalystGroup;
