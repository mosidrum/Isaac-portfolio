import { IoCodeSlash } from 'react-icons/io5';
import Link from 'next/link';
import styles from './recent.module.css';
import { projects } from '../../utils';

export const Recent = () => (
  <div>
    <div className="flex-column gap-1">
      <div className="d-flex gap-2 align-items-center">
        <IoCodeSlash size={30} />
        <div className="text-2xl">Recent Work</div>
      </div>
      <div>
        {projects.map((project, index) => (
          <div key={index} className={`flex-column gap-1 ${styles.recent}`}>
            <Link
              href={project.link}
              className="text-secondary text-lg hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.title}
            </Link>
            <p className="text-md">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);
