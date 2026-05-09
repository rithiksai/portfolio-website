import type { MetadataRoute } from 'next';
import { RITHIK } from '@/content/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://rithik-portfolio.vercel.app';
  return [
    { url: `${base}/`, lastModified: new Date() },
    ...RITHIK.projects.map((project) => ({
      url: `${base}/work/${project.slug}`,
      lastModified: new Date(),
    })),
  ];
}
