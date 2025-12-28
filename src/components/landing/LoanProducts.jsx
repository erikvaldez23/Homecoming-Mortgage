import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, Button, Stack, Chip } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import VillaOutlinedIcon from '@mui/icons-material/VillaOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';

const products = [
    {
        title: 'Conventional',
        category: 'Standard',
        icon: <HouseOutlinedIcon fontSize="large" />,
        description: 'Flexible terms for strong credit profiles.',
    },
    {
        title: 'FHA Loans',
        category: 'First-Time',
        icon: <ApartmentOutlinedIcon fontSize="large" />,
        description: 'Low down payment options for new buyers.',
    },
    {
        title: 'VA Loans',
        category: 'Military',
        icon: <VillaOutlinedIcon fontSize="large" />,
        description: '$0 down for Veterans and active military.',
    },
    {
        title: 'Jumbo Loans',
        category: 'Luxury',
        icon: <HouseOutlinedIcon fontSize="large" />,
        description: 'For properties exceeding loan limits.',
    },
    {
        title: 'USDA Loans',
        category: 'Rural',
        icon: <VillaOutlinedIcon fontSize="large" />,
        description: 'Zero down payment for eligible rural areas.',
    },
    {
        title: 'Refinance',
        category: 'Savings',
        icon: <ApartmentOutlinedIcon fontSize="large" />,
        description: 'Lower your rate or cash out equity.',
    },
];

const LoanProducts = () => {
    return (
        <Box sx={{ py: 15, bgcolor: 'background.default' }}>
            <Container maxWidth="lg">
                <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems="center" mb={8}>
                    <Box>
                        <Typography variant="h3" sx={{ fontWeight: 800, mb: 1 }}>
                            Loan Products
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                            Options tailored to your specific needs.
                        </Typography>
                    </Box>
                    <Button variant="outlined" sx={{ mt: { xs: 3, sm: 0 }, borderColor: 'rgba(255,255,255,0.1)', color: '#fff' }}>
                        View All Options
                    </Button>
                </Stack>

                <Grid container spacing={4}>
                    {products.map((product, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card
                                sx={{
                                    height: '100%',
                                    bgcolor: 'background.paper',
                                    borderRadius: 6, // Homely style
                                    border: '1px solid rgba(255,255,255,0.05)',
                                    transition: 'all 0.3s ease',
                                    position: 'relative',
                                    overflow: 'visible',
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                                        '& .product-icon': {
                                            transform: 'scale(1.1) rotate(5deg)',
                                            color: 'primary.main'
                                        }
                                    }
                                }}
                            >
                                {/* Image/Icon Area Placeholder */}
                                <Box
                                    sx={{
                                        height: 200,
                                        bgcolor: 'rgba(255,255,255,0.03)',
                                        borderRadius: '24px 24px 0 0',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'text.secondary',
                                        position: 'relative'
                                    }}
                                >
                                    <Chip
                                        label={product.category}
                                        size="small"
                                        sx={{
                                            position: 'absolute',
                                            top: 20,
                                            left: 20,
                                            bgcolor: 'rgba(0,0,0,0.4)',
                                            backdropFilter: 'blur(4px)',
                                            color: '#fff',
                                            fontWeight: 600
                                        }}
                                    />
                                    <Box className="product-icon" sx={{ transition: 'all 0.3s ease' }}>
                                        {product.icon}
                                    </Box>
                                </Box>

                                <CardContent sx={{ p: 4 }}>
                                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
                                        {product.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
                                        {product.description}
                                    </Typography>
                                    <Button
                                        endIcon={<ArrowOutwardIcon />}
                                        sx={{ p: 0, color: '#fff', '&:hover': { bgcolor: 'transparent', color: 'primary.main' } }}
                                        disableRipple
                                    >
                                        View Details
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default LoanProducts;
