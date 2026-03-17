import React from "react";
import { Box, Container, Typography } from "@mui/material";

const AboutHero = () => {
    return (
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
                    About Us
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
                    Building trust, one home at a time. We are dedicated to providing transparent and personalized mortgage solutions.
                </Typography>
            </Container>
        </Box>
    );
};

export default AboutHero;
