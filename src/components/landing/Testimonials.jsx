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
    useMediaQuery,
    Button,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import { motion } from "framer-motion";

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
const CARD_H_MOBILE = 350;
const CARD_H_DESKTOP = 350;
const SLIDE_GAP = 12;

/* ---------------- Card styles ---------------- */
const baseCardSX = {
    p: 4,
    borderRadius: 0, // Sharper corners for blueprint feel? Or keep minimal radius
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    backgroundColor: "transparent",
    border: "1px solid rgba(255,255,255,0.1)",
    // Remove shadows and glassmorphism for consistent flat look
    boxShadow: "none",
    color: alpha("#fff", 0.95),
    height: "100%",
};

// No hover effect needed as per previous requests to remove hovers
const hoverDesktopSX = {};

const secondaryText = alpha("#fff", 0.6);

const Testimonials = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");
    const [activeIndex, setActiveIndex] = React.useState(0);
    const scrollRef = React.useRef(null);

    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollIndex = Math.round(scrollLeft / clientWidth);
            setActiveIndex(scrollIndex);
        }
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
        <Box id="reviews" sx={{ py: 20, textAlign: "center" }}>
            <Container maxWidth="lg">
                <Box textAlign="center" mb={12} sx={{ borderBottom: "1px solid rgba(255,255,255,0.1)", pb: 4 }}>
                    <Typography
                        variant="h1"
                        sx={{
                            fontWeight: 800,
                            fontSize: { xs: "min(12vw, 4rem)", md: "8rem" },
                            lineHeight: 0.9,
                            color: "#0062cc",
                            letterSpacing: "-0.04em",
                            textTransform: "capitalize",
                            background: "linear-gradient(135deg, #fff 0%, #90caf9 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            mb: 2,
                            textAlign: "left"
                        }}
                    >
                        Success Stories.
                    </Typography>
                    <Typography variant="body1" sx={{ color: "grey.400", mx: "auto", fontSize: "1.2rem", lineHeight: 1.6, textAlign: "left" }}>
                        Hear from our clients who have successfully navigated their mortgage journey with us.
                    </Typography>
                </Box>

                {
                    isMobile ? (
                        <Box>
                            {/* CSS Scroll Snap Container for Mobile */}
                            <Box
                                ref={scrollRef}
                                onScroll={handleScroll}
                                sx={{
                                    display: 'flex',
                                    overflowX: 'auto',
                                    scrollSnapType: 'x mandatory',
                                    gap: 2,
                                    pb: 4,
                                    px: 2,
                                    mx: -2,
                                    '&::-webkit-scrollbar': { height: '4px' },
                                    '&::-webkit-scrollbar-track': { background: 'rgba(255, 255, 255, 0.1)' },
                                    '&::-webkit-scrollbar-thumb': { background: 'rgba(255, 255, 255, 0.3)', borderRadius: '4px' },
                                }}
                            >
                                {reviews.map((review, index) => (
                                    <Box
                                        key={index}
                                        sx={{
                                            minWidth: '85vw',
                                            maxWidth: '400px',
                                            scrollSnapAlign: 'center',
                                            flexShrink: 0,
                                        }}
                                    >
                                        <Card sx={{ ...baseCardSX, height: CARD_H_MOBILE }}>
                                            <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", p: 0, paddingBottom: "0 !important" }}>
                                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 3 }}>
                                                    <Box sx={{ display: "flex", alignItems: "center" }}>
                                                        <Avatar sx={{ width: 52, height: 52, mr: 2.5, border: "2px solid rgba(255,255,255,0.1)" }} src={review.profile_photo_url} alt={review.author_name} />
                                                        <Box textAlign="left">
                                                            <Typography variant="h6" sx={{ fontWeight: 600, fontSize: "1.1rem", color: "#fff", letterSpacing: "0.02em" }}>{review.author_name}</Typography>
                                                            <Typography variant="body2" sx={{ color: secondaryText, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", mt: 0.5 }}>{new Date(review.time * 1000).toLocaleDateString()}</Typography>
                                                        </Box>
                                                    </Box>
                                                    <Box sx={{
                                                        p: 1,
                                                        borderRadius: "50%",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        width: 40,
                                                        height: 40
                                                    }}>
                                                        <img src="/google-logo.png" alt="Google" style={{ width: "32px", height: "auto" }} />
                                                    </Box>
                                                </Box>

                                                <Rating value={review.rating} precision={0.5} readOnly sx={{ mb: 2.5, "& .MuiRating-iconFilled": { color: "#FFD700" }, "& .MuiRating-iconEmpty": { color: "rgba(255,255,255,0.1)" } }} />

                                                <Typography variant="body1" sx={{
                                                    color: alpha("#fff", 0.8),
                                                    fontStyle: "normal",
                                                    fontSize: "1.05rem",
                                                    lineHeight: 1.7,
                                                    overflowY: "auto",
                                                    textAlign: "left",
                                                    flexGrow: 1,
                                                    fontFamily: '"Inter", sans-serif',
                                                    fontWeight: 300,
                                                    "&::-webkit-scrollbar": { width: "4px" },
                                                    "&::-webkit-scrollbar-track": { background: "rgba(255, 255, 255, 0.1)" },
                                                    "&::-webkit-scrollbar-thumb": { background: "#0062cc", borderRadius: "4px" },
                                                }}>
                                                    "{review.text}"
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Box>
                                ))}
                                <Box sx={{ minWidth: '1px' }} />
                            </Box>

                            {/* Dot Indicators */}
                            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1.5, mt: 2 }}>
                                {reviews.map((_, index) => (
                                    <Box
                                        key={index}
                                        sx={{
                                            width: index === activeIndex ? 24 : 8, // Elongated active dot
                                            height: 8,
                                            borderRadius: 4,
                                            bgcolor: index === activeIndex ? '#0062cc' : 'rgba(255, 255, 255, 0.2)',
                                            transition: 'all 0.3s ease',
                                            cursor: 'pointer',
                                            '&:hover': {
                                                bgcolor: index === activeIndex ? '#0062cc' : 'rgba(255, 255, 255, 0.4)',
                                            }
                                        }}
                                        onClick={() => {
                                            if (scrollRef.current) {
                                                const cardWidth = scrollRef.current.clientWidth * 0.85 + 16; // Approx width + gap
                                                // Simplified scroll to index
                                                scrollRef.current.scrollTo({
                                                    left: scrollRef.current.children[index].offsetLeft - 16, // Adjust for padding
                                                    behavior: 'smooth'
                                                });
                                            }
                                        }}
                                    />
                                ))}
                            </Box>
                        </Box>
                    ) : (
                        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
                            <Box sx={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, border: "1px solid rgba(255,255,255,0.1)", borderRight: "none", borderBottom: "none" }}>
                                {reviews.map((review, index) => (
                                    <motion.div key={index} variants={cardVariants}>
                                        <Card sx={{
                                            ...baseCardSX,
                                            border: "none",
                                            borderRight: "1px solid rgba(255,255,255,0.1)",
                                            borderBottom: "1px solid rgba(255,255,255,0.1)",
                                            height: "100%",
                                            minHeight: CARD_H_DESKTOP
                                        }}>
                                            <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column", padding: 0, paddingBottom: "0 !important" }}>
                                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 3 }}>
                                                    <Box sx={{ display: "flex", alignItems: "center" }}>
                                                        <Avatar sx={{ width: 48, height: 48, mr: 2, bgcolor: "#333" }} src={review.profile_photo_url} alt={review.author_name} />
                                                        <Box textAlign="left">
                                                            <Typography variant="h6" sx={{ fontWeight: 700, fontSize: "1rem", color: "#fff" }}>{review.author_name}</Typography>
                                                            <Typography variant="body2" sx={{ color: secondaryText, fontSize: "0.85rem" }}>{new Date(review.time * 1000).toLocaleDateString()}</Typography>
                                                        </Box>
                                                    </Box>
                                                    <Box sx={{
                                                        p: 1,
                                                        borderRadius: "50%",
                                                        bgcolor: "rgba(255,255,255,0.05)",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        width: 40,
                                                        height: 40
                                                    }}>
                                                        <img src="/google-logo.png" alt="Google" style={{ width: "24px", height: "auto" }} />
                                                    </Box>
                                                </Box>

                                                <Rating value={review.rating} precision={0.5} readOnly sx={{ mb: 2, "& .MuiRating-iconFilled": { color: "#FFD700" }, "& .MuiRating-iconEmpty": { color: "#333" } }} />

                                                <Typography variant="body1" sx={{ color: "grey.400", fontSize: "1rem", lineHeight: 1.6, textAlign: "left", flexGrow: 1 }}>
                                                    "{review.text}"
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </Box>
                        </motion.div>
                    )
                }

                <Box sx={{ mt: 10, pt: 8, borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                    <Typography variant="h4" sx={{ color: "#fff", fontWeight: 700, mb: 2, fontSize: { xs: "1.5rem", md: "2rem" } }}>
                        Had a great experience working with us?
                    </Typography>
                    <Typography variant="body1" sx={{ color: "grey.400", mb: 4, maxWidth: "600px", mx: "auto", fontSize: "1.1rem" }}>
                        We'd love to hear from you! Your feedback helps us continue to provide the best service possible.
                    </Typography>
                    <Button
                        variant="contained"
                        size="large"
                        component="a"
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            bgcolor: "#0062cc",
                            color: "white",
                            px: 5,
                            py: 1.5,
                            borderRadius: "50px",
                            fontSize: "1.1rem",
                            textTransform: "none",
                            fontWeight: 600,
                            boxShadow: "0 4px 14px 0 rgba(0, 98, 204, 0.39)",
                            "&:hover": {
                                bgcolor: "#0052ac",
                                transform: "translateY(-2px)",
                                boxShadow: "0 6px 20px rgba(0, 98, 204, 0.23)",
                                color: "#fff"
                            },
                            transition: "all 0.2s ease-in-out"
                        }}
                    >
                        Submit a Review
                    </Button>
                </Box>
            </Container >
        </Box >
    );
};

export default Testimonials;
