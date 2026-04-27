import React from "react";
import { Box, Container, Typography } from "@mui/material";

const AboutHero = () => {
    return (
        <Box
            sx={{
                position: "relative",
                pt: 15,
                pb: 6,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
            }}
        >
            <Container maxWidth="lg" sx={{ textAlign: "center" }}>
                <Typography
                    variant="h1"
                    sx={{
                        fontWeight: 800,
                        fontSize: { xs: "3.5rem", md: "5rem" },
                        lineHeight: 1.1,
                        mb: 2,
                        color: "#0062cc",
                        letterSpacing: "-0.04em",
                    }}
                >
                    About Us
                </Typography>
                <Typography
                    variant="h5"
                    sx={{
                        color: "#fff",
                        maxWidth: 600,
                        mx: "auto",
                        lineHeight: 1.6,
                        opacity: 0.8,
                        fontWeight: 400,
                        fontSize: { xs: "1.1rem", md: "1.25rem" }
                    }}
                >
                    Building trust, one home at a time. We are dedicated to providing transparent and personalized mortgage solutions.
                </Typography>
            </Container>
        </Box>
    );
};

export default AboutHero;
