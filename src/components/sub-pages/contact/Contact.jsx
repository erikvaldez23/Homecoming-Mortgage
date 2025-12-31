import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import ContactForm from "../../global/ContactForm";

const Contact = () => {
    return (
        <Box sx={{ width: "100%", overflowX: "hidden" }}>
            {/* Hero Section */}
            <Box
                sx={{
                    position: "relative",
                    pt: 20,
                    pb: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: "#050505",
                    overflow: "hidden",
                }}
            >
                <Container maxWidth="xl" sx={{ textAlign: "center" }}>
                    <Typography
                        variant="h1"
                        sx={{
                            fontWeight: 800,
                            fontSize: { xs: "12vw", md: "11vw" },
                            lineHeight: 0.9,
                            mb: 4,
                            color: "#0062cc",
                            letterSpacing: "-0.04em",
                        }}
                    >
                        Get In Touch
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{
                            color: "#fff",
                            maxWidth: 800,
                            mx: "auto",
                            lineHeight: 1.6,
                            opacity: 0.8,
                            fontWeight: 400
                        }}
                    >
                        Have a question? We'd love to hear from you.
                    </Typography>
                </Container>
            </Box>

            {/* Contact Content */}
            <Box sx={{ py: 10, bgcolor: "background.default" }}>
                <Container maxWidth="lg">
                    <Grid container spacing={8} justifyContent="center">
                        <Grid item xs={12} md={8}>
                            {/* Reusing the global contact form, wrapped in a styled box */}
                            <Box sx={{ p: { xs: 3, md: 6 }, bgcolor: "background.paper", borderRadius: 8, border: "1px solid rgba(255,255,255,0.05)" }}>
                                <ContactForm />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default Contact;
