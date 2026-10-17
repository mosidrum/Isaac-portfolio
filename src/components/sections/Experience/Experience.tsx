import type { ReactNode } from 'react';
import Image from 'next/image';
import { experiences, resumeUrl } from '@/data';
import { BrandMark, SectionHead } from '@/components/ui';
import styles from './Experience.module.css';

const CompanyWrapper = ({ url, children }: { url?: string; children: ReactNode }) =>
  url ? (
    <a href={url} target="_blank" rel="noopener noreferrer" className={styles.companyLink}>
      {children}
    </a>
  ) : (
    <div className={styles.companyLink}>{children}</div>
  );

export const Experience = () => (
  <section className={styles.section} id="experience" aria-labelledby="experience-heading">
    <div className={styles.inner}>
      <SectionHead
        index="02"
        label="Experience"
        id="experience-heading"
        title={
          <>
            Five years, five teams, <span className="serif">one habit: ship.</span>
          </>
        }
      />

      <ol className={styles.list}>
        {experiences.map((exp, i) => (
          <li key={`${exp.company}-${exp.period}`} className={styles.entry}>
            <div className={styles.when}>
              <span className={styles.period}>{exp.period}</span>
              {i === 0 && <span className={styles.current}>Current</span>}
            </div>

            <div
              className={`${styles.rail} ${i === experiences.length - 1 ? styles.railLast : ''}`}
              aria-hidden="true"
            >
              <span className={`${styles.node} ${i === 0 ? styles.nodeCurrent : ''}`} />
            </div>

            <article className={styles.content}>
              <CompanyWrapper url={exp.url}>
                {exp.logo && exp.logo.width / exp.logo.height > 2 ? (
                  <BrandMark logo={exp.logo} />
                ) : exp.logo ? (
                  <Image src={exp.logo} alt="" width={32} height={32} className={styles.logo} />
                ) : (
                  <span className={styles.logoFallback} aria-hidden="true">
                    {exp.company[0]}
                  </span>
                )}
                <span>
                  <span className={styles.company}>
                    {exp.company}
                    {exp.url && <span className={styles.arrow}> ↗</span>}
                  </span>
                  <span className={styles.role}>
                    {exp.role}
                    {exp.product ? ` · ${exp.product}` : ''}
                  </span>
                </span>
              </CompanyWrapper>

              {exp.highlights && exp.highlights.length > 0 && (
                <ul className={styles.highlights}>
                  {exp.highlights.map((item) => (
                    <li key={item} className={styles.highlight}>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          </li>
        ))}
      </ol>

      <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className={styles.resumeLink}>
        Download full résumé <span aria-hidden="true">→</span>
      </a>
    </div>
  </section>
);
