import React, { useEffect, useRef, useState } from 'react';
import img from "./assets/istockphoto-1994885891-1024x1024.jpg"
import img1 from "./assets/istockphoto-2154973924-1024x1024.jpg"


const BuildingDreams = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  

  return (
    <section 
      ref={sectionRef}
      className={`py-16 bg-white transition-opacity duration-1000 ease-in ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-4 leading-tight">
              Building Dreams,<br />Crafting Futures
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-md mt-8">
              <p className="text-gray-700">
                With a commitment to turning visions into tangible realities, our platform is passionately dedicated to crafting extraordinary learning experiences that not only inspire but also stand the test of time.
              </p>
            </div>
            <button className="mt-8 bg-pink-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition duration-300">
              Get in touch
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <img 
                src={img}
                alt="Construction site at sunset" 
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div className="col-span-1 md:col-span-1">
              <img 
                src={img1}
                alt="Skyscraper under construction" 
                className="w-full h-48 object-cover rounded-lg"
              />
              
            </div>
            <div className="col-span-1 md:col-span-1">
              <img 
                src={img1}
                alt="Skyscraper under construction" 
                className="w-full h-48 object-cover rounded-lg"
              />
              
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildingDreams;