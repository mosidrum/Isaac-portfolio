import { education, email, experiences, location, projects } from '@/data';

export interface AskLink {
  label: string;
  href: string;
}

export interface AskAnswer {
  text: string;
  links: AskLink[];
}

interface Intent {
  keywords: string[];
  answer: AskAnswer;
}

const projectLink = (slug: string): AskLink => {
  const project = projects.find((p) => p.slug === slug);
  return { label: project?.title ?? slug, href: `/projects/${slug}` };
};

const current = experiences[0];

const intents: Intent[] = [
  {
    keywords: ['rag', 'vector', 'pgvector', 'embedding', 'semantic', 'retrieval'],
    answer: {
      text: 'RAG workflows, pgvector and semantic search are part of his AI & LLM toolkit, alongside OpenAI tool calling and MCP. His shipped agent work is Relaystack: skill routing, Redis and Postgres memory, and tool-calling pipelines.',
      links: [projectLink('relaystack'), { label: 'Full skills', href: '/resume' }]
    }
  },
  {
    keywords: ['ai', 'agent', 'agents', 'llm', 'openai', 'mcp', 'gpt', 'tool'],
    answer: {
      text: 'He built AI agent infrastructure at Relaystack: a TypeScript skill router that dispatches natural-language goals to domain modules, persistent memory in Redis and Postgres, and OpenAI tool calling for multi-step pipelines. He also built CodePop, an AI code intelligence tool.',
      links: [projectLink('relaystack'), projectLink('codepop')]
    }
  },
  {
    keywords: ['bank', 'banking', 'fintech', 'nestjs', 'bff', 'peerless', 'sage'],
    answer: {
      text: 'At Sage Grey Technologies he is Product Lead on an internet banking application, and drove the design of a NestJS Backend-for-Frontend that wraps the Peerless core banking service behind one secure API.',
      links: [projectLink('sage-grey-banking')]
    }
  },
  {
    keywords: ['lead', 'leadership', 'manage', 'product', 'team', 'planning'],
    answer: {
      text: `Yes. As ${current.role} at ${current.company} he turns business requirements into scoped features, a prioritised backlog and phased releases, and plans and tracks work across the team.`,
      links: [projectLink('sage-grey-banking'), { label: 'Experience', href: '/#experience' }]
    }
  },
  {
    keywords: ['mobile', 'ios', 'android', 'react native', 'native', 'app store', 'play store', 'expo'],
    answer: {
      text: 'He built and shipped the Lampstand reading app in React Native to both the App Store and Play Store, with a shared Storybook component library, S3-backed file APIs and reading telemetry.',
      links: [projectLink('lampstand-mobile'), projectLink('lampstand-job-board')]
    }
  },
  {
    keywords: ['stack', 'tech', 'skills', 'typescript', 'react', 'node', 'next', 'postgres', 'redis', 'docker', 'aws'],
    answer: {
      text: 'Frontend: React, Next.js, TypeScript, React Native. Backend: Node.js, NestJS, Express, PostgreSQL, Redis. AI: OpenAI tool calling, RAG, MCP, pgvector. Delivery: Docker, AWS, GitLab CI, GitHub Actions, Jest.',
      links: [{ label: 'Full résumé', href: '/resume' }]
    }
  },
  {
    keywords: ['available', 'availability', 'hire', 'hiring', 'job', 'role', 'open', 'remote', 'work with'],
    answer: {
      text: `He is open to remote full-stack and frontend roles. Email is the fastest way to reach him: ${email}.`,
      links: [
        { label: 'Contact', href: '/#contact' },
        { label: 'Résumé', href: '/resume' }
      ]
    }
  },
  {
    keywords: ['where', 'location', 'nigeria', 'timezone', 'based', 'live'],
    answer: {
      text: `He is based in ${location} and works remote-first, in the WAT timezone (UTC+1).`,
      links: [{ label: 'Contact', href: '/#contact' }]
    }
  },
  {
    keywords: ['experience', 'years', 'long', 'history', 'background', 'career'],
    answer: {
      text: `5+ years across ${experiences.length} teams, from startups to contract work to banking middleware. Most recently: ${experiences
        .slice(0, 3)
        .map((e) => `${e.role} at ${e.company}`)
        .join(', ')}.`,
      links: [{ label: 'Experience', href: '/#experience' }, { label: 'Résumé', href: '/resume' }]
    }
  },
  {
    keywords: ['education', 'degree', 'school', 'bootcamp', 'study', 'studied', 'microverse', 'polytechnic'],
    answer: {
      text: `${education.map((e) => `${e.program}, ${e.institution} (${e.period})`).join('. ')}.`,
      links: [{ label: 'Résumé', href: '/resume' }]
    }
  },
  {
    keywords: ['contact', 'email', 'reach', 'call', 'talk', 'book'],
    answer: {
      text: `Email ${email}, or book a short call from the contact section.`,
      links: [{ label: 'Contact', href: '/#contact' }]
    }
  }
];

export const fallbackAnswer: AskAnswer = {
  text: 'I only know what is on this site. Try asking about AI agents, banking, mobile apps, the tech stack, experience, or availability.',
  links: [
    { label: 'Work', href: '/projects' },
    { label: 'Résumé', href: '/resume' }
  ]
};

export const ask = (question: string): AskAnswer => {
  const normalised = question.toLowerCase().replaceAll(/[^a-z0-9 ]/g, ' ');
  const padded = ` ${normalised} `;
  const scored = intents.map((intent) => ({
    intent,
    score: intent.keywords.filter((k) => padded.includes(` ${k} `)).length
  }));
  const [best] = scored.sort((x, y) => y.score - x.score);

  return best && best.score > 0 ? best.intent.answer : fallbackAnswer;
};
