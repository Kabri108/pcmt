import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
const Footer = () => {
  const Links = [
    {
      title: 'Quick Links',
      links: [
        {
          name: 'Home',
          link: '/',
        },
        {
          name: 'About Us ',
          link: '/about-us',
        },
        {
          name: 'Departments',
          link: '/departments',
        },
        {
          name: 'Placements',
          link: '/placements',
        },
        {
          name: 'Campus Life',
          link: '/campus-life',
        },
       
      ],
    },
    {
      title: 'Contact Us',
      links: [
        {
          name: '📞:8888888888',
          link: '/actions',
        },
        {
          name: '📞:8888888888',
          link: '/actions',
        },
        
        {
          name: '✉️:pcmt@gmail.com',
          link: '/actions',
        },
        {
          name: '🌍Pailan, South 24 Parganas, West Bengal, 700104, India',
          link: '/actions',
        },
        
      ],
    },
    {
      title: 'Connect with Us',
      links: [
        {
          name: 'Terms and conditions',
          link: '/',
        },
        {
          name: 'Privacy Policy',
          link: '/',
        },
        {
          name: 'Disclaimer',
          link: '/',
        },
        {
          name: 'Terms and conditions',
          link: '/',
        },
        
      ],
    },
  ];
  return (
    <div className="bg-dry py-4 border-t-2 border-black bg-gray-700 text-white">
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-10 justify-between">
          {Links.map((link, index) => (
            <div
              key={index}
              className="col-span-1 md:col-span-2 lg:col-span-3 pb-3.5 sm:pb-0"
            >
              <h3
                className="text-md lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5
                "
              >
                {link.title}
              </h3>
              <ul className="text-sm flex flex-col space-y-3">
                {link.links.map((text, index) => (
                  <li
                    key={index}
                    className=" items-baseline
                 "
                  >
                    <Link
                      to={text.link}
                      className=" gap-2 text-border inline-block w-full hover:text-subMain"
                    >
                      {text.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
            <Link to="/">
              <img src="logo.png" alt="logo" className="h-24 " />
            </Link>
            <span>Pailan group is a renowned and respected group imparting education at different levels, starting from school to engineering and management courses.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
