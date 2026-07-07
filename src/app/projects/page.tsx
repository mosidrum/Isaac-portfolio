import type { Metadata } from 'next';
import Link from 'next/link';
import { projects } from '@/data';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Projects — Isaac Ayodele',
  description: 'A selection of projects demonstrating architectural thinking, technical depth, and measurable impact.'
};

const ProjectsPage = () => (
  <div className={styles.page}>
    <div className={styles.inner}>
      <p className={styles.label}>[Projects]</p>
      <h1 className={styles.headline}>
        Things I&apos;ve built<br />and shipped.
      </h1>

      <div className={styles.list}>
        {projects.map((project, idx) => (
          <Link key={project.slug} href={`/projects/${project.slug}`} className={styles.row}>
            <div className={styles.rowLeft}>
              <span className={styles.number}>{String(idx + 1).padStart(2, '0')}</span>
              <div className={styles.meta}>
                <h2 className={styles.title}>{project.title}</h2>
                <p className={styles.description}>{project.description}</p>
                <div className={styles.tech}>
                  {project.techStack.slice(0, 6).map((t) => (
                    <span key={t} className={styles.pill}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
            <span className={styles.arrow}>→</span>
          </Link>
        ))}
      </div>

      <div className={styles.contact}>
        <p>
          Want to discuss professional or proprietary work?{' '}
          <a href="mailto:mosiokanga@gmail.com" className={styles.contactLink}>
            Get in touch.
          </a>
        </p>
      </div>
    </div>
  </div>
);

export default ProjectsPage;
