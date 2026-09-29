'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { TRANSLATIONS } from '@/config/translations';

export function BunnaCeremony() {
  const { language } = useLanguage();
  const tBunna = TRANSLATIONS.home.bunna;

  return (
    <section
      aria-labelledby="bunna-heading"
      className="py-20 sm:py-24 md:py-32 bg-canvas"
    >
      <div className="max-w-content mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Large Ritual Photography (6 cols on lg) */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] sm:aspect-[5/4] w-full rounded overflow-hidden bg-surface">
              <Image
                src="/images/bunna-ceremony.webp"
                alt="Traditional Ethiopian Bunna coffee ceremony with Jebena clay flask pouring into cini cups with frankincense smoke"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
            <p className="mt-3 text-xs font-sans text-muted/80 italic">
              {language === 'nl'
                ? 'De traditionele Bunna ceremonie — vers gebrand en geschonken met wierook.'
                : 'The traditional Bunna coffee ceremony — freshly roasted and poured with frankincense.'}
            </p>
          </div>

          {/* Narrative & Restrained Pours (6 cols on lg) */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-ochre font-sans block mb-2">
                {tBunna.eyebrow[language]}
              </span>
              <h2
                id="bunna-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-primary tracking-tight leading-tight"
              >
                {tBunna.title[language]}
              </h2>
            </div>

            <p className="text-base sm:text-lg font-sans text-muted leading-relaxed">
              {tBunna.subtitle[language]}
            </p>

            {/* Restrained Typographic Pours Detail (no cards, no icons) */}
            <div className="pt-6 border-t border-border/60 space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-terracotta font-sans block">
                {language === 'nl' ? 'De Drie Traditionele Schenkingen' : 'The Three Traditional Pours'}
              </span>
              <p className="text-sm font-sans text-muted leading-relaxed">
                <strong className="text-primary font-medium">1. Abol</strong> ({language === 'nl' ? 'het eerste welkom' : 'the first welcome'}) —{' '}
                <strong className="text-primary font-medium">2. Tona</strong> ({language === 'nl' ? 'het goede gesprek' : 'the deepening conversation'}) —{' '}
                <strong className="text-primary font-medium">3. Baraka</strong> ({language === 'nl' ? 'de zegen van gastvrijheid' : 'the final blessing of hospitality'}).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
