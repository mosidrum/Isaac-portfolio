'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaTimes } from 'react-icons/fa';
import { BsSun, BsMoon } from 'react-icons/bs';
import styles from './navbar.module.css';
import { GotoLink } from '../GotoLink';
import { navItems } from '../../utils';

export const Navbar = () => {
  const [hasOpen, setHasOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Initialize theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme as 'light' | 'dark');
    document.documentElement.className = savedTheme;
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.className = newTheme;
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link
          href="/"
          className={`${styles.title} text-decoration-none`}
          style={{ fontFamily: 'Ole, cursive' }}
        >
          Isaac
        </Link>
        <div className={styles.items}>
          {navItems.map((item, index) => (
            <GotoLink href={item.link} title={item.name} key={index} />
          ))}
        </div>
        <div className={styles.menu}>
          {hasOpen ? (
            <FaTimes size={24} onClick={() => setHasOpen(!hasOpen)} />
          ) : (
            <AiOutlineMenu size={24} onClick={() => setHasOpen(!hasOpen)} />
          )}
        </div>
        <button onClick={toggleTheme} className={styles.toggle} aria-label="Toggle theme">
          {theme === 'light' ? <BsMoon size={16} /> : <BsSun size={16} />}
        </button>
      </div>
      {hasOpen && (
        <div className={styles.dropdown}>
          {navItems.map((item, index) => (
            <Link href={item.link} key={index} onClick={() => setHasOpen(false)}>
              {item.name}
            </Link>
          ))}
          <button onClick={toggleTheme} className={styles.toggle2} aria-label="Toggle theme">
            {theme === 'light' ? <BsMoon size={16} color="white" /> : <BsSun size={16} />}
          </button>
        </div>
      )}
    </div>
  );
};
