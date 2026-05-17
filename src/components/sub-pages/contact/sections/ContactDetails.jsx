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

const ContactDetails = () => {


    return (
        <Box sx={{
            pt: 4,
            pb: 8,
            color: "#fff",
            position: "relative",
            overflow: "hidden",
        }}>
            <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
                <Grid container spacing={8} alignItems="center">

                    {/* Left Column: Visual & Info */}
                    <Grid item xs={12} md={5}>
                        <Stack spacing={4}>
                            {[
                                { icon: <LocalPhoneOutlinedIcon />, label: "Call Us", value: "(972) 339-0630" },
                                { icon: <EmailOutlinedIcon />, label: "Email Us", value: "Pirouz@mortgagehmc.com" },
                                { icon: <LocationOnOutlinedIcon />, label: "Visit Us", value: "13601 Preston Rd. Suite 102E, Dallas, TX 75240" },
                                { icon: <BusinessOutlinedIcon />, label: "Company NMLS", value: "2582358" },
                                { icon: <BadgeOutlinedIcon />, label: "Individual NMLS", value: "1641846" }
                            ].map((item, index) => (
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
                            ))}
                        </Stack>
                    </Grid>
                </Grid>
            </Container >
        </Box >
    );
};

export default ContactDetails;
