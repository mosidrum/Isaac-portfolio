import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blueprints, projects, siteName, siteUrl } from '@/data';
import { Blueprint } from '@/components/ui';
import { JsonLd } from '@/components/seo/JsonLd';
import styles from './page.module.css';

interface Props {
  params: Promise<{ slug: string }>;
}

export const generateStaticParams = () => projects.map((p) => ({ slug: p.slug }));

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/projects/${slug}` }
  };
};

const CaseStudyPage = async ({ params }: Props) => {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const host = project.liveUrl
    ?.replace(/^https?:\/\//, '')
    .replace(/\/$/, '');

  const index = projects.findIndex((p) => p.slug === slug);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const blueprint = project.blueprint ? blueprints[project.blueprint] : undefined;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: project.title,
      description: project.description,
      url: `${siteUrl}/projects/${project.slug}`,
      author: { '@type': 'Person', name: siteName }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Work', item: `${siteUrl}/projects` },
        {
          '@type': 'ListItem',
          position: 2,
          name: project.title,
          item: `${siteUrl}/projects/${project.slug}`
        }
      ]
    }
  ];

  const phoneShots = project.screenshots?.filter((shot) => shot.device === 'phone') ?? [];
  const flatShots = project.screenshots?.filter((shot) => shot.device !== 'phone') ?? [];

  const story = [
    { label: 'Context', body: project.context },
    { label: 'Problem', body: project.problem },
    { label: 'My role', body: project.roleDetail },
    { label: 'Challenge', body: project.challenge },
    { label: 'Approach', body: project.approach },
    { label: 'Outcome', body: project.outcome }
  ].filter((section) => Boolean(section.body));

  return (
    <article className={styles.page}>
      {jsonLd.map((data) => (
        <JsonLd key={data['@type']} data={data} />
      ))}
      <div className={styles.inner}>
        <div className={styles.breadcrumb}>
          <Link href="/projects" className={styles.back}>
            ← All work
          </Link>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.externalLink}
            >
              {host} ↗
            </a>
          )}
        </div>

        <header className={styles.titleBlock}>
          <p className="sheet-label">Case study</p>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.tagline}>{project.description}</p>
          {(project.timeline || project.role || project.category) && (
            <p className={styles.meta}>
              {[project.role, project.timeline, project.category].filter(Boolean).join(' · ')}
            </p>
          )}
        </header>

        {project.metrics && project.metrics.length > 0 && (
          <dl className={styles.metrics}>
            {project.metrics.map((metric) => (
              <div key={metric.label} className={styles.metric}>
                <dt className={styles.metricValue}>{metric.value}</dt>
                <dd className={styles.metricLabel}>{metric.label}</dd>
              </div>
            ))}
          </dl>
        )}

        {blueprint && (
          <section className={styles.blueprint} aria-label="Architecture">
            <Blueprint def={blueprint} />
          </section>
        )}

        {flatShots.map((shot, i) => (
          <figure key={shot.alt} className={styles.shot}>
            {shot.device === 'browser' ? (
              <div className={styles.browser}>
                <div className={styles.browserBar} aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </div>
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  sizes="(max-width: 1180px) 100vw, 1180px"
                  className={styles.shotImage}
                  priority={i === 0}
                />
              </div>
            ) : (
              <Image
                src={shot.src}
                alt={shot.alt}
                sizes="(max-width: 1180px) 100vw, 1180px"
                className={styles.shotImage}
                priority={i === 0}
              />
            )}
            {shot.caption && <figcaption className={styles.shotCaption}>{shot.caption}</figcaption>}
          </figure>
        ))}

        {phoneShots.length > 0 && (
          <div className={styles.phones}>
            {phoneShots.map((shot) => (
              <figure key={shot.alt} className={styles.phone}>
                <div className={styles.phoneBody}>
                  <Image src={shot.src} alt={shot.alt} fill sizes="240px" />
                </div>
                {shot.caption && (
                  <figcaption className={styles.shotCaption}>{shot.caption}</figcaption>
                )}
              </figure>
            ))}
          </div>
        )}

        {story.map((section) => (
          <section key={section.label} className={styles.section}>
            <h2 className={styles.sectionLabel}>{section.label}</h2>
            <p className={styles.body}>{section.body}</p>
          </section>
        ))}

        {project.decisions && project.decisions.length > 0 && (
          <section className={styles.section}>
            <h2 className={styles.sectionLabel}>Decisions</h2>
            <div className={styles.features}>
              {project.decisions.map((item) => (
                <div key={item.title} className={styles.feature}>
                  <h3 className={styles.featureTitle}>{item.title}</h3>
                  <p className={styles.featureBody}>{item.body}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {project.features && project.features.length > 0 && (
          <section className={styles.section}>
            <h2 className={styles.sectionLabel}>What shipped</h2>
            <div className={styles.features}>
              {project.features.map((item) => (
                <div key={item.title} className={styles.feature}>
                  <h3 className={styles.featureTitle}>{item.title}</h3>
                  <p className={styles.featureBody}>{item.body}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className={styles.section}>
          <h2 className={styles.sectionLabel}>Stack</h2>
          <p className={styles.stack}>{project.techStack.join(' · ')}</p>
        </section>

        {project.closingStatement && (
          <div className={styles.closing}>
            <p className={styles.closingText}>{project.closingStatement}</p>
          </div>
        )}

        <div className={styles.links}>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkBtn}
            >
              View live
            </a>
          )}
          {project.androidUrl && (
            <a
              href={project.androidUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkBtnOutline}
            >
              Android
            </a>
          )}
          {project.iosUrl && (
            <a
              href={project.iosUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkBtnOutline}
            >
              iOS
            </a>
          )}
          {project.sourceUrl && (
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkBtnOutline}
            >
              Source
            </a>
          )}
          <Link href="/projects" className={styles.linkBtnOutline}>
            Back to work
          </Link>
        </div>

        <nav className={styles.pager} aria-label="More case studies">
          <Link href={`/projects/${prev.slug}`} className={styles.pagerLink}>
            <span className={styles.pagerLabel}>← Previous</span>
            <span className={styles.pagerTitle}>{prev.title}</span>
          </Link>
          <Link href={`/projects/${next.slug}`} className={`${styles.pagerLink} ${styles.pagerNext}`}>
            <span className={styles.pagerLabel}>Next →</span>
            <span className={styles.pagerTitle}>{next.title}</span>
          </Link>
        </nav>
      </div>
    </article>
  );
};

export default CaseStudyPage;
