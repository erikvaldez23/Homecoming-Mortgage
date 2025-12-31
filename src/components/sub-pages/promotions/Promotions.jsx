import React from "react";
import { Box } from "@mui/material";
import PromotionsHero from "./sections/PromotionsHero";
import CurrentOffers from "./sections/CurrentOffers";
import PromotionsFAQ from "./sections/PromotionsFAQ";
import CTA from "../../global/CTA";

const Promotions = () => {
    return (
        <Box sx={{ width: "100%", overflowX: "hidden" }}>
            <PromotionsHero />
            <CurrentOffers />
            <PromotionsFAQ />
            <Box sx={{ px: 2 }}>
                <CTA />
            </Box>
        </Box>
    );
};

export default Promotions;
