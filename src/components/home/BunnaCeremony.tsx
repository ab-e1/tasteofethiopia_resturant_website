'use client';

import Image from 'next/image';
import { Flame, Wind, Coffee } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { TRANSLATIONS } from '@/config/translations';

export function BunnaCeremony() {
  const { language } = useLanguage();
  const tBunna = TRANSLATIONS.home.bunna;

  return (
    <section
      aria-labelledby="bunna-heading"
      className="py-20 md:py-28 bg-canvas border-b border-border/60"
    >
      <div className="max-w-content mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Storytelling Narrative (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-ochre font-sans">
                {tBunna.eyebrow[language]}
              </span>
              <h2
                id="bunna-heading"
                className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-primary mt-2 leading-tight"
              >
                {tBunna.title[language]}
              </h2>
            </div>

            <p className="text-base sm:text-lg font-sans text-muted leading-relaxed">
              {tBunna.subtitle[language]}
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <Flame className="w-5 h-5 text-terracotta shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <h3 className="font-serif text-base font-semibold text-primary">
                    {language === 'nl' ? 'Vers Gebrande Arabica Bonen' : 'Fresh Pan-Roasted Beans'}
                  </h3>
                  <p className="text-sm font-sans text-muted mt-0.5 leading-relaxed">
                    {language === 'nl'
                      ? 'Groene Arabica-bonen worden gewassen, met de hand geroosterd boven kolen en rondgebracht zodat gasten het warme, nootachtige aroma kunnen ervaren.'
                      : 'Raw green Arabica coffee beans are washed, hand-roasted over coals, and brought to the table so guests can savor the warm, nutty aroma before grinding.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Coffee className="w-5 h-5 text-berbere shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <h3 className="font-serif text-base font-semibold text-primary">
                    {language === 'nl' ? 'De Aardewerken Jebena & Cini Kopjes' : 'The Clay Jebena & Cini Cups'}
                  </h3>
                  <p className="text-sm font-sans text-muted mt-0.5 leading-relaxed">
                    {language === 'nl'
                      ? 'Zachtjes gebrouwen in een traditionele zwarte kleikruik (Jebena) en van grote hoogte met vaste hand in sierlijke cini-kopjes geschonken.'
                      : 'Brewed slowly in a hand-crafted black clay Jebena flask and poured from high above into small decorative cini cups with steady precision.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Wind className="w-5 h-5 text-muted shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <h3 className="font-serif text-base font-semibold text-primary">
                    {language === 'nl' ? 'Wierook & Verse Popcorn' : 'Frankincense & Sweet Popcorn'}
                  </h3>
                  <p className="text-sm font-sans text-muted mt-0.5 leading-relaxed">
                    {language === 'nl'
                      ? 'Aromatische wierookgeur vult de ruimte, geserveerd met een traditionele schaal verse popcorn (Fendisha) als perfecte smaakbalans.'
                      : 'Aromatic frankincense smoke fills the room, accompanied by a traditional bowl of freshly popped corn (Fendisha) to balance the rich, dark brew.'}
                  </p>
                </div>
              </div>
            </div>

            {/* The 3 Rounds of Blessings */}
            <div className="mt-8 pt-6 border-t border-border/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-sans text-muted">
              <div className="p-3 rounded bg-surface border border-border/60">
                <span className="font-serif text-sm font-semibold text-primary block">
                  {tBunna.round1[language]}
                </span>
                <p className="mt-1 leading-normal">
                  {tBunna.round1Desc[language]}
                </p>
              </div>

              <div className="p-3 rounded bg-surface border border-border/60">
                <span className="font-serif text-sm font-semibold text-primary block">
                  {tBunna.round2[language]}
                </span>
                <p className="mt-1 leading-normal">
                  {tBunna.round2Desc[language]}
                </p>
              </div>

              <div className="p-3 rounded bg-surface border border-border/60">
                <span className="font-serif text-sm font-semibold text-primary block">
                  {tBunna.round3[language]}
                </span>
                <p className="mt-1 leading-normal">
                  {tBunna.round3Desc[language]}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Atmospheric Ceremony Photography (5 cols on lg) */}
          <div className="lg:col-span-5 relative order-1 lg:order-2">
            <div className="relative aspect-[4/3] sm:aspect-[4/3] w-full rounded overflow-hidden border border-border shadow-subtle bg-surface">
              <Image
                src="/images/bunna-ceremony.webp"
                alt="Traditional Ethiopian Bunna coffee ceremony with a black clay Jebena pot pouring coffee into cini cups with frankincense smoke"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
            </div>
            <div className="mt-3 text-center sm:text-left">
              <span className="text-xs font-sans text-muted italic">
                {language === 'nl'
                  ? 'De authentieke drie rondes van de Bunna ceremonie, geserveerd met wierook.'
                  : 'The authentic three-round Bunna coffee ceremony served with frankincense.'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
