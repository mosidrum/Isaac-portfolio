import Link from 'next/link';
import styles from './status.module.css';

const NotFound = () => (
  <div className={styles.page}>
    <div className={styles.inner}>
      <p className={styles.code}>[404 · route not found]</p>
      <h1 className={styles.title}>This route doesn’t resolve.</h1>
      <p className={styles.body}>
        The page you asked for isn’t here, or it has moved. Try one of these instead.
      </p>
      <div className={styles.actions}>
        <Link href="/" className={styles.primary}>
          Back home
        </Link>
        <Link href="/projects" className={styles.secondary}>
          See the work
        </Link>
        <Link href="/blogs" className={styles.secondary}>
          Read the writing
        </Link>
      </div>
    </div>
  </div>
);

export default NotFound;
