import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import EmotionTwin from "./pages/EmotionTwin";
import PeerPods from "./pages/PeerPods";
import Journal from "./pages/Journal";
import Calmscapes from "./pages/Calmscapes";
import CounselorCare from "./pages/CounselorCare";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/emotion-twin" element={<EmotionTwin />} />
          <Route path="/peer-pods" element={<PeerPods />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/counselor" element={<CounselorCare />} />
          <Route path="/calmscapes" element={<Calmscapes />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
