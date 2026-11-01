import React, { useState } from 'react';
import { 
  CreditCard, 
  Lock, 
  CheckCircle2, 
  ShieldCheck, 
  ChevronRight, 
  ArrowLeft, 
  ArrowRight,
  Info,
  Star,
  MapPin,
  Clock,
  Calendar,
  Ship,
  User,
  Check
} from 'lucide-react';
import { ViewMode, ParkingOffer, BookingFormData } from '../types';
import { AllianzLogo } from '../components/AllianzBanner';

interface BookingStep2ViewProps {
  offer: ParkingOffer;
  formData: BookingFormData;
  updateFormData: (data: Partial<BookingFormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export const BookingStep2View: React.FC<BookingStep2ViewProps> = ({
  offer,
  formData,
  updateFormData,
  onNext,
  onBack
}) => {
  const [agbAccepted, setAgbAccepted] = useState(formData.termsAccepted ?? true);
  const [cancellationAccepted, setCancellationAccepted] = useState(formData.cancellationAccepted ?? true);
  const [errorMsg, setErrorMsg] = useState('');
  const [cardNumber, setCardNumber] = useState(formData.cardNumber || '4532 •••• •••• 8912');
  const [cardExpiry, setCardExpiry] = useState(formData.cardExpiry || '08/28');
  const [cardCvc, setCardCvc] = useState(formData.cardCvc || '789');
  const [iban, setIban] = useState(formData.iban || 'DE89 3704 0044 0532 0130 00');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agbAccepted || !cancellationAccepted) {
      setErrorMsg('Bitte bestätige die AGB und die Stornierungsbedingungen.');
      return;
    }
    updateFormData({
      termsAccepted: agbAccepted,
      cancellationAccepted: cancellationAccepted,
      cardNumber,
      cardExpiry,
      cardCvc,
      iban
    });
    onNext();
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* HERO STRIP */}
      <div className="bg-gradient-to-r from-[#07244C] via-[#0052CC] to-[#0A2540] text-white py-8 px-4 border-b border-blue-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
              Fast geschafft!
            </h1>
            <p className="text-xs sm:text-sm text-blue-100 font-medium mt-0.5">
              Wähle jetzt deine bevorzugte Zahlungsart und schließe deine Parkplatzbuchung sicher ab.
            </p>
          </div>
        </div>
      </div>

      {/* 3-STEP PROGRESS STEPPER */}
      <div className="bg-white border-b border-slate-200 py-4 shadow-xs">
        <div className="max-w-3xl mx-auto px-4 flex items-center justify-between">
          {/* Step 1 - Completed */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={onBack}>
            <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-xs shadow-md">
              ✓
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">Parkplatz</div>
              <div className="text-[10px] text-emerald-600 font-semibold">Deine Angaben</div>
            </div>
          </div>

          <div className="h-0.5 flex-1 bg-emerald-500 mx-4 max-w-[80px]"></div>

          {/* Step 2 - Active */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#0052CC] text-white font-bold flex items-center justify-center text-xs shadow-md">
              2
            </div>
            <div>
              <div className="text-xs font-black text-slate-900">Zahlung</div>
              <div className="text-[10px] text-[#0052CC] font-semibold">Sicher & einfach</div>
            </div>
          </div>

          <div className="h-0.5 flex-1 bg-slate-200 mx-4 max-w-[80px]"></div>

          {/* Step 3 */}
          <div className="flex items-center gap-3 opacity-50">
            <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-700 font-bold flex items-center justify-center text-xs">
              3
            </div>
            <div>
              <div className="text-xs font-bold text-slate-700">Bestätigung</div>
              <div className="text-[10px] text-slate-500">Buchung erhalten</div>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN PAYMENT GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: PAYMENT SELECTIONS (8 cols on lg) */}
          <form onSubmit={handleSubmit} className="lg:col-span-8 space-y-6">
            
            {/* SECTION 1: WIE MÖCHTEST DU BEZAHLEN? */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-4">
              <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
                <div className="w-7 h-7 rounded-full bg-[#0052CC] text-white font-bold flex items-center justify-center text-xs">
                  1
                </div>
                <h2 className="text-lg font-black text-slate-900">Wie möchtest du bezahlen?</h2>
              </div>

              {/* PAYMENT OPTIONS */}
              <div className="space-y-3">
                {/* 1. PayPal */}
                <label 
                  className={`flex flex-col p-4 rounded-2xl border-2 transition-all cursor-pointer ${
                    formData.paymentMethod === 'paypal' ? 'border-[#0052CC] bg-blue-50/40 shadow-xs' : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="paymentMethod"
                        checked={formData.paymentMethod === 'paypal'}
                        onChange={() => updateFormData({ paymentMethod: 'paypal' })}
                        className="w-4 h-4 text-[#0052CC]"
                      />
                      <span className="font-extrabold text-[#003087] italic text-base">PayPal</span>
                      <span className="text-xs text-slate-500 hidden sm:inline">• Schnell und sicher mit deinem PayPal-Konto bezahlen.</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </div>
                </label>

                {/* 2. Kredit- oder Debitkarte */}
                <label 
                  className={`flex flex-col p-4 rounded-2xl border-2 transition-all cursor-pointer ${
                    formData.paymentMethod === 'card' ? 'border-[#0052CC] bg-blue-50/40 shadow-xs' : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="paymentMethod"
                        checked={formData.paymentMethod === 'card'}
                        onChange={() => updateFormData({ paymentMethod: 'card' })}
                        className="w-4 h-4 text-[#0052CC]"
                      />
                      <div className="flex items-center gap-2">
                        <CreditCard className="w-4 h-4 text-slate-800" />
                        <span className="font-bold text-slate-900 text-sm">Kredit- oder Debitkarte</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1.5">
                      <span className="bg-white border border-slate-200 text-slate-900 text-[10px] font-black px-1.5 py-0.5 rounded">VISA</span>
                      <span className="bg-white border border-slate-200 text-rose-600 text-[10px] font-black px-1.5 py-0.5 rounded flex items-center">MC</span>
                    </div>
                  </div>

                  {formData.paymentMethod === 'card' && (
                    <div className="mt-4 pt-4 border-t border-blue-200/60 grid grid-cols-1 sm:grid-cols-12 gap-3 animate-in fade-in">
                      <div className="sm:col-span-12">
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Kartennummer <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={cardNumber}
                          onChange={e => setCardNumber(e.target.value)}
                          placeholder="1234 5678 9012 3456"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#0052CC]"
                        />
                      </div>

                      <div className="sm:col-span-6">
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Gültig bis <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={cardExpiry}
                          onChange={e => setCardExpiry(e.target.value)}
                          placeholder="MM / JJ"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#0052CC]"
                        />
                      </div>

                      <div className="sm:col-span-6">
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Prüfnummer (CVC) <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={cardCvc}
                          onChange={e => setCardCvc(e.target.value)}
                          placeholder="123"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#0052CC]"
                        />
                      </div>
                    </div>
                  )}
                </label>

                {/* 3. Apple Pay */}
                <label 
                  className={`flex flex-col p-4 rounded-2xl border-2 transition-all cursor-pointer ${
                    formData.paymentMethod === 'applepay' ? 'border-[#0052CC] bg-blue-50/40 shadow-xs' : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="paymentMethod"
                        checked={formData.paymentMethod === 'applepay'}
                        onChange={() => updateFormData({ paymentMethod: 'applepay' })}
                        className="w-4 h-4 text-[#0052CC]"
                      />
                      <span className="font-bold text-slate-900 text-sm">Apple Pay</span>
                      <span className="text-xs text-slate-500 hidden sm:inline">• Schnell und sicher mit Apple Pay bezahlen.</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </div>
                </label>

                {/* 4. Google Pay */}
                <label 
                  className={`flex flex-col p-4 rounded-2xl border-2 transition-all cursor-pointer ${
                    formData.paymentMethod === 'googlepay' ? 'border-[#0052CC] bg-blue-50/40 shadow-xs' : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="paymentMethod"
                        checked={formData.paymentMethod === 'googlepay'}
                        onChange={() => updateFormData({ paymentMethod: 'googlepay' })}
                        className="w-4 h-4 text-[#0052CC]"
                      />
                      <span className="font-bold text-slate-900 text-sm">Google Pay</span>
                      <span className="text-xs text-slate-500 hidden sm:inline">• Schnell und sicher mit Google Pay bezahlen.</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </div>
                </label>

                {/* 5. SEPA-Lastschrift */}
                <label 
                  className={`flex flex-col p-4 rounded-2xl border-2 transition-all cursor-pointer ${
                    formData.paymentMethod === 'sepa' ? 'border-[#0052CC] bg-blue-50/40 shadow-xs' : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="paymentMethod"
                        checked={formData.paymentMethod === 'sepa'}
                        onChange={() => updateFormData({ paymentMethod: 'sepa' })}
                        className="w-4 h-4 text-[#0052CC]"
                      />
                      <span className="font-bold text-slate-900 text-sm">SEPA-Lastschrift</span>
                      <span className="text-xs text-slate-500 hidden sm:inline">• Einfach und sicher per Lastschrift bezahlen.</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </div>

                  {formData.paymentMethod === 'sepa' && (
                    <div className="mt-3 pt-3 border-t border-blue-200/60 animate-in fade-in">
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        IBAN <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={iban}
                        onChange={e => setIban(e.target.value)}
                        placeholder="DE00 0000 0000 0000 0000 00"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#0052CC]"
                      />
                    </div>
                  )}
                </label>
              </div>
            </div>

            {/* SECTION 2: RECHNUNGSADRESSE */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-4">
              <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
                <div className="w-7 h-7 rounded-full bg-[#0052CC] text-white font-bold flex items-center justify-center text-xs">
                  2
                </div>
                <h2 className="text-lg font-black text-slate-900">Rechnungsadresse</h2>
              </div>

              <label className="flex items-center gap-2.5 text-xs font-bold text-slate-800 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.billingSameAsContact}
                  onChange={e => updateFormData({ billingSameAsContact: e.target.checked })}
                  className="w-4 h-4 text-[#0052CC] rounded"
                />
                <span>Rechnungsadresse entspricht meinen Angaben aus Schritt 1.</span>
              </label>

              {formData.billingSameAsContact ? (
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-700">
                  <div className="flex items-start gap-3">
                    <User className="w-4 h-4 text-slate-400 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900">{formData.salutation} {formData.firstName} {formData.lastName}</span>
                      <div className="text-slate-500">{formData.street}</div>
                      <div className="text-slate-500">{formData.zip} {formData.city}, Deutschland</div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => updateFormData({ billingSameAsContact: false })}
                    className="px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-white"
                  >
                    Andere Rechnungsadresse verwenden
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 pt-2">
                  <div className="sm:col-span-6">
                    <input
                      type="text"
                      placeholder="Straße und Hausnummer"
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs"
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <input
                      type="text"
                      placeholder="PLZ"
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs"
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <input
                      type="text"
                      placeholder="Ort"
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* SECTION 3: AGB UND BUCHUNGSBEDINGUNGEN */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-4">
              <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
                <div className="w-7 h-7 rounded-full bg-[#0052CC] text-white font-bold flex items-center justify-center text-xs">
                  3
                </div>
                <h2 className="text-lg font-black text-slate-900">AGB und Buchungsbedingungen</h2>
              </div>

              {errorMsg && (
                <div className="p-3 bg-red-50 text-red-700 rounded-xl text-xs font-bold border border-red-200">
                  {errorMsg}
                </div>
              )}

              <div className="space-y-3 text-xs text-slate-700">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agbAccepted}
                    onChange={e => setAgbAccepted(e.target.checked)}
                    className="w-4 h-4 text-[#0052CC] rounded mt-0.5"
                  />
                  <span>
                    Ich akzeptiere die <a href="#agb" onClick={e => e.preventDefault()} className="text-[#0052CC] underline font-semibold">AGB</a> und habe die <a href="#datenschutz" onClick={e => e.preventDefault()} className="text-[#0052CC] underline font-semibold">Datenschutzerklärung</a> zur Kenntnis genommen. <span className="text-red-500">*</span>
                  </span>
                </label>

                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={cancellationAccepted}
                    onChange={e => setCancellationAccepted(e.target.checked)}
                    className="w-4 h-4 text-[#0052CC] rounded mt-0.5"
                  />
                  <span>
                    Ich habe die <a href="#bedingungen" onClick={e => e.preventDefault()} className="text-[#0052CC] underline font-semibold">Buchungs- und Stornierungsbedingungen</a> des ausgewählten Parkplatzbetreibers zur Kenntnis genommen. <span className="text-red-500">*</span>
                  </span>
                </label>
              </div>
            </div>

            {/* ACTION BUTTONS & TRUST BADGES */}
            <div className="space-y-4 pt-2">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={onBack}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Zurück zu deinen Angaben</span>
                </button>

                {/* Big Green Checkout Button */}
                <button
                  type="submit"
                  className="w-full sm:w-auto py-4 px-8 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-[0.99] text-white font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-700/25 transition-all cursor-pointer"
                >
                  <Lock className="w-4 h-4" />
                  <span>ZAHLUNGSPFLICHTIG BUCHEN – {offer.price7Days},00 €</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="text-center text-[11px] text-slate-500 flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <span className="flex items-center gap-1 font-semibold text-slate-700">
                  <Lock className="w-3.5 h-3.5 text-emerald-600" />
                  Sichere & verschlüsselte 256-Bit SSL-Zahlung
                </span>
                <span className="hidden sm:inline">•</span>
                <span>Deine bisherigen Eingaben bleiben gespeichert.</span>
              </div>
            </div>

          </form>

          {/* RIGHT COLUMN: SUMMARY (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-5 lg:sticky lg:top-24">
            
            <div className="bg-white rounded-3xl border border-slate-200 p-5 shadow-lg space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <h3 className="text-base font-black text-slate-900">Deine Buchung</h3>
                <button onClick={onBack} className="text-xs text-[#0052CC] hover:underline font-bold">
                  Bearbeiten
                </button>
              </div>

              <div className="h-40 rounded-2xl overflow-hidden relative">
                <img 
                  src={offer.image} 
                  alt={offer.name} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h4 className="font-extrabold text-base text-slate-900">{offer.name}</h4>
                <div className="flex items-center gap-1 text-xs text-slate-600 mt-1">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span className="font-bold text-slate-900">{offer.rating}</span>
                  <span className="text-slate-400">({offer.reviewCount} Bewertungen)</span>
                </div>
              </div>

              {/* Parkzeitraum Details */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs space-y-1">
                <div className="font-bold text-slate-900 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#0052CC]" />
                  <span>Parkzeitraum</span>
                </div>
                <div className="text-slate-600 pl-5">Anreise: {formData.arrivalDate}</div>
                <div className="text-slate-600 pl-5">Rückkehr: {formData.departureDate}</div>
                <div className="text-slate-800 font-semibold pl-5">7 Tage Parken</div>
              </div>

              {/* Deine Kreuzfahrt */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs space-y-1">
                <div className="font-bold text-slate-900 flex items-center gap-1.5">
                  <Ship className="w-3.5 h-3.5 text-[#0052CC]" />
                  <span>Deine Kreuzfahrt</span>
                </div>
                <div className="text-slate-900 font-bold pl-5">{formData.ship}</div>
                <div className="text-slate-600 pl-5">Abfahrt: Kiel • Terminal {offer.terminalName}</div>
              </div>

              {/* Price Calculation breakdown */}
              <div className="space-y-2 text-xs pt-2 border-t border-slate-100">
                <div className="flex justify-between text-slate-600">
                  <span>Parkplatz (7 Tage)</span>
                  <span className="font-bold text-slate-900">{offer.price7Days},00 €</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Buchungsgebühr</span>
                  <span className="font-bold text-emerald-600">0,00 €</span>
                </div>
                <div className="flex justify-between text-slate-600 items-center">
                  <span className="flex items-center gap-1">
                    <span>Allianz Extra-Schutz</span>
                    <Info className="w-3 h-3 text-slate-400" />
                  </span>
                  <span className="font-bold text-emerald-600">inklusive</span>
                </div>

                <div className="pt-2 border-t border-slate-200 flex items-baseline justify-between">
                  <span className="text-sm font-bold text-slate-900">Gesamtpreis</span>
                  <div className="text-right">
                    <span className="text-2xl font-black text-[#0052CC]">{offer.price7Days},00 €</span>
                    <span className="block text-[10px] text-slate-400">inkl. MwSt.</span>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 text-emerald-800 p-2.5 rounded-xl border border-emerald-200 text-xs font-semibold text-center flex items-center justify-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Keine versteckten Zusatzkosten</span>
              </div>
            </div>

            {/* Allianz Card */}
            <div className="bg-[#EBF3FC] border border-[#BFDBFE] p-4 rounded-2xl space-y-2">
              <div className="flex items-center justify-between">
                <AllianzLogo className="h-5" />
                <span className="text-xs font-bold text-[#003781]">Parkplatzschutz inklusive</span>
              </div>
              <ul className="space-y-1 text-xs text-slate-700">
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-600" /> Versichert während der Parkdauer</li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-600" /> Schutz bei Diebstahl, Vandalismus & Brand</li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-600" /> Ohne Zusatzkosten</li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
