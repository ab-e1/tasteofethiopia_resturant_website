import type { Metadata } from 'next';
import { RESTAURANT_CONFIG } from '@/config/restaurant';
import { RESERVATION_CONFIG } from '@/config/reservations';
import { ReservationContent } from '@/components/reserve/ReservationContent';

export const metadata: Metadata = {
  title: 'Tafel Reserveren | Taste of Ethiopia Den Haag',
  description:
    'Reserveer een tafel bij Taste of Ethiopia in Den Haag. Authentieke Ethiopische gastvrijheid, versgebakken teff injera en gezamenlijk dineren aan het Mesob op Wagenstraat 177.',
  alternates: {
    canonical: 'https://tasteofethiopia.nl/reserve',
    languages: {
      'nl-NL': 'https://tasteofethiopia.nl/reserve?lang=nl',
      'en-US': 'https://tasteofethiopia.nl/reserve?lang=en',
    },
  },
  openGraph: {
    title: 'Tafel Reserveren | Taste of Ethiopia Den Haag',
    description:
      'Online tafel reserveren bij Taste of Ethiopia in Chinatown Den Haag via TheFork.',
    url: 'https://tasteofethiopia.nl/reserve',
    locale: 'nl_NL',
    type: 'website',
  },
};

export default function ReservePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FoodEstablishment',
    name: RESTAURANT_CONFIG.name,
    address: {
      '@type': 'PostalAddress',
      streetAddress: RESTAURANT_CONFIG.address.street,
      addressLocality: RESTAURANT_CONFIG.address.city,
      postalCode: RESTAURANT_CONFIG.address.postalCode,
      addressCountry: 'NL',
    },
    telephone: RESTAURANT_CONFIG.contact.phoneHref,
    url: 'https://tasteofethiopia.nl/reserve',
    acceptsReservations: 'True',
    potentialAction: {
      '@type': 'ReserveAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: RESERVATION_CONFIG.directBookingUrl,
        inLanguage: ['nl', 'en'],
        actionPlatform: [
          'http://schema.org/DesktopWebPlatform',
          'http://schema.org/MobileWebPlatform',
        ],
      },
      result: {
        '@type': 'FoodEstablishmentReservation',
        name: 'Table Reservation via TheFork',
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ReservationContent />
    </>
  );
}
