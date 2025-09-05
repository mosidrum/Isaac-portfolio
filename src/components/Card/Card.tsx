import Link from 'next/link';
import styles from './card.module.css';

type CardProps = {
  title?: string;
  description?: string;
  language?: 'typescript' | 'javascript';
  link?: string;
  githubLink?: string;
};

export const Card = ({ title, description, language, link, githubLink }: CardProps) => (
  <div className={styles.card}>
    <div className="font-bold">{title}</div>
    <div>{description}</div>
    <div className="d-flex align-items-center gap-1">
      <div className={language === 'typescript' ? styles.typescript : styles.javascript} />
      <div>{language}</div>
    </div>
    <div className="d-flex gap-1 align-items-center border10">
      <Link
        href={link || ''}
        className={styles.buttons}
        target={link && '_blank'}
        rel="noopener noreferrer"
      >
        Visit
      </Link>
      <Link
        href={githubLink || ''}
        className={styles.buttons}
        target="_blank"
        rel="noopener noreferrer"
      >
        Source
      </Link>
    </div>
  </div>
);
