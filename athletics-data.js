const SPORT_TYPE = 'athletics';

const ACADEMIES = [
  {
    id: 'barcelona-athletics-center',
    name: 'Barcelona Athletics Center',
    country: 'Spain',
    countryFlag: '🇪🇸',
    city: 'Barcelona',
    lat: 41.3651,
    lng: 2.1568,
    website: 'https://www.barcelonaathletics.com',
    contact: '+34 93 234 5678',
    contactEmail: 'info@barcelonaathletics.com',
    description: 'World-class athletics training facility in Barcelona featuring the Montjuïc Olympic Stadium complex. Year-round Mediterranean climate with access to altitude training at nearby Font Romeu.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 3, description: 'Barcelona beaches along Barceloneta within easy reach' },
    priceRange: { from: 900, to: 2200, unit: 'week', display: '€900 - €2,200/week' },
    socialMedia: { instagram: '@bcnathletics', facebook: 'https://facebook.com/barcelonaathletics', twitter: '@bcnathletics' },
    climate: 'barcelona',
    facilities: 'IAAF-certified 400m track (8 lanes), 200m indoor track, throws area with all disciplines, long/triple/high jump pits, biomechanics lab with Vicon motion capture, altitude training partnerships',
    courtSurfaces: ['Sprint track', 'Distance track', 'Field events', 'Cross country'],
    programs: [
      { name: 'Sprint Development', price: '€1,200/week', desc: 'Block start technique, speed development, acceleration mechanics with video analysis' },
      { name: 'Endurance Training Camp', price: '€1,000/week', desc: 'Middle and long distance training with altitude integration at Font Romeu' },
      { name: 'Combined Events', price: '€1,500/week', desc: 'Multi-event training covering all decathlon/heptathlon disciplines' }
    ],
    coaches: [
      { name: 'Javier García', credential: 'RFEA Level 3 Coach', background: 'Former Spanish national team sprint coach, developed multiple European championship medalists', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Spanish', 'English', 'Catalan'], instagram: null },
      { name: 'María Vasco', credential: 'IAAF Level 5 Lecturer', background: 'Olympic race walker turned coach, specialist in endurance event technique', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Spanish', 'English'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1461896836934-bd45ba0fcfca?w=800', 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800'],
    upcomingCamps: [
      { name: 'Summer Sprint Camp', startDate: '2025-07-07', endDate: '2025-07-14', price: '€1,200', level: 'Advanced' },
      { name: 'Spring Distance Camp', startDate: '2025-04-14', endDate: '2025-04-21', price: '€1,000', level: 'Intermediate' },
      { name: 'Autumn Multi-Event', startDate: '2025-10-06', endDate: '2025-10-13', price: '€1,100', level: 'All Levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Olympic Village Hotel', pricePerWeek: 600, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Athletes Residence', pricePerWeek: 350, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Located near Montjuïc Olympic complex. Sports nutrition meal plan included with all packages.'
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
      minAge: 10,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Partnership with local international school',
      medicalStaff: true,
      safeguarding: 'RFEA child protection policies, background-checked coaches',
      airportPickup: true,
      mealPlan: 'Full board with athlete-specific nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Spanish', 'Catalan'],
      emergencyProtocol: '24/7 emergency line, Hospital Clínic 15 min away'
    }
  },
  {
    id: 'font-romeu-altitude-center',
    name: 'Font Romeu Altitude Training Center',
    country: 'Spain',
    countryFlag: '🇪🇸',
    city: 'Font Romeu',
    lat: 42.5020,
    lng: 2.0370,
    website: 'https://www.fontromeuathletics.com',
    contact: '+34 972 890 123',
    contactEmail: 'info@fontromeuathletics.com',
    description: 'Premier altitude training center at 1,850m elevation on the Spanish-French border. Used by Olympic and World Championship medalists for altitude preparation and endurance base building.',
    ageGroups: ['Junior', 'Adult'],
    level: 'Intermediate to Advanced',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Mountain location — nearest Mediterranean coast approximately 100 km east' },
    priceRange: { from: 800, to: 2000, unit: 'week', display: '€800 - €2,000/week' },
    socialMedia: { instagram: '@fontromeuathletics', facebook: 'https://facebook.com/fontromeuathletics', twitter: '@fontromeu_ath' },
    climate: 'font-romeu',
    facilities: 'IAAF-certified 400m track at 1,850m altitude, 200m indoor track, throws area, jump pits, biomechanics lab, altitude training monitoring with blood testing, cross country trails in pine forests',
    courtSurfaces: ['Sprint track', 'Distance track', 'Field events', 'Cross country'],
    programs: [
      { name: 'Altitude Endurance Block', price: '€1,200/week', desc: 'Structured altitude training for middle and long distance runners with physiological monitoring' },
      { name: 'Sprint at Altitude', price: '€1,500/week', desc: 'Speed development at altitude for enhanced oxygen-carrying capacity' },
      { name: 'Pre-Championship Altitude Camp', price: '€1,800/week', desc: 'Peak performance preparation camp before major championships' }
    ],
    coaches: [
      { name: 'Pere Galles', credential: 'RFEA National Coach', background: 'Specialist in altitude training methodology, coached athletes to Olympic and World Championship medals', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Spanish', 'Catalan', 'French', 'English'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800'],
    upcomingCamps: [
      { name: 'Summer Altitude Block', startDate: '2025-07-14', endDate: '2025-07-28', price: '€2,000', level: 'Advanced' },
      { name: 'Spring Pre-Season', startDate: '2025-04-07', endDate: '2025-04-14', price: '€1,200', level: 'Intermediate' },
      { name: 'Autumn Endurance Camp', startDate: '2025-09-22', endDate: '2025-09-29', price: '€1,000', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Mountain Training Lodge', pricePerWeek: 500, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Mountain lodge adjacent to training track. Altitude-optimized nutrition plan and sleep monitoring included.'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-04-07',
      spotsLeft: 15,
      responseTime: '48h',
      privateLessons: true,
      yearRound: false
    },
    juniorInfo: {
      minAge: 14,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Online schooling support during camps',
      medicalStaff: true,
      safeguarding: 'RFEA child protection, background-checked all staff',
      airportPickup: true,
      mealPlan: 'Full board with altitude nutrition protocols',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Spanish', 'French'],
      emergencyProtocol: 'On-site medical team, hospital in Puigcerdà 20 min'
    }
  },
  {
    id: 'lisbon-athletics-academy',
    name: 'Lisbon Athletics Academy',
    country: 'Portugal',
    countryFlag: '🇵🇹',
    city: 'Lisbon',
    lat: 38.7223,
    lng: -9.1393,
    website: 'https://www.lisbonathletics.pt',
    contact: '+351 21 345 6789',
    contactEmail: 'info@lisbonathletics.pt',
    description: 'Modern athletics training center in Lisbon with year-round mild climate. Featuring renovated facilities from the 2000s era with a focus on developing sprinters and jumpers.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 15, description: 'Atlantic beaches at Cascais and Costa da Caparica nearby' },
    priceRange: { from: 700, to: 1800, unit: 'week', display: '€700 - €1,800/week' },
    socialMedia: { instagram: '@lisbonathletics', facebook: 'https://facebook.com/lisbonathletics', twitter: '@lisbonathletics' },
    climate: 'lisbon',
    facilities: 'IAAF-certified 400m track, covered 200m indoor track, throws area, jump pits with electronic measurement, biomechanics lab, altitude simulation room, strength training center, recovery pool',
    courtSurfaces: ['Sprint track', 'Distance track', 'Field events', 'Cross country'],
    programs: [
      { name: 'Sprint & Jumps Intensive', price: '€900/week', desc: 'Technical sprint and horizontal/vertical jumps training with biomechanics analysis' },
      { name: 'Distance Running Camp', price: '€800/week', desc: 'Road and track endurance training along Lisbon\'s scenic riverside paths' },
      { name: 'Youth Development', price: '€700/week', desc: 'Multi-event introduction for young athletes focusing on fundamental movement skills' }
    ],
    coaches: [
      { name: 'Paulo Carvalho', credential: 'FPA Level 3 Coach', background: 'Former Portuguese national champion in long jump, 20 years coaching experience', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Portuguese', 'English', 'Spanish'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1461896836934-bd45ba0fcfca?w=800'],
    upcomingCamps: [
      { name: 'Summer Sprint Camp', startDate: '2025-07-07', endDate: '2025-07-14', price: '€900', level: 'Intermediate' },
      { name: 'Spring Youth Camp', startDate: '2025-04-21', endDate: '2025-04-28', price: '€700', level: 'All Levels' },
      { name: 'Autumn Technical Camp', startDate: '2025-10-06', endDate: '2025-10-13', price: '€850', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Sport Hotel Lisbon', pricePerWeek: 450, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'hostel', label: 'Athletes Hostel', pricePerWeek: 250, maxOccupancy: 4, bathType: 'shared', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Central Lisbon location with excellent public transport. Sports nutrition guidance included.'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-04-21',
      spotsLeft: 25,
      responseTime: '24h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 8,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Partnership with Lisbon international schools',
      medicalStaff: true,
      safeguarding: 'FPA child protection standards, police-checked coaches',
      airportPickup: true,
      mealPlan: 'Full board with Portuguese Mediterranean diet',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Portuguese'],
      emergencyProtocol: 'On-site first aid, Hospital Santa Maria 15 min'
    }
  },
  {
    id: 'insep-paris-athletics',
    name: 'INSEP Paris Athletics Program',
    country: 'France',
    countryFlag: '🇫🇷',
    city: 'Paris',
    lat: 48.8442,
    lng: 2.4538,
    website: 'https://www.insepathletics.fr',
    contact: '+33 1 41 744 000',
    contactEmail: 'athletics@insepathletics.fr',
    description: 'Train at France\'s prestigious National Institute of Sport, home to Olympic champions. INSEP offers world-class facilities in the Bois de Vincennes park, enhanced for the 2024 Paris Olympics.',
    ageGroups: ['Junior', 'Adult'],
    level: 'Advanced',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Inland location — nearest coast approximately 200 km to English Channel' },
    priceRange: { from: 1500, to: 3000, unit: 'week', display: '€1,500 - €3,000/week' },
    socialMedia: { instagram: '@insepathletics', facebook: 'https://facebook.com/insepathletics', twitter: '@insep_ath' },
    climate: 'paris',
    facilities: 'Olympic-standard 400m track, 200m indoor track with banked turns, throws area, jump pits, world-class biomechanics lab, altitude simulation chambers, sports science research center, cryotherapy',
    courtSurfaces: ['Sprint track', 'Distance track', 'Field events', 'Cross country'],
    programs: [
      { name: 'Elite Sprint Program', price: '€2,000/week', desc: 'High-performance sprint training with French national team methodology' },
      { name: 'Throws Excellence', price: '€2,200/week', desc: 'Shot put, discus, javelin, and hammer throw coaching with Olympic-level equipment' },
      { name: 'Olympic Pathway', price: '€2,500/week', desc: 'Comprehensive training program designed for athletes targeting Olympic qualification' }
    ],
    coaches: [
      { name: 'Pierre-Jean Vazel', credential: 'FFA Entraîneur National', background: 'France\'s leading sprint coach, developed multiple Olympic finalists and European champions', atpWta: false, bestRanking: null, rankingNote: null, languages: ['French', 'English'], instagram: null },
      { name: 'Ghislaine Barnay', credential: 'FFA Level 5 Coach', background: 'Former Olympic athlete, specialist in hurdles and combined events', atpWta: false, bestRanking: null, rankingNote: null, languages: ['French', 'English', 'Spanish'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800'],
    upcomingCamps: [
      { name: 'Summer Elite Camp', startDate: '2025-07-14', endDate: '2025-07-21', price: '€2,000', level: 'Advanced' },
      { name: 'Pre-Season Sprint', startDate: '2025-03-17', endDate: '2025-03-24', price: '€1,800', level: 'Advanced' },
      { name: 'Autumn Throws Camp', startDate: '2025-10-13', endDate: '2025-10-20', price: '€2,200', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'INSEP Athlete Residence', pricePerWeek: 800, maxOccupancy: 1, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: false,
      childrenAllowed: false,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'On-campus residence at INSEP. Full board with French sports nutrition program. Access to all INSEP recovery facilities.'
    },
    availability: {
      status: 'limited',
      nextIntake: '2025-07-14',
      spotsLeft: 5,
      responseTime: '72h',
      privateLessons: true,
      yearRound: false
    },
    juniorInfo: {
      minAge: 15,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: false,
      schooling: 'INSEP integrated education program for elite juniors',
      medicalStaff: true,
      safeguarding: 'French Ministry of Sports safeguarding framework',
      airportPickup: true,
      mealPlan: 'Full board with INSEP nutrition program',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'French'],
      emergencyProtocol: 'INSEP on-site medical center with 24/7 staff'
    }
  },
  {
    id: 'berlin-athletics-academy',
    name: 'Berlin Athletics Academy',
    country: 'Germany',
    countryFlag: '🇩🇪',
    city: 'Berlin',
    lat: 52.5147,
    lng: 13.2395,
    website: 'https://www.berlinathletics.de',
    contact: '+49 30 2345 6789',
    contactEmail: 'info@berlinathletics.de',
    description: 'Train at the iconic Olympiastadion complex in Berlin, home of the 2009 World Championships where world records were shattered. German engineering meets athletics excellence.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Inland location — nearest Baltic coast approximately 250 km north' },
    priceRange: { from: 1000, to: 2500, unit: 'week', display: '€1,000 - €2,500/week' },
    socialMedia: { instagram: '@berlinathletics', facebook: 'https://facebook.com/berlinathletics', twitter: '@berlin_ath' },
    climate: 'berlin',
    facilities: 'Olympic 400m track, full indoor track facility, throws area with cage, jump pits, state-of-the-art biomechanics lab, altitude training simulation, sports medicine center, cryotherapy chamber',
    courtSurfaces: ['Sprint track', 'Distance track', 'Field events', 'Cross country'],
    programs: [
      { name: 'Sprint Excellence', price: '€1,400/week', desc: 'German sprint methodology with focus on start mechanics and maximum velocity' },
      { name: 'Distance Training', price: '€1,200/week', desc: 'Endurance training with access to Berlin\'s famous running routes including Tiergarten' },
      { name: 'Field Events Mastery', price: '€1,600/week', desc: 'Comprehensive throws and jumps training with German technical precision' }
    ],
    coaches: [
      { name: 'Ronald Stein', credential: 'DLV A-Lizenz Trainer', background: 'Former Bundestrainer for German athletics, coached athletes to Olympic and World Championship medals', atpWta: false, bestRanking: null, rankingNote: null, languages: ['German', 'English'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1461896836934-bd45ba0fcfca?w=800'],
    upcomingCamps: [
      { name: 'Summer Track Camp', startDate: '2025-07-07', endDate: '2025-07-14', price: '€1,400', level: 'Advanced' },
      { name: 'Spring Field Events', startDate: '2025-04-07', endDate: '2025-04-14', price: '€1,200', level: 'Intermediate' },
      { name: 'Autumn Sprint Camp', startDate: '2025-09-22', endDate: '2025-09-29', price: '€1,000', level: 'All Levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Berlin Sport Hotel', pricePerWeek: 600, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Near Olympiastadion with excellent U-Bahn connections. German precision nutrition plan included.'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-04-07',
      spotsLeft: 18,
      responseTime: '48h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 10,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'German sports school partnership (Eliteschule des Sports)',
      medicalStaff: true,
      safeguarding: 'DLV child protection policies, police clearance for all coaches',
      airportPickup: true,
      mealPlan: 'Full board with German sports nutrition standards',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'German'],
      emergencyProtocol: 'On-site medical room, Charité Hospital 20 min'
    }
  },
  {
    id: 'loughborough-athletics',
    name: 'Loughborough Athletics Academy',
    country: 'UK',
    countryFlag: '🇬🇧',
    city: 'Loughborough',
    lat: 52.7654,
    lng: -1.2271,
    website: 'https://www.loughboroughathletics.co.uk',
    contact: '+44 1509 226 100',
    contactEmail: 'athletics@loughboroughathletics.co.uk',
    description: 'Based at Loughborough University, the UK\'s #1 sporting university. Paula Radcliffe\'s training base and home to countless British Olympic and World Championship medalists.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Inland location — nearest coast approximately 150 km east' },
    priceRange: { from: 1000, to: 2400, unit: 'week', display: '£1,000 - £2,400/week' },
    socialMedia: { instagram: '@laboroathletics', facebook: 'https://facebook.com/loughboroughathletics', twitter: '@laboroathletics' },
    climate: 'loughborough',
    facilities: 'IAAF-certified 400m outdoor track, world-class indoor track, throws area, jump pits, leading biomechanics lab with force plates, altitude training chamber, sports science research center, hydrotherapy pool',
    courtSurfaces: ['Sprint track', 'Distance track', 'Field events', 'Cross country'],
    programs: [
      { name: 'Sprint Development Program', price: '£1,200/week', desc: 'British Athletics sprint methodology with biomechanics analysis and speed development' },
      { name: 'Endurance Excellence', price: '£1,000/week', desc: 'Distance training on the famed Loughborough cross country courses and track sessions' },
      { name: 'Throws & Jumps Intensive', price: '£1,400/week', desc: 'Technical field event training with world-class equipment and coaching' }
    ],
    coaches: [
      { name: 'George Harrison', credential: 'UK Athletics Level 4 Coach', background: 'Senior British Athletics coach, developed multiple Commonwealth and Olympic athletes', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English'], instagram: null },
      { name: 'Dr. Sarah Thompson', credential: 'UK Athletics Level 4 + PhD Sports Science', background: 'Leading researcher in sprint biomechanics, combines coaching with sports science research', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'French'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800'],
    upcomingCamps: [
      { name: 'Summer Sprint Camp', startDate: '2025-07-21', endDate: '2025-07-28', price: '£1,200', level: 'Advanced' },
      { name: 'Easter Multi-Event', startDate: '2025-04-14', endDate: '2025-04-21', price: '£1,000', level: 'Intermediate' },
      { name: 'October Half-Term', startDate: '2025-10-27', endDate: '2025-11-03', price: '£900', level: 'All Levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'University Hall of Residence', pricePerWeek: 500, maxOccupancy: 1, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Shared Student Flat', pricePerWeek: 300, maxOccupancy: 3, bathType: 'shared', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'University campus accommodation with full access to all sports facilities including pool and gym.'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-04-14',
      spotsLeft: 20,
      responseTime: '48h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 10,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'UK independent school partnerships available',
      medicalStaff: true,
      safeguarding: 'UK Athletics safeguarding, DBS-checked all staff, NSPCC trained',
      airportPickup: true,
      mealPlan: 'Full board with British Athletics nutrition guidance',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English'],
      emergencyProtocol: 'Campus medical center, Loughborough Hospital 10 min'
    }
  },
  {
    id: 'bath-athletics-center',
    name: 'Bath Athletics Training Center',
    country: 'UK',
    countryFlag: '🇬🇧',
    city: 'Bath',
    lat: 51.3811,
    lng: -2.3590,
    website: 'https://www.bathathletics.co.uk',
    contact: '+44 1225 383 000',
    contactEmail: 'athletics@bathathletics.co.uk',
    description: 'University of Bath Sports Training Village, one of the UK\'s premier athletics training environments. Home to multiple Olympic medalists with a focus on combined events and sprints.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 40, description: 'Bristol Channel coast approximately 40 km west' },
    priceRange: { from: 900, to: 2200, unit: 'week', display: '£900 - £2,200/week' },
    socialMedia: { instagram: '@bathathletics', facebook: 'https://facebook.com/bathathletics', twitter: '@bath_athletics' },
    climate: 'bath',
    facilities: '400m outdoor track, 130m indoor straight track, throws area, jump pits, biomechanics lab, altitude training room, strength and conditioning suite, Olympic-size pool, recovery center',
    courtSurfaces: ['Sprint track', 'Distance track', 'Field events', 'Cross country'],
    programs: [
      { name: 'Combined Events Camp', price: '£1,200/week', desc: 'Decathlon and heptathlon training with event-specific coaching for each discipline' },
      { name: 'Sprint Acceleration', price: '£1,100/week', desc: 'Block start technique, acceleration phase development, and speed maintenance' },
      { name: 'Jumps Workshop', price: '£1,000/week', desc: 'High jump, long jump, triple jump, and pole vault technical coaching' }
    ],
    coaches: [
      { name: 'Dr. James Wilson', credential: 'UK Athletics Level 4 Coach', background: 'Former combined events athlete, now Bath\'s head athletics coach with 15 years experience', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1461896836934-bd45ba0fcfca?w=800'],
    upcomingCamps: [
      { name: 'Summer Combined Events', startDate: '2025-07-14', endDate: '2025-07-21', price: '£1,200', level: 'Advanced' },
      { name: 'Easter Sprints Camp', startDate: '2025-04-07', endDate: '2025-04-14', price: '£1,000', level: 'Intermediate' },
      { name: 'Winter Indoor Camp', startDate: '2025-12-15', endDate: '2025-12-22', price: '£900', level: 'All Levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'University Residence', pricePerWeek: 480, maxOccupancy: 1, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'On-campus at University of Bath. Access to pool, gym, and all sports facilities included.'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-04-07',
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
      schooling: 'Bath school partnerships for term-time stays',
      medicalStaff: true,
      safeguarding: 'UK Athletics safeguarding, DBS-checked all staff',
      airportPickup: true,
      mealPlan: 'Full board with university catering',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English'],
      emergencyProtocol: 'Campus medical center, Royal United Hospital Bath 10 min'
    }
  },
  {
    id: 'kuortane-athletics-center',
    name: 'Kuortane Olympic Training Center',
    country: 'Finland',
    countryFlag: '🇫🇮',
    city: 'Kuortane',
    lat: 62.8047,
    lng: 23.5100,
    website: 'https://www.kuortaneathletics.fi',
    contact: '+358 6 525 2000',
    contactEmail: 'info@kuortaneathletics.fi',
    description: 'Finland\'s premier Olympic training center in the heart of Finnish lake country. Renowned for javelin throw excellence, with world-class facilities for all athletics disciplines.',
    ageGroups: ['Junior', 'Adult'],
    level: 'Intermediate to Advanced',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Inland lake region — nearest Baltic coast approximately 100 km west' },
    priceRange: { from: 800, to: 1800, unit: 'week', display: '€800 - €1,800/week' },
    socialMedia: { instagram: '@kuortaneolympic', facebook: 'https://facebook.com/kuortaneolympic', twitter: '@kuortane_ath' },
    climate: 'kuortane',
    facilities: '400m outdoor track, full indoor track facility, throws area with javelin runway, jump pits, biomechanics lab with high-speed cameras, altitude simulation, sauna recovery, cross country trails through Finnish forests',
    courtSurfaces: ['Sprint track', 'Distance track', 'Field events', 'Cross country'],
    programs: [
      { name: 'Javelin Excellence', price: '€1,200/week', desc: 'World-class javelin coaching in the homeland of javelin throwing legends' },
      { name: 'Nordic Sprint Camp', price: '€1,000/week', desc: 'Sprint training utilizing Finnish sports science methods and summer midnight sun hours' },
      { name: 'Cross Country Camp', price: '€900/week', desc: 'Distance running on Finnish forest trails with lake-side recovery' }
    ],
    coaches: [
      { name: 'Petteri Piironen', credential: 'Finnish Athletics Federation Elite Coach', background: 'World-renowned javelin coach, coached multiple Olympic and World Championship medalists', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Finnish', 'English', 'Swedish'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800'],
    upcomingCamps: [
      { name: 'Summer Javelin Camp', startDate: '2025-06-23', endDate: '2025-06-30', price: '€1,200', level: 'Advanced' },
      { name: 'Midnight Sun Training', startDate: '2025-07-14', endDate: '2025-07-21', price: '€1,000', level: 'Intermediate' },
      { name: 'Autumn Cross Country', startDate: '2025-09-08', endDate: '2025-09-15', price: '€900', level: 'All Levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Olympic Center Lodge', pricePerWeek: 500, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'On-site accommodation at the Olympic Training Center. Traditional Finnish sauna included. Lake swimming in summer.'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-23',
      spotsLeft: 12,
      responseTime: '48h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 12,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Finnish sports school system (urheilukoulu) access',
      medicalStaff: true,
      safeguarding: 'Finnish Olympic Committee safeguarding standards',
      airportPickup: true,
      mealPlan: 'Full board with Finnish sports nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Finnish'],
      emergencyProtocol: 'On-site medical room, Seinäjoki Central Hospital 30 min'
    }
  },
  {
    id: 'antalya-athletics-camp',
    name: 'Antalya Athletics Training Camp',
    country: 'Turkey',
    countryFlag: '🇹🇷',
    city: 'Antalya',
    lat: 36.8969,
    lng: 30.7133,
    website: 'https://www.antalyaathletics.com.tr',
    contact: '+90 242 345 6789',
    contactEmail: 'info@antalyaathletics.com.tr',
    description: 'Warm-weather training destination on Turkey\'s Mediterranean coast. Modern athletics facilities with year-round sunshine make Antalya ideal for pre-season and winter training camps.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 2, description: 'Mediterranean beaches of the Turkish Riviera within 2 km' },
    priceRange: { from: 600, to: 1500, unit: 'week', display: '€600 - €1,500/week' },
    socialMedia: { instagram: '@antalyaathletics', facebook: 'https://facebook.com/antalyaathletics', twitter: '@antalya_ath' },
    climate: 'antalya',
    facilities: '400m track, indoor 200m training track, throws area, jump pits, biomechanics lab, altitude training rooms, beach sand training area, cross country trails in surrounding pine forests',
    courtSurfaces: ['Sprint track', 'Distance track', 'Field events', 'Cross country'],
    programs: [
      { name: 'Winter Sun Camp', price: '€800/week', desc: 'Escape northern winters with structured athletics training in warm Antalya sunshine' },
      { name: 'Sprint & Power Camp', price: '€1,000/week', desc: 'Speed and power development with beach sand training integration' },
      { name: 'Distance Running Retreat', price: '€700/week', desc: 'Long-distance training on scenic coastal and mountain trails' }
    ],
    coaches: [
      { name: 'Mehmet Yılmaz', credential: 'Turkish Athletics Federation A License', background: 'Former Turkish national team coach, 20 years experience developing sprinters and jumpers', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Turkish', 'English', 'German'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1461896836934-bd45ba0fcfca?w=800'],
    upcomingCamps: [
      { name: 'Winter Training Camp', startDate: '2025-01-13', endDate: '2025-01-20', price: '€800', level: 'All Levels' },
      { name: 'Spring Pre-Season', startDate: '2025-03-17', endDate: '2025-03-24', price: '€900', level: 'Intermediate' },
      { name: 'Summer Sprint Camp', startDate: '2025-07-07', endDate: '2025-07-14', price: '€1,000', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Sport Resort Hotel', pricePerWeek: 400, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Self-Catering Apartment', pricePerWeek: 250, maxOccupancy: 3, bathType: 'ensuite', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'All-inclusive resort options available. Beach access and pool included with hotel accommodation.'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-03-17',
      spotsLeft: 30,
      responseTime: '24h',
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
      safeguarding: 'Turkish Athletics Federation child protection standards',
      airportPickup: true,
      mealPlan: 'Full board with Turkish Mediterranean cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Turkish', 'German'],
      emergencyProtocol: 'On-site first aid, Antalya City Hospital 15 min'
    }
  },
  {
    id: 'athens-athletics-academy',
    name: 'Athens Olympic Athletics Academy',
    country: 'Greece',
    countryFlag: '🇬🇷',
    city: 'Athens',
    lat: 38.0360,
    lng: 23.7874,
    website: 'https://www.athensathletics.gr',
    contact: '+30 210 683 4000',
    contactEmail: 'info@athensathletics.gr',
    description: 'Train at the birthplace of the Olympic Games. Athens Olympic Athletics Academy uses the renovated 2004 Olympic facilities with year-round Mediterranean sunshine and Greek athletic heritage.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 8, description: 'Athens Riviera beaches at Glyfada and Vouliagmeni within 8 km' },
    priceRange: { from: 800, to: 2000, unit: 'week', display: '€800 - €2,000/week' },
    socialMedia: { instagram: '@athensathletics', facebook: 'https://facebook.com/athensathletics', twitter: '@athens_ath' },
    climate: 'athens',
    facilities: 'Olympic 400m track at OAKA complex, indoor track, throws area, jump pits, biomechanics lab, altitude simulation rooms, Olympic-size pool for cross-training, recovery center',
    courtSurfaces: ['Sprint track', 'Distance track', 'Field events', 'Cross country'],
    programs: [
      { name: 'Olympic Heritage Camp', price: '€1,000/week', desc: 'Train at the 2004 Olympic Athletics facilities with a focus on track and field fundamentals' },
      { name: 'Mediterranean Sprints', price: '€1,200/week', desc: 'Sprint and hurdles training in warm Athens climate with beach sand work' },
      { name: 'Distance & Cross Country', price: '€900/week', desc: 'Running on Mount Hymettus trails and Athens coastal paths' }
    ],
    coaches: [
      { name: 'Giorgos Papadopoulos', credential: 'SEGAS Level 3 Coach', background: 'Former Greek national team athlete, specialist in sprint and relay coaching', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Greek', 'English'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800'],
    upcomingCamps: [
      { name: 'Summer Olympic Camp', startDate: '2025-07-07', endDate: '2025-07-14', price: '€1,000', level: 'All Levels' },
      { name: 'Spring Sprint Intensive', startDate: '2025-04-14', endDate: '2025-04-21', price: '€1,200', level: 'Advanced' },
      { name: 'Autumn Distance Camp', startDate: '2025-10-06', endDate: '2025-10-13', price: '€900', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Athens Sport Hotel', pricePerWeek: 500, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'City Apartment', pricePerWeek: 350, maxOccupancy: 3, bathType: 'ensuite', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Close to OAKA Olympic complex. Greek Mediterranean meal plans with fresh local produce.'
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
      schooling: 'Greek international school partnerships',
      medicalStaff: true,
      safeguarding: 'SEGAS child protection policies, background-checked coaches',
      airportPickup: true,
      mealPlan: 'Full board with Greek Mediterranean diet',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Greek'],
      emergencyProtocol: 'On-site medical team, Evangelismos Hospital 20 min'
    }
  },
  {
    id: 'rome-athletics-center',
    name: 'Rome Athletics Training Center',
    country: 'Italy',
    countryFlag: '🇮🇹',
    city: 'Rome',
    lat: 41.9290,
    lng: 12.4546,
    website: 'https://www.romeathletics.it',
    contact: '+39 06 3685 8000',
    contactEmail: 'info@romeathletics.it',
    description: 'Train at the Stadio Olimpico complex in Rome, site of the 1960 Olympics and 1987 World Championships. Italian athletics excellence with warm Mediterranean training conditions.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 30, description: 'Ostia beach on the Tyrrhenian Sea approximately 30 km southwest' },
    priceRange: { from: 900, to: 2200, unit: 'week', display: '€900 - €2,200/week' },
    socialMedia: { instagram: '@romeathletics', facebook: 'https://facebook.com/romeathletics', twitter: '@rome_athletics' },
    climate: 'rome',
    facilities: 'Olympic 400m track, indoor track facility, throws area, jump pits, biomechanics lab with FIDAL sports science support, altitude training simulation, recovery center, cryotherapy',
    courtSurfaces: ['Sprint track', 'Distance track', 'Field events', 'Cross country'],
    programs: [
      { name: 'Italian Sprint School', price: '€1,200/week', desc: 'Italian sprint methodology — the system that produced European champions' },
      { name: 'Throws Academy', price: '€1,400/week', desc: 'Discus, shot put, javelin training with Italian technical excellence' },
      { name: 'All-Round Athlete', price: '€1,000/week', desc: 'Multi-discipline development covering all track and field events' }
    ],
    coaches: [
      { name: 'Filippo Di Mulo', credential: 'FIDAL Tecnico Nazionale', background: 'Head of Italian sprints, coached Italy to Olympic relay gold. Pioneer of Italian sprint school methodology', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Italian', 'English'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1461896836934-bd45ba0fcfca?w=800'],
    upcomingCamps: [
      { name: 'Summer Sprint School', startDate: '2025-07-07', endDate: '2025-07-14', price: '€1,200', level: 'Advanced' },
      { name: 'Spring Throws Camp', startDate: '2025-04-14', endDate: '2025-04-21', price: '€1,400', level: 'Intermediate' },
      { name: 'Autumn Running Camp', startDate: '2025-10-06', endDate: '2025-10-13', price: '€1,000', level: 'All Levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Rome Sport Hotel', pricePerWeek: 600, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Near Foro Italico sports complex. Italian sports cuisine with performance nutrition guidance.'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-04-14',
      spotsLeft: 18,
      responseTime: '48h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 10,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Italian international school partnerships',
      medicalStaff: true,
      safeguarding: 'FIDAL child protection policies, background-checked staff',
      airportPickup: true,
      mealPlan: 'Full board with Italian Mediterranean athlete diet',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Italian'],
      emergencyProtocol: 'On-site medical center, Policlinico Gemelli 20 min'
    }
  },
  {
    id: 'sweden-athletics-academy',
    name: 'Sweden Athletics Academy',
    country: 'Sweden',
    countryFlag: '🇸🇪',
    city: 'Gothenburg',
    lat: 57.7089,
    lng: 11.9746,
    website: 'https://www.swedenathletics.se',
    contact: '+46 31 345 6789',
    contactEmail: 'info@swedenathletics.se',
    description: 'Scandinavian athletics excellence in Gothenburg, Sweden. Known for developing pole vaulters, high jumpers, and middle distance runners using Swedish sports science methodology.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 5, description: 'Gothenburg archipelago beaches within 5 km' },
    priceRange: { from: 1000, to: 2200, unit: 'week', display: 'SEK 12,000 - SEK 25,000/week' },
    socialMedia: { instagram: '@swedenathletics', facebook: 'https://facebook.com/swedenathletics', twitter: '@swe_athletics' },
    climate: 'gothenburg',
    facilities: '400m outdoor track, excellent indoor track facility for winter training, throws area, jump pits including pole vault, biomechanics lab, altitude training room, recovery center with Swedish sports medicine',
    courtSurfaces: ['Sprint track', 'Distance track', 'Field events', 'Cross country'],
    programs: [
      { name: 'Pole Vault Academy', price: 'SEK 15,000/week', desc: 'World-class pole vault coaching from the country that produced Mondo Duplantis' },
      { name: 'Nordic Running Camp', price: 'SEK 12,000/week', desc: 'Middle and long distance training in Scandinavian summer conditions' },
      { name: 'Swedish Sports Science', price: 'SEK 18,000/week', desc: 'Data-driven athletics training using Swedish sports science methodology' }
    ],
    coaches: [
      { name: 'Henrik Larsson', credential: 'Swedish Athletics Federation Elite Coach', background: 'Leading Swedish athletics coach specializing in vertical jumps and combined events', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Swedish', 'English', 'Norwegian'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800'],
    upcomingCamps: [
      { name: 'Summer Pole Vault Camp', startDate: '2025-07-07', endDate: '2025-07-14', price: 'SEK 15,000', level: 'Advanced' },
      { name: 'Spring Running Camp', startDate: '2025-05-05', endDate: '2025-05-12', price: 'SEK 12,000', level: 'Intermediate' },
      { name: 'Autumn Multi-Event', startDate: '2025-09-15', endDate: '2025-09-22', price: 'SEK 14,000', level: 'All Levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Gothenburg Sport Hotel', pricePerWeek: 600, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Scandinavian-standard accommodation near training facility. Swedish sports nutrition program included.'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-05-05',
      spotsLeft: 14,
      responseTime: '48h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 10,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Swedish sports gymnasium partnerships',
      medicalStaff: true,
      safeguarding: 'Swedish Athletics safeguarding framework, police-checked coaches',
      airportPickup: true,
      mealPlan: 'Full board with Scandinavian sports nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Swedish'],
      emergencyProtocol: 'On-site medical room, Sahlgrenska University Hospital 15 min'
    }
  }
];

const CLIMATE_DATA = {
  barcelona: { spring: { tempHigh: 20, tempLow: 11, rainDays: 6, sunshine: 8 }, summer: { tempHigh: 29, tempLow: 21, rainDays: 3, sunshine: 10 }, autumn: { tempHigh: 21, tempLow: 13, rainDays: 7, sunshine: 6 }, winter: { tempHigh: 14, tempLow: 6, rainDays: 5, sunshine: 5 } },
  'font-romeu': { spring: { tempHigh: 13, tempLow: 2, rainDays: 9, sunshine: 7 }, summer: { tempHigh: 24, tempLow: 11, rainDays: 7, sunshine: 10 }, autumn: { tempHigh: 13, tempLow: 3, rainDays: 8, sunshine: 6 }, winter: { tempHigh: 6, tempLow: -3, rainDays: 6, sunshine: 5 } },
  lisbon: { spring: { tempHigh: 20, tempLow: 12, rainDays: 7, sunshine: 8 }, summer: { tempHigh: 28, tempLow: 18, rainDays: 1, sunshine: 11 }, autumn: { tempHigh: 21, tempLow: 14, rainDays: 8, sunshine: 7 }, winter: { tempHigh: 15, tempLow: 8, rainDays: 9, sunshine: 5 } },
  paris: { spring: { tempHigh: 16, tempLow: 7, rainDays: 10, sunshine: 6 }, summer: { tempHigh: 25, tempLow: 15, rainDays: 8, sunshine: 8 }, autumn: { tempHigh: 15, tempLow: 8, rainDays: 10, sunshine: 4 }, winter: { tempHigh: 7, tempLow: 2, rainDays: 10, sunshine: 2 } },
  berlin: { spring: { tempHigh: 15, tempLow: 5, rainDays: 8, sunshine: 6 }, summer: { tempHigh: 25, tempLow: 14, rainDays: 9, sunshine: 8 }, autumn: { tempHigh: 14, tempLow: 6, rainDays: 8, sunshine: 4 }, winter: { tempHigh: 4, tempLow: -1, rainDays: 9, sunshine: 2 } },
  loughborough: { spring: { tempHigh: 13, tempLow: 4, rainDays: 10, sunshine: 5 }, summer: { tempHigh: 21, tempLow: 12, rainDays: 9, sunshine: 7 }, autumn: { tempHigh: 13, tempLow: 6, rainDays: 11, sunshine: 4 }, winter: { tempHigh: 7, tempLow: 1, rainDays: 12, sunshine: 2 } },
  bath: { spring: { tempHigh: 14, tempLow: 5, rainDays: 10, sunshine: 5 }, summer: { tempHigh: 22, tempLow: 12, rainDays: 8, sunshine: 7 }, autumn: { tempHigh: 14, tempLow: 7, rainDays: 11, sunshine: 4 }, winter: { tempHigh: 8, tempLow: 2, rainDays: 13, sunshine: 2 } },
  kuortane: { spring: { tempHigh: 8, tempLow: -2, rainDays: 7, sunshine: 6 }, summer: { tempHigh: 21, tempLow: 11, rainDays: 8, sunshine: 10 }, autumn: { tempHigh: 7, tempLow: 0, rainDays: 10, sunshine: 3 }, winter: { tempHigh: -3, tempLow: -12, rainDays: 8, sunshine: 1 } },
  antalya: { spring: { tempHigh: 22, tempLow: 11, rainDays: 5, sunshine: 9 }, summer: { tempHigh: 34, tempLow: 22, rainDays: 0, sunshine: 12 }, autumn: { tempHigh: 24, tempLow: 14, rainDays: 4, sunshine: 8 }, winter: { tempHigh: 15, tempLow: 6, rainDays: 10, sunshine: 5 } },
  athens: { spring: { tempHigh: 21, tempLow: 11, rainDays: 5, sunshine: 9 }, summer: { tempHigh: 33, tempLow: 22, rainDays: 1, sunshine: 12 }, autumn: { tempHigh: 23, tempLow: 14, rainDays: 5, sunshine: 8 }, winter: { tempHigh: 13, tempLow: 5, rainDays: 8, sunshine: 4 } },
  rome: { spring: { tempHigh: 20, tempLow: 9, rainDays: 7, sunshine: 7 }, summer: { tempHigh: 31, tempLow: 19, rainDays: 2, sunshine: 10 }, autumn: { tempHigh: 21, tempLow: 11, rainDays: 8, sunshine: 6 }, winter: { tempHigh: 12, tempLow: 3, rainDays: 7, sunshine: 4 } },
  gothenburg: { spring: { tempHigh: 12, tempLow: 3, rainDays: 9, sunshine: 6 }, summer: { tempHigh: 22, tempLow: 13, rainDays: 9, sunshine: 8 }, autumn: { tempHigh: 12, tempLow: 5, rainDays: 12, sunshine: 3 }, winter: { tempHigh: 4, tempLow: -2, rainDays: 13, sunshine: 1 } }
};

const NEWS_ITEMS = [
  { date: '2025-06-01', title: 'Barcelona Opens New Indoor Track', summary: 'Barcelona Athletics Center unveils renovated 200m indoor track with state-of-the-art Mondo surface and integrated timing systems.' },
  { date: '2025-05-15', title: 'Font Romeu Altitude Camps Expanded', summary: 'Due to increasing demand, Font Romeu adds extra summer altitude training camps with extended capacity for 2025 season.' },
  { date: '2025-05-01', title: 'Loughborough Biomechanics Lab Upgrade', summary: 'Loughborough Athletics Academy installs new Vicon motion capture system for enhanced biomechanical analysis of all athletics disciplines.' },
  { date: '2025-04-20', title: 'Athens Olympic Facility Renovation Complete', summary: 'Athens Olympic Athletics Academy completes full renovation of 2004 Olympic track facilities with new surface and equipment.' },
  { date: '2025-04-10', title: 'Kuortane Javelin Program Goes International', summary: 'Finnish javelin excellence now available to international athletes with dedicated English-language javelin training camps.' }
];

const COUNTRIES = ['Spain', 'Portugal', 'France', 'Germany', 'UK', 'Finland', 'Turkey', 'Greece', 'Italy', 'Sweden'];
