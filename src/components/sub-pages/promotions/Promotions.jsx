import React from "react";
import { Box } from "@mui/material";
import { Helmet } from "react-helmet-async";
import PromotionsHero from "./sections/PromotionsHero";
import CurrentOffers from "./sections/CurrentOffers";
import PromotionsFAQ from "./sections/PromotionsFAQ";
import CTA from "../../global/CTA";

const Promotions = () => {
    return (
        <Box component="section" sx={{ width: "100%", overflowX: "hidden" }}>
            <Helmet>
                <title>Mortgage Promotions & Offers | Homecoming Mortgage</title>
                <meta name="description" content="Discover special rates, closing cost bonuses, and limited-time mortgage promotions offered by Homecoming Mortgage." />
            </Helmet>
            <PromotionsHero />
            <CurrentOffers />
            <PromotionsFAQ />
            <CTA />
        </Box>
    );
};

export default Promotions;
