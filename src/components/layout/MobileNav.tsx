'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { X, Calendar, UtensilsCrossed, Compass, BookOpen, MapPin, Home, Globe } from 'lucide-react';
import { RESTAURANT_CONFIG } from '@/config/restaurant';
import { useLanguage } from '@/context/LanguageContext';
import { TRANSLATIONS } from '@/config/translations';
import { BrandLogo } from '@/components/ui/BrandLogo';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}

export function MobileNav({ isOpen, onClose, triggerRef }: MobileNavProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const { language, setLanguage } = useLanguage();

  // Focus management: move focus into drawer on open, return to trigger on close
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          e.preventDefault();
          onClose();
          return;
        }

        if (e.key === 'Tab' && dialogRef.current) {
          const focusableElements = dialogRef.current.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          if (focusableElements.length === 0) return;

          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];

          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      };

      // Prevent background scrolling while drawer is open
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        clearTimeout(timer);
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
      triggerRef.current?.focus();
    }
  }, [isOpen, onClose, triggerRef]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Semi-opaque backdrop */}
      <div
        className="fixed inset-0 bg-primary/40 transition-opacity motion-reduce:transition-none"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={dialogRef}
        id="mobile-nav-dialog"
        role="dialog"
        aria-modal="true"
        aria-label={TRANSLATIONS.nav.openMenu[language]}
        className="fixed inset-y-0 right-0 w-full max-w-xs bg-canvas border-l border-border p-6 shadow-elevated flex flex-col justify-between overflow-y-auto"
      >
        <div>
          {/* Header with Close Button */}
          <div className="flex items-center justify-between border-b border-border pb-4">
            <div className="flex items-center gap-2.5">
              <BrandLogo className="w-9 h-9 shrink-0 rounded shadow-subtle" />
              <div>
                <span className="text-[11px] font-sans font-semibold uppercase tracking-wider text-berbere block">
                  {TRANSLATIONS.nav.taglineCity[language]}
                </span>
                <span className="font-serif text-lg font-semibold text-primary">
                  {RESTAURANT_CONFIG.name}
                </span>
              </div>
            </div>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="p-2 min-h-[48px] min-w-[48px] inline-flex items-center justify-center text-muted hover:text-primary focus-ring rounded"
              aria-label={TRANSLATIONS.nav.closeMenu[language]}
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Language Switcher in Drawer */}
          <div className="mt-5 p-3 rounded bg-surface border border-border/80 flex items-center justify-between">
            <span className="text-xs font-medium text-muted flex items-center gap-1.5">
              <Globe className="w-4 h-4 text-berbere" aria-hidden="true" />
              <span>Taalkeuze / Language:</span>
            </span>
            <div className="flex items-center rounded border border-border bg-canvas p-0.5 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setLanguage('nl')}
                className={`min-h-[40px] px-3 py-1 rounded transition-colors focus-ring ${
                  language === 'nl'
                    ? 'bg-primary text-canvas font-bold'
                    : 'text-muted hover:text-primary'
                }`}
                aria-pressed={language === 'nl'}
              >
                NL
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`min-h-[40px] px-3 py-1 rounded transition-colors focus-ring ${
                  language === 'en'
                    ? 'bg-primary text-canvas font-bold'
                    : 'text-muted hover:text-primary'
                }`}
                aria-pressed={language === 'en'}
              >
                EN
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="mt-6 flex flex-col space-y-1" aria-label="Mobile Navigation">
            <Link
              href="/"
              onClick={onClose}
              className="px-3 py-3 min-h-[48px] flex items-center gap-3 text-base font-medium text-primary hover:text-berbere hover:bg-surface rounded transition-colors focus-ring"
            >
              <Home className="w-5 h-5 text-muted" aria-hidden="true" />
              <span>Home</span>
            </Link>

            <Link
              href="/menu"
              onClick={onClose}
              className="px-3 py-3 min-h-[48px] flex items-center gap-3 text-base font-medium text-primary hover:text-berbere hover:bg-surface rounded transition-colors focus-ring"
            >
              <BookOpen className="w-5 h-5 text-muted" aria-hidden="true" />
              <span>{TRANSLATIONS.nav.menu[language]}</span>
            </Link>

            <Link
              href="/#about"
              onClick={onClose}
              className="px-3 py-3 min-h-[48px] flex items-center gap-3 text-base font-medium text-primary hover:text-berbere hover:bg-surface rounded transition-colors focus-ring"
            >
              <Compass className="w-5 h-5 text-muted" aria-hidden="true" />
              <span>{TRANSLATIONS.nav.ourStory[language]}</span>
            </Link>

            <Link
              href="/#visit"
              onClick={onClose}
              className="px-3 py-3 min-h-[48px] flex items-center gap-3 text-base font-medium text-primary hover:text-berbere hover:bg-surface rounded transition-colors focus-ring"
            >
              <MapPin className="w-5 h-5 text-muted" aria-hidden="true" />
              <span>{TRANSLATIONS.nav.visitContact[language]}</span>
            </Link>

            <Link
              href="/order"
              onClick={onClose}
              className="px-3 py-3 min-h-[48px] flex items-center gap-3 text-base font-medium text-primary hover:text-berbere hover:bg-surface rounded transition-colors focus-ring"
            >
              <UtensilsCrossed className="w-5 h-5 text-muted" aria-hidden="true" />
              <span>{TRANSLATIONS.nav.orderOnline[language]}</span>
            </Link>
          </nav>
        </div>

        {/* Action CTAs in Drawer */}
        <div className="pt-6 border-t border-border flex flex-col gap-3">
          <Link
            href="/reserve"
            onClick={onClose}
            className="w-full min-h-[48px] px-4 py-3 rounded bg-berbere hover:bg-berbere-hover text-white text-center font-medium text-sm flex items-center justify-center gap-2 transition-colors focus-ring"
          >
            <Calendar className="w-4 h-4" aria-hidden="true" />
            <span>{TRANSLATIONS.nav.reserveTable[language]}</span>
          </Link>

          <Link
            href="/order"
            onClick={onClose}
            className="w-full min-h-[48px] px-4 py-3 rounded border border-border bg-surface hover:bg-canvas text-primary text-center font-medium text-sm flex items-center justify-center gap-2 transition-colors focus-ring"
          >
            <UtensilsCrossed className="w-4 h-4 text-berbere" aria-hidden="true" />
            <span>{TRANSLATIONS.nav.orderOnline[language]}</span>
          </Link>

          <p className="text-xs text-muted text-center mt-2">
            {RESTAURANT_CONFIG.address.street}, {RESTAURANT_CONFIG.address.postalCode} {RESTAURANT_CONFIG.address.city}
          </p>
        </div>
      </div>
    </div>
  );
}
