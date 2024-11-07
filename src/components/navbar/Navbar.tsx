import styles from './navbar.module.css';
import { GotoLink } from '../gotoLink';
import { navItems } from '../../utils';

export const Navbar = () => (
  <div className={styles.container}>
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Isaac</h1>
      <div className={styles.items}>
        {navItems.map((item, index) => (
          <GotoLink href={item.link} title={item.name} key={index} />
        ))}
      </div>
    </div>
  </div>
);
