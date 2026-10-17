import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
/* eslint-disable camelcase -- Next.js font exports use the family name with underscores. */
import { Space_Grotesk, Space_Mono, DM_Sans, Instrument_Serif } from 'next/font/google';
/* eslint-enable camelcase */
import { Navbar, Footer, CommandPalette } from '@/components';
import { getAllPosts } from '@/lib/blog';
import { JsonLd } from '@/components/seo/JsonLd';
import {
  email,
  githubUrl,
  linkedinUrl,
  siteDescription,
  siteName,
  siteTitle,
  siteUrl
} from '@/data';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--space-grotesk',
  display: 'swap'
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--space-mono',
  display: 'swap'
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--dm-sans',
  display: 'swap'
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: 'italic',
  variable: '--instrument-serif',
  display: 'swap'
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#070b14' },
    { media: '(prefers-color-scheme: light)', color: '#f3efe6' }
  ],
  colorScheme: 'dark light'
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | ${siteTitle}`,
    template: `%s — ${siteName}`
  },
  description: siteDescription,
  keywords: [
    'Full-Stack Engineer',
    'AI Agents',
    'Software Engineer',
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'NestJS',
    'PostgreSQL',
    'Redis',
    'OpenAI',
    'RAG',
    'MCP',
    'Remote'
  ],
  authors: [{ name: siteName }],
  openGraph: {
    title: `${siteName} | ${siteTitle}`,
    description: siteDescription,
    type: 'website',
    url: siteUrl,
    siteName
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteName} | ${siteTitle}`,
    description: siteDescription
  },
  alternates: { types: { 'application/rss+xml': '/rss.xml' } },
  robots: { index: true, follow: true }
};

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteName,
    jobTitle: 'Full-Stack Software Engineer',
    url: siteUrl,
    email,
    address: { '@type': 'PostalAddress', addressCountry: 'NG' },
    knowsAbout: [
      'Full-stack web development',
      'AI agents',
      'OpenAI tool calling',
      'Retrieval-augmented generation',
      'React',
      'Next.js',
      'Node.js',
      'NestJS',
      'PostgreSQL',
      'Redis'
    ],
    sameAs: [linkedinUrl, githubUrl]
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    url: siteUrl
  }
];

const themeScript =
  "try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch(e){}";

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html
    lang="en"
    className={`${spaceGrotesk.variable} ${spaceMono.variable} ${dmSans.variable} ${instrumentSerif.variable}`}
    suppressHydrationWarning
  >
    <head>
      {/* Applies a saved theme before first paint to avoid a flash. */}
      {/* eslint-disable-next-line react/no-danger -- static constant string */}
      <script dangerouslySetInnerHTML={{ __html: themeScript }} />
    </head>
    <body>
      {jsonLd.map((data) => (
        <JsonLd key={data['@type']} data={data} />
      ))}
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <CommandPalette posts={getAllPosts()} />
      <main id="main">{children}</main>
      <Footer />
    </body>
  </html>
);

export default RootLayout;
