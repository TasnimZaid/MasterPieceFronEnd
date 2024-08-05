import React, { useState } from 'react';
import { FaStar, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaDribbble } from 'react-icons/fa';

const TeacherCommunity = () => {
  const teachers = [
    { name: 'Adrian Brewer', role: 'Math Teacher', rating: 4.8, image: 'https://i.pravatar.cc/150?img=1', socials: ['facebook', 'instagram'], status: 'Active' },
    { name: 'Luis Keller', role: 'Science Teacher', rating: 4.5, image: 'https://i.pravatar.cc/150?img=2', socials: ['facebook', 'instagram', 'linkedin', 'twitter', 'dribbble'], status: 'Active' },
    { name: 'James O', role: 'English Teacher', rating: 4.2, image: 'https://i.pravatar.cc/150?img=3', socials: ['facebook', 'instagram', 'linkedin'], status: 'Active' },
    { name: 'Carolyn Barber', role: 'History Teacher', rating: 4.7, image: 'https://i.pravatar.cc/150?img=4', socials: ['instagram'], status: 'Active' },
    { name: 'Ruth McCormick', role: 'Art Teacher', rating: 4.9, image: 'https://i.pravatar.cc/150?img=5', socials: ['facebook', 'instagram', 'linkedin'], status: 'Active' },
    { name: 'Jacob Huff', role: 'Physical Education', rating: 4.0, image: null, socials: ['instagram'], status: 'Active' },
    { name: 'Jorge Dixon', role: 'Music Teacher', rating: 4.6, image: 'https://i.pravatar.cc/150?img=7', socials: ['facebook', 'instagram'], status: 'Active' },
    { name: 'Alfred Morgan', role: 'Computer Science', rating: 4.4, image: 'https://i.pravatar.cc/150?img=8', socials: ['facebook', 'instagram', 'linkedin', 'twitter', 'dribbble'], status: 'Active' },
    { name: 'Jim Griffin', role: 'Geography Teacher', rating: 4.3, image: 'https://i.pravatar.cc/150?img=9', socials: [], status: 'Active' },
    { name: 'Amanda Murphy', role: 'Chemistry Teacher', rating: 4.8, image: 'https://i.pravatar.cc/150?img=10', socials: [], status: 'Active' },
    { name: 'Mario Anderson', role: 'Physics Teacher', rating: 4.7, image: 'https://i.pravatar.cc/150?img=11', socials: [], status: 'Active' },
    { name: 'May Gilbert', role: 'Biology Teacher', rating: 4.5, image: null, socials: [], status: 'Active' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [selectedSort, setSelectedSort] = useState('None');
  const cardsPerPage = 20;

  const filteredTeachers = teachers.filter(teacher => 
    (selectedRole === 'All' || teacher.role === selectedRole) &&
    (selectedStatus === 'All' || teacher.status === selectedStatus) &&
    teacher.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedTeachers = filteredTeachers.sort((a, b) => {
    if (selectedSort === 'RatingAsc') {
      return a.rating - b.rating;
    } else if (selectedSort === 'RatingDesc') {
      return b.rating - a.rating;
    }
    return 0;
  });

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = sortedTeachers.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const SocialIcon = ({ platform }) => {
    const icons = {
      facebook: FaFacebookF,
      instagram: FaInstagram,
      linkedin: FaLinkedinIn,
      twitter: FaTwitter,
      dribbble: FaDribbble,
    };
    const Icon = icons[platform];
    return <Icon className="text-gray-400 hover:text-gray-600 transition-colors duration-200" />;
  };

  return (
    <div className=" min-h-screen mt-20">
     

      <div className="p-6">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <div className="space-x-4 mb-4 sm:mb-0">
            <span className="text-2xl font-bold">Members</span>
            <span className="text-gray-500">88</span>
            <span className="text-2xl font-bold text-gray-300">Schools</span>
            <span className="text-gray-300">12</span>
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <input
              type="text"
              placeholder="Search by name..."
              className="bg-white border border-gray-300 rounded-md px-3 py-2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
              className="bg-white border border-gray-300 rounded-md px-3 py-2"
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
            >
              <option value="All">All Roles</option>
              <option>Math Teacher</option>
              <option>Science Teacher</option>
              <option>English Teacher</option>
              <option>History Teacher</option>
              <option>Art Teacher</option>
              <option>Physical Education</option>
              <option>Music Teacher</option>
              <option>Computer Science</option>
              <option>Geography Teacher</option>
              <option>Chemistry Teacher</option>
              <option>Physics Teacher</option>
              <option>Biology Teacher</option>
            </select>
            <select
              className="bg-white border border-gray-300 rounded-md px-3 py-2"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              <option value="All">Status: All</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
            <select
              className="bg-white border border-gray-300 rounded-md px-3 py-2"
              value={selectedSort}
              onChange={(e) => setSelectedSort(e.target.value)}
            >
              <option value="None">Sort by: None</option>
              <option value="RatingAsc">Rating: Low to High</option>
              <option value="RatingDesc">Rating: High to Low</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {currentCards.map((teacher, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 transform transition-all duration-500 hover:scale-105">
              <div className="flex items-center space-x-4 mb-4">
                <img className="w-16 h-16 rounded-full" src={teacher.image || 'https://i.pravatar.cc/150?img=6'} alt={teacher.name} />
                <div>
                  <h2 className="text-xl font-semibold">{teacher.name}</h2>
                  <p className="text-gray-500">{teacher.role}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 mb-4">
                <FaStar className="text-yellow-400" />
                <span>{teacher.rating.toFixed(1)}</span>
              </div>
              <div className="flex space-x-2">
                {teacher.socials.map((social, index) => (
                  <SocialIcon key={index} platform={social} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <ul className="flex space-x-2">
            {[...Array(Math.ceil(sortedTeachers.length / cardsPerPage)).keys()].map(number => (
              <li key={number} className="cursor-pointer" onClick={() => paginate(number + 1)}>
                <span className={`px-3 py-2 rounded-md ${currentPage === number + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}>
                  {number + 1}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TeacherCommunity;
