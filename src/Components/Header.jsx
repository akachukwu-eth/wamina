import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-[#2A1535] via-[#2A1535] to-[#65185B] py-2 md:py-4 sticky top-0 z-50 overflow-y-hidden">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="mt-4 ml-4 text-white font-bold text-2xl">
          <Link to="/">Wanmina</Link>
        </div>
        <button
          className="mr-4 lg:hidden text-white focus:outline-none transition-colors duration-300"
          onClick={toggleMenu}
        >
          <svg
            className={`h-6 w-6 fill-current ${isMenuOpen ? 'text-pink-500' : ''}`}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            )}
          </svg>
        </button>
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:flex md:items-center w-full md:w-auto overflow-hidden md:overflow-visible transition-max-height duration-500 ease-in-out`}
        >
          <div className="md:flex flex-col md:flex-row md:items-center md:justify-start w-full md:w-auto">
            <div className="mx-10 my-2 md:my-2 text-white font-medium">
              <Link to="/">Home</Link>
            </div>
            <div className="mx-10 my-2 md:my-2 text-white font-medium">
              <a href="#about">About Us</a>
            </div>
            <div className="mx-10 my-2 md:my-2 text-white font-medium">
              <Link to="/services">Services</Link>
            </div>
            <div className="mx-10 my-2 md:my-2 text-white font-medium">
              <a href="#team">Team</a>
            </div>
            <div className="mx-10 my-2 md:my-2 text-white font-medium">
              <a href="#faq">FAQ</a>
            </div>
            <div className="mx-10 my-2 md:my-2">
              <button className="bg-gradient-to-r from-[#261865] to-[#65185B] hover:from-pink-600 hover:to-pink-700 text-white py-2 px-4 rounded transition-colors duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
