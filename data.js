const SPORT_TYPE = 'tennis';

const ACADEMIES = [
  {
    id: "pzta",
    availability: { status: 'limited', nextIntake: '2025-10-01', spotsLeft: 5, responseTime: '48h', privateLessons: true, yearRound: true },
    name: "Player Zone Tennis Academy (PZTA)",
    country: "Serbia",
    countryFlag: "🇷🇸",
    city: "Belgrade",
    lat: 44.8176, lng: 20.4633,
    website: "https://playerzonetennis.rs",
    contact: "+381 60 43 19 966",
    contactEmail: "info@playerzonetennis.rs",
    individualLessons: true,
    boarding: false,
    level: "All levels",
    starred: true,
    airport: { name: "Belgrade Nikola Tesla Airport", code: "BEG", distance: "18 km", driveTime: "20 min" },
    beach: { distance: null, description: "Inland — nearest Adriatic coast ~400 km to Montenegro" },
    climate: "belgrade",
    priceRange: { from: 1100, to: 4500, unit: "month", display: "€1,100–€4,500/mo" },
    programs: [
      { name: "Basic", price: "€1,500/mo", desc: "12h tennis/week, conditioning, coach support" },
      { name: "Camp (Beginner/Intermediate)", price: "€1,100/mo", desc: "Training camp format" },
      { name: "Camp (Advanced)", price: "€1,430/mo", desc: "Advanced camp format" },
      { name: "Professional", price: "€2,350/mo", desc: "Intensive training, conditioning, recovery, tournament planning" },
      { name: "Pro+", price: "€3,500/mo", desc: "More conditioning, private lessons, personalized mentoring" },
      { name: "VIP", price: "€4,500/mo", desc: "Unlimited tennis, conditioning, massages, mental training" }
    ],
    coaches: [
      { name: "David Savić", credential: "GPTCA B (ATP Certified)", background: "Coached top-100 ATP & WTA players", atpWta: false, bestRanking: null, rankingNote: "Top-100 ATP/WTA coach", languages: ["Serbian", "English"], instagram: null },
      { name: "Ivan Đurđević", credential: "GPTCA B (ATP Certified)", background: "Experience with top WTA players & Serbian national team", atpWta: false, bestRanking: null, languages: ["Serbian", "English"], instagram: null },
      { name: "Milana Spremo", credential: "GPTCA B", background: "Former WTA player; coach of Serbian national team U18", atpWta: true, bestRanking: null, rankingNote: "Former WTA player", languages: ["Serbian", "English"], instagram: null },
      { name: "Marko Savić", credential: "ITF Level 2", background: "National coach of Serbia 10+ years", atpWta: false, bestRanking: null, languages: ["Serbian", "English"], instagram: null },
      { name: "Milenko Pisarić", credential: "C TSS, C GPTCA", background: "20+ years international experience (Serbia, USA)", atpWta: false, bestRanking: null, languages: ["Serbian", "English"], instagram: null }
    ],
    bestCoachRanking: null,
    facilities: "Multiple locations in Belgrade",
    courtSurfaces: ["Clay", "Hard"],
    notableAlumni: [],
    photos: [
      "https://picsum.photos/seed/pzta-1/800/500",
      "https://picsum.photos/seed/pzta-2/800/500",
      "https://picsum.photos/seed/pzta-3/800/500",
      "https://picsum.photos/seed/pzta-4/800/500"
    ],
    description: "Full-service academy with transparent pricing, conditioning, mental coaching, injury prevention, tournament travel, accommodation & logistics.",
    nearbyHotels: [
        { name: "Hotel Metropol Palace", stars: 5, distanceKm: 0.5, features: ["Restaurant", "Spa", "Bar", "Room Service"], pool: true, wifi: true, pricePerNight: "€120" },
        { name: "Hotel Moskva", stars: 4, distanceKm: 0.3, features: ["Restaurant", "Bar", "Room Service"], pool: false, wifi: true, pricePerNight: "€95" },
        { name: "Mama Shelter Belgrade", stars: 4, distanceKm: 1, features: ["Restaurant", "Bar", "Parking"], pool: false, wifi: true, pricePerNight: "€75" },
        { name: "Hotel Slavija", stars: 3, distanceKm: 0.8, features: ["Restaurant", "Parking"], pool: false, wifi: true, pricePerNight: "€45" },
        { name: "Zira Hotel", stars: 4, distanceKm: 1.2, features: ["Restaurant", "Gym", "Spa", "Parking"], pool: true, wifi: true, pricePerNight: "€85" }
      ],
    nearbyRestaurants: [
        { name: "Question Mark (Znak Pitanja)", cuisine: "Serbian Traditional", distanceKm: 0.5, priceRange: "€€", rating: 4.6, vegetarian: true, outdoor: true },
        { name: "Comunale Caffé e Cucina", cuisine: "Italian", distanceKm: 0.3, priceRange: "€€€", rating: 4.5, vegetarian: true, outdoor: true },
        { name: "Kalemegdanska Terasa", cuisine: "Serbian Fine Dining", distanceKm: 0.8, priceRange: "€€€€", rating: 4.7, vegetarian: true, outdoor: true },
        { name: "Burger House", cuisine: "American", distanceKm: 0.4, priceRange: "€", rating: 4.2, vegetarian: false, outdoor: false },
        { name: "Little Bay", cuisine: "International", distanceKm: 1, priceRange: "€€€", rating: 4.4, vegetarian: true, outdoor: false }
      ],
    nearbyMedical: [
        { name: "Clinical Center of Serbia (KCS)", type: "Hospital", distanceKm: 2, phone: "+381 11 361 5555", emergency: true },
        { name: "Atlas General Hospital", type: "Hospital", distanceKm: 3.5, phone: "+381 11 381 2222", emergency: true },
        { name: "Fiziomedika Sports Physiotherapy", type: "Physiotherapy", distanceKm: 1.5, phone: "+381 11 344 0055", emergency: false }
      ],
    costOfLiving: { rent1Bed: "€350", meal: "€6", monthlyFood: "€250", transport: "€30", currency: "RSD", summary: "Belgrade is very affordable by European standards" },
    scholarships: { available: true, details: "Merit-based scholarships for top junior players. Contact academy for application details and eligibility criteria." },
    visaInfo: { schengen: false, eu: false, visaFreeCountries: "EU/EEA citizens, USA, Canada, Australia, UK — visa-free up to 90 days", notes: "Non-EU citizens may need a tourist visa for stays over 90 days. Student visa available for long-term programs." },
    airportTransfers: [
        { mode: "Taxi", duration: "20 min", cost: "€15–20", notes: "Available at airport, use licensed taxis" },
        { mode: "Bus", duration: "45 min", cost: "€1.50", notes: "Line 72 airport bus to city center" },
        { mode: "Private Transfer", duration: "20 min", cost: "€25–35", notes: "Pre-book online" }
      ],
    nearbyTournaments: [
        { name: "Belgrade Open", level: "ATP 250", surface: "Clay", month: "April", venue: "Novak Tennis Center" },
        { name: "Serbia Open Junior", level: "ITF Junior", surface: "Clay", month: "June", venue: "TC Novak" },
        { name: "Serbian National Championships", level: "National", surface: "Clay", month: "September", venue: "TC Belgrade" }
      ],
    upcomingCamps: [
      { name: "Summer Intensive Camp", startDate: "2025-07-14", endDate: "2025-07-25", price: "€1,200", level: "Advanced" },
      { name: "Spring Junior Development", startDate: "2025-04-07", endDate: "2025-04-18", price: "€950", level: "Intermediate" },
      { name: "Autumn All-Levels Clinic", startDate: "2025-10-06", endDate: "2025-10-17", price: "€800", level: "All Levels" }
    ],
    accommodation: {
      types: [
        { type: 'private', label: 'Private Room', pricePerWeek: 200, maxOccupancy: 1, bathType: 'ensuite', mealsIncluded: true },
        { type: 'twin', label: 'Twin Shared Room', pricePerWeek: 130, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'triple', label: 'Triple Room', pricePerWeek: 100, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true },
        { type: 'dorm', label: 'Dormitory (4–6 beds)', pricePerWeek: 65, maxOccupancy: 6, bathType: 'shared', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: 1,
      shuttleToTraining: true,
      notes: 'On-site dormitory available for junior players. Meals served at the academy canteen.'
    },
    videoTour: null,
    juniorInfo: {
      minAge: 6,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'partner-school',
      medicalStaff: true,
      safeguarding: true,
      airportPickup: true,
      mealPlan: 'full-board',
      curfew: '22:00',
      roommatePairing: 'age-gender',
      languageSupport: ['English', 'Serbian'],
      emergencyProtocol: true
    }
  },
  {
    id: "tipsarevic",
    availability: { status: 'open', nextIntake: '2025-08-01', spotsLeft: 9, responseTime: '3-5 days', privateLessons: true, yearRound: false },
    name: "Tipsarević Tennis Academy",
    country: "Serbia",
    countryFlag: "🇷🇸",
    city: "Belgrade",
    lat: 44.8176, lng: 20.4633,
    website: "https://www.tipsarevictennisacademy.com",
    contactEmail: "info@tipsarevictennisacademy.com",
    individualLessons: true,
    boarding: true,
    level: "Elite",
    starred: false,
    airport: { name: "Belgrade Nikola Tesla Airport", code: "BEG", distance: "18 km", driveTime: "20 min" },
    beach: { distance: null, description: "Inland — nearest Adriatic coast ~400 km to Montenegro" },
    climate: "belgrade",
    priceRange: { from: null, to: null, unit: "month", display: "Contact for pricing" },
    programs: [
      { name: "Elite Training", price: "Contact", desc: "Personalized coaching, global tournament exposure" },
      { name: "Tennis + Education", price: "Contact", desc: "Flexible schooling for juniors (ages 13+)" },
      { name: "Weekly Camps", price: "Contact", desc: "Intensive camp format" }
    ],
    coaches: [
      { name: "Janko Tipsarević", credential: "Former ATP Player", background: "ATP World No. 8 (2012), ATP Finals participant, Grand Slam QF", atpWta: true, bestRanking: 8, rankingNote: "ATP #8", languages: ["Serbian", "English", "German"], instagram: "jabortennis" }
    ],
    bestCoachRanking: 8,
    facilities: "Clay courts, hard court (US Open surface), fitness center, recovery facilities, on-site boarding accommodation",
    courtSurfaces: ["Clay", "Hard"],
    notableAlumni: ["Laslo Djere", "Yuichi Sugita", "Dušan Lajović"],
    photos: [
      "https://picsum.photos/seed/tipsarevic-1/800/500",
      "https://picsum.photos/seed/tipsarevic-2/800/500",
      "https://picsum.photos/seed/tipsarevic-3/800/500",
      "https://picsum.photos/seed/tipsarevic-4/800/500",
      "https://picsum.photos/seed/tipsarevic-5/800/500"
    ],
    description: "Only full-boarding tennis academy in Serbia. Founded by former ATP World No. 8 Janko Tipsarević.",
    nearbyHotels: [
        { name: "Hotel Metropol Palace", stars: 5, distanceKm: 0.5, features: ["Restaurant", "Spa", "Bar", "Room Service"], pool: true, wifi: true, pricePerNight: "€120" },
        { name: "Hotel Moskva", stars: 4, distanceKm: 0.3, features: ["Restaurant", "Bar", "Room Service"], pool: false, wifi: true, pricePerNight: "€95" },
        { name: "Mama Shelter Belgrade", stars: 4, distanceKm: 1, features: ["Restaurant", "Bar", "Parking"], pool: false, wifi: true, pricePerNight: "€75" },
        { name: "Hotel Slavija", stars: 3, distanceKm: 0.8, features: ["Restaurant", "Parking"], pool: false, wifi: true, pricePerNight: "€45" },
        { name: "Zira Hotel", stars: 4, distanceKm: 1.2, features: ["Restaurant", "Gym", "Spa", "Parking"], pool: true, wifi: true, pricePerNight: "€85" }
      ],
    nearbyRestaurants: [
        { name: "Question Mark (Znak Pitanja)", cuisine: "Serbian Traditional", distanceKm: 0.5, priceRange: "€€", rating: 4.6, vegetarian: true, outdoor: true },
        { name: "Comunale Caffé e Cucina", cuisine: "Italian", distanceKm: 0.3, priceRange: "€€€", rating: 4.5, vegetarian: true, outdoor: true },
        { name: "Kalemegdanska Terasa", cuisine: "Serbian Fine Dining", distanceKm: 0.8, priceRange: "€€€€", rating: 4.7, vegetarian: true, outdoor: true },
        { name: "Burger House", cuisine: "American", distanceKm: 0.4, priceRange: "€", rating: 4.2, vegetarian: false, outdoor: false },
        { name: "Little Bay", cuisine: "International", distanceKm: 1, priceRange: "€€€", rating: 4.4, vegetarian: true, outdoor: false }
      ],
    nearbyMedical: [
        { name: "Clinical Center of Serbia (KCS)", type: "Hospital", distanceKm: 2, phone: "+381 11 361 5555", emergency: true },
        { name: "Atlas General Hospital", type: "Hospital", distanceKm: 3.5, phone: "+381 11 381 2222", emergency: true },
        { name: "Fiziomedika Sports Physiotherapy", type: "Physiotherapy", distanceKm: 1.5, phone: "+381 11 344 0055", emergency: false }
      ],
    costOfLiving: { rent1Bed: "€350", meal: "€6", monthlyFood: "€250", transport: "€30", currency: "RSD", summary: "Belgrade is very affordable by European standards" },
    scholarships: { available: true, details: "Scholarships available for exceptional junior talent. Contact Tipsarević Tennis Academy directly for evaluation." },
    visaInfo: { schengen: false, eu: false, visaFreeCountries: "EU/EEA citizens, USA, Canada, Australia, UK — visa-free up to 90 days", notes: "Non-EU citizens may need a tourist visa for stays over 90 days. Student visa available for long-term programs." },
    airportTransfers: [
        { mode: "Taxi", duration: "20 min", cost: "€15–20", notes: "Available at airport, use licensed taxis" },
        { mode: "Bus", duration: "45 min", cost: "€1.50", notes: "Line 72 airport bus to city center" },
        { mode: "Private Transfer", duration: "20 min", cost: "€25–35", notes: "Pre-book online" }
      ],
    nearbyTournaments: [
        { name: "Belgrade Open", level: "ATP 250", surface: "Clay", month: "April", venue: "Novak Tennis Center" },
        { name: "Serbia Open Junior", level: "ITF Junior", surface: "Clay", month: "June", venue: "TC Novak" },
        { name: "Serbian National Championships", level: "National", surface: "Clay", month: "September", venue: "TC Belgrade" }
      ],
    accommodation: {
      types: [
        { type: 'private', label: 'Private Room', pricePerWeek: 220, maxOccupancy: 1, bathType: 'ensuite', mealsIncluded: true },
        { type: 'twin', label: 'Twin Shared Room', pricePerWeek: 150, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'triple', label: 'Triple Room', pricePerWeek: 120, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true },
        { type: 'dorm', label: 'Dormitory (4–6 beds)', pricePerWeek: 75, maxOccupancy: 6, bathType: 'shared', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: 1,
      shuttleToTraining: false,
      notes: 'Academy residence in central Belgrade. Walking distance to training courts and city amenities.'
    },
    videoTour: "https://www.youtube.com/watch?v=YqzGMoQE7TE",
    juniorInfo: {
      minAge: 6,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'tutoring',
      medicalStaff: true,
      safeguarding: true,
      airportPickup: true,
      mealPlan: 'full-board',
      curfew: '21:00',
      roommatePairing: 'age-gender',
      languageSupport: ['English', 'Serbian'],
      emergencyProtocol: true
    }
  },
  {
    id: "vranes",
    availability: { status: 'open', nextIntake: '2025-06-01', spotsLeft: 14, responseTime: '24h', privateLessons: true, yearRound: true },
    name: "Dejan Vraneš Tennis Academy",
    country: "Serbia",
    countryFlag: "🇷🇸",
    city: "Belgrade",
    lat: 44.8176, lng: 20.4633,
    website: "https://vranesacademy.com",
    contactEmail: "info@vranesacademy.com",
    individualLessons: true,
    boarding: false,
    level: "Elite",
    starred: false,
    airport: { name: "Belgrade Nikola Tesla Airport", code: "BEG", distance: "18 km", driveTime: "20 min" },
    beach: { distance: null, description: "Inland — nearest Adriatic coast ~400 km to Montenegro" },
    climate: "belgrade",
    priceRange: { from: null, to: null, unit: "month", display: "Contact for pricing" },
    programs: [
      { name: "Elite Development", price: "Contact", desc: "High-performance, video analysis, sports technology" },
      { name: "Junior Programs", price: "Contact", desc: "Holistic approach: nutrition, mental conditioning, recovery" }
    ],
    coaches: [
      { name: "Dejan Vraneš", credential: "Former Fed Cup Captain", background: "Coached Novak Djokovic (early dev), Ana Ivanovic (WTA #1), Olga Danilovic; Serbian Men's Olympic Team coach 2008 & 2012", atpWta: false, bestRanking: null, rankingNote: "Coached ATP #1 & WTA #1", languages: ["Serbian", "English"], instagram: null }
    ],
    bestCoachRanking: null,
    coachedTopPlayer: 1,
    facilities: "Belgrade-based courts",
    courtSurfaces: ["Clay", "Hard"],
    notableAlumni: ["Novak Djokovic (early)", "Ana Ivanovic", "Olga Danilovic"],
    photos: [
      "https://picsum.photos/seed/vranes-1/800/500",
      "https://picsum.photos/seed/vranes-2/800/500",
      "https://picsum.photos/seed/vranes-3/800/500"
    ],
    description: "Headed by former Serbian Fed Cup captain who coached Novak Djokovic and Ana Ivanovic.",
    nearbyHotels: [
        { name: "Hotel Metropol Palace", stars: 5, distanceKm: 0.5, features: ["Restaurant", "Spa", "Bar", "Room Service"], pool: true, wifi: true, pricePerNight: "€120" },
        { name: "Hotel Moskva", stars: 4, distanceKm: 0.3, features: ["Restaurant", "Bar", "Room Service"], pool: false, wifi: true, pricePerNight: "€95" },
        { name: "Mama Shelter Belgrade", stars: 4, distanceKm: 1, features: ["Restaurant", "Bar", "Parking"], pool: false, wifi: true, pricePerNight: "€75" },
        { name: "Hotel Slavija", stars: 3, distanceKm: 0.8, features: ["Restaurant", "Parking"], pool: false, wifi: true, pricePerNight: "€45" },
        { name: "Zira Hotel", stars: 4, distanceKm: 1.2, features: ["Restaurant", "Gym", "Spa", "Parking"], pool: true, wifi: true, pricePerNight: "€85" }
      ],
    nearbyRestaurants: [
        { name: "Question Mark (Znak Pitanja)", cuisine: "Serbian Traditional", distanceKm: 0.5, priceRange: "€€", rating: 4.6, vegetarian: true, outdoor: true },
        { name: "Comunale Caffé e Cucina", cuisine: "Italian", distanceKm: 0.3, priceRange: "€€€", rating: 4.5, vegetarian: true, outdoor: true },
        { name: "Kalemegdanska Terasa", cuisine: "Serbian Fine Dining", distanceKm: 0.8, priceRange: "€€€€", rating: 4.7, vegetarian: true, outdoor: true },
        { name: "Burger House", cuisine: "American", distanceKm: 0.4, priceRange: "€", rating: 4.2, vegetarian: false, outdoor: false },
        { name: "Little Bay", cuisine: "International", distanceKm: 1, priceRange: "€€€", rating: 4.4, vegetarian: true, outdoor: false }
      ],
    nearbyMedical: [
        { name: "Clinical Center of Serbia (KCS)", type: "Hospital", distanceKm: 2, phone: "+381 11 361 5555", emergency: true },
        { name: "Atlas General Hospital", type: "Hospital", distanceKm: 3.5, phone: "+381 11 381 2222", emergency: true },
        { name: "Fiziomedika Sports Physiotherapy", type: "Physiotherapy", distanceKm: 1.5, phone: "+381 11 344 0055", emergency: false }
      ],
    costOfLiving: { rent1Bed: "€350", meal: "€6", monthlyFood: "€250", transport: "€30", currency: "RSD", summary: "Belgrade is very affordable by European standards" },
    scholarships: { available: false, details: "No formal scholarship program currently. Contact academy for group discount options." },
    visaInfo: { schengen: false, eu: false, visaFreeCountries: "EU/EEA citizens, USA, Canada, Australia, UK — visa-free up to 90 days", notes: "Non-EU citizens may need a tourist visa for stays over 90 days. Student visa available for long-term programs." },
    airportTransfers: [
        { mode: "Taxi", duration: "20 min", cost: "€15–20", notes: "Available at airport, use licensed taxis" },
        { mode: "Bus", duration: "45 min", cost: "€1.50", notes: "Line 72 airport bus to city center" },
        { mode: "Private Transfer", duration: "20 min", cost: "€25–35", notes: "Pre-book online" }
      ],
    nearbyTournaments: [
        { name: "Belgrade Open", level: "ATP 250", surface: "Clay", month: "April", venue: "Novak Tennis Center" },
        { name: "Serbia Open Junior", level: "ITF Junior", surface: "Clay", month: "June", venue: "TC Novak" },
        { name: "Serbian National Championships", level: "National", surface: "Clay", month: "September", venue: "TC Belgrade" }
      ],
    videoTour: null,
    juniorInfo: {
      minAge: 14,
      maxAge: 18,
      supervision: 'training-only',
      guardianStay: true,
      schooling: 'online-support',
      medicalStaff: false,
      safeguarding: true,
      airportPickup: true,
      mealPlan: 'flexible',
      curfew: '23:00',
      roommatePairing: 'age-only',
      languageSupport: ['English', 'Serbian'],
      emergencyProtocol: false
    }
  },
  {
    id: "premium-tennis",
    availability: { status: 'open', nextIntake: '2025-06-01', spotsLeft: 20, responseTime: '24h', privateLessons: true, yearRound: true },
    name: "Premium Tennis Academy",
    country: "Serbia",
    countryFlag: "🇷🇸",
    city: "Belgrade",
    lat: 44.8176, lng: 20.4633,
    website: "https://premiumtennis.net",
    contactEmail: "info@premiumtennis.net",
    individualLessons: true,
    boarding: false,
    level: "Pro",
    starred: false,
    airport: { name: "Belgrade Nikola Tesla Airport", code: "BEG", distance: "18 km", driveTime: "20 min" },
    beach: { distance: null, description: "Inland — nearest Adriatic coast ~400 km to Montenegro" },
    climate: "belgrade",
    priceRange: { from: null, to: null, unit: "month", display: "Contact for pricing" },
    programs: [
      { name: "Personalized Training", price: "Contact", desc: "Sparring, fitness, career planning, mental training" }
    ],
    coaches: [
      { name: "Ognjen Jovanovic", credential: "ATP Top-50 Coach", background: "Co-head coach for Miomir Kecmanovic (ATP ~30)", atpWta: false, bestRanking: null, rankingNote: "ATP top-50 coach", languages: ["Serbian", "English"], instagram: null }
    ],
    bestCoachRanking: null,
    coachedTopPlayer: 30,
    facilities: "Professional courts, accommodation for international players",
    courtSurfaces: ["Clay", "Hard"],
    notableAlumni: ["Miomir Kecmanovic"],
    photos: [
      "https://picsum.photos/seed/premium-tennis-1/800/500",
      "https://picsum.photos/seed/premium-tennis-2/800/500",
      "https://picsum.photos/seed/premium-tennis-3/800/500",
      "https://picsum.photos/seed/premium-tennis-4/800/500"
    ],
    description: "Headed by ATP top-50 coach, co-head coach for Miomir Kecmanovic.",
    nearbyHotels: [
        { name: "Hotel Metropol Palace", stars: 5, distanceKm: 0.5, features: ["Restaurant", "Spa", "Bar", "Room Service"], pool: true, wifi: true, pricePerNight: "€120" },
        { name: "Hotel Moskva", stars: 4, distanceKm: 0.3, features: ["Restaurant", "Bar", "Room Service"], pool: false, wifi: true, pricePerNight: "€95" },
        { name: "Mama Shelter Belgrade", stars: 4, distanceKm: 1, features: ["Restaurant", "Bar", "Parking"], pool: false, wifi: true, pricePerNight: "€75" },
        { name: "Hotel Slavija", stars: 3, distanceKm: 0.8, features: ["Restaurant", "Parking"], pool: false, wifi: true, pricePerNight: "€45" },
        { name: "Zira Hotel", stars: 4, distanceKm: 1.2, features: ["Restaurant", "Gym", "Spa", "Parking"], pool: true, wifi: true, pricePerNight: "€85" }
      ],
    nearbyRestaurants: [
        { name: "Question Mark (Znak Pitanja)", cuisine: "Serbian Traditional", distanceKm: 0.5, priceRange: "€€", rating: 4.6, vegetarian: true, outdoor: true },
        { name: "Comunale Caffé e Cucina", cuisine: "Italian", distanceKm: 0.3, priceRange: "€€€", rating: 4.5, vegetarian: true, outdoor: true },
        { name: "Kalemegdanska Terasa", cuisine: "Serbian Fine Dining", distanceKm: 0.8, priceRange: "€€€€", rating: 4.7, vegetarian: true, outdoor: true },
        { name: "Burger House", cuisine: "American", distanceKm: 0.4, priceRange: "€", rating: 4.2, vegetarian: false, outdoor: false },
        { name: "Little Bay", cuisine: "International", distanceKm: 1, priceRange: "€€€", rating: 4.4, vegetarian: true, outdoor: false }
      ],
    nearbyMedical: [
        { name: "Clinical Center of Serbia (KCS)", type: "Hospital", distanceKm: 2, phone: "+381 11 361 5555", emergency: true },
        { name: "Atlas General Hospital", type: "Hospital", distanceKm: 3.5, phone: "+381 11 381 2222", emergency: true },
        { name: "Fiziomedika Sports Physiotherapy", type: "Physiotherapy", distanceKm: 1.5, phone: "+381 11 344 0055", emergency: false }
      ],
    costOfLiving: { rent1Bed: "€350", meal: "€6", monthlyFood: "€250", transport: "€30", currency: "RSD", summary: "Belgrade is very affordable by European standards" },
    scholarships: { available: false, details: "No formal scholarship program currently. Flexible pricing available for long-term commitments." },
    visaInfo: { schengen: false, eu: false, visaFreeCountries: "EU/EEA citizens, USA, Canada, Australia, UK — visa-free up to 90 days", notes: "Non-EU citizens may need a tourist visa for stays over 90 days. Student visa available for long-term programs." },
    airportTransfers: [
        { mode: "Taxi", duration: "20 min", cost: "€15–20", notes: "Available at airport, use licensed taxis" },
        { mode: "Bus", duration: "45 min", cost: "€1.50", notes: "Line 72 airport bus to city center" },
        { mode: "Private Transfer", duration: "20 min", cost: "€25–35", notes: "Pre-book online" }
      ],
    nearbyTournaments: [
        { name: "Belgrade Open", level: "ATP 250", surface: "Clay", month: "April", venue: "Novak Tennis Center" },
        { name: "Serbia Open Junior", level: "ITF Junior", surface: "Clay", month: "June", venue: "TC Novak" },
        { name: "Serbian National Championships", level: "National", surface: "Clay", month: "September", venue: "TC Belgrade" }
      ],
    videoTour: null,
    juniorInfo: {
      minAge: 11,
      maxAge: 18,
      supervision: 'daytime',
      guardianStay: true,
      schooling: 'tutoring',
      medicalStaff: true,
      safeguarding: true,
      airportPickup: false,
      mealPlan: 'flexible',
      curfew: '23:00',
      roommatePairing: 'age-gender',
      languageSupport: ['English', 'Serbian'],
      emergencyProtocol: true
    }
  },
  {
    id: "academy-ada",
    availability: { status: 'open', nextIntake: '2025-09-01', spotsLeft: 18, responseTime: '24h', privateLessons: false, yearRound: true },
    name: "Tennis Academy ADA (Bogdan Obradovic)",
    country: "Serbia",
    countryFlag: "🇷🇸",
    city: "Belgrade",
    lat: 44.8176, lng: 20.4633,
    website: "https://www.bogdanobradovic-tennisacademy.com",
    contactEmail: "info@bogdanobradovic-tennisacademy.com",
    individualLessons: true,
    boarding: false,
    level: "Junior/All",
    starred: false,
    airport: { name: "Belgrade Nikola Tesla Airport", code: "BEG", distance: "18 km", driveTime: "20 min" },
    beach: { distance: null, description: "Inland — nearest Adriatic coast ~400 km to Montenegro" },
    climate: "belgrade",
    priceRange: { from: null, to: null, unit: "month", display: "Contact for pricing" },
    programs: [
      { name: "Junior Tennis School", price: "Contact", desc: "Ages 6+, clay courts" }
    ],
    coaches: [
      { name: "Bogdan Obradovic", credential: "Former Djokovic Coach", background: "Former coach of Novak Djokovic (early years)", atpWta: false, bestRanking: null, rankingNote: "Coached ATP #1", languages: ["Serbian", "English"], instagram: null }
    ],
    bestCoachRanking: null,
    coachedTopPlayer: 1,
    facilities: "7 courts (5 clay + additional surfaces), Ada Ciganlija",
    courtSurfaces: ["Clay", "Hard", "Indoor Hard"],
    notableAlumni: ["Novak Djokovic (early)"],
    photos: [
      "https://picsum.photos/seed/academy-ada-1/800/500",
      "https://picsum.photos/seed/academy-ada-2/800/500",
      "https://picsum.photos/seed/academy-ada-3/800/500"
    ],
    description: "Founded by Bogdan Obradovic, former coach of Novak Djokovic's early years.",
    nearbyHotels: [
        { name: "Hotel Metropol Palace", stars: 5, distanceKm: 0.5, features: ["Restaurant", "Spa", "Bar", "Room Service"], pool: true, wifi: true, pricePerNight: "€120" },
        { name: "Hotel Moskva", stars: 4, distanceKm: 0.3, features: ["Restaurant", "Bar", "Room Service"], pool: false, wifi: true, pricePerNight: "€95" },
        { name: "Mama Shelter Belgrade", stars: 4, distanceKm: 1, features: ["Restaurant", "Bar", "Parking"], pool: false, wifi: true, pricePerNight: "€75" },
        { name: "Hotel Slavija", stars: 3, distanceKm: 0.8, features: ["Restaurant", "Parking"], pool: false, wifi: true, pricePerNight: "€45" },
        { name: "Zira Hotel", stars: 4, distanceKm: 1.2, features: ["Restaurant", "Gym", "Spa", "Parking"], pool: true, wifi: true, pricePerNight: "€85" }
      ],
    nearbyRestaurants: [
        { name: "Question Mark (Znak Pitanja)", cuisine: "Serbian Traditional", distanceKm: 0.5, priceRange: "€€", rating: 4.6, vegetarian: true, outdoor: true },
        { name: "Comunale Caffé e Cucina", cuisine: "Italian", distanceKm: 0.3, priceRange: "€€€", rating: 4.5, vegetarian: true, outdoor: true },
        { name: "Kalemegdanska Terasa", cuisine: "Serbian Fine Dining", distanceKm: 0.8, priceRange: "€€€€", rating: 4.7, vegetarian: true, outdoor: true },
        { name: "Burger House", cuisine: "American", distanceKm: 0.4, priceRange: "€", rating: 4.2, vegetarian: false, outdoor: false },
        { name: "Little Bay", cuisine: "International", distanceKm: 1, priceRange: "€€€", rating: 4.4, vegetarian: true, outdoor: false }
      ],
    nearbyMedical: [
        { name: "Clinical Center of Serbia (KCS)", type: "Hospital", distanceKm: 2, phone: "+381 11 361 5555", emergency: true },
        { name: "Atlas General Hospital", type: "Hospital", distanceKm: 3.5, phone: "+381 11 381 2222", emergency: true },
        { name: "Fiziomedika Sports Physiotherapy", type: "Physiotherapy", distanceKm: 1.5, phone: "+381 11 344 0055", emergency: false }
      ],
    costOfLiving: { rent1Bed: "€350", meal: "€6", monthlyFood: "€250", transport: "€30", currency: "RSD", summary: "Belgrade is very affordable by European standards" },
    scholarships: { available: false, details: "No formal scholarship program currently. Contact for junior development pricing." },
    visaInfo: { schengen: false, eu: false, visaFreeCountries: "EU/EEA citizens, USA, Canada, Australia, UK — visa-free up to 90 days", notes: "Non-EU citizens may need a tourist visa for stays over 90 days. Student visa available for long-term programs." },
    airportTransfers: [
        { mode: "Taxi", duration: "20 min", cost: "€15–20", notes: "Available at airport, use licensed taxis" },
        { mode: "Bus", duration: "45 min", cost: "€1.50", notes: "Line 72 airport bus to city center" },
        { mode: "Private Transfer", duration: "20 min", cost: "€25–35", notes: "Pre-book online" }
      ],
    nearbyTournaments: [
        { name: "Belgrade Open", level: "ATP 250", surface: "Clay", month: "April", venue: "Novak Tennis Center" },
        { name: "Serbia Open Junior", level: "ITF Junior", surface: "Clay", month: "June", venue: "TC Novak" },
        { name: "Serbian National Championships", level: "National", surface: "Clay", month: "September", venue: "TC Belgrade" }
      ],
    videoTour: null,
    juniorInfo: {
      minAge: 7,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'tutoring',
      medicalStaff: true,
      safeguarding: true,
      airportPickup: true,
      mealPlan: 'full-board',
      curfew: '21:00',
      roommatePairing: 'age-gender',
      languageSupport: ['English', 'Serbian'],
      emergencyProtocol: true
    }
  },
  {
    id: "supreme-tennis",
    availability: { status: 'limited', nextIntake: '2025-10-01', spotsLeft: 3, responseTime: '48h', privateLessons: true, yearRound: true },
    name: "Supreme Tennis Academy",
    country: "Serbia",
    countryFlag: "🇷🇸",
    city: "Belgrade",
    lat: 44.8176, lng: 20.4633,
    website: "https://tennisacademysupreme.com/en/",
    contactEmail: "info@tennisacademysupreme.com",
    individualLessons: true,
    boarding: false,
    level: "Pro",
    starred: false,
    airport: { name: "Belgrade Nikola Tesla Airport", code: "BEG", distance: "18 km", driveTime: "20 min" },
    beach: { distance: null, description: "Inland — nearest Adriatic coast ~400 km to Montenegro" },
    climate: "belgrade",
    priceRange: { from: null, to: null, unit: "month", display: "Contact for pricing" },
    programs: [
      { name: "Individual Training", price: "Contact", desc: "Personalized program" },
      { name: "Tournament Accompaniment", price: "Contact", desc: "TE, ITF events" }
    ],
    coaches: [],
    bestCoachRanking: null,
    facilities: "Tennis base with on-site apartments",
    courtSurfaces: ["Clay", "Hard"],
    notableAlumni: ["Aleksandra Krunić"],
    description: "Individual training, tournament accompaniment, on-site apartment accommodation.",
    nearbyHotels: [
        { name: "Hotel Metropol Palace", stars: 5, distanceKm: 0.5, features: ["Restaurant", "Spa", "Bar", "Room Service"], pool: true, wifi: true, pricePerNight: "€120" },
        { name: "Hotel Moskva", stars: 4, distanceKm: 0.3, features: ["Restaurant", "Bar", "Room Service"], pool: false, wifi: true, pricePerNight: "€95" },
        { name: "Mama Shelter Belgrade", stars: 4, distanceKm: 1, features: ["Restaurant", "Bar", "Parking"], pool: false, wifi: true, pricePerNight: "€75" },
        { name: "Hotel Slavija", stars: 3, distanceKm: 0.8, features: ["Restaurant", "Parking"], pool: false, wifi: true, pricePerNight: "€45" },
        { name: "Zira Hotel", stars: 4, distanceKm: 1.2, features: ["Restaurant", "Gym", "Spa", "Parking"], pool: true, wifi: true, pricePerNight: "€85" }
      ],
    nearbyRestaurants: [
        { name: "Question Mark (Znak Pitanja)", cuisine: "Serbian Traditional", distanceKm: 0.5, priceRange: "€€", rating: 4.6, vegetarian: true, outdoor: true },
        { name: "Comunale Caffé e Cucina", cuisine: "Italian", distanceKm: 0.3, priceRange: "€€€", rating: 4.5, vegetarian: true, outdoor: true },
        { name: "Kalemegdanska Terasa", cuisine: "Serbian Fine Dining", distanceKm: 0.8, priceRange: "€€€€", rating: 4.7, vegetarian: true, outdoor: true },
        { name: "Burger House", cuisine: "American", distanceKm: 0.4, priceRange: "€", rating: 4.2, vegetarian: false, outdoor: false },
        { name: "Little Bay", cuisine: "International", distanceKm: 1, priceRange: "€€€", rating: 4.4, vegetarian: true, outdoor: false }
      ],
    nearbyMedical: [
        { name: "Clinical Center of Serbia (KCS)", type: "Hospital", distanceKm: 2, phone: "+381 11 361 5555", emergency: true },
        { name: "Atlas General Hospital", type: "Hospital", distanceKm: 3.5, phone: "+381 11 381 2222", emergency: true },
        { name: "Fiziomedika Sports Physiotherapy", type: "Physiotherapy", distanceKm: 1.5, phone: "+381 11 344 0055", emergency: false }
      ],
    costOfLiving: { rent1Bed: "€350", meal: "€6", monthlyFood: "€250", transport: "€30", currency: "RSD", summary: "Belgrade is very affordable by European standards" },
    scholarships: { available: false, details: "No formal scholarship program currently. Contact for package deals." },
    visaInfo: { schengen: false, eu: false, visaFreeCountries: "EU/EEA citizens, USA, Canada, Australia, UK — visa-free up to 90 days", notes: "Non-EU citizens may need a tourist visa for stays over 90 days. Student visa available for long-term programs." },
    airportTransfers: [
        { mode: "Taxi", duration: "20 min", cost: "€15–20", notes: "Available at airport, use licensed taxis" },
        { mode: "Bus", duration: "45 min", cost: "€1.50", notes: "Line 72 airport bus to city center" },
        { mode: "Private Transfer", duration: "20 min", cost: "€25–35", notes: "Pre-book online" }
      ],
    nearbyTournaments: [
        { name: "Belgrade Open", level: "ATP 250", surface: "Clay", month: "April", venue: "Novak Tennis Center" },
        { name: "Serbia Open Junior", level: "ITF Junior", surface: "Clay", month: "June", venue: "TC Novak" },
        { name: "Serbian National Championships", level: "National", surface: "Clay", month: "September", venue: "TC Belgrade" }
      ],
    videoTour: null,
    juniorInfo: {
      minAge: 18,
      maxAge: null,
      supervision: 'none',
      guardianStay: false,
      schooling: 'none',
      medicalStaff: false,
      safeguarding: false,
      airportPickup: false,
      mealPlan: 'self-catering',
      curfew: null,
      roommatePairing: 'self-select',
      languageSupport: ['English'],
      emergencyProtocol: false
    }
  },
  {
    id: "serbia-tennis-academy",
    availability: { status: 'open', nextIntake: '2025-06-01', spotsLeft: 8, responseTime: '24h', privateLessons: true, yearRound: true },
    name: "Serbia Tennis Academy (STA)",
    country: "Serbia",
    countryFlag: "🇷🇸",
    city: "Belgrade",
    lat: 44.8176, lng: 20.4633,
    website: "https://serbiatennisacademy.com",
    contactEmail: "info@serbiatennisacademy.com",
    individualLessons: true,
    boarding: false,
    level: "All levels",
    starred: false,
    airport: { name: "Belgrade Nikola Tesla Airport", code: "BEG", distance: "18 km", driveTime: "20 min" },
    beach: { distance: null, description: "Inland — nearest Adriatic coast ~400 km to Montenegro" },
    climate: "belgrade",
    priceRange: { from: null, to: null, unit: "month", display: "Contact for pricing" },
    programs: [
      { name: "Intensive Program", price: "Contact", desc: "Full intensive training" },
      { name: "Semi-Intensive", price: "Contact", desc: "Flexible schedule" },
      { name: "Tennis Camps", price: "Contact", desc: "Seasonal camps" }
    ],
    coaches: [],
    bestCoachRanking: null,
    facilities: "Up to 15 clay courts + 1 indoor hard court",
    courtSurfaces: ["Clay", "Indoor Hard"],
    notableAlumni: [],
    description: "Intensive & semi-intensive programs. International coaching experience (China, Switzerland, Germany, USA).",
    nearbyHotels: [
        { name: "Hotel Metropol Palace", stars: 5, distanceKm: 0.5, features: ["Restaurant", "Spa", "Bar", "Room Service"], pool: true, wifi: true, pricePerNight: "€120" },
        { name: "Hotel Moskva", stars: 4, distanceKm: 0.3, features: ["Restaurant", "Bar", "Room Service"], pool: false, wifi: true, pricePerNight: "€95" },
        { name: "Mama Shelter Belgrade", stars: 4, distanceKm: 1, features: ["Restaurant", "Bar", "Parking"], pool: false, wifi: true, pricePerNight: "€75" },
        { name: "Hotel Slavija", stars: 3, distanceKm: 0.8, features: ["Restaurant", "Parking"], pool: false, wifi: true, pricePerNight: "€45" },
        { name: "Zira Hotel", stars: 4, distanceKm: 1.2, features: ["Restaurant", "Gym", "Spa", "Parking"], pool: true, wifi: true, pricePerNight: "€85" }
      ],
    nearbyRestaurants: [
        { name: "Question Mark (Znak Pitanja)", cuisine: "Serbian Traditional", distanceKm: 0.5, priceRange: "€€", rating: 4.6, vegetarian: true, outdoor: true },
        { name: "Comunale Caffé e Cucina", cuisine: "Italian", distanceKm: 0.3, priceRange: "€€€", rating: 4.5, vegetarian: true, outdoor: true },
        { name: "Kalemegdanska Terasa", cuisine: "Serbian Fine Dining", distanceKm: 0.8, priceRange: "€€€€", rating: 4.7, vegetarian: true, outdoor: true },
        { name: "Burger House", cuisine: "American", distanceKm: 0.4, priceRange: "€", rating: 4.2, vegetarian: false, outdoor: false },
        { name: "Little Bay", cuisine: "International", distanceKm: 1, priceRange: "€€€", rating: 4.4, vegetarian: true, outdoor: false }
      ],
    nearbyMedical: [
        { name: "Clinical Center of Serbia (KCS)", type: "Hospital", distanceKm: 2, phone: "+381 11 361 5555", emergency: true },
        { name: "Atlas General Hospital", type: "Hospital", distanceKm: 3.5, phone: "+381 11 381 2222", emergency: true },
        { name: "Fiziomedika Sports Physiotherapy", type: "Physiotherapy", distanceKm: 1.5, phone: "+381 11 344 0055", emergency: false }
      ],
    costOfLiving: { rent1Bed: "€350", meal: "€6", monthlyFood: "€250", transport: "€30", currency: "RSD", summary: "Belgrade is very affordable by European standards" },
    scholarships: { available: true, details: "Scholarships available for talented Serbian junior players through Tennis Federation partnerships." },
    visaInfo: { schengen: false, eu: false, visaFreeCountries: "EU/EEA citizens, USA, Canada, Australia, UK — visa-free up to 90 days", notes: "Non-EU citizens may need a tourist visa for stays over 90 days. Student visa available for long-term programs." },
    airportTransfers: [
        { mode: "Taxi", duration: "20 min", cost: "€15–20", notes: "Available at airport, use licensed taxis" },
        { mode: "Bus", duration: "45 min", cost: "€1.50", notes: "Line 72 airport bus to city center" },
        { mode: "Private Transfer", duration: "20 min", cost: "€25–35", notes: "Pre-book online" }
      ],
    nearbyTournaments: [
        { name: "Belgrade Open", level: "ATP 250", surface: "Clay", month: "April", venue: "Novak Tennis Center" },
        { name: "Serbia Open Junior", level: "ITF Junior", surface: "Clay", month: "June", venue: "TC Novak" },
        { name: "Serbian National Championships", level: "National", surface: "Clay", month: "September", venue: "TC Belgrade" }
      ],
    videoTour: null,
    juniorInfo: {
      minAge: 10,
      maxAge: 18,
      supervision: 'daytime',
      guardianStay: true,
      schooling: 'none',
      medicalStaff: true,
      safeguarding: true,
      airportPickup: true,
      mealPlan: 'flexible',
      curfew: '22:00',
      roommatePairing: 'age-only',
      languageSupport: ['English', 'Serbian'],
      emergencyProtocol: false
    }
  },
  {
    id: "ljubicic",
    availability: { status: 'open', nextIntake: '2025-07-01', spotsLeft: 6, responseTime: '48h', privateLessons: true, yearRound: true },
    name: "Ljubičić Tennis Academy",
    country: "Croatia",
    countryFlag: "🇭🇷",
    city: "Mali Lošinj",
    lat: 44.5311, lng: 14.4681,
    website: "https://ljubicic.academy",
    contactEmail: "info@ljubicic.academy",
    individualLessons: true,
    boarding: true,
    level: "Elite",
    starred: true,
    airport: { name: "Rijeka Airport", code: "RJK", distance: "85 km", driveTime: "2.5 hrs (drive+ferry)" },
    beach: { distance: 0, description: "🏖️ 0 km — island location, beaches within walking distance" },
    climate: "mali-losinj",
    priceRange: { from: null, to: null, unit: "week", display: "Contact (premium)" },
    programs: [
      { name: "Academy Pro", price: "Contact", desc: "Intensive competitive training" },
      { name: "Weekly Tennis Camps", price: "Contact", desc: "Juniors & adults, all levels" },
      { name: "Vacation + Tennis", price: "Contact", desc: "Mediterranean island packages" }
    ],
    coaches: [
      { name: "Ivan Ljubičić", credential: "Former ATP Player / Federer's Coach", background: "ATP World No. 3, Indian Wells champion, Olympic bronze, coached Roger Federer 2016–2022", atpWta: true, bestRanking: 3, rankingNote: "ATP #3", languages: ["Croatian", "English", "Italian", "French"], instagram: "ivan.ljubicic" },
      { name: "Luka Cvjetković", credential: "Head Coach", background: "Full-time academy head coach", atpWta: false, bestRanking: null, languages: ["Croatian", "English"], instagram: null }
    ],
    bestCoachRanking: 3,
    facilities: "13 courts, gym, physio, luxury accommodation (hotels, villas). 260+ sunny days/year",
    courtSurfaces: ["Clay", "Hard", "Indoor Hard"],
    notableAlumni: [],
    description: "Founded by Ivan Ljubičić (ATP #3, Roger Federer's coach). Mediterranean island setting with luxury facilities.",
    nearbyHotels: [
        { name: "Boutique Hotel Alhambra", stars: 5, distanceKm: 0.8, features: ["Restaurant", "Spa", "Bar"], pool: true, wifi: true, pricePerNight: "€210" },
        { name: "Hotel Bellevue", stars: 4, distanceKm: 0.5, features: ["Restaurant", "Spa", "Bar", "Gym"], pool: true, wifi: true, pricePerNight: "€150" },
        { name: "Hotel Aurora", stars: 4, distanceKm: 1, features: ["Restaurant", "Bar", "Parking"], pool: true, wifi: true, pricePerNight: "€110" },
        { name: "Mare Mare Suites", stars: 3, distanceKm: 0.3, features: ["Breakfast Included", "Parking"], pool: false, wifi: true, pricePerNight: "€70" },
        { name: "Hotel Apoksiomen", stars: 4, distanceKm: 0.2, features: ["Restaurant", "Spa", "Bar"], pool: false, wifi: true, pricePerNight: "€130" }
      ],
    nearbyRestaurants: [
        { name: "Restaurant Bora Bar", cuisine: "Mediterranean", distanceKm: 0.2, priceRange: "€€€", rating: 4.6, vegetarian: true, outdoor: true },
        { name: "Konoba Cigale", cuisine: "Croatian Seafood", distanceKm: 0.5, priceRange: "€€", rating: 4.4, vegetarian: false, outdoor: true },
        { name: "Pizzeria Draga", cuisine: "Italian", distanceKm: 0.3, priceRange: "€", rating: 4.1, vegetarian: true, outdoor: true },
        { name: "Restaurant Diana", cuisine: "Fine Dining", distanceKm: 0.4, priceRange: "€€€€", rating: 4.7, vegetarian: true, outdoor: true },
        { name: "Lanterna Grill", cuisine: "Grilled Meats & Fish", distanceKm: 0.6, priceRange: "€€", rating: 4.3, vegetarian: false, outdoor: true }
      ],
    nearbyMedical: [
        { name: "Dom zdravlja Mali Lošinj", type: "Hospital", distanceKm: 1, phone: "+385 51 231 024", emergency: true },
        { name: "Lječilište Veli Lošinj", type: "Rehabilitation", distanceKm: 3, phone: "+385 51 236 111", emergency: false },
        { name: "Fizioterapija Mali Lošinj", type: "Physiotherapy", distanceKm: 1.5, phone: "+385 51 232 500", emergency: false }
      ],
    costOfLiving: { rent1Bed: "€500", meal: "€10", monthlyFood: "€300", transport: "€40", currency: "EUR", summary: "Seasonal island prices; moderate cost of living, higher in summer" },
    scholarships: { available: true, details: "Merit-based scholarships for elite junior players. Founded by former ATP No. 3 Ivan Ljubičić." },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: "EU/EEA citizens have freedom of movement. USA, Canada, Australia, UK — visa-free up to 90 days in Schengen area", notes: "Croatia joined the Schengen Area in 2023. Non-EU citizens can stay up to 90 days in any 180-day period." },
    airportTransfers: [
        { mode: "Taxi", duration: "15 min", cost: "€10–15", notes: "From Mali Lošinj airfield; limited flights" },
        { mode: "Ferry + Bus", duration: "3 hrs", cost: "€15–25", notes: "Ferry from Rijeka or Zadar to Mali Lošinj" },
        { mode: "Private Transfer", duration: "2.5 hrs", cost: "€120–180", notes: "From Rijeka or Zagreb airport" }
      ],
    nearbyTournaments: [
        { name: "Lošinj Cup", level: "ITF Junior", surface: "Clay", month: "July", venue: "TC Lošinj" },
        { name: "Croatian Junior Championships", level: "National Junior", surface: "Clay", month: "August", venue: "Various" }
      ],
    videoTour: "https://www.youtube.com/watch?v=5F3kcVjGwGI",
    juniorInfo: {
      minAge: 7,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'tutoring',
      medicalStaff: true,
      safeguarding: true,
      airportPickup: true,
      mealPlan: 'full-board',
      curfew: '22:00',
      roommatePairing: 'age-gender',
      languageSupport: ['English', 'Croatian'],
      emergencyProtocol: true
    }
  },
  {
    id: "ilirija",
    availability: { status: 'waitlist', nextIntake: '2025-11-01', spotsLeft: null, responseTime: '48h', privateLessons: true, yearRound: false },
    name: "Ilirija Tennis Academy",
    country: "Croatia",
    countryFlag: "🇭🇷",
    city: "Biograd na Moru",
    lat: 43.9364, lng: 15.4467,
    website: "https://www.ilirijatennisacademy.net",
    contactEmail: "info@ilirijatennisacademy.net",
    individualLessons: true,
    boarding: false,
    level: "All levels",
    starred: false,
    airport: { name: "Zadar Airport", code: "ZAD", distance: "30 km", driveTime: "30 min" },
    beach: { distance: 0.1, description: "🏖️ ~0.1 km — coastal town, beaches within walking distance" },
    climate: "biograd",
    priceRange: { from: 630, to: 1080, unit: "week", display: "€630–€1,080/wk" },
    programs: [
      { name: "Pro Tennis Program", price: "€800/wk", desc: "Daily private lesson + 2h group + 1h fitness/video" },
      { name: "Ladies Tennis Week", price: "€690/wk", desc: "Women-focused program" },
      { name: "Tennis & Yoga", price: "€770/wk", desc: "Combined program" },
      { name: "Tennis + Sail", price: "€1,080/wk", desc: "Swing the Racket & Sail" },
      { name: "Tennis + Nature", price: "€750/wk", desc: "National Park excursions included" }
    ],
    coaches: [
      { name: "Milan Zorić", credential: "ATP Coach", background: "Private coach of Iva Majoli (WTA #2, RG champion); coached Ana Vrljić, Darija Jurak", atpWta: false, bestRanking: null, rankingNote: "Coached WTA #2", languages: ["Croatian", "English"], instagram: null },
      { name: "Robert Suevich", credential: "Former ATP Player", background: "ATP ~850, played Wimbledon & RG; coached Andrei Pavel (ATP #13)", atpWta: true, bestRanking: 850, rankingNote: "ATP ~850; coached ATP #13", languages: ["Croatian", "English", "Romanian"], instagram: null },
      { name: "Mario Jukić", credential: "Former Junior International", background: "Hitting coach for Borna Ćorić and Donna Vekić", atpWta: false, bestRanking: null, rankingNote: "Coached ATP/WTA players", languages: ["Croatian", "English"], instagram: null }
    ],
    bestCoachRanking: 850,
    coachedTopPlayer: 2,
    facilities: "20+ coaches, courts in Biograd na Moru (Dalmatian coast)",
    courtSurfaces: ["Clay", "Hard"],
    notableAlumni: ["Ajla Tomljanović", "Borna Ćorić (connection)", "Donna Vekić (connection)"],
    description: "Combines tennis with Croatian tourism: sailing, national parks, yoga, cycling. 20+ coaches.",
    nearbyHotels: [
        { name: "Hotel Ilirija", stars: 4, distanceKm: 0.3, features: ["Restaurant", "Spa", "Bar", "Parking"], pool: true, wifi: true, pricePerNight: "€110" },
        { name: "Hotel Kornati", stars: 4, distanceKm: 0.4, features: ["Restaurant", "Bar", "Conference Room"], pool: true, wifi: true, pricePerNight: "€95" },
        { name: "Hotel Adriatic", stars: 3, distanceKm: 0.2, features: ["Restaurant", "Bar", "Parking"], pool: false, wifi: true, pricePerNight: "€65" },
        { name: "Hotel Bolero", stars: 3, distanceKm: 0.5, features: ["Restaurant", "Parking", "Pet Friendly"], pool: false, wifi: true, pricePerNight: "€55" },
        { name: "Villa Donat", stars: 3, distanceKm: 1, features: ["Restaurant", "Parking", "Breakfast Included"], pool: true, wifi: true, pricePerNight: "€60" }
      ],
    nearbyRestaurants: [
        { name: "Konoba Šime", cuisine: "Dalmatian", distanceKm: 0.3, priceRange: "€€", rating: 4.5, vegetarian: true, outdoor: true },
        { name: "Restaurant Kaštel", cuisine: "Mediterranean Seafood", distanceKm: 0.2, priceRange: "€€€", rating: 4.6, vegetarian: true, outdoor: true },
        { name: "Pizzeria Pontus", cuisine: "Italian", distanceKm: 0.4, priceRange: "€", rating: 4, vegetarian: true, outdoor: true },
        { name: "Restoran Marina", cuisine: "Croatian", distanceKm: 0.5, priceRange: "€€", rating: 4.3, vegetarian: false, outdoor: true },
        { name: "Konoba Barba", cuisine: "Grilled Fish", distanceKm: 0.6, priceRange: "€€€", rating: 4.4, vegetarian: false, outdoor: true }
      ],
    nearbyMedical: [
        { name: "Dom zdravlja Biograd na Moru", type: "Hospital", distanceKm: 1, phone: "+385 23 383 244", emergency: true },
        { name: "Opća bolnica Zadar", type: "Hospital", distanceKm: 28, phone: "+385 23 505 505", emergency: true },
        { name: "Fizikalna terapija Biograd", type: "Physiotherapy", distanceKm: 0.8, phone: "+385 23 384 100", emergency: false }
      ],
    costOfLiving: { rent1Bed: "€450", meal: "€9", monthlyFood: "€280", transport: "€35", currency: "EUR", summary: "Moderate coastal Croatian town; cheaper than Split or Dubrovnik" },
    scholarships: { available: false, details: "No formal scholarship program currently. Seasonal discounts available for multi-week bookings." },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: "EU/EEA citizens have freedom of movement. USA, Canada, Australia, UK — visa-free up to 90 days in Schengen area", notes: "Croatia joined the Schengen Area in 2023. Non-EU citizens can stay up to 90 days in any 180-day period." },
    airportTransfers: [
        { mode: "Taxi", duration: "30 min", cost: "€30–40", notes: "From Zadar Airport (ZAD)" },
        { mode: "Bus", duration: "50 min", cost: "€5", notes: "Zadar Airport to Biograd via bus" },
        { mode: "Private Transfer", duration: "25 min", cost: "€40–55", notes: "Pre-book from Zadar Airport" }
      ],
    nearbyTournaments: [
        { name: "Zadar Open", level: "ITF Junior", surface: "Clay", month: "July", venue: "TC Zadar" },
        { name: "Croatian Dalmatia Cup", level: "National", surface: "Clay", month: "August", venue: "Various Dalmatia venues" }
      ],
    accommodation: {
      types: [
        { type: 'private', label: 'Private Room', pricePerWeek: 280, maxOccupancy: 1, bathType: 'ensuite', mealsIncluded: true },
        { type: 'twin', label: 'Twin Shared Room', pricePerWeek: 190, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'triple', label: 'Triple Room', pricePerWeek: 150, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true },
        { type: 'quad', label: 'Quad Room', pricePerWeek: 120, maxOccupancy: 4, bathType: 'shared', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: 1,
      shuttleToTraining: true,
      notes: 'Partner hotel on the Adriatic coast with sea-view rooms. Half-board meal plan available.'
    },
    videoTour: null,
    juniorInfo: {
      minAge: 6,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'tutoring',
      medicalStaff: true,
      safeguarding: true,
      airportPickup: true,
      mealPlan: 'full-board',
      curfew: '22:00',
      roommatePairing: 'age-gender',
      languageSupport: ['English', 'Croatian'],
      emergencyProtocol: true
    }
  },
  {
    id: "tk-firule",
    availability: { status: 'open', nextIntake: '2025-06-01', spotsLeft: 16, responseTime: '24h', privateLessons: true, yearRound: true },
    name: "TK Firule",
    country: "Croatia",
    countryFlag: "🇭🇷",
    city: "Split",
    lat: 43.5081, lng: 16.4402,
    website: null,
    contactEmail: "info@tkfirule.com",
    individualLessons: true,
    boarding: false,
    level: "Historic club",
    starred: false,
    airport: { name: "Split Airport", code: "SPU", distance: "25 km", driveTime: "30 min" },
    beach: { distance: 0.2, description: "🏖️ ~0.2 km — coastal city, Bačvice beach within walking distance" },
    climate: "split",
    priceRange: { from: null, to: null, unit: "month", display: "Contact for pricing" },
    programs: [],
    coaches: [],
    bestCoachRanking: null,
    facilities: "Historic tennis club in Split",
    courtSurfaces: ["Clay", "Hard"],
    notableAlumni: ["Goran Ivanišević (ATP #2, Wimbledon champion)"],
    description: "The club where Goran Ivanišević developed. One of Croatia's most important tennis clubs.",
    nearbyHotels: [
        { name: "Hotel Atrium", stars: 5, distanceKm: 0.3, features: ["Restaurant", "Spa", "Gym", "Bar"], pool: true, wifi: true, pricePerNight: "€140" },
        { name: "Radisson Blu Resort Split", stars: 4, distanceKm: 2.5, features: ["Restaurant", "Spa", "Bar", "Parking"], pool: true, wifi: true, pricePerNight: "€120" },
        { name: "Hotel Marmont Heritage", stars: 4, distanceKm: 0.2, features: ["Restaurant", "Bar", "Room Service"], pool: false, wifi: true, pricePerNight: "€105" },
        { name: "Hotel Slavija", stars: 3, distanceKm: 0.4, features: ["Restaurant", "Bar"], pool: false, wifi: true, pricePerNight: "€55" },
        { name: "Hotel Luxe", stars: 4, distanceKm: 0.5, features: ["Restaurant", "Spa", "Room Service"], pool: false, wifi: true, pricePerNight: "€90" }
      ],
    nearbyRestaurants: [
        { name: "Konoba Matejuška", cuisine: "Dalmatian Seafood", distanceKm: 0.3, priceRange: "€€", rating: 4.6, vegetarian: false, outdoor: true },
        { name: "Zinfandel Food & Wine Bar", cuisine: "Mediterranean", distanceKm: 0.2, priceRange: "€€€", rating: 4.5, vegetarian: true, outdoor: true },
        { name: "Uje Oil Bar", cuisine: "Croatian Modern", distanceKm: 0.4, priceRange: "€€", rating: 4.7, vegetarian: true, outdoor: true },
        { name: "Pizzeria Portas", cuisine: "Italian", distanceKm: 0.1, priceRange: "€", rating: 4.2, vegetarian: true, outdoor: false },
        { name: "Dvor", cuisine: "Fine Dining", distanceKm: 1.5, priceRange: "€€€€", rating: 4.8, vegetarian: true, outdoor: true }
      ],
    nearbyMedical: [
        { name: "KBC Split (University Hospital)", type: "Hospital", distanceKm: 2.5, phone: "+385 21 556 111", emergency: true },
        { name: "Poliklinika Medico", type: "Sports Medicine", distanceKm: 1.5, phone: "+385 21 490 290", emergency: false },
        { name: "Fizioterapija Split Centar", type: "Physiotherapy", distanceKm: 1, phone: "+385 21 345 678", emergency: false }
      ],
    costOfLiving: { rent1Bed: "€550", meal: "€10", monthlyFood: "€300", transport: "€35", currency: "EUR", summary: "Moderate to high for Croatia; tourist-area prices in summer" },
    scholarships: { available: true, details: "Scholarship support through Croatian Tennis Federation for top-ranked juniors." },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: "EU/EEA citizens have freedom of movement. USA, Canada, Australia, UK — visa-free up to 90 days in Schengen area", notes: "Croatia joined the Schengen Area in 2023. Non-EU citizens can stay up to 90 days in any 180-day period." },
    airportTransfers: [
        { mode: "Taxi", duration: "30 min", cost: "€30–40", notes: "From Split Airport (SPU), use licensed taxis" },
        { mode: "Bus", duration: "50 min", cost: "€5", notes: "Shuttle bus from Split Airport to city center" },
        { mode: "Private Transfer", duration: "25 min", cost: "€35–50", notes: "Pre-book online" }
      ],
    nearbyTournaments: [
        { name: "Split Open", level: "ITF", surface: "Clay", month: "June", venue: "TK Firule" },
        { name: "Croatian Junior Championships", level: "National Junior", surface: "Clay", month: "July", venue: "Various" },
        { name: "Dalmatia Tennis Cup", level: "ITF Junior", surface: "Clay", month: "August", venue: "Split" }
      ],
    videoTour: null,
    juniorInfo: {
      minAge: 12,
      maxAge: 18,
      supervision: 'daytime',
      guardianStay: false,
      schooling: 'online-support',
      medicalStaff: true,
      safeguarding: true,
      airportPickup: false,
      mealPlan: 'full-board',
      curfew: '22:00',
      roommatePairing: 'age-gender',
      languageSupport: ['English', 'Croatian'],
      emergencyProtocol: false
    }
  },
  {
    id: "tenis-akademija-split",
    availability: { status: 'open', nextIntake: '2025-05-15', spotsLeft: 19, responseTime: '24h', privateLessons: false, yearRound: true },
    name: "Tenis Akademija Split",
    country: "Croatia",
    countryFlag: "🇭🇷",
    city: "Split",
    lat: 43.5081, lng: 16.4402,
    website: "https://tenis-akademija-split.com",
    contactEmail: "info@tenis-akademija-split.com",
    individualLessons: true,
    boarding: false,
    level: "All levels",
    starred: false,
    airport: { name: "Split Airport", code: "SPU", distance: "25 km", driveTime: "30 min" },
    beach: { distance: 0.2, description: "🏖️ ~0.2 km — coastal city, Bačvice beach within walking distance" },
    climate: "split",
    priceRange: { from: null, to: null, unit: "month", display: "Contact for pricing" },
    programs: [],
    coaches: [],
    bestCoachRanking: null,
    facilities: "Training for all ages and skill levels",
    courtSurfaces: ["Clay", "Hard"],
    notableAlumni: [],
    description: "Training for all ages and skill levels in Split.",
    nearbyHotels: [
        { name: "Hotel Atrium", stars: 5, distanceKm: 0.3, features: ["Restaurant", "Spa", "Gym", "Bar"], pool: true, wifi: true, pricePerNight: "€140" },
        { name: "Radisson Blu Resort Split", stars: 4, distanceKm: 2.5, features: ["Restaurant", "Spa", "Bar", "Parking"], pool: true, wifi: true, pricePerNight: "€120" },
        { name: "Hotel Marmont Heritage", stars: 4, distanceKm: 0.2, features: ["Restaurant", "Bar", "Room Service"], pool: false, wifi: true, pricePerNight: "€105" },
        { name: "Hotel Slavija", stars: 3, distanceKm: 0.4, features: ["Restaurant", "Bar"], pool: false, wifi: true, pricePerNight: "€55" },
        { name: "Hotel Luxe", stars: 4, distanceKm: 0.5, features: ["Restaurant", "Spa", "Room Service"], pool: false, wifi: true, pricePerNight: "€90" }
      ],
    nearbyRestaurants: [
        { name: "Konoba Matejuška", cuisine: "Dalmatian Seafood", distanceKm: 0.3, priceRange: "€€", rating: 4.6, vegetarian: false, outdoor: true },
        { name: "Zinfandel Food & Wine Bar", cuisine: "Mediterranean", distanceKm: 0.2, priceRange: "€€€", rating: 4.5, vegetarian: true, outdoor: true },
        { name: "Uje Oil Bar", cuisine: "Croatian Modern", distanceKm: 0.4, priceRange: "€€", rating: 4.7, vegetarian: true, outdoor: true },
        { name: "Pizzeria Portas", cuisine: "Italian", distanceKm: 0.1, priceRange: "€", rating: 4.2, vegetarian: true, outdoor: false },
        { name: "Dvor", cuisine: "Fine Dining", distanceKm: 1.5, priceRange: "€€€€", rating: 4.8, vegetarian: true, outdoor: true }
      ],
    nearbyMedical: [
        { name: "KBC Split (University Hospital)", type: "Hospital", distanceKm: 2.5, phone: "+385 21 556 111", emergency: true },
        { name: "Poliklinika Medico", type: "Sports Medicine", distanceKm: 1.5, phone: "+385 21 490 290", emergency: false },
        { name: "Fizioterapija Split Centar", type: "Physiotherapy", distanceKm: 1, phone: "+385 21 345 678", emergency: false }
      ],
    costOfLiving: { rent1Bed: "€550", meal: "€10", monthlyFood: "€300", transport: "€35", currency: "EUR", summary: "Moderate to high for Croatia; tourist-area prices in summer" },
    scholarships: { available: false, details: "No formal scholarship program currently. Contact for junior group rates." },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: "EU/EEA citizens have freedom of movement. USA, Canada, Australia, UK — visa-free up to 90 days in Schengen area", notes: "Croatia joined the Schengen Area in 2023. Non-EU citizens can stay up to 90 days in any 180-day period." },
    airportTransfers: [
        { mode: "Taxi", duration: "30 min", cost: "€30–40", notes: "From Split Airport (SPU), use licensed taxis" },
        { mode: "Bus", duration: "50 min", cost: "€5", notes: "Shuttle bus from Split Airport to city center" },
        { mode: "Private Transfer", duration: "25 min", cost: "€35–50", notes: "Pre-book online" }
      ],
    nearbyTournaments: [
        { name: "Split Open", level: "ITF", surface: "Clay", month: "June", venue: "TK Firule" },
        { name: "Croatian Junior Championships", level: "National Junior", surface: "Clay", month: "July", venue: "Various" },
        { name: "Dalmatia Tennis Cup", level: "ITF Junior", surface: "Clay", month: "August", venue: "Split" }
      ],
    videoTour: null,
    juniorInfo: {
      minAge: 18,
      maxAge: null,
      supervision: 'none',
      guardianStay: false,
      schooling: 'none',
      medicalStaff: false,
      safeguarding: false,
      airportPickup: false,
      mealPlan: 'self-catering',
      curfew: null,
      roommatePairing: 'self-select',
      languageSupport: ['English'],
      emergencyProtocol: false
    }
  },
  {
    id: "tk-agrofert",
    availability: { status: 'waitlist', nextIntake: '2025-11-01', spotsLeft: null, responseTime: '48h', privateLessons: true, yearRound: true },
    name: "TK Agrofert Prostějov",
    country: "Czech Republic",
    countryFlag: "🇨🇿",
    city: "Prostějov",
    lat: 49.4718, lng: 17.1118,
    website: "https://www.tkagrofert.cz",
    contactEmail: "info@tkagrofert.cz",
    individualLessons: true,
    boarding: false,
    level: "Elite",
    starred: true,
    airport: { name: "Brno-Tuřany Airport", code: "BRQ", distance: "63 km", driveTime: "50 min" },
    beach: { distance: null, description: "Landlocked — Baltic ~530 km; Adriatic ~750 km" },
    climate: "prostejov",
    priceRange: { from: null, to: null, unit: "month", display: "Contact for pricing" },
    programs: [
      { name: "Junior Development", price: "Contact", desc: "U14, U18 pathway" },
      { name: "High Performance", price: "Contact", desc: "Youth-to-elite pathway" }
    ],
    coaches: [],
    bestCoachRanking: null,
    facilities: "Major complex, indoor/outdoor courts, rehabilitation zone, new tennis hall",
    courtSurfaces: ["Clay", "Hard", "Indoor Hard"],
    notableAlumni: ["Petra Kvitová (WTA #2)", "Tomáš Berdych (ATP #4)", "Barbora Krejčíková (WTA #2)", "Karolína Plíšková (WTA #1)", "Radek Štěpánek (ATP #8)", "Jiří Novák (ATP #5)", "Jiří Lehečka (ATP #14)", "Jakub Menšík", "Tomáš Macháč"],
    description: "Arguably #1 tennis academy in Czech Republic. Produced more Grand Slam champions than any other East European academy. Founded 1900.",
    nearbyHotels: [
        { name: "Hotel Plumlov", stars: 3, distanceKm: 8, features: ["Restaurant", "Parking", "Bar"], pool: false, wifi: true, pricePerNight: "€45" },
        { name: "Hotel Záložna", stars: 3, distanceKm: 0.5, features: ["Restaurant", "Bar", "Conference Room"], pool: false, wifi: true, pricePerNight: "€50" },
        { name: "Penzion Na Hradbách", stars: 2, distanceKm: 0.3, features: ["Breakfast Included", "Parking"], pool: false, wifi: true, pricePerNight: "€30" },
        { name: "Hotel Avion", stars: 3, distanceKm: 1, features: ["Restaurant", "Parking", "Bar"], pool: false, wifi: true, pricePerNight: "€40" },
        { name: "Hotel Nový Dvůr", stars: 4, distanceKm: 12, features: ["Restaurant", "Spa", "Gym", "Parking"], pool: true, wifi: true, pricePerNight: "€75" }
      ],
    nearbyRestaurants: [
        { name: "Restaurace U Kmotra", cuisine: "Czech Traditional", distanceKm: 0.3, priceRange: "€", rating: 4.3, vegetarian: true, outdoor: true },
        { name: "Pivovar Prostějov", cuisine: "Czech Brewery", distanceKm: 0.5, priceRange: "€€", rating: 4.4, vegetarian: true, outdoor: true },
        { name: "Restaurace Kovárna", cuisine: "International", distanceKm: 0.4, priceRange: "€€", rating: 4.2, vegetarian: true, outdoor: false },
        { name: "Pizzeria Rosmarino", cuisine: "Italian", distanceKm: 0.6, priceRange: "€", rating: 4, vegetarian: true, outdoor: false },
        { name: "Restaurace Na Zámku", cuisine: "Czech Fine Dining", distanceKm: 0.8, priceRange: "€€€", rating: 4.5, vegetarian: true, outdoor: true }
      ],
    nearbyMedical: [
        { name: "Nemocnice Prostějov", type: "Hospital", distanceKm: 2, phone: "+420 582 315 111", emergency: true },
        { name: "FN Olomouc (University Hospital)", type: "Hospital", distanceKm: 20, phone: "+420 585 851 111", emergency: true },
        { name: "Rehabilitace Prostějov", type: "Physiotherapy", distanceKm: 1.5, phone: "+420 582 345 678", emergency: false }
      ],
    costOfLiving: { rent1Bed: "€350", meal: "€7", monthlyFood: "€220", transport: "€25", currency: "CZK", summary: "Very affordable small Czech city; much cheaper than Prague" },
    scholarships: { available: true, details: "Major scholarship program through Agrofert sponsorship. One of the most well-funded academies in Central Europe." },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: "EU/EEA citizens have freedom of movement. USA, Canada, Australia, UK — visa-free up to 90 days in Schengen area", notes: "Schengen visa allows travel across 27 European countries. Long-term student visa available for extended programs." },
    airportTransfers: [
        { mode: "Taxi", duration: "1 hr 30 min", cost: "€60–80", notes: "From Brno Airport (BRQ), 80 km" },
        { mode: "Train + Bus", duration: "2 hrs", cost: "€8–12", notes: "Train from Brno to Prostějov" },
        { mode: "Private Transfer", duration: "1 hr 20 min", cost: "€70–100", notes: "Pre-book from Brno or Prague airports" }
      ],
    nearbyTournaments: [
        { name: "Czech Open Prostějov", level: "WTA 250", surface: "Clay", month: "April", venue: "TK Agrofert Prostějov" },
        { name: "Moneta Czech Open", level: "ITF", surface: "Clay", month: "May", venue: "Prostějov" },
        { name: "Czech Junior Championships", level: "National Junior", surface: "Clay", month: "June", venue: "Prostějov" }
      ],
    accommodation: {
      types: [
        { type: 'private', label: 'Private Room', pricePerWeek: 240, maxOccupancy: 1, bathType: 'ensuite', mealsIncluded: true },
        { type: 'twin', label: 'Twin Shared Room', pricePerWeek: 160, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'triple', label: 'Triple Room', pricePerWeek: 120, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true },
        { type: 'quad', label: 'Quad Room', pricePerWeek: 95, maxOccupancy: 4, bathType: 'shared', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: 2,
      shuttleToTraining: true,
      notes: 'On-campus boarding house with full-board option. Two-week minimum for junior programs.'
    },
    videoTour: "https://www.youtube.com/watch?v=3jQWMPaVVkQ",
    juniorInfo: {
      minAge: 7,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'tutoring',
      medicalStaff: true,
      safeguarding: true,
      airportPickup: true,
      mealPlan: 'full-board',
      curfew: '22:00',
      roommatePairing: 'age-gender',
      languageSupport: ['English', 'Czech'],
      emergencyProtocol: true
    }
  },
  {
    id: "sparta-prague",
    availability: { status: 'limited', nextIntake: '2025-09-15', spotsLeft: 4, responseTime: '24h', privateLessons: true, yearRound: true },
    name: "TK Sparta Prague",
    country: "Czech Republic",
    countryFlag: "🇨🇿",
    city: "Prague",
    lat: 50.0755, lng: 14.4378,
    website: "http://www.tkspartapraha.cz",
    contactEmail: "info@tkspartapraha.cz",
    individualLessons: true,
    boarding: false,
    level: "Elite",
    starred: false,
    airport: { name: "Václav Havel Airport Prague", code: "PRG", distance: "17 km", driveTime: "25 min" },
    beach: { distance: null, description: "Landlocked — Baltic ~430 km; Adriatic ~700 km" },
    climate: "prague",
    priceRange: { from: null, to: null, unit: "month", display: "Contact for pricing" },
    programs: [
      { name: "Academy (ages 9+)", price: "Contact", desc: "All performance levels" }
    ],
    coaches: [],
    bestCoachRanking: null,
    facilities: "23 outdoor + 12 indoor courts. Hosts WTA Prague Open & ATP Challenger.",
    courtSurfaces: ["Clay", "Hard", "Indoor Hard"],
    notableAlumni: ["Jan Kodeš (ATP #5, 3× GS)", "Hana Mandlíková (WTA #3, 4× GS)", "Petra Kvitová (WTA #2)", "Karolína Plíšková (WTA #1)", "Tomáš Macháč"],
    description: "One of Czech Republic's most prestigious clubs. Founded 1905. 35 courts total.",
    nearbyHotels: [
        { name: "Hotel Josef", stars: 4, distanceKm: 0.8, features: ["Restaurant", "Gym", "Bar"], pool: false, wifi: true, pricePerNight: "€110" },
        { name: "Hilton Prague", stars: 5, distanceKm: 1.5, features: ["Restaurant", "Spa", "Gym", "Bar"], pool: true, wifi: true, pricePerNight: "€150" },
        { name: "Hotel Máchova", stars: 3, distanceKm: 2, features: ["Breakfast Included", "Parking"], pool: false, wifi: true, pricePerNight: "€55" },
        { name: "Mosaic House", stars: 3, distanceKm: 1.2, features: ["Bar", "Breakfast Included", "Pet Friendly"], pool: false, wifi: true, pricePerNight: "€60" },
        { name: "Grand Hotel Bohemia", stars: 5, distanceKm: 0.5, features: ["Restaurant", "Bar", "Room Service", "Conference Room"], pool: false, wifi: true, pricePerNight: "€130" }
      ],
    nearbyRestaurants: [
        { name: "Lokál Dlouhááá", cuisine: "Czech Traditional", distanceKm: 0.5, priceRange: "€", rating: 4.5, vegetarian: true, outdoor: false },
        { name: "La Degustation Bohême Bourgeoise", cuisine: "Czech Fine Dining", distanceKm: 0.8, priceRange: "€€€€", rating: 4.8, vegetarian: true, outdoor: false },
        { name: "Pasta Fresca", cuisine: "Italian", distanceKm: 0.3, priceRange: "€€", rating: 4.3, vegetarian: true, outdoor: true },
        { name: "Café Savoy", cuisine: "French-Czech", distanceKm: 1, priceRange: "€€€", rating: 4.6, vegetarian: true, outdoor: true },
        { name: "Kantýna", cuisine: "Steak & Grill", distanceKm: 0.6, priceRange: "€€", rating: 4.4, vegetarian: false, outdoor: false }
      ],
    nearbyMedical: [
        { name: "Všeobecná fakultní nemocnice (VFN)", type: "Hospital", distanceKm: 2, phone: "+420 224 961 111", emergency: true },
        { name: "Canadian Medical Care Prague", type: "Sports Medicine", distanceKm: 3, phone: "+420 235 360 133", emergency: false },
        { name: "Klinika Malvazinky", type: "Physiotherapy", distanceKm: 4, phone: "+420 251 116 111", emergency: false }
      ],
    costOfLiving: { rent1Bed: "€650", meal: "€8", monthlyFood: "€280", transport: "€25", currency: "CZK", summary: "Moderate by Western European standards; rising rents in the capital" },
    scholarships: { available: true, details: "Merit-based scholarships for top Czech and international junior players. Contact for tryout schedule." },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: "EU/EEA citizens have freedom of movement. USA, Canada, Australia, UK — visa-free up to 90 days in Schengen area", notes: "Schengen visa allows travel across 27 European countries. Long-term student visa available for extended programs." },
    airportTransfers: [
        { mode: "Taxi", duration: "30 min", cost: "€25–30", notes: "From Václav Havel Airport (PRG), use AAA or Liftago" },
        { mode: "Bus + Metro", duration: "50 min", cost: "€1.50", notes: "Bus 119 to Nádraží Veleslavín, then metro" },
        { mode: "Private Transfer", duration: "25 min", cost: "€30–45", notes: "Pre-book online, fixed price" }
      ],
    nearbyTournaments: [
        { name: "Livesport Prague Open", level: "WTA 250", surface: "Clay", month: "July", venue: "TK Sparta Praha" },
        { name: "Prague Junior Open", level: "ITF Junior", surface: "Clay", month: "May", venue: "CLTK Praha" },
        { name: "Czech Indoor Championships", level: "National", surface: "Hard", month: "November", venue: "Prague" }
      ],
    videoTour: "https://www.youtube.com/watch?v=hIvMLKqwh8c",
    juniorInfo: {
      minAge: 13,
      maxAge: 18,
      supervision: 'daytime',
      guardianStay: true,
      schooling: 'none',
      medicalStaff: false,
      safeguarding: true,
      airportPickup: true,
      mealPlan: 'half-board',
      curfew: '23:00',
      roommatePairing: 'age-only',
      languageSupport: ['English', 'Czech'],
      emergencyProtocol: true
    }
  },
  {
    id: "pliskova-academy",
    availability: { status: 'open', nextIntake: '2025-08-01', spotsLeft: 17, responseTime: '3-5 days', privateLessons: true, yearRound: false },
    name: "Plíšková Tennis Academy",
    country: "Czech Republic",
    countryFlag: "🇨🇿",
    city: "Prague",
    lat: 50.0755, lng: 14.4378,
    website: "http://pliskovatennis.academy/en",
    contactEmail: "info@pliskovatennis.academy",
    individualLessons: true,
    boarding: false,
    level: "Pro/Junior",
    starred: false,
    airport: { name: "Václav Havel Airport Prague", code: "PRG", distance: "17 km", driveTime: "25 min" },
    beach: { distance: null, description: "Landlocked — Baltic ~430 km; Adriatic ~700 km" },
    climate: "prague",
    priceRange: { from: null, to: null, unit: "month", display: "Contact for pricing" },
    programs: [
      { name: "Junior Development", price: "Contact", desc: "Youth programs" },
      { name: "ATP/WTA Professional", price: "Contact", desc: "Pro-level training" },
      { name: "Summer Camps", price: "Contact", desc: "Seasonal camps + Marbella abroad" },
      { name: "Mentality Coaching", price: "Contact", desc: "With Marian Jelínek" }
    ],
    coaches: [
      { name: "Ondřej Dohnal", credential: "30+ years", background: "Coached Karolína Plíšková (WTA #1) and Kateřina Siniaková", atpWta: false, bestRanking: null, rankingNote: "Coached WTA #1", languages: ["Czech", "English"], instagram: null }
    ],
    bestCoachRanking: null,
    coachedTopPlayer: 1,
    facilities: "5 clay + 2 indoor courts, gym, restaurant. Expansion planned.",
    courtSurfaces: ["Clay", "Indoor Hard"],
    notableAlumni: ["Karolína Plíšková (WTA #1)"],
    description: "Founded 2020. Karolína Plíšková (WTA #1) personally trains here. Mental coach Marian Jelínek on staff.",
    nearbyHotels: [
        { name: "Hotel Josef", stars: 4, distanceKm: 0.8, features: ["Restaurant", "Gym", "Bar"], pool: false, wifi: true, pricePerNight: "€110" },
        { name: "Hilton Prague", stars: 5, distanceKm: 1.5, features: ["Restaurant", "Spa", "Gym", "Bar"], pool: true, wifi: true, pricePerNight: "€150" },
        { name: "Hotel Máchova", stars: 3, distanceKm: 2, features: ["Breakfast Included", "Parking"], pool: false, wifi: true, pricePerNight: "€55" },
        { name: "Mosaic House", stars: 3, distanceKm: 1.2, features: ["Bar", "Breakfast Included", "Pet Friendly"], pool: false, wifi: true, pricePerNight: "€60" },
        { name: "Grand Hotel Bohemia", stars: 5, distanceKm: 0.5, features: ["Restaurant", "Bar", "Room Service", "Conference Room"], pool: false, wifi: true, pricePerNight: "€130" }
      ],
    nearbyRestaurants: [
        { name: "Lokál Dlouhááá", cuisine: "Czech Traditional", distanceKm: 0.5, priceRange: "€", rating: 4.5, vegetarian: true, outdoor: false },
        { name: "La Degustation Bohême Bourgeoise", cuisine: "Czech Fine Dining", distanceKm: 0.8, priceRange: "€€€€", rating: 4.8, vegetarian: true, outdoor: false },
        { name: "Pasta Fresca", cuisine: "Italian", distanceKm: 0.3, priceRange: "€€", rating: 4.3, vegetarian: true, outdoor: true },
        { name: "Café Savoy", cuisine: "French-Czech", distanceKm: 1, priceRange: "€€€", rating: 4.6, vegetarian: true, outdoor: true },
        { name: "Kantýna", cuisine: "Steak & Grill", distanceKm: 0.6, priceRange: "€€", rating: 4.4, vegetarian: false, outdoor: false }
      ],
    nearbyMedical: [
        { name: "Všeobecná fakultní nemocnice (VFN)", type: "Hospital", distanceKm: 2, phone: "+420 224 961 111", emergency: true },
        { name: "Canadian Medical Care Prague", type: "Sports Medicine", distanceKm: 3, phone: "+420 235 360 133", emergency: false },
        { name: "Klinika Malvazinky", type: "Physiotherapy", distanceKm: 4, phone: "+420 251 116 111", emergency: false }
      ],
    costOfLiving: { rent1Bed: "€650", meal: "€8", monthlyFood: "€280", transport: "€25", currency: "CZK", summary: "Moderate by Western European standards; rising rents in the capital" },
    scholarships: { available: true, details: "Scholarships for promising juniors. Evaluation by former WTA World No. 1 coaching staff." },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: "EU/EEA citizens have freedom of movement. USA, Canada, Australia, UK — visa-free up to 90 days in Schengen area", notes: "Schengen visa allows travel across 27 European countries. Long-term student visa available for extended programs." },
    airportTransfers: [
        { mode: "Taxi", duration: "30 min", cost: "€25–30", notes: "From Václav Havel Airport (PRG), use AAA or Liftago" },
        { mode: "Bus + Metro", duration: "50 min", cost: "€1.50", notes: "Bus 119 to Nádraží Veleslavín, then metro" },
        { mode: "Private Transfer", duration: "25 min", cost: "€30–45", notes: "Pre-book online, fixed price" }
      ],
    nearbyTournaments: [
        { name: "Livesport Prague Open", level: "WTA 250", surface: "Clay", month: "July", venue: "TK Sparta Praha" },
        { name: "Prague Junior Open", level: "ITF Junior", surface: "Clay", month: "May", venue: "CLTK Praha" },
        { name: "Czech Indoor Championships", level: "National", surface: "Hard", month: "November", venue: "Prague" }
      ],
    videoTour: null,
    juniorInfo: {
      minAge: 11,
      maxAge: 18,
      supervision: 'daytime',
      guardianStay: true,
      schooling: 'tutoring',
      medicalStaff: false,
      safeguarding: true,
      airportPickup: false,
      mealPlan: 'full-board',
      curfew: '23:00',
      roommatePairing: 'age-gender',
      languageSupport: ['English', 'Czech'],
      emergencyProtocol: true
    }
  },
  {
    id: "cltk-praha",
    availability: { status: 'open', nextIntake: '2025-07-01', spotsLeft: 10, responseTime: '48h', privateLessons: true, yearRound: true },
    name: "I. ČLTK Praha",
    country: "Czech Republic",
    countryFlag: "🇨🇿",
    city: "Prague",
    lat: 50.0755, lng: 14.4378,
    website: "https://cltk.cz/en/tennis-lessons/",
    contactEmail: "info@cltk.cz",
    individualLessons: true,
    boarding: false,
    level: "All levels",
    starred: false,
    airport: { name: "Václav Havel Airport Prague", code: "PRG", distance: "17 km", driveTime: "25 min" },
    beach: { distance: null, description: "Landlocked — Baltic ~430 km; Adriatic ~700 km" },
    climate: "prague",
    priceRange: { from: null, to: null, unit: "month", display: "Contact for pricing" },
    programs: [],
    coaches: [],
    bestCoachRanking: null,
    facilities: "One of Prague's oldest and most traditional tennis clubs",
    courtSurfaces: ["Clay", "Hard", "Indoor Hard"],
    notableAlumni: [],
    description: "Historic Czech club. Coaches include Ondřej Macek (30 yrs, speaks CZ/EN/DE/RU) and Jan Kurz (50 yrs exp).",
    nearbyHotels: [
        { name: "Hotel Josef", stars: 4, distanceKm: 0.8, features: ["Restaurant", "Gym", "Bar"], pool: false, wifi: true, pricePerNight: "€110" },
        { name: "Hilton Prague", stars: 5, distanceKm: 1.5, features: ["Restaurant", "Spa", "Gym", "Bar"], pool: true, wifi: true, pricePerNight: "€150" },
        { name: "Hotel Máchova", stars: 3, distanceKm: 2, features: ["Breakfast Included", "Parking"], pool: false, wifi: true, pricePerNight: "€55" },
        { name: "Mosaic House", stars: 3, distanceKm: 1.2, features: ["Bar", "Breakfast Included", "Pet Friendly"], pool: false, wifi: true, pricePerNight: "€60" },
        { name: "Grand Hotel Bohemia", stars: 5, distanceKm: 0.5, features: ["Restaurant", "Bar", "Room Service", "Conference Room"], pool: false, wifi: true, pricePerNight: "€130" }
      ],
    nearbyRestaurants: [
        { name: "Lokál Dlouhááá", cuisine: "Czech Traditional", distanceKm: 0.5, priceRange: "€", rating: 4.5, vegetarian: true, outdoor: false },
        { name: "La Degustation Bohême Bourgeoise", cuisine: "Czech Fine Dining", distanceKm: 0.8, priceRange: "€€€€", rating: 4.8, vegetarian: true, outdoor: false },
        { name: "Pasta Fresca", cuisine: "Italian", distanceKm: 0.3, priceRange: "€€", rating: 4.3, vegetarian: true, outdoor: true },
        { name: "Café Savoy", cuisine: "French-Czech", distanceKm: 1, priceRange: "€€€", rating: 4.6, vegetarian: true, outdoor: true },
        { name: "Kantýna", cuisine: "Steak & Grill", distanceKm: 0.6, priceRange: "€€", rating: 4.4, vegetarian: false, outdoor: false }
      ],
    nearbyMedical: [
        { name: "Všeobecná fakultní nemocnice (VFN)", type: "Hospital", distanceKm: 2, phone: "+420 224 961 111", emergency: true },
        { name: "Canadian Medical Care Prague", type: "Sports Medicine", distanceKm: 3, phone: "+420 235 360 133", emergency: false },
        { name: "Klinika Malvazinky", type: "Physiotherapy", distanceKm: 4, phone: "+420 251 116 111", emergency: false }
      ],
    costOfLiving: { rent1Bed: "€650", meal: "€8", monthlyFood: "€280", transport: "€25", currency: "CZK", summary: "Moderate by Western European standards; rising rents in the capital" },
    scholarships: { available: true, details: "Scholarship support available through one of the oldest tennis clubs in Czech Republic." },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: "EU/EEA citizens have freedom of movement. USA, Canada, Australia, UK — visa-free up to 90 days in Schengen area", notes: "Schengen visa allows travel across 27 European countries. Long-term student visa available for extended programs." },
    airportTransfers: [
        { mode: "Taxi", duration: "30 min", cost: "€25–30", notes: "From Václav Havel Airport (PRG), use AAA or Liftago" },
        { mode: "Bus + Metro", duration: "50 min", cost: "€1.50", notes: "Bus 119 to Nádraží Veleslavín, then metro" },
        { mode: "Private Transfer", duration: "25 min", cost: "€30–45", notes: "Pre-book online, fixed price" }
      ],
    nearbyTournaments: [
        { name: "Livesport Prague Open", level: "WTA 250", surface: "Clay", month: "July", venue: "TK Sparta Praha" },
        { name: "Prague Junior Open", level: "ITF Junior", surface: "Clay", month: "May", venue: "CLTK Praha" },
        { name: "Czech Indoor Championships", level: "National", surface: "Hard", month: "November", venue: "Prague" }
      ],
    videoTour: null,
    juniorInfo: {
      minAge: 18,
      maxAge: null,
      supervision: 'none',
      guardianStay: false,
      schooling: 'none',
      medicalStaff: false,
      safeguarding: false,
      airportPickup: false,
      mealPlan: 'self-catering',
      curfew: null,
      roommatePairing: 'self-select',
      languageSupport: ['English'],
      emergencyProtocol: false
    }
  },
  {
    id: "love4tennis",
    availability: { status: 'open', nextIntake: '2025-09-01', spotsLeft: 8, responseTime: '24h', privateLessons: false, yearRound: true },
    name: "Love4Tennis — Dominika Cibulková Academy",
    country: "Slovakia",
    countryFlag: "🇸🇰",
    city: "Bratislava",
    lat: 48.1486, lng: 17.1077,
    website: "https://love4tennis.com/",
    contactEmail: "info@love4tennis.com",
    individualLessons: true,
    boarding: true,
    level: "Elite",
    starred: true,
    airport: { name: "M. R. Štefánik Airport Bratislava", code: "BTS", distance: "9 km", driveTime: "15 min" },
    beach: { distance: null, description: "Landlocked — Adriatic ~530 km / ~6 hrs drive. Also Vienna VIE ~60 km." },
    climate: "bratislava",
    priceRange: { from: null, to: null, unit: "month", display: "Contact for pricing" },
    programs: [
      { name: "Professional Annual", price: "Contact", desc: "Full-service: sparring, fitness, regeneration, tutoring, accommodation" },
      { name: "Kids Tennis", price: "Contact", desc: "Ages 5–12" },
      { name: "US Scholarship Program", price: "Contact", desc: "Tennis + US university studies" },
      { name: "Tennis Camp", price: "Contact", desc: "Advanced players 10+, summer" },
      { name: "Online Training", price: "Contact", desc: "Fitness, tennis, mental coaching" }
    ],
    coaches: [
      { name: "Dominika Cibulková", credential: "Founder / Former WTA Player", background: "WTA #4 (2014 Australian Open finalist, 2016 WTA Finals champion)", atpWta: true, bestRanking: 4, rankingNote: "WTA #4", languages: ["Slovak", "English", "Czech"], instagram: "domicibulkova" }
    ],
    bestCoachRanking: 4,
    facilities: "Full-service academy. 60+ pro players from 15 countries. 5 in ATP/WTA TOP 100.",
    courtSurfaces: ["Clay", "Hard", "Indoor Hard"],
    notableAlumni: ["Elena Rybakina (WTA #3, Wimbledon champion)", "Filip Polášek (ATP #1 doubles)", "Lukáš Lacko (ATP #64)", "Kristína Kučová (WTA #67)"],
    description: "Named after Dominika Cibulková (WTA #4). One of Europe's best academies. Rybakina as alumna.",
    nearbyHotels: [
        { name: "Grand Hotel River Park", stars: 5, distanceKm: 1, features: ["Restaurant", "Spa", "Gym", "Bar"], pool: true, wifi: true, pricePerNight: "€140" },
        { name: "Hotel Marrol's", stars: 5, distanceKm: 0.5, features: ["Restaurant", "Spa", "Bar", "Room Service"], pool: false, wifi: true, pricePerNight: "€120" },
        { name: "Loft Hotel Bratislava", stars: 4, distanceKm: 0.8, features: ["Restaurant", "Bar", "Parking"], pool: false, wifi: true, pricePerNight: "€75" },
        { name: "Hotel Kyjev", stars: 3, distanceKm: 0.3, features: ["Restaurant", "Bar"], pool: false, wifi: true, pricePerNight: "€50" },
        { name: "Austria Trend Hotel Bratislava", stars: 4, distanceKm: 1.2, features: ["Restaurant", "Gym", "Parking", "Conference Room"], pool: false, wifi: true, pricePerNight: "€85" }
      ],
    nearbyRestaurants: [
        { name: "Modrá Hviezda", cuisine: "Slovak Traditional", distanceKm: 0.3, priceRange: "€€", rating: 4.5, vegetarian: true, outdoor: true },
        { name: "Flagship Restaurant", cuisine: "Fine Dining", distanceKm: 0.5, priceRange: "€€€€", rating: 4.7, vegetarian: true, outdoor: false },
        { name: "Trattoria Piatto", cuisine: "Italian", distanceKm: 0.4, priceRange: "€€", rating: 4.3, vegetarian: true, outdoor: true },
        { name: "Slovak Pub", cuisine: "Slovak", distanceKm: 0.2, priceRange: "€", rating: 4.1, vegetarian: true, outdoor: false },
        { name: "Zylinder Café & Restaurant", cuisine: "International", distanceKm: 0.6, priceRange: "€€€", rating: 4.4, vegetarian: true, outdoor: true }
      ],
    nearbyMedical: [
        { name: "Univerzitná nemocnica Bratislava", type: "Hospital", distanceKm: 3, phone: "+421 2 5954 1111", emergency: true },
        { name: "Nemocnica sv. Michala", type: "Hospital", distanceKm: 2, phone: "+421 2 3266 2030", emergency: true },
        { name: "ProRecovery Bratislava", type: "Physiotherapy", distanceKm: 2.5, phone: "+421 2 5441 5280", emergency: false }
      ],
    costOfLiving: { rent1Bed: "€550", meal: "€8", monthlyFood: "€260", transport: "€30", currency: "EUR", summary: "Moderate cost of living; cheaper than Vienna but rising" },
    scholarships: { available: true, details: "Merit-based scholarships for top junior players. Contact for evaluation criteria." },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: "EU/EEA citizens have freedom of movement. USA, Canada, Australia, UK — visa-free up to 90 days in Schengen area", notes: "Schengen visa allows travel across 27 European countries. Long-term student visa available for extended programs." },
    airportTransfers: [
        { mode: "Taxi", duration: "15 min", cost: "€10–15", notes: "From Bratislava Airport (BTS)" },
        { mode: "Bus", duration: "30 min", cost: "€1.50", notes: "Bus 61 from airport to city center" },
        { mode: "Private Transfer", duration: "15 min", cost: "€15–25", notes: "Pre-book online" }
      ],
    nearbyTournaments: [
        { name: "Bratislava Open", level: "ITF", surface: "Clay", month: "June", venue: "NTC Bratislava" },
        { name: "Slovak Open Junior", level: "ITF Junior", surface: "Clay", month: "July", venue: "Bratislava" },
        { name: "Slovak National Championships", level: "National", surface: "Clay", month: "August", venue: "NTC Bratislava" }
      ],
    videoTour: null,
    juniorInfo: {
      minAge: 7,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'partner-school',
      medicalStaff: true,
      safeguarding: true,
      airportPickup: true,
      mealPlan: 'full-board',
      curfew: '21:00',
      roommatePairing: 'age-gender',
      languageSupport: ['English', 'Slovak'],
      emergencyProtocol: true
    }
  },
  {
    id: "hta-academy",
    availability: { status: 'waitlist', nextIntake: '2025-11-01', spotsLeft: null, responseTime: '48h', privateLessons: true, yearRound: false },
    name: "HTA Academy",
    country: "Slovakia",
    countryFlag: "🇸🇰",
    city: "Bratislava",
    lat: 48.1486, lng: 17.1077,
    website: "https://htaacademy.sk/en/home-2/",
    contactEmail: "info@htaacademy.sk",
    individualLessons: true,
    boarding: false,
    level: "Recreational",
    starred: false,
    airport: { name: "M. R. Štefánik Airport Bratislava", code: "BTS", distance: "9 km", driveTime: "15 min" },
    beach: { distance: null, description: "Landlocked — Adriatic ~530 km" },
    climate: "bratislava",
    priceRange: { from: 37, to: 45, unit: "hour", display: "€37–€45/hr" },
    programs: [
      { name: "Children (from age 3)", price: "Varies", desc: "Early development" },
      { name: "Adult Training", price: "€37-45/hr", desc: "Individual and group" }
    ],
    coaches: [],
    bestCoachRanking: null,
    facilities: "Community-focused, equipment rental included",
    courtSurfaces: ["Clay", "Hard"],
    notableAlumni: [],
    description: "Affordable individual lessons from €37/hr. Children from age 3, adults, group training.",
    nearbyHotels: [
        { name: "Grand Hotel River Park", stars: 5, distanceKm: 1, features: ["Restaurant", "Spa", "Gym", "Bar"], pool: true, wifi: true, pricePerNight: "€140" },
        { name: "Hotel Marrol's", stars: 5, distanceKm: 0.5, features: ["Restaurant", "Spa", "Bar", "Room Service"], pool: false, wifi: true, pricePerNight: "€120" },
        { name: "Loft Hotel Bratislava", stars: 4, distanceKm: 0.8, features: ["Restaurant", "Bar", "Parking"], pool: false, wifi: true, pricePerNight: "€75" },
        { name: "Hotel Kyjev", stars: 3, distanceKm: 0.3, features: ["Restaurant", "Bar"], pool: false, wifi: true, pricePerNight: "€50" },
        { name: "Austria Trend Hotel Bratislava", stars: 4, distanceKm: 1.2, features: ["Restaurant", "Gym", "Parking", "Conference Room"], pool: false, wifi: true, pricePerNight: "€85" }
      ],
    nearbyRestaurants: [
        { name: "Modrá Hviezda", cuisine: "Slovak Traditional", distanceKm: 0.3, priceRange: "€€", rating: 4.5, vegetarian: true, outdoor: true },
        { name: "Flagship Restaurant", cuisine: "Fine Dining", distanceKm: 0.5, priceRange: "€€€€", rating: 4.7, vegetarian: true, outdoor: false },
        { name: "Trattoria Piatto", cuisine: "Italian", distanceKm: 0.4, priceRange: "€€", rating: 4.3, vegetarian: true, outdoor: true },
        { name: "Slovak Pub", cuisine: "Slovak", distanceKm: 0.2, priceRange: "€", rating: 4.1, vegetarian: true, outdoor: false },
        { name: "Zylinder Café & Restaurant", cuisine: "International", distanceKm: 0.6, priceRange: "€€€", rating: 4.4, vegetarian: true, outdoor: true }
      ],
    nearbyMedical: [
        { name: "Univerzitná nemocnica Bratislava", type: "Hospital", distanceKm: 3, phone: "+421 2 5954 1111", emergency: true },
        { name: "Nemocnica sv. Michala", type: "Hospital", distanceKm: 2, phone: "+421 2 3266 2030", emergency: true },
        { name: "ProRecovery Bratislava", type: "Physiotherapy", distanceKm: 2.5, phone: "+421 2 5441 5280", emergency: false }
      ],
    costOfLiving: { rent1Bed: "€550", meal: "€8", monthlyFood: "€260", transport: "€30", currency: "EUR", summary: "Moderate cost of living; cheaper than Vienna but rising" },
    scholarships: { available: false, details: "No formal scholarship program currently. Contact for group and long-term rates." },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: "EU/EEA citizens have freedom of movement. USA, Canada, Australia, UK — visa-free up to 90 days in Schengen area", notes: "Schengen visa allows travel across 27 European countries. Long-term student visa available for extended programs." },
    airportTransfers: [
        { mode: "Taxi", duration: "15 min", cost: "€10–15", notes: "From Bratislava Airport (BTS)" },
        { mode: "Bus", duration: "30 min", cost: "€1.50", notes: "Bus 61 from airport to city center" },
        { mode: "Private Transfer", duration: "15 min", cost: "€15–25", notes: "Pre-book online" }
      ],
    nearbyTournaments: [
        { name: "Bratislava Open", level: "ITF", surface: "Clay", month: "June", venue: "NTC Bratislava" },
        { name: "Slovak Open Junior", level: "ITF Junior", surface: "Clay", month: "July", venue: "Bratislava" },
        { name: "Slovak National Championships", level: "National", surface: "Clay", month: "August", venue: "NTC Bratislava" }
      ],
    videoTour: null,
    juniorInfo: {
      minAge: 12,
      maxAge: 18,
      supervision: 'training-only',
      guardianStay: false,
      schooling: 'none',
      medicalStaff: true,
      safeguarding: true,
      airportPickup: true,
      mealPlan: 'full-board',
      curfew: '22:00',
      roommatePairing: 'age-only',
      languageSupport: ['English', 'Slovak'],
      emergencyProtocol: true
    }
  },
  {
    id: "tenis-kozerki",
    availability: { status: 'limited', nextIntake: '2025-10-01', spotsLeft: 5, responseTime: '48h', privateLessons: true, yearRound: true },
    name: "Tenis Kozerki Tennis Academy",
    country: "Poland",
    countryFlag: "🇵🇱",
    city: "Kozerki (near Warsaw)",
    lat: 52.2297, lng: 21.0122,
    website: "https://www.teniskozerki.pl/?lang=en",
    contactEmail: "info@teniskozerki.pl",
    individualLessons: true,
    boarding: true,
    level: "All levels",
    starred: true,
    airport: { name: "Warsaw Chopin Airport", code: "WAW", distance: "38 km", driveTime: "30 min" },
    beach: { distance: null, description: "Baltic Sea (Gdańsk) ~370 km / ~4.5 hrs drive" },
    climate: "warsaw",
    priceRange: { from: null, to: null, unit: "month", display: "Contact for pricing" },
    programs: [
      { name: "Full School Year Stay", price: "Contact", desc: "Ages 14-18, 10-month residential" },
      { name: "Monthly/Weekly Stays", price: "Contact", desc: "Ages 12-20" },
      { name: "Professional Players", price: "Contact", desc: "European tour base between ATP/WTA tournaments" },
      { name: "Summer Camps", price: "Contact", desc: "U12/U14, U16/U18" }
    ],
    coaches: [],
    bestCoachRanking: 40,
    facilities: "21 courts, sports hall, gym, cryocabin, saunas, pools, padel, squash, hotel, 3,000-seat stands",
    courtSurfaces: ["Clay", "Hard", "Indoor Hard", "Carpet"],
    notableAlumni: [],
    description: "Most modern tennis complex in Poland. Coach connection to Linda Ferrando (WTA #40). Hosts ITF/WTA/ATP tournaments.",
    nearbyHotels: [
        { name: "Hotel Narvil", stars: 4, distanceKm: 15, features: ["Restaurant", "Spa", "Gym", "Parking"], pool: true, wifi: true, pricePerNight: "€80" },
        { name: "Hotel Maraton", stars: 3, distanceKm: 5, features: ["Restaurant", "Parking", "Tennis Court"], pool: false, wifi: true, pricePerNight: "€45" },
        { name: "Villa Nobilitas", stars: 3, distanceKm: 3, features: ["Breakfast Included", "Parking", "Pet Friendly"], pool: false, wifi: true, pricePerNight: "€40" },
        { name: "Leśny Dwór", stars: 3, distanceKm: 8, features: ["Restaurant", "Parking", "Bar"], pool: false, wifi: true, pricePerNight: "€50" },
        { name: "Hotel Margerita", stars: 2, distanceKm: 4, features: ["Breakfast Included", "Parking"], pool: false, wifi: true, pricePerNight: "€30" }
      ],
    nearbyRestaurants: [
        { name: "Restauracja Stary Dom", cuisine: "Polish Traditional", distanceKm: 3, priceRange: "€€", rating: 4.3, vegetarian: true, outdoor: true },
        { name: "Oberża Pod Czerwonym Kogutem", cuisine: "Polish", distanceKm: 5, priceRange: "€€€", rating: 4.5, vegetarian: true, outdoor: true },
        { name: "Pizzeria Bella", cuisine: "Italian", distanceKm: 4, priceRange: "€", rating: 4, vegetarian: true, outdoor: false },
        { name: "Karczma Jaskółka", cuisine: "Polish Country", distanceKm: 6, priceRange: "€", rating: 4.2, vegetarian: true, outdoor: true },
        { name: "Restauracja Pałacowa", cuisine: "Fine Dining", distanceKm: 8, priceRange: "€€€€", rating: 4.6, vegetarian: true, outdoor: true }
      ],
    nearbyMedical: [
        { name: "Szpital Grochowski", type: "Hospital", distanceKm: 15, phone: "+48 22 518 81 00", emergency: true },
        { name: "Carolina Medical Center", type: "Sports Medicine", distanceKm: 18, phone: "+48 22 354 67 00", emergency: false },
        { name: "Fizjoterapia Kozerki", type: "Physiotherapy", distanceKm: 2, phone: "+48 22 757 00 10", emergency: false }
      ],
    costOfLiving: { rent1Bed: "€500", meal: "€7", monthlyFood: "€250", transport: "€30", currency: "PLN", summary: "Suburban Warsaw area; slightly cheaper than central Warsaw" },
    scholarships: { available: true, details: "Scholarships available for talented Polish juniors. Contact academy for details." },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: "EU/EEA citizens have freedom of movement. USA, Canada, Australia, UK — visa-free up to 90 days in Schengen area", notes: "Schengen visa allows travel across 27 European countries. Long-term student visa available for extended programs." },
    airportTransfers: [
        { mode: "Taxi", duration: "40 min", cost: "€25–35", notes: "From Warsaw Chopin Airport (WAW)" },
        { mode: "Train + Taxi", duration: "1 hr", cost: "€8–12", notes: "Train to Grodzisk Mazowiecki, then taxi" },
        { mode: "Private Transfer", duration: "35 min", cost: "€35–50", notes: "Pre-book from Warsaw airport" }
      ],
    nearbyTournaments: [
        { name: "Kozerki Open", level: "ITF", surface: "Clay", month: "June", venue: "Tenis Kozerki" },
        { name: "Warsaw Junior Cup", level: "ITF Junior", surface: "Clay", month: "July", venue: "Legia Warsaw" }
      ],
    accommodation: {
      types: [
        { type: 'private', label: 'Private Room', pricePerWeek: 220, maxOccupancy: 1, bathType: 'ensuite', mealsIncluded: true },
        { type: 'twin', label: 'Twin Shared Room', pricePerWeek: 145, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'triple', label: 'Triple Room', pricePerWeek: 110, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true },
        { type: 'quad', label: 'Quad Room', pricePerWeek: 85, maxOccupancy: 4, bathType: 'shared', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: 1,
      shuttleToTraining: true,
      notes: 'Modern residence near the academy grounds. Breakfast and lunch included for private and twin rooms.'
    },
    videoTour: "https://www.youtube.com/watch?v=q-gXdB1N1w8",
    juniorInfo: {
      minAge: 6,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'partner-school',
      medicalStaff: true,
      safeguarding: true,
      airportPickup: true,
      mealPlan: 'full-board',
      curfew: '21:00',
      roommatePairing: 'age-gender',
      languageSupport: ['English', 'Polish'],
      emergencyProtocol: true
    }
  },
  {
    id: "vicio-fede",
    availability: { status: 'limited', nextIntake: '2025-10-01', spotsLeft: 5, responseTime: '48h', privateLessons: true, yearRound: true },
    name: "Vicio & Fede Tennis (Breakpoint Warsaw)",
    country: "Poland",
    countryFlag: "🇵🇱",
    city: "Warsaw",
    lat: 52.2297, lng: 21.0122,
    website: "https://tenniswarszawa.pl/",
    contactEmail: "info@tenniswarszawa.pl",
    individualLessons: true,
    boarding: false,
    level: "All levels",
    starred: false,
    airport: { name: "Warsaw Chopin Airport", code: "WAW", distance: "10 km", driveTime: "20 min" },
    beach: { distance: null, description: "Baltic Sea (Gdańsk) ~340 km / ~4 hrs drive" },
    climate: "warsaw",
    priceRange: { from: 32, to: 41, unit: "hour", display: "~€32–€41/hr" },
    programs: [
      { name: "Private Lessons", price: "140 PLN (~€32)", desc: "1-on-1" },
      { name: "Group (3-4)", price: "180 PLN (~€41) total", desc: "Shared cost" }
    ],
    coaches: [
      { name: "Federico", credential: "Coach", background: "Trained alongside Linda Ferrando (WTA #40)", atpWta: false, bestRanking: null, languages: ["Italian", "English", "German", "Polish"], instagram: null }
    ],
    bestCoachRanking: null,
    facilities: "Multiple court locations across Warsaw. Languages: EN, IT, DE, PL",
    courtSurfaces: ["Clay", "Hard"],
    notableAlumni: [],
    description: "International coaching in English. Ideal for expats. Affordable private lessons from ~€32/hr.",
    nearbyHotels: [
        { name: "Hotel Bristol Warsaw", stars: 5, distanceKm: 0.5, features: ["Restaurant", "Spa", "Bar", "Room Service"], pool: true, wifi: true, pricePerNight: "€160" },
        { name: "Novotel Warszawa Centrum", stars: 4, distanceKm: 1, features: ["Restaurant", "Gym", "Bar", "Parking"], pool: true, wifi: true, pricePerNight: "€85" },
        { name: "Hotel Ibis Warszawa Stare Miasto", stars: 2, distanceKm: 0.8, features: ["Bar", "Parking"], pool: false, wifi: true, pricePerNight: "€45" },
        { name: "Sofitel Warsaw Victoria", stars: 5, distanceKm: 0.3, features: ["Restaurant", "Spa", "Gym", "Bar"], pool: true, wifi: true, pricePerNight: "€140" },
        { name: "Hotel Warszawa", stars: 3, distanceKm: 1.5, features: ["Restaurant", "Bar", "Parking"], pool: false, wifi: true, pricePerNight: "€55" }
      ],
    nearbyRestaurants: [
        { name: "Zapiecek", cuisine: "Polish Traditional", distanceKm: 0.3, priceRange: "€", rating: 4.3, vegetarian: true, outdoor: true },
        { name: "Atelier Amaro", cuisine: "Polish Fine Dining", distanceKm: 0.8, priceRange: "€€€€", rating: 4.8, vegetarian: true, outdoor: false },
        { name: "Wook", cuisine: "Asian Fusion", distanceKm: 0.5, priceRange: "€€€", rating: 4.5, vegetarian: true, outdoor: false },
        { name: "Trattoria da Antonio", cuisine: "Italian", distanceKm: 0.4, priceRange: "€€", rating: 4.4, vegetarian: true, outdoor: true },
        { name: "Bar Mleczny Familijny", cuisine: "Polish Cafeteria", distanceKm: 0.6, priceRange: "€", rating: 4, vegetarian: true, outdoor: false }
      ],
    nearbyMedical: [
        { name: "Centralny Szpital Kliniczny MSWiA", type: "Hospital", distanceKm: 3, phone: "+48 22 508 10 00", emergency: true },
        { name: "Carolina Medical Center", type: "Sports Medicine", distanceKm: 5, phone: "+48 22 354 67 00", emergency: false },
        { name: "Rehasport Clinic Warsaw", type: "Physiotherapy", distanceKm: 4, phone: "+48 22 201 20 20", emergency: false }
      ],
    costOfLiving: { rent1Bed: "€550", meal: "€7", monthlyFood: "€250", transport: "€25", currency: "PLN", summary: "Affordable European capital; good value for Western expats" },
    scholarships: { available: false, details: "No formal scholarship program currently. Contact for pricing packages." },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: "EU/EEA citizens have freedom of movement. USA, Canada, Australia, UK — visa-free up to 90 days in Schengen area", notes: "Schengen visa allows travel across 27 European countries. Long-term student visa available for extended programs." },
    airportTransfers: [
        { mode: "Taxi", duration: "25 min", cost: "€15–20", notes: "From Warsaw Chopin Airport (WAW)" },
        { mode: "Train", duration: "25 min", cost: "€4", notes: "SKM/KM train to city center" },
        { mode: "Private Transfer", duration: "20 min", cost: "€20–30", notes: "Pre-book online" }
      ],
    nearbyTournaments: [
        { name: "Warsaw Open", level: "ITF", surface: "Clay", month: "June", venue: "Legia Warsaw Tennis" },
        { name: "Polish National Championships", level: "National", surface: "Clay", month: "August", venue: "Warsaw" },
        { name: "Legia Cup Junior", level: "ITF Junior", surface: "Clay", month: "July", venue: "KT Mera Legia" }
      ],
    videoTour: null,
    juniorInfo: {
      minAge: 13,
      maxAge: 18,
      supervision: 'daytime',
      guardianStay: true,
      schooling: 'tutoring',
      medicalStaff: false,
      safeguarding: true,
      airportPickup: false,
      mealPlan: 'flexible',
      curfew: '22:00',
      roommatePairing: 'age-only',
      languageSupport: ['English', 'Polish'],
      emergencyProtocol: true
    }
  },
  {
    id: "mera-legia",
    availability: { status: 'open', nextIntake: '2025-08-01', spotsLeft: 5, responseTime: '3-5 days', privateLessons: true, yearRound: false },
    name: "WKT Mera Warsaw & Legia Warsaw Tennis",
    country: "Poland",
    countryFlag: "🇵🇱",
    city: "Warsaw",
    lat: 52.2297, lng: 21.0122,
    website: null,
    contactEmail: "info@meralegia.com",
    individualLessons: true,
    boarding: false,
    level: "Junior/Dev",
    starred: false,
    airport: { name: "Warsaw Chopin Airport", code: "WAW", distance: "10 km", driveTime: "20 min" },
    beach: { distance: null, description: "Baltic Sea (Gdańsk) ~340 km / ~4 hrs drive" },
    climate: "warsaw",
    priceRange: { from: null, to: null, unit: "month", display: "Contact for pricing" },
    programs: [],
    coaches: [],
    bestCoachRanking: null,
    facilities: "Premier Polish multi-sport clubs",
    courtSurfaces: ["Clay", "Hard", "Indoor Hard"],
    notableAlumni: ["Iga Świątek (WTA #1, 5× Grand Slam champion)"],
    description: "Where Iga Świątek trained as a junior (Mera) and continued at age 14 (Legia).",
    nearbyHotels: [
        { name: "Hotel Bristol Warsaw", stars: 5, distanceKm: 0.5, features: ["Restaurant", "Spa", "Bar", "Room Service"], pool: true, wifi: true, pricePerNight: "€160" },
        { name: "Novotel Warszawa Centrum", stars: 4, distanceKm: 1, features: ["Restaurant", "Gym", "Bar", "Parking"], pool: true, wifi: true, pricePerNight: "€85" },
        { name: "Hotel Ibis Warszawa Stare Miasto", stars: 2, distanceKm: 0.8, features: ["Bar", "Parking"], pool: false, wifi: true, pricePerNight: "€45" },
        { name: "Sofitel Warsaw Victoria", stars: 5, distanceKm: 0.3, features: ["Restaurant", "Spa", "Gym", "Bar"], pool: true, wifi: true, pricePerNight: "€140" },
        { name: "Hotel Warszawa", stars: 3, distanceKm: 1.5, features: ["Restaurant", "Bar", "Parking"], pool: false, wifi: true, pricePerNight: "€55" }
      ],
    nearbyRestaurants: [
        { name: "Zapiecek", cuisine: "Polish Traditional", distanceKm: 0.3, priceRange: "€", rating: 4.3, vegetarian: true, outdoor: true },
        { name: "Atelier Amaro", cuisine: "Polish Fine Dining", distanceKm: 0.8, priceRange: "€€€€", rating: 4.8, vegetarian: true, outdoor: false },
        { name: "Wook", cuisine: "Asian Fusion", distanceKm: 0.5, priceRange: "€€€", rating: 4.5, vegetarian: true, outdoor: false },
        { name: "Trattoria da Antonio", cuisine: "Italian", distanceKm: 0.4, priceRange: "€€", rating: 4.4, vegetarian: true, outdoor: true },
        { name: "Bar Mleczny Familijny", cuisine: "Polish Cafeteria", distanceKm: 0.6, priceRange: "€", rating: 4, vegetarian: true, outdoor: false }
      ],
    nearbyMedical: [
        { name: "Centralny Szpital Kliniczny MSWiA", type: "Hospital", distanceKm: 3, phone: "+48 22 508 10 00", emergency: true },
        { name: "Carolina Medical Center", type: "Sports Medicine", distanceKm: 5, phone: "+48 22 354 67 00", emergency: false },
        { name: "Rehasport Clinic Warsaw", type: "Physiotherapy", distanceKm: 4, phone: "+48 22 201 20 20", emergency: false }
      ],
    costOfLiving: { rent1Bed: "€550", meal: "€7", monthlyFood: "€250", transport: "€25", currency: "PLN", summary: "Affordable European capital; good value for Western expats" },
    scholarships: { available: true, details: "Scholarships available through Legia Warsaw sports foundation for promising juniors." },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: "EU/EEA citizens have freedom of movement. USA, Canada, Australia, UK — visa-free up to 90 days in Schengen area", notes: "Schengen visa allows travel across 27 European countries. Long-term student visa available for extended programs." },
    airportTransfers: [
        { mode: "Taxi", duration: "25 min", cost: "€15–20", notes: "From Warsaw Chopin Airport (WAW)" },
        { mode: "Train", duration: "25 min", cost: "€4", notes: "SKM/KM train to city center" },
        { mode: "Private Transfer", duration: "20 min", cost: "€20–30", notes: "Pre-book online" }
      ],
    nearbyTournaments: [
        { name: "Warsaw Open", level: "ITF", surface: "Clay", month: "June", venue: "Legia Warsaw Tennis" },
        { name: "Polish National Championships", level: "National", surface: "Clay", month: "August", venue: "Warsaw" },
        { name: "Legia Cup Junior", level: "ITF Junior", surface: "Clay", month: "July", venue: "KT Mera Legia" }
      ],
    videoTour: null,
    juniorInfo: {
      minAge: 18,
      maxAge: null,
      supervision: 'none',
      guardianStay: false,
      schooling: 'none',
      medicalStaff: false,
      safeguarding: false,
      airportPickup: false,
      mealPlan: 'self-catering',
      curfew: null,
      roommatePairing: 'self-select',
      languageSupport: ['English'],
      emergencyProtocol: false
    }
  },
  {
    id: "hanescu-academy",
    availability: { status: 'open', nextIntake: '2025-05-15', spotsLeft: 17, responseTime: '24h', privateLessons: false, yearRound: false },
    name: "Victor Hănescu Academy (AVH)",
    country: "Romania",
    countryFlag: "🇷🇴",
    city: "Bucharest",
    lat: 44.4268, lng: 26.1025,
    website: "https://www.academiavictorhanescu.ro/?lng=en",
    contactEmail: "info@academiavictorhanescu.ro",
    individualLessons: true,
    boarding: false,
    level: "Junior/Pro",
    starred: true,
    airport: { name: "Henri Coandă International Airport", code: "OTP", distance: "18 km", driveTime: "25 min" },
    beach: { distance: null, description: "Black Sea coast (Constanța) — ~225 km / 2.5h drive" },
    climate: "bucharest",
    priceRange: { from: null, to: null, unit: "month", display: "Contact for pricing" },
    programs: [
      { name: "AVH Kids / Mini Tennis", price: "Contact", desc: "Monthly tournaments" },
      { name: "Junior Development", price: "Contact", desc: "Long-term athlete development" },
      { name: "Performance", price: "Contact", desc: "Mental, emotional, physical preparation" }
    ],
    coaches: [
      { name: "Victor Hănescu", credential: "Former ATP Player", background: "ATP #26 (2007), Romanian No. 1", atpWta: true, bestRanking: 26, rankingNote: "ATP #26", languages: ["Romanian", "English", "French"], instagram: "victorhanescu" }
    ],
    bestCoachRanking: 26,
    facilities: "Professional courts in Bucharest",
    courtSurfaces: ["Clay", "Hard"],
    notableAlumni: [],
    description: "Founded by Victor Hănescu (ATP #26). Long-term sports development philosophy.",
    nearbyHotels: [
        { name: "Athenee Palace Hilton", stars: 5, distanceKm: 0.5, features: ["Restaurant", "Spa", "Gym", "Bar"], pool: true, wifi: true, pricePerNight: "€130" },
        { name: "Radisson Blu Hotel Bucharest", stars: 5, distanceKm: 1, features: ["Restaurant", "Spa", "Bar", "Room Service"], pool: true, wifi: true, pricePerNight: "€110" },
        { name: "Hotel Rembrandt", stars: 3, distanceKm: 0.8, features: ["Restaurant", "Bar", "Parking"], pool: false, wifi: true, pricePerNight: "€50" },
        { name: "Hotel Venezia", stars: 3, distanceKm: 1.2, features: ["Restaurant", "Parking", "Breakfast Included"], pool: false, wifi: true, pricePerNight: "€45" },
        { name: "InterContinental Bucharest", stars: 5, distanceKm: 0.3, features: ["Restaurant", "Spa", "Gym", "Bar"], pool: true, wifi: true, pricePerNight: "€120" }
      ],
    nearbyRestaurants: [
        { name: "Caru' cu Bere", cuisine: "Romanian Traditional", distanceKm: 0.5, priceRange: "€€", rating: 4.5, vegetarian: true, outdoor: true },
        { name: "The Artist", cuisine: "Fine Dining", distanceKm: 0.3, priceRange: "€€€€", rating: 4.7, vegetarian: true, outdoor: false },
        { name: "Trattoria Il Calcio", cuisine: "Italian", distanceKm: 0.4, priceRange: "€€", rating: 4.3, vegetarian: true, outdoor: true },
        { name: "Lacrimi și Sfinți", cuisine: "Romanian Modern", distanceKm: 0.6, priceRange: "€€€", rating: 4.6, vegetarian: true, outdoor: true },
        { name: "Dristor Kebab", cuisine: "Turkish", distanceKm: 0.8, priceRange: "€", rating: 4.1, vegetarian: false, outdoor: false }
      ],
    nearbyMedical: [
        { name: "Spitalul Universitar de Urgență București", type: "Hospital", distanceKm: 3, phone: "+40 21 318 0522", emergency: true },
        { name: "Regina Maria – Baneasa Clinic", type: "Hospital", distanceKm: 5, phone: "+40 21 9268", emergency: true },
        { name: "Kinetic Sport & Medicine", type: "Sports Medicine", distanceKm: 4, phone: "+40 21 312 5125", emergency: false }
      ],
    costOfLiving: { rent1Bed: "€450", meal: "€7", monthlyFood: "€250", transport: "€20", currency: "RON", summary: "Very affordable EU capital; significantly cheaper than Western Europe" },
    scholarships: { available: true, details: "Merit-based scholarships for top Romanian and international juniors. Founded by former ATP Top-20 player." },
    visaInfo: { schengen: false, eu: true, visaFreeCountries: "EU/EEA citizens have freedom of movement. USA, Canada, Australia, UK — visa-free up to 90 days", notes: "Romania is an EU member but not yet in the Schengen Area. Non-EU citizens may need a national visa for stays over 90 days." },
    airportTransfers: [
        { mode: "Taxi", duration: "25 min", cost: "€10–15", notes: "From Henri Coandă Airport (OTP), use Bolt or licensed taxis" },
        { mode: "Bus", duration: "40 min", cost: "€1", notes: "Express bus 783 to city center" },
        { mode: "Private Transfer", duration: "20 min", cost: "€20–30", notes: "Pre-book online" }
      ],
    nearbyTournaments: [
        { name: "Transylvania Open", level: "WTA 250", surface: "Hard", month: "October", venue: "BT Arena, Cluj" },
        { name: "Bucharest Open", level: "ITF", surface: "Clay", month: "July", venue: "Arenele BNR" },
        { name: "Romanian Junior Nationals", level: "National Junior", surface: "Clay", month: "August", venue: "Bucharest" }
      ],
    accommodation: {
      types: [
        { type: 'private', label: 'Private Room', pricePerWeek: 190, maxOccupancy: 1, bathType: 'ensuite', mealsIncluded: true },
        { type: 'twin', label: 'Twin Shared Room', pricePerWeek: 130, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'triple', label: 'Triple Room', pricePerWeek: 95, maxOccupancy: 3, bathType: 'shared', mealsIncluded: false },
        { type: 'dorm', label: 'Dormitory (4–6 beds)', pricePerWeek: 60, maxOccupancy: 6, bathType: 'shared', mealsIncluded: false }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: 1,
      shuttleToTraining: false,
      notes: 'Rooms in nearby guesthouse. Affordable dining options within walking distance of the academy.'
    },
    videoTour: null,
    juniorInfo: {
      minAge: 6,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'tutoring',
      medicalStaff: true,
      safeguarding: true,
      airportPickup: true,
      mealPlan: 'full-board',
      curfew: '21:00',
      roommatePairing: 'age-gender',
      languageSupport: ['English', 'Romanian'],
      emergencyProtocol: true
    }
  },
  {
    id: "bucharest-tennis",
    availability: { status: 'open', nextIntake: '2025-07-01', spotsLeft: 16, responseTime: '48h', privateLessons: true, yearRound: true },
    name: "Bucharest Tennis",
    country: "Romania",
    countryFlag: "🇷🇴",
    city: "Bucharest",
    lat: 44.4268, lng: 26.1025,
    website: "https://bucharest.tennis/en/",
    contactEmail: "info@bucharest.tennis",
    individualLessons: true,
    boarding: false,
    level: "All levels",
    starred: false,
    airport: { name: "Henri Coandă International Airport", code: "OTP", distance: "18 km", driveTime: "25 min" },
    beach: { distance: null, description: "Black Sea coast (Constanța) — ~225 km / 2.5h drive" },
    climate: "bucharest",
    priceRange: { from: null, to: null, unit: "month", display: "Contact for pricing" },
    programs: [],
    coaches: [],
    bestCoachRanking: null,
    facilities: "PTR Professional certified coaching",
    courtSurfaces: ["Clay", "Hard"],
    notableAlumni: [],
    description: "PTR Professional certified coach. All ages, recreational and competitive.",
    nearbyHotels: [
        { name: "Athenee Palace Hilton", stars: 5, distanceKm: 0.5, features: ["Restaurant", "Spa", "Gym", "Bar"], pool: true, wifi: true, pricePerNight: "€130" },
        { name: "Radisson Blu Hotel Bucharest", stars: 5, distanceKm: 1, features: ["Restaurant", "Spa", "Bar", "Room Service"], pool: true, wifi: true, pricePerNight: "€110" },
        { name: "Hotel Rembrandt", stars: 3, distanceKm: 0.8, features: ["Restaurant", "Bar", "Parking"], pool: false, wifi: true, pricePerNight: "€50" },
        { name: "Hotel Venezia", stars: 3, distanceKm: 1.2, features: ["Restaurant", "Parking", "Breakfast Included"], pool: false, wifi: true, pricePerNight: "€45" },
        { name: "InterContinental Bucharest", stars: 5, distanceKm: 0.3, features: ["Restaurant", "Spa", "Gym", "Bar"], pool: true, wifi: true, pricePerNight: "€120" }
      ],
    nearbyRestaurants: [
        { name: "Caru' cu Bere", cuisine: "Romanian Traditional", distanceKm: 0.5, priceRange: "€€", rating: 4.5, vegetarian: true, outdoor: true },
        { name: "The Artist", cuisine: "Fine Dining", distanceKm: 0.3, priceRange: "€€€€", rating: 4.7, vegetarian: true, outdoor: false },
        { name: "Trattoria Il Calcio", cuisine: "Italian", distanceKm: 0.4, priceRange: "€€", rating: 4.3, vegetarian: true, outdoor: true },
        { name: "Lacrimi și Sfinți", cuisine: "Romanian Modern", distanceKm: 0.6, priceRange: "€€€", rating: 4.6, vegetarian: true, outdoor: true },
        { name: "Dristor Kebab", cuisine: "Turkish", distanceKm: 0.8, priceRange: "€", rating: 4.1, vegetarian: false, outdoor: false }
      ],
    nearbyMedical: [
        { name: "Spitalul Universitar de Urgență București", type: "Hospital", distanceKm: 3, phone: "+40 21 318 0522", emergency: true },
        { name: "Regina Maria – Baneasa Clinic", type: "Hospital", distanceKm: 5, phone: "+40 21 9268", emergency: true },
        { name: "Kinetic Sport & Medicine", type: "Sports Medicine", distanceKm: 4, phone: "+40 21 312 5125", emergency: false }
      ],
    costOfLiving: { rent1Bed: "€450", meal: "€7", monthlyFood: "€250", transport: "€20", currency: "RON", summary: "Very affordable EU capital; significantly cheaper than Western Europe" },
    scholarships: { available: false, details: "No formal scholarship program currently. Contact for seasonal pricing." },
    visaInfo: { schengen: false, eu: true, visaFreeCountries: "EU/EEA citizens have freedom of movement. USA, Canada, Australia, UK — visa-free up to 90 days", notes: "Romania is an EU member but not yet in the Schengen Area. Non-EU citizens may need a national visa for stays over 90 days." },
    airportTransfers: [
        { mode: "Taxi", duration: "25 min", cost: "€10–15", notes: "From Henri Coandă Airport (OTP), use Bolt or licensed taxis" },
        { mode: "Bus", duration: "40 min", cost: "€1", notes: "Express bus 783 to city center" },
        { mode: "Private Transfer", duration: "20 min", cost: "€20–30", notes: "Pre-book online" }
      ],
    nearbyTournaments: [
        { name: "Transylvania Open", level: "WTA 250", surface: "Hard", month: "October", venue: "BT Arena, Cluj" },
        { name: "Bucharest Open", level: "ITF", surface: "Clay", month: "July", venue: "Arenele BNR" },
        { name: "Romanian Junior Nationals", level: "National Junior", surface: "Clay", month: "August", venue: "Bucharest" }
      ],
    videoTour: null,
    juniorInfo: {
      minAge: 18,
      maxAge: null,
      supervision: 'none',
      guardianStay: false,
      schooling: 'none',
      medicalStaff: false,
      safeguarding: false,
      airportPickup: false,
      mealPlan: 'self-catering',
      curfew: null,
      roommatePairing: 'self-select',
      languageSupport: ['English'],
      emergencyProtocol: false
    }
  },
  {
    id: "sofia-360",
    availability: { status: 'open', nextIntake: '2025-08-01', spotsLeft: 7, responseTime: '3-5 days', privateLessons: true, yearRound: true },
    name: "Sofia Tennis Club 360",
    country: "Bulgaria",
    countryFlag: "🇧🇬",
    city: "Sofia",
    lat: 42.6977, lng: 23.3219,
    website: "https://360tennis.bg/en/",
    contactEmail: "info@360tennis.bg",
    individualLessons: true,
    boarding: false,
    level: "All levels",
    starred: false,
    airport: { name: "Sofia Airport", code: "SOF", distance: "10 km", driveTime: "15 min" },
    beach: { distance: null, description: "Black Sea (Burgas) — ~380 km / 4h drive" },
    climate: "sofia",
    priceRange: { from: null, to: null, unit: "month", display: "Contact for pricing" },
    programs: [],
    coaches: [],
    bestCoachRanking: null,
    facilities: "Historic parkland (Borisova Garden), near Vasil Levski Stadium",
    courtSurfaces: ["Clay", "Hard"],
    notableAlumni: [],
    description: "Heir to Bulgaria's oldest tennis club (est. 1896). Grigor Dimitrov trained locally before moving to France.",
    nearbyHotels: [
        { name: "Sofia Hotel Balkan", stars: 5, distanceKm: 0.5, features: ["Restaurant", "Spa", "Gym", "Bar"], pool: true, wifi: true, pricePerNight: "€100" },
        { name: "Grand Hotel Sofia", stars: 5, distanceKm: 0.8, features: ["Restaurant", "Spa", "Bar", "Room Service"], pool: false, wifi: true, pricePerNight: "€90" },
        { name: "Best Western Premier Sofia Airport", stars: 4, distanceKm: 8, features: ["Restaurant", "Gym", "Parking"], pool: false, wifi: true, pricePerNight: "€60" },
        { name: "Hotel Niky", stars: 3, distanceKm: 1, features: ["Restaurant", "Bar", "Breakfast Included"], pool: false, wifi: true, pricePerNight: "€45" },
        { name: "Sense Hotel Sofia", stars: 4, distanceKm: 0.3, features: ["Restaurant", "Spa", "Bar"], pool: false, wifi: true, pricePerNight: "€75" }
      ],
    nearbyRestaurants: [
        { name: "Shtastlivetsa", cuisine: "Bulgarian Traditional", distanceKm: 0.3, priceRange: "€", rating: 4.4, vegetarian: true, outdoor: true },
        { name: "Moma Bulgarian Food & Wine", cuisine: "Bulgarian Modern", distanceKm: 0.5, priceRange: "€€€", rating: 4.6, vegetarian: true, outdoor: false },
        { name: "Trattoria Pasta e Vino", cuisine: "Italian", distanceKm: 0.4, priceRange: "€€", rating: 4.3, vegetarian: true, outdoor: true },
        { name: "Sushi Bar Sofia", cuisine: "Japanese", distanceKm: 0.6, priceRange: "€€", rating: 4.2, vegetarian: true, outdoor: false },
        { name: "Victoria Restaurant", cuisine: "Fine Dining", distanceKm: 0.8, priceRange: "€€€€", rating: 4.7, vegetarian: true, outdoor: true }
      ],
    nearbyMedical: [
        { name: "Pirogov Emergency Hospital", type: "Hospital", distanceKm: 3, phone: "+359 2 915 4411", emergency: true },
        { name: "Tokuda Hospital Sofia", type: "Hospital", distanceKm: 5, phone: "+359 2 403 4000", emergency: true },
        { name: "NSA Sports Medicine Clinic", type: "Sports Medicine", distanceKm: 2, phone: "+359 2 963 3063", emergency: false }
      ],
    costOfLiving: { rent1Bed: "€350", meal: "€5", monthlyFood: "€200", transport: "€25", currency: "BGN", summary: "One of the most affordable EU capitals; excellent value" },
    scholarships: { available: false, details: "No formal scholarship program currently. Contact for multi-month discounts." },
    visaInfo: { schengen: false, eu: true, visaFreeCountries: "EU/EEA citizens have freedom of movement. USA, Canada, Australia, UK — visa-free up to 90 days", notes: "Bulgaria is an EU member but not yet fully in the Schengen Area. Non-EU citizens may need a national visa for longer stays." },
    airportTransfers: [
        { mode: "Taxi", duration: "15 min", cost: "€8–10", notes: "From Sofia Airport (SOF), use OK Supertrans" },
        { mode: "Metro", duration: "20 min", cost: "€0.80", notes: "Direct metro line from airport to center" },
        { mode: "Private Transfer", duration: "15 min", cost: "€15–20", notes: "Pre-book online" }
      ],
    nearbyTournaments: [
        { name: "Sofia Open", level: "ATP 250", surface: "Hard (Indoor)", month: "February", venue: "Arena Armeec" },
        { name: "Bulgarian Junior Open", level: "ITF Junior", surface: "Clay", month: "June", venue: "Sofia" },
        { name: "Bulgarian National Championships", level: "National", surface: "Clay", month: "September", venue: "Sofia" }
      ],
    videoTour: null,
    juniorInfo: {
      minAge: 11,
      maxAge: 18,
      supervision: 'training-only',
      guardianStay: true,
      schooling: 'online-support',
      medicalStaff: true,
      safeguarding: true,
      airportPickup: true,
      mealPlan: 'half-board',
      curfew: '22:00',
      roommatePairing: 'age-only',
      languageSupport: ['English', 'Bulgarian'],
      emergencyProtocol: true
    }
  },
  {
    id: "romai-tennis",
    availability: { status: 'limited', nextIntake: '2025-09-15', spotsLeft: 2, responseTime: '24h', privateLessons: true, yearRound: false },
    name: "Római Tennis Academy",
    country: "Hungary",
    countryFlag: "🇭🇺",
    city: "Budapest",
    lat: 47.4979, lng: 19.0402,
    website: null,
    contactEmail: "info@romaitennis.com",
    individualLessons: true,
    boarding: false,
    level: "All levels",
    starred: false,
    airport: { name: "Budapest Ferenc Liszt International Airport", code: "BUD", distance: "16 km", driveTime: "25 min" },
    beach: { distance: null, description: "Landlocked — Adriatic ~480 km. Lake Balaton ~130 km / 1.5h drive" },
    climate: "budapest",
    priceRange: { from: null, to: null, unit: "month", display: "Contact for pricing" },
    programs: [],
    coaches: [],
    bestCoachRanking: null,
    facilities: "10 clay + 1 soft court (year-round), squash, 25m pool, wellness. 2-hectare along Danube.",
    courtSurfaces: ["Clay", "Hard"],
    notableAlumni: [],
    description: "Most prestigious tennis academy in Hungary. Beautiful Danube riverbank location.",
    nearbyHotels: [
        { name: "Four Seasons Gresham Palace", stars: 5, distanceKm: 1, features: ["Restaurant", "Spa", "Gym", "Bar"], pool: true, wifi: true, pricePerNight: "€250" },
        { name: "Hotel Gellért", stars: 4, distanceKm: 2, features: ["Restaurant", "Spa", "Bar", "Parking"], pool: true, wifi: true, pricePerNight: "€100" },
        { name: "Danubius Hotel Margitsziget", stars: 4, distanceKm: 1.5, features: ["Restaurant", "Spa", "Gym"], pool: true, wifi: true, pricePerNight: "€90" },
        { name: "Hotel Palazzo Zichy", stars: 4, distanceKm: 1.2, features: ["Restaurant", "Bar", "Room Service"], pool: false, wifi: true, pricePerNight: "€80" },
        { name: "Meininger Hotel Budapest", stars: 2, distanceKm: 0.8, features: ["Bar", "Breakfast Included"], pool: false, wifi: true, pricePerNight: "€35" }
      ],
    nearbyRestaurants: [
        { name: "Menza", cuisine: "Hungarian", distanceKm: 0.5, priceRange: "€€", rating: 4.4, vegetarian: true, outdoor: true },
        { name: "Onyx Restaurant", cuisine: "Fine Dining", distanceKm: 0.3, priceRange: "€€€€", rating: 4.8, vegetarian: true, outdoor: false },
        { name: "Trattoria Pomo D'Oro", cuisine: "Italian", distanceKm: 0.4, priceRange: "€€", rating: 4.5, vegetarian: true, outdoor: true },
        { name: "Café Kör", cuisine: "Hungarian Bistro", distanceKm: 0.6, priceRange: "€€", rating: 4.3, vegetarian: true, outdoor: true },
        { name: "Street Food Karaván", cuisine: "International Street Food", distanceKm: 0.8, priceRange: "€", rating: 4.1, vegetarian: true, outdoor: true }
      ],
    nearbyMedical: [
        { name: "Semmelweis Egyetem (University Hospital)", type: "Hospital", distanceKm: 3, phone: "+36 1 459 1500", emergency: true },
        { name: "Honvédkórház (Military Hospital)", type: "Hospital", distanceKm: 4, phone: "+36 1 475 2600", emergency: true },
        { name: "Budai Egészségközpont", type: "Sports Medicine", distanceKm: 5, phone: "+36 1 489 5200", emergency: false }
      ],
    costOfLiving: { rent1Bed: "€500", meal: "€7", monthlyFood: "€250", transport: "€30", currency: "HUF", summary: "Affordable EU capital; great value especially outside the tourist center" },
    scholarships: { available: true, details: "Scholarships available for elite juniors. Home of the Hungarian Open." },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: "EU/EEA citizens have freedom of movement. USA, Canada, Australia, UK — visa-free up to 90 days in Schengen area", notes: "Schengen visa allows travel across 27 European countries. Long-term student visa available for extended programs." },
    airportTransfers: [
        { mode: "Taxi", duration: "30 min", cost: "€20–25", notes: "From Budapest Airport (BUD), use Főtaxi" },
        { mode: "Bus + Metro", duration: "50 min", cost: "€3", notes: "Bus 100E express to Deák Ferenc tér" },
        { mode: "Private Transfer", duration: "25 min", cost: "€25–35", notes: "Pre-book online, fixed price" }
      ],
    nearbyTournaments: [
        { name: "Hungarian Open", level: "ATP 250", surface: "Clay", month: "April", venue: "Római Teniszakadémia" },
        { name: "Budapest Grand Prix", level: "WTA 250", surface: "Clay", month: "July", venue: "Római" },
        { name: "Hungarian Junior Open", level: "ITF Junior", surface: "Clay", month: "June", venue: "Budapest" }
      ],
    videoTour: "https://www.youtube.com/watch?v=Q2Yh7eIK_wQ",
    juniorInfo: {
      minAge: 11,
      maxAge: 18,
      supervision: 'daytime',
      guardianStay: true,
      schooling: 'tutoring',
      medicalStaff: false,
      safeguarding: true,
      airportPickup: false,
      mealPlan: 'flexible',
      curfew: '23:00',
      roommatePairing: 'age-only',
      languageSupport: ['English', 'Hungarian'],
      emergencyProtocol: true
    }
  },
  {
    id: "szepvolgyi",
    availability: { status: 'open', nextIntake: '2025-08-01', spotsLeft: 11, responseTime: '3-5 days', privateLessons: true, yearRound: true },
    name: "Szépvölgyi Tennis Academy",
    country: "Hungary",
    countryFlag: "🇭🇺",
    city: "Budapest",
    lat: 47.4979, lng: 19.0402,
    website: "https://szepvolgyi.hu/en/",
    contactEmail: "info@szepvolgyi.hu",
    individualLessons: true,
    boarding: false,
    level: "All levels",
    starred: false,
    airport: { name: "Budapest Ferenc Liszt International Airport", code: "BUD", distance: "16 km", driveTime: "25 min" },
    beach: { distance: null, description: "Landlocked — Adriatic ~480 km. Lake Balaton ~130 km / 1.5h drive" },
    climate: "budapest",
    priceRange: { from: null, to: null, unit: "month", display: "Contact for pricing" },
    programs: [],
    coaches: [],
    bestCoachRanking: null,
    facilities: "3 clay + 3 hard courts. Bilingual coaching (Hungarian/English).",
    courtSurfaces: ["Clay", "Hard"],
    notableAlumni: [],
    description: "Bilingual (Hungarian/English) coaching. Beginner to professional competition preparation.",
    nearbyHotels: [
        { name: "Four Seasons Gresham Palace", stars: 5, distanceKm: 1, features: ["Restaurant", "Spa", "Gym", "Bar"], pool: true, wifi: true, pricePerNight: "€250" },
        { name: "Hotel Gellért", stars: 4, distanceKm: 2, features: ["Restaurant", "Spa", "Bar", "Parking"], pool: true, wifi: true, pricePerNight: "€100" },
        { name: "Danubius Hotel Margitsziget", stars: 4, distanceKm: 1.5, features: ["Restaurant", "Spa", "Gym"], pool: true, wifi: true, pricePerNight: "€90" },
        { name: "Hotel Palazzo Zichy", stars: 4, distanceKm: 1.2, features: ["Restaurant", "Bar", "Room Service"], pool: false, wifi: true, pricePerNight: "€80" },
        { name: "Meininger Hotel Budapest", stars: 2, distanceKm: 0.8, features: ["Bar", "Breakfast Included"], pool: false, wifi: true, pricePerNight: "€35" }
      ],
    nearbyRestaurants: [
        { name: "Menza", cuisine: "Hungarian", distanceKm: 0.5, priceRange: "€€", rating: 4.4, vegetarian: true, outdoor: true },
        { name: "Onyx Restaurant", cuisine: "Fine Dining", distanceKm: 0.3, priceRange: "€€€€", rating: 4.8, vegetarian: true, outdoor: false },
        { name: "Trattoria Pomo D'Oro", cuisine: "Italian", distanceKm: 0.4, priceRange: "€€", rating: 4.5, vegetarian: true, outdoor: true },
        { name: "Café Kör", cuisine: "Hungarian Bistro", distanceKm: 0.6, priceRange: "€€", rating: 4.3, vegetarian: true, outdoor: true },
        { name: "Street Food Karaván", cuisine: "International Street Food", distanceKm: 0.8, priceRange: "€", rating: 4.1, vegetarian: true, outdoor: true }
      ],
    nearbyMedical: [
        { name: "Semmelweis Egyetem (University Hospital)", type: "Hospital", distanceKm: 3, phone: "+36 1 459 1500", emergency: true },
        { name: "Honvédkórház (Military Hospital)", type: "Hospital", distanceKm: 4, phone: "+36 1 475 2600", emergency: true },
        { name: "Budai Egészségközpont", type: "Sports Medicine", distanceKm: 5, phone: "+36 1 489 5200", emergency: false }
      ],
    costOfLiving: { rent1Bed: "€500", meal: "€7", monthlyFood: "€250", transport: "€30", currency: "HUF", summary: "Affordable EU capital; great value especially outside the tourist center" },
    scholarships: { available: false, details: "No formal scholarship program currently. Contact for junior development packages." },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: "EU/EEA citizens have freedom of movement. USA, Canada, Australia, UK — visa-free up to 90 days in Schengen area", notes: "Schengen visa allows travel across 27 European countries. Long-term student visa available for extended programs." },
    airportTransfers: [
        { mode: "Taxi", duration: "30 min", cost: "€20–25", notes: "From Budapest Airport (BUD), use Főtaxi" },
        { mode: "Bus + Metro", duration: "50 min", cost: "€3", notes: "Bus 100E express to Deák Ferenc tér" },
        { mode: "Private Transfer", duration: "25 min", cost: "€25–35", notes: "Pre-book online, fixed price" }
      ],
    nearbyTournaments: [
        { name: "Hungarian Open", level: "ATP 250", surface: "Clay", month: "April", venue: "Római Teniszakadémia" },
        { name: "Budapest Grand Prix", level: "WTA 250", surface: "Clay", month: "July", venue: "Római" },
        { name: "Hungarian Junior Open", level: "ITF Junior", surface: "Clay", month: "June", venue: "Budapest" }
      ],
    videoTour: null,
    juniorInfo: {
      minAge: 18,
      maxAge: null,
      supervision: 'none',
      guardianStay: false,
      schooling: 'none',
      medicalStaff: false,
      safeguarding: false,
      airportPickup: false,
      mealPlan: 'self-catering',
      curfew: null,
      roommatePairing: 'self-select',
      languageSupport: ['English'],
      emergencyProtocol: false
    }
  },
  {
    id: "breskvar",
    availability: { status: 'open', nextIntake: '2025-06-15', spotsLeft: 15, responseTime: '48h', privateLessons: true, yearRound: true },
    name: "Tennis Academy Breskvar",
    country: "Slovenia",
    countryFlag: "🇸🇮",
    city: "Ljubljana",
    lat: 46.0569, lng: 14.5058,
    website: "https://tenis-klub-breskvar.si/",
    contactEmail: "info@tenis-klub-breskvar.si",
    individualLessons: true,
    boarding: false,
    level: "All levels",
    starred: false,
    airport: { name: "Ljubljana Jože Pučnik Airport", code: "LJU", distance: "26 km", driveTime: "25 min" },
    beach: { distance: 95, description: "Adriatic coast (Koper/Piran) — ~95 km / 1h drive" },
    climate: "ljubljana",
    priceRange: { from: null, to: null, unit: "month", display: "Contact for pricing" },
    programs: [],
    coaches: [],
    bestCoachRanking: null,
    facilities: "Premier tennis facility in Ljubljana",
    courtSurfaces: ["Clay", "Hard"],
    notableAlumni: [],
    description: "Premier tennis facility in Ljubljana. Beginner to advanced, competitive matches.",
    nearbyHotels: [
        { name: "InterContinental Ljubljana", stars: 5, distanceKm: 0.3, features: ["Restaurant", "Spa", "Gym", "Bar"], pool: true, wifi: true, pricePerNight: "€150" },
        { name: "Grand Hotel Union", stars: 4, distanceKm: 0.2, features: ["Restaurant", "Bar", "Room Service", "Conference Room"], pool: false, wifi: true, pricePerNight: "€110" },
        { name: "Best Western Premier Hotel Slon", stars: 4, distanceKm: 0.4, features: ["Restaurant", "Bar", "Gym"], pool: false, wifi: true, pricePerNight: "€95" },
        { name: "Hotel Park Ljubljana", stars: 4, distanceKm: 0.8, features: ["Restaurant", "Parking", "Breakfast Included"], pool: false, wifi: true, pricePerNight: "€75" },
        { name: "Hostel Celica", stars: 2, distanceKm: 1, features: ["Bar", "Breakfast Included", "Pet Friendly"], pool: false, wifi: true, pricePerNight: "€30" }
      ],
    nearbyRestaurants: [
        { name: "Gostilna na Gradu", cuisine: "Slovenian Traditional", distanceKm: 0.3, priceRange: "€€", rating: 4.5, vegetarian: true, outdoor: true },
        { name: "JB Restaurant", cuisine: "Fine Dining", distanceKm: 0.5, priceRange: "€€€€", rating: 4.7, vegetarian: true, outdoor: false },
        { name: "Pizzeria Foculus", cuisine: "Italian", distanceKm: 0.2, priceRange: "€", rating: 4.3, vegetarian: true, outdoor: true },
        { name: "Strelec", cuisine: "Slovenian Modern", distanceKm: 0.4, priceRange: "€€€", rating: 4.6, vegetarian: true, outdoor: true },
        { name: "Hood Burger", cuisine: "American", distanceKm: 0.6, priceRange: "€", rating: 4.2, vegetarian: false, outdoor: false }
      ],
    nearbyMedical: [
        { name: "UKC Ljubljana (University Medical Centre)", type: "Hospital", distanceKm: 2, phone: "+386 1 522 5050", emergency: true },
        { name: "Medicofit", type: "Sports Medicine", distanceKm: 3, phone: "+386 1 200 8370", emergency: false },
        { name: "Fizioterapija Ljubljana", type: "Physiotherapy", distanceKm: 1.5, phone: "+386 1 434 5800", emergency: false }
      ],
    costOfLiving: { rent1Bed: "€550", meal: "€9", monthlyFood: "€280", transport: "€35", currency: "EUR", summary: "Mid-range for Europe; smaller city keeps costs reasonable" },
    scholarships: { available: true, details: "Merit-based scholarships for Slovenian national-level juniors. Contact for evaluation." },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: "EU/EEA citizens have freedom of movement. USA, Canada, Australia, UK — visa-free up to 90 days in Schengen area", notes: "Schengen visa allows travel across 27 European countries. Long-term student visa available for extended programs." },
    airportTransfers: [
        { mode: "Taxi", duration: "25 min", cost: "€25–35", notes: "From Ljubljana Airport (LJU)" },
        { mode: "Bus", duration: "45 min", cost: "€5", notes: "GoOpti shuttle to city center" },
        { mode: "Private Transfer", duration: "20 min", cost: "€30–40", notes: "Pre-book online" }
      ],
    nearbyTournaments: [
        { name: "Portorož WTA", level: "WTA 250", surface: "Hard", month: "September", venue: "Portorož" },
        { name: "Slovenian Junior Open", level: "ITF Junior", surface: "Clay", month: "July", venue: "Ljubljana" }
      ],
    videoTour: null,
    juniorInfo: {
      minAge: 6,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'partner-school',
      medicalStaff: true,
      safeguarding: true,
      airportPickup: true,
      mealPlan: 'full-board',
      curfew: '22:00',
      roommatePairing: 'age-gender',
      languageSupport: ['English', 'Slovenian'],
      emergencyProtocol: true
    }
  },
  {
    id: "medvedev-academy",
    availability: { status: 'open', nextIntake: '2025-09-01', spotsLeft: 12, responseTime: '24h', privateLessons: false, yearRound: true },
    name: "Medvedev Tennis Academy",
    country: "Ukraine",
    countryFlag: "🇺🇦",
    city: "Kyiv (Pogreby)",
    lat: 50.4501, lng: 30.5234,
    website: "https://kiev.tennis/en/",
    contactEmail: "info@kiev.tennis",
    individualLessons: true,
    boarding: false,
    level: "All levels",
    starred: true,
    airport: { name: "Boryspil International Airport", code: "KBP", distance: "33 km", driveTime: "40 min" },
    beach: { distance: null, description: "Inland — Black Sea coast (Odesa) ~480 km / 5.5h drive" },
    climate: "kyiv",
    priceRange: { from: null, to: null, unit: "month", display: "Varies (50% off first lesson)" },
    programs: [
      { name: "Baby Tennis", price: "Varies", desc: "Ages 3–8" },
      { name: "Children's Tennis", price: "Varies", desc: "Ages 9–18" },
      { name: "Top Tennis", price: "Varies", desc: "Young professionals" },
      { name: "Adult Training", price: "Varies", desc: "Amateurs and professionals" }
    ],
    coaches: [
      { name: "Andrey Medvedev", credential: "Former ATP Player", background: "ATP #4 (1994), French Open finalist 1999, President of Ukrainian Tennis Federation", atpWta: true, bestRanking: 4, rankingNote: "ATP #4", languages: ["Ukrainian", "English", "Russian", "French"], instagram: "andreymedvedev_official" }
    ],
    bestCoachRanking: 4,
    facilities: "Indoor/outdoor courts (clay), hosted Davis Cup 2021, fitness, massage, rehab",
    courtSurfaces: ["Clay", "Hard", "Indoor Hard"],
    notableAlumni: [],
    description: "Headed by Andrey Medvedev (ATP #4, French Open finalist). Personal sessions available with Medvedev himself.",
    nearbyHotels: [
        { name: "Hyatt Regency Kyiv", stars: 5, distanceKm: 0.5, features: ["Restaurant", "Spa", "Gym", "Bar"], pool: true, wifi: true, pricePerNight: "€130" },
        { name: "Hotel Ukraina", stars: 4, distanceKm: 0.8, features: ["Restaurant", "Bar", "Room Service"], pool: false, wifi: true, pricePerNight: "€70" },
        { name: "Premier Hotel Lybid", stars: 4, distanceKm: 1.5, features: ["Restaurant", "Gym", "Parking"], pool: false, wifi: true, pricePerNight: "€55" },
        { name: "Ibis Kyiv City Center", stars: 3, distanceKm: 1, features: ["Bar", "Parking", "Breakfast Included"], pool: false, wifi: true, pricePerNight: "€40" },
        { name: "InterContinental Kyiv", stars: 5, distanceKm: 0.3, features: ["Restaurant", "Spa", "Bar", "Room Service"], pool: true, wifi: true, pricePerNight: "€150" }
      ],
    nearbyRestaurants: [
        { name: "Kanapa", cuisine: "Ukrainian Modern", distanceKm: 0.4, priceRange: "€€€", rating: 4.6, vegetarian: true, outdoor: true },
        { name: "Puzata Hata", cuisine: "Ukrainian Traditional", distanceKm: 0.3, priceRange: "€", rating: 4.2, vegetarian: true, outdoor: false },
        { name: "Ostannya Barykada", cuisine: "Ukrainian", distanceKm: 0.5, priceRange: "€€", rating: 4.4, vegetarian: true, outdoor: true },
        { name: "Pizzeria Napule", cuisine: "Italian", distanceKm: 0.6, priceRange: "€€", rating: 4.3, vegetarian: true, outdoor: true },
        { name: "Très Français", cuisine: "French Fine Dining", distanceKm: 0.8, priceRange: "€€€€", rating: 4.7, vegetarian: true, outdoor: false }
      ],
    nearbyMedical: [
        { name: "Oleksandrivska Clinical Hospital", type: "Hospital", distanceKm: 3, phone: "+380 44 234 9393", emergency: true },
        { name: "Boris Medical Clinic", type: "Hospital", distanceKm: 4, phone: "+380 44 238 0000", emergency: true },
        { name: "Sportmedservice", type: "Sports Medicine", distanceKm: 5, phone: "+380 44 537 3636", emergency: false }
      ],
    costOfLiving: { rent1Bed: "€350", meal: "€5", monthlyFood: "€200", transport: "€15", currency: "UAH", summary: "Very affordable; one of the cheapest European capitals" },
    scholarships: { available: true, details: "Scholarships for talented Ukrainian and international juniors. Contact academy for tryout process." },
    visaInfo: { schengen: false, eu: false, visaFreeCountries: "EU/EEA citizens, USA, Canada, UK — visa-free up to 90 days", notes: "Non-EU citizens may need a tourist visa. Check current travel advisories before visiting. E-visa available for many nationalities." },
    airportTransfers: [
        { mode: "Taxi", duration: "40 min", cost: "€10–15", notes: "From Boryspil Airport (KBP), use Bolt or Uklon" },
        { mode: "SkyBus", duration: "50 min", cost: "€3", notes: "Express bus to Kyiv central station" },
        { mode: "Private Transfer", duration: "35 min", cost: "€20–30", notes: "Pre-book online" }
      ],
    nearbyTournaments: [
        { name: "Kyiv Open", level: "ITF", surface: "Clay", month: "May", venue: "LMTC Kyiv" },
        { name: "Ukrainian Junior Championships", level: "National Junior", surface: "Clay", month: "July", venue: "Kyiv" }
      ],
    videoTour: null,
    juniorInfo: {
      minAge: 8,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'tutoring',
      medicalStaff: true,
      safeguarding: true,
      airportPickup: true,
      mealPlan: 'full-board',
      curfew: '21:00',
      roommatePairing: 'age-gender',
      languageSupport: ['English', 'Ukrainian'],
      emergencyProtocol: true
    }
  },
  {
    id: "mta-kyiv",
    availability: { status: 'open', nextIntake: '2025-05-15', spotsLeft: 7, responseTime: '24h', privateLessons: false, yearRound: true },
    name: "International Tennis Academy (MTA)",
    country: "Ukraine",
    countryFlag: "🇺🇦",
    city: "Kyiv",
    lat: 50.4501, lng: 30.5234,
    website: "https://tennisacademy.com.ua/",
    contactEmail: "info@tennisacademy.com.ua",
    individualLessons: true,
    boarding: false,
    level: "All levels",
    starred: false,
    airport: { name: "Boryspil International Airport", code: "KBP", distance: "33 km", driveTime: "40 min" },
    beach: { distance: null, description: "Inland — Black Sea coast ~480 km" },
    climate: "kyiv",
    priceRange: { from: null, to: null, unit: "month", display: "Contact for pricing" },
    programs: [],
    coaches: [],
    bestCoachRanking: null,
    facilities: "37 tennis courts, 6 types of surfaces — world-class",
    courtSurfaces: ["Clay", "Hard", "Indoor Hard", "Grass", "Carpet"],
    notableAlumni: [],
    description: "37 courts with 6 surface types. Comprehensive tennis school.",
    nearbyHotels: [
        { name: "Hyatt Regency Kyiv", stars: 5, distanceKm: 0.5, features: ["Restaurant", "Spa", "Gym", "Bar"], pool: true, wifi: true, pricePerNight: "€130" },
        { name: "Hotel Ukraina", stars: 4, distanceKm: 0.8, features: ["Restaurant", "Bar", "Room Service"], pool: false, wifi: true, pricePerNight: "€70" },
        { name: "Premier Hotel Lybid", stars: 4, distanceKm: 1.5, features: ["Restaurant", "Gym", "Parking"], pool: false, wifi: true, pricePerNight: "€55" },
        { name: "Ibis Kyiv City Center", stars: 3, distanceKm: 1, features: ["Bar", "Parking", "Breakfast Included"], pool: false, wifi: true, pricePerNight: "€40" },
        { name: "InterContinental Kyiv", stars: 5, distanceKm: 0.3, features: ["Restaurant", "Spa", "Bar", "Room Service"], pool: true, wifi: true, pricePerNight: "€150" }
      ],
    nearbyRestaurants: [
        { name: "Kanapa", cuisine: "Ukrainian Modern", distanceKm: 0.4, priceRange: "€€€", rating: 4.6, vegetarian: true, outdoor: true },
        { name: "Puzata Hata", cuisine: "Ukrainian Traditional", distanceKm: 0.3, priceRange: "€", rating: 4.2, vegetarian: true, outdoor: false },
        { name: "Ostannya Barykada", cuisine: "Ukrainian", distanceKm: 0.5, priceRange: "€€", rating: 4.4, vegetarian: true, outdoor: true },
        { name: "Pizzeria Napule", cuisine: "Italian", distanceKm: 0.6, priceRange: "€€", rating: 4.3, vegetarian: true, outdoor: true },
        { name: "Très Français", cuisine: "French Fine Dining", distanceKm: 0.8, priceRange: "€€€€", rating: 4.7, vegetarian: true, outdoor: false }
      ],
    nearbyMedical: [
        { name: "Oleksandrivska Clinical Hospital", type: "Hospital", distanceKm: 3, phone: "+380 44 234 9393", emergency: true },
        { name: "Boris Medical Clinic", type: "Hospital", distanceKm: 4, phone: "+380 44 238 0000", emergency: true },
        { name: "Sportmedservice", type: "Sports Medicine", distanceKm: 5, phone: "+380 44 537 3636", emergency: false }
      ],
    costOfLiving: { rent1Bed: "€350", meal: "€5", monthlyFood: "€200", transport: "€15", currency: "UAH", summary: "Very affordable; one of the cheapest European capitals" },
    scholarships: { available: false, details: "No formal scholarship program currently. Contact for group training rates." },
    visaInfo: { schengen: false, eu: false, visaFreeCountries: "EU/EEA citizens, USA, Canada, UK — visa-free up to 90 days", notes: "Non-EU citizens may need a tourist visa. Check current travel advisories before visiting. E-visa available for many nationalities." },
    airportTransfers: [
        { mode: "Taxi", duration: "40 min", cost: "€10–15", notes: "From Boryspil Airport (KBP), use Bolt or Uklon" },
        { mode: "SkyBus", duration: "50 min", cost: "€3", notes: "Express bus to Kyiv central station" },
        { mode: "Private Transfer", duration: "35 min", cost: "€20–30", notes: "Pre-book online" }
      ],
    nearbyTournaments: [
        { name: "Kyiv Open", level: "ITF", surface: "Clay", month: "May", venue: "LMTC Kyiv" },
        { name: "Ukrainian Junior Championships", level: "National Junior", surface: "Clay", month: "July", venue: "Kyiv" }
      ],
    videoTour: null,
    juniorInfo: {
      minAge: 11,
      maxAge: 18,
      supervision: 'daytime',
      guardianStay: false,
      schooling: 'none',
      medicalStaff: true,
      safeguarding: true,
      airportPickup: true,
      mealPlan: 'flexible',
      curfew: '22:00',
      roommatePairing: 'age-only',
      languageSupport: ['English', 'Ukrainian'],
      emergencyProtocol: true
    }
  },
  {
    id: "vilnius-academy",
    availability: { status: 'closed', nextIntake: '2025-12-01', spotsLeft: null, responseTime: '3-5 days', privateLessons: true, yearRound: false },
    name: "Vilnius Tennis Academy",
    country: "Lithuania",
    countryFlag: "🇱🇹",
    city: "Vilnius",
    lat: 54.6872, lng: 25.2797,
    website: "https://www.tenisoakademija.lt/en",
    contactEmail: "info@tenisoakademija.lt",
    individualLessons: true,
    boarding: false,
    level: "Junior/Dev",
    starred: false,
    airport: { name: "Vilnius International Airport", code: "VNO", distance: "7 km", driveTime: "15 min" },
    beach: { distance: null, description: "Baltic Sea (Palanga/Klaipėda) — ~310 km / 3.5h drive" },
    climate: "vilnius",
    priceRange: { from: null, to: null, unit: "month", display: "Contact for pricing" },
    programs: [],
    coaches: [],
    bestCoachRanking: null,
    facilities: "Largest tennis academy in Lithuania — 500+ youth",
    courtSurfaces: ["Clay", "Hard", "Indoor Hard"],
    notableAlumni: [],
    description: "Largest in Lithuania (500+ youth). Financially supports most promising athletes.",
    nearbyHotels: [
        { name: "Hotel Pacai", stars: 5, distanceKm: 0.3, features: ["Restaurant", "Spa", "Bar"], pool: false, wifi: true, pricePerNight: "€140" },
        { name: "Radisson Blu Hotel Lietuva", stars: 4, distanceKm: 1, features: ["Restaurant", "Gym", "Bar", "Parking"], pool: true, wifi: true, pricePerNight: "€80" },
        { name: "Shakespeare Boutique Hotel", stars: 4, distanceKm: 0.5, features: ["Restaurant", "Bar", "Room Service"], pool: false, wifi: true, pricePerNight: "€90" },
        { name: "Ibis Vilnius Centre", stars: 3, distanceKm: 0.8, features: ["Bar", "Parking", "Breakfast Included"], pool: false, wifi: true, pricePerNight: "€45" },
        { name: "Hotel Rinno", stars: 3, distanceKm: 1.2, features: ["Restaurant", "Parking", "Pet Friendly"], pool: false, wifi: true, pricePerNight: "€50" }
      ],
    nearbyRestaurants: [
        { name: "Šnekutis", cuisine: "Lithuanian Traditional", distanceKm: 0.3, priceRange: "€", rating: 4.3, vegetarian: false, outdoor: true },
        { name: "Ertlio Namas", cuisine: "Lithuanian Fine Dining", distanceKm: 0.5, priceRange: "€€€€", rating: 4.7, vegetarian: true, outdoor: false },
        { name: "Leiciai", cuisine: "Lithuanian", distanceKm: 0.4, priceRange: "€€", rating: 4.4, vegetarian: true, outdoor: true },
        { name: "Da Antonio", cuisine: "Italian", distanceKm: 0.6, priceRange: "€€", rating: 4.3, vegetarian: true, outdoor: true },
        { name: "Wok to Walk", cuisine: "Asian", distanceKm: 0.2, priceRange: "€", rating: 4, vegetarian: true, outdoor: false }
      ],
    nearbyMedical: [
        { name: "Vilniaus universiteto ligoninė Santaros klinikos", type: "Hospital", distanceKm: 5, phone: "+370 5 236 5000", emergency: true },
        { name: "Kardiolita Hospital", type: "Hospital", distanceKm: 3, phone: "+370 5 247 6363", emergency: true },
        { name: "Sportinė medicina Vilnius", type: "Sports Medicine", distanceKm: 4, phone: "+370 5 278 0505", emergency: false }
      ],
    costOfLiving: { rent1Bed: "€500", meal: "€8", monthlyFood: "€250", transport: "€30", currency: "EUR", summary: "Moderate EU capital; good value in the Baltics" },
    scholarships: { available: true, details: "Scholarships available for top Lithuanian junior players through national federation support." },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: "EU/EEA citizens have freedom of movement. USA, Canada, Australia, UK — visa-free up to 90 days in Schengen area", notes: "Schengen visa allows travel across 27 European countries. Long-term student visa available for extended programs." },
    airportTransfers: [
        { mode: "Taxi", duration: "15 min", cost: "€10–12", notes: "From Vilnius Airport (VNO)" },
        { mode: "Bus", duration: "20 min", cost: "€1", notes: "Bus 1 or 2 to city center" },
        { mode: "Private Transfer", duration: "15 min", cost: "€15–20", notes: "Pre-book online" }
      ],
    nearbyTournaments: [
        { name: "Vilnius Open", level: "ITF", surface: "Hard (Indoor)", month: "November", venue: "SEB Arena" },
        { name: "Lithuanian Junior Championships", level: "National Junior", surface: "Clay", month: "July", venue: "Vilnius" },
        { name: "Baltic Junior Open", level: "ITF Junior", surface: "Hard", month: "October", venue: "Vilnius" }
      ],
    videoTour: null,
    juniorInfo: {
      minAge: 12,
      maxAge: 18,
      supervision: 'daytime',
      guardianStay: false,
      schooling: 'tutoring',
      medicalStaff: false,
      safeguarding: true,
      airportPickup: true,
      mealPlan: 'half-board',
      curfew: '22:00',
      roommatePairing: 'age-gender',
      languageSupport: ['English', 'Lithuanian'],
      emergencyProtocol: false
    }
  },
  {
    id: "riga-academy",
    availability: { status: 'open', nextIntake: '2025-08-01', spotsLeft: 5, responseTime: '3-5 days', privateLessons: true, yearRound: false },
    name: "Riga Tennis Academy",
    country: "Latvia",
    countryFlag: "🇱🇻",
    city: "Riga",
    lat: 56.9496, lng: 24.1052,
    website: "http://www.rigatennisacademy.lv/",
    contactEmail: "info@rigatennisacademy.lv",
    individualLessons: true,
    boarding: false,
    level: "All levels",
    starred: false,
    airport: { name: "Riga International Airport", code: "RIX", distance: "10 km", driveTime: "15 min" },
    beach: { distance: 25, description: "🏖️ Jūrmala beach resort — ~25 km / 30 min drive" },
    climate: "riga",
    priceRange: { from: null, to: null, unit: "month", display: "Contact for pricing" },
    programs: [],
    coaches: [],
    bestCoachRanking: null,
    facilities: "Founded by two internationally experienced tennis players/coaches",
    courtSurfaces: ["Clay", "Hard"],
    notableAlumni: [],
    description: "Founded by ex-international players. Children from age 5 through adults, tailored training plans.",
    nearbyHotels: [
        { name: "Grand Hotel Kempinski Riga", stars: 5, distanceKm: 0.3, features: ["Restaurant", "Spa", "Bar", "Room Service"], pool: true, wifi: true, pricePerNight: "€150" },
        { name: "Radisson Blu Latvija", stars: 4, distanceKm: 0.5, features: ["Restaurant", "Spa", "Gym", "Bar"], pool: true, wifi: true, pricePerNight: "€90" },
        { name: "Hotel Neiburgs", stars: 4, distanceKm: 0.2, features: ["Restaurant", "Bar", "Room Service"], pool: false, wifi: true, pricePerNight: "€100" },
        { name: "Wellton Centrum Hotel & Spa", stars: 4, distanceKm: 0.4, features: ["Spa", "Breakfast Included", "Parking"], pool: false, wifi: true, pricePerNight: "€70" },
        { name: "Monika Centrum Hotels", stars: 3, distanceKm: 0.6, features: ["Restaurant", "Parking", "Bar"], pool: false, wifi: true, pricePerNight: "€50" }
      ],
    nearbyRestaurants: [
        { name: "Folkklubs Ala Pagrabs", cuisine: "Latvian Traditional", distanceKm: 0.3, priceRange: "€", rating: 4.4, vegetarian: true, outdoor: false },
        { name: "Vincents", cuisine: "Fine Dining", distanceKm: 0.5, priceRange: "€€€€", rating: 4.8, vegetarian: true, outdoor: false },
        { name: "Steiku Haoss", cuisine: "Steak & Grill", distanceKm: 0.4, priceRange: "€€€", rating: 4.5, vegetarian: false, outdoor: true },
        { name: "Trattoria del Popolo", cuisine: "Italian", distanceKm: 0.6, priceRange: "€€", rating: 4.3, vegetarian: true, outdoor: true },
        { name: "Lido Atpūtas Centrs", cuisine: "Latvian Cafeteria", distanceKm: 1, priceRange: "€", rating: 4.1, vegetarian: true, outdoor: true }
      ],
    nearbyMedical: [
        { name: "Pauls Stradiņš Clinical University Hospital", type: "Hospital", distanceKm: 3, phone: "+371 6706 9532", emergency: true },
        { name: "ARS Medical Centre", type: "Hospital", distanceKm: 2, phone: "+371 6720 1007", emergency: true },
        { name: "Sporta medicīnas centrs", type: "Sports Medicine", distanceKm: 4, phone: "+371 6754 2222", emergency: false }
      ],
    costOfLiving: { rent1Bed: "€450", meal: "€8", monthlyFood: "€250", transport: "€30", currency: "EUR", summary: "Moderate; affordable Baltic capital with good quality of life" },
    scholarships: { available: true, details: "Merit-based scholarships for Baltic region junior players. Contact for evaluation." },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: "EU/EEA citizens have freedom of movement. USA, Canada, Australia, UK — visa-free up to 90 days in Schengen area", notes: "Schengen visa allows travel across 27 European countries. Long-term student visa available for extended programs." },
    airportTransfers: [
        { mode: "Taxi", duration: "15 min", cost: "€10–15", notes: "From Riga Airport (RIX)" },
        { mode: "Bus", duration: "30 min", cost: "€2", notes: "Bus 22 from airport to city center" },
        { mode: "Private Transfer", duration: "15 min", cost: "€15–25", notes: "Pre-book online" }
      ],
    nearbyTournaments: [
        { name: "Riga Open", level: "ITF", surface: "Hard (Indoor)", month: "November", venue: "National Tennis Centre" },
        { name: "Latvian Junior Open", level: "ITF Junior", surface: "Clay", month: "June", venue: "Riga" },
        { name: "Baltic Open", level: "WTA 250", surface: "Hard", month: "July", venue: "National Tennis Centre Lielupe" }
      ],
    videoTour: null,
    juniorInfo: {
      minAge: 14,
      maxAge: 18,
      supervision: 'training-only',
      guardianStay: true,
      schooling: 'none',
      medicalStaff: false,
      safeguarding: true,
      airportPickup: false,
      mealPlan: 'full-board',
      curfew: '22:00',
      roommatePairing: 'age-gender',
      languageSupport: ['English', 'Latvian'],
      emergencyProtocol: true
    }
  },
  {
    id: "tenisa-akademija",
    availability: { status: 'waitlist', nextIntake: '2025-11-01', spotsLeft: null, responseTime: '48h', privateLessons: true, yearRound: false },
    name: "Tenisa Akadēmija",
    country: "Latvia",
    countryFlag: "🇱🇻",
    city: "Riga",
    lat: 56.9496, lng: 24.1052,
    website: "http://tenisaakademija.lv/",
    contactEmail: "info@tenisaakademija.lv",
    individualLessons: true,
    boarding: false,
    level: "All levels",
    starred: false,
    airport: { name: "Riga International Airport", code: "RIX", distance: "10 km", driveTime: "15 min" },
    beach: { distance: 25, description: "🏖️ Jūrmala beach resort — ~25 km / 30 min drive" },
    climate: "riga",
    priceRange: { from: null, to: null, unit: "month", display: "Contact for pricing" },
    programs: [],
    coaches: [],
    bestCoachRanking: null,
    facilities: "Comprehensive: sparring, fitness, distance learning, language courses, competitions abroad",
    courtSurfaces: ["Clay", "Hard", "Indoor Hard"],
    notableAlumni: [],
    description: "Comprehensive program including language courses, distance learning, and coach-assisted competitions abroad.",
    nearbyHotels: [
        { name: "Grand Hotel Kempinski Riga", stars: 5, distanceKm: 0.3, features: ["Restaurant", "Spa", "Bar", "Room Service"], pool: true, wifi: true, pricePerNight: "€150" },
        { name: "Radisson Blu Latvija", stars: 4, distanceKm: 0.5, features: ["Restaurant", "Spa", "Gym", "Bar"], pool: true, wifi: true, pricePerNight: "€90" },
        { name: "Hotel Neiburgs", stars: 4, distanceKm: 0.2, features: ["Restaurant", "Bar", "Room Service"], pool: false, wifi: true, pricePerNight: "€100" },
        { name: "Wellton Centrum Hotel & Spa", stars: 4, distanceKm: 0.4, features: ["Spa", "Breakfast Included", "Parking"], pool: false, wifi: true, pricePerNight: "€70" },
        { name: "Monika Centrum Hotels", stars: 3, distanceKm: 0.6, features: ["Restaurant", "Parking", "Bar"], pool: false, wifi: true, pricePerNight: "€50" }
      ],
    nearbyRestaurants: [
        { name: "Folkklubs Ala Pagrabs", cuisine: "Latvian Traditional", distanceKm: 0.3, priceRange: "€", rating: 4.4, vegetarian: true, outdoor: false },
        { name: "Vincents", cuisine: "Fine Dining", distanceKm: 0.5, priceRange: "€€€€", rating: 4.8, vegetarian: true, outdoor: false },
        { name: "Steiku Haoss", cuisine: "Steak & Grill", distanceKm: 0.4, priceRange: "€€€", rating: 4.5, vegetarian: false, outdoor: true },
        { name: "Trattoria del Popolo", cuisine: "Italian", distanceKm: 0.6, priceRange: "€€", rating: 4.3, vegetarian: true, outdoor: true },
        { name: "Lido Atpūtas Centrs", cuisine: "Latvian Cafeteria", distanceKm: 1, priceRange: "€", rating: 4.1, vegetarian: true, outdoor: true }
      ],
    nearbyMedical: [
        { name: "Pauls Stradiņš Clinical University Hospital", type: "Hospital", distanceKm: 3, phone: "+371 6706 9532", emergency: true },
        { name: "ARS Medical Centre", type: "Hospital", distanceKm: 2, phone: "+371 6720 1007", emergency: true },
        { name: "Sporta medicīnas centrs", type: "Sports Medicine", distanceKm: 4, phone: "+371 6754 2222", emergency: false }
      ],
    costOfLiving: { rent1Bed: "€450", meal: "€8", monthlyFood: "€250", transport: "€30", currency: "EUR", summary: "Moderate; affordable Baltic capital with good quality of life" },
    scholarships: { available: false, details: "No formal scholarship program currently. Contact for seasonal packages." },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: "EU/EEA citizens have freedom of movement. USA, Canada, Australia, UK — visa-free up to 90 days in Schengen area", notes: "Schengen visa allows travel across 27 European countries. Long-term student visa available for extended programs." },
    airportTransfers: [
        { mode: "Taxi", duration: "15 min", cost: "€10–15", notes: "From Riga Airport (RIX)" },
        { mode: "Bus", duration: "30 min", cost: "€2", notes: "Bus 22 from airport to city center" },
        { mode: "Private Transfer", duration: "15 min", cost: "€15–25", notes: "Pre-book online" }
      ],
    nearbyTournaments: [
        { name: "Riga Open", level: "ITF", surface: "Hard (Indoor)", month: "November", venue: "National Tennis Centre" },
        { name: "Latvian Junior Open", level: "ITF Junior", surface: "Clay", month: "June", venue: "Riga" },
        { name: "Baltic Open", level: "WTA 250", surface: "Hard", month: "July", venue: "National Tennis Centre Lielupe" }
      ],
    videoTour: null,
    juniorInfo: {
      minAge: 13,
      maxAge: 18,
      supervision: 'training-only',
      guardianStay: true,
      schooling: 'online-support',
      medicalStaff: true,
      safeguarding: true,
      airportPickup: true,
      mealPlan: 'half-board',
      curfew: '22:00',
      roommatePairing: 'age-only',
      languageSupport: ['English', 'Latvian'],
      emergencyProtocol: true
    }
  },
  {
    id: "us-tenniseakadeemia",
    availability: { status: 'open', nextIntake: '2025-09-01', spotsLeft: 18, responseTime: '24h', privateLessons: false, yearRound: true },
    name: "US Tenniseakadeemia",
    country: "Estonia",
    countryFlag: "🇪🇪",
    city: "Tallinn",
    lat: 59.437, lng: 24.7536,
    website: null,
    contactEmail: "info@ustenniseakadeemia.com",
    individualLessons: null,
    boarding: false,
    level: "Unknown",
    starred: false,
    airport: { name: "Lennart Meri Tallinn Airport", code: "TLL", distance: "4 km", driveTime: "10 min" },
    beach: { distance: 8, description: "🏖️ Pirita Beach — ~8 km / 15 min. Tallinn is coastal (Gulf of Finland)" },
    climate: "tallinn",
    priceRange: { from: null, to: null, unit: "month", display: "Contact for pricing" },
    programs: [],
    coaches: [],
    bestCoachRanking: null,
    facilities: "Sõjakooli 10, Tallinn",
    courtSurfaces: ["Clay", "Hard"],
    notableAlumni: [],
    description: "Tallinn-based tennis academy.",
    nearbyHotels: [
        { name: "Hotel Telegraaf", stars: 5, distanceKm: 0.3, features: ["Restaurant", "Spa", "Bar", "Gym"], pool: true, wifi: true, pricePerNight: "€140" },
        { name: "Swissôtel Tallinn", stars: 5, distanceKm: 0.5, features: ["Restaurant", "Spa", "Gym", "Bar"], pool: true, wifi: true, pricePerNight: "€120" },
        { name: "Hotel Palace by TallinnHotels", stars: 4, distanceKm: 0.4, features: ["Restaurant", "Bar", "Room Service"], pool: false, wifi: true, pricePerNight: "€85" },
        { name: "Original Sokos Hotel Viru", stars: 4, distanceKm: 0.2, features: ["Restaurant", "Bar", "Parking"], pool: false, wifi: true, pricePerNight: "€75" },
        { name: "Hestia Hotel Barons", stars: 3, distanceKm: 0.6, features: ["Breakfast Included", "Parking", "Bar"], pool: false, wifi: true, pricePerNight: "€55" }
      ],
    nearbyRestaurants: [
        { name: "Rataskaevu 16", cuisine: "Estonian", distanceKm: 0.3, priceRange: "€€", rating: 4.6, vegetarian: true, outdoor: true },
        { name: "NOA Chef's Hall", cuisine: "Fine Dining", distanceKm: 3, priceRange: "€€€€", rating: 4.8, vegetarian: true, outdoor: true },
        { name: "Pizzeria Maailm", cuisine: "Italian", distanceKm: 0.4, priceRange: "€", rating: 4.2, vegetarian: true, outdoor: false },
        { name: "Leib Resto ja Aed", cuisine: "Estonian Modern", distanceKm: 0.2, priceRange: "€€€", rating: 4.5, vegetarian: true, outdoor: true },
        { name: "Kompressor", cuisine: "Pancakes & Casual", distanceKm: 0.5, priceRange: "€", rating: 4.3, vegetarian: true, outdoor: false }
      ],
    nearbyMedical: [
        { name: "Põhja-Eesti Regionaalhaigla (North Estonia Medical Centre)", type: "Hospital", distanceKm: 4, phone: "+372 617 1300", emergency: true },
        { name: "East Tallinn Central Hospital", type: "Hospital", distanceKm: 3, phone: "+372 666 1900", emergency: true },
        { name: "Tallinn Sports Medicine Centre", type: "Sports Medicine", distanceKm: 5, phone: "+372 603 1585", emergency: false }
      ],
    costOfLiving: { rent1Bed: "€500", meal: "€9", monthlyFood: "€270", transport: "€30", currency: "EUR", summary: "Moderate Baltic capital; digital nomad-friendly, reasonable costs" },
    scholarships: { available: true, details: "Scholarships available for promising Estonian juniors through Estonian Tennis Federation." },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: "EU/EEA citizens have freedom of movement. USA, Canada, Australia, UK — visa-free up to 90 days in Schengen area", notes: "Schengen visa allows travel across 27 European countries. Long-term student visa available for extended programs." },
    airportTransfers: [
        { mode: "Taxi", duration: "10 min", cost: "€8–10", notes: "From Tallinn Airport (TLL), very close to center" },
        { mode: "Tram", duration: "20 min", cost: "€2", notes: "Tram 4 from airport to city center" },
        { mode: "Private Transfer", duration: "10 min", cost: "€12–18", notes: "Pre-book online" }
      ],
    nearbyTournaments: [
        { name: "Tallinn Open", level: "WTA 250", surface: "Hard (Indoor)", month: "September", venue: "Tondiraba Ice Hall" },
        { name: "Estonian Junior Open", level: "ITF Junior", surface: "Hard", month: "June", venue: "Tallinn" },
        { name: "Estonian National Championships", level: "National", surface: "Clay", month: "August", venue: "Tallinn" }
      ],
    videoTour: null,
    juniorInfo: {
      minAge: 10,
      maxAge: 18,
      supervision: 'training-only',
      guardianStay: false,
      schooling: 'none',
      medicalStaff: false,
      safeguarding: true,
      airportPickup: false,
      mealPlan: 'full-board',
      curfew: '22:00',
      roommatePairing: 'age-gender',
      languageSupport: ['English', 'Estonian'],
      emergencyProtocol: true
    }
  },
  {
    id: "robbyo",
    availability: { status: 'open', nextIntake: '2025-07-01', spotsLeft: 18, responseTime: '48h', privateLessons: true, yearRound: true },
    name: "Robbyo Tennis Academy",
    country: "Estonia",
    countryFlag: "🇪🇪",
    city: "Tallinn",
    lat: 59.437, lng: 24.7536,
    website: null,
    contactEmail: "info@robbyo.com",
    individualLessons: null,
    boarding: false,
    level: "Unknown",
    starred: false,
    airport: { name: "Lennart Meri Tallinn Airport", code: "TLL", distance: "4 km", driveTime: "10 min" },
    beach: { distance: 8, description: "🏖️ Pirita Beach — ~8 km / 15 min. Tallinn is coastal (Gulf of Finland)" },
    climate: "tallinn",
    priceRange: { from: null, to: null, unit: "month", display: "Contact for pricing" },
    programs: [],
    coaches: [],
    bestCoachRanking: null,
    facilities: "Peterburi Tee 46, Tallinn",
    courtSurfaces: ["Clay", "Hard"],
    notableAlumni: [],
    description: "Tallinn-based tennis academy.",
    nearbyHotels: [
        { name: "Hotel Telegraaf", stars: 5, distanceKm: 0.3, features: ["Restaurant", "Spa", "Bar", "Gym"], pool: true, wifi: true, pricePerNight: "€140" },
        { name: "Swissôtel Tallinn", stars: 5, distanceKm: 0.5, features: ["Restaurant", "Spa", "Gym", "Bar"], pool: true, wifi: true, pricePerNight: "€120" },
        { name: "Hotel Palace by TallinnHotels", stars: 4, distanceKm: 0.4, features: ["Restaurant", "Bar", "Room Service"], pool: false, wifi: true, pricePerNight: "€85" },
        { name: "Original Sokos Hotel Viru", stars: 4, distanceKm: 0.2, features: ["Restaurant", "Bar", "Parking"], pool: false, wifi: true, pricePerNight: "€75" },
        { name: "Hestia Hotel Barons", stars: 3, distanceKm: 0.6, features: ["Breakfast Included", "Parking", "Bar"], pool: false, wifi: true, pricePerNight: "€55" }
      ],
    nearbyRestaurants: [
        { name: "Rataskaevu 16", cuisine: "Estonian", distanceKm: 0.3, priceRange: "€€", rating: 4.6, vegetarian: true, outdoor: true },
        { name: "NOA Chef's Hall", cuisine: "Fine Dining", distanceKm: 3, priceRange: "€€€€", rating: 4.8, vegetarian: true, outdoor: true },
        { name: "Pizzeria Maailm", cuisine: "Italian", distanceKm: 0.4, priceRange: "€", rating: 4.2, vegetarian: true, outdoor: false },
        { name: "Leib Resto ja Aed", cuisine: "Estonian Modern", distanceKm: 0.2, priceRange: "€€€", rating: 4.5, vegetarian: true, outdoor: true },
        { name: "Kompressor", cuisine: "Pancakes & Casual", distanceKm: 0.5, priceRange: "€", rating: 4.3, vegetarian: true, outdoor: false }
      ],
    nearbyMedical: [
        { name: "Põhja-Eesti Regionaalhaigla (North Estonia Medical Centre)", type: "Hospital", distanceKm: 4, phone: "+372 617 1300", emergency: true },
        { name: "East Tallinn Central Hospital", type: "Hospital", distanceKm: 3, phone: "+372 666 1900", emergency: true },
        { name: "Tallinn Sports Medicine Centre", type: "Sports Medicine", distanceKm: 5, phone: "+372 603 1585", emergency: false }
      ],
    costOfLiving: { rent1Bed: "€500", meal: "€9", monthlyFood: "€270", transport: "€30", currency: "EUR", summary: "Moderate Baltic capital; digital nomad-friendly, reasonable costs" },
    scholarships: { available: false, details: "No formal scholarship program currently. Contact for junior group rates." },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: "EU/EEA citizens have freedom of movement. USA, Canada, Australia, UK — visa-free up to 90 days in Schengen area", notes: "Schengen visa allows travel across 27 European countries. Long-term student visa available for extended programs." },
    airportTransfers: [
        { mode: "Taxi", duration: "10 min", cost: "€8–10", notes: "From Tallinn Airport (TLL), very close to center" },
        { mode: "Tram", duration: "20 min", cost: "€2", notes: "Tram 4 from airport to city center" },
        { mode: "Private Transfer", duration: "10 min", cost: "€12–18", notes: "Pre-book online" }
      ],
    nearbyTournaments: [
        { name: "Tallinn Open", level: "WTA 250", surface: "Hard (Indoor)", month: "September", venue: "Tondiraba Ice Hall" },
        { name: "Estonian Junior Open", level: "ITF Junior", surface: "Hard", month: "June", venue: "Tallinn" },
        { name: "Estonian National Championships", level: "National", surface: "Clay", month: "August", venue: "Tallinn" }
      ],
    videoTour: null,
    juniorInfo: {
      minAge: 18,
      maxAge: null,
      supervision: 'none',
      guardianStay: false,
      schooling: 'none',
      medicalStaff: false,
      safeguarding: false,
      airportPickup: false,
      mealPlan: 'self-catering',
      curfew: null,
      roommatePairing: 'self-select',
      languageSupport: ['English'],
      emergencyProtocol: false
    }
  },
  {
    id: "rafa-nadal",
    availability: { status: 'open', nextIntake: '2025-07-01', spotsLeft: 12, responseTime: '48h', privateLessons: true, yearRound: true },
    name: "Rafa Nadal Academy by Movistar",
    country: "Spain",
    countryFlag: "🇪🇸",
    city: "Manacor",
    lat: 39.5696, lng: 3.2096,
    website: "https://www.rafanadalacademy.com",
    contact: "+34 971 171 683",
    contactEmail: "info@rafanadalacademy.com",
    individualLessons: true,
    boarding: true,
    level: "Elite",
    starred: true,
    airport: { name: "Palma de Mallorca Airport", code: "PMI", distance: "62 km", driveTime: "50 min" },
    beach: { distance: "< 5 km", description: "Beach accessible nearby" },
    climate: "manacor",
    priceRange: { from: 1800, to: 4500, unit: "week", display: "€1800–€4500/wk" },
    programs: [
        { name: "High Performance Program", price: "€varies", desc: "Year-round intensive training with world-class coaching methodology inspired by Rafa Nadal's training philosophy. (Full Year, Advanced/Elite)" },
        { name: "Summer Camp", price: "€varies", desc: "Summer tennis experience combining high-level training with recreational activities on the beautiful island of Mallorca. (1-4 weeks, All Levels)" },
        { name: "Adult Tennis Experience", price: "€varies", desc: "Exclusive adult program featuring intensive coaching, match play, and access to all academy facilities. (1-2 weeks, Intermediate/Advanced)" },
        { name: "Junior Academy Program", price: "€varies", desc: "Combines academic studies with professional tennis training in a state-of-the-art environment. (Full Year, Intermediate/Advanced)" }
      ],
    coaches: [
        { name: "Toni Nadal", credential: "Head of Academy", background: "Legendary coach and uncle of Rafa Nadal, bringing decades of experience developing world-class talent.", atpWta: false, bestRanking: null, rankingNote: null, languages: ["Spanish", "English"], instagram: null },
        { name: "Gabriel Urpí", credential: "Technical Director", background: "Former professional player and experienced coach overseeing the academy's training methodology.", atpWta: false, bestRanking: null, rankingNote: null, languages: ["Spanish", "English"], instagram: null },
        { name: "Carlos Moyá", credential: "Senior Advisor", background: "Former World No. 1 and Grand Slam champion contributing to the elite training environment.", atpWta: true, bestRanking: null, rankingNote: null, languages: ["Spanish", "English"], instagram: null }
      ],
    bestCoachRanking: 1,
    facilities: "26 outdoor tennis courts (clay, hard, indoor), fitness center, swimming pool, sports science center, padel courts, international school, museum, sports residence",
    courtSurfaces: ["Clay", "Hard", "Indoor Hard"],
    notableAlumni: ["Casper Ruud", "Jaume Munar", "Felix Auger-Aliassime (trained)"],
    description: "Founded by Rafael Nadal in 2016, this world-class academy on the island of Mallorca combines elite tennis training with academic education. The state-of-the-art facility features cutting-edge technology and the training philosophy that shaped one of the greatest players in tennis history.",
    nearbyHotels: [
        { name: "Rafa Nadal Academy Residence", stars: 4, distanceKm: 0, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "Included in program" },
        { name: "Hotel Sa Coma Playa", stars: 3, distanceKm: 8, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "€80-150/night" },
        { name: "Protur Sa Coma Playa Hotel", stars: 3, distanceKm: 9, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "€90-180/night" },
        { name: "Hipotels Mediterraneo", stars: 3, distanceKm: 10, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "€100-200/night" },
        { name: "Hotel Castell de Mar", stars: 3, distanceKm: 8, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "€85-170/night" }
      ],
    nearbyRestaurants: [
        { name: "Restaurant Sa Rotana", cuisine: "Mediterranean", distanceKm: 3, priceRange: "€€€", rating: 4.3999999999999995, vegetarian: true, outdoor: true },
        { name: "Es Moli d'en Bou", cuisine: "Fine Dining", distanceKm: 8, priceRange: "€€€€", rating: 4.3999999999999995, vegetarian: true, outdoor: true },
        { name: "Ca'n March", cuisine: "Mallorcan", distanceKm: 2, priceRange: "€€", rating: 4.7, vegetarian: true, outdoor: true },
        { name: "Restaurant Roland", cuisine: "Mediterranean", distanceKm: 5, priceRange: "€€€", rating: 4.3, vegetarian: true, outdoor: true },
        { name: "Sa Placa", cuisine: "Spanish/Tapas", distanceKm: 1, priceRange: "€€", rating: 4.3999999999999995, vegetarian: true, outdoor: true }
      ],
    nearbyMedical: [
        { name: "Hospital de Manacor", type: "Hospital", distanceKm: 2, phone: "+34 emergency", emergency: true },
        { name: "Rafa Nadal Academy Medical Center", type: "Physiotherapy", distanceKm: 0, phone: "+34 emergency", emergency: false },
        { name: "Clínica Juaneda Manacor", type: "Clinic", distanceKm: 3, phone: "+34 emergency", emergency: false }
      ],
    costOfLiving: { rent1Bed: "€480", meal: "€5", monthlyFood: "€300", transport: "€60", currency: "EUR", summary: "Manacor is affordable compared to Palma; meals included in residential programs" },
    scholarships: { available: true, details: "Merit-based scholarships available for exceptionally talented juniors. Financial aid considered on a case-by-case basis." },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: "EU/EEA citizens, USA, Canada, Australia, UK — visa-free up to 90 days", notes: "Spain is part of the Schengen Area. EU/EEA citizens can stay freely. Non-EU citizens may need a Schengen visa for stays under 90 days or a student visa for longer programs." },
    airportTransfers: [
        { mode: "Academy shuttle service", duration: "50 min", cost: "Varies", notes: "Academy shuttle service, taxi (~€55), rental car" },
        { mode: "Domestic flight to PMI then academy shuttle", duration: "1h flight + 50 min drive", cost: "Varies", notes: "Domestic flight to PMI then academy shuttle" },
        { mode: "Domestic flight to PMI then academy shuttle", duration: "1h flight + 50 min drive", cost: "Varies", notes: "Domestic flight to PMI then academy shuttle" }
      ],
    nearbyTournaments: [
        { name: "Mallorca Championships", level: "ATP 250", surface: "Grass", month: "June", venue: "Santa Ponsa" },
        { name: "Barcelona Open Banc Sabadell", level: "ATP 500", surface: "Clay", month: "April", venue: "Barcelona" }
      ],
    upcomingCamps: [
      { name: "Rafa Nadal Summer Experience", startDate: "2025-07-07", endDate: "2025-07-18", price: "€2,800", level: "All Levels" },
      { name: "Easter High Performance Camp", startDate: "2025-04-14", endDate: "2025-04-25", price: "€2,200", level: "Advanced" },
      { name: "October Half-Term Camp", startDate: "2025-10-20", endDate: "2025-10-31", price: "€1,800", level: "Intermediate" }
    ],
    accommodation: {
      types: [
        { type: 'private', label: 'Private Room', pricePerWeek: 440, maxOccupancy: 1, bathType: 'ensuite', mealsIncluded: true },
        { type: 'twin', label: 'Twin Shared Room', pricePerWeek: 290, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Self-Catering Apartment', pricePerWeek: 270, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: false },
        { type: 'triple', label: 'Triple Room', pricePerWeek: 230, maxOccupancy: 3, bathType: 'ensuite', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: 2,
      shuttleToTraining: true,
      notes: 'On-site resort accommodation with pool access. Full-board dining at the Rafa Nadal Academy restaurant.'
    },
    videoTour: null,
    juniorInfo: {
      minAge: 7,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'partner-school',
      medicalStaff: true,
      safeguarding: true,
      airportPickup: true,
      mealPlan: 'full-board',
      curfew: '22:00',
      roommatePairing: 'age-gender',
      languageSupport: ['English', 'Spanish'],
      emergencyProtocol: true
    }
  },
  {
    id: "mouratoglou",
    availability: { status: 'open', nextIntake: '2025-08-01', spotsLeft: 13, responseTime: '3-5 days', privateLessons: true, yearRound: false },
    name: "Mouratoglou Tennis Academy",
    country: "France",
    countryFlag: "🇫🇷",
    city: "Biot",
    lat: 43.6285, lng: 7.096,
    website: "https://www.mouratoglou.com",
    contact: "+33 4 93 65 20 70",
    contactEmail: "info@mouratoglou.com",
    individualLessons: true,
    boarding: true,
    level: "Elite",
    starred: true,
    airport: { name: "Nice Côte d'Azur Airport", code: "NCE", distance: "22 km", driveTime: "25 min" },
    beach: { distance: "< 5 km", description: "Beach accessible nearby" },
    climate: "biot",
    priceRange: { from: 2000, to: 5000, unit: "week", display: "€2000–€5000/wk" },
    programs: [
        { name: "Full-Time Academy", price: "€varies", desc: "Intensive year-round training program designed to develop future professional players under the Mouratoglou methodology. (Full Year, Advanced/Elite)" },
        { name: "Performance Camp", price: "€varies", desc: "Short-term immersive training camp focusing on technical and tactical improvement. (1-4 weeks, Intermediate/Advanced)" },
        { name: "Junior Development Program", price: "€varies", desc: "Structured program combining tennis development with French academic curriculum. (Full Year, Beginner/Intermediate)" },
        { name: "Adult Tennis Week", price: "€varies", desc: "Intensive adult program on the French Riviera with professional coaching and match play. (1 week, All Levels)" },
        { name: "Elite Sparring Program", price: "€varies", desc: "High-level sparring and competition preparation for touring professionals. (2-8 weeks, Elite)" }
      ],
    coaches: [
        { name: "Patrick Mouratoglou", credential: "Founder & Head Coach", background: "One of the most recognized coaches in tennis history, known for coaching Serena Williams and developing multiple top players.", atpWta: false, bestRanking: null, rankingNote: null, languages: ["French", "English"], instagram: null },
        { name: "Marcos Baghdatis", credential: "Senior Coach", background: "Former World No. 8 and Australian Open finalist bringing elite playing experience to coaching.", atpWta: true, bestRanking: null, rankingNote: null, languages: ["French", "English"], instagram: null }
      ],
    bestCoachRanking: 1,
    facilities: "34 tennis courts (clay, hard, covered), fitness center, recovery center, swimming pool, sports science lab, on-site school, player lounge, accommodation",
    courtSurfaces: ["Clay", "Hard", "Covered Hard"],
    notableAlumni: ["Stefanos Tsitsipas", "Coco Gauff (trained)", "Holger Rune (trained)", "Alexei Popyrin"],
    description: "Founded by Patrick Mouratoglou, this prestigious academy on the French Riviera is one of the world's premier tennis training centers. Known for producing and developing top ATP and WTA players, it combines cutting-edge technology with proven coaching methodologies in a stunning Mediterranean setting.",
    nearbyHotels: [
        { name: "Mouratoglou Hotel & Resort", stars: 4, distanceKm: 0, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "Included in residential program" },
        { name: "Novotel Antibes Sophia Antipolis", stars: 3, distanceKm: 5, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "€100-200/night" },
        { name: "Mercure Antibes Sophia Antipolis", stars: 3, distanceKm: 6, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "€90-170/night" },
        { name: "Hotel & Spa Les Pecheurs", stars: 3, distanceKm: 10, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "€200-400/night" },
        { name: "AC Hotel by Marriott Nice", stars: 3, distanceKm: 20, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "€120-250/night" }
      ],
    nearbyRestaurants: [
        { name: "Les Arcades", cuisine: "French/Provincial", distanceKm: 2, priceRange: "€€€", rating: 4.6, vegetarian: true, outdoor: true },
        { name: "Le Cafe de la Brague", cuisine: "Mediterranean", distanceKm: 3, priceRange: "€€€", rating: 4.3999999999999995, vegetarian: true, outdoor: true },
        { name: "Restaurant Le Plongeoir", cuisine: "Fine Dining", distanceKm: 18, priceRange: "€€€€", rating: 4.6, vegetarian: true, outdoor: true },
        { name: "La Passagere", cuisine: "Gastronomic", distanceKm: 10, priceRange: "€€€€", rating: 4.6, vegetarian: true, outdoor: true },
        { name: "Le Bistrot du Port", cuisine: "Seafood", distanceKm: 12, priceRange: "€€€", rating: 4.6, vegetarian: true, outdoor: true }
      ],
    nearbyMedical: [
        { name: "Polyclinique Saint-Jean", type: "Hospital", distanceKm: 8, phone: "+33 emergency", emergency: true },
        { name: "Centre Hospitalier d'Antibes", type: "Hospital", distanceKm: 10, phone: "+33 emergency", emergency: true },
        { name: "Cabinet Medical Sophia Antipolis", type: "Clinic", distanceKm: 4, phone: "+33 emergency", emergency: false }
      ],
    costOfLiving: { rent1Bed: "€720", meal: "€7", monthlyFood: "€450", transport: "€90", currency: "EUR", summary: "French Riviera is expensive; residential programs include meals and accommodation" },
    scholarships: { available: true, details: "Mouratoglou Foundation offers scholarships for talented players from underprivileged backgrounds. Merit-based financial aid available." },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: "EU/EEA citizens, USA, Canada, Australia, UK — visa-free up to 90 days", notes: "France is part of the Schengen Area. EU/EEA citizens can stay freely. Non-EU citizens need a Schengen visa for short stays or a long-stay student visa." },
    airportTransfers: [
        { mode: "Academy transfer service", duration: "25 min", cost: "Varies", notes: "Academy transfer service, taxi (~€40), bus" },
        { mode: "Train from Marseille", duration: "2h", cost: "Varies", notes: "Train from Marseille, rental car, private transfer" },
        { mode: "Helicopter transfer", duration: "35 min", cost: "Varies", notes: "Helicopter transfer, taxi" }
      ],
    nearbyTournaments: [
        { name: "Rolex Monte-Carlo Masters", level: "ATP 1000", surface: "Clay", month: "April", venue: "Monte Carlo" },
        { name: "Open de Nice Côte d'Azur", level: "ATP 250", surface: "Clay", month: "May", venue: "Nice" },
        { name: "French Open", level: "Grand Slam", surface: "Clay", month: "May-June", venue: "Paris" }
      ],
    upcomingCamps: [
      { name: "Elite Performance Camp", startDate: "2025-06-16", endDate: "2025-06-27", price: "€2,500", level: "Advanced" },
      { name: "Summer Discovery Camp", startDate: "2025-08-04", endDate: "2025-08-15", price: "€1,900", level: "Beginner" },
      { name: "Pre-Season Training Block", startDate: "2025-03-10", endDate: "2025-03-21", price: "€2,100", level: "Intermediate" }
    ],
    accommodation: {
      types: [
        { type: 'private', label: 'Private Room', pricePerWeek: 480, maxOccupancy: 1, bathType: 'ensuite', mealsIncluded: true },
        { type: 'twin', label: 'Twin Shared Room', pricePerWeek: 320, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Self-Catering Apartment', pricePerWeek: 290, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: false },
        { type: 'triple', label: 'Triple Room', pricePerWeek: 240, maxOccupancy: 3, bathType: 'ensuite', mealsIncluded: true },
        { type: 'quad', label: 'Quad Room', pricePerWeek: 190, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: 2,
      shuttleToTraining: true,
      notes: 'Luxury campus residence on the French Riviera. Full-board with sport-nutrition meals and recovery facilities.'
    },
    videoTour: null,
    juniorInfo: {
      minAge: 7,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'tutoring',
      medicalStaff: true,
      safeguarding: true,
      airportPickup: true,
      mealPlan: 'full-board',
      curfew: '21:00',
      roommatePairing: 'age-gender',
      languageSupport: ['English', 'French'],
      emergencyProtocol: true
    }
  },
  {
    id: "sanchez-casal",
    availability: { status: 'limited', nextIntake: '2025-10-01', spotsLeft: 3, responseTime: '48h', privateLessons: true, yearRound: true },
    name: "Sanchez-Casal Academy",
    country: "Spain",
    countryFlag: "🇪🇸",
    city: "Barcelona",
    lat: 41.3545, lng: 2.1066,
    website: "https://www.sanchezcanal.com",
    contact: "+34 932 054 090",
    contactEmail: "info@sanchezcanal.com",
    individualLessons: true,
    boarding: true,
    level: "Elite",
    starred: true,
    airport: { name: "Barcelona-El Prat Airport", code: "BCN", distance: "18 km", driveTime: "25 min" },
    beach: { distance: "< 5 km", description: "Beach accessible nearby" },
    climate: "barcelona",
    priceRange: { from: 1500, to: 4000, unit: "week", display: "€1500–€4000/wk" },
    programs: [
        { name: "High Performance Program", price: "€varies", desc: "Intensive year-round program combining elite tennis training with academic education in Barcelona. (Full Year, Advanced/Elite)" },
        { name: "Summer Tennis Camp", price: "€varies", desc: "Immersive summer experience blending world-class tennis coaching with cultural activities in Barcelona. (1-4 weeks, All Levels)" },
        { name: "Adult Tennis Program", price: "€varies", desc: "Tailored adult coaching program with flexible scheduling and city exploration opportunities. (1-2 weeks, All Levels)" },
        { name: "Junior Development", price: "€varies", desc: "Progressive development program for young players building foundational skills. (Full Year, Beginner/Intermediate)" }
      ],
    coaches: [
        { name: "Emilio Sánchez", credential: "Co-Founder & Director", background: "Former World No. 1 in doubles and Grand Slam champion, co-founder of the academy with decades of coaching expertise.", atpWta: true, bestRanking: null, rankingNote: null, languages: ["Spanish", "English"], instagram: null },
        { name: "Sergio Casal", credential: "Co-Founder", background: "Former professional doubles player and Grand Slam champion, instrumental in developing the academy methodology.", atpWta: false, bestRanking: null, rankingNote: null, languages: ["Spanish", "English"], instagram: null },
        { name: "Pato Alvarez", credential: "Head Coach", background: "Experienced coach with a track record of developing junior players into professional competitors.", atpWta: false, bestRanking: null, rankingNote: null, languages: ["Spanish", "English"], instagram: null }
      ],
    bestCoachRanking: 1,
    facilities: "22 tennis courts (clay, hard), fitness center, swimming pool, recovery area, player lounge, academic school, sports residence",
    courtSurfaces: ["Clay", "Hard"],
    notableAlumni: ["Svetlana Kuznetsova", "Andy Murray (trained)", "Daniela Hantuchová"],
    description: "One of the world's most prestigious tennis academies, founded by Grand Slam champions Emilio Sánchez and Sergio Casal. Located in the vibrant city of Barcelona, it has produced numerous professional players and offers world-class training in a Mediterranean setting.",
    nearbyHotels: [
        { name: "Academy Residence", stars: 4, distanceKm: 0, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "Included in boarding program" },
        { name: "Hotel SB Diagonal Zero", stars: 3, distanceKm: 5, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "€90-180/night" },
        { name: "Hotel Arts Barcelona", stars: 3, distanceKm: 8, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "€250-500/night" },
        { name: "Hilton Diagonal Mar", stars: 3, distanceKm: 4, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "€120-250/night" },
        { name: "Hotel Meliá Barcelona Sky", stars: 3, distanceKm: 6, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "€100-220/night" }
      ],
    nearbyRestaurants: [
        { name: "Can Pinyetes", cuisine: "Catalan", distanceKm: 2, priceRange: "€€", rating: 4.6, vegetarian: true, outdoor: true },
        { name: "El Nacional", cuisine: "Spanish/Multi", distanceKm: 7, priceRange: "€€€", rating: 4.7, vegetarian: true, outdoor: true },
        { name: "La Mar Salada", cuisine: "Seafood", distanceKm: 8, priceRange: "€€", rating: 4.6, vegetarian: true, outdoor: true },
        { name: "Cerveceria Catalana", cuisine: "Tapas", distanceKm: 6, priceRange: "€€", rating: 4.5, vegetarian: true, outdoor: true },
        { name: "Restaurant Elx", cuisine: "Mediterranean", distanceKm: 3, priceRange: "€€€", rating: 4.6, vegetarian: true, outdoor: true }
      ],
    nearbyMedical: [
        { name: "Hospital del Mar", type: "Hospital", distanceKm: 5, phone: "+34 emergency", emergency: true },
        { name: "Clínica Diagonal", type: "Hospital", distanceKm: 4, phone: "+34 emergency", emergency: true },
        { name: "Centre Mèdic Diagonal", type: "Clinic", distanceKm: 3, phone: "+34 emergency", emergency: false }
      ],
    costOfLiving: { rent1Bed: "€600", meal: "€6", monthlyFood: "€375", transport: "€75", currency: "EUR", summary: "Barcelona is moderately expensive; residential programs help control costs" },
    scholarships: { available: true, details: "Scholarships available for talented juniors demonstrating exceptional potential. Partial and full scholarships offered based on merit." },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: "EU/EEA citizens, USA, Canada, Australia, UK — visa-free up to 90 days", notes: "Spain is part of the Schengen Area. EU/EEA citizens can stay freely. Non-EU citizens may need a Schengen visa for stays under 90 days or a student visa for longer programs." },
    airportTransfers: [
        { mode: "Academy transfer", duration: "25 min", cost: "Varies", notes: "Academy transfer, taxi (~€35), metro + bus" },
        { mode: "Bus to Barcelona", duration: "1h 15min", cost: "Varies", notes: "Bus to Barcelona, rental car" },
        { mode: "Bus to Barcelona", duration: "1h 20min", cost: "Varies", notes: "Bus to Barcelona, rental car" }
      ],
    nearbyTournaments: [
        { name: "Barcelona Open Banc Sabadell", level: "ATP 500", surface: "Clay", month: "April", venue: "Barcelona" },
        { name: "Mutua Madrid Open", level: "ATP 1000", surface: "Clay", month: "May", venue: "Madrid" },
        { name: "French Open", level: "Grand Slam", surface: "Clay", month: "May-June", venue: "Paris" }
      ],
    upcomingCamps: [
      { name: "Championship Preparation Camp", startDate: "2025-05-12", endDate: "2025-05-23", price: "€1,800", level: "Advanced" },
      { name: "Summer Tennis & Language Camp", startDate: "2025-07-21", endDate: "2025-08-01", price: "€2,400", level: "All Levels" }
    ],
    accommodation: {
      types: [
        { type: 'private', label: 'Private Room', pricePerWeek: 400, maxOccupancy: 1, bathType: 'ensuite', mealsIncluded: true },
        { type: 'twin', label: 'Twin Shared Room', pricePerWeek: 260, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Self-Catering Apartment', pricePerWeek: 240, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: false },
        { type: 'triple', label: 'Triple Room', pricePerWeek: 210, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: false,
      minStay: 1,
      shuttleToTraining: true,
      notes: 'Campus boarding with supervised residences for players 14+. Adults welcome in private and apartment options.'
    },
    videoTour: null,
    juniorInfo: {
      minAge: 8,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'partner-school',
      medicalStaff: true,
      safeguarding: true,
      airportPickup: true,
      mealPlan: 'full-board',
      curfew: '21:00',
      roommatePairing: 'age-gender',
      languageSupport: ['English', 'Spanish'],
      emergencyProtocol: true
    }
  },
  {
    id: "jc-ferrero",
    availability: { status: 'closed', nextIntake: '2025-12-01', spotsLeft: null, responseTime: '3-5 days', privateLessons: true, yearRound: false },
    name: "JC Ferrero Equelite Sport Academy",
    country: "Spain",
    countryFlag: "🇪🇸",
    city: "Villena",
    lat: 38.6361, lng: -0.8656,
    website: "https://www.equelite.com",
    contact: "+34 965 803 975",
    contactEmail: "info@equelite.com",
    individualLessons: true,
    boarding: true,
    level: "Elite",
    starred: true,
    airport: { name: "Alicante-Elche Airport", code: "ALC", distance: "60 km", driveTime: "45 min" },
    beach: { distance: null, description: "Inland location" },
    climate: "villena",
    priceRange: { from: 1200, to: 3500, unit: "week", display: "€1200–€3500/wk" },
    programs: [
        { name: "Professional Program", price: "€varies", desc: "Intensive professional training under Juan Carlos Ferrero's guidance, preparing players for ATP/WTA tours. (Full Year, Advanced/Elite)" },
        { name: "Junior Academy", price: "€varies", desc: "Year-round junior program balancing competitive tennis development with academic studies. (Full Year, Intermediate/Advanced)" },
        { name: "Tennis Camp", price: "€varies", desc: "Short-term intensive camps offering elite-level training experience for all ages and abilities. (1-4 weeks, All Levels)" },
        { name: "Individual Training", price: "€varies", desc: "Personalized one-on-one coaching sessions tailored to individual player needs and goals. (1-2 weeks, All Levels)" }
      ],
    coaches: [
        { name: "Juan Carlos Ferrero", credential: "Founder & Director", background: "Former World No. 1 and French Open champion, mentored Carlos Alcaraz to World No. 1 ranking.", atpWta: true, bestRanking: null, rankingNote: null, languages: ["Spanish", "English"], instagram: null },
        { name: "Antonio Martínez Cascales", credential: "Head Coach", background: "Experienced Spanish coach specializing in developing young talent for professional careers.", atpWta: false, bestRanking: null, rankingNote: null, languages: ["Spanish", "English"], instagram: null },
        { name: "Samuel López", credential: "Senior Coach", background: "Former professional player with extensive coaching experience at elite junior and professional levels.", atpWta: false, bestRanking: null, rankingNote: null, languages: ["Spanish", "English"], instagram: null }
      ],
    bestCoachRanking: 1,
    facilities: "18 tennis courts (clay, hard), fitness center, swimming pool, sports science center, accommodation, restaurant, padel courts",
    courtSurfaces: ["Clay", "Hard"],
    notableAlumni: ["Carlos Alcaraz", "Pablo Carreño Busta", "Nicolas Almagro"],
    description: "Founded by former World No. 1 Juan Carlos Ferrero, this elite academy in Villena has gained worldwide recognition for developing Carlos Alcaraz into the youngest World No. 1. The academy offers world-class training in Spain's sunny southeast with a proven track record of producing champions.",
    nearbyHotels: [
        { name: "Equelite Academy Residence", stars: 4, distanceKm: 0, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "Included in program" },
        { name: "Hotel Salvadora", stars: 3, distanceKm: 1, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "€50-90/night" },
        { name: "Hostal La Teja", stars: 3, distanceKm: 2, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "€35-60/night" },
        { name: "Hotel Meliá Villaitana (Benidorm)", stars: 3, distanceKm: 65, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "€100-200/night" },
        { name: "Hotel Maya (Alicante)", stars: 3, distanceKm: 55, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "€70-140/night" }
      ],
    nearbyRestaurants: [
        { name: "Restaurante Salvadora", cuisine: "Spanish", distanceKm: 1, priceRange: "€€", rating: 4.6, vegetarian: true, outdoor: true },
        { name: "Warynessy", cuisine: "Mediterranean", distanceKm: 1, priceRange: "€€", rating: 4.6, vegetarian: true, outdoor: true },
        { name: "Casa Julio", cuisine: "Traditional Spanish", distanceKm: 2, priceRange: "€€", rating: 4.6, vegetarian: true, outdoor: true },
        { name: "El Convent", cuisine: "Fine Dining", distanceKm: 50, priceRange: "€€€€", rating: 4.3999999999999995, vegetarian: true, outdoor: true },
        { name: "La Finca (Elche)", cuisine: "Michelin Star", distanceKm: 60, priceRange: "€€€€", rating: 4.5, vegetarian: true, outdoor: true }
      ],
    nearbyMedical: [
        { name: "Hospital Virgen de los Lirios", type: "Hospital", distanceKm: 15, phone: "+34 emergency", emergency: true },
        { name: "Equelite Medical Team", type: "Physiotherapy", distanceKm: 0, phone: "+34 emergency", emergency: false },
        { name: "Centro Médico Villena", type: "Clinic", distanceKm: 1, phone: "+34 emergency", emergency: false }
      ],
    costOfLiving: { rent1Bed: "€360", meal: "€4", monthlyFood: "€225", transport: "€45", currency: "EUR", summary: "Very affordable region; residential programs include meals and accommodation" },
    scholarships: { available: true, details: "Scholarships available for exceptional junior talents. JC Ferrero personally evaluates promising candidates for financial support." },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: "EU/EEA citizens, USA, Canada, Australia, UK — visa-free up to 90 days", notes: "Spain is part of the Schengen Area. EU/EEA citizens can stay freely. Non-EU citizens may need a Schengen visa for stays under 90 days or a student visa for longer programs." },
    airportTransfers: [
        { mode: "Academy transfer service", duration: "45 min", cost: "Varies", notes: "Academy transfer service, taxi (~€60), rental car" },
        { mode: "Rental car", duration: "1h 30min", cost: "Varies", notes: "Rental car, bus to Villena" },
        { mode: "High-speed train to Villena", duration: "3h 30min", cost: "Varies", notes: "High-speed train to Villena, rental car" }
      ],
    nearbyTournaments: [
        { name: "Mutua Madrid Open", level: "ATP 1000", surface: "Clay", month: "May", venue: "Madrid" },
        { name: "Barcelona Open Banc Sabadell", level: "ATP 500", surface: "Clay", month: "April", venue: "Barcelona" }
      ],
    upcomingCamps: [
      { name: "Ferrero Summer Academy", startDate: "2025-07-28", endDate: "2025-08-08", price: "€2,600", level: "Advanced" },
      { name: "Junior Development Week", startDate: "2025-09-15", endDate: "2025-09-26", price: "€1,400", level: "Beginner" }
    ],
    videoTour: null,
    juniorInfo: {
      minAge: 13,
      maxAge: 18,
      supervision: 'daytime',
      guardianStay: false,
      schooling: 'online-support',
      medicalStaff: true,
      safeguarding: true,
      airportPickup: true,
      mealPlan: 'flexible',
      curfew: '23:00',
      roommatePairing: 'age-gender',
      languageSupport: ['English', 'Spanish'],
      emergencyProtocol: true
    }
  },
  {
    id: "jaden-beck",
    availability: { status: 'open', nextIntake: '2025-06-15', spotsLeft: 19, responseTime: '48h', privateLessons: true, yearRound: true },
    name: "Jaden Beck Tennis Academy",
    country: "Germany",
    countryFlag: "🇩🇪",
    city: "Munich",
    lat: 48.1351, lng: 11.582,
    website: "https://www.jadenbeck-academy.de",
    contact: "+49 89 123 4567",
    contactEmail: "info@jadenbeck-academy.de",
    individualLessons: true,
    boarding: false,
    level: "Advanced",
    starred: false,
    airport: { name: "Munich Airport", code: "MUC", distance: "35 km", driveTime: "40 min" },
    beach: { distance: null, description: "Inland location" },
    climate: "munich",
    priceRange: { from: 800, to: 2500, unit: "week", display: "€800–€2500/wk" },
    programs: [
        { name: "Performance Training", price: "€varies", desc: "Year-round performance program focused on competitive development in the German tennis tradition. (Full Year, Advanced/Elite)" },
        { name: "Junior Development", price: "€varies", desc: "Structured junior program combining tennis fundamentals with athletic development. (Full Year, Beginner/Intermediate)" },
        { name: "Intensive Camp", price: "€varies", desc: "Short-term intensive training camp for players seeking rapid improvement. (1-2 weeks, All Levels)" }
      ],
    coaches: [
        { name: "Klaus Becker", credential: "Head Coach", background: "Former German Davis Cup player with extensive experience in developing professional players.", atpWta: false, bestRanking: null, rankingNote: null, languages: ["German", "English"], instagram: null },
        { name: "Maria Hoffmann", credential: "Junior Director", background: "DTB-certified coach specializing in youth development and talent identification.", atpWta: false, bestRanking: null, rankingNote: null, languages: ["German", "English"], instagram: null }
      ],
    bestCoachRanking: 45,
    facilities: "12 tennis courts (clay, hard, indoor), fitness center, video analysis room, physiotherapy center",
    courtSurfaces: ["Clay", "Hard", "Indoor Hard"],
    notableAlumni: ["Alexander Zverev (trained)", "Local ITF juniors"],
    description: "A well-respected German tennis academy in Munich offering high-quality training programs. Known for its systematic approach to player development and strong connections to the German Tennis Federation (DTB).",
    nearbyHotels: [
        { name: "Hotel Kaiserhof", stars: 3, distanceKm: 3, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "€80-150/night" },
        { name: "NH München Messe", stars: 3, distanceKm: 5, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "€90-170/night" },
        { name: "Courtyard by Marriott Munich", stars: 3, distanceKm: 4, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "€100-200/night" },
        { name: "Novotel München City", stars: 3, distanceKm: 8, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "€95-180/night" },
        { name: "Hotel Prinzregent", stars: 3, distanceKm: 6, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "€70-130/night" }
      ],
    nearbyRestaurants: [
        { name: "Augustiner-Keller", cuisine: "Bavarian", distanceKm: 7, priceRange: "€€", rating: 4.6, vegetarian: true, outdoor: true },
        { name: "Tantris", cuisine: "Fine Dining", distanceKm: 5, priceRange: "€€€€", rating: 4.5, vegetarian: true, outdoor: true },
        { name: "Hofbräuhaus", cuisine: "Traditional German", distanceKm: 8, priceRange: "€€", rating: 4.5, vegetarian: true, outdoor: true },
        { name: "Broeding", cuisine: "Austrian/German", distanceKm: 6, priceRange: "€€€", rating: 4.3, vegetarian: true, outdoor: true },
        { name: "Brenner Grill", cuisine: "Italian/German", distanceKm: 7, priceRange: "€€", rating: 4.5, vegetarian: true, outdoor: true }
      ],
    nearbyMedical: [
        { name: "Klinikum rechts der Isar", type: "Hospital", distanceKm: 7, phone: "+49 emergency", emergency: true },
        { name: "Sportorthopädie München", type: "Physiotherapy", distanceKm: 5, phone: "+49 emergency", emergency: false },
        { name: "Arabella Klinik", type: "Clinic", distanceKm: 4, phone: "+49 emergency", emergency: false }
      ],
    costOfLiving: { rent1Bed: "€640", meal: "€6", monthlyFood: "€400", transport: "€80", currency: "EUR", summary: "Munich is one of Germany's most expensive cities" },
    scholarships: { available: true, details: "Limited scholarships through DTB partnership for nationally ranked juniors." },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: "EU/EEA citizens, USA, Canada, Australia, UK — visa-free up to 90 days", notes: "Germany is part of the Schengen Area. EU/EEA citizens can stay freely. Non-EU citizens need a Schengen visa for short stays or a national visa for longer programs." },
    airportTransfers: [
        { mode: "S-Bahn train", duration: "40 min", cost: "Varies", notes: "S-Bahn train, taxi (~€70), rental car" },
        { mode: "Bus to Munich", duration: "1h 15min", cost: "Varies", notes: "Bus to Munich, rental car" },
        { mode: "Train to Munich", duration: "2h", cost: "Varies", notes: "Train to Munich, rental car" }
      ],
    nearbyTournaments: [
        { name: "BMW Open", level: "ATP 250", surface: "Clay", month: "April", venue: "Munich" },
        { name: "Hamburg European Open", level: "ATP 500", surface: "Clay", month: "July", venue: "Hamburg" }
      ],
    videoTour: null,
    juniorInfo: {
      minAge: 10,
      maxAge: 18,
      supervision: 'training-only',
      guardianStay: false,
      schooling: 'online-support',
      medicalStaff: true,
      safeguarding: true,
      airportPickup: true,
      mealPlan: 'flexible',
      curfew: '23:00',
      roommatePairing: 'age-gender',
      languageSupport: ['English', 'German'],
      emergencyProtocol: true
    }
  },
  {
    id: "good-to-great",
    availability: { status: 'open', nextIntake: '2025-06-01', spotsLeft: 10, responseTime: '24h', privateLessons: true, yearRound: true },
    name: "Good to Great Tennis Academy",
    country: "Sweden",
    countryFlag: "🇸🇪",
    city: "Stockholm",
    lat: 59.3099, lng: 18.0752,
    website: "https://www.goodtogreattennis.com",
    contact: "+46 8 545 678 90",
    contactEmail: "info@goodtogreattennis.com",
    individualLessons: true,
    boarding: true,
    level: "Elite",
    starred: true,
    airport: { name: "Stockholm Arlanda Airport", code: "ARN", distance: "45 km", driveTime: "40 min" },
    beach: { distance: null, description: "Inland location" },
    climate: "stockholm",
    priceRange: { from: 15000, to: 45000, unit: "week", display: "SEK 15000–SEK 45000/wk" },
    programs: [
        { name: "Elite Performance Program", price: "SEK varies", desc: "Sweden's premier tennis training program, producing multiple ATP/WTA players with its proven methodology. (Full Year, Advanced/Elite)" },
        { name: "Development Program", price: "SEK varies", desc: "Progressive development track for talented juniors aiming for national and international competition. (Full Year, Intermediate)" },
        { name: "Summer Intensive", price: "SEK varies", desc: "Intensive summer training program taking advantage of Scandinavian summer conditions. (2-4 weeks, All Levels)" },
        { name: "International Training Camp", price: "SEK varies", desc: "Short-term camp welcoming international players to experience the Swedish training approach. (1-2 weeks, Intermediate/Advanced)" }
      ],
    coaches: [
        { name: "Nicklas Kulti", credential: "Director of Tennis", background: "Former ATP professional and Swedish Davis Cup player, leading the academy's coaching philosophy.", atpWta: true, bestRanking: null, rankingNote: null, languages: ["Swedish", "English"], instagram: null },
        { name: "Magnus Norman", credential: "Senior Advisor", background: "Former World No. 2 and coach of Stan Wawrinka, contributing strategic expertise to the program.", atpWta: true, bestRanking: null, rankingNote: null, languages: ["Swedish", "English"], instagram: null },
        { name: "Mikael Tillström", credential: "Head Coach", background: "Former ATP player and experienced coach known for developing Scandinavian talent.", atpWta: true, bestRanking: null, rankingNote: null, languages: ["Swedish", "English"], instagram: null }
      ],
    bestCoachRanking: 2,
    facilities: "16 tennis courts (indoor hard, outdoor clay), modern fitness center, sports science lab, recovery center, player accommodation",
    courtSurfaces: ["Indoor Hard", "Clay"],
    notableAlumni: ["Elias Ymer", "Mikael Ymer", "Leo Borg"],
    description: "Sweden's leading tennis academy, continuing the country's proud tradition of producing world-class players. Located in Stockholm, it combines Scandinavian training methodology with modern sports science to develop the next generation of Swedish tennis stars.",
    nearbyHotels: [
        { name: "Good to Great Residence", stars: 4, distanceKm: 0, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "Included in residential program" },
        { name: "Scandic Kungens Kurva", stars: 3, distanceKm: 5, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "SEK 900-1500/night" },
        { name: "Best Western Royal Star", stars: 3, distanceKm: 8, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "SEK 800-1400/night" },
        { name: "Courtyard by Marriott Stockholm", stars: 3, distanceKm: 12, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "SEK 1200-2000/night" },
        { name: "Clarion Hotel Stockholm", stars: 3, distanceKm: 15, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "SEK 1000-1800/night" }
      ],
    nearbyRestaurants: [
        { name: "Restaurang AG", cuisine: "Swedish/Steakhouse", distanceKm: 12, priceRange: "€€€", rating: 4.3999999999999995, vegetarian: true, outdoor: true },
        { name: "Sturehof", cuisine: "Seafood", distanceKm: 14, priceRange: "€€€", rating: 4.3, vegetarian: true, outdoor: true },
        { name: "Meatballs for the People", cuisine: "Swedish", distanceKm: 13, priceRange: "€€€€", rating: 4.3999999999999995, vegetarian: true, outdoor: true },
        { name: "Fotografiska Restaurant", cuisine: "Modern Nordic", distanceKm: 13, priceRange: "€€€", rating: 4.6, vegetarian: true, outdoor: true },
        { name: "Pelikan", cuisine: "Traditional Swedish", distanceKm: 12, priceRange: "€€€", rating: 4.3, vegetarian: true, outdoor: true }
      ],
    nearbyMedical: [
        { name: "Karolinska University Hospital", type: "Hospital", distanceKm: 10, phone: "+46 emergency", emergency: true },
        { name: "Sophia Hemmet Hospital", type: "Hospital", distanceKm: 12, phone: "+46 emergency", emergency: true },
        { name: "Stockholm Sports Medicine Clinic", type: "Physiotherapy", distanceKm: 8, phone: "+46 emergency", emergency: false }
      ],
    costOfLiving: { rent1Bed: "SEK 6000", meal: "SEK 60", monthlyFood: "SEK 3750", transport: "SEK 750", currency: "SEK", summary: "Stockholm is expensive; residential programs offer better value" },
    scholarships: { available: true, details: "Scholarships available through Swedish Tennis Federation partnerships. Merit-based support for nationally ranked juniors." },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: "EU/EEA citizens, USA, Canada, Australia, UK — visa-free up to 90 days", notes: "Sweden is part of the Schengen Area and EU. EU/EEA citizens can stay freely. Non-EU citizens need a Schengen visa for short stays or a residence permit for longer programs." },
    airportTransfers: [
        { mode: "Arlanda Express train", duration: "40 min", cost: "Varies", notes: "Arlanda Express train, taxi (~SEK 600), bus" },
        { mode: "Taxi (~SEK 300)", duration: "20 min", cost: "Varies", notes: "Taxi (~SEK 300), bus" },
        { mode: "Flygbussarna bus", duration: "1h 15min", cost: "Varies", notes: "Flygbussarna bus, rental car" }
      ],
    nearbyTournaments: [
        { name: "Stockholm Open", level: "ATP 250", surface: "Hard (Indoor)", month: "October", venue: "Stockholm" },
        { name: "Swedish Open", level: "ATP 250", surface: "Clay", month: "July", venue: "Båstad" }
      ],
    videoTour: null,
    juniorInfo: {
      minAge: 12,
      maxAge: 18,
      supervision: 'daytime',
      guardianStay: false,
      schooling: 'none',
      medicalStaff: true,
      safeguarding: true,
      airportPickup: true,
      mealPlan: 'half-board',
      curfew: '22:00',
      roommatePairing: 'age-only',
      languageSupport: ['English', 'Swedish'],
      emergencyProtocol: true
    }
  },
  {
    id: "swiss-tennis",
    availability: { status: 'closed', nextIntake: '2025-12-01', spotsLeft: null, responseTime: '3-5 days', privateLessons: true, yearRound: false },
    name: "Swiss Tennis Academy Lugano",
    country: "Switzerland",
    countryFlag: "🇨🇭",
    city: "Lugano",
    lat: 46.0037, lng: 8.9511,
    website: "https://www.swisstennisacademy.ch",
    contact: "+41 91 123 4567",
    contactEmail: "info@swisstennisacademy.ch",
    individualLessons: true,
    boarding: true,
    level: "Advanced",
    starred: false,
    airport: { name: "Lugano Airport", code: "LUG", distance: "5 km", driveTime: "10 min" },
    beach: { distance: null, description: "Inland location" },
    climate: "lugano",
    priceRange: { from: 2000, to: 5000, unit: "week", display: "CHF 2000–CHF 5000/wk" },
    programs: [
        { name: "Performance Academy", price: "CHF varies", desc: "Year-round elite training in the Italian-speaking Swiss canton with world-class facilities. (Full Year, Advanced/Elite)" },
        { name: "Junior Camp", price: "CHF varies", desc: "Summer and holiday camps combining tennis with Swiss alpine and lakeside activities. (1-4 weeks, All Levels)" },
        { name: "Adult Intensive", price: "CHF varies", desc: "Focused adult training program with luxury accommodation options. (1-2 weeks, All Levels)" }
      ],
    coaches: [
        { name: "Marco Bentivoglio", credential: "Head Coach", background: "Swiss Tennis certified coach with decades of experience in developing competitive players.", atpWta: false, bestRanking: null, rankingNote: null, languages: ["Italian", "English"], instagram: null },
        { name: "Claudia Fischer", credential: "Junior Director", background: "Former WTA player and experienced youth development specialist.", atpWta: true, bestRanking: null, rankingNote: null, languages: ["Italian", "English"], instagram: null }
      ],
    bestCoachRanking: 30,
    facilities: "14 tennis courts (clay, hard, indoor), fitness center, swimming pool, spa, lakeside location",
    courtSurfaces: ["Clay", "Hard", "Indoor Hard"],
    notableAlumni: ["National Swiss junior players"],
    description: "Nestled in the beautiful Italian-speaking region of Switzerland, this academy offers premium tennis training alongside Lake Lugano. Combines Swiss precision and Italian passion for an exceptional training experience.",
    nearbyHotels: [
        { name: "Academy Partner Hotel", stars: 3, distanceKm: 1, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "CHF 120-220/night" },
        { name: "Hotel Splendide Royal", stars: 3, distanceKm: 3, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "CHF 300-600/night" },
        { name: "Villa Sassa Hotel", stars: 3, distanceKm: 2, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "CHF 180-350/night" },
        { name: "Novotel Lugano", stars: 3, distanceKm: 4, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "CHF 130-250/night" },
        { name: "Hotel Lugano Dante", stars: 3, distanceKm: 3, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "CHF 150-280/night" }
      ],
    nearbyRestaurants: [
        { name: "Grotto della Salute", cuisine: "Ticinese", distanceKm: 2, priceRange: "€€€", rating: 4.7, vegetarian: true, outdoor: true },
        { name: "Ristorante Orologio", cuisine: "Italian", distanceKm: 3, priceRange: "€€€", rating: 4.3, vegetarian: true, outdoor: true },
        { name: "Arte al Lago", cuisine: "Fine Dining", distanceKm: 3, priceRange: "€€€€", rating: 4.3, vegetarian: true, outdoor: true },
        { name: "La Tinera", cuisine: "Swiss-Italian", distanceKm: 2, priceRange: "€€", rating: 4.6, vegetarian: true, outdoor: true },
        { name: "Ristorante Galleria", cuisine: "Mediterranean", distanceKm: 3, priceRange: "€€€", rating: 4.5, vegetarian: true, outdoor: true }
      ],
    nearbyMedical: [
        { name: "Ospedale Civico", type: "Hospital", distanceKm: 4, phone: "+41 emergency", emergency: true },
        { name: "Clinica Luganese Moncucco", type: "Hospital", distanceKm: 3, phone: "+41 emergency", emergency: true },
        { name: "Swiss Sports Medicine Center", type: "Physiotherapy", distanceKm: 2, phone: "+41 emergency", emergency: false }
      ],
    costOfLiving: { rent1Bed: "CHF 1000", meal: "CHF 10", monthlyFood: "CHF 625", transport: "CHF 125", currency: "CHF", summary: "Switzerland has a high cost of living; quality of life is exceptional" },
    scholarships: { available: true, details: "Limited scholarships through Swiss Tennis Federation. Based on national ranking and potential." },
    visaInfo: { schengen: true, eu: false, visaFreeCountries: "EU/EEA citizens, USA, Canada, Australia, UK — visa-free up to 90 days", notes: "Switzerland is part of the Schengen Area but not the EU. EU/EEA citizens can stay freely. Non-EU citizens need a Schengen visa for short stays." },
    airportTransfers: [
        { mode: "Taxi (~CHF 25)", duration: "10 min", cost: "Varies", notes: "Taxi (~CHF 25), bus" },
        { mode: "Train to Lugano", duration: "1h 15min", cost: "Varies", notes: "Train to Lugano, rental car" },
        { mode: "Direct train to Lugano", duration: "2h 30min", cost: "Varies", notes: "Direct train to Lugano" }
      ],
    nearbyTournaments: [
        { name: "Swiss Open Gstaad", level: "ATP 250", surface: "Clay", month: "July", venue: "Gstaad" },
        { name: "Geneva Open", level: "ATP 250", surface: "Clay", month: "May", venue: "Geneva" }
      ],
    videoTour: null,
    juniorInfo: {
      minAge: 10,
      maxAge: 18,
      supervision: 'daytime',
      guardianStay: true,
      schooling: 'none',
      medicalStaff: true,
      safeguarding: true,
      airportPickup: true,
      mealPlan: 'flexible',
      curfew: '22:00',
      roommatePairing: 'age-gender',
      languageSupport: ['English', 'French'],
      emergencyProtocol: false
    }
  },
  {
    id: "piatti",
    availability: { status: 'open', nextIntake: '2025-09-01', spotsLeft: 20, responseTime: '24h', privateLessons: false, yearRound: true },
    name: "Piatti Tennis Center",
    country: "Italy",
    countryFlag: "🇮🇹",
    city: "Bordighera",
    lat: 43.7806, lng: 7.6644,
    website: "https://www.piattitennis.com",
    contact: "+39 0184 264 040",
    contactEmail: "info@piattitennis.com",
    individualLessons: true,
    boarding: true,
    level: "Elite",
    starred: true,
    airport: { name: "Nice Côte d'Azur Airport", code: "NCE", distance: "50 km", driveTime: "45 min" },
    beach: { distance: "< 5 km", description: "Beach accessible nearby" },
    climate: "bordighera",
    priceRange: { from: 1500, to: 4500, unit: "week", display: "€1500–€4500/wk" },
    programs: [
        { name: "Professional Program", price: "€varies", desc: "Riccardo Piatti's signature professional development program that has produced multiple top-10 players. (Full Year, Advanced/Elite)" },
        { name: "Junior Academy", price: "€varies", desc: "Comprehensive junior program with Italian schooling options and professional development pathway. (Full Year, Intermediate/Advanced)" },
        { name: "Intensive Training Week", price: "€varies", desc: "Short-term intensive experience using the Piatti methodology. (1-2 weeks, Intermediate/Advanced)" },
        { name: "Summer Camp", price: "€varies", desc: "Summer training camp on the beautiful Italian Riviera coast. (1-4 weeks, All Levels)" }
      ],
    coaches: [
        { name: "Riccardo Piatti", credential: "Founder & Head Coach", background: "One of the most respected coaches in tennis history, having trained Djokovic, Berdych, Raonic, and many other top players.", atpWta: false, bestRanking: null, rankingNote: null, languages: ["Italian", "English"], instagram: null },
        { name: "Cristian Brandi", credential: "Senior Coach", background: "Experienced coach working closely with Piatti on player development programs.", atpWta: false, bestRanking: null, rankingNote: null, languages: ["Italian", "English"], instagram: null },
        { name: "Massimo Sartori", credential: "Performance Coach", background: "Fitness and conditioning expert specializing in tennis-specific athletic development.", atpWta: false, bestRanking: null, rankingNote: null, languages: ["Italian", "English"], instagram: null }
      ],
    bestCoachRanking: 1,
    facilities: "10 tennis courts (clay), fitness center, physiotherapy room, video analysis, beachside location",
    courtSurfaces: ["Clay"],
    notableAlumni: ["Novak Djokovic (trained)", "Milos Raonic (trained)", "Jannik Sinner (trained)", "Borna Coric"],
    description: "One of the most storied tennis academies in the world, founded by legendary coach Riccardo Piatti. Located on the stunning Italian Riviera in Bordighera, the academy has been instrumental in shaping the careers of numerous top-10 players. Piatti's unique methodology emphasizes technical excellence and mental fortitude.",
    nearbyHotels: [
        { name: "Hotel Parigi", stars: 3, distanceKm: 1, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "€80-160/night" },
        { name: "Hotel Villa Elisa", stars: 3, distanceKm: 0.5, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "€70-140/night" },
        { name: "Grand Hotel del Mare", stars: 3, distanceKm: 2, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "€120-280/night" },
        { name: "Hotel Piccolo Lido", stars: 3, distanceKm: 1, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "€60-120/night" },
        { name: "Hotel Aurora", stars: 3, distanceKm: 1.5, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "€65-130/night" }
      ],
    nearbyRestaurants: [
        { name: "Ristorante Magiargè", cuisine: "Ligurian", distanceKm: 1, priceRange: "€€", rating: 4.3, vegetarian: true, outdoor: true },
        { name: "La Piazzetta", cuisine: "Italian", distanceKm: 1, priceRange: "€€", rating: 4.7, vegetarian: true, outdoor: true },
        { name: "Ristorante La Reserve", cuisine: "Fine Dining", distanceKm: 2, priceRange: "€€€€", rating: 4.6, vegetarian: true, outdoor: true },
        { name: "Osteria U Funtanin", cuisine: "Traditional Italian", distanceKm: 1, priceRange: "€€€", rating: 4.5, vegetarian: true, outdoor: true },
        { name: "Amarea", cuisine: "Seafood", distanceKm: 1.5, priceRange: "€€", rating: 4.5, vegetarian: true, outdoor: true }
      ],
    nearbyMedical: [
        { name: "Ospedale Saint Charles", type: "Hospital", distanceKm: 5, phone: "+39 emergency", emergency: true },
        { name: "Centro Medico Bordighera", type: "Clinic", distanceKm: 1, phone: "+39 emergency", emergency: false },
        { name: "Physio Point Bordighera", type: "Physiotherapy", distanceKm: 1, phone: "+39 emergency", emergency: false }
      ],
    costOfLiving: { rent1Bed: "€480", meal: "€5", monthlyFood: "€300", transport: "€60", currency: "EUR", summary: "The Italian Riviera is moderately priced compared to the nearby French Riviera" },
    scholarships: { available: true, details: "Riccardo Piatti personally selects promising juniors for scholarship support. Based on talent evaluation and development potential." },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: "EU/EEA citizens, USA, Canada, Australia, UK — visa-free up to 90 days", notes: "Italy is part of the Schengen Area and EU. EU/EEA citizens can stay freely. Non-EU citizens need a Schengen visa for short stays or a student visa for longer programs." },
    airportTransfers: [
        { mode: "Taxi", duration: "45 min", cost: "Varies", notes: "Taxi, rental car, Flixbus" },
        { mode: "Train to Bordighera", duration: "1h 45min", cost: "Varies", notes: "Train to Bordighera, rental car" },
        { mode: "Train via Genoa", duration: "3h", cost: "Varies", notes: "Train via Genoa, rental car" }
      ],
    nearbyTournaments: [
        { name: "Monte-Carlo Masters", level: "ATP 1000", surface: "Clay", month: "April", venue: "Monte Carlo" },
        { name: "Italian Open", level: "ATP 1000", surface: "Clay", month: "May", venue: "Rome" },
        { name: "Internazionali di Tennis Città di Sanremo", level: "ATP Challenger", surface: "Clay", month: "Various", venue: "Sanremo" }
      ],
    upcomingCamps: [
      { name: "Italian Riviera Tennis Camp", startDate: "2025-06-02", endDate: "2025-06-13", price: "€2,000", level: "Intermediate" },
      { name: "Winter Intensive Training", startDate: "2025-12-01", endDate: "2025-12-12", price: "€1,700", level: "Advanced" },
      { name: "Spring Beginner Camp", startDate: "2025-03-24", endDate: "2025-04-04", price: "€1,200", level: "Beginner" }
    ],
    accommodation: {
      types: [
        { type: 'private', label: 'Private Room', pricePerWeek: 390, maxOccupancy: 1, bathType: 'ensuite', mealsIncluded: true },
        { type: 'twin', label: 'Twin Shared Room', pricePerWeek: 250, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
        { type: 'apartment', label: 'Self-Catering Apartment', pricePerWeek: 230, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: false },
        { type: 'triple', label: 'Triple Room', pricePerWeek: 195, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true }
      ],
      companionsAllowed: true,
      childrenAllowed: true,
      minStay: 1,
      shuttleToTraining: false,
      notes: 'Boutique residence in Bordighera, steps from the Ligurian Sea. Mediterranean cuisine included with full-board.'
    },
    videoTour: null,
    juniorInfo: {
      minAge: 6,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'partner-school',
      medicalStaff: true,
      safeguarding: true,
      airportPickup: true,
      mealPlan: 'full-board',
      curfew: '21:00',
      roommatePairing: 'age-gender',
      languageSupport: ['English', 'Italian'],
      emergencyProtocol: true
    }
  },
  {
    id: "lta-roehampton",
    availability: { status: 'open', nextIntake: '2025-07-01', spotsLeft: 18, responseTime: '48h', privateLessons: true, yearRound: true },
    name: "LTA National Tennis Centre",
    country: "United Kingdom",
    countryFlag: "🇬🇧",
    city: "Roehampton",
    lat: 51.4394, lng: -0.237,
    website: "https://www.lta.org.uk",
    contact: "+44 20 8487 7000",
    contactEmail: "info@lta.org.uk",
    individualLessons: true,
    boarding: false,
    level: "Elite",
    starred: true,
    airport: { name: "London Heathrow Airport", code: "LHR", distance: "15 km", driveTime: "30 min" },
    beach: { distance: null, description: "Inland location" },
    climate: "roehampton",
    priceRange: { from: 1200, to: 4000, unit: "week", display: "£1200–£4000/wk" },
    programs: [
        { name: "Pro Scholarship Program", price: "GBP varies", desc: "The LTA's elite scholarship program for Britain's most promising players. (Full Year, Elite)" },
        { name: "National Age Group Program", price: "GBP varies", desc: "Structured national development pathway for junior players identified as future professionals. (Full Year, Advanced)" },
        { name: "Adult Performance", price: "GBP varies", desc: "Adult coaching programs at the national center with world-class facilities. (1-4 weeks, Intermediate/Advanced)" },
        { name: "Coaching Certification", price: "GBP varies", desc: "LTA coaching qualification programs for aspiring tennis coaches. (Various, All Levels)" }
      ],
    coaches: [
        { name: "Iain Bates", credential: "Head of Player Development", background: "Leading the LTA national player development strategy with extensive professional coaching experience.", atpWta: false, bestRanking: null, rankingNote: null, languages: ["English", "English"], instagram: null },
        { name: "Leon Smith", credential: "Davis Cup Captain", background: "British Davis Cup captain contributing to the national coaching framework and elite player mentoring.", atpWta: false, bestRanking: null, rankingNote: null, languages: ["English", "English"], instagram: null },
        { name: "Anne Keothavong", credential: "Billie Jean King Cup Captain", background: "Leading Britain's women's team while supporting development programs at the national centre.", atpWta: false, bestRanking: null, rankingNote: null, languages: ["English", "English"], instagram: null }
      ],
    bestCoachRanking: 5,
    facilities: "16 tennis courts (grass, hard, indoor, clay), fitness center, sports science center, recovery suite, player accommodation, NTC gym",
    courtSurfaces: ["Grass", "Hard", "Indoor Hard", "Clay"],
    notableAlumni: ["Emma Raducanu", "Cameron Norrie", "Jack Draper", "Katie Boulter"],
    description: "The Lawn Tennis Association's flagship facility at Roehampton is the heart of British tennis. As the national training base, it provides world-class facilities and coaching for Britain's top players, combining traditional grass court heritage with modern training methods.",
    nearbyHotels: [
        { name: "NTC Player Accommodation", stars: 3, distanceKm: 0, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "For program players" },
        { name: "Hotel Cantley House", stars: 3, distanceKm: 5, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "£80-150/night" },
        { name: "Premier Inn Putney Bridge", stars: 3, distanceKm: 4, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "£90-160/night" },
        { name: "Travelodge Wimbledon", stars: 3, distanceKm: 3, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "£70-130/night" },
        { name: "Hotel du Vin Wimbledon", stars: 3, distanceKm: 3, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "£120-250/night" }
      ],
    nearbyRestaurants: [
        { name: "The Jolly Gardeners", cuisine: "British Pub", distanceKm: 2, priceRange: "€€", rating: 4.3999999999999995, vegetarian: true, outdoor: true },
        { name: "Fox & Grapes", cuisine: "Gastropub", distanceKm: 2, priceRange: "€€", rating: 4.6, vegetarian: true, outdoor: true },
        { name: "Sticks n Sushi Wimbledon", cuisine: "Japanese", distanceKm: 3, priceRange: "€€€", rating: 4.6, vegetarian: true, outdoor: true },
        { name: "The Light House", cuisine: "Modern European", distanceKm: 3, priceRange: "€€€", rating: 4.7, vegetarian: true, outdoor: true },
        { name: "San Lorenzo Wimbledon", cuisine: "Italian", distanceKm: 3, priceRange: "€€", rating: 4.5, vegetarian: true, outdoor: true }
      ],
    nearbyMedical: [
        { name: "Queen Mary's Hospital", type: "Hospital", distanceKm: 2, phone: "+44 emergency", emergency: true },
        { name: "Parkside Hospital", type: "Hospital", distanceKm: 3, phone: "+44 emergency", emergency: true },
        { name: "Wimbledon Clinics", type: "Physiotherapy", distanceKm: 3, phone: "+44 emergency", emergency: false }
      ],
    costOfLiving: { rent1Bed: "£800", meal: "£8", monthlyFood: "£500", transport: "£100", currency: "GBP", summary: "London is one of the most expensive cities in Europe" },
    scholarships: { available: true, details: "Comprehensive LTA scholarship program for nationally ranked players. Full funding available for top juniors including training, accommodation, and competition support." },
    visaInfo: { schengen: false, eu: false, visaFreeCountries: "EU/EEA citizens, USA, Canada, Australia, UK — visa-free up to 90 days", notes: "The UK is not in the Schengen Area. EU/EEA citizens can visit for up to 6 months without a visa. Non-EU citizens may need a Standard Visitor visa or Student visa." },
    airportTransfers: [
        { mode: "Taxi (~£40)", duration: "30 min", cost: "Varies", notes: "Taxi (~£40), Underground + bus, rental car" },
        { mode: "Gatwick Express + bus", duration: "1h", cost: "Varies", notes: "Gatwick Express + bus, taxi (~£80)" },
        { mode: "Stansted Express to Liverpool St", duration: "1h 30min", cost: "Varies", notes: "Stansted Express to Liverpool St, then train" }
      ],
    nearbyTournaments: [
        { name: "Wimbledon", level: "Grand Slam", surface: "Grass", month: "June-July", venue: "London" },
        { name: "Queen's Club Championships", level: "ATP 500", surface: "Grass", month: "June", venue: "London" },
        { name: "Eastbourne International", level: "ATP 250/WTA 500", surface: "Grass", month: "June", venue: "Eastbourne" }
      ],
    videoTour: null,
    juniorInfo: {
      minAge: 12,
      maxAge: 18,
      supervision: 'training-only',
      guardianStay: true,
      schooling: 'tutoring',
      medicalStaff: true,
      safeguarding: false,
      airportPickup: true,
      mealPlan: 'full-board',
      curfew: '22:00',
      roommatePairing: 'age-only',
      languageSupport: ['English'],
      emergencyProtocol: false
    }
  },
  {
    id: "estoril",
    availability: { status: 'open', nextIntake: '2025-06-15', spotsLeft: 9, responseTime: '48h', privateLessons: true, yearRound: false },
    name: "Estoril Tennis Academy",
    country: "Portugal",
    countryFlag: "🇵🇹",
    city: "Estoril",
    lat: 38.7071, lng: -9.3976,
    website: "https://www.estoriltennis.com",
    contact: "+351 21 468 9700",
    contactEmail: "info@estoriltennis.com",
    individualLessons: true,
    boarding: false,
    level: "Intermediate",
    starred: false,
    airport: { name: "Lisbon Portela Airport", code: "LIS", distance: "30 km", driveTime: "25 min" },
    beach: { distance: "< 5 km", description: "Beach accessible nearby" },
    climate: "estoril",
    priceRange: { from: 600, to: 2000, unit: "week", display: "€600–€2000/wk" },
    programs: [
        { name: "Competitive Program", price: "€varies", desc: "Year-round competitive training program on the Portuguese Riviera with tournament preparation focus. (Full Year, Intermediate/Advanced)" },
        { name: "Tennis Holiday", price: "€varies", desc: "Combine tennis training with a beach holiday on the beautiful Estoril coast. (1-2 weeks, All Levels)" },
        { name: "Junior Development", price: "€varies", desc: "Progressive junior program building skills in a supportive coastal environment. (Full Year, Beginner/Intermediate)" }
      ],
    coaches: [
        { name: "Ricardo Santos", credential: "Head Coach", background: "Portuguese Tennis Federation certified coach with international competitive experience.", atpWta: false, bestRanking: null, rankingNote: null, languages: ["Portuguese", "English"], instagram: null },
        { name: "Ana Cardoso", credential: "Junior Coach", background: "Former Portuguese national player specializing in youth development.", atpWta: false, bestRanking: null, rankingNote: null, languages: ["Portuguese", "English"], instagram: null }
      ],
    bestCoachRanking: 60,
    facilities: "8 tennis courts (clay, hard), fitness area, pro shop, clubhouse with ocean views",
    courtSurfaces: ["Clay", "Hard"],
    notableAlumni: ["Regional Portuguese players"],
    description: "Located in the glamorous seaside town of Estoril near Lisbon, this academy offers quality tennis training with stunning coastal scenery. The pleasant year-round climate and rich tennis heritage make it an ideal destination for combining tennis with leisure.",
    nearbyHotels: [
        { name: "Palacio Estoril Hotel", stars: 3, distanceKm: 1, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "€150-350/night" },
        { name: "Hotel Albatroz", stars: 3, distanceKm: 1, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "€120-280/night" },
        { name: "Vila Galé Estoril", stars: 3, distanceKm: 2, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "€80-180/night" },
        { name: "Hotel Amazonia Estoril", stars: 3, distanceKm: 1, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "€60-130/night" },
        { name: "Cascais Miragem Hotel", stars: 3, distanceKm: 3, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "€130-300/night" }
      ],
    nearbyRestaurants: [
        { name: "Restaurante Pinto", cuisine: "Portuguese", distanceKm: 1, priceRange: "€€", rating: 4.5, vegetarian: true, outdoor: true },
        { name: "Cimas", cuisine: "Seafood", distanceKm: 1, priceRange: "€€", rating: 4.7, vegetarian: true, outdoor: true },
        { name: "Monte Mar", cuisine: "Fish/Seafood", distanceKm: 2, priceRange: "€€", rating: 4.3999999999999995, vegetarian: true, outdoor: true },
        { name: "O Navegador", cuisine: "Traditional Portuguese", distanceKm: 1, priceRange: "€€", rating: 4.3, vegetarian: true, outdoor: true },
        { name: "Restaurante Furnas", cuisine: "Grilled Fish", distanceKm: 2, priceRange: "€€€", rating: 4.5, vegetarian: true, outdoor: true }
      ],
    nearbyMedical: [
        { name: "Hospital de Cascais", type: "Hospital", distanceKm: 5, phone: "+351 emergency", emergency: true },
        { name: "Clínica CUF Cascais", type: "Hospital", distanceKm: 4, phone: "+351 emergency", emergency: true },
        { name: "Centro Médico do Estoril", type: "Clinic", distanceKm: 1, phone: "+351 emergency", emergency: false }
      ],
    costOfLiving: { rent1Bed: "€400", meal: "€4", monthlyFood: "€250", transport: "€50", currency: "EUR", summary: "Portugal offers excellent value; Estoril is moderately priced for the Lisbon area" },
    scholarships: { available: true, details: "Limited scholarship support through Portuguese Tennis Federation for nationally ranked juniors." },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: "EU/EEA citizens, USA, Canada, Australia, UK — visa-free up to 90 days", notes: "Portugal is part of the Schengen Area and EU. EU/EEA citizens can stay freely. Non-EU citizens need a Schengen visa for short stays or a residence visa for longer programs." },
    airportTransfers: [
        { mode: "Taxi (~€25)", duration: "25 min", cost: "Varies", notes: "Taxi (~€25), train from Lisbon, rental car" },
        { mode: "Rental car", duration: "2h 45min", cost: "Varies", notes: "Rental car, bus" },
        { mode: "Domestic flight", duration: "3h", cost: "Varies", notes: "Domestic flight, train, rental car" }
      ],
    nearbyTournaments: [
        { name: "Estoril Open", level: "ATP 250", surface: "Clay", month: "April", venue: "Estoril" },
        { name: "Millennium Estoril Open", level: "ATP 250", surface: "Clay", month: "May", venue: "Estoril" }
      ],
    videoTour: null,
    juniorInfo: {
      minAge: 12,
      maxAge: 18,
      supervision: 'training-only',
      guardianStay: true,
      schooling: 'tutoring',
      medicalStaff: true,
      safeguarding: true,
      airportPickup: true,
      mealPlan: 'flexible',
      curfew: '22:00',
      roommatePairing: 'age-only',
      languageSupport: ['English', 'Portuguese'],
      emergencyProtocol: true
    }
  },
  {
    id: "lotto-antwerp",
    availability: { status: 'limited', nextIntake: '2025-09-15', spotsLeft: 4, responseTime: '24h', privateLessons: true, yearRound: true },
    name: "Lotto Tennis Academy Antwerp",
    country: "Belgium",
    countryFlag: "🇧🇪",
    city: "Antwerp",
    lat: 51.2194, lng: 4.4025,
    website: "https://www.lottotennis.be",
    contact: "+32 3 234 5678",
    contactEmail: "info@lottotennis.be",
    individualLessons: true,
    boarding: false,
    level: "Intermediate",
    starred: false,
    airport: { name: "Brussels Airport", code: "BRU", distance: "45 km", driveTime: "40 min" },
    beach: { distance: null, description: "Inland location" },
    climate: "antwerp",
    priceRange: { from: 700, to: 2200, unit: "week", display: "€700–€2200/wk" },
    programs: [
        { name: "Competitive Program", price: "€varies", desc: "Year-round competitive training following Belgium's strong tennis tradition. (Full Year, Intermediate/Advanced)" },
        { name: "Junior Academy", price: "€varies", desc: "Structured junior development with Belgian Tennis Federation alignment. (Full Year, Beginner/Intermediate)" },
        { name: "Holiday Camp", price: "€varies", desc: "School holiday tennis camps for juniors of all levels. (1-2 weeks, All Levels)" }
      ],
    coaches: [
        { name: "Jan Vandenberghe", credential: "Head Coach", background: "Belgian Tennis Federation certified coach with extensive national team experience.", atpWta: false, bestRanking: null, rankingNote: null, languages: ["Dutch", "English"], instagram: null },
        { name: "Lisa Mertens", credential: "Junior Director", background: "Former Belgian national player dedicated to youth development programs.", atpWta: false, bestRanking: null, rankingNote: null, languages: ["Dutch", "English"], instagram: null }
      ],
    bestCoachRanking: 40,
    facilities: "10 tennis courts (clay, indoor hard), fitness center, video analysis, clubhouse",
    courtSurfaces: ["Clay", "Indoor Hard"],
    notableAlumni: ["Regional Belgian players"],
    description: "Located in the dynamic city of Antwerp, this academy continues Belgium's impressive tennis legacy. With a focus on technical development and competitive preparation, it serves as a key development center for Flemish tennis talent.",
    nearbyHotels: [
        { name: "Hotel Julien", stars: 3, distanceKm: 5, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "€120-250/night" },
        { name: "Park Inn by Radisson", stars: 3, distanceKm: 4, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "€80-150/night" },
        { name: "NH Antwerp", stars: 3, distanceKm: 6, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "€90-170/night" },
        { name: "Hotel Franq", stars: 3, distanceKm: 5, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "€150-300/night" },
        { name: "Tryp by Wyndham", stars: 3, distanceKm: 4, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "€70-130/night" }
      ],
    nearbyRestaurants: [
        { name: "Het Gerecht", cuisine: "Belgian", distanceKm: 5, priceRange: "€€€", rating: 4.3999999999999995, vegetarian: true, outdoor: true },
        { name: "Fiskebar", cuisine: "Seafood", distanceKm: 5, priceRange: "€€€", rating: 4.3999999999999995, vegetarian: true, outdoor: true },
        { name: "De Bomma", cuisine: "Traditional Flemish", distanceKm: 4, priceRange: "€€", rating: 4.7, vegetarian: true, outdoor: true },
        { name: "Graanmarkt 13", cuisine: "Fine Dining", distanceKm: 5, priceRange: "€€€€", rating: 4.3999999999999995, vegetarian: true, outdoor: true },
        { name: "Balls & Glory", cuisine: "Belgian Comfort", distanceKm: 5, priceRange: "€€", rating: 4.5, vegetarian: true, outdoor: true }
      ],
    nearbyMedical: [
        { name: "UZA University Hospital", type: "Hospital", distanceKm: 4, phone: "+32 emergency", emergency: true },
        { name: "GZA Hospitals", type: "Hospital", distanceKm: 3, phone: "+32 emergency", emergency: true },
        { name: "Sport Medical Center Antwerp", type: "Physiotherapy", distanceKm: 2, phone: "+32 emergency", emergency: false }
      ],
    costOfLiving: { rent1Bed: "€520", meal: "€5", monthlyFood: "€325", transport: "€65", currency: "EUR", summary: "Antwerp is moderately expensive by European standards" },
    scholarships: { available: true, details: "Scholarships available through Belgian Tennis Federation for ranked juniors." },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: "EU/EEA citizens, USA, Canada, Australia, UK — visa-free up to 90 days", notes: "Belgium is part of the Schengen Area and EU. EU/EEA citizens can stay freely. Non-EU citizens need a Schengen visa for short stays." },
    airportTransfers: [
        { mode: "Train to Antwerp", duration: "40 min", cost: "Varies", notes: "Train to Antwerp, taxi (~€60)" },
        { mode: "Taxi (~€15)", duration: "10 min", cost: "Varies", notes: "Taxi (~€15), bus" },
        { mode: "Bus to Brussels", duration: "1h 15min", cost: "Varies", notes: "Bus to Brussels, train to Antwerp" }
      ],
    nearbyTournaments: [
        { name: "European Open Antwerp", level: "ATP 250", surface: "Hard (Indoor)", month: "October", venue: "Antwerp" },
        { name: "Brussels Open", level: "WTA 250", surface: "Clay", month: "June", venue: "Brussels" }
      ],
    videoTour: null,
    juniorInfo: {
      minAge: 18,
      maxAge: null,
      supervision: 'none',
      guardianStay: false,
      schooling: 'none',
      medicalStaff: false,
      safeguarding: false,
      airportPickup: false,
      mealPlan: 'self-catering',
      curfew: null,
      roommatePairing: 'self-select',
      languageSupport: ['English'],
      emergencyProtocol: false
    }
  },
  {
    id: "knltb",
    availability: { status: 'closed', nextIntake: '2025-12-01', spotsLeft: null, responseTime: '3-5 days', privateLessons: true, yearRound: false },
    name: "KNLTB Tennis Academy",
    country: "Netherlands",
    countryFlag: "🇳🇱",
    city: "Amstelveen",
    lat: 52.3014, lng: 4.8653,
    website: "https://www.knltb.nl",
    contact: "+31 20 545 3434",
    contactEmail: "info@knltb.nl",
    individualLessons: true,
    boarding: false,
    level: "Advanced",
    starred: false,
    airport: { name: "Amsterdam Schiphol Airport", code: "AMS", distance: "8 km", driveTime: "15 min" },
    beach: { distance: null, description: "Inland location" },
    climate: "amstelveen",
    priceRange: { from: 900, to: 2800, unit: "week", display: "€900–€2800/wk" },
    programs: [
        { name: "National Performance Program", price: "€varies", desc: "The KNLTB's flagship performance program for the Netherlands' top tennis prospects. (Full Year, Advanced/Elite)" },
        { name: "Talent Development", price: "€varies", desc: "Structured pathway for talented Dutch juniors aspiring to professional tennis. (Full Year, Intermediate/Advanced)" },
        { name: "International Camp", price: "€varies", desc: "Open international training camp at the Dutch national center. (1-2 weeks, All Levels)" }
      ],
    coaches: [
        { name: "Raemon Sluiter", credential: "National Coach", background: "Former ATP player and coach of Kiki Bertens, leading Dutch player development.", atpWta: true, bestRanking: null, rankingNote: null, languages: ["Dutch", "English"], instagram: null },
        { name: "Dennis Schenk", credential: "Junior Development Coach", background: "KNLTB certified coach specializing in talent identification and junior development.", atpWta: false, bestRanking: null, rankingNote: null, languages: ["Dutch", "English"], instagram: null }
      ],
    bestCoachRanking: 15,
    facilities: "12 tennis courts (clay, hard, indoor), national training center, fitness facility, sports science support",
    courtSurfaces: ["Clay", "Hard", "Indoor Hard"],
    notableAlumni: ["Kiki Bertens (trained)", "Botic van de Zandschulp", "Tallon Griekspoor"],
    description: "The Royal Dutch Tennis Association's national training center in Amstelveen, near Amsterdam. Serving as the development hub for Dutch tennis, it combines federation resources with professional coaching to nurture the country's tennis talent.",
    nearbyHotels: [
        { name: "NH Amsterdam Schiphol Airport", stars: 3, distanceKm: 8, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "€100-200/night" },
        { name: "Citizen M Amstelveen", stars: 3, distanceKm: 2, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "€90-180/night" },
        { name: "Hyatt Place Amsterdam Airport", stars: 3, distanceKm: 6, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "€110-220/night" },
        { name: "Holiday Inn Amsterdam", stars: 3, distanceKm: 5, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "€85-170/night" },
        { name: "Novotel Amsterdam Schiphol", stars: 3, distanceKm: 7, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "€95-190/night" }
      ],
    nearbyRestaurants: [
        { name: "Restaurant Klein Kalfje", cuisine: "Dutch", distanceKm: 2, priceRange: "€€€", rating: 4.3999999999999995, vegetarian: true, outdoor: true },
        { name: "Aan de Poel", cuisine: "Michelin Star", distanceKm: 2, priceRange: "€€€€", rating: 4.3999999999999995, vegetarian: true, outdoor: true },
        { name: "Brasserie Paardenburg", cuisine: "Dutch/French", distanceKm: 5, priceRange: "€€€", rating: 4.3, vegetarian: true, outdoor: true },
        { name: "De Jonge Dikkert", cuisine: "French/Dutch", distanceKm: 3, priceRange: "€€€", rating: 4.5, vegetarian: true, outdoor: true },
        { name: "Restaurant Kronenburg", cuisine: "International", distanceKm: 2, priceRange: "€€€", rating: 4.5, vegetarian: true, outdoor: true }
      ],
    nearbyMedical: [
        { name: "Amstelland Hospital", type: "Hospital", distanceKm: 3, phone: "+31 emergency", emergency: true },
        { name: "VU Medical Center", type: "Hospital", distanceKm: 8, phone: "+31 emergency", emergency: true },
        { name: "Sports Medical Center Amstelveen", type: "Physiotherapy", distanceKm: 1, phone: "+31 emergency", emergency: false }
      ],
    costOfLiving: { rent1Bed: "€600", meal: "€6", monthlyFood: "€375", transport: "€75", currency: "EUR", summary: "The Amsterdam/Amstelveen area has a high cost of living" },
    scholarships: { available: true, details: "KNLTB scholarship program for nationally ranked juniors with NOC*NSF funding support." },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: "EU/EEA citizens, USA, Canada, Australia, UK — visa-free up to 90 days", notes: "Netherlands is part of the Schengen Area and EU. EU/EEA citizens can stay freely. Non-EU citizens need a Schengen visa for short stays." },
    airportTransfers: [
        { mode: "Taxi (~€25)", duration: "15 min", cost: "Varies", notes: "Taxi (~€25), bus, rental car" },
        { mode: "Train to Amsterdam", duration: "1h 20min", cost: "Varies", notes: "Train to Amsterdam, bus" },
        { mode: "Train", duration: "50 min", cost: "Varies", notes: "Train, rental car" }
      ],
    nearbyTournaments: [
        { name: "Libema Open", level: "ATP 250/WTA 250", surface: "Grass", month: "June", venue: "'s-Hertogenbosch" },
        { name: "ABN AMRO Open", level: "ATP 500", surface: "Hard (Indoor)", month: "February", venue: "Rotterdam" }
      ],
    videoTour: null,
    juniorInfo: {
      minAge: 13,
      maxAge: 18,
      supervision: 'training-only',
      guardianStay: true,
      schooling: 'none',
      medicalStaff: false,
      safeguarding: true,
      airportPickup: false,
      mealPlan: 'half-board',
      curfew: '23:00',
      roommatePairing: 'age-only',
      languageSupport: ['English', 'Dutch'],
      emergencyProtocol: true
    }
  },
  {
    id: "lundin-copenhagen",
    availability: { status: 'open', nextIntake: '2025-09-01', spotsLeft: 8, responseTime: '24h', privateLessons: false, yearRound: true },
    name: "Lundin Tennis Academy",
    country: "Denmark",
    countryFlag: "🇩🇰",
    city: "Copenhagen",
    lat: 55.6761, lng: 12.5683,
    website: "https://www.lundintennis.dk",
    contact: "+45 33 123 456",
    contactEmail: "info@lundintennis.dk",
    individualLessons: true,
    boarding: false,
    level: "Advanced",
    starred: false,
    airport: { name: "Copenhagen Airport", code: "CPH", distance: "10 km", driveTime: "20 min" },
    beach: { distance: null, description: "Inland location" },
    climate: "copenhagen",
    priceRange: { from: 8000, to: 25000, unit: "week", display: "DKK 8000–DKK 25000/wk" },
    programs: [
        { name: "Performance Academy", price: "DKK varies", desc: "Denmark's leading performance program combining Scandinavian methodology with international standards. (Full Year, Advanced/Elite)" },
        { name: "Junior Talent Program", price: "DKK varies", desc: "Development pathway for talented Danish juniors under the Danish Tennis Federation framework. (Full Year, Intermediate)" },
        { name: "Tennis Camp", price: "DKK varies", desc: "Intensive short-term camp for players of all ages and abilities. (1-2 weeks, All Levels)" }
      ],
    coaches: [
        { name: "Michael Mortensen", credential: "Head Coach", background: "Former Danish Davis Cup player and experienced developer of Scandinavian tennis talent.", atpWta: false, bestRanking: null, rankingNote: null, languages: ["Danish", "English"], instagram: null },
        { name: "Kristina Larsen", credential: "Junior Director", background: "Danish Tennis Federation certified coach with expertise in youth development.", atpWta: false, bestRanking: null, rankingNote: null, languages: ["Danish", "English"], instagram: null }
      ],
    bestCoachRanking: 50,
    facilities: "8 tennis courts (indoor hard, outdoor clay), fitness center, analysis room, player lounge",
    courtSurfaces: ["Indoor Hard", "Clay"],
    notableAlumni: ["Holger Rune (trained)", "Caroline Wozniacki (connection)"],
    description: "Copenhagen's top tennis academy, contributing to Denmark's growing reputation in international tennis. The academy benefits from Denmark's strong sporting culture and excellent indoor facilities for year-round training despite the Nordic climate.",
    nearbyHotels: [
        { name: "Scandic Copenhagen", stars: 3, distanceKm: 5, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "DKK 900-1600/night" },
        { name: "Absalon Hotel", stars: 3, distanceKm: 6, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "DKK 800-1400/night" },
        { name: "Comfort Hotel Vesterbro", stars: 3, distanceKm: 6, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "DKK 700-1200/night" },
        { name: "Hotel Nimb", stars: 3, distanceKm: 7, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "DKK 2000-4000/night" },
        { name: "Radisson Blu Scandinavia", stars: 3, distanceKm: 5, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "DKK 1000-1800/night" }
      ],
    nearbyRestaurants: [
        { name: "Noma", cuisine: "New Nordic", distanceKm: 6, priceRange: "€€€€", rating: 4.6, vegetarian: true, outdoor: true },
        { name: "Kiin Kiin", cuisine: "Thai", distanceKm: 5, priceRange: "€€€", rating: 4.3999999999999995, vegetarian: true, outdoor: true },
        { name: "Gasoline Grill", cuisine: "Burgers", distanceKm: 6, priceRange: "€€€€", rating: 4.5, vegetarian: true, outdoor: true },
        { name: "Restaurant Schønnemann", cuisine: "Danish", distanceKm: 6, priceRange: "€€€", rating: 4.7, vegetarian: true, outdoor: true },
        { name: "Torvehallerne Market", cuisine: "Mixed", distanceKm: 5, priceRange: "€€€€", rating: 4.7, vegetarian: true, outdoor: true }
      ],
    nearbyMedical: [
        { name: "Rigshospitalet", type: "Hospital", distanceKm: 5, phone: "+45 emergency", emergency: true },
        { name: "Frederiksberg Hospital", type: "Hospital", distanceKm: 4, phone: "+45 emergency", emergency: true },
        { name: "Copenhagen Sports Medicine", type: "Physiotherapy", distanceKm: 3, phone: "+45 emergency", emergency: false }
      ],
    costOfLiving: { rent1Bed: "DKK 4800", meal: "DKK 48", monthlyFood: "DKK 3000", transport: "DKK 600", currency: "DKK", summary: "Copenhagen is one of the most expensive cities in Scandinavia" },
    scholarships: { available: true, details: "Danish Tennis Federation scholarship support for nationally ranked juniors." },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: "EU/EEA citizens, USA, Canada, Australia, UK — visa-free up to 90 days", notes: "Denmark is part of the Schengen Area and EU. EU/EEA citizens can stay freely. Non-EU citizens need a Schengen visa for short stays." },
    airportTransfers: [
        { mode: "Metro", duration: "20 min", cost: "Varies", notes: "Metro, taxi (~DKK 250), bus" },
        { mode: "Øresund Bridge", duration: "35 min", cost: "Varies", notes: "Øresund Bridge, taxi, train" },
        { mode: "Domestic connection", duration: "2h 45min", cost: "Varies", notes: "Domestic connection, train, rental car" }
      ],
    nearbyTournaments: [
        { name: "Stockholm Open", level: "ATP 250", surface: "Hard (Indoor)", month: "October", venue: "Stockholm" },
        { name: "Danish Open (historical)", level: "ATP/WTA", surface: "Various", month: "Various", venue: "Copenhagen" }
      ],
    videoTour: null,
    juniorInfo: {
      minAge: 13,
      maxAge: 18,
      supervision: 'daytime',
      guardianStay: true,
      schooling: 'none',
      medicalStaff: true,
      safeguarding: true,
      airportPickup: true,
      mealPlan: 'full-board',
      curfew: '23:00',
      roommatePairing: 'age-only',
      languageSupport: ['English', 'Danish'],
      emergencyProtocol: true
    }
  },
  {
    id: "asc-helsinki",
    availability: { status: 'closed', nextIntake: '2025-12-01', spotsLeft: null, responseTime: '3-5 days', privateLessons: true, yearRound: false },
    name: "ASC Tennis Academy Helsinki",
    country: "Finland",
    countryFlag: "🇫🇮",
    city: "Helsinki",
    lat: 60.1699, lng: 24.9384,
    website: "https://www.asctennis.fi",
    contact: "+358 9 123 4567",
    contactEmail: "info@asctennis.fi",
    individualLessons: true,
    boarding: false,
    level: "Intermediate",
    starred: false,
    airport: { name: "Helsinki-Vantaa Airport", code: "HEL", distance: "18 km", driveTime: "25 min" },
    beach: { distance: null, description: "Inland location" },
    climate: "helsinki",
    priceRange: { from: 700, to: 2200, unit: "week", display: "€700–€2200/wk" },
    programs: [
        { name: "Performance Training", price: "€varies", desc: "Year-round performance training in Finland's capital with state-of-the-art indoor facilities. (Full Year, Intermediate/Advanced)" },
        { name: "Junior Academy", price: "€varies", desc: "Development program for Finnish juniors with Finnish Tennis Association support. (Full Year, Beginner/Intermediate)" },
        { name: "Summer Intensive", price: "€varies", desc: "Intensive summer training taking advantage of Finnish midnight sun conditions. (1-4 weeks, All Levels)" }
      ],
    coaches: [
        { name: "Jarkko Nieminen", credential: "Academy Ambassador", background: "Former Finnish No. 1 and ATP professional, contributing to the development of Finnish tennis.", atpWta: true, bestRanking: null, rankingNote: null, languages: ["Finnish", "English"], instagram: null },
        { name: "Ville Liukko", credential: "Head Coach", background: "Experienced Finnish coach with international coaching certifications and competitive background.", atpWta: false, bestRanking: null, rankingNote: null, languages: ["Finnish", "English"], instagram: null }
      ],
    bestCoachRanking: 20,
    facilities: "10 tennis courts (indoor hard, outdoor clay), fitness center, sauna, recovery area, player lounge",
    courtSurfaces: ["Indoor Hard", "Clay"],
    notableAlumni: ["Finnish national junior players"],
    description: "Helsinki's leading tennis academy, offering high-quality training in Finland's capital. With excellent indoor facilities to handle the Nordic climate and a strong connection to the Finnish Tennis Association, the academy provides a pathway for Finnish tennis talent.",
    nearbyHotels: [
        { name: "Scandic Park Helsinki", stars: 3, distanceKm: 8, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "€100-200/night" },
        { name: "Original Sokos Hotel Helsinki", stars: 3, distanceKm: 10, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "€90-180/night" },
        { name: "Radisson Blu Plaza", stars: 3, distanceKm: 10, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "€110-220/night" },
        { name: "Hotel Indigo Helsinki", stars: 3, distanceKm: 9, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "€120-240/night" },
        { name: "Hilton Helsinki Airport", stars: 3, distanceKm: 3, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "€95-190/night" }
      ],
    nearbyRestaurants: [
        { name: "Ravintola Savoy", cuisine: "Finnish/Nordic", distanceKm: 10, priceRange: "€€€€", rating: 4.6, vegetarian: true, outdoor: true },
        { name: "Sea Horse", cuisine: "Traditional Finnish", distanceKm: 9, priceRange: "€€", rating: 4.3999999999999995, vegetarian: true, outdoor: true },
        { name: "Grön", cuisine: "New Nordic", distanceKm: 10, priceRange: "€€€€", rating: 4.6, vegetarian: true, outdoor: true },
        { name: "Löyly", cuisine: "Modern Finnish", distanceKm: 8, priceRange: "€€€", rating: 4.6, vegetarian: true, outdoor: true },
        { name: "Zetor", cuisine: "Finnish", distanceKm: 10, priceRange: "€€", rating: 4.7, vegetarian: true, outdoor: true }
      ],
    nearbyMedical: [
        { name: "Helsinki University Hospital (HUS)", type: "Hospital", distanceKm: 8, phone: "+358 emergency", emergency: true },
        { name: "Mehiläinen Hospital", type: "Hospital", distanceKm: 5, phone: "+358 emergency", emergency: true },
        { name: "Helsinki Sports Medicine Clinic", type: "Physiotherapy", distanceKm: 4, phone: "+358 emergency", emergency: false }
      ],
    costOfLiving: { rent1Bed: "€560", meal: "€6", monthlyFood: "€350", transport: "€70", currency: "EUR", summary: "Helsinki is moderately expensive; excellent public services offset costs" },
    scholarships: { available: true, details: "Finnish Tennis Association provides support for nationally ranked juniors with Olympic Committee backing." },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: "EU/EEA citizens, USA, Canada, Australia, UK — visa-free up to 90 days", notes: "Finland is part of the Schengen Area and EU. EU/EEA citizens can stay freely. Non-EU citizens need a Schengen visa for short stays." },
    airportTransfers: [
        { mode: "Train", duration: "25 min", cost: "Varies", notes: "Train, taxi (~€40), bus" },
        { mode: "Bus", duration: "2h", cost: "Varies", notes: "Bus, train, rental car" },
        { mode: "Ferry from Tallinn", duration: "2h", cost: "Varies", notes: "Ferry from Tallinn, Estonia" }
      ],
    nearbyTournaments: [
        { name: "Helsinki Open (historical)", level: "ATP/WTA", surface: "Hard (Indoor)", month: "Various", venue: "Helsinki" },
        { name: "Stockholm Open", level: "ATP 250", surface: "Hard (Indoor)", month: "October", venue: "Stockholm" }
      ],
    videoTour: null,
    juniorInfo: {
      minAge: 11,
      maxAge: 18,
      supervision: 'daytime',
      guardianStay: false,
      schooling: 'tutoring',
      medicalStaff: false,
      safeguarding: true,
      airportPickup: false,
      mealPlan: 'half-board',
      curfew: '22:00',
      roommatePairing: 'age-only',
      languageSupport: ['English', 'Finnish'],
      emergencyProtocol: true
    }
  },
  {
    id: "oslo-tennis",
    availability: { status: 'closed', nextIntake: '2025-12-01', spotsLeft: null, responseTime: '3-5 days', privateLessons: true, yearRound: false },
    name: "Oslo Tennis Academy",
    country: "Norway",
    countryFlag: "🇳🇴",
    city: "Oslo",
    lat: 59.9139, lng: 10.7522,
    website: "https://www.oslotennis.no",
    contact: "+47 22 123 456",
    contactEmail: "info@oslotennis.no",
    individualLessons: true,
    boarding: false,
    level: "Intermediate",
    starred: false,
    airport: { name: "Oslo Gardermoen Airport", code: "OSL", distance: "50 km", driveTime: "35 min" },
    beach: { distance: null, description: "Inland location" },
    climate: "oslo",
    priceRange: { from: 10000, to: 30000, unit: "week", display: "NOK 10000–NOK 30000/wk" },
    programs: [
        { name: "Performance Program", price: "NOK varies", desc: "Norway's premier tennis performance program with Norwegian Tennis Federation affiliation. (Full Year, Advanced/Elite)" },
        { name: "Junior Development", price: "NOK varies", desc: "Progressive junior program developing the next generation of Norwegian tennis players. (Full Year, Beginner/Intermediate)" },
        { name: "Summer Camp", price: "NOK varies", desc: "Summer tennis camps utilizing the long Norwegian summer days for intensive training. (1-4 weeks, All Levels)" }
      ],
    coaches: [
        { name: "Erik Johansen", credential: "Head Coach", background: "Former Norwegian Davis Cup player and experienced international-level coach.", atpWta: false, bestRanking: null, rankingNote: null, languages: ["Norwegian", "English"], instagram: null },
        { name: "Ingrid Haugen", credential: "Junior Coach", background: "Norwegian Tennis Federation certified coach with strong youth development expertise.", atpWta: false, bestRanking: null, rankingNote: null, languages: ["Norwegian", "English"], instagram: null }
      ],
    bestCoachRanking: 55,
    facilities: "8 tennis courts (indoor hard, outdoor clay), fitness center, recovery area, player lounge",
    courtSurfaces: ["Indoor Hard", "Clay"],
    notableAlumni: ["Casper Ruud (connection)", "Norwegian national juniors"],
    description: "Oslo's primary tennis academy, contributing to Norway's tennis renaissance led by Casper Ruud's success. With modern indoor facilities essential for the Norwegian climate, the academy offers quality training in the Scandinavian tradition.",
    nearbyHotels: [
        { name: "Thon Hotel Opera", stars: 3, distanceKm: 8, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "NOK 1000-1800/night" },
        { name: "Scandic Holmenkollen Park", stars: 3, distanceKm: 5, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "NOK 1200-2200/night" },
        { name: "Comfort Hotel Grand Central", stars: 3, distanceKm: 8, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "NOK 900-1600/night" },
        { name: "Radisson Blu Plaza Oslo", stars: 3, distanceKm: 8, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "NOK 1100-2000/night" },
        { name: "Hotel Continental", stars: 3, distanceKm: 7, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "NOK 1500-3000/night" }
      ],
    nearbyRestaurants: [
        { name: "Maaemo", cuisine: "New Nordic", distanceKm: 8, priceRange: "€€€€", rating: 4.5, vegetarian: true, outdoor: true },
        { name: "Fiskeriet", cuisine: "Seafood", distanceKm: 7, priceRange: "€€€", rating: 4.7, vegetarian: true, outdoor: true },
        { name: "Mathallen Oslo", cuisine: "Food Hall", distanceKm: 7, priceRange: "€€€€", rating: 4.3999999999999995, vegetarian: true, outdoor: true },
        { name: "Statholdergaarden", cuisine: "Norwegian Fine Dining", distanceKm: 8, priceRange: "€€€€", rating: 4.5, vegetarian: true, outdoor: true },
        { name: "Dovrehallen", cuisine: "Traditional Norwegian", distanceKm: 8, priceRange: "€€€", rating: 4.3999999999999995, vegetarian: true, outdoor: true }
      ],
    nearbyMedical: [
        { name: "Oslo University Hospital", type: "Hospital", distanceKm: 6, phone: "+47 emergency", emergency: true },
        { name: "Volvat Medical Center", type: "Hospital", distanceKm: 4, phone: "+47 emergency", emergency: true },
        { name: "Oslo Sports Trauma Research Center", type: "Physiotherapy", distanceKm: 5, phone: "+47 emergency", emergency: false }
      ],
    costOfLiving: { rent1Bed: "NOK 6000", meal: "NOK 60", monthlyFood: "NOK 3750", transport: "NOK 750", currency: "NOK", summary: "Oslo is one of the most expensive cities in Europe" },
    scholarships: { available: true, details: "Norwegian Tennis Federation and Olympiatoppen support for nationally ranked players." },
    visaInfo: { schengen: true, eu: false, visaFreeCountries: "EU/EEA citizens, USA, Canada, Australia, UK — visa-free up to 90 days", notes: "Norway is part of the Schengen Area but not the EU. EU/EEA citizens can stay freely. Non-EU citizens need a Schengen visa for short stays." },
    airportTransfers: [
        { mode: "Flytoget express train", duration: "35 min", cost: "Varies", notes: "Flytoget express train, taxi (~NOK 800), bus" },
        { mode: "Bus", duration: "1h 30min", cost: "Varies", notes: "Bus, train, rental car" },
        { mode: "Bus", duration: "50 min", cost: "Varies", notes: "Bus, rental car" }
      ],
    nearbyTournaments: [
        { name: "Norwegian Open (historical)", level: "ATP Challenger", surface: "Hard", month: "Various", venue: "Oslo" },
        { name: "Stockholm Open", level: "ATP 250", surface: "Hard (Indoor)", month: "October", venue: "Stockholm" }
      ],
    videoTour: null,
    juniorInfo: {
      minAge: 18,
      maxAge: null,
      supervision: 'none',
      guardianStay: false,
      schooling: 'none',
      medicalStaff: false,
      safeguarding: false,
      airportPickup: false,
      mealPlan: 'self-catering',
      curfew: null,
      roommatePairing: 'self-select',
      languageSupport: ['English'],
      emergencyProtocol: false
    }
  },
  {
    id: "aristotle-athens",
    availability: { status: 'open', nextIntake: '2025-09-01', spotsLeft: 10, responseTime: '24h', privateLessons: false, yearRound: true },
    name: "Aristotle Tennis Academy",
    country: "Greece",
    countryFlag: "🇬🇷",
    city: "Athens",
    lat: 37.9838, lng: 23.7275,
    website: "https://www.aristotletennis.gr",
    contact: "+30 210 123 4567",
    contactEmail: "info@aristotletennis.gr",
    individualLessons: true,
    boarding: false,
    level: "Intermediate",
    starred: false,
    airport: { name: "Athens International Airport", code: "ATH", distance: "25 km", driveTime: "35 min" },
    beach: { distance: "< 5 km", description: "Beach accessible nearby" },
    climate: "athens",
    priceRange: { from: 500, to: 1800, unit: "week", display: "€500–€1800/wk" },
    programs: [
        { name: "Competitive Program", price: "€varies", desc: "Year-round competitive training under the Greek sun with access to excellent clay courts. (Full Year, Intermediate/Advanced)" },
        { name: "Junior Academy", price: "€varies", desc: "Development program for young Greek tennis players building toward competitive play. (Full Year, Beginner/Intermediate)" },
        { name: "Tennis Holiday Program", price: "€varies", desc: "Combine tennis training with Greek culture and island excursions. (1-2 weeks, All Levels)" }
      ],
    coaches: [
        { name: "Nikos Papadopoulos", credential: "Head Coach", background: "Former Greek Davis Cup player with extensive coaching experience in Mediterranean tennis.", atpWta: false, bestRanking: null, rankingNote: null, languages: ["Greek", "English"], instagram: null },
        { name: "Elena Konstantinou", credential: "Junior Director", background: "Hellenic Tennis Federation certified coach specializing in junior development.", atpWta: false, bestRanking: null, rankingNote: null, languages: ["Greek", "English"], instagram: null }
      ],
    bestCoachRanking: 65,
    facilities: "10 tennis courts (clay, hard), fitness area, swimming pool, clubhouse with Acropolis views",
    courtSurfaces: ["Clay", "Hard"],
    notableAlumni: ["Stefanos Tsitsipas (connection)", "Maria Sakkari (connection)"],
    description: "A prominent Athens-based tennis academy offering quality training in the birthplace of the Olympics. With year-round Mediterranean sunshine and a growing reputation fueled by Greece's tennis renaissance through players like Tsitsipas and Sakkari, the academy provides excellent value.",
    nearbyHotels: [
        { name: "Hotel Grande Bretagne", stars: 3, distanceKm: 8, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "€200-500/night" },
        { name: "Electra Palace Athens", stars: 3, distanceKm: 8, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "€120-280/night" },
        { name: "Athens Marriott", stars: 3, distanceKm: 5, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "€100-220/night" },
        { name: "Wyndham Grand Athens", stars: 3, distanceKm: 6, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "€80-180/night" },
        { name: "NJV Athens Plaza", stars: 3, distanceKm: 8, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "€110-250/night" }
      ],
    nearbyRestaurants: [
        { name: "Spondi", cuisine: "Michelin Star", distanceKm: 5, priceRange: "€€€€", rating: 4.5, vegetarian: true, outdoor: true },
        { name: "Ta Karamanlidika", cuisine: "Greek", distanceKm: 7, priceRange: "€€", rating: 4.3999999999999995, vegetarian: true, outdoor: true },
        { name: "Hytra", cuisine: "Modern Greek", distanceKm: 4, priceRange: "€€€€", rating: 4.3999999999999995, vegetarian: true, outdoor: true },
        { name: "O Thanasis", cuisine: "Traditional Greek", distanceKm: 8, priceRange: "€€", rating: 4.3999999999999995, vegetarian: true, outdoor: true },
        { name: "Varoulko Seaside", cuisine: "Seafood", distanceKm: 6, priceRange: "€€", rating: 4.5, vegetarian: true, outdoor: true }
      ],
    nearbyMedical: [
        { name: "Evangelismos Hospital", type: "Hospital", distanceKm: 7, phone: "+30 emergency", emergency: true },
        { name: "Metropolitan Hospital", type: "Hospital", distanceKm: 5, phone: "+30 emergency", emergency: true },
        { name: "Athens Sports Medicine Center", type: "Physiotherapy", distanceKm: 3, phone: "+30 emergency", emergency: false }
      ],
    costOfLiving: { rent1Bed: "€360", meal: "€4", monthlyFood: "€225", transport: "€45", currency: "EUR", summary: "Athens is one of the most affordable major European capitals" },
    scholarships: { available: true, details: "Hellenic Tennis Federation scholarship support for nationally ranked juniors." },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: "EU/EEA citizens, USA, Canada, Australia, UK — visa-free up to 90 days", notes: "Greece is part of the Schengen Area and EU. EU/EEA citizens can stay freely. Non-EU citizens need a Schengen visa for short stays." },
    airportTransfers: [
        { mode: "Metro", duration: "35 min", cost: "Varies", notes: "Metro, taxi (~€35), bus" },
        { mode: "Metro", duration: "20 min", cost: "Varies", notes: "Metro, taxi (~€15)" },
        { mode: "Domestic flight", duration: "5h", cost: "Varies", notes: "Domestic flight, train, rental car" }
      ],
    nearbyTournaments: [
        { name: "Athens Open (historical)", level: "ATP 250", surface: "Hard", month: "Various", venue: "Athens" },
        { name: "Monte-Carlo Masters", level: "ATP 1000", surface: "Clay", month: "April", venue: "Monte Carlo" }
      ],
    videoTour: null,
    juniorInfo: {
      minAge: 18,
      maxAge: null,
      supervision: 'none',
      guardianStay: false,
      schooling: 'none',
      medicalStaff: false,
      safeguarding: false,
      airportPickup: false,
      mealPlan: 'self-catering',
      curfew: null,
      roommatePairing: 'self-select',
      languageSupport: ['English'],
      emergencyProtocol: false
    }
  },
  {
    id: "mallorca-academy",
    availability: { status: 'open', nextIntake: '2025-05-15', spotsLeft: 9, responseTime: '24h', privateLessons: false, yearRound: false },
    name: "Mallorca Tennis Academy",
    country: "Spain",
    countryFlag: "🇪🇸",
    city: "Palma",
    lat: 39.5696, lng: 2.6502,
    website: "https://www.mallorcatennisacademy.com",
    contact: "+34 971 234 567",
    contactEmail: "info@mallorcatennisacademy.com",
    individualLessons: true,
    boarding: true,
    level: "Advanced",
    starred: false,
    airport: { name: "Palma de Mallorca Airport", code: "PMI", distance: "10 km", driveTime: "15 min" },
    beach: { distance: "< 5 km", description: "Beach accessible nearby" },
    climate: "palma",
    priceRange: { from: 800, to: 2800, unit: "week", display: "€800–€2800/wk" },
    programs: [
        { name: "Performance Program", price: "€varies", desc: "Year-round performance training on Mallorca, Spain's tennis island paradise. (Full Year, Advanced/Elite)" },
        { name: "Junior Residential", price: "€varies", desc: "Residential junior program combining tennis with academic education on the island. (Full Year, Intermediate/Advanced)" },
        { name: "Tennis & Holiday", price: "€varies", desc: "Combine quality tennis training with a Mediterranean island holiday. (1-4 weeks, All Levels)" },
        { name: "Pre-Season Camp", price: "€varies", desc: "Pre-season preparation camp for competitive players before the clay court season. (2-4 weeks, Advanced/Elite)" }
      ],
    coaches: [
        { name: "Carlos Moyá", credential: "Academy Advisor", background: "Former World No. 1 and French Open champion, providing strategic guidance to the academy.", atpWta: true, bestRanking: null, rankingNote: null, languages: ["Spanish", "English"], instagram: null },
        { name: "Javier Torres", credential: "Head Coach", background: "Experienced Spanish coach with deep connections to Mallorcan tennis culture.", atpWta: false, bestRanking: null, rankingNote: null, languages: ["Spanish", "English"], instagram: null },
        { name: "Maria Pascual", credential: "Junior Director", background: "RFET certified coach specializing in junior development on the island.", atpWta: false, bestRanking: null, rankingNote: null, languages: ["Spanish", "English"], instagram: null }
      ],
    bestCoachRanking: 1,
    facilities: "14 tennis courts (clay, hard), fitness center, swimming pool, player residence, beachside location",
    courtSurfaces: ["Clay", "Hard"],
    notableAlumni: ["Regional Balearic players"],
    description: "Located on the beautiful island of Mallorca, this academy offers world-class tennis training in an island paradise. With year-round Mediterranean sunshine and a rich local tennis heritage, it provides an ideal setting for intensive training combined with an exceptional quality of life.",
    nearbyHotels: [
        { name: "Academy Residence", stars: 4, distanceKm: 0, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "Included in residential program" },
        { name: "Hotel Nixe Palace", stars: 3, distanceKm: 5, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "€120-280/night" },
        { name: "Meliá Palma Marina", stars: 3, distanceKm: 8, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "€100-220/night" },
        { name: "INNSiDE Palma Bosque", stars: 3, distanceKm: 7, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "€80-180/night" },
        { name: "Protur Naisa Palma", stars: 3, distanceKm: 8, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "€90-200/night" }
      ],
    nearbyRestaurants: [
        { name: "Marc Fosh", cuisine: "Michelin Star", distanceKm: 8, priceRange: "€€€€", rating: 4.5, vegetarian: true, outdoor: true },
        { name: "Ca Na Toneta", cuisine: "Mallorcan", distanceKm: 30, priceRange: "€€", rating: 4.5, vegetarian: true, outdoor: true },
        { name: "Aromata", cuisine: "Mediterranean", distanceKm: 8, priceRange: "€€€", rating: 4.7, vegetarian: true, outdoor: true },
        { name: "El Camino", cuisine: "Spanish", distanceKm: 7, priceRange: "€€", rating: 4.5, vegetarian: true, outdoor: true },
        { name: "La Parada", cuisine: "Tapas", distanceKm: 8, priceRange: "€€", rating: 4.3999999999999995, vegetarian: true, outdoor: true }
      ],
    nearbyMedical: [
        { name: "Hospital Son Espases", type: "Hospital", distanceKm: 6, phone: "+34 emergency", emergency: true },
        { name: "Clínica Rotger", type: "Hospital", distanceKm: 7, phone: "+34 emergency", emergency: true },
        { name: "Centro Médico Porto Pi", type: "Clinic", distanceKm: 5, phone: "+34 emergency", emergency: false }
      ],
    costOfLiving: { rent1Bed: "€440", meal: "€4", monthlyFood: "€275", transport: "€55", currency: "EUR", summary: "Mallorca is moderately priced; tourist season (summer) is more expensive" },
    scholarships: { available: true, details: "Scholarships available through RFET and local Balearic sports federation for talented juniors." },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: "EU/EEA citizens, USA, Canada, Australia, UK — visa-free up to 90 days", notes: "Spain is part of the Schengen Area. EU/EEA citizens can stay freely. Non-EU citizens may need a Schengen visa for stays under 90 days or a student visa for longer programs." },
    airportTransfers: [
        { mode: "Taxi (~€20)", duration: "15 min", cost: "Varies", notes: "Taxi (~€20), bus, rental car" },
        { mode: "Inter-island ferry from Ibiza", duration: "3h", cost: "Varies", notes: "Inter-island ferry from Ibiza" },
        { mode: "Frequent flights to/from Barcelona", duration: "45 min", cost: "Varies", notes: "Frequent flights to/from Barcelona" }
      ],
    nearbyTournaments: [
        { name: "Mallorca Championships", level: "ATP 250", surface: "Grass", month: "June", venue: "Mallorca" },
        { name: "Mutua Madrid Open", level: "ATP 1000", surface: "Clay", month: "May", venue: "Madrid" }
      ],
    videoTour: null,
    juniorInfo: {
      minAge: 8,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'tutoring',
      medicalStaff: true,
      safeguarding: true,
      airportPickup: true,
      mealPlan: 'full-board',
      curfew: '21:00',
      roommatePairing: 'age-gender',
      languageSupport: ['English', 'Spanish'],
      emergencyProtocol: true
    }
  },
  {
    id: "mouratoglou-riviera",
    availability: { status: 'open', nextIntake: '2025-07-01', spotsLeft: 10, responseTime: '48h', privateLessons: true, yearRound: true },
    name: "Mouratoglou Riviera Academy",
    country: "France",
    countryFlag: "🇫🇷",
    city: "Nice",
    lat: 43.7102, lng: 7.262,
    website: "https://www.mouratoglou.com/riviera",
    contact: "+33 4 93 456 789",
    contactEmail: "info@mouratoglou.com",
    individualLessons: true,
    boarding: true,
    level: "Advanced",
    starred: false,
    airport: { name: "Nice Côte d'Azur Airport", code: "NCE", distance: "8 km", driveTime: "15 min" },
    beach: { distance: "< 5 km", description: "Beach accessible nearby" },
    climate: "nice",
    priceRange: { from: 1200, to: 3800, unit: "week", display: "€1200–€3800/wk" },
    programs: [
        { name: "Performance Program", price: "€varies", desc: "Year-round performance training following Mouratoglou's proven methodology on the French Riviera. (Full Year, Advanced/Elite)" },
        { name: "Junior Academy", price: "€varies", desc: "Junior development program under the Mouratoglou banner with access to the academy's network. (Full Year, Intermediate/Advanced)" },
        { name: "Intensive Camp", price: "€varies", desc: "Short-term intensive camp bringing Mouratoglou's world-class coaching to Nice. (1-4 weeks, All Levels)" },
        { name: "Adult Program", price: "€varies", desc: "Adult training program combining tennis with the French Riviera lifestyle. (1-2 weeks, All Levels)" }
      ],
    coaches: [
        { name: "Antoine Moreau", credential: "Academy Director", background: "Mouratoglou-trained head coach implementing the academy's signature methodology.", atpWta: false, bestRanking: null, rankingNote: null, languages: ["French", "English"], instagram: null },
        { name: "Sophie Laurent", credential: "Senior Coach", background: "FFT certified coach with extensive experience in competitive player development.", atpWta: false, bestRanking: null, rankingNote: null, languages: ["French", "English"], instagram: null },
        { name: "Luc Fontaine", credential: "Junior Coach", background: "Young dynamic coach specializing in developing next-generation talent on the Riviera.", atpWta: false, bestRanking: null, rankingNote: null, languages: ["French", "English"], instagram: null }
      ],
    bestCoachRanking: 10,
    facilities: "12 tennis courts (clay, hard), fitness center, swimming pool, player accommodation, Mediterranean garden setting",
    courtSurfaces: ["Clay", "Hard"],
    notableAlumni: ["Various Mouratoglou network players"],
    description: "An extension of the renowned Mouratoglou Academy brand, this Nice-based facility brings world-class coaching to the French Riviera. Leveraging the Mouratoglou methodology and network, it offers premium tennis training in one of Europe's most beautiful coastal settings.",
    nearbyHotels: [
        { name: "Academy Residence", stars: 4, distanceKm: 0, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "Included in residential program" },
        { name: "Hotel Negresco", stars: 3, distanceKm: 5, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "€200-500/night" },
        { name: "Hyatt Regency Nice", stars: 3, distanceKm: 5, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "€150-350/night" },
        { name: "Hotel West End Nice", stars: 3, distanceKm: 5, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "€120-280/night" },
        { name: "Radisson Blu Hotel Nice", stars: 3, distanceKm: 6, features: ["Restaurant", "WiFi"], pool: false, wifi: true, pricePerNight: "€100-250/night" }
      ],
    nearbyRestaurants: [
        { name: "Le Chantecler", cuisine: "Michelin Star", distanceKm: 5, priceRange: "€€€€", rating: 4.3999999999999995, vegetarian: true, outdoor: true },
        { name: "Chez Pipo", cuisine: "Niçois", distanceKm: 5, priceRange: "€€", rating: 4.6, vegetarian: true, outdoor: true },
        { name: "La Merenda", cuisine: "Provençal", distanceKm: 5, priceRange: "€€€", rating: 4.5, vegetarian: true, outdoor: true },
        { name: "Oliviera", cuisine: "Mediterranean", distanceKm: 5, priceRange: "€€€", rating: 4.3, vegetarian: true, outdoor: true },
        { name: "Jan", cuisine: "South African/French", distanceKm: 5, priceRange: "€€€€", rating: 4.6, vegetarian: true, outdoor: true }
      ],
    nearbyMedical: [
        { name: "Hôpital Pasteur 2", type: "Hospital", distanceKm: 4, phone: "+33 emergency", emergency: true },
        { name: "Clinique Saint George", type: "Hospital", distanceKm: 3, phone: "+33 emergency", emergency: true },
        { name: "Centre Médical Sport Nice", type: "Physiotherapy", distanceKm: 2, phone: "+33 emergency", emergency: false }
      ],
    costOfLiving: { rent1Bed: "€640", meal: "€6", monthlyFood: "€400", transport: "€80", currency: "EUR", summary: "Nice and the Côte d'Azur are expensive; beautiful climate compensates" },
    scholarships: { available: true, details: "Mouratoglou Foundation scholarships available for exceptional talent. Access to the broader Mouratoglou network's scholarship programs." },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: "EU/EEA citizens, USA, Canada, Australia, UK — visa-free up to 90 days", notes: "France is part of the Schengen Area and EU. EU/EEA citizens can stay freely. Non-EU citizens need a Schengen visa for short stays or a student visa for longer programs." },
    airportTransfers: [
        { mode: "Taxi (~€25)", duration: "15 min", cost: "Varies", notes: "Taxi (~€25), tram, bus" },
        { mode: "TGV train", duration: "2h 15min", cost: "Varies", notes: "TGV train, rental car" },
        { mode: "Taxi", duration: "25 min", cost: "Varies", notes: "Taxi, bus, helicopter transfer" }
      ],
    nearbyTournaments: [
        { name: "Monte-Carlo Masters", level: "ATP 1000", surface: "Clay", month: "April", venue: "Monte Carlo" },
        { name: "Nice Open (historical)", level: "ATP 250", surface: "Clay", month: "Various", venue: "Nice" },
        { name: "French Open", level: "Grand Slam", surface: "Clay", month: "May-June", venue: "Paris" }
      ],
    videoTour: null,
    juniorInfo: {
      minAge: 11,
      maxAge: 18,
      supervision: 'training-only',
      guardianStay: true,
      schooling: 'tutoring',
      medicalStaff: false,
      safeguarding: true,
      airportPickup: false,
      mealPlan: 'half-board',
      curfew: '23:00',
      roommatePairing: 'age-only',
      languageSupport: ['English', 'French'],
      emergencyProtocol: false
    }
  },

  {
    id: "fitzwilliam-tennis-club",
    availability: { status: 'open', nextIntake: '2026-06-01', spotsLeft: 12, responseTime: '48h', privateLessons: true, yearRound: true },
    name: "Fitzwilliam Tennis Club Academy",
    country: "Ireland",
    countryFlag: "🇮🇪",
    city: "Dublin",
    lat: 53.3301, lng: -6.2488,
    website: "https://www.fitzwilliamltc.ie",
    contact: "+353 1 660 1979",
    contactEmail: "academy@fitzwilliamltc.ie",
    individualLessons: true,
    boarding: false,
    level: "All Levels",
    starred: false,
    airport: { name: "Dublin Airport", code: "DUB", distance: "12 km", driveTime: "25 min" },
    beach: { distance: "8 km", description: "Sandymount Strand and Dublin Bay beaches" },
    climate: "dublin",
    priceRange: { from: 800, to: 2200, unit: "week", display: "€800–€2,200/wk" },
    programs: [
        { name: "Junior Development Program", price: "€800/wk", desc: "Structured junior training for ages 8-16, focusing on technique, match play and fitness. (Weekly, All Levels)" },
        { name: "Performance Squad", price: "€1,500/wk", desc: "Intensive training for competitive players with tournament preparation and strength conditioning. (Weekly, Advanced)" },
        { name: "Adult Coaching Clinic", price: "€600/wk", desc: "Group and private coaching for adult players of all standards. (Weekly, All Levels)" },
        { name: "Summer Intensive Camp", price: "€2,200/wk", desc: "Full-day immersive camp with accommodation, coaching and match play. (1-2 weeks, Intermediate/Advanced)" }
      ],
    coaches: [
        { name: "Conor Niland", credential: "Tennis Ireland National Coach", background: "Former Irish Davis Cup player and professional tour competitor with extensive coaching experience.", atpWta: true, bestRanking: 129, rankingNote: "Career-high ATP singles ranking", languages: ["English", "Irish"], instagram: null },
        { name: "Sinéad Lohan", credential: "Tennis Ireland Level 3", background: "Experienced coach specialising in junior development and women's tennis in Ireland.", atpWta: false, bestRanking: null, rankingNote: null, languages: ["English", "Irish"], instagram: null }
      ],
    bestCoachRanking: 129,
    facilities: "8 outdoor courts (4 hard, 4 artificial grass), 3 indoor hard courts, fitness centre, clubhouse with lounge and dining",
    courtSurfaces: ["Hard", "Artificial Grass"],
    notableAlumni: ["Matt Dooley", "Conor Niland"],
    photos: [
        "https://picsum.photos/seed/fitzwilliam-tennis-1/800/500",
        "https://picsum.photos/seed/fitzwilliam-tennis-2/800/500",
        "https://picsum.photos/seed/fitzwilliam-tennis-3/800/500"
      ],
    description: "Founded in 1877, Fitzwilliam Lawn Tennis Club is Ireland's oldest and most prestigious tennis club. Located in the heart of Dublin, the academy offers world-class coaching in a historic setting, producing generations of Irish tennis talent.",
    nearbyHotels: [
        { name: "The Shelbourne Hotel", stars: 5, distanceKm: 0.5, features: ["Restaurant", "Spa", "Gym", "Bar"], pool: true, wifi: true, pricePerNight: "€350" },
        { name: "The Merrion Hotel", stars: 5, distanceKm: 0.8, features: ["Restaurant", "Spa", "Garden"], pool: true, wifi: true, pricePerNight: "€300" },
        { name: "Clayton Hotel Burlington Road", stars: 4, distanceKm: 0.3, features: ["Restaurant", "Bar", "Parking"], pool: false, wifi: true, pricePerNight: "€150" },
        { name: "Mespil Hotel", stars: 3, distanceKm: 0.5, features: ["Restaurant", "Parking"], pool: false, wifi: true, pricePerNight: "€120" },
        { name: "Generator Dublin", stars: 2, distanceKm: 1.5, features: ["Bar", "WiFi"], pool: false, wifi: true, pricePerNight: "€40" }
      ],
    nearbyRestaurants: [
        { name: "Chapter One", cuisine: "Michelin Star Irish", distanceKm: 2.5, priceRange: "€€€€", rating: 4.7, vegetarian: true, outdoor: false },
        { name: "The Chop House", cuisine: "Gastropub", distanceKm: 0.8, priceRange: "€€€", rating: 4.4, vegetarian: true, outdoor: true },
        { name: "Locks Brasserie", cuisine: "Modern Irish", distanceKm: 1.0, priceRange: "€€€", rating: 4.5, vegetarian: true, outdoor: true },
        { name: "Farmer Brown's", cuisine: "Irish Contemporary", distanceKm: 1.2, priceRange: "€€", rating: 4.3, vegetarian: true, outdoor: false }
      ],
    nearbyMedical: [
        { name: "St Vincent's University Hospital", type: "Hospital", distanceKm: 3.0, phone: "+353 1 221 4000", emergency: true },
        { name: "Blackrock Clinic", type: "Hospital", distanceKm: 5.0, phone: "+353 1 283 2222", emergency: true },
        { name: "PhysioFit Dublin", type: "Physiotherapy", distanceKm: 1.0, phone: "+353 1 660 3456", emergency: false }
      ],
    costOfLiving: { rent1Bed: "€1,800", meal: "€15", monthlyFood: "€400", transport: "€120", currency: "EUR", summary: "Dublin is one of Europe's more expensive cities but offers excellent quality of life" },
    scholarships: { available: true, details: "Tennis Ireland performance scholarships available for nationally ranked juniors. Club bursaries for talented local players." },
    visaInfo: { schengen: false, eu: true, visaFreeCountries: "EU/EEA citizens, USA, Canada, Australia, UK — visa-free up to 90 days", notes: "Ireland is in the EU but not in the Schengen Area. Separate Irish visa required for non-EU citizens." },
    airportTransfers: [
        { mode: "Taxi", duration: "30 min", cost: "€30-40", notes: "Fixed fare taxi from Dublin Airport" },
        { mode: "Aircoach", duration: "40 min", cost: "€8", notes: "Direct coach service to city centre" },
        { mode: "Dublin Bus", duration: "50 min", cost: "€3.80", notes: "Routes 16 and 41 to city centre" }
      ],
    nearbyTournaments: [
        { name: "Irish Open Tennis Championships", level: "National", surface: "Hard", month: "July", venue: "Fitzwilliam LTC, Dublin" },
        { name: "Davis Cup Ireland", level: "Davis Cup", surface: "Hard", month: "Various", venue: "Dublin" },
        { name: "Leinster Junior Open", level: "Provincial Junior", surface: "Hard", month: "June", venue: "Various Dublin venues" }
      ],
    upcomingCamps: [
        { name: "Summer Tennis Intensive", startDate: "2026-07-06", endDate: "2026-07-17", price: "€2,200", level: "Advanced" },
        { name: "Easter Junior Camp", startDate: "2026-04-06", endDate: "2026-04-10", price: "€600", level: "All Levels" },
        { name: "Autumn Performance Camp", startDate: "2026-10-26", endDate: "2026-10-30", price: "€800", level: "Intermediate" }
      ],
    accommodation: {
        types: [
            { type: 'private', label: 'Private Room', pricePerWeek: 450, maxOccupancy: 1, bathType: 'ensuite', mealsIncluded: true },
            { type: 'twin', label: 'Twin Shared Room', pricePerWeek: 300, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
            { type: 'apartment', label: 'Self-Catering Apartment', pricePerWeek: 550, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: false }
        ],
        companionsAllowed: true,
        childrenAllowed: true,
        minStay: 1,
        shuttleToTraining: false,
        notes: 'Partner accommodation near the club in Dublin 4, walking distance to training courts'
    },
    videoTour: null,
    juniorInfo: {
      minAge: 8,
      maxAge: 18,
      supervision: 'training-only',
      guardianStay: true,
      schooling: 'tutoring',
      medicalStaff: false,
      safeguarding: true,
      airportPickup: true,
      mealPlan: 'half-board',
      curfew: '22:00',
      roommatePairing: 'age-only',
      languageSupport: ['English', 'Irish'],
      emergencyProtocol: true
    }
  },
  {
    id: "antalya-tennis-academy",
    availability: { status: 'open', nextIntake: '2026-06-01', spotsLeft: 15, responseTime: '24h', privateLessons: true, yearRound: true },
    name: "Antalya Tennis Academy",
    country: "Turkey",
    countryFlag: "🇹🇷",
    city: "Antalya",
    lat: 36.8969, lng: 30.7133,
    website: "https://www.antalyatennis.com.tr",
    contact: "+90 242 312 4567",
    contactEmail: "info@antalyatennis.com.tr",
    individualLessons: true,
    boarding: true,
    level: "All Levels",
    starred: false,
    airport: { name: "Antalya Airport", code: "AYT", distance: "12 km", driveTime: "20 min" },
    beach: { distance: "< 2 km", description: "Konyaaltı Beach nearby" },
    climate: "antalya",
    priceRange: { from: 600, to: 1800, unit: "week", display: "6001800/wk" },
    programs: [
        { name: "Performance Program", price: "1200/wk", desc: "Intensive performance training on clay and hard courts with Turkish and international coaches. (Full Year, Advanced/Elite)" },
        { name: "Junior Academy", price: "800/wk", desc: "Year-round junior development program with academic support and Mediterranean climate training. (Full Year, Intermediate/Advanced)" },
        { name: "Holiday Camp", price: "600/wk", desc: "Short-term holiday training camp combining tennis with beach and cultural activities. (1-2 weeks, All Levels)" },
        { name: "Adult Intensive", price: "700/wk", desc: "Adult training combining coaching sessions with Turkish Riviera lifestyle. (1-2 weeks, All Levels)" }
      ],
    coaches: [
        { name: "Mehmet Yıldırım", credential: "ITF Level 3 Coach", background: "Former Turkish Davis Cup player with 15 years coaching experience developing junior talent.", atpWta: false, bestRanking: null, rankingNote: null, languages: ["Turkish", "English", "German"], instagram: null },
        { name: "Ayşe Kaya", credential: "ITF Level 2 Coach", background: "Turkish national champion and experienced academy coach specializing in women's development.", atpWta: false, bestRanking: null, rankingNote: null, languages: ["Turkish", "English"], instagram: null },
        { name: "Dimitris Papadopoulos", credential: "Senior Coach", background: "Greek-born coach with ATP Challenger circuit experience, fluent in multiple languages.", atpWta: false, bestRanking: null, rankingNote: null, languages: ["English", "Greek", "Turkish"], instagram: null }
      ],
    bestCoachRanking: 10,
    facilities: "10 tennis courts (6 clay, 4 hard), covered courts, fitness center, swimming pool, player accommodation, Mediterranean garden setting",
    courtSurfaces: ["Clay", "Hard"],
    notableAlumni: [],
    description: "Premier tennis academy on the Turkish Riviera offering year-round training in an ideal Mediterranean climate. Antalya's warm weather, affordable costs, and modern facilities make it a top destination for players seeking quality coaching.",
    nearbyHotels: [
        { name: "Academy Residence", stars: 4, distanceKm: 0, features: ["Restaurant", "WiFi", "Pool"], pool: true, wifi: true, pricePerNight: "Included in residential program" },
        { name: "Hotel Su", stars: 5, distanceKm: 3, features: ["Restaurant", "WiFi", "Spa"], pool: true, wifi: true, pricePerNight: "80-150/night" },
        { name: "Rixos Downtown Antalya", stars: 5, distanceKm: 5, features: ["Restaurant", "WiFi", "Pool"], pool: true, wifi: true, pricePerNight: "100-200/night" }
      ],
    nearbyRestaurants: [
        { name: "Seraser Fine Dining", cuisine: "Mediterranean/Turkish", distanceKm: 4, priceRange: "", rating: 4.6, vegetarian: true, outdoor: true },
        { name: "Vanilla Lounge", cuisine: "Turkish", distanceKm: 3, priceRange: "", rating: 4.5, vegetarian: true, outdoor: true }
      ],
    nearbyMedical: [
        { name: "Antalya Eğitim ve Araştırma Hastanesi", type: "Hospital", distanceKm: 5, phone: "+90 242 249 4400", emergency: true },
        { name: "Medical Park Antalya", type: "Hospital", distanceKm: 8, phone: "+90 242 314 3434", emergency: true }
      ],
    costOfLiving: { rent1Bed: "300", meal: "5", monthlyFood: "200", transport: "30", currency: "TRY", summary: "Antalya offers excellent value for money compared to Western Europe" },
    scholarships: { available: true, details: "Merit-based scholarships available for talented Turkish and international juniors through the Turkish Tennis Federation." },
    visaInfo: { schengen: false, eu: false, visaFreeCountries: "EU/EEA citizens, USA, Canada, Australia, UK  visa-free or e-Visa up to 90 days", notes: "Turkey offers e-Visa for most nationalities. Non-visa-free citizens can apply online." },
    airportTransfers: [
        { mode: "Taxi (~15)", duration: "20 min", cost: "Varies", notes: "Taxi or hotel shuttle from Antalya Airport" },
        { mode: "Hotel Shuttle", duration: "25 min", cost: "Free/included", notes: "Many hotels offer free airport transfers" }
      ],
    nearbyTournaments: [
        { name: "Antalya Open", level: "ATP 250", surface: "Grass", month: "June", venue: "Antalya" },
        { name: "Turkish Junior Championships", level: "National", surface: "Clay", month: "August", venue: "Antalya" },
        { name: "Istanbul Open", level: "WTA 250", surface: "Hard", month: "April", venue: "Istanbul" }
      ],
    videoTour: null,
    juniorInfo: {
      minAge: 8,
      maxAge: 18,
      supervision: '24/7',
      guardianStay: true,
      schooling: 'online-support',
      medicalStaff: true,
      safeguarding: true,
      airportPickup: true,
      mealPlan: 'full-board',
      curfew: '22:00',
      roommatePairing: 'age-only',
      languageSupport: ['Turkish', 'English'],
      emergencyProtocol: true
    }
  }
];

const CLIMATE_DATA = {
  belgrade: {
    city: "Belgrade", country: "Serbia",
    months: [
      { month: "Jan", temp: 2, rain: 54, rainyDays: 13, wind: 11 },
      { month: "Feb", temp: 5, rain: 42, rainyDays: 12, wind: 12 },
      { month: "Mar", temp: 9, rain: 54, rainyDays: 13, wind: 12 },
      { month: "Apr", temp: 13, rain: 50, rainyDays: 12, wind: 11 },
      { month: "May", temp: 17, rain: 94, rainyDays: 14, wind: 11 },
      { month: "Jun", temp: 22, rain: 87, rainyDays: 13, wind: 9 },
      { month: "Jul", temp: 24, rain: 68, rainyDays: 10, wind: 9 },
      { month: "Aug", temp: 24, rain: 56, rainyDays: 8, wind: 9 },
      { month: "Sep", temp: 19, rain: 40, rainyDays: 8, wind: 10 },
      { month: "Oct", temp: 15, rain: 48, rainyDays: 8, wind: 11 },
      { month: "Nov", temp: 8, rain: 58, rainyDays: 8, wind: 11 },
      { month: "Dec", temp: 4, rain: 54, rainyDays: 9, wind: 11 }
    ]
  },
  "mali-losinj": {
    city: "Mali Lošinj", country: "Croatia",
    months: [
      { month: "Jan", temp: 6, rain: 88, rainyDays: 13, wind: 13 },
      { month: "Feb", temp: 6, rain: 78, rainyDays: 12, wind: 12 },
      { month: "Mar", temp: 9, rain: 80, rainyDays: 13, wind: 11 },
      { month: "Apr", temp: 12, rain: 82, rainyDays: 14, wind: 9 },
      { month: "May", temp: 17, rain: 75, rainyDays: 13, wind: 9 },
      { month: "Jun", temp: 20, rain: 66, rainyDays: 13, wind: 8 },
      { month: "Jul", temp: 23, rain: 51, rainyDays: 10, wind: 8 },
      { month: "Aug", temp: 23, rain: 86, rainyDays: 10, wind: 8 },
      { month: "Sep", temp: 20, rain: 106, rainyDays: 11, wind: 9 },
      { month: "Oct", temp: 15, rain: 114, rainyDays: 12, wind: 10 },
      { month: "Nov", temp: 11, rain: 141, rainyDays: 14, wind: 12 },
      { month: "Dec", temp: 7, rain: 103, rainyDays: 13, wind: 12 }
    ]
  },
  biograd: {
    city: "Biograd na Moru", country: "Croatia",
    months: [
      { month: "Jan", temp: 6, rain: 92, rainyDays: 11, wind: 13 },
      { month: "Feb", temp: 6, rain: 90, rainyDays: 10, wind: 13 },
      { month: "Mar", temp: 10, rain: 88, rainyDays: 10, wind: 12 },
      { month: "Apr", temp: 14, rain: 96, rainyDays: 10, wind: 11 },
      { month: "May", temp: 18, rain: 83, rainyDays: 9, wind: 10 },
      { month: "Jun", temp: 22, rain: 54, rainyDays: 7, wind: 9 },
      { month: "Jul", temp: 25, rain: 36, rainyDays: 5, wind: 9 },
      { month: "Aug", temp: 25, rain: 55, rainyDays: 5, wind: 9 },
      { month: "Sep", temp: 20, rain: 107, rainyDays: 8, wind: 10 },
      { month: "Oct", temp: 16, rain: 119, rainyDays: 10, wind: 11 },
      { month: "Nov", temp: 11, rain: 154, rainyDays: 12, wind: 13 },
      { month: "Dec", temp: 7, rain: 117, rainyDays: 11, wind: 13 }
    ]
  },
  split: {
    city: "Split", country: "Croatia",
    months: [
      { month: "Jan", temp: 8, rain: 95, rainyDays: 13, wind: 11 },
      { month: "Feb", temp: 9, rain: 86, rainyDays: 13, wind: 11 },
      { month: "Mar", temp: 11, rain: 89, rainyDays: 13, wind: 10 },
      { month: "Apr", temp: 13, rain: 83, rainyDays: 13, wind: 9 },
      { month: "May", temp: 17, rain: 69, rainyDays: 12, wind: 8 },
      { month: "Jun", temp: 21, rain: 74, rainyDays: 13, wind: 7 },
      { month: "Jul", temp: 24, rain: 46, rainyDays: 10, wind: 7 },
      { month: "Aug", temp: 24, rain: 64, rainyDays: 9, wind: 7 },
      { month: "Sep", temp: 21, rain: 75, rainyDays: 10, wind: 8 },
      { month: "Oct", temp: 16, rain: 102, rainyDays: 12, wind: 9 },
      { month: "Nov", temp: 12, rain: 134, rainyDays: 14, wind: 10 },
      { month: "Dec", temp: 8, rain: 127, rainyDays: 14, wind: 11 }
    ]
  },
  prostejov: {
    city: "Prostějov", country: "Czech Republic",
    months: [
      { month: "Jan", temp: -2.8, rain: 30, rainyDays: 12, wind: 15 },
      { month: "Feb", temp: -0.8, rain: 31, rainyDays: 11, wind: 15 },
      { month: "Mar", temp: 3.2, rain: 31, rainyDays: 11, wind: 15 },
      { month: "Apr", temp: 8.4, rain: 40, rainyDays: 11, wind: 14 },
      { month: "May", temp: 13.5, rain: 67, rainyDays: 14, wind: 13 },
      { month: "Jun", temp: 16.4, rain: 85, rainyDays: 15, wind: 12 },
      { month: "Jul", temp: 17.9, rain: 71, rainyDays: 14, wind: 11 },
      { month: "Aug", temp: 17.4, rain: 67, rainyDays: 13, wind: 11 },
      { month: "Sep", temp: 13.8, rain: 43, rainyDays: 11, wind: 12 },
      { month: "Oct", temp: 8.7, rain: 38, rainyDays: 10, wind: 13 },
      { month: "Nov", temp: 3.3, rain: 45, rainyDays: 13, wind: 14 },
      { month: "Dec", temp: -0.9, rain: 35, rainyDays: 13, wind: 14 }
    ]
  },
  prague: {
    city: "Prague", country: "Czech Republic",
    months: [
      { month: "Jan", temp: -0.3, rain: 43, rainyDays: 10, wind: 14 },
      { month: "Feb", temp: 0.7, rain: 37, rainyDays: 8, wind: 14 },
      { month: "Mar", temp: 4.4, rain: 49, rainyDays: 8, wind: 18 },
      { month: "Apr", temp: 9.6, rain: 45, rainyDays: 8, wind: 14 },
      { month: "May", temp: 14.2, rain: 71, rainyDays: 11, wind: 14 },
      { month: "Jun", temp: 17.8, rain: 82, rainyDays: 11, wind: 14 },
      { month: "Jul", temp: 19.8, rain: 85, rainyDays: 12, wind: 14 },
      { month: "Aug", temp: 19.6, rain: 75, rainyDays: 10, wind: 14 },
      { month: "Sep", temp: 15.0, rain: 60, rainyDays: 8, wind: 14 },
      { month: "Oct", temp: 9.9, rain: 46, rainyDays: 8, wind: 14 },
      { month: "Nov", temp: 5.0, rain: 47, rainyDays: 8, wind: 14 },
      { month: "Dec", temp: 1.2, rain: 47, rainyDays: 9, wind: 14 }
    ]
  },
  bratislava: {
    city: "Bratislava", country: "Slovakia",
    months: [
      { month: "Jan", temp: -0.4, rain: 39, rainyDays: 6, wind: 15 },
      { month: "Feb", temp: 1.4, rain: 37, rainyDays: 6, wind: 16 },
      { month: "Mar", temp: 5.5, rain: 46, rainyDays: 7, wind: 15 },
      { month: "Apr", temp: 10.9, rain: 51, rainyDays: 7, wind: 15 },
      { month: "May", temp: 15.4, rain: 72, rainyDays: 8, wind: 14 },
      { month: "Jun", temp: 19.3, rain: 75, rainyDays: 8, wind: 13 },
      { month: "Jul", temp: 21.3, rain: 81, rainyDays: 8, wind: 13 },
      { month: "Aug", temp: 20.9, rain: 68, rainyDays: 7, wind: 12 },
      { month: "Sep", temp: 16.2, rain: 70, rainyDays: 7, wind: 12 },
      { month: "Oct", temp: 11.1, rain: 49, rainyDays: 7, wind: 12 },
      { month: "Nov", temp: 6.2, rain: 51, rainyDays: 7, wind: 14 },
      { month: "Dec", temp: 1.0, rain: 44, rainyDays: 7, wind: 15 }
    ]
  },
  warsaw: {
    city: "Warsaw", country: "Poland",
    months: [
      { month: "Jan", temp: -1.5, rain: 37, rainyDays: 12, wind: 15 },
      { month: "Feb", temp: 0.0, rain: 33, rainyDays: 10, wind: 16 },
      { month: "Mar", temp: 3.5, rain: 38, rainyDays: 10, wind: 15 },
      { month: "Apr", temp: 8.5, rain: 43, rainyDays: 10, wind: 13 },
      { month: "May", temp: 14.0, rain: 62, rainyDays: 11, wind: 12 },
      { month: "Jun", temp: 18.0, rain: 70, rainyDays: 11, wind: 11 },
      { month: "Jul", temp: 19.5, rain: 80, rainyDays: 12, wind: 11 },
      { month: "Aug", temp: 19.0, rain: 64, rainyDays: 10, wind: 11 },
      { month: "Sep", temp: 14.5, rain: 54, rainyDays: 10, wind: 12 },
      { month: "Oct", temp: 9.5, rain: 42, rainyDays: 10, wind: 13 },
      { month: "Nov", temp: 3.5, rain: 42, rainyDays: 12, wind: 15 },
      { month: "Dec", temp: -0.5, rain: 43, rainyDays: 13, wind: 15 }
    ]
  },
  bucharest: {
    city: "Bucharest", country: "Romania",
    months: [
      { month: "Jan", temp: -1, rain: 40, rainyDays: 8, wind: 14 },
      { month: "Feb", temp: 1, rain: 36, rainyDays: 7, wind: 15 },
      { month: "Mar", temp: 6, rain: 38, rainyDays: 8, wind: 14 },
      { month: "Apr", temp: 12, rain: 46, rainyDays: 9, wind: 13 },
      { month: "May", temp: 17, rain: 70, rainyDays: 11, wind: 11 },
      { month: "Jun", temp: 21, rain: 77, rainyDays: 10, wind: 10 },
      { month: "Jul", temp: 23, rain: 64, rainyDays: 8, wind: 10 },
      { month: "Aug", temp: 23, rain: 58, rainyDays: 7, wind: 9 },
      { month: "Sep", temp: 18, rain: 42, rainyDays: 6, wind: 10 },
      { month: "Oct", temp: 12, rain: 32, rainyDays: 6, wind: 11 },
      { month: "Nov", temp: 5, rain: 48, rainyDays: 8, wind: 13 },
      { month: "Dec", temp: 0, rain: 43, rainyDays: 9, wind: 14 }
    ]
  },
  sofia: {
    city: "Sofia", country: "Bulgaria",
    months: [
      { month: "Jan", temp: -1, rain: 33, rainyDays: 10, wind: 10 },
      { month: "Feb", temp: 1, rain: 31, rainyDays: 9, wind: 11 },
      { month: "Mar", temp: 5, rain: 38, rainyDays: 10, wind: 12 },
      { month: "Apr", temp: 10, rain: 51, rainyDays: 12, wind: 11 },
      { month: "May", temp: 15, rain: 73, rainyDays: 14, wind: 10 },
      { month: "Jun", temp: 19, rain: 75, rainyDays: 13, wind: 9 },
      { month: "Jul", temp: 21, rain: 53, rainyDays: 10, wind: 9 },
      { month: "Aug", temp: 21, rain: 46, rainyDays: 8, wind: 9 },
      { month: "Sep", temp: 16, rain: 38, rainyDays: 7, wind: 9 },
      { month: "Oct", temp: 11, rain: 35, rainyDays: 8, wind: 9 },
      { month: "Nov", temp: 5, rain: 43, rainyDays: 10, wind: 10 },
      { month: "Dec", temp: 0, rain: 40, rainyDays: 11, wind: 10 }
    ]
  },
  budapest: {
    city: "Budapest", country: "Hungary",
    months: [
      { month: "Jan", temp: 0, rain: 37, rainyDays: 8, wind: 13 },
      { month: "Feb", temp: 2, rain: 32, rainyDays: 7, wind: 14 },
      { month: "Mar", temp: 7, rain: 33, rainyDays: 7, wind: 14 },
      { month: "Apr", temp: 12, rain: 42, rainyDays: 8, wind: 13 },
      { month: "May", temp: 17, rain: 62, rainyDays: 10, wind: 12 },
      { month: "Jun", temp: 20, rain: 63, rainyDays: 9, wind: 11 },
      { month: "Jul", temp: 22, rain: 50, rainyDays: 8, wind: 10 },
      { month: "Aug", temp: 22, rain: 52, rainyDays: 7, wind: 10 },
      { month: "Sep", temp: 17, rain: 40, rainyDays: 6, wind: 10 },
      { month: "Oct", temp: 11, rain: 38, rainyDays: 7, wind: 11 },
      { month: "Nov", temp: 5, rain: 50, rainyDays: 9, wind: 13 },
      { month: "Dec", temp: 1, rain: 44, rainyDays: 9, wind: 13 }
    ]
  },
  ljubljana: {
    city: "Ljubljana", country: "Slovenia",
    months: [
      { month: "Jan", temp: 0, rain: 69, rainyDays: 11, wind: 7 },
      { month: "Feb", temp: 2, rain: 66, rainyDays: 10, wind: 8 },
      { month: "Mar", temp: 6, rain: 82, rainyDays: 11, wind: 9 },
      { month: "Apr", temp: 11, rain: 97, rainyDays: 13, wind: 9 },
      { month: "May", temp: 15, rain: 99, rainyDays: 14, wind: 8 },
      { month: "Jun", temp: 19, rain: 131, rainyDays: 14, wind: 7 },
      { month: "Jul", temp: 21, rain: 104, rainyDays: 12, wind: 7 },
      { month: "Aug", temp: 21, rain: 120, rainyDays: 11, wind: 7 },
      { month: "Sep", temp: 16, rain: 156, rainyDays: 11, wind: 6 },
      { month: "Oct", temp: 11, rain: 147, rainyDays: 12, wind: 6 },
      { month: "Nov", temp: 5, rain: 129, rainyDays: 13, wind: 7 },
      { month: "Dec", temp: 1, rain: 91, rainyDays: 12, wind: 7 }
    ]
  },
  kyiv: {
    city: "Kyiv", country: "Ukraine",
    months: [
      { month: "Jan", temp: -3, rain: 38, rainyDays: 14, wind: 14 },
      { month: "Feb", temp: -2, rain: 35, rainyDays: 12, wind: 15 },
      { month: "Mar", temp: 2, rain: 37, rainyDays: 11, wind: 14 },
      { month: "Apr", temp: 9, rain: 46, rainyDays: 11, wind: 13 },
      { month: "May", temp: 15, rain: 55, rainyDays: 13, wind: 12 },
      { month: "Jun", temp: 19, rain: 73, rainyDays: 13, wind: 11 },
      { month: "Jul", temp: 21, rain: 78, rainyDays: 13, wind: 10 },
      { month: "Aug", temp: 20, rain: 59, rainyDays: 10, wind: 10 },
      { month: "Sep", temp: 14, rain: 47, rainyDays: 9, wind: 11 },
      { month: "Oct", temp: 8, rain: 38, rainyDays: 9, wind: 12 },
      { month: "Nov", temp: 2, rain: 47, rainyDays: 13, wind: 14 },
      { month: "Dec", temp: -2, rain: 42, rainyDays: 15, wind: 14 }
    ]
  },
  vilnius: {
    city: "Vilnius", country: "Lithuania",
    months: [
      { month: "Jan", temp: -4, rain: 40, rainyDays: 18, wind: 16 },
      { month: "Feb", temp: -3, rain: 33, rainyDays: 14, wind: 16 },
      { month: "Mar", temp: 1, rain: 37, rainyDays: 13, wind: 15 },
      { month: "Apr", temp: 7, rain: 42, rainyDays: 12, wind: 14 },
      { month: "May", temp: 13, rain: 57, rainyDays: 13, wind: 12 },
      { month: "Jun", temp: 16, rain: 76, rainyDays: 13, wind: 11 },
      { month: "Jul", temp: 19, rain: 104, rainyDays: 14, wind: 11 },
      { month: "Aug", temp: 18, rain: 77, rainyDays: 12, wind: 11 },
      { month: "Sep", temp: 13, rain: 60, rainyDays: 12, wind: 12 },
      { month: "Oct", temp: 7, rain: 49, rainyDays: 12, wind: 14 },
      { month: "Nov", temp: 2, rain: 48, rainyDays: 16, wind: 16 },
      { month: "Dec", temp: -2, rain: 46, rainyDays: 18, wind: 16 }
    ]
  },
  riga: {
    city: "Riga", country: "Latvia",
    months: [
      { month: "Jan", temp: -3, rain: 42, rainyDays: 18, wind: 18 },
      { month: "Feb", temp: -3, rain: 31, rainyDays: 14, wind: 17 },
      { month: "Mar", temp: 0, rain: 33, rainyDays: 13, wind: 16 },
      { month: "Apr", temp: 6, rain: 38, rainyDays: 11, wind: 15 },
      { month: "May", temp: 12, rain: 44, rainyDays: 11, wind: 13 },
      { month: "Jun", temp: 16, rain: 62, rainyDays: 12, wind: 12 },
      { month: "Jul", temp: 19, rain: 76, rainyDays: 13, wind: 12 },
      { month: "Aug", temp: 18, rain: 77, rainyDays: 12, wind: 12 },
      { month: "Sep", temp: 13, rain: 70, rainyDays: 13, wind: 14 },
      { month: "Oct", temp: 7, rain: 87, rainyDays: 16, wind: 16 },
      { month: "Nov", temp: 3, rain: 63, rainyDays: 17, wind: 18 },
      { month: "Dec", temp: -1, rain: 49, rainyDays: 18, wind: 18 }
    ]
  },
  tallinn: {
    city: "Tallinn", country: "Estonia",
    months: [
      { month: "Jan", temp: -3, rain: 49, rainyDays: 19, wind: 20 },
      { month: "Feb", temp: -4, rain: 33, rainyDays: 15, wind: 19 },
      { month: "Mar", temp: -1, rain: 33, rainyDays: 13, wind: 18 },
      { month: "Apr", temp: 4, rain: 33, rainyDays: 11, wind: 16 },
      { month: "May", temp: 10, rain: 37, rainyDays: 10, wind: 14 },
      { month: "Jun", temp: 15, rain: 57, rainyDays: 12, wind: 13 },
      { month: "Jul", temp: 17, rain: 72, rainyDays: 13, wind: 12 },
      { month: "Aug", temp: 17, rain: 78, rainyDays: 13, wind: 13 },
      { month: "Sep", temp: 12, rain: 67, rainyDays: 14, wind: 15 },
      { month: "Oct", temp: 6, rain: 76, rainyDays: 16, wind: 18 },
      { month: "Nov", temp: 2, rain: 61, rainyDays: 17, wind: 20 },
      { month: "Dec", temp: -1, rain: 54, rainyDays: 19, wind: 22 }
    ]
  },
  manacor: {
    city: "Manacor", country: "Spain",
    months: [
      { month: "Jan", temp: 10, rain: 43, rainyDays: 7, wind: 12 },
      { month: "Feb", temp: 11, rain: 37, rainyDays: 6, wind: 12 },
      { month: "Mar", temp: 13, rain: 33, rainyDays: 5, wind: 13 },
      { month: "Apr", temp: 15, rain: 40, rainyDays: 6, wind: 14 },
      { month: "May", temp: 19, rain: 35, rainyDays: 5, wind: 13 },
      { month: "Jun", temp: 23, rain: 15, rainyDays: 2, wind: 12 },
      { month: "Jul", temp: 26, rain: 6, rainyDays: 1, wind: 12 },
      { month: "Aug", temp: 26, rain: 18, rainyDays: 3, wind: 11 },
      { month: "Sep", temp: 23, rain: 52, rainyDays: 6, wind: 11 },
      { month: "Oct", temp: 19, rain: 70, rainyDays: 8, wind: 12 },
      { month: "Nov", temp: 14, rain: 56, rainyDays: 7, wind: 12 },
      { month: "Dec", temp: 11, rain: 48, rainyDays: 7, wind: 12 }
    ]
  },
  biot: {
    city: "Biot", country: "France",
    months: [
      { month: "Jan", temp: 8, rain: 69, rainyDays: 6, wind: 13 },
      { month: "Feb", temp: 9, rain: 50, rainyDays: 5, wind: 14 },
      { month: "Mar", temp: 11, rain: 42, rainyDays: 5, wind: 15 },
      { month: "Apr", temp: 14, rain: 60, rainyDays: 7, wind: 14 },
      { month: "May", temp: 18, rain: 44, rainyDays: 5, wind: 13 },
      { month: "Jun", temp: 22, rain: 26, rainyDays: 4, wind: 11 },
      { month: "Jul", temp: 25, rain: 12, rainyDays: 2, wind: 10 },
      { month: "Aug", temp: 25, rain: 18, rainyDays: 3, wind: 10 },
      { month: "Sep", temp: 21, rain: 60, rainyDays: 5, wind: 11 },
      { month: "Oct", temp: 17, rain: 108, rainyDays: 7, wind: 12 },
      { month: "Nov", temp: 12, rain: 104, rainyDays: 7, wind: 13 },
      { month: "Dec", temp: 9, rain: 80, rainyDays: 6, wind: 13 }
    ]
  },
  barcelona: {
    city: "Barcelona", country: "Spain",
    months: [
      { month: "Jan", temp: 9, rain: 41, rainyDays: 5, wind: 14 },
      { month: "Feb", temp: 10, rain: 29, rainyDays: 4, wind: 14 },
      { month: "Mar", temp: 12, rain: 33, rainyDays: 4, wind: 15 },
      { month: "Apr", temp: 14, rain: 47, rainyDays: 6, wind: 15 },
      { month: "May", temp: 18, rain: 47, rainyDays: 5, wind: 14 },
      { month: "Jun", temp: 22, rain: 30, rainyDays: 4, wind: 13 },
      { month: "Jul", temp: 25, rain: 20, rainyDays: 3, wind: 13 },
      { month: "Aug", temp: 25, rain: 44, rainyDays: 5, wind: 12 },
      { month: "Sep", temp: 22, rain: 78, rainyDays: 7, wind: 12 },
      { month: "Oct", temp: 18, rain: 91, rainyDays: 8, wind: 13 },
      { month: "Nov", temp: 13, rain: 52, rainyDays: 5, wind: 14 },
      { month: "Dec", temp: 10, rain: 46, rainyDays: 5, wind: 14 }
    ]
  },
  villena: {
    city: "Villena", country: "Spain",
    months: [
      { month: "Jan", temp: 7, rain: 26, rainyDays: 4, wind: 10 },
      { month: "Feb", temp: 8, rain: 24, rainyDays: 4, wind: 11 },
      { month: "Mar", temp: 11, rain: 28, rainyDays: 4, wind: 12 },
      { month: "Apr", temp: 13, rain: 35, rainyDays: 5, wind: 13 },
      { month: "May", temp: 17, rain: 38, rainyDays: 5, wind: 12 },
      { month: "Jun", temp: 22, rain: 22, rainyDays: 3, wind: 11 },
      { month: "Jul", temp: 26, rain: 8, rainyDays: 1, wind: 11 },
      { month: "Aug", temp: 25, rain: 15, rainyDays: 2, wind: 10 },
      { month: "Sep", temp: 21, rain: 35, rainyDays: 4, wind: 10 },
      { month: "Oct", temp: 16, rain: 42, rainyDays: 5, wind: 10 },
      { month: "Nov", temp: 11, rain: 32, rainyDays: 4, wind: 10 },
      { month: "Dec", temp: 8, rain: 27, rainyDays: 4, wind: 10 }
    ]
  },
  munich: {
    city: "Munich", country: "Germany",
    months: [
      { month: "Jan", temp: -1, rain: 48, rainyDays: 10, wind: 11 },
      { month: "Feb", temp: 1, rain: 40, rainyDays: 8, wind: 12 },
      { month: "Mar", temp: 5, rain: 57, rainyDays: 10, wind: 13 },
      { month: "Apr", temp: 9, rain: 67, rainyDays: 11, wind: 13 },
      { month: "May", temp: 14, rain: 90, rainyDays: 13, wind: 12 },
      { month: "Jun", temp: 17, rain: 115, rainyDays: 14, wind: 11 },
      { month: "Jul", temp: 19, rain: 117, rainyDays: 13, wind: 11 },
      { month: "Aug", temp: 19, rain: 111, rainyDays: 12, wind: 10 },
      { month: "Sep", temp: 15, rain: 73, rainyDays: 10, wind: 10 },
      { month: "Oct", temp: 9, rain: 56, rainyDays: 9, wind: 10 },
      { month: "Nov", temp: 4, rain: 55, rainyDays: 10, wind: 11 },
      { month: "Dec", temp: 0, rain: 52, rainyDays: 10, wind: 11 }
    ]
  },
  stockholm: {
    city: "Stockholm", country: "Sweden",
    months: [
      { month: "Jan", temp: -3, rain: 39, rainyDays: 10, wind: 14 },
      { month: "Feb", temp: -3, rain: 27, rainyDays: 7, wind: 13 },
      { month: "Mar", temp: 0, rain: 26, rainyDays: 7, wind: 13 },
      { month: "Apr", temp: 5, rain: 30, rainyDays: 7, wind: 13 },
      { month: "May", temp: 11, rain: 30, rainyDays: 6, wind: 12 },
      { month: "Jun", temp: 16, rain: 45, rainyDays: 8, wind: 12 },
      { month: "Jul", temp: 18, rain: 72, rainyDays: 10, wind: 12 },
      { month: "Aug", temp: 17, rain: 66, rainyDays: 10, wind: 12 },
      { month: "Sep", temp: 12, rain: 55, rainyDays: 9, wind: 13 },
      { month: "Oct", temp: 7, rain: 50, rainyDays: 9, wind: 14 },
      { month: "Nov", temp: 2, rain: 53, rainyDays: 10, wind: 14 },
      { month: "Dec", temp: -1, rain: 46, rainyDays: 10, wind: 14 }
    ]
  },
  lugano: {
    city: "Lugano", country: "Switzerland",
    months: [
      { month: "Jan", temp: 3, rain: 64, rainyDays: 5, wind: 8 },
      { month: "Feb", temp: 4, rain: 52, rainyDays: 5, wind: 9 },
      { month: "Mar", temp: 8, rain: 80, rainyDays: 6, wind: 10 },
      { month: "Apr", temp: 12, rain: 120, rainyDays: 9, wind: 10 },
      { month: "May", temp: 16, rain: 160, rainyDays: 11, wind: 10 },
      { month: "Jun", temp: 20, rain: 155, rainyDays: 10, wind: 9 },
      { month: "Jul", temp: 23, rain: 145, rainyDays: 9, wind: 9 },
      { month: "Aug", temp: 22, rain: 155, rainyDays: 9, wind: 8 },
      { month: "Sep", temp: 18, rain: 150, rainyDays: 8, wind: 8 },
      { month: "Oct", temp: 13, rain: 118, rainyDays: 7, wind: 8 },
      { month: "Nov", temp: 7, rain: 102, rainyDays: 7, wind: 8 },
      { month: "Dec", temp: 4, rain: 60, rainyDays: 5, wind: 8 }
    ]
  },
  bordighera: {
    city: "Bordighera", country: "Italy",
    months: [
      { month: "Jan", temp: 9, rain: 58, rainyDays: 5, wind: 11 },
      { month: "Feb", temp: 10, rain: 48, rainyDays: 5, wind: 12 },
      { month: "Mar", temp: 12, rain: 52, rainyDays: 5, wind: 13 },
      { month: "Apr", temp: 14, rain: 62, rainyDays: 7, wind: 13 },
      { month: "May", temp: 18, rain: 48, rainyDays: 5, wind: 12 },
      { month: "Jun", temp: 22, rain: 28, rainyDays: 3, wind: 10 },
      { month: "Jul", temp: 25, rain: 14, rainyDays: 2, wind: 9 },
      { month: "Aug", temp: 25, rain: 22, rainyDays: 3, wind: 9 },
      { month: "Sep", temp: 22, rain: 65, rainyDays: 5, wind: 10 },
      { month: "Oct", temp: 17, rain: 98, rainyDays: 7, wind: 11 },
      { month: "Nov", temp: 13, rain: 95, rainyDays: 7, wind: 11 },
      { month: "Dec", temp: 10, rain: 65, rainyDays: 5, wind: 11 }
    ]
  },
  london: {
    city: "London", country: "United Kingdom",
    months: [
      { month: "Jan", temp: 5, rain: 55, rainyDays: 11, wind: 17 },
      { month: "Feb", temp: 5, rain: 41, rainyDays: 9, wind: 16 },
      { month: "Mar", temp: 7, rain: 42, rainyDays: 9, wind: 16 },
      { month: "Apr", temp: 10, rain: 44, rainyDays: 9, wind: 14 },
      { month: "May", temp: 13, rain: 49, rainyDays: 8, wind: 13 },
      { month: "Jun", temp: 16, rain: 45, rainyDays: 8, wind: 12 },
      { month: "Jul", temp: 19, rain: 45, rainyDays: 8, wind: 12 },
      { month: "Aug", temp: 18, rain: 50, rainyDays: 8, wind: 12 },
      { month: "Sep", temp: 15, rain: 49, rainyDays: 8, wind: 13 },
      { month: "Oct", temp: 12, rain: 69, rainyDays: 10, wind: 15 },
      { month: "Nov", temp: 8, rain: 59, rainyDays: 10, wind: 16 },
      { month: "Dec", temp: 5, rain: 55, rainyDays: 10, wind: 16 }
    ]
  },
  estoril: {
    city: "Estoril", country: "Portugal",
    months: [
      { month: "Jan", temp: 11, rain: 95, rainyDays: 10, wind: 15 },
      { month: "Feb", temp: 12, rain: 76, rainyDays: 9, wind: 15 },
      { month: "Mar", temp: 14, rain: 55, rainyDays: 7, wind: 15 },
      { month: "Apr", temp: 15, rain: 55, rainyDays: 8, wind: 15 },
      { month: "May", temp: 17, rain: 39, rainyDays: 5, wind: 14 },
      { month: "Jun", temp: 20, rain: 12, rainyDays: 2, wind: 13 },
      { month: "Jul", temp: 22, rain: 3, rainyDays: 1, wind: 14 },
      { month: "Aug", temp: 23, rain: 4, rainyDays: 1, wind: 13 },
      { month: "Sep", temp: 21, rain: 26, rainyDays: 3, wind: 13 },
      { month: "Oct", temp: 18, rain: 80, rainyDays: 8, wind: 14 },
      { month: "Nov", temp: 14, rain: 93, rainyDays: 9, wind: 15 },
      { month: "Dec", temp: 12, rain: 103, rainyDays: 10, wind: 15 }
    ]
  },
  antwerp: {
    city: "Antwerp", country: "Belgium",
    months: [
      { month: "Jan", temp: 3, rain: 63, rainyDays: 12, wind: 18 },
      { month: "Feb", temp: 4, rain: 50, rainyDays: 10, wind: 17 },
      { month: "Mar", temp: 7, rain: 55, rainyDays: 11, wind: 17 },
      { month: "Apr", temp: 10, rain: 44, rainyDays: 9, wind: 15 },
      { month: "May", temp: 14, rain: 55, rainyDays: 10, wind: 14 },
      { month: "Jun", temp: 17, rain: 68, rainyDays: 10, wind: 13 },
      { month: "Jul", temp: 19, rain: 72, rainyDays: 10, wind: 13 },
      { month: "Aug", temp: 19, rain: 74, rainyDays: 10, wind: 13 },
      { month: "Sep", temp: 16, rain: 65, rainyDays: 9, wind: 14 },
      { month: "Oct", temp: 12, rain: 68, rainyDays: 10, wind: 16 },
      { month: "Nov", temp: 7, rain: 66, rainyDays: 11, wind: 17 },
      { month: "Dec", temp: 4, rain: 70, rainyDays: 12, wind: 17 }
    ]
  },
  amstelveen: {
    city: "Amstelveen", country: "Netherlands",
    months: [
      { month: "Jan", temp: 3, rain: 68, rainyDays: 12, wind: 20 },
      { month: "Feb", temp: 4, rain: 47, rainyDays: 10, wind: 19 },
      { month: "Mar", temp: 6, rain: 59, rainyDays: 11, wind: 19 },
      { month: "Apr", temp: 9, rain: 41, rainyDays: 9, wind: 17 },
      { month: "May", temp: 13, rain: 56, rainyDays: 9, wind: 15 },
      { month: "Jun", temp: 16, rain: 65, rainyDays: 10, wind: 14 },
      { month: "Jul", temp: 18, rain: 76, rainyDays: 10, wind: 14 },
      { month: "Aug", temp: 18, rain: 82, rainyDays: 10, wind: 14 },
      { month: "Sep", temp: 15, rain: 72, rainyDays: 10, wind: 15 },
      { month: "Oct", temp: 11, rain: 76, rainyDays: 11, wind: 17 },
      { month: "Nov", temp: 7, rain: 80, rainyDays: 13, wind: 18 },
      { month: "Dec", temp: 4, rain: 76, rainyDays: 12, wind: 19 }
    ]
  },
  copenhagen: {
    city: "Copenhagen", country: "Denmark",
    months: [
      { month: "Jan", temp: 1, rain: 46, rainyDays: 10, wind: 19 },
      { month: "Feb", temp: 1, rain: 30, rainyDays: 8, wind: 18 },
      { month: "Mar", temp: 3, rain: 39, rainyDays: 8, wind: 18 },
      { month: "Apr", temp: 7, rain: 32, rainyDays: 7, wind: 16 },
      { month: "May", temp: 12, rain: 43, rainyDays: 7, wind: 14 },
      { month: "Jun", temp: 16, rain: 52, rainyDays: 8, wind: 14 },
      { month: "Jul", temp: 18, rain: 62, rainyDays: 9, wind: 14 },
      { month: "Aug", temp: 17, rain: 64, rainyDays: 9, wind: 14 },
      { month: "Sep", temp: 14, rain: 60, rainyDays: 9, wind: 15 },
      { month: "Oct", temp: 9, rain: 56, rainyDays: 9, wind: 17 },
      { month: "Nov", temp: 5, rain: 56, rainyDays: 10, wind: 18 },
      { month: "Dec", temp: 2, rain: 52, rainyDays: 10, wind: 19 }
    ]
  },
  helsinki: {
    city: "Helsinki", country: "Finland",
    months: [
      { month: "Jan", temp: -4, rain: 52, rainyDays: 12, wind: 15 },
      { month: "Feb", temp: -5, rain: 36, rainyDays: 9, wind: 14 },
      { month: "Mar", temp: -1, rain: 38, rainyDays: 8, wind: 14 },
      { month: "Apr", temp: 4, rain: 32, rainyDays: 7, wind: 14 },
      { month: "May", temp: 10, rain: 37, rainyDays: 7, wind: 13 },
      { month: "Jun", temp: 15, rain: 57, rainyDays: 8, wind: 12 },
      { month: "Jul", temp: 18, rain: 63, rainyDays: 8, wind: 12 },
      { month: "Aug", temp: 16, rain: 80, rainyDays: 10, wind: 12 },
      { month: "Sep", temp: 11, rain: 56, rainyDays: 8, wind: 13 },
      { month: "Oct", temp: 6, rain: 76, rainyDays: 10, wind: 15 },
      { month: "Nov", temp: 1, rain: 70, rainyDays: 11, wind: 15 },
      { month: "Dec", temp: -2, rain: 58, rainyDays: 11, wind: 15 }
    ]
  },
  oslo: {
    city: "Oslo", country: "Norway",
    months: [
      { month: "Jan", temp: -4, rain: 54, rainyDays: 10, wind: 12 },
      { month: "Feb", temp: -3, rain: 40, rainyDays: 8, wind: 12 },
      { month: "Mar", temp: 1, rain: 47, rainyDays: 8, wind: 12 },
      { month: "Apr", temp: 6, rain: 41, rainyDays: 7, wind: 12 },
      { month: "May", temp: 12, rain: 53, rainyDays: 8, wind: 11 },
      { month: "Jun", temp: 16, rain: 65, rainyDays: 10, wind: 11 },
      { month: "Jul", temp: 18, rain: 81, rainyDays: 10, wind: 10 },
      { month: "Aug", temp: 17, rain: 89, rainyDays: 10, wind: 10 },
      { month: "Sep", temp: 12, rain: 60, rainyDays: 8, wind: 11 },
      { month: "Oct", temp: 6, rain: 84, rainyDays: 10, wind: 12 },
      { month: "Nov", temp: 1, rain: 73, rainyDays: 10, wind: 12 },
      { month: "Dec", temp: -3, rain: 55, rainyDays: 10, wind: 12 }
    ]
  },
  athens: {
    city: "Athens", country: "Greece",
    months: [
      { month: "Jan", temp: 10, rain: 57, rainyDays: 7, wind: 12 },
      { month: "Feb", temp: 10, rain: 46, rainyDays: 6, wind: 13 },
      { month: "Mar", temp: 12, rain: 40, rainyDays: 5, wind: 13 },
      { month: "Apr", temp: 16, rain: 31, rainyDays: 4, wind: 13 },
      { month: "May", temp: 21, rain: 23, rainyDays: 3, wind: 13 },
      { month: "Jun", temp: 26, rain: 6, rainyDays: 1, wind: 13 },
      { month: "Jul", temp: 29, rain: 6, rainyDays: 1, wind: 14 },
      { month: "Aug", temp: 29, rain: 7, rainyDays: 1, wind: 13 },
      { month: "Sep", temp: 25, rain: 15, rainyDays: 2, wind: 12 },
      { month: "Oct", temp: 20, rain: 53, rainyDays: 5, wind: 11 },
      { month: "Nov", temp: 15, rain: 56, rainyDays: 6, wind: 11 },
      { month: "Dec", temp: 11, rain: 69, rainyDays: 7, wind: 11 }
    ]
  },
  palma: {
    city: "Palma", country: "Spain",
    months: [
      { month: "Jan", temp: 10, rain: 37, rainyDays: 6, wind: 13 },
      { month: "Feb", temp: 10, rain: 32, rainyDays: 5, wind: 13 },
      { month: "Mar", temp: 12, rain: 27, rainyDays: 4, wind: 14 },
      { month: "Apr", temp: 14, rain: 36, rainyDays: 5, wind: 14 },
      { month: "May", temp: 18, rain: 30, rainyDays: 4, wind: 13 },
      { month: "Jun", temp: 22, rain: 14, rainyDays: 2, wind: 12 },
      { month: "Jul", temp: 25, rain: 5, rainyDays: 1, wind: 12 },
      { month: "Aug", temp: 26, rain: 16, rainyDays: 3, wind: 11 },
      { month: "Sep", temp: 23, rain: 49, rainyDays: 5, wind: 12 },
      { month: "Oct", temp: 19, rain: 69, rainyDays: 7, wind: 13 },
      { month: "Nov", temp: 14, rain: 52, rainyDays: 6, wind: 13 },
      { month: "Dec", temp: 11, rain: 42, rainyDays: 6, wind: 13 }
    ]
  },
  nice: {
    city: "Nice", country: "France",
    months: [
      { month: "Jan", temp: 8, rain: 70, rainyDays: 6, wind: 12 },
      { month: "Feb", temp: 9, rain: 44, rainyDays: 5, wind: 13 },
      { month: "Mar", temp: 11, rain: 39, rainyDays: 5, wind: 14 },
      { month: "Apr", temp: 13, rain: 62, rainyDays: 7, wind: 14 },
      { month: "May", temp: 17, rain: 44, rainyDays: 5, wind: 13 },
      { month: "Jun", temp: 21, rain: 27, rainyDays: 4, wind: 11 },
      { month: "Jul", temp: 24, rain: 12, rainyDays: 2, wind: 10 },
      { month: "Aug", temp: 24, rain: 17, rainyDays: 3, wind: 10 },
      { month: "Sep", temp: 21, rain: 58, rainyDays: 5, wind: 11 },
      { month: "Oct", temp: 17, rain: 108, rainyDays: 7, wind: 12 },
      { month: "Nov", temp: 12, rain: 104, rainyDays: 7, wind: 12 },
      { month: "Dec", temp: 9, rain: 81, rainyDays: 6, wind: 12 }
    ]
  },

  dublin: {
    city: "Dublin", country: "Ireland",
    months: [
      { month: "Jan", temp: 5, rain: 67, rainyDays: 13, wind: 18 },
      { month: "Feb", temp: 5, rain: 50, rainyDays: 11, wind: 17 },
      { month: "Mar", temp: 7, rain: 53, rainyDays: 11, wind: 16 },
      { month: "Apr", temp: 9, rain: 51, rainyDays: 11, wind: 14 },
      { month: "May", temp: 12, rain: 56, rainyDays: 11, wind: 13 },
      { month: "Jun", temp: 14, rain: 56, rainyDays: 10, wind: 12 },
      { month: "Jul", temp: 16, rain: 56, rainyDays: 11, wind: 12 },
      { month: "Aug", temp: 16, rain: 73, rainyDays: 12, wind: 12 },
      { month: "Sep", temp: 14, rain: 59, rainyDays: 10, wind: 13 },
      { month: "Oct", temp: 11, rain: 70, rainyDays: 12, wind: 15 },
      { month: "Nov", temp: 7, rain: 65, rainyDays: 12, wind: 16 },
      { month: "Dec", temp: 5, rain: 73, rainyDays: 13, wind: 17 }
    ]
  }
,
  'antalya': { city: "Antalya", country: "Turkey",
    months: [
      { month: "Jan", temp: 10, rain: 243, rainyDays: 11, wind: 11 },
      { month: "Feb", temp: 11, rain: 152, rainyDays: 9, wind: 11 },
      { month: "Mar", temp: 13, rain: 77, rainyDays: 7, wind: 11 },
      { month: "Apr", temp: 16, rain: 47, rainyDays: 5, wind: 11 },
      { month: "May", temp: 21, rain: 22, rainyDays: 3, wind: 11 },
      { month: "Jun", temp: 26, rain: 8, rainyDays: 1, wind: 11 },
      { month: "Jul", temp: 29, rain: 3, rainyDays: 0, wind: 11 },
      { month: "Aug", temp: 29, rain: 3, rainyDays: 0, wind: 11 },
      { month: "Sep", temp: 25, rain: 13, rainyDays: 2, wind: 11 },
      { month: "Oct", temp: 20, rain: 70, rainyDays: 5, wind: 11 },
      { month: "Nov", temp: 15, rain: 130, rainyDays: 8, wind: 11 },
      { month: "Dec", temp: 12, rain: 245, rainyDays: 11, wind: 11 }
    ]
  }
};

const NEWS_ITEMS = [
  { date: "2026-04-15", text: "Tipšarević Academy announces new summer intensive program for junior players aged 12-16", academy: "tipsarevic" },
  { date: "2026-04-10", text: "Love4Tennis Crete expands facilities with three new clay courts and a fitness center", academy: "love4tennis" },
  { date: "2026-04-05", text: "Ilirija Tennis Club Ljubljana hosts ITF Junior Circuit event in May", academy: "ilirija" },
  { date: "2026-03-28", text: "Polish Tennis Association Academy partners with ATP for coaching excellence program", academy: "pzta" },
  { date: "2026-03-22", text: "Mouratoglou Academy unveils state-of-the-art analytics lab for player development", academy: "mouratoglou" },
  { date: "2026-03-15", text: "European Tennis Federation announces record participation in junior development across Eastern Europe", academy: null }
];

const COUNTRIES = [...new Set(ACADEMIES.map(a => a.country))];
