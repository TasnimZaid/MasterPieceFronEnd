import React, { useState } from 'react';

// Dummy data for activities, including material
const activities = [
  { id: 1, title: "Interactive Science Lab", teacher: "Ms. Johnson", price: 9.99, image: "/src/component/activity/assets/pexels-vanessa-loring-7869041.jpg", material: "Science" },
  { id: 2, title: "Creative Writing Workshop", teacher: "Mr. Smith", price: 14.99, image: "/src/component/activity/assets/pexels-kseniachernaya-7695294.jpg", material: "Writing" },
  { id: 3, title: "Art History Seminar", teacher: "Dr. Lee", price: 12.99, image: "/src/component/activity/assets/pexels-tima-miroshnichenko-5428305.jpg", material: "Art" },
  { id: 4, title: "Mathematics Olympiad", teacher: "Prof. Brown", price: 19.99, image: "/src/component/activity/assets/pexels-karolina-grabowska-5877639.jpg", material: "Math" },
  { id: 5, title: "Coding Bootcamp", teacher: "Ms. Davis", price: 29.99, image: "/src/component/activity/assets/pexels-imperioame-4078343.jpg", material: "Coding" },
  { id: 6, title: "Physics Experiments", teacher: "Mr. Wilson", price: 16.99, image: "/src/component/activity/assets/pexels-ron-lach-9785611.jpg", material: "Science" },
  { id: 7, title: "Digital Art Workshop", teacher: "Ms. Martinez", price: 22.99, image: "/src/component/activity/assets/pexels-margarita-shtyfura-1275270352-24829059.jpg", material: "Art" },
  { id: 8, title: "Psychology Insights", teacher: "Dr. Taylor", price: 18.99, image: "/src/component/activity/assets/pexels-canvastudio-3153199.jpg", material: "Psychology" },
  { id: 9, title: "History of Music", teacher: "Mr. Anderson", price: 13.99, image: "/src/component/activity/assets/pexels-zayceva-tatiana-135444866-11224321.jpg", material: "Music" }
];

const ActivityCard = ({ title, teacher, price, image }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-2">By: {teacher}</p>
      <p className="text-green-600 font-bold mb-4">${price.toFixed(2)}</p>
      <button className="w-full bg-white border border-pink-500 text-pink-500 px-4 py-2 rounded hover:bg-pink-100 transition duration-300">
        View Details
      </button>
    </div>
  </div>
);

const ActivityCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const activitiesPerPage = 6;

  // Filter and search activities
  const filteredActivities = activities
    .filter(activity => activity.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(activity => selectedFilter === 'all' || (selectedFilter === 'cheap' && activity.price < 15) || (selectedFilter === 'expensive' && activity.price >= 15) || (selectedFilter === 'free' && activity.price === 0))
    .filter(activity => selectedMaterial === 'all' || activity.material === selectedMaterial);

  const indexOfLastActivity = currentPage * activitiesPerPage;
  const indexOfFirstActivity = indexOfLastActivity - activitiesPerPage;
  const currentActivities = filteredActivities.slice(indexOfFirstActivity, indexOfLastActivity);

  const totalPages = Math.ceil(filteredActivities.length / activitiesPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto py-16 pt-40">
      <h2 className="text-3xl font-bold mb-8 text-center">Featured Activities</h2>

      <div className="mb-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <input
          type="text"
          placeholder="Search activities..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full md:w-1/3"
        />
        <select
          value={selectedFilter}
          onChange={(e) => setSelectedFilter(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full md:w-1/3"
        >
          <option value="all">All Prices</option>
          <option value="cheap">Under $15</option>
          <option value="expensive">$15 and up</option>
          <option value="free">Free</option>
        </select>
        <select
          value={selectedMaterial}
          onChange={(e) => setSelectedMaterial(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full md:w-1/3"
        >
          <option value="all">All Materials</option>
          <option value="Science">Science</option>
          <option value="Writing">Writing</option>
          <option value="Art">Art</option>
          <option value="Math">Math</option>
          <option value="Coding">Coding</option>
          <option value="Psychology">Psychology</option>
          <option value="Music">Music</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentActivities.map(activity => (
          <div className="w-full max-w-sm mx-auto" key={activity.id}>
            <ActivityCard {...activity} />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => paginate(i + 1)}
            className={`mx-1 px-4 py-2 border rounded ${
              currentPage === i + 1
                ? 'bg-white border-pink-500 text-pink-500 font-semibold'
                : 'bg-white border-gray-300 text-gray-500'
            } hover:bg-pink-100 transition duration-300`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ActivityCards;
