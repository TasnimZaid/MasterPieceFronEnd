import React from 'react';
import paintingImage from './assets/GettyImages-142019441.jpgC1.png'; // Replace with the actual path to your image

function WhyChooseUsSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-8 bg-white border border-blue-300">
      <div className="md:w-1/2">
        <img src={paintingImage} alt="Children Painting" className="rounded-lg shadow-lg" />
      </div>
      <div className="md:w-1/2 p-8 bg-pink-100 rounded-lg relative">
        <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
        <p className="text-gray-700">
          With a commitment to excellence and a passion for education, EduSource stands out as a trusted partner for teachers seeking to enhance their instructional skills and classroom management. Whether you’re facing curriculum development challenges, classroom management issues, or seeking to integrate technology effectively, our consultants are here to support you every step of the way.
        </p>
        <div className="absolute -top-8 -left-8">
          <div className="w-16 h-16 bg-yellow-400 rounded-full"></div>
        </div>
        <div className="absolute -bottom-8 -right-8">
          <div className="w-16 h-16 bg-blue-800 rounded-full"></div>
        </div>
        <div className="absolute -bottom-12 -left-12">
          <div className="w-16 h-16 bg-pink-400 rounded-full"></div>
        </div>
        <div className="absolute -top-12 -right-12">
          <div className="w-16 h-16 bg-green-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUsSection;
