import React from 'react';
import { Link } from 'react-router-dom';
import img from "./assets/432641009_932546425541458_2407958021733398587_n.jpg"

const IsraaProfileAndActivities = () => {
  return (
    <div className="container mx-auto py-16">
       
          <h1 className="text-4xl font-bold text-black mb-">Israa's Activities</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ActivityCard 
          img={img}
          title="تقدير النعم"
          author="Israa Abu Seif"
          price="Free"
          slug="taqdir-al-niam"
        />
        <ActivityCard 
          img="/path-to-your-image/writing-workshop.jpg"
          title="الدعم والتعزيز"
          author="Israa Abu Seif"
          price="$10"
          slug="al-daam-wal-taaziz"
        />
        <ActivityCard 
          img="/path-to-your-image/art-history.jpg"
          title="Art History Seminar"
          author="Israa Abu Seif"
          price="$12.99"
          slug="art-history-seminar"
        />
      </div>
    </div>
  );
};

const ActivityCard = ({ img, title, author, price, slug }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img 
      src={img}
      alt={title} 
      className="w-full h-48 object-cover" 
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-2">By: {author}</p>
      <p className="text-green-600 font-bold mb-4">{price}</p>
      <Link 
        to={`/activity/${slug}`}
        className="block w-full bg-gray-600 text-white text-center px-4 py-2 rounded hover:bg-gray-700 transition duration-300"
      >
        View Details
      </Link>
    </div>
  </div>
);

export default IsraaProfileAndActivities;