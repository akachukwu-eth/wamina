import React from 'react';

const Footer = () => {
 return (
   <nav className="bg-gradient-to-r from-[#261865] via-[#2A1535] to-[#2A1535] text-white flex justify-between px-4 py-2">
     <div>
       <h2 className="text-lg font-bold mb-2">Get Started</h2>
       <ul className="flex flex-col space-y-1">
         <li>Contact us</li>
         <li>Guides</li>
         <li>Email us</li>
         <li>Make inquiries</li>
         <li>Events</li>
       </ul>
     </div>
     <div>
       <h2 className="text-lg font-bold mb-2">Company</h2>
       <ul className="flex flex-col space-y-1">
         <li>Affiliate Communities</li>
         <li>Roadmap</li>
         <li>About Us</li>
         <li>FAQ</li>
       </ul>
     </div>
     <div>
       <h2 className="text-lg font-bold mb-2">Social Media</h2>
       <div className="flex items-center space-x-2">
         <span>Twitter</span>
         <span>Telegram</span>
         <span>Discord</span>
         <span>LinkedIn</span>
       </div>
     </div>
   </nav>
 );
};

export default Footer;