const SPORT_TYPE = 'equestrian';
const ACADEMIES = [
  {
    id: 'kildare-equestrian-centre',
    name: 'Kildare International Equestrian Centre',
    country: 'Ireland', countryFlag: '🇮🇪',
    city: 'Kildare', lat: 53.16, lng: -6.91,
    website: 'https://www.kildareequestriancentre.ie', contact: '+353 45 123 456', contactEmail: 'info@kildareequestriancentre.ie',
    description: 'Premier equestrian training centre in the heart of Ireland\'s horse country. Home to championship-level facilities for dressage, show jumping, and eventing with access to Ireland\'s finest bloodstock traditions.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: null,
    priceRange: { from: 800, to: 2500, unit: 'week', display: '€800 - €2,500/week' },
    socialMedia: { instagram: '@kildareequestriancentre', facebook: 'https://facebook.com/kildareequestriancentre', twitter: '@kildareequest' },
    climate: 'kildare',
    facilities: 'Indoor school (60x20m), outdoor arenas, cross-country course, stables for 60 horses, horse walker, lunging ring, tack room, farrier on-site, veterinary clinic',
    courtSurfaces: ['Dressage arena', 'Show jumping course', 'Cross-country course', 'Indoor school'],
    programs: [
      { name: 'Complete Rider Programme', price: '€2,000/week', desc: 'Intensive training across dressage, show jumping, and cross-country' },
      { name: 'Show Jumping Intensive', price: '€1,500/week', desc: 'Focus on technique, course walking, and competition preparation' },
      { name: 'Young Rider Development', price: '€900/week', desc: 'Structured programme for aspiring competitive riders aged 10-18' }
    ],
    coaches: [
      { name: 'Cian O\'Connor', credential: 'HSI Level 3 Coach', background: 'International show jumping trainer with Olympic preparation experience', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Irish'], instagram: '@cianoconnorequestrian' },
      { name: 'Aoife Murphy', credential: 'BHS Stage 5', background: 'Former Irish eventing team member and dressage specialist', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800', 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800'],
    upcomingCamps: [
      { name: 'Summer Show Jumping Camp', startDate: '2025-07-07', endDate: '2025-07-14', price: '€1,500', level: 'Intermediate' },
      { name: 'Eventing Preparation Week', startDate: '2025-08-18', endDate: '2025-08-25', price: '€2,000', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'farmhouse', label: 'On-site Farmhouse', pricePerWeek: 450, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'cottage', label: 'Self-catering Cottage', pricePerWeek: 350, maxOccupancy: 4, bathType: 'shared', mealsIncluded: false }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: false, notes: 'On-site accommodation surrounded by paddocks and training facilities'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-01',
      spotsLeft: 12, responseTime: '48h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 8, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Partnership with local schools for term-time riders',
      medicalStaff: true, safeguarding: 'Garda-vetted staff, HSI safeguarding policy in place',
      airportPickup: true, mealPlan: 'Full board with home-cooked Irish meals',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Irish'],
      emergencyProtocol: 'On-site first aid, Naas General Hospital 15 minutes, equine ambulance on call'
    }
  },
  {
    id: 'dublin-riding-academy',
    name: 'Dublin International Riding Academy',
    country: 'Ireland', countryFlag: '🇮🇪',
    city: 'Dublin', lat: 53.35, lng: -6.26,
    website: 'https://www.dublinridingacademy.ie', contact: '+353 1 234 567', contactEmail: 'info@dublinridingacademy.ie',
    description: 'City-accessible equestrian academy near Dublin with championship arenas and cross-country course in the scenic Dublin Mountains.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: null,
    priceRange: { from: 700, to: 2000, unit: 'week', display: '€700 - €2,000/week' },
    socialMedia: { instagram: '@dublinridingacademy', facebook: 'https://facebook.com/dublinridingacademy', twitter: '@dublinriding' },
    climate: 'dublin',
    facilities: 'Indoor school (40x20m), outdoor arenas, cross-country course, stables, horse walker, lunging ring, tack room, farrier',
    courtSurfaces: ['Dressage arena', 'Show jumping course', 'Cross-country course', 'Indoor school'],
    programs: [
      { name: 'All-Rounder Programme', price: '€1,500/week', desc: 'Balanced training across all three Olympic equestrian disciplines' },
      { name: 'Beginner Rider Course', price: '€700/week', desc: 'Learn to ride from scratch with patient, experienced instructors' }
    ],
    coaches: [
      { name: 'Niamh Brennan', credential: 'BHS Stage 4', background: 'Former Irish pony team rider, specialising in youth development', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Irish'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800'],
    upcomingCamps: [
      { name: 'Easter Pony Camp', startDate: '2025-04-14', endDate: '2025-04-18', price: '€500', level: 'Beginner' }
    ],
    accommodation: {
      types: [
        { type: 'guesthouse', label: 'Academy Guesthouse', pricePerWeek: 400, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Close to Dublin city with easy access to cultural attractions'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-04-01',
      spotsLeft: 15, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 6, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Local school partnerships available',
      medicalStaff: true, safeguarding: 'Garda-vetted coaching staff, comprehensive child protection policy',
      airportPickup: true, mealPlan: 'Full board',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Irish'],
      emergencyProtocol: 'On-site first aid, multiple Dublin hospitals within 20 minutes'
    }
  },
  {
    id: 'gloucestershire-eventing',
    name: 'Gloucestershire Eventing Academy',
    country: 'UK', countryFlag: '🇬🇧',
    city: 'Gloucestershire', lat: 51.86, lng: -2.24,
    website: 'https://www.gloucestershireeventing.co.uk', contact: '+44 1242 123 456', contactEmail: 'info@gloucestershireeventing.co.uk',
    description: 'Located in the Cotswolds near Badminton and Gatcombe, the heartland of British eventing. World-class cross-country and show jumping facilities in stunning countryside.',
    ageGroups: ['Junior', 'Adult', 'Masters'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: null,
    priceRange: { from: 900, to: 2800, unit: 'week', display: '£900 - £2,800/week' },
    socialMedia: { instagram: '@gloucestereventing', facebook: 'https://facebook.com/gloucestershireeventing', twitter: '@gloucesterevnt' },
    climate: 'gloucestershire',
    facilities: 'Indoor school (60x20m), outdoor arenas, championship cross-country course, stables for 40 horses, horse walker, lunging ring, tack room, farrier, equine pool',
    courtSurfaces: ['Dressage arena', 'Show jumping course', 'Cross-country course', 'Indoor school'],
    programs: [
      { name: 'Eventing Excellence Programme', price: '€2,500/week', desc: 'Full eventing preparation with access to championship-standard cross-country' },
      { name: 'Dressage to Music Clinic', price: '€1,200/week', desc: 'Create and perfect your dressage freestyle with specialist coaching' },
      { name: 'Cross-Country Confidence', price: '€1,000/week', desc: 'Build confidence and technique over solid fences in the Cotswolds' }
    ],
    coaches: [
      { name: 'William Fox', credential: 'BHS Fellow', background: 'International eventing coach with Badminton and Burghley experience', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English'], instagram: '@williamfoxeventing' }
    ],
    photos: ['https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800'],
    upcomingCamps: [
      { name: 'Pre-Badminton Training Week', startDate: '2025-04-28', endDate: '2025-05-05', price: '£2,500', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'cottage', label: 'Cotswold Cottage', pricePerWeek: 500, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: false, notes: 'Charming Cotswold accommodation within walking distance of the yard'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-04-01',
      spotsLeft: 8, responseTime: '48h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 10, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Coordination with local schools possible during term time',
      medicalStaff: true, safeguarding: 'BHS safeguarding Level 2, all staff DBS checked',
      airportPickup: true, mealPlan: 'Full board with farm-to-table meals',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English'],
      emergencyProtocol: 'On-site first aid, Cheltenham General Hospital 20 minutes, equine vet on call'
    }
  },
  {
    id: 'berkshire-dressage-centre',
    name: 'Berkshire Dressage Centre',
    country: 'UK', countryFlag: '🇬🇧',
    city: 'Berkshire', lat: 51.45, lng: -0.98,
    website: 'https://www.berkshiredressage.co.uk', contact: '+44 1635 234 567', contactEmail: 'info@berkshiredressage.co.uk',
    description: 'Elite dressage training centre near Windsor with international-standard arenas and mirrors. Specialists in classical dressage and Grand Prix level training.',
    ageGroups: ['Adult', 'Masters'],
    level: 'Intermediate to Advanced',
    individualLessons: true,
    boarding: true,
    beach: null,
    priceRange: { from: 1000, to: 3000, unit: 'week', display: '£1,000 - £3,000/week' },
    socialMedia: { instagram: '@berkshiredressage', facebook: 'https://facebook.com/berkshiredressage', twitter: '@berksdressage' },
    climate: 'berkshire',
    facilities: 'Indoor school (60x20m) with mirrors and gallery, outdoor dressage arenas, stables, horse walker, lunging ring, tack room, farrier',
    courtSurfaces: ['Dressage arena', 'Indoor school'],
    programs: [
      { name: 'Grand Prix Dressage Masterclass', price: '£2,800/week', desc: 'Advanced dressage training aiming for Grand Prix movements' },
      { name: 'Classical Dressage Retreat', price: '£1,500/week', desc: 'Focus on classical principles and correct biomechanics' }
    ],
    coaches: [
      { name: 'Charlotte Spencer', credential: 'BHS Fellow, List 1 Dressage Judge', background: 'International Grand Prix dressage rider and trainer', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'German'], instagram: '@charlottespencerdressage' }
    ],
    photos: ['https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800'],
    upcomingCamps: [
      { name: 'Grand Prix Masterclass', startDate: '2025-06-09', endDate: '2025-06-16', price: '£2,800', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Country House Hotel', pricePerWeek: 600, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: false, minStay: '1 week', shuttleToTraining: true, notes: 'Luxury country house hotel near Windsor with equestrian heritage'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-05-01',
      spotsLeft: 6, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 14, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Not available',
      medicalStaff: true, safeguarding: 'BHS safeguarding policy, all coaches DBS checked',
      airportPickup: true, mealPlan: 'Full board',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'German'],
      emergencyProtocol: 'On-site first aid, Royal Berkshire Hospital 25 minutes'
    }
  },
  {
    id: 'yorkshire-riding-school',
    name: 'Yorkshire Riding School',
    country: 'UK', countryFlag: '🇬🇧',
    city: 'Yorkshire', lat: 54.00, lng: -1.50,
    website: 'https://www.yorkshireridingschool.co.uk', contact: '+44 1onal 345 678', contactEmail: 'info@yorkshireridingschool.co.uk',
    description: 'Traditional British riding school set in the stunning Yorkshire Dales. Specialising in all-round horsemanship with hacking across open moorland and competitive training.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: null,
    priceRange: { from: 600, to: 1800, unit: 'week', display: '£600 - £1,800/week' },
    socialMedia: { instagram: '@yorkshireridingschool', facebook: 'https://facebook.com/yorkshireridingschool', twitter: '@yorksriding' },
    climate: 'yorkshire',
    facilities: 'Indoor school, outdoor arenas, cross-country course, stables for 30 horses, horse walker, lunging ring, tack room, farrier, miles of moorland hacking',
    courtSurfaces: ['Dressage arena', 'Show jumping course', 'Cross-country course', 'Indoor school'],
    programs: [
      { name: 'Complete Horsemanship', price: '£1,200/week', desc: 'All-round riding and horse care skills in the Yorkshire countryside' },
      { name: 'Pony Club Preparation', price: '£700/week', desc: 'Prepare for Pony Club tests and competitions' }
    ],
    coaches: [
      { name: 'Sarah Whitaker', credential: 'BHS Stage 5, UKCC Level 3', background: 'Former British Young Rider team member, specialising in all-round horsemanship', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800'],
    upcomingCamps: [
      { name: 'Summer Riding Camp', startDate: '2025-07-21', endDate: '2025-07-28', price: '£800', level: 'Beginner' }
    ],
    accommodation: {
      types: [
        { type: 'farmhouse', label: 'Farmhouse B&B', pricePerWeek: 350, maxOccupancy: 2, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: false, notes: 'Traditional Yorkshire farmhouse with stunning Dales views'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-01',
      spotsLeft: 10, responseTime: '48h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 6, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Local school partnerships for term-time stays',
      medicalStaff: true, safeguarding: 'BHS safeguarding, all staff DBS checked',
      airportPickup: true, mealPlan: 'Full board with home-cooked Yorkshire food',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English'],
      emergencyProtocol: 'On-site first aid, nearest hospital 25 minutes, equine vet on call'
    }
  },
  {
    id: 'warendorf-riding-centre',
    name: 'Warendorf German Riding Centre',
    country: 'Germany', countryFlag: '🇩🇪',
    city: 'Warendorf', lat: 51.95, lng: 7.99,
    website: 'https://www.warendorfridingcentre.de', contact: '+49 2581 123 456', contactEmail: 'info@warendorfridingcentre.de',
    description: 'Train at Germany\'s national equestrian centre in Warendorf, home of the Deutsche Reiterliche Vereinigung. World-class facilities used by Olympic dressage and show jumping teams.',
    ageGroups: ['Junior', 'Adult', 'Masters'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: null,
    priceRange: { from: 900, to: 2800, unit: 'week', display: '€900 - €2,800/week' },
    socialMedia: { instagram: '@warendorfriding', facebook: 'https://facebook.com/warendorfridingcentre', twitter: '@warendorfriding' },
    climate: 'warendorf',
    facilities: 'Indoor school (60x20m), outdoor arenas, cross-country course, stables for 100 horses, horse walker, lunging ring, tack room, farrier, equine clinic, sport science lab',
    courtSurfaces: ['Dressage arena', 'Show jumping course', 'Cross-country course', 'Indoor school'],
    programs: [
      { name: 'German Riding Master Programme', price: '€2,500/week', desc: 'Training in the German classical riding tradition at the national centre' },
      { name: 'Show Jumping Excellence', price: '€2,000/week', desc: 'Advanced show jumping training with international-level course design' },
      { name: 'Young Horse Development', price: '€1,500/week', desc: 'Learn to train and develop young horses using German methodology' }
    ],
    coaches: [
      { name: 'Klaus Richter', credential: 'FN Pferdewirtschaftsmeister', background: 'Former German national dressage team trainer, Bundestrainer assistant', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'German'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800'],
    upcomingCamps: [
      { name: 'German Method Masterclass', startDate: '2025-05-12', endDate: '2025-05-19', price: '€2,500', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Equestrian Hotel', pricePerWeek: 500, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Adjacent to the national riding centre with views over the training grounds'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-05-01',
      spotsLeft: 14, responseTime: '48h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 10, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Elite sport school partnership in Warendorf',
      medicalStaff: true, safeguarding: 'FN youth safeguarding standards, all coaches certified',
      airportPickup: true, mealPlan: 'Full board with German and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'German'],
      emergencyProtocol: 'On-site equine clinic, Josephs-Hospital Warendorf 10 minutes'
    }
  },
  {
    id: 'aachen-jumping-academy',
    name: 'Aachen Show Jumping Academy',
    country: 'Germany', countryFlag: '🇩🇪',
    city: 'Aachen', lat: 50.78, lng: 6.08,
    website: 'https://www.aachenjumping.de', contact: '+49 241 234 567', contactEmail: 'info@aachenjumping.de',
    description: 'Home of the legendary CHIO Aachen, the world\'s most prestigious show jumping event. Train where champions compete on hallowed equestrian ground.',
    ageGroups: ['Adult', 'Masters'],
    level: 'Intermediate to Advanced',
    individualLessons: true,
    boarding: true,
    beach: null,
    priceRange: { from: 1200, to: 3500, unit: 'week', display: '€1,200 - €3,500/week' },
    socialMedia: { instagram: '@aachenjumping', facebook: 'https://facebook.com/aachenjumping', twitter: '@aachenjumping' },
    climate: 'aachen',
    facilities: 'Indoor school, outdoor arenas including replica CHIO course, stables, horse walker, lunging ring, tack room, farrier, equine hydrotherapy',
    courtSurfaces: ['Dressage arena', 'Show jumping course', 'Indoor school'],
    programs: [
      { name: 'CHIO Experience Camp', price: '€3,000/week', desc: 'Train on the CHIO course with championship-level coaching' },
      { name: 'International Show Jumping Prep', price: '€2,200/week', desc: 'Prepare for international show jumping competitions with expert guidance' }
    ],
    coaches: [
      { name: 'Heinrich Weber', credential: 'FN Bereiter, FEI Level 3 Coach', background: 'International show jumping course designer and elite rider coach', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'German', 'French'], instagram: '@heinrichweber_sj' }
    ],
    photos: ['https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800'],
    upcomingCamps: [
      { name: 'CHIO Preparation Camp', startDate: '2025-06-16', endDate: '2025-06-23', price: '€3,000', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Aachen City Hotel', pricePerWeek: 550, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: false, minStay: '1 week', shuttleToTraining: true, notes: 'Central Aachen hotel with CHIO Soers showground shuttle'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-01',
      spotsLeft: 8, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 14, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Not available',
      medicalStaff: true, safeguarding: 'FN safeguarding compliance, all staff background-checked',
      airportPickup: true, mealPlan: 'Full board',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'German', 'French'],
      emergencyProtocol: 'On-site first aid, Uniklinik Aachen 15 minutes, equine vet on standby'
    }
  },
  {
    id: 'den-bosch-equestrian',
    name: 'Den Bosch International Equestrian Centre',
    country: 'Netherlands', countryFlag: '🇳🇱',
    city: 'Den Bosch', lat: 51.69, lng: 5.30,
    website: 'https://www.denboschequest.nl', contact: '+31 73 123 456', contactEmail: 'info@denboschequest.nl',
    description: 'Dutch equestrian excellence near the famous Brabanthallen. Home to top-level dressage and show jumping training in the Netherlands\' equestrian heartland.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: null,
    priceRange: { from: 800, to: 2500, unit: 'week', display: '€800 - €2,500/week' },
    socialMedia: { instagram: '@denboschequest', facebook: 'https://facebook.com/denboschequest', twitter: '@denboschequest' },
    climate: 'den-bosch',
    facilities: 'Indoor school (70x30m), outdoor arenas, stables for 50 horses, horse walker, lunging ring, tack room, farrier, equine solarium',
    courtSurfaces: ['Dressage arena', 'Show jumping course', 'Indoor school'],
    programs: [
      { name: 'Dutch Dressage Programme', price: '€2,000/week', desc: 'Learn dressage the Dutch way with emphasis on harmony and throughness' },
      { name: 'Competition Preparation', price: '€1,500/week', desc: 'Targeted preparation for national and international competitions' }
    ],
    coaches: [
      { name: 'Jan van der Berg', credential: 'KNHS Level 4 Instructor', background: 'Former Dutch Young Rider team dressage trainer', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Dutch', 'German'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800'],
    upcomingCamps: [
      { name: 'Indoor Season Preparation', startDate: '2025-09-15', endDate: '2025-09-22', price: '€2,000', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Equestrian B&B', pricePerWeek: 450, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Comfortable B&B accommodation with views over the training grounds'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-09-01',
      spotsLeft: 10, responseTime: '48h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 10, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Dutch school coordination available',
      medicalStaff: true, safeguarding: 'KNHS safeguarding policy, all coaches VOG certified',
      airportPickup: true, mealPlan: 'Full board with Dutch and international cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Dutch', 'German'],
      emergencyProtocol: 'On-site first aid, Jeroen Bosch Ziekenhuis 15 minutes'
    }
  },
  {
    id: 'saumur-riding-school',
    name: 'Saumur Classical Riding School',
    country: 'France', countryFlag: '🇫🇷',
    city: 'Saumur', lat: 47.26, lng: -0.07,
    website: 'https://www.saumurridingschool.fr', contact: '+33 2 41 123 456', contactEmail: 'info@saumurridingschool.fr',
    description: 'Train near the legendary Cadre Noir in Saumur, the cradle of French classical horsemanship. Classical dressage and academic riding in the Loire Valley.',
    ageGroups: ['Adult', 'Masters'],
    level: 'Intermediate to Advanced',
    individualLessons: true,
    boarding: true,
    beach: null,
    priceRange: { from: 1000, to: 3000, unit: 'week', display: '€1,000 - €3,000/week' },
    socialMedia: { instagram: '@saumurriding', facebook: 'https://facebook.com/saumurridingschool', twitter: '@saumurriding' },
    climate: 'saumur',
    facilities: 'Indoor school, outdoor arenas, stables, horse walker, lunging ring, tack room, farrier, equine physiotherapy',
    courtSurfaces: ['Dressage arena', 'Indoor school'],
    programs: [
      { name: 'Classical Horsemanship Retreat', price: '€2,500/week', desc: 'Immerse in the French classical riding tradition near the Cadre Noir' },
      { name: 'Haute École Introduction', price: '€1,800/week', desc: 'Introduction to the airs above the ground and advanced classical movements' }
    ],
    coaches: [
      { name: 'Pierre Beaumont', credential: 'Écuyer du Cadre Noir (retired)', background: 'Former Cadre Noir rider with 25 years of classical dressage expertise', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'French'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800'],
    upcomingCamps: [
      { name: 'Loire Valley Classical Retreat', startDate: '2025-05-19', endDate: '2025-05-26', price: '€2,500', level: 'Advanced' }
    ],
    accommodation: {
      types: [
        { type: 'chateau', label: 'Loire Valley Château', pricePerWeek: 700, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: false, minStay: '1 week', shuttleToTraining: true, notes: 'Stay in a Loire Valley château with fine French dining included'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-05-01',
      spotsLeft: 6, responseTime: '24h', privateLessons: true, yearRound: false
    },
    juniorInfo: {
      minAge: 16, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Not available',
      medicalStaff: true, safeguarding: 'FFE safeguarding standards, all coaches certified',
      airportPickup: true, mealPlan: 'Full board with French gastronomy',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'French'],
      emergencyProtocol: 'On-site first aid, Centre Hospitalier de Saumur 10 minutes'
    }
  },
  {
    id: 'chantilly-racing-academy',
    name: 'Chantilly Equestrian Academy',
    country: 'France', countryFlag: '🇫🇷',
    city: 'Chantilly', lat: 49.19, lng: 2.47,
    website: 'https://www.chantillyequest.fr', contact: '+33 3 44 234 567', contactEmail: 'info@chantillyequest.fr',
    description: 'Elite equestrian training near the famous Chantilly racecourse and the Great Stables. World-class show jumping and dressage in the French equestrian capital.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: null,
    priceRange: { from: 900, to: 2800, unit: 'week', display: '€900 - €2,800/week' },
    socialMedia: { instagram: '@chantillyequest', facebook: 'https://facebook.com/chantillyequest', twitter: '@chantillyequest' },
    climate: 'chantilly',
    facilities: 'Indoor school, outdoor arenas, cross-country course in Chantilly forest, stables, horse walker, lunging ring, tack room, farrier',
    courtSurfaces: ['Dressage arena', 'Show jumping course', 'Cross-country course', 'Indoor school'],
    programs: [
      { name: 'Chantilly Rider Programme', price: '€2,200/week', desc: 'Complete rider training in the heart of French equestrianism' },
      { name: 'Show Jumping Development', price: '€1,500/week', desc: 'Progressive show jumping programme from 1m to 1.40m' },
      { name: 'Junior Rider Academy', price: '€1,000/week', desc: 'Structured development for young competitive riders' }
    ],
    coaches: [
      { name: 'Marie Leclerc', credential: 'BEES 2 Equitation', background: 'International show jumping rider and youth development specialist', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'French', 'German'], instagram: '@marieleclercequestrian' }
    ],
    photos: ['https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800'],
    upcomingCamps: [
      { name: 'Autumn Show Jumping Clinic', startDate: '2025-10-06', endDate: '2025-10-13', price: '€1,500', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Chantilly Hotel', pricePerWeek: 550, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Near Chantilly town with access to the famous château and forests'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-09-01',
      spotsLeft: 12, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 8, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'French school coordination during term time',
      medicalStaff: true, safeguarding: 'FFE youth safeguarding certification, all coaches vetted',
      airportPickup: true, mealPlan: 'Full board with French cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'French'],
      emergencyProtocol: 'On-site first aid, Chantilly medical centre 5 minutes, Senlis hospital 15 minutes'
    }
  },
  {
    id: 'jerez-andalusian-school',
    name: 'Jerez Andalusian Riding School',
    country: 'Spain', countryFlag: '🇪🇸',
    city: 'Jerez', lat: 36.69, lng: -6.13,
    website: 'https://www.jerezridingschool.es', contact: '+34 956 123 456', contactEmail: 'info@jerezridingschool.es',
    description: 'Experience the art of Andalusian horsemanship in Jerez de la Frontera, home of the Royal Andalusian School of Equestrian Art. Classical Spanish dressage and Doma Vaquera.',
    ageGroups: ['Adult', 'Masters'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: { distance: 25, description: 'Atlantic coast beaches near Cádiz accessible for trail rides' },
    priceRange: { from: 800, to: 2500, unit: 'week', display: '€800 - €2,500/week' },
    socialMedia: { instagram: '@jerezridingschool', facebook: 'https://facebook.com/jerezridingschool', twitter: '@jerezriding' },
    climate: 'jerez',
    facilities: 'Indoor school, outdoor arenas, stables, horse walker, lunging ring, tack room, farrier, Andalusian horse breeding programme',
    courtSurfaces: ['Dressage arena', 'Indoor school'],
    programs: [
      { name: 'Andalusian Dressage Experience', price: '€2,000/week', desc: 'Classical Spanish dressage on pure Andalusian horses' },
      { name: 'Doma Vaquera Workshop', price: '€1,500/week', desc: 'Learn the traditional cattle-working riding style of southern Spain' },
      { name: 'Sherry Trail Ride & Ride', price: '€900/week', desc: 'Combine riding lessons with Andalusian culture and sherry bodega visits' }
    ],
    coaches: [
      { name: 'Rafael García', credential: 'Real Escuela Certified Instructor', background: 'Classical Spanish dressage master trained at the Royal Andalusian School', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Spanish'], instagram: '@rafaelgarciaequest' }
    ],
    photos: ['https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800'],
    upcomingCamps: [
      { name: 'Spring Andalusian Experience', startDate: '2025-04-07', endDate: '2025-04-14', price: '€2,000', level: 'All levels' }
    ],
    accommodation: {
      types: [
        { type: 'cortijo', label: 'Traditional Cortijo', pricePerWeek: 500, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: true, notes: 'Stay in a traditional Andalusian cortijo with pool and garden'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-04-01',
      spotsLeft: 10, responseTime: '24h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 12, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Not available',
      medicalStaff: true, safeguarding: 'RFHE safeguarding compliance, all staff vetted',
      airportPickup: true, mealPlan: 'Full board with Andalusian cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Spanish'],
      emergencyProtocol: 'On-site first aid, Hospital de Jerez 15 minutes, equine vet on call'
    }
  },
  {
    id: 'stromsholm-swedish-riding',
    name: 'Strömsholm Swedish Riding Academy',
    country: 'Sweden', countryFlag: '🇸🇪',
    city: 'Strömsholm', lat: 59.52, lng: 16.27,
    website: 'https://www.stromsholmriding.se', contact: '+46 220 123 456', contactEmail: 'info@stromsholmriding.se',
    description: 'Sweden\'s national equestrian centre at Strömsholm Castle. Centuries of riding tradition combined with modern Scandinavian training methodology in a beautiful lakeside setting.',
    ageGroups: ['Junior', 'Adult'],
    level: 'All levels',
    individualLessons: true,
    boarding: true,
    beach: null,
    priceRange: { from: 900, to: 2500, unit: 'week', display: '€900 - €2,500/week' },
    socialMedia: { instagram: '@stromsholmriding', facebook: 'https://facebook.com/stromsholmriding', twitter: '@stromsholmride' },
    climate: 'stromsholm',
    facilities: 'Indoor school (60x20m), outdoor arenas, cross-country course, stables for 50 horses, horse walker, lunging ring, tack room, farrier, equine rehabilitation centre',
    courtSurfaces: ['Dressage arena', 'Show jumping course', 'Cross-country course', 'Indoor school'],
    programs: [
      { name: 'Swedish Riding Method', price: '€2,000/week', desc: 'Learn the renowned Swedish riding methodology at the national centre' },
      { name: 'Scandinavian Eventing Camp', price: '€1,500/week', desc: 'Cross-country and eventing training in the Swedish countryside' },
      { name: 'Young Rider Programme', price: '€1,000/week', desc: 'Development programme for aspiring young Swedish riders' }
    ],
    coaches: [
      { name: 'Erik Lindqvist', credential: 'SvRF Level 3 Instructor', background: 'Former Swedish national dressage team rider and national centre head instructor', atpWta: false, bestRanking: null, rankingNote: null, languages: ['English', 'Swedish'], instagram: null }
    ],
    photos: ['https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800'],
    upcomingCamps: [
      { name: 'Midsummer Riding Camp', startDate: '2025-06-23', endDate: '2025-06-30', price: '€1,500', level: 'Intermediate' }
    ],
    accommodation: {
      types: [
        { type: 'hotel', label: 'Strömsholm Castle Hotel', pricePerWeek: 550, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true, childrenAllowed: true, minStay: '1 week', shuttleToTraining: false, notes: 'Historic castle hotel overlooking the lake and training grounds'
    },
    availability: {
      status: 'open',
      nextIntake: '2025-06-01',
      spotsLeft: 12, responseTime: '48h', privateLessons: true, yearRound: true
    },
    juniorInfo: {
      minAge: 10, maxAge: 18, supervision: '24/7', guardianStay: true,
      schooling: 'Swedish school coordination available during term time',
      medicalStaff: true, safeguarding: 'SvRF safeguarding standards, all staff background-checked',
      airportPickup: true, mealPlan: 'Full board with Scandinavian cuisine',
      curfew: '21:00 weekdays, 22:00 weekends',
      roommatePairing: 'Age-based groups',
      languageSupport: ['English', 'Swedish'],
      emergencyProtocol: 'On-site first aid, Västerås hospital 25 minutes, equine vet on call'
    }
  }
];

const CLIMATE_DATA = {
  'kildare': { avgTemp: 10, sunshine: 1400, rainDays: 150, humidity: 80, windSpeed: 16, bestMonths: 'May-Sep', description: 'Mild Irish climate with frequent rain, green year-round' },
  'dublin': { avgTemp: 10, sunshine: 1400, rainDays: 145, humidity: 78, windSpeed: 18, bestMonths: 'May-Sep', description: 'Mild maritime climate with regular rainfall' },
  'gloucestershire': { avgTemp: 11, sunshine: 1500, rainDays: 130, humidity: 78, windSpeed: 14, bestMonths: 'May-Sep', description: 'Mild Cotswold climate with gentle rolling countryside' },
  'berkshire': { avgTemp: 11, sunshine: 1600, rainDays: 120, humidity: 76, windSpeed: 12, bestMonths: 'May-Sep', description: 'Southern English climate with relatively dry summers' },
  'yorkshire': { avgTemp: 9, sunshine: 1300, rainDays: 140, humidity: 82, windSpeed: 16, bestMonths: 'May-Sep', description: 'Northern English climate with cool moorland weather' },
  'warendorf': { avgTemp: 10, sunshine: 1500, rainDays: 120, humidity: 78, windSpeed: 14, bestMonths: 'May-Sep', description: 'North German continental climate with warm summers' },
  'aachen': { avgTemp: 10, sunshine: 1500, rainDays: 125, humidity: 76, windSpeed: 14, bestMonths: 'May-Sep', description: 'Western German climate with mild conditions' },
  'den-bosch': { avgTemp: 10, sunshine: 1600, rainDays: 120, humidity: 80, windSpeed: 16, bestMonths: 'May-Sep', description: 'Dutch maritime climate with mild temperatures' },
  'saumur': { avgTemp: 12, sunshine: 1800, rainDays: 110, humidity: 75, windSpeed: 12, bestMonths: 'Apr-Oct', description: 'Loire Valley climate with warm summers and mild winters' },
  'chantilly': { avgTemp: 11, sunshine: 1600, rainDays: 115, humidity: 78, windSpeed: 14, bestMonths: 'May-Sep', description: 'Northern French climate near Paris' },
  'jerez': { avgTemp: 18, sunshine: 3000, rainDays: 50, humidity: 60, windSpeed: 12, bestMonths: 'Mar-Nov', description: 'Hot Andalusian climate with warm dry summers' },
  'stromsholm': { avgTemp: 7, sunshine: 1800, rainDays: 110, humidity: 75, windSpeed: 12, bestMonths: 'May-Sep', description: 'Scandinavian climate with long summer days and cold winters' }
};

const NEWS_ITEMS = [
  { date: '2025-01-15', title: 'Paris 2024 Eventing Format Inspires New Training Approaches', summary: 'The shortened eventing format at the Paris Olympics leads European training centres to adapt their programmes, focusing on precision and consistency over stamina.' },
  { date: '2025-01-10', title: 'Record Entries at European Youth Equestrian Championships', summary: 'Youth riding academies across Europe report increased interest following record participation at the 2024 European Youth Championships.' },
  { date: '2025-01-05', title: 'New FEI Dressage Rules Emphasise Horse Welfare', summary: 'Updated FEI regulations focusing on horse welfare and happy athletes drive training centres to adopt modern, ethical training methods.' },
  { date: '2024-12-20', title: 'Warendorf Opens New Indoor Cross-Country Facility', summary: 'The German national riding centre unveils a state-of-the-art indoor cross-country training facility for year-round preparation.' },
  { date: '2024-12-15', title: 'Irish Sport Horse Breeding Programme Yields International Results', summary: 'Irish-bred sport horses continue to dominate at international level, boosting demand for training at Irish equestrian centres.' }
];

const COUNTRIES = ['Ireland', 'UK', 'Germany', 'Netherlands', 'France', 'Spain', 'Sweden'];
