import React, { useState } from "react";
import { Box, Container, Typography, Stack, Collapse, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const faqs = [
    {
        question: "Do these promotions expire?",
        answer: "Yes, most promotions have an expiration date. Please check the specific terms on the offer card or contact a loan officer for details.",
    },
    {
        question: "Can I combine multiple offers?",
        answer: "Generally, offers cannot be combined unless explicitly stated. Our team will help you apply the single best promotion for your scenario.",
    },
    {
        question: "How do I redeem a promo code?",
        answer: "Mention the promo code to your loan officer during your initial consultation or application process.",
    },
    {
        question: "Are these offers available for all loan types?",
        answer: "Some offers are specific to FHA, VA, or Conventional loans. Eligibility requirements apply to all promotions.",
    },
];

const PromotionsFAQ = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Box sx={{ py: 15, bgcolor: "#0a0a0a", color: "#fff" }}>
            <Container maxWidth="lg">
                <Typography
                    variant="h2"
                    sx={{
                        fontWeight: 800,
                        mb: 8,
                        fontSize: { xs: "3rem", md: "4rem" },
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
