import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Book from "./pages/Book";
import OnArtificialAttention from "./pages/book/OnArtificialAttention";
import OnNewWorld from "./pages/book/OnNewWorld";
import OnEducation from "./pages/book/OnEducation";
import OnLove from "./pages/book/OnLove";
import OnBodyLanguage from "./pages/book/OnBodyLanguage";
import OnFamily from "./pages/book/OnFamily";
import ArchitecturalSpaces from "./pages/book/ArchitecturalSpaces";
import EverydayLife from "./pages/book/EverydayLife";
import RitualsAndMysteries from "./pages/book/RitualsAndMysteries";
import OnArt from "./pages/book/OnArt";
import SenseOfTime from "./pages/book/SenseOfTime";
import OnCommunity from "./pages/book/OnCommunity";
import OnWar from "./pages/book/OnWar";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/book" element={<Book />} />
          <Route path="/book/on-artificial-attention" element={<OnArtificialAttention />} />
          <Route path="/book/on-new-world" element={<OnNewWorld />} />
          <Route path="/book/on-education" element={<OnEducation />} />
          <Route path="/book/on-love" element={<OnLove />} />
          <Route path="/book/on-body-language" element={<OnBodyLanguage />} />
          <Route path="/book/on-family" element={<OnFamily />} />
          <Route path="/book/architectural-spaces" element={<ArchitecturalSpaces />} />
          <Route path="/book/everyday-life" element={<EverydayLife />} />
          <Route path="/book/rituals-and-mysteries" element={<RitualsAndMysteries />} />
          <Route path="/book/on-art" element={<OnArt />} />
          <Route path="/book/sense-of-time" element={<SenseOfTime />} />
          <Route path="/book/on-community" element={<OnCommunity />} />
          <Route path="/book/on-war" element={<OnWar />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
