import Link from 'next/link';
import { featuredProjects } from '@/data';
import { ProjectCard, SectionHead } from '@/components/ui';
import styles from './RecentWork.module.css';

export const RecentWork = () => (
  <section className={styles.section} id="work" aria-labelledby="work-heading">
    <div className={styles.inner}>
      <SectionHead
        index="01"
        label="Work"
        id="work-heading"
        title={
          <>
            Systems I have built <span className="serif">and shipped.</span>
          </>
        }
      />

      <div className={styles.grid}>
        {featuredProjects.map((project, idx) => (
          <ProjectCard key={project.slug} project={project} index={idx} />
        ))}
      </div>

      <Link href="/projects" className={styles.viewAll}>
        All projects <span aria-hidden="true">→</span>
      </Link>
    </div>
  </section>
);
