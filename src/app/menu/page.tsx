import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import { MenuSection } from '@/components/menu/MenuSection';
import { MenuHero } from '@/components/menu/MenuHero';
import { RESTAURANT_CONFIG } from '@/config/restaurant';
import { MENU_CATEGORIES } from '@/config/menu';

export const metadata: Metadata = {
  title: 'Menukaart | Taste of Ethiopia Den Haag',
  description:
    'Bekijk de complete menukaart van Taste of Ethiopia in Den Haag. Authentieke Doro Wot, malse Tibs, veganistische combinatieschotels (Yetsom), verse teff injera, bieren en Rift Valley wijnen.',
  alternates: {
    canonical: 'https://tasteofethiopia.nl/menu',
  },
  openGraph: {
    title: 'Menukaart | Taste of Ethiopia Den Haag',
    description:
      'Geverifieerde menukaart met traditionele Ethiopische gerechten, verse teff injera, rijke vegan combinatieschotels en authentieke bieren.',
    url: 'https://tasteofethiopia.nl/menu',
    siteName: 'Taste of Ethiopia',
    locale: 'nl_NL',
    type: 'website',
  },
};

export default function MenuPage() {
  // Structured Data Schema for Restaurant Menu
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Menu',
    name: 'Taste of Ethiopia Menukaart',
    description: 'Authentieke Ethiopische gerechten, vlees- en veganistische combinaties, en dranken in Den Haag.',
    inLanguage: 'nl',
    hasMenuSection: MENU_CATEGORIES.map((category) => ({
      '@type': 'MenuSection',
      name: category.title,
      description: category.subtitle,
      hasMenuItem: category.items.map((item) => ({
        '@type': 'MenuItem',
        name: item.name,
        description: item.description,
        offers: {
          '@type': 'Offer',
          price: item.priceNumeric,
          priceCurrency: 'EUR',
        },
        suitableForDiet: item.dietary.includes('vegan')
          ? 'https://schema.org/VeganDiet'
          : item.dietary.includes('vegetarian')
          ? 'https://schema.org/VegetarianDiet'
          : undefined,
      })),
    })),
  };

  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb & Editorial Header Hero */}
      <MenuHero />

      {/* Main Native Editorial Menu Section */}
      <main>
        <MenuSection />
      </main>
    </>
  );
}
