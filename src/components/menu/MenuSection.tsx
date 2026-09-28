'use client';

import Link from 'next/link';
import { Sparkles, Flame, Leaf, Utensils, Calendar, HeartHandshake } from 'lucide-react';
import { MENU_CATEGORIES } from '@/config/menu';
import { RESERVATION_CONFIG } from '@/config/reservations';
import { useLanguage } from '@/context/LanguageContext';
import { TRANSLATIONS } from '@/config/translations';
import type { DietaryTag } from '@/types/menu';

function DietaryBadge({ tag, language }: { tag: DietaryTag; language: 'nl' | 'en' }) {
  const badges = TRANSLATIONS.menu.badges;

  switch (tag) {
    case 'vegan':
      return (
        <span className="inline-flex items-center gap-1 text-[11px] font-medium font-sans px-2.5 py-0.5 rounded border bg-sage/10 text-sage border-sage/20">
          <Leaf className="w-3 h-3" aria-hidden="true" />
          <span>{badges.vegan[language]}</span>
        </span>
      );
    case 'vegetarian':
      return (
        <span className="inline-flex items-center gap-1 text-[11px] font-medium font-sans px-2.5 py-0.5 rounded border bg-sage/10 text-sage border-sage/20">
          <Leaf className="w-3 h-3" aria-hidden="true" />
          <span>{badges.vegetarian[language]}</span>
        </span>
      );
    case 'spicy':
      return (
        <span className="inline-flex items-center gap-1 text-[11px] font-medium font-sans px-2.5 py-0.5 rounded border bg-berbere/10 text-berbere border-berbere/20">
          <Flame className="w-3 h-3" aria-hidden="true" />
          <span>{badges.spicy[language]}</span>
        </span>
      );
    default:
      return null;
  }
}

export function MenuSection() {
  const { language } = useLanguage();
  const tMenu = TRANSLATIONS.menu;

  return (
    <section id="menu" aria-labelledby="menu-heading" className="py-12 md:py-20 max-w-content mx-auto px-6 md:px-12">
      {/* Editorial Header */}
      <div className="max-w-reading mb-10 md:mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface border border-border text-xs font-semibold text-berbere uppercase tracking-wider font-sans mb-3">
          <Utensils className="w-3.5 h-3.5" aria-hidden="true" />
          <span>{tMenu.sectionBadge[language]}</span>
        </div>
        <h2
          id="menu-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-primary tracking-tight leading-tight"
        >
          {tMenu.sectionTitle[language]}
        </h2>
        <p className="text-base sm:text-lg font-sans text-muted mt-4 leading-relaxed">
          {tMenu.sectionSubtitle[language]}
        </p>
      </div>

      {/* Sticky Category Jump Navigation */}
      <nav
        aria-label={tMenu.navAria[language]}
        className="sticky top-16 md:top-20 z-20 -mx-6 px-6 md:-mx-12 md:px-12 py-3 bg-canvas/95 backdrop-blur-md border-y border-border mb-12 overflow-x-auto no-scrollbar"
      >
        <ul className="flex items-center gap-2 min-w-max">
          {MENU_CATEGORIES.map((category) => {
            const title = language === 'en' && category.titleEn ? category.titleEn : category.title;
            const shortTitle = title.split(' (')[0];

            return (
              <li key={category.id}>
                <a
                  href={`#${category.slug}`}
                  className="inline-flex items-center justify-center min-h-[48px] px-4 py-2 rounded text-xs md:text-sm font-medium font-sans text-primary hover:text-berbere hover:bg-surface border border-transparent hover:border-border transition-colors focus-ring"
                >
                  {shortTitle}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Culinary Categories List */}
      <div className="space-y-16 md:space-y-24">
        {MENU_CATEGORIES.map((category) => {
          const catTitle = language === 'en' && category.titleEn ? category.titleEn : category.title;
          const catSubtitle = language === 'en' && category.subtitleEn ? category.subtitleEn : category.subtitle;

          return (
            <section
              key={category.id}
              id={category.slug}
              aria-labelledby={`category-${category.id}`}
              className="scroll-mt-32"
            >
              {/* Category Header */}
              <div className="border-b border-border pb-4 mb-8">
                <h3
                  id={`category-${category.id}`}
                  className="text-2xl sm:text-3xl font-serif font-semibold text-primary tracking-tight"
                >
                  {catTitle}
                </h3>
                {catSubtitle && (
                  <p className="text-sm sm:text-base font-sans text-muted mt-1.5 leading-relaxed">
                    {catSubtitle}
                  </p>
                )}
              </div>

              {/* Dishes 2-Column Editorial Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
                {category.items.map((item) => {
                  const dishName = language === 'en' && item.nameEn ? item.nameEn : item.name;
                  const dishDesc = language === 'en' && item.descriptionEn ? item.descriptionEn : item.description;
                  const dishServing = language === 'en' && item.servingEn ? item.servingEn : item.serving;

                  return (
                    <article
                      key={item.id}
                      className="flex flex-col justify-between py-2 border-b border-border/50 lg:border-none group"
                    >
                      <div>
                        {/* Top Row: Dish Name + Leader Line + Price */}
                        <div className="flex items-baseline justify-between gap-2">
                          <div className="flex items-baseline gap-2 min-w-0">
                            <h4 className="font-serif text-lg sm:text-xl font-semibold text-primary group-hover:text-berbere transition-colors">
                              {dishName}
                            </h4>
                            {dishServing && (
                              <span className="text-xs font-sans text-muted/80 italic shrink-0">
                                ({dishServing})
                              </span>
                            )}
                          </div>

                          {/* Dotted Editorial Leader Line */}
                          <div
                            className="flex-1 border-b border-dotted border-border mx-2 min-w-[16px] mb-1 opacity-70"
                            aria-hidden="true"
                          />

                          {/* Price */}
                          <span className="font-sans font-semibold text-base sm:text-lg text-primary shrink-0 tabular-nums">
                            {item.price}
                          </span>
                        </div>

                        {/* Rich Culinary Description */}
                        <p className="text-sm font-sans text-muted mt-2 leading-relaxed">
                          {dishDesc}
                        </p>
                      </div>

                      {/* Badges / Dietary indicators */}
                      <div className="flex flex-wrap items-center gap-2 mt-3 pt-1">
                        {item.isSignature && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-medium font-sans px-2.5 py-0.5 rounded border bg-ochre/10 text-ochre border-ochre/30">
                            <Sparkles className="w-3 h-3" aria-hidden="true" />
                            <span>{tMenu.badges.signature[language]}</span>
                          </span>
                        )}

                        {item.dietary.map((tag) => (
                          <DietaryBadge key={tag} tag={tag} language={language} />
                        ))}
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>

      {/* Allergen & Injera Hospitality Callout Banner */}
      <div className="mt-16 md:mt-24 p-6 sm:p-8 md:p-10 rounded bg-surface border border-border shadow-subtle">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-canvas border border-border text-xs font-semibold text-primary uppercase tracking-wider font-sans mb-3">
            <HeartHandshake className="w-3.5 h-3.5 text-berbere" aria-hidden="true" />
            <span>{tMenu.hospitality.badge[language]}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-primary tracking-tight">
            {tMenu.hospitality.title[language]}
          </h3>

          <div className="mt-4 space-y-3 text-sm sm:text-base font-sans text-muted leading-relaxed">
            <p>
              <strong className="text-primary font-semibold">{tMenu.hospitality.injeraHeading[language]} </strong>
              {tMenu.hospitality.injeraText[language]}
            </p>
            <p>
              <strong className="text-primary font-semibold">{tMenu.hospitality.yetsomHeading[language]} </strong>
              {tMenu.hospitality.yetsomText[language]}
            </p>
            <p>
              <strong className="text-primary font-semibold">{tMenu.hospitality.allergenHeading[language]} </strong>
              {tMenu.hospitality.allergenText[language]}
            </p>
          </div>

          {/* Action Row */}
          <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href={RESERVATION_CONFIG.directBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 rounded bg-berbere hover:bg-berbere-hover text-white text-sm font-semibold transition-colors focus-ring"
            >
              <Calendar className="w-4 h-4" aria-hidden="true" />
              <span>{tMenu.hospitality.bookTheFork[language]}</span>
            </Link>

            <Link
              href="/reserve"
              className="inline-flex items-center justify-center min-h-[48px] px-5 py-3 rounded bg-canvas hover:bg-surface border border-border text-primary text-sm font-medium transition-colors focus-ring"
            >
              <span>{tMenu.hospitality.reserveInfo[language]}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
