'use client';

import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './goto.module.css';

type GotoLinkProps = {
  href: string;
  title: string;
  type?: string;
} & LinkProps;

export const GotoLink = ({ href, title, type }: GotoLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`${isActive ? styles.active : ''} text-decoration-none ${type === 'footer' ? 'text-tetiary' : 'text-white'}`}
    >
      {title}
    </Link>
  );
};
