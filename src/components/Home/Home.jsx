/* eslint-disable no-unused-vars */
import React from 'react';
import linkedin from '../../assets/socials/linkedin.svg';
import twitter from '../../assets/socials/twitter.svg';
import youtube from '../../assets/socials/youtube.svg';
import github from '../../assets/socials/github.svg';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import Banner from './Banner';

const social = [
  { name: 'LinkedIn', link: 'https://www.linkedin.com/in/mosidrum', icon: linkedin },
  { name: 'Twitter', link: 'https://twitter.com/mosidrum', icon: twitter },
  { name: 'YouTube', link: 'https://www.youtube.com/channel/UCvkH8CbLfbpaNx606anyTCA', icon: youtube },
  { name: 'GitHub', link: 'https://github.com/mosidrum', icon: github },
];

const Home = () => {
  return (
    <motion.div
    variants={fadeIn("up", 0.5)}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: false, amount: 0.4 }}
    >
      <div className="hero h-screen flex flex-col md:flex-row items-center justify-center" id='home'>
        <div className='bg-white w-20 rounded py-1 px-2 mx-3 absolute left-0 hidden md:flex flex-wrap'>
          {social.map((socialItem) => (
            <div key={socialItem.name} className='py-1'>
              <a href={socialItem.link} target='_blank' rel='noreferrer' className='p-3 hover:bg-slate-400 block rounded transition-all duration-500'>
                <img src={socialItem.icon} alt={`social-media-icon-${socialItem.name}`} className='w-10 h-10' />
              </a>
            </div>
          ))}
        </div>
        <Banner />
      </div>
    </motion.div>
  );
};

export default Home;

