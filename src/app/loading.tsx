import styles from './status.module.css';

const Loading = () => (
  <div className={styles.page} role="status" aria-live="polite">
    <div className={styles.inner}>
      <p className={styles.pulse}>
        <span className={styles.dot} aria-hidden="true" />
        loading…
      </p>
    </div>
  </div>
);

export default Loading;
