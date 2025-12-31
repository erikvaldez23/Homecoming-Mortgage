import React from "react";
import { Box, Container, Grid, Typography, Avatar } from "@mui/material";

const teamMembers = [
    {
        name: "Sarah Johnson",
        role: "Founder & CEO",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
        name: "Michael Chen",
        role: "Head of Lending",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
        name: "Jessica Williams",
        role: "Senior Mortgage Advisor",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
        name: "David Smith",
        role: "Client Success Manager",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
];

const Team = () => {
    return (
        <Box sx={{ py: 15, bgcolor: "background.default" }}>
            <Container maxWidth="lg">
                <Box sx={{ textAlign: "center", mb: 10 }}>
                    <Typography variant="h2" sx={{ fontWeight: 800, mb: 2 }}>
                        Meet the Team
                    </Typography>
                    <Typography variant="body1" sx={{ color: "text.secondary", maxWidth: 600, mx: "auto" }}>
                        Our diverse team of experts is here to guide you through every step of your home buying journey.
                    </Typography>
                </Box>

                <Grid container spacing={6} justifyContent="center">
                    {teamMembers.map((member, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    textAlign: "center",
                                }}
                            >
                                <Avatar
                                    src={member.image}
                                    sx={{
                                        width: 200,
                                        height: 200,
                                        mb: 3,
                                        border: "4px solid rgba(255,255,255,0.05)",
                                    }}
                                />
                                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                                    {member.name}
                                </Typography>
                                <Typography variant="body2" sx={{ color: "primary.main", fontWeight: 500 }}>
                                    {member.role}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Team;
