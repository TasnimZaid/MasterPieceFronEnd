import React from 'react';
import { Carousel } from 'flowbite-react';
import 'flowbite/dist/flowbite.min.css'; // Ensure Flowbite CSS is imported

function Herosection() {
  const videoUrl = "https://science.nasa.gov/wp-content/uploads/2023/06/astro-homepage-loop-v12.mp4";

  return (
    <div className="h-screen sm:h-screen xl:h-screen 2xl:h-screen">
      {/* Container with border and margin */}
      <div className="relative w-full h-full rounded-t-lg overflow-hidden">
        {/* Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Background Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-10"></div>

        {/* Carousel content */}
        <Carousel className="h-full">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="relative w-full h-full flex items-center justify-center">
              {/* Content for each slide */}
              <div className="max-w-lg w-full px-4 text-left text-white z-20">
                {index === 0 && (
                  <>
                    <h1 className="text-5xl font-bold mb-4">Empower Educators with Resources</h1>
                    <p className="text-lg mb-6">
                      Access a wealth of resources and tools designed to support educators in their teaching journey.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a href="#resources" className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
                        Explore Resources
                      </a>
                      <a href="#consultants" className="bg-white hover:bg-gray-200 text-pink-600 font-bold py-2 px-4 rounded border border-pink-600">
                        Meet Consultants
                      </a>
                    </div>
                  </>
                )}
                {index === 1 && (
                  <>
                    <h1 className="text-5xl font-bold mb-4">Join Our Teaching Community</h1>
                    <p className="text-lg mb-6">
                      Connect with fellow educators, share insights, and enhance your teaching skills through our community.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a href="#community" className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
                        Join the Community
                      </a>
                      <a href="#earn" className="bg-white hover:bg-gray-200 text-pink-600 font-bold py-2 px-4 rounded border border-pink-600">
                        Earn with Us
                      </a>
                    </div>
                  </>
                )}
                {index === 2 && (
                  <>
                    <h1 className="text-5xl font-bold mb-4">Engage in Educational Activities</h1>
                    <p className="text-lg mb-6">
                      Discover a range of activities designed to enrich the learning experience and engage your students.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a href="#activities" className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
                        View Activities
                      </a>
                      <a href="#contact" className="bg-white hover:bg-gray-200 text-pink-600 font-bold py-2 px-4 rounded border border-pink-600">
                        Contact Us
                      </a>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Herosection;
