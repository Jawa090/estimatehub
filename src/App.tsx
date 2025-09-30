import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import ServiceAreas from "./pages/ServiceAreas";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Clients from "./pages/Clients";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import QuantityTakeoffServices from "./pages/services/QuantityTakeoffServices";
import CostEstimationServices from "./pages/services/CostEstimationServices";
import SpecializedEstimating from "./pages/services/SpecializedEstimating";
import SoftwareBasedEstimating from "./pages/services/SoftwareBasedEstimating";
import DocumentationReporting from "./pages/services/DocumentationReporting";
import ProjectSupportServices from "./pages/services/ProjectSupportServices";
import ConstructionManagement from "./pages/services/ConstructionManagement";
import ConcreteTakeoffServices from "./pages/services/ConcreteTakeoffServices";
import MasonryTakeoffServices from "./pages/services/MasonryTakeoffServices";
import CarpentryMillworkServices from "./pages/services/CarpentryMillworkServices";
import DrywallInsulationServices from "./pages/services/DrywallInsulationServices";
import RoofingWaterproofingServices from "./pages/services/RoofingWaterproofingServices";
import FlooringTakeoffServices from "./pages/services/FlooringTakeoffServices";
import DoorsWindowsGlazingServices from "./pages/services/DoorsWindowsGlazingServices";
import StructuralSteelServices from "./pages/services/StructuralSteelServices";
import SiteworkEarthworksServices from "./pages/services/SiteworkEarthworksServices";
import PreliminaryEstimates from "./pages/services/PreliminaryEstimates";
import DetailedEstimates from "./pages/services/DetailedEstimates";
import BidEstimates from "./pages/services/BidEstimates";
import ConceptualEstimating from "./pages/services/ConceptualEstimating";
import DedicatedEstimator from "./pages/services/DedicatedEstimator";
import Industry from "./pages/services/Industry";
import Government from "./pages/services/Government";
import Residential from "./pages/services/Residential";
import Commercial from "./pages/services/Commercial";
import Retail from './pages/services/Retail';
import Industrial from './pages/services/Industrial';
import Turnkey from './pages/services/Turnkey';
import CSIEstimating from './pages/services/CSIEstimating';
import ValueEngineering from './pages/services/ValueEngineering';
import RenovationEstimating from './pages/services/RenovationEstimating';
import ExpertEstimating from './pages/services/ExpertEstimating';
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service-areas" element={<ServiceAreas />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/services/quantity-takeoff" element={<QuantityTakeoffServices />} />
          <Route path="/services/cost-estimation" element={<CostEstimationServices />} />
          <Route path="/services/specialized-estimating" element={<SpecializedEstimating />} />
          <Route path="/services/software-based-estimating" element={<SoftwareBasedEstimating />} />
          <Route path="/services/documentation-reporting" element={<DocumentationReporting />} />
          <Route path="/services/project-support" element={<ProjectSupportServices />} />
          <Route path="/services/construction-management" element={<ConstructionManagement />} />
          <Route path="/services/concrete-takeoff" element={<ConcreteTakeoffServices />} />
          <Route path="/services/masonry-takeoff" element={<MasonryTakeoffServices />} />
          <Route path="/services/carpentry-millwork" element={<CarpentryMillworkServices />} />
          <Route path="/services/drywall-insulation" element={<DrywallInsulationServices />} />
          <Route path="/services/roofing-waterproofing" element={<RoofingWaterproofingServices />} />
          <Route path="/services/flooring-takeoff" element={<FlooringTakeoffServices />} />
          <Route path="/services/doors-windows-glazing" element={<DoorsWindowsGlazingServices />} />
          <Route path="/services/structural-steel" element={<StructuralSteelServices />} />
          <Route path="/services/sitework-earthworks" element={<SiteworkEarthworksServices />} />
          <Route path="/services/preliminary-estimates" element={<PreliminaryEstimates />} />
          <Route path="/services/detailed-estimates" element={<DetailedEstimates />} />
          <Route path="/services/bid-estimates" element={<BidEstimates />} />
          <Route path="/services/conceptual-estimating" element={<ConceptualEstimating />} />
          <Route path="/services/dedicated-estimator" element={<DedicatedEstimator />} />
          <Route path="/services/industry" element={<Industry />} />
          <Route path="/services/government" element={<Government />} />
          <Route path="/services/residential" element={<Residential />} />
          <Route path="/services/commercial" element={<Commercial />} />
          <Route path="/services/retail" element={<Retail />} />
          <Route path="/services/industrial" element={<Industrial />} />
          <Route path="/services/turnkey" element={<Turnkey />} />
          <Route path="/services/csi-trades-estimating" element={<CSIEstimating />} />
          <Route path="/services/value-engineering" element={<ValueEngineering />} />
          <Route path="/services/renovation-estimating" element={<RenovationEstimating />} />
          <Route path="/services/expert-estimating" element={<ExpertEstimating />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
