import React from 'react';
import Image from 'next/image';
import Isaac from '../../assests/myself.jpg';
import styles from './about.module.css';
import react from '../../assests/react_logo.png';
import tailwind from '../../assests/tailwind.png';
import postman from '../../assests/postman.png';
import git from '../../assests/git.png';
import mongo from '../../assests/mongo.png';
import expo from '../../assests/expo.png';
import nextjs from '../../assests/next.png';
import javascript from '../../assests/javascript.png';
import typescript from '../../assests/typescript.png';
import story from '../../assests/storybook.png';
import node from '../../assests/nodejs.png';

const logos = [
  react,
  expo,
  tailwind,
  postman,
  git,
  mongo,
  nextjs,
  javascript,
  typescript,
  story,
  node
];

const page = () => (
  <div>
    <div className="text-3xl">A little more about me!</div>
    <div className="d-flex justify-content-between align-items-center">
      <div className={`${styles.text} width-75 text-xl mt-2`}>
        I am a highly <span className="text-highlight">motivated</span> and{' '}
        <span className="text-highlight">results-driven</span>
        <span className="text-highlight"> Software Engineer</span> with over three years of
        professional experience in designing, developing, and maintaining web applications and{' '}
        <span className="text-highlight">frontend</span> systems. My expertise lies in writing
        <span className="text-highlight"> clean, efficient, and maintainable code</span>, which has
        consistently led to <span className="text-highlight">enhanced system performance</span> and
        streamlined <span className="text-highlight">troubleshooting processes</span>, improving
        efficiency by <span className="text-highlight">30%</span>. Throughout my career, I have
        demonstrated a strong ability to{' '}
        <span className="text-highlight">collaborate effectively</span> with cross-functional teams,
        including developers, designers, and stakeholders, to deliver innovative solutions. My
        ability to adapt quickly to{' '}
        <span className="text-highlight"> new tools and technologies</span>, combined with a
        proactive mindset, ensures that I remain a valuable asset in fast-paced and evolving project
        environments. With a proven track record of delivering robust, user-centric applications, I
        am committed to leveraging my technical
        <span className="text-highlight"> skills</span> and
        <span className="text-highlight"> problem-solving</span> abilities to create impactful{' '}
        <span className="text-highlight">software solutions</span> that drive business growth and
        enhance <span className="text-highlight">user experiences.</span>
      </div>
      <Image src={Isaac} alt="Isaac Ayodele" className={styles.img} />
    </div>
    <div className="flex-column gap-4 mt-5">
      <div className="d-flex align-items-center justify-content-center text-2xl mt-5">
        Some of my favourite&nbsp;<span className="gradient-text">technologies&nbsp;</span> to work
        with
      </div>
      <div className={styles.logolist}>
        {logos.map((logo, index) => (
          <Image src={logo} alt="react" className={styles.logo} key={index} />
        ))}
      </div>
    </div>
  </div>
);
export default page;
