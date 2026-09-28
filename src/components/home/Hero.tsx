'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Calendar, UtensilsCrossed, MapPin } from 'lucide-react';
import { RESTAURANT_CONFIG } from '@/config/restaurant';
import { useLanguage } from '@/context/LanguageContext';
import { TRANSLATIONS } from '@/config/translations';

export function Hero() {
  const { language } = useLanguage();
  const tHero = TRANSLATIONS.home.hero;

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-[600px] sm:min-h-[680px] lg:min-h-[740px] flex items-center overflow-hidden bg-primary"
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

      {/* Dark Espresso Scrim Overlay (guarantees WCAG AAA contrast ratio > 12:1) */}
      <div
        className="absolute inset-0 bg-primary/70 sm:bg-primary/65 z-10"
        aria-hidden="true"
      />

      {/* Subtle radial warmth vignette */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-primary/95 via-transparent to-primary/50 z-10"
        aria-hidden="true"
      />

      <div className="relative z-20 max-w-content mx-auto px-6 py-20 md:px-12 md:py-28 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow / Location badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-wider font-sans mb-6">
            <MapPin className="w-3.5 h-3.5 text-terracotta" aria-hidden="true" />
            <span>{tHero.eyebrow[language]} • {RESTAURANT_CONFIG.address.street}, Den Haag</span>
          </div>

          {/* Main Headline (single h1 on homepage) */}
          <h1
            id="hero-heading"
            className="text-3xl sm:text-5xl md:text-6xl font-serif font-semibold text-white tracking-tight leading-[1.1] text-balance"
          >
            {tHero.title[language]}
          </h1>

          {/* Subtitle / Narrative Lead */}
          <p className="text-base sm:text-lg md:text-xl font-sans text-white/90 mt-6 leading-relaxed max-w-2xl text-pretty">
            {tHero.subtitle[language]}
          </p>

          {/* Dual CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href="/reserve"
              className="min-h-[48px] px-6 py-3.5 rounded bg-berbere hover:bg-berbere-hover text-white text-sm font-semibold inline-flex items-center justify-center gap-2.5 transition-colors focus-ring shadow-sm"
            >
              <Calendar className="w-4 h-4" aria-hidden="true" />
              <span>{tHero.reserveCta[language]}</span>
            </Link>

            <Link
              href="/menu"
              className="min-h-[48px] px-6 py-3.5 rounded bg-transparent border border-white/40 hover:border-white hover:bg-white/10 text-white text-sm font-semibold inline-flex items-center justify-center gap-2.5 transition-colors focus-ring"
            >
              <UtensilsCrossed className="w-4 h-4 text-terracotta" aria-hidden="true" />
              <span>{tHero.exploreMenuCta[language]}</span>
            </Link>
          </div>

          {/* Highlight attributes */}
          <div className="mt-12 pt-8 border-t border-white/20 flex flex-wrap items-center gap-6 sm:gap-8 text-xs font-sans text-white/80">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-ochre" aria-hidden="true" />
              <span>{tHero.pillTeff[language]}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-berbere" aria-hidden="true" />
              <span>{tHero.pillSlow[language]}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sage" aria-hidden="true" />
              <span>{tHero.pillFeasts[language]}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
