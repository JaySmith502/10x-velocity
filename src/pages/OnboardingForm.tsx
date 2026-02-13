
import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { breadcrumbJsonLd } from "@/schemas/breadcrumbs";
import { Link } from "react-router-dom";
import { VisualBreadcrumb } from "@/components/VisualBreadcrumb";

const OnboardingForm = () => {
  return (
    <>
      <Helmet
        script={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Demo", path: "/demo" },
          ]),
        ]}
      >
        <title>Get a Demo | 10x Velocity</title>
        <meta
          name="description"
          content="Request a personalized demo of our AI and automation solutions. See firsthand how 10x Velocity can transform your business operations and cut costs fast."
        />
        <link rel="canonical" href="https://10xvelocity.ai/demo" />
        <meta property="og:title" content="Get a Demo | 10x Velocity" />
        <meta property="og:description" content="Request a personalized demo of our AI and automation solutions. See firsthand how 10x Velocity can transform your business operations and cut costs fast." />
        <meta property="og:url" content="https://10xvelocity.ai/demo" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://10xvelocity.ai/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-velocity-dark to-black py-16">
      <VisualBreadcrumb items={[{ name: "Home", path: "/" }, { name: "Demo", path: "/demo" }]} />
      <div className="container mx-auto px-4">
        <div className="glass-card p-8 md:p-12 grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Left side - Content */}
          <div className="flex flex-col justify-center space-y-6 animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-bold heading-gradient">
              Get A Demo For Your Business Now
            </h1>
            
            <p className="text-velocity-light text-lg">
              Experience our Voice Lead Capture Technology that works 24/7 for your business. Here's how it works:
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="bg-velocity-accent/20 p-1 rounded-full mr-3 mt-1">
                  <span className="flex items-center justify-center w-5 h-5 bg-velocity-accent rounded-full text-black font-bold">1</span>
                </span>
                <span className="text-velocity-light">Enter your information in the form</span>
              </li>
              <li className="flex items-start">
                <span className="bg-velocity-accent/20 p-1 rounded-full mr-3 mt-1">
                  <span className="flex items-center justify-center w-5 h-5 bg-velocity-accent rounded-full text-black font-bold">2</span>
                </span>
                <span className="text-velocity-light">Our system will collect your business information and call your phone</span>
              </li>
              <li className="flex items-start">
                <span className="bg-velocity-accent/20 p-1 rounded-full mr-3 mt-1">
                  <span className="flex items-center justify-center w-5 h-5 bg-velocity-accent rounded-full text-black font-bold">3</span>
                </span>
                <span className="text-velocity-light">Experience how customers can get custom information or leave their needs with your business 24/7</span>
              </li>
            </ul>
            
            <div className="mt-4 flex justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-4 bg-velocity-accent text-velocity-dark font-bold rounded text-xl hover:bg-velocity-accent/80 transition-colors"
              >
                Free Strategy Call
              </Link>
            </div>
          </div>
          
          {/* Right side - Form */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden h-[1000px]">
            <iframe 
              src="https://n8n.services.hiprag.com/form/b29820a7-4580-4504-82f4-18671da724e6"
              width="100%" 
              height="1000px" 
              style={{ border: "none" }}
              title="10x Velocity Demo Form"
            />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default OnboardingForm;
