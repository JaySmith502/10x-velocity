
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import ContactPopup from "./components/ui/ContactPopup";
import { ContactPopupProvider } from "./contexts/ContactPopupContext";
import { useContactPopupContext } from "./hooks/useContactPopupContext";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import PowerAutomate from "./pages/PowerAutomate";
import CaseStudies from "./pages/CaseStudies";
import InnesYoung from "./pages/case-studies/InnesYoung";
import ECatalyst from "./pages/case-studies/ECatalyst";
import HillcrestPartners from "./pages/case-studies/HillcrestPartners";
import CatalystGroup from "./pages/case-studies/CatalystGroup";
import DirectorOfMarketing from "./pages/case-studies/DirectorOfMarketing";
import BirchwoodRealEstate from "./pages/case-studies/BirchwoodRealEstate";
import GovBrokers from "./pages/case-studies/GovBrokers";
import Inspyrd from "./pages/case-studies/Inspyrd";
import TransportationDirector from "./pages/case-studies/TransportationDirector";
import SavingsCalculator from "./pages/SavingsCalculator";
import Blog from "./pages/Blog";
import BlogPost from "./components/blog/BlogPost";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";
import DataCleaning from "./pages/services/DataCleaning";
import LunchAndLearn from "./pages/LunchAndLearn";
import PhoneVoiceAgents from "./pages/services/PhoneVoiceAgents";
import AIWorkshops from "./pages/services/AIWorkshops";
import OnboardingForm from "./pages/OnboardingForm";
import SmartBots from "./pages/SmartBots";
import LexiFile from "./pages/LexiFile";
import IndustryTools from "./pages/IndustryTools";

const queryClient = new QueryClient();

const AppContent = () => {
  const { isVisible, hidePopup } = useContactPopupContext();
  const location = useLocation();
  
  // Only show popup on home page
  const isHomePage = location.pathname === '/';

  return (
    <>
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
      {isHomePage && <ContactPopup isVisible={isVisible} onClose={hidePopup} />}
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ContactPopupProvider
          autoShow={true}
          showDelay={10000}
          showOnExit={true}
        >
          <AppContent />
        </ContactPopupProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
