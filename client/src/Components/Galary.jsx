import React from 'react'
import TextScrollAnimation from './ReusableComponent/TextAnimation'
import { motion } from 'framer-motion';
export default function Galary() {

    // Sample award images for the gallery
const awardImages = [
    '/galary/g1.jpg',
    '/galary/g2.jpg',
    '/galary/g3.jpg',
    '/galary/g4.jpg',
    '/galary/g5.jpg',
    '/galary/g6.jpg',
  ];
  // Card hover effect
const hoverEffect = {
    hover: {
      scale: 1.05,
      boxShadow: '0px 15px 25px rgba(0, 0, 0, 0.2)',
    },
  };
  
  return (
    <section className="mb-12">
        <TextScrollAnimation  
        text="Gallery Tech Fest Award"
        highlightWord="Gallery"
        className="text-4xl font-bold mb-6 text-center"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {awardImages.map((image, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
              whileHover="hover"
              variants={hoverEffect}
            >
              <img src={image} alt={`Award ${index + 1}`} className="h-48 w-full object-cover" />
            </motion.div>
          ))}
        </div>
      </section>
  )
}
