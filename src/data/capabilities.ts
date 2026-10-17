import type { CapabilityGroup } from './types';

export const capabilities: CapabilityGroup[] = [
  {
    area: 'AI & LLM',
    items: [
      'OpenAI API, tool calling, MCP',
      'AI agents and skill routing',
      'RAG workflows, pgvector, semantic search',
      'Agent memory with Redis and Postgres'
    ]
  },
  {
    area: 'Backend & data',
    items: [
      'Node.js, Express, NestJS (BFF)',
      'PostgreSQL, Redis, MongoDB, MySQL',
      'REST, GraphQL, WebSockets',
      'Prisma, TypeORM, JWT, RBAC'
    ]
  },
  {
    area: 'Frontend',
    items: [
      'React, Next.js, TypeScript',
      'React Native, Expo',
      'Tailwind, CSS Modules, Storybook',
      'React Query, Redux, Zustand'
    ]
  },
  {
    area: 'Delivery',
    items: [
      'Docker, AWS (S3, EC2, RDS), Vercel',
      'GitLab CI, GitHub Actions',
      'Jest, Vitest, Cypress',
      'Monorepos, shared contracts, accessibility'
    ]
  }
];
