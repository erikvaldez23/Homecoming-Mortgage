// src/components/global/Topbar.jsx
import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Container,
  IconButton,
  Button,
  Stack,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useScrollTrigger,
  useTheme,
  useMediaQuery,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CallIcon from "@mui/icons-material/Call";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link as RouterLink, useLocation } from "react-router-dom";

/* ----------------------------- Brand Tokens ----------------------------- */
// Keeping the accent color or switching to something more "Mortgage/Financial"
// Let's stick with the gold/yellow accent for now as it fits "Homecoming" warmth, 
// but we might want to mute it slightly for a more premium financial look later.
const ACCENT = "#f2c230";
const ACCENT_HOVER = "#ffd95a";
const TOOLBAR_HEIGHT = 80;

/* Socials - Placeholder for now */
const INSTAGRAM_URL = "#";
const FACEBOOK_URL = "#";

/* Assets */
// We will use text if logo isn't available, or keep the logo placeholder
const BASE_URL = (import.meta?.env?.BASE_URL ?? "/").replace(/\/+/g, "/");
const LOGO_FULL = `${BASE_URL}logo.png`; // Ensure this exists or fallback to text

/* ------------------------------- Styled UI ------------------------------ */
const GlassBar = styled(AppBar)(({ theme }) => ({
  position: "fixed",
  top: 0,
  zIndex: theme.zIndex.appBar + 2,
  background: "transparent",
  boxShadow: "none",
  transition: "all 0.3s ease",

  "&.elevated": {
    background: "rgba(10, 10, 10, 0.8)",
    backdropFilter: "blur(12px)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
  },
}));

const LogoBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: 12,
  minWidth: 140,
  textDecoration: "none",
  color: "#fff",
}));

const NavLink = styled(MuiLink)(({ theme, active }) => ({
  position: "relative",
  fontWeight: 500,
  letterSpacing: 0.5,
  textDecoration: "none",
  fontSize: "0.95rem",
  color: alpha(theme.palette.common.white, 0.8),
  padding: "8px 16px",
  borderRadius: 50,
  transition: "all 0.2s ease",

  "&:hover": {
    color: "#fff",
    backgroundColor: "rgba(255, 255, 255, 0.1)"
  },

  ...(active && {
    color: "#000",
    backgroundColor: "#fff",
    fontWeight: 600,
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.9)"
    },
  }),
}));

const PhoneCTA = styled(Button)(({ theme }) => ({
  fontWeight: 600,
  borderRadius: 50,
  textTransform: "none",
  padding: "10px 24px",
  color: "#000",
  backgroundColor: "#fff",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "#f0f0f0",
    transform: "translateY(-1px)",
    boxShadow: "0 4px 12px rgba(255, 255, 255, 0.2)",
  },
}));

/* --------------------------------- Data --------------------------------- */
const NAV = [
  { label: "Home", to: "/" },
  // { label: "Services", to: "/services" }, // Anchor link or page
  { label: "About", to: "/about" },
  { label: "Promotions", to: "/promotions" },
  // { label: "Testimonials", to: "/testimonials" },
  { label: "Contact", to: "/contact" },
];

const PHONE = "555-555-5555"; // Placeholder

/* ------------------------------- Component ------------------------------- */
export default function Topbar() {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const [open, setOpen] = React.useState(false);
  const { pathname } = useLocation();

  const elevate = useScrollTrigger({ disableHysteresis: true, threshold: 50 });

  return (
    <>
      <GlassBar className={elevate ? "elevated" : ""}>
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{ minHeight: TOOLBAR_HEIGHT, justifyContent: "space-between" }}
          >
            {/* Left: Logo */}
            <LogoBox component={RouterLink} to="/" sx={{ display: 'flex', alignItems: 'center' }}>
              <img
                src="/logo.png"
                alt="Homecoming Mortgage"
                style={{ width: '200px', height: 'auto', display: 'block' }}
              />
            </LogoBox>

            {/* Center: Desktop Nav */}
            {isMdUp && (
              <Stack direction="row" spacing={1} alignItems="center">
                {NAV.map((item) => (
                  <NavLink
                    key={item.to}
                    component={RouterLink}
                    to={item.to}
                    active={pathname === item.to ? 1 : 0}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </Stack>
            )}

            {/* Right: CTA / Mobile Menu */}
            <Stack direction="row" spacing={2} alignItems="center">
              {isMdUp ? (
                <PhoneCTA
                  component="a"
                  href="https://texasfinancialresourcemgmt1.proiwebsites.com/loanportal/login"
                  target="_blank"
                  rel="noopener noreferrer"
                // startIcon={<CallIcon />} // Removing icon or changing it if preferred, user didn't specify icon but "Apply Now" usually fits without or with an Arrow
                >
                  Apply Now
                </PhoneCTA>
              ) : (
                <IconButton
                  onClick={() => setOpen(true)}
                  sx={{ color: "#fff" }}
                >
                  <MenuRoundedIcon />
                </IconButton>
              )}
            </Stack>
          </Toolbar>
        </Container>
      </GlassBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            width: "100%",
            maxWidth: 300,
            background: "#0a0a0a",
            color: "#fff",
            borderLeft: "1px solid rgba(255,255,255,0.1)",
          },
        }}
      >
        <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end" }}>
          <IconButton onClick={() => setOpen(false)} sx={{ color: "#fff" }}>
            <CloseRoundedIcon />
          </IconButton>
        </Box>
        <List>
          {NAV.map((item) => (
            <ListItem key={item.to} disablePadding>
              <ListItemButton
                component={RouterLink}
                to={item.to}
                onClick={() => setOpen(false)}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{ fontSize: '1.2rem', fontWeight: 600 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
