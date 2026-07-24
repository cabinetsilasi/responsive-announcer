import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Documente from "./pages/Documente";
import Ceosp from "./pages/Ceosp";
import Erasmus from "./pages/Erasmus";
import Viziunea from "./pages/Viziunea";
import Echipa from "./pages/Echipa";
import InvatamantPrimar from "./pages/InvatamantPrimar";
import ConsEdu from "./pages/ConsEdu";
import Contact from "./pages/Contact";
import Revista from "./pages/Revista";
import RevistaConfident from "./pages/RevistaConfident";
import Organigrama from "./pages/Organigrama";
import ReteaCabinete from "./pages/ReteaCabinete";
import Servicii from "./pages/Servicii";
import OfertaEducationala from "./pages/OfertaEducationala";
import ProiectePrograme from "./pages/ProiectePrograme";
import Campanii from "./pages/Campanii";
import Neurolimpics from "./pages/Neurolimpics";
import StudiiCercetari from "./pages/StudiiCercetari";
import ResurseElevi from "./pages/ResurseElevi";
import ResurseEleviCes from "./pages/ResurseEleviCes";
import ResurseLogopedie from "./pages/ResurseLogopedie";
import ResurseParinti from "./pages/ResurseParinti";
import ResurseProfesori from "./pages/ResurseProfesori";
import Legislatie from "./pages/Legislatie";
import PrevenireHartuire from "./pages/PrevenireHartuire";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/echipa" element={<Echipa />} />
          <Route path="/viziunea" element={<Viziunea />} />
          <Route path="/invatamant-primar" element={<InvatamantPrimar />} />
          <Route path="/consedu" element={<ConsEdu />} />
          <Route path="/documente" element={<Documente />} />
          <Route path="/ceosp" element={<Ceosp />} />
          <Route path="/revista" element={<Revista />} />
          <Route path="/revista-confident" element={<RevistaConfident />} />
          <Route path="/erasmus" element={<Erasmus />} />
          <Route path="/organigrama" element={<Organigrama />} />
          <Route path="/organigrama/organigrama" element={<Organigrama />} />
          <Route path="/organigrama/retea-cabinete" element={<ReteaCabinete />} />
          <Route path="/retea-cabinete" element={<ReteaCabinete />} />
          <Route path="/oferta/servicii" element={<Servicii />} />
          <Route path="/servicii" element={<Servicii />} />
          <Route path="/oferta/oferta-educationala" element={<OfertaEducationala />} />
          <Route path="/oferta-educationala" element={<OfertaEducationala />} />
          <Route path="/oferta/proiecte-programe" element={<ProiectePrograme />} />
          <Route path="/proiecte-programe" element={<ProiectePrograme />} />
          <Route path="/oferta/campanii" element={<Campanii />} />
          <Route path="/campanii" element={<Campanii />} />
          <Route path="/resurse/neurolimpics" element={<Neurolimpics />} />
          <Route path="/neurolimpics" element={<Neurolimpics />} />
          <Route path="/resurse/studii-cercetari" element={<StudiiCercetari />} />
          <Route path="/studii-cercetari" element={<StudiiCercetari />} />
          <Route path="/resurse/resurse-elevi" element={<ResurseElevi />} />
          <Route path="/resurse-elevi" element={<ResurseElevi />} />
          <Route path="/resurse/resurse-elevi-ces" element={<ResurseEleviCes />} />
          <Route path="/resurse-elevi-ces" element={<ResurseEleviCes />} />
          <Route path="/resurse/resurse-logopedie" element={<ResurseLogopedie />} />
          <Route path="/resurse-logopedie" element={<ResurseLogopedie />} />
          <Route path="/resurse/resurse-parinti" element={<ResurseParinti />} />
          <Route path="/resurse-parinti" element={<ResurseParinti />} />
          <Route path="/resurse/resurse-profesori" element={<ResurseProfesori />} />
          <Route path="/resurse-profesori" element={<ResurseProfesori />} />
          <Route path="/resurse/legislatie" element={<Legislatie />} />
          <Route path="/legislatie" element={<Legislatie />} />
          <Route path="/prevenire/combatere-hartuire" element={<PrevenireHartuire />} />
          <Route path="/prevenire-hartuire" element={<PrevenireHartuire />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
