// pages/api/auth/register.js

import dbConnect from '@/utils/dbConnect';
import User from '@/models/User';
import { NextResponse as res } from "next/server";

// export default async function handler(req, res) {
export  async function POST(req) {    
  await dbConnect();

  if (req.method === 'POST') {
    const reqBody = await req.json();
    console.log(" 111111Data being inserted is: " , reqBody)
    const { name, email, password } = reqBody;
    console.log(" 22222222Data being inserted is: " + name + ":" + email)
    try {
      // Check if the user already exists
      let user = await User.findOne({ email });

      if (user) {
        //return res.status(400).json({ success: false, message: 'User already exists' });
      }

      // Create a new user
      user = await User.create({
        name,
        email,
        password,
      });

      // res.status(201).json({ success: true, data: user });
      return res.json({ success: true, data: user });
    } catch (error) {
      console.log(error)
      // res.status(500).json({ success: false, message: 'Server error' });
      return res.json({ success: false, message: 'Server error' });
    }
  } else {
    // res.status(405).json({ success: false, message: 'Method not allowed' });
    return res.json({ success: false, message: 'Method not allowed' });
  }
}
