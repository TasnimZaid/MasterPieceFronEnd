import React from 'react';

const EducationalConsulting = () => {
  return (
    <div className="max-w-5xl mx-auto p-4 mt-20">
      {/* Hero Section */}
      <div className="relative bg-pink-100 rounded-lg overflow-hidden mb-8">
        <div className="flex">
          <div className="w-1/2 p-8">
            <h1 className="text-3xl font-bold text-purple-800 mb-4">Educational Consulting Services</h1>
            <p className="text-gray-700 mb-6">
              At Educational Consulting Services, we specialize in providing tailored educational consulting services designed to support students in overcoming learning challenges, achieving academic goals, and fostering a love of learning. Our team of educational consultants works closely with students and families to create personalized learning strategies and provide guidance.
            </p>
            <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition duration-300">
              Book now
            </button>
          </div>
          <div className="w-1/2">
            <img src="/path-to-hero-image.jpg" alt="Students learning" className="w-full h-full object-cover" />
          </div>
        </div>
        {/* Decorative shapes */}
        <div className="absolute top-4 right-4 w-16 h-16 bg-yellow-300 rounded-full"></div>
        <div className="absolute top-1/2 right-1/2 w-8 h-8 bg-blue-500 rounded-full"></div>
      </div>

      {/* Learning Experience Section */}
      <div className="bg-green-100 rounded-lg p-6 text-center mb-8">
        <p className="text-lg text-gray-700">
          Join Us for an Inspiring Learning Experience
        </p>
        <p className="text-gray-600">
          Whether you prefer the convenience of online sessions or the hands-on atmosphere of our studio.
        </p>
      </div>

      {/* How We Help Section */}
      <h2 className="text-2xl font-bold text-center text-purple-800 mb-8">How We Help</h2>
      <p className="text-center text-gray-600 mb-8">
        From kindergarten to college, we're here to help you with two of the most important pieces of your educational journey.
      </p>

      {/* Services */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {/* Personalized Coaching */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="/path-to-coaching-image.jpg" alt="Personalized Coaching" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-purple-800 mb-2">Personalized Coaching</h3>
            <p className="text-gray-600 mb-4">
              Our consultants work closely with students to understand their specific needs and create tailored strategies.
            </p>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Problem-Solving Approach */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="/path-to-problem-solving-image.jpg" alt="Problem-Solving Approach" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-purple-800 mb-2">Problem-Solving Approach</h3>
            <p className="text-gray-600 mb-4">
              We collaborate with school leaders and educators to develop effective solutions that address classroom challenges.
            </p>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Subject Matter Experts */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="/path-to-experts-image.jpg" alt="Subject Matter Experts" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-purple-800 mb-2">Subject Matter Experts</h3>
            <p className="text-gray-600 mb-4">
              Leveraging deep knowledge across various subject matters, we provide expert guidance to enhance learning outcomes.
            </p>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationalConsulting;