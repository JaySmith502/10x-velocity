
import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import ValueProposition from "@/components/landing/ValueProposition";
import FeaturesGrid from "@/components/landing/FeaturesGrid";
import ClientLogos from "@/components/landing/ClientLogos";
import ProcessSection from "@/components/landing/ProcessSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <HeroSection />
      <ValueProposition />
      <FeaturesGrid />
      <ClientLogos />
      <ProcessSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
