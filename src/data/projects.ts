import type { Project } from './types';

export const projects: Project[] = [
  {
    slug: 'relaystack',
    title: 'Relaystack',
    description:
      'Built the core engineering infrastructure for an AI agent platform that routes natural-language goals to domain-specific execution modules — not just conversation, but real outcomes.',
    impact:
      'Eliminated manual prompt loops and enabled multi-step AI workflows across content drafting, prospect identification, and scheduling in a single agent session.',
    techStack: ['TypeScript', 'Node.js', 'React', 'Redis', 'PostgreSQL', 'OpenAI API', 'Zod'],
    liveUrl: 'https://relaystack.io',
    featured: true,
    role: 'Full-Stack Engineer',
    timeline: 'Jan 2026 – Present',
    category: 'Web · AI',
    overview:
      'Relaystack is an AI platform that executes real-world outcomes through composable, installable skills — not just conversation. I joined as a full-stack engineer responsible for building the core agent infrastructure: the system that actually makes things happen when a user gives the AI a goal.',
    constraint:
      'Most AI products stop at generating text. The hard part is building agents that reliably dispatch tasks to the right modules, maintain context across sessions, and execute multi-step workflows without losing state or producing unpredictable output. Every skill needs to be testable, recoverable, and auditable.',
    features: [
      {
        title: 'Skill-Routing Engine',
        body: 'Engineered a TypeScript/Node.js system that parses natural-language goals and dispatches tasks to domain-specific AI modules. Each skill exposes a typed contract so the router can match intent to capability without ambiguity — eliminating manual prompt loops entirely.'
      },
      {
        title: 'Persistent Agent Memory',
        body: 'Implemented a two-tier memory layer: Redis for fast session state (what the agent is doing right now) and PostgreSQL for long-term context (what it has learned about a user\'s goals over time). This enables genuinely personalised, context-aware responses across sessions rather than starting from scratch each time.'
      },
      {
        title: 'Multi-Step Execution Pipelines',
        body: 'Integrated OpenAI tool calling to power multi-step execution pipelines — the agent can draft content, identify prospects, and schedule follow-ups all within a single session, with each step informed by the results of the last.'
      },
      {
        title: 'Monorepo Architecture',
        body: 'Established a TypeScript monorepo with shared Zod validation schemas across frontend and API layers. This single source of truth for data contracts reduced interface-mismatch bugs to near zero and significantly accelerated feature delivery for the broader team.'
      }
    ],
    closingStatement:
      'Relaystack is currently building toward its first production release. The infrastructure is designed to support an ecosystem of installable skills — each one a composable unit of real-world capability.'
  },
  {
    slug: 'codepop',
    title: 'CodePop — AI Code Intelligence',
    description:
      'Built a fullstack AI-powered developer tool that allows engineers to paste code and instantly receive clear explanations, generate solutions for algorithms, and debug issues with contextual understanding.',
    impact:
      'Improved developer productivity by reducing time spent understanding unfamiliar code, debugging errors, and solving coding challenges through real-time AI-assisted workflows.',
    techStack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Express', 'OpenAI API', 'Vercel'],
    liveUrl: 'https://codepop-one.vercel.app/',
    featured: true,
    role: 'Solo Builder',
    timeline: '2025',
    category: 'Web · AI',
    overview:
      'CodePop is a developer productivity tool built around a simple premise: engineers spend a disproportionate amount of time understanding code they didn\'t write. I built CodePop to compress that loop — paste any code, get an instant explanation, a fix, or a generated solution.',
    constraint:
      'The challenge was making AI responses feel like a senior engineer had looked at your code, not a generic chatbot. The prompting strategy and context management had to be precise enough to produce useful, specific output rather than vague suggestions.',
    features: [
      {
        title: 'Contextual Code Explanations',
        body: 'Engineers paste any snippet and receive plain-English explanations structured by complexity — high-level intent first, then line-by-line detail where it matters. The prompt engineering was designed to mirror how a senior dev would actually walk through unfamiliar code.'
      },
      {
        title: 'Algorithm Solution Generator',
        body: 'Users can describe a problem and receive a working, idiomatic solution with explanation of the approach. The system prompts enforce language-specific best practices so output is ready to use, not just conceptually correct.'
      },
      {
        title: 'Contextual Debugging',
        body: 'Paste broken code with or without an error message and receive a diagnosis with a corrected version. The model is prompted to explain why the bug occurred, not just fix it — reinforcing learning rather than producing copy-paste dependency.'
      }
    ],
    closingStatement:
      'CodePop demonstrated how careful prompt engineering and clean UX can turn a raw LLM into a genuinely useful productivity tool. The biggest lesson: the interface design matters as much as the AI layer.'
  },
  {
    slug: 'lampstand-mobile',
    title: 'Lampstand Mobile App',
    description:
      'Core contributor on a personalised mobile reading app focused on personal growth and habit formation. Unblocked long-standing tickets and delivered critical user-facing features including the reader theme system.',
    impact:
      'Significantly reduced the time required to ship to both the App Store and Play Store by closing delayed feature work and stabilising release blockers.',
    techStack: ['React Native', 'TypeScript', 'PostgreSQL', 'Expo', 'Docker', 'TypeORM', 'Express'],
    liveUrl: 'https://lampstand.io/',
    androidUrl: 'https://play.google.com/store/apps/details?id=com.lampstand.mobile&hl=en',
    iosUrl: 'https://apps.apple.com/ng/app/lampstand/id6749466766',
    featured: true,
    role: 'Full-Stack Engineer',
    timeline: 'Apr 2024 – Dec 2025',
    category: 'Mobile · Cross-Platform',
    overview:
      'Lampstand is a personal growth reading app with curated content, habit tracking, and a premium reading experience. I joined as a full-stack engineer during a critical period — the team had accumulated feature debt that was blocking the release to both the App Store and Play Store.',
    constraint:
      'The primary constraint was time: existing tickets had been open for months and the release was behind schedule. The challenge was not just building features, but identifying which work was genuinely blocking the release and moving fast without introducing new regressions.',
    features: [
      {
        title: 'Reader Theme System',
        body: 'Designed and built the in-app reader theme system — light, dark, and sepia modes with font-size controls. This was one of the long-standing tickets blocking the release and required threading state across the React Native rendering pipeline and persisting preferences to the local device.'
      },
      {
        title: 'Shared Component Library',
        body: 'Architected the frontend in a shared monorepo with a Storybook component library, cutting estimated development time for new UI features by approximately 30% through standardised, documented UI patterns accessible to the full team.'
      },
      {
        title: 'User Telemetry & Analytics',
        body: 'Embedded session tracking and reading progress analytics into the app, giving the product team measurable engagement data for the first time. This directly informed data-backed decisions about which content formats and features to prioritise post-launch.'
      }
    ],
    closingStatement:
      'The app shipped to both the App Store and Play Store. Working within a deadline-driven environment sharpened my ability to triage work effectively — knowing which features are release-critical and which can wait is as important as the building itself.'
  },
  {
    slug: 'lampstand-marketing',
    title: 'Lampstand Marketing Platform',
    description:
      'Led frontend development for a high-traffic marketing platform, implementing performance-optimised React components and establishing design system patterns that reduced development time for new features.',
    impact: 'Improved page load performance by 35% through code splitting and lazy loading strategies.',
    techStack: ['React', 'TypeScript', 'Next.js', 'Storybook', 'Jest'],
    liveUrl: 'https://lampstand.io/',
    featured: true,
    role: 'Frontend Engineer',
    timeline: 'Apr 2024 – Dec 2025',
    category: 'Web · Marketing',
    overview:
      'Alongside the mobile app, Lampstand needed a high-performance marketing web platform to drive acquisition. I led the frontend development — building a system that had to load fast, look polished, and be maintainable by a small team over time.',
    constraint:
      'The platform needed to hit strong Core Web Vitals scores while remaining easy to update. A slow marketing page directly affects conversion rates, and a brittle codebase means every content change becomes an engineering task.',
    features: [
      {
        title: 'Performance Optimisation',
        body: 'Implemented code splitting, lazy loading, and image optimisation strategies that improved page load performance by 35%. Every component was audited against Lighthouse scores and bundle size targets before shipping.'
      },
      {
        title: 'Design System',
        body: 'Established a component library with Storybook documentation, giving the team a single source of truth for UI patterns. New pages and features could be assembled from existing components rather than built from scratch each time.'
      },
      {
        title: 'Test Coverage',
        body: 'Wrote Jest unit and integration tests for all critical UI flows. The test suite gave the team confidence to ship quickly without manual regression testing slowing down the release cadence.'
      }
    ],
    closingStatement:
      'The platform became the primary acquisition channel for Lampstand\'s App Store and Play Store growth. Performance work at the marketing layer has a direct, measurable impact on the business — a satisfying outcome.'
  },
  {
    slug: 'url-shortener',
    title: 'URL Shortener Service',
    description:
      'Designed and implemented a scalable URL shortening service with analytics tracking, rate limiting, and collision-resistant hash generation. Built with clean architecture principles for maintainability.',
    impact: 'Handles high-throughput requests with sub-100ms response times.',
    techStack: ['Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker', 'Next.js', 'Jest'],
    sourceUrl: 'https://github.com/mosidrum/url_shortner',
    featured: true,
    role: 'Solo Builder',
    timeline: '2024',
    category: 'Web · Backend',
    overview:
      'A URL shortening service built from first principles — not as a tutorial project, but as an exercise in designing a system that handles real throughput requirements cleanly. The goal was sub-100ms response times under load, with reliable analytics and collision-resistant short codes.',
    constraint:
      'Hash collisions are a deceptively tricky problem at scale. The system also needed to handle traffic spikes without hammering the database on every redirect — which required a thoughtful caching strategy rather than just adding Redis as an afterthought.',
    features: [
      {
        title: 'Collision-Resistant Hash Generation',
        body: 'Implemented a hash generation strategy that produces short, URL-safe codes while guaranteeing uniqueness across high write volumes. The algorithm handles collision detection gracefully without requiring database locks or sacrificing throughput.'
      },
      {
        title: 'Redis-Backed Caching',
        body: 'Hot URLs are cached in Redis on first access, meaning the database is only hit on cache misses. This keeps redirect latency under 100ms even under heavy load and dramatically reduces read pressure on PostgreSQL.'
      },
      {
        title: 'Rate Limiting & Analytics',
        body: 'Per-user rate limiting prevents abuse, and every redirect is logged with timestamp, referrer, and user-agent data — giving a real analytics layer on top of what is otherwise a stateless operation.'
      }
    ],
    closingStatement:
      'Building this service from scratch clarified how much architecture work hides inside products that look trivially simple. Short URLs are a solved problem — until you care about performance, reliability, and observability.'
  },
  {
    slug: 'travel-platform',
    title: 'Travel Platform Landing Page',
    description:
      'Architected a responsive, accessible landing page with optimised Core Web Vitals scores. Implemented component-driven development with comprehensive test coverage.',
    impact: 'Achieved 95+ Lighthouse scores across all metrics.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://hilink-landing-page-beta.vercel.app',
    sourceUrl: 'https://github.com/mosidrum/hilink_landing_page',
    featured: true,
    role: 'Frontend Engineer',
    timeline: '2023',
    category: 'Web · Frontend',
    overview:
      'A high-fidelity landing page for a travel platform, built to demonstrate what a polished, performant frontend looks like when accessibility and Core Web Vitals are treated as first-class requirements rather than afterthoughts.',
    constraint:
      'Landing pages are often built fast and forgotten. The challenge here was treating it as a production-grade frontend — hitting 95+ across all Lighthouse categories while keeping the component structure clean enough to hand off to another developer.',
    features: [
      {
        title: 'Core Web Vitals',
        body: 'Optimised for all four Core Web Vitals metrics — LCP, FID, CLS, and FCP — achieving 95+ Lighthouse scores across performance, accessibility, best practices, and SEO. Every image was sized, every font was preloaded, and every layout shift was eliminated.'
      },
      {
        title: 'Component-Driven Architecture',
        body: 'Built with a strict component hierarchy — each section isolated, each component responsible for a single visual unit. This makes the codebase easy to scan and modify without risking unintended side effects across the page.'
      },
      {
        title: 'Accessibility First',
        body: 'Full semantic HTML structure, keyboard navigation support, ARIA attributes where needed, and sufficient colour contrast ratios throughout. Accessibility was not retrofitted — it was baked into every component from the start.'
      }
    ],
    closingStatement:
      'The discipline of building to a 95+ Lighthouse score changes how you write frontend code. Performance and accessibility constraints are not restrictions — they are the conditions that produce better engineering.'
  },
  {
    slug: 'quiz-app',
    title: 'Interactive Quiz Application',
    description:
      'Built a performant quiz application with dynamic question generation, state management, and real-time scoring. Focused on user experience and accessibility compliance.',
    impact: 'Engaging UX with smooth transitions and instant feedback.',
    techStack: ['React', 'TypeScript', 'Vercel'],
    liveUrl: 'https://ques-web-app.vercel.app/',
    sourceUrl: 'https://github.com/mosidrum/ques_web_app',
    role: 'Solo Builder',
    timeline: '2023',
    category: 'Web · Frontend',
    overview:
      'A dynamic quiz application built to explore complex React state management patterns — specifically the challenge of managing multi-step flows with branching state, real-time scoring, and smooth animated transitions.',
    constraint:
      'Quiz applications look simple but have surprisingly complex state: question order, answer state, score accumulation, timing, and transitions all need to be managed without creating a tangled update chain that produces inconsistent UI.',
    features: [
      {
        title: 'State Machine Design',
        body: 'Modelled the quiz flow as an explicit state machine — idle, active, answering, transitioning, complete — which made the component logic predictable and eliminated the class of bugs that come from booleans trying to represent mutually exclusive states.'
      },
      {
        title: 'Animated Transitions',
        body: 'Smooth enter/exit transitions between questions using CSS animations timed to the state machine transitions. The result feels fluid and intentional rather than the jarring flicker of a naive re-render.'
      },
      {
        title: 'Real-Time Scoring',
        body: 'Scores update immediately on answer selection with visual feedback — correct answers pulse green, incorrect answers reveal the right answer. Instant feedback is a core UX principle for learning applications.'
      }
    ],
    closingStatement:
      'A small project, but one that sharpened my thinking about state design in React. The state machine pattern I used here has since become my default approach for any multi-step UI flow.'
  }
];

export const featuredProjects = projects.filter((p) => p.featured);
