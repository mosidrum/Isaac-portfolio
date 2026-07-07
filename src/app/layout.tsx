import type { Metadata } from 'next';
import { Space_Grotesk, Space_Mono, DM_Sans } from 'next/font/google';
import { Navbar, Footer } from '@/components';
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

export const metadata: Metadata = {
  title: 'Isaac Ayodele | Senior Software Engineer',
  description:
    'Senior Software Engineer with 5+ years building production systems across web and mobile. Full-stack expertise in React, Node.js, TypeScript, and React Native.',
  keywords: [
    'Software Engineer',
    'Full Stack Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'React Native',
    'Lagos'
  ],
  authors: [{ name: 'Isaac Ayodele' }],
  openGraph: {
    title: 'Isaac Ayodele | Senior Software Engineer',
    description:
      'Senior Software Engineer with 5+ years building production systems across web and mobile.',
    type: 'website',
    url: 'https://isaacayodele.vercel.app'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Isaac Ayodele | Senior Software Engineer',
    description:
      'Senior Software Engineer with 5+ years building production systems across web and mobile.'
  }
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html
    lang="en"
    className={`${spaceGrotesk.variable} ${spaceMono.variable} ${dmSans.variable}`}
  >
    <body>
      <Navbar />
      {children}
      <Footer />
    </body>
  </html>
);

export default RootLayout;
