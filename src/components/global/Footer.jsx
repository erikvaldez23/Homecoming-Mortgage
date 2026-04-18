import React from "react";
import {
  Box,
  Typography,
  Container,
  Stack,
  IconButton,
  Divider,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  // Brand colors updated to match site theme
  const BRAND_BLUE = "#0062cc";
  const BG_COLOR = "#0a0a0a";

  const linkStyles = {
    color: BRAND_BLUE,
    textDecoration: "none",
    fontSize: "0.85rem",
    fontWeight: 500,
    display: "block",
    mb: 0.5,
    "&:hover": {
      color: "#ffffff",
      textDecoration: "none",
    },
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: BG_COLOR,
        color: BRAND_BLUE,
        pt: 10,
        pb: 4,
        overflow: "hidden", // Ensure massive text doesn't overflow horizontally if it gets too big
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 8 } }}>
        {/* Top Section: 3 Columns */}
        <Grid container spacing={4} sx={{ mb: 10 }}>

          {/* Column 1: Contact & Socials */}
          <Grid item xs={12} md={4} lg={3} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                <Box component="a" href="mailto:info@homecomingmortgage.com" sx={{ ...linkStyles, display: 'inline', mb: 0 }}>
                  Pirouz@mortgagehmc.com
                </Box>
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                Cell: <Box component="a" href="tel:+19723390630" sx={{ ...linkStyles, display: 'inline', mb: 0 }}>(972) 339-0630</Box>
                <br />
                Office: <Box component="a" href="tel:+19729916115" sx={{ ...linkStyles, display: 'inline', mb: 0 }}>(972) 991-6115</Box>
                <br />
                NMLS: <Box component="span" sx={{ ...linkStyles, display: 'inline', mb: 0, cursor: 'default', '&:hover': { color: 'inherit' } }}> 2582358 </Box>
              </Typography>
            </Box>

            {/* Desktop Socials */}
            {/* <Stack direction="row" spacing={1} sx={{ display: { xs: 'none', md: 'flex' } }}>
              <IconButton size="small" sx={{ color: BRAND_BLUE, p: 0, pr: 1, "&:hover": { color: "#ffffff", backgroundColor: "transparent" } }}>
                <FacebookIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" sx={{ color: BRAND_BLUE, p: 0, pr: 1, "&:hover": { color: "#ffffff", backgroundColor: "transparent" } }}>
                <InstagramIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" sx={{ color: BRAND_BLUE, p: 0, pr: 1, "&:hover": { color: "#ffffff", backgroundColor: "transparent" } }}>
                <TwitterIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" sx={{ color: BRAND_BLUE, p: 0, pr: 1, "&:hover": { color: "#ffffff", backgroundColor: "transparent" } }}>
                <LinkedInIcon fontSize="small" />
              </IconButton>
            </Stack> */}
          </Grid>

          {/* Column 2: Address */}
          <Grid item xs={12} md={4} lg={3} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="body2" sx={{ fontWeight: 500, lineHeight: 1.6 }}>
              13601 Preston Rd. <br />
              Suite 102E, Dallas, TX <br />
              75240, USA
            </Typography>
          </Grid>

          {/* Column 3: Legal & Policy */}
          <Grid item xs={12} md={4} lg={3} sx={{ textAlign: { xs: 'center', md: 'left' }, display: { xs: 'none', md: 'block' } }}>
            <Box component={Link} to="/privacy" sx={linkStyles}>Privacy Policy</Box>
            <Box component={Link} to="/contact" sx={linkStyles}>Contact Us</Box>
            <Box component="a" href="https://texasfinancialresourcemgmt1.proiwebsites.com/loanportal/login" sx={linkStyles}>Apply Now</Box>
            <Box component={Link} to="/about" sx={linkStyles}>About Us</Box>
          </Grid>
        </Grid>

        {/* Middle Section: Massive Typography */}
        <Box sx={{ width: "100%", overflow: "hidden", mb: 8 }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "15vw", md: "9vw" }, // Larger on mobile since it's split
              fontWeight: 400,
              lineHeight: { xs: 1.1, md: 1.5 },
              whiteSpace: "normal",
              color: BRAND_BLUE,
              fontFamily: '"Inter", sans-serif',
              letterSpacing: "-0.04em",
              textAlign: "center",
              width: "100%",
              display: "block",
            }}
          >
            <Box component="span" sx={{ display: { xs: 'block', md: 'inline' } }}>Homecoming</Box>
            <Box component="span" sx={{ display: { xs: 'block', md: 'inline' } }}> Mortgage</Box>
          </Typography>
        </Box>

        {/* Mobile Socials - Centered under big text */}
        <Stack direction="row" spacing={2} justifyContent="center" sx={{ display: { xs: 'flex', md: 'none' }, mb: 4 }}>
          <IconButton size="small" sx={{ color: BRAND_BLUE, "&:hover": { color: "#ffffff", backgroundColor: "transparent" } }}>
            <FacebookIcon fontSize="medium" />
          </IconButton>
          <IconButton size="small" sx={{ color: BRAND_BLUE, "&:hover": { color: "#ffffff", backgroundColor: "transparent" } }}>
            <InstagramIcon fontSize="medium" />
          </IconButton>
          <IconButton size="small" sx={{ color: BRAND_BLUE, "&:hover": { color: "#ffffff", backgroundColor: "transparent" } }}>
            <TwitterIcon fontSize="medium" />
          </IconButton>
          <IconButton size="small" sx={{ color: BRAND_BLUE, "&:hover": { color: "#ffffff", backgroundColor: "transparent" } }}>
            <LinkedInIcon fontSize="medium" />
          </IconButton>
        </Stack>

        {/* Bottom Section: Copyright */}
        <Divider sx={{ borderColor: "rgba(0, 98, 204, 0.1)", mb: 3 }} />

        <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'space-between' }, flexWrap: 'wrap' }}>
          <Typography variant="caption" sx={{ color: BRAND_BLUE, opacity: 0.8, textAlign: { xs: 'center', md: 'left' } }}>
            © {new Date().getFullYear()} by Homecoming Mortgage.
          </Typography>
        </Box>

      </Container >
    </Box >
  );
};

export default Footer;
