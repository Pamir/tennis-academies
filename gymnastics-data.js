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
  },
  {
    id: 'budapest-gymnastics-academy',
    name: 'Budapest Gymnastics Academy',
    country: 'Hungary',
    countryFlag: '🇭🇺',
    city: 'Budapest',
    lat: 47.4979,
    lng: 19.0402,
    website: 'https://www.budapestgymnastics.hu',
    contact: '+36 1 234 5678',
    contactEmail: 'info@budapestgymnastics.hu',
    description: 'A prestigious gymnastics academy in Budapest continuing Hungary\'s proud tradition in artistic and rhythmic gymnastics, with world-class coaching and modern facilities.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby, Danube River runs through the city' },
    priceRange: { from: 550, to: 1300, unit: 'week', display: '€550 - €1,300/week' },
    socialMedia: { instagram: '@budapestgym', facebook: 'https://facebook.com/budapestgym', twitter: '@budapestgym' },
    climate: 'budapest',
    facilities: 'Sprung floor, vault runway, beam, bars, rings, foam pit, trampoline, dance studio, strength training room',
    courtSurfaces: ['Artistic gymnastics', 'Rhythmic gymnastics', 'Trampoline', 'Tumbling'],
    programs: [
      { name: 'Hungarian Artistic Excellence', price: '€900/week', desc: 'Elite artistic gymnastics training in Hungary\'s Gadolla tradition' },
      { name: 'Junior Development Programme', price: '€600/week', desc: 'Progressive training for young gymnasts aged 6-14' },
      { name: 'Rhythmic Gymnastics Intensive', price: '€750/week', desc: 'Apparatus mastery and choreography for rhythmic gymnasts' }
    ],
    coaches: [
      { name: 'Katalin Szabó', credential: 'FIG Level 3 Coach', background: 'Former Hungarian national team gymnast and head coach of the Budapest development programme', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Hungarian', 'German'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=800'],
    upcomingCamps: [
      { name: 'Budapest Summer Gymnastics Camp', startDate: '2026-07-06', endDate: '2026-07-13', price: '€900', level: 'Intermediate' }
    ],
    accommodation: {
      types: [{ type: 'dormitory', label: 'Academy Dormitory', pricePerWeek: 300, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'On-campus dormitory near the Danube with easy metro access'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-06-01',
      spotsLeft: 18,
      responseTime: '24h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 6,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Hungarian sports school partnership with bilingual instruction',
      medicalStaff: true,
      safeguarding: 'Hungarian Gymnastics Federation child protection standards',
      airportPickup: true,
      mealPlan: 'Full board with Hungarian cuisine and sports nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Hungarian'],
      emergencyProtocol: 'On-site medical team with Szent János Hospital nearby'
    }
  },
  {
    id: 'warsaw-gymnastics-centre',
    name: 'Warsaw Gymnastics Centre',
    country: 'Poland',
    countryFlag: '🇵🇱',
    city: 'Warsaw',
    lat: 52.2297,
    lng: 21.0122,
    website: 'https://www.warsawgymnastics.pl',
    contact: '+48 22 345 6789',
    contactEmail: 'info@warsawgymnastics.pl',
    description: 'Poland\'s leading gymnastics centre in Warsaw, offering comprehensive training across all gymnastics disciplines with experienced international coaches.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: false,
    beach: { distance: null, description: 'No beach nearby' },
    priceRange: { from: 500, to: 1200, unit: 'week', display: '€500 - €1,200/week' },
    socialMedia: { instagram: '@warsawgym', facebook: 'https://facebook.com/warsawgym', twitter: '@warsawgym' },
    climate: 'warsaw',
    facilities: 'Sprung floor, vault runway, beam, bars, rings, foam pit, trampoline, dance studio, video analysis room',
    courtSurfaces: ['Artistic gymnastics', 'Rhythmic gymnastics', 'Trampoline', 'Tumbling'],
    programs: [
      { name: 'Polish Artistic Programme', price: '€750/week', desc: 'Artistic gymnastics training following Polish coaching methodology' },
      { name: 'Trampoline & Tumbling Intensive', price: '€600/week', desc: 'Specialised acrobatic and trampoline training programme' }
    ],
    coaches: [
      { name: 'Marek Kowalski', credential: 'FIG Level 2 Coach', background: 'Former Polish national team coach with 15 years of international competition experience', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Polish', 'Russian'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800'],
    upcomingCamps: [
      { name: 'Warsaw Spring Gymnastics Camp', startDate: '2026-04-06', endDate: '2026-04-13', price: '€750', level: 'All levels' }
    ],
    accommodation: {
      types: [{ type: 'hotel', label: 'Warsaw City Hotel', pricePerWeek: 400, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: false }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Partner hotel in central Warsaw with public transport links'
    },
    availability: {
      status: 'limited',
      nextIntake: '2026-04-01',
      spotsLeft: 10,
      responseTime: '48h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 6,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Polish sports school integration available',
      medicalStaff: true,
      safeguarding: 'Polish Gymnastics Association child welfare standards',
      airportPickup: true,
      mealPlan: 'Full board with Polish cuisine and dietary options',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Polish'],
      emergencyProtocol: 'On-site physiotherapy with hospital partnership in Warsaw'
    }
  },
  {
    id: 'prague-gymnastics-school',
    name: 'Prague Gymnastics School',
    country: 'Czech Republic',
    countryFlag: '🇨🇿',
    city: 'Prague',
    lat: 50.0755,
    lng: 14.4378,
    website: 'https://www.praguegymnastics.cz',
    contact: '+420 222 345 678',
    contactEmail: 'info@praguegymnastics.cz',
    description: 'A renowned gymnastics school in the heart of Prague, blending Czech gymnastics heritage with modern training methods and a supportive environment.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby, Vltava River nearby' },
    priceRange: { from: 550, to: 1250, unit: 'week', display: '€550 - €1,250/week' },
    socialMedia: { instagram: '@praguegym', facebook: 'https://facebook.com/praguegym', twitter: '@praguegym' },
    climate: 'prague',
    facilities: 'Sprung floor, vault runway, beam, bars, rings, foam pit, trampoline, dance studio, conditioning room',
    courtSurfaces: ['Artistic gymnastics', 'Rhythmic gymnastics', 'Trampoline', 'Tumbling'],
    programs: [
      { name: 'Czech Artistic Gymnastics', price: '€800/week', desc: 'Comprehensive artistic gymnastics in the Czech tradition' },
      { name: 'Rhythmic & Dance Programme', price: '€650/week', desc: 'Rhythmic gymnastics with ballet and contemporary dance integration' },
      { name: 'Youth Development Camp', price: '€550/week', desc: 'Foundational training camp for aspiring young gymnasts' }
    ],
    coaches: [
      { name: 'Jana Novotná', credential: 'FIG Brevet Coach', background: 'Former Czech national team gymnast with European Championships experience', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Czech', 'Slovak'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=800'],
    upcomingCamps: [
      { name: 'Prague Summer Gymnastics', startDate: '2026-07-13', endDate: '2026-07-20', price: '€800', level: 'Intermediate' }
    ],
    accommodation: {
      types: [{ type: 'dormitory', label: 'Prague Academy Residence', pricePerWeek: 320, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Academy residence in Prague with tram access to the city centre'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-06-15',
      spotsLeft: 16,
      responseTime: '24h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 6,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Czech sports school partnership with English-language support',
      medicalStaff: true,
      safeguarding: 'Czech Gymnastics Federation child protection protocols',
      airportPickup: true,
      mealPlan: 'Full board with Czech cuisine and sports nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Czech'],
      emergencyProtocol: 'On-site medical support with Motol University Hospital nearby'
    }
  },
  {
    id: 'stockholm-gymnastics-academy',
    name: 'Stockholm Gymnastics Academy',
    country: 'Sweden',
    countryFlag: '🇸🇪',
    city: 'Stockholm',
    lat: 59.3293,
    lng: 18.0686,
    website: 'https://www.stockholmgymnastics.se',
    contact: '+46 8 234 5678',
    contactEmail: 'info@stockholmgymnastics.se',
    description: 'A top-tier gymnastics academy in Stockholm offering Scandinavian-quality training in artistic, rhythmic, and trampoline gymnastics with a focus on athlete wellbeing.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 15, description: 'Stockholm archipelago beaches accessible by ferry' },
    priceRange: { from: 800, to: 1800, unit: 'week', display: '€800 - €1,800/week' },
    socialMedia: { instagram: '@stockholmgym', facebook: 'https://facebook.com/stockholmgym', twitter: '@stockholmgym' },
    climate: 'stockholm',
    facilities: 'Sprung floor, vault runway, beam, bars, rings, foam pit, trampoline, dance studio, sauna, recovery suite',
    courtSurfaces: ['Artistic gymnastics', 'Rhythmic gymnastics', 'Trampoline', 'Tumbling'],
    programs: [
      { name: 'Swedish Artistic Programme', price: '€1200/week', desc: 'Elite artistic gymnastics with Swedish coaching philosophy' },
      { name: 'Nordic Rhythmic Intensive', price: '€1000/week', desc: 'Rhythmic gymnastics training with Scandinavian choreography approach' }
    ],
    coaches: [
      { name: 'Erik Lindström', credential: 'FIG Level 3 Coach', background: 'Former Swedish national team coach and Nordic Championships gold medallist coach', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Swedish', 'Norwegian'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800'],
    upcomingCamps: [
      { name: 'Stockholm Midsummer Camp', startDate: '2026-06-22', endDate: '2026-06-29', price: '€1200', level: 'Advanced' }
    ],
    accommodation: {
      types: [{ type: 'apartment', label: 'Stockholm Athlete Apartment', pricePerWeek: 600, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: false }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Modern apartment near the academy with T-bana metro access'
    },
    availability: {
      status: 'limited',
      nextIntake: '2026-06-01',
      spotsLeft: 8,
      responseTime: '48h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 6,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Swedish sports gymnasium integration with English instruction',
      medicalStaff: true,
      safeguarding: 'Swedish Gymnastics Federation safeguarding standards',
      airportPickup: true,
      mealPlan: 'Full board with Scandinavian cuisine and sports nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Swedish'],
      emergencyProtocol: 'On-site medical support with Karolinska University Hospital nearby'
    }
  },
  {
    id: 'copenhagen-gymnastics-centre',
    name: 'Copenhagen Gymnastics Centre',
    country: 'Denmark',
    countryFlag: '🇩🇰',
    city: 'Copenhagen',
    lat: 55.6761,
    lng: 12.5683,
    website: 'https://www.copenhagengym.dk',
    contact: '+45 33 234 567',
    contactEmail: 'info@copenhagengym.dk',
    description: 'Denmark\'s premier gymnastics centre in Copenhagen, rooted in the Danish gymnastics tradition and offering modern training across all disciplines.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: false,
    beach: { distance: 10, description: 'Amager Strandpark beach accessible by metro' },
    priceRange: { from: 750, to: 1700, unit: 'week', display: '€750 - €1,700/week' },
    socialMedia: { instagram: '@copenhagengym', facebook: 'https://facebook.com/copenhagengym', twitter: '@copenhagengym' },
    climate: 'copenhagen',
    facilities: 'Sprung floor, vault runway, beam, bars, rings, foam pit, trampoline, dance studio, gymnastics hall',
    courtSurfaces: ['Artistic gymnastics', 'Rhythmic gymnastics', 'Trampoline', 'Tumbling'],
    programs: [
      { name: 'Danish Artistic Gymnastics', price: '€1100/week', desc: 'Artistic gymnastics training in the Danish folk gymnastics tradition' },
      { name: 'TeamGym Denmark Programme', price: '€900/week', desc: 'TeamGym training combining tumbling, trampette, and floor' },
      { name: 'Youth Gymnastics Foundation', price: '€700/week', desc: 'Introductory programme for young gymnasts building fundamental skills' }
    ],
    coaches: [
      { name: 'Mette Hansen', credential: 'Danish Gymnastics Federation Head Coach', background: 'Former Danish national team gymnast and TeamGym specialist with 12 years coaching experience', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Danish', 'German'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=800'],
    upcomingCamps: [
      { name: 'Copenhagen Easter Camp', startDate: '2027-03-29', endDate: '2027-04-05', price: '€1100', level: 'All levels' }
    ],
    accommodation: {
      types: [{ type: 'hotel', label: 'Copenhagen City Hotel', pricePerWeek: 550, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: false }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Partner hotel in Copenhagen with bicycle rental included'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-09-01',
      spotsLeft: 14,
      responseTime: '24h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 6,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Danish international school access for extended stays',
      medicalStaff: true,
      safeguarding: 'Danish Gymnastics Federation child welfare protocols',
      airportPickup: true,
      mealPlan: 'Full board with Danish cuisine and nutritional planning',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Danish'],
      emergencyProtocol: 'On-site first aid with Rigshospitalet university hospital nearby'
    }
  },
  {
    id: 'vienna-gymnastics-akademie',
    name: 'Vienna Gymnastics Akademie',
    country: 'Austria',
    countryFlag: '🇦🇹',
    city: 'Vienna',
    lat: 48.2082,
    lng: 16.3738,
    website: 'https://www.viennagymnastik.at',
    contact: '+43 1 234 5678',
    contactEmail: 'info@viennagymnastik.at',
    description: 'An elegant gymnastics academy in Vienna combining Austrian sporting heritage with world-class artistic and rhythmic gymnastics coaching in a historic setting.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby, Alte Donau lake nearby' },
    priceRange: { from: 650, to: 1500, unit: 'week', display: '€650 - €1,500/week' },
    socialMedia: { instagram: '@viennagym', facebook: 'https://facebook.com/viennagym', twitter: '@viennagym' },
    climate: 'vienna',
    facilities: 'Sprung floor, vault runway, beam, bars, rings, foam pit, trampoline, dance studio, ballet barre room',
    courtSurfaces: ['Artistic gymnastics', 'Rhythmic gymnastics', 'Trampoline', 'Tumbling'],
    programs: [
      { name: 'Viennese Artistic Excellence', price: '€1000/week', desc: 'Artistic gymnastics training with Austrian coaching precision' },
      { name: 'Rhythmic Gymnastics Vienna', price: '€850/week', desc: 'Rhythmic gymnastics with classical music and choreography integration' }
    ],
    coaches: [
      { name: 'Claudia Berger', credential: 'ÖFT National Coach', background: 'Former Austrian national rhythmic gymnastics champion and European competition judge', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'German', 'Italian'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800'],
    upcomingCamps: [
      { name: 'Vienna Autumn Gymnastics', startDate: '2026-10-05', endDate: '2026-10-12', price: '€1000', level: 'Intermediate' }
    ],
    accommodation: {
      types: [{ type: 'hotel', label: 'Vienna Academy Hotel', pricePerWeek: 500, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Charming hotel near the academy with U-Bahn metro access'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-09-15',
      spotsLeft: 12,
      responseTime: '24h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 6,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Austrian international school partnership available',
      medicalStaff: true,
      safeguarding: 'Austrian Gymnastics Federation child protection standards',
      airportPickup: true,
      mealPlan: 'Full board with Viennese cuisine and sports nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'German'],
      emergencyProtocol: 'On-site medical support with AKH Vienna university hospital nearby'
    }
  },
  {
    id: 'athens-gymnastics-academy',
    name: 'Athens Gymnastics Academy',
    country: 'Greece',
    countryFlag: '🇬🇷',
    city: 'Athens',
    lat: 37.9838,
    lng: 23.7275,
    website: 'https://www.athensgymnastics.gr',
    contact: '+30 210 345 6789',
    contactEmail: 'info@athensgymnastics.gr',
    description: 'A vibrant gymnastics academy in Athens, the birthplace of the Olympic Games, offering training in the cradle of gymnastics with Mediterranean flair.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: false,
    beach: { distance: 20, description: 'Athens Riviera beaches along the Saronic Gulf coast' },
    priceRange: { from: 500, to: 1100, unit: 'week', display: '€500 - €1,100/week' },
    socialMedia: { instagram: '@athensgym', facebook: 'https://facebook.com/athensgym', twitter: '@athensgym' },
    climate: 'athens',
    facilities: 'Sprung floor, vault runway, beam, bars, rings, foam pit, trampoline, dance studio, outdoor conditioning area',
    courtSurfaces: ['Artistic gymnastics', 'Rhythmic gymnastics', 'Trampoline', 'Tumbling'],
    programs: [
      { name: 'Olympic Heritage Artistic Programme', price: '€750/week', desc: 'Artistic gymnastics inspired by Greece\'s Olympic legacy' },
      { name: 'Mediterranean Rhythmic Camp', price: '€600/week', desc: 'Rhythmic gymnastics with Greek dance influences and choreography' },
      { name: 'Youth Olympic Foundations', price: '€500/week', desc: 'Introductory programme for young gymnasts aged 6-12' }
    ],
    coaches: [
      { name: 'Nikolaos Papadopoulos', credential: 'Hellenic Gymnastics Federation Coach', background: 'Former Greek national team artistic gymnast and Athens 2004 Olympic volunteer coach', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Greek', 'French'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=800'],
    upcomingCamps: [
      { name: 'Athens Summer Olympic Camp', startDate: '2026-06-15', endDate: '2026-06-22', price: '€750', level: 'All levels' }
    ],
    accommodation: {
      types: [{ type: 'hotel', label: 'Athens Centre Hotel', pricePerWeek: 350, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: false }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Partner hotel in central Athens near the Acropolis with metro access'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-05-15',
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
      schooling: 'Greek international school partnership for extended stays',
      medicalStaff: true,
      safeguarding: 'Hellenic Gymnastics Federation child protection standards',
      airportPickup: true,
      mealPlan: 'Full board with Mediterranean cuisine and dietary accommodations',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Greek'],
      emergencyProtocol: 'On-site first aid with Evangelismos Hospital nearby'
    }
  },
  {
    id: 'lisbon-gymnastics-academy',
    name: 'Lisbon Gymnastics Academy',
    country: 'Portugal',
    countryFlag: '🇵🇹',
    city: 'Lisbon',
    lat: 38.7223,
    lng: -9.1393,
    website: 'https://www.lisbongymnastics.pt',
    contact: '+351 21 345 6789',
    contactEmail: 'info@lisbongymnastics.pt',
    description: 'A dynamic gymnastics academy in Lisbon offering modern training in artistic and rhythmic gymnastics with a warm Portuguese welcome and Atlantic coast setting.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 15, description: 'Atlantic coast beaches at Cascais and Costa da Caparica' },
    priceRange: { from: 450, to: 1100, unit: 'week', display: '€450 - €1,100/week' },
    socialMedia: { instagram: '@lisbongym', facebook: 'https://facebook.com/lisbongym', twitter: '@lisbongym' },
    climate: 'lisbon',
    facilities: 'Sprung floor, vault runway, beam, bars, rings, foam pit, trampoline, dance studio, Pilates room',
    courtSurfaces: ['Artistic gymnastics', 'Rhythmic gymnastics', 'Trampoline', 'Tumbling'],
    programs: [
      { name: 'Portuguese Artistic Gymnastics', price: '€700/week', desc: 'Artistic gymnastics training with Portuguese coaching excellence' },
      { name: 'Atlantic Rhythmic Programme', price: '€600/week', desc: 'Rhythmic gymnastics with creative choreography and apparatus mastery' }
    ],
    coaches: [
      { name: 'Sofia Ferreira', credential: 'FGP National Coach', background: 'Former Portuguese national rhythmic gymnastics team member and World Championships participant', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Portuguese', 'Spanish'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800'],
    upcomingCamps: [
      { name: 'Lisbon Spring Gymnastics', startDate: '2026-03-23', endDate: '2026-03-30', price: '€700', level: 'Intermediate' }
    ],
    accommodation: {
      types: [{ type: 'apartment', label: 'Lisbon Athlete Apartment', pricePerWeek: 350, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: false }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Modern apartment in Lisbon with metro and tram access'
    },
    availability: {
      status: 'limited',
      nextIntake: '2026-03-01',
      spotsLeft: 10,
      responseTime: '48h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 6,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Portuguese international school access for long-term students',
      medicalStaff: true,
      safeguarding: 'Portuguese Gymnastics Federation child welfare standards',
      airportPickup: true,
      mealPlan: 'Full board with Portuguese cuisine and sports nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Portuguese'],
      emergencyProtocol: 'On-site medical support with Hospital de Santa Maria nearby'
    }
  },
  {
    id: 'bern-rhythmic-gymnastics-centre',
    name: 'Bern Rhythmic Gymnastics Centre',
    country: 'Switzerland',
    countryFlag: '🇨🇭',
    city: 'Bern',
    lat: 46.9480,
    lng: 7.4474,
    website: 'https://www.bernrhythmicgym.ch',
    contact: '+41 31 345 6789',
    contactEmail: 'info@bernrhythmicgym.ch',
    description: 'A specialised rhythmic gymnastics centre in Bern, offering elite-level rhythmic and aesthetic gymnastics training with Swiss precision and dedication.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby, Aare River nearby' },
    priceRange: { from: 1000, to: 2200, unit: 'week', display: 'CHF 1,000 - CHF 2,200/week' },
    socialMedia: { instagram: '@bernrhythmicgym', facebook: 'https://facebook.com/bernrhythmicgym', twitter: '@bernrhythmicgym' },
    climate: 'bern',
    facilities: 'Rhythmic gymnastics hall, sprung floor, apparatus storage, dance studio, ballet barre room, video analysis suite, Pilates room',
    courtSurfaces: ['Artistic gymnastics', 'Rhythmic gymnastics', 'Trampoline', 'Tumbling'],
    programs: [
      { name: 'Swiss Rhythmic Excellence', price: 'CHF 1500/week', desc: 'Elite rhythmic gymnastics with apparatus mastery and expressive choreography' },
      { name: 'Aesthetic Group Gymnastics', price: 'CHF 1200/week', desc: 'Group rhythmic gymnastics focusing on synchronisation and teamwork' },
      { name: 'Junior Rhythmic Development', price: 'CHF 1000/week', desc: 'Progressive rhythmic gymnastics for young athletes aged 6-14' }
    ],
    coaches: [
      { name: 'Lena Müller', credential: 'STV Rhythmic National Coach', background: 'Former Swiss national rhythmic gymnastics champion and international competition judge', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'German', 'French', 'Italian'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=800'],
    upcomingCamps: [
      { name: 'Bern Rhythmic Winter Camp', startDate: '2027-01-11', endDate: '2027-01-18', price: 'CHF 1500', level: 'Advanced' }
    ],
    accommodation: {
      types: [{ type: 'hotel', label: 'Bern Bellevue Hotel', pricePerWeek: 750, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Premium hotel in Bern\'s Old Town with tram access and mountain views'
    },
    availability: {
      status: 'waitlist',
      nextIntake: '2026-09-01',
      spotsLeft: 4,
      responseTime: '72h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 6,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Swiss bilingual school partnership for extended stays',
      medicalStaff: true,
      safeguarding: 'Swiss Olympic safeguarding standards with background checks',
      airportPickup: true,
      mealPlan: 'Full board with Swiss cuisine and sports nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'German', 'French'],
      emergencyProtocol: 'On-site first aid with Inselspital Bern university hospital nearby'
    }
  },
  {
    id: 'dublin-gymnastics-centre',
    name: 'Dublin Gymnastics Centre',
    country: 'Ireland',
    countryFlag: '🇮🇪',
    city: 'Dublin',
    lat: 53.3498,
    lng: -6.2603,
    website: 'https://www.dublingymnastics.ie',
    contact: '+353 1 234 5678',
    contactEmail: 'info@dublingymnastics.ie',
    description: 'Ireland\'s leading gymnastics centre in Dublin, offering comprehensive training in artistic and trampoline gymnastics with a welcoming Irish atmosphere.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: false,
    beach: { distance: 12, description: 'Dublin Bay beaches at Sandymount and Dollymount Strand' },
    priceRange: { from: 600, to: 1400, unit: 'week', display: '€600 - €1,400/week' },
    socialMedia: { instagram: '@dublingym', facebook: 'https://facebook.com/dublingym', twitter: '@dublingym' },
    climate: 'dublin',
    facilities: 'Sprung floor, vault runway, beam, bars, rings, foam pit, trampoline, dance studio, strength room',
    courtSurfaces: ['Artistic gymnastics', 'Rhythmic gymnastics', 'Trampoline', 'Tumbling'],
    programs: [
      { name: 'Irish Artistic Gymnastics', price: '€950/week', desc: 'Artistic gymnastics training following Gymnastics Ireland standards' },
      { name: 'Trampoline Ireland Programme', price: '€800/week', desc: 'Specialised trampoline and double-mini trampoline training' }
    ],
    coaches: [
      { name: 'Aoife Murphy', credential: 'Gymnastics Ireland National Coach', background: 'Former Irish national team artistic gymnast and Commonwealth Games participant', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Irish'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800'],
    upcomingCamps: [
      { name: 'Dublin Summer Gymnastics', startDate: '2026-07-20', endDate: '2026-07-27', price: '€950', level: 'All levels' }
    ],
    accommodation: {
      types: [{ type: 'hotel', label: 'Dublin City Hotel', pricePerWeek: 480, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: false }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Partner hotel in Dublin city centre with DART rail access'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-07-01',
      spotsLeft: 16,
      responseTime: '24h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 6,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Irish school integration available for extended stays',
      medicalStaff: true,
      safeguarding: 'Gymnastics Ireland child protection and welfare standards',
      airportPickup: true,
      mealPlan: 'Full board with Irish cuisine and dietary accommodations',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Irish'],
      emergencyProtocol: 'On-site first aid with St James\'s Hospital nearby'
    }
  },
  {
    id: 'zagreb-gymnastics-akademija',
    name: 'Zagreb Gymnastics Akademija',
    country: 'Croatia',
    countryFlag: '🇭🇷',
    city: 'Zagreb',
    lat: 45.8150,
    lng: 15.9819,
    website: 'https://www.zagrebgymnastics.hr',
    contact: '+385 1 234 5678',
    contactEmail: 'info@zagrebgymnastics.hr',
    description: 'A growing gymnastics academy in Zagreb, drawing on Croatia\'s strong sporting culture to deliver quality artistic and rhythmic gymnastics training.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby, Adriatic coast 2 hours south' },
    priceRange: { from: 450, to: 1050, unit: 'week', display: '€450 - €1,050/week' },
    socialMedia: { instagram: '@zagrebgym', facebook: 'https://facebook.com/zagrebgym', twitter: '@zagrebgym' },
    climate: 'zagreb',
    facilities: 'Sprung floor, vault runway, beam, bars, rings, foam pit, trampoline, dance studio, conditioning area',
    courtSurfaces: ['Artistic gymnastics', 'Rhythmic gymnastics', 'Trampoline', 'Tumbling'],
    programs: [
      { name: 'Croatian Artistic Programme', price: '€700/week', desc: 'Artistic gymnastics with Croatian coaching and competition preparation' },
      { name: 'Adriatic Rhythmic Camp', price: '€550/week', desc: 'Rhythmic gymnastics combining technical training and creative expression' },
      { name: 'Junior Gymnastics Foundations', price: '€450/week', desc: 'Fundamental gymnastics skills for young athletes aged 6-12' }
    ],
    coaches: [
      { name: 'Ivan Horvat', credential: 'Croatian Gymnastics Federation Coach', background: 'Former Croatian national team artistic gymnast and Balkan Championships medallist', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Croatian', 'Serbian'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=800'],
    upcomingCamps: [
      { name: 'Zagreb Autumn Gymnastics', startDate: '2026-10-19', endDate: '2026-10-26', price: '€700', level: 'Intermediate' }
    ],
    accommodation: {
      types: [{ type: 'dormitory', label: 'Zagreb Academy Dormitory', pricePerWeek: 250, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'On-campus dormitory in Zagreb with tram access to the city centre'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-10-01',
      spotsLeft: 18,
      responseTime: '24h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 6,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Croatian sports school partnership with English support',
      medicalStaff: true,
      safeguarding: 'Croatian Gymnastics Federation child protection protocols',
      airportPickup: true,
      mealPlan: 'Full board with Croatian cuisine and dietary options',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Croatian'],
      emergencyProtocol: 'On-site medical support with KBC Zagreb university hospital nearby'
    }
  },
  {
    id: 'helsinki-gymnastics-centre',
    name: 'Helsinki Gymnastics Centre',
    country: 'Finland',
    countryFlag: '🇫🇮',
    city: 'Helsinki',
    lat: 60.1699,
    lng: 24.9384,
    website: 'https://www.helsinkigymnastics.fi',
    contact: '+358 9 234 5678',
    contactEmail: 'info@helsinkigymnastics.fi',
    description: 'Finland\'s top gymnastics centre in Helsinki, offering Nordic-quality training in artistic and rhythmic gymnastics with excellent sports science support.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: false,
    beach: { distance: 8, description: 'Helsinki waterfront and Hietaniemi Beach nearby' },
    priceRange: { from: 750, to: 1700, unit: 'week', display: '€750 - €1,700/week' },
    socialMedia: { instagram: '@helsinkigym', facebook: 'https://facebook.com/helsinkigym', twitter: '@helsinkigym' },
    climate: 'helsinki',
    facilities: 'Sprung floor, vault runway, beam, bars, rings, foam pit, trampoline, dance studio, sauna, ice bath recovery',
    courtSurfaces: ['Artistic gymnastics', 'Rhythmic gymnastics', 'Trampoline', 'Tumbling'],
    programs: [
      { name: 'Finnish Artistic Gymnastics', price: '€1100/week', desc: 'Artistic gymnastics training with Finnish sports science methodology' },
      { name: 'Nordic Trampoline Programme', price: '€900/week', desc: 'Trampoline and tumbling with Nordic coaching philosophy' }
    ],
    coaches: [
      { name: 'Annika Virtanen', credential: 'Finnish Gymnastics Federation Head Coach', background: 'Former Finnish national team rhythmic gymnast and Nordic Championships medallist', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Finnish', 'Swedish'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800'],
    upcomingCamps: [
      { name: 'Helsinki Winter Gymnastics', startDate: '2027-02-01', endDate: '2027-02-08', price: '€1100', level: 'Advanced' }
    ],
    accommodation: {
      types: [{ type: 'apartment', label: 'Helsinki Athlete Apartment', pricePerWeek: 550, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: false }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Modern apartment in Helsinki with metro and tram access'
    },
    availability: {
      status: 'waitlist',
      nextIntake: '2026-08-15',
      spotsLeft: 6,
      responseTime: '72h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 6,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Finnish international school access with English instruction',
      medicalStaff: true,
      safeguarding: 'Finnish Gymnastics Federation child welfare standards',
      airportPickup: true,
      mealPlan: 'Full board with Finnish cuisine and sports nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Finnish', 'Swedish'],
      emergencyProtocol: 'On-site medical support with HUS Helsinki University Hospital nearby'
    }
  },
  {
    id: 'gymnastics-ireland-national-centre',
    name: 'Gymnastics Ireland National Centre',
    country: 'Ireland',
    countryFlag: '🇮🇪',
    city: 'Dublin',
    lat: 53.3558,
    lng: -6.2489,
    website: 'https://www.gymnasticsireland.com',
    contact: '+353 1 625 1125',
    contactEmail: 'info@gymnasticsireland.com',
    description: 'The national gymnastics centre for Ireland in Dublin, developing talent across artistic, rhythmic, and trampoline disciplines with world-class coaching.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby' },
    priceRange: { from: 550, to: 1300, unit: 'week', display: '€550 - €1,300/week' },
    socialMedia: { instagram: '@gymnasticsireland', facebook: 'https://facebook.com/gymnasticsireland', twitter: '@gymireland' },
    climate: 'dublin',
    facilities: 'Sprung floor, vault runway, beam, bars, rings, foam pit, trampoline, dance studio, Pilates room',
    courtSurfaces: ['Artistic gymnastics', 'Rhythmic gymnastics', 'Trampoline', 'Tumbling'],
    programs: [
      { name: 'Irish Artistic Gymnastics Camp', price: '€850/week', desc: 'Comprehensive artistic gymnastics training with national-level coaches' },
      { name: 'Junior Development Programme', price: '€600/week', desc: 'Structured progression for young gymnasts aged 6-12' },
      { name: 'Trampoline & Tumbling Intensive', price: '€750/week', desc: 'Specialised trampoline and tumbling training with competition preparation' }
    ],
    coaches: [
      { name: 'Aoife Kelly', credential: 'FIG Brevet Judge & Coach', background: 'Former Irish national team gymnast and international level coach with 18 years experience', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Irish'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=800'],
    upcomingCamps: [
      { name: 'Dublin Summer Gymnastics Camp', startDate: '2026-07-06', endDate: '2026-07-13', price: '€850', level: 'Intermediate' }
    ],
    accommodation: {
      types: [{ type: 'dormitory', label: 'Academy Dormitory', pricePerWeek: 300, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'On-campus dormitory with full meal service and recovery facilities'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-06-01',
      spotsLeft: 18,
      responseTime: '24h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 6,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Irish school integration with English-language instruction',
      medicalStaff: true,
      safeguarding: 'Gymnastics Ireland child protection standards, Garda-vetted coaches',
      airportPickup: true,
      mealPlan: 'Full board with sports nutrition and dietary accommodations',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Irish'],
      emergencyProtocol: 'On-site physiotherapy and medical team with Beaumont Hospital partnership'
    }
  },
  {
    id: 'serbian-gymnastics-centre',
    name: 'Serbian Gymnastics Centre',
    country: 'Serbia',
    countryFlag: '🇷🇸',
    city: 'Belgrade',
    lat: 44.7866,
    lng: 20.4489,
    website: 'https://www.gymnasticsserbia.rs',
    contact: '+381 11 901 2345',
    contactEmail: 'info@gymnasticsserbia.rs',
    description: 'Serbia\'s central gymnastics facility in Belgrade, offering artistic and rhythmic gymnastics training with national-level coaching and modern apparatus.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: false,
    beach: { distance: null, description: 'No beach nearby, Ada Ciganlija lake recreation' },
    priceRange: { from: 500, to: 1300, unit: 'week', display: '€500 - €1,300/week' },
    socialMedia: { instagram: '@gymnasticsserbia', facebook: 'https://facebook.com/gymnasticsserbia', twitter: '@gymnasticsserbia' },
    climate: 'belgrade',
    facilities: 'Sprung floor, vault runway, beam, bars, rings, foam pit, trampoline, rhythmic gymnastics hall, dance studio, gym',
    courtSurfaces: ['Artistic gymnastics', 'Rhythmic gymnastics', 'Trampoline', 'Tumbling'],
    programs: [
      { name: 'Serbian Artistic Gymnastics', price: '€1,000/week', desc: 'Artistic gymnastics training with Serbian national coaching methodology' },
      { name: 'Youth Gymnastics Foundation', price: '€500/week', desc: 'Fundamental gymnastics skills for children and beginners' }
    ],
    coaches: [
      { name: 'Jelena Popović', credential: 'Serbian Gymnastics Federation Head Coach', background: 'Former Serbian national team rhythmic gymnast and European Championships competitor', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Serbian'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800'],
    upcomingCamps: [
      { name: 'Belgrade Gymnastics Camp', startDate: '2026-08-03', endDate: '2026-08-10', price: '€1,000', level: 'All levels' }
    ],
    accommodation: {
      types: [{ type: 'apartment', label: 'Belgrade Sport Apartment', pricePerWeek: 250, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: false }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Modern apartment near the gymnastics centre with public transport access'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-07-01',
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
      schooling: 'Serbian school integration available',
      medicalStaff: true,
      safeguarding: 'Serbian Gymnastics Federation child welfare standards',
      airportPickup: true,
      mealPlan: 'Full board with Serbian cuisine and sports nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Serbian', 'English'],
      emergencyProtocol: 'On-site medical support, Clinical Centre of Serbia nearby'
    }
  },
  {
    id: 'turkish-gymnastics-federation-centre',
    name: 'Turkish Gymnastics Federation Centre',
    country: 'Turkey',
    countryFlag: '',
    city: 'Ankara',
    lat: 39.9334,
    lng: 32.8597,
    website: 'https://www.tgf.gov.tr',
    contact: '+90 312 310 1234',
    contactEmail: 'info@tgf.gov.tr',
    description: 'Turkey\'s national gymnastics training centre in Ankara, home of the Turkish Gymnastics Federation. Modern indoor facilities for artistic, rhythmic and trampoline gymnastics.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Landlocked capital, no beach access' },
    priceRange: { from: 500, to: 1400, unit: 'week', display: '500 - 1,400/week' },
    socialMedia: { instagram: '@turkishgymnastics', facebook: 'https://facebook.com/turkishgymnastics', twitter: '@tgf_official' },
    climate: 'ankara',
    facilities: 'Full artistic gymnastics hall with Olympic apparatus, rhythmic gymnastics floor, trampoline area, foam pit, strength conditioning gym, physiotherapy, video analysis',
    courtSurfaces: ['Artistic gymnastics hall', 'Rhythmic gymnastics floor', 'Trampoline area'],
    programs: [
      { name: 'Artistic Gymnastics Performance', price: '1,200/week', desc: 'Intensive artistic gymnastics training on all apparatus with Turkish national coaches' },
      { name: 'Junior Development Programme', price: '500/week', desc: 'Age-appropriate gymnastics development with safety and fun focus' },
      { name: 'Rhythmic Gymnastics Intensive', price: '1,000/week', desc: 'Rhythmic gymnastics training with choreography and apparatus work' },
      { name: 'Trampoline & Tumbling Camp', price: '700/week', desc: 'Specialised trampoline and tumbling training for acrobatic skills development' }
    ],
    coaches: [
      { name: 'Ayşe Yıldız', credential: 'FIG Level 4 Coach', background: 'Former Turkish national team gymnast and Olympic Games coach. 20 years of coaching experience at international level.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Turkish', 'English'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?w=800'],
    upcomingCamps: [
      { name: 'Summer Gymnastics Camp', startDate: '2026-07-06', endDate: '2026-07-13', price: '1,200', level: 'All levels' },
      { name: 'Winter Training Camp', startDate: '2027-01-12', endDate: '2027-01-19', price: '1,000', level: 'Intermediate' }
    ],
    accommodation: {
      types: [{ type: 'hotel', label: 'Ankara Sports Hotel', pricePerWeek: 350, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'On-site athlete accommodation at the national training centre'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-06-01',
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
      schooling: 'Partnership with Ankara international schools',
      medicalStaff: true,
      safeguarding: 'Turkish Gymnastics Federation child protection protocols',
      airportPickup: true,
      mealPlan: 'Full board with Turkish sports nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Turkish', 'English'],
      emergencyProtocol: '24/7 medical staff on-site, Ankara City Hospital 15 minutes'
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
  },
  budapest: {
    averageTemp: { summer: 22, winter: 0 },
    rainyDays: 100,
    humidity: 70,
    description: 'Continental climate with warm summers and cold winters'
  },
  warsaw: {
    averageTemp: { summer: 20, winter: -1 },
    rainyDays: 110,
    humidity: 75,
    description: 'Continental climate with warm summers and cold winters'
  },
  prague: {
    averageTemp: { summer: 19, winter: 0 },
    rainyDays: 110,
    humidity: 73,
    description: 'Oceanic-continental climate with warm summers and cold winters'
  },
  stockholm: {
    averageTemp: { summer: 18, winter: -1 },
    rainyDays: 108,
    humidity: 76,
    description: 'Humid continental climate with mild summers and cold winters'
  },
  copenhagen: {
    averageTemp: { summer: 18, winter: 2 },
    rainyDays: 120,
    humidity: 80,
    description: 'Maritime climate with mild summers and cool winters'
  },
  vienna: {
    averageTemp: { summer: 21, winter: 1 },
    rainyDays: 105,
    humidity: 70,
    description: 'Continental climate with warm summers and cold winters'
  },
  athens: {
    averageTemp: { summer: 28, winter: 10 },
    rainyDays: 50,
    humidity: 55,
    description: 'Mediterranean climate with hot, dry summers and mild winters'
  },
  lisbon: {
    averageTemp: { summer: 24, winter: 12 },
    rainyDays: 60,
    humidity: 65,
    description: 'Mediterranean climate with warm, dry summers and mild, wet winters'
  },
  dublin: {
    averageTemp: { summer: 16, winter: 5 },
    rainyDays: 150,
    humidity: 82,
    description: 'Oceanic climate with cool summers and mild, damp winters'
  },
  zagreb: {
    averageTemp: { summer: 22, winter: 2 },
    rainyDays: 115,
    humidity: 72,
    description: 'Continental climate with warm summers and cold winters'
  },
  helsinki: {
    averageTemp: { summer: 17, winter: -4 },
    rainyDays: 115,
    humidity: 78,
    description: 'Humid continental climate with mild summers and cold, snowy winters'
  },
  belgrade: {
    averageTemp: { summer: 23, winter: 1 },
    rainyDays: 95,
    humidity: 70,
    description: 'Continental climate with warm summers and cold winters'
  },
  ankara: {
    averageTemp: { summer: 25, winter: 1 },
    rainyDays: 100,
    humidity: 60,
    description: 'Continental climate with hot dry summers and cold snowy winters'
  }
};

const NEWS_ITEMS = [
  { title: 'FIG introduces new Code of Points for 2025-2028 Olympic cycle', date: '2025-03-12', summary: 'The International Gymnastics Federation unveils updated scoring rules emphasising difficulty and execution balance.' },
  { title: 'Record participation at European Gymnastics Championships', date: '2025-02-18', summary: 'Over 500 gymnasts from 40 nations competed in the largest European Championships to date.' },
  { title: 'Rhythmic gymnastics adds new apparatus category for 2028 Olympics', date: '2025-01-25', summary: 'The IOC approves an expanded rhythmic gymnastics programme for the Los Angeles Games.' },
  { title: 'Youth gymnastics safety standards updated across Europe', date: '2025-01-08', summary: 'European Gymnastics releases new comprehensive welfare and safety guidelines for junior programmes.' },
  { title: 'Trampoline gymnastics sees surge in global popularity', date: '2024-12-15', summary: 'FIG reports a 40% increase in trampoline gymnastics registrations worldwide over the past two years.' }
];

const COUNTRIES = ['Romania', 'France', 'Germany', 'UK', 'Italy', 'Spain', 'Netherlands', 'Belgium', 'Switzerland', 'Hungary', 'Poland', 'Czech Republic', 'Sweden', 'Denmark', 'Austria', 'Greece', 'Portugal', 'Ireland', 'Croatia', 'Finland', 'Serbia', 'Turkey'];
