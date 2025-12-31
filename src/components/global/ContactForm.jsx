import React, { useState } from "react";
import { Box, Typography, Stack, Button, Grid, MenuItem } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

// Brand Colors
const BRAND_BLUE = "#0062cc";

/* ------------------------- Styled Components -------------------------- */
const FieldLabel = styled(Typography)(({ theme }) => ({
    fontSize: 14,
    fontWeight: 600,
    marginBottom: 8,
    color: "#e2e8f0", // Light grey
    letterSpacing: "0.02em",
}));

const BaseControlStyle = {
    width: "100%",
    borderRadius: 12,
    border: `1px solid ${alpha("#fff", 0.1)}`,
    background: "rgba(255, 255, 255, 0.03)",
    backdropFilter: "blur(10px)",
    color: "#fff",
    padding: "16px 20px",
    fontSize: 16,
    outline: "none",
    transition: "all 0.2s ease-in-out",
    fontFamily: '"Inter", sans-serif',
};

const TextInput = styled("input")(({ theme }) => ({
    ...BaseControlStyle,
    "&::placeholder": {
        color: alpha("#fff", 0.4),
    },
    "&:focus": {
        borderColor: BRAND_BLUE,
        background: "rgba(255, 255, 255, 0.05)",
        boxShadow: `0 0 0 4px ${alpha(BRAND_BLUE, 0.1)}`,
    },
}));

const SelectInput = styled("select")(({ theme }) => ({
    ...BaseControlStyle,
    appearance: "none",
    paddingRight: "40px",
    backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 16px center",
    backgroundSize: "20px",
    "&:focus": {
        borderColor: BRAND_BLUE,
        background: "rgba(255, 255, 255, 0.05)",
        boxShadow: `0 0 0 4px ${alpha(BRAND_BLUE, 0.1)}`,
    },
    "& option": {
        backgroundColor: "#0a0a0a",
        color: "#fff",
    },
}));

const TextArea = styled("textarea")(({ theme }) => ({
    ...BaseControlStyle,
    minHeight: 120,
    resize: "vertical",
    "&::placeholder": {
        color: alpha("#fff", 0.4),
    },
    "&:focus": {
        borderColor: BRAND_BLUE,
        background: "rgba(255, 255, 255, 0.05)",
        boxShadow: `0 0 0 4px ${alpha(BRAND_BLUE, 0.1)}`,
    },
}));

const CTA = styled(Button)(({ theme }) => ({
    textTransform: "none",
    fontWeight: 700,
    fontSize: "1.1rem",
    paddingInline: theme.spacing(4),
    paddingBlock: theme.spacing(1.5),
    borderRadius: 50,
    color: "#fff",
    background: BRAND_BLUE,
    boxShadow: `0 8px 20px ${alpha(BRAND_BLUE, 0.4)}`,
    transition: "all 0.3s ease",
    "&:hover": {
        background: alpha(BRAND_BLUE, 0.9),
        transform: "translateY(-2px)",
        boxShadow: `0 12px 28px ${alpha(BRAND_BLUE, 0.5)}`,
    },
    "&:disabled": {
        background: alpha("#fff", 0.1),
        color: alpha("#fff", 0.3),
        boxShadow: "none",
    },
}));

export default function ContactForm() {
    const [status, setStatus] = useState({
        submitting: false,
        info: { error: false, msg: null },
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ submitting: true, info: { error: false, msg: null } });
        setTimeout(() => {
            setStatus({
                submitting: false,
                info: { error: false, msg: "Application request sent! We'll be in touch shortly." },
            });
            e.target.reset();
        }, 1500);
    };

    return (
        <Box
            sx={{
                p: { xs: 3, md: 6 },
                background: "linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
                borderRadius: 8,
                border: "1px solid rgba(255,255,255,0.05)",
                boxShadow: "0 24px 48px rgba(0,0,0,0.4)",
            }}
        >
            <Typography
                variant="h2"
                sx={{
                    fontWeight: 800,
                    fontSize: { xs: "2.5rem", md: "3rem" },
                    mb: 2,
                    background: `linear-gradient(135deg, #fff 0%, ${BRAND_BLUE} 100%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    textAlign: "center",
                    letterSpacing: "-0.02em"
                }}
            >
                Start Your Journey
            </Typography>

            <Typography
                variant="body1"
                align="center"
                sx={{ color: "grey.400", mb: 6, maxWidth: 500, mx: "auto" }}
            >
                Ready to find your dream home? Fill out the form below and one of our loan experts will reach out within 24 hours.
            </Typography>

            <form onSubmit={handleSubmit}>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <FieldLabel>Full Name</FieldLabel>
                        <TextInput required name="name" placeholder="John Doe" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FieldLabel>Email Address</FieldLabel>
                        <TextInput required type="email" name="email" placeholder="john@example.com" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FieldLabel>Phone Number</FieldLabel>
                        <TextInput required type="tel" name="phone" placeholder="(555) 123-4567" />
                    </Grid>
                    <Grid item xs={12}>
                        <FieldLabel>I am interested in...</FieldLabel>
                        <SelectInput required name="loanType" defaultValue="">
                            <option value="" disabled>Select a loan type</option>
                            <option value="purchase">Buying a Home</option>
                            <option value="refinance">Refinancing</option>
                            <option value="equity">Home Equity Line of Credit</option>
                            <option value="other">General Inquiry</option>
                        </SelectInput>
                    </Grid>
                    <Grid item xs={12}>
                        <FieldLabel>How can we help?</FieldLabel>
                        <TextArea name="message" placeholder="Tell us a bit about your goals..." />
                    </Grid>
                    <Grid item xs={12} sx={{ textAlign: "center", mt: 2 }}>
                        <CTA type="submit" size="large" endIcon={<ArrowForwardRoundedIcon />} disabled={status.submitting}>
                            {status.submitting ? "Sending Request..." : "Get Started Now"}
                        </CTA>
                    </Grid>
                    {status.info.msg && (
                        <Grid item xs={12}>
                            <Typography sx={{ color: status.info.error ? "#ef4444" : "#10b981", textAlign: "center", fontWeight: 600, bgcolor: status.info.error ? "rgba(239, 68, 68, 0.1)" : "rgba(16, 185, 129, 0.1)", p: 2, borderRadius: 4 }}>
                                {status.info.msg}
                            </Typography>
                        </Grid>
                    )}
                </Grid>
            </form>
        </Box>
    );
}
