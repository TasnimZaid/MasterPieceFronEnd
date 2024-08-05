import React from 'react';
import { FaStar, FaHeart } from 'react-icons/fa';

const EducationConsultants = () => {
  const consultants = [
    {
      name: "Sarah J.",
      image: "https://i.pravatar.cc/150?img=1",
      specialization: "Teacher Coaching",
      experience: "15 years of experience in curriculum development",
      activeClients: 12,
      sessions: 156,
      languages: ["English (Native)", "Spanish (Fluent)"],
      price: 75,
      rating: 4.9,
      reviews: 87,
    },
    {
      name: "Michael R.",
      image: "https://i.pravatar.cc/150?img=2",
      specialization: "School Coordination",
      experience: "Former principal with 20 years in educational leadership",
      activeClients: 8,
      sessions: 203,
      languages: ["English (Native)", "French (Conversational)"],
      price: 90,
      rating: 5,
      reviews: 62,
    },
    {
      name: "Aisha M.",
      image: "https://i.pravatar.cc/150?img=3",
      specialization: "Interview Preparation",
      experience: "HR specialist in education sector for 10 years",
      activeClients: 25,
      sessions: 412,
      languages: ["English (Native)", "Arabic (Native)"],
      price: 60,
      rating: 4.8,
      reviews: 103,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-2">Online Education Consultants for Teachers</h1>
      <p className="text-gray-600 mb-6">
        Looking for expert guidance in your teaching career? Our platform offers top-notch consultants 
        for coaching, coordination, and interview preparation. Choose from {consultants.length} experienced 
        professionals to boost your educational career. <span className="text-blue-600 cursor-pointer">Read more</span>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <select className="border p-2 rounded">
          <option>Specialization</option>
          <option>Teacher Coaching</option>
          <option>School Coordination</option>
          <option>Interview Preparation</option>
        </select>
        <select className="border p-2 rounded">
          <option>Price per session: Any</option>
          <option>$50 - $75</option>
          <option>$76 - $100</option>
          <option>$101+</option>
        </select>
        <select className="border p-2 rounded">
          <option>Availability: Any time</option>
          <option>Weekdays</option>
          <option>Weekends</option>
          <option>Evenings</option>
        </select>
      </div>

      <div className="flex flex-wrap gap-4 mb-6">
        <button className="bg-gray-200 px-4 py-2 rounded">Years of Experience ▼</button>
        <button className="bg-gray-200 px-4 py-2 rounded">Also speaks ▼</button>
        <select className="border p-2 rounded">
          <option>Sort by: Our top picks ▼</option>
          <option>Highest rated</option>
          <option>Most experienced</option>
          <option>Lowest price</option>
        </select>
        <input type="text" placeholder="Search by name or keyword" className="border p-2 rounded flex-grow" />
      </div>

      <p className="font-semibold mb-4">{consultants.length} Education consultants available</p>

      {consultants.map((consultant, index) => (
        <div key={index} className="border rounded-lg p-4 mb-6 flex flex-col md:flex-row">
          <img src={consultant.image} alt={consultant.name} className="w-32 h-32 rounded-full mb-4 md:mb-0 md:mr-6" />
          <div className="flex-grow">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h2 className="text-xl font-bold">{consultant.name}</h2>
                <p className="text-gray-600">{consultant.specialization}</p>
              </div>
              <div className="text-right">
                <span className="font-bold text-lg">${consultant.price}</span>
                <p className="text-sm text-gray-500">50-min session</p>
              </div>
            </div>
            <p className="mb-2">
              <span className="font-semibold">{consultant.activeClients}</span> active clients • 
              <span className="font-semibold"> {consultant.sessions}</span> sessions
            </p>
            <p className="mb-2">Speaks: {consultant.languages.join(", ")}</p>
            <p className="text-sm text-gray-700 mb-4">{consultant.experience}</p>
            <div className="flex justify-between items-center">
              <div>
                <button className="bg-pink-500 text-white px-4 py-2 rounded mr-2">Book trial session</button>
                <button className="border border-gray-300 px-4 py-2 rounded">Send message</button>
              </div>
              <div className="flex items-center">
                <FaStar className="text-yellow-400 mr-1" />
                <span className="font-bold mr-1">{consultant.rating}</span>
                <span className="text-gray-500">({consultant.reviews} reviews)</span>
                <FaHeart className="text-gray-300 ml-2 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationConsultants;