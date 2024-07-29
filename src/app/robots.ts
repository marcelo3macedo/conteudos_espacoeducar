import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${apiUrl}/sitemap.xml`,
  };
}
