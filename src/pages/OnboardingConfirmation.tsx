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
                We've received your information and a member of our team will be reaching out very soon to schedule a personalized review of your submission.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                What Happens Next
              </h2>
              <div className="space-y-6">
                <div className="bg-surface border border-border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/20 p-3 rounded-full flex-shrink-0">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Expect a Call</h3>
                      <p className="text-muted-foreground">
                        One of our business development representatives will contact you shortly to walk through your entries and discuss solutions tailored to your use case.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-surface border border-border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/20 p-3 rounded-full flex-shrink-0">
                      <BookOpen className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">See What We've Built</h3>
                      <p className="text-muted-foreground">
                        While you wait, check out our{" "}
                        <Link to="/case-studies" className="text-accent hover:underline">
                          case studies
                        </Link>{" "}
                        to see specific solutions we've implemented for businesses like yours.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-surface border border-border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/20 p-3 rounded-full flex-shrink-0">
                      <ArrowRight className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Questions?</h3>
                      <p className="text-muted-foreground">
                        If you need anything in the meantime, feel free to{" "}
                        <Link to="/contact" className="text-accent hover:underline">
                          reach out to us
                        </Link>
                        . We're here to help.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-12">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default OnboardingConfirmation;
