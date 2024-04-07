// utils/emailService.js
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export default {
  sendEmail(from, to, subject, text) {
    return transporter.sendMail({ from, to, subject, text });
  },
};
