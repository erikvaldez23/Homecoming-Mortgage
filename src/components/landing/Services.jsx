import React from 'react';
import { Box, Container, Grid, Typography, Stack, Divider } from '@mui/material';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import DomainAddOutlinedIcon from '@mui/icons-material/DomainAddOutlined';

const servicesData = [
    {
        title: 'Home Purchasing',
        description: 'Find your dream home.',
        icon: <HomeWorkOutlinedIcon sx={{ fontSize: 60 }} />,
    },
    {
        title: 'Refinancing',
        description: 'Lower your monthly payments.',
        icon: <MonetizationOnOutlinedIcon sx={{ fontSize: 60 }} />,
    },
    {
        title: 'Investment Properties',
        description: 'Build your real estate portfolio.',
        icon: <DomainAddOutlinedIcon sx={{ fontSize: 60 }} />,
    },
    {
        title: 'Commercial Mortgages',
        description: 'Expand your business horizons.',
        icon: <ApartmentOutlinedIcon sx={{ fontSize: 60 }} />,
    }
];

const Services = () => {
    return (
        <Box sx={{ py: 15, bgcolor: 'background.default', textAlign: 'center' }}>
            <Container maxWidth="xl">
                <Typography
                    variant="h2"
                    sx={{
                        fontWeight: 800,
                        mb: 8,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        background: 'linear-gradient(90deg, #fff, #aabbd1)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        textShadow: '0 0 20px rgba(0, 98, 204, 0.3)'
                    }}
                >
                    Our Blueprint for Your Future
                </Typography>

                <Grid container spacing={4} justifyContent="center" sx={{ mb: 10 }}>
                    {servicesData.map((service, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Stack alignItems="center" spacing={2}>
                                <Box
                                    sx={{
                                        color: 'primary.main',
                                        p: 2,
                                        borderRadius: '50%',
                                        border: '1px solid rgba(0, 98, 204, 0.3)',
                                        bgcolor: 'rgba(0, 98, 204, 0.05)',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'scale(1.1)',
                                            bgcolor: 'rgba(0, 98, 204, 0.1)',
                                            boxShadow: '0 0 20px rgba(0, 98, 204, 0.4)'
                                        }
                                    }}
                                >
                                    {service.icon}
                                </Box>
                                <Box>
                                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#fff', mb: 0.5 }}>
                                        {service.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        {service.description}
                                    </Typography>
                                </Box>
                            </Stack>
                        </Grid>
                    ))}
                </Grid>

                <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', width: '60%', mx: 'auto', mb: 8 }} />

                <Typography
                    variant="h5"
                    sx={{
                        fontStyle: 'italic',
                        color: 'text.secondary',
                        fontWeight: 300,
                        maxWidth: '800px',
                        mx: 'auto'
                    }}
                >
                    "The best way to predict your financial future is to create it."
                </Typography>
            </Container>
        </Box>
    );
};

export default Services;
