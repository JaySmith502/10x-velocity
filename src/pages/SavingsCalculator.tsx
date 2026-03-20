
import React, { useState, useMemo } from "react";
import { Helmet } from "react-helmet";
import { breadcrumbJsonLd } from "@/schemas/breadcrumbs";
import InputControls from "@/components/savings-calculator/InputControls";
import ResultsDisplay from "@/components/savings-calculator/ResultsDisplay";
import { calculateSavings, SavingsInputs } from "@/utils/savingsCalculator";
import { TooltipProvider } from "@/components/ui/tooltip";
import DiscoveryButton from "@/components/ui/DiscoveryButton";
import { VisualBreadcrumb } from "@/components/VisualBreadcrumb";

const SavingsCalculator = () => {
  // Input state
  const [inputs, setInputs] = useState<SavingsInputs>({
    employeeCount: 4,
    hoursPerWeek: 10,
    automationPotential: 50,
    hourlyRate: 35
  });

  // Derive results directly from inputs — no extra state or effect needed
  const results = useMemo(() => calculateSavings(inputs), [inputs]);

  // Handle input changes
  const handleInputChange = (name: keyof SavingsInputs, value: number) => {
    setInputs(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <TooltipProvider>
      <Helmet
        script={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Savings Calculator", path: "/savings-calculator" },
          ]),
        ]}
      >
        <title>Automation Savings Calculator | 10x Velocity</title>
        <meta
          name="description"
          content="Calculate how much time and money your business could save with AI and automation. Use our free interactive savings calculator to estimate your ROI today."
        />
        <link rel="canonical" href="https://10xvelocity.ai/savings-calculator" />
        <meta property="og:title" content="Automation Savings Calculator | 10x Velocity" />
        <meta property="og:description" content="Calculate how much time and money your business could save with AI and automation. Use our free interactive savings calculator to estimate your ROI today." />
        <meta property="og:url" content="https://10xvelocity.ai/savings-calculator" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://10xvelocity.ai/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="min-h-screen py-12 bg-background">
        <div className="container mx-auto px-4">
          <VisualBreadcrumb items={[{ name: "Home", path: "/" }, { name: "Savings Calculator", path: "/savings-calculator" }]} />
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">
              Automation Savings Calculator
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              See how much time and money your business could save by automating repetitive processes
            </p>
          </div>

          {/* Explanatory text - moved from bottom to here */}
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h3 className="text-xl font-semibold text-foreground mb-4">How We Calculate Your Savings</h3>
            <p className="text-muted-foreground">
              Our calculator estimates potential savings based on industry averages and client outcomes. 
              The actual savings may vary depending on your specific processes and implementation details. 
              Contact us for a detailed analysis tailored to your business needs.
            </p>
          </div>

          {/* Calculator Card */}
          <div className="bg-surface border border-border rounded-lg p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Input Controls */}
              <InputControls 
                inputs={inputs} 
                onInputChange={handleInputChange} 
              />

              {/* Results */}
              <ResultsDisplay results={results} />
            </div>
          </div>

          {/* CTA Section - replaced explanatory text with this */}
          <div className="max-w-4xl mx-auto mt-20 text-center bg-surface border border-border rounded-lg p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Increase Your Velocity?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Book a free consultation and discover how we can help you achieve 10x growth.
            </p>
            <DiscoveryButton />
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default SavingsCalculator;
