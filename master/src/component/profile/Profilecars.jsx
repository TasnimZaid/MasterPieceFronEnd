import React from 'react';
import img1 from "./assets/e7c18ff3ee44c1323bc9934e20a4be19.jpg";
import img2 from "./assets/e7c18ff3ee44c1323bc9934e20a4be19.jpg";
import img3 from "./assets/e7c18ff3ee44c1323bc9934e20a4be19.jpg";
import img4 from "./assets/e7c18ff3ee44c1323bc9934e20a4be19.jpg";

const teachers = [
  {
    image: img1,
    name: 'Alice Johnson',
    location: 'San Francisco, CA',
    role: 'Math Teacher',
    school: 'Stanford University',
    friends: 70,
    photos: 20,
    comments: 35,
    isPopular: false
  },
  {
    image: img2,
    name: 'Bob Smith',
    location: 'Los Angeles, CA',
    role: 'Science Teacher',
    school: 'UCLA',
    friends: 80,
    photos: 30,
    comments: 25,
    isPopular: false
  },
  {
    image: img3,
    name: 'Carol White',
    location: 'Chicago, IL',
    role: 'History Teacher',
    school: 'University of Chicago',
    friends: 90,
    photos: 40,
    comments: 45,
    isPopular: false
  }
];

const TeacherList = () => {
  return (
    <div className="flex flex-col items-center p-8 mt-20">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Popular Teacher of the Week</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl w-full">
        {teachers.map((teacher, index) => (
          <div
            key={index}
            className="max-w-sm mx-auto bg-white rounded-xl shadow-md"
          >
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-center">
                <button className="text-gray-500 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                  Connect
                </button>
                <button className="text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                    <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                  </svg>
                </button>
              </div>
              
              <div className="text-center">
                <img className="h-24 w-24 rounded-full mx-auto" src={teacher.image} alt="Profile" />
                <h2 className="mt-4 text-xl font-semibold text-gray-700">{teacher.name}</h2>
                <p className="text-gray-500">{teacher.location}</p>
              </div>
              
              <div className="text-center">
                <p className="text-gray-600">{teacher.role}</p>
                <p className="text-gray-600">{teacher.school}</p>
              </div>
              
              <div className="flex justify-center space-x-8">
                <div className="text-center">
                  <p className="text-xl font-semibold text-gray-700">{teacher.friends}</p>
                  <p className="text-gray-500">Friends</p>
                </div>
                <div className="text-center">
                  <p className="text-xl font-semibold text-gray-700">{teacher.photos}</p>
                  <p className="text-gray-500">Photos</p>
                </div>
                <div className="text-center">
                  <p className="text-xl font-semibold text-gray-700">{teacher.comments}</p>
                  <p className="text-gray-500">Comments</p>
                </div>
              </div>
              
              <button className="w-full py-2 px-4 bg-pink-700 text-white font-semibold rounded-lg shadow-md hover:bg-pink-800 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-75">
                Show more
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default TeacherList;

