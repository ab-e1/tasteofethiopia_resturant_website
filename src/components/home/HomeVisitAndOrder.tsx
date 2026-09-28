'use client';

import Link from 'next/link';
import { UtensilsCrossed } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { TRANSLATIONS } from '@/config/translations';
import { VisitSection } from './VisitSection';

export function HomeVisitAndOrder() {
  const { language } = useLanguage();
  const tOrder = TRANSLATIONS.home.order;

  return (
    <div className="max-w-content mx-auto px-6 py-16 md:px-12 space-y-12">
      {/* Visit, Opening Hours & Transit Section */}
      <VisitSection />

      {/* Online Ordering Anchor */}
      <section
        id="order"
        aria-labelledby="order-anchor-heading"
        className="scroll-mt-24 p-6 sm:p-8 bg-surface border border-border rounded"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-terracotta font-sans">
              {tOrder.eyebrow[language]}
            </span>
            <h2 id="order-anchor-heading" className="font-serif text-2xl font-semibold text-primary mt-1">
              {tOrder.title[language]}
            </h2>
            <p className="text-sm text-muted mt-2 max-w-xl leading-relaxed">
              {tOrder.description[language]}
            </p>
          </div>
          <div>
            <Link
              href="/order"
              className="min-h-[48px] px-5 py-3 rounded bg-berbere hover:bg-berbere-hover text-white text-sm font-semibold inline-flex items-center gap-2 transition-colors focus-ring shadow-sm"
            >
              <UtensilsCrossed className="w-4 h-4" aria-hidden="true" />
              <span>{tOrder.exploreOrderHub[language]}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
