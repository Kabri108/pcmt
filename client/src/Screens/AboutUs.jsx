import { motion } from 'framer-motion';
import React from 'react';

const AboutUs = () => {
  // Framer Motion animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="bg-gray-100 p-6">
      {/* Header Section */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold text-subMain">About Us</h1>
        <p className="mt-4 text-lg text-gray-600">
          Learn more about our institution, values, and the journey that defines us.
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* History Section */}
        <motion.div
          className="bg-white p-6 shadow-lg rounded-lg"
          variants={fadeInLeft}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl font-bold text-subMain mb-4">Our History</h2>
          <p className="text-gray-700 text-justify">
          The Pailan Group of Institutions has an interesting history and background. It all started in the late 1980s when a visionary entered Pailan, a village in the southern outskirts of Kolkata, with the aim of transforming it. This led to the establishment of the Pailan Education Trust in 20011.

The trust was founded by notable personalities including Mr. Apurba Kr. Saha, Mr. Asoke Kumar Mukherjee, Mr. Biren Kr. Saha, and Capt. Birendra Kumar1. Over the years, the trust has grown and diversified its educational offerings.

In 2001, the Pailan College of Management & Technology (PCMT) was established, offering various management and technology courses at both undergraduate and postgraduate levels21. The college is affiliated with MAKAUT and WBSCTE and is approved by AICTE2.

The institution has expanded to include other specialized colleges and programs, such as the Trident College of Management & Technology in 2002, the Pailan School of International Studies in 2003, and the Pailan Aviation Institute in 2005
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex justify-center items-center"
          variants={fadeInRight}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
        >
          <img
            src="about.jpg"
            alt="College Building"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </motion.div>

        {/* Mission Section */}
        <motion.div
          className="bg-white p-6 shadow-lg rounded-lg"
          variants={fadeInRight}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-subMain mb-4">Our Mission</h2>
          <p className="text-gray-700 text-justify">
            Our mission is to foster intellectual growth, encourage academic excellence, and promote
            social responsibility. We are committed to providing an inclusive environment that
            supports the diverse needs of our students.
          </p>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          className="bg-white p-6 shadow-lg rounded-lg"
          variants={fadeInLeft}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-subMain mb-4">Our Vision</h2>
          <p className="text-gray-700 text-justify">
            To be a global leader in education, research, and community service. We aim to shape
            future leaders who will drive innovation and change in their respective fields, while
            maintaining a commitment to ethical practices.
          </p>
        </motion.div>
      </div>

      {/* Footer Section */}
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-xl font-bold text-subMain">Join Us</h3>
        <p className="mt-2 text-gray-600">
          Be a part of our vibrant community and experience a world of opportunities.
        </p>
      </motion.div>
    </div>
  );
};

export default AboutUs;
