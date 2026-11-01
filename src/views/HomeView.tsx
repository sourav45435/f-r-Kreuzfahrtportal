import React, { useState } from 'react';
import { 
  Ship, 
  Calendar, 
  MapPin, 
  Search, 
  Check, 
  ShieldCheck, 
  Car, 
  Clock, 
  ArrowRight, 
  Star, 
  ChevronRight, 
  ChevronLeft,
  Building2,
  Users,
  Compass,
  Sparkles
} from 'lucide-react';
import { ViewMode, ParkingOffer } from '../types';
import { CRUISE_PORTS, CRUISE_LINES, TESTIMONIALS } from '../data/mockData';
import { AllianzBanner } from '../components/AllianzBanner';

interface HomeViewProps {
  onNavigate: (view: ViewMode, payload?: any) => void;
  onSelectOffer: (offer: ParkingOffer) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onSelectOffer }) => {
  const [selectedPort, setSelectedPort] = useState('kiel');
  const [arrivalDate, setArrivalDate] = useState('2027-06-12');
  const [departureDate, setDepartureDate] = useState('2027-06-19');
  const [selectedReederei, setSelectedReederei] = useState('');
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigate('search', {
      port: selectedPort,
      arrivalDate,
      departureDate,
      reederei: selectedReederei
    });
  };

  return (
    <div className="space-y-12 pb-16">
      {/* HERO SECTION WITH SEARCH WIDGET */}
      <section className="relative min-h-[500px] flex items-center justify-center text-white px-4 pt-10 pb-14 overflow-hidden bg-[#0A2540]">
        {/* Real hero photography background matching Startseite Main */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-45 mix-blend-luminosity"
          style={{ 
            backgroundImage: `url('/assets/aistudio/hero_ostseekai_banner.png')` 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#071C35]/85 via-[#0A2540]/75 to-[#0A2540]" />

        <div className="relative z-10 max-w-5xl mx-auto w-full text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            Kreuzfahrtparkplätze <br />
            <span className="text-white">
              vergleichen & buchen
            </span>
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-blue-100 max-w-2xl mx-auto font-normal leading-relaxed">
            Finde den passenden Parkplatz für deine Kreuzfahrt. <br className="hidden sm:inline" />
            Mit dem Extra Schutz der Allianz – ohne Zusatzkosten.
          </p>

          {/* SEARCH WIDGET MATCHING SCREENSHOT */}
          <form 
            onSubmit={handleSearchSubmit}
            className="mt-8 bg-white text-slate-800 p-2 sm:p-2.5 rounded-2xl sm:rounded-full shadow-2xl border border-slate-100 flex flex-col sm:flex-row items-center gap-2 text-left"
          >
            {/* 1. Abfahrtshafen */}
            <div className="flex-1 px-4 py-2 hover:bg-slate-50 rounded-full transition-colors w-full sm:w-auto">
              <label className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                <MapPin className="w-3.5 h-3.5 text-[#0052CC]" />
                <span>Abfahrtshafen</span>
              </label>
              <select 
                value={selectedPort}
                onChange={e => setSelectedPort(e.target.value)}
                className="w-full bg-transparent font-bold text-slate-900 text-xs sm:text-sm focus:outline-none cursor-pointer"
              >
                <option value="kiel">Kiel</option>
                <option value="hamburg">Hamburg</option>
                <option value="warnemuende">Warnemünde</option>
                <option value="bremerhaven">Bremerhaven</option>
                <option value="travemuende">Travemünde</option>
              </select>
            </div>

            <div className="hidden sm:block h-8 w-px bg-slate-200" />

            {/* 2. Anreise */}
            <div className="flex-1 px-4 py-2 hover:bg-slate-50 rounded-full transition-colors w-full sm:w-auto">
              <label className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                <Calendar className="w-3.5 h-3.5 text-[#0052CC]" />
                <span>Anreise</span>
              </label>
              <input 
                type="date"
                value={arrivalDate}
                onChange={e => setArrivalDate(e.target.value)}
                className="w-full bg-transparent font-bold text-slate-900 text-xs sm:text-sm focus:outline-none cursor-pointer"
              />
            </div>

            <div className="hidden sm:block h-8 w-px bg-slate-200" />

            {/* 3. Rückkehr */}
            <div className="flex-1 px-4 py-2 hover:bg-slate-50 rounded-full transition-colors w-full sm:w-auto">
              <label className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                <Calendar className="w-3.5 h-3.5 text-[#0052CC]" />
                <span>Rückkehr</span>
              </label>
              <input 
                type="date"
                value={departureDate}
                onChange={e => setDepartureDate(e.target.value)}
                className="w-full bg-transparent font-bold text-slate-900 text-xs sm:text-sm focus:outline-none cursor-pointer"
              />
            </div>

            <div className="hidden sm:block h-8 w-px bg-slate-200" />

            {/* 4. Reederei (optional) */}
            <div className="flex-1 px-4 py-2 hover:bg-slate-50 rounded-full transition-colors w-full sm:w-auto">
              <label className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                <Ship className="w-3.5 h-3.5 text-[#0052CC]" />
                <span>Reederei (optional)</span>
              </label>
              <select 
                value={selectedReederei}
                onChange={e => setSelectedReederei(e.target.value)}
                className="w-full bg-transparent font-medium text-slate-900 text-xs focus:outline-none cursor-pointer"
              >
                <option value="">z. B. AIDA</option>
                <option value="aida">AIDA Cruises</option>
                <option value="mein-schiff">Mein Schiff</option>
                <option value="msc">MSC Cruises</option>
                <option value="costa">Costa</option>
              </select>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full sm:w-auto py-3.5 px-6 rounded-full bg-[#FFBF00] hover:bg-[#E5AC00] active:scale-[0.98] text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 transition-all cursor-pointer flex-shrink-0"
            >
              <span>Parkplätze finden</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </section>

      {/* ALLIANZ TRUST BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <AllianzBanner />
      </section>

      {/* TRUST BADGES BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200 shadow-xs text-xs font-semibold text-slate-800">
            <Search className="w-4 h-4 text-[#0052CC] flex-shrink-0" />
            <span>Angebote vergleichen</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200 shadow-xs text-xs font-semibold text-slate-800">
            <ShieldCheck className="w-4 h-4 text-[#0052CC] flex-shrink-0" />
            <span>Sichere Online-Buchung</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200 shadow-xs text-xs font-semibold text-slate-800">
            <Check className="w-4 h-4 text-[#0052CC] flex-shrink-0" />
            <span>Geprüfte Anbieter</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200 shadow-xs text-xs font-semibold text-slate-800">
            <Car className="w-4 h-4 text-[#0052CC] flex-shrink-0" />
            <span>Terminal, Shuttle & Valet</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200 shadow-xs text-xs font-semibold text-slate-800 col-span-2 sm:col-span-1">
            <Ship className="w-4 h-4 text-[#0052CC] flex-shrink-0" />
            <span>Passend zu deinem Schiff</span>
          </div>
        </div>
      </section>

      {/* BELIEBTE KREUZFAHRTHÄFEN IN DEUTSCHLAND */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Beliebte Kreuzfahrthäfen in Deutschland
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Finde Parkplätze an den wichtigsten Kreuzfahrthäfen – schnell, einfach und zum besten Preis.
            </p>
          </div>
          <button 
            onClick={() => onNavigate('search', { port: 'kiel' })}
            className="text-xs sm:text-sm font-bold text-[#0052CC] hover:underline hidden sm:flex items-center gap-1"
          >
            Alle Kreuzfahrthäfen anzeigen <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Kiel */}
          <div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col">
            <div className="h-40 overflow-hidden relative">
              <img 
                src="/assets/aistudio/port_kiel.png" 
                alt="Kiel Kreuzfahrthafen" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-extrabold text-base text-slate-900">Kiel</h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Ostseekai, Ostuferhafen, Norwegenkai, Schwedenkai
                </p>
              </div>
              <button
                onClick={() => onNavigate('search', { port: 'kiel' })}
                className="mt-4 w-full py-2.5 rounded-xl border border-blue-200 text-[#0052CC] hover:bg-blue-50 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Parkplätze in Kiel</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Hamburg */}
          <div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col">
            <div className="h-40 overflow-hidden relative">
              <img 
                src="/assets/aistudio/port_hamburg.png" 
                alt="Hamburg HafenCity" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-extrabold text-base text-slate-900">Hamburg</h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  HafenCity, Steinwerder, Altona
                </p>
              </div>
              <button
                onClick={() => onNavigate('search', { port: 'hamburg' })}
                className="mt-4 w-full py-2.5 rounded-xl border border-blue-200 text-[#0052CC] hover:bg-blue-50 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Parkplätze in Hamburg</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Warnemünde */}
          <div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col">
            <div className="h-40 overflow-hidden relative">
              <img 
                src="/assets/aistudio/port_warnemuende.png" 
                alt="Warnemünde Kreuzfahrtterminal" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-extrabold text-base text-slate-900">Warnemünde</h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Kreuzfahrtterminal Warnemünde
                </p>
              </div>
              <button
                onClick={() => onNavigate('search', { port: 'warnemuende' })}
                className="mt-4 w-full py-2.5 rounded-xl border border-blue-200 text-[#0052CC] hover:bg-blue-50 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Parkplätze in Warnemünde</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Bremerhaven */}
          <div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col">
            <div className="h-40 overflow-hidden relative">
              <img 
                src="/assets/aistudio/port_bremerhaven.png" 
                alt="Bremerhaven Columbus Cruise Center" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-extrabold text-base text-slate-900">Bremerhaven</h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Columbus Cruise Center
                </p>
              </div>
              <button
                onClick={() => onNavigate('search', { port: 'bremerhaven' })}
                className="mt-4 w-full py-2.5 rounded-xl border border-blue-200 text-[#0052CC] hover:bg-blue-50 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Parkplätze in Bremerhaven</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PARKPLATZARTEN – FINDE DIE PASSENDE OPTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            Parkplatzarten – finde die passende Option
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Vom günstigen Außenstellplatz bis zum komfortablen Valet-Service – vergleiche die verschiedenen Möglichkeiten.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Direkt am Terminal */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="h-32 overflow-hidden">
                <img 
                  src="/assets/aistudio/parkart_terminal.png" 
                  alt="Direkt am Terminal" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-1.5">
                  <span className="p-1.5 rounded-lg bg-blue-50 text-[#0052CC]">
                    <Users className="w-4 h-4" />
                  </span>
                  <h3>Direkt am Terminal</h3>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Auto abstellen und mit dem Gepäck zum Schiff laufen.
                </p>
              </div>
            </div>
            <div className="p-4 pt-0">
              <button
                onClick={() => onNavigate('search', { typeFilter: 'terminal' })}
                className="text-xs font-bold text-[#0052CC] hover:text-[#073B8A] flex items-center gap-1 cursor-pointer"
              >
                Terminal-Parkplätze <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Parkplatz mit Shuttle */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="h-32 overflow-hidden">
                <img 
                  src="/assets/aistudio/parkart_shuttle.png" 
                  alt="Parkplatz mit Shuttle" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-1.5">
                  <span className="p-1.5 rounded-lg bg-blue-50 text-[#0052CC]">
                    <Car className="w-4 h-4" />
                  </span>
                  <h3>Parkplatz mit Shuttle</h3>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Auto parken und bequem zum Kreuzfahrtterminal fahren.
                </p>
              </div>
            </div>
            <div className="p-4 pt-0">
              <button
                onClick={() => onNavigate('search', { typeFilter: 'shuttle' })}
                className="text-xs font-bold text-[#0052CC] hover:text-[#073B8A] flex items-center gap-1 cursor-pointer"
              >
                Shuttle-Parkplätze <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Halle & Parkhaus */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="h-32 overflow-hidden">
                <img 
                  src="/assets/aistudio/parkart_halle.png" 
                  alt="Halle & Parkhaus" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-1.5">
                  <span className="p-1.5 rounded-lg bg-blue-50 text-[#0052CC]">
                    <Building2 className="w-4 h-4" />
                  </span>
                  <h3>Halle & Parkhaus</h3>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Geschützte Parkmöglichkeiten für die Dauer deiner Kreuzfahrt.
                </p>
              </div>
            </div>
            <div className="p-4 pt-0">
              <button
                onClick={() => onNavigate('search', { typeFilter: 'halle' })}
                className="text-xs font-bold text-[#0052CC] hover:text-[#073B8A] flex items-center gap-1 cursor-pointer"
              >
                Überdachte Parkplätze <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Valet Parking */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="h-32 overflow-hidden">
                <img 
                  src="/assets/aistudio/parkart_valet.png" 
                  alt="Valet Parking" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-1.5">
                  <span className="p-1.5 rounded-lg bg-blue-50 text-[#0052CC]">
                    <Car className="w-4 h-4" />
                  </span>
                  <h3>Valet Parking</h3>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Fahrzeug am Übergabepunkt abgeben – wir kümmern uns.
                </p>
              </div>
            </div>
            <div className="p-4 pt-0">
              <button
                onClick={() => onNavigate('detail', { parkingId: 'kiel-valet-service' })}
                className="text-xs font-bold text-[#0052CC] hover:text-[#073B8A] flex items-center gap-1 cursor-pointer"
              >
                Valet-Angebote <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PASSEND ZU DEINER REEDEREI */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Passend zu deiner Reederei
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Finde Parkplätze für deine Kreuzfahrt – einfach nach Reederei filtern.
            </p>
          </div>
          <button 
            onClick={() => onNavigate('search', { port: 'kiel' })}
            className="text-xs sm:text-sm font-bold text-[#0052CC] hover:underline hidden sm:flex items-center gap-1 cursor-pointer"
          >
            Alle Reedereien anzeigen <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* AIDA */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="h-32 overflow-hidden bg-slate-100 flex items-center justify-center p-2">
                <img 
                  src="/assets/aistudio/reederei_aida.png" 
                  alt="AIDA Kreuzfahrtschiff" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="p-4">
                <h3 className="font-extrabold text-base text-slate-900">AIDA</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Parkplätze für deine AIDA Kreuzfahrt finden.
                </p>
              </div>
            </div>
            <div className="p-4 pt-0">
              <button
                onClick={() => onNavigate('reederei', { reedereiId: 'aida' })}
                className="text-xs font-bold text-[#0052CC] hover:text-[#073B8A] flex items-center gap-1 cursor-pointer"
              >
                AIDA Parkplätze <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Mein Schiff */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="h-32 overflow-hidden bg-slate-100 flex items-center justify-center p-2">
                <img 
                  src="/assets/aistudio/reederei_meinschiff.png" 
                  alt="Mein Schiff Kreuzfahrtschiff" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="p-4">
                <h3 className="font-extrabold text-base text-slate-900">Mein Schiff</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Parkplätze für Mein Schiff Kreuzfahrten vergleichen.
                </p>
              </div>
            </div>
            <div className="p-4 pt-0">
              <button
                onClick={() => onNavigate('reederei', { reedereiId: 'mein-schiff' })}
                className="text-xs font-bold text-[#0052CC] hover:text-[#073B8A] flex items-center gap-1 cursor-pointer"
              >
                Mein Schiff Parkplätze <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* MSC Cruises */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="h-32 overflow-hidden bg-slate-100 flex items-center justify-center p-2">
                <img 
                  src="/assets/aistudio/reederei_msc.png" 
                  alt="MSC Kreuzfahrtschiff" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="p-4">
                <h3 className="font-extrabold text-base text-slate-900">MSC Cruises</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Parkplätze für MSC Kreuzfahrten finden.
                </p>
              </div>
            </div>
            <div className="p-4 pt-0">
              <button
                onClick={() => onNavigate('reederei', { reedereiId: 'msc' })}
                className="text-xs font-bold text-[#0052CC] hover:text-[#073B8A] flex items-center gap-1 cursor-pointer"
              >
                MSC Parkplätze <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Costa */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="h-32 overflow-hidden bg-slate-100 flex items-center justify-center p-2">
                <img 
                  src="/assets/aistudio/reederei_costa.png" 
                  alt="Costa Kreuzfahrtschiff" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="p-4">
                <h3 className="font-extrabold text-base text-slate-900">Costa</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Parkplätze für Costa Kreuzfahrten finden.
                </p>
              </div>
            </div>
            <div className="p-4 pt-0">
              <button
                onClick={() => onNavigate('reederei', { reedereiId: 'costa' })}
                className="text-xs font-bold text-[#0052CC] hover:text-[#073B8A] flex items-center gap-1 cursor-pointer"
              >
                Costa Parkplätze <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SO EINFACH FUNKTIONIERT DER VERGLEICH (EXACT MATCH WITH STARTSEITE MAIN) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-8">
          So einfach funktioniert der Vergleich
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-start relative">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center p-4 relative group">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#0052CC] text-white flex items-center justify-center font-bold text-sm shadow-md">
                1
              </div>
              <div className="w-10 h-10 rounded-full bg-blue-50 text-[#0052CC] flex items-center justify-center">
                <Calendar className="w-5 h-5" />
              </div>
            </div>
            <h3 className="font-extrabold text-sm text-slate-900 mb-1">
              Hafen & Reisedaten eingeben
            </h3>
            <p className="text-xs text-slate-500 max-w-[220px] leading-relaxed">
              Wähle deinen Abfahrtshafen und den Reisezeitraum.
            </p>
            {/* Divider arrow on desktop */}
            <div className="hidden lg:block absolute -right-2 top-8 text-slate-300">
              <ChevronRight className="w-5 h-5" />
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center p-4 relative group">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#0052CC] text-white flex items-center justify-center font-bold text-sm shadow-md">
                2
              </div>
              <div className="w-10 h-10 rounded-full bg-blue-50 text-[#0052CC] flex items-center justify-center">
                <Search className="w-5 h-5" />
              </div>
            </div>
            <h3 className="font-extrabold text-sm text-slate-900 mb-1">
              Angebote vergleichen
            </h3>
            <p className="text-xs text-slate-500 max-w-[220px] leading-relaxed">
              Parkplätze nach Preis, Entfernung und Service filtern.
            </p>
            <div className="hidden lg:block absolute -right-2 top-8 text-slate-300">
              <ChevronRight className="w-5 h-5" />
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center p-4 relative group">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#0052CC] text-white flex items-center justify-center font-bold text-sm shadow-md">
                3
              </div>
              <div className="w-10 h-10 rounded-full bg-blue-50 text-[#0052CC] flex items-center justify-center">
                <Check className="w-5 h-5 stroke-[2.5]" />
              </div>
            </div>
            <h3 className="font-extrabold text-sm text-slate-900 mb-1">
              Parkplatz auswählen
            </h3>
            <p className="text-xs text-slate-500 max-w-[220px] leading-relaxed">
              Passendes Angebot online reservieren.
            </p>
            <div className="hidden lg:block absolute -right-2 top-8 text-slate-300">
              <ChevronRight className="w-5 h-5" />
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center text-center p-4 relative group">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#0052CC] text-white flex items-center justify-center font-bold text-sm shadow-md">
                4
              </div>
              <div className="w-10 h-10 rounded-full bg-blue-50 text-[#0052CC] flex items-center justify-center">
                <Ship className="w-5 h-5" />
              </div>
            </div>
            <h3 className="font-extrabold text-sm text-slate-900 mb-1">
              Kreuzfahrt genießen
            </h3>
            <p className="text-xs text-slate-500 max-w-[220px] leading-relaxed">
              Entspannt anreisen und in den Urlaub starten.
            </p>
          </div>
        </div>
      </section>

      {/* KUNDENSTIMMEN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Kundenstimmen
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Das sagen unsere Nutzer über kreuzfahrtparkplatz.de
            </p>
          </div>
          <button 
            onClick={() => onNavigate('search', { port: 'kiel' })}
            className="text-xs sm:text-sm font-bold text-[#0052CC] hover:underline flex items-center gap-1 cursor-pointer"
          >
            Alle Bewertungen ansehen <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="relative">
          {/* Slider Arrow Controls */}
          <div className="hidden sm:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10">
            <button 
              onClick={() => setTestimonialIdx(prev => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1))}
              className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md hover:bg-slate-50 text-slate-700 flex items-center justify-center cursor-pointer transition-transform active:scale-95"
              aria-label="Vorherige Kundenstimme"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>

          <div className="hidden sm:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10">
            <button 
              onClick={() => setTestimonialIdx(prev => (prev + 1) % TESTIMONIALS.length)}
              className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md hover:bg-slate-50 text-slate-700 flex items-center justify-center cursor-pointer transition-transform active:scale-95"
              aria-label="Nächste Kundenstimme"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TESTIMONIALS.slice(0, 3).map((item) => (
              <div key={item.id} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-semibold">
                    „{item.text}“
                  </p>
                </div>

                <div className="flex items-center gap-3 mt-5 pt-4 border-t border-slate-100">
                  <img 
                    src={item.avatar} 
                    alt={item.name} 
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-50"
                  />
                  <div>
                    <h4 className="font-bold text-xs text-slate-900">{item.name}</h4>
                    <p className="text-[11px] text-slate-500">{item.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
