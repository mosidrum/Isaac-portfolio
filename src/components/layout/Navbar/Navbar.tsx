'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { navItems, resumeUrl } from '@/data';
import { LiveClock } from './LiveClock';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo} aria-label="Home — Isaac Ayodele">
          isaac ayodele
        </Link>

        <ul className={styles.navLinks}>
          {navItems.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className={`${styles.navLink} ${pathname === href ? styles.active : ''}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <LiveClock />

        <div className={styles.actions}>
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.hireBtn} cta-glow`}
          >
            Hire me →
          </a>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={styles.menuToggle}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className={styles.mobileMenu} role="dialog" aria-modal="true">
          <ul className={styles.mobileNavLinks}>
            {navItems.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`${styles.mobileNavLink} ${pathname === href ? styles.active : ''}`}
                  onClick={closeMenu}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.mobileHireBtn} cta-glow`}
                onClick={closeMenu}
              >
                Hire me →
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
