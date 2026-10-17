import Link from 'next/link';
import { calendlyUrl, email, githubUrl, linkedinUrl } from '@/data';
import styles from './Contact.module.css';

export const Contact = () => (
  <section className={styles.section} id="contact" aria-labelledby="contact-heading">
    <div className={styles.inner}>
      <div className={styles.panel}>
        <p className="sheet-label">05 / Contact</p>
        <h2 id="contact-heading" className={styles.heading}>
          If this work looks like a fit, <span className="serif">write.</span>
        </h2>
        <p className={styles.body}>
          I am open to remote full-stack and frontend roles. Email is the fastest path.
        </p>

        <a href={`mailto:${email}`} className={styles.email}>
          {email}
        </a>

        <div className={styles.links}>
          <a
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.primary} cta-glow`}
          >
            Book 30 minutes
          </a>
          <Link href="/resume" className={styles.secondary}>
            Résumé
          </Link>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={styles.secondary}>
            GitHub
          </a>
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className={styles.secondary}>
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  </section>
);
