import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

// Variants for the dropdown container and items
const dropdownVariants = {
  initial: {
    opacity: 0,
    scale: 0.9,
    y: -10
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      duration: 0.3
    }
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: -10
  }
};

const itemVariants = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 }
};

const SubNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav className="bg-gray-100 shadow-lg sticky top-0 z-20 ">
      <div className="container sm:px-6 lg:px-8 flex justify-between items-center uppercase mx-auto h-14">
        {/* Menu for larger screens */}
        <div className="hidden md:flex gap-6 text-sm font-semibold">
          <Link to="/" className="hover:text-subMain">Home</Link>
          <Link to="/about-us" className="hover:text-subMain">About Us</Link>
          
          {/* Dropdown for Departments */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center hover:text-subMain uppercase"
            >
              Departments <FaChevronDown className="ml-1" />
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg z-20"
                  variants={dropdownVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <motion.div variants={itemVariants}>
                    <Link
                      to="/departments/science"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Science
                    </Link>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Link
                      to="/departments/arts"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Arts
                    </Link>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Link
                      to="/departments/engineering"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Engineering
                    </Link>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/placement" className="hover:text-subMain">Placements</Link>
          <Link to="/events" className="hover:text-subMain">Events</Link>
          <Link to="/campus-life" className="hover:text-subMain">Campus Life</Link>
          <Link to="/contact" className="hover:text-subMain">Contact Us</Link>
        </div>

        {/* Search Bar and Login Button */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="bg-subMain flex-btn hover:text-subMain hover:bg-white text-white font-bold py-2 px-4 hover:border rounded-full transitions">
            Apply Now
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden mt-2 space-y-2 px-4 pb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Link to="/" className="block hover:text-blue-600">Home</Link>
            <Link to="/about-us" className="block hover:text-blue-600">About Us</Link>
            <Link to="/admissions" className="block hover:text-blue-600">Admissions</Link>
            <button
              onClick={toggleDropdown}
              className="flex items-center hover:text-blue-600"
            >
              Departments <FaChevronDown className="ml-1" />
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  className="ml-4"
                  variants={dropdownVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <motion.div variants={itemVariants}>
                    <Link to="/departments/science" className="block hover:text-blue-600">
                      Science
                    </Link>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Link to="/departments/arts" className="block hover:text-blue-600">
                      Arts
                    </Link>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Link to="/departments/engineering" className="block hover:text-blue-600">
                      Engineering
                    </Link>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
            <Link to="/events" className="block hover:text-blue-600">Events</Link>
            <Link to="/campus-life" className="block hover:text-blue-600">Campus Life</Link>
            <Link to="/contact" className="block hover:text-blue-600">Contact</Link>
            <div className="flex space-x-4">
              <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 hover:border-blue-500 rounded-full">
                Apply Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default SubNavbar;
