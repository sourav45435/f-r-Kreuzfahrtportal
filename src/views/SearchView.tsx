import React, { useState, useMemo } from 'react';
import { 
  MapPin, 
  Calendar, 
  Ship, 
  Search, 
  CheckCircle2, 
  ShieldCheck, 
  Star, 
  ChevronRight, 
  Heart, 
  SlidersHorizontal, 
  RotateCcw, 
  Car, 
  Clock, 
  Building2, 
  ArrowRight,
  ChevronDown,
  Info,
  Lightbulb,
  ExternalLink
} from 'lucide-react';
import { ViewMode, ParkingOffer } from '../types';
import { PARKING_OFFERS, FAQS, TESTIMONIALS } from '../data/mockData';
import { AllianzLogo, AllianzBadgeCompact } from '../components/AllianzBanner';

interface SearchViewProps {
  onNavigate: (view: ViewMode, payload?: any) => void;
  onSelectOffer: (offer: ParkingOffer) => void;
  savedIds: string[];
  onToggleSave: (offer: ParkingOffer) => void;
  initialTypeFilter?: string;
  initialPort?: string;
}

export const SearchView: React.FC<SearchViewProps> = ({
  onNavigate,
  onSelectOffer,
  savedIds,
  onToggleSave,
  initialTypeFilter,
  initialPort = 'kiel'
}) => {
  const [selectedType, setSelectedType] = useState<string>(initialTypeFilter || 'all');
  const [maxPrice, setMaxPrice] = useState<number>(200);
  const [distanceFilter, setDistanceFilter] = useState<string>('all');
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<'recommended' | 'price-asc' | 'rating-desc'>('recommended');
  
  // Date and Reederei bar
  const [arrivalDate, setArrivalDate] = useState('2027-06-12');
  const [departureDate, setDepartureDate] = useState('2027-06-19');
  const [reederei, setReederei] = useState('');

  // Accordion FAQ state
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFeature = (feat: string) => {
    setSelectedFeatures(prev => 
      prev.includes(feat) ? prev.filter(f => f !== feat) : [...prev, feat]
    );
  };

  const resetFilters = () => {
    setSelectedType('all');
    setMaxPrice(300);
    setDistanceFilter('all');
    setSelectedRating(0);
    setSelectedFeatures([]);
  };

  const filteredOffers = useMemo(() => {
    return PARKING_OFFERS.filter(offer => {
      if (selectedType !== 'all' && offer.type !== selectedType) return false;
      if (offer.price7Days > maxPrice) return false;
      if (selectedRating > 0 && offer.rating < selectedRating) return false;
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price7Days - b.price7Days;
      if (sortBy === 'rating-desc') return b.rating - a.rating;
      return (b.isRecommended ? 1 : 0) - (a.isRecommended ? 1 : 0);
    });
  }, [selectedType, maxPrice, selectedRating, sortBy]);

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* BREADCRUMB & HEADER */}
      <div className="bg-white border-b border-slate-200 pt-5 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2">
            <button onClick={() => onNavigate('home')} className="hover:text-blue-600">Startseite</button>
            <ChevronRight className="w-3 h-3" />
            <span>Kreuzfahrthäfen</span>
            <ChevronRight className="w-3 h-3" />
            <span className="font-semibold text-slate-900">Kiel</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                Kreuzfahrt ab Kiel
              </h1>
              <p className="text-sm text-slate-600 mt-1 font-medium">
                Parkplätze vergleichen und sicher buchen.
              </p>
              
              <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 mt-3 text-xs font-semibold text-slate-700">
                <span className="flex items-center gap-1.5 text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Parkplätze am Ostseekai, Ostuferhafen, Norwegenkai und Schwedenkai
                </span>
                <span className="flex items-center gap-1.5 text-blue-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0052CC]" />
                  Mit dem Extra Schutz der Allianz – ohne Zusatzkosten.
                </span>
                <span className="flex items-center gap-1.5 text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Schnell, einfach und zum besten Preis.
                </span>
              </div>
            </div>
          </div>

          {/* SEARCH CRITERIA STRIP */}
          <div className="mt-6 p-3 bg-slate-100 rounded-2xl border border-slate-200 grid grid-cols-1 sm:grid-cols-4 gap-3 items-center">
            <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-xl border border-slate-200 text-xs font-semibold text-slate-800">
              <Calendar className="w-4 h-4 text-[#0052CC]" />
              <div>
                <span className="block text-[10px] text-slate-400 font-normal">Anreise</span>
                <span>{arrivalDate}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-xl border border-slate-200 text-xs font-semibold text-slate-800">
              <Calendar className="w-4 h-4 text-[#0052CC]" />
              <div>
                <span className="block text-[10px] text-slate-400 font-normal">Rückkehr</span>
                <span>{departureDate}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-xl border border-slate-200 text-xs font-semibold text-slate-800">
              <Ship className="w-4 h-4 text-[#0052CC]" />
              <div>
                <span className="block text-[10px] text-slate-400 font-normal">Reederei (optional)</span>
                <span>{reederei || 'z. B. AIDA / Mein Schiff'}</span>
              </div>
            </div>

            <button
              onClick={() => {}}
              className="py-2.5 px-4 bg-[#FDB813] hover:bg-[#F5A600] text-slate-950 font-extrabold text-xs rounded-xl flex items-center justify-center gap-2 shadow-xs transition-colors"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Angebote aktualisieren</span>
            </button>
          </div>
        </div>
      </div>

      {/* MAIN TWO-COLUMN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SIDEBAR FILTERS (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Map overview thumbnail */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs p-3">
              <div className="relative rounded-xl overflow-hidden aspect-16/10 bg-blue-50 border border-slate-200 flex items-center justify-center group">
                <img 
                  src="/assets/aistudio/kiel_map_preview.png" 
                  alt="Kieler Förde Hafenkarte mit Ostseekai, Schwedenkai, Norwegenkai" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-white text-[11px] font-bold">
                  <div className="flex items-center gap-1 bg-slate-900/80 px-2 py-1 rounded-md backdrop-blur-xs">
                    <MapPin className="w-3.5 h-3.5 text-red-500" />
                    <span>Kieler Förde</span>
                  </div>
                  <span className="text-[10px] bg-blue-600/90 px-2 py-1 rounded-md text-white font-semibold">
                    4 Terminals
                  </span>
                </div>
              </div>
            </div>

            {/* Filter Box */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2 font-black text-slate-900 text-sm">
                  <SlidersHorizontal className="w-4 h-4 text-[#0052CC]" />
                  <span>Filter</span>
                </div>
                <button
                  onClick={resetFilters}
                  className="text-xs font-semibold text-slate-400 hover:text-[#0052CC] flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Zurücksetzen</span>
                </button>
              </div>

              {/* 1. Parkplatzart */}
              <div>
                <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">
                  Parkplatzart
                </label>
                <div className="space-y-1.5 text-xs text-slate-700">
                  {[
                    { id: 'all', label: 'Alle anzeigen', count: 73 },
                    { id: 'terminal', label: 'Terminal-Parking', count: 18 },
                    { id: 'shuttle', label: 'Shuttle-Parkplätze', count: 48 },
                    { id: 'halle', label: 'Halle & Parkhaus', count: 32 },
                    { id: 'valet', label: 'Valet Parking', count: 12 }
                  ].map(item => (
                    <label key={item.id} className="flex items-center justify-between py-1 px-1.5 rounded hover:bg-slate-50 cursor-pointer">
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="parkingType"
                          checked={selectedType === item.id}
                          onChange={() => setSelectedType(item.id)}
                          className="w-4 h-4 text-[#0052CC] focus:ring-[#0052CC]"
                        />
                        <span className={selectedType === item.id ? 'font-bold text-slate-900' : ''}>{item.label}</span>
                      </div>
                      <span className="text-[11px] text-slate-400 font-mono">{item.count}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* 2. Preis Slider */}
              <div className="pt-3 border-t border-slate-100">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Preis (7 Tage)
                  </label>
                  <span className="text-xs font-bold text-[#0052CC]">0 € – {maxPrice} €</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="300"
                  step="10"
                  value={maxPrice}
                  onChange={e => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-[#0052CC] cursor-pointer"
                />
              </div>

              {/* 3. Entfernung zum Terminal */}
              <div className="pt-3 border-t border-slate-100">
                <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Entfernung zum Terminal
                </label>
                <div className="space-y-1 text-xs text-slate-700">
                  {[
                    { id: 'all', label: 'Alle anzeigen', count: 73 },
                    { id: 'direct', label: 'Direkt am Terminal', count: 18 },
                    { id: '2km', label: 'bis 2 km', count: 54 },
                    { id: '5km', label: 'bis 5 km', count: 28 },
                    { id: 'over5km', label: 'über 5 km', count: 17 }
                  ].map(dist => (
                    <label key={dist.id} className="flex items-center justify-between py-1 px-1.5 rounded hover:bg-slate-50 cursor-pointer">
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="distance"
                          checked={distanceFilter === dist.id}
                          onChange={() => setDistanceFilter(dist.id)}
                          className="w-4 h-4 text-[#0052CC]"
                        />
                        <span>{dist.label}</span>
                      </div>
                      <span className="text-[11px] text-slate-400 font-mono">{dist.count}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* 4. Ausstattung & Service */}
              <div className="pt-3 border-t border-slate-100">
                <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Ausstattung & Service
                </label>
                <div className="space-y-1 text-xs text-slate-700">
                  {[
                    { id: 'halle', label: 'Halle / überdacht', count: 38 },
                    { id: 'video', label: 'Videoüberwachung', count: 56 },
                    { id: '24h', label: '24/7 geöffnet', count: 61 },
                    { id: 'shuttle', label: 'Shuttle-Service inkl.', count: 47 },
                    { id: 'valet', label: 'Valet-Service', count: 12 },
                    { id: 'e-charge', label: 'E-Ladestation', count: 8 }
                  ].map(item => (
                    <label key={item.id} className="flex items-center justify-between py-1 px-1.5 rounded hover:bg-slate-50 cursor-pointer">
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={selectedFeatures.includes(item.id)}
                          onChange={() => toggleFeature(item.id)}
                          className="w-4 h-4 text-[#0052CC] rounded border-slate-300"
                        />
                        <span>{item.label}</span>
                      </div>
                      <span className="text-[11px] text-slate-400 font-mono">{item.count}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* 5. Kundenbewertung */}
              <div className="pt-3 border-t border-slate-100">
                <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Kundenbewertung
                </label>
                <div className="space-y-1 text-xs text-slate-700">
                  {[
                    { score: 0, label: 'Alle anzeigen', count: 73 },
                    { score: 4.5, label: 'ab 4,5 Sterne', count: 42 },
                    { score: 4.0, label: 'ab 4,0 Sterne', count: 63 },
                    { score: 3.5, label: 'ab 3,5 Sterne', count: 19 }
                  ].map(r => (
                    <label key={r.score} className="flex items-center justify-between py-1 px-1.5 rounded hover:bg-slate-50 cursor-pointer">
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="rating"
                          checked={selectedRating === r.score}
                          onChange={() => setSelectedRating(r.score)}
                          className="w-4 h-4 text-[#0052CC]"
                        />
                        <span>{r.label}</span>
                      </div>
                      <span className="text-[11px] text-slate-400 font-mono">{r.count}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Tipp Box */}
              <div className="bg-amber-50 rounded-xl p-3 border border-amber-200 flex items-start gap-2.5">
                <Lightbulb className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-xs text-amber-900">Tipp</h5>
                  <p className="text-[11px] text-amber-800 leading-snug mt-0.5">
                    Je früher du buchst, desto größer ist die Auswahl und desto günstiger sind die Preise.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: OFFERS LIST (8 cols on lg) */}
          <div className="lg:col-span-8 space-y-5">
            {/* Sort & Count Header */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-black text-slate-900">73 Parkplätze in Kiel</span>
                <span className="text-xs text-slate-500 font-medium">({filteredOffers.length} passend zu Filtern)</span>
              </div>

              <div className="flex items-center gap-2 text-xs">
                <span className="text-slate-500 font-medium">Sortieren nach:</span>
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value as any)}
                  className="bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 font-bold text-slate-800 focus:outline-none cursor-pointer"
                >
                  <option value="recommended">Unsere Empfehlung</option>
                  <option value="price-asc">Günstigster Preis</option>
                  <option value="rating-desc">Beste Bewertung</option>
                </select>
              </div>
            </div>

            {/* OFFERS CARDS */}
            <div className="space-y-4">
              {filteredOffers.map(offer => {
                const isSaved = savedIds.includes(offer.id);
                return (
                  <div 
                    key={offer.id}
                    className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all"
                  >
                    {/* Top yellow recommendation banner if recommended */}
                    {offer.badge && (
                      <div className="bg-[#FDB813] text-slate-950 px-4 py-1 text-[11px] font-black uppercase tracking-wider flex items-center gap-1.5">
                        <Star className="w-3.5 h-3.5 fill-slate-950" />
                        <span>{offer.badge}</span>
                      </div>
                    )}

                    <div className="p-5 flex flex-col sm:flex-row gap-5">
                      {/* Thumbnail & Gallery trigger */}
                      <div className="sm:w-56 h-44 rounded-xl overflow-hidden relative flex-shrink-0 bg-slate-100">
                        <img 
                          src={offer.image} 
                          alt={offer.name} 
                          className="w-full h-full object-cover"
                        />
                        <button
                          onClick={() => onToggleSave(offer)}
                          className="absolute top-2 right-2 p-2 rounded-full bg-white/90 hover:bg-white text-slate-600 shadow-xs"
                          aria-label="Speichern"
                        >
                          <Heart className={`w-4 h-4 ${isSaved ? 'fill-rose-500 text-rose-500' : ''}`} />
                        </button>

                        <div className="absolute bottom-2 left-2 bg-slate-950/80 text-white text-[10px] font-semibold px-2 py-0.5 rounded-md flex items-center gap-1">
                          <Car className="w-3 h-3 text-sky-400" />
                          <span>{offer.tagline || 'Parkplatz'}</span>
                        </div>
                      </div>

                      {/* Middle offer details */}
                      <div className="flex-1 min-w-0 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between">
                            <h3 className="text-lg font-black text-slate-900">{offer.name}</h3>
                          </div>

                          {/* Rating stars */}
                          <div className="flex items-center gap-1.5 mt-1">
                            <div className="flex items-center text-amber-400">
                              <Star className="w-4 h-4 fill-amber-400" />
                            </div>
                            <span className="text-xs font-bold text-slate-900">{offer.rating}</span>
                            <span className="text-xs text-slate-400">({offer.reviewCount} Bewertungen)</span>
                          </div>

                          {/* Location & Tags */}
                          <div className="mt-2.5 space-y-1 text-xs text-slate-600 font-medium">
                            <div className="flex items-center gap-1.5">
                              <MapPin className="w-3.5 h-3.5 text-[#0052CC]" />
                              <span>{offer.terminalName}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Clock className="w-3.5 h-3.5 text-slate-400" />
                              <span>{offer.distanceKmText}</span>
                            </div>
                          </div>

                          {/* Quick checklist */}
                          <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-slate-600">
                            <span className="bg-slate-100 px-2 py-0.5 rounded flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3 text-emerald-600" /> 24/7 geöffnet
                            </span>
                            <span className="bg-slate-100 px-2 py-0.5 rounded flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Videoüberwachung
                            </span>
                            <span className="bg-slate-100 px-2 py-0.5 rounded flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Schlüssel bleibt bei dir
                            </span>
                          </div>
                        </div>

                        {/* Allianz compact protection box */}
                        <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-blue-900 bg-blue-50/60 p-2 rounded-lg">
                          <div className="flex items-center gap-2">
                            <AllianzLogo className="h-4" />
                            <span className="font-semibold text-[11px]">Parkplatzschutz inklusive</span>
                          </div>
                          <span className="text-[10px] text-blue-700 hidden sm:inline">Ohne Zusatzkosten</span>
                        </div>
                      </div>

                      {/* Right column: Price and CTA */}
                      <div className="sm:w-44 flex flex-col justify-between sm:items-end sm:text-right border-t sm:border-t-0 sm:border-l border-slate-100 pt-3 sm:pt-0 sm:pl-4">
                        <div>
                          <div className="text-2xl font-black text-slate-900 tracking-tight">
                            {offer.price7Days} €
                          </div>
                          <div className="text-[11px] text-slate-500 font-medium">
                            für 7 Tage
                          </div>
                          <div className="text-[10px] font-bold text-emerald-600 flex items-center sm:justify-end gap-1 mt-1">
                            <CheckCircle2 className="w-3 h-3" />
                            <span>Kostenlos stornierbar</span>
                          </div>
                        </div>

                        <div className="mt-4 sm:mt-0 w-full space-y-2">
                          <button
                            onClick={() => onSelectOffer(offer)}
                            className="w-full py-2.5 px-3 bg-[#0052CC] hover:bg-[#073B8A] text-white font-extrabold text-xs rounded-xl shadow-xs transition-colors flex items-center justify-center gap-1"
                          >
                            <span>Verfügbarkeit prüfen</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => onNavigate('detail', { parkingId: offer.id })}
                            className="w-full py-1.5 text-center text-[11px] font-semibold text-slate-600 hover:text-[#0052CC]"
                          >
                            Details & Bilder ansehen
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pagination */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 flex items-center justify-between text-xs font-semibold text-slate-700 shadow-xs">
              <div className="flex items-center gap-1">
                <button className="px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 disabled:opacity-50">
                  ‹
                </button>
                <button className="px-3 py-1.5 rounded-lg bg-[#0052CC] text-white font-bold">1</button>
                <button className="px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50">2</button>
                <button className="px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50">3</button>
                <button className="px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50">4</button>
                <button className="px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50">5</button>
                <span className="px-2">...</span>
                <button className="px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50">15</button>
                <button className="px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50">
                  ›
                </button>
              </div>
              <span className="text-slate-400">73 Ergebnisse</span>
            </div>

            {/* PARKPLATZARTEN IN KIEL */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs mt-10">
              <h3 className="text-lg font-black text-slate-900 mb-1">Parkplatzarten in Kiel</h3>
              <p className="text-xs text-slate-500 mb-5">Finde die passende Parkmöglichkeit für deine Kreuzfahrt.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-xs text-slate-900 mb-1">Terminal-Parking</h4>
                    <p className="text-[11px] text-slate-500">Direkt am Terminal parken und mit Gepäck laufen.</p>
                  </div>
                  <button onClick={() => setSelectedType('terminal')} className="mt-3 text-[11px] font-bold text-[#0052CC] text-left">
                    Terminal-Parkplätze →
                  </button>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-xs text-slate-900 mb-1">Shuttle-Parkplätze</h4>
                    <p className="text-[11px] text-slate-500">Günstig parken und bequem mit Shuttle zum Terminal.</p>
                  </div>
                  <button onClick={() => setSelectedType('shuttle')} className="mt-3 text-[11px] font-bold text-[#0052CC] text-left">
                    Shuttle-Parkplätze →
                  </button>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-xs text-slate-900 mb-1">Halle & Parkhaus</h4>
                    <p className="text-[11px] text-slate-500">Geschützt und sicher – ideal für längere Reisen.</p>
                  </div>
                  <button onClick={() => setSelectedType('halle')} className="mt-3 text-[11px] font-bold text-[#0052CC] text-left">
                    Überdachte Parkplätze →
                  </button>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-xs text-slate-900 mb-1">Valet Parking</h4>
                    <p className="text-[11px] text-slate-500">Maximaler Komfort – Fahrzeug direkt am Terminal abgeben.</p>
                  </div>
                  <button onClick={() => setSelectedType('valet')} className="mt-3 text-[11px] font-bold text-[#0052CC] text-left">
                    Valet-Angebote →
                  </button>
                </div>
              </div>
            </div>

            {/* HÄUFIGE FRAGEN (FAQ) */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs mt-6">
              <h3 className="text-lg font-black text-slate-900 mb-4">Häufige Fragen zu Parkplätzen in Kiel</h3>
              
              <div className="space-y-3">
                {FAQS.map((faq, i) => (
                  <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full text-left p-3.5 bg-slate-50/50 hover:bg-slate-50 flex items-center justify-between text-xs font-bold text-slate-900"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                    </button>
                    {openFaq === i && (
                      <div className="p-3.5 bg-white text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* KUNDENSTIMMEN IN KIEL */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs mt-6">
              <h3 className="text-lg font-black text-slate-900 mb-1">Kundenstimmen</h3>
              <p className="text-xs text-slate-500 mb-4">Das sagen unsere Kreuzfahrt-Gäste</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {TESTIMONIALS.slice(0, 3).map(t => (
                  <div key={t.id} className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs flex flex-col justify-between">
                    <div>
                      <div className="flex text-amber-400 mb-1.5">
                        {[...Array(5)].map((_, idx) => (
                          <Star key={idx} className="w-3.5 h-3.5 fill-amber-400" />
                        ))}
                      </div>
                      <p className="text-slate-700 italic">„{t.text}“</p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-slate-200/60 font-semibold text-slate-800">
                      {t.name} <span className="text-slate-400 font-normal">• {t.location}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
