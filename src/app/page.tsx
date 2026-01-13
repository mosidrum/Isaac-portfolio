import { Hero, Experience, RecentWork } from '@/components';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />
      <div className={styles.grid}>
        <RecentWork />
        <Experience />
      </div>
    </div>
  );
}
