import React from 'react';
import heroImage from './assets/pexels-vanessa-loring-7868892.jpg'; // Adjust the path as needed

const HeroActivity = () => {
    return (
        <div className="relative bg-gradient-to-r  text-white py-40">
          <img src={heroImage} alt="Hero" className="absolute inset-0 w-full h-full object-cover opacity-90 z-[-1]" />
          <div className="container mx-auto text-center relative z-10">
            <h1 className="text-6xl font-bold mb-6 animate-fade-in-down">Teacher Activity Marketplace</h1>
            <p className="text-2xl mb-8 animate-fade-in-up">Share and discover engaging classroom activities</p>
            <button className="bg-white text-pink-600 px-8 py-3 rounded-full text-xl font-semibold hover:bg-pink-100 transition duration-300">
              Get Started
            </button>
          </div>
        </div>
    );
};

export default HeroActivity;
