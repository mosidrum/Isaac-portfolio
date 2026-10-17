'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Search, X } from 'lucide-react';
import { navItems } from '@/data';
import { LiveClock } from './LiveClock';
import { ScrollProgress } from './ScrollProgress';
import { ThemeToggle } from './ThemeToggle';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);
  const [inExperience, setInExperience] = useState(false);
  const isActive = (href: string) => {
    if (href.includes('#')) {
      return pathname === '/' && href === '/#experience' && inExperience;
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  useEffect(() => {
    const target = pathname === '/' ? document.querySelector('#experience') : null;
    if (!target) {
      setInExperience(false);
      return () => {};
    }
    const observer = new IntersectionObserver(
      ([entry]) => setInExperience(entry.isIntersecting),
      { rootMargin: '-40% 0px -50% 0px' }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  useEffect(() => {
    if (!isMenuOpen) {
      return () => {};
    }

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const root = menuRef.current;
    const focusable = [
      ...(root?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') ?? [])
    ];
    focusable?.[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        toggleRef.current?.focus();
        return;
      }

      if (event.key !== 'Tab' || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable.at(-1);
      if (!last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
      previouslyFocused?.focus();
    };
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Primary">
        <Link href="/" className={styles.logo} aria-label="Home — Isaac Ayodele">
          isaac<span className={styles.logoDot}>.</span>ayodele
        </Link>

        <ul className={styles.navLinks}>
          {navItems.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className={`${styles.navLink} ${isActive(href) ? styles.active : ''}`}
                aria-current={isActive(href) ? 'page' : undefined}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <LiveClock />

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.paletteBtn}
            onClick={() => globalThis.dispatchEvent(new Event('open-command-palette'))}
            aria-label="Open command palette"
          >
            <Search size={15} aria-hidden="true" />
            <span className={styles.kbd}>⌘K</span>
          </button>
          <ThemeToggle />
          <Link href="/#contact" className={`${styles.hireBtn} cta-glow`}>
            Hire me
          </Link>

          <button
            ref={toggleRef}
            onClick={() => setIsMenuOpen((open) => !open)}
            className={styles.menuToggle}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div
          id="mobile-nav"
          ref={menuRef}
          className={styles.mobileMenu}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <ul className={styles.mobileNavLinks}>
            {navItems.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`${styles.mobileNavLink} ${isActive(href) ? styles.active : ''}`}
                  aria-current={isActive(href) ? 'page' : undefined}
                  onClick={closeMenu}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/#contact"
                className={`${styles.mobileHireBtn} cta-glow`}
                onClick={closeMenu}
              >
                Hire me
              </Link>
            </li>
          </ul>
        </div>
      )}
      <ScrollProgress />
    </header>
  );
};
