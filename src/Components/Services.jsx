import React from 'react';
import teamImage from '../assets/team-image.png';
import banDes from '../assets/ban-des.png';
import commGrowth from '../assets/comm-growth.png';
import commStaff from '../assets/comm-staff.png';
import contentMkt from '../assets/content-mkt.png';
import contentWriting from '../assets/content-writing.png';
import emailMkt from '../assets/email-mkt.png';
import influencerMkt from '../assets/influencer-mkt.png';
import logoDes from '../assets/logo-des.png';
import modeSec from '../assets/mode-sec.png';
import nftArt from '../assets/nft-art.png';
import prodDes from '../assets/prod-des.png';
import socialMgt from '../assets/social-mgt.png';
import tokenList from '../assets/token-list.png';
import uiDes from '../assets/ui-des.png';
import webDev from '../assets/web-dev.png';
import webSec from '../assets/web-sec.png';


const Services = () => {
  const services = [
    {
      name: 'Community Management',
      items: ['Social media managers', 'Shillers', 'Advisers', 'Moderators'],
      imageUrl: socialMgt, // Corrected image path
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
    <div id='services' className="bg-gradient-to-r from-[#2A1535] via-[rgb(42,21,53)] to-[#261865] text-white p-8">
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
