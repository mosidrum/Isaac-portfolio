import Image from 'next/image';
import profileImage from '@/assets/images/myself.jpg';

// Technology logos
import reactLogo from '@/assets/images/react_logo.png';
import nextLogo from '@/assets/images/next.png';
import typescriptLogo from '@/assets/images/typescript.png';
import javascriptLogo from '@/assets/images/javascript.png';
import nodeLogo from '@/assets/images/nodejs.png';
import expressLogo from '@/assets/images/express.png';
import postgresLogo from '@/assets/images/postgresql.png';
import mongoLogo from '@/assets/images/mongo.png';
import prismaLogo from '@/assets/images/prisma.png';
import tailwindLogo from '@/assets/images/tailwind.png';
import storybookLogo from '@/assets/images/storybook.png';
import expoLogo from '@/assets/images/expo.png';
import firebaseLogo from '@/assets/images/firebase.png';
import gitLogo from '@/assets/images/git.png';
import graphqlLogo from '@/assets/images/graph.png';
import styles from './page.module.css';

const technologies = [
  { src: reactLogo, name: 'React' },
  { src: nextLogo, name: 'Next.js' },
  { src: typescriptLogo, name: 'TypeScript' },
  { src: javascriptLogo, name: 'JavaScript' },
  { src: nodeLogo, name: 'Node.js' },
  { src: expressLogo, name: 'Express' },
  { src: postgresLogo, name: 'PostgreSQL' },
  { src: mongoLogo, name: 'MongoDB' },
  { src: prismaLogo, name: 'Prisma' },
  { src: tailwindLogo, name: 'Tailwind CSS' },
  { src: storybookLogo, name: 'Storybook' },
  { src: expoLogo, name: 'Expo' },
  { src: firebaseLogo, name: 'Firebase' },
  { src: gitLogo, name: 'Git' },
  { src: graphqlLogo, name: 'GraphQL' }
];

const AboutPage = () => (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>About Me</h1>
        <p className={styles.subtitle}>
          Software engineer focused on building reliable, scalable systems
        </p>
      </header>

      <section className={styles.intro}>
        <div className={styles.content}>
          <p className={styles.lead}>
            I&apos;m a <strong>Senior Software Engineer</strong> with 5+ years of experience
            building and shipping production systems across web, mobile, and cloud environments.
            My work spans the full software lifecycle—from system design and API architecture to
            deployment, monitoring, and long-term maintenance.
          </p>

          <p>
            I approach engineering with a systems-first mindset. I care deeply about how components
            interact, how data flows through the system, and how decisions made today affect
            scalability and reliability tomorrow. My focus is on building software that is
            resilient, observable, and easy for teams to evolve.
          </p>

          <p>
            I have delivered measurable impact by improving performance, strengthening system
            stability, and reducing operational overhead through better architecture and tooling.
            I believe in clear contracts between services, pragmatic testing strategies, and using
            metrics to guide technical decisions.
          </p>

          <p>
            Beyond individual contribution, I invest in engineering culture—mentoring teammates,
            driving code quality through thoughtful reviews, and helping define standards that make
            teams more effective over time. I enjoy working in environments where ownership,
            accountability, and continuous improvement are part of the DNA.
          </p>
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src={profileImage}
            alt="Isaac Ayodele"
            className={styles.image}
            priority
            placeholder="blur"
          />
        </div>
      </section>

      <section className={styles.techSection}>
        <h2 className={styles.sectionTitle}>
          Core <span className={styles.highlight}>Technologies</span>
        </h2>
        <p className={styles.sectionSubtitle}>
          Tools I use to design, build, and operate production systems
        </p>

        <div className={styles.techGrid}>
          {technologies.map(({ src, name }) => (
            <div key={name} className={styles.techItem}>
              <Image src={src} alt={name} width={60} height={60} className={styles.techLogo} />
              <span className={styles.techName}>{name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
);

export default AboutPage;
