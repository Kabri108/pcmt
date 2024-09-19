import React from 'react';
import { motion } from 'framer-motion';
import TextScrollAnimation from '../Components/ReusableComponent/TextAnimation';
import TextAnimation from '../Components/ReusableComponent/TextAnimation';

// Sample Data
const upcomingEvent = {
  image: 'https://via.placeholder.com/400',
  title: 'Tech Fest 2024',
  date: 'April 10, 2024',
  description: 'Workshops, coding contests, and keynote sessions from tech giants.',
};

const previousEvents = [
  {
    image: 'https://via.placeholder.com/400',
    title: 'Sports Meet 2023',
    date: 'June 10, 2023',
    description: 'Inter-college sports event with various competitions.',
  },
  {
    image: 'https://via.placeholder.com/400',
    title: 'Cultural Fest 2023',
    date: 'May 20, 2023',
    description: 'Celebrate cultural diversity through performances and exhibits.',
  },
];

// Sample award images for the gallery
const awardImages = [
  'https://via.placeholder.com/200',
  'https://via.placeholder.com/200',
  'https://via.placeholder.com/200',
  'https://via.placeholder.com/200',
];

// Card hover effect
const hoverEffect = {
  hover: {
    scale: 1.05,
    boxShadow: '0px 15px 25px rgba(0, 0, 0, 0.2)',
  },
};

// Main Component
const EventsPage = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      {/* Upcoming Event Section */}
      <section className="mb-12">
        {/* <h2 className="text-4xl font-bold mb-6 text-center">Upcoming Event</h2> */}
        <TextScrollAnimation  
        text="Upcoming Events"
        highlightWord="Upcoming"
        className="text-4xl font-bold mb-6 text-center"
        />
        <motion.div
          className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row"
          whileHover="hover"
          variants={hoverEffect}
        >
          <img src={upcomingEvent.image} alt={upcomingEvent.title} className="md:w-1/3 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2">{upcomingEvent.title}</h3>
            <p className="text-gray-500 mb-2">{upcomingEvent.date}</p>
            <p>{upcomingEvent.description}</p>
          </div>
        </motion.div>
      </section>

      {/* Previous Events Section */}
      <section className="mb-12">
        <h2 className="text-4xl font-bold mb-6 text-center">Previous Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {previousEvents.map((event, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
              whileHover="hover"
              variants={hoverEffect}
            >
              <img src={event.image} alt={event.title} className="h-64 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                <p className="text-gray-500 mb-2">{event.date}</p>
                <p>{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="mb-12">
        <h2 className="text-4xl font-bold mb-6 text-center">Gallery - Tech Fest Awards</h2>
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
    </div>
  );
};

export default EventsPage;
