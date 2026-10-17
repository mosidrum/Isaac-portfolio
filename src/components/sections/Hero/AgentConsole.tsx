'use client';

import { useEffect, useState } from 'react';
import { agentBlueprint, agentRuns } from '@/data';
import { Blueprint } from '@/components/ui';
import styles from './AgentConsole.module.css';

const TYPE_MS = 28;
const STEP_MS = 750;
const HOLD_MS = 4200;

export const AgentConsole = () => {
  const [runIndex, setRunIndex] = useState(0);
  const [typed, setTyped] = useState(0);
  const [steps, setSteps] = useState(0);
  const [auto, setAuto] = useState(true);
  const run = agentRuns[runIndex];
  const done = steps >= run.steps.length;

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    const reduced = globalThis.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced) {
      setTyped(run.goal.length);
      setSteps(run.steps.length);
      return () => {};
    }

    setTyped(0);
    setSteps(0);

    const typingTime = run.goal.length * TYPE_MS;
    for (let i = 1; i <= run.goal.length; i += 1) {
      timers.push(setTimeout(() => setTyped(i), i * TYPE_MS));
    }
    run.steps.forEach((_, i) => {
      timers.push(setTimeout(() => setSteps(i + 1), typingTime + 400 + i * STEP_MS));
    });
    if (auto) {
      const end = typingTime + 400 + run.steps.length * STEP_MS + HOLD_MS;
      timers.push(setTimeout(() => setRunIndex((i) => (i + 1) % agentRuns.length), end));
    }

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, [run, auto]);

  const visible = run.steps.slice(0, steps);
  const highlight = {
    nodes: visible.flatMap((s) => s.nodes),
    edges: visible.flatMap((s) => s.edges)
  };

  return (
    <div className={styles.console}>
      <div className={styles.bar}>
        <span className={styles.live}>
          <i className={`${styles.dot} ${done ? styles.dotDone : ''}`} aria-hidden="true" />
          {done ? 'Run complete' : 'Run in progress'}
        </span>
        <span className={styles.note}>simulation · simplified from Relaystack</span>
      </div>

      <div className={styles.main}>
        <div className={styles.left}>
          <div className={styles.tabs} role="group" aria-label="Example goals">
            {agentRuns.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className={`${styles.tab} ${index === runIndex ? styles.tabActive : ''}`}
                aria-pressed={index === runIndex}
                onClick={() => {
                  setAuto(false);
                  setRunIndex(index);
                }}
              >
                {item.label}
              </button>
            ))}
          </div>

          <p className={styles.goal}>
            <span className={styles.prompt} aria-hidden="true">
              goal ›
            </span>
            <span>{run.goal.slice(0, typed)}</span>
            {!done && <span className={styles.cursor} aria-hidden="true" />}
          </p>

          <Blueprint def={agentBlueprint} bare hideCaption fontScale={1.25} highlight={highlight} />
        </div>

        <div className={styles.right}>
          <ol className={styles.log}>
            {run.steps.map((step, index) => (
              <li key={step.log} className={`${styles.line} ${index < steps ? styles.lineOn : ''}`}>
                <span className={styles.time}>+{((index + 1) * 0.6).toFixed(1)}s</span>
                <span>{step.log}</span>
              </li>
            ))}
          </ol>

          <p className={`${styles.status} ${done ? styles.statusDone : ''}`}>
            {done ? '✓ Drafts ready. Waiting for your approval.' : 'Working…'}
          </p>
        </div>
      </div>
    </div>
  );
};
