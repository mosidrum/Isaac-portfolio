import { navItems } from '../../utils';
import styles from './footer.module.css';
import { GotoLink } from '../GotoLink';

export const Footer = () => (
  <div className={styles.footer}>
    <hr className={styles.line} />
    <div className={`${styles.bottom} flex-center-between pv-4`}>
      <div className="d-flex gap-2">
        {navItems.map((item, index) => (
          <GotoLink key={index} href={item.link} title={item.name} type="footer" />
        ))}
      </div>
      <div>
        Copyright &copy; {new Date().getFullYear()} <b>Isaac Ayodele</b>.
      </div>
    </div>
  </div>
);
