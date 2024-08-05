import React, { useState } from 'react';
import './style.css'; 

const TeacherCard = ({ title, credits, time, description, date, level, category, chapters, avatar, icon }) => (
  <div className="teacher-card bg-white shadow-lg rounded-xl overflow-hidden m-4 w-full md:w-1/2 lg:w-[30%] mt-10 ml-4 transition-transform duration-300 hover:scale-105 hover:shadow-xl h-[500px]">
    <div className="p-4 bg-yellow-500 relative h-60">
      <div className="absolute top-0 right-0 mt-2 mr-2">
        <img src={icon} alt="Icon" className="w-12 h-12 rounded-full" />
      </div>
      <h2 className="text-xl font-bold text-white">{title}</h2>
      <div className="flex items-center mt-2">
        <div className="bg-yellow-600 text-white font-bold py-1 px-3 rounded-full">{credits} Credits</div>
        <div className="flex items-center ml-4">
          <img src={avatar} alt="Avatar" className="w-8 h-8 rounded-full" />
          <span className="text-white ml-2">{time}</span>
        </div>
      </div>
    </div>
    <div className="p-4">
      <p className="text-gray-700">{description}</p>
      <div className="flex items-center mt-2 mt-20">
        <span className="bg-blue-100 text-blue-600 py-1 px-3 rounded-full">{date}</span>
        <span className="ml-2 bg-gray-200 text-gray-700 py-1 px-3 rounded-full">{level}</span>
        <span className="ml-2 bg-gray-200 text-gray-700 py-1 px-3 rounded-full">{category}</span>
        <span className="ml-2 bg-gray-200 text-gray-700 py-1 px-3 rounded-full">{chapters} chapters</span>
      </div>
    </div>
  </div>
);

const TeacherBlogSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');

  const cardsPerPage = 6;

  const cardsData = [
    {
      title: 'Sight Words Wall',
      credits: 500,
      time: '30 mins',
      description: 'Create a sight words wall where you add and review new words daily.',
      date: '08/01/2024',
      level: 'Beginner',
      category: 'Classroom Tools',
      chapters: 5,
      avatar: 'avatar1.png',
      icon: 'icon1.png'
    },
    {
      title: 'Focus Wall',
      credits: 600,
      time: '45 mins',
      description: 'Use a large wall to organize subjects like English, Math, Science, and Social Studies. Add and update educational materials throughout the year.',
      date: '08/10/2024',
      level: 'Intermediate',
      category: 'Classroom Tools',
      chapters: 6,
      avatar: 'avatar2.png',
      icon: 'icon2.png'
    },
    {
      title: 'Basic Colors and Shapes',
      credits: 400,
      time: '25 mins',
      description: 'Introduce primary colors and basic shapes through engaging activities for first graders and preschoolers.',
      date: '08/15/2024',
      level: 'Beginner',
      category: 'Classroom Tools',
      chapters: 4,
      avatar: 'avatar3.png',
      icon: 'icon3.png'
    },
    {
      title: 'Alphabet and Numbers Wall',
      credits: 700,
      time: '1 hr',
      description: 'Create an interactive wall displaying the alphabet (A-Z) and numbers (1-100) for young learners. Use it during lessons and daily reviews.',
      date: '08/22/2024',
      level: 'Beginner',
      category: 'Classroom Tools',
      chapters: 7,
      avatar: 'avatar4.png',
      icon: 'icon4.png'
    },
    {
      title: 'Interactive Science Displays',
      credits: 650,
      time: '50 mins',
      description: 'Create interactive displays for science topics, such as life cycles and the solar system, to enhance visual learning and engagement.',
      date: '09/01/2024',
      level: 'Intermediate',
      category: 'Classroom Tools',
      chapters: 5,
      avatar: 'avatar5.png',
      icon: 'icon5.png'
    },
    {
      title: 'Math Manipulatives Station',
      credits: 550,
      time: '40 mins',
      description: 'Set up a station with various math manipulatives like counters, number lines, and base ten blocks to aid in hands-on learning.',
      date: '09/10/2024',
      level: 'Beginner',
      category: 'Classroom Tools',
      chapters: 6,
      avatar: 'avatar6.png',
      icon: 'icon6.png'
    }
    // Add more cards here if needed
  ];

  // Filter and search logic
  const filteredCards = cardsData.filter(card => 
    card.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterCategory === 'All' || card.category === filterCategory)
  );

  // Calculate the index of the first and last card to display on the current page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredCards.length / cardsPerPage);

  return (
    <div className="container mx-auto py-8 mt-40">
      <h1 className="text-4xl font-extrabold text-center mb-8">Explore Our Innovative Teaching Resources</h1>

      <div className="flex flex-col md:flex-row md:justify-between mb-6 items-center">
        <div className="flex flex-grow mb-4 md:mb-0">
          <input
            type="text"
            placeholder="Search resources..."
            className="p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 w-[90%] transition-transform duration-300"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex-none">
          <select
            className="p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 mr-[60px] w-[500px] transition-transform duration-300"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="Classroom Tools">Classroom Tools</option>
            {/* Add more categories as needed */}
          </select>
        </div>
      </div>

      <div className="flex flex-wrap -mx-4">
        {currentCards.map((card, index) => (
          <TeacherCard key={index} {...card} />
        ))}
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        <button
          className="bg-yellow-600 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-yellow-700 transition-transform duration-300"
          onClick={() => setCurrentPage(prevPage => Math.max(prevPage - 1, 1))}
        >
          &laquo; Previous
        </button>

        <div className="flex items-center space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-transform duration-300 ${currentPage === index + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <button
          className="bg-yellow-600 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-yellow-700 transition-transform duration-300"
          onClick={() => setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages))}
        >
          Next &raquo;
        </button>
      </div>
    </div>
  );
};

export default TeacherBlogSection;
