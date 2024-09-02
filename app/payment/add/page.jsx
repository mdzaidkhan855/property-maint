"use client";

import { useState } from "react";
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function AddPayment() {
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [flat, setFlat] = useState('');

  const router = useRouter();
  const reportYear = new Date().getFullYear();
  
  // Handle the change event when a different option is selected
  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  // Handle the change event when a different option is selected
  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  // Handle the change event when a different option is selected
  const handleFlatChange = (event) => {
    setFlat(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/api/payment/add", { amount, month,year,flat });
      //localStorage.setItem("token", data.token);
      router.push(`/payment/${reportYear}`); // Redirect to dashboard after successful login
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <>
      <div className="max-w-md mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-6">Pay Rent:</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="text"
              className="block text-sm font-medium text-gray-700"
            >
              Amount
            </label>
            <input
              type="text"
              id="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Month
            </label>
            <select
              id="options"
              value={month}
              onChange={handleMonthChange}
              className="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="" disabled>
                -- Select an option --
              </option>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
              
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Year
            </label>
            <select
              id="options"
              value={year}
              onChange={handleYearChange}
              className="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="" disabled>
                -- Select an option --
              </option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Flat No.
            </label>
            <select
              id="options"
              value={flat}
              onChange={handleFlatChange}
              className="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="" disabled>
                -- Select an option --
              </option>
              <option value="101" className="font-bold">Flat:101</option>
              <option value="102" className="bg-slate-200 font-bold">Flat:102</option>
              <option value="103" className="font-bold">Flat:103</option>
              <option value="201" className="bg-slate-200 font-bold">Flat:201</option>
              <option value="202" className="font-bold">Flat:202</option>
              <option value="203" className="bg-slate-200 font-bold">Flat:203</option>
              <option value="301" className="font-bold">Flat:301</option>
              <option value="302" className="bg-slate-200 font-bold">Flat:302</option>
              <option value="303" className="font-bold">Flat:303</option>
              <option value="401" className="bg-slate-200 font-bold">Flat:401</option>
              <option value="402" className="font-bold">Flat:402</option>
              <option value="403" className="bg-slate-200 font-bold">Flat:403</option>
              <option value="501" className="font-bold">Flat:501</option>
              <option value="502" className="bg-slate-200 font-bold">Flat:502</option>
              <option value="503" className="font-bold">Flat:503</option>
              
            </select>
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-md"
          >
            Pay
          </button>
        </form>
      </div>
    </>
  );
}
