import type { NavItem, SocialLink } from './types';

/**
 * Navigation configuration for consistent routing across the application.
 */
export const navItems: NavItem[] = [
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Writings', href: '/blog' },
  { label: 'Uses', href: '/uses' }
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
  'https://drive.google.com/file/d/1TbtMtqk-gISVg0JVbpwfH6VZ-XHclY2_/view?usp=sharing';
