
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Helmet } from "react-helmet";
import { helmetJsonLdProp } from "react-schemaorg";
import { BUSINESS_DATA } from "@/schemas/organization";
import { breadcrumbJsonLd } from "@/schemas/breadcrumbs";
import { Link } from "react-router-dom";
import DiscoveryButton from "@/components/ui/DiscoveryButton";
import { VisualBreadcrumb } from "@/components/VisualBreadcrumb";

const TransportationDirector = () => {
  return (
    <>
      <Helmet
        script={[
          helmetJsonLdProp<any>({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Transportation Director Logistics Case Study",
            description: "How 10x Velocity revolutionized logistics management for Transportation Director with AI automation, intelligent routing, and operational optimization.",
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
              "@id": "https://10xvelocity.ai/case-studies/transportation-director",
            },
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Case Studies", path: "/case-studies" },
            { name: "Transportation Director", path: "/case-studies/transportation-director" },
          ]),
        ]}
      >
        <title>Transportation Director Logistics Case Study | 10x Velocity</title>
        <meta name="description" content="How 10x Velocity revolutionized logistics management for Transportation Director with AI automation, intelligent routing, and operational optimization." />
        <link rel="canonical" href="https://10xvelocity.ai/case-studies/transportation-director" />
        <meta property="og:title" content="Transportation Director Logistics Case Study | 10x Velocity" />
        <meta property="og:description" content="How 10x Velocity revolutionized logistics management for Transportation Director with AI automation, intelligent routing, and operational optimization." />
        <meta property="og:url" content="https://10xvelocity.ai/case-studies/transportation-director" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://10xvelocity.ai/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="min-h-screen">
      <VisualBreadcrumb items={[{ name: "Home", path: "/" }, { name: "Case Studies", path: "/case-studies" }, { name: "Transportation Director", path: "/case-studies/transportation-director" }]} />
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-velocity-accent/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10" />
        
        <Link to="/case-studies" className="inline-flex items-center text-velocity-muted hover:text-velocity-accent mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to case studies
        </Link>
        
        <div className="max-w-4xl">
          <div className="mb-8">
            <span className="inline-block bg-orange-500/20 text-orange-300 border border-orange-500/50 px-3 py-1 rounded-full text-sm font-medium">
              Manufacturing & Logistics
            </span>
            <span className="inline-block bg-blue-500/20 text-blue-300 border border-blue-500/50 px-3 py-1 rounded-full text-sm font-medium ml-2">
              Power Automate
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 heading-gradient">
            Transportation Director: Revolutionizing Logistics Management
          </h1>
          
          <p className="text-xl text-velocity-muted mb-6">
            How a leading appliance manufacturer transformed chaotic inbound logistics into a streamlined, efficient operation through Power Automate OCR solutions.
          </p>
        </div>
      </section>
      
      {/* Challenge Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 rounded-xl mb-12">
            <h2 className="text-2xl font-bold mb-6">The Challenge</h2>
            <p className="text-velocity-muted mb-4">
              As Transportation Director for a leading appliance manufacturer, managing over 400 inbound trucks daily was a relentless struggle. Drivers frequently parked trailers in incorrect or neighboring lots, leading to misplaced documents, frantic phone calls, and escalating frustration.
            </p>
            <p className="text-velocity-muted">
              Lost bills of lading triggered costly detention fees, stalled production lines, and ongoing operational blame games. The manual paper-based system was breaking down under the volume, creating ripple effects throughout the supply chain.
            </p>
          </div>
          
          <div className="glass-card p-8 rounded-xl mb-12">
            <h2 className="text-2xl font-bold mb-6">The Solution</h2>
            <p className="text-velocity-muted mb-4">
              Leveraging Microsoft Power Automate, we implemented an OCR-based automation solution at the gatehouse. Bills of lading were scanned upon arrival, instantly digitized, and automatically routed to the correct dock teams. Manual misdirection and lost paperwork became problems of the past.
            </p>
            <p className="text-velocity-muted mb-6">
              The solution utilized several key components:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-velocity-accent shrink-0 mt-0.5" />
                <span className="text-velocity-muted">AI Builder form processing to extract key information from bills of lading</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-velocity-accent shrink-0 mt-0.5" />
                <span className="text-velocity-muted">Power Automate cloud flows to route documents based on shipment details</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-velocity-accent shrink-0 mt-0.5" />
                <span className="text-velocity-muted">Real-time notifications to dock teams via Teams and mobile alerts</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-velocity-accent shrink-0 mt-0.5" />
                <span className="text-velocity-muted">Central documentation repository for audit trails and quality control</span>
              </li>
            </ul>
          </div>
          
          <div className="glass-card p-8 rounded-xl mb-12">
            <h2 className="text-2xl font-bold mb-6">The Results</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="glass-card p-6 bg-black/40 text-center">
                <h3 className="text-lg font-medium mb-2">Documentation Errors</h3>
                <p className="text-3xl font-bold text-velocity-accent mb-2">-85%</p>
                <p className="text-sm text-velocity-muted">Reduction in misplaced documentation</p>
              </div>
              <div className="glass-card p-6 bg-black/40 text-center">
                <h3 className="text-lg font-medium mb-2">Labor Hours</h3>
                <p className="text-3xl font-bold text-velocity-accent mb-2">-70%</p>
                <p className="text-sm text-velocity-muted">Decrease in wasted search time</p>
              </div>
              <div className="glass-card p-6 bg-black/40 text-center">
                <h3 className="text-lg font-medium mb-2">Productivity</h3>
                <p className="text-3xl font-bold text-velocity-accent mb-2">+60%</p>
                <p className="text-sm text-velocity-muted">Increase in dock productivity</p>
              </div>
            </div>
            <p className="text-velocity-muted">
              This automation didn't just streamline processes—it transformed daily chaos into calm efficiency. Detention fees plummeted, production lines maintained consistent flow, and interdepartmental tensions dissolved as the blame game ended. The solution paid for itself within the first month through operational savings alone.
            </p>
          </div>
          
          <div className="glass-card p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-6">Key Takeaways</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-velocity-accent shrink-0 mt-0.5" />
                <span className="text-velocity-muted">Simple OCR solutions can solve complex logistical challenges with minimal disruption</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-velocity-accent shrink-0 mt-0.5" />
                <span className="text-velocity-muted">Power Automate's AI Builder components enable quick deployment without extensive AI expertise</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-velocity-accent shrink-0 mt-0.5" />
                <span className="text-velocity-muted">Automated document routing eliminates human error in high-volume, time-sensitive operations</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-velocity-accent shrink-0 mt-0.5" />
                <span className="text-velocity-muted">ROI is immediate when automation eliminates costly operational inefficiencies</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center glass-card p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-velocity-accent/20 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6 heading-gradient">
            Ready to Transform Your Logistics Operations?
          </h2>
          <p className="text-lg text-velocity-muted mb-8">
            Discover how Power Automate solutions can eliminate bottlenecks and revolutionize your workflow efficiency.
          </p>
          <p className="text-velocity-muted mb-8">
            See how our <Link to="/services" className="text-velocity-accent hover:underline">full suite of AI services</Link> can drive similar automation wins for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <DiscoveryButton text="Book a Consultation" />
            <Link to="/power-automate" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
              Learn More About Power Automate
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default TransportationDirector;
