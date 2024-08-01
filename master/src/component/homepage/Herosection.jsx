import React from 'react';
import { Carousel } from 'flowbite-react';
import 'flowbite/dist/flowbite.min.css'; // Ensure Flowbite CSS is imported

function Herosection() {
  const videoUrl = "https://science.nasa.gov/wp-content/uploads/2023/06/astro-homepage-loop-v12.mp4";

  return (
    <div className="h-screen sm:h-screen xl:h-screen 2xl:h-screen flex items-center justify-center pt-[70px] mx-10">
      {/* Container with border and margin */}
      <div className="relative w-full h-full rounded-t-lg overflow-hidden  ">
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
              <div className="max-w-md text-center text-white z-20">
                {index === 0 && (
                  <>
                    <h1 className="text-5xl font-bold mb-4">Discover the World of Technology</h1>
                    <p className="text-lg mb-6">
                      Explore our latest innovations and stay ahead of the curve with our cutting-edge solutions.
                    </p>
                    <a href="#learn-more" className="bg-blue-900 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded mr-4">
                      Learn More
                    </a>
                    <a href="#contact-us" className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
                      Contact Us
                    </a>
                  </>
                )}
                {index === 1 && (
                  <>
                    <h1 className="text-5xl font-bold mb-4">Innovate with the World</h1>
                    <p className="text-lg mb-6">
                      Join our global community of forward-thinkers and be a part of transformative projects.
                    </p>
                    <a href="#about-us" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
                      About Us
                    </a>
                    <a href="#services" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                      Our Services
                    </a>
                  </>
                )}
                {index === 2 && (
                  <>
                    <h1 className="text-5xl font-bold mb-4">Stay Ahead of the World</h1>
                    <p className="text-lg mb-6">
                      Get insights and updates on the latest global trends in technology and innovation.
                    </p>
                    <a href="#subscribe" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
                      Subscribe
                    </a>
                    <a href="#explore" className="bg-pink-900 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
                      Explore
                    </a>
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
