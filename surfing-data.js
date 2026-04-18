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
  },
  {
    id: 'sligo-surf-experience',
    name: 'Sligo Surf Experience',
    country: 'Ireland', countryFlag: '🇮🇪',
    city: 'Sligo', lat: 54.27, lng: -8.47,
    website: 'https://www.sligosurfexperience.ie', contact: '+353 71 912 3456', contactEmail: 'info@sligosurfexperience.ie',
    description: 'Discover the raw power of Ireland\'s Wild Atlantic Way from Sligo\'s legendary surf beaches. Strandhill and Mullaghmore offer world-class waves in a dramatic coastal setting.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 0.1, description: 'Direct access to Strandhill Beach with views of Knocknarea mountain' },
    priceRange: { from: 350, to: 950, unit: 'week', display: '€350 - €950/week' },
    socialMedia: { instagram: '@sligosurfexp', facebook: 'https://facebook.com/sligosurfexperience', twitter: '@sligosurfexp' },
    climate: 'sligo',
    facilities: 'Surf school, board storage, wetsuit hire, video analysis room, changing rooms, hot showers, yoga studio, café',
    courtSurfaces: ['Beach break', 'Reef break', 'Point break'],
    programs: [
      { name: 'Wild Atlantic Surf Week', price: '€700/week', desc: 'Explore Sligo\'s diverse surf breaks with experienced local guides' },
      { name: 'Beginner Introduction', price: '€350/week', desc: 'Safe and fun introduction to surfing on Strandhill\'s gentle waves' },
      { name: 'Mullaghmore Big Wave Experience', price: '€950/week', desc: 'Advanced big wave training at Ireland\'s premier heavy water spot' }
    ],
    coaches: [
      { name: 'Conor O\'Donnell', credential: 'ISA Level 3 Surf Instructor', background: 'Irish big wave champion and Mullaghmore local with international competition experience', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Irish'], instagram: '@conorodonnellsurf' },
      { name: 'Siobhán Murphy', credential: 'ISA Level 2 Surf Instructor', background: 'Former Irish women\'s surf team member and youth development coach', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Irish'], instagram: '@siobhanmurphysurf' }
    ],
    photos: ['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800'],
    upcomingCamps: [
      { name: 'Summer Surf Camp', startDate: '2026-07-06', endDate: '2026-07-13', price: '€700', level: 'All levels' },
      { name: 'Autumn Storm Swells', startDate: '2026-10-05', endDate: '2026-10-12', price: '€850', level: 'Intermediate-Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'surf-house', label: 'Strandhill Surf Lodge', pricePerWeek: 280, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true },
        { type: 'hotel', label: 'Ocean View Hotel Sligo', pricePerWeek: 480, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: false, notes: 'Strandhill village offers pubs, restaurants and the famous Voya seaweed baths'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-06-01',
      spotsLeft: 16, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 10, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Online schooling support available during term time',
      medicalStaff: true, safeguarding: 'ISA safeguarding certified, Garda vetted coaches',
      airportPickup: true, mealPlan: 'Full board with hearty Irish cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Irish'],
      emergencyProtocol: 'On-site first aid, Sligo University Hospital 15 minutes, RNLI lifeboat station nearby'
    }
  },
  {
    id: 'donegal-surf-centre',
    name: 'Donegal Surf Centre',
    country: 'Ireland', countryFlag: '🇮🇪',
    city: 'Donegal', lat: 54.65, lng: -8.11,
    website: 'https://www.donegalsurfcentre.ie', contact: '+353 74 913 4567', contactEmail: 'info@donegalsurfcentre.ie',
    description: 'Experience Ireland\'s most remote and unspoiled surf coastline. Donegal\'s rugged Atlantic shores deliver powerful swells with uncrowded lineups and breathtaking scenery.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 0.2, description: 'Multiple beaches including Rossnowlagh and Tullan Strand within easy reach' },
    priceRange: { from: 300, to: 900, unit: 'week', display: '€300 - €900/week' },
    socialMedia: { instagram: '@donegalsurfcentre', facebook: 'https://facebook.com/donegalsurfcentre', twitter: '@donegalsurf' },
    climate: 'donegal',
    facilities: 'Surf school, board storage, wetsuit hire, video analysis room, heated changing rooms, equipment repair workshop, café',
    courtSurfaces: ['Beach break', 'Reef break', 'Point break'],
    programs: [
      { name: 'Atlantic Explorer Week', price: '€650/week', desc: 'Tour Donegal\'s best breaks with local guides who know every hidden spot' },
      { name: 'Learn to Surf', price: '€300/week', desc: 'Beginner-friendly lessons on Rossnowlagh\'s wide sandy beach' },
      { name: 'Cold Water Performance Camp', price: '€900/week', desc: 'Advanced coaching in challenging Atlantic conditions with big wave safety' }
    ],
    coaches: [
      { name: 'Pádraig Gallagher', credential: 'ISA Level 3 Surf Instructor', background: 'Donegal native with 25 years surfing the wild northwest coast, big wave specialist', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Irish'], instagram: '@padraiggallaghersurf' },
      { name: 'Aoife Brennan', credential: 'ISA Level 2 Surf Instructor', background: 'Irish national surf team member and cold water surfing advocate', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Irish'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1455729552457-5c322e55d607?w=800'],
    upcomingCamps: [
      { name: 'Summer Wild Atlantic Camp', startDate: '2026-07-13', endDate: '2026-07-20', price: '€650', level: 'All levels' },
      { name: 'Winter Storm Safari', startDate: '2027-01-11', endDate: '2027-01-18', price: '€900', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'surf-house', label: 'Atlantic Surf House', pricePerWeek: 250, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true },
        { type: 'hotel', label: 'Donegal Bay Hotel', pricePerWeek: 450, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: false, notes: 'Remote coastal location with stunning scenery and traditional Irish hospitality'
    },
    availability: {
      status: 'limited',
      nextIntake: '2026-06-15',
      spotsLeft: 10, responseTime: '48h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 12, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Online schooling support available',
      medicalStaff: true, safeguarding: 'ISA safeguarding certified, Garda vetted coaches',
      airportPickup: true, mealPlan: 'Full board with local organic produce',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Irish'],
      emergencyProtocol: 'On-site first aid, Letterkenny University Hospital 40 minutes, coast guard on call'
    }
  },
  {
    id: 'lacanau-surf-academy',
    name: 'Lacanau Surf Academy',
    country: 'France', countryFlag: '🇫🇷',
    city: 'Lacanau', lat: 44.98, lng: -1.20,
    website: 'https://www.lacanausurfacademy.fr', contact: '+33 5 56 12 34 56', contactEmail: 'info@lacanausurfacademy.fr',
    description: 'Train on France\'s legendary Atlantic coast at Lacanau, host of the WSL Qualifying Series. Powerful beach breaks and a vibrant surf culture make this the perfect French surf destination.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 0.1, description: 'Beachfront position on Lacanau-Océan\'s main surf beach' },
    priceRange: { from: 400, to: 1100, unit: 'week', display: '€400 - €1,100/week' },
    socialMedia: { instagram: '@lacanausurfacademy', facebook: 'https://facebook.com/lacanausurfacademy', twitter: '@lacanausurf' },
    climate: 'lacanau',
    facilities: 'Surf school, board storage, wetsuit hire, video analysis room, skate park, fitness centre, surf shop, outdoor terrace',
    courtSurfaces: ['Beach break', 'Sand bar'],
    programs: [
      { name: 'Competition Training', price: '€1,000/week', desc: 'High-performance coaching on WQS-standard beach breaks' },
      { name: 'Surf & Skate Week', price: '€600/week', desc: 'Combine ocean surfing with skateboard cross-training for improved board skills' },
      { name: 'Beginner Surf Holiday', price: '€400/week', desc: 'Fun and safe introduction to surfing in warm summer conditions' }
    ],
    coaches: [
      { name: 'Antoine Dupont', credential: 'ISA Level 3 Surf Instructor', background: 'Former French national surf team member and Lacanau Pro competitor', atpWta: false, bestRanking: null, rankingNote: null, languages: ['French', 'English', 'Spanish'], instagram: '@antoinedupont_surf' },
      { name: 'Camille Laurent', credential: 'ISA Level 2 Surf Instructor', background: 'French women\'s longboard champion and experienced youth coach', atpWta: false, bestRanking: null, rankingNote: null, languages: ['French', 'English'], instagram: '@camillelaurentsurf' }
    ],
    photos: ['https://images.unsplash.com/photo-1502933691298-84fc14542831?w=800'],
    upcomingCamps: [
      { name: 'Summer Surf Camp', startDate: '2026-07-06', endDate: '2026-07-13', price: '€750', level: 'All levels' },
      { name: 'Autumn Pro Training', startDate: '2026-09-21', endDate: '2026-09-28', price: '€1,000', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'surf-house', label: 'Lacanau Surf Lodge', pricePerWeek: 320, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true },
        { type: 'hotel', label: 'Hôtel de l\'Océan', pricePerWeek: 550, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: false, notes: 'Lacanau-Océan village with restaurants, bars and cycle paths through pine forests'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-06-01',
      spotsLeft: 18, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 8, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Online schooling support available during term time',
      medicalStaff: true, safeguarding: 'ISA safeguarding certified, French federation approved',
      airportPickup: true, mealPlan: 'Full board with French cuisine and healthy surf nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['French', 'English', 'Spanish'],
      emergencyProtocol: 'On-site first aid, Bordeaux hospital 60 minutes, beach lifeguards on duty'
    }
  },
  {
    id: 'brittany-surf-school',
    name: 'Brittany Surf School',
    country: 'France', countryFlag: '🇫🇷',
    city: 'Brittany', lat: 47.84, lng: -4.35,
    website: 'https://www.brittanysurfschool.fr', contact: '+33 2 98 12 34 56', contactEmail: 'info@brittanysurfschool.fr',
    description: 'Surf the wild Breton coastline at La Torche, one of France\'s most consistent surf spots. Celtic culture meets Atlantic waves in this unique corner of northern France.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 0.1, description: 'La Torche beach with panoramic views of the Baie d\'Audierne' },
    priceRange: { from: 350, to: 950, unit: 'week', display: '€350 - €950/week' },
    socialMedia: { instagram: '@brittanysurfschool', facebook: 'https://facebook.com/brittanysurfschool', twitter: '@brittanysurf' },
    climate: 'brittany',
    facilities: 'Surf school, board storage, wetsuit hire, video analysis room, surf simulator, crêperie, yoga space',
    courtSurfaces: ['Beach break', 'Point break', 'Reef break'],
    programs: [
      { name: 'La Torche Performance Week', price: '€800/week', desc: 'Intensive training at Brittany\'s premier competition venue' },
      { name: 'Celtic Surf Discovery', price: '€400/week', desc: 'Explore Brittany\'s diverse coastline and learn to read Atlantic swells' },
      { name: 'Longboard & Culture', price: '€600/week', desc: 'Classic longboarding combined with Breton cultural experiences' }
    ],
    coaches: [
      { name: 'Yann Le Goff', credential: 'ISA Level 2 Surf Instructor', background: 'Breton surf pioneer with 20 years of coaching on the Finistère coast', atpWta: false, bestRanking: null, rankingNote: null, languages: ['French', 'English', 'Breton'], instagram: '@yannlegoffsurf' },
      { name: 'Nolwenn Moreau', credential: 'ISA Level 2 Surf Instructor', background: 'French longboard champion and ocean safety specialist', atpWta: false, bestRanking: null, rankingNote: null, languages: ['French', 'English'], instagram: '@nolwennmoreau' }
    ],
    photos: ['https://images.unsplash.com/photo-1468581264429-2548ef9eb732?w=800'],
    upcomingCamps: [
      { name: 'Summer Breton Surf', startDate: '2026-07-13', endDate: '2026-07-20', price: '€650', level: 'All levels' },
      { name: 'Autumn Swell Session', startDate: '2026-10-12', endDate: '2026-10-19', price: '€800', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'surf-house', label: 'La Torche Surf House', pricePerWeek: 270, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true },
        { type: 'hotel', label: 'Hôtel de la Baie', pricePerWeek: 480, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: false, notes: 'Experience authentic Breton village life with crêperies and local markets'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-06-15',
      spotsLeft: 14, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 8, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Online schooling support available',
      medicalStaff: true, safeguarding: 'ISA safeguarding certified, French federation approved',
      airportPickup: true, mealPlan: 'Full board featuring Breton specialties and fresh seafood',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['French', 'English'],
      emergencyProtocol: 'On-site first aid, Quimper hospital 30 minutes, SNSM coastal rescue'
    }
  },
  {
    id: 'fuerteventura-surf-camp',
    name: 'Fuerteventura Surf Camp',
    country: 'Spain', countryFlag: '🇪🇸',
    city: 'Fuerteventura', lat: 28.36, lng: -14.05,
    website: 'https://www.fuerteventurasurfcamp.es', contact: '+34 928 123 456', contactEmail: 'info@fuerteventurasurfcamp.es',
    description: 'Surf the volcanic shores of Fuerteventura, the Canary Island closest to Africa. Warm water, constant trade winds, and over 150 surf spots make it a year-round surf paradise.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 0.1, description: 'Steps from the famous El Cotillo lagoons and reef breaks' },
    priceRange: { from: 400, to: 1200, unit: 'week', display: '€400 - €1,200/week' },
    socialMedia: { instagram: '@fuertesurfcamp', facebook: 'https://facebook.com/fuerteventurasurfcamp', twitter: '@fuertesurfcamp' },
    climate: 'fuerteventura',
    facilities: 'Surf school, board storage, wetsuit hire, video analysis room, swimming pool, fitness gym, terrace bar, surf shop',
    courtSurfaces: ['Beach break', 'Reef break', 'Point break'],
    programs: [
      { name: 'Island Surf Safari', price: '€900/week', desc: 'Explore Fuerteventura\'s 150+ surf spots with experienced local guides' },
      { name: 'Warm Water Beginner Week', price: '€450/week', desc: 'Learn to surf in crystal-clear warm water with no wetsuit needed' },
      { name: 'North Shore Power Surf', price: '€1,200/week', desc: 'Advanced training on the powerful reef breaks of the north coast' }
    ],
    coaches: [
      { name: 'Carlos Mendoza', credential: 'ISA Level 3 Surf Instructor', background: 'Canary Islands surf champion and big wave rider with 15 years coaching experience', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Spanish', 'English', 'German'], instagram: '@carlosmendozasurf' },
      { name: 'Elena Rodríguez', credential: 'ISA Level 2 Surf Instructor', background: 'Spanish women\'s bodyboard champion and water safety expert', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Spanish', 'English'], instagram: '@elenarodriguezsurf' }
    ],
    photos: ['https://images.unsplash.com/photo-1519450050567-28a5b19093a0?w=800'],
    upcomingCamps: [
      { name: 'Winter Sun Surf Camp', startDate: '2026-12-07', endDate: '2026-12-14', price: '€900', level: 'All levels' },
      { name: 'Spring Swell Season', startDate: '2026-03-16', endDate: '2026-03-23', price: '€800', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'surf-house', label: 'El Cotillo Surf Villa', pricePerWeek: 350, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true },
        { type: 'hotel', label: 'Hotel Playa Cotillo', pricePerWeek: 580, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: false, notes: 'Year-round warm climate with water temperatures averaging 20°C'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-03-01',
      spotsLeft: 22, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 8, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Online schooling support and Spanish language immersion available',
      medicalStaff: true, safeguarding: 'ISA safeguarding certified, Spanish federation approved',
      airportPickup: true, mealPlan: 'Full board with fresh Canarian cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Spanish', 'English', 'German'],
      emergencyProtocol: 'On-site first aid, Fuerteventura hospital 30 minutes, lifeguards on all main beaches'
    }
  },
  {
    id: 'mundaka-wave-riders',
    name: 'Mundaka Wave Riders',
    country: 'Spain', countryFlag: '🇪🇸',
    city: 'Mundaka', lat: 43.41, lng: -2.70,
    website: 'https://www.mundakawaveriders.es', contact: '+34 946 123 456', contactEmail: 'info@mundakawaveriders.es',
    description: 'Ride Europe\'s most famous left-hand river mouth barrel at Mundaka in the Basque Country. This legendary wave attracts surfers from around the world to its perfectly hollow tubes.',
    ageGroups: ['Junior', 'Adult'],
    level: 'Intermediate to advanced',
    individualLessons: true,
    boarding: true,
    beach: { distance: 0.3, description: 'Mundaka river mouth with the famous left-hand barrel and nearby Laida beach' },
    priceRange: { from: 450, to: 1300, unit: 'week', display: '€450 - €1,300/week' },
    socialMedia: { instagram: '@mundakawaveriders', facebook: 'https://facebook.com/mundakawaveriders', twitter: '@mundakawave' },
    climate: 'mundaka',
    facilities: 'Surf school, board storage, wetsuit hire, video analysis room, barrel simulation pool, Basque pintxo bar, board shaping workshop',
    courtSurfaces: ['River mouth break', 'Beach break', 'Reef break'],
    programs: [
      { name: 'Mundaka Barrel Masterclass', price: '€1,200/week', desc: 'Master the art of tube riding on Europe\'s most famous left-hander' },
      { name: 'Basque Coast Explorer', price: '€700/week', desc: 'Surf multiple spots along the Basque coastline from Mundaka to Bakio' },
      { name: 'River Mouth Technique', price: '€900/week', desc: 'Specialized training on reading and riding river mouth waves' }
    ],
    coaches: [
      { name: 'Iñaki Arana', credential: 'ISA Level 3 Surf Instructor', background: 'Mundaka local and former Billabong Pro competitor, Basque Country surf legend', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Spanish', 'Basque', 'English'], instagram: '@inakiaranasurf' },
      { name: 'Miren Etxebarria', credential: 'ISA Level 2 Surf Instructor', background: 'Basque women\'s surf champion and river mouth wave specialist', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Spanish', 'Basque', 'English'], instagram: '@mirenetxebarria' }
    ],
    photos: ['https://images.unsplash.com/photo-1505459668311-8dfac7952bf0?w=800'],
    upcomingCamps: [
      { name: 'Autumn Barrel Season', startDate: '2026-10-05', endDate: '2026-10-12', price: '€1,100', level: 'Advanced' },
      { name: 'Summer Surf & Culture', startDate: '2026-07-20', endDate: '2026-07-27', price: '€800', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'surf-house', label: 'Mundaka Surf House', pricePerWeek: 300, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true },
        { type: 'hotel', label: 'Hotel Atalaya Mundaka', pricePerWeek: 520, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: false, notes: 'Charming Basque fishing village with world-class pintxo bars and cider houses'
    },
    availability: {
      status: 'limited',
      nextIntake: '2026-07-01',
      spotsLeft: 8, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 14, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Online schooling support available',
      medicalStaff: true, safeguarding: 'ISA safeguarding certified, Spanish federation approved',
      airportPickup: true, mealPlan: 'Full board with authentic Basque cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Spanish', 'Basque', 'English'],
      emergencyProtocol: 'On-site first aid, Gernika hospital 15 minutes, coast guard station nearby'
    }
  },
  {
    id: 'lofoten-arctic-surf',
    name: 'Lofoten Arctic Surf',
    country: 'Norway', countryFlag: '🇳🇴',
    city: 'Lofoten', lat: 68.23, lng: 14.57,
    website: 'https://www.lofotenarcticsur.no', contact: '+47 76 12 34 56', contactEmail: 'info@lofotenarcticsur.no',
    description: 'Surf beneath the Northern Lights in the Arctic Circle. Lofoten\'s stunning fjords and white sand beaches offer a truly unique cold water surfing experience with midnight sun sessions in summer.',
    ageGroups: ['Junior', 'Adult'],
    level: 'Intermediate to advanced',
    individualLessons: true,
    boarding: true,
    beach: { distance: 0.2, description: 'Unstad Beach, the world\'s most northerly surf beach, surrounded by dramatic peaks' },
    priceRange: { from: 800, to: 2000, unit: 'week', display: '€800 - €2,000/week' },
    socialMedia: { instagram: '@lofotenarcticsur', facebook: 'https://facebook.com/lofotenarcticsur', twitter: '@lofotenarctic' },
    climate: 'lofoten',
    facilities: 'Surf school, board storage, wetsuit hire, heated changing rooms, sauna, video analysis room, arctic gear rental, Northern Lights viewing deck',
    courtSurfaces: ['Beach break', 'Point break'],
    programs: [
      { name: 'Northern Lights Surf Safari', price: '€1,800/week', desc: 'Surf under the aurora borealis in the Arctic winter darkness' },
      { name: 'Midnight Sun Surf Week', price: '€1,200/week', desc: 'Endless summer sessions with 24 hours of daylight above the Arctic Circle' },
      { name: 'Arctic Cold Water Mastery', price: '€2,000/week', desc: 'Extreme cold water training with survival skills and glacier exploration' }
    ],
    coaches: [
      { name: 'Erik Henriksen', credential: 'ISA Level 2 Surf Instructor', background: 'Norwegian cold water surf pioneer and Arctic expedition leader', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Norwegian', 'English', 'Swedish'], instagram: '@erikhenriksensurf' },
      { name: 'Ingrid Solberg', credential: 'ISA Level 2 Surf Instructor', background: 'Norwegian women\'s surf champion and cold water specialist', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Norwegian', 'English'], instagram: '@ingridsolbergsurf' }
    ],
    photos: ['https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800'],
    upcomingCamps: [
      { name: 'Northern Lights Camp', startDate: '2027-01-18', endDate: '2027-01-25', price: '€1,800', level: 'Intermediate-Advanced' },
      { name: 'Midnight Sun Sessions', startDate: '2026-06-22', endDate: '2026-06-29', price: '€1,200', level: 'All levels' }
    ],
    accommodation: {
      types: [
        { type: 'surf-house', label: 'Unstad Arctic Surf Lodge', pricePerWeek: 500, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true },
        { type: 'hotel', label: 'Lofoten Fjord Hotel', pricePerWeek: 900, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: false, notes: 'Remote Arctic location with traditional fishing cabins and spectacular fjord scenery'
    },
    availability: {
      status: 'waitlist',
      nextIntake: '2026-06-01',
      spotsLeft: 6, responseTime: '48h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 14, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Online schooling support available',
      medicalStaff: true, safeguarding: 'ISA safeguarding certified, Norwegian surf federation approved',
      airportPickup: true, mealPlan: 'Full board with Norwegian Arctic cuisine including fresh seafood',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Norwegian', 'English'],
      emergencyProtocol: 'On-site first aid, Leknes hospital 30 minutes, coast guard and mountain rescue on call'
    }
  },
  {
    id: 'klitmoller-cold-hawaii',
    name: 'Klitmøller Cold Hawaii Surf',
    country: 'Denmark', countryFlag: '🇩🇰',
    city: 'Klitmøller', lat: 57.04, lng: 8.50,
    website: 'https://www.coldhawaiisurf.dk', contact: '+45 97 12 34 56', contactEmail: 'info@coldhawaiisurf.dk',
    description: 'Welcome to Cold Hawaii — Denmark\'s world-famous surf destination. Klitmøller\'s exposed North Sea coast delivers powerful waves and consistent wind, making it Europe\'s top windsurfing and surfing town.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 0.1, description: 'Direct access to Klitmøller\'s reef and beach breaks on the Thy coastline' },
    priceRange: { from: 500, to: 1400, unit: 'week', display: '€500 - €1,400/week' },
    socialMedia: { instagram: '@coldhawaiisurf', facebook: 'https://facebook.com/coldhawaiisurf', twitter: '@coldhawaii' },
    climate: 'klitmoller',
    facilities: 'Surf school, board storage, wetsuit hire, video analysis room, windsurf equipment, sauna, coworking space, bike rental',
    courtSurfaces: ['Reef break', 'Beach break', 'Point break'],
    programs: [
      { name: 'Cold Hawaii Performance Week', price: '€1,000/week', desc: 'Advanced training on Denmark\'s most powerful reef breaks' },
      { name: 'North Sea Beginner Course', price: '€500/week', desc: 'Safe introduction to surfing on protected beach breaks' },
      { name: 'Surf & Windsurf Combo', price: '€1,400/week', desc: 'Master both surfing and windsurfing in Europe\'s wind capital' }
    ],
    coaches: [
      { name: 'Rasmus Jensen', credential: 'ISA Level 2 Surf Instructor', background: 'Danish national surf champion and Cold Hawaii pioneer', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Danish', 'English', 'German'], instagram: '@rasmusjensensurf' },
      { name: 'Maja Christensen', credential: 'ISA Level 2 Surf Instructor', background: 'Danish women\'s surf team member and North Sea specialist', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Danish', 'English'], instagram: '@majachristensensurf' }
    ],
    photos: ['https://images.unsplash.com/photo-1518737003510-ff53eb0a9cfa?w=800'],
    upcomingCamps: [
      { name: 'Summer North Sea Camp', startDate: '2026-07-06', endDate: '2026-07-13', price: '€800', level: 'All levels' },
      { name: 'Autumn Storm Surf', startDate: '2026-10-19', endDate: '2026-10-26', price: '€1,000', level: 'Intermediate-Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'surf-house', label: 'Cold Hawaii Surf House', pricePerWeek: 380, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true },
        { type: 'hotel', label: 'Hotel Nystrup Camping Resort', pricePerWeek: 600, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: false, notes: 'Peaceful Danish coastal village with strong hygge culture and organic dining'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-06-01',
      spotsLeft: 15, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 10, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Online schooling support available',
      medicalStaff: true, safeguarding: 'ISA safeguarding certified, Danish surf federation approved',
      airportPickup: true, mealPlan: 'Full board with organic Danish cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Danish', 'English', 'German'],
      emergencyProtocol: 'On-site first aid, Thisted hospital 20 minutes, Danish maritime rescue service'
    }
  },
  {
    id: 'reykjanes-surf-iceland',
    name: 'Reykjanes Surf Iceland',
    country: 'Iceland', countryFlag: '🇮🇸',
    city: 'Reykjanes', lat: 63.87, lng: -22.45,
    website: 'https://www.reykjanessurficeland.is', contact: '+354 421 1234', contactEmail: 'info@reykjanessurficeland.is',
    description: 'Surf the edge of two tectonic plates on Iceland\'s volcanic Reykjanes Peninsula. Black lava beaches, geothermal hot springs, and powerful North Atlantic swells create an unforgettable surf adventure.',
    ageGroups: ['Junior', 'Adult'],
    level: 'Intermediate to advanced',
    individualLessons: true,
    boarding: true,
    beach: { distance: 0.3, description: 'Black volcanic sand beaches along the Reykjanes coastline near Sandvík' },
    priceRange: { from: 900, to: 2500, unit: 'week', display: '€900 - €2,500/week' },
    socialMedia: { instagram: '@reykjanessurficeland', facebook: 'https://facebook.com/reykjanessurficeland', twitter: '@reykjanessurf' },
    climate: 'reykjanes',
    facilities: 'Surf school, board storage, drysuit hire, video analysis room, geothermal hot tub, heated lodge, photography studio, glacier tour desk',
    courtSurfaces: ['Beach break', 'Reef break', 'Lava reef break'],
    programs: [
      { name: 'Fire & Ice Surf Experience', price: '€2,200/week', desc: 'Surf volcanic coastlines and warm up in natural geothermal hot springs' },
      { name: 'Arctic Surf Expedition', price: '€2,500/week', desc: 'Multi-spot exploration of Iceland\'s remote surf breaks with 4x4 transport' },
      { name: 'Summer Surf & Adventure', price: '€1,500/week', desc: 'Combine surfing with whale watching, glacier hiking, and hot spring bathing' }
    ],
    coaches: [
      { name: 'Björn Sigurðsson', credential: 'ISA Level 2 Surf Instructor', background: 'Iceland\'s pioneering surfer with 15 years exploring the island\'s coastline', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Icelandic', 'English', 'Danish'], instagram: '@bjornsigurdsson' },
      { name: 'Hekla Jónsdóttir', credential: 'ISA Level 1 Surf Instructor', background: 'Icelandic women\'s surf champion and ocean conservationist', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Icelandic', 'English'], instagram: '@heklajonsdottir' }
    ],
    photos: ['https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=800'],
    upcomingCamps: [
      { name: 'Midnight Sun Surf', startDate: '2026-06-15', endDate: '2026-06-22', price: '€1,500', level: 'Intermediate' },
      { name: 'Northern Lights Surf', startDate: '2027-02-08', endDate: '2027-02-15', price: '€2,200', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'surf-house', label: 'Reykjanes Surf Lodge', pricePerWeek: 600, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true },
        { type: 'hotel', label: 'Blue Lagoon Retreat Hotel', pricePerWeek: 1100, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: false, notes: 'Near the famous Blue Lagoon with geothermal heating and volcanic landscapes'
    },
    availability: {
      status: 'waitlist',
      nextIntake: '2026-06-01',
      spotsLeft: 4, responseTime: '72h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 16, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Online schooling support available',
      medicalStaff: true, safeguarding: 'ISA safeguarding certified, Icelandic search and rescue trained',
      airportPickup: true, mealPlan: 'Full board with Icelandic cuisine including fresh fish and lamb',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Icelandic', 'English'],
      emergencyProtocol: 'On-site first aid, Keflavík hospital 20 minutes, ICE-SAR rescue team on call'
    }
  },
  {
    id: 'scheveningen-surf-school',
    name: 'Scheveningen Surf School',
    country: 'Netherlands', countryFlag: '🇳🇱',
    city: 'Scheveningen', lat: 52.10, lng: 4.27,
    website: 'https://www.scheveningensurfschool.nl', contact: '+31 70 123 4567', contactEmail: 'info@scheveningensurfschool.nl',
    description: 'Surf the North Sea waves at The Hague\'s famous seaside resort. Scheveningen offers accessible urban surfing with excellent transport links and a vibrant beach culture.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 0.1, description: 'Scheveningen\'s wide sandy beach with the iconic pier and harbour' },
    priceRange: { from: 400, to: 1100, unit: 'week', display: '€400 - €1,100/week' },
    socialMedia: { instagram: '@scheveningensurfschool', facebook: 'https://facebook.com/scheveningensurfschool', twitter: '@scheveningensurf' },
    climate: 'scheveningen',
    facilities: 'Surf school, board storage, wetsuit hire, video analysis room, indoor wave simulator, beach bar, bicycle rental, changing facilities',
    courtSurfaces: ['Beach break', 'Sand bar'],
    programs: [
      { name: 'North Sea Performance Week', price: '€900/week', desc: 'Intensive training on powerful North Sea wind swells' },
      { name: 'City Surf Beginner Course', price: '€400/week', desc: 'Learn to surf with easy access from The Hague city centre' },
      { name: 'Storm Season Intensive', price: '€1,100/week', desc: 'Advanced coaching during the powerful autumn and winter storm swells' }
    ],
    coaches: [
      { name: 'Joost van der Berg', credential: 'ISA Level 2 Surf Instructor', background: 'Dutch national surf champion and North Sea wave specialist', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Dutch', 'English', 'German'], instagram: '@joostvdbergsurf' },
      { name: 'Lisa de Vries', credential: 'ISA Level 2 Surf Instructor', background: 'Dutch women\'s surf team member and youth development specialist', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Dutch', 'English', 'French'], instagram: '@lisadevriessurf' }
    ],
    photos: ['https://images.unsplash.com/photo-1515722673787-8c9e6d16d75e?w=800'],
    upcomingCamps: [
      { name: 'Summer Beach Surf', startDate: '2026-07-06', endDate: '2026-07-13', price: '€700', level: 'All levels' },
      { name: 'Autumn Storm Sessions', startDate: '2026-11-02', endDate: '2026-11-09', price: '€900', level: 'Intermediate-Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'surf-house', label: 'Scheveningen Beach House', pricePerWeek: 350, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true },
        { type: 'hotel', label: 'Kurhaus Hotel', pricePerWeek: 650, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: false, notes: 'Urban surf location with excellent public transport, restaurants and nightlife'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-06-01',
      spotsLeft: 20, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 8, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Online schooling support and local international schools nearby',
      medicalStaff: true, safeguarding: 'ISA safeguarding certified, Dutch surf federation approved',
      airportPickup: true, mealPlan: 'Full board with Dutch and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Dutch', 'English', 'German'],
      emergencyProtocol: 'On-site first aid, HMC Westeinde hospital 10 minutes, KNRM coastal rescue'
    }
  },
  {
    id: 'sardinia-surf-camp',
    name: 'Sardinia Surf Camp',
    country: 'Italy', countryFlag: '🇮🇹',
    city: 'Sardinia', lat: 40.07, lng: 8.56,
    website: 'https://www.sardiniasurfcamp.it', contact: '+39 079 123 4567', contactEmail: 'info@sardiniasurfcamp.it',
    description: 'Discover the Mediterranean\'s best-kept surfing secret. Sardinia\'s western coast catches powerful mistral swells, offering excellent waves with crystal-clear turquoise water and Italian hospitality.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 0.1, description: 'Capo Mannu peninsula with world-class reef breaks and white sand beaches' },
    priceRange: { from: 450, to: 1200, unit: 'week', display: '€450 - €1,200/week' },
    socialMedia: { instagram: '@sardiniasurfcamp', facebook: 'https://facebook.com/sardiniasurfcamp', twitter: '@sardiniasurf' },
    climate: 'sardinia',
    facilities: 'Surf school, board storage, wetsuit hire, video analysis room, swimming pool, outdoor kitchen, yoga terrace, mountain bike rental',
    courtSurfaces: ['Reef break', 'Beach break', 'Point break'],
    programs: [
      { name: 'Mediterranean Wave Week', price: '€800/week', desc: 'Surf Sardinia\'s best breaks with warm water and Italian sunshine' },
      { name: 'Beginner Surf & Sail', price: '€500/week', desc: 'Introduction to surfing combined with sailing on the Costa Verde' },
      { name: 'Capo Mannu Pro Training', price: '€1,200/week', desc: 'Advanced reef break coaching at Sardinia\'s most powerful wave' }
    ],
    coaches: [
      { name: 'Marco Ferrara', credential: 'ISA Level 2 Surf Instructor', background: 'Italian national surf champion and Mediterranean wave expert', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Italian', 'English', 'Spanish'], instagram: '@marcoferrarasurf' },
      { name: 'Giulia Mancini', credential: 'ISA Level 2 Surf Instructor', background: 'Italian women\'s surf team member and youth development coach', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Italian', 'English'], instagram: '@giuliamancinisurf' }
    ],
    photos: ['https://images.unsplash.com/photo-1509914398892-963f53e6e2f1?w=800'],
    upcomingCamps: [
      { name: 'Autumn Mistral Camp', startDate: '2026-10-05', endDate: '2026-10-12', price: '€800', level: 'All levels' },
      { name: 'Spring Mediterranean Surf', startDate: '2026-04-20', endDate: '2026-04-27', price: '€700', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'surf-house', label: 'Sardinian Surf Villa', pricePerWeek: 320, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true },
        { type: 'hotel', label: 'Hotel Costa Verde', pricePerWeek: 550, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: false, notes: 'Stunning Mediterranean setting with Italian cuisine, local wine and archaeological sites'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-04-01',
      spotsLeft: 18, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 8, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Online schooling support and Italian language immersion available',
      medicalStaff: true, safeguarding: 'ISA safeguarding certified, Italian surf federation approved',
      airportPickup: true, mealPlan: 'Full board with authentic Sardinian cuisine and fresh seafood',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Italian', 'English', 'Spanish'],
      emergencyProtocol: 'On-site first aid, Oristano hospital 30 minutes, Italian coast guard'
    }
  },
  {
    id: 'sagres-surf-camp',
    name: 'Sagres Surf Camp',
    country: 'Portugal', countryFlag: '🇵🇹',
    city: 'Sagres', lat: 37.01, lng: -8.94,
    website: 'https://www.sagressurfcamp.pt', contact: '+351 282 123 456', contactEmail: 'info@sagressurfcamp.pt',
    description: 'Surf at the southwestern tip of Europe where the Algarve meets the wild Atlantic. Sagres offers diverse breaks on both south and west-facing coasts, making it surfable in almost any conditions.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 0.2, description: 'Multiple beaches including Tonel, Beliche and Mareta within walking distance' },
    priceRange: { from: 380, to: 1100, unit: 'week', display: '€380 - €1,100/week' },
    socialMedia: { instagram: '@sagressurfcamp', facebook: 'https://facebook.com/sagressurfcamp', twitter: '@sagressurf' },
    climate: 'sagres',
    facilities: 'Surf school, board storage, wetsuit hire, video analysis room, rooftop terrace, hammock garden, surf shop, outdoor gym',
    courtSurfaces: ['Beach break', 'Reef break', 'Point break'],
    programs: [
      { name: 'End of the World Surf Week', price: '€800/week', desc: 'Explore the diverse breaks around Cape St. Vincent, Europe\'s southwestern tip' },
      { name: 'Beginner Beach Week', price: '€380/week', desc: 'Safe and fun introduction on Sagres\' sheltered south-facing beaches' },
      { name: 'Algarve Surf Safari', price: '€1,100/week', desc: 'Multi-spot tour of secret Algarve breaks with 4x4 transport and photography' }
    ],
    coaches: [
      { name: 'João Pereira', credential: 'ISA Level 3 Surf Instructor', background: 'Sagres local and former Portuguese national team surfer with 18 years experience', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Portuguese', 'English', 'Spanish'], instagram: '@joaopereirasurf' },
      { name: 'Ana Costa', credential: 'ISA Level 2 Surf Instructor', background: 'Portuguese women\'s longboard champion and ocean ecology educator', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Portuguese', 'English', 'French'], instagram: '@anacostasurf' }
    ],
    photos: ['https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=800'],
    upcomingCamps: [
      { name: 'Spring Surf Week', startDate: '2026-04-13', endDate: '2026-04-20', price: '€700', level: 'All levels' },
      { name: 'Autumn Atlantic Swells', startDate: '2026-10-12', endDate: '2026-10-19', price: '€900', level: 'Intermediate-Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'surf-house', label: 'Sagres Surf Lodge', pricePerWeek: 290, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true },
        { type: 'hotel', label: 'Pousada de Sagres', pricePerWeek: 520, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: false, notes: 'Historic fortress town with dramatic cliffs, fresh seafood restaurants and sunset views'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-04-01',
      spotsLeft: 16, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 8, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Online schooling support available during term time',
      medicalStaff: true, safeguarding: 'ISA safeguarding certified, all coaches background-checked',
      airportPickup: true, mealPlan: 'Full board with fresh Algarve cuisine and local seafood',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Portuguese', 'English', 'Spanish'],
      emergencyProtocol: 'On-site first aid, Lagos hospital 30 minutes, lifeguards and coast guard nearby'
    }
  },
  {
    id: 'alacati-surf-academy',
    name: 'Alaçatı Surf & Windsurf Academy',
    country: 'Turkey', countryFlag: '',
    city: 'Çeşme', lat: 38.2833, lng: 26.3775,
    website: 'https://www.alacatisurf.com.tr', contact: '+90 232 716 1234', contactEmail: 'info@alacatisurf.com.tr',
    description: 'Turkey\'s premier wind and surf academy in Alaçatı, famous for its consistent Meltemi winds. A world-class windsurfing and kitesurfing destination with flat-water bays and wave spots on the Aegean coast.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 0.1, description: 'Alaçatı Bay directly at the academy, multiple surf beaches within 5km' },
    priceRange: { from: 400, to: 1200, unit: 'week', display: '400 - 1,200/week' },
    socialMedia: { instagram: '@alacatisurf', facebook: 'https://facebook.com/alacatisurfacademy', twitter: '@alacatisurf' },
    climate: 'alacati',
    facilities: 'Beachfront surf school, board and wetsuit storage, windsurf and kitesurf equipment, video analysis, rooftop terrace, surf shop, yoga deck',
    courtSurfaces: ['Flat-water bay', 'Wave break', 'Beach break'],
    programs: [
      { name: 'Windsurf Intensive Week', price: '900/week', desc: 'Master windsurfing in Alaçatı\'s consistent Meltemi winds with certified instructors' },
      { name: 'Beginner Surf & Windsurf', price: '400/week', desc: 'Introduction to surfing and windsurfing on sheltered Aegean bays' },
      { name: 'Kitesurf Adventure', price: '1,200/week', desc: 'Kitesurfing course in world-class wind conditions with IKO-certified coaches' }
    ],
    coaches: [
      { name: 'Emre Kaya', credential: 'IWS Level 3 Windsurf Instructor', background: 'Turkish national windsurfing champion and Alaçatı local with 15 years teaching experience', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Turkish', 'English', 'German'], instagram: '@emrekayawind' },
      { name: 'Deniz Arslan', credential: 'ISA Level 2 Surf Instructor', background: 'Turkish women\'s surf champion and ocean sports educator on the Aegean coast', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Turkish', 'English'], instagram: '@denizarslansurf' }
    ],
    photos: ['https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=800'],
    upcomingCamps: [
      { name: 'Summer Wind Camp', startDate: '2026-07-06', endDate: '2026-07-13', price: '900', level: 'All levels' },
      { name: 'Autumn Kite Week', startDate: '2026-09-28', endDate: '2026-10-05', price: '1,200', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'surf-house', label: 'Alaçatı Surf Lodge', pricePerWeek: 280, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true },
        { type: 'hotel', label: 'Alaçatı Boutique Hotel', pricePerWeek: 480, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: false, notes: 'Charming Alaçatı stone houses with windmill views and fresh Aegean cuisine'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-05-01',
      spotsLeft: 16, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 10, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Online schooling support available during term time',
      medicalStaff: true, safeguarding: 'Turkish water sports safeguarding certified, all coaches background-checked',
      airportPickup: true, mealPlan: 'Full board with fresh Aegean cuisine and local seafood',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Turkish', 'English'],
      emergencyProtocol: 'On-site first aid, Çeşme hospital 15 minutes, lifeguards and coast guard nearby'
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
  'taghazout': { avgTemp: 20, sunshine: 3200, rainDays: 25, humidity: 60, windSpeed: 12, bestMonths: 'Oct-Apr', description: 'Warm and sunny with consistent point break swells in winter' },
  'sligo': { avgTemp: 10, sunshine: 1200, rainDays: 150, humidity: 84, windSpeed: 20, bestMonths: 'May-Sep', description: 'Wild Atlantic climate with powerful swells and dramatic Benbulben backdrop' },
  'donegal': { avgTemp: 9, sunshine: 1100, rainDays: 160, humidity: 86, windSpeed: 22, bestMonths: 'May-Sep', description: 'Ireland\'s most remote coastline with raw Atlantic exposure and pristine lineups' },
  'lacanau': { avgTemp: 14, sunshine: 2050, rainDays: 95, humidity: 76, windSpeed: 14, bestMonths: 'Jun-Oct', description: 'Gironde coast climate with warm summers and powerful autumn swells' },
  'brittany': { avgTemp: 12, sunshine: 1700, rainDays: 120, humidity: 80, windSpeed: 18, bestMonths: 'May-Sep', description: 'Celtic maritime climate with consistent Atlantic swells and cool waters' },
  'fuerteventura': { avgTemp: 21, sunshine: 2900, rainDays: 15, humidity: 55, windSpeed: 20, bestMonths: 'Year-round', description: 'Arid subtropical climate with warm water and constant trade wind swells' },
  'mundaka': { avgTemp: 14, sunshine: 1700, rainDays: 130, humidity: 76, windSpeed: 12, bestMonths: 'Sep-Nov', description: 'Basque maritime climate with autumn river mouth barrels and mild temperatures' },
  'lofoten': { avgTemp: 5, sunshine: 1100, rainDays: 140, humidity: 80, windSpeed: 16, bestMonths: 'Sep-Mar for swells, Jun-Aug for midnight sun', description: 'Arctic maritime climate with Northern Lights, midnight sun and cold water surfing' },
  'klitmoller': { avgTemp: 8, sunshine: 1500, rainDays: 120, humidity: 82, windSpeed: 22, bestMonths: 'Jun-Sep', description: 'Exposed North Sea climate with strong winds and consistent swells year-round' },
  'reykjanes': { avgTemp: 5, sunshine: 1000, rainDays: 170, humidity: 78, windSpeed: 24, bestMonths: 'Jun-Aug for mild weather, Oct-Mar for biggest swells', description: 'Subarctic oceanic climate with geothermal warmth and powerful North Atlantic surf' },
  'scheveningen': { avgTemp: 10, sunshine: 1600, rainDays: 110, humidity: 80, windSpeed: 18, bestMonths: 'Jun-Sep', description: 'North Sea maritime climate with storm-driven swells and accessible urban surfing' },
  'sardinia': { avgTemp: 17, sunshine: 2600, rainDays: 50, humidity: 65, windSpeed: 14, bestMonths: 'Oct-Apr', description: 'Mediterranean climate with mistral-driven swells and warm crystal-clear water' },
  'sagres': { avgTemp: 17, sunshine: 2900, rainDays: 45, humidity: 68, windSpeed: 16, bestMonths: 'Year-round', description: 'Mild Algarve climate with dual coast exposure providing waves in all conditions' },
  'alacati': { avgTemp: 18, sunshine: 2900, rainDays: 50, humidity: 60, windSpeed: 22, bestMonths: 'May-Oct', description: 'Aegean Mediterranean climate with hot dry summers and consistent Meltemi winds, world-class windsurfing conditions' }
};

const NEWS_ITEMS = [
  { date: '2025-01-15', title: 'WSL Announces Expanded European Championship Tour Stops', summary: 'The World Surf League confirms additional European events for 2025, including return stops at Peniche and Hossegor, boosting European surf tourism.' },
  { date: '2025-01-10', title: 'Wave Pool Technology Arrives in Portugal', summary: 'A new Kelly Slater-style wave pool facility opens near Lisbon, offering consistent training waves and complementing Portugal\'s world-class ocean surf.' },
  { date: '2025-01-05', title: 'European Surf Schools Report Record Winter Bookings', summary: 'Warm water destinations in Morocco, Canary Islands, and Algarve see unprecedented demand as surfers seek winter sunshine and consistent swells.' },
  { date: '2024-12-20', title: 'Nazaré Breaks New Big Wave World Record', summary: 'A new world record wave is ridden at Nazaré\'s Praia do Norte, further cementing the Portuguese town as the big wave capital of the world.' },
  { date: '2024-12-15', title: 'Surfing\'s Olympic Journey Continues with LA 2028 Preparations', summary: 'Following surfing\'s success at Paris 2024, preparations begin for LA 2028 with European surf academies offering Olympic pathway programmes.' }
];

const COUNTRIES = ['Portugal', 'France', 'Spain', 'UK', 'Ireland', 'Morocco', 'Norway', 'Denmark', 'Iceland', 'Netherlands', 'Italy', 'Turkey'];
