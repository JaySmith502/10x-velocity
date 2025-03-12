
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Dark overlay */}
      <div 
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
      />
      
      {/* Menu panel */}
      <div 
        className="relative w-4/5 max-w-xs h-full z-10 bg-[#1A1F2C]"
        style={{
          backgroundColor: "#1A1F2C" // Explicit background color
        }}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 flex justify-end">
            <button 
              onClick={onClose}
              className="text-velocity-muted hover:text-velocity-light p-2"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="px-4 py-2 flex flex-col items-start bg-[#1A1F2C]">
            <div className="mb-6">
              <Link to="/" className="flex items-center" onClick={onClose}>
                <img 
                  src="/lovable-uploads/3a6e6f00-b9ba-4507-a097-f7bef657f6ce.png" 
                  alt="10x Velocity Logo" 
                  className="h-10 w-auto"
                />
              </Link>
            </div>
            
            <nav className="flex flex-col items-start w-full space-y-6">
              <Link 
                to="/services" 
                className="text-velocity-muted hover:text-velocity-light transition-colors font-bold py-2"
                onClick={onClose}
              >
                Services
              </Link>
              <Link 
                to="/power-automate" 
                className="text-velocity-muted hover:text-velocity-light transition-colors font-bold py-2"
                onClick={onClose}
              >
                Power Automate
              </Link>
              <Link 
                to="/case-studies" 
                className="text-velocity-muted hover:text-velocity-light transition-colors font-bold py-2"
                onClick={onClose}
              >
                Case Studies
              </Link>
              <Link 
                to="/savings-calculator" 
                className="text-velocity-muted hover:text-velocity-light transition-colors font-bold py-2"
                onClick={onClose}
              >
                Savings Calculator
              </Link>
              <Link 
                to="/blog" 
                className="text-velocity-muted hover:text-velocity-light transition-colors font-bold py-2"
                onClick={onClose}
              >
                Blog
              </Link>
              <a href="https://calendly.com/therootofpi/15-minute-quick-chat" 
                className="bg-gradient-to-r from-velocity-accent to-velocity-light text-[#151A24] font-bold px-6 py-3 rounded-lg w-full text-center mt-4"
                onClick={onClose}
              >
                Contact Us
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
