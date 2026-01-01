import React from "react";
import { Box, Container, Grid, Typography, Chip } from "@mui/material";

const OurStory = () => {
    return (
        <Box sx={{ py: 15, bgcolor: "#0a0a0a" }}>
            <Container maxWidth="lg">
                <Grid container spacing={8} alignItems="center">
                    {/* Text Side */}
                    <Grid item xs={12} md={6}>
                        <Chip
                            label="Our Story"
                            sx={{
                                bgcolor: "rgba(0, 98, 204, 0.1)",
                                color: "primary.main",
                                fontWeight: 700,
                                textTransform: "uppercase",
                                fontSize: "0.75rem",
                                letterSpacing: "0.1em",
                                mb: 3,
                            }}
                        />
                        <Typography variant="h2" sx={{ fontWeight: 800, mb: 4, lineHeight: 1.2 }}>
                            More than just <br />
                            <Box component="span" sx={{ color: "primary.main" }}>
                                a lender.
                            </Box>
                        </Typography>
                        <Typography variant="body1" sx={{ color: "text.secondary", mb: 3, fontSize: "1.1rem", lineHeight: 1.8 }}>
                            Homecoming Mortgage was founded on the belief that obtaining a mortgage shouldn't be a stressful ordeal. We saw a gap in the industry for a lender that combines modern technology with old-school customer service.
                        </Typography>
                        <Typography variant="body1" sx={{ color: "text.secondary", fontSize: "1.1rem", lineHeight: 1.8 }}>
                            Since our inception, we have helped thousands of families find their dream homes. Our team is driven by a passion for education and transparency, ensuring you feel confident at every step of the process.
                        </Typography>
                    </Grid>

                    {/* Image Side */}
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                position: "relative",
                                height: { xs: 400, md: 500 },
                                borderRadius: 8,
                                overflow: "hidden",
                                boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                            }}
                        >
                            <Box
                                component="img"
                                src="/placeholder.jpg"
                                alt="Team meeting"
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default OurStory;
