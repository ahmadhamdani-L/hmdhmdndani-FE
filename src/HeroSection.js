import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-blue-500 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">Welcome to Our Landing Page</h1>
        <p className="text-xl mb-8">Build something amazing with us.</p>
        <a href="#" className="bg-white text-blue-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-200">Get Started</a>
      </div>
    </section>
  );
};

export default HeroSection;
