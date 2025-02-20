
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

const results = [
  "5x increase in media placements due to AI targeting",
  "4x faster crisis response through proactive intervention",
  "60% efficiency gain in campaign execution",
  "400% growth in inbound leads through AI-driven outreach",
  "75% reduction in reporting time",
  "Scalability unlocked—expanded client capacity without increasing costs",
];

const solutions = [
  {
    title: "AI-Powered CRM & Automation",
    description: "Integrated HubSpot AI and custom automation workflows to streamline client interactions and PR outreach, cutting manual follow-up efforts by 50%."
  },
  {
    title: "AI-Driven Media Intelligence",
    description: "AI sentiment analysis allowed Innes & Young to foresee crises before they escalated and automated media monitoring identified key PR opportunities three times faster than traditional methods."
  },
  {
    title: "Workflow Optimization & Task Automation",
    description: "Used Trello AI task automation and Asana integration to create automated content calendars and improve team productivity by 60%."
  },
  {
    title: "Lead Generation Acceleration",
    description: "By implementing CoPilot AI for LinkedIn outreach, Innes & Young saw a 400% increase in qualified inbound leads."
  },
  {
    title: "AI-Enhanced Reporting & Analytics",
    description: "Custom AI dashboards provided real-time insights, reducing reporting time by 75% and enabling strategic pivots."
  }
];

const InnesYoung = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <article className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 heading-gradient">
              Innes & Young: AI-Powered PR Evolution
            </h1>
            
            {/* Client Overview */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-4">Client Overview</h2>
              <p className="text-velocity-muted">
                Innes & Young (IY) is a leading public relations and reputation management firm that focuses on crisis communication, brand positioning, and strategic media outreach. Renowned for its personalised approach and extensive industry knowledge, IY sought to enhance operations, boost efficiency, and improve digital outreach while maintaining the quality of service that established its reputation.
              </p>
            </section>

            {/* The Challenge */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
              <p className="text-velocity-muted mb-6">
                Despite its achievements, Innes & Young encountered several operational challenges:
              </p>
              <ul className="list-disc list-inside text-velocity-muted space-y-4 ml-4">
                <li>Limited Scalability: A heavy dependence on manual processes hindered the firm's ability to onboard new clients efficiently.</li>
                <li>Inefficient Workflows: Managing PR campaigns across various platforms involved considerable administrative effort.</li>
                <li>Data Fragmentation: Client interactions, media contacts, and campaign performance data were scattered across different systems, leading to reduced operational visibility.</li>
                <li>Underutilized AI & Automation: The firm did not have the necessary tools to harness AI insights for crisis prediction, media targeting, and automated reporting.</li>
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
                  After six months, Innes & Young experienced a tenfold transformation in operations:
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
                By utilising 10x Velocity's AI-driven automation, Innes & Young evolved from a manual PR firm into a high-efficiency, data-driven entity. With improved scalability and predictive insights, Innes & Young is now positioned for sustained growth while maintaining premium client service.
              </p>
              <p className="text-velocity-muted">
                10x Velocity's intervention has set a new standard in PR operations, redefining AI-powered reputation management.
              </p>
            </section>

            {/* What's Next */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-4">What's Next?</h2>
              <p className="text-velocity-muted mb-6">
                With enhanced efficiency, Innes & Young is considering global expansion and AI-powered content generation, further solidifying its industry leadership.
              </p>
              <div className="glass-card p-8 text-center">
                <p className="text-lg mb-6">
                  Want to achieve significant results in your business?
                </p>
                <Button className="btn-primary">
                  Partner with 10x Velocity <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default InnesYoung;
