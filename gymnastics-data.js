const SPORT_TYPE = 'gymnastics';

const ACADEMIES = [
  {
    id: 'bucharest-gymnastics-academy',
    name: 'Bucharest Gymnastics Academy',
    country: 'Romania',
    countryFlag: '🇷🇴',
    city: 'Bucharest',
    lat: 44.4268,
    lng: 26.1025,
    website: 'https://www.bucharestgymnastics.ro',
    contact: '+40 21 345 6789',
    contactEmail: 'info@bucharestgymnastics.ro',
    description: 'Romania\'s premier gymnastics academy in Bucharest, continuing the legendary tradition that produced Nadia Comăneci and generations of Olympic champions.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby' },
    priceRange: { from: 500, to: 1200, unit: 'week', display: '€500 - €1,200/week' },
    socialMedia: { instagram: '@bucharestgym', facebook: 'https://facebook.com/bucharestgym', twitter: '@bucharestgym' },
    climate: 'bucharest',
    facilities: 'Sprung floor, vault runway, beam, bars, rings, foam pit, trampoline, dance studio, Pilates room',
    courtSurfaces: ['Artistic gymnastics', 'Rhythmic gymnastics', 'Trampoline', 'Tumbling'],
    programs: [
      { name: 'Romanian Artistic Excellence', price: '€800/week', desc: 'Elite artistic gymnastics training in the Romanian tradition' },
      { name: 'Junior Development Path', price: '€550/week', desc: 'Structured progression for young gymnasts aged 6-12' },
      { name: 'Rhythmic Gymnastics Camp', price: '€700/week', desc: 'Apparatus work and choreography for rhythmic gymnasts' }
    ],
    coaches: [
      { name: 'Elena Ionescu', credential: 'FIG Brevet Judge & Coach', background: 'Former Romanian national team gymnast and Olympic team coach with 20 years experience', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Romanian', 'French'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=800'],
    upcomingCamps: [
      { name: 'Bucharest Summer Gymnastics', startDate: '2025-07-01', endDate: '2025-07-08', price: '€800', level: 'Intermediate' }
    ],
    accommodation: {
      types: [{ type: 'dormitory', label: 'Academy Dormitory', pricePerWeek: 280, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'On-campus dormitory with full meal service and recovery facilities'
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
      minAge: 6,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Romanian sports school integration with full academic programme',
      medicalStaff: true,
      safeguarding: 'Romanian Gymnastics Federation child protection standards',
      airportPickup: true,
      mealPlan: 'Full board with sports nutrition and dietary accommodations',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Romanian'],
      emergencyProtocol: 'On-site physiotherapy and medical team with hospital partnership'
    }
  },
  {
    id: 'deva-gymnastics-centre',
    name: 'Deva Gymnastics Centre',
    country: 'Romania',
    countryFlag: '🇷🇴',
    city: 'Deva',
    lat: 45.8833,
    lng: 22.9078,
    website: 'https://www.devagymnastics.ro',
    contact: '+40 254 123 456',
    contactEmail: 'info@devagymnastics.ro',
    description: 'The legendary Deva training centre where Romanian gymnastics greatness was forged, still producing world-class gymnasts today.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby, mountain setting' },
    priceRange: { from: 450, to: 1000, unit: 'week', display: '€450 - €1,000/week' },
    socialMedia: { instagram: '@devagym', facebook: 'https://facebook.com/devagym', twitter: '@devagym' },
    climate: 'deva',
    facilities: 'Sprung floor, vault runway, beam, bars, rings, foam pit, trampoline, dance studio, Pilates room',
    courtSurfaces: ['Artistic gymnastics', 'Tumbling'],
    programs: [
      { name: 'Deva Legacy Programme', price: '€700/week', desc: 'Train at the historic centre that shaped Olympic champions' },
      { name: 'Beam & Bars Specialist', price: '€600/week', desc: 'Apparatus-specific intensive for beam and uneven bars' }
    ],
    coaches: [
      { name: 'Cristina Moldovan', credential: 'FRG Master Coach', background: 'Former Deva national training centre coach with 30 years developing Olympic talent', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Romanian'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800'],
    upcomingCamps: [
      { name: 'Deva Mountain Gymnastics Camp', startDate: '2025-07-14', endDate: '2025-07-21', price: '€700', level: 'Advanced' }
    ],
    accommodation: {
      types: [{ type: 'dormitory', label: 'Training Centre Dormitory', pricePerWeek: 220, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Integrated dormitory within the training centre complex'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-15',
      spotsLeft: 16,
      responseTime: '48h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 6,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Dedicated sports school on campus',
      medicalStaff: true,
      safeguarding: 'Comprehensive child protection with Romanian federation oversight',
      airportPickup: true,
      mealPlan: 'Full board with calorie-controlled sports nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Romanian'],
      emergencyProtocol: 'On-site medical facility with ambulance service available'
    }
  },
  {
    id: 'paris-insep-gymnastics',
    name: 'Paris INSEP Gymnastics',
    country: 'France',
    countryFlag: '🇫🇷',
    city: 'Paris',
    lat: 48.8480,
    lng: 2.4530,
    website: 'https://www.insepgymnastics.fr',
    contact: '+33 1 41 74 4000',
    contactEmail: 'info@insepgymnastics.fr',
    description: 'France\'s elite national training institute INSEP, offering world-class gymnastics facilities and coaching for competitive athletes.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby' },
    priceRange: { from: 900, to: 2000, unit: 'week', display: '€900 - €2,000/week' },
    socialMedia: { instagram: '@insepgym', facebook: 'https://facebook.com/insepgym', twitter: '@insepgym' },
    climate: 'paris',
    facilities: 'Sprung floor, vault runway, beam, bars, rings, foam pit, trampoline, dance studio, Pilates room',
    courtSurfaces: ['Artistic gymnastics', 'Rhythmic gymnastics', 'Trampoline', 'Tumbling'],
    programs: [
      { name: 'INSEP Elite Artistic', price: '€1500/week', desc: 'National-level artistic gymnastics training at France\'s premier sports institute' },
      { name: 'Rhythmic Excellence', price: '€1200/week', desc: 'High-level rhythmic gymnastics with French national coaches' },
      { name: 'Trampoline & Tumbling', price: '€1000/week', desc: 'Specialised trampoline and tumbling power training' }
    ],
    coaches: [
      { name: 'Sophie Beaumont', credential: 'FFG National Coach', background: 'Head of French gymnastics development with Olympic Games coaching experience', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'French'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800'],
    upcomingCamps: [
      { name: 'INSEP Summer Intensive', startDate: '2025-07-01', endDate: '2025-07-08', price: '€1500', level: 'Advanced' }
    ],
    accommodation: {
      types: [{ type: 'residence', label: 'INSEP Athlete Residence', pricePerWeek: 550, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'On-campus athlete residence with full sports science support'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-01',
      spotsLeft: 12,
      responseTime: '48h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 8,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'INSEP integrated school for student athletes',
      medicalStaff: true,
      safeguarding: 'French Ministry of Sport safeguarding framework',
      airportPickup: true,
      mealPlan: 'Full board with elite sports nutrition programme',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'French'],
      emergencyProtocol: '24/7 INSEP medical centre with full emergency facilities'
    }
  },
  {
    id: 'stuttgart-gymnastics-akademie',
    name: 'Stuttgart Gymnastics Akademie',
    country: 'Germany',
    countryFlag: '🇩🇪',
    city: 'Stuttgart',
    lat: 48.7758,
    lng: 9.1829,
    website: 'https://www.stuttgartgymnastics.de',
    contact: '+49 711 555 0100',
    contactEmail: 'info@stuttgartgymnastics.de',
    description: 'Germany\'s top gymnastics training centre in Stuttgart, host city of the Gymnastics World Championships and hub of German artistic gymnastics.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby' },
    priceRange: { from: 800, to: 1700, unit: 'week', display: '€800 - €1,700/week' },
    socialMedia: { instagram: '@stuttgartgym', facebook: 'https://facebook.com/stuttgartgym', twitter: '@stuttgartgym' },
    climate: 'stuttgart',
    facilities: 'Sprung floor, vault runway, beam, bars, rings, foam pit, trampoline, dance studio, Pilates room',
    courtSurfaces: ['Artistic gymnastics', 'Rhythmic gymnastics', 'Trampoline', 'Tumbling'],
    programs: [
      { name: 'German Artistic Excellence', price: '€1100/week', desc: 'Comprehensive artistic gymnastics with German precision coaching' },
      { name: 'Men\'s Apparatus Specialist', price: '€950/week', desc: 'Rings, pommel horse, and parallel bars intensive for male gymnasts' }
    ],
    coaches: [
      { name: 'Michael Schneider', credential: 'DTB National Coach', background: 'Former German national team gymnast and World Championship team coach', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'German'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=800'],
    upcomingCamps: [
      { name: 'Stuttgart Summer Gym Camp', startDate: '2025-07-07', endDate: '2025-07-14', price: '€1100', level: 'Intermediate' }
    ],
    accommodation: {
      types: [{ type: 'hotel', label: 'Stuttgart Sport Hotel', pricePerWeek: 500, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Modern hotel near the Porsche Arena with S-Bahn access'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-01',
      spotsLeft: 18,
      responseTime: '48h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 6,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'German sports school partnership for academic continuity',
      medicalStaff: true,
      safeguarding: 'DTB and DOSB child protection framework',
      airportPickup: true,
      mealPlan: 'Full board with German sports nutrition programme',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'German'],
      emergencyProtocol: 'On-site physiotherapy and Klinikum Stuttgart partnership'
    }
  },
  {
    id: 'london-gymnastics-centre',
    name: 'London Gymnastics Centre',
    country: 'UK',
    countryFlag: '🇬🇧',
    city: 'London',
    lat: 51.5500,
    lng: -0.0160,
    website: 'https://www.londongymnastics.co.uk',
    contact: '+44 20 8536 1234',
    contactEmail: 'info@londongymnastics.co.uk',
    description: 'A world-class gymnastics facility in London\'s Olympic Park, legacy of the 2012 Games and home to British Gymnastics programmes.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby' },
    priceRange: { from: 900, to: 2000, unit: 'week', display: '£900 - £2,000/week' },
    socialMedia: { instagram: '@londongym', facebook: 'https://facebook.com/londongym', twitter: '@londongym' },
    climate: 'london',
    facilities: 'Sprung floor, vault runway, beam, bars, rings, foam pit, trampoline, dance studio, Pilates room',
    courtSurfaces: ['Artistic gymnastics', 'Rhythmic gymnastics', 'Trampoline', 'Tumbling'],
    programs: [
      { name: 'Olympic Legacy Camp', price: '£1300/week', desc: 'Train in the 2012 Olympic facilities with British Gymnastics coaches' },
      { name: 'Trampoline Intensive', price: '£1000/week', desc: 'Elite trampoline training in one of the UK\'s best-equipped facilities' }
    ],
    coaches: [
      { name: 'Sarah Thompson', credential: 'BG Level 5 Coach', background: 'Former British national team gymnast and Olympic Games team manager', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1551524559-8af4e6624178?w=800'],
    upcomingCamps: [
      { name: 'London Olympic Park Camp', startDate: '2025-07-01', endDate: '2025-07-08', price: '£1300', level: 'All levels' }
    ],
    accommodation: {
      types: [{ type: 'hotel', label: 'Olympic Park Hotel', pricePerWeek: 650, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Modern hotel in the Queen Elizabeth Olympic Park'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-01',
      spotsLeft: 15,
      responseTime: '48h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 6,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'UK school partnerships for term-time students',
      medicalStaff: true,
      safeguarding: 'British Gymnastics safeguarding and DBS-checked staff',
      airportPickup: true,
      mealPlan: 'Full board with sports nutrition guidance',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English'],
      emergencyProtocol: '24/7 medical cover with Homerton Hospital nearby'
    }
  },
  {
    id: 'lilleshall-gymnastics-academy',
    name: 'Lilleshall Gymnastics Academy',
    country: 'UK',
    countryFlag: '🇬🇧',
    city: 'Lilleshall',
    lat: 52.7260,
    lng: -2.3870,
    website: 'https://www.lilleshallgym.co.uk',
    contact: '+44 1onal 603 1234',
    contactEmail: 'info@lilleshallgym.co.uk',
    description: 'The historic Lilleshall National Sports Centre, home to British Gymnastics\' national training programme in the Shropshire countryside.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby, rural setting' },
    priceRange: { from: 750, to: 1600, unit: 'week', display: '£750 - £1,600/week' },
    socialMedia: { instagram: '@lilleshallgym', facebook: 'https://facebook.com/lilleshallgym', twitter: '@lilleshallgym' },
    climate: 'lilleshall',
    facilities: 'Sprung floor, vault runway, beam, bars, rings, foam pit, trampoline, dance studio, Pilates room',
    courtSurfaces: ['Artistic gymnastics', 'Trampoline', 'Tumbling'],
    programs: [
      { name: 'National Training Programme', price: '£1000/week', desc: 'British Gymnastics national pathway training in world-class facilities' },
      { name: 'Artistic Foundation', price: '£800/week', desc: 'Core skills development for aspiring competitive gymnasts' }
    ],
    coaches: [
      { name: 'David Williams', credential: 'BG Level 5 Coach', background: 'Head coach at Lilleshall National Centre with Commonwealth Games experience', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Welsh'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800'],
    upcomingCamps: [
      { name: 'Lilleshall Summer Camp', startDate: '2025-07-14', endDate: '2025-07-21', price: '£1000', level: 'Intermediate' }
    ],
    accommodation: {
      types: [{ type: 'residence', label: 'National Centre Residence', pricePerWeek: 450, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'On-site accommodation at the National Sports Centre'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-15',
      spotsLeft: 20,
      responseTime: '48h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 6,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Integrated schooling for national programme athletes',
      medicalStaff: true,
      safeguarding: 'Full British Gymnastics safeguarding with DBS checks',
      airportPickup: true,
      mealPlan: 'Full board with athlete nutrition programme',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English'],
      emergencyProtocol: 'On-site medical centre with Princess Royal Hospital nearby'
    }
  },
  {
    id: 'milan-gymnastics-academy',
    name: 'Milan Gymnastics Academy',
    country: 'Italy',
    countryFlag: '🇮🇹',
    city: 'Milan',
    lat: 45.4642,
    lng: 9.1900,
    website: 'https://www.milangym.it',
    contact: '+39 02 456 7890',
    contactEmail: 'info@milangym.it',
    description: 'A leading Italian gymnastics academy in Milan, blending artistic excellence with Italian elegance and style in rhythmic and artistic disciplines.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby' },
    priceRange: { from: 750, to: 1600, unit: 'week', display: '€750 - €1,600/week' },
    socialMedia: { instagram: '@milangym', facebook: 'https://facebook.com/milangym', twitter: '@milangym' },
    climate: 'milan',
    facilities: 'Sprung floor, vault runway, beam, bars, rings, foam pit, trampoline, dance studio, Pilates room',
    courtSurfaces: ['Artistic gymnastics', 'Rhythmic gymnastics', 'Trampoline'],
    programs: [
      { name: 'Italian Rhythmic Excellence', price: '€1000/week', desc: 'World-class rhythmic gymnastics training in Italy\'s fashion capital' },
      { name: 'Artistic All-Around', price: '€900/week', desc: 'Complete artistic gymnastics training across all apparatus' }
    ],
    coaches: [
      { name: 'Francesca Moretti', credential: 'FGI National Coach', background: 'Former Italian rhythmic gymnastics national team member and European medallist', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Italian'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800'],
    upcomingCamps: [
      { name: 'Milan Rhythmic Camp', startDate: '2025-07-07', endDate: '2025-07-14', price: '€1000', level: 'All levels' }
    ],
    accommodation: {
      types: [{ type: 'hotel', label: 'Milan Fashion District Hotel', pricePerWeek: 550, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Stylish hotel in central Milan with metro access'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-01',
      spotsLeft: 16,
      responseTime: '48h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 6,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Italian school partnership for term-time athletes',
      medicalStaff: true,
      safeguarding: 'Italian Gymnastics Federation child protection compliance',
      airportPickup: true,
      mealPlan: 'Full board with Italian cuisine and dietary accommodations',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Italian'],
      emergencyProtocol: 'On-site physiotherapy with Ospedale Niguarda partnership'
    }
  },
  {
    id: 'barcelona-gymnastics-escola',
    name: 'Barcelona Gymnastics Escola',
    country: 'Spain',
    countryFlag: '🇪🇸',
    city: 'Barcelona',
    lat: 41.3851,
    lng: 2.1734,
    website: 'https://www.barcelonagym.es',
    contact: '+34 93 456 7890',
    contactEmail: 'info@barcelonagym.es',
    description: 'A vibrant gymnastics school in Barcelona offering artistic and rhythmic gymnastics training with a Mediterranean flair.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 4, description: 'Barceloneta Beach 4 km away' },
    priceRange: { from: 700, to: 1500, unit: 'week', display: '€700 - €1,500/week' },
    socialMedia: { instagram: '@bcngym', facebook: 'https://facebook.com/bcngym', twitter: '@bcngym' },
    climate: 'barcelona',
    facilities: 'Sprung floor, vault runway, beam, bars, rings, foam pit, trampoline, dance studio, Pilates room',
    courtSurfaces: ['Artistic gymnastics', 'Rhythmic gymnastics', 'Trampoline', 'Tumbling'],
    programs: [
      { name: 'Spanish Artistic Camp', price: '€900/week', desc: 'Artistic gymnastics in Barcelona\'s world-class training facility' },
      { name: 'Rhythmic & Dance Fusion', price: '€800/week', desc: 'Rhythmic gymnastics combined with contemporary dance training' }
    ],
    coaches: [
      { name: 'María López', credential: 'RFEG National Coach', background: 'Former Spanish rhythmic gymnastics team member and European Championship participant', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Spanish', 'Catalan'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1461896836934-bd45ba8fcb25?w=800'],
    upcomingCamps: [
      { name: 'Barcelona Summer Gym', startDate: '2025-07-01', endDate: '2025-07-08', price: '€900', level: 'Intermediate' }
    ],
    accommodation: {
      types: [{ type: 'hotel', label: 'Barcelona Beach Hotel', pricePerWeek: 500, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Modern hotel near the beach with metro to training venue'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-01',
      spotsLeft: 20,
      responseTime: '48h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 6,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Spanish and Catalan school enrolment support',
      medicalStaff: true,
      safeguarding: 'RFEG safeguarding standards with trained welfare officers',
      airportPickup: true,
      mealPlan: 'Full board with Mediterranean sports nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Spanish', 'Catalan'],
      emergencyProtocol: 'On-site physio with Hospital del Mar emergency partnership'
    }
  },
  {
    id: 'amsterdam-gymnastics-centre',
    name: 'Amsterdam Gymnastics Centre',
    country: 'Netherlands',
    countryFlag: '🇳🇱',
    city: 'Amsterdam',
    lat: 52.3676,
    lng: 4.9041,
    website: 'https://www.amsterdamgym.nl',
    contact: '+31 20 123 4567',
    contactEmail: 'info@amsterdamgym.nl',
    description: 'A modern gymnastics centre in Amsterdam offering innovative training methods and strong artistic and trampoline programmes.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 25, description: 'Zandvoort Beach 25 km away' },
    priceRange: { from: 800, to: 1700, unit: 'week', display: '€800 - €1,700/week' },
    socialMedia: { instagram: '@amsterdamgym', facebook: 'https://facebook.com/amsterdamgym', twitter: '@amsterdamgym' },
    climate: 'amsterdam',
    facilities: 'Sprung floor, vault runway, beam, bars, rings, foam pit, trampoline, dance studio, Pilates room',
    courtSurfaces: ['Artistic gymnastics', 'Trampoline', 'Tumbling'],
    programs: [
      { name: 'Dutch Gymnastics Innovation', price: '€1000/week', desc: 'Modern training methods with biomechanical analysis and progressive coaching' },
      { name: 'Trampoline Power Programme', price: '€900/week', desc: 'Advanced trampoline skills and double mini-tramp training' }
    ],
    coaches: [
      { name: 'Jan de Vries', credential: 'KNGU Level 4 Coach', background: 'Former Dutch national team coach and FIG technical committee member', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Dutch', 'German'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?w=800'],
    upcomingCamps: [
      { name: 'Amsterdam Gym Week', startDate: '2025-07-14', endDate: '2025-07-21', price: '€1000', level: 'All levels' }
    ],
    accommodation: {
      types: [{ type: 'hotel', label: 'Canal District Hotel', pricePerWeek: 600, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Hotel in Amsterdam\'s charming canal district'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-01',
      spotsLeft: 18,
      responseTime: '48h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 6,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Dutch school integration and English-medium tutoring',
      medicalStaff: true,
      safeguarding: 'KNGU safeguarding framework with VOG-checked staff',
      airportPickup: true,
      mealPlan: 'Full board with Dutch and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Dutch'],
      emergencyProtocol: 'On-site first aid with AMC Academic Hospital nearby'
    }
  },
  {
    id: 'brussels-gymnastics-academy',
    name: 'Brussels Gymnastics Academy',
    country: 'Belgium',
    countryFlag: '🇧🇪',
    city: 'Brussels',
    lat: 50.8503,
    lng: 4.3517,
    website: 'https://www.brusselsgym.be',
    contact: '+32 2 123 4567',
    contactEmail: 'info@brusselsgym.be',
    description: 'Belgium\'s top gymnastics academy in Brussels, offering bilingual coaching and strong links to European gymnastics competitions.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby, Belgian coast 120 km away' },
    priceRange: { from: 750, to: 1600, unit: 'week', display: '€750 - €1,600/week' },
    socialMedia: { instagram: '@brusselsgym', facebook: 'https://facebook.com/brusselsgym', twitter: '@brusselsgym' },
    climate: 'brussels',
    facilities: 'Sprung floor, vault runway, beam, bars, rings, foam pit, trampoline, dance studio, Pilates room',
    courtSurfaces: ['Artistic gymnastics', 'Rhythmic gymnastics', 'Trampoline'],
    programs: [
      { name: 'Belgian Artistic Programme', price: '€900/week', desc: 'Bilingual artistic gymnastics training with European competition focus' },
      { name: 'Rhythmic Discovery', price: '€800/week', desc: 'Introduction to rhythmic gymnastics apparatus and choreography' }
    ],
    coaches: [
      { name: 'Hélène Dubois', credential: 'GymFed National Coach', background: 'Former Belgian national team rhythmic gymnast and European Championship participant', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'French', 'Dutch'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=800'],
    upcomingCamps: [
      { name: 'Brussels Summer Gym', startDate: '2025-07-07', endDate: '2025-07-14', price: '€900', level: 'Beginner' }
    ],
    accommodation: {
      types: [{ type: 'hotel', label: 'Brussels European Quarter Hotel', pricePerWeek: 500, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Hotel in the European Quarter with excellent transport links'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-15',
      spotsLeft: 22,
      responseTime: '48h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 6,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Belgian bilingual school partnership for long-term athletes',
      medicalStaff: true,
      safeguarding: 'Belgian Olympic Committee safeguarding framework',
      airportPickup: true,
      mealPlan: 'Full board with Belgian and European cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'French', 'Dutch'],
      emergencyProtocol: 'On-site medical support with UZ Brussel hospital nearby'
    }
  },
  {
    id: 'zurich-gymnastics-school',
    name: 'Zurich Gymnastics School',
    country: 'Switzerland',
    countryFlag: '🇨🇭',
    city: 'Zurich',
    lat: 47.3769,
    lng: 8.5417,
    website: 'https://www.zurichgym.ch',
    contact: '+41 44 123 4567',
    contactEmail: 'info@zurichgym.ch',
    description: 'A premium Swiss gymnastics school in Zurich offering precision coaching and excellent facilities in the heart of Europe.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby, Lake Zurich nearby' },
    priceRange: { from: 1000, to: 2200, unit: 'week', display: 'CHF 1,000 - CHF 2,200/week' },
    socialMedia: { instagram: '@zurichgym', facebook: 'https://facebook.com/zurichgym', twitter: '@zurichgym' },
    climate: 'zurich',
    facilities: 'Sprung floor, vault runway, beam, bars, rings, foam pit, trampoline, dance studio, Pilates room',
    courtSurfaces: ['Artistic gymnastics', 'Rhythmic gymnastics', 'Trampoline', 'Tumbling'],
    programs: [
      { name: 'Swiss Precision Gymnastics', price: 'CHF 1500/week', desc: 'Swiss-quality artistic gymnastics with attention to technical detail' },
      { name: 'Alpine Gym Retreat', price: 'CHF 1200/week', desc: 'Combined gymnastics and conditioning with Swiss Alpine training' }
    ],
    coaches: [
      { name: 'Lukas Brunner', credential: 'STV National Coach', background: 'Former Swiss national team gymnast and European Championship finalist', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'German', 'French'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800'],
    upcomingCamps: [
      { name: 'Zurich Summer Gymnastics', startDate: '2025-07-01', endDate: '2025-07-08', price: 'CHF 1500', level: 'Advanced' }
    ],
    accommodation: {
      types: [{ type: 'hotel', label: 'Zurich Lakeside Hotel', pricePerWeek: 750, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Premium lakeside hotel with stunning views of the Alps'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-01',
      spotsLeft: 14,
      responseTime: '48h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 6,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Swiss international school access for long-term students',
      medicalStaff: true,
      safeguarding: 'Swiss Olympic Association safeguarding standards',
      airportPickup: true,
      mealPlan: 'Full board with Swiss cuisine and dietary accommodations',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'German', 'French'],
      emergencyProtocol: '24/7 medical support with UniversitätsSpital Zürich nearby'
    }
  },
  {
    id: 'bern-gymnastics-academy',
    name: 'Bern Gymnastics Academy',
    country: 'Switzerland',
    countryFlag: '🇨🇭',
    city: 'Bern',
    lat: 46.9480,
    lng: 7.4474,
    website: 'https://www.berngym.ch',
    contact: '+41 31 234 5678',
    contactEmail: 'info@berngym.ch',
    description: 'A well-established gymnastics academy in the Swiss capital Bern, offering comprehensive training in artistic and rhythmic gymnastics with Swiss precision.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby, Aare River nearby' },
    priceRange: { from: 950, to: 2100, unit: 'week', display: 'CHF 950 - CHF 2,100/week' },
    socialMedia: { instagram: '@berngym', facebook: 'https://facebook.com/berngym', twitter: '@berngym' },
    climate: 'bern',
    facilities: 'Sprung floor, vault runway, beam, bars, rings, foam pit, trampoline, dance studio, Pilates room',
    courtSurfaces: ['Artistic gymnastics', 'Rhythmic gymnastics', 'Trampoline', 'Tumbling'],
    programs: [
      { name: 'Swiss Capital Gymnastics', price: 'CHF 1300/week', desc: 'All-around artistic gymnastics training in the Swiss national capital' },
      { name: 'Rhythmic Swiss Programme', price: 'CHF 1100/week', desc: 'Rhythmic gymnastics with Swiss coaching methodology and choreography' }
    ],
    coaches: [
      { name: 'Anna Keller', credential: 'STV National Coach', background: 'Former Swiss national rhythmic gymnastics team member and coach educator', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'German', 'French'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800'],
    upcomingCamps: [
      { name: 'Bern Summer Gymnastics', startDate: '2025-07-14', endDate: '2025-07-21', price: 'CHF 1300', level: 'Intermediate' }
    ],
    accommodation: {
      types: [{ type: 'hotel', label: 'Bern Old Town Hotel', pricePerWeek: 700, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Charming hotel in Bern\'s UNESCO Old Town with tram access'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-15',
      spotsLeft: 16,
      responseTime: '48h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 6,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Swiss bilingual school access for extended stays',
      medicalStaff: true,
      safeguarding: 'Swiss Olympic safeguarding standards with background checks',
      airportPickup: true,
      mealPlan: 'Full board with Swiss cuisine and sports nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'German', 'French'],
      emergencyProtocol: 'On-site first aid with Inselspital Bern university hospital nearby'
    }
  }
];

const CLIMATE_DATA = {
  bucharest: {
    averageTemp: { summer: 24, winter: 0 },
    rainyDays: 95,
    humidity: 70,
    description: 'Humid continental climate with hot summers and cold winters'
  },
  deva: {
    averageTemp: { summer: 22, winter: -1 },
    rainyDays: 100,
    humidity: 72,
    description: 'Continental climate in the Transylvanian foothills with moderate summers'
  },
  paris: {
    averageTemp: { summer: 20, winter: 5 },
    rainyDays: 111,
    humidity: 78,
    description: 'Mild oceanic climate with warm summers and cool winters'
  },
  stuttgart: {
    averageTemp: { summer: 20, winter: 1 },
    rainyDays: 110,
    humidity: 72,
    description: 'Moderate continental climate with warm summers in the Neckar Valley'
  },
  london: {
    averageTemp: { summer: 18, winter: 5 },
    rainyDays: 133,
    humidity: 80,
    description: 'Temperate oceanic climate with mild temperatures year-round'
  },
  lilleshall: {
    averageTemp: { summer: 17, winter: 4 },
    rainyDays: 140,
    humidity: 82,
    description: 'Temperate oceanic climate in the rural English Midlands'
  },
  milan: {
    averageTemp: { summer: 24, winter: 3 },
    rainyDays: 85,
    humidity: 72,
    description: 'Humid subtropical climate with hot summers and cold, foggy winters'
  },
  barcelona: {
    averageTemp: { summer: 25, winter: 10 },
    rainyDays: 55,
    humidity: 65,
    description: 'Mediterranean climate with hot summers and mild winters'
  },
  amsterdam: {
    averageTemp: { summer: 17, winter: 4 },
    rainyDays: 132,
    humidity: 82,
    description: 'Oceanic climate with cool summers and mild, damp winters'
  },
  brussels: {
    averageTemp: { summer: 18, winter: 3 },
    rainyDays: 135,
    humidity: 80,
    description: 'Oceanic climate with cool summers and mild winters'
  },
  zurich: {
    averageTemp: { summer: 19, winter: 1 },
    rainyDays: 120,
    humidity: 74,
    description: 'Continental climate with warm summers and cold winters, influenced by the Alps'
  },
  bern: {
    averageTemp: { summer: 18, winter: 0 },
    rainyDays: 125,
    humidity: 76,
    description: 'Continental climate with warm summers and cold winters in the Swiss Mittelland'
  }
};

const NEWS_ITEMS = [
  { title: 'FIG introduces new Code of Points for 2025-2028 Olympic cycle', date: '2025-03-12', summary: 'The International Gymnastics Federation unveils updated scoring rules emphasising difficulty and execution balance.' },
  { title: 'Record participation at European Gymnastics Championships', date: '2025-02-18', summary: 'Over 500 gymnasts from 40 nations competed in the largest European Championships to date.' },
  { title: 'Rhythmic gymnastics adds new apparatus category for 2028 Olympics', date: '2025-01-25', summary: 'The IOC approves an expanded rhythmic gymnastics programme for the Los Angeles Games.' },
  { title: 'Youth gymnastics safety standards updated across Europe', date: '2025-01-08', summary: 'European Gymnastics releases new comprehensive welfare and safety guidelines for junior programmes.' },
  { title: 'Trampoline gymnastics sees surge in global popularity', date: '2024-12-15', summary: 'FIG reports a 40% increase in trampoline gymnastics registrations worldwide over the past two years.' }
];

const COUNTRIES = ['Romania', 'France', 'Germany', 'UK', 'Italy', 'Spain', 'Netherlands', 'Belgium', 'Switzerland'];
