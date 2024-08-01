import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import img from "./assets/Black and White Circle Smart Company Logo.png";


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setPercent(Math.round((winScroll / height) * 100));
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      {/* Page Scroll Progress */}
      <div className="fixed inset-x-0 top-0 z-50 h-0.5 mt-0.5 bg-blue-900" style={{ width: `${percent}%` }}></div>

      {/* Navbar */}
      <nav className="flex justify-around py-4 bg-dark backdrop-blur-md shadow-md w-full fixed top-0 left-0 right-0 z-10">
        {/* Logo Container */}
        <div className="flex items-center">
          {/* Logo */}
          <Link to="/" className="cursor-pointer">
            <h3 className="text-2xl font-medium text-blue-900">
              <img
                className="h-12 w-[100%] object-cover"
                src={img}
                alt="Store Logo"
              />
            </h3>
          </Link>
        </div>

        {/* Links Section */}
        <div className={`items-center space-x-8 lg:flex ${isMenuOpen ? 'flex' : 'hidden'}`}>
          <Link to="/" className="flex text-white text-xl hover:text-blue-900 cursor-pointer transition-colors duration-300">Home</Link>
          <Link to="/edu-source" className="flex text-white text-xl hover:text-blue-900 cursor-pointer transition-colors duration-300 font-semibold text-blue-600">Themes</Link>
          <Link to="/developers" className="flex text-white text-xl hover:text-blue-900 cursor-pointer transition-colors duration-300">Developers</Link>
          <Link to="/MainBlog" className="flex text-white text-xl hover:text-blue-900 cursor-pointer transition-colors duration-300">Pricing</Link>
          <Link to="/blog" className="flex text-white text-xl hover:text-blue-900 cursor-pointer transition-colors duration-300">Blog</Link>
          <Link to="/about-us" className="flex text-white text-xl hover:text-blue-900 cursor-pointer transition-colors duration-300">About Us</Link>
        </div>

        {/* Icon Menu Section */}
        <div className="flex items-center space-x-5">
          <Link to="/register" className="flex items-center text-white bg-pink-500 hover:bg-pink-600 py-2 px-4 rounded cursor-pointer transition-colors duration-300 text-xl">
            <svg className="fill-current h-5 w-5 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M12 0L11.34 .03L15.15 3.84L16.5 2.5C19.75 4.07 22.09 7.24 22.45 11H23.95C23.44 4.84 18.29 0 12 0M12 4C10.07 4 8.5 5.57 8.5 7.5C8.5 9.43 10.07 11 12 11C13.93 11 15.5 9.43 15.5 7.5C15.5 5.57 13.93 4 12 4M12 6C12.83 6 13.5 6.67 13.5 7.5C13.5 8.33 12.83 9 12 9C11.17 9 10.5 8.33 10.5 7.5C10.5 6.67 11.17 6 12 6M.05 13C.56 19.16 5.71 24 12 24L12.66 23.97L8.85 20.16L7.5 21.5C4.25 19.94 1.91 16.76 1.55 13H.05M12 13C8.13 13 5 14.57 5 16.5V18H19V16.5C19 14.57 15.87 13 12 13M12 15C14.11 15 15.61 15.53 16.39 16H7.61C8.39 15.53 9.89 15 12 15Z" />
            </svg>
            Register
          </Link>

          <Link to="/login" className="flex items-center text-white bg-pink-500 hover:bg-pink-600 py-2 px-4 rounded cursor-pointer transition-colors duration-300 font-semibold text-xl">
            <svg className="fill-current h-5 w-5 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M10,17V14H3V10H10V7L15,12L10,17M10,2H19A2,2 0 0,1 21,4V20A2,2 0 0,1 19,22H10A2,2 0 0,1 8,20V18H10V20H19V4H10V6H8V4A2,2 0 0,1 10,2Z" />
            </svg>
            Login
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <XMarkIcon className="h-6 w-6 text-gray-600" /> : <Bars3Icon className="h-6 w-6 text-gray-600" />}
        </button>
      </nav>
    </div>
  );
}

export default Header;
