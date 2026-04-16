const SPORT_TYPE = 'golf';
const ACADEMIES = [
  {
    id: "st-andrews",
    name: "St Andrews Links Golf Academy",
    country: "Scotland",
    countryFlag: "",
    city: "St Andrews",
    lat: 56.3398,
    lng: -2.7967,
    website: "https://www.standrews.com/golf-academy",
    contact: "+44 1334 466666",
    individualLessons: true,
    boarding: true,
    level: "Elite",
    starred: true,
    airport: { name: "Edinburgh Airport", code: "EDI", distance: "80 km", driveTime: "1h 15min" },
    beach: { distance: "0.5 km", description: "West Sands Beach" },
    climate: "st-andrews",
    priceRange: { from: 2500, to: 8000, unit: "month", display: "€2,500€8,000/mo" },
    programs: [
      { name: "Junior Development", price: "€2,500/mo", desc: "Fundamentals and course management for ages 8-16" },
      { name: "Pro Training", price: "€5,000/mo", desc: "Advanced training for aspiring professionals" },
      { name: "Short Game Intensive", price: "€3,000/mo", desc: "Focus on putting, chipping, and bunker play" },
      { name: "Tournament Prep", price: "€6,000/mo", desc: "Competition-focused training and strategy" }
    ],
    coaches: [
      { name: "David McLean", credential: "PGA Professional", background: "20 years coaching experience at St Andrews", atpWta: false, bestRanking: null, rankingNote: null, languages: ["English"], instagram: null },
      { name: "Sarah Thomson", credential: "PGA Professional", background: "Former Scottish Ladies Champion with 15 years teaching", atpWta: false, bestRanking: null, rankingNote: null, languages: ["English", "French"], instagram: null }
    ],
    bestCoachRanking: null,
    facilities: "Driving Range, Putting Green, Short Game Area, Pro Shop, Clubhouse, Video Analysis Suite, Indoor Simulator, Gym",
    courtSurfaces: ["Links"],
    notableAlumni: ["Sam Torrance", "Colin Montgomerie"],
    description: "The St Andrews Links Golf Academy offers world-class training on the home of golf. Located on the iconic Old Course, this elite academy provides comprehensive instruction in links golf techniques.",
    nearbyHotels: [
      { name: "Old Course Hotel", stars: 5, distanceKm: 0.5, features: ["Restaurant", "Spa", "Golf Views"], pool: true, wifi: true, pricePerNight: "€250" },
      { name: "Fairmont St Andrews", stars: 5, distanceKm: 3, features: ["Restaurant", "Spa", "Two Golf Courses"], pool: true, wifi: true, pricePerNight: "€220" },
      { name: "Rusacks St Andrews", stars: 4, distanceKm: 0.3, features: ["Restaurant", "Bar", "Course Views"], pool: false, wifi: true, pricePerNight: "€180" },
      { name: "The Inn on North Street", stars: 3, distanceKm: 0.8, features: ["Restaurant", "Traditional Inn"], pool: false, wifi: true, pricePerNight: "€110" },
      { name: "Premier Inn St Andrews", stars: 3, distanceKm: 2, features: ["Restaurant", "Parking"], pool: false, wifi: true, pricePerNight: "€85" }
    ],
    nearbyRestaurants: [
      { name: "The Seafood Ristorante", cuisine: "Scottish Seafood", distanceKm: 0.5, priceRange: "€€€", rating: 4.7, vegetarian: true, outdoor: true },
      { name: "The Jigger Inn", cuisine: "Scottish Pub", distanceKm: 0.6, priceRange: "€€", rating: 4.5, vegetarian: true, outdoor: true },
      { name: "Forgan St Andrews", cuisine: "Modern Scottish", distanceKm: 0.4, priceRange: "€€", rating: 4.4, vegetarian: true, outdoor: false },
      { name: "Little Italy", cuisine: "Italian", distanceKm: 0.5, priceRange: "€€", rating: 4.3, vegetarian: true, outdoor: false },
      { name: "The Adamson", cuisine: "French Bistro", distanceKm: 0.6, priceRange: "€€€", rating: 4.6, vegetarian: true, outdoor: true }
    ],
    nearbyMedical: [
      { name: "St Andrews Community Hospital", type: "Hospital", distanceKm: 1.5, phone: "+44 1334 656200", emergency: true },
      { name: "Abbey Medical Centre", type: "Clinic", distanceKm: 0.8, phone: "+44 1334 472327", emergency: false },
      { name: "St Andrews Dental Practice", type: "Dental", distanceKm: 0.6, phone: "+44 1334 472287", emergency: false }
    ],
    costOfLiving: { rent1Bed: "€900", meal: "€15", monthlyFood: "€400", transport: "€70", currency: "GBP", summary: "Moderate to high cost of living in historic university town" },
    scholarships: { available: true, details: "Merit-based scholarships available for talented junior golfers with competitive results." },
    visaInfo: { schengen: false, eu: false, visaFreeCountries: "EU/EEA citizens visa-free for up to 6 months", notes: "UK visa rules apply post-Brexit, student visas available for long-term training" },
    airportTransfers: [
      { mode: "Taxi", duration: "1h 15min", cost: "€90-110", notes: "Pre-book recommended for best rates" },
      { mode: "Bus", duration: "2h", cost: "€20-25", notes: "Regular service via Leuchars train station" },
      { mode: "Private Transfer", duration: "1h 15min", cost: "€120-150", notes: "Door-to-door service with meet and greet" }
    ],
    nearbyTournaments: [
      { name: "The Open Championship", level: "Major", surface: "Links", month: "July", venue: "St Andrews Old Course" },
      { name: "Alfred Dunhill Links Championship", level: "European Tour", surface: "Links", month: "October", venue: "St Andrews Old Course" }
    ],
    videoTour: null
  },  {
    id: "valderrama",
    name: "Valderrama Golf Academy",
    country: "Spain",
    countryFlag: "",
    city: "Sotogrande",
    lat: 36.2833,
    lng: -5.3167,
    website: "https://www.valderrama.com",
    contact: "+34 956 791 200",
    individualLessons: true,
    boarding: false,
    level: "Elite",
    starred: false,
    airport: { name: "Gibraltar Airport", code: "GIB", distance: "25 km", driveTime: "30min" },
    beach: { distance: "8 km", description: "Sotogrande Beach" },
    climate: "sotogrande",
    priceRange: { from: 3000, to: 10000, unit: "month", display: "€3,000€10,000/mo" },
    programs: [
      { name: "Elite Performance", price: "€6,000/mo", desc: "High-performance training for competitive golfers" },
      { name: "Junior Academy", price: "€3,000/mo", desc: "Comprehensive development program for young golfers" },
      { name: "Weekend Clinics", price: "€500/wk", desc: "Intensive weekend training sessions" },
      { name: "Tournament Prep", price: "€8,000/mo", desc: "Elite tournament preparation and mental coaching" }
    ],
    coaches: [
      { name: "Miguel Rodriguez", credential: "PGA Professional", background: "25 years experience, former European Tour player", atpWta: false, bestRanking: null, rankingNote: null, languages: ["Spanish", "English"], instagram: null },
      { name: "Carmen Alvarez", credential: "PGA Professional", background: "15 years teaching, specialized in short game", atpWta: false, bestRanking: null, rankingNote: null, languages: ["Spanish", "English", "German"], instagram: null }
    ],
    bestCoachRanking: null,
    facilities: "Championship Course, Driving Range, Putting Green, Short Game Area, Pro Shop, Clubhouse, Gym, Video Analysis Suite",
    courtSurfaces: ["Parkland", "Links"],
    notableAlumni: ["Sergio Garcia", "Jon Rahm"],
    description: "Valderrama Golf Academy provides elite training at one of Europe most prestigious courses. The academy combines world-class facilities with expert coaching in the heart of Andalusia.",
    nearbyHotels: [
      { name: "SO Sotogrande", stars: 5, distanceKm: 2, features: ["Restaurant", "Spa", "Golf Access"], pool: true, wifi: true, pricePerNight: "€280" },
      { name: "Almenara Hotel", stars: 4, distanceKm: 3, features: ["Restaurant", "Golf Course", "Beach Club"], pool: true, wifi: true, pricePerNight: "€200" },
      { name: "NH Sotogrande", stars: 4, distanceKm: 4, features: ["Restaurant", "Marina Views"], pool: true, wifi: true, pricePerNight: "€150" },
      { name: "Hotel Patricia", stars: 3, distanceKm: 5, features: ["Restaurant", "Budget Friendly"], pool: false, wifi: true, pricePerNight: "€90" },
      { name: "Guadacorte Park Hotel", stars: 3, distanceKm: 8, features: ["Restaurant", "Pool"], pool: true, wifi: true, pricePerNight: "€70" }
    ],
    nearbyRestaurants: [
      { name: "KE Sotogrande", cuisine: "Mediterranean", distanceKm: 3, priceRange: "€€€", rating: 4.6, vegetarian: true, outdoor: true },
      { name: "Spinnaker Sotogrande", cuisine: "Seafood", distanceKm: 4, priceRange: "€€€", rating: 4.5, vegetarian: false, outdoor: true },
      { name: "Puente Romano", cuisine: "Spanish", distanceKm: 3, priceRange: "€€", rating: 4.4, vegetarian: true, outdoor: true },
      { name: "La Sal", cuisine: "Mediterranean Fusion", distanceKm: 4, priceRange: "€€€", rating: 4.7, vegetarian: true, outdoor: false },
      { name: "Coco Marbella", cuisine: "International", distanceKm: 2, priceRange: "€€", rating: 4.3, vegetarian: true, outdoor: true }
    ],
    nearbyMedical: [
      { name: "Hospital Internacional Marbella", type: "Hospital", distanceKm: 20, phone: "+34 952 774 200", emergency: true },
      { name: "Centro de Salud Sotogrande", type: "Clinic", distanceKm: 3, phone: "+34 956 795 028", emergency: false },
      { name: "Dental Clinic Sotogrande", type: "Dental", distanceKm: 3, phone: "+34 956 795 500", emergency: false }
    ],
    costOfLiving: { rent1Bed: "€1200", meal: "€15", monthlyFood: "€450", transport: "€80", currency: "EUR", summary: "High-end resort area with premium pricing" },
    scholarships: { available: true, details: "Performance-based scholarships for exceptional junior golfers showing tournament potential." },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: "Schengen area visa-free for EU/EEA citizens", notes: "Non-EU citizens may need Schengen visa for stays over 90 days" },
    airportTransfers: [
      { mode: "Taxi", duration: "30min", cost: "€45-60", notes: "Direct route from Gibraltar Airport" },
      { mode: "Bus", duration: "1h", cost: "€15", notes: "Regular bus service available" },
      { mode: "Private Transfer", duration: "30min", cost: "€70-90", notes: "Luxury transfer with golf equipment accommodation" }
    ],
    nearbyTournaments: [
      { name: "Andalucia Masters", level: "European Tour", surface: "Parkland", month: "October", venue: "Real Club Valderrama" },
      { name: "Costa del Sol Amateur Championship", level: "Amateur", surface: "Parkland", month: "June", venue: "Valderrama" }
    ],
    videoTour: null
  },
  {
    id: "penha-longa",
    name: "Penha Longa Golf Academy",
    country: "Portugal",
    countryFlag: "",
    city: "Sintra",
    lat: 38.7436,
    lng: -9.4014,
    website: "https://www.penhalonga.com",
    contact: "+351 21 924 9011",
    individualLessons: true,
    boarding: false,
    level: "Pro",
    starred: false,
    airport: { name: "Lisbon Airport", code: "LIS", distance: "30 km", driveTime: "35min" },
    beach: { distance: "12 km", description: "Guincho Beach" },
    climate: "sintra",
    priceRange: { from: 2000, to: 7000, unit: "month", display: "€2,000€7,000/mo" },
    programs: [
      { name: "Pro Development", price: "€4,500/mo", desc: "Professional training with tournament play integration" },
      { name: "Junior Program", price: "€2,000/mo", desc: "Youth development focusing on fundamentals" },
      { name: "Ladies Program", price: "€2,500/mo", desc: "Specialized coaching for female golfers of all levels" }
    ],
    coaches: [
      { name: "Paulo Silva", credential: "PGA Professional", background: "18 years coaching experience in Portugal", atpWta: false, bestRanking: null, rankingNote: null, languages: ["Portuguese", "English", "Spanish"], instagram: null },
      { name: "Maria Santos", credential: "PGA Professional", background: "12 years teaching, former Portuguese champion", atpWta: false, bestRanking: null, rankingNote: null, languages: ["Portuguese", "English"], instagram: null }
    ],
    bestCoachRanking: null,
    facilities: "Championship Course, Driving Range, Putting Green, Pro Shop, Clubhouse, Gym, Short Game Area",
    courtSurfaces: ["Parkland", "Resort"],
    notableAlumni: [],
    description: "Penha Longa Golf Academy offers professional training in a stunning resort setting near Lisbon. The academy provides comprehensive programs with access to championship-level facilities.",
    nearbyHotels: [
      { name: "Penha Longa Resort", stars: 5, distanceKm: 0.1, features: ["Restaurant", "Spa", "Golf Package"], pool: true, wifi: true, pricePerNight: "€250" },
      { name: "Tivoli Sintra", stars: 4, distanceKm: 5, features: ["Restaurant", "Historic Setting"], pool: true, wifi: true, pricePerNight: "€130" },
      { name: "Lawrence Hotel", stars: 4, distanceKm: 6, features: ["Restaurant", "Boutique Hotel"], pool: false, wifi: true, pricePerNight: "€110" },
      { name: "Hotel Sintra Jardim", stars: 3, distanceKm: 5, features: ["Restaurant", "Garden Views"], pool: false, wifi: true, pricePerNight: "€75" },
      { name: "Ibis Sintra", stars: 2, distanceKm: 8, features: ["Restaurant", "Budget Option"], pool: false, wifi: true, pricePerNight: "€50" }
    ],
    nearbyRestaurants: [
      { name: "LAB by Sergi Arola", cuisine: "Contemporary", distanceKm: 0.1, priceRange: "€€€€", rating: 4.8, vegetarian: true, outdoor: false },
      { name: "Tascantiga", cuisine: "Portuguese", distanceKm: 5, priceRange: "€€", rating: 4.6, vegetarian: true, outdoor: true },
      { name: "Incomum by Luis Santos", cuisine: "Modern Portuguese", distanceKm: 5, priceRange: "€€€", rating: 4.5, vegetarian: true, outdoor: false },
      { name: "Cafe Saudade", cuisine: "Portuguese Cafe", distanceKm: 6, priceRange: "€", rating: 4.4, vegetarian: true, outdoor: true },
      { name: "Restaurante Regional", cuisine: "Traditional Portuguese", distanceKm: 5, priceRange: "€€", rating: 4.3, vegetarian: true, outdoor: true }
    ],
    nearbyMedical: [
      { name: "Hospital Fernando Fonseca", type: "Hospital", distanceKm: 10, phone: "+351 21 434 8200", emergency: true },
      { name: "Centro de Saude de Sintra", type: "Clinic", distanceKm: 5, phone: "+351 21 910 6100", emergency: false },
      { name: "Clinica Medica de Sintra", type: "Clinic", distanceKm: 6, phone: "+351 21 924 3850", emergency: false }
    ],
    costOfLiving: { rent1Bed: "€800", meal: "€12", monthlyFood: "€350", transport: "€40", currency: "EUR", summary: "Moderate cost of living near Lisbon with good transport links" },
    scholarships: { available: true, details: "Merit-based scholarships available for junior golfers demonstrating exceptional talent." },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: "Schengen area visa-free for EU/EEA citizens", notes: "Portugal offers favorable long-term visa options for golf training" },
    airportTransfers: [
      { mode: "Taxi", duration: "35min", cost: "€35-45", notes: "Fixed rates available from airport" },
      { mode: "Bus", duration: "1h 15min", cost: "€10", notes: "Public transport via Cascais line" },
      { mode: "Private Transfer", duration: "35min", cost: "€55-70", notes: "Private car with golf equipment storage" }
    ],
    nearbyTournaments: [
      { name: "Portugal Masters", level: "European Tour", surface: "Parkland", month: "September", venue: "Dom Pedro Victoria Golf Course" },
      { name: "Portuguese Amateur Championship", level: "Amateur", surface: "Parkland", month: "July", venue: "Various venues" }
    ],
    videoTour: null
  },
  {
    id: "wentworth",
    name: "Wentworth Golf Academy",
    country: "England",
    countryFlag: "",
    city: "Virginia Water",
    lat: 51.3942,
    lng: -0.5897,
    website: "https://www.wentworthclub.com",
    contact: "+44 1344 842201",
    individualLessons: true,
    boarding: true,
    level: "Elite",
    starred: false,
    airport: { name: "Heathrow Airport", code: "LHR", distance: "20 km", driveTime: "25min" },
    beach: null,
    climate: "virginia-water",
    priceRange: { from: 4000, to: 12000, unit: "month", display: "€4,000€12,000/mo" },
    programs: [
      { name: "Elite Coaching", price: "€8,000/mo", desc: "Premier training for competitive golfers" },
      { name: "Pro Training", price: "€6,000/mo", desc: "Professional development and tour preparation" },
      { name: "Junior Development", price: "€4,000/mo", desc: "Comprehensive youth golf education" },
      { name: "Fitness & Golf", price: "€5,000/mo", desc: "Integrated fitness and golf performance program" }
    ],
    coaches: [
      { name: "James Harrison", credential: "PGA Professional", background: "Former European Tour player with 20 years coaching", atpWta: false, bestRanking: null, rankingNote: null, languages: ["English"], instagram: null },
      { name: "Emma Clarke", credential: "PGA Professional", background: "15 years elite coaching, biomechanics specialist", atpWta: false, bestRanking: null, rankingNote: null, languages: ["English", "German"], instagram: null }
    ],
    bestCoachRanking: null,
    facilities: "Three Championship Courses, Driving Range, Putting Green, Short Game Area, Pro Shop, Clubhouse, Gym, Video Analysis Suite, Indoor Simulators",
    courtSurfaces: ["Parkland", "Heathland"],
    notableAlumni: ["Ernie Els", "Luke Donald"],
    description: "Wentworth Golf Academy provides elite training at one of England most exclusive clubs. The academy offers world-class facilities and coaching in prestigious Surrey countryside.",
    nearbyHotels: [
      { name: "Wentworth Estate Hotel", stars: 5, distanceKm: 0.5, features: ["Restaurant", "Spa", "Golf Package"], pool: true, wifi: true, pricePerNight: "€400" },
      { name: "Pennyhill Park Hotel", stars: 5, distanceKm: 8, features: ["Restaurant", "Spa", "Rugby England Training Base"], pool: true, wifi: true, pricePerNight: "€350" },
      { name: "Macdonald Berystede Hotel", stars: 4, distanceKm: 10, features: ["Restaurant", "Spa", "Golf Course"], pool: true, wifi: true, pricePerNight: "€180" },
      { name: "Runnymede-on-Thames", stars: 4, distanceKm: 7, features: ["Restaurant", "River Views"], pool: false, wifi: true, pricePerNight: "€150" },
      { name: "Premier Inn Egham", stars: 3, distanceKm: 6, features: ["Restaurant", "Parking"], pool: false, wifi: true, pricePerNight: "€95" }
    ],
    nearbyRestaurants: [
      { name: "Restaurant Coworth Park", cuisine: "Modern British", distanceKm: 3, priceRange: "€€€€", rating: 4.7, vegetarian: true, outdoor: true },
      { name: "The Latymer", cuisine: "Fine Dining", distanceKm: 5, priceRange: "€€€€", rating: 4.8, vegetarian: true, outdoor: false },
      { name: "The Crown", cuisine: "British Gastropub", distanceKm: 2, priceRange: "€€€", rating: 4.5, vegetarian: true, outdoor: true },
      { name: "Bel and The Dragon", cuisine: "British", distanceKm: 4, priceRange: "€€", rating: 4.4, vegetarian: true, outdoor: true },
      { name: "Giggling Squid", cuisine: "Thai", distanceKm: 6, priceRange: "€€", rating: 4.3, vegetarian: true, outdoor: false }
    ],
    nearbyMedical: [
      { name: "St Peter's Hospital", type: "Hospital", distanceKm: 10, phone: "+44 1932 872000", emergency: true },
      { name: "Virginia Water Surgery", type: "Clinic", distanceKm: 1, phone: "+44 1344 842237", emergency: false },
      { name: "Englemere Dental Practice", type: "Dental", distanceKm: 2, phone: "+44 1344 842961", emergency: false }
    ],
    costOfLiving: { rent1Bed: "€1800", meal: "€20", monthlyFood: "€500", transport: "€150", currency: "GBP", summary: "Very high cost of living in exclusive Surrey location" },
    scholarships: { available: true, details: "Limited scholarships for exceptional junior golfers with tournament success." },
    visaInfo: { schengen: false, eu: false, visaFreeCountries: "EU/EEA citizens visa-free for up to 6 months", notes: "UK visa rules apply post-Brexit, tier 4 student visas available" },
    airportTransfers: [
      { mode: "Taxi", duration: "25min", cost: "€60-80", notes: "Direct route from Heathrow" },
      { mode: "Train", duration: "50min", cost: "€25", notes: "Train to Egham then taxi" },
      { mode: "Private Transfer", duration: "25min", cost: "€90-120", notes: "Luxury transfer service available" }
    ],
    nearbyTournaments: [
      { name: "BMW PGA Championship", level: "European Tour", surface: "Parkland", month: "May", venue: "Wentworth West Course" },
      { name: "English Amateur Championship", level: "Amateur", surface: "Heathland", month: "June", venue: "Various venues" }
    ],
    videoTour: null
  },
  {
    id: "k-club",
    name: "The K Club Golf Academy",
    country: "Ireland",
    countryFlag: "",
    city: "Straffan",
    lat: 53.3167,
    lng: -6.6167,
    website: "https://www.kclub.ie",
    contact: "+353 1 601 7200",
    individualLessons: true,
    boarding: true,
    level: "Pro",
    starred: false,
    airport: { name: "Dublin Airport", code: "DUB", distance: "40 km", driveTime: "40min" },
    beach: null,
    climate: "straffan",
    priceRange: { from: 2500, to: 7500, unit: "month", display: "€2,500€7,500/mo" },
    programs: [
      { name: "Pro Development", price: "€5,000/mo", desc: "Professional training with Ryder Cup heritage" },
      { name: "Junior Academy", price: "€2,500/mo", desc: "Youth development in championship environment" },
      { name: "Short Game Intensive", price: "€3,500/mo", desc: "Specialized short game and putting program" }
    ],
    coaches: [
      { name: "Liam Murphy", credential: "PGA Professional", background: "25 years experience, former Irish champion", atpWta: false, bestRanking: null, rankingNote: null, languages: ["English"], instagram: null },
      { name: "Sinead O'Connor", credential: "PGA Professional", background: "12 years coaching, specialized in junior development", atpWta: false, bestRanking: null, rankingNote: null, languages: ["English"], instagram: null }
    ],
    bestCoachRanking: null,
    facilities: "Two Championship Courses, Driving Range, Putting Green, Short Game Area, Pro Shop, Clubhouse, Gym, Video Analysis",
    courtSurfaces: ["Parkland"],
    notableAlumni: ["Padraig Harrington", "Shane Lowry"],
    description: "The K Club Golf Academy provides professional training at the former Ryder Cup venue. The academy offers exceptional coaching with access to world-renowned championship courses.",
    nearbyHotels: [
      { name: "The K Club Hotel", stars: 5, distanceKm: 0.1, features: ["Restaurant", "Spa", "Golf Package"], pool: true, wifi: true, pricePerNight: "€350" },
      { name: "Barberstown Castle", stars: 4, distanceKm: 5, features: ["Restaurant", "Castle Hotel", "Historic"], pool: false, wifi: true, pricePerNight: "€180" },
      { name: "Glenroyal Hotel", stars: 4, distanceKm: 15, features: ["Restaurant", "Leisure Center"], pool: true, wifi: true, pricePerNight: "€120" },
      { name: "Osprey Hotel", stars: 3, distanceKm: 12, features: ["Restaurant", "Spa"], pool: true, wifi: true, pricePerNight: "€100" },
      { name: "Travelodge Naas", stars: 2, distanceKm: 10, features: ["Budget Friendly"], pool: false, wifi: true, pricePerNight: "€60" }
    ],
    nearbyRestaurants: [
      { name: "K Thai Restaurant", cuisine: "Thai", distanceKm: 0.1, priceRange: "€€€", rating: 4.6, vegetarian: true, outdoor: false },
      { name: "Legends Restaurant", cuisine: "Irish Contemporary", distanceKm: 0.1, priceRange: "€€€", rating: 4.5, vegetarian: true, outdoor: false },
      { name: "Cunninghams Pub", cuisine: "Irish Pub", distanceKm: 1, priceRange: "€€", rating: 4.4, vegetarian: true, outdoor: true },
      { name: "The Malt House", cuisine: "Irish", distanceKm: 10, priceRange: "€€", rating: 4.3, vegetarian: true, outdoor: true },
      { name: "Vie de Chateaux", cuisine: "French", distanceKm: 8, priceRange: "€€€", rating: 4.7, vegetarian: true, outdoor: false }
    ],
    nearbyMedical: [
      { name: "Naas General Hospital", type: "Hospital", distanceKm: 10, phone: "+353 45 897221", emergency: true },
      { name: "Straffan Medical Centre", type: "Clinic", distanceKm: 1, phone: "+353 1 627 3602", emergency: false },
      { name: "Clane Dental Surgery", type: "Dental", distanceKm: 5, phone: "+353 45 868944", emergency: false }
    ],
    costOfLiving: { rent1Bed: "€1200", meal: "€14", monthlyFood: "€400", transport: "€100", currency: "EUR", summary: "Moderate to high cost of living near Dublin" },
    scholarships: { available: true, details: "Performance scholarships for junior golfers with national ranking." },
    visaInfo: { schengen: false, eu: true, visaFreeCountries: "EU/EEA citizens visa-free", notes: "Ireland is EU but not Schengen, separate visa rules apply for non-EU" },
    airportTransfers: [
      { mode: "Taxi", duration: "40min", cost: "€60-75", notes: "Direct route from Dublin Airport" },
      { mode: "Bus", duration: "1h 30min", cost: "€15", notes: "Bus to Naas then taxi" },
      { mode: "Private Transfer", duration: "40min", cost: "€90-110", notes: "Private car service available" }
    ],
    nearbyTournaments: [
      { name: "Irish Open", level: "European Tour", surface: "Parkland", month: "July", venue: "Various Irish venues" },
      { name: "Irish Amateur Open", level: "Amateur", surface: "Parkland", month: "May", venue: "Royal Dublin" }
    ],
    videoTour: null
  },
  {
    id: "evian-resort",
    name: "Evian Resort Golf Academy",
    country: "France",
    countryFlag: "",
    city: "Evian-les-Bains",
    lat: 46.4,
    lng: 6.5833,
    website: "https://www.evianresort.com",
    contact: "+33 4 50 26 85 00",
    individualLessons: true,
    boarding: true,
    level: "Pro",
    starred: false,
    airport: { name: "Geneva Airport", code: "GVA", distance: "45 km", driveTime: "50min" },
    beach: { distance: "Lake Geneva beach 500m" },
    climate: "evian",
    priceRange: { from: 3000, to: 8000, unit: "month", display: "€3,000€8,000/mo" },
    programs: [
      { name: "Championship Coaching", price: "€6,000/mo", desc: "Elite training with lakeside facilities" },
      { name: "Pro Performance", price: "€4,500/mo", desc: "Professional development with European Tour standards" },
      { name: "Junior Excellence", price: "€3,000/mo", desc: "Youth academy with tournament preparation" }
    ],
    coaches: [
      { name: "Pierre Dubois", credential: "PGA Professional", background: "20 years coaching, former French national team coach", atpWta: false, bestRanking: null, rankingNote: null, languages: ["French", "English"], instagram: null },
      { name: "Claire Martin", credential: "PGA Professional", background: "15 years experience, biomechanics specialist", atpWta: false, bestRanking: null, rankingNote: null, languages: ["French", "English", "German"], instagram: null }
    ],
    bestCoachRanking: null,
    facilities: "Championship Course, Driving Range, Putting Green, Short Game Area, Pro Shop, Spa, Video Analysis, Indoor Training",
    courtSurfaces: ["Parkland"],
    notableAlumni: ["Celine Boutier", "Alexander Levy"],
    description: "Evian Resort Golf Academy provides professional training overlooking Lake Geneva. The academy combines world-class coaching with stunning Alpine scenery and luxury amenities.",
    nearbyHotels: [
      { name: "Hotel Royal", stars: 5, distanceKm: 0.2, features: ["Restaurant", "Spa", "Lake View"], pool: true, wifi: true, pricePerNight: "€400" },
      { name: "Hilton Evian-les-Bains", stars: 4, distanceKm: 0.5, features: ["Restaurant", "Lake Access"], pool: true, wifi: true, pricePerNight: "€250" },
      { name: "La Verniaz et ses Chalets", stars: 4, distanceKm: 3, features: ["Restaurant", "Mountain View"], pool: true, wifi: true, pricePerNight: "€180" },
      { name: "Hotel de la Plage", stars: 3, distanceKm: 1, features: ["Lake View"], pool: false, wifi: true, pricePerNight: "€120" },
      { name: "Hotel Continental", stars: 3, distanceKm: 0.8, features: ["Budget Friendly"], pool: false, wifi: true, pricePerNight: "€90" }
    ],
    nearbyRestaurants: [
      { name: "Les Fresques", cuisine: "French Fine Dining", distanceKm: 0.2, priceRange: "€€€€", rating: 4.7, vegetarian: true, outdoor: true },
      { name: "La Rotonde", cuisine: "French Contemporary", distanceKm: 0.3, priceRange: "€€€", rating: 4.5, vegetarian: true, outdoor: true },
      { name: "Le Bois Joli", cuisine: "Savoyard", distanceKm: 2, priceRange: "€€", rating: 4.4, vegetarian: true, outdoor: true },
      { name: "Chez Tino", cuisine: "Italian", distanceKm: 1, priceRange: "€€", rating: 4.3, vegetarian: true, outdoor: false },
      { name: "Le Matafan", cuisine: "Savoyard", distanceKm: 1.5, priceRange: "€€€", rating: 4.6, vegetarian: true, outdoor: true }
    ],
    nearbyMedical: [
      { name: "CHAL Leman Sud", type: "Hospital", distanceKm: 5, phone: "+33 4 50 83 20 00", emergency: true },
      { name: "Cabinet Medical Evian", type: "Clinic", distanceKm: 0.5, phone: "+33 4 50 75 03 03", emergency: false },
      { name: "Dentiste Evian Centre", type: "Dental", distanceKm: 0.8, phone: "+33 4 50 75 04 04", emergency: false }
    ],
    costOfLiving: { rent1Bed: "€900", meal: "€15", monthlyFood: "€400", transport: "€60", currency: "EUR", summary: "Moderate cost of living in resort town setting" },
    scholarships: { available: true, details: "Merit-based scholarships for talented junior golfers with tournament results." },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: "EU/EEA/Swiss citizens visa-free", notes: "Schengen visa required for non-EU citizens, 90 days in 180 days" },
    airportTransfers: [
      { mode: "Taxi", duration: "50min", cost: "€80-100", notes: "Direct route from Geneva Airport" },
      { mode: "Bus", duration: "1h 30min", cost: "€20", notes: "Bus to Thonon then local bus" },
      { mode: "Private Transfer", duration: "50min", cost: "€120-150", notes: "Luxury transfer available" }
    ],
    nearbyTournaments: [
      { name: "Evian Championship", level: "LPGA Major", surface: "Parkland", month: "July", venue: "Evian Resort GC" },
      { name: "French Amateur Championship", level: "Amateur", surface: "Various", month: "June", venue: "Various venues" }
    ],
    videoTour: null
  },
  {
    id: "gut-larchenhof",
    name: "Gut Larchenhof Golf Academy",
    country: "Germany",
    countryFlag: "",
    city: "Cologne",
    lat: 50.9375,
    lng: 6.9603,
    website: "https://www.gut-larchenhof.de",
    contact: "+49 2203 9201 0",
    individualLessons: true,
    boarding: true,
    level: "Pro",
    starred: false,
    airport: { name: "Cologne Bonn Airport", code: "CGN", distance: "25 km", driveTime: "30min" },
    beach: null,
    climate: "cologne",
    priceRange: { from: 2800, to: 7000, unit: "month", display: "€2,800€7,000/mo" },
    programs: [
      { name: "Professional Development", price: "€5,500/mo", desc: "Comprehensive training for tour preparation" },
      { name: "Elite Performance", price: "€4,000/mo", desc: "Advanced coaching with sports science integration" },
      { name: "Junior Academy", price: "€2,800/mo", desc: "Youth development in professional environment" }
    ],
    coaches: [
      { name: "Klaus Werner", credential: "PGA Professional", background: "30 years coaching experience, German PGA member", atpWta: false, bestRanking: null, rankingNote: null, languages: ["German", "English"], instagram: null },
      { name: "Sabine Mueller", credential: "PGA Professional", background: "18 years experience, former German national player", atpWta: false, bestRanking: null, rankingNote: null, languages: ["German", "English", "French"], instagram: null }
    ],
    bestCoachRanking: null,
    facilities: "Championship Course, Driving Range, Putting Green, Short Game Area, Pro Shop, Clubhouse, Gym, Video Analysis, Indoor Training Bay",
    courtSurfaces: ["Parkland"],
    notableAlumni: ["Martin Kaymer", "Bernhard Langer"],
    description: "Gut Larchenhof Golf Academy provides professional training near Cologne. The academy combines technical excellence with German precision in coaching methodology.",
    nearbyHotels: [
      { name: "Hyatt Regency Cologne", stars: 5, distanceKm: 18, features: ["Restaurant", "Spa", "Rhine River"], pool: true, wifi: true, pricePerNight: "€180" },
      { name: "Excelsior Hotel Ernst", stars: 5, distanceKm: 20, features: ["Restaurant", "Historic Luxury"], pool: false, wifi: true, pricePerNight: "€250" },
      { name: "Dorint Hotel Cologne", stars: 4, distanceKm: 15, features: ["Restaurant", "Modern"], pool: true, wifi: true, pricePerNight: "€120" },
      { name: "Maritim Hotel Cologne", stars: 4, distanceKm: 19, features: ["Restaurant", "Convention Center"], pool: true, wifi: true, pricePerNight: "€140" },
      { name: "Ibis Cologne Centrum", stars: 3, distanceKm: 18, features: ["Budget Friendly"], pool: false, wifi: true, pricePerNight: "€70" }
    ],
    nearbyRestaurants: [
      { name: "Ox & Klee", cuisine: "Modern German", distanceKm: 20, priceRange: "€€€€", rating: 4.8, vegetarian: true, outdoor: false },
      { name: "Brauhaus Sion", cuisine: "German Traditional", distanceKm: 19, priceRange: "€€", rating: 4.5, vegetarian: true, outdoor: true },
      { name: "Le Moissonnier", cuisine: "French", distanceKm: 18, priceRange: "€€€€", rating: 4.7, vegetarian: true, outdoor: false },
      { name: "Gut Larchenhof Restaurant", cuisine: "German", distanceKm: 0.1, priceRange: "€€€", rating: 4.4, vegetarian: true, outdoor: true },
      { name: "Ristorante Da Damiano", cuisine: "Italian", distanceKm: 15, priceRange: "€€", rating: 4.3, vegetarian: true, outdoor: true }
    ],
    nearbyMedical: [
      { name: "University Hospital Cologne", type: "Hospital", distanceKm: 18, phone: "+49 221 478 0", emergency: true },
      { name: "Pulheim Medical Center", type: "Clinic", distanceKm: 8, phone: "+49 2238 5500", emergency: false },
      { name: "Zahnarzt Pulheim", type: "Dental", distanceKm: 7, phone: "+49 2238 3030", emergency: false }
    ],
    costOfLiving: { rent1Bed: "€850", meal: "€12", monthlyFood: "€350", transport: "€90", currency: "EUR", summary: "Moderate cost of living near major city" },
    scholarships: { available: true, details: "Performance-based scholarships for German and international junior golfers." },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: "EU/EEA citizens visa-free", notes: "Schengen visa required for non-EU, 90 days in 180 days" },
    airportTransfers: [
      { mode: "Taxi", duration: "30min", cost: "€50-65", notes: "Direct from Cologne Bonn Airport" },
      { mode: "Train", duration: "50min", cost: "€15", notes: "Train to Cologne then S-Bahn" },
      { mode: "Private Transfer", duration: "30min", cost: "€80-100", notes: "Private car available" }
    ],
    nearbyTournaments: [
      { name: "German Masters", level: "European Challenge Tour", surface: "Parkland", month: "September", venue: "Gut Larchenhof" },
      { name: "German Amateur Championship", level: "Amateur", surface: "Various", month: "July", venue: "Various venues" }
    ],
    videoTour: null
  },
  {
    id: "bro-hof-slott",
    name: "Bro Hof Slott Golf Academy",
    country: "Sweden",
    countryFlag: "",
    city: "Stockholm",
    lat: 59.5378,
    lng: 17.6414,
    website: "https://www.brohofslott.se",
    contact: "+46 8 584 500 20",
    individualLessons: true,
    boarding: true,
    level: "Elite",
    starred: false,
    airport: { name: "Stockholm Arlanda Airport", code: "ARN", distance: "30 km", driveTime: "35min" },
    beach: null,
    climate: "stockholm",
    priceRange: { from: 3500, to: 10000, unit: "month", display: "€3,500€10,000/mo" },
    programs: [
      { name: "Elite Championship", price: "€8,000/mo", desc: "Premier training for tour professionals" },
      { name: "Pro Development", price: "€6,000/mo", desc: "Professional preparation with Scandinavian coaching" },
      { name: "Junior Excellence", price: "€3,500/mo", desc: "Youth academy for competitive golfers" }
    ],
    coaches: [
      { name: "Henrik Andersson", credential: "PGA Professional", background: "25 years coaching, Swedish PGA national coach", atpWta: false, bestRanking: null, rankingNote: null, languages: ["Swedish", "English"], instagram: null },
      { name: "Malin Bergstrom", credential: "PGA Professional", background: "20 years experience, biomechanics specialist", atpWta: false, bestRanking: null, rankingNote: null, languages: ["Swedish", "English", "German"], instagram: null }
    ],
    bestCoachRanking: null,
    facilities: "Two Championship Courses, Driving Range, Putting Green, Short Game Area, Pro Shop, Castle Clubhouse, Gym, Video Analysis, Indoor Training",
    courtSurfaces: ["Parkland"],
    notableAlumni: ["Annika Sorenstam", "Henrik Stenson"],
    description: "Bro Hof Slott Golf Academy provides elite training at a historic castle estate near Stockholm. The academy offers championship facilities with Scandinavian coaching excellence.",
    nearbyHotels: [
      { name: "Bro Hof Slott Castle Hotel", stars: 5, distanceKm: 0.1, features: ["Restaurant", "Spa", "Castle Hotel"], pool: true, wifi: true, pricePerNight: "€300" },
      { name: "Radisson Blu Arlandia", stars: 4, distanceKm: 25, features: ["Restaurant", "Airport Connection"], pool: true, wifi: true, pricePerNight: "€150" },
      { name: "Quality Hotel Friends", stars: 4, distanceKm: 30, features: ["Restaurant", "Modern"], pool: false, wifi: true, pricePerNight: "€120" },
      { name: "Clarion Hotel Arlanda", stars: 4, distanceKm: 28, features: ["Restaurant", "Airport Hotel"], pool: true, wifi: true, pricePerNight: "€140" },
      { name: "Connect Hotel Uppland", stars: 3, distanceKm: 22, features: ["Budget Friendly"], pool: false, wifi: true, pricePerNight: "€80" }
    ],
    nearbyRestaurants: [
      { name: "Slottet Restaurant", cuisine: "Swedish Fine Dining", distanceKm: 0.1, priceRange: "€€€€", rating: 4.7, vegetarian: true, outdoor: true },
      { name: "Falkenberg", cuisine: "Swedish Contemporary", distanceKm: 15, priceRange: "€€€", rating: 4.5, vegetarian: true, outdoor: false },
      { name: "Kagges", cuisine: "Swedish", distanceKm: 18, priceRange: "€€", rating: 4.4, vegetarian: true, outdoor: true },
      { name: "Hjorthagen Kitchen", cuisine: "International", distanceKm: 20, priceRange: "€€", rating: 4.3, vegetarian: true, outdoor: false },
      { name: "Sushi Yama", cuisine: "Japanese", distanceKm: 19, priceRange: "€€€", rating: 4.6, vegetarian: true, outdoor: false }
    ],
    nearbyMedical: [
      { name: "Danderyds Hospital", type: "Hospital", distanceKm: 25, phone: "+46 8 123 500 00", emergency: true },
      { name: "Upplands Vasby Health Center", type: "Clinic", distanceKm: 15, phone: "+46 8 590 970 00", emergency: false },
      { name: "Dental Care Upplands", type: "Dental", distanceKm: 14, phone: "+46 8 590 810 00", emergency: false }
    ],
    costOfLiving: { rent1Bed: "€1100", meal: "€14", monthlyFood: "€400", transport: "€90", currency: "SEK", summary: "High cost of living in Stockholm region" },
    scholarships: { available: true, details: "Elite scholarships for exceptional golfers with national or international ranking." },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: "EU/EEA citizens visa-free", notes: "Schengen visa required for non-EU, 90 days in 180 days" },
    airportTransfers: [
      { mode: "Taxi", duration: "35min", cost: "€60-80", notes: "Direct from Arlanda Airport" },
      { mode: "Airport Coach", duration: "45min", cost: "€20", notes: "Scheduled transfers available" },
      { mode: "Private Transfer", duration: "35min", cost: "€100-130", notes: "Luxury service available" }
    ],
    nearbyTournaments: [
      { name: "Nordea Masters", level: "European Tour", surface: "Parkland", month: "June", venue: "Bro Hof Slott" },
      { name: "Swedish Amateur Championship", level: "Amateur", surface: "Various", month: "July", venue: "Various venues" }
    ],
    videoTour: null
  },
  {
    id: "royal-copenhagen",
    name: "Royal Copenhagen Golf Academy",
    country: "Denmark",
    countryFlag: "",
    city: "Copenhagen",
    lat: 55.7627,
    lng: 12.5411,
    website: "https://www.royalcopenhagen.dk",
    contact: "+45 39 63 04 83",
    individualLessons: true,
    boarding: false,
    level: "All levels",
    starred: false,
    airport: { name: "Copenhagen Airport", code: "CPH", distance: "12 km", driveTime: "20min" },
    beach: { distance: "Beach 3 km" },
    climate: "copenhagen",
    priceRange: { from: 2000, to: 6000, unit: "month", display: "€2,000€6,000/mo" },
    programs: [
      { name: "Championship Training", price: "€5,000/mo", desc: "Elite coaching on historic course" },
      { name: "Intermediate Program", price: "€3,500/mo", desc: "Skill development for advancing players" },
      { name: "Beginner Academy", price: "€2,000/mo", desc: "Foundation training for new golfers" }
    ],
    coaches: [
      { name: "Niels Hansen", credential: "PGA Professional", background: "22 years coaching, Danish PGA professional", atpWta: false, bestRanking: null, rankingNote: null, languages: ["Danish", "English"], instagram: null },
      { name: "Maria Kristensen", credential: "PGA Professional", background: "15 years experience, short game specialist", atpWta: false, bestRanking: null, rankingNote: null, languages: ["Danish", "English", "Swedish"], instagram: null }
    ],
    bestCoachRanking: null,
    facilities: "Championship Course, Driving Range, Putting Green, Short Game Area, Pro Shop, Clubhouse, Video Analysis",
    courtSurfaces: ["Heathland"],
    notableAlumni: ["Thomas Bjorn", "Thorbjorn Olesen"],
    description: "Royal Copenhagen Golf Academy provides training for all levels at Denmark oldest golf club. The academy combines rich heritage with modern coaching on historic heathland course.",
    nearbyHotels: [
      { name: "D'Angleterre Copenhagen", stars: 5, distanceKm: 10, features: ["Restaurant", "Spa", "Historic Luxury"], pool: true, wifi: true, pricePerNight: "€350" },
      { name: "NH Collection Copenhagen", stars: 4, distanceKm: 9, features: ["Restaurant", "Modern"], pool: false, wifi: true, pricePerNight: "€160" },
      { name: "Scandic Glostrup", stars: 3, distanceKm: 4, features: ["Restaurant", "Family Friendly"], pool: false, wifi: true, pricePerNight: "€110" },
      { name: "Comwell Copenhagen", stars: 4, distanceKm: 11, features: ["Restaurant", "Conference"], pool: true, wifi: true, pricePerNight: "€140" },
      { name: "Zleep Hotel Glostrup", stars: 2, distanceKm: 3, features: ["Budget Friendly"], pool: false, wifi: true, pricePerNight: "€70" }
    ],
    nearbyRestaurants: [
      { name: "Geranium", cuisine: "New Nordic", distanceKm: 10, priceRange: "€€€€", rating: 4.9, vegetarian: true, outdoor: false },
      { name: "Noma", cuisine: "New Nordic", distanceKm: 12, priceRange: "€€€€", rating: 4.9, vegetarian: true, outdoor: false },
      { name: "Restaurant AOC", cuisine: "French Contemporary", distanceKm: 11, priceRange: "€€€€", rating: 4.7, vegetarian: true, outdoor: false },
      { name: "Mielcke & Hurtigkarl", cuisine: "Danish", distanceKm: 8, priceRange: "€€€", rating: 4.6, vegetarian: true, outdoor: true },
      { name: "Klubhuset", cuisine: "Danish Club", distanceKm: 0.1, priceRange: "€€", rating: 4.4, vegetarian: true, outdoor: true }
    ],
    nearbyMedical: [
      { name: "Herlev Hospital", type: "Hospital", distanceKm: 7, phone: "+45 38 68 38 68", emergency: true },
      { name: "Glostrup Medical Center", type: "Clinic", distanceKm: 3, phone: "+45 44 96 44 96", emergency: false },
      { name: "Tandlaege Glostrup", type: "Dental", distanceKm: 4, phone: "+45 43 96 01 01", emergency: false }
    ],
    costOfLiving: { rent1Bed: "€1300", meal: "€18", monthlyFood: "€450", transport: "€80", currency: "DKK", summary: "High cost of living in Copenhagen area" },
    scholarships: { available: true, details: "Merit scholarships for junior golfers showing exceptional promise." },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: "EU/EEA citizens visa-free", notes: "Schengen visa required for non-EU, 90 days in 180 days" },
    airportTransfers: [
      { mode: "Taxi", duration: "20min", cost: "€40-55", notes: "Direct from Copenhagen Airport" },
      { mode: "Metro and Bus", duration: "45min", cost: "€10", notes: "Public transport combination" },
      { mode: "Private Transfer", duration: "20min", cost: "€70-90", notes: "Private car service" }
    ],
    nearbyTournaments: [
      { name: "Made in Denmark", level: "European Tour", surface: "Parkland", month: "May", venue: "Himmerland Golf" },
      { name: "Danish Amateur Championship", level: "Amateur", surface: "Heathland", month: "June", venue: "Various venues" }
    ],
    videoTour: null
  },
  {
    id: "kennemer",
    name: "Kennemer Golf Academy",
    country: "Netherlands",
    countryFlag: "",
    city: "Zandvoort",
    lat: 52.4382,
    lng: 4.5331,
    website: "https://www.kennemer.nl",
    contact: "+31 23 571 28 36",
    individualLessons: true,
    boarding: false,
    level: "All levels",
    starred: false,
    airport: { name: "Amsterdam Schiphol Airport", code: "AMS", distance: "25 km", driveTime: "30min" },
    beach: { distance: "Beach 2 km" },
    climate: "zandvoort",
    priceRange: { from: 2200, to: 6500, unit: "month", display: "€2,200€6,500/mo" },
    programs: [
      { name: "Links Mastery", price: "€5,500/mo", desc: "Championship links golf training" },
      { name: "Intermediate Development", price: "€3,800/mo", desc: "Progressive skill building on links" },
      { name: "Beginner Program", price: "€2,200/mo", desc: "Introduction to links golf" }
    ],
    coaches: [
      { name: "Jan van der Berg", credential: "PGA Professional", background: "28 years coaching, links golf specialist", atpWta: false, bestRanking: null, rankingNote: null, languages: ["Dutch", "English"], instagram: null },
      { name: "Lisa de Vries", credential: "PGA Professional", background: "16 years experience, short game expert", atpWta: false, bestRanking: null, rankingNote: null, languages: ["Dutch", "English", "German"], instagram: null }
    ],
    bestCoachRanking: null,
    facilities: "Championship Links Course, Driving Range, Putting Green, Short Game Area, Pro Shop, Clubhouse, Video Analysis",
    courtSurfaces: ["Links"],
    notableAlumni: ["Joost Luiten", "Anne van Dam"],
    description: "Kennemer Golf Academy provides training for all levels on a classic links course near the North Sea. The academy specializes in links golf skills with coastal conditions.",
    nearbyHotels: [
      { name: "NH Zandvoort", stars: 4, distanceKm: 2, features: ["Restaurant", "Beach Access"], pool: false, wifi: true, pricePerNight: "€130" },
      { name: "Grand Hotel Huis ter Duin", stars: 5, distanceKm: 8, features: ["Restaurant", "Spa", "Beach"], pool: true, wifi: true, pricePerNight: "€250" },
      { name: "Palace Hotel Zandvoort", stars: 3, distanceKm: 2.5, features: ["Beach View"], pool: false, wifi: true, pricePerNight: "€100" },
      { name: "Hotel Zandvoort", stars: 3, distanceKm: 2, features: ["Budget Friendly"], pool: false, wifi: true, pricePerNight: "€80" },
      { name: "Renesse Appartementen", stars: 3, distanceKm: 1.5, features: ["Self Catering"], pool: false, wifi: true, pricePerNight: "€90" }
    ],
    nearbyRestaurants: [
      { name: "The Sandbar", cuisine: "International", distanceKm: 2, priceRange: "€€€", rating: 4.5, vegetarian: true, outdoor: true },
      { name: "Fris", cuisine: "Dutch Contemporary", distanceKm: 2.5, priceRange: "€€€", rating: 4.6, vegetarian: true, outdoor: false },
      { name: "Beach Club Woodstock", cuisine: "Beach Club", distanceKm: 2, priceRange: "€€", rating: 4.4, vegetarian: true, outdoor: true },
      { name: "The Shack", cuisine: "Seafood", distanceKm: 2.2, priceRange: "€€", rating: 4.3, vegetarian: false, outdoor: true },
      { name: "De Uitkijk", cuisine: "Dutch", distanceKm: 1, priceRange: "€€", rating: 4.2, vegetarian: true, outdoor: true }
    ],
    nearbyMedical: [
      { name: "Red Cross Hospital Beverwijk", type: "Hospital", distanceKm: 12, phone: "+31 251 26 50 00", emergency: true },
      { name: "Huisartsen Zandvoort", type: "Clinic", distanceKm: 2, phone: "+31 23 571 23 45", emergency: false },
      { name: "Tandarts Zandvoort", type: "Dental", distanceKm: 2.5, phone: "+31 23 571 34 56", emergency: false }
    ],
    costOfLiving: { rent1Bed: "€1000", meal: "€15", monthlyFood: "€400", transport: "€70", currency: "EUR", summary: "Moderate cost of living in coastal resort town" },
    scholarships: { available: true, details: "Scholarships available for talented junior golfers, especially links specialists." },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: "EU/EEA citizens visa-free", notes: "Schengen visa required for non-EU, 90 days in 180 days" },
    airportTransfers: [
      { mode: "Taxi", duration: "30min", cost: "€60-75", notes: "Direct from Schiphol Airport" },
      { mode: "Train and Bus", duration: "1h", cost: "€12", notes: "Train to Haarlem then bus" },
      { mode: "Private Transfer", duration: "30min", cost: "€90-110", notes: "Private car service" }
    ],
    nearbyTournaments: [
      { name: "Dutch Open", level: "European Tour", surface: "Links", month: "September", venue: "Bernardus Golf" },
      { name: "Netherlands Amateur Championship", level: "Amateur", surface: "Links", month: "July", venue: "Various venues" }
    ],
    videoTour: null
  },
  {
    id: "royal-zoute",
    name: "Royal Zoute Golf Academy",
    country: "Belgium",
    countryFlag: "",
    city: "Knokke-Heist",
    lat: 51.3578,
    lng: 3.3019,
    website: "https://www.golfzoute.be",
    contact: "+32 50 60 12 27",
    individualLessons: true,
    boarding: false,
    level: "Pro",
    starred: false,
    airport: { name: "Brussels Airport", code: "BRU", distance: "110 km", driveTime: "1h 15min" },
    beach: { distance: "Beach 500m" },
    climate: "knokke",
    priceRange: { from: 3000, to: 7500, unit: "month", display: "€3,000€7,500/mo" },
    programs: [
      { name: "Professional Training", price: "€6,500/mo", desc: "Elite links golf coaching" },
      { name: "Pro Development", price: "€4,500/mo", desc: "Tour preparation on links" },
      { name: "Advanced Junior", price: "€3,000/mo", desc: "Youth competitive training" }
    ],
    coaches: [
      { name: "Philippe Dubois", credential: "PGA Professional", background: "24 years coaching, Belgian PGA member", atpWta: false, bestRanking: null, rankingNote: null, languages: ["Dutch", "French", "English"], instagram: null },
      { name: "Sophie Van de Velde", credential: "PGA Professional", background: "18 years experience, links specialist", atpWta: false, bestRanking: null, rankingNote: null, languages: ["Dutch", "French", "English"], instagram: null }
    ],
    bestCoachRanking: null,
    facilities: "Championship Links Course, Driving Range, Putting Green, Short Game Area, Pro Shop, Clubhouse, Video Analysis, Indoor Training",
    courtSurfaces: ["Links"],
    notableAlumni: ["Nicolas Colsaerts", "Thomas Pieters"],
    description: "Royal Zoute Golf Academy provides professional training on Belgium premier links course near the North Sea. The academy offers elite coaching in exclusive seaside setting.",
    nearbyHotels: [
      { name: "La Reserve", stars: 5, distanceKm: 1, features: ["Restaurant", "Spa", "Beach"], pool: true, wifi: true, pricePerNight: "€350" },
      { name: "Hotel Manoir du Dragon", stars: 4, distanceKm: 0.8, features: ["Restaurant", "Historic"], pool: false, wifi: true, pricePerNight: "€180" },
      { name: "Hotel Pavillon du Zoute", stars: 4, distanceKm: 0.5, features: ["Restaurant", "Beach Access"], pool: false, wifi: true, pricePerNight: "€160" },
      { name: "Auberge du Vieux Zoute", stars: 3, distanceKm: 0.6, features: ["Budget Friendly"], pool: false, wifi: true, pricePerNight: "€110" },
      { name: "Ibis Knokke", stars: 2, distanceKm: 3, features: ["Basic"], pool: false, wifi: true, pricePerNight: "€75" }
    ],
    nearbyRestaurants: [
      { name: "Le Zoute", cuisine: "French Fine Dining", distanceKm: 0.5, priceRange: "€€€€", rating: 4.7, vegetarian: true, outdoor: true },
      { name: "Bar Bulot", cuisine: "Seafood", distanceKm: 1, priceRange: "€€€", rating: 4.6, vegetarian: false, outdoor: true },
      { name: "Bartholomeus", cuisine: "Belgian Contemporary", distanceKm: 0.8, priceRange: "€€€", rating: 4.5, vegetarian: true, outdoor: false },
      { name: "The Mad Cow", cuisine: "Belgian", distanceKm: 1.2, priceRange: "€€", rating: 4.4, vegetarian: true, outdoor: true },
      { name: "La Canne a Sucre", cuisine: "French", distanceKm: 0.7, priceRange: "€€€", rating: 4.6, vegetarian: true, outdoor: false }
    ],
    nearbyMedical: [
      { name: "AZ Zeno Hospital", type: "Hospital", distanceKm: 15, phone: "+32 59 33 23 11", emergency: true },
      { name: "Medical Center Knokke", type: "Clinic", distanceKm: 2, phone: "+32 50 61 12 34", emergency: false },
      { name: "Tandarts Knokke", type: "Dental", distanceKm: 1.5, phone: "+32 50 60 23 45", emergency: false }
    ],
    costOfLiving: { rent1Bed: "€900", meal: "€16", monthlyFood: "€400", transport: "€60", currency: "EUR", summary: "High cost of living in exclusive resort area" },
    scholarships: { available: true, details: "Merit scholarships for elite junior golfers with strong tournament records." },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: "EU/EEA citizens visa-free", notes: "Schengen visa required for non-EU, 90 days in 180 days" },
    airportTransfers: [
      { mode: "Taxi", duration: "1h 15min", cost: "€120-150", notes: "Direct from Brussels Airport" },
      { mode: "Train", duration: "2h", cost: "€25", notes: "Train to Bruges then bus" },
      { mode: "Private Transfer", duration: "1h 15min", cost: "€180-220", notes: "Luxury transfer service" }
    ],
    nearbyTournaments: [
      { name: "Belgian Open", level: "European Challenge Tour", surface: "Links", month: "May", venue: "Various venues" },
      { name: "Belgian Amateur Championship", level: "Amateur", surface: "Links", month: "June", venue: "Various venues" }
    ],
    videoTour: null
  },
  {
    id: "faldo-series",
    name: "Faldo Series Academy",
    country: "England",
    countryFlag: "\ud83c\uddec\ud83c\udde7",
    city: "Hertfordshire",
    lat: 51.7636,
    lng: -0.2247,
    website: "https://www.brocket-hall.co.uk",
    contact: "+44 1707 368700",
    individualLessons: true,
    boarding: false,
    level: "Elite",
    starred: false,
    airport: { name: "London Luton Airport", code: "LTN", distance: "20 km", driveTime: "25min" },
    beach: { distance: "120 km", description: "Southend-on-Sea" },
    climate: "hertfordshire",
    priceRange: { from: 2000, to: 7000, unit: "month", display: "\u20ac2,000\u2013\u20ac7,000/mo" },
    programs: [
      { name: "Junior Development", price: "\u20ac2,000/mo", desc: "Foundation skills for ages 8-16" },
      { name: "Elite Performance", price: "\u20ac5,000/mo", desc: "Advanced coaching for competitive golfers" },
      { name: "Short Game Mastery", price: "\u20ac3,000/mo", desc: "Intensive putting and chipping program" },
      { name: "Tournament Preparation", price: "\u20ac7,000/mo", desc: "Full competition readiness training" }
    ],
    coaches: [
      { name: "Matthew Paget", credential: "PGA Professional", background: "Head coach with 18 years of elite instruction", atpWta: false, bestRanking: null, rankingNote: null, languages: ["English"], instagram: null },
      { name: "Rebecca Jones", credential: "PGA Professional", background: "Former England Ladies team member, specializes in junior coaching", atpWta: false, bestRanking: null, rankingNote: null, languages: ["English", "Spanish"], instagram: null }
    ],
    bestCoachRanking: null,
    facilities: "Two Championship Courses, Driving Range, Short Game Area, Putting Greens, Video Analysis, Clubhouse, Pro Shop",
    courtSurfaces: ["Parkland"],
    notableAlumni: ["Nick Faldo"],
    description: "The Faldo Series Academy at Brocket Hall provides elite golf training inspired by six-time Major champion Sir Nick Faldo. The parkland courses offer a perfect setting for developing all aspects of the game.",
    nearbyHotels: [
      { name: "Brocket Hall", stars: 5, distanceKm: 0.1, features: ["Restaurant", "Spa", "Historic Estate"], pool: true, wifi: true, pricePerNight: "\u20ac280" },
      { name: "Sopwell House", stars: 4, distanceKm: 8, features: ["Restaurant", "Spa", "Pool"], pool: true, wifi: true, pricePerNight: "\u20ac180" },
      { name: "The Bull at Wheathampstead", stars: 3, distanceKm: 5, features: ["Restaurant", "Bar"], pool: false, wifi: true, pricePerNight: "\u20ac110" },
      { name: "Premier Inn Welwyn", stars: 3, distanceKm: 4, features: ["Restaurant", "Parking"], pool: false, wifi: true, pricePerNight: "\u20ac75" },
      { name: "Holiday Inn Stevenage", stars: 3, distanceKm: 15, features: ["Restaurant", "Bar", "Parking"], pool: false, wifi: true, pricePerNight: "\u20ac85" }
    ],
    nearbyRestaurants: [
      { name: "The Auberge du Lac", cuisine: "French Fine Dining", distanceKm: 0.1, priceRange: "\u20ac\u20ac\u20ac", rating: 4.7, vegetarian: true, outdoor: true },
      { name: "The Waffle House", cuisine: "British", distanceKm: 5, priceRange: "\u20ac\u20ac", rating: 4.5, vegetarian: true, outdoor: true },
      { name: "Lussmanns", cuisine: "Modern British", distanceKm: 6, priceRange: "\u20ac\u20ac", rating: 4.4, vegetarian: true, outdoor: false },
      { name: "Ye Olde Fighting Cocks", cuisine: "Pub Food", distanceKm: 7, priceRange: "\u20ac\u20ac", rating: 4.3, vegetarian: true, outdoor: true },
      { name: "Thompson", cuisine: "Modern European", distanceKm: 8, priceRange: "\u20ac\u20ac\u20ac", rating: 4.6, vegetarian: true, outdoor: false }
    ],
    nearbyMedical: [
      { name: "Queen Elizabeth II Hospital", type: "Hospital", distanceKm: 5, phone: "+44 1438 314333", emergency: true },
      { name: "Potters Bar Community Hospital", type: "Clinic", distanceKm: 10, phone: "+44 1707 653286", emergency: false },
      { name: "Welwyn Dental Care", type: "Dental", distanceKm: 4, phone: "+44 1707 262016", emergency: false }
    ],
    costOfLiving: { rent1Bed: "\u20ac1100", meal: "\u20ac16", monthlyFood: "\u20ac420", transport: "\u20ac80", currency: "GBP", summary: "Moderate-high cost in commuter belt" },
    scholarships: { available: true, details: "Faldo Series scholarships for promising junior golfers with competitive results." },
    visaInfo: { schengen: false, eu: false, visaFreeCountries: "EU/EEA citizens visa-free for up to 6 months", notes: "UK visa rules apply post-Brexit" },
    airportTransfers: [
      { mode: "Taxi", duration: "30min", cost: "\u20ac40-50", notes: "From London Luton" },
      { mode: "Train", duration: "45min", cost: "\u20ac15", notes: "Train to Welwyn Garden City then taxi" },
      { mode: "Private Transfer", duration: "25min", cost: "\u20ac60-80", notes: "Door-to-door service" }
    ],
    nearbyTournaments: [
      { name: "BMW PGA Championship", level: "European Tour", surface: "Parkland", month: "September", venue: "Wentworth" },
      { name: "Faldo Series Grand Final", level: "Junior", surface: "Parkland", month: "October", venue: "Various" }
    ],
    videoTour: null
  },
  {
    id: "monte-rei",
    name: "Monte Rei Golf Academy",
    country: "Portugal",
    countryFlag: "\ud83c\uddf5\ud83c\uddf9",
    city: "Vila Nova de Cacela",
    lat: 37.1833,
    lng: -7.5333,
    website: "https://www.monte-rei.com",
    contact: "+351 281 950 960",
    individualLessons: true,
    boarding: true,
    level: "Elite",
    starred: false,
    airport: { name: "Faro Airport", code: "FAO", distance: "45 km", driveTime: "40min" },
    beach: { distance: "5 km", description: "Manta Rota Beach" },
    climate: "algarve",
    priceRange: { from: 2500, to: 9000, unit: "month", display: "\u20ac2,500\u2013\u20ac9,000/mo" },
    programs: [
      { name: "Junior Academy", price: "\u20ac2,500/mo", desc: "Complete development program for young golfers" },
      { name: "Performance Training", price: "\u20ac5,000/mo", desc: "Advanced coaching for competitive players" },
      { name: "Golf & Wellness", price: "\u20ac4,000/mo", desc: "Combine golf training with fitness and wellness" },
      { name: "Pro Pathway", price: "\u20ac9,000/mo", desc: "Professional tour preparation program" }
    ],
    coaches: [
      { name: "Paulo Silva", credential: "PGA Professional", background: "Former Portuguese national team coach", atpWta: false, bestRanking: null, rankingNote: null, languages: ["Portuguese", "English", "Spanish"], instagram: null },
      { name: "James Whitfield", credential: "PGA Professional", background: "15 years coaching in the Algarve", atpWta: false, bestRanking: null, rankingNote: null, languages: ["English", "Portuguese"], instagram: null }
    ],
    bestCoachRanking: null,
    facilities: "Jack Nicklaus Signature Course, Driving Range, Short Game Area, Putting Lab, Gym, Swimming Pool, Spa",
    courtSurfaces: ["Parkland", "Resort"],
    notableAlumni: [],
    description: "Monte Rei Golf Academy features a stunning Jack Nicklaus-designed course in the eastern Algarve. The academy combines world-class instruction with luxury resort facilities in one of Europe\\u0027s finest golf destinations.",
    nearbyHotels: [
      { name: "Monte Rei Golf & Country Club", stars: 5, distanceKm: 0.1, features: ["Restaurant", "Spa", "Pool", "Villas"], pool: true, wifi: true, pricePerNight: "\u20ac300" },
      { name: "Vila Gale Tavira", stars: 4, distanceKm: 15, features: ["Restaurant", "Pool", "Spa"], pool: true, wifi: true, pricePerNight: "\u20ac120" },
      { name: "Praia Verde Boutique Hotel", stars: 4, distanceKm: 8, features: ["Beach", "Restaurant", "Pool"], pool: true, wifi: true, pricePerNight: "\u20ac150" },
      { name: "Hotel Rural Quinta do Marco", stars: 3, distanceKm: 5, features: ["Pool", "Garden", "Quiet"], pool: true, wifi: true, pricePerNight: "\u20ac80" },
      { name: "Residencial Matos Pereira", stars: 2, distanceKm: 12, features: ["Central", "Budget"], pool: false, wifi: true, pricePerNight: "\u20ac50" }
    ],
    nearbyRestaurants: [
      { name: "Vistas Restaurant", cuisine: "Portuguese Fine Dining", distanceKm: 0.1, priceRange: "\u20ac\u20ac\u20ac", rating: 4.8, vegetarian: true, outdoor: true },
      { name: "Casa Velha", cuisine: "Portuguese Traditional", distanceKm: 10, priceRange: "\u20ac\u20ac", rating: 4.5, vegetarian: true, outdoor: true },
      { name: "Noelia", cuisine: "Seafood", distanceKm: 5, priceRange: "\u20ac\u20ac\u20ac", rating: 4.7, vegetarian: false, outdoor: true },
      { name: "Restaurante A Fateixa", cuisine: "Portuguese", distanceKm: 12, priceRange: "\u20ac\u20ac", rating: 4.4, vegetarian: true, outdoor: true },
      { name: "O Capelo", cuisine: "Grilled Fish", distanceKm: 6, priceRange: "\u20ac\u20ac", rating: 4.3, vegetarian: false, outdoor: true }
    ],
    nearbyMedical: [
      { name: "Hospital de Faro", type: "Hospital", distanceKm: 45, phone: "+351 289 891 100", emergency: true },
      { name: "Centro de Saude Cacela", type: "Clinic", distanceKm: 3, phone: "+351 281 951 234", emergency: false },
      { name: "Clinica Dentaria Tavira", type: "Dental", distanceKm: 12, phone: "+351 281 325 678", emergency: false }
    ],
    costOfLiving: { rent1Bed: "\u20ac700", meal: "\u20ac10", monthlyFood: "\u20ac300", transport: "\u20ac40", currency: "EUR", summary: "Affordable living in the eastern Algarve" },
    scholarships: { available: false, details: "No formal scholarship program currently available." },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: "EU/EEA citizens visa-free", notes: "Schengen visa required for non-EU, 90 days in 180 days" },
    airportTransfers: [
      { mode: "Taxi", duration: "40min", cost: "\u20ac50-65", notes: "From Faro Airport" },
      { mode: "Bus", duration: "1h 15min", cost: "\u20ac5", notes: "EVA bus to Tavira then taxi" },
      { mode: "Private Transfer", duration: "40min", cost: "\u20ac70-90", notes: "Pre-booked luxury transfer" }
    ],
    nearbyTournaments: [
      { name: "Portugal Masters", level: "European Tour", surface: "Parkland", month: "October", venue: "Dom Pedro Victoria Golf Course" },
      { name: "Algarve Open", level: "Challenge Tour", surface: "Parkland", month: "May", venue: "Various Algarve courses" }
    ],
    videoTour: null
  },
  {
    id: "terre-blanche",
    name: "Terre Blanche Golf Academy",
    country: "France",
    countryFlag: "\ud83c\uddeb\ud83c\uddf7",
    city: "Tourrettes",
    lat: 43.6333,
    lng: 6.5500,
    website: "https://www.terre-blanche.com",
    contact: "+33 4 94 39 90 00",
    individualLessons: true,
    boarding: true,
    level: "Elite",
    starred: true,
    airport: { name: "Nice C\u00f4te d\\u0027Azur Airport", code: "NCE", distance: "85 km", driveTime: "1h" },
    beach: { distance: "35 km", description: "Frejus Beach" },
    climate: "provence",
    priceRange: { from: 3000, to: 10000, unit: "month", display: "\u20ac3,000\u2013\u20ac10,000/mo" },
    programs: [
      { name: "Junior Golf Academy", price: "\u20ac3,000/mo", desc: "Year-round program for young golfers ages 8-18" },
      { name: "Elite Performance", price: "\u20ac7,000/mo", desc: "Advanced training for aspiring professionals" },
      { name: "Ladies Golf Program", price: "\u20ac4,000/mo", desc: "Dedicated women\\u0027s golf development" },
      { name: "Tour Pro Prep", price: "\u20ac10,000/mo", desc: "Full immersion tour preparation" }
    ],
    coaches: [
      { name: "Patrice Barquez", credential: "PGA France Professional", background: "Former European Tour player, 20 years coaching", atpWta: false, bestRanking: null, rankingNote: null, languages: ["French", "English", "Spanish"], instagram: null },
      { name: "Anne-Lise Caudal", credential: "PGA Professional", background: "Former LET player with extensive coaching experience", atpWta: false, bestRanking: null, rankingNote: null, languages: ["French", "English"], instagram: null }
    ],
    bestCoachRanking: null,
    facilities: "Two Championship Courses, Albatros Performance Center, Driving Range, Putting Green, Bunker Practice, Video Analysis, Gym, Spa",
    courtSurfaces: ["Parkland", "Resort"],
    notableAlumni: [],
    description: "Terre Blanche Hotel Spa Golf Resort in Provence offers a premier golf academy with two championship courses designed by Dave Thomas. The Albatros Performance Center provides cutting-edge training technology.",
    nearbyHotels: [
      { name: "Terre Blanche Hotel", stars: 5, distanceKm: 0.1, features: ["Restaurant", "Spa", "Pool", "Suites"], pool: true, wifi: true, pricePerNight: "\u20ac350" },
      { name: "Bastide de Tourrettes", stars: 4, distanceKm: 2, features: ["Restaurant", "Pool", "Views"], pool: true, wifi: true, pricePerNight: "\u20ac150" },
      { name: "Hotel & Spa des Gorges du Verdon", stars: 3, distanceKm: 20, features: ["Spa", "Restaurant", "Nature"], pool: true, wifi: true, pricePerNight: "\u20ac100" },
      { name: "Hostellerie Les Gorges de Pennafort", stars: 3, distanceKm: 15, features: ["Restaurant", "Garden"], pool: true, wifi: true, pricePerNight: "\u20ac90" },
      { name: "B&B Hotel Fayence", stars: 2, distanceKm: 8, features: ["Parking", "Budget"], pool: false, wifi: true, pricePerNight: "\u20ac65" }
    ],
    nearbyRestaurants: [
      { name: "Le Faventia", cuisine: "French Michelin-Star", distanceKm: 0.1, priceRange: "\u20ac\u20ac\u20ac\u20ac", rating: 4.9, vegetarian: true, outdoor: true },
      { name: "La Table du Ch\u00e2teau", cuisine: "Proven\u00e7al", distanceKm: 2, priceRange: "\u20ac\u20ac\u20ac", rating: 4.6, vegetarian: true, outdoor: true },
      { name: "L\\u0027Escourtin", cuisine: "French Bistro", distanceKm: 5, priceRange: "\u20ac\u20ac", rating: 4.4, vegetarian: true, outdoor: true },
      { name: "Chez Hugo", cuisine: "Proven\u00e7al", distanceKm: 8, priceRange: "\u20ac\u20ac", rating: 4.3, vegetarian: true, outdoor: true },
      { name: "Le Castellaras", cuisine: "French Mediterranean", distanceKm: 10, priceRange: "\u20ac\u20ac\u20ac", rating: 4.5, vegetarian: true, outdoor: true }
    ],
    nearbyMedical: [
      { name: "Centre Hospitalier Draguignan", type: "Hospital", distanceKm: 20, phone: "+33 4 94 60 50 00", emergency: true },
      { name: "Cabinet Medical Tourrettes", type: "Clinic", distanceKm: 2, phone: "+33 4 94 76 12 34", emergency: false },
      { name: "Dentiste Fayence", type: "Dental", distanceKm: 8, phone: "+33 4 94 76 56 78", emergency: false }
    ],
    costOfLiving: { rent1Bed: "\u20ac950", meal: "\u20ac18", monthlyFood: "\u20ac450", transport: "\u20ac50", currency: "EUR", summary: "High cost in exclusive Provence resort area" },
    scholarships: { available: false, details: "No formal scholarship program; occasional sponsorship for elite junior players." },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: "EU/EEA citizens visa-free", notes: "Schengen visa required for non-EU, 90 days in 180 days" },
    airportTransfers: [
      { mode: "Taxi", duration: "1h", cost: "\u20ac100-130", notes: "From Nice Airport" },
      { mode: "Bus", duration: "2h", cost: "\u20ac20", notes: "Bus to Draguignan then taxi" },
      { mode: "Private Transfer", duration: "1h", cost: "\u20ac150-180", notes: "Luxury transfer from Nice" }
    ],
    nearbyTournaments: [
      { name: "Open de France", level: "European Tour", surface: "Parkland", month: "October", venue: "Le Golf National" },
      { name: "Terre Blanche Ladies Open", level: "LET Access", surface: "Parkland", month: "June", venue: "Terre Blanche" }
    ],
    videoTour: null
  },
  {
    id: "golf-du-medoc",
    name: "Golf du M\u00e9doc Resort Academy",
    country: "France",
    countryFlag: "\ud83c\uddeb\ud83c\uddf7",
    city: "Le Pian-M\u00e9doc",
    lat: 44.9333,
    lng: -0.7667,
    website: "https://www.golfdumedoc.com",
    contact: "+33 5 56 70 11 90",
    individualLessons: true,
    boarding: false,
    level: "Pro",
    starred: false,
    airport: { name: "Bordeaux-M\u00e9rignac Airport", code: "BOD", distance: "20 km", driveTime: "25min" },
    beach: { distance: "45 km", description: "Lacanau Beach" },
    climate: "bordeaux",
    priceRange: { from: 1500, to: 5000, unit: "month", display: "\u20ac1,500\u2013\u20ac5,000/mo" },
    programs: [
      { name: "Junior School", price: "\u20ac1,500/mo", desc: "After-school golf training for ages 6-16" },
      { name: "Adult Intensive", price: "\u20ac2,500/mo", desc: "Concentrated adult improvement program" },
      { name: "Competition Training", price: "\u20ac3,500/mo", desc: "Tournament-focused coaching" },
      { name: "Pro Pathway", price: "\u20ac5,000/mo", desc: "Professional development track" }
    ],
    coaches: [
      { name: "Laurent Desvaux", credential: "PGA France Professional", background: "Head pro with 20 years experience at Golf du M\u00e9doc", atpWta: false, bestRanking: null, rankingNote: null, languages: ["French", "English"], instagram: null },
      { name: "Marie Dupont", credential: "PGA Professional", background: "Former French national team player", atpWta: false, bestRanking: null, rankingNote: null, languages: ["French", "English", "Spanish"], instagram: null }
    ],
    bestCoachRanking: null,
    facilities: "Two Championship Courses, Driving Range, Putting Greens, Short Game Area, Clubhouse, Video Analysis, Fitness Center",
    courtSurfaces: ["Parkland", "Heathland"],
    notableAlumni: [],
    description: "Golf du M\u00e9doc Resort near Bordeaux features two championship courses and a comprehensive academy. Set in the wine country of the M\u00e9doc region, it combines quality golf training with French culture.",
    nearbyHotels: [
      { name: "H\u00f4tel du Golf du M\u00e9doc", stars: 4, distanceKm: 0.1, features: ["Restaurant", "Pool", "Spa"], pool: true, wifi: true, pricePerNight: "\u20ac150" },
      { name: "InterContinental Bordeaux", stars: 5, distanceKm: 20, features: ["Restaurant", "Spa", "City Center"], pool: true, wifi: true, pricePerNight: "\u20ac250" },
      { name: "Best Western Bordeaux", stars: 3, distanceKm: 15, features: ["Restaurant", "Parking"], pool: false, wifi: true, pricePerNight: "\u20ac90" },
      { name: "Appart\\u0027City Bordeaux", stars: 3, distanceKm: 18, features: ["Kitchenette", "Parking"], pool: false, wifi: true, pricePerNight: "\u20ac70" },
      { name: "Camping La C\u00f4te d\\u0027Argent", stars: 3, distanceKm: 40, features: ["Beach", "Pool", "Nature"], pool: true, wifi: true, pricePerNight: "\u20ac45" }
    ],
    nearbyRestaurants: [
      { name: "Le Prince Noir", cuisine: "French Gastronomic", distanceKm: 10, priceRange: "\u20ac\u20ac\u20ac\u20ac", rating: 4.8, vegetarian: true, outdoor: true },
      { name: "Restaurant du Golf", cuisine: "French Brasserie", distanceKm: 0.1, priceRange: "\u20ac\u20ac", rating: 4.3, vegetarian: true, outdoor: true },
      { name: "La Tupina", cuisine: "Southwest French", distanceKm: 20, priceRange: "\u20ac\u20ac\u20ac", rating: 4.7, vegetarian: true, outdoor: false },
      { name: "Le Petit Commerce", cuisine: "Seafood", distanceKm: 20, priceRange: "\u20ac\u20ac", rating: 4.5, vegetarian: false, outdoor: true },
      { name: "Bar Cave de la Monnaie", cuisine: "Wine Bar", distanceKm: 20, priceRange: "\u20ac\u20ac", rating: 4.4, vegetarian: true, outdoor: true }
    ],
    nearbyMedical: [
      { name: "CHU de Bordeaux", type: "Hospital", distanceKm: 20, phone: "+33 5 56 79 56 79", emergency: true },
      { name: "Centre M\u00e9dical Le Pian", type: "Clinic", distanceKm: 2, phone: "+33 5 56 70 23 45", emergency: false },
      { name: "Dentiste Le Pian-M\u00e9doc", type: "Dental", distanceKm: 2, phone: "+33 5 56 70 34 56", emergency: false }
    ],
    costOfLiving: { rent1Bed: "\u20ac750", meal: "\u20ac14", monthlyFood: "\u20ac350", transport: "\u20ac45", currency: "EUR", summary: "Moderate cost of living near Bordeaux" },
    scholarships: { available: true, details: "French Golf Federation scholarships available for top junior players." },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: "EU/EEA citizens visa-free", notes: "Schengen visa required for non-EU, 90 days in 180 days" },
    airportTransfers: [
      { mode: "Taxi", duration: "25min", cost: "\u20ac35-45", notes: "From Bordeaux Airport" },
      { mode: "Bus", duration: "45min", cost: "\u20ac5", notes: "Bus to Le Pian then walk" },
      { mode: "Private Transfer", duration: "25min", cost: "\u20ac50-70", notes: "Door-to-door service" }
    ],
    nearbyTournaments: [
      { name: "Lacoste Ladies Open de France", level: "LET", surface: "Parkland", month: "September", venue: "Golf du M\u00e9doc" },
      { name: "French Amateur Championship", level: "Amateur", surface: "Various", month: "June", venue: "Various French courses" }
    ],
    videoTour: null
  },
  {
    id: "vidauban",
    name: "Royal Mougins Golf Academy",
    country: "France",
    countryFlag: "\ud83c\uddeb\ud83c\uddf7",
    city: "Mougins",
    lat: 43.6000,
    lng: 6.9833,
    website: "https://www.royalmougins.fr",
    contact: "+33 4 92 92 49 69",
    individualLessons: true,
    boarding: false,
    level: "Pro",
    starred: false,
    airport: { name: "Nice C\u00f4te d\\u0027Azur Airport", code: "NCE", distance: "25 km", driveTime: "30min" },
    beach: { distance: "10 km", description: "Cannes Beach" },
    climate: "cannes",
    priceRange: { from: 2000, to: 6000, unit: "month", display: "\u20ac2,000\u2013\u20ac6,000/mo" },
    programs: [
      { name: "Beginner Course", price: "\u20ac2,000/mo", desc: "Introduction to golf fundamentals" },
      { name: "Intermediate Training", price: "\u20ac3,000/mo", desc: "Develop consistency and course management" },
      { name: "Advanced Performance", price: "\u20ac5,000/mo", desc: "Competitive-level coaching and strategy" },
      { name: "Elite Program", price: "\u20ac6,000/mo", desc: "Tour-level preparation and fitness" }
    ],
    coaches: [
      { name: "Philippe Arnaud", credential: "PGA France Professional", background: "25 years of coaching experience on the C\u00f4te d\\u0027Azur", atpWta: false, bestRanking: null, rankingNote: null, languages: ["French", "English", "Italian"], instagram: null },
      { name: "Sophie Martin", credential: "PGA Professional", background: "Specialist in women\\u0027s golf coaching", atpWta: false, bestRanking: null, rankingNote: null, languages: ["French", "English"], instagram: null }
    ],
    bestCoachRanking: null,
    facilities: "18-hole Championship Course, Driving Range, Putting Green, Short Game Area, Clubhouse, Pro Shop, Fitness Room",
    courtSurfaces: ["Parkland"],
    notableAlumni: [],
    description: "Royal Mougins Golf Academy is set in the picturesque hills behind Cannes on the French Riviera. The course offers challenging parkland golf with stunning Mediterranean views.",
    nearbyHotels: [
      { name: "Royal Mougins Hotel", stars: 4, distanceKm: 0.1, features: ["Restaurant", "Spa", "Pool"], pool: true, wifi: true, pricePerNight: "\u20ac200" },
      { name: "Le Mas Candille", stars: 5, distanceKm: 2, features: ["Michelin Restaurant", "Spa", "Pool"], pool: true, wifi: true, pricePerNight: "\u20ac350" },
      { name: "Hotel de Mougins", stars: 4, distanceKm: 1, features: ["Restaurant", "Pool", "Garden"], pool: true, wifi: true, pricePerNight: "\u20ac150" },
      { name: "Ibis Cannes Mougins", stars: 2, distanceKm: 3, features: ["Parking", "Budget"], pool: false, wifi: true, pricePerNight: "\u20ac70" },
      { name: "Novotel Cannes", stars: 3, distanceKm: 8, features: ["Restaurant", "Pool", "Beach"], pool: true, wifi: true, pricePerNight: "\u20ac120" }
    ],
    nearbyRestaurants: [
      { name: "L\\u0027Amandier de Mougins", cuisine: "Proven\u00e7al Fine Dining", distanceKm: 1, priceRange: "\u20ac\u20ac\u20ac", rating: 4.7, vegetarian: true, outdoor: true },
      { name: "Le Moulin de Mougins", cuisine: "French Gastronomic", distanceKm: 1.5, priceRange: "\u20ac\u20ac\u20ac\u20ac", rating: 4.8, vegetarian: true, outdoor: true },
      { name: "Brasserie de la M\u00e9diterran\u00e9e", cuisine: "Mediterranean", distanceKm: 3, priceRange: "\u20ac\u20ac", rating: 4.4, vegetarian: true, outdoor: true },
      { name: "Le Rendez-Vous", cuisine: "French Bistro", distanceKm: 1, priceRange: "\u20ac\u20ac", rating: 4.3, vegetarian: true, outdoor: true },
      { name: "La Place de Mougins", cuisine: "French", distanceKm: 0.5, priceRange: "\u20ac\u20ac\u20ac", rating: 4.5, vegetarian: true, outdoor: true }
    ],
    nearbyMedical: [
      { name: "Centre Hospitalier de Cannes", type: "Hospital", distanceKm: 10, phone: "+33 4 93 69 70 00", emergency: true },
      { name: "Cabinet M\u00e9dical Mougins", type: "Clinic", distanceKm: 1, phone: "+33 4 93 75 12 34", emergency: false },
      { name: "Dentiste Mougins", type: "Dental", distanceKm: 1, phone: "+33 4 93 75 56 78", emergency: false }
    ],
    costOfLiving: { rent1Bed: "\u20ac1100", meal: "\u20ac18", monthlyFood: "\u20ac450", transport: "\u20ac50", currency: "EUR", summary: "High cost of living on the French Riviera" },
    scholarships: { available: false, details: "No formal scholarship program available." },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: "EU/EEA citizens visa-free", notes: "Schengen visa required for non-EU, 90 days in 180 days" },
    airportTransfers: [
      { mode: "Taxi", duration: "30min", cost: "\u20ac50-65", notes: "From Nice Airport" },
      { mode: "Bus", duration: "1h", cost: "\u20ac10", notes: "Bus to Mougins village" },
      { mode: "Private Transfer", duration: "30min", cost: "\u20ac80-100", notes: "Luxury transfer" }
    ],
    nearbyTournaments: [
      { name: "Open de Cannes", level: "European Challenge Tour", surface: "Parkland", month: "April", venue: "Royal Mougins" },
      { name: "French Riviera Amateur", level: "Amateur", surface: "Parkland", month: "March", venue: "Various Riviera courses" }
    ],
    videoTour: null
  },
  {
    id: "pga-catalunya",
    name: "PGA Catalunya Resort Academy",
    country: "Spain",
    countryFlag: "\ud83c\uddea\ud83c\uddf8",
    city: "Caldes de Malavella",
    lat: 41.8333,
    lng: 2.7833,
    website: "https://www.pgacatalunya.com",
    contact: "+34 972 472 577",
    individualLessons: true,
    boarding: true,
    level: "Elite",
    starred: true,
    airport: { name: "Girona-Costa Brava Airport", code: "GRO", distance: "15 km", driveTime: "15min" },
    beach: { distance: "30 km", description: "Lloret de Mar Beach" },
    climate: "girona",
    priceRange: { from: 2500, to: 8000, unit: "month", display: "\u20ac2,500\u2013\u20ac8,000/mo" },
    programs: [
      { name: "Junior Academy", price: "\u20ac2,500/mo", desc: "Full-time junior golf development" },
      { name: "Elite Training", price: "\u20ac5,500/mo", desc: "Advanced coaching for competitive golfers" },
      { name: "Short Game School", price: "\u20ac3,000/mo", desc: "Master the short game with specialized coaching" },
      { name: "Tour Pro Program", price: "\u20ac8,000/mo", desc: "Comprehensive professional tour preparation" }
    ],
    coaches: [
      { name: "David Leadbetter Academy Coach", credential: "PGA Professional", background: "Trained under David Leadbetter methodology", atpWta: false, bestRanking: null, rankingNote: null, languages: ["English", "Spanish", "Catalan"], instagram: null },
      { name: "Carlos Balmaseda", credential: "PGA Professional", background: "Former Spanish national team coach", atpWta: false, bestRanking: null, rankingNote: null, languages: ["Spanish", "English", "French"], instagram: null }
    ],
    bestCoachRanking: null,
    facilities: "Two Championship Courses (Stadium & Tour), Driving Range, Short Game Area, Putting Lab, Gym, David Leadbetter Academy, TPI Fitness",
    courtSurfaces: ["Parkland", "Resort"],
    notableAlumni: ["Jon Rahm"],
    description: "PGA Catalunya Resort is consistently ranked among the top courses in Continental Europe. The academy, in partnership with David Leadbetter, offers elite instruction on two stunning championship courses near the Costa Brava.",
    nearbyHotels: [
      { name: "Hotel Camiral", stars: 5, distanceKm: 0.1, features: ["Restaurant", "Spa", "Pool"], pool: true, wifi: true, pricePerNight: "\u20ac250" },
      { name: "Hotel Vichy Catal\u00e1n", stars: 4, distanceKm: 3, features: ["Spa", "Thermal Baths", "Restaurant"], pool: true, wifi: true, pricePerNight: "\u20ac130" },
      { name: "Hotel Balneari Prats", stars: 3, distanceKm: 4, features: ["Spa", "Restaurant", "Historic"], pool: true, wifi: true, pricePerNight: "\u20ac90" },
      { name: "Salles Hotel Aeroport Girona", stars: 3, distanceKm: 10, features: ["Restaurant", "Airport Location"], pool: false, wifi: true, pricePerNight: "\u20ac75" },
      { name: "B&B Hotel Girona", stars: 2, distanceKm: 15, features: ["Budget", "Parking"], pool: false, wifi: true, pricePerNight: "\u20ac55" }
    ],
    nearbyRestaurants: [
      { name: "Restaurant 1477", cuisine: "Mediterranean Fine Dining", distanceKm: 0.1, priceRange: "\u20ac\u20ac\u20ac\u20ac", rating: 4.8, vegetarian: true, outdoor: true },
      { name: "El Celler de Can Roca", cuisine: "Catalan Avant-garde", distanceKm: 15, priceRange: "\u20ac\u20ac\u20ac\u20ac", rating: 4.9, vegetarian: true, outdoor: false },
      { name: "Can Bolet", cuisine: "Catalan Traditional", distanceKm: 5, priceRange: "\u20ac\u20ac", rating: 4.5, vegetarian: true, outdoor: true },
      { name: "La Dida", cuisine: "Mediterranean", distanceKm: 3, priceRange: "\u20ac\u20ac", rating: 4.3, vegetarian: true, outdoor: true },
      { name: "Rocambolesc", cuisine: "Desserts", distanceKm: 15, priceRange: "\u20ac", rating: 4.6, vegetarian: true, outdoor: false }
    ],
    nearbyMedical: [
      { name: "Hospital Universitari de Girona", type: "Hospital", distanceKm: 15, phone: "+34 972 940 200", emergency: true },
      { name: "Centre de Salut Caldes", type: "Clinic", distanceKm: 2, phone: "+34 972 470 234", emergency: false },
      { name: "Clinica Dental Girona", type: "Dental", distanceKm: 15, phone: "+34 972 209 456", emergency: false }
    ],
    costOfLiving: { rent1Bed: "\u20ac700", meal: "\u20ac12", monthlyFood: "\u20ac300", transport: "\u20ac40", currency: "EUR", summary: "Moderate cost in Costa Brava region" },
    scholarships: { available: true, details: "Elite junior scholarships through the David Leadbetter Academy partnership." },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: "EU/EEA citizens visa-free", notes: "Schengen visa required for non-EU, 90 days in 180 days" },
    airportTransfers: [
      { mode: "Taxi", duration: "15min", cost: "\u20ac20-30", notes: "From Girona Airport" },
      { mode: "Bus", duration: "30min", cost: "\u20ac5", notes: "Bus to Caldes de Malavella" },
      { mode: "Private Transfer", duration: "15min", cost: "\u20ac40-50", notes: "Pre-booked transfer service" }
    ],
    nearbyTournaments: [
      { name: "Spanish Open", level: "European Tour", surface: "Parkland", month: "October", venue: "Various Spanish courses" },
      { name: "Catalunya Championship", level: "Challenge Tour", surface: "Parkland", month: "April", venue: "PGA Catalunya" }
    ],
    videoTour: null
  },
  {
    id: "ballybunion",
    name: "Ballybunion Golf Academy",
    country: "Ireland",
    countryFlag: "\ud83c\uddee\ud83c\uddea",
    city: "Ballybunion",
    lat: 52.5111,
    lng: -9.6742,
    website: "https://www.ballybuniongolfclub.com",
    contact: "+353 68 27146",
    individualLessons: true,
    boarding: false,
    level: "All levels",
    starred: false,
    airport: { name: "Shannon Airport", code: "SNN", distance: "90 km", driveTime: "1h 20min" },
    beach: { distance: "0.3 km", description: "Ballybunion Beach" },
    climate: "ballybunion",
    priceRange: { from: 1500, to: 5000, unit: "month", display: "\u20ac1,500\u2013\u20ac5,000/mo" },
    programs: [
      { name: "Links Golf School", price: "\u20ac1,500/mo", desc: "Learn the art of links golf" },
      { name: "Junior Development", price: "\u20ac1,800/mo", desc: "Youth coaching in links techniques" },
      { name: "Advanced Links", price: "\u20ac3,000/mo", desc: "Mastering wind play and links strategy" },
      { name: "Competition Prep", price: "\u20ac5,000/mo", desc: "Tournament preparation on championship links" }
    ],
    coaches: [
      { name: "Brian O\\u0027Callaghan", credential: "PGA Professional", background: "Club professional with 25 years on the Old Course", atpWta: false, bestRanking: null, rankingNote: null, languages: ["English", "Irish"], instagram: null },
      { name: "Ciaran Coyne", credential: "PGA Professional", background: "Links specialist with touring experience", atpWta: false, bestRanking: null, rankingNote: null, languages: ["English"], instagram: null }
    ],
    bestCoachRanking: null,
    facilities: "Old Course (Championship Links), Cashen Course, Driving Range, Practice Putting Green, Clubhouse, Pro Shop",
    courtSurfaces: ["Links"],
    notableAlumni: [],
    description: "Ballybunion Golf Club is one of Ireland\\u0027s most iconic links courses, perched on the cliffs of County Kerry. The academy specializes in links golf techniques, teaching players to master the Atlantic winds.",
    nearbyHotels: [
      { name: "The Golf Hotel Ballybunion", stars: 3, distanceKm: 0.5, features: ["Restaurant", "Bar", "Golf Views"], pool: false, wifi: true, pricePerNight: "\u20ac100" },
      { name: "Marine Links Hotel", stars: 3, distanceKm: 0.3, features: ["Restaurant", "Ocean Views"], pool: false, wifi: true, pricePerNight: "\u20ac90" },
      { name: "Teach de Broc", stars: 4, distanceKm: 0.2, features: ["Restaurant", "Views", "Modern"], pool: false, wifi: true, pricePerNight: "\u20ac120" },
      { name: "19th Lodge", stars: 3, distanceKm: 0.3, features: ["Bar", "Golf Course Adjacent"], pool: false, wifi: true, pricePerNight: "\u20ac80" },
      { name: "Listowel Arms Hotel", stars: 3, distanceKm: 15, features: ["Restaurant", "Historic", "Town Center"], pool: false, wifi: true, pricePerNight: "\u20ac85" }
    ],
    nearbyRestaurants: [
      { name: "Daroka", cuisine: "Modern Irish", distanceKm: 0.3, priceRange: "\u20ac\u20ac\u20ac", rating: 4.7, vegetarian: true, outdoor: false },
      { name: "McMunns Bar & Restaurant", cuisine: "Irish Pub", distanceKm: 0.3, priceRange: "\u20ac\u20ac", rating: 4.4, vegetarian: true, outdoor: false },
      { name: "Lizzy\\u0027s Little Kitchen", cuisine: "Cafe", distanceKm: 0.2, priceRange: "\u20ac", rating: 4.6, vegetarian: true, outdoor: false },
      { name: "The Horseshoe Bar", cuisine: "Pub Grub", distanceKm: 0.3, priceRange: "\u20ac", rating: 4.3, vegetarian: true, outdoor: false },
      { name: "Cliff House Restaurant", cuisine: "Seafood", distanceKm: 0.5, priceRange: "\u20ac\u20ac\u20ac", rating: 4.5, vegetarian: false, outdoor: true }
    ],
    nearbyMedical: [
      { name: "University Hospital Kerry", type: "Hospital", distanceKm: 60, phone: "+353 66 718 4000", emergency: true },
      { name: "Ballybunion Health Centre", type: "Clinic", distanceKm: 0.5, phone: "+353 68 27196", emergency: false },
      { name: "Listowel Dental", type: "Dental", distanceKm: 15, phone: "+353 68 21456", emergency: false }
    ],
    costOfLiving: { rent1Bed: "\u20ac600", meal: "\u20ac12", monthlyFood: "\u20ac300", transport: "\u20ac35", currency: "EUR", summary: "Affordable living in rural County Kerry" },
    scholarships: { available: false, details: "No formal scholarship program available." },
    visaInfo: { schengen: false, eu: true, visaFreeCountries: "EU/EEA citizens visa-free", notes: "Ireland is not part of Schengen; separate Irish visa may be required" },
    airportTransfers: [
      { mode: "Taxi", duration: "1h 20min", cost: "\u20ac100-120", notes: "From Shannon Airport" },
      { mode: "Bus", duration: "2h 30min", cost: "\u20ac15", notes: "Bus Eireann to Listowel then local bus" },
      { mode: "Car Rental", duration: "1h 20min", cost: "\u20ac40/day", notes: "Recommended for rural Kerry" }
    ],
    nearbyTournaments: [
      { name: "Irish Open", level: "European Tour", surface: "Links", month: "July", venue: "Various Irish courses" },
      { name: "North of Ireland Amateur", level: "Amateur", surface: "Links", month: "August", venue: "Royal Portrush" },
      { name: "South of Ireland Amateur", level: "Amateur", surface: "Links", month: "July", venue: "Lahinch" }
    ],
    videoTour: null
  },
  {
    id: "hamburger-gc",
    name: "Hamburger Golf Club Academy",
    country: "Germany",
    countryFlag: "\ud83c\udde9\ud83c\uddea",
    city: "Hamburg",
    lat: 53.5833,
    lng: 10.0667,
    website: "https://www.hamburger-golfclub.de",
    contact: "+49 40 812 177",
    individualLessons: true,
    boarding: false,
    level: "All levels",
    starred: false,
    airport: { name: "Hamburg Airport", code: "HAM", distance: "15 km", driveTime: "20min" },
    beach: { distance: "120 km", description: "Timmendorfer Strand" },
    climate: "hamburg",
    priceRange: { from: 1200, to: 4500, unit: "month", display: "\u20ac1,200\u2013\u20ac4,500/mo" },
    programs: [
      { name: "Beginner Course", price: "\u20ac1,200/mo", desc: "Start your golf journey with professional instruction" },
      { name: "Junior Program", price: "\u20ac1,500/mo", desc: "Youth development and competition preparation" },
      { name: "Performance Training", price: "\u20ac3,000/mo", desc: "Advanced coaching for competitive golfers" },
      { name: "Elite Pathway", price: "\u20ac4,500/mo", desc: "High-performance training for tour aspirants" }
    ],
    coaches: [
      { name: "Markus Weber", credential: "PGA Germany Professional", background: "Head professional at one of Germany\\u0027s oldest clubs", atpWta: false, bestRanking: null, rankingNote: null, languages: ["German", "English"], instagram: null },
      { name: "Katrin Schneider", credential: "PGA Professional", background: "Former German national team player", atpWta: false, bestRanking: null, rankingNote: null, languages: ["German", "English", "French"], instagram: null }
    ],
    bestCoachRanking: null,
    facilities: "18-hole Parkland Course, Driving Range, Putting Greens, Short Game Area, Clubhouse, Indoor Training, Video Analysis",
    courtSurfaces: ["Parkland"],
    notableAlumni: ["Bernhard Langer"],
    description: "Founded in 1906, the Hamburger Golf Club is one of Germany\\u0027s most prestigious golf clubs. The academy blends traditional values with modern coaching techniques on a beautiful parkland course.",
    nearbyHotels: [
      { name: "The Fontenay Hamburg", stars: 5, distanceKm: 8, features: ["Restaurant", "Spa", "Lakeside"], pool: true, wifi: true, pricePerNight: "\u20ac300" },
      { name: "Hotel Atlantic Kempinski", stars: 5, distanceKm: 10, features: ["Restaurant", "Spa", "Historic"], pool: true, wifi: true, pricePerNight: "\u20ac250" },
      { name: "Steigenberger Hotel Hamburg", stars: 4, distanceKm: 10, features: ["Restaurant", "Bar", "Central"], pool: false, wifi: true, pricePerNight: "\u20ac150" },
      { name: "Motel One Hamburg", stars: 3, distanceKm: 10, features: ["Modern", "Budget", "Central"], pool: false, wifi: true, pricePerNight: "\u20ac80" },
      { name: "B&B Hotel Hamburg Nord", stars: 2, distanceKm: 5, features: ["Budget", "Parking"], pool: false, wifi: true, pricePerNight: "\u20ac60" }
    ],
    nearbyRestaurants: [
      { name: "The Table Kevin Fehling", cuisine: "German Fine Dining", distanceKm: 10, priceRange: "\u20ac\u20ac\u20ac\u20ac", rating: 4.9, vegetarian: true, outdoor: false },
      { name: "Fischereihafen Restaurant", cuisine: "Seafood", distanceKm: 12, priceRange: "\u20ac\u20ac\u20ac", rating: 4.6, vegetarian: false, outdoor: true },
      { name: "Bullerei", cuisine: "Modern German", distanceKm: 8, priceRange: "\u20ac\u20ac\u20ac", rating: 4.5, vegetarian: true, outdoor: true },
      { name: "Clubhouse Restaurant", cuisine: "German Traditional", distanceKm: 0.1, priceRange: "\u20ac\u20ac", rating: 4.3, vegetarian: true, outdoor: true },
      { name: "Jellyfish", cuisine: "Asian Fusion", distanceKm: 10, priceRange: "\u20ac\u20ac\u20ac", rating: 4.4, vegetarian: true, outdoor: false }
    ],
    nearbyMedical: [
      { name: "Universit\u00e4tsklinikum Hamburg-Eppendorf", type: "Hospital", distanceKm: 8, phone: "+49 40 7410 0", emergency: true },
      { name: "Praxis Dr. Meyer", type: "Clinic", distanceKm: 3, phone: "+49 40 812 456", emergency: false },
      { name: "Zahnarzt Volksdorf", type: "Dental", distanceKm: 2, phone: "+49 40 603 789", emergency: false }
    ],
    costOfLiving: { rent1Bed: "\u20ac850", meal: "\u20ac12", monthlyFood: "\u20ac350", transport: "\u20ac90", currency: "EUR", summary: "Moderate to high cost of living in Hamburg" },
    scholarships: { available: true, details: "German Golf Association scholarships for talented juniors." },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: "EU/EEA citizens visa-free", notes: "Schengen visa required for non-EU, 90 days in 180 days" },
    airportTransfers: [
      { mode: "Taxi", duration: "20min", cost: "\u20ac30-40", notes: "From Hamburg Airport" },
      { mode: "S-Bahn/U-Bahn", duration: "40min", cost: "\u20ac3.50", notes: "Public transit to Volksdorf" },
      { mode: "Private Transfer", duration: "20min", cost: "\u20ac50-65", notes: "Pre-booked transfer" }
    ],
    nearbyTournaments: [
      { name: "Porsche European Open", level: "European Tour", surface: "Parkland", month: "June", venue: "Green Eagle Golf Courses" },
      { name: "German Amateur Championship", level: "Amateur", surface: "Various", month: "July", venue: "Various German courses" }
    ],
    videoTour: null
  },
  {
    id: "halmstad",
    name: "Halmstad Golf Academy",
    country: "Sweden",
    countryFlag: "\ud83c\uddf8\ud83c\uddea",
    city: "Halmstad",
    lat: 56.6745,
    lng: 12.8567,
    website: "https://www.halmstadgk.se",
    contact: "+46 35 17 49 30",
    individualLessons: true,
    boarding: false,
    level: "Pro",
    starred: false,
    airport: { name: "Halmstad Airport", code: "HAD", distance: "5 km", driveTime: "10min" },
    beach: { distance: "3 km", description: "Tylosan Beach" },
    climate: "halmstad",
    priceRange: { from: 1800, to: 5500, unit: "month", display: "\u20ac1,800\u2013\u20ac5,500/mo" },
    programs: [
      { name: "Youth Academy", price: "\u20ac1,800/mo", desc: "Junior golf development program" },
      { name: "Links Course Training", price: "\u20ac2,500/mo", desc: "Master links and heathland golf" },
      { name: "Performance Coaching", price: "\u20ac4,000/mo", desc: "Advanced competitive preparation" },
      { name: "Tour Aspirant Program", price: "\u20ac5,500/mo", desc: "Full-time professional track training" }
    ],
    coaches: [
      { name: "Anders Nilsson", credential: "PGA Sweden Professional", background: "Former Swedish Tour player with 15 years coaching", atpWta: false, bestRanking: null, rankingNote: null, languages: ["Swedish", "English", "Norwegian"], instagram: null },
      { name: "Lotta Svensson", credential: "PGA Professional", background: "Specialist in junior development and women\\u0027s golf", atpWta: false, bestRanking: null, rankingNote: null, languages: ["Swedish", "English"], instagram: null }
    ],
    bestCoachRanking: null,
    facilities: "Two 18-hole Courses, Driving Range, Short Game Area, Putting Greens, Indoor Studio, Clubhouse, Gym",
    courtSurfaces: ["Links", "Heathland"],
    notableAlumni: ["Henrik Stenson"],
    description: "Halmstad Golf Club hosted the 2007 Solheim Cup and is one of Sweden\\u0027s most distinguished golf venues. The academy trains golfers on both links and heathland courses along the Swedish west coast.",
    nearbyHotels: [
      { name: "Tylos\u0308sand Strandhotell", stars: 4, distanceKm: 3, features: ["Beach", "Spa", "Restaurant"], pool: true, wifi: true, pricePerNight: "\u20ac180" },
      { name: "Hotel Tylos\u0308and", stars: 4, distanceKm: 3, features: ["Conference", "Restaurant", "Pool"], pool: true, wifi: true, pricePerNight: "\u20ac160" },
      { name: "Best Western Plus Grand Hotel", stars: 4, distanceKm: 5, features: ["Restaurant", "Central", "Bar"], pool: false, wifi: true, pricePerNight: "\u20ac120" },
      { name: "Clarion Hotel Halmstad", stars: 3, distanceKm: 5, features: ["Restaurant", "Modern", "Central"], pool: false, wifi: true, pricePerNight: "\u20ac100" },
      { name: "Comfort Hotel Halmstad", stars: 3, distanceKm: 5, features: ["Budget", "Central", "Breakfast"], pool: false, wifi: true, pricePerNight: "\u20ac75" }
    ],
    nearbyRestaurants: [
      { name: "Pio Steakhouse", cuisine: "Steakhouse", distanceKm: 5, priceRange: "\u20ac\u20ac\u20ac", rating: 4.6, vegetarian: false, outdoor: true },
      { name: "Strandhotellet Restaurant", cuisine: "Swedish Fine Dining", distanceKm: 3, priceRange: "\u20ac\u20ac\u20ac\u20ac", rating: 4.7, vegetarian: true, outdoor: true },
      { name: "Tre Hj\u00e4rtan", cuisine: "Swedish Traditional", distanceKm: 5, priceRange: "\u20ac\u20ac", rating: 4.4, vegetarian: true, outdoor: false },
      { name: "Lilla Helfina", cuisine: "Mediterranean", distanceKm: 5, priceRange: "\u20ac\u20ac", rating: 4.5, vegetarian: true, outdoor: true },
      { name: "Clubhouse Bistro", cuisine: "Swedish", distanceKm: 0.1, priceRange: "\u20ac\u20ac", rating: 4.2, vegetarian: true, outdoor: true }
    ],
    nearbyMedical: [
      { name: "Hallands Sjukhus", type: "Hospital", distanceKm: 5, phone: "+46 35 13 10 00", emergency: true },
      { name: "V\u00e5rdcentralen Halmstad", type: "Clinic", distanceKm: 4, phone: "+46 35 13 20 00", emergency: false },
      { name: "Tandl\u00e4kare Halmstad", type: "Dental", distanceKm: 5, phone: "+46 35 12 34 56", emergency: false }
    ],
    costOfLiving: { rent1Bed: "\u20ac700", meal: "\u20ac14", monthlyFood: "\u20ac350", transport: "\u20ac60", currency: "SEK", summary: "Moderate Scandinavian cost of living" },
    scholarships: { available: true, details: "Swedish Golf Federation scholarships for talented juniors." },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: "EU/EEA citizens visa-free", notes: "Schengen visa required for non-EU, 90 days in 180 days" },
    airportTransfers: [
      { mode: "Taxi", duration: "10min", cost: "\u20ac20-25", notes: "From Halmstad Airport" },
      { mode: "Bus", duration: "20min", cost: "\u20ac4", notes: "Local bus from airport" },
      { mode: "Train", duration: "3h", cost: "\u20ac40", notes: "Train from Gothenburg or Copenhagen" }
    ],
    nearbyTournaments: [
      { name: "Scandinavian Mixed", level: "European Tour", surface: "Links", month: "June", venue: "Various Scandinavian courses" },
      { name: "Swedish Amateur Championship", level: "Amateur", surface: "Various", month: "July", venue: "Various Swedish courses" }
    ],
    videoTour: null
  },
  {
    id: "golf-de-seignosse",
    name: "Golf de Seignosse Academy",
    country: "France",
    countryFlag: "\ud83c\uddeb\ud83c\uddf7",
    city: "Seignosse",
    lat: 43.7000,
    lng: -1.3833,
    website: "https://www.golfdeseignosse.com",
    contact: "+33 5 58 41 68 30",
    individualLessons: true,
    boarding: false,
    level: "All levels",
    starred: false,
    airport: { name: "Biarritz Airport", code: "BIQ", distance: "30 km", driveTime: "35min" },
    beach: { distance: "3 km", description: "Seignosse Beach" },
    climate: "seignosse",
    priceRange: { from: 1200, to: 4000, unit: "month", display: "\u20ac1,200\u2013\u20ac4,000/mo" },
    programs: [
      { name: "Discovery Course", price: "\u20ac1,200/mo", desc: "Introduction to golf in a beautiful pine forest setting" },
      { name: "Junior Camp", price: "\u20ac1,500/mo", desc: "Summer and holiday junior training camps" },
      { name: "Improvement Program", price: "\u20ac2,500/mo", desc: "Structured coaching to lower your handicap" },
      { name: "Competition Track", price: "\u20ac4,000/mo", desc: "Advanced tournament preparation" }
    ],
    coaches: [
      { name: "Jean-Marc Loustau", credential: "PGA France Professional", background: "Head pro with deep knowledge of the pine forest course", atpWta: false, bestRanking: null, rankingNote: null, languages: ["French", "English", "Spanish"], instagram: null },
      { name: "Isabelle Ferrer", credential: "PGA Professional", background: "Specialist in beginner and intermediate coaching", atpWta: false, bestRanking: null, rankingNote: null, languages: ["French", "English"], instagram: null }
    ],
    bestCoachRanking: null,
    facilities: "18-hole Championship Course, Driving Range, Putting Green, Short Game Area, Clubhouse, Pro Shop",
    courtSurfaces: ["Parkland"],
    notableAlumni: [],
    description: "Golf de Seignosse is a Robert von Hagge-designed course set among pine forests near the Atlantic coast in southwest France. The academy offers coaching in a unique natural environment with ocean proximity.",
    nearbyHotels: [
      { name: "Les Villas Seignosse", stars: 4, distanceKm: 1, features: ["Pool", "Spa", "Modern"], pool: true, wifi: true, pricePerNight: "\u20ac150" },
      { name: "Hotel Blue Cargo", stars: 3, distanceKm: 3, features: ["Beach", "Restaurant", "Surf"], pool: false, wifi: true, pricePerNight: "\u20ac100" },
      { name: "Hotel Mercedes", stars: 3, distanceKm: 10, features: ["Restaurant", "Central Hossegor"], pool: false, wifi: true, pricePerNight: "\u20ac90" },
      { name: "Premiere Classe Hossegor", stars: 2, distanceKm: 8, features: ["Budget", "Parking"], pool: false, wifi: true, pricePerNight: "\u20ac55" },
      { name: "Camping Le Penon", stars: 3, distanceKm: 3, features: ["Beach", "Pool", "Nature"], pool: true, wifi: true, pricePerNight: "\u20ac35" }
    ],
    nearbyRestaurants: [
      { name: "Les Hortensias du Lac", cuisine: "French Fine Dining", distanceKm: 8, priceRange: "\u20ac\u20ac\u20ac\u20ac", rating: 4.8, vegetarian: true, outdoor: true },
      { name: "Restaurant du Golf", cuisine: "French Brasserie", distanceKm: 0.1, priceRange: "\u20ac\u20ac", rating: 4.3, vegetarian: true, outdoor: true },
      { name: "Jean des Sables", cuisine: "Seafood", distanceKm: 3, priceRange: "\u20ac\u20ac\u20ac", rating: 4.6, vegetarian: false, outdoor: true },
      { name: "Le Surfing", cuisine: "Beach Bar", distanceKm: 3, priceRange: "\u20ac\u20ac", rating: 4.2, vegetarian: true, outdoor: true },
      { name: "Chez Manu", cuisine: "Basque", distanceKm: 10, priceRange: "\u20ac\u20ac", rating: 4.5, vegetarian: true, outdoor: true }
    ],
    nearbyMedical: [
      { name: "Centre Hospitalier Dax", type: "Hospital", distanceKm: 30, phone: "+33 5 58 91 48 48", emergency: true },
      { name: "Cabinet M\u00e9dical Seignosse", type: "Clinic", distanceKm: 2, phone: "+33 5 58 41 12 34", emergency: false },
      { name: "Dentiste Hossegor", type: "Dental", distanceKm: 8, phone: "+33 5 58 43 56 78", emergency: false }
    ],
    costOfLiving: { rent1Bed: "\u20ac650", meal: "\u20ac13", monthlyFood: "\u20ac320", transport: "\u20ac35", currency: "EUR", summary: "Moderate cost in southwest France surf country" },
    scholarships: { available: false, details: "No formal scholarship program available." },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: "EU/EEA citizens visa-free", notes: "Schengen visa required for non-EU, 90 days in 180 days" },
    airportTransfers: [
      { mode: "Taxi", duration: "35min", cost: "\u20ac45-55", notes: "From Biarritz Airport" },
      { mode: "Bus", duration: "1h", cost: "\u20ac8", notes: "Regional bus service" },
      { mode: "Car Rental", duration: "35min", cost: "\u20ac35/day", notes: "Recommended for exploring the coast" }
    ],
    nearbyTournaments: [
      { name: "Biarritz Cup", level: "Amateur", surface: "Parkland", month: "August", venue: "Golf de Biarritz Le Phare" },
      { name: "Open de France", level: "European Tour", surface: "Parkland", month: "October", venue: "Le Golf National" }
    ],
    videoTour: null
  },
  {
    id: "troia-golf",
    name: "Troia Golf Academy",
    country: "Portugal",
    countryFlag: "\ud83c\uddf5\ud83c\uddf9",
    city: "Troia",
    lat: 38.4833,
    lng: -8.8833,
    website: "https://www.troiaresort.pt",
    contact: "+351 265 494 024",
    individualLessons: true,
    boarding: true,
    level: "Pro",
    starred: false,
    airport: { name: "Lisbon Humberto Delgado Airport", code: "LIS", distance: "130 km", driveTime: "1h 30min" },
    beach: { distance: "0.5 km", description: "Troia Beach" },
    climate: "troia",
    priceRange: { from: 1500, to: 5000, unit: "month", display: "\u20ac1,500\u2013\u20ac5,000/mo" },
    programs: [
      { name: "Beginner Program", price: "\u20ac1,500/mo", desc: "Learn golf basics in a stunning seaside setting" },
      { name: "Junior Academy", price: "\u20ac2,000/mo", desc: "Year-round junior development" },
      { name: "Performance Training", price: "\u20ac3,500/mo", desc: "Advanced coaching and course management" },
      { name: "Pro Development", price: "\u20ac5,000/mo", desc: "Professional tour aspiration program" }
    ],
    coaches: [
      { name: "Ricardo Santos", credential: "PGA Professional", background: "Former European Challenge Tour player", atpWta: false, bestRanking: null, rankingNote: null, languages: ["Portuguese", "English", "Spanish"], instagram: null },
      { name: "Ana Mendes", credential: "PGA Professional", background: "Portuguese Ladies champion, junior coaching specialist", atpWta: false, bestRanking: null, rankingNote: null, languages: ["Portuguese", "English"], instagram: null }
    ],
    bestCoachRanking: null,
    facilities: "18-hole Robert Trent Jones Jr. Course, Driving Range, Putting Green, Short Game Area, Pro Shop, Beach Club, Gym",
    courtSurfaces: ["Links", "Resort"],
    notableAlumni: [],
    description: "Troia Golf is a stunning Robert Trent Jones Jr.-designed course on the Troia Peninsula, surrounded by pristine beaches and the Sado Estuary. The academy offers training with dramatic ocean views.",
    nearbyHotels: [
      { name: "Aqualuz Troia Mar & Rio", stars: 4, distanceKm: 1, features: ["Beach", "Pool", "Spa"], pool: true, wifi: true, pricePerNight: "\u20ac150" },
      { name: "Troia Design Hotel", stars: 5, distanceKm: 1, features: ["Design", "Beach", "Restaurant"], pool: true, wifi: true, pricePerNight: "\u20ac200" },
      { name: "The Residences at Troia", stars: 4, distanceKm: 0.5, features: ["Apartments", "Pool", "Golf Views"], pool: true, wifi: true, pricePerNight: "\u20ac130" },
      { name: "Hotel Arribas Setubal", stars: 3, distanceKm: 30, features: ["Restaurant", "City", "Budget"], pool: false, wifi: true, pricePerNight: "\u20ac70" },
      { name: "Casa da Comporta", stars: 4, distanceKm: 25, features: ["Boutique", "Beach", "Restaurant"], pool: true, wifi: true, pricePerNight: "\u20ac180" }
    ],
    nearbyRestaurants: [
      { name: "Comporta Cafe", cuisine: "Portuguese Coastal", distanceKm: 20, priceRange: "\u20ac\u20ac", rating: 4.6, vegetarian: true, outdoor: true },
      { name: "Troia Golf Clubhouse", cuisine: "Portuguese", distanceKm: 0.1, priceRange: "\u20ac\u20ac", rating: 4.3, vegetarian: true, outdoor: true },
      { name: "Cavalaricias", cuisine: "Seafood", distanceKm: 25, priceRange: "\u20ac\u20ac\u20ac", rating: 4.7, vegetarian: false, outdoor: true },
      { name: "Borda d\\u0027\u00c1gua", cuisine: "Portuguese", distanceKm: 2, priceRange: "\u20ac\u20ac", rating: 4.4, vegetarian: true, outdoor: true },
      { name: "Restaurante Dona Bia", cuisine: "Fish & Seafood", distanceKm: 30, priceRange: "\u20ac\u20ac", rating: 4.5, vegetarian: false, outdoor: true }
    ],
    nearbyMedical: [
      { name: "Hospital de S\u00e3o Bernardo", type: "Hospital", distanceKm: 30, phone: "+351 265 549 000", emergency: true },
      { name: "Centro de Sa\u00fade Troia", type: "Clinic", distanceKm: 2, phone: "+351 265 494 100", emergency: false },
      { name: "Clinica Dent\u00e1ria Set\u00fabal", type: "Dental", distanceKm: 30, phone: "+351 265 239 456", emergency: false }
    ],
    costOfLiving: { rent1Bed: "\u20ac600", meal: "\u20ac10", monthlyFood: "\u20ac280", transport: "\u20ac35", currency: "EUR", summary: "Affordable living on the Troia Peninsula" },
    scholarships: { available: false, details: "No formal scholarship program currently available." },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: "EU/EEA citizens visa-free", notes: "Schengen visa required for non-EU, 90 days in 180 days" },
    airportTransfers: [
      { mode: "Taxi", duration: "1h 30min", cost: "\u20ac100-130", notes: "From Lisbon Airport" },
      { mode: "Bus + Ferry", duration: "2h", cost: "\u20ac15", notes: "Bus to Setubal, ferry to Troia" },
      { mode: "Private Transfer", duration: "1h 30min", cost: "\u20ac140-170", notes: "Luxury transfer from Lisbon" }
    ],
    nearbyTournaments: [
      { name: "Portugal Masters", level: "European Tour", surface: "Parkland", month: "October", venue: "Dom Pedro Victoria Golf Course" },
      { name: "Portuguese Amateur Championship", level: "Amateur", surface: "Various", month: "May", venue: "Various Portuguese courses" }
    ],
    videoTour: null
  },
  {
    id: "carnoustie",
    name: "Carnoustie Golf Links Academy",
    country: "Scotland",
    countryFlag: "\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f",
    city: "Carnoustie",
    lat: 56.5013,
    lng: -2.7147,
    website: "https://www.carnoustiegolflinks.com",
    contact: "+44 1241 802270",
    individualLessons: true,
    boarding: false,
    level: "Elite",
    starred: true,
    airport: { name: "Dundee Airport", code: "DND", distance: "18 km", driveTime: "20min" },
    beach: { distance: "0.3 km", description: "Carnoustie Beach" },
    climate: "carnoustie",
    priceRange: { from: 2000, to: 7000, unit: "month", display: "\u20ac2,000\u2013\u20ac7,000/mo" },
    programs: [
      { name: "Links Fundamentals", price: "\u20ac2,000/mo", desc: "Master the basics of links golf" },
      { name: "Junior Development", price: "\u20ac2,500/mo", desc: "Youth program on championship links" },
      { name: "Championship Preparation", price: "\u20ac5,000/mo", desc: "Advanced training on Open Championship venue" },
      { name: "Elite Links Training", price: "\u20ac7,000/mo", desc: "Full immersion in elite links golf" }
    ],
    coaches: [
      { name: "Colin Sinclair", credential: "PGA Professional", background: "Head professional at Carnoustie with 20 years experience", atpWta: false, bestRanking: null, rankingNote: null, languages: ["English"], instagram: null },
      { name: "Keir McNicoll", credential: "PGA Professional", background: "Former Scottish amateur champion, links specialist", atpWta: false, bestRanking: null, rankingNote: null, languages: ["English"], instagram: null }
    ],
    bestCoachRanking: null,
    facilities: "Championship Links Course, Burnside Course, Buddon Links, Driving Range, Practice Area, Pro Shop, Clubhouse",
    courtSurfaces: ["Links"],
    notableAlumni: ["Paul Lawrie"],
    description: "Carnoustie Golf Links is one of the toughest Open Championship venues in the world. The academy provides elite links coaching on three courses, with a focus on developing resilience and skill in challenging conditions.",
    nearbyHotels: [
      { name: "Carnoustie Golf Hotel", stars: 4, distanceKm: 0.3, features: ["Restaurant", "Spa", "Pool", "Golf Views"], pool: true, wifi: true, pricePerNight: "\u20ac180" },
      { name: "Dalhousie House", stars: 3, distanceKm: 0.5, features: ["B&B", "Golf Views", "Traditional"], pool: false, wifi: true, pricePerNight: "\u20ac90" },
      { name: "Station Hotel", stars: 3, distanceKm: 0.4, features: ["Restaurant", "Bar", "Central"], pool: false, wifi: true, pricePerNight: "\u20ac80" },
      { name: "Kinloch Arms Hotel", stars: 3, distanceKm: 0.5, features: ["Restaurant", "Bar", "Traditional"], pool: false, wifi: true, pricePerNight: "\u20ac75" },
      { name: "Braemar Guest House", stars: 3, distanceKm: 0.6, features: ["B&B", "Quiet", "Parking"], pool: false, wifi: true, pricePerNight: "\u20ac65" }
    ],
    nearbyRestaurants: [
      { name: "The Clubhouse Bar & Grill", cuisine: "Scottish Modern", distanceKm: 0.3, priceRange: "\u20ac\u20ac\u20ac", rating: 4.5, vegetarian: true, outdoor: true },
      { name: "Station Hotel Restaurant", cuisine: "Scottish Traditional", distanceKm: 0.4, priceRange: "\u20ac\u20ac", rating: 4.3, vegetarian: true, outdoor: false },
      { name: "The 19th Hole", cuisine: "Pub Food", distanceKm: 0.3, priceRange: "\u20ac", rating: 4.2, vegetarian: true, outdoor: false },
      { name: "Bravo Restaurant", cuisine: "Italian", distanceKm: 0.5, priceRange: "\u20ac\u20ac", rating: 4.4, vegetarian: true, outdoor: false },
      { name: "The Corner Grill", cuisine: "Grill", distanceKm: 0.4, priceRange: "\u20ac\u20ac", rating: 4.1, vegetarian: false, outdoor: false }
    ],
    nearbyMedical: [
      { name: "Ninewells Hospital", type: "Hospital", distanceKm: 18, phone: "+44 1382 660111", emergency: true },
      { name: "Carnoustie Medical Group", type: "Clinic", distanceKm: 0.5, phone: "+44 1241 854646", emergency: false },
      { name: "Carnoustie Dental Practice", type: "Dental", distanceKm: 0.5, phone: "+44 1241 852344", emergency: false }
    ],
    costOfLiving: { rent1Bed: "\u20ac650", meal: "\u20ac13", monthlyFood: "\u20ac350", transport: "\u20ac55", currency: "GBP", summary: "Moderate cost of living in coastal Angus" },
    scholarships: { available: true, details: "Carnoustie Junior Golf Trust scholarships for promising local and national juniors." },
    visaInfo: { schengen: false, eu: false, visaFreeCountries: "EU/EEA citizens visa-free for up to 6 months", notes: "UK visa rules apply post-Brexit" },
    airportTransfers: [
      { mode: "Taxi", duration: "20min", cost: "\u20ac30-40", notes: "From Dundee Airport" },
      { mode: "Train", duration: "30min", cost: "\u20ac8", notes: "Train from Dundee station to Carnoustie" },
      { mode: "Private Transfer", duration: "20min", cost: "\u20ac50-60", notes: "Pre-booked transfer from Edinburgh or Dundee" }
    ],
    nearbyTournaments: [
      { name: "The Open Championship", level: "Major", surface: "Links", month: "July", venue: "Carnoustie Championship Course" },
      { name: "Scottish Amateur Championship", level: "Amateur", surface: "Links", month: "June", venue: "Various Scottish courses" },
      { name: "Alfred Dunhill Links Championship", level: "European Tour", surface: "Links", month: "October", venue: "Carnoustie, St Andrews, Kingsbarns" }
    ],
    videoTour: null
  }
];

const COUNTRIES = [...new Set(ACADEMIES.map(a => a.country))];

const CLIMATE_DATA = {
  "st-andrews": {
    city: "St Andrews", country: "Scotland",
    months: [
      { month: "Jan", temp: 4, rain: 63, rainyDays: 15, wind: 18 },
      { month: "Feb", temp: 4, rain: 45, rainyDays: 12, wind: 17 },
      { month: "Mar", temp: 6, rain: 50, rainyDays: 13, wind: 16 },
      { month: "Apr", temp: 8, rain: 42, rainyDays: 11, wind: 14 },
      { month: "May", temp: 11, rain: 48, rainyDays: 11, wind: 13 },
      { month: "Jun", temp: 14, rain: 52, rainyDays: 11, wind: 12 },
      { month: "Jul", temp: 16, rain: 60, rainyDays: 12, wind: 11 },
      { month: "Aug", temp: 16, rain: 65, rainyDays: 12, wind: 12 },
      { month: "Sep", temp: 14, rain: 55, rainyDays: 12, wind: 13 },
      { month: "Oct", temp: 10, rain: 70, rainyDays: 14, wind: 15 },
      { month: "Nov", temp: 7, rain: 65, rainyDays: 14, wind: 17 },
      { month: "Dec", temp: 5, rain: 60, rainyDays: 15, wind: 18 }
    ]
  },
  sotogrande: {
    city: "Sotogrande", country: "Spain",
    months: [
      { month: "Jan", temp: 12, rain: 75, rainyDays: 8, wind: 12 },
      { month: "Feb", temp: 13, rain: 60, rainyDays: 7, wind: 12 },
      { month: "Mar", temp: 15, rain: 50, rainyDays: 6, wind: 11 },
      { month: "Apr", temp: 17, rain: 45, rainyDays: 6, wind: 10 },
      { month: "May", temp: 20, rain: 25, rainyDays: 4, wind: 9 },
      { month: "Jun", temp: 24, rain: 5, rainyDays: 1, wind: 9 },
      { month: "Jul", temp: 27, rain: 1, rainyDays: 0, wind: 10 },
      { month: "Aug", temp: 28, rain: 3, rainyDays: 0, wind: 9 },
      { month: "Sep", temp: 25, rain: 20, rainyDays: 3, wind: 9 },
      { month: "Oct", temp: 20, rain: 60, rainyDays: 6, wind: 10 },
      { month: "Nov", temp: 16, rain: 80, rainyDays: 8, wind: 11 },
      { month: "Dec", temp: 13, rain: 85, rainyDays: 9, wind: 12 }
    ]
  },
  sintra: {
    city: "Sintra", country: "Portugal",
    months: [
      { month: "Jan", temp: 11, rain: 100, rainyDays: 12, wind: 13 },
      { month: "Feb", temp: 12, rain: 90, rainyDays: 10, wind: 13 },
      { month: "Mar", temp: 14, rain: 65, rainyDays: 9, wind: 12 },
      { month: "Apr", temp: 15, rain: 60, rainyDays: 9, wind: 11 },
      { month: "May", temp: 17, rain: 40, rainyDays: 6, wind: 10 },
      { month: "Jun", temp: 20, rain: 15, rainyDays: 3, wind: 10 },
      { month: "Jul", temp: 22, rain: 5, rainyDays: 1, wind: 11 },
      { month: "Aug", temp: 23, rain: 5, rainyDays: 1, wind: 10 },
      { month: "Sep", temp: 21, rain: 25, rainyDays: 4, wind: 10 },
      { month: "Oct", temp: 18, rain: 80, rainyDays: 9, wind: 11 },
      { month: "Nov", temp: 14, rain: 100, rainyDays: 11, wind: 12 },
      { month: "Dec", temp: 12, rain: 105, rainyDays: 12, wind: 13 }
    ]
  },
  "virginia-water": {
    city: "Virginia Water", country: "England",
    months: [
      { month: "Jan", temp: 5, rain: 68, rainyDays: 14, wind: 13 },
      { month: "Feb", temp: 5, rain: 48, rainyDays: 11, wind: 13 },
      { month: "Mar", temp: 8, rain: 50, rainyDays: 12, wind: 12 },
      { month: "Apr", temp: 10, rain: 48, rainyDays: 10, wind: 11 },
      { month: "May", temp: 14, rain: 50, rainyDays: 10, wind: 10 },
      { month: "Jun", temp: 17, rain: 50, rainyDays: 10, wind: 9 },
      { month: "Jul", temp: 19, rain: 45, rainyDays: 9, wind: 9 },
      { month: "Aug", temp: 19, rain: 55, rainyDays: 10, wind: 9 },
      { month: "Sep", temp: 16, rain: 52, rainyDays: 10, wind: 10 },
      { month: "Oct", temp: 12, rain: 70, rainyDays: 12, wind: 12 },
      { month: "Nov", temp: 8, rain: 70, rainyDays: 13, wind: 13 },
      { month: "Dec", temp: 5, rain: 65, rainyDays: 14, wind: 13 }
    ]
  },
  straffan: {
    city: "Straffan", country: "Ireland",
    months: [
      { month: "Jan", temp: 5, rain: 70, rainyDays: 16, wind: 15 },
      { month: "Feb", temp: 5, rain: 55, rainyDays: 13, wind: 14 },
      { month: "Mar", temp: 7, rain: 55, rainyDays: 13, wind: 14 },
      { month: "Apr", temp: 9, rain: 50, rainyDays: 12, wind: 12 },
      { month: "May", temp: 12, rain: 55, rainyDays: 12, wind: 11 },
      { month: "Jun", temp: 14, rain: 55, rainyDays: 11, wind: 10 },
      { month: "Jul", temp: 16, rain: 55, rainyDays: 12, wind: 10 },
      { month: "Aug", temp: 16, rain: 65, rainyDays: 13, wind: 10 },
      { month: "Sep", temp: 14, rain: 60, rainyDays: 12, wind: 11 },
      { month: "Oct", temp: 10, rain: 75, rainyDays: 14, wind: 13 },
      { month: "Nov", temp: 7, rain: 75, rainyDays: 15, wind: 14 },
      { month: "Dec", temp: 5, rain: 75, rainyDays: 16, wind: 15 }
    ]
  },
  evian: {
    city: "Evian-les-Bains", country: "France",
    months: [
      { month: "Jan", temp: 1, rain: 80, rainyDays: 13, wind: 8 },
      { month: "Feb", temp: 2, rain: 70, rainyDays: 11, wind: 9 },
      { month: "Mar", temp: 7, rain: 70, rainyDays: 12, wind: 9 },
      { month: "Apr", temp: 10, rain: 75, rainyDays: 13, wind: 8 },
      { month: "May", temp: 15, rain: 90, rainyDays: 14, wind: 7 },
      { month: "Jun", temp: 18, rain: 95, rainyDays: 13, wind: 7 },
      { month: "Jul", temp: 21, rain: 80, rainyDays: 11, wind: 7 },
      { month: "Aug", temp: 20, rain: 90, rainyDays: 12, wind: 7 },
      { month: "Sep", temp: 16, rain: 85, rainyDays: 11, wind: 7 },
      { month: "Oct", temp: 11, rain: 90, rainyDays: 12, wind: 8 },
      { month: "Nov", temp: 6, rain: 85, rainyDays: 13, wind: 8 },
      { month: "Dec", temp: 2, rain: 85, rainyDays: 14, wind: 8 }
    ]
  },
  cologne: {
    city: "Cologne", country: "Germany",
    months: [
      { month: "Jan", temp: 3, rain: 65, rainyDays: 14, wind: 12 },
      { month: "Feb", temp: 4, rain: 50, rainyDays: 11, wind: 12 },
      { month: "Mar", temp: 7, rain: 60, rainyDays: 13, wind: 12 },
      { month: "Apr", temp: 11, rain: 50, rainyDays: 11, wind: 11 },
      { month: "May", temp: 15, rain: 65, rainyDays: 12, wind: 10 },
      { month: "Jun", temp: 18, rain: 75, rainyDays: 12, wind: 9 },
      { month: "Jul", temp: 20, rain: 80, rainyDays: 12, wind: 9 },
      { month: "Aug", temp: 20, rain: 70, rainyDays: 11, wind: 9 },
      { month: "Sep", temp: 16, rain: 60, rainyDays: 10, wind: 10 },
      { month: "Oct", temp: 12, rain: 60, rainyDays: 11, wind: 11 },
      { month: "Nov", temp: 7, rain: 65, rainyDays: 13, wind: 12 },
      { month: "Dec", temp: 4, rain: 70, rainyDays: 14, wind: 12 }
    ]
  },
  stockholm: {
    city: "Stockholm", country: "Sweden",
    months: [
      { month: "Jan", temp: -1, rain: 40, rainyDays: 12, wind: 12 },
      { month: "Feb", temp: -1, rain: 30, rainyDays: 10, wind: 12 },
      { month: "Mar", temp: 2, rain: 30, rainyDays: 9, wind: 11 },
      { month: "Apr", temp: 7, rain: 30, rainyDays: 8, wind: 11 },
      { month: "May", temp: 12, rain: 35, rainyDays: 8, wind: 10 },
      { month: "Jun", temp: 17, rain: 45, rainyDays: 9, wind: 9 },
      { month: "Jul", temp: 20, rain: 60, rainyDays: 10, wind: 9 },
      { month: "Aug", temp: 19, rain: 65, rainyDays: 10, wind: 9 },
      { month: "Sep", temp: 14, rain: 55, rainyDays: 10, wind: 10 },
      { month: "Oct", temp: 9, rain: 50, rainyDays: 11, wind: 11 },
      { month: "Nov", temp: 4, rain: 50, rainyDays: 12, wind: 12 },
      { month: "Dec", temp: 1, rain: 45, rainyDays: 13, wind: 12 }
    ]
  },
  copenhagen: {
    city: "Copenhagen", country: "Denmark",
    months: [
      { month: "Jan", temp: 1, rain: 50, rainyDays: 14, wind: 15 },
      { month: "Feb", temp: 1, rain: 35, rainyDays: 11, wind: 14 },
      { month: "Mar", temp: 3, rain: 40, rainyDays: 11, wind: 14 },
      { month: "Apr", temp: 7, rain: 35, rainyDays: 10, wind: 13 },
      { month: "May", temp: 12, rain: 40, rainyDays: 10, wind: 12 },
      { month: "Jun", temp: 16, rain: 50, rainyDays: 10, wind: 11 },
      { month: "Jul", temp: 18, rain: 60, rainyDays: 11, wind: 11 },
      { month: "Aug", temp: 18, rain: 65, rainyDays: 11, wind: 11 },
      { month: "Sep", temp: 14, rain: 55, rainyDays: 11, wind: 12 },
      { month: "Oct", temp: 10, rain: 55, rainyDays: 12, wind: 14 },
      { month: "Nov", temp: 6, rain: 55, rainyDays: 14, wind: 14 },
      { month: "Dec", temp: 3, rain: 55, rainyDays: 14, wind: 15 }
    ]
  },
  zandvoort: {
    city: "Zandvoort", country: "Netherlands",
    months: [
      { month: "Jan", temp: 4, rain: 70, rainyDays: 15, wind: 18 },
      { month: "Feb", temp: 4, rain: 50, rainyDays: 12, wind: 17 },
      { month: "Mar", temp: 6, rain: 55, rainyDays: 13, wind: 16 },
      { month: "Apr", temp: 9, rain: 45, rainyDays: 11, wind: 14 },
      { month: "May", temp: 13, rain: 50, rainyDays: 11, wind: 13 },
      { month: "Jun", temp: 16, rain: 55, rainyDays: 11, wind: 12 },
      { month: "Jul", temp: 18, rain: 65, rainyDays: 11, wind: 12 },
      { month: "Aug", temp: 18, rain: 75, rainyDays: 12, wind: 12 },
      { month: "Sep", temp: 16, rain: 70, rainyDays: 12, wind: 13 },
      { month: "Oct", temp: 12, rain: 80, rainyDays: 14, wind: 15 },
      { month: "Nov", temp: 8, rain: 80, rainyDays: 15, wind: 17 },
      { month: "Dec", temp: 5, rain: 75, rainyDays: 15, wind: 18 }
    ]
  },
  knokke: {
    city: "Knokke-Heist", country: "Belgium",
    months: [
      { month: "Jan", temp: 4, rain: 60, rainyDays: 14, wind: 17 },
      { month: "Feb", temp: 4, rain: 45, rainyDays: 12, wind: 16 },
      { month: "Mar", temp: 7, rain: 50, rainyDays: 12, wind: 15 },
      { month: "Apr", temp: 10, rain: 45, rainyDays: 10, wind: 13 },
      { month: "May", temp: 13, rain: 50, rainyDays: 11, wind: 12 },
      { month: "Jun", temp: 16, rain: 55, rainyDays: 10, wind: 11 },
      { month: "Jul", temp: 18, rain: 65, rainyDays: 11, wind: 11 },
      { month: "Aug", temp: 18, rain: 70, rainyDays: 11, wind: 11 },
      { month: "Sep", temp: 16, rain: 65, rainyDays: 11, wind: 13 },
      { month: "Oct", temp: 12, rain: 70, rainyDays: 13, wind: 15 },
      { month: "Nov", temp: 8, rain: 70, rainyDays: 14, wind: 16 },
      { month: "Dec", temp: 5, rain: 65, rainyDays: 15, wind: 17 }
    ]
  },
  hertfordshire: {
    city: "Hertfordshire", country: "England",
    months: [
      { month: "Jan", temp: 5, rain: 55, rainyDays: 13, wind: 12 },
      { month: "Feb", temp: 5, rain: 40, rainyDays: 10, wind: 12 },
      { month: "Mar", temp: 8, rain: 45, rainyDays: 11, wind: 11 },
      { month: "Apr", temp: 10, rain: 45, rainyDays: 10, wind: 10 },
      { month: "May", temp: 14, rain: 50, rainyDays: 10, wind: 9 },
      { month: "Jun", temp: 17, rain: 50, rainyDays: 9, wind: 9 },
      { month: "Jul", temp: 19, rain: 45, rainyDays: 9, wind: 8 },
      { month: "Aug", temp: 19, rain: 55, rainyDays: 9, wind: 8 },
      { month: "Sep", temp: 16, rain: 50, rainyDays: 9, wind: 9 },
      { month: "Oct", temp: 12, rain: 65, rainyDays: 12, wind: 11 },
      { month: "Nov", temp: 8, rain: 60, rainyDays: 13, wind: 12 },
      { month: "Dec", temp: 5, rain: 55, rainyDays: 13, wind: 12 }
    ]
  },
  algarve: {
    city: "Algarve", country: "Portugal",
    months: [
      { month: "Jan", temp: 12, rain: 60, rainyDays: 8, wind: 11 },
      { month: "Feb", temp: 13, rain: 50, rainyDays: 7, wind: 11 },
      { month: "Mar", temp: 15, rain: 35, rainyDays: 5, wind: 10 },
      { month: "Apr", temp: 17, rain: 35, rainyDays: 5, wind: 10 },
      { month: "May", temp: 20, rain: 15, rainyDays: 3, wind: 9 },
      { month: "Jun", temp: 23, rain: 5, rainyDays: 1, wind: 9 },
      { month: "Jul", temp: 26, rain: 1, rainyDays: 0, wind: 10 },
      { month: "Aug", temp: 26, rain: 2, rainyDays: 0, wind: 9 },
      { month: "Sep", temp: 23, rain: 15, rainyDays: 2, wind: 9 },
      { month: "Oct", temp: 19, rain: 50, rainyDays: 6, wind: 10 },
      { month: "Nov", temp: 15, rain: 70, rainyDays: 8, wind: 11 },
      { month: "Dec", temp: 13, rain: 80, rainyDays: 9, wind: 11 }
    ]
  },
  provence: {
    city: "Tourrettes", country: "France",
    months: [
      { month: "Jan", temp: 7, rain: 70, rainyDays: 7, wind: 9 },
      { month: "Feb", temp: 8, rain: 55, rainyDays: 6, wind: 9 },
      { month: "Mar", temp: 10, rain: 50, rainyDays: 6, wind: 9 },
      { month: "Apr", temp: 13, rain: 60, rainyDays: 7, wind: 8 },
      { month: "May", temp: 17, rain: 50, rainyDays: 6, wind: 7 },
      { month: "Jun", temp: 21, rain: 30, rainyDays: 4, wind: 7 },
      { month: "Jul", temp: 24, rain: 15, rainyDays: 2, wind: 7 },
      { month: "Aug", temp: 24, rain: 25, rainyDays: 3, wind: 7 },
      { month: "Sep", temp: 20, rain: 60, rainyDays: 5, wind: 7 },
      { month: "Oct", temp: 16, rain: 90, rainyDays: 8, wind: 8 },
      { month: "Nov", temp: 11, rain: 100, rainyDays: 8, wind: 9 },
      { month: "Dec", temp: 8, rain: 80, rainyDays: 7, wind: 9 }
    ]
  },
  bordeaux: {
    city: "Bordeaux", country: "France",
    months: [
      { month: "Jan", temp: 7, rain: 80, rainyDays: 13, wind: 11 },
      { month: "Feb", temp: 8, rain: 65, rainyDays: 11, wind: 11 },
      { month: "Mar", temp: 11, rain: 60, rainyDays: 11, wind: 10 },
      { month: "Apr", temp: 13, rain: 65, rainyDays: 11, wind: 9 },
      { month: "May", temp: 17, rain: 70, rainyDays: 11, wind: 9 },
      { month: "Jun", temp: 20, rain: 55, rainyDays: 9, wind: 8 },
      { month: "Jul", temp: 22, rain: 45, rainyDays: 7, wind: 8 },
      { month: "Aug", temp: 22, rain: 50, rainyDays: 8, wind: 8 },
      { month: "Sep", temp: 19, rain: 60, rainyDays: 9, wind: 8 },
      { month: "Oct", temp: 15, rain: 75, rainyDays: 11, wind: 10 },
      { month: "Nov", temp: 10, rain: 80, rainyDays: 13, wind: 11 },
      { month: "Dec", temp: 7, rain: 85, rainyDays: 13, wind: 11 }
    ]
  },
  cannes: {
    city: "Cannes", country: "France",
    months: [
      { month: "Jan", temp: 9, rain: 65, rainyDays: 6, wind: 8 },
      { month: "Feb", temp: 9, rain: 50, rainyDays: 5, wind: 8 },
      { month: "Mar", temp: 11, rain: 45, rainyDays: 5, wind: 8 },
      { month: "Apr", temp: 14, rain: 55, rainyDays: 6, wind: 7 },
      { month: "May", temp: 17, rain: 40, rainyDays: 5, wind: 7 },
      { month: "Jun", temp: 21, rain: 25, rainyDays: 3, wind: 7 },
      { month: "Jul", temp: 24, rain: 10, rainyDays: 1, wind: 7 },
      { month: "Aug", temp: 24, rain: 20, rainyDays: 3, wind: 6 },
      { month: "Sep", temp: 21, rain: 55, rainyDays: 5, wind: 7 },
      { month: "Oct", temp: 17, rain: 100, rainyDays: 8, wind: 8 },
      { month: "Nov", temp: 13, rain: 105, rainyDays: 8, wind: 8 },
      { month: "Dec", temp: 10, rain: 75, rainyDays: 7, wind: 8 }
    ]
  },
  girona: {
    city: "Girona", country: "Spain",
    months: [
      { month: "Jan", temp: 7, rain: 55, rainyDays: 7, wind: 9 },
      { month: "Feb", temp: 8, rain: 40, rainyDays: 6, wind: 10 },
      { month: "Mar", temp: 11, rain: 50, rainyDays: 7, wind: 10 },
      { month: "Apr", temp: 13, rain: 60, rainyDays: 8, wind: 9 },
      { month: "May", temp: 17, rain: 60, rainyDays: 8, wind: 8 },
      { month: "Jun", temp: 21, rain: 40, rainyDays: 5, wind: 8 },
      { month: "Jul", temp: 24, rain: 25, rainyDays: 3, wind: 8 },
      { month: "Aug", temp: 24, rain: 40, rainyDays: 5, wind: 7 },
      { month: "Sep", temp: 21, rain: 65, rainyDays: 6, wind: 8 },
      { month: "Oct", temp: 16, rain: 85, rainyDays: 8, wind: 9 },
      { month: "Nov", temp: 11, rain: 65, rainyDays: 7, wind: 9 },
      { month: "Dec", temp: 8, rain: 55, rainyDays: 7, wind: 9 }
    ]
  },
  ballybunion: {
    city: "Ballybunion", country: "Ireland",
    months: [
      { month: "Jan", temp: 7, rain: 100, rainyDays: 18, wind: 20 },
      { month: "Feb", temp: 7, rain: 75, rainyDays: 15, wind: 19 },
      { month: "Mar", temp: 8, rain: 75, rainyDays: 15, wind: 18 },
      { month: "Apr", temp: 10, rain: 60, rainyDays: 13, wind: 16 },
      { month: "May", temp: 12, rain: 60, rainyDays: 12, wind: 14 },
      { month: "Jun", temp: 14, rain: 60, rainyDays: 12, wind: 13 },
      { month: "Jul", temp: 16, rain: 65, rainyDays: 13, wind: 13 },
      { month: "Aug", temp: 16, rain: 75, rainyDays: 14, wind: 13 },
      { month: "Sep", temp: 14, rain: 80, rainyDays: 14, wind: 15 },
      { month: "Oct", temp: 12, rain: 100, rainyDays: 16, wind: 17 },
      { month: "Nov", temp: 9, rain: 100, rainyDays: 17, wind: 19 },
      { month: "Dec", temp: 7, rain: 105, rainyDays: 18, wind: 20 }
    ]
  },
  hamburg: {
    city: "Hamburg", country: "Germany",
    months: [
      { month: "Jan", temp: 2, rain: 60, rainyDays: 14, wind: 14 },
      { month: "Feb", temp: 2, rain: 40, rainyDays: 11, wind: 14 },
      { month: "Mar", temp: 5, rain: 50, rainyDays: 12, wind: 13 },
      { month: "Apr", temp: 9, rain: 40, rainyDays: 10, wind: 12 },
      { month: "May", temp: 14, rain: 50, rainyDays: 10, wind: 11 },
      { month: "Jun", temp: 17, rain: 65, rainyDays: 12, wind: 10 },
      { month: "Jul", temp: 19, rain: 75, rainyDays: 13, wind: 10 },
      { month: "Aug", temp: 18, rain: 70, rainyDays: 12, wind: 10 },
      { month: "Sep", temp: 15, rain: 55, rainyDays: 11, wind: 11 },
      { month: "Oct", temp: 10, rain: 55, rainyDays: 12, wind: 13 },
      { month: "Nov", temp: 6, rain: 60, rainyDays: 14, wind: 14 },
      { month: "Dec", temp: 3, rain: 65, rainyDays: 14, wind: 14 }
    ]
  },
  halmstad: {
    city: "Halmstad", country: "Sweden",
    months: [
      { month: "Jan", temp: 1, rain: 60, rainyDays: 14, wind: 16 },
      { month: "Feb", temp: 1, rain: 40, rainyDays: 11, wind: 15 },
      { month: "Mar", temp: 3, rain: 45, rainyDays: 11, wind: 14 },
      { month: "Apr", temp: 7, rain: 35, rainyDays: 9, wind: 13 },
      { month: "May", temp: 12, rain: 40, rainyDays: 9, wind: 11 },
      { month: "Jun", temp: 16, rain: 50, rainyDays: 10, wind: 10 },
      { month: "Jul", temp: 18, rain: 65, rainyDays: 11, wind: 10 },
      { month: "Aug", temp: 18, rain: 70, rainyDays: 12, wind: 10 },
      { month: "Sep", temp: 14, rain: 65, rainyDays: 12, wind: 12 },
      { month: "Oct", temp: 10, rain: 70, rainyDays: 13, wind: 14 },
      { month: "Nov", temp: 5, rain: 70, rainyDays: 14, wind: 15 },
      { month: "Dec", temp: 2, rain: 65, rainyDays: 15, wind: 16 }
    ]
  },
  seignosse: {
    city: "Seignosse", country: "France",
    months: [
      { month: "Jan", temp: 8, rain: 110, rainyDays: 14, wind: 13 },
      { month: "Feb", temp: 9, rain: 90, rainyDays: 12, wind: 12 },
      { month: "Mar", temp: 11, rain: 80, rainyDays: 11, wind: 11 },
      { month: "Apr", temp: 13, rain: 85, rainyDays: 12, wind: 10 },
      { month: "May", temp: 16, rain: 75, rainyDays: 11, wind: 9 },
      { month: "Jun", temp: 19, rain: 60, rainyDays: 9, wind: 9 },
      { month: "Jul", temp: 22, rain: 40, rainyDays: 7, wind: 8 },
      { month: "Aug", temp: 22, rain: 50, rainyDays: 8, wind: 8 },
      { month: "Sep", temp: 20, rain: 75, rainyDays: 9, wind: 9 },
      { month: "Oct", temp: 16, rain: 95, rainyDays: 12, wind: 10 },
      { month: "Nov", temp: 11, rain: 110, rainyDays: 14, wind: 12 },
      { month: "Dec", temp: 9, rain: 115, rainyDays: 14, wind: 13 }
    ]
  },
  troia: {
    city: "Troia", country: "Portugal",
    months: [
      { month: "Jan", temp: 11, rain: 70, rainyDays: 9, wind: 12 },
      { month: "Feb", temp: 12, rain: 55, rainyDays: 8, wind: 12 },
      { month: "Mar", temp: 14, rain: 40, rainyDays: 6, wind: 11 },
      { month: "Apr", temp: 16, rain: 40, rainyDays: 6, wind: 10 },
      { month: "May", temp: 18, rain: 25, rainyDays: 4, wind: 10 },
      { month: "Jun", temp: 21, rain: 10, rainyDays: 2, wind: 10 },
      { month: "Jul", temp: 24, rain: 3, rainyDays: 0, wind: 11 },
      { month: "Aug", temp: 24, rain: 3, rainyDays: 0, wind: 10 },
      { month: "Sep", temp: 22, rain: 20, rainyDays: 3, wind: 10 },
      { month: "Oct", temp: 18, rain: 55, rainyDays: 7, wind: 11 },
      { month: "Nov", temp: 14, rain: 75, rainyDays: 9, wind: 12 },
      { month: "Dec", temp: 12, rain: 80, rainyDays: 10, wind: 12 }
    ]
  },
  carnoustie: {
    city: "Carnoustie", country: "Scotland",
    months: [
      { month: "Jan", temp: 4, rain: 55, rainyDays: 14, wind: 18 },
      { month: "Feb", temp: 4, rain: 40, rainyDays: 11, wind: 17 },
      { month: "Mar", temp: 6, rain: 45, rainyDays: 12, wind: 16 },
      { month: "Apr", temp: 8, rain: 40, rainyDays: 10, wind: 14 },
      { month: "May", temp: 11, rain: 45, rainyDays: 11, wind: 13 },
      { month: "Jun", temp: 14, rain: 50, rainyDays: 11, wind: 12 },
      { month: "Jul", temp: 16, rain: 55, rainyDays: 12, wind: 11 },
      { month: "Aug", temp: 16, rain: 60, rainyDays: 12, wind: 12 },
      { month: "Sep", temp: 14, rain: 50, rainyDays: 11, wind: 13 },
      { month: "Oct", temp: 10, rain: 65, rainyDays: 13, wind: 15 },
      { month: "Nov", temp: 7, rain: 55, rainyDays: 14, wind: 17 },
      { month: "Dec", temp: 5, rain: 55, rainyDays: 14, wind: 18 }
    ]
  }
};
