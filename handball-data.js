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
  }
};

const NEWS_ITEMS = [
  { title: 'European Handball Federation launches new youth development programme', date: '2025-03-15', summary: 'The EHF has announced a comprehensive youth development initiative across 20 European nations.' },
  { title: 'Beach handball gains Olympic recognition for 2028', date: '2025-02-20', summary: 'Beach handball has been confirmed as a demonstration sport for the 2028 Los Angeles Olympics.' },
  { title: 'Record attendance at IHF World Championship', date: '2025-01-30', summary: 'The 2025 IHF Men\'s World Championship attracted record viewership and stadium attendance.' },
  { title: 'New handball training technology revolutionises coaching', date: '2025-01-15', summary: 'AI-powered analysis tools are transforming handball coaching with real-time tactical insights.' },
  { title: 'European clubs invest in youth handball academies', date: '2024-12-10', summary: 'Top European clubs are increasing investment in grassroots and academy handball programmes.' }
];

const COUNTRIES = ['France', 'Germany', 'Denmark', 'Spain', 'Sweden', 'Croatia'];
