import Link from 'next/link';
import { featuredProjects } from '@/data';
import styles from './RecentWork.module.css';

export const RecentWork = () => (
  <section className={styles.section}>
    <div className={styles.inner}>
      <p className={styles.sectionLabel}>[Selected Work]</p>

      <div className={styles.list}>
        {featuredProjects.map((project, idx) => (
          <Link key={project.slug} href={`/projects/${project.slug}`} className={styles.row}>
            <div className={styles.rowLeft}>
              <span className={styles.number}>
                {String(idx + 1).padStart(2, '0')}
              </span>
              <div className={styles.meta}>
                <h3 className={styles.projectName}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                <div className={styles.tech}>
                  {project.techStack.slice(0, 5).map((t) => (
                    <span key={t} className={styles.pill}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
            <span className={styles.arrow} aria-hidden="true">→</span>
          </Link>
        ))}
      </div>

      <Link href="/projects" className={styles.viewAll}>
        View all projects →
      </Link>
    </div>
  </section>
);
