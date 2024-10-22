// pages/api/send-email.js

import { Resend } from '@resend/react';

export default async function handler(req, res) {
    console.log('API route hit');
    if (req.method === 'POST') {
        const { user_name, user_email, message } = req.body;

        // Create a Resend instance
        const resend = new Resend({
            apiKey: 're_KhFsv6tk_5Dbf6rpyuZnAc1e2yZcwkSwL', // Replace with your actual Resend API key
        });

        const mailOptions = {
            from: user_email,
            to: 'info@pillarfinsolutions.com',
            subject: `New message from ${user_name}`,
            text: `You have received a new message from ${user_name} (${user_email}): \n\n${message}`,
        };

        try {
            await resend.sendEmail(mailOptions);
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json({ message: 'Email sent successfully!' });
        } catch (error) {
            res.setHeader('Content-Type', 'application/json');
            res.status(500).json({ message: 'Email could not be sent. Error: ' + error.message });
        }
    } else {
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
