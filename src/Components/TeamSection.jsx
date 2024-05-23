import React from 'react';
import cooImage from '../assets/onyekaojei.png';
import writerImage from '../assets/mr-unchained.png'
import moderatorImage from '../assets/ohgee.png'
import socialImage from '../assets/kidflamez.png'
import graphicImage from '../assets/muzaka.png'
import devImage from '../assets/prosper.png'
import usteeze from '../assets/usteeze.jpeg'



const TeamSection = () => {
  const teamMembers = [
    {
      image: cooImage,
      role: 'COO of Wamina',
      name: 'Onyeka Ojei',
    },
    {
      image: usteeze,
      role: 'COO/ Growth Strategist',
      name: 'Usteeze Chris',
    },
    {
      image: writerImage,
      role: 'Writer | Moderator',
      name: 'Mr Unchained',
    },
    {
      image: moderatorImage,
      role: 'Moderator | Social Media Manager',
      name: 'Ohgee',
    },
    {
      image: socialImage,
      role: 'Writer | Social Media Manager | Moderator',
      name: 'K1DFLAM3Z',
    },
    {
      image: graphicImage,
      role: 'Moderator | Writer | Graphic Designer',
      name: 'Muzaka',
    },
    {
      image: devImage ,
      role: 'Developer | Moderator | Writer',
      name: 'Prosper',
    },
  ];

  return (
    <div id='team' className="bg-gradient-to-r from-[#2A1535] via-[#2A1535] to-[#261865] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white mb-8 text-center">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gradient-to-r from-[#2A1535] via-[#2A1535] to-[#261865] rounded-lg p-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="mt-4">
                <h3 className="text-white font-bold">{member.role}</h3>
                <p className="text-gray-300">{member.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;