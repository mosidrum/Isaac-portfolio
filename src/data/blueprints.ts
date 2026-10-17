import type { BlueprintDef, BlueprintLayout } from './types';

const NODE_W = 150;
const NODE_H = 46;

/**
 * Builds both layouts from columns of node ids (left to right).
 * Wide: columns side by side. Narrow: each column becomes a row, top to bottom.
 */
const autoLayout = (columns: string[][]): BlueprintDef['layouts'] => {
  const colGap = 72;
  const rowGap = 26;
  const maxRows = Math.max(...columns.map((c) => c.length));
  const wideWidth = columns.length * NODE_W + (columns.length - 1) * colGap;
  const wideHeight = maxRows * NODE_H + (maxRows - 1) * rowGap;
  const widePositions: BlueprintLayout['positions'] = {};
  columns.forEach((col, ci) => {
    const colHeight = col.length * NODE_H + (col.length - 1) * rowGap;
    const offset = (wideHeight - colHeight) / 2;
    col.forEach((id, ri) => {
      widePositions[id] = { x: ci * (NODE_W + colGap), y: offset + ri * (NODE_H + rowGap), w: NODE_W };
    });
  });

  const narrowWidth = 360;
  const narrowGap = 14;
  const narrowRowGap = 34;
  const narrowPositions: BlueprintLayout['positions'] = {};
  columns.forEach((row, ri) => {
    const w = (narrowWidth - (row.length - 1) * narrowGap) / row.length;
    row.forEach((id, ci) => {
      narrowPositions[id] = { x: ci * (w + narrowGap), y: ri * (NODE_H + narrowRowGap), w };
    });
  });
  const narrowHeight = columns.length * NODE_H + (columns.length - 1) * narrowRowGap;

  return {
    wide: { width: wideWidth, height: wideHeight, positions: widePositions },
    narrow: { width: narrowWidth, height: narrowHeight, positions: narrowPositions }
  };
};

/** Simplified view of the agent architecture worked on at Relaystack. */
export const agentBlueprint: BlueprintDef = {
  title: 'Agent architecture',
  caption: 'A simplified view of the AI agent system I worked on at Relaystack. Hover a node.',
  nodes: [
    {
      id: 'goal',
      label: 'User goal',
      kind: 'input',
      detail: 'A plain-language goal from the user, for example a lead-generation or posting task.'
    },
    {
      id: 'router',
      label: 'Skill router',
      sub: 'Node.js · TS',
      kind: 'core',
      detail: 'Parses the goal and dispatches it to the right domain-specific skill module.'
    },
    {
      id: 'lead',
      label: 'Lead gen',
      kind: 'module',
      detail: 'Skill module for lead generation: finds fits and drafts introductions.'
    },
    {
      id: 'social',
      label: 'Social growth',
      kind: 'module',
      detail: 'Skill module for social media: plans and drafts posts.'
    },
    {
      id: 'career',
      label: 'Career coach',
      kind: 'module',
      detail: 'Skill module for career work: finds roles and tailors applications.'
    },
    {
      id: 'memory',
      label: 'Memory',
      sub: 'Redis · PostgreSQL',
      kind: 'store',
      detail: 'Redis holds session state. PostgreSQL holds longer-term context about the user.'
    },
    {
      id: 'tools',
      label: 'Tool calls',
      sub: 'OpenAI',
      kind: 'external',
      detail: 'OpenAI tool calling runs the multi-step pipeline, then stops for approval.'
    }
  ],
  edges: [
    { from: 'goal', to: 'router' },
    { from: 'router', to: 'lead' },
    { from: 'router', to: 'social' },
    { from: 'router', to: 'career' },
    { from: 'router', to: 'memory' },
    { from: 'lead', to: 'tools' },
    { from: 'social', to: 'tools' },
    { from: 'career', to: 'tools' }
  ],
  layouts: {
    wide: {
      width: 640,
      height: 330,
      positions: {
        goal: { x: 0, y: 143, w: 110 },
        router: { x: 160, y: 143, w: 140 },
        lead: { x: 360, y: 36, w: 130 },
        social: { x: 360, y: 143, w: 130 },
        career: { x: 360, y: 250, w: 130 },
        memory: { x: 140, y: 250, w: 180 },
        tools: { x: 540, y: 143, w: 100 }
      }
    },
    narrow: {
      width: 360,
      height: 320,
      positions: {
        goal: { x: 110, y: 0, w: 140 },
        router: { x: 10, y: 80, w: 150 },
        memory: { x: 190, y: 80, w: 160 },
        lead: { x: 0, y: 180, w: 108 },
        social: { x: 126, y: 180, w: 108 },
        career: { x: 252, y: 180, w: 108 },
        tools: { x: 110, y: 276, w: 140 }
      }
    }
  }
};

export const sageGreyBlueprint: BlueprintDef = {
  title: 'Banking BFF',
  caption: 'How client apps reach the core banking service through a NestJS Backend-for-Frontend.',
  nodes: [
    {
      id: 'clients',
      label: 'Client apps',
      sub: 'Internet banking',
      kind: 'input',
      detail: 'The internet banking application clients use. They talk to one API, not to the core.'
    },
    {
      id: 'bff',
      label: 'NestJS BFF',
      sub: 'Backend-for-Frontend',
      kind: 'core',
      detail: 'Middleware that gives client apps a single, secure and consistent API layer.'
    },
    {
      id: 'core',
      label: 'Peerless',
      sub: 'Core banking',
      kind: 'external',
      detail: 'The core banking service the BFF wraps and integrates with.'
    },
    {
      id: 'thirdparty',
      label: 'Integrations',
      sub: 'Third-party services',
      kind: 'external',
      detail: 'Third-party integrations, delivered as their own workstream alongside product and backend.'
    }
  ],
  edges: [
    { from: 'clients', to: 'bff' },
    { from: 'bff', to: 'core' },
    { from: 'bff', to: 'thirdparty' }
  ],
  layouts: autoLayout([['clients'], ['bff'], ['core', 'thirdparty']])
};

export const lampstandBlueprint: BlueprintDef = {
  title: 'Lampstand platform',
  caption: 'Two products in one monorepo, sharing a component library and a REST API layer.',
  nodes: [
    {
      id: 'ui',
      label: 'Storybook UI',
      sub: 'Shared components',
      kind: 'module',
      detail: 'A documented component library shared by the reading app and the job board.'
    },
    {
      id: 'app',
      label: 'Reading app',
      sub: 'React Native',
      kind: 'input',
      detail: 'The iOS and Android app, with reader theming and reading telemetry.'
    },
    {
      id: 'jobs',
      label: 'Job board',
      sub: 'Next.js · TypeScript',
      kind: 'input',
      detail: 'The candidate-facing job board with anonymous posting and bounty-based hiring.'
    },
    {
      id: 'api',
      label: 'REST APIs',
      sub: 'Node.js',
      kind: 'core',
      detail: 'Book, file and job endpoints with server-side validation.'
    },
    {
      id: 'db',
      label: 'PostgreSQL',
      kind: 'store',
      detail: 'Primary data store for the platform.'
    },
    {
      id: 's3',
      label: 'AWS S3',
      sub: 'File storage',
      kind: 'external',
      detail: 'Secure upload and download for book files.'
    }
  ],
  edges: [
    { from: 'ui', to: 'app' },
    { from: 'ui', to: 'jobs' },
    { from: 'app', to: 'api' },
    { from: 'jobs', to: 'api' },
    { from: 'api', to: 'db' },
    { from: 'api', to: 's3' }
  ],
  layouts: autoLayout([['ui'], ['app', 'jobs'], ['api'], ['db', 's3']])
};

export const auxhrBlueprint: BlueprintDef = {
  title: 'AuxHR recruiter flow',
  caption: 'The recruiter frontend I stabilised, and how it handles an asynchronous AI match.',
  nodes: [
    {
      id: 'ui',
      label: 'Recruiter UI',
      sub: 'React · Vite',
      kind: 'input',
      detail: 'Applicants table, score ring, screening answers and assessment thread.'
    },
    {
      id: 'state',
      label: 'App state',
      sub: 'Redux',
      kind: 'core',
      detail: 'Holds application data and polls while a match verdict is pending.'
    },
    {
      id: 'api',
      label: 'AuxHR API',
      kind: 'external',
      detail: 'Backend that stores applications and screening answers.'
    },
    {
      id: 'match',
      label: 'AI match',
      sub: 'Async verdict',
      kind: 'external',
      detail: 'Generated once per application. The UI shows the score when the verdict lands.'
    }
  ],
  edges: [
    { from: 'ui', to: 'state' },
    { from: 'state', to: 'api' },
    { from: 'api', to: 'match' }
  ],
  layouts: autoLayout([['ui'], ['state'], ['api'], ['match']])
};

export const codepopBlueprint: BlueprintDef = {
  title: 'CodePop flow',
  caption: 'From pasted code to a structured answer, with prompting treated as part of the product.',
  nodes: [
    {
      id: 'input',
      label: 'Your code',
      sub: 'Snippet or problem',
      kind: 'input',
      detail: 'The user pastes code, an error or an algorithm problem.'
    },
    {
      id: 'prompt',
      label: 'Prompt design',
      sub: 'Context-aware',
      kind: 'core',
      detail: 'Builds a prompt that asks for a walkthrough rather than a generic chat reply.'
    },
    {
      id: 'llm',
      label: 'OpenAI API',
      sub: 'Tool calling',
      kind: 'external',
      detail: 'Tool calling produces structured output for each flow.'
    },
    {
      id: 'out',
      label: 'Answer',
      sub: 'Explain · Debug · Generate',
      kind: 'module',
      detail: 'An explanation, a diagnosis with a fix, or a generated solution with approach notes.'
    }
  ],
  edges: [
    { from: 'input', to: 'prompt' },
    { from: 'prompt', to: 'llm' },
    { from: 'llm', to: 'out' }
  ],
  layouts: autoLayout([['input'], ['prompt'], ['llm'], ['out']])
};

export const jobBoardBlueprint: BlueprintDef = {
  title: 'Job board delivery',
  caption: 'Next.js frontend, JWT-secured REST API, PostgreSQL, and a tested CI/CD pipeline.',
  nodes: [
    {
      id: 'web',
      label: 'Next.js app',
      sub: 'Candidate experience',
      kind: 'input',
      detail: 'The candidate-facing frontend, deployed on Vercel.'
    },
    {
      id: 'ci',
      label: 'GitLab CI',
      sub: 'Jest · Deploy',
      kind: 'module',
      detail: 'Runs unit and integration tests before every deployment.'
    },
    {
      id: 'api',
      label: 'REST API',
      sub: 'JWT auth',
      kind: 'core',
      detail: 'Enforces anonymous posting and bounty rules server-side.'
    },
    {
      id: 'db',
      label: 'PostgreSQL',
      kind: 'store',
      detail: 'Stores employers, roles and applications.'
    }
  ],
  edges: [
    { from: 'web', to: 'api' },
    { from: 'ci', to: 'api' },
    { from: 'api', to: 'db' }
  ],
  layouts: autoLayout([['web', 'ci'], ['api'], ['db']])
};

export const blueprints: Record<string, BlueprintDef> = {
  relaystack: agentBlueprint,
  'sage-grey-banking': sageGreyBlueprint,
  'lampstand-mobile': lampstandBlueprint,
  auxhr: auxhrBlueprint,
  codepop: codepopBlueprint,
  'lampstand-job-board': jobBoardBlueprint
};
