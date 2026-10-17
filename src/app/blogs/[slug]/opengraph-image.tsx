import { getAllPosts } from '@/lib/blog';
import { renderOg } from '@/lib/og';

export const alt = 'Blog post';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export const generateStaticParams = () => getAllPosts().map((p) => ({ slug: p.slug }));

const OgImage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const post = getAllPosts().find((p) => p.slug === slug);

  return renderOg({
    eyebrow: `Writing · ${post?.readTime ?? ''}`,
    title: post?.title ?? 'Writing',
    subtitle: post?.excerpt ?? ''
  });
};

export default OgImage;
