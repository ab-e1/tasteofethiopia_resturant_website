'use client';

import Link from 'next/link';
import { Calendar } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { TRANSLATIONS } from '@/config/translations';
import { RESTAURANT_CONFIG } from '@/config/restaurant';

export function EditorialReservation() {
  const { language } = useLanguage();
  const tReservation = TRANSLATIONS.home.reservation;

  return (
    <section
      id="reserve"
      aria-labelledby="reservation-heading"
      className="py-20 sm:py-24 md:py-32 bg-surface border-t border-border/70 scroll-mt-20"
    >
      <div className="max-w-content mx-auto px-6 md:px-12 text-center">
        <div className="max-w-2xl mx-auto">
          {/* Eyebrow */}
          <span className="text-xs font-semibold uppercase tracking-widest text-berbere font-sans block mb-3">
            {tReservation.eyebrow[language]}
          </span>

          {/* Heading */}
          <h2
            id="reservation-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-primary tracking-tight leading-tight text-balance"
          >
            {tReservation.title[language]}
          </h2>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg font-sans text-muted mt-5 leading-relaxed text-pretty">
            {tReservation.description[language]}
          </p>

          {/* Primary Action */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/reserve"
              className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 rounded bg-berbere hover:bg-berbere-hover text-white text-sm font-semibold inline-flex items-center justify-center gap-2.5 transition-colors focus-ring shadow-sm"
            >
              <Calendar className="w-4 h-4" aria-hidden="true" />
              <span>{tReservation.reserveCta[language]}</span>
            </Link>
          </div>

          {/* Quiet Phone Contact Footnote */}
          <p className="text-xs font-sans text-muted mt-6">
            {tReservation.phoneNote[language]}{' '}
            <a
              href={`tel:${RESTAURANT_CONFIG.contact.phoneHref}`}
              className="font-medium text-primary hover:text-berbere transition-colors underline underline-offset-4"
            >
              {RESTAURANT_CONFIG.contact.phoneDisplay}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
