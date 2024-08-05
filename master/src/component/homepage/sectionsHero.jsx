import React from 'react';

const ExploreSection = () => {
  const resources = [
    {
      title: "Lesson Plans",
      description: "Comprehensive guides for various subjects and grades.",
      image: "https://scitechdaily.com/images/Two-Boson-Quantum-Interference-in-Time.jpg",
    },
    {
      title: "Activities",
      description: "Engaging tasks to enhance student learning experience.",
      image: "/path/to/activities-image.jpg",
    },
    {
      title: "Exam Prep",
      description: "Materials to help students excel in their exams.",
      image: "/path/to/exam-prep-image.jpg",
    },
    {
      title: "Consultancy",
      description: "Expert advice on educational strategies and methods.",
      image: "/path/to/consultancy-image.jpg",
    },
  ];

  return (
    <div className="bg-dark text-white py-16 px-4 sm:px-8 lg:px-16">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-yellow-500">EXPLORE:</h2>
        <div className="relative">
          <div className="flex overflow-x-auto space-x-6 py-6">
            {resources.map((resource, index) => (
              <div key={index} className="flex-none w-80">
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 flex-shrink-0">
                    <img 
                      src={resource.image} 
                      alt={resource.title}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{resource.title}</h3>
                    <p className="text-sm text-gray-400">{resource.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
            <button className="bg-gray-800 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
            <button className="bg-gray-800 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreSection;
