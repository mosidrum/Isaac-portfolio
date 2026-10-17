/**
 * Core type definitions for portfolio data structures.
 * Centralized types ensure consistency across the application.
 */

import type { StaticImageData } from 'next/image';

export interface Experience {
  company: string;
  logo?: StaticImageData;
  role: string;
  period: string;
  url?: string;
  product?: string;
  highlights?: string[];
}

export interface Education {
  program: string;
  institution: string;
  period: string;
}

export interface ProjectFeature {
  title: string;
  body: string;
}

export interface ProjectDecision {
  title: string;
  body: string;
}

export interface ProjectScreenshot {
  src: StaticImageData;
  alt: string;
  caption?: string;
  /** Wraps the image in a phone or browser frame on the case-study page. */
  device?: 'phone' | 'browser';
}

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  impact: string;
  techStack: string[];
  liveUrl?: string;
  /** Where clicking the project card goes. Defaults to liveUrl, then sourceUrl, then the case study. */
  primaryUrl?: string;
  /** Small brand mark shown on the card and case study. */
  logo?: StaticImageData;
  androidUrl?: string;
  iosUrl?: string;
  sourceUrl?: string;
  featured?: boolean;
  /** Practice / earlier work shown in the Archive, not the main project list. */
  archive?: boolean;
  role?: string;
  timeline?: string;
  category?: string;
  context?: string;
  problem?: string;
  roleDetail?: string;
  challenge?: string;
  approach?: string;
  decisions?: ProjectDecision[];
  outcome?: string;
  features?: ProjectFeature[];
  screenshots?: ProjectScreenshot[];
  /** Optional image for the Work card. Falls back to the project's blueprint schematic. */
  cardImage?: StaticImageData;
  /** Verifiable facts only. Rendered as a key-facts row when present. */
  metrics?: ProjectMetric[];
  /** Key into `blueprints` (src/data/blueprints.ts). */
  blueprint?: string;
  closingStatement?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  ariaLabel: string;
}

export interface ToolCategory {
  category: string;
  items: Tool[];
}

export interface Tool {
  name: string;
  description: string;
}

export interface CapabilityGroup {
  area: string;
  items: string[];
}

export type BlueprintNodeKind = 'input' | 'core' | 'module' | 'store' | 'external';

export interface BlueprintNode {
  id: string;
  label: string;
  /** Optional second line inside the node. */
  sub?: string;
  /** Sentence shown when the node is hovered, and in the screen-reader list. */
  detail: string;
  kind?: BlueprintNodeKind;
}

export interface BlueprintEdge {
  from: string;
  to: string;
}

export interface BlueprintPosition {
  x: number;
  y: number;
  w?: number;
}

export interface BlueprintLayout {
  width: number;
  height: number;
  positions: Record<string, BlueprintPosition>;
}

export interface BlueprintDef {
  title: string;
  caption: string;
  nodes: BlueprintNode[];
  edges: BlueprintEdge[];
  /** Wide layout for tablet and up, narrow layout for phones. */
  layouts: { wide: BlueprintLayout; narrow: BlueprintLayout };
}
