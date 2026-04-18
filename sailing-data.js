const SPORT_TYPE = 'sailing';

const ACADEMIES = [
  {
    id: 'athens-sailing-academy',
    name: 'Athens Sailing Academy',
    country: 'Greece',
    countryFlag: '🇬🇷',
    city: 'Athens',
    lat: 37.9425,
    lng: 23.6470,
    website: 'https://www.athenssailing.gr',
    contact: '+30 210 412 3456',
    contactEmail: 'info@athenssailing.gr',
    description: 'Premier sailing academy at the 2004 Olympic Sailing Centre in Athens. Train in the Saronic Gulf with consistent Meltemi winds and access to Greek island sailing routes.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 0, description: 'Directly on the Athens Riviera waterfront at Agios Kosmas marina' },
    priceRange: { from: 900, to: 2200, unit: 'week', display: '€900 - €2,200/week' },
    socialMedia: { instagram: '@athenssailing', facebook: 'https://facebook.com/athenssailing', twitter: '@athenssailing' },
    climate: 'athens',
    facilities: 'Full-service marina with 200 berths, fleet of 40+ boats (Laser, 470, 49er, Nacra 17), Olympic race course, sailing simulator with virtual regatta system, weather station, professional sail loft and rigging workshop',
    courtSurfaces: ['Dinghy', 'Keelboat', 'Catamaran', 'Windsurf'],
    programs: [
      { name: 'Olympic Class Training', price: '€1,500/week', desc: 'Training in Olympic sailing classes with former Olympic sailors on the 2004 course' },
      { name: 'Dinghy Fundamentals', price: '€1,000/week', desc: 'Learn to sail in Laser and 420 dinghies with progressive skill development' },
      { name: 'Racing Tactics Camp', price: '€1,800/week', desc: 'Advanced race strategy, mark rounding, starting techniques, and regatta preparation' }
    ],
    coaches: [
      { name: 'Nikolaos Kaklamanakis', credential: 'World Sailing Level 3 Coach', background: 'Former Olympic windsurfing medalist, experienced sailing coach with 20 years in competitive sailing development', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Greek', 'English', 'French'], instagram: null },
      { name: 'Elena Papadopoulou', credential: 'Greek Sailing Federation A License', background: 'Former 470 class national champion, specialist in youth sailing development', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Greek', 'English'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=800', 'https://images.unsplash.com/photo-1534854638093-bada1813ca19?w=800'],
    upcomingCamps: [
      { name: 'Summer Olympic Class Camp', startDate: '2025-07-07', endDate: '2025-07-14', price: '€1,500', level: 'Advanced' },
      { name: 'Spring Dinghy Camp', startDate: '2025-04-14', endDate: '2025-04-21', price: '€1,000', level: 'All Levels' },
      { name: 'Autumn Regatta Prep', startDate: '2025-10-06', endDate: '2025-10-13', price: '€1,200', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Marina Hotel', pricePerWeek: 550, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Waterfront Apartment', pricePerWeek: 400, maxOccupancy: 3, bathType: 'ensuite', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Marina-side accommodation with direct boat access. Equipment storage included for all participants.'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-04-14',
      spotsLeft: 20,
      responseTime: '24h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 8,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Greek international school partnerships',
      medicalStaff: true,
      safeguarding: 'Greek Sailing Federation child protection, background-checked coaches',
      airportPickup: true,
      mealPlan: 'Full board with Greek Mediterranean diet',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Greek'],
      emergencyProtocol: '24/7 marine rescue coordination, on-site first aid, hospital 15 min'
    }
  },
  {
    id: 'thessaloniki-sailing-center',
    name: 'Thessaloniki Sailing Center',
    country: 'Greece',
    countryFlag: '🇬🇷',
    city: 'Thessaloniki',
    lat: 40.6265,
    lng: 22.9480,
    website: 'https://www.thessalonikisailing.gr',
    contact: '+30 2310 456 789',
    contactEmail: 'info@thessalonikisailing.gr',
    description: 'Northern Greece\'s leading sailing center on the Thermaic Gulf. Protected waters ideal for beginners with open sea access for advanced sailors. Gateway to Chalkidiki sailing areas.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 1, description: 'Thessaloniki waterfront and Peraia beaches within easy reach' },
    priceRange: { from: 700, to: 1800, unit: 'week', display: '€700 - €1,800/week' },
    socialMedia: { instagram: '@thessailing', facebook: 'https://facebook.com/thessalonikisailing', twitter: '@thessailing' },
    climate: 'thessaloniki',
    facilities: 'Marina with 80 berths, fleet of 30 boats, dedicated race course in Thermaic Gulf, sailing simulator, weather station with wind data analysis, sail loft for repairs and tuning',
    courtSurfaces: ['Dinghy', 'Keelboat', 'Catamaran', 'Windsurf'],
    programs: [
      { name: 'Learn to Sail', price: '€800/week', desc: 'Beginner-friendly sailing program in the sheltered waters of the Thermaic Gulf' },
      { name: 'Youth Racing Development', price: '€1,000/week', desc: 'Competitive sailing development for young racers in Optimist and Laser classes' },
      { name: 'Keelboat Cruising', price: '€1,400/week', desc: 'Coastal cruising skills with navigation, anchoring, and passage planning to Chalkidiki' }
    ],
    coaches: [
      { name: 'Dimitris Konstantinidis', credential: 'World Sailing Level 2 Coach', background: 'Former national team sailor, 15 years coaching youth and adult sailing programs', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Greek', 'English'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=800'],
    upcomingCamps: [
      { name: 'Summer Youth Sailing', startDate: '2025-07-07', endDate: '2025-07-14', price: '€1,000', level: 'Intermediate' },
      { name: 'Spring Beginners Week', startDate: '2025-05-05', endDate: '2025-05-12', price: '€800', level: 'All Levels' },
      { name: 'Autumn Cruising Week', startDate: '2025-09-22', endDate: '2025-09-29', price: '€1,400', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Waterfront Hotel', pricePerWeek: 450, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Near the marina with sea views. Thessaloniki is known for excellent cuisine and vibrant nightlife.'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-05-05',
      spotsLeft: 18,
      responseTime: '24h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 8,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Local international school partnerships',
      medicalStaff: true,
      safeguarding: 'Greek Sailing Federation child protection standards',
      airportPickup: true,
      mealPlan: 'Full board with local Greek cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Greek'],
      emergencyProtocol: 'Marine rescue team on standby, AHEPA Hospital 15 min'
    }
  },
  {
    id: 'split-sailing-academy',
    name: 'Split Sailing Academy',
    country: 'Croatia',
    countryFlag: '🇭🇷',
    city: 'Split',
    lat: 43.5081,
    lng: 16.4402,
    website: 'https://www.splitsailing.hr',
    contact: '+385 21 345 678',
    contactEmail: 'info@splitsailing.hr',
    description: 'Croatia\'s premier sailing academy in the heart of the Dalmatian coast. Train among the stunning Croatian islands with reliable Adriatic winds and crystal-clear waters.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 0, description: 'Directly on Split waterfront with beach access from the marina' },
    priceRange: { from: 800, to: 2000, unit: 'week', display: '€800 - €2,000/week' },
    socialMedia: { instagram: '@splitsailing', facebook: 'https://facebook.com/splitsailing', twitter: '@splitsailing' },
    climate: 'split',
    facilities: 'ACI Marina Split with 350 berths, fleet of 35 boats including dinghies and keelboats, offshore race course, sailing simulator, weather station, sail loft and rigging service',
    courtSurfaces: ['Dinghy', 'Keelboat', 'Catamaran', 'Windsurf'],
    programs: [
      { name: 'Island Sailing Course', price: '€1,200/week', desc: 'Learn sailing while island-hopping through Brač, Hvar, and Vis in the Dalmatian archipelago' },
      { name: 'Dinghy Racing Camp', price: '€1,000/week', desc: 'Competitive dinghy racing in Laser and 420 classes on the Split channel' },
      { name: 'Catamaran Adventure', price: '€1,400/week', desc: 'High-performance catamaran sailing with beach cat and Nacra 17 training' }
    ],
    coaches: [
      { name: 'Ivan Kljaković Gašpić', credential: 'Croatian Sailing Federation A License', background: 'Former Olympic sailor and multiple World Championship medalist in Tornado class', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Croatian', 'English', 'Italian'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1534854638093-bada1813ca19?w=800'],
    upcomingCamps: [
      { name: 'Summer Island Camp', startDate: '2025-07-07', endDate: '2025-07-14', price: '€1,200', level: 'Intermediate' },
      { name: 'Spring Racing Camp', startDate: '2025-04-28', endDate: '2025-05-05', price: '€1,000', level: 'Advanced' },
      { name: 'Autumn Cat Sailing', startDate: '2025-09-15', endDate: '2025-09-22', price: '€1,400', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Marina Hotel Split', pricePerWeek: 600, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Old Town Apartment', pricePerWeek: 400, maxOccupancy: 3, bathType: 'ensuite', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Historic Diocletian\'s Palace area accommodation. World Heritage Site location with vibrant dining scene.'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-04-28',
      spotsLeft: 16,
      responseTime: '24h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 8,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Online schooling support during camps',
      medicalStaff: true,
      safeguarding: 'Croatian Sailing Federation safeguarding, background-checked staff',
      airportPickup: true,
      mealPlan: 'Full board with Dalmatian Mediterranean cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Croatian'],
      emergencyProtocol: 'Marine rescue coordination, KBC Split hospital 10 min'
    }
  },
  {
    id: 'dubrovnik-sailing-school',
    name: 'Dubrovnik Sailing School',
    country: 'Croatia',
    countryFlag: '🇭🇷',
    city: 'Dubrovnik',
    lat: 42.6507,
    lng: 18.0944,
    website: 'https://www.dubrovniksailing.hr',
    contact: '+385 20 456 789',
    contactEmail: 'info@dubrovniksailing.hr',
    description: 'Sailing school in the stunning backdrop of Dubrovnik\'s medieval walls. Train in the southern Adriatic with access to the Elaphiti Islands and Mljet National Park sailing grounds.',
    ageGroups: ['Junior', 'Adult', 'Masters'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 0, description: 'Marina directly on the Adriatic with beach access at Lapad Bay' },
    priceRange: { from: 900, to: 2200, unit: 'week', display: '€900 - €2,200/week' },
    socialMedia: { instagram: '@dubrovniksailing', facebook: 'https://facebook.com/dubrovniksailing', twitter: '@dubsailing' },
    climate: 'dubrovnik',
    facilities: 'ACI Marina Dubrovnik with 380 berths, boat fleet of 25 vessels, coastal race course, sailing simulator, weather station with Adriatic forecasting, sail loft',
    courtSurfaces: ['Dinghy', 'Keelboat', 'Catamaran', 'Windsurf'],
    programs: [
      { name: 'Elaphiti Island Explorer', price: '€1,400/week', desc: 'Multi-day sailing trip through the Elaphiti Islands with navigation and seamanship training' },
      { name: 'Beginner Dinghy Course', price: '€900/week', desc: 'Learn to sail in sheltered waters near Dubrovnik with progressive skill building' },
      { name: 'Keelboat Skipper Course', price: '€1,800/week', desc: 'RYA Day Skipper equivalent — learn to skipper a keelboat independently' }
    ],
    coaches: [
      { name: 'Marko Jurišić', credential: 'RYA Yachtmaster Instructor', background: 'Professional skipper and sailing instructor with 25 years experience in Adriatic waters', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Croatian', 'English', 'German', 'Italian'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=800'],
    upcomingCamps: [
      { name: 'Summer Elaphiti Cruise', startDate: '2025-07-14', endDate: '2025-07-21', price: '€1,400', level: 'Intermediate' },
      { name: 'Spring Beginners Week', startDate: '2025-05-12', endDate: '2025-05-19', price: '€900', level: 'All Levels' },
      { name: 'Autumn Skipper Course', startDate: '2025-10-06', endDate: '2025-10-13', price: '€1,800', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Dubrovnik Marina Hotel', pricePerWeek: 700, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Near Dubrovnik Old Town. Some programs include overnight stays on keelboats during island trips.'
    },
    availability: {
      status: 'limited',
      nextIntake: '2025-05-12',
      spotsLeft: 10,
      responseTime: '48h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 10,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Online schooling support during camps',
      medicalStaff: true,
      safeguarding: 'Croatian federation safeguarding, vetted staff',
      airportPickup: true,
      mealPlan: 'Full board with Croatian coastal cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Croatian', 'German'],
      emergencyProtocol: 'Marine rescue standby, Dubrovnik General Hospital 10 min'
    }
  },
  {
    id: 'palma-sailing-academy',
    name: 'Palma de Mallorca Sailing Academy',
    country: 'Spain',
    countryFlag: '🇪🇸',
    city: 'Palma de Mallorca',
    lat: 39.5696,
    lng: 2.6502,
    website: 'https://www.palmasailing.es',
    contact: '+34 971 234 567',
    contactEmail: 'info@palmasailing.es',
    description: 'World-renowned sailing venue in Palma de Mallorca, home to the Copa del Rey and Trofeo Princesa Sofía regattas. Consistent thermal winds and superb facilities make it a global sailing hub.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 0, description: 'Directly on the Bay of Palma with beach access' },
    priceRange: { from: 1000, to: 2500, unit: 'week', display: '€1,000 - €2,500/week' },
    socialMedia: { instagram: '@palmasailing', facebook: 'https://facebook.com/palmasailing', twitter: '@palmasailing' },
    climate: 'palma',
    facilities: 'World-class marina with 500+ berths, extensive boat fleet across all Olympic classes, purpose-built race course, advanced sailing simulator, meteorological weather station, full sail loft and boat maintenance workshop',
    courtSurfaces: ['Dinghy', 'Keelboat', 'Catamaran', 'Windsurf'],
    programs: [
      { name: 'Olympic Sailing Intensive', price: '€1,800/week', desc: 'High-performance training in Olympic classes on the famous Bay of Palma racing waters' },
      { name: 'Youth Sailing Development', price: '€1,200/week', desc: 'Progressive sailing development for juniors in Optimist, Laser, and 420 classes' },
      { name: 'Regatta Preparation', price: '€2,000/week', desc: 'Pre-regatta training camp with race simulation and tactical coaching' }
    ],
    coaches: [
      { name: 'Jordi Xammar', credential: 'RFEV National Coach', background: 'Olympic medalist coach with extensive experience training international Olympic sailing teams', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Spanish', 'English', 'Catalan', 'French'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1534854638093-bada1813ca19?w=800'],
    upcomingCamps: [
      { name: 'Summer Olympic Camp', startDate: '2025-07-07', endDate: '2025-07-14', price: '€1,800', level: 'Advanced' },
      { name: 'Spring Youth Sailing', startDate: '2025-04-07', endDate: '2025-04-14', price: '€1,200', level: 'Intermediate' },
      { name: 'Autumn Regatta Week', startDate: '2025-10-13', endDate: '2025-10-20', price: '€1,500', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Bay of Palma Hotel', pricePerWeek: 700, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Marina Apartment', pricePerWeek: 500, maxOccupancy: 3, bathType: 'ensuite', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Steps from the marina. Secure equipment storage and daily boat preparation assistance included.'
    },
    availability: {
      status: 'limited',
      nextIntake: '2025-04-07',
      spotsLeft: 8,
      responseTime: '24h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 8,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Mallorca international school partnerships',
      medicalStaff: true,
      safeguarding: 'RFEV child protection, DBS-equivalent checks for all staff',
      airportPickup: true,
      mealPlan: 'Full board with Mediterranean sports nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Spanish', 'Catalan'],
      emergencyProtocol: 'Marine rescue coordination, Son Espases Hospital 15 min'
    }
  },
  {
    id: 'valencia-sailing-center',
    name: 'Valencia Sailing Center',
    country: 'Spain',
    countryFlag: '🇪🇸',
    city: 'Valencia',
    lat: 39.4531,
    lng: -0.3170,
    website: 'https://www.valenciasailing.es',
    contact: '+34 96 345 6789',
    contactEmail: 'info@valenciasailing.es',
    description: 'Home of the 2007 and 2010 America\'s Cup. Valencia\'s purpose-built sailing facilities at the Marina Real Juan Carlos I offer world-class training in consistent Mediterranean conditions.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 0, description: 'Marina beach and Malvarrosa beach directly accessible' },
    priceRange: { from: 800, to: 2000, unit: 'week', display: '€800 - €2,000/week' },
    socialMedia: { instagram: '@valenciasailing', facebook: 'https://facebook.com/valenciasailing', twitter: '@valsailing' },
    climate: 'valencia',
    facilities: 'America\'s Cup marina with 700+ berths, large boat fleet, offshore race course, sailing simulator with America\'s Cup software, professional weather station, sail loft and maintenance center',
    courtSurfaces: ['Dinghy', 'Keelboat', 'Catamaran', 'Windsurf'],
    programs: [
      { name: 'America\'s Cup Experience', price: '€1,500/week', desc: 'Sail on the America\'s Cup race course with high-performance foiling catamaran introduction' },
      { name: 'Mediterranean Sailing Course', price: '€1,000/week', desc: 'Learn sailing fundamentals in the warm Mediterranean waters of Valencia' },
      { name: 'Windsurf & Sail Combo', price: '€1,200/week', desc: 'Combined windsurfing and dinghy sailing program for versatile water sports skills' }
    ],
    coaches: [
      { name: 'Gonzalo Araújo', credential: 'RFEV Level 3 Coach', background: 'America\'s Cup sailing team veteran, now coaching competitive and recreational sailors', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Spanish', 'English'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=800'],
    upcomingCamps: [
      { name: 'Summer Sailing Week', startDate: '2025-07-14', endDate: '2025-07-21', price: '€1,000', level: 'All Levels' },
      { name: 'Spring Racing Camp', startDate: '2025-04-14', endDate: '2025-04-21', price: '€1,500', level: 'Advanced' },
      { name: 'Autumn Windsurf Combo', startDate: '2025-10-06', endDate: '2025-10-13', price: '€1,200', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Marina Hotel Valencia', pricePerWeek: 550, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Beach Apartment', pricePerWeek: 380, maxOccupancy: 3, bathType: 'ensuite', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Purpose-built marina complex from the America\'s Cup. Easy access to Valencia\'s City of Arts and Sciences.'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-04-14',
      spotsLeft: 22,
      responseTime: '24h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 8,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Valencia international school partnerships',
      medicalStaff: true,
      safeguarding: 'RFEV child protection policies, background-checked coaches',
      airportPickup: true,
      mealPlan: 'Full board with Valencian Mediterranean diet including paella',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Spanish'],
      emergencyProtocol: 'Marine rescue team, Hospital La Fe 20 min'
    }
  },
  {
    id: 'la-rochelle-sailing-school',
    name: 'La Rochelle Sailing School',
    country: 'France',
    countryFlag: '🇫🇷',
    city: 'La Rochelle',
    lat: 46.1591,
    lng: -1.1520,
    website: 'https://www.larochellesailing.fr',
    contact: '+33 5 46 345 678',
    contactEmail: 'contact@larochellesailing.fr',
    description: 'France\'s premier Atlantic sailing school in the historic port of La Rochelle. Strong tidal waters and Atlantic conditions provide challenging training for serious sailors.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 2, description: 'La Rochelle beaches and Île de Ré beaches nearby' },
    priceRange: { from: 900, to: 2200, unit: 'week', display: '€900 - €2,200/week' },
    socialMedia: { instagram: '@larochellesail', facebook: 'https://facebook.com/larochellesailing', twitter: '@lrsailing' },
    climate: 'la-rochelle',
    facilities: 'Historic marina with 150 berths, fleet of 40+ boats, Atlantic race course, advanced sailing simulator, weather station with tidal prediction, professional sail loft, boat workshop',
    courtSurfaces: ['Dinghy', 'Keelboat', 'Catamaran', 'Windsurf'],
    programs: [
      { name: 'Atlantic Sailing Mastery', price: '€1,400/week', desc: 'Learn to sail in Atlantic tidal conditions with strong currents and ocean swell' },
      { name: 'Youth Optimist Academy', price: '€1,000/week', desc: 'Structured Optimist class training for young sailors aged 8-15' },
      { name: 'Offshore Passage Making', price: '€1,800/week', desc: 'Multi-day offshore sailing to Île de Ré and Île d\'Oléron with night navigation' }
    ],
    coaches: [
      { name: 'François Gabart', credential: 'FFVoile Brevet d\'État', background: 'Experienced ocean racing coach, trained multiple Mini Transat and Figaro class competitors', atpWta: false, bestRanking: null, rankingNote: null, languages: ['French', 'English'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1534854638093-bada1813ca19?w=800'],
    upcomingCamps: [
      { name: 'Summer Atlantic Camp', startDate: '2025-07-07', endDate: '2025-07-14', price: '€1,400', level: 'Intermediate' },
      { name: 'Spring Youth Camp', startDate: '2025-04-14', endDate: '2025-04-21', price: '€1,000', level: 'All Levels' },
      { name: 'Autumn Offshore Week', startDate: '2025-09-22', endDate: '2025-09-29', price: '€1,800', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Port Hotel La Rochelle', pricePerWeek: 550, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Historic port area accommodation. Famous La Rochelle seafood restaurants nearby.'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-04-14',
      spotsLeft: 15,
      responseTime: '48h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 8,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'French sailing school partnership (classe de mer)',
      medicalStaff: true,
      safeguarding: 'FFVoile child protection standards, background-checked coaches',
      airportPickup: true,
      mealPlan: 'Full board with French Atlantic coastal cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'French'],
      emergencyProtocol: 'SNSM marine rescue, CHU La Rochelle hospital 10 min'
    }
  },
  {
    id: 'marseille-sailing-center',
    name: 'Marseille Sailing Center',
    country: 'France',
    countryFlag: '🇫🇷',
    city: 'Marseille',
    lat: 43.2694,
    lng: 5.3966,
    website: 'https://www.marseillesailing.fr',
    contact: '+33 4 91 456 789',
    contactEmail: 'contact@marseillesailing.fr',
    description: 'Home of the 2024 Paris Olympic sailing events. Marseille\'s Roucas-Blanc marina offers challenging Mistral wind conditions and the famous race area of the Rade de Marseille.',
    ageGroups: ['Junior', 'Adult'],
    level: 'Intermediate to Advanced',
    individualLessons: true,
    boarding: true,
    beach: { distance: 1, description: 'Plages du Prado and Calanques National Park beaches nearby' },
    priceRange: { from: 1200, to: 2800, unit: 'week', display: '€1,200 - €2,800/week' },
    socialMedia: { instagram: '@marseillesailing', facebook: 'https://facebook.com/marseillesailing', twitter: '@marseillesail' },
    climate: 'marseille',
    facilities: 'Olympic sailing venue marina with 300 berths, Olympic-class boat fleet, purpose-built race course from 2024 Olympics, state-of-the-art sailing simulator, weather station with Mistral forecasting, sail loft',
    courtSurfaces: ['Dinghy', 'Keelboat', 'Catamaran', 'Windsurf'],
    programs: [
      { name: 'Olympic Venue Training', price: '€2,000/week', desc: 'Train on the exact 2024 Olympic sailing race course with Olympic-standard coaching' },
      { name: 'Mistral Wind Camp', price: '€1,500/week', desc: 'Master heavy-air sailing in Marseille\'s famous Mistral wind conditions' },
      { name: 'Foiling Introduction', price: '€2,500/week', desc: 'Learn foiling techniques on modern foiling dinghies and catamarans' }
    ],
    coaches: [
      { name: 'Jean-Baptiste Bernaz', credential: 'FFVoile Brevet d\'État Supérieur', background: 'Former Olympic Laser class sailor, multiple world championship medals, now coaching elite sailing programs', atpWta: false, bestRanking: null, rankingNote: null, languages: ['French', 'English', 'Spanish'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=800'],
    upcomingCamps: [
      { name: 'Summer Olympic Venue Camp', startDate: '2025-07-14', endDate: '2025-07-21', price: '€2,000', level: 'Advanced' },
      { name: 'Spring Mistral Training', startDate: '2025-04-07', endDate: '2025-04-14', price: '€1,500', level: 'Intermediate' },
      { name: 'Autumn Foiling Week', startDate: '2025-10-06', endDate: '2025-10-13', price: '€2,500', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Marseille Waterfront Hotel', pricePerWeek: 700, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: false,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Olympic venue area accommodation. Access to Calanques National Park for off-day activities.'
    },
    availability: {
      status: 'limited',
      nextIntake: '2025-04-07',
      spotsLeft: 6,
      responseTime: '48h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 14,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'French sports school partnership',
      medicalStaff: true,
      safeguarding: 'FFVoile safeguarding framework, police-checked coaches',
      airportPickup: true,
      mealPlan: 'Full board with Provençal Mediterranean cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'French'],
      emergencyProtocol: 'SNSM marine rescue on standby, Hôpital de la Timone 15 min'
    }
  },
  {
    id: 'sardinia-sailing-academy',
    name: 'Sardinia Sailing Academy',
    country: 'Italy',
    countryFlag: '🇮🇹',
    city: 'Sardinia',
    lat: 41.1211,
    lng: 9.5216,
    website: 'https://www.sardiniasailing.it',
    contact: '+39 0789 345 678',
    contactEmail: 'info@sardiniasailing.it',
    description: 'Exclusive sailing academy on the Costa Smeralda, Sardinia. Home to the Yacht Club Costa Smeralda and some of the most beautiful sailing waters in the Mediterranean.',
    ageGroups: ['Junior', 'Adult', 'Masters'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 0, description: 'Direct beach access on the stunning Costa Smeralda' },
    priceRange: { from: 1200, to: 3000, unit: 'week', display: '€1,200 - €3,000/week' },
    socialMedia: { instagram: '@sardiniasailing', facebook: 'https://facebook.com/sardiniasailing', twitter: '@sardiniasail' },
    climate: 'sardinia',
    facilities: 'Porto Cervo marina with 700 berths, premium boat fleet, Mediterranean race course, sailing simulator, weather station, professional sail loft with Doyle Sails partnership, boat repair facility',
    courtSurfaces: ['Dinghy', 'Keelboat', 'Catamaran', 'Windsurf'],
    programs: [
      { name: 'Costa Smeralda Sailing', price: '€1,800/week', desc: 'Learn sailing in the turquoise waters of the Costa Smeralda with island navigation' },
      { name: 'Superyacht Sailing', price: '€2,500/week', desc: 'Large yacht handling, crew management, and Mediterranean passage making' },
      { name: 'Youth Racing Program', price: '€1,400/week', desc: 'Competitive racing development for juniors in Optimist and Laser classes' }
    ],
    coaches: [
      { name: 'Pietro Sibello', credential: 'FIV National Coach', background: 'Multiple world championship medals in 49er class, Olympic campaign veteran', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Italian', 'English', 'French'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1534854638093-bada1813ca19?w=800'],
    upcomingCamps: [
      { name: 'Summer Costa Smeralda', startDate: '2025-07-07', endDate: '2025-07-14', price: '€1,800', level: 'Intermediate' },
      { name: 'Spring Youth Racing', startDate: '2025-05-05', endDate: '2025-05-12', price: '€1,400', level: 'Advanced' },
      { name: 'Autumn Keelboat Week', startDate: '2025-09-15', endDate: '2025-09-22', price: '€2,000', level: 'All Levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Costa Smeralda Resort', pricePerWeek: 900, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Marina Apartment', pricePerWeek: 600, maxOccupancy: 3, bathType: 'ensuite', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Luxury Sardinian accommodation. Some of the best Italian seafood dining in Europe.'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-05-05',
      spotsLeft: 12,
      responseTime: '48h',
      privateLessons: true,
      yearRound: false
    },
    juniorInfo: {
      minAge: 8,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Online schooling support during camps',
      medicalStaff: true,
      safeguarding: 'FIV child protection standards, background-checked staff',
      airportPickup: true,
      mealPlan: 'Full board with Sardinian Mediterranean cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Italian'],
      emergencyProtocol: 'Guardia Costiera coordination, Olbia Hospital 30 min'
    }
  },
  {
    id: 'cowes-sailing-academy',
    name: 'Cowes Sailing Academy',
    country: 'UK',
    countryFlag: '🇬🇧',
    city: 'Cowes',
    lat: 50.7616,
    lng: -1.2996,
    website: 'https://www.cowessailing.co.uk',
    contact: '+44 1983 295 744',
    contactEmail: 'info@cowessailing.co.uk',
    description: 'The spiritual home of sailing. Cowes on the Isle of Wight hosts Cowes Week, the world\'s longest-running sailing regatta. Train in the challenging tidal waters of the Solent.',
    ageGroups: ['Junior', 'Adult', 'Masters'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 1, description: 'Solent waterfront with beach access at Gurnard and Egypt Point' },
    priceRange: { from: 1000, to: 2500, unit: 'week', display: '£1,000 - £2,500/week' },
    socialMedia: { instagram: '@cowessailing', facebook: 'https://facebook.com/cowessailing', twitter: '@cowessailing' },
    climate: 'cowes',
    facilities: 'Royal Yacht Squadron marina with 250 berths, diverse boat fleet for all levels, Solent race course, advanced sailing simulator, weather station with tidal data, traditional sail loft',
    courtSurfaces: ['Dinghy', 'Keelboat', 'Catamaran', 'Windsurf'],
    programs: [
      { name: 'Solent Tidal Sailing', price: '£1,500/week', desc: 'Master tidal sailing in the challenging Solent with strong currents and busy shipping lanes' },
      { name: 'RYA Day Skipper', price: '£1,200/week', desc: 'Official RYA Day Skipper practical course with certification' },
      { name: 'Cowes Week Preparation', price: '£2,000/week', desc: 'Race training targeting Cowes Week participation with tactical coaching' }
    ],
    coaches: [
      { name: 'Sir Ben Worthington', credential: 'RYA Senior Instructor + Yachtmaster Ocean', background: 'Former Olympic campaign sailor with 30 years teaching in the Solent', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=800'],
    upcomingCamps: [
      { name: 'Summer Solent Camp', startDate: '2025-07-07', endDate: '2025-07-14', price: '£1,500', level: 'Intermediate' },
      { name: 'Spring RYA Course', startDate: '2025-04-07', endDate: '2025-04-14', price: '£1,200', level: 'All Levels' },
      { name: 'Cowes Week Prep', startDate: '2025-07-21', endDate: '2025-07-28', price: '£2,000', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Cowes Waterfront Hotel', pricePerWeek: 650, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Historic Cowes High Street location. Ferry connections to Southampton mainland.'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-04-07',
      spotsLeft: 14,
      responseTime: '48h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 8,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Isle of Wight school partnerships',
      medicalStaff: true,
      safeguarding: 'RYA safeguarding, DBS-checked all staff, NSPCC trained',
      airportPickup: true,
      mealPlan: 'Full board with British sailing club catering',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English'],
      emergencyProtocol: 'RNLI lifeboat station nearby, St Mary\'s Hospital 10 min'
    }
  },
  {
    id: 'cascais-sailing-center',
    name: 'Cascais Sailing Center',
    country: 'Portugal',
    countryFlag: '🇵🇹',
    city: 'Cascais',
    lat: 38.6979,
    lng: -9.4215,
    website: 'https://www.cascaissailing.pt',
    contact: '+351 21 482 3456',
    contactEmail: 'info@cascaissailing.pt',
    description: 'Atlantic sailing at its finest in historic Cascais, near Lisbon. Where the Tagus River meets the Atlantic Ocean, creating unique sailing conditions with ocean swell and thermal winds.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 0, description: 'Direct beach access on Cascais Bay and nearby Guincho beach for windsurf' },
    priceRange: { from: 800, to: 2000, unit: 'week', display: '€800 - €2,000/week' },
    socialMedia: { instagram: '@cascaissailing', facebook: 'https://facebook.com/cascaissailing', twitter: '@cascaissail' },
    climate: 'cascais',
    facilities: 'Cascais Marina with 650 berths, fleet of 30+ boats, Atlantic race course, sailing simulator with wave simulation, weather station, sail loft, chandlery and boat maintenance',
    courtSurfaces: ['Dinghy', 'Keelboat', 'Catamaran', 'Windsurf'],
    programs: [
      { name: 'Atlantic Sailing Course', price: '€1,200/week', desc: 'Ocean sailing fundamentals in Atlantic conditions with open water experience' },
      { name: 'Windsurf Cascais', price: '€1,000/week', desc: 'Windsurfing at legendary Guincho beach — one of Europe\'s best windsurf spots' },
      { name: 'Offshore Racing Intro', price: '€1,600/week', desc: 'Introduction to offshore racing with coastal passages along the Portuguese coast' }
    ],
    coaches: [
      { name: 'João Rodrigues', credential: 'FPV National Coach', background: 'Volvo Ocean Race crew member, extensive offshore racing experience', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Portuguese', 'English', 'French'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1534854638093-bada1813ca19?w=800'],
    upcomingCamps: [
      { name: 'Summer Atlantic Sailing', startDate: '2025-07-07', endDate: '2025-07-14', price: '€1,200', level: 'Intermediate' },
      { name: 'Spring Windsurf Week', startDate: '2025-04-28', endDate: '2025-05-05', price: '€1,000', level: 'All Levels' },
      { name: 'Autumn Offshore Camp', startDate: '2025-10-06', endDate: '2025-10-13', price: '€1,600', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Cascais Bay Hotel', pricePerWeek: 550, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Cascais Town Apartment', pricePerWeek: 380, maxOccupancy: 3, bathType: 'ensuite', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Charming Cascais town with train connection to Lisbon. Fresh seafood dining on the waterfront.'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-04-28',
      spotsLeft: 18,
      responseTime: '24h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 8,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Cascais international school partnerships',
      medicalStaff: true,
      safeguarding: 'FPV child protection standards, police-checked coaches',
      airportPickup: true,
      mealPlan: 'Full board with Portuguese Atlantic cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Portuguese'],
      emergencyProtocol: 'Marine police and ISN rescue, Hospital de Cascais 10 min'
    }
  },
  {
    id: 'bodrum-sailing-school',
    name: 'Bodrum Sailing School',
    country: 'Turkey',
    countryFlag: '🇹🇷',
    city: 'Bodrum',
    lat: 37.0344,
    lng: 27.4305,
    website: 'https://www.bodrumsailing.com.tr',
    contact: '+90 252 316 7890',
    contactEmail: 'info@bodrumsailing.com.tr',
    description: 'Sailing in the stunning turquoise waters of the Aegean where Turkish gulet tradition meets modern racing. Bodrum offers warm waters, reliable winds, and proximity to Greek islands.',
    ageGroups: ['Junior', 'Adult', 'Masters'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 0, description: 'Marina on Bodrum Bay with direct access to Aegean waters' },
    priceRange: { from: 600, to: 1600, unit: 'week', display: '€600 - €1,600/week' },
    socialMedia: { instagram: '@bodrumsailing', facebook: 'https://facebook.com/bodrumsailing', twitter: '@bodrumsail' },
    climate: 'bodrum',
    facilities: 'Bodrum Marina with 450 berths, mixed fleet including traditional gulets and modern dinghies, Aegean race course, sailing simulator, weather station, sail loft and traditional boat workshop',
    courtSurfaces: ['Dinghy', 'Keelboat', 'Catamaran', 'Windsurf'],
    programs: [
      { name: 'Blue Voyage Sailing', price: '€1,200/week', desc: 'Traditional Turkish gulet sailing combined with modern sailing skills along the Turquoise Coast' },
      { name: 'Dinghy Sailing Course', price: '€700/week', desc: 'Learn dinghy sailing in the warm, sheltered waters of Bodrum Bay' },
      { name: 'Aegean Island Hopping', price: '€1,400/week', desc: 'Multi-day sailing trip visiting Greek islands of Kos and Kalymnos from Bodrum' }
    ],
    coaches: [
      { name: 'Tolga Erdoğan', credential: 'Turkish Sailing Federation A License', background: 'Former Turkish national team sailor, 20 years of Aegean sailing instruction experience', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Turkish', 'English', 'German'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=800'],
    upcomingCamps: [
      { name: 'Summer Blue Voyage', startDate: '2025-07-07', endDate: '2025-07-14', price: '€1,200', level: 'Intermediate' },
      { name: 'Spring Dinghy Camp', startDate: '2025-04-14', endDate: '2025-04-21', price: '€700', level: 'All Levels' },
      { name: 'Autumn Island Hopping', startDate: '2025-09-22', endDate: '2025-09-29', price: '€1,400', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Bodrum Marina Hotel', pricePerWeek: 450, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Bodrum Town Apartment', pricePerWeek: 280, maxOccupancy: 3, bathType: 'ensuite', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Bodrum Castle waterfront area. Excellent value with Turkish hospitality and cuisine.'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-04-14',
      spotsLeft: 24,
      responseTime: '24h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 8,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Online schooling support during camps',
      medicalStaff: true,
      safeguarding: 'Turkish Sailing Federation child protection, background-checked staff',
      airportPickup: true,
      mealPlan: 'Full board with Turkish Aegean cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Turkish', 'German'],
      emergencyProtocol: 'Turkish Coast Guard coordination, Bodrum State Hospital 10 min'
    }
  },
  {
    id: 'ijsselmeer-sailing-academy',
    name: 'IJsselmeer Sailing Academy',
    country: 'Netherlands',
    countryFlag: '🇳🇱',
    city: 'Lelystad',
    lat: 52.5185,
    lng: 5.4714,
    website: 'https://www.ijsselmeersailing.nl',
    contact: '+31 320 234 567',
    contactEmail: 'info@ijsselmeersailing.nl',
    description: 'Premier inland sailing academy on the IJsselmeer, Europe\'s largest lake. Ideal flat-water conditions for beginners and challenging open-water sailing for advanced racers, with access to the Markermeer and historic Dutch harbors.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 0, description: 'Directly on Batavia Haven marina with IJsselmeer waterfront access' },
    priceRange: { from: 800, to: 1800, unit: 'week', display: '€800 - €1,800/week' },
    socialMedia: { instagram: '@ijsselmeersailing', facebook: 'https://facebook.com/ijsselmeersailing', twitter: '@ijsselmeersail' },
    climate: 'ijsselmeer',
    facilities: 'Batavia Haven marina with 150 berths, fleet of 30+ boats (Valk, Randmeer, Laser, 420), sheltered training basin, sailing simulator, weather station, sail loft and rigging workshop',
    courtSurfaces: ['Dinghy', 'Keelboat', 'Catamaran'],
    programs: [
      { name: 'Lake Sailing Fundamentals', price: '€900/week', desc: 'Learn to sail on the sheltered IJsselmeer with progressive skill building in Valk and Laser dinghies' },
      { name: 'Keelboat Cruising Course', price: '€1,400/week', desc: 'Multi-day keelboat cruising across the IJsselmeer visiting historic Zuiderzee harbors' },
      { name: 'Youth Racing Development', price: '€1,100/week', desc: 'Competitive dinghy racing program for juniors preparing for Dutch national championships' }
    ],
    coaches: [
      { name: 'Jan van der Berg', credential: 'World Sailing Level 3 Coach', background: 'Former Dutch national team sailor with 15 years coaching experience on IJsselmeer and international regattas', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Dutch', 'English', 'German'], instagram: null },
      { name: 'Marieke de Vries', credential: 'KNWV Instructor A License', background: 'Youth sailing specialist with Dutch Sailing Federation, experienced in Optimist and 420 class development', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Dutch', 'English'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=800', 'https://images.unsplash.com/photo-1534854638093-bada1813ca19?w=800'],
    upcomingCamps: [
      { name: 'Summer Lake Camp', startDate: '2026-07-06', endDate: '2026-07-13', price: '€900', level: 'All Levels' },
      { name: 'Spring Keelboat Course', startDate: '2026-05-04', endDate: '2026-05-11', price: '€1,400', level: 'Intermediate' },
      { name: 'Autumn Racing Prep', startDate: '2026-09-21', endDate: '2026-09-28', price: '€1,100', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Batavia Marina Hotel', pricePerWeek: 500, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Lelystad Waterfront Apartment', pricePerWeek: 380, maxOccupancy: 3, bathType: 'ensuite', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Marina-side accommodation in Batavia Haven with boat storage. Close to Batavia Stad shopping center.'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-05-04',
      spotsLeft: 16,
      responseTime: '24h',
      privateLessons: true,
      yearRound: false
    },
    juniorInfo: {
      minAge: 8,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Local Lelystad international school partnerships',
      medicalStaff: true,
      safeguarding: 'KNWV child protection standards, VOG-certified coaches',
      airportPickup: true,
      mealPlan: 'Full board with Dutch cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Dutch', 'German'],
      emergencyProtocol: 'KNRM lifeboat service coordination, Flevoziekenhuis Almere 20 min'
    }
  },
  {
    id: 'kiel-sailing-center',
    name: 'Kiel Sailing Center',
    country: 'Germany',
    countryFlag: '🇩🇪',
    city: 'Kiel',
    lat: 54.3233,
    lng: 10.1228,
    website: 'https://www.kielsailing.de',
    contact: '+49 431 901 2345',
    contactEmail: 'info@kielsailing.de',
    description: 'Train at Germany\'s sailing capital on the Baltic Sea. Home of the legendary Kieler Woche, the world\'s largest sailing event. World-class facilities at the Olympic Centre Schilksee with consistent Baltic winds.',
    ageGroups: ['Junior', 'Adult', 'Masters'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 0, description: 'Directly on Schilksee Olympic Harbour with Baltic Sea access' },
    priceRange: { from: 900, to: 2100, unit: 'week', display: '€900 - €2,100/week' },
    socialMedia: { instagram: '@kielsailing', facebook: 'https://facebook.com/kielsailing', twitter: '@kielsailing' },
    climate: 'kiel',
    facilities: 'Olympic Centre Schilksee with 600 berths, fleet of 50+ boats (Laser, 49er, 470, Finn, Nacra 17), Olympic race course in Kiel Fjord, full sailing simulator, sports science lab, weather station, professional sail loft',
    courtSurfaces: ['Dinghy', 'Keelboat', 'Catamaran', 'Windsurf'],
    programs: [
      { name: 'Kieler Woche Preparation', price: '€1,800/week', desc: 'Intensive race training to prepare for the world-famous Kiel Week regatta on the Olympic course' },
      { name: 'Baltic Dinghy Sailing', price: '€1,000/week', desc: 'Learn dinghy sailing on the Kiel Fjord with progressive skill development in Laser and 420 classes' },
      { name: 'Olympic Class Development', price: '€2,000/week', desc: 'High-performance training in Olympic sailing classes with German national team coaches' }
    ],
    coaches: [
      { name: 'Maximilian Richter', credential: 'DSV A-Trainer License', background: 'Former German Olympic team coach, Kiel Week champion, 25 years of elite sailing instruction on the Baltic', atpWta: false, bestRanking: null, rankingNote: null, languages: ['German', 'English', 'Danish'], instagram: null },
      { name: 'Katrin Hoffmann', credential: 'World Sailing Level 3 Coach', background: 'Former 49erFX world championship competitor, specialist in women\'s Olympic sailing classes', atpWta: false, bestRanking: null, rankingNote: null, languages: ['German', 'English'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=800', 'https://images.unsplash.com/photo-1534854638093-bada1813ca19?w=800'],
    upcomingCamps: [
      { name: 'Kiel Week Prep Camp', startDate: '2026-06-08', endDate: '2026-06-15', price: '€1,800', level: 'Advanced' },
      { name: 'Spring Baltic Camp', startDate: '2026-04-20', endDate: '2026-04-27', price: '€1,000', level: 'All Levels' },
      { name: 'Autumn Olympic Class Camp', startDate: '2026-09-14', endDate: '2026-09-21', price: '€2,000', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Schilksee Olympic Village Hotel', pricePerWeek: 580, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Kiel Fjord Apartment', pricePerWeek: 420, maxOccupancy: 3, bathType: 'ensuite', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Accommodation at Schilksee Olympic Centre area with panoramic Baltic views and direct marina access.'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-04-20',
      spotsLeft: 20,
      responseTime: '24h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 7,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Kiel international school partnerships',
      medicalStaff: true,
      safeguarding: 'DSV child protection standards, background-checked staff',
      airportPickup: true,
      mealPlan: 'Full board with German and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'German', 'Danish'],
      emergencyProtocol: 'DGzRS sea rescue coordination, UKSH Kiel Hospital 15 min'
    }
  },
  {
    id: 'copenhagen-sailing-academy',
    name: 'Copenhagen Sailing Academy',
    country: 'Denmark',
    countryFlag: '🇩🇰',
    city: 'Copenhagen',
    lat: 55.6761,
    lng: 12.5683,
    website: 'https://www.copenhagensailing.dk',
    contact: '+45 33 12 34 56',
    contactEmail: 'info@copenhagensailing.dk',
    description: 'Sail the Øresund strait between Denmark and Sweden from Copenhagen\'s vibrant harbor. Experience world-class Scandinavian sailing with views of the Øresund Bridge and access to the Danish archipelago.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 0, description: 'Based at Skovshoved Havn marina with direct Øresund access' },
    priceRange: { from: 8000, to: 18000, unit: 'week', display: 'DKK 8,000 - 18,000/week' },
    socialMedia: { instagram: '@cphsailing', facebook: 'https://facebook.com/copenhagensailing', twitter: '@cphsailing' },
    climate: 'copenhagen-sailing',
    facilities: 'Skovshoved Havn marina with 200 berths, fleet of 35+ boats (Laser, 29er, J/70, Dragon), Øresund race course, sailing simulator, modern clubhouse with weather station and classroom',
    courtSurfaces: ['Dinghy', 'Keelboat', 'Catamaran'],
    programs: [
      { name: 'Øresund Sailing Course', price: 'DKK 12,000/week', desc: 'Comprehensive sailing course on the Øresund with views of Copenhagen skyline and Swedish coast' },
      { name: 'Dragon Class Keelboat', price: 'DKK 15,000/week', desc: 'Classic Dragon class keelboat sailing in Copenhagen\'s rich maritime heritage' },
      { name: 'Youth Dinghy Racing', price: 'DKK 9,000/week', desc: 'Competitive dinghy sailing for juniors preparing for Danish and Nordic championships' }
    ],
    coaches: [
      { name: 'Lars Christensen', credential: 'Dansk Sejlunion A License', background: 'Former Danish Sailing Team member, multiple Danish championship titles, 18 years coaching experience', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Danish', 'English', 'Swedish'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=800'],
    upcomingCamps: [
      { name: 'Summer Øresund Camp', startDate: '2026-07-06', endDate: '2026-07-13', price: 'DKK 12,000', level: 'All Levels' },
      { name: 'Spring Dragon Class', startDate: '2026-05-11', endDate: '2026-05-18', price: 'DKK 15,000', level: 'Intermediate' },
      { name: 'Autumn Youth Racing', startDate: '2026-09-07', endDate: '2026-09-14', price: 'DKK 9,000', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Skovshoved Hotel', pricePerWeek: 5500, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Copenhagen Harbor Apartment', pricePerWeek: 4200, maxOccupancy: 3, bathType: 'ensuite', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Charming Skovshoved fishing village setting. Easy metro access to central Copenhagen.'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-05-11',
      spotsLeft: 14,
      responseTime: '24h',
      privateLessons: true,
      yearRound: false
    },
    juniorInfo: {
      minAge: 8,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Copenhagen International School partnership',
      medicalStaff: true,
      safeguarding: 'Dansk Sejlunion child protection standards, police-checked coaches',
      airportPickup: true,
      mealPlan: 'Full board with Scandinavian cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Danish'],
      emergencyProtocol: 'Danish Maritime Authority coordination, Rigshospitalet 20 min'
    }
  },
  {
    id: 'gothenburg-sailing-center',
    name: 'Gothenburg Sailing Center',
    country: 'Sweden',
    countryFlag: '🇸🇪',
    city: 'Gothenburg',
    lat: 57.7089,
    lng: 11.9746,
    website: 'https://www.gothenburgsailing.se',
    contact: '+46 31 123 4567',
    contactEmail: 'info@gothenburgsailing.se',
    description: 'Explore Sweden\'s stunning west coast archipelago from Gothenburg. Sail among thousands of granite islands with sheltered channels and open Skagerrak waters, experiencing the best of Nordic sailing.',
    ageGroups: ['Junior', 'Adult', 'Masters'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 0, description: 'Based at Långedrag marina with direct archipelago access' },
    priceRange: { from: 9000, to: 22000, unit: 'week', display: 'SEK 9,000 - 22,000/week' },
    socialMedia: { instagram: '@gbgsailing', facebook: 'https://facebook.com/gothenburgsailing', twitter: '@gbgsailing' },
    climate: 'gothenburg-sailing',
    facilities: 'Långedrag marina with 300 berths, fleet of 40+ boats (Laser, 29er, J/70, Express, IF-boat), archipelago race course, sailing simulator, modern clubhouse with sauna and weather station',
    courtSurfaces: ['Dinghy', 'Keelboat', 'Catamaran', 'Windsurf'],
    programs: [
      { name: 'Archipelago Cruising', price: 'SEK 16,000/week', desc: 'Multi-day keelboat cruising through the stunning Gothenburg archipelago with island stops' },
      { name: 'Dinghy Sailing Course', price: 'SEK 10,000/week', desc: 'Learn to sail in sheltered archipelago waters with progression to open Skagerrak sailing' },
      { name: 'Match Racing Intensive', price: 'SEK 20,000/week', desc: 'Advanced match racing techniques in J/70 keelboats, preparing for Swedish Match Racing Tour' }
    ],
    coaches: [
      { name: 'Erik Lindqvist', credential: 'Svenska Seglarförbundet A License', background: 'Former Swedish match racing champion, Volvo Ocean Race crew member, 20 years of west coast sailing instruction', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Swedish', 'English', 'Norwegian'], instagram: null },
      { name: 'Anna Svensson', credential: 'World Sailing Level 2 Coach', background: 'Youth sailing development specialist with Swedish Sailing Federation, Optimist and 29er class expert', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Swedish', 'English'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=800', 'https://images.unsplash.com/photo-1534854638093-bada1813ca19?w=800'],
    upcomingCamps: [
      { name: 'Summer Archipelago Camp', startDate: '2026-07-06', endDate: '2026-07-13', price: 'SEK 16,000', level: 'Intermediate' },
      { name: 'Spring Dinghy Course', startDate: '2026-05-18', endDate: '2026-05-25', price: 'SEK 10,000', level: 'All Levels' },
      { name: 'Autumn Match Racing', startDate: '2026-09-07', endDate: '2026-09-14', price: 'SEK 20,000', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Långedrag Seaside Hotel', pricePerWeek: 6500, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Archipelago Apartment', pricePerWeek: 5000, maxOccupancy: 3, bathType: 'ensuite', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Seaside accommodation at Långedrag with spectacular archipelago views. Tram connection to central Gothenburg.'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-05-18',
      spotsLeft: 16,
      responseTime: '24h',
      privateLessons: true,
      yearRound: false
    },
    juniorInfo: {
      minAge: 8,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'International School of Gothenburg partnership',
      medicalStaff: true,
      safeguarding: 'SSF child protection standards, police-checked coaches',
      airportPickup: true,
      mealPlan: 'Full board with Swedish cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Swedish'],
      emergencyProtocol: 'Swedish Sea Rescue Society coordination, Sahlgrenska Hospital 20 min'
    }
  },
  {
    id: 'oslo-fjord-sailing',
    name: 'Oslo Fjord Sailing Academy',
    country: 'Norway',
    countryFlag: '🇳🇴',
    city: 'Oslo',
    lat: 59.9139,
    lng: 10.7522,
    website: 'https://www.oslofjordsailing.no',
    contact: '+47 22 12 34 56',
    contactEmail: 'info@oslofjordsailing.no',
    description: 'Sail the magnificent Oslo Fjord surrounded by forested islands and rocky skerries. Experience Norwegian maritime traditions with sheltered inner fjord sailing and challenging outer fjord passages.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 0, description: 'Based at Bygdøy Royal Norwegian Yacht Club marina' },
    priceRange: { from: 9000, to: 22000, unit: 'week', display: 'NOK 9,000 - 22,000/week' },
    socialMedia: { instagram: '@oslofjordsailing', facebook: 'https://facebook.com/oslofjordsailing', twitter: '@oslofjordsail' },
    climate: 'oslo-sailing',
    facilities: 'Bygdøy marina with 180 berths, fleet of 30+ boats (Laser, 29er, J/70, Soling, Knarr), fjord race course, sailing simulator, weather station, heated clubhouse with maritime library',
    courtSurfaces: ['Dinghy', 'Keelboat', 'Catamaran'],
    programs: [
      { name: 'Oslo Fjord Exploration', price: 'NOK 16,000/week', desc: 'Keelboat cruising through the Oslo Fjord visiting picturesque island harbors and historic coastal towns' },
      { name: 'Dinghy Sailing Basics', price: 'NOK 10,000/week', desc: 'Learn to sail in the sheltered inner Oslo Fjord with steady thermal winds and island shelter' },
      { name: 'Fjord Racing Camp', price: 'NOK 18,000/week', desc: 'Competitive racing program on the Oslo Fjord preparing for Norwegian championship regattas' }
    ],
    coaches: [
      { name: 'Magnus Haugen', credential: 'Norges Seilforbund Level 3 Coach', background: 'Former Norwegian national team sailor, multiple Norwegian championship titles, specialist in fjord sailing tactics', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Norwegian', 'English', 'Swedish'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=800'],
    upcomingCamps: [
      { name: 'Summer Fjord Camp', startDate: '2026-06-29', endDate: '2026-07-06', price: 'NOK 16,000', level: 'Intermediate' },
      { name: 'Spring Dinghy Course', startDate: '2026-05-11', endDate: '2026-05-18', price: 'NOK 10,000', level: 'All Levels' },
      { name: 'Autumn Racing Intensive', startDate: '2026-09-07', endDate: '2026-09-14', price: 'NOK 18,000', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Bygdøy Marina Hotel', pricePerWeek: 7500, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Oslo Fjord Apartment', pricePerWeek: 6000, maxOccupancy: 3, bathType: 'ensuite', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Bygdøy peninsula accommodation near Fram Museum and Viking Ship Museum. Ferry to central Oslo.'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-05-11',
      spotsLeft: 12,
      responseTime: '24h',
      privateLessons: true,
      yearRound: false
    },
    juniorInfo: {
      minAge: 8,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Oslo International School partnership',
      medicalStaff: true,
      safeguarding: 'NSF child protection standards, police-checked coaches',
      airportPickup: true,
      mealPlan: 'Full board with Norwegian cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Norwegian'],
      emergencyProtocol: 'RS Norwegian Sea Rescue coordination, Oslo University Hospital 15 min'
    }
  },
  {
    id: 'dun-laoghaire-sailing',
    name: 'Dún Laoghaire Sailing Academy',
    country: 'Ireland',
    countryFlag: '🇮🇪',
    city: 'Dún Laoghaire',
    lat: 53.2946,
    lng: -6.1343,
    website: 'https://www.dlsailing.ie',
    contact: '+353 1 280 1234',
    contactEmail: 'info@dlsailing.ie',
    description: 'Sail from Ireland\'s premier sailing harbor in Dún Laoghaire on Dublin Bay. Historic Victorian harbor with world-class racing, steady Irish Sea winds, and access to Ireland\'s stunning east coast.',
    ageGroups: ['Junior', 'Adult', 'Masters'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 200, description: 'Sandycove Beach 200m from harbor, Scotsman\'s Bay swimming area' },
    priceRange: { from: 700, to: 1800, unit: 'week', display: '€700 - €1,800/week' },
    socialMedia: { instagram: '@dlsailing', facebook: 'https://facebook.com/dlsailing', twitter: '@dlsailing' },
    climate: 'dun-laoghaire',
    facilities: 'Dún Laoghaire Harbour marina with 800 berths, fleet of 40+ boats (Laser, 420, SB20, J/24), Dublin Bay race course, sailing simulator, historic yacht club facilities, weather station and sail repair workshop',
    courtSurfaces: ['Dinghy', 'Keelboat', 'Catamaran', 'Windsurf'],
    programs: [
      { name: 'Dublin Bay Sailing', price: '€1,200/week', desc: 'Keelboat sailing on Dublin Bay with views of Howth Head, Dalkey Island, and the Wicklow Mountains' },
      { name: 'Dinghy Sailing Course', price: '€800/week', desc: 'Learn to sail in the sheltered waters of Dún Laoghaire harbour before progressing to Dublin Bay' },
      { name: 'Coastal Racing Camp', price: '€1,500/week', desc: 'Advanced racing tactics for Dublin Bay regattas including the prestigious Volvo Dún Laoghaire Regatta' }
    ],
    coaches: [
      { name: 'Séamus O\'Brien', credential: 'Irish Sailing Association Senior Instructor', background: 'Former Irish national sailing team member, Round Ireland Race veteran, 22 years of coastal sailing instruction', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Irish'], instagram: null },
      { name: 'Aoife Murphy', credential: 'World Sailing Level 2 Coach', background: 'Irish Laser Radial national champion, youth sailing development specialist with ISA', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Irish', 'French'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=800', 'https://images.unsplash.com/photo-1534854638093-bada1813ca19?w=800'],
    upcomingCamps: [
      { name: 'Summer Dublin Bay Camp', startDate: '2026-07-13', endDate: '2026-07-20', price: '€1,200', level: 'Intermediate' },
      { name: 'Spring Dinghy Course', startDate: '2026-04-27', endDate: '2026-05-04', price: '€800', level: 'All Levels' },
      { name: 'Autumn Regatta Prep', startDate: '2026-09-14', endDate: '2026-09-21', price: '€1,500', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Royal Marine Hotel', pricePerWeek: 600, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Dún Laoghaire Seafront Apartment', pricePerWeek: 450, maxOccupancy: 3, bathType: 'ensuite', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Victorian seaside town with excellent restaurants and DART rail connection to Dublin city centre.'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-04-27',
      spotsLeft: 18,
      responseTime: '24h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 8,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Local Dún Laoghaire school partnerships',
      medicalStaff: true,
      safeguarding: 'Irish Sailing child protection policy, Garda-vetted coaches',
      airportPickup: true,
      mealPlan: 'Full board with Irish cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Irish'],
      emergencyProtocol: 'RNLI Dún Laoghaire lifeboat coordination, St Vincent\'s Hospital 15 min'
    }
  },
  {
    id: 'kotor-sailing-academy',
    name: 'Kotor Sailing Academy',
    country: 'Montenegro',
    countryFlag: '🇲🇪',
    city: 'Kotor',
    lat: 42.4247,
    lng: 18.7712,
    website: 'https://www.kotorsailing.me',
    contact: '+382 32 325 678',
    contactEmail: 'info@kotorsailing.me',
    description: 'Sail the spectacular Bay of Kotor, a UNESCO World Heritage fjord-like bay surrounded by dramatic mountains. Experience Mediterranean sailing with unique wind patterns created by the bay\'s geography.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 0, description: 'Marina at Kotor Bay with direct access to the Adriatic' },
    priceRange: { from: 600, to: 1500, unit: 'week', display: '€600 - €1,500/week' },
    socialMedia: { instagram: '@kotorsailing', facebook: 'https://facebook.com/kotorsailing', twitter: '@kotorsailing' },
    climate: 'kotor',
    facilities: 'Kotor Marina with 150 berths, fleet of 20+ boats (Laser, 420, Bavaria cruisers), bay race course, weather station, sail repair workshop, traditional stone clubhouse with panoramic bay views',
    courtSurfaces: ['Dinghy', 'Keelboat', 'Catamaran'],
    programs: [
      { name: 'Bay of Kotor Discovery', price: '€1,000/week', desc: 'Keelboat cruising through the Bay of Kotor visiting Perast, Our Lady of the Rocks, and Herceg Novi' },
      { name: 'Dinghy Sailing Basics', price: '€650/week', desc: 'Learn to sail in the sheltered inner bay with steady mountain thermal winds and calm waters' },
      { name: 'Adriatic Coastal Passage', price: '€1,300/week', desc: 'Multi-day coastal sailing from Kotor to Budva, Sveti Stefan, and the Montenegrin riviera' }
    ],
    coaches: [
      { name: 'Nikola Jovanović', credential: 'Montenegrin Sailing Federation A License', background: 'Former Montenegrin national team sailor, Bay of Kotor regatta champion, specialist in Adriatic coastal navigation', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Montenegrin', 'English', 'Italian', 'Croatian'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=800'],
    upcomingCamps: [
      { name: 'Summer Bay Camp', startDate: '2026-07-06', endDate: '2026-07-13', price: '€1,000', level: 'All Levels' },
      { name: 'Spring Dinghy Course', startDate: '2026-04-20', endDate: '2026-04-27', price: '€650', level: 'Beginner' },
      { name: 'Autumn Adriatic Passage', startDate: '2026-09-28', endDate: '2026-10-05', price: '€1,300', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Kotor Old Town Hotel', pricePerWeek: 400, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Bay View Apartment', pricePerWeek: 280, maxOccupancy: 3, bathType: 'ensuite', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'UNESCO World Heritage Kotor Old Town with medieval walls and Venetian architecture. Excellent seafood restaurants.'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-04-20',
      spotsLeft: 14,
      responseTime: '24h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 8,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Online schooling support during camps',
      medicalStaff: true,
      safeguarding: 'Montenegrin Sailing Federation child protection standards',
      airportPickup: true,
      mealPlan: 'Full board with Montenegrin Mediterranean cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Montenegrin', 'Italian'],
      emergencyProtocol: 'Montenegro Coast Guard coordination, Kotor General Hospital 5 min'
    }
  },
  {
    id: 'piran-sailing-center',
    name: 'Piran Sailing Center',
    country: 'Slovenia',
    countryFlag: '🇸🇮',
    city: 'Piran',
    lat: 45.5283,
    lng: 13.5681,
    website: 'https://www.piransailing.si',
    contact: '+386 5 673 4567',
    contactEmail: 'info@piransailing.si',
    description: 'Sail the northern Adriatic from Slovenia\'s beautiful Venetian-style coastal town of Piran. Enjoy warm Mediterranean waters with views of the Julian Alps and easy access to Italian and Croatian sailing waters.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 100, description: 'Piran town beach 100m from marina, Fiesa Bay swimming cove nearby' },
    priceRange: { from: 700, to: 1600, unit: 'week', display: '€700 - €1,600/week' },
    socialMedia: { instagram: '@piransailing', facebook: 'https://facebook.com/piransailing', twitter: '@piransail' },
    climate: 'piran',
    facilities: 'Marina Portorož with 650 berths, fleet of 25+ boats (Laser, 420, First 25, Elan cruisers), Gulf of Trieste race course, sailing simulator, modern clubhouse with weather station',
    courtSurfaces: ['Dinghy', 'Keelboat', 'Catamaran', 'Windsurf'],
    programs: [
      { name: 'Gulf of Trieste Sailing', price: '€1,100/week', desc: 'Keelboat sailing across the Gulf of Trieste with visits to Italian and Croatian coastal towns' },
      { name: 'Adriatic Dinghy Course', price: '€750/week', desc: 'Learn to sail in the sheltered waters off Piran with Bora and Maestral wind training' },
      { name: 'Three-Country Cruise', price: '€1,400/week', desc: 'Multi-day sailing adventure visiting Slovenia, Italy, and Croatia along the northern Adriatic coast' }
    ],
    coaches: [
      { name: 'Matej Kovačič', credential: 'Slovenian Sailing Federation A License', background: 'Former Slovenian national sailing champion, Adriatic regatta specialist, 15 years of coastal instruction', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Slovenian', 'English', 'Italian', 'Croatian'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=800'],
    upcomingCamps: [
      { name: 'Summer Adriatic Camp', startDate: '2026-07-13', endDate: '2026-07-20', price: '€1,100', level: 'All Levels' },
      { name: 'Spring Dinghy Course', startDate: '2026-04-27', endDate: '2026-05-04', price: '€750', level: 'Beginner' },
      { name: 'Autumn Three-Country Cruise', startDate: '2026-09-21', endDate: '2026-09-28', price: '€1,400', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Hotel Tartini Piran', pricePerWeek: 480, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Portorož Marina Apartment', pricePerWeek: 350, maxOccupancy: 3, bathType: 'ensuite', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Charming medieval Piran town on Tartini Square. Portorož resort area nearby with spa facilities.'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-04-27',
      spotsLeft: 12,
      responseTime: '24h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 8,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Local Piran school partnerships',
      medicalStaff: true,
      safeguarding: 'Slovenian Sailing Federation child protection, police-checked coaches',
      airportPickup: true,
      mealPlan: 'Full board with Istrian Mediterranean cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Slovenian', 'Italian'],
      emergencyProtocol: 'Slovenian Maritime Administration coordination, Izola General Hospital 10 min'
    }
  },
  {
    id: 'masuria-sailing-academy',
    name: 'Masuria Sailing Academy',
    country: 'Poland',
    countryFlag: '🇵🇱',
    city: 'Giżycko',
    lat: 54.0382,
    lng: 21.7647,
    website: 'https://www.masuriasailing.pl',
    contact: '+48 87 428 1234',
    contactEmail: 'info@masuriasailing.pl',
    description: 'Sail the Masurian Great Lakes, Poland\'s inland sailing paradise known as the "Land of a Thousand Lakes." Perfect flat-water conditions on interconnected lakes with lush forests and abundant wildlife.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 0, description: 'Marina on Lake Niegocin with direct access to Masurian lake system' },
    priceRange: { from: 600, to: 1400, unit: 'week', display: '€600 - €1,400/week' },
    socialMedia: { instagram: '@masuriasailing', facebook: 'https://facebook.com/masuriasailing', twitter: '@masuriasail' },
    climate: 'masuria',
    facilities: 'Giżycko Ekomarina with 200 berths, fleet of 35+ boats (Laser, Omega, Tango, Phobos keelboats), lake race course, sailing simulator, modern clubhouse with weather station and lecture room',
    courtSurfaces: ['Dinghy', 'Keelboat', 'Catamaran'],
    programs: [
      { name: 'Great Lakes Cruising', price: '€1,000/week', desc: 'Multi-day keelboat cruise across the interconnected Masurian lakes visiting lakeside villages and nature reserves' },
      { name: 'Lake Sailing Fundamentals', price: '€650/week', desc: 'Learn to sail on calm lake waters with consistent thermal winds and sheltered bays' },
      { name: 'Regatta Racing Camp', price: '€1,200/week', desc: 'Competitive sailing preparation for the legendary Giżycko regatta on Lake Niegocin' }
    ],
    coaches: [
      { name: 'Tomasz Wiśniewski', credential: 'Polish Sailing Association Instructor Level III', background: 'Former Polish national dinghy champion, Masurian lakes specialist with 18 years of teaching experience', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Polish', 'English', 'German'], instagram: null },
      { name: 'Karolina Nowak', credential: 'World Sailing Level 2 Coach', background: 'Youth sailing development specialist, multiple national youth championship titles, Polish Sailing Association certified', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Polish', 'English'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=800', 'https://images.unsplash.com/photo-1534854638093-bada1813ca19?w=800'],
    upcomingCamps: [
      { name: 'Summer Lakes Camp', startDate: '2026-07-06', endDate: '2026-07-13', price: '€1,000', level: 'All Levels' },
      { name: 'Spring Dinghy Course', startDate: '2026-05-18', endDate: '2026-05-25', price: '€650', level: 'Beginner' },
      { name: 'Autumn Regatta Prep', startDate: '2026-09-07', endDate: '2026-09-14', price: '€1,200', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Giżycko Lakeside Hotel', pricePerWeek: 350, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Masuria Lake Apartment', pricePerWeek: 220, maxOccupancy: 3, bathType: 'ensuite', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Charming Giżycko town on the isthmus between lakes. Excellent value with Polish hospitality and cuisine.'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-05-18',
      spotsLeft: 20,
      responseTime: '24h',
      privateLessons: true,
      yearRound: false
    },
    juniorInfo: {
      minAge: 8,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Online schooling support during camps',
      medicalStaff: true,
      safeguarding: 'PZŻ child protection standards, background-checked coaches',
      airportPickup: true,
      mealPlan: 'Full board with Polish cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Polish', 'German'],
      emergencyProtocol: 'WOPR water rescue coordination, Giżycko Hospital 5 min'
    }
  },
  {
    id: 'helsinki-sailing-center',
    name: 'Helsinki Sailing Center',
    country: 'Finland',
    countryFlag: '🇫🇮',
    city: 'Helsinki',
    lat: 60.1699,
    lng: 24.9384,
    website: 'https://www.helsinkisailing.fi',
    contact: '+358 9 123 4567',
    contactEmail: 'info@helsinkisailing.fi',
    description: 'Sail the Finnish Baltic archipelago from Helsinki, with hundreds of islands and skerries to explore. Experience midnight sun sailing in summer and the unique Finnish maritime culture.',
    ageGroups: ['Junior', 'Adult', 'Masters'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 0, description: 'NJK Helsinki marina with direct Baltic archipelago access' },
    priceRange: { from: 900, to: 2200, unit: 'week', display: '€900 - €2,200/week' },
    socialMedia: { instagram: '@helsinkisailing', facebook: 'https://facebook.com/helsinkisailing', twitter: '@helsinkisail' },
    climate: 'helsinki-sailing',
    facilities: 'NJK Helsinki marina with 250 berths, fleet of 35+ boats (Laser, 29er, H-boat, J/70, Swan cruisers), Baltic race course, sailing simulator with virtual regatta, heated clubhouse with sauna, weather station',
    courtSurfaces: ['Dinghy', 'Keelboat', 'Catamaran', 'Windsurf'],
    programs: [
      { name: 'Archipelago Cruising', price: '€1,600/week', desc: 'Multi-day keelboat cruise through the stunning Helsinki archipelago with island harbor stops and sauna evenings' },
      { name: 'Baltic Dinghy Course', price: '€1,000/week', desc: 'Learn to sail in the sheltered island waters with progression to open Baltic sailing' },
      { name: 'Midnight Sun Sailing', price: '€2,000/week', desc: 'Extended summer sailing under the midnight sun with 20+ hours of daylight in the Finnish archipelago' }
    ],
    coaches: [
      { name: 'Mikko Virtanen', credential: 'Finnish Sailing Federation A License', background: 'Former Finnish Olympic sailing team member, Baltic Sea specialist with 20 years of coaching experience', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Finnish', 'English', 'Swedish'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=800'],
    upcomingCamps: [
      { name: 'Midnight Sun Camp', startDate: '2026-06-22', endDate: '2026-06-29', price: '€2,000', level: 'Intermediate' },
      { name: 'Spring Baltic Course', startDate: '2026-05-18', endDate: '2026-05-25', price: '€1,000', level: 'All Levels' },
      { name: 'Summer Archipelago Cruise', startDate: '2026-07-20', endDate: '2026-07-27', price: '€1,600', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Helsinki Marina Hotel', pricePerWeek: 650, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Helsinki Waterfront Apartment', pricePerWeek: 500, maxOccupancy: 3, bathType: 'ensuite', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Helsinki waterfront location with easy access to Design District and Market Square. Sauna included.'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-05-18',
      spotsLeft: 14,
      responseTime: '24h',
      privateLessons: true,
      yearRound: false
    },
    juniorInfo: {
      minAge: 8,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Helsinki International School partnership',
      medicalStaff: true,
      safeguarding: 'Finnish Sailing Federation child protection, police-checked coaches',
      airportPickup: true,
      mealPlan: 'Full board with Finnish cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Finnish', 'Swedish'],
      emergencyProtocol: 'Finnish Border Guard sea rescue coordination, HUS Helsinki Hospital 15 min'
    }
  },
  {
    id: 'tallinn-sailing-academy',
    name: 'Tallinn Sailing Academy',
    country: 'Estonia',
    countryFlag: '🇪🇪',
    city: 'Tallinn',
    lat: 59.4370,
    lng: 24.7536,
    website: 'https://www.tallinnsailing.ee',
    contact: '+372 5 123 4567',
    contactEmail: 'info@tallinnsailing.ee',
    description: 'Train at the 2008 Beijing Olympic sailing venue qualification site in Tallinn Bay. World-class Baltic sailing with steady winds, modern facilities, and the stunning backdrop of Tallinn\'s medieval Old Town.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 0, description: 'Pirita Olympic Sailing Centre with direct Tallinn Bay access' },
    priceRange: { from: 700, to: 1600, unit: 'week', display: '€700 - €1,600/week' },
    socialMedia: { instagram: '@tallinnsailing', facebook: 'https://facebook.com/tallinnsailing', twitter: '@tallinnsail' },
    climate: 'tallinn',
    facilities: 'Pirita Olympic Sailing Centre with 400 berths, fleet of 40+ boats (Laser, 470, 49er, Finn), Olympic-standard race course in Tallinn Bay, sailing simulator, weather station, modern clubhouse',
    courtSurfaces: ['Dinghy', 'Keelboat', 'Catamaran'],
    programs: [
      { name: 'Olympic Venue Training', price: '€1,200/week', desc: 'Train on the Olympic sailing course at Pirita with world-class facilities and Baltic conditions' },
      { name: 'Baltic Dinghy Sailing', price: '€750/week', desc: 'Learn to sail in Tallinn Bay with views of the medieval Old Town and consistent sea breezes' },
      { name: 'Estonian Archipelago Cruise', price: '€1,400/week', desc: 'Multi-day keelboat cruise to Estonian islands including Naissaar and the western archipelago' }
    ],
    coaches: [
      { name: 'Andres Kask', credential: 'Estonian Sailing Federation A License', background: 'Former Estonian national team sailor, Tallinn Bay regatta champion, 16 years of Baltic sailing instruction', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Estonian', 'English', 'Finnish', 'Russian'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=800'],
    upcomingCamps: [
      { name: 'Summer Baltic Camp', startDate: '2026-07-06', endDate: '2026-07-13', price: '€1,200', level: 'All Levels' },
      { name: 'Spring Dinghy Course', startDate: '2026-05-11', endDate: '2026-05-18', price: '€750', level: 'Beginner' },
      { name: 'Autumn Archipelago Cruise', startDate: '2026-09-07', endDate: '2026-09-14', price: '€1,400', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Pirita Marina Hotel', pricePerWeek: 420, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Tallinn Seaside Apartment', pricePerWeek: 300, maxOccupancy: 3, bathType: 'ensuite', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Pirita district with beach promenade. Bus connection to Tallinn Old Town in 15 minutes.'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-05-11',
      spotsLeft: 16,
      responseTime: '24h',
      privateLessons: true,
      yearRound: false
    },
    juniorInfo: {
      minAge: 8,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Tallinn International School partnership',
      medicalStaff: true,
      safeguarding: 'Estonian Sailing Federation child protection, police-checked coaches',
      airportPickup: true,
      mealPlan: 'Full board with Estonian cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Estonian', 'Russian'],
      emergencyProtocol: 'Estonian Maritime Administration coordination, East Tallinn Central Hospital 10 min'
    }
  },
  {
    id: 'valletta-sailing-center',
    name: 'Valletta Sailing Center',
    country: 'Malta',
    countryFlag: '🇲🇹',
    city: 'Valletta',
    lat: 35.8989,
    lng: 14.5146,
    website: 'https://www.vallettasailing.mt',
    contact: '+356 2123 4567',
    contactEmail: 'info@vallettasailing.mt',
    description: 'Sail the crystal-clear Mediterranean waters around Malta from the historic Grand Harbour of Valletta. Year-round sailing with warm temperatures, steady winds, and access to Gozo, Comino, and the Blue Lagoon.',
    ageGroups: ['Junior', 'Adult', 'Masters'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 0, description: 'Grand Harbour Marina with direct Mediterranean access' },
    priceRange: { from: 800, to: 1900, unit: 'week', display: '€800 - €1,900/week' },
    socialMedia: { instagram: '@vallettasailing', facebook: 'https://facebook.com/vallettasailing', twitter: '@vallettasail' },
    climate: 'valletta',
    facilities: 'Grand Harbour Marina with 300 berths, fleet of 30+ boats (Laser, 420, J/70, Bavaria cruisers), Mediterranean race course, sailing simulator, historic waterfront clubhouse, weather station',
    courtSurfaces: ['Dinghy', 'Keelboat', 'Catamaran', 'Windsurf'],
    programs: [
      { name: 'Maltese Islands Cruise', price: '€1,500/week', desc: 'Multi-day keelboat cruise around Malta, Gozo, and Comino including the famous Blue Lagoon anchorage' },
      { name: 'Grand Harbour Dinghy Course', price: '€850/week', desc: 'Learn to sail in the sheltered Grand Harbour with progression to open Mediterranean waters' },
      { name: 'Rolex Middle Sea Race Prep', price: '€1,800/week', desc: 'Advanced offshore racing preparation for the prestigious Rolex Middle Sea Race around Sicily' }
    ],
    coaches: [
      { name: 'Joseph Camilleri', credential: 'Malta Sailing Federation Senior Instructor', background: 'Former Maltese national sailing team member, Rolex Middle Sea Race veteran, 20 years of Mediterranean instruction', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Maltese', 'English', 'Italian'], instagram: null },
      { name: 'Maria Borg', credential: 'World Sailing Level 2 Coach', background: 'Youth sailing development specialist, former Laser Radial national champion, ISA certified instructor', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Maltese', 'English'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=800', 'https://images.unsplash.com/photo-1534854638093-bada1813ca19?w=800'],
    upcomingCamps: [
      { name: 'Summer Mediterranean Camp', startDate: '2026-07-06', endDate: '2026-07-13', price: '€1,500', level: 'Intermediate' },
      { name: 'Spring Dinghy Course', startDate: '2026-04-13', endDate: '2026-04-20', price: '€850', level: 'All Levels' },
      { name: 'Autumn Middle Sea Race Prep', startDate: '2026-09-21', endDate: '2026-09-28', price: '€1,800', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Grand Harbour Hotel', pricePerWeek: 520, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Valletta Waterfront Apartment', pricePerWeek: 380, maxOccupancy: 3, bathType: 'ensuite', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'UNESCO World Heritage Valletta with stunning baroque architecture. Year-round mild climate for sailing.'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-04-13',
      spotsLeft: 18,
      responseTime: '24h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 8,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Verdala International School partnership',
      medicalStaff: true,
      safeguarding: 'Malta Sailing Federation child protection, police-checked coaches',
      airportPickup: true,
      mealPlan: 'Full board with Maltese Mediterranean cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Maltese', 'Italian'],
      emergencyProtocol: 'Armed Forces of Malta Maritime Squadron coordination, Mater Dei Hospital 15 min'
    }
  },
  {
    id: 'royal-irish-yacht-club-academy',
    name: 'Royal Irish Yacht Club Academy',
    country: 'Ireland',
    countryFlag: '🇮🇪',
    city: 'Dún Laoghaire',
    lat: 53.2945,
    lng: -6.1344,
    website: 'https://www.riyc.ie',
    contact: '+353 1 280 1811',
    contactEmail: 'academy@riyc.ie',
    description: 'Historic yacht club academy in Dún Laoghaire Harbour, one of Ireland\'s premier sailing venues. Train on Dublin Bay with consistent Atlantic winds and access to world-class racing.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 1, description: 'Sandycove and Seapoint beaches within walking distance' },
    priceRange: { from: 800, to: 2000, unit: 'week', display: '€800 - €2,000/week' },
    socialMedia: { instagram: '@riycsailing', facebook: 'https://facebook.com/riycsailing', twitter: '@riycsailing' },
    climate: 'dun-laoghaire',
    facilities: 'Full-service marina, fleet of 30+ boats (Laser, 420, SB20, J/80), race course on Dublin Bay, sailing simulator, weather station, sail loft and rigging workshop',
    courtSurfaces: ['Dinghy', 'Keelboat', 'Catamaran', 'Windsurf'],
    programs: [
      { name: 'Dublin Bay Racing Programme', price: '€1,400/week', desc: 'Competitive racing on Dublin Bay with experienced race coaches and regatta preparation' },
      { name: 'Youth Dinghy Academy', price: '€900/week', desc: 'Progressive dinghy sailing for juniors in Optimist, Laser, and 420 classes' },
      { name: 'Coastal Cruising Course', price: '€1,600/week', desc: 'Offshore sailing skills with navigation, passage planning, and Irish Sea cruising' }
    ],
    coaches: [
      { name: 'Conor O\'Brien', credential: 'World Sailing Level 3 Coach', background: 'Former Irish Olympic sailing team member with 18 years of competitive coaching experience', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Irish'], instagram: null },
      { name: 'Sinéad Murphy', credential: 'Irish Sailing Association Senior Instructor', background: 'National 420 champion and specialist in youth sailing development across Ireland', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Irish'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=800', 'https://images.unsplash.com/photo-1534854638093-bada1813ca19?w=800'],
    upcomingCamps: [
      { name: 'Summer Dublin Bay Camp', startDate: '2026-07-06', endDate: '2026-07-13', price: '€1,400', level: 'Intermediate' },
      { name: 'Spring Youth Dinghy Week', startDate: '2026-04-13', endDate: '2026-04-20', price: '€900', level: 'All Levels' },
      { name: 'Autumn Coastal Sailing', startDate: '2026-10-05', endDate: '2026-10-12', price: '€1,600', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Dún Laoghaire Harbour Hotel', pricePerWeek: 550, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Waterfront Apartment', pricePerWeek: 420, maxOccupancy: 3, bathType: 'ensuite', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Harbour-side accommodation with direct marina access. Equipment storage included for all participants.'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-04-13',
      spotsLeft: 18,
      responseTime: '24h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 8,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Local international school partnerships in Dublin',
      medicalStaff: true,
      safeguarding: 'Irish Sailing Association child protection, Garda-vetted coaches',
      airportPickup: true,
      mealPlan: 'Full board with Irish and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Irish'],
      emergencyProtocol: 'Irish Coast Guard coordination, St Vincent\'s Hospital 15 min'
    }
  }
];

const CLIMATE_DATA = {
  athens: { spring: { tempHigh: 21, tempLow: 11, rainDays: 5, sunshine: 9 }, summer: { tempHigh: 33, tempLow: 22, rainDays: 1, sunshine: 12 }, autumn: { tempHigh: 23, tempLow: 14, rainDays: 5, sunshine: 8 }, winter: { tempHigh: 13, tempLow: 5, rainDays: 8, sunshine: 4 } },
  thessaloniki: { spring: { tempHigh: 19, tempLow: 8, rainDays: 7, sunshine: 7 }, summer: { tempHigh: 32, tempLow: 19, rainDays: 3, sunshine: 11 }, autumn: { tempHigh: 20, tempLow: 10, rainDays: 6, sunshine: 6 }, winter: { tempHigh: 10, tempLow: 2, rainDays: 8, sunshine: 3 } },
  split: { spring: { tempHigh: 19, tempLow: 10, rainDays: 7, sunshine: 8 }, summer: { tempHigh: 30, tempLow: 20, rainDays: 3, sunshine: 11 }, autumn: { tempHigh: 20, tempLow: 12, rainDays: 8, sunshine: 6 }, winter: { tempHigh: 12, tempLow: 5, rainDays: 9, sunshine: 4 } },
  dubrovnik: { spring: { tempHigh: 19, tempLow: 11, rainDays: 8, sunshine: 7 }, summer: { tempHigh: 30, tempLow: 21, rainDays: 2, sunshine: 11 }, autumn: { tempHigh: 21, tempLow: 13, rainDays: 8, sunshine: 6 }, winter: { tempHigh: 13, tempLow: 6, rainDays: 10, sunshine: 4 } },
  palma: { spring: { tempHigh: 21, tempLow: 11, rainDays: 5, sunshine: 8 }, summer: { tempHigh: 31, tempLow: 21, rainDays: 1, sunshine: 11 }, autumn: { tempHigh: 22, tempLow: 13, rainDays: 7, sunshine: 7 }, winter: { tempHigh: 15, tempLow: 6, rainDays: 6, sunshine: 5 } },
  valencia: { spring: { tempHigh: 21, tempLow: 11, rainDays: 4, sunshine: 8 }, summer: { tempHigh: 30, tempLow: 21, rainDays: 1, sunshine: 11 }, autumn: { tempHigh: 22, tempLow: 13, rainDays: 5, sunshine: 7 }, winter: { tempHigh: 16, tempLow: 7, rainDays: 4, sunshine: 6 } },
  'la-rochelle': { spring: { tempHigh: 16, tempLow: 8, rainDays: 9, sunshine: 7 }, summer: { tempHigh: 24, tempLow: 16, rainDays: 6, sunshine: 9 }, autumn: { tempHigh: 17, tempLow: 10, rainDays: 10, sunshine: 5 }, winter: { tempHigh: 10, tempLow: 4, rainDays: 11, sunshine: 3 } },
  marseille: { spring: { tempHigh: 18, tempLow: 9, rainDays: 5, sunshine: 8 }, summer: { tempHigh: 29, tempLow: 19, rainDays: 2, sunshine: 11 }, autumn: { tempHigh: 19, tempLow: 11, rainDays: 6, sunshine: 7 }, winter: { tempHigh: 12, tempLow: 4, rainDays: 5, sunshine: 5 } },
  sardinia: { spring: { tempHigh: 19, tempLow: 10, rainDays: 5, sunshine: 8 }, summer: { tempHigh: 30, tempLow: 20, rainDays: 1, sunshine: 11 }, autumn: { tempHigh: 22, tempLow: 13, rainDays: 6, sunshine: 7 }, winter: { tempHigh: 14, tempLow: 6, rainDays: 7, sunshine: 4 } },
  cowes: { spring: { tempHigh: 13, tempLow: 6, rainDays: 9, sunshine: 6 }, summer: { tempHigh: 21, tempLow: 14, rainDays: 7, sunshine: 8 }, autumn: { tempHigh: 15, tempLow: 9, rainDays: 10, sunshine: 4 }, winter: { tempHigh: 9, tempLow: 3, rainDays: 12, sunshine: 2 } },
  cascais: { spring: { tempHigh: 19, tempLow: 12, rainDays: 7, sunshine: 8 }, summer: { tempHigh: 27, tempLow: 18, rainDays: 1, sunshine: 11 }, autumn: { tempHigh: 20, tempLow: 14, rainDays: 7, sunshine: 7 }, winter: { tempHigh: 15, tempLow: 9, rainDays: 9, sunshine: 5 } },
  bodrum: { spring: { tempHigh: 22, tempLow: 12, rainDays: 4, sunshine: 9 }, summer: { tempHigh: 34, tempLow: 23, rainDays: 0, sunshine: 13 }, autumn: { tempHigh: 24, tempLow: 15, rainDays: 3, sunshine: 8 }, winter: { tempHigh: 15, tempLow: 7, rainDays: 9, sunshine: 5 } },
  ijsselmeer: { spring: { tempHigh: 13, tempLow: 4, rainDays: 9, sunshine: 6 }, summer: { tempHigh: 22, tempLow: 13, rainDays: 8, sunshine: 7 }, autumn: { tempHigh: 14, tempLow: 7, rainDays: 11, sunshine: 4 }, winter: { tempHigh: 6, tempLow: 1, rainDays: 12, sunshine: 2 } },
  kiel: { spring: { tempHigh: 11, tempLow: 3, rainDays: 8, sunshine: 6 }, summer: { tempHigh: 22, tempLow: 13, rainDays: 9, sunshine: 8 }, autumn: { tempHigh: 13, tempLow: 6, rainDays: 10, sunshine: 4 }, winter: { tempHigh: 4, tempLow: -1, rainDays: 11, sunshine: 1 } },
  'copenhagen-sailing': { spring: { tempHigh: 12, tempLow: 3, rainDays: 7, sunshine: 7 }, summer: { tempHigh: 22, tempLow: 14, rainDays: 8, sunshine: 8 }, autumn: { tempHigh: 13, tempLow: 6, rainDays: 10, sunshine: 4 }, winter: { tempHigh: 4, tempLow: -1, rainDays: 10, sunshine: 1 } },
  'gothenburg-sailing': { spring: { tempHigh: 12, tempLow: 3, rainDays: 8, sunshine: 6 }, summer: { tempHigh: 22, tempLow: 13, rainDays: 9, sunshine: 8 }, autumn: { tempHigh: 12, tempLow: 5, rainDays: 11, sunshine: 3 }, winter: { tempHigh: 4, tempLow: -1, rainDays: 13, sunshine: 1 } },
  'oslo-sailing': { spring: { tempHigh: 11, tempLow: 2, rainDays: 7, sunshine: 6 }, summer: { tempHigh: 22, tempLow: 13, rainDays: 9, sunshine: 8 }, autumn: { tempHigh: 11, tempLow: 4, rainDays: 10, sunshine: 3 }, winter: { tempHigh: 1, tempLow: -5, rainDays: 9, sunshine: 1 } },
  'dun-laoghaire': { spring: { tempHigh: 12, tempLow: 5, rainDays: 10, sunshine: 5 }, summer: { tempHigh: 19, tempLow: 12, rainDays: 9, sunshine: 6 }, autumn: { tempHigh: 14, tempLow: 8, rainDays: 11, sunshine: 3 }, winter: { tempHigh: 9, tempLow: 3, rainDays: 13, sunshine: 2 } },
  kotor: { spring: { tempHigh: 19, tempLow: 10, rainDays: 9, sunshine: 7 }, summer: { tempHigh: 31, tempLow: 20, rainDays: 3, sunshine: 11 }, autumn: { tempHigh: 21, tempLow: 12, rainDays: 10, sunshine: 6 }, winter: { tempHigh: 12, tempLow: 4, rainDays: 12, sunshine: 3 } },
  piran: { spring: { tempHigh: 17, tempLow: 9, rainDays: 7, sunshine: 7 }, summer: { tempHigh: 28, tempLow: 19, rainDays: 4, sunshine: 10 }, autumn: { tempHigh: 19, tempLow: 11, rainDays: 8, sunshine: 5 }, winter: { tempHigh: 9, tempLow: 2, rainDays: 7, sunshine: 3 } },
  masuria: { spring: { tempHigh: 13, tempLow: 3, rainDays: 7, sunshine: 6 }, summer: { tempHigh: 23, tempLow: 13, rainDays: 9, sunshine: 8 }, autumn: { tempHigh: 12, tempLow: 4, rainDays: 8, sunshine: 4 }, winter: { tempHigh: 1, tempLow: -6, rainDays: 8, sunshine: 1 } },
  'helsinki-sailing': { spring: { tempHigh: 10, tempLow: 1, rainDays: 7, sunshine: 7 }, summer: { tempHigh: 22, tempLow: 13, rainDays: 8, sunshine: 10 }, autumn: { tempHigh: 10, tempLow: 3, rainDays: 10, sunshine: 3 }, winter: { tempHigh: -1, tempLow: -7, rainDays: 9, sunshine: 1 } },
  tallinn: { spring: { tempHigh: 10, tempLow: 1, rainDays: 7, sunshine: 7 }, summer: { tempHigh: 22, tempLow: 13, rainDays: 8, sunshine: 10 }, autumn: { tempHigh: 10, tempLow: 3, rainDays: 10, sunshine: 3 }, winter: { tempHigh: -1, tempLow: -5, rainDays: 10, sunshine: 1 } },
  valletta: { spring: { tempHigh: 20, tempLow: 12, rainDays: 3, sunshine: 9 }, summer: { tempHigh: 32, tempLow: 22, rainDays: 0, sunshine: 12 }, autumn: { tempHigh: 24, tempLow: 16, rainDays: 5, sunshine: 7 }, winter: { tempHigh: 16, tempLow: 10, rainDays: 8, sunshine: 5 } }
};

const NEWS_ITEMS = [
  { date: '2025-06-01', title: 'Marseille Olympic Venue Opens for Training', summary: 'The 2024 Paris Olympic sailing venue in Marseille is now fully open for public training camps with Olympic-standard facilities.' },
  { date: '2025-05-15', title: 'Palma Regatta Season Kicks Off', summary: 'Palma de Mallorca Sailing Academy hosts pre-season regatta training ahead of the Trofeo Princesa Sofía and Copa del Rey.' },
  { date: '2025-05-01', title: 'Cowes Week 2025 Registration Opens', summary: 'Cowes Sailing Academy launches preparation camps for the world\'s oldest and most prestigious sailing regatta.' },
  { date: '2025-04-20', title: 'Croatia Flotilla Sailing Expanded', summary: 'Split and Dubrovnik sailing schools launch joint flotilla program covering the full Dalmatian coast.' },
  { date: '2025-04-10', title: 'Cascais Windsurf Center Upgraded', summary: 'New windsurf equipment fleet added at Cascais including latest foil boards for advanced riders at Guincho beach.' }
];

const COUNTRIES = ['Greece', 'Croatia', 'Spain', 'France', 'Italy', 'UK', 'Portugal', 'Turkey', 'Netherlands', 'Germany', 'Denmark', 'Sweden', 'Norway', 'Ireland', 'Montenegro', 'Slovenia', 'Poland', 'Finland', 'Estonia', 'Malta'];
