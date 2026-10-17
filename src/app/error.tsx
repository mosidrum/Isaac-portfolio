'use client';

import Link from 'next/link';
import styles from './status.module.css';

const ErrorPage = ({ reset }: { reset: () => void }) => (
  <div className={styles.page}>
    <div className={styles.inner}>
      <p className={styles.code}>[500 · runtime error]</p>
      <h1 className={styles.title}>Something broke on my side.</h1>
      <p className={styles.body}>An unexpected error stopped this page from rendering. Try again, or head back home.</p>
      <div className={styles.actions}>
        <button type="button" onClick={reset} className={styles.primary}>
          Try again
        </button>
        <Link href="/" className={styles.secondary}>
          Back home
        </Link>
      </div>
    </div>
  </div>
);

export default ErrorPage;
