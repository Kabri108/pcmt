import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import TextScaleAnimation from '../ReusableComponent/TextAnimation';
import AfflieatedSection from '../ReusableComponent/Afflieated';
import EventsPage from '../../Screens/Events';
import Galary from '../Galary';




// Animation configurations
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const HomeSection = () => {
    
  return (
    <div>
      {/* Hero Section */}
      <motion.section className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <TextScaleAnimation text="Admission 2024" className='text-4xl font-bold mb-4 text-red-500' highlightWord="2024"/>
       
        <p className="text-lg text-gray-600 mb-8">
        Choose the right path towards Success, unravel Opportunities, secure your Future. Be an essential part of the wide repertoire of learning and research. Expand your vision, explore dimensions and bring about a change in society. We have both online and Physical admisison system to accomodate you for your desired course.
        </p>
        
        <div className="flex justify-center items-center space-x-4">
          <button className="bg-red-500 text-white py-3 px-6 rounded-lg font-medium hover:border-2 hover:border-red-500 hover:text-red-600 hover:bg-transparent  transition duration-300">
            Apply for Undergraduate
          </button>
          <button className="bg-gray-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-transparent hover:border-2 hover:border-gray-500 hover:text-gray-600 transition duration-300">
            Apply for Postgraduate
          </button>
        </div>

        <div className="mt-8">
          <p className="text-gray-500">Need help with the application process?</p>
          <a
            href="/contact"
            className="text-blue-700 font-medium hover:underline"
          >
            Contact Admissions Office
          </a>
        </div>
      </div>
    </motion.section>
    {/* AfflieatedSection */}
     <AfflieatedSection/>
      {/* Galary section  */}
      <Galary/>

    </div>
  );
};

export default HomeSection;
