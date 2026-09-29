'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { TRANSLATIONS } from '@/config/translations';

interface SignatureDish {
  id: string;
  name: string;
  nameEn: string;
  subtitle: string;
  subtitleEn: string;
  category: { nl: string; en: string };
  description: string;
  descriptionEn: string;
  image: string;
}

const PRIMARY_DISH: SignatureDish = {
  id: 'doro-wot',
  name: 'Doro Wot',
  nameEn: 'Doro Wot',
  subtitle: 'Feestelijke Gekruide Kipstoof',
  subtitleEn: 'Celebration Spiced Chicken Stew',
  category: { nl: 'Huis-Specialiteit', en: 'House Signature' },
  description:
    'Het iconische feestgerecht van Ethiopië: malse kip langzaam gestoofd in een diepe berbere-saus met gekruide boter, een traditioneel hardgekookt ei en zachte ayib kaas.',
  descriptionEn:
    'The iconic celebration feast of Ethiopia: tender chicken slow-simmered in rich berbere sauce with spiced niter kibbeh butter, a traditional hard-boiled egg, and fresh ayib cheese.',
  image: '/images/doro-wot.webp',
};

const SECONDARY_DISHES: SignatureDish[] = [
  {
    id: 'yetsom-beyaynetu',
    name: 'Yetsom Beyaynetu',
    nameEn: 'Yetsom Beyaynetu',
    subtitle: 'Kleurrijke Vegan Vastenschotel',
    subtitleEn: 'Colorful Vegan Fasting Platter',
    category: { nl: 'Plantaardig / Vegan', en: 'Plant-Based / Vegan' },
    description:
      'Een harmonieuze proeverij van gele spliterwten (Kik Alicha), rode linzen (Misir Wot), knoflook boerenkool (Gomen) en zachte Shiro op verse teff injera.',
    descriptionEn:
      'A harmonious array of yellow split peas (Kik Alicha), spiced red lentils (Misir Wot), garlic collard greens (Gomen), and velvety Shiro on fresh teff injera.',
    image: '/images/yetsom-beyaynetu.webp',
  },
  {
    id: 'awaze-tibs',
    name: 'Awaze Tibs',
    nameEn: 'Awaze Tibs',
    subtitle: 'Gewokt Rundvlees met Rozemarijn',
    subtitleEn: 'Sautéed Beef with Rosemary',
    category: { nl: 'Traditioneel Gewokt', en: 'Traditional Sauté' },
    description:
      'Malse blokjes rundvlees gewokt op hoog vuur met verse rozemarijn, rode ui en groene pepers, geglaceerd in onze huisgemaakte pittige awaze.',
    descriptionEn:
      'Tender cubes of prime beef flash-sautéed with fresh rosemary, red onions, and sliced peppers in house-crafted spicy awaze chili paste.',
    image: '/images/awaze-tibs.webp',
  },
];

export function SignatureFeasts() {
  const { language } = useLanguage();
  const tFeasts = TRANSLATIONS.home.feasts;

  return (
    <section
      id="menu"
      aria-labelledby="feasts-heading"
      className="scroll-mt-20 py-20 sm:py-24 md:py-32 bg-surface border-y border-border/70"
    >
      <div className="max-w-content mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-berbere font-sans block mb-2">
            {tFeasts.eyebrow[language]}
          </span>
          <h2
            id="feasts-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-primary tracking-tight"
          >
            {tFeasts.title[language]}
          </h2>
          <p className="text-base sm:text-lg font-sans text-muted mt-3 leading-relaxed">
            {tFeasts.subtitle[language]}
          </p>
        </div>

        {/* Dominant Featured Dish (Asymmetric Hero Layout) */}
        <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Dominant Food Photography */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full rounded overflow-hidden bg-canvas">
              <Image
                src={PRIMARY_DISH.image}
                alt={language === 'en' ? `${PRIMARY_DISH.nameEn} — ${PRIMARY_DISH.subtitleEn}` : `${PRIMARY_DISH.name} — ${PRIMARY_DISH.subtitle}`}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Dominant Food Copy */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-terracotta font-sans">
              {language === 'en' ? PRIMARY_DISH.category.en : PRIMARY_DISH.category.nl}
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-semibold text-primary">
              {language === 'en' ? PRIMARY_DISH.nameEn : PRIMARY_DISH.name}
            </h3>
            <p className="text-sm font-semibold text-muted uppercase tracking-wider font-sans">
              {language === 'en' ? PRIMARY_DISH.subtitleEn : PRIMARY_DISH.subtitle}
            </p>
            <p className="text-base font-sans text-muted leading-relaxed pt-2">
              {language === 'en' ? PRIMARY_DISH.descriptionEn : PRIMARY_DISH.description}
            </p>
            <div className="pt-3 border-t border-border/60 text-xs font-sans text-muted/80 italic">
              {language === 'en' ? 'Served with handcrafted teff injera' : 'Geserveerd met ambachtelijke teff injera'}
            </div>
          </div>
        </article>

        {/* Secondary Dishes (Editorial 2-Column Spread) */}
        <div className="mt-16 sm:mt-20 pt-16 border-t border-border/60 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {SECONDARY_DISHES.map((dish) => (
            <article key={dish.id} className="flex flex-col space-y-4">
              <div className="relative aspect-[16/10] w-full rounded overflow-hidden bg-canvas">
                <Image
                  src={dish.image}
                  alt={language === 'en' ? `${dish.nameEn} — ${dish.subtitleEn}` : `${dish.name} — ${dish.subtitle}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-ochre font-sans">
                  {language === 'en' ? dish.category.en : dish.category.nl}
                </span>
                <h4 className="font-serif text-2xl font-semibold text-primary">
                  {language === 'en' ? dish.nameEn : dish.name}
                </h4>
                <p className="text-sm font-sans text-muted leading-relaxed">
                  {language === 'en' ? dish.descriptionEn : dish.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Section Footer Link */}
        <div className="mt-14 sm:mt-18 text-center sm:text-left">
          <Link
            href="/menu"
            className="min-h-[48px] inline-flex items-center gap-2.5 text-base font-semibold text-berbere hover:text-berbere-hover border-b border-berbere/40 hover:border-berbere pb-1 transition-colors focus-ring"
          >
            <span>{tFeasts.viewFullMenu[language]}</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
