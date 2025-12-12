import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Book from "./pages/Book";
import ChapterMarkdown from "./pages/ChapterMarkdown";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/book" element={<Book />} />
          {/* All chapters now use markdown-based component */}
          <Route path="/book/on-artificial-attention" element={<ChapterMarkdown />} />
          <Route path="/book/on-new-world" element={<ChapterMarkdown />} />
          <Route path="/book/on-education" element={<ChapterMarkdown />} />
          <Route path="/book/on-love" element={<ChapterMarkdown />} />
          <Route path="/book/on-body-language" element={<ChapterMarkdown />} />
          <Route path="/book/on-family" element={<ChapterMarkdown />} />
          <Route path="/book/architectural-spaces" element={<ChapterMarkdown />} />
          <Route path="/book/everyday-life" element={<ChapterMarkdown />} />
          <Route path="/book/rituals-and-mysteries" element={<ChapterMarkdown />} />
          <Route path="/book/on-art" element={<ChapterMarkdown />} />
          <Route path="/book/sense-of-time" element={<ChapterMarkdown />} />
          <Route path="/book/on-community" element={<ChapterMarkdown />} />
          <Route path="/book/on-war" element={<ChapterMarkdown />} />
          <Route path="/book/on-death" element={<ChapterMarkdown />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;
