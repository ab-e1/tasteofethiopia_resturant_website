import type { Metadata } from 'next';
import { Fraunces, Plus_Jakarta_Sans } from 'next/font/google';
import '@/styles/globals.css';
import { RESTAURANT_CONFIG } from '@/config/restaurant';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { LanguageProvider } from '@/context/LanguageContext';

const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fraunces',
  axes: ['opsz'],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plus-jakarta',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tasteofethiopia.nl'),
  title: {
    default: 'Taste of Ethiopia | Authentiek Ethiopisch Restaurant Den Haag',
    template: '%s | Taste of Ethiopia',
  },
  description:
    'Ervaar de authentieke Ethiopische keuken in Den Haag. Traditionele gerechten, injera en gastvrijheid aan de Wagenstraat 177.',
  keywords: [
    'Taste of Ethiopia',
    'Ethiopisch restaurant Den Haag',
    'Restaurant Wagenstraat Den Haag',
    'Ethiopian restaurant The Hague',
    'Injera Den Haag',
  ],
  authors: [{ name: 'Taste of Ethiopia' }],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: 'https://tasteofethiopia.nl',
    siteName: 'Taste of Ethiopia',
    title: 'Taste of Ethiopia | Authentiek Ethiopisch Restaurant Den Haag',
    description:
      'Traditionele gerechten, teff injera en warme Ethiopische gastvrijheid in Den Haag Centrum.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Verified Schema.org structured data (contains only confirmed physical location facts; no unverified phone, hours, or actions)
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: RESTAURANT_CONFIG.name,
    url: 'https://tasteofethiopia.nl',
    address: {
      '@type': 'PostalAddress',
      streetAddress: RESTAURANT_CONFIG.address.street,
      addressLocality: RESTAURANT_CONFIG.address.city,
      postalCode: RESTAURANT_CONFIG.address.postalCode,
      addressCountry: 'NL',
    },
    servesCuisine: ['Ethiopian', 'African', 'Vegetarian', 'Vegan'],
  };

  return (
    <html lang="nl" className={`${fraunces.variable} ${plusJakartaSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-canvas text-primary antialiased selection:bg-berbere selection:text-white">
        <LanguageProvider>
          {/* Skip to Content Link for keyboard accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-berbere focus:text-white focus:rounded focus:shadow-elevated focus-ring font-medium text-sm"
          >
            Skip to main content
          </a>

          {/* Global Site Chrome */}
          <Header />

          {/* Semantic Main Landmark */}
          <main id="main-content" className="flex-1">
            {children}
          </main>

          {/* Global Footer */}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
