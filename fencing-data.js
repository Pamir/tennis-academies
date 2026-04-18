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
  }
};

const NEWS_ITEMS = [
  { title: 'FIE announces expanded World Cup circuit for 2025-2026 season', date: '2025-03-10', summary: 'The International Fencing Federation adds new World Cup stops across Asia and South America.' },
  { title: 'Electronic scoring technology upgrade for all FIE events', date: '2025-02-15', summary: 'New wireless scoring systems will be mandatory at all FIE-sanctioned competitions from 2026.' },
  { title: 'Youth fencing participation surges across Europe', date: '2025-01-28', summary: 'European fencing federations report a 25% increase in youth registrations over the past year.' },
  { title: 'Historic fencing academy in Italy celebrates 150th anniversary', date: '2025-01-10', summary: 'One of Italy\'s oldest fencing salles marks 150 years of continuous operation and champion development.' },
  { title: 'Olympic fencing format changes announced for 2028 Games', date: '2024-12-05', summary: 'The IOC confirms revised team event formats for fencing at the Los Angeles 2028 Olympics.' }
];

const COUNTRIES = ['Italy', 'France', 'Hungary', 'Germany', 'Spain', 'Poland', 'Romania', 'UK'];
