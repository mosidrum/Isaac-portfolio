import { projects } from '@/data';
import { renderOg } from '@/lib/og';

export const alt = 'Case study';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export const generateStaticParams = () => projects.map((p) => ({ slug: p.slug }));

const OgImage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  return renderOg({
    eyebrow: `Case study · ${project?.category ?? 'Work'}`,
    title: project?.title ?? 'Case study',
    subtitle: project?.description ?? ''
  });
};

export default OgImage;
