import React, { useState } from 'react';
import { Box, Container, Typography, Stack } from '@mui/material';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import DomainAddOutlinedIcon from '@mui/icons-material/DomainAddOutlined';

const servicesData = [
    {
        id: '01',
        title: 'Home Purchasing',
        description: 'Whether you are shopping for a primary home or an investment property, our competitive pricing allows you to finance your loan with the lowest rates in the industry.',
        icon: <HomeWorkOutlinedIcon sx={{ fontSize: 32 }} />,
    },
    {
        id: '02',
        title: 'Refinancing',
        description: 'We make it a point to refinance only when it is advantageous to the borrower and if we can cover most, if not all, of their closing costs.',
        icon: <MonetizationOnOutlinedIcon sx={{ fontSize: 32 }} />,
    },
    {
        id: '03',
        title: 'Investment Properties',
        description: 'Investment properties description',
        icon: <DomainAddOutlinedIcon sx={{ fontSize: 32 }} />,
    },
    {
        id: '04',
        title: 'Commercial Lending',
        description: 'Commercial lending description',
        icon: <ApartmentOutlinedIcon sx={{ fontSize: 32 }} />,
    }
];

const Services = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <Box sx={{ py: 20, bgcolor: '#0a0a0a', overflow: 'hidden', color: '#fff' }}>
            <Container maxWidth="lg">
                {/* Header */}
                <Box sx={{ mb: 12, borderBottom: "1px solid rgba(255,255,255,0.1)", pb: 4 }}>
                    <Typography
                        variant="h1"
                        sx={{
                            fontWeight: 800,
                            fontSize: { xs: "min(12vw, 4rem)", md: "8rem" }, // Cap mobile font size
                            lineHeight: 0.9,
                            color: "#0062cc",
                            letterSpacing: "-0.04em",
                            textTransform: "capitalize",
                            background: "linear-gradient(135deg, #fff 0%, #90caf9 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            mb: 4
                        }}
                    >
                        Our Blueprint.
                    </Typography>
                    <Typography variant="body1" sx={{ color: "grey.400", maxWidth: "800px", fontSize: "1.2rem", lineHeight: 1.6 }}>
                        With years of experience, we offer the most competitive pricing in the mortgage industry. Our aim is to handle all aspects of your loan, from the pre-approval process through your closing, and keep all parties updated throughout. We are fully transparent in everything we do, and our objective is to not only get our clients the best deal, but to lessen the burden of the mortgage process.
                    </Typography>
                </Box>

                <Stack spacing={0}>
                    {servicesData.map((service, index) => (
                        <Box
                            key={index}
                            onMouseEnter={() => setActiveIndex(index)}
                            sx={{
                                borderBottom: "1px solid rgba(255,255,255,0.1)",
                                py: 6,
                                cursor: "pointer",
                                transition: "all 0.4s ease",
                                // opacity: activeIndex === index ? 1 : 0.4,
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
                                {/* Left: Number & Title */}
                                <Box sx={{ width: { md: "40%" } }}>
                                    <Stack direction="row" alignItems="flex-start" spacing={3}>
                                        <Typography
                                            variant="h3"
                                            sx={{
                                                fontWeight: 800,
                                                color: "rgba(255,255,255,0.1)",
                                                lineHeight: 0.8,
                                                fontSize: "3rem",
                                                fontFamily: 'monospace'
                                            }}
                                        >
                                            {service.id}
                                        </Typography>
                                        <Typography variant="h4" sx={{ fontWeight: 700, mt: 0.5 }}>
                                            {service.title}
                                        </Typography>
                                    </Stack>
                                </Box>

                                {/* Middle: Description */}
                                <Box sx={{ width: { md: "45%" } }}>
                                    <Typography variant="body1" sx={{ color: "grey.400", lineHeight: 1.6, fontSize: "1.2rem" }}>
                                        {service.description}
                                    </Typography>
                                </Box>

                                {/* Right: Icon */}
                                <Box sx={{ width: { md: "15%" }, display: "flex", justifyContent: "flex-end" }}>
                                    <Box
                                        sx={{
                                            p: 2,
                                            borderRadius: "50%",
                                            color: activeIndex === index ? "#0062cc" : "grey.600",
                                            transition: "all 0.3s ease",
                                            transform: activeIndex === index ? "scale(1.1)" : "scale(1)"
                                        }}
                                    >
                                        {service.icon}
                                    </Box>
                                </Box>
                            </Stack>
                        </Box>
                    ))}
                </Stack>
            </Container>
        </Box>
    );
};

export default Services;
