import React from "react";
import { Box } from "@mui/material";
import { Helmet } from "react-helmet-async";
import AboutHero from "./sections/AboutHero";
import OurStory from "./sections/OurStory";
import MissionVision from "./sections/MissionVision";
import Team from "./sections/Team";
import CTA from "../../global/CTA";

const About = () => {
    return (
        <Box component="section" sx={{ width: "100%", overflowX: "hidden" }}>
            <Helmet>
                <title>About Homecoming Mortgage | Our Story</title>
                <meta name="description" content="Learn about Homecoming Mortgage, our mission, and our dedication to providing transparent and personalized mortgage solutions." />
            </Helmet>
            <AboutHero />
            <OurStory />
            <MissionVision />
            {/* <Team /> */}
            <CTA />
        </Box>
    );
};

export default About;
