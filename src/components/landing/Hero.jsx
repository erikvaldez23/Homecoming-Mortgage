import React from 'react';
import { Box, Typography, Button, Stack, Container, Paper } from '@mui/material';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

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
                // backgroundImage: 'url(/landing/hero-bg.png)',
                background: '#050505',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                overflow: 'hidden',
                color: '#fff',
                textAlign: 'left',
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
                    // background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.4) 0%, rgba(15, 23, 42, 0.6) 100%)', // Dark overlay
                    zIndex: 1,
                }}
            />

            {/* Main Content */}
            <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
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
                    justifyContent="leftr"
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

            {/* Contact Info Card */}
            <Paper
                elevation={0}
                sx={{
                    position: { xs: 'relative', md: 'absolute' },
                    bottom: { xs: 'auto', md: '40px' },
                    right: { xs: 'auto', md: '20px' },
                    mt: { xs: 8, md: 0 },
                    bgcolor: 'rgba(2, 13, 28, 0.8)', // Deep Navy transparency
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
                    mx: { xs: 'auto', md: 0 },
                    cursor: 'default'
                }}
            >
                {/* Call */}
                <Box
                    component="a"
                    href="tel:555-123-4567"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 1,
                        textDecoration: 'none',
                        color: 'inherit',
                        transition: 'transform 0.2s',
                        '&:hover': { transform: 'scale(1.1)', color: 'primary.main' }
                    }}
                >
                    <PhoneInTalkOutlinedIcon sx={{ fontSize: '1.8rem', color: 'primary.main' }} />
                    <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.secondary' }}>Call Us</Typography>
                </Box>

                {/* Email */}
                <Box
                    component="a"
                    href="mailto:hello@homecoming.com"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 1,
                        textDecoration: 'none',
                        color: 'inherit',
                        transition: 'transform 0.2s',
                        '&:hover': { transform: 'scale(1.1)', color: 'primary.main' }
                    }}
                >
                    <EmailOutlinedIcon sx={{ fontSize: '1.8rem', color: 'primary.main' }} />
                    <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.secondary' }}>Email Now</Typography>
                </Box>

                {/* Schedule */}
                <Box
                    component="a"
                    href="/contact"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 1,
                        textDecoration: 'none',
                        color: 'inherit',
                        transition: 'transform 0.2s',
                        '&:hover': { transform: 'scale(1.1)', color: 'primary.main' }
                    }}
                >
                    <CalendarMonthOutlinedIcon sx={{ fontSize: '1.8rem', color: 'primary.main' }} />
                    <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.secondary' }}>Schedule</Typography>
                </Box>

                {/* Main CTA Text */}
                <Box sx={{ ml: { sm: 2 }, textAlign: { xs: 'center', sm: 'left' }, borderLeft: { sm: '1px solid rgba(255,255,255,0.1)' }, pl: { sm: 4 } }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#fff', lineHeight: 1.2 }}>
                        Free<br />Consultation
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 600, letterSpacing: 0.5 }}>
                        BOOK TODAY
                    </Typography>
                </Box>
            </Paper>
        </Box>
    );
};

export default Hero;
