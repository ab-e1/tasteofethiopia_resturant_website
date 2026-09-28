import type { ContentVerificationStatus } from '@/types/restaurant';

export interface OrderingProvider {
  id: string;
  name: string;
  slug: string;
  storeUrl: string;
  badge: string;
  badgeEn: string;
  description: string;
  descriptionEn: string;
  etaDisplay: string;
  active: boolean;
  status: ContentVerificationStatus;
}

export const ORDERING_PROVIDERS: OrderingProvider[] = [
  {
    id: 'thuisbezorgd',
    name: 'Thuisbezorgd.nl',
    slug: 'thuisbezorgd',
    storeUrl: 'https://www.thuisbezorgd.nl/menu/taste-of-ethiopia-newnew',
    badge: 'Populaire Bezorging',
    badgeEn: 'Popular Delivery',
    description: 'Bestel authentieke Ethiopische schotels en verse injera gemakkelijk thuis via Thuisbezorgd.nl in Den Haag.',
    descriptionEn: 'Order authentic Ethiopian platters and fresh injera to your home via Thuisbezorgd.nl across The Hague.',
    etaDisplay: '30 – 50 min',
    active: true,
    status: 'CLIENT_VERIFIED',
  },
  {
    id: 'ubereats',
    name: 'Uber Eats',
    slug: 'ubereats',
    storeUrl: 'https://www.ubereats.com/nl/store/taste-of-ethiopia/2eMHU-iBVL-MaJeJMlOMvw',
    badge: 'Directe Bezorging',
    badgeEn: 'Direct Delivery',
    description: 'Snelle bezorging van al onze malse vleesgerechten, veganistische Yetsom stoofpotten en drankjes via Uber Eats.',
    descriptionEn: 'Fast delivery of our tender meat dishes, vegan Yetsom stews, and beverages through Uber Eats.',
    etaDisplay: '25 – 45 min',
    active: true,
    status: 'CLIENT_VERIFIED',
  },
];
