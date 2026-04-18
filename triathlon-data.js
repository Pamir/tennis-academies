const SPORT_TYPE = 'triathlon';
const ACADEMIES = [
  {
    id: 'lanzarote-tri-camp',
    name: 'Lanzarote Triathlon Performance Centre',
    country: 'Spain', countryFlag: '🇪🇸',
    city: 'Lanzarote', lat: 28.96, lng: -13.63,
    website: 'https://www.lanzarotetricamp.com', contact: '+34 928 123 456', contactEmail: 'info@lanzarotetricamp.com',
    description: 'World-class triathlon training facility on the volcanic island of Lanzarote, home of the legendary Ironman event. Athletes benefit from year-round warm weather, challenging terrain, and altitude simulation.',
    ageGroups: ['Junior', 'Adult', 'Masters'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 0.3, description: 'Close to Playa Grande for open water swim training' },
    priceRange: { from: 800, to: 2200, unit: 'week', display: '€800 - €2,200/week' },
    socialMedia: { instagram: '@lanzarotetricamp', facebook: 'https://facebook.com/lanzarotetricamp', twitter: '@lanzarotetri' },
    climate: 'lanzarote',
    facilities: 'Olympic pool, open water course, cycling routes through volcanic terrain, running tracks, transition training area, altitude chamber, sports science lab, gym',
    courtSurfaces: ['Open water swim', 'Pool swim', 'Road cycling', 'Trail running'],
    programs: [
      { name: 'Ironman Preparation Camp', price: '€1,800/week', desc: 'Full Ironman distance preparation with race simulation and nutrition planning' },
      { name: 'Sprint & Olympic Distance', price: '€1,200/week', desc: 'Focused training for shorter triathlon distances with technique emphasis' },
      { name: 'Swim Improvement Clinic', price: '€900/week', desc: 'Intensive open water and pool swimming technique improvement' }
    ],
    coaches: [
      { name: 'Carlos Mendoza', credential: 'ITU Level 3 Coach', background: 'Former Spanish national triathlon team coach with 15 years experience', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Spanish'], instagram: '@carlosmendozatri' },
      { name: 'Sarah Jenkins', credential: 'BTF Level 3 Coach', background: 'Former professional triathlete and Ironman finisher', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800', 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800'],
    upcomingCamps: [
      { name: 'Summer Ironman Prep', startDate: '2025-07-01', endDate: '2025-07-08', price: '€1,800', level: 'Advanced' },
      { name: 'Beginner Triathlon Week', startDate: '2025-08-10', endDate: '2025-08-17', price: '€1,000', level: 'Beginner' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Sport Hotel Partner', pricePerWeek: 500, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Self-catering apartment', pricePerWeek: 350, maxOccupancy: 4, bathType: 'shared', mealsIncluded: false }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Half-board and full-board meal plans available with sport nutrition focus'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-01',
      spotsLeft: 20, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 14, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Online schooling support available during camp',
      medicalStaff: true, safeguarding: 'DBS-checked coaches, comprehensive safeguarding policy in place',
      airportPickup: true, mealPlan: 'Full board with sport nutrition menu',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Spanish'],
      emergencyProtocol: '24/7 emergency contact, on-site first aid, hospital 15 minutes away'
    }
  },
  {
    id: 'girona-tri-hub',
    name: 'Girona Triathlon Hub',
    country: 'Spain', countryFlag: '🇪🇸',
    city: 'Girona', lat: 41.98, lng: 2.82,
    website: 'https://www.gironatrihub.com', contact: '+34 972 234 567', contactEmail: 'info@gironatrihub.com',
    description: 'Located in the cycling capital of Europe, Girona Triathlon Hub offers unparalleled road cycling terrain alongside excellent swim and run facilities in the Catalan countryside.',
    ageGroups: ['Adult', 'Masters'],
    level: 'Intermediate to Advanced',
    individualLessons: true,
    boarding: true,
    beach: { distance: 35, description: 'Costa Brava beaches accessible for open water training sessions' },
    priceRange: { from: 900, to: 2500, unit: 'week', display: '€900 - €2,500/week' },
    socialMedia: { instagram: '@gironatrihub', facebook: 'https://facebook.com/gironatrihub', twitter: '@gironatrihub' },
    climate: 'girona',
    facilities: 'Olympic pool, open water course at nearby reservoir, world-class cycling routes, running tracks, transition training area, sports science lab, bike workshop',
    courtSurfaces: ['Open water swim', 'Pool swim', 'Road cycling', 'Trail running'],
    programs: [
      { name: 'Pro Cycling & Tri Camp', price: '€2,000/week', desc: 'Ride the legendary Girona cycling routes with structured triathlon training' },
      { name: 'Half Ironman Focus', price: '€1,500/week', desc: 'Targeted 70.3 preparation with race-specific workouts' },
      { name: 'Technical Skills Week', price: '€1,100/week', desc: 'Focus on transitions, bike handling, and swim technique' }
    ],
    coaches: [
      { name: 'Marc Puig', credential: 'FETRI Level 3 Coach', background: 'Former professional triathlete, multiple Ironman 70.3 podiums', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Spanish', 'Catalan'], instagram: '@marcpuigtri' }
    ],
    photos: ['https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800'],
    upcomingCamps: [
      { name: 'Spring Cycling Camp', startDate: '2025-04-15', endDate: '2025-04-22', price: '€2,000', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Boutique Sport Hotel', pricePerWeek: 600, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: false, minStay: '1 week', shuttleToTraining: true, notes: 'Located in Girona old town with easy access to training routes'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-04-01',
      spotsLeft: 12, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 16, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Not available',
      medicalStaff: true, safeguarding: 'Full safeguarding policy with vetted coaching staff',
      airportPickup: true, mealPlan: 'Full board with athlete nutrition plans',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Spanish', 'Catalan'],
      emergencyProtocol: 'On-site medical support, hospital in Girona city centre'
    }
  },
  {
    id: 'mallorca-tri-academy',
    name: 'Mallorca Triathlon Academy',
    country: 'Spain', countryFlag: '🇪🇸',
    city: 'Mallorca', lat: 39.57, lng: 2.65,
    website: 'https://www.mallorcatriacademy.com', contact: '+34 971 345 678', contactEmail: 'info@mallorcatriacademy.com',
    description: 'Train on the Mediterranean island beloved by professional cyclists and triathletes. Perfect climate, stunning coastal roads, and crystal-clear waters for open water swimming.',
    ageGroups: ['Junior', 'Adult', 'Masters'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 0.5, description: 'Multiple coves and beaches for open water swim training' },
    priceRange: { from: 700, to: 2000, unit: 'week', display: '€700 - €2,000/week' },
    socialMedia: { instagram: '@mallorcatri', facebook: 'https://facebook.com/mallorcatriacademy', twitter: '@mallorcatri' },
    climate: 'mallorca',
    facilities: 'Olympic pool, open water course, cycling routes through Serra de Tramuntana, running tracks, transition training area, altitude chamber, sports science lab',
    courtSurfaces: ['Open water swim', 'Pool swim', 'Road cycling', 'Trail running'],
    programs: [
      { name: 'Island Training Camp', price: '€1,500/week', desc: 'Full triathlon training exploiting Mallorca\'s world-class cycling and swimming venues' },
      { name: 'Open Water Mastery', price: '€900/week', desc: 'Mediterranean open water swimming technique and confidence building' },
      { name: 'Junior Triathlon Development', price: '€800/week', desc: 'Age-appropriate multi-sport training for young athletes' }
    ],
    coaches: [
      { name: 'Marta Solano', credential: 'ITU Level 2 Coach', background: 'Former Age Group World Championship qualifier, coaching for 10 years', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Spanish', 'German'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1544919982-b61976f0ba43?w=800'],
    upcomingCamps: [
      { name: 'Easter Triathlon Camp', startDate: '2025-04-14', endDate: '2025-04-21', price: '€1,500', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Seaside Sport Hotel', pricePerWeek: 550, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'villa', label: 'Group Villa', pricePerWeek: 300, maxOccupancy: 6, bathType: 'shared', mealsIncluded: false }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Various accommodation options across the island with transport included'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-04-01',
      spotsLeft: 18, responseTime: '48h', privateLessons: true, yearRound: false
    },
    juniorInfo: {
      minAge: 12, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Online schooling coordination available',
      medicalStaff: true, safeguarding: 'Comprehensive child protection policy, all staff DBS checked',
      airportPickup: true, mealPlan: 'Full board with healthy Mediterranean cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Spanish', 'German'],
      emergencyProtocol: 'On-site first aid, hospital 20 minutes by car, 24/7 emergency phone'
    }
  },
  {
    id: 'nice-tri-centre',
    name: 'Nice Triathlon Centre',
    country: 'France', countryFlag: '🇫🇷',
    city: 'Nice', lat: 43.71, lng: 7.26,
    website: 'https://www.nicetricentre.fr', contact: '+33 4 93 123 456', contactEmail: 'info@nicetricentre.fr',
    description: 'Train on the iconic Ironman France Nice course along the stunning French Riviera. World-famous cycling climbs, Mediterranean swimming, and the legendary Promenade des Anglais run course.',
    ageGroups: ['Adult', 'Masters'],
    level: 'Intermediate to Advanced',
    individualLessons: true,
    boarding: true,
    beach: { distance: 0.1, description: 'Beachfront location on the Baie des Anges' },
    priceRange: { from: 1000, to: 2800, unit: 'week', display: '€1,000 - €2,800/week' },
    socialMedia: { instagram: '@nicetricentre', facebook: 'https://facebook.com/nicetricentre', twitter: '@nicetricentre' },
    climate: 'nice',
    facilities: 'Olympic pool, open water course in Baie des Anges, cycling routes to Col de la Madone, running tracks, transition training area, sports science lab, wind tunnel testing',
    courtSurfaces: ['Open water swim', 'Pool swim', 'Road cycling', 'Trail running'],
    programs: [
      { name: 'Ironman Nice Prep', price: '€2,500/week', desc: 'Train on the actual Ironman France course with detailed race strategy' },
      { name: 'Riviera Endurance Camp', price: '€1,800/week', desc: 'Multi-sport endurance training on the beautiful Côte d\'Azur' },
      { name: 'Cycling & Climbing Focus', price: '€1,500/week', desc: 'Intensive road cycling with legendary alpine climbs' }
    ],
    coaches: [
      { name: 'Philippe Durand', credential: 'FFTRI Diplôme d\'État', background: 'Former professional triathlete and Ironman Nice age group champion', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'French'], instagram: '@philippedurandtri' }
    ],
    photos: ['https://images.unsplash.com/photo-1502904550040-7534597429ae?w=800'],
    upcomingCamps: [
      { name: 'Ironman Nice Race Week', startDate: '2025-06-22', endDate: '2025-06-29', price: '€2,500', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Riviera Sport Hotel', pricePerWeek: 700, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: false, minStay: '1 week', shuttleToTraining: true, notes: 'Premium beachfront accommodation on the Promenade des Anglais'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-05-01',
      spotsLeft: 10, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 16, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Not available',
      medicalStaff: true, safeguarding: 'French federation safeguarding requirements met',
      airportPickup: true, mealPlan: 'Full board with French sport nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'French'],
      emergencyProtocol: 'On-site medic, CHU Nice hospital 10 minutes away'
    }
  },
  {
    id: 'font-romeu-altitude',
    name: 'Font Romeu Altitude Training Centre',
    country: 'France', countryFlag: '🇫🇷',
    city: 'Font Romeu', lat: 42.50, lng: 2.04,
    website: 'https://www.fontromeutri.fr', contact: '+33 4 68 234 567', contactEmail: 'info@fontromeutri.fr',
    description: 'High-altitude triathlon training at 1,800m in the French Pyrenees. The premier altitude training destination used by Olympic athletes across multiple sports.',
    ageGroups: ['Adult', 'Masters'],
    level: 'Advanced',
    individualLessons: true,
    boarding: true,
    beach: null,
    priceRange: { from: 1200, to: 3000, unit: 'week', display: '€1,200 - €3,000/week' },
    socialMedia: { instagram: '@fontromeutri', facebook: 'https://facebook.com/fontromeutri', twitter: '@fontromeutri' },
    climate: 'font-romeu',
    facilities: 'Olympic pool at altitude, cycling routes through Pyrenees, running tracks at 1800m, altitude chamber, sports science lab with VO2max testing, recovery centre',
    courtSurfaces: ['Pool swim', 'Road cycling', 'Trail running'],
    programs: [
      { name: 'Altitude Block Training', price: '€2,500/week', desc: 'Structured altitude training block for endurance performance gains' },
      { name: 'Pre-Season Altitude Camp', price: '€2,000/week', desc: 'Build aerobic base at altitude before race season' }
    ],
    coaches: [
      { name: 'Jean-Luc Martin', credential: 'FFTRI Diplôme d\'État Level 3', background: 'Olympic triathlon team support coach, altitude training specialist', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'French', 'Spanish'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800'],
    upcomingCamps: [
      { name: 'Pre-Season Altitude Block', startDate: '2025-03-15', endDate: '2025-03-29', price: '€4,500', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'residence', label: 'Athletes Residence', pricePerWeek: 450, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: false, childrenAllowed: false, minStay: '2 weeks', shuttleToTraining: true, notes: 'Purpose-built athletes residence at the national training centre'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-03-01',
      spotsLeft: 8, responseTime: '48h', privateLessons: true, yearRound: false
    },
    juniorInfo: {
      minAge: 16, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Not available during altitude blocks',
      medicalStaff: true, safeguarding: 'National federation safeguarding standards',
      airportPickup: true, mealPlan: 'Full board athlete menu with altitude-specific nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'French'],
      emergencyProtocol: 'On-site medical team, altitude sickness protocols, nearest hospital 30 min'
    }
  },
  {
    id: 'algarve-tri-camp',
    name: 'Algarve Triathlon Camp',
    country: 'Portugal', countryFlag: '🇵🇹',
    city: 'Algarve', lat: 37.02, lng: -7.93,
    website: 'https://www.algarvetricamp.pt', contact: '+351 289 123 456', contactEmail: 'info@algarvetricamp.pt',
    description: 'Sun-drenched triathlon training on Portugal\'s stunning southern coast. Over 300 days of sunshine, warm Atlantic waters, and rolling terrain perfect for all triathlon disciplines.',
    ageGroups: ['Junior', 'Adult', 'Masters'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 0.2, description: 'Direct access to Algarve coastline for open water swimming' },
    priceRange: { from: 600, to: 1800, unit: 'week', display: '€600 - €1,800/week' },
    socialMedia: { instagram: '@algarvetricamp', facebook: 'https://facebook.com/algarvetricamp', twitter: '@algarvetri' },
    climate: 'algarve',
    facilities: 'Olympic pool, open water course, cycling routes, running tracks, transition training area, sports science lab, outdoor gym',
    courtSurfaces: ['Open water swim', 'Pool swim', 'Road cycling', 'Trail running'],
    programs: [
      { name: 'Winter Sun Training Camp', price: '€1,200/week', desc: 'Escape the cold and train in guaranteed sunshine' },
      { name: 'First Triathlon Experience', price: '€700/week', desc: 'Complete beginner programme with supportive coaching' },
      { name: 'Race-Specific Preparation', price: '€1,500/week', desc: 'Tailored preparation for your target race' }
    ],
    coaches: [
      { name: 'João Silva', credential: 'FTP Level 2 Coach', background: 'Former Portuguese national triathlon team member', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Portuguese', 'Spanish'], instagram: '@joaotricoach' }
    ],
    photos: ['https://images.unsplash.com/photo-1560089000-7433a4ebbd64?w=800'],
    upcomingCamps: [
      { name: 'Winter Sun Camp', startDate: '2025-02-01', endDate: '2025-02-08', price: '€1,200', level: 'All levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Beach Resort Hotel', pricePerWeek: 450, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Poolside Apartment', pricePerWeek: 300, maxOccupancy: 4, bathType: 'shared', mealsIncluded: false }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Family-friendly resort with pool and beach access'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-02-01',
      spotsLeft: 25, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 10, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Online schooling support available',
      medicalStaff: true, safeguarding: 'Full safeguarding policy, all coaches background-checked',
      airportPickup: true, mealPlan: 'Full board with healthy Portuguese cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Portuguese'],
      emergencyProtocol: 'On-site first aid, Faro hospital 30 minutes'
    }
  },
  {
    id: 'lisbon-tri-centre',
    name: 'Lisbon Triathlon Centre',
    country: 'Portugal', countryFlag: '🇵🇹',
    city: 'Lisbon', lat: 38.72, lng: -9.14,
    website: 'https://www.lisbontri.pt', contact: '+351 21 456 789', contactEmail: 'info@lisbontri.pt',
    description: 'Urban triathlon training in Portugal\'s vibrant capital. Coastal swimming, scenic cycling along the Tagus estuary, and running through historic city parks.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 3, description: 'Cascais and Estoril beaches for open water sessions' },
    priceRange: { from: 500, to: 1500, unit: 'week', display: '€500 - €1,500/week' },
    socialMedia: { instagram: '@lisbontri', facebook: 'https://facebook.com/lisbontricentre', twitter: '@lisbontri' },
    climate: 'lisbon',
    facilities: 'Olympic pool, open water course at Cascais, cycling routes along Tagus, running tracks in Monsanto Park, transition training area, gym',
    courtSurfaces: ['Open water swim', 'Pool swim', 'Road cycling', 'Trail running'],
    programs: [
      { name: 'City Triathlon Experience', price: '€1,000/week', desc: 'Train in Lisbon with cultural immersion and structured coaching' },
      { name: 'Youth Triathlon Programme', price: '€600/week', desc: 'Fun-focused multi-sport development for young athletes' }
    ],
    coaches: [
      { name: 'Ana Rodrigues', credential: 'FTP Level 2 Coach', background: 'Portuguese triathlon champion and youth development specialist', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Portuguese', 'French'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800'],
    upcomingCamps: [
      { name: 'Summer Youth Tri Camp', startDate: '2025-07-14', endDate: '2025-07-21', price: '€700', level: 'Beginner' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'City Centre Hotel', pricePerWeek: 500, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Central Lisbon location with easy metro access to all training venues'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-01',
      spotsLeft: 15, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 8, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Partnership with local international school',
      medicalStaff: true, safeguarding: 'Portuguese federation safeguarding requirements met',
      airportPickup: true, mealPlan: 'Full board with Portuguese cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Portuguese'],
      emergencyProtocol: 'On-site first aid, multiple hospitals within 15 minutes in Lisbon'
    }
  },
  {
    id: 'livigno-altitude-tri',
    name: 'Livigno Altitude Triathlon Centre',
    country: 'Italy', countryFlag: '🇮🇹',
    city: 'Livigno', lat: 46.54, lng: 10.14,
    website: 'https://www.livignotri.it', contact: '+39 0342 123 456', contactEmail: 'info@livignotri.it',
    description: 'Elite altitude triathlon training at 1,816m in the Italian Alps. Tax-free zone with world-class facilities used by Olympic and professional athletes year-round.',
    ageGroups: ['Adult', 'Masters'],
    level: 'Advanced',
    individualLessons: true,
    boarding: true,
    beach: null,
    priceRange: { from: 1100, to: 2800, unit: 'week', display: '€1,100 - €2,800/week' },
    socialMedia: { instagram: '@livignotri', facebook: 'https://facebook.com/livignotri', twitter: '@livignotri' },
    climate: 'livigno',
    facilities: 'Olympic pool, cycling routes through Alpine passes, running tracks at altitude, altitude chamber, sports science lab with lactate testing, recovery centre with cryotherapy',
    courtSurfaces: ['Pool swim', 'Road cycling', 'Trail running'],
    programs: [
      { name: 'Elite Altitude Block', price: '€2,500/week', desc: 'Professional-level altitude training with full physiological monitoring' },
      { name: 'Alpine Cycling Focus', price: '€1,800/week', desc: 'Ride legendary Stelvio, Gavia and other Alpine passes' }
    ],
    coaches: [
      { name: 'Alessandro Rossi', credential: 'FITRI Level 3 Coach', background: 'Former Italian national team triathlon coach, altitude training expert', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Italian', 'German'], instagram: '@alessandrotricoach' }
    ],
    photos: ['https://images.unsplash.com/photo-1483721310020-03333e577078?w=800'],
    upcomingCamps: [
      { name: 'Summer Altitude Block', startDate: '2025-06-15', endDate: '2025-06-29', price: '€4,800', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Mountain Sport Hotel', pricePerWeek: 550, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: false, minStay: '2 weeks', shuttleToTraining: true, notes: 'Tax-free shopping in Livigno, full recovery amenities at hotel'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-01',
      spotsLeft: 8, responseTime: '48h', privateLessons: true, yearRound: false
    },
    juniorInfo: {
      minAge: 16, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Not available during training blocks',
      medicalStaff: true, safeguarding: 'Italian federation safeguarding protocols',
      airportPickup: true, mealPlan: 'Full board with Italian sport nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Italian'],
      emergencyProtocol: 'On-site medical team, altitude sickness monitoring, hospital in Bormio 30 min'
    }
  },
  {
    id: 'loughborough-tri-performance',
    name: 'Loughborough Triathlon Performance Centre',
    country: 'UK', countryFlag: '🇬🇧',
    city: 'Loughborough', lat: 52.77, lng: -1.20,
    website: 'https://www.lboroughtri.co.uk', contact: '+44 1509 123 456', contactEmail: 'info@lboroughtri.co.uk',
    description: 'Based at Loughborough University, the UK\'s premier sporting university. Access to elite-level sports science, world-class pool facilities, and the English countryside for cycling and running.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: null,
    priceRange: { from: 600, to: 1800, unit: 'week', display: '£600 - £1,800/week' },
    socialMedia: { instagram: '@lboroughtri', facebook: 'https://facebook.com/lboroughtri', twitter: '@lboroughtri' },
    climate: 'loughborough',
    facilities: 'Olympic pool, cycling routes through Charnwood Forest, running tracks, transition training area, sports science lab at university, strength and conditioning gym',
    courtSurfaces: ['Pool swim', 'Road cycling', 'Trail running'],
    programs: [
      { name: 'University Performance Programme', price: '£1,500/week', desc: 'Full-time triathlon training using Loughborough University facilities' },
      { name: 'Talent Development Pathway', price: '£800/week', desc: 'Structured development for aspiring competitive triathletes' },
      { name: 'Triathlon Taster Week', price: '£600/week', desc: 'Introduction to triathlon with expert coaching in all three disciplines' }
    ],
    coaches: [
      { name: 'James Thompson', credential: 'BTF Level 3 Coach', background: 'Former British Triathlon performance coach, Olympic pathway specialist', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800'],
    upcomingCamps: [
      { name: 'Junior Development Camp', startDate: '2025-08-04', endDate: '2025-08-11', price: '£900', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'university', label: 'University Halls', pricePerWeek: 350, maxOccupancy: 1, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: false, childrenAllowed: true, minStay: '1 week', shuttleToTraining: false, notes: 'On-campus accommodation with all facilities within walking distance'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-07-01',
      spotsLeft: 20, responseTime: '48h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 12, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Partnership with local schools for term-time training',
      medicalStaff: true, safeguarding: 'BTF safeguarding Level 2, all coaches DBS checked',
      airportPickup: true, mealPlan: 'Full board university catering with sport nutrition options',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English'],
      emergencyProtocol: 'University medical centre on campus, Royal Derby Hospital 30 minutes'
    }
  },
  {
    id: 'leeds-tri-centre',
    name: 'Leeds Triathlon Centre',
    country: 'UK', countryFlag: '🇬🇧',
    city: 'Leeds', lat: 53.80, lng: -1.55,
    website: 'https://www.leedstricentre.co.uk', contact: '+44 113 234 567', contactEmail: 'info@leedstricentre.co.uk',
    description: 'Home of World Triathlon Leeds and the Brownlee brothers. Train on the iconic Roundhay Park course used for the World Triathlon Series.',
    ageGroups: ['Junior', 'Adult', 'Masters'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: null,
    priceRange: { from: 500, to: 1500, unit: 'week', display: '£500 - £1,500/week' },
    socialMedia: { instagram: '@leedstri', facebook: 'https://facebook.com/leedstricentre', twitter: '@leedstri' },
    climate: 'leeds',
    facilities: 'Olympic pool at John Charles Centre, open water course at Roundhay Park, cycling routes through Yorkshire Dales, running tracks, transition training area, sports science lab',
    courtSurfaces: ['Open water swim', 'Pool swim', 'Road cycling', 'Trail running'],
    programs: [
      { name: 'Brownlee Inspire Camp', price: '£1,200/week', desc: 'Train where the Brownlee brothers trained, on the World Series course' },
      { name: 'Yorkshire Cycling & Tri', price: '£1,000/week', desc: 'Combine triathlon training with Yorkshire\'s world-class cycling roads' }
    ],
    coaches: [
      { name: 'Emma Watson', credential: 'BTF Level 3 Coach', background: 'Former Great Britain triathlon team member, youth development expert', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English'], instagram: '@emmawatsontri' }
    ],
    photos: ['https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800'],
    upcomingCamps: [
      { name: 'World Series Experience Camp', startDate: '2025-06-02', endDate: '2025-06-09', price: '£1,200', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'City Centre Hotel', pricePerWeek: 400, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Central Leeds hotel with transport to Roundhay Park training venue'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-01',
      spotsLeft: 16, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 10, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Term-time schooling support available',
      medicalStaff: true, safeguarding: 'BTF safeguarding policy, all staff DBS checked',
      airportPickup: true, mealPlan: 'Full board with sport nutrition plans',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English'],
      emergencyProtocol: 'On-site first aid, Leeds General Infirmary 15 minutes'
    }
  },
  {
    id: 'saarbrucken-tri-base',
    name: 'Saarbrücken Triathlon Base',
    country: 'Germany', countryFlag: '🇩🇪',
    city: 'Saarbrücken', lat: 49.24, lng: 6.99,
    website: 'https://www.saarbruckentri.de', contact: '+49 681 123 456', contactEmail: 'info@saarbruckentri.de',
    description: 'German triathlon excellence at the Hermann Neuberger Sportschule. A nationally renowned Olympic training centre with extensive multi-sport facilities.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: null,
    priceRange: { from: 700, to: 2000, unit: 'week', display: '€700 - €2,000/week' },
    socialMedia: { instagram: '@saarbruckentri', facebook: 'https://facebook.com/saarbruckentri', twitter: '@saarbruckentri' },
    climate: 'saarbrucken',
    facilities: 'Olympic pool, cycling routes through Saarland forests, running tracks, transition training area, altitude chamber, sports science lab, velodrome nearby',
    courtSurfaces: ['Pool swim', 'Road cycling', 'Trail running'],
    programs: [
      { name: 'German Triathlon Academy', price: '€1,500/week', desc: 'Structured training programme following DTU methodology' },
      { name: 'Youth Development Programme', price: '€800/week', desc: 'Talent development pathway for young triathletes' }
    ],
    coaches: [
      { name: 'Stefan Müller', credential: 'DTU A-Trainer', background: 'Former German national triathlon team coach, Olympic preparation specialist', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'German', 'French'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800'],
    upcomingCamps: [
      { name: 'Bundesliga Prep Camp', startDate: '2025-05-01', endDate: '2025-05-08', price: '€1,500', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'residence', label: 'Athletes Residence', pricePerWeek: 350, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: false, childrenAllowed: true, minStay: '1 week', shuttleToTraining: false, notes: 'On-site athletes residence at the Olympic training centre'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-04-01',
      spotsLeft: 14, responseTime: '48h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 10, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Elite sport school partnership for academic and athletic development',
      medicalStaff: true, safeguarding: 'DTU safeguarding standards, all coaches certified',
      airportPickup: true, mealPlan: 'Full board with German sport nutrition programme',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'German', 'French'],
      emergencyProtocol: 'On-site medical facility, Klinikum Saarbrücken 10 minutes'
    }
  },
  {
    id: 'antalya-tri-resort',
    name: 'Antalya Triathlon Resort',
    country: 'Turkey', countryFlag: '🇹🇷',
    city: 'Antalya', lat: 36.90, lng: 30.69,
    website: 'https://www.antalyatri.com', contact: '+90 242 123 456', contactEmail: 'info@antalyatri.com',
    description: 'All-inclusive triathlon training resort on Turkey\'s stunning Mediterranean coast. Warm weather year-round, clear seas for swimming, and challenging mountain cycling in the Taurus range.',
    ageGroups: ['Junior', 'Adult', 'Masters'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 0.1, description: 'Beachfront resort with direct Mediterranean access' },
    priceRange: { from: 500, to: 1500, unit: 'week', display: '€500 - €1,500/week' },
    socialMedia: { instagram: '@antalyatri', facebook: 'https://facebook.com/antalyatri', twitter: '@antalyatri' },
    climate: 'antalya',
    facilities: 'Olympic pool, open water course in Mediterranean, cycling routes through Taurus mountains, running tracks, transition training area, sports science lab, spa and recovery',
    courtSurfaces: ['Open water swim', 'Pool swim', 'Road cycling', 'Trail running'],
    programs: [
      { name: 'All-Inclusive Tri Camp', price: '€1,200/week', desc: 'Full triathlon training with all-inclusive resort accommodation' },
      { name: 'Winter Escape Training', price: '€800/week', desc: 'Train in warm Turkish sunshine during the European winter' },
      { name: 'Beginner to Sprint Distance', price: '€600/week', desc: 'Complete beginner programme building to a sprint triathlon' }
    ],
    coaches: [
      { name: 'Mehmet Yilmaz', credential: 'ITU Level 2 Coach', background: 'Turkish national triathlon team member and experienced triathlon coach', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Turkish', 'German'], instagram: '@mehmettri' }
    ],
    photos: ['https://images.unsplash.com/photo-1544919982-b61976f0ba43?w=800'],
    upcomingCamps: [
      { name: 'January Warm Weather Camp', startDate: '2025-01-13', endDate: '2025-01-20', price: '€800', level: 'All levels' }
    ],
    accommodation: {
      types: [
        { type: 'resort', label: 'All-Inclusive Beach Resort', pricePerWeek: 500, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Self-catering Apartment', pricePerWeek: 250, maxOccupancy: 4, bathType: 'shared', mealsIncluded: false }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'All-inclusive option includes meals, spa access, and airport transfers'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-01-06',
      spotsLeft: 30, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 8, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Online schooling support available',
      medicalStaff: true, safeguarding: 'International safeguarding standards with Turkish federation compliance',
      airportPickup: true, mealPlan: 'Full board all-inclusive with healthy Turkish and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Turkish', 'German'],
      emergencyProtocol: 'On-site nurse, Antalya hospital 20 minutes, resort emergency protocols'
    }
  }
];

const CLIMATE_DATA = {
  'lanzarote': { avgTemp: 22, sunshine: 2800, rainDays: 15, humidity: 65, windSpeed: 20, bestMonths: 'Year-round', description: 'Warm and dry year-round with consistent trade winds' },
  'girona': { avgTemp: 16, sunshine: 2500, rainDays: 60, humidity: 65, windSpeed: 10, bestMonths: 'Mar-Oct', description: 'Mediterranean climate with warm dry summers and mild winters' },
  'mallorca': { avgTemp: 18, sunshine: 2700, rainDays: 45, humidity: 70, windSpeed: 12, bestMonths: 'Mar-Oct', description: 'Mediterranean climate ideal for spring and autumn training camps' },
  'nice': { avgTemp: 17, sunshine: 2700, rainDays: 60, humidity: 68, windSpeed: 12, bestMonths: 'Apr-Oct', description: 'Sunny Mediterranean climate on the French Riviera' },
  'font-romeu': { avgTemp: 8, sunshine: 3000, rainDays: 80, humidity: 55, windSpeed: 15, bestMonths: 'Jun-Sep', description: 'High altitude with excellent sunshine hours despite cool temperatures' },
  'algarve': { avgTemp: 18, sunshine: 3000, rainDays: 40, humidity: 65, windSpeed: 14, bestMonths: 'Year-round', description: 'One of Europe\'s sunniest regions with mild winters' },
  'lisbon': { avgTemp: 17, sunshine: 2800, rainDays: 55, humidity: 70, windSpeed: 14, bestMonths: 'Apr-Oct', description: 'Atlantic-influenced climate with warm summers and mild winters' },
  'livigno': { avgTemp: 5, sunshine: 1800, rainDays: 90, humidity: 60, windSpeed: 10, bestMonths: 'Jun-Sep', description: 'Alpine altitude climate at 1,816m, cold winters with excellent summer training' },
  'loughborough': { avgTemp: 10, sunshine: 1400, rainDays: 130, humidity: 80, windSpeed: 14, bestMonths: 'May-Sep', description: 'Temperate English climate with cool summers and mild winters' },
  'leeds': { avgTemp: 9, sunshine: 1300, rainDays: 140, humidity: 82, windSpeed: 16, bestMonths: 'May-Sep', description: 'Northern English climate, cool and wet but excellent training infrastructure' },
  'saarbrucken': { avgTemp: 11, sunshine: 1600, rainDays: 110, humidity: 75, windSpeed: 12, bestMonths: 'May-Sep', description: 'Continental climate with warm summers and cold winters' },
  'antalya': { avgTemp: 19, sunshine: 3000, rainDays: 60, humidity: 60, windSpeed: 10, bestMonths: 'Year-round', description: 'Hot Mediterranean summers and mild winters, excellent year-round training' }
};

const NEWS_ITEMS = [
  { date: '2025-01-15', title: 'Paris 2024 Olympic Triathlon Inspires Record Camp Bookings', summary: 'European triathlon training camps report 40% increase in bookings following the successful Paris Olympics triathlon events at the Pont Alexandre III.' },
  { date: '2025-01-10', title: 'New Altitude Training Protocols Show 3% Performance Gains', summary: 'Research from Font Romeu and Livigno altitude centres demonstrates significant endurance improvements from structured live-high, train-low approaches.' },
  { date: '2025-01-05', title: 'Super League Triathlon Expands European Race Calendar', summary: 'The Super League Triathlon series adds new European venues for 2025, boosting demand for short-course triathlon training camps.' },
  { date: '2024-12-20', title: 'Winter Training Camps in Lanzarote and Antalya Fully Booked', summary: 'Warm weather training destinations see unprecedented demand as European triathletes seek winter sunshine for base training.' },
  { date: '2024-12-15', title: 'New Swim Analysis Technology Arrives at European Tri Centres', summary: 'AI-powered underwater camera systems for real-time swim technique analysis deployed across leading triathlon training camps.' }
];

const COUNTRIES = ['Spain', 'France', 'Portugal', 'Italy', 'UK', 'Germany', 'Turkey'];
