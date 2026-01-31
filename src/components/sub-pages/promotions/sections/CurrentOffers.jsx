import React from "react";
import { Box, Container, Typography, Stack, Button, Chip, useTheme, useMediaQuery } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const offers = [
    {
        title: "1-0 BUYDOWN Refinance",
        description: "While the market continues to improve, take advantage of the 1-0 buydown option and save a considerable amount on your monthly payment until you are able to switch to a fixed rate (Buydown & Closing costs covered).",
        expiry: "Valid until Dec 31, 2025",
        code: "1-0BUYDOWN",
        color: "#0062cc",
    },
    // {
    //     title: "Refinance Rate Drop",
    //     description: "Lock in a rate 0.25% lower than advertised when you switch from another lender.",
    //     expiry: "Valid for applications submitted this month",
    //     code: "SWITCH&SAVE",
    //     color: "#7c3aed",
    // },
    // {
    //     title: "Eco-Friendly Home Bonus",
    //     description: "Buying an energy-efficient home? Receive a free appraisal and discounted origination fees.",
    //     expiry: "Ongoing promotion",
    //     code: "GREENHOME",
    //     color: "#10b981",
    // },
];

const CurrentOffers = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Box sx={{ py: 15, bgcolor: "#0a0a0a", color: "#fff" }}>
            <Container maxWidth="lg">
                <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 10, borderBottom: "1px solid rgba(255,255,255,0.1)", pb: 4 }}>
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 800,
                            fontSize: { xs: "3rem", md: "4rem" },
                            letterSpacing: "-0.03em",
                            background: "linear-gradient(90deg, #fff, #90caf9)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Active Promotions.
                    </Typography>
                    <Typography variant="body1" sx={{ color: "grey.500", display: { xs: "none", md: "block" } }}>
                        Limited time offers tailored for you.
                    </Typography>
                </Stack>

                <Stack spacing={0}>
                    {offers.map((offer, index) => (
                        <Box
                            key={index}
                            sx={{
                                borderBottom: "1px solid rgba(255,255,255,0.1)",
                                py: 6,
                                cursor: "pointer",
                                transition: "all 0.4s ease",
                                opacity: 1, // Always fully visible
                                ...(!isMobile && {
                                    "&:hover": {
                                        opacity: 1,
                                        bgcolor: "rgba(255,255,255,0.02)",
                                        pl: 2
                                    }
                                })
                            }}
                        >
                            <Stack
                                direction={{ xs: "column", md: "row" }}
                                alignItems={{ xs: "flex-start", md: "center" }}
                                justifyContent="space-between"
                                spacing={4}
                            >
                                {/* Left: Title & Badge */}
                                <Box sx={{ width: { md: "35%" } }}>
                                    <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 1 }}>
                                        <Typography variant="h4" sx={{ fontWeight: 700 }}>
                                            {offer.title}
                                        </Typography>
                                    </Stack>
                                    <Chip
                                        label={offer.code}
                                        size="small"
                                        sx={{
                                            bgcolor: "rgba(255,255,255,0.1)",
                                            color: offer.color,
                                            fontWeight: 600,
                                            border: "1px solid",
                                            borderColor: offer.color,
                                            mt: 1
                                        }}
                                    />
                                </Box>

                                {/* Middle: Description */}
                                <Box sx={{ width: { md: "45%" } }}>
                                    <Typography variant="body1" sx={{ color: "grey.300", lineHeight: 1.6, fontSize: "1.1rem", mb: 1 }}>
                                        {offer.description}
                                    </Typography>
                                    <Typography variant="caption" sx={{ color: "grey.600", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                                        {offer.expiry}
                                    </Typography>
                                </Box>

                                {/* Right: Action */}
                                <Box sx={{ width: { md: "20%" }, textAlign: "right" }}>
                                    <Button
                                        endIcon={<ArrowForwardIcon />}
                                        sx={{
                                            color: "#fff",
                                            borderColor: "rgba(255,255,255,0.3)",
                                            borderRadius: 50,
                                            px: 3,
                                            py: 1,
                                            ...(!isMobile && {
                                                "&:hover": {
                                                    bgcolor: offer.color,
                                                    borderColor: offer.color
                                                }
                                            })
                                        }}
                                        variant="outlined"
                                    >
                                        Claim Offer
                                    </Button>
                                </Box>
                            </Stack>
                        </Box>
                    ))}
                </Stack>
            </Container>
        </Box>
    );
};

export default CurrentOffers;
