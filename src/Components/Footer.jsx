import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faLinkedin, faTelegram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <nav className="bg-gradient-to-r from-[#261865] via-[#2A1535] to-[#2A1535] text-white flex justify-end px-8 py-4">
      <div className="flex space-x-56">
        {/* New div for the "Wanmina" text */}
        <div className="flex items-center">
          <h1 className="text-4xl font-bold">Wanmina</h1>
        </div>

        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold mb-2">Get Started</h2>
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
            <li>Publications</li>
            <li>About Us</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2">Social Media</h2>
          <div className="flex flex-col md:flex-col md:space-y-0 md:space-x-0">
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faTwitter} className="text-xl" />
              <span>Twitter</span>
            </div>
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faTelegram} className="text-xl" />
              <span>Telegram</span>
            </div>
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faDiscord} className="text-xl" />
              <span>Discord</span>
            </div>
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
              <span>LinkedIn</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
