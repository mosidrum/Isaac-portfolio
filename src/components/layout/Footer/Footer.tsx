import Link from 'next/link';
import { footerNavItems, location, siteName, socialLinks } from '@/data';
import styles from './Footer.module.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.block}>
          <div className={styles.cell}>
            <p className={styles.key}>Drawn by</p>
            <p className={styles.value}>{siteName}</p>
          </div>
          <div className={styles.cell}>
            <p className={styles.key}>Title</p>
            <p className={styles.value}>Portfolio · Full-stack engineer</p>
          </div>
          <div className={styles.cell}>
            <p className={styles.key}>Based in</p>
            <p className={styles.value}>{location}</p>
          </div>
          <div className={styles.cell}>
            <p className={styles.key}>Sheet</p>
            <p className={styles.value}>© {currentYear}</p>
          </div>
        </div>

        <div className={styles.links}>
          <nav aria-label="Footer">
            <ul className={styles.navLinks}>
              {footerNavItems.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className={styles.navLink}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.social}>
            {socialLinks.map(({ platform, url, ariaLabel }) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.navLink}
                aria-label={ariaLabel}
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
