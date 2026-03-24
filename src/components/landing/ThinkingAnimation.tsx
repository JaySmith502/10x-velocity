import { useEffect, useRef, useState } from "react";

const VERBS = [
  "Thinking", "Pondering", "Scheming", "Plotting", "Considering",
  "Analyzing", "Computing", "Deliberating", "Cogitating", "Ruminating",
  "Musing", "Contemplating", "Reasoning", "Calculating", "Evaluating",
  "Synthesizing", "Brainstorming", "Ideating", "Envisioning", "Deciphering",
  "Unraveling", "Hypothesizing", "Theorizing", "Architecting", "Engineering",
  "Orchestrating", "Philosophizing", "Extrapolating", "Concocting", "Devising",
  "Strategizing", "Formulating", "Imagining", "Simulating", "Optimizing",
  "Refining", "Distilling", "Connecting", "Weaving", "Crafting",
  "Assembling", "Constructing", "Mapping", "Navigating", "Exploring",
  "Investigating", "Decoding", "Untangling", "Bootstrapping", "Hallucinating",
];

const ThinkingAnimation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState<"in" | "out">("in");
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const interval = setInterval(() => {
      // Start exit
      setPhase("out");

      // After exit transition, swap word and enter
      timeoutRef.current = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % VERBS.length);
        setPhase("in");
      }, 250);
    }, 1800);

    return () => {
      clearInterval(interval);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="flex items-center gap-2.5 mt-6">
      <span className="w-[7px] h-[7px] rounded-full bg-accent-secondary dark:bg-accent shrink-0 animate-[thinking-pulse_1.4s_ease-in-out_infinite]" />
      <span className="relative h-[1.25em] min-w-[200px] overflow-hidden">
        <span
          className={`absolute top-0 left-0 font-mono text-[15px] text-accent-secondary dark:text-accent whitespace-nowrap transition-all ${
            phase === "in"
              ? "opacity-100 translate-y-0 duration-[280ms] ease-out"
              : "opacity-0 -translate-y-[7px] duration-[220ms] ease-out"
          }`}
        >
          {VERBS[currentIndex]}...
        </span>
      </span>
    </div>
  );
};

export default ThinkingAnimation;
