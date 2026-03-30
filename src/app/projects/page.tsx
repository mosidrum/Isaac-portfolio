import Link from 'next/link';
import { ProjectCard } from '@/components';
import { projects } from '@/data';
import styles from './page.module.css';

const ProjectsPage = () => (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Projects</h1>
        <p className={styles.subtitle}>
          A selection of projects demonstrating architectural thinking, technical depth, and
          measurable business impact.
        </p>
      </header>

      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <div className={styles.cta}>
        <p className={styles.ctaText}>
          Interested in discussing enterprise projects or proprietary work from my professional
          experience?{' '}
          <Link href="mailto:mosiokanga@gmail.com" className={styles.ctaLink}>
            Let&apos;s connect.
          </Link>
        </p>
      </div>
    </div>
);

export default ProjectsPage;
