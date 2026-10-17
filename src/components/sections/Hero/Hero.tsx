import Link from 'next/link';
import { email, location } from '@/data';
import { AgentConsole } from './AgentConsole';
import styles from './Hero.module.css';

const proof = [
  { value: '5+', label: 'years shipping to production' },
  { value: '5', label: 'teams, startup to contract' },
  { value: '2 stores', label: 'App Store and Play Store' },
  { value: 'AI to banking', label: 'agents and a core-banking BFF' }
];

export const Hero = () => (
  <section className={styles.hero}>
    <div className={styles.inner}>
      <div className={styles.copy}>
        <p className={styles.chip}>
          <span className={styles.dot} aria-hidden="true" />
          Open to remote roles · {location}
        </p>

        <h1 className={styles.headline}>
          Full-stack engineer building AI agent systems{' '}
          <span className={`serif ${styles.accent}`}>that finish the work.</span>
        </h1>

        <p className={styles.body}>
          I build the agents, the APIs behind them and the interfaces people use. Five years of
          production web and mobile work, from startups to banking middleware.
        </p>

        <div className={styles.ctas}>
          <Link href="/#work" className={`${styles.ctaPrimary} cta-glow`}>
            See the systems
          </Link>
          <a href={`mailto:${email}`} className={styles.ctaSecondary}>
            Email me
          </a>
        </div>

        <p className={styles.hint}>
          or press <kbd>⌘</kbd> <kbd>K</kbd> and ask me anything
        </p>
      </div>

      <div className={styles.visual}>
        <AgentConsole />
      </div>

      <dl className={styles.proof}>
        {proof.map((item) => (
          <div key={item.label} className={styles.proofItem}>
            <dt className={styles.proofValue}>{item.value}</dt>
            <dd className={styles.proofLabel}>{item.label}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);
