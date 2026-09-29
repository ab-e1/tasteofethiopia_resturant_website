'use client';

import Link from 'next/link';
import { MapPin, ArrowUpRight, UtensilsCrossed } from 'lucide-react';
import { RESTAURANT_CONFIG } from '@/config/restaurant';
import { useLanguage } from '@/context/LanguageContext';
import { TRANSLATIONS } from '@/config/translations';

export function VisitSection() {
  const { language } = useLanguage();
  const tVisit = TRANSLATIONS.home.visit;

  return (
    <section
      id="visit"
      aria-labelledby="visit-heading"
      className="py-16 sm:py-20 md:py-24 bg-canvas border-t border-border/70 scroll-mt-20"
    >
      <div className="max-w-content mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-berbere font-sans block mb-2">
            {tVisit.eyebrow[language]}
          </span>
          <h2
            id="visit-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-primary tracking-tight"
          >
            {tVisit.title[language]}
          </h2>
        </div>

        {/* Architectural 2-Column Layout (no cards, no nested box containers) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-8 border-t border-border/60">
          {/* Left Column: Confirmed Location & Directions */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-muted font-sans block mb-2">
                {tVisit.addressTitle[language]}
              </span>
              <h3 className="font-serif text-2xl font-semibold text-primary">
                {RESTAURANT_CONFIG.name}
              </h3>
              <address className="not-italic text-base text-muted mt-2 space-y-0.5 leading-relaxed font-sans">
                <p className="text-primary font-medium">{RESTAURANT_CONFIG.address.street}</p>
                <p>{RESTAURANT_CONFIG.address.postalCode} {RESTAURANT_CONFIG.address.city}</p>
                <p className="text-xs text-muted/70">{RESTAURANT_CONFIG.address.neighborhood}</p>
              </address>
            </div>

            <div className="pt-2">
              <a
                href={RESTAURANT_CONFIG.transit.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[48px] inline-flex items-center gap-2 text-sm font-semibold text-berbere hover:text-berbere-hover border-b border-berbere/40 hover:border-berbere pb-1 transition-colors focus-ring"
              >
                <MapPin className="w-4 h-4" aria-hidden="true" />
                <span>{tVisit.getDirections[language]}</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right Column: Indicative Hours, Contact & Order Online */}
          <div className="lg:col-span-6 space-y-8">
            {/* Hours & Contact */}
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted font-sans block">
                {tVisit.hoursTitle[language]}
              </span>
              <p className="text-sm font-sans text-muted leading-relaxed">
                {tVisit.hoursNote[language]}
              </p>
              <p className="text-xs font-sans text-muted/80 pt-1">
                {language === 'en' ? 'Direct phone: ' : 'Telefoon: '}
                <a
                  href={`tel:${RESTAURANT_CONFIG.contact.phoneHref}`}
                  className="font-medium text-primary hover:text-berbere transition-colors"
                >
                  {RESTAURANT_CONFIG.contact.phoneDisplay}
                </a>
              </p>
            </div>

            {/* Order Online Footnote */}
            <div id="order" className="pt-6 border-t border-border/60 scroll-mt-24 space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-terracotta font-sans block">
                {tVisit.orderTitle[language]}
              </span>
              <p className="text-sm font-sans text-muted leading-relaxed">
                {tVisit.orderText[language]}
              </p>
              <div className="pt-1">
                <Link
                  href="/order"
                  className="min-h-[48px] inline-flex items-center gap-2 text-sm font-semibold text-berbere hover:text-berbere-hover border-b border-berbere/40 hover:border-berbere pb-1 transition-colors focus-ring"
                >
                  <UtensilsCrossed className="w-4 h-4" aria-hidden="true" />
                  <span>{tVisit.orderCta[language]}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
