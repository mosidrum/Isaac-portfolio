import styles from './card.module.css';

type CardProps = {
  title?: string;
  description?: string;
  language?: 'typescript' | 'javascript';
};

export const Card = ({ title, description, language }: CardProps) => (
  <div className={styles.card}>
    <div>URL Shortner</div>
    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, deserunt?</div>
    <div>Javascript</div>
  </div>
);
