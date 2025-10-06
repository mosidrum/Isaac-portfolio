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
      Full-Stack Engineer with <strong>5 years</strong> of end-to-end product delivery across
      React/React Native frontends and Node.js/Express backends in monorepo environments. I
      bootstrap services, design resilient REST APIs and authentication flows, implement secure file
      upload/delete patterns, and ship component-driven frontends with Storybook and Jest. I enforce
      TDD across the stack, define clear API contracts and CI/CD pipelines, add observability and
      telemetry for product insights, and consistently reduce cycle time and regressions, examples
      include shipping a cross-device reading-goal feature, bootstrapping a jobboard backend with
      anonymous posting and bounties, and integrating full-stack tests into release pipelines.
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
