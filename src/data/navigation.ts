import type { NavItem, SocialLink } from './types';

/**
 * Navigation configuration for consistent routing across the application.
 */
export const navItems: NavItem[] = [
  { label: 'Projects', href: '/projects' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Tools', href: '/uses' }
];

/**
 * Social and professional links for networking and contact.
 */
export const socialLinks: SocialLink[] = [
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/mosidrum',
    ariaLabel: 'Connect on LinkedIn'
  },
  {
    platform: 'GitHub',
    url: 'https://github.com/mosidrum',
    ariaLabel: 'View GitHub profile'
  },
  {
    platform: 'Email',
    url: 'mailto:mosiokanga@gmail.com',
    ariaLabel: 'Send an email'
  }
];

export const resumeUrl =
  'https://drive.google.com/file/d/1VThhNNYy3tPzaghqY6og9GNy5RcNCnKi/view?usp=sharing';

export const calendlyUrl = 'https://calendly.com/mosidrum/30min';
