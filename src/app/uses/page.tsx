import { toolCategories } from '@/data';
import styles from './page.module.css';

const UsesPage = () => (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Uses</h1>
        <p className={styles.subtitle}>
          My development environment, tools, and hardware setup. Inspired by{' '}
          <a
            href="https://uses.tech"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            uses.tech
          </a>
          .
        </p>
      </header>

      <div className={styles.categories}>
        {toolCategories.map(({ category, items }) => (
          <section key={category} className={styles.category}>
            <h2 className={styles.categoryTitle}>{category}</h2>
            <div className={styles.items}>
              {items.map(({ name, description }) => (
                <article key={name} className={styles.item}>
                  <h3 className={styles.itemName}>{name}</h3>
                  <p className={styles.itemDesc}>{description}</p>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
);

export default UsesPage;
