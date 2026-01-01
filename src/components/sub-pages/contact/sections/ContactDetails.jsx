import React, { useState } from "react";
import { Box, Container, Typography, Grid, TextField, Button, Stack, MenuItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import HomeIcon from '@mui/icons-material/Home';

// Custom styled components
const StyledInput = styled(TextField)({
    "& .MuiOutlinedInput-root": {
        borderRadius: "12px",
        backgroundColor: "#fff",
        "& fieldset": {
            borderColor: "#e2e8f0",
        },
        "&:hover fieldset": {
            borderColor: "#cbd5e1",
        },
        "&.Mui-focused fieldset": {
            borderColor: "#10b981", // Green accent
        },
    },
    "& .MuiInputLabel-root.Mui-focused": {
        color: "#10b981",
    }
});

const SendButton = styled(Button)({
    backgroundColor: "#10b981",
    color: "#fff",
    borderRadius: "24px",
    textTransform: "none",
    padding: "12px 32px",
    fontSize: "1rem",
    fontWeight: 600,
    boxShadow: "0 4px 6px -1px rgba(16, 185, 129, 0.4)",
    "&:hover": {
        backgroundColor: "#059669",
        boxShadow: "0 10px 15px -3px rgba(16, 185, 129, 0.5)",
    },
});

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
        <Box sx={{ py: 10, bgcolor: "#fff", color: "#1e293b" }}>
            <Container maxWidth="lg">
                {/* Header Section */}
                <Box sx={{ textAlign: "center", mb: 8 }}>
                    <Stack direction="row" spacing={1} justifyContent="center" alignItems="center" sx={{ mb: 2 }}>
                        <HomeIcon sx={{ color: "#10b981" }} />
                        <Typography sx={{ color: "#1e293b", fontWeight: 700, fontSize: "1rem" }}>
                            Contact us
                        </Typography>
                    </Stack>
                    <Typography variant="h2" sx={{ fontWeight: 800, fontSize: { xs: "2.5rem", md: "3.5rem" }, mb: 3, letterSpacing: "-0.02em" }}>
                        Have questions? ready to help!
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#64748b", maxWidth: "800px", mx: "auto", fontSize: "1.1rem" }}>
                        Looking for your dream home or ready to sell? Our expert team offers personalized guidance and market expertise tailored to you.
                    </Typography>
                </Box>

                {/* Main Content Card */}
                <Box sx={{
                    bgcolor: "#fff",
                    borderRadius: 4,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    border: "1px solid #f1f5f9",
                    overflow: "hidden",
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", md: "40% 60%" }
                }}>
                    {/* Left Column: Contact Info */}
                    <Box sx={{ position: "relative" }}>
                        {/* Background Image with Overlay */}
                        <Box sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundImage: `url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80')`, // Placeholder luxury home
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            "::after": {
                                content: '""',
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: "rgba(0, 0, 0, 0.6)", // Dark overlay
                            }
                        }} />

                        {/* Content */}
                        <Box sx={{ position: "relative", zIndex: 1, p: 6, height: "100%", display: "flex", flexDirection: "column", color: "#fff" }}>
                            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
                                Contact information
                            </Typography>
                            <Typography sx={{ opacity: 0.9, mb: 8, fontSize: "1.1rem" }}>
                                Ready to find your dream home or sell your property? We're here to help!
                            </Typography>

                            <Stack spacing={4} sx={{ mt: "auto" }}>
                                <Stack direction="row" spacing={3} alignItems="center">
                                    <LocalPhoneOutlinedIcon sx={{ fontSize: 28 }} />
                                    <Typography sx={{ fontSize: "1.1rem" }}>+1 0239 0310 1122</Typography>
                                </Stack>
                                <Stack direction="row" spacing={3} alignItems="center">
                                    <EmailOutlinedIcon sx={{ fontSize: 28 }} />
                                    <Typography sx={{ fontSize: "1.1rem" }}>support@homecoming.com</Typography>
                                </Stack>
                                <Stack direction="row" spacing={3} alignItems="center">
                                    <LocationOnOutlinedIcon sx={{ fontSize: 28 }} />
                                    <Typography sx={{ fontSize: "1.1rem" }}>Blane Street, Manchester</Typography>
                                </Stack>
                            </Stack>
                        </Box>
                    </Box>

                    {/* Right Column: Form */}
                    <Box sx={{ p: 6 }}>
                        <Grid container spacing={3}>
                            <Grid item xs={6}>
                                <StyledInput
                                    fullWidth
                                    label="Name"
                                    placeholder="Sunil Joshi"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    InputLabelProps={{ shrink: true }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <StyledInput
                                    fullWidth
                                    label="Phone number *"
                                    placeholder=""
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    InputLabelProps={{ shrink: true }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <StyledInput
                                    fullWidth
                                    label="Email address *"
                                    placeholder=""
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    InputLabelProps={{ shrink: true }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <StyledInput
                                    select
                                    fullWidth
                                    label="Interested in"
                                    name="interestedIn"
                                    value={formData.interestedIn}
                                    onChange={handleChange}
                                    InputLabelProps={{ shrink: true }}
                                >
                                    <MenuItem value="buying">Buying a Home</MenuItem>
                                    <MenuItem value="refinance">Refinance</MenuItem>
                                    <MenuItem value="selling">Selling a Home</MenuItem>
                                    <MenuItem value="investing">Real Estate Investing</MenuItem>
                                </StyledInput>
                            </Grid>
                            <Grid item xs={12}>
                                <StyledInput
                                    fullWidth
                                    multiline
                                    rows={4}
                                    label="Message"
                                    placeholder="Write here your message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    InputLabelProps={{ shrink: true }}
                                />
                            </Grid>
                            <Grid item xs={12} sx={{ mt: 2 }}>
                                <SendButton variant="contained">
                                    Send message
                                </SendButton>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default ContactDetails;
