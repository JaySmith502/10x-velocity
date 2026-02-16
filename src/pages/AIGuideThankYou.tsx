import { CheckCircle, Mail, BookOpen, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { VisualBreadcrumb } from "@/components/VisualBreadcrumb";

const AIGuideThankYou = () => {
  return (
    <>
      <Helmet>
        <title>Thank You | AI Guide Certification | 10x Velocity</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <main className="flex-1">
        <VisualBreadcrumb
          items={[
            { name: "Home", path: "/" },
            { name: "AI Guide Certification", path: "/programs/ai-guide-certification" },
            { name: "Thank You", path: "/programs/ai-guide-certification/thank-you" },
          ]}
        />

        <section className="relative overflow-hidden py-20 md:py-28">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-velocity-dark/90 z-0" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center mb-8">
                <div className="bg-velocity-accent/20 p-4 rounded-full">
                  <CheckCircle className="w-12 h-12 text-velocity-accent" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 heading-gradient">
                You're In!
              </h1>
              <p className="text-xl text-velocity-muted mb-12">
                Thanks for signing up for the AI Guide Certification program. We're excited to have you.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#151A24]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 heading-gradient">
                What Happens Next
              </h2>
              <div className="space-y-6">
                <div className="glass-card p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-velocity-accent/20 p-3 rounded-full flex-shrink-0">
                      <Mail className="w-6 h-6 text-velocity-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-velocity-light mb-2">Check Your Inbox</h3>
                      <p className="text-velocity-muted">
                        You'll receive a confirmation email with details about the program, including how to access your learning modules.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-velocity-accent/20 p-3 rounded-full flex-shrink-0">
                      <BookOpen className="w-6 h-6 text-velocity-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-velocity-light mb-2">Get Ready to Learn</h3>
                      <p className="text-velocity-muted">
                        Our team will review your application and reach out to schedule your onboarding. The pilot cohort starts soon, so keep an eye out.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-velocity-accent/20 p-3 rounded-full flex-shrink-0">
                      <ArrowRight className="w-6 h-6 text-velocity-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-velocity-light mb-2">Questions?</h3>
                      <p className="text-velocity-muted">
                        If you have any questions in the meantime, don't hesitate to{" "}
                        <Link to="/contact" className="text-velocity-accent hover:underline">
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
                  className="inline-flex items-center gap-2 bg-velocity-accent hover:bg-velocity-accent/90 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
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

export default AIGuideThankYou;
