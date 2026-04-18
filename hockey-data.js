const SPORT_TYPE = 'hockey';

const ACADEMIES = [
  {
    id: 'amsterdam-hockey-academy',
    name: 'Amsterdam Hockey Academy',
    country: 'Netherlands',
    countryFlag: '🇳🇱',
    city: 'Amsterdam',
    lat: 52.343,
    lng: 4.878,
    website: 'https://www.amsterdamhockeyacademy.nl',
    contact: '+31 20 301 1500',
    contactEmail: 'info@amsterdamhockeyacademy.nl',
    description: 'Train at the heart of Dutch field hockey excellence. Amsterdam has produced more international players than any other city, and this academy continues that tradition.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 25, description: 'Zandvoort beach 25km west' },
    priceRange: { from: 900, to: 2500, unit: 'week', display: '€900 - €2,500/week' },
    socialMedia: { instagram: '@adamhockey', facebook: 'https://facebook.com/amsterdamhockeyacademy', twitter: '@adamhockey' },
    climate: 'amsterdam',
    facilities: '2 water-based turf pitches, indoor hall, video analysis suite, gym, recovery pool, sand-dressed training pitch',
    courtSurfaces: ['Water-based turf', 'Sand-dressed turf', 'Indoor court'],
    programs: [
      { name: 'Elite Performance', price: '€2,200/week', desc: 'High-intensity training with former Oranje coaches and current international players' },
      { name: 'Youth Development', price: '€1,200/week', desc: 'Structured pathway program for ages 10-18 following KNHB methodology' },
      { name: 'Introduction to Hockey', price: '€900/week', desc: 'Learn the basics of field hockey in a fun and supportive environment' }
    ],
    coaches: [
      { name: 'Marc Lammers', credential: 'KNHB Master Coach', background: 'Former Netherlands womens national team coach. Olympic gold medallist as coach in 2008.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Dutch', 'English', 'German'], instagram: null },
      { name: 'Eva de Goede', credential: 'KNHB Level 3', background: 'Former Dutch international with 200+ caps. Specialist in defensive skills and tactics.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Dutch', 'English'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=800',
      'https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=800'
    ],
    upcomingCamps: [
      { name: 'Summer Hockey Festival', startDate: '2025-07-07', endDate: '2025-07-14', price: '€1,800', level: 'All Levels' },
      { name: 'Junior Development Camp', startDate: '2025-08-04', endDate: '2025-08-11', price: '€1,200', level: 'Beginner' },
      { name: 'Autumn Skills Clinic', startDate: '2025-10-13', endDate: '2025-10-17', price: '€900', level: 'Intermediate' },
      { name: 'Winter Indoor Camp', startDate: '2025-12-08', endDate: '2025-12-12', price: '€750', level: 'All Levels' },
      { name: 'Spring Prep Camp', startDate: '2026-03-16', endDate: '2026-03-23', price: '€1,600', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Partner Hotel', pricePerWeek: 650, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Shared Apartment', pricePerWeek: 400, maxOccupancy: 3, bathType: 'shared', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Accommodation in Amsterdam-Zuid near the training pitches'
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
      minAge: 8,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Partnership with Amsterdam international schools',
      medicalStaff: true,
      safeguarding: 'KNHB safeguarding standards, VOG-certified coaches',
      airportPickup: true,
      mealPlan: 'Full board with sports nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Dutch', 'English', 'German'],
      emergencyProtocol: 'On-site medic, VU Medical Centre 10 minutes'
    }
  },
  {
    id: 'breda-hockey-centre',
    name: 'Breda Field Hockey Centre',
    country: 'Netherlands',
    countryFlag: '🇳🇱',
    city: 'Breda',
    lat: 51.586,
    lng: 4.776,
    website: 'https://www.bredahockeycentre.nl',
    contact: '+31 76 520 3400',
    contactEmail: 'info@bredahockeycentre.nl',
    description: 'Elite training centre in the hockey heartland of North Brabant. Home to multiple Hoofdklasse clubs and a proven talent development pathway.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Inland city; nearest coast 80km' },
    priceRange: { from: 750, to: 2000, unit: 'week', display: '€750 - €2,000/week' },
    socialMedia: { instagram: '@bredahockey', facebook: 'https://facebook.com/bredahockeycentre', twitter: '@bredahockey' },
    climate: 'breda',
    facilities: 'Water-based FIH-certified pitch, sand-dressed training pitch, indoor hall, video analysis, gym, recovery pool',
    courtSurfaces: ['Water-based turf', 'Sand-dressed turf', 'Indoor court'],
    programs: [
      { name: 'Talent Identification', price: '€1,800/week', desc: 'Intensive assessment and development camp for aspiring professional players' },
      { name: 'Skills Academy', price: '€1,100/week', desc: 'Technical skills development with focus on stick skills and game awareness' },
      { name: 'First Stick', price: '€750/week', desc: 'Introductory program for beginners with fun and structured learning' }
    ],
    coaches: [
      { name: 'Jeroen Delmee', credential: 'KNHB Master Coach', background: 'Former Dutch international defender with 200+ caps. Olympic gold medallist.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Dutch', 'English'], instagram: null },
      { name: 'Sophie van der Burg', credential: 'KNHB Level 3', background: 'Former Hoofdklasse player. Specialist in attacking hockey and penalty corners.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Dutch', 'English', 'French'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=800',
      'https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=800'
    ],
    upcomingCamps: [
      { name: 'Summer Skills Camp', startDate: '2025-07-14', endDate: '2025-07-21', price: '€1,400', level: 'Intermediate' },
      { name: 'Junior Academy Week', startDate: '2025-08-04', endDate: '2025-08-11', price: '€1,100', level: 'Beginner' },
      { name: 'Autumn Performance Block', startDate: '2025-10-06', endDate: '2025-10-10', price: '€800', level: 'Advanced' },
      { name: 'Winter Indoor Hockey', startDate: '2025-12-01', endDate: '2025-12-05', price: '€650', level: 'All Levels' },
      { name: 'Pre-Season Prep', startDate: '2026-03-09', endDate: '2026-03-16', price: '€1,500', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Sports Hotel', pricePerWeek: 500, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Dormitory', pricePerWeek: 280, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'On-site accommodation at the hockey centre'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-15',
      spotsLeft: 18,
      responseTime: '48h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 8,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Partnership with Breda international school',
      medicalStaff: true,
      safeguarding: 'KNHB safeguarding, all coaches VOG certified',
      airportPickup: true,
      mealPlan: 'Full board with Dutch and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Dutch', 'English'],
      emergencyProtocol: 'On-site first aid, Amphia Hospital 10 minutes'
    }
  },
  {
    id: 'eindhoven-hockey-elite',
    name: 'Eindhoven Hockey Elite',
    country: 'Netherlands',
    countryFlag: '🇳🇱',
    city: 'Eindhoven',
    lat: 51.441,
    lng: 5.470,
    website: 'https://www.eindhovenhockeyelite.nl',
    contact: '+31 40 244 6800',
    contactEmail: 'info@eindhovenhockeyelite.nl',
    description: 'High-tech hockey training in the innovative city of Eindhoven. Data-driven coaching meets Dutch hockey tradition for measurable performance gains.',
    ageGroups: ['Junior', 'Adult'],
    level: 'Intermediate to Advanced',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Inland location; no beach nearby' },
    priceRange: { from: 850, to: 2200, unit: 'week', display: '€850 - €2,200/week' },
    socialMedia: { instagram: '@eindhovenhockey', facebook: 'https://facebook.com/eindhovenhockeyelite', twitter: '@ehvelite' },
    climate: 'eindhoven',
    facilities: 'Water-based pitch with real-time tracking, indoor hall, video and data analysis lab, gym, recovery pool, sand-dressed training pitch',
    courtSurfaces: ['Water-based turf', 'Sand-dressed turf', 'Indoor court'],
    programs: [
      { name: 'Data-Driven Performance', price: '€2,200/week', desc: 'Wearable tech and analytics-based coaching for elite players' },
      { name: 'Technical Masterclass', price: '€1,500/week', desc: 'Intensive stick skills and 3D skills workshop with video feedback' },
      { name: 'Competitive Academy', price: '€850/week', desc: 'Match play focused training with tactical analysis' }
    ],
    coaches: [
      { name: 'Floris Evers', credential: 'KNHB Level 4', background: 'Former Dutch international, Olympic silver medallist. Expert in midfield play.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Dutch', 'English', 'German'], instagram: null },
      { name: 'Lisa Scheerlinck', credential: 'KNHB Level 3', background: 'Former Belgian international, performance analyst with data science background.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Dutch', 'English', 'French'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=800',
      'https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=800'
    ],
    upcomingCamps: [
      { name: 'Tech Hockey Camp', startDate: '2025-07-07', endDate: '2025-07-14', price: '€2,000', level: 'Advanced' },
      { name: 'Summer Skills Week', startDate: '2025-08-11', endDate: '2025-08-18', price: '€1,500', level: 'Intermediate' },
      { name: 'Autumn Analytics Camp', startDate: '2025-10-20', endDate: '2025-10-24', price: '€1,000', level: 'Advanced' },
      { name: 'Indoor Winter Clinic', startDate: '2025-12-08', endDate: '2025-12-12', price: '€800', level: 'All Levels' },
      { name: 'Spring Performance Camp', startDate: '2026-03-23', endDate: '2026-03-30', price: '€1,800', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Innovation Hotel', pricePerWeek: 550, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Self-catering Apartment', pricePerWeek: 400, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Modern accommodation near the High Tech Campus'
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
      minAge: 10,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Partnership with Eindhoven international school',
      medicalStaff: true,
      safeguarding: 'KNHB safeguarding standards, VOG-certified staff',
      airportPickup: true,
      mealPlan: 'Full board with performance nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Dutch', 'English', 'German'],
      emergencyProtocol: 'On-site medic, Catharina Hospital 10 minutes'
    }
  },
  {
    id: 'brussels-hockey-school',
    name: 'Brussels Hockey School',
    country: 'Belgium',
    countryFlag: '🇧🇪',
    city: 'Brussels',
    lat: 50.818,
    lng: 4.404,
    website: 'https://www.brusselshockeyschool.be',
    contact: '+32 2 344 6700',
    contactEmail: 'info@brusselshockeyschool.be',
    description: 'Train with the Red Lions legacy. Belgium rise to world number one has created exceptional coaching talent, now available through this premier academy.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Inland capital; Belgian coast 120km northwest' },
    priceRange: { from: 800, to: 2200, unit: 'week', display: '€800 - €2,200/week' },
    socialMedia: { instagram: '@brusselshockey', facebook: 'https://facebook.com/brusselshockeyschool', twitter: '@bruhockey' },
    climate: 'brussels',
    facilities: 'Water-based FIH pitch, indoor hall, video analysis room, gym, recovery pool, tactical analysis room',
    courtSurfaces: ['Water-based turf', 'Sand-dressed turf', 'Indoor court'],
    programs: [
      { name: 'Red Lions Method', price: '€2,200/week', desc: 'Train using the Belgian national team methodology with certified coaches' },
      { name: 'Youth Academy', price: '€1,100/week', desc: 'Structured development program following Belgian hockey federation pathway' },
      { name: 'Discover Hockey', price: '€800/week', desc: 'Fun introduction to hockey for all ages and abilities' }
    ],
    coaches: [
      { name: 'Sebastien Vanden Abeele', credential: 'ARBH Master Coach', background: 'Former Red Lions assistant coach. Architect of Belgian youth development system.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['French', 'Dutch', 'English'], instagram: null },
      { name: 'Barbara Nelen', credential: 'ARBH Level 3', background: 'Former Red Panthers captain with 150+ international caps. Specialist in attacking play.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Dutch', 'French', 'English'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=800',
      'https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=800'
    ],
    upcomingCamps: [
      { name: 'Red Lions Summer Camp', startDate: '2025-07-07', endDate: '2025-07-14', price: '€1,800', level: 'All Levels' },
      { name: 'Junior Development Week', startDate: '2025-08-04', endDate: '2025-08-11', price: '€1,100', level: 'Beginner' },
      { name: 'Autumn Tactical Clinic', startDate: '2025-10-13', endDate: '2025-10-17', price: '€900', level: 'Intermediate' },
      { name: 'Winter Indoor Festival', startDate: '2025-12-08', endDate: '2025-12-12', price: '€700', level: 'All Levels' },
      { name: 'Spring Training Camp', startDate: '2026-03-23', endDate: '2026-03-30', price: '€1,600', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'City Centre Hotel', pricePerWeek: 600, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Youth Residence', pricePerWeek: 350, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Accommodation near Uccle training grounds'
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
      minAge: 8,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Partnership with Brussels international schools',
      medicalStaff: true,
      safeguarding: 'ARBH safeguarding, all coaches background checked',
      airportPickup: true,
      mealPlan: 'Full board with Belgian and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['French', 'Dutch', 'English'],
      emergencyProtocol: 'On-site medic, UZ Brussel 15 minutes'
    }
  },
  {
    id: 'antwerp-hockey-academy',
    name: 'Antwerp Hockey Academy',
    country: 'Belgium',
    countryFlag: '🇧🇪',
    city: 'Antwerp',
    lat: 51.219,
    lng: 4.402,
    website: 'https://www.antwerphockeyacademy.be',
    contact: '+32 3 230 5500',
    contactEmail: 'info@antwerphockeyacademy.be',
    description: 'Antwerp premier hockey training centre. The Flemish hockey tradition, with its emphasis on stick skills and speed, produces world-class talent.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Port city; nearest beach 60km at Knokke-Heist' },
    priceRange: { from: 750, to: 1900, unit: 'week', display: '€750 - €1,900/week' },
    socialMedia: { instagram: '@antwerphockey', facebook: 'https://facebook.com/antwerphockeyacademy', twitter: '@antwerphockey' },
    climate: 'antwerp',
    facilities: 'Water-based pitch, sand-dressed practice pitch, indoor hall, video analysis, gym, recovery pool',
    courtSurfaces: ['Water-based turf', 'Sand-dressed turf', 'Indoor court'],
    programs: [
      { name: 'Flemish Skills Academy', price: '€1,900/week', desc: 'Intensive stick skills and speed training in the Flemish tradition' },
      { name: 'Youth Pathway', price: '€1,000/week', desc: 'Progressive development for young players with pathway to club hockey' },
      { name: 'Beginners Course', price: '€750/week', desc: 'Structured introduction to field hockey for all ages' }
    ],
    coaches: [
      { name: 'Tom Boon', credential: 'ARBH Level 4', background: 'Former Red Lions striker with 300+ international goals. Penalty corner specialist.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['French', 'Dutch', 'English'], instagram: null },
      { name: 'Alix Gerniers', credential: 'ARBH Level 3', background: 'Former Red Panthers player. Youth development and goalkeeping specialist.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['French', 'Dutch', 'English'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=800',
      'https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=800'
    ],
    upcomingCamps: [
      { name: 'Flemish Summer Camp', startDate: '2025-07-14', endDate: '2025-07-21', price: '€1,500', level: 'All Levels' },
      { name: 'Junior Hockey Week', startDate: '2025-08-11', endDate: '2025-08-18', price: '€1,000', level: 'Beginner' },
      { name: 'Autumn PC Clinic', startDate: '2025-10-06', endDate: '2025-10-10', price: '€800', level: 'Intermediate' },
      { name: 'Winter Indoor Clinic', startDate: '2025-12-01', endDate: '2025-12-05', price: '€650', level: 'All Levels' },
      { name: 'Pre-Season Camp', startDate: '2026-02-23', endDate: '2026-03-02', price: '€1,400', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Antwerp City Hotel', pricePerWeek: 500, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Club House', pricePerWeek: 300, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Accommodation near the training facility in Wilrijk'
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
      minAge: 8,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Partnership with Antwerp International School',
      medicalStaff: true,
      safeguarding: 'ARBH safeguarding, background-checked coaches',
      airportPickup: true,
      mealPlan: 'Full board with balanced nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Dutch', 'French', 'English'],
      emergencyProtocol: 'On-site first aid, UZA Hospital 15 minutes'
    }
  },
  {
    id: 'hamburg-hockey-school',
    name: 'Hamburg Hockey School',
    country: 'Germany',
    countryFlag: '🇩🇪',
    city: 'Hamburg',
    lat: 53.580,
    lng: 10.020,
    website: 'https://www.hamburghockeyschool.de',
    contact: '+49 40 555 7800',
    contactEmail: 'info@hamburghockeyschool.de',
    description: 'Germany hockey capital. Hamburg has the highest concentration of hockey clubs in Europe and a deep tradition of technical excellence.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Port city; North Sea coast 120km north' },
    priceRange: { from: 800, to: 2000, unit: 'week', display: '€800 - €2,000/week' },
    socialMedia: { instagram: '@hamburghockey', facebook: 'https://facebook.com/hamburghockeyschool', twitter: '@hhvhockey' },
    climate: 'hamburg',
    facilities: 'Water-based pitch, sand-dressed pitch, indoor hall, video analysis room, gym, recovery area',
    courtSurfaces: ['Water-based turf', 'Sand-dressed turf', 'Indoor court'],
    programs: [
      { name: 'Bundesliga Method', price: '€2,000/week', desc: 'Train with German Bundesliga coaching methods and competitive match play' },
      { name: 'Technical Development', price: '€1,200/week', desc: 'Intensive technical and tactical development for aspiring players' },
      { name: 'Hockey Starter', price: '€800/week', desc: 'Introduction to hockey for beginners with equipment provided' }
    ],
    coaches: [
      { name: 'Tobias Hauke', credential: 'DHB Master Coach', background: 'Former German national team captain, 2x Olympic gold medallist. World-class defender.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['German', 'English'], instagram: null },
      { name: 'Marie Mavers', credential: 'DHB Level 3', background: 'Former German international with 100+ caps. Specialist in midfielder development.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['German', 'English', 'Spanish'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=800',
      'https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=800'
    ],
    upcomingCamps: [
      { name: 'Hamburg Summer Hockey', startDate: '2025-07-07', endDate: '2025-07-14', price: '€1,600', level: 'All Levels' },
      { name: 'Youth Academy Week', startDate: '2025-08-04', endDate: '2025-08-11', price: '€1,200', level: 'Beginner' },
      { name: 'Autumn Bundesliga Camp', startDate: '2025-10-13', endDate: '2025-10-17', price: '€900', level: 'Advanced' },
      { name: 'Indoor Winter Camp', startDate: '2025-12-08', endDate: '2025-12-12', price: '€700', level: 'All Levels' },
      { name: 'Spring Training Block', startDate: '2026-03-16', endDate: '2026-03-23', price: '€1,500', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Hamburg Hotel', pricePerWeek: 550, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Sports Residence', pricePerWeek: 350, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Accommodation near Uhlenhorst club grounds'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-15',
      spotsLeft: 18,
      responseTime: '48h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 8,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Partnership with Hamburg sports gymnasium',
      medicalStaff: true,
      safeguarding: 'DHB safeguarding standards, background-checked staff',
      airportPickup: true,
      mealPlan: 'Full board with German sports nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['German', 'English'],
      emergencyProtocol: 'On-site medic, UKE Hospital 15 minutes'
    }
  },
  {
    id: 'berlin-hockey-akademie',
    name: 'Berlin Hockey Akademie',
    country: 'Germany',
    countryFlag: '🇩🇪',
    city: 'Berlin',
    lat: 52.491,
    lng: 13.361,
    website: 'https://www.berlinhockeyakademie.de',
    contact: '+49 30 7890 1200',
    contactEmail: 'info@berlinhockeyakademie.de',
    description: 'Modern hockey training in Germany vibrant capital. Combining German precision coaching with an international atmosphere.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Inland city; Wannsee lake beach in summer' },
    priceRange: { from: 700, to: 1800, unit: 'week', display: '€700 - €1,800/week' },
    socialMedia: { instagram: '@berlinhockey', facebook: 'https://facebook.com/berlinhockeyakademie', twitter: '@berlinhockey' },
    climate: 'berlin',
    facilities: 'Water-based pitch, sand-dressed training pitch, indoor hall, video analysis, gym, recovery pool',
    courtSurfaces: ['Water-based turf', 'Sand-dressed turf', 'Indoor court'],
    programs: [
      { name: 'Berlin Performance Camp', price: '€1,800/week', desc: 'Elite level training with Bundesliga-experienced coaches' },
      { name: 'International Summer School', price: '€1,200/week', desc: 'Multi-national hockey experience with players from across Europe' },
      { name: 'Introduction Course', price: '€700/week', desc: 'Learn hockey in a fun, safe environment with expert instruction' }
    ],
    coaches: [
      { name: 'Christopher Ruhr', credential: 'DHB Level 4', background: 'Former German international striker. European Championship gold medallist.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['German', 'English'], instagram: null },
      { name: 'Franziska Hauke', credential: 'DHB Level 3', background: 'Former German womens international. Specialist in youth development and fitness.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['German', 'English', 'French'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=800',
      'https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=800'
    ],
    upcomingCamps: [
      { name: 'Berlin Summer Hockey', startDate: '2025-07-14', endDate: '2025-07-21', price: '€1,500', level: 'All Levels' },
      { name: 'Junior Development Camp', startDate: '2025-08-04', endDate: '2025-08-11', price: '€1,000', level: 'Beginner' },
      { name: 'Autumn Skills Camp', startDate: '2025-10-06', endDate: '2025-10-10', price: '€800', level: 'Intermediate' },
      { name: 'Winter Indoor Training', startDate: '2025-12-01', endDate: '2025-12-05', price: '€600', level: 'All Levels' },
      { name: 'Spring Pre-Season', startDate: '2026-03-09', endDate: '2026-03-16', price: '€1,300', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Berlin Hotel', pricePerWeek: 480, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Hostel', pricePerWeek: 280, maxOccupancy: 3, bathType: 'shared', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Central Berlin accommodation with good public transport'
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
      minAge: 8,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Partnership with Berlin international schools',
      medicalStaff: true,
      safeguarding: 'DHB safeguarding, all coaches background checked',
      airportPickup: true,
      mealPlan: 'Full board with international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['German', 'English'],
      emergencyProtocol: 'On-site first aid, Charité Hospital 15 minutes'
    }
  },
  {
    id: 'madrid-hockey-centre',
    name: 'Madrid Hockey Centre',
    country: 'Spain',
    countryFlag: '🇪🇸',
    city: 'Madrid',
    lat: 40.417,
    lng: -3.682,
    website: 'https://www.madridhockeycentre.es',
    contact: '+34 91 555 3200',
    contactEmail: 'info@madridhockeycentre.es',
    description: 'Spain rising hockey power base. Train in excellent weather year-round with coaches from the RedSticks national programme.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Inland capital; nearest coast 350km' },
    priceRange: { from: 700, to: 1800, unit: 'week', display: '€700 - €1,800/week' },
    socialMedia: { instagram: '@madridhockey', facebook: 'https://facebook.com/madridhockeycentre', twitter: '@madridhockey' },
    climate: 'madrid',
    facilities: 'Water-based FIH pitch, sand-dressed practice pitch, indoor hall, video room, gym, recovery pool',
    courtSurfaces: ['Water-based turf', 'Sand-dressed turf', 'Indoor court'],
    programs: [
      { name: 'RedSticks Academy', price: '€1,800/week', desc: 'Train using Spanish national team methods with RedSticks coaches' },
      { name: 'Summer Hockey Camp', price: '€1,100/week', desc: 'Fun and competitive summer program for all levels' },
      { name: 'Hockey Beginners', price: '€700/week', desc: 'Introduction to hockey with all equipment provided' }
    ],
    coaches: [
      { name: 'Pau Quemada', credential: 'RFEH Master Coach', background: 'Former Spanish international forward with 200+ caps. Expert in attacking play.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Spanish', 'English'], instagram: null },
      { name: 'Maria Lopez', credential: 'RFEH Level 3', background: 'Former RedSticks player. Specialist in goalkeeping coaching and youth development.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Spanish', 'English', 'French'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=800',
      'https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=800'
    ],
    upcomingCamps: [
      { name: 'Madrid Summer Hockey', startDate: '2025-07-07', endDate: '2025-07-14', price: '€1,500', level: 'All Levels' },
      { name: 'Junior RedSticks Camp', startDate: '2025-08-04', endDate: '2025-08-11', price: '€1,100', level: 'Beginner' },
      { name: 'Autumn Tactical Week', startDate: '2025-10-13', endDate: '2025-10-17', price: '€800', level: 'Intermediate' },
      { name: 'Winter Indoor Hockey', startDate: '2025-12-01', endDate: '2025-12-05', price: '€600', level: 'All Levels' },
      { name: 'Spring Training Camp', startDate: '2026-03-23', endDate: '2026-03-30', price: '€1,400', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Madrid Hotel', pricePerWeek: 450, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Sports Residence', pricePerWeek: 280, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Accommodation near Club de Campo training grounds'
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
      minAge: 8,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Partnership with Madrid international schools',
      medicalStaff: true,
      safeguarding: 'RFEH safeguarding standards, all coaches certified',
      airportPickup: true,
      mealPlan: 'Full board with Mediterranean cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Spanish', 'English'],
      emergencyProtocol: 'On-site medic, Hospital La Paz 15 minutes'
    }
  },
  {
    id: 'barcelona-hockey-club',
    name: 'Barcelona Hockey Academy',
    country: 'Spain',
    countryFlag: '🇪🇸',
    city: 'Barcelona',
    lat: 41.390,
    lng: 2.154,
    website: 'https://www.barcelonahockeyacademy.es',
    contact: '+34 93 410 5500',
    contactEmail: 'info@barcelonahockeyacademy.es',
    description: 'Train in the Mediterranean sun at Barcelona thriving hockey scene. Spanish passion meets European technique at this coastal training centre.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 3, description: 'Barceloneta and surrounding beaches 3km away' },
    priceRange: { from: 800, to: 2000, unit: 'week', display: '€800 - €2,000/week' },
    socialMedia: { instagram: '@barcelonahockey', facebook: 'https://facebook.com/barcelonahockeyacademy', twitter: '@bcnhockey' },
    climate: 'barcelona',
    facilities: 'Water-based pitch, sand-dressed pitch, indoor hall, video analysis, gym, recovery pool',
    courtSurfaces: ['Water-based turf', 'Sand-dressed turf', 'Indoor court'],
    programs: [
      { name: 'Mediterranean Hockey Camp', price: '€2,000/week', desc: 'Intensive training in perfect weather with beach recovery sessions' },
      { name: 'Youth Development', price: '€1,200/week', desc: 'Structured youth program with Spanish hockey federation methodology' },
      { name: 'Hockey Introduction', price: '€800/week', desc: 'Learn hockey basics with all equipment and coaching provided' }
    ],
    coaches: [
      { name: 'Xavi Lleonart', credential: 'RFEH Level 4', background: 'Former Spanish international midfielder. Olympic medallist and FC Barcelona hockey legend.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Spanish', 'Catalan', 'English'], instagram: null },
      { name: 'Georgina Oliva', credential: 'RFEH Level 3', background: 'Former RedSticks captain. Specialist in women hockey development.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Spanish', 'Catalan', 'English'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=800',
      'https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=800'
    ],
    upcomingCamps: [
      { name: 'Barcelona Summer Hockey', startDate: '2025-07-07', endDate: '2025-07-14', price: '€1,800', level: 'All Levels' },
      { name: 'Junior Beach & Hockey Camp', startDate: '2025-08-04', endDate: '2025-08-11', price: '€1,200', level: 'Beginner' },
      { name: 'Autumn Skills Clinic', startDate: '2025-10-20', endDate: '2025-10-24', price: '€900', level: 'Intermediate' },
      { name: 'Winter Training Week', startDate: '2025-12-08', endDate: '2025-12-12', price: '€750', level: 'All Levels' },
      { name: 'Easter Hockey Festival', startDate: '2026-04-06', endDate: '2026-04-13', price: '€1,600', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Barcelona Hotel', pricePerWeek: 550, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Beach Apartment', pricePerWeek: 500, maxOccupancy: 3, bathType: 'ensuite', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Accommodation near Pedralbes training grounds'
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
      minAge: 8,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Partnership with Barcelona international schools',
      medicalStaff: true,
      safeguarding: 'RFEH safeguarding standards, all staff certified',
      airportPickup: true,
      mealPlan: 'Full board with Mediterranean diet',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Spanish', 'Catalan', 'English'],
      emergencyProtocol: 'On-site medic, Hospital Clinic 15 minutes'
    }
  },
  {
    id: 'london-hockey-centre',
    name: 'London Hockey Centre',
    country: 'UK',
    countryFlag: '🇬🇧',
    city: 'London',
    lat: 51.549,
    lng: -0.016,
    website: 'https://www.londonhockeycentre.co.uk',
    contact: '+44 20 8536 7800',
    contactEmail: 'info@londonhockeycentre.co.uk',
    description: 'Train at the home of British hockey at Lee Valley. The 2012 Olympic legacy venue offers world-class facilities and coaching for all levels.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Central London; no beach nearby' },
    priceRange: { from: 900, to: 2500, unit: 'week', display: '£900 - £2,500/week' },
    socialMedia: { instagram: '@londonhockey', facebook: 'https://facebook.com/londonhockeycentre', twitter: '@londonhockey' },
    climate: 'london',
    facilities: 'Olympic-standard water-based pitch, indoor hall, video analysis, gym, recovery pool, sand-dressed training pitch',
    courtSurfaces: ['Water-based turf', 'Sand-dressed turf', 'Indoor court'],
    programs: [
      { name: 'Olympic Legacy Camp', price: '£2,500/week', desc: 'Train on the 2012 Olympic pitch with Team GB coaches' },
      { name: 'Skills Development', price: '£1,400/week', desc: 'Technical development with England Hockey certified coaches' },
      { name: 'Hockey Starter', price: '£900/week', desc: 'Beginner-friendly introduction at world-class facilities' }
    ],
    coaches: [
      { name: 'Barry Middleton', credential: 'England Hockey Level 4', background: 'England most capped player with 400+ caps. 4x Olympian and penalty corner expert.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English'], instagram: null },
      { name: 'Hollie Pearne-Webb', credential: 'England Hockey Level 3', background: 'Olympic gold medallist 2016. Captain and defensive leader.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=800',
      'https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=800'
    ],
    upcomingCamps: [
      { name: 'Summer Olympic Camp', startDate: '2025-07-14', endDate: '2025-07-21', price: '£2,000', level: 'All Levels' },
      { name: 'Junior Development Week', startDate: '2025-08-04', endDate: '2025-08-11', price: '£1,200', level: 'Beginner' },
      { name: 'Half-Term Skills Clinic', startDate: '2025-10-20', endDate: '2025-10-24', price: '£900', level: 'Intermediate' },
      { name: 'Winter Indoor Hockey', startDate: '2025-12-08', endDate: '2025-12-12', price: '£750', level: 'All Levels' },
      { name: 'Easter Hockey Camp', startDate: '2026-04-06', endDate: '2026-04-10', price: '£1,100', level: 'All Levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Olympic Park Hotel', pricePerWeek: 700, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Youth Hostel', pricePerWeek: 400, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Accommodation near Queen Elizabeth Olympic Park'
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
      minAge: 8,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Partnership with London schools for term-time training',
      medicalStaff: true,
      safeguarding: 'England Hockey safeguarding, DBS-checked coaches',
      airportPickup: true,
      mealPlan: 'Full board with sports nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English'],
      emergencyProtocol: 'On-site medic, Homerton Hospital 10 minutes'
    }
  },
  {
    id: 'nottingham-hockey-academy',
    name: 'Nottingham Hockey Academy',
    country: 'UK',
    countryFlag: '🇬🇧',
    city: 'Nottingham',
    lat: 52.940,
    lng: -1.132,
    website: 'https://www.nottinghamhockeyacademy.co.uk',
    contact: '+44 115 876 5400',
    contactEmail: 'info@nottinghamhockeyacademy.co.uk',
    description: 'Home of the National Hockey Centre and England Hockey. Train where the national team prepares with access to elite-level facilities and coaching.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Midlands city; no beach nearby' },
    priceRange: { from: 750, to: 2000, unit: 'week', display: '£750 - £2,000/week' },
    socialMedia: { instagram: '@nottshockey', facebook: 'https://facebook.com/nottinghamhockeyacademy', twitter: '@nottshockey' },
    climate: 'nottingham',
    facilities: 'National Hockey Centre, 2 water-based pitches, indoor hall, video analysis, gym, recovery facilities',
    courtSurfaces: ['Water-based turf', 'Sand-dressed turf', 'Indoor court'],
    programs: [
      { name: 'National Centre Training', price: '£2,000/week', desc: 'Elite training at the home of England Hockey with national coaches' },
      { name: 'Pathway Development', price: '£1,200/week', desc: 'Structured development program for players aspiring to county and regional hockey' },
      { name: 'Hockey Discovery', price: '£750/week', desc: 'Beginner-friendly introduction to hockey' }
    ],
    coaches: [
      { name: 'David Ralph', credential: 'England Hockey Level 4', background: 'England Hockey national programme coach. Expert in performance analysis and player development.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English'], instagram: null },
      { name: 'Sarah Jones', credential: 'England Hockey Level 3', background: 'Former England international. Specialist in goalkeeper coaching and youth pathway.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=800',
      'https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=800'
    ],
    upcomingCamps: [
      { name: 'National Centre Summer Camp', startDate: '2025-07-07', endDate: '2025-07-14', price: '£1,600', level: 'All Levels' },
      { name: 'Junior Hockey Week', startDate: '2025-08-11', endDate: '2025-08-18', price: '£1,000', level: 'Beginner' },
      { name: 'October Half-Term', startDate: '2025-10-20', endDate: '2025-10-24', price: '£800', level: 'Intermediate' },
      { name: 'Winter Indoor Camp', startDate: '2025-12-01', endDate: '2025-12-05', price: '£600', level: 'All Levels' },
      { name: 'Easter Camp', startDate: '2026-04-06', endDate: '2026-04-10', price: '£900', level: 'All Levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Nottingham Hotel', pricePerWeek: 450, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'University Halls', pricePerWeek: 280, maxOccupancy: 2, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Accommodation at University of Nottingham campus'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-15',
      spotsLeft: 24,
      responseTime: '72h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 8,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Partnership with Nottingham schools',
      medicalStaff: true,
      safeguarding: 'England Hockey safeguarding, DBS-checked staff',
      airportPickup: true,
      mealPlan: 'Full board with sports nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English'],
      emergencyProtocol: 'On-site medic, Queens Medical Centre 10 minutes'
    }
  },
  {
    id: 'dublin-hockey-school',
    name: 'Dublin Hockey School',
    country: 'Ireland',
    countryFlag: '🇮🇪',
    city: 'Dublin',
    lat: 53.349,
    lng: -6.260,
    website: 'https://www.dublinhockeyschool.ie',
    contact: '+353 1 668 4200',
    contactEmail: 'info@dublinhockeyschool.ie',
    description: 'Inspired by Ireland historic World Cup silver medal in 2018. Dublin hockey tradition runs deep and this academy channels that passion into player development.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 8, description: 'Sandymount Strand and Dublin Bay beaches 8km east' },
    priceRange: { from: 700, to: 1800, unit: 'week', display: '€700 - €1,800/week' },
    socialMedia: { instagram: '@dublinhockey', facebook: 'https://facebook.com/dublinhockeyschool', twitter: '@dublinhockey' },
    climate: 'dublin',
    facilities: 'Water-based pitch, sand-dressed training pitch, indoor hall, video analysis, gym, recovery room',
    courtSurfaces: ['Water-based turf', 'Sand-dressed turf', 'Indoor court'],
    programs: [
      { name: 'Green Army Camp', price: '€1,800/week', desc: 'Train with coaches from the Irish national programme' },
      { name: 'Youth Development', price: '€1,000/week', desc: 'Structured youth pathway following Hockey Ireland development plan' },
      { name: 'Starter Sticks', price: '€700/week', desc: 'Fun and inclusive introduction to hockey for beginners' }
    ],
    coaches: [
      { name: 'Conor Harte', credential: 'Hockey Ireland Master Coach', background: 'Irish international defender with 200+ caps. Penalty corner specialist and Olympic veteran.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Irish'], instagram: null },
      { name: 'Nikki Evans', credential: 'Hockey Ireland Level 3', background: 'Former Irish womens international. World Cup silver medallist 2018.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Irish'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=800',
      'https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=800'
    ],
    upcomingCamps: [
      { name: 'Dublin Summer Hockey', startDate: '2025-07-07', endDate: '2025-07-14', price: '€1,500', level: 'All Levels' },
      { name: 'Junior Green Camp', startDate: '2025-08-04', endDate: '2025-08-11', price: '€1,000', level: 'Beginner' },
      { name: 'Mid-Term Skills Clinic', startDate: '2025-10-27', endDate: '2025-10-31', price: '€750', level: 'Intermediate' },
      { name: 'Winter Indoor Festival', startDate: '2025-12-08', endDate: '2025-12-12', price: '€600', level: 'All Levels' },
      { name: 'Easter Hockey Camp', startDate: '2026-03-30', endDate: '2026-04-03', price: '€900', level: 'All Levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Dublin Hotel', pricePerWeek: 550, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Student Residence', pricePerWeek: 320, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Accommodation near UCD campus and training grounds'
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
      minAge: 8,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Partnership with Dublin schools',
      medicalStaff: true,
      safeguarding: 'Hockey Ireland safeguarding, Garda vetted coaches',
      airportPickup: true,
      mealPlan: 'Full board with Irish and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Irish'],
      emergencyProtocol: 'On-site first aid, St Vincent Hospital 10 minutes'
    }
  },
  {
    id: 'paris-hockey-academy',
    name: 'Paris Hockey Academy',
    country: 'France',
    countryFlag: '🇫🇷',
    city: 'Paris',
    lat: 48.856,
    lng: 2.352,
    website: 'https://www.parishockeyacademy.fr',
    contact: '+33 1 42 60 1500',
    contactEmail: 'info@parishockeyacademy.fr',
    description: 'Premier field hockey training in the French capital. Located near the Stade Jean-Bouin, combining elite coaching with the cultural richness of Paris.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Inland city; nearest coast 170km' },
    priceRange: { from: 950, to: 2600, unit: 'week', display: '€950 - €2,600/week' },
    socialMedia: { instagram: '@parishockey', facebook: 'https://facebook.com/parishockeyacademy', twitter: '@parishockey' },
    climate: 'paris',
    facilities: 'Water-based FIH-certified pitch, sand-dressed training pitch, indoor hall, video analysis suite, gym, physio room',
    courtSurfaces: ['Water-based turf', 'Sand-dressed turf', 'Indoor court'],
    programs: [
      { name: 'Elite Performance', price: '€2,400/week', desc: 'High-intensity program with former French international coaches and tactical analysis' },
      { name: 'Youth Pathway', price: '€1,300/week', desc: 'Structured development program following FFH methodology for ages 10-18' },
      { name: 'Découverte Hockey', price: '€950/week', desc: 'Introduction to field hockey for beginners in a welcoming environment' }
    ],
    coaches: [
      { name: 'Jérôme Dekeyser', credential: 'FFH Master Coach', background: 'Former France mens national team player with 150+ caps. Pan-European coaching experience.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['French', 'English', 'Dutch'], instagram: null },
      { name: 'Clémence Levaux', credential: 'FFH Level 3', background: 'Former French international midfielder. Specialist in midfield play and set pieces.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['French', 'English'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=800',
      'https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=800'
    ],
    upcomingCamps: [
      { name: 'Summer Hockey Festival', startDate: '2026-07-06', endDate: '2026-07-13', price: '€1,900', level: 'All Levels' },
      { name: 'Junior Development Camp', startDate: '2026-08-03', endDate: '2026-08-10', price: '€1,300', level: 'Beginner' },
      { name: 'Autumn Technique Clinic', startDate: '2026-10-12', endDate: '2026-10-16', price: '€950', level: 'Intermediate' },
      { name: 'Winter Indoor Camp', startDate: '2026-12-07', endDate: '2026-12-11', price: '€800', level: 'All Levels' },
      { name: 'Spring Pre-Season Camp', startDate: '2027-03-15', endDate: '2027-03-22', price: '€1,700', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Partner Hotel', pricePerWeek: 700, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Shared Residence', pricePerWeek: 420, maxOccupancy: 3, bathType: 'shared', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Accommodation in the 16th arrondissement near training grounds'
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
      minAge: 8,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Partnership with Paris international schools',
      medicalStaff: true,
      safeguarding: 'FFH safeguarding standards, background-checked coaches',
      airportPickup: true,
      mealPlan: 'Full board with French and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['French', 'English'],
      emergencyProtocol: 'On-site medic, Hôpital Georges-Pompidou 10 minutes'
    }
  },
  {
    id: 'lyon-hockey-centre',
    name: 'Lyon Hockey Centre',
    country: 'France',
    countryFlag: '🇫🇷',
    city: 'Lyon',
    lat: 45.764,
    lng: 4.835,
    website: 'https://www.lyonhockeycentre.fr',
    contact: '+33 4 72 10 2200',
    contactEmail: 'info@lyonhockeycentre.fr',
    description: 'A growing hockey hub in Frances second city. Excellent facilities and a strong youth development program in the heart of the Rhône-Alpes region.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Inland city; nearest coast 300km' },
    priceRange: { from: 800, to: 2200, unit: 'week', display: '€800 - €2,200/week' },
    socialMedia: { instagram: '@lyonhockey', facebook: 'https://facebook.com/lyonhockeycentre', twitter: '@lyonhockey' },
    climate: 'lyon',
    facilities: 'Water-based turf pitch, sand-dressed training pitch, indoor hall, gym, video analysis room, recovery area',
    courtSurfaces: ['Water-based turf', 'Sand-dressed turf', 'Indoor court'],
    programs: [
      { name: 'Performance Programme', price: '€2,000/week', desc: 'Advanced training with experienced coaches focusing on tactical and technical excellence' },
      { name: 'Youth Academy', price: '€1,100/week', desc: 'Age-appropriate development following FFH youth methodology' },
      { name: 'Hockey Initiation', price: '€800/week', desc: 'Fun introductory sessions for newcomers to field hockey' }
    ],
    coaches: [
      { name: 'Thierry Brinkman', credential: 'FFH Master Coach', background: 'Former French league coach with 20 years experience developing young talent across Europe.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['French', 'English'], instagram: null },
      { name: 'Marie Dupont', credential: 'FFH Level 3', background: 'Former French international forward. Specialist in attacking play and goal scoring.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['French', 'English', 'Spanish'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=800',
      'https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=800'
    ],
    upcomingCamps: [
      { name: 'Summer Intensive', startDate: '2026-07-13', endDate: '2026-07-20', price: '€1,600', level: 'Intermediate' },
      { name: 'Junior Skills Week', startDate: '2026-08-10', endDate: '2026-08-17', price: '€1,100', level: 'Beginner' },
      { name: 'Autumn Masterclass', startDate: '2026-10-19', endDate: '2026-10-23', price: '€850', level: 'Advanced' },
      { name: 'Winter Indoor Training', startDate: '2026-12-14', endDate: '2026-12-18', price: '€700', level: 'All Levels' },
      { name: 'Spring Development Camp', startDate: '2027-03-22', endDate: '2027-03-29', price: '€1,500', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Partner Hotel', pricePerWeek: 550, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Student Residence', pricePerWeek: 320, maxOccupancy: 3, bathType: 'shared', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Accommodation near Gerland sports complex'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-06-15',
      spotsLeft: 16,
      responseTime: '48h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 8,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Partnership with Lyon international schools',
      medicalStaff: true,
      safeguarding: 'FFH safeguarding protocols, vetted coaching staff',
      airportPickup: true,
      mealPlan: 'Full board with French cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['French', 'English'],
      emergencyProtocol: 'On-site first aid, Hôpital Édouard Herriot 15 minutes'
    }
  },
  {
    id: 'vienna-hockey-academy',
    name: 'Vienna Hockey Academy',
    country: 'Austria',
    countryFlag: '🇦🇹',
    city: 'Vienna',
    lat: 48.208,
    lng: 16.373,
    website: 'https://www.viennahockeyacademy.at',
    contact: '+43 1 512 3400',
    contactEmail: 'info@viennahockeyacademy.at',
    description: 'Austrias leading field hockey academy set in the sporting heart of Vienna. Combining Central European tradition with modern coaching methods.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Inland city; Danube river recreation nearby' },
    priceRange: { from: 800, to: 2200, unit: 'week', display: '€800 - €2,200/week' },
    socialMedia: { instagram: '@viennahockey', facebook: 'https://facebook.com/viennahockeyacademy', twitter: '@viennahockey' },
    climate: 'vienna',
    facilities: 'Water-based turf pitch, sand-dressed pitch, indoor hall, fitness centre, video analysis, physiotherapy',
    courtSurfaces: ['Water-based turf', 'Sand-dressed turf', 'Indoor court'],
    programs: [
      { name: 'Elite Training', price: '€2,000/week', desc: 'Intensive program with former Austrian international coaches and video-based tactical work' },
      { name: 'Youth Development', price: '€1,100/week', desc: 'Pathway program for juniors following ÖHV development framework' },
      { name: 'Beginner Programme', price: '€800/week', desc: 'Learn hockey fundamentals in a supportive and fun environment' }
    ],
    coaches: [
      { name: 'Andreas Bauer', credential: 'ÖHV Master Coach', background: 'Former Austrian mens national team captain with 180+ caps. Expert in defensive systems.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['German', 'English'], instagram: null },
      { name: 'Katharina Schreiber', credential: 'ÖHV Level 3', background: 'Former Austrian international. Specialist in goalkeeper coaching and penalty corners.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['German', 'English', 'French'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=800',
      'https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=800'
    ],
    upcomingCamps: [
      { name: 'Summer Hockey Camp', startDate: '2026-07-06', endDate: '2026-07-13', price: '€1,700', level: 'All Levels' },
      { name: 'Junior Camp', startDate: '2026-08-03', endDate: '2026-08-10', price: '€1,100', level: 'Beginner' },
      { name: 'Autumn Skills Week', startDate: '2026-10-12', endDate: '2026-10-16', price: '€850', level: 'Intermediate' },
      { name: 'Winter Indoor Camp', startDate: '2026-12-07', endDate: '2026-12-11', price: '€700', level: 'All Levels' },
      { name: 'Spring Preparation', startDate: '2027-03-15', endDate: '2027-03-22', price: '€1,500', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Partner Hotel', pricePerWeek: 600, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Shared Apartment', pricePerWeek: 350, maxOccupancy: 3, bathType: 'shared', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Accommodation in Leopoldstadt near the Prater sports area'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-06-01',
      spotsLeft: 15,
      responseTime: '24h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 8,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Partnership with Vienna International School',
      medicalStaff: true,
      safeguarding: 'ÖHV safeguarding standards, police-checked coaches',
      airportPickup: true,
      mealPlan: 'Full board with Austrian and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['German', 'English'],
      emergencyProtocol: 'On-site medic, AKH Wien 15 minutes'
    }
  },
  {
    id: 'poznan-hockey-centre',
    name: 'Poznań Hockey Centre',
    country: 'Poland',
    countryFlag: '🇵🇱',
    city: 'Poznań',
    lat: 52.407,
    lng: 16.930,
    website: 'https://www.poznanhockeycentre.pl',
    contact: '+48 61 852 3400',
    contactEmail: 'info@poznanhockeycentre.pl',
    description: 'Polands top field hockey training facility in the sports-passionate city of Poznań. Strong traditions in Polish hockey with modern European coaching.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Inland city; Baltic coast 300km north' },
    priceRange: { from: 500, to: 1400, unit: 'week', display: '€500 - €1,400/week' },
    socialMedia: { instagram: '@poznanhockey', facebook: 'https://facebook.com/poznanhockeycentre', twitter: '@poznanhockey' },
    climate: 'poznan',
    facilities: 'Water-based turf pitch, sand-dressed pitch, indoor hall, gym, video analysis room, physiotherapy room',
    courtSurfaces: ['Water-based turf', 'Sand-dressed turf', 'Indoor court'],
    programs: [
      { name: 'Performance Programme', price: '€1,200/week', desc: 'Intensive training with Polish national-level coaches and tactical development' },
      { name: 'Youth Academy', price: '€750/week', desc: 'Development pathway for young players following PZHL methodology' },
      { name: 'Hockey Start', price: '€500/week', desc: 'Beginner-friendly introduction to field hockey with basic skills and game play' }
    ],
    coaches: [
      { name: 'Tomasz Kowalski', credential: 'PZHL Master Coach', background: 'Former Polish mens national team player with 120+ caps. Experienced in European club coaching.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Polish', 'English', 'German'], instagram: null },
      { name: 'Anna Nowak', credential: 'PZHL Level 3', background: 'Former Polish international. Expert in youth development and skills coaching.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Polish', 'English'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=800',
      'https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=800'
    ],
    upcomingCamps: [
      { name: 'Summer Hockey Camp', startDate: '2026-07-06', endDate: '2026-07-13', price: '€1,000', level: 'All Levels' },
      { name: 'Junior Skills Camp', startDate: '2026-08-03', endDate: '2026-08-10', price: '€750', level: 'Beginner' },
      { name: 'Autumn Intensive', startDate: '2026-10-12', endDate: '2026-10-16', price: '€600', level: 'Intermediate' },
      { name: 'Winter Indoor Camp', startDate: '2026-12-07', endDate: '2026-12-11', price: '€500', level: 'All Levels' },
      { name: 'Spring Training Camp', startDate: '2027-03-15', endDate: '2027-03-22', price: '€900', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Partner Hotel', pricePerWeek: 350, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Student Dormitory', pricePerWeek: 200, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Accommodation near Golęcin sports complex'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-06-01',
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
      schooling: 'Partnership with Poznań international schools',
      medicalStaff: true,
      safeguarding: 'PZHL safeguarding standards, background-checked coaches',
      airportPickup: true,
      mealPlan: 'Full board with Polish and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Polish', 'English', 'German'],
      emergencyProtocol: 'On-site first aid, Szpital Kliniczny 10 minutes'
    }
  },
  {
    id: 'prague-hockey-academy',
    name: 'Prague Hockey Academy',
    country: 'Czech Republic',
    countryFlag: '🇨🇿',
    city: 'Prague',
    lat: 50.076,
    lng: 14.438,
    website: 'https://www.praguehockeyacademy.cz',
    contact: '+420 221 714 500',
    contactEmail: 'info@praguehockeyacademy.cz',
    description: 'The Czech Republics premier field hockey academy in the historic capital. Strong technical coaching rooted in Central European hockey traditions.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Inland city; nearest coast 400km' },
    priceRange: { from: 600, to: 1600, unit: 'week', display: '€600 - €1,600/week' },
    socialMedia: { instagram: '@praguehockey', facebook: 'https://facebook.com/praguehockeyacademy', twitter: '@praguehockey' },
    climate: 'prague',
    facilities: 'Water-based turf pitch, sand-dressed training pitch, indoor hall, gym, video analysis room, recovery room',
    courtSurfaces: ['Water-based turf', 'Sand-dressed turf', 'Indoor court'],
    programs: [
      { name: 'Elite Programme', price: '€1,400/week', desc: 'High-level training with Czech national-level coaches and European competition preparation' },
      { name: 'Youth Development', price: '€900/week', desc: 'Structured youth pathway following ČSP development methodology' },
      { name: 'Beginner Hockey', price: '€600/week', desc: 'Introduction to hockey in a friendly and supportive setting' }
    ],
    coaches: [
      { name: 'Jakub Procházka', credential: 'ČSP Master Coach', background: 'Former Czech mens national team captain. 15 years of coaching experience at international level.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Czech', 'English', 'German'], instagram: null },
      { name: 'Petra Horáčková', credential: 'ČSP Level 3', background: 'Former Czech international midfielder. Youth development specialist with focus on technical skills.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Czech', 'English'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=800',
      'https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=800'
    ],
    upcomingCamps: [
      { name: 'Summer Camp Prague', startDate: '2026-07-13', endDate: '2026-07-20', price: '€1,200', level: 'All Levels' },
      { name: 'Junior Academy Week', startDate: '2026-08-10', endDate: '2026-08-17', price: '€900', level: 'Beginner' },
      { name: 'Autumn Skills Clinic', startDate: '2026-10-19', endDate: '2026-10-23', price: '€650', level: 'Intermediate' },
      { name: 'Winter Indoor Camp', startDate: '2026-12-14', endDate: '2026-12-18', price: '€550', level: 'All Levels' },
      { name: 'Spring Prep Camp', startDate: '2027-03-22', endDate: '2027-03-29', price: '€1,100', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Partner Hotel', pricePerWeek: 450, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Shared Apartment', pricePerWeek: 250, maxOccupancy: 3, bathType: 'shared', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Accommodation in Prague 6 near Strahov sports complex'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-06-01',
      spotsLeft: 20,
      responseTime: '24h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 8,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Partnership with Prague international schools',
      medicalStaff: true,
      safeguarding: 'ČSP safeguarding standards, background-checked coaches',
      airportPickup: true,
      mealPlan: 'Full board with Czech and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Czech', 'English', 'German'],
      emergencyProtocol: 'On-site first aid, Motol University Hospital 15 minutes'
    }
  },
  {
    id: 'glasgow-hockey-academy',
    name: 'Glasgow Hockey Academy',
    country: 'UK',
    countryFlag: '🇬🇧',
    city: 'Glasgow',
    lat: 55.861,
    lng: -4.250,
    website: 'https://www.glasgowhockeyacademy.co.uk',
    contact: '+44 141 332 4500',
    contactEmail: 'info@glasgowhockeyacademy.co.uk',
    description: 'Scotlands flagship field hockey academy based at the Glasgow National Hockey Centre. Home of Scottish Hockey with world-class facilities.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 50, description: 'Ayrshire coast 50km west' },
    priceRange: { from: 750, to: 2100, unit: 'week', display: '€750 - €2,100/week' },
    socialMedia: { instagram: '@glasgowhockey', facebook: 'https://facebook.com/glasgowhockeyacademy', twitter: '@glasgowhockey' },
    climate: 'glasgow',
    facilities: 'Water-based turf pitch, sand-dressed pitch, indoor hall, strength and conditioning gym, video analysis, recovery suite',
    courtSurfaces: ['Water-based turf', 'Sand-dressed turf', 'Indoor court'],
    programs: [
      { name: 'Performance Programme', price: '€1,900/week', desc: 'Elite training with Scottish Hockey coaches and international match preparation' },
      { name: 'Youth Pathway', price: '€1,100/week', desc: 'Development programme for aspiring young players following Scottish Hockey pathways' },
      { name: 'Introduction to Hockey', price: '€750/week', desc: 'Fun and engaging introduction to field hockey for all ages' }
    ],
    coaches: [
      { name: 'Craig Fulton', credential: 'Scottish Hockey Level 4', background: 'Former international coach with experience across multiple national teams. Tactical and strategic specialist.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English'], instagram: null },
      { name: 'Alison Bell', credential: 'Scottish Hockey Level 3', background: 'Former Scotland womens international with 100+ caps. Expert in attacking play and skills development.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=800',
      'https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=800'
    ],
    upcomingCamps: [
      { name: 'Summer Hockey Festival', startDate: '2026-07-06', endDate: '2026-07-13', price: '€1,600', level: 'All Levels' },
      { name: 'Junior Development Camp', startDate: '2026-08-03', endDate: '2026-08-10', price: '€1,100', level: 'Beginner' },
      { name: 'Autumn Skills Week', startDate: '2026-10-12', endDate: '2026-10-16', price: '€800', level: 'Intermediate' },
      { name: 'Winter Indoor Camp', startDate: '2026-12-07', endDate: '2026-12-11', price: '€650', level: 'All Levels' },
      { name: 'Spring Prep Camp', startDate: '2027-03-15', endDate: '2027-03-22', price: '€1,400', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Partner Hotel', pricePerWeek: 500, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'University Residence', pricePerWeek: 300, maxOccupancy: 3, bathType: 'shared', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Accommodation near Glasgow Green and the National Hockey Centre'
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
      minAge: 8,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Partnership with Glasgow schools',
      medicalStaff: true,
      safeguarding: 'Scottish Hockey safeguarding, PVG-checked coaches',
      airportPickup: true,
      mealPlan: 'Full board with Scottish and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English'],
      emergencyProtocol: 'On-site first aid, Queen Elizabeth University Hospital 10 minutes'
    }
  },
  {
    id: 'cardiff-hockey-academy',
    name: 'Cardiff Hockey Academy',
    country: 'UK',
    countryFlag: '🇬🇧',
    city: 'Cardiff',
    lat: 51.482,
    lng: -3.179,
    website: 'https://www.cardiffhockeyacademy.co.uk',
    contact: '+44 29 2087 4500',
    contactEmail: 'info@cardiffhockeyacademy.co.uk',
    description: 'The premier hockey development centre in Wales. Based at the Sports Wales National Centre with excellent facilities and a strong community ethos.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 20, description: 'Barry Island beach 20km south' },
    priceRange: { from: 700, to: 1900, unit: 'week', display: '€700 - €1,900/week' },
    socialMedia: { instagram: '@cardiffhockey', facebook: 'https://facebook.com/cardiffhockeyacademy', twitter: '@cardiffhockey' },
    climate: 'cardiff',
    facilities: 'Water-based turf pitch, sand-dressed training pitch, indoor hall, gym, video analysis room, physio suite',
    courtSurfaces: ['Water-based turf', 'Sand-dressed turf', 'Indoor court'],
    programs: [
      { name: 'Performance Programme', price: '€1,700/week', desc: 'Advanced training programme with Hockey Wales coaches and competitive match play' },
      { name: 'Youth Development', price: '€1,000/week', desc: 'Pathway programme for young players following Hockey Wales development framework' },
      { name: 'Starter Sessions', price: '€700/week', desc: 'Beginner-friendly programme covering all hockey basics in a welcoming environment' }
    ],
    coaches: [
      { name: 'Gareth Davies', credential: 'Hockey Wales Level 4', background: 'Former Wales mens captain with 150+ caps. Experienced in developing players from grassroots to international level.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Welsh'], instagram: null },
      { name: 'Rhian Williams', credential: 'Hockey Wales Level 3', background: 'Former Wales womens international. Specialist in goalkeeping and defensive structures.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Welsh'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=800',
      'https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=800'
    ],
    upcomingCamps: [
      { name: 'Summer Hockey Camp', startDate: '2026-07-13', endDate: '2026-07-20', price: '€1,400', level: 'All Levels' },
      { name: 'Junior Camp Wales', startDate: '2026-08-10', endDate: '2026-08-17', price: '€1,000', level: 'Beginner' },
      { name: 'Autumn Half-Term Clinic', startDate: '2026-10-26', endDate: '2026-10-30', price: '€750', level: 'Intermediate' },
      { name: 'Winter Indoor Camp', startDate: '2026-12-14', endDate: '2026-12-18', price: '€600', level: 'All Levels' },
      { name: 'Spring Development Camp', startDate: '2027-03-29', endDate: '2027-04-05', price: '€1,200', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Partner Hotel', pricePerWeek: 480, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'University Halls', pricePerWeek: 280, maxOccupancy: 3, bathType: 'shared', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Accommodation near Sophia Gardens and the National Centre'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-06-01',
      spotsLeft: 18,
      responseTime: '48h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 8,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Partnership with Cardiff schools',
      medicalStaff: true,
      safeguarding: 'Hockey Wales safeguarding, DBS-checked coaches',
      airportPickup: true,
      mealPlan: 'Full board with Welsh and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Welsh'],
      emergencyProtocol: 'On-site first aid, University Hospital of Wales 10 minutes'
    }
  },
  {
    id: 'rome-hockey-academy',
    name: 'Rome Hockey Academy',
    country: 'Italy',
    countryFlag: '🇮🇹',
    city: 'Rome',
    lat: 41.903,
    lng: 12.496,
    website: 'https://www.romehockeyacademy.it',
    contact: '+39 06 3218 4500',
    contactEmail: 'info@romehockeyacademy.it',
    description: 'Italys foremost field hockey academy in the Eternal City. Mediterranean climate and passionate coaching create an ideal training environment.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 30, description: 'Ostia beach 30km west' },
    priceRange: { from: 800, to: 2200, unit: 'week', display: '€800 - €2,200/week' },
    socialMedia: { instagram: '@romehockey', facebook: 'https://facebook.com/romehockeyacademy', twitter: '@romehockey' },
    climate: 'rome',
    facilities: 'Water-based turf pitch, sand-dressed pitch, indoor training hall, gym, video analysis, recovery area',
    courtSurfaces: ['Water-based turf', 'Sand-dressed turf', 'Indoor court'],
    programs: [
      { name: 'Performance Programme', price: '€2,000/week', desc: 'Intensive training with former Italian international coaches in a Mediterranean setting' },
      { name: 'Youth Academy', price: '€1,100/week', desc: 'Development programme following FIH Italia youth methodology' },
      { name: 'Hockey Intro', price: '€800/week', desc: 'Fun introduction to hockey for beginners of all ages' }
    ],
    coaches: [
      { name: 'Marco Rossi', credential: 'FIH Italia Master Coach', background: 'Former Italian mens national team player with 130+ caps. Expert in European-style positional play.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Italian', 'English', 'Spanish'], instagram: null },
      { name: 'Giulia Ferrari', credential: 'FIH Italia Level 3', background: 'Former Italian international forward. Specialist in attacking skills and penalty corner routines.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Italian', 'English'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=800',
      'https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=800'
    ],
    upcomingCamps: [
      { name: 'Summer Hockey Camp', startDate: '2026-06-29', endDate: '2026-07-06', price: '€1,700', level: 'All Levels' },
      { name: 'Junior Camp Roma', startDate: '2026-08-03', endDate: '2026-08-10', price: '€1,100', level: 'Beginner' },
      { name: 'Autumn Technique Clinic', startDate: '2026-10-12', endDate: '2026-10-16', price: '€850', level: 'Intermediate' },
      { name: 'Winter Skills Camp', startDate: '2026-12-07', endDate: '2026-12-11', price: '€700', level: 'All Levels' },
      { name: 'Spring Pre-Season Camp', startDate: '2027-03-15', endDate: '2027-03-22', price: '€1,500', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Partner Hotel', pricePerWeek: 600, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Shared Apartment', pricePerWeek: 380, maxOccupancy: 3, bathType: 'shared', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Accommodation in EUR district near Tre Fontane sports complex'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-06-01',
      spotsLeft: 20,
      responseTime: '24h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 8,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Partnership with Rome international schools',
      medicalStaff: true,
      safeguarding: 'FIH Italia safeguarding protocols, vetted coaches',
      airportPickup: true,
      mealPlan: 'Full board with Italian and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Italian', 'English'],
      emergencyProtocol: 'On-site medic, Ospedale San Camillo 10 minutes'
    }
  },
  {
    id: 'zurich-hockey-academy',
    name: 'Zurich Hockey Academy',
    country: 'Switzerland',
    countryFlag: '🇨🇭',
    city: 'Zurich',
    lat: 47.377,
    lng: 8.541,
    website: 'https://www.zurichhockeyacademy.ch',
    contact: '+41 44 380 2200',
    contactEmail: 'info@zurichhockeyacademy.ch',
    description: 'Switzerlands premier field hockey training centre on the shores of Lake Zurich. Swiss precision coaching in a stunning Alpine setting.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Lakeside city; Lake Zurich swimming areas nearby' },
    priceRange: { from: 1100, to: 3000, unit: 'week', display: '€1,100 - €3,000/week' },
    socialMedia: { instagram: '@zurichhockey', facebook: 'https://facebook.com/zurichhockeyacademy', twitter: '@zurichhockey' },
    climate: 'zurich',
    facilities: 'Water-based turf pitch, sand-dressed pitch, indoor hall, state-of-the-art gym, video analysis lab, cryotherapy',
    courtSurfaces: ['Water-based turf', 'Sand-dressed turf', 'Indoor court'],
    programs: [
      { name: 'Elite Performance', price: '€2,800/week', desc: 'Premium training with Swiss and international coaches in world-class facilities' },
      { name: 'Youth Development', price: '€1,500/week', desc: 'Pathway programme following Swiss Hockey federation development standards' },
      { name: 'Beginner Programme', price: '€1,100/week', desc: 'Learn hockey fundamentals in a professional and supportive environment' }
    ],
    coaches: [
      { name: 'Lukas Müller', credential: 'Swiss Hockey Master Coach', background: 'Former Swiss mens national team coach. Extensive experience in European and international hockey development.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['German', 'English', 'French'], instagram: null },
      { name: 'Sabine Keller', credential: 'Swiss Hockey Level 3', background: 'Former Swiss international with European championship experience. Specialist in midfield play.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['German', 'English', 'Italian'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=800',
      'https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=800'
    ],
    upcomingCamps: [
      { name: 'Summer Hockey Camp', startDate: '2026-07-06', endDate: '2026-07-13', price: '€2,200', level: 'All Levels' },
      { name: 'Junior Alpine Camp', startDate: '2026-08-03', endDate: '2026-08-10', price: '€1,500', level: 'Beginner' },
      { name: 'Autumn Skills Clinic', startDate: '2026-10-12', endDate: '2026-10-16', price: '€1,100', level: 'Intermediate' },
      { name: 'Winter Indoor Camp', startDate: '2026-12-07', endDate: '2026-12-11', price: '€950', level: 'All Levels' },
      { name: 'Spring Preparation', startDate: '2027-03-15', endDate: '2027-03-22', price: '€2,000', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Lakeside Hotel', pricePerWeek: 850, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Shared Apartment', pricePerWeek: 550, maxOccupancy: 3, bathType: 'shared', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Accommodation near Oerlikon sports district'
    },
    availability: {
      status: 'limited',
      nextIntake: '2026-06-01',
      spotsLeft: 10,
      responseTime: '24h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 8,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Partnership with Zurich International School',
      medicalStaff: true,
      safeguarding: 'Swiss Hockey safeguarding standards, background-checked coaches',
      airportPickup: true,
      mealPlan: 'Full board with Swiss and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['German', 'English', 'French'],
      emergencyProtocol: 'On-site medic, Universitätsspital Zürich 10 minutes'
    }
  },
  {
    id: 'copenhagen-hockey-centre',
    name: 'Copenhagen Hockey Centre',
    country: 'Denmark',
    countryFlag: '🇩🇰',
    city: 'Copenhagen',
    lat: 55.676,
    lng: 12.569,
    website: 'https://www.copenhagenhockeycentre.dk',
    contact: '+45 33 12 4500',
    contactEmail: 'info@copenhagenhockeycentre.dk',
    description: 'Denmarks top field hockey training centre in the vibrant capital. Scandinavian coaching philosophy with emphasis on teamwork and technical skill.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 10, description: 'Amager Strandpark beach 10km east' },
    priceRange: { from: 900, to: 2400, unit: 'week', display: '€900 - €2,400/week' },
    socialMedia: { instagram: '@cphhockey', facebook: 'https://facebook.com/copenhagenhockeycentre', twitter: '@cphhockey' },
    climate: 'copenhagen',
    facilities: 'Water-based turf pitch, sand-dressed pitch, indoor hall, gym, video analysis room, recovery suite',
    courtSurfaces: ['Water-based turf', 'Sand-dressed turf', 'Indoor court'],
    programs: [
      { name: 'Performance Programme', price: '€2,200/week', desc: 'Intensive training with Danish national-level coaches and Scandinavian tactical approach' },
      { name: 'Youth Academy', price: '€1,200/week', desc: 'Development programme following Danish Hockey Federation methodology' },
      { name: 'Beginner Hockey', price: '€900/week', desc: 'Welcoming introduction to field hockey with Danish coaching philosophy' }
    ],
    coaches: [
      { name: 'Frederik Andersen', credential: 'DHF Master Coach', background: 'Former Danish mens national team player with 140+ caps. Expert in Scandinavian positional play systems.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Danish', 'English', 'German'], instagram: null },
      { name: 'Sofie Nielsen', credential: 'DHF Level 3', background: 'Former Danish international. Specialist in youth coaching and technical skill development.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Danish', 'English', 'Swedish'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=800',
      'https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=800'
    ],
    upcomingCamps: [
      { name: 'Summer Hockey Festival', startDate: '2026-07-06', endDate: '2026-07-13', price: '€1,800', level: 'All Levels' },
      { name: 'Junior Development Camp', startDate: '2026-08-03', endDate: '2026-08-10', price: '€1,200', level: 'Beginner' },
      { name: 'Autumn Skills Week', startDate: '2026-10-12', endDate: '2026-10-16', price: '€900', level: 'Intermediate' },
      { name: 'Winter Indoor Camp', startDate: '2026-12-07', endDate: '2026-12-11', price: '€750', level: 'All Levels' },
      { name: 'Spring Prep Camp', startDate: '2027-03-15', endDate: '2027-03-22', price: '€1,600', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Partner Hotel', pricePerWeek: 650, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Student Residence', pricePerWeek: 400, maxOccupancy: 3, bathType: 'shared', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Accommodation near Østerbro sports district'
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
      minAge: 8,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Partnership with Copenhagen International School',
      medicalStaff: true,
      safeguarding: 'DHF safeguarding standards, background-checked coaches',
      airportPickup: true,
      mealPlan: 'Full board with Danish and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Danish', 'English'],
      emergencyProtocol: 'On-site first aid, Rigshospitalet 10 minutes'
    }
  },
  {
    id: 'malmo-hockey-academy',
    name: 'Malmö Hockey Academy',
    country: 'Sweden',
    countryFlag: '🇸🇪',
    city: 'Malmö',
    lat: 55.605,
    lng: 13.000,
    website: 'https://www.malmohockeyacademy.se',
    contact: '+46 40 660 2200',
    contactEmail: 'info@malmohockeyacademy.se',
    description: 'Swedens leading field hockey academy in the coastal city of Malmö. Scandinavian training methods with a focus on player development and well-being.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 5, description: 'Ribersborg beach 5km west' },
    priceRange: { from: 850, to: 2300, unit: 'week', display: '€850 - €2,300/week' },
    socialMedia: { instagram: '@malmohockey', facebook: 'https://facebook.com/malmohockeyacademy', twitter: '@malmohockey' },
    climate: 'malmo',
    facilities: 'Water-based turf pitch, sand-dressed pitch, indoor hall, modern gym, video analysis suite, wellness centre',
    courtSurfaces: ['Water-based turf', 'Sand-dressed turf', 'Indoor court'],
    programs: [
      { name: 'Elite Programme', price: '€2,100/week', desc: 'Top-level training with Swedish international coaches and cross-border Øresund competitions' },
      { name: 'Youth Development', price: '€1,200/week', desc: 'Structured pathway following Swedish Hockey Federation youth development model' },
      { name: 'Beginner Programme', price: '€850/week', desc: 'Introduction to hockey in the welcoming Scandinavian training environment' }
    ],
    coaches: [
      { name: 'Erik Johansson', credential: 'SHF Master Coach', background: 'Former Swedish mens national team player. 10 years coaching experience in Scandinavian leagues.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Swedish', 'English', 'Danish'], instagram: null },
      { name: 'Linnea Svensson', credential: 'SHF Level 3', background: 'Former Swedish international midfielder. Expert in technical skill development and youth coaching.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Swedish', 'English'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=800',
      'https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=800'
    ],
    upcomingCamps: [
      { name: 'Summer Hockey Camp', startDate: '2026-07-06', endDate: '2026-07-13', price: '€1,700', level: 'All Levels' },
      { name: 'Junior Scandinavian Camp', startDate: '2026-08-03', endDate: '2026-08-10', price: '€1,200', level: 'Beginner' },
      { name: 'Autumn Skills Clinic', startDate: '2026-10-12', endDate: '2026-10-16', price: '€850', level: 'Intermediate' },
      { name: 'Winter Indoor Camp', startDate: '2026-12-07', endDate: '2026-12-11', price: '€700', level: 'All Levels' },
      { name: 'Spring Pre-Season', startDate: '2027-03-15', endDate: '2027-03-22', price: '€1,500', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Partner Hotel', pricePerWeek: 600, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Shared Apartment', pricePerWeek: 380, maxOccupancy: 3, bathType: 'shared', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Accommodation near Stadion area and training facilities'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-06-01',
      spotsLeft: 14,
      responseTime: '24h',
      privateLessons: true,
      yearRound: false
    },
    juniorInfo: {
      minAge: 8,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Partnership with Malmö international schools',
      medicalStaff: true,
      safeguarding: 'SHF safeguarding standards, background-checked coaches',
      airportPickup: true,
      mealPlan: 'Full board with Swedish and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Swedish', 'English', 'Danish'],
      emergencyProtocol: 'On-site first aid, Skåne University Hospital 10 minutes'
    }
  },
  {
    id: 'lisbon-hockey-academy',
    name: 'Lisbon Hockey Academy',
    country: 'Portugal',
    countryFlag: '🇵🇹',
    city: 'Lisbon',
    lat: 38.722,
    lng: -9.139,
    website: 'https://www.lisbonhockeyacademy.pt',
    contact: '+351 21 340 4500',
    contactEmail: 'info@lisbonhockeyacademy.pt',
    description: 'Portugals leading field hockey academy in the sunny capital. Year-round outdoor training with Atlantic breezes and a growing hockey community.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 15, description: 'Costa da Caparica beach 15km south' },
    priceRange: { from: 700, to: 1900, unit: 'week', display: '€700 - €1,900/week' },
    socialMedia: { instagram: '@lisbonhockey', facebook: 'https://facebook.com/lisbonhockeyacademy', twitter: '@lisbonhockey' },
    climate: 'lisbon',
    facilities: 'Water-based turf pitch, sand-dressed pitch, indoor hall, gym, video analysis room, recovery pool',
    courtSurfaces: ['Water-based turf', 'Sand-dressed turf', 'Indoor court'],
    programs: [
      { name: 'Performance Programme', price: '€1,700/week', desc: 'Intensive training in an ideal climate with Portuguese and international coaches' },
      { name: 'Youth Development', price: '€1,000/week', desc: 'Structured youth programme following FPH development methodology' },
      { name: 'Beginner Hockey', price: '€700/week', desc: 'Introduction to hockey in a warm and welcoming environment' }
    ],
    coaches: [
      { name: 'Pedro Santos', credential: 'FPH Master Coach', background: 'Former Portuguese mens national team player with 120+ caps. Experienced in developing hockey in emerging nations.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Portuguese', 'English', 'Spanish'], instagram: null },
      { name: 'Ana Rodrigues', credential: 'FPH Level 3', background: 'Former Portuguese international. Specialist in skills coaching and youth player development.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Portuguese', 'English'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=800',
      'https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=800'
    ],
    upcomingCamps: [
      { name: 'Summer Hockey Camp', startDate: '2026-06-29', endDate: '2026-07-06', price: '€1,400', level: 'All Levels' },
      { name: 'Junior Camp Lisboa', startDate: '2026-08-03', endDate: '2026-08-10', price: '€1,000', level: 'Beginner' },
      { name: 'Autumn Skills Clinic', startDate: '2026-10-12', endDate: '2026-10-16', price: '€750', level: 'Intermediate' },
      { name: 'Winter Training Camp', startDate: '2026-12-07', endDate: '2026-12-11', price: '€650', level: 'All Levels' },
      { name: 'Spring Development Camp', startDate: '2027-03-15', endDate: '2027-03-22', price: '€1,200', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Partner Hotel', pricePerWeek: 500, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Shared Apartment', pricePerWeek: 300, maxOccupancy: 3, bathType: 'shared', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Accommodation near Jamor National Sports Centre'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-06-01',
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
      schooling: 'Partnership with Lisbon international schools',
      medicalStaff: true,
      safeguarding: 'FPH safeguarding protocols, vetted coaching staff',
      airportPickup: true,
      mealPlan: 'Full board with Portuguese and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Portuguese', 'English', 'Spanish'],
      emergencyProtocol: 'On-site first aid, Hospital de Santa Maria 15 minutes'
    }
  },
  {
    id: 'belgrade-hockey-club',
    name: 'Belgrade Hockey Club',
    country: 'Serbia',
    countryFlag: '🇷🇸',
    city: 'Belgrade',
    lat: 44.7866,
    lng: 20.4489,
    website: 'https://www.belgradehockey.rs',
    contact: '+381 11 789 0123',
    contactEmail: 'info@belgradehockey.rs',
    description: 'Serbia\'s leading field hockey club in Belgrade, developing the sport with European coaching methods and growing participation in Balkan hockey.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby, Danube riverside recreation areas' },
    priceRange: { from: 400, to: 1000, unit: 'week', display: '€400 - €1,000/week' },
    socialMedia: { instagram: '@belgradehockey', facebook: 'https://facebook.com/belgradehockey', twitter: '@belgradehockey' },
    climate: 'belgrade',
    facilities: 'Artificial turf hockey pitch, indoor training hall, video analysis, gym, recovery room, clubhouse',
    courtSurfaces: ['Artificial turf pitch', 'Indoor court', 'Training pitch'],
    programs: [
      { name: 'Belgrade Hockey Development', price: '€800/week', desc: 'Intensive hockey training with European coaching methodology' },
      { name: 'Youth Hockey Introduction', price: '€400/week', desc: 'Fun and skills-based hockey for young beginners' }
    ],
    coaches: [
      { name: 'Petar Đorđević', credential: 'FIH Level 2 Coach', background: 'Former Serbian national team player and Balkan hockey development coach', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Serbian', 'English'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=800'],
    upcomingCamps: [
      { name: 'Belgrade Summer Hockey Camp', startDate: '2026-07-13', endDate: '2026-07-20', price: '€800', level: 'All levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Belgrade Sport Hotel', pricePerWeek: 250, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Sports hotel in New Belgrade near the hockey complex'
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
      minAge: 8,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Partnership with Belgrade international schools',
      medicalStaff: true,
      safeguarding: 'Serbian Hockey Federation safeguarding protocols, vetted coaching staff',
      airportPickup: true,
      mealPlan: 'Full board with Serbian and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Serbian', 'English'],
      emergencyProtocol: 'On-site first aid, Clinical Centre of Serbia 15 minutes'
    }
  },
  {
    id: 'istanbul-hockey-academy',
    name: 'Istanbul Hockey Academy',
    country: 'Turkey',
    countryFlag: '�',
    city: 'Istanbul',
    lat: 41.0082,
    lng: 28.9784,
    website: 'https://www.istanbulhockey.com.tr',
    contact: '+90 212 567 8901',
    contactEmail: 'info@istanbulhockey.com.tr',
    description: 'Turkey\'s first dedicated field hockey academy in Istanbul, promoting the growth of hockey in a country at the crossroads of Europe and Asia.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 12, description: 'Bosphorus shoreline accessible' },
    priceRange: { from: 500, to: 1400, unit: 'week', display: '500 - 1,400/week' },
    socialMedia: { instagram: '@istanbulhockey', facebook: 'https://facebook.com/istanbulhockeyacademy', twitter: '@istanbulhockey' },
    climate: 'istanbul-hockey',
    facilities: 'Artificial turf pitch, indoor training hall, gym, video analysis room, recovery pool',
    courtSurfaces: ['Artificial turf', 'Indoor court'],
    programs: [
      { name: 'Development Programme', price: '800/week', desc: 'Structured hockey development with international coaching standards' },
      { name: 'Youth Hockey Camp', price: '500/week', desc: 'Fun and skills-focused camps for juniors introducing hockey fundamentals' },
      { name: 'Performance Training', price: '1,400/week', desc: 'Intensive performance training for competitive players' }
    ],
    coaches: [
      { name: 'Murat Çelik', credential: 'FIH Level 2 Coach', background: 'Former Turkish national team player with European coaching experience. Pioneer of hockey development in Turkey.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Turkish', 'English'], instagram: null },
      { name: 'Sophie van Dijk', credential: 'KNHB Level 3', background: 'Dutch-born coach bringing Netherlands hockey methodology to Turkey. Former Dutch youth international.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Dutch', 'Turkish'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=800',
      'https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=800'
    ],
    upcomingCamps: [
      { name: 'Summer Hockey Camp', startDate: '2026-06-29', endDate: '2026-07-06', price: '800', level: 'All Levels' },
      { name: 'Junior Camp Istanbul', startDate: '2026-08-03', endDate: '2026-08-10', price: '500', level: 'Beginner' },
      { name: 'Autumn Skills Clinic', startDate: '2026-10-12', endDate: '2026-10-16', price: '600', level: 'Intermediate' },
      { name: 'Winter Indoor Camp', startDate: '2026-12-07', endDate: '2026-12-11', price: '550', level: 'All Levels' },
      { name: 'Spring Development Camp', startDate: '2027-03-15', endDate: '2027-03-22', price: '1,000', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Partner Hotel', pricePerWeek: 400, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Shared Apartment', pricePerWeek: 250, maxOccupancy: 3, bathType: 'shared', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Accommodation in Istanbul with easy access to training grounds'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-06-01',
      spotsLeft: 20,
      responseTime: '24h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 8,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Partnership with Istanbul international schools',
      medicalStaff: true,
      safeguarding: 'Turkish Hockey Federation safeguarding protocols, vetted coaching staff',
      airportPickup: true,
      mealPlan: 'Full board with Turkish and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Turkish', 'English'],
      emergencyProtocol: 'On-site first aid, Istanbul hospital 15 minutes'
    }
  }
];

const CLIMATE_DATA = {
  amsterdam: { avgTemp: 10, summerHigh: 22, winterLow: 1, rainyDays: 132, humidity: 82, description: 'Maritime climate with mild temperatures and reliable playing conditions' },
  breda: { avgTemp: 10, summerHigh: 23, winterLow: 1, rainyDays: 125, humidity: 80, description: 'Mild maritime climate with good conditions for outdoor hockey year-round' },
  eindhoven: { avgTemp: 10, summerHigh: 23, winterLow: 1, rainyDays: 120, humidity: 78, description: 'Temperate climate with warm summers and mild winters' },
  brussels: { avgTemp: 10, summerHigh: 23, winterLow: 1, rainyDays: 130, humidity: 79, description: 'Oceanic climate with mild temperatures throughout the year' },
  antwerp: { avgTemp: 10, summerHigh: 23, winterLow: 1, rainyDays: 125, humidity: 80, description: 'Maritime climate similar to Netherlands with reliable playing conditions' },
  hamburg: { avgTemp: 9, summerHigh: 22, winterLow: 0, rainyDays: 130, humidity: 80, description: 'Maritime-influenced climate, cool and wet but suitable for year-round hockey' },
  berlin: { avgTemp: 10, summerHigh: 25, winterLow: -1, rainyDays: 106, humidity: 72, description: 'Continental climate with warm summers ideal for outdoor hockey' },
  madrid: { avgTemp: 15, summerHigh: 33, winterLow: 2, rainyDays: 60, humidity: 55, description: 'Semi-arid continental climate with hot summers and mild winters, excellent for year-round training' },
  barcelona: { avgTemp: 16, summerHigh: 29, winterLow: 6, rainyDays: 55, humidity: 65, description: 'Mediterranean climate with warm, dry summers and mild winters' },
  london: { avgTemp: 12, summerHigh: 23, winterLow: 3, rainyDays: 110, humidity: 75, description: 'Temperate maritime climate with mild conditions year-round' },
  nottingham: { avgTemp: 10, summerHigh: 21, winterLow: 1, rainyDays: 115, humidity: 77, description: 'Temperate climate with cool summers and mild winters' },
  dublin: { avgTemp: 10, summerHigh: 20, winterLow: 3, rainyDays: 150, humidity: 82, description: 'Mild oceanic climate with frequent rain but rarely extreme temperatures' },
  paris: { avgTemp: 12, summerHigh: 25, winterLow: 2, rainyDays: 110, humidity: 74, description: 'Oceanic climate with warm summers and mild winters, good for year-round hockey' },
  lyon: { avgTemp: 12, summerHigh: 27, winterLow: 1, rainyDays: 100, humidity: 72, description: 'Semi-continental climate with warm summers and cool winters' },
  vienna: { avgTemp: 11, summerHigh: 26, winterLow: -1, rainyDays: 100, humidity: 70, description: 'Continental climate with warm summers and cold winters, indoor training in winter months' },
  poznan: { avgTemp: 9, summerHigh: 24, winterLow: -3, rainyDays: 105, humidity: 75, description: 'Continental climate with warm summers and cold winters requiring indoor facilities' },
  prague: { avgTemp: 9, summerHigh: 25, winterLow: -2, rainyDays: 100, humidity: 72, description: 'Continental climate with distinct seasons, warm summers ideal for outdoor hockey' },
  glasgow: { avgTemp: 9, summerHigh: 19, winterLow: 2, rainyDays: 170, humidity: 83, description: 'Maritime climate with mild temperatures and frequent rain year-round' },
  cardiff: { avgTemp: 11, summerHigh: 21, winterLow: 3, rainyDays: 140, humidity: 79, description: 'Maritime climate with mild conditions and moderate rainfall' },
  rome: { avgTemp: 16, summerHigh: 31, winterLow: 4, rainyDays: 75, humidity: 68, description: 'Mediterranean climate with hot dry summers and mild winters, excellent for outdoor training' },
  zurich: { avgTemp: 9, summerHigh: 24, winterLow: -1, rainyDays: 120, humidity: 74, description: 'Continental climate moderated by lakes, warm summers and cold winters' },
  copenhagen: { avgTemp: 9, summerHigh: 22, winterLow: 0, rainyDays: 120, humidity: 78, description: 'Maritime climate with cool summers and mild winters, indoor training available' },
  malmo: { avgTemp: 8, summerHigh: 22, winterLow: -1, rainyDays: 115, humidity: 77, description: 'Maritime Scandinavian climate with cool summers and cold winters' },
  lisbon: { avgTemp: 17, summerHigh: 28, winterLow: 8, rainyDays: 60, humidity: 65, description: 'Mediterranean climate with warm dry summers and mild winters, ideal year-round training' },
  belgrade: { avgTemp: 12, summerHigh: 28, winterLow: -1, rainyDays: 95, humidity: 70, description: 'Continental climate with warm summers and cold winters' },
  'istanbul-hockey': { avgTemp: 14, summerHigh: 28, winterLow: 3, rainyDays: 90, humidity: 72, description: 'Mediterranean-influenced climate with warm summers and mild winters, suitable for year-round outdoor hockey' }
};

const NEWS_ITEMS = [
  { title: 'FIH Hockey Pro League 2025 Season Preview', date: '2025-05-01', summary: 'Analysis of the upcoming Pro League season with predictions for the top-performing nations in men and women competitions.' },
  { title: 'Netherlands Dominate Youth Hockey Development', date: '2025-04-10', summary: 'Study reveals Dutch hockey academies produce 3x more international players per capita than any other nation.' },
  { title: 'Indoor Hockey World Cup Comes to Europe', date: '2025-03-15', summary: 'FIH announces the 2026 Indoor Hockey World Cup will be hosted in Belgium, boosting European indoor hockey interest.' },
  { title: 'New Water-Based Turf Technology Reduces Water Usage', date: '2025-02-20', summary: 'Innovation in synthetic turf technology reduces water requirements for hockey pitches by 60%, addressing sustainability concerns.' },
  { title: 'European Hockey Academies Report Surge in Youth Enrollment', date: '2025-01-25', summary: 'Field hockey academies across Europe see 30% increase in junior registrations following Olympic exposure.' }
];

const COUNTRIES = ['Netherlands', 'Belgium', 'Germany', 'Spain', 'UK', 'Ireland', 'France', 'Austria', 'Poland', 'Czech Republic', 'Italy', 'Switzerland', 'Denmark', 'Sweden', 'Portugal', 'Serbia', 'Turkey'];
