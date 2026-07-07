import styles from './Capabilities.module.css';

const capabilities = [
  {
    area: 'Frontend',
    items: [
      'React · Next.js · TypeScript',
      'React Native · Expo',
      'Tailwind CSS · Redux · Zustand',
      'Storybook · React Hook Form'
    ]
  },
  {
    area: 'Backend & APIs',
    items: [
      'Node.js · Express · NestJS',
      'PostgreSQL · Redis · MongoDB · MySQL',
      'REST · GraphQL · WebSockets',
      'Prisma · TypeORM'
    ]
  },
  {
    area: 'AI & LLM',
    items: [
      'OpenAI API · tool calling',
      'RAG workflows · semantic search',
      'AI agents · prompt engineering',
      'pgvector · MCP'
    ]
  },
  {
    area: 'DevOps & Tooling',
    items: [
      'Docker · AWS (S3, EC2, RDS)',
      'GitLab CI · GitHub Actions',
      'Jest · Cypress · Vitest',
      'Git · Vercel'
    ]
  }
];

export const Capabilities = () => (
  <section className={styles.section}>
    <div className={styles.inner}>
      <p className={styles.sectionLabel}>Capabilities</p>
      <div className={styles.grid}>
        {capabilities.map(({ area, items }) => (
          <div key={area} className={styles.cell}>
            <h3 className={styles.area}>{area}</h3>
            <ul className={styles.items}>
              {items.map((item) => (
                <li key={item} className={styles.item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);
