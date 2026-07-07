import Link from 'next/link';
import { calendlyUrl, resumeUrl } from '@/data';
import styles from './Hero.module.css';

export const Hero = () => (
  <section className={styles.hero}>
    <div className={styles.inner}>
      <p className={styles.label}>Full-Stack Engineer · AI Systems · Remote</p>

      <h1 className={styles.headline}>
        I ship
        <br />
        <span className={styles.dim}>production</span>
        <br />
        software.
      </h1>

      <p className={styles.body}>
        I build software with longevity in mind. Clean architecture, thoughtful user experiences,
        and reliable systems are the foundations I prioritize, because the best software isn't just
        something that launches—it&#39;s something that continues to perform as it grows.
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
