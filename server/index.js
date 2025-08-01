require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const { neon } = require('@neondatabase/serverless');
const { getAdminEmailHtml, getClientEmailHtml } = require('./emailTemplates');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

// Contact endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, service, message } = req.body;

    // 1. Save to database
    const sql = neon(process.env.DATABASE_URL);
    await sql`
      INSERT INTO contacts (
        first_name, last_name, email, phone, service, message
      ) VALUES (
        ${firstName}, ${lastName}, ${email}, ${phone || null}, ${service}, ${message}
      )
    `;

    // 2. Send emails
    const emailData = { firstName, lastName, email, phone, service, message };

    await transporter.sendMail({
      from: `Wofga Digital <${process.env.GMAIL_USER}>`,
      to: 'wofgadigital@gmail.com',
      subject: `New Contact: ${firstName} ${lastName} - ${service}`,
      html: getAdminEmailHtml(emailData),
    });

    await transporter.sendMail({
      from: `Wofga Digital <${process.env.GMAIL_USER}>`,
      to: email,
      subject: 'Thank You for Contacting Wofga Digital',
      html: getClientEmailHtml(emailData),
    });

    res.status(200).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send message',
      error: error.message 
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});