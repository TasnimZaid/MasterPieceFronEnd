import React, { useState } from 'react';
import defaultImage from './assets/istockphoto-1482633572-1024x1024.jpg'; // Replace with your actual image path
import TeacherResources from './HeroTem';

const ActivityCard = ({ title, teacher, price, image }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={image || defaultImage} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-2">By: {teacher}</p>
      <p className="text-green-600 font-bold mb-4">${price.toFixed(2)}</p>
      <button className="w-full bg-white border-2 border-pink-500 text-pink-500 px-4 py-2 rounded-lg hover:bg-pink-500 hover:text-white transition duration-300">
        View Details
      </button>
    </div>
  </div>
);

const ActivityCards = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const activitiesPerPage = 6;

  const activities = [
    { id: 1, title: "Interactive Science Lab", teacher: "Ms. Johnson", price: 9.99, image: defaultImage, category: 'Workshops' },
    { id: 2, title: "Creative Writing Workshop", teacher: "Mr. Smith", price: 14.99, image: defaultImage, category: 'Workshops' },
    { id: 3, title: "Art History Seminar", teacher: "Dr. Lee", price: 12.99, image: defaultImage, category: 'Seminars' },
    { id: 4, title: "Mathematics Olympiad", teacher: "Prof. Brown", price: 19.99, image: defaultImage, category: 'Competitions' },
    { id: 5, title: "Coding Bootcamp", teacher: "Ms. Davis", price: 29.99, image: defaultImage, category: 'Workshops' },
    { id: 6, title: "Physics Experiments", teacher: "Mr. Wilson", price: 16.99, image: defaultImage, category: 'Experiments' },
    { id: 7, title: "Digital Art Workshop", teacher: "Ms. Martinez", price: 22.99, image: defaultImage, category: 'Workshops' },
    { id: 8, title: "Psychology Insights", teacher: "Dr. Taylor", price: 18.99, image: defaultImage, category: 'Seminars' },
    { id: 9, title: "History of Music", teacher: "Mr. Anderson", price: 13.99, image: defaultImage, category: 'Seminars' },
    { id: 10, title: "Biology Field Trip", teacher: "Ms. Thompson", price: 24.99, image: defaultImage, category: 'Field Trips' },
    { id: 11, title: "Chemistry Lab Safety", teacher: "Dr. Harris", price: 17.99, image: defaultImage, category: 'Workshops' },
    { id: 12, title: "Advanced Mathematics", teacher: "Prof. Smith", price: 21.99, image: defaultImage, category: 'Courses' },
    { id: 13, title: "Introduction to Robotics", teacher: "Mr. Adams", price: 25.99, image: defaultImage, category: 'Courses' },
    { id: 14, title: "Digital Media Basics", teacher: "Ms. Brown", price: 19.99, image: defaultImage, category: 'Workshops' },
    { id: 15, title: "Philosophy of Education", teacher: "Dr. Clark", price: 30.99, image: defaultImage, category: 'Seminars' }
  ];

  const filteredActivities = activities.filter(activity =>
    (selectedCategory === 'All' || activity.category === selectedCategory) &&
    activity.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastActivity = currentPage * activitiesPerPage;
  const indexOfFirstActivity = indexOfLastActivity - activitiesPerPage;
  const currentActivities = filteredActivities.slice(indexOfFirstActivity, indexOfLastActivity);

  const totalPages = Math.ceil(filteredActivities.length / activitiesPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (

    <div className="container mx-auto py-16">
      <TeacherResources/>
      <h1 className="text-4xl font-bold mb-8 text-center mt-40">Explore Our Educational Activities</h1>
      <p className="text-lg text-gray-700 mb-12 text-center">
        Discover a wide range of activities designed to enhance the learning experience. Whether you're looking for interactive workshops, engaging seminars, or educational field trips, you'll find a variety of options to suit your needs. Use the search bar and filters to find exactly what you're looking for and get inspired for your next educational adventure!
      </p>
      
      {/* Search Bar */}
      <div className="mb-8">
        <input 
          type="text" 
          placeholder="Search activities..." 
          className="w-full p-2 border rounded-md" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Filter Options */}
      <div className="flex flex-wrap mb-8">
        {['All', 'Workshops', 'Seminars', 'Competitions', 'Courses', 'Field Trips', 'Experiments'].map(category => (
          <button 
            key={category}
            className={`mr-4 mb-2 px-4 py-2 rounded-md shadow ${selectedCategory === category ? 'bg-pink-500 text-white' : 'bg-white text-gray-700'}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Activity Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {currentActivities.map(activity => (
          <ActivityCard key={activity.id} {...activity} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => paginate(i + 1)}
            className={`mx-1 px-4 py-2 border rounded-full ${
              currentPage === i + 1 ? 'bg-pink-500 text-white' : 'bg-white text-pink-500'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ActivityCards;
