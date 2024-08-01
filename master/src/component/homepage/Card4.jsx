import React from 'react';
import sampleVideo from './assets/istockphoto-483816935-640_adpp_is.mp4'; // replace with the actual path to your video

function Card4() {
  return (
    <div className="p-10 mt-40">
      <div className="text-center mb-8 ">
        <h1 className="text-3xl font-bold">
          Easy for beginners. <span className="text-yellow-500">Powerful</span> for experts.
        </h1>
        <div className="mt-4 flex justify-center space-x-8 text-lg font-semibold">
          <a href="#create" className="text-yellow-600 border-b-2 border-yellow-600">Create</a>
          <a href="#distribute" className="text-gray-600 hover:text-yellow-600">Distribute</a>
          <a href="#collect" className="text-gray-600 hover:text-yellow-600">Collect</a>
          <a href="#analyze" className="text-gray-600 hover:text-yellow-600">Analyze</a>
        </div>
      </div>
      <div className="bg-dark rounded-lg p-8 flex flex-col md:flex-row items-center">
        <div className="flex-1 mb-6 md:mb-0">
          <h2 className="text-4xl font-bold mb-4 text-white">Resources and Materials</h2>
          <p className="text-white text-2xl mb-6">
            Browse our extensive library of teaching materials, including lesson plans, worksheets, and multimedia resources. Everything you need to keep your classroom engaging and effective.
          </p>
          <button className="bg-yellow-500 text-dark  font-bold py-2 px-4 rounded hover:bg-yellow-600">
            Get started for free
          </button>
        </div>
        <div className="flex-1">
          <video
            src={sampleVideo}
            alt="Resources and Materials"
            className="rounded-lg shadow-lg w-full h-auto"
            autoPlay
            loop
            muted
          />
        </div>
      </div>
    </div>
  );
}

export default Card4;
