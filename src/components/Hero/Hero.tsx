import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaRegEnvelope } from 'react-icons/fa';
import styles from './hero.module.css';

export const iconItems = [
  {
    name: 'linkedin',
    icon: <FaLinkedinIn size={24} />
  },
  {
    name: 'github',
    icon: <FaGithub size={24} />
  },
  {
    name: 'message',
    icon: <FaRegEnvelope size={24} />
  }
];

export const Hero = () => (
  <div className="flex-column mt-5 gap-1">
    <div className="text-2xl">👋 Hello I am</div>
    <div className={styles.title}>Isaac Ayodele</div>
    <p>
      A passionate software engineer and a firm believer that technology can address humanity&apos;s
      most pressing challenges. My expertise lies in front-end development. I enjoy developing
      clean, accessible and high-performant web applications.
    </p>
    <Link className="text-no-underline" href="/">
      <p className="text-secondary">More about me</p>
    </Link>
    <div className="d-flex gap-2">
      {iconItems.map((item, index) => (
        <div className="text-xl mv-2 hover" key={index}>
          {item.icon}
        </div>
      ))}
    </div>
  </div>
);
