import React from 'react';

const TeacherBlog = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Educator's Choice</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="/path-to-classroom-image.jpg" alt="Classroom" className="w-full h-64 object-cover" />
            <div className="p-6">
              <span className="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full">Education</span>
              <h2 className="text-2xl font-bold mt-2 mb-2">15 Innovative Teaching Methods for the Modern Classroom</h2>
              <p className="text-gray-600 text-sm mb-4">Prof. Jane Doe • 29 March 2024</p>
              <p className="text-gray-700">Discover new ways to engage your students and enhance their learning experience in today's digital age.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="bg-pink-100 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-2">EduBlog</h2>
            <p className="text-gray-700 mb-4">Comprehensive Educational Resources for Modern Teachers</p>
            <img src="/path-to-edublog-preview.jpg" alt="EduBlog Preview" className="w-full rounded-lg shadow-md" />
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Popular Posts</h2>
          {['Mastering Online Teaching', 'Building Strong Parent-Teacher Relationships', 'Effective Assessment Strategies'].map((title, index) => (
            <div key={index} className="flex items-center mb-4">
              <span className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center mr-3">{index + 1}</span>
              <div>
                <h3 className="font-medium">{title}</h3>
                <p className="text-gray-600 text-sm">29 March 2024</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeacherBlog;