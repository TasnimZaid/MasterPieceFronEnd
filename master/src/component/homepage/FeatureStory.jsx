import React from 'react';
import img from "./assets/Frame 84.png";

const FeaturedStory = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl mt-20">
      <p className="text-sm text-gray-500 mb-2 uppercase tracking-wider text-4xl md:text-xl font-bold ">Our Promise</p>
      
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Consulting Activities
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Get expert advice and support from experienced educators. Whether you need help with lesson planning, classroom management, or professional development, our consultants are here to help.
          </p>
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
            Get started free
          </button>
        </div>
        
        <div className="md:w-1/2 flex justify-center items-center">
          <img 
            src={img}
            alt="Consulting team working together" 
            className="w-full max-w-lg rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedStory;
