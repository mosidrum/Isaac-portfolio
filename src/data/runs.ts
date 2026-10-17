export interface AgentRunStep {
  /** Log line shown in the console. */
  log: string;
  /** Node ids lit up by this step (cumulative). */
  nodes: string[];
  /** Edge keys ("from-to") lit up by this step (cumulative). */
  edges: string[];
}

export interface AgentRun {
  id: string;
  label: string;
  goal: string;
  steps: AgentRunStep[];
}

/** Illustrative runs through the agent blueprint. These are simulations, not real logs. */
export const agentRuns: AgentRun[] = [
  {
    id: 'lead',
    label: 'Lead gen',
    goal: 'Find qualified leads for my consultancy',
    steps: [
      { log: 'router  → parse goal, pick skill: lead-gen', nodes: ['goal', 'router'], edges: ['goal-router'] },
      { log: 'memory  → load session and long-term context', nodes: ['memory'], edges: ['router-memory'] },
      { log: 'lead    → plan: search, verify, draft intros', nodes: ['lead'], edges: ['router-lead'] },
      { log: 'tools   → tool call: find and check prospects', nodes: ['tools'], edges: ['lead-tools'] }
    ]
  },
  {
    id: 'social',
    label: 'Social',
    goal: 'Plan and queue this week’s posts in my voice',
    steps: [
      { log: 'router  → parse goal, pick skill: social', nodes: ['goal', 'router'], edges: ['goal-router'] },
      { log: 'memory  → load voice and past posts', nodes: ['memory'], edges: ['router-memory'] },
      { log: 'social  → plan: topics, drafts, schedule', nodes: ['social'], edges: ['router-social'] },
      { log: 'tools   → tool call: draft and queue posts', nodes: ['tools'], edges: ['social-tools'] }
    ]
  },
  {
    id: 'career',
    label: 'Career',
    goal: 'Find roles that fit and tailor my application',
    steps: [
      { log: 'router  → parse goal, pick skill: career', nodes: ['goal', 'router'], edges: ['goal-router'] },
      { log: 'memory  → load profile and preferences', nodes: ['memory'], edges: ['router-memory'] },
      { log: 'career  → plan: shortlist, tailor, outreach', nodes: ['career'], edges: ['router-career'] },
      { log: 'tools   → tool call: match roles, draft CV edits', nodes: ['tools'], edges: ['career-tools'] }
    ]
  }
];
