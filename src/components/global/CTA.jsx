// src/components/global/CTA.jsx
import React, { useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
  Dialog,
  IconButton,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import { motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";

/* ---- Brand tokens ---- */
const BG = "rgba(255, 255, 255, 0.05)"; // Transparent
const CTA_PRIMARY = "#0062cc"; // Deep Sea Blue
const TEXT_LIGHT = "#fff";

/* Match button widths across variants */
const BTN_WIDTH = { xs: "100%", sm: 220, md: 240 };

/* ---- Copy registry ---- */
const CTA_REGISTRY = {
  "purchase": {
    headline: "Find Your Dream Home Today",
    body:
      "Get pre-approved quickly and shop with confidence. We offer competitive rates and personalized support for your home buying journey.",
  },
  "refinance": {
    headline: "Lower Your Monthly Payments",
    body:
      "Take advantage of current market rates to reduce your interest, change your loan term, or access your home's equity.",
  },
  "commercial": {
    headline: "Expand Your Business Portfolio",
    body:
      "Tailored commercial financing solutions for office, retail, and multi-family properties. Let's help your business grow.",
  },
  "debt-consolidation": {
    headline: "Simplify Your Finances",
    body:
      "Consolidate high-interest debt into one manageable monthly payment using your home's equity.",
  },
  "private-mortgage": {
    headline: "Flexible Lending Solutions",
    body:
      "Alternative financing options when traditional banks say no. Fast approvals and common-sense underwriting.",
  },
  "renewal": {
    headline: "Secure Your Best Renewal Rate",
    body:
      "Don't just sign the lender's renewal letter. Compare rates and options to ensure you're getting the best deal possible.",
  },

  _default: {
    headline: "Let's Build Your Future",
    body: "Whether you're buying, refinancing, or investing, our expert team is here to guide you every step of the way."
  },
};

export default function CallToAction({
  formUrl = "/contact",      // internal route or full external URL
  useModal = false,        // true = open modal with embedded form
  phoneHref = "tel:+18005550000",
  onCtaClick,              // Optional handler to open global modal
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

  const copy = useMemo(
    () => CTA_REGISTRY[serviceId] || CTA_REGISTRY._default,
    [serviceId]
  );

  // Animation variants
  const fadeSlideVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const handlePrimary = () => {
    if (onCtaClick) {
      onCtaClick();
      return;
    }
    if (useModal) {
      setOpenModal(true);
      return;
    }
    if (/^https?:\/\//i.test(formUrl)) {
      window.location.href = formUrl;
    } else {
      navigate(formUrl);
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        py: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: BG,
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderRadius: 8,
        border: '1px solid rgba(255,255,255,0.1)',
        color: TEXT_LIGHT,
        mt: 8,
        mb: 8,
        overflow: "hidden",
        mx: 'auto'
      }}
    >
      <Box sx={{ position: "relative", zIndex: 2 }}>
        <Typography
          variant={isMobile ? "h4" : "h2"}
          component={motion.h3}
          variants={fadeSlideVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          sx={{ fontWeight: 800, letterSpacing: '-0.02em', mb: 2 }}
        >
          {copy.headline}
        </Typography>

        <Typography
          variant="body1"
          component={motion.p}
          variants={fadeSlideVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          sx={{
            mb: 5,
            fontSize: isMobile ? "1rem" : "1.2rem",
            lineHeight: 1.6,
            color: 'text.secondary',
            opacity: 0.9,
            mx: "auto",
          }}
        >
          {copy.body}
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          {/* Primary — Solid Blue */}
          <Button
            component={motion.button}
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={handlePrimary}
            sx={{
              minWidth: { xs: '100%', sm: 200 },
              backgroundColor: CTA_PRIMARY,
              color: "#fff",
              fontWeight: 700,
              px: 4,
              py: 1.5,
              borderRadius: "50px",
              boxShadow: '0 4px 14px 0 rgba(0, 98, 204, 0.39)',
              textTransform: "none",
              fontSize: "1.1rem",
              "&:hover": {
                backgroundColor: "#0056b3",
                boxShadow: '0 6px 20px rgba(0, 98, 204, 0.23)'
              }
            }}
          >
            Get Pre-Approved
          </Button>

          {/* Secondary — Outlined */}
          <Button
            onClick={() => (window.location.href = phoneHref)}
            sx={{
              minWidth: { xs: '100%', sm: 200 },
              borderRadius: "50px",
              px: 4,
              py: 1.5,
              fontWeight: 700,
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.3)",
              backgroundColor: "transparent",
              textTransform: "none",
              fontSize: "1.1rem",
              "&:hover": {
                borderColor: "#fff",
                backgroundColor: "rgba(255,255,255,0.1)",
              },
            }}
          >
            Call Us Today
          </Button>
        </Box>
      </Box>

      {/* Optional modal with embedded form */}
      {useModal && (
        <Dialog open={openModal} onClose={() => setOpenModal(false)} fullWidth maxWidth="lg">
          <Box sx={{ position: "relative" }}>
            <IconButton
              onClick={() => setOpenModal(false)}
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                color: "#fff",
                backgroundColor: "rgba(0,0,0,0.5)",
                zIndex: 1,
                "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
              }}
            >
              <CloseIcon />
            </IconButton>
            <iframe
              src={formUrl}
              width="100%"
              height="800"
              style={{ border: "none" }}
              title="Service Quote"
            />
          </Box>
        </Dialog>
      )}
    </Box>
  );
}
