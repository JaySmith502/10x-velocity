# Coding Conventions

**Analysis Date:** 2026-02-10

## Naming Patterns

**Files:**
- Page components: PascalCase matching the route concept (e.g., `SavingsCalculator.tsx`, `IndustryTools.tsx`, `NotFound.tsx`)
- Pages live in `src/pages/` with subdirectories for grouped pages (`src/pages/case-studies/`, `src/pages/services/`)
- UI primitives from shadcn: kebab-case (e.g., `button.tsx`, `dropdown-menu.tsx`, `input-otp.tsx`)
- Custom components in feature directories: PascalCase (e.g., `InputControls.tsx`, `CategoryFilter.tsx`, `ToolModal.tsx`)
- Hooks: camelCase prefixed with `use` (e.g., `useContactPopup.ts`, `use-mobile.tsx`, `use-toast.ts`)
  - Note: inconsistent casing exists -- some hooks use camelCase (`useContactPopup.ts`) while shadcn-generated hooks use kebab-case (`use-mobile.tsx`, `use-toast.ts`). For new hooks, use camelCase (e.g., `useMyHook.ts`).
- Data files: camelCase (e.g., `blogPosts.ts`, `industryTools.ts`)
- Utility files: camelCase (e.g., `savingsCalculator.ts`, `utils.ts`)

**Components:**
- PascalCase for component names: `const SavingsCalculator = () => { ... }`
- Match filename to component name exactly

**Functions:**
- camelCase for all functions and handlers: `handleInputChange`, `handleIndustryClick`, `getFilteredTools`
- Event handlers prefixed with `handle`: `handleSubmit`, `handleToolClick`, `handleMouseLeave`
- Callback props prefixed with `on`: `onClose`, `onInputChange`, `onSelectCategory`

**Variables:**
- camelCase for local variables and state: `mobileMenuOpen`, `selectedIndustry`, `isToolModalOpen`
- Boolean state uses `is` or `has` prefix: `isVisible`, `hasShown`, `isSelected`, `isOpen`
- UPPER_SNAKE_CASE for constants: `MOBILE_BREAKPOINT`, `TOAST_LIMIT`, `TOAST_REMOVE_DELAY`

**Types/Interfaces:**
- PascalCase with descriptive suffixes: `InputControlsProps`, `ToolModalProps`, `SavingsInputs`, `SavingsResults`
- Interface props named as `{ComponentName}Props`: `DiscoveryButtonProps`, `ContactPopupProps`, `LeadCaptureModalProps`
- Data model interfaces named plainly: `Tool`, `Industry`, `BlogPost`

## Code Style

**Formatting:**
- No Prettier configuration detected. Formatting is manual/IDE-based.
- Indentation: 2 spaces
- Semicolons: mixed usage -- shadcn-generated code omits them, custom code includes them. For new code, use semicolons.
- Trailing commas: used in arrays and object literals
- String quotes: double quotes for JSX attributes and imports

**Linting:**
- ESLint v9 with flat config at `eslint.config.js`
- Extends: `@eslint/js` recommended + `typescript-eslint` recommended
- Plugins: `react-hooks` (recommended rules), `react-refresh` (warn on non-component exports)
- `@typescript-eslint/no-unused-vars` is disabled
- Run with: `npm run lint`

**TypeScript Strictness:**
- `strict: false` in `tsconfig.app.json`
- `noImplicitAny: false` -- any types are allowed
- `strictNullChecks: false` -- null/undefined not strictly checked
- `noUnusedLocals: false` and `noUnusedParameters: false`
- This is a permissive TypeScript setup. Type annotations are used where helpful but not enforced.

## Import Organization

**Order (observed pattern):**
1. React imports (`import React from "react"`, `import { useState, useEffect } from "react"`)
2. Third-party libraries (`react-router-dom`, `lucide-react`, `@tanstack/react-query`)
3. Internal UI components via `@/` alias (`@/components/ui/button`, `@/components/ui/dialog`)
4. Internal feature components via `@/` or relative paths (`@/components/savings-calculator/InputControls`)
5. Data/utilities (`@/data/industryTools`, `@/utils/savingsCalculator`)
6. Types (inline with their source imports)

**Path Aliases:**
- `@` maps to `./src` (configured in `vite.config.ts` and `tsconfig.json`)
- Use `@/` for all imports except within the same directory where relative imports (`./`) are acceptable
- Examples:
  ```typescript
  import { Button } from "@/components/ui/button";
  import { SavingsInputs } from "@/utils/savingsCalculator";
  import MobileMenu from "./MobileMenu";  // same directory
  ```

**Relative vs Alias Imports:**
- `@/` alias is strongly preferred for cross-directory imports
- Relative imports (`./`, `../`) are used within the same feature directory or for sibling files
- In `src/App.tsx`, some imports use `./` for layout components -- this is inconsistent but not a pattern to follow. Use `@/` for new code.

## Component Patterns

**Functional Components (arrow functions):**
```typescript
const PageName = () => {
  return (
    <div>...</div>
  );
};

export default PageName;
```

**Components with Props (two patterns coexist):**

Pattern 1 -- `React.FC` with explicit type (used for reusable components):
```typescript
interface DiscoveryButtonProps {
  className?: string;
  text?: string;
}

const DiscoveryButton: React.FC<DiscoveryButtonProps> = ({ className, text = "default" }) => {
  return <Button>...</Button>;
};

export default DiscoveryButton;
```

Pattern 2 -- Destructured props with inline type (used for feature components):
```typescript
interface ToolModalProps {
  tool: Tool | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ToolModal = ({ tool, isOpen, onClose }: ToolModalProps) => {
  // ...
};
```

For new code: Use Pattern 2 (destructured props with inline type) for consistency with the more modern approach. `React.FC` is being phased out in the React community.

**Export Patterns:**
- Pages and layout components: `export default ComponentName` at the bottom of the file
- Feature sub-components in directories: use named `export const` inline (e.g., `export const CategoryFilter = ...`)
- Some components have both named and default exports (e.g., `NotFound` has `export const NotFound` and `export default NotFound`)
- For new pages: use `export default`
- For new feature components: use `export const` (named export)

**Static Data Pattern:**
- Define static arrays/objects outside the component, at module scope, below the component
- Example from `src/pages/Index.tsx`:
  ```typescript
  const Index = () => { /* uses features and process arrays */ };

  const features = [
    { title: "AI Process Automation", description: "...", icon: Bot },
  ];

  const process = [
    { title: "Assessment", description: "..." },
  ];

  export default Index;
  ```

## Styling Patterns

**Approach:** Tailwind CSS utility classes applied directly in JSX

**Brand Colors:**
- Use `velocity-` prefixed classes: `text-velocity-muted`, `bg-velocity-dark`, `text-velocity-accent`, `text-velocity-light`
- `velocity-dark` (#1A1F2C): page backgrounds
- `velocity-light` (#F1F1F1): primary text
- `velocity-accent` (#33C3F0): highlights, accents, interactive elements
- `velocity-muted` (#C8C8C9): secondary/body text

**Custom CSS Classes (defined in `src/index.css`):**
- `glass-card`: frosted glass card effect -- `bg-white/5 backdrop-blur-md border border-white/10 rounded-lg shadow-lg`
- `btn-primary`: primary CTA button style -- gradient background with icon support
- `heading-gradient`: gradient text for headings -- accent to light color gradient with `bg-clip-text text-transparent`

**Responsive Design:**
- Mobile-first with `md:` and `lg:` breakpoints
- Pattern: `className="text-4xl md:text-6xl"`, `className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4"`
- Mobile menu at `md:hidden`, desktop nav at `hidden md:flex`

**Animation:**
- Custom animations: `animate-fade-up`, `animate-fade-in` (defined in `tailwind.config.ts`)
- Staggered animation delays via inline `style={{ animationDelay: ... }}`

**Button Styling:**
- Use shadcn `Button` component with `asChild` prop to wrap `Link` or `a` elements
- Gradient CTAs: `className="bg-gradient-to-r from-velocity-accent to-velocity-light text-[#151A24]"`
- Hover gradient: `hover:from-purple-400 hover:to-white`

**Class Merging:**
- Use `cn()` from `@/lib/utils` to merge Tailwind classes conditionally
- Template literal with ternaries for conditional classes in non-shadcn components:
  ```typescript
  className={`px-4 py-2 ${isSelected ? 'bg-velocity-accent' : 'glass-card'}`}
  ```

## Error Handling

**Patterns:**
- No try/catch blocks in the codebase -- the application has no API calls or async error-prone operations
- Route-level 404: `<Route path="*" element={<NotFound />} />` catches unmatched routes
- Component-level fallback: `BlogPost` renders `<NotFound />` when post ID is not found in data
- Console logging for errors: `console.error("404 Error: ...")` in `NotFound` component
- Missing env vars: `console.error('Missing Needle widget environment variables...')` in SmartBots page
- No global error boundary component exists

**Context Safety:**
- Context consumer hook throws if used outside provider:
  ```typescript
  // src/hooks/useContactPopupContext.ts
  const context = useContext(ContactPopupContext);
  if (context === undefined) {
    throw new Error('useContactPopupContext must be used within a ContactPopupProvider');
  }
  ```

## Logging

**Framework:** `console` (browser native)

**Patterns:**
- `console.error()` for critical issues (404 routes, missing env vars)
- No structured logging, no logging library
- Trigger.dev tasks use `logger` from `@trigger.dev/sdk/v3`

## Comments

**When to Comment:**
- Section comments in JSX using `{/* Section Name */}` to delineate page sections:
  ```tsx
  {/* Hero Section */}
  <section>...</section>

  {/* Value Proposition */}
  <section>...</section>
  ```
- Inline comments for non-obvious logic (e.g., `// 5 seconds default`, `// Total weekly hours across all employees`)
- JSDoc comments on utility functions (`src/utils/savingsCalculator.ts`)

**JSDoc/TSDoc:**
- Used sparingly, only on exported utility functions:
  ```typescript
  /**
   * Calculate savings based on input parameters
   */
  export const calculateSavings = (inputs: SavingsInputs): SavingsResults => { ... };
  ```
- Not used on React components or hooks

## Function Design

**Size:** Components range from small (12 lines for `RootLayout`) to large (276 lines for `AIGuideCertification`). No enforced limits.

**Parameters:** Destructure props in the function signature. Use TypeScript interfaces for prop types.

**Return Values:** Components return JSX. Hooks return object with state and handlers. Utility functions return typed objects.

## Module Design

**Exports:**
- One component per file (single responsibility)
- Data files export both interfaces and data arrays
- Utility files export individual functions
- No barrel files (`index.ts`) are used anywhere in the codebase

**Barrel Files:** Not used. Import directly from the specific file path.

---

*Convention analysis: 2026-02-10*
