import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-gray-800">DD</Link>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
            </svg>
          </button>
        </div>
        <div className={`w-full md:flex md:w-auto ${isOpen ? 'block' : 'hidden'}`}>
          <div className="md:flex md:space-x-4">
            <Link to="/" className={`block text-gray-600 hover:text-gray-800 ${currentPath === '/' ? 'font-bold' : ''}`}>
              Home
            </Link>
            <Link to="/features" className={`block text-gray-600 hover:text-gray-800 ${currentPath === '/features' ? 'font-bold' : ''}`}>
              Features
            </Link>
            <Link to="/pricing" className={`block text-gray-600 hover:text-gray-800 ${currentPath === '/pricing' ? 'font-bold' : ''}`}>
              Pricing
            </Link>
            {currentPath === '/' && (
              <Link to="/login" className="block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-2 md:mt-0">
                Sign In
              </Link>
            )}
            {currentPath === '/register' && (
              <Link to="/login" className="block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-2 md:mt-0">
                Login
              </Link>
            )}
            {currentPath !== '/' && currentPath !== '/register' && (
              <Link to="/register" className="block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-2 md:mt-0">
                Sign Up
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
