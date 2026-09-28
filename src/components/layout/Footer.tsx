'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { RESTAURANT_CONFIG } from '@/config/restaurant';
import { useLanguage } from '@/context/LanguageContext';
import { TRANSLATIONS } from '@/config/translations';
import { BrandLogo } from '@/components/ui/BrandLogo';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  const tNav = TRANSLATIONS.nav;
  const tFooter = TRANSLATIONS.footer;

  return (
    <footer className="w-full bg-surface border-t border-border text-primary">
      <div className="max-w-content mx-auto px-6 py-12 md:px-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-12 border-b border-border/80">
          {/* Column 1: Restaurant Identity & Confirmed Location */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <BrandLogo className="w-12 h-12 rounded shadow-subtle shrink-0" />
              <div>
                <span className="text-[11px] font-sans font-semibold uppercase tracking-wider text-berbere block">
                  {tNav.taglineCity[language]}
                </span>
                <h2 className="font-serif text-2xl font-semibold text-primary mt-0.5">
                  {RESTAURANT_CONFIG.name}
                </h2>
              </div>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              {tFooter.hospitalityDesc[language]}
            </p>
            <div className="pt-2 text-sm text-muted">
              <p className="font-medium text-primary">
                {language === 'nl' ? 'Locatie:' : 'Confirmed Location:'}
              </p>
              <address className="not-italic text-sm text-muted mt-1 leading-normal">
                {RESTAURANT_CONFIG.address.street}
                <br />
                {RESTAURANT_CONFIG.address.postalCode} {RESTAURANT_CONFIG.address.city}
                <br />
                {RESTAURANT_CONFIG.address.neighborhood}
              </address>
              <a
                href={RESTAURANT_CONFIG.transit.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-berbere hover:text-berbere-hover mt-2 focus-ring rounded"
                aria-label="Google Maps directions"
              >
                <span>{language === 'nl' ? 'Routebeschrijving (Google Maps)' : 'Get Directions (Google Maps)'}</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h3 className="font-serif text-base font-semibold text-primary tracking-tight mb-4">
              {tFooter.navigationTitle[language]}
            </h3>
            <ul className="space-y-2.5 text-sm" role="list">
              <li>
                <Link
                  href="/"
                  className="text-muted hover:text-berbere transition-colors focus-ring rounded inline-block py-0.5"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className="text-muted hover:text-berbere transition-colors focus-ring rounded inline-block py-0.5"
                >
                  {tNav.menu[language]}
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="text-muted hover:text-berbere transition-colors focus-ring rounded inline-block py-0.5"
                >
                  {tNav.ourStory[language]}
                </Link>
              </li>
              <li>
                <Link
                  href="/#visit"
                  className="text-muted hover:text-berbere transition-colors focus-ring rounded inline-block py-0.5"
                >
                  {tNav.visitContact[language]}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Dine & Reserve */}
          <div>
            <h3 className="font-serif text-base font-semibold text-primary tracking-tight mb-4">
              {language === 'nl' ? 'Diner & Reserveren' : 'Dine & Reserve'}
            </h3>
            <ul className="space-y-2.5 text-sm" role="list">
              <li>
                <Link
                  href="/reserve"
                  className="text-muted hover:text-berbere transition-colors focus-ring rounded inline-block py-0.5 font-medium"
                >
                  {tNav.reserveTable[language]}
                </Link>
              </li>
              <li>
                <Link
                  href="/order"
                  className="text-muted hover:text-berbere transition-colors focus-ring rounded inline-block py-0.5"
                >
                  {tNav.orderOnline[language]}
                </Link>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-canvas border border-border/80 rounded text-xs text-muted leading-relaxed">
              <p className="font-medium text-primary">
                {language === 'nl' ? 'Reserveringsbericht' : 'Booking Notice'}
              </p>
              <p className="mt-1">
                {language === 'nl'
                  ? 'Tafelreserveringen worden veilig beheerd via TheFork op basis van actuele beschikbaarheid.'
                  : 'Table reservations are managed via TheFork according to restaurant seating availability.'}
              </p>
            </div>
          </div>

          {/* Column 4: Verified Operating Information & Hours */}
          <div>
            <h3 className="font-serif text-base font-semibold text-primary tracking-tight mb-4">
              {tFooter.hoursTitle[language]}
            </h3>
            <div className="text-sm text-muted space-y-2">
              <p className="font-medium text-primary">
                {language === 'nl' ? 'Maandag – Zondag:' : 'Monday – Sunday:'}
              </p>
              <p className="tabular-nums text-primary font-semibold">12:00 – 00:00</p>
              <p className="text-xs text-muted/90 leading-relaxed">
                {language === 'nl'
                  ? 'Keuken geopend tot 23:00 uur • Gastvrijheid tot laat'
                  : 'Kitchen service until 23:00 • Late hospitality'}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-border/60 text-sm text-muted space-y-1">
              <p>
                <a
                  href={`tel:${RESTAURANT_CONFIG.contact.phoneHref}`}
                  className="hover:text-berbere focus-ring rounded"
                >
                  {RESTAURANT_CONFIG.contact.phoneDisplay}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${RESTAURANT_CONFIG.contact.email}`}
                  className="hover:text-berbere focus-ring rounded text-xs"
                >
                  {RESTAURANT_CONFIG.contact.email}
                </a>
              </p>
            </div>

            <div className="mt-4 flex gap-4 text-xs font-medium text-berbere">
              <a
                href={RESTAURANT_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline focus-ring rounded"
              >
                Instagram
              </a>
              <a
                href={RESTAURANT_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline focus-ring rounded"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-muted">
          <p>© {currentYear} Taste of Ethiopia. {tFooter.allRightsReserved[language]}</p>
          <p>Wagenstraat 177, 2512 AW Den Haag • Chinatown</p>
        </div>
      </div>
    </footer>
  );
}
