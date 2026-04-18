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
  },
  {
    id: 'stockholm-boxing-academy',
    name: 'Stockholm Boxing Academy',
    country: 'Sweden', countryFlag: '🇸🇪',
    city: 'Stockholm', lat: 59.3293, lng: 18.0686,
    website: 'https://www.stockholmboxing.se', contact: '+46 8 123 4567', contactEmail: 'info@stockholmboxing.se',
    description: 'Scandinavia\'s premier boxing academy combining Swedish athletic tradition with world-class coaching. Modern facilities in central Stockholm with a strong focus on technical boxing and conditioning.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby' },
    priceRange: { from: 900, to: 2800, unit: 'week', display: '€900 - €2,800/week' },
    socialMedia: { instagram: '@stockholmboxingacademy', facebook: 'https://facebook.com/stockholmboxingacademy', twitter: '@sthlmboxing' },
    climate: 'stockholm',
    facilities: 'Two boxing rings, heavy bag gallery, speed bag stations, strength and conditioning room, sauna, recovery pool, video analysis suite',
    courtSurfaces: ['Boxing ring', 'Training ring', 'Heavy bag area', 'Speed bag area'],
    programs: [
      { name: 'Nordic Fighter Camp', price: '€2,500/week', desc: 'Intensive competitive training programme for aspiring and active fighters' },
      { name: 'Technical Boxing Course', price: '€900/week', desc: 'Focus on footwork, combinations, and defensive techniques' },
      { name: 'Boxing Fitness Bootcamp', price: '€700/week', desc: 'High-intensity fitness programme built around boxing drills' }
    ],
    coaches: [
      { name: 'Erik Lindqvist', credential: 'Swedish Boxing Federation Level 5 Coach', background: 'Former European amateur champion, 20 years coaching top-level fighters', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Swedish', 'English'], instagram: '@eriklindqvistboxing' },
      { name: 'Anna Bergström', credential: 'AIBA 2-Star Coach', background: 'Olympic team coach for Sweden, specialist in women\'s boxing development', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Swedish', 'English', 'Finnish'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800', 'https://images.unsplash.com/photo-1517438322307-e67111335449?w=800'],
    upcomingCamps: [
      { name: 'Midsummer Fight Camp', startDate: '2026-06-15', endDate: '2026-06-26', price: '€2,200', level: 'Intermediate' },
      { name: 'Winter Warrior Camp', startDate: '2027-01-10', endDate: '2027-01-21', price: '€2,400', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Partner Hotel Stockholm City', pricePerWeek: 700, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'hostel', label: 'Athlete Residence', pricePerWeek: 400, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Accommodation located within walking distance of the gym'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-06-01',
      spotsLeft: 18, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 10, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Coordination with local Swedish schools available',
      medicalStaff: true, safeguarding: 'Swedish Sports Confederation safeguarding standards',
      airportPickup: true, mealPlan: 'Full board with Scandinavian and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Swedish'],
      emergencyProtocol: 'Karolinska University Hospital 15 minutes away, on-site medical staff'
    }
  },
  {
    id: 'copenhagen-fight-club',
    name: 'Copenhagen Fight Club',
    country: 'Denmark', countryFlag: '🇩🇰',
    city: 'Copenhagen', lat: 55.6761, lng: 12.5683,
    website: 'https://www.copenhagenfightclub.dk', contact: '+45 33 12 3456', contactEmail: 'info@copenhagenfightclub.dk',
    description: 'Dynamic boxing club in the heart of Copenhagen, blending Danish sporting values with modern fight training. Known for producing talented amateur boxers and offering inclusive programmes for all levels.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: false,
    beach: { distance: 8, description: 'Amager Strandpark beach 8 km away' },
    priceRange: { from: 850, to: 2600, unit: 'week', display: '€850 - €2,600/week' },
    socialMedia: { instagram: '@copenhagenfightclub', facebook: 'https://facebook.com/copenhagenfightclub', twitter: '@cpnfightclub' },
    climate: 'copenhagen',
    facilities: 'Boxing ring, sparring area, heavy bag section, speed bag wall, cardio room, strength training area, locker rooms with sauna',
    courtSurfaces: ['Boxing ring', 'Sparring area', 'Heavy bag area', 'Speed bag area'],
    programs: [
      { name: 'Viking Fighter Programme', price: '€2,400/week', desc: 'Competitive training camp for amateur and professional boxers' },
      { name: 'Boxing Fundamentals', price: '€850/week', desc: 'Comprehensive introduction to boxing technique and fitness' },
      { name: 'Cardio Boxing', price: '€650/week', desc: 'Non-contact fitness classes using boxing movements' }
    ],
    coaches: [
      { name: 'Mikkel Hansen', credential: 'Danish Boxing Union Level 4 Coach', background: 'Former Danish national champion, trainer of multiple European medalists', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Danish', 'English'], instagram: '@mikkelhboxing' },
      { name: 'Line Petersen', credential: 'AIBA 2-Star Coach', background: 'Former national team member, specialist in youth development', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Danish', 'English', 'German'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800', 'https://images.unsplash.com/photo-1517438322307-e67111335449?w=800'],
    upcomingCamps: [
      { name: 'Summer Sparring Camp', startDate: '2026-07-06', endDate: '2026-07-17', price: '€2,100', level: 'Intermediate' },
      { name: 'New Year Fight Camp', startDate: '2027-01-04', endDate: '2027-01-15', price: '€2,300', level: 'All levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Copenhagen City Hotel', pricePerWeek: 750, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'hostel', label: 'Fighter Hostel', pricePerWeek: 380, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Central Copenhagen location, easy public transport access'
    },
    availability: {
      status: 'limited',
      nextIntake: '2026-07-01',
      spotsLeft: 8, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 10, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Danish school coordination available during term time',
      medicalStaff: true, safeguarding: 'Danish Sports Federation child protection standards',
      airportPickup: true, mealPlan: 'Full board with Danish and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Danish'],
      emergencyProtocol: 'Rigshospitalet hospital 10 minutes away, on-site first aid team'
    }
  },
  {
    id: 'helsinki-boxing-institute',
    name: 'Helsinki Boxing Institute',
    country: 'Finland', countryFlag: '🇫🇮',
    city: 'Helsinki', lat: 60.1699, lng: 24.9384,
    website: 'https://www.helsinkiboxing.fi', contact: '+358 9 123 4567', contactEmail: 'info@helsinkiboxing.fi',
    description: 'Finland\'s leading boxing institute offering rigorous training in a purpose-built facility. Emphasises mental toughness, technical precision, and physical conditioning in the Finnish sporting tradition.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 5, description: 'Hietaniemi Beach 5 km away' },
    priceRange: { from: 800, to: 2500, unit: 'week', display: '€800 - €2,500/week' },
    socialMedia: { instagram: '@helsinkiboxinginstitute', facebook: 'https://facebook.com/helsinkiboxinginstitute', twitter: '@helsinkiboxing' },
    climate: 'helsinki',
    facilities: 'Two boxing rings, extensive heavy bag area, speed bag stations, ice bath recovery, sauna, strength room, video analysis room',
    courtSurfaces: ['Boxing ring', 'Training ring', 'Heavy bag area', 'Conditioning area'],
    programs: [
      { name: 'Sisu Fighter Camp', price: '€2,300/week', desc: 'Elite training camp inspired by Finnish resilience, for competitive boxers' },
      { name: 'Boxing Basics', price: '€800/week', desc: 'Learn the fundamentals of boxing in a supportive environment' },
      { name: 'Strength & Boxing', price: '€750/week', desc: 'Combined strength training and boxing skills programme' }
    ],
    coaches: [
      { name: 'Jari Mäkinen', credential: 'Finnish Boxing Federation Master Coach', background: 'Former Finnish heavyweight champion, Olympic team coach', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Finnish', 'English', 'Swedish'], instagram: '@jarimboxing' },
      { name: 'Elina Korhonen', credential: 'AIBA 2-Star Coach', background: 'Former European bronze medalist, specialist in technical boxing', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Finnish', 'English'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800', 'https://images.unsplash.com/photo-1517438322307-e67111335449?w=800'],
    upcomingCamps: [
      { name: 'Midnight Sun Camp', startDate: '2026-06-22', endDate: '2026-07-03', price: '€2,000', level: 'All levels' },
      { name: 'Arctic Training Camp', startDate: '2027-02-01', endDate: '2027-02-12', price: '€2,200', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Helsinki Sport Hotel', pricePerWeek: 650, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'dormitory', label: 'Athlete Dormitory', pricePerWeek: 350, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Sauna access included in all accommodation options'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-06-15',
      spotsLeft: 15, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 10, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Finnish school partnership for visiting junior athletes',
      medicalStaff: true, safeguarding: 'Finnish Olympic Committee safeguarding protocols',
      airportPickup: true, mealPlan: 'Full board with Finnish and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Finnish', 'Swedish'],
      emergencyProtocol: 'Helsinki University Hospital 12 minutes away, on-site medical staff'
    }
  },
  {
    id: 'budapest-boxing-academy',
    name: 'Budapest Boxing Academy',
    country: 'Hungary', countryFlag: '🇭🇺',
    city: 'Budapest', lat: 47.4979, lng: 19.0402,
    website: 'https://www.budapestboxing.hu', contact: '+36 1 234 5678', contactEmail: 'info@budapestboxing.hu',
    description: 'Prestigious boxing academy in the Hungarian capital, carrying on the nation\'s proud Olympic boxing tradition. World-class coaches and facilities at affordable prices make this a top European destination.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby' },
    priceRange: { from: 600, to: 1800, unit: 'week', display: '€600 - €1,800/week' },
    socialMedia: { instagram: '@budapestboxingacademy', facebook: 'https://facebook.com/budapestboxingacademy', twitter: '@budaboxing' },
    climate: 'budapest',
    facilities: 'Three boxing rings, heavy bag hall, speed bag stations, Olympic-standard equipment, thermal bath recovery, strength room, medical centre',
    courtSurfaces: ['Boxing ring', 'Olympic ring', 'Heavy bag area', 'Speed bag area'],
    programs: [
      { name: 'Hungarian Championship Camp', price: '€1,600/week', desc: 'Train with Hungary\'s top coaches in an Olympic-tradition programme' },
      { name: 'Boxing Introduction', price: '€600/week', desc: 'Beginner-friendly course covering all boxing fundamentals' },
      { name: 'Sparring Intensive', price: '€1,200/week', desc: 'Controlled sparring sessions with detailed technical feedback' }
    ],
    coaches: [
      { name: 'László Kovács', credential: 'Hungarian Boxing Federation Master Coach', background: 'Olympic bronze medalist, head coach of Hungarian national team for 15 years', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Hungarian', 'English', 'German'], instagram: '@laszlokovacsboxing' },
      { name: 'Zsuzsanna Nagy', credential: 'AIBA 3-Star Coach', background: 'European champion, pioneer of women\'s boxing in Hungary', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Hungarian', 'English'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800', 'https://images.unsplash.com/photo-1517438322307-e67111335449?w=800'],
    upcomingCamps: [
      { name: 'Danube Fight Camp', startDate: '2026-08-03', endDate: '2026-08-14', price: '€1,500', level: 'Intermediate' },
      { name: 'Spring Preparation Camp', startDate: '2027-03-15', endDate: '2027-03-26', price: '€1,400', level: 'All levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Budapest Sport Hotel', pricePerWeek: 450, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'dormitory', label: 'Academy Dormitory', pricePerWeek: 250, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Thermal bath access included for recovery'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-08-01',
      spotsLeft: 22, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 10, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Hungarian school coordination for international junior athletes',
      medicalStaff: true, safeguarding: 'Hungarian Olympic Committee safeguarding standards',
      airportPickup: true, mealPlan: 'Full board with Hungarian and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Hungarian', 'German'],
      emergencyProtocol: 'Semmelweis University Hospital 10 minutes away, on-site medical staff'
    }
  },
  {
    id: 'prague-boxing-gym',
    name: 'Prague Boxing Gym',
    country: 'Czech Republic', countryFlag: '🇨🇿',
    city: 'Prague', lat: 50.0755, lng: 14.4378,
    website: 'https://www.pragueboxinggym.cz', contact: '+420 222 123 456', contactEmail: 'info@pragueboxinggym.cz',
    description: 'Top-tier boxing gym in historic Prague, offering professional-grade training in a vibrant city setting. Combines Czech boxing heritage with modern coaching methods and excellent value for money.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby' },
    priceRange: { from: 550, to: 1700, unit: 'week', display: '€550 - €1,700/week' },
    socialMedia: { instagram: '@pragueboxinggym', facebook: 'https://facebook.com/pragueboxinggym', twitter: '@pragueboxing' },
    climate: 'prague',
    facilities: 'Boxing ring, training ring, heavy bag area, speed bag stations, conditioning room, physiotherapy suite, locker rooms',
    courtSurfaces: ['Boxing ring', 'Training ring', 'Heavy bag area', 'Speed bag area'],
    programs: [
      { name: 'Czech Fighter Programme', price: '€1,500/week', desc: 'Intensive competitive boxing camp with professional sparring partners' },
      { name: 'Boxing Essentials', price: '€550/week', desc: 'Master the core techniques of boxing in a structured course' },
      { name: 'Conditioning & Boxing', price: '€700/week', desc: 'Strength and conditioning integrated with boxing skill development' }
    ],
    coaches: [
      { name: 'Tomáš Dvořák', credential: 'Czech Boxing Association Master Coach', background: 'Former Czech national champion, 18 years professional coaching', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Czech', 'English', 'Slovak'], instagram: '@tomasdvorakboxing' },
      { name: 'Petra Nováková', credential: 'AIBA 2-Star Coach', background: 'Former European medalist, specialist in tactical boxing', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Czech', 'English'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800', 'https://images.unsplash.com/photo-1517438322307-e67111335449?w=800'],
    upcomingCamps: [
      { name: 'Prague Summer Boxing Camp', startDate: '2026-07-13', endDate: '2026-07-24', price: '€1,400', level: 'All levels' },
      { name: 'Winter Training Intensive', startDate: '2027-01-18', endDate: '2027-01-29', price: '€1,300', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Prague Sport Hotel', pricePerWeek: 420, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'hostel', label: 'Boxer\'s Hostel Prague', pricePerWeek: 220, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Located in central Prague with excellent public transport'
    },
    availability: {
      status: 'limited',
      nextIntake: '2026-07-10',
      spotsLeft: 6, responseTime: '48h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 10, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Czech school coordination available for visiting juniors',
      medicalStaff: true, safeguarding: 'Czech Olympic Committee safeguarding policies',
      airportPickup: true, mealPlan: 'Full board with Czech and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Czech'],
      emergencyProtocol: 'Motol University Hospital 15 minutes away, on-site medical staff'
    }
  },
  {
    id: 'zagreb-boxing-club',
    name: 'Zagreb Boxing Club',
    country: 'Croatia', countryFlag: '🇭🇷',
    city: 'Zagreb', lat: 45.815, lng: 15.9819,
    website: 'https://www.zagrebboxing.hr', contact: '+385 1 234 5678', contactEmail: 'info@zagrebboxing.hr',
    description: 'Croatia\'s finest boxing club situated in Zagreb, combining Balkan fighting spirit with structured European training methods. A growing hub for boxing talent in southeastern Europe.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: false,
    beach: { distance: null, description: 'No beach nearby, Adriatic coast 2 hours by car' },
    priceRange: { from: 500, to: 1500, unit: 'week', display: '€500 - €1,500/week' },
    socialMedia: { instagram: '@zagrebboxingclub', facebook: 'https://facebook.com/zagrebboxingclub', twitter: '@zagrebboxing' },
    climate: 'zagreb',
    facilities: 'Boxing ring, heavy bag area, speed bag stations, outdoor training area, conditioning room, video review room',
    courtSurfaces: ['Boxing ring', 'Heavy bag area', 'Speed bag area', 'Outdoor training area'],
    programs: [
      { name: 'Balkan Boxing Camp', price: '€1,400/week', desc: 'Intensive training camp with sparring against top Croatian and regional fighters' },
      { name: 'Learn to Box', price: '€500/week', desc: 'Beginner programme covering stance, movement, and basic combinations' },
      { name: 'Youth Development Programme', price: '€650/week', desc: 'Structured boxing development for aspiring young fighters' }
    ],
    coaches: [
      { name: 'Marko Jurić', credential: 'Croatian Boxing Federation Level 4 Coach', background: 'Former Croatian champion, specialist in amateur competition preparation', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Croatian', 'English', 'Serbian'], instagram: '@markojuricboxing' },
      { name: 'Ivana Horvat', credential: 'AIBA 1-Star Coach', background: 'National team assistant coach, expert in youth boxing development', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Croatian', 'English'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800', 'https://images.unsplash.com/photo-1517438322307-e67111335449?w=800'],
    upcomingCamps: [
      { name: 'Adriatic Fight Camp', startDate: '2026-09-01', endDate: '2026-09-12', price: '€1,200', level: 'Intermediate' },
      { name: 'Spring Boxing Camp', startDate: '2027-04-07', endDate: '2027-04-18', price: '€1,100', level: 'Beginner' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Zagreb Partner Hotel', pricePerWeek: 380, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'hostel', label: 'Zagreb Sport Hostel', pricePerWeek: 200, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Affordable accommodation in central Zagreb'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-09-01',
      spotsLeft: 20, responseTime: '48h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 10, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Croatian school coordination for international students',
      medicalStaff: true, safeguarding: 'Croatian Olympic Committee safeguarding standards',
      airportPickup: true, mealPlan: 'Full board with Croatian and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Croatian'],
      emergencyProtocol: 'KBC Zagreb hospital 10 minutes away, on-site first aid'
    }
  },
  {
    id: 'brussels-boxing-academy',
    name: 'Brussels Boxing Academy',
    country: 'Belgium', countryFlag: '🇧🇪',
    city: 'Brussels', lat: 50.8503, lng: 4.3517,
    website: 'https://www.brusselsboxing.be', contact: '+32 2 345 6789', contactEmail: 'info@brusselsboxing.be',
    description: 'Multicultural boxing academy in the European capital, offering training in three languages. Strong community ethos and professional coaching attract fighters from across Europe.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby' },
    priceRange: { from: 850, to: 2500, unit: 'week', display: '€850 - €2,500/week' },
    socialMedia: { instagram: '@brusselsboxingacademy', facebook: 'https://facebook.com/brusselsboxingacademy', twitter: '@bxlboxing' },
    climate: 'brussels',
    facilities: 'Two boxing rings, heavy bag room, speed bag area, cardio zone, strength room, recovery room, athlete lounge',
    courtSurfaces: ['Boxing ring', 'Training ring', 'Heavy bag area', 'Speed bag area'],
    programs: [
      { name: 'European Boxing Programme', price: '€2,300/week', desc: 'High-level competitive training with international sparring opportunities' },
      { name: 'Boxing Foundations', price: '€850/week', desc: 'Complete beginner course in French, Dutch, or English' },
      { name: 'Women\'s Boxing Programme', price: '€900/week', desc: 'Dedicated programme for women of all levels' }
    ],
    coaches: [
      { name: 'Jean-Pierre Dubois', credential: 'Belgian Boxing Federation Master Coach', background: 'Former Belgian champion, 22 years coaching experience across Europe', atpWta: false, bestRanking: null, rankingNote: null, languages: ['French', 'Dutch', 'English'], instagram: '@jpduboisboxing' },
      { name: 'Sofie Vermeersch', credential: 'AIBA 2-Star Coach', background: 'Former Benelux champion, expert in women\'s competitive boxing', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Dutch', 'French', 'English'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800', 'https://images.unsplash.com/photo-1517438322307-e67111335449?w=800'],
    upcomingCamps: [
      { name: 'Brussels International Camp', startDate: '2026-08-17', endDate: '2026-08-28', price: '€2,100', level: 'All levels' },
      { name: 'Winter Sparring Camp', startDate: '2027-02-15', endDate: '2027-02-26', price: '€2,000', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Brussels City Hotel', pricePerWeek: 650, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'hostel', label: 'Athlete Hostel Brussels', pricePerWeek: 350, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Central Brussels location, multilingual staff'
    },
    availability: {
      status: 'waitlist',
      nextIntake: '2026-08-15',
      spotsLeft: 0, responseTime: '48h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 10, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Belgian school coordination in French and Dutch',
      medicalStaff: true, safeguarding: 'Belgian Olympic Committee safeguarding policies',
      airportPickup: true, mealPlan: 'Full board with Belgian and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'French', 'Dutch'],
      emergencyProtocol: 'UZ Brussel hospital 12 minutes away, on-site medical team'
    }
  },
  {
    id: 'vienna-boxing-centre',
    name: 'Vienna Boxing Centre',
    country: 'Austria', countryFlag: '🇦🇹',
    city: 'Vienna', lat: 48.2082, lng: 16.3738,
    website: 'https://www.viennaboxing.at', contact: '+43 1 234 5678', contactEmail: 'info@viennaboxing.at',
    description: 'Elegant yet gritty boxing centre in the Austrian capital, blending Viennese sporting culture with hard-nosed fight training. Excellent facilities and a welcoming atmosphere for fighters of all backgrounds.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby' },
    priceRange: { from: 750, to: 2200, unit: 'week', display: '€750 - €2,200/week' },
    socialMedia: { instagram: '@viennaboxingcentre', facebook: 'https://facebook.com/viennaboxingcentre', twitter: '@viennaboxing' },
    climate: 'vienna',
    facilities: 'Two boxing rings, heavy bag gallery, speed bag area, Olympic lifting room, sports science lab, physiotherapy centre, steam room',
    courtSurfaces: ['Boxing ring', 'Competition ring', 'Heavy bag area', 'Speed bag area'],
    programs: [
      { name: 'Austrian Elite Camp', price: '€2,000/week', desc: 'Advanced competitive training with Austrian national team coaches' },
      { name: 'Classical Boxing Course', price: '€750/week', desc: 'Structured course focusing on orthodox boxing technique' },
      { name: 'Boxing & Wellness', price: '€900/week', desc: 'Combine boxing training with Vienna\'s renowned wellness culture' }
    ],
    coaches: [
      { name: 'Stefan Gruber', credential: 'Austrian Boxing Federation Master Coach', background: 'Former Austrian champion, Olympic team head coach', atpWta: false, bestRanking: null, rankingNote: null, languages: ['German', 'English'], instagram: '@stefangruberboxing' },
      { name: 'Katharina Berger', credential: 'AIBA 2-Star Coach', background: 'Former European medalist, specialist in southpaw technique', atpWta: false, bestRanking: null, rankingNote: null, languages: ['German', 'English', 'Hungarian'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800', 'https://images.unsplash.com/photo-1517438322307-e67111335449?w=800'],
    upcomingCamps: [
      { name: 'Vienna Summer Fight Camp', startDate: '2026-07-20', endDate: '2026-07-31', price: '€1,800', level: 'Intermediate' },
      { name: 'Alpine Boxing Retreat', startDate: '2027-03-01', endDate: '2027-03-12', price: '€1,900', level: 'All levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Vienna Sport Hotel', pricePerWeek: 550, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'hostel', label: 'Vienna Athlete Hostel', pricePerWeek: 300, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Located near Vienna\'s Prater park for outdoor conditioning'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-07-15',
      spotsLeft: 16, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 10, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Austrian school coordination available',
      medicalStaff: true, safeguarding: 'Austrian Olympic Committee safeguarding standards',
      airportPickup: true, mealPlan: 'Full board with Austrian and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'German'],
      emergencyProtocol: 'AKH Vienna hospital 10 minutes away, on-site medical staff'
    }
  },
  {
    id: 'athens-boxing-academy',
    name: 'Athens Boxing Academy',
    country: 'Greece', countryFlag: '🇬🇷',
    city: 'Athens', lat: 37.9838, lng: 23.7275,
    website: 'https://www.athensboxing.gr', contact: '+30 210 123 4567', contactEmail: 'info@athensboxing.gr',
    description: 'Historic boxing academy in the birthplace of the Olympic Games. Training under the Mediterranean sun with a focus on classical pugilism and modern competitive techniques.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 12, description: 'Athens Riviera beaches 12 km away' },
    priceRange: { from: 600, to: 1800, unit: 'week', display: '€600 - €1,800/week' },
    socialMedia: { instagram: '@athensboxingacademy', facebook: 'https://facebook.com/athensboxingacademy', twitter: '@athensboxing' },
    climate: 'athens',
    facilities: 'Boxing ring, outdoor training area, heavy bag terrace, speed bag room, Olympic-standard equipment, physiotherapy room, rooftop conditioning area',
    courtSurfaces: ['Boxing ring', 'Outdoor training area', 'Heavy bag area', 'Speed bag area'],
    programs: [
      { name: 'Olympic Heritage Camp', price: '€1,600/week', desc: 'Train in the tradition of Greek boxing with elite coaching' },
      { name: 'Mediterranean Boxing Course', price: '€600/week', desc: 'Learn boxing fundamentals in a sunny, inspiring environment' },
      { name: 'Combat Fitness', price: '€550/week', desc: 'Boxing-based fitness programme with outdoor conditioning' }
    ],
    coaches: [
      { name: 'Nikos Papadopoulos', credential: 'Hellenic Boxing Federation Master Coach', background: 'Olympic team coach, specialist in classical boxing technique', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Greek', 'English'], instagram: '@nikospapadboxing' },
      { name: 'Maria Georgiou', credential: 'AIBA 2-Star Coach', background: 'Former Mediterranean Games medalist, youth development expert', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Greek', 'English', 'French'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800', 'https://images.unsplash.com/photo-1517438322307-e67111335449?w=800'],
    upcomingCamps: [
      { name: 'Aegean Summer Camp', startDate: '2026-06-08', endDate: '2026-06-19', price: '€1,400', level: 'All levels' },
      { name: 'Athens Winter Camp', startDate: '2027-02-08', endDate: '2027-02-19', price: '€1,300', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Athens Sport Hotel', pricePerWeek: 400, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'hostel', label: 'Athens Athlete Hostel', pricePerWeek: 220, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Views of the Acropolis from the rooftop training area'
    },
    availability: {
      status: 'limited',
      nextIntake: '2026-06-01',
      spotsLeft: 5, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 10, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Greek school coordination for visiting international students',
      medicalStaff: true, safeguarding: 'Hellenic Olympic Committee safeguarding protocols',
      airportPickup: true, mealPlan: 'Full board with Greek and Mediterranean cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Greek'],
      emergencyProtocol: 'Evangelismos Hospital 8 minutes away, on-site medical staff'
    }
  },
  {
    id: 'istanbul-fight-academy',
    name: 'Istanbul Fight Academy',
    country: 'Turkey', countryFlag: '🇹🇷',
    city: 'Istanbul', lat: 41.0082, lng: 28.9784,
    website: 'https://www.istanbulfight.com.tr', contact: '+90 212 345 6789', contactEmail: 'info@istanbulfight.com.tr',
    description: 'Powerhouse boxing academy bridging Europe and Asia in Istanbul. Turkey\'s rich boxing tradition and passionate coaching create an electrifying training environment for fighters from around the world.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 15, description: 'Bosphorus waterfront and Black Sea beaches accessible' },
    priceRange: { from: 500, to: 1600, unit: 'week', display: '€500 - €1,600/week' },
    socialMedia: { instagram: '@istanbulfightacademy', facebook: 'https://facebook.com/istanbulfightacademy', twitter: '@istanbulfight' },
    climate: 'istanbul',
    facilities: 'Three boxing rings, heavy bag hall, speed bag stations, wrestling room, strength and conditioning gym, Turkish bath recovery, medical room',
    courtSurfaces: ['Boxing ring', 'Competition ring', 'Heavy bag area', 'Speed bag area'],
    programs: [
      { name: 'Bosphorus Fight Camp', price: '€1,400/week', desc: 'Elite competitive camp with top Turkish and international sparring' },
      { name: 'Turkish Boxing Fundamentals', price: '€500/week', desc: 'Learn boxing from scratch with experienced Turkish coaches' },
      { name: 'Power Boxing Programme', price: '€800/week', desc: 'Strength-focused boxing programme for building knockout power' }
    ],
    coaches: [
      { name: 'Burak Yılmaz', credential: 'Turkish Boxing Federation Master Coach', background: 'Former Turkish heavyweight champion, Olympic team coach', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Turkish', 'English', 'German'], instagram: '@burakyilmazboxing' },
      { name: 'Ayşe Demir', credential: 'AIBA 2-Star Coach', background: 'European bronze medalist, pioneer of women\'s boxing in Turkey', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Turkish', 'English'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800', 'https://images.unsplash.com/photo-1517438322307-e67111335449?w=800'],
    upcomingCamps: [
      { name: 'Istanbul Summer Showdown', startDate: '2026-09-14', endDate: '2026-09-25', price: '€1,200', level: 'Advanced' },
      { name: 'Spring Fight Preparation', startDate: '2027-04-21', endDate: '2027-05-02', price: '€1,100', level: 'All levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Istanbul Sport Hotel', pricePerWeek: 350, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'hostel', label: 'Fighter Hostel Istanbul', pricePerWeek: 180, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Turkish bath access included for recovery'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-09-10',
      spotsLeft: 25, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 10, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Turkish school coordination for international students',
      medicalStaff: true, safeguarding: 'Turkish Olympic Committee safeguarding standards',
      airportPickup: true, mealPlan: 'Full board with Turkish and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Turkish'],
      emergencyProtocol: 'Istanbul University Hospital 10 minutes away, on-site medical staff'
    }
  },
  {
    id: 'lisbon-boxing-club',
    name: 'Lisbon Boxing Club',
    country: 'Portugal', countryFlag: '🇵🇹',
    city: 'Lisbon', lat: 38.7223, lng: -9.1393,
    website: 'https://www.lisbonboxing.pt', contact: '+351 21 234 5678', contactEmail: 'info@lisbonboxing.pt',
    description: 'Vibrant boxing club on Lisbon\'s sun-drenched coast, combining Portuguese fighting spirit with Atlantic-breeze conditioning. A warm and welcoming club attracting international fighters year-round.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: false,
    beach: { distance: 6, description: 'Cascais and Costa da Caparica beaches within easy reach' },
    priceRange: { from: 600, to: 1800, unit: 'week', display: '€600 - €1,800/week' },
    socialMedia: { instagram: '@lisbonboxingclub', facebook: 'https://facebook.com/lisbonboxingclub', twitter: '@lisbonboxing' },
    climate: 'lisbon',
    facilities: 'Boxing ring, outdoor heavy bag area, speed bag room, beachside running track, conditioning room, recovery area, athlete café',
    courtSurfaces: ['Boxing ring', 'Heavy bag area', 'Speed bag area', 'Outdoor training area'],
    programs: [
      { name: 'Atlantic Fighter Camp', price: '€1,600/week', desc: 'Competitive training combined with outdoor conditioning along the coast' },
      { name: 'Portuguese Boxing Basics', price: '€600/week', desc: 'Learn to box in a relaxed, supportive environment' },
      { name: 'Beach Boxing Fitness', price: '€550/week', desc: 'Boxing fitness training with beach running and outdoor workouts' }
    ],
    coaches: [
      { name: 'Ricardo Silva', credential: 'Portuguese Boxing Federation Level 4 Coach', background: 'Former Portuguese champion, specialist in technical counter-boxing', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Portuguese', 'English', 'Spanish'], instagram: '@ricardosilvaboxing' },
      { name: 'Ana Ferreira', credential: 'AIBA 1-Star Coach', background: 'Former national team member, youth development specialist', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Portuguese', 'English'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800', 'https://images.unsplash.com/photo-1517438322307-e67111335449?w=800'],
    upcomingCamps: [
      { name: 'Lisbon Sun Camp', startDate: '2026-05-11', endDate: '2026-05-22', price: '€1,400', level: 'All levels' },
      { name: 'Autumn Fight Camp', startDate: '2026-10-05', endDate: '2026-10-16', price: '€1,300', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Lisbon Riverside Hotel', pricePerWeek: 450, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'hostel', label: 'Lisbon Sport Hostel', pricePerWeek: 250, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Beach access and waterfront location'
    },
    availability: {
      status: 'waitlist',
      nextIntake: '2026-05-05',
      spotsLeft: 0, responseTime: '48h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 10, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Portuguese school coordination for international juniors',
      medicalStaff: true, safeguarding: 'Portuguese Olympic Committee safeguarding standards',
      airportPickup: true, mealPlan: 'Full board with Portuguese and Mediterranean cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Portuguese', 'Spanish'],
      emergencyProtocol: 'Hospital de Santa Maria 10 minutes away, on-site first aid'
    }
  },
  {
    id: 'oslo-boxing-institute',
    name: 'Oslo Boxing Institute',
    country: 'Norway', countryFlag: '🇳🇴',
    city: 'Oslo', lat: 59.9139, lng: 10.7522,
    website: 'https://www.osloboxing.no', contact: '+47 22 12 34 56', contactEmail: 'info@osloboxing.no',
    description: 'Norway\'s leading boxing institute, built on Scandinavian values of discipline and fairness. State-of-the-art facilities and a holistic approach to fighter development in the heart of Oslo.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'Oslo fjord swimming areas nearby in summer' },
    priceRange: { from: 1000, to: 3000, unit: 'week', display: '€1,000 - €3,000/week' },
    socialMedia: { instagram: '@osloboxinginstitute', facebook: 'https://facebook.com/osloboxinginstitute', twitter: '@osloboxing' },
    climate: 'oslo',
    facilities: 'Two boxing rings, heavy bag area, speed bag stations, cross-training room, ice bath recovery, sauna, sports psychology room, video analysis suite',
    courtSurfaces: ['Boxing ring', 'Training ring', 'Heavy bag area', 'Speed bag area'],
    programs: [
      { name: 'Norse Warrior Camp', price: '€2,800/week', desc: 'Elite-level training camp for competitive fighters with full sports science support' },
      { name: 'Boxing Fundamentals', price: '€1,000/week', desc: 'Comprehensive introduction to boxing with personalised coaching' },
      { name: 'Mental Toughness & Boxing', price: '€1,200/week', desc: 'Combine boxing training with sports psychology sessions' }
    ],
    coaches: [
      { name: 'Ole Kristiansen', credential: 'Norwegian Boxing Federation Master Coach', background: 'Former Scandinavian champion, head coach of Norwegian national team', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Norwegian', 'English', 'Swedish'], instagram: '@olekboxing' },
      { name: 'Ingrid Johansen', credential: 'AIBA 2-Star Coach', background: 'European medalist, specialist in sports science integration', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Norwegian', 'English', 'Danish'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800', 'https://images.unsplash.com/photo-1517438322307-e67111335449?w=800'],
    upcomingCamps: [
      { name: 'Nordic Summer Camp', startDate: '2026-06-29', endDate: '2026-07-10', price: '€2,500', level: 'All levels' },
      { name: 'Polar Training Camp', startDate: '2027-01-25', endDate: '2027-02-05', price: '€2,600', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Oslo Sport Hotel', pricePerWeek: 800, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'dormitory', label: 'Oslo Athlete Dormitory', pricePerWeek: 450, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'All accommodation includes sauna and recovery facilities'
    },
    availability: {
      status: 'limited',
      nextIntake: '2026-06-25',
      spotsLeft: 7, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 10, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Norwegian school coordination for visiting junior athletes',
      medicalStaff: true, safeguarding: 'Norwegian Olympic Committee safeguarding protocols',
      airportPickup: true, mealPlan: 'Full board with Norwegian and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Norwegian'],
      emergencyProtocol: 'Oslo University Hospital 10 minutes away, on-site medical staff'
    }
  },
  {
    id: 'belgrade-boxing-academy',
    name: 'Belgrade Boxing Academy',
    country: 'Serbia', countryFlag: '🇷🇸',
    city: 'Belgrade', lat: 44.7866, lng: 20.4489,
    website: 'https://www.belgradeboxing.rs', contact: '+381 11 012 3456', contactEmail: 'info@belgradeboxing.rs',
    description: 'Serbia\'s top boxing academy in Belgrade, building on a strong Balkan boxing tradition that has produced European and World Championship medallists.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby, Ada Ciganlija lake for outdoor training' },
    priceRange: { from: 400, to: 1200, unit: 'week', display: '€400 - €1,200/week' },
    socialMedia: { instagram: '@belgradeboxing', facebook: 'https://facebook.com/belgradeboxing', twitter: '@belgradeboxing' },
    climate: 'belgrade',
    facilities: 'Two boxing rings, heavy bag area, speed bag stations, strength and conditioning room, sauna, recovery room, video analysis',
    courtSurfaces: ['Boxing ring', 'Training ring', 'Heavy bag area', 'Speed bag area'],
    programs: [
      { name: 'Serbian Boxing Elite', price: '€1,000/week', desc: 'Elite boxing training in the Serbian tradition with full sports science support' },
      { name: 'Boxing Fundamentals', price: '€400/week', desc: 'Comprehensive introduction to boxing with personalised coaching' }
    ],
    coaches: [
      { name: 'Bojan Mihailović', credential: 'AIBA 3-Star Coach', background: 'Former Serbian national team boxer and European Championship bronze medallist', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Serbian', 'English'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800'],
    upcomingCamps: [
      { name: 'Belgrade Summer Boxing Camp', startDate: '2026-07-06', endDate: '2026-07-17', price: '€1,800', level: 'All levels' },
      { name: 'Winter Sparring Camp', startDate: '2027-01-18', endDate: '2027-01-29', price: '€1,600', level: 'Intermediate-Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Belgrade Sport Hotel', pricePerWeek: 280, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'dormitory', label: 'Belgrade Athlete Dormitory', pricePerWeek: 150, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'All accommodation includes gym access and recovery facilities'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-06-01',
      spotsLeft: 15, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 10, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Serbian school coordination for visiting junior athletes',
      medicalStaff: true, safeguarding: 'Serbian Boxing Federation safeguarding protocols',
      airportPickup: true, mealPlan: 'Full board with Serbian and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Serbian', 'English'],
      emergencyProtocol: 'Clinical Centre of Serbia 10 minutes away, on-site medical staff'
    }
  },
  {
    id: 'antalya-boxing-camp',
    name: 'Antalya Boxing Camp',
    country: 'Turkey',
    countryFlag: '',
    city: 'Antalya',
    lat: 36.8969,
    lng: 30.7133,
    website: 'https://www.antalyaboxingcamp.com.tr',
    contact: '+90 242 456 7890',
    contactEmail: 'info@antalyaboxingcamp.com.tr',
    description: 'Mediterranean boxing training camp in Antalya, offering year-round warm-weather training. Popular with European boxers for pre-fight camps and conditioning blocks in affordable Turkish Riviera setting.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 2, description: 'Konyaaltı Beach 2km from training facility' },
    priceRange: { from: 400, to: 1100, unit: 'week', display: '400 - 1,100/week' },
    socialMedia: { instagram: '@antalyaboxing', facebook: 'https://facebook.com/antalyaboxingcamp', twitter: '@antalyaboxing' },
    climate: 'antalya',
    facilities: 'Boxing gym with 2 rings, heavy bag area, speed bags, strength training facility, outdoor running track, recovery pool, sauna',
    courtSurfaces: ['Boxing ring', 'Training area', 'Outdoor track'],
    programs: [
      { name: 'Mediterranean Fight Camp', price: '900/week', desc: 'Intensive pre-fight preparation combining sparring, conditioning and weight management in warm weather' },
      { name: 'Youth Boxing Development', price: '400/week', desc: 'Safe and structured youth boxing programme with fundamentals and fitness focus' },
      { name: 'Conditioning & Strength Camp', price: '700/week', desc: 'Boxing-specific conditioning with beach running, pool recovery and altitude-simulated training' },
      { name: 'Technical Skills Camp', price: '1,100/week', desc: 'Advanced technical boxing with video analysis and tactical sparring sessions' }
    ],
    coaches: [
      { name: 'Sinan Şamil', credential: 'AIBA 3-Star Coach', background: 'Former Turkish national team boxer and European Championships medallist. 15 years coaching experience at international level.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Turkish', 'English'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800'],
    upcomingCamps: [
      { name: 'Spring Fight Camp', startDate: '2026-03-23', endDate: '2026-03-30', price: '900', level: 'Intermediate' },
      { name: 'Summer Youth Camp', startDate: '2026-07-06', endDate: '2026-07-13', price: '400', level: 'Beginner' },
      { name: 'Winter Conditioning Camp', startDate: '2027-01-12', endDate: '2027-01-19', price: '700', level: 'All levels' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Mediterranean Training Hotel', pricePerWeek: 300, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'shared', label: 'Fighter Apartment', pricePerWeek: 180, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Beachside accommodation with Mediterranean views and sports nutrition included'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-03-01',
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
      schooling: 'Online schooling support available',
      medicalStaff: true,
      safeguarding: 'Turkish Boxing Federation child protection protocols',
      airportPickup: true,
      mealPlan: 'Full board with fighter nutrition programme',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Turkish', 'English'],
      emergencyProtocol: 'On-site ringside medic, Antalya hospital 10 minutes'
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
  },
  'stockholm': {
    avgTemp: { summer: 20, winter: -2 },
    rainfall: { summer: 'Moderate', winter: 'Moderate' },
    humidity: 'Moderate',
    bestMonths: ['May', 'June', 'July', 'August'],
    description: 'Cool maritime climate with mild summers and cold winters'
  },
  'copenhagen': {
    avgTemp: { summer: 20, winter: 1 },
    rainfall: { summer: 'Moderate', winter: 'Moderate' },
    humidity: 'High',
    bestMonths: ['May', 'June', 'July', 'August'],
    description: 'Maritime climate with mild summers and cool winters'
  },
  'helsinki': {
    avgTemp: { summer: 19, winter: -5 },
    rainfall: { summer: 'Moderate', winter: 'Low' },
    humidity: 'Moderate',
    bestMonths: ['June', 'July', 'August'],
    description: 'Subarctic-influenced climate with short warm summers and long cold winters'
  },
  'budapest': {
    avgTemp: { summer: 26, winter: 1 },
    rainfall: { summer: 'Moderate', winter: 'Low' },
    humidity: 'Moderate',
    bestMonths: ['May', 'June', 'July', 'August', 'September'],
    description: 'Continental climate with warm summers and cold winters'
  },
  'prague': {
    avgTemp: { summer: 24, winter: 0 },
    rainfall: { summer: 'Moderate', winter: 'Low' },
    humidity: 'Moderate',
    bestMonths: ['May', 'June', 'July', 'August', 'September'],
    description: 'Continental climate with warm summers and moderately cold winters'
  },
  'zagreb': {
    avgTemp: { summer: 25, winter: 2 },
    rainfall: { summer: 'Moderate', winter: 'Moderate' },
    humidity: 'Moderate',
    bestMonths: ['May', 'June', 'July', 'August', 'September'],
    description: 'Continental climate with warm summers and cool winters'
  },
  'brussels': {
    avgTemp: { summer: 21, winter: 3 },
    rainfall: { summer: 'Moderate', winter: 'Moderate' },
    humidity: 'High',
    bestMonths: ['May', 'June', 'July', 'August', 'September'],
    description: 'Maritime climate with mild temperatures year-round'
  },
  'vienna': {
    avgTemp: { summer: 25, winter: 1 },
    rainfall: { summer: 'Moderate', winter: 'Low' },
    humidity: 'Moderate',
    bestMonths: ['May', 'June', 'July', 'August', 'September'],
    description: 'Continental climate with warm summers and cold winters'
  },
  'athens': {
    avgTemp: { summer: 33, winter: 10 },
    rainfall: { summer: 'Low', winter: 'Moderate' },
    humidity: 'Low',
    bestMonths: ['April', 'May', 'June', 'September', 'October'],
    description: 'Mediterranean climate with hot dry summers and mild wet winters'
  },
  'istanbul': {
    avgTemp: { summer: 28, winter: 6 },
    rainfall: { summer: 'Low', winter: 'High' },
    humidity: 'Moderate',
    bestMonths: ['May', 'June', 'July', 'August', 'September'],
    description: 'Mediterranean-influenced climate with warm summers and cool rainy winters'
  },
  'lisbon': {
    avgTemp: { summer: 28, winter: 11 },
    rainfall: { summer: 'Low', winter: 'Moderate' },
    humidity: 'Moderate',
    bestMonths: ['April', 'May', 'June', 'July', 'August', 'September', 'October'],
    description: 'Mediterranean climate with warm dry summers and mild winters'
  },
  'oslo': {
    avgTemp: { summer: 20, winter: -3 },
    rainfall: { summer: 'Moderate', winter: 'Low' },
    humidity: 'Moderate',
    bestMonths: ['June', 'July', 'August'],
    description: 'Continental climate with warm summers and cold snowy winters'
  },
  'belgrade': {
    avgTemp: { summer: 23, winter: 1 },
    rainfall: { summer: 'Moderate', winter: 'Moderate' },
    humidity: 'Moderate',
    bestMonths: ['May', 'June', 'July', 'August', 'September'],
    description: 'Continental climate with warm summers and cold winters'
  },
  'antalya': {
    avgTemp: { summer: 29, winter: 11 },
    rainfall: { summer: 'Very low', winter: 'High' },
    humidity: 'Moderate',
    bestMonths: ['March', 'April', 'May', 'June', 'September', 'October', 'November'],
    description: 'Hot Mediterranean climate with dry summers and mild wet winters, excellent for year-round outdoor training'
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

const COUNTRIES = ['UK', 'Ireland', 'Germany', 'France', 'Italy', 'Ukraine', 'Poland', 'Kazakhstan', 'Sweden', 'Denmark', 'Finland', 'Hungary', 'Czech Republic', 'Croatia', 'Belgium', 'Austria', 'Greece', 'Turkey', 'Portugal', 'Norway', 'Serbia'];
