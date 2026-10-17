import { SectionHead } from '@/components/ui';
import styles from './HowIWork.module.css';

const principles = [
  {
    title: 'Own the ambiguous work',
    body: 'I would rather pick up an incomplete system and make it reliable than wait for a perfect brief. AuxHR is that pattern: stabilise, then improve.'
  },
  {
    title: 'Ship inside a small team',
    body: 'Shared contracts, reviewable UI, and honest scope. At Relaystack that meant contributing to operators without pretending one person built the platform.'
  },
  {
    title: 'Product judgment with the code',
    body: 'Frontend depth, backend where the product needs it, and UX that a hiring manager or an operator can actually run. Not a demo.'
  }
];

export const HowIWork = () => (
  <section className={styles.section} aria-labelledby="how-heading">
    <div className={styles.inner}>
      <SectionHead
        index="03"
        label="Principles"
        id="how-heading"
        title={
          <>
            Clear ownership. <span className="serif">Quiet craft.</span>
          </>
        }
      />
      <div className={styles.grid}>
        {principles.map((item, index) => (
          <article key={item.title} className={styles.card}>
            <span className={`serif ${styles.num}`}>{String(index + 1).padStart(2, '0')}</span>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.body}>{item.body}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
