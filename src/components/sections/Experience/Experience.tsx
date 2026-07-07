import Image from 'next/image';
import { experiences, resumeUrl } from '@/data';
import styles from './Experience.module.css';

export const Experience = () => (
  <section className={styles.section}>
    <div className={styles.inner}>
      <p className={styles.sectionLabel}>[Experience]</p>

      <div className={styles.list}>
        {experiences.map((exp, i) => (
          <article key={exp.company} className={styles.entry}>
            <div className={styles.entryRow}>
              <span className={styles.index}>0{i + 1}</span>

              <div className={styles.entryMeta}>
                <a
                  href={exp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.companyLink}
                >
                  {exp.logo ? (
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      width={32}
                      height={32}
                      className={styles.logo}
                    />
                  ) : (
                    <span className={styles.logoFallback} aria-hidden="true">
                      {exp.company[0]}
                    </span>
                  )}
                  <div>
                    <span className={styles.company}>{exp.company}</span>
                    <span className={styles.role}>{exp.role}</span>
                  </div>
                  <span className={styles.arrow}>→</span>
                </a>
              </div>

              <span className={styles.period}>{exp.period}</span>
            </div>

          </article>
        ))}
      </div>

      <a
        href={resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.resumeLink}
      >
        View full resume →
      </a>
    </div>
  </section>
);
