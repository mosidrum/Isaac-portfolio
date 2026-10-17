'use client';

import { useId, useState, type CSSProperties } from 'react';
import type { BlueprintDef, BlueprintLayout, BlueprintNode } from '@/data';
import styles from './Blueprint.module.css';

const NODE_H = 46;

interface Box {
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface BlueprintHighlight {
  nodes: string[];
  /** Edge keys in the form "from-to". */
  edges: string[];
}

const edgePath = (a: Box, b: Box) => {
  if (b.x >= a.x + a.w) {
    const sx = a.x + a.w;
    const sy = a.y + a.h / 2;
    const ex = b.x;
    const ey = b.y + b.h / 2;
    const mx = (sx + ex) / 2;
    return `M${sx} ${sy} C${mx} ${sy} ${mx} ${ey} ${ex} ${ey}`;
  }

  const down = b.y > a.y;
  const sx = a.x + a.w / 2;
  const sy = down ? a.y + a.h : a.y;
  const ex = b.x + b.w / 2;
  const ey = down ? b.y : b.y + b.h;
  const my = (sy + ey) / 2;
  return `M${sx} ${sy} C${sx} ${my} ${ex} ${my} ${ex} ${ey}`;
};

interface DiagramProps {
  def: BlueprintDef;
  layout: BlueprintLayout;
  variant: 'wide' | 'narrow';
  active: string | null;
  onActive: (id: string | null) => void;
  highlight?: BlueprintHighlight;
  thumb: boolean;
}

const Diagram = ({ def, layout, variant, active, onActive, highlight, thumb }: DiagramProps) => {
  const uid = useId().replaceAll(':', '');
  const markerId = `${uid}-arrow`;
  const boxes = new Map<string, Box>(
    def.nodes.map((node) => {
      const pos = layout.positions[node.id];
      return [node.id, { x: pos.x, y: pos.y, w: pos.w ?? 130, h: NODE_H }];
    })
  );

  const isLinked = (from: string, to: string) =>
    active !== null && (from === active || to === active);

  return (
    <svg
      className={`${styles.svg} ${variant === 'wide' ? styles.wide : styles.narrow}`}
      viewBox={`-4 -4 ${layout.width + 8} ${layout.height + 8}`}
      style={variant === 'wide' && !thumb ? { maxWidth: layout.width * 1.15 } : undefined}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <marker
          id={markerId}
          viewBox="0 0 8 8"
          refX="7"
          refY="4"
          markerWidth="7"
          markerHeight="7"
          orient="auto"
        >
          <path d="M0 0 L8 4 L0 8 z" className={styles.arrowHead} />
        </marker>
      </defs>

      {def.edges.map((edge) => {
        const a = boxes.get(edge.from);
        const b = boxes.get(edge.to);
        if (!a || !b) return null;
        const lit = highlight?.edges.includes(`${edge.from}-${edge.to}`);
        const classes = [
          styles.edge,
          isLinked(edge.from, edge.to) ? styles.edgeActive : '',
          lit ? styles.edgeLit : ''
        ].join(' ');
        return (
          <path
            key={`${edge.from}-${edge.to}`}
            d={edgePath(a, b)}
            className={classes}
            markerEnd={`url(#${markerId})`}
          />
        );
      })}

      {def.nodes.map((node: BlueprintNode, index) => {
        const box = boxes.get(node.id);
        if (!box) return null;
        const kind = node.kind ?? 'module';
        const lit = highlight?.nodes.includes(node.id);
        const classes = [
          styles.node,
          styles[kind],
          active === node.id ? styles.nodeActive : '',
          lit ? styles.nodeLit : ''
        ].join(' ');
        return (
          <g
            key={node.id}
            className={classes}
            style={{ '--i': index } as CSSProperties}
            onMouseEnter={thumb ? undefined : () => onActive(node.id)}
            onMouseLeave={thumb ? undefined : () => onActive(null)}
            onClick={thumb ? undefined : () => onActive(active === node.id ? null : node.id)}
          >
            <rect x={box.x} y={box.y} width={box.w} height={box.h} rx={5} className={styles.rect} />
            {!thumb && (
              <>
                <text
                  x={box.x + box.w / 2}
                  y={box.y + (node.sub ? 19 : box.h / 2)}
                  className={styles.label}
                  textAnchor="middle"
                  dominantBaseline="middle"
                >
                  {node.label}
                </text>
                {node.sub && (
                  <text
                    x={box.x + box.w / 2}
                    y={box.y + 34}
                    className={styles.sub}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    {node.sub}
                  </text>
                )}
              </>
            )}
          </g>
        );
      })}
    </svg>
  );
};

interface BlueprintProps {
  def: BlueprintDef;
  fontScale?: number;
  /** Nodes and edges to light up in the signal colour (used by the hero run). */
  highlight?: BlueprintHighlight;
  /** Label-free, non-interactive schematic for cards. */
  thumb?: boolean;
  /** No frame or title: for embedding inside another panel. */
  bare?: boolean;
  /** Hide the caption under the diagram. */
  hideCaption?: boolean;
}

export const Blueprint = ({
  def,
  fontScale = 1,
  highlight,
  thumb = false,
  bare = false,
  hideCaption = false
}: BlueprintProps) => {
  const [active, setActive] = useState<string | null>(null);
  const activeNode = def.nodes.find((n) => n.id === active);
  const figureClass = [styles.figure, thumb ? styles.thumbFigure : ''].join(' ');
  const frameClass = [styles.frame, bare ? styles.bare : '', thumb ? styles.thumbFrame : ''].join(' ');

  return (
    <figure
      className={figureClass}
      aria-label={thumb ? undefined : def.title}
      aria-hidden={thumb ? true : undefined}
      style={{ '--bp-fs': fontScale } as CSSProperties}
    >
      <div className={frameClass}>
        {!bare && !thumb && <span className={styles.frameLabel}>{def.title}</span>}
        <Diagram
          def={def}
          layout={def.layouts.wide}
          variant="wide"
          active={active}
          onActive={setActive}
          highlight={highlight}
          thumb={thumb}
        />
        {!thumb && (
          <Diagram
            def={def}
            layout={def.layouts.narrow}
            variant="narrow"
            active={active}
            onActive={setActive}
            highlight={highlight}
            thumb={false}
          />
        )}
      </div>

      {!thumb && !hideCaption && (
        <figcaption className={styles.caption}>
          {activeNode ? (
            <>
              <strong>{activeNode.label}.</strong> {activeNode.detail}
            </>
          ) : (
            def.caption
          )}
        </figcaption>
      )}

      {!thumb && (
        <ol className={styles.srOnly}>
          {def.nodes.map((node) => (
            <li key={node.id}>
              {node.label}: {node.detail}
            </li>
          ))}
        </ol>
      )}
    </figure>
  );
};
