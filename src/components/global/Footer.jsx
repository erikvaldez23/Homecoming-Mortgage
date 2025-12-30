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
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  // Brand colors updated to match site theme
  const BRAND_BLUE = "#0062cc";
  const BG_COLOR = "#050505";

  const linkStyles = {
    color: BRAND_BLUE,
    textDecoration: "none",
    fontSize: "0.85rem",
    fontWeight: 500,
    display: "block",
    mb: 0.5,
    "&:hover": {
      textDecoration: "underline",
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
          <Grid item xs={12} md={4} lg={3}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
                <a href="mailto:info@homecomingmortgage.com" style={{ ...linkStyles, display: 'inline', mb: 0 }}>
                  info@homecomingmortgage.com
                </a>
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                <a href="tel:+11234567890" style={{ ...linkStyles, display: 'inline', mb: 0 }}>
                  123-456-7890
                </a>
              </Typography>
            </Box>

            <Stack direction="row" spacing={1}>
              <IconButton size="small" sx={{ color: BRAND_BLUE, p: 0, pr: 1 }}>
                <FacebookIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" sx={{ color: BRAND_BLUE, p: 0, pr: 1 }}>
                <InstagramIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" sx={{ color: BRAND_BLUE, p: 0, pr: 1 }}>
                <TwitterIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" sx={{ color: BRAND_BLUE, p: 0, pr: 1 }}>
                <LinkedInIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Grid>

          {/* Column 2: Address */}
          <Grid item xs={12} md={4} lg={3}>
            <Typography variant="body2" sx={{ fontWeight: 500, lineHeight: 1.6 }}>
              123 Address Lane, <br />
              Suite 100, Dallas, TX <br />
              75201, USA
            </Typography>
          </Grid>

          {/* Column 3: Legal & Policy */}
          <Grid item xs={12} md={4} lg={3}>
            <Box component="a" href="#" sx={linkStyles}>Privacy Policy</Box>
            <Box component="a" href="#" sx={linkStyles}>Accessibility Statement</Box>
            <Box component="a" href="#" sx={linkStyles}>Terms & Conditions</Box>
            <Box component="a" href="#" sx={linkStyles}>Refund Policy</Box>
          </Grid>
        </Grid>

        {/* Middle Section: Massive Typography */}
        <Box sx={{ width: "100%", overflow: "hidden", mb: 8 }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "8vw", md: "9vw" }, // Reduced to fit "Homecoming Mortgage"
              fontWeight: 400,
              lineHeight: 1.5,
              whiteSpace: "nowrap",
              color: BRAND_BLUE,
              fontFamily: '"Inter", sans-serif', // Ensure clean sans-serif
              letterSpacing: "-0.04em",
              textAlign: "center", // Center it to look nice
              width: "100%",
              display: "block",
            }}
          >
            Homecoming Mortgage
          </Typography>
        </Box>

        {/* Bottom Section: Copyright */}
        <Divider sx={{ borderColor: "rgba(0, 98, 204, 0.1)", mb: 3 }} />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <Typography variant="caption" sx={{ color: BRAND_BLUE, opacity: 0.8 }}>
            © {new Date().getFullYear()} by Homecoming Mortgage.
          </Typography>
        </Box>

      </Container>
    </Box>
  );
};

export default Footer;
