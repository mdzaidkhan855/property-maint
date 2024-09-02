

import dbConnect from '@/utils/dbConnect';

import Maintenance from '@/models/Maintenance';
import axios from 'axios';
//import { useState } from 'react';
//import { useRouter } from 'next/navigation';

export default async function Payment({params}){
    await dbConnect();

    //const router = useRouter();
    const  year  = params.year;
    //const [year, setYear] = useState(new Date().getFullYear())
    
    let records;
    try {
        //records = await axios.post('/api/maintainance', { year });
        records = await Maintenance.find({'payments.year': year}); 
        console.log(records)
        //res.status(200).json({ success: true, data: records });
      } catch (error) {
        //res.status(500).json({ success: false, message: 'Server error' });
      }
    return (
        
        <div className="container mx-auto mt-10">
            
            <h1 className="text-3xl font-bold mb-4">Maintenance Report for {year} </h1>                
            
            
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">flat</th>
                        <th className="py-2 px-4 border-b">year</th>
                        <th className="py-2 px-4 border-b">January</th>
                        <th className="py-2 px-4 border-b">February</th>
                        <th className="py-2 px-4 border-b">March</th>
                        <th className="py-2 px-4 border-b">April</th>
                        <th className="py-2 px-4 border-b">May</th>
                        <th className="py-2 px-4 border-b">June</th>
                        <th className="py-2 px-4 border-b">July</th>
                        <th className="py-2 px-4 border-b">August</th>
                        <th className="py-2 px-4 border-b">September</th>
                        <th className="py-2 px-4 border-b">October</th>
                        <th className="py-2 px-4 border-b">November</th>
                        <th className="py-2 px-4 border-b">December</th>
                        
                    </tr>
                </thead>
                <tbody>
                {
                    records.map(record =>(
                        <tr key={record._id}>
                            <td className="py-2 px-4 border-b text-center">{record.flat}</td>
                            <td className="py-2 px-4 border-b text-center">{year}</td>
                            {
                                record.payments.map(payment => {
                                    if(payment.year === year){

                                        return(
                                            <>
                                                <td className="py-2 px-4 border-b text-center">{payment.January || '0.0'}</td>
                                                <td className="py-2 px-4 border-b text-center">{payment.February || '0.0'}</td>
                                                <td className="py-2 px-4 border-b text-center">{payment.March || '0.0'}</td>
                                                <td className="py-2 px-4 border-b text-center">{payment.April || '0.0'}</td>
                                                <td className="py-2 px-4 border-b text-center">{payment.May || '0.0'}</td>
                                                <td className="py-2 px-4 border-b text-center">{payment.June || '0.0'}</td>
                                                <td className="py-2 px-4 border-b text-center">{payment.July || '0.0'}</td>
                                                <td className="py-2 px-4 border-b text-center">{payment.August || '0.0'}</td>
                                                <td className="py-2 px-4 border-b text-center">{payment.September || '0.0'}</td>
                                                <td className="py-2 px-4 border-b text-center">{payment.October || '0.0'}</td>
                                                <td className="py-2 px-4 border-b text-center">{payment.November || '0.0'}</td>
                                                <td className="py-2 px-4 border-b text-center">{payment.December || '0.0'}</td>
                                                
                                            </>
                                            
                                        )
                                    }
                                })
                            }
                            
                            
                        </tr>

                    ))
                }
                </tbody>
            </table>
        </div>
        
    )
}