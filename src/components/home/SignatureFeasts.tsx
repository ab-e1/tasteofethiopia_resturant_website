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
  description: string;
  descriptionEn: string;
  image: string;
  badges: { label: string; labelEn: string; colorClass: string }[];
}

const SIGNATURE_DISHES: SignatureDish[] = [
  {
    id: 'doro-wot',
    name: 'Doro Wot',
    nameEn: 'Doro Wot (Doro Woti)',
    subtitle: 'Feestelijke Gekruide Kipstoof',
    subtitleEn: 'Celebration Spiced Chicken Stew',
    description:
      'Het feestelijke nationale gerecht van Ethiopië: malse kip langzaam gestoofd in rijke berbere-saus met gekruide boter, geserveerd met een hardgekookt ei en verse zachte ayib kaas.',
    descriptionEn:
      'The crown jewel of Ethiopian celebration dining: tender chicken drumsticks slow-simmered in rich berbere sauce, caramelized red onions, niter kibbeh spiced butter, and a traditional hard-boiled egg.',
    image: '/images/doro-wot.webp',
    badges: [
      { label: 'Huis-Specialiteit', labelEn: 'Signature', colorClass: 'bg-berbere-light text-berbere border-berbere/30' },
      { label: 'Traditioneel Pittig', labelEn: 'Traditional Spice', colorClass: 'bg-surface text-terracotta border-terracotta/30' },
    ],
  },
  {
    id: 'yetsom-beyaynetu',
    name: 'Yetsom Beyaynetu',
    nameEn: 'Yetsom Beyaynetu',
    subtitle: 'Kleurrijke Veganistische Vastenschotel',
    subtitleEn: 'Colorful Vegan Fasting Platter',
    description:
      'Een harmonieuze proeverij van plantaardige gerechten op verse teff injera: gele spliterwten (Kik Alicha), rode linzen (Misir Wot), knoflook boerenkool (Gomen) en fluweelzachte Shiro kikkererwtenstoof.',
    descriptionEn:
      'A harmonious array of plant-based specialties arranged across fresh teff injera: yellow split peas (Kik Alicha), spicy red lentils (Misir Wot), garlic collard greens (Gomen), and velvety Shiro chickpea stew.',
    image: '/images/yetsom-beyaynetu.webp',
    badges: [
      { label: 'Plantaardig / Vegan', labelEn: 'Plant-Based / Vegan', colorClass: 'bg-sage-light text-sage border-sage/30' },
      { label: 'Gedeelde Favoriet', labelEn: 'Communal Favorite', colorClass: 'bg-canvas text-muted border-border' },
    ],
  },
  {
    id: 'awaze-tibs',
    name: 'Awaze Tibs',
    nameEn: 'Awaze Tibs',
    subtitle: 'Gewokt Rundvlees met Rozemarijn',
    subtitleEn: 'Sautéed Prime Beef with Rosemary',
    description:
      'Malse blokjes rundvlees op hoog vuur gewokt met verse rozemarijn, rode ui, knoflook en groene pepers, geglaceerd in onze huisgemaakte pittige awaze chilipasta.',
    descriptionEn:
      'Tender cubes of prime beef flash-sautéed over high flame with fresh rosemary sprigs, red onions, garlic, and sliced jalapeño peppers, glazed in our house-made spicy awaze chili paste.',
    image: '/images/awaze-tibs.webp',
    badges: [
      { label: 'Traditioneel Gewokt', labelEn: 'Traditional Sauté', colorClass: 'bg-surface text-primary border-border' },
      { label: 'Kruidig & Aromatisch', labelEn: 'Aromatic & Spiced', colorClass: 'bg-berbere-light text-berbere border-berbere/30' },
    ],
  },
];

export function SignatureFeasts() {
  const { language } = useLanguage();
  const tFeasts = TRANSLATIONS.home.feasts;

  return (
    <section
      id="menu"
      aria-labelledby="feasts-heading"
      className="scroll-mt-20 py-20 md:py-28 bg-surface border-y border-border"
    >
      <div className="max-w-content mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 md:mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-berbere font-sans">
            {tFeasts.eyebrow[language]}
          </span>
          <h2
            id="feasts-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-primary mt-2 leading-tight"
          >
            {tFeasts.title[language]}
          </h2>
          <p className="text-base sm:text-lg font-sans text-muted mt-3 leading-relaxed">
            {tFeasts.subtitle[language]}
          </p>
        </div>

        {/* 3-Column Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8">
          {SIGNATURE_DISHES.map((dish) => (
            <article
              key={dish.id}
              className="flex flex-col bg-canvas border border-border rounded overflow-hidden shadow-subtle hover:border-border/90 transition-colors"
            >
              {/* Dish Photo */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface">
                <Image
                  src={dish.image}
                  alt={language === 'en' ? `${dish.nameEn} — ${dish.subtitleEn}` : `${dish.name} — ${dish.subtitle}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Dish Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {dish.badges.map((badge, idx) => (
                      <span
                        key={idx}
                        className={`text-[11px] font-medium font-sans px-2.5 py-0.5 rounded border ${badge.colorClass}`}
                      >
                        {language === 'en' ? badge.labelEn : badge.label}
                      </span>
                    ))}
                  </div>

                  {/* Titles */}
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-primary">
                      {language === 'en' ? dish.nameEn : dish.name}
                    </h3>
                  </div>
                  <p className="text-xs font-semibold text-terracotta uppercase tracking-wider mt-0.5 font-sans">
                    {language === 'en' ? dish.subtitleEn : dish.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm font-sans text-muted mt-3 leading-relaxed">
                    {language === 'en' ? dish.descriptionEn : dish.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60 text-xs font-sans text-muted">
                  {language === 'en' ? 'Served with handcrafted teff injera' : 'Geserveerd met ambachtelijke teff injera'}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Section Footer Link */}
        <div className="mt-12 text-center">
          <Link
            href="/menu"
            className="min-h-[48px] px-6 py-3 rounded inline-flex items-center gap-2 text-sm font-semibold text-berbere hover:text-berbere-hover border border-berbere/30 hover:border-berbere bg-canvas transition-colors focus-ring"
          >
            <span>{tFeasts.viewFullMenu[language]}</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
