const ACADEMIES = [
  {
    id: "pzta",
    name: "Player Zone Tennis Academy (PZTA)",
    country: "Serbia",
    countryFlag: "🇷🇸",
    city: "Belgrade",
    lat: 44.8176, lng: 20.4633,
    website: "https://playerzonetennis.rs",
    contact: "+381 60 43 19 966",
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
    videoTour: null
  },
  {
    id: "tipsarevic",
    name: "Tipsarević Tennis Academy",
    country: "Serbia",
    countryFlag: "🇷🇸",
    city: "Belgrade",
    lat: 44.8176, lng: 20.4633,
    website: "https://www.tipsarevictennisacademy.com",
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
    videoTour: "https://www.youtube.com/watch?v=YqzGMoQE7TE"
  },
  {
    id: "vranes",
    name: "Dejan Vraneš Tennis Academy",
    country: "Serbia",
    countryFlag: "🇷🇸",
    city: "Belgrade",
    lat: 44.8176, lng: 20.4633,
    website: "https://vranesacademy.com",
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
    videoTour: null
  },
  {
    id: "premium-tennis",
    name: "Premium Tennis Academy",
    country: "Serbia",
    countryFlag: "🇷🇸",
    city: "Belgrade",
    lat: 44.8176, lng: 20.4633,
    website: "https://premiumtennis.net",
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
    videoTour: null
  },
  {
    id: "academy-ada",
    name: "Tennis Academy ADA (Bogdan Obradovic)",
    country: "Serbia",
    countryFlag: "🇷🇸",
    city: "Belgrade",
    lat: 44.8176, lng: 20.4633,
    website: "https://www.bogdanobradovic-tennisacademy.com",
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
    videoTour: null
  },
  {
    id: "supreme-tennis",
    name: "Supreme Tennis Academy",
    country: "Serbia",
    countryFlag: "🇷🇸",
    city: "Belgrade",
    lat: 44.8176, lng: 20.4633,
    website: "https://tennisacademysupreme.com/en/",
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
    videoTour: null
  },
  {
    id: "serbia-tennis-academy",
    name: "Serbia Tennis Academy (STA)",
    country: "Serbia",
    countryFlag: "🇷🇸",
    city: "Belgrade",
    lat: 44.8176, lng: 20.4633,
    website: "https://serbiatennisacademy.com",
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
    videoTour: null
  },
  {
    id: "ljubicic",
    name: "Ljubičić Tennis Academy",
    country: "Croatia",
    countryFlag: "🇭🇷",
    city: "Mali Lošinj",
    lat: 44.5311, lng: 14.4681,
    website: "https://ljubicic.academy",
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
    videoTour: "https://www.youtube.com/watch?v=5F3kcVjGwGI"
  },
  {
    id: "ilirija",
    name: "Ilirija Tennis Academy",
    country: "Croatia",
    countryFlag: "🇭🇷",
    city: "Biograd na Moru",
    lat: 43.9364, lng: 15.4467,
    website: "https://www.ilirijatennisacademy.net",
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
    videoTour: null
  },
  {
    id: "tk-firule",
    name: "TK Firule",
    country: "Croatia",
    countryFlag: "🇭🇷",
    city: "Split",
    lat: 43.5081, lng: 16.4402,
    website: null,
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
    videoTour: null
  },
  {
    id: "tenis-akademija-split",
    name: "Tenis Akademija Split",
    country: "Croatia",
    countryFlag: "🇭🇷",
    city: "Split",
    lat: 43.5081, lng: 16.4402,
    website: "https://tenis-akademija-split.com",
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
    videoTour: null
  },
  {
    id: "tk-agrofert",
    name: "TK Agrofert Prostějov",
    country: "Czech Republic",
    countryFlag: "🇨🇿",
    city: "Prostějov",
    lat: 49.4718, lng: 17.1118,
    website: "https://www.tkagrofert.cz",
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
    videoTour: "https://www.youtube.com/watch?v=3jQWMPaVVkQ"
  },
  {
    id: "sparta-prague",
    name: "TK Sparta Prague",
    country: "Czech Republic",
    countryFlag: "🇨🇿",
    city: "Prague",
    lat: 50.0755, lng: 14.4378,
    website: "http://www.tkspartapraha.cz",
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
    videoTour: "https://www.youtube.com/watch?v=hIvMLKqwh8c"
  },
  {
    id: "pliskova-academy",
    name: "Plíšková Tennis Academy",
    country: "Czech Republic",
    countryFlag: "🇨🇿",
    city: "Prague",
    lat: 50.0755, lng: 14.4378,
    website: "http://pliskovatennis.academy/en",
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
    videoTour: null
  },
  {
    id: "cltk-praha",
    name: "I. ČLTK Praha",
    country: "Czech Republic",
    countryFlag: "🇨🇿",
    city: "Prague",
    lat: 50.0755, lng: 14.4378,
    website: "https://cltk.cz/en/tennis-lessons/",
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
    videoTour: null
  },
  {
    id: "love4tennis",
    name: "Love4Tennis — Dominika Cibulková Academy",
    country: "Slovakia",
    countryFlag: "🇸🇰",
    city: "Bratislava",
    lat: 48.1486, lng: 17.1077,
    website: "https://love4tennis.com/",
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
    videoTour: null
  },
  {
    id: "hta-academy",
    name: "HTA Academy",
    country: "Slovakia",
    countryFlag: "🇸🇰",
    city: "Bratislava",
    lat: 48.1486, lng: 17.1077,
    website: "https://htaacademy.sk/en/home-2/",
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
    videoTour: null
  },
  {
    id: "tenis-kozerki",
    name: "Tenis Kozerki Tennis Academy",
    country: "Poland",
    countryFlag: "🇵🇱",
    city: "Kozerki (near Warsaw)",
    lat: 52.2297, lng: 21.0122,
    website: "https://www.teniskozerki.pl/?lang=en",
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
    videoTour: "https://www.youtube.com/watch?v=q-gXdB1N1w8"
  },
  {
    id: "vicio-fede",
    name: "Vicio & Fede Tennis (Breakpoint Warsaw)",
    country: "Poland",
    countryFlag: "🇵🇱",
    city: "Warsaw",
    lat: 52.2297, lng: 21.0122,
    website: "https://tenniswarszawa.pl/",
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
    videoTour: null
  },
  {
    id: "mera-legia",
    name: "WKT Mera Warsaw & Legia Warsaw Tennis",
    country: "Poland",
    countryFlag: "🇵🇱",
    city: "Warsaw",
    lat: 52.2297, lng: 21.0122,
    website: null,
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
    videoTour: null
  },
  {
    id: "hanescu-academy",
    name: "Victor Hănescu Academy (AVH)",
    country: "Romania",
    countryFlag: "🇷🇴",
    city: "Bucharest",
    lat: 44.4268, lng: 26.1025,
    website: "https://www.academiavictorhanescu.ro/?lng=en",
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
    videoTour: null
  },
  {
    id: "bucharest-tennis",
    name: "Bucharest Tennis",
    country: "Romania",
    countryFlag: "🇷🇴",
    city: "Bucharest",
    lat: 44.4268, lng: 26.1025,
    website: "https://bucharest.tennis/en/",
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
    videoTour: null
  },
  {
    id: "sofia-360",
    name: "Sofia Tennis Club 360",
    country: "Bulgaria",
    countryFlag: "🇧🇬",
    city: "Sofia",
    lat: 42.6977, lng: 23.3219,
    website: "https://360tennis.bg/en/",
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
    videoTour: null
  },
  {
    id: "romai-tennis",
    name: "Római Tennis Academy",
    country: "Hungary",
    countryFlag: "🇭🇺",
    city: "Budapest",
    lat: 47.4979, lng: 19.0402,
    website: null,
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
    videoTour: "https://www.youtube.com/watch?v=Q2Yh7eIK_wQ"
  },
  {
    id: "szepvolgyi",
    name: "Szépvölgyi Tennis Academy",
    country: "Hungary",
    countryFlag: "🇭🇺",
    city: "Budapest",
    lat: 47.4979, lng: 19.0402,
    website: "https://szepvolgyi.hu/en/",
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
    videoTour: null
  },
  {
    id: "breskvar",
    name: "Tennis Academy Breskvar",
    country: "Slovenia",
    countryFlag: "🇸🇮",
    city: "Ljubljana",
    lat: 46.0569, lng: 14.5058,
    website: "https://tenis-klub-breskvar.si/",
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
    videoTour: null
  },
  {
    id: "medvedev-academy",
    name: "Medvedev Tennis Academy",
    country: "Ukraine",
    countryFlag: "🇺🇦",
    city: "Kyiv (Pogreby)",
    lat: 50.4501, lng: 30.5234,
    website: "https://kiev.tennis/en/",
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
    videoTour: null
  },
  {
    id: "mta-kyiv",
    name: "International Tennis Academy (MTA)",
    country: "Ukraine",
    countryFlag: "🇺🇦",
    city: "Kyiv",
    lat: 50.4501, lng: 30.5234,
    website: "https://tennisacademy.com.ua/",
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
    videoTour: null
  },
  {
    id: "vilnius-academy",
    name: "Vilnius Tennis Academy",
    country: "Lithuania",
    countryFlag: "🇱🇹",
    city: "Vilnius",
    lat: 54.6872, lng: 25.2797,
    website: "https://www.tenisoakademija.lt/en",
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
    videoTour: null
  },
  {
    id: "riga-academy",
    name: "Riga Tennis Academy",
    country: "Latvia",
    countryFlag: "🇱🇻",
    city: "Riga",
    lat: 56.9496, lng: 24.1052,
    website: "http://www.rigatennisacademy.lv/",
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
    videoTour: null
  },
  {
    id: "tenisa-akademija",
    name: "Tenisa Akadēmija",
    country: "Latvia",
    countryFlag: "🇱🇻",
    city: "Riga",
    lat: 56.9496, lng: 24.1052,
    website: "http://tenisaakademija.lv/",
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
    videoTour: null
  },
  {
    id: "us-tenniseakadeemia",
    name: "US Tenniseakadeemia",
    country: "Estonia",
    countryFlag: "🇪🇪",
    city: "Tallinn",
    lat: 59.437, lng: 24.7536,
    website: null,
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
    videoTour: null
  },
  {
    id: "robbyo",
    name: "Robbyo Tennis Academy",
    country: "Estonia",
    countryFlag: "🇪🇪",
    city: "Tallinn",
    lat: 59.437, lng: 24.7536,
    website: null,
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
    videoTour: null
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
  }
};

const COUNTRIES = [...new Set(ACADEMIES.map(a => a.country))];
