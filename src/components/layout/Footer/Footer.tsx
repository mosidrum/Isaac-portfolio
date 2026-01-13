import Link from 'next/link';
import { navItems, socialLinks } from '@/data';
import styles from './Footer.module.css';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.divider} />
      <div className={styles.content}>
        <nav className={styles.nav} aria-label="Footer navigation">
          <ul className={styles.navLinks}>
            {navItems.map(({ label, href }) => (
              <li key={href}>
                <Link href={href} className={styles.navLink}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.meta}>
          <div className={styles.social}>
            {socialLinks.map(({ platform, url, ariaLabel }) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label={ariaLabel}
              >
                {platform}
              </a>
            ))}
          </div>
          <p className={styles.copyright}>
            © {currentYear} Isaac Ayodele
          </p>
        </div>
      </div>
    </footer>
  );
}
