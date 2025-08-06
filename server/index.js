require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const { neon } = require('@neondatabase/serverless');
const { getAdminEmailHtml, getClientEmailHtml } = require('./emailTemplates');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: [
    'https://wofgadigital.vercel.app', // Replace with your actual Vercel domain if different
    'http://localhost:3000'
  ],
  credentials: true
}));
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
    const sql = neon(process.env.DATABASE_URL);
    const emailData = { firstName, lastName, email, phone, service, message };

    // Run DB insert and both emails in parallel
    await Promise.all([
      sql`
        INSERT INTO contacts (
          first_name, last_name, email, phone, service, message
        ) VALUES (
          ${firstName}, ${lastName}, ${email}, ${phone || null}, ${service}, ${message}
        )
      `,
      transporter.sendMail({
        from: `Wofga Digital <${process.env.GMAIL_USER}>`,
        to: 'wofgadigital@gmail.com',
        subject: `New Contact: ${firstName} ${lastName} - ${service}`,
        html: getAdminEmailHtml(emailData),
      }),
      transporter.sendMail({
        from: `Wofga Digital <${process.env.GMAIL_USER}>`,
        to: email,
        subject: 'Thank You for Contacting Wofga Digital',
        html: getClientEmailHtml(emailData),
      })
    ]);

    res.status(200).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Contact API Error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send message',
      error: error.message 
    });
  }
});

// --- Blog Comments API ---

// Get all comments and replies for a blog post
app.get('/api/comments/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    const sql = neon(process.env.DATABASE_URL);
    // Get all top-level comments
    const comments = await sql`
      SELECT * FROM comments WHERE post_slug = ${slug} ORDER BY created_at ASC
    `;
    // Get all replies for these comments
    const commentIds = comments.map(c => c.id);
    let replies = [];
    if (commentIds.length > 0) {
      replies = await sql`
        SELECT * FROM replies WHERE comment_id = ANY(${commentIds}) ORDER BY created_at ASC
      `;
    }
    // Nest replies under their parent comment
    const commentMap = {};
    comments.forEach(c => commentMap[c.id] = { ...c, replies: [] });
    replies.forEach(r => {
      if (commentMap[r.comment_id]) {
        commentMap[r.comment_id].replies.push(r);
      }
    });
    const nested = Object.values(commentMap);
    res.json({ success: true, comments: nested });
  } catch (error) {
    console.error('Fetch comments error:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch comments', error: error.message });
  }
});

// Add a comment or reply
app.post('/api/comments/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    const { text, author, parent_id } = req.body;
    const sql = neon(process.env.DATABASE_URL);
    let result;
    if (!parent_id) {
      // Top-level comment
      result = await sql`
        INSERT INTO comments (post_slug, author, content, likes, created_at)
        VALUES (${slug}, ${author}, ${text}, 0, NOW())
        RETURNING *
      `;
      res.status(201).json({ success: true, comment: { ...result[0], replies: [] } });
    } else {
      // Reply to a comment
      result = await sql`
        INSERT INTO replies (comment_id, author, content, likes, created_at)
        VALUES (${parent_id}, ${author}, ${text}, 0, NOW())
        RETURNING *
      `;
      res.status(201).json({ success: true, reply: result[0] });
    }
  } catch (error) {
    console.error('Add comment/reply error:', error);
    res.status(500).json({ success: false, message: 'Failed to add comment/reply', error: error.message });
  }
});

// Like a comment or reply
app.post('/api/comments/:slug/like', async (req, res) => {
  try {
    const { comment_id, reply_id } = req.body;
    const sql = neon(process.env.DATABASE_URL);
    let result;
    if (comment_id) {
      result = await sql`
        UPDATE comments SET likes = likes + 1 WHERE id = ${comment_id} RETURNING *
      `;
      res.json({ success: true, comment: result[0] });
    } else if (reply_id) {
      result = await sql`
        UPDATE replies SET likes = likes + 1 WHERE id = ${reply_id} RETURNING *
      `;
      res.json({ success: true, reply: result[0] });
    } else {
      res.status(400).json({ success: false, message: 'No comment_id or reply_id provided' });
    }
  } catch (error) {
    console.error('Like comment/reply error:', error);
    res.status(500).json({ success: false, message: 'Failed to like comment/reply', error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});