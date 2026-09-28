import type { ContentVerificationStatus } from './restaurant';

export type DietaryTag = 
  | 'vegan' 
  | 'vegetarian' 
  | 'halal' 
  | 'spicy' 
  | 'gluten-friendly';

export interface MenuItem {
  id: string;
  name: string;
  nameEn?: string;
  price: string;
  priceNumeric: number;
  description: string;
  descriptionEn?: string;
  dietary: DietaryTag[];
  isSignature?: boolean;
  serving?: string;
  servingEn?: string;
  image?: string;
  status: ContentVerificationStatus;
}

export interface MenuCategory {
  id: string;
  slug: string;
  title: string;
  titleEn?: string;
  subtitle?: string;
  subtitleEn?: string;
  items: MenuItem[];
}
