import styles from './card.module.css';

type CardProps = {
  title?: string;
  description?: string;
  language?: 'typescript' | 'javascript';
};

export const Card = ({ title, description, language }: CardProps) => (
  <div className={styles.card}>
    <div className="font-bold">{title}</div>
    <div>{description}</div>
    <div className="d-flex align-items-center gap-1">
      <div className={language === 'typescript' ? styles.typescript : styles.javascript} />
      <div>{language}</div>
    </div>
  </div>
);
