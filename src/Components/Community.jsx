import React from 'react';
import commImage from '../assets/payment.jpeg';


const Community = () => {
  return (
    <div className="bg-gradient-to-r from-[#261865] via-[#2A1535] to-[#2A1535] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Community</h2>
          <p className="mt-3 max-w-3xl text-lg text-gray-300">
            An audience of over 10,000 brilliant minds in Decentralized Finance and Tech.
            Powered by an academy, a DAO, and a De-Fi & Tech Hub
          </p>
          <p className="mt-4 text-gray-300">
            Wanmina is a community that focuses on creating and sharing opportunities for allied people in the Web3 space. The community was built on the need to grow and connect creators, developers, and digital skill-keepers in the Web3 space. Wanmina provides a platform for these incredible talents to connect with each other, share ideas, and collaborate. The community offers immense networking opportunities and educational resources for anyone looking to sharpen their skills.
          </p> 
          <div className="mt-8">
            <button className="text-white py-3 px-6 rounded-md font-semibold border border-[#DD4C78]">
              Join Us Now
            </button>
          </div>
        </div>
        <div className="mt-8 lg:mt-0 lg:w-1/2">
          <div className="relative mb-8 ml-12">
            <img
              src={commImage}
              alt="Agnoepath"
              className="mx-auto max-w-full rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-yellow-400 to-red-600 opacity-75 mix-blend-multiply"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;