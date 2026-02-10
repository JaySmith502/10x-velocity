
import { CheckCircle2 } from "lucide-react";
import { Helmet } from "react-helmet";
import DiscoveryButton from "@/components/ui/DiscoveryButton";

const results = [
  "70% reduction in email triage time",
  "50% decrease in administrative workload for executives",
  "65% increase in task completion rates",
  "40% faster lead processing",
  "40% reduction in project delays",
  "Improved workflow fluidity through seamless platform integration",
];

const solutions = [
  {
    title: "AI-Driven Workflow Automation",
    description: "Implemented Gmelius for efficient email triage, reducing manual sorting time by 70%. AI-driven task automation with n8n.io allowed smooth integration between Trello, HubSpot, and Google Suite."
  },
  {
    title: "CRM & Lead Acquisition Enhancement",
    description: "Integrating HubSpot AI automation led to 40% faster lead processing and better engagement tracking. AI-assisted client segmentation ensured targeted outreach."
  },
  {
    title: "Virtual Assistant AI Deployment",
    description: "AI-powered virtual assistants were introduced for scheduling and client inquiries, cutting executive workload by 50%."
  },
  {
    title: "Smart Project Management Integration",
    description: "With Asana's AI-powered tracking, eCatalyst saw a 65% increase in task completion rates and a 40% reduction in project delays."
  },
  {
    title: "Data-Driven Decision Support",
    description: "Custom AI dashboards provided leadership with real-time insights into operational bottlenecks and performance metrics."
  }
];

const ECatalyst = () => {
  return (
    <>
      <Helmet>
        <title>eCatalyst Operational Excellence Case Study | 10x Velocity</title>
        <meta name="description" content="Discover how 10x Velocity boosted eCatalyst operational excellence with AI-driven automation, improving efficiency and productivity across key processes." />
        <link rel="canonical" href="https://10xvelocity.ai/case-studies/ecatalyst" />
      </Helmet>
      <main className="flex-1">
        <article className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 heading-gradient">
              eCatalyst: 10x Velocity Boosts Operational Excellence
          </h1>
          
          {/* Client Overview */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-4">Client Overview</h2>
            <p className="text-velocity-muted">
              eCatalyst (eCat) is a fractional business support and operations management firm that focuses on lead acquisition, CRM management, project coordination, and executive support. While providing strategic assistance to growing businesses, it faced scalability issues due to rising demand for its services.
            </p>
          </section>

          {/* The Challenge */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
            <p className="text-velocity-muted mb-6">
              Despite its operational efficiency expertise, eCatalyst faced several obstacles to scaling its impact:
            </p>
            <ul className="list-disc list-inside text-velocity-muted space-y-4 ml-4">
              <li>Overwhelmed Administrative Workflows: Increased client volume caused workflow congestion, hindering response times and efficiency.</li>
              <li>Disjointed Communication Systems: Multiple platforms (Trello, HubSpot, Google Suite) were unsynchronized, resulting in execution bottlenecks.</li>
              <li>Limited Automation: Routine tasks like email triage, scheduling, and data entry took up valuable team time.</li>
              <li>Scalability Limitations: The firm found it difficult to expand without raising personnel costs, which lowered profit margins.</li>
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
                After six months, eCatalyst achieved a 10x improvement in operational efficiency:
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
              By leveraging 10x Velocity's AI automation and workflow strategies, eCatalyst transformed its operational structure into a high-speed model, enabling it to serve more clients and enhance profitability without increasing overhead costs.
            </p>
            <p className="text-velocity-muted">
              10x Velocity's approach has set a new standard for operational excellence in AI-driven business support services.
            </p>
          </section>

          {/* What's Next */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-4">What's Next?</h2>
            <p className="text-velocity-muted mb-6">
              With improved efficiency, eCatalyst is expanding into AI-enhanced client management and global fractional business support services, reinforcing its industry leadership.
            </p>
            <div className="glass-card p-8 text-center">
              <p className="text-lg mb-6">
                Want to achieve 10x results in your business?
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

export default ECatalyst;
