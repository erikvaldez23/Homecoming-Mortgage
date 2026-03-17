import React, { useState } from "react";
import { Box, Container, Typography, Grid, Stack } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import { motion } from "framer-motion";
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';

// --- Styled Components ---

const GlassCard = styled(motion.div)({
    // background: "rgba(255, 255, 255, 0.03)",
    backdropFilter: "blur(20px)",
    borderRadius: "24px",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
    overflow: "hidden",
});



// --- Animations ---

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const ContactDetails = () => {


    return (
        <Box sx={{
            pt: 7,
            pb: 15,
            // bgcolor: "#0a0a0a",
            color: "#fff",
            position: "relative",
            overflow: "hidden",
        }}>
            <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
                <Grid container spacing={8} alignItems="center">

                    {/* Left Column: Visual & Info */}
                    <Grid item xs={12} md={5}>
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
                            <motion.div variants={itemVariants}>
                                {/* <Typography variant="h1" sx={{
                                    fontWeight: 900,
                                    fontSize: { xs: "3.5rem", md: "5rem" },
                                    lineHeight: 0.9,
                                    mb: 3,
                                    background: "linear-gradient(135deg, #fff 0%, #a5b4fc 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    letterSpacing: "-0.04em",
                                }}>
                                    Let's<br />Talk.
                                </Typography> */}
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                {/* <Typography sx={{
                                    fontSize: "1.2rem",
                                    color: "grey.400",
                                    mb: 6,
                                    maxWidth: "400px",
                                    lineHeight: 1.6
                                }}>
                                    Ready to start your journey? We're here to help you navigate the path to your dream home.
                                </Typography> */}
                            </motion.div>

                            <Stack spacing={4}>
                                {[
                                    { icon: <LocalPhoneOutlinedIcon />, label: "Call Us", value: "(972) 339-0630" },
                                    { icon: <EmailOutlinedIcon />, label: "Email Us", value: "Pirouz@mortgagehmc.com" },
                                    { icon: <LocationOnOutlinedIcon />, label: "Visit Us", value: "13601 Preston Rd. Suite 102E, Dallas, TX 75240" },
                                    { icon: <BusinessOutlinedIcon />, label: "Company NMLS", value: "2582358" },
                                    { icon: <BadgeOutlinedIcon />, label: "Individual NMLS", value: "1641846" }
                                ].map((item, index) => (
                                    <motion.div key={index} variants={itemVariants} whileHover={{ x: 10, transition: { duration: 0.2 } }}>
                                        <Stack direction="row" spacing={3} alignItems="center">
                                            <Box sx={{
                                                p: 1.5,
                                                borderRadius: "12px",
                                                background: "rgba(255,255,255,0.05)",
                                                border: "1px solid rgba(255,255,255,0.1)",
                                                display: "flex",
                                                color: "#0062cc"
                                            }}>
                                                {item.icon}
                                            </Box>
                                            <Box>
                                                <Typography variant="caption" sx={{ color: "grey.500", textTransform: "uppercase", letterSpacing: "0.1em" }}>{item.label}</Typography>
                                                <Typography variant="h6" sx={{ fontSize: "1.1rem", fontWeight: 500 }}>{item.value}</Typography>
                                            </Box>
                                        </Stack>
                                    </motion.div>
                                ))}
                            </Stack>
                        </motion.div>
                    </Grid>

                    {/* Right Column: Floating Form */}
                </Grid>
            </Container>
        </Box>
    );
};

export default ContactDetails;
