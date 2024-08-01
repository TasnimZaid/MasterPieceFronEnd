import React from 'react';
import { Carousel } from 'flowbite-react';
import 'flowbite/dist/flowbite.min.css'; // Ensure Flowbite CSS is imported

function HeroSectionTem() {
  const videoUrl = "/src/component/template/assets/7779788-uhd_2732_1440_25fps - Trim.mp4";

  return (
    <>
    <div className="h-screen sm:h-screen xl:h-screen 2xl:h-screen flex items-center justify-center pt-[70px] mx-10">
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
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-10"></div>

        {/* Carousel content */}
        <Carousel className="h-full">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="relative w-full h-full flex items-center justify-start p-20">
              {/* Content for each slide */}
              <div className=" text-left text-white  z-20">
                {index === 0 && (
                  <>
                    <h1 className="text-6xl font-extrabold mb-6">Find Your Perfect Template</h1>
                    <p className="text-xl font-semibold mb-8">
                      Browse through a wide range of templates to find the perfect one for your educational needs.
                    </p>
                  </>
                )}
                {index === 1 && (
                  <>
                    <h1 className="text-6xl font-extrabold mb-6">Enhance Your Learning Experience</h1>
                    <p className="text-xl font-semibold mb-8">
                      Utilize our templates to create engaging and effective educational content.
                    </p>
                  </>
                )}
                {index === 2 && (
                  <>
                    <h1 className="text-6xl font-extrabold mb-6">Join Our Educational Community</h1>
                    <p className="text-xl font-semibold mb-8">
                      Connect with other educators and share resources to enhance your teaching.
                    </p>
                  </>
                )}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
    </>
  );
}

export default HeroSectionTem;
