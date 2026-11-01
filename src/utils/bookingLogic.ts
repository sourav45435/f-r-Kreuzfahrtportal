/**
 * Pure booking and search calculation logic
 */

export interface ParkingOffer {
  id: string;
  name: string;
  port: string;
  terminal: string;
  type: 'terminal' | 'shuttle' | 'halle' | 'valet';
  price7Days: number;
  rating: number;
  reviewCount: number;
  distanceTerminalMin: number;
  isRecommended?: boolean;
  isPopular?: boolean;
  features: string[];
}

export interface BookingState {
  salutation: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  street: string;
  zip: string;
  city: string;
  licensePlate: string;
  carBrandModel: string;
  carColor?: string;
  cruiseLine: string;
  ship: string;
  passengers: number;
  arrivalDate: string;
  departureDate: string;
  arrivalTimeSlot: string;
  specialRequests: string[];
  notes?: string;
  paymentMethod: 'paypal' | 'card' | 'applepay' | 'googlepay' | 'sepa';
}

export function calculateParkingPrice(basePrice7Days: number, days: number = 7): number {
  if (days <= 0) return 0;
  if (days === 7) return basePrice7Days;
  const dayRate = basePrice7Days / 7;
  // slight volume discount for longer stays
  const multiplier = days > 7 ? 0.9 : 1.0;
  return Math.round(dayRate * days * multiplier);
}

export function generateBookingNumber(seedNum: number = 18453, year: number = 2027): string {
  const padded = String(seedNum).padStart(6, '0');
  return `KP-${year}-${padded}`;
}

export function filterOffers(
  offers: ParkingOffer[],
  filters: {
    type?: string;
    maxPrice?: number;
    maxDistanceMin?: number;
    minRating?: number;
    requiredFeatures?: string[];
  }
): ParkingOffer[] {
  return offers.filter(offer => {
    if (filters.type && filters.type !== 'all' && offer.type !== filters.type) {
      return false;
    }
    if (filters.maxPrice && offer.price7Days > filters.maxPrice) {
      return false;
    }
    if (filters.maxDistanceMin && offer.distanceTerminalMin > filters.maxDistanceMin) {
      return false;
    }
    if (filters.minRating && offer.rating < filters.minRating) {
      return false;
    }
    if (filters.requiredFeatures && filters.requiredFeatures.length > 0) {
      const hasAll = filters.requiredFeatures.every(rf => offer.features.includes(rf));
      if (!hasAll) return false;
    }
    return true;
  });
}

export function validateStep1(data: Partial<BookingState>): { isValid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};

  if (!data.firstName?.trim()) errors.firstName = 'Vorname ist erforderlich';
  if (!data.lastName?.trim()) errors.lastName = 'Nachname ist erforderlich';
  if (!data.email?.includes('@')) errors.email = 'Gültige E-Mail erforderlich';
  if (!data.phone?.trim()) errors.phone = 'Mobilnummer ist erforderlich';
  if (!data.street?.trim()) errors.street = 'Straße und Hausnummer erforderlich';
  if (!data.zip?.trim()) errors.zip = 'PLZ erforderlich';
  if (!data.city?.trim()) errors.city = 'Ort erforderlich';
  if (!data.licensePlate?.trim()) errors.licensePlate = 'Kennzeichen ist erforderlich';
  if (!data.carBrandModel?.trim()) errors.carBrandModel = 'Fahrzeugmarke / Modell erforderlich';

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
