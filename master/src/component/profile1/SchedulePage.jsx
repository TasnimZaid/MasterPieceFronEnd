import React, { useState } from 'react';

const SchedulePage = () => {
  const [selectedDate, setSelectedDate] = useState('Aug 5-11, 2024');
  const [timezone, setTimezone] = useState('Asia/Amman GMT +3:00');

  const timeSlots = [
    '06:30', '07:00', '07:30', '17:00', '18:30', '19:00', '19:30', '20:00', '20:30'
  ];

  return (
    <div className="container mx-auto p-6 max-w-6xl mt-40 bg-gray-100 flex space-x-6">
      {/* Schedule Section */}
      <div className="w-2/3">
        <h1 className="text-3xl font-semibold mb-6 text-gray-800">Schedule</h1>

        <div className="bg-blue-50 p-4 rounded-md shadow-md mb-6">
          <p className="text-gray-700">Choose the time for your first lesson. The timings are displayed in your local timezone.</p>
        </div>

        <div className="flex space-x-4 mb-6">
          <button className="border px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-100 transition duration-150">25 mins</button>
          <button className="border px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-100 transition duration-150">50 mins</button>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <button className="border px-3 py-1 rounded-md text-sm font-medium hover:bg-gray-200 transition duration-150">&lt;</button>
            <span className="text-lg font-medium">{selectedDate}</span>
            <button className="border px-3 py-1 rounded-md text-sm font-medium hover:bg-gray-200 transition duration-150">&gt;</button>
          </div>
          <select className="border px-3 py-1 rounded-md text-sm font-medium" value={timezone} onChange={(e) => setTimezone(e.target.value)}>
            <option value="Asia/Amman GMT +3:00">Asia/Amman GMT +3:00</option>
          </select>
        </div>

        <div className="grid grid-cols-7 gap-4 mb-6">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
            <div key={day} className="text-center font-semibold text-gray-600">{day}</div>
          ))}
          {[5, 6, 7, 8, 9, 10, 11].map(date => (
            <div key={date} className="border rounded-md p-2 bg-white shadow-sm">
              <div className="text-center text-lg font-medium text-gray-800 mb-2">{date}</div>
              {timeSlots.map(time => (
                <button key={time} className="block w-full text-left text-sm text-blue-600 hover:bg-blue-50 p-1 rounded-md transition duration-150">{time}</button>
              ))}
            </div>
          ))}
        </div>

        <button className="border px-6 py-2 rounded-md text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition duration-150">View full schedule</button>
      </div>

      {/* Video Section */}
      <div className="w-1/3">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">About the Consultant</h2>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <iframe
            width="100%"
            height="315"
            src="\src\component\profile1\assets\Snapinsta.app_video_An-w4jk36_XfmUglxeFkH3einOHlGChBR4VtlLD91ulwfAdSGtQcuttS-4xFpVP0BDhV4HcB5yCUx4InqQb869tQ.mp4" 
            title="Consultant Introduction"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;
