import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { X, ChevronDown, ChevronUp } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const serviceLinks = [
  { to: "/services", label: "All Services" },
  { to: "/services/data-cleaning", label: "Data Cleaning" },
  { to: "/services/phone-voice-agents", label: "Phone Voice Agents" },
  { to: "/services/smart-bots", label: "Smart Bots" },
  { to: "/power-automate", label: "Power Automate" },
  { to: "/lexi-file", label: "Lexi-File" },
  { to: "/services/ai-workshops", label: "AI Workshops" },
  { to: "/prototypes", label: "Rapid Prototypes" },
];

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="absolute inset-0 bg-foreground/50" onClick={onClose} />

      <div className="relative w-4/5 max-w-xs h-full z-10 bg-background border-r border-border">
        <div className="flex flex-col h-full">
          <div className="p-4 flex justify-between items-center border-b border-border">
            <Link to="/" className="flex items-center" onClick={onClose}>
              <img
                src="/lovable-uploads/d113002f-f6b2-41b5-aa96-2057ce8f4046.webp"
                alt="10x Velocity Logo"
                className="h-8 w-auto"
                width={400}
                height={242}
              />
            </Link>
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground p-2"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex flex-col p-4 space-y-1">
            <div>
              <button
                className="text-foreground hover:text-accent transition-colors font-semibold py-3 flex items-center justify-between w-full text-sm"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services
                {servicesOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              {servicesOpen && (
                <div className="ml-4 space-y-1 border-l border-border pl-4">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="block text-muted-foreground hover:text-foreground transition-colors py-2 text-sm"
                      onClick={onClose}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {[
              { to: "/about", label: "About" },
              { to: "/case-studies", label: "Case Studies" },
              { to: "/savings-calculator", label: "Savings Calculator" },
              { to: "/demo", label: "Get Demo" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-foreground hover:text-accent transition-colors font-semibold py-3 text-sm"
                onClick={onClose}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-4">
              <Link
                to="/contact"
                className="block bg-foreground text-background font-semibold px-6 py-3 rounded-lg w-full text-center text-sm"
                onClick={onClose}
              >
                Contact Us
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
