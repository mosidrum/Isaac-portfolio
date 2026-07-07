import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/data';
import styles from './page.module.css';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Isaac Ayodele`,
    description: project.description
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className={styles.page}>
      <div className={styles.inner}>

        {/* Breadcrumb */}
        <div className={styles.breadcrumb}>
          <Link href="/projects" className={styles.back}>
            ← isaac ayodele
          </Link>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.externalLink}
            >
              {project.liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')} ↗
            </a>
          )}
        </div>

        {/* Title block */}
        <div className={styles.titleBlock}>
          <p className={styles.caseLabel}>Case Study</p>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.tagline}>{project.description}</p>
          {(project.timeline || project.role || project.category) && (
            <p className={styles.meta}>
              {[project.role, project.timeline, project.category]
                .filter(Boolean)
                .join(' · ')}
            </p>
          )}
        </div>

        {/* Overview */}
        {project.overview && (
          <div className={styles.section}>
            <p className={styles.sectionLabel}>Overview</p>
            <p className={styles.body}>{project.overview}</p>
          </div>
        )}

        {/* The constraint */}
        {project.constraint && (
          <div className={styles.section}>
            <p className={styles.sectionLabel}>The constraint</p>
            <p className={styles.body}>{project.constraint}</p>
          </div>
        )}

        {/* Features / highlights */}
        {project.features && project.features.length > 0 && (
          <div className={styles.section}>
            <p className={styles.sectionLabel}>Highlights</p>
            <div className={styles.features}>
              {project.features.map((f) => (
                <div key={f.title} className={styles.feature}>
                  <h3 className={styles.featureTitle}>{f.title}</h3>
                  <p className={styles.featureBody}>{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech stack */}
        <div className={styles.section}>
          <p className={styles.sectionLabel}>Stack</p>
          <p className={styles.stack}>{project.techStack.join(' · ')}</p>
        </div>

        {/* Closing statement */}
        {project.closingStatement && (
          <div className={styles.closing}>
            <p className={styles.closingText}>{project.closingStatement}</p>
          </div>
        )}

        {/* Action links */}
        <div className={styles.links}>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
              View live →
            </a>
          )}
          {project.androidUrl && (
            <a href={project.androidUrl} target="_blank" rel="noopener noreferrer" className={styles.linkBtnOutline}>
              Android ↗
            </a>
          )}
          {project.iosUrl && (
            <a href={project.iosUrl} target="_blank" rel="noopener noreferrer" className={styles.linkBtnOutline}>
              iOS ↗
            </a>
          )}
          {project.sourceUrl && (
            <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className={styles.linkBtnOutline}>
              Source ↗
            </a>
          )}
          <Link href="/projects" className={styles.linkBtnOutline}>
            Back to work
          </Link>
        </div>

      </div>
    </div>
  );
}
