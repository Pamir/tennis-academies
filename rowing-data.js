const SPORT_TYPE = 'rowing';

const ACADEMIES = [
  {
    id: 'henley-royal-rowing',
    name: 'Henley Royal Rowing Academy',
    country: 'UK',
    countryFlag: '🇬🇧',
    city: 'Henley-on-Thames',
    lat: 51.536,
    lng: -0.898,
    website: 'https://www.henleyroyalrowing.co.uk',
    contact: '+44 1491 572153',
    contactEmail: 'info@henleyroyalrowing.co.uk',
    description: 'Located on the iconic Henley Reach, home of the Royal Regatta since 1839. World-class coaching and facilities for scullers and sweep rowers of all levels.',
    ageGroups: ['Junior', 'Adult', 'Masters'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Riverside location on the Thames' },
    priceRange: { from: 900, to: 2500, unit: 'week', display: '£900 - £2,500/week' },
    socialMedia: { instagram: '@henleyroyalrowing', facebook: 'https://facebook.com/henleyroyalrowing', twitter: '@henleyroyal' },
    climate: 'henley',
    facilities: 'Historic boathouse, 2km river course, ergometer room with 30 Concept2 machines, video analysis suite, boat fleet of 60+ shells, strength gym, physiotherapy clinic',
    courtSurfaces: ['Sculling', 'Sweep rowing', 'Indoor ergometer'],
    programs: [
      { name: 'Junior Development', price: '£900/week', desc: 'Learn to row program for juniors aged 12-18 with certified coaches' },
      { name: 'Elite Sculling Camp', price: '£1,800/week', desc: 'Intensive single and double sculling with video analysis and biomechanics' },
      { name: 'Masters Revival', price: '£1,200/week', desc: 'Technique refinement and fitness for rowers returning to the sport' }
    ],
    coaches: [
      { name: 'James Thornton', credential: 'British Rowing Level 4 Coach', background: 'Former GB national team coach with 15 years at Henley. Coached multiple Henley Royal Regatta winners.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English'], instagram: null },
      { name: 'Sophie Williams', credential: 'World Rowing Coach Education', background: 'Olympic silver medallist in womens eight 2016. Specialist in sculling technique.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'French'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?w=800',
      'https://images.unsplash.com/photo-1541689592-1e30e5112ab3?w=800'
    ],
    upcomingCamps: [
      { name: 'Summer Sculling Intensive', startDate: '2025-07-07', endDate: '2025-07-14', price: '£1,800', level: 'Intermediate' },
      { name: 'Junior Learn to Row', startDate: '2025-08-04', endDate: '2025-08-11', price: '£900', level: 'Beginner' },
      { name: 'Pre-Regatta Training Camp', startDate: '2025-06-16', endDate: '2025-06-23', price: '£2,200', level: 'Advanced' },
      { name: 'Autumn Technique Clinic', startDate: '2025-10-06', endDate: '2025-10-10', price: '£1,100', level: 'All Levels' },
      { name: 'Winter Erg Camp', startDate: '2025-12-01', endDate: '2025-12-05', price: '£700', level: 'All Levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Riverside Hotel', pricePerWeek: 700, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Shared Dormitory', pricePerWeek: 350, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Accommodation overlooks the Thames with easy access to the boathouse'
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
      minAge: 12,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Partnership with local schools for term-time training',
      medicalStaff: true,
      safeguarding: 'Full DBS checks, British Rowing safeguarding certified',
      airportPickup: true,
      mealPlan: 'Full board with sports nutrition guidance',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English'],
      emergencyProtocol: '24/7 on-call medical staff, nearest A&E 15 minutes'
    }
  },
  {
    id: 'oxford-university-rowing',
    name: 'Oxford Rowing Academy',
    country: 'UK',
    countryFlag: '🇬🇧',
    city: 'Oxford',
    lat: 51.752,
    lng: -1.258,
    website: 'https://www.oxfordrowingacademy.co.uk',
    contact: '+44 1865 240505',
    contactEmail: 'admissions@oxfordrowingacademy.co.uk',
    description: 'Train on the historic Isis stretch of the Thames in Oxford. A storied rowing tradition combined with modern coaching methods and sport science.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby' },
    priceRange: { from: 850, to: 2200, unit: 'week', display: '£850 - £2,200/week' },
    socialMedia: { instagram: '@oxfordrowingacademy', facebook: 'https://facebook.com/oxfordrowingacademy', twitter: '@oxfordrowing' },
    climate: 'oxford',
    facilities: 'Victorian boathouse, ergometer room, video analysis lab, fleet of 40+ racing shells, gymnasium, river course on the Isis',
    courtSurfaces: ['Sculling', 'Sweep rowing', 'Indoor ergometer'],
    programs: [
      { name: 'Boat Race Prep', price: '£2,000/week', desc: 'High-performance sweep rowing for experienced rowers aiming at competitive racing' },
      { name: 'Sculling Foundations', price: '£850/week', desc: 'Technical sculling course for beginners and improvers' },
      { name: 'Summer Intensive', price: '£1,500/week', desc: 'Full-time rowing program with twice-daily water sessions and gym work' }
    ],
    coaches: [
      { name: 'Richard Palmer', credential: 'British Rowing Level 4', background: 'Former Oxford Blue, coached at 3 World Championships. Expert in crew boat development.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English'], instagram: null },
      { name: 'Anna Kowalski', credential: 'World Rowing Coach Certificate', background: 'Polish national team sculler turned coach. Biomechanics specialist.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Polish'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1569974507005-6dc61f97fb5c?w=800',
      'https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?w=800'
    ],
    upcomingCamps: [
      { name: 'Easter Rowing Camp', startDate: '2025-04-14', endDate: '2025-04-21', price: '£1,200', level: 'Intermediate' },
      { name: 'Summer Eight Week', startDate: '2025-07-14', endDate: '2025-07-21', price: '£1,500', level: 'All Levels' },
      { name: 'October Half-Term', startDate: '2025-10-20', endDate: '2025-10-24', price: '£900', level: 'Beginner' },
      { name: 'Winter Training Block', startDate: '2025-11-10', endDate: '2025-11-14', price: '£800', level: 'Advanced' },
      { name: 'New Year Erg Challenge', startDate: '2026-01-05', endDate: '2026-01-09', price: '£650', level: 'All Levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'College-style Room', pricePerWeek: 550, maxOccupancy: 1, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Twin Room', pricePerWeek: 380, maxOccupancy: 2, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Rooms in partner college accommodation near the boathouse'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-15',
      spotsLeft: 12,
      responseTime: '72h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 13,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Academic tutoring available during term-time programs',
      medicalStaff: true,
      safeguarding: 'British Rowing safeguarding policy, DBS checked staff',
      airportPickup: true,
      mealPlan: 'Full board with nutritionist-designed menus',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English'],
      emergencyProtocol: 'On-site first aid, John Radcliffe Hospital 10 minutes'
    }
  },
  {
    id: 'cambridge-rowing-centre',
    name: 'Cambridge Rowing Centre',
    country: 'UK',
    countryFlag: '🇬🇧',
    city: 'Cambridge',
    lat: 52.205,
    lng: 0.118,
    website: 'https://www.cambridgerowingcentre.co.uk',
    contact: '+44 1223 359750',
    contactEmail: 'info@cambridgerowingcentre.co.uk',
    description: 'World-renowned rowing on the River Cam. Blending centuries of tradition with cutting-edge sport science and coaching excellence.',
    ageGroups: ['Junior', 'Adult', 'Masters'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby' },
    priceRange: { from: 800, to: 2100, unit: 'week', display: '£800 - £2,100/week' },
    socialMedia: { instagram: '@cambridgerowing', facebook: 'https://facebook.com/cambridgerowingcentre', twitter: '@camrowing' },
    climate: 'cambridge',
    facilities: 'Modern boathouse, 50 Concept2 ergometers, video analysis, boat fleet, 3km river course, gym, recovery suite',
    courtSurfaces: ['Sculling', 'Sweep rowing', 'Coastal rowing', 'Indoor ergometer'],
    programs: [
      { name: 'Learn to Row', price: '£800/week', desc: 'Complete beginner course covering safety, technique, and first outings on the Cam' },
      { name: 'Performance Squad', price: '£1,800/week', desc: 'Advanced training for competitive rowers with race preparation' },
      { name: 'Masters Week', price: '£1,100/week', desc: 'Dedicated program for over-27s focusing on fitness and technique' }
    ],
    coaches: [
      { name: 'David Chen', credential: 'British Rowing Level 4', background: 'Cambridge Blue and former lightweight international. 12 years coaching experience.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Mandarin'], instagram: null },
      { name: 'Laura Henderson', credential: 'FISA Coach Education Level 3', background: 'Commonwealth Games medallist, specialist in junior development.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1569974507005-6dc61f97fb5c?w=800',
      'https://images.unsplash.com/photo-1541689592-1e30e5112ab3?w=800'
    ],
    upcomingCamps: [
      { name: 'May Bumps Prep', startDate: '2025-05-26', endDate: '2025-06-02', price: '£1,600', level: 'Advanced' },
      { name: 'Summer Learn to Row', startDate: '2025-07-21', endDate: '2025-07-28', price: '£800', level: 'Beginner' },
      { name: 'Autumn Sculling Clinic', startDate: '2025-09-15', endDate: '2025-09-19', price: '£950', level: 'Intermediate' },
      { name: 'Winter Erg Boot Camp', startDate: '2025-12-08', endDate: '2025-12-12', price: '£600', level: 'All Levels' },
      { name: 'Spring Racing Camp', startDate: '2026-03-09', endDate: '2026-03-13', price: '£1,100', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Riverside B&B', pricePerWeek: 600, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Dormitory', pricePerWeek: 300, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Accommodation within walking distance of the boathouse'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-05-01',
      spotsLeft: 20,
      responseTime: '48h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 11,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Links with local schools for academic continuity',
      medicalStaff: true,
      safeguarding: 'British Rowing safeguarding, all coaches DBS checked',
      airportPickup: true,
      mealPlan: 'Full board with high-performance nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Mandarin'],
      emergencyProtocol: 'On-site paramedic, Addenbrookes Hospital 10 minutes'
    }
  },
  {
    id: 'berlin-rowing-akademie',
    name: 'Berlin Rowing Akademie',
    country: 'Germany',
    countryFlag: '🇩🇪',
    city: 'Berlin',
    lat: 52.457,
    lng: 13.576,
    website: 'https://www.berlinrowingakademie.de',
    contact: '+49 30 6576890',
    contactEmail: 'info@berlinrowingakademie.de',
    description: 'Train on Berlin historic Dahme and Spree rivers. German engineering meets rowing excellence with state-of-the-art facilities and Olympic-level coaching.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Lake Müggelsee nearby for open water rowing' },
    priceRange: { from: 750, to: 1900, unit: 'week', display: '€750 - €1,900/week' },
    socialMedia: { instagram: '@berlinrowing', facebook: 'https://facebook.com/berlinrowingakademie', twitter: '@berlinrowing' },
    climate: 'berlin',
    facilities: 'Modern boathouse on the Spree, ergometer hall, biomechanics lab, boat fleet of 50+ shells, gym, physiotherapy centre, video analysis',
    courtSurfaces: ['Sculling', 'Sweep rowing', 'Indoor ergometer'],
    programs: [
      { name: 'Leistungszentrum', price: '€1,900/week', desc: 'Elite performance program with twice-daily water sessions and sports science support' },
      { name: 'Beginner Course', price: '€750/week', desc: 'Structured introduction to rowing with German methodology' },
      { name: 'Youth Development', price: '€1,100/week', desc: 'Age-appropriate training for junior athletes aged 12-18' }
    ],
    coaches: [
      { name: 'Markus Weber', credential: 'Deutscher Ruderverband A-Lizenz', background: 'Former German national team member. World Championship bronze medallist in mens eight.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['German', 'English'], instagram: null },
      { name: 'Claudia Braun', credential: 'FISA Level 3 Coach', background: 'Olympic rower and biomechanics researcher at Humboldt University.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['German', 'English', 'French'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?w=800',
      'https://images.unsplash.com/photo-1541689592-1e30e5112ab3?w=800'
    ],
    upcomingCamps: [
      { name: 'Summer Sculling Camp', startDate: '2025-07-14', endDate: '2025-07-21', price: '€1,400', level: 'Intermediate' },
      { name: 'Junior Development Week', startDate: '2025-08-11', endDate: '2025-08-18', price: '€1,100', level: 'Beginner' },
      { name: 'Autumn Performance Block', startDate: '2025-10-06', endDate: '2025-10-13', price: '€1,600', level: 'Advanced' },
      { name: 'Winter Erg Intensive', startDate: '2025-12-01', endDate: '2025-12-05', price: '€650', level: 'All Levels' },
      { name: 'Spring Racing Prep', startDate: '2026-03-23', endDate: '2026-03-30', price: '€1,500', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Partner Hotel', pricePerWeek: 500, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Self-catering Apartment', pricePerWeek: 450, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Accommodation near Köpenick with easy transport to boathouse'
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
      minAge: 12,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Partnership with Berlin sports school (Sportschule)',
      medicalStaff: true,
      safeguarding: 'German Olympic Sports Confederation safeguarding standards',
      airportPickup: true,
      mealPlan: 'Full board with German sports nutrition plan',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['German', 'English'],
      emergencyProtocol: '24/7 medical support, Charité Hospital 20 minutes'
    }
  },
  {
    id: 'hamburg-alster-rowing',
    name: 'Hamburg Alster Rowing Centre',
    country: 'Germany',
    countryFlag: '🇩🇪',
    city: 'Hamburg',
    lat: 53.565,
    lng: 10.007,
    website: 'https://www.alsterrowingcentre.de',
    contact: '+49 40 4102580',
    contactEmail: 'info@alsterrowingcentre.de',
    description: 'Row on Hamburg beautiful Alster lakes in the heart of the city. A premier training venue with a tradition stretching back over 150 years.',
    ageGroups: ['Junior', 'Adult', 'Masters'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Urban lakeside location on the Alster' },
    priceRange: { from: 800, to: 2000, unit: 'week', display: '€800 - €2,000/week' },
    socialMedia: { instagram: '@alsterrowing', facebook: 'https://facebook.com/alsterrowing', twitter: '@alsterrowing' },
    climate: 'hamburg',
    facilities: 'Lakeside boathouse, ergometer room, video analysis, fleet of 45 boats, gym, physiotherapy room, 2km lake course',
    courtSurfaces: ['Sculling', 'Sweep rowing', 'Indoor ergometer'],
    programs: [
      { name: 'Alster Sculling Week', price: '€1,400/week', desc: 'Intensive single sculling program on the Outer Alster Lake' },
      { name: 'Beginners Welcome', price: '€800/week', desc: 'Introduction to rowing with expert guidance on water and ergo' },
      { name: 'Competitive Training Camp', price: '€1,800/week', desc: 'Race preparation with regatta simulation and crew selection' }
    ],
    coaches: [
      { name: 'Thomas Schmidt', credential: 'DRV A-Lizenz', background: 'Former German lightweight champion. 20 years coaching at club and national level.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['German', 'English'], instagram: null },
      { name: 'Katrin Fischer', credential: 'FISA Coach Certificate', background: 'European Championship medallist in womens quad. Youth development specialist.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['German', 'English', 'Danish'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?w=800',
      'https://images.unsplash.com/photo-1569974507005-6dc61f97fb5c?w=800'
    ],
    upcomingCamps: [
      { name: 'Alster Summer Camp', startDate: '2025-07-07', endDate: '2025-07-14', price: '€1,400', level: 'All Levels' },
      { name: 'Youth Rowing Week', startDate: '2025-08-04', endDate: '2025-08-11', price: '€1,000', level: 'Beginner' },
      { name: 'Autumn Technique Camp', startDate: '2025-09-29', endDate: '2025-10-03', price: '€900', level: 'Intermediate' },
      { name: 'Winter Indoor Training', startDate: '2025-11-17', endDate: '2025-11-21', price: '€600', level: 'All Levels' },
      { name: 'Spring Head Race Prep', startDate: '2026-02-23', endDate: '2026-03-02', price: '€1,300', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Alster View Hotel', pricePerWeek: 600, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Club Dormitory', pricePerWeek: 320, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Accommodation overlooking the Alster lake'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-15',
      spotsLeft: 15,
      responseTime: '48h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 10,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Cooperation with Hamburg sports gymnasium',
      medicalStaff: true,
      safeguarding: 'DRV safeguarding certification, background-checked coaches',
      airportPickup: true,
      mealPlan: 'Full board with sports nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['German', 'English'],
      emergencyProtocol: 'On-site first aid, UKE Hospital 15 minutes'
    }
  },
  {
    id: 'amsterdam-rowing-academy',
    name: 'Amsterdam Rowing Academy',
    country: 'Netherlands',
    countryFlag: '🇳🇱',
    city: 'Amsterdam',
    lat: 52.352,
    lng: 4.943,
    website: 'https://www.amsterdamrowingacademy.nl',
    contact: '+31 20 6922140',
    contactEmail: 'info@amsterdamrowingacademy.nl',
    description: 'Train on the Amstel River and Bosbaan regatta course. Dutch rowing excellence with a long tradition of Olympic success and innovative coaching.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Canal and river rowing; North Sea coast 30km away' },
    priceRange: { from: 850, to: 2200, unit: 'week', display: '€850 - €2,200/week' },
    socialMedia: { instagram: '@amsterdamrowing', facebook: 'https://facebook.com/amsterdamrowing', twitter: '@adamrowing' },
    climate: 'amsterdam',
    facilities: 'Bosbaan regatta course boathouse, 2km competition course, ergometer hall, video analysis, 55-boat fleet, gym, physiotherapy',
    courtSurfaces: ['Sculling', 'Sweep rowing', 'Coastal rowing', 'Indoor ergometer'],
    programs: [
      { name: 'Dutch Method', price: '€1,600/week', desc: 'Learn the renowned Dutch approach to technique and endurance training' },
      { name: 'Bosbaan Racing Camp', price: '€2,000/week', desc: 'Race simulation and competition preparation on the Olympic Bosbaan course' },
      { name: 'Introductory Course', price: '€850/week', desc: 'Safe and structured introduction to rowing on the Amstel' }
    ],
    coaches: [
      { name: 'Pieter de Vries', credential: 'KNRB Master Coach', background: 'Former Dutch national team coach. Led athletes to multiple Olympic medals.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Dutch', 'English', 'German'], instagram: null },
      { name: 'Anouk Jansen', credential: 'KNRB Level 3', background: 'World Championship gold medallist in womens double sculls. Technique specialist.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Dutch', 'English'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?w=800',
      'https://images.unsplash.com/photo-1541689592-1e30e5112ab3?w=800'
    ],
    upcomingCamps: [
      { name: 'Bosbaan Summer Training', startDate: '2025-07-07', endDate: '2025-07-14', price: '€1,600', level: 'Intermediate' },
      { name: 'Junior Rowing Camp', startDate: '2025-08-04', endDate: '2025-08-11', price: '€1,100', level: 'Beginner' },
      { name: 'Autumn Sculling Clinic', startDate: '2025-10-13', endDate: '2025-10-17', price: '€950', level: 'Intermediate' },
      { name: 'Winter Erg Challenge', startDate: '2025-12-08', endDate: '2025-12-12', price: '€600', level: 'All Levels' },
      { name: 'Spring Regatta Prep', startDate: '2026-03-16', endDate: '2026-03-23', price: '€1,800', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Canal-side Hotel', pricePerWeek: 650, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Shared House', pricePerWeek: 400, maxOccupancy: 3, bathType: 'shared', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Accommodation in Amsterdam-Zuid near the Bosbaan'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-01',
      spotsLeft: 14,
      responseTime: '24h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 12,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Partnership with international schools in Amsterdam',
      medicalStaff: true,
      safeguarding: 'KNRB safeguarding standards, VOG-certified coaches',
      airportPickup: true,
      mealPlan: 'Full board with Dutch and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Dutch', 'English', 'German'],
      emergencyProtocol: 'On-site medic, AMC Hospital 15 minutes'
    }
  },
  {
    id: 'lake-como-rowing',
    name: 'Lake Como Rowing Academy',
    country: 'Italy',
    countryFlag: '🇮🇹',
    city: 'Lake Como',
    lat: 45.994,
    lng: 9.257,
    website: 'https://www.lakecomorowing.it',
    contact: '+39 031 303540',
    contactEmail: 'info@lakecomorowing.it',
    description: 'Row amid the stunning scenery of Lake Como in the Italian Alps. Calm waters and Mediterranean climate create perfect conditions for rowing year-round.',
    ageGroups: ['Junior', 'Adult', 'Masters'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Lakeside location with swimming beaches nearby' },
    priceRange: { from: 900, to: 2400, unit: 'week', display: '€900 - €2,400/week' },
    socialMedia: { instagram: '@comorowing', facebook: 'https://facebook.com/lakecomorowing', twitter: '@comorowing' },
    climate: 'como',
    facilities: 'Lakeside boathouse, ergometer room, video analysis, fleet of 40 boats, gym, physiotherapy, scenic 3km lake course',
    courtSurfaces: ['Sculling', 'Sweep rowing', 'Coastal rowing', 'Indoor ergometer'],
    programs: [
      { name: 'Lake Como Sculling Retreat', price: '€2,000/week', desc: 'Sculling in paradise with twice-daily sessions and video review' },
      { name: 'Junior Academy', price: '€1,200/week', desc: 'Youth development with Italian coaching philosophy' },
      { name: 'Masters Holiday Camp', price: '€1,400/week', desc: 'Combine rowing training with Italian culture and cuisine' }
    ],
    coaches: [
      { name: 'Marco Rossi', credential: 'FIC National Coach', background: 'Former Italian lightweight sculler. 15 years coaching at Canottieri clubs across Italy.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Italian', 'English'], instagram: null },
      { name: 'Elena Bianchi', credential: 'FIC Level 3', background: 'World U23 Championship medallist. Specialist in womens sculling.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Italian', 'English', 'French'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?w=800',
      'https://images.unsplash.com/photo-1569974507005-6dc61f97fb5c?w=800'
    ],
    upcomingCamps: [
      { name: 'Summer on the Lake', startDate: '2025-07-07', endDate: '2025-07-14', price: '€2,000', level: 'All Levels' },
      { name: 'Junior Lake Camp', startDate: '2025-08-04', endDate: '2025-08-11', price: '€1,200', level: 'Beginner' },
      { name: 'Autumn Sculling Week', startDate: '2025-09-22', endDate: '2025-09-29', price: '€1,600', level: 'Intermediate' },
      { name: 'Masters Retreat', startDate: '2025-10-13', endDate: '2025-10-20', price: '€1,400', level: 'All Levels' },
      { name: 'Spring Rowing Holiday', startDate: '2026-04-06', endDate: '2026-04-13', price: '€1,800', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Lakeside Villa', pricePerWeek: 750, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Self-catering Flat', pricePerWeek: 500, maxOccupancy: 3, bathType: 'ensuite', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Beautiful lakeside accommodation with mountain views'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-05-15',
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
      schooling: 'Italian language immersion and tutoring available',
      medicalStaff: true,
      safeguarding: 'FIC safeguarding standards, background-checked staff',
      airportPickup: true,
      mealPlan: 'Full board with Italian cuisine and sports nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Italian', 'English'],
      emergencyProtocol: 'On-site first aid, Ospedale Sant Anna 20 minutes'
    }
  },
  {
    id: 'piedmont-po-rowing',
    name: 'Piedmont Po River Rowing School',
    country: 'Italy',
    countryFlag: '🇮🇹',
    city: 'Piedmont',
    lat: 45.064,
    lng: 7.694,
    website: 'https://www.piedmontrowing.it',
    contact: '+39 011 889450',
    contactEmail: 'info@piedmontrowing.it',
    description: 'Row on the Po River in Turin with views of the Alps. A centre of Italian rowing tradition combining passion, technique, and competitive excellence.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Riverside location; Ligurian coast 150km south' },
    priceRange: { from: 700, to: 1800, unit: 'week', display: '€700 - €1,800/week' },
    socialMedia: { instagram: '@piedmontrowing', facebook: 'https://facebook.com/piedmontrowing', twitter: '@piedmontrowing' },
    climate: 'piedmont',
    facilities: 'Po River boathouse, ergometer room, video analysis, boat fleet, 2.5km river course, gym, physiotherapy',
    courtSurfaces: ['Sculling', 'Sweep rowing', 'Indoor ergometer'],
    programs: [
      { name: 'Po River Training', price: '€1,500/week', desc: 'Intensive rowing on the Po with Italian coaching methods' },
      { name: 'Introduction to Rowing', price: '€700/week', desc: 'Safe first steps into the sport with patient expert instruction' },
      { name: 'Youth Performance', price: '€1,100/week', desc: 'Competitive development for juniors with race exposure' }
    ],
    coaches: [
      { name: 'Alessandro Conti', credential: 'FIC National Coach Level 4', background: 'Former Italian national team member. Specialist in sweep rowing and crew dynamics.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Italian', 'English'], instagram: null },
      { name: 'Francesca Rizzo', credential: 'FIC Level 3', background: 'European U23 medallist. Youth development and sculling coach.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Italian', 'English', 'Spanish'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1541689592-1e30e5112ab3?w=800',
      'https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?w=800'
    ],
    upcomingCamps: [
      { name: 'Summer Po Camp', startDate: '2025-07-14', endDate: '2025-07-21', price: '€1,500', level: 'Intermediate' },
      { name: 'Junior Week', startDate: '2025-08-11', endDate: '2025-08-18', price: '€1,100', level: 'Beginner' },
      { name: 'Autumn Training Block', startDate: '2025-10-06', endDate: '2025-10-10', price: '€800', level: 'All Levels' },
      { name: 'Winter Erg Intensive', startDate: '2025-12-01', endDate: '2025-12-05', price: '€550', level: 'All Levels' },
      { name: 'Spring Racing Prep', startDate: '2026-03-16', endDate: '2026-03-23', price: '€1,400', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Turin City Hotel', pricePerWeek: 500, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Club Residence', pricePerWeek: 300, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Central Turin accommodation with public transport to boathouse'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-01',
      spotsLeft: 20,
      responseTime: '72h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 11,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Cooperation with local schools in Turin',
      medicalStaff: true,
      safeguarding: 'FIC safeguarding, all staff vetted',
      airportPickup: true,
      mealPlan: 'Full board with Italian and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Italian', 'English'],
      emergencyProtocol: 'On-site medic, Molinette Hospital 15 minutes'
    }
  },
  {
    id: 'lucerne-rowing-centre',
    name: 'Lucerne Rowing Centre',
    country: 'Switzerland',
    countryFlag: '🇨🇭',
    city: 'Lucerne',
    lat: 47.045,
    lng: 8.310,
    website: 'https://www.lucernerowing.ch',
    contact: '+41 41 370 2200',
    contactEmail: 'info@lucernerowing.ch',
    description: 'Train on the legendary Rotsee, one of the finest rowing courses in the world and home of the Lucerne International Regatta. Swiss precision coaching at its best.',
    ageGroups: ['Junior', 'Adult', 'Masters'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Lake Lucerne and Rotsee lakeside venue' },
    priceRange: { from: 1200, to: 3000, unit: 'week', display: 'CHF 1,200 - CHF 3,000/week' },
    socialMedia: { instagram: '@lucernerowing', facebook: 'https://facebook.com/lucernerowing', twitter: '@lucernerowing' },
    climate: 'lucerne',
    facilities: 'Rotsee boathouse, world-class 2.1km regatta course, ergometer hall, video analysis, 60-boat fleet, gym, physiotherapy, boat maintenance workshop',
    courtSurfaces: ['Sculling', 'Sweep rowing', 'Indoor ergometer'],
    programs: [
      { name: 'Rotsee Elite Camp', price: 'CHF 3,000/week', desc: 'Train on the World Cup regatta course with international-level coaching' },
      { name: 'Swiss Sculling School', price: 'CHF 1,500/week', desc: 'Technical sculling development with Swiss methodical coaching' },
      { name: 'Introduction Week', price: 'CHF 1,200/week', desc: 'Beginner-friendly start to rowing in a stunning alpine setting' }
    ],
    coaches: [
      { name: 'Stefan Keller', credential: 'Swiss Rowing Federation Master Coach', background: 'Former Swiss Olympic rower, coached at 4 World Championships. Expert in regatta strategy.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['German', 'English', 'French'], instagram: null },
      { name: 'Isabelle Müller', credential: 'FISA Level 3', background: 'World Cup medallist in lightweight double sculls. Biomechanics and technique specialist.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['German', 'French', 'English'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?w=800',
      'https://images.unsplash.com/photo-1569974507005-6dc61f97fb5c?w=800'
    ],
    upcomingCamps: [
      { name: 'Rotsee Summer Camp', startDate: '2025-07-07', endDate: '2025-07-14', price: 'CHF 2,500', level: 'Intermediate' },
      { name: 'Junior Regatta Prep', startDate: '2025-08-04', endDate: '2025-08-11', price: 'CHF 1,800', level: 'Advanced' },
      { name: 'Autumn Sculling Week', startDate: '2025-09-22', endDate: '2025-09-26', price: 'CHF 1,500', level: 'All Levels' },
      { name: 'Winter Erg Camp', startDate: '2025-12-01', endDate: '2025-12-05', price: 'CHF 900', level: 'All Levels' },
      { name: 'Spring Training Block', startDate: '2026-03-23', endDate: '2026-03-30', price: 'CHF 2,200', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Lakeside Hotel', pricePerWeek: 900, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Sports Hostel', pricePerWeek: 550, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Accommodation near the Rotsee with mountain views'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-01',
      spotsLeft: 12,
      responseTime: '24h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 12,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Swiss international school partnerships',
      medicalStaff: true,
      safeguarding: 'Swiss Olympic safeguarding standards',
      airportPickup: true,
      mealPlan: 'Full board with Swiss quality nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['German', 'French', 'English'],
      emergencyProtocol: 'On-site medic, Kantonsspital Luzern 10 minutes'
    }
  },
  {
    id: 'copenhagen-rowing-club',
    name: 'Copenhagen Rowing Academy',
    country: 'Denmark',
    countryFlag: '🇩🇰',
    city: 'Copenhagen',
    lat: 55.676,
    lng: 12.568,
    website: 'https://www.copenhagenrowingacademy.dk',
    contact: '+45 33 15 78 00',
    contactEmail: 'info@copenhagenrowingacademy.dk',
    description: 'Row through Copenhagen scenic harbour and canal system. Danish rowing heritage combined with Scandinavian design and innovation in coaching.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 5, description: 'Amager Strandpark beach 5km from training venue' },
    priceRange: { from: 1000, to: 2500, unit: 'week', display: 'DKK 7,500 - DKK 18,500/week' },
    socialMedia: { instagram: '@cphrowingacademy', facebook: 'https://facebook.com/copenhagenrowing', twitter: '@cphrowing' },
    climate: 'copenhagen',
    facilities: 'Harbour boathouse, ergometer room, video analysis, 35-boat fleet, gym, recovery room, harbour and canal courses',
    courtSurfaces: ['Sculling', 'Sweep rowing', 'Coastal rowing', 'Indoor ergometer'],
    programs: [
      { name: 'Harbour Rowing Camp', price: 'DKK 14,000/week', desc: 'Unique rowing experience through Copenhagen harbour with expert coaching' },
      { name: 'Coastal Rowing Adventure', price: 'DKK 18,000/week', desc: 'Explore the Danish coastline by coastal rowing boat' },
      { name: 'Beginners Programme', price: 'DKK 7,500/week', desc: 'Structured introduction to rowing with Danish coaching methods' }
    ],
    coaches: [
      { name: 'Lars Andersen', credential: 'DFfR Master Coach', background: 'Former Danish national team member. 18 years coaching, multiple national championship titles.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Danish', 'English', 'German'], instagram: null },
      { name: 'Mette Larsen', credential: 'DFfR Level 3', background: 'European Championship medallist in coastal rowing. Specialist in open water rowing.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Danish', 'English', 'Swedish'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?w=800',
      'https://images.unsplash.com/photo-1541689592-1e30e5112ab3?w=800'
    ],
    upcomingCamps: [
      { name: 'Midsummer Rowing Camp', startDate: '2025-06-23', endDate: '2025-06-30', price: 'DKK 14,000', level: 'All Levels' },
      { name: 'Junior Summer Academy', startDate: '2025-07-14', endDate: '2025-07-21', price: 'DKK 10,000', level: 'Beginner' },
      { name: 'Coastal Rowing Week', startDate: '2025-08-18', endDate: '2025-08-25', price: 'DKK 18,000', level: 'Intermediate' },
      { name: 'Autumn Indoor Camp', startDate: '2025-10-20', endDate: '2025-10-24', price: 'DKK 7,000', level: 'All Levels' },
      { name: 'Winter Erg Championship Prep', startDate: '2026-01-12', endDate: '2026-01-16', price: 'DKK 6,000', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Harbour Hotel', pricePerWeek: 700, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Hostel Room', pricePerWeek: 400, maxOccupancy: 3, bathType: 'shared', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Central Copenhagen accommodation near the harbour'
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
      minAge: 12,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Danish international school partnership available',
      medicalStaff: true,
      safeguarding: 'Danish Sports Federation safeguarding, background-checked coaches',
      airportPickup: true,
      mealPlan: 'Full board with Nordic cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Danish', 'English'],
      emergencyProtocol: 'On-site first aid, Rigshospitalet 10 minutes'
    }
  },
  {
    id: 'paris-seine-rowing',
    name: 'Paris Seine Rowing Academy',
    country: 'France',
    countryFlag: '🇫🇷',
    city: 'Paris',
    lat: 48.840,
    lng: 2.274,
    website: 'https://www.parisseinerowing.fr',
    contact: '+33 1 45 67 89 10',
    contactEmail: 'contact@parisseinerowing.fr',
    description: 'Row on the Seine through the heart of Paris. French rowing tradition meets modern sport science at this unique urban training centre.',
    ageGroups: ['Junior', 'Adult', 'Masters'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Urban river location; Paris Plages seasonal beach' },
    priceRange: { from: 950, to: 2500, unit: 'week', display: '€950 - €2,500/week' },
    socialMedia: { instagram: '@parisseinerowing', facebook: 'https://facebook.com/parisseinerowing', twitter: '@seinerowing' },
    climate: 'paris',
    facilities: 'Seine-side boathouse, ergometer room, video analysis, 40-boat fleet, gym, physiotherapy, 2km river course near Ile Seguin',
    courtSurfaces: ['Sculling', 'Sweep rowing', 'Indoor ergometer'],
    programs: [
      { name: 'Seine Experience', price: '€2,000/week', desc: 'Row past Paris iconic landmarks with elite French coaching' },
      { name: 'Technical Sculling', price: '€1,500/week', desc: 'Focused sculling technique development with video feedback' },
      { name: 'Decouverte Aviron', price: '€950/week', desc: 'Discover rowing with a French approach for complete beginners' }
    ],
    coaches: [
      { name: 'Julien Dupont', credential: 'FFA Brevet d Etat Level 3', background: 'Former French national team coach, guided athletes to World Championship medals.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['French', 'English'], instagram: null },
      { name: 'Camille Martin', credential: 'FFA Level 2', background: 'Olympic rower in womens quad. Youth development specialist.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['French', 'English', 'Spanish'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?w=800',
      'https://images.unsplash.com/photo-1541689592-1e30e5112ab3?w=800'
    ],
    upcomingCamps: [
      { name: 'Summer on the Seine', startDate: '2025-07-07', endDate: '2025-07-14', price: '€2,000', level: 'All Levels' },
      { name: 'Junior Academy Week', startDate: '2025-07-21', endDate: '2025-07-28', price: '€1,200', level: 'Beginner' },
      { name: 'Autumn Technique Clinic', startDate: '2025-10-13', endDate: '2025-10-17', price: '€1,100', level: 'Intermediate' },
      { name: 'Winter Erg Camp', startDate: '2025-12-08', endDate: '2025-12-12', price: '€700', level: 'All Levels' },
      { name: 'Spring Regatta Prep', startDate: '2026-04-06', endDate: '2026-04-13', price: '€1,800', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Seine-side Hotel', pricePerWeek: 750, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Paris Apartment', pricePerWeek: 600, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Accommodation in the 15th arrondissement near the boathouse'
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
      minAge: 12,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Partnership with Paris international lycée',
      medicalStaff: true,
      safeguarding: 'FFA safeguarding standards, all coaches certified',
      airportPickup: true,
      mealPlan: 'Full board with French cuisine and sports nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['French', 'English'],
      emergencyProtocol: 'On-site medic, Hôpital Européen Georges-Pompidou 10 minutes'
    }
  },
  {
    id: 'prague-vltava-rowing',
    name: 'Prague Vltava Rowing School',
    country: 'Czech Republic',
    countryFlag: '🇨🇿',
    city: 'Prague',
    lat: 50.068,
    lng: 14.412,
    website: 'https://www.praguerowing.cz',
    contact: '+420 222 510 800',
    contactEmail: 'info@praguerowing.cz',
    description: 'Row on the Vltava River through historic Prague. Czech rowing tradition and affordable world-class training in one of Europe most beautiful cities.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Riverside location in central Prague' },
    priceRange: { from: 500, to: 1400, unit: 'week', display: '€500 - €1,400/week' },
    socialMedia: { instagram: '@praguerowing', facebook: 'https://facebook.com/praguerowing', twitter: '@praguerowing' },
    climate: 'prague',
    facilities: 'Vltava boathouse, ergometer room, video analysis, 30-boat fleet, gym, physiotherapy, 2km river course',
    courtSurfaces: ['Sculling', 'Sweep rowing', 'Indoor ergometer'],
    programs: [
      { name: 'Vltava Training Camp', price: '€1,200/week', desc: 'Intensive rowing on the Vltava with Czech national-level coaches' },
      { name: 'Starter Course', price: '€500/week', desc: 'Affordable introduction to rowing in a stunning European capital' },
      { name: 'Youth Development', price: '€800/week', desc: 'Structured junior program with pathway to competition' }
    ],
    coaches: [
      { name: 'Jan Novak', credential: 'Czech Rowing Federation Level 4', background: 'Former Czech national team coach, 2x Olympian in mens pair.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Czech', 'English', 'German'], instagram: null },
      { name: 'Petra Svobodova', credential: 'CRF Level 3', background: 'World Championship medallist in womens quad. Youth coaching specialist.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Czech', 'English'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1541689592-1e30e5112ab3?w=800',
      'https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?w=800'
    ],
    upcomingCamps: [
      { name: 'Prague Summer Rowing', startDate: '2025-07-07', endDate: '2025-07-14', price: '€1,200', level: 'Intermediate' },
      { name: 'Junior Vltava Camp', startDate: '2025-08-04', endDate: '2025-08-11', price: '€800', level: 'Beginner' },
      { name: 'Autumn Sculling Clinic', startDate: '2025-09-29', endDate: '2025-10-03', price: '€700', level: 'All Levels' },
      { name: 'Winter Erg Challenge', startDate: '2025-12-01', endDate: '2025-12-05', price: '€400', level: 'All Levels' },
      { name: 'Spring Prep Camp', startDate: '2026-03-16', endDate: '2026-03-23', price: '€1,000', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Prague Hotel', pricePerWeek: 400, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Hostel Room', pricePerWeek: 200, maxOccupancy: 3, bathType: 'shared', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Affordable accommodation in Prague historic centre'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-01',
      spotsLeft: 22,
      responseTime: '48h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 10,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Czech international school partnership available',
      medicalStaff: true,
      safeguarding: 'Czech Rowing Federation safeguarding, background-checked coaches',
      airportPickup: true,
      mealPlan: 'Full board with Czech and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Czech', 'English', 'German'],
      emergencyProtocol: 'On-site first aid, VFN Hospital 15 minutes'
    }
  }
];

const CLIMATE_DATA = {
  henley: { avgTemp: 11, summerHigh: 22, winterLow: 2, rainyDays: 120, humidity: 78, description: 'Temperate maritime climate with mild summers and cool winters' },
  oxford: { avgTemp: 11, summerHigh: 22, winterLow: 2, rainyDays: 118, humidity: 77, description: 'Temperate climate with reliable rowing conditions March-October' },
  cambridge: { avgTemp: 10, summerHigh: 22, winterLow: 1, rainyDays: 108, humidity: 76, description: 'Drier than western England, good rowing conditions spring to autumn' },
  berlin: { avgTemp: 10, summerHigh: 25, winterLow: -1, rainyDays: 106, humidity: 72, description: 'Continental climate with warm summers and cold winters' },
  hamburg: { avgTemp: 9, summerHigh: 22, winterLow: 0, rainyDays: 130, humidity: 80, description: 'Maritime-influenced climate, cooler and wetter than inland Germany' },
  amsterdam: { avgTemp: 10, summerHigh: 22, winterLow: 1, rainyDays: 132, humidity: 82, description: 'Maritime climate with mild temperatures and frequent rainfall' },
  como: { avgTemp: 13, summerHigh: 28, winterLow: 1, rainyDays: 95, humidity: 70, description: 'Sub-alpine climate with warm summers and cold but sheltered winters' },
  piedmont: { avgTemp: 12, summerHigh: 28, winterLow: -1, rainyDays: 88, humidity: 68, description: 'Continental climate with hot summers and cold winters, Po Valley fog' },
  lucerne: { avgTemp: 9, summerHigh: 24, winterLow: -2, rainyDays: 128, humidity: 74, description: 'Alpine-influenced climate with cool temperatures and reliable rowing from April-October' },
  copenhagen: { avgTemp: 9, summerHigh: 22, winterLow: 0, rainyDays: 120, humidity: 78, description: 'Maritime Scandinavian climate with mild summers and cool winters' },
  paris: { avgTemp: 12, summerHigh: 25, winterLow: 2, rainyDays: 110, humidity: 74, description: 'Oceanic climate with warm summers and mild winters' },
  prague: { avgTemp: 9, summerHigh: 25, winterLow: -2, rainyDays: 100, humidity: 72, description: 'Continental climate with warm summers and cold winters' }
};

const NEWS_ITEMS = [
  { title: 'World Rowing Championships 2025 Preview', date: '2025-05-10', summary: 'Preview of the upcoming World Rowing Championships with analysis of top contenders across all boat classes.' },
  { title: 'Indoor Rowing Gains Olympic Recognition', date: '2025-04-15', summary: 'World Rowing announces indoor rowing (ergometer) events will feature as demonstration sport at future Olympic Games.' },
  { title: 'Henley Royal Regatta Expands International Entries', date: '2025-03-20', summary: 'Record number of international entries accepted for the 2025 Henley Royal Regatta, with 30+ countries represented.' },
  { title: 'New Boat Technology Revolutionises Sculling', date: '2025-02-28', summary: 'Carbon fibre innovations from Dutch and Swiss manufacturers are producing lighter, faster sculling boats for 2025 season.' },
  { title: 'European Rowing Academies See Record Enrollment', date: '2025-01-15', summary: 'Rowing academies across Europe report 25% increase in youth enrollment driven by post-Olympic interest.' }
];

const COUNTRIES = ['UK', 'Germany', 'Netherlands', 'Italy', 'Switzerland', 'Denmark', 'France', 'Czech Republic'];
