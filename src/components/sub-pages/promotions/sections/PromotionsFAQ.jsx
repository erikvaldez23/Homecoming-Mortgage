import React from "react";
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
    return (
        <Box sx={{ py: 10, bgcolor: "background.default" }}>
            <Container maxWidth="md">
                <Typography variant="h4" align="center" sx={{ fontWeight: 800, mb: 6 }}>
                    Frequently Asked Questions
                </Typography>

                {faqs.map((faq, index) => (
                    <Accordion
                        key={index}
                        sx={{
                            bgcolor: "transparent",
                            color: "#fff",
                            mb: 2,
                            border: "1px solid rgba(255,255,255,0.1)",
                            borderRadius: "16px !important",
                            "&:before": { display: "none" },
                        }}
                    >
                        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "primary.main" }} />}>
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>{faq.question}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="body1" sx={{ color: "text.secondary" }}>
                                {faq.answer}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Container>
        </Box>
    );
};

export default PromotionsFAQ;
