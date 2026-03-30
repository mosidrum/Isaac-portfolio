import type { Project } from './types';

/**
 * Featured projects showcasing technical depth and business impact.
 * Each project emphasizes architecture decisions, scale, and outcomes.
 */
export const projects: Project[] = [
  {
    title: 'CodePop — AI Code Intelligence Platform',
    description:
      'Built a fullstack AI-powered developer tool that allows engineers to paste code and instantly receive clear explanations, generate solutions for algorithms, and debug issues with contextual understanding.',
    impact:
      'Improved developer productivity by reducing time spent understanding unfamiliar code, debugging errors, and solving coding challenges through real-time AI-assisted workflows.',
    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'Node.js',
      'Express',
      'LLM Integration',
      'OpenAI API',
      'Prompt Engineering',
      'AI Workflow Design',
      'REST APIs',
      'API Design',
      'Serverless Functions',
      'Vercel',
      'Git',
      'CI/CD'
    ],
    liveUrl: 'https://codepop-one.vercel.app/',
    featured: true
  },
  {
    title: 'Lampstand Mobile App (Cross-Platform)',
    description:
      'Worked as a core contributor on a personalized mobile reading app focused on personal growth and habit formation. Played a key role in accelerating the path to production by unblocking long-standing tickets and delivering critical user-facing features such as the reader theme system.',
    impact:
      'Significantly reduced the time required to ship to both the App Store and Play Store by closing delayed feature work and stabilizing release blockers—helping move the product from backlog to production faster.',
    techStack: [
      'React Native',
      'TypeScript',
      'PostgreSQL',
      'REST APIs',
      'Expo',
      'Docker',
      'TypeORM',
      'Express',
      'Storybook',
      'Heroku',
      'Git',
      'CI/CD'
    ],
    liveUrl: 'https://lampstand.io/',
    androidUrl: 'https://play.google.com/store/apps/details?id=com.lampstand.mobile&hl=en',
    iosUrl: 'https://apps.apple.com/ng/app/lampstand/id6749466766',
    featured: true
  },
  {
    title: 'Lampstand Marketing Platform',
    description:
      'Led frontend development for a high-traffic marketing platform, implementing performance-optimized React components and establishing design system patterns that reduced development time for new features.',
    impact:
      'Improved page load performance by 35% through code splitting and lazy loading strategies',
    techStack: ['React', 'TypeScript', 'Next.js', 'Storybook', 'Jest'],
    liveUrl: 'https://lampstand.io/',
    featured: true
  },
  {
    title: 'URL Shortener Service',
    description:
      'Designed and implemented a scalable URL shortening service with analytics tracking, rate limiting, and collision-resistant hash generation. Built with clean architecture principles for maintainability.',
    impact: 'Handles high-throughput requests with sub-100ms response times',
    techStack: [
      'Node.js',
      'TypeScript',
      'PostgreSQL',
      'Redis',
      'Docker',
      'NextJs',
      'Netlify',
      'Jest',
      'Render',
      'React'
    ],
    sourceUrl: 'https://github.com/mosidrum/url_shortner',
    featured: true
  },
  {
    title: 'Travel Platform Landing Page',
    description:
      'Architected a responsive, accessible landing page with optimized Core Web Vitals scores. Implemented component-driven development with comprehensive test coverage.',
    impact: 'Achieved 95+ Lighthouse scores across all metrics',
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://hilink-landing-page-beta.vercel.app',
    sourceUrl: 'https://github.com/mosidrum/hilink_landing_page',
    featured: true
  },
  {
    title: 'Interactive Quiz Application',
    description:
      'Built a performant quiz application with dynamic question generation, state management, and real-time scoring. Focused on user experience and accessibility compliance.',
    impact: 'Engaging UX with smooth transitions and instant feedback',
    techStack: ['React', 'TypeScript', 'Vercel'],
    liveUrl: 'https://ques-web-app.vercel.app/',
    sourceUrl: 'https://github.com/mosidrum/ques_web_app'
  },
  {
    title: 'Portfolio Platform',
    description:
      'This portfolio itself—built with Next.js 15, TypeScript, and modern CSS architecture. Demonstrates clean code practices, responsive design, and performance optimization.',
    impact: 'Fast, accessible, and maintainable codebase',
    techStack: ['Next.js', 'TypeScript', 'CSS Modules'],
    liveUrl: 'https://isaacayodele.vercel.app/',
    sourceUrl: 'https://github.com/mosidrum/Isaac-portfolio'
  }
];

export const featuredProjects = projects.filter((p) => p.featured);
