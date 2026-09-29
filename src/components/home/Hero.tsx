'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Calendar, UtensilsCrossed } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { TRANSLATIONS } from '@/config/translations';

export function Hero() {
  const { language } = useLanguage();
  const tHero = TRANSLATIONS.home.hero;

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-[72vh] sm:min-h-[80vh] lg:min-h-[85vh] flex items-center overflow-hidden bg-primary"
    >
      {/* Background Demonstration Image */}
      <Image
        src="/images/hero-feast.webp"
        alt="Communal Ethiopian feast served on teff injera flatbread atop a traditional woven Mesob basket"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center z-0"
      />

      {/* Lighter, warm readability scrim (guarantees WCAG AAA contrast while preserving photographic warmth) */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/45 to-primary/25 z-10"
        aria-hidden="true"
      />

      <div className="relative z-20 max-w-content mx-auto px-6 py-24 sm:py-32 md:px-12 w-full">
        <div className="max-w-2xl">
          {/* Main Headline */}
          <h1
            id="hero-heading"
            className="text-4xl sm:text-6xl md:text-7xl font-serif font-semibold text-white tracking-tight leading-[1.08] text-balance"
          >
            {tHero.title[language]}
          </h1>

          {/* Concise Supporting Lead */}
          <p className="text-base sm:text-lg md:text-xl font-sans text-white/90 mt-5 sm:mt-6 leading-relaxed max-w-xl text-pretty">
            {tHero.subtitle[language]}
          </p>

          {/* Dual CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href="/reserve"
              className="min-h-[48px] px-7 py-3.5 rounded bg-berbere hover:bg-berbere-hover text-white text-sm font-semibold inline-flex items-center justify-center gap-2.5 transition-colors focus-ring shadow-sm"
            >
              <Calendar className="w-4 h-4" aria-hidden="true" />
              <span>{tHero.reserveCta[language]}</span>
            </Link>

            <Link
              href="/menu"
              className="min-h-[48px] px-7 py-3.5 rounded bg-white/10 hover:bg-white/20 border border-white/40 hover:border-white text-white text-sm font-semibold inline-flex items-center justify-center gap-2.5 transition-colors focus-ring backdrop-blur-sm"
            >
              <UtensilsCrossed className="w-4 h-4 text-terracotta" aria-hidden="true" />
              <span>{tHero.exploreMenuCta[language]}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
