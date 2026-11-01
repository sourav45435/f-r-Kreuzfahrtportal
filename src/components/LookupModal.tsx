import React, { useState } from 'react';
import { X, Search, CheckCircle2, FileText, ArrowRight, ShieldCheck } from 'lucide-react';

interface LookupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onFoundBooking: (bookingId: string) => void;
}

export const LookupModal: React.FC<LookupModalProps> = ({
  isOpen,
  onClose,
  onFoundBooking
}) => {
  const [query, setQuery] = useState('KP-2027-018453');
  const [email, setEmail] = useState('thomas.mueller@beispiel.de');
  const [searched, setSearched] = useState(false);

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl relative">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
          aria-label="Schließen"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-4 pb-3 border-b border-slate-100 flex items-center">
          <img 
            src="/assets/aistudio/Kreuzfahrt_Parkplatz_Logo_067f618f.png" 
            alt="KreuzfahrtParkplatz.de" 
            className="h-8 w-auto object-contain"
          />
        </div>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0052CC] flex items-center justify-center font-bold">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">Mein Konto & Buchung finden</h3>
            <p className="text-xs text-slate-500">Buchungsbestätigung und Parkschein aufrufen</p>
          </div>
        </div>

        <form onSubmit={handleSearch} className="space-y-3">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Buchungsnummer (z. B. KP-2027-018453)
            </label>
            <input 
              type="text" 
              value={query} 
              onChange={e => setQuery(e.target.value)}
              placeholder="KP-2027-018453"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0052CC] text-sm font-mono uppercase"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              E-Mail-Adresse
            </label>
            <input 
              type="email" 
              value={email} 
              onChange={e => setEmail(e.target.value)}
              placeholder="name@beispiel.de"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0052CC] text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2.5 rounded-xl bg-[#0052CC] hover:bg-[#073B8A] text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-xs"
          >
            <Search className="w-4 h-4" />
            <span>Buchung aufrufen</span>
          </button>
        </form>

        {searched && (
          <div className="mt-4 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 animate-in fade-in">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Gefundene Buchung: KP-2027-018453</span>
            </div>
            <p className="text-xs text-slate-600 mt-1">
              Port Parking Kiel • 12.06.2027 – 19.06.2027 • Herr Thomas Müller
            </p>
            <button
              onClick={() => {
                onFoundBooking(query || 'KP-2027-018453');
                onClose();
              }}
              className="mt-2.5 w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold flex items-center justify-center gap-1.5"
            >
              Buchungsbestätigung ansehen <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
