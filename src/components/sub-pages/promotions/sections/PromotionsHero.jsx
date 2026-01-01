import React from "react";
import { Box, Container, Typography } from "@mui/material";

const PromotionsHero = () => {
    return (
        <Box
            sx={{
                position: "relative",
                pt: 20,
                pb: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "#0a0a0a",
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
                    Special Offers
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
                    Exclusive rates and limited-time opportunities to save on your home financing.
                </Typography>
            </Container>
        </Box>
    );
};

export default PromotionsHero;
