import React from "react";
import { Box, Container, Typography } from "@mui/material";

const PromotionsHero = () => {
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
                    Special Offers
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
                    Exclusive rates and limited-time opportunities to save on your home financing.
                </Typography>
            </Container>
        </Box>
    );
};

export default PromotionsHero;
