import React, { useState } from 'react';
import { 
  Car, 
  Calendar, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck, 
  Ship, 
  Star, 
  ChevronRight, 
  ArrowRight, 
  ArrowLeft,
  Info,
  User,
  Plus,
  Minus
} from 'lucide-react';
import { ViewMode, ParkingOffer, BookingFormData } from '../types';
import { CRUISE_LINES } from '../data/mockData';
import { AllianzLogo } from '../components/AllianzBanner';

interface BookingStep1ViewProps {
  offer: ParkingOffer;
  formData: BookingFormData;
  updateFormData: (data: Partial<BookingFormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export const BookingStep1View: React.FC<BookingStep1ViewProps> = ({
  offer,
  formData,
  updateFormData,
  onNext,
  onBack
}) => {
  const isValet = offer.type === 'valet';
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'Vorname ist erforderlich';
    if (!formData.lastName.trim()) newErrors.lastName = 'Nachname ist erforderlich';
    if (!formData.email.includes('@')) newErrors.email = 'Gültige E-Mail erforderlich';
    if (!formData.phone.trim()) newErrors.phone = 'Mobilnummer ist erforderlich';
    if (!formData.street.trim()) newErrors.street = 'Straße & Hausnummer erforderlich';
    if (!formData.zip.trim()) newErrors.zip = 'PLZ erforderlich';
    if (!formData.city.trim()) newErrors.city = 'Ort erforderlich';
    if (!formData.licensePlate.trim()) newErrors.licensePlate = 'Kennzeichen ist erforderlich';
    if (!formData.carBrandModel.trim()) newErrors.carBrandModel = 'Fahrzeugmarke / Modell erforderlich';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      window.scrollTo({ top: 300, behavior: 'smooth' });
      return;
    }

    setErrors({});
    onNext();
  };

  const toggleSpecialNeed = (need: string) => {
    const current = formData.specialNeeds || [];
    const updated = current.includes(need)
      ? current.filter(n => n !== need)
      : [...current, need];
    updateFormData({ specialNeeds: updated });
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* HERO STRIP */}
      <div className="bg-gradient-to-r from-[#07244C] via-[#0052CC] to-[#0A2540] text-white py-8 px-4 border-b border-blue-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
              <Car className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
                {isValet ? 'Deine Valet Parking Buchung' : 'Deine Parkplatzbuchung'}
              </h1>
              <p className="text-xs sm:text-sm text-blue-100 font-medium">
                {isValet 
                  ? 'Einfach ankommen. Wir parken für dich.' 
                  : 'Jetzt in wenigen Schritten buchen und entspannt in die Kreuzfahrt starten.'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3-STEP PROGRESS STEPPER */}
      <div className="bg-white border-b border-slate-200 py-4 shadow-xs">
        <div className="max-w-3xl mx-auto px-4 flex items-center justify-between">
          {/* Step 1 */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#0052CC] text-white font-bold flex items-center justify-center text-xs shadow-md">
              1
            </div>
            <div>
              <div className="text-xs font-black text-slate-900">Parkplatz</div>
              <div className="text-[10px] text-[#0052CC] font-semibold">Deine Angaben</div>
            </div>
          </div>

          <div className="h-0.5 flex-1 bg-slate-200 mx-4 max-w-[80px]"></div>

          {/* Step 2 */}
          <div className="flex items-center gap-3 opacity-50">
            <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-700 font-bold flex items-center justify-center text-xs">
              2
            </div>
            <div>
              <div className="text-xs font-bold text-slate-700">Zahlung</div>
              <div className="text-[10px] text-slate-500">Sicher & einfach</div>
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

      {/* MAIN FORM GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: FORM SECTIONS (8 cols on lg) */}
          <form onSubmit={handleNext} className="lg:col-span-8 space-y-6">
            
            {/* SECTION 1: DEINE KONTAKTDATEN */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-4">
              <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
                <div className="w-7 h-7 rounded-full bg-[#0052CC] text-white font-bold flex items-center justify-center text-xs">
                  1
                </div>
                <h2 className="text-lg font-black text-slate-900">Deine Kontaktdaten</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Anrede <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.salutation}
                    onChange={e => updateFormData({ salutation: e.target.value as any })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0052CC] text-sm font-medium bg-white"
                  >
                    <option value="Herr">Herr</option>
                    <option value="Frau">Frau</option>
                    <option value="Divers">Divers</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Vorname <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={e => updateFormData({ firstName: e.target.value })}
                    placeholder="z. B. Thomas"
                    className={`w-full px-3.5 py-2.5 rounded-xl border ${errors.firstName ? 'border-red-500 bg-red-50' : 'border-slate-300'} focus:outline-none focus:ring-2 focus:ring-[#0052CC] text-sm`}
                  />
                  {errors.firstName && <span className="text-[11px] text-red-600">{errors.firstName}</span>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Nachname <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={e => updateFormData({ lastName: e.target.value })}
                    placeholder="z. B. Müller"
                    className={`w-full px-3.5 py-2.5 rounded-xl border ${errors.lastName ? 'border-red-500 bg-red-50' : 'border-slate-300'} focus:outline-none focus:ring-2 focus:ring-[#0052CC] text-sm`}
                  />
                  {errors.lastName && <span className="text-[11px] text-red-600">{errors.lastName}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    E-Mail-Adresse <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={e => updateFormData({ email: e.target.value })}
                    placeholder="z. B. name@beispiel.de"
                    className={`w-full px-3.5 py-2.5 rounded-xl border ${errors.email ? 'border-red-500 bg-red-50' : 'border-slate-300'} focus:outline-none focus:ring-2 focus:ring-[#0052CC] text-sm`}
                  />
                  {errors.email && <span className="text-[11px] text-red-600">{errors.email}</span>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Mobilnummer <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={e => updateFormData({ phone: e.target.value })}
                    placeholder="z. B. 0176 12345678"
                    className={`w-full px-3.5 py-2.5 rounded-xl border ${errors.phone ? 'border-red-500 bg-red-50' : 'border-slate-300'} focus:outline-none focus:ring-2 focus:ring-[#0052CC] text-sm`}
                  />
                  <span className="text-[10px] text-slate-400 block mt-1">
                    Für wichtige Informationen zu Anreise, Shuttle/Valet-Service oder kurzfristigen Änderungen.
                  </span>
                  {errors.phone && <span className="text-[11px] text-red-600">{errors.phone}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                <div className="sm:col-span-6">
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Straße und Hausnummer <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.street}
                    onChange={e => updateFormData({ street: e.target.value })}
                    placeholder="z. B. Musterstraße 12"
                    className={`w-full px-3.5 py-2.5 rounded-xl border ${errors.street ? 'border-red-500 bg-red-50' : 'border-slate-300'} focus:outline-none focus:ring-2 focus:ring-[#0052CC] text-sm`}
                  />
                </div>

                <div className="sm:col-span-3">
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    PLZ <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.zip}
                    onChange={e => updateFormData({ zip: e.target.value })}
                    placeholder="z. B. 24103"
                    className={`w-full px-3.5 py-2.5 rounded-xl border ${errors.zip ? 'border-red-500 bg-red-50' : 'border-slate-300'} focus:outline-none focus:ring-2 focus:ring-[#0052CC] text-sm`}
                  />
                </div>

                <div className="sm:col-span-3">
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Ort <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={e => updateFormData({ city: e.target.value })}
                    placeholder="z. B. Kiel"
                    className={`w-full px-3.5 py-2.5 rounded-xl border ${errors.city ? 'border-red-500 bg-red-50' : 'border-slate-300'} focus:outline-none focus:ring-2 focus:ring-[#0052CC] text-sm`}
                  />
                </div>
              </div>
            </div>

            {/* SECTION 2: DEIN FAHRZEUG */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-4">
              <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
                <div className="w-7 h-7 rounded-full bg-[#0052CC] text-white font-bold flex items-center justify-center text-xs">
                  2
                </div>
                <h2 className="text-lg font-black text-slate-900">Dein Fahrzeug</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Kennzeichen <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.licensePlate}
                    onChange={e => updateFormData({ licensePlate: e.target.value.toUpperCase() })}
                    placeholder="z. B. KI-AB 123"
                    className={`w-full px-3.5 py-2.5 rounded-xl border font-mono uppercase font-bold ${errors.licensePlate ? 'border-red-500 bg-red-50' : 'border-slate-300'} focus:outline-none focus:ring-2 focus:ring-[#0052CC] text-sm`}
                  />
                  {errors.licensePlate && <span className="text-[11px] text-red-600">{errors.licensePlate}</span>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Fahrzeugmarke / Modell <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.carBrandModel}
                    onChange={e => updateFormData({ carBrandModel: e.target.value })}
                    placeholder="z. B. VW Tiguan"
                    className={`w-full px-3.5 py-2.5 rounded-xl border ${errors.carBrandModel ? 'border-red-500 bg-red-50' : 'border-slate-300'} focus:outline-none focus:ring-2 focus:ring-[#0052CC] text-sm`}
                  />
                  {errors.carBrandModel && <span className="text-[11px] text-red-600">{errors.carBrandModel}</span>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Farbe (optional)
                  </label>
                  <select
                    value={formData.carColor}
                    onChange={e => updateFormData({ carColor: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0052CC] text-sm bg-white"
                  >
                    <option value="Weiß">Weiß</option>
                    <option value="Schwarz">Schwarz</option>
                    <option value="Silber / Grau">Silber / Grau</option>
                    <option value="Blau">Blau</option>
                    <option value="Rot">Rot</option>
                    <option value="Andere Farbe">Andere Farbe</option>
                  </select>
                </div>
              </div>
            </div>

            {/* SECTION 3: DEINE KREUZFAHRT */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-4">
              <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
                <div className="w-7 h-7 rounded-full bg-[#0052CC] text-white font-bold flex items-center justify-center text-xs">
                  3
                </div>
                <h2 className="text-lg font-black text-slate-900">Deine Kreuzfahrt</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Reederei <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.cruiseLine}
                    onChange={e => updateFormData({ cruiseLine: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0052CC] text-sm bg-white font-medium"
                  >
                    <option value="Mein Schiff">Mein Schiff (TUI)</option>
                    <option value="AIDA">AIDA Cruises</option>
                    <option value="MSC Cruises">MSC Cruises</option>
                    <option value="Costa">Costa Kreuzfahrten</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Schiff <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.ship}
                    onChange={e => updateFormData({ ship: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0052CC] text-sm bg-white font-medium"
                  >
                    <option value="Mein Schiff 7">Mein Schiff 7</option>
                    <option value="Mein Schiff 1">Mein Schiff 1</option>
                    <option value="AIDAprima">AIDAprima</option>
                    <option value="AIDAnova">AIDAnova</option>
                    <option value="MSC Euribia">MSC Euribia</option>
                  </select>
                </div>
              </div>

              {/* Blue Cruise details summary banner */}
              <div className="bg-blue-50/70 border border-blue-200 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0052CC] text-white flex items-center justify-center">
                    <Ship className="w-5 h-5" />
                  </div>
                  <div className="text-xs">
                    <div className="font-bold text-slate-900">Abfahrt: Kiel, {formData.arrivalDate}</div>
                    <div className="text-slate-600 font-medium">Rückkehr: Kiel, {formData.departureDate}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-bold text-slate-800 bg-white px-3 py-1.5 rounded-xl border border-blue-100">
                  <MapPin className="w-4 h-4 text-[#0052CC]" />
                  <span>Terminal {offer.terminalName}</span>
                  <Info className="w-3.5 h-3.5 text-slate-400" />
                </div>
              </div>

              {/* Passengers Stepper */}
              <div className="pt-2">
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  Wie viele Personen reisen mit? <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-slate-300 rounded-xl bg-white p-1">
                    <button
                      type="button"
                      onClick={() => updateFormData({ passengers: Math.max(1, formData.passengers - 1) })}
                      className="w-8 h-8 rounded-lg hover:bg-slate-100 flex items-center justify-center text-slate-700"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-10 text-center font-black text-slate-900 text-sm">
                      {formData.passengers}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateFormData({ passengers: formData.passengers + 1 })}
                      className="w-8 h-8 rounded-lg hover:bg-slate-100 flex items-center justify-center text-slate-700"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <span className="text-xs text-slate-500 font-medium">
                    {isValet ? 'Wichtig für unseren Valet-Service' : 'Wichtig für den Shuttle-Transfer'}
                  </span>
                </div>
              </div>
            </div>

            {/* SECTION 4: WANN KOMMST DU? */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-4">
              <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
                <div className="w-7 h-7 rounded-full bg-[#0052CC] text-white font-bold flex items-center justify-center text-xs">
                  4
                </div>
                <h2 className="text-lg font-black text-slate-900">Wann kommst du?</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Geplante Ankunft {isValet ? 'am Terminal' : 'am Parkplatz'} <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="date"
                      value={formData.arrivalDate}
                      onChange={e => updateFormData({ arrivalDate: e.target.value })}
                      className="px-3 py-2.5 rounded-xl border border-slate-300 text-xs font-bold bg-white"
                    />
                    <select
                      value={formData.arrivalTimeSlot}
                      onChange={e => updateFormData({ arrivalTimeSlot: e.target.value })}
                      className="px-3 py-2.5 rounded-xl border border-slate-300 text-xs font-bold bg-white"
                    >
                      <option value="08:00 – 09:00 Uhr">08:00 – 09:00 Uhr</option>
                      <option value="09:00 – 10:00 Uhr">09:00 – 10:00 Uhr</option>
                      <option value="10:00 – 11:00 Uhr">10:00 – 11:00 Uhr</option>
                      <option value="11:00 – 12:00 Uhr">11:00 – 12:00 Uhr</option>
                      <option value="12:00 – 13:00 Uhr">12:00 – 13:00 Uhr</option>
                      <option value="13:00 – 14:00 Uhr">13:00 – 14:00 Uhr</option>
                    </select>
                  </div>
                </div>

                {/* Return ship note */}
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5 mb-1">
                    <Ship className="w-3.5 h-3.5 text-[#0052CC]" />
                    <span>Rückkehr mit: {formData.ship}</span>
                  </div>
                  <p className="text-slate-600">
                    Voraussichtliche Ankunft in Kiel: <br />
                    <span className="font-bold text-slate-900">{formData.departureDate}, ca. 06:30 Uhr</span>
                  </p>
                  <p className="text-[10px] text-slate-400 mt-1">
                    Keine Sorge: Sollte sich die Ankunft deines Schiffes ändern, bleibt deine Buchung bestehen.
                  </p>
                </div>
              </div>
            </div>

            {/* SECTION 5: BESONDERE HINWEISE (OPTIONAL) */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-4">
              <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
                <div className="w-7 h-7 rounded-full bg-[#0052CC] text-white font-bold flex items-center justify-center text-xs">
                  5
                </div>
                <h2 className="text-lg font-black text-slate-900">
                  Besondere Hinweise <span className="text-xs text-slate-400 font-normal">(optional)</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2 text-xs">
                  {[
                    'Rollstuhl / eingeschränkte Mobilität',
                    'Kinderwagen',
                    'Sperrgepäck (z. B. Fahrräder, Golfgepäck)',
                    'Sonstiges'
                  ].map((need, idx) => (
                    <label key={idx} className="flex items-center gap-2 cursor-pointer p-1 rounded hover:bg-slate-50">
                      <input
                        type="checkbox"
                        checked={(formData.specialNeeds || []).includes(need)}
                        onChange={() => toggleSpecialNeed(need)}
                        className="w-4 h-4 text-[#0052CC] rounded"
                      />
                      <span className="text-slate-700">{need}</span>
                    </label>
                  ))}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Nachricht an den {isValet ? 'Valet-Service' : 'Parkplatzbetreiber'}
                  </label>
                  <textarea
                    rows={3}
                    value={formData.customNotes}
                    onChange={e => updateFormData({ customNotes: e.target.value })}
                    placeholder="z. B. voraussichtliche Ankunft, besondere Wünsche ..."
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-[#0052CC]"
                  />
                </div>
              </div>
            </div>

            {/* STEP 1 ACTION BUTTONS */}
            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={onBack}
                className="px-5 py-3 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-bold flex items-center gap-2 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Zurück</span>
              </button>

              <button
                type="submit"
                className="py-3.5 px-8 rounded-xl bg-[#0052CC] hover:bg-[#073B8A] text-white font-black text-sm flex items-center gap-2 shadow-lg shadow-blue-600/25 transition-all cursor-pointer"
              >
                <span>Weiter zur Zahlung</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </form>

          {/* RIGHT COLUMN: STICKY SUMMARY (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-5 lg:sticky lg:top-24">
            
            {/* Offer Summary Card */}
            <div className="bg-white rounded-3xl border border-slate-200 p-5 shadow-lg space-y-4">
              <div className="h-44 rounded-2xl overflow-hidden relative">
                <img 
                  src={offer.image} 
                  alt={offer.name} 
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-2.5 left-2.5 bg-emerald-600 text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-md shadow-xs">
                  ✓ Deine Auswahl
                </span>
              </div>

              <div>
                <h3 className="text-xl font-black text-slate-900">{offer.name}</h3>
                <div className="flex items-center gap-1.5 mt-1 text-xs">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="font-bold text-slate-900">{offer.rating}</span>
                  <span className="text-slate-400">({offer.reviewCount} Bewertungen)</span>
                </div>
                <div className="text-xs text-slate-600 mt-2 space-y-1">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#0052CC]" />
                    <span>{isValet ? 'Direkt am Ostseekai (Terminal)' : '1,8 km zum Ostseekai'}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{isValet ? 'Persönliche Fahrzeugübergabe' : 'Shuttle-Service inklusive'}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-1.5 text-xs text-slate-600 border-t border-slate-100 pt-3">
                {offer.features.slice(0, 4).map((f, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              {/* Price Calculation breakdown */}
              <div className="space-y-2 text-xs pt-3 border-t border-slate-100">
                <div className="flex justify-between text-slate-600">
                  <span>{isValet ? 'Valet Parking' : 'Parkplatz'} (7 Tage)</span>
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

            {/* Allianz card */}
            <div className="bg-[#EBF3FC] border border-[#BFDBFE] p-4 rounded-2xl space-y-2">
              <div className="flex items-center justify-between">
                <AllianzLogo className="h-5" />
                <span className="text-xs font-bold text-[#003781]">Parkplatzschutz inklusive</span>
              </div>
              <ul className="space-y-1 text-xs text-slate-700">
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Versichert während der Parkdauer</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Schutz bei Diebstahl, Brand & Parkschäden</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Ohne Zusatzkosten</li>
              </ul>
            </div>

            {/* Customer Quote */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs text-xs">
              <p className="italic text-slate-600">
                „Super bequemer Service! Wir sind direkt zum Terminal gefahren, Auto übergeben und in den Urlaub gestartet. Perfekt!“
              </p>
              <div className="flex text-amber-400 mt-2 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400" />
                ))}
              </div>
              <div className="font-bold text-slate-900">Andreas M. <span className="font-normal text-slate-400">• Kiel • Juni 2024</span></div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
