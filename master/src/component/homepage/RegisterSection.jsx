import React, { useEffect, useRef, useState } from 'react';
import happy from "./assets/happy.jpg"
import happy1 from "./assets/happy1.jpg"

const RegisterSection = () => {
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
      className={`py-16 bg-gray-500 transition-opacity duration-1000 ease-in ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 leading-tight text-white">
              Join Our Teaching Community
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white mb-6 md:mb-8 leading-relaxed">
              Register now to create your profile, share your activities and resources with other teachers, <span className="bg-pink-500 bg-opacity-80 text-white px-2 py-1 rounded-md">and earn money</span> from your contributions!
            </p>
            <ul className="text-base md:text-lg lg:text-xl text-white mb-6 md:mb-8 list-disc list-inside space-y-3 max-w-xl mx-auto md:mx-0">
              <li>Communicate with other teachers</li>
              <li>Rate and review shared resources</li>
              <li>Earn certificates for your contributions</li>
              <li>Participate in forums and discussions</li>
            </ul>
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
              <a
                href="/register"
                className="bg-pink-600 text-white px-8 py-3 rounded-full text-lg md:text-xl font-semibold hover:bg-pink-700 transition duration-300"
              >
                Get Started &rarr;
              </a>
              <a
                href="/learn-more"
                className="text-white text-lg md:text-xl underline hover:text-pink-400 transition duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <img
              src={happy}
              alt="Placeholder"
              className="w-full h-64 object-cover rounded-lg"
            />
            <img
              src={happy1}
              alt="Placeholder"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterSection;
