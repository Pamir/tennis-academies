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
  bodrum: { spring: { tempHigh: 22, tempLow: 12, rainDays: 4, sunshine: 9 }, summer: { tempHigh: 34, tempLow: 23, rainDays: 0, sunshine: 13 }, autumn: { tempHigh: 24, tempLow: 15, rainDays: 3, sunshine: 8 }, winter: { tempHigh: 15, tempLow: 7, rainDays: 9, sunshine: 5 } }
};

const NEWS_ITEMS = [
  { date: '2025-06-01', title: 'Marseille Olympic Venue Opens for Training', summary: 'The 2024 Paris Olympic sailing venue in Marseille is now fully open for public training camps with Olympic-standard facilities.' },
  { date: '2025-05-15', title: 'Palma Regatta Season Kicks Off', summary: 'Palma de Mallorca Sailing Academy hosts pre-season regatta training ahead of the Trofeo Princesa Sofía and Copa del Rey.' },
  { date: '2025-05-01', title: 'Cowes Week 2025 Registration Opens', summary: 'Cowes Sailing Academy launches preparation camps for the world\'s oldest and most prestigious sailing regatta.' },
  { date: '2025-04-20', title: 'Croatia Flotilla Sailing Expanded', summary: 'Split and Dubrovnik sailing schools launch joint flotilla program covering the full Dalmatian coast.' },
  { date: '2025-04-10', title: 'Cascais Windsurf Center Upgraded', summary: 'New windsurf equipment fleet added at Cascais including latest foil boards for advanced riders at Guincho beach.' }
];

const COUNTRIES = ['Greece', 'Croatia', 'Spain', 'France', 'Italy', 'UK', 'Portugal', 'Turkey'];
