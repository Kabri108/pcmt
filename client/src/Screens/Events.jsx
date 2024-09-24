import React from 'react';
import { motion } from 'framer-motion';
import TextScrollAnimation from '../Components/ReusableComponent/TextAnimation';
import TextAnimation from '../Components/ReusableComponent/TextAnimation';
import Layout from '../Layout/Layout';
import Galary from '../Components/Galary';

// Sample Data
const upcomingEvent = {
  image: 'upe.jpg',
  title: 'Internal Craft and Code Competition 2024',
  date: 'Sep 17, 2024',
  description: 'The Internal Craft and Code Competition is an exciting opportunity for students and developers to showcase their creativity, coding skills, and technical craftsmanship. This competition invites participants to work on innovative projects, solve challenging problems, and collaborate in teams to create functional and impactful solutions within a given timeframe.Participants will engage in various coding challenges, ranging from web and mobile development to data science and algorithmic problem-solving. The competition emphasizes both technical excellence and the ability to think critically and creatively in a fast-paced environment..',
};

const previousEvents = [
  {
    image: 'ev5.jpg',
    title: 'Work Balance in Life',
    date: 'May 20, 2023',
    description: 'Celebrate cultural diversity through performances and exhibits.',
  },
  {
    image: 'ev3.jpg',
    title: 'Sports Meet 2023',
    date: 'June 10, 2023',
    description: 'Inter-college sports event with various competitions.',
  },
  {
    image: 'ev4.jpg',
    title: 'Cultural Fest 2023',
    date: 'May 20, 2023',
    description: 'Celebrate cultural diversity through performances and exhibits.',
  },
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
    <Layout>
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
          <img src={upcomingEvent.image} alt={upcomingEvent.title} className="md:w-1/3 object-cover h-80" />
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2">{upcomingEvent.title}</h3>
            <p className="text-gray-500 mb-2">{upcomingEvent.date}</p>
            <p>{upcomingEvent.description}</p>
          </div>
        </motion.div>
      </section>

      {/* Previous Events Section */}
      <section className="mb-12">
        <TextScrollAnimation  
        text="Previous Events"
        highlightWord="Previous"
        className="text-4xl font-bold mb-6 text-center"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
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
      <Galary/>
    </div>
    </Layout>
  );
};

export default EventsPage;
