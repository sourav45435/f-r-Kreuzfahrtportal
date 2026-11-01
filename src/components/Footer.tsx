import React from 'react';
import { ViewMode } from '../types';
import { 
  Ship, 
  CheckCircle2, 
  Search, 
  MapPin, 
  ShieldCheck, 
  Car, 
  Calendar, 
  Euro, 
  TrendingUp, 
  Users, 
  ArrowRight,
  Handshake,
  Settings
} from 'lucide-react';

interface FooterProps {
  currentView: ViewMode;
  onNavigate: (view: ViewMode, payload?: any) => void;
  terminalContext?: string;
  reedereiContext?: string;
}

export const Footer: React.FC<FooterProps> = ({
  currentView,
  onNavigate,
  terminalContext,
  reedereiContext
}) => {
  return (
    <footer className="bg-[#051937] text-white pt-12 pb-8 border-t border-[#0d2d5a] relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* TOP ROW: LOGO & ABOUT ON LEFT, 3 COLUMNS OF SEO LINKS ON RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-10">
          
          {/* LEFT COLUMN: BRAND & DESCRIPTION (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <button 
              onClick={() => onNavigate('home')} 
              className="text-left focus:outline-none block"
              aria-label="KreuzfahrtParkplatz.de Startseite"
            >
              <img 
                src="/assets/aistudio/Kreuzfahrtparkplatz.de_Logo_5a0a7486.png" 
                alt="KreuzfahrtParkplatz.de" 
                className="h-12 sm:h-14 w-auto object-contain"
              />
            </button>

            <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed max-w-md">
              Deutschlands Vergleichsportal für Kreuzfahrtparkplätze an allen wichtigen Häfen. Einfach, sicher und stressfrei parken – mit Allianz Parkplatzschutz inklusive.
            </p>

            <div className="space-y-2 pt-1 text-xs text-white">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#0052CC] flex items-center justify-center text-white text-[11px] font-bold flex-shrink-0">✓</span>
                <span className="font-medium text-slate-200">Große Auswahl an Parkplätzen</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#0052CC] flex items-center justify-center text-white text-[11px] font-bold flex-shrink-0">✓</span>
                <span className="font-medium text-slate-200">Sicher & versichert mit Allianz</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#0052CC] flex items-center justify-center text-white text-[11px] font-bold flex-shrink-0">✓</span>
                <span className="font-medium text-slate-200">Einfache und schnelle Online-Buchung</span>
              </div>
            </div>
          </div>

          {/* RIGHT 3 COLUMNS: BELIEBTE HÄFEN, LIEGEPLÄTZE, SCHIFFE (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-300">
            {/* Column 1: Beliebte Häfen */}
            <div>
              <h4 className="font-bold text-white text-sm mb-3">Beliebte Häfen</h4>
              <ul className="space-y-2 text-slate-300 text-[12px]">
                <li><button onClick={() => onNavigate('search', { port: 'kiel' })} className="hover:text-white transition-colors">Kreuzfahrtparkplatz Kiel</button></li>
                <li><button onClick={() => onNavigate('search', { port: 'hamburg' })} className="hover:text-white transition-colors">Kreuzfahrtparkplatz Hamburg</button></li>
                <li><button onClick={() => onNavigate('search', { port: 'warnemuende' })} className="hover:text-white transition-colors">Kreuzfahrtparkplatz Warnemünde</button></li>
                <li><button onClick={() => onNavigate('search', { port: 'bremerhaven' })} className="hover:text-white transition-colors">Kreuzfahrtparkplatz Bremerhaven</button></li>
                <li><button onClick={() => onNavigate('search', { port: 'rostock' })} className="hover:text-white transition-colors">Kreuzfahrtparkplatz Rostock</button></li>
                <li><button onClick={() => onNavigate('search', { port: 'travemuende' })} className="hover:text-white transition-colors">Kreuzfahrtparkplatz Travemünde</button></li>
              </ul>
            </div>

            {/* Column 2: Kreuzfahrt Liegeplätze */}
            <div>
              <h4 className="font-bold text-white text-sm mb-3">Kreuzfahrt Liegeplätze</h4>
              <ul className="space-y-2 text-slate-300 text-[12px]">
                <li><button onClick={() => onNavigate('terminal', { terminalId: 'norwegenkai' })} className="hover:text-white transition-colors">Kreuzfahrtparkplatz Kiel Norwegenkai</button></li>
                <li><button onClick={() => onNavigate('terminal', { terminalId: 'ostuferhafen' })} className="hover:text-white transition-colors">Kreuzfahrtparkplatz Kiel Ostuferhafen</button></li>
                <li><button onClick={() => onNavigate('terminal', { terminalId: 'schwedenkai' })} className="hover:text-white transition-colors">Kreuzfahrtparkplatz Kiel Schwedenkai</button></li>
                <li><span className="hover:text-white transition-colors cursor-pointer">Kreuzfahrtparkplatz Warnemünde Terminal 1</span></li>
                <li><span className="hover:text-white transition-colors cursor-pointer">Kreuzfahrtparkplatz Warnemünde Terminal 2</span></li>
                <li><span className="hover:text-white transition-colors cursor-pointer">Kreuzfahrtparkplatz Warnemünde P7</span></li>
                <li><span className="hover:text-white transition-colors cursor-pointer">Kreuzfahrtparkplatz Travemünde Ostpreußenkai</span></li>
                <li><span className="hover:text-white transition-colors cursor-pointer">Kreuzfahrtparkplatz Travemünde Skandinavienkai</span></li>
              </ul>
            </div>

            {/* Column 3: Kreuzfahrtschiffe */}
            <div>
              <h4 className="font-bold text-white text-sm mb-3">Kreuzfahrtschiffe</h4>
              <ul className="space-y-1.5 text-slate-300 text-[11px]">
                <li><button onClick={() => onNavigate('reederei', { reedereiId: 'aida' })} className="hover:text-white transition-colors">Kreuzfahrtparkplatz Kiel AIDA</button></li>
                <li><button onClick={() => onNavigate('reederei', { reedereiId: 'msc' })} className="hover:text-white transition-colors">Kreuzfahrtparkplatz Kiel MSC</button></li>
                <li><button onClick={() => onNavigate('reederei', { reedereiId: 'mein-schiff' })} className="hover:text-white transition-colors">Kreuzfahrtparkplatz Kiel Mein Schiff</button></li>
                <li><span className="hover:text-white transition-colors cursor-pointer">Kreuzfahrtparkplatz Warnemünde AIDA</span></li>
                <li><span className="hover:text-white transition-colors cursor-pointer">Kreuzfahrtparkplatz Warnemünde TUI</span></li>
                <li><span className="hover:text-white transition-colors cursor-pointer">Kreuzfahrtparkplatz Warnemünde MSC</span></li>
                <li><span className="hover:text-white transition-colors cursor-pointer">Kreuzfahrtparkplatz Warnemünde Sky Princess</span></li>
                <li><span className="hover:text-white transition-colors cursor-pointer">Kreuzfahrtparkplatz Travemünde MS Deutschland</span></li>
                <li><span className="hover:text-white transition-colors cursor-pointer">Kreuzfahrtparkplatz Travemünde MS Europa</span></li>
                <li><span className="hover:text-white transition-colors cursor-pointer">Kreuzfahrtparkplatz Travemünde Scenic Eclipse II</span></li>
                <li><span className="hover:text-white transition-colors cursor-pointer">Kreuzfahrtparkplatz Travemünde MS Hamburg</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* MIDDLE PANORAMIC HARBOUR BANNER: "Gute Reise!" */}
        <div className="relative rounded-2xl overflow-hidden mb-10 shadow-lg border border-[#0d2d5a]/60 h-36 sm:h-44 md:h-52">
          <img 
            src="/assets/aistudio/gute_reise_panorama.png" 
            alt="Gute Reise! Hafenpanorama mit Kreuzfahrtschiff" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* VIEW SPECIFIC HIGHLIGHT CONTENT */}
        {/* 1. STARTSEITE FOOTER (5 Columns) */}
        {currentView === 'home' && (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 text-xs text-slate-300 leading-relaxed pb-10 border-b border-[#0d2d5a]">
            {/* Col 1 */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <Search className="w-4 h-4 text-sky-400" />
                <h4>Kreuzfahrtparkplätze einfach vergleichen</h4>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Statt verschiedene Parkplatzanbieter einzeln zu suchen, kannst du auf kreuzfahrtparkplatz.de unterschiedliche Angebote übersichtlich miteinander vergleichen. Dabei spielen nicht nur die Preise eine Rolle. Je nach Angebot kannst du unter anderem vergleichen:
              </p>
              <p className="text-[11px] font-semibold text-slate-200">
                Entfernung zum Terminal • Shuttle-Service • Transferzeit • Außen- oder Hallenstellplatz • Schlüsselabgabe • Bewertungen • zusätzliche Leistungen
              </p>
              <p className="text-[11px] text-slate-300">
                So findest du den Parkplatz, der am besten zu deiner Reise passt.
              </p>
            </div>

            {/* Col 2 */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <MapPin className="w-4 h-4 text-sky-400" />
                <h4>Parkplätze in Kiel, Hamburg, Warnemünde und Bremerhaven</h4>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Viele Kreuzfahrten starten an den großen deutschen Kreuzfahrthäfen. Deshalb findest du bei uns gezielt Parkmöglichkeiten für:
              </p>
              <ul className="space-y-1.5 text-[11px] text-slate-200 font-medium">
                <li className="flex items-center gap-1.5"><span className="w-3.5 h-3.5 rounded-full bg-[#0052CC] flex items-center justify-center text-white text-[9px]">✓</span> Kreuzfahrtparkplatz Kiel</li>
                <li className="flex items-center gap-1.5"><span className="w-3.5 h-3.5 rounded-full bg-[#0052CC] flex items-center justify-center text-white text-[9px]">✓</span> Kreuzfahrtparkplatz Hamburg</li>
                <li className="flex items-center gap-1.5"><span className="w-3.5 h-3.5 rounded-full bg-[#0052CC] flex items-center justify-center text-white text-[9px]">✓</span> Kreuzfahrtparkplatz Warnemünde</li>
                <li className="flex items-center gap-1.5"><span className="w-3.5 h-3.5 rounded-full bg-[#0052CC] flex items-center justify-center text-white text-[9px]">✓</span> Kreuzfahrtparkplatz Bremerhaven</li>
              </ul>
              <p className="text-[11px] text-slate-300 pt-1">
                Auf den jeweiligen Hafenseiten kannst du die verfügbaren Anbieter, Parkplatzarten und Leistungen miteinander vergleichen.
              </p>
            </div>

            {/* Col 3 */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <Ship className="w-4 h-4 text-sky-400" />
                <h4>Parkplatz passend zu deiner Reederei</h4>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Auch die Reederei und das Abfahrtsterminal können für die Auswahl des passenden Parkplatzes entscheidend sein. Deshalb kannst du gezielt nach Parkmöglichkeiten für bekannte Reedereien wie <span className="font-semibold text-white">AIDA, Mein Schiff, MSC Cruises und Costa</span> suchen.
              </p>
            </div>

            {/* Col 4 */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <Car className="w-4 h-4 text-sky-400" />
                <h4>Terminal-Parking, Shuttle oder Valet?</h4>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Welche Parkart für dich am besten geeignet ist, hängt von deinen persönlichen Prioritäten ab:
              </p>
              <ul className="space-y-1.5 text-[11px] text-slate-200">
                <li className="flex items-start gap-1.5">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#0052CC] flex items-center justify-center text-white text-[9px] mt-0.5">✓</span>
                  <span><strong>Möglichst kurze Wege:</strong> Parkplatz direkt am Terminal</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#0052CC] flex items-center justify-center text-white text-[9px] mt-0.5">✓</span>
                  <span><strong>Günstiger parken:</strong> Außenstellplatz mit Shuttle</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#0052CC] flex items-center justify-center text-white text-[9px] mt-0.5">✓</span>
                  <span><strong>Wettergeschützt parken:</strong> Hallen- oder Parkhausangebote</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#0052CC] flex items-center justify-center text-white text-[9px] mt-0.5">✓</span>
                  <span><strong>Maximaler Komfort:</strong> verfügbare Valet-Angebote vergleichen</span>
                </li>
              </ul>
            </div>

            {/* Col 5 */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <ShieldCheck className="w-4 h-4 text-sky-400" />
                <h4>Mehr Sicherheit bei der Buchung über kreuzfahrtparkplatz.de</h4>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Ein besonderer Vorteil einer qualifizierenden Buchung über kreuzfahrtparkplatz.de ist <strong>der zusätzliche Fahrzeugschutz der Allianz</strong>.
              </p>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Damit möchten wir nicht nur helfen, einen passenden Parkplatz zu finden, sondern unseren Kunden auch während ihrer Kreuzfahrt ein zusätzliches gutes Gefühl geben.
              </p>
              <div className="pt-2 text-xs font-bold text-white">
                Parkplatz vergleichen.<br />
                Geschützt buchen.<br />
                Kreuzfahrt genießen.
              </div>
            </div>
          </div>
        )}

        {/* 2. KIEL SEARCH FOOTER (7 Columns - Kiel_Auswahl_Footer.png) */}
        {currentView === 'search' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-5 text-xs text-slate-300 leading-relaxed pb-10 border-b border-[#0d2d5a]">
            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-white font-bold text-[13px]">
                <Ship className="w-4 h-4 text-sky-400" />
                <h5>Kreuzfahrtparkplätze in Kiel – bequem parken</h5>
              </div>
              <p className="text-[11px] text-slate-300">
                Ob Ostseekai, Ostuferhafen, Norwegenkai oder Schwedenkai – auf kreuzfahrtparkplatz.de findest du passende Parkmöglichkeiten für deine Kreuzfahrt ab Kiel.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-white font-bold text-[13px]">
                <Search className="w-4 h-4 text-sky-400" />
                <h5>Kreuzfahrtparkplatz Kiel vergleichen</h5>
              </div>
              <p className="text-[11px] text-slate-300">
                Wenn du mit dem eigenen Auto zu deiner Kreuzfahrt nach Kiel anreist, hast du unterschiedliche Möglichkeiten: Terminal, Außenstellplätze mit Shuttle, überdachte Parkplätze, Parkhäuser und Valet-Services.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-white font-bold text-[13px]">
                <MapPin className="w-4 h-4 text-sky-400" />
                <h5>Parken am Kreuzfahrthafen Kiel</h5>
              </div>
              <p className="text-[11px] text-slate-300">
                Welcher Parkplatz für deine Reise am besten geeignet ist, hängt vom Abfahrtsterminal ab: Ostseekai, Ostuferhafen, Norwegenkai und Schwedenkai.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-white font-bold text-[13px]">
                <Ship className="w-4 h-4 text-sky-400" />
                <h5>Parkplatz für AIDA, Mein Schiff, MSC & weitere</h5>
              </div>
              <ul className="space-y-1 text-[11px] text-slate-300 font-medium">
                <li className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-[#0052CC] text-white text-[8px] flex items-center justify-center">✓</span> AIDA Parkplatz Kiel</li>
                <li className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-[#0052CC] text-white text-[8px] flex items-center justify-center">✓</span> Mein Schiff Parkplatz Kiel</li>
                <li className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-[#0052CC] text-white text-[8px] flex items-center justify-center">✓</span> MSC Parkplatz Kiel</li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-white font-bold text-[13px]">
                <Euro className="w-4 h-4 text-sky-400" />
                <h5>Was kostet ein Parkplatz in Kiel?</h5>
              </div>
              <p className="text-[11px] text-slate-300">
                Preise richten sich nach Parkart, Dauer und Terminalnähe. Günstige Außenstellplätze mit Shuttle beginnen ab 69 € für eine Woche.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-white font-bold text-[13px]">
                <ShieldCheck className="w-4 h-4 text-sky-400" />
                <h5>Mit Allianz Parkplatzschutz</h5>
              </div>
              <p className="text-[11px] text-slate-300">
                Ein besonderer Vorteil: Bei qualifizierenden Buchungen ist der Allianz Schutz ohne Zusatzkosten für dein Fahrzeug inklusive.
              </p>
            </div>

            <div className="space-y-2 bg-[#0A2540] p-3 rounded-xl border border-blue-900/60">
              <div className="flex items-center gap-1.5 text-white font-bold text-[13px]">
                <Calendar className="w-4 h-4 text-sky-400" />
                <h5>Frühzeitig reservieren</h5>
              </div>
              <p className="text-[11px] text-slate-300">
                Besonders in der Sommersaison empfiehlt sich eine frühzeitige Buchung.
              </p>
              <div className="pt-1 text-[11px] font-bold text-sky-300">
                Parkplatz vergleichen. Geschützt buchen.
              </div>
            </div>
          </div>
        )}

        {/* 3. TERMINAL CARDS FOOTER (Footer_f_r_Norwegenkai_Ostuferhafen_Schwedenkai_Ostseekai.png) */}
        {(currentView === 'terminal' || currentView === 'detail') && (
          <div className="pb-10 border-b border-[#0d2d5a]">
            <h4 className="text-sm font-bold text-sky-300 mb-4 tracking-wide uppercase">
              Kieler Kreuzfahrtterminals im Überblick
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Norwegenkai */}
              <div className="bg-[#0A2540] rounded-xl border border-blue-900/60 overflow-hidden flex flex-col justify-between">
                <div className="h-28 overflow-hidden relative">
                  <img src="/assets/aistudio/port_warnemuende.png" alt="Norwegenkai Kiel" className="w-full h-full object-cover" />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between space-y-2 text-xs">
                  <div>
                    <h5 className="font-bold text-white text-sm">Norwegenkai Kiel</h5>
                    <p className="text-[11px] text-slate-300 mt-1">Zentraler Liegeplatz für Kreuzfahrten und Fähren. Parkplätze in unmittelbarer Nähe.</p>
                  </div>
                  <button onClick={() => onNavigate('terminal', { terminalId: 'norwegenkai' })} className="text-sky-300 font-bold hover:underline flex items-center gap-1 text-[11px] pt-2">
                    Norwegenkai Parkplätze <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Ostuferhafen */}
              <div className="bg-[#0A2540] rounded-xl border border-blue-900/60 overflow-hidden flex flex-col justify-between">
                <div className="h-28 overflow-hidden relative">
                  <img src="/assets/aistudio/port_bremerhaven.png" alt="Ostuferhafen Kiel" className="w-full h-full object-cover" />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between space-y-2 text-xs">
                  <div>
                    <h5 className="font-bold text-white text-sm">Ostuferhafen Kiel</h5>
                    <p className="text-[11px] text-slate-300 mt-1">Moderner Liegeplatz mit Shuttlebus-Anbindung und bequemen Parkplätzen.</p>
                  </div>
                  <button onClick={() => onNavigate('terminal', { terminalId: 'ostuferhafen' })} className="text-sky-300 font-bold hover:underline flex items-center gap-1 text-[11px] pt-2">
                    Ostuferhafen Parkplätze <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Ostseekai */}
              <div className="bg-[#0A2540] rounded-xl border border-blue-900/60 overflow-hidden flex flex-col justify-between">
                <div className="h-28 overflow-hidden relative">
                  <img src="/assets/aistudio/port_kiel.png" alt="Ostseekai Kiel" className="w-full h-full object-cover" />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between space-y-2 text-xs">
                  <div>
                    <h5 className="font-bold text-white text-sm">Ostseekai Kiel</h5>
                    <p className="text-[11px] text-slate-300 mt-1">Das Hauptterminal in der Kieler City mit Valet-Parking und Fußwegen.</p>
                  </div>
                  <button onClick={() => onNavigate('terminal', { terminalId: 'ostseekai' })} className="text-sky-300 font-bold hover:underline flex items-center gap-1 text-[11px] pt-2">
                    Ostseekai Parkplätze <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Schwedenkai */}
              <div className="bg-[#0A2540] rounded-xl border border-blue-900/60 overflow-hidden flex flex-col justify-between">
                <div className="h-28 overflow-hidden relative">
                  <img src="/assets/aistudio/port_hamburg.png" alt="Schwedenkai Kiel" className="w-full h-full object-cover" />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between space-y-2 text-xs">
                  <div>
                    <h5 className="font-bold text-white text-sm">Schwedenkai Kiel</h5>
                    <p className="text-[11px] text-slate-300 mt-1">Citynaher Liegeplatz mit überdachten Parkhäusern und Shuttle-Services.</p>
                  </div>
                  <button onClick={() => onNavigate('terminal', { terminalId: 'schwedenkai' })} className="text-sky-300 font-bold hover:underline flex items-center gap-1 text-[11px] pt-2">
                    Schwedenkai Parkplätze <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 4. REEDEREI CARDS FOOTER (Footer_f_r_Aida_Mein_Schiff_MSC.png) */}
        {currentView === 'reederei' && (
          <div className="pb-10 border-b border-[#0d2d5a]">
            <h4 className="text-sm font-bold text-sky-300 mb-4 tracking-wide uppercase">
              Beliebte Reedereien ab Kiel
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* AIDA */}
              <div className="bg-[#0A2540] rounded-2xl border border-blue-900/60 p-5 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="h-10 flex items-center">
                    <img src="/assets/aistudio/reederei_aida.png" alt="AIDA" className="h-8 w-auto object-contain" />
                  </div>
                  <h5 className="font-bold text-white text-base">AIDA Kreuzfahrten ab Kiel</h5>
                  <p className="text-xs text-slate-300">Parkplätze vergleichen und buchen</p>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    <li className="flex items-center gap-1.5"><span className="text-[#0052CC] font-bold">✓</span> Parkplätze am Ostseekai, Ostuferhafen und Norwegenkai</li>
                    <li className="flex items-center gap-1.5"><span className="text-[#0052CC] font-bold">✓</span> Terminal-Parking, Shuttle, Parkhaus und Valet</li>
                    <li className="flex items-center gap-1.5"><span className="text-[#0052CC] font-bold">✓</span> Einfach und sicher buchen – mit Allianz Schutz</li>
                  </ul>
                </div>
                <button 
                  onClick={() => onNavigate('reederei', { reedereiId: 'aida' })}
                  className="mt-4 py-2 px-4 rounded-xl border border-blue-700 text-sky-200 hover:bg-blue-900/40 text-xs font-bold flex items-center justify-between"
                >
                  <span>AIDA Parkplätze in Kiel</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Mein Schiff */}
              <div className="bg-[#0A2540] rounded-2xl border border-blue-900/60 p-5 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="h-10 flex items-center">
                    <img src="/assets/aistudio/reederei_meinschiff.png" alt="Mein Schiff" className="h-8 w-auto object-contain" />
                  </div>
                  <h5 className="font-bold text-white text-base">Mein Schiff Kreuzfahrten ab Kiel</h5>
                  <p className="text-xs text-slate-300">Parkplätze vergleichen und buchen</p>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    <li className="flex items-center gap-1.5"><span className="text-[#0052CC] font-bold">✓</span> Parkplätze am Ostseekai und Ostuferhafen</li>
                    <li className="flex items-center gap-1.5"><span className="text-[#0052CC] font-bold">✓</span> Shuttle-, Hallen- und Valet-Parkplätze</li>
                    <li className="flex items-center gap-1.5"><span className="text-[#0052CC] font-bold">✓</span> Einfach und sicher buchen – mit Allianz Schutz</li>
                  </ul>
                </div>
                <button 
                  onClick={() => onNavigate('reederei', { reedereiId: 'mein-schiff' })}
                  className="mt-4 py-2 px-4 rounded-xl border border-blue-700 text-sky-200 hover:bg-blue-900/40 text-xs font-bold flex items-center justify-between"
                >
                  <span>Mein Schiff Parkplätze in Kiel</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* MSC Cruises */}
              <div className="bg-[#0A2540] rounded-2xl border border-blue-900/60 p-5 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="h-10 flex items-center">
                    <img src="/assets/aistudio/reederei_msc.png" alt="MSC Cruises" className="h-8 w-auto object-contain" />
                  </div>
                  <h5 className="font-bold text-white text-base">MSC Kreuzfahrten ab Kiel</h5>
                  <p className="text-xs text-slate-300">Parkplätze vergleichen und buchen</p>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    <li className="flex items-center gap-1.5"><span className="text-[#0052CC] font-bold">✓</span> Parkplätze am Ostseekai, Ostuferhafen und Norwegenkai</li>
                    <li className="flex items-center gap-1.5"><span className="text-[#0052CC] font-bold">✓</span> Terminal-Parking, Shuttle, Parkhaus und Valet</li>
                    <li className="flex items-center gap-1.5"><span className="text-[#0052CC] font-bold">✓</span> Einfach und sicher buchen – mit Allianz Schutz</li>
                  </ul>
                </div>
                <button 
                  onClick={() => onNavigate('reederei', { reedereiId: 'msc' })}
                  className="mt-4 py-2 px-4 rounded-xl border border-blue-700 text-sky-200 hover:bg-blue-900/40 text-xs font-bold flex items-center justify-between"
                >
                  <span>MSC Parkplätze in Kiel</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 5. BESTELLABLAUF FOOTER (Bestellablauf_Footer.png) */}
        {(currentView === 'booking-step-1' || currentView === 'booking-step-2' || currentView === 'booking-step-3') && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 text-xs text-slate-300 leading-relaxed pb-10 border-b border-[#0d2d5a]">
            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-white font-bold text-[13px]">
                <Handshake className="w-4 h-4 text-sky-400" />
                <h5>Einfacher Buchungs- und Zahlungsablauf</h5>
              </div>
              <p className="text-[11px] text-slate-300">
                Bei uns ist die Buchung deines Kreuzfahrtparkplatzes schnell, einfach und sicher. In nur wenigen Schritten buchst du online und erhältst sofort deine Bestätigung per E-Mail.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-white font-bold text-[13px]">
                <Search className="w-4 h-4 text-sky-400" />
                <h5>Kreuzfahrtparkplatz einfach vergleichen</h5>
              </div>
              <p className="text-[11px] text-slate-300">
                Übersichtliche Preise, Entfernung zum Terminal, Transferzeit und verifizierte Kundenbewertungen auf einen Blick.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-white font-bold text-[13px]">
                <MapPin className="w-4 h-4 text-sky-400" />
                <h5>Parkplätze an allen deutschen Häfen</h5>
              </div>
              <p className="text-[11px] text-slate-300">
                Geprüfte Anbieter in Kiel, Hamburg, Warnemünde und Bremerhaven.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-white font-bold text-[13px]">
                <Ship className="w-4 h-4 text-sky-400" />
                <h5>Passend zu deiner Reederei</h5>
              </div>
              <p className="text-[11px] text-slate-300">
                Optimiert für AIDA, Mein Schiff, MSC, Costa und Phoenix Reisen an allen Anlegestellen.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-white font-bold text-[13px]">
                <Car className="w-4 h-4 text-sky-400" />
                <h5>Terminal, Shuttle oder Valet?</h5>
              </div>
              <p className="text-[11px] text-slate-300">
                Finde die Parkart, die exakt zu deinen Reiseplänen und deinem Budget passt.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-white font-bold text-[13px]">
                <ShieldCheck className="w-4 h-4 text-sky-400" />
                <h5>Mit Allianz Parkplatzschutz</h5>
              </div>
              <p className="text-[11px] text-slate-300">
                Kostenlos inklusive – dein Fahrzeug ist während der gesamten Reise zusätzlich abgesichert.
              </p>
            </div>
          </div>
        )}

        {/* 6. PARTNER FOOTER (Partner_werden_Footer.png) */}
        {currentView === 'partner' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-xs text-slate-300 leading-relaxed pb-10 border-b border-[#0d2d5a]">
            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-white font-bold text-[13px]">
                <Handshake className="w-4 h-4 text-sky-400" />
                <h5>Parkplatz Anbieter werden</h5>
              </div>
              <p className="text-[11px] text-slate-300">
                Nutzen Sie die wachsende Nachfrage nach Kreuzfahrtparkplätzen und werden Sie Partner auf Deutschlands Vergleichsportal.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-white font-bold text-[13px]">
                <TrendingUp className="w-4 h-4 text-sky-400" />
                <h5>Ihre Vorteile auf einen Blick</h5>
              </div>
              <ul className="space-y-1 text-[11px] text-slate-300">
                <li>✓ Neue Kunden & höhere Auslastung</li>
                <li>✓ Präsenz an allen Häfen</li>
                <li>✓ Keine Grundgebühr</li>
                <li>✓ Persönlicher Ansprechpartner</li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-white font-bold text-[13px]">
                <Users className="w-4 h-4 text-sky-400" />
                <h5>Unsere Zielgruppe – Ihre Chancen</h5>
              </div>
              <p className="text-[11px] text-slate-300">
                Reiseaffine Kreuzfahrtgäste, die frühzeitig buchen und Wert auf verlässlichen Service und Sicherheit legen.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-white font-bold text-[13px]">
                <Settings className="w-4 h-4 text-sky-400" />
                <h5>So einfach funktioniert es</h5>
              </div>
              <ol className="space-y-1 text-[11px] text-slate-300 list-decimal list-inside">
                <li>Registrieren</li>
                <li>Angebote hinterlegen</li>
                <li>Sichtbar werden</li>
                <li>Neue Buchungen erhalten</li>
              </ol>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-white font-bold text-[13px]">
                <ShieldCheck className="w-4 h-4 text-sky-400" />
                <h5>Starker Partner an Ihrer Seite</h5>
              </div>
              <p className="text-[11px] text-slate-300">
                Jetzt Anbieter werden. Neue Kunden gewinnen. Einfach. Sicher. Erfolgreich.
              </p>
            </div>
          </div>
        )}

        {/* 7. AFFILIATE FOOTER (Affiliate-Partner_Footer.png) */}
        {currentView === 'affiliate' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-xs text-slate-300 leading-relaxed pb-10 border-b border-[#0d2d5a]">
            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-white font-bold text-[13px]">
                <Handshake className="w-4 h-4 text-sky-400" />
                <h5>Affiliate Partner werden</h5>
              </div>
              <p className="text-[11px] text-slate-300">
                Empfehlen Sie kreuzfahrtparkplatz.de und sichern Sie sich attraktive Provisionen für jede vermittelte Buchung.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-white font-bold text-[13px]">
                <TrendingUp className="w-4 h-4 text-sky-400" />
                <h5>Ihre Vorteile auf einen Blick</h5>
              </div>
              <ul className="space-y-1 text-[11px] text-slate-300">
                <li>✓ Attraktive Provisionen pro Buchung</li>
                <li>✓ Einfache und kostenlose Registrierung</li>
                <li>✓ Starke Marke mit hoher Conversion-Rate</li>
                <li>✓ Werbemittel und Tracking-Tools</li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-white font-bold text-[13px]">
                <Users className="w-4 h-4 text-sky-400" />
                <h5>Unsere Zielgruppe – Ihre Chance</h5>
              </div>
              <p className="text-[11px] text-slate-300">
                Kreuzfahrtgäste suchen gezielt nach sicheren und günstigen Parkmöglichkeiten an allen wichtigen Häfen.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-white font-bold text-[13px]">
                <Settings className="w-4 h-4 text-sky-400" />
                <h5>So einfach funktioniert es</h5>
              </div>
              <ol className="space-y-1 text-[11px] text-slate-300 list-decimal list-inside">
                <li>Kostenlos registrieren</li>
                <li>Werbemittel nutzen</li>
                <li>Besucher weiterleiten</li>
                <li>Provisionen verdienen</li>
              </ol>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-white font-bold text-[13px]">
                <ShieldCheck className="w-4 h-4 text-sky-400" />
                <h5>Starker Partner an Ihrer Seite</h5>
              </div>
              <p className="text-[11px] text-slate-300">
                Jetzt Affiliate Partner werden. Empfehlen. Provisionen sichern. Gemeinsam wachsen.
              </p>
            </div>
          </div>
        )}

        {/* BOTTOM ROW: COPYRIGHT, PAYMENT BADGES, LEGAL LINKS & COUNTRY SELECTOR */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-400">
          
          <div className="text-center md:text-left">
            <span>© 2026 KreuzfahrtParkplatz.de &nbsp;|&nbsp; Alle Rechte vorbehalten.</span>
          </div>

          {/* Payment Badges exact replica */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="bg-white text-[#1A1F71] font-black italic px-2.5 py-1 rounded-md text-[11px] shadow-xs border border-slate-200">
              VISA
            </span>
            <span className="bg-white px-2 py-1 rounded-md text-[11px] shadow-xs border border-slate-200 flex items-center">
              <span className="w-3.5 h-3.5 rounded-full bg-[#EB001B] inline-block -mr-1.5 opacity-90"></span>
              <span className="w-3.5 h-3.5 rounded-full bg-[#F79E1B] inline-block opacity-90"></span>
            </span>
            <span className="bg-white text-[#003087] font-bold px-2.5 py-1 rounded-md text-[11px] shadow-xs border border-slate-200 flex items-center gap-1">
              <span className="text-[#0079C1] font-black">Pay</span>Pal
            </span>
            <span className="bg-white text-slate-900 font-bold px-2.5 py-1 rounded-md text-[11px] shadow-xs border border-slate-200">
               Pay
            </span>
            <span className="bg-white text-slate-800 font-bold px-2.5 py-1 rounded-md text-[11px] shadow-xs border border-slate-200 flex items-center gap-0.5">
              <span className="text-[#4285F4]">G</span> Pay
            </span>
            <span className="bg-white text-slate-900 font-semibold px-2.5 py-1 rounded-md text-[10px] shadow-xs border border-slate-200 flex items-center gap-1">
              🏦 Banküberweisung
            </span>
          </div>

        </div>

        {/* LEGAL LINKS AND COUNTRY SELECTOR */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400 border-t border-[#0d2d5a]/60 mt-4">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1">
            <button onClick={() => {}} className="hover:text-white transition-colors">AGB</button>
            <span>|</span>
            <button onClick={() => {}} className="hover:text-white transition-colors">Datenschutz</button>
            <span>|</span>
            <button onClick={() => {}} className="hover:text-white transition-colors">Widerrufsbelehrung</button>
            <span>|</span>
            <button onClick={() => {}} className="hover:text-white transition-colors">Impressum</button>
            <span>|</span>
            <button onClick={() => {}} className="hover:text-white transition-colors">Cookie-Einstellungen</button>
            <span>|</span>
            <button onClick={() => {}} className="hover:text-white transition-colors">Barrierefreiheit</button>
            <span>|</span>
            <button onClick={() => onNavigate('affiliate')} className="hover:text-white transition-colors font-medium text-sky-300">Jetzt Affiliate Partner werden</button>
          </div>

          <div className="flex items-center gap-1.5 text-slate-300 bg-[#082046] px-3 py-1 rounded-lg border border-blue-900/60 cursor-pointer hover:border-blue-400">
            <span className="text-sm">🇩🇪</span>
            <span className="font-semibold text-xs">Deutschland</span>
            <span className="text-[10px]">∨</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
