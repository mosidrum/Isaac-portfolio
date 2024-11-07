import Link from 'next/link';
import { RiLinkedinFill } from 'react-icons/ri';
import { FaGithub, FaLinkedinIn, FaRegEnvelope } from 'react-icons/fa';
import styles from './hero.module.css'
import Image from 'next/image';

export const iconItems = [
  {
    name: 'linkedin',
    icon: <FaLinkedinIn />,
  },
  {
    name: 'github',
    icon: <FaGithub />
  },
  {
    name: 'message',
    icon: <FaRegEnvelope />

  }
]

export const Hero = () => (
  <div>
    <h2>👋 Hello I am</h2>
    <div className={styles.title}>Isaac Ayodele</div>
    <p>A passionate software engineer and a firm believer that technology can address humanity&apos;s most pressing challenges. My expertise lies in front-end development. I enjoy developing clean, accessible and high-performant web applications.</p>
    <Link className="text-no-underline" href='/'>
      <p className="text-secondary">More about me</p>
    </Link>
    <div className="d-flex gap-2">
      {iconItems.map((item, index) => (
        <div key={index}>{item.icon}</div>
      ))}
    </div>
  </div>
);
