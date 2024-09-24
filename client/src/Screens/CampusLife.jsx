import React from 'react';
import { motion } from 'framer-motion';
import TextScaleAnimation from '../Components/ReusableComponent/TextAnimation';

const CampusLife = () => {
  // Variants for animation
  const containerVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 100, delay: 0.2 }
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { delay: 0.3, duration: 0.5 } }
  };

  return (
    <div className="px-8 py-12 bg-gray-100">
      <motion.div
        className="text-center mb-8"
        initial="hidden"
        animate="visible"
        variants={containerVariant}
      >
      <TextScaleAnimation text="Campus Life" highlightWord="Campus" className="text-4xl"/>
        <p className="text-lg text-gray-600 mt-2">
          Discover the vibrant life on our campus!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {campusLifeData.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={itemVariant}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Example campus life data
const campusLifeData = [
  {
    title: 'Sports and Recreation',
    description: 'Join our sports teams or stay active with our fitness programs.',
    image: '/campus/cl1.jpeg'
  },
  {
    title: 'Clubs and Societies',
    description: 'Find your passion in one of our many student-led clubs.',
    image: '/campus/cl2.jpeg'
  },
  {
    title: 'Events and Festivals',
    description: 'Experience vibrant cultural and academic events throughout the year.',
    image: '/campus/cl3.jpeg'
  }
];

export default CampusLife;
