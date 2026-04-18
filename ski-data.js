const SPORT_TYPE = 'ski';

const ACADEMIES = [
  {
    id: 'innsbruck-ski-academy',
    name: 'Innsbruck Alpine Ski Academy',
    country: 'Austria',
    countryFlag: '🇦🇹',
    city: 'Innsbruck',
    lat: 47.2692,
    lng: 11.4041,
    website: 'https://www.innsbruck-ski-academy.at',
    contact: '+43 512 345 678',
    contactEmail: 'info@innsbruck-ski-academy.at',
    description: 'Elite ski training academy in the heart of Tyrol, offering world-class alpine programs with access to the Nordkette and Axamer Lizum ski areas. Home to multiple Olympic venues.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Alpine resort, no beach access' },
    priceRange: { from: 900, to: 2200, unit: 'week', display: '€900 - €2,200/week' },
    socialMedia: { instagram: '@innsbruck_ski', facebook: 'https://facebook.com/innsbruckski', twitter: '@innsbruck_ski' },
    climate: 'innsbruck',
    facilities: 'Altitude: 900-2340m, 90+ pistes, 80% snowmaking coverage, terrain park, FIS-homologated race course, slalom and giant slalom gates, full equipment rental, heated ski storage, video analysis room, fitness center, indoor swimming pool, wellness spa',
    courtSurfaces: ['Alpine skiing', 'Snowboarding', 'Cross-country', 'Freestyle'],
    programs: [
      { name: 'Alpine Race Training', price: '€1,500/week', desc: 'Intensive slalom and giant slalom training with video analysis and gate drills' },
      { name: 'Junior Development Camp', price: '€1,200/week', desc: 'Progressive ski training for young athletes aged 8-16 with certified instructors' },
      { name: 'Adult Improvement Week', price: '€900/week', desc: 'Technique refinement for intermediate to advanced adult skiers' }
    ],
    coaches: [
      {
        name: 'Hans Müller',
        credential: 'Austrian State Certified Ski Instructor (Diplomskilehrer)',
        background: 'Former Austrian national team member with 15 years of coaching experience at elite level',
        atpWta: false,
        bestRanking: null,
        rankingNote: null,
        languages: ['English', 'German'],
        instagram: null
      },
      {
        name: 'Katharina Berger',
        credential: 'ISIA certified, ÖSV Level 4',
        background: 'Specialized in junior development and freestyle coaching, former Europa Cup competitor',
        atpWta: false,
        bestRanking: null,
        rankingNote: null,
        languages: ['English', 'German', 'Italian'],
        instagram: null
      }
    ],
    photos: [
      'https://images.unsplash.com/photo-1551524559-8af4e6624178?w=800',
      'https://images.unsplash.com/photo-1565992441121-4367c2967103?w=800',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      'https://images.unsplash.com/photo-1548133464-29abc661eb5c?w=800'
    ],
    upcomingCamps: [
      { name: 'Winter Race Camp', startDate: '2025-12-15', endDate: '2025-12-22', price: '€1,500', level: 'Advanced' },
      { name: 'Christmas Junior Camp', startDate: '2025-12-22', endDate: '2025-12-29', price: '€1,200', level: 'All levels' },
      { name: 'New Year Intensive', startDate: '2026-01-05', endDate: '2026-01-12', price: '€1,400', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'chalet', label: 'Alpine Chalet', pricePerWeek: 550, maxOccupancy: 4, bathType: 'ensuite', mealsIncluded: true },
        { type: 'hotel', label: 'Sport Hotel', pricePerWeek: 850, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Located near Axamer Lizum with shuttle service to slopes'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-12-01',
      spotsLeft: 25,
      responseTime: '48h',
      privateLessons: true,
      yearRound: false
    },
    juniorInfo: {
      minAge: 6,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Available during season',
      medicalStaff: true,
      safeguarding: 'Austrian Ski Federation child protection standards',
      airportPickup: true,
      mealPlan: 'Full board with mountain nutrition focus',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'German'],
      emergencyProtocol: 'Mountain rescue team on call, Innsbruck University Hospital 15 min away'
    }
  },
  {
    id: 'schladming-ski-camp',
    name: 'Schladming Ski Racing Camp',
    country: 'Austria',
    countryFlag: '🇦🇹',
    city: 'Schladming',
    lat: 47.3942,
    lng: 13.6872,
    website: 'https://www.schladming-skicamp.at',
    contact: '+43 3687 234 567',
    contactEmail: 'info@schladming-skicamp.at',
    description: 'Located on the famous Planai slope, host of World Cup night slalom events. Professional race training in the heart of the Ski Amadé region with 760km of pistes.',
    ageGroups: ['Junior', 'Adult'],
    level: 'Intermediate to Advanced',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Alpine resort, no beach access' },
    priceRange: { from: 850, to: 1900, unit: 'week', display: '€850 - €1,900/week' },
    socialMedia: { instagram: '@schladming_ski', facebook: 'https://facebook.com/schladmingskicamp', twitter: '@schladming_ski' },
    climate: 'schladming',
    facilities: 'Altitude: 745-2015m, 760km pistes across Ski Amadé, 95% snowmaking on Planai, FIS World Cup race course, electronic timing system, race gates, equipment rental, ski storage, video analysis room, gym, sauna',
    courtSurfaces: ['Alpine skiing', 'Snowboarding', 'Cross-country'],
    programs: [
      { name: 'World Cup Race Experience', price: '€1,900/week', desc: 'Train on the Planai World Cup course with professional race coaching' },
      { name: 'Technical Skiing Camp', price: '€1,100/week', desc: 'Focus on carving technique and speed management on groomed runs' },
      { name: 'Junior Race Development', price: '€850/week', desc: 'Age-appropriate race training for aspiring young ski racers' }
    ],
    coaches: [
      {
        name: 'Stefan Gruber',
        credential: 'ÖSV State Coach, FIS Technical Delegate',
        background: 'Former World Cup circuit competitor, 20 years coaching experience including Austrian junior national team',
        atpWta: false,
        bestRanking: null,
        rankingNote: null,
        languages: ['English', 'German'],
        instagram: null
      }
    ],
    photos: [
      'https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800',
      'https://images.unsplash.com/photo-1517483000871-1dbf64a6e1c6?w=800',
      'https://images.unsplash.com/photo-1520208422220-d12a3c588e6c?w=800'
    ],
    upcomingCamps: [
      { name: 'Planai Race Week', startDate: '2026-01-12', endDate: '2026-01-19', price: '€1,900', level: 'Advanced' },
      { name: 'February Half-Term Camp', startDate: '2026-02-16', endDate: '2026-02-23', price: '€1,100', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Sport Hotel Planai', pricePerWeek: 700, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Self-Catering Apartment', pricePerWeek: 450, maxOccupancy: 4, bathType: 'shared', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Ski-in/ski-out access from Sport Hotel, 5-minute walk to Planai gondola'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-12-08',
      spotsLeft: 18,
      responseTime: '48h',
      privateLessons: true,
      yearRound: false
    },
    juniorInfo: {
      minAge: 8,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Available during season',
      medicalStaff: true,
      safeguarding: 'Austrian Ski Federation child protection standards',
      airportPickup: true,
      mealPlan: 'Full board with mountain nutrition focus',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'German'],
      emergencyProtocol: 'Mountain rescue and Schladming hospital emergency protocol'
    }
  },
  {
    id: 'st-anton-performance-ski',
    name: 'St. Anton Performance Ski Centre',
    country: 'Austria',
    countryFlag: '🇦🇹',
    city: 'St. Anton am Arlberg',
    lat: 47.1275,
    lng: 10.2636,
    website: 'https://www.stanton-skicentre.at',
    contact: '+43 5446 345 678',
    contactEmail: 'info@stanton-skicentre.at',
    description: 'Premium ski training at the birthplace of alpine skiing. St. Anton offers legendary terrain with 300km of runs across the Ski Arlberg region, the largest interconnected ski area in Austria.',
    ageGroups: ['Junior', 'Adult', 'Masters'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Alpine resort, no beach access' },
    priceRange: { from: 1200, to: 2800, unit: 'week', display: '€1,200 - €2,800/week' },
    socialMedia: { instagram: '@stanton_ski', facebook: 'https://facebook.com/stantonskicentre', twitter: '@stanton_ski' },
    climate: 'st-anton',
    facilities: 'Altitude: 1304-2811m, 300km pistes, 87% snowmaking coverage, terrain park, race training area, mogul course, equipment rental, heated ski lockers, video analysis suite, fitness center, spa and wellness',
    courtSurfaces: ['Alpine skiing', 'Snowboarding', 'Freeride', 'Freestyle'],
    programs: [
      { name: 'Arlberg Freeride Experience', price: '€2,800/week', desc: 'Off-piste and backcountry skiing with avalanche safety training and mountain guiding' },
      { name: 'All-Mountain Performance', price: '€1,800/week', desc: 'Comprehensive skiing improvement across all terrain types including moguls and steeps' },
      { name: 'Beginner to Parallel', price: '€1,200/week', desc: 'Structured progression from first steps to confident parallel skiing' }
    ],
    coaches: [
      {
        name: 'Markus Eder',
        credential: 'Austrian State Certified (Diplomskilehrer), IFMGA Mountain Guide',
        background: 'Expert in off-piste and freeride coaching with extensive backcountry experience across the Alps',
        atpWta: false,
        bestRanking: null,
        rankingNote: null,
        languages: ['English', 'German', 'French'],
        instagram: null
      }
    ],
    photos: [
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800',
      'https://images.unsplash.com/photo-1486673748761-a8d18475c757?w=800',
      'https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=800',
      'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=800'
    ],
    upcomingCamps: [
      { name: 'Early Season Opener', startDate: '2025-12-01', endDate: '2025-12-08', price: '€1,800', level: 'All levels' },
      { name: 'Freeride Week', startDate: '2026-01-19', endDate: '2026-01-26', price: '€2,800', level: 'Advanced' },
      { name: 'Spring Skiing Camp', startDate: '2026-03-16', endDate: '2026-03-23', price: '€1,500', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'chalet', label: 'Luxury Ski Chalet', pricePerWeek: 900, maxOccupancy: 6, bathType: 'ensuite', mealsIncluded: true },
        { type: 'hotel', label: 'Boutique Hotel', pricePerWeek: 1100, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Slope-side accommodation with ski-in/ski-out access'
    },
    availability: {
      status: 'limited',
      nextIntake: '2025-12-01',
      spotsLeft: 8,
      responseTime: '24h',
      privateLessons: true,
      yearRound: false
    },
    juniorInfo: {
      minAge: 7,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Available during season',
      medicalStaff: true,
      safeguarding: 'Austrian Ski Federation child protection standards',
      airportPickup: true,
      mealPlan: 'Full board with mountain nutrition focus',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'German', 'French'],
      emergencyProtocol: 'Mountain rescue team, St. Anton medical center with helipad'
    }
  },
  {
    id: 'verbier-ski-academy',
    name: 'Verbier International Ski Academy',
    country: 'Switzerland',
    countryFlag: '🇨🇭',
    city: 'Verbier',
    lat: 46.0967,
    lng: 7.2286,
    website: 'https://www.verbier-ski-academy.ch',
    contact: '+41 27 771 6800',
    contactEmail: 'info@verbier-ski-academy.ch',
    description: 'World-renowned ski academy in the 4 Vallées ski area, one of the largest in Switzerland with 410km of runs. Known for freeride and off-piste excellence with stunning Mont Blanc views.',
    ageGroups: ['Junior', 'Adult'],
    level: 'Intermediate to Expert',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Alpine resort, no beach access' },
    priceRange: { from: 1500, to: 3500, unit: 'week', display: 'CHF 1,500 - CHF 3,500/week' },
    socialMedia: { instagram: '@verbier_ski_academy', facebook: 'https://facebook.com/verbierskiacademy', twitter: '@verbier_ski' },
    climate: 'verbier',
    facilities: 'Altitude: 1500-3330m, 410km pistes across 4 Vallées, terrain park, FIS race course, Mont Fort glacier skiing, equipment rental, premium ski storage, video analysis lab, fitness center, swimming pool, luxury spa',
    courtSurfaces: ['Alpine skiing', 'Snowboarding', 'Freeride', 'Cross-country'],
    programs: [
      { name: 'Verbier Freeride Masterclass', price: 'CHF 3,500/week', desc: 'Expert-level off-piste coaching with avalanche awareness and backcountry navigation' },
      { name: 'Performance Race Training', price: 'CHF 2,500/week', desc: 'High-level race training with electronic timing and video feedback' },
      { name: 'Intermediate Ski Week', price: 'CHF 1,500/week', desc: 'Technique development for confident intermediate skiers wanting to progress' }
    ],
    coaches: [
      {
        name: 'Pierre Durand',
        credential: 'Swiss Snowsports Professional (SSBS), ISIA certified',
        background: 'Former Freeride World Tour competitor, expert in off-piste and backcountry coaching',
        atpWta: false,
        bestRanking: null,
        rankingNote: null,
        languages: ['English', 'French', 'German'],
        instagram: null
      }
    ],
    photos: [
      'https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800',
      'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=800',
      'https://images.unsplash.com/photo-1551524559-8af4e6624178?w=800',
      'https://images.unsplash.com/photo-1542224566-6e85f2e6772f?w=800'
    ],
    upcomingCamps: [
      { name: 'Verbier Freeride Week', startDate: '2026-01-12', endDate: '2026-01-19', price: 'CHF 3,500', level: 'Expert' },
      { name: 'February Performance Camp', startDate: '2026-02-09', endDate: '2026-02-16', price: 'CHF 2,500', level: 'Advanced' },
      { name: 'Spring Corn Snow Camp', startDate: '2026-03-23', endDate: '2026-03-30', price: 'CHF 2,000', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'chalet', label: 'Swiss Chalet', pricePerWeek: 1000, maxOccupancy: 4, bathType: 'ensuite', mealsIncluded: true },
        { type: 'hotel', label: 'Luxury Resort Hotel', pricePerWeek: 1500, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Central Verbier location, 3-minute walk to Médran lift station'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-12-15',
      spotsLeft: 15,
      responseTime: '48h',
      privateLessons: true,
      yearRound: false
    },
    juniorInfo: {
      minAge: 8,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Available during season',
      medicalStaff: true,
      safeguarding: 'Swiss-Ski child protection standards',
      airportPickup: true,
      mealPlan: 'Full board with mountain nutrition focus',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'French', 'German'],
      emergencyProtocol: 'Air Glaciers helicopter rescue, Sion hospital 45 min'
    }
  },
  {
    id: 'zermatt-ski-excellence',
    name: 'Zermatt Ski Excellence Centre',
    country: 'Switzerland',
    countryFlag: '🇨🇭',
    city: 'Zermatt',
    lat: 46.0207,
    lng: 7.7491,
    website: 'https://www.zermatt-ski-excellence.ch',
    contact: '+41 27 966 8100',
    contactEmail: 'info@zermatt-ski-excellence.ch',
    description: 'Train beneath the iconic Matterhorn in Europe\'s highest ski area. Year-round glacier skiing at 3883m with 360km of pistes extending into Cervinia, Italy.',
    ageGroups: ['Junior', 'Adult', 'Masters'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Alpine resort, no beach access' },
    priceRange: { from: 1400, to: 3200, unit: 'week', display: 'CHF 1,400 - CHF 3,200/week' },
    socialMedia: { instagram: '@zermatt_ski_exc', facebook: 'https://facebook.com/zermattskiexcellence', twitter: '@zermatt_ski' },
    climate: 'zermatt',
    facilities: 'Altitude: 1620-3883m (Matterhorn Glacier Paradise), 360km pistes, glacier skiing, Gravity Park terrain park, race training slope, equipment rental, ski storage, video analysis room, gym, swimming pool, spa and wellness center',
    courtSurfaces: ['Alpine skiing', 'Snowboarding', 'Cross-country', 'Glacier skiing'],
    programs: [
      { name: 'Matterhorn Glacier Camp', price: 'CHF 3,200/week', desc: 'High-altitude race training on glacier slopes with national-level coaching' },
      { name: 'All-Mountain Explorer', price: 'CHF 2,000/week', desc: 'Guided skiing across the full Zermatt-Cervinia ski area with technique coaching' },
      { name: 'First Tracks Beginner', price: 'CHF 1,400/week', desc: 'Gentle progression program on dedicated beginner slopes above Zermatt' }
    ],
    coaches: [
      {
        name: 'Marco Cavalli',
        credential: 'Swiss Snowsports Professional (SSBS), former Swiss Ski team coach',
        background: 'Coached multiple Swiss national team athletes, specialist in giant slalom and super-G',
        atpWta: false,
        bestRanking: null,
        rankingNote: null,
        languages: ['English', 'German', 'Italian', 'French'],
        instagram: null
      }
    ],
    photos: [
      'https://images.unsplash.com/photo-1531117250144-40c3c4688a80?w=800',
      'https://images.unsplash.com/photo-1520208422220-d12a3c588e6c?w=800',
      'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=800'
    ],
    upcomingCamps: [
      { name: 'Glacier Pre-Season Camp', startDate: '2025-11-10', endDate: '2025-11-17', price: 'CHF 2,500', level: 'Advanced' },
      { name: 'Holiday Ski Week', startDate: '2025-12-22', endDate: '2025-12-29', price: 'CHF 2,000', level: 'All levels' },
      { name: 'March Race Camp', startDate: '2026-03-09', endDate: '2026-03-16', price: 'CHF 3,200', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Matterhorn View Hotel', pricePerWeek: 1200, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Mountain Apartment', pricePerWeek: 800, maxOccupancy: 4, bathType: 'ensuite', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Car-free resort, electric shuttle service to all lifts'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-11-10',
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
      schooling: 'Available during season',
      medicalStaff: true,
      safeguarding: 'Swiss-Ski child protection standards',
      airportPickup: true,
      mealPlan: 'Full board with mountain nutrition focus',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'German', 'Italian', 'French'],
      emergencyProtocol: 'Air Zermatt helicopter rescue, Visp hospital 35 min by train'
    }
  },
  {
    id: 'chamonix-ski-performance',
    name: 'Chamonix Mont-Blanc Ski Performance',
    country: 'France',
    countryFlag: '🇫🇷',
    city: 'Chamonix',
    lat: 45.9237,
    lng: 6.8694,
    website: 'https://www.chamonix-ski-performance.fr',
    contact: '+33 4 50 53 2200',
    contactEmail: 'info@chamonix-ski-performance.fr',
    description: 'Train in the shadow of Mont Blanc at one of the world\'s most iconic mountain destinations. Chamonix offers extreme terrain, legendary off-piste, and the famous Vallée Blanche descent.',
    ageGroups: ['Junior', 'Adult'],
    level: 'Intermediate to Expert',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Alpine resort, no beach access' },
    priceRange: { from: 1100, to: 2800, unit: 'week', display: '€1,100 - €2,800/week' },
    socialMedia: { instagram: '@chamonix_ski_perf', facebook: 'https://facebook.com/chamonixskiperformance', twitter: '@cham_ski' },
    climate: 'chamonix',
    facilities: 'Altitude: 1035-3842m (Aiguille du Midi), 170km pistes across 5 ski areas, legendary off-piste terrain, terrain park at Les Grands Montets, race gates, equipment rental, ski storage, video analysis, gym, swimming pool, spa',
    courtSurfaces: ['Alpine skiing', 'Snowboarding', 'Freeride', 'Cross-country', 'Ski touring'],
    programs: [
      { name: 'Vallée Blanche Experience', price: '€2,800/week', desc: 'Guided off-piste adventures including the famous 20km Vallée Blanche descent with technique coaching' },
      { name: 'Grands Montets Race Week', price: '€1,800/week', desc: 'Technical race training on the demanding slopes of Les Grands Montets' },
      { name: 'All-Mountain Progression', price: '€1,100/week', desc: 'Build confidence across varied terrain from groomed runs to gentle off-piste' }
    ],
    coaches: [
      {
        name: 'Antoine Lefèvre',
        credential: 'ENSA certified (École Nationale de Ski et d\'Alpinisme), UIAGM Mountain Guide',
        background: 'Chamonix local with 18 years of guiding and coaching, specialist in extreme terrain and avalanche safety',
        atpWta: false,
        bestRanking: null,
        rankingNote: null,
        languages: ['English', 'French', 'Italian'],
        instagram: null
      }
    ],
    photos: [
      'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800',
      'https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=800',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
      'https://images.unsplash.com/photo-1551524559-8af4e6624178?w=800'
    ],
    upcomingCamps: [
      { name: 'Grands Montets Opening', startDate: '2025-12-08', endDate: '2025-12-15', price: '€1,800', level: 'Advanced' },
      { name: 'Vallée Blanche Week', startDate: '2026-02-02', endDate: '2026-02-09', price: '€2,800', level: 'Expert' },
      { name: 'Spring Touring Camp', startDate: '2026-04-06', endDate: '2026-04-13', price: '€2,200', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'chalet', label: 'Mountain Chalet', pricePerWeek: 700, maxOccupancy: 4, bathType: 'ensuite', mealsIncluded: true },
        { type: 'hotel', label: 'Chamonix Centre Hotel', pricePerWeek: 950, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Central Chamonix location with free ski bus to all areas'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-12-08',
      spotsLeft: 16,
      responseTime: '48h',
      privateLessons: true,
      yearRound: false
    },
    juniorInfo: {
      minAge: 10,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Available during season',
      medicalStaff: true,
      safeguarding: 'French Ski Federation (FFS) child protection standards',
      airportPickup: true,
      mealPlan: 'Full board with mountain nutrition focus',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'French'],
      emergencyProtocol: 'PGHM mountain rescue, Chamonix hospital and Sallanches medical center'
    }
  },
  {
    id: 'val-disere-ski-academy',
    name: 'Val d\'Isère Ski Academy',
    country: 'France',
    countryFlag: '🇫🇷',
    city: 'Val d\'Isère',
    lat: 45.4481,
    lng: 6.9808,
    website: 'https://www.valdisere-ski-academy.fr',
    contact: '+33 4 79 06 1400',
    contactEmail: 'info@valdisere-ski-academy.fr',
    description: 'Elite ski academy in the Espace Killy resort, home to the legendary Face de Bellevarde World Cup downhill course. 300km of runs with exceptional snow record and varied terrain.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Alpine resort, no beach access' },
    priceRange: { from: 1000, to: 2500, unit: 'week', display: '€1,000 - €2,500/week' },
    socialMedia: { instagram: '@valdisere_academy', facebook: 'https://facebook.com/valdisereskiacademy', twitter: '@valdisere_ski' },
    climate: 'val-disere',
    facilities: 'Altitude: 1850-3456m, 300km pistes (Espace Killy), 900 snow cannons, Face de Bellevarde World Cup run, Olympic downhill course, terrain park, race gates, equipment rental, ski storage, video analysis room, gym, pool, spa',
    courtSurfaces: ['Alpine skiing', 'Snowboarding', 'Freestyle', 'Cross-country'],
    programs: [
      { name: 'Bellevarde Race Camp', price: '€2,500/week', desc: 'Train on the Olympic downhill course with professional race coaching and video analysis' },
      { name: 'Freestyle & Park Week', price: '€1,500/week', desc: 'Progress your park riding with jumps, rails, and halfpipe coaching' },
      { name: 'Family Ski Week', price: '€1,000/week', desc: 'Structured programs for the whole family with age-appropriate groups' }
    ],
    coaches: [
      {
        name: 'Julien Martin',
        credential: 'ESF (École du Ski Français) National Instructor, FFS Race Coach',
        background: 'Former French national team slalom specialist, 12 years coaching at Val d\'Isère',
        atpWta: false,
        bestRanking: null,
        rankingNote: null,
        languages: ['English', 'French'],
        instagram: null
      }
    ],
    photos: [
      'https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800',
      'https://images.unsplash.com/photo-1517483000871-1dbf64a6e1c6?w=800',
      'https://images.unsplash.com/photo-1565992441121-4367c2967103?w=800',
      'https://images.unsplash.com/photo-1548133464-29abc661eb5c?w=800'
    ],
    upcomingCamps: [
      { name: 'Season Opening Camp', startDate: '2025-12-01', endDate: '2025-12-08', price: '€1,500', level: 'All levels' },
      { name: 'New Year Race Intensive', startDate: '2026-01-05', endDate: '2026-01-12', price: '€2,500', level: 'Advanced' },
      { name: 'Easter Family Camp', startDate: '2026-04-06', endDate: '2026-04-13', price: '€1,000', level: 'All levels' }
    ],
    accommodation: {
      types: [
        { type: 'chalet', label: 'Ski Chalet', pricePerWeek: 650, maxOccupancy: 4, bathType: 'ensuite', mealsIncluded: true },
        { type: 'hotel', label: 'Resort Hotel', pricePerWeek: 900, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Slope-side accommodation, ski-in/ski-out from most properties'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-12-01',
      spotsLeft: 22,
      responseTime: '48h',
      privateLessons: true,
      yearRound: false
    },
    juniorInfo: {
      minAge: 6,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Available during season',
      medicalStaff: true,
      safeguarding: 'French Ski Federation (FFS) child protection standards',
      airportPickup: true,
      mealPlan: 'Full board with mountain nutrition focus',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'French'],
      emergencyProtocol: 'Mountain rescue and Bourg-Saint-Maurice hospital protocol'
    }
  },
  {
    id: 'cortina-ski-academy',
    name: 'Cortina d\'Ampezzo Ski Academy',
    country: 'Italy',
    countryFlag: '🇮🇹',
    city: 'Cortina d\'Ampezzo',
    lat: 46.5369,
    lng: 12.1356,
    website: 'https://www.cortina-ski-academy.it',
    contact: '+39 0436 862 171',
    contactEmail: 'info@cortina-ski-academy.it',
    description: 'Train at the Queen of the Dolomites, host of the 2026 Winter Olympics. Cortina offers 120km of pistes surrounded by spectacular UNESCO World Heritage Dolomite scenery.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Alpine resort, no beach access' },
    priceRange: { from: 900, to: 2200, unit: 'week', display: '€900 - €2,200/week' },
    socialMedia: { instagram: '@cortina_ski', facebook: 'https://facebook.com/cortinaski', twitter: '@cortina_ski' },
    climate: 'cortina',
    facilities: 'Altitude: 1224-2930m, 120km pistes, 95% snowmaking, Olympic downhill course, Dolomiti Superski access (1200km), race training area, equipment rental, ski storage, video analysis, fitness center, spa, indoor pool',
    courtSurfaces: ['Alpine skiing', 'Snowboarding', 'Cross-country', 'Biathlon'],
    programs: [
      { name: 'Olympic Venue Training', price: '€2,200/week', desc: 'Race training on 2026 Olympic competition slopes with elite-level coaching' },
      { name: 'Dolomiti Explorer', price: '€1,500/week', desc: 'Guided touring across the Dolomiti Superski region with technique improvement' },
      { name: 'Beginner Ski Week', price: '€900/week', desc: 'Gentle introduction to skiing on wide, sunny Dolomite slopes' }
    ],
    coaches: [
      {
        name: 'Luca Rossetti',
        credential: 'FISI National Instructor, former Italian Ski Team coach',
        background: 'Coached Italian World Cup athletes for 10 years, specialist in speed disciplines',
        atpWta: false,
        bestRanking: null,
        rankingNote: null,
        languages: ['English', 'Italian', 'German'],
        instagram: null
      }
    ],
    photos: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800',
      'https://images.unsplash.com/photo-1486673748761-a8d18475c757?w=800'
    ],
    upcomingCamps: [
      { name: 'Olympic Course Preview', startDate: '2025-12-15', endDate: '2025-12-22', price: '€2,200', level: 'Advanced' },
      { name: 'Dolomiti Ski Safari', startDate: '2026-02-02', endDate: '2026-02-09', price: '€1,500', level: 'Intermediate' },
      { name: 'Spring Sunshine Camp', startDate: '2026-03-16', endDate: '2026-03-23', price: '€1,200', level: 'All levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Dolomite Hotel', pricePerWeek: 800, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Residence Apartment', pricePerWeek: 550, maxOccupancy: 4, bathType: 'ensuite', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Central Cortina location with complimentary ski bus service'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-12-01',
      spotsLeft: 20,
      responseTime: '48h',
      privateLessons: true,
      yearRound: false
    },
    juniorInfo: {
      minAge: 6,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Available during season',
      medicalStaff: true,
      safeguarding: 'FISI (Italian Winter Sports Federation) child protection standards',
      airportPickup: true,
      mealPlan: 'Full board with Italian mountain cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Italian', 'German'],
      emergencyProtocol: 'Mountain rescue and Cortina hospital emergency protocol'
    }
  },
  {
    id: 'val-gardena-ski-school',
    name: 'Val Gardena Elite Ski School',
    country: 'Italy',
    countryFlag: '🇮🇹',
    city: 'Val Gardena',
    lat: 46.5582,
    lng: 11.6756,
    website: 'https://www.valgardena-elite-ski.it',
    contact: '+39 0471 795 122',
    contactEmail: 'info@valgardena-elite-ski.it',
    description: 'Elite ski training in the Dolomites\' most famous ski valley. Home to the Saslong World Cup downhill and connected to the Sella Ronda circuit with 500km of linked pistes.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Alpine resort, no beach access' },
    priceRange: { from: 800, to: 2000, unit: 'week', display: '€800 - €2,000/week' },
    socialMedia: { instagram: '@valgardena_ski', facebook: 'https://facebook.com/valgardenaskischool', twitter: '@valgardena_ski' },
    climate: 'val-gardena',
    facilities: 'Altitude: 1236-2518m, 175km local pistes plus Sella Ronda circuit, Saslong World Cup course, 97% snowmaking, terrain park, race training area, equipment rental, ski storage, video analysis, gym, wellness area',
    courtSurfaces: ['Alpine skiing', 'Snowboarding', 'Cross-country'],
    programs: [
      { name: 'Saslong Downhill Experience', price: '€2,000/week', desc: 'Race on the legendary Saslong World Cup downhill with professional coaching' },
      { name: 'Sella Ronda Tour Week', price: '€1,200/week', desc: 'Guided multi-day tour of the Sella Ronda circuit with technique coaching' },
      { name: 'Junior Ski Camp', price: '€800/week', desc: 'Fun and progressive ski training for children and teenagers' }
    ],
    coaches: [
      {
        name: 'Andreas Comploi',
        credential: 'FISI National Coach, former Ladin ski racing champion',
        background: 'Val Gardena local and former national-level racer, fluent in Ladin, Italian, German, and English',
        atpWta: false,
        bestRanking: null,
        rankingNote: null,
        languages: ['English', 'Italian', 'German'],
        instagram: null
      }
    ],
    photos: [
      'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=800',
      'https://images.unsplash.com/photo-1551524559-8af4e6624178?w=800',
      'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=800'
    ],
    upcomingCamps: [
      { name: 'Saslong Race Week', startDate: '2025-12-15', endDate: '2025-12-22', price: '€2,000', level: 'Advanced' },
      { name: 'Carnival Ski Week', startDate: '2026-02-16', endDate: '2026-02-23', price: '€1,200', level: 'All levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Dolomite Sport Hotel', pricePerWeek: 700, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'chalet', label: 'Mountain Chalet', pricePerWeek: 600, maxOccupancy: 4, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Slope-side accommodation in Selva di Val Gardena with ski-in/ski-out access'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-12-08',
      spotsLeft: 18,
      responseTime: '48h',
      privateLessons: true,
      yearRound: false
    },
    juniorInfo: {
      minAge: 6,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Available during season',
      medicalStaff: true,
      safeguarding: 'FISI child protection standards',
      airportPickup: true,
      mealPlan: 'Full board with South Tyrolean mountain cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Italian', 'German'],
      emergencyProtocol: 'Mountain rescue and Bolzano hospital emergency protocol'
    }
  },
  {
    id: 'lillehammer-nordic-ski',
    name: 'Lillehammer Nordic & Alpine Ski Centre',
    country: 'Norway',
    countryFlag: '🇳🇴',
    city: 'Lillehammer',
    lat: 61.1153,
    lng: 10.4662,
    website: 'https://www.lillehammer-ski-centre.no',
    contact: '+47 61 26 9500',
    contactEmail: 'info@lillehammer-ski-centre.no',
    description: 'Train at the 1994 Winter Olympic venue, Norway\'s premier winter sports destination. Combines alpine skiing at Hafjell and Kvitfjell with world-class cross-country and biathlon facilities.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Alpine resort, no beach access' },
    priceRange: { from: 800, to: 2000, unit: 'week', display: 'NOK 9,000 - NOK 22,000/week' },
    socialMedia: { instagram: '@lillehammer_ski', facebook: 'https://facebook.com/lillehammerskicentre', twitter: '@lillehammer_ski' },
    climate: 'lillehammer',
    facilities: 'Altitude: 180-1060m (Kvitfjell), Olympic alpine and cross-country venues, biathlon range, 2 alpine resorts (Hafjell & Kvitfjell), 300km cross-country trails, terrain park, race gates, equipment rental, ski storage, waxing room, video analysis, gym, swimming pool',
    courtSurfaces: ['Alpine skiing', 'Cross-country', 'Biathlon', 'Ski jumping'],
    programs: [
      { name: 'Olympic Venue Experience', price: 'NOK 22,000/week', desc: 'Train on 1994 Olympic alpine and cross-country courses with Norwegian national coaches' },
      { name: 'Nordic Combined Camp', price: 'NOK 16,000/week', desc: 'Cross-country skiing and biathlon training at Olympic-standard facilities' },
      { name: 'Family Alpine Week', price: 'NOK 9,000/week', desc: 'Relaxed family skiing at Hafjell with gentle slopes and fun activities' }
    ],
    coaches: [
      {
        name: 'Erik Johansen',
        credential: 'Norwegian Ski Federation (NSF) Level 4 Coach',
        background: 'Former Norwegian national cross-country team member, Olympic training centre coach since 2010',
        atpWta: false,
        bestRanking: null,
        rankingNote: null,
        languages: ['English', 'Norwegian', 'Swedish'],
        instagram: null
      }
    ],
    photos: [
      'https://images.unsplash.com/photo-1551524559-8af4e6624178?w=800',
      'https://images.unsplash.com/photo-1517483000871-1dbf64a6e1c6?w=800',
      'https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800'
    ],
    upcomingCamps: [
      { name: 'Nordic Opening Camp', startDate: '2025-11-24', endDate: '2025-12-01', price: 'NOK 16,000', level: 'All levels' },
      { name: 'Christmas Alpine Camp', startDate: '2025-12-22', endDate: '2025-12-29', price: 'NOK 12,000', level: 'All levels' },
      { name: 'February Race Week', startDate: '2026-02-09', endDate: '2026-02-16', price: 'NOK 22,000', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'cabin', label: 'Norwegian Cabin (Hytte)', pricePerWeek: 600, maxOccupancy: 6, bathType: 'shared', mealsIncluded: false },
        { type: 'hotel', label: 'Olympic Hotel', pricePerWeek: 900, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Accommodation near Hafjell resort with shuttle to all venues'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-11-24',
      spotsLeft: 30,
      responseTime: '48h',
      privateLessons: true,
      yearRound: false
    },
    juniorInfo: {
      minAge: 6,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Available during season',
      medicalStaff: true,
      safeguarding: 'Norwegian Ski Federation child protection standards',
      airportPickup: true,
      mealPlan: 'Full board with Norwegian mountain nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Norwegian'],
      emergencyProtocol: 'Mountain rescue and Lillehammer hospital emergency protocol'
    }
  },
  {
    id: 'are-ski-academy',
    name: 'Åre Ski Academy',
    country: 'Sweden',
    countryFlag: '🇸🇪',
    city: 'Åre',
    lat: 63.3989,
    lng: 13.0796,
    website: 'https://www.are-ski-academy.se',
    contact: '+46 647 145 00',
    contactEmail: 'info@are-ski-academy.se',
    description: 'Sweden\'s premier alpine resort and host of multiple FIS World Championships. Åre offers diverse terrain from gentle beginner slopes to challenging World Cup runs, with a vibrant après-ski scene.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Alpine resort, no beach access' },
    priceRange: { from: 800, to: 1800, unit: 'week', display: 'SEK 9,000 - SEK 20,000/week' },
    socialMedia: { instagram: '@are_ski_academy', facebook: 'https://facebook.com/areskiacademy', twitter: '@are_ski' },
    climate: 'are',
    facilities: 'Altitude: 380-1274m, 91 pistes, terrain park, superpipe, World Championship race course, 100% snowmaking on key runs, equipment rental, ski storage, video analysis room, gym, spa, heated outdoor pool',
    courtSurfaces: ['Alpine skiing', 'Snowboarding', 'Cross-country', 'Freestyle'],
    programs: [
      { name: 'World Cup Training Camp', price: 'SEK 20,000/week', desc: 'Race training on World Championship slopes with Swedish national-level coaches' },
      { name: 'Freestyle & Park Camp', price: 'SEK 14,000/week', desc: 'Progress in the terrain park with halfpipe, jumps, and rail coaching' },
      { name: 'Beginner Ski Week', price: 'SEK 9,000/week', desc: 'Learn to ski on gentle, wide slopes with patient, certified instructors' }
    ],
    coaches: [
      {
        name: 'Anna Lindström',
        credential: 'Swedish Ski Association (SSF) National Instructor',
        background: 'Former Swedish alpine team member and World Championship competitor, now head coach at Åre',
        atpWta: false,
        bestRanking: null,
        rankingNote: null,
        languages: ['English', 'Swedish', 'Norwegian'],
        instagram: null
      }
    ],
    photos: [
      'https://images.unsplash.com/photo-1565992441121-4367c2967103?w=800',
      'https://images.unsplash.com/photo-1520208422220-d12a3c588e6c?w=800',
      'https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800'
    ],
    upcomingCamps: [
      { name: 'Season Opener', startDate: '2025-12-01', endDate: '2025-12-08', price: 'SEK 14,000', level: 'All levels' },
      { name: 'Christmas Freestyle Week', startDate: '2025-12-22', endDate: '2025-12-29', price: 'SEK 14,000', level: 'Intermediate' },
      { name: 'February Race Camp', startDate: '2026-02-16', endDate: '2026-02-23', price: 'SEK 20,000', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'cabin', label: 'Swedish Mountain Cabin', pricePerWeek: 500, maxOccupancy: 4, bathType: 'shared', mealsIncluded: false },
        { type: 'hotel', label: 'Ski Lodge Hotel', pricePerWeek: 800, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Slope-side accommodation in Åre village with ski-in/ski-out options'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-12-01',
      spotsLeft: 24,
      responseTime: '48h',
      privateLessons: true,
      yearRound: false
    },
    juniorInfo: {
      minAge: 6,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Available during season',
      medicalStaff: true,
      safeguarding: 'Swedish Ski Association child protection standards',
      airportPickup: true,
      mealPlan: 'Full board with Scandinavian mountain nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Swedish'],
      emergencyProtocol: 'Mountain rescue and Östersund hospital emergency protocol'
    }
  },
  {
    id: 'levi-ski-camp',
    name: 'Levi Ski Training Camp',
    country: 'Finland',
    countryFlag: '🇫🇮',
    city: 'Levi',
    lat: 67.7994,
    lng: 24.8127,
    website: 'https://www.levi-ski-camp.fi',
    contact: '+358 16 639 3300',
    contactEmail: 'info@levi-ski-camp.fi',
    description: 'Finland\'s largest ski resort in Lapland, host of FIS World Cup slalom events. Ski under the Northern Lights with guaranteed snow from October to May and a magical Arctic atmosphere.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Arctic resort, no beach access' },
    priceRange: { from: 700, to: 1600, unit: 'week', display: '€700 - €1,600/week' },
    socialMedia: { instagram: '@levi_ski_camp', facebook: 'https://facebook.com/leviskicamp', twitter: '@levi_ski' },
    climate: 'levi',
    facilities: 'Altitude: 206-531m, 43 slopes, World Cup slalom course, 100% snowmaking, floodlit slopes for polar night skiing, terrain park, race gates, equipment rental, ski storage, waxing room, video analysis, gym, spa, ice swimming pool',
    courtSurfaces: ['Alpine skiing', 'Snowboarding', 'Cross-country', 'Snowshoeing'],
    programs: [
      { name: 'Arctic Race Training', price: '€1,600/week', desc: 'Slalom training on the World Cup course under floodlights with Finnish national coaches' },
      { name: 'Northern Lights Ski Week', price: '€1,100/week', desc: 'All-mountain skiing with evening aurora borealis excursions and husky safaris' },
      { name: 'Junior Lapland Camp', price: '€700/week', desc: 'Fun skiing combined with Finnish Lapland adventures for young skiers' }
    ],
    coaches: [
      {
        name: 'Mika Korhonen',
        credential: 'Finnish Ski Association (SSL) National Coach',
        background: 'Former Finnish slalom specialist, 15 years of coaching including World Cup circuit experience',
        atpWta: false,
        bestRanking: null,
        rankingNote: null,
        languages: ['English', 'Finnish', 'Swedish'],
        instagram: null
      }
    ],
    photos: [
      'https://images.unsplash.com/photo-1517483000871-1dbf64a6e1c6?w=800',
      'https://images.unsplash.com/photo-1548133464-29abc661eb5c?w=800',
      'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800'
    ],
    upcomingCamps: [
      { name: 'Early Season Arctic Camp', startDate: '2025-11-03', endDate: '2025-11-10', price: '€1,200', level: 'All levels' },
      { name: 'Northern Lights Week', startDate: '2026-01-19', endDate: '2026-01-26', price: '€1,100', level: 'All levels' },
      { name: 'Spring Sun Ski Camp', startDate: '2026-03-23', endDate: '2026-03-30', price: '€900', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'cabin', label: 'Lapland Log Cabin', pricePerWeek: 450, maxOccupancy: 4, bathType: 'ensuite', mealsIncluded: false },
        { type: 'hotel', label: 'Levi Spa Hotel', pricePerWeek: 750, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Slope-side cabins and hotel with direct access to Levi front slopes'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-11-03',
      spotsLeft: 28,
      responseTime: '48h',
      privateLessons: true,
      yearRound: false
    },
    juniorInfo: {
      minAge: 6,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Available during season',
      medicalStaff: true,
      safeguarding: 'Finnish Ski Association child protection standards',
      airportPickup: true,
      mealPlan: 'Full board with Finnish Lapland cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Finnish'],
      emergencyProtocol: 'Mountain rescue and Kittilä health center emergency protocol'
    }
  },
  {
    id: 'grandvalira-ski-academy',
    name: 'Grandvalira Ski Academy',
    country: 'Andorra',
    countryFlag: '🇦🇩',
    city: 'Grandvalira',
    lat: 42.5530,
    lng: 1.7339,
    website: 'https://www.grandvalira-ski-academy.ad',
    contact: '+376 891 800',
    contactEmail: 'info@grandvalira-ski-academy.ad',
    description: 'The largest ski resort in the Pyrenees with 210km of runs across 6 sectors. Grandvalira offers excellent value, reliable sunshine, and a long season from November to April.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Alpine resort, no beach access' },
    priceRange: { from: 600, to: 1400, unit: 'week', display: '€600 - €1,400/week' },
    socialMedia: { instagram: '@grandvalira_ski', facebook: 'https://facebook.com/grandvaliraskiacademy', twitter: '@grandvalira_ski' },
    climate: 'grandvalira',
    facilities: 'Altitude: 1710-2640m, 210km pistes, terrain park with multiple lines, race training area, snowmaking on key runs, equipment rental, ski storage, video analysis room, gym, spa and wellness center, duty-free shopping',
    courtSurfaces: ['Alpine skiing', 'Snowboarding', 'Freestyle', 'Cross-country'],
    programs: [
      { name: 'Performance Race Camp', price: '€1,400/week', desc: 'Intensive race training with slalom and giant slalom coaching on dedicated courses' },
      { name: 'Freestyle Progression', price: '€1,000/week', desc: 'Terrain park and freestyle development with certified freestyle coaches' },
      { name: 'Learn to Ski Package', price: '€600/week', desc: 'Complete beginner package including lessons, equipment, and lift pass' }
    ],
    coaches: [
      {
        name: 'Carlos Ruiz',
        credential: 'Andorran Ski Federation (FAE) National Instructor',
        background: 'Former Andorran national team member and FIS competitor, coaching in Grandvalira for 10 years',
        atpWta: false,
        bestRanking: null,
        rankingNote: null,
        languages: ['English', 'Spanish', 'French', 'Catalan'],
        instagram: null
      }
    ],
    photos: [
      'https://images.unsplash.com/photo-1565992441121-4367c2967103?w=800',
      'https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800',
      'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=800'
    ],
    upcomingCamps: [
      { name: 'Season Opening Camp', startDate: '2025-12-01', endDate: '2025-12-08', price: '€1,000', level: 'All levels' },
      { name: 'Christmas Family Camp', startDate: '2025-12-22', endDate: '2025-12-29', price: '€800', level: 'All levels' },
      { name: 'February Race Intensive', startDate: '2026-02-09', endDate: '2026-02-16', price: '€1,400', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Mountain Hotel', pricePerWeek: 500, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Ski Apartment', pricePerWeek: 350, maxOccupancy: 4, bathType: 'shared', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Accommodation in Soldeu and El Tarter villages with free ski bus'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-12-01',
      spotsLeft: 30,
      responseTime: '48h',
      privateLessons: true,
      yearRound: false
    },
    juniorInfo: {
      minAge: 5,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Available during season',
      medicalStaff: true,
      safeguarding: 'Andorran Ski Federation child protection standards',
      airportPickup: true,
      mealPlan: 'Full board with mountain nutrition focus',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Spanish', 'French', 'Catalan'],
      emergencyProtocol: 'Mountain rescue and Andorran hospital emergency protocol'
    }
  },
  {
    id: 'kranjska-gora-ski-centre',
    name: 'Kranjska Gora Ski Training Centre',
    country: 'Slovenia',
    countryFlag: '🇸🇮',
    city: 'Kranjska Gora',
    lat: 46.4847,
    lng: 13.7856,
    website: 'https://www.kranjska-gora-ski.si',
    contact: '+386 4 588 1402',
    contactEmail: 'info@kranjska-gora-ski.si',
    description: 'Home of the Vitranc World Cup slalom and giant slalom events in the Julian Alps. A compact but world-class resort offering excellent race training and the nearby Planica ski jumping venue.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Alpine resort, no beach access' },
    priceRange: { from: 600, to: 1400, unit: 'week', display: '€600 - €1,400/week' },
    socialMedia: { instagram: '@kranjska_ski', facebook: 'https://facebook.com/kranjskagoraskicentre', twitter: '@kranjska_ski' },
    climate: 'kranjska-gora',
    facilities: 'Altitude: 810-1295m, 20km pistes, Podkoren World Cup slalom course, 100% snowmaking, Planica Nordic Centre nearby, race gates, electronic timing, equipment rental, ski storage, video analysis room, gym, sauna',
    courtSurfaces: ['Alpine skiing', 'Snowboarding', 'Cross-country', 'Ski jumping'],
    programs: [
      { name: 'Vitranc Race Training', price: '€1,400/week', desc: 'Slalom and giant slalom training on the World Cup Podkoren course with electronic timing' },
      { name: 'Julian Alps Ski Week', price: '€900/week', desc: 'All-mountain skiing across the Julian Alps region with technique coaching' },
      { name: 'Junior Ski School', price: '€600/week', desc: 'Progressive ski lessons for children with fun races and activities' }
    ],
    coaches: [
      {
        name: 'Boštjan Kovač',
        credential: 'Slovenian Ski Association (SZS) National Coach',
        background: 'Former Slovenian national team slalom racer, experienced World Cup course setter and coach',
        atpWta: false,
        bestRanking: null,
        rankingNote: null,
        languages: ['English', 'Slovenian', 'Italian', 'German'],
        instagram: null
      }
    ],
    photos: [
      'https://images.unsplash.com/photo-1486673748761-a8d18475c757?w=800',
      'https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=800',
      'https://images.unsplash.com/photo-1520208422220-d12a3c588e6c?w=800'
    ],
    upcomingCamps: [
      { name: 'Vitranc Opening Camp', startDate: '2025-12-08', endDate: '2025-12-15', price: '€1,200', level: 'Intermediate' },
      { name: 'Slalom Intensive Week', startDate: '2026-01-19', endDate: '2026-01-26', price: '€1,400', level: 'Advanced' },
      { name: 'Spring Ski Camp', startDate: '2026-03-09', endDate: '2026-03-16', price: '€800', level: 'All levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Alpine Hotel', pricePerWeek: 450, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'guesthouse', label: 'Mountain Guesthouse', pricePerWeek: 300, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Walking distance to Podkoren slopes and village center'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-12-08',
      spotsLeft: 20,
      responseTime: '48h',
      privateLessons: true,
      yearRound: false
    },
    juniorInfo: {
      minAge: 5,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Available during season',
      medicalStaff: true,
      safeguarding: 'Slovenian Ski Association child protection standards',
      airportPickup: true,
      mealPlan: 'Full board with Slovenian mountain cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Slovenian', 'German', 'Italian'],
      emergencyProtocol: 'Mountain rescue and Jesenice hospital emergency protocol'
    }
  },
  {
    id: 'davos-ski-performance',
    name: 'Davos Ski Performance Academy',
    country: 'Switzerland',
    countryFlag: '🇨🇭',
    city: 'Davos',
    lat: 46.8027,
    lng: 9.8360,
    website: 'https://www.davos-ski-performance.ch',
    contact: '+41 81 415 2100',
    contactEmail: 'info@davos-ski-performance.ch',
    description: 'High-altitude training centre in the Parsenn ski area, one of Switzerland\'s oldest and most storied resorts. Davos combines excellent alpine training with world-class cross-country facilities on the famous Flüela and Dischma valley trails.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Alpine resort, no beach access' },
    priceRange: { from: 1100, to: 2600, unit: 'week', display: 'CHF 1,100 - CHF 2,600/week' },
    socialMedia: { instagram: '@davos_ski_perf', facebook: 'https://facebook.com/davosskiperformance', twitter: '@davos_ski' },
    climate: 'davos',
    facilities: 'Altitude: 1560-2844m, 300km pistes across 6 ski areas, Parsenn and Jakobshorn terrain parks, 75km cross-country trails, race training slope with electronic timing, equipment rental, ski storage, video analysis room, gym, indoor pool, spa',
    courtSurfaces: ['Alpine skiing', 'Snowboarding', 'Cross-country', 'Freestyle'],
    programs: [
      { name: 'Parsenn Race Academy', price: 'CHF 2,600/week', desc: 'Intensive slalom and GS race training on dedicated Parsenn training slopes with video analysis' },
      { name: 'Cross-Country Excellence', price: 'CHF 1,800/week', desc: 'Classic and skate technique training on Olympic-grade Davos Nordic trails' },
      { name: 'All-Mountain Discovery', price: 'CHF 1,100/week', desc: 'Explore all six Davos ski areas with guided coaching and technique improvement' }
    ],
    coaches: [
      {
        name: 'Thomas Brunner',
        credential: 'Swiss Snowsports Professional (SSBS), J+S Expert',
        background: 'Former Swiss B-team racer and 12-year veteran coach at Davos, specialist in technical disciplines',
        atpWta: false,
        bestRanking: null,
        rankingNote: null,
        languages: ['English', 'German', 'French'],
        instagram: null
      }
    ],
    photos: [
      'https://images.unsplash.com/photo-1486673748761-a8d18475c757?w=800',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      'https://images.unsplash.com/photo-1542224566-6e85f2e6772f?w=800'
    ],
    upcomingCamps: [
      { name: 'Parsenn Opening Week', startDate: '2025-11-24', endDate: '2025-12-01', price: 'CHF 1,800', level: 'All levels' },
      { name: 'Holiday Race Camp', startDate: '2025-12-22', endDate: '2025-12-29', price: 'CHF 2,600', level: 'Advanced' },
      { name: 'Nordic & Alpine Combo', startDate: '2026-02-02', endDate: '2026-02-09', price: 'CHF 2,200', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Davos Sport Hotel', pricePerWeek: 900, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Mountain Apartment', pricePerWeek: 650, maxOccupancy: 4, bathType: 'ensuite', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Central Davos Platz location with Parsenn funicular 5-minute walk'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-11-24',
      spotsLeft: 22,
      responseTime: '48h',
      privateLessons: true,
      yearRound: false
    },
    juniorInfo: {
      minAge: 7,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Available during season',
      medicalStaff: true,
      safeguarding: 'Swiss-Ski child protection standards',
      airportPickup: true,
      mealPlan: 'Full board with mountain nutrition focus',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'German'],
      emergencyProtocol: 'Mountain rescue and Davos hospital emergency protocol'
    }
  },
  {
    id: 'bansko-ski-academy',
    name: 'Bansko Ski Academy',
    country: 'Bulgaria',
    countryFlag: '🇧🇬',
    city: 'Bansko',
    lat: 41.8381,
    lng: 23.4886,
    website: 'https://www.bansko-ski-academy.bg',
    contact: '+359 749 88 123',
    contactEmail: 'info@bansko-ski-academy.bg',
    description: 'Located at Bulgaria\'s largest and most modern ski resort, Bansko Ski Academy offers world-class alpine training on FIS World Cup-certified slopes in the Pirin Mountains. Excellent value with top-tier facilities.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Alpine resort, no beach access' },
    priceRange: { from: 400, to: 750, unit: 'week', display: '€400 - €750/week' },
    socialMedia: { instagram: '@bansko_ski_academy', facebook: 'https://facebook.com/banskoskiacademy', twitter: '@bansko_ski' },
    climate: 'bansko',
    facilities: 'Altitude: 990-2600m, 75km of pistes, 80% snowmaking coverage, FIS-homologated race courses, gondola lift, terrain park, full equipment rental, heated ski storage, video analysis room, fitness center',
    courtSurfaces: ['Alpine skiing', 'Snowboarding', 'Cross-country', 'Freestyle'],
    programs: [
      { name: 'Alpine Race Training', price: '€600/week', desc: 'Intensive slalom and giant slalom training on World Cup slopes with electronic timing' },
      { name: 'Junior Development Camp', price: '€450/week', desc: 'Progressive ski training for young athletes aged 7-16 with Bulgarian national-level coaches' },
      { name: 'Freeride & Powder Camp', price: '€500/week', desc: 'Off-piste exploration in the Pirin Mountains with avalanche safety training' }
    ],
    coaches: [
      {
        name: 'Dimitar Petrov',
        credential: 'Bulgarian National Ski Instructor, FIS coach',
        background: 'Former Bulgarian national team skier with 12 years coaching at Bansko World Cup events',
        atpWta: false,
        bestRanking: null,
        rankingNote: null,
        languages: ['English', 'Bulgarian'],
        instagram: null
      },
      {
        name: 'Elena Ivanova',
        credential: 'ISIA certified, Bulgarian Ski Association Level 3',
        background: 'Specialized in junior development, former Europa Cup competitor and youth coach for 10 years',
        atpWta: false,
        bestRanking: null,
        rankingNote: null,
        languages: ['English', 'Bulgarian', 'Russian'],
        instagram: null
      }
    ],
    photos: [
      'https://images.unsplash.com/photo-1520208422220-d12a3c588e6c?w=800',
      'https://images.unsplash.com/photo-1551524559-8af4e6624178?w=800',
      'https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800',
      'https://images.unsplash.com/photo-1486625537100-1af6fea55f99?w=800'
    ],
    upcomingCamps: [
      { name: 'Winter Race Camp', startDate: '2025-12-15', endDate: '2025-12-22', price: '€600', level: 'Advanced' },
      { name: 'Christmas Junior Camp', startDate: '2025-12-22', endDate: '2025-12-29', price: '€450', level: 'All levels' },
      { name: 'February Intensive', startDate: '2026-02-09', endDate: '2026-02-16', price: '€550', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Bansko Sport Hotel', pricePerWeek: 300, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Mountain Apartment', pricePerWeek: 200, maxOccupancy: 4, bathType: 'ensuite', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Gondola lift station in town center, 10-minute ride to ski area'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-12-01',
      spotsLeft: 30,
      responseTime: '24h',
      privateLessons: true,
      yearRound: false
    },
    juniorInfo: {
      minAge: 6,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Available during season',
      medicalStaff: true,
      safeguarding: 'Bulgarian Ski Federation child protection standards',
      airportPickup: true,
      mealPlan: 'Full board with Bulgarian cuisine and sports nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Bulgarian', 'Russian'],
      emergencyProtocol: 'Mountain rescue team on call, Bansko hospital 5 min away'
    }
  },
  {
    id: 'borovets-ski-academy',
    name: 'Borovets Alpine Academy',
    country: 'Bulgaria',
    countryFlag: '🇧🇬',
    city: 'Borovets',
    lat: 42.2667,
    lng: 23.6000,
    website: 'https://www.borovets-ski-academy.bg',
    contact: '+359 750 32 456',
    contactEmail: 'info@borovets-ski-academy.bg',
    description: 'Bulgaria\'s oldest and most historic ski resort in the Rila Mountains, offering excellent race training facilities and an ideal environment for junior development with affordable pricing.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Alpine resort, no beach access' },
    priceRange: { from: 380, to: 700, unit: 'week', display: '€380 - €700/week' },
    socialMedia: { instagram: '@borovets_academy', facebook: 'https://facebook.com/borovetsskiacademy', twitter: '@borovets_ski' },
    climate: 'borovets',
    facilities: 'Altitude: 1350-2560m, 58km of pistes, 70% snowmaking coverage, race training course, terrain park, equipment rental, ski storage, video analysis, fitness room, sauna',
    courtSurfaces: ['Alpine skiing', 'Snowboarding', 'Cross-country'],
    programs: [
      { name: 'Race Training Week', price: '€550/week', desc: 'Slalom and GS training on dedicated race runs with timing equipment' },
      { name: 'Junior Ski Camp', price: '€400/week', desc: 'Fun and progressive ski camps for children aged 6-14 with qualified instructors' },
      { name: 'Adult Technique Course', price: '€380/week', desc: 'Focused technique improvement for intermediate adult skiers' }
    ],
    coaches: [
      {
        name: 'Georgi Todorov',
        credential: 'Bulgarian National Ski Instructor, ISIA certified',
        background: 'Former Borovets ski school director with 20 years of coaching experience in alpine skiing',
        atpWta: false,
        bestRanking: null,
        rankingNote: null,
        languages: ['English', 'Bulgarian'],
        instagram: null
      },
      {
        name: 'Maria Dimitrova',
        credential: 'Bulgarian Ski Association Level 3, FIS coach',
        background: 'Youth development specialist and former Bulgarian national junior team coach',
        atpWta: false,
        bestRanking: null,
        rankingNote: null,
        languages: ['English', 'Bulgarian', 'German'],
        instagram: null
      }
    ],
    photos: [
      'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800',
      'https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=800'
    ],
    upcomingCamps: [
      { name: 'Early Season Camp', startDate: '2025-12-08', endDate: '2025-12-15', price: '€500', level: 'All levels' },
      { name: 'Holiday Junior Camp', startDate: '2025-12-22', endDate: '2025-12-29', price: '€400', level: 'Beginner to Intermediate' },
      { name: 'January Race Week', startDate: '2026-01-12', endDate: '2026-01-19', price: '€550', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Rila Mountain Hotel', pricePerWeek: 280, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'chalet', label: 'Forest Chalet', pricePerWeek: 350, maxOccupancy: 4, bathType: 'ensuite', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Located in the heart of Borovets resort with ski-in/ski-out access'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-12-01',
      spotsLeft: 25,
      responseTime: '24h',
      privateLessons: true,
      yearRound: false
    },
    juniorInfo: {
      minAge: 6,
      maxAge: 16,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Available during season',
      medicalStaff: true,
      safeguarding: 'Bulgarian Ski Federation child protection standards',
      airportPickup: true,
      mealPlan: 'Full board with Bulgarian cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Bulgarian'],
      emergencyProtocol: 'Mountain rescue on call, Samokov hospital 15 min away'
    }
  },
  {
    id: 'poiana-brasov-ski-academy',
    name: 'Poiana Brașov Ski Academy',
    country: 'Romania',
    countryFlag: '🇷🇴',
    city: 'Poiana Brașov',
    lat: 45.5936,
    lng: 25.5553,
    website: 'https://www.poiana-ski-academy.ro',
    contact: '+40 268 407 123',
    contactEmail: 'info@poiana-ski-academy.ro',
    description: 'Romania\'s premier ski training academy set in the stunning Carpathian Mountains above Brașov. Offers excellent alpine training on well-groomed slopes surrounded by pristine forests at very affordable rates.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Alpine resort, no beach access' },
    priceRange: { from: 400, to: 750, unit: 'week', display: '€400 - €750/week' },
    socialMedia: { instagram: '@poiana_ski_academy', facebook: 'https://facebook.com/poianaskiacademy', twitter: '@poiana_ski' },
    climate: 'poiana-brasov',
    facilities: 'Altitude: 1020-1800m, 24km of pistes, 80% snowmaking coverage, race training gates, terrain park, equipment rental, ski storage, video analysis room, gym, spa',
    courtSurfaces: ['Alpine skiing', 'Snowboarding', 'Cross-country', 'Freestyle'],
    programs: [
      { name: 'Alpine Training Week', price: '€600/week', desc: 'Comprehensive alpine training with video analysis on Carpathian slopes' },
      { name: 'Junior Ski Camp', price: '€420/week', desc: 'Fun-focused progressive training for juniors aged 6-15 in a safe mountain environment' },
      { name: 'Weekend Intensive', price: '€250/weekend', desc: 'Concentrated two-day technique improvement for adult skiers' }
    ],
    coaches: [
      {
        name: 'Andrei Popescu',
        credential: 'Romanian National Ski Instructor, FIS coach',
        background: 'Former Romanian national team member and FIS technical delegate with 15 years coaching experience',
        atpWta: false,
        bestRanking: null,
        rankingNote: null,
        languages: ['English', 'Romanian', 'French'],
        instagram: null
      },
      {
        name: 'Ioana Marinescu',
        credential: 'ISIA certified, Romanian Ski Federation Level 3',
        background: 'Youth development expert and former competitive skier, specialized in junior race training',
        atpWta: false,
        bestRanking: null,
        rankingNote: null,
        languages: ['English', 'Romanian'],
        instagram: null
      }
    ],
    photos: [
      'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800',
      'https://images.unsplash.com/photo-1520208422220-d12a3c588e6c?w=800',
      'https://images.unsplash.com/photo-1517483000871-1dbf64a6e1c6?w=800',
      'https://images.unsplash.com/photo-1486625537100-1af6fea55f99?w=800'
    ],
    upcomingCamps: [
      { name: 'Winter Opening Camp', startDate: '2025-12-15', endDate: '2025-12-22', price: '€550', level: 'All levels' },
      { name: 'Christmas Junior Camp', startDate: '2025-12-22', endDate: '2025-12-29', price: '€420', level: 'All levels' },
      { name: 'February Race Camp', startDate: '2026-02-02', endDate: '2026-02-09', price: '€600', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Carpathian Sport Hotel', pricePerWeek: 320, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'chalet', label: 'Mountain Chalet', pricePerWeek: 250, maxOccupancy: 4, bathType: 'shared', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Located in Poiana Brașov resort with shuttle to all lifts'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-12-01',
      spotsLeft: 20,
      responseTime: '24h',
      privateLessons: true,
      yearRound: false
    },
    juniorInfo: {
      minAge: 6,
      maxAge: 17,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Available during season',
      medicalStaff: true,
      safeguarding: 'Romanian Ski Federation child protection standards',
      airportPickup: true,
      mealPlan: 'Full board with Romanian cuisine and sports nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Romanian', 'French'],
      emergencyProtocol: 'Mountain rescue on call, Brașov County Hospital 20 min away'
    }
  },
  {
    id: 'jasna-ski-academy',
    name: 'Jasná Low Tatras Ski Academy',
    country: 'Slovakia',
    countryFlag: '🇸🇰',
    city: 'Jasná',
    lat: 48.9500,
    lng: 19.5833,
    website: 'https://www.jasna-ski-academy.sk',
    contact: '+421 44 559 1234',
    contactEmail: 'info@jasna-ski-academy.sk',
    description: 'Central Europe\'s biggest ski resort in the Low Tatras, Jasná offers extensive terrain and modern infrastructure. Known for excellent snow conditions, varied terrain, and hosting FIS World Cup events.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Alpine resort, no beach access' },
    priceRange: { from: 450, to: 800, unit: 'week', display: '€450 - €800/week' },
    socialMedia: { instagram: '@jasna_ski_academy', facebook: 'https://facebook.com/jasnaskiacademy', twitter: '@jasna_ski' },
    climate: 'jasna',
    facilities: 'Altitude: 943-2024m, 49km of pistes, 70% snowmaking coverage, FIS-homologated race course, terrain park, halfpipe, equipment rental, ski storage, video analysis, gym, wellness center',
    courtSurfaces: ['Alpine skiing', 'Snowboarding', 'Cross-country', 'Freestyle'],
    programs: [
      { name: 'Race Training Camp', price: '€650/week', desc: 'Intensive slalom and GS training on FIS-certified courses with electronic timing' },
      { name: 'Junior Development Program', price: '€480/week', desc: 'Structured youth ski training for ages 7-16 with progression tracking' },
      { name: 'Freeride Exploration', price: '€550/week', desc: 'Off-piste skiing in the Low Tatras with avalanche safety and backcountry skills' }
    ],
    coaches: [
      {
        name: 'Marek Kováč',
        credential: 'Slovak National Ski Instructor, ISIA certified',
        background: 'Former Slovak national team skier and FIS World Cup course setter with 18 years coaching',
        atpWta: false,
        bestRanking: null,
        rankingNote: null,
        languages: ['English', 'Slovak', 'Czech'],
        instagram: null
      },
      {
        name: 'Zuzana Horváthová',
        credential: 'Slovak Ski Association Level 3, FIS coach',
        background: 'Junior development specialist and former competitive alpine skier, 10 years coaching experience',
        atpWta: false,
        bestRanking: null,
        rankingNote: null,
        languages: ['English', 'Slovak', 'German'],
        instagram: null
      }
    ],
    photos: [
      'https://images.unsplash.com/photo-1565992441121-4367c2967103?w=800',
      'https://images.unsplash.com/photo-1551524559-8af4e6624178?w=800',
      'https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800'
    ],
    upcomingCamps: [
      { name: 'Season Opening Camp', startDate: '2025-12-08', endDate: '2025-12-15', price: '€600', level: 'All levels' },
      { name: 'Holiday Junior Camp', startDate: '2025-12-22', endDate: '2025-12-29', price: '€480', level: 'All levels' },
      { name: 'January Intensive', startDate: '2026-01-19', endDate: '2026-01-26', price: '€650', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Tatras Sport Hotel', pricePerWeek: 350, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Mountain Apartment', pricePerWeek: 250, maxOccupancy: 4, bathType: 'ensuite', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Demänovská Valley location with gondola access to the ski area'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-12-01',
      spotsLeft: 22,
      responseTime: '48h',
      privateLessons: true,
      yearRound: false
    },
    juniorInfo: {
      minAge: 7,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Available during season',
      medicalStaff: true,
      safeguarding: 'Slovak Ski Association child protection standards',
      airportPickup: true,
      mealPlan: 'Full board with Slovak cuisine and sports nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Slovak', 'Czech'],
      emergencyProtocol: 'Mountain rescue on call, Liptovský Mikuláš hospital 20 min away'
    }
  },
  {
    id: 'spindleruv-mlyn-ski-academy',
    name: 'Špindlerův Mlýn Ski Academy',
    country: 'Czech Republic',
    countryFlag: '🇨🇿',
    city: 'Špindlerův Mlýn',
    lat: 50.7263,
    lng: 15.6093,
    website: 'https://www.spindl-ski-academy.cz',
    contact: '+420 499 433 123',
    contactEmail: 'info@spindl-ski-academy.cz',
    description: 'The top Czech ski resort in the Krkonoše (Giant Mountains) national park. Offers excellent training on well-maintained slopes with modern snowmaking, ideal for developing race skills in a stunning natural setting.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Alpine resort, no beach access' },
    priceRange: { from: 420, to: 780, unit: 'week', display: '€420 - €780/week' },
    socialMedia: { instagram: '@spindl_ski_academy', facebook: 'https://facebook.com/spindlskiacademy', twitter: '@spindl_ski' },
    climate: 'spindleruv-mlyn',
    facilities: 'Altitude: 702-1310m, 25km of pistes, 85% snowmaking coverage, race training course with timing, terrain park, equipment rental, ski storage, video analysis room, gym, indoor pool',
    courtSurfaces: ['Alpine skiing', 'Snowboarding', 'Cross-country'],
    programs: [
      { name: 'Alpine Race Training', price: '€620/week', desc: 'Technical race training on dedicated slalom and GS courses with electronic timing' },
      { name: 'Junior Ski School', price: '€440/week', desc: 'Progressive ski development for children aged 6-15 with Czech national-level coaches' },
      { name: 'Cross-Country Week', price: '€400/week', desc: 'Nordic skiing training on groomed trails through the Krkonoše national park' }
    ],
    coaches: [
      {
        name: 'Tomáš Novák',
        credential: 'Czech National Ski Instructor, ISIA certified',
        background: 'Former Czech national team coach with 20 years experience, specialized in giant slalom technique',
        atpWta: false,
        bestRanking: null,
        rankingNote: null,
        languages: ['English', 'Czech', 'German'],
        instagram: null
      },
      {
        name: 'Petra Králová',
        credential: 'Czech Ski Association Level 3, FIS coach',
        background: 'Youth development coach and former competitive skier, 12 years coaching at Špindlerův Mlýn',
        atpWta: false,
        bestRanking: null,
        rankingNote: null,
        languages: ['English', 'Czech', 'Polish'],
        instagram: null
      }
    ],
    photos: [
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800',
      'https://images.unsplash.com/photo-1486625537100-1af6fea55f99?w=800',
      'https://images.unsplash.com/photo-1548133464-29abc661eb5c?w=800',
      'https://images.unsplash.com/photo-1517483000871-1dbf64a6e1c6?w=800'
    ],
    upcomingCamps: [
      { name: 'Winter Opening Camp', startDate: '2025-12-15', endDate: '2025-12-22', price: '€580', level: 'All levels' },
      { name: 'Christmas Junior Camp', startDate: '2025-12-22', endDate: '2025-12-29', price: '€440', level: 'All levels' },
      { name: 'February Race Week', startDate: '2026-02-09', endDate: '2026-02-16', price: '€620', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Krkonoše Sport Hotel', pricePerWeek: 300, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Mountain Apartment', pricePerWeek: 220, maxOccupancy: 4, bathType: 'ensuite', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Central Špindlerův Mlýn location with ski bus to all lifts'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-12-01',
      spotsLeft: 20,
      responseTime: '24h',
      privateLessons: true,
      yearRound: false
    },
    juniorInfo: {
      minAge: 6,
      maxAge: 17,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Available during season',
      medicalStaff: true,
      safeguarding: 'Czech Ski Association child protection standards',
      airportPickup: true,
      mealPlan: 'Full board with Czech cuisine and sports nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Czech', 'German'],
      emergencyProtocol: 'Mountain rescue on call, Trutnov hospital 25 min away'
    }
  },
  {
    id: 'zakopane-ski-academy',
    name: 'Zakopane Tatra Ski Academy',
    country: 'Poland',
    countryFlag: '🇵🇱',
    city: 'Zakopane',
    lat: 49.2992,
    lng: 19.9496,
    website: 'https://www.zakopane-ski-academy.pl',
    contact: '+48 18 201 1234',
    contactEmail: 'info@zakopane-ski-academy.pl',
    description: 'Located in the winter capital of Poland at the foot of the Tatra Mountains, Zakopane has hosted numerous FIS competitions including Ski Jumping World Cup. Excellent training facilities with rich ski tradition and affordable pricing.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Alpine resort, no beach access' },
    priceRange: { from: 400, to: 750, unit: 'week', display: '€400 - €750/week' },
    socialMedia: { instagram: '@zakopane_ski_academy', facebook: 'https://facebook.com/zakopanetatra', twitter: '@zakopane_ski' },
    climate: 'zakopane',
    facilities: 'Altitude: 840-1987m, 40km of pistes across multiple areas, 75% snowmaking, FIS-certified race course, ski jumping hills, cross-country trails, equipment rental, ski storage, video analysis, gym, wellness spa',
    courtSurfaces: ['Alpine skiing', 'Snowboarding', 'Cross-country', 'Freestyle'],
    programs: [
      { name: 'Alpine Race Training', price: '€600/week', desc: 'Race-focused training on Kasprowy Wierch and Gubałówka slopes with timing systems' },
      { name: 'Junior Tatra Camp', price: '€430/week', desc: 'Progressive ski development for young athletes aged 6-16 in the Tatra Mountains' },
      { name: 'Cross-Country & Biathlon', price: '€450/week', desc: 'Nordic skiing and biathlon introduction on Zakopane\'s world-class cross-country trails' }
    ],
    coaches: [
      {
        name: 'Krzysztof Wiśniewski',
        credential: 'Polish National Ski Instructor, ISIA certified',
        background: 'Former Polish national team coach with FIS World Cup experience, 16 years at elite level',
        atpWta: false,
        bestRanking: null,
        rankingNote: null,
        languages: ['English', 'Polish'],
        instagram: null
      },
      {
        name: 'Agnieszka Kowalska',
        credential: 'Polish Ski Association Level 3, FIS coach',
        background: 'Junior development specialist, former competitive skier and Polish junior national team coach',
        atpWta: false,
        bestRanking: null,
        rankingNote: null,
        languages: ['English', 'Polish', 'Slovak'],
        instagram: null
      }
    ],
    photos: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      'https://images.unsplash.com/photo-1551524559-8af4e6624178?w=800',
      'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800'
    ],
    upcomingCamps: [
      { name: 'Winter Opening Camp', startDate: '2025-12-15', endDate: '2025-12-22', price: '€550', level: 'All levels' },
      { name: 'Christmas Junior Camp', startDate: '2025-12-22', endDate: '2025-12-29', price: '€430', level: 'All levels' },
      { name: 'January Race Week', startDate: '2026-01-12', endDate: '2026-01-19', price: '€600', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Tatra Sport Hotel', pricePerWeek: 300, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'guesthouse', label: 'Highland Guesthouse', pricePerWeek: 200, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Central Zakopane location with shuttle to Kasprowy Wierch and Gubałówka'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-12-01',
      spotsLeft: 28,
      responseTime: '24h',
      privateLessons: true,
      yearRound: false
    },
    juniorInfo: {
      minAge: 6,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Available during season',
      medicalStaff: true,
      safeguarding: 'Polish Ski Association child protection standards',
      airportPickup: true,
      mealPlan: 'Full board with Polish highland cuisine and sports nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Polish'],
      emergencyProtocol: 'Tatra Mountain Rescue (TOPR) on call, Zakopane hospital 10 min away'
    }
  },
  {
    id: 'gudauri-ski-academy',
    name: 'Gudauri Caucasus Ski Academy',
    country: 'Georgia',
    countryFlag: '🇬🇪',
    city: 'Gudauri',
    lat: 42.4614,
    lng: 44.4706,
    website: 'https://www.gudauri-ski-academy.ge',
    contact: '+995 322 44 5678',
    contactEmail: 'info@gudauri-ski-academy.ge',
    description: 'Georgia\'s premier ski destination in the Greater Caucasus Mountains, Gudauri is an emerging world-class resort with modern lifts, exceptional powder snow, and breathtaking mountain scenery. Outstanding value for money.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Alpine resort, no beach access' },
    priceRange: { from: 350, to: 650, unit: 'week', display: '€350 - €650/week' },
    socialMedia: { instagram: '@gudauri_ski_academy', facebook: 'https://facebook.com/gudauriskiacademy', twitter: '@gudauri_ski' },
    climate: 'gudauri',
    facilities: 'Altitude: 1990-3307m, 57km of pistes, modern gondola and chairlifts, extensive off-piste terrain, terrain park, equipment rental, ski storage, video analysis, gym, sauna',
    courtSurfaces: ['Alpine skiing', 'Snowboarding', 'Freestyle'],
    programs: [
      { name: 'Freeride & Powder Camp', price: '€500/week', desc: 'Off-piste powder skiing in the vast Caucasus backcountry with certified guides' },
      { name: 'Alpine Training Week', price: '€450/week', desc: 'All-mountain alpine training with technique focus on Gudauri\'s varied terrain' },
      { name: 'Junior Mountain Camp', price: '€350/week', desc: 'Fun and progressive ski training for young skiers aged 7-16 in a safe environment' }
    ],
    coaches: [
      {
        name: 'Giorgi Kvaratskhelia',
        credential: 'Georgian National Ski Instructor, ISIA certified',
        background: 'Former Georgian national team member and Caucasus freeride specialist with 14 years coaching',
        atpWta: false,
        bestRanking: null,
        rankingNote: null,
        languages: ['English', 'Georgian', 'Russian'],
        instagram: null
      },
      {
        name: 'Nino Beridze',
        credential: 'Georgian Ski Federation Level 3, FIS coach',
        background: 'Youth development expert and former competitive skier, specialized in alpine and freestyle coaching',
        atpWta: false,
        bestRanking: null,
        rankingNote: null,
        languages: ['English', 'Georgian', 'Russian'],
        instagram: null
      }
    ],
    photos: [
      'https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800',
      'https://images.unsplash.com/photo-1520208422220-d12a3c588e6c?w=800',
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800',
      'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800'
    ],
    upcomingCamps: [
      { name: 'Season Opening Camp', startDate: '2025-12-15', endDate: '2025-12-22', price: '€450', level: 'All levels' },
      { name: 'New Year Freeride Week', startDate: '2026-01-05', endDate: '2026-01-12', price: '€500', level: 'Intermediate to Advanced' },
      { name: 'February Powder Camp', startDate: '2026-02-16', endDate: '2026-02-23', price: '€500', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Gudauri Mountain Hotel', pricePerWeek: 250, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Slope-side Apartment', pricePerWeek: 180, maxOccupancy: 4, bathType: 'ensuite', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Ski-in/ski-out resort village with all amenities within walking distance'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-12-01',
      spotsLeft: 30,
      responseTime: '24h',
      privateLessons: true,
      yearRound: false
    },
    juniorInfo: {
      minAge: 7,
      maxAge: 17,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Available during season',
      medicalStaff: true,
      safeguarding: 'Georgian Ski Federation child protection standards',
      airportPickup: true,
      mealPlan: 'Full board with Georgian cuisine and sports nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Georgian', 'Russian'],
      emergencyProtocol: 'Mountain rescue on call, Gudauri medical center on-site, Tbilisi hospital 2 hours away'
    }
  },
  {
    id: 'sierra-nevada-ski-academy',
    name: 'Sierra Nevada Ski Academy',
    country: 'Spain',
    countryFlag: '🇪🇸',
    city: 'Sierra Nevada',
    lat: 37.0956,
    lng: -3.3953,
    website: 'https://www.sierranevada-ski-academy.es',
    contact: '+34 958 708 123',
    contactEmail: 'info@sierranevada-ski-academy.es',
    description: 'Europe\'s southernmost major ski resort, located in Andalusia near Granada. Sierra Nevada offers sunny skiing at high altitude with stunning views of the Mediterranean. Hosted the 1996 FIS Alpine World Ski Championships.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Alpine resort, no beach access' },
    priceRange: { from: 600, to: 1100, unit: 'week', display: '€600 - €1,100/week' },
    socialMedia: { instagram: '@sierranevada_ski', facebook: 'https://facebook.com/sierranevadaskiacademy', twitter: '@sn_ski_academy' },
    climate: 'sierra-nevada',
    facilities: 'Altitude: 2100-3300m, 110km of pistes, 80% snowmaking coverage, FIS-homologated race courses, terrain park with halfpipe, equipment rental, ski storage, video analysis room, fitness center, spa',
    courtSurfaces: ['Alpine skiing', 'Snowboarding', 'Cross-country', 'Freestyle'],
    programs: [
      { name: 'Alpine Race Training', price: '€900/week', desc: 'Intensive race training on World Championship slopes with electronic timing and video analysis' },
      { name: 'Junior Ski Camp', price: '€650/week', desc: 'Progressive alpine and freestyle training for young skiers aged 6-16 in sunny conditions' },
      { name: 'Spring Skiing Intensive', price: '€600/week', desc: 'Late-season training at Europe\'s highest resort with morning skiing and afternoon technique sessions' }
    ],
    coaches: [
      {
        name: 'Carlos Fernández',
        credential: 'Spanish National Ski Instructor (TD3), FIS coach',
        background: 'Former Spanish national team coach with experience at World Championships and World Cup events',
        atpWta: false,
        bestRanking: null,
        rankingNote: null,
        languages: ['English', 'Spanish', 'French'],
        instagram: null
      },
      {
        name: 'María García',
        credential: 'RFEDI Level 3, ISIA certified',
        background: 'Youth development specialist and former competitive alpine skier, 15 years coaching experience',
        atpWta: false,
        bestRanking: null,
        rankingNote: null,
        languages: ['English', 'Spanish'],
        instagram: null
      }
    ],
    photos: [
      'https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=800',
      'https://images.unsplash.com/photo-1565992441121-4367c2967103?w=800',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      'https://images.unsplash.com/photo-1548133464-29abc661eb5c?w=800'
    ],
    upcomingCamps: [
      { name: 'Winter Opening Camp', startDate: '2025-12-01', endDate: '2025-12-08', price: '€850', level: 'All levels' },
      { name: 'Christmas Junior Camp', startDate: '2025-12-22', endDate: '2025-12-29', price: '€650', level: 'All levels' },
      { name: 'Spring Race Camp', startDate: '2026-03-23', endDate: '2026-03-30', price: '€900', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Pradollano Sport Hotel', pricePerWeek: 500, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Mountain Apartment', pricePerWeek: 380, maxOccupancy: 4, bathType: 'ensuite', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Pradollano village at 2100m with direct access to lifts and slopes'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-12-01',
      spotsLeft: 18,
      responseTime: '48h',
      privateLessons: true,
      yearRound: false
    },
    juniorInfo: {
      minAge: 6,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Available during season',
      medicalStaff: true,
      safeguarding: 'Spanish Ski Federation (RFEDI) child protection standards',
      airportPickup: true,
      mealPlan: 'Full board with Spanish Mediterranean cuisine and sports nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Spanish', 'French'],
      emergencyProtocol: 'Mountain rescue on call, Sierra Nevada medical center on-site, Granada hospital 45 min away'
    }
  }
];

const CLIMATE_DATA = {
  'innsbruck': {
    city: 'Innsbruck',
    country: 'Austria',
    months: [
      { month: 'Jan', tempHigh: -1, tempLow: -8, rain: 44, sun: 3 },
      { month: 'Feb', tempHigh: 1, tempLow: -6, rain: 39, sun: 4 },
      { month: 'Mar', tempHigh: 6, tempLow: -3, rain: 48, sun: 5 },
      { month: 'Apr', tempHigh: 10, tempLow: 1, rain: 58, sun: 5 },
      { month: 'May', tempHigh: 16, tempLow: 5, rain: 82, sun: 6 },
      { month: 'Jun', tempHigh: 20, tempLow: 9, rain: 109, sun: 6 },
      { month: 'Jul', tempHigh: 22, tempLow: 11, rain: 132, sun: 7 },
      { month: 'Aug', tempHigh: 21, tempLow: 11, rain: 120, sun: 6 },
      { month: 'Sep', tempHigh: 17, tempLow: 7, rain: 75, sun: 6 },
      { month: 'Oct', tempHigh: 12, tempLow: 3, rain: 56, sun: 5 },
      { month: 'Nov', tempHigh: 4, tempLow: -3, rain: 55, sun: 3 },
      { month: 'Dec', tempHigh: 0, tempLow: -7, rain: 44, sun: 3 }
    ]
  },
  'schladming': {
    city: 'Schladming',
    country: 'Austria',
    months: [
      { month: 'Jan', tempHigh: -2, tempLow: -10, rain: 52, sun: 3 },
      { month: 'Feb', tempHigh: 0, tempLow: -8, rain: 45, sun: 4 },
      { month: 'Mar', tempHigh: 5, tempLow: -4, rain: 55, sun: 5 },
      { month: 'Apr', tempHigh: 9, tempLow: 0, rain: 62, sun: 5 },
      { month: 'May', tempHigh: 15, tempLow: 4, rain: 85, sun: 6 },
      { month: 'Jun', tempHigh: 18, tempLow: 8, rain: 115, sun: 6 },
      { month: 'Jul', tempHigh: 20, tempLow: 10, rain: 140, sun: 7 },
      { month: 'Aug', tempHigh: 19, tempLow: 10, rain: 125, sun: 6 },
      { month: 'Sep', tempHigh: 16, tempLow: 6, rain: 80, sun: 6 },
      { month: 'Oct', tempHigh: 10, tempLow: 2, rain: 60, sun: 5 },
      { month: 'Nov', tempHigh: 3, tempLow: -4, rain: 60, sun: 3 },
      { month: 'Dec', tempHigh: -1, tempLow: -9, rain: 55, sun: 2 }
    ]
  },
  'st-anton': {
    city: 'St. Anton am Arlberg',
    country: 'Austria',
    months: [
      { month: 'Jan', tempHigh: -3, tempLow: -11, rain: 55, sun: 3 },
      { month: 'Feb', tempHigh: -1, tempLow: -9, rain: 50, sun: 4 },
      { month: 'Mar', tempHigh: 3, tempLow: -5, rain: 55, sun: 5 },
      { month: 'Apr', tempHigh: 7, tempLow: -1, rain: 60, sun: 5 },
      { month: 'May', tempHigh: 13, tempLow: 4, rain: 80, sun: 6 },
      { month: 'Jun', tempHigh: 17, tempLow: 7, rain: 110, sun: 6 },
      { month: 'Jul', tempHigh: 19, tempLow: 9, rain: 135, sun: 7 },
      { month: 'Aug', tempHigh: 18, tempLow: 9, rain: 125, sun: 6 },
      { month: 'Sep', tempHigh: 15, tempLow: 6, rain: 78, sun: 6 },
      { month: 'Oct', tempHigh: 9, tempLow: 1, rain: 58, sun: 5 },
      { month: 'Nov', tempHigh: 2, tempLow: -5, rain: 60, sun: 3 },
      { month: 'Dec', tempHigh: -2, tempLow: -10, rain: 58, sun: 2 }
    ]
  },
  'verbier': {
    city: 'Verbier',
    country: 'Switzerland',
    months: [
      { month: 'Jan', tempHigh: -2, tempLow: -9, rain: 62, sun: 4 },
      { month: 'Feb', tempHigh: -1, tempLow: -8, rain: 55, sun: 5 },
      { month: 'Mar', tempHigh: 3, tempLow: -4, rain: 58, sun: 5 },
      { month: 'Apr', tempHigh: 7, tempLow: 0, rain: 60, sun: 5 },
      { month: 'May', tempHigh: 12, tempLow: 4, rain: 75, sun: 6 },
      { month: 'Jun', tempHigh: 16, tempLow: 8, rain: 85, sun: 7 },
      { month: 'Jul', tempHigh: 19, tempLow: 10, rain: 80, sun: 8 },
      { month: 'Aug', tempHigh: 18, tempLow: 10, rain: 85, sun: 7 },
      { month: 'Sep', tempHigh: 14, tempLow: 6, rain: 65, sun: 6 },
      { month: 'Oct', tempHigh: 9, tempLow: 2, rain: 58, sun: 5 },
      { month: 'Nov', tempHigh: 3, tempLow: -3, rain: 65, sun: 3 },
      { month: 'Dec', tempHigh: -1, tempLow: -8, rain: 60, sun: 3 }
    ]
  },
  'zermatt': {
    city: 'Zermatt',
    country: 'Switzerland',
    months: [
      { month: 'Jan', tempHigh: -3, tempLow: -10, rain: 48, sun: 4 },
      { month: 'Feb', tempHigh: -2, tempLow: -9, rain: 42, sun: 5 },
      { month: 'Mar', tempHigh: 2, tempLow: -5, rain: 45, sun: 5 },
      { month: 'Apr', tempHigh: 5, tempLow: -2, rain: 50, sun: 5 },
      { month: 'May', tempHigh: 10, tempLow: 3, rain: 60, sun: 6 },
      { month: 'Jun', tempHigh: 14, tempLow: 6, rain: 65, sun: 7 },
      { month: 'Jul', tempHigh: 17, tempLow: 8, rain: 60, sun: 8 },
      { month: 'Aug', tempHigh: 16, tempLow: 8, rain: 65, sun: 7 },
      { month: 'Sep', tempHigh: 12, tempLow: 5, rain: 48, sun: 6 },
      { month: 'Oct', tempHigh: 8, tempLow: 1, rain: 45, sun: 5 },
      { month: 'Nov', tempHigh: 2, tempLow: -5, rain: 52, sun: 3 },
      { month: 'Dec', tempHigh: -2, tempLow: -9, rain: 48, sun: 3 }
    ]
  },
  'chamonix': {
    city: 'Chamonix',
    country: 'France',
    months: [
      { month: 'Jan', tempHigh: -1, tempLow: -8, rain: 68, sun: 3 },
      { month: 'Feb', tempHigh: 1, tempLow: -7, rain: 58, sun: 4 },
      { month: 'Mar', tempHigh: 5, tempLow: -3, rain: 65, sun: 5 },
      { month: 'Apr', tempHigh: 9, tempLow: 1, rain: 72, sun: 5 },
      { month: 'May', tempHigh: 14, tempLow: 5, rain: 90, sun: 6 },
      { month: 'Jun', tempHigh: 18, tempLow: 8, rain: 100, sun: 7 },
      { month: 'Jul', tempHigh: 21, tempLow: 10, rain: 95, sun: 8 },
      { month: 'Aug', tempHigh: 20, tempLow: 10, rain: 100, sun: 7 },
      { month: 'Sep', tempHigh: 16, tempLow: 7, rain: 75, sun: 6 },
      { month: 'Oct', tempHigh: 11, tempLow: 3, rain: 65, sun: 5 },
      { month: 'Nov', tempHigh: 4, tempLow: -3, rain: 72, sun: 3 },
      { month: 'Dec', tempHigh: 0, tempLow: -7, rain: 70, sun: 3 }
    ]
  },
  'val-disere': {
    city: 'Val d\'Isère',
    country: 'France',
    months: [
      { month: 'Jan', tempHigh: -4, tempLow: -12, rain: 60, sun: 4 },
      { month: 'Feb', tempHigh: -3, tempLow: -11, rain: 52, sun: 5 },
      { month: 'Mar', tempHigh: 1, tempLow: -7, rain: 58, sun: 5 },
      { month: 'Apr', tempHigh: 4, tempLow: -3, rain: 55, sun: 5 },
      { month: 'May', tempHigh: 9, tempLow: 2, rain: 70, sun: 6 },
      { month: 'Jun', tempHigh: 13, tempLow: 5, rain: 80, sun: 7 },
      { month: 'Jul', tempHigh: 16, tempLow: 7, rain: 75, sun: 8 },
      { month: 'Aug', tempHigh: 15, tempLow: 7, rain: 78, sun: 7 },
      { month: 'Sep', tempHigh: 12, tempLow: 4, rain: 60, sun: 6 },
      { month: 'Oct', tempHigh: 7, tempLow: 0, rain: 55, sun: 5 },
      { month: 'Nov', tempHigh: 1, tempLow: -6, rain: 62, sun: 3 },
      { month: 'Dec', tempHigh: -3, tempLow: -11, rain: 58, sun: 3 }
    ]
  },
  'cortina': {
    city: 'Cortina d\'Ampezzo',
    country: 'Italy',
    months: [
      { month: 'Jan', tempHigh: -1, tempLow: -10, rain: 40, sun: 4 },
      { month: 'Feb', tempHigh: 1, tempLow: -8, rain: 35, sun: 4 },
      { month: 'Mar', tempHigh: 5, tempLow: -4, rain: 45, sun: 5 },
      { month: 'Apr', tempHigh: 9, tempLow: 0, rain: 65, sun: 5 },
      { month: 'May', tempHigh: 14, tempLow: 4, rain: 90, sun: 6 },
      { month: 'Jun', tempHigh: 18, tempLow: 8, rain: 105, sun: 7 },
      { month: 'Jul', tempHigh: 21, tempLow: 10, rain: 110, sun: 7 },
      { month: 'Aug', tempHigh: 20, tempLow: 10, rain: 100, sun: 7 },
      { month: 'Sep', tempHigh: 16, tempLow: 6, rain: 75, sun: 6 },
      { month: 'Oct', tempHigh: 10, tempLow: 2, rain: 65, sun: 5 },
      { month: 'Nov', tempHigh: 4, tempLow: -4, rain: 70, sun: 3 },
      { month: 'Dec', tempHigh: 0, tempLow: -9, rain: 45, sun: 3 }
    ]
  },
  'val-gardena': {
    city: 'Val Gardena',
    country: 'Italy',
    months: [
      { month: 'Jan', tempHigh: -2, tempLow: -10, rain: 38, sun: 4 },
      { month: 'Feb', tempHigh: 0, tempLow: -8, rain: 32, sun: 5 },
      { month: 'Mar', tempHigh: 5, tempLow: -4, rain: 42, sun: 5 },
      { month: 'Apr', tempHigh: 8, tempLow: 0, rain: 58, sun: 5 },
      { month: 'May', tempHigh: 14, tempLow: 4, rain: 78, sun: 6 },
      { month: 'Jun', tempHigh: 17, tempLow: 7, rain: 95, sun: 7 },
      { month: 'Jul', tempHigh: 20, tempLow: 9, rain: 105, sun: 7 },
      { month: 'Aug', tempHigh: 19, tempLow: 9, rain: 95, sun: 7 },
      { month: 'Sep', tempHigh: 15, tempLow: 6, rain: 68, sun: 6 },
      { month: 'Oct', tempHigh: 10, tempLow: 1, rain: 55, sun: 5 },
      { month: 'Nov', tempHigh: 3, tempLow: -5, rain: 58, sun: 3 },
      { month: 'Dec', tempHigh: -1, tempLow: -9, rain: 40, sun: 3 }
    ]
  },
  'lillehammer': {
    city: 'Lillehammer',
    country: 'Norway',
    months: [
      { month: 'Jan', tempHigh: -5, tempLow: -14, rain: 35, sun: 1 },
      { month: 'Feb', tempHigh: -3, tempLow: -13, rain: 28, sun: 3 },
      { month: 'Mar', tempHigh: 2, tempLow: -8, rain: 30, sun: 5 },
      { month: 'Apr', tempHigh: 7, tempLow: -2, rain: 32, sun: 6 },
      { month: 'May', tempHigh: 14, tempLow: 4, rain: 45, sun: 7 },
      { month: 'Jun', tempHigh: 18, tempLow: 8, rain: 60, sun: 8 },
      { month: 'Jul', tempHigh: 20, tempLow: 10, rain: 75, sun: 7 },
      { month: 'Aug', tempHigh: 18, tempLow: 9, rain: 70, sun: 6 },
      { month: 'Sep', tempHigh: 13, tempLow: 5, rain: 55, sun: 4 },
      { month: 'Oct', tempHigh: 6, tempLow: 0, rain: 50, sun: 3 },
      { month: 'Nov', tempHigh: 0, tempLow: -7, rain: 42, sun: 1 },
      { month: 'Dec', tempHigh: -4, tempLow: -13, rain: 38, sun: 1 }
    ]
  },
  'are': {
    city: 'Åre',
    country: 'Sweden',
    months: [
      { month: 'Jan', tempHigh: -7, tempLow: -16, rain: 40, sun: 1 },
      { month: 'Feb', tempHigh: -5, tempLow: -14, rain: 30, sun: 3 },
      { month: 'Mar', tempHigh: -1, tempLow: -10, rain: 28, sun: 5 },
      { month: 'Apr', tempHigh: 4, tempLow: -4, rain: 30, sun: 6 },
      { month: 'May', tempHigh: 10, tempLow: 2, rain: 38, sun: 7 },
      { month: 'Jun', tempHigh: 15, tempLow: 7, rain: 55, sun: 8 },
      { month: 'Jul', tempHigh: 17, tempLow: 9, rain: 70, sun: 7 },
      { month: 'Aug', tempHigh: 15, tempLow: 8, rain: 65, sun: 6 },
      { month: 'Sep', tempHigh: 10, tempLow: 4, rain: 50, sun: 4 },
      { month: 'Oct', tempHigh: 4, tempLow: -1, rain: 45, sun: 2 },
      { month: 'Nov', tempHigh: -2, tempLow: -9, rain: 42, sun: 1 },
      { month: 'Dec', tempHigh: -6, tempLow: -14, rain: 40, sun: 0 }
    ]
  },
  'levi': {
    city: 'Levi',
    country: 'Finland',
    months: [
      { month: 'Jan', tempHigh: -11, tempLow: -20, rain: 30, sun: 0 },
      { month: 'Feb', tempHigh: -10, tempLow: -19, rain: 25, sun: 2 },
      { month: 'Mar', tempHigh: -5, tempLow: -14, rain: 25, sun: 4 },
      { month: 'Apr', tempHigh: 0, tempLow: -8, rain: 28, sun: 6 },
      { month: 'May', tempHigh: 7, tempLow: 0, rain: 32, sun: 8 },
      { month: 'Jun', tempHigh: 14, tempLow: 6, rain: 48, sun: 10 },
      { month: 'Jul', tempHigh: 17, tempLow: 9, rain: 58, sun: 9 },
      { month: 'Aug', tempHigh: 14, tempLow: 7, rain: 55, sun: 6 },
      { month: 'Sep', tempHigh: 8, tempLow: 2, rain: 42, sun: 3 },
      { month: 'Oct', tempHigh: 1, tempLow: -4, rain: 38, sun: 2 },
      { month: 'Nov', tempHigh: -5, tempLow: -12, rain: 32, sun: 0 },
      { month: 'Dec', tempHigh: -9, tempLow: -18, rain: 28, sun: 0 }
    ]
  },
  'grandvalira': {
    city: 'Grandvalira',
    country: 'Andorra',
    months: [
      { month: 'Jan', tempHigh: 1, tempLow: -6, rain: 50, sun: 5 },
      { month: 'Feb', tempHigh: 2, tempLow: -5, rain: 45, sun: 5 },
      { month: 'Mar', tempHigh: 5, tempLow: -2, rain: 48, sun: 6 },
      { month: 'Apr', tempHigh: 8, tempLow: 1, rain: 60, sun: 6 },
      { month: 'May', tempHigh: 13, tempLow: 5, rain: 72, sun: 7 },
      { month: 'Jun', tempHigh: 18, tempLow: 9, rain: 58, sun: 9 },
      { month: 'Jul', tempHigh: 22, tempLow: 12, rain: 42, sun: 10 },
      { month: 'Aug', tempHigh: 21, tempLow: 12, rain: 50, sun: 9 },
      { month: 'Sep', tempHigh: 17, tempLow: 8, rain: 58, sun: 7 },
      { month: 'Oct', tempHigh: 11, tempLow: 3, rain: 55, sun: 6 },
      { month: 'Nov', tempHigh: 5, tempLow: -2, rain: 55, sun: 4 },
      { month: 'Dec', tempHigh: 2, tempLow: -5, rain: 52, sun: 4 }
    ]
  },
  'kranjska-gora': {
    city: 'Kranjska Gora',
    country: 'Slovenia',
    months: [
      { month: 'Jan', tempHigh: -1, tempLow: -9, rain: 55, sun: 3 },
      { month: 'Feb', tempHigh: 1, tempLow: -7, rain: 48, sun: 4 },
      { month: 'Mar', tempHigh: 5, tempLow: -3, rain: 60, sun: 5 },
      { month: 'Apr', tempHigh: 10, tempLow: 1, rain: 75, sun: 5 },
      { month: 'May', tempHigh: 15, tempLow: 5, rain: 95, sun: 6 },
      { month: 'Jun', tempHigh: 19, tempLow: 9, rain: 115, sun: 7 },
      { month: 'Jul', tempHigh: 21, tempLow: 11, rain: 120, sun: 7 },
      { month: 'Aug', tempHigh: 21, tempLow: 11, rain: 110, sun: 7 },
      { month: 'Sep', tempHigh: 16, tempLow: 7, rain: 90, sun: 5 },
      { month: 'Oct', tempHigh: 11, tempLow: 3, rain: 80, sun: 4 },
      { month: 'Nov', tempHigh: 4, tempLow: -3, rain: 75, sun: 3 },
      { month: 'Dec', tempHigh: 0, tempLow: -8, rain: 60, sun: 2 }
    ]
  },
  'davos': {
    city: 'Davos',
    country: 'Switzerland',
    months: [
      { month: 'Jan', tempHigh: -4, tempLow: -13, rain: 45, sun: 4 },
      { month: 'Feb', tempHigh: -3, tempLow: -12, rain: 38, sun: 5 },
      { month: 'Mar', tempHigh: 2, tempLow: -7, rain: 42, sun: 5 },
      { month: 'Apr', tempHigh: 5, tempLow: -3, rain: 48, sun: 5 },
      { month: 'May', tempHigh: 11, tempLow: 3, rain: 62, sun: 6 },
      { month: 'Jun', tempHigh: 15, tempLow: 6, rain: 80, sun: 7 },
      { month: 'Jul', tempHigh: 17, tempLow: 8, rain: 90, sun: 7 },
      { month: 'Aug', tempHigh: 16, tempLow: 8, rain: 85, sun: 7 },
      { month: 'Sep', tempHigh: 12, tempLow: 5, rain: 60, sun: 6 },
      { month: 'Oct', tempHigh: 7, tempLow: 0, rain: 48, sun: 4 },
      { month: 'Nov', tempHigh: 1, tempLow: -6, rain: 52, sun: 3 },
      { month: 'Dec', tempHigh: -3, tempLow: -12, rain: 45, sun: 3 }
    ]
  },
  'bansko': {
    city: 'Bansko',
    country: 'Bulgaria',
    months: [
      { month: 'Jan', tempHigh: -2, tempLow: -10, rain: 40, sun: 3 },
      { month: 'Feb', tempHigh: 0, tempLow: -8, rain: 35, sun: 4 },
      { month: 'Mar', tempHigh: 5, tempLow: -4, rain: 42, sun: 5 },
      { month: 'Apr', tempHigh: 10, tempLow: 1, rain: 55, sun: 5 },
      { month: 'May', tempHigh: 16, tempLow: 6, rain: 72, sun: 7 },
      { month: 'Jun', tempHigh: 20, tempLow: 9, rain: 65, sun: 8 },
      { month: 'Jul', tempHigh: 23, tempLow: 12, rain: 50, sun: 9 },
      { month: 'Aug', tempHigh: 23, tempLow: 12, rain: 45, sun: 9 },
      { month: 'Sep', tempHigh: 18, tempLow: 7, rain: 40, sun: 7 },
      { month: 'Oct', tempHigh: 12, tempLow: 3, rain: 48, sun: 5 },
      { month: 'Nov', tempHigh: 5, tempLow: -3, rain: 50, sun: 3 },
      { month: 'Dec', tempHigh: 0, tempLow: -8, rain: 45, sun: 3 }
    ]
  },
  'borovets': {
    city: 'Borovets',
    country: 'Bulgaria',
    months: [
      { month: 'Jan', tempHigh: -3, tempLow: -11, rain: 42, sun: 3 },
      { month: 'Feb', tempHigh: -1, tempLow: -9, rain: 38, sun: 4 },
      { month: 'Mar', tempHigh: 4, tempLow: -5, rain: 45, sun: 5 },
      { month: 'Apr', tempHigh: 9, tempLow: 0, rain: 58, sun: 5 },
      { month: 'May', tempHigh: 14, tempLow: 4, rain: 75, sun: 6 },
      { month: 'Jun', tempHigh: 18, tempLow: 8, rain: 70, sun: 8 },
      { month: 'Jul', tempHigh: 21, tempLow: 10, rain: 55, sun: 9 },
      { month: 'Aug', tempHigh: 21, tempLow: 10, rain: 48, sun: 8 },
      { month: 'Sep', tempHigh: 16, tempLow: 6, rain: 42, sun: 7 },
      { month: 'Oct', tempHigh: 10, tempLow: 2, rain: 50, sun: 5 },
      { month: 'Nov', tempHigh: 4, tempLow: -4, rain: 52, sun: 3 },
      { month: 'Dec', tempHigh: -1, tempLow: -9, rain: 48, sun: 3 }
    ]
  },
  'poiana-brasov': {
    city: 'Poiana Brașov',
    country: 'Romania',
    months: [
      { month: 'Jan', tempHigh: -3, tempLow: -12, rain: 35, sun: 3 },
      { month: 'Feb', tempHigh: -1, tempLow: -10, rain: 30, sun: 4 },
      { month: 'Mar', tempHigh: 4, tempLow: -5, rain: 38, sun: 5 },
      { month: 'Apr', tempHigh: 9, tempLow: 0, rain: 52, sun: 5 },
      { month: 'May', tempHigh: 15, tempLow: 5, rain: 78, sun: 6 },
      { month: 'Jun', tempHigh: 19, tempLow: 9, rain: 90, sun: 7 },
      { month: 'Jul', tempHigh: 21, tempLow: 11, rain: 85, sun: 8 },
      { month: 'Aug', tempHigh: 21, tempLow: 11, rain: 72, sun: 8 },
      { month: 'Sep', tempHigh: 16, tempLow: 6, rain: 50, sun: 6 },
      { month: 'Oct', tempHigh: 10, tempLow: 2, rain: 42, sun: 5 },
      { month: 'Nov', tempHigh: 3, tempLow: -4, rain: 40, sun: 3 },
      { month: 'Dec', tempHigh: -1, tempLow: -9, rain: 38, sun: 3 }
    ]
  },
  'jasna': {
    city: 'Jasná',
    country: 'Slovakia',
    months: [
      { month: 'Jan', tempHigh: -4, tempLow: -12, rain: 50, sun: 3 },
      { month: 'Feb', tempHigh: -2, tempLow: -10, rain: 42, sun: 4 },
      { month: 'Mar', tempHigh: 3, tempLow: -6, rain: 48, sun: 5 },
      { month: 'Apr', tempHigh: 8, tempLow: -1, rain: 60, sun: 5 },
      { month: 'May', tempHigh: 14, tempLow: 4, rain: 80, sun: 6 },
      { month: 'Jun', tempHigh: 18, tempLow: 8, rain: 95, sun: 7 },
      { month: 'Jul', tempHigh: 20, tempLow: 10, rain: 100, sun: 7 },
      { month: 'Aug', tempHigh: 19, tempLow: 10, rain: 90, sun: 7 },
      { month: 'Sep', tempHigh: 15, tempLow: 6, rain: 65, sun: 6 },
      { month: 'Oct', tempHigh: 9, tempLow: 1, rain: 55, sun: 4 },
      { month: 'Nov', tempHigh: 2, tempLow: -5, rain: 58, sun: 3 },
      { month: 'Dec', tempHigh: -3, tempLow: -11, rain: 52, sun: 3 }
    ]
  },
  'spindleruv-mlyn': {
    city: 'Špindlerův Mlýn',
    country: 'Czech Republic',
    months: [
      { month: 'Jan', tempHigh: -3, tempLow: -10, rain: 55, sun: 2 },
      { month: 'Feb', tempHigh: -2, tempLow: -9, rain: 45, sun: 3 },
      { month: 'Mar', tempHigh: 2, tempLow: -5, rain: 50, sun: 4 },
      { month: 'Apr', tempHigh: 7, tempLow: 0, rain: 55, sun: 5 },
      { month: 'May', tempHigh: 13, tempLow: 4, rain: 72, sun: 6 },
      { month: 'Jun', tempHigh: 16, tempLow: 7, rain: 85, sun: 6 },
      { month: 'Jul', tempHigh: 18, tempLow: 9, rain: 95, sun: 6 },
      { month: 'Aug', tempHigh: 18, tempLow: 9, rain: 88, sun: 6 },
      { month: 'Sep', tempHigh: 14, tempLow: 5, rain: 60, sun: 5 },
      { month: 'Oct', tempHigh: 8, tempLow: 1, rain: 48, sun: 4 },
      { month: 'Nov', tempHigh: 2, tempLow: -4, rain: 55, sun: 2 },
      { month: 'Dec', tempHigh: -2, tempLow: -9, rain: 55, sun: 2 }
    ]
  },
  'zakopane': {
    city: 'Zakopane',
    country: 'Poland',
    months: [
      { month: 'Jan', tempHigh: -3, tempLow: -11, rain: 48, sun: 3 },
      { month: 'Feb', tempHigh: -1, tempLow: -9, rain: 40, sun: 3 },
      { month: 'Mar', tempHigh: 4, tempLow: -5, rain: 45, sun: 4 },
      { month: 'Apr', tempHigh: 9, tempLow: 0, rain: 60, sun: 5 },
      { month: 'May', tempHigh: 14, tempLow: 5, rain: 90, sun: 6 },
      { month: 'Jun', tempHigh: 18, tempLow: 8, rain: 110, sun: 6 },
      { month: 'Jul', tempHigh: 20, tempLow: 10, rain: 120, sun: 7 },
      { month: 'Aug', tempHigh: 19, tempLow: 10, rain: 105, sun: 7 },
      { month: 'Sep', tempHigh: 15, tempLow: 6, rain: 70, sun: 5 },
      { month: 'Oct', tempHigh: 9, tempLow: 1, rain: 52, sun: 4 },
      { month: 'Nov', tempHigh: 3, tempLow: -4, rain: 50, sun: 3 },
      { month: 'Dec', tempHigh: -2, tempLow: -9, rain: 48, sun: 2 }
    ]
  },
  'gudauri': {
    city: 'Gudauri',
    country: 'Georgia',
    months: [
      { month: 'Jan', tempHigh: -5, tempLow: -14, rain: 35, sun: 4 },
      { month: 'Feb', tempHigh: -4, tempLow: -13, rain: 38, sun: 4 },
      { month: 'Mar', tempHigh: 0, tempLow: -8, rain: 45, sun: 5 },
      { month: 'Apr', tempHigh: 5, tempLow: -3, rain: 55, sun: 5 },
      { month: 'May', tempHigh: 10, tempLow: 2, rain: 75, sun: 6 },
      { month: 'Jun', tempHigh: 14, tempLow: 5, rain: 80, sun: 7 },
      { month: 'Jul', tempHigh: 17, tempLow: 8, rain: 65, sun: 8 },
      { month: 'Aug', tempHigh: 17, tempLow: 8, rain: 55, sun: 8 },
      { month: 'Sep', tempHigh: 13, tempLow: 4, rain: 45, sun: 7 },
      { month: 'Oct', tempHigh: 7, tempLow: -1, rain: 42, sun: 5 },
      { month: 'Nov', tempHigh: 1, tempLow: -7, rain: 38, sun: 4 },
      { month: 'Dec', tempHigh: -4, tempLow: -12, rain: 35, sun: 3 }
    ]
  },
  'sierra-nevada': {
    city: 'Sierra Nevada',
    country: 'Spain',
    months: [
      { month: 'Jan', tempHigh: -1, tempLow: -8, rain: 45, sun: 5 },
      { month: 'Feb', tempHigh: 0, tempLow: -7, rain: 42, sun: 6 },
      { month: 'Mar', tempHigh: 3, tempLow: -4, rain: 40, sun: 6 },
      { month: 'Apr', tempHigh: 6, tempLow: -1, rain: 38, sun: 7 },
      { month: 'May', tempHigh: 11, tempLow: 3, rain: 30, sun: 8 },
      { month: 'Jun', tempHigh: 17, tempLow: 8, rain: 15, sun: 10 },
      { month: 'Jul', tempHigh: 22, tempLow: 12, rain: 5, sun: 11 },
      { month: 'Aug', tempHigh: 22, tempLow: 12, rain: 8, sun: 11 },
      { month: 'Sep', tempHigh: 16, tempLow: 7, rain: 20, sun: 8 },
      { month: 'Oct', tempHigh: 10, tempLow: 2, rain: 38, sun: 6 },
      { month: 'Nov', tempHigh: 4, tempLow: -3, rain: 48, sun: 5 },
      { month: 'Dec', tempHigh: 0, tempLow: -7, rain: 50, sun: 5 }
    ]
  }
};

const NEWS_ITEMS = [
  { title: 'Cortina d\'Ampezzo Completes 2026 Winter Olympics Venue Upgrades', summary: 'Cortina finishes major infrastructure improvements ahead of the 2026 Milan-Cortina Winter Olympics, including new lifts and expanded snowmaking systems across all competition venues.', date: '2025-03-15', url: '#' },
  { title: 'Record Early Snowfall Across the Alps Opens Season Early', summary: 'Heavy October snowfall across Austria, Switzerland, and France allows several major resorts to open weeks ahead of schedule, with base depths exceeding 1 meter above 2000m.', date: '2025-03-10', url: '#' },
  { title: 'FIS Announces New Junior Development Program for Alpine Nations', summary: 'The International Ski Federation launches a comprehensive junior development initiative across European alpine nations, focusing on grassroots racing programs and talent identification.', date: '2025-02-28', url: '#' },
  { title: 'Sustainable Skiing: Alpine Resorts Commit to Carbon Neutrality by 2030', summary: 'Major ski resorts across the Alps sign a joint declaration committing to carbon-neutral operations by 2030, including renewable energy for lifts and electric grooming machines.', date: '2025-02-15', url: '#' },
  { title: 'Nordic Countries Launch Cross-Border Ski Pass Initiative', summary: 'Norway, Sweden, and Finland announce a joint multi-resort ski pass covering Lillehammer, Åre, and Levi, making it easier for visitors to experience Scandinavian skiing across borders.', date: '2025-01-20', url: '#' }
];

const COUNTRIES = ['Austria', 'Switzerland', 'France', 'Italy', 'Norway', 'Sweden', 'Finland', 'Andorra', 'Slovenia', 'Bulgaria', 'Romania', 'Slovakia', 'Czech Republic', 'Poland', 'Georgia', 'Spain'];
