import type { Experience } from './types';

import lampstandLogo from '../assets/images/lampstand-logo.png';
import salesplatLogo from '../assets/images/salesplat.jpeg';
import euaLogo from '../assets/images/eua.jpeg';

export const experiences: Experience[] = [
  {
    company: 'Relaystack',
    role: 'Full-Stack Engineer',
    period: 'Jan 2026 – Present',
    url: 'https://relaystack.com',
    highlights: [
      'Engineered the core agent skill-routing system in TypeScript/Node.js, parsing natural-language goals and dispatching tasks to domain-specific AI modules — eliminating manual prompt loops.',
      'Implemented persistent agent memory using Redis (session state) and PostgreSQL (long-term context), enabling personalised goal tracking and context-aware AI responses across sessions.',
      'Integrated OpenAI tool calling to power multi-step execution pipelines, automating content drafting, prospect identification, and scheduling within a single agent session.',
      'Established a TypeScript monorepo with shared Zod validation schemas across frontend and API layers, reducing interface-mismatch bugs and accelerating feature delivery.'
    ]
  },
  {
    company: 'Lampstand',
    logo: lampstandLogo,
    role: 'Full-Stack Engineer',
    period: 'Apr 2024 – Dec 2025',
    url: 'https://www.linkedin.com/company/lampstand-io/',
    highlights: [
      'Architected a React Native reading app and job board in a shared monorepo with a Storybook component library, cutting estimated frontend development time by ~30% through standardised UI patterns.',
      'Designed and built REST APIs for book management and file operations with AWS S3 integration, enforcing server-side validation for secure, reliable upload/download workflows.',
      'Built the React Native reading app with embedded user telemetry (session tracking, reading progress), driving measurable engagement uplift and informing data-backed product decisions.',
      'Hardened CI/CD pipelines with GitLab CI and Jest unit/integration tests, catching regressions before production and reducing deployment failures.'
    ]
  },
  {
    company: 'Salesplat Technologies',
    logo: salesplatLogo,
    role: 'Full-Stack Engineer',
    period: 'Jan 2023 – Mar 2024',
    url: 'https://www.linkedin.com/company/salesplat/',
    highlights: [
      'Integrated React frontends with Node.js APIs using React Query, eliminating redundant network requests and improving perceived load performance across the application.',
      'Implemented Redis-based caching for high-traffic endpoints, reducing average API response times and relieving database load during peak traffic periods.',
      'Authored Jest integration tests validating API contracts across critical user flows, improving deployment confidence and cutting post-release production incidents.'
    ]
  },
  {
    company: 'eUniversity Africa',
    logo: euaLogo,
    role: 'Frontend Engineer',
    period: 'Mar 2022 – Dec 2022',
    url: 'https://www.linkedin.com/company/euniversity-africa/',
    highlights: [
      'Built responsive student dashboards with React and Tailwind CSS, leveraging SWR for real-time data fetching and significantly improving perceived page responsiveness.',
      'Refactored legacy frontend components for maintainability and WCAG 2.1 accessibility compliance, broadening usability across diverse student demographics.',
      'Wrote Jest test suites for critical UI flows, raising code reliability and enabling smoother knowledge transfer during team handoffs.'
    ]
  }
];
