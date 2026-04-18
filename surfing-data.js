const SPORT_TYPE = 'surfing';
const ACADEMIES = [
  {
    id: 'peniche-surf-academy',
    name: 'Peniche Surf Academy',
    country: 'Portugal', countryFlag: '🇵🇹',
    city: 'Peniche', lat: 39.36, lng: -9.38,
    website: 'https://www.penichesurfacademy.pt', contact: '+351 262 123 456', contactEmail: 'info@penichesurfacademy.pt',
    description: 'Train at one of Europe\'s premier surf destinations, home to the WSL Championship Tour stop at Supertubos. Consistent waves year-round with a variety of beach and reef breaks.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 0.1, description: 'Beachfront location at Baleal with direct access to multiple surf breaks' },
    priceRange: { from: 400, to: 1200, unit: 'week', display: '€400 - €1,200/week' },
    socialMedia: { instagram: '@penichesurfacademy', facebook: 'https://facebook.com/penichesurfacademy', twitter: '@penichesurfacad' },
    climate: 'peniche',
    facilities: 'Surf school, board storage, wetsuit hire, video analysis room, surf simulator, yoga studio, beach fitness area, surf shop',
    courtSurfaces: ['Beach break', 'Reef break', 'Point break', 'Wave pool'],
    programs: [
      { name: 'WSL Wave Mastery', price: '€1,000/week', desc: 'Advanced surf coaching on the same waves used for WSL Championship events' },
      { name: 'Beginner Surf Week', price: '€450/week', desc: 'Learn to surf with expert instructors on beginner-friendly waves' },
      { name: 'Tube Riding Clinic', price: '€1,200/week', desc: 'Master barrel riding at Supertubos with experienced big wave surfers' }
    ],
    coaches: [
      { name: 'Tiago Ferreira', credential: 'ISA Level 3 Surf Instructor', background: 'Former WQS competitor and Peniche local with 20 years of coaching experience', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Portuguese', 'Spanish'], instagram: '@tiagoferreirasurf' },
      { name: 'Maria Santos', credential: 'ISA Level 2 Surf Instructor', background: 'Portuguese women\'s surfing champion and youth development specialist', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Portuguese'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1502680390548-bdbac40b3d0f?w=800', 'https://images.unsplash.com/photo-1455729552457-5c322e55d607?w=800'],
    upcomingCamps: [
      { name: 'Summer Surf Camp', startDate: '2025-07-07', endDate: '2025-07-14', price: '€800', level: 'All levels' },
      { name: 'Autumn Swell Season', startDate: '2025-10-06', endDate: '2025-10-13', price: '€1,000', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'surf-house', label: 'Beachfront Surf House', pricePerWeek: 300, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true },
        { type: 'hotel', label: 'Baleal Beach Hotel', pricePerWeek: 500, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: false, notes: 'All accommodation within walking distance of the beach and surf breaks'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-01',
      spotsLeft: 20, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 8, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Online schooling support available during term time',
      medicalStaff: true, safeguarding: 'ISA safeguarding certified, all coaches background-checked',
      airportPickup: true, mealPlan: 'Full board with healthy Portuguese cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Portuguese'],
      emergencyProtocol: 'On-site lifeguards, Peniche hospital 10 minutes, ocean rescue equipment'
    }
  },
  {
    id: 'ericeira-wave-school',
    name: 'Ericeira World Surfing Reserve School',
    country: 'Portugal', countryFlag: '🇵🇹',
    city: 'Ericeira', lat: 38.96, lng: -9.42,
    website: 'https://www.ericeirawaveschool.pt', contact: '+351 261 234 567', contactEmail: 'info@ericeirawaveschool.pt',
    description: 'Surf in Europe\'s only World Surfing Reserve. Ericeira offers world-class waves along a stunning coastline with a charming fishing village atmosphere.',
    ageGroups: ['Junior', 'Adult', 'Masters'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 0.05, description: 'Steps from Ribeira d\'Ilhas, one of Europe\'s finest right-hand point breaks' },
    priceRange: { from: 500, to: 1500, unit: 'week', display: '€500 - €1,500/week' },
    socialMedia: { instagram: '@ericeirawaveschool', facebook: 'https://facebook.com/ericeirawaveschool', twitter: '@ericeiraws' },
    climate: 'ericeira',
    facilities: 'Surf school, board storage, wetsuit hire, video analysis, yoga studio, beach fitness area, skate ramp, surf photography',
    courtSurfaces: ['Beach break', 'Reef break', 'Point break'],
    programs: [
      { name: 'World Surfing Reserve Experience', price: '€1,200/week', desc: 'Surf the best breaks in Europe\'s World Surfing Reserve with local experts' },
      { name: 'Progressive Surf Programme', price: '€800/week', desc: 'Structured progression from beginner to intermediate with video coaching' },
      { name: 'Competition Surf Training', price: '€1,500/week', desc: 'High-performance training for competitive surfers' }
    ],
    coaches: [
      { name: 'Pedro Oliveira', credential: 'ISA Level 3 Surf Instructor', background: 'Ericeira local, former Portuguese national surf team member', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Portuguese', 'French'], instagram: '@pedrooliveira_surf' }
    ],
    photos: ['https://images.unsplash.com/photo-1502680390548-bdbac40b3d0f?w=800'],
    upcomingCamps: [
      { name: 'Spring Swell Camp', startDate: '2025-04-21', endDate: '2025-04-28', price: '€900', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'surf-house', label: 'Village Surf House', pricePerWeek: 280, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true },
        { type: 'apartment', label: 'Clifftop Apartment', pricePerWeek: 450, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: false }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: false, notes: 'Charming accommodation in Ericeira village within walking distance of all breaks'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-04-01',
      spotsLeft: 16, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 8, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Online schooling coordination available',
      medicalStaff: true, safeguarding: 'Full safeguarding policy, ISA certified coaches',
      airportPickup: true, mealPlan: 'Full board with fresh seafood and Portuguese cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Portuguese', 'French'],
      emergencyProtocol: 'On-site lifeguards, Torres Vedras hospital 25 minutes, ocean safety equipment'
    }
  },
  {
    id: 'nazare-big-wave-academy',
    name: 'Nazaré Big Wave Academy',
    country: 'Portugal', countryFlag: '🇵🇹',
    city: 'Nazaré', lat: 39.60, lng: -9.07,
    website: 'https://www.nazarebigwave.pt', contact: '+351 262 345 678', contactEmail: 'info@nazarebigwave.pt',
    description: 'Home of the biggest waves on Earth at Praia do Norte. From beginner beach breaks to advanced big wave safety and tow-in surfing, Nazaré offers a unique surf experience.',
    ageGroups: ['Adult'],
    level: 'Intermediate to Advanced',
    individualLessons: true,
    boarding: true,
    beach: { distance: 0.1, description: 'Beachfront at Praia do Norte and Praia da Vila' },
    priceRange: { from: 600, to: 2000, unit: 'week', display: '€600 - €2,000/week' },
    socialMedia: { instagram: '@nazarebigwave', facebook: 'https://facebook.com/nazarebigwave', twitter: '@nazarebigwave' },
    climate: 'nazare',
    facilities: 'Surf school, board storage, wetsuit hire, video analysis, surf simulator, yoga studio, beach fitness area, jet ski safety training, breath-hold training pool',
    courtSurfaces: ['Beach break', 'Reef break', 'Point break'],
    programs: [
      { name: 'Big Wave Safety & Skills', price: '€2,000/week', desc: 'Learn big wave protocols, breath-hold techniques, and jet ski rescue' },
      { name: 'Nazaré Surf Experience', price: '€800/week', desc: 'Surf the town beach and learn about Nazaré\'s unique wave dynamics' },
      { name: 'Advanced Wave Riding', price: '€1,500/week', desc: 'Push your limits on Nazaré\'s powerful and challenging waves' }
    ],
    coaches: [
      { name: 'Hugo Vau', credential: 'ISA Level 3, Big Wave Safety Certified', background: 'Professional big wave surfer with multiple Nazaré giant wave rides', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Portuguese'], instagram: '@hugovausurf' }
    ],
    photos: ['https://images.unsplash.com/photo-1502680390548-bdbac40b3d0f?w=800'],
    upcomingCamps: [
      { name: 'Big Wave Season Camp', startDate: '2025-11-03', endDate: '2025-11-10', price: '€2,000', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Nazaré Beach Hotel', pricePerWeek: 400, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: false, minStay: '1 week', shuttleToTraining: true, notes: 'Oceanfront hotel with views of the famous Nazaré lighthouse'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-10-01',
      spotsLeft: 10, responseTime: '48h', privateLessons: true, yearRound: false
    },
    juniorInfo: {
      minAge: 16, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Not available',
      medicalStaff: true, safeguarding: 'Comprehensive safety protocols, ISA certified staff',
      airportPickup: true, mealPlan: 'Full board with Portuguese seafood cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Portuguese'],
      emergencyProtocol: 'Jet ski rescue team on standby, Nazaré medical centre 5 minutes, Caldas da Rainha hospital 25 minutes'
    }
  },
  {
    id: 'lagos-surf-school',
    name: 'Lagos Algarve Surf School',
    country: 'Portugal', countryFlag: '🇵🇹',
    city: 'Lagos', lat: 37.10, lng: -8.67,
    website: 'https://www.lagossurfschool.pt', contact: '+351 282 456 789', contactEmail: 'info@lagossurfschool.pt',
    description: 'Surf the warm waves of the Algarve from the beautiful town of Lagos. Perfect for beginners and intermediates with sheltered bays and consistent beach breaks.',
    ageGroups: ['Junior', 'Adult', 'Masters'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 0.1, description: 'Beachfront at Meia Praia, one of the Algarve\'s longest beaches' },
    priceRange: { from: 350, to: 1000, unit: 'week', display: '€350 - €1,000/week' },
    socialMedia: { instagram: '@lagossurfschool', facebook: 'https://facebook.com/lagossurfschool', twitter: '@lagossurfschool' },
    climate: 'lagos',
    facilities: 'Surf school, board storage, wetsuit hire, video analysis, yoga studio, beach fitness area, stand-up paddleboard',
    courtSurfaces: ['Beach break', 'Point break'],
    programs: [
      { name: 'Algarve Surf & Sun', price: '€600/week', desc: 'Learn to surf in the warm Algarve sunshine with family-friendly coaching' },
      { name: 'Intermediate Progression', price: '€800/week', desc: 'Take your surfing to the next level with video analysis and targeted coaching' },
      { name: 'Family Surf Holiday', price: '€450/week', desc: 'Surf lessons for the whole family in a safe and fun environment' }
    ],
    coaches: [
      { name: 'André Costa', credential: 'ISA Level 2 Surf Instructor', background: 'Algarve local with 15 years of surf instruction experience', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Portuguese', 'German'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1455729552457-5c322e55d607?w=800'],
    upcomingCamps: [
      { name: 'Summer Family Surf Camp', startDate: '2025-07-14', endDate: '2025-07-21', price: '€600', level: 'Beginner' }
    ],
    accommodation: {
      types: [
        { type: 'surf-house', label: 'Lagos Surf Lodge', pricePerWeek: 250, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true },
        { type: 'apartment', label: 'Marina Apartment', pricePerWeek: 400, maxOccupancy: 3, bathType: 'ensuite', mealsIncluded: false }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Lagos town centre and marina within walking distance'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-01',
      spotsLeft: 25, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 6, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Summer camps only, no term-time schooling',
      medicalStaff: true, safeguarding: 'ISA safeguarding standards, all staff DBS equivalent checked',
      airportPickup: true, mealPlan: 'Full board with healthy Portuguese meals',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Portuguese', 'German'],
      emergencyProtocol: 'On-site lifeguards, Lagos hospital 10 minutes, beach rescue equipment'
    }
  },
  {
    id: 'hossegor-surf-centre',
    name: 'Hossegor Surf Centre',
    country: 'France', countryFlag: '🇫🇷',
    city: 'Hossegor', lat: 43.66, lng: -1.44,
    website: 'https://www.hossegorsurfcentre.fr', contact: '+33 5 58 123 456', contactEmail: 'info@hossegorsurfcentre.fr',
    description: 'The epicentre of European surfing. Hossegor\'s powerful beach breaks produce world-class barrels that host the WSL Championship Tour and attract elite surfers worldwide.',
    ageGroups: ['Junior', 'Adult'],
    level: 'Intermediate to Advanced',
    individualLessons: true,
    boarding: true,
    beach: { distance: 0.05, description: 'Beachfront at La Gravière, one of Europe\'s heaviest beach breaks' },
    priceRange: { from: 500, to: 1500, unit: 'week', display: '€500 - €1,500/week' },
    socialMedia: { instagram: '@hossegorsurfcentre', facebook: 'https://facebook.com/hossegorsurfcentre', twitter: '@hossegorsurf' },
    climate: 'hossegor',
    facilities: 'Surf school, board storage, wetsuit hire, video analysis, surf simulator, yoga studio, beach fitness area, shaping bay',
    courtSurfaces: ['Beach break', 'Reef break'],
    programs: [
      { name: 'Pro Surf Performance', price: '€1,500/week', desc: 'High-performance coaching on world-class waves with video analysis' },
      { name: 'Barrel Riding Intensive', price: '€1,200/week', desc: 'Master tube riding on Hossegor\'s legendary hollow waves' },
      { name: 'Competition Preparation', price: '€1,000/week', desc: 'Prepare for WSL events with structured heat strategy and wave selection' }
    ],
    coaches: [
      { name: 'Julien Dupont', credential: 'ISA Level 3, FF Surf Diplôme', background: 'Former WSL European tour competitor and Hossegor local legend', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'French', 'Spanish'], instagram: '@juliendupont_surf' }
    ],
    photos: ['https://images.unsplash.com/photo-1502680390548-bdbac40b3d0f?w=800'],
    upcomingCamps: [
      { name: 'Autumn Swell Camp', startDate: '2025-09-22', endDate: '2025-09-29', price: '€1,200', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'surf-house', label: 'Hossegor Surf Lodge', pricePerWeek: 350, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: false, notes: 'Walking distance to La Gravière and the forest cycling paths'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-01',
      spotsLeft: 14, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 12, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'French school coordination during term time',
      medicalStaff: true, safeguarding: 'FF Surf safeguarding certified, all coaches vetted',
      airportPickup: true, mealPlan: 'Full board with French and Basque cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'French'],
      emergencyProtocol: 'Beach lifeguards, Dax hospital 25 minutes, ocean rescue protocols'
    }
  },
  {
    id: 'biarritz-surf-academy',
    name: 'Biarritz Surf Academy',
    country: 'France', countryFlag: '🇫🇷',
    city: 'Biarritz', lat: 43.48, lng: -1.56,
    website: 'https://www.biarritzsurfacademy.fr', contact: '+33 5 59 234 567', contactEmail: 'info@biarritzsurfacademy.fr',
    description: 'The birthplace of European surfing. Biarritz combines elegant Basque culture with world-class waves, offering surf training in a sophisticated coastal setting.',
    ageGroups: ['Junior', 'Adult', 'Masters'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 0.1, description: 'At the iconic Grande Plage and Côte des Basques' },
    priceRange: { from: 500, to: 1500, unit: 'week', display: '€500 - €1,500/week' },
    socialMedia: { instagram: '@biarritzsurfacademy', facebook: 'https://facebook.com/biarritzsurfacademy', twitter: '@biarritzsurfac' },
    climate: 'biarritz',
    facilities: 'Surf school, board storage, wetsuit hire, video analysis, yoga studio, beach fitness area, Cité de l\'Océan partnership',
    courtSurfaces: ['Beach break', 'Reef break', 'Point break'],
    programs: [
      { name: 'Biarritz Surf Experience', price: '€900/week', desc: 'Surf the birthplace of European surfing with cultural immersion' },
      { name: 'Longboard Masterclass', price: '€800/week', desc: 'Classic longboarding on Biarritz\'s elegant waves' },
      { name: 'Surf & Yoga Retreat', price: '€1,200/week', desc: 'Combine daily surfing with yoga and mindfulness in beautiful Biarritz' }
    ],
    coaches: [
      { name: 'Sylvie Moreau', credential: 'ISA Level 2, FF Surf Brevet', background: 'French longboard champion and surf culture historian', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'French', 'Spanish', 'Basque'], instagram: '@sylviemoreau_surf' }
    ],
    photos: ['https://images.unsplash.com/photo-1455729552457-5c322e55d607?w=800'],
    upcomingCamps: [
      { name: 'Summer Surf & Culture', startDate: '2025-07-07', endDate: '2025-07-14', price: '€900', level: 'All levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Biarritz Boutique Hotel', pricePerWeek: 550, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'surf-house', label: 'Côte des Basques Surf House', pricePerWeek: 300, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: false, notes: 'Elegant Biarritz town centre accommodation with beach access'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-01',
      spotsLeft: 18, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 8, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'French school partnerships available',
      medicalStaff: true, safeguarding: 'FF Surf youth safeguarding, all staff background-checked',
      airportPickup: true, mealPlan: 'Full board with Basque gastronomy',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'French', 'Spanish'],
      emergencyProtocol: 'Beach lifeguards, Centre Hospitalier Côte Basque 10 minutes'
    }
  },
  {
    id: 'san-sebastian-surf-club',
    name: 'San Sebastián Surf Club',
    country: 'Spain', countryFlag: '🇪🇸',
    city: 'San Sebastián', lat: 43.32, lng: -1.98,
    website: 'https://www.sansebastiansurf.com', contact: '+34 943 123 456', contactEmail: 'info@sansebastiansurf.com',
    description: 'Surf in the gastronomic capital of Spain. San Sebastián offers consistent waves at Zurriola beach in one of Europe\'s most beautiful coastal cities.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 0.05, description: 'Directly on Zurriola beach, the city\'s main surf beach' },
    priceRange: { from: 450, to: 1300, unit: 'week', display: '€450 - €1,300/week' },
    socialMedia: { instagram: '@sansebastiansurf', facebook: 'https://facebook.com/sansebastiansurf', twitter: '@donostiasurf' },
    climate: 'san-sebastian',
    facilities: 'Surf school, board storage, wetsuit hire, video analysis, yoga studio, beach fitness area, skateboard park',
    courtSurfaces: ['Beach break', 'Reef break', 'Point break'],
    programs: [
      { name: 'Basque Country Surf Experience', price: '€900/week', desc: 'Surf Zurriola with Basque culture, pintxos, and coastal excursions' },
      { name: 'Urban Surf Programme', price: '€600/week', desc: 'Combine city life with daily surf sessions on world-class waves' },
      { name: 'Youth Surf Development', price: '€500/week', desc: 'Fun and progressive surf coaching for young wave riders' }
    ],
    coaches: [
      { name: 'Aritz Aranburu', credential: 'FES Level 3 Surf Coach', background: 'Former Basque Country surf champion and WSL competitor', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Spanish', 'Basque'], instagram: '@aritzaranburu' }
    ],
    photos: ['https://images.unsplash.com/photo-1502680390548-bdbac40b3d0f?w=800'],
    upcomingCamps: [
      { name: 'Pintxos & Surf Week', startDate: '2025-06-16', endDate: '2025-06-23', price: '€900', level: 'All levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Zurriola Beach Hotel', pricePerWeek: 500, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'surf-house', label: 'Old Town Surf House', pricePerWeek: 300, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: false, notes: 'Central San Sebastián location with Parte Vieja nightlife and pintxo bars'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-01',
      spotsLeft: 16, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 8, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Spanish school partnerships for term-time stays',
      medicalStaff: true, safeguarding: 'FES safeguarding policy, all coaches vetted',
      airportPickup: true, mealPlan: 'Full board with Basque cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Spanish', 'Basque'],
      emergencyProtocol: 'Beach lifeguards, Hospital Donostia 10 minutes'
    }
  },
  {
    id: 'canary-islands-surf',
    name: 'Canary Islands Surf Academy',
    country: 'Spain', countryFlag: '🇪🇸',
    city: 'Canary Islands', lat: 28.10, lng: -15.42,
    website: 'https://www.canaryislandssurf.com', contact: '+34 928 234 567', contactEmail: 'info@canaryislandssurf.com',
    description: 'Year-round surfing in the European Hawaii. The Canary Islands offer warm water, volcanic reef breaks, and consistent Atlantic swells in a subtropical paradise.',
    ageGroups: ['Junior', 'Adult', 'Masters'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 0.1, description: 'Beachfront with access to multiple volcanic reef and beach breaks' },
    priceRange: { from: 400, to: 1200, unit: 'week', display: '€400 - €1,200/week' },
    socialMedia: { instagram: '@canaryislandssurf', facebook: 'https://facebook.com/canaryislandssurf', twitter: '@canarysurf' },
    climate: 'canary-islands',
    facilities: 'Surf school, board storage, wetsuit hire, video analysis, surf simulator, yoga studio, beach fitness area, freediving pool',
    courtSurfaces: ['Beach break', 'Reef break', 'Point break', 'Wave pool'],
    programs: [
      { name: 'Volcanic Reef Surf Camp', price: '€900/week', desc: 'Explore the Canaries\' world-class reef breaks with expert local guides' },
      { name: 'Winter Sun Surf Escape', price: '€600/week', desc: 'Escape the European winter with warm water surfing year-round' },
      { name: 'Surf & Freedive', price: '€1,100/week', desc: 'Combine surfing with freediving training in crystal-clear volcanic waters' }
    ],
    coaches: [
      { name: 'Carlos Hernández', credential: 'ISA Level 2, FES Surf Coach', background: 'Canary Islands native and former Spanish national surf team member', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Spanish', 'German'], instagram: '@carloshernandez_surf' }
    ],
    photos: ['https://images.unsplash.com/photo-1455729552457-5c322e55d607?w=800'],
    upcomingCamps: [
      { name: 'Winter Swell Camp', startDate: '2025-12-01', endDate: '2025-12-08', price: '€900', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'surf-house', label: 'Beachfront Surf Villa', pricePerWeek: 300, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true },
        { type: 'hotel', label: 'Coastal Resort Hotel', pricePerWeek: 500, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Subtropical accommodation with pool and garden, near the beach'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-01-06',
      spotsLeft: 22, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 8, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Online schooling support during term time',
      medicalStaff: true, safeguarding: 'FES safeguarding compliance, all coaches background-checked',
      airportPickup: true, mealPlan: 'Full board with Canarian and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Spanish', 'German'],
      emergencyProtocol: 'On-site lifeguards, local hospital 15 minutes, ocean rescue team'
    }
  },
  {
    id: 'cornwall-surf-school',
    name: 'Cornwall Surf School',
    country: 'UK', countryFlag: '🇬🇧',
    city: 'Cornwall', lat: 50.41, lng: -5.07,
    website: 'https://www.cornwallsurfschool.co.uk', contact: '+44 1637 123 456', contactEmail: 'info@cornwallsurfschool.co.uk',
    description: 'The home of British surfing in Newquay, Cornwall. Fistral Beach offers consistent Atlantic surf with a vibrant surf culture and stunning coastal scenery.',
    ageGroups: ['Junior', 'Adult', 'Masters'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 0.05, description: 'On Fistral Beach, the UK\'s most famous surf beach' },
    priceRange: { from: 400, to: 1200, unit: 'week', display: '£400 - £1,200/week' },
    socialMedia: { instagram: '@cornwallsurfschool', facebook: 'https://facebook.com/cornwallsurfschool', twitter: '@cornwallsurf' },
    climate: 'cornwall',
    facilities: 'Surf school, board storage, wetsuit hire, video analysis, yoga studio, beach fitness area, indoor surf simulator',
    courtSurfaces: ['Beach break', 'Reef break', 'Point break'],
    programs: [
      { name: 'Fistral Performance Camp', price: '£1,000/week', desc: 'High-performance surf coaching on the UK\'s most consistent waves' },
      { name: 'Learn to Surf Week', price: '£450/week', desc: 'Beginner-friendly programme with warm wetsuits and patient coaching' },
      { name: 'Surf & Coasteering', price: '£700/week', desc: 'Combine surfing with coasteering, rock climbing, and ocean adventures' }
    ],
    coaches: [
      { name: 'Ben Skinner', credential: 'ISA Level 3, Surfing England Coach', background: 'Multiple British longboard champion and Newquay surfing legend', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English'], instagram: '@benskinner_surf' }
    ],
    photos: ['https://images.unsplash.com/photo-1502680390548-bdbac40b3d0f?w=800'],
    upcomingCamps: [
      { name: 'Summer Surf Camp', startDate: '2025-07-21', endDate: '2025-07-28', price: '£700', level: 'All levels' }
    ],
    accommodation: {
      types: [
        { type: 'surf-lodge', label: 'Fistral Surf Lodge', pricePerWeek: 300, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true },
        { type: 'hotel', label: 'Headland Hotel', pricePerWeek: 600, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: false, notes: 'Beachfront accommodation overlooking Fistral Beach'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-01',
      spotsLeft: 20, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 8, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Summer camps only',
      medicalStaff: true, safeguarding: 'Surfing England safeguarding Level 2, all staff DBS checked',
      airportPickup: true, mealPlan: 'Full board with Cornish cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English'],
      emergencyProtocol: 'RNLI lifeguards on Fistral, Royal Cornwall Hospital 15 minutes'
    }
  },
  {
    id: 'devon-surf-academy',
    name: 'North Devon Surf Academy',
    country: 'UK', countryFlag: '🇬🇧',
    city: 'Devon', lat: 51.10, lng: -4.22,
    website: 'https://www.devonsurfacademy.co.uk', contact: '+44 1271 234 567', contactEmail: 'info@devonsurfacademy.co.uk',
    description: 'Surf the beautiful north Devon coastline at Croyde and Woolacombe. Stunning sandy beaches with reliable waves and a relaxed surf village atmosphere.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 0.1, description: 'Overlooking Croyde Bay, one of England\'s best beach breaks' },
    priceRange: { from: 350, to: 1000, unit: 'week', display: '£350 - £1,000/week' },
    socialMedia: { instagram: '@devonsurfacademy', facebook: 'https://facebook.com/devonsurfacademy', twitter: '@devonsurf' },
    climate: 'devon',
    facilities: 'Surf school, board storage, wetsuit hire, video analysis, yoga studio, beach fitness area',
    courtSurfaces: ['Beach break', 'Point break'],
    programs: [
      { name: 'Croyde Surf Experience', price: '£700/week', desc: 'Surf Devon\'s best beaches with expert local coaching' },
      { name: 'Beginner Surf Holiday', price: '£400/week', desc: 'Perfect introduction to surfing on sandy beach breaks' }
    ],
    coaches: [
      { name: 'Jack Williams', credential: 'ISA Level 2, Surfing England Coach', background: 'North Devon local and British surf competition finalist', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1455729552457-5c322e55d607?w=800'],
    upcomingCamps: [
      { name: 'Easter Surf Camp', startDate: '2025-04-14', endDate: '2025-04-21', price: '£500', level: 'Beginner' }
    ],
    accommodation: {
      types: [
        { type: 'surf-house', label: 'Croyde Surf House', pricePerWeek: 280, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: false, notes: 'Cosy surf house in Croyde village, steps from the beach'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-04-01',
      spotsLeft: 14, responseTime: '48h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 8, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Summer camps only',
      medicalStaff: true, safeguarding: 'Surfing England safeguarding, all coaches DBS checked',
      airportPickup: true, mealPlan: 'Full board with Devon cream teas included',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English'],
      emergencyProtocol: 'RNLI lifeguards on beach, North Devon District Hospital 20 minutes'
    }
  },
  {
    id: 'bundoran-surf-centre',
    name: 'Bundoran Surf Centre',
    country: 'Ireland', countryFlag: '🇮🇪',
    city: 'Bundoran', lat: 54.48, lng: -8.28,
    website: 'https://www.bundoransurf.ie', contact: '+353 71 123 456', contactEmail: 'info@bundoransurf.ie',
    description: 'Ireland\'s surf capital in County Donegal. Cold water, powerful Atlantic swells, and raw Irish coastline create some of Europe\'s most exciting and uncrowded surf.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 0.1, description: 'On Tullan Strand with the famous Peak reef break nearby' },
    priceRange: { from: 350, to: 1000, unit: 'week', display: '€350 - €1,000/week' },
    socialMedia: { instagram: '@bundoransurf', facebook: 'https://facebook.com/bundoransurf', twitter: '@bundoransurf' },
    climate: 'bundoran',
    facilities: 'Surf school, board storage, wetsuit hire, video analysis, yoga studio, beach fitness area, hot showers and changing rooms',
    courtSurfaces: ['Beach break', 'Reef break', 'Point break'],
    programs: [
      { name: 'Wild Atlantic Surf Camp', price: '€800/week', desc: 'Surf Ireland\'s rugged Atlantic coast with experienced local guides' },
      { name: 'Beginner Irish Surf', price: '€400/week', desc: 'Learn to surf on safe sandy beaches with warm Irish hospitality' },
      { name: 'Advanced Reef Sessions', price: '€1,000/week', desc: 'Tackle Bundoran\'s world-class reef breaks with safety support' }
    ],
    coaches: [
      { name: 'Richie Fitzgerald', credential: 'ISA Level 3 Surf Instructor', background: 'Irish big wave pioneer and Bundoran surfing legend', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Irish'], instagram: '@richiefitzgerald_surf' }
    ],
    photos: ['https://images.unsplash.com/photo-1502680390548-bdbac40b3d0f?w=800'],
    upcomingCamps: [
      { name: 'Wild Atlantic Summer Camp', startDate: '2025-07-14', endDate: '2025-07-21', price: '€600', level: 'All levels' }
    ],
    accommodation: {
      types: [
        { type: 'surf-lodge', label: 'Bundoran Surf Lodge', pricePerWeek: 250, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: false, notes: 'Cosy surf lodge in Bundoran town with sea views and turf fire'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-01',
      spotsLeft: 12, responseTime: '48h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 10, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Summer camps only',
      medicalStaff: true, safeguarding: 'ISI safeguarding certified, all coaches Garda-vetted',
      airportPickup: true, mealPlan: 'Full board with hearty Irish meals',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Irish'],
      emergencyProtocol: 'Water safety team on standby, Sligo University Hospital 30 minutes'
    }
  },
  {
    id: 'taghazout-surf-village',
    name: 'Taghazout Surf Village',
    country: 'Morocco', countryFlag: '🇲🇦',
    city: 'Taghazout', lat: 30.54, lng: -9.71,
    website: 'https://www.taghazoutsurfvillage.com', contact: '+212 528 123 456', contactEmail: 'info@taghazoutsurfvillage.com',
    description: 'Morocco\'s premier surf destination with legendary right-hand point breaks, warm water, and North African culture. Anchor Point and Killer Point offer world-class waves.',
    ageGroups: ['Junior', 'Adult', 'Masters'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 0.05, description: 'Steps from the village beach with Anchor Point and other breaks nearby' },
    priceRange: { from: 300, to: 900, unit: 'week', display: '€300 - €900/week' },
    socialMedia: { instagram: '@taghazoutsurfvillage', facebook: 'https://facebook.com/taghazoutsurfvillage', twitter: '@taghazoutsurf' },
    climate: 'taghazout',
    facilities: 'Surf school, board storage, wetsuit hire, video analysis, yoga studio, beach fitness area, rooftop terrace, traditional hammam',
    courtSurfaces: ['Beach break', 'Reef break', 'Point break'],
    programs: [
      { name: 'Point Break Safari', price: '€800/week', desc: 'Explore Morocco\'s legendary point breaks with local surf guides' },
      { name: 'Surf & Yoga Morocco', price: '€600/week', desc: 'Daily surfing and rooftop yoga with traditional Moroccan hospitality' },
      { name: 'Beginner Surf Adventure', price: '€350/week', desc: 'Learn to surf on gentle beach breaks with warm Moroccan sunshine' }
    ],
    coaches: [
      { name: 'Yassine El Amrani', credential: 'ISA Level 2 Surf Instructor', background: 'Taghazout local and former Moroccan national surf team member', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Arabic', 'French'], instagram: '@yassine_surf' }
    ],
    photos: ['https://images.unsplash.com/photo-1455729552457-5c322e55d607?w=800'],
    upcomingCamps: [
      { name: 'Winter Surf Morocco', startDate: '2025-01-13', endDate: '2025-01-20', price: '€600', level: 'All levels' }
    ],
    accommodation: {
      types: [
        { type: 'surf-house', label: 'Taghazout Surf Riad', pricePerWeek: 200, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true },
        { type: 'villa', label: 'Ocean View Villa', pricePerWeek: 400, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Traditional Moroccan accommodation with rooftop terrace and ocean views'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-01-06',
      spotsLeft: 20, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 10, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Not available',
      medicalStaff: true, safeguarding: 'International safeguarding standards, all coaches certified',
      airportPickup: true, mealPlan: 'Full board with traditional Moroccan cuisine and fresh seafood',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Arabic', 'French'],
      emergencyProtocol: 'On-site first aid, Agadir hospital 25 minutes, beach lifeguards'
    }
  }
];

const CLIMATE_DATA = {
  'peniche': { avgTemp: 16, sunshine: 2600, rainDays: 65, humidity: 75, windSpeed: 18, bestMonths: 'May-Oct', description: 'Atlantic climate with consistent swells and mild temperatures year-round' },
  'ericeira': { avgTemp: 16, sunshine: 2600, rainDays: 60, humidity: 72, windSpeed: 16, bestMonths: 'May-Oct', description: 'Mild Atlantic climate in Europe\'s only World Surfing Reserve' },
  'nazare': { avgTemp: 16, sunshine: 2500, rainDays: 70, humidity: 75, windSpeed: 20, bestMonths: 'Oct-Mar for big waves, Jun-Sep for smaller surf', description: 'Atlantic climate with massive winter swells from the Nazaré Canyon' },
  'lagos': { avgTemp: 18, sunshine: 3000, rainDays: 40, humidity: 65, windSpeed: 14, bestMonths: 'Year-round', description: 'Warm Algarve climate with sheltered bays and consistent surf' },
  'hossegor': { avgTemp: 14, sunshine: 2000, rainDays: 100, humidity: 78, windSpeed: 14, bestMonths: 'Jun-Oct', description: 'Basque coast climate with powerful autumn and winter swells' },
  'biarritz': { avgTemp: 14, sunshine: 1900, rainDays: 105, humidity: 78, windSpeed: 14, bestMonths: 'Jun-Oct', description: 'Mild Basque climate with consistent Atlantic surf' },
  'san-sebastian': { avgTemp: 14, sunshine: 1800, rainDays: 120, humidity: 75, windSpeed: 14, bestMonths: 'Jun-Oct', description: 'Basque coast with warm summers and consistent year-round waves' },
  'canary-islands': { avgTemp: 22, sunshine: 2800, rainDays: 20, humidity: 60, windSpeed: 18, bestMonths: 'Year-round', description: 'Subtropical climate with warm water and consistent trade wind swells' },
  'cornwall': { avgTemp: 11, sunshine: 1600, rainDays: 130, humidity: 82, windSpeed: 18, bestMonths: 'May-Sep', description: 'Maritime climate with Atlantic swells and mild temperatures' },
  'devon': { avgTemp: 11, sunshine: 1600, rainDays: 125, humidity: 80, windSpeed: 16, bestMonths: 'May-Sep', description: 'Mild maritime climate with reliable summer surf conditions' },
  'bundoran': { avgTemp: 10, sunshine: 1200, rainDays: 150, humidity: 85, windSpeed: 20, bestMonths: 'May-Sep', description: 'Wild Atlantic climate with powerful swells and rugged coastline' },
  'taghazout': { avgTemp: 20, sunshine: 3200, rainDays: 25, humidity: 60, windSpeed: 12, bestMonths: 'Oct-Apr', description: 'Warm and sunny with consistent point break swells in winter' }
};

const NEWS_ITEMS = [
  { date: '2025-01-15', title: 'WSL Announces Expanded European Championship Tour Stops', summary: 'The World Surf League confirms additional European events for 2025, including return stops at Peniche and Hossegor, boosting European surf tourism.' },
  { date: '2025-01-10', title: 'Wave Pool Technology Arrives in Portugal', summary: 'A new Kelly Slater-style wave pool facility opens near Lisbon, offering consistent training waves and complementing Portugal\'s world-class ocean surf.' },
  { date: '2025-01-05', title: 'European Surf Schools Report Record Winter Bookings', summary: 'Warm water destinations in Morocco, Canary Islands, and Algarve see unprecedented demand as surfers seek winter sunshine and consistent swells.' },
  { date: '2024-12-20', title: 'Nazaré Breaks New Big Wave World Record', summary: 'A new world record wave is ridden at Nazaré\'s Praia do Norte, further cementing the Portuguese town as the big wave capital of the world.' },
  { date: '2024-12-15', title: 'Surfing\'s Olympic Journey Continues with LA 2028 Preparations', summary: 'Following surfing\'s success at Paris 2024, preparations begin for LA 2028 with European surf academies offering Olympic pathway programmes.' }
];

const COUNTRIES = ['Portugal', 'France', 'Spain', 'UK', 'Ireland', 'Morocco'];
