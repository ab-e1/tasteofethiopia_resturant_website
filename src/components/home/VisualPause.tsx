'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { TRANSLATIONS } from '@/config/translations';

export function VisualPause() {
  const { language } = useLanguage();
  const tPause = TRANSLATIONS.home.visualPause;

  return (
    <section
      aria-label="Visual Interlude — Communal Dining"
      className="py-10 sm:py-14 md:py-16 bg-canvas"
    >
      <div className="max-w-content mx-auto px-6 md:px-12">
        <div className="relative aspect-[4/3] sm:aspect-[16/10] md:aspect-[3/2] lg:aspect-[16/10] w-full min-h-[420px] md:min-h-[500px] max-h-[640px] overflow-hidden rounded bg-surface shadow-subtle">
          <Image
            src="/images/cultural-gursha.webp"
            alt="Communal Ethiopian dining with diners sharing freshly torn teff injera and slow-simmered wots from a single shared platter"
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover"
            style={{ objectPosition: 'center 61%' }}
            priority={false}
          />
        </div>
        {/* Subtle, restrained editorial caption */}
        <p className="mt-3.5 text-center text-xs font-sans text-muted/80 italic tracking-wide">
          {tPause.caption[language]}
        </p>
      </div>
    </section>
  );
}
