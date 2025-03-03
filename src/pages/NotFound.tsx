
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex-1 flex items-center justify-center py-20">
      <div className="text-center glass-card p-12 mx-4">
        <h1 className="text-6xl font-bold mb-6 heading-gradient">404</h1>
        <p className="text-2xl text-velocity-muted mb-8">Page not found</p>
        <p className="text-velocity-muted mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button 
          asChild
          className="bg-gradient-to-r from-velocity-accent to-velocity-light text-[#151A24] font-medium hover:bg-gradient-to-r hover:from-purple-400 hover:to-white transition-all"
        >
          <Link to="/">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
