import Link from 'next/link';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { socialLinks } from '@/data';
import styles from './Hero.module.css';

const iconMap: Record<string, React.ReactNode> = {
  LinkedIn: <Linkedin size={22} />,
  GitHub: <Github size={22} />,
  Email: <Mail size={22} />
};

export const Hero = () => (
    <section className={styles.hero}>
      <p className={styles.greeting}>Senior Software Engineer</p>
      <h1 className={styles.name}>Isaac Ayodele</h1>

      <p className={styles.summary}>
        I build <strong>scalable, user-focused applications</strong> across web and mobile, with a
        strong emphasis on performance, clean architecture, and maintainability. With over 5 years
        of hands-on experience delivering production-ready products, I work comfortably across the
        stack using modern JavaScript frameworks and backend services.
      </p>

      <p className={styles.expertise}>
        I develop robust APIs, integrate third-party services, and implement efficient UI systems
        that enhance user experience and developer velocity. My approach focuses on writing clean,
        reusable code, improving application reliability, and contributing to faster, more
        predictable product delivery in collaborative environments.
      </p>

      <div className={styles.cta}>
        <Link href="/about" className={styles.ctaLink}>
          <span>Learn more about my work</span>
          <ArrowRight size={18} />
        </Link>
      </div>

      <div className={styles.social}>
        {socialLinks.map(({ platform, url, ariaLabel }) => (
          <a
            key={platform}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label={ariaLabel}
          >
            {iconMap[platform]}
          </a>
        ))}
      </div>
    </section>
);
