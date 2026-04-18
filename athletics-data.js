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
  },
  {
    id: 'papendal-athletics-center',
    name: 'Papendal Athletics Center',
    country: 'Netherlands',
    countryFlag: '🇳🇱',
    city: 'Arnhem',
    lat: 51.9851,
    lng: 5.8468,
    website: 'https://www.papendal.nl',
    contact: '+31 26 483 7911',
    contactEmail: 'athletics@papendal.nl',
    description: 'The Dutch Olympic training center at Papendal, home to Netherlands national athletics teams. State-of-the-art facilities surrounded by Veluwe forest, offering elite sprint, endurance and field event programs with world-class sports science support.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby — inland city' },
    priceRange: { from: 900, to: 2000, unit: 'week', display: '€900 - €2,000/week' },
    socialMedia: { instagram: '@papendalathletics', facebook: 'https://facebook.com/papendalsport', twitter: '@papendal' },
    climate: 'papendal',
    facilities: 'IAAF-certified 400m outdoor track (8 lanes), 200m indoor track, throws cage, biomechanics lab, altitude simulation chamber, recovery center with cryotherapy',
    courtSurfaces: ['Sprint track', 'Distance track', 'Field events', 'Cross country'],
    programs: [
      { name: 'Sprint & Hurdles Intensive', price: '€1,300/week', desc: 'Advanced sprint mechanics and hurdle technique with Dutch national-level coaches and video analysis' },
      { name: 'Endurance Performance Camp', price: '€1,100/week', desc: 'Middle and long distance training utilizing Veluwe forest trails and altitude simulation' },
      { name: 'Combined Events Development', price: '€1,500/week', desc: 'Multi-event training across all decathlon/heptathlon disciplines with periodization planning' }
    ],
    coaches: [
      { name: 'Bart Bennema', credential: 'World Athletics Level 5 Lecturer', background: 'Former Dutch national sprint coach, developed multiple European championship finalists', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Dutch', 'English', 'German'], instagram: null },
      { name: 'Lisanne de Witte', credential: 'KNAU Level 4 Coach', background: 'Former international 400m runner, specialist in speed endurance development', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Dutch', 'English'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1461896836934-bd45ba0fcfca?w=800', 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800'],
    upcomingCamps: [
      { name: 'Spring Sprint Development', startDate: '2026-04-13', endDate: '2026-04-20', price: '€1,300', level: 'Advanced' },
      { name: 'Summer Endurance Camp', startDate: '2026-07-06', endDate: '2026-07-13', price: '€1,100', level: 'Intermediate' },
      { name: 'Winter Indoor Training', startDate: '2027-01-11', endDate: '2027-01-18', price: '€1,200', level: 'All Levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Papendal Hotel', pricePerWeek: 650, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Athletes Lodge', pricePerWeek: 380, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'On-site accommodation within the Papendal sports campus. Full board sports nutrition included.'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-04-01',
      spotsLeft: 18,
      responseTime: '24h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 10,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Dutch sports school partnerships available',
      medicalStaff: true,
      safeguarding: 'KNAU child protection framework, VOG-certified coaches',
      airportPickup: true,
      mealPlan: 'Full board with Dutch sports nutrition program',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Dutch'],
      emergencyProtocol: 'On-site medical center, Rijnstate Hospital 10 min'
    }
  },
  {
    id: 'louvain-athletics-academy',
    name: 'Louvain Athletics Academy',
    country: 'Belgium',
    countryFlag: '🇧🇪',
    city: 'Louvain-la-Neuve',
    lat: 50.6681,
    lng: 4.6118,
    website: 'https://www.louvainathletics.be',
    contact: '+32 10 47 8900',
    contactEmail: 'info@louvainathletics.be',
    description: 'Belgian university athletics academy based at UCLouvain, combining academic excellence with elite athletic development. Home to some of Belgium\'s top sprinters and jumpers with access to cutting-edge sports science research.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby — inland city' },
    priceRange: { from: 800, to: 1800, unit: 'week', display: '€800 - €1,800/week' },
    socialMedia: { instagram: '@louvainathletics', facebook: 'https://facebook.com/louvainathletics', twitter: '@louvainathl' },
    climate: 'louvain',
    facilities: 'IAAF-certified 400m track, indoor 200m track, sports science lab at UCLouvain, throws area, jumps runway with sand pits, strength and conditioning gym',
    courtSurfaces: ['Sprint track', 'Distance track', 'Field events', 'Indoor track'],
    programs: [
      { name: 'Sprint & Jumps Clinic', price: '€1,000/week', desc: 'Explosive speed and horizontal/vertical jumps training with university biomechanics support' },
      { name: 'Middle Distance Camp', price: '€900/week', desc: 'Lactate threshold and race tactics for 800m-1500m specialists' },
      { name: 'Throws Development', price: '€1,100/week', desc: 'Shot put, discus, javelin and hammer technique with strength programming' }
    ],
    coaches: [
      { name: 'Philippe Dupont', credential: 'LBFA Level 4 Coach', background: 'Former Belgian national team coach, specialist in sprint and relay development', atpWta: false, bestRanking: null, rankingNote: null, languages: ['French', 'English', 'Dutch'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1461896836934-bd45ba0fcfca?w=800', 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800'],
    upcomingCamps: [
      { name: 'Easter Sprint Camp', startDate: '2026-04-06', endDate: '2026-04-13', price: '€1,000', level: 'Intermediate' },
      { name: 'Summer Athletics Week', startDate: '2026-07-20', endDate: '2026-07-27', price: '€900', level: 'All Levels' },
      { name: 'Autumn Throws Intensive', startDate: '2026-10-19', endDate: '2026-10-26', price: '€1,100', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'University Residence Hotel', pricePerWeek: 500, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Student Athletes Residence', pricePerWeek: 300, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'University campus accommodation with access to all campus amenities. Sports nutrition meal plan included.'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-04-01',
      spotsLeft: 16,
      responseTime: '48h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 12,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Belgian sports school integration available',
      medicalStaff: true,
      safeguarding: 'LBFA child protection policies, background-checked coaches',
      airportPickup: true,
      mealPlan: 'Full board with sports nutrition guidance',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'French', 'Dutch'],
      emergencyProtocol: 'University medical center on campus, Cliniques UCL 10 min'
    }
  },
  {
    id: 'warsaw-athletics-center',
    name: 'Warsaw Athletics Center',
    country: 'Poland',
    countryFlag: '🇵🇱',
    city: 'Warsaw',
    lat: 52.2297,
    lng: 21.0122,
    website: 'https://www.warsawathletics.pl',
    contact: '+48 22 345 6789',
    contactEmail: 'info@warsawathletics.pl',
    description: 'Poland\'s premier athletics training center located near the National Stadium in Warsaw. Drawing on Poland\'s rich tradition in hammer throw, race walking and middle distance running, with modern facilities and experienced coaching staff.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby — inland city' },
    priceRange: { from: 600, to: 1400, unit: 'week', display: '€600 - €1,400/week' },
    socialMedia: { instagram: '@warsawathletics', facebook: 'https://facebook.com/warsawathletics', twitter: '@warsawathl' },
    climate: 'warsaw',
    facilities: 'IAAF-certified 400m track (8 lanes), indoor 200m facility, hammer throw cage, race walking course, sports medicine clinic, video analysis suite',
    courtSurfaces: ['Sprint track', 'Distance track', 'Field events', 'Race walking course'],
    programs: [
      { name: 'Hammer & Throws Academy', price: '€800/week', desc: 'Specialized hammer throw and rotational throws training in the Polish tradition' },
      { name: 'Sprint & Hurdles Camp', price: '€750/week', desc: 'Speed development and hurdle technique for 100m-400m hurdles with biomechanical analysis' },
      { name: 'Race Walking Excellence', price: '€700/week', desc: 'Technical race walking program with video gait analysis and endurance development' }
    ],
    coaches: [
      { name: 'Krzysztof Kaliszewski', credential: 'PZLA Level 4 Coach', background: 'Former Polish national team throws coach, developed multiple World Championship medalists in hammer throw', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Polish', 'English'], instagram: null },
      { name: 'Anna Wielgosz', credential: 'World Athletics Level 4 Coach', background: 'Former international middle distance runner, specialist in 800m-1500m development', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Polish', 'English', 'German'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1461896836934-bd45ba0fcfca?w=800', 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800'],
    upcomingCamps: [
      { name: 'Spring Throws Camp', startDate: '2026-05-04', endDate: '2026-05-11', price: '€800', level: 'Intermediate' },
      { name: 'Summer Sprint Intensive', startDate: '2026-07-13', endDate: '2026-07-20', price: '€750', level: 'Advanced' },
      { name: 'Autumn Walking Clinic', startDate: '2026-09-21', endDate: '2026-09-28', price: '€700', level: 'All Levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Sport Hotel Warsaw', pricePerWeek: 450, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Athletes Dormitory', pricePerWeek: 250, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Accommodation near the National Stadium complex. Traditional Polish cuisine with sports nutrition options.'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-05-01',
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
      schooling: 'Polish sports school partnerships available',
      medicalStaff: true,
      safeguarding: 'PZLA child protection framework, police-checked coaches',
      airportPickup: true,
      mealPlan: 'Full board with sports nutrition program',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Polish'],
      emergencyProtocol: 'On-site medical room, Central Clinical Hospital 15 min'
    }
  },
  {
    id: 'prague-athletics-academy',
    name: 'Prague Athletics Academy',
    country: 'Czech Republic',
    countryFlag: '🇨🇿',
    city: 'Prague',
    lat: 50.0755,
    lng: 14.4378,
    website: 'https://www.pragueathletics.cz',
    contact: '+420 222 345 678',
    contactEmail: 'info@pragueathletics.cz',
    description: 'Czech athletics academy continuing the nation\'s proud tradition in javelin, decathlon and distance running. Located at the Strahov sports complex with modern facilities and connections to Czech sports science institutions.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby — inland city' },
    priceRange: { from: 700, to: 1500, unit: 'week', display: '€700 - €1,500/week' },
    socialMedia: { instagram: '@pragueathletics', facebook: 'https://facebook.com/pragueathletics', twitter: '@pragueathl' },
    climate: 'prague',
    facilities: 'IAAF-certified 400m track, indoor athletics hall, javelin runway, biomechanics lab at Charles University, strength training center, recovery facilities',
    courtSurfaces: ['Sprint track', 'Distance track', 'Field events', 'Indoor track'],
    programs: [
      { name: 'Javelin & Throws Camp', price: '€900/week', desc: 'Czech javelin tradition training with world-class technique coaching and video analysis' },
      { name: 'Decathlon Development', price: '€1,000/week', desc: 'Complete multi-event training program covering all ten disciplines with periodization' },
      { name: 'Distance Running Camp', price: '€800/week', desc: 'Endurance development with Prague park trails and structured interval training' }
    ],
    coaches: [
      { name: 'Jan Železný Jr.', credential: 'ČAS Level 4 Coach', background: 'Czech national javelin coach, continuing the family legacy of Czech javelin excellence', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Czech', 'English', 'German'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1461896836934-bd45ba0fcfca?w=800', 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800'],
    upcomingCamps: [
      { name: 'Spring Javelin Clinic', startDate: '2026-04-20', endDate: '2026-04-27', price: '€900', level: 'Intermediate' },
      { name: 'Summer Decathlon Week', startDate: '2026-07-06', endDate: '2026-07-13', price: '€1,000', level: 'Advanced' },
      { name: 'Winter Indoor Training', startDate: '2027-01-12', endDate: '2027-01-19', price: '€850', level: 'All Levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Strahov Sport Hotel', pricePerWeek: 480, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Athletes Residence', pricePerWeek: 280, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Accommodation at the Strahov complex overlooking Prague. Czech cuisine with sports nutrition options.'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-04-15',
      spotsLeft: 15,
      responseTime: '48h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 11,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Czech sports gymnasium partnerships',
      medicalStaff: true,
      safeguarding: 'ČAS child protection policies, background-checked coaches',
      airportPickup: true,
      mealPlan: 'Full board with sports nutrition program',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Czech'],
      emergencyProtocol: 'On-site medical room, Motol University Hospital 10 min'
    }
  },
  {
    id: 'budapest-athletics-center',
    name: 'Budapest Athletics Center',
    country: 'Hungary',
    countryFlag: '🇭🇺',
    city: 'Budapest',
    lat: 47.4979,
    lng: 19.0402,
    website: 'https://www.budapestathletics.hu',
    contact: '+36 1 234 5678',
    contactEmail: 'info@budapestathletics.hu',
    description: 'Hungarian athletics center at the state-of-the-art National Athletics Centre built for the 2023 World Athletics Championships. World-class facilities on the banks of the Danube with Hungary\'s finest coaching talent.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby — inland city, but Danube riverside recreation available' },
    priceRange: { from: 700, to: 1600, unit: 'week', display: '€700 - €1,600/week' },
    socialMedia: { instagram: '@budapestathletics', facebook: 'https://facebook.com/budapestathletics', twitter: '@bpathletics' },
    climate: 'budapest',
    facilities: 'World Championship-standard 400m track (9 lanes), warm-up track, indoor athletics hall, throws area, jumps complex, sports science center, hydrotherapy recovery using thermal springs',
    courtSurfaces: ['Sprint track', 'Distance track', 'Field events', 'Warm-up track'],
    programs: [
      { name: 'Sprint Excellence Program', price: '€950/week', desc: 'World Championship venue sprint training with electronic timing and force plate analysis' },
      { name: 'Field Events Masterclass', price: '€1,000/week', desc: 'Comprehensive field events training at championship-standard facilities' },
      { name: 'Endurance & Cross Country', price: '€850/week', desc: 'Distance training utilizing Margaret Island and Buda Hills trail networks' }
    ],
    coaches: [
      { name: 'László Nagy', credential: 'MASZ Level 4 Coach', background: 'Hungarian national team field events coach, specialist in high jump and pole vault development', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Hungarian', 'English', 'German'], instagram: null },
      { name: 'Katalin Szabó', credential: 'World Athletics Level 4 Coach', background: 'Former European Championship athlete, specialist in sprint and relay coaching', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Hungarian', 'English'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1461896836934-bd45ba0fcfca?w=800', 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800'],
    upcomingCamps: [
      { name: 'Spring Sprint Camp', startDate: '2026-04-13', endDate: '2026-04-20', price: '€950', level: 'Advanced' },
      { name: 'Summer Field Events Week', startDate: '2026-06-22', endDate: '2026-06-29', price: '€1,000', level: 'Intermediate' },
      { name: 'Autumn Endurance Camp', startDate: '2026-10-05', endDate: '2026-10-12', price: '€850', level: 'All Levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Danube Sport Hotel', pricePerWeek: 520, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Athletes Village', pricePerWeek: 300, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Near the National Athletics Centre on the Danube. Hungarian cuisine with sports nutrition, thermal spa recovery included.'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-04-01',
      spotsLeft: 22,
      responseTime: '24h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 10,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Hungarian sports school partnerships',
      medicalStaff: true,
      safeguarding: 'MASZ child protection framework, background-checked coaches',
      airportPickup: true,
      mealPlan: 'Full board with Hungarian sports nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Hungarian', 'German'],
      emergencyProtocol: 'On-site medical facility, Semmelweis University Hospital 15 min'
    }
  },
  {
    id: 'bucharest-athletics-academy',
    name: 'Bucharest Athletics Academy',
    country: 'Romania',
    countryFlag: '🇷🇴',
    city: 'Bucharest',
    lat: 44.4268,
    lng: 26.1025,
    website: 'https://www.bucharestathletics.ro',
    contact: '+40 21 345 6789',
    contactEmail: 'info@bucharestathletics.ro',
    description: 'Romanian athletics academy drawing on the country\'s proud tradition in middle distance, steeplechase and race walking. Modern training facilities with experienced coaches who have produced European-level athletes.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby — inland city' },
    priceRange: { from: 600, to: 1200, unit: 'week', display: '€600 - €1,200/week' },
    socialMedia: { instagram: '@bucharestathletics', facebook: 'https://facebook.com/bucharestathletics', twitter: '@bucharestath' },
    climate: 'bucharest',
    facilities: 'IAAF-certified 400m track, indoor 200m hall, steeplechase water jump, race walking circuit, sports medicine clinic, strength training center',
    courtSurfaces: ['Sprint track', 'Distance track', 'Field events', 'Steeplechase'],
    programs: [
      { name: 'Steeplechase & Distance Camp', price: '€700/week', desc: 'Water jump technique and distance training in Romania\'s strong endurance tradition' },
      { name: 'Sprint Development Program', price: '€750/week', desc: 'Acceleration and maximum velocity training with reaction time analysis' },
      { name: 'Field Events Introduction', price: '€650/week', desc: 'Multi-discipline field events program for developing athletes' }
    ],
    coaches: [
      { name: 'Ionuț Popescu', credential: 'FRA Level 3 Coach', background: 'Former Romanian national steeplechase coach, developed multiple Balkan Championship medalists', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Romanian', 'English', 'French'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1461896836934-bd45ba0fcfca?w=800', 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800'],
    upcomingCamps: [
      { name: 'Spring Distance Camp', startDate: '2026-04-20', endDate: '2026-04-27', price: '€700', level: 'Intermediate' },
      { name: 'Summer Sprint Week', startDate: '2026-07-13', endDate: '2026-07-20', price: '€750', level: 'All Levels' },
      { name: 'Autumn Field Events Clinic', startDate: '2026-09-28', endDate: '2026-10-05', price: '€650', level: 'All Levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Sport Hotel Bucharest', pricePerWeek: 380, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Athletes Hostel', pricePerWeek: 200, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Centrally located accommodation with excellent value. Romanian cuisine with sports nutrition options.'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-04-15',
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
      schooling: 'Romanian sports school partnerships',
      medicalStaff: true,
      safeguarding: 'FRA child protection policies, police-checked coaches',
      airportPickup: true,
      mealPlan: 'Full board with sports nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Romanian', 'French'],
      emergencyProtocol: 'On-site medical room, Floreasca Emergency Hospital 15 min'
    }
  },
  {
    id: 'zagreb-athletics-center',
    name: 'Zagreb Athletics Center',
    country: 'Croatia',
    countryFlag: '🇭🇷',
    city: 'Zagreb',
    lat: 45.8150,
    lng: 15.9819,
    website: 'https://www.zagrebathletics.hr',
    contact: '+385 1 234 5678',
    contactEmail: 'info@zagrebathletics.hr',
    description: 'Croatian athletics development center in Zagreb, home to the Zagreb Meeting World Athletics Continental Tour event. Strong tradition in high jump, discus and sprints with well-equipped training facilities.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby — inland city' },
    priceRange: { from: 650, to: 1400, unit: 'week', display: '€650 - €1,400/week' },
    socialMedia: { instagram: '@zagrebathletics', facebook: 'https://facebook.com/zagrebathletics', twitter: '@zagrebathl' },
    climate: 'zagreb',
    facilities: 'IAAF-certified 400m track, indoor athletics hall, discus cage, high jump area with fan pit, sports science lab, physiotherapy center',
    courtSurfaces: ['Sprint track', 'Distance track', 'Field events', 'Indoor track'],
    programs: [
      { name: 'High Jump & Vertical Events', price: '€850/week', desc: 'Specialized high jump and pole vault technique training with video analysis' },
      { name: 'Discus & Throws Camp', price: '€800/week', desc: 'Rotational throwing technique development with Croatian national-level coaching' },
      { name: 'Sprint & Relay Training', price: '€900/week', desc: 'Individual sprint development and relay baton exchange technique' }
    ],
    coaches: [
      { name: 'Marko Horvat', credential: 'HAS Level 3 Coach', background: 'Former Croatian national team coach, specialist in high jump and combined events', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Croatian', 'English', 'German'], instagram: null },
      { name: 'Ivana Perković', credential: 'World Athletics Level 4 Coach', background: 'Former international discus thrower, specialist in rotational throwing events', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Croatian', 'English', 'Italian'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1461896836934-bd45ba0fcfca?w=800', 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800'],
    upcomingCamps: [
      { name: 'Spring High Jump Clinic', startDate: '2026-04-27', endDate: '2026-05-04', price: '€850', level: 'Intermediate' },
      { name: 'Summer Throws Camp', startDate: '2026-07-06', endDate: '2026-07-13', price: '€800', level: 'All Levels' },
      { name: 'Winter Indoor Sprint Week', startDate: '2027-02-01', endDate: '2027-02-08', price: '€900', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Zagreb Sport Hotel', pricePerWeek: 420, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Athletes Residence', pricePerWeek: 250, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Central Zagreb accommodation near training facilities. Croatian cuisine with sports nutrition options.'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-04-20',
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
      schooling: 'Croatian sports school partnerships',
      medicalStaff: true,
      safeguarding: 'HAS child protection framework, background-checked coaches',
      airportPickup: true,
      mealPlan: 'Full board with Mediterranean sports nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Croatian'],
      emergencyProtocol: 'On-site medical room, KBC Zagreb Hospital 10 min'
    }
  },
  {
    id: 'dublin-athletics-academy',
    name: 'Dublin Athletics Academy',
    country: 'Ireland',
    countryFlag: '🇮🇪',
    city: 'Dublin',
    lat: 53.3498,
    lng: -6.2603,
    website: 'https://www.dublinathletics.ie',
    contact: '+353 1 234 5678',
    contactEmail: 'info@dublinathletics.ie',
    description: 'Irish athletics academy based at Morton Stadium in Santry, the historic home of Irish athletics where Roger Bannister\'s sub-4-minute mile was first bettered. Modern facilities with Ireland\'s top coaching talent.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 8, description: 'Dublin Bay beaches at Sandymount and Dollymount within 20 minutes' },
    priceRange: { from: 900, to: 1800, unit: 'week', display: '€900 - €1,800/week' },
    socialMedia: { instagram: '@dublinathletics', facebook: 'https://facebook.com/dublinathletics', twitter: '@dublinathl' },
    climate: 'dublin',
    facilities: 'IAAF-certified 400m track at Morton Stadium, indoor training hall, throws area, jumps runway, Sport Ireland campus access, physiotherapy center',
    courtSurfaces: ['Sprint track', 'Distance track', 'Field events', 'Cross country'],
    programs: [
      { name: 'Middle Distance Excellence', price: '€1,200/week', desc: 'Ireland\'s proud middle distance tradition with structured 800m-5000m training programs' },
      { name: 'Sprint & Hurdles Camp', price: '€1,100/week', desc: 'Speed development and hurdle clearance technique with electronic timing' },
      { name: 'Cross Country & Road Running', price: '€1,000/week', desc: 'Endurance training utilizing Phoenix Park trails and Dublin Bay coastal routes' }
    ],
    coaches: [
      { name: 'Feidhlim Kelly', credential: 'Athletics Ireland Level 3 Coach', background: 'Experienced Irish athletics coach, specialist in middle distance development with multiple national champions', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Irish'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1461896836934-bd45ba0fcfca?w=800', 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800'],
    upcomingCamps: [
      { name: 'Spring Distance Camp', startDate: '2026-04-13', endDate: '2026-04-20', price: '€1,200', level: 'Intermediate' },
      { name: 'Summer Sprint Week', startDate: '2026-07-06', endDate: '2026-07-13', price: '€1,100', level: 'Advanced' },
      { name: 'Autumn Cross Country Clinic', startDate: '2026-10-12', endDate: '2026-10-19', price: '€1,000', level: 'All Levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Santry Sports Hotel', pricePerWeek: 600, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Athletes Guesthouse', pricePerWeek: 380, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Near Morton Stadium in Santry. Irish hospitality with sports nutrition meal plan included.'
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
      minAge: 10,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Irish school partnerships available',
      medicalStaff: true,
      safeguarding: 'Athletics Ireland child welfare policies, Garda-vetted coaches',
      airportPickup: true,
      mealPlan: 'Full board with sports nutrition guidance',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Irish'],
      emergencyProtocol: 'On-site medical room, Beaumont Hospital 10 min'
    }
  },
  {
    id: 'oslo-athletics-center',
    name: 'Oslo Athletics Center',
    country: 'Norway',
    countryFlag: '🇳🇴',
    city: 'Oslo',
    lat: 59.9139,
    lng: 10.7522,
    website: 'https://www.osloathletics.no',
    contact: '+47 22 34 56 78',
    contactEmail: 'info@osloathletics.no',
    description: 'Norwegian athletics center near the legendary Bislett Stadium, home of the Bislett Games Diamond League meeting. Excellent facilities combining Scandinavian sports science with Norway\'s strong distance running and javelin traditions.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 10, description: 'Oslo fjord beaches at Bygdøy within 20 minutes' },
    priceRange: { from: 1100, to: 2200, unit: 'week', display: 'NOK 12,000 - NOK 24,000/week' },
    socialMedia: { instagram: '@osloathletics', facebook: 'https://facebook.com/osloathletics', twitter: '@osloathl' },
    climate: 'oslo',
    facilities: 'IAAF-certified 400m track, Bislett Stadium access for competitions, indoor 200m hall, javelin runway, sports science lab at Norwegian School of Sport Sciences, altitude simulation',
    courtSurfaces: ['Sprint track', 'Distance track', 'Field events', 'Cross country'],
    programs: [
      { name: 'Distance Running Excellence', price: 'NOK 14,000/week', desc: 'Norwegian distance tradition training with forest trail running and structured interval sessions' },
      { name: 'Javelin & Throws Development', price: 'NOK 15,000/week', desc: 'Scandinavian javelin technique with video analysis and strength programming' },
      { name: 'Hurdling & Sprint Camp', price: 'NOK 13,000/week', desc: 'Sprint and hurdle technique with Norwegian School of Sport Sciences biomechanics support' }
    ],
    coaches: [
      { name: 'Erik Solberg', credential: 'NFIF Level 4 Coach', background: 'Former Norwegian national distance coach, developed multiple European Championship finalists', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Norwegian', 'English', 'Swedish'], instagram: null },
      { name: 'Hanne Kristiansen', credential: 'World Athletics Level 4 Coach', background: 'Former international javelin thrower, specialist in throwing event biomechanics', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Norwegian', 'English'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1461896836934-bd45ba0fcfca?w=800', 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800'],
    upcomingCamps: [
      { name: 'Summer Distance Camp', startDate: '2026-06-15', endDate: '2026-06-22', price: 'NOK 14,000', level: 'Intermediate' },
      { name: 'Midsummer Javelin Intensive', startDate: '2026-07-06', endDate: '2026-07-13', price: 'NOK 15,000', level: 'Advanced' },
      { name: 'Spring Sprint & Hurdles', startDate: '2026-05-04', endDate: '2026-05-11', price: 'NOK 13,000', level: 'All Levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Bislett Sport Hotel', pricePerWeek: 800, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Athletes Residence Oslo', pricePerWeek: 500, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Near Bislett Stadium in central Oslo. Scandinavian sports nutrition with full board included.'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-05-01',
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
      schooling: 'Norwegian sports school (toppidrettsgymnas) partnerships',
      medicalStaff: true,
      safeguarding: 'NFIF child protection framework, police-certified coaches',
      airportPickup: true,
      mealPlan: 'Full board with Scandinavian sports nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Norwegian'],
      emergencyProtocol: 'On-site medical room, Ullevål University Hospital 10 min'
    }
  },
  {
    id: 'copenhagen-athletics-academy',
    name: 'Copenhagen Athletics Academy',
    country: 'Denmark',
    countryFlag: '🇩🇰',
    city: 'Copenhagen',
    lat: 55.6761,
    lng: 12.5683,
    website: 'https://www.copenhagenath.dk',
    contact: '+45 33 45 67 89',
    contactEmail: 'info@copenhagenath.dk',
    description: 'Danish athletics development center in Copenhagen, combining Scandinavian sports science with practical coaching. Strong programs in sprints, hurdles and jumps, with access to the Danish Institute for Sports Studies.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 5, description: 'Amager Strandpark beach within 15 minutes' },
    priceRange: { from: 1000, to: 2000, unit: 'week', display: 'DKK 8,000 - DKK 16,000/week' },
    socialMedia: { instagram: '@cphath', facebook: 'https://facebook.com/copenhagenath', twitter: '@cphath' },
    climate: 'copenhagen-athletics',
    facilities: 'IAAF-certified 400m track, indoor athletics hall, jumps complex, sprint training corridor with electronic timing, sports science lab, recovery center',
    courtSurfaces: ['Sprint track', 'Distance track', 'Field events', 'Indoor track'],
    programs: [
      { name: 'Sprint & Hurdles Clinic', price: 'DKK 10,000/week', desc: 'Danish sprint tradition training with biomechanical analysis and reaction time development' },
      { name: 'Jumps Development Camp', price: 'DKK 9,000/week', desc: 'Long jump, triple jump and high jump technique with approach run optimization' },
      { name: 'Multi-Event Training Week', price: 'DKK 11,000/week', desc: 'Heptathlon/decathlon preparation with event-by-event technical coaching' }
    ],
    coaches: [
      { name: 'Mikkel Andersen', credential: 'DAF Level 3 Coach', background: 'Former Danish national team sprint coach, specialist in 100m-200m development', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Danish', 'English', 'Swedish'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1461896836934-bd45ba0fcfca?w=800', 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800'],
    upcomingCamps: [
      { name: 'Spring Sprint Camp', startDate: '2026-04-20', endDate: '2026-04-27', price: 'DKK 10,000', level: 'Intermediate' },
      { name: 'Summer Jumps Intensive', startDate: '2026-07-13', endDate: '2026-07-20', price: 'DKK 9,000', level: 'All Levels' },
      { name: 'Autumn Multi-Event Week', startDate: '2026-10-05', endDate: '2026-10-12', price: 'DKK 11,000', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Copenhagen Sport Hotel', pricePerWeek: 700, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Athletes Kollegium', pricePerWeek: 420, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Central Copenhagen accommodation, bike-friendly city. Nordic sports nutrition with full board included.'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-04-15',
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
      schooling: 'Danish sports school (idrætsefterskole) partnerships',
      medicalStaff: true,
      safeguarding: 'DAF child protection policies, background-checked coaches',
      airportPickup: true,
      mealPlan: 'Full board with Nordic sports nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Danish'],
      emergencyProtocol: 'On-site medical room, Rigshospitalet 15 min'
    }
  },
  {
    id: 'st-moritz-altitude-center',
    name: 'St. Moritz Altitude Training Center',
    country: 'Switzerland',
    countryFlag: '🇨🇭',
    city: 'St. Moritz',
    lat: 46.4908,
    lng: 9.8355,
    website: 'https://www.stmoritzaltitude.ch',
    contact: '+41 81 834 5678',
    contactEmail: 'info@stmoritzaltitude.ch',
    description: 'Elite altitude training center at 1,800m in St. Moritz, Switzerland. World-renowned for endurance sport preparation, used by Olympic champions across multiple disciplines. Pristine Alpine environment with Swiss precision sports science.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby — Alpine mountain location' },
    priceRange: { from: 1400, to: 2500, unit: 'week', display: 'CHF 1,400 - CHF 2,500/week' },
    socialMedia: { instagram: '@stmoritzaltitude', facebook: 'https://facebook.com/stmoritzaltitude', twitter: '@stmoritzalt' },
    climate: 'st-moritz',
    facilities: 'IAAF-certified 400m track at 1,800m altitude, indoor training hall, sports science lab with altitude physiology testing, VO2max lab, recovery center, cross country trail network',
    courtSurfaces: ['Sprint track', 'Distance track', 'Field events', 'Cross country'],
    programs: [
      { name: 'Altitude Endurance Camp', price: 'CHF 2,000/week', desc: 'Live-high train-high endurance program at 1,800m with blood marker monitoring and VO2max testing' },
      { name: 'Pre-Competition Altitude Block', price: 'CHF 2,200/week', desc: 'Structured altitude training block for competition preparation with Swiss sports science support' },
      { name: 'Sprint & Power at Altitude', price: 'CHF 1,800/week', desc: 'Altitude-enhanced sprint and power training exploring reduced air resistance benefits' }
    ],
    coaches: [
      { name: 'Dr. Andreas Keller', credential: 'Swiss Athletics Level 4 Coach', background: 'Sports scientist and coach, specialist in altitude training physiology and endurance performance', atpWta: false, bestRanking: null, rankingNote: null, languages: ['German', 'English', 'French', 'Italian'], instagram: null },
      { name: 'Sandra Müller', credential: 'World Athletics Level 5 Lecturer', background: 'Former Swiss national distance runner, expert in altitude acclimatization and periodization', atpWta: false, bestRanking: null, rankingNote: null, languages: ['German', 'English', 'French'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1461896836934-bd45ba0fcfca?w=800', 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800'],
    upcomingCamps: [
      { name: 'Summer Altitude Block', startDate: '2026-06-22', endDate: '2026-07-06', price: 'CHF 3,800', level: 'Advanced' },
      { name: 'Pre-Season Altitude Camp', startDate: '2026-05-04', endDate: '2026-05-18', price: 'CHF 3,600', level: 'Intermediate' },
      { name: 'Autumn Training Block', startDate: '2026-09-07', endDate: '2026-09-21', price: 'CHF 3,800', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Alpine Sport Hotel', pricePerWeek: 900, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Athletes Chalet', pricePerWeek: 550, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Alpine accommodation in St. Moritz. Swiss cuisine with altitude-adapted sports nutrition included.'
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
      schooling: 'Swiss sports school partnerships available',
      medicalStaff: true,
      safeguarding: 'Swiss Athletics child protection framework, background-checked coaches',
      airportPickup: true,
      mealPlan: 'Full board with altitude-adapted nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'German', 'French', 'Italian'],
      emergencyProtocol: 'On-site medical room, Spital Oberengadin 5 min'
    }
  },
  {
    id: 'innsbruck-athletics-academy',
    name: 'Innsbruck Athletics Academy',
    country: 'Austria',
    countryFlag: '🇦🇹',
    city: 'Innsbruck',
    lat: 47.2692,
    lng: 11.4041,
    website: 'https://www.innsbruckathletics.at',
    contact: '+43 512 345 678',
    contactEmail: 'info@innsbruckathletics.at',
    description: 'Austrian Alpine athletics academy in Innsbruck, combining moderate altitude training (574m) with world-class facilities from the city\'s Olympic heritage. Strong programs in combined events, distance running and throws.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby — Alpine city' },
    priceRange: { from: 900, to: 1900, unit: 'week', display: '€900 - €1,900/week' },
    socialMedia: { instagram: '@innsbruckathletics', facebook: 'https://facebook.com/innsbruckathletics', twitter: '@ibkathl' },
    climate: 'innsbruck-athletics',
    facilities: 'IAAF-certified 400m track, indoor athletics hall, Olympic sports center access, throws area, altitude trail network, sports science lab at University of Innsbruck, recovery center',
    courtSurfaces: ['Sprint track', 'Distance track', 'Field events', 'Mountain trails'],
    programs: [
      { name: 'Combined Events Academy', price: '€1,200/week', desc: 'Austrian decathlon/heptathlon tradition with systematic multi-event development' },
      { name: 'Mountain Endurance Camp', price: '€1,100/week', desc: 'Alpine trail running and endurance development with altitude integration from 574m to 2,000m+' },
      { name: 'Throws & Field Events', price: '€1,000/week', desc: 'Shot put, discus and javelin training with strength programming and video analysis' }
    ],
    coaches: [
      { name: 'Thomas Berger', credential: 'ÖLV Level 4 Coach', background: 'Former Austrian national combined events coach, developed European Championship medalists', atpWta: false, bestRanking: null, rankingNote: null, languages: ['German', 'English', 'Italian'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1461896836934-bd45ba0fcfca?w=800', 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800'],
    upcomingCamps: [
      { name: 'Spring Combined Events', startDate: '2026-04-13', endDate: '2026-04-20', price: '€1,200', level: 'Intermediate' },
      { name: 'Summer Mountain Endurance', startDate: '2026-07-06', endDate: '2026-07-13', price: '€1,100', level: 'All Levels' },
      { name: 'Autumn Throws Clinic', startDate: '2026-10-05', endDate: '2026-10-12', price: '€1,000', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Innsbruck Sport Hotel', pricePerWeek: 600, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Alpine Athletes Residence', pricePerWeek: 380, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Central Innsbruck with Alpine views. Austrian cuisine with sports nutrition, mountain activities available on rest days.'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-04-01',
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
      schooling: 'Austrian sports school (Sportgymnasium) partnerships',
      medicalStaff: true,
      safeguarding: 'ÖLV child protection framework, background-checked coaches',
      airportPickup: true,
      mealPlan: 'Full board with Alpine sports nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'German'],
      emergencyProtocol: 'On-site medical room, Universitätsklinik Innsbruck 10 min'
    }
  },
  {
    id: 'sport-ireland-athletics-abbotstown',
    name: 'Sport Ireland Athletics Academy',
    country: 'Ireland',
    countryFlag: '🇮🇪',
    city: 'Dublin',
    lat: 53.3867,
    lng: -6.3800,
    website: 'https://www.athleticsireland.ie',
    contact: '+353 1 886 9933',
    contactEmail: 'academy@athleticsireland.ie',
    description: 'The official Sport Ireland athletics academy at the National Sports Campus in Abbotstown, Dublin. World-class facilities for all athletics disciplines with a focus on developing Ireland\'s next generation of international athletes.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 12, description: 'Dublin Bay coast at Dollymount Strand, 12 km east' },
    priceRange: { from: 800, to: 1800, unit: 'week', display: '€800 - €1,800/week' },
    socialMedia: { instagram: '@athleticsireland', facebook: 'https://facebook.com/athleticsireland', twitter: '@AthsIreland' },
    climate: 'dublin',
    facilities: 'IAAF-certified 400m outdoor track (8 lanes), 200m indoor track at Sport Ireland National Indoor Arena, throws area, jump pits, biomechanics lab, strength and conditioning centre',
    courtSurfaces: ['Sprint track', 'Distance track', 'Field events', 'Cross country'],
    programs: [
      { name: 'Sprint & Hurdles Academy', price: '€1,200/week', desc: 'Block start technique, speed development and hurdle drills with video analysis and biomechanics' },
      { name: 'Endurance Training Camp', price: '€900/week', desc: 'Middle and long distance training on Dublin\'s parks and Phoenix Park trails' },
      { name: 'Field Events Specialist', price: '€1,000/week', desc: 'Throws, jumps and combined events training with dedicated field event coaching staff' }
    ],
    coaches: [
      { name: 'Feidhlim Kelly', credential: 'Athletics Ireland Level 3 Coach', background: 'Irish national team sprints coach, developed European Championship representatives', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Irish'], instagram: null },
      { name: 'Teresa McDaid', credential: 'World Athletics Level 5 Lecturer', background: 'Veteran Irish athletics coach, specialist in endurance events and women\'s athletics development', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Irish'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1461896836934-bd45ba0fcfca?w=800', 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800'],
    upcomingCamps: [
      { name: 'Summer Sprint Camp', startDate: '2026-07-06', endDate: '2026-07-13', price: '€1,200', level: 'Advanced' },
      { name: 'Spring Distance Camp', startDate: '2026-04-13', endDate: '2026-04-20', price: '€900', level: 'Intermediate' },
      { name: 'Autumn Field Events Clinic', startDate: '2026-10-05', endDate: '2026-10-12', price: '€1,000', level: 'All Levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Sport Ireland Campus Hotel', pricePerWeek: 500, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Athletes Residence', pricePerWeek: 320, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'On-site accommodation at Sport Ireland National Sports Campus. Irish cuisine with sports nutrition meal plans.'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-06-01',
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
      schooling: 'Partnership with local schools and online support',
      medicalStaff: true,
      safeguarding: 'Athletics Ireland child protection framework, Garda-vetted coaches',
      airportPickup: true,
      mealPlan: 'Full board with athlete-specific nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Irish'],
      emergencyProtocol: 'On-site medical room, Connolly Hospital 5 min away'
    }
  },
  {
    id: 'serbian-athletics-centre',
    name: 'Serbian Athletics Training Centre',
    country: 'Serbia',
    countryFlag: '🇷🇸',
    city: 'Belgrade',
    lat: 44.7866,
    lng: 20.4489,
    website: 'https://www.serbianathletics.rs',
    contact: '+381 11 567 8901',
    contactEmail: 'info@serbianathletics.rs',
    description: 'Serbia\'s national athletics training centre in Belgrade, training ground of world-class athletes like Ivana Španović. Elite track and field coaching with modern facilities.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby, Ada Ciganlija lake for outdoor training' },
    priceRange: { from: 500, to: 1200, unit: 'week', display: '€500 - €1,200/week' },
    socialMedia: { instagram: '@serbianathletics', facebook: 'https://facebook.com/serbianathletics', twitter: '@serbianathletics' },
    climate: 'belgrade',
    facilities: 'IAAF certified 400m track, indoor athletics hall, long jump and throwing areas, high-performance gym, biomechanics lab, recovery centre',
    courtSurfaces: ['400m track', 'Indoor track', 'Throwing area', 'Jumping area'],
    programs: [
      { name: 'Serbian Elite Athletics', price: '€1,000/week', desc: 'Elite training following the methodology that produced Ivana Španović and other Serbian champions' },
      { name: 'Youth Athletics Development', price: '€500/week', desc: 'Multi-event athletics development for young athletes' }
    ],
    coaches: [
      { name: 'Milan Todorović', credential: 'World Athletics Level 5 Coach', background: 'Former Serbian national team coach and developer of European Championship medallists', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Serbian'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800'],
    upcomingCamps: [
      { name: 'Belgrade Athletics Summer Camp', startDate: '2026-07-06', endDate: '2026-07-13', price: '€1,000', level: 'All levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Belgrade Athletics Hotel', pricePerWeek: 280, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Hotel near the national athletics stadium with direct transport links'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-06-01',
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
      schooling: 'Serbian sports school partnerships',
      medicalStaff: true,
      safeguarding: 'Serbian Athletics Federation child protection framework',
      airportPickup: true,
      mealPlan: 'Full board with Serbian cuisine and athlete nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Serbian', 'English'],
      emergencyProtocol: 'On-site medical room, Clinical Centre of Serbia 10 minutes'
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
  gothenburg: { spring: { tempHigh: 12, tempLow: 3, rainDays: 9, sunshine: 6 }, summer: { tempHigh: 22, tempLow: 13, rainDays: 9, sunshine: 8 }, autumn: { tempHigh: 12, tempLow: 5, rainDays: 12, sunshine: 3 }, winter: { tempHigh: 4, tempLow: -2, rainDays: 13, sunshine: 1 } },
  papendal: { spring: { tempHigh: 15, tempLow: 5, rainDays: 9, sunshine: 6 }, summer: { tempHigh: 24, tempLow: 13, rainDays: 8, sunshine: 7 }, autumn: { tempHigh: 14, tempLow: 6, rainDays: 10, sunshine: 4 }, winter: { tempHigh: 6, tempLow: 0, rainDays: 11, sunshine: 2 } },
  louvain: { spring: { tempHigh: 14, tempLow: 5, rainDays: 10, sunshine: 5 }, summer: { tempHigh: 23, tempLow: 13, rainDays: 9, sunshine: 7 }, autumn: { tempHigh: 14, tempLow: 7, rainDays: 11, sunshine: 4 }, winter: { tempHigh: 6, tempLow: 1, rainDays: 12, sunshine: 2 } },
  warsaw: { spring: { tempHigh: 15, tempLow: 4, rainDays: 8, sunshine: 6 }, summer: { tempHigh: 25, tempLow: 14, rainDays: 9, sunshine: 8 }, autumn: { tempHigh: 13, tempLow: 5, rainDays: 8, sunshine: 4 }, winter: { tempHigh: 2, tempLow: -4, rainDays: 9, sunshine: 1 } },
  prague: { spring: { tempHigh: 15, tempLow: 5, rainDays: 8, sunshine: 6 }, summer: { tempHigh: 25, tempLow: 14, rainDays: 9, sunshine: 8 }, autumn: { tempHigh: 13, tempLow: 5, rainDays: 7, sunshine: 4 }, winter: { tempHigh: 3, tempLow: -3, rainDays: 8, sunshine: 2 } },
  budapest: { spring: { tempHigh: 17, tempLow: 7, rainDays: 8, sunshine: 7 }, summer: { tempHigh: 28, tempLow: 16, rainDays: 7, sunshine: 9 }, autumn: { tempHigh: 16, tempLow: 7, rainDays: 7, sunshine: 5 }, winter: { tempHigh: 4, tempLow: -2, rainDays: 8, sunshine: 2 } },
  bucharest: { spring: { tempHigh: 18, tempLow: 6, rainDays: 9, sunshine: 7 }, summer: { tempHigh: 30, tempLow: 17, rainDays: 7, sunshine: 9 }, autumn: { tempHigh: 17, tempLow: 7, rainDays: 6, sunshine: 5 }, winter: { tempHigh: 4, tempLow: -3, rainDays: 7, sunshine: 2 } },
  zagreb: { spring: { tempHigh: 17, tempLow: 6, rainDays: 9, sunshine: 6 }, summer: { tempHigh: 27, tempLow: 16, rainDays: 8, sunshine: 8 }, autumn: { tempHigh: 16, tempLow: 7, rainDays: 9, sunshine: 4 }, winter: { tempHigh: 5, tempLow: -1, rainDays: 9, sunshine: 2 } },
  dublin: { spring: { tempHigh: 12, tempLow: 5, rainDays: 11, sunshine: 5 }, summer: { tempHigh: 19, tempLow: 11, rainDays: 10, sunshine: 6 }, autumn: { tempHigh: 13, tempLow: 7, rainDays: 12, sunshine: 3 }, winter: { tempHigh: 8, tempLow: 3, rainDays: 13, sunshine: 2 } },
  oslo: { spring: { tempHigh: 11, tempLow: 2, rainDays: 8, sunshine: 6 }, summer: { tempHigh: 22, tempLow: 13, rainDays: 9, sunshine: 8 }, autumn: { tempHigh: 10, tempLow: 3, rainDays: 10, sunshine: 3 }, winter: { tempHigh: 0, tempLow: -6, rainDays: 9, sunshine: 1 } },
  'copenhagen-athletics': { spring: { tempHigh: 12, tempLow: 4, rainDays: 8, sunshine: 6 }, summer: { tempHigh: 22, tempLow: 14, rainDays: 9, sunshine: 8 }, autumn: { tempHigh: 12, tempLow: 6, rainDays: 11, sunshine: 3 }, winter: { tempHigh: 4, tempLow: -1, rainDays: 11, sunshine: 1 } },
  'st-moritz': { spring: { tempHigh: 8, tempLow: -2, rainDays: 8, sunshine: 6 }, summer: { tempHigh: 18, tempLow: 8, rainDays: 10, sunshine: 8 }, autumn: { tempHigh: 9, tempLow: 0, rainDays: 7, sunshine: 5 }, winter: { tempHigh: 0, tempLow: -10, rainDays: 6, sunshine: 4 } },
  'innsbruck-athletics': { spring: { tempHigh: 15, tempLow: 4, rainDays: 9, sunshine: 6 }, summer: { tempHigh: 25, tempLow: 13, rainDays: 11, sunshine: 7 }, autumn: { tempHigh: 14, tempLow: 4, rainDays: 8, sunshine: 5 }, winter: { tempHigh: 4, tempLow: -4, rainDays: 7, sunshine: 3 } },
  belgrade: { spring: { tempHigh: 19, tempLow: 7, rainDays: 9, sunshine: 7 }, summer: { tempHigh: 28, tempLow: 16, rainDays: 7, sunshine: 9 }, autumn: { tempHigh: 17, tempLow: 7, rainDays: 8, sunshine: 5 }, winter: { tempHigh: 4, tempLow: -2, rainDays: 8, sunshine: 2 } }
};

const NEWS_ITEMS = [
  { date: '2025-06-01', title: 'Barcelona Opens New Indoor Track', summary: 'Barcelona Athletics Center unveils renovated 200m indoor track with state-of-the-art Mondo surface and integrated timing systems.' },
  { date: '2025-05-15', title: 'Font Romeu Altitude Camps Expanded', summary: 'Due to increasing demand, Font Romeu adds extra summer altitude training camps with extended capacity for 2025 season.' },
  { date: '2025-05-01', title: 'Loughborough Biomechanics Lab Upgrade', summary: 'Loughborough Athletics Academy installs new Vicon motion capture system for enhanced biomechanical analysis of all athletics disciplines.' },
  { date: '2025-04-20', title: 'Athens Olympic Facility Renovation Complete', summary: 'Athens Olympic Athletics Academy completes full renovation of 2004 Olympic track facilities with new surface and equipment.' },
  { date: '2025-04-10', title: 'Kuortane Javelin Program Goes International', summary: 'Finnish javelin excellence now available to international athletes with dedicated English-language javelin training camps.' }
];

const COUNTRIES = ['Spain', 'Portugal', 'France', 'Germany', 'UK', 'Finland', 'Turkey', 'Greece', 'Italy', 'Sweden', 'Netherlands', 'Belgium', 'Poland', 'Czech Republic', 'Hungary', 'Romania', 'Croatia', 'Ireland', 'Norway', 'Denmark', 'Switzerland', 'Austria', 'Serbia'];
