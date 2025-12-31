import React from "react";
import { Box, Container, Grid, Typography, Card, CardContent, Button, Chip } from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const offers = [
    {
        title: "First-Time Buyer Grant",
        description: "Get up to $2,500 towards closing costs when you purchase your first home with Homecoming Mortgage.",
        expiry: "Valid until Dec 31, 2025",
        code: "GOHOME25",
        color: "#0062cc",
    },
    {
        title: "Refinance Rate Drop",
        description: "Lock in a rate 0.25% lower than advertised when you switch from another lender.",
        expiry: "Valid for applications submitted this month",
        code: "SWITCH&SAVE",
        color: "#7c3aed",
    },
    {
        title: "Eco-Friendly Home Bonus",
        description: "Buying an energy-efficient home? Receive a free appraisal and discounted origination fees.",
        expiry: "Ongoing promotion",
        code: "GREENHOME",
        color: "#10b981",
    },
];

const CurrentOffers = () => {
    return (
        <Box sx={{ py: 15, bgcolor: "background.default" }}>
            <Container maxWidth="lg">
                <Typography variant="h2" align="center" sx={{ fontWeight: 800, mb: 10 }}>
                    Active Promotions
                </Typography>

                <Grid container spacing={4}>
                    {offers.map((offer, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <Card
                                sx={{
                                    height: "100%",
                                    bgcolor: "background.paper",
                                    display: "flex",
                                    flexDirection: "column",
                                    position: "relative",
                                    overflow: "visible",
                                    borderRadius: 4,
                                    mt: 2,
                                    transition: "transform 0.3s ease",
                                    "&:hover": {
                                        transform: "translateY(-5px)",
                                    }
                                }}
                            >
                                {/* Floating Icon */}
                                <Box
                                    sx={{
                                        position: "absolute",
                                        top: -20,
                                        left: 30,
                                        bgcolor: offer.color,
                                        color: "#fff",
                                        p: 2,
                                        borderRadius: 3,
                                        boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                                    }}
                                >
                                    <LocalOfferIcon />
                                </Box>

                                <CardContent sx={{ pt: 8, pb: 4, px: 4, flexGrow: 1 }}>
                                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                        {offer.title}
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: "text.secondary", mb: 3 }}>
                                        {offer.description}
                                    </Typography>

                                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3, color: "text.secondary", fontSize: "0.875rem" }}>
                                        <CalendarMonthIcon fontSize="small" />
                                        {offer.expiry}
                                    </Box>

                                    <Chip
                                        label={`Code: ${offer.code}`}
                                        sx={{
                                            bgcolor: "rgba(255,255,255,0.05)",
                                            border: "1px dashed",
                                            borderColor: "text.secondary",
                                            color: "text.primary",
                                            width: "100%",
                                            borderRadius: 2
                                        }}
                                    />
                                </CardContent>

                                <Box sx={{ p: 4, pt: 0 }}>
                                    <Button variant="contained" fullWidth color="primary" sx={{ borderRadius: 50 }}>
                                        Claim Offer
                                    </Button>
                                </Box>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default CurrentOffers;
