import React, { useState } from 'react';
import { 
  Euro, 
  Users, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Globe, 
  Mail, 
  Share2, 
  BarChart3, 
  Hotel, 
  BookOpen, 
  Compass, 
  Check,
  Building
} from 'lucide-react';
import { ViewMode } from '../types';
import { AllianzLogo } from '../components/AllianzBanner';

interface AffiliateViewProps {
  onNavigate: (view: ViewMode, payload?: any) => void;
}

export const AffiliateView: React.FC<AffiliateViewProps> = ({ onNavigate }) => {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Form states
  const [company, setCompany] = useState('Kreuzfahrt-Blog Nordmeer');
  const [contactName, setContactName] = useState('Sarah Lindner');
  const [position, setPosition] = useState('Content Creator & Gründerin');
  const [email, setEmail] = useState('sarah@nordmeer-kreuzfahrten.de');
  const [phone, setPhone] = useState('0176 99887766');
  const [website, setWebsite] = useState('https://www.nordmeer-kreuzfahrten.de');
  const [partnerType, setPartnerType] = useState<string[]>(['Kreuzfahrt-Blog', 'Creator / Influencer']);
  const [channels, setChannels] = useState<string[]>(['Website', 'Newsletter', 'In Artikeln / Blogbeiträgen']);
  const [reach, setReach] = useState('10.000 – 50.000 Besucher');
  const [info, setInfo] = useState('Wir berichten über Ostsee- und Nordlandkreuzfahrten und möchten unseren Lesern die Parkplatzsuche erleichtern.');
  const [privacyAccepted, setPrivacyAccepted] = useState(true);

  const togglePartnerType = (t: string) => {
    setPartnerType(prev => 
      prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t]
    );
  };

  const toggleChannel = (c: string) => {
    setChannels(prev => 
      prev.includes(c) ? prev.filter(x => x !== c) : [...prev, c]
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
              Für Affiliate-Partner
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Jetzt Affiliate-Partner werden. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 via-sky-100 to-amber-200">
                Deine Empfehlung. Dein Zusatzverdienst.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-blue-100 max-w-xl font-normal leading-relaxed">
              Empfehle kreuzfahrtparkplatz.de deinen Lesern, Kunden oder Followern und profitiere von attraktiven Provisionen pro vermittelter Parkplatzbuchung.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  setShowForm(true);
                  const el = document.getElementById('affiliate-form');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="py-3.5 px-6 rounded-xl bg-[#FDB813] hover:bg-[#F5A600] active:scale-[0.98] text-slate-950 font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-amber-500/25 transition-all cursor-pointer"
              >
                <span>Jetzt bewerben</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl border border-white/20 text-xs">
                <AllianzLogo className="h-5" />
                <span className="text-blue-100 font-medium">Allianz Schutz für deine Kunden inklusive</span>
              </div>
            </div>
          </div>

          {/* Hero image preview */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl bg-white/5 backdrop-blur-xs">
              <img 
                src="/assets/aistudio/affiliate_couple_hero.png" 
                alt="Glückliches Paar auf Kreuzfahrt mit Laptop" 
                className="w-full h-80 object-cover"
              />
              <div className="p-5 bg-[#071C35]/90 border-t border-white/10 text-xs text-blue-100">
                <div className="font-bold text-white text-sm mb-1">Parkplätze vergleichen. Versichert parken.</div>
                <div>Empfehlen und verdienen mit attraktiven Lifetime-Provisionen.</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3 VALUE CARDS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0052CC] flex items-center justify-center flex-shrink-0">
              <Euro className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-sm text-slate-900">Attraktive Provisionen</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Verdiene bei jeder erfolgreichen Buchung über deinen persönlichen Partnerlink eine lukrative Provision.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0052CC] flex items-center justify-center flex-shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-sm text-slate-900">Echter Mehrwert für Kunden</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Deine Kunden erhalten einen transparenten Preisvergleich und kostenlosen Allianz Parkplatzschutz inklusive.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0052CC] flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-6 h-6 text-amber-500" />
            </div>
            <div>
              <h4 className="font-extrabold text-sm text-slate-900">Einfach & flexibel</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Fertige Werbebanner, Textlinks und Vorlagen. Schnelle Freischaltung und zuverlässige monatliche Auszahlung.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* BESONDERS INTERESSANT FÜR (7 TARGET GROUPS) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-14">
        <h3 className="text-xl font-black text-slate-900 text-center mb-2">
          Besonders interessant für
        </h3>
        <p className="text-xs text-slate-500 text-center mb-8">
          Vielfältige Möglichkeiten für Partner aus der Touristik- und Reisebranche
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 text-center">
          {[
            { icon: Building, title: 'Reisebüros', desc: 'Kreuzfahrtberatung um Parkplatzservice ergänzen' },
            { icon: Globe, title: 'Kreuzfahrtportale', desc: 'Hafen-Buchungslinks für Leser bereitstellen' },
            { icon: BookOpen, title: 'Kreuzfahrt-Blogs', desc: 'Artikel über Anreise monetarisieren' },
            { icon: Mail, title: 'Newsletter', desc: 'Reiseangebote mit Parkplatztipp anreichern' },
            { icon: Share2, title: 'Creator & Social', desc: 'Link in Bio und Story-Highlights einbinden' },
            { icon: Compass, title: 'Destinationsportale', desc: 'Hafeninfos um Parkplätze erweitern' },
            { icon: Hotel, title: 'Hotels am Hafen', desc: 'Gästen vor der Kreuzfahrt Parkmöglichkeiten bieten' }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-col items-center justify-between">
                <div>
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-[#0052CC] flex items-center justify-center mx-auto mb-2">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-xs text-slate-900 mb-1">{item.title}</h4>
                  <p className="text-[10px] text-slate-500 leading-tight">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* DASHBOARD PREVIEW */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12">
        <div className="bg-[#0A2540] text-white rounded-3xl p-8 sm:p-10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                Dein Affiliate-Bereich
              </span>
              <h3 className="text-2xl font-black">
                Behalte deine Erfolge jederzeit im Blick.
              </h3>
              <p className="text-xs text-blue-200 leading-relaxed">
                In deinem persönlichen Partner-Dashboard siehst du Klicks, vermittelte Buchungen, Conversion-Raten und offene Provisionsauszahlungen in Echtzeit.
              </p>
              <ul className="space-y-2 text-xs text-blue-100">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Transparente Cookie-Laufzeit (30 Tage)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Attraktive Staffel-Provisionen</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Pünktliche monatliche Überweisung</li>
              </ul>
            </div>

            <div className="lg:col-span-7 bg-white text-slate-900 rounded-2xl p-6 shadow-xl space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="font-black text-sm text-[#0A2540]">Affiliate-Bereich • Übersicht</div>
                <span className="text-xs text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">Status: Aktiv</span>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-xs text-slate-500 block">Klicks diesen Monat</span>
                  <span className="text-2xl font-black text-slate-900">1.248</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-xs text-slate-500 block">Buchungen</span>
                  <span className="text-2xl font-black text-slate-900">86</span>
                </div>
                <div className="p-3 bg-blue-50 rounded-xl border border-blue-200">
                  <span className="text-xs text-blue-700 font-semibold block">Provision</span>
                  <span className="text-2xl font-black text-[#0052CC]">1.032,00 €</span>
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-600 space-y-1">
                <div className="font-bold text-slate-800">Dein individueller Empfehlungs-Link:</div>
                <div className="font-mono text-[11px] bg-white p-2 rounded border border-slate-200 text-blue-700 truncate">
                  https://kreuzfahrtparkplatz.de/?ref=sarah-nordmeer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* APPLICATION FORM */}
      <div id="affiliate-form" className="max-w-4xl mx-auto px-4 sm:px-6 pt-14">
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <h3 className="text-xl font-black text-slate-900">
              Jetzt als Affiliate-Partner bewerben
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Fülle einfach das Formular aus. Wir schalten dein Partnerkonto kurzfristig frei.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 text-center bg-emerald-50 rounded-2xl border border-emerald-200 space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-lg font-black text-slate-900">Bewerbung erfolgreich übermittelt!</h4>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                Vielen Dank, <strong>{contactName}</strong>! Wir haben deine Anfrage für <strong>{company}</strong> erhalten. Du erhältst deinen Partner-Link und die Zugangsdaten in Kürze per E-Mail an <strong>{email}</strong>.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-3 px-5 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold"
              >
                Zurück zur Übersicht
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Unternehmen / Projekt / Website <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={company}
                  onChange={e => setCompany(e.target.value)}
                  placeholder="z. B. Reiseblog, Reisebüro, Website-Name"
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
                    Telefonnummer (optional)
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    placeholder="z. B. 0171 1234567"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#0052CC]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Website (optional)
                </label>
                <input
                  type="text"
                  value={website}
                  onChange={e => setWebsite(e.target.value)}
                  placeholder="z. B. https://www.deine-website.de"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#0052CC]"
                />
              </div>

              {/* Partner Type Checkboxes */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  Welche Art von Partner bist du? <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {[
                    'Reisebüro',
                    'Kreuzfahrtportal',
                    'Reiseportal',
                    'Reiseveranstalter',
                    'Kreuzfahrt-Blog',
                    'Kreuzfahrt-Community',
                    'Newsletter-Betreiber',
                    'Hotel / Unterkunft',
                    'Creator / Influencer',
                    'Sonstiges'
                  ].map((t, i) => (
                    <label key={i} className="flex items-center gap-2 cursor-pointer p-1 rounded hover:bg-slate-50">
                      <input
                        type="checkbox"
                        checked={partnerType.includes(t)}
                        onChange={() => togglePartnerType(t)}
                        className="w-4 h-4 text-[#0052CC] rounded"
                      />
                      <span className="text-slate-700">{t}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Channels */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  Wie möchtest du uns empfehlen? <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {[
                    'Website',
                    'In Artikeln / Blogbeiträgen',
                    'Newsletter',
                    'In Reiseunterlagen',
                    'Social Media',
                    'Persönlich gegenüber Kunden',
                    'Kunden-E-Mails',
                    'Sonstiges'
                  ].map((c, i) => (
                    <label key={i} className="flex items-center gap-2 cursor-pointer p-1 rounded hover:bg-slate-50">
                      <input
                        type="checkbox"
                        checked={channels.includes(c)}
                        onChange={() => toggleChannel(c)}
                        className="w-4 h-4 text-[#0052CC] rounded"
                      />
                      <span className="text-slate-700">{c}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Ungefähre Reichweite pro Monat <span className="text-red-500">*</span>
                </label>
                <select
                  value={reach}
                  onChange={e => setReach(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs bg-white"
                >
                  <option value="Unter 5.000 Besucher">Unter 5.000 Besucher</option>
                  <option value="5.000 – 10.000 Besucher">5.000 – 10.000 Besucher</option>
                  <option value="10.000 – 50.000 Besucher">10.000 – 50.000 Besucher</option>
                  <option value="Über 50.000 Besucher">Über 50.000 Besucher</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Weitere Informationen (optional)
                </label>
                <textarea
                  rows={3}
                  value={info}
                  onChange={e => setInfo(e.target.value)}
                  placeholder="Erzähl uns kurz etwas über dich und warum du KreuzfahrtParkplatz.de empfehlen möchtest."
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#0052CC]"
                />
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
  );
};
