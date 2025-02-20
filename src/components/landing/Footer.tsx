
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
              <li><Link to="/case-studies" className="text-velocity-muted hover:text-velocity-accent transition-colors">Case Studies</Link></li>
              <li><Link to="/" className="text-velocity-muted hover:text-velocity-accent transition-colors">Contact</Link></li>
              <li><Link to="/" className="text-velocity-muted hover:text-velocity-accent transition-colors">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-velocity-light">Solutions</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-velocity-muted hover:text-velocity-accent transition-colors">Process Automation</Link></li>
              <li><Link to="/" className="text-velocity-muted hover:text-velocity-accent transition-colors">Data Analytics</Link></li>
              <li><Link to="/" className="text-velocity-muted hover:text-velocity-accent transition-colors">AI Integration</Link></li>
              <li><Link to="/" className="text-velocity-muted hover:text-velocity-accent transition-colors">Workflow Optimization</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-velocity-light">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-velocity-muted hover:text-velocity-accent transition-colors">Documentation</Link></li>
              <li><Link to="/case-studies" className="text-velocity-muted hover:text-velocity-accent transition-colors">Case Studies</Link></li>
              <li><Link to="/" className="text-velocity-muted hover:text-velocity-accent transition-colors">Webinars</Link></li>
              <li><Link to="/" className="text-velocity-muted hover:text-velocity-accent transition-colors">API Reference</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-velocity-light">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-velocity-muted hover:text-velocity-accent transition-colors">Privacy Policy</Link></li>
              <li><Link to="/" className="text-velocity-muted hover:text-velocity-accent transition-colors">Terms of Service</Link></li>
              <li><Link to="/" className="text-velocity-muted hover:text-velocity-accent transition-colors">Cookie Policy</Link></li>
              <li><Link to="/" className="text-velocity-muted hover:text-velocity-accent transition-colors">Security</Link></li>
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
