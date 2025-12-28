import React from 'react';
import { Box, Typography, Button, Stack, Container, Paper } from '@mui/material';
import KingBedOutlinedIcon from '@mui/icons-material/KingBedOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import GarageOutlinedIcon from '@mui/icons-material/GarageOutlined';

const Hero = () => {
    return (
        <Box
            sx={{
                position: 'relative',
                height: '100vh',
                width: '100vw',
                display: 'flex',
                alignItems: { xs: 'center', md: 'center' }, // Centered layout like Homely
                justifyContent: 'center', // Centered layout
                backgroundImage: 'url(/landing/hero-bg.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                overflow: 'hidden',
                color: '#fff',
                textAlign: 'center',
            }}
        >
            {/* Overlay */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(180deg, rgba(2, 13, 28, 0.5) 0%, rgba(2, 13, 28, 0.8) 100%)', // Deep Sea Blue overlay
                    zIndex: 1,
                }}
            />

            {/* Main Content */}
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
                <Typography
                    variant="h5"
                    sx={{
                        color: 'primary.main',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '1rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        mb: 3,
                        fontWeight: 700,
                    }}
                >
                    Homecoming Mortgage
                </Typography>

                <Typography
                    variant="h1"
                    sx={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: { xs: '3.5rem', md: '5rem' },
                        fontWeight: 800,
                        lineHeight: 1.1,
                        mb: 4,
                        letterSpacing: '-0.02em',
                        color: '#fff',
                    }}
                >
                    Futuristic Haven<br />
                    <Box component="span" sx={{ color: 'rgba(255,255,255,0.7)' }}>for your finances.</Box>
                </Typography>

                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={2}
                    justifyContent="center"
                    sx={{ mb: 8 }}
                >
                    <Button
                        variant="contained"
                        size="large"
                        sx={{
                            bgcolor: 'primary.main',
                            color: '#fff',
                            px: 5,
                            py: 2,
                            fontSize: '1.1rem',
                            '&:hover': { bgcolor: '#059669' },
                        }}
                    >
                        Get Started
                    </Button>
                    <Button
                        variant="outlined"
                        size="large"
                        sx={{
                            color: '#fff',
                            borderColor: 'rgba(255,255,255,0.3)',
                            px: 5,
                            py: 2,
                            fontSize: '1.1rem',
                            backdropFilter: 'blur(10px)',
                            bgcolor: 'rgba(255,255,255,0.05)',
                            '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,0.1)' },
                        }}
                    >
                        Learn More
                    </Button>
                </Stack>
            </Container>

            {/* Floating Stats Card (Bottom Right like Homely) */}
            <Paper
                elevation={0}
                sx={{
                    position: { xs: 'relative', md: 'absolute' },
                    bottom: { xs: 'auto', md: '40px' },
                    right: { xs: 'auto', md: '40px' },
                    mt: { xs: 8, md: 0 },
                    bgcolor: 'rgba(30, 41, 59, 0.9)', // Dark slate
                    backdropFilter: 'blur(12px)',
                    color: '#fff',
                    borderRadius: 4,
                    p: 4,
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    alignItems: 'center',
                    gap: 4,
                    zIndex: 2,
                    border: '1px solid rgba(255,255,255,0.1)',
                    maxWidth: { xs: '90%', md: 'auto' },
                    mx: { xs: 'auto', md: 0 }
                }}
            >
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                    <KingBedOutlinedIcon sx={{ fontSize: '1.8rem', color: 'primary.main' }} />
                    <Typography variant="body2" sx={{ fontWeight: 500, color: 'text.secondary' }}>4 Beds</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                    <BathtubOutlinedIcon sx={{ fontSize: '1.8rem', color: 'primary.main' }} />
                    <Typography variant="body2" sx={{ fontWeight: 500, color: 'text.secondary' }}>4 Baths</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                    <GarageOutlinedIcon sx={{ fontSize: '1.8rem', color: 'primary.main' }} />
                    <Typography variant="body2" sx={{ fontWeight: 500, color: 'text.secondary' }}>Garage</Typography>
                </Box>
                <Box sx={{ ml: { sm: 2 }, textAlign: { xs: 'center', sm: 'left' } }}>
                    <Typography variant="h5" sx={{ fontWeight: 700, color: '#fff' }}>
                        $4,750,000
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        Listed Price
                    </Typography>
                </Box>
            </Paper>
        </Box>
    );
};

export default Hero;
