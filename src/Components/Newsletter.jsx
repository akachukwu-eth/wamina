import React from 'react';

const Newsletter = () => {
  return (
    <div className="bg-gradient-to-r from-[#261865] via-[#2A1535] to-[#2A1535] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Connect with Us</h2>
          <p className="text-gray-300 mb-8">Subscribe to regularly newsletter and stay updated on more<br />announcements about Warmina</p>
          <div className="flex">
            <input
              type="email"
              placeholder="hello@example.com"
              className="px-4 py-2 rounded-l-md text-white placeholder-gray-400 outline-2 focus:ring-0 focus:ring-[#DD4C78]"
            />
            <button className="text-white px-4 py-2 rounded-r-md border border-[#DD4C78]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;