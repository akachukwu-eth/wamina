import Header from "./Header";
import banDes from '../assets/ban-des.png';
import commGrowth from '../assets/comm-growth.png';
import commStaff from '../assets/comm-staff.png';
import contentMkt from '../assets/content-mkt.png';
import contentWriting from '../assets/content-writing.png';
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

const ServicesPage = () => {
  return (
    <>
      <Header />
      <div class="bg-gradient-to-r from-[#261865] via-[#2A1535] to-[#2A1535] text-white py-24 px-4">
        <div class="container mx-auto">
          <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-16">
            <div class="mb-8 lg:mb-0">
              <h2 class="text-white text-3xl font-bold mb-4">Community Management</h2>
              <p class="text-gray-300 text-lg max-w-lg">
                'A healthy project needs a healthy community.' It is important for your audience to feel connected to your brand. Wanmina can help you build and manage a healthy community free of toxicity and brimming with activity. Building you a community for life.
              </p>
            </div>
            <div className="overflow-hidden">
              <img src={commGrowth} alt="Community Growth" class="max-w-sm my-auto rounded-md" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#2A1535] via-[#2A1535] to-[#261865] text-white py-24 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-16">
            <div className="overflow-hidden">
              <img src={commGrowth} alt="Social Media Management" className="max-w-sm mx-auto rounded-md" />
            </div>
            <div className="mb-8 lg:mb-0">
              <h2 className="text-white text-3xl font-bold mb-4">Social Media Management</h2>
              <p className="text-gray-300 text-lg max-w-lg">
                We can manage your social media communities to ensure the consistent release of content, replying to comments, and handling all necessary public relations duties. we also curb misinformation, educate your users, and help you control the narrative of your project.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#261865] via-[#2A1535] to-[#2A1535] text-white py-24 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-16">
            <div className="mb-8 lg:mb-0">
              <h2 className="text-white text-3xl font-bold mb-4">Automated Community Moderation & Security</h2>
              <p className="text-gray-300 text-lg max-w-lg">
                We use bots to guard your community. They work tirelessly to keep your community safe and welcoming, flagging and quarantining bad behavior as soon as it appears. They also secure your community platforms from malicious attacks, so you can focus on building a thriving community.
              </p>
            </div>
            <div className="overflow-hidden">
              <img src={commGrowth} alt="Automated Community Moderation & Security" className="max-w-sm mx-auto rounded-md" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#2A1535] via-[#2A1535] to-[#261865] text-white py-24 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-16">
            <div className="overflow-hidden">
              <img src={commGrowth} alt="Automated Community Moderation & Security" className="max-w-sm mx-auto rounded-md" />
            </div>
            <div className="mb-8 lg:mb-0">
              <h2 className="text-white text-3xl font-bold mb-4">Community Growth</h2>
              <p className="text-gray-300 text-lg max-w-lg">
                Let us help you build a thriving community of engaged and dedicated members. With our experience and connections in the space, we can target contributors and community loyalists to build you a platform with long-term active members. We will work with you to create a community that is aligned with your goals and values.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;