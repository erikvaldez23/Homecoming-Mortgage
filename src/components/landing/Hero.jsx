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
                minHeight: '100dvh', // Dynamic viewport height for mobile
                width: '100vw',
                display: 'flex',
                alignItems: { xs: 'center', md: 'center' }, // Centered layout like Homely
                justifyContent: 'center', // Centered layout
                // backgroundImage: 'url(/landing/hero-bg.png)',
                background: '#0a0a0a',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                overflow: 'hidden',
                color: '#fff',
                textAlign: 'left',
                pt: { xs: 8, md: 0 } // Add padding top for mobile to prevent overlap with fixed header
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
                {/* <Typography
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
                </Typography> */}

                <Typography
                    variant="h1"
                    sx={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: { xs: 'clamp(2.5rem, 8vw, 3.5rem)', md: '5rem' }, // Responsive font size
                        fontWeight: 800,
                        lineHeight: 1.1,
                        mb: 4,
                        letterSpacing: '-0.02em',
                        color: '#fff',
                    }}
                >
                    Your Personal<br />
                    <Box component="span" sx={{ color: 'rgba(255,255,255,0.7)' }}>Path to Home Ownership.</Box>
                </Typography>

                <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)', mb: 6, maxWidth: '600px', fontSize: '1.2rem', lineHeight: 1.6 }}>
                    For personalized pricing and rates, please call us directly.
                    Ready to move forward? Start your application online today.
                </Typography>

                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={2}
                    justifyContent="leftr"
                    sx={{ mb: 8 }}
                >
                    <Button
                        component="a"
                        href="https://texasfinancialresourcemgmt1.proiwebsites.com/loanportal/login"
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="contained"
                        size="large"
                        sx={{
                            bgcolor: 'primary.main',
                            color: '#fff',
                            px: 5,
                            py: 2,
                            fontSize: '1.1rem',
                            "&:hover": {
                                bgcolor: '#fff',
                                color: '#000',
                            }
                        }}
                    >
                        Apply Now
                    </Button>
                    <Button
                        component="a"
                        href="tel:+19723390630"
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
                            '&:hover': { bgcolor: '#fff', color: '#000', },
                        }}
                    >
                        Call for Rates
                    </Button>
                </Stack>
            </Container>

            {/* Contact Info Card */}
            <Paper
                elevation={0}
                sx={{
                    position: 'absolute', // Always absolute to stay at bottom/out of way
                    bottom: { xs: '20px', md: '40px' },
                    right: { xs: '50%', md: '20px' },
                    transform: { xs: 'translateX(50%)', md: 'none' }, // Center on mobile
                    width: { xs: '95%', sm: 'auto', md: 'auto' }, // Wide on mobile
                    mt: 0,
                    bgcolor: { xs: 'rgba(2, 13, 28, 0.9)', md: 'rgba(2, 13, 28, 0.8)' },
                    backdropFilter: 'blur(12px)',
                    color: '#fff',
                    borderRadius: 4,
                    p: { xs: 2, md: 4 }, // Reduce padding on mobile
                    display: 'flex',
                    flexDirection: 'row', // Always row
                    alignItems: 'center',
                    justifyContent: { xs: 'space-around', md: 'flex-start' }, // Spread on mobile
                    gap: { xs: 1, md: 4 },
                    zIndex: 2,
                    border: '1px solid rgba(255,255,255,0.1)',
                    maxWidth: { xs: '100%', md: 'auto' },
                    mx: 0,
                    cursor: 'default',
                    whiteSpace: 'nowrap',
                    overflowX: 'auto', // Scroll if too small
                    '::-webkit-scrollbar': { display: 'none' } // Hide scrollbar
                }}
            >
                {/* Call */}
                <Box
                    component="a"
                    href="tel:+19723390630"
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
                    <PhoneInTalkOutlinedIcon sx={{ fontSize: { xs: '1.5rem', md: '1.8rem' }, color: 'primary.main' }} />
                    <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.secondary', fontSize: { xs: '0.75rem', md: '0.875rem' } }}>Call Us</Typography>
                </Box>

                {/* Email */}
                <Box
                    component="a"
                    href="mailto:Pirouz@mortgagehmc.com"
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
                    <EmailOutlinedIcon sx={{ fontSize: { xs: '1.5rem', md: '1.8rem' }, color: 'primary.main' }} />
                    <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.secondary', fontSize: { xs: '0.75rem', md: '0.875rem' } }}>Email Us</Typography>
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
                    <CalendarMonthOutlinedIcon sx={{ fontSize: { xs: '1.5rem', md: '1.8rem' }, color: 'primary.main' }} />
                    <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.secondary', fontSize: { xs: '0.75rem', md: '0.875rem' } }}>Schedule</Typography>
                </Box>

                {/* Main CTA Text - Hide on very small screens if needed, or scale down */}
                <Box sx={{
                    ml: { sm: 2 },
                    textAlign: { xs: 'center', sm: 'left' },
                    borderLeft: { sm: '1px solid rgba(255,255,255,0.1)' },
                    pl: { sm: 4 },
                    display: { xs: 'none', sm: 'block' } // Hide text block on extra small mobile to fit icons in row
                }}>
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
