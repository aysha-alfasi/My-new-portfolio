import nodemailer from 'nodemailer';
import 'dotenv/config'; 
import validator from 'validator';
import { JSDOM } from 'jsdom';
import DOMPurify from 'dompurify';

const window = new JSDOM('').window;
const purify = DOMPurify(window);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: 'Invalid email address.' });
  }

  const cleanMessage = purify.sanitize(message); 

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `Portfolio Contact Form <${process.env.MY_EMAIL}>`,
    to: process.env.MY_EMAIL,
    replyTo: email,
    subject: `New message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${cleanMessage}`,
    html: `
      <div style="font-family: sans-serif; font-size: 14px;">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${cleanMessage.replace(/\n/g, '<br>')}</p>
      </div>
    `,
  };

try {
  console.log("Attempting to send email to:", process.env.MY_EMAIL);
  await transporter.sendMail(mailOptions);
  console.log("Email sent successfully!");
  res.status(200).json({ message: 'Thank you for contacting me.' });
} catch (error) {
  console.error("Email send error:", error);
  res.status(500).json({ message: 'Failed to send email.' });
}
}