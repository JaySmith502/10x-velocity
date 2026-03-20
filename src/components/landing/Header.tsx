import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, ChevronDown, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import DiscoveryButton from "@/components/ui/DiscoveryButton";
import MobileMenu from "./MobileMenu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="border-b border-border bg-background/80 backdrop-blur-sm z-50 sticky top-0">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="hidden md:flex items-center">
              <img
                src="/lovable-uploads/d113002f-f6b2-41b5-aa96-2057ce8f4046.webp"
                alt="10x Velocity Logo"
                className="h-8 w-auto"
                width={400}
                height={242}
              />
            </Link>

            <button
              className="md:hidden text-muted-foreground hover:text-foreground p-2 -ml-2"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-6">
              <DropdownMenu>
                <DropdownMenuTrigger className="text-muted-foreground hover:text-foreground transition-colors font-semibold text-sm flex items-center gap-1 focus:outline-none">
                  Services <ChevronDown className="w-3.5 h-3.5" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-surface border-border text-foreground min-w-[200px]">
                  {serviceLinks.map((link) => (
                    <DropdownMenuItem key={link.to} asChild>
                      <Link to={link.to} className="w-full cursor-pointer">
                        {link.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors font-semibold text-sm">
                About
              </Link>
              <Link to="/case-studies" className="text-muted-foreground hover:text-foreground transition-colors font-semibold text-sm">
                Case Studies
              </Link>
              <Link to="/savings-calculator" className="text-muted-foreground hover:text-foreground transition-colors font-semibold text-sm">
                Calculator
              </Link>
            </nav>

            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle theme"
            >
              <Sun className="w-4 h-4 hidden dark:block" />
              <Moon className="w-4 h-4 block dark:hidden" />
            </button>

            <DiscoveryButton className="text-sm hidden sm:inline-flex" />
          </div>
        </div>
      </div>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
};

export default Header;
