
import React, { useState, useEffect } from "react";
import InputControls from "@/components/savings-calculator/InputControls";
import ResultsDisplay from "@/components/savings-calculator/ResultsDisplay";
import { calculateSavings, SavingsInputs, SavingsResults } from "@/utils/savingsCalculator";
import { TooltipProvider } from "@/components/ui/tooltip";

const SavingsCalculator = () => {
  // Input state
  const [inputs, setInputs] = useState<SavingsInputs>({
    employeeCount: 4,
    hoursPerWeek: 10,
    automationPotential: 50,
    hourlyRate: 35
  });

  // Results state
  const [results, setResults] = useState<SavingsResults>({
    weeklySavings: 0,
    annualSavings: 0,
    timeReclaimed: 0
  });

  // Handle input changes
  const handleInputChange = (name: keyof SavingsInputs, value: number) => {
    setInputs(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Calculate savings whenever inputs change
  useEffect(() => {
    const calculatedResults = calculateSavings(inputs);
    setResults(calculatedResults);
  }, [inputs]);

  return (
    <TooltipProvider>
      <div className="min-h-screen py-12 bg-velocity-dark">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold heading-gradient mb-4">
              Automation Savings Calculator
            </h1>
            <p className="text-velocity-muted text-lg max-w-2xl mx-auto">
              See how much time and money your business could save by automating repetitive processes
            </p>
          </div>

          {/* Calculator Card */}
          <div className="glass-card p-8 max-w-4xl mx-auto">
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

          {/* Additional Info */}
          <div className="max-w-4xl mx-auto mt-12 text-center">
            <h3 className="text-xl font-semibold text-velocity-light mb-4">How We Calculate Your Savings</h3>
            <p className="text-velocity-muted">
              Our calculator estimates potential savings based on industry averages and client outcomes. 
              The actual savings may vary depending on your specific processes and implementation details. 
              Contact us for a detailed analysis tailored to your business needs.
            </p>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default SavingsCalculator;
