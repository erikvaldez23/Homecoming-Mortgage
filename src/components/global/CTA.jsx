// src/components/global/CTA.jsx
import React, { useMemo, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
  Dialog,
  IconButton,
  Stack,
  Container
} from "@mui/material";
import { motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

/* ---- Brand tokens ---- */
const BG_COLOR = "#0062cc"; // Deep Dark to match page bottoms
const CTA_PRIMARY = "#ffffff"; // White for contrast against blue
const TEXT_LIGHT = "#fff";

/* ---- Copy registry ---- */
const CTA_REGISTRY = {
  "purchase": {
    headline: "Find Your Dream Home Today",
    body: "Get pre-approved quickly and shop with confidence. We offer competitive rates and personalized support.",
  },
  "refinance": {
    headline: "Lower Your Monthly Payments",
    body: "Take advantage of current market rates to reduce your interest or change your loan term.",
  },
  "commercial": {
    headline: "Expand Your Business Portfolio",
    body: "Tailored commercial financing solutions for office, retail, and multi-family properties.",
  },
  "debt-consolidation": {
    headline: "Simplify Your Finances",
    body: "Consolidate high-interest debt into one manageable monthly payment using your home's equity.",
  },
  "private-mortgage": {
    headline: "Flexible Lending Solutions",
    body: "Alternative financing options when traditional banks say no. Fast approvals and common-sense underwriting.",
  },
  "renewal": {
    headline: "Secure Your Best Renewal Rate",
    body: "Don't just sign the lender's renewal letter. Compare rates and options to ensure you're getting the best deal.",
  },

  _default: {
    headline: "Let's Build Your Future.",
    body: "Whether you're buying, refinancing, or investing, our expert team is here to guide you."
  },
};

export default function CallToAction({
  formUrl = "/contact",
  useModal = false,
  phoneHref = "tel:+19729916115",
  onCtaClick,
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [openModal, setOpenModal] = useState(false);

  const copy = useMemo(
    () => CTA_REGISTRY[serviceId] || CTA_REGISTRY._default,
    [serviceId]
  );

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
    } else if (location.pathname === formUrl) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate(formUrl);
    }
  };

  return (
    <Box
      sx={{
        py: 15,
        bgcolor: BG_COLOR,
        color: TEXT_LIGHT,
        borderTop: "1px solid rgba(255,255,255,0.05)",
        overflow: "hidden"
      }}
    >
      <Container maxWidth={false}>
        <Stack
          spacing={6}
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Box>
            <Typography
              variant={isMobile ? "h3" : "h1"}
              sx={{
                fontWeight: 800,
                letterSpacing: '-0.03em',
                mb: 2,
                background: "linear-gradient(135deg, #fff 0%, #90caf9 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: { xs: "3rem", md: "5rem" }
              }}
            >
              {copy.headline}
            </Typography>

            <Typography
              variant="h5"
              sx={{
                color: 'rgba(255,255,255,0.85)',
                maxWidth: 700,
                mx: "auto",
                lineHeight: 1.6,
                fontWeight: 300
              }}
            >
              {copy.body}
            </Typography>
          </Box>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
            <Button
              onClick={handlePrimary}
              endIcon={<ArrowForwardIcon />}
              sx={{
                bgcolor: "#0a0a0a",
                color: "#fff",
                fontSize: "1.1rem",
                fontWeight: 700,
                px: 5,
                py: 2,
                borderRadius: 50,
                textTransform: "none",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                "&:hover": {
                  bgcolor: "#f5f5f5",
                  color: "#000",
                  transform: "translateY(-2px)",
                  boxShadow: "0 15px 35px rgba(0, 0, 0, 0.2)"
                },
                transition: "all 0.3s ease"
              }}
            >
              Get Pre-Approved
            </Button>
            <Button
              onClick={() => (window.location.href = phoneHref)}
              variant="outlined"
              sx={{
                color: "#fff",
                fontSize: "1.1rem",
                fontWeight: 600,
                px: 5,
                py: 2,
                borderRadius: 50,
                textTransform: "none",
                borderColor: "rgba(255,255,255,0.2)",
                "&:hover": {
                  borderColor: "#fff",
                  bgcolor: "rgba(255,255,255,0.05)"
                }
              }}
            >
              Call Us Today
            </Button>
          </Stack>
        </Stack>
      </Container>

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
