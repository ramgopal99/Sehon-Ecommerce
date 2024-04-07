// utils/hashPassword.js
import bcrypt from 'bcryptjs';

export default async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}