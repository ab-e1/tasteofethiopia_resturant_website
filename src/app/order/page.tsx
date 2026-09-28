import type { Metadata } from 'next';
import { OrderHubContent } from '@/components/order/OrderHubContent';
import { RESTAURANT_CONFIG } from '@/config/restaurant';
import { ORDERING_PROVIDERS } from '@/config/ordering';

export const metadata: Metadata = {
  title: 'Online Eten Bestellen Den Haag | Taste of Ethiopia',
  description:
    'Bestel authentieke Ethiopische gerechten, malse vleesstoven, veganistische Yetsom combinaties en verse teff injera gemakkelijk via Uber Eats of Thuisbezorgd.nl in Den Haag.',
  alternates: {
    canonical: 'https://tasteofethiopia.nl/order',
  },
  openGraph: {
    title: 'Online Eten Bestellen Den Haag | Taste of Ethiopia',
    description:
      'Verse Ethiopische gerechten en handgemaakte teff injera thuisbezorgd via Uber Eats en Thuisbezorgd.nl in Den Haag.',
    url: 'https://tasteofethiopia.nl/order',
    siteName: 'Taste of Ethiopia',
    locale: 'nl_NL',
    type: 'website',
  },
};

export default function OrderPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FoodEstablishment',
    name: RESTAURANT_CONFIG.name,
    url: 'https://tasteofethiopia.nl/order',
    telephone: RESTAURANT_CONFIG.contact.phoneHref,
    address: {
      '@type': 'PostalAddress',
      streetAddress: RESTAURANT_CONFIG.address.street,
      addressLocality: RESTAURANT_CONFIG.address.city,
      postalCode: RESTAURANT_CONFIG.address.postalCode,
      addressCountry: 'NL',
    },
    potentialAction: ORDERING_PROVIDERS.map((provider) => ({
      '@type': 'OrderAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: provider.storeUrl,
        actionPlatform: ['http://schema.org/DesktopWebPlatform', 'http://schema.org/MobileWebPlatform'],
      },
      deliveryMethod: 'http://purl.org/goodrelations/v1#DeliveryModeDirectDownload',
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main>
        <OrderHubContent />
      </main>
    </>
  );
}
