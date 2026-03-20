
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
      <div className="text-center bg-surface border border-border rounded-lg p-12 mx-4">
        <h1 className="text-6xl font-bold mb-6">404</h1>
        <p className="text-2xl text-muted-foreground mb-8">Page not found</p>
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button 
          asChild
          className="bg-accent text-background font-medium hover:bg-accent/90 transition-all"
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
