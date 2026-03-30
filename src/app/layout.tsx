import type { Metadata } from 'next';
import { Navbar, Footer } from '@/components';
import './globals.css';

export const metadata: Metadata = {
  title: 'Isaac Ayodele | Senior Software Engineer',
  description:
    'Senior Software Engineer specializing in scalable frontend systems, React/React Native, and Node.js backends. 5+ years of end-to-end product delivery.',
  keywords: [
    'Software Engineer',
    'Full Stack Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Node.js'
  ],
  authors: [{ name: 'Isaac Ayodele' }],
  openGraph: {
    title: 'Isaac Ayodele | Senior Software Engineer',
    description:
      'Senior Software Engineer specializing in scalable frontend systems and end-to-end product delivery.',
    type: 'website'
  }
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
    <html lang="en">
      <body>
        <Navbar />
        <main className="main-container">{children}</main>
        <Footer />
      </body>
    </html>
);

export default RootLayout;
