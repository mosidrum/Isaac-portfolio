import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog';
import { projects, siteLastUpdated, siteUrl } from '@/data';

const Sitemap = (): MetadataRoute.Sitemap => {
  const lastModified = new Date(siteLastUpdated);

  const staticRoutes = ['', '/projects', '/blogs', '/resume', '/uses'].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.7
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${siteUrl}/projects/${project.slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: project.featured ? 0.8 : 0.5
  }));

  const blogRoutes = getAllPosts().map((post) => ({
    url: `${siteUrl}/blogs/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : lastModified,
    changeFrequency: 'yearly' as const,
    priority: 0.4
  }));

  return [...staticRoutes, ...projectRoutes, ...blogRoutes];
};

export default Sitemap;
