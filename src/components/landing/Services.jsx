import React from 'react';
import { Box, Container, Grid, Typography, Paper, Button, Stack } from '@mui/material';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const servicesData = [
    {
        title: 'Purchasing',
        description: 'Find your dream home.',
        icon: <HomeWorkOutlinedIcon sx={{ fontSize: 32 }} />,
    },
    {
        title: 'Refinancing',
        description: 'Lower your monthly payments.',
        icon: <MonetizationOnOutlinedIcon sx={{ fontSize: 32 }} />,
    },
    {
        title: 'Commercial',
        description: 'Expand your business.',
        icon: <ApartmentOutlinedIcon sx={{ fontSize: 32 }} />,
    },
];

const Services = () => {
    return (
        <Box sx={{ py: 12, bgcolor: 'background.default' }}>
            <Container maxWidth="lg">
                <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, textAlign: 'center' }}>
                    Explore our services
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 8, textAlign: 'center', maxWidth: 500, mx: 'auto' }}>
                    Tailored mortgage solutions designed to meet your unique needs and financial goals.
                </Typography>

                <Grid container spacing={3}>
                    {servicesData.map((service, index) => (
                        <Grid item xs={12} sm={4} key={index}>
                            <Paper
                                sx={{
                                    p: 4,
                                    height: '100%',
                                    bgcolor: 'background.paper',
                                    borderRadius: 4,
                                    border: '1px solid rgba(255,255,255,0.05)',
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer',
                                    '&:hover': {
                                        transform: 'translateY(-5px)',
                                        borderColor: 'primary.main',
                                        boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                                        '& .icon-box': {
                                            bgcolor: 'primary.main',
                                            color: '#fff'
                                        }
                                    },
                                }}
                            >
                                <Stack direction="row" alignItems="center" spacing={2} mb={3}>
                                    <Box
                                        className="icon-box"
                                        sx={{
                                            p: 1.5,
                                            borderRadius: '50%',
                                            bgcolor: 'rgba(0, 98, 204, 0.1)', // Light blue
                                            color: 'primary.main',
                                            transition: 'all 0.3s ease',
                                            display: 'flex'
                                        }}
                                    >
                                        {service.icon}
                                    </Box>
                                    <Box>
                                        <Typography variant="h6" sx={{ fontWeight: 700 }}>
                                            {service.title}
                                        </Typography>
                                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                                            {service.description}
                                        </Typography>
                                    </Box>
                                </Stack>

                                <Button
                                    endIcon={<ArrowForwardIcon />}
                                    fullWidth
                                    variant="outlined"
                                    sx={{
                                        borderColor: 'rgba(255,255,255,0.1)',
                                        color: 'text.secondary',
                                        justifyContent: 'space-between',
                                        '&:hover': {
                                            borderColor: 'primary.main',
                                            color: 'primary.main',
                                            bgcolor: 'transparent'
                                        }
                                    }}
                                >
                                    Learn More
                                </Button>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;
