import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const app  = express();
const PORT = process.env.SMTP_PORT_SERVER || 3002;

app.use(express.json());

// ─── Nodemailer Transporter (Gmail SMTP) ─────────────────────────────────────
const transporter = nodemailer.createTransport({
  host:   'smtp.gmail.com',
  port:   587,
  secure: false, // TLS
  auth: {
    user: process.env.SMTP_USER, // aapki Gmail: shayanshaikh530@gmail.com
    pass: process.env.SMTP_PASS, // Gmail App Password (16-digit)
  },
});

// ─── POST /api/send-email ─────────────────────────────────────────────────────
app.post('/api/send-email', async (req, res) => {
  const { from_name, from_email, subject, message } = req.body;

  // Basic validation
  if (!from_name || !from_email || !subject || !message) {
    return res.status(400).json({ ok: false, error: 'Missing required fields' });
  }

  try {
    await transporter.sendMail({
      from:     `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to:       process.env.SMTP_USER,          // email aapko hi aayegi
      replyTo:  from_email,                      // reply karo ge to client ko jayega
      subject:  `[Portfolio] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #10b981; border-bottom: 2px solid #10b981; padding-bottom: 10px;">
            New Portfolio Inquiry
          </h2>
          <table style="width:100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #6b7280; width: 120px;">From:</td>
              <td style="padding: 8px;">${from_name}</td>
            </tr>
            <tr style="background: #f9fafb;">
              <td style="padding: 8px; font-weight: bold; color: #6b7280;">Email:</td>
              <td style="padding: 8px;"><a href="mailto:${from_email}">${from_email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #6b7280;">Subject:</td>
              <td style="padding: 8px;">${subject}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 16px; background: #f9fafb; border-left: 4px solid #10b981; border-radius: 4px;">
            <p style="font-weight: bold; color: #6b7280; margin: 0 0 8px;">Message:</p>
            <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          <p style="margin-top: 20px; font-size: 12px; color: #9ca3af;">
            Sent via Portfolio Contact Form — Reply directly to respond to ${from_name}
          </p>
        </div>
      `,
    });

    res.json({ ok: true, message: 'Email sent successfully!' });
  } catch (err) {
    console.error('SMTP Error:', err.message);
    res.status(500).json({ ok: false, error: 'Failed to send email. Check SMTP credentials.' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Email API Server running on http://localhost:${PORT}`);
});
