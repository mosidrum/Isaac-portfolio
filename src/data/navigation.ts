import type { NavItem, SocialLink } from './types';
import { email, githubUrl, linkedinUrl } from './site';

export const navItems: NavItem[] = [
  { label: 'Work', href: '/projects' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Writing', href: '/blogs' }
];

export const footerNavItems: NavItem[] = [
  { label: 'Work', href: '/projects' },
  { label: 'Writing', href: '/blogs' },
  { label: 'Résumé', href: '/resume' },
  { label: 'Tools', href: '/uses' }
];

export const socialLinks: SocialLink[] = [
  {
    platform: 'LinkedIn',
    url: linkedinUrl,
    ariaLabel: 'Connect on LinkedIn'
  },
  {
    platform: 'GitHub',
    url: githubUrl,
    ariaLabel: 'View GitHub profile'
  },
  {
    platform: 'Email',
    url: `mailto:${email}`,
    ariaLabel: 'Send an email'
  }
];

export const resumeUrl =
  'https://drive.google.com/file/d/1VThhNNYy3tPzaghqY6og9GNy5RcNCnKi/view?usp=sharing';

export const calendlyUrl = 'https://calendly.com/mosidrum/30min';
