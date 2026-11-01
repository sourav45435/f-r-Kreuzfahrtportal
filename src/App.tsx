import React, { useState, useEffect } from 'react';
import { ViewMode, ParkingOffer, BookingFormData } from './types';
import { PARKING_OFFERS, CRUISE_LINES, PORT_TERMINALS } from './data/mockData';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SavedModal } from './components/SavedModal';
import { LookupModal } from './components/LookupModal';
import { HomeView } from './views/HomeView';
import { SearchView } from './views/SearchView';
import { DetailView } from './views/DetailView';
import { TerminalView } from './views/TerminalView';
import { ReedereiView } from './views/ReedereiView';
import { BookingStep1View } from './views/BookingStep1View';
import { BookingStep2View } from './views/BookingStep2View';
import { BookingStep3View } from './views/BookingStep3View';
import { PartnerView } from './views/PartnerView';
import { AffiliateView } from './views/AffiliateView';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewMode>('home');
  const [selectedOffer, setSelectedOffer] = useState<ParkingOffer>(PARKING_OFFERS[0]);
  const [selectedTerminalId, setSelectedTerminalId] = useState<string>('ostseekai');
  const [selectedReedereiId, setSelectedReedereiId] = useState<string>('mein-schiff');
  const [searchPort, setSearchPort] = useState<string>('kiel');
  const [typeFilter, setTypeFilter] = useState<string>('all');

  // Favorites
  const [savedOffers, setSavedOffers] = useState<ParkingOffer[]>([
    PARKING_OFFERS[0],
    PARKING_OFFERS[1]
  ]);
  const [isSavedModalOpen, setIsSavedModalOpen] = useState(false);
  const [isLookupModalOpen, setIsLookupModalOpen] = useState(false);

  // Booking Form State initialized with the exact sample data from screenshots
  const [formData, setFormData] = useState<BookingFormData>({
    salutation: 'Herr',
    firstName: 'Thomas',
    lastName: 'Müller',
    email: 'thomas.mueller@beispiel.de',
    phone: '0176 12345678',
    street: 'Musterstraße 12',
    zip: '24103',
    city: 'Kiel',
    licensePlate: 'KI-AB 123',
    carBrandModel: 'VW Tiguan',
    carColor: 'Weiß',
    cruiseLine: 'Mein Schiff',
    ship: 'Mein Schiff 7',
    passengers: 2,
    arrivalDate: '2027-06-12',
    departureDate: '2027-06-19',
    arrivalTimeSlot: '10:00 – 11:00 Uhr',
    estimatedReturnTime: 'ca. 06:30 Uhr',
    specialNeeds: [],
    customNotes: '',
    paymentMethod: 'paypal',
    cardNumber: '4532 •••• •••• 8912',
    cardExpiry: '08/28',
    cardCvc: '789',
    billingSameAsContact: true,
    termsAccepted: true,
    cancellationAccepted: true,
    bookingId: 'KP-2027-018453',
    totalPrice: 139,
    bookingDate: '31.10.2026'
  });

  const updateFormData = (data: Partial<BookingFormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const handleNavigate = (view: ViewMode, payload?: any) => {
    if (payload?.port) setSearchPort(payload.port);
    if (payload?.terminalId) setSelectedTerminalId(payload.terminalId);
    if (payload?.reedereiId) setSelectedReedereiId(payload.reedereiId);
    if (payload?.parkingId) {
      const found = PARKING_OFFERS.find(p => p.id === payload.parkingId);
      if (found) setSelectedOffer(found);
    }
    if (payload?.typeFilter) setTypeFilter(payload.typeFilter);

    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectOffer = (offer: ParkingOffer) => {
    setSelectedOffer(offer);
    updateFormData({ totalPrice: offer.price7Days });
    handleNavigate('booking-step-1');
  };

  const handleStartBooking = (offer: ParkingOffer) => {
    setSelectedOffer(offer);
    updateFormData({ totalPrice: offer.price7Days });
    handleNavigate('booking-step-1');
  };

  const toggleSaveOffer = (offer: ParkingOffer) => {
    setSavedOffers(prev => {
      const exists = prev.some(o => o.id === offer.id);
      if (exists) {
        return prev.filter(o => o.id !== offer.id);
      } else {
        return [...prev, offer];
      }
    });
  };

  const removeSaved = (id: string) => {
    setSavedOffers(prev => prev.filter(o => o.id !== id));
  };

  const handleFoundBooking = (bookingId: string) => {
    updateFormData({ bookingId });
    handleNavigate('booking-step-3');
  };

  // Check URL query parameters on initial mount (e.g. ?autostart=1 or ?view=...)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const viewParam = params.get('view') as ViewMode;
    if (viewParam) {
      setCurrentView(viewParam);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans antialiased text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {/* Global Header */}
      <Header
        currentView={currentView}
        onNavigate={handleNavigate}
        savedCount={savedOffers.length}
        onOpenSavedModal={() => setIsSavedModalOpen(true)}
        onOpenLookupModal={() => setIsLookupModalOpen(true)}
      />

      {/* Main View Container */}
      <main className="flex-1">
        {currentView === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onSelectOffer={handleSelectOffer}
          />
        )}

        {currentView === 'search' && (
          <SearchView
            onNavigate={handleNavigate}
            onSelectOffer={handleSelectOffer}
            savedIds={savedOffers.map(o => o.id)}
            onToggleSave={toggleSaveOffer}
            initialTypeFilter={typeFilter}
            initialPort={searchPort}
          />
        )}

        {currentView === 'detail' && (
          <DetailView
            parkingId={selectedOffer.id}
            onNavigate={handleNavigate}
            onStartBooking={handleStartBooking}
            isSaved={savedOffers.some(o => o.id === selectedOffer.id)}
            onToggleSave={() => toggleSaveOffer(selectedOffer)}
          />
        )}

        {currentView === 'terminal' && (
          <TerminalView
            terminalId={selectedTerminalId}
            onNavigate={handleNavigate}
            onSelectOffer={handleSelectOffer}
          />
        )}

        {currentView === 'reederei' && (
          <ReedereiView
            reedereiId={selectedReedereiId}
            onNavigate={handleNavigate}
            onSelectOffer={handleSelectOffer}
          />
        )}

        {currentView === 'booking-step-1' && (
          <BookingStep1View
            offer={selectedOffer}
            formData={formData}
            updateFormData={updateFormData}
            onNext={() => handleNavigate('booking-step-2')}
            onBack={() => handleNavigate('search', { port: selectedOffer.port })}
          />
        )}

        {currentView === 'booking-step-2' && (
          <BookingStep2View
            offer={selectedOffer}
            formData={formData}
            updateFormData={updateFormData}
            onNext={() => handleNavigate('booking-step-3')}
            onBack={() => handleNavigate('booking-step-1')}
          />
        )}

        {currentView === 'booking-step-3' && (
          <BookingStep3View
            offer={selectedOffer}
            formData={formData}
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'partner' && (
          <PartnerView onNavigate={handleNavigate} />
        )}

        {currentView === 'affiliate' && (
          <AffiliateView onNavigate={handleNavigate} />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        currentView={currentView}
        onNavigate={handleNavigate}
        terminalContext={selectedTerminalId}
        reedereiContext={selectedReedereiId}
      />

      {/* Merkliste Favorites Modal */}
      <SavedModal
        isOpen={isSavedModalOpen}
        onClose={() => setIsSavedModalOpen(false)}
        savedOffers={savedOffers}
        onRemove={removeSaved}
        onSelect={handleSelectOffer}
      />

      {/* Mein Konto / Booking Lookup Modal */}
      <LookupModal
        isOpen={isLookupModalOpen}
        onClose={() => setIsLookupModalOpen(false)}
        onFoundBooking={handleFoundBooking}
      />
    </div>
  );
}
