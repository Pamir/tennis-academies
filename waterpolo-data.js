const SPORT_TYPE = 'waterpolo';

const ACADEMIES = [
  {
    id: 'budapest-aqua-academy',
    name: 'Budapest Aqua Academy',
    country: 'Hungary', countryFlag: '🇭🇺',
    city: 'Budapest', lat: 47.4979, lng: 19.0402,
    website: 'https://www.budapestaquaacademy.hu', contact: '+36 1 234 5678', contactEmail: 'info@budapestaquaacademy.hu',
    description: 'Elite water polo training in the heartland of Hungarian water polo, producing Olympic champions since 1990.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Landlocked city, no beach nearby' },
    priceRange: { from: 600, to: 1800, unit: 'week', display: '€600 - €1,800/week' },
    socialMedia: { instagram: '@budapestaquaacademy', facebook: 'https://facebook.com/budapestaquaacademy', twitter: '@bpaquaacademy' },
    climate: 'budapest',
    facilities: 'Olympic-size pool, training pool, underwater cameras, video analysis room, gym, recovery pools, sauna complex',
    courtSurfaces: ['Olympic pool', 'Training pool', 'Open water'],
    programs: [
      { name: 'Elite Water Polo Camp', price: '€1,200/week', desc: 'Intensive training with former Olympic coaches and players' },
      { name: 'Junior Development', price: '€800/week', desc: 'Skill-building program for young athletes aged 10-16' },
      { name: 'Goalkeeper Specialist', price: '€1,000/week', desc: 'Focused goalkeeper training with video analysis' }
    ],
    coaches: [
      { name: 'László Kovács', credential: 'Former Hungarian National Team Coach', background: '20 years coaching at international level, 3 Olympic cycles', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Hungarian', 'German'], instagram: null },
      { name: 'Anna Szabó', credential: 'Olympic Gold Medalist', background: 'Olympic champion 2004, transitioned to coaching elite juniors', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Hungarian'], instagram: '@annaszabo_wp' }
    ],
    photos: ['https://images.unsplash.com/photo-1560089000-7433a4ebbd64?w=800', 'https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=800'],
    upcomingCamps: [
      { name: 'Summer Elite Camp', startDate: '2025-07-01', endDate: '2025-07-12', price: '€1,500', level: 'Advanced' },
      { name: 'Junior Fundamentals', startDate: '2025-07-14', endDate: '2025-07-21', price: '€800', level: 'Beginner' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Partner Hotel Budapest', pricePerWeek: 500, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'dormitory', label: 'Academy Dormitory', pricePerWeek: 300, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'All accommodations within 10 minutes of the training facility'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-01',
      spotsLeft: 20, responseTime: '48h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 8, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Partnerships with local international schools',
      medicalStaff: true, safeguarding: 'DBS-checked coaches, child protection policy in place',
      airportPickup: true, mealPlan: 'Full board with sports nutrition options',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Hungarian', 'German'],
      emergencyProtocol: '24/7 on-call medical staff with hospital 5 minutes away'
    }
  },
  {
    id: 'szeged-waterpolo-centre',
    name: 'Szeged Water Polo Centre',
    country: 'Hungary', countryFlag: '🇭🇺',
    city: 'Szeged', lat: 46.253, lng: 20.1414,
    website: 'https://www.szegedwaterpolo.hu', contact: '+36 62 345 678', contactEmail: 'info@szegedwaterpolo.hu',
    description: 'World-class water polo training facility in southern Hungary, known for producing national team players.',
    ageGroups: ['Junior', 'Adult', 'Senior'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach; located on the Tisza river' },
    priceRange: { from: 450, to: 1200, unit: 'week', display: '€450 - €1,200/week' },
    socialMedia: { instagram: '@szegedwp', facebook: 'https://facebook.com/szegedwaterpolo', twitter: '@szegedwp' },
    climate: 'szeged',
    facilities: 'Olympic-size pool, training pool, underwater cameras, video analysis, gym, recovery pools, physiotherapy centre',
    courtSurfaces: ['Olympic pool', 'Training pool'],
    programs: [
      { name: 'Intensive Training Camp', price: '€900/week', desc: 'Full-day training with tactical and physical conditioning' },
      { name: 'Youth Academy', price: '€600/week', desc: 'Development program for talented young players' }
    ],
    coaches: [
      { name: 'Ferenc Tóth', credential: 'FINA Level 3 Coach', background: '15 years coaching experience at club and national level', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Hungarian'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1560089000-7433a4ebbd64?w=800'],
    upcomingCamps: [
      { name: 'Summer Training Camp', startDate: '2025-07-07', endDate: '2025-07-14', price: '€900', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Hotel Tisza', pricePerWeek: 350, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Quiet riverside location ideal for recovery'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-15',
      spotsLeft: 15, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 9, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Local school partnerships available',
      medicalStaff: true, safeguarding: 'Full safeguarding policy, background-checked staff',
      airportPickup: true, mealPlan: 'Full board with nutritionist-approved menus',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Hungarian'],
      emergencyProtocol: 'On-site medical team with direct hospital coordination'
    }
  },
  {
    id: 'belgrade-aquatic-academy',
    name: 'Belgrade Aquatic Academy',
    country: 'Serbia', countryFlag: '🇷🇸',
    city: 'Belgrade', lat: 44.7866, lng: 20.4489,
    website: 'https://www.belgradeaquatic.rs', contact: '+381 11 234 5678', contactEmail: 'info@belgradeaquatic.rs',
    description: 'Premier Serbian water polo academy with a tradition of excellence in European and world competitions.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No sea beach; river beaches on the Danube' },
    priceRange: { from: 400, to: 1100, unit: 'week', display: '€400 - €1,100/week' },
    socialMedia: { instagram: '@belgradeaquatic', facebook: 'https://facebook.com/belgradeaquatic', twitter: '@belgradewp' },
    climate: 'belgrade',
    facilities: 'Olympic-size pool, training pool, underwater cameras, video analysis, gym, recovery pools, sports medicine clinic',
    courtSurfaces: ['Olympic pool', 'Training pool', 'Open water'],
    programs: [
      { name: 'Pro Development Camp', price: '€850/week', desc: 'High-performance training for aspiring professional players' },
      { name: 'Beginner Water Polo', price: '€500/week', desc: 'Introduction to water polo fundamentals and water skills' }
    ],
    coaches: [
      { name: 'Dejan Savić', credential: 'Former National Team Captain', background: 'Multiple world championship medals, 18 years playing experience', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Serbian', 'Italian'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1560089000-7433a4ebbd64?w=800'],
    upcomingCamps: [
      { name: 'Balkan Water Polo Camp', startDate: '2025-07-01', endDate: '2025-07-08', price: '€850', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Hotel Belgrade Sport', pricePerWeek: 400, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Central Belgrade location with easy access to facilities'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-01',
      spotsLeft: 18, responseTime: '48h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 8, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'International school coordination available',
      medicalStaff: true, safeguarding: 'Comprehensive child protection protocols',
      airportPickup: true, mealPlan: 'Full board with traditional and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Serbian'],
      emergencyProtocol: 'On-site medical staff, hospital 10 minutes away'
    }
  },
  {
    id: 'novi-sad-polo-school',
    name: 'Novi Sad Polo School',
    country: 'Serbia', countryFlag: '🇷🇸',
    city: 'Novi Sad', lat: 45.2671, lng: 19.8335,
    website: 'https://www.novisadpolo.rs', contact: '+381 21 456 789', contactEmail: 'info@novisadpolo.rs',
    description: 'Dynamic training centre in Vojvodina producing top Serbian water polo talent.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: false,
    beach: { distance: null, description: 'No beach; Danube river nearby for open water training' },
    priceRange: { from: 350, to: 900, unit: 'week', display: '€350 - €900/week' },
    socialMedia: { instagram: '@novisadpolo', facebook: 'https://facebook.com/novisadpolo', twitter: '@nspolo' },
    climate: 'novi-sad',
    facilities: 'Olympic-size pool, training pool, underwater cameras, video analysis, gym, recovery pools',
    courtSurfaces: ['Olympic pool', 'Training pool', 'Open water'],
    programs: [
      { name: 'Summer Intensive', price: '€700/week', desc: 'Full-time summer training with matches and video review' },
      { name: 'Skills Clinic', price: '€450/week', desc: 'Focused skill development in shooting, passing, and positioning' }
    ],
    coaches: [
      { name: 'Milan Jovanović', credential: 'Serbian Water Polo Federation Level 2', background: '10 years coaching youth and senior teams', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Serbian', 'Hungarian'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1560089000-7433a4ebbd64?w=800'],
    upcomingCamps: [
      { name: 'Youth Development Camp', startDate: '2025-07-14', endDate: '2025-07-21', price: '€700', level: 'Beginner' }
    ],
    accommodation: {
      types: [
        { type: 'hostel', label: 'Sport Hostel Novi Sad', pricePerWeek: 250, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Budget-friendly accommodation near the pool complex'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-15',
      spotsLeft: 12, responseTime: '48h', privateLessons: true, yearRound: false
    },
    juniorInfo: {
      minAge: 10, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Summer-only program, no school coordination needed',
      medicalStaff: true, safeguarding: 'Background-checked staff, child protection policy',
      airportPickup: true, mealPlan: 'Full board provided',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Serbian', 'Hungarian'],
      emergencyProtocol: 'Medical staff on site during all training sessions'
    }
  },
  {
    id: 'dubrovnik-waterpolo-academy',
    name: 'Dubrovnik Water Polo Academy',
    country: 'Croatia', countryFlag: '🇭🇷',
    city: 'Dubrovnik', lat: 42.6507, lng: 18.0944,
    website: 'https://www.dubrovnikwaterpolo.hr', contact: '+385 20 345 678', contactEmail: 'info@dubrovnikwaterpolo.hr',
    description: 'Train in the Adriatic Sea alongside one of Croatia\'s most storied water polo traditions.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 0.2, description: 'Direct Adriatic Sea access for open water training' },
    priceRange: { from: 700, to: 2000, unit: 'week', display: '€700 - €2,000/week' },
    socialMedia: { instagram: '@dubrovnikwp', facebook: 'https://facebook.com/dubrovnikwaterpolo', twitter: '@dubrovnikwp' },
    climate: 'dubrovnik',
    facilities: 'Olympic-size pool, training pool, open water Adriatic training area, underwater cameras, video analysis, gym, recovery pools',
    courtSurfaces: ['Olympic pool', 'Training pool', 'Open water'],
    programs: [
      { name: 'Adriatic Elite Camp', price: '€1,500/week', desc: 'Premium training combining pool and open water sessions' },
      { name: 'Summer Youth Program', price: '€900/week', desc: 'Fun and competitive training for young players on the coast' }
    ],
    coaches: [
      { name: 'Josip Pavić', credential: 'Croatian National Team Assistant Coach', background: 'Olympic silver medalist, 15 years professional experience', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Croatian', 'Italian'], instagram: '@josippavic_wp' }
    ],
    photos: ['https://images.unsplash.com/photo-1560089000-7433a4ebbd64?w=800'],
    upcomingCamps: [
      { name: 'Adriatic Summer Camp', startDate: '2025-07-01', endDate: '2025-07-10', price: '€1,400', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Seaside Hotel Dubrovnik', pricePerWeek: 600, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Stunning Adriatic views from all rooms'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-01',
      spotsLeft: 16, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 8, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'International school partnerships during term time',
      medicalStaff: true, safeguarding: 'EU-compliant child safeguarding protocols',
      airportPickup: true, mealPlan: 'Full board with Mediterranean cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Croatian', 'Italian'],
      emergencyProtocol: 'On-call medical team, Dubrovnik General Hospital 15 minutes away'
    }
  },
  {
    id: 'split-aquatic-centre',
    name: 'Split Aquatic Centre',
    country: 'Croatia', countryFlag: '🇭🇷',
    city: 'Split', lat: 43.5081, lng: 16.4402,
    website: 'https://www.splitaquatic.hr', contact: '+385 21 567 890', contactEmail: 'info@splitaquatic.hr',
    description: 'Located on the Dalmatian coast, offering elite water polo training with Mediterranean lifestyle.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 0.3, description: 'Steps from the Adriatic Sea with beach training options' },
    priceRange: { from: 600, to: 1600, unit: 'week', display: '€600 - €1,600/week' },
    socialMedia: { instagram: '@splitaquatic', facebook: 'https://facebook.com/splitaquatic', twitter: '@splitaquatic' },
    climate: 'split',
    facilities: 'Olympic-size pool, training pool, underwater cameras, video analysis, gym, recovery pools, sea access',
    courtSurfaces: ['Olympic pool', 'Training pool', 'Open water'],
    programs: [
      { name: 'Dalmatian Pro Camp', price: '€1,200/week', desc: 'Professional-level training on the Croatian coast' },
      { name: 'Youth Introduction', price: '€700/week', desc: 'Introduction to competitive water polo for beginners' }
    ],
    coaches: [
      { name: 'Ivan Bušlje', credential: 'FINA Level 2 Coach', background: 'Former professional player with Champions League experience', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Croatian'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1560089000-7433a4ebbd64?w=800'],
    upcomingCamps: [
      { name: 'Coastal Training Week', startDate: '2025-07-07', endDate: '2025-07-14', price: '€1,100', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'apartment', label: 'Coastal Apartments Split', pricePerWeek: 450, maxOccupancy: 3, bathType: 'ensuite', mealsIncluded: false }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Self-catering apartments with sea views'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-15',
      spotsLeft: 14, responseTime: '48h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 9, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Online schooling support available',
      medicalStaff: true, safeguarding: 'Croatian Sport Federation safeguarding standards',
      airportPickup: true, mealPlan: 'Half board with healthy meal options',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Croatian'],
      emergencyProtocol: 'Hospital 10 minutes away, on-site first aid'
    }
  },
  {
    id: 'rome-waterpolo-institute',
    name: 'Rome Water Polo Institute',
    country: 'Italy', countryFlag: '🇮🇹',
    city: 'Rome', lat: 41.9028, lng: 12.4964,
    website: 'https://www.romewaterpolo.it', contact: '+39 06 789 0123', contactEmail: 'info@romewaterpolo.it',
    description: 'Premier Italian water polo academy in the Eternal City, blending sport with culture.',
    ageGroups: ['Junior', 'Adult', 'Masters'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 25, description: 'Ostia beach 25 km from the centre' },
    priceRange: { from: 700, to: 2000, unit: 'week', display: '€700 - €2,000/week' },
    socialMedia: { instagram: '@romewaterpolo', facebook: 'https://facebook.com/romewaterpolo', twitter: '@romewp' },
    climate: 'rome',
    facilities: 'Olympic-size pool, training pool, underwater cameras, video analysis, gym, recovery pools, Italian sports science lab',
    courtSurfaces: ['Olympic pool', 'Training pool'],
    programs: [
      { name: 'Roman Elite Camp', price: '€1,400/week', desc: 'Top-tier training with Italian national-level coaches' },
      { name: 'Masters Water Polo', price: '€800/week', desc: 'Competitive training for experienced adult players' }
    ],
    coaches: [
      { name: 'Marco Rossi', credential: 'Italian Olympic Committee Certified', background: 'Former Serie A1 player and Italian youth national team coach', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Italian', 'Spanish'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1560089000-7433a4ebbd64?w=800'],
    upcomingCamps: [
      { name: 'Italian Summer Camp', startDate: '2025-07-01', endDate: '2025-07-08', price: '€1,300', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Sport Hotel Roma', pricePerWeek: 550, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Located in the EUR district near Olympic facilities'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-01',
      spotsLeft: 20, responseTime: '48h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 8, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Italian international school partnerships',
      medicalStaff: true, safeguarding: 'CONI-certified safeguarding protocols',
      airportPickup: true, mealPlan: 'Full board Italian cuisine with sports nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Italian'],
      emergencyProtocol: 'On-site medical staff, Policlinico hospital 15 minutes away'
    }
  },
  {
    id: 'naples-aqua-club',
    name: 'Naples Aqua Club',
    country: 'Italy', countryFlag: '🇮🇹',
    city: 'Naples', lat: 40.8518, lng: 14.2681,
    website: 'https://www.naplesaquaclub.it', contact: '+39 081 234 5678', contactEmail: 'info@naplesaquaclub.it',
    description: 'Southern Italian water polo training with a passion for the sport and the sea.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 3, description: 'Naples waterfront and nearby beaches' },
    priceRange: { from: 500, to: 1400, unit: 'week', display: '€500 - €1,400/week' },
    socialMedia: { instagram: '@naplesaquaclub', facebook: 'https://facebook.com/naplesaquaclub', twitter: '@naplesaqua' },
    climate: 'naples',
    facilities: 'Olympic-size pool, training pool, underwater cameras, video analysis, gym, recovery pools',
    courtSurfaces: ['Olympic pool', 'Training pool', 'Open water'],
    programs: [
      { name: 'Mediterranean Camp', price: '€1,000/week', desc: 'Training camp with sea sessions and pool work' },
      { name: 'Junior Stars', price: '€650/week', desc: 'Youth development program in beautiful Naples' }
    ],
    coaches: [
      { name: 'Giuseppe Ferrara', credential: 'Italian Swimming Federation Coach', background: 'Former Serie A1 player, 12 years coaching experience', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Italian'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1560089000-7433a4ebbd64?w=800'],
    upcomingCamps: [
      { name: 'Neapolitan Summer Camp', startDate: '2025-07-14', endDate: '2025-07-21', price: '€950', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Hotel Vesuvio Sport', pricePerWeek: 450, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Waterfront hotel with pool views'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-15',
      spotsLeft: 12, responseTime: '48h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 8, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Summer program, school coordination on request',
      medicalStaff: true, safeguarding: 'Italian child protection standards met',
      airportPickup: true, mealPlan: 'Full board Italian meals',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Italian'],
      emergencyProtocol: 'Medical staff on site, hospital nearby'
    }
  },
  {
    id: 'barcelona-waterpolo-school',
    name: 'Barcelona Water Polo School',
    country: 'Spain', countryFlag: '🇪🇸',
    city: 'Barcelona', lat: 41.3851, lng: 2.1734,
    website: 'https://www.barcelonawaterpolo.es', contact: '+34 93 234 5678', contactEmail: 'info@barcelonawaterpolo.es',
    description: 'Spanish water polo excellence on the Mediterranean coast with world-class facilities.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 1, description: 'Barceloneta Beach 1 km from the academy' },
    priceRange: { from: 700, to: 1800, unit: 'week', display: '€700 - €1,800/week' },
    socialMedia: { instagram: '@barcelonawp', facebook: 'https://facebook.com/barcelonawaterpolo', twitter: '@barcelonawp' },
    climate: 'barcelona',
    facilities: 'Olympic-size pool, training pool, underwater cameras, video analysis, gym, recovery pools, sports science centre',
    courtSurfaces: ['Olympic pool', 'Training pool', 'Open water'],
    programs: [
      { name: 'Mediterranean Elite', price: '€1,400/week', desc: 'High-performance camp with Spanish league-level coaching' },
      { name: 'Beach & Pool Combo', price: '€900/week', desc: 'Unique blend of open water and pool training' }
    ],
    coaches: [
      { name: 'Carlos García', credential: 'Royal Spanish Swimming Federation Coach', background: 'Former Spanish national team player, European Championship medalist', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Spanish', 'Catalan'], instagram: '@carloswp' }
    ],
    photos: ['https://images.unsplash.com/photo-1560089000-7433a4ebbd64?w=800'],
    upcomingCamps: [
      { name: 'Barcelona Summer Camp', startDate: '2025-07-01', endDate: '2025-07-08', price: '€1,300', level: 'All levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Hotel Olympic Barcelona', pricePerWeek: 550, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Walking distance to the beach and training centre'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-01',
      spotsLeft: 18, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 8, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'International school coordination available',
      medicalStaff: true, safeguarding: 'Spanish child protection legislation compliant',
      airportPickup: true, mealPlan: 'Full board Mediterranean diet',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Spanish', 'Catalan'],
      emergencyProtocol: 'Hospital del Mar 10 minutes away, on-site medic'
    }
  },
  {
    id: 'madrid-aquatic-academy',
    name: 'Madrid Aquatic Academy',
    country: 'Spain', countryFlag: '🇪🇸',
    city: 'Madrid', lat: 40.4168, lng: -3.7038,
    website: 'https://www.madridaquatic.es', contact: '+34 91 345 6789', contactEmail: 'info@madridaquatic.es',
    description: 'Central Spain\'s leading water polo academy, training champions in the capital.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Landlocked city, no beach nearby' },
    priceRange: { from: 600, to: 1600, unit: 'week', display: '€600 - €1,600/week' },
    socialMedia: { instagram: '@madridaquatic', facebook: 'https://facebook.com/madridaquatic', twitter: '@madridaquatic' },
    climate: 'madrid',
    facilities: 'Olympic-size pool, training pool, underwater cameras, video analysis, gym, recovery pools, altitude training benefits',
    courtSurfaces: ['Olympic pool', 'Training pool'],
    programs: [
      { name: 'Capital City Camp', price: '€1,100/week', desc: 'Intensive training in Madrid\'s top aquatic centre' },
      { name: 'Technical Skills Workshop', price: '€750/week', desc: 'Focused work on shooting, passing, and game intelligence' }
    ],
    coaches: [
      { name: 'Alejandro López', credential: 'Spanish National Coach Certification', background: 'Former Division de Honor player, youth development specialist', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Spanish'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1560089000-7433a4ebbd64?w=800'],
    upcomingCamps: [
      { name: 'Madrid Summer Intensive', startDate: '2025-07-07', endDate: '2025-07-14', price: '€1,050', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Hotel Sport Madrid', pricePerWeek: 500, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Comfortable hotel near the M-30 ring road'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-01',
      spotsLeft: 16, responseTime: '48h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 8, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Bilingual school partnerships in Madrid',
      medicalStaff: true, safeguarding: 'Full compliance with Spanish safeguarding laws',
      airportPickup: true, mealPlan: 'Full board with Spanish cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Spanish'],
      emergencyProtocol: 'On-site medical support, major hospitals within 15 minutes'
    }
  },
  {
    id: 'athens-waterpolo-academy',
    name: 'Athens Water Polo Academy',
    country: 'Greece', countryFlag: '🇬🇷',
    city: 'Athens', lat: 37.9838, lng: 23.7275,
    website: 'https://www.athenswaterpolo.gr', contact: '+30 21 0345 6789', contactEmail: 'info@athenswaterpolo.gr',
    description: 'Train where water polo was born — Greece\'s premier academy in the Olympic city.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 8, description: 'Athens Riviera beaches within easy reach' },
    priceRange: { from: 550, to: 1500, unit: 'week', display: '€550 - €1,500/week' },
    socialMedia: { instagram: '@athenswp', facebook: 'https://facebook.com/athenswaterpolo', twitter: '@athenswp' },
    climate: 'athens',
    facilities: 'Olympic-size pool, training pool, underwater cameras, video analysis, gym, recovery pools, outdoor sea training',
    courtSurfaces: ['Olympic pool', 'Training pool', 'Open water'],
    programs: [
      { name: 'Olympian Camp', price: '€1,200/week', desc: 'Train at Olympic-standard facilities with Greek national coaches' },
      { name: 'Island Training Tour', price: '€1,500/week', desc: 'Unique program combining training with Greek island visits' }
    ],
    coaches: [
      { name: 'Nikos Papadopoulos', credential: 'Greek National Team Coach', background: 'Olympic bronze medalist, 20 years in professional water polo', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Greek', 'French'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1560089000-7433a4ebbd64?w=800'],
    upcomingCamps: [
      { name: 'Greek Summer Camp', startDate: '2025-07-01', endDate: '2025-07-10', price: '€1,200', level: 'All levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Athens Sport Hotel', pricePerWeek: 480, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Near the Olympic aquatic complex'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-01',
      spotsLeft: 22, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 8, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Greek international school partnerships',
      medicalStaff: true, safeguarding: 'EU child protection standards fully met',
      airportPickup: true, mealPlan: 'Full board Greek Mediterranean cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Greek'],
      emergencyProtocol: 'On-site medical staff, hospital within 10 minutes'
    }
  },
  {
    id: 'kotor-waterpolo-camp',
    name: 'Kotor Water Polo Camp',
    country: 'Montenegro', countryFlag: '🇲🇪',
    city: 'Kotor', lat: 42.4247, lng: 18.7712,
    website: 'https://www.kotorwaterpolo.me', contact: '+382 32 345 678', contactEmail: 'info@kotorwaterpolo.me',
    description: 'Picturesque Adriatic training camp in the stunning Bay of Kotor, home of Montenegrin water polo pride.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 0.1, description: 'Direct bay access for open water training' },
    priceRange: { from: 400, to: 1200, unit: 'week', display: '€400 - €1,200/week' },
    socialMedia: { instagram: '@kotorwp', facebook: 'https://facebook.com/kotorwaterpolo', twitter: '@kotorwp' },
    climate: 'kotor',
    facilities: 'Olympic-size pool, training pool, underwater cameras, video analysis, gym, recovery pools, bay open water area',
    courtSurfaces: ['Olympic pool', 'Training pool', 'Open water'],
    programs: [
      { name: 'Bay of Kotor Camp', price: '€900/week', desc: 'Unique training in one of the world\'s most beautiful bays' },
      { name: 'Montenegrin Youth Program', price: '€550/week', desc: 'Development program for young players in a stunning setting' }
    ],
    coaches: [
      { name: 'Aleksandar Ivović', credential: 'Montenegrin National Team Coach', background: 'World Championship silver medalist, professional career in Italy and Montenegro', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Montenegrin', 'Italian', 'Serbian'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1560089000-7433a4ebbd64?w=800'],
    upcomingCamps: [
      { name: 'Adriatic Bay Camp', startDate: '2025-07-01', endDate: '2025-07-08', price: '€900', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Hotel Cattaro', pricePerWeek: 400, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Historic Old Town hotel with bay views'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-15',
      spotsLeft: 10, responseTime: '48h', privateLessons: true, yearRound: false
    },
    juniorInfo: {
      minAge: 10, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Summer-only camp, no school coordination',
      medicalStaff: true, safeguarding: 'Full safeguarding measures in place',
      airportPickup: true, mealPlan: 'Full board with local Mediterranean cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Montenegrin', 'Serbian'],
      emergencyProtocol: 'Medical staff on site, Kotor hospital nearby'
    }
  },
  {
    id: 'steaua-waterpolo-academy',
    name: 'Steaua Water Polo Academy',
    country: 'Romania', countryFlag: '🇷🇴',
    city: 'Bucharest', lat: 44.4268, lng: 26.1025,
    website: 'https://www.steauawaterpolo.ro', contact: '+40 21 345 6789', contactEmail: 'info@steauawaterpolo.ro',
    description: 'Historic water polo academy rooted in Romania\'s proud sporting tradition, training the next generation of elite aquatic athletes in Bucharest.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Landlocked city, no beach nearby' },
    priceRange: { from: 400, to: 1200, unit: 'week', display: '€400 - €1,200/week' },
    socialMedia: { instagram: '@steauawp', facebook: 'https://facebook.com/steauawaterpolo', twitter: '@steauawp' },
    climate: 'bucharest',
    facilities: 'Olympic-size pool, training pool, underwater video analysis, strength and conditioning gym, recovery suite, sauna',
    courtSurfaces: ['Olympic pool', 'Training pool'],
    programs: [
      { name: 'Elite Water Polo Program', price: '€900/week', desc: 'High-performance training with video analysis and tactical sessions' },
      { name: 'Junior Development Camp', price: '€550/week', desc: 'Foundational skills for young swimmers transitioning to water polo' },
      { name: 'Goalkeeper Intensive', price: '€700/week', desc: 'Specialist goalkeeper training with dedicated coaching staff' }
    ],
    coaches: [
      { name: 'Mihai Popescu', credential: 'Romanian National Team Assistant Coach', background: '15 years coaching at national level, former professional player in Italy', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Romanian', 'Italian'], instagram: null },
      { name: 'Elena Dragomir', credential: 'European Championship Medalist', background: 'Former Romanian international, specialising in youth development', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Romanian', 'French'], instagram: '@elenadragomir_wp' }
    ],
    photos: ['https://images.unsplash.com/photo-1560089000-7433a4ebbd64?w=800', 'https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=800'],
    upcomingCamps: [
      { name: 'Spring Intensive Camp', startDate: '2026-04-06', endDate: '2026-04-17', price: '€1,100', level: 'Intermediate' },
      { name: 'Summer Junior Camp', startDate: '2026-07-13', endDate: '2026-07-24', price: '€700', level: 'Beginner' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Partner Hotel Bucharest', pricePerWeek: 350, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'dormitory', label: 'Academy Residence', pricePerWeek: 200, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Accommodations located near central Bucharest with good transport links'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-03-01',
      spotsLeft: 18, responseTime: '48h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 8, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Partnerships with local international schools',
      medicalStaff: true, safeguarding: 'Full safeguarding and child protection policy in place',
      airportPickup: true, mealPlan: 'Full board with balanced sports nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Romanian'],
      emergencyProtocol: '24/7 medical staff on site, hospital within 10 minutes'
    }
  },
  {
    id: 'montpellier-waterpolo-centre',
    name: 'Montpellier Water Polo Centre',
    country: 'France', countryFlag: '🇫🇷',
    city: 'Montpellier', lat: 43.6108, lng: 3.8767,
    website: 'https://www.montpellierwaterpolo.fr', contact: '+33 4 67 12 34 56', contactEmail: 'info@montpellierwaterpolo.fr',
    description: 'Premier French water polo training centre in the sunny south of France, blending Mediterranean lifestyle with rigorous athletic development.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 10, description: 'Mediterranean beaches accessible within 15 minutes' },
    priceRange: { from: 700, to: 2000, unit: 'week', display: '€700 - €2,000/week' },
    socialMedia: { instagram: '@montpellierwp', facebook: 'https://facebook.com/montpellierwaterpolo', twitter: '@montpellierwp' },
    climate: 'montpellier',
    facilities: 'Olympic-size pool, outdoor training pool, video analysis suite, gym, hydrotherapy centre, sports science lab',
    courtSurfaces: ['Olympic pool', 'Outdoor training pool', 'Open water'],
    programs: [
      { name: 'French Excellence Program', price: '€1,500/week', desc: 'Top-tier training with French national-level coaches and sports science support' },
      { name: 'Mediterranean Youth Camp', price: '€900/week', desc: 'Summer development camp combining pool training with open water sessions' },
      { name: 'Technical Skills Workshop', price: '€1,100/week', desc: 'Focused workshop on shooting, passing, and defensive positioning' }
    ],
    coaches: [
      { name: 'Jean-Pierre Moreau', credential: 'Former French National Team Captain', background: 'World Championship bronze medalist, 18 years professional experience', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'French', 'Spanish'], instagram: null },
      { name: 'Claire Dupont', credential: 'French Federation Level 3 Coach', background: 'Specialist in youth development, former Olympian', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'French'], instagram: '@clairedupont_wp' }
    ],
    photos: ['https://images.unsplash.com/photo-1560089000-7433a4ebbd64?w=800', 'https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=800'],
    upcomingCamps: [
      { name: 'Summer Mediterranean Camp', startDate: '2026-06-22', endDate: '2026-07-03', price: '€1,800', level: 'Advanced' },
      { name: 'Easter Youth Camp', startDate: '2027-04-05', endDate: '2027-04-16', price: '€1,000', level: 'Beginner' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Hôtel du Midi', pricePerWeek: 550, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'City Centre Apartments', pricePerWeek: 400, maxOccupancy: 4, bathType: 'ensuite', mealsIncluded: false }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Located in vibrant Montpellier with easy access to beaches and culture'
    },
    availability: {
      status: 'limited',
      nextIntake: '2026-06-01',
      spotsLeft: 8, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 9, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'French-English bilingual schooling options available',
      medicalStaff: true, safeguarding: 'French federation safeguarding standards enforced',
      airportPickup: true, mealPlan: 'Full board with French cuisine and sports nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'French'],
      emergencyProtocol: 'Medical team on site, CHU Montpellier hospital 10 minutes away'
    }
  },
  {
    id: 'duisburg-aquatic-institute',
    name: 'Duisburg Aquatic Institute',
    country: 'Germany', countryFlag: '🇩🇪',
    city: 'Duisburg', lat: 51.4344, lng: 6.7623,
    website: 'https://www.duisburgaquatic.de', contact: '+49 203 456 7890', contactEmail: 'info@duisburgaquatic.de',
    description: 'German precision meets aquatic excellence at this state-of-the-art water polo institute in the industrial heartland of North Rhine-Westphalia.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby; indoor and outdoor pool facilities' },
    priceRange: { from: 650, to: 1800, unit: 'week', display: '€650 - €1,800/week' },
    socialMedia: { instagram: '@duisburgaquatic', facebook: 'https://facebook.com/duisburgaquatic', twitter: '@duisburgaquatic' },
    climate: 'duisburg',
    facilities: 'Olympic-size indoor pool, 25m training pool, biomechanics lab, video analysis, modern gym, physiotherapy suite',
    courtSurfaces: ['Olympic pool', 'Training pool', 'Warm-up pool'],
    programs: [
      { name: 'Bundesliga Preparation Camp', price: '€1,400/week', desc: 'Elite training designed to prepare players for top-tier German league competition' },
      { name: 'Youth Talent Identification', price: '€800/week', desc: 'Structured assessment and development program for promising young players' },
      { name: 'Strength & Conditioning Focus', price: '€1,000/week', desc: 'Pool-based and dryland conditioning to build water polo athleticism' }
    ],
    coaches: [
      { name: 'Thomas Müller', credential: 'German Bundesliga Head Coach', background: 'Former German international, 12 years Bundesliga coaching experience', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'German', 'Dutch'], instagram: null },
      { name: 'Katrin Weber', credential: 'German Swimming Federation Coach', background: 'Olympic-level swimming background, transitioned to water polo coaching', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'German'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1560089000-7433a4ebbd64?w=800', 'https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=800'],
    upcomingCamps: [
      { name: 'Autumn Intensive', startDate: '2026-10-05', endDate: '2026-10-16', price: '€1,500', level: 'Advanced' },
      { name: 'Winter Youth Camp', startDate: '2027-01-11', endDate: '2027-01-22', price: '€900', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Sporthotel Duisburg', pricePerWeek: 450, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'dormitory', label: 'Institute Dormitory', pricePerWeek: 280, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'On-campus accommodation with direct pool access'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-09-01',
      spotsLeft: 15, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 8, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Cooperation with local German-English bilingual school',
      medicalStaff: true, safeguarding: 'German federal child protection standards enforced',
      airportPickup: true, mealPlan: 'Full board with nutritionist-designed meals',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'German'],
      emergencyProtocol: 'On-site paramedic, Duisburg hospital 8 minutes away'
    }
  },
  {
    id: 'rotterdam-waterpolo-academy',
    name: 'Rotterdam Water Polo Academy',
    country: 'Netherlands', countryFlag: '🇳🇱',
    city: 'Rotterdam', lat: 51.9225, lng: 4.4792,
    website: 'https://www.rotterdamwaterpolo.nl', contact: '+31 10 234 5678', contactEmail: 'info@rotterdamwaterpolo.nl',
    description: 'Leading Dutch water polo academy in Europe\'s largest port city, combining innovative coaching methods with world-class aquatic facilities.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 25, description: 'North Sea beaches within 30 minutes by car' },
    priceRange: { from: 700, to: 1900, unit: 'week', display: '€700 - €1,900/week' },
    socialMedia: { instagram: '@rotterdamwp', facebook: 'https://facebook.com/rotterdamwaterpolo', twitter: '@rotterdamwp' },
    climate: 'rotterdam',
    facilities: 'Olympic-size pool, 25m training pool, underwater camera system, video room, fitness centre, recovery pool, sports science lab',
    courtSurfaces: ['Olympic pool', 'Training pool', 'Open water'],
    programs: [
      { name: 'Dutch Total Water Polo', price: '€1,400/week', desc: 'Holistic program inspired by the Dutch tradition of total sport philosophy' },
      { name: 'Junior Eredivisie Pathway', price: '€850/week', desc: 'Development pathway targeting Netherlands top-league readiness' },
      { name: 'International Exchange Camp', price: '€1,200/week', desc: 'Multi-national training camp fostering international competition experience' }
    ],
    coaches: [
      { name: 'Pieter van den Berg', credential: 'Former Netherlands National Team Player', background: 'Olympic semifinalist, 10 years coaching in the Eredivisie', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Dutch', 'German'], instagram: null },
      { name: 'Sophie de Vries', credential: 'KNZB Level 4 Coach', background: 'Dutch women\'s team analyst, specialising in tactical preparation', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Dutch', 'French'], instagram: '@sophiedevries_wp' }
    ],
    photos: ['https://images.unsplash.com/photo-1560089000-7433a4ebbd64?w=800', 'https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=800'],
    upcomingCamps: [
      { name: 'Spring Training Camp', startDate: '2026-05-04', endDate: '2026-05-15', price: '€1,500', level: 'Advanced' },
      { name: 'Summer Youth Festival', startDate: '2026-08-03', endDate: '2026-08-14', price: '€950', level: 'Beginner' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Rotterdam City Hotel', pricePerWeek: 500, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Harbour View Apartments', pricePerWeek: 420, maxOccupancy: 4, bathType: 'ensuite', mealsIncluded: false }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Modern accommodation in Rotterdam\'s vibrant harbour district'
    },
    availability: {
      status: 'limited',
      nextIntake: '2026-04-15',
      spotsLeft: 6, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 9, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'International school partnerships with English-language instruction',
      medicalStaff: true, safeguarding: 'Dutch NOC safeguarding certification for all staff',
      airportPickup: true, mealPlan: 'Full board with international menu options',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Dutch'],
      emergencyProtocol: 'On-site medical team, Erasmus MC hospital 12 minutes away'
    }
  },
  {
    id: 'istanbul-aquatics-academy',
    name: 'Istanbul Aquatics Academy',
    country: 'Turkey', countryFlag: '🇹🇷',
    city: 'Istanbul', lat: 41.0082, lng: 28.9784,
    website: 'https://www.istanbulaquatics.com.tr', contact: '+90 212 345 6789', contactEmail: 'info@istanbulaquatics.com.tr',
    description: 'Bridging continents through water polo excellence, Istanbul Aquatics Academy offers world-class training where Europe meets Asia.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 15, description: 'Bosphorus waterfront and Black Sea beaches accessible' },
    priceRange: { from: 500, to: 1500, unit: 'week', display: '€500 - €1,500/week' },
    socialMedia: { instagram: '@istanbulaquatics', facebook: 'https://facebook.com/istanbulaquatics', twitter: '@istanbulaquatics' },
    climate: 'istanbul',
    facilities: 'Olympic-size indoor pool, outdoor 25m pool, Bosphorus open water area, video analysis room, modern gym, Turkish bath recovery',
    courtSurfaces: ['Olympic pool', 'Outdoor pool', 'Open water'],
    programs: [
      { name: 'Bosphorus Elite Camp', price: '€1,200/week', desc: 'Intensive training combining pool work with unique Bosphorus open water sessions' },
      { name: 'Turkish Youth Development', price: '€650/week', desc: 'Structured program developing fundamental and intermediate water polo skills' },
      { name: 'Cross-Continental Tournament Prep', price: '€1,000/week', desc: 'Competition-focused camp with simulated match play and tactical analysis' }
    ],
    coaches: [
      { name: 'Emre Yılmaz', credential: 'Turkish Super League Head Coach', background: 'Former Turkish national team player, coached in Greece and Turkey for 14 years', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Turkish', 'Greek'], instagram: null },
      { name: 'Ayşe Demir', credential: 'Turkish Water Polo Federation Coach', background: 'Women\'s national team experience, focus on tactical development', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Turkish'], instagram: '@aysedemir_wp' }
    ],
    photos: ['https://images.unsplash.com/photo-1560089000-7433a4ebbd64?w=800', 'https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=800'],
    upcomingCamps: [
      { name: 'Bosphorus Summer Camp', startDate: '2026-07-06', endDate: '2026-07-17', price: '€1,300', level: 'Advanced' },
      { name: 'Winter Indoor Intensive', startDate: '2027-02-01', endDate: '2027-02-12', price: '€800', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Bosphorus View Hotel', pricePerWeek: 400, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'hostel', label: 'Academy Hostel', pricePerWeek: 220, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Accommodation options spanning both European and Asian sides of Istanbul'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-06-15',
      spotsLeft: 20, responseTime: '48h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 8, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Partnership with international schools offering English-medium instruction',
      medicalStaff: true, safeguarding: 'Turkish federation safeguarding standards and international best practices',
      airportPickup: true, mealPlan: 'Full board with Turkish and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Turkish'],
      emergencyProtocol: 'On-site medical staff, major hospital within 15 minutes'
    }
  },
  {
    id: 'lisbon-waterpolo-school',
    name: 'Lisbon Water Polo School',
    country: 'Portugal', countryFlag: '🇵🇹',
    city: 'Lisbon', lat: 38.7223, lng: -9.1393,
    website: 'https://www.lisbonwaterpolo.pt', contact: '+351 21 345 6789', contactEmail: 'info@lisbonwaterpolo.pt',
    description: 'Atlantic-coast water polo training in Portugal\'s vibrant capital, offering year-round programmes in a warm climate with access to ocean training.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 5, description: 'Atlantic beaches within 10 minutes for open water training' },
    priceRange: { from: 550, to: 1600, unit: 'week', display: '€550 - €1,600/week' },
    socialMedia: { instagram: '@lisbonwp', facebook: 'https://facebook.com/lisbonwaterpolo', twitter: '@lisbonwp' },
    climate: 'lisbon',
    facilities: 'Olympic-size pool, outdoor training pool, ocean open water access, video analysis, gym, recovery pool, physiotherapy',
    courtSurfaces: ['Olympic pool', 'Outdoor pool', 'Open water'],
    programs: [
      { name: 'Atlantic Water Polo Camp', price: '€1,100/week', desc: 'Unique program combining pool training with Atlantic open water conditioning' },
      { name: 'Portuguese Youth Academy', price: '€700/week', desc: 'Year-round youth development with school integration support' },
      { name: 'Masters Water Polo Retreat', price: '€900/week', desc: 'Programme for adult players seeking competitive improvement in a relaxed setting' }
    ],
    coaches: [
      { name: 'João Santos', credential: 'Portuguese National Team Coach', background: 'Former professional player in Spain and Portugal, 16 years coaching experience', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Portuguese', 'Spanish'], instagram: null },
      { name: 'Maria Ferreira', credential: 'Portuguese Federation Level 3 Coach', background: 'Women\'s national team player, now specialising in junior development', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Portuguese'], instagram: '@mariaferreira_wp' }
    ],
    photos: ['https://images.unsplash.com/photo-1560089000-7433a4ebbd64?w=800', 'https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=800'],
    upcomingCamps: [
      { name: 'Summer Atlantic Camp', startDate: '2026-06-15', endDate: '2026-06-26', price: '€1,200', level: 'Intermediate' },
      { name: 'New Year Training Camp', startDate: '2027-01-04', endDate: '2027-01-15', price: '€850', level: 'All levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Hotel Marítimo', pricePerWeek: 450, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Lisbon City Apartments', pricePerWeek: 350, maxOccupancy: 4, bathType: 'ensuite', mealsIncluded: false }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Accommodation in Lisbon\'s waterfront district with Atlantic views'
    },
    availability: {
      status: 'waitlist',
      nextIntake: '2026-06-01',
      spotsLeft: 0, responseTime: '48h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 8, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Partnership with Lisbon international schools, bilingual programmes',
      medicalStaff: true, safeguarding: 'Portuguese federation safeguarding and child protection policies',
      airportPickup: true, mealPlan: 'Full board with Portuguese and Mediterranean cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Portuguese'],
      emergencyProtocol: 'Medical staff on site, Hospital de Santa Maria within 15 minutes'
    }
  },
  {
    id: 'malta-waterpolo-academy',
    name: 'Malta Water Polo Academy',
    country: 'Malta', countryFlag: '🇲🇹',
    city: 'Valletta', lat: 35.8989, lng: 14.5146,
    website: 'https://www.maltawaterpolo.mt', contact: '+356 2123 4567', contactEmail: 'info@maltawaterpolo.mt',
    description: 'Island water polo training at its finest, leveraging Malta\'s deep-rooted passion for the sport and year-round Mediterranean climate.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 0.3, description: 'Harbour-side location with direct sea access for open water training' },
    priceRange: { from: 500, to: 1400, unit: 'week', display: '€500 - €1,400/week' },
    socialMedia: { instagram: '@maltawp', facebook: 'https://facebook.com/maltawaterpolo', twitter: '@maltawp' },
    climate: 'valletta',
    facilities: 'Olympic-size pool, outdoor sea-water pool, harbour open water area, video analysis, gym, recovery area',
    courtSurfaces: ['Olympic pool', 'Sea-water pool', 'Open water'],
    programs: [
      { name: 'Mediterranean Island Camp', price: '€1,000/week', desc: 'Intensive camp combining pool training with open water sessions in Malta\'s crystal-clear harbours' },
      { name: 'Maltese Youth League Prep', price: '€650/week', desc: 'Development program preparing young players for Malta\'s competitive league system' },
      { name: 'Open Water Specialist', price: '€800/week', desc: 'Focused training on open water skills, endurance, and sea conditions' }
    ],
    coaches: [
      { name: 'Karl Borg', credential: 'Maltese National Team Head Coach', background: 'Malta\'s most capped player with professional experience in Italy and Greece', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Maltese', 'Italian'], instagram: null },
      { name: 'Daniela Camilleri', credential: 'ASA Malta Certified Coach', background: 'Former national team player, youth development specialist', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Maltese'], instagram: '@danielacamilleri_wp' }
    ],
    photos: ['https://images.unsplash.com/photo-1560089000-7433a4ebbd64?w=800', 'https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=800'],
    upcomingCamps: [
      { name: 'Harbour Summer Camp', startDate: '2026-07-20', endDate: '2026-07-31', price: '€1,100', level: 'All levels' },
      { name: 'Easter Water Polo Festival', startDate: '2027-04-12', endDate: '2027-04-23', price: '€750', level: 'Beginner' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Grand Harbour Hotel', pricePerWeek: 450, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'hostel', label: 'Valletta Sports Hostel', pricePerWeek: 250, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Historic Valletta location with stunning harbour views'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-05-01',
      spotsLeft: 12, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 8, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'English-language schools available across Malta',
      medicalStaff: true, safeguarding: 'Malta Sports Council safeguarding standards',
      airportPickup: true, mealPlan: 'Full board with Mediterranean cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Maltese'],
      emergencyProtocol: 'Medical team on site, Mater Dei Hospital 15 minutes away'
    }
  },
  {
    id: 'kranj-aquatic-centre',
    name: 'Kranj Aquatic Centre',
    country: 'Slovenia', countryFlag: '🇸🇮',
    city: 'Kranj', lat: 46.2386, lng: 14.3558,
    website: 'https://www.kranjaquatic.si', contact: '+386 4 234 5678', contactEmail: 'info@kranjaquatic.si',
    description: 'Alpine water polo training in the charming Slovenian city of Kranj, combining mountain air with competitive aquatic programmes.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: false,
    beach: { distance: null, description: 'Alpine location, no beach nearby; lake training available' },
    priceRange: { from: 450, to: 1200, unit: 'week', display: '€450 - €1,200/week' },
    socialMedia: { instagram: '@kranjaquatic', facebook: 'https://facebook.com/kranjaquatic', twitter: '@kranjaquatic' },
    climate: 'kranj',
    facilities: 'Indoor 50m pool, 25m training pool, alpine lake open water area, video analysis, fitness centre, recovery pools',
    courtSurfaces: ['Olympic pool', 'Training pool', 'Lake open water'],
    programs: [
      { name: 'Alpine Water Polo Camp', price: '€900/week', desc: 'Unique camp blending pool training with alpine lake sessions for endurance building' },
      { name: 'Slovenian Youth Development', price: '€600/week', desc: 'Grassroots development program for aspiring young water polo players' }
    ],
    coaches: [
      { name: 'Matej Horvat', credential: 'Slovenian National League Coach', background: 'Former Slovenian international, coaching career spanning club and national youth teams', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Slovenian', 'Croatian', 'German'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1560089000-7433a4ebbd64?w=800'],
    upcomingCamps: [
      { name: 'Summer Alpine Camp', startDate: '2026-07-06', endDate: '2026-07-17', price: '€1,000', level: 'Intermediate' },
      { name: 'Autumn Intensive', startDate: '2026-10-19', endDate: '2026-10-30', price: '€700', level: 'All levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Hotel Creina', pricePerWeek: 380, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'dormitory', label: 'Sports Centre Dormitory', pricePerWeek: 220, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Accommodation in historic Kranj with views of the Julian Alps'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-06-01',
      spotsLeft: 14, responseTime: '48h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 9, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Local school integration with English-language support',
      medicalStaff: true, safeguarding: 'Slovenian Olympic Committee safeguarding framework',
      airportPickup: true, mealPlan: 'Full board with Slovenian alpine cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Slovenian'],
      emergencyProtocol: 'On-site first aid, Kranj General Hospital within 5 minutes'
    }
  },
  {
    id: 'vienna-waterpolo-academy',
    name: 'Vienna Water Polo Academy',
    country: 'Austria', countryFlag: '🇦🇹',
    city: 'Vienna', lat: 48.2082, lng: 16.3738,
    website: 'https://www.viennawaterpolo.at', contact: '+43 1 234 5678', contactEmail: 'info@viennawaterpolo.at',
    description: 'Imperial city, modern water polo — Vienna\'s premier academy combines Austrian sporting discipline with world-class coaching in a cultural capital.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby; Danube river and Alte Donau lake for open water' },
    priceRange: { from: 650, to: 1800, unit: 'week', display: '€650 - €1,800/week' },
    socialMedia: { instagram: '@viennawp', facebook: 'https://facebook.com/viennawaterpolo', twitter: '@viennawp' },
    climate: 'vienna',
    facilities: 'Olympic-size pool, 25m training pool, Alte Donau open water, video analysis suite, strength lab, spa recovery complex',
    courtSurfaces: ['Olympic pool', 'Training pool', 'Open water'],
    programs: [
      { name: 'Danube Elite Program', price: '€1,400/week', desc: 'Top-level training programme with Central European competition exposure' },
      { name: 'Vienna Youth Water Polo', price: '€800/week', desc: 'Structured development for junior players with a pathway to Austrian league teams' },
      { name: 'Strategic Play Workshop', price: '€1,100/week', desc: 'Advanced tactical workshop focusing on set plays, counter-attacks, and match intelligence' }
    ],
    coaches: [
      { name: 'Stefan Gruber', credential: 'Austrian Bundesliga Head Coach', background: 'Former Austrian national team captain with professional experience in Hungary and Germany', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'German', 'Hungarian'], instagram: null },
      { name: 'Laura Bauer', credential: 'Austrian Swimming Federation Level 3 Coach', background: 'National women\'s team experience, expert in sports psychology for aquatic athletes', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'German'], instagram: '@laurabauer_wp' }
    ],
    photos: ['https://images.unsplash.com/photo-1560089000-7433a4ebbd64?w=800', 'https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=800'],
    upcomingCamps: [
      { name: 'Summer Danube Camp', startDate: '2026-06-29', endDate: '2026-07-10', price: '€1,500', level: 'Advanced' },
      { name: 'Winter Training Intensive', startDate: '2027-01-18', endDate: '2027-01-29', price: '€950', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Hotel am Prater', pricePerWeek: 500, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Danube Apartments', pricePerWeek: 400, maxOccupancy: 4, bathType: 'ensuite', mealsIncluded: false }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Central Vienna location near the Prater sports district'
    },
    availability: {
      status: 'limited',
      nextIntake: '2026-06-01',
      spotsLeft: 5, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 8, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Vienna International School partnership for visiting students',
      medicalStaff: true, safeguarding: 'Austrian federal safeguarding standards for youth sport',
      airportPickup: true, mealPlan: 'Full board with Austrian and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'German'],
      emergencyProtocol: 'On-site medical staff, AKH Vienna within 12 minutes'
    }
  },
  {
    id: 'prague-aquatic-club',
    name: 'Prague Aquatic Club',
    country: 'Czech Republic', countryFlag: '🇨🇿',
    city: 'Prague', lat: 50.0755, lng: 14.4378,
    website: 'https://www.pragueaquatic.cz', contact: '+420 2 1234 5678', contactEmail: 'info@pragueaquatic.cz',
    description: 'Central European water polo hub in the golden city of Prague, fostering athletic talent in a city renowned for its sporting infrastructure.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Landlocked city; Vltava river used for supplementary open water conditioning' },
    priceRange: { from: 500, to: 1400, unit: 'week', display: '€500 - €1,400/week' },
    socialMedia: { instagram: '@pragueaquatic', facebook: 'https://facebook.com/pragueaquatic', twitter: '@pragueaquatic' },
    climate: 'prague',
    facilities: 'Olympic-size indoor pool, 25m warm-up pool, underwater cameras, analysis room, gym, sauna, physiotherapy suite',
    courtSurfaces: ['Olympic pool', 'Warm-up pool'],
    programs: [
      { name: 'Czech Elite Water Polo', price: '€1,100/week', desc: 'High-performance training with video analysis and periodised conditioning' },
      { name: 'Junior Bohemian Camp', price: '€650/week', desc: 'Development camp for young players in a culturally enriching environment' },
      { name: 'Goalkeeper Academy', price: '€850/week', desc: 'Dedicated goalkeeper training with position-specific drills and match simulation' }
    ],
    coaches: [
      { name: 'Tomáš Novák', credential: 'Czech National Team Assistant Coach', background: 'Former Czech international with coaching experience in Hungary and Slovakia', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Czech', 'Slovak', 'Hungarian'], instagram: null },
      { name: 'Petra Králová', credential: 'Czech Swimming Federation Coach', background: 'European Championship participant, now coaching youth at national level', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Czech', 'German'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1560089000-7433a4ebbd64?w=800', 'https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=800'],
    upcomingCamps: [
      { name: 'Prague Summer Camp', startDate: '2026-08-03', endDate: '2026-08-14', price: '€1,200', level: 'Intermediate' },
      { name: 'Spring Development Camp', startDate: '2027-03-22', endDate: '2027-04-02', price: '€750', level: 'Beginner' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Hotel Podolí', pricePerWeek: 400, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'dormitory', label: 'Aquatic Club Dormitory', pricePerWeek: 250, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Accommodation in the Podolí district near Prague\'s main aquatic complex'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-07-01',
      spotsLeft: 16, responseTime: '48h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 8, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'International School of Prague partnership available',
      medicalStaff: true, safeguarding: 'Czech Olympic Committee child protection certification',
      airportPickup: true, mealPlan: 'Full board with Czech and international meals',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Czech'],
      emergencyProtocol: 'First aid on site, Motol University Hospital 15 minutes away'
    }
  },
  {
    id: 'stockholm-waterpolo-centre',
    name: 'Stockholm Water Polo Centre',
    country: 'Sweden', countryFlag: '🇸🇪',
    city: 'Stockholm', lat: 59.3293, lng: 18.0686,
    website: 'https://www.stockholmwaterpolo.se', contact: '+46 8 123 4567', contactEmail: 'info@stockholmwaterpolo.se',
    description: 'Scandinavian water polo excellence in Sweden\'s beautiful archipelago capital, combining Nordic training philosophy with competitive international standards.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 5, description: 'Archipelago beaches and lake swimming areas nearby' },
    priceRange: { from: 800, to: 2200, unit: 'week', display: '€800 - €2,200/week' },
    socialMedia: { instagram: '@stockholmwp', facebook: 'https://facebook.com/stockholmwaterpolo', twitter: '@stockholmwp' },
    climate: 'stockholm',
    facilities: 'Olympic-size indoor pool, 25m training pool, archipelago open water access, sports science lab, gym, ice bath recovery',
    courtSurfaces: ['Olympic pool', 'Training pool', 'Open water'],
    programs: [
      { name: 'Nordic Elite Camp', price: '€1,700/week', desc: 'High-intensity camp drawing on Scandinavian sports science and coaching excellence' },
      { name: 'Swedish Youth Pathway', price: '€1,000/week', desc: 'Development pathway aligned with Swedish Swimming Federation standards' },
      { name: 'Archipelago Open Water Camp', price: '€1,300/week', desc: 'Unique open water training in Stockholm\'s stunning archipelago setting' }
    ],
    coaches: [
      { name: 'Erik Lindström', credential: 'Swedish National Team Coach', background: 'Former professional player in Spain, now leading Swedish national program development', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Swedish', 'Spanish'], instagram: null },
      { name: 'Frida Johansson', credential: 'SSF Level 3 Coach', background: 'Swedish women\'s team veteran, specialist in endurance and conditioning', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Swedish', 'Norwegian'], instagram: '@fridajohansson_wp' }
    ],
    photos: ['https://images.unsplash.com/photo-1560089000-7433a4ebbd64?w=800', 'https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=800'],
    upcomingCamps: [
      { name: 'Midsummer Water Polo Camp', startDate: '2026-06-15', endDate: '2026-06-26', price: '€1,800', level: 'Advanced' },
      { name: 'Autumn Indoor Intensive', startDate: '2026-11-02', endDate: '2026-11-13', price: '€1,100', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Stockholm Waterfront Hotel', pricePerWeek: 600, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'dormitory', label: 'Sports Centre Residence', pricePerWeek: 400, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Waterfront accommodation with archipelago access'
    },
    availability: {
      status: 'waitlist',
      nextIntake: '2026-06-01',
      spotsLeft: 0, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 9, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Swedish international school partnerships with English instruction',
      medicalStaff: true, safeguarding: 'Swedish Sports Confederation safeguarding policy',
      airportPickup: true, mealPlan: 'Full board with Scandinavian and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Swedish'],
      emergencyProtocol: 'On-site medical team, Karolinska Hospital 10 minutes away'
    }
  },
  {
    id: 'london-aquatics-waterpolo',
    name: 'London Aquatics Water Polo',
    country: 'UK', countryFlag: '🇬🇧',
    city: 'London', lat: 51.5384, lng: -0.0164,
    website: 'https://www.londonaquaticswp.co.uk', contact: '+44 20 7123 4567', contactEmail: 'info@londonaquaticswp.co.uk',
    description: 'Olympic-legacy water polo training at the iconic London Aquatics Centre, offering elite programmes in one of the world\'s great sporting capitals.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No nearby beach; pool-based training with Thames open water options' },
    priceRange: { from: 700, to: 2200, unit: 'week', display: '£700 - £2,200/week' },
    socialMedia: { instagram: '@londonaquaticswp', facebook: 'https://facebook.com/londonaquaticswp', twitter: '@londonaquaticswp' },
    climate: 'london',
    facilities: 'Olympic-size pool, diving pool, training pool, world-class gym, video analysis suite, physiotherapy, ice baths',
    courtSurfaces: ['Olympic pool', 'Training pool', 'Diving pool'],
    programs: [
      { name: 'Olympic Legacy Elite Camp', price: '£1,800/week', desc: 'Train in the venue of the 2012 Olympics with GB-level coaches' },
      { name: 'British Youth Water Polo', price: '£1,000/week', desc: 'Development program aligned with Swim England water polo pathway' },
      { name: 'International Tournament Prep', price: '£1,400/week', desc: 'Competition-focused training with match simulation and video review' }
    ],
    coaches: [
      { name: 'James Whitfield', credential: 'Former GB Water Polo Captain', background: 'Represented Great Britain at multiple World Championships, 15 years coaching experience', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English'], instagram: null },
      { name: 'Sarah Mitchell', credential: 'Swim England Level 3 Water Polo Coach', background: 'England women\'s team player, now leading youth development in London', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'French'], instagram: '@sarahmitchell_wp' }
    ],
    photos: ['https://images.unsplash.com/photo-1560089000-7433a4ebbd64?w=800', 'https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=800'],
    upcomingCamps: [
      { name: 'Summer Olympic Legacy Camp', startDate: '2026-07-27', endDate: '2026-08-07', price: '£2,000', level: 'Advanced' },
      { name: 'Half-Term Youth Camp', startDate: '2027-02-15', endDate: '2027-02-26', price: '£1,100', level: 'Beginner' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Queen Elizabeth Olympic Park Hotel', pricePerWeek: 600, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'dormitory', label: 'East London Sports Residence', pricePerWeek: 400, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Accommodation in the Queen Elizabeth Olympic Park with excellent transport links'
    },
    availability: {
      status: 'limited',
      nextIntake: '2026-07-01',
      spotsLeft: 4, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 8, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'London international school partnerships available',
      medicalStaff: true, safeguarding: 'Swim England safeguarding and DBS checks for all staff',
      airportPickup: true, mealPlan: 'Full board with international cuisine options',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English'],
      emergencyProtocol: 'On-site medical team, Homerton Hospital within 8 minutes'
    }
  },
  {
    id: 'irish-water-polo-academy',
    name: 'Irish Water Polo Academy',
    country: 'Ireland', countryFlag: '🇮🇪',
    city: 'Dublin', lat: 53.3412, lng: -6.2518,
    website: 'https://www.irishwaterpolo.ie', contact: '+353 1 567 8901', contactEmail: 'info@irishwaterpolo.ie',
    description: 'Ireland\'s dedicated water polo training centre in Dublin, developing the sport across all age groups with international coaching standards.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 8, description: 'Sandymount Strand 8 km from the academy' },
    priceRange: { from: 550, to: 1400, unit: 'week', display: '€550 - €1,400/week' },
    socialMedia: { instagram: '@irishwaterpolo', facebook: 'https://facebook.com/irishwaterpolo', twitter: '@irishwp' },
    climate: 'dublin',
    facilities: 'Olympic-size pool, training pool, underwater cameras, video analysis room, gym, recovery pools, physiotherapy suite',
    courtSurfaces: ['Olympic pool', 'Training pool'],
    programs: [
      { name: 'Intensive Water Polo Camp', price: '€1,000/week', desc: 'Full-day training with tactical workshops and competitive match play' },
      { name: 'Junior Development', price: '€700/week', desc: 'Skill-building programme for young players aged 10-16' },
      { name: 'Goalkeeper Specialist', price: '€850/week', desc: 'Focused goalkeeper training with video analysis and shot-stopping drills' }
    ],
    coaches: [
      { name: 'Niall Fitzgerald', credential: 'World Aquatics Level 3 Coach', background: 'Former Irish national team captain with 15 years coaching at club and international level', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Irish'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1560089000-7433a4ebbd64?w=800'],
    upcomingCamps: [
      { name: 'Summer Water Polo Camp', startDate: '2026-07-06', endDate: '2026-07-13', price: '€1,000', level: 'Intermediate' },
      { name: 'Junior Fundamentals Week', startDate: '2026-07-20', endDate: '2026-07-27', price: '€700', level: 'Beginner' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Dublin Sport Hotel Partner', pricePerWeek: 480, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Central Dublin location within 10 minutes of the training facility'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-06-01',
      spotsLeft: 16, responseTime: '48h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 8, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Partnerships with Dublin international schools',
      medicalStaff: true, safeguarding: 'Swim Ireland safeguarding standards, Garda-vetted coaches',
      airportPickup: true, mealPlan: 'Full board with sports nutrition options',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Irish'],
      emergencyProtocol: '24/7 on-call medical staff with St Vincent\'s Hospital 10 minutes away'
    }
  },
  {
    id: 'istanbul-water-polo-centre',
    name: 'Istanbul Water Polo Centre',
    country: 'Turkey',
    countryFlag: '',
    city: 'Istanbul',
    lat: 41.0082,
    lng: 28.9784,
    website: 'https://www.istanbulwaterpolo.com.tr',
    contact: '+90 212 567 8901',
    contactEmail: 'info@istanbulwaterpolo.com.tr',
    description: 'Modern water polo centre in Istanbul offering training in an Olympic-standard pool. A growing force in Turkish aquatic sports at the crossroads of Europe and Asia.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 10, description: 'Bosphorus shoreline and Princes Islands beaches accessible' },
    priceRange: { from: 500, to: 1300, unit: 'week', display: '500 - 1,300/week' },
    socialMedia: { instagram: '@istanbulwaterpolo', facebook: 'https://facebook.com/istanbulwaterpolo', twitter: '@istwaterpolo' },
    climate: 'istanbul',
    facilities: '50m Olympic pool with water polo configuration, 25m training pool, gym, video analysis room, physiotherapy',
    courtSurfaces: ['50m Olympic pool', '25m Training pool'],
    programs: [
      { name: 'Water Polo Development', price: '800/week', desc: 'Structured water polo development with Turkish national coaches' },
      { name: 'Youth Water Polo Camp', price: '500/week', desc: 'Fun and skills-focused camps for juniors introducing water polo fundamentals' },
      { name: 'Performance Training', price: '1,300/week', desc: 'Intensive performance programme with match preparation and tactical analysis' }
    ],
    coaches: [
      { name: 'Volkan Demir', credential: 'FINA Level 3 Coach', background: 'Former Turkish national water polo team captain with European club experience', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Turkish', 'English'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1580748142159-d85b6a760e63?w=800'],
    upcomingCamps: [
      { name: 'Summer Water Polo Camp', startDate: '2026-07-06', endDate: '2026-07-13', price: '800', level: 'All levels' },
      { name: 'Autumn Training Block', startDate: '2026-10-12', endDate: '2026-10-19', price: '1,000', level: 'Intermediate' }
    ],
    accommodation: {
      types: [{ type: 'hotel', label: 'Istanbul Sports Hotel', pricePerWeek: 400, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Hotel near aquatic centre with easy access to Istanbul attractions'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-06-01',
      spotsLeft: 16,
      responseTime: '48h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 10,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Partnership with Istanbul international schools',
      medicalStaff: true,
      safeguarding: 'Turkish Swimming Federation child protection protocols',
      airportPickup: true,
      mealPlan: 'Full board with Turkish and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Turkish', 'English'],
      emergencyProtocol: '24/7 on-call medical team, Istanbul hospital 15 minutes'
    }
  }
];

const CLIMATE_DATA = {
  'budapest': {
    avgTemp: { summer: 27, winter: 1 },
    rainfall: { summer: 'Moderate', winter: 'Low' },
    humidity: 'Moderate',
    bestMonths: ['May', 'June', 'July', 'August', 'September'],
    description: 'Continental climate with hot summers and cold winters'
  },
  'szeged': {
    avgTemp: { summer: 28, winter: 0 },
    rainfall: { summer: 'Low', winter: 'Low' },
    humidity: 'Moderate',
    bestMonths: ['May', 'June', 'July', 'August', 'September'],
    description: 'One of the sunniest cities in Hungary with warm summers'
  },
  'belgrade': {
    avgTemp: { summer: 27, winter: 2 },
    rainfall: { summer: 'Moderate', winter: 'Moderate' },
    humidity: 'Moderate',
    bestMonths: ['May', 'June', 'July', 'August', 'September'],
    description: 'Continental climate with warm summers and cold winters'
  },
  'novi-sad': {
    avgTemp: { summer: 27, winter: 1 },
    rainfall: { summer: 'Moderate', winter: 'Low' },
    humidity: 'Moderate',
    bestMonths: ['May', 'June', 'July', 'August', 'September'],
    description: 'Pannonian climate with hot summers'
  },
  'dubrovnik': {
    avgTemp: { summer: 30, winter: 10 },
    rainfall: { summer: 'Low', winter: 'High' },
    humidity: 'Moderate',
    bestMonths: ['May', 'June', 'July', 'August', 'September', 'October'],
    description: 'Mediterranean climate with long, hot summers'
  },
  'split': {
    avgTemp: { summer: 30, winter: 9 },
    rainfall: { summer: 'Low', winter: 'Moderate' },
    humidity: 'Moderate',
    bestMonths: ['May', 'June', 'July', 'August', 'September', 'October'],
    description: 'Mediterranean climate, warm and sunny for most of the year'
  },
  'rome': {
    avgTemp: { summer: 31, winter: 8 },
    rainfall: { summer: 'Low', winter: 'Moderate' },
    humidity: 'Moderate',
    bestMonths: ['April', 'May', 'June', 'September', 'October'],
    description: 'Mediterranean climate with hot, dry summers'
  },
  'naples': {
    avgTemp: { summer: 30, winter: 9 },
    rainfall: { summer: 'Low', winter: 'Moderate' },
    humidity: 'Moderate',
    bestMonths: ['May', 'June', 'July', 'August', 'September'],
    description: 'Mediterranean climate with warm, sunny weather'
  },
  'barcelona': {
    avgTemp: { summer: 29, winter: 10 },
    rainfall: { summer: 'Low', winter: 'Moderate' },
    humidity: 'Moderate',
    bestMonths: ['May', 'June', 'July', 'August', 'September'],
    description: 'Mediterranean climate with mild winters and warm summers'
  },
  'madrid': {
    avgTemp: { summer: 33, winter: 6 },
    rainfall: { summer: 'Very low', winter: 'Moderate' },
    humidity: 'Low',
    bestMonths: ['May', 'June', 'September', 'October'],
    description: 'Continental Mediterranean climate with hot, dry summers'
  },
  'athens': {
    avgTemp: { summer: 33, winter: 10 },
    rainfall: { summer: 'Very low', winter: 'Moderate' },
    humidity: 'Low',
    bestMonths: ['April', 'May', 'June', 'September', 'October'],
    description: 'Hot Mediterranean climate with dry summers'
  },
  'kotor': {
    avgTemp: { summer: 29, winter: 8 },
    rainfall: { summer: 'Low', winter: 'High' },
    humidity: 'Moderate',
    bestMonths: ['May', 'June', 'July', 'August', 'September'],
    description: 'Mediterranean climate influenced by the bay microclimate'
  },
  'bucharest': {
    avgTemp: { summer: 28, winter: 0 },
    rainfall: { summer: 'Moderate', winter: 'Low' },
    humidity: 'Moderate',
    bestMonths: ['May', 'June', 'July', 'August', 'September'],
    description: 'Continental climate with hot summers and cold winters'
  },
  'montpellier': {
    avgTemp: { summer: 29, winter: 8 },
    rainfall: { summer: 'Low', winter: 'Moderate' },
    humidity: 'Moderate',
    bestMonths: ['May', 'June', 'July', 'August', 'September'],
    description: 'Mediterranean climate with warm, dry summers and mild winters'
  },
  'duisburg': {
    avgTemp: { summer: 22, winter: 3 },
    rainfall: { summer: 'Moderate', winter: 'Moderate' },
    humidity: 'High',
    bestMonths: ['May', 'June', 'July', 'August', 'September'],
    description: 'Oceanic climate with mild summers and cool, damp winters'
  },
  'rotterdam': {
    avgTemp: { summer: 21, winter: 4 },
    rainfall: { summer: 'Moderate', winter: 'Moderate' },
    humidity: 'High',
    bestMonths: ['May', 'June', 'July', 'August', 'September'],
    description: 'Maritime climate with cool summers and mild, wet winters'
  },
  'istanbul': {
    avgTemp: { summer: 27, winter: 6 },
    rainfall: { summer: 'Low', winter: 'High' },
    humidity: 'Moderate',
    bestMonths: ['May', 'June', 'July', 'August', 'September', 'October'],
    description: 'Transitional climate between Mediterranean and oceanic, warm summers'
  },
  'lisbon': {
    avgTemp: { summer: 27, winter: 11 },
    rainfall: { summer: 'Low', winter: 'Moderate' },
    humidity: 'Moderate',
    bestMonths: ['April', 'May', 'June', 'July', 'August', 'September', 'October'],
    description: 'Mediterranean climate with warm, dry summers and mild, wet winters'
  },
  'valletta': {
    avgTemp: { summer: 31, winter: 13 },
    rainfall: { summer: 'Low', winter: 'Moderate' },
    humidity: 'Moderate',
    bestMonths: ['April', 'May', 'June', 'July', 'August', 'September', 'October'],
    description: 'Hot Mediterranean climate with very warm summers and mild winters'
  },
  'kranj': {
    avgTemp: { summer: 24, winter: 0 },
    rainfall: { summer: 'Moderate', winter: 'Moderate' },
    humidity: 'Moderate',
    bestMonths: ['May', 'June', 'July', 'August', 'September'],
    description: 'Alpine-influenced continental climate with warm summers and cold winters'
  },
  'vienna': {
    avgTemp: { summer: 25, winter: 1 },
    rainfall: { summer: 'Moderate', winter: 'Low' },
    humidity: 'Moderate',
    bestMonths: ['May', 'June', 'July', 'August', 'September'],
    description: 'Continental climate with warm summers and cold winters, Danube influence'
  },
  'prague': {
    avgTemp: { summer: 24, winter: 0 },
    rainfall: { summer: 'Moderate', winter: 'Low' },
    humidity: 'Moderate',
    bestMonths: ['May', 'June', 'July', 'August', 'September'],
    description: 'Continental climate with warm summers and cold, occasionally snowy winters'
  },
  'stockholm': {
    avgTemp: { summer: 22, winter: -1 },
    rainfall: { summer: 'Moderate', winter: 'Low' },
    humidity: 'Moderate',
    bestMonths: ['May', 'June', 'July', 'August'],
    description: 'Humid continental climate with mild summers and cold, dark winters'
  },
  'london': {
    avgTemp: { summer: 22, winter: 5 },
    rainfall: { summer: 'Moderate', winter: 'Moderate' },
    humidity: 'High',
    bestMonths: ['May', 'June', 'July', 'August', 'September'],
    description: 'Temperate oceanic climate with mild summers and cool, damp winters'
  },
  'dublin': {
    avgTemp: { summer: 18, winter: 5 },
    rainfall: { summer: 'Moderate', winter: 'High' },
    humidity: 'High',
    bestMonths: ['May', 'June', 'July', 'August', 'September'],
    description: 'Oceanic climate with cool summers and mild, damp winters'
  },
  'istanbul': {
    avgTemp: { summer: 25, winter: 6 },
    rainfall: { summer: 'Low', winter: 'Moderate' },
    humidity: 'Moderate',
    bestMonths: ['May', 'June', 'July', 'August', 'September'],
    description: 'Mediterranean-influenced climate with warm summers and mild winters, suitable for year-round indoor pool training'
  }
};

const NEWS_ITEMS = [
  {
    title: 'Hungary Wins European Water Polo Championship',
    date: '2025-01-15',
    summary: 'The Hungarian men\'s team secures gold at the European Championship, reinforcing the country\'s dominance in the sport.',
    link: '#'
  },
  {
    title: 'New Olympic Pool Opens in Belgrade',
    date: '2025-02-20',
    summary: 'A state-of-the-art aquatic centre opens in Belgrade, boosting Serbia\'s water polo infrastructure.',
    link: '#'
  },
  {
    title: 'Croatia Announces Junior Water Polo Development Programme',
    date: '2025-03-10',
    summary: 'The Croatian Water Polo Federation launches a national initiative to develop young talent along the Adriatic coast.',
    link: '#'
  },
  {
    title: 'Water Polo Added to More School Curricula Across Europe',
    date: '2025-04-05',
    summary: 'Several European countries add water polo to their school sports programmes, aiming to grow grassroots participation.',
    link: '#'
  },
  {
    title: 'Montenegro Qualifies for World Aquatics Championships',
    date: '2025-05-01',
    summary: 'Montenegro\'s national team earns qualification for the upcoming World Aquatics Championships in an exciting playoff.',
    link: '#'
  }
];

const COUNTRIES = ['Hungary', 'Serbia', 'Croatia', 'Italy', 'Spain', 'Greece', 'Montenegro', 'Romania', 'France', 'Germany', 'Netherlands', 'Turkey', 'Portugal', 'Malta', 'Slovenia', 'Austria', 'Czech Republic', 'Sweden', 'UK', 'Ireland'];
