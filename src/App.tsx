import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import { ScrollToTop } from "./components/ScrollToTop";
import Index from "./pages/Index";

// Lazy-loaded page components — split into separate chunks
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const PowerAutomate = lazy(() => import("./pages/PowerAutomate"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const InnesYoung = lazy(() => import("./pages/case-studies/InnesYoung"));
const ECatalyst = lazy(() => import("./pages/case-studies/ECatalyst"));
const HillcrestPartners = lazy(() => import("./pages/case-studies/HillcrestPartners"));
const CatalystGroup = lazy(() => import("./pages/case-studies/CatalystGroup"));
const DirectorOfMarketing = lazy(() => import("./pages/case-studies/DirectorOfMarketing"));
const BirchwoodRealEstate = lazy(() => import("./pages/case-studies/BirchwoodRealEstate"));
const GovBrokers = lazy(() => import("./pages/case-studies/GovBrokers"));
const Inspyrd = lazy(() => import("./pages/case-studies/Inspyrd"));
const TransportationDirector = lazy(() => import("./pages/case-studies/TransportationDirector"));
const SavingsCalculator = lazy(() => import("./pages/SavingsCalculator"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./components/blog/BlogPost"));
const Contact = lazy(() => import("./pages/Contact"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const NotFound = lazy(() => import("./pages/NotFound"));
const DataCleaning = lazy(() => import("./pages/services/DataCleaning"));
const LunchAndLearn = lazy(() => import("./pages/LunchAndLearn"));
const PhoneVoiceAgents = lazy(() => import("./pages/services/PhoneVoiceAgents"));
const AIWorkshops = lazy(() => import("./pages/services/AIWorkshops"));
const OnboardingForm = lazy(() => import("./pages/OnboardingForm"));
const SmartBots = lazy(() => import("./pages/SmartBots"));
const LexiFile = lazy(() => import("./pages/LexiFile"));
const Prototypes = lazy(() => import("./pages/Prototypes"));
const IndustryTools = lazy(() => import("./pages/IndustryTools"));
const AIGuideCertification = lazy(() => import("./pages/AIGuideCertification"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-velocity-accent border-t-transparent rounded-full animate-spin" />
  </div>
);

const AppContent = () => {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/data-cleaning" element={<DataCleaning />} />
          <Route path="/services/phone-voice-agents" element={<PhoneVoiceAgents />} />
          <Route path="/services/ai-workshops" element={<AIWorkshops />} />
          <Route path="/services/smart-bots" element={<SmartBots />} />
          <Route path="/lexi-file" element={<LexiFile />} />
          <Route path="/industry-tools" element={<IndustryTools />} />
          <Route path="/power-automate" element={<PowerAutomate />} />
          <Route path="/prototypes" element={<Prototypes />} />
          <Route path="/programs/ai-guide-certification" element={<AIGuideCertification />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/innes-young" element={<InnesYoung />} />
          <Route path="/case-studies/ecatalyst" element={<ECatalyst />} />
          <Route path="/case-studies/hillcrest-partners" element={<HillcrestPartners />} />
          <Route path="/case-studies/catalyst-group" element={<CatalystGroup />} />
          <Route path="/case-studies/director-of-marketing" element={<DirectorOfMarketing />} />
          <Route path="/case-studies/birchwood-real-estate" element={<BirchwoodRealEstate />} />
          <Route path="/case-studies/govbrokers" element={<GovBrokers />} />
          <Route path="/case-studies/inspyrd" element={<Inspyrd />} />
          <Route path="/case-studies/transportation-director" element={<TransportationDirector />} />
          <Route path="/savings-calculator" element={<SavingsCalculator />} />
          <Route path="/events/lunch-and-learn" element={<LunchAndLearn />} />
          <Route path="/demo" element={<OnboardingForm />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      </Suspense>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
