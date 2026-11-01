import React, { useState } from 'react';
import { 
  MapPin, 
  Calendar, 
  Ship, 
  Search, 
  CheckCircle2, 
  ShieldCheck, 
  Star, 
  Clock, 
  Car, 
  Building2, 
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Info
} from 'lucide-react';
import { ViewMode, ParkingOffer } from '../types';
import { PORT_TERMINALS, PARKING_OFFERS, CRUISE_LINES, FAQS } from '../data/mockData';
import { AllianzLogo } from '../components/AllianzBanner';

interface TerminalViewProps {
  terminalId: string;
  onNavigate: (view: ViewMode, payload?: any) => void;
  onSelectOffer: (offer: ParkingOffer) => void;
}

export const TerminalView: React.FC<TerminalViewProps> = ({
  terminalId,
  onNavigate,
  onSelectOffer
}) => {
  const terminal = PORT_TERMINALS.find(t => t.id === terminalId) || PORT_TERMINALS[0];
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Offers associated with this terminal or general Kiel
  const terminalOffers = PARKING_OFFERS.filter(
    o => o.terminal === terminal.id || o.port === 'kiel'
  ).slice(0, 4);

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* BREADCRUMB & HERO */}
      <div className="bg-white border-b border-slate-200 pt-5 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2">
            <button onClick={() => onNavigate('home')} className="hover:text-blue-600">Startseite</button>
            <ChevronRight className="w-3 h-3" />
            <span>Häfen</span>
            <ChevronRight className="w-3 h-3" />
            <button onClick={() => onNavigate('search', { port: 'kiel' })} className="hover:text-blue-600">Kiel</button>
            <ChevronRight className="w-3 h-3" />
            <span className="font-semibold text-slate-900">{terminal.name}</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Parkplatz {terminal.name}
          </h1>
          <p className="text-sm text-slate-600 mt-1 font-semibold">
            Parkplätze vergleichen & sicher buchen.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-1.5 mt-3 text-xs font-semibold text-slate-700">
            <span className="flex items-center gap-1.5 text-emerald-700">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Parkplätze direkt am {terminal.name} oder in der Nähe
            </span>
            <span className="flex items-center gap-1.5 text-blue-800">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#0052CC]" />
              Mit dem Extra Schutz der Allianz – ohne Zusatzkosten
            </span>
            <span className="flex items-center gap-1.5 text-slate-700">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Einfach, schnell und zum besten Preis
            </span>
          </div>

          {/* Quick Search Strip */}
          <div className="mt-6 p-3 bg-slate-100 rounded-2xl border border-slate-200 grid grid-cols-1 sm:grid-cols-4 gap-3 items-center">
            <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-xl border border-slate-200 text-xs font-semibold text-slate-800">
              <Calendar className="w-4 h-4 text-[#0052CC]" />
              <div>
                <span className="block text-[10px] text-slate-400 font-normal">Anreise</span>
                <span>Mi, 12.05.2027</span>
              </div>
            </div>

            <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-xl border border-slate-200 text-xs font-semibold text-slate-800">
              <Calendar className="w-4 h-4 text-[#0052CC]" />
              <div>
                <span className="block text-[10px] text-slate-400 font-normal">Rückkehr</span>
                <span>Mi, 19.05.2027</span>
              </div>
            </div>

            <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-xl border border-slate-200 text-xs font-semibold text-slate-800">
              <Ship className="w-4 h-4 text-[#0052CC]" />
              <div>
                <span className="block text-[10px] text-slate-400 font-normal">Reederei (optional)</span>
                <span>z. B. AIDA / Mein Schiff</span>
              </div>
            </div>

            <button
              onClick={() => onNavigate('search', { port: 'kiel' })}
              className="py-2.5 px-4 bg-[#FDB813] hover:bg-[#F5A600] text-slate-950 font-extrabold text-xs rounded-xl flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Parkplätze finden</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 space-y-10">
        
        {/* 5 BLUE PILLS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0052CC] flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-xs text-slate-900">Allianz Parkplatzschutz</div>
              <div className="text-[10px] text-slate-500">Inklusive – ohne Zusatzkosten</div>
            </div>
          </div>

          <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0052CC] flex items-center justify-center flex-shrink-0">
              <span className="font-black text-sm">€</span>
            </div>
            <div>
              <div className="font-bold text-xs text-slate-900">Faire Preise</div>
              <div className="text-[10px] text-slate-500">Angebote vergleichen & sparen</div>
            </div>
          </div>

          <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0052CC] flex items-center justify-center flex-shrink-0">
              <Car className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-xs text-slate-900">Terminalnah parken</div>
              <div className="text-[10px] text-slate-500">Viele Parkplätze direkt vor Ort</div>
            </div>
          </div>

          <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0052CC] flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-xs text-slate-900">Shuttle- & Valet-Service</div>
              <div className="text-[10px] text-slate-500">Bequem und pünktlich zum Schiff</div>
            </div>
          </div>

          <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-3 col-span-2 sm:col-span-1">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0052CC] flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-xs text-slate-900">Schnell & einfach buchen</div>
              <div className="text-[10px] text-slate-500">In wenigen Minuten online</div>
            </div>
          </div>
        </div>

        {/* DIE BELIEBTESTEN PARKPLÄTZE AM TERMINAL */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-black text-slate-900">
              Die beliebtesten Parkplätze am {terminal.name}
            </h2>
            <button 
              onClick={() => onNavigate('search', { port: 'kiel' })}
              className="text-xs font-bold text-[#0052CC] hover:underline"
            >
              Alle Parkplätze am {terminal.name} ({terminal.parkingCount}) →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {terminalOffers.map(offer => (
              <div 
                key={offer.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="h-40 relative overflow-hidden bg-slate-100">
                    <img src={offer.image} alt={offer.name} className="w-full h-full object-cover" />
                    {offer.badge && (
                      <span className="absolute top-2 left-2 bg-[#FDB813] text-slate-950 text-[10px] font-black uppercase px-2 py-0.5 rounded shadow-xs">
                        {offer.badge}
                      </span>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-extrabold text-sm text-slate-900">{offer.name}</h3>
                    <div className="flex items-center gap-1 text-xs text-amber-500 mt-1">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <span className="font-bold text-slate-800">{offer.rating}</span>
                      <span className="text-[11px] text-slate-400">({offer.reviewCount})</span>
                    </div>

                    <div className="mt-2.5 space-y-1 text-[11px] text-slate-600">
                      <div className="flex items-center gap-1.5"><MapPin className="w-3 h-3 text-[#0052CC]" /> {offer.distanceKmText}</div>
                      <div className="flex items-center gap-1.5"><Clock className="w-3 h-3 text-slate-400" /> Shuttle / Valet inklusive</div>
                    </div>
                  </div>
                </div>

                <div className="p-4 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 block">ab</span>
                    <span className="text-lg font-black text-slate-900">{offer.price7Days} €</span>
                    <span className="text-[10px] text-slate-500 block">für 7 Tage</span>
                  </div>

                  <button
                    onClick={() => onSelectOffer(offer)}
                    className="py-2 px-3 bg-[#FDB813] hover:bg-[#F5A600] text-slate-950 font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center gap-1"
                  >
                    <span>Zum Angebot</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TERMINAL INFOS & MAP */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <h2 className="text-xl font-black text-slate-900 mb-6">
            {terminal.name} – alle wichtigen Informationen
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Photo hero of Terminal */}
            <div className="lg:col-span-5 h-72 rounded-2xl overflow-hidden relative shadow-md">
              <img 
                src={terminal.image} 
                alt={terminal.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
                <span className="text-xs uppercase font-bold text-amber-300">Kreuzfahrthafen Kiel</span>
                <h3 className="font-bold text-base mt-0.5">{terminal.name}</h3>
                <p className="text-xs text-slate-200 mt-1 leading-relaxed">
                  {terminal.description}
                </p>
              </div>
            </div>

            {/* Terminal Details & Features */}
            <div className="lg:col-span-4 space-y-4 text-xs text-slate-700">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#0052CC] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Lage</h4>
                  <p className="text-slate-600 mt-0.5">Zentral in Kiel, bestens angebunden an Bundesstraßen und Autobahnen.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Car className="w-5 h-5 text-[#0052CC] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Zu Fuß zum Terminal</h4>
                  <p className="text-slate-600 mt-0.5">Viele Parkplätze in 1 – 5 Minuten zu Fuß erreichbar.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#0052CC] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Shuttle-Service</h4>
                  <p className="text-slate-600 mt-0.5">Alternativ mit Shuttle in wenigen Minuten bequem direkt vor den Check-in.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Building2 className="w-5 h-5 text-[#0052CC] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Parkplatzarten</h4>
                  <p className="text-slate-600 mt-0.5">Außenstellplätze, Parkhäuser, Shuttle- und Valet-Parking verfügbar.</p>
                </div>
              </div>
            </div>

            {/* Map Preview */}
            <div className="lg:col-span-3 bg-blue-50 p-4 rounded-2xl border border-blue-100 text-center">
              <div className="h-40 rounded-xl overflow-hidden bg-white mb-3 relative flex items-center justify-center border border-slate-200">
                <img 
                  src="/assets/aistudio/kiel_map_preview.png" 
                  alt="Kiel Übersichtskarte" 
                  className="w-full h-full object-cover"
                />
              </div>
              <button 
                onClick={() => onNavigate('search', { port: 'kiel' })}
                className="w-full py-2 bg-[#0052CC] hover:bg-[#073B8A] text-white rounded-xl text-xs font-bold transition-colors"
              >
                Alle Parkplätze auf Karte anzeigen
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM CTA STRIP */}
        <div className="bg-[#0A2540] text-white p-8 rounded-3xl shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-black">Kreuzfahrt ab dem {terminal.name} – entspannt starten.</h3>
            <p className="text-xs text-blue-200 mt-1 max-w-xl">
              Vergleiche Angebote verschiedener Anbieter, buche online und starte entspannt in deinen Urlaub.
            </p>
          </div>

          <button
            onClick={() => onNavigate('search', { port: 'kiel' })}
            className="px-6 py-3.5 bg-[#FDB813] hover:bg-[#F5A600] text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer flex-shrink-0"
          >
            <span>Parkplatz am {terminal.name} finden</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
