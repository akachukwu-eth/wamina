import React from 'react';
import teamImage from '../assets/team-image.png';

const Services = () => {
  const services = [
    {
      name: 'Community Management',
      items: ['Social media managers', 'Shillers', 'Advisers', 'Moderators'],
      imageUrl: teamImage, // Corrected image path
    },
    {
      name: 'Marketing',
      items: ['Influencer marketing', 'Social media marketing', 'Content marketing', 'Collaborators'],
      imageUrl: teamImage, // Corrected image path
    },
    {
      name: 'Web Development',
      items: ['UI/UX designers', 'Full-stack developers', 'Cyber security experts', 'AI programmers'],
      imageUrl: teamImage, // Corrected image path
    },
    {
      name: 'Graphic Design',
      items: ['Banners and flyers', 'NFT creators', '3D modeling experts'],
      imageUrl: teamImage, // Corrected image path
    },
  ];

  return (
    <div className="bg-gradient-to-r from-[#2A1535] via-[rgb(42,21,53)] to-[#261865] text-white p-8">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Our Services Includes</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {services.map((service, index) => (
          <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg border-2 border-[#B0186A]">
            <img src={service.imageUrl} alt={service.name} className="w-full" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{service.name}</div>
              <ul className="list-disc pl-4">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-300 mb-2">
                  {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
