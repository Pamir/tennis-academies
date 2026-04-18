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
  },
  {
    id: 'cork-lee-rowing',
    name: 'Lee River Rowing Academy',
    country: 'Ireland',
    countryFlag: '🇮🇪',
    city: 'Cork',
    lat: 51.897,
    lng: -8.470,
    website: 'https://www.leeriverrowing.ie',
    contact: '+353 21 427 6543',
    contactEmail: 'info@leeriverrowing.ie',
    description: 'Set on the scenic River Lee in Cork, Ireland\'s rowing heartland. A proud tradition of producing Olympic scullers with world-class coaching and sheltered tidal waters.',
    ageGroups: ['Junior', 'Adult', 'Masters'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 25, description: 'Coastal beaches at Crosshaven 25km south' },
    priceRange: { from: 750, to: 2000, unit: 'week', display: '€750 - €2,000/week' },
    socialMedia: { instagram: '@leeriverrowing', facebook: 'https://facebook.com/leeriverrowing', twitter: '@leeriverrow' },
    climate: 'cork',
    facilities: 'Modern boathouse on the Lee, 1.5km sheltered course, 20 Concept2 ergometers, video analysis lab, strength and conditioning gym, physiotherapy suite',
    courtSurfaces: ['Sculling', 'Sweep rowing', 'Indoor ergometer'],
    programs: [
      { name: 'Junior Development', price: '€750/week', desc: 'Introduction to rowing for juniors aged 12-18 on the sheltered Lee' },
      { name: 'Sculling Masterclass', price: '€1,500/week', desc: 'Intensive single and double sculling with Olympic-level coaching and video review' },
      { name: 'Masters Fitness Programme', price: '€1,000/week', desc: 'Technique and endurance for experienced rowers looking to improve race performance' }
    ],
    coaches: [
      { name: 'Ciarán O\'Sullivan', credential: 'Rowing Ireland High Performance Coach', background: 'Former Irish national team sculler with 12 years coaching experience. Multiple national championship titles.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Irish'], instagram: null },
      { name: 'Aoife Murphy', credential: 'World Rowing Level 3 Coach', background: 'European Championships medallist in lightweight double sculls. Specialist in junior development.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Irish'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?w=800',
      'https://images.unsplash.com/photo-1541689592-1e30e5112ab3?w=800'
    ],
    upcomingCamps: [
      { name: 'Summer Sculling Intensive', startDate: '2026-07-06', endDate: '2026-07-13', price: '€1,500', level: 'Intermediate' },
      { name: 'Junior Learn to Row', startDate: '2026-08-03', endDate: '2026-08-10', price: '€750', level: 'Beginner' },
      { name: 'Autumn Head Race Prep', startDate: '2026-10-05', endDate: '2026-10-12', price: '€1,200', level: 'Advanced' },
      { name: 'Winter Erg Training Camp', startDate: '2026-12-07', endDate: '2026-12-11', price: '€600', level: 'All Levels' },
      { name: 'Spring Racing Camp', startDate: '2027-03-23', endDate: '2027-03-30', price: '€1,400', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Riverside Guesthouse', pricePerWeek: 600, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Club Dormitory', pricePerWeek: 300, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Accommodation in the heart of Cork city with river views'
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
      minAge: 12,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Partnership with local Cork schools for term-time training',
      medicalStaff: true,
      safeguarding: 'Rowing Ireland safeguarding certified, Garda vetted coaches',
      airportPickup: true,
      mealPlan: 'Full board with sports nutrition guidance',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Irish'],
      emergencyProtocol: '24/7 on-call medical staff, Cork University Hospital 10 minutes'
    }
  },
  {
    id: 'ghent-rowing-centre',
    name: 'Ghent International Rowing Centre',
    country: 'Belgium',
    countryFlag: '🇧🇪',
    city: 'Ghent',
    lat: 51.054,
    lng: 3.721,
    website: 'https://www.ghentrowingcentre.be',
    contact: '+32 9 233 4567',
    contactEmail: 'info@ghentrowingcentre.be',
    description: 'Located on Ghent\'s historic canal system, offering world-class training on the Watersportbaan regatta course. A hub for Belgian rowing excellence since 1964.',
    ageGroups: ['Junior', 'Adult', 'Masters'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 65, description: 'North Sea coast at Ostend 65km away' },
    priceRange: { from: 800, to: 2200, unit: 'week', display: '€800 - €2,200/week' },
    socialMedia: { instagram: '@ghentrowingcentre', facebook: 'https://facebook.com/ghentrowingcentre', twitter: '@ghentrc' },
    climate: 'ghent',
    facilities: 'International-standard 2km regatta course, modern boathouse, 25 Concept2 ergometers, video analysis, strength gym, recovery pool, sports medicine clinic',
    courtSurfaces: ['Sculling', 'Sweep rowing', 'Indoor ergometer'],
    programs: [
      { name: 'Junior Academy', price: '€800/week', desc: 'Structured rowing development for juniors aged 12-18 on the Watersportbaan' },
      { name: 'Elite Training Camp', price: '€1,800/week', desc: 'High-performance training with Belgian national-level coaches and video biomechanics' },
      { name: 'Masters Rowing Week', price: '€1,100/week', desc: 'Technique and race preparation for competitive masters rowers' }
    ],
    coaches: [
      { name: 'Pieter Van den Berg', credential: 'Belgian Rowing Federation Level 4', background: 'Former Belgian national team coach. Led crews to multiple European Championship medals over 10 years.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Dutch', 'French', 'English'], instagram: null },
      { name: 'Elise Janssens', credential: 'World Rowing Coach Education', background: 'Former Belgian lightweight sculler with World Cup podium finishes. Specialist in technique development.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Dutch', 'English', 'French'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1541689592-1e30e5112ab3?w=800',
      'https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?w=800'
    ],
    upcomingCamps: [
      { name: 'Summer Elite Camp', startDate: '2026-07-13', endDate: '2026-07-20', price: '€1,800', level: 'Advanced' },
      { name: 'Junior Development Week', startDate: '2026-08-10', endDate: '2026-08-17', price: '€800', level: 'Beginner' },
      { name: 'Autumn Racing Prep', startDate: '2026-10-12', endDate: '2026-10-19', price: '€1,400', level: 'Intermediate' },
      { name: 'Winter Indoor Camp', startDate: '2027-01-11', endDate: '2027-01-15', price: '€650', level: 'All Levels' },
      { name: 'Spring Regatta Training', startDate: '2027-04-06', endDate: '2027-04-13', price: '€1,600', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Canal-side Hotel', pricePerWeek: 650, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Athletes Residence', pricePerWeek: 320, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Accommodation near the Watersportbaan with easy access to Ghent city centre'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-06-15',
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
      schooling: 'Belgian international school partnership for term-time students',
      medicalStaff: true,
      safeguarding: 'Belgian Rowing Federation safeguarding, background-checked coaches',
      airportPickup: true,
      mealPlan: 'Full board with Belgian and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Dutch', 'French', 'English'],
      emergencyProtocol: 'On-site medical staff, UZ Gent Hospital 10 minutes'
    }
  },
  {
    id: 'poznan-maltanske-rowing',
    name: 'Poznań Maltańskie Rowing Academy',
    country: 'Poland',
    countryFlag: '🇵🇱',
    city: 'Poznań',
    lat: 52.402,
    lng: 16.962,
    website: 'https://www.poznanrowing.pl',
    contact: '+48 61 835 2100',
    contactEmail: 'info@poznanrowing.pl',
    description: 'Training on the legendary Maltańskie Lake, host of international regattas and one of Europe\'s finest rowing venues. Poland\'s premier rowing development centre.',
    ageGroups: ['Junior', 'Adult', 'Masters'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Lakeside location on Maltańskie Lake' },
    priceRange: { from: 450, to: 1200, unit: 'week', display: '€450 - €1,200/week' },
    socialMedia: { instagram: '@poznanrowing', facebook: 'https://facebook.com/poznanrowing', twitter: '@poznanrow' },
    climate: 'poznan',
    facilities: '2km international regatta course, modern boathouse, 30 Concept2 ergometers, biomechanics lab, strength training centre, sauna and recovery facilities',
    courtSurfaces: ['Sculling', 'Sweep rowing', 'Indoor ergometer'],
    programs: [
      { name: 'Junior Academy', price: '€450/week', desc: 'Learn to row and development programme for juniors on Maltańskie Lake' },
      { name: 'Performance Training', price: '€900/week', desc: 'Intensive racing preparation with Polish national-level coaching and video analysis' },
      { name: 'Masters Recreation', price: '€600/week', desc: 'Technique improvement and fitness for recreational and competitive masters' }
    ],
    coaches: [
      { name: 'Tomasz Kowalski', credential: 'Polish Rowing Association Level 4 Coach', background: 'Former Polish national team member with World Championship experience. 14 years coaching at Maltańskie Lake.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Polish', 'English', 'German'], instagram: null },
      { name: 'Katarzyna Nowak', credential: 'World Rowing Coach Education', background: 'European U23 medallist in women\'s four. Specialist in junior athlete development.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Polish', 'English'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?w=800',
      'https://images.unsplash.com/photo-1541689592-1e30e5112ab3?w=800'
    ],
    upcomingCamps: [
      { name: 'Summer Regatta Camp', startDate: '2026-07-06', endDate: '2026-07-13', price: '€900', level: 'Intermediate' },
      { name: 'Junior Rowing Week', startDate: '2026-08-03', endDate: '2026-08-10', price: '€450', level: 'Beginner' },
      { name: 'Autumn Endurance Camp', startDate: '2026-09-28', endDate: '2026-10-05', price: '€750', level: 'All Levels' },
      { name: 'Winter Erg Challenge', startDate: '2026-12-14', endDate: '2026-12-18', price: '€350', level: 'All Levels' },
      { name: 'Spring Racing Prep', startDate: '2027-04-13', endDate: '2027-04-20', price: '€850', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Lakeside Hotel', pricePerWeek: 400, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Sports Centre Dormitory', pricePerWeek: 200, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Affordable accommodation near Maltańskie Lake with full amenities'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-06-01',
      spotsLeft: 24,
      responseTime: '24h',
      privateLessons: true,
      yearRound: false
    },
    juniorInfo: {
      minAge: 11,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Partnership with Poznań international school',
      medicalStaff: true,
      safeguarding: 'Polish Rowing Association safeguarding, verified coaching staff',
      airportPickup: true,
      mealPlan: 'Full board with Polish and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Polish', 'English', 'German'],
      emergencyProtocol: 'On-site first aid, Poznań City Hospital 12 minutes'
    }
  },
  {
    id: 'szeged-olympic-rowing',
    name: 'Szeged Olympic Rowing Centre',
    country: 'Hungary',
    countryFlag: '🇭🇺',
    city: 'Szeged',
    lat: 46.253,
    lng: 20.148,
    website: 'https://www.szegedrowing.hu',
    contact: '+36 62 544 321',
    contactEmail: 'info@szegedrowing.hu',
    description: 'Hungary\'s flagship Olympic rowing and canoe-sprint training centre on the Maty-ér course in Szeged. Regularly hosts World Cup and international regattas in a purpose-built venue.',
    ageGroups: ['Junior', 'Adult', 'Masters'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Purpose-built regatta lake venue' },
    priceRange: { from: 400, to: 1100, unit: 'week', display: '€400 - €1,100/week' },
    socialMedia: { instagram: '@szegedrowing', facebook: 'https://facebook.com/szegedrowing', twitter: '@szegedrow' },
    climate: 'szeged',
    facilities: 'Olympic-standard 2km regatta course, grandstand, 40 ergometers, sports science laboratory, strength gym, hydrotherapy pool, athlete village',
    courtSurfaces: ['Sculling', 'Sweep rowing', 'Indoor ergometer'],
    programs: [
      { name: 'Junior Olympic Pathway', price: '€400/week', desc: 'Structured development for junior rowers aspiring to national and international competition' },
      { name: 'Elite Performance Camp', price: '€900/week', desc: 'High-intensity training with Hungarian Olympic coaching staff and sports science support' },
      { name: 'Masters Training Week', price: '€550/week', desc: 'Technique and fitness programme for masters rowers on the Olympic course' }
    ],
    coaches: [
      { name: 'László Horváth', credential: 'Hungarian Rowing Federation Master Coach', background: 'Former Hungarian Olympic rowing coach. Developed multiple World Championship medallists over 20 years.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Hungarian', 'English', 'German'], instagram: null },
      { name: 'Eszter Balogh', credential: 'World Rowing Level 3 Coach', background: 'Olympic finalist in women\'s double sculls. Now leads junior development at Szeged.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Hungarian', 'English'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1541689592-1e30e5112ab3?w=800',
      'https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?w=800'
    ],
    upcomingCamps: [
      { name: 'Summer Olympic Camp', startDate: '2026-07-13', endDate: '2026-07-20', price: '€900', level: 'Advanced' },
      { name: 'Junior Development Week', startDate: '2026-08-10', endDate: '2026-08-17', price: '€400', level: 'Beginner' },
      { name: 'Autumn Performance Block', startDate: '2026-10-05', endDate: '2026-10-12', price: '€700', level: 'Intermediate' },
      { name: 'Winter Erg and Strength', startDate: '2027-01-12', endDate: '2027-01-16', price: '€300', level: 'All Levels' },
      { name: 'Spring Regatta Prep', startDate: '2027-04-06', endDate: '2027-04-13', price: '€800', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Athlete Village Suite', pricePerWeek: 380, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Training Centre Dormitory', pricePerWeek: 180, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'On-site athlete village at the Olympic venue with full sports facilities'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-06-01',
      spotsLeft: 28,
      responseTime: '24h',
      privateLessons: true,
      yearRound: false
    },
    juniorInfo: {
      minAge: 11,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Hungarian sports school programme available',
      medicalStaff: true,
      safeguarding: 'Hungarian Rowing Federation safeguarding, vetted coaching staff',
      airportPickup: true,
      mealPlan: 'Full board with Hungarian and international sports nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Hungarian', 'English', 'German'],
      emergencyProtocol: 'On-site sports medicine team, Szeged University Hospital 10 minutes'
    }
  },
  {
    id: 'linz-danube-rowing',
    name: 'Linz Danube Rowing Academy',
    country: 'Austria',
    countryFlag: '🇦🇹',
    city: 'Linz',
    lat: 48.306,
    lng: 14.286,
    website: 'https://www.linzrowing.at',
    contact: '+43 732 775 432',
    contactEmail: 'info@linzrowing.at',
    description: 'Premier Austrian rowing academy on the Danube in Linz, with a purpose-built regatta course and stunning alpine backdrop. Hosts the annual Linz International Regatta.',
    ageGroups: ['Junior', 'Adult', 'Masters'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Danube riverside location with regatta course' },
    priceRange: { from: 700, to: 1900, unit: 'week', display: '€700 - €1,900/week' },
    socialMedia: { instagram: '@linzrowing', facebook: 'https://facebook.com/linzrowing', twitter: '@linzrow' },
    climate: 'linz',
    facilities: '2km Danube regatta course, boathouse with 50+ shells, 25 Concept2 ergometers, video analysis, strength and conditioning centre, sports physiotherapy',
    courtSurfaces: ['Sculling', 'Sweep rowing', 'Indoor ergometer'],
    programs: [
      { name: 'Junior Rowing Academy', price: '€700/week', desc: 'Development programme for juniors on the Danube with Austrian certified coaches' },
      { name: 'Danube Performance Camp', price: '€1,500/week', desc: 'Intensive race training with biomechanical analysis and periodised programming' },
      { name: 'Masters Technique Course', price: '€950/week', desc: 'Stroke refinement and racing strategy for masters competitors' }
    ],
    coaches: [
      { name: 'Markus Gruber', credential: 'Austrian Rowing Federation Level 4 Coach', background: 'Former Austrian national team rower with World Championship experience. 16 years coaching in Linz.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['German', 'English'], instagram: null },
      { name: 'Anna Steiner', credential: 'World Rowing Coach Education', background: 'European Championships bronze medallist in women\'s quadruple sculls. Focuses on sculling technique.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['German', 'English', 'Italian'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?w=800',
      'https://images.unsplash.com/photo-1541689592-1e30e5112ab3?w=800'
    ],
    upcomingCamps: [
      { name: 'Summer Danube Camp', startDate: '2026-07-06', endDate: '2026-07-13', price: '€1,500', level: 'Intermediate' },
      { name: 'Junior Learn to Row', startDate: '2026-08-03', endDate: '2026-08-10', price: '€700', level: 'Beginner' },
      { name: 'Autumn Head Race Prep', startDate: '2026-10-05', endDate: '2026-10-12', price: '€1,200', level: 'Advanced' },
      { name: 'Winter Erg Programme', startDate: '2026-12-07', endDate: '2026-12-11', price: '€550', level: 'All Levels' },
      { name: 'Spring Regatta Camp', startDate: '2027-03-30', endDate: '2027-04-06', price: '€1,300', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Danube View Hotel', pricePerWeek: 600, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Sports Centre Residence', pricePerWeek: 300, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Accommodation overlooking the Danube near the Linz regatta course'
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
      minAge: 12,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Austrian sports school partnership for academic support',
      medicalStaff: true,
      safeguarding: 'Austrian Rowing Federation safeguarding, police-checked coaches',
      airportPickup: true,
      mealPlan: 'Full board with Austrian and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['German', 'English'],
      emergencyProtocol: 'On-site first aid, Kepler University Hospital 8 minutes'
    }
  },
  {
    id: 'seville-guadalquivir-rowing',
    name: 'Seville Guadalquivir Rowing Academy',
    country: 'Spain',
    countryFlag: '🇪🇸',
    city: 'Seville',
    lat: 37.382,
    lng: -5.990,
    website: 'https://www.sevillarowing.es',
    contact: '+34 954 23 45 67',
    contactEmail: 'info@sevillarowing.es',
    description: 'Train on the mighty Guadalquivir River in Seville, Spain\'s rowing capital. Year-round warm weather and a 2km canalised course make this an ideal winter training base for European crews.',
    ageGroups: ['Junior', 'Adult', 'Masters'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 90, description: 'Atlantic coast beaches at Cádiz 90km south' },
    priceRange: { from: 600, to: 1600, unit: 'week', display: '€600 - €1,600/week' },
    socialMedia: { instagram: '@sevillarowing', facebook: 'https://facebook.com/sevillarowing', twitter: '@sevillarow' },
    climate: 'seville',
    facilities: '2km canalised Guadalquivir course, modern boathouse, 20 ergometers, outdoor training terrace, video analysis, strength gym, recovery pool',
    courtSurfaces: ['Sculling', 'Sweep rowing', 'Indoor ergometer'],
    programs: [
      { name: 'Junior Development', price: '€600/week', desc: 'Youth rowing programme on the Guadalquivir with qualified Spanish coaches' },
      { name: 'Winter Training Camp', price: '€1,300/week', desc: 'Warm-weather training block for European clubs and athletes seeking winter kilometres' },
      { name: 'Masters Andalusia Week', price: '€850/week', desc: 'Relaxed rowing combined with cultural exploration of Seville for masters rowers' }
    ],
    coaches: [
      { name: 'Alejandro Ruiz', credential: 'Spanish Rowing Federation Level 4', background: 'Former Spanish national team sweep rower. Olympic Games participant and 15 years coaching on the Guadalquivir.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Spanish', 'English'], instagram: null },
      { name: 'María García', credential: 'World Rowing Coach Education', background: 'World U23 Championships medallist in women\'s pair. Specialist in sweep rowing technique.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Spanish', 'English', 'French'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1541689592-1e30e5112ab3?w=800',
      'https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?w=800'
    ],
    upcomingCamps: [
      { name: 'Winter Sun Camp', startDate: '2026-01-12', endDate: '2026-01-19', price: '€1,300', level: 'Intermediate' },
      { name: 'Junior Spring Camp', startDate: '2026-04-06', endDate: '2026-04-13', price: '€600', level: 'Beginner' },
      { name: 'Summer Sculling Intensive', startDate: '2026-06-29', endDate: '2026-07-06', price: '€1,400', level: 'Advanced' },
      { name: 'Autumn Endurance Block', startDate: '2026-10-19', endDate: '2026-10-26', price: '€1,000', level: 'All Levels' },
      { name: 'Pre-Season Training Camp', startDate: '2027-02-08', endDate: '2027-02-15', price: '€1,200', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Riverside Aparthotel', pricePerWeek: 500, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Athletes Hostel', pricePerWeek: 250, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Accommodation in central Seville with easy access to the Guadalquivir'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-01-05',
      spotsLeft: 20,
      responseTime: '24h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 12,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Spanish international school partnership available',
      medicalStaff: true,
      safeguarding: 'Spanish Rowing Federation safeguarding, background-checked coaches',
      airportPickup: true,
      mealPlan: 'Full board with Mediterranean sports nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Spanish', 'English'],
      emergencyProtocol: 'On-site first aid, Hospital Virgen del Rocío 10 minutes'
    }
  },
  {
    id: 'porto-douro-rowing',
    name: 'Porto Douro Rowing Academy',
    country: 'Portugal',
    countryFlag: '🇵🇹',
    city: 'Porto',
    lat: 41.151,
    lng: -8.610,
    website: 'https://www.portorowing.pt',
    contact: '+351 22 340 5678',
    contactEmail: 'info@portorowing.pt',
    description: 'Row on the stunning Douro River beneath Porto\'s iconic bridges. A growing centre for Portuguese rowing with excellent facilities and a mild Atlantic climate ideal for year-round training.',
    ageGroups: ['Junior', 'Adult', 'Masters'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 5, description: 'Atlantic beaches at Foz do Douro 5km west' },
    priceRange: { from: 550, to: 1400, unit: 'week', display: '€550 - €1,400/week' },
    socialMedia: { instagram: '@portorowing', facebook: 'https://facebook.com/portorowing', twitter: '@portorow' },
    climate: 'porto',
    facilities: '1.5km river course on the Douro, modern boathouse, 18 Concept2 ergometers, video coaching, gym, physiotherapy room, meeting facilities',
    courtSurfaces: ['Sculling', 'Sweep rowing', 'Indoor ergometer'],
    programs: [
      { name: 'Junior Douro Programme', price: '€550/week', desc: 'Introduction to rowing for juniors on the scenic Douro River' },
      { name: 'Performance Sculling Camp', price: '€1,200/week', desc: 'Intensive sculling technique and race preparation with Portuguese national coaches' },
      { name: 'Masters Discovery Week', price: '€750/week', desc: 'Combined rowing and cultural experience for masters rowers in Porto' }
    ],
    coaches: [
      { name: 'João Ferreira', credential: 'Portuguese Rowing Federation Level 4', background: 'Former Portuguese national team sculler with European Championships experience. 10 years coaching in Porto.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Portuguese', 'English', 'Spanish'], instagram: null },
      { name: 'Ana Santos', credential: 'World Rowing Level 3 Coach', background: 'Portuguese national champion in women\'s single sculls. Specialist in junior pathway development.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Portuguese', 'English'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?w=800',
      'https://images.unsplash.com/photo-1541689592-1e30e5112ab3?w=800'
    ],
    upcomingCamps: [
      { name: 'Summer Douro Camp', startDate: '2026-07-06', endDate: '2026-07-13', price: '€1,200', level: 'Intermediate' },
      { name: 'Junior Learn to Row', startDate: '2026-08-10', endDate: '2026-08-17', price: '€550', level: 'Beginner' },
      { name: 'Autumn Technique Clinic', startDate: '2026-10-12', endDate: '2026-10-16', price: '€800', level: 'All Levels' },
      { name: 'Winter Training Block', startDate: '2027-01-11', endDate: '2027-01-18', price: '€1,000', level: 'Advanced' },
      { name: 'Spring Racing Camp', startDate: '2027-04-06', endDate: '2027-04-13', price: '€1,100', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Douro Riverside Hotel', pricePerWeek: 480, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Club Residence', pricePerWeek: 230, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Accommodation in Porto\'s Ribeira district with Douro views'
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
      minAge: 12,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Portuguese international school partnership available',
      medicalStaff: true,
      safeguarding: 'Portuguese Rowing Federation safeguarding, background-checked coaches',
      airportPickup: true,
      mealPlan: 'Full board with Portuguese and Mediterranean cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Portuguese', 'English', 'Spanish'],
      emergencyProtocol: 'On-site first aid, Hospital de São João 12 minutes'
    }
  },
  {
    id: 'bucharest-snagov-rowing',
    name: 'Snagov Lake Rowing Centre',
    country: 'Romania',
    countryFlag: '🇷🇴',
    city: 'Bucharest',
    lat: 44.700,
    lng: 26.157,
    website: 'https://www.snagovrowing.ro',
    contact: '+40 21 312 4567',
    contactEmail: 'info@snagovrowing.ro',
    description: 'Romania\'s national rowing centre on tranquil Snagov Lake north of Bucharest. A historic training venue that has produced Olympic champions, now open to international athletes.',
    ageGroups: ['Junior', 'Adult', 'Masters'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Lakeside location on Snagov Lake' },
    priceRange: { from: 350, to: 900, unit: 'week', display: '€350 - €900/week' },
    socialMedia: { instagram: '@snagovrowing', facebook: 'https://facebook.com/snagovrowing', twitter: '@snagovrow' },
    climate: 'bucharest',
    facilities: '2km lake course, national rowing centre boathouse, 30 Concept2 ergometers, sports science lab, outdoor gym, sauna, lakeside recovery area',
    courtSurfaces: ['Sculling', 'Sweep rowing', 'Indoor ergometer'],
    programs: [
      { name: 'Junior National Pathway', price: '€350/week', desc: 'Development programme following the Romanian rowing system for junior athletes' },
      { name: 'Elite Lake Camp', price: '€750/week', desc: 'High-performance training with Romanian national coaches and sports science testing' },
      { name: 'Masters Lake Week', price: '€500/week', desc: 'Relaxed technique and fitness week for masters on beautiful Snagov Lake' }
    ],
    coaches: [
      { name: 'Dragoș Popescu', credential: 'Romanian Rowing Federation Master Coach', background: 'Former Romanian Olympic rower with 20 years coaching experience. Multiple national championship-winning coach.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Romanian', 'English', 'French'], instagram: null },
      { name: 'Elena Ionescu', credential: 'World Rowing Coach Education', background: 'World Championships medallist in women\'s eight. Specialist in crew boat coaching.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Romanian', 'English'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1541689592-1e30e5112ab3?w=800',
      'https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?w=800'
    ],
    upcomingCamps: [
      { name: 'Summer Lake Camp', startDate: '2026-07-13', endDate: '2026-07-20', price: '€750', level: 'Intermediate' },
      { name: 'Junior Development Week', startDate: '2026-08-03', endDate: '2026-08-10', price: '€350', level: 'Beginner' },
      { name: 'Autumn Endurance Camp', startDate: '2026-09-28', endDate: '2026-10-05', price: '€600', level: 'All Levels' },
      { name: 'Winter Training Block', startDate: '2026-12-07', endDate: '2026-12-11', price: '€250', level: 'All Levels' },
      { name: 'Spring Race Prep', startDate: '2027-03-23', endDate: '2027-03-30', price: '€700', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Lakeside Lodge', pricePerWeek: 300, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Training Centre Dormitory', pricePerWeek: 150, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Affordable lakeside accommodation at the national rowing centre'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-06-01',
      spotsLeft: 30,
      responseTime: '24h',
      privateLessons: true,
      yearRound: false
    },
    juniorInfo: {
      minAge: 11,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Romanian sports school programme available',
      medicalStaff: true,
      safeguarding: 'Romanian Rowing Federation safeguarding, background-checked coaches',
      airportPickup: true,
      mealPlan: 'Full board with Romanian and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Romanian', 'English', 'French'],
      emergencyProtocol: 'On-site first aid, Bucharest Emergency Hospital 30 minutes'
    }
  },
  {
    id: 'zagreb-jarun-rowing',
    name: 'Zagreb Jarun Rowing Academy',
    country: 'Croatia',
    countryFlag: '🇭🇷',
    city: 'Zagreb',
    lat: 45.781,
    lng: 15.920,
    website: 'https://www.zagrebrowing.hr',
    contact: '+385 1 383 4567',
    contactEmail: 'info@zagrebrowing.hr',
    description: 'Train on Lake Jarun, Zagreb\'s purpose-built regatta course created for the 1987 World University Games. Croatia\'s leading rowing academy with international-standard facilities.',
    ageGroups: ['Junior', 'Adult', 'Masters'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Lakeside location on Lake Jarun regatta course' },
    priceRange: { from: 450, to: 1200, unit: 'week', display: '€450 - €1,200/week' },
    socialMedia: { instagram: '@zagrebrowing', facebook: 'https://facebook.com/zagrebrowing', twitter: '@zagrebrow' },
    climate: 'zagreb',
    facilities: '2km regatta course on Lake Jarun, modern boathouse, 22 Concept2 ergometers, video analysis suite, strength gym, outdoor training area, physiotherapy',
    courtSurfaces: ['Sculling', 'Sweep rowing', 'Indoor ergometer'],
    programs: [
      { name: 'Junior Lake Programme', price: '€450/week', desc: 'Youth development rowing on Lake Jarun with Croatian national coaches' },
      { name: 'Performance Camp', price: '€1,000/week', desc: 'Intensive training camp with race simulation and biomechanics analysis' },
      { name: 'Masters Adriatic Week', price: '€650/week', desc: 'Technique and fitness for masters with optional Adriatic coast excursion' }
    ],
    coaches: [
      { name: 'Ivan Kovačević', credential: 'Croatian Rowing Federation Level 4', background: 'Former Croatian national team rower and Olympian. 12 years coaching on Lake Jarun with multiple national titles.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Croatian', 'English', 'German'], instagram: null },
      { name: 'Maja Petrović', credential: 'World Rowing Level 3 Coach', background: 'European Championships medallist in women\'s quadruple sculls. Specialist in junior and U23 development.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Croatian', 'English'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?w=800',
      'https://images.unsplash.com/photo-1541689592-1e30e5112ab3?w=800'
    ],
    upcomingCamps: [
      { name: 'Summer Jarun Camp', startDate: '2026-07-06', endDate: '2026-07-13', price: '€1,000', level: 'Intermediate' },
      { name: 'Junior Development Week', startDate: '2026-08-10', endDate: '2026-08-17', price: '€450', level: 'Beginner' },
      { name: 'Autumn Technique Clinic', startDate: '2026-10-05', endDate: '2026-10-09', price: '€600', level: 'All Levels' },
      { name: 'Winter Indoor Camp', startDate: '2027-01-11', endDate: '2027-01-15', price: '€350', level: 'All Levels' },
      { name: 'Spring Regatta Prep', startDate: '2027-04-06', endDate: '2027-04-13', price: '€900', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Jarun Lakeside Hotel', pricePerWeek: 420, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Sports Centre Dormitory', pricePerWeek: 200, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Accommodation at Lake Jarun with access to Zagreb city centre'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-06-01',
      spotsLeft: 20,
      responseTime: '24h',
      privateLessons: true,
      yearRound: false
    },
    juniorInfo: {
      minAge: 11,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Croatian international school partnership available',
      medicalStaff: true,
      safeguarding: 'Croatian Rowing Federation safeguarding, background-checked coaches',
      airportPickup: true,
      mealPlan: 'Full board with Croatian and Mediterranean cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Croatian', 'English', 'German'],
      emergencyProtocol: 'On-site first aid, KBC Zagreb Hospital 12 minutes'
    }
  },
  {
    id: 'stockholm-rowing-centre',
    name: 'Stockholm Rowing Centre',
    country: 'Sweden',
    countryFlag: '🇸🇪',
    city: 'Stockholm',
    lat: 59.329,
    lng: 18.069,
    website: 'https://www.stockholmrowing.se',
    contact: '+46 8 612 3456',
    contactEmail: 'info@stockholmrowing.se',
    description: 'Row through Stockholm\'s stunning archipelago waterways. Sweden\'s premier rowing academy combines Scandinavian coaching excellence with unique open-water and lake training.',
    ageGroups: ['Junior', 'Adult', 'Masters'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 3, description: 'Lake and archipelago beaches within 3km' },
    priceRange: { from: 900, to: 2400, unit: 'week', display: '9,000 - 24,000 SEK/week' },
    socialMedia: { instagram: '@stockholmrowing', facebook: 'https://facebook.com/stockholmrowing', twitter: '@sthlmrow' },
    climate: 'stockholm',
    facilities: 'Lake Mälaren course, archipelago open-water routes, modern boathouse, 20 Concept2 ergometers, video analysis, strength gym, sauna, recovery facilities',
    courtSurfaces: ['Sculling', 'Sweep rowing', 'Indoor ergometer'],
    programs: [
      { name: 'Junior Nordic Programme', price: '9,000 SEK/week', desc: 'Youth rowing development on Lake Mälaren with Swedish federation coaches' },
      { name: 'Elite Sculling Camp', price: '20,000 SEK/week', desc: 'Intensive sculling training with Nordic champions and open-water experience' },
      { name: 'Masters Archipelago Week', price: '14,000 SEK/week', desc: 'Scenic rowing and technique for masters through Stockholm\'s waterways' }
    ],
    coaches: [
      { name: 'Erik Lindström', credential: 'Swedish Rowing Federation Level 4', background: 'Former Swedish Olympic rower in men\'s pair. 14 years coaching at national level with World Championship crews.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Swedish', 'English'], instagram: null },
      { name: 'Astrid Bergman', credential: 'World Rowing Coach Education', background: 'Swedish national champion in women\'s single sculls. Specialist in sculling biomechanics.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Swedish', 'English', 'Norwegian'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1541689592-1e30e5112ab3?w=800',
      'https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?w=800'
    ],
    upcomingCamps: [
      { name: 'Midsummer Rowing Camp', startDate: '2026-06-22', endDate: '2026-06-29', price: '20,000 SEK', level: 'Intermediate' },
      { name: 'Junior Summer Academy', startDate: '2026-07-13', endDate: '2026-07-20', price: '9,000 SEK', level: 'Beginner' },
      { name: 'Autumn Head Race Prep', startDate: '2026-09-28', endDate: '2026-10-05', price: '16,000 SEK', level: 'Advanced' },
      { name: 'Winter Erg Camp', startDate: '2026-12-07', endDate: '2026-12-11', price: '7,000 SEK', level: 'All Levels' },
      { name: 'Spring Open Water Camp', startDate: '2027-05-04', endDate: '2027-05-11', price: '18,000 SEK', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Waterfront Hotel', pricePerWeek: 7000, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Club Residence', pricePerWeek: 3500, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Accommodation on Stockholm\'s waterfront with archipelago views'
    },
    availability: {
      status: 'limited',
      nextIntake: '2026-06-01',
      spotsLeft: 10,
      responseTime: '48h',
      privateLessons: true,
      yearRound: false
    },
    juniorInfo: {
      minAge: 12,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Swedish international school partnership for term-time athletes',
      medicalStaff: true,
      safeguarding: 'Swedish Rowing Federation safeguarding, police-checked coaches',
      airportPickup: true,
      mealPlan: 'Full board with Scandinavian and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Swedish', 'English'],
      emergencyProtocol: 'On-site first aid, Karolinska Hospital 15 minutes'
    }
  },
  {
    id: 'oslo-rowing-academy',
    name: 'Oslo Fjord Rowing Academy',
    country: 'Norway',
    countryFlag: '🇳🇴',
    city: 'Oslo',
    lat: 59.913,
    lng: 10.752,
    website: 'https://www.oslorowing.no',
    contact: '+47 22 45 67 89',
    contactEmail: 'info@oslorowing.no',
    description: 'Train on the Oslo Fjord and inland lakes with Norway\'s premier rowing academy. Midnight sun summer training and world-class Scandinavian coaching in a spectacular natural setting.',
    ageGroups: ['Junior', 'Adult', 'Masters'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 2, description: 'Oslo Fjord beaches within 2km' },
    priceRange: { from: 1000, to: 2600, unit: 'week', display: '10,000 - 26,000 NOK/week' },
    socialMedia: { instagram: '@oslorowing', facebook: 'https://facebook.com/oslorowing', twitter: '@oslorow' },
    climate: 'oslo',
    facilities: 'Fjord and lake training courses, modern boathouse, 22 Concept2 ergometers, indoor training hall, video analysis, strength centre, sauna and cold plunge',
    courtSurfaces: ['Sculling', 'Sweep rowing', 'Indoor ergometer'],
    programs: [
      { name: 'Junior Fjord Programme', price: '10,000 NOK/week', desc: 'Youth development rowing on the Oslo Fjord with Norwegian certified coaches' },
      { name: 'Elite Summer Camp', price: '22,000 NOK/week', desc: 'Intensive training exploiting extended daylight hours with Norwegian Olympic coaching' },
      { name: 'Masters Fjord Experience', price: '15,000 NOK/week', desc: 'Scenic fjord rowing combined with technique improvement for masters rowers' }
    ],
    coaches: [
      { name: 'Olav Henriksen', credential: 'Norwegian Rowing Federation Level 4', background: 'Former Norwegian Olympic double sculls rower. 18 years coaching experience with World Championship crews.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Norwegian', 'English', 'Swedish'], instagram: null },
      { name: 'Ingrid Larsen', credential: 'World Rowing Coach Education', background: 'Norwegian national champion in women\'s single sculls. Specialist in sculling technique and winter training.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Norwegian', 'English'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?w=800',
      'https://images.unsplash.com/photo-1541689592-1e30e5112ab3?w=800'
    ],
    upcomingCamps: [
      { name: 'Midnight Sun Camp', startDate: '2026-06-22', endDate: '2026-06-29', price: '22,000 NOK', level: 'Intermediate' },
      { name: 'Junior Summer Academy', startDate: '2026-07-13', endDate: '2026-07-20', price: '10,000 NOK', level: 'Beginner' },
      { name: 'Autumn Fjord Camp', startDate: '2026-09-21', endDate: '2026-09-28', price: '17,000 NOK', level: 'All Levels' },
      { name: 'Winter Erg Intensive', startDate: '2026-12-07', endDate: '2026-12-11', price: '8,000 NOK', level: 'All Levels' },
      { name: 'Spring Open Water Camp', startDate: '2027-05-04', endDate: '2027-05-11', price: '20,000 NOK', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Fjord View Hotel', pricePerWeek: 7500, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Athletes Lodge', pricePerWeek: 3800, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Accommodation on the Oslo waterfront with fjord views'
    },
    availability: {
      status: 'limited',
      nextIntake: '2026-06-01',
      spotsLeft: 8,
      responseTime: '48h',
      privateLessons: true,
      yearRound: false
    },
    juniorInfo: {
      minAge: 12,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Norwegian international school partnership available',
      medicalStaff: true,
      safeguarding: 'Norwegian Rowing Federation safeguarding, police-checked coaches',
      airportPickup: true,
      mealPlan: 'Full board with Scandinavian sports nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Norwegian', 'English'],
      emergencyProtocol: 'On-site first aid, Oslo University Hospital 10 minutes'
    }
  },
  {
    id: 'schinias-olympic-rowing',
    name: 'Schinias Olympic Rowing Centre',
    country: 'Greece',
    countryFlag: '🇬🇷',
    city: 'Schinias',
    lat: 38.146,
    lng: 24.028,
    website: 'https://www.schiniasrowing.gr',
    contact: '+30 22 9403 5678',
    contactEmail: 'info@schiniasrowing.gr',
    description: 'Train at the 2004 Athens Olympic rowing venue in Schinias. Purpose-built 2km course in a stunning coastal national park setting, with Mediterranean climate for year-round training.',
    ageGroups: ['Junior', 'Adult', 'Masters'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 1, description: 'Schinias Beach adjacent to the rowing centre' },
    priceRange: { from: 500, to: 1400, unit: 'week', display: '€500 - €1,400/week' },
    socialMedia: { instagram: '@schiniasrowing', facebook: 'https://facebook.com/schiniasrowing', twitter: '@schiniasrow' },
    climate: 'schinias',
    facilities: 'Olympic 2km regatta course, 2004 Olympic boathouse, 25 Concept2 ergometers, grandstand, strength gym, outdoor training area, recovery pool',
    courtSurfaces: ['Sculling', 'Sweep rowing', 'Indoor ergometer'],
    programs: [
      { name: 'Junior Olympic Programme', price: '€500/week', desc: 'Youth development on the Olympic course with Greek national rowing coaches' },
      { name: 'Olympic Venue Training Camp', price: '€1,200/week', desc: 'Intensive training at the 2004 Olympic venue with sports science and biomechanics' },
      { name: 'Masters Mediterranean Week', price: '€700/week', desc: 'Combined rowing and Mediterranean lifestyle experience for masters athletes' }
    ],
    coaches: [
      { name: 'Nikolaos Papadopoulos', credential: 'Hellenic Rowing Federation Master Coach', background: 'Former Greek Olympic rower and Athens 2004 venue coach. 20 years developing Greek rowing talent.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Greek', 'English'], instagram: null },
      { name: 'Eleni Stavrou', credential: 'World Rowing Level 3 Coach', background: 'Greek national champion in women\'s double sculls. Mediterranean Games medallist and sculling specialist.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Greek', 'English', 'French'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1541689592-1e30e5112ab3?w=800',
      'https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?w=800'
    ],
    upcomingCamps: [
      { name: 'Spring Mediterranean Camp', startDate: '2026-04-13', endDate: '2026-04-20', price: '€1,200', level: 'Intermediate' },
      { name: 'Junior Summer Academy', startDate: '2026-07-06', endDate: '2026-07-13', price: '€500', level: 'Beginner' },
      { name: 'Autumn Olympic Venue Camp', startDate: '2026-10-05', endDate: '2026-10-12', price: '€1,100', level: 'Advanced' },
      { name: 'Winter Training Block', startDate: '2027-01-11', endDate: '2027-01-18', price: '€900', level: 'All Levels' },
      { name: 'Pre-Season Racing Camp', startDate: '2027-03-08', endDate: '2027-03-15', price: '€1,300', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Coastal Resort Hotel', pricePerWeek: 450, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Athletes Village', pricePerWeek: 220, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Beachside accommodation near the Olympic rowing venue in Schinias National Park'
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
      minAge: 12,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Greek international school partnership in Athens area',
      medicalStaff: true,
      safeguarding: 'Hellenic Rowing Federation safeguarding, background-checked coaches',
      airportPickup: true,
      mealPlan: 'Full board with Greek Mediterranean cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Greek', 'English'],
      emergencyProtocol: 'On-site first aid, Marathon General Hospital 15 minutes'
    }
  },
  {
    id: 'ada-ciganlija-rowing',
    name: 'Ada Ciganlija Rowing Club',
    country: 'Serbia',
    countryFlag: '🇷🇸',
    city: 'Belgrade',
    lat: 44.7866,
    lng: 20.4489,
    website: 'https://www.adarowing.rs',
    contact: '+381 11 678 9012',
    contactEmail: 'info@adarowing.rs',
    description: 'Belgrade\'s premier rowing club on the famous Ada Ciganlija lake, offering competitive rowing in one of Europe\'s most scenic urban training locations.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 0.5, description: 'Ada Ciganlija lake beach 500m away, popular summer swimming' },
    priceRange: { from: 400, to: 1000, unit: 'week', display: '€400 - €1,000/week' },
    socialMedia: { instagram: '@adarowing', facebook: 'https://facebook.com/adarowing', twitter: '@adarowing' },
    climate: 'belgrade',
    facilities: 'Boathouse with fleet of racing shells, ergometer training room, gym, video analysis, lakeside training course, recovery room',
    courtSurfaces: ['Lake course', 'Ergometer training', 'Indoor tank'],
    programs: [
      { name: 'Serbian Rowing Development', price: '€800/week', desc: 'Competitive rowing training on Ada Ciganlija lake with national-level coaching' },
      { name: 'Youth Rowing Foundation', price: '€400/week', desc: 'Introduction to rowing for young athletes on calm lake waters' }
    ],
    coaches: [
      { name: 'Aleksandar Nikolić', credential: 'FISA Level 3 Coach', background: 'Former Serbian national team rower and Balkan Championships medallist', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Serbian', 'English'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?w=800'],
    upcomingCamps: [
      { name: 'Ada Ciganlija Summer Rowing Camp', startDate: '2026-07-06', endDate: '2026-07-13', price: '€800', level: 'All levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Ada Lake Hotel', pricePerWeek: 250, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Lakeside hotel on Ada Ciganlija with direct access to the rowing course'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-05-15',
      spotsLeft: 16,
      responseTime: '48h',
      privateLessons: true,
      yearRound: false
    },
    juniorInfo: {
      minAge: 12,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Serbian school coordination for visiting athletes',
      medicalStaff: true,
      safeguarding: 'Serbian Rowing Federation safeguarding protocols',
      airportPickup: true,
      mealPlan: 'Full board with Serbian cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Serbian', 'English'],
      emergencyProtocol: 'On-site first aid, Clinical Centre of Serbia 15 minutes'
    }
  },
  {
    id: 'kucukcekmece-rowing-centre',
    name: 'Küçükçekmece Rowing Centre',
    country: 'Turkey',
    countryFlag: '',
    city: 'Istanbul',
    lat: 41.0082,
    lng: 28.9784,
    website: 'https://www.kucukcekmecerowing.com.tr',
    contact: '+90 212 580 1234',
    contactEmail: 'info@kucukcekmecerowing.com.tr',
    description: 'Premier rowing centre on Küçükçekmece Lake in Istanbul, offering sheltered flat-water training with a 2km course. A growing hub for Turkish rowing development with modern facilities.',
    ageGroups: ['Junior', 'Adult', 'Masters'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 5, description: 'Sea of Marmara beaches 5km south' },
    priceRange: { from: 400, to: 1100, unit: 'week', display: '400 - 1,100/week' },
    socialMedia: { instagram: '@kucukcekmecerowing', facebook: 'https://facebook.com/kucukcekmecerowing', twitter: '@kcekmecerow' },
    climate: 'istanbul-rowing',
    facilities: '2km flat-water course on Küçükçekmece Lake, boathouse, 20 Concept2 ergometers, strength gym, video analysis, physiotherapy',
    courtSurfaces: ['Sculling', 'Sweep rowing', 'Indoor ergometer'],
    programs: [
      { name: 'Junior Development Programme', price: '400/week', desc: 'Youth rowing development with Turkish national youth coaches on sheltered lake waters' },
      { name: 'Performance Training Camp', price: '1,000/week', desc: 'Intensive squad training with sports science support and race preparation' },
      { name: 'Masters Mediterranean Week', price: '600/week', desc: 'Rowing combined with Istanbul cultural experience for masters athletes' }
    ],
    coaches: [
      { name: 'Hakan Yılmaz', credential: 'Turkish Rowing Federation Master Coach', background: 'Former Turkish national team rower and Mediterranean Games medallist. 15 years coaching experience.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Turkish', 'English'], instagram: null },
      { name: 'Aylin Korkmaz', credential: 'World Rowing Level 2 Coach', background: 'Turkish national champion in women\'s double sculls. Specializes in technique and junior development.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Turkish', 'English'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1541689592-1e30e5112ab3?w=800',
      'https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?w=800'
    ],
    upcomingCamps: [
      { name: 'Spring Rowing Camp', startDate: '2026-04-13', endDate: '2026-04-20', price: '€1,000', level: 'Intermediate' },
      { name: 'Junior Summer Academy', startDate: '2026-07-06', endDate: '2026-07-13', price: '400', level: 'Beginner' },
      { name: 'Autumn Training Block', startDate: '2026-10-05', endDate: '2026-10-12', price: '900', level: 'Advanced' },
      { name: 'Winter Ergometer Camp', startDate: '2027-01-11', endDate: '2027-01-18', price: '700', level: 'All Levels' },
      { name: 'Pre-Season Camp', startDate: '2027-03-08', endDate: '2027-03-15', price: '1,100', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Lakeside Hotel', pricePerWeek: 350, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Athletes Residence', pricePerWeek: 180, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Accommodation near Küçükçekmece Lake with easy access to Istanbul city centre'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-04-01',
      spotsLeft: 20,
      responseTime: '24h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 12,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Partnership with Istanbul international schools',
      medicalStaff: true,
      safeguarding: 'Turkish Rowing Federation safeguarding protocols, background-checked coaches',
      airportPickup: true,
      mealPlan: 'Full board with Turkish and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Turkish', 'English'],
      emergencyProtocol: 'On-site first aid, Istanbul hospital 20 minutes'
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
  prague: { avgTemp: 9, summerHigh: 25, winterLow: -2, rainyDays: 100, humidity: 72, description: 'Continental climate with warm summers and cold winters' },
  cork: { avgTemp: 10, summerHigh: 19, winterLow: 3, rainyDays: 150, humidity: 82, description: 'Mild Atlantic climate with frequent rain and moderate temperatures year-round' },
  ghent: { avgTemp: 11, summerHigh: 22, winterLow: 1, rainyDays: 135, humidity: 80, description: 'Maritime climate with mild summers and cool, damp winters' },
  poznan: { avgTemp: 9, summerHigh: 24, winterLow: -3, rainyDays: 105, humidity: 74, description: 'Continental climate with warm summers and cold winters' },
  szeged: { avgTemp: 11, summerHigh: 28, winterLow: -2, rainyDays: 85, humidity: 68, description: 'Continental climate with hot summers and cold winters, one of Hungary\'s sunniest cities' },
  linz: { avgTemp: 9, summerHigh: 25, winterLow: -3, rainyDays: 115, humidity: 74, description: 'Continental climate with warm summers and cold Danube valley winters' },
  seville: { avgTemp: 18, summerHigh: 36, winterLow: 6, rainyDays: 52, humidity: 60, description: 'Hot Mediterranean climate with very warm summers and mild winters, ideal for winter training' },
  porto: { avgTemp: 15, summerHigh: 25, winterLow: 6, rainyDays: 120, humidity: 75, description: 'Mild Atlantic climate with warm summers and cool, wet winters' },
  bucharest: { avgTemp: 11, summerHigh: 30, winterLow: -4, rainyDays: 95, humidity: 70, description: 'Continental climate with hot summers and cold winters' },
  zagreb: { avgTemp: 11, summerHigh: 27, winterLow: -1, rainyDays: 115, humidity: 72, description: 'Continental climate with warm summers and cold winters' },
  stockholm: { avgTemp: 7, summerHigh: 22, winterLow: -3, rainyDays: 110, humidity: 76, description: 'Maritime Scandinavian climate with cool summers, cold winters, and long summer daylight' },
  oslo: { avgTemp: 6, summerHigh: 22, winterLow: -5, rainyDays: 105, humidity: 74, description: 'Maritime subarctic climate with cool summers, cold winters, and midnight sun in June' },
  schinias: { avgTemp: 18, summerHigh: 33, winterLow: 7, rainyDays: 55, humidity: 62, description: 'Mediterranean climate with hot dry summers and mild winters, excellent year-round rowing' },
  belgrade: { avgTemp: 12, summerHigh: 28, winterLow: -1, rainyDays: 95, humidity: 70, description: 'Continental climate with warm summers and cold winters' },
  'istanbul-rowing': { avgTemp: 14, summerHigh: 28, winterLow: 3, rainyDays: 90, humidity: 72, description: 'Mediterranean-influenced climate with warm summers and mild winters, ideal for year-round rowing on sheltered lake waters' }
};

const NEWS_ITEMS = [
  { title: 'World Rowing Championships 2025 Preview', date: '2025-05-10', summary: 'Preview of the upcoming World Rowing Championships with analysis of top contenders across all boat classes.' },
  { title: 'Indoor Rowing Gains Olympic Recognition', date: '2025-04-15', summary: 'World Rowing announces indoor rowing (ergometer) events will feature as demonstration sport at future Olympic Games.' },
  { title: 'Henley Royal Regatta Expands International Entries', date: '2025-03-20', summary: 'Record number of international entries accepted for the 2025 Henley Royal Regatta, with 30+ countries represented.' },
  { title: 'New Boat Technology Revolutionises Sculling', date: '2025-02-28', summary: 'Carbon fibre innovations from Dutch and Swiss manufacturers are producing lighter, faster sculling boats for 2025 season.' },
  { title: 'European Rowing Academies See Record Enrollment', date: '2025-01-15', summary: 'Rowing academies across Europe report 25% increase in youth enrollment driven by post-Olympic interest.' }
];

const COUNTRIES = ['UK', 'Germany', 'Netherlands', 'Italy', 'Switzerland', 'Denmark', 'France', 'Czech Republic', 'Ireland', 'Belgium', 'Poland', 'Hungary', 'Austria', 'Spain', 'Portugal', 'Romania', 'Croatia', 'Sweden', 'Norway', 'Greece', 'Serbia', 'Turkey'];
