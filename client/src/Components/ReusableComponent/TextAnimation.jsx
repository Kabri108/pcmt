import React from 'react';
import { motion } from 'framer-motion';

const TextScaleAnimation = ({ text, highlightWord, scrollingTime, className }) => {
  const words = text.split(' '); // Split the full text into an array of words

  // Scale animation from small to big
  const scaleVariants = {
    initial: { scale: 0.5 }, // Start small
    animate: {
      scale: 1, // Animate to full size
      transition: {
        duration: scrollingTime, // Control the speed with scrollingTime prop
        ease: 'easeInOut', // Smooth animation
      },
    },
  };

  return (
    <motion.div
      className={`relative  ${className}`} // Use className prop dynamically
      initial="initial"
      animate="animate"
      variants={scaleVariants}
    >
      {/* Render each word with the correct style */}
      {words.map((word, index) => (
        <span
          key={index}
          className={word === highlightWord ? 'text-red-500 font-bold' : 'text-black font-bold'}
        >
          {word}{' '}
        </span>
      ))}

      
    </motion.div>
  );
};

export default TextScaleAnimation;
