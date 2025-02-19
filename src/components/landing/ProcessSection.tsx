
const process = [
  {
    title: "Assessment",
    description: "We analyze your current processes and identify optimization opportunities.",
  },
  {
    title: "Strategy",
    description: "Develop a tailored implementation plan aligned with your goals.",
  },
  {
    title: "Implementation",
    description: "Execute the solution with continuous monitoring and refinement.",
  },
];

const ProcessSection = () => {
  return (
    <section className="bg-gradient-to-b from-transparent to-black/20 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 heading-gradient">
            Our Approach
          </h2>
          <p className="text-lg text-velocity-muted">
            A structured methodology to transform your operations
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {process.map((step, index) => (
            <div key={step.title} className="text-center animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="w-16 h-16 rounded-full bg-velocity-accent/20 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-velocity-accent">{index + 1}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-velocity-muted">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
