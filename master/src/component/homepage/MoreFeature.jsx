import React from 'react';
import img from "./assets/pexels-yankrukov-8613089.jpg"
import img1 from "./assets/pexels-cottonbro-4098215.jpg"
import img3 from "./assets/pexels-fauxels-3184328.jpg"
import img4 from "./assets/pexels-wdnet-5921677.jpg"
import img5 from "./assets/Screenshot 2024-08-01 004026.png"

const FeaturedSection = () => {
  return (
    <section className=" py-40">
      <div className="container mx-auto px-0">
        <h2 className="text-3xl font-bold mb-4">Looking for a solution to enhance your teaching?</h2>
        <div className="flex flex-wrap  mb-8">
          <div className="w-full md:w-1/2  md:px-4 mb-4 md:mb-0">
            <div className="relative h-96 overflow-hidden rounded-lg">
              <img
                src={img}
                alt="Enhancing Teaching"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
                <span className="text-white text-sm">ARTICLE</span>
                <h3 className="text-white text-xl font-bold">Innovative Teaching Methods</h3>
                <p className="text-white text-sm mt-2">Explore new strategies to engage your students and improve learning outcomes.</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-2 md:px-4">
            <div className="relative h-96 overflow-hidden rounded-lg">
              <img
                src={img1}
                alt="Consulting Activities"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
                <span className="text-white text-sm">ARTICLE</span>
                <h3 className="text-white text-xl font-bold">Consulting Activities</h3>
                <p className="text-white text-sm mt-2">Find expert advice and consulting services to address your teaching challenges.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-2 md:px-4 mb-4 md:mb-0">
            <div className="flex items-center">
              <img
                src={img3}
                alt="Teacher Resources"
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <span className="text-sm">ARTICLE</span>
                <h4 className="text-lg font-bold">Teacher Resources</h4>
                <p className="text-sm mt-2">Access a wide range of resources to support your teaching practices.</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-2 md:px-4 mb-4 md:mb-0">
            <div className="flex items-center">
              <img
                src={img4}
                alt="School Locations"
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <span className="text-sm">ARTICLE</span>
                <h4 className="text-lg font-bold">School Locations</h4>
                <p className="text-sm mt-2">Find and explore schools in Jordan for better collaboration and growth.</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-2 md:px-4">
            <div className="flex items-center">
              <img
                src={img5}
                alt="More Information"
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <span className="text-sm">ARTICLE</span>
                <h4 className="text-lg font-bold">More Information</h4>
                <p className="text-sm mt-2">Discover additional insights and information to enhance your teaching experience.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-right mt-8">
          <a href="/explore" className="text-pink-700 hover:text-pink-700 font-bold">Explore All Articles &rarr;</a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
