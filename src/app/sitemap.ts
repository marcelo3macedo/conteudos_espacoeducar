import { fetchPosts } from '@/utils/fetch';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const data = await fetchPosts(1, 1000);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const posts = [] as any;
  data.posts.map((x: any) => {
    posts.push({
      url: `${apiUrl}/para-professores/${x.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    });
  });

  return [
    {
      url: `${apiUrl}`,
      lastModified: new Date(),
      changeFrequency: `yearly`,
      priority: 1,
    },
    {
      url: `${apiUrl}/perfil`,
      lastModified: new Date(),
      changeFrequency: `monthly`,
      priority: 0.8,
    },
    {
      url: `${apiUrl}/institucional/politicas-privacidade`,
      lastModified: new Date(),
      changeFrequency: `weekly`,
      priority: 0.5,
    },
    {
      url: `${apiUrl}/institucional/contate-nos`,
      lastModified: new Date(),
      changeFrequency: `weekly`,
      priority: 0.5,
    },
    {
      url: `${apiUrl}/institucional/sobre-nos`,
      lastModified: new Date(),
      changeFrequency: `weekly`,
      priority: 0.5,
    },
    {
      url: `${apiUrl}/para-professores`,
      lastModified: new Date(),
      changeFrequency: `weekly`,
      priority: 0.5,
    },
    {
      url: `${apiUrl}/para-alunos`,
      lastModified: new Date(),
      changeFrequency: `weekly`,
      priority: 0.5,
    },
    ...posts,
  ];
}
