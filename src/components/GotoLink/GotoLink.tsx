import Link, { LinkProps } from 'next/link';
import styles from './goto.module.css';

type GotoLinkProps = {
  href: string;
  title: string;
  underline?: boolean;
} & LinkProps;

export const GotoLink = ({ href, title, underline = true }: GotoLinkProps) => (
  <Link href={href} className={underline ? styles.underline : ''}>
    {title}
  </Link>
);
