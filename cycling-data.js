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
  andorra: { spring: { tempHigh: 13, tempLow: 3, rainDays: 10, sunshine: 7 }, summer: { tempHigh: 24, tempLow: 12, rainDays: 8, sunshine: 9 }, autumn: { tempHigh: 13, tempLow: 4, rainDays: 9, sunshine: 6 }, winter: { tempHigh: 5, tempLow: -3, rainDays: 7, sunshine: 5 } }
};

const NEWS_ITEMS = [
  { date: '2025-06-01', title: 'New Wind Tunnel Partnership Announced', summary: 'Mallorca Cycling Center partners with local university for advanced aerodynamic testing available to all camp participants.' },
  { date: '2025-05-15', title: 'Girona Pro Experience Sells Out', summary: 'The popular Pro Experience Camp in Girona has sold out for July 2025. Additional dates being added for August.' },
  { date: '2025-05-01', title: 'Algarve Winter Sun Camps Expanded', summary: 'Due to growing demand, Algarve Cycling Camp adds new January and February camp dates for 2026 season.' },
  { date: '2025-04-20', title: 'Swiss Academy UCI Certification', summary: 'Swiss Cycling Academy receives official UCI satellite training center status for junior development programs.' },
  { date: '2025-04-10', title: 'Flanders Classics Preview Rides Open', summary: 'Flanders Cycling School now offers year-round Ronde van Vlaanderen recon rides on the famous cobbled climbs.' }
];

const COUNTRIES = ['Spain', 'France', 'Italy', 'Belgium', 'Netherlands', 'Portugal', 'Switzerland', 'Slovenia', 'Andorra'];
