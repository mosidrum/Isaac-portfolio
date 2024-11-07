import styles from './navbar.module.css';
import { GotoLink } from '../gotoLink';

const navItems = [
  {
    name: 'About me',
    link: '/about'
  },
  {
    name: 'Projects',
    link: '/projects'
  },
  {
    name: 'Blog',
    link: '/blog'
  },
  {
    name: 'Uses',
    link: '/uses'
  }
];

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
