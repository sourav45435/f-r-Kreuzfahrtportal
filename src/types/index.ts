export type ViewMode = 
  | 'home' 
  | 'search' 
  | 'detail' 
  | 'terminal' 
  | 'reederei' 
  | 'booking-step-1' 
  | 'booking-step-2' 
  | 'booking-step-3'
  | 'partner' 
  | 'affiliate';

export interface ParkingOffer {
  id: string;
  name: string;
  tagline?: string;
  badge?: string; // e.g. "UNSERE EMPFEHLUNG", "BESONDERS KOMFORTABEL", "GÜNSTIGER PREIS"
  port: string; // 'kiel', 'hamburg', etc.
  terminal: 'ostseekai' | 'ostuferhafen' | 'norwegenkai' | 'schwedenkai';
  terminalName: string;
  type: 'terminal' | 'shuttle' | 'halle' | 'valet';
  price7Days: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  distanceTerminalMin: number;
  distanceKmText: string;
  image: string;
  gallery: string[];
  isRecommended?: boolean;
  features: string[];
  description: string;
  address: string;
  openHours: string;
  shuttleFrequency: string;
  valetInstructions?: string;
}

export interface CruiseLine {
  id: string;
  name: string;
  logo: string;
  image?: string;
  ships: string[];
  defaultTerminal: string;
  description: string;
}

export interface PortTerminal {
  id: string;
  name: string;
  port: string;
  description: string;
  popularShips: string[];
  parkingCount: number;
  image: string;
}

export interface BookingFormData {
  // Step 1: Contact
  salutation: 'Herr' | 'Frau' | 'Divers';
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  street: string;
  zip: string;
  city: string;
  
  // Step 1: Vehicle
  licensePlate: string;
  carBrandModel: string;
  carColor: string;
  
  // Step 1: Cruise
  cruiseLine: string;
  ship: string;
  passengers: number;
  
  // Step 1: Schedule
  arrivalDate: string;
  departureDate: string;
  arrivalTimeSlot: string;
  estimatedReturnTime: string;
  
  // Step 1: Notes
  specialNeeds: string[];
  customNotes: string;
  
  // Step 2: Payment
  paymentMethod: 'paypal' | 'card' | 'applepay' | 'googlepay' | 'sepa';
  cardNumber?: string;
  cardExpiry?: string;
  cardCvc?: string;
  iban?: string;
  billingSameAsContact: boolean;
  billingStreet?: string;
  billingZip?: string;
  billingCity?: string;
  termsAccepted: boolean;
  cancellationAccepted: boolean;
  
  // Step 3 output
  bookingId: string;
  totalPrice: number;
  bookingDate: string;
}
