import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import SchedulingByDates from './SchedulingByDates';
import SchedulingByTime from './SchedulingByTime';

function Scheduling() {
  const [selectedOption, setSelectedOption] = useState('ByDates');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      <Navbar />
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold mb-6 text-center">Lock App Scheduling</h1>
        <div className="mb-6 ml-3">
          <label htmlFor="scheduling-type" className="block text-lg font-medium mb-2">
            Select Scheduling Type:
          </label>
          <select
            id="scheduling-type"
            name="scheduling-type"
            value={selectedOption}
            onChange={handleOptionChange}
            className="block w-[400px] p-3 border border-gray-700 rounded-md bg-gray-800 text-gray-200"
          >
            <option value="ByDates">By Dates</option>
            <option value="ByTime">By Time</option>
          </select>
        </div>
        {selectedOption === 'ByDates' ? <SchedulingByDates /> : <SchedulingByTime />}
      </div>
    </div>
  );
}

export default Scheduling;
