import { HashRouter as Router, Routes, Route } from "react-router-dom";
import React, { useRef, useState } from "react";
import { createTheme, ThemeProvider, Box, Dialog, IconButton } from "@mui/material";
import "./App.css";

// Config
import ScrollToTop from "./components/ScrollToTop";

// Global Components
import Topbar from "./components/global/Topbar";
import Footer from "./components/global/Footer";
import ContactForm from "./components/global/ContactForm";

// Landing Page
import Hero from "./components/landing/Hero";
import Services from "./components/landing/Services";
import About from "./components/landing/About";
import LoanProducts from "./components/landing/LoanProducts";
import Testimonials from "./components/landing/Testimonials";
import CTA from "./components/landing/CTA";

// Sub Pages

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: "#0062cc", // Deep Sea Blue (Vibrant)
    },
    background: {
      default: "#020d1c", // Deepest Navy
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
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
        <Router>
          <ScrollToTop />
          <Topbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Services />
                  <About />
                  <LoanProducts />
                  <Testimonials />
                  <CTA />
                </>
              }
            />
          </Routes>
          <Footer />
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;
