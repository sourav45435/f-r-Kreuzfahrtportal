import React from 'react';
import { ShieldCheck, ShieldAlert, Car, Sparkles, CheckCircle2 } from 'lucide-react';

export const AllianzLogo: React.FC<{ className?: string }> = ({ className = 'h-7' }) => (
  <div className={`inline-flex items-center gap-2 font-bold tracking-tight text-[#003781] ${className}`}>
    <span className="text-xl md:text-2xl font-black tracking-tighter">Allianz</span>
    {/* Allianz 3-pillar circle emblem */}
    <div className="w-6 h-6 rounded-full border-2 border-[#003781] flex items-center justify-center gap-0.5 p-0.5">
      <span className="w-0.5 h-3 bg-[#003781] rounded-full"></span>
      <span className="w-0.5 h-3.5 bg-[#003781] rounded-full"></span>
      <span className="w-0.5 h-3 bg-[#003781] rounded-full"></span>
    </div>
  </div>
);

export const AllianzBadgeCompact: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`inline-flex items-center gap-2 bg-[#EBF3FF] border border-[#BFDBFE] text-[#003781] px-3 py-1.5 rounded-lg text-xs md:text-sm font-semibold ${className}`}>
    <AllianzLogo className="h-5" />
    <span className="h-3.5 w-px bg-blue-300"></span>
    <span>Parkplatzschutz inklusive</span>
  </div>
);

export const AllianzBanner: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  if (compact) {
    return (
      <div className="bg-[#EBF3FC] border border-[#BFDBFE] rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#003781]">
        <div className="flex items-center gap-3">
          <AllianzLogo className="h-7" />
          <div className="text-left">
            <h4 className="font-bold text-sm md:text-base text-slate-900 flex items-center gap-1.5">
              <span>Allianz Parkplatzschutz inklusive</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-600 inline" />
            </h4>
            <p className="text-xs text-slate-600">Extra geschützt während der Parkdauer – ohne Zusatzkosten.</p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-xs font-medium text-slate-700">
          <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Schutz bei Diebstahl</span>
          <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Parkschäden</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#EBF3FC] border border-[#CDE1F8] rounded-2xl p-6 md:p-7 shadow-sm">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div className="flex items-start md:items-center gap-5">
          <div className="p-3 bg-white rounded-xl shadow-xs border border-blue-100 flex-shrink-0">
            <AllianzLogo className="h-8 md:h-10" />
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold text-slate-900 tracking-tight">
              Dein Kreuzfahrtparkplatz – mit extra Schutz von der Allianz.
            </h3>
            <p className="text-xs md:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
              Bei jeder Buchung über kreuzfahrtparkplatz.de ist dein Fahrzeug während der gesamten Parkdauer zusätzlich gegen typische Risiken abgesichert – ohne Zusatzkosten für dich.
            </p>
          </div>
        </div>

        {/* 4 Feature Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full lg:w-auto">
          <div className="bg-white/90 border border-blue-100 rounded-xl p-3 text-center flex flex-col items-center justify-center min-w-[120px]">
            <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center mb-1.5">
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="text-[11px] font-semibold text-slate-800 leading-tight">Schutz vor Kratzer & Parkschäden</span>
          </div>

          <div className="bg-white/90 border border-blue-100 rounded-xl p-3 text-center flex flex-col items-center justify-center min-w-[120px]">
            <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center mb-1.5">
              <ShieldAlert className="w-4 h-4" />
            </div>
            <span className="text-[11px] font-semibold text-slate-800 leading-tight">Versicherung bei Einbruch & Diebstahl</span>
          </div>

          <div className="bg-white/90 border border-blue-100 rounded-xl p-3 text-center flex flex-col items-center justify-center min-w-[120px]">
            <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center mb-1.5">
              <Car className="w-4 h-4" />
            </div>
            <span className="text-[11px] font-semibold text-slate-800 leading-tight">Für die gesamte Parkdauer</span>
          </div>

          <div className="bg-white/90 border border-blue-100 rounded-xl p-3 text-center flex flex-col items-center justify-center min-w-[120px]">
            <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center mb-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
            </div>
            <span className="text-[11px] font-semibold text-slate-800 leading-tight">Ohne zusätzliche Kosten für dich</span>
          </div>
        </div>
      </div>
    </div>
  );
};
