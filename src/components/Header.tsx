import React, { useState } from 'react';
import { 
  ChevronDown, 
  Heart, 
  User, 
  Menu, 
  X, 
  CheckCircle2, 
  ShieldCheck, 
  Phone
} from 'lucide-react';
import { ViewMode } from '../types';
import { CRUISE_PORTS, CRUISE_LINES, PORT_TERMINALS } from '../data/mockData';
import { AllianzLogo } from './AllianzBanner';

interface HeaderProps {
  currentView: ViewMode;
  onNavigate: (view: ViewMode, payload?: any) => void;
  savedCount?: number;
  onOpenSavedModal: () => void;
  onOpenLookupModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onNavigate,
  savedCount = 0,
  onOpenSavedModal,
  onOpenLookupModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hafenDropdown, setHafenDropdown] = useState(false);
  const [reedereiDropdown, setReedereiDropdown] = useState(false);
  const [parkartenDropdown, setParkartenDropdown] = useState(false);
  const [hilfeDropdown, setHilfeDropdown] = useState(false);

  const isCheckout = currentView === 'booking-step-1' || currentView === 'booking-step-2' || currentView === 'booking-step-3';
  const isB2B = currentView === 'partner' || currentView === 'affiliate';

  // 1. CHECKOUT HEADER (Distraction-free with 3 trust badges in center)
  if (isCheckout) {
    return (
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
          <button 
            onClick={() => onNavigate('home')} 
            className="flex items-center text-left group focus:outline-none"
            aria-label="KreuzfahrtParkplatz.de Startseite"
          >
            <img 
              src="/assets/aistudio/Kreuzfahrt_Parkplatz_Logo_067f618f.png" 
              alt="KreuzfahrtParkplatz.de" 
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </button>

          {/* 3 Center Trust Badges matching screenshots */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 text-xs font-semibold text-slate-800">
            <span className="flex items-center gap-1.5">
              <span className="w-4 h-4 rounded-full bg-[#0052CC] text-white flex items-center justify-center text-[10px] font-bold">✓</span>
              <span>Große Auswahl in Kiel</span>
            </span>

            <span className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-[#0052CC] text-white flex items-center justify-center text-[10px] font-bold">✓</span>
              <span>Sicher & versichert</span>
              <AllianzLogo className="h-4 w-auto inline-block ml-0.5" />
            </span>

            <span className="flex items-center gap-1.5">
              <span className="w-4 h-4 rounded-full bg-[#0052CC] text-white flex items-center justify-center text-[10px] font-bold">✓</span>
              <span>Einfache & schnelle Online-Buchung</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button 
              onClick={() => onNavigate('home')}
              className="text-xs font-bold text-slate-600 hover:text-[#0052CC] px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
            >
              Abbrechen
            </button>
          </div>
        </div>
      </header>
    );
  }

  // 2. B2B PARTNER & AFFILIATE HEADER
  if (isB2B) {
    return (
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
          <button 
            onClick={() => onNavigate('home')} 
            className="flex items-center text-left group focus:outline-none"
            aria-label="KreuzfahrtParkplatz.de Startseite"
          >
            <img 
              src="/assets/aistudio/Kreuzfahrt_Parkplatz_Logo_067f618f.png" 
              alt="KreuzfahrtParkplatz.de" 
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </button>

          <nav className="hidden lg:flex items-center gap-2 text-xs sm:text-[13px] font-semibold text-slate-700">
            <button 
              onClick={() => onNavigate('search', { port: 'kiel' })}
              className="px-3 py-2 rounded-lg hover:text-[#0052CC] hover:bg-slate-50 transition-colors"
            >
              Kreuzfahrtparkplätze
            </button>
            <button 
              onClick={() => onNavigate('search', { port: 'kiel' })}
              className="px-3 py-2 rounded-lg hover:text-[#0052CC] hover:bg-slate-50 transition-colors"
            >
              Häfen
            </button>
            <button 
              onClick={() => onNavigate('home')}
              className="px-3 py-2 rounded-lg hover:text-[#0052CC] hover:bg-slate-50 transition-colors"
            >
              Info
            </button>
            <button 
              onClick={onOpenLookupModal}
              className="px-3 py-2 rounded-lg hover:text-[#0052CC] hover:bg-slate-50 transition-colors"
            >
              Kundenservice
            </button>
            <button 
              onClick={() => onNavigate('partner')}
              className={`px-3 py-2 rounded-lg transition-colors border-b-2 ${
                currentView === 'partner' 
                  ? 'text-[#0052CC] border-[#0052CC] font-bold' 
                  : 'border-transparent text-slate-700 hover:text-[#0052CC]'
              }`}
            >
              Für Parkplatzanbieter
            </button>
            <button 
              onClick={() => onNavigate('affiliate')}
              className={`px-3 py-2 rounded-lg transition-colors border-b-2 ${
                currentView === 'affiliate' 
                  ? 'text-[#0052CC] border-[#0052CC] font-bold' 
                  : 'border-transparent text-slate-700 hover:text-[#0052CC]'
              }`}
            >
              Affiliate-Programm
            </button>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button 
              onClick={onOpenSavedModal}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs sm:text-sm font-semibold transition-colors"
              aria-label="Favoriten öffnen"
            >
              <Heart className="w-4 h-4 text-blue-600" />
              <span className="hidden sm:inline">Favoriten</span>
              {savedCount > 0 && (
                <span className="bg-blue-100 text-[#0052CC] px-1.5 py-0.2 rounded-full text-[10px] font-bold">
                  {savedCount}
                </span>
              )}
            </button>

            <button 
              onClick={onOpenLookupModal}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#0052CC] text-white hover:bg-blue-700 text-xs sm:text-sm font-semibold transition-colors shadow-xs"
            >
              <User className="w-4 h-4" />
              <span>Mein Konto</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 lg:hidden"
              aria-label="Menü umschalten"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>
    );
  }

  // 3. MAIN CONSUMER HEADER (Startseite, Suche, Detail, Terminal, Reederei)
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-xs">
      {/* Top USP Trust Strip */}
      <div className="bg-[#0A2540] text-white text-[11px] md:text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6 overflow-x-auto no-scrollbar py-0.5">
            <span className="flex items-center gap-1.5 whitespace-nowrap text-blue-100">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
              <span>Große Auswahl in Kiel & bundesweit</span>
            </span>
            <span className="flex items-center gap-1.5 whitespace-nowrap text-blue-100">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Sicher & versichert mit Allianz</span>
            </span>
            <span className="flex items-center gap-1.5 whitespace-nowrap text-blue-100 hidden sm:flex">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
              <span>Einfache & schnelle Online-Buchung</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-300 font-medium">
            <button 
              onClick={() => onNavigate('partner')}
              className="hover:text-white transition-colors hidden md:inline text-[11px]"
            >
              Für Parkplatzanbieter
            </button>
            <span className="text-slate-600 hidden md:inline">•</span>
            <button 
              onClick={() => onNavigate('affiliate')}
              className="hover:text-white transition-colors hidden md:inline text-[11px]"
            >
              Affiliate-Programm
            </button>
            <span className="text-slate-600 hidden md:inline">•</span>
            <span className="hidden sm:flex items-center gap-1 text-[11px]">
              <Phone className="w-3 h-3 text-amber-400" />
              <span>+49 431 12345678</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <button 
          onClick={() => onNavigate('home')} 
          aria-label="KreuzfahrtParkplatz.de Startseite"
          className="flex items-center text-left group focus:outline-none py-1"
        >
          <img 
            src="/assets/aistudio/Kreuzfahrt_Parkplatz_Logo_067f618f.png" 
            alt="KreuzfahrtParkplatz.de" 
            className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
          />
        </button>

        {/* Desktop Nav Items matching screenshot: Kreuzfahrthäfen v, Reedereien v, Parkarten v, Hilfe v */}
        <nav className="hidden lg:flex items-center gap-1 text-[13px] font-semibold text-slate-700">
          
          {/* Häfen Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setHafenDropdown(!hafenDropdown)}
              onMouseEnter={() => setHafenDropdown(true)}
              className="px-3.5 py-2 rounded-lg flex items-center gap-1 hover:text-[#0052CC] hover:bg-slate-50 transition-colors"
            >
              <span>Kreuzfahrthäfen</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${hafenDropdown ? 'rotate-180' : ''}`} />
            </button>

            {hafenDropdown && (
              <div 
                onMouseLeave={() => setHafenDropdown(false)}
                className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in slide-in-from-top-1"
              >
                <div className="px-3 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Kieler Kreuzfahrtterminals
                </div>
                {PORT_TERMINALS.map(t => (
                  <button
                    key={t.id}
                    onClick={() => {
                      setHafenDropdown(false);
                      onNavigate('terminal', { terminalId: t.id });
                    }}
                    className="w-full text-left px-3.5 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-[#0052CC] flex items-center justify-between"
                  >
                    <span>{t.name}</span>
                    <span className="text-[11px] text-slate-400 font-normal">ab {t.parkingCount} Plätze</span>
                  </button>
                ))}
                <div className="my-1 border-t border-slate-100"></div>
                <div className="px-3 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Weitere Häfen
                </div>
                {CRUISE_PORTS.filter(p => p.id !== 'kiel').map(p => (
                  <button
                    key={p.id}
                    onClick={() => {
                      setHafenDropdown(false);
                      onNavigate('search', { port: p.id });
                    }}
                    className="w-full text-left px-3.5 py-1.5 text-xs text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  >
                    Kreuzfahrtparkplatz {p.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Reedereien Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setReedereiDropdown(!reedereiDropdown)}
              onMouseEnter={() => setReedereiDropdown(true)}
              className="px-3.5 py-2 rounded-lg flex items-center gap-1 hover:text-[#0052CC] hover:bg-slate-50 transition-colors"
            >
              <span>Reedereien</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${reedereiDropdown ? 'rotate-180' : ''}`} />
            </button>

            {reedereiDropdown && (
              <div 
                onMouseLeave={() => setReedereiDropdown(false)}
                className="absolute top-full left-0 mt-1 w-60 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in"
              >
                {CRUISE_LINES.map(r => (
                  <button
                    key={r.id}
                    onClick={() => {
                      setReedereiDropdown(false);
                      onNavigate('reederei', { reedereiId: r.id });
                    }}
                    className="w-full text-left px-3.5 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-[#0052CC] flex items-center justify-between"
                  >
                    <span>{r.name} Parkplatz</span>
                    <span className="text-[11px] text-blue-600 font-medium">Kiel</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Parkarten Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setParkartenDropdown(!parkartenDropdown)}
              onMouseEnter={() => setParkartenDropdown(true)}
              className="px-3.5 py-2 rounded-lg flex items-center gap-1 hover:text-[#0052CC] hover:bg-slate-50 transition-colors"
            >
              <span>Parkarten</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${parkartenDropdown ? 'rotate-180' : ''}`} />
            </button>

            {parkartenDropdown && (
              <div 
                onMouseLeave={() => setParkartenDropdown(false)}
                className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in"
              >
                <button
                  onClick={() => {
                    setParkartenDropdown(false);
                    onNavigate('search', { typeFilter: 'terminal' });
                  }}
                  className="w-full text-left px-3.5 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-[#0052CC]"
                >
                  Direkt am Terminal
                </button>
                <button
                  onClick={() => {
                    setParkartenDropdown(false);
                    onNavigate('search', { typeFilter: 'shuttle' });
                  }}
                  className="w-full text-left px-3.5 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-[#0052CC]"
                >
                  Shuttle-Parkplätze
                </button>
                <button
                  onClick={() => {
                    setParkartenDropdown(false);
                    onNavigate('search', { typeFilter: 'halle' });
                  }}
                  className="w-full text-left px-3.5 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-[#0052CC]"
                >
                  Halle & Parkhaus
                </button>
                <button
                  onClick={() => {
                    setParkartenDropdown(false);
                    onNavigate('detail', { parkingId: 'valet-parking-kiel' });
                  }}
                  className="w-full text-left px-3.5 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-[#0052CC]"
                >
                  Valet Parking Service
                </button>
              </div>
            )}
          </div>

          {/* Hilfe Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setHilfeDropdown(!hilfeDropdown)}
              onMouseEnter={() => setHilfeDropdown(true)}
              className="px-3.5 py-2 rounded-lg flex items-center gap-1 hover:text-[#0052CC] hover:bg-slate-50 transition-colors"
            >
              <span>Hilfe</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${hilfeDropdown ? 'rotate-180' : ''}`} />
            </button>

            {hilfeDropdown && (
              <div 
                onMouseLeave={() => setHilfeDropdown(false)}
                className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in text-xs"
              >
                <button
                  onClick={() => { setHilfeDropdown(false); onOpenLookupModal(); }}
                  className="w-full text-left px-3.5 py-2 text-slate-700 hover:bg-blue-50 hover:text-[#0052CC]"
                >
                  Buchung suchen & verwalten
                </button>
                <button
                  onClick={() => { setHilfeDropdown(false); onNavigate('home'); }}
                  className="w-full text-left px-3.5 py-2 text-slate-700 hover:bg-blue-50 hover:text-[#0052CC]"
                >
                  Häufige Fragen (FAQ)
                </button>
                <div className="px-3.5 py-2 text-[11px] text-slate-500 border-t border-slate-100">
                  Kundenservice: <br />
                  <span className="font-bold text-slate-900">+49 431 12345678</span>
                </div>
              </div>
            )}
          </div>

        </nav>

        {/* Action Buttons: Merkliste & Mein Konto */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button 
            onClick={onOpenSavedModal}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs sm:text-sm font-semibold transition-colors"
            aria-label="Merkliste öffnen"
          >
            <Heart className="w-4 h-4 text-blue-600" />
            <span className="hidden sm:inline">Merkliste ({savedCount})</span>
            <span className="sm:hidden bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded-full text-[11px] font-bold">
              {savedCount}
            </span>
          </button>

          <button 
            onClick={onOpenLookupModal}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800 text-xs sm:text-sm font-semibold transition-colors shadow-xs"
          >
            <User className="w-4 h-4 text-amber-400" />
            <span>Mein Konto</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 lg:hidden"
            aria-label="Menü umschalten"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-3 animate-in slide-in-from-top duration-150">
          <div className="grid grid-cols-2 gap-2 text-sm font-medium">
            <button
              onClick={() => { setMobileMenuOpen(false); onNavigate('home'); }}
              className="p-2 rounded-lg text-left bg-slate-50 text-slate-800 hover:bg-blue-50"
            >
              Startseite
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onNavigate('search', { port: 'kiel' }); }}
              className="p-2 rounded-lg text-left bg-blue-50 text-blue-700 font-bold"
            >
              Parkplätze Kiel
            </button>
          </div>

          <div className="border-t border-slate-100 pt-2">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Terminals Kiel</div>
            <div className="grid grid-cols-2 gap-1.5 text-xs">
              {PORT_TERMINALS.map(t => (
                <button
                  key={t.id}
                  onClick={() => { setMobileMenuOpen(false); onNavigate('terminal', { terminalId: t.id }); }}
                  className="p-2 text-left rounded-md hover:bg-slate-100 text-slate-700"
                >
                  {t.name}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-100 pt-2">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Reedereien</div>
            <div className="grid grid-cols-2 gap-1.5 text-xs">
              {CRUISE_LINES.map(r => (
                <button
                  key={r.id}
                  onClick={() => { setMobileMenuOpen(false); onNavigate('reederei', { reedereiId: r.id }); }}
                  className="p-2 text-left rounded-md hover:bg-slate-100 text-slate-700"
                >
                  {r.name} Parkplatz
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-100 pt-3 flex gap-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onNavigate('partner'); }}
              className="flex-1 py-2 text-center text-xs font-bold rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50"
            >
              Für Anbieter
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onNavigate('affiliate'); }}
              className="flex-1 py-2 text-center text-xs font-bold rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50"
            >
              Affiliate
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
