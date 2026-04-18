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
  },
  {
    id: 'oslo-ice-hockey-academy',
    name: 'Oslo Ice Hockey Academy',
    country: 'Norway',
    countryFlag: '🇳🇴',
    city: 'Oslo',
    lat: 59.914,
    lng: 10.752,
    website: 'https://www.osloicehockey.no',
    contact: '+47 22 94 10 00',
    contactEmail: 'info@osloicehockey.no',
    description: 'Train in the Norwegian capital with a proud hockey tradition. Oslo combines Scandinavian development philosophy with world-class facilities at Jordal Amfi and modern training centres.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 8, description: 'Oslo fjord beaches within 8km' },
    priceRange: { from: 1400, to: 3200, unit: 'week', display: 'NOK 14,000 - NOK 32,000/week' },
    socialMedia: { instagram: '@oslohockey', facebook: 'https://facebook.com/osloicehockey', twitter: '@oslohockey' },
    climate: 'oslo',
    facilities: 'Olympic-size rink, practice rink, off-ice training centre, video analysis room, gym, recovery suite, equipment workshop',
    courtSurfaces: ['Olympic ice rink', 'Practice rink'],
    programs: [
      { name: 'Norwegian Elite Development', price: 'NOK 28,000/week', desc: 'Intensive skills training following Norwegian Ice Hockey Federation methodology' },
      { name: 'Junior Hockey School', price: 'NOK 18,000/week', desc: 'Age-appropriate development for young players aged 8-15' },
      { name: 'Skating & Skills Camp', price: 'NOK 14,000/week', desc: 'Focused skating technique and puck handling for all levels' }
    ],
    coaches: [
      { name: 'Mats Zuccarello', credential: 'NIHF Master Coach', background: 'Former NHL forward with over 500 NHL games for New York Rangers and Minnesota Wild. Norwegian hockey icon.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Norwegian', 'English'], instagram: null },
      { name: 'Lena Vetvik', credential: 'NIHF Level 3', background: 'Former Norwegian womens national team captain with 150+ caps. European Championship medallist.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Norwegian', 'English', 'Swedish'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=800',
      'https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=800'
    ],
    upcomingCamps: [
      { name: 'Summer Hockey School', startDate: '2026-07-06', endDate: '2026-07-13', price: 'NOK 24,000', level: 'All Levels' },
      { name: 'Junior Skills Camp', startDate: '2026-08-03', endDate: '2026-08-10', price: 'NOK 18,000', level: 'Beginner' },
      { name: 'Autumn Elite Camp', startDate: '2026-10-12', endDate: '2026-10-19', price: 'NOK 30,000', level: 'Advanced' },
      { name: 'Christmas Hockey Camp', startDate: '2026-12-21', endDate: '2026-12-28', price: 'NOK 20,000', level: 'Intermediate' },
      { name: 'Spring Skating Intensive', startDate: '2027-03-15', endDate: '2027-03-22', price: 'NOK 22,000', level: 'All Levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Oslo Hotel', pricePerWeek: 900, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Sports Residence', pricePerWeek: 550, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Accommodation near Jordal Amfi arena area'
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
      schooling: 'Partnership with Oslo international schools',
      medicalStaff: true,
      safeguarding: 'Norwegian Ice Hockey Federation safeguarding, background-checked coaches',
      airportPickup: true,
      mealPlan: 'Full board with Norwegian and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Norwegian', 'English'],
      emergencyProtocol: 'On-site medic, Oslo University Hospital 10 minutes'
    }
  },
  {
    id: 'copenhagen-ice-hockey-academy',
    name: 'Copenhagen Ice Hockey Academy',
    country: 'Denmark',
    countryFlag: '🇩🇰',
    city: 'Copenhagen',
    lat: 55.676,
    lng: 12.568,
    website: 'https://www.copenhagenicehockey.dk',
    contact: '+45 33 15 10 00',
    contactEmail: 'info@copenhagenicehockey.dk',
    description: 'Denmark\'s premier hockey academy in the capital. Copenhagen blends Scandinavian hockey culture with a growing competitive scene in the Metal Ligaen.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 6, description: 'Amager Strand beach within 6km' },
    priceRange: { from: 900, to: 2200, unit: 'week', display: 'DKK 9,000 - DKK 22,000/week' },
    socialMedia: { instagram: '@cphhockey', facebook: 'https://facebook.com/copenhagenihockey', twitter: '@cphhockey' },
    climate: 'copenhagen',
    facilities: 'Olympic-size rink, training rink, off-ice gym, video analysis suite, equipment room, recovery area',
    courtSurfaces: ['Olympic ice rink', 'Practice rink'],
    programs: [
      { name: 'Danish Elite Programme', price: 'DKK 20,000/week', desc: 'High-performance training aligned with Danmarks Ishockey Union standards' },
      { name: 'Junior Hockey School', price: 'DKK 12,000/week', desc: 'Fun and structured development for young players aged 8-15' },
      { name: 'Skating & Puck Skills', price: 'DKK 9,000/week', desc: 'Skating fundamentals and stick handling for all abilities' }
    ],
    coaches: [
      { name: 'Frans Nielsen', credential: 'DIU Master Coach', background: 'Former NHL centre with 900+ games for New York Islanders and Detroit Red Wings. Denmark national team legend.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Danish', 'English'], instagram: null },
      { name: 'Josefine Jakobsen', credential: 'DIU Level 3', background: 'Former Danish womens national team forward with 120+ caps. Nordic Championship winner.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Danish', 'English', 'Swedish'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=800',
      'https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=800'
    ],
    upcomingCamps: [
      { name: 'Summer Hockey School', startDate: '2026-07-06', endDate: '2026-07-13', price: 'DKK 16,000', level: 'All Levels' },
      { name: 'Junior Skills Camp', startDate: '2026-08-03', endDate: '2026-08-10', price: 'DKK 12,000', level: 'Beginner' },
      { name: 'Autumn Elite Camp', startDate: '2026-10-12', endDate: '2026-10-19', price: 'DKK 20,000', level: 'Advanced' },
      { name: 'Winter Hockey Camp', startDate: '2026-12-21', endDate: '2026-12-28', price: 'DKK 14,000', level: 'Intermediate' },
      { name: 'Spring Skating Intensive', startDate: '2027-03-15', endDate: '2027-03-22', price: 'DKK 15,000', level: 'All Levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Copenhagen Hotel', pricePerWeek: 750, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Sports Residence', pricePerWeek: 450, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true }
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
      responseTime: '48h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 8,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Partnership with Copenhagen international schools',
      medicalStaff: true,
      safeguarding: 'Danmarks Ishockey Union safeguarding, background-checked coaches',
      airportPickup: true,
      mealPlan: 'Full board with Danish and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Danish', 'English'],
      emergencyProtocol: 'On-site medic, Rigshospitalet Hospital 10 minutes'
    }
  },
  {
    id: 'vienna-ice-hockey-academy',
    name: 'Vienna Ice Hockey Academy',
    country: 'Austria',
    countryFlag: '🇦🇹',
    city: 'Vienna',
    lat: 48.208,
    lng: 16.373,
    website: 'https://www.viennaicehockey.at',
    contact: '+43 1 533 22 00',
    contactEmail: 'info@viennaicehockey.at',
    description: 'Train in the home of the Erste Bank Eishockey Liga. Vienna offers top-tier hockey development with Austrian precision and a rich tradition of competitive ice hockey in Central Europe.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Danube island recreational beaches nearby' },
    priceRange: { from: 1000, to: 2500, unit: 'week', display: '€1,000 - €2,500/week' },
    socialMedia: { instagram: '@viennahockey', facebook: 'https://facebook.com/viennaicehockey', twitter: '@viennahockey' },
    climate: 'vienna',
    facilities: 'Olympic-size rink, practice rink, off-ice training centre, video analysis room, strength gym, recovery pool, equipment workshop',
    courtSurfaces: ['Olympic ice rink', 'Practice rink'],
    programs: [
      { name: 'Erste Bank Elite Programme', price: '€2,200/week', desc: 'High-performance training aligned with Austrian Ice Hockey Association standards' },
      { name: 'Junior Hockey School', price: '€1,400/week', desc: 'Structured development for young players aged 8-15 with certified coaches' },
      { name: 'Skating & Skills Camp', price: '€1,000/week', desc: 'Skating technique and puck skills for beginners and intermediates' }
    ],
    coaches: [
      { name: 'Thomas Vanek', credential: 'ÖEHV Master Coach', background: 'Former NHL forward with 1,000+ games for Buffalo Sabres and multiple teams. Austrian hockey legend and all-time leading scorer.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['German', 'English'], instagram: null },
      { name: 'Denise Altmann', credential: 'ÖEHV Level 3', background: 'Former Austrian womens national team captain. European Championship participant and youth development specialist.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['German', 'English'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=800',
      'https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=800'
    ],
    upcomingCamps: [
      { name: 'Summer Hockey School', startDate: '2026-07-06', endDate: '2026-07-13', price: '€1,800', level: 'All Levels' },
      { name: 'Junior Skills Camp', startDate: '2026-08-03', endDate: '2026-08-10', price: '€1,400', level: 'Beginner' },
      { name: 'Autumn Elite Camp', startDate: '2026-10-12', endDate: '2026-10-19', price: '€2,200', level: 'Advanced' },
      { name: 'Winter Hockey Camp', startDate: '2026-12-21', endDate: '2026-12-28', price: '€1,600', level: 'Intermediate' },
      { name: 'Spring Skating Intensive', startDate: '2027-03-15', endDate: '2027-03-22', price: '€1,700', level: 'All Levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Vienna Hotel', pricePerWeek: 700, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Sports Residence', pricePerWeek: 400, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Accommodation near Albert Schultz Eishalle area'
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
      schooling: 'Partnership with Vienna international schools',
      medicalStaff: true,
      safeguarding: 'Austrian Ice Hockey Association safeguarding, background-checked coaches',
      airportPickup: true,
      mealPlan: 'Full board with Austrian and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['German', 'English'],
      emergencyProtocol: 'On-site medic, AKH Vienna Hospital 12 minutes'
    }
  },
  {
    id: 'grenoble-ice-hockey-academy',
    name: 'Grenoble Ice Hockey Academy',
    country: 'France',
    countryFlag: '🇫🇷',
    city: 'Grenoble',
    lat: 45.188,
    lng: 5.724,
    website: 'https://www.grenobleicehockey.fr',
    contact: '+33 4 76 87 10 00',
    contactEmail: 'info@grenobleicehockey.fr',
    description: 'Train in the heart of the French Alps, a hub for hockey in France. Grenoble\'s alpine setting and strong Ligue Magnus tradition create an ideal environment for ice hockey development.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Mountain lakes within 30km for summer recreation' },
    priceRange: { from: 900, to: 2200, unit: 'week', display: '€900 - €2,200/week' },
    socialMedia: { instagram: '@grenoblehockey', facebook: 'https://facebook.com/grenobleicehockey', twitter: '@grenoblehockey' },
    climate: 'grenoble',
    facilities: 'Olympic-size rink, practice rink, alpine fitness centre, video analysis room, off-ice gym, recovery suite',
    courtSurfaces: ['Olympic ice rink', 'Practice rink'],
    programs: [
      { name: 'Alps Elite Programme', price: '€2,000/week', desc: 'High-performance training following French Ice Hockey Federation methodology' },
      { name: 'Junior Hockey School', price: '€1,200/week', desc: 'Development programme for young players aged 8-15 with bilingual coaching' },
      { name: 'Skating & Skills Camp', price: '€900/week', desc: 'Skating fundamentals and puck skills in an alpine setting' }
    ],
    coaches: [
      { name: 'Cristobal Huet', credential: 'FFHG Master Coach', background: 'Former NHL goaltender with 200+ games for Montreal Canadiens, Washington Capitals, and Chicago Blackhawks. Stanley Cup champion 2010.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['French', 'English'], instagram: null },
      { name: 'Marion Allemoz', credential: 'FFHG Level 3', background: 'Former French womens national team captain with 150+ caps. Olympic participant and multiple French Championship winner.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['French', 'English'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=800',
      'https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=800'
    ],
    upcomingCamps: [
      { name: 'Summer Alpine Hockey Camp', startDate: '2026-07-06', endDate: '2026-07-13', price: '€1,600', level: 'All Levels' },
      { name: 'Junior Skills Camp', startDate: '2026-08-03', endDate: '2026-08-10', price: '€1,200', level: 'Beginner' },
      { name: 'Autumn Elite Camp', startDate: '2026-10-12', endDate: '2026-10-19', price: '€2,000', level: 'Advanced' },
      { name: 'Winter Hockey Camp', startDate: '2026-12-21', endDate: '2026-12-28', price: '€1,400', level: 'Intermediate' },
      { name: 'Spring Skills Intensive', startDate: '2027-03-15', endDate: '2027-03-22', price: '€1,500', level: 'All Levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Grenoble Hotel', pricePerWeek: 600, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Alpine Residence', pricePerWeek: 380, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Accommodation near Pôle Sud ice arena'
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
      minAge: 8,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Partnership with Grenoble international schools',
      medicalStaff: true,
      safeguarding: 'French Ice Hockey Federation safeguarding, background-checked coaches',
      airportPickup: true,
      mealPlan: 'Full board with French and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['French', 'English'],
      emergencyProtocol: 'On-site medic, CHU Grenoble Hospital 10 minutes'
    }
  },
  {
    id: 'katowice-ice-hockey-academy',
    name: 'Katowice Ice Hockey Academy',
    country: 'Poland',
    countryFlag: '🇵🇱',
    city: 'Katowice',
    lat: 50.264,
    lng: 19.024,
    website: 'https://www.katowiceicehockey.pl',
    contact: '+48 32 259 10 00',
    contactEmail: 'info@katowiceicehockey.pl',
    description: 'Train in the heart of Silesia, Poland\'s hockey stronghold. Katowice is home to GKS Katowice and offers excellent hockey infrastructure with affordable European training.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Silesia Park recreational lakes within 10km' },
    priceRange: { from: 500, to: 1200, unit: 'week', display: '€500 - €1,200/week' },
    socialMedia: { instagram: '@katowicehockey', facebook: 'https://facebook.com/katowiceicehockey', twitter: '@katowicehockey' },
    climate: 'katowice',
    facilities: 'Olympic-size rink, practice rink, off-ice training hall, video analysis room, gym, recovery area, equipment workshop',
    courtSurfaces: ['Olympic ice rink', 'Practice rink'],
    programs: [
      { name: 'Silesia Elite Programme', price: '€1,100/week', desc: 'Intensive training following Polish Ice Hockey Federation development pathway' },
      { name: 'Junior Hockey School', price: '€700/week', desc: 'Structured youth development for players aged 8-15' },
      { name: 'Skating & Skills Camp', price: '€500/week', desc: 'Fundamental skating and puck skills for all levels' }
    ],
    coaches: [
      { name: 'Mariusz Czerkawski', credential: 'PZHL Master Coach', background: 'Former NHL forward with 500+ games for Boston Bruins, Edmonton Oilers, and New York Islanders. Poland\'s greatest NHL player.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Polish', 'English'], instagram: null },
      { name: 'Katarzyna Buczek', credential: 'PZHL Level 3', background: 'Former Polish womens national team defender with 130+ caps. Multiple Polish Championship winner and youth development coach.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Polish', 'English', 'German'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=800',
      'https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=800'
    ],
    upcomingCamps: [
      { name: 'Summer Hockey School', startDate: '2026-07-06', endDate: '2026-07-13', price: '€900', level: 'All Levels' },
      { name: 'Junior Skills Camp', startDate: '2026-08-03', endDate: '2026-08-10', price: '€700', level: 'Beginner' },
      { name: 'Autumn Elite Camp', startDate: '2026-10-12', endDate: '2026-10-19', price: '€1,100', level: 'Advanced' },
      { name: 'Winter Hockey Camp', startDate: '2026-12-21', endDate: '2026-12-28', price: '€800', level: 'Intermediate' },
      { name: 'Spring Skating Intensive', startDate: '2027-03-15', endDate: '2027-03-22', price: '€850', level: 'All Levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Katowice Hotel', pricePerWeek: 350, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Sports Residence', pricePerWeek: 200, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Accommodation near Spodek Arena area'
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
      minAge: 7,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Partnership with Katowice international schools',
      medicalStaff: true,
      safeguarding: 'Polish Ice Hockey Federation safeguarding, background-checked coaches',
      airportPickup: true,
      mealPlan: 'Full board with Polish and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Polish', 'English'],
      emergencyProtocol: 'On-site medic, University Clinical Centre Katowice 10 minutes'
    }
  },
  {
    id: 'budapest-ice-hockey-academy',
    name: 'Budapest Ice Hockey Academy',
    country: 'Hungary',
    countryFlag: '🇭🇺',
    city: 'Budapest',
    lat: 47.497,
    lng: 19.040,
    website: 'https://www.budapesticehockey.hu',
    contact: '+36 1 555 10 00',
    contactEmail: 'info@budapesticehockey.hu',
    description: 'Train with the Ferencváros tradition in Budapest. Hungary\'s capital offers a growing hockey scene with modern facilities and affordable, high-quality coaching in Central Europe.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Danube riverside and Budapest Lido within 5km' },
    priceRange: { from: 500, to: 1100, unit: 'week', display: '€500 - €1,100/week' },
    socialMedia: { instagram: '@budapesthockey', facebook: 'https://facebook.com/budapesticehockey', twitter: '@budapesthockey' },
    climate: 'budapest',
    facilities: 'Olympic-size rink, practice rink, off-ice training centre, video analysis room, gym, thermal recovery pool',
    courtSurfaces: ['Olympic ice rink', 'Practice rink'],
    programs: [
      { name: 'Ferencváros Elite Programme', price: '€1,000/week', desc: 'Intensive training following Hungarian Ice Hockey Federation methodology' },
      { name: 'Junior Hockey School', price: '€650/week', desc: 'Age-appropriate development for young players aged 8-15' },
      { name: 'Skating & Skills Camp', price: '€500/week', desc: 'Fundamental skating and puck handling for all levels' }
    ],
    coaches: [
      { name: 'János Vas', credential: 'MJSZ Master Coach', background: 'Former Hungarian national team captain with 200+ caps. Multiple Hungarian Championship winner and longtime Ferencváros coach.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Hungarian', 'English', 'German'], instagram: null },
      { name: 'Fanni Gasparics', credential: 'MJSZ Level 3', background: 'Former Hungarian womens national team forward with 100+ caps. IIHF Division I participant and youth development specialist.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Hungarian', 'English'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=800',
      'https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=800'
    ],
    upcomingCamps: [
      { name: 'Summer Hockey School', startDate: '2026-07-06', endDate: '2026-07-13', price: '€850', level: 'All Levels' },
      { name: 'Junior Skills Camp', startDate: '2026-08-03', endDate: '2026-08-10', price: '€650', level: 'Beginner' },
      { name: 'Autumn Elite Camp', startDate: '2026-10-12', endDate: '2026-10-19', price: '€1,000', level: 'Advanced' },
      { name: 'Winter Hockey Camp', startDate: '2026-12-21', endDate: '2026-12-28', price: '€750', level: 'Intermediate' },
      { name: 'Spring Skating Intensive', startDate: '2027-03-15', endDate: '2027-03-22', price: '€800', level: 'All Levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Budapest Hotel', pricePerWeek: 350, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Sports Residence', pricePerWeek: 200, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Accommodation near Tüskecsarnok arena area'
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
      minAge: 7,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Partnership with Budapest international schools',
      medicalStaff: true,
      safeguarding: 'Hungarian Ice Hockey Federation safeguarding, background-checked coaches',
      airportPickup: true,
      mealPlan: 'Full board with Hungarian and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Hungarian', 'English', 'German'],
      emergencyProtocol: 'On-site medic, Semmelweis University Hospital 12 minutes'
    }
  },
  {
    id: 'nottingham-ice-hockey-academy',
    name: 'Nottingham Ice Hockey Academy',
    country: 'UK',
    countryFlag: '🇬🇧',
    city: 'Nottingham',
    lat: 52.954,
    lng: -1.158,
    website: 'https://www.nottinghamicehockey.co.uk',
    contact: '+44 115 941 10 00',
    contactEmail: 'info@nottinghamicehockey.co.uk',
    description: 'Train in the UK\'s premier hockey city, home of the Nottingham Panthers. The National Ice Centre provides world-class facilities and Britain\'s strongest hockey culture.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No nearby beaches; Trent riverside walks available' },
    priceRange: { from: 700, to: 1800, unit: 'week', display: '£700 - £1,800/week' },
    socialMedia: { instagram: '@nottshockey', facebook: 'https://facebook.com/nottinghamicehockey', twitter: '@nottshockey' },
    climate: 'nottingham',
    facilities: 'Olympic-size rink, practice rink, off-ice gym, video analysis suite, strength and conditioning room, recovery area',
    courtSurfaces: ['Olympic ice rink', 'Practice rink'],
    programs: [
      { name: 'Panthers Elite Programme', price: '£1,600/week', desc: 'High-performance training following Ice Hockey UK development pathway' },
      { name: 'Junior Hockey School', price: '£950/week', desc: 'Structured development for young players aged 8-15' },
      { name: 'Skating & Skills Camp', price: '£700/week', desc: 'Skating fundamentals and puck skills for all abilities' }
    ],
    coaches: [
      { name: 'David Clarke', credential: 'IHUK Master Coach', background: 'Former Great Britain national team captain with 60+ caps. Nottingham Panthers legend and all-time EIHL points leader.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English'], instagram: null },
      { name: 'Katie Henry', credential: 'IHUK Level 3', background: 'Former Great Britain womens national team goaltender with 80+ caps. IIHF Division I participant.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=800',
      'https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=800'
    ],
    upcomingCamps: [
      { name: 'Summer Hockey School', startDate: '2026-07-06', endDate: '2026-07-13', price: '£1,300', level: 'All Levels' },
      { name: 'Junior Skills Camp', startDate: '2026-08-03', endDate: '2026-08-10', price: '£950', level: 'Beginner' },
      { name: 'Autumn Elite Camp', startDate: '2026-10-12', endDate: '2026-10-19', price: '£1,600', level: 'Advanced' },
      { name: 'Winter Hockey Camp', startDate: '2026-12-21', endDate: '2026-12-28', price: '£1,100', level: 'Intermediate' },
      { name: 'Spring Skating Intensive', startDate: '2027-03-15', endDate: '2027-03-22', price: '£1,200', level: 'All Levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Nottingham Hotel', pricePerWeek: 600, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Sports Residence', pricePerWeek: 350, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Accommodation near National Ice Centre'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-06-01',
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
      schooling: 'Partnership with Nottingham schools',
      medicalStaff: true,
      safeguarding: 'Ice Hockey UK safeguarding, DBS-checked coaches',
      airportPickup: true,
      mealPlan: 'Full board with British and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English'],
      emergencyProtocol: 'On-site medic, Queen\'s Medical Centre 8 minutes'
    }
  },
  {
    id: 'sheffield-ice-hockey-academy',
    name: 'Sheffield Ice Hockey Academy',
    country: 'UK',
    countryFlag: '🇬🇧',
    city: 'Sheffield',
    lat: 53.381,
    lng: -1.470,
    website: 'https://www.sheffieldicehockey.co.uk',
    contact: '+44 114 256 10 00',
    contactEmail: 'info@sheffieldicehockey.co.uk',
    description: 'Train at iceSheffield, one of the UK\'s most modern ice facilities. Home of the Sheffield Steelers, the city offers strong EIHL hockey culture and excellent training infrastructure.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No nearby beaches; Peak District outdoor recreation within 15km' },
    priceRange: { from: 650, to: 1700, unit: 'week', display: '£650 - £1,700/week' },
    socialMedia: { instagram: '@sheffieldhockey', facebook: 'https://facebook.com/sheffieldicehockey', twitter: '@sheffieldhockey' },
    climate: 'sheffield',
    facilities: 'Olympic-size rink, practice rink, off-ice gym, video analysis room, strength centre, physiotherapy suite',
    courtSurfaces: ['Olympic ice rink', 'Practice rink'],
    programs: [
      { name: 'Steelers Elite Programme', price: '£1,500/week', desc: 'High-performance training following Ice Hockey UK development pathway' },
      { name: 'Junior Hockey School', price: '£900/week', desc: 'Structured development for young players aged 8-15' },
      { name: 'Skating & Skills Camp', price: '£650/week', desc: 'Skating technique and puck skills for all levels' }
    ],
    coaches: [
      { name: 'Jonathan Phillips', credential: 'IHUK Master Coach', background: 'Former Great Britain national team forward with 50+ caps. Longtime Sheffield Steelers captain and EIHL champion.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English'], instagram: null },
      { name: 'Sophie Herbert', credential: 'IHUK Level 3', background: 'Former Great Britain womens national team forward with 70+ caps. EIHL development coach and youth specialist.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=800',
      'https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=800'
    ],
    upcomingCamps: [
      { name: 'Summer Hockey School', startDate: '2026-07-06', endDate: '2026-07-13', price: '£1,200', level: 'All Levels' },
      { name: 'Junior Skills Camp', startDate: '2026-08-03', endDate: '2026-08-10', price: '£900', level: 'Beginner' },
      { name: 'Autumn Elite Camp', startDate: '2026-10-12', endDate: '2026-10-19', price: '£1,500', level: 'Advanced' },
      { name: 'Winter Hockey Camp', startDate: '2026-12-21', endDate: '2026-12-28', price: '£1,050', level: 'Intermediate' },
      { name: 'Spring Skating Intensive', startDate: '2027-03-15', endDate: '2027-03-22', price: '£1,100', level: 'All Levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Sheffield Hotel', pricePerWeek: 550, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Sports Residence', pricePerWeek: 320, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Accommodation near iceSheffield complex'
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
      schooling: 'Partnership with Sheffield schools',
      medicalStaff: true,
      safeguarding: 'Ice Hockey UK safeguarding, DBS-checked coaches',
      airportPickup: true,
      mealPlan: 'Full board with British and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English'],
      emergencyProtocol: 'On-site medic, Sheffield Teaching Hospital 10 minutes'
    }
  },
  {
    id: 'bolzano-ice-hockey-academy',
    name: 'Bolzano Ice Hockey Academy',
    country: 'Italy',
    countryFlag: '🇮🇹',
    city: 'Bolzano',
    lat: 46.498,
    lng: 11.354,
    website: 'https://www.bolzanoicehockey.it',
    contact: '+39 0471 30 10 00',
    contactEmail: 'info@bolzanoicehockey.it',
    description: 'Train in South Tyrol, Italy\'s hockey heartland. Bolzano is home to HC Bolzano, a top ICE Hockey League club, offering a unique bilingual Italian-German hockey environment in the Dolomites.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Dolomite mountain lakes within 20km for summer recreation' },
    priceRange: { from: 900, to: 2200, unit: 'week', display: '€900 - €2,200/week' },
    socialMedia: { instagram: '@bolzanohockey', facebook: 'https://facebook.com/bolzanoicehockey', twitter: '@bolzanohockey' },
    climate: 'bolzano',
    facilities: 'Olympic-size rink, practice rink, alpine fitness centre, video analysis room, off-ice gym, recovery suite, Dolomite outdoor training area',
    courtSurfaces: ['Olympic ice rink', 'Practice rink'],
    programs: [
      { name: 'South Tyrol Elite Programme', price: '€2,000/week', desc: 'High-performance training combining Italian and Austrian hockey methodologies' },
      { name: 'Junior Hockey School', price: '€1,200/week', desc: 'Bilingual development programme for young players aged 8-15' },
      { name: 'Skating & Skills Camp', price: '€900/week', desc: 'Skating technique and puck handling in an alpine setting' }
    ],
    coaches: [
      { name: 'Roland Fink', credential: 'FISG Master Coach', background: 'Former HC Bolzano captain and Italian national team defender with 150+ caps. Multiple Italian Championship winner.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Italian', 'German', 'English'], instagram: null },
      { name: 'Stefanie Gschliesser', credential: 'FISG Level 3', background: 'Former Italian womens national team forward with 100+ caps. Olympic qualifier participant and South Tyrol youth development specialist.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Italian', 'German', 'English'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=800',
      'https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=800'
    ],
    upcomingCamps: [
      { name: 'Summer Alpine Hockey Camp', startDate: '2026-07-06', endDate: '2026-07-13', price: '€1,600', level: 'All Levels' },
      { name: 'Junior Skills Camp', startDate: '2026-08-03', endDate: '2026-08-10', price: '€1,200', level: 'Beginner' },
      { name: 'Autumn Elite Camp', startDate: '2026-10-12', endDate: '2026-10-19', price: '€2,000', level: 'Advanced' },
      { name: 'Dolomite Winter Camp', startDate: '2026-12-21', endDate: '2026-12-28', price: '€1,400', level: 'Intermediate' },
      { name: 'Spring Skills Intensive', startDate: '2027-03-15', endDate: '2027-03-22', price: '€1,500', level: 'All Levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Bolzano Hotel', pricePerWeek: 650, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Alpine Residence', pricePerWeek: 380, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Accommodation near Palaonda arena area'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-06-01',
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
      schooling: 'Partnership with Bolzano bilingual international schools',
      medicalStaff: true,
      safeguarding: 'Italian Ice Sports Federation safeguarding, background-checked coaches',
      airportPickup: true,
      mealPlan: 'Full board with South Tyrolean, Italian, and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Italian', 'German', 'English'],
      emergencyProtocol: 'On-site medic, Bolzano Hospital 8 minutes'
    }
  },
  {
    id: 'ljubljana-ice-hockey-academy',
    name: 'Ljubljana Ice Hockey Academy',
    country: 'Slovenia',
    countryFlag: '🇸🇮',
    city: 'Ljubljana',
    lat: 46.056,
    lng: 14.508,
    website: 'https://www.ljubljanaicehockey.si',
    contact: '+386 1 306 10 00',
    contactEmail: 'info@ljubljanaicehockey.si',
    description: 'Train at the historic Tivoli arena in Slovenia\'s capital. Ljubljana has a proud hockey tradition with HK Olimpija and offers excellent value in a beautiful alpine setting.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Lake Bled and alpine lakes within 55km' },
    priceRange: { from: 600, to: 1500, unit: 'week', display: '€600 - €1,500/week' },
    socialMedia: { instagram: '@ljubljanahockey', facebook: 'https://facebook.com/ljubljanaicehockey', twitter: '@ljubljanahockey' },
    climate: 'ljubljana',
    facilities: 'Olympic-size rink at Tivoli Hall, practice rink, off-ice gym, video analysis room, recovery area, equipment workshop',
    courtSurfaces: ['Olympic ice rink', 'Practice rink'],
    programs: [
      { name: 'Tivoli Elite Programme', price: '€1,300/week', desc: 'Intensive training following Slovenian Ice Hockey Association development pathway' },
      { name: 'Junior Hockey School', price: '€800/week', desc: 'Age-appropriate development for young players aged 8-15' },
      { name: 'Skating & Skills Camp', price: '€600/week', desc: 'Skating fundamentals and puck skills for all levels' }
    ],
    coaches: [
      { name: 'Anže Kopitar', credential: 'HZS Master Coach', background: 'Former NHL centre with 1,200+ games for Los Angeles Kings. Two-time Stanley Cup champion and Slovenian hockey legend.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Slovenian', 'English'], instagram: null },
      { name: 'Pia Pren', credential: 'HZS Level 3', background: 'Former Slovenian womens national team captain with 100+ caps. IIHF Division participant and youth development coach.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Slovenian', 'English', 'Croatian'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=800',
      'https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=800'
    ],
    upcomingCamps: [
      { name: 'Summer Hockey School', startDate: '2026-07-06', endDate: '2026-07-13', price: '€1,100', level: 'All Levels' },
      { name: 'Junior Skills Camp', startDate: '2026-08-03', endDate: '2026-08-10', price: '€800', level: 'Beginner' },
      { name: 'Autumn Elite Camp', startDate: '2026-10-12', endDate: '2026-10-19', price: '€1,300', level: 'Advanced' },
      { name: 'Winter Hockey Camp', startDate: '2026-12-21', endDate: '2026-12-28', price: '€900', level: 'Intermediate' },
      { name: 'Spring Skating Intensive', startDate: '2027-03-15', endDate: '2027-03-22', price: '€1,000', level: 'All Levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Ljubljana Hotel', pricePerWeek: 450, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Sports Residence', pricePerWeek: 280, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Accommodation near Tivoli Hall arena area'
    },
    availability: {
      status: 'limited',
      nextIntake: '2026-06-01',
      spotsLeft: 12,
      responseTime: '24h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 7,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Partnership with Ljubljana international schools',
      medicalStaff: true,
      safeguarding: 'Slovenian Ice Hockey Association safeguarding, background-checked coaches',
      airportPickup: true,
      mealPlan: 'Full board with Slovenian and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Slovenian', 'English', 'Croatian'],
      emergencyProtocol: 'On-site medic, University Medical Centre Ljubljana 10 minutes'
    }
  },
  {
    id: 'tallinn-ice-hockey-academy',
    name: 'Tallinn Ice Hockey Academy',
    country: 'Estonia',
    countryFlag: '🇪🇪',
    city: 'Tallinn',
    lat: 59.437,
    lng: 24.753,
    website: 'https://www.tallinnhockey.ee',
    contact: '+372 6 100 200',
    contactEmail: 'info@tallinnhockey.ee',
    description: 'Train in Estonia\'s capital on the Baltic Sea. Tallinn offers a growing hockey scene with modern facilities, affordable training, and strong connections to Nordic and Russian hockey traditions.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 4, description: 'Pirita Beach on the Baltic Sea within 4km' },
    priceRange: { from: 500, to: 1200, unit: 'week', display: '€500 - €1,200/week' },
    socialMedia: { instagram: '@tallinnhockey', facebook: 'https://facebook.com/tallinnhockey', twitter: '@tallinnhockey' },
    climate: 'tallinn',
    facilities: 'Olympic-size rink, practice rink, off-ice training hall, video analysis room, gym, recovery sauna, equipment workshop',
    courtSurfaces: ['Olympic ice rink', 'Practice rink'],
    programs: [
      { name: 'Baltic Elite Programme', price: '€1,100/week', desc: 'Intensive training following Estonian Ice Hockey Association methodology' },
      { name: 'Junior Hockey School', price: '€700/week', desc: 'Age-appropriate development for young players aged 8-15' },
      { name: 'Skating & Skills Camp', price: '€500/week', desc: 'Skating fundamentals and puck handling for all levels' }
    ],
    coaches: [
      { name: 'Robert Rooba', credential: 'EJL Master Coach', background: 'Former Estonian national team forward with 200+ caps. Multiple Estonian Championship winner and national team record holder.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Estonian', 'English', 'Russian'], instagram: null },
      { name: 'Kairi Tuulik', credential: 'EJL Level 3', background: 'Former Estonian womens national team captain with 80+ caps. Youth development specialist and IIHF Division participant.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Estonian', 'English', 'Russian'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=800',
      'https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=800'
    ],
    upcomingCamps: [
      { name: 'Summer Hockey School', startDate: '2026-07-06', endDate: '2026-07-13', price: '€900', level: 'All Levels' },
      { name: 'Junior Skills Camp', startDate: '2026-08-03', endDate: '2026-08-10', price: '€700', level: 'Beginner' },
      { name: 'Autumn Elite Camp', startDate: '2026-10-12', endDate: '2026-10-19', price: '€1,100', level: 'Advanced' },
      { name: 'Winter Hockey Camp', startDate: '2026-12-21', endDate: '2026-12-28', price: '€800', level: 'Intermediate' },
      { name: 'Spring Skating Intensive', startDate: '2027-03-15', endDate: '2027-03-22', price: '€850', level: 'All Levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Tallinn Hotel', pricePerWeek: 350, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Sports Residence', pricePerWeek: 200, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Accommodation near Tondiraba Ice Hall area'
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
      minAge: 7,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Partnership with Tallinn international schools',
      medicalStaff: true,
      safeguarding: 'Estonian Ice Hockey Association safeguarding, background-checked coaches',
      airportPickup: true,
      mealPlan: 'Full board with Estonian and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Estonian', 'English', 'Russian'],
      emergencyProtocol: 'On-site medic, East-Tallinn Central Hospital 10 minutes'
    }
  },
  {
    id: 'zagreb-ice-hockey-academy',
    name: 'Zagreb Ice Hockey Academy',
    country: 'Croatia',
    countryFlag: '🇭🇷',
    city: 'Zagreb',
    lat: 45.815,
    lng: 15.982,
    website: 'https://www.zagrebicehockey.hr',
    contact: '+385 1 309 10 00',
    contactEmail: 'info@zagrebicehockey.hr',
    description: 'Train in Croatia\'s capital, home of KHL Medveščak Zagreb. Zagreb offers a competitive hockey scene with modern facilities and excellent value in Southeast Europe.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Jarun Lake recreational area within 6km' },
    priceRange: { from: 500, to: 1200, unit: 'week', display: '€500 - €1,200/week' },
    socialMedia: { instagram: '@zagrebhockey', facebook: 'https://facebook.com/zagrebicehockey', twitter: '@zagrebhockey' },
    climate: 'zagreb',
    facilities: 'Olympic-size rink, practice rink, off-ice training centre, video analysis room, gym, recovery area, equipment workshop',
    courtSurfaces: ['Olympic ice rink', 'Practice rink'],
    programs: [
      { name: 'Medveščak Elite Programme', price: '€1,100/week', desc: 'High-performance training following Croatian Ice Hockey Federation methodology' },
      { name: 'Junior Hockey School', price: '€700/week', desc: 'Structured youth development for players aged 8-15' },
      { name: 'Skating & Skills Camp', price: '€500/week', desc: 'Skating fundamentals and puck handling for all levels' }
    ],
    coaches: [
      { name: 'Boris Rendulic', credential: 'HSHL Master Coach', background: 'Former Croatian national team forward with 180+ caps. KHL Medveščak legend and multiple Croatian Championship winner.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Croatian', 'English', 'German'], instagram: null },
      { name: 'Ana Kovačević', credential: 'HSHL Level 3', background: 'Former Croatian womens national team defender with 70+ caps. Youth development specialist and IIHF Division participant.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Croatian', 'English', 'Slovenian'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=800',
      'https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=800'
    ],
    upcomingCamps: [
      { name: 'Summer Hockey School', startDate: '2026-07-06', endDate: '2026-07-13', price: '€900', level: 'All Levels' },
      { name: 'Junior Skills Camp', startDate: '2026-08-03', endDate: '2026-08-10', price: '€700', level: 'Beginner' },
      { name: 'Autumn Elite Camp', startDate: '2026-10-12', endDate: '2026-10-19', price: '€1,100', level: 'Advanced' },
      { name: 'Winter Hockey Camp', startDate: '2026-12-21', endDate: '2026-12-28', price: '€800', level: 'Intermediate' },
      { name: 'Spring Skating Intensive', startDate: '2027-03-15', endDate: '2027-03-22', price: '€850', level: 'All Levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Zagreb Hotel', pricePerWeek: 350, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Sports Residence', pricePerWeek: 200, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Accommodation near Dom Sportova arena area'
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
      minAge: 7,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Partnership with Zagreb international schools',
      medicalStaff: true,
      safeguarding: 'Croatian Ice Hockey Federation safeguarding, background-checked coaches',
      airportPickup: true,
      mealPlan: 'Full board with Croatian and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Croatian', 'English', 'German'],
      emergencyProtocol: 'On-site medic, KBC Zagreb Hospital 10 minutes'
    }
  },
  {
    id: 'ankara-ice-hockey-academy',
    name: 'Ankara Ice Hockey Academy',
    country: 'Turkey',
    countryFlag: '',
    city: 'Ankara',
    lat: 39.9334,
    lng: 32.8597,
    website: 'https://www.ankaraicehockey.com.tr',
    contact: '+90 312 456 7890',
    contactEmail: 'info@ankaraicehockey.com.tr',
    description: 'Turkey\'s leading ice hockey academy in the capital Ankara, developing the next generation of Turkish ice hockey players with modern rink facilities and international coaching standards.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Landlocked capital, no beach access' },
    priceRange: { from: 500, to: 1400, unit: 'week', display: '500 - 1,400/week' },
    socialMedia: { instagram: '@ankaraicehockey', facebook: 'https://facebook.com/ankaraicehockeyacademy', twitter: '@ankaraicehockey' },
    climate: 'ankara',
    facilities: 'Olympic-size ice rink (60x30m), training rink, off-ice training facility, gym, video analysis room, locker rooms, pro shop',
    courtSurfaces: ['Olympic ice rink', 'Training rink', 'Off-ice facility'],
    programs: [
      { name: 'Youth Development Programme', price: '600/week', desc: 'Age-appropriate ice hockey development with Turkish national youth coaches' },
      { name: 'Skills Intensive Camp', price: '900/week', desc: 'Focused skills training including skating, shooting, passing and game tactics' },
      { name: 'Elite Performance Programme', price: '1,400/week', desc: 'Advanced training for competitive players with off-ice conditioning and video analysis' }
    ],
    coaches: [
      { name: 'Serkan Demir', credential: 'IIHF Level 3 Coach', background: 'Former Turkish national ice hockey team player and national team assistant coach. 12 years coaching experience.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Turkish', 'English'], instagram: null },
      { name: 'Jan Novák', credential: 'IIHF Level 2 Coach', background: 'Czech-born coach bringing Central European hockey methodology to Turkey. Former Czech junior league player.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Czech', 'Turkish'], instagram: null }
    ],
    photos: [
      'https://images.unsplash.com/photo-1580748142159-d85b6a760e63?w=800',
      'https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=800'
    ],
    upcomingCamps: [
      { name: 'Summer Ice Camp', startDate: '2026-06-22', endDate: '2026-06-29', price: '900', level: 'Intermediate' },
      { name: 'Junior Holiday Camp', startDate: '2026-08-10', endDate: '2026-08-17', price: '600', level: 'Beginner' },
      { name: 'Autumn Skills Clinic', startDate: '2026-10-19', endDate: '2026-10-26', price: '800', level: 'All Levels' },
      { name: 'Winter Intensive Camp', startDate: '2026-12-21', endDate: '2026-12-28', price: '1,200', level: 'Advanced' },
      { name: 'Pre-Season Camp', startDate: '2027-03-01', endDate: '2027-03-08', price: '1,000', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Ankara City Hotel', pricePerWeek: 350, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Shared Athlete Apartment', pricePerWeek: 200, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Central Ankara accommodation with easy access to rink facilities'
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
      schooling: 'Partnership with Ankara international schools',
      medicalStaff: true,
      safeguarding: 'Turkish Ice Hockey Federation child protection protocols',
      airportPickup: true,
      mealPlan: 'Full board with Turkish cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Turkish', 'English'],
      emergencyProtocol: 'On-site first aid, Ankara City Hospital 15 minutes'
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
  riga: { avgTemp: 6, summerHigh: 22, winterLow: -6, rainyDays: 120, humidity: 78, description: 'Maritime/continental climate with cold winters ideal for outdoor ice and mild summers' },
  oslo: { avgTemp: 6, summerHigh: 22, winterLow: -5, rainyDays: 100, humidity: 72, description: 'Scandinavian climate with cold winters and mild summers. Indoor rinks ensure year-round training.' },
  copenhagen: { avgTemp: 8, summerHigh: 21, winterLow: -1, rainyDays: 110, humidity: 78, description: 'Maritime Scandinavian climate with mild winters and cool summers' },
  vienna: { avgTemp: 11, summerHigh: 26, winterLow: -2, rainyDays: 90, humidity: 68, description: 'Continental climate with warm summers and cold winters on the Danube' },
  grenoble: { avgTemp: 11, summerHigh: 27, winterLow: -1, rainyDays: 95, humidity: 68, description: 'Alpine climate with cold winters and warm summers in the French Alps' },
  katowice: { avgTemp: 8, summerHigh: 24, winterLow: -4, rainyDays: 110, humidity: 74, description: 'Continental climate with cold winters and warm summers in the Silesian basin' },
  budapest: { avgTemp: 11, summerHigh: 28, winterLow: -2, rainyDays: 85, humidity: 66, description: 'Continental climate with hot summers and cold winters along the Danube' },
  nottingham: { avgTemp: 10, summerHigh: 21, winterLow: 1, rainyDays: 120, humidity: 78, description: 'Temperate maritime climate with mild winters and cool summers in the East Midlands' },
  sheffield: { avgTemp: 9, summerHigh: 20, winterLow: 1, rainyDays: 125, humidity: 80, description: 'Temperate maritime climate with cool temperatures influenced by Pennine hills' },
  bolzano: { avgTemp: 12, summerHigh: 28, winterLow: -3, rainyDays: 80, humidity: 62, description: 'Alpine valley climate with warm summers and cold winters in South Tyrol' },
  ljubljana: { avgTemp: 10, summerHigh: 26, winterLow: -2, rainyDays: 110, humidity: 72, description: 'Continental climate with alpine influence, cold winters and warm summers' },
  tallinn: { avgTemp: 6, summerHigh: 21, winterLow: -6, rainyDays: 115, humidity: 78, description: 'Baltic maritime climate with cold winters and mild summers on the Gulf of Finland' },
  zagreb: { avgTemp: 11, summerHigh: 27, winterLow: -1, rainyDays: 95, humidity: 70, description: 'Continental climate with warm summers and cold winters in the Croatian capital' },
  'ankara': { avgTemp: 12, summerHigh: 30, winterLow: -3, rainyDays: 100, humidity: 60, description: 'Continental climate with hot dry summers and cold snowy winters. Indoor rinks ensure year-round training.' }
};

const NEWS_ITEMS = [
  { title: 'IIHF World Championship 2025 Preview', date: '2025-05-05', summary: 'Comprehensive preview of the 2025 IIHF World Championship with analysis of European contenders and breakout players to watch.' },
  { title: 'Swedish Hockey Model Studied Worldwide', date: '2025-04-12', summary: 'Research paper highlights how Sweden player development model produces the highest NHL draft picks per capita in Europe.' },
  { title: 'New Olympic-Size Rinks Open Across Europe', date: '2025-03-18', summary: 'Five new Olympic-standard ice rinks opened in 2024-25, boosting training capacity in Finland, Czech Republic, and Switzerland.' },
  { title: 'European Youth Hockey Participation Hits Record High', date: '2025-02-22', summary: 'IIHF reports record youth registration numbers across Europe driven by Olympic success and expanded girls hockey programs.' },
  { title: 'Off-Ice Training Revolution in European Hockey', date: '2025-01-30', summary: 'Skating treadmills and virtual reality training tools are transforming how European hockey academies develop skating technique.' }
];

const COUNTRIES = ['Sweden', 'Finland', 'Czech Republic', 'Switzerland', 'Germany', 'Slovakia', 'Latvia', 'Norway', 'Denmark', 'Austria', 'France', 'Poland', 'Hungary', 'UK', 'Italy', 'Slovenia', 'Estonia', 'Croatia', 'Turkey'];
