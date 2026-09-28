'use client';

import Link from 'next/link';
import { Calendar, ArrowUpRight, ArrowLeft, ChevronRight, Users, MapPin, Phone, HeartHandshake, Clock } from 'lucide-react';
import { RESTAURANT_CONFIG } from '@/config/restaurant';
import { RESERVATION_CONFIG } from '@/config/reservations';
import { useLanguage } from '@/context/LanguageContext';
import { TRANSLATIONS } from '@/config/translations';

export function ReservationContent() {
  const { language } = useLanguage();
  const tReserve = TRANSLATIONS.reserve;

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
            {tReserve.breadcrumb[language]}
          </li>
        </ol>
      </nav>

      {/* Editorial Header */}
      <header className="max-w-reading mb-12 md:mb-16">
        <span className="text-xs font-semibold uppercase tracking-wider text-berbere font-sans">
          {tReserve.heroEyebrow[language]}
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-primary mt-2 tracking-tight leading-tight">
          {tReserve.heroTitle[language]}
        </h1>
        <p className="text-base sm:text-lg font-sans text-muted mt-4 leading-relaxed">
          {tReserve.heroSubtitle[language]}
        </p>
      </header>

      {/* Primary TheFork Reservation Hero Card */}
      <div className="bg-surface border border-border rounded p-6 sm:p-8 md:p-10 shadow-subtle mb-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-canvas border border-border text-xs font-semibold text-berbere uppercase tracking-wider font-sans mb-3">
              <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{tReserve.theForkBadge[language]}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-primary tracking-tight">
              {tReserve.theForkTitle[language]}
            </h2>
            <p className="text-sm sm:text-base font-sans text-muted mt-3 leading-relaxed">
              {tReserve.theForkDescription[language]}
            </p>
            <div className="flex items-center gap-2 text-xs font-sans text-muted mt-4">
              <span className="w-2 h-2 rounded-full bg-sage shrink-0" aria-hidden="true" />
              <span>{tReserve.theForkNotice[language]}</span>
            </div>
          </div>

          <div className="shrink-0">
            <a
              href={RESERVATION_CONFIG.directBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto min-h-[48px] px-8 py-4 rounded bg-berbere hover:bg-berbere-hover text-white text-base font-semibold transition-colors focus-ring shadow-sm"
              aria-label={`${tReserve.theForkButton[language]} (opens in new tab)`}
            >
              <Calendar className="w-5 h-5" aria-hidden="true" />
              <span>{tReserve.theForkButton[language]}</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      {/* 2-Column Auxiliary Cards: Large Parties & Hospitality Notes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        {/* Large Parties Card */}
        <div className="bg-surface border border-border rounded p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-canvas border border-border text-xs font-semibold text-ochre uppercase tracking-wider font-sans mb-3">
              <Users className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{tReserve.largePartyBadge[language]}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-semibold text-primary">
              {tReserve.largePartyTitle[language]}
            </h3>
            <p className="text-sm font-sans text-muted mt-3 leading-relaxed">
              {tReserve.largePartyDescription[language]}
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-border">
            <a
              href={`tel:${RESTAURANT_CONFIG.contact.phoneHref}`}
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto min-h-[48px] px-6 py-3 rounded bg-primary hover:bg-primary/90 text-white text-sm font-semibold transition-colors focus-ring"
            >
              <Phone className="w-4 h-4 text-ochre" aria-hidden="true" />
              <span>{tReserve.largePartyCall[language]}</span>
            </a>
          </div>
        </div>

        {/* Location & Directions Card */}
        <div className="bg-surface border border-border rounded p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-canvas border border-border text-xs font-semibold text-berbere uppercase tracking-wider font-sans mb-3">
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{tReserve.locationTitle[language]}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-semibold text-primary">
              {tReserve.locationDistrict[language]}
            </h3>
            <address className="not-italic text-sm font-sans text-muted mt-3 leading-relaxed">
              {tReserve.locationAddress[language]}
              <br />
              <span className="text-xs text-muted/80">
                {language === 'nl' ? 'Centrum Den Haag • Wagenstraat Chinatown' : 'The Hague City Center • Chinatown'}
              </span>
            </address>
          </div>

          <div className="mt-6 pt-6 border-t border-border">
            <a
              href={RESTAURANT_CONFIG.transit.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto min-h-[48px] px-6 py-3 rounded bg-canvas hover:bg-surface border border-border text-primary text-sm font-semibold transition-colors focus-ring"
            >
              <MapPin className="w-4 h-4 text-berbere" aria-hidden="true" />
              <span>{tReserve.getDirections[language]}</span>
              <ArrowUpRight className="w-4 h-4 text-muted" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      {/* House Hospitality & Etiquette Notes */}
      <div className="bg-canvas border border-border rounded p-6 sm:p-8">
        <div className="flex items-center gap-2 text-xs font-semibold text-berbere uppercase tracking-wider font-sans mb-2">
          <HeartHandshake className="w-4 h-4" aria-hidden="true" />
          <span>{tReserve.hospitalityBadge[language]}</span>
        </div>
        <h3 className="text-xl font-serif font-semibold text-primary mb-4">
          {tReserve.hospitalityTitle[language]}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm font-sans text-muted leading-relaxed">
          <div className="p-4 rounded bg-surface/60 border border-border/60">
            <p className="font-semibold text-primary mb-1">{tReserve.communalHeading[language]}</p>
            <p>{tReserve.communalText[language]}</p>
          </div>
          <div className="p-4 rounded bg-surface/60 border border-border/60">
            <p className="font-semibold text-primary mb-1">{tReserve.dietaryHeading[language]}</p>
            <p>{tReserve.dietaryText[language]}</p>
          </div>
          <div className="p-4 rounded bg-surface/60 border border-border/60">
            <div className="flex items-center gap-1.5 font-semibold text-primary mb-1">
              <Clock className="w-3.5 h-3.5 text-ochre" aria-hidden="true" />
              <span>{tReserve.hoursHeading[language]}</span>
            </div>
            <p>{tReserve.hoursText[language]}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
