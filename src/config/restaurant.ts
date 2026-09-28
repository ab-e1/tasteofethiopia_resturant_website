import type { RestaurantConfig } from '@/types/restaurant';

export const RESTAURANT_CONFIG: RestaurantConfig = {
  name: 'Taste of Ethiopia',
  tagline: 'Authentic Ethiopian Hospitality in the Heart of The Hague',
  description: 'Slow-simmered wot stews, handcrafted teff injera, and the warmth of communal dining. Served with love and tradition in Den Haag Chinatown.',
  address: {
    street: 'Wagenstraat 177',
    city: 'Den Haag',
    postalCode: '2512 AW',
    country: 'Netherlands',
    neighborhood: 'Chinatown / Centrum',
    status: 'CONFIRMED',
  },
  contact: {
    phoneDisplay: '070 215 57 17',
    phoneHref: '+31702155717',
    mobileDisplay: '+31 6 860 814 52',
    email: 'info@tasteofethiopia.nl',
    status: 'EXTERNAL_SOURCE_UNVERIFIED',
  },
  hours: {
    display: 'Daily: 12:00 – 00:00',
    kitchenNote: 'Kitchen service until 23:00 | Late hospitality until 02:00',
    discrepancyNote: 'Operating hours are subject to client verification (TheFork reports 12:00–00:00, while legacy metadata indicates 12:00–02:00).',
    status: 'EXTERNAL_SOURCE_UNVERIFIED',
  },
  transit: {
    trams: 'Tram 1, 9, 16',
    stops: 'Bierkade or Kalvermarkt-Stadhuis',
    walkingDistance: '7 minutes from Den Haag HS / 10 minutes from Den Haag Centraal',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Taste+of+Ethiopia+Wagenstraat+177+Den+Haag',
    status: 'EXTERNAL_SOURCE_UNVERIFIED',
  },
  social: {
    instagram: 'https://instagram.com/tasteofethiopia_denhaag',
    facebook: 'https://facebook.com/tasteofethiopiadenhaag',
    status: 'EXTERNAL_SOURCE_UNVERIFIED',
  },
};
