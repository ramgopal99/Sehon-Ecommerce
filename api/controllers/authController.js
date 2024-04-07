// controllers/authController.js
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import emailService from '../utils/emailService.js';
import generateOTP from '../utils/generateOTP.js';
import hashPassword from '../utils/hashPassword.js';

const { EMAIL_SECRET, JWT_SECRET, EMAIL_USERNAME, EMAIL_PASSWORD } = process.env;

const sendOTP = async (email, otp) => {
  const message = `Your OTP for password reset is ${otp}.`;
  await emailService.sendEmail(EMAIL_USERNAME, email, 'OTP for Password Reset', message);
};

export default {
  async signup(req, res) {
    try {
      const { email, password } = req.body;
  
      // Generate OTP
      const otp = generateOTP();
  
      // Save user with OTP
      const hashedPassword = await hashPassword(password);
      const user = new User({ email, password: hashedPassword, otp });
      await user.save();
  
      // Send OTP to user's email
      const message = `Your OTP for signup is ${otp}.`;
      await emailService.sendEmail(EMAIL_USERNAME, email, 'OTP for Signup', message);
  
      res.status(201).send({ message: 'User created successfully. Please verify OTP sent to your email.' });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  },

  async verifyOTP(req, res) {
    try {
      const { email, otp } = req.body;
      const user = await User.findOne({ email });
  
      if (!user) {
        throw new Error('User not found.');
      }
  
      if (user.otp !== otp) {
        throw new Error('Invalid OTP.');
      }
  
      // Mark user as verified or perform any other necessary action
      user.isVerified = true;
      await user.save();
  
      res.send({ message: 'OTP verified successfully. Signup process completed.' });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  },  
  

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) throw new Error('Invalid email or password.');

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) throw new Error('Invalid email or password.');

      const token = jwt.sign({ userId: user._id }, JWT_SECRET);
      res.send({ token });
    } catch (error) {
      res.status(401).send({ error: error.message });
    }
  },

  async forgotPassword(req, res) {
    try {
      const { email } = req.body;
      const user = await User.findOne({ email });
      if (!user) throw new Error('User not found.');

      const otp = generateOTP();
      user.otp = otp;
      user.otpExpiration = new Date(Date.now() + 5 * 60 * 1000); // OTP expires in 5 minutes
      await user.save();

      await sendOTP(email, otp);
      res.send({ message: 'OTP sent to your email for password reset.' });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  },

  async resetPassword(req, res) {
    try {
      const { email, otp, newPassword } = req.body;
      const user = await User.findOne({ email });
      if (!user) throw new Error('User not found.');
      if (user.otp !== otp || user.otpExpiration < new Date()) {
        throw new Error('Invalid or expired OTP.');
      }

      user.password = await hashPassword(newPassword);
      user.otp = null;
      user.otpExpiration = null;
      await user.save();
      res.send({ message: 'Password reset successful.' });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  },
};
