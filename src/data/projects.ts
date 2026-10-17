import type { Project } from './types';

import auxhrImage from '../assets/images/work/auxhr.png';
import auxhrSiteImage from '../assets/images/work/auxhr-site.png';
import auxhrLogo from '../assets/images/auxhr-logo.png';
import relaystackLogo from '../assets/images/relaystack-logo.png';
import lampstandImage from '../assets/images/work/lampstand.png';
import relaystackImage from '../assets/images/work/relaystack.png';

export const projects: Project[] = [
  {
    slug: 'sage-grey-banking',
    blueprint: 'sage-grey-banking',
    title: 'Internet banking at Sage Grey',
    description:
      'Leading delivery of an internet banking application, and the design of a NestJS Backend-for-Frontend that sits in front of a core banking service.',
    impact:
      'Client apps get one secure, consistent API layer instead of integrating with the core banking service directly.',
    techStack: ['NestJS', 'TypeScript', 'Node.js', 'REST APIs'],
    featured: true,
    role: 'Product Lead',
    timeline: 'Aug 2026 – Present',
    category: 'Fintech · Backend',
    metrics: [
      { value: 'Product Lead', label: 'scope, backlog and release plan' },
      { value: 'NestJS BFF', label: 'over Peerless core banking' }
    ],
    context:
      'Sage Grey Technologies builds practical digital solutions across sectors. This project is an internet banking application that has to connect to the Peerless core banking service.',
    problem:
      'Client applications should not each integrate with a core banking service directly. They need one secure, consistent API, and delivery has to be planned so that product, backend and third-party integration work stay aligned.',
    roleDetail:
      'I lead product delivery. I translate business requirements into scoped features, a prioritised backlog and a phased release plan, break features into engineering tasks, assign them across the team and track progress.',
    approach:
      'A NestJS Backend-for-Frontend wraps and integrates with the core banking service, giving client apps a single API layer. I drove its design, and worked across the product, backend and third-party integration workstreams to unblock developers and keep the build aligned with business requirements.',
    decisions: [
      {
        title: 'A BFF instead of direct core access',
        body: 'The BFF isolates client apps from the core banking service, so the front ends depend on one consistent contract.'
      },
      {
        title: 'Phased release plan',
        body: 'Scoping features into a prioritised backlog and phased releases keeps a fully remote team shipping against business requirements.'
      }
    ],
    outcome:
      'The project is in active delivery. Details are kept general here out of respect for the employer and the client.',
    closingStatement:
      'Product leadership and backend design on the same project: scope the work, then design the layer it depends on.'
  },
  {
    slug: 'relaystack',
    blueprint: 'relaystack',
    metrics: [
      { value: '3', label: 'engineers on the team' },
      { value: '~8 mo', label: 'tenure, Jan to Aug 2026' },
      { value: 'Beta', label: 'Social Growth Manager live' }
    ],
    title: 'Relaystack',
    description:
      'Contributed as a full-stack engineer on a three-person team building AI operators that execute multi-step work instead of stopping at chatbot replies.',
    impact:
      'Helped ship operator experiences for social growth, lead generation, and career workflows, with Social Growth Manager live in public beta.',
    techStack: ['TypeScript', 'Node.js', 'React', 'Redis', 'PostgreSQL', 'OpenAI API', 'Zod'],
    liveUrl: 'https://relaystack.io',
    logo: relaystackLogo,
    featured: true,
    role: 'Full-Stack Engineer',
    timeline: 'Jan 2026 – Aug 2026',
    category: 'Web · AI',
    screenshots: [
      {
        src: relaystackImage,
        alt: 'Relaystack product page describing AI operators that execute work',
        caption: 'Public product: three operators, one live in beta.'
      }
    ],
    context:
      'Relaystack is an AI-operator product. Users switch on a specialist, answer setup questions once, and the operator carries out the job in the open — then stops for approval before anything is posted or sent. The public product includes Social Growth Manager (beta), Lead Generator, and Career Operator.',
    problem:
      'Most AI tools generate advice and leave the actual work with the user. The product needed workflow experiences that plan, draft, and queue real outputs across social, outreach, and career tasks, while keeping a human in control of what goes out.',
    roleDetail:
      'I joined a small engineering team of three as a full-stack engineer for about eight months. I did not build the entire platform. I contributed to the operator experiences, shared frontend/API contracts, and the execution layer that turns a goal into a sequence of tool calls rather than a single chat reply.',
    challenge:
      'The hard part is reliability: routing a goal to the right operator, keeping session and longer-term context, and running multi-step tool-calling pipelines without losing state or producing unreviewable output. The work had to stay testable and recoverable inside a small team moving quickly.',
    approach:
      'I worked across the TypeScript/Node.js skill-routing path, Redis session state and PostgreSQL longer-term context, OpenAI tool calling for multi-step pipelines, and shared Zod schemas so frontend and API layers used the same contracts. On the product side I helped shape operator UX for Social Growth Manager, Lead Generator, and Career Operator.',
    decisions: [
      {
        title: 'Execute, then wait for approval',
        body: 'Operators do the work in the open, then stop. Nothing posts or sends by default. That constraint shaped both the workflow UI and the execution pipeline: every consequential step has to be inspectable.'
      },
      {
        title: 'Shared contracts over ad-hoc payloads',
        body: 'Shared Zod schemas across frontend and API reduced mismatch bugs in a three-person team. The trade-off is more upfront schema work in exchange for safer iteration on operator features.'
      },
      {
        title: 'Two-tier memory',
        body: 'Redis holds what the operator is doing now. PostgreSQL holds longer-term context about the user. That split keeps session work fast without treating every request as a cold start.'
      }
    ],
    outcome:
      'Social Growth Manager is live in public beta. Lead Generator and Career Operator are still being built. Relaystack publicly describes itself as a small team of AI operators that finish the job and wait for a yes.',
    features: [
      {
        title: 'Social Growth Manager',
        body: 'Plans, writes, and queues posts in the user’s voice, then waits for approval. This is the operator currently in public beta.'
      },
      {
        title: 'Lead Generator',
        body: 'Finds people who fit, checks they are real, and drafts intros. Publicly listed as in development.'
      },
      {
        title: 'Career Operator',
        body: 'Finds roles, tailors applications, and prepares outreach. Publicly listed as in development.'
      }
    ],
    closingStatement:
      'The work was about shipping AI product inside a small team: shared contracts, inspectable execution, and user-facing operator flows — not a solo platform rewrite.'
  },
  {
    slug: 'auxhr',
    blueprint: 'auxhr',
    metrics: [
      { value: 'Top', label: 'public contributor, AuxHR frontend repo' },
      { value: 'Live', label: 'auxhr.com, used by the hiring team' }
    ],
    title: 'AuxHR',
    description:
      'Returned to an abandoned hiring platform at Salesplat, stabilised the frontend, and rebuilt recruiter workflows until the product could be used for hiring again.',
    impact:
      'AuxHR is live at auxhr.com and is the hiring product Salesplat markets today. The hiring team now uses it operationally.',
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Material UI', 'Sass', 'Redux'],
    liveUrl: 'https://auxhr.com',
    logo: auxhrLogo,
    cardImage: auxhrSiteImage,
    featured: true,
    role: 'Full-Stack Engineer',
    timeline: 'Salesplat, then later revival',
    category: 'Web · Hiring',
    screenshots: [
      {
        src: auxhrSiteImage,
        alt: 'AuxHR landing page: Hire better. Move faster. Build stronger teams.',
        caption: 'Public product site. Recruiter workflows live behind login.',
        device: 'browser'
      },
      {
        src: auxhrImage,
        alt: 'AuxHR marketing site for the AI recruitment platform',
        caption: 'Public product site. Recruiter workflows live behind login.'
      }
    ],
    context:
      'AuxHR is Salesplat’s AI hiring product. Recruiters post roles, candidates apply, and the system scores fit, runs screening, and moves people through a hiring pipeline. I worked on it during my full-time tenure at Salesplat (Jan 2023 – Mar 2024) and later returned to bring the abandoned project back to an operational state.',
    problem:
      'The original frontend had been left in a state the hiring team could not depend on. Recruiter flows around applicants, screening, and match scoring were incomplete or unreliable. The job was not a greenfield rewrite. It was to take ownership of an existing Vite/React codebase, make it stable, and ship the workflows a hiring team actually needs.',
    roleDetail:
      'I am a top public contributor on the AuxHR frontend (Salesplatpro/frontend). The work covered recruiter-facing hiring UI, application state, screening, and the surrounding UX: loading, empty, and error states, form validation, and layout. I did not claim the whole product — the repository has several contributors — but I owned the revival of the recruiter product surface.',
    challenge:
      'Stabilising an existing hiring app means inheriting architecture decisions, incomplete recruiter flows, and a dual audience (recruiters and talent). Changes had to land without breaking apply-wizard or auth paths. Match scoring is asynchronous, so the UI has to poll and remain honest while a verdict is pending.',
    approach:
      'The later work focused on the hiring loop: keep the applicants table usable, show CV match percentage on the score ring, load screening answers from the application payload, poll while a match verdict is pending, generate AI match once instead of letting recruiters regenerate endlessly, and present assessment answers as a decision thread. Alongside that: focus the first invalid field after a failed submit, share profile-completion errors with the form, and tighten dashboard layout and loading states.',
    decisions: [
      {
        title: 'Stabilise the existing stack',
        body: 'The app is Vite, React, TypeScript, Tailwind, Material UI, Sass, and Redux. Replacing it would have delayed hiring. The decision was to keep the stack and make the recruiter product reliable inside it.'
      },
      {
        title: 'Poll pending match verdicts',
        body: 'AI matching is not instant. Rather than blocking the recruiter on a spinner with no feedback, the UI polls the application while a verdict is pending and then shows the score.'
      },
      {
        title: 'Generate match once',
        body: 'Removing recruiter regenerate reduced noisy re-runs of the AI match. One generated verdict, then a decision. That is slower to “play with” and easier to trust in a hiring workflow.'
      }
    ],
    outcome:
      'The product is live at auxhr.com. Salesplat markets AuxHR as its hiring platform. I later returned, stabilised the abandoned project, and brought recruiter workflows to a point where the hiring team could use the platform operationally. That operational use is my account of the outcome, not an independently audited usage metric.',
    features: [
      {
        title: 'Applicants and match scoring',
        body: 'Recruiter applicants table, CV match percentage on the score ring, and a single generated AI match rather than repeated regenerate actions.'
      },
      {
        title: 'Screening and assessment',
        body: 'Screening answers loaded from the application payload, polling while a match verdict is pending, and assessment answers shown as a chat-style decision thread.'
      },
      {
        title: 'Form and dashboard reliability',
        body: 'Focus the first invalid field after a failed submit, surface profile-completion errors on the form, and keep dashboard loading and layout states usable.'
      }
    ],
    closingStatement:
      'This was ownership of an existing system: pick it up, make the hiring loop work, and leave the team with a product they can run — not a demo of a new stack.'
  },
  {
    slug: 'lampstand-mobile',
    blueprint: 'lampstand-mobile',
    metrics: [
      { value: '~30%', label: 'est. less frontend dev time (shared UI)' },
      { value: '2', label: 'app stores shipped' }
    ],
    title: 'Lampstand',
    description:
      'Full-stack work on a personal-growth reading app: unblocked release-critical features and shipped to the App Store and Play Store.',
    impact:
      'The app is live on iOS and Android. Release-blocking reader work, shared UI patterns, and reading telemetry made it possible to ship.',
    techStack: ['React Native', 'TypeScript', 'PostgreSQL', 'Expo', 'Docker', 'TypeORM', 'Express'],
    liveUrl: 'https://lampstand.io/',
    primaryUrl: 'https://play.google.com/store/apps/details?id=com.lampstand.mobile',
    androidUrl: 'https://play.google.com/store/apps/details?id=com.lampstand.mobile&hl=en',
    iosUrl: 'https://apps.apple.com/ng/app/lampstand/id6749466766',
    featured: true,
    role: 'Full-Stack Engineer',
    timeline: 'Apr 2024 – Dec 2025',
    category: 'Mobile · Cross-platform',
    screenshots: [
      {
        src: lampstandImage,
        alt: 'Lampstand product mark',
        caption: 'Shipped to the App Store and Play Store.'
      }
    ],
    context:
      'Lampstand is a personal-growth reading app: curated content, habit tracking, and a reading experience meant to feel considered rather than generic. I joined as a full-stack engineer while feature debt was blocking release to both stores.',
    problem:
      'Tickets had been open for months. The release was behind. The work was not to add a long feature list. It was to identify what actually blocked App Store and Play Store submission and ship that without introducing new regressions.',
    roleDetail:
      'I worked across the React Native app and supporting APIs: reader theming, shared UI in a monorepo with Storybook, REST endpoints for books and files with AWS S3, and session/reading telemetry for the product team.',
    challenge:
      'Time was the constraint. Existing work had stalled. The reader had to thread theme and font-size state through the React Native rendering path and persist preferences on device, without destabilising the rest of the release.',
    approach:
      'I built the in-app reader theme system — light, dark, and sepia, with font-size controls — and persisted preferences locally. I helped establish shared UI patterns in Storybook so later screens were not one-off. I added session tracking and reading-progress telemetry so the product team had engagement data after launch. Backend work included book and file APIs with S3 and server-side validation.',
    decisions: [
      {
        title: 'Triage over novelty',
        body: 'Release-critical reader work came before interesting-but-not-blocking features. Knowing what can wait is part of the job in a small team with a store deadline.'
      },
      {
        title: 'Shared UI in the monorepo',
        body: 'A Storybook library made new screens cheaper for the whole team. The cost is discipline: components have to be documented enough to reuse, not just extracted.'
      }
    ],
    outcome:
      'The app shipped to the App Store and Play Store. The product team had reading telemetry they did not have before. The work was deadline-driven: close the blockers, keep the app stable, ship.',
    features: [
      {
        title: 'Reader theme system',
        body: 'Light, dark, and sepia modes with font-size controls, persisted on device and threaded through the reader pipeline.'
      },
      {
        title: 'Shared component library',
        body: 'Monorepo UI with Storybook so the team could assemble screens from documented patterns instead of rebuilding them.'
      },
      {
        title: 'Telemetry',
        body: 'Session tracking and reading progress, giving the product team engagement data after launch.'
      }
    ],
    closingStatement:
      'Shipping to both stores was the outcome. The engineering lesson was triage: which work is actually on the critical path.'
  },
  {
    slug: 'codepop',
    blueprint: 'codepop',
    title: 'CodePop',
    description:
      'A solo AI code intelligence platform: real-time code explanation, debugging assistance, and algorithm generation, built on OpenAI tool calling with context-aware prompts.',
    impact:
      'A working AI workflow for explanation, debugging, and generation — useful as a product experiment, not a claim about industry-wide productivity.',
    techStack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Express', 'OpenAI API', 'Vercel'],
    liveUrl: 'https://codepop-one.vercel.app/',
    role: 'Solo builder',
    timeline: '2025',
    category: 'Web · AI',
    context:
      'Engineers spend a lot of time on code they did not write. CodePop compresses that loop: paste a snippet, get an explanation, a fix, or a generated solution.',
    problem:
      'Raw LLM output often sounds like a chatbot. The product needed prompts and UX that feel closer to a careful walkthrough than a generic paragraph.',
    roleDetail: 'Solo builder: frontend, API, prompt design, and deployment.',
    challenge:
      'Getting specific output from a general model. Context has to be enough, and the interface has to keep the user in a tight loop rather than a chat dump.',
    approach:
      'Three flows: structured explanations, algorithm solutions with approach notes, and debugging that explains the failure instead of only patching it. Prompting is the product as much as the UI.',
    decisions: [
      {
        title: 'Interface over model-chasing',
        body: 'The lesson was that prompt design and a calm UI matter more than swapping models. The constraint was usefulness, not novelty.'
      }
    ],
    outcome: 'Live at codepop-one.vercel.app. A contained AI product I designed and shipped end to end.',
    features: [
      {
        title: 'Contextual explanations',
        body: 'Intent first, then detail where it matters — closer to how a senior engineer would walk through unfamiliar code.'
      },
      {
        title: 'Debug with a reason',
        body: 'Diagnosis plus a corrected version, with an explanation of why the bug happened.'
      }
    ],
    closingStatement: 'A small AI product, built to see whether careful prompting and a tight UI beat a generic chat box.'
  },
  {
    slug: 'lampstand-job-board',
    blueprint: 'lampstand-job-board',
    metrics: [
      { value: 'JWT', label: 'authenticated REST APIs' },
      { value: 'TDD', label: 'Jest tests gating CI/CD' }
    ],
    title: 'Lampstand job board',
    description:
      'A production job board with anonymous employer posting and bounty-based hiring, built alongside the Lampstand reading app.',
    impact:
      'JWT-authenticated REST APIs, TDD-driven test coverage and automated CI/CD deployment behind a Next.js candidate experience.',
    techStack: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Jest', 'GitLab CI', 'Vercel'],
    role: 'Full-Stack Engineer',
    timeline: 'Apr 2024 – Dec 2025',
    category: 'Web · Marketplace',
    context:
      'Lampstand’s second product was a job board that shared a monorepo, and a component library, with the reading app. Employers could post anonymously, and hiring could be bounty-based.',
    problem:
      'Anonymous posting and bounty-based hiring are unusual rules for a job board. The backend had to enforce them server-side, and the frontend had to make them feel simple to candidates.',
    roleDetail:
      'I delivered the job board backend and paired it with the Next.js/TypeScript frontend, working across the API, database and deployment pipeline.',
    approach:
      'Scalable REST APIs with JWT authentication, PostgreSQL for data, Jest unit and integration tests written test-first, and GitLab CI plus Vercel for automated deployment.',
    decisions: [
      {
        title: 'Shared monorepo and UI library',
        body: 'The job board reused the Storybook component library from the reading app, so the two products shared UI patterns instead of drifting apart.'
      },
      {
        title: 'Tests before release',
        body: 'Jest unit and integration tests ran in GitLab CI to catch regressions before production and reduce deployment failures.'
      }
    ],
    outcome:
      'A production job board supporting anonymous employer posting and bounty-based hiring workflows, shipped with automated CI/CD.',
    features: [
      {
        title: 'Anonymous employer posting',
        body: 'Employers can publish roles without exposing their identity.'
      },
      {
        title: 'Bounty-based hiring',
        body: 'Hiring workflows that attach a bounty to a role.'
      }
    ],
    closingStatement:
      'A second product in the same monorepo: backend, frontend and delivery pipeline owned end to end.'
  },
  {
    slug: 'lampstand-marketing',
    title: 'Lampstand marketing site',
    description:
      'Frontend for Lampstand’s marketing site: component patterns, Storybook, and performance work alongside the mobile app.',
    impact: 'The public site at lampstand.io supports acquisition for the shipped iOS and Android app.',
    techStack: ['React', 'TypeScript', 'Next.js', 'Storybook', 'Jest'],
    liveUrl: 'https://lampstand.io/',
    role: 'Frontend Engineer',
    timeline: 'Apr 2024 – Dec 2025',
    category: 'Web · Marketing',
    context:
      'Alongside the mobile app, Lampstand needed a marketing site that a small team could update without treating every content change as a one-off build.',
    problem:
      'A slow or brittle marketing page hurts acquisition. The site had to stay maintainable and fast enough for a public launch.',
    roleDetail:
      'I led frontend work: component structure, Storybook documentation, and performance passes (code splitting, lazy loading, image work).',
    challenge:
      'Balancing visual polish with Core Web Vitals on a small team, without turning every landing change into an engineering project.',
    approach:
      'A documented component library, Jest coverage on critical UI, and performance work on splitting, lazy loading, and images.',
    outcome:
      'lampstand.io is the public web presence for the shipped mobile app. I am not quoting an unverified load-time percentage.',
    features: [
      {
        title: 'Component library',
        body: 'Storybook as the source of truth for UI patterns used on marketing pages.'
      },
      {
        title: 'Performance passes',
        body: 'Code splitting, lazy loading, and image optimisation as a habit, not a one-time audit.'
      }
    ],
    closingStatement: 'Marketing frontend for a product that actually shipped to stores.'
  },
  {
    slug: 'url-shortener',
    title: 'URL shortener',
    description:
      'A URL shortening service built to practise caching, uniqueness, and rate limiting — not presented as a production SaaS.',
    impact: 'A complete design exercise: short codes, Redis cache, rate limits, and redirect logging.',
    techStack: ['Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker', 'Next.js', 'Jest'],
    sourceUrl: 'https://github.com/mosidrum/url_shortner',
    archive: true,
    role: 'Solo builder',
    timeline: '2024',
    category: 'Web · Backend',
    context:
      'A from-scratch shortener to work through collision handling, cache behaviour, and analytics on an otherwise simple product.',
    problem:
      'Uniqueness under write load, and avoiding a database hit on every redirect, are the interesting parts. The rest is scaffolding.',
    roleDetail: 'Solo: API, cache, tests, and a small frontend.',
    challenge: 'Collision-resistant short codes and a cache strategy that is not “add Redis later”.',
    approach:
      'Hash generation with uniqueness checks, Redis for hot redirects, per-user rate limiting, and redirect logs for a basic analytics layer.',
    outcome: 'Source on GitHub. Treated here as an engineering exercise, not a traffic claim.',
    features: [
      {
        title: 'Caching and uniqueness',
        body: 'Hot URLs in Redis; database on cache miss. Short codes checked for uniqueness without pretending this is a hyperscale system.'
      }
    ],
    closingStatement: 'Useful for how the simple product hides architecture. Not a production traffic story.'
  },
  {
    slug: 'travel-platform',
    title: 'Travel landing page',
    description:
      'A high-fidelity travel landing page used to practise accessible, performant frontend structure.',
    impact: 'A public frontend study in layout, accessibility, and component structure.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://hilink-landing-page-beta.vercel.app',
    sourceUrl: 'https://github.com/mosidrum/hilink_landing_page',
    archive: true,
    role: 'Frontend Engineer',
    timeline: '2023',
    category: 'Web · Frontend',
    context: 'A landing-page build treated as production-grade frontend practice rather than a client product.',
    problem: 'Landing pages are often thrown together. The exercise was semantic structure, keyboard use, and layout stability.',
    roleDetail: 'Solo frontend.',
    challenge: 'Keeping a dense marketing layout accessible and stable across widths.',
    approach: 'Component sections, semantic HTML, and attention to images, type, and contrast.',
    outcome: 'Live demo and source on GitHub. Earlier work, not a shipped travel company.',
    features: [
      {
        title: 'Accessible layout',
        body: 'Semantic structure, keyboard-friendly navigation, and contrast treated as requirements rather than polish.'
      }
    ],
    closingStatement: 'Earlier frontend craft. Kept here as supporting work, not a flagship case study.'
  },
  {
    slug: 'quiz-app',
    title: 'Quiz app',
    description:
      'A quiz UI used to practise multi-step React state: questions, scoring, and transitions.',
    impact: 'A small state-machine exercise with immediate scoring feedback.',
    techStack: ['React', 'TypeScript', 'Vercel'],
    liveUrl: 'https://ques-web-app.vercel.app/',
    sourceUrl: 'https://github.com/mosidrum/ques_web_app',
    archive: true,
    role: 'Solo builder',
    timeline: '2023',
    category: 'Web · Frontend',
    context: 'A compact app for multi-step UI state: idle, active, answering, complete.',
    problem: 'Booleans for mutually exclusive quiz states get messy. Explicit states keep the UI consistent.',
    roleDetail: 'Solo frontend.',
    challenge: 'Scoring, question order, and transitions without a tangled update chain.',
    approach: 'An explicit flow for quiz states, CSS transitions timed to those states, and instant score feedback.',
    outcome: 'Live demo. Supporting work, not a product case study.',
    features: [
      {
        title: 'Explicit quiz states',
        body: 'Idle, active, answering, complete — instead of a pile of booleans fighting each other.'
      }
    ],
    closingStatement: 'Small, useful for state design. Not featured on the homepage.'
  }
];

export const featuredProjects = projects.filter((p) => p.featured);
export const mainProjects = projects.filter((p) => !p.archive);
export const archivedProjects = projects.filter((p) => p.archive);
