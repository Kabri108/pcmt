import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import {FaChevronRight,FaChevronLeft} from 'react-icons/fa'
const sliderData = [
  {
    image: 'cocktail.jpg',
    title: 'Cocktail & Mocktail Compitition 2024',
    description: 'This is the description for the first slide.',
  },
  {
    image: 'https://via.placeholder.com/800x600/ff7f7f',
    title: 'Second Slide',
    description: 'This is the description for the second slide.',
  },
  {
    image: 'https://via.placeholder.com/800x600/7f7fff',
    title: 'Third Slide',
    description: 'This is the description for the third slide.',
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? sliderData.length - 1 : prevSlide - 1
    );
  };

  // Auto-slide functionality using useEffect
  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide(); // Automatically go to the next slide every 5 seconds
    }, 5000);

    // Cleanup interval when component unmounts
    return () => clearInterval(slideInterval);
  }, [currentSlide]); // Re-run effect whenever currentSlide changes

  return (
    <div className="relative w-full  ">
      {/* Slider Image */}
      {sliderData.map((slide, index) => (
        <motion.div
          key={index}
          className="w-full xl:h-96 bg-dry lg:h-72 h-64"
          initial={{ opacity: 0, x: 100 }}
          animate={{
            opacity: currentSlide === index ? 1 : 0,
            x: currentSlide === index ? 0 : 100,
          }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          style={{ display: currentSlide === index ? 'block' : 'none' }}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute linear-bg xl:pl-52 sm:pl-32 pl-8 top-0 bottom-0 right-0 left-0 flex flex-col justify-center lg:gap-8 md:gap-5 gap-4 ">
            <h1 className="xl:text-4xl truncate capitalize font-sans sm:text-2xl text-xl font-bold text-white">
              {slide.title}
            </h1>
            <p className='text-white'>{slide.description}</p>
          </div>
        </motion.div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-transparent border-2   text-white px-2 py-2 rounded-full hover:text-subMain hover:text-xl "
      >
        <FaChevronLeft/>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-transparent text-white px-2 py-2 rounded-full hover:text-subMain border-2 "
      >
        <FaChevronRight/>
      </button>
    </div>
  );
};

export default Slider;
