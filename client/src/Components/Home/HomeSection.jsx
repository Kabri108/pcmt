import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';




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
      <motion.section
        className="hero bg-cover bg-center h-screen flex items-center justify-center text-white"
        style={{ backgroundImage: 'url(/path-to-your-hero-image.jpg)' }}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 1 }}
      >
        <div className="text-center p-4">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            variants={fadeIn}
            transition={{ duration: 1 }}
          >
            Welcome to [Your College Name]
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8"
            variants={fadeIn}
            transition={{ duration: 1 }}
          >
            Empowering the next generation of leaders and innovators.
          </motion.p>
          <Link to="/admissions">
            <motion.button
              className="bg-primary text-white py-2 px-4 rounded-lg"
              variants={fadeIn}
              transition={{ duration: 1 }}
            >
              Apply Now
            </motion.button>
          </Link>
        </div>
      </motion.section>

      {/* About the College */}
      <motion.section
        className="about py-16 px-4 md:px-8"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-3xl font-bold mb-6"
            variants={fadeIn}
            transition={{ duration: 1 }}
          >
            About Us
          </motion.h2>
          <motion.p
            className="text-lg"
            variants={fadeIn}
            transition={{ duration: 1 }}
          >
            [Brief introduction about the college, its mission, and values.]
          </motion.p>
        </div>
      </motion.section>

      {/* Admissions Information */}
      <motion.section
        className="admissions bg-gray-100 py-16 px-4 md:px-8"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-3xl font-bold mb-6"
            variants={fadeIn}
            transition={{ duration: 1 }}
          >
            Admissions
          </motion.h2>
          <motion.p
            className="text-lg mb-4"
            variants={fadeIn}
            transition={{ duration: 1 }}
          >
            [Information on the application process, deadlines, and requirements.]
          </motion.p>
          <Link to="/admissions">
            <motion.button
              className="bg-primary text-white py-2 px-4 rounded-lg"
              variants={fadeIn}
              transition={{ duration: 1 }}
            >
              Learn More
            </motion.button>
          </Link>
        </div>
      </motion.section>

      {/* Academic Programs */}
      <motion.section
        className="academic-programs py-16 px-4 md:px-8"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-3xl font-bold mb-6"
            variants={fadeIn}
            transition={{ duration: 1 }}
          >
            Academic Programs
          </motion.h2>
          <motion.p
            className="text-lg"
            variants={fadeIn}
            transition={{ duration: 1 }}
          >
            [Overview of major academic programs and departments.]
          </motion.p>
          <Link to="/academics">
            <motion.button
              className="bg-primary text-white py-2 px-4 rounded-lg"
              variants={fadeIn}
              transition={{ duration: 1 }}
            >
              Explore Programs
            </motion.button>
          </Link>
        </div>
      </motion.section>

      {/* Campus Life */}
      <motion.section
        className="campus-life bg-gray-100 py-16 px-4 md:px-8"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-3xl font-bold mb-6"
            variants={fadeIn}
            transition={{ duration: 1 }}
          >
            Campus Life
          </motion.h2>
          <motion.p
            className="text-lg"
            variants={fadeIn}
            transition={{ duration: 1 }}
          >
            [Information about student life, clubs, and activities.]
          </motion.p>
          <Link to="/campus-life">
            <motion.button
              className="bg-primary text-white py-2 px-4 rounded-lg"
              variants={fadeIn}
              transition={{ duration: 1 }}
            >
              Discover More
            </motion.button>
          </Link>
        </div>
      </motion.section>

      {/* News and Events */}
      <motion.section
        className="news-events py-16 px-4 md:px-8"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-3xl font-bold mb-6"
            variants={fadeIn}
            transition={{ duration: 1 }}
          >
            News & Events
          </motion.h2>
          <motion.p
            className="text-lg"
            variants={fadeIn}
            transition={{ duration: 1 }}
          >
            [Latest updates, news, and upcoming events.]
          </motion.p>
          <Link to="/news-events">
            <motion.button
              className="bg-primary text-white py-2 px-4 rounded-lg"
              variants={fadeIn}
              transition={{ duration: 1 }}
            >
              Read More
            </motion.button>
          </Link>
        </div>
      </motion.section>

      {/* Contact Information */}
      <motion.section
        className="contact bg-gray-100 py-16 px-4 md:px-8"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-3xl font-bold mb-6"
            variants={fadeIn}
            transition={{ duration: 1 }}
          >
            Contact Us
          </motion.h2>
          <motion.p
            className="text-lg mb-4"
            variants={fadeIn}
            transition={{ duration: 1 }}
          >
            [Contact details and a link to the contact page.]
          </motion.p>
          <Link to="/contact">
            <motion.button
              className="bg-primary text-white py-2 px-4 rounded-lg"
              variants={fadeIn}
              transition={{ duration: 1 }}
            >
              Get in Touch
            </motion.button>
          </Link>
        </div>
      </motion.section>

    </div>
  );
};

export default HomeSection;
