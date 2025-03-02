
import React from "react";
import { DollarSign, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SavingsResults } from "@/utils/savingsCalculator";

interface ResultsDisplayProps {
  results: SavingsResults;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ results }) => {
  const { weeklySavings, annualSavings, timeReclaimed } = results;

  return (
    <div className="flex flex-col justify-center space-y-8">
      <h2 className="text-2xl font-semibold text-velocity-light mb-2 flex items-center">
        <DollarSign className="mr-2 text-velocity-accent" />
        Your Automation Savings
      </h2>

      {/* Results Cards */}
      <div className="space-y-6">
        <div className="bg-black/30 border border-white/10 rounded-lg p-6">
          <p className="text-velocity-muted">Estimated Weekly Savings</p>
          <p className="text-3xl font-bold text-velocity-accent">${weeklySavings.toFixed(2)}</p>
        </div>
        
        <div className="bg-black/30 border border-white/10 rounded-lg p-6">
          <p className="text-velocity-muted">Estimated Annual Savings</p>
          <p className="text-3xl font-bold text-velocity-accent">${annualSavings.toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          })}</p>
        </div>
        
        <div className="bg-black/30 border border-white/10 rounded-lg p-6">
          <p className="text-velocity-muted">Hours Reclaimed Weekly</p>
          <p className="text-3xl font-bold text-velocity-accent">{timeReclaimed.toFixed(1)} hours</p>
        </div>
      </div>

      <div className="pt-6">
        <Button className="w-full btn-primary">
          <Link to="/contact" className="flex items-center justify-center w-full">
            Get a Custom Analysis
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ResultsDisplay;
