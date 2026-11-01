import React, { useState } from 'react';
import { 
  Users, 
  TrendingUp, 
  ShieldCheck, 
  Settings, 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  Phone, 
  Mail, 
  Upload, 
  Sparkles,
  BarChart3,
  Calendar,
  CreditCard,
  Check
} from 'lucide-react';
import { ViewMode } from '../types';
import { AllianzLogo } from '../components/AllianzBanner';

interface PartnerViewProps {
  onNavigate: (view: ViewMode, payload?: any) => void;
}

export const PartnerView: React.FC<PartnerViewProps> = ({ onNavigate }) => {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Form states
  const [companyName, setCompanyName] = useState('Hafenparkplatz Kiel Nord');
  const [contactName, setContactName] = useState('Markus Weber');
  const [position, setPosition] = useState('Inhaber / Geschäftsführer');
  const [email, setEmail] = useState('m.weber@hafenparkplatz-kiel.de');
  const [phone, setPhone] = useState('0431 9876543');
  const [address, setAddress] = useState('Uferstraße 44, 24103 Kiel');
  const [port, setPort] = useState('kiel');
  const [distance, setDistance] = useState('1,5 km');
  const [parkingTypes, setParkingTypes] = useState<string[]>(['Außenstellplätze', 'Shuttle-Service zum Hafen']);
  const [capacity, setCapacity] = useState('120');
  const [notes, setNotes] = useState('Umzäuntes Betriebsgelände, 24/7 besetzt, eigener Shuttlebus vorhanden.');
  const [privacyAccepted, setPrivacyAccepted] = useState(true);

  const toggleParkingType = (type: string) => {
    setParkingTypes(prev => 
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-[#07244C] via-[#0052CC] to-[#0A2540] text-white py-14 px-4 border-b border-blue-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-5">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-300/20">
              Für Parkplatzanbieter
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Mehr Buchungen für deinen Parkplatz. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 via-sky-100 to-amber-200">
                Deine Stellplätze. Unsere Kreuzfahrtkunden.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-blue-100 max-w-xl font-normal leading-relaxed">
              Verbinde deinen Parkplatz mit tausenden Kreuzfahrtgästen an allen wichtigen Häfen. Einfach registrieren, Angebote hinterlegen und neue Kunden gewinnen.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  setShowForm(true);
                  const el = document.getElementById('partner-form');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="py-3.5 px-6 rounded-xl bg-[#FDB813] hover:bg-[#F5A600] active:scale-[0.98] text-slate-950 font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-amber-500/25 transition-all cursor-pointer"
              >
                <span>Jetzt Partner werden</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl border border-white/20 text-xs">
                <AllianzLogo className="h-5" />
                <span className="text-blue-100 font-medium">Allianz Schutz für deine Kunden inklusive</span>
              </div>
            </div>
          </div>

          {/* Hero image preview / Operator card */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl bg-white/5 backdrop-blur-xs">
              <img 
                src="/assets/aistudio/partner_operator_hero.png" 
                alt="Parkplatzbetreiber mit Tablet vor Kreuzfahrtschiff" 
                className="w-full h-80 object-cover"
              />
              <div className="p-5 bg-[#071C35]/90 border-t border-white/10 text-xs text-blue-100">
                <div className="font-bold text-white text-sm mb-1">Dein Parkplatz trifft auf unsere Kreuzfahrtkunden</div>
                <div>Wir vermitteln geprüfte, kaufbereite Gäste ohne Grundgebühr.</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4 USP PILLS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-md flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#0052CC] flex items-center justify-center flex-shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-xs text-slate-900">Große Reichweite</h4>
              <p className="text-[11px] text-slate-500">Tausende Kreuzfahrtkunden suchen täglich.</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-md flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#0052CC] flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-xs text-slate-900">Mehr Buchungen</h4>
              <p className="text-[11px] text-slate-500">Starke Online-Präsenz & hohe Nachfrage.</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-md flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-blue-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-xs text-slate-900">Versicherung inklusive</h4>
              <p className="text-[11px] text-slate-500">Allianz Schutz ohne Mehrkosten für dich.</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-md flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#0052CC] flex items-center justify-center flex-shrink-0">
              <Settings className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-xs text-slate-900">Einfach & effizient</h4>
              <p className="text-[11px] text-slate-500">Einfache Verwaltung im Partnerbereich.</p>
            </div>
          </div>
        </div>
      </div>

      {/* LEAD-MASCHINE STATS BANNER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12">
        <div className="bg-[#0A2540] text-white rounded-3xl p-8 sm:p-10 shadow-lg relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-6 space-y-2">
              <h3 className="text-2xl sm:text-3xl font-black">
                Wir sind deine Kreuzfahrtkunden-Leadmaschine.
              </h3>
              <p className="text-xs sm:text-sm text-blue-200/90 leading-relaxed">
                Jeden Tag suchen hunderte Kreuzfahrtgäste auf kreuzfahrtparkplatz.de nach einem Parkplatz. Wir bringen diese Kunden direkt zu dir – ohne dass du selbst aufwändig werben musst.
              </p>
            </div>

            <div className="lg:col-span-6 grid grid-cols-3 gap-3 text-center">
              <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                <span className="text-2xl sm:text-3xl font-black text-sky-300 block">100.000+</span>
                <span className="text-[11px] text-blue-100">Besucher pro Monat</span>
              </div>
              <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                <span className="text-2xl sm:text-3xl font-black text-sky-300 block">10.000+</span>
                <span className="text-[11px] text-blue-100">Parkplatzanfragen</span>
              </div>
              <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                <span className="text-xl sm:text-2xl font-black text-emerald-400 block">Hohe Rate</span>
                <span className="text-[11px] text-blue-100">Conversion zu Buchungen</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* APPLICATION FORM & PROCESS */}
      <div id="partner-form" className="max-w-7xl mx-auto px-4 sm:px-6 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT 6 COLS: BENEFITS & STEPPER */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs space-y-4">
              <h3 className="text-lg font-black text-slate-900 border-b border-slate-100 pb-3">
                Deine Vorteile auf einen Blick
              </h3>

              <ul className="space-y-3 text-xs text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Große Reichweite:</strong> Direkter Zugang zu kaufbereiten Kreuzfahrturlaubern.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Allianz Schutz:</strong> Alle Fahrzeuge zusätzlich abgesichert – Vertrauen schafft Buchungen.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Keine Grundgebühr:</strong> Du zahlst nur eine faire Erfolgsprovision pro tatsächlich vermittelter Buchung.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Einfache Verwaltung:</strong> Preise, Kontingente und Verfügbarkeiten in Echtzeit steuern.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Persönlicher Ansprechpartner:</strong> Feste Betreuung und technischer Support.</span>
                </li>
              </ul>
            </div>

            {/* PARTNER PORTAL DASHBOARD MOCKUP */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs">
              <h4 className="font-black text-sm text-slate-900 mb-1">Volle Kontrolle in deinem Partnerbereich</h4>
              <p className="text-xs text-slate-500 mb-4">Übersichtliches Dashboard für deinen täglichen Betrieb.</p>

              <div className="bg-slate-900 rounded-2xl p-4 text-white text-xs space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="font-bold text-sky-400">Partnerbereich • KreuzfahrtParkplatz.de</span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-mono">Live</span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-slate-800/80 p-2.5 rounded-xl">
                    <span className="text-lg font-black text-white">182</span>
                    <span className="text-[10px] text-slate-400 block">Buchungen diesen Monat</span>
                  </div>
                  <div className="bg-slate-800/80 p-2.5 rounded-xl">
                    <span className="text-lg font-black text-emerald-400">21.360 €</span>
                    <span className="text-[10px] text-slate-400 block">Umsatz diesen Monat</span>
                  </div>
                  <div className="bg-slate-800/80 p-2.5 rounded-xl">
                    <span className="text-lg font-black text-sky-400">100 %</span>
                    <span className="text-[10px] text-slate-400 block">Allianz geschützt</span>
                  </div>
                </div>

                <div className="bg-slate-800/50 p-2.5 rounded-xl text-[11px] text-slate-300 space-y-1">
                  <div className="flex justify-between">
                    <span>Nächste Schiffsanläufe:</span>
                    <span className="text-white font-bold">Mein Schiff 7 (Ostseekai)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Erwartete Ankünfte heute:</span>
                    <span className="text-emerald-400 font-bold">34 Fahrzeuge</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT 7 COLS: REGISTRATION FORM */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <div className="mb-6">
                <h3 className="text-xl font-black text-slate-900">
                  Jetzt als Parkplatzanbieter bewerben
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Fülle einfach das Formular aus. Wir melden uns umgehend bei dir.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 text-center bg-emerald-50 rounded-2xl border border-emerald-200 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-black text-slate-900">Vielen Dank für deine Bewerbung!</h4>
                  <p className="text-xs text-slate-600 max-w-md mx-auto">
                    Wir haben deine Angaben zu <strong>{companyName}</strong> erhalten. Unser Partner-Team prüft deine Daten und meldet sich innerhalb von 24 Stunden bei dir unter <strong>{email}</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-3 px-5 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold"
                  >
                    Weitere Bewerbung senden
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Name des Parkplatzes / Unternehmens <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={companyName}
                      onChange={e => setCompanyName(e.target.value)}
                      placeholder="z. B. Hafenparkplatz Kiel"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#0052CC]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Ansprechpartner <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={contactName}
                        onChange={e => setContactName(e.target.value)}
                        placeholder="Vor- und Nachname"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#0052CC]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Position (optional)
                      </label>
                      <input
                        type="text"
                        value={position}
                        onChange={e => setPosition(e.target.value)}
                        placeholder="z. B. Inhaber, Geschäftsführer"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#0052CC]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        E-Mail-Adresse <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="z. B. name@unternehmen.de"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#0052CC]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Telefonnummer <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        placeholder="z. B. 0171 1234567"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#0052CC]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Adresse des Parkplatzes <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={address}
                      onChange={e => setAddress(e.target.value)}
                      placeholder="Straße, Hausnummer, PLZ, Ort"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#0052CC]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        In der Nähe von welchem Hafen? <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={port}
                        onChange={e => setPort(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs bg-white"
                      >
                        <option value="kiel">Kiel</option>
                        <option value="hamburg">Hamburg</option>
                        <option value="warnemuende">Warnemünde</option>
                        <option value="bremerhaven">Bremerhaven</option>
                        <option value="travemuende">Travemünde</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Entfernung zum Hafen
                      </label>
                      <input
                        type="text"
                        value={distance}
                        onChange={e => setDistance(e.target.value)}
                        placeholder="z. B. 1,5 km oder 5 Min."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs"
                      />
                    </div>
                  </div>

                  {/* Parkplatzarten Checkboxes */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2">
                      Welche Parkplatzarten bietest du an? (Mehrfachauswahl möglich)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {[
                        'Außenstellplätze',
                        'Parkhaus / Parkhalle',
                        'Shuttle-Service zum Hafen',
                        'Valet-Parking (Fahrzeugübernahme)',
                        'Überdachte Stellplätze',
                        'E-Ladestationen vorhanden'
                      ].map((item, idx) => (
                        <label key={idx} className="flex items-center gap-2 cursor-pointer p-1 rounded hover:bg-slate-50">
                          <input
                            type="checkbox"
                            checked={parkingTypes.includes(item)}
                            onChange={() => toggleParkingType(item)}
                            className="w-4 h-4 text-[#0052CC] rounded"
                          />
                          <span className="text-slate-700">{item}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Wie viele Stellplätze stehen zur Verfügung? <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={capacity}
                      onChange={e => setCapacity(e.target.value)}
                      placeholder="z. B. 50 oder 200"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Weitere Informationen zu deinem Parkplatz
                    </label>
                    <textarea
                      rows={3}
                      value={notes}
                      onChange={e => setNotes(e.target.value)}
                      placeholder="z. B. besondere Ausstattungen, Öffnungszeiten, Sicherheitsmaßnahmen, Services ..."
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#0052CC]"
                    />
                  </div>

                  {/* Drag and Drop mockup */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Bilder deines Parkplatzes (optional)
                    </label>
                    <div className="border-2 border-dashed border-slate-300 hover:border-blue-400 rounded-2xl p-4 text-center cursor-pointer transition-colors bg-slate-50/50">
                      <Upload className="w-6 h-6 text-slate-400 mx-auto mb-1" />
                      <span className="text-xs font-semibold text-slate-700 block">Bilder hochladen oder per Drag & Drop</span>
                      <span className="text-[10px] text-slate-400 block">(JPG, PNG, max. 10 MB pro Datei)</span>
                    </div>
                  </div>

                  <label className="flex items-start gap-2.5 text-xs text-slate-700 pt-2 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={privacyAccepted}
                      onChange={e => setPrivacyAccepted(e.target.checked)}
                      className="w-4 h-4 text-[#0052CC] rounded mt-0.5"
                    />
                    <span>
                      Ich habe die <a href="#datenschutz" onClick={e => e.preventDefault()} className="text-[#0052CC] underline font-semibold">Datenschutzerklärung</a> zur Kenntnis genommen und stimme der Verarbeitung meiner Angaben zur Kontaktaufnahme zu. <span className="text-red-500">*</span>
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#FDB813] hover:bg-[#F5A600] active:scale-[0.99] text-slate-950 font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 transition-all cursor-pointer"
                  >
                    <span>Jetzt Bewerbung senden</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
