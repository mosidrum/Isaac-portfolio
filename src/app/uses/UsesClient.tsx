'use client';

import { useState } from 'react';
import { toolCategories } from '@/data';
import styles from './page.module.css';

const CATEGORY_ICONS: Record<string, string> = {
  'Hardware': '⌨',
  'Development Tools': '⌥',
  'Design & Collaboration': '⬡',
  'Testing & Quality': '◈',
};

const ALL = 'All';

export const UsesClient = () => {
  const [active, setActive] = useState(ALL);

  const tabs = [ALL, ...toolCategories.map((c) => c.category)];

  const visibleCategories =
    active === ALL
      ? toolCategories
      : toolCategories.filter((c) => c.category === active);

  const totalTools = toolCategories.reduce((acc, c) => acc + c.items.length, 0);

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <p className={styles.label}>[Uses]</p>
        <h1 className={styles.headline}>
          My setup &amp;<br />daily toolkit.
        </h1>
        <p className={styles.subtitle}>
          {totalTools} tools across {toolCategories.length} categories — everything I use to build, ship, and collaborate.
        </p>

        {/* Filter tabs */}
        <div className={styles.tabs} role="tablist" aria-label="Filter by category">
          {tabs.map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={active === tab}
              className={`${styles.tab} ${active === tab ? styles.tabActive : ''}`}
              onClick={() => setActive(tab)}
            >
              {tab === ALL ? tab : (CATEGORY_ICONS[tab] ?? '·') + ' ' + tab}
            </button>
          ))}
        </div>

        {/* Tool cards grid */}
        <div className={styles.grid}>
          {visibleCategories.map(({ category, items }) =>
            items.map(({ name, description }) => (
              <article key={`${category}-${name}`} className={styles.card}>
                <span className={styles.cardCategory}>
                  {CATEGORY_ICONS[category] ?? '·'} {category}
                </span>
                <h3 className={styles.cardName}>{name}</h3>
                <p className={styles.cardDesc}>{description}</p>
              </article>
            ))
          )}
        </div>

        <p className={styles.footer}>
          Inspired by{' '}
          <a href="https://uses.tech" target="_blank" rel="noopener noreferrer" className={styles.link}>
            uses.tech
          </a>
        </p>
      </div>
    </div>
  );
};
