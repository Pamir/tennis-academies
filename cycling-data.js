const SPORT_TYPE = 'cycling';

const ACADEMIES = [
  {
    id: 'mallorca-cycling-center',
    name: 'Mallorca Cycling Center',
    country: 'Spain',
    countryFlag: '🇪🇸',
    city: 'Mallorca',
    lat: 39.6953,
    lng: 2.9147,
    website: 'https://www.mallorcacyclingcenter.com',
    contact: '+34 971 234 567',
    contactEmail: 'info@mallorcacyclingcenter.com',
    description: 'Premier cycling academy on the island of Mallorca, offering world-class road cycling training along the stunning Serra de Tramuntana mountain range with year-round Mediterranean climate.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 3, description: 'Mediterranean beaches within easy reach of training base' },
    priceRange: { from: 900, to: 2200, unit: 'week', display: '€900 - €2,200/week' },
    socialMedia: { instagram: '@mallorcacycling', facebook: 'https://facebook.com/mallorcacyclingcenter', twitter: '@mallorcacycle' },
    climate: 'mallorca',
    facilities: 'Full velodrome, bike fitting lab with Retül system, wind tunnel testing, altitude simulation rooms, professional bike workshop, video analysis studio, recovery center with ice baths',
    courtSurfaces: ['Road cycling', 'Time trial', 'Climbing', 'Criterium'],
    programs: [
      { name: 'Road Cycling Intensive', price: '€1,200/week', desc: 'Daily guided rides through Serra de Tramuntana, interval training, and technique sessions' },
      { name: 'Climbing Camp', price: '€1,500/week', desc: 'Focus on mountain stages, Sa Calobra and Puig Major climbs, power-to-weight optimization' },
      { name: 'Time Trial Specialist', price: '€1,800/week', desc: 'Aerodynamics testing, TT bike fitting, pacing strategies, wind tunnel sessions' }
    ],
    coaches: [
      { name: 'Miguel Ángel Torres', credential: 'UCI Level 3 Coach', background: 'Former professional cyclist with Movistar Team development squad, 15 years coaching experience', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Spanish', 'English', 'German'], instagram: null },
      { name: 'Laura Fernández', credential: 'Spanish Cycling Federation A License', background: 'Sports science PhD, specializing in cycling biomechanics and performance optimization', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Spanish', 'English'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=800', 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800'],
    upcomingCamps: [
      { name: 'Summer Climbing Camp', startDate: '2025-07-01', endDate: '2025-07-08', price: '€1,500', level: 'Advanced' },
      { name: 'Spring Road Camp', startDate: '2025-04-14', endDate: '2025-04-21', price: '€1,200', level: 'Intermediate' },
      { name: 'Autumn Endurance Block', startDate: '2025-10-06', endDate: '2025-10-13', price: '€1,100', level: 'All Levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Partner Hotel Single Room', pricePerWeek: 600, maxOccupancy: 1, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Shared Cyclist Villa', pricePerWeek: 350, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Secure bike storage with individual racks. Nutrition plan included with all accommodation packages.'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-01',
      spotsLeft: 15,
      responseTime: '24h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 14,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Online schooling support available',
      medicalStaff: true,
      safeguarding: 'DBS-checked staff, safeguarding officer on-site',
      airportPickup: true,
      mealPlan: 'Full board with cyclist-specific nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Spanish', 'German'],
      emergencyProtocol: '24/7 emergency line, on-site first aid, hospital 15 min away'
    }
  },
  {
    id: 'girona-cycling-hub',
    name: 'Girona Cycling Hub',
    country: 'Spain',
    countryFlag: '🇪🇸',
    city: 'Girona',
    lat: 41.9794,
    lng: 2.8214,
    website: 'https://www.gironacyclinghub.com',
    contact: '+34 972 345 678',
    contactEmail: 'info@gironacyclinghub.com',
    description: 'Located in the cycling capital of Europe, Girona Cycling Hub provides professional-level training in the same roads used by WorldTour professionals who call Girona home.',
    ageGroups: ['Junior', 'Adult', 'Masters'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 35, description: 'Costa Brava beaches 35 km east of Girona' },
    priceRange: { from: 1000, to: 2500, unit: 'week', display: '€1,000 - €2,500/week' },
    socialMedia: { instagram: '@gironacycling', facebook: 'https://facebook.com/gironacyclinghub', twitter: '@gironacycle' },
    climate: 'girona',
    facilities: 'Indoor velodrome, bike fitting lab, altitude rooms, professional bike workshop, video analysis suite, strength and conditioning gym, recovery pool',
    courtSurfaces: ['Road cycling', 'Time trial', 'Climbing', 'Criterium'],
    programs: [
      { name: 'Pro Experience Camp', price: '€1,500/week', desc: 'Train on the same roads as WorldTour pros, group rides, structured intervals' },
      { name: 'Gravel & Road Combo', price: '€1,300/week', desc: 'Mix of road and gravel riding exploring Catalonia back roads' },
      { name: 'Performance Testing', price: '€2,000/week', desc: 'Full physiological testing, bike fit, training plan development' }
    ],
    coaches: [
      { name: 'Carlos Verona', credential: 'UCI Level 2 Coach', background: 'Former Continental team rider, now full-time coach specializing in endurance training', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Spanish', 'English', 'Catalan'], instagram: null },
      { name: 'Emma Johansson', credential: 'Swedish Cycling Federation Coach', background: 'Former professional cyclist, Olympic silver medalist coach', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Swedish', 'Spanish'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800', 'https://images.unsplash.com/photo-1571188654248-7a89213915f7?w=800'],
    upcomingCamps: [
      { name: 'Pro Roads Camp', startDate: '2025-07-07', endDate: '2025-07-14', price: '€1,500', level: 'Advanced' },
      { name: 'Spring Base Miles', startDate: '2025-03-17', endDate: '2025-03-24', price: '€1,000', level: 'All Levels' },
      { name: 'Autumn Gran Fondo Prep', startDate: '2025-09-15', endDate: '2025-09-22', price: '€1,200', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Boutique Cyclist Hotel', pricePerWeek: 700, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Self-Catering Apartment', pricePerWeek: 400, maxOccupancy: 3, bathType: 'ensuite', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'All accommodations include secure bike storage and basic maintenance tools.'
    },
    availability: {
      status: 'limited',
      nextIntake: '2025-06-15',
      spotsLeft: 8,
      responseTime: '48h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 15,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Partner international school in Girona',
      medicalStaff: true,
      safeguarding: 'Full safeguarding policy, background-checked coaches',
      airportPickup: true,
      mealPlan: 'Full board with performance nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Spanish', 'Catalan'],
      emergencyProtocol: 'On-call medical team, nearest hospital 10 min drive'
    }
  },
  {
    id: 'nice-riviera-cycling',
    name: 'Nice Riviera Cycling Academy',
    country: 'France',
    countryFlag: '🇫🇷',
    city: 'Nice',
    lat: 43.7102,
    lng: 7.2620,
    website: 'https://www.nicerivieracycling.com',
    contact: '+33 4 93 456 789',
    contactEmail: 'contact@nicerivieracycling.com',
    description: 'Train on the legendary Col de la Madone and the roads of the Côte d\'Azur. Nice offers the perfect blend of coastal flat routes and challenging Alpine climbs for all cycling disciplines.',
    ageGroups: ['Adult', 'Masters'],
    level: 'Intermediate to Advanced',
    individualLessons: true,
    boarding: true,
    beach: { distance: 1, description: 'Promenade des Anglais beach directly accessible from training base' },
    priceRange: { from: 1200, to: 2800, unit: 'week', display: '€1,200 - €2,800/week' },
    socialMedia: { instagram: '@nicerivieracycling', facebook: 'https://facebook.com/nicerivieracycling', twitter: '@nicecycling' },
    climate: 'nice',
    facilities: 'Covered velodrome, wind tunnel access at nearby university, bike fitting lab, altitude simulation rooms, video analysis, full bike workshop with Shimano and SRAM service center',
    courtSurfaces: ['Road cycling', 'Time trial', 'Climbing', 'Criterium'],
    programs: [
      { name: 'Col Hunters Camp', price: '€1,800/week', desc: 'Daily ascents of iconic cols including Col de la Madone, Col de Turini, Col d\'Èze' },
      { name: 'Côte d\'Azur Classic', price: '€1,400/week', desc: 'Mixed terrain riding along the French Riviera with coastal and mountain routes' },
      { name: 'Race Preparation', price: '€2,200/week', desc: 'Race simulation, tactics, team riding, sprint and climbing intervals' }
    ],
    coaches: [
      { name: 'Jean-Pierre Moreau', credential: 'FFC Brevet d\'État 2ème degré', background: 'Former directeur sportif for FDJ development team, 20 years in professional cycling', atpWta: false, bestRanking: null, rankingNote: null, languages: ['French', 'English', 'Italian'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?w=800'],
    upcomingCamps: [
      { name: 'Summer Alpine Camp', startDate: '2025-07-14', endDate: '2025-07-21', price: '€1,800', level: 'Advanced' },
      { name: 'Spring Riviera Tour', startDate: '2025-04-07', endDate: '2025-04-14', price: '€1,400', level: 'Intermediate' },
      { name: 'Pre-Season Base Camp', startDate: '2025-02-10', endDate: '2025-02-17', price: '€1,200', level: 'All Levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Riviera Hotel Room', pricePerWeek: 800, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Cyclist Apartment Nice', pricePerWeek: 550, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: false,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Bike storage with washing station. Airport transfers from Nice Côte d\'Azur included.'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-05-01',
      spotsLeft: 12,
      responseTime: '24h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 16,
      maxAge: 18,
      supervision: 'During training hours',
      guardianStay: true,
      schooling: 'Not provided — adult-focused academy',
      medicalStaff: true,
      safeguarding: 'French federation safeguarding standards applied',
      airportPickup: true,
      mealPlan: 'Half board with sports nutrition guidance',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'French'],
      emergencyProtocol: 'On-site first aid, CHU Nice hospital 10 min away'
    }
  },
  {
    id: 'pyrenees-altitude-cycling',
    name: 'Pyrenees Altitude Cycling Center',
    country: 'France',
    countryFlag: '🇫🇷',
    city: 'Pyrenees',
    lat: 42.8721,
    lng: 0.1218,
    website: 'https://www.pyreneescycling.fr',
    contact: '+33 5 62 345 678',
    contactEmail: 'info@pyreneescycling.fr',
    description: 'High-altitude training center in the heart of the Pyrenees, offering access to legendary Tour de France climbs including Col du Tourmalet, Hautacam, and Col d\'Aubisque.',
    ageGroups: ['Junior', 'Adult'],
    level: 'Intermediate to Advanced',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Mountain location — nearest coast approximately 200 km to Biarritz' },
    priceRange: { from: 800, to: 2000, unit: 'week', display: '€800 - €2,000/week' },
    socialMedia: { instagram: '@pyreneescycling', facebook: 'https://facebook.com/pyreneescycling', twitter: '@pyrcycling' },
    climate: 'pyrenees',
    facilities: 'Indoor velodrome, altitude training rooms at 2,000m simulation, bike fitting lab, video analysis, bike workshop, strength training gym, recovery sauna and cold plunge',
    courtSurfaces: ['Road cycling', 'Climbing', 'Time trial', 'Criterium'],
    programs: [
      { name: 'Tour Legends Camp', price: '€1,200/week', desc: 'Ride the iconic Tour de France climbs with expert guides and structured training' },
      { name: 'Altitude Training Block', price: '€1,600/week', desc: 'Structured altitude training with physiological monitoring and blood testing' },
      { name: 'Climbing Mastery', price: '€1,000/week', desc: 'Technique, pacing, and nutrition strategies for long mountain stages' }
    ],
    coaches: [
      { name: 'Pierre Latour', credential: 'FFC Brevet d\'État', background: 'Former professional climber, specialist in altitude training methodology', atpWta: false, bestRanking: null, rankingNote: null, languages: ['French', 'English', 'Spanish'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800'],
    upcomingCamps: [
      { name: 'Tourmalet Challenge', startDate: '2025-07-07', endDate: '2025-07-14', price: '€1,200', level: 'Advanced' },
      { name: 'Early Season Altitude', startDate: '2025-05-12', endDate: '2025-05-19', price: '€1,000', level: 'Intermediate' },
      { name: 'Autumn Mountain Camp', startDate: '2025-09-22', endDate: '2025-09-29', price: '€900', level: 'All Levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Mountain Lodge', pricePerWeek: 500, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Mountain lodge with panoramic views. Heated bike storage and workshop access included.'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-05-12',
      spotsLeft: 18,
      responseTime: '48h',
      privateLessons: true,
      yearRound: false
    },
    juniorInfo: {
      minAge: 14,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Online schooling support during camp periods',
      medicalStaff: true,
      safeguarding: 'FFC safeguarding policies, vetted staff',
      airportPickup: true,
      mealPlan: 'Full board with altitude-specific nutrition plan',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'French', 'Spanish'],
      emergencyProtocol: 'Mountain rescue coordination, first aid station, hospital in Lourdes 30 min'
    }
  },
  {
    id: 'tuscany-cycling-academy',
    name: 'Tuscany Cycling Academy',
    country: 'Italy',
    countryFlag: '🇮🇹',
    city: 'Tuscany',
    lat: 43.3188,
    lng: 11.3308,
    website: 'https://www.tuscanycycling.it',
    contact: '+39 0577 234 567',
    contactEmail: 'info@tuscanycycling.it',
    description: 'Experience the rolling hills of Tuscany on the legendary Strade Bianche white gravel roads. Training center near Siena offering both road and gravel cycling programs in stunning Italian countryside.',
    ageGroups: ['Junior', 'Adult', 'Masters'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 80, description: 'Tyrrhenian Sea coast approximately 80 km west' },
    priceRange: { from: 900, to: 2200, unit: 'week', display: '€900 - €2,200/week' },
    socialMedia: { instagram: '@tuscanycycling', facebook: 'https://facebook.com/tuscanycycling', twitter: '@tuscanycycle' },
    climate: 'tuscany',
    facilities: 'Outdoor velodrome, bike fitting lab, video analysis room, bike workshop with Campagnolo service, wind tunnel partnerships, altitude rooms, wellness spa',
    courtSurfaces: ['Road cycling', 'Time trial', 'Climbing', 'Criterium'],
    programs: [
      { name: 'Strade Bianche Experience', price: '€1,100/week', desc: 'Ride the famous white gravel roads of Tuscany used in the professional race' },
      { name: 'Chianti Hills Training', price: '€1,300/week', desc: 'Structured training through the rolling Chianti hills with wine country scenery' },
      { name: 'Gran Fondo Preparation', price: '€1,500/week', desc: 'Targeted preparation for major gran fondo events with race simulation' }
    ],
    coaches: [
      { name: 'Marco Bellini', credential: 'FCI Tecnico Nazionale', background: 'Former Giro d\'Italia participant, now coaching road and gravel specialists', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Italian', 'English'], instagram: null },
      { name: 'Chiara Rossi', credential: 'FCI Level 2 Coach', background: 'Former Italian national team rider, specializing in women\'s cycling development', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Italian', 'English', 'French'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1476994230281-1448088947db?w=800'],
    upcomingCamps: [
      { name: 'Strade Bianche Camp', startDate: '2025-06-16', endDate: '2025-06-23', price: '€1,100', level: 'Intermediate' },
      { name: 'Summer Tuscany Tour', startDate: '2025-07-21', endDate: '2025-07-28', price: '€1,300', level: 'All Levels' },
      { name: 'Autumn Chianti Camp', startDate: '2025-10-13', endDate: '2025-10-20', price: '€1,000', level: 'All Levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Tuscan Agriturismo', pricePerWeek: 650, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Cyclist Villa Shared', pricePerWeek: 380, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Authentic Tuscan farmhouse accommodation with local cuisine. Bike wash and storage included.'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-01',
      spotsLeft: 20,
      responseTime: '24h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 12,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Online learning support available',
      medicalStaff: true,
      safeguarding: 'Italian federation child protection standards, vetted staff',
      airportPickup: true,
      mealPlan: 'Full board with Italian Mediterranean cuisine adapted for athletes',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Italian'],
      emergencyProtocol: 'First aid on-site, hospital in Siena 20 min drive'
    }
  },
  {
    id: 'dolomites-cycling-center',
    name: 'Dolomites Cycling Center',
    country: 'Italy',
    countryFlag: '🇮🇹',
    city: 'Dolomites',
    lat: 46.4102,
    lng: 11.8440,
    website: 'https://www.dolomitescycling.it',
    contact: '+39 0471 345 678',
    contactEmail: 'info@dolomitescycling.it',
    description: 'Elite altitude training center in the Italian Dolomites, home to legendary Giro d\'Italia climbs including Passo dello Stelvio, Passo Giau, and Tre Cime di Lavaredo.',
    ageGroups: ['Adult'],
    level: 'Advanced',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Mountain location — nearest Adriatic coast approximately 180 km' },
    priceRange: { from: 1100, to: 2600, unit: 'week', display: '€1,100 - €2,600/week' },
    socialMedia: { instagram: '@dolomitescycling', facebook: 'https://facebook.com/dolomitescycling', twitter: '@dolomitescycle' },
    climate: 'dolomites',
    facilities: 'Indoor velodrome, altitude training center at natural 1,200m elevation, bike fitting lab, wind tunnel testing, professional bike workshop, video analysis, cryotherapy chamber',
    courtSurfaces: ['Road cycling', 'Climbing', 'Time trial', 'Criterium'],
    programs: [
      { name: 'Giro Legends Camp', price: '€1,600/week', desc: 'Conquer the mythical Dolomite passes used in the Giro d\'Italia' },
      { name: 'Altitude Performance', price: '€2,200/week', desc: 'Structured altitude training with VO2max and lactate testing' },
      { name: 'Mountain Grand Tour Prep', price: '€1,800/week', desc: 'Preparation for multi-day mountain events and sportives' }
    ],
    coaches: [
      { name: 'Alessandro Vanotti', credential: 'FCI Tecnico Nazionale', background: 'Former professional cyclist and Giro d\'Italia participant with extensive mountain stage experience', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Italian', 'English', 'German'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800'],
    upcomingCamps: [
      { name: 'Dolomites Grand Tour', startDate: '2025-07-14', endDate: '2025-07-21', price: '€1,600', level: 'Advanced' },
      { name: 'Early Summer Altitude', startDate: '2025-06-09', endDate: '2025-06-16', price: '€1,400', level: 'Intermediate' },
      { name: 'September Stelvio', startDate: '2025-09-08', endDate: '2025-09-15', price: '€1,500', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Alpine Sport Hotel', pricePerWeek: 750, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: false,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Alpine hotel with spa, heated bike room, and mechanical workshop. Half-board with energy-focused menu.'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-09',
      spotsLeft: 10,
      responseTime: '48h',
      privateLessons: true,
      yearRound: false
    },
    juniorInfo: {
      minAge: 16,
      maxAge: 18,
      supervision: 'During training hours',
      guardianStay: true,
      schooling: 'Not provided — advanced adult camp',
      medicalStaff: true,
      safeguarding: 'FCI child protection policies applied for under-18 participants',
      airportPickup: true,
      mealPlan: 'Full board with altitude nutrition protocols',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Italian', 'German'],
      emergencyProtocol: 'Mountain rescue coordination, hospital in Bolzano 40 min'
    }
  },
  {
    id: 'flanders-cycling-school',
    name: 'Flanders Cycling School',
    country: 'Belgium',
    countryFlag: '🇧🇪',
    city: 'Flanders',
    lat: 50.8503,
    lng: 3.7250,
    website: 'https://www.flanderscycling.be',
    contact: '+32 9 234 5678',
    contactEmail: 'info@flanderscycling.be',
    description: 'Train on the legendary cobbled climbs of Flanders including the Koppenberg, Oude Kwaremont, and Paterberg. The spiritual home of classics cycling in the heart of Belgian cycling culture.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 70, description: 'Belgian North Sea coast approximately 70 km north' },
    priceRange: { from: 800, to: 1800, unit: 'week', display: '€800 - €1,800/week' },
    socialMedia: { instagram: '@flanderscycling', facebook: 'https://facebook.com/flanderscycling', twitter: '@flandcycling' },
    climate: 'flanders',
    facilities: 'Indoor velodrome, bike fitting lab, video analysis studio, professional bike workshop, wind tunnel testing at local university, strength training gym, recovery facilities',
    courtSurfaces: ['Road cycling', 'Criterium', 'Time trial', 'Climbing'],
    programs: [
      { name: 'Classics Experience', price: '€1,000/week', desc: 'Ride the bergs and cobbles of the Tour of Flanders route' },
      { name: 'Cobblestone Mastery', price: '€1,200/week', desc: 'Technical bike handling on cobbles, wet-weather riding, and classics tactics' },
      { name: 'Spring Classics Prep', price: '€1,500/week', desc: 'Race preparation targeting Flanders classics, including recon rides' }
    ],
    coaches: [
      { name: 'Wout Vandenberghe', credential: 'Belgian Cycling Federation A License', background: 'Former professional cyclist in Lotto-Soudal development, Flanders classics specialist', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Dutch', 'English', 'French'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800'],
    upcomingCamps: [
      { name: 'Flanders Classics Recon', startDate: '2025-03-10', endDate: '2025-03-17', price: '€1,200', level: 'Advanced' },
      { name: 'Summer Flanders Camp', startDate: '2025-07-07', endDate: '2025-07-14', price: '€1,000', level: 'Intermediate' },
      { name: 'Autumn Cobbles Camp', startDate: '2025-10-06', endDate: '2025-10-13', price: '€900', level: 'All Levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Cyclist Guesthouse', pricePerWeek: 450, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Traditional Flemish guesthouse with heated bike storage and Belgian cycling memorabilia.'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-03-10',
      spotsLeft: 14,
      responseTime: '24h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 12,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Partnership with local Flemish schools',
      medicalStaff: true,
      safeguarding: 'Belgian federation child protection policies, background-checked staff',
      airportPickup: true,
      mealPlan: 'Full board with Belgian cycling nutrition traditions',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Dutch', 'French'],
      emergencyProtocol: 'On-site first aid, AZ Groeninge hospital 15 min'
    }
  },
  {
    id: 'netherlands-cycling-institute',
    name: 'Netherlands Cycling Institute',
    country: 'Netherlands',
    countryFlag: '🇳🇱',
    city: 'Apeldoorn',
    lat: 52.2112,
    lng: 5.9699,
    website: 'https://www.netherlandscycling.nl',
    contact: '+31 55 234 5678',
    contactEmail: 'info@netherlandscycling.nl',
    description: 'Home of the famous Omnisport velodrome, the Netherlands Cycling Institute offers world-class track and road cycling programs in the cycling-mad Netherlands.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 90, description: 'North Sea coast approximately 90 km west' },
    priceRange: { from: 900, to: 2000, unit: 'week', display: '€900 - €2,000/week' },
    socialMedia: { instagram: '@nlcyclinginstitute', facebook: 'https://facebook.com/netherlandscycling', twitter: '@nlcycling' },
    climate: 'apeldoorn',
    facilities: 'World-class indoor velodrome (250m), bike fitting lab with motion capture, wind tunnel, altitude simulation rooms, professional bike workshop, video analysis, sports science lab',
    courtSurfaces: ['Road cycling', 'Criterium', 'Time trial', 'Climbing'],
    programs: [
      { name: 'Track & Road Combo', price: '€1,200/week', desc: 'Split training between velodrome track sessions and road rides through Veluwe National Park' },
      { name: 'Velodrome Mastery', price: '€1,500/week', desc: 'Track cycling focus — pursuit, team pursuit, madison, and sprint training' },
      { name: 'TT Aero Camp', price: '€1,800/week', desc: 'Time trial specialization with wind tunnel testing and aerodynamic optimization' }
    ],
    coaches: [
      { name: 'Jan de Vries', credential: 'KNWU Level 3 Coach', background: 'Former Dutch national track team coach, developed multiple world championship medalists', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Dutch', 'English', 'German'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800'],
    upcomingCamps: [
      { name: 'Track Intensive', startDate: '2025-06-16', endDate: '2025-06-23', price: '€1,500', level: 'Advanced' },
      { name: 'Summer Road & Track', startDate: '2025-07-21', endDate: '2025-07-28', price: '€1,200', level: 'Intermediate' },
      { name: 'Winter Track Camp', startDate: '2025-11-10', endDate: '2025-11-17', price: '€1,000', level: 'All Levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Sport Hotel Apeldoorn', pricePerWeek: 550, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Located near the velodrome. Secure bike parking and laundry service included.'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-01',
      spotsLeft: 16,
      responseTime: '24h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 10,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Dutch sports school partnership',
      medicalStaff: true,
      safeguarding: 'KNWU safeguarding standards, VOG-checked coaches',
      airportPickup: true,
      mealPlan: 'Full board with Dutch sports nutrition program',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Dutch'],
      emergencyProtocol: 'On-site medical room, Gelre Hospital 10 min drive'
    }
  },
  {
    id: 'algarve-cycling-camp',
    name: 'Algarve Cycling Camp',
    country: 'Portugal',
    countryFlag: '🇵🇹',
    city: 'Algarve',
    lat: 37.0194,
    lng: -7.9304,
    website: 'https://www.algarvecycling.pt',
    contact: '+351 289 456 789',
    contactEmail: 'info@algarvecycling.pt',
    description: 'Year-round cycling destination in southern Portugal with over 300 days of sunshine. The Algarve offers quiet roads, coastal cliffs, and rolling inland hills for perfect training conditions.',
    ageGroups: ['Junior', 'Adult', 'Masters'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 2, description: 'Stunning Algarve coast beaches within 2 km of training base' },
    priceRange: { from: 700, to: 1800, unit: 'week', display: '€700 - €1,800/week' },
    socialMedia: { instagram: '@algarvecycling', facebook: 'https://facebook.com/algarvecycling', twitter: '@algarvecycle' },
    climate: 'algarve',
    facilities: 'Velodrome (outdoor), bike fitting lab, video analysis room, bike workshop, altitude simulation room, recovery pool and spa, sports science testing',
    courtSurfaces: ['Road cycling', 'Time trial', 'Climbing', 'Criterium'],
    programs: [
      { name: 'Winter Sun Camp', price: '€900/week', desc: 'Escape the northern European winter with structured training in warm Algarve sunshine' },
      { name: 'Volta ao Algarve Prep', price: '€1,200/week', desc: 'Ride the routes of the professional Volta ao Algarve race' },
      { name: 'Coastal Explorer', price: '€800/week', desc: 'Scenic coastal and inland riding with daily guided routes' }
    ],
    coaches: [
      { name: 'Ricardo Santos', credential: 'FPC Level 3 Coach', background: 'Former Portuguese national team cyclist, specialist in warm-climate training periodization', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Portuguese', 'English', 'Spanish'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=800'],
    upcomingCamps: [
      { name: 'Winter Sun Training', startDate: '2025-01-20', endDate: '2025-01-27', price: '€900', level: 'All Levels' },
      { name: 'Spring Base Camp', startDate: '2025-03-24', endDate: '2025-03-31', price: '€850', level: 'Intermediate' },
      { name: 'Autumn Endurance', startDate: '2025-10-20', endDate: '2025-10-27', price: '€800', level: 'All Levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Algarve Sport Hotel', pricePerWeek: 500, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Cyclist Apartment', pricePerWeek: 300, maxOccupancy: 3, bathType: 'ensuite', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Beachfront accommodations available. Bike storage and daily laundry service.'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-03-01',
      spotsLeft: 25,
      responseTime: '24h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 12,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Online schooling support during camps',
      medicalStaff: true,
      safeguarding: 'Portuguese federation child protection, DBS-equivalent checks',
      airportPickup: true,
      mealPlan: 'Full board with Portuguese Mediterranean diet',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Portuguese', 'Spanish'],
      emergencyProtocol: 'On-site first aid, Faro Hospital 30 min'
    }
  },
  {
    id: 'swiss-cycling-academy',
    name: 'Swiss Cycling Academy',
    country: 'Switzerland',
    countryFlag: '🇨🇭',
    city: 'Aigle',
    lat: 46.3183,
    lng: 6.9710,
    website: 'https://www.swisscyclingacademy.ch',
    contact: '+41 24 468 1234',
    contactEmail: 'info@swisscyclingacademy.ch',
    description: 'Based near the UCI World Cycling Centre in Aigle, this academy offers unparalleled access to Alpine training routes and world-class facilities in the home of international cycling governance.',
    ageGroups: ['Junior', 'Adult'],
    level: 'Intermediate to Advanced',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Inland Alpine location — nearest coast approximately 300 km to Mediterranean' },
    priceRange: { from: 1500, to: 3000, unit: 'week', display: 'CHF 1,500 - CHF 3,000/week' },
    socialMedia: { instagram: '@swisscyclingacademy', facebook: 'https://facebook.com/swisscyclingacademy', twitter: '@swisscycleacad' },
    climate: 'aigle',
    facilities: 'UCI-standard indoor velodrome, professional bike fitting lab with 3D motion capture, wind tunnel, altitude chambers, bike workshop, biomechanics lab, recovery center',
    courtSurfaces: ['Road cycling', 'Time trial', 'Climbing', 'Criterium'],
    programs: [
      { name: 'Alpine Grand Tour', price: 'CHF 2,000/week', desc: 'Ride legendary Swiss cols including Grand St. Bernard, Simplon, and Furka passes' },
      { name: 'UCI Center Experience', price: 'CHF 2,500/week', desc: 'Train at the UCI World Cycling Centre with access to world-class testing facilities' },
      { name: 'Swiss Precision Training', price: 'CHF 1,800/week', desc: 'Data-driven training with power analysis, lactate testing, and custom periodization' }
    ],
    coaches: [
      { name: 'Thomas Müller', credential: 'Swiss Olympic Coach Diploma', background: 'Former Swiss national team coach, developed multiple Tour de Suisse stage winners', atpWta: false, bestRanking: null, rankingNote: null, languages: ['German', 'French', 'English'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800'],
    upcomingCamps: [
      { name: 'Alpine Cols Camp', startDate: '2025-07-07', endDate: '2025-07-14', price: 'CHF 2,000', level: 'Advanced' },
      { name: 'Spring Swiss Training', startDate: '2025-05-05', endDate: '2025-05-12', price: 'CHF 1,800', level: 'Intermediate' },
      { name: 'Autumn Performance Block', startDate: '2025-09-15', endDate: '2025-09-22', price: 'CHF 1,600', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Swiss Sport Lodge', pricePerWeek: 900, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Located near UCI World Cycling Centre. Swiss precision service with multilingual staff.'
    },
    availability: {
      status: 'limited',
      nextIntake: '2025-05-05',
      spotsLeft: 6,
      responseTime: '48h',
      privateLessons: true,
      yearRound: false
    },
    juniorInfo: {
      minAge: 14,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Swiss international school partnership',
      medicalStaff: true,
      safeguarding: 'Swiss Olympic safeguarding framework, police-checked staff',
      airportPickup: true,
      mealPlan: 'Full board with Swiss sports nutrition standards',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'French', 'German'],
      emergencyProtocol: 'On-site medical team, Aigle hospital 5 min drive'
    }
  },
  {
    id: 'slovenia-cycling-base',
    name: 'Slovenia Cycling Base',
    country: 'Slovenia',
    countryFlag: '🇸🇮',
    city: 'Ljubljana',
    lat: 46.0569,
    lng: 14.5058,
    website: 'https://www.sloveniacycling.si',
    contact: '+386 1 234 5678',
    contactEmail: 'info@sloveniacycling.si',
    description: 'Train in the homeland of cycling champions. Slovenia offers diverse terrain from Alpine passes to Mediterranean coast, all within a compact and cyclist-friendly country.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 95, description: 'Adriatic coast at Piran approximately 95 km southwest' },
    priceRange: { from: 700, to: 1600, unit: 'week', display: '€700 - €1,600/week' },
    socialMedia: { instagram: '@sloveniacycling', facebook: 'https://facebook.com/sloveniacycling', twitter: '@slocycling' },
    climate: 'ljubljana',
    facilities: 'Indoor velodrome, bike fitting lab, altitude training rooms, video analysis, bike workshop, recovery pool, sports science lab with metabolic testing',
    courtSurfaces: ['Road cycling', 'Climbing', 'Time trial', 'Criterium'],
    programs: [
      { name: 'Champions\' Roads Camp', price: '€1,000/week', desc: 'Ride the training roads of Slovenia\'s cycling champions through Julian Alps and Karst region' },
      { name: 'Alpine Explorer', price: '€1,200/week', desc: 'Multi-day rides crossing Alpine passes including Vršič and Mangart' },
      { name: 'Coast to Alps Challenge', price: '€900/week', desc: 'Experience Slovenia\'s diversity from Adriatic coast to Alpine peaks in one week' }
    ],
    coaches: [
      { name: 'Andrej Hauptman', credential: 'KZS National Coach License', background: 'Experienced Slovenian national level coach, developer of young cycling talent', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Slovenian', 'English', 'Italian', 'Croatian'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800'],
    upcomingCamps: [
      { name: 'Julian Alps Camp', startDate: '2025-07-07', endDate: '2025-07-14', price: '€1,200', level: 'Advanced' },
      { name: 'Spring Slovenia Tour', startDate: '2025-04-28', endDate: '2025-05-05', price: '€900', level: 'Intermediate' },
      { name: 'Autumn Coast Camp', startDate: '2025-09-22', endDate: '2025-09-29', price: '€800', level: 'All Levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Ljubljana Sport Hotel', pricePerWeek: 450, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'hostel', label: 'Cyclist Hostel', pricePerWeek: 250, maxOccupancy: 4, bathType: 'shared', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Ljubljana is one of Europe\'s greenest capitals. Bike-friendly city with excellent infrastructure.'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-04-28',
      spotsLeft: 20,
      responseTime: '24h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 12,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Slovenian sports school partnership available',
      medicalStaff: true,
      safeguarding: 'Slovenian federation child protection standards',
      airportPickup: true,
      mealPlan: 'Full board with local Slovenian cuisine adapted for athletes',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Slovenian'],
      emergencyProtocol: 'On-site first aid, UKC Ljubljana hospital 10 min'
    }
  },
  {
    id: 'andorra-altitude-cycling',
    name: 'Andorra Altitude Cycling Academy',
    country: 'Andorra',
    countryFlag: '🇦🇩',
    city: 'Andorra la Vella',
    lat: 42.5063,
    lng: 1.5218,
    website: 'https://www.andorracycling.ad',
    contact: '+376 801 234',
    contactEmail: 'info@andorracycling.ad',
    description: 'Elite altitude training in the Pyrenean principality of Andorra at 1,000–2,400m elevation. A favorite training base for WorldTour professionals seeking natural altitude adaptation.',
    ageGroups: ['Adult'],
    level: 'Advanced',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Landlocked mountain principality — nearest coast approximately 180 km to Barcelona' },
    priceRange: { from: 1200, to: 2800, unit: 'week', display: '€1,200 - €2,800/week' },
    socialMedia: { instagram: '@andorracycling', facebook: 'https://facebook.com/andorracycling', twitter: '@andorracycle' },
    climate: 'andorra',
    facilities: 'Indoor velodrome, natural altitude training at 1,000-2,400m, bike fitting lab, wind tunnel partnership, altitude rooms, professional bike workshop, video analysis, recovery spa',
    courtSurfaces: ['Road cycling', 'Climbing', 'Time trial', 'Criterium'],
    programs: [
      { name: 'Pro Altitude Camp', price: '€1,800/week', desc: 'Structured altitude training at natural elevation, blood monitoring, and performance testing' },
      { name: 'Pyrenean Explorer', price: '€1,400/week', desc: 'Epic rides crossing between Andorra, France, and Spain on legendary mountain passes' },
      { name: 'Grand Tour Preparation', price: '€2,500/week', desc: 'Comprehensive preparation for multi-week stage races with altitude acclimatization' }
    ],
    coaches: [
      { name: 'David Arroyo', credential: 'RFEC National Coach', background: 'Former professional cyclist with Grand Tour experience, altitude training specialist', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Spanish', 'English', 'French', 'Catalan'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800'],
    upcomingCamps: [
      { name: 'Summer Altitude Block', startDate: '2025-07-14', endDate: '2025-07-21', price: '€1,800', level: 'Advanced' },
      { name: 'Pre-Tour Camp', startDate: '2025-06-02', endDate: '2025-06-09', price: '€2,000', level: 'Elite' },
      { name: 'Autumn Altitude', startDate: '2025-09-08', endDate: '2025-09-15', price: '€1,400', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Andorra Mountain Hotel', pricePerWeek: 700, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: false,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Tax-free shopping in Andorra. Hotel includes spa, heated bike room, and altitude-optimized menu.'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-02',
      spotsLeft: 8,
      responseTime: '48h',
      privateLessons: true,
      yearRound: false
    },
    juniorInfo: {
      minAge: 16,
      maxAge: 18,
      supervision: 'During training hours',
      guardianStay: true,
      schooling: 'Not provided — advanced adult camp',
      medicalStaff: true,
      safeguarding: 'Andorran child protection regulations applied',
      airportPickup: true,
      mealPlan: 'Full board with altitude nutrition protocols',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Spanish', 'French', 'Catalan'],
      emergencyProtocol: 'On-site medical team, Hospital Nostra Senyora de Meritxell 10 min'
    }
  },
  {
    id: 'munich-cycling-academy',
    name: 'Munich Cycling Academy',
    country: 'Germany',
    countryFlag: '🇩🇪',
    city: 'Munich',
    lat: 48.1351,
    lng: 11.5820,
    website: 'https://www.munichcyclingacademy.de',
    contact: '+49 89 456 7890',
    contactEmail: 'info@munichcyclingacademy.de',
    description: 'Elite cycling academy set in the heart of Bavaria, offering access to stunning Alpine foothills and challenging climbs in the Bavarian Alps with world-class German sports science support.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beaches nearby — landlocked Bavarian location with beautiful Alpine lakes within 40 km' },
    priceRange: { from: 900, to: 2200, unit: 'week', display: '€900 - €2,200/week' },
    socialMedia: { instagram: '@munichcycling', facebook: 'https://facebook.com/munichcyclingacademy', twitter: '@munichcycle' },
    climate: 'munich',
    facilities: 'Indoor velodrome, wind tunnel access, bike fitting studio, sports science lab, altitude chamber, strength gym, recovery center with cryotherapy',
    courtSurfaces: ['Road cycling', 'Climbing', 'Time trial', 'Mountain biking'],
    programs: [
      { name: 'Bavarian Alps Climbing Camp', price: '€1,400/week', desc: 'Tackle iconic Alpine passes including Stelvio approach routes, structured climbing intervals and power optimization' },
      { name: 'German Precision Training', price: '€1,200/week', desc: 'Data-driven training with German sports science methodology, power meter analysis, and periodization planning' },
      { name: 'Endurance Base Builder', price: '€1,000/week', desc: 'Long rides through Bavarian countryside, aerobic base building, and nutrition strategy workshops' }
    ],
    coaches: [
      { name: 'Klaus Hoffmann', credential: 'UCI Level 3 Coach', background: 'Former German national team cyclist, 18 years coaching experience with Olympic development athletes', atpWta: false, bestRanking: null, rankingNote: null, languages: ['German', 'English'], instagram: null },
      { name: 'Sabine Keller', credential: 'BDR A-License Coach', background: 'Sports science PhD from TU Munich, specializing in cycling performance and altitude training', atpWta: false, bestRanking: null, rankingNote: null, languages: ['German', 'English', 'French'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=800', 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800'],
    upcomingCamps: [
      { name: 'Alpine Climbing Camp', startDate: '2026-06-15', endDate: '2026-06-22', price: '€1,400', level: 'Advanced' },
      { name: 'Spring Base Camp', startDate: '2026-04-06', endDate: '2026-04-13', price: '€1,000', level: 'All Levels' },
      { name: 'Autumn Endurance Block', startDate: '2026-09-28', endDate: '2026-10-05', price: '€1,100', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Bavarian Cycling Hotel', pricePerWeek: 650, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Shared Cyclist Apartment', pricePerWeek: 380, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Secure bike storage with individual racks. Bavarian breakfast buffet and cyclist-specific evening meals included.'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-04-01',
      spotsLeft: 14,
      responseTime: '24h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 14,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Online schooling support available',
      medicalStaff: true,
      safeguarding: 'German child protection standards applied',
      airportPickup: true,
      mealPlan: 'Full board with cyclist-specific nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['German', 'English'],
      emergencyProtocol: '24/7 emergency line, on-site first aid, Klinikum München 15 min away'
    }
  },
  {
    id: 'innsbruck-cycling-center',
    name: 'Innsbruck Cycling Center',
    country: 'Austria',
    countryFlag: '🇦🇹',
    city: 'Innsbruck',
    lat: 47.2692,
    lng: 11.4041,
    website: 'https://www.innsbruckcycling.at',
    contact: '+43 512 345 678',
    contactEmail: 'info@innsbruckcycling.at',
    description: 'World Championship cycling venue offering unparalleled access to legendary Alpine mountain passes including the Brenner, Kühtai, and Timmelsjoch, with Austrian precision coaching.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beaches — Alpine location surrounded by dramatic mountain scenery and crystal-clear rivers' },
    priceRange: { from: 1000, to: 2400, unit: 'week', display: '€1,000 - €2,400/week' },
    socialMedia: { instagram: '@innsbruckcycling', facebook: 'https://facebook.com/innsbruckcyclingcenter', twitter: '@ibkcycle' },
    climate: 'innsbruck',
    facilities: 'Olympic velodrome access, bike fitting lab, altitude training rooms, strength gym, sports medicine clinic, video analysis, bike workshop',
    courtSurfaces: ['Road cycling', 'Climbing', 'Time trial', 'Gravel'],
    programs: [
      { name: 'Alpine Pass Masterclass', price: '€1,600/week', desc: 'Conquer legendary Austrian and Italian Alpine passes with structured climbing training and pacing strategies' },
      { name: 'Worlds Course Training', price: '€1,400/week', desc: 'Ride the 2018 World Championship course, race simulation, technical descending clinics' },
      { name: 'High Altitude Camp', price: '€1,800/week', desc: 'Train at 2,000m+ elevation, altitude acclimatization, VO2max optimization, and power-to-weight programs' }
    ],
    coaches: [
      { name: 'Stefan Gruber', credential: 'UCI Level 2 Coach', background: 'Former Austrian national champion, specialized in mountain stage racing and altitude performance', atpWta: false, bestRanking: null, rankingNote: null, languages: ['German', 'English', 'Italian'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=800', 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800'],
    upcomingCamps: [
      { name: 'Summer Alpine Camp', startDate: '2026-07-06', endDate: '2026-07-13', price: '€1,600', level: 'Advanced' },
      { name: 'Spring Pass Opener', startDate: '2026-05-11', endDate: '2026-05-18', price: '€1,200', level: 'Intermediate' },
      { name: 'Autumn Endurance Rides', startDate: '2026-09-14', endDate: '2026-09-21', price: '€1,100', level: 'All Levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Tyrolean Mountain Hotel', pricePerWeek: 700, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Hotels at the base of the Alps with heated bike storage and post-ride spa access.'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-05-01',
      spotsLeft: 10,
      responseTime: '24h',
      privateLessons: true,
      yearRound: false
    },
    juniorInfo: {
      minAge: 15,
      maxAge: 18,
      supervision: 'During training hours',
      guardianStay: true,
      schooling: 'Not provided',
      medicalStaff: true,
      safeguarding: 'Austrian child protection regulations applied',
      airportPickup: true,
      mealPlan: 'Full board with altitude nutrition protocols',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['German', 'English', 'Italian'],
      emergencyProtocol: 'On-site medical team, Universitätsklinik Innsbruck 10 min away'
    }
  },
  {
    id: 'surrey-hills-cycling',
    name: 'Surrey Hills Cycling Academy',
    country: 'UK',
    countryFlag: '🇬🇧',
    city: 'Dorking',
    lat: 51.2325,
    lng: -0.3346,
    website: 'https://www.surreyhillscycling.co.uk',
    contact: '+44 1306 234 567',
    contactEmail: 'info@surreyhillscycling.co.uk',
    description: 'Train on the iconic Box Hill and Leith Hill climbs made famous by the 2012 Olympic road race, with expert British Cycling-certified coaches in the rolling Surrey Hills AONB.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 65, description: 'South coast beaches approximately 65 km south via the South Downs' },
    priceRange: { from: 700, to: 1800, unit: 'week', display: '£700 - £1,800/week' },
    socialMedia: { instagram: '@surreyhillscycling', facebook: 'https://facebook.com/surreyhillscycling', twitter: '@surreycycle' },
    climate: 'surrey',
    facilities: 'Indoor training studio, Wattbike performance center, bike fitting lab, video analysis room, strength gym, physiotherapy clinic',
    courtSurfaces: ['Road cycling', 'Climbing', 'Sportive training', 'Gravel'],
    programs: [
      { name: 'Olympic Route Training', price: '£1,200/week', desc: 'Ride the 2012 London Olympic road race course, Box Hill repeats, and structured race preparation' },
      { name: 'Sportive Preparation', price: '£900/week', desc: 'Build fitness for major UK sportives, endurance training on Surrey and Sussex lanes' },
      { name: 'Hill Climbing Specialist', price: '£1,100/week', desc: 'Master the famous Surrey climbs — Leith Hill, Box Hill, White Down — with power-based training' }
    ],
    coaches: [
      { name: 'James Whitfield', credential: 'British Cycling Level 3 Coach', background: 'Former GB Academy rider, 12 years coaching experience with elite amateur and professional cyclists', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English'], instagram: null },
      { name: 'Emily Richardson', credential: 'British Cycling Level 2 Coach', background: 'Sports science graduate, specializing in women\'s cycling development and endurance coaching', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'French'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=800', 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800'],
    upcomingCamps: [
      { name: 'Summer Road Camp', startDate: '2026-06-22', endDate: '2026-06-29', price: '£1,200', level: 'Intermediate' },
      { name: 'Spring Sportive Prep', startDate: '2026-03-30', endDate: '2026-04-06', price: '£900', level: 'All Levels' },
      { name: 'Autumn Gravel Weekender', startDate: '2026-10-05', endDate: '2026-10-12', price: '£800', level: 'All Levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Country Inn Single Room', pricePerWeek: 550, maxOccupancy: 1, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Shared Cyclist Cottage', pricePerWeek: 320, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Charming Surrey countryside accommodation. Secure bike storage and hearty English breakfast included.'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-03-15',
      spotsLeft: 12,
      responseTime: '24h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 14,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Online schooling support available',
      medicalStaff: true,
      safeguarding: 'DBS-checked staff, British Cycling safeguarding policies',
      airportPickup: true,
      mealPlan: 'Full board with cyclist-specific nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English'],
      emergencyProtocol: '24/7 emergency line, on-site first aid, Dorking Hospital 10 min away'
    }
  },
  {
    id: 'copenhagen-cycling-academy',
    name: 'Copenhagen Cycling Academy',
    country: 'Denmark',
    countryFlag: '🇩🇰',
    city: 'Copenhagen',
    lat: 55.6761,
    lng: 12.5683,
    website: 'https://www.copenhagencycling.dk',
    contact: '+45 33 456 789',
    contactEmail: 'info@copenhagencycling.dk',
    description: 'Based in the world\'s most bike-friendly city, this academy blends Danish cycling culture with elite road training on the flat coastal roads of Zealand and the rolling hills of northern Sjælland.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 5, description: 'Amager Strand beach just 5 km from city center training base' },
    priceRange: { from: 8000, to: 18000, unit: 'week', display: 'DKK 8,000 - 18,000/week' },
    socialMedia: { instagram: '@cpncycling', facebook: 'https://facebook.com/copenhagencyclingacademy', twitter: '@cpncycle' },
    climate: 'copenhagen-cycling',
    facilities: 'Ballerup Super Arena velodrome access, wind tunnel testing, bike fitting lab, sports science center, indoor training studio, recovery spa',
    courtSurfaces: ['Road cycling', 'Track cycling', 'Time trial', 'Urban cycling'],
    programs: [
      { name: 'Scandinavian Road Camp', price: 'DKK 12,000/week', desc: 'Explore Zealand\'s coastal roads and rolling terrain with structured training and data analysis' },
      { name: 'Track & Road Combo', price: 'DKK 15,000/week', desc: 'Train on the world-class Ballerup velodrome and road, combining track speed with road endurance' },
      { name: 'Danish Cycling Experience', price: 'DKK 9,000/week', desc: 'Immerse in Copenhagen cycling culture, urban cycling, and endurance rides through Danish countryside' }
    ],
    coaches: [
      { name: 'Lars Andersen', credential: 'UCI Level 2 Coach', background: 'Former Danish national track team rider, 14 years coaching experience with Danish Cycling Federation', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Danish', 'English', 'German'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=800', 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800'],
    upcomingCamps: [
      { name: 'Summer Coastal Camp', startDate: '2026-06-29', endDate: '2026-07-06', price: 'DKK 12,000', level: 'Intermediate' },
      { name: 'Spring Track & Road', startDate: '2026-04-20', endDate: '2026-04-27', price: 'DKK 15,000', level: 'Advanced' },
      { name: 'Autumn Endurance Block', startDate: '2026-09-07', endDate: '2026-09-14', price: 'DKK 9,000', level: 'All Levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Copenhagen City Hotel', pricePerWeek: 5500, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Shared Cyclist Hostel', pricePerWeek: 3200, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'City center accommodation with secure bike storage. New Nordic cuisine meals and cycling café culture included.'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-04-01',
      spotsLeft: 12,
      responseTime: '24h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 14,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Online schooling support available',
      medicalStaff: true,
      safeguarding: 'Danish child protection standards applied',
      airportPickup: true,
      mealPlan: 'Full board with Nordic cyclist nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Danish', 'English'],
      emergencyProtocol: '24/7 emergency line, Rigshospitalet 15 min away'
    }
  },
  {
    id: 'bergen-cycling-center',
    name: 'Bergen Cycling Center',
    country: 'Norway',
    countryFlag: '🇳🇴',
    city: 'Bergen',
    lat: 60.3913,
    lng: 5.3221,
    website: 'https://www.bergencycling.no',
    contact: '+47 55 234 567',
    contactEmail: 'info@bergencycling.no',
    description: 'Train on the dramatic 2017 World Championship course along the Norwegian fjords, with challenging coastal climbs and breathtaking scenery in one of cycling\'s most spectacular settings.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 3, description: 'Norwegian fjord beaches and coastal swimming spots within 3 km' },
    priceRange: { from: 9000, to: 22000, unit: 'week', display: 'NOK 9,000 - 22,000/week' },
    socialMedia: { instagram: '@bergencycling', facebook: 'https://facebook.com/bergencyclingcenter', twitter: '@bergencycle' },
    climate: 'bergen',
    facilities: 'Sola Arena velodrome access, indoor training center, bike workshop, sports science lab, strength gym, fjord recovery swimming',
    courtSurfaces: ['Road cycling', 'Climbing', 'Mountain biking', 'Gravel'],
    programs: [
      { name: 'Fjord Cycling Experience', price: 'NOK 15,000/week', desc: 'Epic rides along Hardangerfjord and Sognefjord, combining stunning scenery with serious climbing training' },
      { name: 'Worlds Course Training', price: 'NOK 18,000/week', desc: 'Ride the 2017 UCI World Championship course, Salmon Hill repeats, race simulation and tactics' },
      { name: 'Midnight Sun Endurance', price: 'NOK 12,000/week', desc: 'Summer long-daylight endurance rides, base building in 20+ hours of daylight, Nordic training methods' }
    ],
    coaches: [
      { name: 'Erik Nordstrom', credential: 'Norwegian Cycling Federation Elite Coach', background: 'Former professional cyclist, podium finisher in Tour of Norway, 10 years coaching elite Norwegian riders', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Norwegian', 'English', 'Swedish'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=800', 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800'],
    upcomingCamps: [
      { name: 'Midnight Sun Camp', startDate: '2026-06-15', endDate: '2026-06-22', price: 'NOK 15,000', level: 'All Levels' },
      { name: 'Spring Fjord Camp', startDate: '2026-05-04', endDate: '2026-05-11', price: 'NOK 12,000', level: 'Intermediate' },
      { name: 'Autumn Storm Riders', startDate: '2026-09-14', endDate: '2026-09-21', price: 'NOK 11,000', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Fjord View Hotel', pricePerWeek: 7000, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Fjord-side accommodation with heated bike storage. Norwegian seafood-focused meal plans included.'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-05-01',
      spotsLeft: 8,
      responseTime: '48h',
      privateLessons: true,
      yearRound: false
    },
    juniorInfo: {
      minAge: 15,
      maxAge: 18,
      supervision: 'During training hours',
      guardianStay: true,
      schooling: 'Not provided',
      medicalStaff: true,
      safeguarding: 'Norwegian child welfare standards applied',
      airportPickup: true,
      mealPlan: 'Full board with Norwegian seafood and cyclist nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Norwegian', 'English'],
      emergencyProtocol: 'On-site medical team, Haukeland University Hospital 10 min away'
    }
  },
  {
    id: 'wicklow-cycling-academy',
    name: 'Wicklow Cycling Academy',
    country: 'Ireland',
    countryFlag: '🇮🇪',
    city: 'Wicklow',
    lat: 52.9808,
    lng: -6.0444,
    website: 'https://www.wicklowcycling.ie',
    contact: '+353 404 234 567',
    contactEmail: 'info@wicklowcycling.ie',
    description: 'Nestled in the Garden of Ireland, this academy offers challenging rides through the scenic Wicklow Mountains, the Sally Gap, and rolling green countryside with authentic Irish hospitality.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 2, description: 'Wicklow town beaches and Irish Sea coast just 2 km away' },
    priceRange: { from: 750, to: 1800, unit: 'week', display: '€750 - €1,800/week' },
    socialMedia: { instagram: '@wicklowcycling', facebook: 'https://facebook.com/wicklowcyclingacademy', twitter: '@wicklowcycle' },
    climate: 'wicklow',
    facilities: 'Indoor training studio, Wattbike suite, bike fitting lab, video analysis, strength gym, physiotherapy clinic, bike workshop',
    courtSurfaces: ['Road cycling', 'Climbing', 'Sportive training', 'Gravel'],
    programs: [
      { name: 'Wicklow Mountains Camp', price: '€1,200/week', desc: 'Conquer the Sally Gap, Wicklow Gap, and Military Road with structured climbing and endurance training' },
      { name: 'Irish Sportive Prep', price: '€900/week', desc: 'Prepare for major Irish sportives with group riding, pacing strategies, and nutrition planning' },
      { name: 'Green Island Gravel', price: '€1,000/week', desc: 'Explore Wicklow\'s forest trails and back roads on gravel bikes, combining adventure with fitness' }
    ],
    coaches: [
      { name: 'Sean O\'Brien', credential: 'Cycling Ireland Level 3 Coach', background: 'Former Irish national road race champion, 15 years coaching experience with Cycling Ireland development programs', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Irish'], instagram: null },
      { name: 'Aoife Murphy', credential: 'Cycling Ireland Level 2 Coach', background: 'Sports science graduate from UCD, specializing in endurance coaching and women\'s cycling development', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Irish'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=800', 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800'],
    upcomingCamps: [
      { name: 'Summer Mountains Camp', startDate: '2026-07-06', endDate: '2026-07-13', price: '€1,200', level: 'Intermediate' },
      { name: 'Spring Road Camp', startDate: '2026-04-13', endDate: '2026-04-20', price: '€900', level: 'All Levels' },
      { name: 'Autumn Gravel Adventure', startDate: '2026-10-05', endDate: '2026-10-12', price: '€1,000', level: 'All Levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Wicklow Country Hotel', pricePerWeek: 500, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Shared Cyclist Guesthouse', pricePerWeek: 300, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Charming Irish countryside accommodation. Traditional Irish breakfast and cyclist evening meals included.'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-03-15',
      spotsLeft: 14,
      responseTime: '24h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 14,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Online schooling support available',
      medicalStaff: true,
      safeguarding: 'Garda vetted staff, Cycling Ireland safeguarding policies',
      airportPickup: true,
      mealPlan: 'Full board with cyclist-specific nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Irish'],
      emergencyProtocol: '24/7 emergency line, St Vincent\'s Hospital Wicklow 10 min away'
    }
  },
  {
    id: 'istria-cycling-center',
    name: 'Istria Cycling Center',
    country: 'Croatia',
    countryFlag: '🇭🇷',
    city: 'Poreč',
    lat: 45.2271,
    lng: 13.5947,
    website: 'https://www.istriacycling.hr',
    contact: '+385 52 234 567',
    contactEmail: 'info@istriacycling.hr',
    description: 'Experience world-class cycling on the stunning Istrian peninsula, where Mediterranean coastline meets rolling inland hills, truffle-country back roads, and hilltop medieval villages.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 1, description: 'Adriatic Sea beaches directly adjacent to the training base in Poreč' },
    priceRange: { from: 700, to: 1600, unit: 'week', display: '€700 - €1,600/week' },
    socialMedia: { instagram: '@istriacycling', facebook: 'https://facebook.com/istriacyclingcenter', twitter: '@istriacycle' },
    climate: 'istria',
    facilities: 'Outdoor training circuits, bike fitting studio, sports science lab, video analysis, strength gym, Adriatic recovery swimming, bike workshop',
    courtSurfaces: ['Road cycling', 'Climbing', 'Gravel', 'Mountain biking'],
    programs: [
      { name: 'Istrian Coastal Camp', price: '€1,000/week', desc: 'Ride the stunning Adriatic coastline and rolling Istrian interior with structured endurance training' },
      { name: 'Parenzana Trail Experience', price: '€900/week', desc: 'Explore the historic Parenzana railway route on gravel and road, combining history with fitness' },
      { name: 'Hill Town Climber', price: '€1,100/week', desc: 'Tackle the climbs to Motovun, Grožnjan, and Labin hilltop towns with power-based climbing drills' }
    ],
    coaches: [
      { name: 'Marko Kovačević', credential: 'Croatian Cycling Federation A License', background: 'Former Croatian road champion, 12 years coaching experience with national development squad riders', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Croatian', 'English', 'Italian'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=800', 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800'],
    upcomingCamps: [
      { name: 'Summer Adriatic Camp', startDate: '2026-06-08', endDate: '2026-06-15', price: '€1,000', level: 'All Levels' },
      { name: 'Spring Road Camp', startDate: '2026-03-30', endDate: '2026-04-06', price: '€900', level: 'Intermediate' },
      { name: 'Autumn Gravel Explorer', startDate: '2026-10-12', endDate: '2026-10-19', price: '€850', level: 'All Levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Adriatic Cycling Hotel', pricePerWeek: 450, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Shared Villa Apartment', pricePerWeek: 280, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Coastal accommodation with Adriatic views. Istrian Mediterranean cuisine and truffle specialties included.'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-03-15',
      spotsLeft: 16,
      responseTime: '24h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 14,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Online schooling support available',
      medicalStaff: true,
      safeguarding: 'Croatian child protection standards applied',
      airportPickup: true,
      mealPlan: 'Full board with Mediterranean cyclist nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Croatian', 'English', 'Italian'],
      emergencyProtocol: '24/7 emergency line, Poreč General Hospital 5 min away'
    }
  },
  {
    id: 'crete-cycling-academy',
    name: 'Crete Cycling Academy',
    country: 'Greece',
    countryFlag: '🇬🇷',
    city: 'Heraklion',
    lat: 35.3387,
    lng: 25.1442,
    website: 'https://www.cretecycling.gr',
    contact: '+30 2810 234 567',
    contactEmail: 'info@cretecycling.gr',
    description: 'Discover the dramatic landscapes of Greece\'s largest island, from coastal roads along the Aegean Sea to challenging mountain climbs through the White Mountains and Psiloritis range.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 2, description: 'Aegean Sea beaches within 2 km of Heraklion training base' },
    priceRange: { from: 700, to: 1500, unit: 'week', display: '€700 - €1,500/week' },
    socialMedia: { instagram: '@cretecycling', facebook: 'https://facebook.com/cretecyclingacademy', twitter: '@cretecycle' },
    climate: 'crete',
    facilities: 'Outdoor training circuits, bike fitting lab, sports science center, video analysis, recovery pool, bike workshop, nutrition kitchen',
    courtSurfaces: ['Road cycling', 'Climbing', 'Mountain biking', 'Gravel'],
    programs: [
      { name: 'Cretan Mountain Explorer', price: '€1,000/week', desc: 'Climb through the White Mountains and Psiloritis range with guided rides and structured training' },
      { name: 'Aegean Coastal Camp', price: '€850/week', desc: 'Ride the stunning northern coast of Crete, seaside villages, and undulating coastal roads' },
      { name: 'Greek Island Gravel', price: '€900/week', desc: 'Explore Crete\'s ancient trails and olive grove paths on gravel bikes, combining archaeology with cycling' }
    ],
    coaches: [
      { name: 'Nikos Papadopoulos', credential: 'Hellenic Cycling Federation A License', background: 'Former Greek national team cyclist, multiple Greek championship podiums, 10 years coaching experience', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Greek', 'English', 'German'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=800', 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800'],
    upcomingCamps: [
      { name: 'Spring Mountain Camp', startDate: '2026-04-06', endDate: '2026-04-13', price: '€1,000', level: 'Intermediate' },
      { name: 'Autumn Coastal Rides', startDate: '2026-10-05', endDate: '2026-10-12', price: '€850', level: 'All Levels' },
      { name: 'Winter Sun Camp', startDate: '2027-01-11', endDate: '2027-01-18', price: '€800', level: 'All Levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Seaside Cycling Hotel', pricePerWeek: 400, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Shared Villa', pricePerWeek: 250, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Beachside accommodation with Aegean views. Traditional Cretan cuisine with olive oil, local produce, and cyclist nutrition.'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-03-01',
      spotsLeft: 18,
      responseTime: '24h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 14,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Online schooling support available',
      medicalStaff: true,
      safeguarding: 'Greek child protection regulations applied',
      airportPickup: true,
      mealPlan: 'Full board with Mediterranean cyclist nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Greek', 'English'],
      emergencyProtocol: '24/7 emergency line, University Hospital of Heraklion 10 min away'
    }
  },
  {
    id: 'moravia-cycling-center',
    name: 'Moravia Cycling Center',
    country: 'Czech Republic',
    countryFlag: '🇨🇿',
    city: 'Brno',
    lat: 49.1951,
    lng: 16.6068,
    website: 'https://www.moraviacycling.cz',
    contact: '+420 541 234 567',
    contactEmail: 'info@moraviacycling.cz',
    description: 'Ride through the rolling vineyards and charming villages of South Moravia, combining world-class cycling training with Czech wine country culture and affordable European excellence.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beaches — landlocked location with scenic Brno Reservoir lake swimming 8 km away' },
    priceRange: { from: 600, to: 1400, unit: 'week', display: '€600 - €1,400/week' },
    socialMedia: { instagram: '@moraviacycling', facebook: 'https://facebook.com/moraviacyclingcenter', twitter: '@moraviacycle' },
    climate: 'brno',
    facilities: 'Indoor training studio, bike fitting lab, sports science center, video analysis, strength gym, bike workshop, recovery sauna',
    courtSurfaces: ['Road cycling', 'Climbing', 'Gravel', 'Cyclocross'],
    programs: [
      { name: 'Wine Country Road Camp', price: '€900/week', desc: 'Ride through the picturesque Moravian wine trails, rolling vineyards, and scenic valleys with structured training' },
      { name: 'Czech Gravel Adventure', price: '€800/week', desc: 'Explore Moravia\'s extensive gravel network through forests, villages, and vineyard paths' },
      { name: 'Race Preparation Intensive', price: '€1,100/week', desc: 'Structured race training on the roads of the Czech Cycling Tour, interval sessions, and race tactics' }
    ],
    coaches: [
      { name: 'Tomáš Novák', credential: 'Czech Cycling Federation A License', background: 'Former Czech national team rider, stage winner in Tour of Czech Republic, 12 years coaching experience', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Czech', 'English', 'German'], instagram: null },
      { name: 'Petra Dvořáková', credential: 'UCI Level 2 Coach', background: 'Sports science PhD from Masaryk University, specializing in cycling biomechanics and female athlete performance', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Czech', 'English'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=800', 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800'],
    upcomingCamps: [
      { name: 'Summer Road Camp', startDate: '2026-06-22', endDate: '2026-06-29', price: '€900', level: 'All Levels' },
      { name: 'Spring Gravel Camp', startDate: '2026-04-13', endDate: '2026-04-20', price: '€800', level: 'All Levels' },
      { name: 'Autumn Wine Country Rides', startDate: '2026-09-28', endDate: '2026-10-05', price: '€850', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Brno City Hotel', pricePerWeek: 350, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Shared Cyclist Pension', pricePerWeek: 200, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Affordable Moravian accommodation. Czech cuisine with local wine tasting and cyclist nutrition included.'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-04-01',
      spotsLeft: 16,
      responseTime: '24h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 14,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Online schooling support available',
      medicalStaff: true,
      safeguarding: 'Czech child protection standards applied',
      airportPickup: true,
      mealPlan: 'Full board with cyclist-specific nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Czech', 'English'],
      emergencyProtocol: '24/7 emergency line, University Hospital Brno 10 min away'
    }
  },
  {
    id: 'zakopane-cycling-academy',
    name: 'Zakopane Cycling Academy',
    country: 'Poland',
    countryFlag: '🇵🇱',
    city: 'Zakopane',
    lat: 49.2992,
    lng: 19.9496,
    website: 'https://www.zakoplanecycling.pl',
    contact: '+48 18 234 5678',
    contactEmail: 'info@zakoplanecycling.pl',
    description: 'Train in the shadow of the Tatra Mountains, Poland\'s premier mountain cycling destination offering brutal climbs, stunning alpine scenery, and Eastern European grit at accessible prices.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beaches — mountain location with Morskie Oko alpine lake 20 km away' },
    priceRange: { from: 500, to: 1200, unit: 'week', display: '€500 - €1,200/week' },
    socialMedia: { instagram: '@zakoplanecycling', facebook: 'https://facebook.com/zakoplanecyclingacademy', twitter: '@tatracycle' },
    climate: 'zakopane',
    facilities: 'Indoor training center, bike fitting studio, altitude training rooms, strength gym, sports medicine clinic, bike workshop, mountain bike trails',
    courtSurfaces: ['Road cycling', 'Climbing', 'Mountain biking', 'Gravel'],
    programs: [
      { name: 'Tatra Mountain Climbing Camp', price: '€800/week', desc: 'Tackle the legendary Tatra climbs with structured power training and altitude acclimatization' },
      { name: 'Polish Road Racing Camp', price: '€700/week', desc: 'Train on Tour de Pologne stage roads, race simulation, and group tactics in mountain terrain' },
      { name: 'MTB & Road Combo', price: '€900/week', desc: 'Combine road cycling with mountain biking on Tatra trails, building all-round cycling fitness' }
    ],
    coaches: [
      { name: 'Jakub Kowalski', credential: 'Polish Cycling Federation A License', background: 'Former Polish national team cyclist, Tour de Pologne stage finisher, 10 years coaching with national development programs', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Polish', 'English', 'German'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=800', 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800'],
    upcomingCamps: [
      { name: 'Summer Mountain Camp', startDate: '2026-07-06', endDate: '2026-07-13', price: '€800', level: 'Advanced' },
      { name: 'Spring Road Camp', startDate: '2026-05-11', endDate: '2026-05-18', price: '€700', level: 'Intermediate' },
      { name: 'Autumn MTB Adventure', startDate: '2026-09-21', endDate: '2026-09-28', price: '€900', level: 'All Levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Tatra Mountain Lodge', pricePerWeek: 300, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Shared Mountain Hostel', pricePerWeek: 180, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Mountain lodge accommodation with heated bike storage. Traditional Polish mountain cuisine and cyclist nutrition included.'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-05-01',
      spotsLeft: 12,
      responseTime: '24h',
      privateLessons: true,
      yearRound: false
    },
    juniorInfo: {
      minAge: 14,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Online schooling support available',
      medicalStaff: true,
      safeguarding: 'Polish child protection regulations applied',
      airportPickup: true,
      mealPlan: 'Full board with mountain cyclist nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Polish', 'English'],
      emergencyProtocol: '24/7 emergency line, Szpital Powiatowy Zakopane 5 min away'
    }
  },
  {
    id: 'transylvania-cycling-center',
    name: 'Transylvania Cycling Center',
    country: 'Romania',
    countryFlag: '🇷🇴',
    city: 'Brașov',
    lat: 45.6427,
    lng: 25.5887,
    website: 'https://www.transylvaniacycling.ro',
    contact: '+40 268 234 567',
    contactEmail: 'info@transylvaniacycling.ro',
    description: 'Ride through the dramatic Carpathian Mountains and medieval Transylvanian villages, where challenging mountain passes meet pristine forests and one of Europe\'s last true wilderness cycling experiences.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beaches — Carpathian mountain location with scenic mountain lakes nearby' },
    priceRange: { from: 500, to: 1100, unit: 'week', display: '€500 - €1,100/week' },
    socialMedia: { instagram: '@transylvaniacycling', facebook: 'https://facebook.com/transylvaniacyclingcenter', twitter: '@carpathiancycle' },
    climate: 'brasov',
    facilities: 'Indoor training center, bike workshop, sports science lab, video analysis, strength gym, mountain bike trails, forest recovery walks',
    courtSurfaces: ['Road cycling', 'Climbing', 'Mountain biking', 'Gravel'],
    programs: [
      { name: 'Carpathian Mountain Camp', price: '€750/week', desc: 'Conquer the Transfăgărășan and Transalpina, two of Europe\'s most spectacular mountain roads' },
      { name: 'Transylvanian Explorer', price: '€650/week', desc: 'Multi-day rides through medieval villages, fortified churches, and rolling Transylvanian countryside' },
      { name: 'MTB Wilderness Camp', price: '€800/week', desc: 'Mountain biking through Carpathian forests, bear country trails, and technical singletrack' }
    ],
    coaches: [
      { name: 'Alexandru Popescu', credential: 'Romanian Cycling Federation A License', background: 'Former Romanian national road champion, Giro d\'Italia participant, 8 years coaching with national cycling program', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Romanian', 'English', 'French'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=800', 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800'],
    upcomingCamps: [
      { name: 'Summer Carpathian Camp', startDate: '2026-07-13', endDate: '2026-07-20', price: '€750', level: 'Intermediate' },
      { name: 'Spring Road Camp', startDate: '2026-05-04', endDate: '2026-05-11', price: '€650', level: 'All Levels' },
      { name: 'Autumn MTB Explorer', startDate: '2026-09-14', endDate: '2026-09-21', price: '€800', level: 'All Levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Transylvanian Guesthouse', pricePerWeek: 250, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Shared Mountain Lodge', pricePerWeek: 150, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Charming Transylvanian accommodation in historic Brașov. Traditional Romanian cuisine with local produce and cyclist nutrition.'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-05-01',
      spotsLeft: 14,
      responseTime: '24h',
      privateLessons: true,
      yearRound: false
    },
    juniorInfo: {
      minAge: 14,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Online schooling support available',
      medicalStaff: true,
      safeguarding: 'Romanian child protection standards applied',
      airportPickup: true,
      mealPlan: 'Full board with Romanian cyclist nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Romanian', 'English'],
      emergencyProtocol: '24/7 emergency line, Spitalul Județean Brașov 10 min away'
    }
  },
  {
    id: 'antalya-cycling-academy',
    name: 'Antalya Cycling Academy',
    country: 'Turkey',
    countryFlag: '🇹🇷',
    city: 'Antalya',
    lat: 36.8969,
    lng: 30.7133,
    website: 'https://www.antalyacycling.com.tr',
    contact: '+90 242 234 5678',
    contactEmail: 'info@antalyacycling.com.tr',
    description: 'Year-round cycling paradise on the Turkish Riviera, offering Mediterranean coastal rides, challenging Taurus Mountain climbs, and ancient Lycian Way routes at exceptional value.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 1, description: 'Konyaaltı Beach directly adjacent to training base, Mediterranean Sea swimming year-round' },
    priceRange: { from: 500, to: 1200, unit: 'week', display: '€500 - €1,200/week' },
    socialMedia: { instagram: '@antalyacycling', facebook: 'https://facebook.com/antalyacyclingacademy', twitter: '@antalyacycle' },
    climate: 'antalya-cycling',
    facilities: 'Outdoor training circuits, bike fitting studio, sports science center, video analysis, strength gym, Mediterranean recovery swimming, bike workshop',
    courtSurfaces: ['Road cycling', 'Climbing', 'Time trial', 'Gravel'],
    programs: [
      { name: 'Turkish Riviera Camp', price: '€800/week', desc: 'Ride the stunning Mediterranean coast from Antalya to Kaş, combining seaside cycling with Taurus Mountain climbs' },
      { name: 'Taurus Mountain Climbing', price: '€1,000/week', desc: 'Tackle epic Taurus Mountain passes rising from sea level to 2,000m, structured climbing and altitude training' },
      { name: 'Winter Sun Training Camp', price: '€700/week', desc: 'Escape European winter with warm Mediterranean rides, base building, and endurance training in 15-20°C weather' }
    ],
    coaches: [
      { name: 'Ahmet Yılmaz', credential: 'Turkish Cycling Federation A License', background: 'Former Turkish national team cyclist, Presidential Tour of Turkey stage finisher, 11 years coaching experience', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Turkish', 'English', 'German'], instagram: null },
      { name: 'Elif Demir', credential: 'UCI Level 2 Coach', background: 'Sports science graduate, specializing in endurance coaching and altitude training for cyclists', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Turkish', 'English'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=800', 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800'],
    upcomingCamps: [
      { name: 'Spring Coastal Camp', startDate: '2026-03-23', endDate: '2026-03-30', price: '€800', level: 'All Levels' },
      { name: 'Autumn Mountain Camp', startDate: '2026-10-12', endDate: '2026-10-19', price: '€1,000', level: 'Intermediate' },
      { name: 'Winter Sun Camp', startDate: '2027-01-11', endDate: '2027-01-18', price: '€700', level: 'All Levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Mediterranean Cycling Hotel', pricePerWeek: 350, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Shared Cyclist Apartment', pricePerWeek: 200, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Beachside accommodation with Mediterranean views. Turkish cuisine with fresh local produce and cyclist nutrition included.'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-03-01',
      spotsLeft: 20,
      responseTime: '24h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 14,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Online schooling support available',
      medicalStaff: true,
      safeguarding: 'Turkish child protection regulations applied',
      airportPickup: true,
      mealPlan: 'Full board with Mediterranean cyclist nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Turkish', 'English'],
      emergencyProtocol: '24/7 emergency line, Antalya Eğitim ve Araştırma Hastanesi 10 min away'
    }
  },
  {
    id: 'cycling-ireland-academy-wicklow',
    name: 'Cycling Ireland Academy',
    country: 'Ireland',
    countryFlag: '🇮🇪',
    city: 'Wicklow',
    lat: 52.9808,
    lng: -6.0444,
    website: 'https://www.cyclingireland.ie',
    contact: '+353 1 855 1522',
    contactEmail: 'academy@cyclingireland.ie',
    description: 'The national governing body\'s official academy in the Wicklow Mountains, known as the Garden of Ireland. Offering mountain cycling training on world-class terrain with challenging climbs, forest trails, and coastal routes.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 5, description: 'Wicklow coastline with Brittas Bay and Silver Strand nearby' },
    priceRange: { from: 700, to: 1600, unit: 'week', display: '€700 - €1,600/week' },
    socialMedia: { instagram: '@cyclingireland', facebook: 'https://facebook.com/cyclingireland', twitter: '@CyclingIreland' },
    climate: 'wicklow',
    facilities: 'Mountain cycling trails, road cycling routes through Wicklow Mountains, bike fitting studio, video analysis, strength gym, recovery room, bike workshop',
    courtSurfaces: ['Road cycling', 'Mountain cycling', 'Climbing', 'Gravel'],
    programs: [
      { name: 'Wicklow Mountain Camp', price: '€1,000/week', desc: 'Ride the iconic Wicklow Gap, Sally Gap and Lugnaquilla climbs with structured training and power analysis' },
      { name: 'Junior Development Program', price: '€700/week', desc: 'Progressive cycling training for young riders aged 14-18, road and mountain disciplines' },
      { name: 'Endurance Base Camp', price: '€900/week', desc: 'Long-distance endurance training on scenic Wicklow routes, base building and nutrition planning' }
    ],
    coaches: [
      { name: 'Neill Delahaye', credential: 'Cycling Ireland Level 3 Coach', background: 'Former professional cyclist, multiple national championship medalist, 12 years coaching experience', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Irish'], instagram: null },
      { name: 'Orla Walsh', credential: 'UCI Level 2 Coach', background: 'Former Irish national team cyclist, specialist in mountain and endurance coaching for women', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Irish'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=800', 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800'],
    upcomingCamps: [
      { name: 'Summer Mountain Camp', startDate: '2026-07-06', endDate: '2026-07-13', price: '€1,000', level: 'Intermediate' },
      { name: 'Spring Endurance Block', startDate: '2026-04-13', endDate: '2026-04-20', price: '€900', level: 'All Levels' },
      { name: 'Autumn Climbing Camp', startDate: '2026-10-05', endDate: '2026-10-12', price: '€1,000', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Wicklow Cycling Lodge', pricePerWeek: 450, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Shared Cyclist Cottage', pricePerWeek: 280, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Accommodation in the Wicklow Mountains with secure bike storage. Irish cuisine and cyclist nutrition included.'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-04-01',
      spotsLeft: 12,
      responseTime: '24h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 14,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Online schooling support available',
      medicalStaff: true,
      safeguarding: 'Cycling Ireland child protection policies, Garda-vetted coaches',
      airportPickup: true,
      mealPlan: 'Full board with cyclist-specific nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Irish'],
      emergencyProtocol: '24/7 emergency line, St Vincent\'s Hospital Wicklow 15 min away'
    }
  },
  {
    id: 'antalya-cycling-camp',
    name: 'Antalya Cycling Camp',
    country: 'Turkey',
    countryFlag: '',
    city: 'Antalya',
    lat: 36.8969,
    lng: 30.7133,
    website: 'https://www.antalyacyclingcamp.com.tr',
    contact: '+90 242 345 6789',
    contactEmail: 'info@antalyacyclingcamp.com.tr',
    description: 'Premier cycling camp on the Tour of Turkey route, offering Mediterranean coastal rides and challenging Taurus Mountain climbs. Year-round warm weather makes Antalya a favourite European pro team training destination.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 2, description: 'Mediterranean beaches within easy reach of training base' },
    priceRange: { from: 500, to: 1300, unit: 'week', display: '500 - 1,300/week' },
    socialMedia: { instagram: '@antalyacyclingcamp', facebook: 'https://facebook.com/antalyacyclingcamp', twitter: '@antalyacyclecamp' },
    climate: 'antalya-camp',
    facilities: 'Road cycling routes, bike fitting studio, mechanics workshop, gym, sports science lab, recovery swimming pool, nutrition kitchen',
    courtSurfaces: ['Road cycling', 'Climbing', 'Time trial', 'Gravel'],
    programs: [
      { name: 'Tour of Turkey Route Camp', price: '1,100/week', desc: 'Ride the official Tour of Turkey race routes along the Mediterranean coast and into the Taurus Mountains' },
      { name: 'Mountain Climbing Camp', price: '1,300/week', desc: 'Structured climbing training on Taurus Mountain passes with altitude and power-based coaching' },
      { name: 'Winter Base Training', price: '500/week', desc: 'Off-season base building with endurance rides in 15-20C Mediterranean winter weather' }
    ],
    coaches: [
      { name: 'Kemal Yılmaz', credential: 'UCI Level 2 Coach', background: 'Former Tour of Turkey stage winner and Turkish road champion with 10 years coaching experience', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Turkish', 'English'], instagram: null },
      { name: 'Selin Arslan', credential: 'Turkish Cycling Federation A License', background: 'Former Turkish national women\'s team cyclist specializing in endurance and climbing coaching', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Turkish', 'English', 'German'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=800', 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800'],
    upcomingCamps: [
      { name: 'Spring Mediterranean Camp', startDate: '2026-03-23', endDate: '2026-03-30', price: '1,100', level: 'All Levels' },
      { name: 'Autumn Mountain Camp', startDate: '2026-10-12', endDate: '2026-10-19', price: '€1,300', level: 'Intermediate' },
      { name: 'Winter Sun Camp', startDate: '2027-01-11', endDate: '2027-01-18', price: '500', level: 'All Levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Mediterranean Cycling Hotel', pricePerWeek: 350, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Shared Cyclist Apartment', pricePerWeek: 200, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Beachside accommodation with Mediterranean views and cyclist nutrition included'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-03-01',
      spotsLeft: 18,
      responseTime: '24h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 14,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Online schooling support available',
      medicalStaff: true,
      safeguarding: 'Turkish child protection regulations applied',
      airportPickup: true,
      mealPlan: 'Full board with Mediterranean cyclist nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Turkish', 'English'],
      emergencyProtocol: '24/7 emergency line, Antalya hospital 10 min away'
    }
  },
  {
    id: 'serbian-cycling-academy',
    name: 'Serbian Cycling Academy',
    country: 'Serbia',
    countryFlag: '🇷🇸',
    city: 'Zlatibor',
    lat: 43.7310,
    lng: 19.7030,
    website: 'https://www.serbiancycling.rs',
    contact: '+381 31 841 234',
    contactEmail: 'info@serbiancycling.rs',
    description: 'A mountain cycling academy in Zlatibor, offering altitude training in Serbia\'s stunning western highlands with challenging climbs and beautiful scenery.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby, mountain lakes and rivers for recovery' },
    priceRange: { from: 400, to: 1100, unit: 'week', display: '€400 - €1,100/week' },
    socialMedia: { instagram: '@serbiancycling', facebook: 'https://facebook.com/serbiancycling', twitter: '@serbiancycling' },
    climate: 'zlatibor',
    facilities: 'Cycling centre, bike workshop, altitude training routes, indoor training room with smart trainers, gym, recovery centre, bike fitting studio',
    courtSurfaces: ['Mountain roads', 'Hill climbs', 'Time trial course', 'Gravel trails'],
    programs: [
      { name: 'Mountain Cycling Intensive', price: '€900/week', desc: 'Altitude training on challenging Serbian mountain roads and climbs' },
      { name: 'Youth Cycling Development', price: '€400/week', desc: 'Skills and fitness development for young cyclists in a mountain environment' }
    ],
    coaches: [
      { name: 'Dragan Kovačević', credential: 'UCI Level 2 Coach', background: 'Former Serbian national road team rider and mountain stage specialist', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Serbian', 'English'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=800'],
    upcomingCamps: [
      { name: 'Zlatibor Altitude Camp', startDate: '2026-06-15', endDate: '2026-06-22', price: '€900', level: 'Intermediate-Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Zlatibor Mountain Hotel', pricePerWeek: 250, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Mountain hotel at 1000m altitude with panoramic views and cycling storage'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-05-15',
      spotsLeft: 16,
      responseTime: '48h',
      privateLessons: true,
      yearRound: false
    },
    juniorInfo: {
      minAge: 14,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Online schooling support available',
      medicalStaff: true,
      safeguarding: 'Serbian Cycling Federation child protection protocols',
      airportPickup: true,
      mealPlan: 'Full board with Serbian mountain cuisine and cyclist nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Serbian', 'English'],
      emergencyProtocol: 'On-site first aid, Zlatibor General Hospital 10 minutes'
    }
  }
];

const CLIMATE_DATA = {
  mallorca: { spring: { tempHigh: 21, tempLow: 11, rainDays: 5, sunshine: 8 }, summer: { tempHigh: 31, tempLow: 21, rainDays: 2, sunshine: 11 }, autumn: { tempHigh: 22, tempLow: 13, rainDays: 7, sunshine: 7 }, winter: { tempHigh: 15, tempLow: 6, rainDays: 7, sunshine: 5 } },
  girona: { spring: { tempHigh: 20, tempLow: 9, rainDays: 7, sunshine: 7 }, summer: { tempHigh: 30, tempLow: 18, rainDays: 4, sunshine: 10 }, autumn: { tempHigh: 20, tempLow: 11, rainDays: 8, sunshine: 6 }, winter: { tempHigh: 12, tempLow: 3, rainDays: 5, sunshine: 5 } },
  nice: { spring: { tempHigh: 18, tempLow: 10, rainDays: 6, sunshine: 8 }, summer: { tempHigh: 28, tempLow: 20, rainDays: 3, sunshine: 11 }, autumn: { tempHigh: 20, tempLow: 12, rainDays: 7, sunshine: 7 }, winter: { tempHigh: 13, tempLow: 5, rainDays: 5, sunshine: 5 } },
  pyrenees: { spring: { tempHigh: 14, tempLow: 4, rainDays: 10, sunshine: 6 }, summer: { tempHigh: 25, tempLow: 13, rainDays: 7, sunshine: 9 }, autumn: { tempHigh: 15, tempLow: 6, rainDays: 9, sunshine: 5 }, winter: { tempHigh: 7, tempLow: -1, rainDays: 8, sunshine: 4 } },
  tuscany: { spring: { tempHigh: 20, tempLow: 9, rainDays: 8, sunshine: 7 }, summer: { tempHigh: 32, tempLow: 18, rainDays: 3, sunshine: 10 }, autumn: { tempHigh: 20, tempLow: 10, rainDays: 8, sunshine: 6 }, winter: { tempHigh: 11, tempLow: 2, rainDays: 7, sunshine: 4 } },
  dolomites: { spring: { tempHigh: 14, tempLow: 3, rainDays: 9, sunshine: 6 }, summer: { tempHigh: 24, tempLow: 12, rainDays: 10, sunshine: 8 }, autumn: { tempHigh: 13, tempLow: 4, rainDays: 8, sunshine: 5 }, winter: { tempHigh: 4, tempLow: -5, rainDays: 6, sunshine: 4 } },
  flanders: { spring: { tempHigh: 14, tempLow: 5, rainDays: 11, sunshine: 6 }, summer: { tempHigh: 22, tempLow: 13, rainDays: 10, sunshine: 7 }, autumn: { tempHigh: 14, tempLow: 7, rainDays: 12, sunshine: 4 }, winter: { tempHigh: 7, tempLow: 1, rainDays: 13, sunshine: 2 } },
  apeldoorn: { spring: { tempHigh: 14, tempLow: 4, rainDays: 10, sunshine: 6 }, summer: { tempHigh: 22, tempLow: 12, rainDays: 10, sunshine: 7 }, autumn: { tempHigh: 13, tempLow: 6, rainDays: 11, sunshine: 4 }, winter: { tempHigh: 6, tempLow: 0, rainDays: 12, sunshine: 2 } },
  algarve: { spring: { tempHigh: 21, tempLow: 12, rainDays: 5, sunshine: 9 }, summer: { tempHigh: 30, tempLow: 20, rainDays: 0, sunshine: 12 }, autumn: { tempHigh: 22, tempLow: 14, rainDays: 5, sunshine: 8 }, winter: { tempHigh: 16, tempLow: 8, rainDays: 7, sunshine: 6 } },
  aigle: { spring: { tempHigh: 16, tempLow: 5, rainDays: 9, sunshine: 6 }, summer: { tempHigh: 26, tempLow: 14, rainDays: 9, sunshine: 8 }, autumn: { tempHigh: 16, tempLow: 6, rainDays: 8, sunshine: 5 }, winter: { tempHigh: 6, tempLow: -1, rainDays: 8, sunshine: 3 } },
  ljubljana: { spring: { tempHigh: 17, tempLow: 6, rainDays: 11, sunshine: 6 }, summer: { tempHigh: 27, tempLow: 15, rainDays: 10, sunshine: 8 }, autumn: { tempHigh: 16, tempLow: 7, rainDays: 10, sunshine: 5 }, winter: { tempHigh: 5, tempLow: -2, rainDays: 9, sunshine: 3 } },
  andorra: { spring: { tempHigh: 13, tempLow: 3, rainDays: 10, sunshine: 7 }, summer: { tempHigh: 24, tempLow: 12, rainDays: 8, sunshine: 9 }, autumn: { tempHigh: 13, tempLow: 4, rainDays: 9, sunshine: 6 }, winter: { tempHigh: 5, tempLow: -3, rainDays: 7, sunshine: 5 } },
  munich: { spring: { tempHigh: 16, tempLow: 4, rainDays: 10, sunshine: 6 }, summer: { tempHigh: 25, tempLow: 13, rainDays: 12, sunshine: 8 }, autumn: { tempHigh: 15, tempLow: 5, rainDays: 9, sunshine: 5 }, winter: { tempHigh: 4, tempLow: -3, rainDays: 10, sunshine: 3 } },
  innsbruck: { spring: { tempHigh: 15, tempLow: 3, rainDays: 10, sunshine: 6 }, summer: { tempHigh: 25, tempLow: 13, rainDays: 12, sunshine: 8 }, autumn: { tempHigh: 14, tempLow: 4, rainDays: 8, sunshine: 5 }, winter: { tempHigh: 4, tempLow: -4, rainDays: 8, sunshine: 3 } },
  surrey: { spring: { tempHigh: 14, tempLow: 5, rainDays: 10, sunshine: 6 }, summer: { tempHigh: 22, tempLow: 12, rainDays: 8, sunshine: 7 }, autumn: { tempHigh: 14, tempLow: 7, rainDays: 11, sunshine: 4 }, winter: { tempHigh: 8, tempLow: 2, rainDays: 12, sunshine: 2 } },
  'copenhagen-cycling': { spring: { tempHigh: 12, tempLow: 3, rainDays: 9, sunshine: 6 }, summer: { tempHigh: 22, tempLow: 13, rainDays: 9, sunshine: 8 }, autumn: { tempHigh: 12, tempLow: 5, rainDays: 11, sunshine: 4 }, winter: { tempHigh: 4, tempLow: -1, rainDays: 12, sunshine: 1 } },
  bergen: { spring: { tempHigh: 11, tempLow: 3, rainDays: 15, sunshine: 5 }, summer: { tempHigh: 19, tempLow: 11, rainDays: 14, sunshine: 6 }, autumn: { tempHigh: 12, tempLow: 5, rainDays: 18, sunshine: 3 }, winter: { tempHigh: 5, tempLow: 0, rainDays: 17, sunshine: 1 } },
  wicklow: { spring: { tempHigh: 12, tempLow: 4, rainDays: 12, sunshine: 5 }, summer: { tempHigh: 19, tempLow: 11, rainDays: 10, sunshine: 6 }, autumn: { tempHigh: 13, tempLow: 6, rainDays: 13, sunshine: 4 }, winter: { tempHigh: 8, tempLow: 2, rainDays: 14, sunshine: 2 } },
  istria: { spring: { tempHigh: 18, tempLow: 9, rainDays: 8, sunshine: 7 }, summer: { tempHigh: 29, tempLow: 19, rainDays: 4, sunshine: 10 }, autumn: { tempHigh: 19, tempLow: 11, rainDays: 8, sunshine: 6 }, winter: { tempHigh: 10, tempLow: 3, rainDays: 8, sunshine: 4 } },
  crete: { spring: { tempHigh: 21, tempLow: 12, rainDays: 4, sunshine: 9 }, summer: { tempHigh: 30, tempLow: 22, rainDays: 0, sunshine: 12 }, autumn: { tempHigh: 23, tempLow: 15, rainDays: 4, sunshine: 8 }, winter: { tempHigh: 15, tempLow: 8, rainDays: 8, sunshine: 5 } },
  brno: { spring: { tempHigh: 16, tempLow: 5, rainDays: 9, sunshine: 6 }, summer: { tempHigh: 26, tempLow: 14, rainDays: 9, sunshine: 8 }, autumn: { tempHigh: 15, tempLow: 5, rainDays: 8, sunshine: 5 }, winter: { tempHigh: 3, tempLow: -3, rainDays: 8, sunshine: 2 } },
  zakopane: { spring: { tempHigh: 12, tempLow: 1, rainDays: 12, sunshine: 5 }, summer: { tempHigh: 22, tempLow: 10, rainDays: 13, sunshine: 7 }, autumn: { tempHigh: 12, tempLow: 3, rainDays: 10, sunshine: 4 }, winter: { tempHigh: 1, tempLow: -7, rainDays: 10, sunshine: 3 } },
  brasov: { spring: { tempHigh: 15, tempLow: 3, rainDays: 11, sunshine: 6 }, summer: { tempHigh: 25, tempLow: 12, rainDays: 11, sunshine: 8 }, autumn: { tempHigh: 15, tempLow: 4, rainDays: 8, sunshine: 5 }, winter: { tempHigh: 2, tempLow: -6, rainDays: 8, sunshine: 3 } },
  'antalya-cycling': { spring: { tempHigh: 22, tempLow: 11, rainDays: 5, sunshine: 9 }, summer: { tempHigh: 34, tempLow: 22, rainDays: 1, sunshine: 12 }, autumn: { tempHigh: 24, tempLow: 14, rainDays: 4, sunshine: 8 }, winter: { tempHigh: 15, tempLow: 6, rainDays: 9, sunshine: 5 } },
  'antalya-camp': { spring: { tempHigh: 22, tempLow: 11, rainDays: 5, sunshine: 9 }, summer: { tempHigh: 34, tempLow: 22, rainDays: 1, sunshine: 12 }, autumn: { tempHigh: 24, tempLow: 14, rainDays: 4, sunshine: 8 }, winter: { tempHigh: 15, tempLow: 6, rainDays: 9, sunshine: 5 } },
  zlatibor: { spring: { tempHigh: 14, tempLow: 2, rainDays: 11, sunshine: 6 }, summer: { tempHigh: 22, tempLow: 10, rainDays: 10, sunshine: 8 }, autumn: { tempHigh: 13, tempLow: 3, rainDays: 9, sunshine: 5 }, winter: { tempHigh: 2, tempLow: -6, rainDays: 9, sunshine: 3 } }
};

const NEWS_ITEMS = [
  { date: '2025-06-01', title: 'New Wind Tunnel Partnership Announced', summary: 'Mallorca Cycling Center partners with local university for advanced aerodynamic testing available to all camp participants.' },
  { date: '2025-05-15', title: 'Girona Pro Experience Sells Out', summary: 'The popular Pro Experience Camp in Girona has sold out for July 2025. Additional dates being added for August.' },
  { date: '2025-05-01', title: 'Algarve Winter Sun Camps Expanded', summary: 'Due to growing demand, Algarve Cycling Camp adds new January and February camp dates for 2026 season.' },
  { date: '2025-04-20', title: 'Swiss Academy UCI Certification', summary: 'Swiss Cycling Academy receives official UCI satellite training center status for junior development programs.' },
  { date: '2025-04-10', title: 'Flanders Classics Preview Rides Open', summary: 'Flanders Cycling School now offers year-round Ronde van Vlaanderen recon rides on the famous cobbled climbs.' }
];

const COUNTRIES = ['Spain', 'France', 'Italy', 'Belgium', 'Netherlands', 'Portugal', 'Switzerland', 'Slovenia', 'Andorra', 'Germany', 'Austria', 'UK', 'Denmark', 'Norway', 'Ireland', 'Croatia', 'Greece', 'Czech Republic', 'Poland', 'Romania', 'Turkey', 'Serbia'];
