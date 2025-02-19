
const clientLogos = [
  {
    name: "TechCorp",
    logo: "/placeholder.svg"
  },
  {
    name: "InnovateLab",
    logo: "/placeholder.svg"
  },
  {
    name: "FutureWorks",
    logo: "/placeholder.svg"
  },
  {
    name: "SmartSolutions",
    logo: "/placeholder.svg"
  }
];

const ClientLogos = () => {
  return (
    <section className="py-16 bg-white/5">
      <div className="container mx-auto px-4">
        <p className="text-center text-velocity-muted mb-12 text-sm uppercase tracking-wider font-medium">
          Trusted by Industry Leaders
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center max-w-4xl mx-auto">
          {clientLogos.map((logo, index) => (
            <div 
              key={logo.name}
              className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={logo.logo} 
                alt={`${logo.name} logo`} 
                className="h-12 w-auto grayscale hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
