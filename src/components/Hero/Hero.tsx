import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaRegEnvelope } from 'react-icons/fa';
import styles from './hero.module.css';

export const iconItems = [
  {
    name: 'linkedin',
    icon: <FaLinkedinIn size={24} />,
    link: 'https://www.linkedin.com/in/mosidrum'
  },
  {
    name: 'github',
    icon: <FaGithub size={24} />,
    link: 'https://github.com/mosidrum'
  },
  {
    name: 'message',
    icon: <FaRegEnvelope size={24} />,
    link: 'mailto:mosiokanga@gmail.com'
  }
];

export const Hero = () => (
  <div className="flex-column mt-2 gap-1">
    <div className="text-xl text-white">👋 Hello I am</div>
    <div className={styles.title}>Isaac Ayodele</div>
    <p className={styles.aboutme}>
      As a focused software engineer with 3 years of expertise building solid systems, I like
      translating complex problems into elegant solutions. My knowledge of programming languages
      such as, JavaScript, Ruby, React, NextJs TypeScript, e.t.c combined with a solid foundation in
      algorithms, data structures, software architecture, enables me to deliver high-quality code
      and drive projects to successful completion. I am passionate about lifelong learning and
      collaboration, and I am excited to join a dynamic team that fosters creativity and innovation.
      Let us work together in building the future!
    </p>
    <Link className="text-no-underline" href="/about">
      <p className="text-secondary">More about me</p>
    </Link>
    <div className="d-flex gap-2">
      {iconItems.map((item, index) => (
        <div className="text-xl mv-2 hover" key={index}>
          <a
            className="text-decoration-none text-tetiary"
            href={item.link}
            target="_blank"
            rel="noreferrer"
          >
            {item.icon}
          </a>
        </div>
      ))}
    </div>
  </div>
);
