import Link from 'next/link';
import styles from './navbar.module.css';
import { GotoLink } from '../GotoLink';
import { navItems } from '../../utils';

export const Navbar = () => (
  <div className={styles.container}>
    <div className={styles.wrapper}>
      <Link href="/" className={`${styles.title} text-decoration-none text-3xl `}>
        Isaac
      </Link>
      <div className={styles.items}>
        {navItems.map((item, index) => (
          <GotoLink href={item.link} title={item.name} key={index} />
        ))}
      </div>
    </div>
  </div>
);
