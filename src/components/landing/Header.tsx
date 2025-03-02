
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

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
          
          <div className="flex items-center gap-4">
            <Button asChild variant="outline" className="border-velocity-accent text-velocity-accent hover:bg-velocity-accent hover:text-velocity-light">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
