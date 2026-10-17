import Link from 'next/link';
import Image from 'next/image';
import { blueprints, type Project } from '@/data';
import { Blueprint } from '../Blueprint';
import { BrandMark } from '../BrandMark';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
  index: number;
}

/**
 * Clicking the card opens the live project (new tab). A separate link opens the case study.
 * Projects with no external link fall back to the case study as the main target.
 */
export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const blueprint = project.blueprint ? blueprints[project.blueprint] : undefined;
  const hasVisual = Boolean(project.cardImage ?? blueprint);
  const external = project.primaryUrl ?? project.liveUrl ?? project.sourceUrl;
  const caseStudy = `/projects/${project.slug}`;
  const host = external?.replace(/^https?:\/\//, '').replace(/\/.*$/, '');

  const title = (
    <>
      {project.title}
      <span className={styles.arrow} aria-hidden="true">
        ↗
      </span>
    </>
  );

  return (
    <article className={styles.card}>
      {hasVisual && (
        <div className={styles.visual}>
          {project.cardImage ? (
            <Image
              src={project.cardImage}
              alt=""
              sizes="(max-width: 820px) 100vw, 560px"
              className={styles.image}
            />
          ) : blueprint ? (
            <Blueprint def={blueprint} thumb />
          ) : null}
          <span className={styles.index}>{String(index + 1).padStart(2, '0')}</span>
        </div>
      )}

      <div className={styles.body}>
        <p className={styles.category}>
          {!hasVisual && (
            <span className={styles.inlineIndex}>{String(index + 1).padStart(2, '0')} · </span>
          )}
          {project.category}
        </p>

        <h3 className={styles.title}>
          {external ? (
            <a
              href={external}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mainLink}
              aria-label={`${project.title}, opens ${host} in a new tab`}
            >
              {title}
            </a>
          ) : (
            <Link href={caseStudy} className={styles.mainLink}>
              {title}
            </Link>
          )}
          {project.logo && <BrandMark logo={project.logo} />}
        </h3>

        <p className={styles.description}>{project.description}</p>
        <p className={styles.roleLine}>
          {[project.role, project.timeline].filter(Boolean).join(' · ')}
        </p>
        <ul className={styles.chips} aria-label="Stack">
          {project.techStack.slice(0, 4).map((tech) => (
            <li key={tech} className={styles.chip}>
              {tech}
            </li>
          ))}
        </ul>

        <div className={styles.footer}>
          {external && <span className={styles.host}>{host}</span>}
          <Link href={caseStudy} className={styles.caseLink}>
            Case study →
          </Link>
        </div>
      </div>
    </article>
  );
};
