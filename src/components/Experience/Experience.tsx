import { IoBriefcase } from 'react-icons/io5';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Experience.module.css';
import { experiences } from '../../utils';

export const Experience = () => (
  <div className={styles.container}>
    <div className="flex-item-center gap-2">
      <IoBriefcase size={26} />
      <div className="text-xl">Experience</div>
    </div>
    <div className="d-flex flex-column gap-3 mt-3">
      {experiences.map((experience, index) => (
        <Link
          key={index}
          className="d-flex gap-2 hover text-no-underline text-white"
          href={experience.company}
          target="_blank"
        >
          <Image src={experience.logo} alt={experience.name} className={styles.image} />
          <div className="width-100">
            <div className="mb-1 text-white">{experience.name}</div>
            <div className="d-flex justify-content-between text-tetiary">
              <div className="text-md">{experience.position}</div>
              <div className="text-md">{experience.duration}</div>
            </div>
          </div>
        </Link>
      ))}
      <button className={styles.button}>
        <Link
          className="text-decoration-none button-color"
          href="https://drive.google.com/file/d/1yJ4vYH0HYIBf0E-fykarF3_PdzqUZjHr/view?usp=sharing"
          target="_blank"
        >
          Download Resume
        </Link>
      </button>
    </div>
  </div>
);
