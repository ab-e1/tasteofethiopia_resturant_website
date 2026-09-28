export type ContentVerificationStatus = 
  | 'CLIENT_VERIFIED'
  | 'EXTERNAL_SOURCE_UNVERIFIED'
  | 'DRAFT';

export interface AddressInfo {
  street: string;
  city: string;
  postalCode: string;
  country: string;
  neighborhood: string;
  status: 'CONFIRMED';
}

export interface ContactInfo {
  phoneDisplay: string;
  phoneHref: string;
  mobileDisplay: string;
  email: string;
  status: ContentVerificationStatus;
}

export interface OperatingHours {
  display: string;
  kitchenNote: string;
  discrepancyNote: string;
  status: ContentVerificationStatus;
}

export interface TransitInfo {
  trams: string;
  stops: string;
  walkingDistance: string;
  directionsUrl: string;
  status: ContentVerificationStatus;
}

export interface SocialLinks {
  instagram: string;
  facebook: string;
  status: ContentVerificationStatus;
}

export interface RestaurantConfig {
  name: string;
  tagline: string;
  description: string;
  address: AddressInfo;
  contact: ContactInfo;
  hours: OperatingHours;
  transit: TransitInfo;
  social: SocialLinks;
}
