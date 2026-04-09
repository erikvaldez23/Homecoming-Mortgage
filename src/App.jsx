import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import React, { useRef, useState, Suspense, lazy } from "react";
import { createTheme, ThemeProvider, Box, Dialog, IconButton } from "@mui/material";
import "./App.css";

// Config
import ScrollToTop from "./components/ScrollToTop";

// Global Components
import Topbar from "./components/global/Topbar";
import Footer from "./components/global/Footer";

// Landing Page
import Hero from "./components/landing/Hero";
import CTA from "./components/global/CTA";

const Services = lazy(() => import("./components/landing/Services"));
const LoanProducts = lazy(() => import("./components/landing/LoanProducts"));
const Testimonials = lazy(() => import("./components/landing/Testimonials"));

// Sub Pages
const AboutPage = lazy(() => import("./components/sub-pages/about/About"));
const PromotionsPage = lazy(() => import("./components/sub-pages/promotions/Promotions"));
const ContactPage = lazy(() => import("./components/sub-pages/contact/Contact"));
const PrivacyPolicy = lazy(() => import("./components/sub-pages/policy/PrivacyPolicy"));

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: "#0062cc", // Deep Sea Blue (Vibrant)
    },
    background: {
      default: "#191919ff", // Medium Grey
      // default: "#4c7eb3ff", // Deepest Navy
      // default: "#242424ff", // Deepest Navy
      paper: "#0f223d",   // Lighter Navy
    },
    text: {
      primary: "#ffffff",
      secondary: "#aabbd1", // Light Blue-Grey
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: { fontWeight: 800, letterSpacing: '-0.025em' },
    h2: { fontWeight: 800, letterSpacing: '-0.025em' },
    h3: { fontWeight: 700, letterSpacing: '-0.025em' },
    button: { textTransform: "none", fontWeight: 600, fontSize: '1rem' },
  },
  shape: {
    borderRadius: 16, // Rounded aesthetic
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50, // Pill buttons 
          padding: '12px 24px',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': { boxShadow: 'none' }
        }
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: { backgroundImage: 'none' } // Remove the tint
      }
    }
  },
});

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <Helmet>
          <title>Homecoming Mortgage | Texas Home Loans & Refinancing</title>
          <meta name="description" content="Homecoming Mortgage provides personalized home loans, refinancing options, and mortgage rates tailored for you in Dallas, TX and beyond." />
          <meta property="og:title" content="Homecoming Mortgage | Texas Home Loans & Refinancing" />
          <meta property="og:description" content="Homecoming Mortgage provides personalized home loans, refinancing options, and mortgage rates tailored for you in Dallas, TX and beyond." />
          <meta property="og:type" content="website" />
        </Helmet>
        <Box component="main" sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
        <Router>
          <ScrollToTop />
          <Topbar />
          <Suspense fallback={<Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0062cc', fontSize: '1.2rem', fontWeight: 600 }}>Loading...</Box>}>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <Services />
                    <LoanProducts />
                    <Testimonials />
                    <CTA />
                  </>
                }
              />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/promotions" element={<PromotionsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
            </Routes>
          </Suspense>
          <Footer />
        </Router>
        </Box>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
