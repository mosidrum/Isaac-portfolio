import type { Metadata } from 'next';
import {
  capabilities,
  education,
  email,
  experiences,
  githubUrl,
  linkedinUrl,
  location,
  mainProjects,
  resumeUrl,
  siteDescription,
  siteUrl
} from '@/data';
import { PrintButton } from './PrintButton';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Résumé',
  description: 'Résumé of Isaac Ayodele, full-stack engineer building AI agent systems.',
  alternates: { canonical: '/resume' }
};

const ResumePage = () => (
  <div className={styles.page}>
    <div className={styles.inner}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.name}>Isaac Ayodele</h1>
          <p className={styles.role}>Full-Stack Software Engineer</p>
          <p className={styles.contact}>
            {location} · <a href={`mailto:${email}`}>{email}</a> ·{' '}
            <a href={githubUrl}>github.com/mosidrum</a> · <a href={linkedinUrl}>LinkedIn</a> ·{' '}
            {siteUrl.replace(/^https?:\/\//, '')}
          </p>
        </div>
        <div className={styles.actions}>
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className={styles.btn}>
            Download PDF
          </a>
          <PrintButton />
        </div>
      </header>

      <section className={styles.section}>
        <h2 className={styles.heading}>Summary</h2>
        <p className={styles.text}>{siteDescription}</p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>Technical skills</h2>
        <dl className={styles.skills}>
          {capabilities.map((group) => (
            <div key={group.area} className={styles.skillRow}>
              <dt>{group.area}</dt>
              <dd>{group.items.join(' · ')}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>Experience</h2>
        {experiences.map((exp) => (
          <article key={`${exp.company}-${exp.period}`} className={styles.entry}>
            <div className={styles.entryHead}>
              <h3 className={styles.entryTitle}>
                {exp.role} · {exp.company}
              </h3>
              <span className={styles.period}>{exp.period}</span>
            </div>
            {exp.product && <p className={styles.product}>{exp.product}</p>}
            <ul className={styles.list}>
              {exp.highlights?.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>Selected projects</h2>
        {mainProjects
          .filter((p) => p.featured || p.slug === 'codepop' || p.slug === 'lampstand-job-board')
          .map((project) => (
            <article key={project.slug} className={styles.entry}>
              <h3 className={styles.entryTitle}>
                {project.title}
                <span className={styles.stack}> · {project.techStack.slice(0, 5).join(' · ')}</span>
              </h3>
              <p className={styles.text}>{project.description}</p>
            </article>
          ))}
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>Education</h2>
        {education.map((item) => (
          <div key={item.program} className={styles.entryHead}>
            <h3 className={styles.entryTitle}>
              {item.program} · {item.institution}
            </h3>
            <span className={styles.period}>{item.period}</span>
          </div>
        ))}
      </section>
    </div>
  </div>
);

export default ResumePage;
