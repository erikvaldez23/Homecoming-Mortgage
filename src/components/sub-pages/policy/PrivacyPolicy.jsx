import React from 'react';
import { Box, Container, Typography, Stack, Paper, Divider } from '@mui/material';
import CTA from '../../global/CTA';

const PrivacyPolicy = () => {
    return (
        <Box sx={{ bgcolor: '#0a0a0a', color: '#fff', minHeight: '100vh', pt: 15, pb: 10 }}>
            <Container maxWidth="lg" sx={{ mb: 10 }}>
                {/* Header */}
                <Box sx={{ mb: 8, textAlign: 'center' }}>
                    <Typography
                        variant="h1"
                        sx={{
                            fontFamily: 'Inter, sans-serif',
                            fontSize: { xs: '2.5rem', md: '4rem' },
                            fontWeight: 800,
                            mb: 2,
                            letterSpacing: '-0.02em',
                            background: "linear-gradient(90deg, #fff, #90caf9)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Privacy Policy
                    </Typography>
                    <Typography variant="h6" sx={{ color: 'grey.500', maxWidth: '800px', mx: 'auto', lineHeight: 1.6 }}>
                        Your privacy is important to us. This policy outlines how we collect, use, and protect your personal information.
                    </Typography>
                </Box>

                {/* Content */}
                <Paper
                    elevation={0}
                    sx={{
                        p: { xs: 3, md: 6 },
                        bgcolor: 'rgba(255,255,255,0.03)',
                        borderRadius: 4,
                        border: '1px solid rgba(255,255,255,0.1)',
                    }}
                >
                    <Stack spacing={4}>
                        <Section title="1. Information We Collect">
                            We collect information you provide directly to us, such as when you fill out a form, apply for a loan, or contact us. This may include your name, email address, phone number, financial information, and employment details.
                        </Section>

                        <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />

                        <Section title="2. How We Use Your Information">
                            We use the information we collect to:
                            <ul>
                                <li>Process your loan application and provide mortgage services.</li>
                                <li>Communicate with you about your account and our services.</li>
                                <li>Improve our website and customer service.</li>
                                <li>Comply with legal and regulatory requirements.</li>
                            </ul>
                        </Section>

                        <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />

                        <Section title="3. Information Sharing">
                            We do not sell your personal information. We may share your information with trusted third-party service providers who assist us in operating our website and conducting our business, provided they agree to keep this information confidential. We may also disclose your information when required by law.
                        </Section>

                        <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />

                        <Section title="4. Data Security">
                            We implement a variety of security measures to maintain the safety of your personal information. Your personal data is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems and are required to keep the information confidential.
                        </Section>

                        <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />

                        <Section title="5. Cookies">
                            Our website may use "cookies" to enhance your experience. You may choose to set your web browser to refuse cookies or to alert you when cookies are being sent. If you do so, note that some parts of the site may not function properly.
                        </Section>

                        <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />

                        <Section title="6. Third-Party Links">
                            Occasionally, at our discretion, we may include or offer third-party products or services on our website. These third-party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites.
                        </Section>

                        <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />

                        <Section title="7. Contact Us">
                            If there are any questions regarding this privacy policy, you may contact us using the information below:
                            <br /><br />
                            <strong>Homecoming Mortgage</strong><br />
                            13601 Preston Rd. Suite 102E<br />
                            Dallas, TX 75240<br />
                            Email: Pirouz@mortgagehmc.com<br />
                            Phone: (972) 991-6115
                        </Section>
                    </Stack>
                </Paper>
            </Container>
            <CTA />
        </Box>
    );
};

const Section = ({ title, children }) => (
    <Box>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: '#fff' }}>
            {title}
        </Typography>
        <Typography variant="body1" component="div" sx={{ color: 'grey.400', lineHeight: 1.7 }}>
            {children}
        </Typography>
    </Box>
);

export default PrivacyPolicy;
