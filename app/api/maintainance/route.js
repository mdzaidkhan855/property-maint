

// pages/api/auth/register.js

import dbConnect from '@/utils/dbConnect';
import Maintenance from '@/models/Maintenance';
import { NextResponse as res } from "next/server";

// export default async function handler(req, res) {
export  async function POST(req) {    
  await dbConnect();

  if (req.method === 'POST') {
    const reqBody = await req.json();
    console.log(" 111111Data being inserted is: " , reqBody)
    const { year } = reqBody;
    
    try {
      
        records = await Maintenance.find({});  

      // res.status(201).json({ success: true, data: user });
      return res.json({ records });
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
