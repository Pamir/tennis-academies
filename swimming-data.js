const SPORT_TYPE = 'swimming';

const ACADEMIES = [
  {
    id: 'club-natacio-barcelona',
    availability: { status: 'open', nextIntake: '2025-08-01', spotsLeft: 5, responseTime: '3-5 days', privateLessons: true, yearRound: false },
    name: 'Club Natació Barcelona',
    country: 'Spain',
    countryFlag: '🇪🇸',
    city: 'Barcelona',
    lat: 41.3784, lng: 2.1925,
    website: 'https://www.cnab.cat',
    individualLessons: true,
    boarding: false,
    level: 'Elite',
    starred: true,
    airport: { name: 'Barcelona-El Prat Airport', code: 'BCN', distance: '15 km', driveTime: '20 min' },
    beach: { distance: 0.2, description: 'Located on Barcelona waterfront, 200m from Barceloneta Beach' },
    climate: 'barcelona',
    priceRange: { from: 1200, to: 3500, unit: 'month', display: '€1,200–€3,500/mo' },
    programs: [
      { name: 'Junior Development', price: '€1,200/mo', desc: 'Technique-focused training for ages 10-16, 10 pool sessions/week' },
      { name: 'Competitive Program', price: '€2,000/mo', desc: 'Race preparation, video analysis, strength & conditioning' },
      { name: 'Elite Performance', price: '€3,500/mo', desc: 'Full-time training, sports science support, competition calendar management' }
    ],
    coaches: [
      { name: 'Jordi Muñoz', credential: 'RFEN Level 3', background: 'Former Spanish national team coach, developed multiple Olympians', atpWta: false, bestRanking: null, rankingNote: '', languages: ['Spanish', 'Catalan', 'English'], instagram: '' },
      { name: 'Maria Casanova', credential: 'FINA Certified Coach', background: 'Olympic swimmer (2008, 2012), specializes in freestyle and butterfly', atpWta: false, bestRanking: null, rankingNote: '', languages: ['Spanish', 'English', 'French'], instagram: '' }
    ],
    bestCoachRanking: null,
    facilities: 'Olympic 50m pool, 25m training pool, diving pool, dry-land training area, gym, sports medicine center',
    courtSurfaces: ['50m Pool', '25m Pool'],
    notableAlumni: [],
    photos: [
      'https://picsum.photos/seed/cnb-swim-1/800/500',
      'https://picsum.photos/seed/cnb-swim-2/800/500',
      'https://picsum.photos/seed/cnb-swim-3/800/500'
    ],
    description: 'Historic swimming club on Barcelona waterfront with Olympic-standard facilities. One of Spain\'s premier swimming development centers producing national team swimmers.',
    nearbyHotels: [
      { name: 'W Barcelona', stars: 5, distanceKm: 0.5, features: ['Restaurant', 'Spa', 'Pool', 'Beach'], pool: true, wifi: true, pricePerNight: '€250' },
      { name: 'Hotel Arts Barcelona', stars: 5, distanceKm: 0.8, features: ['Restaurant', 'Spa', 'Gym'], pool: true, wifi: true, pricePerNight: '€300' },
      { name: 'Hotel 54 Barceloneta', stars: 3, distanceKm: 0.3, features: ['Restaurant', 'Bar'], pool: false, wifi: true, pricePerNight: '€90' }
    ],
    nearbyRestaurants: [
      { name: 'La Mar Salada', cuisine: 'Seafood', distanceKm: 0.3, priceRange: '€€€', rating: 4.5, vegetarian: true, outdoor: true },
      { name: 'Can Paixano', cuisine: 'Tapas', distanceKm: 0.4, priceRange: '€', rating: 4.3, vegetarian: false, outdoor: false }
    ],
    nearbyMedical: [
      { name: 'Hospital del Mar', type: 'Hospital', distanceKm: 0.5, phone: '+34 93 248 30 00', emergency: true }
    ],
    costOfLiving: { rent1Bed: '€950', meal: '€12', monthlyFood: '€350', transport: '€40', currency: 'EUR', summary: 'Barcelona is moderately expensive but affordable for Western Europe' },
    scholarships: { available: true, details: 'Merit-based scholarships for top junior swimmers with national ranking.' },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: 'EU/EEA citizens, USA, Canada, Australia, UK — visa-free up to 90 days', notes: 'Non-EU citizens need Schengen visa for stays over 90 days.' },
    airportTransfers: [
      { mode: 'Train', duration: '30 min', cost: '€4.60', notes: 'Aerobus to city center, then metro' },
      { mode: 'Taxi', duration: '25 min', cost: '€35–45', notes: 'Fixed rate from airport' }
    ],
    nearbyTournaments: [
      { name: 'Mare Nostrum Series', level: 'International', surface: '50m Pool', month: 'June', venue: 'Multiple Barcelona venues' }
    ],
    upcomingCamps: [
      { name: 'Summer Swimming Intensive', startDate: '2025-07-01', endDate: '2025-07-14', price: '€1,500', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'private', label: 'Private Room', pricePerWeek: 380, maxOccupancy: 1, bathType: 'ensuite', mealsIncluded: true },
        { type: 'twin', label: 'Twin Shared Room', pricePerWeek: 250, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'triple', label: 'Triple Room', pricePerWeek: 190, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: 1,
      shuttleToTraining: true,
      notes: 'Pool access with all rooms, beachfront location on Barceloneta'
    },
    videoTour: null
  },
  {
    id: 'duna-arena-academy',
    availability: { status: 'open', nextIntake: '2025-06-01', spotsLeft: 18, responseTime: '24h', privateLessons: true, yearRound: true },
    name: 'Duna Arena Swimming Academy',
    country: 'Hungary',
    countryFlag: '🇭🇺',
    city: 'Budapest',
    lat: 47.5030, lng: 19.0510,
    website: 'https://www.dunaarena.hu',
    individualLessons: true,
    boarding: true,
    level: 'Elite',
    starred: true,
    airport: { name: 'Budapest Ferenc Liszt Airport', code: 'BUD', distance: '22 km', driveTime: '30 min' },
    beach: { distance: null, description: 'Inland — Lake Balaton ~120 km to the southwest' },
    climate: 'budapest',
    priceRange: { from: 900, to: 2800, unit: 'month', display: '€900–€2,800/mo' },
    programs: [
      { name: 'Age Group Training', price: '€900/mo', desc: 'Structured training for ages 8-14, technique fundamentals' },
      { name: 'National Team Preparation', price: '€1,800/mo', desc: 'Advanced program for nationally ranked swimmers' },
      { name: 'Elite Olympic Program', price: '€2,800/mo', desc: 'Full-time professional training, sports science, physiotherapy' }
    ],
    coaches: [
      { name: 'László Varga', credential: 'FINA Level 5', background: 'Hungarian national team head coach, coached World Championship medalists', atpWta: false, bestRanking: null, rankingNote: '', languages: ['Hungarian', 'English', 'German'], instagram: '' },
      { name: 'Éva Szilágyi', credential: 'FINA Certified', background: 'Former European Championship medalist, 15 years coaching experience', atpWta: false, bestRanking: null, rankingNote: '', languages: ['Hungarian', 'English'], instagram: '' }
    ],
    bestCoachRanking: null,
    facilities: 'World-class 50m competition pool (2017 World Championships venue), warm-up pool, diving pool, full gym, recovery center',
    courtSurfaces: ['50m Pool', '25m Pool'],
    notableAlumni: [],
    photos: [
      'https://picsum.photos/seed/duna-swim-1/800/500',
      'https://picsum.photos/seed/duna-swim-2/800/500',
      'https://picsum.photos/seed/duna-swim-3/800/500'
    ],
    description: 'Training at the iconic Duna Arena, host of the 2017 FINA World Championships. Hungary\'s swimming tradition and world-class facilities make this a top European destination.',
    nearbyHotels: [
      { name: 'Danubius Hotel Margitsziget', stars: 4, distanceKm: 1.0, features: ['Spa', 'Restaurant', 'Pool'], pool: true, wifi: true, pricePerNight: '€120' },
      { name: 'Hilton Budapest', stars: 5, distanceKm: 2.0, features: ['Restaurant', 'Spa', 'Gym'], pool: true, wifi: true, pricePerNight: '€180' }
    ],
    nearbyRestaurants: [
      { name: 'Gundel', cuisine: 'Hungarian Fine Dining', distanceKm: 3.0, priceRange: '€€€€', rating: 4.6, vegetarian: true, outdoor: true },
      { name: 'Pesti Disznó', cuisine: 'Hungarian', distanceKm: 4.0, priceRange: '€€', rating: 4.4, vegetarian: true, outdoor: true }
    ],
    nearbyMedical: [
      { name: 'Semmelweis University Hospital', type: 'Hospital', distanceKm: 3.0, phone: '+36 1 459 1500', emergency: true }
    ],
    costOfLiving: { rent1Bed: '€550', meal: '€8', monthlyFood: '€250', transport: '€30', currency: 'HUF', summary: 'Budapest is very affordable by European standards' },
    scholarships: { available: true, details: 'Government-supported swimming scholarships for international athletes with top-50 world ranking.' },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: 'EU/EEA citizens, USA, Canada, Australia, UK — visa-free up to 90 days', notes: 'Non-EU citizens need Schengen visa for extended stays.' },
    airportTransfers: [
      { mode: 'Bus', duration: '40 min', cost: '€3', notes: 'Bus 100E to city center' },
      { mode: 'Taxi', duration: '30 min', cost: '€25–35', notes: 'Use Bolt or licensed taxis' }
    ],
    nearbyTournaments: [
      { name: 'Hungarian Grand Prix', level: 'International', surface: '50m Pool', month: 'March', venue: 'Duna Arena' }
    ],
    upcomingCamps: [
      { name: 'Summer Swim Camp Budapest', startDate: '2025-06-15', endDate: '2025-06-28', price: '€1,100', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'private', label: 'Private Room', pricePerWeek: 250, maxOccupancy: 1, bathType: 'ensuite', mealsIncluded: true },
        { type: 'twin', label: 'Twin Shared Room', pricePerWeek: 160, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'triple', label: 'Triple Room', pricePerWeek: 120, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true },
        { type: 'apartment', label: 'Studio Apartment', pricePerWeek: 310, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: 1,
      shuttleToTraining: false,
      notes: 'Danube-side residence with thermal spa access and recovery facilities'
    },
    videoTour: null
  },
  {
    id: 'london-aquatics-centre',
    availability: { status: 'open', nextIntake: '2025-05-15', spotsLeft: 19, responseTime: '24h', privateLessons: false, yearRound: true },
    name: 'London Aquatics Centre Academy',
    country: 'United Kingdom',
    countryFlag: '🇬🇧',
    city: 'London',
    lat: 51.5387, lng: -0.0106,
    website: 'https://www.londonaquaticscentre.org',
    individualLessons: true,
    boarding: false,
    level: 'Elite',
    starred: true,
    airport: { name: 'London City Airport', code: 'LCY', distance: '8 km', driveTime: '15 min' },
    beach: { distance: null, description: 'Inland — nearest coast ~80 km to Essex/Kent coastline' },
    climate: 'london',
    priceRange: { from: 1500, to: 4000, unit: 'month', display: '£1,500–£4,000/mo' },
    programs: [
      { name: 'Development Squad', price: '£1,500/mo', desc: 'Talent development for promising swimmers ages 12-16' },
      { name: 'Performance Squad', price: '£2,500/mo', desc: 'Competition-focused, video analysis, strength training' },
      { name: 'National Centre', price: '£4,000/mo', desc: 'British Swimming national program, full sports science support' }
    ],
    coaches: [
      { name: 'James Robertson', credential: 'Swim England Level 3', background: 'British Swimming national performance coach, coached Commonwealth medalists', atpWta: false, bestRanking: null, rankingNote: '', languages: ['English'], instagram: '' },
      { name: 'Sophie Williams', credential: 'FINA Certified', background: 'Former British Olympic swimmer, specializes in IM and backstroke', atpWta: false, bestRanking: null, rankingNote: '', languages: ['English', 'French'], instagram: '' }
    ],
    bestCoachRanking: null,
    facilities: '2012 Olympic venue, 50m competition pool, 50m training pool, diving pool, dry-land training hall, gym, sports science lab',
    courtSurfaces: ['50m Pool'],
    notableAlumni: [],
    photos: [
      'https://picsum.photos/seed/lac-swim-1/800/500',
      'https://picsum.photos/seed/lac-swim-2/800/500',
      'https://picsum.photos/seed/lac-swim-3/800/500'
    ],
    description: 'Train at the iconic 2012 Olympic swimming venue designed by Zaha Hadid. Home to British Swimming\'s performance programs with world-class coaching and facilities.',
    nearbyHotels: [
      { name: 'Staybridge Suites Stratford', stars: 4, distanceKm: 0.5, features: ['Kitchen', 'Gym', 'Parking'], pool: false, wifi: true, pricePerNight: '£120' },
      { name: 'Premier Inn Stratford', stars: 3, distanceKm: 0.8, features: ['Restaurant', 'Bar'], pool: false, wifi: true, pricePerNight: '£80' }
    ],
    nearbyRestaurants: [
      { name: 'Westfield Stratford Dining', cuisine: 'Various', distanceKm: 0.3, priceRange: '€€', rating: 4.0, vegetarian: true, outdoor: false }
    ],
    nearbyMedical: [
      { name: 'Homerton University Hospital', type: 'Hospital', distanceKm: 2.0, phone: '+44 20 8510 5555', emergency: true }
    ],
    costOfLiving: { rent1Bed: '£1,500', meal: '£12', monthlyFood: '£400', transport: '£150', currency: 'GBP', summary: 'London is one of Europe\'s most expensive cities' },
    scholarships: { available: true, details: 'British Swimming performance pathway funding for nationally ranked swimmers.' },
    visaInfo: { schengen: false, eu: false, visaFreeCountries: 'EU/EEA citizens (6 months visa-free), USA, Canada, Australia — visa-free up to 6 months', notes: 'Student visa required for long-term training programs.' },
    airportTransfers: [
      { mode: 'DLR/Tube', duration: '20 min', cost: '£5', notes: 'DLR from City Airport to Stratford' },
      { mode: 'Taxi', duration: '15 min', cost: '£15–25', notes: 'Black cab or Uber' }
    ],
    nearbyTournaments: [
      { name: 'British Swimming Championships', level: 'National', surface: '50m Pool', month: 'April', venue: 'London Aquatics Centre' }
    ],
    upcomingCamps: [
      { name: 'Olympic Legacy Camp', startDate: '2025-08-04', endDate: '2025-08-15', price: '£1,800', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'private', label: 'Private Room', pricePerWeek: 540, maxOccupancy: 1, bathType: 'ensuite', mealsIncluded: true },
        { type: 'twin', label: 'Twin Shared Room', pricePerWeek: 360, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'triple', label: 'Triple Room', pricePerWeek: 270, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: 2,
      shuttleToTraining: true,
      notes: 'Olympic Park residence with gym and recovery centre included'
    },
    videoTour: null
  },
  {
    id: 'insep-swimming',
    availability: { status: 'limited', nextIntake: '2025-10-01', spotsLeft: 3, responseTime: '48h', privateLessons: true, yearRound: true },
    name: 'INSEP Swimming Centre',
    country: 'France',
    countryFlag: '🇫🇷',
    city: 'Paris',
    lat: 48.8484, lng: 2.4491,
    website: 'https://www.insep.fr',
    individualLessons: true,
    boarding: true,
    level: 'Elite',
    starred: false,
    airport: { name: 'Charles de Gaulle Airport', code: 'CDG', distance: '25 km', driveTime: '35 min' },
    beach: { distance: null, description: 'Inland — nearest coast ~200 km to Normandy' },
    climate: 'paris',
    priceRange: { from: 1000, to: 3000, unit: 'month', display: '€1,000–€3,000/mo' },
    programs: [
      { name: 'National Training Centre', price: '€1,000/mo', desc: 'Government-funded elite training for top French swimmers' },
      { name: 'International Program', price: '€2,000/mo', desc: 'Open to international athletes, full training access' },
      { name: 'Pre-Olympic Preparation', price: '€3,000/mo', desc: 'Olympic cycle preparation with full support team' }
    ],
    coaches: [
      { name: 'Philippe Lucas', credential: 'FFN Brevet d\'État', background: 'Coached Laure Manaudou to Olympic gold, multiple world record holders', atpWta: false, bestRanking: null, rankingNote: '', languages: ['French', 'English'], instagram: '' }
    ],
    bestCoachRanking: null,
    facilities: '50m Olympic pool, 25m warm-up pool, hydrotherapy center, strength lab, biomechanics lab, on-site accommodation',
    courtSurfaces: ['50m Pool', '25m Pool'],
    notableAlumni: [],
    photos: [
      'https://picsum.photos/seed/insep-swim-1/800/500',
      'https://picsum.photos/seed/insep-swim-2/800/500'
    ],
    description: 'France\'s national institute of sport, training Olympic and World Championship swimmers. State-of-the-art facilities in Paris with integrated sports science.',
    nearbyHotels: [
      { name: 'Hotel Paris Bastille Boutet', stars: 5, distanceKm: 3.0, features: ['Spa', 'Pool', 'Restaurant'], pool: true, wifi: true, pricePerNight: '€220' },
      { name: 'Ibis Styles Paris Nation', stars: 3, distanceKm: 1.0, features: ['Restaurant', 'Bar'], pool: false, wifi: true, pricePerNight: '€90' }
    ],
    nearbyRestaurants: [
      { name: 'Le Chardenoux', cuisine: 'French Bistro', distanceKm: 2.0, priceRange: '€€€', rating: 4.4, vegetarian: true, outdoor: true }
    ],
    nearbyMedical: [
      { name: 'Hôpital Saint-Antoine', type: 'Hospital', distanceKm: 3.0, phone: '+33 1 49 28 20 00', emergency: true }
    ],
    costOfLiving: { rent1Bed: '€1,100', meal: '€14', monthlyFood: '€400', transport: '€75', currency: 'EUR', summary: 'Paris is expensive but INSEP provides subsidized accommodation' },
    scholarships: { available: true, details: 'French Ministry of Sports funding for elite-level swimmers.' },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: 'EU/EEA citizens, USA, Canada, Australia, UK — visa-free up to 90 days', notes: 'Long-stay visa required for training programs over 90 days.' },
    airportTransfers: [
      { mode: 'RER B', duration: '45 min', cost: '€11', notes: 'Direct train to Paris, then metro' },
      { mode: 'Taxi', duration: '35 min', cost: '€50–70', notes: 'Fixed rate from CDG' }
    ],
    nearbyTournaments: [
      { name: 'French Swimming Championships', level: 'National', surface: '50m Pool', month: 'June', venue: 'Various' }
    ],
    upcomingCamps: [],
    accommodation: {
      types: [
        { type: 'private', label: 'Private Room', pricePerWeek: 450, maxOccupancy: 1, bathType: 'ensuite', mealsIncluded: true },
        { type: 'twin', label: 'Twin Shared Room', pricePerWeek: 290, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'triple', label: 'Triple Room', pricePerWeek: 220, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: false,
      childrenAllowed: false,
      minStay: 4,
      shuttleToTraining: false,
      notes: 'Elite athlete campus housing with sports science lab access'
    },
    videoTour: null
  },
  {
    id: 'eindhoven-swim',
    availability: { status: 'open', nextIntake: '2025-06-01', spotsLeft: 12, responseTime: '24h', privateLessons: true, yearRound: true },
    name: 'Eindhoven Pieter van den Hoogenband Swim Academy',
    country: 'Netherlands',
    countryFlag: '🇳🇱',
    city: 'Eindhoven',
    lat: 51.4381, lng: 5.4752,
    website: 'https://www.pvdhswimacademy.nl',
    individualLessons: true,
    boarding: true,
    level: 'All levels',
    starred: false,
    airport: { name: 'Eindhoven Airport', code: 'EIN', distance: '8 km', driveTime: '15 min' },
    beach: { distance: null, description: 'Inland — nearest coast ~130 km to North Sea' },
    climate: 'amsterdam',
    priceRange: { from: 800, to: 2200, unit: 'month', display: '€800–€2,200/mo' },
    programs: [
      { name: 'Learn to Swim', price: '€800/mo', desc: 'Beginners program, technique fundamentals, water confidence' },
      { name: 'Competition Training', price: '€1,400/mo', desc: 'Race skills, starts, turns, competitive preparation' },
      { name: 'High Performance', price: '€2,200/mo', desc: 'Elite training with sports science integration' }
    ],
    coaches: [
      { name: 'Marcel Wouda', credential: 'KNZB Level 4', background: 'Olympic bronze medalist, Dutch national team coach', atpWta: false, bestRanking: null, rankingNote: '', languages: ['Dutch', 'English', 'German'], instagram: '' }
    ],
    bestCoachRanking: null,
    facilities: '50m competition pool, 25m training pool, teaching pool, gym, sports science lab, video analysis room',
    courtSurfaces: ['50m Pool', '25m Pool'],
    notableAlumni: [],
    photos: [
      'https://picsum.photos/seed/eindhoven-swim-1/800/500',
      'https://picsum.photos/seed/eindhoven-swim-2/800/500'
    ],
    description: 'Named after Dutch swimming legend Pieter van den Hoogenband, this academy combines world-class training with Dutch swimming methodology in state-of-the-art facilities.',
    nearbyHotels: [
      { name: 'Pullman Eindhoven Cocagne', stars: 4, distanceKm: 2.0, features: ['Restaurant', 'Bar', 'Gym'], pool: false, wifi: true, pricePerNight: '€120' },
      { name: 'Holiday Inn Eindhoven', stars: 3, distanceKm: 3.0, features: ['Restaurant', 'Parking'], pool: false, wifi: true, pricePerNight: '€85' }
    ],
    nearbyRestaurants: [
      { name: 'De Karpendonkse Hoeve', cuisine: 'French-Dutch', distanceKm: 2.5, priceRange: '€€€€', rating: 4.7, vegetarian: true, outdoor: true }
    ],
    nearbyMedical: [
      { name: 'Catharina Ziekenhuis', type: 'Hospital', distanceKm: 3.0, phone: '+31 40 239 91 11', emergency: true }
    ],
    costOfLiving: { rent1Bed: '€850', meal: '€12', monthlyFood: '€300', transport: '€50', currency: 'EUR', summary: 'Eindhoven is more affordable than Amsterdam' },
    scholarships: { available: false, details: '' },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: 'EU/EEA citizens, USA, Canada, Australia, UK — visa-free up to 90 days', notes: 'MVV visa required for non-EU citizens staying over 90 days.' },
    airportTransfers: [
      { mode: 'Bus', duration: '20 min', cost: '€3', notes: 'Bus 401 to city center' },
      { mode: 'Taxi', duration: '15 min', cost: '€20–25', notes: '' }
    ],
    nearbyTournaments: [],
    upcomingCamps: [],
    accommodation: {
      types: [
        { type: 'private', label: 'Private Room', pricePerWeek: 420, maxOccupancy: 1, bathType: 'ensuite', mealsIncluded: true },
        { type: 'twin', label: 'Twin Shared Room', pricePerWeek: 280, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'triple', label: 'Triple Room', pricePerWeek: 210, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true },
        { type: 'apartment', label: 'Studio Apartment', pricePerWeek: 500, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: 1,
      shuttleToTraining: true,
      notes: 'Pool access with all rooms, cycling distance to city centre'
    },
    videoTour: null
  },
  {
    id: 'berlin-swimming-federation',
    availability: { status: 'waitlist', nextIntake: '2025-11-01', spotsLeft: null, responseTime: '48h', privateLessons: true, yearRound: false },
    name: 'Berlin Swimming Performance Centre',
    country: 'Germany',
    countryFlag: '🇩🇪',
    city: 'Berlin',
    lat: 52.5145, lng: 13.3501,
    website: 'https://www.berlinerschwimmverband.de',
    individualLessons: true,
    boarding: true,
    level: 'Elite',
    starred: false,
    airport: { name: 'Berlin Brandenburg Airport', code: 'BER', distance: '22 km', driveTime: '30 min' },
    beach: { distance: null, description: 'Inland — city lakes available for open-water training' },
    climate: 'berlin',
    priceRange: { from: 1000, to: 2500, unit: 'month', display: '€1,000–€2,500/mo' },
    programs: [
      { name: 'Youth Development', price: '€1,000/mo', desc: 'Structured training for talented youth swimmers' },
      { name: 'Bundesliga Squad', price: '€1,800/mo', desc: 'Competitive squad training, domestic league preparation' },
      { name: 'Olympic Preparation', price: '€2,500/mo', desc: 'Full-time elite training with DSV national team integration' }
    ],
    coaches: [
      { name: 'Norbert Warnatzsch', credential: 'DSV A-Lizenz', background: 'Legendary German coach, trained multiple Olympic medalists including Franziska van Almsick', atpWta: false, bestRanking: null, rankingNote: '', languages: ['German', 'English'], instagram: '' }
    ],
    bestCoachRanking: null,
    facilities: 'SSE 50m Olympic pool, 25m training pools, open-water training at Wannsee, altitude simulation room, sports medicine center',
    courtSurfaces: ['50m Pool', '25m Pool'],
    notableAlumni: [],
    photos: [
      'https://picsum.photos/seed/berlin-swim-1/800/500',
      'https://picsum.photos/seed/berlin-swim-2/800/500'
    ],
    description: 'Berlin\'s elite swimming center combines Germany\'s strong swimming tradition with modern facilities. Access to both pool and open-water training environments.',
    nearbyHotels: [
      { name: 'Hotel Adlon Kempinski', stars: 5, distanceKm: 3.0, features: ['Spa', 'Pool', 'Restaurant'], pool: true, wifi: true, pricePerNight: '€300' },
      { name: 'Motel One Berlin-Tiergarten', stars: 2, distanceKm: 1.5, features: ['Bar'], pool: false, wifi: true, pricePerNight: '€70' }
    ],
    nearbyRestaurants: [
      { name: 'Lutter & Wegner', cuisine: 'German', distanceKm: 3.0, priceRange: '€€€', rating: 4.3, vegetarian: true, outdoor: true }
    ],
    nearbyMedical: [
      { name: 'Charité University Hospital', type: 'Hospital', distanceKm: 2.0, phone: '+49 30 450 50', emergency: true }
    ],
    costOfLiving: { rent1Bed: '€750', meal: '€10', monthlyFood: '€280', transport: '€49', currency: 'EUR', summary: 'Berlin is affordable compared to other European capitals' },
    scholarships: { available: true, details: 'DOSB sports scholarship program for elite athletes.' },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: 'EU/EEA citizens, USA, Canada, Australia, UK — visa-free up to 90 days', notes: 'National visa required for training stays over 90 days.' },
    airportTransfers: [
      { mode: 'Train', duration: '30 min', cost: '€3.80', notes: 'Airport Express to central Berlin' },
      { mode: 'Taxi', duration: '30 min', cost: '€40–50', notes: '' }
    ],
    nearbyTournaments: [
      { name: 'German Swimming Championships', level: 'National', surface: '50m Pool', month: 'May', venue: 'Berlin' }
    ],
    upcomingCamps: [],
    accommodation: {
      types: [
        { type: 'private', label: 'Private Room', pricePerWeek: 400, maxOccupancy: 1, bathType: 'ensuite', mealsIncluded: true },
        { type: 'twin', label: 'Twin Shared Room', pricePerWeek: 260, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'triple', label: 'Triple Room', pricePerWeek: 200, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: 1,
      shuttleToTraining: true,
      notes: 'Team dining hall for all residents with tailored nutrition plans'
    },
    videoTour: null
  },
  {
    id: 'stockholm-swim-centre',
    availability: { status: 'open', nextIntake: '2025-07-01', spotsLeft: 20, responseTime: '48h', privateLessons: true, yearRound: true },
    name: 'Eriksdalsbadet Swimming Academy',
    country: 'Sweden',
    countryFlag: '🇸🇪',
    city: 'Stockholm',
    lat: 59.3078, lng: 18.0653,
    website: 'https://www.eriksdalsbadet.se',
    individualLessons: true,
    boarding: false,
    level: 'All levels',
    starred: false,
    airport: { name: 'Stockholm Arlanda Airport', code: 'ARN', distance: '40 km', driveTime: '40 min' },
    beach: { distance: 3, description: 'Archipelago swimming spots accessible in summer' },
    climate: 'stockholm',
    priceRange: { from: 1200, to: 3000, unit: 'month', display: '€1,200–€3,000/mo' },
    programs: [
      { name: 'Junior Squad', price: '€1,200/mo', desc: 'Technical development for ages 10-15' },
      { name: 'Senior Performance', price: '€2,000/mo', desc: 'Competition-focused training for elite swimmers' },
      { name: 'Open Water Program', price: '€3,000/mo', desc: 'Combined pool and open-water training in Stockholm archipelago' }
    ],
    coaches: [
      { name: 'Anders Holmertz', credential: 'SSF Level 4', background: 'Former world record holder, Swedish national team coach', atpWta: false, bestRanking: null, rankingNote: '', languages: ['Swedish', 'English'], instagram: '' }
    ],
    bestCoachRanking: null,
    facilities: '50m competition pool, 25m training pool, outdoor 50m pool (summer), gym, sauna, sports medicine',
    courtSurfaces: ['50m Pool', '25m Pool'],
    notableAlumni: [],
    photos: [
      'https://picsum.photos/seed/stockholm-swim-1/800/500',
      'https://picsum.photos/seed/stockholm-swim-2/800/500'
    ],
    description: 'Scandinavia\'s premier swimming facility in the heart of Stockholm. Unique open-water training opportunities in the Stockholm archipelago during summer months.',
    nearbyHotels: [
      { name: 'Scandic Sjöfartshotellet', stars: 4, distanceKm: 0.5, features: ['Restaurant', 'Gym'], pool: false, wifi: true, pricePerNight: '€150' }
    ],
    nearbyRestaurants: [
      { name: 'Pelikan', cuisine: 'Swedish', distanceKm: 0.3, priceRange: '€€€', rating: 4.5, vegetarian: true, outdoor: false }
    ],
    nearbyMedical: [
      { name: 'Södersjukhuset', type: 'Hospital', distanceKm: 1.0, phone: '+46 8 616 10 00', emergency: true }
    ],
    costOfLiving: { rent1Bed: '€1,100', meal: '€14', monthlyFood: '€400', transport: '€80', currency: 'SEK', summary: 'Stockholm is expensive but offers high quality of life' },
    scholarships: { available: false, details: '' },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: 'EU/EEA citizens, USA, Canada, Australia, UK — visa-free up to 90 days', notes: 'Residence permit needed for stays over 90 days.' },
    airportTransfers: [
      { mode: 'Arlanda Express', duration: '20 min', cost: '€25', notes: 'Fast train to Stockholm Central' },
      { mode: 'Taxi', duration: '40 min', cost: '€55–70', notes: '' }
    ],
    nearbyTournaments: [],
    upcomingCamps: [],
    accommodation: {
      types: [
        { type: 'private', label: 'Private Room', pricePerWeek: 440, maxOccupancy: 1, bathType: 'ensuite', mealsIncluded: true },
        { type: 'twin', label: 'Twin Shared Room', pricePerWeek: 290, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'triple', label: 'Triple Room', pricePerWeek: 220, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: 2,
      shuttleToTraining: false,
      notes: 'Waterfront residence near Eriksdalsbadet with sauna and cold plunge'
    },
    videoTour: null
  },
  {
    id: 'rome-swimming-academy',
    availability: { status: 'open', nextIntake: '2025-08-01', spotsLeft: 17, responseTime: '3-5 days', privateLessons: true, yearRound: false },
    name: 'Circolo Canottieri Aniene Swim Academy',
    country: 'Italy',
    countryFlag: '🇮🇹',
    city: 'Rome',
    lat: 41.9331, lng: 12.4767,
    website: 'https://www.canottierianiene.it',
    individualLessons: true,
    boarding: false,
    level: 'Elite',
    starred: false,
    airport: { name: 'Rome Fiumicino Airport', code: 'FCO', distance: '30 km', driveTime: '35 min' },
    beach: { distance: 25, description: 'Ostia beach on the Tyrrhenian coast ~30 min drive' },
    climate: 'rome',
    priceRange: { from: 1000, to: 2800, unit: 'month', display: '€1,000–€2,800/mo' },
    programs: [
      { name: 'Agonistica', price: '€1,000/mo', desc: 'Competitive swimming program for all ages' },
      { name: 'Alta Prestazione', price: '€2,000/mo', desc: 'High performance training for nationally ranked swimmers' },
      { name: 'Elite Program', price: '€2,800/mo', desc: 'Professional training with Italian national team coaches' }
    ],
    coaches: [
      { name: 'Stefano Morini', credential: 'FIN Master Coach', background: 'Italian national team coach, trained Olympic finalists', atpWta: false, bestRanking: null, rankingNote: '', languages: ['Italian', 'English'], instagram: '' }
    ],
    bestCoachRanking: null,
    facilities: '50m outdoor pool, 25m indoor pool, gym, physiotherapy center, club facilities',
    courtSurfaces: ['50m Pool', '25m Pool'],
    notableAlumni: [],
    photos: [
      'https://picsum.photos/seed/rome-swim-1/800/500',
      'https://picsum.photos/seed/rome-swim-2/800/500'
    ],
    description: 'Rome\'s most prestigious swimming club, home to Italian national team swimmers. Beautiful facilities along the Tiber River with year-round outdoor training.',
    nearbyHotels: [
      { name: 'Hotel Parco dei Principi', stars: 5, distanceKm: 1.5, features: ['Restaurant', 'Pool', 'Spa', 'Garden'], pool: true, wifi: true, pricePerNight: '€200' },
      { name: 'Hotel Villa Glori', stars: 3, distanceKm: 0.5, features: ['Restaurant', 'Parking'], pool: false, wifi: true, pricePerNight: '€80' }
    ],
    nearbyRestaurants: [
      { name: 'Ristorante Celestina', cuisine: 'Italian', distanceKm: 0.5, priceRange: '€€€', rating: 4.5, vegetarian: true, outdoor: true }
    ],
    nearbyMedical: [
      { name: 'Policlinico Umberto I', type: 'Hospital', distanceKm: 3.0, phone: '+39 06 4997 1', emergency: true }
    ],
    costOfLiving: { rent1Bed: '€800', meal: '€12', monthlyFood: '€300', transport: '€35', currency: 'EUR', summary: 'Rome is moderately priced for a European capital' },
    scholarships: { available: true, details: 'CONI athlete grants available for high-level swimmers.' },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: 'EU/EEA citizens, USA, Canada, Australia, UK — visa-free up to 90 days', notes: 'Non-EU citizens need Schengen visa for extended stays.' },
    airportTransfers: [
      { mode: 'Leonardo Express', duration: '30 min', cost: '€14', notes: 'Train to Roma Termini' },
      { mode: 'Taxi', duration: '35 min', cost: '€48', notes: 'Fixed rate from Fiumicino' }
    ],
    nearbyTournaments: [
      { name: 'Sette Colli Trophy', level: 'International', surface: '50m Pool', month: 'June', venue: 'Foro Italico' }
    ],
    upcomingCamps: [],
    accommodation: {
      types: [
        { type: 'private', label: 'Private Room', pricePerWeek: 370, maxOccupancy: 1, bathType: 'ensuite', mealsIncluded: true },
        { type: 'twin', label: 'Twin Shared Room', pricePerWeek: 250, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'triple', label: 'Triple Room', pricePerWeek: 190, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true },
        { type: 'apartment', label: 'Studio Apartment', pricePerWeek: 460, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: 1,
      shuttleToTraining: true,
      notes: 'Mediterranean-style residence with Italian full-board cuisine and pool access'
    },
    videoTour: null
  },
  {
    id: 'athens-swim-academy',
    availability: { status: 'limited', nextIntake: '2025-10-01', spotsLeft: 3, responseTime: '48h', privateLessons: true, yearRound: true },
    name: 'Athens Olympic Swimming Academy',
    country: 'Greece',
    countryFlag: '🇬🇷',
    city: 'Athens',
    lat: 37.9253, lng: 23.7546,
    website: 'https://www.oaka.com.gr',
    individualLessons: true,
    boarding: false,
    level: 'All levels',
    starred: false,
    airport: { name: 'Athens International Airport', code: 'ATH', distance: '20 km', driveTime: '30 min' },
    beach: { distance: 10, description: 'Multiple beaches along the Athens Riviera' },
    climate: 'athens',
    priceRange: { from: 700, to: 1800, unit: 'month', display: '€700–€1,800/mo' },
    programs: [
      { name: 'Foundation', price: '€700/mo', desc: 'Technique and endurance building for developing swimmers' },
      { name: 'Competition Squad', price: '€1,200/mo', desc: 'Race preparation, starts, turns, competition strategy' },
      { name: 'Performance Program', price: '€1,800/mo', desc: 'Advanced training with sports science support' }
    ],
    coaches: [
      { name: 'Nikos Gemelos', credential: 'KOE Level 3', background: 'Former Greek Olympian, coaches national team swimmers', atpWta: false, bestRanking: null, rankingNote: '', languages: ['Greek', 'English'], instagram: '' }
    ],
    bestCoachRanking: null,
    facilities: '2004 Olympic Aquatic Centre, 50m competition pool, warm-up pool, outdoor training pool, gym',
    courtSurfaces: ['50m Pool'],
    notableAlumni: [],
    photos: [
      'https://picsum.photos/seed/athens-swim-1/800/500',
      'https://picsum.photos/seed/athens-swim-2/800/500'
    ],
    description: 'Training at the 2004 Olympic Aquatic Centre. Year-round warm weather and Mediterranean lifestyle combined with professional coaching and Olympic-standard pools.',
    nearbyHotels: [
      { name: 'Sofitel Athens Airport', stars: 5, distanceKm: 15.0, features: ['Restaurant', 'Spa', 'Pool'], pool: true, wifi: true, pricePerNight: '€180' },
      { name: 'Best Western Plus Embassy Hotel', stars: 3, distanceKm: 5.0, features: ['Restaurant', 'Bar'], pool: false, wifi: true, pricePerNight: '€80' }
    ],
    nearbyRestaurants: [
      { name: 'Spondi', cuisine: 'Greek Fine Dining', distanceKm: 3.0, priceRange: '€€€€', rating: 4.7, vegetarian: true, outdoor: true }
    ],
    nearbyMedical: [
      { name: 'Hygeia Hospital', type: 'Hospital', distanceKm: 5.0, phone: '+30 210 686 7000', emergency: true }
    ],
    costOfLiving: { rent1Bed: '€500', meal: '€10', monthlyFood: '€250', transport: '€30', currency: 'EUR', summary: 'Athens is one of the most affordable European capitals' },
    scholarships: { available: false, details: '' },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: 'EU/EEA citizens, USA, Canada, Australia, UK — visa-free up to 90 days', notes: 'Schengen visa required for non-EU citizens staying over 90 days.' },
    airportTransfers: [
      { mode: 'Metro', duration: '40 min', cost: '€10', notes: 'Metro Line 3 to city center' },
      { mode: 'Taxi', duration: '30 min', cost: '€38', notes: 'Fixed rate from airport' }
    ],
    nearbyTournaments: [],
    upcomingCamps: [
      { name: 'Mediterranean Swim Camp', startDate: '2025-07-07', endDate: '2025-07-18', price: '€900', level: 'All Levels' }
    ],
    videoTour: null
  },
  {
    id: 'vienna-swim-academy',
    availability: { status: 'open', nextIntake: '2025-07-01', spotsLeft: 10, responseTime: '48h', privateLessons: true, yearRound: true },
    name: 'Wiener Stadthalle Swimming Academy',
    country: 'Austria',
    countryFlag: '🇦🇹',
    city: 'Vienna',
    lat: 48.2019, lng: 16.3330,
    website: 'https://www.oesv.at',
    individualLessons: true,
    boarding: true,
    level: 'All levels',
    starred: false,
    airport: { name: 'Vienna International Airport', code: 'VIE', distance: '18 km', driveTime: '25 min' },
    beach: { distance: null, description: 'Inland — Danube swimming areas and Alte Donau for open water' },
    climate: 'vienna',
    priceRange: { from: 900, to: 2400, unit: 'month', display: '€900–€2,400/mo' },
    programs: [
      { name: 'Nachwuchs', price: '€900/mo', desc: 'Youth development program, technical foundations' },
      { name: 'Leistungssport', price: '€1,600/mo', desc: 'Competitive program for national-level swimmers' },
      { name: 'Spitzensport', price: '€2,400/mo', desc: 'Elite program with full sports science support' }
    ],
    coaches: [
      { name: 'Christoph Sieber', credential: 'ÖSV A-Trainer', background: 'Austrian national team coach, European Championships experience', atpWta: false, bestRanking: null, rankingNote: '', languages: ['German', 'English'], instagram: '' }
    ],
    bestCoachRanking: null,
    facilities: '50m indoor pool, 25m training pool, outdoor pool (summer), gym, physiotherapy, video analysis',
    courtSurfaces: ['50m Pool', '25m Pool'],
    notableAlumni: [],
    photos: [
      'https://picsum.photos/seed/vienna-swim-1/800/500',
      'https://picsum.photos/seed/vienna-swim-2/800/500'
    ],
    description: 'Austria\'s national swimming performance centre in Vienna. Strong training infrastructure combined with excellent quality of life in one of the world\'s most livable cities.',
    nearbyHotels: [
      { name: 'Hotel Zeitgeist', stars: 4, distanceKm: 1.0, features: ['Restaurant', 'Bar', 'Gym'], pool: false, wifi: true, pricePerNight: '€120' },
      { name: 'Motel One Wien-Westbahnhof', stars: 2, distanceKm: 0.5, features: ['Bar'], pool: false, wifi: true, pricePerNight: '€80' }
    ],
    nearbyRestaurants: [
      { name: 'Plachutta', cuisine: 'Austrian', distanceKm: 2.0, priceRange: '€€€', rating: 4.5, vegetarian: true, outdoor: true }
    ],
    nearbyMedical: [
      { name: 'AKH Wien', type: 'Hospital', distanceKm: 3.0, phone: '+43 1 40400', emergency: true }
    ],
    costOfLiving: { rent1Bed: '€750', meal: '€12', monthlyFood: '€300', transport: '€51', currency: 'EUR', summary: 'Vienna is moderately priced with excellent public services' },
    scholarships: { available: true, details: 'ÖSV athlete support program for nationally ranked swimmers.' },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: 'EU/EEA citizens, USA, Canada, Australia, UK — visa-free up to 90 days', notes: 'Non-EU citizens need Schengen visa for extended stays.' },
    airportTransfers: [
      { mode: 'City Airport Train', duration: '16 min', cost: '€12', notes: 'Direct to Wien Mitte' },
      { mode: 'Taxi', duration: '25 min', cost: '€36', notes: 'Fixed rate from airport' }
    ],
    nearbyTournaments: [],
    upcomingCamps: [],
    accommodation: {
      types: [
        { type: 'private', label: 'Private Room', pricePerWeek: 380, maxOccupancy: 1, bathType: 'ensuite', mealsIncluded: true },
        { type: 'twin', label: 'Twin Shared Room', pricePerWeek: 250, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'triple', label: 'Triple Room', pricePerWeek: 190, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: false,
      minStay: 1,
      shuttleToTraining: true,
      notes: 'Central Vienna location with excellent public transport to training venue'
    },
    videoTour: null
  },
  {
    id: 'copenhagen-swim',
    availability: { status: 'open', nextIntake: '2025-09-01', spotsLeft: 10, responseTime: '24h', privateLessons: false, yearRound: true },
    name: 'Danish Swimming Federation Centre',
    country: 'Denmark',
    countryFlag: '🇩🇰',
    city: 'Copenhagen',
    lat: 55.6567, lng: 12.5765,
    website: 'https://www.markup.dk',
    individualLessons: true,
    boarding: false,
    level: 'All levels',
    starred: false,
    airport: { name: 'Copenhagen Airport', code: 'CPH', distance: '10 km', driveTime: '15 min' },
    beach: { distance: 3, description: 'Amager Strand and harbour swimming pools' },
    climate: 'copenhagen',
    priceRange: { from: 1300, to: 3200, unit: 'month', display: '€1,300–€3,200/mo' },
    programs: [
      { name: 'Club Training', price: '€1,300/mo', desc: 'Regular club-level competitive training' },
      { name: 'National Programme', price: '€2,200/mo', desc: 'Danish Swimming national performance pathway' },
      { name: 'Elite Squad', price: '€3,200/mo', desc: 'Full-time training with international competition calendar' }
    ],
    coaches: [
      { name: 'Martin Truijens', credential: 'FINA Level 4', background: 'Former Dutch Olympian, now head coach of Danish national program', atpWta: false, bestRanking: null, rankingNote: '', languages: ['Danish', 'Dutch', 'English'], instagram: '' }
    ],
    bestCoachRanking: null,
    facilities: '50m pool at Bellahøj Svømmestadion, 25m training pool, outdoor harbour pools, gym, recovery centre',
    courtSurfaces: ['50m Pool', '25m Pool'],
    notableAlumni: [],
    photos: [
      'https://picsum.photos/seed/copenhagen-swim-1/800/500',
      'https://picsum.photos/seed/copenhagen-swim-2/800/500'
    ],
    description: 'Denmark\'s swimming performance centre in Copenhagen. Innovative training approach combined with Scandinavian sports science and the city\'s famous harbour pools.',
    nearbyHotels: [
      { name: 'Copenhagen Marriott Hotel', stars: 4, distanceKm: 5.0, features: ['Restaurant', 'Bar', 'Gym'], pool: false, wifi: true, pricePerNight: '€180' }
    ],
    nearbyRestaurants: [
      { name: 'Höst', cuisine: 'New Nordic', distanceKm: 5.0, priceRange: '€€€€', rating: 4.6, vegetarian: true, outdoor: false }
    ],
    nearbyMedical: [
      { name: 'Rigshospitalet', type: 'Hospital', distanceKm: 3.0, phone: '+45 35 45 35 45', emergency: true }
    ],
    costOfLiving: { rent1Bed: '€1,200', meal: '€16', monthlyFood: '€400', transport: '€50', currency: 'DKK', summary: 'Copenhagen is expensive but wages and quality of life are high' },
    scholarships: { available: true, details: 'Team Denmark elite athlete support for top swimmers.' },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: 'EU/EEA citizens, USA, Canada, Australia, UK — visa-free up to 90 days', notes: 'Residence permit required for stays over 90 days.' },
    airportTransfers: [
      { mode: 'Metro', duration: '15 min', cost: '€4', notes: 'M2 to city center' },
      { mode: 'Taxi', duration: '15 min', cost: '€30–40', notes: '' }
    ],
    nearbyTournaments: [],
    upcomingCamps: [],
    videoTour: null
  },
  {
    id: 'zurich-swim-academy',
    availability: { status: 'limited', nextIntake: '2025-10-01', spotsLeft: 5, responseTime: '48h', privateLessons: true, yearRound: true },
    name: 'Zürich Swimming Academy',
    country: 'Switzerland',
    countryFlag: '🇨🇭',
    city: 'Zürich',
    lat: 47.3769, lng: 8.5417,
    website: 'https://www.scz.ch',
    individualLessons: true,
    boarding: false,
    level: 'All levels',
    starred: false,
    airport: { name: 'Zürich Airport', code: 'ZRH', distance: '12 km', driveTime: '15 min' },
    beach: { distance: 1, description: 'Lake Zürich swimming areas and Badi culture (public lake pools)' },
    climate: 'zurich',
    priceRange: { from: 1500, to: 3500, unit: 'month', display: 'CHF 1,500–3,500/mo' },
    programs: [
      { name: 'Breitensport', price: 'CHF 1,500/mo', desc: 'Recreational and fitness swimming with structured coaching' },
      { name: 'Wettkampf', price: 'CHF 2,500/mo', desc: 'Competition-oriented training, race technique, conditioning' },
      { name: 'Spitzensport', price: 'CHF 3,500/mo', desc: 'Elite training integrated with Swiss Aquatics pathway' }
    ],
    coaches: [
      { name: 'Dirk Reinicke', credential: 'Swiss Swimming A-Lizenz', background: 'Head coach of Swiss national team swimmers, European Championships coach', atpWta: false, bestRanking: null, rankingNote: '', languages: ['German', 'English', 'French'], instagram: '' }
    ],
    bestCoachRanking: null,
    facilities: '50m indoor pool, 25m training pool, Lake Zürich for open-water training, dry-land gym, sports science lab',
    courtSurfaces: ['50m Pool', '25m Pool'],
    notableAlumni: [],
    photos: [
      'https://picsum.photos/seed/zurich-swim-1/800/500',
      'https://picsum.photos/seed/zurich-swim-2/800/500'
    ],
    description: 'Top Swiss swimming academy combining indoor world-class pools with unique open-water training in Lake Zürich. Strong sports science integration and Swiss precision coaching.',
    nearbyHotels: [
      { name: 'Baur au Lac', stars: 5, distanceKm: 2.0, features: ['Restaurant', 'Spa', 'Garden'], pool: false, wifi: true, pricePerNight: 'CHF 600' },
      { name: 'Hotel Schweizerhof', stars: 4, distanceKm: 1.5, features: ['Restaurant', 'Bar'], pool: false, wifi: true, pricePerNight: 'CHF 200' }
    ],
    nearbyRestaurants: [
      { name: 'Zeughauskeller', cuisine: 'Swiss', distanceKm: 1.5, priceRange: '€€€', rating: 4.4, vegetarian: true, outdoor: false }
    ],
    nearbyMedical: [
      { name: 'Universitätsspital Zürich', type: 'Hospital', distanceKm: 2.0, phone: '+41 44 255 11 11', emergency: true }
    ],
    costOfLiving: { rent1Bed: 'CHF 1,800', meal: 'CHF 25', monthlyFood: 'CHF 600', transport: 'CHF 80', currency: 'CHF', summary: 'Zürich is one of Europe\'s most expensive cities' },
    scholarships: { available: false, details: '' },
    visaInfo: { schengen: true, eu: false, visaFreeCountries: 'EU/EEA citizens, USA, Canada, Australia, UK — visa-free up to 90 days', notes: 'Non-EU citizens need a visa for stays over 90 days. Swiss work/residence permit for long-term training.' },
    airportTransfers: [
      { mode: 'Train', duration: '10 min', cost: 'CHF 7', notes: 'Direct train to Zürich HB' },
      { mode: 'Taxi', duration: '15 min', cost: 'CHF 50–60', notes: '' }
    ],
    nearbyTournaments: [],
    upcomingCamps: [],
    videoTour: null
  },
  {
    id: 'lisbon-swim-academy',
    availability: { status: 'open', nextIntake: '2025-07-01', spotsLeft: 12, responseTime: '48h', privateLessons: true, yearRound: true },
    name: 'Lisbon Swimming Academy',
    country: 'Portugal',
    countryFlag: '🇵🇹',
    city: 'Lisbon',
    lat: 38.7569, lng: -9.1558,
    website: 'https://www.fpnatacao.pt',
    individualLessons: true,
    boarding: false,
    level: 'All levels',
    starred: false,
    airport: { name: 'Humberto Delgado Airport', code: 'LIS', distance: '7 km', driveTime: '15 min' },
    beach: { distance: 15, description: 'Atlantic beaches at Cascais and Costa da Caparica' },
    climate: 'lisbon',
    priceRange: { from: 600, to: 1600, unit: 'month', display: '€600–€1,600/mo' },
    programs: [
      { name: 'Formação', price: '€600/mo', desc: 'Foundational swimming training for youth' },
      { name: 'Competição', price: '€1,000/mo', desc: 'Competition preparation, race strategy, conditioning' },
      { name: 'Alto Rendimento', price: '€1,600/mo', desc: 'High-performance program with full coaching support' }
    ],
    coaches: [
      { name: 'José Machado', credential: 'FPN Level 3', background: 'Portuguese national team coach, European Junior Championships', atpWta: false, bestRanking: null, rankingNote: '', languages: ['Portuguese', 'English', 'Spanish'], instagram: '' }
    ],
    bestCoachRanking: null,
    facilities: '50m Olympic pool, 25m training pool, open-water ocean training, gym, physiotherapy center',
    courtSurfaces: ['50m Pool', '25m Pool'],
    notableAlumni: [],
    photos: [
      'https://picsum.photos/seed/lisbon-swim-1/800/500',
      'https://picsum.photos/seed/lisbon-swim-2/800/500'
    ],
    description: 'Portugal\'s national swimming training centre in Lisbon. Excellent climate for year-round training with unique Atlantic open-water training opportunities.',
    nearbyHotels: [
      { name: 'Altis Grand Hotel', stars: 5, distanceKm: 5.0, features: ['Restaurant', 'Spa', 'Pool'], pool: true, wifi: true, pricePerNight: '€150' },
      { name: 'Lisboa Pessoa Hotel', stars: 4, distanceKm: 4.0, features: ['Restaurant', 'Bar'], pool: false, wifi: true, pricePerNight: '€100' }
    ],
    nearbyRestaurants: [
      { name: 'Ramiro', cuisine: 'Seafood', distanceKm: 5.0, priceRange: '€€€', rating: 4.6, vegetarian: false, outdoor: false }
    ],
    nearbyMedical: [
      { name: 'Hospital de Santa Maria', type: 'Hospital', distanceKm: 3.0, phone: '+351 21 780 5000', emergency: true }
    ],
    costOfLiving: { rent1Bed: '€700', meal: '€8', monthlyFood: '€250', transport: '€40', currency: 'EUR', summary: 'Lisbon is affordable by Western European standards' },
    scholarships: { available: true, details: 'Portuguese Olympic Committee support for elite swimmers.' },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: 'EU/EEA citizens, USA, Canada, Australia, UK — visa-free up to 90 days', notes: 'Schengen visa for non-EU citizens.' },
    airportTransfers: [
      { mode: 'Metro', duration: '20 min', cost: '€1.50', notes: 'Red line from airport' },
      { mode: 'Taxi', duration: '15 min', cost: '€15–20', notes: '' }
    ],
    nearbyTournaments: [],
    upcomingCamps: [
      { name: 'Atlantic Swim Camp', startDate: '2025-06-01', endDate: '2025-06-14', price: '€800', level: 'All Levels' }
    ],
    accommodation: {
      types: [
        { type: 'private', label: 'Private Room', pricePerWeek: 310, maxOccupancy: 1, bathType: 'ensuite', mealsIncluded: true },
        { type: 'twin', label: 'Twin Shared Room', pricePerWeek: 200, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'triple', label: 'Triple Room', pricePerWeek: 160, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: 1,
      shuttleToTraining: true,
      notes: 'Riverside residence with ocean views and outdoor recovery terrace'
    },
    videoTour: null
  },
  {
    id: 'dubrovnik-swim',
    availability: { status: 'open', nextIntake: '2025-09-01', spotsLeft: 8, responseTime: '24h', privateLessons: false, yearRound: true },
    name: 'Dubrovnik Aquatic Centre',
    country: 'Croatia',
    countryFlag: '🇭🇷',
    city: 'Dubrovnik',
    lat: 42.6507, lng: 18.0944,
    website: 'https://www.dpk-jug.hr',
    individualLessons: true,
    boarding: false,
    level: 'All levels',
    starred: false,
    airport: { name: 'Dubrovnik Airport', code: 'DBV', distance: '20 km', driveTime: '25 min' },
    beach: { distance: 0.5, description: 'Adriatic Sea, multiple beaches within walking distance' },
    climate: 'dubrovnik',
    priceRange: { from: 500, to: 1400, unit: 'month', display: '€500–€1,400/mo' },
    programs: [
      { name: 'Youth Development', price: '€500/mo', desc: 'Training for young swimmers, technique and endurance' },
      { name: 'Open Water Specialist', price: '€900/mo', desc: 'Combined pool and Adriatic open-water training' },
      { name: 'Performance', price: '€1,400/mo', desc: 'Full competitive program with conditioning and race prep' }
    ],
    coaches: [
      { name: 'Ivan Petrović', credential: 'HPS Level 3', background: 'Croatian national team coach, Mediterranean Games medalist coach', atpWta: false, bestRanking: null, rankingNote: '', languages: ['Croatian', 'English', 'Italian'], instagram: '' }
    ],
    bestCoachRanking: null,
    facilities: '50m outdoor pool, 25m indoor pool, Adriatic Sea open-water course, gym, physiotherapy',
    courtSurfaces: ['50m Pool', '25m Pool'],
    notableAlumni: [],
    photos: [
      'https://picsum.photos/seed/dubrovnik-swim-1/800/500',
      'https://picsum.photos/seed/dubrovnik-swim-2/800/500'
    ],
    description: 'Unique training location on the Adriatic coast combining pool and open-water training. Excellent climate, affordable costs, and a stunning historical setting.',
    nearbyHotels: [
      { name: 'Hotel Excelsior', stars: 5, distanceKm: 1.0, features: ['Restaurant', 'Spa', 'Beach', 'Pool'], pool: true, wifi: true, pricePerNight: '€250' },
      { name: 'Hotel Lero', stars: 3, distanceKm: 0.5, features: ['Restaurant', 'Bar'], pool: true, wifi: true, pricePerNight: '€80' }
    ],
    nearbyRestaurants: [
      { name: 'Nautika', cuisine: 'Mediterranean', distanceKm: 1.5, priceRange: '€€€€', rating: 4.6, vegetarian: true, outdoor: true }
    ],
    nearbyMedical: [
      { name: 'General Hospital Dubrovnik', type: 'Hospital', distanceKm: 1.0, phone: '+385 20 431 777', emergency: true }
    ],
    costOfLiving: { rent1Bed: '€500', meal: '€10', monthlyFood: '€250', transport: '€30', currency: 'EUR', summary: 'Dubrovnik is moderately priced, higher in tourist season' },
    scholarships: { available: false, details: '' },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: 'EU/EEA citizens, USA, Canada, Australia, UK — visa-free up to 90 days', notes: 'Schengen visa for non-EU citizens.' },
    airportTransfers: [
      { mode: 'Bus', duration: '30 min', cost: '€6', notes: 'Airport shuttle to old town' },
      { mode: 'Taxi', duration: '25 min', cost: '€30–40', notes: '' }
    ],
    nearbyTournaments: [],
    upcomingCamps: [
      { name: 'Adriatic Open Water Camp', startDate: '2025-07-14', endDate: '2025-07-25', price: '€700', level: 'Intermediate' }
    ],
    videoTour: null
  }
];

const COUNTRIES = [...new Set(ACADEMIES.map(a => a.country))];

const CLIMATE_DATA = {
  'barcelona': {
    city: 'Barcelona', country: 'Spain',
    months: [
      { month: 'Jan', temp: 10, rain: 41, rainyDays: 5, wind: 14 },
      { month: 'Feb', temp: 11, rain: 29, rainyDays: 4, wind: 14 },
      { month: 'Mar', temp: 13, rain: 35, rainyDays: 5, wind: 14 },
      { month: 'Apr', temp: 15, rain: 47, rainyDays: 7, wind: 14 },
      { month: 'May', temp: 18, rain: 47, rainyDays: 6, wind: 11 },
      { month: 'Jun', temp: 22, rain: 30, rainyDays: 4, wind: 11 },
      { month: 'Jul', temp: 25, rain: 20, rainyDays: 3, wind: 11 },
      { month: 'Aug', temp: 25, rain: 61, rainyDays: 5, wind: 11 },
      { month: 'Sep', temp: 23, rain: 81, rainyDays: 6, wind: 11 },
      { month: 'Oct', temp: 18, rain: 91, rainyDays: 7, wind: 14 },
      { month: 'Nov', temp: 14, rain: 58, rainyDays: 5, wind: 14 },
      { month: 'Dec', temp: 11, rain: 46, rainyDays: 5, wind: 14 }
    ]
  },
  'budapest': {
    city: 'Budapest', country: 'Hungary',
    months: [
      { month: 'Jan', temp: 0, rain: 37, rainyDays: 7, wind: 11 },
      { month: 'Feb', temp: 2, rain: 32, rainyDays: 6, wind: 11 },
      { month: 'Mar', temp: 7, rain: 33, rainyDays: 6, wind: 14 },
      { month: 'Apr', temp: 12, rain: 42, rainyDays: 7, wind: 14 },
      { month: 'May', temp: 17, rain: 62, rainyDays: 9, wind: 14 },
      { month: 'Jun', temp: 21, rain: 63, rainyDays: 8, wind: 11 },
      { month: 'Jul', temp: 23, rain: 45, rainyDays: 6, wind: 11 },
      { month: 'Aug', temp: 22, rain: 49, rainyDays: 6, wind: 11 },
      { month: 'Sep', temp: 18, rain: 40, rainyDays: 5, wind: 11 },
      { month: 'Oct', temp: 12, rain: 39, rainyDays: 6, wind: 11 },
      { month: 'Nov', temp: 6, rain: 52, rainyDays: 8, wind: 14 },
      { month: 'Dec', temp: 2, rain: 44, rainyDays: 7, wind: 11 }
    ]
  },
  'london': {
    city: 'London', country: 'United Kingdom',
    months: [
      { month: 'Jan', temp: 5, rain: 55, rainyDays: 11, wind: 18 },
      { month: 'Feb', temp: 5, rain: 41, rainyDays: 9, wind: 18 },
      { month: 'Mar', temp: 7, rain: 42, rainyDays: 9, wind: 16 },
      { month: 'Apr', temp: 10, rain: 43, rainyDays: 9, wind: 14 },
      { month: 'May', temp: 13, rain: 49, rainyDays: 8, wind: 14 },
      { month: 'Jun', temp: 16, rain: 45, rainyDays: 8, wind: 14 },
      { month: 'Jul', temp: 19, rain: 45, rainyDays: 7, wind: 14 },
      { month: 'Aug', temp: 18, rain: 50, rainyDays: 8, wind: 14 },
      { month: 'Sep', temp: 16, rain: 49, rainyDays: 8, wind: 14 },
      { month: 'Oct', temp: 12, rain: 69, rainyDays: 10, wind: 16 },
      { month: 'Nov', temp: 8, rain: 59, rainyDays: 10, wind: 16 },
      { month: 'Dec', temp: 5, rain: 55, rainyDays: 10, wind: 18 }
    ]
  },
  'paris': {
    city: 'Paris', country: 'France',
    months: [
      { month: 'Jan', temp: 4, rain: 51, rainyDays: 10, wind: 16 },
      { month: 'Feb', temp: 5, rain: 41, rainyDays: 9, wind: 16 },
      { month: 'Mar', temp: 8, rain: 48, rainyDays: 10, wind: 16 },
      { month: 'Apr', temp: 11, rain: 52, rainyDays: 9, wind: 14 },
      { month: 'May', temp: 15, rain: 63, rainyDays: 10, wind: 14 },
      { month: 'Jun', temp: 18, rain: 50, rainyDays: 8, wind: 11 },
      { month: 'Jul', temp: 20, rain: 62, rainyDays: 8, wind: 11 },
      { month: 'Aug', temp: 20, rain: 53, rainyDays: 7, wind: 11 },
      { month: 'Sep', temp: 17, rain: 55, rainyDays: 8, wind: 11 },
      { month: 'Oct', temp: 12, rain: 62, rainyDays: 9, wind: 14 },
      { month: 'Nov', temp: 8, rain: 52, rainyDays: 10, wind: 16 },
      { month: 'Dec', temp: 5, rain: 58, rainyDays: 11, wind: 16 }
    ]
  },
  'amsterdam': {
    city: 'Amsterdam', country: 'Netherlands',
    months: [
      { month: 'Jan', temp: 3, rain: 68, rainyDays: 12, wind: 22 },
      { month: 'Feb', temp: 3, rain: 47, rainyDays: 10, wind: 22 },
      { month: 'Mar', temp: 6, rain: 59, rainyDays: 11, wind: 20 },
      { month: 'Apr', temp: 9, rain: 41, rainyDays: 9, wind: 18 },
      { month: 'May', temp: 13, rain: 55, rainyDays: 9, wind: 16 },
      { month: 'Jun', temp: 16, rain: 65, rainyDays: 9, wind: 16 },
      { month: 'Jul', temp: 18, rain: 81, rainyDays: 10, wind: 16 },
      { month: 'Aug', temp: 18, rain: 85, rainyDays: 11, wind: 16 },
      { month: 'Sep', temp: 15, rain: 78, rainyDays: 10, wind: 16 },
      { month: 'Oct', temp: 11, rain: 83, rainyDays: 12, wind: 18 },
      { month: 'Nov', temp: 7, rain: 79, rainyDays: 13, wind: 20 },
      { month: 'Dec', temp: 4, rain: 75, rainyDays: 12, wind: 22 }
    ]
  },
  'berlin': {
    city: 'Berlin', country: 'Germany',
    months: [
      { month: 'Jan', temp: 0, rain: 42, rainyDays: 10, wind: 16 },
      { month: 'Feb', temp: 1, rain: 33, rainyDays: 8, wind: 16 },
      { month: 'Mar', temp: 5, rain: 41, rainyDays: 9, wind: 16 },
      { month: 'Apr', temp: 9, rain: 37, rainyDays: 8, wind: 14 },
      { month: 'May', temp: 14, rain: 54, rainyDays: 9, wind: 14 },
      { month: 'Jun', temp: 18, rain: 69, rainyDays: 9, wind: 14 },
      { month: 'Jul', temp: 20, rain: 56, rainyDays: 9, wind: 14 },
      { month: 'Aug', temp: 19, rain: 58, rainyDays: 8, wind: 14 },
      { month: 'Sep', temp: 15, rain: 45, rainyDays: 7, wind: 14 },
      { month: 'Oct', temp: 10, rain: 37, rainyDays: 7, wind: 14 },
      { month: 'Nov', temp: 5, rain: 44, rainyDays: 9, wind: 16 },
      { month: 'Dec', temp: 1, rain: 46, rainyDays: 10, wind: 16 }
    ]
  },
  'stockholm': {
    city: 'Stockholm', country: 'Sweden',
    months: [
      { month: 'Jan', temp: -1, rain: 39, rainyDays: 9, wind: 14 },
      { month: 'Feb', temp: -1, rain: 27, rainyDays: 7, wind: 14 },
      { month: 'Mar', temp: 2, rain: 26, rainyDays: 6, wind: 14 },
      { month: 'Apr', temp: 6, rain: 30, rainyDays: 6, wind: 14 },
      { month: 'May', temp: 12, rain: 30, rainyDays: 6, wind: 14 },
      { month: 'Jun', temp: 16, rain: 45, rainyDays: 8, wind: 14 },
      { month: 'Jul', temp: 19, rain: 72, rainyDays: 9, wind: 11 },
      { month: 'Aug', temp: 18, rain: 66, rainyDays: 9, wind: 11 },
      { month: 'Sep', temp: 13, rain: 55, rainyDays: 8, wind: 14 },
      { month: 'Oct', temp: 8, rain: 50, rainyDays: 9, wind: 14 },
      { month: 'Nov', temp: 4, rain: 53, rainyDays: 10, wind: 14 },
      { month: 'Dec', temp: 1, rain: 46, rainyDays: 10, wind: 14 }
    ]
  },
  'rome': {
    city: 'Rome', country: 'Italy',
    months: [
      { month: 'Jan', temp: 8, rain: 67, rainyDays: 7, wind: 11 },
      { month: 'Feb', temp: 9, rain: 73, rainyDays: 7, wind: 11 },
      { month: 'Mar', temp: 11, rain: 58, rainyDays: 7, wind: 14 },
      { month: 'Apr', temp: 14, rain: 62, rainyDays: 8, wind: 14 },
      { month: 'May', temp: 18, rain: 44, rainyDays: 5, wind: 11 },
      { month: 'Jun', temp: 22, rain: 22, rainyDays: 3, wind: 11 },
      { month: 'Jul', temp: 25, rain: 15, rainyDays: 2, wind: 11 },
      { month: 'Aug', temp: 25, rain: 22, rainyDays: 2, wind: 11 },
      { month: 'Sep', temp: 22, rain: 68, rainyDays: 5, wind: 11 },
      { month: 'Oct', temp: 17, rain: 94, rainyDays: 7, wind: 11 },
      { month: 'Nov', temp: 12, rain: 115, rainyDays: 9, wind: 14 },
      { month: 'Dec', temp: 9, rain: 81, rainyDays: 8, wind: 11 }
    ]
  },
  'athens': {
    city: 'Athens', country: 'Greece',
    months: [
      { month: 'Jan', temp: 10, rain: 57, rainyDays: 7, wind: 11 },
      { month: 'Feb', temp: 10, rain: 46, rainyDays: 6, wind: 11 },
      { month: 'Mar', temp: 12, rain: 41, rainyDays: 6, wind: 11 },
      { month: 'Apr', temp: 16, rain: 31, rainyDays: 5, wind: 11 },
      { month: 'May', temp: 21, rain: 23, rainyDays: 3, wind: 14 },
      { month: 'Jun', temp: 26, rain: 6, rainyDays: 1, wind: 14 },
      { month: 'Jul', temp: 29, rain: 6, rainyDays: 1, wind: 16 },
      { month: 'Aug', temp: 28, rain: 7, rainyDays: 1, wind: 14 },
      { month: 'Sep', temp: 24, rain: 15, rainyDays: 2, wind: 11 },
      { month: 'Oct', temp: 19, rain: 53, rainyDays: 5, wind: 11 },
      { month: 'Nov', temp: 14, rain: 58, rainyDays: 7, wind: 11 },
      { month: 'Dec', temp: 11, rain: 69, rainyDays: 8, wind: 11 }
    ]
  },
  'vienna': {
    city: 'Vienna', country: 'Austria',
    months: [
      { month: 'Jan', temp: 0, rain: 38, rainyDays: 8, wind: 14 },
      { month: 'Feb', temp: 2, rain: 34, rainyDays: 7, wind: 14 },
      { month: 'Mar', temp: 6, rain: 44, rainyDays: 8, wind: 14 },
      { month: 'Apr', temp: 11, rain: 45, rainyDays: 7, wind: 14 },
      { month: 'May', temp: 16, rain: 62, rainyDays: 9, wind: 14 },
      { month: 'Jun', temp: 19, rain: 70, rainyDays: 9, wind: 11 },
      { month: 'Jul', temp: 22, rain: 68, rainyDays: 8, wind: 11 },
      { month: 'Aug', temp: 21, rain: 58, rainyDays: 7, wind: 11 },
      { month: 'Sep', temp: 16, rain: 53, rainyDays: 7, wind: 11 },
      { month: 'Oct', temp: 11, rain: 40, rainyDays: 6, wind: 14 },
      { month: 'Nov', temp: 5, rain: 50, rainyDays: 8, wind: 14 },
      { month: 'Dec', temp: 1, rain: 43, rainyDays: 8, wind: 14 }
    ]
  },
  'copenhagen': {
    city: 'Copenhagen', country: 'Denmark',
    months: [
      { month: 'Jan', temp: 1, rain: 46, rainyDays: 10, wind: 20 },
      { month: 'Feb', temp: 1, rain: 30, rainyDays: 7, wind: 18 },
      { month: 'Mar', temp: 3, rain: 39, rainyDays: 8, wind: 18 },
      { month: 'Apr', temp: 7, rain: 33, rainyDays: 7, wind: 16 },
      { month: 'May', temp: 12, rain: 43, rainyDays: 7, wind: 16 },
      { month: 'Jun', temp: 16, rain: 55, rainyDays: 8, wind: 16 },
      { month: 'Jul', temp: 18, rain: 67, rainyDays: 10, wind: 14 },
      { month: 'Aug', temp: 18, rain: 64, rainyDays: 9, wind: 14 },
      { month: 'Sep', temp: 14, rain: 60, rainyDays: 9, wind: 16 },
      { month: 'Oct', temp: 10, rain: 56, rainyDays: 10, wind: 18 },
      { month: 'Nov', temp: 5, rain: 55, rainyDays: 10, wind: 20 },
      { month: 'Dec', temp: 2, rain: 51, rainyDays: 10, wind: 20 }
    ]
  },
  'zurich': {
    city: 'Zurich', country: 'Switzerland',
    months: [
      { month: 'Jan', temp: 0, rain: 63, rainyDays: 10, wind: 11 },
      { month: 'Feb', temp: 1, rain: 58, rainyDays: 9, wind: 11 },
      { month: 'Mar', temp: 5, rain: 65, rainyDays: 10, wind: 14 },
      { month: 'Apr', temp: 9, rain: 77, rainyDays: 11, wind: 14 },
      { month: 'May', temp: 14, rain: 99, rainyDays: 12, wind: 11 },
      { month: 'Jun', temp: 17, rain: 113, rainyDays: 12, wind: 11 },
      { month: 'Jul', temp: 20, rain: 100, rainyDays: 11, wind: 11 },
      { month: 'Aug', temp: 19, rain: 107, rainyDays: 10, wind: 11 },
      { month: 'Sep', temp: 15, rain: 80, rainyDays: 9, wind: 11 },
      { month: 'Oct', temp: 10, rain: 68, rainyDays: 9, wind: 11 },
      { month: 'Nov', temp: 5, rain: 72, rainyDays: 10, wind: 11 },
      { month: 'Dec', temp: 1, rain: 68, rainyDays: 10, wind: 11 }
    ]
  },
  'lisbon': {
    city: 'Lisbon', country: 'Portugal',
    months: [
      { month: 'Jan', temp: 12, rain: 110, rainyDays: 11, wind: 14 },
      { month: 'Feb', temp: 12, rain: 111, rainyDays: 10, wind: 14 },
      { month: 'Mar', temp: 14, rain: 69, rainyDays: 8, wind: 14 },
      { month: 'Apr', temp: 16, rain: 64, rainyDays: 8, wind: 14 },
      { month: 'May', temp: 18, rain: 39, rainyDays: 5, wind: 14 },
      { month: 'Jun', temp: 22, rain: 16, rainyDays: 2, wind: 14 },
      { month: 'Jul', temp: 24, rain: 4, rainyDays: 1, wind: 16 },
      { month: 'Aug', temp: 24, rain: 6, rainyDays: 1, wind: 14 },
      { month: 'Sep', temp: 22, rain: 33, rainyDays: 4, wind: 14 },
      { month: 'Oct', temp: 18, rain: 80, rainyDays: 8, wind: 14 },
      { month: 'Nov', temp: 14, rain: 114, rainyDays: 10, wind: 14 },
      { month: 'Dec', temp: 12, rain: 108, rainyDays: 11, wind: 14 }
    ]
  },
  'dubrovnik': {
    city: 'Dubrovnik', country: 'Croatia',
    months: [
      { month: 'Jan', temp: 9, rain: 95, rainyDays: 11, wind: 11 },
      { month: 'Feb', temp: 9, rain: 89, rainyDays: 10, wind: 11 },
      { month: 'Mar', temp: 11, rain: 81, rainyDays: 9, wind: 11 },
      { month: 'Apr', temp: 14, rain: 66, rainyDays: 8, wind: 11 },
      { month: 'May', temp: 19, rain: 49, rainyDays: 6, wind: 11 },
      { month: 'Jun', temp: 23, rain: 37, rainyDays: 4, wind: 11 },
      { month: 'Jul', temp: 26, rain: 24, rainyDays: 2, wind: 11 },
      { month: 'Aug', temp: 26, rain: 37, rainyDays: 3, wind: 11 },
      { month: 'Sep', temp: 22, rain: 72, rainyDays: 6, wind: 11 },
      { month: 'Oct', temp: 18, rain: 112, rainyDays: 9, wind: 11 },
      { month: 'Nov', temp: 13, rain: 142, rainyDays: 11, wind: 11 },
      { month: 'Dec', temp: 10, rain: 120, rainyDays: 11, wind: 11 }
    ]
  }
};

const NEWS_ITEMS = [
  { date: '2026-04-14', text: 'Duna Arena Academy swimmers dominate Hungarian National Championships with 12 gold medals', academy: 'duna-arena-academy' },
  { date: '2026-04-07', text: 'London Aquatics Centre announces expanded elite pathway program for 2026-27 season', academy: 'london-aquatics-centre' },
  { date: '2026-03-28', text: 'Club Natació Barcelona hosts Mare Nostrum Series with record international participation', academy: 'club-natacio-barcelona' },
  { date: '2026-03-20', text: 'European Aquatics announces new continental development initiative linking 30+ swim academies', academy: null }
];
