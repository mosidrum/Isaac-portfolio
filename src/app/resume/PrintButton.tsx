'use client';

import styles from './page.module.css';

export const PrintButton = () => (
  <button type="button" className={styles.btn} onClick={() => globalThis.print()}>
    Print / save as PDF
  </button>
);
