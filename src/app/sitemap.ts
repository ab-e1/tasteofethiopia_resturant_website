import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tasteofethiopia.nl';
  const currentDate = new Date();

  return [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: {
        languages: {
          nl: `${baseUrl}?lang=nl`,
          en: `${baseUrl}?lang=en`,
        },
      },
    },
    {
      url: `${baseUrl}/menu`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: {
        languages: {
          nl: `${baseUrl}/menu?lang=nl`,
          en: `${baseUrl}/menu?lang=en`,
        },
      },
    },
    {
      url: `${baseUrl}/order`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: {
        languages: {
          nl: `${baseUrl}/order?lang=nl`,
          en: `${baseUrl}/order?lang=en`,
        },
      },
    },
    {
      url: `${baseUrl}/reserve`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: {
        languages: {
          nl: `${baseUrl}/reserve?lang=nl`,
          en: `${baseUrl}/reserve?lang=en`,
        },
      },
    },
  ];
}
