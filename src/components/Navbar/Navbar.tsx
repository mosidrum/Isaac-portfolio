'use client';

import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaTimes } from 'react-icons/fa';
import styles from './navbar.module.css';
import { GotoLink } from '../GotoLink';
import { navItems } from '../../utils';

export const Navbar = () => {
  const [hasOpen, setHasOpen] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link href="/" className={`${styles.title} text-decoration-none text-3xl `}>
          Isaac
        </Link>
        <div className={styles.items}>
          {navItems.map((item, index) => (
            <GotoLink href={item.link} title={item.name} key={index} />
          ))}
        </div>
        <div className={styles.menu}>
          {hasOpen ? (
            <FaTimes size={30} onClick={() => setHasOpen(!hasOpen)} />
          ) : (
            <AiOutlineMenu size={30} onClick={() => setHasOpen(!hasOpen)} />
          )}
        </div>
      </div>
      {hasOpen && <div className={styles.dropdown}>menu list</div>}
    </div>
  );
};
