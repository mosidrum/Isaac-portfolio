import type { Metadata } from 'next';
import { archivedProjects, email, mainProjects } from '@/data';
import { ProjectCard } from '@/components/ui';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Selected engineering work: AI operators at Relaystack, the AuxHR hiring platform, Lampstand mobile and job board.',
  alternates: { canonical: '/projects' }
};

const ProjectsPage = () => (
  <div className={styles.page}>
    <div className={styles.inner}>
      <p className="sheet-label">Work</p>
      <h1 className={styles.headline}>
        Systems I have built <span className="serif">and shipped.</span>
      </h1>
      <p className={styles.intro}>
        Featured case studies first, then supporting work. Earlier practice projects live in the
        archive below, and are not presented as production claims.
      </p>

      <div className={styles.grid}>
        {mainProjects.map((project, idx) => (
          <ProjectCard key={project.slug} project={project} index={idx} />
        ))}
      </div>

      {archivedProjects.length > 0 && (
        <details className={styles.archive}>
          <summary className={styles.archiveSummary}>
            Archive: earlier practice projects ({archivedProjects.length})
          </summary>
          <div className={styles.grid}>
            {archivedProjects.map((project, idx) => (
              <ProjectCard key={project.slug} project={project} index={idx} />
            ))}
          </div>
        </details>
      )}

      <div className={styles.contact}>
        <p>
          Want to talk about a role?{' '}
          <a href={`mailto:${email}`} className={styles.contactLink}>
            Email me.
          </a>
        </p>
      </div>
    </div>
  </div>
);

export default ProjectsPage;
