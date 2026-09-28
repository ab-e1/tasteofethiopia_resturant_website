'use client';

import Link from 'next/link';
import { ArrowLeft, ChevronRight, ExternalLink, Clock, Phone, MapPin, Sparkles, ShoppingBag } from 'lucide-react';
import { ORDERING_PROVIDERS } from '@/config/ordering';
import { RESTAURANT_CONFIG } from '@/config/restaurant';
import { useLanguage } from '@/context/LanguageContext';
import { TRANSLATIONS } from '@/config/translations';

export function OrderHubContent() {
  const { language } = useLanguage();
  const tOrder = TRANSLATIONS.order;
  const tNav = TRANSLATIONS.nav;

  return (
    <div className="py-10 md:py-16 max-w-content mx-auto px-6 md:px-12">
      {/* Breadcrumb Navigation */}
      <nav aria-label={language === 'nl' ? 'Kruimelpad' : 'Breadcrumb'} className="mb-6">
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
            {tNav.orderOnline[language]}
          </li>
        </ol>
      </nav>

      {/* Editorial Header */}
      <div className="max-w-reading mb-12 md:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface border border-border text-xs font-semibold text-berbere uppercase tracking-wider font-sans mb-3">
          <ShoppingBag className="w-3.5 h-3.5" aria-hidden="true" />
          <span>{tOrder.heroEyebrow[language]}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-primary tracking-tight leading-tight">
          {tOrder.heroTitle[language]}
        </h1>
        <p className="text-base sm:text-lg font-sans text-muted mt-4 leading-relaxed">
          {tOrder.heroSubtitle[language]}
        </p>
      </div>

      {/* Delivery Providers 2-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {ORDERING_PROVIDERS.map((provider) => {
          const badgeText = language === 'en' ? provider.badgeEn : provider.badge;
          const descriptionText = language === 'en' ? provider.descriptionEn : provider.description;

          return (
            <article
              key={provider.id}
              className="flex flex-col justify-between p-6 sm:p-8 bg-surface border border-border rounded shadow-subtle hover:border-border/90 transition-colors"
            >
              <div>
                {/* Header row: Partner title + Badge */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-xs font-semibold font-sans uppercase tracking-wider px-2.5 py-1 rounded bg-canvas border border-border text-berbere">
                    {badgeText}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-sans text-muted">
                    <Clock className="w-3.5 h-3.5 text-terracotta" aria-hidden="true" />
                    <span>{provider.etaDisplay}</span>
                  </div>
                </div>

                <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-primary tracking-tight">
                  {provider.name}
                </h2>

                <p className="text-sm sm:text-base font-sans text-muted mt-3 leading-relaxed">
                  {descriptionText}
                </p>

                {/* Delivery Perks */}
                <ul className="mt-6 space-y-2 text-xs font-sans text-muted border-t border-border/60 pt-4">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-ochre" aria-hidden="true" />
                    <span>
                      {language === 'nl'
                        ? 'Geserveerd met warme verse teff injera'
                        : 'Served with fresh warm teff injera'}
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sage" aria-hidden="true" />
                    <span>
                      {language === 'nl'
                        ? 'Volledige selectie vlees- en veganistische gerechten'
                        : 'Full selection of meat & vegan fasting dishes'}
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-berbere" aria-hidden="true" />
                    <span>
                      {language === 'nl'
                        ? 'Bezorging in heel Den Haag en omstreken'
                        : 'Fast delivery across The Hague and surroundings'}
                    </span>
                  </li>
                </ul>
              </div>

              {/* Direct Outbound Action Button */}
              <div className="mt-8 pt-4">
                <a
                  href={provider.storeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[48px] px-6 py-3.5 rounded bg-berbere hover:bg-berbere-hover text-white text-sm font-semibold inline-flex items-center justify-center gap-2 transition-colors focus-ring shadow-sm"
                >
                  <span>{`${tOrder.openStore[language]} (${provider.name})`}</span>
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          );
        })}
      </div>

      {/* Direct Takeout / Afhalen Card */}
      <section
        aria-labelledby="takeout-heading"
        className="p-6 sm:p-8 md:p-10 rounded bg-canvas border border-border shadow-subtle"
      >
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface border border-border text-xs font-semibold text-ochre uppercase tracking-wider font-sans mb-3">
            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{language === 'nl' ? 'Direct Afhalen' : 'Direct Takeout'}</span>
          </div>

          <h2 id="takeout-heading" className="text-2xl sm:text-3xl font-serif font-semibold text-primary tracking-tight">
            {tOrder.takeoutTitle[language]}
          </h2>

          <p className="text-sm sm:text-base font-sans text-muted mt-3 leading-relaxed">
            {tOrder.takeoutSubtitle[language]}
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href={`tel:${RESTAURANT_CONFIG.contact.phoneHref}`}
              className="min-h-[48px] px-6 py-3.5 rounded bg-primary hover:bg-primary/90 text-canvas text-sm font-semibold inline-flex items-center justify-center gap-2 transition-colors focus-ring"
            >
              <Phone className="w-4 h-4 text-ochre" aria-hidden="true" />
              <span>{tOrder.callToOrder[language]}</span>
            </a>

            <a
              href={RESTAURANT_CONFIG.transit.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[48px] px-5 py-3.5 rounded bg-surface hover:bg-canvas border border-border text-primary text-sm font-medium inline-flex items-center justify-center gap-2 transition-colors focus-ring"
            >
              <MapPin className="w-4 h-4 text-berbere" aria-hidden="true" />
              <span>{RESTAURANT_CONFIG.address.street}, Den Haag</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
