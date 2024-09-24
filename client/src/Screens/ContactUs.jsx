import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Layout from '../Layout/Layout';

const ContactUs = () => {
  return (
    <Layout>
      <div className="w-full min-h-screen bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading Section */}
        <motion.h1
          className="text-4xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact Us
        </motion.h1>

        {/* Contact Information */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* Location */}
          <motion.div
            className="bg-white p-6 shadow-lg rounded-lg"
            whileHover={{ scale: 1.05 }}
          >
            <FaMapMarkerAlt className="text-3xl text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Location</h3>
            <p className="text-gray-600">123 College St, City, Country</p>
          </motion.div>

          {/* Phone */}
          <motion.div
            className="bg-white p-6 shadow-lg rounded-lg"
            whileHover={{ scale: 1.05 }}
          >
            <FaPhone className="text-3xl text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-gray-600">+1 (123) 456-7890</p>
          </motion.div>

          {/* Email */}
          <motion.div
            className="bg-white p-6 shadow-lg rounded-lg"
            whileHover={{ scale: 1.05 }}
          >
            <FaEnvelope className="text-3xl text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-gray-600">info@college.edu</p>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="mt-12 bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">Get In Touch</h2>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 p-4 rounded-lg w-full"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 p-4 rounded-lg w-full"
              />
            </div>
            <textarea
              placeholder="Your Message"
              className="border border-gray-300 p-4 rounded-lg w-full mt-6 h-40"
            ></textarea>
            <motion.button
              type="submit"
              className="mt-6 w-full py-3 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
    </Layout>
  );
};

export default ContactUs;
