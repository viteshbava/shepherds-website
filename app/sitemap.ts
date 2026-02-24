import type { MetadataRoute } from 'next';
import musicList from '@/app/data/music/musicList';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

  const musicPages: MetadataRoute.Sitemap = musicList.map((release) => ({
    url: `${baseUrl}/music/${release.slug}`,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/music`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...musicPages,
    {
      url: `${baseUrl}/purchase`,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];
}
