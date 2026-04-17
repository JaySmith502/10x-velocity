import { CheckCircle, Phone, ArrowRight, BookOpen } from "lucide-react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { VisualBreadcrumb } from "@/components/VisualBreadcrumb";

const OnboardingConfirmation = () => {
  return (
    <>
      <Helmet>
        <title>Thank You | 10x Velocity</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <main className="flex-1">
        <VisualBreadcrumb
          items={[
            { name: "Home", path: "/" },
            { name: "Demo", path: "/demo" },
            { name: "Confirmation", path: "/confirmation" },
          ]}
        />

        <section className="relative overflow-hidden py-20 md:py-28">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-background/90 z-0" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center mb-8">
                <div className="bg-accent/20 p-4 rounded-full">
                  <CheckCircle className="w-12 h-12 text-accent" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Thank You!
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                We've received your information and a member of our team will be
                reaching out very soon to schedule a personalized review of your
                submission.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default OnboardingConfirmation;
