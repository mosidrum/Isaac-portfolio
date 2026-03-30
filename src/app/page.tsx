import { Hero, Experience, RecentWork } from '@/components';
import styles from './page.module.css';

const Home = () => (
  <div className={styles.container}>
    <Hero />
    <div className={styles.grid}>
      <RecentWork />
      <Experience />
    </div>
  </div>
);

export default Home;
