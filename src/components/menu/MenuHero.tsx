'use client';

import Link from 'next/link';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import { RESTAURANT_CONFIG } from '@/config/restaurant';
import { useLanguage } from '@/context/LanguageContext';
import { TRANSLATIONS } from '@/config/translations';

export function MenuHero() {
  const { language } = useLanguage();
  const tMenu = TRANSLATIONS.menu;
  const tNav = TRANSLATIONS.nav;

  return (
    <div className="bg-surface border-b border-border">
      <div className="max-w-content mx-auto px-6 py-8 md:px-12 md:py-12">
        {/* Breadcrumb */}
        <nav aria-label={language === 'nl' ? 'Kruimelpad' : 'Breadcrumb'} className="mb-4">
          <ol className="flex items-center gap-2 text-xs font-sans text-muted">
            <li>
              <Link
                href="/"
                className="hover:text-primary transition-colors inline-flex items-center gap-1 focus-ring rounded"
              >
                <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5 text-border" aria-hidden="true" />
            </li>
            <li className="text-primary font-medium" aria-current="page">
              {tNav.menu[language]}
            </li>
          </ol>
        </nav>

        <div className="max-w-reading">
          <span className="text-xs font-semibold uppercase tracking-wider text-berbere font-sans">
            {tMenu.heroEyebrow[language]}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-primary mt-2 tracking-tight leading-tight">
            {tMenu.heroTitle[language]}
          </h1>
          <p className="text-base sm:text-lg font-sans text-muted mt-4 leading-relaxed">
            {tMenu.heroSubtitle[language]}
          </p>
        </div>
      </div>
    </div>
  );
}
