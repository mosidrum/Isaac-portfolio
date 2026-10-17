import type { Experience } from './types';

import lampstandLogo from '../assets/images/lampstand-logo.png';
import salesplatLogo from '../assets/images/salesplat.jpeg';
import euaLogo from '../assets/images/eua.jpeg';
import sageGreyLogo from '../assets/images/sage-grey-logo.png';
import relaystackLogo from '../assets/images/relaystack-logo.png';

export const experiences: Experience[] = [
  {
    company: 'Sage Grey Technologies',
    logo: sageGreyLogo,
    role: 'Product Lead',
    period: 'Aug 2026 – Present',
    product: 'Internet banking application',
    highlights: [
      'Led end-to-end delivery of an internet banking application: business requirements into scoped features, a prioritised backlog and a phased release plan.',
      'Drove the design of a NestJS Backend-for-Frontend (BFF) that wraps the Peerless core banking service, giving client apps one secure, consistent API layer.',
      'Planned the development cycle, broke features into engineering tasks and tracked delivery across product, backend and third-party integration workstreams.'
    ]
  },
  {
    company: 'Relaystack',
    logo: relaystackLogo,
    role: 'Full-Stack Engineer',
    period: 'Jan 2026 – Aug 2026',
    url: 'https://relaystack.io',
    product: 'AI operators that execute work',
    highlights: [
      'Engineered the agent skill-routing system in TypeScript/Node.js that parses natural-language goals and dispatches them to domain-specific modules (lead gen, social media, career coaching).',
      'Built persistent agent memory with Redis for session state and PostgreSQL for long-term context, and wired OpenAI tool calling into multi-step execution pipelines.',
      'Set up a TypeScript monorepo with shared types and Zod schemas across frontend and API, and designed JWT/RBAC-secured REST APIs.'
    ]
  },
  {
    company: 'Lampstand',
    logo: lampstandLogo,
    role: 'Full-Stack Engineer',
    period: 'Apr 2024 – Dec 2025',
    url: 'https://www.linkedin.com/company/lampstand-io/',
    product: 'Reading app and job board',
    highlights: [
      'Architected a React Native reading app and a job board in a shared monorepo with a Storybook component library (est. ~30% less frontend development time).',
      'Built book and file APIs with AWS S3, plus reading telemetry that gave the product team engagement data after launch.',
      'Delivered the job board backend (anonymous employer posting, bounty-based hiring) and hardened GitLab CI with Jest tests.'
    ]
  },
  {
    company: 'Salesplat Technologies',
    logo: salesplatLogo,
    role: 'Full-Stack Engineer',
    period: 'Jan 2023 – Mar 2024',
    url: 'https://www.linkedin.com/company/salesplat/',
    product: 'AuxHR hiring platform',
    highlights: [
      'Integrated React frontends with Node.js APIs using React Query, and added Redis caching on high-traffic endpoints.',
      'Wrote Jest integration tests for API contracts and improved client-side error handling and retry logic for unstable networks.',
      'Later returned to stabilise the abandoned AuxHR frontend so the hiring team could use the platform operationally.'
    ]
  },
  {
    company: 'eUniversity Africa',
    logo: euaLogo,
    role: 'Frontend Engineer (Contract)',
    period: 'Mar 2022 – Dec 2022',
    url: 'https://www.linkedin.com/company/euniversity-africa/',
    product: 'Student dashboards',
    highlights: [
      'Built responsive React/Tailwind student dashboards with SWR, and refactored legacy UI toward WCAG 2.1 accessibility.',
      'Wrote Jest suites for critical UI flows to support smoother handoffs.'
    ]
  }
];
