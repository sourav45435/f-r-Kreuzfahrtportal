import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateParkingPrice,
  generateBookingNumber,
  filterOffers,
  validateStep1,
  ParkingOffer
} from './bookingLogic';

test('calculateParkingPrice correctly computes base and extended rates', () => {
  assert.equal(calculateParkingPrice(140, 7), 140);
  assert.equal(calculateParkingPrice(140, 0), 0);
  // 14 days with 0.9 discount
  const rate14 = calculateParkingPrice(140, 14);
  assert.equal(rate14, 252);
});

test('generateBookingNumber formats correctly like KP-2027-018453', () => {
  assert.equal(generateBookingNumber(18453, 2027), 'KP-2027-018453');
  assert.equal(generateBookingNumber(42, 2026), 'KP-2026-000042');
});

test('filterOffers filters by price and type', () => {
  const sampleOffers: ParkingOffer[] = [
    {
      id: 'port-parking-kiel',
      name: 'Port Parking Kiel',
      port: 'kiel',
      terminal: 'ostseekai',
      type: 'shuttle',
      price7Days: 139,
      rating: 4.8,
      reviewCount: 326,
      distanceTerminalMin: 2,
      features: ['video', '24h', 'allianz']
    },
    {
      id: 'valet-kiel',
      name: 'Valet Parking Kiel',
      port: 'kiel',
      terminal: 'ostseekai',
      type: 'valet',
      price7Days: 179,
      rating: 4.9,
      reviewCount: 412,
      distanceTerminalMin: 0,
      features: ['valet', '24h', 'allianz']
    }
  ];

  const valetOnly = filterOffers(sampleOffers, { type: 'valet' });
  assert.equal(valetOnly.length, 1);
  assert.equal(valetOnly[0].id, 'valet-kiel');

  const budgetOnly = filterOffers(sampleOffers, { maxPrice: 150 });
  assert.equal(budgetOnly.length, 1);
  assert.equal(budgetOnly[0].id, 'port-parking-kiel');
});

test('validateStep1 checks mandatory contact and car details', () => {
  const incomplete = validateStep1({ firstName: 'Thomas' });
  assert.equal(incomplete.isValid, false);
  assert.ok(incomplete.errors.lastName);
  assert.ok(incomplete.errors.email);

  const complete = validateStep1({
    salutation: 'Herr',
    firstName: 'Thomas',
    lastName: 'Müller',
    email: 'thomas.mueller@beispiel.de',
    phone: '0176 12345678',
    street: 'Musterstraße 12',
    zip: '24103',
    city: 'Kiel',
    licensePlate: 'KI-AB 123',
    carBrandModel: 'VW Tiguan'
  });
  assert.equal(complete.isValid, true);
});
