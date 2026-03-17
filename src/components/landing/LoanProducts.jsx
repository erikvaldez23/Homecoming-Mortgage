import React from 'react';
import { Box, Container, Typography, Stack } from '@mui/material';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined';
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';
import VillaOutlinedIcon from '@mui/icons-material/VillaOutlined';

const loanProductsData = [
    {
        id: '01',
        title: 'Conventional',
        description: 'Standard mortgage loans for borrowers with good credit. Offers great rates and flexible terms for your primary or investment property.',
        icon: <GavelOutlinedIcon sx={{ fontSize: 32 }} />,
    },
    {
        id: '02',
        title: 'FHA Loans',
        description: 'Perfect for first-time homebuyers with lower credit scores or smaller down payments. Secure your future with flexible requirements.',
        icon: <AccountBalanceOutlinedIcon sx={{ fontSize: 32 }} />,
    },
    {
        id: '03',
        title: 'VA Loans',
        description: 'Exclusive benefits for veterans and active military. Enjoy zero down payment options and competitive interest rates as a thank you for your service.',
        icon: <MilitaryTechOutlinedIcon sx={{ fontSize: 32 }} />,
    },
    {
        id: '04',
        title: 'DSCR',
        description: 'Apply for a mortgage through your LLC or S Corp',
        icon: <VillaOutlinedIcon sx={{ fontSize: 32 }} />,
    }
];

const LoanProducts = () => {
    return (
        <Box sx={{ py: 20, overflow: 'hidden', color: '#fff' }}>
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
                        Our Products.
                    </Typography>
                    <Typography variant="body1" sx={{ color: "grey.400", maxWidth: "800px", fontSize: "1.2rem", lineHeight: 1.6 }}>
                        We offer a comprehensive range of loan products tailored to meet your unique needs. Whether you're buying your first home, upgrading to a luxury estate, or investing in your future, we have the right solution for you.
                    </Typography>
                </Box>

                {/* Content - Horizontal Layout with Vertical Dividers */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        borderTop: { xs: 'none', md: "1px solid rgba(255,255,255,0.1)" },
                        borderBottom: { xs: 'none', md: "1px solid rgba(255,255,255,0.1)" },
                    }}
                >
                    {loanProductsData.map((product, index) => (
                        <Box
                            key={index}
                            sx={{
                                flex: 1,
                                position: 'relative',
                                p: 4,
                                borderRight: { xs: 'none', md: "1px solid rgba(255,255,255,0.1)" },
                                borderBottom: { xs: "1px solid rgba(255,255,255,0.1)", md: 'none' },
                                '&:last-child': {
                                    borderRight: 'none',
                                    borderBottom: 'none'
                                },
                            }}
                        >
                            <Stack spacing={4} height="100%" justifyContent="space-between">
                                <Box>
                                    <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ mb: 3 }}>
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
                                            {product.id}
                                        </Typography>
                                        <Box
                                            sx={{
                                                p: 1,
                                                borderRadius: "50%",
                                                color: "#0062cc",
                                            }}
                                        >
                                            {product.icon}
                                        </Box>
                                    </Stack>

                                    <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, fontSize: '1.5rem' }}>
                                        {product.title}
                                    </Typography>

                                    <Typography variant="body1" sx={{ color: "grey.400", lineHeight: 1.6 }}>
                                        {product.description}
                                    </Typography>
                                </Box>
                            </Stack>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default LoanProducts;
