import type { Metadata } from 'next';
import {
  Hero,
  Capabilities,
  RecentWork,
  Experience,
  HowIWork,
  Contact,
  Reveal
} from '@/components';

export const metadata: Metadata = {
  alternates: { canonical: '/' }
};

const Home = () => (
  <>
    <Hero />
    <Reveal>
      <RecentWork />
    </Reveal>
    <Reveal>
      <Experience />
    </Reveal>
    <Reveal>
      <HowIWork />
    </Reveal>
    <Reveal>
      <Capabilities />
    </Reveal>
    <Reveal>
      <Contact />
    </Reveal>
  </>
);

export default Home;
