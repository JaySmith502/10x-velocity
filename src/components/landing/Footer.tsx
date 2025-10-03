import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-auto py-16 border-t border-white/10 bg-black/20">
      <div className="container mx-auto px-4">
        <div className="relative pb-12">
          <div className="absolute inset-0 flex items-center">
            <div className="h-[1.5px] w-full bg-gradient-to-r from-transparent via-[#33C3F0] via-[#D946EF] to-transparent mx-8" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-velocity-light">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-velocity-muted hover:text-velocity-accent transition-colors">About Us</Link></li>
              <li>
                <a 
                  href="mailto:info@10xvelocity.ai" 
                  className="text-velocity-muted hover:text-velocity-accent transition-colors"
                >
                  info@10xvelocity.ai
                </a>
              </li>
              <li className="text-velocity-muted pb-4">
                10440 Bluegrass Pkwy
                <br />
                Louisville, KY 40299
              </li>
              <li className="hidden md:block mt-12">
                <Link to="/">
                  <img 
                    src="/lovable-uploads/d113002f-f6b2-41b5-aa96-2057ce8f4046.png" 
                    alt="10x Velocity Logo" 
                    className="h-16 w-auto"
                  />
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-velocity-light">Solutions</h3>
            <ul className="space-y-2">
              <li><Link to="/services#process-automation" className="text-velocity-muted hover:text-velocity-accent transition-colors">Process Automation</Link></li>
              <li><Link to="/services#data-analytics" className="text-velocity-muted hover:text-velocity-accent transition-colors">Data Analytics</Link></li>
              <li><Link to="/services#team-augmentation" className="text-velocity-muted hover:text-velocity-accent transition-colors">Team Augmentation</Link></li>
              <li><Link to="/services#process-mining" className="text-velocity-muted hover:text-velocity-accent transition-colors">Process Mining</Link></li>
              <li><Link to="/services/phone-voice-agents" className="text-velocity-muted hover:text-velocity-accent transition-colors">Phone Voice Agents</Link></li>
              <li><Link to="/services#team-training" className="text-velocity-muted hover:text-velocity-accent transition-colors">Team Training</Link></li>
              <li><Link to="/services#opportunity-discovery" className="text-velocity-muted hover:text-velocity-accent transition-colors">Opportunity Discovery</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-velocity-light">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/industry-tools" className="text-velocity-muted hover:text-velocity-accent transition-colors">Tool Explorer</Link></li>
              <li><Link to="/case-studies" className="text-velocity-muted hover:text-velocity-accent transition-colors">Case Studies</Link></li>
              <li><Link to="https://resources.10xvelocity.ai/" className="text-velocity-muted hover:text-velocity-accent transition-colors">Documentation</Link></li>
              <li><Link to="https://resources.10xvelocity.ai/docs/intro" className="text-velocity-muted hover:text-velocity-accent transition-colors">Playbooks</Link></li>
              <li><Link to="https://resources.10xvelocity.ai/blog" className="text-velocity-muted hover:text-velocity-accent transition-colors">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-velocity-light">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="text-velocity-muted hover:text-velocity-accent transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-velocity-muted hover:text-velocity-accent transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy-policy#cookie-policy" className="text-velocity-muted hover:text-velocity-accent transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          <p className="text-velocity-muted">
            © 2024 10x Velocity. All rights reserved.
          </p>
          <div className="flex items-center justify-center gap-6">
            <img 
              src="/lovable-uploads/093e4cf4-8793-474f-a7d9-6ca869d392f7.png"
              alt="VOSB Verified Logo"
              className="h-16 w-auto"
            />
            <img 
              src="/lovable-uploads/177aec5f-3604-4fb9-aac0-ec91a10d1639.png"
              alt="ESGR Logo"
              className="h-16 w-auto"
            />
            <a 
              href="https://canopyky.org" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img 
                src="/lovable-uploads/1078ef2b-dcf2-4e80-8022-0643ec9653ed.png"
                alt="Canopy Certified Logo"
                className="h-16 w-auto"
              />
            </a>
          </div>
          <p className="text-velocity-muted text-right">
            Louisville, Kentucky
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
