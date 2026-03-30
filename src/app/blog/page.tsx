import { BlogPostCard } from '@/components';
import { blogPosts } from '@/data';
import styles from './page.module.css';

const BlogPage = () => (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Writing</h1>
        <p className={styles.subtitle}>
          Technical articles on architecture, engineering practices, and lessons learned from
          building production systems. Published on{' '}
          <a
            href="https://medium.com/@mosiokanga"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Medium
          </a>
          .
        </p>
      </header>

      <div className={styles.posts}>
        {blogPosts.map((post) => (
          <BlogPostCard key={post.title} post={post} />
        ))}
      </div>

      <div className={styles.cta}>
        <p className={styles.ctaText}>
          I write about frontend architecture, backend patterns, and engineering leadership. Follow
          me on Medium for new articles.
        </p>
      </div>
    </div>
);

export default BlogPage;
