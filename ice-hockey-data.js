const SPORT_TYPE = 'ice-hockey';

const ACADEMIES = [
  {
    id: 'stockholm-ice-hockey-academy',
    name: 'Stockholm Ice Hockey Academy',
    country: 'Sweden',
    countryFlag: '🇸🇪',
    city: 'Stockholm',
    lat: 59.330,
    lng: 18.068,
    website: 'https://www.stockholmicehockey.se',
    contact: '+46 8 508 285 00',
    contactEmail: 'info@stockholmicehockey.se',
    description: 'Train in the hockey capital of Scandinavia. Stockholm has produced more NHL players than any other European city. Swedish hockey philosophy of skill and creativity.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 5, description: 'Stockholm archipelago beaches within 5km' },
    priceRange: { from: 1200, to: 3000, unit: 'week', display: 'SEK 13,000 - SEK 32,000/week' },
    socialMedia: { instagram: '@stockholmhockey', facebook: 'https://facebook.com/stockholmicehockey', twitter: '@sthlmhockey' },
    climate: 'stockholm',
    facilities: 'Olympic-size rink, practice rink, skating treadmill, video room, off-ice gym, equipment room, recovery suite',
    courtSurfaces: ['Olympic ice rink', 'Practice rink'],
    programs: [
      { name: 'Swedish Elite Development', price: 'SEK 28,000/week', desc: 'Intensive skills training following Swedish Ice Hockey Association methodology' },
      { name: 'Junior Hockey School', price: 'SEK 16,000/week', desc: 'Age-appropriate development for young players aged 8-15' },
      { name: 'Skills & Skating Camp', price: 'SEK 13,000/week', desc: 'Focused skating technique and puck skills for all levels' }
    ],
    coaches: [
      { name: 'Niklas Kronwall', credential: 'SIF Master Coach', background: 'Former NHL defenceman with 15 seasons in Detroit Red Wings. World Championship gold medallist.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Swedish', 'English'], instagram: null },
      { name: 'Maria Rooth', credential: 'SIF Level 3', background: 'Former Swedish womens national team captain with 200+ caps. Olympic silver medallist.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Swedish', 'English', 'Finnish'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=800',
      'https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=800'
    ],
    upcomingCamps: [
      { name: 'Summer Hockey School', startDate: '2025-07-07', endDate: '2025-07-14', price: 'SEK 22,000', level: 'All Levels' },
      { name: 'Junior Skills Camp', startDate: '2025-08-04', endDate: '2025-08-11', price: 'SEK 16,000', level: 'Beginner' },
      { name: 'Autumn Elite Camp', startDate: '2025-10-13', endDate: '2025-10-20', price: 'SEK 28,000', level: 'Advanced' },
      { name: 'Christmas Hockey Camp', startDate: '2025-12-22', endDate: '2025-12-29', price: 'SEK 18,000', level: 'Intermediate' },
      { name: 'Spring Skating Intensive', startDate: '2026-03-16', endDate: '2026-03-23', price: 'SEK 20,000', level: 'All Levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Stockholm Hotel', pricePerWeek: 800, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Sports Residence', pricePerWeek: 500, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Accommodation near Globen Arena area'
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
      schooling: 'Partnership with Stockholm international schools',
      medicalStaff: true,
      safeguarding: 'Swedish Ice Hockey Association safeguarding, background-checked coaches',
      airportPickup: true,
      mealPlan: 'Full board with Swedish and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Swedish', 'English'],
      emergencyProtocol: 'On-site medic, Södersjukhuset Hospital 10 minutes'
    }
  },
  {
    id: 'gothenburg-hockey-centre',
    name: 'Gothenburg Hockey Centre',
    country: 'Sweden',
    countryFlag: '🇸🇪',
    city: 'Gothenburg',
    lat: 57.709,
    lng: 11.975,
    website: 'https://www.gothenburgicehockey.se',
    contact: '+46 31 368 4000',
    contactEmail: 'info@gothenburgicehockey.se',
    description: 'Home of Frölunda HC, one of Europe most successful hockey clubs. World-class youth development and Swedish hockey philosophy in a vibrant coastal city.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 10, description: 'Gothenburg archipelago beaches within 10km' },
    priceRange: { from: 1100, to: 2800, unit: 'week', display: 'SEK 12,000 - SEK 30,000/week' },
    socialMedia: { instagram: '@gothenburghockey', facebook: 'https://facebook.com/gothenburghockeycentre', twitter: '@gbghockey' },
    climate: 'gothenburg',
    facilities: 'Olympic-size rink, practice rink, skating treadmill, video analysis room, off-ice training gym, equipment room',
    courtSurfaces: ['Olympic ice rink', 'Practice rink'],
    programs: [
      { name: 'Frölunda Method', price: 'SEK 26,000/week', desc: 'Train using Frölunda HC world-renowned development methodology' },
      { name: 'Youth Academy', price: 'SEK 15,000/week', desc: 'Structured youth program with age-appropriate skills development' },
      { name: 'Skating Masterclass', price: 'SEK 12,000/week', desc: 'Intensive skating technique and edge work with power skating specialists' }
    ],
    coaches: [
      { name: 'Henrik Lundqvist', credential: 'SIF Level 4', background: 'Former NHL goaltender legend. Swedish national team icon with 15 NHL seasons.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Swedish', 'English'], instagram: null },
      { name: 'Kim Martin Hasson', credential: 'SIF Level 3', background: 'Former Swedish womens national team goaltender. 3x Olympic medallist.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Swedish', 'English'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=800',
      'https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=800'
    ],
    upcomingCamps: [
      { name: 'Frölunda Summer Camp', startDate: '2025-07-14', endDate: '2025-07-21', price: 'SEK 22,000', level: 'All Levels' },
      { name: 'Junior Development Week', startDate: '2025-08-04', endDate: '2025-08-11', price: 'SEK 15,000', level: 'Beginner' },
      { name: 'Autumn Goaltending Camp', startDate: '2025-10-06', endDate: '2025-10-13', price: 'SEK 20,000', level: 'Intermediate' },
      { name: 'Winter Skills Intensive', startDate: '2025-12-15', endDate: '2025-12-22', price: 'SEK 18,000', level: 'Advanced' },
      { name: 'Spring Pre-Season Camp', startDate: '2026-03-23', endDate: '2026-03-30', price: 'SEK 24,000', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Gothenburg Hotel', pricePerWeek: 700, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Club Residence', pricePerWeek: 450, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Accommodation near Scandinavium arena'
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
      schooling: 'Partnership with Gothenburg international school',
      medicalStaff: true,
      safeguarding: 'SIF safeguarding standards, all coaches background checked',
      airportPickup: true,
      mealPlan: 'Full board with Nordic cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Swedish', 'English'],
      emergencyProtocol: 'On-site medic, Sahlgrenska Hospital 15 minutes'
    }
  },
  {
    id: 'helsinki-ice-hockey-academy',
    name: 'Helsinki Ice Hockey Academy',
    country: 'Finland',
    countryFlag: '🇫🇮',
    city: 'Helsinki',
    lat: 60.170,
    lng: 24.938,
    website: 'https://www.helsinkiicehockey.fi',
    contact: '+358 9 310 1700',
    contactEmail: 'info@helsinkiicehockey.fi',
    description: 'Finland is the reigning Olympic champion in ice hockey. Train with the Finnish philosophy of grit, speed, and relentless work ethic in the capital of Suomi hockey.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 5, description: 'Helsinki waterfront and island beaches within 5km' },
    priceRange: { from: 1000, to: 2800, unit: 'week', display: '€1,000 - €2,800/week' },
    socialMedia: { instagram: '@helsinkihockey', facebook: 'https://facebook.com/helsinkiicehockey', twitter: '@helsinkihockey' },
    climate: 'helsinki',
    facilities: 'Olympic-size rink, practice rink, skating treadmill, video analysis lab, off-ice gym, equipment room, sauna recovery',
    courtSurfaces: ['Olympic ice rink', 'Practice rink', 'Outdoor rink'],
    programs: [
      { name: 'Sisu Hockey Camp', price: '€2,500/week', desc: 'Elite training embodying Finnish sisu spirit with intensive on-ice and off-ice sessions' },
      { name: 'Youth Leijonat Academy', price: '€1,400/week', desc: 'Development program following Finnish Ice Hockey Association youth pathway' },
      { name: 'Learn to Play Hockey', price: '€1,000/week', desc: 'Introduction to ice hockey with skating fundamentals and basic skills' }
    ],
    coaches: [
      { name: 'Sami Kapanen', credential: 'FIHA Master Coach', background: 'Former NHL forward with 800+ games. Finnish national team veteran and World Championship medallist.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Finnish', 'English', 'Swedish'], instagram: null },
      { name: 'Noora Räty', credential: 'FIHA Level 3', background: 'Finnish womens national team goaltender legend. Multiple Olympic and World Championship appearances.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Finnish', 'English'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=800',
      'https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=800'
    ],
    upcomingCamps: [
      { name: 'Summer Sisu Camp', startDate: '2025-07-07', endDate: '2025-07-14', price: '€2,200', level: 'All Levels' },
      { name: 'Junior Leijonat Camp', startDate: '2025-08-04', endDate: '2025-08-11', price: '€1,400', level: 'Beginner' },
      { name: 'Autumn Power Skating', startDate: '2025-10-13', endDate: '2025-10-20', price: '€1,800', level: 'Intermediate' },
      { name: 'Winter Hockey Festival', startDate: '2025-12-15', endDate: '2025-12-22', price: '€2,000', level: 'All Levels' },
      { name: 'Spring Skills Camp', startDate: '2026-03-16', endDate: '2026-03-23', price: '€1,600', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Helsinki Hotel', pricePerWeek: 700, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Sports Hostel', pricePerWeek: 400, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Accommodation near Helsinki Ice Hall with sauna access'
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
      schooling: 'Partnership with Helsinki international school',
      medicalStaff: true,
      safeguarding: 'FIHA safeguarding standards, all coaches vetted',
      airportPickup: true,
      mealPlan: 'Full board with Finnish cuisine and sports nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Finnish', 'English', 'Swedish'],
      emergencyProtocol: 'On-site medic, HUS Hospital 10 minutes'
    }
  },
  {
    id: 'tampere-hockey-school',
    name: 'Tampere Hockey School',
    country: 'Finland',
    countryFlag: '🇫🇮',
    city: 'Tampere',
    lat: 61.498,
    lng: 23.761,
    website: 'https://www.tamperehockeyschool.fi',
    contact: '+358 3 565 6100',
    contactEmail: 'info@tamperehockeyschool.fi',
    description: 'Home of the 2023 IIHF World Championship. Tampere brand-new arena and deep hockey culture make it a premier destination for ice hockey development.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Lakeside city between two lakes; lake beaches in summer' },
    priceRange: { from: 900, to: 2500, unit: 'week', display: '€900 - €2,500/week' },
    socialMedia: { instagram: '@tamperehockey', facebook: 'https://facebook.com/tamperehockeyschool', twitter: '@tamperehockey' },
    climate: 'tampere',
    facilities: 'Nokia Arena practice rink, Olympic-size rink, skating treadmill, video room, off-ice gym, equipment room',
    courtSurfaces: ['Olympic ice rink', 'Practice rink', 'Outdoor rink'],
    programs: [
      { name: 'World Championship Centre', price: '€2,500/week', desc: 'Train at the venue of the 2023 World Championship with elite Finnish coaches' },
      { name: 'Junior Development', price: '€1,200/week', desc: 'Age-appropriate skills and game development for young players' },
      { name: 'Skating Foundations', price: '€900/week', desc: 'Power skating and edge work fundamentals for all levels' }
    ],
    coaches: [
      { name: 'Kimmo Timonen', credential: 'FIHA Master Coach', background: 'Former NHL defenceman with 1,100+ games. Stanley Cup champion and Olympic medallist.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Finnish', 'English'], instagram: null },
      { name: 'Jenni Hiirikoski', credential: 'FIHA Level 3', background: 'Finnish womens national team captain. Multiple World Championship gold medals.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Finnish', 'English', 'Swedish'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=800',
      'https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=800'
    ],
    upcomingCamps: [
      { name: 'Nokia Arena Summer Camp', startDate: '2025-07-14', endDate: '2025-07-21', price: '€2,200', level: 'All Levels' },
      { name: 'Junior Hockey Week', startDate: '2025-08-11', endDate: '2025-08-18', price: '€1,200', level: 'Beginner' },
      { name: 'Autumn Elite Camp', startDate: '2025-10-06', endDate: '2025-10-13', price: '€2,000', level: 'Advanced' },
      { name: 'Christmas Hockey Camp', startDate: '2025-12-22', endDate: '2025-12-29', price: '€1,800', level: 'All Levels' },
      { name: 'Spring Conditioning Camp', startDate: '2026-04-06', endDate: '2026-04-13', price: '€1,500', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Tampere Hotel', pricePerWeek: 600, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Arena Hostel', pricePerWeek: 350, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Accommodation near Nokia Arena with lakeside views'
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
      schooling: 'Partnership with Tampere international school',
      medicalStaff: true,
      safeguarding: 'FIHA safeguarding, background-checked coaches',
      airportPickup: true,
      mealPlan: 'Full board with Finnish and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Finnish', 'English'],
      emergencyProtocol: 'On-site medic, TAYS Hospital 15 minutes'
    }
  },
  {
    id: 'prague-ice-hockey-academy',
    name: 'Prague Ice Hockey Academy',
    country: 'Czech Republic',
    countryFlag: '🇨🇿',
    city: 'Prague',
    lat: 50.076,
    lng: 14.438,
    website: 'https://www.pragueicehockey.cz',
    contact: '+420 222 333 400',
    contactEmail: 'info@pragueicehockey.cz',
    description: 'Czech hockey heritage runs deep with a history of Olympic gold and NHL superstars. Prague offers world-class coaching at European-friendly prices.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Inland city; no beach nearby' },
    priceRange: { from: 600, to: 1800, unit: 'week', display: '€600 - €1,800/week' },
    socialMedia: { instagram: '@praguehicehockey', facebook: 'https://facebook.com/pragueicehockey', twitter: '@praguehockey' },
    climate: 'prague',
    facilities: 'Olympic-size rink, practice rink, skating treadmill, video analysis room, off-ice gym, equipment room',
    courtSurfaces: ['Olympic ice rink', 'Practice rink'],
    programs: [
      { name: 'Czech Elite Camp', price: '€1,800/week', desc: 'Intensive training with former Czech national team coaches and NHL veterans' },
      { name: 'Youth Development', price: '€1,000/week', desc: 'Structured youth program following Czech Ice Hockey Federation methodology' },
      { name: 'Hockey Starter', price: '€600/week', desc: 'Introduction to ice hockey with skating basics and fundamental skills' }
    ],
    coaches: [
      { name: 'David Krejci', credential: 'CIHA Master Coach', background: 'Former NHL centre with 900+ games for Boston Bruins. Czech national team captain.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Czech', 'English'], instagram: null },
      { name: 'Martin Havlat', credential: 'CIHA Level 3', background: 'Former NHL forward with 700+ games. Czech World Championship and Olympic team member.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Czech', 'English', 'Slovak'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=800',
      'https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=800'
    ],
    upcomingCamps: [
      { name: 'Prague Summer Hockey', startDate: '2025-07-07', endDate: '2025-07-14', price: '€1,500', level: 'All Levels' },
      { name: 'Junior Czech Camp', startDate: '2025-08-04', endDate: '2025-08-11', price: '€1,000', level: 'Beginner' },
      { name: 'Autumn Skills Camp', startDate: '2025-10-13', endDate: '2025-10-20', price: '€1,200', level: 'Intermediate' },
      { name: 'Winter Hockey Festival', startDate: '2025-12-22', endDate: '2025-12-29', price: '€1,400', level: 'All Levels' },
      { name: 'Spring Pre-Season', startDate: '2026-03-16', endDate: '2026-03-23', price: '€1,300', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Prague Hotel', pricePerWeek: 400, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Hostel Room', pricePerWeek: 220, maxOccupancy: 3, bathType: 'shared', mealsIncluded: false }
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
      minAge: 8,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Partnership with Prague international schools',
      medicalStaff: true,
      safeguarding: 'CIHA safeguarding standards, all coaches vetted',
      airportPickup: true,
      mealPlan: 'Full board with Czech and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Czech', 'English', 'German'],
      emergencyProtocol: 'On-site medic, VFN Hospital 15 minutes'
    }
  },
  {
    id: 'brno-hockey-school',
    name: 'Brno Hockey School',
    country: 'Czech Republic',
    countryFlag: '🇨🇿',
    city: 'Brno',
    lat: 49.195,
    lng: 16.608,
    website: 'https://www.brnohockeyschool.cz',
    contact: '+420 542 321 500',
    contactEmail: 'info@brnohockeyschool.cz',
    description: 'Moravia hockey heartland. Brno has a proud hockey tradition and offers excellent value training with passionate Czech coaching.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Inland city; Brno Dam reservoir for summer swimming' },
    priceRange: { from: 500, to: 1500, unit: 'week', display: '€500 - €1,500/week' },
    socialMedia: { instagram: '@brnohockey', facebook: 'https://facebook.com/brnohockeyschool', twitter: '@brnohockey' },
    climate: 'brno',
    facilities: 'Olympic-size rink, practice rink, skating treadmill, video room, off-ice gym, equipment room',
    courtSurfaces: ['Olympic ice rink', 'Practice rink'],
    programs: [
      { name: 'Moravian Hockey Camp', price: '€1,500/week', desc: 'Intensive camp with Czech Extraliga coaches and competitive game play' },
      { name: 'Junior Academy', price: '€800/week', desc: 'Development program for young players with focus on skating and puck skills' },
      { name: 'Beginner Hockey', price: '€500/week', desc: 'Learn to skate and play hockey in a supportive environment' }
    ],
    coaches: [
      { name: 'Tomas Plekanec', credential: 'CIHA Level 4', background: 'Former NHL centre with 1,000+ games for Montreal Canadiens. Czech national team stalwart.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Czech', 'English', 'French'], instagram: null },
      { name: 'Jakub Klepis', credential: 'CIHA Level 3', background: 'Former NHL and KHL forward. Czech World Championship team member.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Czech', 'English', 'Russian'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=800',
      'https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=800'
    ],
    upcomingCamps: [
      { name: 'Brno Summer Camp', startDate: '2025-07-14', endDate: '2025-07-21', price: '€1,200', level: 'All Levels' },
      { name: 'Junior Moravian Camp', startDate: '2025-08-11', endDate: '2025-08-18', price: '€800', level: 'Beginner' },
      { name: 'Autumn Skills Week', startDate: '2025-10-06', endDate: '2025-10-13', price: '€1,000', level: 'Intermediate' },
      { name: 'Winter Hockey Festival', startDate: '2025-12-15', endDate: '2025-12-22', price: '€1,300', level: 'All Levels' },
      { name: 'Spring Training Camp', startDate: '2026-03-23', endDate: '2026-03-30', price: '€1,100', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Brno Hotel', pricePerWeek: 320, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Student Hostel', pricePerWeek: 180, maxOccupancy: 3, bathType: 'shared', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Budget-friendly accommodation in Brno centre'
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
      schooling: 'Partnership with Brno international school',
      medicalStaff: true,
      safeguarding: 'CIHA safeguarding, background-checked staff',
      airportPickup: true,
      mealPlan: 'Full board with Czech cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Czech', 'English'],
      emergencyProtocol: 'On-site first aid, FN Brno Hospital 10 minutes'
    }
  },
  {
    id: 'zurich-ice-hockey-academy',
    name: 'Zurich Ice Hockey Academy',
    country: 'Switzerland',
    countryFlag: '🇨🇭',
    city: 'Zurich',
    lat: 47.376,
    lng: 8.541,
    website: 'https://www.zurichicehockey.ch',
    contact: '+41 44 315 5000',
    contactEmail: 'info@zurichicehockey.ch',
    description: 'Swiss precision meets ice hockey excellence. Train at world-class facilities in Zurich with coaches from the National League and international hockey.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Lake Zurich swimming areas nearby; no ocean beach' },
    priceRange: { from: 1500, to: 3500, unit: 'week', display: 'CHF 1,500 - CHF 3,500/week' },
    socialMedia: { instagram: '@zurichhockey', facebook: 'https://facebook.com/zurichicehockey', twitter: '@zurichhockey' },
    climate: 'zurich',
    facilities: 'Olympic-size rink, practice rink, skating treadmill, video analysis lab, off-ice gym, equipment room, recovery suite',
    courtSurfaces: ['Olympic ice rink', 'Practice rink'],
    programs: [
      { name: 'Swiss Elite Hockey', price: 'CHF 3,500/week', desc: 'Premium training program with National League coaches and cutting-edge analytics' },
      { name: 'Youth Development', price: 'CHF 2,000/week', desc: 'Structured development for young players with Swiss hockey methodology' },
      { name: 'Hockey Introduction', price: 'CHF 1,500/week', desc: 'Learn to play ice hockey in a safe and professional environment' }
    ],
    coaches: [
      { name: 'Mark Streit', credential: 'SIHF Master Coach', background: 'Former NHL defenceman with 700+ games. Swiss national team legend and captain.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['German', 'French', 'English'], instagram: null },
      { name: 'Florence Schelling', credential: 'SIHF Level 3', background: 'Swiss womens national team goaltender. Olympic team member and former SC Bern GM.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['German', 'English', 'French'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=800',
      'https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=800'
    ],
    upcomingCamps: [
      { name: 'Zurich Summer Hockey', startDate: '2025-07-07', endDate: '2025-07-14', price: 'CHF 3,000', level: 'All Levels' },
      { name: 'Junior Swiss Camp', startDate: '2025-08-04', endDate: '2025-08-11', price: 'CHF 2,000', level: 'Beginner' },
      { name: 'Autumn Skills Intensive', startDate: '2025-10-13', endDate: '2025-10-20', price: 'CHF 2,500', level: 'Intermediate' },
      { name: 'Christmas Hockey Camp', startDate: '2025-12-22', endDate: '2025-12-29', price: 'CHF 2,800', level: 'All Levels' },
      { name: 'Spring Pre-Season', startDate: '2026-03-16', endDate: '2026-03-23', price: 'CHF 3,200', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Zurich Hotel', pricePerWeek: 1000, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Sports Hostel', pricePerWeek: 650, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Premium accommodation near Hallenstadion'
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
      minAge: 8,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Partnership with Zurich International School',
      medicalStaff: true,
      safeguarding: 'Swiss Olympic safeguarding standards',
      airportPickup: true,
      mealPlan: 'Full board with Swiss quality nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['German', 'French', 'English'],
      emergencyProtocol: 'On-site medic, USZ Hospital 10 minutes'
    }
  },
  {
    id: 'bern-hockey-centre',
    name: 'Bern Hockey Centre',
    country: 'Switzerland',
    countryFlag: '🇨🇭',
    city: 'Bern',
    lat: 46.948,
    lng: 7.448,
    website: 'https://www.bernhockeycentre.ch',
    contact: '+41 31 350 2000',
    contactEmail: 'info@bernhockeycentre.ch',
    description: 'Home of SC Bern, Europe best-attended hockey club. Train in the Swiss capital with unmatched fan culture and professional infrastructure.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Alpine capital; Aare River swimming in summer' },
    priceRange: { from: 1300, to: 3200, unit: 'week', display: 'CHF 1,300 - CHF 3,200/week' },
    socialMedia: { instagram: '@bernhockey', facebook: 'https://facebook.com/bernhockeycentre', twitter: '@bernhockey' },
    climate: 'bern',
    facilities: 'PostFinance Arena practice rinks, Olympic-size rink, skating treadmill, video room, off-ice gym, equipment room',
    courtSurfaces: ['Olympic ice rink', 'Practice rink'],
    programs: [
      { name: 'SC Bern Academy', price: 'CHF 3,200/week', desc: 'Train alongside SC Bern youth with professional coaching staff' },
      { name: 'Swiss Youth Hockey', price: 'CHF 1,800/week', desc: 'Development program with Swiss Ice Hockey Federation certified coaches' },
      { name: 'Learn to Skate & Play', price: 'CHF 1,300/week', desc: 'Beginner-friendly program combining skating lessons with hockey introduction' }
    ],
    coaches: [
      { name: 'Roman Josi', credential: 'SIHF Level 4', background: 'NHL all-star defenceman and Norris Trophy winner. Swiss national team captain.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['German', 'French', 'English'], instagram: null },
      { name: 'Sandra Thalmann', credential: 'SIHF Level 3', background: 'Former Swiss womens national team player. Specialist in youth development.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['German', 'French', 'English'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=800',
      'https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=800'
    ],
    upcomingCamps: [
      { name: 'Bern Summer Hockey', startDate: '2025-07-14', endDate: '2025-07-21', price: 'CHF 2,800', level: 'All Levels' },
      { name: 'Junior SC Bern Camp', startDate: '2025-08-04', endDate: '2025-08-11', price: 'CHF 1,800', level: 'Beginner' },
      { name: 'Autumn Hockey Week', startDate: '2025-10-06', endDate: '2025-10-13', price: 'CHF 2,200', level: 'Intermediate' },
      { name: 'Winter Hockey Festival', startDate: '2025-12-15', endDate: '2025-12-22', price: 'CHF 2,600', level: 'All Levels' },
      { name: 'Spring Conditioning', startDate: '2026-03-23', endDate: '2026-03-30', price: 'CHF 2,400', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Bern Hotel', pricePerWeek: 850, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Youth Hostel', pricePerWeek: 550, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Accommodation in Bern old town near PostFinance Arena'
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
      minAge: 8,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Partnership with Bern international school',
      medicalStaff: true,
      safeguarding: 'Swiss Olympic safeguarding, all coaches vetted',
      airportPickup: true,
      mealPlan: 'Full board with Swiss cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['German', 'French', 'English'],
      emergencyProtocol: 'On-site medic, Inselspital 10 minutes'
    }
  },
  {
    id: 'munich-ice-hockey-academy',
    name: 'Munich Ice Hockey Academy',
    country: 'Germany',
    countryFlag: '🇩🇪',
    city: 'Munich',
    lat: 48.137,
    lng: 11.576,
    website: 'https://www.munichicehockey.de',
    contact: '+49 89 4141 5000',
    contactEmail: 'info@munichicehockey.de',
    description: 'Bavaria hockey powerhouse. Munich strong hockey culture and excellent facilities provide the ideal environment for development at all levels.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Alpine city; Starnberger See lake beach 30km south' },
    priceRange: { from: 900, to: 2500, unit: 'week', display: '€900 - €2,500/week' },
    socialMedia: { instagram: '@munichhockey', facebook: 'https://facebook.com/munichicehockey', twitter: '@munichhockey' },
    climate: 'munich',
    facilities: 'Olympic-size rink, practice rink, skating treadmill, video analysis room, off-ice gym, equipment room, recovery suite',
    courtSurfaces: ['Olympic ice rink', 'Practice rink', 'Outdoor rink'],
    programs: [
      { name: 'DEL Elite Camp', price: '€2,500/week', desc: 'Train with Deutsche Eishockey Liga coaches and professional methodology' },
      { name: 'Youth Eishockey', price: '€1,300/week', desc: 'German youth development program with DEB methodology' },
      { name: 'Hockey Beginners', price: '€900/week', desc: 'Introduction to ice hockey with skating lessons included' }
    ],
    coaches: [
      { name: 'Leon Draisaitl Sr.', credential: 'DEB Master Coach', background: 'Former German national team player and father of NHL superstar. 20+ years coaching experience.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['German', 'English'], instagram: null },
      { name: 'Sara Seiler', credential: 'DEB Level 3', background: 'Former German womens national team player. IIHF coaching certificate holder.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['German', 'English', 'French'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=800',
      'https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=800'
    ],
    upcomingCamps: [
      { name: 'Munich Summer Hockey', startDate: '2025-07-07', endDate: '2025-07-14', price: '€2,000', level: 'All Levels' },
      { name: 'Junior Bayern Camp', startDate: '2025-08-04', endDate: '2025-08-11', price: '€1,300', level: 'Beginner' },
      { name: 'Autumn DEL Camp', startDate: '2025-10-13', endDate: '2025-10-20', price: '€1,800', level: 'Advanced' },
      { name: 'Christmas Hockey Camp', startDate: '2025-12-22', endDate: '2025-12-29', price: '€1,600', level: 'All Levels' },
      { name: 'Spring Skills Camp', startDate: '2026-03-16', endDate: '2026-03-23', price: '€1,500', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Munich Hotel', pricePerWeek: 650, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Sports Hostel', pricePerWeek: 400, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Accommodation near Olympia-Eissportzentrum'
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
      schooling: 'Partnership with Munich International School',
      medicalStaff: true,
      safeguarding: 'DEB safeguarding standards, background-checked coaches',
      airportPickup: true,
      mealPlan: 'Full board with Bavarian and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['German', 'English'],
      emergencyProtocol: 'On-site medic, Klinikum Grosshadern 15 minutes'
    }
  },
  {
    id: 'berlin-eishockey-akademie',
    name: 'Berlin Eishockey Akademie',
    country: 'Germany',
    countryFlag: '🇩🇪',
    city: 'Berlin',
    lat: 52.517,
    lng: 13.405,
    website: 'https://www.berlineishockey.de',
    contact: '+49 30 9700 2500',
    contactEmail: 'info@berlineishockey.de',
    description: 'Ice hockey in Germany vibrant capital. Home of the Eisbären Berlin, the most successful DEL team, with a deep talent development tradition.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Inland city; Wannsee lake beach in summer' },
    priceRange: { from: 800, to: 2200, unit: 'week', display: '€800 - €2,200/week' },
    socialMedia: { instagram: '@berlineishockey', facebook: 'https://facebook.com/berlineishockey', twitter: '@berlineishockey' },
    climate: 'berlin',
    facilities: 'Olympic-size rink, practice rink, skating treadmill, video room, off-ice gym, equipment room',
    courtSurfaces: ['Olympic ice rink', 'Practice rink'],
    programs: [
      { name: 'Eisbären Development', price: '€2,200/week', desc: 'Train using the Eisbären Berlin youth development methodology' },
      { name: 'Junior Academy', price: '€1,200/week', desc: 'Structured development for young players with German coaching standards' },
      { name: 'First Steps on Ice', price: '€800/week', desc: 'Beginners program combining skating lessons with hockey introduction' }
    ],
    coaches: [
      { name: 'Marcel Noebels', credential: 'DEB Level 4', background: 'Eisbären Berlin captain and German national team forward. Multiple DEL champion.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['German', 'English'], instagram: null },
      { name: 'Franziska Busch', credential: 'DEB Level 3', background: 'Former German womens national team captain with 200+ caps. 4x Olympian.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['German', 'English'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=800',
      'https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=800'
    ],
    upcomingCamps: [
      { name: 'Berlin Summer Hockey', startDate: '2025-07-14', endDate: '2025-07-21', price: '€1,800', level: 'All Levels' },
      { name: 'Junior Eisbären Camp', startDate: '2025-08-11', endDate: '2025-08-18', price: '€1,200', level: 'Beginner' },
      { name: 'Autumn Skills Week', startDate: '2025-10-06', endDate: '2025-10-13', price: '€1,400', level: 'Intermediate' },
      { name: 'Winter Hockey Camp', startDate: '2025-12-15', endDate: '2025-12-22', price: '€1,600', level: 'All Levels' },
      { name: 'Spring Conditioning', startDate: '2026-03-09', endDate: '2026-03-16', price: '€1,300', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Berlin Hotel', pricePerWeek: 500, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Hostel', pricePerWeek: 300, maxOccupancy: 3, bathType: 'shared', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Central Berlin accommodation near Mercedes-Benz Arena'
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
      schooling: 'Partnership with Berlin international schools',
      medicalStaff: true,
      safeguarding: 'DEB safeguarding, all coaches background checked',
      airportPickup: true,
      mealPlan: 'Full board with German and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['German', 'English'],
      emergencyProtocol: 'On-site medic, Charité Hospital 15 minutes'
    }
  },
  {
    id: 'bratislava-hockey-academy',
    name: 'Bratislava Hockey Academy',
    country: 'Slovakia',
    countryFlag: '🇸🇰',
    city: 'Bratislava',
    lat: 48.148,
    lng: 17.107,
    website: 'https://www.bratislavahockey.sk',
    contact: '+421 2 4445 6000',
    contactEmail: 'info@bratislavahockey.sk',
    description: 'Slovakia has produced NHL legends like Zdeno Chara and Marian Hossa. Train in the capital with coaches who carry on this proud hockey tradition.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Inland city on the Danube; no beach nearby' },
    priceRange: { from: 500, to: 1500, unit: 'week', display: '€500 - €1,500/week' },
    socialMedia: { instagram: '@bratislavahockey', facebook: 'https://facebook.com/bratislavahockey', twitter: '@bratislavahcky' },
    climate: 'bratislava',
    facilities: 'Olympic-size rink, practice rink, skating treadmill, video analysis room, off-ice gym, equipment room',
    courtSurfaces: ['Olympic ice rink', 'Practice rink'],
    programs: [
      { name: 'Slovak Elite Hockey', price: '€1,500/week', desc: 'High-performance training with former Slovak national team coaches' },
      { name: 'Youth Development', price: '€800/week', desc: 'Structured youth program following Slovak Ice Hockey Federation pathway' },
      { name: 'Hockey Starter', price: '€500/week', desc: 'Affordable introduction to ice hockey for beginners' }
    ],
    coaches: [
      { name: 'Marian Gaborik', credential: 'SZLH Master Coach', background: 'Former NHL All-Star with 800+ games. Stanley Cup champion and Slovak hockey legend.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Slovak', 'English', 'Czech'], instagram: null },
      { name: 'Zuzana Tomcikova', credential: 'SZLH Level 3', background: 'Former Slovak womens national team player. Youth coaching specialist.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Slovak', 'Czech', 'English'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=800',
      'https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=800'
    ],
    upcomingCamps: [
      { name: 'Bratislava Summer Hockey', startDate: '2025-07-07', endDate: '2025-07-14', price: '€1,200', level: 'All Levels' },
      { name: 'Junior Slovak Camp', startDate: '2025-08-04', endDate: '2025-08-11', price: '€800', level: 'Beginner' },
      { name: 'Autumn Skills Camp', startDate: '2025-10-13', endDate: '2025-10-20', price: '€1,000', level: 'Intermediate' },
      { name: 'Winter Hockey Festival', startDate: '2025-12-22', endDate: '2025-12-29', price: '€1,300', level: 'All Levels' },
      { name: 'Spring Training Camp', startDate: '2026-03-16', endDate: '2026-03-23', price: '€1,100', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Bratislava Hotel', pricePerWeek: 350, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Hostel', pricePerWeek: 180, maxOccupancy: 3, bathType: 'shared', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Affordable accommodation in Bratislava old town'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-01',
      spotsLeft: 24,
      responseTime: '48h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 8,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Partnership with Bratislava international school',
      medicalStaff: true,
      safeguarding: 'SZLH safeguarding standards, background-checked coaches',
      airportPickup: true,
      mealPlan: 'Full board with Slovak and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Slovak', 'Czech', 'English'],
      emergencyProtocol: 'On-site medic, UN Bratislava Hospital 10 minutes'
    }
  },
  {
    id: 'riga-hockey-school',
    name: 'Riga Hockey School',
    country: 'Latvia',
    countryFlag: '🇱🇻',
    city: 'Riga',
    lat: 56.946,
    lng: 24.106,
    website: 'https://www.rigahockeyschool.lv',
    contact: '+371 67 332 200',
    contactEmail: 'info@rigahockeyschool.lv',
    description: 'Latvia punches above its weight in world hockey. Riga hosted the 2021 World Championship and offers passionate, affordable hockey training.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 15, description: 'Jurmala beach resort 15km west on the Baltic Sea' },
    priceRange: { from: 450, to: 1300, unit: 'week', display: '€450 - €1,300/week' },
    socialMedia: { instagram: '@rigahockey', facebook: 'https://facebook.com/rigahockeyschool', twitter: '@rigahockey' },
    climate: 'riga',
    facilities: 'Olympic-size rink, practice rink, skating treadmill, video room, off-ice gym, equipment room',
    courtSurfaces: ['Olympic ice rink', 'Practice rink', 'Outdoor rink'],
    programs: [
      { name: 'Latvian Elite Camp', price: '€1,300/week', desc: 'Train with Dinamo Riga coaches and Latvian national team methodology' },
      { name: 'Youth Development', price: '€750/week', desc: 'Structured youth program with focus on skating and hockey fundamentals' },
      { name: 'Hockey Introduction', price: '€450/week', desc: 'Most affordable introduction to ice hockey in Europe' }
    ],
    coaches: [
      { name: 'Sandis Ozolins', credential: 'LHF Master Coach', background: 'Former NHL All-Star defenceman with 800+ games. Latvian hockey legend and Hall of Fame member.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Latvian', 'English', 'Russian'], instagram: null },
      { name: 'Kristine Libauere', credential: 'LHF Level 3', background: 'Former Latvian womens national team player. Youth development specialist.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Latvian', 'English', 'Russian'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=800',
      'https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=800'
    ],
    upcomingCamps: [
      { name: 'Riga Summer Hockey', startDate: '2025-07-07', endDate: '2025-07-14', price: '€1,000', level: 'All Levels' },
      { name: 'Junior Latvian Camp', startDate: '2025-08-04', endDate: '2025-08-11', price: '€750', level: 'Beginner' },
      { name: 'Autumn Skills Week', startDate: '2025-10-13', endDate: '2025-10-20', price: '€900', level: 'Intermediate' },
      { name: 'Winter Hockey Festival', startDate: '2025-12-15', endDate: '2025-12-22', price: '€1,100', level: 'All Levels' },
      { name: 'Spring Training Camp', startDate: '2026-03-16', endDate: '2026-03-23', price: '€800', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Riga Hotel', pricePerWeek: 300, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Hostel', pricePerWeek: 150, maxOccupancy: 3, bathType: 'shared', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Very affordable accommodation in Riga old town'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-01',
      spotsLeft: 26,
      responseTime: '48h',
      privateLessons: true,
      yearRound: false
    },
    juniorInfo: {
      minAge: 8,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Partnership with Riga International School',
      medicalStaff: true,
      safeguarding: 'LHF safeguarding standards, all coaches vetted',
      airportPickup: true,
      mealPlan: 'Full board with Latvian and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Latvian', 'English', 'Russian'],
      emergencyProtocol: 'On-site medic, Stradins Hospital 10 minutes'
    }
  }
];

const CLIMATE_DATA = {
  stockholm: { avgTemp: 7, summerHigh: 22, winterLow: -3, rainyDays: 105, humidity: 75, description: 'Scandinavian climate with mild summers and cold winters. Indoor rinks ensure year-round training.' },
  gothenburg: { avgTemp: 8, summerHigh: 21, winterLow: -2, rainyDays: 120, humidity: 78, description: 'Maritime Scandinavian climate, milder than Stockholm with more rainfall' },
  helsinki: { avgTemp: 6, summerHigh: 22, winterLow: -7, rainyDays: 110, humidity: 78, description: 'Continental/maritime climate with cold winters perfect for outdoor skating and warm summers' },
  tampere: { avgTemp: 5, summerHigh: 22, winterLow: -9, rainyDays: 105, humidity: 76, description: 'Finnish inland climate with cold winters and pleasant summers. Outdoor rinks possible November-March.' },
  prague: { avgTemp: 9, summerHigh: 25, winterLow: -2, rainyDays: 100, humidity: 72, description: 'Continental climate with warm summers and cold winters suitable for outdoor skating' },
  brno: { avgTemp: 9, summerHigh: 26, winterLow: -3, rainyDays: 95, humidity: 70, description: 'Continental Moravian climate with distinct seasons' },
  zurich: { avgTemp: 9, summerHigh: 24, winterLow: -1, rainyDays: 128, humidity: 74, description: 'Alpine-influenced climate with cool temperatures year-round' },
  bern: { avgTemp: 9, summerHigh: 24, winterLow: -2, rainyDays: 120, humidity: 74, description: 'Alpine capital climate with cold winters and mild summers' },
  munich: { avgTemp: 8, summerHigh: 24, winterLow: -3, rainyDays: 115, humidity: 72, description: 'Alpine-influenced continental climate with cold winters and warm summers' },
  berlin: { avgTemp: 10, summerHigh: 25, winterLow: -1, rainyDays: 106, humidity: 72, description: 'Continental climate with warm summers and cold winters' },
  bratislava: { avgTemp: 11, summerHigh: 27, winterLow: -2, rainyDays: 90, humidity: 68, description: 'Continental climate with hot summers and cold winters on the Danube' },
  riga: { avgTemp: 6, summerHigh: 22, winterLow: -6, rainyDays: 120, humidity: 78, description: 'Maritime/continental climate with cold winters ideal for outdoor ice and mild summers' }
};

const NEWS_ITEMS = [
  { title: 'IIHF World Championship 2025 Preview', date: '2025-05-05', summary: 'Comprehensive preview of the 2025 IIHF World Championship with analysis of European contenders and breakout players to watch.' },
  { title: 'Swedish Hockey Model Studied Worldwide', date: '2025-04-12', summary: 'Research paper highlights how Sweden player development model produces the highest NHL draft picks per capita in Europe.' },
  { title: 'New Olympic-Size Rinks Open Across Europe', date: '2025-03-18', summary: 'Five new Olympic-standard ice rinks opened in 2024-25, boosting training capacity in Finland, Czech Republic, and Switzerland.' },
  { title: 'European Youth Hockey Participation Hits Record High', date: '2025-02-22', summary: 'IIHF reports record youth registration numbers across Europe driven by Olympic success and expanded girls hockey programs.' },
  { title: 'Off-Ice Training Revolution in European Hockey', date: '2025-01-30', summary: 'Skating treadmills and virtual reality training tools are transforming how European hockey academies develop skating technique.' }
];

const COUNTRIES = ['Sweden', 'Finland', 'Czech Republic', 'Switzerland', 'Germany', 'Slovakia', 'Latvia'];
