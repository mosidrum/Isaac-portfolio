import type { BlogPost } from './types';

/**
 * Technical blog posts demonstrating thought leadership and expertise.
 * Content focuses on architectural decisions and engineering insights.
 */
export const blogPosts: BlogPost[] = [
  {
    title: 'Svelte vs SolidJS: A Technical Comparison',
    excerpt:
      'An in-depth analysis of two reactive frameworks challenging React\'s dominance. Explores compilation strategies, reactivity models, and performance trade-offs for production applications.',
    url: 'https://medium.com/@mosiokanga/sevelte-and-solidjs-9acdf634ad33',
    readTime: '3 min',
    publishedAt: 'Jun 27, 2024',
    tags: ['Frontend', 'Architecture', 'Performance']
  },
  {
    title: 'Sharding vs Partitioning: Database Scaling Strategies',
    excerpt:
      'Breaking down horizontal scaling approaches for distributed systems. Covers when to shard, partitioning strategies, and the operational complexity trade-offs of each approach.',
    url: 'https://medium.com/@mosiokanga/sharding-vs-partitioning-ed2b7e4708b6',
    readTime: '4 min',
    publishedAt: 'Feb 9, 2024',
    tags: ['Backend', 'Databases', 'Scale']
  },
  {
    title: 'Key Technical Lessons from Production Systems',
    excerpt:
      'Reflections on hard-won lessons from building and maintaining production software. Covers debugging strategies, code quality under pressure, and sustainable engineering practices.',
    url: 'https://medium.com/@mosiokanga/biggest-technical-lesson-i-have-learned-as-a-developer',
    readTime: '5 min',
    publishedAt: 'Jun 17, 2023',
    tags: ['Engineering', 'Best Practices']
  }
];
