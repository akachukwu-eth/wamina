import React from 'react';
import whyChooseImage from '../assets/team-image.png';

const WhyChoose = () => {
  return (
    <div className="bg-gradient-to-r from-[#261865] via-[#2A1535] to-[#2A1535] py-16 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img src={whyChooseImage} alt="Why Choose Wanmina" className="rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Wanmina</h2>
          <p className="text-gray-300 leading-relaxed">
            Wanmina provides exceptional services with unmatched quality. However, our most unique quality is our dedication to customer satisfaction. We will go above and beyond to ensure that our partners achieve their desired results and provide their platforms with everything it needs to grow. We are committed to providing the best possible service and support to our partners, and we are confident that we can help them achieve their goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;