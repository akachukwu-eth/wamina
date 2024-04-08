import React from 'react';

const Footer = () => {
 return (
   <nav className="bg-gradient-to-r from-[#261865] via-[#2A1535] to-[#2A1535] text-white flex flex-col md:flex-row justify-between px-4 py-2">
     <div className="mb-4 md:mb-0">
       <h2 className="text-2xl font-bold mb-2">Wanmina</h2>
       <ul className="flex flex-col md:flex-col space-y-2 md:space-y-0 md:space-x-0">
         <li>Contact us</li>
         <li>Guides</li>
         <li>Email us</li>
         <li>Make inquiries</li>
         <li>Events</li>
       </ul>
     </div>
     <div className="mb-4 md:mb-0">
       <h2 className="text-2xl font-bold mb-2">Company</h2>
       <ul className="flex flex-col md:flex-col space-y-1 md:space-y-0 md:space-x-0">
         <li>Affiliate Communities</li>
         <li>Roadmap</li>
         <li>About Us</li>
         <li>FAQ</li>
       </ul>
     </div>
     <div>
       <h2 className="text-2xl font-bold mb-2">Social Media</h2>
       <div className="flex flex-col md:flex-col md:space-y-0 md:space-x-0">
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
