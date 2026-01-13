'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { navItems } from '@/data';
import styles from './Navbar.module.css';

type Theme = 'light' | 'dark';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>('light');
  const pathname = usePathname();

  useEffect(() => {
    const savedTheme = (localStorage.getItem('theme') as Theme) || 'light';
    setTheme(savedTheme);
    document.documentElement.className = savedTheme;
  }, []);

  const toggleTheme = useCallback(() => {
    const newTheme: Theme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.className = newTheme;
  }, [theme]);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo} aria-label="Home">
          Isaac
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

        <div className={styles.actions}>
          <button
            onClick={toggleTheme}
            className={styles.themeToggle}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={styles.menuToggle}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
          </ul>
          <button
            onClick={toggleTheme}
            className={styles.mobileThemeToggle}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      )}
    </header>
  );
}
