import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://tasteofethiopia.nl/sitemap.xml',
    host: 'https://tasteofethiopia.nl',
  };
}
