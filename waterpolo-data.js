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

const COUNTRIES = ['Hungary', 'Serbia', 'Croatia', 'Italy', 'Spain', 'Greece', 'Montenegro'];
