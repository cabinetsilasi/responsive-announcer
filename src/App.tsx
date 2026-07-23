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
          <Route path="/erasmus" element={<Erasmus />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
