import React from 'react';
import heroImage from './assets/pexels-kampus-5940841.jpg'; 

const HeroProfile = () => {
  return (
    <div className="relative text-white py-40">
      {/* Background Image */}
      <img src={heroImage} alt="Hero" className="absolute inset-0 w-full h-full object-cover opacity-60 z-[-1]" />
      
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-[-1]" />
      
      {/* Content Container */}
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-6xl font-bold mb-6 animate-fade-in-down">Popular Teacher of the Week</h1>
        <p className="text-2xl mb-8 animate-fade-in-up">
          Discover this week’s most celebrated educator and learn about their exceptional contributions to the teaching community.
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-full text-xl font-semibold hover:bg-blue-100 transition duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default HeroProfile;

