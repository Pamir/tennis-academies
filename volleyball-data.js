const SPORT_TYPE = 'volleyball';

const ACADEMIES = [
  {
    id: 'trentino-volley-academy',
    availability: { status: 'open', nextIntake: '2025-05-15', spotsLeft: 17, responseTime: '24h', privateLessons: false, yearRound: false },
    name: 'Trentino Volley Academy',
    country: 'Italy',
    countryFlag: '🇮🇹',
    city: 'Trento',
    lat: 46.0748, lng: 11.1217,
    website: 'https://www.trfrentinovolley.it',
    contactEmail: 'info@trfrentinovolley.it',
    individualLessons: true,
    boarding: true,
    level: 'Elite',
    starred: true,
    airport: { name: 'Verona Villafranca Airport', code: 'VRN', distance: '100 km', driveTime: '90 min' },
    beach: { distance: null, description: 'Inland — Lake Garda ~60 km, nearest Adriatic coast ~200 km' },
    climate: 'trento',
    priceRange: { from: 1500, to: 4000, unit: 'month', display: '€1,500–€4,000/mo' },
    programs: [
      { name: 'Youth Development', price: '€1,500/mo', desc: 'Fundamental skills, team play, positional training for ages 12-16' },
      { name: 'Advanced Competitive', price: '€2,500/mo', desc: 'Tactical training, match preparation, strength & conditioning' },
      { name: 'Elite Performance', price: '€4,000/mo', desc: 'Professional-level training, video analysis, competition calendar' }
    ],
    coaches: [
      { name: 'Angelo Lorenzetti', credential: 'FIPAV Level 4', background: 'Head coach of Trentino Volley, Champions League winner, Serie A titles', atpWta: false, bestRanking: null, rankingNote: '', languages: ['Italian', 'English'], instagram: '' },
      { name: 'Marco Fenoglio', credential: 'CEV Certified', background: 'Italian national youth team coach, specialist in setter development', atpWta: false, bestRanking: null, rankingNote: '', languages: ['Italian', 'English', 'Spanish'], instagram: '' }
    ],
    bestCoachRanking: null,
    facilities: 'BLM Group Arena (4,500 seats), 3 indoor training courts, strength & conditioning center, video analysis room, physiotherapy',
    courtSurfaces: ['Indoor Hardwood', 'Indoor Synthetic'],
    notableAlumni: [],
    photos: [
      'https://picsum.photos/seed/trentino-volley-1/800/500',
      'https://picsum.photos/seed/trentino-volley-2/800/500',
      'https://picsum.photos/seed/trentino-volley-3/800/500'
    ],
    description: 'Academy of one of Italy\'s most successful volleyball clubs. Trentino Volley has won multiple Champions League titles and develops world-class players through its comprehensive youth system.',
    nearbyHotels: [
      { name: 'Grand Hotel Trento', stars: 4, distanceKm: 1.0, features: ['Restaurant', 'Spa', 'Bar'], pool: true, wifi: true, pricePerNight: '€130' },
      { name: 'Hotel Buonconsiglio', stars: 4, distanceKm: 0.5, features: ['Restaurant', 'Parking'], pool: false, wifi: true, pricePerNight: '€90' }
    ],
    nearbyRestaurants: [
      { name: 'Ristorante Chiesa', cuisine: 'Trentino', distanceKm: 0.5, priceRange: '€€€', rating: 4.6, vegetarian: true, outdoor: true },
      { name: 'Osteria a Le Due Spade', cuisine: 'Italian Fine Dining', distanceKm: 0.3, priceRange: '€€€€', rating: 4.7, vegetarian: true, outdoor: false }
    ],
    nearbyMedical: [
      { name: 'Ospedale Santa Chiara', type: 'Hospital', distanceKm: 1.5, phone: '+39 0461 903111', emergency: true }
    ],
    costOfLiving: { rent1Bed: '€600', meal: '€10', monthlyFood: '€280', transport: '€35', currency: 'EUR', summary: 'Trento is affordable with excellent quality of life' },
    scholarships: { available: true, details: 'Performance scholarships for talented young players showing national-level potential.' },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: 'EU/EEA citizens, USA, Canada, Australia, UK — visa-free up to 90 days', notes: 'Non-EU citizens need Schengen visa for extended stays.' },
    airportTransfers: [
      { mode: 'Bus', duration: '90 min', cost: '€15', notes: 'Shuttle to Trento from Verona airport' },
      { mode: 'Train', duration: '70 min', cost: '€12', notes: 'Train from Verona Porta Nuova' }
    ],
    nearbyTournaments: [
      { name: 'Serie A SuperLega', level: 'Professional', surface: 'Indoor', month: 'Oct–Apr', venue: 'BLM Group Arena' }
    ],
    upcomingCamps: [
      { name: 'Summer Volleyball Camp', startDate: '2025-07-07', endDate: '2025-07-18', price: '€1,200', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'private', label: 'Private Room', pricePerWeek: 360, maxOccupancy: 1, bathType: 'ensuite', mealsIncluded: true },
        { type: 'twin', label: 'Twin Shared Room', pricePerWeek: 240, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'triple', label: 'Triple Room', pricePerWeek: 180, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: 1,
      shuttleToTraining: true,
      notes: 'Alpine sports residence with mountain views and wellness facilities'
    },
    videoTour: null,
    juniorInfo: {
      minAge: 7,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'partner-school',
      medicalStaff: true,
      safeguarding: true,
      airportPickup: true,
      mealPlan: 'full-board',
      curfew: '21:30',
      roommatePairing: 'age-gender',
      languageSupport: ['English', 'Italian'],
      emergencyProtocol: true
    }
  },
  {
    id: 'warsaw-volley-academy',
    availability: { status: 'open', nextIntake: '2025-06-15', spotsLeft: 13, responseTime: '48h', privateLessons: true, yearRound: false },
    name: 'PGE Skra Bełchatów Volleyball Academy',
    country: 'Poland',
    countryFlag: '🇵🇱',
    city: 'Bełchatów',
    lat: 51.3618, lng: 19.3579,
    website: 'https://www.skra.pl',
    contactEmail: 'info@skra.pl',
    individualLessons: true,
    boarding: true,
    level: 'Elite',
    starred: true,
    airport: { name: 'Łódź Władysław Reymont Airport', code: 'LCJ', distance: '60 km', driveTime: '50 min' },
    beach: { distance: null, description: 'Inland — nearest coast ~350 km to the Baltic Sea' },
    climate: 'warsaw',
    priceRange: { from: 800, to: 2500, unit: 'month', display: '€800–€2,500/mo' },
    programs: [
      { name: 'Juniors Academy', price: '€800/mo', desc: 'Fundamental volleyball skills, team play for ages 10-16' },
      { name: 'Competitive Development', price: '€1,500/mo', desc: 'Advanced skills, match tactics, physical preparation' },
      { name: 'Professional Pathway', price: '€2,500/mo', desc: 'Full-time training in PlusLiga methodology, individual coaching' }
    ],
    coaches: [
      { name: 'Michał Winiarski', credential: 'PZPS Level 3', background: 'Former Polish national team player, World Champion 2014, now professional coach', atpWta: false, bestRanking: null, rankingNote: '', languages: ['Polish', 'English', 'German'], instagram: '' },
      { name: 'Jakub Bednaruk', credential: 'CEV Certified', background: 'PlusLiga championship coach, Polish national team assistant', atpWta: false, bestRanking: null, rankingNote: '', languages: ['Polish', 'English'], instagram: '' }
    ],
    bestCoachRanking: null,
    facilities: 'Atlas Arena training center, 2 indoor courts, strength room, video analysis, sports medicine clinic',
    courtSurfaces: ['Indoor Synthetic', 'Indoor Hardwood'],
    notableAlumni: [],
    photos: [
      'https://picsum.photos/seed/skra-volley-1/800/500',
      'https://picsum.photos/seed/skra-volley-2/800/500',
      'https://picsum.photos/seed/skra-volley-3/800/500'
    ],
    description: 'Academy of multiple PlusLiga champion Skra Bełchatów. Poland is one of the world\'s top volleyball nations, and this academy offers immersion in the Polish volleyball system.',
    nearbyHotels: [
      { name: 'Hotel Nosselia', stars: 4, distanceKm: 2.0, features: ['Restaurant', 'Spa', 'Pool'], pool: true, wifi: true, pricePerNight: '€70' },
      { name: 'Hotel Wodnik', stars: 3, distanceKm: 1.0, features: ['Restaurant', 'Parking'], pool: false, wifi: true, pricePerNight: '€40' }
    ],
    nearbyRestaurants: [
      { name: 'Restauracja Magnolia', cuisine: 'Polish', distanceKm: 1.0, priceRange: '€€', rating: 4.3, vegetarian: true, outdoor: true }
    ],
    nearbyMedical: [
      { name: 'Szpital Wojewódzki', type: 'Hospital', distanceKm: 2.0, phone: '+48 44 635 83 00', emergency: true }
    ],
    costOfLiving: { rent1Bed: '€300', meal: '€5', monthlyFood: '€200', transport: '€25', currency: 'PLN', summary: 'Bełchatów is very affordable by European standards' },
    scholarships: { available: true, details: 'Club-funded scholarships for exceptional volleyball talent through PZPS.' },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: 'EU/EEA citizens, USA, Canada, Australia, UK — visa-free up to 90 days', notes: 'Non-EU citizens need Schengen visa for stays over 90 days.' },
    airportTransfers: [
      { mode: 'Bus', duration: '60 min', cost: '€8', notes: 'Bus from Łódź to Bełchatów' },
      { mode: 'Taxi', duration: '50 min', cost: '€40', notes: '' }
    ],
    nearbyTournaments: [
      { name: 'PlusLiga', level: 'Professional', surface: 'Indoor', month: 'Oct–Apr', venue: 'Atlas Arena' }
    ],
    upcomingCamps: [
      { name: 'Polish Volleyball Camp', startDate: '2025-06-23', endDate: '2025-07-04', price: '€800', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'private', label: 'Private Room', pricePerWeek: 230, maxOccupancy: 1, bathType: 'ensuite', mealsIncluded: true },
        { type: 'twin', label: 'Twin Shared Room', pricePerWeek: 150, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'triple', label: 'Triple Room', pricePerWeek: 120, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true },
        { type: 'dorm', label: 'Dormitory', pricePerWeek: 70, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: 1,
      shuttleToTraining: true,
      notes: 'City centre location in Warsaw, walking distance to training venue'
    },
    videoTour: null,
    juniorInfo: {
      minAge: 10,
      maxAge: 17,
      supervision: 'daytime',
      guardianStay: true,
      schooling: 'online-support',
      medicalStaff: true,
      safeguarding: true,
      airportPickup: true,
      mealPlan: 'half-board',
      curfew: '22:00',
      roommatePairing: 'age-only',
      languageSupport: ['English', 'Polish'],
      emergencyProtocol: true
    }
  },
  {
    id: 'istanbul-volley-academy',
    availability: { status: 'limited', nextIntake: '2025-10-01', spotsLeft: 3, responseTime: '48h', privateLessons: true, yearRound: true },
    name: 'VakıfBank Volleyball Academy',
    country: 'Turkey',
    countryFlag: '🇹🇷',
    city: 'Istanbul',
    lat: 41.0522, lng: 29.0031,
    website: 'https://www.vakifbanksporkulubu.com',
    contactEmail: 'info@vakifbanksporkulubu.com',
    individualLessons: true,
    boarding: true,
    level: 'Elite',
    starred: true,
    airport: { name: 'Istanbul Airport', code: 'IST', distance: '35 km', driveTime: '45 min' },
    beach: { distance: 10, description: 'Bosphorus and Marmara Sea beaches accessible' },
    climate: 'istanbul',
    priceRange: { from: 700, to: 2200, unit: 'month', display: '€700–€2,200/mo' },
    programs: [
      { name: 'Youth Academy', price: '€700/mo', desc: 'Grassroots volleyball development for ages 10-15' },
      { name: 'Advanced Training', price: '€1,400/mo', desc: 'Competitive preparation, tactical development, position specialization' },
      { name: 'Elite Women\'s Program', price: '€2,200/mo', desc: 'Professional pathway training under world-class coaching staff' }
    ],
    coaches: [
      { name: 'Giovanni Guidetti', credential: 'FIVB Level 3', background: 'Head coach of VakıfBank, multiple Champions League titles, Italian-born coaching legend', atpWta: false, bestRanking: null, rankingNote: '', languages: ['Italian', 'English', 'Turkish', 'German'], instagram: '' },
      { name: 'Ayça Akın', credential: 'TVF Level 3', background: 'Former Turkish national team player, specialist in youth development', atpWta: false, bestRanking: null, rankingNote: '', languages: ['Turkish', 'English'], instagram: '' }
    ],
    bestCoachRanking: null,
    facilities: 'VakıfBank Sports Palace, 3 indoor courts, beach volleyball courts, fitness center, physiotherapy, video analysis lab',
    courtSurfaces: ['Indoor Synthetic', 'Sand (Beach)'],
    notableAlumni: [],
    photos: [
      'https://picsum.photos/seed/vakifbank-volley-1/800/500',
      'https://picsum.photos/seed/vakifbank-volley-2/800/500',
      'https://picsum.photos/seed/vakifbank-volley-3/800/500'
    ],
    description: 'Academy of the most successful women\'s volleyball club in the world. VakıfBank has won 5 Champions League titles and produces top international players through its youth system.',
    nearbyHotels: [
      { name: 'Hilton Istanbul Bomonti', stars: 5, distanceKm: 3.0, features: ['Restaurant', 'Spa', 'Pool', 'Gym'], pool: true, wifi: true, pricePerNight: '€150' },
      { name: 'Mercure Istanbul Taksim', stars: 4, distanceKm: 5.0, features: ['Restaurant', 'Bar'], pool: false, wifi: true, pricePerNight: '€80' }
    ],
    nearbyRestaurants: [
      { name: 'Nusr-Et Steakhouse', cuisine: 'Turkish Steakhouse', distanceKm: 5.0, priceRange: '€€€€', rating: 4.3, vegetarian: false, outdoor: true },
      { name: 'Karaköy Lokantası', cuisine: 'Turkish', distanceKm: 8.0, priceRange: '€€€', rating: 4.5, vegetarian: true, outdoor: true }
    ],
    nearbyMedical: [
      { name: 'Acıbadem Hospital', type: 'Hospital', distanceKm: 5.0, phone: '+90 444 55 44', emergency: true }
    ],
    costOfLiving: { rent1Bed: '€400', meal: '€5', monthlyFood: '€200', transport: '€20', currency: 'TRY', summary: 'Istanbul is affordable by European standards with low cost of living' },
    scholarships: { available: true, details: 'VakıfBank sports scholarship program for talented young athletes.' },
    visaInfo: { schengen: false, eu: false, visaFreeCountries: 'EU citizens (90 days visa-free), USA/Canada/UK (e-Visa required)', notes: 'Most nationalities can obtain e-Visa online. Student visa for long-term training.' },
    airportTransfers: [
      { mode: 'Bus', duration: '60 min', cost: '€5', notes: 'Havaist airport bus to city center' },
      { mode: 'Taxi', duration: '45 min', cost: '€25–35', notes: '' }
    ],
    nearbyTournaments: [
      { name: 'Turkish Sultanlar Ligi', level: 'Professional', surface: 'Indoor', month: 'Oct–Apr', venue: 'Various Istanbul venues' }
    ],
    upcomingCamps: [
      { name: 'Istanbul Volleyball Camp', startDate: '2025-07-14', endDate: '2025-07-25', price: '€900', level: 'All Levels' }
    ],
    accommodation: {
      types: [
        { type: 'private', label: 'Private Room', pricePerWeek: 270, maxOccupancy: 1, bathType: 'ensuite', mealsIncluded: true },
        { type: 'twin', label: 'Twin Shared Room', pricePerWeek: 170, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'triple', label: 'Triple Room', pricePerWeek: 130, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true },
        { type: 'dorm', label: 'Dormitory', pricePerWeek: 80, maxOccupancy: 6, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: 1,
      shuttleToTraining: false,
      notes: 'Bosphorus-view residence with gym and recovery centre included'
    },
    videoTour: null,
    juniorInfo: {
      minAge: 6,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'tutoring',
      medicalStaff: true,
      safeguarding: true,
      airportPickup: true,
      mealPlan: 'full-board',
      curfew: '21:00',
      roommatePairing: 'age-gender',
      languageSupport: ['English', 'Turkish'],
      emergencyProtocol: true
    }
  },
  {
    id: 'modena-volley-academy',
    availability: { status: 'limited', nextIntake: '2025-10-01', spotsLeft: 3, responseTime: '48h', privateLessons: true, yearRound: true },
    name: 'Modena Volley Academy',
    country: 'Italy',
    countryFlag: '🇮🇹',
    city: 'Modena',
    lat: 44.6471, lng: 10.9252,
    website: 'https://www.modenavolley.it',
    contactEmail: 'info@modenavolley.it',
    individualLessons: true,
    boarding: true,
    level: 'Elite',
    starred: false,
    airport: { name: 'Bologna Guglielmo Marconi Airport', code: 'BLQ', distance: '40 km', driveTime: '35 min' },
    beach: { distance: null, description: 'Inland — nearest Adriatic coast ~130 km to Rimini' },
    climate: 'modena',
    priceRange: { from: 1200, to: 3500, unit: 'month', display: '€1,200–€3,500/mo' },
    programs: [
      { name: 'Giovanile', price: '€1,200/mo', desc: 'Youth volleyball fundamentals and team tactics' },
      { name: 'Serie B Pathway', price: '€2,200/mo', desc: 'Competitive development aimed at professional league readiness' },
      { name: 'SuperLega Preparation', price: '€3,500/mo', desc: 'Elite training replicating SuperLega professional methodology' }
    ],
    coaches: [
      { name: 'Andrea Giani', credential: 'FIPAV Level 4', background: 'Volleyball legend, World Championship winner as player, now elite coach', atpWta: false, bestRanking: null, rankingNote: '', languages: ['Italian', 'English', 'French', 'German'], instagram: '' }
    ],
    bestCoachRanking: null,
    facilities: 'PalaPanini training complex, 2 indoor courts, gym, physiotherapy, performance lab',
    courtSurfaces: ['Indoor Hardwood', 'Indoor Synthetic'],
    notableAlumni: [],
    photos: [
      'https://picsum.photos/seed/modena-volley-1/800/500',
      'https://picsum.photos/seed/modena-volley-2/800/500'
    ],
    description: 'Historic Modena Volley, 12-time Italian champions, offer professional-level youth development in the heart of Emilia-Romagna. Italian volleyball tradition at its finest.',
    nearbyHotels: [
      { name: 'Best Western Premier Milano Palace Hotel', stars: 4, distanceKm: 1.0, features: ['Restaurant', 'Bar', 'Parking'], pool: false, wifi: true, pricePerNight: '€100' },
      { name: 'Hotel Cervetta 5', stars: 3, distanceKm: 0.5, features: ['Restaurant'], pool: false, wifi: true, pricePerNight: '€70' }
    ],
    nearbyRestaurants: [
      { name: 'Osteria Francescana', cuisine: 'Italian Fine Dining', distanceKm: 0.5, priceRange: '€€€€', rating: 4.9, vegetarian: true, outdoor: false }
    ],
    nearbyMedical: [
      { name: 'Policlinico di Modena', type: 'Hospital', distanceKm: 2.0, phone: '+39 059 422 2111', emergency: true }
    ],
    costOfLiving: { rent1Bed: '€550', meal: '€10', monthlyFood: '€270', transport: '€35', currency: 'EUR', summary: 'Modena is affordable with outstanding food culture' },
    scholarships: { available: true, details: 'Club scholarship program for talented under-18 players.' },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: 'EU/EEA citizens, USA, Canada, Australia, UK — visa-free up to 90 days', notes: 'Non-EU citizens need Schengen visa for extended stays.' },
    airportTransfers: [
      { mode: 'Train', duration: '25 min', cost: '€5', notes: 'Train from Bologna to Modena' },
      { mode: 'Taxi', duration: '35 min', cost: '€50', notes: '' }
    ],
    nearbyTournaments: [
      { name: 'SuperLega', level: 'Professional', surface: 'Indoor', month: 'Oct–Apr', venue: 'PalaPanini' }
    ],
    upcomingCamps: [],
    accommodation: {
      types: [
        { type: 'private', label: 'Private Room', pricePerWeek: 370, maxOccupancy: 1, bathType: 'ensuite', mealsIncluded: true },
        { type: 'twin', label: 'Twin Shared Room', pricePerWeek: 240, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'triple', label: 'Triple Room', pricePerWeek: 180, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: 2,
      shuttleToTraining: true,
      notes: 'Historic Emilia-Romagna residence with Italian full-board cuisine'
    },
    videoTour: null,
    juniorInfo: {
      minAge: 12,
      maxAge: 17,
      supervision: 'training-only',
      guardianStay: false,
      schooling: 'none',
      medicalStaff: true,
      safeguarding: true,
      airportPickup: false,
      mealPlan: 'half-board',
      curfew: '23:00',
      roommatePairing: 'self-select',
      languageSupport: ['English', 'Italian'],
      emergencyProtocol: true
    }
  },
  {
    id: 'zenit-kazan-academy',
    availability: { status: 'closed', nextIntake: '2025-12-01', spotsLeft: null, responseTime: '3-5 days', privateLessons: true, yearRound: false },
    name: 'Zenit Kazan Volleyball Academy',
    country: 'Russia',
    countryFlag: '🇷🇺',
    city: 'Kazan',
    lat: 55.8304, lng: 49.0661,
    website: 'https://www.zenit-kazan.com',
    contactEmail: 'info@zenit-kazan.com',
    individualLessons: true,
    boarding: true,
    level: 'Elite',
    starred: false,
    airport: { name: 'Kazan International Airport', code: 'KZN', distance: '25 km', driveTime: '30 min' },
    beach: { distance: null, description: 'Inland — Volga River swimming areas available in summer' },
    climate: 'kazan',
    priceRange: { from: 600, to: 1800, unit: 'month', display: '€600–€1,800/mo' },
    programs: [
      { name: 'Youth Development', price: '€600/mo', desc: 'Russian volleyball school methodology for ages 10-16' },
      { name: 'Competitive Squad', price: '€1,200/mo', desc: 'Match preparation, tactical training, physical conditioning' },
      { name: 'Professional Pathway', price: '€1,800/mo', desc: 'Elite training designed to develop Superliga-level players' }
    ],
    coaches: [
      { name: 'Alexey Verbov', credential: 'VFV Level 3', background: 'Olympic gold medalist (2012), World Champion, now developing next generation', atpWta: false, bestRanking: null, rankingNote: '', languages: ['Russian', 'English'], instagram: '' }
    ],
    bestCoachRanking: null,
    facilities: 'Volleyball Center of the Republic of Tatarstan, 3 indoor courts, gym, sports medicine center, boarding accommodation',
    courtSurfaces: ['Indoor Synthetic'],
    notableAlumni: [],
    photos: [
      'https://picsum.photos/seed/zenit-kazan-1/800/500',
      'https://picsum.photos/seed/zenit-kazan-2/800/500'
    ],
    description: 'Academy of the legendary Zenit Kazan, multiple Champions League and Russian Superliga winners. Access to the Russian volleyball school, one of the world\'s strongest systems.',
    nearbyHotels: [
      { name: 'Kazan Palace by Tasigo', stars: 5, distanceKm: 3.0, features: ['Restaurant', 'Spa', 'Pool'], pool: true, wifi: true, pricePerNight: '€100' },
      { name: 'Ibis Kazan Centre', stars: 3, distanceKm: 2.0, features: ['Restaurant', 'Bar'], pool: false, wifi: true, pricePerNight: '€40' }
    ],
    nearbyRestaurants: [
      { name: 'Dom Tatarskoy Kulinarii', cuisine: 'Tatar', distanceKm: 3.0, priceRange: '€€', rating: 4.5, vegetarian: true, outdoor: true }
    ],
    nearbyMedical: [
      { name: 'Republican Clinical Hospital', type: 'Hospital', distanceKm: 5.0, phone: '+7 843 231 21 40', emergency: true }
    ],
    costOfLiving: { rent1Bed: '€250', meal: '€4', monthlyFood: '€150', transport: '€15', currency: 'RUB', summary: 'Kazan is very affordable with low living costs' },
    scholarships: { available: true, details: 'State-funded sports scholarships for talented volleyball players.' },
    visaInfo: { schengen: false, eu: false, visaFreeCountries: 'CIS countries visa-free, most other nationalities require invitation visa', notes: 'Russian sports visa required for training programs. Academy assists with invitation letters.' },
    airportTransfers: [
      { mode: 'Bus', duration: '45 min', cost: '€2', notes: 'Aeroexpress bus to city center' },
      { mode: 'Taxi', duration: '30 min', cost: '€10–15', notes: '' }
    ],
    nearbyTournaments: [
      { name: 'Russian Superliga', level: 'Professional', surface: 'Indoor', month: 'Oct–May', venue: 'Kazan Volleyball Center' }
    ],
    upcomingCamps: [],
    videoTour: null,
    juniorInfo: {
      minAge: 10,
      maxAge: 18,
      supervision: 'daytime',
      guardianStay: true,
      schooling: 'online-support',
      medicalStaff: true,
      safeguarding: true,
      airportPickup: true,
      mealPlan: 'full-board',
      curfew: '22:00',
      roommatePairing: 'age-only',
      languageSupport: ['English', 'Russian'],
      emergencyProtocol: true
    }
  },
  {
    id: 'berlin-recycling-volleys',
    availability: { status: 'open', nextIntake: '2025-05-15', spotsLeft: 7, responseTime: '24h', privateLessons: false, yearRound: true },
    name: 'Berlin Recycling Volleys Academy',
    country: 'Germany',
    countryFlag: '🇩🇪',
    city: 'Berlin',
    lat: 52.4573, lng: 13.3878,
    website: 'https://www.berlin-recycling-volleys.de',
    contactEmail: 'info@berlin-recycling-volleys.de',
    individualLessons: true,
    boarding: false,
    level: 'All levels',
    starred: false,
    airport: { name: 'Berlin Brandenburg Airport', code: 'BER', distance: '18 km', driveTime: '25 min' },
    beach: { distance: null, description: 'Inland — city beach volleyball courts and lakes available' },
    climate: 'berlin',
    priceRange: { from: 900, to: 2400, unit: 'month', display: '€900–€2,400/mo' },
    programs: [
      { name: 'Grundlagen', price: '€900/mo', desc: 'Volleyball fundamentals, serving, passing, setting basics' },
      { name: 'Bundesliga Vorbereitung', price: '€1,600/mo', desc: 'Competitive preparation for Bundesliga-level play' },
      { name: 'Leistungszentrum', price: '€2,400/mo', desc: 'Performance center training with full professional support' }
    ],
    coaches: [
      { name: 'Cedric Enard', credential: 'FIVB Level 3', background: 'French national team coach experience, Bundesliga championship winner', atpWta: false, bestRanking: null, rankingNote: '', languages: ['French', 'German', 'English'], instagram: '' }
    ],
    bestCoachRanking: null,
    facilities: 'Max-Schmeling-Halle training facility, 2 indoor courts, beach volleyball area, gym, sports science lab',
    courtSurfaces: ['Indoor Hardwood', 'Sand (Beach)'],
    notableAlumni: [],
    photos: [
      'https://picsum.photos/seed/berlin-volley-1/800/500',
      'https://picsum.photos/seed/berlin-volley-2/800/500'
    ],
    description: 'Academy of Germany\'s most successful volleyball club. Berlin\'s vibrant sports culture and affordable living make this an attractive training destination.',
    nearbyHotels: [
      { name: 'Novotel Berlin Mitte', stars: 4, distanceKm: 2.0, features: ['Restaurant', 'Bar', 'Gym'], pool: false, wifi: true, pricePerNight: '€100' },
      { name: 'Generator Berlin Prenzlauer Berg', stars: 2, distanceKm: 0.5, features: ['Bar', 'Restaurant'], pool: false, wifi: true, pricePerNight: '€40' }
    ],
    nearbyRestaurants: [
      { name: 'Konnopke\'s Imbiss', cuisine: 'German Street Food', distanceKm: 0.5, priceRange: '€', rating: 4.4, vegetarian: false, outdoor: true }
    ],
    nearbyMedical: [
      { name: 'DRK Kliniken Berlin', type: 'Hospital', distanceKm: 3.0, phone: '+49 30 3035 0', emergency: true }
    ],
    costOfLiving: { rent1Bed: '€750', meal: '€10', monthlyFood: '€280', transport: '€49', currency: 'EUR', summary: 'Berlin is affordable compared to other European capitals' },
    scholarships: { available: false, details: '' },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: 'EU/EEA citizens, USA, Canada, Australia, UK — visa-free up to 90 days', notes: 'National visa required for stays over 90 days.' },
    airportTransfers: [
      { mode: 'Train', duration: '30 min', cost: '€3.80', notes: 'Airport Express to central Berlin' },
      { mode: 'Taxi', duration: '25 min', cost: '€35–45', notes: '' }
    ],
    nearbyTournaments: [
      { name: 'Bundesliga', level: 'Professional', surface: 'Indoor', month: 'Oct–Apr', venue: 'Max-Schmeling-Halle' }
    ],
    upcomingCamps: [],
    accommodation: {
      types: [
        { type: 'private', label: 'Private Room', pricePerWeek: 390, maxOccupancy: 1, bathType: 'ensuite', mealsIncluded: true },
        { type: 'twin', label: 'Twin Shared Room', pricePerWeek: 260, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'triple', label: 'Triple Room', pricePerWeek: 200, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: false,
      minStay: 1,
      shuttleToTraining: true,
      notes: 'Modern sports campus with strength and conditioning facility access'
    },
    videoTour: null,
    juniorInfo: {
      minAge: 8,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'partner-school',
      medicalStaff: true,
      safeguarding: true,
      airportPickup: true,
      mealPlan: 'full-board',
      curfew: '21:30',
      roommatePairing: 'age-gender',
      languageSupport: ['English', 'German'],
      emergencyProtocol: true
    }
  },
  {
    id: 'paris-volley-academy',
    availability: { status: 'limited', nextIntake: '2025-09-15', spotsLeft: 4, responseTime: '24h', privateLessons: true, yearRound: true },
    name: 'Paris Volley Academy',
    country: 'France',
    countryFlag: '🇫🇷',
    city: 'Paris',
    lat: 48.8380, lng: 2.3780,
    website: 'https://www.parisvolley.com',
    contactEmail: 'info@parisvolley.com',
    individualLessons: true,
    boarding: false,
    level: 'All levels',
    starred: false,
    airport: { name: 'Charles de Gaulle Airport', code: 'CDG', distance: '25 km', driveTime: '35 min' },
    beach: { distance: null, description: 'Inland — nearest coast ~200 km to Normandy' },
    climate: 'paris',
    priceRange: { from: 1000, to: 2800, unit: 'month', display: '€1,000–€2,800/mo' },
    programs: [
      { name: 'Formation', price: '€1,000/mo', desc: 'Volleyball school for ages 12-18, technique and tactics' },
      { name: 'Pôle Espoir', price: '€1,800/mo', desc: 'Regional excellence center, competition-focused training' },
      { name: 'Elite Programme', price: '€2,800/mo', desc: 'Professional pathway with Ligue A methodology' }
    ],
    coaches: [
      { name: 'Cédric Moreau', credential: 'FFVB Brevet d\'État', background: 'French national team staff, Ligue A coaching experience', atpWta: false, bestRanking: null, rankingNote: '', languages: ['French', 'English'], instagram: '' }
    ],
    bestCoachRanking: null,
    facilities: 'Stade Pierre de Coubertin training center, 2 indoor courts, strength room, video analysis',
    courtSurfaces: ['Indoor Hardwood'],
    notableAlumni: [],
    photos: [
      'https://picsum.photos/seed/paris-volley-1/800/500',
      'https://picsum.photos/seed/paris-volley-2/800/500'
    ],
    description: 'Paris Volley offers professional volleyball development in the heart of France. French volleyball methodology combined with the cultural experience of training in Paris.',
    nearbyHotels: [
      { name: 'Hotel Mercure Paris Bercy', stars: 4, distanceKm: 2.0, features: ['Restaurant', 'Bar'], pool: false, wifi: true, pricePerNight: '€130' },
      { name: 'Ibis Paris Bercy Village', stars: 3, distanceKm: 1.5, features: ['Restaurant'], pool: false, wifi: true, pricePerNight: '€85' }
    ],
    nearbyRestaurants: [
      { name: 'Le Petit Cler', cuisine: 'French Bistro', distanceKm: 3.0, priceRange: '€€', rating: 4.5, vegetarian: true, outdoor: true }
    ],
    nearbyMedical: [
      { name: 'Hôpital Pitié-Salpêtrière', type: 'Hospital', distanceKm: 1.5, phone: '+33 1 42 16 00 00', emergency: true }
    ],
    costOfLiving: { rent1Bed: '€1,100', meal: '€14', monthlyFood: '€400', transport: '€75', currency: 'EUR', summary: 'Paris is expensive but has excellent public transport and culture' },
    scholarships: { available: true, details: 'FFVB Pôle Espoir funding for nationally ranked players.' },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: 'EU/EEA citizens, USA, Canada, Australia, UK — visa-free up to 90 days', notes: 'Long-stay visa for training programs over 90 days.' },
    airportTransfers: [
      { mode: 'RER B', duration: '45 min', cost: '€11', notes: 'Direct train to Paris' },
      { mode: 'Taxi', duration: '35 min', cost: '€50–70', notes: 'Fixed rate from CDG' }
    ],
    nearbyTournaments: [],
    upcomingCamps: [],
    accommodation: {
      types: [
        { type: 'private', label: 'Private Room', pricePerWeek: 430, maxOccupancy: 1, bathType: 'ensuite', mealsIncluded: true },
        { type: 'twin', label: 'Twin Shared Room', pricePerWeek: 280, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'triple', label: 'Triple Room', pricePerWeek: 220, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true },
        { type: 'apartment', label: 'Studio Apartment', pricePerWeek: 520, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: 1,
      shuttleToTraining: true,
      notes: 'Parisian residence with team dining hall and metro access'
    },
    videoTour: null,
    juniorInfo: {
      minAge: 11,
      maxAge: 17,
      supervision: 'daytime',
      guardianStay: true,
      schooling: 'tutoring',
      medicalStaff: true,
      safeguarding: true,
      airportPickup: true,
      mealPlan: 'half-board',
      curfew: '22:00',
      roommatePairing: 'age-gender',
      languageSupport: ['English', 'French'],
      emergencyProtocol: true
    }
  },
  {
    id: 'ankara-volley-academy',
    availability: { status: 'open', nextIntake: '2025-09-01', spotsLeft: 14, responseTime: '24h', privateLessons: false, yearRound: true },
    name: 'Halkbank Ankara Volleyball Academy',
    country: 'Turkey',
    countryFlag: '🇹🇷',
    city: 'Ankara',
    lat: 39.9208, lng: 32.8541,
    website: 'https://www.halkbankspor.org.tr',
    contactEmail: 'info@halkbankspor.org.tr',
    individualLessons: true,
    boarding: true,
    level: 'Elite',
    starred: false,
    airport: { name: 'Ankara Esenboğa Airport', code: 'ESB', distance: '28 km', driveTime: '30 min' },
    beach: { distance: null, description: 'Inland — nearest coast ~400 km to the Black Sea or Mediterranean' },
    climate: 'ankara',
    priceRange: { from: 500, to: 1600, unit: 'month', display: '€500–€1,600/mo' },
    programs: [
      { name: 'Youth Program', price: '€500/mo', desc: 'Grassroots volleyball for ages 10-14' },
      { name: 'Development Squad', price: '€1,000/mo', desc: 'Competitive skills, match play, position specialization' },
      { name: 'Pro Academy', price: '€1,600/mo', desc: 'Professional preparation, Efeler Ligi methodology' }
    ],
    coaches: [
      { name: 'Mustafa Kamer', credential: 'TVF Level 3', background: 'Former Turkish national team assistant, multiple Efeler Ligi titles with Halkbank', atpWta: false, bestRanking: null, rankingNote: '', languages: ['Turkish', 'English'], instagram: '' }
    ],
    bestCoachRanking: null,
    facilities: 'Halkbank Sports Complex, 2 indoor courts, beach volleyball area, strength center, physiotherapy',
    courtSurfaces: ['Indoor Synthetic', 'Sand (Beach)'],
    notableAlumni: [],
    photos: [
      'https://picsum.photos/seed/halkbank-volley-1/800/500',
      'https://picsum.photos/seed/halkbank-volley-2/800/500'
    ],
    description: 'Academy of Halkbank, one of Turkey\'s most successful men\'s volleyball clubs. Very affordable training in the Turkish capital with strong coaching infrastructure.',
    nearbyHotels: [
      { name: 'JW Marriott Ankara', stars: 5, distanceKm: 5.0, features: ['Restaurant', 'Spa', 'Pool', 'Gym'], pool: true, wifi: true, pricePerNight: '€120' },
      { name: 'Hotel & Suites 61', stars: 3, distanceKm: 2.0, features: ['Restaurant', 'Parking'], pool: false, wifi: true, pricePerNight: '€45' }
    ],
    nearbyRestaurants: [
      { name: 'Trilye', cuisine: 'Turkish Seafood', distanceKm: 4.0, priceRange: '€€€', rating: 4.5, vegetarian: true, outdoor: true }
    ],
    nearbyMedical: [
      { name: 'Hacettepe University Hospital', type: 'Hospital', distanceKm: 4.0, phone: '+90 312 305 50 00', emergency: true }
    ],
    costOfLiving: { rent1Bed: '€300', meal: '€4', monthlyFood: '€150', transport: '€15', currency: 'TRY', summary: 'Ankara is very affordable with low cost of living' },
    scholarships: { available: true, details: 'Club-funded sports scholarships for promising athletes.' },
    visaInfo: { schengen: false, eu: false, visaFreeCountries: 'EU citizens (90 days visa-free), USA/Canada/UK (e-Visa required)', notes: 'e-Visa available online for most nationalities.' },
    airportTransfers: [
      { mode: 'Bus', duration: '40 min', cost: '€3', notes: 'Havaş shuttle to city center' },
      { mode: 'Taxi', duration: '30 min', cost: '€15–20', notes: '' }
    ],
    nearbyTournaments: [
      { name: 'Efeler Ligi', level: 'Professional', surface: 'Indoor', month: 'Oct–Apr', venue: 'Ankara Sports Hall' }
    ],
    upcomingCamps: [],
    videoTour: null,
    juniorInfo: {
      minAge: 18,
      maxAge: 35,
      supervision: 'none',
      guardianStay: false,
      schooling: 'none',
      medicalStaff: false,
      safeguarding: false,
      airportPickup: false,
      mealPlan: 'self-catering',
      curfew: null,
      roommatePairing: 'n/a',
      languageSupport: ['English', 'Turkish'],
      emergencyProtocol: false
    }
  },
  {
    id: 'belgrade-volley-academy',
    availability: { status: 'closed', nextIntake: '2025-12-01', spotsLeft: null, responseTime: '3-5 days', privateLessons: true, yearRound: false },
    name: 'OK Vojvodina Volleyball Academy',
    country: 'Serbia',
    countryFlag: '🇷🇸',
    city: 'Novi Sad',
    lat: 45.2671, lng: 19.8335,
    website: 'https://www.okvojvodina.rs',
    contactEmail: 'info@okvojvodina.rs',
    individualLessons: true,
    boarding: true,
    level: 'All levels',
    starred: false,
    airport: { name: 'Belgrade Nikola Tesla Airport', code: 'BEG', distance: '90 km', driveTime: '70 min' },
    beach: { distance: null, description: 'Inland — Danube River and Štrand beach on the Danube in Novi Sad' },
    climate: 'belgrade',
    priceRange: { from: 400, to: 1200, unit: 'month', display: '€400–€1,200/mo' },
    programs: [
      { name: 'Mini Volleyball', price: '€400/mo', desc: 'Introduction to volleyball for ages 8-12' },
      { name: 'Junior Development', price: '€700/mo', desc: 'Technical skills, team tactics, match preparation' },
      { name: 'Senior Academy', price: '€1,200/mo', desc: 'Advanced training, competition preparation, Serbian league pathway' }
    ],
    coaches: [
      { name: 'Nikola Grbić', credential: 'OSS Level 3', background: 'Olympic gold medalist (2000), World Champion, one of Serbia\'s greatest volleyball players', atpWta: false, bestRanking: null, rankingNote: '', languages: ['Serbian', 'Italian', 'English'], instagram: '' }
    ],
    bestCoachRanking: null,
    facilities: 'SPENS Sports Centre, 2 indoor courts, outdoor sand courts, gym, sports medicine',
    courtSurfaces: ['Indoor Hardwood', 'Sand (Beach)'],
    notableAlumni: [],
    photos: [
      'https://picsum.photos/seed/vojvodina-volley-1/800/500',
      'https://picsum.photos/seed/vojvodina-volley-2/800/500'
    ],
    description: 'Serbian volleyball academy offering exceptional value and access to one of the strongest volleyball traditions in the world. Serbia has produced numerous Olympic and World Championship medalists.',
    nearbyHotels: [
      { name: 'Hotel Sheraton Novi Sad', stars: 5, distanceKm: 1.0, features: ['Restaurant', 'Spa', 'Pool'], pool: true, wifi: true, pricePerNight: '€90' },
      { name: 'Hotel Centar', stars: 3, distanceKm: 0.5, features: ['Restaurant'], pool: false, wifi: true, pricePerNight: '€35' }
    ],
    nearbyRestaurants: [
      { name: 'Fish i Zeleniš', cuisine: 'Serbian', distanceKm: 0.5, priceRange: '€€', rating: 4.5, vegetarian: true, outdoor: true }
    ],
    nearbyMedical: [
      { name: 'Clinical Centre of Vojvodina', type: 'Hospital', distanceKm: 2.0, phone: '+381 21 484 3484', emergency: true }
    ],
    costOfLiving: { rent1Bed: '€300', meal: '€5', monthlyFood: '€200', transport: '€25', currency: 'RSD', summary: 'Novi Sad is extremely affordable with great quality of life' },
    scholarships: { available: true, details: 'Serbian Volleyball Federation support for elite youth athletes.' },
    visaInfo: { schengen: false, eu: false, visaFreeCountries: 'EU/EEA citizens, USA, Canada, Australia, UK — visa-free up to 90 days', notes: 'Non-EU citizens may need tourist visa for longer stays.' },
    airportTransfers: [
      { mode: 'Bus', duration: '90 min', cost: '€8', notes: 'Bus from Belgrade airport to Novi Sad' },
      { mode: 'Taxi', duration: '70 min', cost: '€50', notes: '' }
    ],
    nearbyTournaments: [
      { name: 'Serbian Superliga', level: 'Professional', surface: 'Indoor', month: 'Oct–May', venue: 'SPENS' }
    ],
    upcomingCamps: [
      { name: 'Serbian Volleyball Camp', startDate: '2025-07-07', endDate: '2025-07-18', price: '€500', level: 'All Levels' }
    ],
    accommodation: {
      types: [
        { type: 'private', label: 'Private Room', pricePerWeek: 200, maxOccupancy: 1, bathType: 'ensuite', mealsIncluded: true },
        { type: 'twin', label: 'Twin Shared Room', pricePerWeek: 120, maxOccupancy: 2, bathType: 'shared', mealsIncluded: true },
        { type: 'triple', label: 'Triple Room', pricePerWeek: 90, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true },
        { type: 'dorm', label: 'Dormitory', pricePerWeek: 65, maxOccupancy: 6, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: 1,
      shuttleToTraining: true,
      notes: 'Affordable riverside accommodation with traditional Serbian cuisine'
    },
    videoTour: null,
    juniorInfo: {
      minAge: 7,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'tutoring',
      medicalStaff: true,
      safeguarding: true,
      airportPickup: true,
      mealPlan: 'full-board',
      curfew: '21:00',
      roommatePairing: 'age-gender',
      languageSupport: ['English', 'Serbian'],
      emergencyProtocol: true
    }
  },
  {
    id: 'athens-volley-academy',
    availability: { status: 'open', nextIntake: '2025-08-01', spotsLeft: 17, responseTime: '3-5 days', privateLessons: true, yearRound: false },
    name: 'Olympiacos Volleyball Academy',
    country: 'Greece',
    countryFlag: '🇬🇷',
    city: 'Piraeus',
    lat: 37.9429, lng: 23.6468,
    website: 'https://www.olympiacossfp.gr',
    contactEmail: 'info@olympiacossfp.gr',
    individualLessons: true,
    boarding: false,
    level: 'All levels',
    starred: false,
    airport: { name: 'Athens International Airport', code: 'ATH', distance: '35 km', driveTime: '40 min' },
    beach: { distance: 2, description: 'Piraeus coastal area with multiple beaches nearby' },
    climate: 'athens',
    priceRange: { from: 600, to: 1800, unit: 'month', display: '€600–€1,800/mo' },
    programs: [
      { name: 'Youth Academy', price: '€600/mo', desc: 'Volleyball fundamentals for ages 10-16' },
      { name: 'Competitive Program', price: '€1,200/mo', desc: 'Match preparation, tactical development, conditioning' },
      { name: 'Elite Training', price: '€1,800/mo', desc: 'Professional-level coaching with A1 Ethniki methodology' }
    ],
    coaches: [
      { name: 'Dimitris Kazakis', credential: 'EOPE Level 3', background: 'Greek national team coach, A1 Ethniki championship experience', atpWta: false, bestRanking: null, rankingNote: '', languages: ['Greek', 'English'], instagram: '' }
    ],
    bestCoachRanking: null,
    facilities: 'Peace and Friendship Stadium training halls, 2 indoor courts, gym, beach volleyball area',
    courtSurfaces: ['Indoor Synthetic', 'Sand (Beach)'],
    notableAlumni: [],
    photos: [
      'https://picsum.photos/seed/olympiacos-volley-1/800/500',
      'https://picsum.photos/seed/olympiacos-volley-2/800/500'
    ],
    description: 'Academy of Olympiacos, one of Greece\'s most iconic sports clubs. Year-round Mediterranean climate and affordable living make this an attractive training destination.',
    nearbyHotels: [
      { name: 'Piraeus Theoxenia Hotel', stars: 4, distanceKm: 1.0, features: ['Restaurant', 'Bar', 'Pool'], pool: true, wifi: true, pricePerNight: '€100' },
      { name: 'Hotel Ideal', stars: 3, distanceKm: 0.5, features: ['Restaurant'], pool: false, wifi: true, pricePerNight: '€60' }
    ],
    nearbyRestaurants: [
      { name: 'Varoulko Seaside', cuisine: 'Greek Seafood', distanceKm: 1.0, priceRange: '€€€€', rating: 4.6, vegetarian: true, outdoor: true }
    ],
    nearbyMedical: [
      { name: 'Tzaneio General Hospital', type: 'Hospital', distanceKm: 1.5, phone: '+30 210 459 2000', emergency: true }
    ],
    costOfLiving: { rent1Bed: '€450', meal: '€9', monthlyFood: '€250', transport: '€30', currency: 'EUR', summary: 'Piraeus is affordable and connected to Athens by metro' },
    scholarships: { available: false, details: '' },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: 'EU/EEA citizens, USA, Canada, Australia, UK — visa-free up to 90 days', notes: 'Schengen visa required for non-EU citizens over 90 days.' },
    airportTransfers: [
      { mode: 'Metro + Bus', duration: '60 min', cost: '€10', notes: 'Metro Line 3 to Monastiraki, then Line 1 to Piraeus' },
      { mode: 'Taxi', duration: '40 min', cost: '€45', notes: '' }
    ],
    nearbyTournaments: [],
    upcomingCamps: [],
    accommodation: {
      types: [
        { type: 'private', label: 'Private Room', pricePerWeek: 310, maxOccupancy: 1, bathType: 'ensuite', mealsIncluded: true },
        { type: 'twin', label: 'Twin Shared Room', pricePerWeek: 200, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'triple', label: 'Triple Room', pricePerWeek: 150, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: 1,
      shuttleToTraining: false,
      notes: 'Mediterranean-style residence near Olympic Athletic Center'
    },
    videoTour: null,
    juniorInfo: {
      minAge: 13,
      maxAge: 17,
      supervision: 'training-only',
      guardianStay: false,
      schooling: 'online-support',
      medicalStaff: true,
      safeguarding: true,
      airportPickup: true,
      mealPlan: 'flexible',
      curfew: '23:00',
      roommatePairing: 'self-select',
      languageSupport: ['English', 'Greek'],
      emergencyProtocol: true
    }
  },
  {
    id: 'perugia-volley-academy',
    availability: { status: 'waitlist', nextIntake: '2025-11-01', spotsLeft: null, responseTime: '48h', privateLessons: true, yearRound: true },
    name: 'Sir Safety Perugia Volleyball Academy',
    country: 'Italy',
    countryFlag: '🇮🇹',
    city: 'Perugia',
    lat: 43.1107, lng: 12.3908,
    website: 'https://www.sirsafetyperugia.it',
    contactEmail: 'info@sirsafetyperugia.it',
    individualLessons: true,
    boarding: true,
    level: 'Elite',
    starred: false,
    airport: { name: 'Perugia San Francesco Airport', code: 'PEG', distance: '12 km', driveTime: '15 min' },
    beach: { distance: null, description: 'Inland — nearest Adriatic coast ~150 km' },
    climate: 'rome',
    priceRange: { from: 1000, to: 3000, unit: 'month', display: '€1,000–€3,000/mo' },
    programs: [
      { name: 'Settore Giovanile', price: '€1,000/mo', desc: 'Youth sector training, volleyball fundamentals and team play' },
      { name: 'Agonistica', price: '€2,000/mo', desc: 'Competitive program, match tactics, strength conditioning' },
      { name: 'Elite Lab', price: '€3,000/mo', desc: 'Top-tier training with SuperLega coaching methodology' }
    ],
    coaches: [
      { name: 'Simone Giannelli', credential: 'FIPAV Certified', background: 'Italian national team setter, World Championship medalist, active player-mentor', atpWta: false, bestRanking: null, rankingNote: '', languages: ['Italian', 'English'], instagram: '' }
    ],
    bestCoachRanking: null,
    facilities: 'PalaBarton training complex, 2 indoor courts, gym, video analysis, sports medicine clinic',
    courtSurfaces: ['Indoor Hardwood'],
    notableAlumni: [],
    photos: [
      'https://picsum.photos/seed/perugia-volley-1/800/500',
      'https://picsum.photos/seed/perugia-volley-2/800/500'
    ],
    description: 'Academy of SuperLega powerhouse Sir Safety Perugia. Beautiful Umbrian setting with Italian volleyball excellence and professional development pathways.',
    nearbyHotels: [
      { name: 'Brufani Palace Hotel', stars: 5, distanceKm: 2.0, features: ['Restaurant', 'Spa', 'Pool'], pool: true, wifi: true, pricePerNight: '€180' },
      { name: 'Hotel Fortuna', stars: 3, distanceKm: 1.0, features: ['Restaurant', 'Bar'], pool: false, wifi: true, pricePerNight: '€70' }
    ],
    nearbyRestaurants: [
      { name: 'Ristorante del Sole', cuisine: 'Umbrian', distanceKm: 1.5, priceRange: '€€€', rating: 4.5, vegetarian: true, outdoor: true }
    ],
    nearbyMedical: [
      { name: 'Ospedale di Perugia', type: 'Hospital', distanceKm: 3.0, phone: '+39 075 578 1', emergency: true }
    ],
    costOfLiving: { rent1Bed: '€450', meal: '€9', monthlyFood: '€250', transport: '€30', currency: 'EUR', summary: 'Perugia is affordable with high quality of life' },
    scholarships: { available: true, details: 'Club scholarship for exceptional youth players identified through tryouts.' },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: 'EU/EEA citizens, USA, Canada, Australia, UK — visa-free up to 90 days', notes: 'Non-EU citizens need Schengen visa for extended stays.' },
    airportTransfers: [
      { mode: 'Bus', duration: '20 min', cost: '€4', notes: 'Airport bus to Perugia center' },
      { mode: 'Taxi', duration: '15 min', cost: '€20', notes: '' }
    ],
    nearbyTournaments: [
      { name: 'SuperLega', level: 'Professional', surface: 'Indoor', month: 'Oct–Apr', venue: 'PalaBarton' }
    ],
    upcomingCamps: [
      { name: 'Umbria Volleyball Camp', startDate: '2025-06-16', endDate: '2025-06-27', price: '€1,100', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'private', label: 'Private Room', pricePerWeek: 350, maxOccupancy: 1, bathType: 'ensuite', mealsIncluded: true },
        { type: 'twin', label: 'Twin Shared Room', pricePerWeek: 230, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'triple', label: 'Triple Room', pricePerWeek: 170, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true },
        { type: 'apartment', label: 'Studio Apartment', pricePerWeek: 440, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: 1,
      shuttleToTraining: true,
      notes: 'Umbrian hillside residence with panoramic views and recovery pool'
    },
    videoTour: null,
    juniorInfo: {
      minAge: 18,
      maxAge: 40,
      supervision: 'none',
      guardianStay: false,
      schooling: 'none',
      medicalStaff: true,
      safeguarding: false,
      airportPickup: true,
      mealPlan: 'flexible',
      curfew: null,
      roommatePairing: 'n/a',
      languageSupport: ['English', 'Italian'],
      emergencyProtocol: true
    }
  },
  {
    id: 'jastrzebski-wegiel-academy',
    availability: { status: 'limited', nextIntake: '2025-10-01', spotsLeft: 5, responseTime: '48h', privateLessons: true, yearRound: true },
    name: 'Jastrzębski Węgiel Volleyball Academy',
    country: 'Poland',
    countryFlag: '🇵🇱',
    city: 'Jastrzębie-Zdrój',
    lat: 49.9550, lng: 18.5793,
    website: 'https://www.jw-siatkowka.pl',
    contactEmail: 'info@jw-siatkowka.pl',
    individualLessons: true,
    boarding: true,
    level: 'All levels',
    starred: false,
    airport: { name: 'Katowice Airport', code: 'KTW', distance: '75 km', driveTime: '60 min' },
    beach: { distance: null, description: 'Inland — nearest coast ~500 km to the Baltic Sea' },
    climate: 'warsaw',
    priceRange: { from: 500, to: 1500, unit: 'month', display: '€500–€1,500/mo' },
    programs: [
      { name: 'Szkółka', price: '€500/mo', desc: 'Volleyball school for beginners and intermediate players' },
      { name: 'Kadra Młodzieżowa', price: '€900/mo', desc: 'Youth squad training, competitive development' },
      { name: 'Akademia PlusLiga', price: '€1,500/mo', desc: 'Advanced pathway toward PlusLiga professional play' }
    ],
    coaches: [
      { name: 'Tomasz Fornal Sr', credential: 'PZPS Level 3', background: 'Father and coach of Polish national team star Tomasz Fornal, PlusLiga development specialist', atpWta: false, bestRanking: null, rankingNote: '', languages: ['Polish', 'English'], instagram: '' }
    ],
    bestCoachRanking: null,
    facilities: 'Hala Widowiskowo-Sportowa, 2 indoor courts, gym, physiotherapy, boarding facilities',
    courtSurfaces: ['Indoor Synthetic'],
    notableAlumni: [],
    photos: [
      'https://picsum.photos/seed/jastrzebie-volley-1/800/500',
      'https://picsum.photos/seed/jastrzebie-volley-2/800/500'
    ],
    description: 'One of Poland\'s strongest volleyball clubs with a renowned youth development system. Poland\'s passion for volleyball creates an inspiring training environment at very affordable prices.',
    nearbyHotels: [
      { name: 'Hotel Diament Ustroń', stars: 4, distanceKm: 15.0, features: ['Spa', 'Restaurant', 'Pool'], pool: true, wifi: true, pricePerNight: '€60' },
      { name: 'Hotel Dąbrówka', stars: 3, distanceKm: 1.0, features: ['Restaurant', 'Parking'], pool: false, wifi: true, pricePerNight: '€35' }
    ],
    nearbyRestaurants: [
      { name: 'Restauracja Stara Drukarnia', cuisine: 'Polish', distanceKm: 0.5, priceRange: '€€', rating: 4.3, vegetarian: true, outdoor: true }
    ],
    nearbyMedical: [
      { name: 'Wojewódzki Szpital Specjalistyczny', type: 'Hospital', distanceKm: 1.0, phone: '+48 32 478 45 00', emergency: true }
    ],
    costOfLiving: { rent1Bed: '€250', meal: '€4', monthlyFood: '€180', transport: '€20', currency: 'PLN', summary: 'Jastrzębie-Zdrój is one of the most affordable locations in Europe' },
    scholarships: { available: true, details: 'Club-funded development scholarships for promising young players.' },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: 'EU/EEA citizens, USA, Canada, Australia, UK — visa-free up to 90 days', notes: 'Non-EU citizens need Schengen visa for stays over 90 days.' },
    airportTransfers: [
      { mode: 'Bus', duration: '90 min', cost: '€8', notes: 'Bus from Katowice to Jastrzębie-Zdrój' },
      { mode: 'Taxi', duration: '60 min', cost: '€45', notes: '' }
    ],
    nearbyTournaments: [
      { name: 'PlusLiga', level: 'Professional', surface: 'Indoor', month: 'Oct–Apr', venue: 'Hala Jastrzębie' }
    ],
    upcomingCamps: [],
    videoTour: null,
    juniorInfo: {
      minAge: 10,
      maxAge: 17,
      supervision: 'daytime',
      guardianStay: true,
      schooling: 'partner-school',
      medicalStaff: true,
      safeguarding: true,
      airportPickup: true,
      mealPlan: 'half-board',
      curfew: '22:00',
      roommatePairing: 'age-only',
      languageSupport: ['English', 'Polish'],
      emergencyProtocol: true
    }
  },
  {
    id: 'fenerbahce-volley',
    availability: { status: 'limited', nextIntake: '2025-10-01', spotsLeft: 5, responseTime: '48h', privateLessons: true, yearRound: true },
    name: 'Fenerbahçe Volleyball Academy',
    country: 'Turkey',
    countryFlag: '🇹🇷',
    city: 'Istanbul',
    lat: 40.9882, lng: 29.0362,
    website: 'https://www.fenerbahce.org',
    contactEmail: 'info@fenerbahce.org',
    individualLessons: true,
    boarding: false,
    level: 'Elite',
    starred: false,
    airport: { name: 'Sabiha Gökçen Airport', code: 'SAW', distance: '15 km', driveTime: '20 min' },
    beach: { distance: 3, description: 'Marmara Sea coastline, Kadıköy waterfront' },
    climate: 'istanbul',
    priceRange: { from: 600, to: 2000, unit: 'month', display: '€600–€2,000/mo' },
    programs: [
      { name: 'Altyapı', price: '€600/mo', desc: 'Youth infrastructure program, volleyball fundamentals' },
      { name: 'Gelişim', price: '€1,200/mo', desc: 'Development program with competitive match play' },
      { name: 'Profesyonel', price: '€2,000/mo', desc: 'Professional preparation, Sultanlar Ligi methodology' }
    ],
    coaches: [
      { name: 'Zoran Terzić', credential: 'FIVB Level 3', background: 'Serbian coach, long-time head coach of the dominant Serbian women\'s national team', atpWta: false, bestRanking: null, rankingNote: '', languages: ['Serbian', 'Turkish', 'English'], instagram: '' }
    ],
    bestCoachRanking: null,
    facilities: 'Fenerbahçe Volleyball Complex, 2 indoor courts, fitness center, physiotherapy, video room',
    courtSurfaces: ['Indoor Synthetic'],
    notableAlumni: [],
    photos: [
      'https://picsum.photos/seed/fenerbahce-volley-1/800/500',
      'https://picsum.photos/seed/fenerbahce-volley-2/800/500'
    ],
    description: 'Fenerbahçe, one of Turkey\'s biggest sports clubs, offers volleyball development on the Asian side of Istanbul. Affordable training with access to world-class coaching.',
    nearbyHotels: [
      { name: 'DoubleTree by Hilton Istanbul Moda', stars: 4, distanceKm: 2.0, features: ['Restaurant', 'Bar', 'Gym'], pool: false, wifi: true, pricePerNight: '€90' },
      { name: 'Hotel Büyük Keçiören', stars: 3, distanceKm: 1.0, features: ['Restaurant'], pool: false, wifi: true, pricePerNight: '€50' }
    ],
    nearbyRestaurants: [
      { name: 'Çiya Sofrası', cuisine: 'Anatolian', distanceKm: 1.5, priceRange: '€€', rating: 4.6, vegetarian: true, outdoor: false }
    ],
    nearbyMedical: [
      { name: 'Acıbadem Kadıköy Hospital', type: 'Hospital', distanceKm: 1.0, phone: '+90 216 544 44 44', emergency: true }
    ],
    costOfLiving: { rent1Bed: '€350', meal: '€5', monthlyFood: '€180', transport: '€20', currency: 'TRY', summary: 'Istanbul Asian side is more affordable than European side' },
    scholarships: { available: true, details: 'Fenerbahçe youth sports scholarship for talented athletes.' },
    visaInfo: { schengen: false, eu: false, visaFreeCountries: 'EU citizens (90 days visa-free), USA/Canada/UK (e-Visa required)', notes: 'e-Visa available online.' },
    airportTransfers: [
      { mode: 'Bus', duration: '30 min', cost: '€3', notes: 'IETT bus from Sabiha Gökçen' },
      { mode: 'Taxi', duration: '20 min', cost: '€15–20', notes: '' }
    ],
    nearbyTournaments: [
      { name: 'Sultanlar Ligi', level: 'Professional', surface: 'Indoor', month: 'Oct–Apr', venue: 'Various Istanbul venues' }
    ],
    upcomingCamps: [],
    videoTour: null,
    juniorInfo: {
      minAge: 6,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'tutoring',
      medicalStaff: true,
      safeguarding: true,
      airportPickup: true,
      mealPlan: 'full-board',
      curfew: '21:00',
      roommatePairing: 'age-gender',
      languageSupport: ['English', 'Turkish'],
      emergencyProtocol: true
    }
  },
  {
    id: 'benfica-volley-academy',
    availability: { status: 'open', nextIntake: '2025-07-01', spotsLeft: 18, responseTime: '48h', privateLessons: true, yearRound: true },
    name: 'SL Benfica Volleyball Academy',
    country: 'Portugal',
    countryFlag: '🇵🇹',
    city: 'Lisbon',
    lat: 38.7527, lng: -9.1847,
    website: 'https://www.slbenfica.pt',
    contactEmail: 'info@slbenfica.pt',
    individualLessons: true,
    boarding: false,
    level: 'All levels',
    starred: false,
    airport: { name: 'Humberto Delgado Airport', code: 'LIS', distance: '5 km', driveTime: '10 min' },
    beach: { distance: 15, description: 'Atlantic beaches at Cascais and Costa da Caparica' },
    climate: 'lisbon',
    priceRange: { from: 500, to: 1500, unit: 'month', display: '€500–€1,500/mo' },
    programs: [
      { name: 'Escola de Voleibol', price: '€500/mo', desc: 'Volleyball school for youth, fundamentals and team play' },
      { name: 'Competição', price: '€1,000/mo', desc: 'Competitive squad training, Portuguese league preparation' },
      { name: 'Alto Rendimento', price: '€1,500/mo', desc: 'High-performance program with professional coaching' }
    ],
    coaches: [
      { name: 'Marcel Matz', credential: 'CBV/FIVB Certified', background: 'Brazilian coach, extensive international experience in European leagues', atpWta: false, bestRanking: null, rankingNote: '', languages: ['Portuguese', 'English', 'Spanish'], instagram: '' }
    ],
    bestCoachRanking: null,
    facilities: 'Pavilhão Fidelidade training center, 2 indoor courts, gym, sports medicine clinic',
    courtSurfaces: ['Indoor Hardwood'],
    notableAlumni: [],
    photos: [
      'https://picsum.photos/seed/benfica-volley-1/800/500',
      'https://picsum.photos/seed/benfica-volley-2/800/500'
    ],
    description: 'Volleyball academy of one of Europe\'s most iconic sports clubs. Year-round warm climate, beautiful city, and affordable living make Lisbon an excellent volleyball training destination.',
    nearbyHotels: [
      { name: 'SANA Metropolitan Hotel', stars: 4, distanceKm: 1.0, features: ['Restaurant', 'Pool', 'Gym'], pool: true, wifi: true, pricePerNight: '€100' },
      { name: 'Holiday Inn Lisbon', stars: 3, distanceKm: 0.5, features: ['Restaurant', 'Bar'], pool: false, wifi: true, pricePerNight: '€75' }
    ],
    nearbyRestaurants: [
      { name: 'Cervejaria Ramiro', cuisine: 'Seafood', distanceKm: 4.0, priceRange: '€€€', rating: 4.6, vegetarian: false, outdoor: false }
    ],
    nearbyMedical: [
      { name: 'Hospital de Santa Maria', type: 'Hospital', distanceKm: 2.0, phone: '+351 21 780 5000', emergency: true }
    ],
    costOfLiving: { rent1Bed: '€700', meal: '€8', monthlyFood: '€250', transport: '€40', currency: 'EUR', summary: 'Lisbon is affordable by Western European standards' },
    scholarships: { available: false, details: '' },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: 'EU/EEA citizens, USA, Canada, Australia, UK — visa-free up to 90 days', notes: 'Schengen visa for non-EU citizens over 90 days.' },
    airportTransfers: [
      { mode: 'Metro', duration: '15 min', cost: '€1.50', notes: 'Red line from airport' },
      { mode: 'Taxi', duration: '10 min', cost: '€10–15', notes: '' }
    ],
    nearbyTournaments: [],
    upcomingCamps: [
      { name: 'Benfica Volleyball Camp', startDate: '2025-07-07', endDate: '2025-07-18', price: '€700', level: 'All Levels' }
    ],
    accommodation: {
      types: [
        { type: 'private', label: 'Private Room', pricePerWeek: 320, maxOccupancy: 1, bathType: 'ensuite', mealsIncluded: true },
        { type: 'twin', label: 'Twin Shared Room', pricePerWeek: 200, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'triple', label: 'Triple Room', pricePerWeek: 160, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: 2,
      shuttleToTraining: true,
      notes: 'Benfica campus residence with multi-sport facilities and team dining'
    },
    videoTour: null,
    juniorInfo: {
      minAge: 12,
      maxAge: 17,
      supervision: 'training-only',
      guardianStay: true,
      schooling: 'online-support',
      medicalStaff: true,
      safeguarding: true,
      airportPickup: true,
      mealPlan: 'half-board',
      curfew: '22:30',
      roommatePairing: 'age-only',
      languageSupport: ['English', 'Portuguese'],
      emergencyProtocol: true
    }
  }
];

const COUNTRIES = [...new Set(ACADEMIES.map(a => a.country))];

const CLIMATE_DATA = {
  'trento': {
    city: 'Trento', country: 'Italy',
    months: [
      { month: 'Jan', temp: 1, rain: 45, rainyDays: 6, wind: 8 },
      { month: 'Feb', temp: 3, rain: 40, rainyDays: 5, wind: 8 },
      { month: 'Mar', temp: 8, rain: 50, rainyDays: 6, wind: 11 },
      { month: 'Apr', temp: 12, rain: 70, rainyDays: 9, wind: 11 },
      { month: 'May', temp: 17, rain: 85, rainyDays: 10, wind: 11 },
      { month: 'Jun', temp: 21, rain: 90, rainyDays: 9, wind: 11 },
      { month: 'Jul', temp: 23, rain: 80, rainyDays: 8, wind: 11 },
      { month: 'Aug', temp: 22, rain: 85, rainyDays: 8, wind: 8 },
      { month: 'Sep', temp: 18, rain: 65, rainyDays: 6, wind: 8 },
      { month: 'Oct', temp: 12, rain: 75, rainyDays: 7, wind: 8 },
      { month: 'Nov', temp: 6, rain: 75, rainyDays: 7, wind: 8 },
      { month: 'Dec', temp: 2, rain: 50, rainyDays: 6, wind: 8 }
    ]
  },
  'warsaw': {
    city: 'Warsaw', country: 'Poland',
    months: [
      { month: 'Jan', temp: -2, rain: 27, rainyDays: 7, wind: 14 },
      { month: 'Feb', temp: -1, rain: 26, rainyDays: 6, wind: 14 },
      { month: 'Mar', temp: 3, rain: 28, rainyDays: 6, wind: 14 },
      { month: 'Apr', temp: 9, rain: 37, rainyDays: 7, wind: 14 },
      { month: 'May', temp: 15, rain: 54, rainyDays: 8, wind: 11 },
      { month: 'Jun', temp: 18, rain: 66, rainyDays: 9, wind: 11 },
      { month: 'Jul', temp: 20, rain: 72, rainyDays: 10, wind: 11 },
      { month: 'Aug', temp: 19, rain: 59, rainyDays: 8, wind: 11 },
      { month: 'Sep', temp: 14, rain: 43, rainyDays: 7, wind: 11 },
      { month: 'Oct', temp: 9, rain: 34, rainyDays: 6, wind: 14 },
      { month: 'Nov', temp: 4, rain: 35, rainyDays: 7, wind: 14 },
      { month: 'Dec', temp: 0, rain: 31, rainyDays: 7, wind: 14 }
    ]
  },
  'istanbul': {
    city: 'Istanbul', country: 'Turkey',
    months: [
      { month: 'Jan', temp: 6, rain: 99, rainyDays: 12, wind: 18 },
      { month: 'Feb', temp: 6, rain: 72, rainyDays: 10, wind: 18 },
      { month: 'Mar', temp: 8, rain: 62, rainyDays: 10, wind: 16 },
      { month: 'Apr', temp: 12, rain: 46, rainyDays: 8, wind: 14 },
      { month: 'May', temp: 17, rain: 34, rainyDays: 6, wind: 14 },
      { month: 'Jun', temp: 22, rain: 34, rainyDays: 5, wind: 14 },
      { month: 'Jul', temp: 24, rain: 18, rainyDays: 3, wind: 14 },
      { month: 'Aug', temp: 24, rain: 22, rainyDays: 3, wind: 14 },
      { month: 'Sep', temp: 21, rain: 42, rainyDays: 5, wind: 14 },
      { month: 'Oct', temp: 16, rain: 67, rainyDays: 8, wind: 16 },
      { month: 'Nov', temp: 12, rain: 89, rainyDays: 10, wind: 16 },
      { month: 'Dec', temp: 8, rain: 109, rainyDays: 12, wind: 18 }
    ]
  },
  'modena': {
    city: 'Modena', country: 'Italy',
    months: [
      { month: 'Jan', temp: 2, rain: 42, rainyDays: 6, wind: 8 },
      { month: 'Feb', temp: 4, rain: 40, rainyDays: 6, wind: 8 },
      { month: 'Mar', temp: 9, rain: 52, rainyDays: 7, wind: 11 },
      { month: 'Apr', temp: 13, rain: 65, rainyDays: 9, wind: 11 },
      { month: 'May', temp: 18, rain: 62, rainyDays: 8, wind: 11 },
      { month: 'Jun', temp: 22, rain: 55, rainyDays: 6, wind: 11 },
      { month: 'Jul', temp: 25, rain: 38, rainyDays: 4, wind: 11 },
      { month: 'Aug', temp: 24, rain: 52, rainyDays: 5, wind: 8 },
      { month: 'Sep', temp: 20, rain: 60, rainyDays: 6, wind: 8 },
      { month: 'Oct', temp: 14, rain: 72, rainyDays: 7, wind: 8 },
      { month: 'Nov', temp: 8, rain: 65, rainyDays: 7, wind: 8 },
      { month: 'Dec', temp: 3, rain: 50, rainyDays: 6, wind: 8 }
    ]
  },
  'kazan': {
    city: 'Kazan', country: 'Russia',
    months: [
      { month: 'Jan', temp: -11, rain: 33, rainyDays: 10, wind: 16 },
      { month: 'Feb', temp: -10, rain: 25, rainyDays: 8, wind: 16 },
      { month: 'Mar', temp: -3, rain: 26, rainyDays: 7, wind: 16 },
      { month: 'Apr', temp: 5, rain: 32, rainyDays: 7, wind: 14 },
      { month: 'May', temp: 14, rain: 46, rainyDays: 8, wind: 14 },
      { month: 'Jun', temp: 18, rain: 64, rainyDays: 9, wind: 14 },
      { month: 'Jul', temp: 20, rain: 63, rainyDays: 9, wind: 11 },
      { month: 'Aug', temp: 18, rain: 57, rainyDays: 8, wind: 11 },
      { month: 'Sep', temp: 12, rain: 51, rainyDays: 8, wind: 14 },
      { month: 'Oct', temp: 5, rain: 48, rainyDays: 9, wind: 14 },
      { month: 'Nov', temp: -2, rain: 40, rainyDays: 9, wind: 16 },
      { month: 'Dec', temp: -8, rain: 38, rainyDays: 10, wind: 16 }
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
  'ankara': {
    city: 'Ankara', country: 'Turkey',
    months: [
      { month: 'Jan', temp: 0, rain: 38, rainyDays: 8, wind: 14 },
      { month: 'Feb', temp: 2, rain: 32, rainyDays: 7, wind: 14 },
      { month: 'Mar', temp: 6, rain: 36, rainyDays: 7, wind: 14 },
      { month: 'Apr', temp: 11, rain: 42, rainyDays: 8, wind: 14 },
      { month: 'May', temp: 16, rain: 49, rainyDays: 9, wind: 14 },
      { month: 'Jun', temp: 20, rain: 33, rainyDays: 5, wind: 14 },
      { month: 'Jul', temp: 24, rain: 13, rainyDays: 2, wind: 14 },
      { month: 'Aug', temp: 24, rain: 11, rainyDays: 2, wind: 14 },
      { month: 'Sep', temp: 19, rain: 17, rainyDays: 3, wind: 11 },
      { month: 'Oct', temp: 13, rain: 28, rainyDays: 5, wind: 11 },
      { month: 'Nov', temp: 7, rain: 31, rainyDays: 6, wind: 14 },
      { month: 'Dec', temp: 2, rain: 40, rainyDays: 8, wind: 14 }
    ]
  },
  'belgrade': {
    city: 'Belgrade', country: 'Serbia',
    months: [
      { month: 'Jan', temp: 1, rain: 46, rainyDays: 8, wind: 14 },
      { month: 'Feb', temp: 3, rain: 40, rainyDays: 7, wind: 14 },
      { month: 'Mar', temp: 7, rain: 44, rainyDays: 7, wind: 14 },
      { month: 'Apr', temp: 12, rain: 56, rainyDays: 8, wind: 14 },
      { month: 'May', temp: 18, rain: 58, rainyDays: 9, wind: 11 },
      { month: 'Jun', temp: 21, rain: 87, rainyDays: 9, wind: 11 },
      { month: 'Jul', temp: 23, rain: 63, rainyDays: 7, wind: 11 },
      { month: 'Aug', temp: 23, rain: 53, rainyDays: 6, wind: 11 },
      { month: 'Sep', temp: 18, rain: 52, rainyDays: 6, wind: 11 },
      { month: 'Oct', temp: 13, rain: 49, rainyDays: 7, wind: 11 },
      { month: 'Nov', temp: 7, rain: 51, rainyDays: 8, wind: 14 },
      { month: 'Dec', temp: 2, rain: 52, rainyDays: 9, wind: 14 }
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
  }
};

const NEWS_ITEMS = [
  { date: '2026-04-12', text: 'Trentino Volley Academy graduates shine in Champions League Final Four with 3 former youth players in rosters', academy: 'trentino-volley-academy' },
  { date: '2026-04-05', text: 'VakıfBank Academy launches international scholarship program for talented young players from 20 countries', academy: 'istanbul-volley-academy' },
  { date: '2026-03-28', text: 'Polish volleyball academies report record enrollment as PlusLiga popularity surges across Europe', academy: 'warsaw-volley-academy' },
  { date: '2026-03-20', text: 'CEV announces expanded Youth Champions League with more academy teams qualifying from 2026-27 season', academy: null }
];
