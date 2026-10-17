import type { ReactNode } from 'react';
import styles from './SectionHead.module.css';

interface SectionHeadProps {
  index: string;
  label: string;
  id?: string;
  title: ReactNode;
  intro?: ReactNode;
}

/** Drawing-sheet style section header: "01 / WORK" label, display title, optional intro. */
export const SectionHead = ({ index, label, id, title, intro }: SectionHeadProps) => (
  <header className={styles.head}>
    <p className="sheet-label">
      {index} / {label}
    </p>
    <h2 id={id} className={styles.title}>
      {title}
    </h2>
    {intro ? <p className={styles.intro}>{intro}</p> : null}
  </header>
);
