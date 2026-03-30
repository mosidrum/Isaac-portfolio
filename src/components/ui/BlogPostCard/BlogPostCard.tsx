import { Clock, Calendar, Tag } from 'lucide-react';
import type { BlogPost } from '@/data';
import styles from './BlogPostCard.module.css';

interface BlogPostCardProps {
  post: BlogPost;
}

export const BlogPostCard = ({ post }: BlogPostCardProps) => {
  const { title, excerpt, url, readTime, publishedAt, tags } = post;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
    >
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.excerpt}>{excerpt}</p>

      <div className={styles.meta}>
        <div className={styles.metaItem}>
          <Clock size={14} />
          <span>{readTime}</span>
        </div>
        <div className={styles.metaItem}>
          <Calendar size={14} />
          <span>{publishedAt}</span>
        </div>
      </div>

      {tags && tags.length > 0 && (
        <div className={styles.tags}>
          {tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              <Tag size={12} />
              {tag}
            </span>
          ))}
        </div>
      )}
    </a>
  );
}
