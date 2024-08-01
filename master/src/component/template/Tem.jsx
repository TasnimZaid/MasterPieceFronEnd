import React from 'react';
import Herosectiontem from './HeroTem';

const EduSourcePage = () => {
  const templates = [
    "All Templates", "All Templates", "All Templates",
    "Educational Videos", "Exam Templates", "All Templates",
    "Educational Videos", "Exam Templates", "All Templates",
  ];

  return (
    <>
    <Herosectiontem />
    <div className="bg-gray-100 min-h-screen mt-40">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">

        {/* Search Bar */}
        <div className="mb-8">
          <input type="text" placeholder="Search all templates..." className="w-full p-2 border rounded-md" />
        </div>

        {/* Template Categories */}
        <div className="flex mb-8">
          <button className="mr-4 px-4 py-2 bg-white rounded-md shadow">Blank Templates</button>
          <button className="px-4 py-2 bg-white rounded-md shadow">Collections</button>
        </div>

        {/* Template Grid */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4 h-[100px]">
            <h2 className="text-2xl font-bold">All Templates</h2>
            <div className="flex items-center">
              <span className="mr-2">Sort by:</span>
              <select className="border rounded px-2 py-1">
                <option>Recommend</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {templates.map((template, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center h-[300px] transition-transform transform hover:scale-105"
              >
                <p className="text-gray-700">{template}</p>
                <p className="text-gray-500 mt-4">Description of {template}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-3 h-3 rounded-full bg-pink-500 mx-1"></div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default EduSourcePage;
