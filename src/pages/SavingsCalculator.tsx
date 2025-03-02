
import React, { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { Calculator, DollarSign, Clock, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SavingsCalculator = () => {
  // Default values and state
  const [employeeCount, setEmployeeCount] = useState(4);
  const [hoursPerWeek, setHoursPerWeek] = useState(10); // per employee
  const [automationPotential, setAutomationPotential] = useState(50); // percentage
  const [hourlyRate, setHourlyRate] = useState(35); // default hourly rate in dollars

  // Calculated values
  const [weeklySavings, setWeeklySavings] = useState(0);
  const [annualSavings, setAnnualSavings] = useState(0);
  const [timeReclaimed, setTimeReclaimed] = useState(0);

  // Calculate savings whenever inputs change
  useEffect(() => {
    // Total weekly hours across all employees
    const totalWeeklyHours = employeeCount * hoursPerWeek;
    
    // Hours that can be automated
    const automatedHours = totalWeeklyHours * (automationPotential / 100);
    
    // Weekly savings in dollars
    const weeklySavingsAmount = automatedHours * hourlyRate;
    
    // Annual savings (52 weeks)
    const annualSavingsAmount = weeklySavingsAmount * 52;
    
    setWeeklySavings(weeklySavingsAmount);
    setAnnualSavings(annualSavingsAmount);
    setTimeReclaimed(automatedHours);
  }, [employeeCount, hoursPerWeek, automationPotential, hourlyRate]);

  return (
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
            <div className="space-y-8">
              <h2 className="text-2xl font-semibold text-velocity-light mb-6 flex items-center">
                <Calculator className="mr-2 text-velocity-accent" />
                Configure Your Process
              </h2>

              {/* Employee Count Slider */}
              <div className="space-y-4">
                <div className="flex justify-between">
                  <label className="text-velocity-light font-medium flex items-center">
                    <Users className="mr-2 text-velocity-accent h-5 w-5" />
                    Number of Employees
                  </label>
                  <span className="text-velocity-accent font-semibold">{employeeCount}</span>
                </div>
                <Slider 
                  value={[employeeCount]} 
                  min={1} 
                  max={20} 
                  step={1} 
                  onValueChange={(value) => setEmployeeCount(value[0])}
                  className="py-4"
                />
                <div className="flex justify-between text-xs text-velocity-muted">
                  <span>1</span>
                  <span>20</span>
                </div>
              </div>

              {/* Hours Per Week Slider */}
              <div className="space-y-4">
                <div className="flex justify-between">
                  <label className="text-velocity-light font-medium flex items-center">
                    <Clock className="mr-2 text-velocity-accent h-5 w-5" />
                    Hours Per Week (per employee)
                  </label>
                  <span className="text-velocity-accent font-semibold">{hoursPerWeek}</span>
                </div>
                <Slider 
                  value={[hoursPerWeek]} 
                  min={1} 
                  max={40} 
                  step={1} 
                  onValueChange={(value) => setHoursPerWeek(value[0])}
                  className="py-4"
                />
                <div className="flex justify-between text-xs text-velocity-muted">
                  <span>1</span>
                  <span>40</span>
                </div>
              </div>

              {/* Automation Potential Slider */}
              <div className="space-y-4">
                <div className="flex justify-between">
                  <label className="text-velocity-light font-medium flex items-center">
                    Automation Potential
                  </label>
                  <span className="text-velocity-accent font-semibold">{automationPotential}%</span>
                </div>
                <Slider 
                  value={[automationPotential]} 
                  min={10} 
                  max={90} 
                  step={5} 
                  onValueChange={(value) => setAutomationPotential(value[0])}
                  className="py-4"
                />
                <div className="flex justify-between text-xs text-velocity-muted">
                  <span>10%</span>
                  <span>90%</span>
                </div>
              </div>

              {/* Hourly Rate Slider */}
              <div className="space-y-4">
                <div className="flex justify-between">
                  <label className="text-velocity-light font-medium flex items-center">
                    <DollarSign className="mr-2 text-velocity-accent h-5 w-5" />
                    Hourly Rate
                  </label>
                  <span className="text-velocity-accent font-semibold">${hourlyRate}</span>
                </div>
                <Slider 
                  value={[hourlyRate]} 
                  min={15} 
                  max={100} 
                  step={5} 
                  onValueChange={(value) => setHourlyRate(value[0])}
                  className="py-4"
                />
                <div className="flex justify-between text-xs text-velocity-muted">
                  <span>$15</span>
                  <span>$100</span>
                </div>
              </div>
            </div>

            {/* Results */}
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
  );
};

export default SavingsCalculator;
