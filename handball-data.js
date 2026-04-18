const SPORT_TYPE = 'handball';

const ACADEMIES = [
  {
    id: 'paris-handball-academy',
    name: 'Paris Handball Academy',
    country: 'France',
    countryFlag: '🇫🇷',
    city: 'Paris',
    lat: 48.8566,
    lng: 2.3522,
    website: 'https://www.parishandball.fr',
    contact: '+33 1 42 00 1234',
    contactEmail: 'info@parishandball.fr',
    description: 'Premier handball training centre in the heart of Paris, offering elite coaching for all ages with a focus on tactical development and athletic performance.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby' },
    priceRange: { from: 700, to: 1600, unit: 'week', display: '€700 - €1,600/week' },
    socialMedia: { instagram: '@parishandball', facebook: 'https://facebook.com/parishandball', twitter: '@parishandball' },
    climate: 'paris',
    facilities: 'Indoor sports hall, video analysis suite, modern gym, recovery pool, tactical room',
    courtSurfaces: ['Indoor court', 'Beach handball', 'Training court'],
    programs: [
      { name: 'Intensive Handball Camp', price: '€900/week', desc: 'Full-day training with tactical workshops and match play' },
      { name: 'Youth Development', price: '€700/week', desc: 'Age-appropriate skill building for juniors aged 8-16' },
      { name: 'Goalkeeping Masterclass', price: '€850/week', desc: 'Specialised goalkeeper training with video analysis' }
    ],
    coaches: [
      { name: 'Thierry Moreau', credential: 'IHF Master Coach', background: 'Former French national team player with 15 years coaching experience', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'French'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800'],
    upcomingCamps: [
      { name: 'Summer Handball Intensive', startDate: '2025-07-01', endDate: '2025-07-08', price: '€900', level: 'Intermediate' }
    ],
    accommodation: {
      types: [{ type: 'hotel', label: 'Partner Hotel near Training Hall', pricePerWeek: 500, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Central Paris location with easy metro access to training facility'
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
      schooling: 'Partnership with local school for term-time athletes',
      medicalStaff: true,
      safeguarding: 'Full DBS-checked staff, certified child protection policy',
      airportPickup: true,
      mealPlan: 'Full board with sports nutrition guidance',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'French'],
      emergencyProtocol: '24/7 on-call medical team with hospital partnership'
    }
  },
  {
    id: 'montpellier-handball-centre',
    name: 'Montpellier Handball Centre',
    country: 'France',
    countryFlag: '🇫🇷',
    city: 'Montpellier',
    lat: 43.6108,
    lng: 3.8767,
    website: 'https://www.montpellierhandball.fr',
    contact: '+33 4 67 00 5678',
    contactEmail: 'contact@montpellierhandball.fr',
    description: 'Located in the sunny south of France, this centre combines top-level handball coaching with Mediterranean lifestyle and culture.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 12, description: 'Mediterranean beach 12 km away' },
    priceRange: { from: 650, to: 1400, unit: 'week', display: '€650 - €1,400/week' },
    socialMedia: { instagram: '@mhbhandball', facebook: 'https://facebook.com/mhbhandball', twitter: '@mhbhandball' },
    climate: 'montpellier',
    facilities: 'Indoor sports hall, video analysis room, gym, recovery pool, tactical room',
    courtSurfaces: ['Indoor court', 'Beach handball', 'Training court'],
    programs: [
      { name: 'Mediterranean Handball Camp', price: '€800/week', desc: 'Intensive training with beach handball sessions included' },
      { name: 'Elite Performance', price: '€1100/week', desc: 'Advanced programme for competitive players seeking national level' }
    ],
    coaches: [
      { name: 'Julien Dupont', credential: 'EHF Pro Licence', background: 'Former Montpellier HB first team coach with Champions League experience', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'French', 'Spanish'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1519766304817-4f37bda74a26?w=800'],
    upcomingCamps: [
      { name: 'Beach Handball Festival', startDate: '2025-07-14', endDate: '2025-07-21', price: '€850', level: 'All levels' }
    ],
    accommodation: {
      types: [{ type: 'residence', label: 'Sports Residence', pricePerWeek: 400, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Modern residence within walking distance of the training hall'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-15',
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
      schooling: 'Local school partnership available during term time',
      medicalStaff: true,
      safeguarding: 'Certified safeguarding officers on site at all times',
      airportPickup: true,
      mealPlan: 'Full board with Mediterranean diet options',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'French', 'Spanish'],
      emergencyProtocol: 'On-site nurse and hospital 10 minutes away'
    }
  },
  {
    id: 'nantes-handball-school',
    name: 'Nantes Handball School',
    country: 'France',
    countryFlag: '🇫🇷',
    city: 'Nantes',
    lat: 47.2184,
    lng: -1.5536,
    website: 'https://www.nanteshandball.fr',
    contact: '+33 2 40 00 9012',
    contactEmail: 'info@nanteshandball.fr',
    description: 'A rising handball academy in western France known for its strong youth development programme and connection to professional clubs.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 55, description: 'Atlantic coast 55 km away' },
    priceRange: { from: 600, to: 1300, unit: 'week', display: '€600 - €1,300/week' },
    socialMedia: { instagram: '@nanteshandball', facebook: 'https://facebook.com/nanteshandball', twitter: '@nanteshandball' },
    climate: 'nantes',
    facilities: 'Indoor sports hall, video analysis, gym, recovery pool, tactical room',
    courtSurfaces: ['Indoor court', 'Training court'],
    programs: [
      { name: 'Junior Handball Academy', price: '€650/week', desc: 'Foundational skills and team play for young athletes' },
      { name: 'Senior Development', price: '€800/week', desc: 'Competitive-level training with match simulation' }
    ],
    coaches: [
      { name: 'Marc Leblanc', credential: 'FFHB Level 3', background: 'Youth development specialist with 20 years in French handball system', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'French'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800'],
    upcomingCamps: [
      { name: 'Atlantic Summer Camp', startDate: '2025-07-07', endDate: '2025-07-14', price: '€700', level: 'Beginner' }
    ],
    accommodation: {
      types: [{ type: 'dormitory', label: 'Academy Dormitory', pricePerWeek: 350, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'On-campus dormitory with full catering services'
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
      schooling: 'Integrated schooling available for long-term students',
      medicalStaff: true,
      safeguarding: 'Comprehensive child protection policy with trained staff',
      airportPickup: true,
      mealPlan: 'Full board with dietary accommodations',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'French'],
      emergencyProtocol: 'On-site first aid and local hospital on call'
    }
  },
  {
    id: 'kiel-handball-akademie',
    name: 'Kiel Handball Akademie',
    country: 'Germany',
    countryFlag: '🇩🇪',
    city: 'Kiel',
    lat: 54.3233,
    lng: 10.1228,
    website: 'https://www.kielhandball.de',
    contact: '+49 431 555 0100',
    contactEmail: 'info@kielhandball.de',
    description: 'Based in the handball capital of Germany, this elite academy draws on the city\'s rich handball heritage and proximity to THW Kiel.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 8, description: 'Baltic Sea coast 8 km away' },
    priceRange: { from: 750, to: 1700, unit: 'week', display: '€750 - €1,700/week' },
    socialMedia: { instagram: '@kielhandball', facebook: 'https://facebook.com/kielhandball', twitter: '@kielhandball' },
    climate: 'kiel',
    facilities: 'Indoor sports hall, video analysis centre, gym, recovery pool, tactical room',
    courtSurfaces: ['Indoor court', 'Beach handball', 'Training court'],
    programs: [
      { name: 'Bundesliga Experience', price: '€1000/week', desc: 'Train at Bundesliga level with professional coaching methods' },
      { name: 'Youth Talent Programme', price: '€750/week', desc: 'Structured development pathway for talented juniors' }
    ],
    coaches: [
      { name: 'Stefan Krause', credential: 'DHB A-Licence', background: 'Former Bundesliga player and German youth national team assistant coach', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'German', 'Danish'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1461896836934-bd45ba8fcb25?w=800'],
    upcomingCamps: [
      { name: 'Baltic Handball Camp', startDate: '2025-07-01', endDate: '2025-07-08', price: '€1000', level: 'Advanced' }
    ],
    accommodation: {
      types: [{ type: 'hotel', label: 'Waterfront Hotel', pricePerWeek: 550, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Located near the harbour with views of the Baltic Sea'
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
      schooling: 'Partnership with Sportinternat Kiel for academic support',
      medicalStaff: true,
      safeguarding: 'German sports federation safeguarding standards enforced',
      airportPickup: true,
      mealPlan: 'Full board with sports nutrition plan',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'German'],
      emergencyProtocol: '24/7 medical support with UKSH hospital nearby'
    }
  },
  {
    id: 'flensburg-handball-centre',
    name: 'Flensburg Handball Centre',
    country: 'Germany',
    countryFlag: '🇩🇪',
    city: 'Flensburg',
    lat: 54.7937,
    lng: 9.4469,
    website: 'https://www.flensburghandball.de',
    contact: '+49 461 555 0200',
    contactEmail: 'info@flensburghandball.de',
    description: 'A top handball training facility on the German-Danish border, benefiting from the strong Scandinavian handball tradition.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 15, description: 'Flensburg Fjord beaches 15 km away' },
    priceRange: { from: 700, to: 1500, unit: 'week', display: '€700 - €1,500/week' },
    socialMedia: { instagram: '@flensburghandball', facebook: 'https://facebook.com/flensburghandball', twitter: '@flensburghandball' },
    climate: 'flensburg',
    facilities: 'Indoor sports hall, video analysis, gym, recovery pool, tactical room',
    courtSurfaces: ['Indoor court', 'Beach handball', 'Training court'],
    programs: [
      { name: 'Cross-Border Camp', price: '€850/week', desc: 'German-Danish coaching collaboration with bilingual instruction' },
      { name: 'Defensive Tactics Clinic', price: '€750/week', desc: 'Specialised defensive systems and team coordination training' }
    ],
    coaches: [
      { name: 'Henrik Petersen', credential: 'DHB A-Licence', background: 'Danish-German dual national with SG Flensburg-Handewitt youth coaching background', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'German', 'Danish'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=800'],
    upcomingCamps: [
      { name: 'Nordic Handball Week', startDate: '2025-07-14', endDate: '2025-07-21', price: '€850', level: 'Intermediate' }
    ],
    accommodation: {
      types: [{ type: 'guesthouse', label: 'Fjord Guesthouse', pricePerWeek: 450, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Charming guesthouse near the Flensburg Fjord'
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
      schooling: 'Academic tutoring available during camp sessions',
      medicalStaff: true,
      safeguarding: 'Full safeguarding compliance with German and Danish standards',
      airportPickup: true,
      mealPlan: 'Full board with Scandinavian and German cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'German', 'Danish'],
      emergencyProtocol: 'On-site paramedic and hospital within 10 minutes'
    }
  },
  {
    id: 'berlin-handball-hub',
    name: 'Berlin Handball Hub',
    country: 'Germany',
    countryFlag: '🇩🇪',
    city: 'Berlin',
    lat: 52.5200,
    lng: 13.4050,
    website: 'https://www.berlinhandball.de',
    contact: '+49 30 555 0300',
    contactEmail: 'info@berlinhandball.de',
    description: 'A vibrant handball academy in Germany\'s capital, combining world-class training with the cultural richness of Berlin.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby' },
    priceRange: { from: 700, to: 1500, unit: 'week', display: '€700 - €1,500/week' },
    socialMedia: { instagram: '@berlinhandball', facebook: 'https://facebook.com/berlinhandball', twitter: '@berlinhandball' },
    climate: 'berlin',
    facilities: 'Indoor sports hall, video analysis, gym, recovery pool, tactical room',
    courtSurfaces: ['Indoor court', 'Training court'],
    programs: [
      { name: 'Capital City Camp', price: '€850/week', desc: 'Intensive training with cultural excursions in Berlin' },
      { name: 'Pivot & Wing Specialist', price: '€900/week', desc: 'Position-specific training for pivot and wing players' }
    ],
    coaches: [
      { name: 'Markus Bauer', credential: 'DHB A-Licence', background: 'Former Füchse Berlin coach with extensive Bundesliga experience', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'German'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800'],
    upcomingCamps: [
      { name: 'Berlin Summer Handball', startDate: '2025-07-07', endDate: '2025-07-14', price: '€850', level: 'All levels' }
    ],
    accommodation: {
      types: [{ type: 'hotel', label: 'City Centre Hotel', pricePerWeek: 500, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Centrally located hotel with U-Bahn access to training venue'
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
      minAge: 6,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Partnered schools for long-term student athletes',
      medicalStaff: true,
      safeguarding: 'Certified child protection officers on staff',
      airportPickup: true,
      mealPlan: 'Full board with diverse dietary options',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'German'],
      emergencyProtocol: '24/7 emergency line with Charité hospital partnership'
    }
  },
  {
    id: 'copenhagen-handball-academy',
    name: 'Copenhagen Handball Academy',
    country: 'Denmark',
    countryFlag: '🇩🇰',
    city: 'Copenhagen',
    lat: 55.6761,
    lng: 12.5683,
    website: 'https://www.copenhagenhandball.dk',
    contact: '+45 33 12 3456',
    contactEmail: 'info@copenhagenhandball.dk',
    description: 'Denmark\'s flagship handball academy in Copenhagen, leveraging the nation\'s dominant handball culture and Olympic pedigree.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 10, description: 'Amager Beach 10 km away' },
    priceRange: { from: 800, to: 1800, unit: 'week', display: '€800 - €1,800/week' },
    socialMedia: { instagram: '@cphhandball', facebook: 'https://facebook.com/cphhandball', twitter: '@cphhandball' },
    climate: 'copenhagen',
    facilities: 'Indoor sports hall, video analysis suite, gym, recovery pool, tactical room',
    courtSurfaces: ['Indoor court', 'Beach handball', 'Training court'],
    programs: [
      { name: 'Danish Method Training', price: '€1000/week', desc: 'Learn the famous Danish handball methodology used by the national team' },
      { name: 'Goalkeeper Academy', price: '€950/week', desc: 'World-class goalkeeper coaching from Danish specialists' }
    ],
    coaches: [
      { name: 'Lars Andersen', credential: 'DHF Elite Coach', background: 'Former Danish national team member and Olympic bronze medallist', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Danish', 'German'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?w=800'],
    upcomingCamps: [
      { name: 'Scandinavian Handball Summit', startDate: '2025-07-01', endDate: '2025-07-08', price: '€1000', level: 'Advanced' }
    ],
    accommodation: {
      types: [{ type: 'hotel', label: 'Copenhagen Sport Hotel', pricePerWeek: 600, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Modern hotel near the training centre with cycling access'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-01',
      spotsLeft: 15,
      responseTime: '24h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 7,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Danish school system integration for long stays',
      medicalStaff: true,
      safeguarding: 'Danish Sports Confederation safeguarding framework',
      airportPickup: true,
      mealPlan: 'Full board with organic Scandinavian meals',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Danish'],
      emergencyProtocol: 'On-site medical staff and Rigshospitalet on call'
    }
  },
  {
    id: 'aalborg-handball-institute',
    name: 'Aalborg Handball Institute',
    country: 'Denmark',
    countryFlag: '🇩🇰',
    city: 'Aalborg',
    lat: 57.0488,
    lng: 9.9217,
    website: 'https://www.aalborghandball.dk',
    contact: '+45 98 12 7890',
    contactEmail: 'info@aalborghandball.dk',
    description: 'Based in northern Denmark\'s handball heartland, this institute offers intensive training in a focused, distraction-free environment.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 30, description: 'North Sea beaches 30 km away' },
    priceRange: { from: 700, to: 1500, unit: 'week', display: '€700 - €1,500/week' },
    socialMedia: { instagram: '@aalborghandball', facebook: 'https://facebook.com/aalborghandball', twitter: '@aalborghandball' },
    climate: 'aalborg',
    facilities: 'Indoor sports hall, video analysis, gym, recovery pool, tactical room',
    courtSurfaces: ['Indoor court', 'Training court'],
    programs: [
      { name: 'Northern Elite Camp', price: '€850/week', desc: 'High-performance training in the Aalborg Håndbold tradition' },
      { name: 'Back Court Specialist', price: '€900/week', desc: 'Shooting and playmaking development for back court players' }
    ],
    coaches: [
      { name: 'Mikkel Sørensen', credential: 'DHF Level 3', background: 'Former Aalborg Håndbold player and youth team head coach', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Danish'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800'],
    upcomingCamps: [
      { name: 'Aalborg Junior Camp', startDate: '2025-07-14', endDate: '2025-07-21', price: '€850', level: 'Beginner' }
    ],
    accommodation: {
      types: [{ type: 'dormitory', label: 'Sports Dormitory', pricePerWeek: 380, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Campus dormitory attached to training facility'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-15',
      spotsLeft: 24,
      responseTime: '48h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 6,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Local school enrolment support for extended stays',
      medicalStaff: true,
      safeguarding: 'Full compliance with Danish child protection regulations',
      airportPickup: true,
      mealPlan: 'Full board with healthy Danish meals',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Danish'],
      emergencyProtocol: 'On-site paramedic with Aalborg University Hospital nearby'
    }
  },
  {
    id: 'barcelona-handball-escola',
    name: 'Barcelona Handball Escola',
    country: 'Spain',
    countryFlag: '🇪🇸',
    city: 'Barcelona',
    lat: 41.3851,
    lng: 2.1734,
    website: 'https://www.barcelonahandball.es',
    contact: '+34 93 123 4567',
    contactEmail: 'info@barcelonahandball.es',
    description: 'A dynamic handball school in Barcelona inspired by the FC Barcelona handball philosophy, focusing on fast-paced attacking play.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 3, description: 'Barceloneta Beach 3 km away' },
    priceRange: { from: 700, to: 1500, unit: 'week', display: '€700 - €1,500/week' },
    socialMedia: { instagram: '@bcnhandball', facebook: 'https://facebook.com/bcnhandball', twitter: '@bcnhandball' },
    climate: 'barcelona',
    facilities: 'Indoor sports hall, video analysis, gym, recovery pool, tactical room',
    courtSurfaces: ['Indoor court', 'Beach handball', 'Training court'],
    programs: [
      { name: 'Barça Method Handball', price: '€900/week', desc: 'Fast-break and combination play inspired by FC Barcelona' },
      { name: 'Beach Handball Experience', price: '€750/week', desc: 'Beach handball training on Barcelona coastline' }
    ],
    coaches: [
      { name: 'Carlos Ruiz', credential: 'RFEBM Level 3', background: 'Former Spanish Division de Honor player and Catalonia regional coach', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Spanish', 'Catalan'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1543351611-58f69d7c1bca?w=800'],
    upcomingCamps: [
      { name: 'Mediterranean Handball Festival', startDate: '2025-07-07', endDate: '2025-07-14', price: '€900', level: 'Intermediate' }
    ],
    accommodation: {
      types: [{ type: 'hotel', label: 'Beachfront Hotel', pricePerWeek: 500, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Modern hotel near the beach with metro access'
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
      minAge: 6,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Spanish language and schooling programme available',
      medicalStaff: true,
      safeguarding: 'Spanish sports federation child protection standards',
      airportPickup: true,
      mealPlan: 'Full board with Spanish and Mediterranean cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Spanish', 'Catalan'],
      emergencyProtocol: 'Medical staff on site with Hospital del Mar partnership'
    }
  },
  {
    id: 'madrid-handball-centro',
    name: 'Madrid Handball Centro',
    country: 'Spain',
    countryFlag: '🇪🇸',
    city: 'Madrid',
    lat: 40.4168,
    lng: -3.7038,
    website: 'https://www.madridhandball.es',
    contact: '+34 91 234 5678',
    contactEmail: 'info@madridhandball.es',
    description: 'Spain\'s capital handball centre offering world-class training facilities and coaching in the heart of Madrid.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby' },
    priceRange: { from: 650, to: 1400, unit: 'week', display: '€650 - €1,400/week' },
    socialMedia: { instagram: '@madridhandball', facebook: 'https://facebook.com/madridhandball', twitter: '@madridhandball' },
    climate: 'madrid',
    facilities: 'Indoor sports hall, video analysis suite, gym, recovery pool, tactical room',
    courtSurfaces: ['Indoor court', 'Training court'],
    programs: [
      { name: 'Spanish Handball Masterclass', price: '€800/week', desc: 'Comprehensive training in Spanish handball techniques and tactics' },
      { name: 'Junior Fast Track', price: '€700/week', desc: 'Accelerated development for promising young players' }
    ],
    coaches: [
      { name: 'Alejandro Torres', credential: 'RFEBM National Coach', background: 'Former Spanish national youth team coach with EHF experience', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Spanish'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800'],
    upcomingCamps: [
      { name: 'Madrid Summer Handball', startDate: '2025-07-01', endDate: '2025-07-08', price: '€800', level: 'All levels' }
    ],
    accommodation: {
      types: [{ type: 'hotel', label: 'Central Madrid Hotel', pricePerWeek: 480, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Hotel in central Madrid with direct metro to training centre'
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
      minAge: 6,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Spanish school integration and language courses available',
      medicalStaff: true,
      safeguarding: 'Comprehensive safeguarding with CSD-accredited protocols',
      airportPickup: true,
      mealPlan: 'Full board with traditional Spanish cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Spanish'],
      emergencyProtocol: '24/7 emergency protocol with Hospital La Paz nearby'
    }
  },
  {
    id: 'gothenburg-handball-centre',
    name: 'Gothenburg Handball Centre',
    country: 'Sweden',
    countryFlag: '🇸🇪',
    city: 'Gothenburg',
    lat: 57.7089,
    lng: 11.9746,
    website: 'https://www.gothenburghandball.se',
    contact: '+46 31 123 4567',
    contactEmail: 'info@gothenburghandball.se',
    description: 'Sweden\'s leading handball centre in Gothenburg, known for developing technically gifted players in the Scandinavian style.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 20, description: 'Gothenburg archipelago beaches 20 km away' },
    priceRange: { from: 800, to: 1700, unit: 'week', display: '€800 - €1,700/week' },
    socialMedia: { instagram: '@gothandball', facebook: 'https://facebook.com/gothandball', twitter: '@gothandball' },
    climate: 'gothenburg',
    facilities: 'Indoor sports hall, video analysis, gym, recovery pool, tactical room',
    courtSurfaces: ['Indoor court', 'Beach handball', 'Training court'],
    programs: [
      { name: 'Swedish Style Programme', price: '€950/week', desc: 'Technical training in the Swedish handball tradition of speed and precision' },
      { name: 'Scandinavian Combine', price: '€1100/week', desc: 'Joint Swedish-Danish-Norwegian coaching exchange programme' }
    ],
    coaches: [
      { name: 'Erik Lindqvist', credential: 'SHF Elite Coach', background: 'Former Swedish national team player with extensive international coaching career', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Swedish', 'Norwegian'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800'],
    upcomingCamps: [
      { name: 'Swedish Midsummer Handball', startDate: '2025-07-14', endDate: '2025-07-21', price: '€950', level: 'Intermediate' }
    ],
    accommodation: {
      types: [{ type: 'hotel', label: 'Gothenburg Waterfront Hotel', pricePerWeek: 550, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Comfortable hotel near the city centre with tram access'
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
      minAge: 7,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Swedish school placement assistance for long-term students',
      medicalStaff: true,
      safeguarding: 'Swedish Sports Confederation child safety standards',
      airportPickup: true,
      mealPlan: 'Full board with Scandinavian organic meals',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Swedish'],
      emergencyProtocol: 'On-site medical team with Sahlgrenska Hospital partnership'
    }
  },
  {
    id: 'zagreb-handball-akademija',
    name: 'Zagreb Handball Akademija',
    country: 'Croatia',
    countryFlag: '🇭🇷',
    city: 'Zagreb',
    lat: 45.8150,
    lng: 15.9819,
    website: 'https://www.zagrebhandball.hr',
    contact: '+385 1 234 5678',
    contactEmail: 'info@zagrebhandball.hr',
    description: 'Croatia\'s premier handball academy in Zagreb, drawing on the nation\'s legendary handball tradition and Olympic success.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby, Adriatic coast 180 km away' },
    priceRange: { from: 500, to: 1200, unit: 'week', display: '€500 - €1,200/week' },
    socialMedia: { instagram: '@zagrebhandball', facebook: 'https://facebook.com/zagrebhandball', twitter: '@zagrebhandball' },
    climate: 'zagreb',
    facilities: 'Indoor sports hall, video analysis, gym, recovery pool, tactical room',
    courtSurfaces: ['Indoor court', 'Training court'],
    programs: [
      { name: 'Croatian Handball Heritage', price: '€700/week', desc: 'Training methods rooted in Croatia\'s world-class handball system' },
      { name: 'Fast Break Masterclass', price: '€650/week', desc: 'Speed and transition play specialisation' }
    ],
    coaches: [
      { name: 'Ivan Horvat', credential: 'HRS Master Coach', background: 'Former RK Zagreb captain and Croatian national team member', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Croatian', 'German'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=800'],
    upcomingCamps: [
      { name: 'Zagreb Summer Handball', startDate: '2025-07-01', endDate: '2025-07-08', price: '€700', level: 'All levels' }
    ],
    accommodation: {
      types: [{ type: 'hotel', label: 'Zagreb City Hotel', pricePerWeek: 350, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Central Zagreb hotel with easy tram access to training venue'
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
      schooling: 'Croatian school integration for long-term athletes',
      medicalStaff: true,
      safeguarding: 'Croatian Olympic Committee child protection standards',
      airportPickup: true,
      mealPlan: 'Full board with traditional Croatian meals',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Croatian'],
      emergencyProtocol: 'On-site first aid with KBC Zagreb hospital nearby'
    }
  },
  {
    id: 'oslo-handball-akademi',
    name: 'Oslo Handball Akademi',
    country: 'Norway',
    countryFlag: '🇳🇴',
    city: 'Oslo',
    lat: 59.9139,
    lng: 10.7522,
    website: 'https://www.oslohandball.no',
    contact: '+47 21 00 1234',
    contactEmail: 'info@oslohandball.no',
    description: 'Norway\'s leading handball academy in Oslo, combining Scandinavian training philosophy with world-class indoor facilities and a focus on tactical excellence.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby' },
    priceRange: { from: 8000, to: 18000, unit: 'week', display: 'NOK 8,000 - 18,000/week' },
    socialMedia: { instagram: '@oslohandball', facebook: 'https://facebook.com/oslohandball', twitter: '@oslohandball' },
    climate: 'oslo',
    facilities: 'Indoor sports hall, video analysis suite, modern gym, recovery area, tactical room',
    courtSurfaces: ['Indoor court', 'Training court'],
    programs: [
      { name: 'Nordic Handball Intensive', price: 'NOK 12000/week', desc: 'Full-day training with tactical workshops and match play' },
      { name: 'Youth Development Programme', price: 'NOK 8000/week', desc: 'Age-appropriate skill building for juniors aged 8-16' },
      { name: 'Goalkeeping Specialist', price: 'NOK 10000/week', desc: 'Specialised goalkeeper training with video analysis' }
    ],
    coaches: [
      { name: 'Erik Lindqvist', credential: 'IHF Master Coach', background: 'Former Norwegian national team player with European Championship experience', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Norwegian', 'Swedish'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800'],
    upcomingCamps: [
      { name: 'Oslo Winter Handball Camp', startDate: '2026-01-05', endDate: '2026-01-12', price: 'NOK 12000', level: 'Intermediate' }
    ],
    accommodation: {
      types: [{ type: 'hotel', label: 'Partner Hotel near Training Hall', pricePerWeek: 5000, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Central Oslo location with easy public transport access'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-01-05',
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
      schooling: 'Norwegian school integration for long-term athletes',
      medicalStaff: true,
      safeguarding: 'Norwegian Olympic Committee child protection standards',
      airportPickup: true,
      mealPlan: 'Full board with Scandinavian meals',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Norwegian'],
      emergencyProtocol: 'On-site first aid with Oslo University Hospital nearby'
    }
  },
  {
    id: 'kielce-handball-academy',
    name: 'Kielce Handball Academy',
    country: 'Poland',
    countryFlag: '🇵🇱',
    city: 'Kielce',
    lat: 50.8661,
    lng: 20.6286,
    website: 'https://www.kielcehandball.pl',
    contact: '+48 41 234 5678',
    contactEmail: 'info@kielcehandball.pl',
    description: 'Located in Poland\'s handball heartland, Kielce Handball Academy draws on the city\'s rich handball tradition and passionate sporting culture.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: false,
    beach: { distance: null, description: 'No beach nearby' },
    priceRange: { from: 1500, to: 3500, unit: 'week', display: 'PLN 1,500 - 3,500/week' },
    socialMedia: { instagram: '@kielcehandball', facebook: 'https://facebook.com/kielcehandball', twitter: '@kielcehandball' },
    climate: 'kielce',
    facilities: 'Indoor sports hall, video analysis room, gym, recovery area, tactical room',
    courtSurfaces: ['Indoor court', 'Training court', 'Beach handball'],
    programs: [
      { name: 'Polish Handball Camp', price: 'PLN 2500/week', desc: 'Intensive training in the Polish handball tradition' },
      { name: 'Youth Talent Programme', price: 'PLN 1500/week', desc: 'Development programme for aspiring young players' }
    ],
    coaches: [
      { name: 'Tomasz Kowalski', credential: 'EHF Master Coach', background: 'Former Vive Kielce player and Polish national team member', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Polish', 'German'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1519766304817-4f37bda74a26?w=800'],
    upcomingCamps: [
      { name: 'Kielce Summer Handball', startDate: '2026-07-06', endDate: '2026-07-13', price: 'PLN 2500', level: 'All levels' }
    ],
    accommodation: {
      types: [{ type: 'residence', label: 'Sports Residence', pricePerWeek: 1000, maxOccupancy: 2, bathType: 'shared', mealsIncluded: true }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Comfortable sports residence near the training facility'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-06-01',
      spotsLeft: 30,
      responseTime: '48h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 8,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Polish school partnership for term-time athletes',
      medicalStaff: true,
      safeguarding: 'Polish Handball Federation child protection standards',
      airportPickup: true,
      mealPlan: 'Full board with traditional Polish meals',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Polish'],
      emergencyProtocol: 'On-site first aid with Kielce regional hospital nearby'
    }
  },
  {
    id: 'bucharest-handball-club',
    name: 'Bucharest Handball Club',
    country: 'Romania',
    countryFlag: '🇷🇴',
    city: 'Bucharest',
    lat: 44.4268,
    lng: 26.1025,
    website: 'https://www.bucharesthandball.ro',
    contact: '+40 21 234 5678',
    contactEmail: 'info@bucharesthandball.ro',
    description: 'Romania\'s premier handball training centre in the capital, building on the country\'s strong handball heritage with modern coaching methods.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby, Black Sea coast 230 km away' },
    priceRange: { from: 400, to: 900, unit: 'week', display: '€400 - €900/week' },
    socialMedia: { instagram: '@bucharesthandball', facebook: 'https://facebook.com/bucharesthandball', twitter: '@bucharesthandball' },
    climate: 'bucharest',
    facilities: 'Indoor sports hall, video analysis, gym, recovery pool, tactical room',
    courtSurfaces: ['Indoor court', 'Training court', 'Beach handball'],
    programs: [
      { name: 'Romanian Handball Intensive', price: '€600/week', desc: 'Full-day training with match play and tactical analysis' },
      { name: 'Youth Development', price: '€400/week', desc: 'Structured development for young players aged 8-16' },
      { name: 'Defence Masterclass', price: '€550/week', desc: 'Specialised defensive systems and techniques' }
    ],
    coaches: [
      { name: 'Alexandru Popescu', credential: 'IHF Coach Licence', background: 'Former Romanian national team captain with extensive European club experience', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Romanian', 'French'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=800'],
    upcomingCamps: [
      { name: 'Bucharest Autumn Handball', startDate: '2026-09-07', endDate: '2026-09-14', price: '€600', level: 'All levels' }
    ],
    accommodation: {
      types: [{ type: 'hotel', label: 'Bucharest City Hotel', pricePerWeek: 300, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Central Bucharest hotel with metro access to training venue'
    },
    availability: {
      status: 'limited',
      nextIntake: '2026-09-01',
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
      schooling: 'Romanian school integration for long-term athletes',
      medicalStaff: true,
      safeguarding: 'Romanian Handball Federation child protection policy',
      airportPickup: true,
      mealPlan: 'Full board with Romanian cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Romanian'],
      emergencyProtocol: 'On-site medical staff with Bucharest University Hospital partnership'
    }
  },
  {
    id: 'reykjavik-handball-centre',
    name: 'Reykjavik Handball Centre',
    country: 'Iceland',
    countryFlag: '🇮🇸',
    city: 'Reykjavik',
    lat: 64.1466,
    lng: -21.9426,
    website: 'https://www.reykjavikhandball.is',
    contact: '+354 520 1234',
    contactEmail: 'info@reykjavikhandball.is',
    description: 'Iceland\'s top handball training facility in Reykjavik, reflecting the nation\'s passion for handball with world-class indoor facilities and innovative coaching.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: false,
    beach: { distance: null, description: 'No beach handball facilities' },
    priceRange: { from: 120000, to: 280000, unit: 'week', display: 'ISK 120,000 - 280,000/week' },
    socialMedia: { instagram: '@reykjavikhandball', facebook: 'https://facebook.com/reykjavikhandball', twitter: '@reykjavikhandball' },
    climate: 'reykjavik',
    facilities: 'Indoor sports hall, video analysis suite, gym, geothermal recovery pool, tactical room',
    courtSurfaces: ['Indoor court', 'Training court'],
    programs: [
      { name: 'Icelandic Handball Experience', price: 'ISK 180000/week', desc: 'Intensive programme combining handball with Icelandic sports culture' },
      { name: 'Youth Viking Camp', price: 'ISK 120000/week', desc: 'Fun and development-focused camp for young players' }
    ],
    coaches: [
      { name: 'Gunnar Sigurdsson', credential: 'EHF Pro Licence', background: 'Former Icelandic national team member and Olympic participant', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Icelandic', 'Danish'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800'],
    upcomingCamps: [
      { name: 'Midnight Sun Handball Camp', startDate: '2026-06-15', endDate: '2026-06-22', price: 'ISK 180000', level: 'All levels' }
    ],
    accommodation: {
      types: [{ type: 'guesthouse', label: 'Reykjavik Guesthouse', pricePerWeek: 80000, maxOccupancy: 2, bathType: 'shared', mealsIncluded: false }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Cosy guesthouse in central Reykjavik with bus access to training hall'
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
      schooling: 'Icelandic school placement assistance available',
      medicalStaff: true,
      safeguarding: 'Icelandic Sports Federation child protection standards',
      airportPickup: true,
      mealPlan: 'Full board with Icelandic cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Icelandic'],
      emergencyProtocol: 'On-site first aid with Landspitali University Hospital nearby'
    }
  },
  {
    id: 'celje-handball-akademija',
    name: 'Celje Handball Akademija',
    country: 'Slovenia',
    countryFlag: '🇸🇮',
    city: 'Celje',
    lat: 46.2364,
    lng: 15.2681,
    website: 'https://www.celjehandball.si',
    contact: '+386 3 428 1234',
    contactEmail: 'info@celjehandball.si',
    description: 'Based in the handball city of Celje, this academy continues the proud tradition of RK Celje Pivovarna Laško with professional coaching and excellent facilities.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby, Adriatic coast 200 km away' },
    priceRange: { from: 450, to: 1000, unit: 'week', display: '€450 - €1,000/week' },
    socialMedia: { instagram: '@celjehandball', facebook: 'https://facebook.com/celjehandball', twitter: '@celjehandball' },
    climate: 'celje',
    facilities: 'Indoor sports hall, video analysis, gym, recovery area, tactical room',
    courtSurfaces: ['Indoor court', 'Training court', 'Beach handball'],
    programs: [
      { name: 'Celje Handball Heritage', price: '€650/week', desc: 'Training in the tradition of one of Europe\'s most storied clubs' },
      { name: 'Junior Development', price: '€450/week', desc: 'Structured development pathway for young talents' },
      { name: 'Pivot Play Specialist', price: '€600/week', desc: 'Specialised training for pivot and line player positions' }
    ],
    coaches: [
      { name: 'Matej Novak', credential: 'EHF Master Coach', background: 'Former RK Celje player and Slovenian national team coach', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Slovenian', 'Croatian'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1519766304817-4f37bda74a26?w=800'],
    upcomingCamps: [
      { name: 'Celje Spring Handball', startDate: '2026-04-06', endDate: '2026-04-13', price: '€650', level: 'Intermediate' }
    ],
    accommodation: {
      types: [{ type: 'residence', label: 'Sports Residence Celje', pricePerWeek: 280, maxOccupancy: 2, bathType: 'shared', mealsIncluded: true }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Modern sports residence adjacent to the Zlatorog Arena'
    },
    availability: {
      status: 'limited',
      nextIntake: '2026-04-01',
      spotsLeft: 10,
      responseTime: '24h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 6,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Slovenian school integration for long-term athletes',
      medicalStaff: true,
      safeguarding: 'Slovenian Handball Federation child protection standards',
      airportPickup: true,
      mealPlan: 'Full board with Slovenian cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Slovenian'],
      emergencyProtocol: 'On-site first aid with Celje General Hospital nearby'
    }
  },
  {
    id: 'porto-handball-academy',
    name: 'Porto Handball Academy',
    country: 'Portugal',
    countryFlag: '🇵🇹',
    city: 'Porto',
    lat: 41.1579,
    lng: -8.6291,
    website: 'https://www.portohandball.pt',
    contact: '+351 22 000 1234',
    contactEmail: 'info@portohandball.pt',
    description: 'Portugal\'s premier handball academy in Porto, combining Atlantic coast lifestyle with professional coaching and modern training facilities.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 5, description: 'Atlantic beach 5 km away with beach handball facilities' },
    priceRange: { from: 500, to: 1100, unit: 'week', display: '€500 - €1,100/week' },
    socialMedia: { instagram: '@portohandball', facebook: 'https://facebook.com/portohandball', twitter: '@portohandball' },
    climate: 'porto',
    facilities: 'Indoor sports hall, video analysis room, gym, recovery pool, outdoor beach court',
    courtSurfaces: ['Indoor court', 'Beach handball', 'Training court'],
    programs: [
      { name: 'Atlantic Handball Camp', price: '€700/week', desc: 'Intensive training with beach handball sessions included' },
      { name: 'Youth Academy', price: '€500/week', desc: 'Development programme for young Portuguese and international players' }
    ],
    coaches: [
      { name: 'Miguel Santos', credential: 'IHF Coach Licence', background: 'Former FC Porto handball coach with Portuguese league championship experience', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Portuguese', 'Spanish'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=800'],
    upcomingCamps: [
      { name: 'Porto Summer Beach Handball', startDate: '2026-07-20', endDate: '2026-07-27', price: '€700', level: 'All levels' }
    ],
    accommodation: {
      types: [{ type: 'hotel', label: 'Porto Riverside Hotel', pricePerWeek: 380, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Charming hotel in Porto\'s riverside district with metro access'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-07-01',
      spotsLeft: 24,
      responseTime: '48h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 7,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Portuguese school partnership for international students',
      medicalStaff: true,
      safeguarding: 'Portuguese Handball Federation child protection policy',
      airportPickup: true,
      mealPlan: 'Full board with Portuguese cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Portuguese'],
      emergencyProtocol: 'On-site medical staff with Hospital de Santo António nearby'
    }
  },
  {
    id: 'belgrade-handball-akademija',
    name: 'Belgrade Handball Akademija',
    country: 'Serbia',
    countryFlag: '🇷🇸',
    city: 'Belgrade',
    lat: 44.7866,
    lng: 20.4489,
    website: 'https://www.belgradehandball.rs',
    contact: '+381 11 234 5678',
    contactEmail: 'info@belgradehandball.rs',
    description: 'Serbia\'s elite handball academy in Belgrade, building on the nation\'s strong Yugoslav handball legacy with modern training methodology.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: false,
    beach: { distance: null, description: 'No beach nearby' },
    priceRange: { from: 350, to: 800, unit: 'week', display: '€350 - €800/week' },
    socialMedia: { instagram: '@belgradehandball', facebook: 'https://facebook.com/belgradehandball', twitter: '@belgradehandball' },
    climate: 'belgrade',
    facilities: 'Indoor sports hall, video analysis, gym, recovery area, tactical room',
    courtSurfaces: ['Indoor court', 'Training court'],
    programs: [
      { name: 'Serbian Handball Intensive', price: '€550/week', desc: 'Full-day training rooted in Serbian handball tradition' },
      { name: 'Wing Play Specialist', price: '€500/week', desc: 'Specialised training for wing positions with speed and shooting drills' },
      { name: 'Youth Foundation', price: '€350/week', desc: 'Fundamental skills development for beginners and juniors' }
    ],
    coaches: [
      { name: 'Nikola Jovanović', credential: 'EHF Pro Licence', background: 'Former Serbian national team player with Champions League experience', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Serbian', 'Croatian'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800'],
    upcomingCamps: [
      { name: 'Belgrade Easter Handball', startDate: '2026-04-13', endDate: '2026-04-20', price: '€550', level: 'All levels' }
    ],
    accommodation: {
      types: [{ type: 'hotel', label: 'Belgrade City Hotel', pricePerWeek: 250, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Central Belgrade hotel with easy bus access to training venue'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-04-01',
      spotsLeft: 28,
      responseTime: '24h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 7,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Serbian school integration for long-term athletes',
      medicalStaff: true,
      safeguarding: 'Serbian Handball Federation child protection standards',
      airportPickup: true,
      mealPlan: 'Full board with Serbian cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Serbian'],
      emergencyProtocol: 'On-site first aid with Clinical Centre of Serbia nearby'
    }
  },
  {
    id: 'skopje-handball-academy',
    name: 'Skopje Handball Academy',
    country: 'North Macedonia',
    countryFlag: '🇲🇰',
    city: 'Skopje',
    lat: 41.9973,
    lng: 21.4280,
    website: 'https://www.skopjehandball.mk',
    contact: '+389 2 312 1234',
    contactEmail: 'info@skopjehandball.mk',
    description: 'North Macedonia\'s top handball academy in Skopje, inspired by the success of RK Vardar and the nation\'s handball passion.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby' },
    priceRange: { from: 300, to: 700, unit: 'week', display: '€300 - €700/week' },
    socialMedia: { instagram: '@skopjehandball', facebook: 'https://facebook.com/skopjehandball', twitter: '@skopjehandball' },
    climate: 'skopje',
    facilities: 'Indoor sports hall, video analysis room, gym, recovery area, tactical room',
    courtSurfaces: ['Indoor court', 'Training court', 'Beach handball'],
    programs: [
      { name: 'Macedonian Handball Camp', price: '€500/week', desc: 'Intensive training following RK Vardar development methodology' },
      { name: 'Junior Talent Pathway', price: '€300/week', desc: 'Structured development for young Macedonian and international talents' }
    ],
    coaches: [
      { name: 'Darko Dimitrov', credential: 'EHF Master Coach', background: 'Former RK Vardar academy director and Macedonian national team assistant', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Macedonian', 'Serbian'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1519766304817-4f37bda74a26?w=800'],
    upcomingCamps: [
      { name: 'Skopje Summer Handball', startDate: '2026-08-03', endDate: '2026-08-10', price: '€500', level: 'All levels' }
    ],
    accommodation: {
      types: [{ type: 'hotel', label: 'Skopje Centre Hotel', pricePerWeek: 200, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'City centre hotel with shuttle service to Jane Sandanski Arena'
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
      schooling: 'Macedonian school integration available',
      medicalStaff: true,
      safeguarding: 'Macedonian Handball Federation child protection policy',
      airportPickup: true,
      mealPlan: 'Full board with Macedonian cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Macedonian'],
      emergencyProtocol: 'On-site first aid with Skopje City Hospital nearby'
    }
  },
  {
    id: 'vienna-handball-akademie',
    name: 'Vienna Handball Akademie',
    country: 'Austria',
    countryFlag: '🇦🇹',
    city: 'Vienna',
    lat: 48.2082,
    lng: 16.3738,
    website: 'https://www.viennahandball.at',
    contact: '+43 1 234 5678',
    contactEmail: 'info@viennahandball.at',
    description: 'Austria\'s leading handball academy in Vienna, combining Central European sporting tradition with modern coaching and outstanding indoor facilities.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby' },
    priceRange: { from: 600, to: 1400, unit: 'week', display: '€600 - €1,400/week' },
    socialMedia: { instagram: '@viennahandball', facebook: 'https://facebook.com/viennahandball', twitter: '@viennahandball' },
    climate: 'vienna',
    facilities: 'Indoor sports hall, video analysis suite, modern gym, recovery pool, tactical room',
    courtSurfaces: ['Indoor court', 'Training court', 'Beach handball'],
    programs: [
      { name: 'Vienna Handball Intensive', price: '€900/week', desc: 'Full-day training with tactical analysis and match play' },
      { name: 'Youth Academy Programme', price: '€600/week', desc: 'Structured development for young players aged 8-16' },
      { name: 'Backcourt Shooting Masterclass', price: '€800/week', desc: 'Specialised backcourt shooting and playmaking training' }
    ],
    coaches: [
      { name: 'Stefan Maier', credential: 'IHF Master Coach', background: 'Former Austrian national team player and Fivers WAT Margareten head coach', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'German', 'Hungarian'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=800'],
    upcomingCamps: [
      { name: 'Vienna Winter Handball', startDate: '2026-12-28', endDate: '2027-01-04', price: '€900', level: 'Intermediate' }
    ],
    accommodation: {
      types: [{ type: 'hotel', label: 'Vienna Sports Hotel', pricePerWeek: 450, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Modern hotel with U-Bahn access to training facilities'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-09-01',
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
      schooling: 'Austrian school integration for international students',
      medicalStaff: true,
      safeguarding: 'Austrian Handball Federation child protection standards',
      airportPickup: true,
      mealPlan: 'Full board with Austrian and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'German'],
      emergencyProtocol: 'On-site medical team with AKH Vienna hospital partnership'
    }
  },
  {
    id: 'prague-handball-school',
    name: 'Prague Handball School',
    country: 'Czech Republic',
    countryFlag: '🇨🇿',
    city: 'Prague',
    lat: 50.0755,
    lng: 14.4378,
    website: 'https://www.praguehandball.cz',
    contact: '+420 2 234 5678',
    contactEmail: 'info@praguehandball.cz',
    description: 'Czech Republic\'s top handball training school in Prague, offering professional coaching in a historic European capital with modern sports infrastructure.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: false,
    beach: { distance: null, description: 'No beach nearby' },
    priceRange: { from: 12000, to: 28000, unit: 'week', display: 'CZK 12,000 - 28,000/week' },
    socialMedia: { instagram: '@praguehandball', facebook: 'https://facebook.com/praguehandball', twitter: '@praguehandball' },
    climate: 'prague',
    facilities: 'Indoor sports hall, video analysis room, gym, recovery area, tactical room',
    courtSurfaces: ['Indoor court', 'Training court'],
    programs: [
      { name: 'Prague Handball Camp', price: 'CZK 18000/week', desc: 'Intensive training with Czech handball coaching methodology' },
      { name: 'Junior Development', price: 'CZK 12000/week', desc: 'Structured programme for young developing players' }
    ],
    coaches: [
      { name: 'Jan Procházka', credential: 'EHF Pro Licence', background: 'Former Czech national team member and Dukla Praha coach', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Czech', 'Slovak'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800'],
    upcomingCamps: [
      { name: 'Prague Spring Handball', startDate: '2026-05-04', endDate: '2026-05-11', price: 'CZK 18000', level: 'All levels' }
    ],
    accommodation: {
      types: [{ type: 'hotel', label: 'Prague Old Town Hotel', pricePerWeek: 8000, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: false }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Historic district hotel with tram access to training hall'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-05-01',
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
      schooling: 'Czech school partnership for international students',
      medicalStaff: true,
      safeguarding: 'Czech Handball Federation child protection policy',
      airportPickup: true,
      mealPlan: 'Full board with Czech and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Czech'],
      emergencyProtocol: 'On-site first aid with Motol University Hospital partnership'
    }
  },
  {
    id: 'zurich-handball-akademie',
    name: 'Zurich Handball Akademie',
    country: 'Switzerland',
    countryFlag: '🇨🇭',
    city: 'Zurich',
    lat: 47.3769,
    lng: 8.5417,
    website: 'https://www.zurichhandball.ch',
    contact: '+41 44 234 5678',
    contactEmail: 'info@zurichhandball.ch',
    description: 'Switzerland\'s premier handball academy in Zurich, offering precision coaching in world-class facilities with the Swiss tradition of excellence.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby, Lake Zurich for aquatic recovery' },
    priceRange: { from: 1200, to: 2800, unit: 'week', display: 'CHF 1,200 - 2,800/week' },
    socialMedia: { instagram: '@zurichhandball', facebook: 'https://facebook.com/zurichhandball', twitter: '@zurichhandball' },
    climate: 'zurich',
    facilities: 'Indoor sports hall, video analysis suite, modern gym, recovery pool, tactical room',
    courtSurfaces: ['Indoor court', 'Training court', 'Beach handball'],
    programs: [
      { name: 'Swiss Handball Intensive', price: 'CHF 1800/week', desc: 'Full-day professional training with match analysis' },
      { name: 'Youth Excellence Programme', price: 'CHF 1200/week', desc: 'Development pathway for talented young players' },
      { name: 'Fast Break Specialist', price: 'CHF 1600/week', desc: 'Speed and transition play specialisation' }
    ],
    coaches: [
      { name: 'Lukas Keller', credential: 'IHF Master Coach', background: 'Former Swiss national team captain and Kadetten Schaffhausen head coach', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'German', 'French', 'Italian'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1519766304817-4f37bda74a26?w=800'],
    upcomingCamps: [
      { name: 'Zurich Autumn Handball', startDate: '2026-10-12', endDate: '2026-10-19', price: 'CHF 1800', level: 'All levels' }
    ],
    accommodation: {
      types: [{ type: 'hotel', label: 'Zurich Lakeside Hotel', pricePerWeek: 900, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Lakeside hotel with tram access to training facilities'
    },
    availability: {
      status: 'limited',
      nextIntake: '2026-10-01',
      spotsLeft: 8,
      responseTime: '24h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 7,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Swiss school integration for international students',
      medicalStaff: true,
      safeguarding: 'Swiss Handball Association child protection standards',
      airportPickup: true,
      mealPlan: 'Full board with Swiss and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'German', 'French'],
      emergencyProtocol: 'On-site medical team with University Hospital Zurich partnership'
    }
  },
  {
    id: 'budapest-handball-academy',
    name: 'Budapest Handball Academy',
    country: 'Hungary',
    countryFlag: '🇭🇺',
    city: 'Budapest',
    lat: 47.4979,
    lng: 19.0402,
    website: 'https://www.budapesthandball.hu',
    contact: '+36 1 234 5678',
    contactEmail: 'info@budapesthandball.hu',
    description: 'Hungary\'s flagship handball academy in Budapest, drawing on the nation\'s legendary handball tradition and multiple Olympic gold medals.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby, Danube riverfront for recovery activities' },
    priceRange: { from: 500, to: 1200, unit: 'week', display: '€500 - €1,200/week' },
    socialMedia: { instagram: '@budapesthandball', facebook: 'https://facebook.com/budapesthandball', twitter: '@budapesthandball' },
    climate: 'budapest',
    facilities: 'Indoor sports hall, video analysis suite, modern gym, recovery pool, tactical room, handball museum',
    courtSurfaces: ['Indoor court', 'Training court', 'Beach handball'],
    programs: [
      { name: 'Hungarian Handball Heritage', price: '€800/week', desc: 'Training in the storied Hungarian handball tradition' },
      { name: 'Olympic Pathway Programme', price: '€700/week', desc: 'Elite development inspired by Hungary\'s Olympic handball legacy' },
      { name: 'Youth Foundation', price: '€500/week', desc: 'Fundamental skills and game understanding for young players' }
    ],
    coaches: [
      { name: 'László Nagy', credential: 'IHF Master Coach', background: 'Former Hungarian national team legend and Champions League winner with Veszprém', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Hungarian', 'German'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=800'],
    upcomingCamps: [
      { name: 'Budapest Summer Handball Festival', startDate: '2026-06-22', endDate: '2026-06-29', price: '€800', level: 'All levels' }
    ],
    accommodation: {
      types: [{ type: 'hotel', label: 'Budapest Danube Hotel', pricePerWeek: 350, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Riverside hotel with metro access to training facilities at Papp László Sportaréna'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-06-01',
      spotsLeft: 25,
      responseTime: '48h',
      privateLessons: true,
      yearRound: true
    },
    juniorInfo: {
      minAge: 6,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'Hungarian school integration for international athletes',
      medicalStaff: true,
      safeguarding: 'Hungarian Handball Federation child protection standards',
      airportPickup: true,
      mealPlan: 'Full board with Hungarian and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Hungarian'],
      emergencyProtocol: 'On-site medical team with Semmelweis University Hospital partnership'
    }
  },
  {
    id: 'olympic-handball-ireland',
    name: 'Olympic Handball Ireland',
    country: 'Ireland',
    countryFlag: '🇮🇪',
    city: 'Dublin',
    lat: 53.3498,
    lng: -6.2603,
    website: 'https://www.olympichandballireland.ie',
    contact: '+353 1 678 9012',
    contactEmail: 'info@olympichandballireland.ie',
    description: 'Ireland\'s premier handball training centre in Dublin, combining the rich GAA handball tradition with Olympic team handball development. A growing force in European handball.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 8, description: 'Sandymount Strand 8 km from the centre' },
    priceRange: { from: 600, to: 1400, unit: 'week', display: '€600 - €1,400/week' },
    socialMedia: { instagram: '@olympichandballirl', facebook: 'https://facebook.com/olympichandballireland', twitter: '@handballirl' },
    climate: 'dublin',
    facilities: 'Indoor sports hall, video analysis suite, modern gym, recovery pool, tactical room',
    courtSurfaces: ['Indoor court', 'Training court'],
    programs: [
      { name: 'Olympic Handball Development', price: '€800/week', desc: 'Full-day training focused on Olympic team handball skills and tactics' },
      { name: 'Youth Introduction Camp', price: '€600/week', desc: 'Age-appropriate handball fundamentals for juniors aged 8-16' },
      { name: 'Goalkeeping Intensive', price: '€750/week', desc: 'Specialised goalkeeper training with video analysis and reflex drills' }
    ],
    coaches: [
      { name: 'Declan Byrne', credential: 'EHF Master Coach', background: 'Former Ireland national team player with 12 years coaching experience at international level', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Irish'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800'],
    upcomingCamps: [
      { name: 'Summer Handball Academy', startDate: '2026-07-06', endDate: '2026-07-13', price: '€800', level: 'All levels' }
    ],
    accommodation: {
      types: [{ type: 'hotel', label: 'Dublin City Hotel Partner', pricePerWeek: 480, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Central Dublin location with easy public transport access to training facility'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-06-01',
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
      schooling: 'Partnership with Dublin international schools for term-time athletes',
      medicalStaff: true,
      safeguarding: 'Sport Ireland child protection standards, Garda-vetted staff',
      airportPickup: true,
      mealPlan: 'Full board with sports nutrition guidance',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Irish'],
      emergencyProtocol: '24/7 on-call medical team with St James\'s Hospital partnership'
    }
  },
  {
    id: 'metaloplastika-academy',
    name: 'RK Metaloplastika Academy',
    country: 'Serbia',
    countryFlag: '🇷🇸',
    city: 'Šabac',
    lat: 44.7479,
    lng: 19.6911,
    website: 'https://www.metaloplastika.rs',
    contact: '+381 15 345 678',
    contactEmail: 'academy@metaloplastika.rs',
    description: 'The legendary RK Metaloplastika\'s youth academy in Šabac, carrying on the tradition of one of European handball\'s most decorated clubs from the former Yugoslavia.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: null, description: 'No beach nearby, Sava river recreation areas' },
    priceRange: { from: 350, to: 900, unit: 'week', display: '€350 - €900/week' },
    socialMedia: { instagram: '@metaloplastika', facebook: 'https://facebook.com/metaloplastika', twitter: '@metaloplastika' },
    climate: 'sabac',
    facilities: 'Handball hall, outdoor training court, gym, video analysis, recovery room, club museum',
    courtSurfaces: ['Indoor court', 'Training court', 'Outdoor court'],
    programs: [
      { name: 'Metaloplastika Legacy Programme', price: '€700/week', desc: 'Train in the tradition of one of European handball\'s greatest clubs' },
      { name: 'Youth Handball Foundation', price: '€350/week', desc: 'Fundamental handball skills for young players' }
    ],
    coaches: [
      { name: 'Dragan Marković', credential: 'IHF Master Coach', background: 'Former Metaloplastika player and Serbian national team assistant coach', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Serbian'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=800'],
    upcomingCamps: [
      { name: 'Šabac Handball Summer Camp', startDate: '2026-07-06', endDate: '2026-07-13', price: '€700', level: 'All levels' }
    ],
    accommodation: {
      types: [{ type: 'hotel', label: 'Hotel Sloboda Šabac', pricePerWeek: 200, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Central Šabac hotel with walking distance to the handball hall'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-06-01',
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
      schooling: 'Serbian school coordination for visiting athletes',
      medicalStaff: true,
      safeguarding: 'Serbian Handball Federation child protection standards',
      airportPickup: true,
      mealPlan: 'Full board with Serbian cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['Serbian', 'English'],
      emergencyProtocol: 'On-site first aid, Šabac General Hospital 10 minutes'
    }
  },
  {
    id: 'besiktas-handball-academy',
    name: 'Beşiktaş Handball Academy',
    country: 'Turkey',
    countryFlag: '',
    city: 'Istanbul',
    lat: 41.0082,
    lng: 28.9784,
    website: 'https://www.besiktashandball.com.tr',
    contact: '+90 212 345 6789',
    contactEmail: 'info@besiktashandball.com.tr',
    description: 'Istanbul\'s premier handball training centre, combining Turkish sporting passion with European handball methodology. Developing the next generation of handball players in one of Europe\'s most vibrant cities.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 8, description: 'Bosphorus waterfront and beaches accessible' },
    priceRange: { from: 500, to: 1200, unit: 'week', display: '500 - 1,200/week' },
    socialMedia: { instagram: '@besiktashandball', facebook: 'https://facebook.com/besiktashandball', twitter: '@bjkhandball' },
    climate: 'istanbul',
    facilities: 'Indoor sports hall, video analysis suite, modern gym, recovery pool, tactical room',
    courtSurfaces: ['Indoor court', 'Training court'],
    programs: [
      { name: 'Handball Development Programme', price: '800/week', desc: 'Full-day training focused on handball skills, tactics and physical conditioning' },
      { name: 'Youth Introduction Camp', price: '500/week', desc: 'Age-appropriate handball fundamentals for juniors aged 8-16' },
      { name: 'Goalkeeping Intensive', price: '700/week', desc: 'Specialised goalkeeper training with video analysis and reflex drills' }
    ],
    coaches: [
      { name: 'Okan Yılmaz', credential: 'EHF Master Coach', background: 'Former Turkish national team player with 15 years coaching experience at club and international level', atpWta: false, bestRanking: null, rankingNote: null, languages: ['Turkish', 'English'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800'],
    upcomingCamps: [
      { name: 'Summer Handball Academy', startDate: '2026-07-06', endDate: '2026-07-13', price: '800', level: 'All levels' }
    ],
    accommodation: {
      types: [{ type: 'hotel', label: 'Istanbul City Hotel Partner', pricePerWeek: 400, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: '1 week',
      shuttleToTraining: true,
      notes: 'Central Istanbul location with excellent public transport access'
    },
    availability: {
      status: 'open',
      nextIntake: '2026-06-01',
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
      schooling: 'Partnership with Istanbul international schools for term-time athletes',
      medicalStaff: true,
      safeguarding: 'Turkish Handball Federation child protection standards',
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
  paris: {
    averageTemp: { summer: 20, winter: 5 },
    rainyDays: 111,
    humidity: 78,
    description: 'Mild oceanic climate with warm summers and cool winters'
  },
  montpellier: {
    averageTemp: { summer: 25, winter: 8 },
    rainyDays: 56,
    humidity: 65,
    description: 'Mediterranean climate with hot, dry summers and mild winters'
  },
  nantes: {
    averageTemp: { summer: 19, winter: 6 },
    rainyDays: 120,
    humidity: 80,
    description: 'Oceanic climate with mild temperatures year-round'
  },
  kiel: {
    averageTemp: { summer: 18, winter: 2 },
    rainyDays: 130,
    humidity: 82,
    description: 'Maritime climate with cool summers and cold winters near the Baltic Sea'
  },
  flensburg: {
    averageTemp: { summer: 17, winter: 1 },
    rainyDays: 135,
    humidity: 83,
    description: 'Cool maritime climate on the German-Danish border'
  },
  berlin: {
    averageTemp: { summer: 19, winter: 1 },
    rainyDays: 106,
    humidity: 72,
    description: 'Continental climate with warm summers and cold winters'
  },
  copenhagen: {
    averageTemp: { summer: 18, winter: 2 },
    rainyDays: 120,
    humidity: 80,
    description: 'Maritime climate with mild summers and cool winters'
  },
  aalborg: {
    averageTemp: { summer: 17, winter: 1 },
    rainyDays: 125,
    humidity: 82,
    description: 'Cool maritime climate in northern Denmark'
  },
  barcelona: {
    averageTemp: { summer: 25, winter: 10 },
    rainyDays: 55,
    humidity: 65,
    description: 'Mediterranean climate with hot summers and mild winters'
  },
  madrid: {
    averageTemp: { summer: 27, winter: 6 },
    rainyDays: 63,
    humidity: 57,
    description: 'Continental Mediterranean with hot summers and cool winters'
  },
  gothenburg: {
    averageTemp: { summer: 17, winter: 0 },
    rainyDays: 140,
    humidity: 80,
    description: 'Oceanic climate with cool summers and cold, damp winters'
  },
  zagreb: {
    averageTemp: { summer: 22, winter: 2 },
    rainyDays: 115,
    humidity: 72,
    description: 'Continental climate with warm summers and cold winters'
  },
  oslo: {
    averageTemp: { summer: 17, winter: -3 },
    rainyDays: 120,
    humidity: 76,
    description: 'Cool maritime climate with mild summers and cold winters'
  },
  kielce: {
    averageTemp: { summer: 19, winter: -2 },
    rainyDays: 110,
    humidity: 74,
    description: 'Continental climate with warm summers and cold winters'
  },
  bucharest: {
    averageTemp: { summer: 24, winter: 0 },
    rainyDays: 95,
    humidity: 70,
    description: 'Humid continental climate with hot summers and cold winters'
  },
  reykjavik: {
    averageTemp: { summer: 11, winter: 0 },
    rainyDays: 148,
    humidity: 77,
    description: 'Subarctic oceanic climate with cool summers and mild winters for its latitude'
  },
  celje: {
    averageTemp: { summer: 20, winter: 0 },
    rainyDays: 115,
    humidity: 74,
    description: 'Continental climate with warm summers and cold winters in the Savinja Valley'
  },
  porto: {
    averageTemp: { summer: 21, winter: 10 },
    rainyDays: 108,
    humidity: 75,
    description: 'Mediterranean climate with warm, dry summers and mild, rainy winters'
  },
  belgrade: {
    averageTemp: { summer: 23, winter: 1 },
    rainyDays: 100,
    humidity: 68,
    description: 'Humid continental climate with hot summers and cold winters'
  },
  skopje: {
    averageTemp: { summer: 25, winter: 2 },
    rainyDays: 90,
    humidity: 65,
    description: 'Continental climate with hot summers and cold winters'
  },
  vienna: {
    averageTemp: { summer: 21, winter: 1 },
    rainyDays: 105,
    humidity: 70,
    description: 'Continental climate with warm summers and cold winters'
  },
  prague: {
    averageTemp: { summer: 19, winter: 0 },
    rainyDays: 110,
    humidity: 73,
    description: 'Oceanic-continental climate with warm summers and cold winters'
  },
  zurich: {
    averageTemp: { summer: 19, winter: 1 },
    rainyDays: 120,
    humidity: 74,
    description: 'Continental climate with warm summers and cold winters, influenced by the Alps'
  },
  budapest: {
    averageTemp: { summer: 22, winter: 0 },
    rainyDays: 100,
    humidity: 70,
    description: 'Continental climate with warm summers and cold winters'
  },
  dublin: {
    averageTemp: { summer: 16, winter: 5 },
    rainyDays: 150,
    humidity: 82,
    description: 'Oceanic climate with cool summers and mild, damp winters'
  },
  sabac: {
    averageTemp: { summer: 23, winter: 1 },
    rainyDays: 90,
    humidity: 72,
    description: 'Continental climate in the Sava river valley with warm summers and cold winters'
  },
  istanbul: {
    averageTemp: { summer: 25, winter: 6 },
    rainyDays: 90,
    humidity: 72,
    description: 'Mediterranean-influenced climate with warm summers and mild winters'
  }
};

const NEWS_ITEMS = [
  { title: 'European Handball Federation launches new youth development programme', date: '2025-03-15', summary: 'The EHF has announced a comprehensive youth development initiative across 20 European nations.' },
  { title: 'Beach handball gains Olympic recognition for 2028', date: '2025-02-20', summary: 'Beach handball has been confirmed as a demonstration sport for the 2028 Los Angeles Olympics.' },
  { title: 'Record attendance at IHF World Championship', date: '2025-01-30', summary: 'The 2025 IHF Men\'s World Championship attracted record viewership and stadium attendance.' },
  { title: 'New handball training technology revolutionises coaching', date: '2025-01-15', summary: 'AI-powered analysis tools are transforming handball coaching with real-time tactical insights.' },
  { title: 'European clubs invest in youth handball academies', date: '2024-12-10', summary: 'Top European clubs are increasing investment in grassroots and academy handball programmes.' }
];

const COUNTRIES = ['France', 'Germany', 'Denmark', 'Spain', 'Sweden', 'Croatia', 'Norway', 'Poland', 'Romania', 'Iceland', 'Slovenia', 'Portugal', 'Serbia', 'North Macedonia', 'Austria', 'Czech Republic', 'Switzerland', 'Hungary', 'Ireland', 'Turkey'];
