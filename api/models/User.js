// models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
  otp: String,
  otpExpiration: Date,
});

export default mongoose.model('User', userSchema);
