import React from 'react';
import { Box, Container, Grid, Typography, Avatar, Paper } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const testimonials = [
    {
        name: 'Sarah Jenkins',
        role: 'Homeowner',
        content: 'Homecoming Mortgage made the impossible possible. Their team guided me through every step and found a program that fit my budget perfectly.',
    },
    {
        name: 'Michael Torres',
        role: 'Investor',
        content: 'Unmatched professionalism and speed. I rely on them for all my investment properties. Highly recommended for serious buyers.',
    },
    {
        name: 'Emily & David',
        role: 'Refinance',
        content: 'We saved hundreds on our monthly payment thanks to their refinancing expertise. The process was smooth and transparent.',
    },
];

const Testimonials = () => {
    return (
        <Box sx={{ py: 15, bgcolor: 'background.paper', position: 'relative' }}>
            <Container maxWidth="lg">
                <Box textAlign="center" mb={10}>
                    <Typography variant="h6" sx={{ color: 'primary.main', textTransform: 'uppercase', letterSpacing: 2, mb: 2, fontWeight: 700 }}>
                        Testimonials
                    </Typography>
                    <Typography variant="h2" sx={{ fontWeight: 800 }}>
                        What our clients say.
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    {testimonials.map((item, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 5,
                                    height: '100%',
                                    bgcolor: '#0f172a', // Darker background for contrast
                                    borderRadius: 6,
                                    border: '1px solid rgba(255,255,255,0.05)',
                                    position: 'relative'
                                }}
                            >
                                <FormatQuoteIcon sx={{ fontSize: 60, color: 'primary.main', opacity: 0.2, position: 'absolute', top: 20, left: 20 }} />

                                <Typography variant="body1" sx={{ color: '#cbd5e1', mb: 4, mt: 4, fontSize: '1.1rem', lineHeight: 1.6, position: 'relative', zIndex: 1, fontStyle: 'italic' }}>
                                    "{item.content}"
                                </Typography>

                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                    <Avatar sx={{ bgcolor: 'primary.main', color: '#fff', fontWeight: 700 }}>{item.name[0]}</Avatar>
                                    <Box>
                                        <Typography variant="subtitle1" sx={{ fontWeight: 700, lineHeight: 1 }}>{item.name}</Typography>
                                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>{item.role}</Typography>
                                    </Box>
                                </Box>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Testimonials;
