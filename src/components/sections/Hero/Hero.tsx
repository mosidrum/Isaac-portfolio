import Link from 'next/link';
import { calendlyUrl, resumeUrl } from '@/data';
import styles from './Hero.module.css';

export const Hero = () => (
  <section className={styles.hero}>
    <div className={styles.inner}>
      <p className={styles.label}>Full-Stack Engineer · AI Systems · Remote</p>

      <h1 className={styles.headline}>
        I ship<br /><span className={styles.dim}>production</span><br />
        software.
      </h1>

      <p className={styles.body}>
        Five years building web and mobile products across startups — from REST API
        design and database modelling to performant frontends and CI/CD. Currently
        engineering AI agent infrastructure at Relaystack. I specialise in React,
        Next.js, Node.js, and TypeScript, and I care about systems that hold up in
        production, not just in demos.
      </p>

      <p className={styles.status}>
        <span className={styles.dot} aria-hidden="true" />
        Building at Relaystack. Open to remote full-stack and frontend roles.
      </p>

      <div className={styles.ctas}>
        <Link href="/projects" className={`${styles.ctaPrimary} cta-glow`}>
          View work →
        </Link>
        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaSecondary}
        >
          Download CV
        </a>
        <a
          href={calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaSecondary}
        >
          Book a call →
        </a>
      </div>
    </div>
  </section>
);
