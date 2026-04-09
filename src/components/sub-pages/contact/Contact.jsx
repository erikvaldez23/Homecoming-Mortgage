import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import { Helmet } from "react-helmet-async";
import CallToAction from "../../global/CTA";
import ContactForm from "./sections/ContactForm";
import ContactDetails from "./sections/ContactDetails";

const Contact = () => {
    return (
        <Box component="section" sx={{ width: "100%", overflowX: "hidden" }}>
            <Helmet>
                <title>Contact Us | Homecoming Mortgage</title>
                <meta name="description" content="Get in touch with Homecoming Mortgage to discuss your home financing options. Call, email, or visit our Dallas office." />
            </Helmet>
            {/* Hero Section */}
            <Box
                sx={{
                    position: "relative",
                    pt: 20,
                    pb: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    // bgcolor: "#0a0a0a",
                    overflow: "hidden",
                }}
            >
                <Container maxWidth="xl" sx={{ textAlign: "center" }}>
                    <Typography
                        variant="h1"
                        sx={{
                            fontWeight: 800,
                            fontSize: { xs: "12vw", md: "9vw" },
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
            <ContactDetails />
            <ContactForm />
            <CallToAction />
        </Box>
    );
};

export default Contact;
