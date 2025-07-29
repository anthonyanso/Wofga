import nodemailer from 'nodemailer';

export type SendEmailOptions = {
  to: string;
  subject: string;
  html: string;
};

export async function sendEmail({ to, subject, html }: SendEmailOptions) {
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    throw new Error('Email credentials are not set in environment variables.');
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  return transporter.sendMail({
    from: `Wofga Digital <${process.env.GMAIL_USER}>`,
    to,
    subject,
    html,
  });
}
