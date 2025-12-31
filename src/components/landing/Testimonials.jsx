// src/components/sections/Testimonials.jsx
import React from "react";
import {
    Box,
    Card,
    CardContent,
    Typography,
    Avatar,
    Rating,
    Container,
    Button,
    useMediaQuery,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GoogleIcon from '@mui/icons-material/Google';

// Static Data for Homecoming Mortgage
const reviews = [
    {
        author_name: "Sarah Jenkins",
        profile_photo_url: "https://ui-avatars.com/api/?name=Sarah+Jenkins&background=0D8ABC&color=fff",
        rating: 5,
        time: new Date().setDate(new Date().getDate() - 7) / 1000,
        text: "Homecoming Mortgage made the impossible possible. Their team guided me through every step and found a program that fit my budget perfectly. Highly recommended!",
    },
    {
        author_name: "Michael Torres",
        profile_photo_url: "https://ui-avatars.com/api/?name=Michael+Torres&background=0D8ABC&color=fff",
        rating: 5,
        time: new Date().setDate(new Date().getDate() - 30) / 1000,
        text: "Unmatched professionalism and speed. I rely on them for all my investment properties. Best rates in town and transparent communication throughout the process.",
    },
    {
        author_name: "Emily & David",
        profile_photo_url: "https://ui-avatars.com/api/?name=Emily+David&background=0D8ABC&color=fff",
        rating: 5,
        time: new Date().setDate(new Date().getDate() - 21) / 1000,
        text: "We saved hundreds on our monthly payment thanks to their refinancing expertise. The process was smooth and transparent. Thank you Homecoming team!",
    },
    {
        author_name: "Jessica Lee",
        profile_photo_url: "https://ui-avatars.com/api/?name=Jessica+Lee&background=0D8ABC&color=fff",
        rating: 5,
        time: new Date().setDate(new Date().getDate() - 60) / 1000,
        text: "As a first-time homebuyer, I was intimidated by the process. They explained everything clearly and got me a fantastic rate. I'm now happily in my new home!",
    },
];

// Fixed card heights
const CARD_H_MOBILE = 300;
const CARD_H_DESKTOP = 320;
const SLIDE_GAP = 12;

/* ---------------- Card styles ---------------- */
const baseCardSX = {
    p: 3,
    borderRadius: 2,
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    backgroundColor: "rgba(2, 13, 28, 0.6)", // Deep Navy transparency
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    border: "1px solid rgba(255,255,255,0.1)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
    color: alpha("#fff", 0.95),
    transition: "transform 0.3s, box-shadow 0.3s, background-color 0.3s",
};

const hoverDesktopSX = {
    "&:hover": {
        transform: "translateY(-8px) scale(1.02)",
        boxShadow: "0 14px 36px rgba(0, 98, 204, 0.2)", // Blue glow
        backgroundColor: "rgba(2, 13, 28, 0.8)",
        borderColor: "primary.main"
    },
};

const secondaryText = alpha("#fff", 0.7);

const Testimonials = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");

    const sliderSettings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        centerPadding: isMobile ? "0px" : "8%",
        adaptiveHeight: false,
        appendDots: (dots) => (
            <Box sx={{ textAlign: "center", mt: 2 }}>
                <ul style={{ margin: "0px", padding: "0px" }}>{dots}</ul>
            </Box>
        ),
        customPaging: (i) => (
            <Box
                component="div"
                sx={{
                    width: "10px",
                    height: "10px",
                    backgroundColor: "rgba(255,255,255,0.3)",
                    borderRadius: "50%",
                    display: "inline-block",
                    margin: "0 5px",
                    transition: "background-color 0.3s ease",
                    "&.slick-active": { backgroundColor: "primary.main" } // Active dot blue
                }}
            />
        ),
    };

    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.3 } },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <Box id="reviews" sx={{ py: isMobile ? 8 : 12, textAlign: "center", bgcolor: "#050505" }}>
            <Container maxWidth="xl">
                <Box textAlign="center" mb={8}>
                    <Typography variant="h2" sx={{ fontWeight: 800 }}>
                        What our clients say.
                    </Typography>
                </Box>

                {
                    isMobile ? (
                        <Box sx={{ "& .slick-slide": { padding: `0 ${SLIDE_GAP}px` }, "& .slick-list": { margin: `0 -${SLIDE_GAP}px` } }}>
                            <Slider {...sliderSettings}>
                                {reviews.map((review, index) => (
                                    <Box key={index}>
                                        <Card sx={{ ...baseCardSX, width: "92vw", maxWidth: 560, height: CARD_H_MOBILE, margin: "0 auto", mb: 2 }}>
                                            <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
                                                <Box sx={{ position: "absolute", top: 20, right: 20 }}>
                                                    <GoogleIcon sx={{ color: '#fff', opacity: 0.8 }} />
                                                </Box>
                                                <Box sx={{ display: "flex", alignItems: "center", mb: 2, flexShrink: 0 }}>
                                                    <Avatar sx={{ width: 40, height: 40, mr: 2, border: "2px solid rgba(255,255,255,0.25)" }} src={review.profile_photo_url} alt={review.author_name} />
                                                    <Box>
                                                        <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: "0.95rem", color: "#fff" }}>{review.author_name}</Typography>
                                                        <Typography variant="body2" sx={{ color: secondaryText }}>{new Date(review.time * 1000).toLocaleDateString()}</Typography>
                                                    </Box>
                                                </Box>
                                                <Rating value={review.rating} precision={0.5} readOnly sx={{ mb: 2, flexShrink: 0, "& .MuiRating-iconFilled": { color: "#FFD700" } }} />
                                                <Typography variant="body2" sx={{ color: alpha("#fff", 0.9), fontStyle: "italic", fontSize: "0.95rem", lineHeight: 1.6 }}>"{review.text}"</Typography>
                                            </CardContent>
                                        </Card>
                                    </Box>
                                ))}
                            </Slider>
                        </Box>
                    ) : (
                        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
                            <Box sx={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 3, justifyContent: "center", alignItems: "stretch" }}>
                                {reviews.map((review, index) => (
                                    <motion.div key={index} variants={cardVariants}>
                                        <Card sx={{ ...baseCardSX, ...hoverDesktopSX, height: CARD_H_DESKTOP }}>
                                            <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
                                                <Box sx={{ position: "absolute", top: 20, right: 20 }}>
                                                    <GoogleIcon sx={{ color: '#fff', opacity: 0.8 }} />
                                                </Box>
                                                <Box sx={{ display: "flex", alignItems: "center", mb: 2, flexShrink: 0 }}>
                                                    <Avatar sx={{ width: 40, height: 40, mr: 2, border: "2px solid rgba(255,255,255,0.25)" }} src={review.profile_photo_url} alt={review.author_name} />
                                                    <Box>
                                                        <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: "0.95rem", color: "#fff" }}>{review.author_name}</Typography>
                                                        <Typography variant="body2" sx={{ color: secondaryText }}>{new Date(review.time * 1000).toLocaleDateString()}</Typography>
                                                    </Box>
                                                </Box>
                                                <Rating value={review.rating} precision={0.5} readOnly sx={{ mb: 2, flexShrink: 0, "& .MuiRating-iconFilled": { color: "#FFD700" } }} />
                                                <Typography variant="body2" sx={{ color: alpha("#fff", 0.9), fontStyle: "italic", fontSize: "0.95rem", lineHeight: 1.6, flexGrow: 1, overflowY: "auto", pr: 1, "&::-webkit-scrollbar": { width: "4px" }, "&::-webkit-scrollbar-track": { background: "rgba(255,255,255,0.05)" }, "&::-webkit-scrollbar-thumb": { background: "rgba(255,255,255,0.3)", borderRadius: "4px" } }}>"{review.text}"</Typography>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </Box>
                        </motion.div>
                    )
                }

                <Button
                    component={motion.a}
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    sx={{
                        mt: 8,
                        backgroundColor: "primary.main",
                        color: "#fff",
                        fontWeight: "bold",
                        px: 5,
                        py: 1.5,
                        borderRadius: "50px",
                        fontSize: "0.9rem",
                        boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                        "&:hover": { backgroundColor: "#004ba0" }
                    }}
                    href="#"
                >
                    VIEW MORE ON GOOGLE
                </Button>
            </Container >
        </Box >
    );
};

export default Testimonials;
