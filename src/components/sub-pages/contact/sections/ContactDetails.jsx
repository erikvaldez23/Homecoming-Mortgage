import React, { useState } from "react";
import { Box, Container, Typography, Grid, TextField, Button, Stack, MenuItem } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import { motion } from "framer-motion";
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

// --- Styled Components ---

const GlassCard = styled(motion.div)({
    background: "rgba(255, 255, 255, 0.03)",
    backdropFilter: "blur(20px)",
    borderRadius: "24px",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
    overflow: "hidden",
});

const GlowingInput = styled(TextField)({
    "& .MuiOutlinedInput-root": {
        borderRadius: "12px",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        border: "1px solid rgba(255, 255, 255, 0.05)",
        color: "#fff",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        "& fieldset": { border: "none" },
        "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
        },
        "&.Mui-focused": {
            backgroundColor: "rgba(0, 98, 204, 0.05)",
            border: "1px solid #0062cc",
            boxShadow: "0 0 15px rgba(0, 98, 204, 0.3), inset 0 0 10px rgba(0, 98, 204, 0.1)",
            transform: "translateY(-2px)"
        },
    },
    "& .MuiInputLabel-root": {
        color: "rgba(255, 255, 255, 0.4)",
        fontFamily: '"Inter", sans-serif',
    },
    "& .MuiInputLabel-root.Mui-focused": {
        color: "#0062cc",
        fontWeight: 600
    },
    "& .MuiInputBase-input": {
        color: "#fff",
        fontWeight: 500,
    },
    "& .MuiSelect-icon": {
        color: "rgba(255, 255, 255, 0.5)",
    }
});

const MagneticButton = styled(motion.button)({
    background: "linear-gradient(135deg, #0062cc 0%, #004599 100%)",
    color: "#fff",
    border: "none",
    borderRadius: "12px",
    padding: "18px 40px",
    fontSize: "1rem",
    fontWeight: 700,
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    cursor: "pointer",
    boxShadow: "0 10px 30px rgba(0, 98, 204, 0.4)",
    position: "relative",
    overflow: "hidden",
    outline: "none",
    "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: "-100%",
        width: "100%",
        height: "100%",
        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
        transition: "left 0.5s ease",
    },
    "&:hover::before": {
        left: "100%",
    },
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
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        interestedIn: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <Box sx={{
            pt: 7,
            pb: 15,
            bgcolor: "#0a0a0a",
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
                                    { icon: <LocationOnOutlinedIcon />, label: "Visit Us", value: "13601 Preston Rd. Suite 102E, Dallas, TX 75240" }
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
                    <Grid item xs={12} md={7}>
                        <GlassCard
                            initial={{ opacity: 0, x: 50, rotateY: 10 }}
                            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            <Box sx={{ p: { xs: 4, md: 6 } }}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} md={6}>
                                        <GlowingInput
                                            fullWidth
                                            label="Your Name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <GlowingInput
                                            fullWidth
                                            label="Phone Number"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <GlowingInput
                                            fullWidth
                                            label="Email Address"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <GlowingInput
                                            select
                                            fullWidth
                                            label="I'm interested in..."
                                            name="interestedIn"
                                            value={formData.interestedIn}
                                            onChange={handleChange}
                                        >
                                            <MenuItem value="buying">Buying a Home</MenuItem>
                                            <MenuItem value="refinance">Refinancing</MenuItem>
                                            <MenuItem value="selling">Selling</MenuItem>
                                            <MenuItem value="investing">Investing</MenuItem>
                                        </GlowingInput>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <GlowingInput
                                            fullWidth
                                            multiline
                                            rows={4}
                                            label="Message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sx={{ mt: 2 }}>
                                        <MagneticButton
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            Send Message
                                        </MagneticButton>
                                    </Grid>
                                </Grid>
                            </Box>
                        </GlassCard>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default ContactDetails;
