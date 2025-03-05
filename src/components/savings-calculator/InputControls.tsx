
import React from "react";
import { Slider } from "@/components/ui/slider";
import { Calculator, DollarSign, Clock, Users } from "lucide-react";
import { SavingsInputs } from "@/utils/savingsCalculator";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";

interface InputControlsProps {
  inputs: SavingsInputs;
  onInputChange: (name: keyof SavingsInputs, value: number) => void;
}

const InputControls: React.FC<InputControlsProps> = ({ inputs, onInputChange }) => {
  const { employeeCount, hoursPerWeek, automationPotential, hourlyRate } = inputs;

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold text-velocity-light mb-6 flex items-center">
        <Calculator className="mr-2 text-velocity-accent" />
        Configure Your Process
      </h2>

      {/* Employee Count Slider */}
      <div className="space-y-4">
        <div className="flex justify-between">
          <Tooltip>
            <TooltipTrigger asChild>
              <label className="text-velocity-light font-medium flex items-center cursor-help">
                <Users className="mr-2 text-velocity-accent h-5 w-5" />
                Number of Employees
              </label>
            </TooltipTrigger>
            <TooltipContent className="bg-velocity-dark border-velocity-accent text-velocity-light">
              <p>The total number of staff who perform this task regularly</p>
            </TooltipContent>
          </Tooltip>
          <span className="text-velocity-accent font-semibold">{employeeCount}</span>
        </div>
        <Slider 
          value={[employeeCount]} 
          min={1} 
          max={20} 
          step={1} 
          onValueChange={(value) => onInputChange('employeeCount', value[0])}
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
          <Tooltip>
            <TooltipTrigger asChild>
              <label className="text-velocity-light font-medium flex items-center cursor-help">
                <Clock className="mr-2 text-velocity-accent h-5 w-5" />
                Hours Per Week (per employee)
              </label>
            </TooltipTrigger>
            <TooltipContent className="bg-velocity-dark border-velocity-accent text-velocity-light">
              <p>Average time each employee spends on this task weekly</p>
            </TooltipContent>
          </Tooltip>
          <span className="text-velocity-accent font-semibold">{hoursPerWeek}</span>
        </div>
        <Slider 
          value={[hoursPerWeek]} 
          min={1} 
          max={40} 
          step={1} 
          onValueChange={(value) => onInputChange('hoursPerWeek', value[0])}
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
          <Tooltip>
            <TooltipTrigger asChild>
              <label className="text-velocity-light font-medium flex items-center cursor-help">
                Automation Potential
              </label>
            </TooltipTrigger>
            <TooltipContent className="bg-velocity-dark border-velocity-accent text-velocity-light">
              <p>Percentage of the task that can be automated with our solutions</p>
            </TooltipContent>
          </Tooltip>
          <span className="text-velocity-accent font-semibold">{automationPotential}%</span>
        </div>
        <Slider 
          value={[automationPotential]} 
          min={10} 
          max={90} 
          step={5} 
          onValueChange={(value) => onInputChange('automationPotential', value[0])}
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
          <Tooltip>
            <TooltipTrigger asChild>
              <label className="text-velocity-light font-medium flex items-center cursor-help">
                <DollarSign className="mr-2 text-velocity-accent h-5 w-5" />
                Hourly Rate
              </label>
            </TooltipTrigger>
            <TooltipContent className="bg-velocity-dark border-velocity-accent text-velocity-light">
              <p>Average hourly cost of employees performing this task</p>
            </TooltipContent>
          </Tooltip>
          <span className="text-velocity-accent font-semibold">${hourlyRate}</span>
        </div>
        <Slider 
          value={[hourlyRate]} 
          min={15} 
          max={100} 
          step={5} 
          onValueChange={(value) => onInputChange('hourlyRate', value[0])}
          className="py-4"
        />
        <div className="flex justify-between text-xs text-velocity-muted">
          <span>$15</span>
          <span>$100</span>
        </div>
      </div>
    </div>
  );
};

export default InputControls;
