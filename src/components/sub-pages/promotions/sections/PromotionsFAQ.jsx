import React, { useState } from "react";
import { Box, Container, Typography, Stack, Collapse, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const faqs = [
    {
        question: "How often can I refinance?",
        answer: "After any purchase or refinance, you must wait a minimum of 6 months before you can refinance again. This means there must be a 6 month gap from the closing of your purchase/refinance to the closing of the new refinance.",
    },
    {
        question: "What happens to my escrow account with my current lender when I refinance to a different lender?",
        answer: "After your closing, your previous lender will reimburse you the full amount of your escrow balance you had with them.",
    },
    {
        question: "Do you charge any fees for processing my loan?",
        answer: "There are no fees on my end for processing and submitting your loan to the lender.This includes any application & origination fees.The only fee involved is the underwriting fee which goes to the lender.",
    },
    {
        question: "What documents will I need to provide?",
        answer: "When you are ready to proceed, I will provide you a list of required documents for your home purchase/refinance.",
    },
];

const PromotionsFAQ = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Box sx={{ py: 8, color: "#fff" }}>
            <Container maxWidth="md">
                <Typography
                    variant="h2"
                    sx={{
                        fontWeight: 800,
                        mb: 4,
                        fontSize: { xs: "2.5rem", md: "3rem" },
                        background: "linear-gradient(90deg, #fff, #90caf9)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    Common Questions.
                </Typography>

                <Stack spacing={0}>
                    {faqs.map((faq, index) => {
                        const isExpanded = expanded === index;
                        return (
                            <Box
                                key={index}
                                sx={{
                                    borderBottom: "1px solid rgba(255,255,255,0.1)",
                                    py: 4,
                                    cursor: "pointer",
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                        bgcolor: "rgba(255,255,255,0.02)",
                                        pl: 2
                                    }
                                }}
                                onClick={() => setExpanded(isExpanded ? false : index)}
                            >
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Typography variant="h5" sx={{ fontWeight: 600, color: isExpanded ? "#0062cc" : "#fff", transition: "color 0.3s" }}>
                                        {faq.question}
                                    </Typography>
                                    <IconButton sx={{ color: isExpanded ? "#0062cc" : "grey.500" }}>
                                        {isExpanded ? <RemoveIcon /> : <AddIcon />}
                                    </IconButton>
                                </Stack>
                                <Collapse in={isExpanded}>
                                    <Typography variant="body1" sx={{ mt: 2, color: "grey.400", lineHeight: 1.6, maxWidth: "80%" }}>
                                        {faq.answer}
                                    </Typography>
                                </Collapse>
                            </Box>
                        );
                    })}
                </Stack>
            </Container>
        </Box>
    );
};

export default PromotionsFAQ;
