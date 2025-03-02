
/**
 * Utility functions for savings calculator
 */

export interface SavingsInputs {
  employeeCount: number;
  hoursPerWeek: number;
  automationPotential: number;
  hourlyRate: number;
}

export interface SavingsResults {
  weeklySavings: number;
  annualSavings: number;
  timeReclaimed: number;
}

/**
 * Calculate savings based on input parameters
 */
export const calculateSavings = (inputs: SavingsInputs): SavingsResults => {
  const { employeeCount, hoursPerWeek, automationPotential, hourlyRate } = inputs;
  
  // Total weekly hours across all employees
  const totalWeeklyHours = employeeCount * hoursPerWeek;
  
  // Hours that can be automated
  const automatedHours = totalWeeklyHours * (automationPotential / 100);
  
  // Weekly savings in dollars
  const weeklySavingsAmount = automatedHours * hourlyRate;
  
  // Annual savings (52 weeks)
  const annualSavingsAmount = weeklySavingsAmount * 52;
  
  return {
    weeklySavings: weeklySavingsAmount,
    annualSavings: annualSavingsAmount,
    timeReclaimed: automatedHours
  };
};
