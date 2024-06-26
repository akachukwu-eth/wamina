import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faLinkedin, faTelegram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    // <nav className="bg-gradient-to-r from-[#261865] via-[#2A1535] to-[#2A1535] text-white flex justify-end px-8 py-4">
    //   <div className="flex space-x-56">
    //     {/* New div for the "Wanmina" text */}
    //     <div className="flex items-center">
    //       <h1 className="text-4xl font-bold">Wanmina</h1>
    //     </div>

    //     <div className="mb-4 md:mb-0">
    //       <h2 className="text-2xl font-bold mb-2">Get Started</h2>
    //       <ul className="flex flex-col md:flex-col space-y-2 md:space-y-0 md:space-x-0">
    //         <li>Contact us</li>
    //         <li>Guides</li>
    //         <li>Email us</li>
    //         <li>Make inquiries</li>
    //         <li>Events</li>
    //       </ul>
    //     </div>
    //     <div className="mb-4 md:mb-0">
    //       <h2 className="text-2xl font-bold mb-2">Company</h2>
    //       <ul className="flex flex-col md:flex-col space-y-1 md:space-y-0 md:space-x-0">
    //         <li>Affiliate Communities</li>
    //         <li>Roadmap</li>
    //         <li>Publications</li>
    //         <li>About Us</li>
    //         <li>FAQ</li>
    //       </ul>
    //     </div>
    //     <div>
    //       <h2 className="text-2xl font-bold mb-2">Social Media</h2>
    //       <div className="flex flex-col md:flex-col md:space-y-0 md:space-x-0">
    //         <div className="flex items-center space-x-2">
    //           <FontAwesomeIcon icon={faTwitter} className="text-xl" />
    //           <span>Twitter</span>
    //         </div>
    //         <div className="flex items-center space-x-2">
    //           <FontAwesomeIcon icon={faTelegram} className="text-xl" />
    //           <span>Telegram</span>
    //         </div>
    //         <div className="flex items-center space-x-2">
    //           <FontAwesomeIcon icon={faDiscord} className="text-xl" />
    //           <span>Discord</span>
    //         </div>
    //         <div className="flex items-center space-x-2">
    //           <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
    //           <span>LinkedIn</span>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </nav>

    <footer className="bg-gradient-to-r from-[#261865] via-[#2A1535] to-[#2A1535] text-white">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Wanmina
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Get Started
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="/" className="hover:underline">
                    Contact us
                  </a>
                </li>
                <li className="mb-4"><a href="/" className="hover:underline"></a>Guides</li>
                <li className="mb-4"><a href="/" className="hover:underline">Email us</a></li>
                <li className="mb-4"><a href="/" className="hover:underline">Make inquiries</a></li>
                <li className="mb-4"><a href="/" className="hover:underline">Events</a></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Social Media
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="/"
                    className="hover:underline "
                  >
                    Twitter
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="/"
                    className="hover:underline"
                  >
                    Telegram
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="/"
                    className="hover:underline "
                  >
                    Discord
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="/"
                    className="hover:underline "
                  >
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Company
              </h2>
              {/* //  <li>Affiliate Communities</li>
    //         <li>Roadmap</li>
    //         <li>Publications</li>
    //         <li>About Us</li>
    //         <li>FAQ</li> */}
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="/" className="hover:underline">
                    Affiliate Communities
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/" className="hover:underline">
                    Roadmap
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/" className="hover:underline">
                    Publications
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="/" className="hover:underline">
              Wanmina
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">

            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 17"
              >
                <path
                  fillRule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Twitter page</span>
            </a>

            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 17"
              >
                <path
                  fillRule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Twitter page</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 17"
              >
                <path
                  fillRule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Twitter page</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000 li/svg"
                fill="currentColor"
                viewBox="0 0 20 17"
              >
                <path
                  fillRule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Twitter page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
