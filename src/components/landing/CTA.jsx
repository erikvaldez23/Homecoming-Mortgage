import React from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';

const CTA = () => {
    return (
        <Box sx={{ py: 10, bgcolor: 'background.default' }}>
            <Container maxWidth="lg">
                <Box
                    sx={{
                        bgcolor: 'primary.main',
                        borderRadius: 8,
                        p: { xs: 4, md: 10 },
                        position: 'relative',
                        overflow: 'hidden',
                        textAlign: 'center'
                    }}
                >
                    <Typography variant="h2" sx={{ color: '#fff', fontWeight: 800, mb: 3, position: 'relative', zIndex: 2 }}>
                        Ready to find your home?
                    </Typography>
                    <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.9)', mb: 6, maxWidth: 600, mx: 'auto', position: 'relative', zIndex: 2 }}>
                        Let's work together to build a foundation for your future.
                    </Typography>

                    <Stack direction="row" spacing={2} justifyContent="center" sx={{ position: 'relative', zIndex: 2 }}>
                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                bgcolor: '#fff',
                                color: 'primary.main',
                                fontSize: '1.1rem',
                                fontWeight: 700,
                                '&:hover': { bgcolor: '#f0fdf4' }
                            }}
                        >
                            Contact Us
                        </Button>
                    </Stack>

                    {/* Decorative Circles */}
                    <Box sx={{ position: 'absolute', top: -100, left: -100, width: 300, height: 300, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.1)', zIndex: 1 }} />
                    <Box sx={{ position: 'absolute', bottom: -50, right: -50, width: 200, height: 200, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.1)', zIndex: 1 }} />
                </Box>
            </Container>
        </Box>
    );
};

export default CTA;
