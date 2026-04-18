const SPORT_TYPE = 'boxing';

const ACADEMIES = [
  {
    id: 'london-boxing-academy',
    name: 'London Boxing Academy',
    country: 'UK', countryFlag: '🇬🇧',
    city: 'London', lat: 51.5074, lng: -0.1278,
    website: 'https://www.londonboxingacademy.co.uk', contact: '+44 20 7946 0958', contactEmail: 'info@londonboxingacademy.co.uk',
    description: 'Premier boxing academy in the heart of London, training champions across all weight classes since 1985.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby' },
    priceRange: { from: 800, to: 2500, unit: 'week', display: '£800 - £2,500/week' },
    socialMedia: { instagram: '@londonboxingacademy', facebook: 'https://facebook.com/londonboxingacademy', twitter: '@londonboxing' },
    climate: 'london',
    facilities: 'Boxing ring, heavy bags, speed bags, body composition lab, sparring area, conditioning room, cutting-edge sports science, recovery suite',
    courtSurfaces: ['Boxing ring', 'Training ring', 'Heavy bag area', 'Speed bag area'],
    programs: [
      { name: 'Championship Preparation', price: '£2,000/week', desc: 'Elite-level camp for competitive boxers preparing for title fights' },
      { name: 'Fundamentals Course', price: '£800/week', desc: 'Learn boxing basics including footwork, jab, cross, and defence' },
      { name: 'Fitness Boxing', price: '£600/week', desc: 'Non-contact fitness programme using boxing techniques' }
    ],
    coaches: [
      { name: 'James Thompson', credential: 'England Boxing Level 4 Coach', background: 'Former British middleweight champion, 25 years coaching experience', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English'], instagram: '@jamesthompsonboxing' },
      { name: 'Sarah Mitchell', credential: 'AIBA 3-Star Coach', background: 'Commonwealth Games bronze medalist, specialist in women\'s boxing', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'French'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800', 'https://images.unsplash.com/photo-1517438322307-e67111335449?w=800'],
    upcomingCamps: [
      { name: 'Summer Fight Camp', startDate: '2025-07-01', endDate: '2025-07-12', price: '£1,800', level: 'Advanced' },
      { name: 'Youth Boxing Week', startDate: '2025-07-14', endDate: '2025-07-21', price: '£900', level: 'Beginner' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Partner Hotel East London', pricePerWeek: 600, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'hostel', label: 'Athlete Hostel', pricePerWeek: 350, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'All accommodation within 15 minutes of the gym'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-01',
      spotsLeft: 20, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 10, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Partnerships with local schools for term-time training',
      medicalStaff: true, safeguarding: 'DBS-checked coaches, England Boxing safeguarding policy',
      airportPickup: true, mealPlan: 'Full board with sports nutrition guidance',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English'],
      emergencyProtocol: '24/7 on-call medical staff, Royal London Hospital 10 minutes away'
    }
  },
  {
    id: 'sheffield-boxing-institute',
    name: 'Sheffield Boxing Institute',
    country: 'UK', countryFlag: '🇬🇧',
    city: 'Sheffield', lat: 53.3811, lng: -1.4701,
    website: 'https://www.sheffieldboxing.co.uk', contact: '+44 114 234 5678', contactEmail: 'info@sheffieldboxing.co.uk',
    description: 'Home of British boxing excellence in the Steel City, training world champions for over three decades.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby; inland city' },
    priceRange: { from: 600, to: 1800, unit: 'week', display: '£600 - £1,800/week' },
    socialMedia: { instagram: '@sheffieldboxing', facebook: 'https://facebook.com/sheffieldboxing', twitter: '@sheffboxing' },
    climate: 'sheffield',
    facilities: 'Boxing ring, heavy bags, speed bags, body composition lab, sparring area, conditioning room, cutting-edge sports science, altitude simulation',
    courtSurfaces: ['Boxing ring', 'Training ring', 'Heavy bag area', 'Speed bag area'],
    programs: [
      { name: 'Pro Fighter Camp', price: '£1,500/week', desc: 'Professional-level training with former world champions' },
      { name: 'Amateur Development', price: '£700/week', desc: 'Structured programme for competitive amateur boxers' }
    ],
    coaches: [
      { name: 'Dave Allen', credential: 'GB Boxing Performance Coach', background: 'Trained 3 Olympic medalists, 30 years in the sport', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800'],
    upcomingCamps: [
      { name: 'Steel City Fight Camp', startDate: '2025-07-07', endDate: '2025-07-14', price: '£1,400', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Sport Lodge Sheffield', pricePerWeek: 400, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Close to the English Institute of Sport'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-01',
      spotsLeft: 15, responseTime: '48h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 11, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Local school partnerships available',
      medicalStaff: true, safeguarding: 'England Boxing safeguarding standards, DBS checks',
      airportPickup: true, mealPlan: 'Full board with weight management options',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English'],
      emergencyProtocol: 'On-site physio, Northern General Hospital 10 minutes away'
    }
  },
  {
    id: 'manchester-fight-academy',
    name: 'Manchester Fight Academy',
    country: 'UK', countryFlag: '🇬🇧',
    city: 'Manchester', lat: 53.4808, lng: -2.2426,
    website: 'https://www.manchesterfight.co.uk', contact: '+44 161 345 6789', contactEmail: 'info@manchesterfight.co.uk',
    description: 'Manchester\'s elite boxing academy combining traditional training with modern sports science.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach; industrial city' },
    priceRange: { from: 650, to: 1900, unit: 'week', display: '£650 - £1,900/week' },
    socialMedia: { instagram: '@manchesterfight', facebook: 'https://facebook.com/manchesterfight', twitter: '@mcrfight' },
    climate: 'manchester',
    facilities: 'Boxing ring, heavy bags, speed bags, body composition lab, sparring area, conditioning room, cutting-edge sports science, cryotherapy chamber',
    courtSurfaces: ['Boxing ring', 'Training ring', 'Heavy bag area', 'Speed bag area'],
    programs: [
      { name: 'Northern Warrior Camp', price: '£1,600/week', desc: 'Intensive fight camp with sparring partners at all weights' },
      { name: 'White Collar Boxing', price: '£500/week', desc: 'Beginner-friendly programme for aspiring amateur boxers' }
    ],
    coaches: [
      { name: 'Ricky Hatton Jr', credential: 'AIBA 2-Star Coach', background: 'Son of boxing legend, trained under world-class coaches since youth', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English'], instagram: '@rickyhattonjr' }
    ],
    photos: ['https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800'],
    upcomingCamps: [
      { name: 'Manchester Summer Camp', startDate: '2025-07-01', endDate: '2025-07-08', price: '£1,500', level: 'All levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Hotel Sport Manchester', pricePerWeek: 450, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'City centre location near the gym'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-15',
      spotsLeft: 18, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 10, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'After-school programmes available',
      medicalStaff: true, safeguarding: 'Full DBS checks, UK Sport safeguarding framework',
      airportPickup: true, mealPlan: 'Full board with weight-class meal plans',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English'],
      emergencyProtocol: 'Manchester Royal Infirmary 10 minutes away, on-site medic'
    }
  },
  {
    id: 'dublin-boxing-club',
    name: 'Dublin Boxing Club',
    country: 'Ireland', countryFlag: '🇮🇪',
    city: 'Dublin', lat: 53.3498, lng: -6.2603,
    website: 'https://www.dublinboxingclub.ie', contact: '+353 1 234 5678', contactEmail: 'info@dublinboxingclub.ie',
    description: 'Ireland\'s finest boxing academy, continuing the proud tradition of Irish boxing excellence.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 8, description: 'Dublin Bay beaches 8 km from city centre' },
    priceRange: { from: 600, to: 1700, unit: 'week', display: '€600 - €1,700/week' },
    socialMedia: { instagram: '@dublinboxing', facebook: 'https://facebook.com/dublinboxingclub', twitter: '@dublinboxing' },
    climate: 'dublin',
    facilities: 'Boxing ring, heavy bags, speed bags, body composition lab, sparring area, conditioning room, sports science laboratory',
    courtSurfaces: ['Boxing ring', 'Training ring', 'Heavy bag area', 'Speed bag area'],
    programs: [
      { name: 'Irish Champion Camp', price: '€1,400/week', desc: 'Elite training with former Olympic and European champions' },
      { name: 'Beginner Boxing', price: '€600/week', desc: 'Introduction to boxing for all fitness levels' }
    ],
    coaches: [
      { name: 'Paddy Barnes', credential: 'IABA High Performance Coach', background: 'Two-time Olympic medalist, European champion, now full-time coach', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Irish'], instagram: '@paddybarnesboxing' }
    ],
    photos: ['https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800'],
    upcomingCamps: [
      { name: 'Celtic Boxing Camp', startDate: '2025-07-01', endDate: '2025-07-08', price: '€1,300', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Dublin Sport Hotel', pricePerWeek: 500, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Central Dublin location'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-01',
      spotsLeft: 16, responseTime: '48h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 10, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'School coordination available during term time',
      medicalStaff: true, safeguarding: 'IABA safeguarding policy, Garda vetting for all staff',
      airportPickup: true, mealPlan: 'Full board with sports nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Irish'],
      emergencyProtocol: 'On-site medical team, Mater Hospital 10 minutes away'
    }
  },
  {
    id: 'belfast-boxing-gym',
    name: 'Belfast Boxing Gym',
    country: 'Ireland', countryFlag: '🇮🇪',
    city: 'Belfast', lat: 54.5973, lng: -5.9301,
    website: 'https://www.belfastboxinggym.com', contact: '+44 28 9023 4567', contactEmail: 'info@belfastboxinggym.com',
    description: 'Northern Ireland\'s storied boxing gym, producing world-class fighters for generations.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: false,
    beach: { distance: 15, description: 'Belfast Lough beaches approximately 15 km away' },
    priceRange: { from: 500, to: 1400, unit: 'week', display: '£500 - £1,400/week' },
    socialMedia: { instagram: '@belfastboxing', facebook: 'https://facebook.com/belfastboxinggym', twitter: '@belfastboxing' },
    climate: 'belfast',
    facilities: 'Boxing ring, heavy bags, speed bags, sparring area, conditioning room, body composition lab, video analysis',
    courtSurfaces: ['Boxing ring', 'Training ring', 'Heavy bag area', 'Speed bag area'],
    programs: [
      { name: 'Belfast Brawler Camp', price: '£1,200/week', desc: 'Intensive fight preparation with Northern Irish champions' },
      { name: 'Youth Development', price: '£500/week', desc: 'Structured youth boxing programme with character development' }
    ],
    coaches: [
      { name: 'Carl Frampton', credential: 'Boxing Ireland Level 3 Coach', background: 'Former two-weight world champion, transitioned to coaching', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800'],
    upcomingCamps: [
      { name: 'Northern Irish Fight Camp', startDate: '2025-07-14', endDate: '2025-07-21', price: '£1,100', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Belfast City Hotel', pricePerWeek: 380, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: false, notes: 'City centre hotel, gym walking distance'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-15',
      spotsLeft: 12, responseTime: '48h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 11, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'After-school and weekend programmes',
      medicalStaff: true, safeguarding: 'Access NI checks, UK child protection standards',
      airportPickup: true, mealPlan: 'Full board available',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English'],
      emergencyProtocol: 'Royal Victoria Hospital 10 minutes away'
    }
  },
  {
    id: 'berlin-boxing-zentrum',
    name: 'Berlin Boxing Zentrum',
    country: 'Germany', countryFlag: '🇩🇪',
    city: 'Berlin', lat: 52.52, lng: 13.405,
    website: 'https://www.berlinboxing.de', contact: '+49 30 234 5678', contactEmail: 'info@berlinboxing.de',
    description: 'Germany\'s leading boxing academy combining German precision with world-class training methods.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach; lake swimming available' },
    priceRange: { from: 700, to: 2000, unit: 'week', display: '€700 - €2,000/week' },
    socialMedia: { instagram: '@berlinboxing', facebook: 'https://facebook.com/berlinboxing', twitter: '@berlinboxing' },
    climate: 'berlin',
    facilities: 'Boxing ring, heavy bags, speed bags, body composition lab, sparring area, conditioning room, cutting-edge sports science, biomechanics lab',
    courtSurfaces: ['Boxing ring', 'Training ring', 'Heavy bag area', 'Speed bag area'],
    programs: [
      { name: 'German Precision Camp', price: '€1,600/week', desc: 'Technical boxing training with emphasis on biomechanics and strategy' },
      { name: 'Cross-Training Intensive', price: '€900/week', desc: 'Boxing combined with strength and conditioning work' }
    ],
    coaches: [
      { name: 'Ulli Wegner', credential: 'German Boxing Federation Master Coach', background: 'Legendary trainer, coached multiple world champions including Arthur Abraham', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'German', 'Russian'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800'],
    upcomingCamps: [
      { name: 'Berlin Summer Boxing', startDate: '2025-07-01', endDate: '2025-07-08', price: '€1,500', level: 'All levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Sport Hotel Berlin', pricePerWeek: 500, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Kreuzberg location near the training centre'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-01',
      spotsLeft: 20, responseTime: '48h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 10, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'International school partnerships in Berlin',
      medicalStaff: true, safeguarding: 'German child protection standards, enhanced background checks',
      airportPickup: true, mealPlan: 'Full board with nutritionist supervision',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'German', 'Russian'],
      emergencyProtocol: 'Charité Hospital 15 minutes away, on-site medic'
    }
  },
  {
    id: 'hamburg-fight-club',
    name: 'Hamburg Fight Club',
    country: 'Germany', countryFlag: '🇩🇪',
    city: 'Hamburg', lat: 53.5511, lng: 9.9937,
    website: 'https://www.hamburgfight.de', contact: '+49 40 345 6789', contactEmail: 'info@hamburgfight.de',
    description: 'Northern Germany\'s premier boxing facility with a strong tradition in heavyweight boxing.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Port city; North Sea beaches 100 km away' },
    priceRange: { from: 600, to: 1700, unit: 'week', display: '€600 - €1,700/week' },
    socialMedia: { instagram: '@hamburgfight', facebook: 'https://facebook.com/hamburgfight', twitter: '@hamburgfight' },
    climate: 'hamburg',
    facilities: 'Boxing ring, heavy bags, speed bags, body composition lab, sparring area, conditioning room, sports science, sauna',
    courtSurfaces: ['Boxing ring', 'Training ring', 'Heavy bag area', 'Speed bag area'],
    programs: [
      { name: 'Heavyweight Development', price: '€1,400/week', desc: 'Specialized training for heavyweight and super-heavyweight boxers' },
      { name: 'Boxing Fitness', price: '€600/week', desc: 'Fitness-focused boxing for all levels' }
    ],
    coaches: [
      { name: 'Fritz Sdunek', credential: 'German Boxing Federation Level 3', background: 'Trained multiple European champions, specialist in counter-punching', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'German'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800'],
    upcomingCamps: [
      { name: 'Hamburg Fight Week', startDate: '2025-07-07', endDate: '2025-07-14', price: '€1,300', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Hotel Hafen Hamburg', pricePerWeek: 480, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Harbour area hotel with gym shuttle'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-15',
      spotsLeft: 14, responseTime: '48h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 12, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'German school partnerships for long-term stays',
      medicalStaff: true, safeguarding: 'German safeguarding framework, police clearance for staff',
      airportPickup: true, mealPlan: 'Full board with weight-specific diets',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'German'],
      emergencyProtocol: 'UKE Hospital 15 minutes away, medical staff on call'
    }
  },
  {
    id: 'paris-boxing-academy',
    name: 'Paris Boxing Academy',
    country: 'France', countryFlag: '🇫🇷',
    city: 'Paris', lat: 48.8566, lng: 2.3522,
    website: 'https://www.parisboxing.fr', contact: '+33 1 42 34 56 78', contactEmail: 'info@parisboxing.fr',
    description: 'France\'s top boxing academy in the City of Light, where French savate tradition meets modern boxing.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby' },
    priceRange: { from: 800, to: 2200, unit: 'week', display: '€800 - €2,200/week' },
    socialMedia: { instagram: '@parisboxing', facebook: 'https://facebook.com/parisboxing', twitter: '@parisboxing' },
    climate: 'paris',
    facilities: 'Boxing ring, heavy bags, speed bags, body composition lab, sparring area, conditioning room, cutting-edge sports science, physiotherapy',
    courtSurfaces: ['Boxing ring', 'Training ring', 'Heavy bag area', 'Speed bag area'],
    programs: [
      { name: 'Parisian Championship Camp', price: '€1,800/week', desc: 'Championship-level preparation with French national coaches' },
      { name: 'Boxing & Culture', price: '€1,000/week', desc: 'Combine boxing training with Parisian cultural experiences' }
    ],
    coaches: [
      { name: 'Mahyar Monshipour', credential: 'French Boxing Federation Elite Coach', background: 'Former WBA super bantamweight champion, now elite-level trainer', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'French', 'Persian'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800'],
    upcomingCamps: [
      { name: 'Paris Summer Fight Camp', startDate: '2025-07-01', endDate: '2025-07-10', price: '€1,700', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Hotel Sport Paris', pricePerWeek: 650, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Located near the INSEP national training centre'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-01',
      spotsLeft: 16, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 10, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'French international school coordination',
      medicalStaff: true, safeguarding: 'French Ministry of Sport safeguarding standards',
      airportPickup: true, mealPlan: 'Full board with French cuisine and sports nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'French'],
      emergencyProtocol: 'Pitié-Salpêtrière Hospital 10 minutes away'
    }
  },
  {
    id: 'milan-boxing-centre',
    name: 'Milan Boxing Centre',
    country: 'Italy', countryFlag: '🇮🇹',
    city: 'Milan', lat: 45.4642, lng: 9.19,
    website: 'https://www.milanboxing.it', contact: '+39 02 345 6789', contactEmail: 'info@milanboxing.it',
    description: 'Italian boxing excellence in the fashion capital, blending style with sporting achievement.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach; Lake Como 50 km north' },
    priceRange: { from: 700, to: 1900, unit: 'week', display: '€700 - €1,900/week' },
    socialMedia: { instagram: '@milanboxing', facebook: 'https://facebook.com/milanboxing', twitter: '@milanboxing' },
    climate: 'milan',
    facilities: 'Boxing ring, heavy bags, speed bags, body composition lab, sparring area, conditioning room, cutting-edge sports science, recovery suite',
    courtSurfaces: ['Boxing ring', 'Training ring', 'Heavy bag area', 'Speed bag area'],
    programs: [
      { name: 'Italian Style Boxing', price: '€1,500/week', desc: 'Technical Italian boxing with emphasis on footwork and defence' },
      { name: 'Combat Fitness', price: '€700/week', desc: 'Boxing-based fitness programme for all levels' }
    ],
    coaches: [
      { name: 'Patrizio Oliva', credential: 'Italian Boxing Federation Master Coach', background: 'Olympic gold medalist 1980, world champion, legendary trainer', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Italian'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800'],
    upcomingCamps: [
      { name: 'Milan Summer Boxing', startDate: '2025-07-14', endDate: '2025-07-21', price: '€1,400', level: 'All levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Hotel Navigli Sport', pricePerWeek: 550, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Trendy Navigli district location'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-15',
      spotsLeft: 14, responseTime: '48h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 10, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Italian international school partnerships',
      medicalStaff: true, safeguarding: 'CONI safeguarding protocols, background checks',
      airportPickup: true, mealPlan: 'Full board Italian cuisine with sports nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Italian'],
      emergencyProtocol: 'San Raffaele Hospital 20 minutes away, on-site medic'
    }
  },
  {
    id: 'kyiv-boxing-academy',
    name: 'Kyiv Boxing Academy',
    country: 'Ukraine', countryFlag: '🇺🇦',
    city: 'Kyiv', lat: 50.4501, lng: 30.5234,
    website: 'https://www.kyivboxing.ua', contact: '+380 44 234 5678', contactEmail: 'info@kyivboxing.ua',
    description: 'Ukraine\'s premier boxing academy, continuing the legendary tradition of Ukrainian boxing champions.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No sea beach; Dnipro river beaches available' },
    priceRange: { from: 300, to: 900, unit: 'week', display: '€300 - €900/week' },
    socialMedia: { instagram: '@kyivboxing', facebook: 'https://facebook.com/kyivboxing', twitter: '@kyivboxing' },
    climate: 'kyiv',
    facilities: 'Boxing ring, heavy bags, speed bags, body composition lab, sparring area, conditioning room, cutting-edge sports science',
    courtSurfaces: ['Boxing ring', 'Training ring', 'Heavy bag area', 'Speed bag area'],
    programs: [
      { name: 'Ukrainian Champion Camp', price: '€700/week', desc: 'Train in the homeland of the Klitschko brothers and Lomachenko' },
      { name: 'Eastern European Sparring', price: '€500/week', desc: 'High-quality sparring with Ukrainian amateur and pro boxers' }
    ],
    coaches: [
      { name: 'Anatoliy Lomachenko', credential: 'Ukrainian Boxing Federation Master Coach', background: 'Father and trainer of Vasiliy Lomachenko, decades of Olympic coaching', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Ukrainian', 'Russian'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800'],
    upcomingCamps: [
      { name: 'Kyiv Fight Camp', startDate: '2025-07-01', endDate: '2025-07-08', price: '€650', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Hotel Sport Kyiv', pricePerWeek: 250, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Centrally located near Olympic Stadium'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-01',
      spotsLeft: 20, responseTime: '48h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 10, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Ukrainian school coordination available',
      medicalStaff: true, safeguarding: 'Ukrainian sport safeguarding standards',
      airportPickup: true, mealPlan: 'Full board with traditional Ukrainian cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Ukrainian', 'Russian'],
      emergencyProtocol: 'Medical team on site, city hospital 10 minutes away'
    }
  },
  {
    id: 'warsaw-boxing-school',
    name: 'Warsaw Boxing School',
    country: 'Poland', countryFlag: '🇵🇱',
    city: 'Warsaw', lat: 52.2297, lng: 21.0122,
    website: 'https://www.warsawboxing.pl', contact: '+48 22 345 6789', contactEmail: 'info@warsawboxing.pl',
    description: 'Poland\'s top boxing school in the capital city, reviving the nation\'s rich boxing heritage.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach; Vistula river nearby' },
    priceRange: { from: 400, to: 1100, unit: 'week', display: '€400 - €1,100/week' },
    socialMedia: { instagram: '@warsawboxing', facebook: 'https://facebook.com/warsawboxing', twitter: '@warsawboxing' },
    climate: 'warsaw',
    facilities: 'Boxing ring, heavy bags, speed bags, body composition lab, sparring area, conditioning room, sports science, video analysis',
    courtSurfaces: ['Boxing ring', 'Training ring', 'Heavy bag area', 'Speed bag area'],
    programs: [
      { name: 'Polish Power Camp', price: '€900/week', desc: 'Strength-focused boxing programme with Polish training philosophy' },
      { name: 'Technical Boxing', price: '€600/week', desc: 'Technical skill development for amateur competitors' }
    ],
    coaches: [
      { name: 'Tomasz Adamek', credential: 'Polish Boxing Association Master Coach', background: 'Former cruiserweight and heavyweight world champion', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Polish'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800'],
    upcomingCamps: [
      { name: 'Warsaw Summer Camp', startDate: '2025-07-07', endDate: '2025-07-14', price: '€850', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Hotel Warszawa Sport', pricePerWeek: 350, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Modern hotel in Wola district'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-01',
      spotsLeft: 18, responseTime: '48h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 10, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Polish and international school options',
      medicalStaff: true, safeguarding: 'Polish sport safeguarding legislation compliant',
      airportPickup: true, mealPlan: 'Full board with Polish and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Polish'],
      emergencyProtocol: 'Medical staff on site, hospital 10 minutes away'
    }
  },
  {
    id: 'almaty-boxing-centre',
    name: 'Almaty Boxing Centre',
    country: 'Kazakhstan', countryFlag: '🇰🇿',
    city: 'Almaty', lat: 43.2220, lng: 76.8512,
    website: 'https://www.almatyboxing.kz', contact: '+7 727 345 6789', contactEmail: 'info@almatyboxing.kz',
    description: 'Central Asian boxing powerhouse, continuing Kazakhstan\'s proud tradition of Olympic boxing gold.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach; mountain training environment' },
    priceRange: { from: 300, to: 800, unit: 'week', display: '€300 - €800/week' },
    socialMedia: { instagram: '@almatyboxing', facebook: 'https://facebook.com/almatyboxing', twitter: '@almatyboxing' },
    climate: 'almaty',
    facilities: 'Boxing ring, heavy bags, speed bags, body composition lab, sparring area, conditioning room, cutting-edge sports science, altitude training',
    courtSurfaces: ['Boxing ring', 'Training ring', 'Heavy bag area', 'Speed bag area'],
    programs: [
      { name: 'Kazakh Champion Camp', price: '€600/week', desc: 'Train at altitude with Olympic-calibre Kazakh coaches' },
      { name: 'Eastern Power Programme', price: '€400/week', desc: 'Strength and conditioning focused boxing for all levels' }
    ],
    coaches: [
      { name: 'Serik Sapiyev', credential: 'Kazakhstan Boxing Federation Master Coach', background: 'Olympic gold medalist 2012, now developing the next generation of Kazakh champions', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Kazakh', 'Russian'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800'],
    upcomingCamps: [
      { name: 'Almaty Summer Fight Camp', startDate: '2025-07-01', endDate: '2025-07-08', price: '€550', level: 'All levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Hotel Kazakhstan Sport', pricePerWeek: 200, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Mountain-view hotel near the training centre'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-01',
      spotsLeft: 20, responseTime: '48h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 10, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Kazakh school coordination available',
      medicalStaff: true, safeguarding: 'Kazakhstan sport safeguarding standards',
      airportPickup: true, mealPlan: 'Full board with Kazakh and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Kazakh', 'Russian'],
      emergencyProtocol: 'City hospital 10 minutes away, on-site medical staff'
    }
  }
];

const CLIMATE_DATA = {
  'london': {
    avgTemp: { summer: 22, winter: 5 },
    rainfall: { summer: 'Moderate', winter: 'Moderate' },
    humidity: 'High',
    bestMonths: ['May', 'June', 'July', 'August', 'September'],
    description: 'Temperate maritime climate with mild temperatures year-round'
  },
  'sheffield': {
    avgTemp: { summer: 20, winter: 4 },
    rainfall: { summer: 'Moderate', winter: 'High' },
    humidity: 'High',
    bestMonths: ['May', 'June', 'July', 'August'],
    description: 'Cool temperate climate, slightly cooler than southern England'
  },
  'manchester': {
    avgTemp: { summer: 20, winter: 4 },
    rainfall: { summer: 'High', winter: 'High' },
    humidity: 'High',
    bestMonths: ['June', 'July', 'August'],
    description: 'Oceanic climate with frequent rainfall throughout the year'
  },
  'dublin': {
    avgTemp: { summer: 19, winter: 5 },
    rainfall: { summer: 'Moderate', winter: 'High' },
    humidity: 'High',
    bestMonths: ['May', 'June', 'July', 'August'],
    description: 'Mild oceanic climate with cool summers and mild winters'
  },
  'belfast': {
    avgTemp: { summer: 18, winter: 4 },
    rainfall: { summer: 'Moderate', winter: 'High' },
    humidity: 'High',
    bestMonths: ['June', 'July', 'August'],
    description: 'Cool oceanic climate with frequent cloud cover'
  },
  'berlin': {
    avgTemp: { summer: 24, winter: 1 },
    rainfall: { summer: 'Moderate', winter: 'Low' },
    humidity: 'Moderate',
    bestMonths: ['May', 'June', 'July', 'August', 'September'],
    description: 'Continental climate with warm summers and cold winters'
  },
  'hamburg': {
    avgTemp: { summer: 22, winter: 2 },
    rainfall: { summer: 'Moderate', winter: 'Moderate' },
    humidity: 'High',
    bestMonths: ['May', 'June', 'July', 'August'],
    description: 'Maritime-influenced climate with mild summers'
  },
  'paris': {
    avgTemp: { summer: 25, winter: 5 },
    rainfall: { summer: 'Moderate', winter: 'Moderate' },
    humidity: 'Moderate',
    bestMonths: ['May', 'June', 'July', 'August', 'September'],
    description: 'Oceanic climate with warm summers and cool winters'
  },
  'milan': {
    avgTemp: { summer: 29, winter: 3 },
    rainfall: { summer: 'Moderate', winter: 'Low' },
    humidity: 'High',
    bestMonths: ['April', 'May', 'June', 'September', 'October'],
    description: 'Humid subtropical climate with hot summers and foggy winters'
  },
  'kyiv': {
    avgTemp: { summer: 25, winter: -3 },
    rainfall: { summer: 'Moderate', winter: 'Low' },
    humidity: 'Moderate',
    bestMonths: ['May', 'June', 'July', 'August', 'September'],
    description: 'Continental climate with warm summers and cold, snowy winters'
  },
  'warsaw': {
    avgTemp: { summer: 24, winter: -1 },
    rainfall: { summer: 'Moderate', winter: 'Low' },
    humidity: 'Moderate',
    bestMonths: ['May', 'June', 'July', 'August', 'September'],
    description: 'Continental climate with distinct seasons'
  },
  'almaty': {
    avgTemp: { summer: 27, winter: -5 },
    rainfall: { summer: 'Moderate', winter: 'Low' },
    humidity: 'Low',
    bestMonths: ['May', 'June', 'July', 'August', 'September'],
    description: 'Continental climate with warm summers and cold winters, high altitude benefits'
  }
};

const NEWS_ITEMS = [
  {
    title: 'UK Boxing Sees Record Youth Participation',
    date: '2025-01-20',
    summary: 'England Boxing reports a 30% increase in youth membership, driven by Olympic success and community outreach programmes.',
    link: '#'
  },
  {
    title: 'Berlin Hosts European Amateur Boxing Championships',
    date: '2025-02-15',
    summary: 'The German capital welcomes Europe\'s best amateur boxers for a week of thrilling competition at the Max-Schmeling-Halle.',
    link: '#'
  },
  {
    title: 'Irish Boxing Academy Launches Women\'s Programme',
    date: '2025-03-08',
    summary: 'Dublin Boxing Club announces a dedicated women\'s boxing programme, following Katie Taylor\'s inspiration of a new generation.',
    link: '#'
  },
  {
    title: 'New Sports Science Partnership for European Boxing Gyms',
    date: '2025-04-01',
    summary: 'Leading European boxing academies partner with universities to integrate cutting-edge sports science into training programmes.',
    link: '#'
  },
  {
    title: 'Ukraine Continues Boxing Dominance Despite Challenges',
    date: '2025-05-10',
    summary: 'Ukrainian boxers maintain their position among the world\'s best, with several fighters winning international titles this season.',
    link: '#'
  }
];

const COUNTRIES = ['UK', 'Ireland', 'Germany', 'France', 'Italy', 'Ukraine', 'Poland', 'Kazakhstan'];
