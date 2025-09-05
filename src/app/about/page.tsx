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
import ex from '../../assests/express.png';
import stripe from '../../assests/stripe.png';
import prisma from '../../assests/prisma.png';
import firebase from '../../assests/firebase.png';
import postgresql from '../../assests/postgresql.png';
import bitbucket from '../../assests/bitbucket.png';
import rails from '../../assests/rails.png';
import angular from '../../assests/angular.png';
import graph from '../../assests/graph.png';

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
  node,
  ex,
  stripe,
  prisma,
  firebase,
  postgresql,
  bitbucket,
  angular,
  rails,
  graph
];

const page = () => (
  <div className="mt-5 px-2 sm:px-4 md:px-6">
    <div className="mb-4 text-xl sm:text-2xl md:text-3xl font-semibold text-center sm:text-left">A little more about me!</div>
    <div className={styles.about}>
      <div className={`${styles.text} text-base sm:text-lg md:text-xl mt-2`}>
        Results-driven <span className="text-highlight">Software Engineer</span> with a strong
        foundation in building{' '}
        <span className="text-highlight">scalable, user-focused software solutions</span>. Combines{' '}
        <span className="text-highlight">technical expertise</span> with a{' '}
        <span className="text-highlight">creative mindset</span> to develop{' '}
        <span className="text-highlight">innovative applications</span> that drive{' '}
        <span className="text-highlight">
          user engagement, increase revenue, and meet complex business objectives
        </span>
        . Experienced in leveraging versatile{' '}
        <span className="text-highlight">programming skills</span> to craft{' '}
        <span className="text-highlight">efficient and maintainable code</span> across various
        platforms and domains. Adept at{' '}
        <span className="text-highlight">solving challenging problems</span>, implementing{' '}
        <span className="text-highlight">performance optimizations</span>, and delivering{' '}
        <span className="text-highlight">high-quality software</span> aligned with project goals.
        Known for a <span className="text-highlight">balanced approach</span> to software design and
        development, uniting <span className="text-highlight">technical depth</span> with{' '}
        <span className="text-highlight">strategic thinking</span> to create{' '}
        <span className="text-highlight">impactful, user-centric solutions</span>. Proficient in
        collaborating with <span className="text-highlight">cross-functional teams</span> to design,
        develop, and deploy applications that{' '}
        <span className="text-highlight">enhance operational efficiency</span> and{' '}
        <span className="text-highlight">business growth</span>.
      </div>
      <div className="flex justify-center">
        <Image src={Isaac} alt="Isaac Ayodele" className={styles.img} priority />
      </div>
    </div>
    <div className="flex flex-col gap-4 mt-5">
      <div className="flex items-center justify-center text-lg sm:text-xl md:text-2xl mt-5 text-center">
        Some <span className="gradient-text">&nbsp;technologies&nbsp;</span> I work with
      </div>
      <div className={styles.logolist}>
        {logos.map((logo, index) => (
          <Image
            src={logo}
            alt={`Technology logo ${index + 1}`}
            className={styles.logo}
            key={index}
            width={100}
            height={100}
          />
        ))}
      </div>
    </div>
  </div>
);
export default page;
