import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-gray-800">BrandName</Link>
        <div className="space-x-4">
          <Link to="/" className={`text-gray-600 hover:text-gray-800 ${currentPath === '/' ? 'font-bold' : ''}`}>
            Home
          </Link>
          <Link to="/features" className={`text-gray-600 hover:text-gray-800 ${currentPath === '/features' ? 'font-bold' : ''}`}>
            Features
          </Link>
          <Link to="/pricing" className={`text-gray-600 hover:text-gray-800 ${currentPath === '/pricing' ? 'font-bold' : ''}`}>
            Pricing
          </Link>
          <Link to="/contact" className={`text-gray-600 hover:text-gray-800 ${currentPath === '/contact' ? 'font-bold' : ''}`}>
            Contact
          </Link>
          
          {currentPath === '/' && (
            <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Sign In</Link>
          )}
          {currentPath === '/register' && (
            <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Login</Link>
          )}
          {currentPath !== '/' && currentPath !== '/register' && (
            <Link to="/register" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Sign Up</Link>
          )}
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
