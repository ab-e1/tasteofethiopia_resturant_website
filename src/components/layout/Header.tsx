'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, Calendar } from 'lucide-react';
import { RESTAURANT_CONFIG } from '@/config/restaurant';
import { useLanguage } from '@/context/LanguageContext';
import { TRANSLATIONS } from '@/config/translations';
import { MobileNav } from './MobileNav';
import { BrandLogo } from '@/components/ui/BrandLogo';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full bg-canvas transition-colors duration-200 border-b ${
          isScrolled ? 'border-border shadow-subtle' : 'border-border/60'
        }`}
      >
        <div className="max-w-content mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          {/* Brand Identity / Logo */}
          <Link
            href="/"
            className="group flex items-center gap-3 focus-ring rounded py-1 pr-2"
            aria-label={`${RESTAURANT_CONFIG.name} — Home`}
          >
            <BrandLogo className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded shadow-subtle group-hover:scale-105 transition-transform" />
            <div className="flex flex-col">
              <span className="text-[11px] font-sans font-semibold uppercase tracking-wider text-berbere">
                {TRANSLATIONS.nav.taglineCity[language]}
              </span>
              <span className="text-xl sm:text-2xl font-serif font-semibold tracking-tight text-primary group-hover:text-berbere transition-colors">
                {RESTAURANT_CONFIG.name}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-5 lg:gap-7"
            aria-label="Main navigation"
          >
            <Link
              href="/menu"
              className="text-sm font-medium text-primary hover:text-berbere transition-colors focus-ring rounded px-2 py-1"
            >
              {TRANSLATIONS.nav.menu[language]}
            </Link>
            <Link
              href="/#about"
              className="text-sm font-medium text-primary hover:text-berbere transition-colors focus-ring rounded px-2 py-1"
            >
              {TRANSLATIONS.nav.ourStory[language]}
            </Link>
            <Link
              href="/#visit"
              className="text-sm font-medium text-primary hover:text-berbere transition-colors focus-ring rounded px-2 py-1"
            >
              {TRANSLATIONS.nav.visitContact[language]}
            </Link>
            <Link
              href="/order"
              className="text-sm font-medium text-muted hover:text-primary transition-colors focus-ring rounded px-2 py-1"
            >
              {TRANSLATIONS.nav.orderOnline[language]}
            </Link>

            {/* Language Switcher (NL | EN) */}
            <div
              role="group"
              aria-label="Taalkeuze / Language selection"
              className="inline-flex items-center rounded border border-border bg-surface p-0.5 text-xs font-semibold"
            >
              <button
                type="button"
                onClick={() => setLanguage('nl')}
                className={`min-h-[36px] min-w-[36px] px-2.5 py-1 rounded transition-colors focus-ring ${
                  language === 'nl'
                    ? 'bg-primary text-canvas font-bold shadow-xs'
                    : 'text-muted hover:text-primary'
                }`}
                aria-pressed={language === 'nl'}
                aria-label="Nederlands"
              >
                NL
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`min-h-[36px] min-w-[36px] px-2.5 py-1 rounded transition-colors focus-ring ${
                  language === 'en'
                    ? 'bg-primary text-canvas font-bold shadow-xs'
                    : 'text-muted hover:text-primary'
                }`}
                aria-pressed={language === 'en'}
                aria-label="English"
              >
                EN
              </button>
            </div>

            {/* Primary Reservation Action */}
            <Link
              href="/reserve"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-berbere hover:bg-berbere-hover text-white text-sm font-medium transition-colors focus-ring shadow-sm"
            >
              <Calendar className="w-4 h-4" aria-hidden="true" />
              <span>{TRANSLATIONS.nav.reserveTable[language]}</span>
            </Link>
          </nav>

          {/* Mobile Actions: Language toggle + Reserve quick link + Hamburger toggle */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Mobile Compact Language Switcher */}
            <div
              role="group"
              aria-label="Taal / Language"
              className="inline-flex items-center rounded border border-border bg-surface p-0.5 text-xs font-semibold"
            >
              <button
                type="button"
                onClick={() => setLanguage(language === 'nl' ? 'en' : 'nl')}
                className="min-h-[44px] px-2.5 py-1 rounded text-primary font-bold focus-ring uppercase"
                aria-label={`Taal wisselen (huidig: ${language.toUpperCase()})`}
              >
                {language === 'nl' ? 'NL' : 'EN'}
              </button>
            </div>

            <Link
              href="/reserve"
              className="min-h-[48px] px-3.5 inline-flex items-center justify-center rounded bg-berbere hover:bg-berbere-hover text-white text-xs font-medium transition-colors focus-ring"
              aria-label={TRANSLATIONS.nav.reserveTable[language]}
            >
              <Calendar className="w-4 h-4 mr-1.5" aria-hidden="true" />
              <span>{language === 'nl' ? 'Reserveer' : 'Reserve'}</span>
            </Link>

            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setIsOpen(true)}
              className="min-h-[48px] min-w-[48px] inline-flex items-center justify-center rounded text-primary hover:text-berbere hover:bg-surface transition-colors focus-ring"
              aria-label={TRANSLATIONS.nav.openMenu[language]}
              aria-expanded={isOpen}
              aria-controls="mobile-nav-dialog"
            >
              <Menu className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Accessible Mobile Navigation Drawer */}
      <MobileNav
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        triggerRef={menuButtonRef}
      />
    </>
  );
}
