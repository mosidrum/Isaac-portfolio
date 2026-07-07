import Link from 'next/link';
import type { Metadata } from 'next';
import { getAllPosts, formatDate } from '@/lib/blog';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Writings — Isaac Ayodele',
  description: 'Thoughts on software engineering, system design, and building production systems.'
};

const BlogsPage = () => {
  const posts = getAllPosts();

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <p className={styles.label}>Writings</p>
        <h1 className={styles.headline}>
          Thoughts on engineering<br />and building things.
        </h1>

        {posts.length === 0 ? (
          <p className={styles.empty}>No posts yet. Check back soon.</p>
        ) : (
          <div className={styles.list}>
            {posts.map((post, idx) => (
              <Link key={post.slug} href={`/blogs/${post.slug}`} className={styles.row}>
                <div className={styles.rowLeft}>
                  <span className={styles.number}>{String(idx + 1).padStart(2, '0')}</span>
                  <div className={styles.meta}>
                    <h2 className={styles.title}>{post.title}</h2>
                    <p className={styles.excerpt}>{post.excerpt}</p>
                    <div className={styles.tags}>
                      {post.tags.map((tag) => (
                        <span key={tag} className={styles.tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={styles.rowRight}>
                  <span className={styles.date}>{formatDate(post.date)}</span>
                  <span className={styles.readTime}>{post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogsPage;
