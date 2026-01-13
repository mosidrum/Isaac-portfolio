import Link from 'next/link';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { socialLinks } from '@/data';
import styles from './Hero.module.css';

const iconMap: Record<string, React.ReactNode> = {
  LinkedIn: <Linkedin size={22} />,
  GitHub: <Github size={22} />,
  Email: <Mail size={22} />
};

export function Hero() {
  return (
    <section className={styles.hero}>
      <p className={styles.greeting}>Senior Software Engineer</p>
      <h1 className={styles.name}>Isaac Ayodele</h1>

      <p className={styles.summary}>
        I design and deliver <strong>reliable, scalable software systems</strong> with a focus on
        performance, maintainability, and long-term product impact. With 5+ years of end-to-end
        product delivery, I build across the stack spanning modern web, mobile, and backend
        platforms within fast-moving, production environments.
      </p>

      <p className={styles.expertise}>
        I architect resilient APIs, implement secure authentication flows, design event-driven
        workflows, and establish CI/CD pipelines that enable teams to ship with confidence. My work
        consistently reduces cycle time and improves system stability through strong engineering
        fundamentals, pragmatic testing, and clear architectural boundaries.
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
}
