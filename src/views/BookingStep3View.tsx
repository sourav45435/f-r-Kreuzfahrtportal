import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Download, 
  Mail, 
  MapPin, 
  Calendar, 
  Clock, 
  Ship, 
  Car, 
  FileText, 
  ShieldCheck, 
  Phone, 
  ArrowRight,
  Printer,
  Copy,
  ExternalLink,
  QrCode,
  Check,
  Star,
  Sparkles
} from 'lucide-react';
import { ViewMode, ParkingOffer, BookingFormData } from '../types';
import { AllianzLogo } from '../components/AllianzBanner';

interface BookingStep3ViewProps {
  offer: ParkingOffer;
  formData: BookingFormData;
  onNavigate: (view: ViewMode, payload?: any) => void;
}

export const BookingStep3View: React.FC<BookingStep3ViewProps> = ({
  offer,
  formData,
  onNavigate
}) => {
  const [copied, setCopied] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [viewEmailMode, setViewEmailMode] = useState(false);

  const bookingCode = formData.bookingId || 'KP-2027-018453';

  const copyBookingCode = () => {
    navigator.clipboard?.writeText(bookingCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      window.print();
    }, 600);
  };

  const handleResendEmail = () => {
    setEmailSent(true);
    setTimeout(() => setEmailSent(false), 3000);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* SUCCESS HERO BANNER */}
      <div className="bg-gradient-to-r from-[#07244C] via-[#0052CC] to-[#0A2540] text-white py-10 px-4 border-b border-blue-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-xl shadow-emerald-900/30 flex-shrink-0 animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-200 text-xs font-bold mb-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Buchung erfolgreich bestätigt</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-black tracking-tight">
                Geschafft! Dein Parkplatz ist reserviert.
              </h1>
              <p className="text-sm sm:text-base text-blue-100 font-medium mt-1">
                Vielen Dank für deine Buchung, {formData.firstName || 'Thomas'}! <br className="hidden sm:inline" />
                Deine Buchungsbestätigung haben wir zusätzlich an <span className="underline font-bold">{formData.email || 'thomas.mueller@beispiel.de'}</span> gesendet.
              </p>
            </div>
          </div>

          {/* Toggle between Web View & Email Preview */}
          <div className="flex items-center gap-2 bg-white/10 p-1.5 rounded-xl border border-white/20 self-start md:self-auto text-xs font-bold">
            <button
              onClick={() => setViewEmailMode(false)}
              className={`px-3 py-1.5 rounded-lg transition-colors ${!viewEmailMode ? 'bg-white text-slate-900 shadow-sm' : 'text-white hover:text-sky-200'}`}
            >
              Web-Übersicht
            </button>
            <button
              onClick={() => setViewEmailMode(true)}
              className={`px-3 py-1.5 rounded-lg transition-colors ${viewEmailMode ? 'bg-white text-slate-900 shadow-sm' : 'text-white hover:text-sky-200'}`}
            >
              E-Mail & QR-Code Ansicht
            </button>
          </div>
        </div>
      </div>

      {/* 3-STEP PROGRESS STEPPER */}
      <div className="bg-white border-b border-slate-200 py-4 shadow-xs">
        <div className="max-w-3xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-emerald-600">
            <div className="w-7 h-7 rounded-full bg-emerald-100 font-bold flex items-center justify-center text-xs">✓</div>
            <div className="text-xs font-bold">1. Parkplatz</div>
          </div>
          <div className="h-0.5 flex-1 bg-emerald-500 mx-4 max-w-[80px]"></div>

          <div className="flex items-center gap-2 text-emerald-600">
            <div className="w-7 h-7 rounded-full bg-emerald-100 font-bold flex items-center justify-center text-xs">✓</div>
            <div className="text-xs font-bold">2. Zahlung</div>
          </div>
          <div className="h-0.5 flex-1 bg-emerald-500 mx-4 max-w-[80px]"></div>

          <div className="flex items-center gap-2 text-[#0052CC]">
            <div className="w-7 h-7 rounded-full bg-blue-100 font-bold flex items-center justify-center text-xs">3</div>
            <div className="text-xs font-black">3. Bestätigung</div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8">
        
        {/* MAIN BOOKING NUMBER CARD */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-sm mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0052CC] flex items-center justify-center flex-shrink-0">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                Deine Buchungsnummer
              </span>
              <div className="flex items-center gap-3 mt-1">
                <span className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-slate-900">
                  {bookingCode}
                </span>
                <button
                  onClick={copyBookingCode}
                  className="p-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 text-xs font-semibold flex items-center gap-1"
                  title="Nummer kopieren"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copied ? 'Kopiert!' : 'Kopieren'}</span>
                </button>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Bitte halte deine Buchungsnummer bei der Anreise bereit.
              </p>
            </div>
          </div>

          {/* Action buttons right */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              onClick={handleDownload}
              className="px-5 py-3 rounded-xl bg-[#0052CC] hover:bg-[#073B8A] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>{downloading ? 'Wird vorbereitet...' : 'Buchungsbestätigung herunterladen'}</span>
            </button>

            <button
              onClick={handleResendEmail}
              className="px-5 py-3 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>{emailSent ? 'E-Mail gesendet!' : 'Buchung per E-Mail erneut senden'}</span>
            </button>
          </div>
        </div>

        {/* QR CODE STRIP IF IN EMAIL VIEW OR PROMINENT */}
        <div className="bg-white rounded-3xl border border-blue-200 p-6 shadow-sm mb-8 animate-in fade-in flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
            {/* Real QR Code Asset */}
            <div className="w-28 h-28 bg-white border-2 border-slate-900 rounded-2xl p-2 flex items-center justify-center shadow-md flex-shrink-0">
              <img 
                src="/assets/aistudio/qr_code_booking.png" 
                alt="Digitaler Parkschein QR-Code" 
                className="w-full h-full object-contain"
              />
            </div>

            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="bg-blue-100 text-[#0052CC] font-bold text-[10px] px-2.5 py-0.5 rounded-full uppercase">
                  Digitaler Parkschein
                </span>
                <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-bold">
                  Sofort gültig
                </span>
              </div>
              <h3 className="text-lg font-black text-slate-900 mt-1">QR-Code für die Anreise</h3>
              <p className="text-xs text-slate-600 mt-0.5 max-w-md">
                Einfach an der Einfahrtsschranke oder beim Personal vorzeigen. Schnelle und kontaktlose Einfahrt!
              </p>
              <div className="mt-2 text-xs font-mono font-black text-[#0052CC]">
                Code: {bookingCode}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => setViewEmailMode(true)}
              className="px-4 py-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 border border-blue-200 text-xs font-bold text-[#0052CC] flex items-center gap-2 transition-colors cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Original E-Mail Vorlage ansehen</span>
            </button>
            <button
              onClick={() => window.print()}
              className="px-4 py-2.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-50 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Parkschein drucken</span>
            </button>
          </div>
        </div>

        {/* 2-COLUMN BOOKING DETAILS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT 8 COLS: SPECS & TIMELINE */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* 3-GRID SUMMARY: PARKZEIT / KREUZFAHRT / FAHRZEUG */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              {/* Deine Parkzeit */}
              <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 font-black text-sm text-slate-900 mb-3">
                    <Calendar className="w-4 h-4 text-[#0052CC]" />
                    <h4>Deine Parkzeit</h4>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div>
                      <span className="text-slate-400 block text-[11px]">Anreise:</span>
                      <span className="font-bold text-slate-900">{formData.arrivalDate}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">Geplante Ankunft:</span>
                      <span className="font-bold text-slate-900">{formData.arrivalTimeSlot}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">Rückkehr:</span>
                      <span className="font-bold text-slate-900">{formData.departureDate}</span>
                    </div>
                  </div>
                </div>
                <div className="pt-3 mt-3 border-t border-slate-100 flex justify-between items-center text-xs">
                  <span className="text-slate-500">Parkdauer:</span>
                  <span className="font-black text-[#0052CC]">7 Tage</span>
                </div>
              </div>

              {/* Deine Kreuzfahrt */}
              <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 font-black text-sm text-slate-900 mb-3">
                    <Ship className="w-4 h-4 text-[#0052CC]" />
                    <h4>Deine Kreuzfahrt</h4>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2.5 mb-2 bg-slate-50 p-2 rounded-xl border border-slate-100">
                      <div className="w-12 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-blue-100">
                        <img 
                          src="/assets/aistudio/reederei_meinschiff.png" 
                          alt={formData.ship} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <span className="font-bold text-slate-900 block leading-tight">{formData.ship}</span>
                        <span className="text-[10px] text-[#0052CC] font-bold">{formData.cruiseLine}</span>
                      </div>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">Abfahrtshafen & Terminal:</span>
                      <span className="font-semibold text-slate-800">Kiel • Terminal {offer.terminalName}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">Voraussichtliche Ankunft:</span>
                      <span className="font-semibold text-slate-800">{formData.estimatedReturnTime || 'ca. 06:30 Uhr'}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dein Fahrzeug with REAL CAR PHOTO */}
              <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 font-black text-sm text-slate-900 mb-3">
                    <Car className="w-4 h-4 text-[#0052CC]" />
                    <h4>Dein Fahrzeug</h4>
                  </div>
                  
                  {/* Real extracted Tiguan photo */}
                  <div className="w-full h-16 rounded-xl overflow-hidden bg-slate-50 mb-2.5 border border-slate-100 flex items-center justify-center">
                    <img 
                      src="/assets/aistudio/car_tiguan.png" 
                      alt="VW Tiguan" 
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="space-y-1.5 text-xs">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 text-[11px]">Fahrzeug:</span>
                      <span className="font-bold text-slate-900">{formData.carBrandModel}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 text-[11px]">Kennzeichen:</span>
                      <span className="font-mono font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                        {formData.licensePlate}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 text-[11px]">Farbe:</span>
                      <span className="font-semibold text-slate-800">{formData.carColor}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 mt-2 border-t border-slate-100 flex justify-between items-center text-xs">
                  <span className="text-slate-500">Reisende:</span>
                  <span className="font-bold text-slate-900">{formData.passengers} Personen</span>
                </div>
              </div>

            </div>

            {/* SO FUNKTIONIERT DEINE ANREISE (5 ILLUSTRATED STEPS) */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-xs">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-[#0052CC]" />
                <h3 className="text-lg font-black text-slate-900">So funktioniert deine Anreise</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 flex flex-col justify-between">
                  <div>
                    <div className="w-7 h-7 rounded-full bg-[#0052CC] text-white font-bold flex items-center justify-center text-xs mb-2">1</div>
                    <h5 className="font-bold text-xs text-slate-900 mb-1">Zum Parkplatz fahren</h5>
                    <p className="text-[10px] text-slate-500 leading-tight">
                      Fahre am {formData.arrivalDate} zwischen {formData.arrivalTimeSlot} zum gebuchten Parkplatz.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 flex flex-col justify-between">
                  <div>
                    <div className="w-7 h-7 rounded-full bg-[#0052CC] text-white font-bold flex items-center justify-center text-xs mb-2">2</div>
                    <h5 className="font-bold text-xs text-slate-900 mb-1">Am Parkplatz anmelden</h5>
                    <p className="text-[10px] text-slate-500 leading-tight">
                      Zeige deine Buchungsbestätigung oder nenne deine Buchungsnummer:
                    </p>
                    <span className="font-mono text-[10px] font-bold text-blue-700 mt-1 block">{bookingCode}</span>
                  </div>
                </div>

                <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 flex flex-col justify-between">
                  <div>
                    <div className="w-7 h-7 rounded-full bg-[#0052CC] text-white font-bold flex items-center justify-center text-xs mb-2">3</div>
                    <h5 className="font-bold text-xs text-slate-900 mb-1">Fahrzeug abstellen</h5>
                    <p className="text-[10px] text-slate-500 leading-tight">
                      Stelle dein Fahrzeug auf dem zugewiesenen Parkplatz ab.
                    </p>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1 rounded inline-block mt-1">
                      Du behältst deinen Schlüssel.
                    </span>
                  </div>
                </div>

                <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 flex flex-col justify-between">
                  <div>
                    <div className="w-7 h-7 rounded-full bg-[#0052CC] text-white font-bold flex items-center justify-center text-xs mb-2">4</div>
                    <h5 className="font-bold text-xs text-slate-900 mb-1">Shuttle zum Terminal</h5>
                    <p className="text-[10px] text-slate-500 leading-tight">
                      Der Shuttle bringt dich und deine Mitreisenden bequem zum Terminal {offer.terminalName}.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 flex flex-col justify-between">
                  <div>
                    <div className="w-7 h-7 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center text-xs mb-2">5</div>
                    <h5 className="font-bold text-xs text-slate-900 mb-1">Kreuzfahrt genießen</h5>
                    <p className="text-[10px] text-slate-500 leading-tight">
                      Ab jetzt heißt es: Leinen los und schöne Reise!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ANFAHRTSADRESSE & MAP */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-xs">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5 text-[#0052CC]" />
                <h3 className="text-lg font-black text-slate-900">Anfahrtsadresse</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                <div>
                  <h4 className="font-extrabold text-base text-slate-900">{offer.name}</h4>
                  <p className="text-xs text-slate-600 mt-1">{offer.address}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{offer.openHours}</p>

                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 bg-[#0052CC] hover:bg-[#073B8A] text-white text-xs font-bold rounded-xl transition-colors shadow-xs"
                  >
                    <span>Route in Google Maps öffnen</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Map thumbnail with route marker */}
                <div className="h-44 rounded-2xl overflow-hidden border border-slate-200 bg-blue-50 relative flex items-center justify-center">
                  <svg viewBox="0 0 300 150" className="w-full h-full">
                    <rect width="300" height="150" fill="#E2E8F0" />
                    <path d="M 50 150 Q 80 50 150 70 T 260 20" stroke="#0052CC" strokeWidth="4" strokeDasharray="6 4" fill="none" />
                    {/* Parking pin */}
                    <circle cx="50" cy="110" r="10" fill="#0052CC" />
                    <text x="65" y="115" fontSize="11" fontWeight="bold" fill="#0F172A">Parkplatz</text>
                    {/* Terminal pin */}
                    <circle cx="240" cy="40" r="10" fill="#DC2626" />
                    <text x="180" y="35" fontSize="11" fontWeight="bold" fill="#0F172A">Ostseekai</text>
                  </svg>
                  <span className="absolute bottom-2 right-2 bg-white/90 px-2 py-0.5 rounded text-[10px] font-bold text-slate-700 shadow-xs">
                    6 Min. Shuttle-Route
                  </span>
                </div>
              </div>
            </div>

            {/* NOCH FRAGEN? (CUSTOMER SERVICE) */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-7 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-lg font-black text-white">Noch Fragen?</h4>
                <p className="text-xs text-slate-300 mt-1">Unser Kundenservice hilft dir gerne weiter.</p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-3 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-amber-400" />
                    <span className="font-bold text-white">+49 431 12345678</span>
                    <span className="text-[11px] text-slate-400">(Mo. – Fr. 9 – 17 Uhr)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-amber-400" />
                    <span>info@kreuzfahrtparkplatz.de</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onNavigate('search', { port: 'kiel' })}
                className="px-5 py-3 rounded-xl bg-white text-slate-900 hover:bg-slate-100 font-bold text-xs flex items-center gap-2 transition-colors flex-shrink-0"
              >
                <span>Häufige Fragen ansehen</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

          {/* RIGHT 4 COLS: PREISÜBERSICHT & ALLIANZ */}
          <div className="lg:col-span-4 space-y-5 lg:sticky lg:top-24">
            
            <div className="bg-white rounded-3xl border border-slate-200 p-5 shadow-lg space-y-4">
              <h3 className="text-base font-black text-slate-900 border-b border-slate-100 pb-2">
                Preisübersicht
              </h3>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-slate-600">
                  <span>Parkplatz (7 Tage)</span>
                  <span className="font-bold text-slate-900">{offer.price7Days},00 €</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Buchungsgebühr</span>
                  <span className="font-bold text-emerald-600">0,00 €</span>
                </div>
                <div className="flex justify-between text-slate-600 items-center">
                  <span>Allianz Extra-Schutz</span>
                  <span className="font-bold text-emerald-600">inklusive</span>
                </div>

                <div className="pt-2 border-t border-slate-200 flex items-baseline justify-between">
                  <span className="text-sm font-bold text-slate-900">Gesamtbetrag</span>
                  <div className="text-right">
                    <span className="text-2xl font-black text-[#0052CC]">{offer.price7Days},00 €</span>
                    <span className="block text-[10px] text-slate-400">inkl. MwSt.</span>
                  </div>
                </div>
              </div>

              {/* Paid status badge */}
              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 space-y-1">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Zahlungsstatus: Bezahlt</span>
                </div>
                <div className="text-[11px] text-slate-600 pl-6">
                  Zahlungsart: {formData.paymentMethod === 'paypal' ? 'PayPal' : formData.paymentMethod === 'card' ? 'Kreditkarte' : 'Online-Zahlung'}
                </div>
              </div>

              <button
                onClick={handleDownload}
                className="w-full py-2.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-50 flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-[#0052CC]" />
                <span>Rechnung herunterladen →</span>
              </button>
            </div>

            {/* Allianz Parkplatzschutz inklusive */}
            <div className="bg-[#EBF3FC] border border-[#BFDBFE] p-5 rounded-3xl space-y-3">
              <div className="flex items-center justify-between">
                <AllianzLogo className="h-6" />
                <span className="text-xs font-bold text-[#003781]">Parkplatzschutz inklusive</span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-700">
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-600" /> Extra geschützt während der Parkdauer</li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-600" /> Schutz bei Diebstahl, Vandalismus, Brand u. v. m.</li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-600" /> Ohne Zusatzkosten</li>
              </ul>
              <div className="pt-1 text-[11px] text-blue-700 font-semibold cursor-pointer hover:underline">
                Mehr Informationen →
              </div>
            </div>

            {/* Return to home button */}
            <button
              onClick={() => onNavigate('home')}
              className="w-full py-3 rounded-2xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors"
            >
              Zurück zur Startseite
            </button>

          </div>

        </div>
      </div>
    </div>
  );
};
