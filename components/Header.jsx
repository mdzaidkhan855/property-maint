'use client'

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {

  const[year, setYear] = useState('')
  const router = useRouter();

  function changeYear(event){
    setYear(event.target.value)
    router.push(`/payment/${event.target.value}`); 
    
    
  }
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-medium">
          <Link href="/payment/add">
            Pay Rent
          </Link>
        </div>
        <div className="space-x-4 ml-10 text-lg font-medium text-white">
          <Link href="/">
            Home
          </Link>          
        </div>
        <div className='flex space-x-4 ml-10'>
              <label
                    htmlFor="password"
                    className="block text-lg font-medium text-white"
                  >
                    <h1> Select Year: </h1>
                </label>
                <div>
                    <select
                        id="options"
                        value={year}
                        onChange={changeYear}
                        className="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        >
                        <option value="" disabled>
                            -- Select an option --
                        </option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                    </select>
                </div>
            </div>
      </div>
    </nav>
  );
}
