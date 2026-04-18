const SPORT_TYPE = 'padel';

const ACADEMIES = [
  {
    id: 'madrid-padel-academy',
    name: 'Madrid Padel Academy',
    country: 'Spain', countryFlag: '🇪🇸',
    city: 'Madrid', lat: 40.4168, lng: -3.7038,
    website: 'https://www.madridpadel.es', contact: '+34 91 456 7890', contactEmail: 'info@madridpadel.es',
    description: 'Spain\'s premier padel academy in the capital, training future World Padel Tour stars.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Landlocked city, no beach nearby' },
    priceRange: { from: 700, to: 2000, unit: 'week', display: '€700 - €2,000/week' },
    socialMedia: { instagram: '@madridpadel', facebook: 'https://facebook.com/madridpadel', twitter: '@madridpadel' },
    climate: 'madrid',
    facilities: 'Indoor padel courts, outdoor padel courts, panoramic court, pro shop, video analysis room, gym, racket testing lab, social area',
    courtSurfaces: ['Indoor padel court', 'Outdoor padel court', 'Panoramic court'],
    programs: [
      { name: 'WPT Preparation Camp', price: '€1,600/week', desc: 'Elite preparation for aspiring World Padel Tour players' },
      { name: 'Beginner Introduction', price: '€700/week', desc: 'Learn padel basics in the world capital of the sport' },
      { name: 'Tactical Masterclass', price: '€1,200/week', desc: 'Advanced tactical training with video analysis' }
    ],
    coaches: [
      { name: 'Fernando Belasteguín', credential: 'Former World No. 1', background: '16 consecutive years as world number one, now coaching the next generation', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Spanish', 'Portuguese'], instagram: '@ferbelasteguin' },
      { name: 'María José Alonso', credential: 'Spanish Padel Federation Master Coach', background: 'Former top 20 WPT player, 15 years coaching experience', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Spanish'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800', 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800'],
    upcomingCamps: [
      { name: 'Madrid Summer Padel', startDate: '2025-07-01', endDate: '2025-07-08', price: '€1,500', level: 'All levels' },
      { name: 'Pro Development Week', startDate: '2025-07-14', endDate: '2025-07-21', price: '€1,800', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Hotel Sport Madrid', pricePerWeek: 500, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Madrid Sport Apartments', pricePerWeek: 400, maxOccupancy: 3, bathType: 'ensuite', mealsIncluded: false }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Located in the sports district near Casa de Campo'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-01',
      spotsLeft: 24, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 8, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Bilingual school partnerships in Madrid',
      medicalStaff: true, safeguarding: 'Spanish child protection legislation compliant',
      airportPickup: true, mealPlan: 'Full board with Mediterranean diet',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Spanish'],
      emergencyProtocol: 'On-site medical staff, La Paz Hospital 15 minutes away'
    }
  },
  {
    id: 'barcelona-padel-centre',
    name: 'Barcelona Padel Centre',
    country: 'Spain', countryFlag: '🇪🇸',
    city: 'Barcelona', lat: 41.3851, lng: 2.1734,
    website: 'https://www.barcelonapadel.es', contact: '+34 93 567 8901', contactEmail: 'info@barcelonapadel.es',
    description: 'Mediterranean padel training in Barcelona, combining world-class coaching with coastal lifestyle.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 2, description: 'Barceloneta Beach 2 km from the centre' },
    priceRange: { from: 650, to: 1800, unit: 'week', display: '€650 - €1,800/week' },
    socialMedia: { instagram: '@bcnpadel', facebook: 'https://facebook.com/barcelonapadel', twitter: '@bcnpadel' },
    climate: 'barcelona',
    facilities: 'Indoor padel courts, outdoor padel courts, panoramic court, pro shop, video analysis, gym, racket testing, social lounge',
    courtSurfaces: ['Indoor padel court', 'Outdoor padel court', 'Panoramic court'],
    programs: [
      { name: 'Catalan Padel Experience', price: '€1,400/week', desc: 'Intensive padel training with Barcelona lifestyle' },
      { name: 'Junior Stars Programme', price: '€800/week', desc: 'Youth development for aspiring competitive players' }
    ],
    coaches: [
      { name: 'Pablo Lima', credential: 'WPT Certified Coach', background: 'Former world number 1, multiple WPT titles, now coaching full-time', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Spanish', 'Portuguese', 'Catalan'], instagram: '@paborlima' }
    ],
    photos: ['https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800'],
    upcomingCamps: [
      { name: 'Barcelona Beach & Padel', startDate: '2025-07-01', endDate: '2025-07-08', price: '€1,300', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Hotel Olympic Barcelona', pricePerWeek: 550, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Near the beach and training centre'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-01',
      spotsLeft: 20, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 8, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'International school coordination available',
      medicalStaff: true, safeguarding: 'Spanish safeguarding standards fully met',
      airportPickup: true, mealPlan: 'Full board Mediterranean cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Spanish', 'Catalan'],
      emergencyProtocol: 'Hospital del Mar 10 minutes away, on-site medic'
    }
  },
  {
    id: 'malaga-padel-school',
    name: 'Malaga Padel School',
    country: 'Spain', countryFlag: '🇪🇸',
    city: 'Malaga', lat: 36.7213, lng: -4.4214,
    website: 'https://www.malagapadel.es', contact: '+34 95 234 5678', contactEmail: 'info@malagapadel.es',
    description: 'Sun-soaked padel training on the Costa del Sol, offering year-round outdoor play.',
    ageGroups: ['Junior', 'Adult', 'Senior'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 1, description: 'Malagueta Beach 1 km from the academy' },
    priceRange: { from: 500, to: 1500, unit: 'week', display: '€500 - €1,500/week' },
    socialMedia: { instagram: '@malagapadel', facebook: 'https://facebook.com/malagapadel', twitter: '@malagapadel' },
    climate: 'malaga',
    facilities: 'Indoor padel courts, outdoor padel courts, panoramic court, pro shop, video analysis, gym, racket testing, terrace social area',
    courtSurfaces: ['Indoor padel court', 'Outdoor padel court', 'Panoramic court'],
    programs: [
      { name: 'Costa del Sol Camp', price: '€1,100/week', desc: 'Padel training in perfect weather conditions year-round' },
      { name: 'Social Padel Week', price: '€500/week', desc: 'Fun, social padel experience for all abilities' }
    ],
    coaches: [
      { name: 'Alejandra Salazar', credential: 'Spanish Padel Federation Level 3', background: 'Former WPT top 5 player, specialist in women\'s padel coaching', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Spanish'], instagram: '@alesalazar_padel' }
    ],
    photos: ['https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800'],
    upcomingCamps: [
      { name: 'Sunshine Padel Week', startDate: '2025-07-07', endDate: '2025-07-14', price: '€1,000', level: 'All levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Hotel Costa Sport', pricePerWeek: 400, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Beachfront hotel with pool'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-01',
      spotsLeft: 22, responseTime: '48h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 8, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Summer-only programmes, no school coordination needed',
      medicalStaff: true, safeguarding: 'Spanish child protection standards',
      airportPickup: true, mealPlan: 'Full board with Andalusian cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Spanish'],
      emergencyProtocol: 'Hospital Regional 15 minutes away, on-site first aid'
    }
  },
  {
    id: 'valencia-padel-academy',
    name: 'Valencia Padel Academy',
    country: 'Spain', countryFlag: '🇪🇸',
    city: 'Valencia', lat: 39.4699, lng: -0.3763,
    website: 'https://www.valenciapadel.es', contact: '+34 96 345 6789', contactEmail: 'info@valenciapadel.es',
    description: 'East coast Spanish padel excellence with Mediterranean climate and competitive pricing.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 3, description: 'Malvarrosa Beach 3 km from the academy' },
    priceRange: { from: 500, to: 1400, unit: 'week', display: '€500 - €1,400/week' },
    socialMedia: { instagram: '@valenciapadel', facebook: 'https://facebook.com/valenciapadel', twitter: '@valenciapadel' },
    climate: 'valencia',
    facilities: 'Indoor padel courts, outdoor padel courts, pro shop, video analysis, gym, racket testing, social area, recovery room',
    courtSurfaces: ['Indoor padel court', 'Outdoor padel court', 'Panoramic court'],
    programs: [
      { name: 'Valencia Intensive', price: '€1,100/week', desc: 'Full-time padel training with Spanish coaching methodology' },
      { name: 'Weekend Warriors', price: '€400/week', desc: 'Weekend-focused programme for working professionals' }
    ],
    coaches: [
      { name: 'Juan Martín Díaz', credential: 'WPT Certified Coach', background: 'Multiple WPT champion, regarded as one of the greatest padel players ever', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Spanish'], instagram: '@juanmartindiaz' }
    ],
    photos: ['https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800'],
    upcomingCamps: [
      { name: 'Valencia Summer Camp', startDate: '2025-07-14', endDate: '2025-07-21', price: '€1,050', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'apartment', label: 'Valencia Sport Apartments', pricePerWeek: 380, maxOccupancy: 3, bathType: 'ensuite', mealsIncluded: false }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Self-catering apartments near the City of Arts and Sciences'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-15',
      spotsLeft: 18, responseTime: '48h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 9, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Spanish school coordination available',
      medicalStaff: true, safeguarding: 'Full compliance with Spanish safeguarding laws',
      airportPickup: true, mealPlan: 'Full board with Valencian cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Spanish'],
      emergencyProtocol: 'Hospital La Fe 15 minutes away, medical staff on site'
    }
  },
  {
    id: 'rome-padel-club',
    name: 'Rome Padel Club',
    country: 'Italy', countryFlag: '🇮🇹',
    city: 'Rome', lat: 41.9028, lng: 12.4964,
    website: 'https://www.romepadelclub.it', contact: '+39 06 567 8901', contactEmail: 'info@romepadelclub.it',
    description: 'Italy\'s leading padel academy in the Eternal City, where the sport is growing fastest in Europe.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 25, description: 'Ostia beach 25 km from the centre' },
    priceRange: { from: 600, to: 1700, unit: 'week', display: '€600 - €1,700/week' },
    socialMedia: { instagram: '@romepadelclub', facebook: 'https://facebook.com/romepadelclub', twitter: '@romepadelclub' },
    climate: 'rome',
    facilities: 'Indoor padel courts, outdoor padel courts, panoramic court, pro shop, video analysis, gym, racket testing, social terrace',
    courtSurfaces: ['Indoor padel court', 'Outdoor padel court', 'Panoramic court'],
    programs: [
      { name: 'Roman Padel Experience', price: '€1,300/week', desc: 'Premium padel training in the heart of Italy' },
      { name: 'Beginners Welcome', price: '€600/week', desc: 'Introductory programme for padel newcomers' }
    ],
    coaches: [
      { name: 'Riccardo Ferrara', credential: 'Italian Padel Federation Level 3', background: 'Former Italian national champion, coaching padel across Europe for 10 years', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Italian', 'Spanish'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800'],
    upcomingCamps: [
      { name: 'Roman Summer Padel', startDate: '2025-07-01', endDate: '2025-07-08', price: '€1,200', level: 'All levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Hotel Sport Roma', pricePerWeek: 500, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'EUR district near Olympic facilities'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-01',
      spotsLeft: 20, responseTime: '48h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 8, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Italian international school partnerships',
      medicalStaff: true, safeguarding: 'CONI safeguarding protocols',
      airportPickup: true, mealPlan: 'Full board Italian cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Italian'],
      emergencyProtocol: 'Policlinico hospital 15 minutes away, on-site medic'
    }
  },
  {
    id: 'milan-padel-institute',
    name: 'Milan Padel Institute',
    country: 'Italy', countryFlag: '🇮🇹',
    city: 'Milan', lat: 45.4642, lng: 9.19,
    website: 'https://www.milanpadel.it', contact: '+39 02 678 9012', contactEmail: 'info@milanpadel.it',
    description: 'Northern Italy\'s top padel facility in the fashion capital, pioneering the Italian padel revolution.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach; Lake Como 50 km north' },
    priceRange: { from: 650, to: 1800, unit: 'week', display: '€650 - €1,800/week' },
    socialMedia: { instagram: '@milanpadel', facebook: 'https://facebook.com/milanpadel', twitter: '@milanpadel' },
    climate: 'milan',
    facilities: 'Indoor padel courts, outdoor padel courts, panoramic court, pro shop, video analysis, gym, racket testing, wellness centre',
    courtSurfaces: ['Indoor padel court', 'Outdoor padel court', 'Panoramic court'],
    programs: [
      { name: 'Milanese Padel Intensive', price: '€1,400/week', desc: 'High-intensity training with Italian coaching methods' },
      { name: 'Corporate Padel', price: '€600/week', desc: 'Team building and social padel for corporate groups' }
    ],
    coaches: [
      { name: 'Alessandro Notti', credential: 'Italian Padel Federation Level 2', background: 'Former professional player, coached Italian junior national team', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Italian'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800'],
    upcomingCamps: [
      { name: 'Milan Summer Padel', startDate: '2025-07-07', endDate: '2025-07-14', price: '€1,300', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Hotel Navigli Sport', pricePerWeek: 520, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Stylish Navigli district hotel'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-15',
      spotsLeft: 16, responseTime: '48h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 9, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'International school options in Milan',
      medicalStaff: true, safeguarding: 'Italian child protection standards met',
      airportPickup: true, mealPlan: 'Full board with nutritionist guidance',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Italian'],
      emergencyProtocol: 'San Raffaele Hospital 20 minutes away'
    }
  },
  {
    id: 'stockholm-padel-arena',
    name: 'Stockholm Padel Arena',
    country: 'Sweden', countryFlag: '🇸🇪',
    city: 'Stockholm', lat: 59.3293, lng: 18.0686,
    website: 'https://www.stockholmpadel.se', contact: '+46 8 234 5678', contactEmail: 'info@stockholmpadel.se',
    description: 'Scandinavia\'s largest padel academy, leading the Nordic padel boom with state-of-the-art indoor facilities.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 5, description: 'Stockholm archipelago beaches nearby' },
    priceRange: { from: 800, to: 2200, unit: 'week', display: '€800 - €2,200/week' },
    socialMedia: { instagram: '@stockholmpadel', facebook: 'https://facebook.com/stockholmpadel', twitter: '@sthlmpadel' },
    climate: 'stockholm',
    facilities: 'Indoor padel courts, panoramic court, pro shop, video analysis, gym, racket testing, social area, sauna',
    courtSurfaces: ['Indoor padel court', 'Panoramic court'],
    programs: [
      { name: 'Nordic Padel Camp', price: '€1,800/week', desc: 'Premium indoor training in Scandinavia\'s best padel facility' },
      { name: 'Beginner Bootcamp', price: '€800/week', desc: 'Fast-track programme to learn padel fundamentals' }
    ],
    coaches: [
      { name: 'Johan Bergeron', credential: 'Swedish Padel Association Master Coach', background: 'Sweden\'s top padel coach, trained multiple Swedish champions', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Swedish', 'Spanish'], instagram: '@johanbergeron' }
    ],
    photos: ['https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800'],
    upcomingCamps: [
      { name: 'Midsummer Padel Camp', startDate: '2025-07-01', endDate: '2025-07-08', price: '€1,700', level: 'All levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Hotel Sport Stockholm', pricePerWeek: 650, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Modern hotel in Södermalm'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-01',
      spotsLeft: 18, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 8, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Swedish international school partnerships',
      medicalStaff: true, safeguarding: 'Swedish child protection standards, full background checks',
      airportPickup: true, mealPlan: 'Full board with Scandinavian cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Swedish'],
      emergencyProtocol: 'Karolinska Hospital 15 minutes away, on-site medic'
    }
  },
  {
    id: 'gothenburg-padel-club',
    name: 'Gothenburg Padel Club',
    country: 'Sweden', countryFlag: '🇸🇪',
    city: 'Gothenburg', lat: 57.7089, lng: 11.9746,
    website: 'https://www.gothenburgpadel.se', contact: '+46 31 345 6789', contactEmail: 'info@gothenburgpadel.se',
    description: 'West coast Sweden\'s top padel club, combining Scandinavian design with world-class training.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: false,
    beach: { distance: 10, description: 'West coast beaches within 10 km' },
    priceRange: { from: 700, to: 1900, unit: 'week', display: '€700 - €1,900/week' },
    socialMedia: { instagram: '@gbgpadel', facebook: 'https://facebook.com/gothenburgpadel', twitter: '@gbgpadel' },
    climate: 'gothenburg',
    facilities: 'Indoor padel courts, outdoor padel courts, pro shop, video analysis, gym, racket testing, social area',
    courtSurfaces: ['Indoor padel court', 'Outdoor padel court'],
    programs: [
      { name: 'West Coast Intensive', price: '€1,500/week', desc: 'Focused padel training on Sweden\'s beautiful west coast' },
      { name: 'Youth Development', price: '€750/week', desc: 'Junior programme nurturing Sweden\'s next padel talents' }
    ],
    coaches: [
      { name: 'Erik Lindström', credential: 'Swedish Padel Association Level 2', background: 'Former Swedish national team player, youth coaching specialist', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Swedish'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800'],
    upcomingCamps: [
      { name: 'Gothenburg Summer Padel', startDate: '2025-07-14', endDate: '2025-07-21', price: '€1,400', level: 'Beginner' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Hotel Gothia', pricePerWeek: 580, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: false, notes: 'Central Gothenburg location'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-15',
      spotsLeft: 14, responseTime: '48h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 9, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Swedish school coordination available',
      medicalStaff: true, safeguarding: 'Swedish safeguarding standards met',
      airportPickup: true, mealPlan: 'Full board Scandinavian meals',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Swedish'],
      emergencyProtocol: 'Sahlgrenska Hospital 10 minutes away'
    }
  },
  {
    id: 'paris-padel-academy',
    name: 'Paris Padel Academy',
    country: 'France', countryFlag: '🇫🇷',
    city: 'Paris', lat: 48.8566, lng: 2.3522,
    website: 'https://www.parispadel.fr', contact: '+33 1 56 78 90 12', contactEmail: 'info@parispadel.fr',
    description: 'France\'s premier padel academy in the City of Light, leading the French padel revolution.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby' },
    priceRange: { from: 800, to: 2100, unit: 'week', display: '€800 - €2,100/week' },
    socialMedia: { instagram: '@parispadel', facebook: 'https://facebook.com/parispadel', twitter: '@parispadel' },
    climate: 'paris',
    facilities: 'Indoor padel courts, panoramic court, pro shop, video analysis, gym, racket testing, social area, restaurant',
    courtSurfaces: ['Indoor padel court', 'Panoramic court'],
    programs: [
      { name: 'French Padel Intensive', price: '€1,700/week', desc: 'Elite padel training with French national coaches' },
      { name: 'Discover Padel', price: '€800/week', desc: 'Introduction to padel for beginners in Paris' }
    ],
    coaches: [
      { name: 'Benjamin Tison', credential: 'French Padel Federation Master Coach', background: 'France\'s top-ranked player, Premier Padel tour experience', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'French', 'Spanish'], instagram: '@benjamintison' }
    ],
    photos: ['https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800'],
    upcomingCamps: [
      { name: 'Paris Summer Padel', startDate: '2025-07-01', endDate: '2025-07-08', price: '€1,600', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Hotel Sport Paris', pricePerWeek: 650, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Near Roland Garros and padel training centre'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-01',
      spotsLeft: 16, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 8, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'French international school coordination',
      medicalStaff: true, safeguarding: 'French Ministry of Sport safeguarding standards',
      airportPickup: true, mealPlan: 'Full board with French cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'French'],
      emergencyProtocol: 'Hôpital Européen Georges-Pompidou 15 minutes away'
    }
  },
  {
    id: 'lisbon-padel-centre',
    name: 'Lisbon Padel Centre',
    country: 'Portugal', countryFlag: '🇵🇹',
    city: 'Lisbon', lat: 38.7223, lng: -9.1393,
    website: 'https://www.lisbonpadel.pt', contact: '+351 21 345 6789', contactEmail: 'info@lisbonpadel.pt',
    description: 'Portugal\'s top padel academy in sunny Lisbon, combining Iberian padel passion with Atlantic lifestyle.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 5, description: 'Cascais and Estoril beaches within easy reach' },
    priceRange: { from: 500, to: 1400, unit: 'week', display: '€500 - €1,400/week' },
    socialMedia: { instagram: '@lisbonpadel', facebook: 'https://facebook.com/lisbonpadel', twitter: '@lisbonpadel' },
    climate: 'lisbon',
    facilities: 'Indoor padel courts, outdoor padel courts, panoramic court, pro shop, video analysis, gym, racket testing, social area',
    courtSurfaces: ['Indoor padel court', 'Outdoor padel court', 'Panoramic court'],
    programs: [
      { name: 'Portuguese Padel Camp', price: '€1,000/week', desc: 'Padel training with Atlantic breeze and Iberian passion' },
      { name: 'Padel & Surf Combo', price: '€1,200/week', desc: 'Unique programme combining padel and surfing' }
    ],
    coaches: [
      { name: 'Miguel Oliveira', credential: 'Portuguese Padel Federation Level 3', background: 'Former Portuguese national champion, 12 years coaching experience', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Portuguese', 'Spanish'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800'],
    upcomingCamps: [
      { name: 'Lisbon Summer Padel', startDate: '2025-07-07', endDate: '2025-07-14', price: '€950', level: 'All levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Hotel Sport Lisboa', pricePerWeek: 400, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Alfama district hotel with river views'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-01',
      spotsLeft: 20, responseTime: '48h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 8, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'International school partnerships in Lisbon',
      medicalStaff: true, safeguarding: 'Portuguese child protection standards',
      airportPickup: true, mealPlan: 'Full board with Portuguese cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Portuguese'],
      emergencyProtocol: 'Hospital Santa Maria 10 minutes away'
    }
  },
  {
    id: 'brussels-padel-hub',
    name: 'Brussels Padel Hub',
    country: 'Belgium', countryFlag: '🇧🇪',
    city: 'Brussels', lat: 50.8503, lng: 4.3517,
    website: 'https://www.brusselspadel.be', contact: '+32 2 345 6789', contactEmail: 'info@brusselspadel.be',
    description: 'Belgium\'s premier padel centre in the European capital, serving the growing Benelux padel community.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach; Belgian coast 100 km away' },
    priceRange: { from: 700, to: 1800, unit: 'week', display: '€700 - €1,800/week' },
    socialMedia: { instagram: '@brusselspadel', facebook: 'https://facebook.com/brusselspadel', twitter: '@brusselspadel' },
    climate: 'brussels',
    facilities: 'Indoor padel courts, panoramic court, pro shop, video analysis, gym, racket testing, social area, bar',
    courtSurfaces: ['Indoor padel court', 'Panoramic court'],
    programs: [
      { name: 'European Padel Camp', price: '€1,400/week', desc: 'International padel training in the heart of Europe' },
      { name: 'After-Work Padel', price: '€500/week', desc: 'Evening padel programme for professionals' }
    ],
    coaches: [
      { name: 'Jérémy Scatena', credential: 'Belgian Padel Federation Level 3', background: 'Franco-Belgian coach with WPT coaching experience', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'French', 'Dutch', 'Spanish'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800'],
    upcomingCamps: [
      { name: 'Brussels Summer Padel', startDate: '2025-07-01', endDate: '2025-07-08', price: '€1,300', level: 'Beginner' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Hotel EU Quarter', pricePerWeek: 550, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'European Quarter location with excellent transport links'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-15',
      spotsLeft: 14, responseTime: '48h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 9, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'European and international school options',
      medicalStaff: true, safeguarding: 'Belgian child protection protocols',
      airportPickup: true, mealPlan: 'Full board with Belgian and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'French', 'Dutch'],
      emergencyProtocol: 'UZ Brussel Hospital 15 minutes away'
    }
  },
  {
    id: 'london-padel-academy',
    name: 'London Padel Academy',
    country: 'UK', countryFlag: '🇬🇧',
    city: 'London', lat: 51.5074, lng: -0.1278,
    website: 'https://www.londonpadel.co.uk', contact: '+44 20 7123 4567', contactEmail: 'info@londonpadel.co.uk',
    description: 'The UK\'s leading padel academy, bringing the world\'s fastest-growing sport to London.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby' },
    priceRange: { from: 800, to: 2200, unit: 'week', display: '£800 - £2,200/week' },
    socialMedia: { instagram: '@londonpadel', facebook: 'https://facebook.com/londonpadel', twitter: '@londonpadel' },
    climate: 'london',
    facilities: 'Indoor padel courts, panoramic court, pro shop, video analysis, gym, racket testing, social area, café',
    courtSurfaces: ['Indoor padel court', 'Panoramic court'],
    programs: [
      { name: 'London Padel Intensive', price: '£1,800/week', desc: 'Full-time padel training in the UK\'s premier facility' },
      { name: 'Introduction to Padel', price: '£800/week', desc: 'Perfect for tennis players transitioning to padel' }
    ],
    coaches: [
      { name: 'Arturo Coello Jr', credential: 'LTA Padel Level 4 Coach', background: 'Spanish-trained coach bringing WPT methodology to the UK', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Spanish'], instagram: '@arturocoellojr' }
    ],
    photos: ['https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800'],
    upcomingCamps: [
      { name: 'London Summer Padel', startDate: '2025-07-14', endDate: '2025-07-21', price: '£1,700', level: 'All levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Sport Hotel London', pricePerWeek: 650, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'West London location near the padel centre'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-01',
      spotsLeft: 16, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 8, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'London school coordination available',
      medicalStaff: true, safeguarding: 'DBS-checked coaches, LTA safeguarding policy',
      airportPickup: true, mealPlan: 'Full board with sports nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Spanish'],
      emergencyProtocol: 'Chelsea and Westminster Hospital 10 minutes away'
    }
  }
];

const CLIMATE_DATA = {
  'madrid': {
    avgTemp: { summer: 33, winter: 6 },
    rainfall: { summer: 'Very low', winter: 'Moderate' },
    humidity: 'Low',
    bestMonths: ['May', 'June', 'September', 'October'],
    description: 'Continental Mediterranean climate with hot, dry summers'
  },
  'barcelona': {
    avgTemp: { summer: 29, winter: 10 },
    rainfall: { summer: 'Low', winter: 'Moderate' },
    humidity: 'Moderate',
    bestMonths: ['May', 'June', 'July', 'August', 'September'],
    description: 'Mediterranean climate with mild winters and warm summers'
  },
  'malaga': {
    avgTemp: { summer: 31, winter: 12 },
    rainfall: { summer: 'Very low', winter: 'Moderate' },
    humidity: 'Moderate',
    bestMonths: ['March', 'April', 'May', 'June', 'September', 'October', 'November'],
    description: 'Subtropical Mediterranean climate with very mild winters'
  },
  'valencia': {
    avgTemp: { summer: 30, winter: 11 },
    rainfall: { summer: 'Very low', winter: 'Moderate' },
    humidity: 'Moderate',
    bestMonths: ['April', 'May', 'June', 'September', 'October'],
    description: 'Mediterranean climate with warm, dry summers'
  },
  'rome': {
    avgTemp: { summer: 31, winter: 8 },
    rainfall: { summer: 'Low', winter: 'Moderate' },
    humidity: 'Moderate',
    bestMonths: ['April', 'May', 'June', 'September', 'October'],
    description: 'Mediterranean climate with hot, dry summers'
  },
  'milan': {
    avgTemp: { summer: 29, winter: 3 },
    rainfall: { summer: 'Moderate', winter: 'Low' },
    humidity: 'High',
    bestMonths: ['April', 'May', 'June', 'September', 'October'],
    description: 'Humid subtropical climate with hot summers and cool winters'
  },
  'stockholm': {
    avgTemp: { summer: 22, winter: -1 },
    rainfall: { summer: 'Moderate', winter: 'Low' },
    humidity: 'Moderate',
    bestMonths: ['May', 'June', 'July', 'August'],
    description: 'Continental climate with long summer days and cold winters'
  },
  'gothenburg': {
    avgTemp: { summer: 20, winter: 1 },
    rainfall: { summer: 'Moderate', winter: 'High' },
    humidity: 'High',
    bestMonths: ['May', 'June', 'July', 'August'],
    description: 'Oceanic climate influenced by the North Sea'
  },
  'paris': {
    avgTemp: { summer: 25, winter: 5 },
    rainfall: { summer: 'Moderate', winter: 'Moderate' },
    humidity: 'Moderate',
    bestMonths: ['May', 'June', 'July', 'August', 'September'],
    description: 'Oceanic climate with warm summers and cool winters'
  },
  'lisbon': {
    avgTemp: { summer: 28, winter: 12 },
    rainfall: { summer: 'Very low', winter: 'High' },
    humidity: 'Moderate',
    bestMonths: ['April', 'May', 'June', 'July', 'August', 'September', 'October'],
    description: 'Mediterranean climate with Atlantic influence'
  },
  'brussels': {
    avgTemp: { summer: 22, winter: 3 },
    rainfall: { summer: 'Moderate', winter: 'Moderate' },
    humidity: 'High',
    bestMonths: ['May', 'June', 'July', 'August'],
    description: 'Oceanic climate with mild temperatures and frequent rainfall'
  },
  'london': {
    avgTemp: { summer: 22, winter: 5 },
    rainfall: { summer: 'Moderate', winter: 'Moderate' },
    humidity: 'High',
    bestMonths: ['May', 'June', 'July', 'August', 'September'],
    description: 'Temperate maritime climate with mild temperatures year-round'
  }
};

const NEWS_ITEMS = [
  {
    title: 'Padel Becomes the Fastest-Growing Sport in Europe',
    date: '2025-01-10',
    summary: 'New statistics confirm padel as Europe\'s fastest-growing racquet sport, with over 25 million players worldwide.',
    link: '#'
  },
  {
    title: 'Sweden Opens 500th Padel Court',
    date: '2025-02-18',
    summary: 'Sweden celebrates the opening of its 500th padel court, making it the country with the most courts per capita outside Spain.',
    link: '#'
  },
  {
    title: 'Premier Padel Tour Announces New European Stops',
    date: '2025-03-15',
    summary: 'The Premier Padel Tour adds new tournament stops in London, Milan, and Stockholm for the upcoming season.',
    link: '#'
  },
  {
    title: 'Padel to Be Considered for 2032 Olympic Games',
    date: '2025-04-20',
    summary: 'The International Padel Federation confirms discussions with the IOC about including padel in the Brisbane 2032 Olympics.',
    link: '#'
  },
  {
    title: 'UK Padel Participation Doubles in One Year',
    date: '2025-05-05',
    summary: 'The LTA reports that padel participation in the UK has doubled, with new courts being built across the country.',
    link: '#'
  }
];

const COUNTRIES = ['Spain', 'Italy', 'Sweden', 'France', 'Portugal', 'Belgium', 'UK'];
