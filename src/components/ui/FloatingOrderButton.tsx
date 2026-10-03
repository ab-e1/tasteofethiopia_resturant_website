'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingBag } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { TRANSLATIONS } from '@/config/translations';

export function FloatingOrderButton() {
  const pathname = usePathname();
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Hide completely if already on the dedicated order page
    if (pathname === '/order') {
      setIsVisible(false);
      return;
    }

    const handleScroll = () => {
      // On homepage, reveal after scrolling past the initial hero banner (~280px)
      // On other pages, reveal after initial slight scroll (~100px)
      const threshold = pathname === '/' ? 280 : 100;
      setIsVisible(window.scrollY > threshold);
    };

    // Check initial position on mount/page change
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  // Don't render if on order hub page
  if (pathname === '/order') {
    return null;
  }

  return (
    <aside
      aria-label={language === 'nl' ? 'Snel online bestellen' : 'Quick online ordering'}
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40"
    >
      <Link
        href="/order"
        className={`group inline-flex items-center gap-2.5 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full bg-berbere hover:bg-berbere-hover text-white text-xs sm:text-sm font-semibold shadow-elevated transition-all duration-300 ${
          isVisible
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : 'translate-y-6 opacity-0 pointer-events-none'
        } focus-ring border border-white/20 hover:shadow-lg`}
      >
        <ShoppingBag
          className="w-4 h-4 text-white/95 transition-transform group-hover:scale-105"
          aria-hidden="true"
        />
        <span className="tracking-wide">{TRANSLATIONS.nav.orderOnline[language]}</span>
      </Link>
    </aside>
  );
}
