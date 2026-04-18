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
  dublin: { avgTemp: 10, summerHigh: 20, winterLow: 3, rainyDays: 150, humidity: 82, description: 'Mild oceanic climate with frequent rain but rarely extreme temperatures' }
};

const NEWS_ITEMS = [
  { title: 'FIH Hockey Pro League 2025 Season Preview', date: '2025-05-01', summary: 'Analysis of the upcoming Pro League season with predictions for the top-performing nations in men and women competitions.' },
  { title: 'Netherlands Dominate Youth Hockey Development', date: '2025-04-10', summary: 'Study reveals Dutch hockey academies produce 3x more international players per capita than any other nation.' },
  { title: 'Indoor Hockey World Cup Comes to Europe', date: '2025-03-15', summary: 'FIH announces the 2026 Indoor Hockey World Cup will be hosted in Belgium, boosting European indoor hockey interest.' },
  { title: 'New Water-Based Turf Technology Reduces Water Usage', date: '2025-02-20', summary: 'Innovation in synthetic turf technology reduces water requirements for hockey pitches by 60%, addressing sustainability concerns.' },
  { title: 'European Hockey Academies Report Surge in Youth Enrollment', date: '2025-01-25', summary: 'Field hockey academies across Europe see 30% increase in junior registrations following Olympic exposure.' }
];

const COUNTRIES = ['Netherlands', 'Belgium', 'Germany', 'Spain', 'UK', 'Ireland'];
