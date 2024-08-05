import React from 'react';
import img from "./assets/pexels-vanessa-loring-7868892.jpg"

const LetterActivity = () => {
    return (
        <div className="bg-gray-100 py-20">
          <div className="container mx-auto flex items-center">
            <div className="w-1/2 pr-12 animate-fade-in-left">
              <h2 className="text-4xl font-bold mb-6">Dear Educators,</h2>
              <p className="text-xl leading-relaxed">
                We invite you to explore and share innovative teaching activities. 
                Together, we can create an inspiring learning environment for students 
                and revolutionize education one activity at a time.
              </p>
            </div>
            <div className="w-1/2 animate-fade-in-right">
              <img 
                src={img}
                alt="Classroom scene" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      );
    
};

export default LetterActivity;