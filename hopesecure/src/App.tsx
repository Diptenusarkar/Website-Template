import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import CreateCampaign from "./pages/CreateCampaign";
import CampaignExecution from "./pages/CampaignExecution";
import TemplateManagement from "./pages/TemplateManagement";
import EmployeeManagement from "./pages/EmployeeManagement";
import AdvancedReports from "./pages/AdvancedReports";
import SettingsPage from "./pages/SettingsPage";
import DomainManagement from "./pages/DomainManagement";
import AuthPage from "./pages/AuthPage";
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
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/campaign/create" element={<CreateCampaign />} />
          <Route path="/campaign/execute" element={<CampaignExecution />} />
          <Route path="/templates" element={<TemplateManagement />} />
          <Route path="/employees" element={<EmployeeManagement />} />
          <Route path="/domains" element={<DomainManagement />} />
          <Route path="/reports" element={<AdvancedReports />} />
          <Route path="/settings" element={<SettingsPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
