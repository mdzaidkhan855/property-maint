

import dbConnect from '@/utils/dbConnect';
import Maintenance from '@/models/Maintenance';
const columns = [
    { key: 'flat', label: 'flat' },
    { key: 'year', label: 'year' },
    { key: 'January', label: 'January' },
    { key: 'February', label: 'February' },
    { key: 'March', label: 'March' },
    { key: 'April', label: 'April' },
  ];
export default async function Payment(){
    await dbConnect();
    let records;
    try {
        records = await Maintenance.find({});
        console.log(records)
        //res.status(200).json({ success: true, data: records });
      } catch (error) {
        //res.status(500).json({ success: false, message: 'Server error' });
      }
    return (
        
        <div className="container mx-auto mt-10">
            <h1 className="text-3xl font-bold mb-4">Maintenance Report for </h1>
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">flat</th>
                        <th className="py-2 px-4 border-b">Month</th>
                        <th className="py-2 px-4 border-b">Amount</th>
                        
                    </tr>
                </thead>
                <tbody>
                {
                    records.map(record =>(
                        <tr key={record._id}>
                            <td className="py-2 px-4 border-b text-center">{record.flat}</td>
                            <td className="py-2 px-4 border-b text-center">{record.payments[0].month}</td>
                            <td className="py-2 px-4 border-b text-center">{record.payments[0].amount}</td>
                        </tr>

                    ))
                }
                </tbody>
            </table>
        </div>
        
    )
}