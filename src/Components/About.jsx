import React from 'react';
import teamImage from '../assets/team-image.png';

const AboutSection = () => {
  return (
    <div id='about' className="bg-gradient-to-r from-[#2A1535] via-[#2A1535] to-[#261865] py-16 px-8 overflow-y-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Wanmina</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Wanmina is a marketing firm that specializes in web3 and tech marketing. We are a team of highly skilled and experienced marketing and tech professionals who have made this industry our home because we believe it is the future. We are passionate about providing value and enabling growth, so you can trust us to make an impact.
          </p>
          <p className="text-gray-300 leading-relaxed mb-8">
            Wanmina is also a community of defi experts who share value, support each other, and contribute to the Web3 ecosystem. We grow our community through our academy, where we teach people about DeFi, and our DeFi working groups where we collaborate with a number of other DeFi communities to help people develop their skills in DeFi.
          </p>
          <p className="text-gray-300 leading-relaxed mb-8">
            We give them learning tools and new job opportunities to build experience and income for them.
          </p>
          <button className="text-white py-3 px-6 rounded-md font-semibold border border-[#DD4C78]">
            Contact Us
          </button>
        </div>
        <div className="md:w-1/2 ml-12">
          <img src={teamImage} alt="Team" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
