// pages/api/auth/login.js

import dbConnect from '@/utils/dbConnect';
import User from '@/models/User';
import jwt from 'jsonwebtoken';
import { NextResponse as res } from "next/server";


export  async function POST(req) {
  await dbConnect();

  if (req.method === 'POST') {
    const reqBody = await req.json();
    const { email, password } = reqBody;

    try {
      const user = await User.findOne({ email }).select('+password');

      if (!user || !(await user.matchPassword(password))) {
        return res.json({ success: false, message: 'Invalid credentials' });
      }

      // Create a JWT token
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
      });

      return res.json({ success: true, token });
    } catch (error) {
      return res.json({ success: false, message: 'Server error' });
    }
  } else {
    return res.json({ success: false, message: 'Method not allowed' });
  }
}
