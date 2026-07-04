
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
    <div className="flex-1 flex items-center justify-center py-20 px-4">
      <div className="max-w-lg w-full text-center">
        <p className="font-display text-xs font-semibold tracking-widest uppercase text-accent-strong mb-4">
          Error 404
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-extrabold leading-[1.05] mb-4">
          We couldn't find that page
        </h1>
        <p className="font-body text-lg text-muted-foreground mb-8">
          The page may have moved or never existed. Here's where most people are headed.
        </p>
        <Button
          asChild
          className="bg-foreground text-background font-semibold hover:bg-foreground/90 transition-all"
        >
          <Link to="/">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to home
          </Link>
        </Button>
        <div className="mt-10 pt-8 border-t border-border flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-semibold">
          {[
            { to: "/services", label: "Services" },
            { to: "/case-studies", label: "Case Studies" },
            { to: "/savings-calculator", label: "Savings Calculator" },
            { to: "/contact", label: "Contact" },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotFound;
