import type { MetadataRoute } from 'next';
import { siteName, siteTitle } from '@/data';

const manifest = (): MetadataRoute.Manifest => ({
  name: `${siteName} | ${siteTitle}`,
  short_name: siteName,
  start_url: '/',
  display: 'standalone',
  background_color: '#000000',
  theme_color: '#000000'
});

export default manifest;
