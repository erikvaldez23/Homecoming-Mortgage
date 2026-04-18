import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// 1. Setup the Nodemailer Transporter
const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE || 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Verify transporter connection
transporter.verify((error, success) => {
    if (error) {
        console.error('❌ Error connecting to email server:', error);
        console.error('TIP: If using Gmail, make sure you are using an APP PASSWORD, not your regular password.');
    } else {
        console.log('✅ Server is ready to take our messages');
    }
});

// 2. The Contact Route
app.post('/api/contact', async (req, res) => {
    const { name, email, phone, location, service, message } = req.body;
    console.log(`\n📬 Received Contact Form: ${name} (${email})`);

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: `New Contact Form Submission from ${name}`,
        html: `
            <h3>New Contact Form Submission from Homecoming Mortgage</h3>
            <p><strong>Name:</strong> ${name || 'N/A'}</p>
            <p><strong>Email:</strong> ${email || 'N/A'}</p>
            <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
            <p><strong>Location:</strong> ${location || 'N/A'}</p>
            <p><strong>Service Requested:</strong> ${service || 'N/A'}</p>
            <p><strong>Message:</strong></p>
            <p>${message || 'N/A'}</p>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`✅ Contact email sent successfully for ${name}`);
        res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
        console.error('❌ Error sending contact email:', error);
        res.status(500).json({ message: 'Failed to send email.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
