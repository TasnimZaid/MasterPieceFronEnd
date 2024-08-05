import React from 'react';
import img from "../activity/assets/pexels-ron-lach-9785611.jpg";

const TeacherResources = () => {
  return (
    <div className="container mx-auto py-12 flex flex-col lg:flex-row mt-50">
      {/* Main Content */}
      <main className="w-full lg:w-2/3 lg:pr-12 mb-8 lg:mb-0">
        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src={img} alt="Educational concept" className="w-full h-64 object-cover" />
          <div className="p-6">
            <span className="bg-pink-500 text-white text-xs font-semibold px-2 py-1 rounded-full">Resource Hub</span>
            <h1 className="text-4xl font-bold mt-4 mb-6">All the Resources You Need for Effective Teaching</h1>
            <p className="text-gray-600 mb-4">Explore a curated collection of teaching materials, strategies, and tools designed to enhance your classroom experience and engage your students more effectively.</p>
            <div className="flex flex-wrap gap-4">
              <a href="/resources/lesson-plans" className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition duration-300">Lesson Plans</a>
              <a href="/resources/activities" className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition duration-300">Classroom Activities</a>
              <a href="/resources/teaching-strategies" className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition duration-300">Teaching Strategies</a>
              <a href="/resources/educational-tools" className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition duration-300">Educational Tools</a>
            </div>
          </div>
        </article>
      </main>

      {/* Sidebar */}
      <aside className="w-full lg:w-1/3">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex mb-4">
            <button className="bg-pink-500 text-white px-4 py-2 rounded-l-lg font-semibold">Popular</button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-r-lg">Recent</button>
          </div>
          <div className="space-y-4">
            {[
              'Effective Classroom Management Techniques',
              'Integrating Technology in Education',
              'Creating Inclusive Learning Environments',
              'Strategies for Student-Centered Learning',
              'New Teaching Trends for 2024'
            ].map((title, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 text-lg font-semibold">{index + 1}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{title}</h3>
                  <p className="text-gray-600 text-sm">29 March 2024</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default TeacherResources;
