/**
 * Core type definitions for portfolio data structures.
 * Centralized types ensure consistency across the application.
 */

import type { StaticImageData } from 'next/image';

export interface Experience {
  company: string;
  logo: StaticImageData;
  role: string;
  period: string;
  url: string;
  highlights?: string[];
}

export interface Project {
  title: string;
  description: string;
  impact: string;
  techStack: string[];
  liveUrl?: string;
  androidUrl?: string;
  iosUrl?: string;
  sourceUrl?: string;
  featured?: boolean;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  url: string;
  readTime: string;
  publishedAt: string;
  tags?: string[];
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
