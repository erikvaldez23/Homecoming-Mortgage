import React, { useState } from "react";
import { Box, Container, Typography, Stack, Collapse, IconButton } from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DiamondIcon from "@mui/icons-material/Diamond";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const values = [
    {
        icon: <RocketLaunchIcon sx={{ fontSize: 40 }} />,
        title: "Our Mission",
        description: "To empower individuals and families with the financial tools and knowledge needed to achieve homeownership. We believe in making the complex simple.",
    },
    {
        icon: <VisibilityIcon sx={{ fontSize: 40 }} />,
        title: "Our Vision",
        description: "To be the most trusted and transparent mortgage partner in the industry, setting a new standard for client care and ethical lending.",
    },
    {
        icon: <DiamondIcon sx={{ fontSize: 40 }} />,
        title: "Core Values",
        description: "Integrity, Transparency, Customer-Centricity, and Continuous Innovation guide everything we do. We put people before profits.",
    },
];

const MissionVision = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <Box sx={{ py: 15, bgcolor: "#0a0a0a", color: "#fff" }}>
            <Container maxWidth="lg">
                <Box sx={{ mb: 10, borderBottom: "1px solid rgba(255,255,255,0.1)", pb: 4 }}>
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 800,
                            letterSpacing: "-0.03em",
                            background: "linear-gradient(90deg, #fff, #90caf9)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            fontSize: { xs: "3rem", md: "4rem" },
                            textAlign: "left"
                        }}
                    >
                        What drives us.
                    </Typography>
                </Box>

                <Stack spacing={0}>
                    {values.map((item, index) => (
                        <Box
                            key={index}
                            onMouseEnter={() => setActiveIndex(index)}
                            sx={{
                                borderBottom: "1px solid rgba(255,255,255,0.1)",
                                py: 6,
                                cursor: "pointer",
                                transition: "all 0.4s ease",
                                opacity: activeIndex === index ? 1 : 0.5,
                                "&:hover": {
                                    opacity: 1,
                                    bgcolor: "rgba(255,255,255,0.02)",
                                    pl: 2
                                }
                            }}
                        >
                            <Stack
                                direction={{ xs: "column", md: "row" }}
                                alignItems={{ xs: "flex-start", md: "center" }}
                                justifyContent="space-between"
                                spacing={4}
                            >
                                <Stack direction="row" alignItems="center" spacing={4} sx={{ width: { md: "40%" } }}>
                                    <Typography variant="h6" sx={{ color: "rgba(255,255,255,0.3)", fontWeight: 700 }}>
                                        0{index + 1}
                                    </Typography>
                                    <Typography variant="h3" sx={{ fontWeight: 600, fontSize: { xs: "2rem", md: "2.5rem" } }}>
                                        {item.title}
                                    </Typography>
                                </Stack>

                                <Box sx={{ width: { md: "50%" }, display: "flex", alignItems: "center", gap: 4 }}>
                                    <Box
                                        sx={{
                                            p: 2,
                                            borderRadius: "50%",
                                            bgcolor: "rgba(255,255,255,0.05)",
                                            color: "#0062cc",
                                            display: { xs: "none", md: "flex" }
                                        }}
                                    >
                                        {item.icon}
                                    </Box>
                                    <Typography variant="h6" sx={{ fontWeight: 300, lineHeight: 1.6, color: "grey.300" }}>
                                        {item.description}
                                    </Typography>
                                </Box>
                            </Stack>
                        </Box>
                    ))}
                </Stack>
            </Container>
        </Box>
    );
};

export default MissionVision;
