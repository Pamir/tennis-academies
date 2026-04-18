const SPORT_TYPE = 'fencing';

const ACADEMIES = [
  {
    id: 'milan-fencing-academy',
    name: 'Milan Fencing Academy',
    country: 'Italy',
    countryFlag: '🇮🇹',
    city: 'Milan',
    lat: 45.4642,
    lng: 9.1900,
    website: 'https://www.milanfencing.it',
    contact: '+39 02 123 4567',
    contactEmail: 'info@milanfencing.it',
    description: 'One of Italy\'s most prestigious fencing academies in Milan, continuing the Italian tradition of excellence in foil and épée.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby' },
    priceRange: { from: 800, to: 1800, unit: 'week', display: '€800 - €1,800/week' },
    socialMedia: { instagram: '@milanfencing', facebook: 'https://facebook.com/milanfencing', twitter: '@milanfencing' },
    climate: 'milan',
    facilities: 'Fencing salle, electronic scoring system, video replay room, footwork hall, gym, armoury',
    courtSurfaces: ['Épée', 'Foil', 'Sabre'],
    programs: [
      { name: 'Italian Foil Masterclass', price: '€1200/week', desc: 'Classical Italian foil technique with world-class maestri' },
      { name: 'Competition Preparation', price: '€1000/week', desc: 'Intensive bout preparation for upcoming FIE circuit events' },
      { name: 'Youth Fencing Foundation', price: '€800/week', desc: 'Foundational skills for young fencers aged 8-14' }
    ],
    coaches: [
      { name: 'Alessandro Rossi', credential: 'FIE Maître d\'Armes', background: 'Former Italian national team foilist and World Championship medallist', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Italian', 'French'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800'],
    upcomingCamps: [
      { name: 'Milan Summer Fencing Intensive', startDate: '2025-07-01', endDate: '2025-07-08', price: '€1200', level: 'Advanced' }
    ],
    accommodation: {
      types: [{ type: 'hotel', label: 'City Centre Boutique Hotel', pricePerWeek: 550, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Elegant hotel in central Milan near the fencing salle'
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
      minAge: 8,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Italian school integration for long-term students',
      medicalStaff: true,
      safeguarding: 'Italian Fencing Federation child protection standards',
      airportPickup: true,
      mealPlan: 'Full board with Italian cuisine and sports nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Italian'],
      emergencyProtocol: 'On-site medical team with Ospedale Maggiore partnership'
    }
  },
  {
    id: 'rome-fencing-club',
    name: 'Rome Fencing Club',
    country: 'Italy',
    countryFlag: '🇮🇹',
    city: 'Rome',
    lat: 41.9028,
    lng: 12.4964,
    website: 'https://www.romefencing.it',
    contact: '+39 06 234 5678',
    contactEmail: 'info@romefencing.it',
    description: 'Historic fencing club in the Eternal City, training champions in all three weapons since 1884.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 30, description: 'Ostia beach 30 km away' },
    priceRange: { from: 750, to: 1600, unit: 'week', display: '€750 - €1,600/week' },
    socialMedia: { instagram: '@romefencing', facebook: 'https://facebook.com/romefencing', twitter: '@romefencing' },
    climate: 'rome',
    facilities: 'Fencing salle, electronic scoring, video replay, footwork hall, gym, armoury',
    courtSurfaces: ['Épée', 'Foil', 'Sabre'],
    programs: [
      { name: 'Gladiator Fencing Camp', price: '€950/week', desc: 'All-weapon training in Rome\'s legendary fencing tradition' },
      { name: 'Sabre Intensive', price: '€1000/week', desc: 'High-speed sabre training with tactical bout analysis' }
    ],
    coaches: [
      { name: 'Marco Bianchi', credential: 'FIE Maître d\'Armes', background: 'Olympic silver medallist and 20-year coaching veteran', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Italian'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1565711561500-49678a10a63f?w=800'],
    upcomingCamps: [
      { name: 'Roman Fencing Week', startDate: '2025-07-14', endDate: '2025-07-21', price: '€950', level: 'Intermediate' }
    ],
    accommodation: {
      types: [{ type: 'hotel', label: 'Historic Rome Hotel', pricePerWeek: 520, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Charming hotel in central Rome with easy public transport'
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
      minAge: 7,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Academic support and Italian language courses',
      medicalStaff: true,
      safeguarding: 'Full compliance with FIS child safety regulations',
      airportPickup: true,
      mealPlan: 'Full board with traditional Roman cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Italian'],
      emergencyProtocol: 'On-site first aid with Policlinico Umberto I nearby'
    }
  },
  {
    id: 'naples-fencing-scuola',
    name: 'Naples Fencing Scuola',
    country: 'Italy',
    countryFlag: '🇮🇹',
    city: 'Naples',
    lat: 40.8518,
    lng: 14.2681,
    website: 'https://www.naplesfencing.it',
    contact: '+39 081 345 6789',
    contactEmail: 'info@naplesfencing.it',
    description: 'A passionate fencing school in Naples carrying on the proud Neapolitan duelling tradition with modern coaching methods.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 5, description: 'Naples waterfront 5 km away' },
    priceRange: { from: 600, to: 1300, unit: 'week', display: '€600 - €1,300/week' },
    socialMedia: { instagram: '@naplesfencing', facebook: 'https://facebook.com/naplesfencing', twitter: '@naplesfencing' },
    climate: 'naples',
    facilities: 'Fencing salle, electronic scoring, video replay, footwork hall, gym, armoury',
    courtSurfaces: ['Épée', 'Foil', 'Sabre'],
    programs: [
      { name: 'Neapolitan Épée School', price: '€750/week', desc: 'Deep épée training rooted in the Neapolitan fencing tradition' },
      { name: 'All-Weapon Discovery', price: '€650/week', desc: 'Introduction to all three weapons for beginners' }
    ],
    coaches: [
      { name: 'Giuseppe Ferraro', credential: 'FIS Master Coach', background: 'Third-generation fencing maestro from a legendary Neapolitan fencing family', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Italian'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800'],
    upcomingCamps: [
      { name: 'Naples Fencing Festival', startDate: '2025-07-07', endDate: '2025-07-14', price: '€750', level: 'All levels' }
    ],
    accommodation: {
      types: [{ type: 'hotel', label: 'Seafront Hotel', pricePerWeek: 380, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Hotel with views of the Bay of Naples and Vesuvius'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-15',
      spotsLeft: 20,
      responseTime: '48h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 7,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Local schooling support and Italian tutoring',
      medicalStaff: true,
      safeguarding: 'Italian federation child protection policy enforced',
      airportPickup: true,
      mealPlan: 'Full board with authentic Neapolitan cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Italian'],
      emergencyProtocol: 'Medical staff on call with Ospedale Cardarelli nearby'
    }
  },
  {
    id: 'paris-fencing-academy',
    name: 'Paris Fencing Academy',
    country: 'France',
    countryFlag: '🇫🇷',
    city: 'Paris',
    lat: 48.8566,
    lng: 2.3522,
    website: 'https://www.parisfencing.fr',
    contact: '+33 1 55 00 1234',
    contactEmail: 'info@parisfencing.fr',
    description: 'France\'s premier fencing academy in Paris, home to a long tradition of French épée and foil excellence.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby' },
    priceRange: { from: 900, to: 1900, unit: 'week', display: '€900 - €1,900/week' },
    socialMedia: { instagram: '@parisfencing', facebook: 'https://facebook.com/parisfencing', twitter: '@parisfencing' },
    climate: 'paris',
    facilities: 'Fencing salle, electronic scoring, video replay, footwork hall, gym, armoury',
    courtSurfaces: ['Épée', 'Foil', 'Sabre'],
    programs: [
      { name: 'French Épée Excellence', price: '€1100/week', desc: 'Classical French épée methodology with world-class maîtres' },
      { name: 'Olympic Preparation', price: '€1400/week', desc: 'Elite programme for fencers targeting international competition' }
    ],
    coaches: [
      { name: 'Philippe Laurent', credential: 'FFE Maître d\'Armes', background: 'Former French national team épéeist and multiple European Championship medallist', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'French'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?w=800'],
    upcomingCamps: [
      { name: 'Paris Summer Fencing', startDate: '2025-07-01', endDate: '2025-07-08', price: '€1100', level: 'Advanced' }
    ],
    accommodation: {
      types: [{ type: 'hotel', label: 'Left Bank Hotel', pricePerWeek: 600, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Elegant hotel on the Left Bank near the fencing salle'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-01',
      spotsLeft: 12,
      responseTime: '48h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 8,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'French school partnership for term-time students',
      medicalStaff: true,
      safeguarding: 'FFE safeguarding certification for all staff',
      airportPickup: true,
      mealPlan: 'Full board with French cuisine and dietary options',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'French'],
      emergencyProtocol: '24/7 medical coverage with Hôpital Necker partnership'
    }
  },
  {
    id: 'orleans-fencing-centre',
    name: 'Orléans Fencing Centre',
    country: 'France',
    countryFlag: '🇫🇷',
    city: 'Orléans',
    lat: 47.9029,
    lng: 1.9039,
    website: 'https://www.orleansfencing.fr',
    contact: '+33 2 38 00 5678',
    contactEmail: 'info@orleansfencing.fr',
    description: 'A dedicated fencing centre in the Loire Valley, combining high-quality training with the cultural richness of central France.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby' },
    priceRange: { from: 650, to: 1400, unit: 'week', display: '€650 - €1,400/week' },
    socialMedia: { instagram: '@orleansfencing', facebook: 'https://facebook.com/orleansfencing', twitter: '@orleansfencing' },
    climate: 'orleans',
    facilities: 'Fencing salle, electronic scoring, video replay, footwork hall, gym, armoury',
    courtSurfaces: ['Épée', 'Foil', 'Sabre'],
    programs: [
      { name: 'Loire Valley Fencing Retreat', price: '€800/week', desc: 'Focused training in a serene setting with château excursions' },
      { name: 'Foil Fundamentals', price: '€700/week', desc: 'Core foil technique for intermediate fencers' }
    ],
    coaches: [
      { name: 'Isabelle Martin', credential: 'FFE Prévôt', background: 'Former French national team member and CID-accredited fencing instructor', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'French'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800'],
    upcomingCamps: [
      { name: 'Loire Fencing Camp', startDate: '2025-07-14', endDate: '2025-07-21', price: '€800', level: 'Intermediate' }
    ],
    accommodation: {
      types: [{ type: 'guesthouse', label: 'Loire Valley Guesthouse', pricePerWeek: 400, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Charming guesthouse in the Loire Valley countryside'
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
      minAge: 7,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Academic support available during extended stays',
      medicalStaff: true,
      safeguarding: 'Full FFE child protection compliance',
      airportPickup: true,
      mealPlan: 'Full board with Loire Valley regional cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'French'],
      emergencyProtocol: 'On-site first aid with CHR Orléans hospital nearby'
    }
  },
  {
    id: 'budapest-fencing-institute',
    name: 'Budapest Fencing Institute',
    country: 'Hungary',
    countryFlag: '🇭🇺',
    city: 'Budapest',
    lat: 47.4979,
    lng: 19.0402,
    website: 'https://www.budapestfencing.hu',
    contact: '+36 1 234 5678',
    contactEmail: 'info@budapestfencing.hu',
    description: 'Hungary\'s most decorated fencing institute in Budapest, producing Olympic champions across all three weapons for over a century.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby, Lake Balaton 100 km away' },
    priceRange: { from: 550, to: 1200, unit: 'week', display: '€550 - €1,200/week' },
    socialMedia: { instagram: '@budapestfencing', facebook: 'https://facebook.com/budapestfencing', twitter: '@budapestfencing' },
    climate: 'budapest',
    facilities: 'Fencing salle, electronic scoring system, video replay, footwork hall, gym, armoury',
    courtSurfaces: ['Épée', 'Foil', 'Sabre'],
    programs: [
      { name: 'Hungarian Sabre Legacy', price: '€800/week', desc: 'Train in the legendary Hungarian sabre tradition with Olympic coaches' },
      { name: 'Multi-Weapon Programme', price: '€700/week', desc: 'Cross-training in all three weapons for versatile development' }
    ],
    coaches: [
      { name: 'Tamás Nagy', credential: 'FIE Maître d\'Armes', background: 'Former Olympic gold medallist in sabre and head of Hungarian fencing development', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Hungarian', 'German'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1551524559-8af4e6624178?w=800'],
    upcomingCamps: [
      { name: 'Budapest Fencing Summit', startDate: '2025-07-01', endDate: '2025-07-08', price: '€800', level: 'All levels' }
    ],
    accommodation: {
      types: [{ type: 'hotel', label: 'Danube Riverside Hotel', pricePerWeek: 380, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Hotel with Danube views and thermal bath access'
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
      minAge: 6,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Hungarian sports school integration for long-term students',
      medicalStaff: true,
      safeguarding: 'Hungarian Olympic Committee child protection framework',
      airportPickup: true,
      mealPlan: 'Full board with Hungarian cuisine and dietary options',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Hungarian'],
      emergencyProtocol: 'On-site medical support with Semmelweis University Hospital nearby'
    }
  },
  {
    id: 'bonn-fencing-akademie',
    name: 'Bonn Fencing Akademie',
    country: 'Germany',
    countryFlag: '🇩🇪',
    city: 'Bonn',
    lat: 50.7374,
    lng: 7.0982,
    website: 'https://www.bonnfencing.de',
    contact: '+49 228 555 0100',
    contactEmail: 'info@bonnfencing.de',
    description: 'A respected German fencing academy in Bonn with strong ties to the German Fencing Federation\'s national programme.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby' },
    priceRange: { from: 700, to: 1500, unit: 'week', display: '€700 - €1,500/week' },
    socialMedia: { instagram: '@bonnfencing', facebook: 'https://facebook.com/bonnfencing', twitter: '@bonnfencing' },
    climate: 'bonn',
    facilities: 'Fencing salle, electronic scoring, video replay, footwork hall, gym, armoury',
    courtSurfaces: ['Épée', 'Foil', 'Sabre'],
    programs: [
      { name: 'Rhineland Fencing Camp', price: '€850/week', desc: 'Comprehensive training in all weapons with German precision coaching' },
      { name: 'Épée Development', price: '€800/week', desc: 'Specialised épée technique and point control training' }
    ],
    coaches: [
      { name: 'Klaus Weber', credential: 'DFB Fechtmeister', background: 'Former German national épée team member and Bundesliga fencing coach', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'German', 'French'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800'],
    upcomingCamps: [
      { name: 'Bonn Summer Épée', startDate: '2025-07-07', endDate: '2025-07-14', price: '€850', level: 'Intermediate' }
    ],
    accommodation: {
      types: [{ type: 'hotel', label: 'Rhine Valley Hotel', pricePerWeek: 450, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Hotel near the Rhine with views of the Siebengebirge hills'
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
      minAge: 7,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'German school integration and tutoring support',
      medicalStaff: true,
      safeguarding: 'German Olympic Sports Confederation safeguarding standards',
      airportPickup: true,
      mealPlan: 'Full board with German and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'German'],
      emergencyProtocol: 'On-site paramedic with Universitätsklinikum Bonn nearby'
    }
  },
  {
    id: 'tauberbischofsheim-fencing-centre',
    name: 'Tauberbischofsheim Fencing Centre',
    country: 'Germany',
    countryFlag: '🇩🇪',
    city: 'Tauberbischofsheim',
    lat: 49.6225,
    lng: 9.6628,
    website: 'https://www.tbfencing.de',
    contact: '+49 9341 555 0200',
    contactEmail: 'info@tbfencing.de',
    description: 'The legendary Tauberbischofsheim fencing centre, birthplace of German fencing excellence and home to countless Olympic medallists.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby' },
    priceRange: { from: 750, to: 1600, unit: 'week', display: '€750 - €1,600/week' },
    socialMedia: { instagram: '@tbfencing', facebook: 'https://facebook.com/tbfencing', twitter: '@tbfencing' },
    climate: 'tauberbischofsheim',
    facilities: 'Fencing salle, electronic scoring, video replay, footwork hall, gym, armoury',
    courtSurfaces: ['Épée', 'Foil', 'Sabre'],
    programs: [
      { name: 'Olympic Legacy Programme', price: '€1000/week', desc: 'Train where Olympic champions were made, using proven German methods' },
      { name: 'Foil & Épée Double', price: '€900/week', desc: 'Combined foil and épée training for multi-weapon development' }
    ],
    coaches: [
      { name: 'Thomas Müller', credential: 'DFB Fechtmeister', background: 'Product of the Tauberbischofsheim system with 25 years coaching at the centre', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'German'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800'],
    upcomingCamps: [
      { name: 'TBB Fencing Legacy Camp', startDate: '2025-07-14', endDate: '2025-07-21', price: '€1000', level: 'Advanced' }
    ],
    accommodation: {
      types: [{ type: 'guesthouse', label: 'Tauber Valley Guesthouse', pricePerWeek: 350, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Traditional guesthouse in the picturesque Tauber Valley'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-15',
      spotsLeft: 14,
      responseTime: '48h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 8,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Sportinternat with full academic programme',
      medicalStaff: true,
      safeguarding: 'Comprehensive German sports safeguarding compliance',
      airportPickup: true,
      mealPlan: 'Full board with Franconian regional cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'German'],
      emergencyProtocol: 'On-site medical facility with regional hospital support'
    }
  },
  {
    id: 'madrid-fencing-escuela',
    name: 'Madrid Fencing Escuela',
    country: 'Spain',
    countryFlag: '🇪🇸',
    city: 'Madrid',
    lat: 40.4168,
    lng: -3.7038,
    website: 'https://www.madridfencing.es',
    contact: '+34 91 345 6789',
    contactEmail: 'info@madridfencing.es',
    description: 'Spain\'s leading fencing school in Madrid, fostering competitive fencers with a passionate Spanish approach to the sport.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby' },
    priceRange: { from: 650, to: 1400, unit: 'week', display: '€650 - €1,400/week' },
    socialMedia: { instagram: '@madridfencing', facebook: 'https://facebook.com/madridfencing', twitter: '@madridfencing' },
    climate: 'madrid',
    facilities: 'Fencing salle, electronic scoring, video replay, footwork hall, gym, armoury',
    courtSurfaces: ['Épée', 'Foil', 'Sabre'],
    programs: [
      { name: 'Spanish Fencing Camp', price: '€800/week', desc: 'All-weapon training with Spanish national-level coaches' },
      { name: 'Sabre Attack Clinic', price: '€750/week', desc: 'Aggressive sabre attacking patterns and timing drills' }
    ],
    coaches: [
      { name: 'Pablo García', credential: 'RFEE Master Coach', background: 'Former Spanish national sabre champion and European Championship participant', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Spanish'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800'],
    upcomingCamps: [
      { name: 'Madrid Fencing Summer', startDate: '2025-07-01', endDate: '2025-07-08', price: '€800', level: 'All levels' }
    ],
    accommodation: {
      types: [{ type: 'hotel', label: 'Madrid Centro Hotel', pricePerWeek: 450, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Central Madrid hotel near the fencing salle'
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
      minAge: 7,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Spanish school integration and language immersion',
      medicalStaff: true,
      safeguarding: 'Spanish sports federation child protection compliance',
      airportPickup: true,
      mealPlan: 'Full board with Spanish cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Spanish'],
      emergencyProtocol: '24/7 emergency protocol with Hospital La Paz partnership'
    }
  },
  {
    id: 'warsaw-fencing-akademia',
    name: 'Warsaw Fencing Akademia',
    country: 'Poland',
    countryFlag: '🇵🇱',
    city: 'Warsaw',
    lat: 52.2297,
    lng: 21.0122,
    website: 'https://www.warsawfencing.pl',
    contact: '+48 22 123 4567',
    contactEmail: 'info@warsawfencing.pl',
    description: 'Poland\'s top fencing academy in Warsaw, building on the nation\'s strong sabre tradition and producing international competitors.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby' },
    priceRange: { from: 500, to: 1100, unit: 'week', display: '€500 - €1,100/week' },
    socialMedia: { instagram: '@warsawfencing', facebook: 'https://facebook.com/warsawfencing', twitter: '@warsawfencing' },
    climate: 'warsaw',
    facilities: 'Fencing salle, electronic scoring, video replay, footwork hall, gym, armoury',
    courtSurfaces: ['Épée', 'Foil', 'Sabre'],
    programs: [
      { name: 'Polish Sabre Heritage', price: '€650/week', desc: 'Sabre training in the proud Polish cavalry fencing tradition' },
      { name: 'Junior Development Path', price: '€550/week', desc: 'Structured development programme for young competitive fencers' }
    ],
    coaches: [
      { name: 'Andrzej Kowalski', credential: 'PZS Master Coach', background: 'Former Polish national sabre team member and World Cup circuit veteran', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Polish', 'German'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800'],
    upcomingCamps: [
      { name: 'Warsaw Sabre Week', startDate: '2025-07-07', endDate: '2025-07-14', price: '€650', level: 'Intermediate' }
    ],
    accommodation: {
      types: [{ type: 'hotel', label: 'Old Town Hotel', pricePerWeek: 320, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Hotel in Warsaw Old Town with tram access to the salle'
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
      minAge: 7,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Polish sports school enrolment for extended stays',
      medicalStaff: true,
      safeguarding: 'Polish Olympic Committee child safety standards',
      airportPickup: true,
      mealPlan: 'Full board with Polish cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Polish'],
      emergencyProtocol: 'On-site medical staff with Warsaw Central Hospital nearby'
    }
  },
  {
    id: 'bucharest-fencing-school',
    name: 'Bucharest Fencing School',
    country: 'Romania',
    countryFlag: '🇷🇴',
    city: 'Bucharest',
    lat: 44.4268,
    lng: 26.1025,
    website: 'https://www.bucharestfencing.ro',
    contact: '+40 21 234 5678',
    contactEmail: 'info@bucharestfencing.ro',
    description: 'Romania\'s flagship fencing school in Bucharest, carrying on a proud tradition of Olympic fencing success.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby, Black Sea coast 230 km away' },
    priceRange: { from: 450, to: 1000, unit: 'week', display: '€450 - €1,000/week' },
    socialMedia: { instagram: '@bucharestfencing', facebook: 'https://facebook.com/bucharestfencing', twitter: '@bucharestfencing' },
    climate: 'bucharest',
    facilities: 'Fencing salle, electronic scoring, video replay, footwork hall, gym, armoury',
    courtSurfaces: ['Épée', 'Foil', 'Sabre'],
    programs: [
      { name: 'Romanian Épée Tradition', price: '€600/week', desc: 'Épée training rooted in Romania\'s decorated Olympic history' },
      { name: 'All-Weapon Introduction', price: '€500/week', desc: 'Beginner-friendly programme covering all three weapons' }
    ],
    coaches: [
      { name: 'Mihai Popescu', credential: 'FRE Master Coach', background: 'Former Romanian national épée team member and Balkan Championship gold medallist', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Romanian', 'French'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?w=800'],
    upcomingCamps: [
      { name: 'Bucharest Fencing Camp', startDate: '2025-07-14', endDate: '2025-07-21', price: '€600', level: 'All levels' }
    ],
    accommodation: {
      types: [{ type: 'hotel', label: 'Bucharest City Hotel', pricePerWeek: 280, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Modern hotel in central Bucharest near the training salle'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-01',
      spotsLeft: 25,
      responseTime: '24h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 6,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Romanian sports school integration available',
      medicalStaff: true,
      safeguarding: 'Romanian Olympic Committee child protection standards',
      airportPickup: true,
      mealPlan: 'Full board with Romanian cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Romanian'],
      emergencyProtocol: 'On-site nurse with Spitalul Universitar nearby'
    }
  },
  {
    id: 'london-fencing-club',
    name: 'London Fencing Club',
    country: 'UK',
    countryFlag: '🇬🇧',
    city: 'London',
    lat: 51.5074,
    lng: -0.1278,
    website: 'https://www.londonfencing.co.uk',
    contact: '+44 20 7123 4567',
    contactEmail: 'info@londonfencing.co.uk',
    description: 'One of Britain\'s oldest and most respected fencing clubs in London, training competitive fencers in all three weapons.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby' },
    priceRange: { from: 900, to: 2000, unit: 'week', display: '£900 - £2,000/week' },
    socialMedia: { instagram: '@londonfencing', facebook: 'https://facebook.com/londonfencing', twitter: '@londonfencing' },
    climate: 'london',
    facilities: 'Fencing salle, electronic scoring, video replay, footwork hall, gym, armoury',
    courtSurfaces: ['Épée', 'Foil', 'Sabre'],
    programs: [
      { name: 'British Fencing Excellence', price: '£1200/week', desc: 'Elite training aligned with British Fencing national pathway' },
      { name: 'Introduction to Fencing', price: '£900/week', desc: 'Comprehensive beginner programme in all three weapons' }
    ],
    coaches: [
      { name: 'James Crawford', credential: 'BF Senior Coach', background: 'Former British national team foilist and Commonwealth Games medallist', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'French'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=800'],
    upcomingCamps: [
      { name: 'London Summer Fencing', startDate: '2025-07-01', endDate: '2025-07-08', price: '£1200', level: 'All levels' }
    ],
    accommodation: {
      types: [{ type: 'hotel', label: 'Central London Hotel', pricePerWeek: 700, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Well-located hotel with Tube access to the fencing salle'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-01',
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
      schooling: 'Partnership with London schools for term-time fencers',
      medicalStaff: true,
      safeguarding: 'Full DBS checks and British Fencing safeguarding compliance',
      airportPickup: true,
      mealPlan: 'Full board with diverse dietary options',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English'],
      emergencyProtocol: '24/7 medical coverage with NHS hospital nearby'
    }
  },
  {
    id: 'vienna-fencing-academy',
    name: 'Vienna Fencing Academy',
    country: 'Austria',
    countryFlag: '🇦🇹',
    city: 'Vienna',
    lat: 48.2082,
    lng: 16.3738,
    website: 'https://www.viennafencing.at',
    contact: '+43 1 234 5678',
    contactEmail: 'info@viennafencing.at',
    description: 'A premier fencing academy in Vienna, blending Austrian tradition with modern competitive training across all three weapons.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby' },
    priceRange: { from: 850, to: 1800, unit: 'week', display: '€850 - €1,800/week' },
    socialMedia: { instagram: '@viennafencing', facebook: 'https://facebook.com/viennafencing', twitter: '@viennafencing' },
    climate: 'vienna',
    facilities: 'Fencing salle with 12 pistes, electronic scoring, video analysis room, gym, armoury, recovery area',
    courtSurfaces: ['Épée', 'Foil', 'Sabre'],
    programs: [
      { name: 'Viennese Épée Excellence', price: '€1400/week', desc: 'Advanced épée training with Austrian national-level coaches' },
      { name: 'Youth Fencing Programme', price: '€850/week', desc: 'Structured youth programme for fencers aged 8-16' },
      { name: 'Sabre Intensive', price: '€1200/week', desc: 'Focused sabre training with tactical development and bout practice' }
    ],
    coaches: [
      { name: 'Markus Lehner', credential: 'FIE Maître d\'Armes', background: 'Former Austrian national épéeist and European Championship medallist', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'German', 'French'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800'],
    upcomingCamps: [
      { name: 'Vienna Summer Fencing Camp', startDate: '2026-07-06', endDate: '2026-07-13', price: '€1400', level: 'Intermediate-Advanced' }
    ],
    accommodation: {
      types: [{ type: 'hotel', label: 'Central Vienna Pension', pricePerWeek: 550, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Charming pension in Vienna\'s historic centre near the fencing salle'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-06-01',
      spotsLeft: 12,
      responseTime: '48h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 8,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Austrian school integration for long-term students',
      medicalStaff: true,
      safeguarding: 'Austrian Fencing Federation child protection standards',
      airportPickup: true,
      mealPlan: 'Full board with Austrian cuisine and sports nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'German'],
      emergencyProtocol: 'On-site medical team with AKH Wien partnership'
    }
  },
  {
    id: 'stockholm-fencing-club',
    name: 'Stockholm Fencing Club',
    country: 'Sweden',
    countryFlag: '🇸🇪',
    city: 'Stockholm',
    lat: 59.3293,
    lng: 18.0686,
    website: 'https://www.stockholmfencing.se',
    contact: '+46 8 123 4567',
    contactEmail: 'info@stockholmfencing.se',
    description: 'Sweden\'s leading fencing club in Stockholm, offering elite training in épée and foil with a strong competitive tradition.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: false,
    beach: { distance: 15, description: 'Stockholm archipelago beaches accessible by ferry' },
    priceRange: { from: 900, to: 1900, unit: 'week', display: '€900 - €1,900/week' },
    socialMedia: { instagram: '@stockholmfencing', facebook: 'https://facebook.com/stockholmfencing', twitter: '@stockholmfencing' },
    climate: 'stockholm',
    facilities: 'Modern fencing hall with 10 pistes, electronic scoring, video analysis, strength training room, armoury',
    courtSurfaces: ['Épée', 'Foil', 'Sabre'],
    programs: [
      { name: 'Nordic Épée Programme', price: '€1500/week', desc: 'Elite épée training following the Scandinavian fencing methodology' },
      { name: 'Junior Development', price: '€900/week', desc: 'Comprehensive youth programme for aspiring competitive fencers' }
    ],
    coaches: [
      { name: 'Erik Johansson', credential: 'FIE Maître d\'Armes', background: 'Former Swedish national team épéeist and Olympic qualifier', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Swedish', 'German'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=800'],
    upcomingCamps: [
      { name: 'Stockholm Midsummer Fencing Camp', startDate: '2026-06-22', endDate: '2026-06-29', price: '€1500', level: 'All levels' }
    ],
    accommodation: {
      types: [{ type: 'hostel', label: 'Stockholm City Hostel', pricePerWeek: 450, maxOccupancy: 2, bathType: 'shared', mealsIncluded: false }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: false,
      notes: 'Central hostel with easy metro access to the fencing hall'
    },
    availability: {
      status: 'limited',
      nextIntake: '2026-06-01',
      spotsLeft: 8,
      responseTime: '72h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 9,
      maxAge: 18,
      supervision: 'During training hours',
      guardianStay: true,
      schooling: 'Swedish sports school programme available',
      medicalStaff: true,
      safeguarding: 'Swedish Fencing Federation safeguarding policies',
      airportPickup: true,
      mealPlan: 'Lunch included during training days',
      curfew: '21:30 weekdays, 22:30 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Swedish'],
      emergencyProtocol: 'On-site first aid with Karolinska hospital nearby'
    }
  },
  {
    id: 'copenhagen-fencing-centre',
    name: 'Copenhagen Fencing Centre',
    country: 'Denmark',
    countryFlag: '🇩🇰',
    city: 'Copenhagen',
    lat: 55.6761,
    lng: 12.5683,
    website: 'https://www.copenhagenfencing.dk',
    contact: '+45 33 123 456',
    contactEmail: 'info@copenhagenfencing.dk',
    description: 'Denmark\'s premier fencing centre in Copenhagen, providing world-class training and hosting international competitions.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 8, description: 'Amager Strandpark beach within easy reach' },
    priceRange: { from: 950, to: 2000, unit: 'week', display: '€950 - €2,000/week' },
    socialMedia: { instagram: '@cphfencing', facebook: 'https://facebook.com/copenhagenfencing', twitter: '@cphfencing' },
    climate: 'copenhagen',
    facilities: 'State-of-the-art fencing hall, 14 pistes, electronic scoring, video replay, fitness centre, armoury',
    courtSurfaces: ['Épée', 'Foil', 'Sabre'],
    programs: [
      { name: 'Danish Foil Academy', price: '€1500/week', desc: 'Intensive foil programme with Danish national team coaches' },
      { name: 'All-Weapons Foundation', price: '€950/week', desc: 'Introduction to all three weapons for developing fencers' },
      { name: 'Competition Circuit Prep', price: '€1300/week', desc: 'Tactical and physical preparation for European circuit events' }
    ],
    coaches: [
      { name: 'Lars Nielsen', credential: 'FIE Maître d\'Armes', background: 'Former Danish national foilist and Nordic Championship gold medallist', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Danish', 'German'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800'],
    upcomingCamps: [
      { name: 'Copenhagen Spring Fencing Camp', startDate: '2026-04-06', endDate: '2026-04-13', price: '€1500', level: 'Intermediate' }
    ],
    accommodation: {
      types: [{ type: 'apartment', label: 'Copenhagen Sport Apartments', pricePerWeek: 600, maxOccupancy: 3, bathType: 'ensuite', mealsIncluded: false }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Modern apartments near the fencing centre with kitchen facilities'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-04-01',
      spotsLeft: 16,
      responseTime: '48h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 7,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Danish sports school integration available',
      medicalStaff: true,
      safeguarding: 'Danish Fencing Federation child protection compliance',
      airportPickup: true,
      mealPlan: 'Full board with Scandinavian cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Danish'],
      emergencyProtocol: 'On-site medical staff with Rigshospitalet nearby'
    }
  },
  {
    id: 'brussels-fencing-academy',
    name: 'Brussels Fencing Academy',
    country: 'Belgium',
    countryFlag: '🇧🇪',
    city: 'Brussels',
    lat: 50.8503,
    lng: 4.3517,
    website: 'https://www.brusselsfencing.be',
    contact: '+32 2 123 4567',
    contactEmail: 'info@brusselsfencing.be',
    description: 'A leading Belgian fencing academy in Brussels, with a strong tradition in sabre and growing programmes in foil and épée.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: false,
    beach: { distance: null, description: 'No beach nearby' },
    priceRange: { from: 800, to: 1700, unit: 'week', display: '€800 - €1,700/week' },
    socialMedia: { instagram: '@brusselsfencing', facebook: 'https://facebook.com/brusselsfencing', twitter: '@brusselsfencing' },
    climate: 'brussels',
    facilities: 'Fencing salle with 8 pistes, electronic scoring, video analysis, gym, armoury',
    courtSurfaces: ['Épée', 'Foil', 'Sabre'],
    programs: [
      { name: 'Belgian Sabre Programme', price: '€1300/week', desc: 'Intensive sabre training following Belgium\'s competitive tradition' },
      { name: 'Youth Introduction', price: '€800/week', desc: 'Beginner-friendly programme for young fencers in all weapons' }
    ],
    coaches: [
      { name: 'Philippe Dubois', credential: 'Belgian Fencing Federation Master', background: 'Former Belgian national sabreur and European Championship competitor', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'French', 'Dutch'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=800'],
    upcomingCamps: [
      { name: 'Brussels Autumn Fencing Camp', startDate: '2026-10-19', endDate: '2026-10-26', price: '€1300', level: 'All levels' }
    ],
    accommodation: {
      types: [{ type: 'hotel', label: 'Brussels City Hotel', pricePerWeek: 500, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Comfortable hotel near Grand Place with easy access to the academy'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-09-01',
      spotsLeft: 14,
      responseTime: '48h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 8,
      maxAge: 18,
      supervision: 'During training hours',
      guardianStay: true,
      schooling: 'Belgian school integration available for term-time students',
      medicalStaff: true,
      safeguarding: 'Belgian Fencing Federation safeguarding standards',
      airportPickup: true,
      mealPlan: 'Lunch included on training days',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'French', 'Dutch'],
      emergencyProtocol: 'First aid on-site with UZ Brussel hospital nearby'
    }
  },
  {
    id: 'amsterdam-fencing-school',
    name: 'Amsterdam Fencing School',
    country: 'Netherlands',
    countryFlag: '🇳🇱',
    city: 'Amsterdam',
    lat: 52.3676,
    lng: 4.9041,
    website: 'https://www.amsterdamfencing.nl',
    contact: '+31 20 123 4567',
    contactEmail: 'info@amsterdamfencing.nl',
    description: 'The Netherlands\' top fencing school in Amsterdam, known for its innovative training methods and inclusive fencing community.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 30, description: 'Zandvoort beach accessible by train' },
    priceRange: { from: 850, to: 1800, unit: 'week', display: '€850 - €1,800/week' },
    socialMedia: { instagram: '@amsterdamfencing', facebook: 'https://facebook.com/amsterdamfencing', twitter: '@amsterdamfencing' },
    climate: 'amsterdam',
    facilities: 'Modern fencing hall with 10 pistes, electronic scoring, video analysis suite, gym, armoury, physio room',
    courtSurfaces: ['Épée', 'Foil', 'Sabre'],
    programs: [
      { name: 'Dutch Épée Academy', price: '€1400/week', desc: 'Elite épée programme with Dutch national-level coaching' },
      { name: 'All-Weapons Youth Camp', price: '€850/week', desc: 'Fun and educational fencing programme for juniors aged 8-15' },
      { name: 'Competitive Foil Training', price: '€1200/week', desc: 'Advanced foil sessions focusing on tactical development' }
    ],
    coaches: [
      { name: 'Jan van der Berg', credential: 'KNAS Master Coach', background: 'Former Dutch national épéeist and World Cup circuit competitor', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Dutch', 'German'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800'],
    upcomingCamps: [
      { name: 'Amsterdam Easter Fencing Camp', startDate: '2026-04-06', endDate: '2026-04-13', price: '€1400', level: 'All levels' }
    ],
    accommodation: {
      types: [{ type: 'apartment', label: 'Amsterdam Canal Apartments', pricePerWeek: 600, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: false }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: false,
      notes: 'Canal-side apartments with bike rental included for easy transport'
    },
    availability: {
      status: 'limited',
      nextIntake: '2026-04-01',
      spotsLeft: 6,
      responseTime: '48h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 8,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Dutch international school options available',
      medicalStaff: true,
      safeguarding: 'KNAS child protection standards',
      airportPickup: true,
      mealPlan: 'Full board with diverse dietary options',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Dutch'],
      emergencyProtocol: 'On-site first aid with AMC hospital nearby'
    }
  },
  {
    id: 'prague-fencing-akademie',
    name: 'Prague Fencing Akademie',
    country: 'Czech Republic',
    countryFlag: '🇨🇿',
    city: 'Prague',
    lat: 50.0755,
    lng: 14.4378,
    website: 'https://www.praguefencing.cz',
    contact: '+420 222 123 456',
    contactEmail: 'info@praguefencing.cz',
    description: 'A historic fencing academy in Prague continuing the Czech tradition of excellence, particularly in épée and sabre.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby' },
    priceRange: { from: 650, to: 1400, unit: 'week', display: '€650 - €1,400/week' },
    socialMedia: { instagram: '@praguefencing', facebook: 'https://facebook.com/praguefencing', twitter: '@praguefencing' },
    climate: 'prague',
    facilities: 'Historic fencing hall with 8 pistes, electronic scoring, video replay, gym, armoury, recovery room',
    courtSurfaces: ['Épée', 'Foil', 'Sabre'],
    programs: [
      { name: 'Czech Sabre Tradition', price: '€1100/week', desc: 'Intensive sabre training rooted in Czech fencing heritage' },
      { name: 'Youth Development Programme', price: '€650/week', desc: 'Affordable youth programme for developing competitive fencers' },
      { name: 'Épée Mastery', price: '€1000/week', desc: 'Advanced épée training with tactical and physical conditioning' }
    ],
    coaches: [
      { name: 'Tomáš Dvořák', credential: 'Czech Fencing Federation Master', background: 'Former Czech national sabreur and multiple national champion', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Czech', 'German'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=800'],
    upcomingCamps: [
      { name: 'Prague Winter Fencing Intensive', startDate: '2027-01-05', endDate: '2027-01-12', price: '€1100', level: 'Intermediate-Advanced' }
    ],
    accommodation: {
      types: [{ type: 'hotel', label: 'Prague Old Town Hotel', pricePerWeek: 400, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Historic hotel in Prague\'s Old Town with excellent public transport links'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-09-01',
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
      schooling: 'Czech sports school integration available',
      medicalStaff: true,
      safeguarding: 'Czech Fencing Federation child protection standards',
      airportPickup: true,
      mealPlan: 'Full board with Czech and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Czech'],
      emergencyProtocol: 'On-site medical team with Fakultní nemocnice partnership'
    }
  },
  {
    id: 'athens-fencing-academy',
    name: 'Athens Fencing Academy',
    country: 'Greece',
    countryFlag: '🇬🇷',
    city: 'Athens',
    lat: 37.9838,
    lng: 23.7275,
    website: 'https://www.athensfencing.gr',
    contact: '+30 21 0123 4567',
    contactEmail: 'info@athensfencing.gr',
    description: 'Greece\'s foremost fencing academy in Athens, training competitive fencers in the birthplace of the Olympic Games.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: false,
    beach: { distance: 20, description: 'Athens Riviera beaches accessible by tram' },
    priceRange: { from: 700, to: 1500, unit: 'week', display: '€700 - €1,500/week' },
    socialMedia: { instagram: '@athensfencing', facebook: 'https://facebook.com/athensfencing', twitter: '@athensfencing' },
    climate: 'athens',
    facilities: 'Olympic-standard fencing hall, 12 pistes, electronic scoring, video analysis, gym, armoury',
    courtSurfaces: ['Épée', 'Foil', 'Sabre'],
    programs: [
      { name: 'Olympic Heritage Programme', price: '€1200/week', desc: 'Elite training inspired by Greece\'s Olympic fencing tradition' },
      { name: 'Mediterranean Fencing Camp', price: '€700/week', desc: 'Introductory programme combining fencing with Greek culture' }
    ],
    coaches: [
      { name: 'Nikolaos Papadopoulos', credential: 'Hellenic Fencing Federation Master', background: 'Former Greek national foilist and Mediterranean Games gold medallist', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Greek', 'French'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800'],
    upcomingCamps: [
      { name: 'Athens Summer Fencing Camp', startDate: '2026-06-15', endDate: '2026-06-22', price: '€1200', level: 'All levels' }
    ],
    accommodation: {
      types: [{ type: 'hotel', label: 'Athens Centre Hotel', pricePerWeek: 450, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Modern hotel near the Acropolis with easy metro access'
    },
    availability: {
      status: 'waitlist',
      nextIntake: '2026-06-01',
      spotsLeft: 0,
      responseTime: '72h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 8,
      maxAge: 18,
      supervision: 'During training hours',
      guardianStay: true,
      schooling: 'Greek international school options available',
      medicalStaff: true,
      safeguarding: 'Hellenic Fencing Federation child protection policies',
      airportPickup: true,
      mealPlan: 'Lunch included with Mediterranean cuisine',
      curfew: '21:30 weekdays, 22:30 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Greek'],
      emergencyProtocol: 'First aid on-site with Evangelismos Hospital nearby'
    }
  },
  {
    id: 'zagreb-fencing-akademija',
    name: 'Zagreb Fencing Akademija',
    country: 'Croatia',
    countryFlag: '🇭🇷',
    city: 'Zagreb',
    lat: 45.8150,
    lng: 15.9819,
    website: 'https://www.zagrebfencing.hr',
    contact: '+385 1 234 5678',
    contactEmail: 'info@zagrebfencing.hr',
    description: 'Croatia\'s top fencing academy in Zagreb, producing national champions and international competitors in all three weapons.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby (Adriatic coast 2+ hours away)' },
    priceRange: { from: 600, to: 1300, unit: 'week', display: '€600 - €1,300/week' },
    socialMedia: { instagram: '@zagrebfencing', facebook: 'https://facebook.com/zagrebfencing', twitter: '@zagrebfencing' },
    climate: 'zagreb',
    facilities: 'Fencing hall with 8 pistes, electronic scoring, video analysis, gym, armoury, physiotherapy room',
    courtSurfaces: ['Épée', 'Foil', 'Sabre'],
    programs: [
      { name: 'Croatian Sabre Excellence', price: '€1000/week', desc: 'Advanced sabre programme building on Croatia\'s strong sabre tradition' },
      { name: 'Youth Fencing Foundation', price: '€600/week', desc: 'Beginner and intermediate youth programme for ages 7-16' },
      { name: 'All-Weapons Intensive', price: '€900/week', desc: 'Comprehensive training across épée, foil, and sabre' }
    ],
    coaches: [
      { name: 'Ivan Horvat', credential: 'Croatian Fencing Federation Master', background: 'Former Croatian national sabreur and Balkan Championship medallist', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Croatian', 'German'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=800'],
    upcomingCamps: [
      { name: 'Zagreb Autumn Fencing Camp', startDate: '2026-10-05', endDate: '2026-10-12', price: '€1000', level: 'All levels' }
    ],
    accommodation: {
      types: [{ type: 'hotel', label: 'Zagreb Upper Town Hotel', pricePerWeek: 350, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Traditional hotel in Zagreb\'s Upper Town near the fencing hall'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-09-01',
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
      schooling: 'Croatian sports school integration for long-term students',
      medicalStaff: true,
      safeguarding: 'Croatian Fencing Federation child protection standards',
      airportPickup: true,
      mealPlan: 'Full board with Croatian cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Croatian'],
      emergencyProtocol: 'On-site medical staff with KBC Zagreb partnership'
    }
  },
  {
    id: 'basel-fencing-club',
    name: 'Basel Fencing Club',
    country: 'Switzerland',
    countryFlag: '🇨🇭',
    city: 'Basel',
    lat: 47.5596,
    lng: 7.5886,
    website: 'https://www.baselfencing.ch',
    contact: '+41 61 234 5678',
    contactEmail: 'info@baselfencing.ch',
    description: 'A prestigious Swiss fencing club in Basel, offering precision-focused training in all three weapons with world-class facilities.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: false,
    beach: { distance: null, description: 'No beach nearby' },
    priceRange: { from: 1200, to: 2500, unit: 'week', display: 'CHF1,200 - CHF2,500/week' },
    socialMedia: { instagram: '@baselfencing', facebook: 'https://facebook.com/baselfencing', twitter: '@baselfencing' },
    climate: 'basel',
    facilities: 'Premium fencing centre with 10 pistes, electronic scoring, video analysis, strength lab, armoury, sports medicine clinic',
    courtSurfaces: ['Épée', 'Foil', 'Sabre'],
    programs: [
      { name: 'Swiss Precision Épée', price: 'CHF2000/week', desc: 'Elite épée programme emphasising precision and tactical mastery' },
      { name: 'Youth Swiss Fencing', price: 'CHF1200/week', desc: 'Structured youth programme aligned with Swiss Olympic pathway' }
    ],
    coaches: [
      { name: 'Lukas Müller', credential: 'Swiss Fencing Master', background: 'Former Swiss national épéeist and European Championship competitor', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'German', 'French', 'Italian'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800'],
    upcomingCamps: [
      { name: 'Basel Spring Fencing Intensive', startDate: '2026-03-23', endDate: '2026-03-30', price: 'CHF2000', level: 'Advanced' }
    ],
    accommodation: {
      types: [{ type: 'hotel', label: 'Basel Rhine Hotel', pricePerWeek: 800, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Elegant hotel on the Rhine with excellent tram connections'
    },
    availability: {
      status: 'limited',
      nextIntake: '2026-03-01',
      spotsLeft: 5,
      responseTime: '48h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 8,
      maxAge: 18,
      supervision: 'During training hours',
      guardianStay: true,
      schooling: 'Swiss international school options available',
      medicalStaff: true,
      safeguarding: 'Swiss Fencing Federation safeguarding policies',
      airportPickup: true,
      mealPlan: 'Lunch included on training days',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'German', 'French'],
      emergencyProtocol: 'On-site sports medicine clinic with Universitätsspital Basel nearby'
    }
  },
  {
    id: 'lisbon-fencing-academy',
    name: 'Lisbon Fencing Academy',
    country: 'Portugal',
    countryFlag: '🇵🇹',
    city: 'Lisbon',
    lat: 38.7223,
    lng: -9.1393,
    website: 'https://www.lisbonfencing.pt',
    contact: '+351 21 123 4567',
    contactEmail: 'info@lisbonfencing.pt',
    description: 'Portugal\'s leading fencing academy in Lisbon, growing the sport in the Iberian peninsula with competitive programmes in all weapons.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 15, description: 'Atlantic beaches at Cascais and Costa da Caparica' },
    priceRange: { from: 650, to: 1400, unit: 'week', display: '€650 - €1,400/week' },
    socialMedia: { instagram: '@lisbonfencing', facebook: 'https://facebook.com/lisbonfencing', twitter: '@lisbonfencing' },
    climate: 'lisbon',
    facilities: 'Fencing salle with 8 pistes, electronic scoring, video replay, gym, armoury, outdoor training area',
    courtSurfaces: ['Épée', 'Foil', 'Sabre'],
    programs: [
      { name: 'Portuguese Épée Programme', price: '€1100/week', desc: 'Competitive épée training with Portuguese national coaches' },
      { name: 'Summer Fencing & Sun', price: '€650/week', desc: 'Introductory fencing programme combined with Lisbon cultural activities' },
      { name: 'Foil Competitive Track', price: '€1000/week', desc: 'Advanced foil sessions with tactical analysis and competition prep' }
    ],
    coaches: [
      { name: 'Ricardo Santos', credential: 'Portuguese Fencing Federation Master', background: 'Former Portuguese national foilist and Lusophone Games medallist', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Portuguese', 'Spanish'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=800'],
    upcomingCamps: [
      { name: 'Lisbon Summer Fencing Camp', startDate: '2026-07-13', endDate: '2026-07-20', price: '€1100', level: 'All levels' }
    ],
    accommodation: {
      types: [{ type: 'apartment', label: 'Lisbon Alfama Apartments', pricePerWeek: 400, maxOccupancy: 3, bathType: 'ensuite', mealsIncluded: false }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Charming apartments in Alfama with views over the Tagus river'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-07-01',
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
      schooling: 'Portuguese international school options available',
      medicalStaff: true,
      safeguarding: 'Portuguese Fencing Federation child protection standards',
      airportPickup: true,
      mealPlan: 'Full board with Portuguese cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Portuguese'],
      emergencyProtocol: 'On-site first aid with Hospital de Santa Maria nearby'
    }
  },
  {
    id: 'dublin-fencing-club',
    name: 'Dublin Fencing Club',
    country: 'Ireland',
    countryFlag: '🇮🇪',
    city: 'Dublin',
    lat: 53.3498,
    lng: -6.2603,
    website: 'https://www.dublinfencing.ie',
    contact: '+353 1 234 5678',
    contactEmail: 'info@dublinfencing.ie',
    description: 'Ireland\'s premier fencing club in Dublin, developing competitive fencers and promoting the sport across the island.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: false,
    beach: { distance: 12, description: 'Dublin Bay beaches at Sandymount and Dollymount' },
    priceRange: { from: 800, to: 1700, unit: 'week', display: '€800 - €1,700/week' },
    socialMedia: { instagram: '@dublinfencing', facebook: 'https://facebook.com/dublinfencing', twitter: '@dublinfencing' },
    climate: 'dublin',
    facilities: 'Fencing hall with 6 pistes, electronic scoring, video analysis, gym, armoury',
    courtSurfaces: ['Épée', 'Foil', 'Sabre'],
    programs: [
      { name: 'Irish Foil Programme', price: '€1300/week', desc: 'Competitive foil training with Fencing Ireland pathway coaches' },
      { name: 'Beginner All-Weapons Course', price: '€800/week', desc: 'Introduction to fencing covering all three weapons' }
    ],
    coaches: [
      { name: 'Ciarán O\'Brien', credential: 'Fencing Ireland Senior Coach', background: 'Former Irish national foilist and Commonwealth Fencing Championship competitor', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Irish', 'French'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800'],
    upcomingCamps: [
      { name: 'Dublin Easter Fencing Camp', startDate: '2026-04-06', endDate: '2026-04-13', price: '€1300', level: 'All levels' }
    ],
    accommodation: {
      types: [{ type: 'hotel', label: 'Dublin City Centre Hotel', pricePerWeek: 550, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Central Dublin hotel with DART rail access to the fencing hall'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-04-01',
      spotsLeft: 12,
      responseTime: '48h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 8,
      maxAge: 18,
      supervision: 'During training hours',
      guardianStay: true,
      schooling: 'Irish school integration for term-time students',
      medicalStaff: true,
      safeguarding: 'Fencing Ireland safeguarding and Garda vetting compliance',
      airportPickup: true,
      mealPlan: 'Lunch included on training days',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Irish'],
      emergencyProtocol: 'First aid on-site with St James\'s Hospital nearby'
    }
  },
  {
    id: 'bucharest-fencing-academy',
    name: 'Bucharest Fencing Academy',
    country: 'Romania',
    countryFlag: '🇷🇴',
    city: 'Bucharest',
    lat: 44.4268,
    lng: 26.1025,
    website: 'https://www.bucharestfencingacademy.ro',
    contact: '+40 21 987 6543',
    contactEmail: 'info@bucharestfencingacademy.ro',
    description: 'A modern fencing academy in Bucharest building on Romania\'s proud Olympic fencing heritage with programmes for all ages and levels.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby (Black Sea coast 3+ hours away)' },
    priceRange: { from: 500, to: 1100, unit: 'week', display: '€500 - €1,100/week' },
    socialMedia: { instagram: '@bucharestfencingacademy', facebook: 'https://facebook.com/bucharestfencingacademy', twitter: '@bucharestfencingacademy' },
    climate: 'bucharest',
    facilities: 'Fencing hall with 10 pistes, electronic scoring, video analysis, gym, armoury, recovery room',
    courtSurfaces: ['Épée', 'Foil', 'Sabre'],
    programs: [
      { name: 'Romanian Sabre Legacy', price: '€900/week', desc: 'Elite sabre training continuing Romania\'s Olympic sabre tradition' },
      { name: 'Youth Olympic Pathway', price: '€500/week', desc: 'Affordable youth programme targeting future Olympic qualification' },
      { name: 'All-Weapons Intensive', price: '€750/week', desc: 'Balanced training across all three weapons for developing fencers' }
    ],
    coaches: [
      { name: 'Andrei Popescu', credential: 'Romanian Fencing Federation Master', background: 'Former Romanian national sabreur and World Championship team medallist', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Romanian', 'French'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=800'],
    upcomingCamps: [
      { name: 'Bucharest Summer Sabre Camp', startDate: '2026-08-03', endDate: '2026-08-10', price: '€900', level: 'Intermediate-Advanced' }
    ],
    accommodation: {
      types: [{ type: 'hotel', label: 'Bucharest Old Town Hotel', pricePerWeek: 300, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Renovated hotel in Bucharest\'s Old Town with good transport links'
    },
    availability: {
      status: 'waitlist',
      nextIntake: '2026-08-01',
      spotsLeft: 0,
      responseTime: '72h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 6,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Romanian sports school programme available',
      medicalStaff: true,
      safeguarding: 'Romanian Olympic Committee and federation safeguarding standards',
      airportPickup: true,
      mealPlan: 'Full board with Romanian cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Romanian', 'French'],
      emergencyProtocol: 'On-site medical staff with Spitalul Universitar partnership'
    }
  },
  {
    id: 'dublin-fencing-club-academy',
    name: 'Dublin Fencing Club Academy',
    country: 'Ireland',
    countryFlag: '🇮🇪',
    city: 'Dublin',
    lat: 53.3442,
    lng: -6.2674,
    website: 'https://www.dublinfencing.ie',
    contact: '+353 1 456 7890',
    contactEmail: 'info@dublinfencing.ie',
    description: 'Ireland\'s leading fencing academy in Dublin, fostering competitive fencers in all three weapons with a focus on European-standard coaching.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby' },
    priceRange: { from: 700, to: 1500, unit: 'week', display: '€700 - €1,500/week' },
    socialMedia: { instagram: '@dublinfencing', facebook: 'https://facebook.com/dublinfencing', twitter: '@dublinfencing' },
    climate: 'dublin',
    facilities: 'Fencing salle, electronic scoring system, video replay room, footwork hall, gym, armoury',
    courtSurfaces: ['Épée', 'Foil', 'Sabre'],
    programs: [
      { name: 'All-Weapon Development Camp', price: '€900/week', desc: 'Training across all three weapons with experienced international coaches' },
      { name: 'Competition Preparation', price: '€1,100/week', desc: 'Intensive bout preparation for FIE circuit and national events' },
      { name: 'Youth Fencing Introduction', price: '€700/week', desc: 'Foundational fencing skills for young fencers aged 8-14' }
    ],
    coaches: [
      { name: 'Ciarán Doyle', credential: 'FIE Maître d\'Armes', background: 'Former Irish national team fencer and European Championship competitor with 15 years coaching', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Irish', 'French'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800'],
    upcomingCamps: [
      { name: 'Dublin Summer Fencing Camp', startDate: '2026-07-06', endDate: '2026-07-13', price: '€900', level: 'All Levels' }
    ],
    accommodation: {
      types: [{ type: 'hotel', label: 'Dublin City Centre Hotel', pricePerWeek: 500, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Central Dublin hotel within walking distance of the fencing salle'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-06-01',
      spotsLeft: 14,
      responseTime: '48h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 8,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Irish and international school integration for term-time students',
      medicalStaff: true,
      safeguarding: 'Fencing Ireland child protection standards, Garda-vetted coaches',
      airportPickup: true,
      mealPlan: 'Full board with Irish cuisine and sports nutrition',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Irish'],
      emergencyProtocol: 'On-site medical team with St James\'s Hospital partnership'
    }
  },
  {
    id: 'belgrade-fencing-academy',
    name: 'Belgrade Fencing Academy',
    country: 'Serbia',
    countryFlag: '🇷🇸',
    city: 'Belgrade',
    lat: 44.7866,
    lng: 20.4489,
    website: 'https://www.belgradefencing.rs',
    contact: '+381 11 890 1234',
    contactEmail: 'info@belgradefencing.rs',
    description: 'A modern fencing academy in Belgrade developing Serbian fencers across all three weapons, with a growing international reputation in sabre.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby, Danube and Sava riverside areas' },
    priceRange: { from: 450, to: 1100, unit: 'week', display: '€450 - €1,100/week' },
    socialMedia: { instagram: '@belgradefencing', facebook: 'https://facebook.com/belgradefencing', twitter: '@belgradefencing' },
    climate: 'belgrade',
    facilities: 'Fencing hall with 8 pistes, electronic scoring, video analysis, gym, armoury, recovery room',
    courtSurfaces: ['Épée', 'Foil', 'Sabre'],
    programs: [
      { name: 'Serbian Sabre Programme', price: '€900/week', desc: 'Elite sabre training building on growing Serbian fencing talent' },
      { name: 'All-Weapons Youth Programme', price: '€450/week', desc: 'Introduction to all three weapons for young fencers' }
    ],
    coaches: [
      { name: 'Vladimir Stanković', credential: 'Serbian Fencing Federation Master', background: 'Former Serbian national sabreur and European Cup medallist', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Serbian', 'French'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=800'],
    upcomingCamps: [
      { name: 'Belgrade Summer Fencing Camp', startDate: '2026-07-20', endDate: '2026-07-27', price: '€900', level: 'All levels' }
    ],
    accommodation: {
      types: [{ type: 'hotel', label: 'Belgrade City Hotel', pricePerWeek: 280, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Central Belgrade hotel with good transport links to the fencing hall'
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
      minAge: 6,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Serbian school programme available',
      medicalStaff: true,
      safeguarding: 'Serbian Fencing Federation safeguarding standards',
      airportPickup: true,
      mealPlan: 'Full board with Serbian cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Serbian', 'English'],
      emergencyProtocol: 'On-site medical staff, Clinical Centre of Serbia 15 minutes'
    }
  },
  {
    id: 'istanbul-fencing-academy',
    name: 'Istanbul Fencing Academy',
    country: 'Turkey',
    countryFlag: '',
    city: 'Istanbul',
    lat: 41.0082,
    lng: 28.9784,
    website: 'https://www.istanbulfencing.com.tr',
    contact: '+90 212 456 7891',
    contactEmail: 'info@istanbulfencing.com.tr',
    description: 'Turkey\'s premier fencing academy in Istanbul, offering training in all three weapons with a blend of traditional Ottoman swordsmanship heritage and modern Olympic fencing techniques.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 10, description: 'Bosphorus shoreline accessible' },
    priceRange: { from: 600, to: 1500, unit: 'week', display: '600 - 1,500/week' },
    socialMedia: { instagram: '@istanbulfencing', facebook: 'https://facebook.com/istanbulfencingacademy', twitter: '@istanbulfence' },
    climate: 'istanbul',
    facilities: 'Indoor fencing hall with 12 pistes, electronic scoring, video analysis, gym, physiotherapy, armoury',
    courtSurfaces: ['Indoor piste', 'Training piste'],
    programs: [
      { name: 'Olympic Fencing Development', price: '1,200/week', desc: 'Full-time training programme in foil, épée or sabre with Turkish national team coaches' },
      { name: 'Youth Fencing Introduction', price: '600/week', desc: 'Age-appropriate fencing introduction with safety focus and fun competitions' },
      { name: 'Sabre Intensive', price: '1,500/week', desc: 'Advanced sabre training with tactical analysis and competition preparation' }
    ],
    coaches: [
      { name: 'Elif Güneş', credential: 'FIE Maître d\'Armes', background: 'Former Turkish national sabre champion with Olympic Games experience. 10 years coaching top-level fencers.', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Turkish', 'English', 'French'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1558981033-4e20b0e0d0d3?w=800'],
    upcomingCamps: [
      { name: 'Summer Fencing Camp', startDate: '2026-07-06', endDate: '2026-07-13', price: '1,200', level: 'All levels' },
      { name: 'Autumn Sabre Clinic', startDate: '2026-10-19', endDate: '2026-10-23', price: '800', level: 'Intermediate' }
    ],
    accommodation: {
      types: [{ type: 'hotel', label: 'Istanbul City Hotel Partner', pricePerWeek: 400, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Central Istanbul location with easy metro access to the academy'
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
      schooling: 'Partnership with Istanbul international schools',
      medicalStaff: true,
      safeguarding: 'Turkish Fencing Federation child protection standards',
      airportPickup: true,
      mealPlan: 'Full board with Turkish and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Turkish', 'English'],
      emergencyProtocol: '24/7 on-call medical team with Istanbul hospital partnership'
    }
  }
];

const CLIMATE_DATA = {
  milan: {
    averageTemp: { summer: 24, winter: 3 },
    rainyDays: 85,
    humidity: 72,
    description: 'Humid subtropical climate with hot summers and cold, foggy winters'
  },
  rome: {
    averageTemp: { summer: 26, winter: 8 },
    rainyDays: 72,
    humidity: 68,
    description: 'Mediterranean climate with hot, dry summers and mild, wet winters'
  },
  naples: {
    averageTemp: { summer: 26, winter: 9 },
    rainyDays: 85,
    humidity: 70,
    description: 'Mediterranean climate with warm summers and mild winters'
  },
  paris: {
    averageTemp: { summer: 20, winter: 5 },
    rainyDays: 111,
    humidity: 78,
    description: 'Mild oceanic climate with warm summers and cool winters'
  },
  orleans: {
    averageTemp: { summer: 20, winter: 4 },
    rainyDays: 108,
    humidity: 76,
    description: 'Oceanic climate with moderate temperatures and regular rainfall'
  },
  budapest: {
    averageTemp: { summer: 22, winter: 0 },
    rainyDays: 100,
    humidity: 70,
    description: 'Continental climate with warm summers and cold winters'
  },
  bonn: {
    averageTemp: { summer: 19, winter: 3 },
    rainyDays: 115,
    humidity: 75,
    description: 'Oceanic climate with mild temperatures and regular precipitation'
  },
  tauberbischofsheim: {
    averageTemp: { summer: 20, winter: 1 },
    rainyDays: 105,
    humidity: 73,
    description: 'Continental climate with warm summers and cold winters in the Tauber Valley'
  },
  madrid: {
    averageTemp: { summer: 27, winter: 6 },
    rainyDays: 63,
    humidity: 57,
    description: 'Continental Mediterranean with hot summers and cool winters'
  },
  warsaw: {
    averageTemp: { summer: 20, winter: -1 },
    rainyDays: 110,
    humidity: 75,
    description: 'Continental climate with warm summers and cold winters'
  },
  bucharest: {
    averageTemp: { summer: 24, winter: 0 },
    rainyDays: 95,
    humidity: 70,
    description: 'Humid continental climate with hot summers and cold winters'
  },
  london: {
    averageTemp: { summer: 18, winter: 5 },
    rainyDays: 133,
    humidity: 80,
    description: 'Temperate oceanic climate with mild temperatures year-round'
  },
  vienna: {
    averageTemp: { summer: 21, winter: 1 },
    rainyDays: 105,
    humidity: 70,
    description: 'Continental climate with warm summers and cold winters'
  },
  stockholm: {
    averageTemp: { summer: 18, winter: -1 },
    rainyDays: 108,
    humidity: 76,
    description: 'Humid continental climate with mild summers and cold winters'
  },
  copenhagen: {
    averageTemp: { summer: 18, winter: 2 },
    rainyDays: 120,
    humidity: 80,
    description: 'Maritime climate with mild summers and cool winters'
  },
  brussels: {
    averageTemp: { summer: 18, winter: 3 },
    rainyDays: 135,
    humidity: 80,
    description: 'Oceanic climate with cool summers and mild winters'
  },
  amsterdam: {
    averageTemp: { summer: 17, winter: 4 },
    rainyDays: 132,
    humidity: 82,
    description: 'Oceanic climate with cool summers and mild, damp winters'
  },
  prague: {
    averageTemp: { summer: 19, winter: 0 },
    rainyDays: 110,
    humidity: 73,
    description: 'Oceanic-continental climate with warm summers and cold winters'
  },
  athens: {
    averageTemp: { summer: 28, winter: 10 },
    rainyDays: 50,
    humidity: 55,
    description: 'Mediterranean climate with hot, dry summers and mild winters'
  },
  zagreb: {
    averageTemp: { summer: 22, winter: 2 },
    rainyDays: 115,
    humidity: 72,
    description: 'Continental climate with warm summers and cold winters'
  },
  basel: {
    averageTemp: { summer: 20, winter: 2 },
    rainyDays: 100,
    humidity: 72,
    description: 'Continental climate with warm summers and cold winters in the Rhine Valley'
  },
  lisbon: {
    averageTemp: { summer: 24, winter: 12 },
    rainyDays: 60,
    humidity: 65,
    description: 'Mediterranean climate with warm, dry summers and mild, wet winters'
  },
  dublin: {
    averageTemp: { summer: 16, winter: 5 },
    rainyDays: 150,
    humidity: 82,
    description: 'Oceanic climate with cool summers and mild, damp winters'
  },
  belgrade: {
    averageTemp: { summer: 23, winter: 1 },
    rainyDays: 95,
    humidity: 70,
    description: 'Continental climate with warm summers and cold winters'
  },
  istanbul: {
    averageTemp: { summer: 25, winter: 6 },
    rainyDays: 90,
    humidity: 72,
    description: 'Mediterranean-influenced climate with warm summers and mild winters, ideal for year-round indoor training'
  }
};

const NEWS_ITEMS = [
  { title: 'FIE announces expanded World Cup circuit for 2025-2026 season', date: '2025-03-10', summary: 'The International Fencing Federation adds new World Cup stops across Asia and South America.' },
  { title: 'Electronic scoring technology upgrade for all FIE events', date: '2025-02-15', summary: 'New wireless scoring systems will be mandatory at all FIE-sanctioned competitions from 2026.' },
  { title: 'Youth fencing participation surges across Europe', date: '2025-01-28', summary: 'European fencing federations report a 25% increase in youth registrations over the past year.' },
  { title: 'Historic fencing academy in Italy celebrates 150th anniversary', date: '2025-01-10', summary: 'One of Italy\'s oldest fencing salles marks 150 years of continuous operation and champion development.' },
  { title: 'Olympic fencing format changes announced for 2028 Games', date: '2024-12-05', summary: 'The IOC confirms revised team event formats for fencing at the Los Angeles 2028 Olympics.' }
];

const COUNTRIES = ['Italy', 'France', 'Hungary', 'Germany', 'Spain', 'Poland', 'Romania', 'UK', 'Austria', 'Sweden', 'Denmark', 'Belgium', 'Netherlands', 'Czech Republic', 'Greece', 'Croatia', 'Switzerland', 'Portugal', 'Ireland', 'Serbia', 'Turkey'];
