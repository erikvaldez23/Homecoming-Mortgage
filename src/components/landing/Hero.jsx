import React from 'react';
import { Box, Typography, Button, Stack, Container, Paper, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Hero = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        }
    };

    return (
        <Box
            sx={{
                position: 'relative',
                minHeight: '100dvh',
                width: '100vw',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'radial-gradient(circle at 50% 50%, #1a2c4e 0%, #0a0a0a 100%)',
                overflow: 'hidden',
                color: '#fff',
                textAlign: 'left',
                pt: { xs: 10, md: 0 }
            }}
        >
            {/* Ambient Background Elements */}
            <Box
                component={motion.div}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                sx={{
                    position: 'absolute',
                    top: '-10%',
                    right: '-5%',
                    width: '600px',
                    height: '600px',
                    background: 'radial-gradient(circle, rgba(0, 98, 204, 0.15) 0%, rgba(0,0,0,0) 70%)',
                    filter: 'blur(60px)',
                    zIndex: 0,
                }}
            />
            <Box
                component={motion.div}
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
                sx={{
                    position: 'absolute',
                    bottom: '-10%',
                    left: '-10%',
                    width: '700px',
                    height: '700px',
                    background: 'radial-gradient(circle, rgba(144, 202, 249, 0.1) 0%, rgba(0,0,0,0) 70%)',
                    filter: 'blur(80px)',
                    zIndex: 0,
                }}
            />


            {/* Main Content */}
            <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
                <Stack
                    component={motion.div}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    spacing={4}
                    maxWidth="900px"
                >
                    <Box component={motion.div} variants={itemVariants}>
                        <Typography
                            variant="h1"
                            sx={{
                                fontFamily: 'Inter, sans-serif',
                                fontSize: { xs: 'clamp(2.5rem, 8vw, 4rem)', md: '5.5rem' },
                                fontWeight: 800,
                                lineHeight: 1.05,
                                letterSpacing: '-0.03em',
                                color: '#fff',
                                textShadow: '0 20px 40px rgba(0,0,0,0.3)'
                            }}
                        >
                            Your Personal<br />
                            <Box
                                component="span"
                                sx={{
                                    background: "linear-gradient(90deg, #fff 0%, #90caf9 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    display: "inline-block"
                                }}
                            >
                                Path to Home Ownership.
                            </Box>
                        </Typography>
                    </Box>

                    <Box component={motion.div} variants={itemVariants}>
                        <Typography
                            variant="body1"
                            sx={{
                                color: 'rgba(255,255,255,0.8)',
                                fontSize: { xs: '1.1rem', md: '1.35rem' },
                                lineHeight: 1.6,
                                maxWidth: '650px',
                                fontWeight: 300
                            }}
                        >
                            For personalized pricing and rates, please call us directly. Ready to move forward? Start your application online today.
                        </Typography>
                    </Box>

                    <Stack
                        component={motion.div}
                        variants={itemVariants}
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={2}
                        sx={{ pt: 2 }}
                    >
                        <Button
                            component={motion.a}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            href="https://texasfinancialresourcemgmt1.proiwebsites.com/loanportal/login"
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="contained"
                            size="large"
                            endIcon={<ArrowForwardIcon />}
                            sx={{
                                bgcolor: '#0062cc',
                                color: '#fff',
                                px: 5,
                                py: 2.2,
                                fontSize: '1.1rem',
                                borderRadius: '50px',
                                boxShadow: '0 0 20px rgba(0, 98, 204, 0.4)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                textTransform: 'none',
                                fontWeight: 600,
                                "&:hover": {
                                    bgcolor: '#0052cc',
                                    boxShadow: '0 0 30px rgba(0, 98, 204, 0.6)',
                                    color: "#fff"
                                }
                            }}
                        >
                            Apply Now
                        </Button>
                        <Button
                            component={motion.a}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            href="tel:+19723390630"
                            variant="outlined"
                            size="large"
                            sx={{
                                color: '#fff',
                                borderColor: 'rgba(255,255,255,0.2)',
                                px: 5,
                                py: 2.2,
                                fontSize: '1.1rem',
                                borderRadius: '50px',
                                backdropFilter: 'blur(10px)',
                                bgcolor: 'rgba(255,255,255,0.03)',
                                textTransform: 'none',
                                fontWeight: 600,
                                '&:hover': {
                                    borderColor: '#fff',
                                    bgcolor: 'rgba(255,255,255,0.1)',
                                    color: "#fff"
                                },
                            }}
                        >
                            Call for Rates
                        </Button>
                    </Stack>
                </Stack>
            </Container>

            {/* Floating Glass Contact Card */}
            <Paper
                component={motion.div}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8, type: "spring" }}
                elevation={0}
                sx={{
                    position: 'absolute',
                    bottom: { xs: '20px', md: '40px' },
                    right: { xs: '50%', md: '40px' },
                    transform: { xs: 'translateX(50%)', md: 'none' },
                    bgcolor: 'rgba(10, 25, 41, 0.7)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '24px',
                    p: { xs: 2.5, md: 3 },
                    display: 'flex',
                    alignItems: 'center',
                    gap: { xs: 3, md: 5 },
                    zIndex: 10,
                    width: { xs: '90%', sm: 'auto' },
                    maxWidth: { xs: '400px', sm: 'auto' },
                    justifyContent: 'space-around',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.4)',
                }}
            >
                <ContactItem
                    icon={<PhoneInTalkOutlinedIcon />}
                    label="Call Us"
                    href="tel:+19723390630"
                />
                <Divider />
                <ContactItem
                    icon={<EmailOutlinedIcon />}
                    label="Email Us"
                    href="mailto:Pirouz@mortgagehmc.com"
                />
                <Divider />
                <ContactItem
                    icon={<CalendarMonthOutlinedIcon />}
                    label="Schedule"
                    href="/contact"
                    internal
                />
            </Paper>
        </Box>
    );
};

const Divider = () => (
    <Box sx={{ width: '1px', height: '30px', bgcolor: 'rgba(255,255,255,0.1)', display: { xs: 'none', sm: 'block' } }} />
);

const ContactItem = ({ icon, label, href, internal }) => (
    <Box
        component="a"
        href={href}
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 0.8,
            textDecoration: 'none',
            color: 'rgba(255,255,255,0.7)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
                color: '#fff',
                transform: 'translateY(-2px)'
            }
        }}
    >
        <Box sx={{
            color: '#fff',
            '& svg': { fontSize: '1.6rem' }
        }}>
            {icon}
        </Box>
        <Typography variant="caption" sx={{ fontWeight: 600, fontSize: '0.75rem', letterSpacing: '0.02em' }}>
            {label}
        </Typography>
    </Box>
);

export default Hero;
