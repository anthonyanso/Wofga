// Wouter removed
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import { useAOS } from "@/hooks/useAOS";
import Preloader from "@/components/Preloader";
import { useState, useEffect } from 'react';

// Pages
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import ServiceDetails from "@/pages/ServiceDetails";
import Portfolio from "@/pages/Portfolio";
import Contact from "@/pages/Contact";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import Team from "@/pages/Team";
import Testimonials from "@/pages/Testimonials";
import Pricing from "@/pages/Pricing";
import FAQ from "@/pages/FAQ";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import CookiePolicy from "@/pages/CookiePolicy";
import NotFound from "@/pages/not-found";

// components
import ScrollToTop from "@/components/ScrollToTop";

// Simple custom router based on window.location.pathname
function Router() {
  useAOS();
  const path = window.location.pathname;
  let PageComponent = null;

  // Basic static routing
  switch (true) {
    case path === "/":
      PageComponent = Home;
      break;
    case path === "/about":
      PageComponent = About;
      break;
    case path === "/services":
      PageComponent = Services;
      break;
    case /^\/services\//.test(path):
      PageComponent = ServiceDetails;
      break;
    case path === "/portfolio":
      PageComponent = Portfolio;
      break;
    case path === "/contact":
      PageComponent = Contact;
      break;
    case path === "/blog":
      PageComponent = Blog;
      break;
    case /^\/blog\//.test(path):
      PageComponent = BlogPost;
      break;
    case path === "/team":
      PageComponent = Team;
      break;
    case path === "/testimonials":
      PageComponent = Testimonials;
      break;
    case path === "/pricing":
      PageComponent = Pricing;
      break;
    case path === "/faq":
      PageComponent = FAQ;
      break;
    case path === "/privacy-policy":
      PageComponent = PrivacyPolicy;
      break;
    case path === "/terms-of-service":
      PageComponent = TermsOfService;
      break;
    case path === "/cookie-policy":
      PageComponent = CookiePolicy;
      break;
    default:
      PageComponent = NotFound;
  }

  return (
    <Layout>
      <PageComponent />
    </Layout>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader isLoading={isLoading} onComplete={() => setIsLoading(false)} />
      {!isLoading && (
        <QueryClientProvider client={queryClient}>
          <ScrollToTop />
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </QueryClientProvider>
      )}
    </>
  );
}

export default App;
