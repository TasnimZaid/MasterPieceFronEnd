import React, { useState } from 'react';
import { motion } from 'framer-motion';

const EduActivities = () => {
  const [activities, setActivities] = useState([
    {
      id: 1,
      name: "John Doe",
      role: "Teacher of Physics",
      school: "Modern Age School",
      image: "/path/to/john-doe-image.jpg",
      material: "Physics",
      title: "Build an Electromagnet",
      description: "This activity aims to demonstrate the principles of electromagnetism by creating a simple electromagnet. Students will learn how electric current can generate a magnetic field and explore factors that affect the strength of an electromagnet.",
      ageGroup: "12-16 years",
      price: 20,
      members: 4
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Biology Instructor",
      school: "Greenwood Academy",
      image: "/path/to/jane-smith-image.jpg",
      material: "Biology",
      title: "Plant Growth Experiment",
      description: "An engaging activity to study the effects of different variables on plant growth. Students will plant seeds in various conditions and observe the results over time.",
      ageGroup: "8-12 years",
      price: 15,
      members: 3
    },
    {
      id: 3,
      name: "Mark Lee",
      role: "Chemistry Professor",
      school: "City High School",
      image: "/path/to/mark-lee-image.jpg",
      material: "Chemistry",
      title: "Chemical Reactions Demonstration",
      description: "Explore fundamental chemical reactions through exciting demonstrations. Students will learn about exothermic and endothermic reactions, and the principles behind them.",
      ageGroup: "14-18 years",
      price: 25,
      members: 5
    }
    // Add more activities as needed
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">EduActivities</h1>
        <button className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition-colors duration-300">
          + Add New Activity
        </button>
      </div>
      <div className="space-y-6">
        {activities.map((activity) => (
          <motion.div 
            key={activity.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/3 p-6 bg-gray-100">
                <img src={activity.image} alt={activity.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
                <h3 className="text-xl font-semibold text-center">{activity.name}</h3>
                <p className="text-gray-600 text-center">{activity.role}</p>
                <p className="text-gray-600 text-center">{activity.school}</p>
                <button className="w-full bg-blue-500 text-white py-2 rounded-md mt-4 hover:bg-blue-600 transition-colors duration-300">Follow</button>
                <button className="w-full bg-green-500 text-white py-2 rounded-md mt-2 hover:bg-green-600 transition-colors duration-300">Message</button>
                <button className="w-full bg-pink-500 text-white py-2 rounded-md mt-2 hover:bg-pink-600 transition-colors duration-300">More Info</button>
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  {['Website', 'Github', 'Twitter', 'Instagram', 'Facebook'].map((link) => (
                    <a key={link} href="#" className="text-blue-500 hover:underline text-sm">{link}</a>
                  ))}
                </div>
              </div>
              <div className="w-full md:w-2/3 p-6">
                <h2 className="text-2xl font-bold mb-4">Material: {activity.material}</h2>
                <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>
                <p className="text-gray-700 mb-4">{activity.description}</p>
                <div className="flex flex-wrap justify-between text-sm text-gray-600 gap-2">
                  <p>Age Group: {activity.ageGroup}</p>
                  <p>Price: ${activity.price}</p>
                  <p>Members: {activity.members}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EduActivities;
