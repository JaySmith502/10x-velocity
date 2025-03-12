import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-auto py-16 border-t border-white/10 bg-black/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-velocity-light">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-velocity-muted hover:text-velocity-accent transition-colors">About Us</Link></li>
              <li><Link to="https://calendly.com/therootofpi/15-minute-quick-chat" className="text-velocity-muted hover:text-velocity-accent transition-colors">Contact</Link></li>
              <li><Link to="/blog" className="text-velocity-muted hover:text-velocity-accent transition-colors">Blog</Link></li>
              <li className="hidden md:block mt-12">
                <Link to="/">
                  <img 
                    src="/lovable-uploads/3a6e6f00-b9ba-4507-a097-f7bef657f6ce.png" 
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
              <li><Link to="/services#team-training" className="text-velocity-muted hover:text-velocity-accent transition-colors">Team Training</Link></li>
              <li><Link to="/services#opportunity-discovery" className="text-velocity-muted hover:text-velocity-accent transition-colors">Opportunity Discovery</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-velocity-light">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/case-studies" className="text-velocity-muted hover:text-velocity-accent transition-colors">Case Studies</Link></li>
              <li><Link to="/" className="text-velocity-muted hover:text-velocity-accent transition-colors">Documentation (Coming soon)</Link></li>
              <li><Link to="/" className="text-velocity-muted hover:text-velocity-accent transition-colors">Webinars (Coming soon)</Link></li>
              <li><Link to="/" className="text-velocity-muted hover:text-velocity-accent transition-colors">API Reference (Coming soon)</Link></li>
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
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-velocity-muted">
            © 2024 10x Velocity. All rights reserved.
          </p>
          <p className="text-velocity-muted mt-4 md:mt-0">
            Louisville, Kentucky
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
