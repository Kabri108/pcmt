import {
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MainNavbar = () => {
  return (
    <div className="bg-white justify-between top-0 z-20 shadow-md ">
      <div className="container mx-auto flex flex-wrap justify-between items-center h-24 px-4 lg:px-8">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img src="logom.png" alt="logo" className=" h-20" />
          </Link>
        </div>

        

        {/* Social Icons and Location Info (Hidden on smaller screens, visible on md and larger) */}
        <div className="hidden md:flex flex-wrap items-center gap-4 lg:gap-8">
          {/* Social Icons */}
          <div className="flex space-x-4 text-xl font-semibold">
            <a
              href="https://www.facebook.com/pcmtkolkata"
              target="_blank"
              rel="noopener noreferrer"
              className="text-subMain transition-colors rounded-full hover:bg-subMain hover:text-white p-2 bg-gray-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-subMain transition-colors rounded-full hover:bg-subMain hover:text-white p-2 bg-gray-300"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-subMain transition-colors rounded-full hover:bg-subMain hover:text-white p-2 bg-gray-300"
            >
              <FaInstagram/>
            </a>
          </div>
          {/* WhatsApp Contact */}
        <div className="flex items-center space-x-2 text-sm font-semibold">
          <FaWhatsapp className="text-subMain text-xl" />
          <a
            href="https://wa.me/12345678901"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col"
          >
            <span>WhatsApp</span>
            <span className="text-xs text-gray-500">888888888</span>
          </a>
        </div>
          {/* Location Info */}
          <div className="flex items-start space-x-2 text-sm font-semibold">
            <FaMapMarkerAlt className="text-subMain text-xl" />
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-start"
            >
              <span>Our Location</span>
              <span className="text-xs text-gray-500">
                Pailan, South 24 Parganas, West Bengal, 700104, India
              </span>
            </a>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
