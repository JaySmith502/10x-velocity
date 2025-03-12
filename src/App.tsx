
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import Index from "./pages/Index";
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
import SavingsCalculator from "./pages/SavingsCalculator";
import Blog from "./pages/Blog";
import BlogPost from "./components/blog/BlogPost";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
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
            <Route path="/savings-calculator" element={<SavingsCalculator />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
