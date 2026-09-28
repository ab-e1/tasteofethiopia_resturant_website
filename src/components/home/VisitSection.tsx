'use client';

import Link from 'next/link';
import { MapPin, Clock, Compass, ArrowUpRight, Calendar, Train, Car } from 'lucide-react';
import { RESTAURANT_CONFIG } from '@/config/restaurant';
import { useLanguage } from '@/context/LanguageContext';
import { TRANSLATIONS } from '@/config/translations';

const DAYS_SCHEDULE = [
  { nl: 'Maandag', en: 'Monday', time: '12:00 – 00:00' },
  { nl: 'Dinsdag', en: 'Tuesday', time: '12:00 – 00:00' },
  { nl: 'Woensdag', en: 'Wednesday', time: '12:00 – 00:00' },
  { nl: 'Donderdag', en: 'Thursday', time: '12:00 – 00:00' },
  { nl: 'Vrijdag', en: 'Friday', time: '12:00 – 00:00' },
  { nl: 'Zaterdag', en: 'Saturday', time: '12:00 – 00:00' },
  { nl: 'Zondag', en: 'Sunday', time: '12:00 – 00:00' },
];

export function VisitSection() {
  const { language } = useLanguage();
  const tVisit = TRANSLATIONS.home.visit;

  return (
    <section
      id="visit"
      aria-labelledby="visit-heading"
      className="scroll-mt-24 p-6 sm:p-8 md:p-10 bg-surface border border-border rounded shadow-subtle"
    >
      {/* Header */}
      <div className="max-w-2xl mb-8 md:mb-10">
        <span className="text-xs font-semibold uppercase tracking-wider text-berbere font-sans">
          {tVisit.eyebrow[language]}
        </span>
        <h2
          id="visit-heading"
          className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-primary mt-1 tracking-tight"
        >
          {tVisit.title[language]}
        </h2>
        <p className="text-sm sm:text-base font-sans text-muted mt-2 leading-relaxed">
          {language === 'nl'
            ? 'Gelegen in de sfeervolle Wagenstraat in het centrum van Den Haag. Dagelijks geopend voor gastvrij dineren en traditionele koffieceremonies.'
            : 'Located on vibrant Wagenstraat in the heart of Chinatown The Hague. Open daily for warm communal dining and traditional coffee rituals.'}
        </p>
      </div>

      {/* 3-Column Editorial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Column 1: Opening Hours Schedule */}
        <div className="bg-canvas border border-border/80 rounded p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-ochre uppercase tracking-wider font-sans mb-3">
              <Clock className="w-4 h-4" aria-hidden="true" />
              <span>{tVisit.hoursTitle[language]}</span>
            </div>
            
            <ul className="space-y-2 text-sm font-sans divide-y divide-border/40">
              {DAYS_SCHEDULE.map((day, idx) => (
                <li key={idx} className="flex items-center justify-between pt-1.5 first:pt-0">
                  <span className="text-primary font-medium">{language === 'nl' ? day.nl : day.en}</span>
                  <span className="text-muted tabular-nums">{day.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 pt-3 border-t border-border text-xs text-muted leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-berbere inline-block mr-1.5" aria-hidden="true" />
            <span>{tVisit.kitchenNotice[language]}</span>
          </div>
        </div>

        {/* Column 2: Address & Quick Actions */}
        <div className="bg-canvas border border-border/80 rounded p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-berbere uppercase tracking-wider font-sans mb-3">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span>{language === 'nl' ? 'Locatie & Adres' : 'Location & Address'}</span>
            </div>

            <h3 className="font-serif text-lg font-semibold text-primary">
              {RESTAURANT_CONFIG.name}
            </h3>
            
            <address className="not-italic text-sm text-muted mt-2 space-y-0.5 leading-relaxed font-sans">
              <p className="text-primary font-medium">{RESTAURANT_CONFIG.address.street}</p>
              <p>{RESTAURANT_CONFIG.address.postalCode} {RESTAURANT_CONFIG.address.city}</p>
              <p className="text-xs text-muted/80">{RESTAURANT_CONFIG.address.neighborhood}</p>
            </address>

            <div className="mt-4 text-xs font-sans text-muted leading-relaxed">
              <p>
                <strong className="text-primary font-medium">Telefoon: </strong>
                <a href={`tel:${RESTAURANT_CONFIG.contact.phoneHref}`} className="hover:text-berbere transition-colors">
                  {RESTAURANT_CONFIG.contact.phoneDisplay}
                </a>
              </p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-border flex flex-col sm:flex-row gap-2.5">
            <a
              href={RESTAURANT_CONFIG.transit.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-h-[48px] px-4 py-2.5 rounded bg-canvas hover:bg-surface border border-border text-primary text-xs font-semibold inline-flex items-center justify-center gap-1.5 transition-colors focus-ring"
            >
              <MapPin className="w-3.5 h-3.5 text-berbere" aria-hidden="true" />
              <span>{tVisit.getDirections[language]}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-muted" aria-hidden="true" />
            </a>

            <Link
              href="/reserve"
              className="min-h-[48px] px-4 py-2.5 rounded bg-berbere hover:bg-berbere-hover text-white text-xs font-semibold inline-flex items-center justify-center gap-1.5 transition-colors focus-ring shrink-0"
            >
              <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{tVisit.reserveTable[language]}</span>
            </Link>
          </div>
        </div>

        {/* Column 3: Transit & Parking Guidance */}
        <div className="bg-canvas border border-border/80 rounded p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-sage uppercase tracking-wider font-sans mb-3">
              <Compass className="w-4 h-4" aria-hidden="true" />
              <span>{tVisit.transitTitle[language]}</span>
            </div>

            <div className="space-y-4 text-xs font-sans leading-relaxed text-muted">
              <div>
                <p className="font-semibold text-primary mb-0.5">{tVisit.tramTitle[language]}</p>
                <p>{tVisit.tramDesc[language]}</p>
              </div>

              <div className="flex items-start gap-2 pt-2 border-t border-border/40">
                <Train className="w-4 h-4 text-berbere mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-primary mb-0.5">{tVisit.trainTitle[language]}</p>
                  <p>{tVisit.trainDesc[language]}</p>
                </div>
              </div>

              <div className="flex items-start gap-2 pt-2 border-t border-border/40">
                <Car className="w-4 h-4 text-ochre mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-primary mb-0.5">{tVisit.parkingTitle[language]}</p>
                  <p>{tVisit.parkingDesc[language]}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-border text-[11px] text-muted italic">
            {language === 'nl'
              ? 'Wagenstraat is een voetgangers- en fietsvriendelijke straat in Chinatown.'
              : 'Wagenstraat is pedestrian- and bicycle-friendly in Chinatown.'}
          </div>
        </div>
      </div>
    </section>
  );
}
