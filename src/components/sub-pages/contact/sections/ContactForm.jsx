import React, { useState } from "react";
import { Box, Typography, TextField, MenuItem, Button } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

const INPUT_BORDER = "rgba(255, 255, 255, 0.25)";

const FormContainer = styled(Box)(({ theme }) => ({
    // backgroundColor: "#0a0a0a",
    margin: "0 auto",
    color: "#fff",
    padding: theme.spacing(4),
    [theme.breakpoints.up("md")]: {
        padding: theme.spacing(6),
    },
}));

const FieldLabel = styled(Typography)({
    color: "rgba(255, 255, 255, 0.85)",
    fontSize: "0.85rem",
    marginBottom: "8px",
    marginLeft: "4px",
    fontWeight: 500,
});

const DarkInput = styled(TextField)({
    "& .MuiOutlinedInput-root": {
        color: "#fff",
        transition: "all 0.2s ease",
        "& fieldset": {
            borderColor: INPUT_BORDER,
        },
        "&:hover fieldset": {
            borderColor: "rgba(255, 255, 255, 0.5)",
        },
        "&.Mui-focused fieldset": {
            borderColor: "rgba(255, 255, 255, 0.8)",
        },
    },
    "& .MuiInputBase-input": {
        padding: "16px",
        fontSize: "1rem",
        "&::placeholder": {
            color: "rgba(255, 255, 255, 0.4)",
            opacity: 1,
        },
    },
    // Styles for Select
    "& .MuiSelect-icon": {
        color: "rgba(255, 255, 255, 0.3)",
    },
});

const SubmitButton = styled(Button)({
    textTransform: "none",
    width: "100%",
    color: "#fff",
    padding: "14px",
    fontSize: "1rem",
    fontWeight: 600,
    marginTop: "16px",
    backgroundColor: "#0062cc",
    "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.08)",
        borderColor: "rgba(255, 255, 255, 0.2)",
    },
});

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        location: "",
        service: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle submit logic
        console.log(formData);
    };

    return (
        <FormContainer maxWidth="lg">
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 4, letterSpacing: "-0.02em" }}>
                Contact Form
            </Typography>

            <form onSubmit={handleSubmit}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>

                    <Box>
                        <FieldLabel>Name</FieldLabel>
                        <DarkInput
                            fullWidth
                            name="name"
                            placeholder="First & Last Name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </Box>

                    <Box>
                        <FieldLabel>Email</FieldLabel>
                        <DarkInput
                            fullWidth
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </Box>

                    <Box>
                        <FieldLabel>Phone</FieldLabel>
                        <DarkInput
                            fullWidth
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </Box>

                    <Box>
                        <FieldLabel>Location</FieldLabel>
                        <DarkInput
                            select
                            fullWidth
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            displayEmpty
                            SelectProps={{
                                displayEmpty: true,
                                renderValue: (value) => {
                                    if (!value) {
                                        return <span style={{ color: "rgba(255, 255, 255, 0.2)" }}>Select...</span>;
                                    }
                                    return value;
                                },
                            }}
                        >
                            <MenuItem value="" disabled>Select...</MenuItem>
                            <MenuItem value="dallas">Dallas, TX</MenuItem>
                            <MenuItem value="austin">Austin, TX</MenuItem>
                            <MenuItem value="houston">Houston, TX</MenuItem>
                        </DarkInput>
                    </Box>

                    <Box>
                        <FieldLabel>Service</FieldLabel>
                        <DarkInput
                            select
                            fullWidth
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            displayEmpty
                            SelectProps={{
                                displayEmpty: true,
                                renderValue: (value) => {
                                    if (!value) {
                                        return <span style={{ color: "rgba(255, 255, 255, 0.2)" }}>Select...</span>;
                                    }
                                    return value;
                                },
                            }}
                        >
                            <MenuItem value="" disabled>Select...</MenuItem>
                            <MenuItem value="purchase">Home Purchase</MenuItem>
                            <MenuItem value="refinance">Refinancing</MenuItem>
                            <MenuItem value="equity">Home Equity</MenuItem>
                        </DarkInput>
                    </Box>

                    <Box>
                        <FieldLabel>Message</FieldLabel>
                        <DarkInput
                            fullWidth
                            multiline
                            rows={4}
                            name="message"
                            placeholder="What do you need help with?"
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </Box>

                    <SubmitButton type="submit">
                        Submit
                    </SubmitButton>
                </Box>
            </form>
        </FormContainer>
    );
}
