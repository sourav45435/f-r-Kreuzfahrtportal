import { ParkingOffer, CruiseLine, PortTerminal } from '../types';

export const CRUISE_PORTS = [
  { 
    id: 'kiel', 
    name: 'Kiel', 
    terminals: ['Ostseekai', 'Ostuferhafen', 'Norwegenkai', 'Schwedenkai'],
    image: '/assets/aistudio/port_kiel.png',
    parkingCount: 73
  },
  { 
    id: 'hamburg', 
    name: 'Hamburg', 
    terminals: ['HafenCity', 'Steinwerder', 'Altona'],
    image: '/assets/aistudio/port_hamburg.png',
    parkingCount: 52
  },
  { 
    id: 'warnemuende', 
    name: 'Warnemünde', 
    terminals: ['Kreuzfahrtterminal Warnemünde', 'Terminal 1', 'Terminal 2'],
    image: '/assets/aistudio/port_warnemuende.png',
    parkingCount: 38
  },
  { 
    id: 'bremerhaven', 
    name: 'Bremerhaven', 
    terminals: ['Columbus Cruise Center'],
    image: '/assets/aistudio/port_bremerhaven.png',
    parkingCount: 29
  },
  { 
    id: 'travemuende', 
    name: 'Travemünde', 
    terminals: ['Ostpreußenkai', 'Skandinavienkai'],
    image: '/assets/aistudio/port_kiel.png',
    parkingCount: 18
  },
  { 
    id: 'rostock', 
    name: 'Rostock', 
    terminals: ['Überseehafen Rostock'],
    image: '/assets/aistudio/port_warnemuende.png',
    parkingCount: 14
  },
];

export const CRUISE_LINES: CruiseLine[] = [
  {
    id: 'aida',
    name: 'AIDA',
    logo: '/assets/aistudio/reederei_aida.png',
    ships: ['AIDAprima', 'AIDAnova', 'AIDAperla', 'AIDAbella', 'AIDAdiva', 'AIDAluna', 'AIDAmar', 'AIDAsol', 'AIDAstella'],
    defaultTerminal: 'Ostseekai',
    description: 'AIDA Cruises startet in Kiel meist am Ostseekai oder Ostuferhafen. Parkplätze mit Shuttle oder Valet direkt buchbar.'
  },
  {
    id: 'mein-schiff',
    name: 'Mein Schiff',
    logo: '/assets/aistudio/reederei_meinschiff.png',
    ships: ['Mein Schiff 1', 'Mein Schiff 4', 'Mein Schiff 6', 'Mein Schiff 7', 'Mein Schiff Relax'],
    defaultTerminal: 'Ostseekai',
    description: 'Die Mein Schiff Flotte legt häufig am Ostseekai ab. Sichere Parkplätze inklusive Allianz-Schutz.'
  },
  {
    id: 'msc',
    name: 'MSC Cruises',
    logo: '/assets/aistudio/reederei_msc.png',
    ships: ['MSC Euribia', 'MSC Preziosa', 'MSC Grandiosa', 'MSC Virtuosa', 'MSC Poesia'],
    defaultTerminal: 'Ostuferhafen',
    description: 'MSC startet regelmäßig in spannende Routen in Nordeuropa und ins Baltikum ab Ostuferhafen und Ostseekai.'
  },
  {
    id: 'costa',
    name: 'Costa',
    logo: '/assets/aistudio/reederei_costa.png',
    ships: ['Costa Diadema', 'Costa Fascinosa', 'Costa Toscana', 'Costa Smeralda'],
    defaultTerminal: 'Ostseekai',
    description: 'Beliebte Kreuzfahrten ab Kiel mit Costa. Vergleiche Parkplätze direkt am Terminal oder mit Transfer.'
  }
];

export const PORT_TERMINALS: PortTerminal[] = [
  {
    id: 'ostseekai',
    name: 'Ostseekai Kiel',
    port: 'kiel',
    description: 'Der Ostseekai ist eines der wichtigsten Kreuzfahrtterminals in Kiel und liegt direkt in der Innenstadt. Wir zeigen dir die besten Parkmöglichkeiten in unmittelbarer Nähe zum Terminal.',
    popularShips: ['AIDAprima', 'Mein Schiff 7', 'MSC Euribia'],
    parkingCount: 24,
    image: '/assets/aistudio/port_kiel.png'
  },
  {
    id: 'ostuferhafen',
    name: 'Ostuferhafen Kiel',
    port: 'kiel',
    description: 'Der Ostuferhafen ist ein moderner Kreuzfahrthafen in Kiel auf der östlichen Seite der Förde. Erlebe bequemes Parken mit modernem Shuttle-Transfer direkt zum Terminal.',
    popularShips: ['MSC Euribia', 'Costa Diadema', 'AIDAperla'],
    parkingCount: 16,
    image: '/assets/aistudio/port_bremerhaven.png'
  },
  {
    id: 'norwegenkai',
    name: 'Norwegenkai Kiel',
    port: 'kiel',
    description: 'Der Norwegenkai ist eines der zentralen Kreuzfahrt- und Fährterminals in Kiel und liegt nur wenige Gehminuten von der Innenstadt entfernt.',
    popularShips: ['Mein Schiff 1', 'Color Magic', 'Color Fantasy'],
    parkingCount: 18,
    image: '/assets/aistudio/port_warnemuende.png'
  },
  {
    id: 'schwedenkai',
    name: 'Schwedenkai Kiel',
    port: 'kiel',
    description: 'Der Schwedenkai ist ein weiterer wichtiger Liegeplatz in Kiel mit bester Verkehrsanbindung. Hier legen internationale Schiffe und Stena Line Fähren an.',
    popularShips: ['AIDAdiva', 'Stena Scandinavica', 'Stena Germanica'],
    parkingCount: 21,
    image: '/assets/aistudio/port_hamburg.png'
  }
];

export const PARKING_OFFERS: ParkingOffer[] = [
  {
    id: 'port-parking-kiel',
    name: 'Port Parking Kiel',
    tagline: 'Außenparkplatz mit Shuttle',
    badge: 'UNSERE EMPFEHLUNG',
    port: 'kiel',
    terminal: 'ostseekai',
    terminalName: 'Ostseekai Kiel',
    type: 'shuttle',
    price7Days: 139,
    originalPrice: 159,
    rating: 4.8,
    reviewCount: 1248,
    distanceTerminalMin: 2,
    distanceKmText: '1,8 km bis zum Ostseekai (ca. 6 Minuten Shuttle-Fahrt)',
    image: '/assets/aistudio/port_parking_main_photo.png',
    gallery: [
      '/assets/aistudio/port_parking_main_photo.png',
      '/assets/aistudio/port_kiel.png',
      '/assets/aistudio/parkart_shuttle.png',
      '/assets/aistudio/parkart_halle.png',
      '/assets/aistudio/hero_ostseekai_banner.png'
    ],
    isRecommended: true,
    features: [
      'Sicherer, beleuchteter Parkplatz',
      'Kostenloser Shuttle zum Terminal',
      'Schlüssel behalten (Schlüsselabgabe nicht erforderlich)',
      'Videoüberwachung 24/7',
      'Flexible Stornierung & Umbuchung',
      'Allianz Parkplatzschutz inklusive'
    ],
    description: 'Port Parking Kiel bietet dir eine komfortable und sichere Parkmöglichkeit für deine Kreuzfahrt ab Kiel. Nach deiner Ankunft stellst du dein Fahrzeug auf dem gebuchten Parkplatz ab. Anschließend bringt dich der Shuttle-Service bequem und in wenigen Minuten zum Kreuzfahrtterminal. Nach deiner Kreuzfahrt wirst du am vereinbarten Treffpunkt wieder abgeholt und zurück zu deinem Fahrzeug gebracht.',
    address: 'Musterstraße 25, 24143 Kiel',
    openHours: '05:00 – 24:00 Uhr (an Schiffsanläufen angepasst)',
    shuttleFrequency: 'Alle 15 bis 20 Minuten im Pendelverkehr'
  },
  {
    id: 'valet-parking-kiel',
    name: 'Valet Parking Kiel',
    tagline: 'Fahrzeugübergabe direkt am Terminal',
    badge: 'BESONDERS KOMFORTABEL',
    port: 'kiel',
    terminal: 'ostseekai',
    terminalName: 'Ostseekai Kiel',
    type: 'valet',
    price7Days: 179,
    originalPrice: 199,
    rating: 4.9,
    reviewCount: 412,
    distanceTerminalMin: 0,
    distanceKmText: 'Direkt am Kreuzfahrtterminal (0 m)',
    image: '/assets/aistudio/valet_main_photo.png',
    gallery: [
      '/assets/aistudio/valet_main_photo.png',
      '/assets/aistudio/port_kiel.png',
      '/assets/aistudio/hero_ostseekai_banner.png',
      '/assets/aistudio/parkart_valet.png'
    ],
    isRecommended: true,
    features: [
      'Du fährst direkt zum Terminal',
      'Wir übernehmen dein Fahrzeug persönlich vor Ort',
      'Sicherer, eingezäunter & bewachter Parkplatz',
      'Schlüsselabgabe beim geschulten Valet-Fahrer mit Protokoll',
      'Bei Rückkehr steht dein Fahrzeug pünktlich bereit',
      'Flexible Stornierung & Allianz Schutz'
    ],
    description: 'Mit dem Valet-Service beginnt deine Kreuzfahrt besonders komfortabel. Du fährst mit deinem eigenen Fahrzeug direkt zum vereinbarten Übergabepunkt am Kreuzfahrtterminal. Dort erwartet dich ein Mitarbeiter des Valet-Services und übernimmt dein Fahrzeug sowie deinen Autoschlüssel. Nach der Übergabe kannst du mit deinem Gepäck direkt zum Check-in gehen. Bei deiner Rückkehr steht dein Fahrzeug wieder am Terminal für dich bereit.',
    address: 'Kreuzfahrtterminal Ostseekai, Kaistraße 51, 24103 Kiel',
    openHours: '24/7 abgestimmt auf Schiffsein- und -ausläufe',
    shuttleFrequency: 'Kein Shuttle nötig – Fahrzeugübergabe direkt vor dem Terminal',
    valetInstructions: 'Fahre direkt auf die Vorfahrt des Ostseekais. Unser geschulter Valet-Mitarbeiter im blauen KreuzfahrtParkplatz-Dress nimmt dein Fahrzeug nach kurzer Sichtprüfung entgegen.'
  },
  {
    id: 'kiel-valet-service',
    name: 'Kiel Valet Service',
    tagline: 'Fahrzeugübergabe direkt am Terminal',
    badge: 'Valet Parking',
    port: 'kiel',
    terminal: 'ostseekai',
    terminalName: 'Ostseekai Kiel',
    type: 'valet',
    price7Days: 159,
    originalPrice: 179,
    rating: 4.7,
    reviewCount: 410,
    distanceTerminalMin: 0,
    distanceKmText: 'Direkt am Terminal',
    image: '/assets/aistudio/valet_main_photo.png',
    gallery: [
      '/assets/aistudio/valet_main_photo.png',
      '/assets/aistudio/port_parking_main_photo.png'
    ],
    features: [
      'Direkt am Terminal',
      'Valet-Service inkl.',
      'Versichert parken',
      'Fahrzeugübergabe am Terminal'
    ],
    description: 'Bequemer Valet-Service direkt am Kreuzfahrtterminal Ostseekai.',
    address: 'Kaistraße 51, 24103 Kiel',
    openHours: '24/7 geöffnet',
    shuttleFrequency: 'Direkt am Terminal'
  },
  {
    id: 'kiel-shuttle-parking',
    name: 'Kiel Shuttle Parking',
    tagline: 'Günstig parken mit Shuttle-Transfer',
    badge: 'Shuttle-Service',
    port: 'kiel',
    terminal: 'ostuferhafen',
    terminalName: 'Ostuferhafen Kiel',
    type: 'shuttle',
    price7Days: 89,
    originalPrice: 109,
    rating: 4.6,
    reviewCount: 882,
    distanceTerminalMin: 5,
    distanceKmText: 'Nur 5 Min. zum Terminal',
    image: '/assets/aistudio/parkart_shuttle.png',
    gallery: [
      '/assets/aistudio/parkart_shuttle.png',
      '/assets/aistudio/port_parking_main_photo.png'
    ],
    features: [
      'Shuttle-Service inklusive (Hin- & Rückfahrt)',
      'Halle & Außenstellplätze verfügbar',
      '24/7 geöffnet & voll umzäunt',
      'Videoüberwachung & Nachtpatrouille',
      'Kostenlose Stornierung bis 24h vor Anreise'
    ],
    description: 'Kiel Shuttle Parking ist die preiswerte und bewährte Parklösung für alle Kreuzfahrer am Ostuferhafen und Ostseekai.',
    address: 'Grenzstraße 14, 24149 Kiel',
    openHours: '24 Stunden geöffnet',
    shuttleFrequency: 'Alle 15 Minuten'
  },
  {
    id: 'ostsee-parkhaus-kiel',
    name: 'Ostsee Parkhaus Kiel',
    tagline: 'Überdachtes Parkhaus nahe Norwegenkai',
    badge: 'Halle & Parkhaus',
    port: 'kiel',
    terminal: 'norwegenkai',
    terminalName: 'Norwegenkai Kiel',
    type: 'halle',
    price7Days: 119,
    originalPrice: 139,
    rating: 4.4,
    reviewCount: 621,
    distanceTerminalMin: 3,
    distanceKmText: '3 Min. zum Terminal (zu Fuß erreichbar)',
    image: '/assets/aistudio/parkart_halle.png',
    gallery: [
      '/assets/aistudio/parkart_halle.png'
    ],
    features: [
      'Wettergeschützt im modernen Parkhaus',
      'E-Ladestationen (Wallbox Typ 2) vorhanden',
      'Zu Fuß in 3-5 Minuten am Terminal',
      'Videoüberwacht & Schrankensystem',
      'Kennzeichenerfassung für kontaktlose Einfahrt'
    ],
    description: 'Perfekt für alle Gäste, die ihr Fahrzeug gerne überdacht und witterungsgeschützt parken möchten.',
    address: 'Hafenstraße 8, 24103 Kiel',
    openHours: '24/7 geöffnet',
    shuttleFrequency: 'Fußläufige Terminal-Nähe (kein Bus nötig)'
  },
  {
    id: 'city-parking-kiel',
    name: 'City Parking Kiel',
    tagline: 'Preiswert parken am Schwedenkai',
    badge: 'Günstiger Preis',
    port: 'kiel',
    terminal: 'schwedenkai',
    terminalName: 'Schwedenkai Kiel',
    type: 'shuttle',
    price7Days: 69,
    originalPrice: 85,
    rating: 4.2,
    reviewCount: 326,
    distanceTerminalMin: 7,
    distanceKmText: '7 Min. zum Terminal mit Shuttle',
    image: '/assets/aistudio/port_kiel.png',
    gallery: [
      '/assets/aistudio/port_kiel.png'
    ],
    features: [
      'Günstigster Preis pro Woche in Kiel',
      'Shuttle-Service inklusive',
      'Eingezäuntes, befestigtes Gelände',
      '24/7 geöffnet & beleuchtet',
      'Allianz-Schutz inklusive'
    ],
    description: 'City Parking Kiel kombiniert maximale Ersparnis mit zuverlässigem Pünktlichkeits-Shuttle zum Schwedenkai.',
    address: 'Edisonstraße 3, 24145 Kiel',
    openHours: '05:30 – 23:30 Uhr',
    shuttleFrequency: 'Alle 20 Minuten'
  }
];

export const TESTIMONIALS = [
  {
    id: '1',
    name: 'Sabine M.',
    location: 'Kreuzfahrt ab Kiel',
    date: 'Juni 2024',
    rating: 5,
    text: 'Einfache Buchung und alles hat perfekt geklappt. Der Shuttle war pünktlich und sehr freundlich. Gerne wieder!',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80'
  },
  {
    id: '2',
    name: 'Thomas K.',
    location: 'Kreuzfahrt ab Hamburg',
    date: 'Mai 2024',
    rating: 5,
    text: 'Übersichtlich, faire Preise und eine große Auswahl. So beginnt der Urlaub absolut entspannt.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80'
  },
  {
    id: '3',
    name: 'Julia R.',
    location: 'Kreuzfahrt ab Warnemünde',
    date: 'Juli 2024',
    rating: 5,
    text: 'Wir haben einen überdachten Stellplatz gebucht und waren rundum zufrieden. Klare Weiterempfehlung!',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80'
  },
  {
    id: '4',
    name: 'Andreas M.',
    location: 'Kiel (Valet-Service)',
    date: 'Juni 2024',
    rating: 5,
    text: 'Super bequemer Service! Wir sind direkt zum Terminal gefahren, Auto übergeben und in den Urlaub gestartet. Bei der Rückkehr stand unser Auto pünktlich bereit. Perfekt!',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80'
  }
];

export const FAQS = [
  {
    q: 'Wie früh sollte ich den Parkplatz in Kiel buchen?',
    a: 'Wir empfehlen, den Parkplatz so früh wie möglich zusammen mit der Kreuzfahrt zu reservieren. Besonders in den Hauptreisemonaten (Mai bis September) sind Terminal-Parkplätze und Valet-Services schnell ausgebucht.'
  },
  {
    q: 'Ist der Allianz Parkplatzschutz wirklich kostenlos?',
    a: 'Ja! Bei jeder Buchung über kreuzfahrtparkplatz.de ist dein Fahrzeug während der gesamten Parkdauer zusätzlich gegen Parkschäden, Kratzer, Einbruch und Diebstahl versichert – ganz ohne Aufpreis oder versteckte Kosten.'
  },
  {
    q: 'Wie funktioniert der Shuttle-Service zum Schiff?',
    a: 'Du fährst direkt zu dem gebuchten Parkplatz. Nach einer kurzen Anmeldung und dem Entladen deines Gepäcks bringt dich der kostenlose Shuttlebus in wenigen Minuten direkt vor dein Kreuzfahrtterminal. Bei Rückkehr holt dich der Shuttle am selben Treffpunkt ab.'
  },
  {
    q: 'Muss ich meinen Autoschlüssel abgeben?',
    a: 'Bei klassischen Shuttle- und Hallenparkplätzen (wie dem Port Parking Kiel) behältst du deinen Fahrzeugschlüssel selbst in der Tasche. Nur beim Valet-Parking gibst du den Schlüssel an den zertifizierten Fahrer ab, damit das Fahrzeug auf den Sicherheitsplatz gefahren wird.'
  },
  {
    q: 'Was passiert, wenn mein Schiff Verspätung hat?',
    a: 'Keine Sorge: Unsere Partner kontrollieren die aktuellen Ankunftszeiten der Schiffe über das Hafensystem. Dein Stellplatz und die Abholung bleiben garantiert bestehen, auch wenn das Schiff später anlegt.'
  },
  {
    q: 'Kann ich meine Buchung stornieren oder umbuchen?',
    a: 'Ja, fast alle Angebote auf unserer Plattform lassen sich bis zu 24 Stunden vor Reiseantritt flexibel und kostenlos stornieren oder umbuchen.'
  }
];
