import React from 'react';
import teamImage from '../assets/team.jpeg';


const TeamSection = () => {
  const teamMembers = [
    {
      image: teamImage,
      role: 'COO/ Growth Strategist',
      name: 'Usteeze Chris',
    },
    {
      image: teamImage,
      role: 'COO/ Growth Strategist',
      name: 'Usteeze Chris',
    },
    {
      image: teamImage,
      role: 'COO/ Growth Strategist',
      name: 'Usteeze Chris',
    },
    {
      image: teamImage,
      role: 'COO/ Growth Strategist',
      name: 'Usteeze Chris',
    },
    {
      image: teamImage,
      role: 'COO/ Growth Strategist',
      name: 'Usteeze Chris',
    },
    {
      image: teamImage,
      role: 'COO/ Growth Strategist',
      name: 'Usteeze Chris',
    },
  ];

  return (
    <div className="bg-gradient-to-r from-[#2A1535] via-[#2A1535] to-[#261865] py-16">
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