import React from 'react';
import { useParams } from 'react-router-dom';
import { PlayIcon, ClockIcon, BookOpenIcon } from '@heroicons/react/24/solid';
import v from "./assets/Snapinsta.app_video_An-w4jk36_XfmUglxeFkH3einOHlGChBR4VtlLD91ulwfAdSGtQcuttS-4xFpVP0BDhV4HcB5yCUx4InqQb869tQ.mp4"
import i from "./assets/111.jpg"

const ActivityDetails = () => {
  const { slug } = useParams();

  // In a real application, you would fetch the activity details based on the slug
  const activityData = {
    title: "تقدير النعم",
    description: "Learn about the importance of gratitude and how to cultivate it in your daily life. This course will guide you through various exercises and reflections to help you develop a deeper sense of appreciation for the world around you.",
    duration: "2 hours",
    difficulty: "Beginner",
    steps: [
      "Understand the concept of gratitude",
      "Identify things to be grateful for",
      "Practice daily gratitude exercises",
      "Reflect on the impact of gratitude",
      "Share your gratitude with others"
    ]
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-96 mb-8 bg-cover bg-center"
        style={{ backgroundImage: `url(/src/component/profile1/assets/1.webp)` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white text-center px-4">{activityData.title}</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Activity Info */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-wrap items-center justify-between mb-4">
            <div className="flex items-center mb-2 mr-4">
              <ClockIcon className="h-5 w-5 text-gray-500 mr-2" />
              <span className="text-gray-700">{activityData.duration}</span>
            </div>
            <div className="flex items-center mb-2">
              <BookOpenIcon className="h-5 w-5 text-gray-500 mr-2" />
              <span className="text-gray-700">{activityData.difficulty}</span>
            </div>
          </div>
          <p className="text-gray-700">{activityData.description}</p>
        </div>

        {/* Video Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <PlayIcon className="h-6 w-6 text-red-500 mr-2" />
            Activity Video
          </h2>
          <div className="relative w-full pb-[56.25%] h-0">
            <iframe 
              src={v} 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full rounded-lg object-cover"
            ></iframe>
          </div>
        </div>

        {/* Steps Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Activity Steps</h2>
          <ol className="space-y-4">
            {activityData.steps.map((step, index) => (
              <li key={index} className="flex items-start">
                <span className="flex items-center justify-center bg-blue-500 text-white rounded-full w-6 h-6 mr-3 mt-0.5 flex-shrink-0">
                  {index + 1}
                </span>
                <span className="text-gray-700">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ActivityDetails;
