
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import MentalHealthTipsPage from "@/pages/MentalHealthTipsPage";
import Journal from "@/pages/Journal";
import MoodTracker from "@/pages/MoodTracker";
import Talk from "@/pages/Talk";
import Signup from "@/pages/Signup";
import Login from "@/pages/Login";
import Assessment from "@/pages/Assessment";
import AssessmentResults from "@/pages/AssessmentResults";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/tips" element={<MentalHealthTipsPage />} />
              <Route path="/journal" element={<Journal />} />
              <Route path="/mood" element={<MoodTracker />} />
              <Route path="/talk" element={<Talk />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/assessment" element={<Assessment />} />
              <Route path="/assessment/results" element={<AssessmentResults />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
