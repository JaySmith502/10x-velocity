
import { CheckCircle2 } from "lucide-react";
import DiscoveryButton from "@/components/ui/DiscoveryButton";

const results = [
  "50% reduction in proposal processing time, improving contract submission efficiency",
  "35% increase in contract win rates, thanks to AI-powered bid intelligence",
  "60% reduction in missed deadlines, ensuring better compliance and client satisfaction",
  "250% increase in inbound leads, driving higher business acquisition rates",
  "40% faster client follow-ups, accelerating deal closures",
  "30% reduction in administrative workload, freeing up time for high-value activities",
];

const solutions = [
  {
    title: "AI-Enhanced Contract Identification & Lead Management",
    description: "Integrated AI-driven bid intelligence tools with MyGovWatch and Sam.Gov to automatically identify high-probability contract opportunities. Implemented automated lead tracking in HubSpot, ensuring that no potential contract opportunity was overlooked."
  },
  {
    title: "Automated Proposal & Compliance Workflow Optimization",
    description: "AI-assisted proposal generation and compliance checklists reduced submission errors and improved response time by 50%. Automated document processing in G-Suite tools, cutting down on manual input and reducing administrative workload."
  },
  {
    title: "AI-Powered Competitive & Market Intelligence",
    description: "AI-driven analytics provided real-time insights on competitor bidding strategies, increasing win rates by 35%. Predictive modeling in Trello flagged high-value, underbid contracts, allowing GovBrokers to strategically focus on winnable opportunities."
  },
  {
    title: "Workflow & Task Automation for Deal Acceleration",
    description: "Automated task tracking in Trello streamlined deal pipeline management, reducing missed deadlines by 60%. AI-powered reminders and follow-ups in HubSpot ensured faster client response times, accelerating contract closures."
  },
  {
    title: "Digital Outreach & Marketing Automation",
    description: "AI-enhanced LinkedIn and email marketing automation increased inbound leads by 250%. Automated content scheduling across social media and industry forums, positioning GovBrokers as a leader in government contract brokerage."
  }
];

const GovBrokers = () => {
  return (
    <main className="flex-1">
      <article className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 heading-gradient">
            10x Velocity Transforms GovBrokers into a High-Performance Government Contracting Powerhouse
          </h1>
          
          {/* Client Overview */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-4">Client Overview</h2>
            <p className="text-velocity-muted">
              GovBrokers is a specialized firm focusing on government contracts, contract brokerage, and contract acquisition. By leveraging HubSpot, Trello, MyGovWatch, Sam.Gov, and G-Suite tools, GovBrokers connects businesses with lucrative government opportunities while streamlining the contract acquisition process. However, as demand for their services grew, inefficiencies in lead tracking, workflow automation, and market intelligence slowed down operations.
            </p>
          </section>

          {/* The Challenge */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
            <p className="text-velocity-muted mb-6">
              Despite a strong pipeline of government contracting opportunities, GovBrokers faced multiple bottlenecks limiting their ability to scale:
            </p>
            <ul className="list-disc list-inside text-velocity-muted space-y-4 ml-4">
              <li>Fragmented Lead & Deal Tracking: Contract opportunities were scattered across Sam.Gov, MyGovWatch, and HubSpot, creating inefficiencies in bid management.</li>
              <li>Manual Proposal & Compliance Workflows: Contract submissions and regulatory compliance checks were time-consuming and prone to delays.</li>
              <li>Lack of AI-Powered Bid Intelligence: Limited AI-driven insights restricted the ability to predict contract award likelihood and optimize bid strategies.</li>
              <li>Inefficient Communication & Task Management: Disjointed workflows between HubSpot, Trello, and G-Suite tools led to missed follow-ups and slowed deal closure rates.</li>
              <li>Underutilized Digital Outreach for Client Acquisition: GovBrokers needed a more structured, automated marketing approach to attract businesses seeking government contracts.</li>
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
                After six months of AI-driven transformation, GovBrokers achieved unprecedented operational efficiency and growth:
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
              By integrating 10x Velocity's AI automation and strategic workflow enhancements, GovBrokers evolved into a highly efficient, data-driven government contract acquisition powerhouse. With predictive bid analytics, automated compliance tracking, and AI-driven outreach, GovBrokers now wins more contracts, operates more efficiently, and scales at an unprecedented rate.
            </p>
            <p className="text-velocity-muted">
              10x Velocity's tailored AI strategies have revolutionized the government contracting space, positioning GovBrokers as a leader in contract brokerage and acquisition.
            </p>
          </section>

          {/* What's Next */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-4">What's Next?</h2>
            <p className="text-velocity-muted mb-6">
              With optimized operations, GovBrokers is now expanding into AI-driven subcontracting matchmaking, automated compliance monitoring, and predictive contract award modeling, ensuring continued 10x scalability.
            </p>
            <div className="glass-card p-8 text-center">
              <p className="text-lg mb-6">
                Want to achieve 10x results in your government contracting business?
              </p>
              <DiscoveryButton text="Partner with 10x Velocity" />
            </div>
          </section>
        </div>
      </article>
    </main>
  );
};

export default GovBrokers;
