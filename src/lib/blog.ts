import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const blogsDir = path.join(process.cwd(), 'src/content/blogs');

export interface BlogMeta {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  tags: string[];
  excerpt: string;
}

export interface BlogPost extends BlogMeta {
  contentHtml: string;
}

export function getAllPosts(): BlogMeta[] {
  if (!fs.existsSync(blogsDir)) return [];

  const files = fs.readdirSync(blogsDir).filter((f) => f.endsWith('.md'));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.md$/, '');
    const raw = fs.readFileSync(path.join(blogsDir, filename), 'utf8');
    const { data } = matter(raw);

    return {
      slug,
      title: (data.title as string) ?? slug,
      date: (data.date as string) ?? '',
      readTime: (data.readTime as string) ?? '',
      tags: (data.tags as string[]) ?? [],
      excerpt: (data.excerpt as string) ?? ''
    };
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const filePath = path.join(blogsDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);

  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();

  return {
    slug,
    title: (data.title as string) ?? slug,
    date: (data.date as string) ?? '',
    readTime: (data.readTime as string) ?? '',
    tags: (data.tags as string[]) ?? [],
    excerpt: (data.excerpt as string) ?? '',
    contentHtml
  };
}

export function formatDate(dateStr: string): string {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}
