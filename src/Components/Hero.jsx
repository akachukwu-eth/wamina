import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
    return (
        <div className="bg-gradient-to-r from-[#2A1535] via-[#2A1535] to-[#261865] min-h-screen flex flex-col items-center justify-center text-white bg-opacity-50 overflow-y-hidden">
            <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 text-[#F6F6F5]">Web3 Unleashed,</h1>
                <h2 className="text-2xl md:text-4xl font-semibold mb-6 md:mb-8 text-[#F6F6F5]">Transforming Visions to <span className="md:block">Reality</span></h2>
                <p className="text-base md:text-lg max-w-lg md:max-w-3xl mb-6 md:mb-10 text-[#F6F6F5]">We offer top-class solutions in Web3 Marketing and Design, giving you the leading edge in your field.</p>
                <button className="bg-pink-500 hover:bg-pink-600 text-[#F6F6F5] py-3 px-6 rounded-md">
                    <FontAwesomeIcon icon={faDiscord} className="mr-2" />
                    <span>Join Community</span>
                </button>
            </div>
            <div className="flex justify-center mt-8">

            </div>
        </div>
    );
};

export default Hero;
