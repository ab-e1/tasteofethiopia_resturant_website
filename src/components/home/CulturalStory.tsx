'use client';

import Image from 'next/image';
import { Sparkles } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { TRANSLATIONS } from '@/config/translations';

export function CulturalStory() {
  const { language } = useLanguage();
  const tCulture = TRANSLATIONS.home.cultural;

  return (
    <section
      id="about"
      aria-labelledby="culture-heading"
      className="py-20 md:py-28 bg-canvas border-b border-border/60 scroll-mt-20"
    >
      <div className="max-w-content mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Atmospheric Framed Photography (5 cols on lg) */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] w-full rounded overflow-hidden border border-border shadow-subtle bg-surface">
              <Image
                src="/images/cultural-gursha.webp"
                alt="Two diners sharing food and tearing teff injera together from a communal platter, embodying the Ethiopian Gursha tradition"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
            </div>
            {/* Cultural caption badge */}
            <div className="mt-3 text-center sm:text-left">
              <span className="text-xs font-sans text-muted italic">
                {language === 'nl'
                  ? 'Gezamenlijk dineren aan het Mesob — injera en stoofgerechten delen met de hand.'
                  : 'Communal dining at the Mesob — sharing injera and wot stews by hand.'}
              </span>
            </div>
          </div>

          {/* Right Column: Editorial Narrative (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-berbere font-sans">
                {tCulture.eyebrow[language]}
              </span>
              <h2
                id="culture-heading"
                className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-primary mt-2 leading-tight"
              >
                {tCulture.title[language]}
              </h2>
            </div>

            <p className="text-base sm:text-lg font-sans text-muted leading-relaxed">
              {language === 'nl'
                ? 'In de Ethiopische cultuur is eten een gezamenlijke beleving. Een maaltijd is een uitnodiging om te vertragen, brood met elkaar te breken en vriendschappen te verdiepen.'
                : 'In Ethiopian culture, dining is rarely a solitary affair. A meal is an invitation to slow down, break bread together, and deepen connection with those seated around you.'}
            </p>

            {/* Cultural Pillar Points */}
            <div className="space-y-4 pt-2">
              <div className="border-l-2 border-terracotta pl-4 py-1">
                <h3 className="font-serif text-lg font-semibold text-primary">
                  {tCulture.injeraTitle[language]}
                </h3>
                <p className="text-sm font-sans text-muted mt-1 leading-relaxed">
                  {tCulture.injeraDesc[language]}
                </p>
              </div>

              <div className="border-l-2 border-ochre pl-4 py-1">
                <h3 className="font-serif text-lg font-semibold text-primary">
                  {tCulture.mesobTitle[language]}
                </h3>
                <p className="text-sm font-sans text-muted mt-1 leading-relaxed">
                  {tCulture.mesobDesc[language]}
                </p>
              </div>

              <div className="border-l-2 border-berbere pl-4 py-1">
                <h3 className="font-serif text-lg font-semibold text-primary">
                  {tCulture.gurshaTitle[language]}
                </h3>
                <p className="text-sm font-sans text-muted mt-1 leading-relaxed">
                  {tCulture.gurshaDesc[language]}
                </p>
              </div>
            </div>

            {/* Warm Hospitality Note */}
            <div className="mt-6 p-4 sm:p-5 rounded bg-surface border border-border/80 flex items-start gap-3.5">
              <Sparkles className="w-5 h-5 text-terracotta shrink-0 mt-0.5" aria-hidden="true" />
              <div className="text-xs sm:text-sm font-sans text-muted leading-relaxed">
                <strong className="text-primary font-medium block">
                  {language === 'nl' ? 'Gastvrijheid voor Iedere Gast' : 'Hospitality for Every Guest'}
                </strong>
                {language === 'nl'
                  ? 'Traditioneel eten we met de hand met stukjes zachte injera. Voor gasten die de voorkeur geven aan bestek, wordt dit met alle plezier verzorgd.'
                  : 'Dining by hand using torn pieces of injera is our cherished tradition. For guests who prefer utensils, cutlery is always warmly provided on request.'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
