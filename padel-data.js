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
  },
  {
    id: 'helsinki-padel-academy',
    name: 'Helsinki Padel Academy',
    country: 'Finland', countryFlag: '🇫🇮',
    city: 'Helsinki', lat: 60.1699, lng: 24.9384,
    website: 'https://www.helsinkipadel.fi', contact: '+358 9 123 4567', contactEmail: 'info@helsinkipadel.fi',
    description: 'Finland\'s top padel training centre, offering world-class indoor facilities in the heart of Helsinki.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 5, description: 'Helsinki waterfront beaches nearby' },
    priceRange: { from: 750, to: 2100, unit: 'week', display: '€750 - €2,100/week' },
    socialMedia: { instagram: '@helsinkipadel', facebook: 'https://facebook.com/helsinkipadel', twitter: '@helsinkipadel' },
    climate: 'helsinki',
    facilities: 'Indoor padel courts, panoramic court, sauna, gym, video analysis room, pro shop, lounge area',
    courtSurfaces: ['Indoor padel court', 'Panoramic court'],
    programs: [
      { name: 'Nordic Padel Intensive', price: '€1,500/week', desc: 'Intensive padel training with Finnish coaching methodology' },
      { name: 'Beginner Padel Course', price: '€750/week', desc: 'Learn padel fundamentals in a supportive environment' }
    ],
    coaches: [
      { name: 'Mikko Virtanen', credential: 'Finnish Padel Federation Head Coach', background: 'Former national champion with 10 years coaching experience', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Finnish', 'Swedish'], instagram: '@mikkopadel' }
    ],
    photos: ['https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800'],
    upcomingCamps: [
      { name: 'Helsinki Summer Padel', startDate: '2026-06-15', endDate: '2026-06-22', price: '€1,400', level: 'All levels' },
      { name: 'Nordic Winter Camp', startDate: '2027-01-10', endDate: '2027-01-17', price: '€1,600', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Sport Hotel Helsinki', pricePerWeek: 550, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Helsinki Sport Apartments', pricePerWeek: 420, maxOccupancy: 3, bathType: 'ensuite', mealsIncluded: false }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Central Helsinki location with excellent public transport'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-06-01',
      spotsLeft: 18, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 8, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Finnish international school partnerships available',
      medicalStaff: true, safeguarding: 'Finnish child welfare standards compliant',
      airportPickup: true, mealPlan: 'Full board with Nordic cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Finnish', 'Swedish'],
      emergencyProtocol: 'HUS Helsinki University Hospital 10 minutes away'
    }
  },
  {
    id: 'copenhagen-padel-centre',
    name: 'Copenhagen Padel Centre',
    country: 'Denmark', countryFlag: '🇩🇰',
    city: 'Copenhagen', lat: 55.6761, lng: 12.5683,
    website: 'https://www.copenhagenpadel.dk', contact: '+45 33 12 34 56', contactEmail: 'info@copenhagenpadel.dk',
    description: 'Denmark\'s premier padel facility, combining Scandinavian design with expert coaching in Copenhagen.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 8, description: 'Amager Strandpark beach accessible by metro' },
    priceRange: { from: 800, to: 2200, unit: 'week', display: '€800 - €2,200/week' },
    socialMedia: { instagram: '@copenhagenpadel', facebook: 'https://facebook.com/copenhagenpadel', twitter: '@cphpadel' },
    climate: 'copenhagen',
    facilities: 'Indoor padel courts, outdoor padel courts, panoramic court, gym, video analysis, pro shop, café, recovery zone',
    courtSurfaces: ['Indoor padel court', 'Outdoor padel court', 'Panoramic court'],
    programs: [
      { name: 'Scandinavian Padel Camp', price: '€1,600/week', desc: 'High-intensity padel training with Danish and Spanish coaches' },
      { name: 'Padel Beginners Week', price: '€800/week', desc: 'Introduction to padel for newcomers to the sport' }
    ],
    coaches: [
      { name: 'Lars Christensen', credential: 'Danish Padel Federation Level 3 Coach', background: 'Former Danish national team player with WPT experience', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Danish', 'Spanish'], instagram: '@larspadel' }
    ],
    photos: ['https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800'],
    upcomingCamps: [
      { name: 'Copenhagen Summer Smash', startDate: '2026-07-06', endDate: '2026-07-13', price: '€1,500', level: 'All levels' },
      { name: 'Winter Indoor Intensive', startDate: '2027-02-01', endDate: '2027-02-08', price: '€1,700', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Hotel Sport Copenhagen', pricePerWeek: 600, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'hostel', label: 'Copenhagen Sport Hostel', pricePerWeek: 350, maxOccupancy: 3, bathType: 'shared', mealsIncluded: false }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Located near Nørrebro with bike-friendly access'
    },
    availability: {
      status: 'limited',
      nextIntake: '2026-07-01',
      spotsLeft: 10, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 8, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Danish international school options available',
      medicalStaff: true, safeguarding: 'Danish child protection legislation compliant',
      airportPickup: true, mealPlan: 'Full board with Nordic and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Danish'],
      emergencyProtocol: 'Rigshospitalet Hospital 15 minutes away'
    }
  },
  {
    id: 'munich-padel-academy',
    name: 'Munich Padel Academy',
    country: 'Germany', countryFlag: '🇩🇪',
    city: 'Munich', lat: 48.1351, lng: 11.582,
    website: 'https://www.munichpadel.de', contact: '+49 89 123 4567', contactEmail: 'info@munichpadel.de',
    description: 'Germany\'s leading padel academy in Munich, blending German precision with Spanish padel tradition.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby' },
    priceRange: { from: 750, to: 2100, unit: 'week', display: '€750 - €2,100/week' },
    socialMedia: { instagram: '@munichpadel', facebook: 'https://facebook.com/munichpadel', twitter: '@munichpadel' },
    climate: 'munich',
    facilities: 'Indoor padel courts, outdoor padel courts, panoramic court, fitness centre, video analysis, racket shop, wellness area',
    courtSurfaces: ['Indoor padel court', 'Outdoor padel court', 'Panoramic court'],
    programs: [
      { name: 'German Padel Masterclass', price: '€1,500/week', desc: 'Advanced padel training with tactical focus and video analysis' },
      { name: 'Padel Fundamentals', price: '€750/week', desc: 'Structured beginner programme with progressive skill development' },
      { name: 'Competition Preparation', price: '€1,300/week', desc: 'Tournament-focused training for competitive players' }
    ],
    coaches: [
      { name: 'Stefan Müller', credential: 'German Padel Association Master Coach', background: 'Former Bundesliga padel champion with coaching certifications from Spain', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'German', 'Spanish'], instagram: '@stefanpadel' },
      { name: 'Ana García', credential: 'FEP Level 3 Padel Coach', background: 'Spanish coach with 8 years of WPT training experience', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Spanish', 'German'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800', 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800'],
    upcomingCamps: [
      { name: 'Munich Summer Padel Camp', startDate: '2026-07-20', endDate: '2026-07-27', price: '€1,400', level: 'All levels' },
      { name: 'Oktoberfest Padel Week', startDate: '2026-09-21', endDate: '2026-09-28', price: '€1,500', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Sport Hotel Munich', pricePerWeek: 550, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Munich Sport Apartments', pricePerWeek: 430, maxOccupancy: 3, bathType: 'ensuite', mealsIncluded: false }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Schwabing district with easy U-Bahn access to the academy'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-06-15',
      spotsLeft: 20, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 8, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'German and international school partnerships in Munich',
      medicalStaff: true, safeguarding: 'German youth protection law (JuSchG) compliant',
      airportPickup: true, mealPlan: 'Full board with Bavarian and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'German', 'Spanish'],
      emergencyProtocol: 'Klinikum rechts der Isar Hospital 12 minutes away'
    }
  },
  {
    id: 'vienna-padel-club',
    name: 'Vienna Padel Club',
    country: 'Austria', countryFlag: '🇦🇹',
    city: 'Vienna', lat: 48.2082, lng: 16.3738,
    website: 'https://www.viennapadel.at', contact: '+43 1 234 5678', contactEmail: 'info@viennapadel.at',
    description: 'Austria\'s finest padel club, offering premium training facilities in the elegant city of Vienna.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby' },
    priceRange: { from: 700, to: 2000, unit: 'week', display: '€700 - €2,000/week' },
    socialMedia: { instagram: '@viennapadel', facebook: 'https://facebook.com/viennapadel', twitter: '@viennapadel' },
    climate: 'vienna',
    facilities: 'Indoor padel courts, outdoor padel courts, fitness studio, video analysis, pro shop, wellness spa, restaurant',
    courtSurfaces: ['Indoor padel court', 'Outdoor padel court', 'Panoramic court'],
    programs: [
      { name: 'Vienna Padel Intensive', price: '€1,400/week', desc: 'Comprehensive padel training combining technique, tactics and match play' },
      { name: 'Padel Introduction', price: '€700/week', desc: 'Perfect for beginners looking to discover padel in a premium setting' }
    ],
    coaches: [
      { name: 'Thomas Berger', credential: 'Austrian Padel Federation Senior Coach', background: 'Pioneer of padel in Austria with coaching experience across Europe', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'German'], instagram: '@thomaspadel' }
    ],
    photos: ['https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800'],
    upcomingCamps: [
      { name: 'Vienna Spring Padel', startDate: '2026-04-13', endDate: '2026-04-20', price: '€1,300', level: 'All levels' },
      { name: 'Alpine Padel Week', startDate: '2027-03-01', endDate: '2027-03-08', price: '€1,500', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Sport Hotel Vienna', pricePerWeek: 520, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Vienna Sport Apartments', pricePerWeek: 400, maxOccupancy: 3, bathType: 'ensuite', mealsIncluded: false }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Prater district with green surroundings and tram access'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-04-01',
      spotsLeft: 16, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 8, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Vienna international school options available',
      medicalStaff: true, safeguarding: 'Austrian child and youth welfare compliant',
      airportPickup: true, mealPlan: 'Full board with Austrian and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'German'],
      emergencyProtocol: 'AKH Vienna General Hospital 15 minutes away'
    }
  },
  {
    id: 'london-padel-club',
    name: 'London Padel Club',
    country: 'UK', countryFlag: '🇬🇧',
    city: 'London', lat: 51.5074, lng: -0.1278,
    website: 'https://www.londonpadelclub.co.uk', contact: '+44 20 7890 1234', contactEmail: 'info@londonpadelclub.co.uk',
    description: 'A premium padel club in East London, delivering high-performance training and community padel experiences.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: false,
    beach: { distance: null, description: 'No beach nearby' },
    priceRange: { from: 850, to: 2300, unit: 'week', display: '£850 - £2,300/week' },
    socialMedia: { instagram: '@londonpadelclub', facebook: 'https://facebook.com/londonpadelclub', twitter: '@londonpadelclub' },
    climate: 'london',
    facilities: 'Indoor padel courts, panoramic court, fitness suite, video analysis studio, racket lab, members lounge',
    courtSurfaces: ['Indoor padel court', 'Panoramic court'],
    programs: [
      { name: 'Elite Padel Programme', price: '£2,000/week', desc: 'High-performance padel training for competitive players' },
      { name: 'Social Padel Course', price: '£850/week', desc: 'Fun and social approach to learning padel' }
    ],
    coaches: [
      { name: 'Carlos Rodríguez', credential: 'FEP Level 3 Coach', background: 'Spanish padel coach with Premier Padel Tour experience, now based in London', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Spanish'], instagram: '@carlospadellondon' }
    ],
    photos: ['https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800'],
    upcomingCamps: [
      { name: 'London City Padel Camp', startDate: '2026-08-03', endDate: '2026-08-10', price: '£1,800', level: 'All levels' },
      { name: 'New Year Padel Intensive', startDate: '2027-01-04', endDate: '2027-01-11', price: '£2,100', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'East London Sport Hotel', pricePerWeek: 700, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Stratford area with Olympic Park nearby'
    },
    availability: {
      status: 'limited',
      nextIntake: '2026-08-01',
      spotsLeft: 8, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 9, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'London school coordination available',
      medicalStaff: true, safeguarding: 'DBS-checked coaches, LTA safeguarding policy',
      airportPickup: true, mealPlan: 'Full board with sports nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Spanish'],
      emergencyProtocol: 'Royal London Hospital 10 minutes away'
    }
  },
  {
    id: 'dublin-padel-centre',
    name: 'Dublin Padel Centre',
    country: 'Ireland', countryFlag: '🇮🇪',
    city: 'Dublin', lat: 53.3498, lng: -6.2603,
    website: 'https://www.dublinpadel.ie', contact: '+353 1 234 5678', contactEmail: 'info@dublinpadel.ie',
    description: 'Ireland\'s first dedicated padel training centre, bringing world-class padel coaching to Dublin.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 12, description: 'Sandymount Strand and Dublin Bay beaches' },
    priceRange: { from: 700, to: 1900, unit: 'week', display: '€700 - €1,900/week' },
    socialMedia: { instagram: '@dublinpadel', facebook: 'https://facebook.com/dublinpadel', twitter: '@dublinpadel' },
    climate: 'dublin',
    facilities: 'Indoor padel courts, outdoor padel courts, gym, video analysis room, pro shop, social area, café',
    courtSurfaces: ['Indoor padel court', 'Outdoor padel court'],
    programs: [
      { name: 'Irish Padel Intensive', price: '€1,400/week', desc: 'Comprehensive padel training programme for all levels' },
      { name: 'Padel Discovery Week', price: '€700/week', desc: 'Try padel for the first time with expert coaching' }
    ],
    coaches: [
      { name: 'Sean O\'Brien', credential: 'Padel Ireland Level 3 Coach', background: 'Former Irish tennis champion who transitioned to padel coaching', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Irish'], instagram: '@seanpadelie' }
    ],
    photos: ['https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800'],
    upcomingCamps: [
      { name: 'Dublin Summer Padel', startDate: '2026-06-22', endDate: '2026-06-29', price: '€1,300', level: 'All levels' },
      { name: 'St Patrick\'s Padel Camp', startDate: '2027-03-15', endDate: '2027-03-22', price: '€1,400', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Dublin Sport Hotel', pricePerWeek: 500, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'hostel', label: 'Dublin Padel Hostel', pricePerWeek: 300, maxOccupancy: 3, bathType: 'shared', mealsIncluded: false }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Docklands area with DART rail access'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-06-01',
      spotsLeft: 22, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 8, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Irish and international school partnerships',
      medicalStaff: true, safeguarding: 'Irish Children First Act compliant',
      airportPickup: true, mealPlan: 'Full board with Irish and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Irish'],
      emergencyProtocol: 'St Vincent\'s University Hospital 12 minutes away'
    }
  },
  {
    id: 'warsaw-padel-academy',
    name: 'Warsaw Padel Academy',
    country: 'Poland', countryFlag: '🇵🇱',
    city: 'Warsaw', lat: 52.2297, lng: 21.0122,
    website: 'https://www.warsawpadel.pl', contact: '+48 22 123 4567', contactEmail: 'info@warsawpadel.pl',
    description: 'Poland\'s premier padel academy, bringing professional padel training to the rapidly growing Polish padel community.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby' },
    priceRange: { from: 550, to: 1500, unit: 'week', display: '€550 - €1,500/week' },
    socialMedia: { instagram: '@warsawpadel', facebook: 'https://facebook.com/warsawpadel', twitter: '@warsawpadel' },
    climate: 'warsaw',
    facilities: 'Indoor padel courts, outdoor padel courts, panoramic court, gym, video analysis, pro shop, players lounge',
    courtSurfaces: ['Indoor padel court', 'Outdoor padel court', 'Panoramic court'],
    programs: [
      { name: 'Polish Padel Intensive', price: '€1,200/week', desc: 'Full-time padel training with Spanish methodology adapted for Polish players' },
      { name: 'Padel Starter Programme', price: '€550/week', desc: 'Affordable entry into padel with quality coaching' }
    ],
    coaches: [
      { name: 'Jakub Kowalski', credential: 'Polish Padel Federation Level 3 Coach', background: 'Poland\'s first certified padel coach with training in Barcelona', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Polish', 'Spanish'], instagram: '@jakubpadel' }
    ],
    photos: ['https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800'],
    upcomingCamps: [
      { name: 'Warsaw Summer Camp', startDate: '2026-07-13', endDate: '2026-07-20', price: '€1,100', level: 'All levels' },
      { name: 'Winter Padel Academy', startDate: '2027-01-18', endDate: '2027-01-25', price: '€1,200', level: 'All levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Sport Hotel Warsaw', pricePerWeek: 350, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Warsaw Sport Apartments', pricePerWeek: 280, maxOccupancy: 3, bathType: 'ensuite', mealsIncluded: false }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Mokotów district with metro access to the academy'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-06-01',
      spotsLeft: 25, responseTime: '48h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 8, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Polish and international school options in Warsaw',
      medicalStaff: true, safeguarding: 'Polish child protection regulations compliant',
      airportPickup: true, mealPlan: 'Full board with Polish and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Polish'],
      emergencyProtocol: 'Central Clinical Hospital MSWiA 10 minutes away'
    }
  },
  {
    id: 'prague-padel-club',
    name: 'Prague Padel Club',
    country: 'Czech Republic', countryFlag: '🇨🇿',
    city: 'Prague', lat: 50.0755, lng: 14.4378,
    website: 'https://www.praguepadel.cz', contact: '+420 222 123 456', contactEmail: 'info@praguepadel.cz',
    description: 'The Czech Republic\'s top padel club, combining historic Prague charm with modern padel training facilities.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby' },
    priceRange: { from: 550, to: 1500, unit: 'week', display: '€550 - €1,500/week' },
    socialMedia: { instagram: '@praguepadel', facebook: 'https://facebook.com/praguepadel', twitter: '@praguepadel' },
    climate: 'prague',
    facilities: 'Indoor padel courts, outdoor padel courts, gym, video analysis, racket shop, bistro, recovery room',
    courtSurfaces: ['Indoor padel court', 'Outdoor padel court'],
    programs: [
      { name: 'Prague Padel Camp', price: '€1,200/week', desc: 'Intensive padel camp in the heart of Central Europe' },
      { name: 'Padel Discovery Course', price: '€550/week', desc: 'Introduction to padel with personalised coaching' }
    ],
    coaches: [
      { name: 'Tomáš Novák', credential: 'Czech Padel Association Head Coach', background: 'Former Czech tennis professional who became a padel pioneer in Central Europe', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Czech', 'Spanish'], instagram: '@tomaspadel' }
    ],
    photos: ['https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800'],
    upcomingCamps: [
      { name: 'Prague Summer Padel', startDate: '2026-06-29', endDate: '2026-07-06', price: '€1,100', level: 'All levels' },
      { name: 'Prague Winter Padel', startDate: '2027-02-15', endDate: '2027-02-22', price: '€1,200', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Sport Hotel Prague', pricePerWeek: 380, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Prague Sport Apartments', pricePerWeek: 300, maxOccupancy: 3, bathType: 'ensuite', mealsIncluded: false }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Vinohrady district with tram access to the club'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-06-15',
      spotsLeft: 20, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 8, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Czech and international school options available',
      medicalStaff: true, safeguarding: 'Czech child protection legislation compliant',
      airportPickup: true, mealPlan: 'Full board with Czech and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Czech'],
      emergencyProtocol: 'Motol University Hospital 15 minutes away'
    }
  },
  {
    id: 'oslo-padel-centre',
    name: 'Oslo Padel Centre',
    country: 'Norway', countryFlag: '🇳🇴',
    city: 'Oslo', lat: 59.9139, lng: 10.7522,
    website: 'https://www.oslopadel.no', contact: '+47 21 23 45 67', contactEmail: 'info@oslopadel.no',
    description: 'Norway\'s leading padel centre, offering year-round indoor training in Oslo with Scandinavian coaching excellence.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 15, description: 'Oslo fjord beaches accessible in summer' },
    priceRange: { from: 900, to: 2400, unit: 'week', display: '€900 - €2,400/week' },
    socialMedia: { instagram: '@oslopadel', facebook: 'https://facebook.com/oslopadel', twitter: '@oslopadel' },
    climate: 'oslo',
    facilities: 'Indoor padel courts, panoramic court, gym, sauna, video analysis room, pro shop, café',
    courtSurfaces: ['Indoor padel court', 'Panoramic court'],
    programs: [
      { name: 'Nordic Padel Elite', price: '€1,800/week', desc: 'Elite-level padel training with Norwegian and Spanish coaches' },
      { name: 'Padel for All', price: '€900/week', desc: 'Inclusive padel programme for beginners and social players' }
    ],
    coaches: [
      { name: 'Erik Johansen', credential: 'Norwegian Padel Federation Head Coach', background: 'Former Norwegian national team player with WPT coaching certification', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Norwegian', 'Spanish'], instagram: '@erikpadel' }
    ],
    photos: ['https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800'],
    upcomingCamps: [
      { name: 'Oslo Midnight Sun Camp', startDate: '2026-06-08', endDate: '2026-06-15', price: '€1,700', level: 'All levels' },
      { name: 'Winter Fjord Padel', startDate: '2027-02-08', endDate: '2027-02-15', price: '€1,900', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Sport Hotel Oslo', pricePerWeek: 650, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Oslo Sport Apartments', pricePerWeek: 500, maxOccupancy: 3, bathType: 'ensuite', mealsIncluded: false }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Grünerløkka district with tram and metro access'
    },
    availability: {
      status: 'waitlist',
      nextIntake: '2026-06-01',
      spotsLeft: 0, responseTime: '48h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 8, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Norwegian international school partnerships available',
      medicalStaff: true, safeguarding: 'Norwegian child welfare legislation compliant',
      airportPickup: true, mealPlan: 'Full board with Norwegian and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Norwegian'],
      emergencyProtocol: 'Oslo University Hospital 10 minutes away'
    }
  },
  {
    id: 'zurich-padel-academy',
    name: 'Zurich Padel Academy',
    country: 'Switzerland', countryFlag: '🇨🇭',
    city: 'Zurich', lat: 47.3769, lng: 8.5417,
    website: 'https://www.zurichpadel.ch', contact: '+41 44 123 4567', contactEmail: 'info@zurichpadel.ch',
    description: 'Switzerland\'s premium padel academy in Zurich, combining Swiss precision with Spanish padel expertise.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Lake Zurich swimming areas nearby' },
    priceRange: { from: 1000, to: 2800, unit: 'week', display: '€1,000 - €2,800/week' },
    socialMedia: { instagram: '@zurichpadel', facebook: 'https://facebook.com/zurichpadel', twitter: '@zurichpadel' },
    climate: 'zurich',
    facilities: 'Indoor padel courts, outdoor padel courts, panoramic court, fitness centre, wellness spa, video analysis, pro shop, restaurant',
    courtSurfaces: ['Indoor padel court', 'Outdoor padel court', 'Panoramic court'],
    programs: [
      { name: 'Swiss Padel Excellence', price: '€2,200/week', desc: 'Premium padel training with world-class facilities and coaching' },
      { name: 'Padel Starter Course', price: '€1,000/week', desc: 'High-quality introduction to padel in a premium environment' },
      { name: 'Competition Track', price: '€1,800/week', desc: 'Tournament preparation for competitive Swiss and European padel circuits' }
    ],
    coaches: [
      { name: 'Marco Bernasconi', credential: 'Swiss Padel Association Master Coach', background: 'Swiss-Italian coach trained at top Spanish padel academies', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'German', 'French', 'Italian', 'Spanish'], instagram: '@marcopadel' }
    ],
    photos: ['https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800'],
    upcomingCamps: [
      { name: 'Zurich Summer Padel', startDate: '2026-07-27', endDate: '2026-08-03', price: '€2,000', level: 'All levels' },
      { name: 'Alpine Spring Camp', startDate: '2027-04-05', endDate: '2027-04-12', price: '€2,200', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Sport Hotel Zurich', pricePerWeek: 750, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Zurich Sport Apartments', pricePerWeek: 600, maxOccupancy: 3, bathType: 'ensuite', mealsIncluded: false }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Enge district with lake views and tram access'
    },
    availability: {
      status: 'limited',
      nextIntake: '2026-07-15',
      spotsLeft: 6, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 9, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Swiss international school partnerships in Zurich',
      medicalStaff: true, safeguarding: 'Swiss child protection standards compliant',
      airportPickup: true, mealPlan: 'Full board with Swiss and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'German', 'French'],
      emergencyProtocol: 'University Hospital Zurich 10 minutes away'
    }
  },
  {
    id: 'athens-padel-club',
    name: 'Athens Padel Club',
    country: 'Greece', countryFlag: '🇬🇷',
    city: 'Athens', lat: 37.9838, lng: 23.7275,
    website: 'https://www.athenspadel.gr', contact: '+30 21 0123 4567', contactEmail: 'info@athenspadel.gr',
    description: 'Greece\'s leading padel club, offering sun-drenched outdoor courts and expert coaching in Athens.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 10, description: 'Athens Riviera beaches along the Saronic Gulf' },
    priceRange: { from: 600, to: 1700, unit: 'week', display: '€600 - €1,700/week' },
    socialMedia: { instagram: '@athenspadel', facebook: 'https://facebook.com/athenspadel', twitter: '@athenspadel' },
    climate: 'athens',
    facilities: 'Outdoor padel courts, indoor padel courts, panoramic court, gym, swimming pool, pro shop, Greek taverna',
    courtSurfaces: ['Outdoor padel court', 'Indoor padel court', 'Panoramic court'],
    programs: [
      { name: 'Greek Padel Intensive', price: '€1,300/week', desc: 'Intensive padel training under the Mediterranean sun' },
      { name: 'Padel & Beach Combo', price: '€600/week', desc: 'Relaxed padel training combined with beach lifestyle' }
    ],
    coaches: [
      { name: 'Dimitris Papadopoulos', credential: 'Greek Padel Federation Senior Coach', background: 'Former Greek tennis player who pioneered padel coaching in Greece', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Greek', 'Spanish'], instagram: '@dimitrispadel' }
    ],
    photos: ['https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800'],
    upcomingCamps: [
      { name: 'Athens Summer Padel', startDate: '2026-06-01', endDate: '2026-06-08', price: '€1,200', level: 'All levels' },
      { name: 'Greek Island Padel Retreat', startDate: '2026-09-14', endDate: '2026-09-21', price: '€1,400', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Sport Hotel Athens', pricePerWeek: 400, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Athens Sport Apartments', pricePerWeek: 320, maxOccupancy: 3, bathType: 'ensuite', mealsIncluded: false }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Glyfada area with beach access and tram to city centre'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-05-15',
      spotsLeft: 20, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 8, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Greek and international school options in Athens',
      medicalStaff: true, safeguarding: 'Greek child welfare standards compliant',
      airportPickup: true, mealPlan: 'Full board with Greek Mediterranean cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Greek'],
      emergencyProtocol: 'Evangelismos Hospital 15 minutes away'
    }
  },
  {
    id: 'zagreb-padel-academy',
    name: 'Zagreb Padel Academy',
    country: 'Croatia', countryFlag: '🇭🇷',
    city: 'Zagreb', lat: 45.815, lng: 15.9819,
    website: 'https://www.zagrebpadel.hr', contact: '+385 1 234 5678', contactEmail: 'info@zagrebpadel.hr',
    description: 'Croatia\'s first professional padel academy, establishing Zagreb as a Central European padel hub.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby, Adriatic coast 2 hours away' },
    priceRange: { from: 500, to: 1400, unit: 'week', display: '€500 - €1,400/week' },
    socialMedia: { instagram: '@zagrebpadel', facebook: 'https://facebook.com/zagrebpadel', twitter: '@zagrebpadel' },
    climate: 'zagreb',
    facilities: 'Indoor padel courts, outdoor padel courts, panoramic court, gym, video analysis, pro shop, terrace bar',
    courtSurfaces: ['Indoor padel court', 'Outdoor padel court', 'Panoramic court'],
    programs: [
      { name: 'Zagreb Padel Camp', price: '€1,100/week', desc: 'Full-time padel training with Croatian and Spanish coaching staff' },
      { name: 'Padel Introduction Week', price: '€500/week', desc: 'Affordable padel programme for complete beginners' }
    ],
    coaches: [
      { name: 'Marko Horvat', credential: 'Croatian Padel Association Level 3 Coach', background: 'Former Croatian tennis player turned padel coach, trained in Madrid', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Croatian', 'Spanish'], instagram: '@markopadel' }
    ],
    photos: ['https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800'],
    upcomingCamps: [
      { name: 'Zagreb Summer Padel', startDate: '2026-08-10', endDate: '2026-08-17', price: '€1,000', level: 'All levels' },
      { name: 'Adriatic Padel Week', startDate: '2027-05-05', endDate: '2027-05-12', price: '€1,200', level: 'All levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Sport Hotel Zagreb', pricePerWeek: 320, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Zagreb Sport Apartments', pricePerWeek: 250, maxOccupancy: 3, bathType: 'ensuite', mealsIncluded: false }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Novi Zagreb area with tram connections to the city centre'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-07-01',
      spotsLeft: 24, responseTime: '48h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 8, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Croatian and international school options in Zagreb',
      medicalStaff: true, safeguarding: 'Croatian child protection legislation compliant',
      airportPickup: true, mealPlan: 'Full board with Croatian and Mediterranean cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Croatian'],
      emergencyProtocol: 'KBC Zagreb University Hospital 10 minutes away'
    }
  },
  {
    id: 'dublin-padel-academy',
    name: 'Dublin Padel Academy',
    country: 'Ireland', countryFlag: '🇮🇪',
    city: 'Dublin', lat: 53.3381, lng: -6.2592,
    website: 'https://www.dublinpadel.ie', contact: '+353 1 789 0123', contactEmail: 'info@dublinpadel.ie',
    description: 'Ireland\'s first dedicated padel academy in Dublin, riding the wave of padel\'s rapid growth across Ireland with world-class indoor courts and professional coaching.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 8, description: 'Sandymount Strand 8 km from the academy' },
    priceRange: { from: 600, to: 1600, unit: 'week', display: '€600 - €1,600/week' },
    socialMedia: { instagram: '@dublinpadel', facebook: 'https://facebook.com/dublinpadel', twitter: '@dublinpadel' },
    climate: 'dublin',
    facilities: 'Indoor padel courts, outdoor padel courts, panoramic court, pro shop, video analysis room, gym, racket testing lab, social area',
    courtSurfaces: ['Indoor padel court', 'Outdoor padel court', 'Panoramic court'],
    programs: [
      { name: 'Padel Introduction Week', price: '€650/week', desc: 'Learn padel basics as the sport explodes in popularity across Ireland' },
      { name: 'Competitive Development', price: '€1,100/week', desc: 'Advanced tactical training for competitive players with match play' },
      { name: 'Junior Padel Stars', price: '€700/week', desc: 'Youth development for aspiring competitive padel players aged 8-16' }
    ],
    coaches: [
      { name: 'Seán Gallagher', credential: 'FIP Certified Coach', background: 'One of Ireland\'s first certified padel coaches, trained in Spain with 10 years experience', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Irish', 'Spanish'], instagram: '@seangallagherpadel' }
    ],
    photos: ['https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800'],
    upcomingCamps: [
      { name: 'Dublin Summer Padel Week', startDate: '2026-07-06', endDate: '2026-07-13', price: '€1,100', level: 'All levels' },
      { name: 'Junior Padel Camp', startDate: '2026-08-03', endDate: '2026-08-10', price: '€700', level: 'Beginner' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Dublin Sport Hotel', pricePerWeek: 480, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Central Dublin location with easy transport to training facility'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-06-01',
      spotsLeft: 20, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 8, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Dublin international school partnerships available',
      medicalStaff: true, safeguarding: 'Sport Ireland child protection standards, Garda-vetted staff',
      airportPickup: true, mealPlan: 'Full board with Irish and Mediterranean cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Irish'],
      emergencyProtocol: 'On-site medical staff, St James\'s Hospital 10 minutes away'
    }
  },
  {
    id: 'belgrade-padel-club',
    name: 'Belgrade Padel Club',
    country: 'Serbia', countryFlag: '🇷🇸',
    city: 'Belgrade', lat: 44.7866, lng: 20.4489,
    website: 'https://www.belgradepadel.rs', contact: '+381 11 123 4567', contactEmail: 'info@belgradepadel.rs',
    description: 'Belgrade\'s first dedicated padel facility, riding the wave of padel\'s rapid growth in Serbia with professional coaching and modern courts.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby, Ada Ciganlija lake recreation' },
    priceRange: { from: 400, to: 1100, unit: 'week', display: '€400 - €1,100/week' },
    socialMedia: { instagram: '@belgradepadel', facebook: 'https://facebook.com/belgradepadel', twitter: '@belgradepadel' },
    climate: 'belgrade',
    facilities: 'Indoor padel courts, outdoor padel courts, panoramic court, gym, video analysis, pro shop, café',
    courtSurfaces: ['Indoor padel court', 'Outdoor padel court', 'Panoramic court'],
    programs: [
      { name: 'Belgrade Padel Intensive', price: '€900/week', desc: 'Full-time padel training with Spanish-trained coaching staff' },
      { name: 'Padel Beginners Week', price: '€400/week', desc: 'Introduction to padel for complete beginners' }
    ],
    coaches: [
      { name: 'Luka Vučković', credential: 'FIP Level 2 Coach', background: 'Serbian padel pioneer trained at Madrid padel academies', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Serbian', 'English', 'Spanish'], instagram: '@lukapadel' }
    ],
    photos: ['https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800'],
    upcomingCamps: [
      { name: 'Belgrade Padel Summer Camp', startDate: '2026-07-06', endDate: '2026-07-13', price: '€900', level: 'All levels' },
      { name: 'Autumn Padel Intensive', startDate: '2026-10-05', endDate: '2026-10-12', price: '€800', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Belgrade City Hotel', pricePerWeek: 280, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Belgrade Sport Apartments', pricePerWeek: 200, maxOccupancy: 3, bathType: 'ensuite', mealsIncluded: false }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'New Belgrade area with modern amenities and tram access'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-06-01',
      spotsLeft: 20, responseTime: '48h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 8, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Serbian and international school options',
      medicalStaff: true, safeguarding: 'Serbian child protection legislation compliant',
      airportPickup: true, mealPlan: 'Full board with Serbian and Mediterranean cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Serbian', 'English'],
      emergencyProtocol: 'Clinical Centre of Serbia 10 minutes away'
    }
  },
  {
    id: 'istanbul-padel-academy',
    name: 'Istanbul Padel Academy',
    country: 'Turkey',
    countryFlag: '',
    city: 'Istanbul',
    lat: 41.0082,
    lng: 28.9784,
    website: 'https://www.istanbulpadel.com.tr',
    contact: '+90 212 678 9012',
    contactEmail: 'info@istanbulpadel.com.tr',
    description: 'Turkey\'s premier padel academy in Istanbul, riding the wave of padel\'s explosive growth in the country. Modern glass courts and professional coaching in one of Europe\'s most dynamic cities.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 10, description: 'Bosphorus shoreline accessible' },
    priceRange: { from: 500, to: 1300, unit: 'week', display: '500 - 1,300/week' },
    socialMedia: { instagram: '@istanbulpadel', facebook: 'https://facebook.com/istanbulpadelacademy', twitter: '@istanbulpadel' },
    climate: 'istanbul',
    facilities: '8 glass padel courts (4 indoor, 4 outdoor), pro shop, fitness centre, video analysis, social lounge',
    courtSurfaces: ['Indoor glass court', 'Outdoor glass court'],
    programs: [
      { name: 'Padel Performance Programme', price: '1,100/week', desc: 'Intensive padel training with Spanish-trained coaches, match play and tactical analysis' },
      { name: 'Beginner Padel Week', price: '500/week', desc: 'Introduction to padel with equipment provided, perfect for tennis players transitioning' },
      { name: 'Advanced Match Play', price: '1,300/week', desc: 'Competitive match play programme with video analysis and tournament preparation' }
    ],
    coaches: [
      { name: 'Can Erdem', credential: 'FIP Level 2 Coach', background: 'Turkish national padel champion with training in Spain. Pioneer of padel coaching in Turkey.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Turkish', 'English', 'Spanish'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=800'],
    upcomingCamps: [
      { name: 'Summer Padel Camp', startDate: '2026-07-06', endDate: '2026-07-13', price: '1,100', level: 'All levels' },
      { name: 'Autumn Intensive', startDate: '2026-10-12', endDate: '2026-10-19', price: '900', level: 'Intermediate' }
    ],
    accommodation: {
      types: [{ type: 'hotel', label: 'Istanbul Partner Hotel', pricePerWeek: 400, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Central Istanbul location near padel courts'
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
      minAge: 10,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Partnership with Istanbul international schools',
      medicalStaff: true,
      safeguarding: 'Turkish Padel Federation child protection standards',
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
  },
  'helsinki': {
    avgTemp: { summer: 20, winter: -5 },
    rainfall: { summer: 'Moderate', winter: 'Moderate' },
    humidity: 'Moderate',
    bestMonths: ['June', 'July', 'August'],
    description: 'Subarctic-influenced climate with warm summers and cold, snowy winters'
  },
  'copenhagen': {
    avgTemp: { summer: 21, winter: 2 },
    rainfall: { summer: 'Moderate', winter: 'Moderate' },
    humidity: 'High',
    bestMonths: ['May', 'June', 'July', 'August'],
    description: 'Oceanic climate with mild summers and cool winters'
  },
  'munich': {
    avgTemp: { summer: 24, winter: 0 },
    rainfall: { summer: 'Moderate', winter: 'Low' },
    humidity: 'Moderate',
    bestMonths: ['May', 'June', 'July', 'August', 'September'],
    description: 'Continental climate with warm summers and cold winters influenced by Alpine proximity'
  },
  'vienna': {
    avgTemp: { summer: 25, winter: 1 },
    rainfall: { summer: 'Moderate', winter: 'Low' },
    humidity: 'Moderate',
    bestMonths: ['May', 'June', 'July', 'August', 'September'],
    description: 'Continental climate with warm summers and cold winters on the Danube plain'
  },
  'dublin': {
    avgTemp: { summer: 19, winter: 5 },
    rainfall: { summer: 'Moderate', winter: 'High' },
    humidity: 'High',
    bestMonths: ['May', 'June', 'July', 'August'],
    description: 'Oceanic climate with mild temperatures and frequent rainfall year-round'
  },
  'warsaw': {
    avgTemp: { summer: 24, winter: -2 },
    rainfall: { summer: 'Moderate', winter: 'Low' },
    humidity: 'Moderate',
    bestMonths: ['May', 'June', 'July', 'August', 'September'],
    description: 'Continental climate with warm summers and cold, snowy winters'
  },
  'prague': {
    avgTemp: { summer: 23, winter: 0 },
    rainfall: { summer: 'Moderate', winter: 'Low' },
    humidity: 'Moderate',
    bestMonths: ['May', 'June', 'July', 'August', 'September'],
    description: 'Continental climate with warm summers and cold winters in the Bohemian basin'
  },
  'oslo': {
    avgTemp: { summer: 21, winter: -3 },
    rainfall: { summer: 'Moderate', winter: 'Low' },
    humidity: 'Moderate',
    bestMonths: ['June', 'July', 'August'],
    description: 'Continental climate with warm summers and cold, snowy winters by the fjord'
  },
  'zurich': {
    avgTemp: { summer: 24, winter: 1 },
    rainfall: { summer: 'Moderate', winter: 'Low' },
    humidity: 'Moderate',
    bestMonths: ['May', 'June', 'July', 'August', 'September'],
    description: 'Continental climate with warm summers and cold winters near the Swiss Alps'
  },
  'athens': {
    avgTemp: { summer: 33, winter: 10 },
    rainfall: { summer: 'Very low', winter: 'Moderate' },
    humidity: 'Low',
    bestMonths: ['April', 'May', 'June', 'September', 'October'],
    description: 'Mediterranean climate with hot, dry summers and mild, wet winters'
  },
  'zagreb': {
    avgTemp: { summer: 26, winter: 1 },
    rainfall: { summer: 'Moderate', winter: 'Moderate' },
    humidity: 'Moderate',
    bestMonths: ['May', 'June', 'July', 'August', 'September'],
    description: 'Continental climate with warm summers and cold winters in the Croatian interior'
  },
  'dublin': {
    avgTemp: { summer: 18, winter: 5 },
    rainfall: { summer: 'Moderate', winter: 'High' },
    humidity: 'High',
    bestMonths: ['May', 'June', 'July', 'August', 'September'],
    description: 'Oceanic climate with cool summers and mild, damp winters'
  },
  'belgrade': {
    avgTemp: { summer: 23, winter: 1 },
    rainfall: { summer: 'Moderate', winter: 'Moderate' },
    humidity: 'Moderate',
    bestMonths: ['May', 'June', 'July', 'August', 'September'],
    description: 'Continental climate with warm summers and cold winters'
  },
  'istanbul': {
    avgTemp: { summer: 25, winter: 6 },
    rainfall: { summer: 'Low', winter: 'Moderate' },
    humidity: 'Moderate',
    bestMonths: ['April', 'May', 'June', 'September', 'October'],
    description: 'Mediterranean-influenced climate with warm summers and mild winters, outdoor padel possible most of the year'
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

const COUNTRIES = ['Spain', 'Italy', 'Sweden', 'France', 'Portugal', 'Belgium', 'UK', 'Finland', 'Denmark', 'Germany', 'Austria', 'Ireland', 'Poland', 'Czech Republic', 'Norway', 'Switzerland', 'Greece', 'Croatia', 'Serbia', 'Turkey'];
