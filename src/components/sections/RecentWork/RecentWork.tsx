import Link from 'next/link';
import { Code2, ArrowUpRight } from 'lucide-react';
import { featuredProjects } from '@/data';
import styles from './RecentWork.module.css';

export const RecentWork = () => (
    <section className={styles.section}>
      <header className={styles.header}>
        <Code2 size={28} />
        <h2 className={styles.title}>Recent Work</h2>
      </header>

      <div className={styles.projects}>
        {featuredProjects.map((project) => (
          <article key={project.title} className={styles.project}>
            <div className={styles.projectHeader}>
              {project.liveUrl ? (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectTitle}
                >
                  {project.title}
                  <ArrowUpRight size={16} />
                </Link>
              ) : (
                <span className={styles.projectTitleText}>{project.title}</span>
              )}
            </div>
            <p className={styles.description}>{project.description}</p>
            <p className={styles.impact}>{project.impact}</p>
            <div className={styles.techStack}>
              {project.techStack.map((tech) => (
                <span key={tech} className={styles.tech}>
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <Link href="/projects" className={styles.viewAll}>
        View all projects
        <ArrowUpRight size={16} />
      </Link>
    </section>
);
