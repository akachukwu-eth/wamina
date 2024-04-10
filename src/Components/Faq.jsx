import React, { useState } from 'react';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      question: "How does Wannmina help maximize my profit?",
      answer: "It's common for developers to be cheated in the web3 market by hiring overpriced staff that often mediocre services. If you work with Warmina, we offer you tested and trusted services, bringing you positive service providers at the best price in the market.",
    },
    {
      question: "How safe are Wannmina's services?",
      answer: "We prioritize security and safety for all our clients. Our team follows strict protocols and best practices to ensure the highest level of security for our services.",
    },
    {
      question: "What areas or feature of a Web 3.0 platform can Warmina help with?",
      answer: "Warmina offers a wide range of services for Web 3.0 platforms, including smart contract development, decentralized application (DApp) development, NFT creation and marketplaces, and more.",
    },
    {
      question: "Are there options for customizing Wannmina's services?",
      answer: "Yes, we understand that every project has unique requirements. Our services are highly customizable, and we work closely with our clients to tailor our offerings to their specific needs.",
    },
  ];
  

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id='faq' className="bg-gradient-to-r from-[#2A1535] via-[#2A1535] to-[#261865] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white mb-8 text-center">FAQ</h2>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-[#261865] via-[#2A1535] to-[#2A1535] rounded-lg p-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-white font-bold">{item.question}</h3>
                <span className="text-gray-300">{openIndex === index ? '-' : '+'}</span>
              </div>
              {openIndex === index && (
                <div className="mt-4">
                  <p className="text-gray-300">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;