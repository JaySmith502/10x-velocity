import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-auto bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div>
            <Link to="/" className="inline-block mb-4">
              <img
                src="/lovable-uploads/d113002f-f6b2-41b5-aa96-2057ce8f4046.webp"
                alt="10x Velocity Logo"
                className="h-8 w-auto brightness-0 invert"
                width={400}
                height={242}
                loading="lazy"
              />
            </Link>
            <p className="text-background/60 text-sm leading-relaxed mb-4">
              AI & Automation Consulting
              <br />
              Louisville, KY
            </p>
            <a
              href="mailto:info@10xvelocity.ai"
              className="text-background/60 hover:text-background transition-colors text-sm"
            >
              info@10xvelocity.ai
            </a>
            <div className="mt-4">
              <a
                href="https://www.linkedin.com/company/10x-velocity"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/60 hover:text-background transition-colors inline-flex items-center gap-2 text-sm"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4 text-background/80">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="text-background/50 hover:text-background transition-colors">All Services</Link></li>
              <li><Link to="/services/data-cleaning" className="text-background/50 hover:text-background transition-colors">Data Cleaning</Link></li>
              <li><Link to="/services/phone-voice-agents" className="text-background/50 hover:text-background transition-colors">Voice Agents</Link></li>
              <li><Link to="/services/smart-bots" className="text-background/50 hover:text-background transition-colors">Smart Bots</Link></li>
              <li><Link to="/prototypes" className="text-background/50 hover:text-background transition-colors">Rapid Prototypes</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4 text-background/80">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-background/50 hover:text-background transition-colors">About</Link></li>
              <li><Link to="/case-studies" className="text-background/50 hover:text-background transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="text-background/50 hover:text-background transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-background/50 hover:text-background transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4 text-background/80">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/savings-calculator" className="text-background/50 hover:text-background transition-colors">Savings Calculator</Link></li>
              <li><Link to="/industry-tools" className="text-background/50 hover:text-background transition-colors">Industry Tools</Link></li>
              <li><Link to="/programs/ai-guide-certification" className="text-background/50 hover:text-background transition-colors">AI Guide Cert</Link></li>
              <li><Link to="/privacy-policy" className="text-background/50 hover:text-background transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-background/50 hover:text-background transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-background/40 text-xs">
            © {new Date().getFullYear()} 10x Velocity. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <img
              src="/lovable-uploads/093e4cf4-8793-474f-a7d9-6ca869d392f7.webp"
              alt="VOSB Verified"
              className="h-10 w-auto opacity-60"
              width={100}
              height={100}
              loading="lazy"
            />
            <img
              src="/lovable-uploads/177aec5f-3604-4fb9-aac0-ec91a10d1639.webp"
              alt="ESGR"
              className="h-10 w-auto opacity-60"
              width={100}
              height={100}
              loading="lazy"
            />
            <a href="https://canopyky.org" target="_blank" rel="noopener noreferrer">
              <img
                src="/lovable-uploads/1078ef2b-dcf2-4e80-8022-0643ec9653ed.webp"
                alt="Canopy Certified"
                className="h-10 w-auto opacity-60"
                width={100}
                height={100}
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
