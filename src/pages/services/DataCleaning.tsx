
import React from "react";
import { Helmet } from "react-helmet";
import { helmetJsonLdProp } from "react-schemaorg";
import { breadcrumbJsonLd } from "@/schemas/breadcrumbs";
import { Link } from "react-router-dom";
import { Database, FileText, Check, ArrowRight } from "lucide-react";
import DiscoveryButton from "@/components/ui/DiscoveryButton";
import { VisualBreadcrumb } from "@/components/VisualBreadcrumb";

const DataCleaning = () => {
  return (
    <>
      <Helmet
        script={[
          helmetJsonLdProp<any>({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Data Cleaning Services",
            description: "Professional data cleaning and preparation services that ensure your AI and automation initiatives launch with accurate, reliable, and quality data foundations.",
            provider: { "@type": "Organization", "@id": "https://10xvelocity.ai/#organization" },
            areaServed: { "@type": "Country", name: "US" },
            serviceType: "Data Cleaning",
          }),
          breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name: "Data Cleaning", path: "/services/data-cleaning" }]),
        ]}
      >
        <title>Data Cleaning Services | 10x Velocity</title>
        <meta
          name="description"
          content="Professional data cleaning and preparation services that ensure your AI and automation initiatives launch with accurate, reliable, and quality data foundations."
        />
        <link rel="canonical" href="https://10xvelocity.ai/services/data-cleaning" />
        <meta property="og:title" content="Data Cleaning Services | 10x Velocity" />
        <meta property="og:description" content="Professional data cleaning and preparation services that ensure your AI and automation initiatives launch with accurate, reliable, and quality data foundations." />
        <meta property="og:url" content="https://10xvelocity.ai/services/data-cleaning" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://10xvelocity.ai/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="min-h-screen flex flex-col">
      <VisualBreadcrumb items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name: "Data Cleaning", path: "/services/data-cleaning" }]} />
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-velocity-accent/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10" />
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 heading-gradient">
            Data Cleaning Services
          </h1>
          <p className="text-lg md:text-xl text-velocity-muted mb-8">
            Clean data is the foundation of successful analytics, automation, and digital transformation. 
            We specialize in transforming messy data into valuable assets for your business.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 mb-12 animate-fade-up">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Data Cleaning Matters</h2>
            <p className="text-velocity-muted mb-6">
              Every successful AI initiative, process automation, or business intelligence project 
              begins with clean, accurate data. Poor data quality leads to poor results—it's that simple. 
              Our data cleaning services ensure that your data is ready for action.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-velocity-accent/20 flex items-center justify-center shrink-0">
                  <Check className="w-5 h-5 text-velocity-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">More Accurate Results</h3>
                  <p className="text-velocity-muted text-sm">Clean data ensures your analytics and AI models produce reliable insights.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-velocity-accent/20 flex items-center justify-center shrink-0">
                  <Check className="w-5 h-5 text-velocity-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Reduced Processing Time</h3>
                  <p className="text-velocity-muted text-sm">Clean data requires less pre-processing, speeding up your analytics pipeline.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-velocity-accent/20 flex items-center justify-center shrink-0">
                  <Check className="w-5 h-5 text-velocity-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Cost Efficiency</h3>
                  <p className="text-velocity-muted text-sm">Avoid the expenses associated with decisions based on flawed data.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-velocity-accent/20 flex items-center justify-center shrink-0">
                  <Check className="w-5 h-5 text-velocity-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Better Decision Making</h3>
                  <p className="text-velocity-muted text-sm">Clean data leads to more informed, confident business decisions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Types Section */}
      <section className="container mx-auto px-4 py-12 bg-gradient-to-b from-transparent to-black/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center heading-gradient">Data Types We Work With</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dataTypes.map((type, index) => (
              <div 
                key={type.name}
                className="glass-card p-6 flex flex-col animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-full bg-velocity-accent/20 flex items-center justify-center mb-4">
                    <type.icon className="w-6 h-6 text-velocity-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{type.name}</h3>
                </div>
                <p className="text-velocity-muted text-sm mb-4">{type.description}</p>
                <ul className="space-y-2 mt-auto">
                  {type.formats.map((format, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <ArrowRight className="w-4 h-4 text-velocity-accent shrink-0" />
                      <span className="text-velocity-muted">{format}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center heading-gradient">Our Data Cleaning Process</h2>
          <div className="space-y-6">
            {process.map((step, index) => (
              <div key={step.title} className="glass-card p-6 animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-velocity-accent flex items-center justify-center text-black font-bold text-sm shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-velocity-muted">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center glass-card p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-velocity-accent/20 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6 heading-gradient">
            Ready to Transform Your Data?
          </h2>
          <p className="text-lg text-velocity-muted mb-8">
            Book a free 15-minute discovery call to discuss how our data cleaning services can help your organization.
          </p>
          <DiscoveryButton />
          <p className="mt-6 text-velocity-muted">
            Or learn more about our <Link to="/services" className="text-velocity-accent hover:underline">other services</Link>.
          </p>
        </div>
      </section>
    </div>
    </>
  );
};

// Data types we work with
const dataTypes = [
  {
    name: "Structured Data",
    icon: Database,
    description: "Data organized in a predefined format, typically found in databases and spreadsheets.",
    formats: ["SQL Databases", "Excel Spreadsheets", "CSV Files", "Tabular Data"]
  },
  {
    name: "Semi-Structured Data",
    icon: FileText,
    description: "Data that doesn't conform to a rigid structure but has some organizational properties.",
    formats: ["JSON", "XML", "YAML", "NoSQL Databases", "Log Files"]
  },
  {
    name: "Unstructured Data",
    icon: FileText,
    description: "Data without a predefined format or organization, requiring specialized processing.",
    formats: ["Text Documents", "Emails", "Social Media Content", "Images", "Audio Files"]
  }
];

// Our process steps
const process = [
  {
    title: "Initial Assessment",
    description: "We analyze your data sources, identify issues, and develop a cleaning strategy tailored to your specific needs."
  },
  {
    title: "Data Profiling",
    description: "We examine your data to understand its structure, relationships, and quality issues that need addressing."
  },
  {
    title: "Cleaning & Transformation",
    description: "We apply advanced techniques to fix inconsistencies, remove duplicates, standardize formats, and handle missing values."
  },
  {
    title: "Validation & Quality Assurance",
    description: "We verify the cleaned data against quality criteria and business rules to ensure accuracy and reliability."
  },
  {
    title: "Documentation & Knowledge Transfer",
    description: "We provide comprehensive documentation of the cleaning process and train your team on maintaining data quality."
  }
];

export default DataCleaning;
