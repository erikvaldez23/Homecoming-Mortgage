import React from 'react';
import { Box, Container, Grid, Typography, Stack, Button, Chip } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const About = () => {
    return (
        <Box sx={{ py: 15, bgcolor: '#0a0a0a', position: 'relative', overflow: 'hidden' }}>
            <Container maxWidth="lg">
                <Grid container spacing={8} alignItems="center">
                    {/* Image Side - Homely style large radius */}
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                position: 'relative',
                                height: { xs: 400, md: 600 },
                                width: '100%',
                                borderRadius: 8, // Large radius like Homely
                                overflow: 'hidden',
                                bgcolor: '#1e293b',
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                            }}
                        >
                            <Box
                                component="img"
                                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Modern Office"
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    filter: 'grayscale(20%) contrast(110%)',
                                    transition: 'transform 0.5s ease',
                                    '&:hover': { transform: 'scale(1.03)' }
                                }}
                            />

                            {/* Floating Badge */}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    bottom: 30,
                                    left: 30,
                                    bgcolor: 'rgba(15, 23, 42, 0.9)',
                                    backdropFilter: 'blur(8px)',
                                    p: 3,
                                    borderRadius: 4,
                                    border: '1px solid rgba(255,255,255,0.1)'
                                }}
                            >
                                <Typography variant="h3" sx={{ fontWeight: 700, color: 'primary.main' }}>15+</Typography>
                                <Typography variant="body2" sx={{ color: '#fff', fontWeight: 500 }}>Years of Experience</Typography>
                            </Box>
                        </Box>
                    </Grid>

                    {/* Text Side */}
                    <Grid item xs={12} md={6}>
                        <Chip
                            label="About Us"
                            sx={{
                                bgcolor: 'rgba(0, 98, 204, 0.1)',
                                color: 'primary.main',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                fontSize: '0.75rem',
                                letterSpacing: '0.1em',
                                mb: 3
                            }}
                        />
                        <Typography variant="h2" sx={{ fontWeight: 800, mb: 4, lineHeight: 1.1 }}>
                            We help you find the <br />
                            <Box component="span" sx={{ color: 'primary.main' }}>perfect mortgage.</Box>
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, fontSize: '1.1rem', lineHeight: 1.8 }}>
                            Navigating the mortgage landscape can be complex. At Homecoming Mortgage, we simplify the process with transparency, speed, and personalized care.
                        </Typography>

                        <Stack spacing={2} sx={{ mb: 5 }}>
                            {['Low Interest Rates', 'No Hidden Fees', 'Fast Approval Process'].map((item) => (
                                <Stack key={item} direction="row" alignItems="center" spacing={2}>
                                    <CheckCircleOutlineIcon sx={{ color: 'primary.main' }} />
                                    <Typography variant="body1" sx={{ fontWeight: 500 }}>{item}</Typography>
                                </Stack>
                            ))}
                        </Stack>

                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                        >
                            Learn More About Us
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default About;
