import type { MetadataRoute } from 'next';
import { siteUrl } from '@/data';

const Robots = (): MetadataRoute.Robots => ({
  rules: {
    userAgent: '*',
    allow: '/'
  },
  sitemap: `${siteUrl}/sitemap.xml`
});

export default Robots;
