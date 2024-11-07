import { navItems } from '../../utils';
import styles from './footer.module.css';

export const Footer = () => (
  <div className={styles.footer}>
    <hr className={styles.line} />
    <div className={styles.content}>
      <div className={styles.items}>
        {navItems.map((item, index) => (
          <div key={index}>{item.name}</div>
        ))}
      </div>
      <div>
        Copyright &copy; {new Date().getFullYear()} <b>Isaac Ayodele</b>.
      </div>
    </div>
  </div>
);
