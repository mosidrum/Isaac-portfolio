import { IoBriefcase } from 'react-icons/io5';
import Image from 'next/image';
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
          <div key={index} className={`d-flex justify-content-between align-items-end ${styles.list}`}>
            <div className="d-flex">
              <Image src={experience.logo} alt={experience.name} className={styles.image} />
              <div className="d-flex flex-column justify-content-between pl-2">
                <div className="font-bold">{experience.name}</div>
                <div className="font-normal text-tetiary">{experience.position}</div>
              </div>
            </div>
            <div className="font-normal text-tetiary">{experience.duration}</div>
          </div>
        ))}
        <button className={styles.button}>Download Resume</button>
      </div>
    </div>
)
