// /api/send-email.js
const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Create a transporter using environment variables
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,    // Vercel will inject this
        pass: process.env.EMAIL_PASSWORD // Vercel will inject this
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'recipient@example.com',  // Replace with your email
      subject: `New message from ${name}`,
      text: `You received a new message from ${name} (${email}):\n\n${message}`
    };

    try {
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      return res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    // Handle only POST requests
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}
