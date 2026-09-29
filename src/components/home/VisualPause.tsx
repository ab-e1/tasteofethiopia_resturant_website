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
        <div className="relative aspect-[16/10] sm:aspect-[21/10] md:aspect-[2.4/1] w-full overflow-hidden rounded bg-surface">
          <Image
            src="/images/cultural-gursha.webp"
            alt="Communal Ethiopian dining with diners sharing freshly torn teff injera and slow-simmered wots from a single shared platter"
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover object-[center_36%]"
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
