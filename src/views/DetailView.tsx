import React, { useState } from 'react';
import { 
  Star, 
  MapPin, 
  Clock, 
  Car, 
  ShieldCheck, 
  CheckCircle2, 
  ChevronRight, 
  Camera, 
  Share2, 
  Heart, 
  Navigation, 
  Calendar, 
  ArrowRight,
  Info,
  ChevronDown,
  Building2,
  Users,
  Check
} from 'lucide-react';
import { ViewMode, ParkingOffer } from '../types';
import { PARKING_OFFERS, FAQS, TESTIMONIALS } from '../data/mockData';
import { AllianzLogo, AllianzBadgeCompact } from '../components/AllianzBanner';
import { ImageLightboxModal } from '../components/ImageLightboxModal';

interface DetailViewProps {
  parkingId?: string;
  onNavigate: (view: ViewMode, payload?: any) => void;
  onStartBooking: (offer: ParkingOffer) => void;
  isSaved?: boolean;
  onToggleSave?: () => void;
}

export const DetailView: React.FC<DetailViewProps> = ({
  parkingId = 'port-parking-kiel',
  onNavigate,
  onStartBooking,
  isSaved = false,
  onToggleSave
}) => {
  const offer = PARKING_OFFERS.find(p => p.id === parkingId) || PARKING_OFFERS[0];
  const isValet = offer.type === 'valet';

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const routeMapImage = isValet 
    ? '/assets/aistudio/valet_map_route.png' 
    : '/assets/aistudio/port_parking_map_route.png';

  const galleryImages = [
    isValet ? '/assets/aistudio/valet_main_photo.png' : '/assets/aistudio/port_parking_main_photo.png',
    '/assets/aistudio/parkart_shuttle.png',
    '/assets/aistudio/parkart_halle.png',
    '/assets/aistudio/parkart_valet.png',
    '/assets/aistudio/hero_ostseekai_banner.png'
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* Lightbox for full gallery */}
      <ImageLightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={galleryImages}
        title={offer.name}
      />

      {/* TOP BREADCRUMB & HEADER */}
      <div className="bg-white border-b border-slate-200 pt-4 pb-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2">
            <button onClick={() => onNavigate('home')} className="hover:text-blue-600">Startseite</button>
            <ChevronRight className="w-3 h-3" />
            <button onClick={() => onNavigate('search', { port: 'kiel' })} className="hover:text-blue-600">Kiel</button>
            <ChevronRight className="w-3 h-3" />
            <button onClick={() => onNavigate('search', { port: 'kiel' })} className="hover:text-blue-600">Parkplätze</button>
            <ChevronRight className="w-3 h-3" />
            <span className="font-semibold text-slate-900">{offer.name}</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  {offer.name}
                </h1>
                <span className="bg-[#0052CC] text-white text-[11px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wide">
                  {isValet ? 'BESONDERS KOMFORTABEL' : 'UNSERE EMPFEHLUNG'}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 flex items-center gap-2">
                <span>Kiel</span>
                <span>•</span>
                <span>{offer.distanceKmText}</span>
                <span>•</span>
                <span>{isValet ? 'Fahrzeugübergabe direkt am Kreuzfahrtterminal' : 'Shuttle zum Terminal inklusive'}</span>
              </p>
            </div>

            {/* Allianz Header trust card */}
            <div className="bg-[#EBF3FC] border border-[#BFDBFE] px-4 py-2 rounded-xl flex items-center gap-3 self-start md:self-auto">
              <AllianzLogo className="h-6" />
              <div className="text-left text-xs">
                <div className="font-bold text-[#003781]">Parkplatzschutz inklusive</div>
                <div className="text-[10px] text-slate-600">Extra geschützt – ohne Zusatzkosten.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT CONTENT (8 cols on lg) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* PHOTO GALLERY */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs p-2">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 h-72 sm:h-96">
                {/* Main large image */}
                <div className="md:col-span-2 h-full rounded-xl overflow-hidden relative group cursor-pointer" onClick={() => setLightboxOpen(true)}>
                  <img 
                    src={galleryImages[0]} 
                    alt={offer.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <button
                    onClick={(e) => { e.stopPropagation(); setLightboxOpen(true); }}
                    className="absolute bottom-3 left-3 bg-slate-900/85 hover:bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-xl flex items-center gap-2 shadow-lg backdrop-blur-xs transition-colors"
                  >
                    <Camera className="w-4 h-4 text-amber-400" />
                    <span>Alle 15 Bilder ansehen</span>
                  </button>
                </div>

                {/* Right 2 thumbnails */}
                <div className="hidden md:grid grid-rows-2 gap-2 h-full">
                  <div className="rounded-xl overflow-hidden relative cursor-pointer group" onClick={() => setLightboxOpen(true)}>
                    <img 
                      src={galleryImages[1]} 
                      alt="Parkplatz Ansicht" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden relative cursor-pointer group" onClick={() => setLightboxOpen(true)}>
                    <img 
                      src={galleryImages[2]} 
                      alt="Shuttle Bus" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 6 KEY BADGES BAR */}
            <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-center">
              <div className="p-2 flex flex-col items-center justify-center">
                <Car className="w-5 h-5 text-[#0052CC] mb-1" />
                <span className="text-[11px] font-bold text-slate-800">
                  {isValet ? 'Direkt zum Terminal' : 'Schlüssel behalten'}
                </span>
              </div>
              <div className="p-2 flex flex-col items-center justify-center">
                <Clock className="w-5 h-5 text-[#0052CC] mb-1" />
                <span className="text-[11px] font-bold text-slate-800">
                  {isValet ? 'Persönliche Übergabe' : 'Shuttle inklusive'}
                </span>
              </div>
              <div className="p-2 flex flex-col items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-[#0052CC] mb-1" />
                <span className="text-[11px] font-bold text-slate-800">Video-überwacht</span>
              </div>
              <div className="p-2 flex flex-col items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-[#0052CC] mb-1" />
                <span className="text-[11px] font-bold text-slate-800">Beleuchtet</span>
              </div>
              <div className="p-2 flex flex-col items-center justify-center">
                <Building2 className="w-5 h-5 text-[#0052CC] mb-1" />
                <span className="text-[11px] font-bold text-slate-800">Eingezäunt</span>
              </div>
              <div className="p-2 flex flex-col items-center justify-center">
                <Clock className="w-5 h-5 text-[#0052CC] mb-1" />
                <span className="text-[11px] font-bold text-slate-800">24h erreichbar</span>
              </div>
            </div>

            {/* ÜBER DIESEN PARKPLATZ */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
              <h2 className="text-lg font-black text-slate-900 mb-3">Über diesen Parkplatz</h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {offer.description}
              </p>

              {/* REAL ROUTE MAP CARD */}
              <div className="mt-6 rounded-2xl overflow-hidden border border-slate-200 bg-white">
                <div className="relative aspect-16/9 w-full bg-slate-100 overflow-hidden">
                  <img 
                    src={routeMapImage} 
                    alt={`Lage und Anfahrt ${offer.name}`} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3 bg-white/95 px-3 py-1.5 rounded-xl shadow-md border border-slate-200 text-xs font-bold text-slate-900 flex items-center gap-2 backdrop-blur-xs">
                    <MapPin className="w-4 h-4 text-red-600" />
                    <span>{isValet ? 'Übergabe: Ostseekai Kiel' : 'Route: Parkplatz ➔ Ostseekai'}</span>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#0052CC] text-white flex items-center justify-center font-bold">
                      P
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-slate-900">
                        {isValet ? 'Fahrzeugübergabe direkt am Terminal' : 'Nur 1,8 km bis zum Ostseekai'}
                      </h4>
                      <p className="text-[11px] text-slate-500">
                        {isValet ? 'Treffpunkt vor dem Cruise Terminal Ostseekai' : 'Ca. 6 Minuten Shuttle-Fahrt im Pendelverkehr'}
                      </p>
                    </div>
                  </div>

                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="px-4 py-2 bg-[#0052CC] hover:bg-[#073B8A] text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>In Google Maps öffnen</span>
                  </a>
                </div>
              </div>
            </div>

            {/* SO FUNKTIONIERT DAS PARKEN (5 STEPS) */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-[#0052CC]" />
                <h3 className="text-lg font-black text-slate-900">
                  {isValet ? 'So funktioniert Valet Parking' : 'So funktioniert das Parken'}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                {isValet ? (
                  <>
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-center flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-[#0052CC] text-white font-bold flex items-center justify-center text-xs mb-2">1</div>
                      <h5 className="font-bold text-xs text-slate-900 mb-1">Zum Terminal fahren</h5>
                      <p className="text-[10px] text-slate-500 leading-tight">Du fährst direkt zum vereinbarten Treffpunkt.</p>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-center flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-[#0052CC] text-white font-bold flex items-center justify-center text-xs mb-2">2</div>
                      <h5 className="font-bold text-xs text-slate-900 mb-1">Valet-Fahrer treffen</h5>
                      <p className="text-[10px] text-slate-500 leading-tight">Mitarbeiter erwartet dich vor Ort mit Buchungsnummer.</p>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-center flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-[#0052CC] text-white font-bold flex items-center justify-center text-xs mb-2">3</div>
                      <h5 className="font-bold text-xs text-slate-900 mb-1">Fahrzeug übergeben</h5>
                      <p className="text-[10px] text-slate-500 leading-tight">Schlüsselübergabe mit kurzem Zustandsprotokoll.</p>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-center flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-[#0052CC] text-white font-bold flex items-center justify-center text-xs mb-2">4</div>
                      <h5 className="font-bold text-xs text-slate-900 mb-1">Direkt zum Schiff</h5>
                      <p className="text-[10px] text-slate-500 leading-tight">Du nimmst dein Gepäck und gehst direkt an Bord.</p>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-center flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center text-xs mb-2">5</div>
                      <h5 className="font-bold text-xs text-slate-900 mb-1">Fahrzeug zurück</h5>
                      <p className="text-[10px] text-slate-500 leading-tight">Bei Rückkehr steht dein Auto pünktlich bereit.</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-center flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-[#0052CC] text-white font-bold flex items-center justify-center text-xs mb-2">1</div>
                      <h5 className="font-bold text-xs text-slate-900 mb-1">Ankommen</h5>
                      <p className="text-[10px] text-slate-500 leading-tight">Du fährst zum gebuchten Parkplatz.</p>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-center flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-[#0052CC] text-white font-bold flex items-center justify-center text-xs mb-2">2</div>
                      <h5 className="font-bold text-xs text-slate-900 mb-1">Anmelden</h5>
                      <p className="text-[10px] text-slate-500 leading-tight">Buchungsnummer vorzeigen.</p>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-center flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-[#0052CC] text-white font-bold flex items-center justify-center text-xs mb-2">3</div>
                      <h5 className="font-bold text-xs text-slate-900 mb-1">Parken</h5>
                      <p className="text-[10px] text-slate-500 leading-tight">Fahrzeug auf Stellplatz abstellen.</p>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-center flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-[#0052CC] text-white font-bold flex items-center justify-center text-xs mb-2">4</div>
                      <h5 className="font-bold text-xs text-slate-900 mb-1">Zum Schiff</h5>
                      <p className="text-[10px] text-slate-500 leading-tight">Der Shuttle bringt dich zum Terminal.</p>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-center flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center text-xs mb-2">5</div>
                      <h5 className="font-bold text-xs text-slate-900 mb-1">Nach Kreuzfahrt</h5>
                      <p className="text-[10px] text-slate-500 leading-tight">Shuttle zurück zum Parkplatz und Heimreise.</p>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* 3 DETAIL SPEC BLOCKS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#0052CC]" />
                  Ausstattung & Sicherheit
                </h4>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600" /> Außenstellplatz / Umzäunt</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600" /> Beleuchtet & Videoüberwacht</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600" /> Befestigte Stellflächen</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600" /> 24h erreichbar</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#0052CC]" />
                  Transfer zum Terminal
                </h4>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600" /> Shuttle-Service inklusive</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600" /> Hin- und Rückfahrt</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600" /> Transfer zum Ostseekai</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600" /> Kurze Fahrzeit (ca. 6 Min.)</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <Car className="w-4 h-4 text-[#0052CC]" />
                  Dein Fahrzeug
                </h4>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" /> 
                    {isValet ? 'Schlüsselübergabe an Valet' : 'Schlüssel bleibt beim Kunden'}
                  </li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600" /> Geeignet für PKW & SUV</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600" /> Sicherer, bewachter Platz</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600" /> Flexible Stornierung</li>
                </ul>
              </div>
            </div>

            {/* REVIEWS */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-black text-slate-900">Das sagen Kreuzfahrtgäste</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-slate-800">4,8 von 5 Sternen</span>
                    <span className="text-xs text-slate-400">(326 Bewertungen)</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {TESTIMONIALS.slice(0, 3).map(t => (
                  <div key={t.id} className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 text-xs">
                    <div className="flex text-amber-400 mb-1.5">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                    <p className="font-bold text-slate-900 mb-1">„Super organisiert.“</p>
                    <p className="text-slate-600 italic">„{t.text}“</p>
                    <div className="mt-2 text-[11px] font-semibold text-slate-500">
                      {t.name} • {t.location}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT SIDEBAR: BOOKING WIDGET (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-5 lg:sticky lg:top-24">
            
            {/* Booking Card */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-lg space-y-5">
              <div>
                <h3 className="text-xl font-black text-slate-900">Deine Parkplatzbuchung</h3>
                <p className="text-xs text-slate-500 mt-0.5">Schnell und sicher zum garantierten Stellplatz</p>
              </div>

              {/* Travel dates */}
              <div className="grid grid-cols-2 gap-2 text-xs p-3 bg-slate-50 rounded-xl border border-slate-200">
                <div>
                  <span className="block text-[10px] text-slate-400 font-bold uppercase">Anreise</span>
                  <span className="font-bold text-slate-900">12.06.2027</span>
                  <span className="block text-[10px] text-slate-500">10:00 – 11:00 Uhr</span>
                </div>
                <div>
                  <span className="block text-[10px] text-slate-400 font-bold uppercase">Rückkehr</span>
                  <span className="font-bold text-slate-900">19.06.2027</span>
                  <span className="block text-[10px] text-slate-500">7 Tage Parken</span>
                </div>
              </div>

              {/* Parkplatz summary line */}
              <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-100 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#0052CC] text-white flex items-center justify-center font-bold">
                  P
                </div>
                <div>
                  <div className="font-bold text-xs text-slate-900">{offer.name}</div>
                  <div className="text-[11px] text-slate-500">{offer.tagline}</div>
                </div>
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

                <div className="pt-3 border-t border-slate-200 flex items-baseline justify-between">
                  <span className="text-base font-bold text-slate-900">Gesamtpreis</span>
                  <div className="text-right">
                    <span className="text-3xl font-black text-[#0052CC] tracking-tight">{offer.price7Days},00 €</span>
                    <span className="block text-[10px] text-slate-400">inkl. MwSt.</span>
                  </div>
                </div>
              </div>

              {/* Yellow Big CTA Button */}
              <button
                onClick={() => onStartBooking(offer)}
                className="w-full py-4 px-4 bg-[#FDB813] hover:bg-[#F5A600] active:scale-[0.99] text-slate-950 font-black text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <span>Parkplatz buchen</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Guarantees */}
              <div className="space-y-1.5 text-xs text-slate-600 pt-1">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Sichere Online-Buchung</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Sofortige Bestätigung per E-Mail</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Allianz Parkplatzschutz inklusive</span>
                </div>
              </div>

              {/* Stock indicator badge */}
              <div className="bg-emerald-50 text-emerald-800 p-2.5 rounded-xl border border-emerald-200 text-xs font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Noch 4 Plätze für deinen Reisezeitraum verfügbar</span>
              </div>
            </div>

            {/* Allianz info card */}
            <div className="bg-[#EBF3FC] border border-[#BFDBFE] p-5 rounded-2xl space-y-3">
              <div className="flex items-center justify-between">
                <AllianzLogo className="h-6" />
                <span className="text-xs font-bold text-[#003781]">Parkplatzschutz inklusive</span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-700">
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-600" /> Versichert während der Parkdauer</li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-600" /> Schutz bei Diebstahl, Vandalismus, Brand u. v. m.</li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-600" /> Ohne Zusatzkosten</li>
              </ul>
              <div className="pt-1 text-[11px] text-blue-700 font-semibold cursor-pointer hover:underline">
                Mehr Informationen →
              </div>
            </div>

            {/* Gut zu wissen */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3">
              <h4 className="font-black text-sm text-slate-900">Gut zu wissen</h4>
              
              <div className="space-y-2.5 text-xs text-slate-600">
                <div>
                  <span className="font-bold text-slate-800 block">Öffnungszeiten:</span>
                  <span>{offer.openHours}</span>
                </div>
                <div>
                  <span className="font-bold text-slate-800 block">Fahrzeuggröße:</span>
                  <span>PKW und SUV bis 2,10m Höhe möglich</span>
                </div>
                <div>
                  <span className="font-bold text-slate-800 block">Schlüssel:</span>
                  <span>{isValet ? 'Schlüsselübergabe an Valet-Mitarbeiter' : 'Du behältst deinen Fahrzeugschlüssel'}</span>
                </div>
                <div>
                  <span className="font-bold text-slate-800 block">Anreise:</span>
                  <span>Bitte ca. 30 Minuten vor gewünschter Ankunft am Terminal eintreffen.</span>
                </div>
                <div>
                  <span className="font-bold text-slate-800 block">Verspätung des Schiffes:</span>
                  <span>Deine Buchung bleibt automatisch bestehen.</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
