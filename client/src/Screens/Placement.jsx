import { motion } from 'framer-motion';
import React from 'react';
import Layout from '../Layout/Layout';

const PlacementPage = () => {
  // Framer Motion animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
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
    <Layout>
    <div className="bg-gray-100 p-6">
      {/* Placement Banner */}
      <motion.div
        className="bg-gray-200 text-red-500 py-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold">Placements at Our College</h1>
        <p className="mt-4 text-lg">
          Preparing students for a successful career in the professional world.
        </p>
      </motion.div>

      {/* Placement Statistics Section */}
      <div className="container mx-auto my-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Statistic 1 */}
        <motion.div
          className="bg-white p-8 shadow-lg rounded-lg text-center"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.1 }}
        >
          <h2 className="text-2xl font-bold text-subMain">95%</h2>
          <p className="mt-2 text-gray-600">Placement Rate</p>
        </motion.div>

        {/* Statistic 2 */}
        <motion.div
          className="bg-white p-8 shadow-lg rounded-lg text-center"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-subMain">$70,000</h2>
          <p className="mt-2 text-gray-600">Average Annual Salary</p>
        </motion.div>

        {/* Statistic 3 */}
        <motion.div
          className="bg-white p-8 shadow-lg rounded-lg text-center"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-subMain">300+</h2>
          <p className="mt-2 text-gray-600">Recruiting Companies</p>
        </motion.div>
      </div>

      {/* Notable Recruiters Section */}
      <div className="container mx-auto my-12">
        <motion.h2
          className="text-3xl font-bold text-center mb-8 text-subMain"
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
        >
          Our Notable Recruiters
        </motion.h2>

        {/* Recruiter Logos */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center"
          variants={fadeInLeft}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
        >
          <img
            src="Amazon-logo.png"
            alt="Company 1"
            className="w-full h-auto object-contain"
          />
          <img
            src="wipro.png"
            alt="Company 2"
            className="w-full h-auto object-contain"
          />
          <img
            src="Capgimini.png"
            className="w-full h-auto object-contain"
          />
          <img
            src="hdfc.png"
            alt="Company 4"
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </div>

      {/* Testimonials Section */}
      <div className="container mx-auto my-12">
        <motion.h2
          className="text-3xl font-bold text-center mb-8 text-subMain"
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
        >
          What Our Students Say
        </motion.h2>

        {/* Testimonials */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
        >
          {/* Testimonial 1 */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <p className="text-gray-700 text-justify">
              "Thanks to the incredible placement cell at the college, I was able to secure a job at
              a leading tech company right after graduation!"
            </p>
            <p className="mt-4 text-right font-bold text-subMain">- Sujan Das</p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <p className="text-gray-700 text-justify">
              "The hands-on training and industry exposure I received at the college were crucial in
              helping me prepare for interviews and land my dream job."
            </p>
            <p className="mt-4 text-right font-bold text-subMain">Deepanwita Pal</p>
          </div>
        </motion.div>
      </div>

      {/* Call to Action */}
      <motion.div
        className="text-center my-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-xl font-bold text-subMain">Ready to Join Us?</h3>
        <p className="mt-4 text-gray-600">
          Discover your potential and take the first step toward a successful career with our
          placement opportunities.
        </p>
        <a
          href="/admissions"
          className="inline-block mt-6 bg-subMain text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
        >
          Apply Now
        </a>
      </motion.div>
    </div>

    </Layout>
  );
};

export default PlacementPage;
