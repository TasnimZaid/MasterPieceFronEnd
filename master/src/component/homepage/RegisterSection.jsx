import React from 'react';

const RegisterSection = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="https://science.nasa.gov/wp-content/uploads/2023/06/astro-homepage-loop-v12.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-start p-8 md:p-16 lg:p-24 xl:p-32">
        <h1 className="text-white text-2xl md:text-2xl lg:text-2xl xl:text-4xl font-extrabold mb-6 md:mb-8 lg:mb-10 xl:mb-12 leading-tight">
          Join Our Teaching Community
        </h1>
        <p className="text-white text-xl md:text-2xl lg:text-2xl xl:text-2xl mb-6 md:mb-8 lg:mb-10 xl:mb-12 leading-relaxed">
          Register now to create your profile, share your activities and resources with other teachers,  <span className="bg-yellow-300 bg-opacity-70 text-dark px-1 py-2 rounded-md mx-3">  and earn money </span>   from your contributions!
        </p>
        <ul className="text-white text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 lg:mb-10 xl:mb-12 list-disc list-inside space-y-3">
          <li>Communicate with other teachers</li>
          <li>Rate and review shared resources</li>
          <li>Earn certificates for your contributions</li>
          <li>Participate in forums and discussions</li>
        </ul>
        <div className="flex flex-col md:flex-row items-start md:items-center w-full mt-8">
          <div className="flex flex-col md:flex-row items-start md:items-center w-full md:justify-start space-y-4 md:space-y-0 md:space-x-4">
            <a
              href="/register"
              className="bg-yellow-500 text-dark px-8 py-4 rounded-lg text-lg md:text-xl lg:text-2xl font-bold hover:bg-yellow-600 transition duration-300 transform hover:scale-105"
            >
              Get Started &rarr;
            </a>
            <a
              href="/learn-more"
              className="text-white text-lg md:text-xl lg:text-2xl underline hover:text-yellow-400 transition duration-300 transform hover:scale-105"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterSection;
