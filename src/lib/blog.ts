import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeStringify from 'rehype-stringify';

const blogsDir = path.join(process.cwd(), 'src/content/blogs');
const isProduction = process.env.NODE_ENV === 'production';
const WORDS_PER_MINUTE = 200;

export interface BlogMeta {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  tags: string[];
  excerpt: string;
  draft: boolean;
}

export interface TocItem {
  id: string;
  text: string;
  level: 2 | 3;
}

export interface BlogPost extends BlogMeta {
  contentHtml: string;
  toc: TocItem[];
}

const computeReadTime = (content: string) => {
  const words = content.split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / WORDS_PER_MINUTE))} min read`;
};

/** The page renders the title as its own h1, so a duplicate leading "# Title" is dropped. */
const stripLeadingTitle = (content: string) => content.replace(/^\s*# .+\r?\n/, '');

const toMeta = (slug: string, data: matter.GrayMatterFile<string>['data'], content: string): BlogMeta => ({
  slug,
  title: (data.title as string) ?? slug,
  date: (data.date as string) ?? '',
  readTime: computeReadTime(content),
  tags: (data.tags as string[]) ?? [],
  excerpt: (data.excerpt as string) ?? '',
  draft: data.draft === true
});

const extractToc = (html: string): TocItem[] =>
  [...html.matchAll(/<h([23]) id="([^"]+)">([\s\S]*?)<\/h\1>/g)].map((match) => ({
    level: Number(match[1]) as 2 | 3,
    id: match[2],
    text: match[3].replaceAll(/<[^>]+>/g, '').replace(/#$/, '').trim()
  }));

export function getAllPosts(): BlogMeta[] {
  if (!fs.existsSync(blogsDir)) return [];

  const files = fs.readdirSync(blogsDir).filter((f) => f.endsWith('.md'));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.md$/, '');
    const raw = fs.readFileSync(path.join(blogsDir, filename), 'utf8');
    const { data, content } = matter(raw);
    return toMeta(slug, data, content);
  });

  return posts
    .filter((post) => !(isProduction && post.draft))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const filePath = path.join(blogsDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);
  const meta = toMeta(slug, data, content);
  if (isProduction && meta.draft) return null;

  const processed = await remark()
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, {
      behavior: 'append',
      properties: { className: ['anchor'], ariaLabel: 'Link to this section' },
      content: { type: 'text', value: '#' }
    })
    .use(rehypePrettyCode, {
      theme: { dark: 'github-dark', light: 'github-light' },
      keepBackground: false
    })
    .use(rehypeStringify)
    .process(stripLeadingTitle(content));
  const contentHtml = processed.toString();

  return { ...meta, contentHtml, toc: extractToc(contentHtml) };
}

export function formatDate(dateStr: string): string {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}
