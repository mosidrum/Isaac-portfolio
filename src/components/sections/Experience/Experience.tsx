import Image from 'next/image';
import Link from 'next/link';
import { Briefcase, ExternalLink } from 'lucide-react';
import { experiences, resumeUrl } from '@/data';
import styles from './Experience.module.css';

export function Experience() {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <Briefcase size={24} />
        <h2 className={styles.title}>Experience</h2>
      </header>

      <div className={styles.timeline}>
        {experiences.map((exp) => (
          <article key={exp.company} className={styles.entry}>
            <Link
              href={exp.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.entryLink}
            >
              <Image
                src={exp.logo}
                alt={`${exp.company} logo`}
                width={44}
                height={44}
                className={styles.logo}
              />
              <div className={styles.details}>
                <div className={styles.companyRow}>
                  <h3 className={styles.company}>{exp.company}</h3>
                  <ExternalLink size={14} className={styles.externalIcon} />
                </div>
                <div className={styles.meta}>
                  <span className={styles.role}>{exp.role}</span>
                  <span className={styles.period}>{exp.period}</span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>

      <Link href={resumeUrl} target="_blank" rel="noopener noreferrer" className={styles.resumeBtn}>
        Download Resume
      </Link>
    </section>
  );
}
