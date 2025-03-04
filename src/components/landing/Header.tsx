
import { Link } from "react-router-dom";
import DiscoveryButton from "@/components/ui/DiscoveryButton";

const Header = () => {
  return (
    <header className="border-b border-white/10 bg-black/20 backdrop-blur-md z-50 sticky top-0">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold heading-gradient">
              10x Velocity
            </Link>
          </div>
          
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/services" className="text-velocity-muted hover:text-velocity-light transition-colors">
                Services
              </Link>
              <Link to="/case-studies" className="text-velocity-muted hover:text-velocity-light transition-colors">
                Case Studies
              </Link>
              <Link to="/savings-calculator" className="text-velocity-muted hover:text-velocity-light transition-colors">
                Savings Calculator
              </Link>
              <Link to="/blog" className="text-velocity-muted hover:text-velocity-light transition-colors">
                Blog
              </Link>
            </nav>
            <DiscoveryButton className="text-sm" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
