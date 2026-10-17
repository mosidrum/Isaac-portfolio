import { renderOg } from '@/lib/og';

export const alt = 'Isaac Ayodele — Full-Stack Engineer · AI Agents';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const OgImage = () =>
  renderOg({
    eyebrow: 'Full-stack engineer · AI agents · Remote',
    title: 'Isaac Ayodele',
    subtitle: 'Full-stack engineer building AI agent systems. 5+ years shipping web and mobile products.'
  });

export default OgImage;
