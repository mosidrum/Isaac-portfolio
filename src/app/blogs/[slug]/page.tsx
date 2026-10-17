import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';
import { siteName, siteUrl } from '@/data';
import { getAllPosts, getPostBySlug, formatDate } from '@/lib/blog';
import styles from './page.module.css';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blogs/${slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date || undefined,
      authors: [siteName],
      tags: post.tags
    }
  };
}

const BlogPostPage = async ({ params }: Props) => {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date || undefined,
    author: { '@type': 'Person', name: siteName, url: siteUrl },
    mainEntityOfPage: `${siteUrl}/blogs/${post.slug}`,
    keywords: post.tags.join(', ')
  };

  return (
    <div className={styles.page}>
      <JsonLd data={jsonLd} />
      <div className={styles.inner}>
        <Link href="/blogs" className={styles.back}>
          ← Writing
        </Link>

        <header className={styles.header}>
          <div className={styles.tags}>
            {post.tags.map((tag) => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.meta}>
            <span>{formatDate(post.date)}</span>
            <span className={styles.dot}>·</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        <hr className={styles.divider} />

        {post.toc.length >= 3 && (
          <nav className={styles.toc} aria-label="On this page">
            <p className={styles.tocLabel}>On this page</p>
            <ol className={styles.tocList}>
              {post.toc.map((item) => (
                <li key={item.id} className={item.level === 3 ? styles.tocSub : undefined}>
                  <a href={`#${item.id}`}>{item.text}</a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        <article
          className={`prose ${styles.article}`}
          // Markdown is converted at build time from local files.
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </div>
    </div>
  );
};

export default BlogPostPage;
