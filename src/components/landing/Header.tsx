
import { Link } from "react-router-dom";
import DiscoveryButton from "@/components/ui/DiscoveryButton";

const Header = () => {
  return (
    <header className="border-b border-white/10 bg-black/20 backdrop-blur-md z-50 sticky top-0">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/3a6e6f00-b9ba-4507-a097-f7bef657f6ce.png" 
                alt="10x Velocity Logo" 
                className="h-9 sm:h-10 md:h-12 w-auto" // Increased mobile size even more
              />
            </Link>
          </div>
          
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-8">
              <Link to="/services" className="text-velocity-muted hover:text-velocity-light transition-colors font-bold">
                Services
              </Link>
              <Link to="/case-studies" className="text-velocity-muted hover:text-velocity-light transition-colors font-bold">
                Case Studies
              </Link>
              <Link to="/savings-calculator" className="text-velocity-muted hover:text-velocity-light transition-colors font-bold">
                Savings Calculator
              </Link>
              <Link to="/blog" className="text-velocity-muted hover:text-velocity-light transition-colors font-bold">
                Blog
              </Link>
            </nav>
            <DiscoveryButton className="text-sm" text="Contact Us" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
