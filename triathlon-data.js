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
  },
  {
    id: 'hamburg-itu-tri',
    name: 'Hamburg ITU Triathlon Centre',
    country: 'Germany', countryFlag: '🇩🇪',
    city: 'Hamburg', lat: 53.55, lng: 9.99,
    website: 'https://www.hamburgtricentre.de', contact: '+49 40 678 1234', contactEmail: 'info@hamburgtricentre.de',
    description: 'Elite triathlon training centre in the heart of Hamburg, host city of the ITU World Triathlon Series. Athletes train on the iconic Binnenalster race course with world-class pool and cycling infrastructure.',
    ageGroups: ['Junior', 'Adult', 'Masters'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 2.0, description: 'Binnenalster and Außenalster lakes for open water swim training' },
    priceRange: { from: 900, to: 2400, unit: 'week', display: '€900 - €2,400/week' },
    socialMedia: { instagram: '@hamburgtricentre', facebook: 'https://facebook.com/hamburgtricentre', twitter: '@hamburgtri' },
    climate: 'hamburg',
    facilities: 'Olympic 50m pool, Alster lake open water course, velodrome access, running tracks along the Elbe, transition zone, wind tunnel testing, sports science lab, strength gym',
    courtSurfaces: ['Open water swim', 'Pool swim', 'Road cycling', 'Trail running'],
    programs: [
      { name: 'ITU Race Simulation Camp', price: '€2,000/week', desc: 'Train on the actual ITU World Series course with draft-legal bike handling and race tactics' },
      { name: 'Olympic Distance Mastery', price: '€1,400/week', desc: 'Focused Olympic distance preparation with transition practice and pacing strategy' },
      { name: 'Swim & Bike Technique', price: '€1,000/week', desc: 'Technical sessions combining pool drills and velodrome cycling skills' }
    ],
    coaches: [
      { name: 'Markus Fachbach', credential: 'DTU A-Lizenz Coach', background: 'Former German national triathlon team coach with Olympic programme experience', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'German'], instagram: '@markusfachbach' },
      { name: 'Lena Hoffmann', credential: 'ITU Level 3 Coach', background: 'Former European triathlon champion and Hamburg race specialist', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'German', 'French'], instagram: '@lenahoffmanntri' }
    ],
    photos: ['https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800'],
    upcomingCamps: [
      { name: 'ITU World Series Prep', startDate: '2026-05-01', endDate: '2026-05-08', price: '€2,000', level: 'Advanced' },
      { name: 'Summer Sprint Camp', startDate: '2026-07-15', endDate: '2026-07-22', price: '€1,400', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Alster Sport Hotel', pricePerWeek: 650, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'City Training Apartment', pricePerWeek: 450, maxOccupancy: 4, bathType: 'shared', mealsIncluded: false }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Sport nutrition meal plans available, central Hamburg location'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-03-01',
      spotsLeft: 18, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 12, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Online schooling support available during camp periods',
      medicalStaff: true, safeguarding: 'German federation child protection standards with DBS-equivalent checks',
      airportPickup: true, mealPlan: 'Full board with sport nutrition menu',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'German'],
      emergencyProtocol: 'On-site physio, UKE hospital 10 minutes, 24/7 emergency contact'
    }
  },
  {
    id: 'birmingham-tri-centre',
    name: 'Birmingham Triathlon Performance Hub',
    country: 'UK', countryFlag: '🇬🇧',
    city: 'Birmingham', lat: 52.49, lng: -1.89,
    website: 'https://www.birminghamtrihub.co.uk', contact: '+44 121 456 7890', contactEmail: 'info@birminghamtrihub.co.uk',
    description: 'Premier triathlon training centre in the heart of England, leveraging Birmingham\'s Commonwealth Games legacy facilities. Home to Super League Triathlon events with excellent pool and road cycling infrastructure.',
    ageGroups: ['Junior', 'Adult', 'Masters'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: null,
    priceRange: { from: 700, to: 1800, unit: 'week', display: '£700 - £1,800/week' },
    socialMedia: { instagram: '@birminghamtrihub', facebook: 'https://facebook.com/birminghamtrihub', twitter: '@bhamtrihub' },
    climate: 'birmingham',
    facilities: 'Sandwell Aquatics Centre 50m pool, Sutton Park open water lake, National Cycling Centre access, athletics track, transition training zone, gym, sports science testing',
    courtSurfaces: ['Open water swim', 'Pool swim', 'Road cycling', 'Trail running'],
    programs: [
      { name: 'Super League Sprint Training', price: '£1,500/week', desc: 'Short-course triathlon training focused on fast transitions and high-intensity racing' },
      { name: 'Olympic Distance Programme', price: '£1,100/week', desc: 'Structured Olympic distance preparation with weekly race simulations' },
      { name: 'Beginner Triathlon Course', price: '£750/week', desc: 'Learn-to-tri programme covering all three disciplines with supportive coaching' }
    ],
    coaches: [
      { name: 'James Whitfield', credential: 'BTF Level 3 Coach', background: 'Former British Triathlon performance pathway coach with Commonwealth Games experience', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English'], instagram: '@jameswhitfieldtri' },
      { name: 'Emma Collins', credential: 'BTF Level 2 Coach', background: 'Ironman 70.3 champion and open water swimming specialist', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Welsh'], instagram: '@emmacollinstriathlon' }
    ],
    photos: ['https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800'],
    upcomingCamps: [
      { name: 'Easter Tri Bootcamp', startDate: '2026-04-06', endDate: '2026-04-13', price: '£1,500', level: 'All levels' },
      { name: 'Summer Youth Tri Camp', startDate: '2026-08-03', endDate: '2026-08-10', price: '£900', level: 'Junior' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'University Sport Lodge', pricePerWeek: 500, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'City Centre Flat', pricePerWeek: 380, maxOccupancy: 4, bathType: 'shared', mealsIncluded: false }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Commonwealth Games athlete village accommodation available'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-03-15',
      spotsLeft: 22, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 11, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Online schooling partnerships with local academy trusts',
      medicalStaff: true, safeguarding: 'Full DBS checks, BTF safeguarding policy, designated welfare officer',
      airportPickup: true, mealPlan: 'Full board with sport nutrition options',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English'],
      emergencyProtocol: 'On-site first aid team, Queen Elizabeth Hospital 15 minutes, 24/7 emergency line'
    }
  },
  {
    id: 'vichy-ironman-tri',
    name: 'Vichy Triathlon Training Centre',
    country: 'France', countryFlag: '🇫🇷',
    city: 'Vichy', lat: 46.13, lng: 3.43,
    website: 'https://www.vichytriathlon.fr', contact: '+33 4 70 123 456', contactEmail: 'info@vichytriathlon.fr',
    description: 'Triathlon training centre in Vichy, the iconic host city of Ironman France. Athletes train on the actual race course including the Allier river swim, rolling Auvergne cycling routes, and lakeside running paths.',
    ageGroups: ['Junior', 'Adult', 'Masters'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 0.5, description: 'Allier river and Lac d\'Allier for open water swim training on the Ironman course' },
    priceRange: { from: 750, to: 2000, unit: 'week', display: '€750 - €2,000/week' },
    socialMedia: { instagram: '@vichytriathlon', facebook: 'https://facebook.com/vichytriathlon', twitter: '@vichytri' },
    climate: 'vichy',
    facilities: 'Olympic pool, Allier river open water course, Ironman France bike course access, lakeside running track, CREPS sports centre, gym, recovery spa with thermal baths',
    courtSurfaces: ['Open water swim', 'Pool swim', 'Road cycling', 'Trail running'],
    programs: [
      { name: 'Ironman France Course Recon', price: '€1,700/week', desc: 'Train on the exact Ironman France course with full race simulation and nutrition strategy' },
      { name: 'Half-Distance Training', price: '€1,200/week', desc: 'Ironman 70.3 preparation with progressive overload and race pacing' },
      { name: 'Swim & Run Technique', price: '€850/week', desc: 'Focused technique work in the Allier river and Auvergne trails' }
    ],
    coaches: [
      { name: 'Philippe Durand', credential: 'FFTRI Brevet d\'État Coach', background: 'Former professional Ironman athlete with multiple Ironman France podium finishes', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'French'], instagram: '@philippedurandtri' },
      { name: 'Camille Martin', credential: 'ITU Level 2 Coach', background: 'French national long-distance triathlon champion and coaching specialist', atpWta: false, bestRanking: null, rankingNote: null, languages: ['French', 'English', 'Spanish'], instagram: '@camillemartin_tri' }
    ],
    photos: ['https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800'],
    upcomingCamps: [
      { name: 'Ironman France Prep Camp', startDate: '2026-06-15', endDate: '2026-06-22', price: '€1,700', level: 'Advanced' },
      { name: 'Autumn Endurance Base', startDate: '2026-10-05', endDate: '2026-10-12', price: '€1,200', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Vichy Spa Sport Hotel', pricePerWeek: 550, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Lakeside Apartment', pricePerWeek: 380, maxOccupancy: 4, bathType: 'shared', mealsIncluded: false }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Thermal spa recovery included, French cuisine meal plans with sport nutrition'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-04-01',
      spotsLeft: 16, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 14, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Partnership with local lycée for academic support',
      medicalStaff: true, safeguarding: 'French federation safeguarding standards with background checks',
      airportPickup: true, mealPlan: 'Full board with French cuisine and sport nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['French', 'English'],
      emergencyProtocol: 'On-site medical team, Vichy hospital 10 minutes, 24/7 emergency contact'
    }
  },
  {
    id: 'vitoria-gasteiz-tri',
    name: 'Vitoria-Gasteiz Ironman Training Base',
    country: 'Spain', countryFlag: '🇪🇸',
    city: 'Vitoria-Gasteiz', lat: 42.85, lng: -2.67,
    website: 'https://www.vitoriatribase.com', contact: '+34 945 234 567', contactEmail: 'info@vitoriatribase.com',
    description: 'Training base in the European Green Capital of Vitoria-Gasteiz, home of one of the most scenic Ironman races in Europe. Athletes benefit from Basque Country cycling terrain, lake swimming, and a vibrant running culture.',
    ageGroups: ['Junior', 'Adult', 'Masters'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 3.0, description: 'Ullíbarri-Gamboa reservoir for open water swim training on the Ironman course' },
    priceRange: { from: 700, to: 1900, unit: 'week', display: '€700 - €1,900/week' },
    socialMedia: { instagram: '@vitoriatribase', facebook: 'https://facebook.com/vitoriatribase', twitter: '@vitoriatri' },
    climate: 'vitoria',
    facilities: 'Mendizorrotza sports complex with 50m pool, Ullíbarri reservoir open water, Basque Country mountain cycling routes, Salburua wetlands running trails, gym, altitude simulation room',
    courtSurfaces: ['Open water swim', 'Pool swim', 'Road cycling', 'Trail running'],
    programs: [
      { name: 'Ironman Vitoria Recon Camp', price: '€1,600/week', desc: 'Full Ironman course reconnaissance with specific hill training and race-day strategy' },
      { name: 'Basque Cycling Intensive', price: '€1,100/week', desc: 'Focused cycling camp on the challenging Basque Country mountain roads and passes' },
      { name: 'Sprint Distance Fast-Track', price: '€800/week', desc: 'Speed-focused sprint triathlon preparation with technique and transition work' }
    ],
    coaches: [
      { name: 'Iñaki Arechaga', credential: 'FETRI Level 3 Coach', background: 'Basque triathlon federation head coach with 20 years of endurance coaching experience', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Spanish', 'Basque'], instagram: '@inakiarechaga' },
      { name: 'Marta Gómez', credential: 'ITU Level 2 Coach', background: 'Former Spanish national triathlon team member and Ironman finisher', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Spanish', 'English'], instagram: '@martagomeztri' }
    ],
    photos: ['https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800'],
    upcomingCamps: [
      { name: 'Ironman Vitoria Pre-Race', startDate: '2026-07-01', endDate: '2026-07-08', price: '€1,600', level: 'Advanced' },
      { name: 'Spring Base Building', startDate: '2026-04-13', endDate: '2026-04-20', price: '€1,100', level: 'All levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Green Capital Sport Hotel', pricePerWeek: 480, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Old Town Apartment', pricePerWeek: 340, maxOccupancy: 4, bathType: 'shared', mealsIncluded: false }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Basque cuisine meal plans with local pintxos experiences included'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-03-15',
      spotsLeft: 20, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 13, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Online schooling support with Spanish curriculum options',
      medicalStaff: true, safeguarding: 'Spanish federation safeguarding protocols with full background checks',
      airportPickup: true, mealPlan: 'Full board with Basque cuisine and sport nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Spanish', 'English', 'Basque'],
      emergencyProtocol: 'On-site physio, Santiago hospital 10 minutes, 24/7 emergency line'
    }
  },
  {
    id: 'sardinia-tri-academy',
    name: 'Sardinia Triathlon Academy',
    country: 'Italy', countryFlag: '🇮🇹',
    city: 'Cagliari', lat: 39.22, lng: 9.12,
    website: 'https://www.sardiniatriathlon.it', contact: '+39 070 345 6789', contactEmail: 'info@sardiniatriathlon.it',
    description: 'Mediterranean triathlon academy on the stunning island of Sardinia, offering crystal-clear open water swimming, coastal cycling routes, and trail running through ancient landscapes. Year-round mild climate ideal for endurance training.',
    ageGroups: ['Junior', 'Adult', 'Masters'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 0.2, description: 'Poetto Beach for open water swim training in crystal-clear Mediterranean waters' },
    priceRange: { from: 800, to: 2100, unit: 'week', display: '€800 - €2,100/week' },
    socialMedia: { instagram: '@sardiniatriathlon', facebook: 'https://facebook.com/sardiniatriathlon', twitter: '@sardiniatri' },
    climate: 'sardinia',
    facilities: 'Olympic pool, Poetto Beach open water course, coastal and mountain cycling routes, Molentargius nature reserve running trails, outdoor gym, recovery centre with sea-water therapy',
    courtSurfaces: ['Open water swim', 'Pool swim', 'Road cycling', 'Trail running'],
    programs: [
      { name: 'Mediterranean Tri Camp', price: '€1,800/week', desc: 'Full triathlon immersion with stunning coastal training and Italian hospitality' },
      { name: 'Open Water Swimming Mastery', price: '€1,200/week', desc: 'Advanced open water techniques in pristine Mediterranean conditions' },
      { name: 'Cycling & Running Endurance', price: '€950/week', desc: 'Build aerobic base with Sardinian coastal rides and trail runs' }
    ],
    coaches: [
      { name: 'Alessandro Ferrara', credential: 'FITri Tecnico Nazionale', background: 'Former Italian national triathlon squad coach with Mediterranean championship experience', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Italian'], instagram: '@alessandroferraratri' },
      { name: 'Giulia Manca', credential: 'ITU Level 2 Coach', background: 'Sardinian open water swimming champion and triathlon technique specialist', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Italian', 'English', 'French'], instagram: '@giuliamancatri' }
    ],
    photos: ['https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800'],
    upcomingCamps: [
      { name: 'Spring Mediterranean Camp', startDate: '2026-04-20', endDate: '2026-04-27', price: '€1,800', level: 'All levels' },
      { name: 'Autumn Endurance Block', startDate: '2026-10-12', endDate: '2026-10-19', price: '€1,200', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Poetto Beach Sport Hotel', pricePerWeek: 580, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Marina Apartment', pricePerWeek: 400, maxOccupancy: 4, bathType: 'shared', mealsIncluded: false }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Authentic Sardinian cuisine with fresh seafood and sport nutrition plans'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-03-01',
      spotsLeft: 16, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 12, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Online schooling support with Italian curriculum partnership',
      medicalStaff: true, safeguarding: 'Italian federation child protection policies with full background screening',
      airportPickup: true, mealPlan: 'Full board with Mediterranean diet and sport nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Italian', 'English'],
      emergencyProtocol: 'On-site medical staff, Brotzu Hospital 15 minutes, 24/7 emergency contact'
    }
  },
  {
    id: 'klagenfurt-tri-camp',
    name: 'Klagenfurt Ironman Training Centre',
    country: 'Austria', countryFlag: '🇦🇹',
    city: 'Klagenfurt', lat: 46.62, lng: 14.31,
    website: 'https://www.klagenfurttricamp.at', contact: '+43 463 567 890', contactEmail: 'info@klagenfurttricamp.at',
    description: 'Premier Ironman training centre on the shores of Wörthersee lake in Klagenfurt, host of Ironman Austria. Athletes train on the famous lake swim course, alpine cycling routes, and scenic lakeside running paths.',
    ageGroups: ['Junior', 'Adult', 'Masters'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 0.1, description: 'Direct access to Wörthersee lake for open water swim training on the Ironman course' },
    priceRange: { from: 850, to: 2300, unit: 'week', display: '€850 - €2,300/week' },
    socialMedia: { instagram: '@klagenfurttricamp', facebook: 'https://facebook.com/klagenfurttricamp', twitter: '@klagenfurttri' },
    climate: 'klagenfurt',
    facilities: 'Wörthersee lake open water course, 50m indoor pool, Karawanken alpine cycling routes, lakeside running track, modern gym, sports science testing lab, sauna and cold plunge recovery',
    courtSurfaces: ['Open water swim', 'Pool swim', 'Road cycling', 'Trail running'],
    programs: [
      { name: 'Ironman Austria Race Prep', price: '€2,000/week', desc: 'Train on the Ironman Austria course with full race simulation, nutrition planning, and alpine cycling' },
      { name: 'Lake Swim & Alpine Ride', price: '€1,400/week', desc: 'Combined open water swimming in Wörthersee and cycling through the Karawanken mountains' },
      { name: 'Half-Distance Builder', price: '€1,000/week', desc: 'Progressive 70.3 preparation with structured build phases and recovery protocols' }
    ],
    coaches: [
      { name: 'Stefan Berger', credential: 'ÖTRV A-Trainer', background: 'Austrian national triathlon team coach with multiple Ironman Austria finishes and coaching certifications', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'German'], instagram: '@stefanbergertri' },
      { name: 'Katharina Winkler', credential: 'ITU Level 2 Coach', background: 'Former Austrian triathlon champion and Wörthersee open water specialist', atpWta: false, bestRanking: null, rankingNote: null, languages: ['German', 'English', 'Italian'], instagram: '@katharinawinklertri' }
    ],
    photos: ['https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800'],
    upcomingCamps: [
      { name: 'Ironman Austria Pre-Race Camp', startDate: '2026-06-22', endDate: '2026-06-29', price: '€2,000', level: 'Advanced' },
      { name: 'Summer Lake Training', startDate: '2026-08-10', endDate: '2026-08-17', price: '€1,400', level: 'All levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Wörthersee Lakeside Hotel', pricePerWeek: 620, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Alpine View Apartment', pricePerWeek: 430, maxOccupancy: 4, bathType: 'shared', mealsIncluded: false }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Austrian cuisine with alpine sport nutrition, lake access from accommodation'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-04-15',
      spotsLeft: 14, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 13, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Online schooling support with Austrian curriculum options',
      medicalStaff: true, safeguarding: 'Austrian federation safeguarding standards with full background checks',
      airportPickup: true, mealPlan: 'Full board with Austrian cuisine and sport nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['German', 'English'],
      emergencyProtocol: 'On-site physio, Klagenfurt hospital 10 minutes, 24/7 emergency contact'
    }
  },
  {
    id: 'zurich-tri-academy',
    name: 'Zurich Triathlon Academy',
    country: 'Switzerland', countryFlag: '🇨🇭',
    city: 'Zurich', lat: 47.38, lng: 8.54,
    website: 'https://www.zurichtriacademy.ch', contact: '+41 44 789 0123', contactEmail: 'info@zurichtriacademy.ch',
    description: 'High-performance triathlon academy in Zurich, host of Ironman Switzerland. Athletes train in Lake Zurich\'s pristine waters, ride iconic Swiss alpine passes, and run along scenic lakeside paths with world-class infrastructure.',
    ageGroups: ['Junior', 'Adult', 'Masters'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 0.3, description: 'Lake Zurich for open water swim training with alpine backdrop' },
    priceRange: { from: 1200, to: 3200, unit: 'week', display: 'CHF1,200 - CHF3,200/week' },
    socialMedia: { instagram: '@zurichtriacademy', facebook: 'https://facebook.com/zurichtriacademy', twitter: '@zurichtri' },
    climate: 'zurich',
    facilities: 'Lake Zurich open water course, Olympic 50m pool, Swiss alpine cycling routes including Albula and Gotthard passes, Uetliberg trail running, state-of-the-art gym, Swiss Olympic sports science lab',
    courtSurfaces: ['Open water swim', 'Pool swim', 'Road cycling', 'Trail running'],
    programs: [
      { name: 'Ironman Switzerland Prep', price: 'CHF2,800/week', desc: 'Comprehensive Ironman preparation on the race course with Swiss precision coaching' },
      { name: 'Alpine Cycling & Tri Camp', price: 'CHF2,000/week', desc: 'Challenging alpine pass cycling combined with lake swimming and mountain running' },
      { name: 'Olympic Distance Excellence', price: 'CHF1,500/week', desc: 'Precision-focused Olympic distance training with performance testing and analysis' }
    ],
    coaches: [
      { name: 'Nicola Spirig-Hug', credential: 'Swiss Olympic Coach', background: 'Swiss national triathlon programme coach with Olympic-level athlete development experience', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'German', 'French'], instagram: '@nicolaspirigtri' },
      { name: 'Thomas Frei', credential: 'Swiss Triathlon A-Trainer', background: 'Former Swiss Ironman champion and endurance coaching specialist', atpWta: false, bestRanking: null, rankingNote: null, languages: ['German', 'English', 'Italian'], instagram: '@thomasfreitri' }
    ],
    photos: ['https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800'],
    upcomingCamps: [
      { name: 'Ironman Switzerland Build Camp', startDate: '2026-06-01', endDate: '2026-06-08', price: 'CHF2,800', level: 'Advanced' },
      { name: 'Summer Alpine Tri Week', startDate: '2026-07-20', endDate: '2026-07-27', price: 'CHF2,000', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Zurich Lakeside Sport Hotel', pricePerWeek: 900, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Lake View Apartment', pricePerWeek: 700, maxOccupancy: 4, bathType: 'shared', mealsIncluded: false }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Swiss quality accommodation with healthy meal plans, chocolate tasting optional'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-04-01',
      spotsLeft: 12, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 12, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Partnership with international school for academic continuity',
      medicalStaff: true, safeguarding: 'Swiss Olympic safeguarding framework with comprehensive background screening',
      airportPickup: true, mealPlan: 'Full board with Swiss cuisine and personalised sport nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['German', 'English', 'French'],
      emergencyProtocol: 'On-site medical team, University Hospital Zurich 10 minutes, 24/7 emergency contact'
    }
  },
  {
    id: 'cascais-tri-centre',
    name: 'Cascais Triathlon Training Centre',
    country: 'Portugal', countryFlag: '🇵🇹',
    city: 'Cascais', lat: 38.70, lng: -9.42,
    website: 'https://www.cascaistriathlon.pt', contact: '+351 214 567 890', contactEmail: 'info@cascaistriathlon.pt',
    description: 'Atlantic-coast triathlon centre in the beautiful seaside town of Cascais, near Lisbon. Offers superb ocean swimming, Serra de Sintra cycling climbs, and coastal trail running in a year-round mild climate.',
    ageGroups: ['Junior', 'Adult', 'Masters'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 0.1, description: 'Cascais Bay and Guincho Beach for ocean and sheltered open water swim training' },
    priceRange: { from: 700, to: 1900, unit: 'week', display: '€700 - €1,900/week' },
    socialMedia: { instagram: '@cascaistriathlon', facebook: 'https://facebook.com/cascaistriathlon', twitter: '@cascaistri' },
    climate: 'cascais',
    facilities: 'Olympic pool, Atlantic ocean swim course, Serra de Sintra cycling routes, Cascais-Guincho coastal running paths, outdoor gym, video analysis room, recovery spa',
    courtSurfaces: ['Open water swim', 'Pool swim', 'Road cycling', 'Trail running'],
    programs: [
      { name: 'Atlantic Coast Tri Camp', price: '€1,600/week', desc: 'Full triathlon immersion with ocean swimming, coastal cycling, and trail running in Cascais' },
      { name: 'Ocean Swim & Sintra Ride', price: '€1,100/week', desc: 'Combined ocean swimming technique and challenging Serra de Sintra cycling sessions' },
      { name: 'Beginner Tri Experience', price: '€750/week', desc: 'Introduction to triathlon in a beautiful Atlantic coast setting with supportive coaching' }
    ],
    coaches: [
      { name: 'João Silva', credential: 'FTP Treinador Grau III', background: 'Former Portuguese national triathlon team coach with 18 years coaching experience', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Portuguese', 'Spanish'], instagram: '@joaosilvatri' },
      { name: 'Ana Rodrigues', credential: 'ITU Level 2 Coach', background: 'Portuguese Ironman 70.3 champion and ocean swimming specialist', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Portuguese', 'English'], instagram: '@anarodriguestri' }
    ],
    photos: ['https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800'],
    upcomingCamps: [
      { name: 'Spring Atlantic Camp', startDate: '2026-03-23', endDate: '2026-03-30', price: '€1,600', level: 'All levels' },
      { name: 'Winter Sun Tri Week', startDate: '2027-01-12', endDate: '2027-01-19', price: '€1,100', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Cascais Bay Hotel', pricePerWeek: 520, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Seaside Studio', pricePerWeek: 380, maxOccupancy: 4, bathType: 'shared', mealsIncluded: false }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Portuguese seafood cuisine with sport nutrition plans, beachfront location'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-02-15',
      spotsLeft: 18, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 12, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Online schooling support with international curriculum options',
      medicalStaff: true, safeguarding: 'Portuguese federation safeguarding standards with comprehensive checks',
      airportPickup: true, mealPlan: 'Full board with Portuguese cuisine and sport nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Portuguese', 'English'],
      emergencyProtocol: 'On-site first aid, Cascais hospital 10 minutes, 24/7 emergency contact'
    }
  },
  {
    id: 'athens-tri-academy',
    name: 'Athens Olympic Triathlon Academy',
    country: 'Greece', countryFlag: '🇬🇷',
    city: 'Athens', lat: 37.98, lng: 23.73,
    website: 'https://www.athenstriacademy.gr', contact: '+30 210 678 9012', contactEmail: 'info@athenstriacademy.gr',
    description: 'Triathlon academy in the birthplace of the Olympic Games, utilising Athens 2004 Olympic facilities. Athletes train in the Saronic Gulf waters, ride through the Attic countryside, and run along historic routes including the original marathon course.',
    ageGroups: ['Junior', 'Adult', 'Masters'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 1.5, description: 'Vouliagmeni and Schinias beaches for Aegean Sea open water swim training' },
    priceRange: { from: 650, to: 1800, unit: 'week', display: '€650 - €1,800/week' },
    socialMedia: { instagram: '@athenstriacademy', facebook: 'https://facebook.com/athenstriacademy', twitter: '@athenstri' },
    climate: 'athens',
    facilities: 'Athens Olympic Aquatic Centre 50m pool, Schinias open water rowing and swim course, Mount Hymettus cycling routes, original marathon running route, Olympic sports complex gym, recovery centre',
    courtSurfaces: ['Open water swim', 'Pool swim', 'Road cycling', 'Trail running'],
    programs: [
      { name: 'Olympic Heritage Tri Camp', price: '€1,500/week', desc: 'Train in Athens 2004 Olympic venues with historic marathon route running and Aegean swimming' },
      { name: 'Aegean Swim & Ride', price: '€1,100/week', desc: 'Open water swimming in the Saronic Gulf combined with scenic Attic countryside cycling' },
      { name: 'Marathon-to-Tri Transition', price: '€800/week', desc: 'Programme for runners transitioning to triathlon, leveraging running fitness for multi-sport success' }
    ],
    coaches: [
      { name: 'Dimitrios Papadopoulos', credential: 'HOC Level 3 Coach', background: 'Greek national triathlon team head coach with Athens 2004 Olympic programme experience', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Greek'], instagram: '@dimitriospapatri' },
      { name: 'Eleni Karakosta', credential: 'ITU Level 2 Coach', background: 'Former Greek triathlon champion and open water swimming record holder', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Greek', 'English', 'French'], instagram: '@elenikarakostatri' }
    ],
    photos: ['https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800'],
    upcomingCamps: [
      { name: 'Spring Aegean Camp', startDate: '2026-04-06', endDate: '2026-04-13', price: '€1,500', level: 'All levels' },
      { name: 'Autumn Marathon Tri Week', startDate: '2026-11-02', endDate: '2026-11-09', price: '€1,100', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Vouliagmeni Sport Hotel', pricePerWeek: 480, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Athens Riviera Apartment', pricePerWeek: 350, maxOccupancy: 4, bathType: 'shared', mealsIncluded: false }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Greek Mediterranean cuisine with sport nutrition, coastal accommodation available'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-03-01',
      spotsLeft: 20, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 12, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Online schooling support with Greek and international curriculum',
      medicalStaff: true, safeguarding: 'Greek Olympic committee safeguarding standards with full background checks',
      airportPickup: true, mealPlan: 'Full board with Greek Mediterranean diet and sport nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Greek', 'English'],
      emergencyProtocol: 'On-site medical staff, Asklepieion Hospital 15 minutes, 24/7 emergency contact'
    }
  },
  {
    id: 'copenhagen-tri-hub',
    name: 'Copenhagen Triathlon Hub',
    country: 'Denmark', countryFlag: '🇩🇰',
    city: 'Copenhagen', lat: 55.68, lng: 12.57,
    website: 'https://www.copenhagentrihub.dk', contact: '+45 33 456 789', contactEmail: 'info@copenhagentrihub.dk',
    description: 'Scandinavian triathlon hub in Copenhagen, one of the world\'s most cycle-friendly cities. Athletes benefit from harbour swimming, exceptional cycling infrastructure, and running paths through the city\'s parks and waterfront.',
    ageGroups: ['Junior', 'Adult', 'Masters'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 0.5, description: 'Copenhagen Harbour and Amager Strandpark for open water swim training' },
    priceRange: { from: 1000, to: 2800, unit: 'week', display: 'DKK7,500 - DKK21,000/week' },
    socialMedia: { instagram: '@copenhagentrihub', facebook: 'https://facebook.com/copenhagentrihub', twitter: '@cphtri' },
    climate: 'copenhagen',
    facilities: 'Bellahøj 50m pool, Copenhagen Harbour open water swim, world-class cycling infrastructure, Fælledparken running tracks, indoor training centre, Wattbike studio, sports science lab',
    courtSurfaces: ['Open water swim', 'Pool swim', 'Road cycling', 'Trail running'],
    programs: [
      { name: 'Scandinavian Tri Experience', price: 'DKK18,000/week', desc: 'Full triathlon training in Copenhagen with harbour swimming and city cycling exploration' },
      { name: 'Draft-Legal Racing Camp', price: 'DKK14,000/week', desc: 'ITU-style draft-legal triathlon training with pack riding skills and fast transitions' },
      { name: 'Swim Technique Intensive', price: 'DKK9,000/week', desc: 'Pool and harbour swim technique improvement with video analysis and drills' }
    ],
    coaches: [
      { name: 'Anders Jensen', credential: 'DTrF Elite Coach', background: 'Danish national triathlon team coach with European championship programme experience', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Danish', 'Swedish'], instagram: '@andersjensentry' },
      { name: 'Sofie Andersen', credential: 'ITU Level 2 Coach', background: 'Former Danish triathlon champion and Ironman Copenhagen finisher', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Danish', 'English', 'German'], instagram: '@sofieandersentry' }
    ],
    photos: ['https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800'],
    upcomingCamps: [
      { name: 'Midsummer Tri Camp', startDate: '2026-06-15', endDate: '2026-06-22', price: 'DKK18,000', level: 'All levels' },
      { name: 'Ironman Copenhagen Prep', startDate: '2026-08-03', endDate: '2026-08-10', price: 'DKK14,000', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Harbour Sport Hotel', pricePerWeek: 800, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Vesterbro City Apartment', pricePerWeek: 600, maxOccupancy: 4, bathType: 'shared', mealsIncluded: false }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'New Nordic cuisine meal plans with sport nutrition, bike-friendly accommodation'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-04-01',
      spotsLeft: 16, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 12, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Online schooling support with Danish education system integration',
      medicalStaff: true, safeguarding: 'Danish federation safeguarding standards with comprehensive child protection',
      airportPickup: true, mealPlan: 'Full board with New Nordic cuisine and sport nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Danish', 'English'],
      emergencyProtocol: 'On-site physio, Rigshospitalet 15 minutes, 24/7 emergency contact'
    }
  },
  {
    id: 'stockholm-tri-centre',
    name: 'Stockholm Triathlon Centre',
    country: 'Sweden', countryFlag: '🇸🇪',
    city: 'Stockholm', lat: 59.33, lng: 18.07,
    website: 'https://www.stockholmtricentre.se', contact: '+46 8 123 456 78', contactEmail: 'info@stockholmtricentre.se',
    description: 'Triathlon centre in Sweden\'s capital, built across 14 islands with endless waterways for open water swimming. Athletes train in clean Baltic archipelago waters, cycle through scenic Swedish countryside, and run in pristine Nordic forests.',
    ageGroups: ['Junior', 'Adult', 'Masters'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 0.3, description: 'Stockholm archipelago and Långholmen island for Baltic open water swim training' },
    priceRange: { from: 1100, to: 3000, unit: 'week', display: 'SEK12,000 - SEK33,000/week' },
    socialMedia: { instagram: '@stockholmtricentre', facebook: 'https://facebook.com/stockholmtricentre', twitter: '@stockholmtri' },
    climate: 'stockholm',
    facilities: 'Eriksdalsbadet 50m Olympic pool, archipelago open water swim courses, Swedish countryside cycling routes, Djurgården island running trails, indoor trainer studio, sports science testing',
    courtSurfaces: ['Open water swim', 'Pool swim', 'Road cycling', 'Trail running'],
    programs: [
      { name: 'Archipelago Tri Camp', price: 'SEK28,000/week', desc: 'Unique triathlon experience swimming through Stockholm\'s archipelago with Nordic training methods' },
      { name: 'Midnight Sun Endurance', price: 'SEK20,000/week', desc: 'Summer endurance camp with extended daylight hours for maximum training volume' },
      { name: 'Nordic Sprint Tri', price: 'SEK14,000/week', desc: 'Fast-paced sprint triathlon training with Scandinavian efficiency and precision coaching' }
    ],
    coaches: [
      { name: 'Erik Lindqvist', credential: 'STF Elite Tränare', background: 'Swedish national triathlon programme head coach with international championship experience', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Swedish', 'Norwegian'], instagram: '@eriklindqvisttri' },
      { name: 'Astrid Bergström', credential: 'ITU Level 2 Coach', background: 'Former Swedish triathlon champion and Nordic endurance specialist', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Swedish', 'English', 'Danish'], instagram: '@astridbergstromtri' }
    ],
    photos: ['https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800'],
    upcomingCamps: [
      { name: 'Midnight Sun Tri Camp', startDate: '2026-06-22', endDate: '2026-06-29', price: 'SEK28,000', level: 'All levels' },
      { name: 'Autumn Base Build', startDate: '2026-09-14', endDate: '2026-09-21', price: 'SEK20,000', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Södermalm Sport Hotel', pricePerWeek: 850, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Island View Apartment', pricePerWeek: 650, maxOccupancy: 4, bathType: 'shared', mealsIncluded: false }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Swedish cuisine with sport nutrition, sauna recovery sessions included'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-04-15',
      spotsLeft: 14, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 12, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Online schooling with Swedish education integration available',
      medicalStaff: true, safeguarding: 'Swedish federation comprehensive child protection framework',
      airportPickup: true, mealPlan: 'Full board with Swedish cuisine and personalised sport nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Swedish', 'English'],
      emergencyProtocol: 'On-site medical team, Karolinska Hospital 15 minutes, 24/7 emergency contact'
    }
  },
  {
    id: 'istanbul-tri-academy',
    name: 'Istanbul Bosphorus Triathlon Academy',
    country: 'Turkey', countryFlag: '🇹🇷',
    city: 'Istanbul', lat: 41.01, lng: 28.98,
    website: 'https://www.istanbultriathlon.com.tr', contact: '+90 212 345 6789', contactEmail: 'info@istanbultriathlon.com.tr',
    description: 'Unique triathlon academy on the Bosphorus strait, where Europe meets Asia. Athletes swim across continents in the iconic Bosphorus Cross-Continental race waters, cycle through Thracian countryside, and run along historic Ottoman trails.',
    ageGroups: ['Junior', 'Adult', 'Masters'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 0.5, description: 'Bosphorus strait and Sea of Marmara for cross-continental open water swim training' },
    priceRange: { from: 600, to: 1600, unit: 'week', display: '€600 - €1,600/week' },
    socialMedia: { instagram: '@istanbultriathlon', facebook: 'https://facebook.com/istanbultriathlon', twitter: '@istanbultri' },
    climate: 'istanbul',
    facilities: 'Olympic pool complex, Bosphorus open water swim course, Belgrad Forest cycling and running trails, Princes\' Islands training camps, modern gym, performance testing lab',
    courtSurfaces: ['Open water swim', 'Pool swim', 'Road cycling', 'Trail running'],
    programs: [
      { name: 'Bosphorus Cross-Continental Camp', price: '€1,400/week', desc: 'Train to swim across continents with Bosphorus-specific current training and race preparation' },
      { name: 'Istanbul City Tri Experience', price: '€1,000/week', desc: 'Urban triathlon training combining historic city running with Marmara Sea swimming' },
      { name: 'Endurance Base Builder', price: '€700/week', desc: 'Affordable long-distance base building with Turkish hospitality and warm-weather training' }
    ],
    coaches: [
      { name: 'Mehmet Kaya', credential: 'TTF Level 3 Coach', background: 'Turkish national triathlon team head coach with multiple Bosphorus Cross-Continental race victories', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Turkish', 'German'], instagram: '@mehmetkayatri' },
      { name: 'Ayşe Demir', credential: 'ITU Level 2 Coach', background: 'Former Turkish triathlon champion and Bosphorus open water swimming specialist', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Turkish', 'English'], instagram: '@aysedemirtri' }
    ],
    photos: ['https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800'],
    upcomingCamps: [
      { name: 'Bosphorus Swim Prep Camp', startDate: '2026-06-08', endDate: '2026-06-15', price: '€1,400', level: 'Advanced' },
      { name: 'Winter Base Training', startDate: '2027-01-05', endDate: '2027-01-12', price: '€700', level: 'All levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Bosphorus View Sport Hotel', pricePerWeek: 420, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Kadıköy Seaside Apartment', pricePerWeek: 300, maxOccupancy: 4, bathType: 'shared', mealsIncluded: false }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Turkish cuisine with sport nutrition, hammam recovery sessions available'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-03-01',
      spotsLeft: 24, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 12, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Online schooling support with international curriculum options',
      medicalStaff: true, safeguarding: 'Turkish federation safeguarding standards with international compliance',
      airportPickup: true, mealPlan: 'Full board with Turkish cuisine and sport nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Turkish', 'English', 'German'],
      emergencyProtocol: 'On-site medical staff, American Hospital Istanbul 15 minutes, 24/7 emergency contact'
    }
  },
  {
    id: 'triathlon-ireland-performance-centre',
    name: 'Triathlon Ireland Performance Centre',
    country: 'Ireland', countryFlag: '🇮🇪',
    city: 'Dublin', lat: 53.3478, lng: -6.2397,
    website: 'https://www.triathlonireland.com', contact: '+353 1 625 1100', contactEmail: 'performance@triathlonireland.com',
    description: 'Ireland\'s national triathlon performance centre in Dublin, offering world-class swim, bike, and run facilities. Benefit from Dublin Bay open water swimming and the Wicklow Mountains cycling terrain.',
    ageGroups: ['Junior', 'Adult', 'Masters'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 5, description: 'Sandymount Strand and Dublin Bay for open water swim training' },
    priceRange: { from: 700, to: 1800, unit: 'week', display: '€700 - €1,800/week' },
    socialMedia: { instagram: '@triathlonireland', facebook: 'https://facebook.com/triathlonireland', twitter: '@triikiperformance' },
    climate: 'dublin',
    facilities: 'Olympic pool, open water course in Dublin Bay, cycling routes through Wicklow Mountains, running tracks, transition training area, sports science lab, gym',
    courtSurfaces: ['Open water swim', 'Pool swim', 'Road cycling', 'Trail running'],
    programs: [
      { name: 'Olympic Distance Preparation', price: '€1,400/week', desc: 'Structured Olympic distance triathlon preparation with race simulation and nutrition planning' },
      { name: 'Sprint Triathlon Introduction', price: '€800/week', desc: 'Beginner-friendly sprint triathlon training with technique focus across all three disciplines' },
      { name: 'Swim Technique Clinic', price: '€700/week', desc: 'Intensive open water and pool swimming technique improvement for triathletes' }
    ],
    coaches: [
      { name: 'Eoin McCarthy', credential: 'World Triathlon Level 3 Coach', background: 'Former Irish national triathlon team coach with 15 years experience developing international athletes', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Irish'], instagram: '@eoinmccarthytri' },
      { name: 'Roisín Flanagan', credential: 'Triathlon Ireland Performance Coach', background: 'Former professional triathlete and Ironman 70.3 podium finisher', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Irish'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800', 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800'],
    upcomingCamps: [
      { name: 'Summer Triathlon Camp', startDate: '2026-07-06', endDate: '2026-07-13', price: '€1,400', level: 'Intermediate' },
      { name: 'Beginner Triathlon Week', startDate: '2026-08-17', endDate: '2026-08-24', price: '€800', level: 'Beginner' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Dublin Sport Hotel Partner', pricePerWeek: 500, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Self-catering Dublin Apartment', pricePerWeek: 380, maxOccupancy: 4, bathType: 'shared', mealsIncluded: false }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Dublin city accommodation with easy access to training facilities and Dublin Bay'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-06-01',
      spotsLeft: 18, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 14, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Online schooling support available during camp',
      medicalStaff: true, safeguarding: 'Triathlon Ireland child protection policy, Garda-vetted coaches',
      airportPickup: true, mealPlan: 'Full board with sport nutrition menu',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Irish'],
      emergencyProtocol: '24/7 emergency contact, on-site first aid, St Vincent\'s Hospital 10 minutes away'
    }
  },
  {
    id: 'serbian-triathlon-academy',
    name: 'Serbian Triathlon Academy',
    country: 'Serbia', countryFlag: '🇷🇸',
    city: 'Belgrade', lat: 44.7866, lng: 20.4489,
    website: 'https://www.serbiatriathlon.rs', contact: '+381 11 234 5678', contactEmail: 'info@serbiatriathlon.rs',
    description: 'Belgrade\'s premier triathlon training centre based at Ada Ciganlija, offering lake swimming, riverside cycling, and urban running in Serbia\'s capital.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 0.5, description: 'Ada Ciganlija lake beach 500m away' },
    priceRange: { from: 450, to: 1200, unit: 'week', display: '€450 - €1,200/week' },
    socialMedia: { instagram: '@serbiatriathlon', facebook: 'https://facebook.com/serbiatriathlon', twitter: '@serbiatriathlon' },
    climate: 'belgrade',
    facilities: 'Ada Ciganlija lake swim course, cycling routes along Danube, running tracks, transition training area, gym, sports science lab, recovery centre',
    courtSurfaces: ['Open water swim', 'Pool swim', 'Road cycling', 'Running track'],
    programs: [
      { name: 'Belgrade Triathlon Camp', price: '€1,000/week', desc: 'Full triathlon training at Ada Ciganlija with lake swimming and Danube cycling' },
      { name: 'Sprint Distance Beginner', price: '€500/week', desc: 'Build to your first sprint triathlon in a supportive environment' }
    ],
    coaches: [
      { name: 'Igor Savić', credential: 'ITU Level 2 Coach', background: 'Former Serbian national triathlon team member and Balkan Championships medallist', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Serbian', 'English'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1544919982-b61976f0ba43?w=800'],
    upcomingCamps: [
      { name: 'Ada Ciganlija Summer Tri Camp', startDate: '2026-07-06', endDate: '2026-07-13', price: '€1,000', level: 'All levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Ada Lake Hotel', pricePerWeek: 280, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Belgrade Sport Apartment', pricePerWeek: 200, maxOccupancy: 3, bathType: 'ensuite', mealsIncluded: false }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Accommodation near Ada Ciganlija with direct lake access'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-06-01',
      spotsLeft: 18, responseTime: '48h', privateLessons: true, yearRound: false
    },
    juniorInfo: {
      minAge: 8, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Online schooling support available',
      medicalStaff: true, safeguarding: 'Serbian Triathlon Federation safeguarding standards',
      airportPickup: true, mealPlan: 'Full board with Serbian cuisine and athlete nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Serbian', 'English'],
      emergencyProtocol: 'On-site first aid, Clinical Centre of Serbia 15 minutes'
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
  'antalya': { avgTemp: 19, sunshine: 3000, rainDays: 60, humidity: 60, windSpeed: 10, bestMonths: 'Year-round', description: 'Hot Mediterranean summers and mild winters, excellent year-round training' },
  'hamburg': { avgTemp: 10, sunshine: 1550, rainDays: 130, humidity: 78, windSpeed: 16, bestMonths: 'May-Sep', description: 'Maritime climate with cool summers and mild winters, frequent rain but good summer training' },
  'birmingham': { avgTemp: 10, sunshine: 1400, rainDays: 135, humidity: 80, windSpeed: 14, bestMonths: 'May-Sep', description: 'Temperate English climate with cool summers and mild winters, reliable indoor facilities' },
  'vichy': { avgTemp: 12, sunshine: 1900, rainDays: 100, humidity: 72, windSpeed: 10, bestMonths: 'May-Oct', description: 'Continental climate in central France with warm summers and cold winters' },
  'vitoria': { avgTemp: 12, sunshine: 1700, rainDays: 120, humidity: 70, windSpeed: 12, bestMonths: 'May-Oct', description: 'Mild Basque climate with warm summers and cool winters, moderate rainfall' },
  'sardinia': { avgTemp: 18, sunshine: 2700, rainDays: 45, humidity: 68, windSpeed: 14, bestMonths: 'Mar-Nov', description: 'Mediterranean island climate with hot dry summers and mild winters' },
  'klagenfurt': { avgTemp: 9, sunshine: 1900, rainDays: 100, humidity: 72, windSpeed: 8, bestMonths: 'May-Sep', description: 'Alpine lake climate with warm summers ideal for lake swimming and cool winters' },
  'zurich': { avgTemp: 10, sunshine: 1700, rainDays: 120, humidity: 74, windSpeed: 10, bestMonths: 'May-Sep', description: 'Central European climate with warm summers for lake training and cold alpine winters' },
  'cascais': { avgTemp: 17, sunshine: 2800, rainDays: 50, humidity: 72, windSpeed: 16, bestMonths: 'Year-round', description: 'Atlantic coast climate with mild winters and warm summers, ocean breezes' },
  'athens': { avgTemp: 19, sunshine: 2800, rainDays: 50, humidity: 60, windSpeed: 12, bestMonths: 'Mar-Nov', description: 'Hot Mediterranean climate with long dry summers and mild winters' },
  'copenhagen': { avgTemp: 9, sunshine: 1600, rainDays: 120, humidity: 78, windSpeed: 18, bestMonths: 'May-Sep', description: 'Maritime Scandinavian climate with cool summers and mild winters, harbour swimming season Jun-Sep' },
  'stockholm': { avgTemp: 7, sunshine: 1800, rainDays: 110, humidity: 76, windSpeed: 14, bestMonths: 'May-Sep', description: 'Nordic climate with long summer days ideal for training and cold dark winters' },
  'istanbul': { avgTemp: 15, sunshine: 2400, rainDays: 90, humidity: 72, windSpeed: 14, bestMonths: 'Apr-Nov', description: 'Transitional Mediterranean-continental climate with warm summers and cool winters' },
  'dublin': { avgTemp: 10, sunshine: 1400, rainDays: 150, humidity: 82, windSpeed: 16, bestMonths: 'May-Sep', description: 'Oceanic climate with cool summers and mild, damp winters, Dublin Bay training year-round' },
  'belgrade': { avgTemp: 12, sunshine: 2100, rainDays: 95, humidity: 70, windSpeed: 12, bestMonths: 'May-Sep', description: 'Continental climate with warm summers and cold winters, ideal spring-autumn training' }
};

const NEWS_ITEMS = [
  { date: '2025-01-15', title: 'Paris 2024 Olympic Triathlon Inspires Record Camp Bookings', summary: 'European triathlon training camps report 40% increase in bookings following the successful Paris Olympics triathlon events at the Pont Alexandre III.' },
  { date: '2025-01-10', title: 'New Altitude Training Protocols Show 3% Performance Gains', summary: 'Research from Font Romeu and Livigno altitude centres demonstrates significant endurance improvements from structured live-high, train-low approaches.' },
  { date: '2025-01-05', title: 'Super League Triathlon Expands European Race Calendar', summary: 'The Super League Triathlon series adds new European venues for 2025, boosting demand for short-course triathlon training camps.' },
  { date: '2024-12-20', title: 'Winter Training Camps in Lanzarote and Antalya Fully Booked', summary: 'Warm weather training destinations see unprecedented demand as European triathletes seek winter sunshine for base training.' },
  { date: '2024-12-15', title: 'New Swim Analysis Technology Arrives at European Tri Centres', summary: 'AI-powered underwater camera systems for real-time swim technique analysis deployed across leading triathlon training camps.' }
];

const COUNTRIES = ['Spain', 'France', 'Portugal', 'Italy', 'UK', 'Germany', 'Turkey', 'Austria', 'Switzerland', 'Greece', 'Denmark', 'Sweden', 'Ireland', 'Serbia'];
