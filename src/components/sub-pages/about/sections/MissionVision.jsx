import React from "react";
import { Box, Container, Grid, Typography, Card, CardContent } from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DiamondIcon from "@mui/icons-material/Diamond";

const values = [
    {
        icon: <RocketLaunchIcon fontSize="large" color="primary" />,
        title: "Mission",
        description: "To empower individuals and families with the financial tools and knowledge needed to achieve homeownership.",
    },
    {
        icon: <VisibilityIcon fontSize="large" color="primary" />,
        title: "Vision",
        description: "To be the most trusted and transparent mortgage partner in the industry, setting a new standard for client care.",
    },
    {
        icon: <DiamondIcon fontSize="large" color="primary" />,
        title: "Values",
        description: "Integrity, Transparency, Customer-Centricity, and Continuous Innovation guide everything we do.",
    },
];

const MissionVision = () => {
    return (
        <Box sx={{ py: 10, bgcolor: "background.paper" }}>
            <Container maxWidth="lg">
                <Typography variant="h2" align="center" sx={{ fontWeight: 800, mb: 8 }}>
                    What drives us
                </Typography>
                <Grid container spacing={4}>
                    {values.map((item, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <Card
                                sx={{
                                    height: "100%",
                                    bgcolor: "rgba(255, 255, 255, 0.03)",
                                    border: "1px solid rgba(255, 255, 255, 0.05)",
                                    borderRadius: 4,
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                        transform: "translateY(-10px)",
                                        boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                                        borderColor: "primary.main",
                                    },
                                }}
                            >
                                <CardContent sx={{ p: 4, textAlign: "center" }}>
                                    <Box sx={{ mb: 3, p: 2, bgcolor: "rgba(0, 98, 204, 0.1)", borderRadius: "50%", display: "inline-flex" }}>
                                        {item.icon}
                                    </Box>
                                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.6 }}>
                                        {item.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default MissionVision;
