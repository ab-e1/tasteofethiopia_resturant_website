export interface ReservationConfig {
  theForkRestaurantId: string;
  directBookingUrl: string;
  widgetEmbedUrl: string | null;
  routingNotice: string;
  phoneReservationNote: string;
}

export const RESERVATION_CONFIG: ReservationConfig = {
  theForkRestaurantId: '848136',
  directBookingUrl: 'https://www.thefork.nl/restaurant/taste-of-ethiopia-r848136',
  widgetEmbedUrl: null, // Populated only if the restaurant configures an official embed widget
  routingNotice: 'Table reservations are routed to TheFork. Availability, confirmation, and seating policies are managed by the restaurant via TheFork.',
  phoneReservationNote: 'For parties larger than 8 guests or private gatherings, please contact the restaurant directly.',
};
