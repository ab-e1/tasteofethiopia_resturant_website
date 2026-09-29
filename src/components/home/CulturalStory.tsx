'use client';

import { useLanguage } from '@/context/LanguageContext';
import { TRANSLATIONS } from '@/config/translations';

export function CulturalStory() {
  const { language } = useLanguage();
  const tCulture = TRANSLATIONS.home.cultural;

  return (
    <section
      id="about"
      aria-labelledby="culture-heading"
      className="py-16 sm:py-20 md:py-28 bg-canvas scroll-mt-20"
    >
      <div className="max-w-content mx-auto px-6 md:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Eyebrow */}
          <span className="text-xs font-semibold uppercase tracking-widest text-berbere font-sans block mb-3">
            {tCulture.eyebrow[language]}
          </span>

          {/* Strong Editorial Heading */}
          <h2
            id="culture-heading"
            className="text-2xl sm:text-4xl md:text-5xl font-serif font-semibold text-primary leading-tight text-balance"
          >
            {tCulture.title[language]}
          </h2>

          {/* Concise Narrative Lead (2-3 lines) */}
          <p className="text-base sm:text-lg md:text-xl font-sans text-muted mt-6 leading-relaxed max-w-2xl mx-auto text-pretty">
            {tCulture.lead[language]}
          </p>

          {/* Restrained Typographic Anchors (no cards, no icons, no boxes) */}
          <div className="mt-12 pt-8 border-t border-border/60 max-w-xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div>
              <span className="font-serif text-base font-semibold text-primary block">
                {tCulture.injeraTitle[language]}
              </span>
              <p className="text-xs text-muted font-sans mt-1 leading-normal">
                {tCulture.injeraDesc[language]}
              </p>
            </div>

            <div>
              <span className="font-serif text-base font-semibold text-primary block">
                {tCulture.mesobTitle[language]}
              </span>
              <p className="text-xs text-muted font-sans mt-1 leading-normal">
                {tCulture.mesobDesc[language]}
              </p>
            </div>

            <div>
              <span className="font-serif text-base font-semibold text-primary block">
                {tCulture.gurshaTitle[language]}
              </span>
              <p className="text-xs text-muted font-sans mt-1 leading-normal">
                {tCulture.gurshaDesc[language]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
