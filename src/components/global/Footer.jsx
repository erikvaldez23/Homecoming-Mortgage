import React from "react";
import {
  Box,
  Typography,
  Container,
  Stack,
  IconButton,
  Divider,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#050505",
        color: "rgba(255, 255, 255, 0.7)",
        py: 8,
        borderTop: "1px solid rgba(255, 255, 255, 0.05)",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          justifyContent="space-between"
          alignItems={{ xs: "center", md: "flex-start" }}
          textAlign={{ xs: "center", md: "left" }}
        >
          {/* Brand */}
          <Box>
            <Typography variant="h6" sx={{ color: "#fff", fontWeight: 700, mb: 1 }}>
              Homecoming Mortgage
            </Typography>
            <Typography variant="body2" sx={{ maxWidth: 300 }}>
              Helping you find the perfect foundation for your future with premium mortgage solutions.
            </Typography>
          </Box>

          {/* Links */}
          <Stack direction="row" spacing={4}>
            <Box>
              <Typography variant="subtitle2" sx={{ color: "#fff", mb: 2 }}>Company</Typography>
              <Stack spacing={1}>
                <Typography variant="body2" component="a" href="#" sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { color: '#fff' } }}>About</Typography>
                <Typography variant="body2" component="a" href="#" sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { color: '#fff' } }}>Careers</Typography>
                <Typography variant="body2" component="a" href="#" sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { color: '#fff' } }}>Contact</Typography>
              </Stack>
            </Box>
            <Box>
              <Typography variant="subtitle2" sx={{ color: "#fff", mb: 2 }}>Resources</Typography>
              <Stack spacing={1}>
                <Typography variant="body2" component="a" href="#" sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { color: '#fff' } }}>Blog</Typography>
                <Typography variant="body2" component="a" href="#" sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { color: '#fff' } }}>Calculators</Typography>
                <Typography variant="body2" component="a" href="#" sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { color: '#fff' } }}>Privacy Policy</Typography>
              </Stack>
            </Box>
          </Stack>

          {/* Socials */}
          <Stack direction="row" spacing={1}>
            <IconButton sx={{ color: 'inherit', '&:hover': { color: '#fff' } }}><FacebookIcon /></IconButton>
            <IconButton sx={{ color: 'inherit', '&:hover': { color: '#fff' } }}><InstagramIcon /></IconButton>
            <IconButton sx={{ color: 'inherit', '&:hover': { color: '#fff' } }}><LinkedInIcon /></IconButton>
          </Stack>
        </Stack>

        <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.1)", my: 4 }} />

        <Typography variant="body2" align="center" sx={{ opacity: 0.5 }}>
          © {new Date().getFullYear()} Homecoming Mortgage. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
