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
    const { amount, month,year,flat } = reqBody;
    
    try {

        const updatedMaintenance = await Maintenance.findOneAndUpdate(
            {
                flat,
                'payments.year': year
            },
            {
                $set: {
                [`payments.$.${month}`]: amount
                }
            },
            { new: true }
        );

        console.log("updatedMaintenance :" , updatedMaintenance)
        if(!updatedMaintenance){
            const newPayment = await Maintenance.create({
                flat: flat,
                // year: year,
                payments: [
                    // { month: month, amount: amount, status: 'paid' }
                    { year:year, [month]: amount,  }
                    
                    // Add more months as needed
                ],
            });     
        }
      
         

      // res.status(201).json({ success: true, data: user });
      return res.json({ success: true });
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
