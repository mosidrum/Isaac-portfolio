import type { Experience } from './types';

import lampstandLogo from '../assets/images/lampstand-logo.png';
import salesplatLogo from '../assets/images/salesplat.jpeg';
import euaLogo from '../assets/images/eua.jpeg';
import microverseLogo from '../assets/images/microverse.jpeg';

/**
 * Professional experience data.
 * Each entry emphasizes ownership, impact, and technical leadership.
 */
export const experiences: Experience[] = [
  {
    company: 'Lampstand',
    logo: lampstandLogo,
    role: 'Full Stack Engineer',
    period: 'Apr 2024 – Present',
    url: 'https://www.linkedin.com/company/lampstand-io/',
    highlights: [
      'Architected cross-device reading-goal feature serving thousands of users',
      'Established CI/CD pipelines reducing deployment time by 40%',
      'Led frontend architecture decisions in monorepo environment'
    ]
  },
  {
    company: 'SalesPlat',
    logo: salesplatLogo,
    role: 'Full Stack Engineer',
    period: 'Jan 2024 – Apr 2024',
    url: 'https://www.linkedin.com/company/salesplat/',
    highlights: [
      'Bootstrapped job board backend with anonymous posting and bounty system',
      'Designed resilient REST APIs handling high-throughput operations',
      'Implemented secure authentication flows and file management patterns'
    ]
  },
  {
    company: 'eUniversity Africa',
    logo: euaLogo,
    role: 'Full Stack Engineer',
    period: 'Jul 2023 – Dec 2023',
    url: 'https://www.linkedin.com/company/euniversity-africa/',
    highlights: [
      'Delivered end-to-end features for educational platform',
      'Integrated observability and telemetry for product insights',
      'Reduced cycle time through TDD practices and clear API contracts'
    ]
  },
  {
    company: 'Microverse',
    logo: microverseLogo,
    role: 'Software Engineer',
    period: 'Mar 2023 – Sep 2023',
    url: 'https://www.linkedin.com/school/microverseinc/',
    highlights: [
      'Collaborated on production-grade applications in distributed teams',
      'Enforced code quality standards through rigorous code reviews',
      'Mentored junior developers on best practices and architecture patterns'
    ]
  }
];
