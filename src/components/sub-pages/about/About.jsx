import React from "react";
import { Box } from "@mui/material";
import AboutHero from "./sections/AboutHero";
import OurStory from "./sections/OurStory";
import MissionVision from "./sections/MissionVision";
import Team from "./sections/Team";
import CTA from "../../global/CTA";

const About = () => {
    return (
        <Box sx={{ width: "100%", overflowX: "hidden" }}>
            <AboutHero />
            <OurStory />
            <MissionVision />
            {/* <Team /> */}
            <CTA />
        </Box>
    );
};

export default About;
