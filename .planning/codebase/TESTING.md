# Testing Patterns

**Analysis Date:** 2026-02-10

## Test Framework

**Runner:**
- No test framework is configured
- No test runner, no test config files (`jest.config.*`, `vitest.config.*`) exist
- No test-related dependencies in `package.json` (no jest, vitest, @testing-library, cypress, playwright)

**Assertion Library:**
- Not applicable

**Run Commands:**
```bash
# No test commands exist in package.json scripts
# The following scripts are available:
npm run dev          # Start dev server
npm run build        # Production build
npm run lint         # ESLint only
npm run preview      # Preview production build
```

## Test File Organization

**Location:**
- No test files exist in the `src/` directory
- No `__tests__/` directories
- No `*.test.*` or `*.spec.*` files in the project source

**Naming:**
- Not established

**Structure:**
- Not established

## Test Structure

**Suite Organization:**
- Not established. No tests exist in this codebase.

## Mocking

**Framework:** Not applicable

**Patterns:** Not established

## Fixtures and Factories

**Test Data:**
- Not applicable. However, static data arrays in `src/data/` (e.g., `blogPosts.ts`, `industryTools.ts`) could serve as reference for fixture patterns if tests are introduced.

**Location:**
- Not established

## Coverage

**Requirements:** None enforced. No coverage tooling configured.

## Test Types

**Unit Tests:**
- Not implemented. Candidates for unit testing:
  - `src/utils/savingsCalculator.ts` -- pure function `calculateSavings()` with clear input/output
  - `src/lib/utils.ts` -- `cn()` class merging utility
  - `src/hooks/use-toast.ts` -- `reducer` function (exported, pure)

**Integration Tests:**
- Not implemented. Candidates:
  - `src/components/savings-calculator/` -- InputControls + ResultsDisplay interaction
  - `src/components/industry-tools/` -- filtering and modal interaction

**E2E Tests:**
- Not implemented. No Cypress, Playwright, or similar framework installed.

## Recommended Setup (If Adding Tests)

Given the existing tech stack (Vite + React + TypeScript), the recommended test setup would be:

**Framework:** Vitest (native Vite integration)
**DOM Testing:** @testing-library/react + @testing-library/jest-dom
**Config file:** `vitest.config.ts` (can extend `vite.config.ts`)

**Suggested installation:**
```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom
```

**Suggested config (`vitest.config.ts`):**
```typescript
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
```

**Suggested test file location:**
- Co-locate tests next to source files: `src/utils/savingsCalculator.test.ts`
- Or dedicated test directory: `src/__tests__/`

**Suggested package.json scripts:**
```json
{
  "test": "vitest",
  "test:run": "vitest run",
  "test:coverage": "vitest run --coverage"
}
```

**Example test for existing code (`src/utils/savingsCalculator.test.ts`):**
```typescript
import { describe, it, expect } from 'vitest';
import { calculateSavings } from '@/utils/savingsCalculator';

describe('calculateSavings', () => {
  it('calculates weekly savings correctly', () => {
    const result = calculateSavings({
      employeeCount: 4,
      hoursPerWeek: 10,
      automationPotential: 50,
      hourlyRate: 35,
    });

    expect(result.weeklySavings).toBe(700);
    expect(result.annualSavings).toBe(36400);
    expect(result.timeReclaimed).toBe(20);
  });

  it('handles minimum values', () => {
    const result = calculateSavings({
      employeeCount: 1,
      hoursPerWeek: 1,
      automationPotential: 10,
      hourlyRate: 15,
    });

    expect(result.weeklySavings).toBe(1.5);
    expect(result.timeReclaimed).toBe(0.1);
  });
});
```

## Priority Areas for Testing

If tests are introduced, prioritize these areas:

1. **High priority:** `src/utils/savingsCalculator.ts` -- Pure logic, easy to test, customer-facing calculations
2. **Medium priority:** `src/hooks/useContactPopup.ts` -- Stateful hook with timer logic
3. **Medium priority:** `src/hooks/use-toast.ts` -- Reducer with exported `reducer` function
4. **Low priority:** Page components -- Mostly static markup, lower ROI for unit tests
5. **Low priority:** shadcn-ui components in `src/components/ui/` -- Do not test these; they are third-party maintained

---

*Testing analysis: 2026-02-10*
