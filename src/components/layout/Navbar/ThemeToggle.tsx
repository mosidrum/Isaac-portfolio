'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { getTheme, toggleTheme, type Theme } from '@/lib/theme';
import styles from './Navbar.module.css';

export const ThemeToggle = () => {
  const [theme, setThemeState] = useState<Theme | null>(null);

  useEffect(() => {
    setThemeState(getTheme());
  }, []);

  return (
    <button
      type="button"
      className={`${styles.iconBtn} ${styles.themeToggle}`}
      onClick={() => setThemeState(toggleTheme())}
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {theme === 'light' ? <Moon size={16} /> : null}
      {theme === 'dark' ? <Sun size={16} /> : null}
    </button>
  );
};
