const fs = require('fs');
const path = require('path');

const newAcademies = [
  {
    id: "rafa-nadal-academy",
    name: "Rafa Nadal Academy by Movistar",
    country: "Spain",
    countryFlag: "\u{1F1EA}\u{1F1F8}",
    city: "Manacor",
    lat: 39.5696, lng: 3.2090,
    website: "https://www.rafanadalacademy.com",
    contact: "+34 971 171 683",
    individualLessons: true,
    boarding: true,
    level: "All levels",
    starred: true,
    airport: { name: "Palma de Mallorca Airport", code: "PMI", distance: "55 km", driveTime: "45 min" },
    beach: { distance: "10 km", description: "Beautiful Mallorcan beaches with crystal-clear Mediterranean waters" },
    climate: "manacor",
    priceRange: { from: 1200, to: 5000, unit: "week", display: "\u20ac1,200 - \u20ac5,000 / week" },
    programs: [
      { name: "Adult Tennis Experience", price: "\u20ac1,200/week", desc: "Intensive tennis program for adult players of all levels" },
      { name: "High Performance Program", price: "\u20ac3,500/week", desc: "Elite training program with world-class coaches and facilities" },
      { name: "Annual Training Program", price: "\u20ac5,000/month", desc: "Full-year residential training for aspiring professional players" }
    ],
    coaches: [
      { name: "Toni Nadal", credential: "Academy Director & Head Coach", background: "Coached Rafael Nadal to 16 Grand Slam titles. One of the most successful coaches in tennis history.", atpWta: "ATP", bestRanking: 1, rankingNote: "Coached World No. 1 Rafael Nadal", languages: ["Spanish", "Catalan", "English"], instagram: null },
      { name: "Carlos Moy\u00e1", credential: "Former World No. 1", background: "Former ATP World No. 1 and Roland Garros champion. Brings elite playing experience to coaching.", atpWta: "ATP", bestRanking: 1, rankingNote: "Former World No. 1 (1999)", languages: ["Spanish", "English", "Italian"], instagram: null }
    ],
    bestCoachRanking: 1,
    coachedTopPlayer: true,
    facilities: "State-of-the-art complex with 26 tennis courts (7 hard, 11 clay, 2 grass, 6 indoor), gym, swimming pool, sports residence, school, museum, and sports clinic.",
    courtSurfaces: ["Hard", "Clay", "Grass", "Indoor Hard"],
    notableAlumni: ["Rafael Nadal", "Casper Ruud", "Jaume Munar"],
    description: "The Rafa Nadal Academy is a world-class tennis training facility founded by Rafael Nadal in his hometown of Manacor, Mallorca. It offers programs for players of all ages and levels, from beginners to elite professionals, combining top-tier coaching with academic education.",
    nearbyHotels: [
      { name: "Hotel Rafa Nadal Academy", stars: 4, distanceKm: 0.1, features: ["On-site", "Tennis views"], pool: true, wifi: true, pricePerNight: 150 },
      { name: "Sa Bassa Rotja Ecoturisme", stars: 4, distanceKm: 3, features: ["Eco-resort", "Gardens"], pool: true, wifi: true, pricePerNight: 120 },
      { name: "Hotel Felip", stars: 4, distanceKm: 12, features: ["Seafront", "Beach access"], pool: true, wifi: true, pricePerNight: 110 },
      { name: "La Reserva Rotana", stars: 5, distanceKm: 5, features: ["Golf course", "Luxury"], pool: true, wifi: true, pricePerNight: 250 },
      { name: "Hotel Manacor", stars: 3, distanceKm: 1, features: ["Central", "Budget-friendly"], pool: false, wifi: true, pricePerNight: 65 }
    ],
    nearbyRestaurants: [
      { name: "Restaurant Moli d'en Sopa", cuisine: "Mediterranean", distanceKm: 2, priceRange: "\u20ac\u20ac\u20ac", rating: 4.5, vegetarian: true, outdoor: true },
      { name: "Sa Rotana", cuisine: "Mallorcan", distanceKm: 5, priceRange: "\u20ac\u20ac\u20ac\u20ac", rating: 4.7, vegetarian: true, outdoor: true },
      { name: "La Ruta", cuisine: "Tapas", distanceKm: 1.5, priceRange: "\u20ac\u20ac", rating: 4.3, vegetarian: true, outdoor: true },
      { name: "Bar Restaurant Can March", cuisine: "Spanish", distanceKm: 1, priceRange: "\u20ac\u20ac", rating: 4.2, vegetarian: false, outdoor: true },
      { name: "Es Moli d'en Bou", cuisine: "Fine Dining", distanceKm: 12, priceRange: "\u20ac\u20ac\u20ac\u20ac", rating: 4.8, vegetarian: true, outdoor: true }
    ],
    nearbyMedical: [
      { name: "Rafa Nadal Academy Sports Clinic", type: "Sports Medicine", distanceKm: 0.1, phone: "+34 971 171 683", emergency: false },
      { name: "Hospital de Manacor", type: "General Hospital", distanceKm: 2, phone: "+34 971 847 000", emergency: true },
      { name: "Centro de Salud Manacor", type: "Health Center", distanceKm: 1.5, phone: "+34 971 553 555", emergency: false }
    ],
    costOfLiving: { rent1Bed: 700, meal: 12, monthlyFood: 300, transport: 40, currency: "EUR", summary: "Manacor has a moderate cost of living with lower prices than mainland Spain's major cities." },
    scholarships: { available: true, details: "The Rafa Nadal Foundation offers scholarships to talented young players who lack financial resources to pursue professional tennis training." },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: "EU/EEA citizens can live and work freely. US, Canada, Australia, and many others can visit visa-free for 90 days.", notes: "Spain is part of the Schengen Area. Student visas available for long-term training programs." },
    airportTransfers: [
      { mode: "Private Transfer", duration: "45 min", cost: "\u20ac60-80", notes: "Academy can arrange private airport transfers" },
      { mode: "Taxi", duration: "45 min", cost: "\u20ac55-70", notes: "Available at Palma airport" },
      { mode: "Bus + Local Transport", duration: "1h 30min", cost: "\u20ac10-15", notes: "TIB bus to Manacor from Palma" }
    ],
    nearbyTournaments: [
      { name: "Mallorca Championships", level: "ATP 250", surface: "Grass", month: "June", venue: "Mallorca" },
      { name: "Barcelona Open Banc Sabadell", level: "ATP 500", surface: "Clay", month: "April", venue: "Barcelona" }
    ],
    videoTour: "https://www.youtube.com/watch?v=rafanadalacademy"
  },
  {
    id: "emilio-sanchez-academy",
    name: "Emilio S\u00e1nchez Academy",
    country: "Spain",
    countryFlag: "\u{1F1EA}\u{1F1F8}",
    city: "Barcelona",
    lat: 41.3851, lng: 2.1734,
    website: "https://www.emiliosanchezacademy.com",
    contact: "+34 935 553 158",
    individualLessons: true,
    boarding: true,
    level: "All levels",
    starred: false,
    airport: { name: "Barcelona-El Prat Airport", code: "BCN", distance: "20 km", driveTime: "25 min" },
    beach: { distance: "5 km", description: "Barcelona's famous Mediterranean beaches with vibrant atmosphere" },
    climate: "barcelona",
    priceRange: { from: 800, to: 3500, unit: "week", display: "\u20ac800 - \u20ac3,500 / week" },
    programs: [
      { name: "Weekly Tennis Camp", price: "\u20ac800/week", desc: "Intensive tennis camp for players of all levels" },
      { name: "High Performance Program", price: "\u20ac2,500/month", desc: "Full-time competitive training program" },
      { name: "Professional Training", price: "\u20ac3,500/month", desc: "Elite program for touring professionals and top juniors" }
    ],
    coaches: [
      { name: "Emilio S\u00e1nchez", credential: "Former ATP Top 10", background: "Former ATP doubles World No. 1 and singles top 10. Olympic gold medalist. Decades of coaching experience.", atpWta: "ATP", bestRanking: 7, rankingNote: "Career-high singles ranking of No. 7 (1990)", languages: ["Spanish", "English", "Catalan"], instagram: null },
      { name: "Sergio Casal", credential: "Former ATP Doubles No. 1", background: "Former doubles World No. 1 alongside Emilio S\u00e1nchez. Olympic gold medalist in Barcelona 1992.", atpWta: "ATP", bestRanking: 1, rankingNote: "Doubles World No. 1", languages: ["Spanish", "English"], instagram: null }
    ],
    bestCoachRanking: 1,
    coachedTopPlayer: true,
    facilities: "Modern tennis complex with 16 courts (clay, hard, and indoor), fitness center, physiotherapy clinic, swimming pool, and student residence.",
    courtSurfaces: ["Clay", "Hard", "Indoor Hard"],
    notableAlumni: ["Svetlana Kuznetsova", "Andy Murray (trained)", "Grigor Dimitrov (trained)"],
    description: "Founded by Grand Slam champion Emilio S\u00e1nchez, this Barcelona-based academy offers comprehensive tennis training combined with academic education. Located in a vibrant city with year-round mild weather.",
    nearbyHotels: [
      { name: "Hotel SB Icaria Barcelona", stars: 4, distanceKm: 5, features: ["Beachfront", "Rooftop pool"], pool: true, wifi: true, pricePerNight: 140 },
      { name: "Hotel Arts Barcelona", stars: 5, distanceKm: 6, features: ["Luxury", "Sea views"], pool: true, wifi: true, pricePerNight: 350 },
      { name: "Ibis Barcelona Meridiana", stars: 2, distanceKm: 2, features: ["Budget", "Metro access"], pool: false, wifi: true, pricePerNight: 65 },
      { name: "Hotel Catalonia Atenas", stars: 4, distanceKm: 3, features: ["Garden", "Restaurant"], pool: true, wifi: true, pricePerNight: 110 },
      { name: "Generator Barcelona", stars: 2, distanceKm: 4, features: ["Social", "Terrace"], pool: false, wifi: true, pricePerNight: 45 }
    ],
    nearbyRestaurants: [
      { name: "Can Culleretes", cuisine: "Catalan", distanceKm: 5, priceRange: "\u20ac\u20ac", rating: 4.4, vegetarian: true, outdoor: false },
      { name: "El Nacional", cuisine: "Mediterranean", distanceKm: 5, priceRange: "\u20ac\u20ac\u20ac", rating: 4.5, vegetarian: true, outdoor: true },
      { name: "La Boqueria Market", cuisine: "Street Food", distanceKm: 6, priceRange: "\u20ac", rating: 4.6, vegetarian: true, outdoor: true },
      { name: "Cerveceria Catalana", cuisine: "Tapas", distanceKm: 5, priceRange: "\u20ac\u20ac", rating: 4.5, vegetarian: true, outdoor: true },
      { name: "Restaurant 7 Portes", cuisine: "Spanish", distanceKm: 6, priceRange: "\u20ac\u20ac\u20ac", rating: 4.3, vegetarian: false, outdoor: false }
    ],
    nearbyMedical: [
      { name: "Hospital de la Santa Creu i Sant Pau", type: "General Hospital", distanceKm: 3, phone: "+34 935 537 000", emergency: true },
      { name: "Centro M\u00e9dico Teknon", type: "Private Hospital", distanceKm: 5, phone: "+34 933 933 000", emergency: true },
      { name: "Farmacia Barcelona Centre", type: "Pharmacy", distanceKm: 1, phone: "+34 933 012 345", emergency: false }
    ],
    costOfLiving: { rent1Bed: 900, meal: 12, monthlyFood: 300, transport: 50, currency: "EUR", summary: "Barcelona is a moderately expensive European city with a great quality of life." },
    scholarships: { available: true, details: "Merit-based scholarships available for talented junior players with demonstrated tournament results." },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: "EU/EEA citizens can live and work freely. US, Canada, Australia, and many others can visit visa-free for 90 days.", notes: "Spain is part of the Schengen Area. Student visas available for long-term training programs." },
    airportTransfers: [
      { mode: "Aerobus", duration: "35 min", cost: "\u20ac6-7", notes: "Direct bus from airport to city center" },
      { mode: "Taxi", duration: "25 min", cost: "\u20ac35-45", notes: "Available at airport terminal" },
      { mode: "Metro", duration: "45 min", cost: "\u20ac5", notes: "L9 Sud line from airport" }
    ],
    nearbyTournaments: [
      { name: "Barcelona Open Banc Sabadell", level: "ATP 500", surface: "Clay", month: "April", venue: "Real Club de Tenis Barcelona" },
      { name: "WTA Mutua Madrid Open", level: "WTA 1000", surface: "Clay", month: "May", venue: "Madrid" }
    ],
    videoTour: null
  },
  {
    id: "ferrero-tennis-academy",
    name: "Ferrero Tennis Academy (Equelite JC Ferrero)",
    country: "Spain",
    countryFlag: "\u{1F1EA}\u{1F1F8}",
    city: "Villena",
    lat: 38.6361, lng: -0.8656,
    website: "https://equelite.com",
    contact: "+34 965 801 864",
    individualLessons: true,
    boarding: true,
    level: "Elite",
    starred: false,
    airport: { name: "Alicante-Elche Airport", code: "ALC", distance: "60 km", driveTime: "45 min" },
    beach: { distance: "65 km", description: "Costa Blanca beaches with warm Mediterranean waters and long sunny seasons" },
    climate: "villena",
    priceRange: { from: 900, to: 4000, unit: "week", display: "\u20ac900 - \u20ac4,000 / week" },
    programs: [
      { name: "Annual High Performance", price: "\u20ac3,000/month", desc: "Year-round elite training for competitive players" },
      { name: "Summer Camp", price: "\u20ac900/week", desc: "Intensive summer training camp for juniors" },
      { name: "Pro Player Program", price: "\u20ac4,000/month", desc: "Tailored training for professional tour players" }
    ],
    coaches: [
      { name: "Juan Carlos Ferrero", credential: "Former World No. 1", background: "Former ATP World No. 1 and Roland Garros champion. Coached Carlos Alcaraz to World No. 1 and multiple Grand Slam titles.", atpWta: "ATP", bestRanking: 1, rankingNote: "Former World No. 1 (2003), coached Alcaraz to No. 1", languages: ["Spanish", "English", "French"], instagram: null },
      { name: "Antonio Mart\u00ednez Cascales", credential: "Head Coach", background: "Experienced Spanish coach with extensive work developing junior players into professionals.", atpWta: "ATP", bestRanking: null, rankingNote: null, languages: ["Spanish", "English"], instagram: null }
    ],
    bestCoachRanking: 1,
    coachedTopPlayer: true,
    facilities: "Comprehensive training facility with 17 tennis courts (clay and hard), gym, Olympic-size pool, accommodation, and sports science center.",
    courtSurfaces: ["Clay", "Hard"],
    notableAlumni: ["Carlos Alcaraz", "Pablo Carre\u00f1o Busta", "Juan Carlos Ferrero"],
    description: "The Equelite JC Ferrero Tennis Academy is the training base where Carlos Alcaraz developed into the youngest World No. 1 in ATP history. Founded by former World No. 1 Juan Carlos Ferrero, it focuses on developing elite competitive players in the Spanish tennis tradition.",
    nearbyHotels: [
      { name: "Hotel Salvadora", stars: 3, distanceKm: 1, features: ["Central", "Traditional"], pool: false, wifi: true, pricePerNight: 55 },
      { name: "La Encina Centenaria", stars: 3, distanceKm: 5, features: ["Rural", "Quiet"], pool: true, wifi: true, pricePerNight: 70 },
      { name: "Hotel Segura", stars: 3, distanceKm: 2, features: ["Modern", "Restaurant"], pool: false, wifi: true, pricePerNight: 50 },
      { name: "AC Hotel Elda", stars: 4, distanceKm: 10, features: ["Business", "Gym"], pool: false, wifi: true, pricePerNight: 85 },
      { name: "Hotel Sercotel Tres Luces", stars: 4, distanceKm: 15, features: ["Spa", "Restaurant"], pool: true, wifi: true, pricePerNight: 95 }
    ],
    nearbyRestaurants: [
      { name: "Restaurante Salvadora", cuisine: "Spanish", distanceKm: 1, priceRange: "\u20ac\u20ac\u20ac", rating: 4.5, vegetarian: true, outdoor: true },
      { name: "La Teja", cuisine: "Mediterranean", distanceKm: 1.5, priceRange: "\u20ac\u20ac", rating: 4.3, vegetarian: true, outdoor: true },
      { name: "Mesón El Rabal", cuisine: "Spanish", distanceKm: 2, priceRange: "\u20ac\u20ac", rating: 4.2, vegetarian: false, outdoor: false },
      { name: "Bar Aitana", cuisine: "Tapas", distanceKm: 1, priceRange: "\u20ac", rating: 4.0, vegetarian: true, outdoor: true },
      { name: "Restaurante Los Aljibes", cuisine: "Mediterranean", distanceKm: 3, priceRange: "\u20ac\u20ac\u20ac", rating: 4.4, vegetarian: true, outdoor: true }
    ],
    nearbyMedical: [
      { name: "Hospital General Universitario de Elda", type: "General Hospital", distanceKm: 10, phone: "+34 966 989 000", emergency: true },
      { name: "Centro de Salud Villena", type: "Health Center", distanceKm: 1, phone: "+34 965 803 240", emergency: false },
      { name: "Farmacia Central Villena", type: "Pharmacy", distanceKm: 1, phone: "+34 965 801 123", emergency: false }
    ],
    costOfLiving: { rent1Bed: 400, meal: 10, monthlyFood: 250, transport: 30, currency: "EUR", summary: "Villena offers very affordable living costs compared to major Spanish cities." },
    scholarships: { available: true, details: "Performance-based scholarships for exceptional junior talents showing competitive potential." },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: "EU/EEA citizens can live and work freely. US, Canada, Australia, and many others can visit visa-free for 90 days.", notes: "Spain is part of the Schengen Area. Student visas available for long-term academy enrollment." },
    airportTransfers: [
      { mode: "Private Transfer", duration: "45 min", cost: "\u20ac50-70", notes: "Academy can arrange pickup from Alicante airport" },
      { mode: "Taxi", duration: "45 min", cost: "\u20ac55-65", notes: "Available at Alicante airport" },
      { mode: "Bus", duration: "1h 15min", cost: "\u20ac8-12", notes: "ALSA bus service to Villena" }
    ],
    nearbyTournaments: [
      { name: "Barcelona Open Banc Sabadell", level: "ATP 500", surface: "Clay", month: "April", venue: "Barcelona" },
      { name: "Mutua Madrid Open", level: "ATP 1000", surface: "Clay", month: "May", venue: "Madrid" },
      { name: "Valencia Open", level: "ATP 250", surface: "Hard", month: "October", venue: "Valencia" }
    ],
    videoTour: null
  },
  {
    id: "mouratoglou-academy",
    name: "Mouratoglou Tennis Academy",
    country: "France",
    countryFlag: "\u{1F1EB}\u{1F1F7}",
    city: "Biot",
    lat: 43.6286, lng: 7.0960,
    website: "https://www.mouratoglou.com",
    contact: "+33 4 93 65 20 20",
    individualLessons: true,
    boarding: true,
    level: "All levels",
    starred: false,
    airport: { name: "Nice C\u00f4te d'Azur Airport", code: "NCE", distance: "20 km", driveTime: "25 min" },
    beach: { distance: "8 km", description: "French Riviera beaches with stunning Mediterranean coastline" },
    climate: "biot",
    priceRange: { from: 1500, to: 6000, unit: "week", display: "\u20ac1,500 - \u20ac6,000 / week" },
    programs: [
      { name: "Adult Tennis Week", price: "\u20ac1,500/week", desc: "Intensive tennis program for adult players of all levels" },
      { name: "Junior Academy", price: "\u20ac4,000/month", desc: "Full-time academy program combining tennis and academics" },
      { name: "Elite Performance", price: "\u20ac6,000/month", desc: "Top-tier training for professional and elite junior players" }
    ],
    coaches: [
      { name: "Patrick Mouratoglou", credential: "Elite Tennis Coach", background: "Coached Serena Williams to 10 Grand Slam titles. One of the most high-profile coaches in modern tennis.", atpWta: "WTA", bestRanking: 1, rankingNote: "Coached Serena Williams (World No. 1)", languages: ["French", "English", "Greek"], instagram: "@patrickmouratoglou" },
      { name: "Marcos Baghdatis", credential: "Former ATP Top 10", background: "Former ATP No. 8 and Australian Open finalist. Brings top-level playing experience.", atpWta: "ATP", bestRanking: 8, rankingNote: "Career-high ATP No. 8", languages: ["Greek", "English", "French"], instagram: null }
    ],
    bestCoachRanking: 1,
    coachedTopPlayer: true,
    facilities: "World-class facility with 34 courts (clay, hard, indoor), fitness center, recovery center, Olympic pool, accommodation for 250 students, and integrated school.",
    courtSurfaces: ["Clay", "Hard", "Indoor Hard"],
    notableAlumni: ["Stefanos Tsitsipas", "Coco Gauff (trained)", "Holger Rune (trained)"],
    description: "The Mouratoglou Academy, located on the French Riviera, is one of the world's most prestigious tennis academies. Founded by Patrick Mouratoglou, coach of Serena Williams, it attracts elite players and promising juniors from around the globe.",
    nearbyHotels: [
      { name: "Novotel Sophia Antipolis", stars: 4, distanceKm: 3, features: ["Modern", "Conference"], pool: true, wifi: true, pricePerNight: 120 },
      { name: "Mercure Antibes Sophia Antipolis", stars: 4, distanceKm: 5, features: ["Garden", "Restaurant"], pool: true, wifi: true, pricePerNight: 100 },
      { name: "Hotel & Spa Les Pecheurs", stars: 5, distanceKm: 10, features: ["Luxury", "Sea views"], pool: true, wifi: true, pricePerNight: 400 },
      { name: "Ibis Antibes Sophia Antipolis", stars: 2, distanceKm: 4, features: ["Budget", "Practical"], pool: false, wifi: true, pricePerNight: 60 },
      { name: "Bastide Saint Antoine", stars: 5, distanceKm: 12, features: ["Michelin restaurant", "Hilltop"], pool: true, wifi: true, pricePerNight: 300 }
    ],
    nearbyRestaurants: [
      { name: "Les Arcades", cuisine: "French Provencal", distanceKm: 1, priceRange: "\u20ac\u20ac\u20ac", rating: 4.5, vegetarian: true, outdoor: true },
      { name: "Chez Odette", cuisine: "French", distanceKm: 2, priceRange: "\u20ac\u20ac", rating: 4.3, vegetarian: true, outdoor: true },
      { name: "Le Mus\u00e9e de Biot", cuisine: "Mediterranean", distanceKm: 1, priceRange: "\u20ac\u20ac\u20ac", rating: 4.4, vegetarian: true, outdoor: true },
      { name: "Plage Keller", cuisine: "Seafood", distanceKm: 8, priceRange: "\u20ac\u20ac\u20ac", rating: 4.6, vegetarian: false, outdoor: true },
      { name: "Le Jarrier", cuisine: "Fine Dining", distanceKm: 1.5, priceRange: "\u20ac\u20ac\u20ac\u20ac", rating: 4.7, vegetarian: true, outdoor: true }
    ],
    nearbyMedical: [
      { name: "H\u00f4pital d'Antibes Juan-les-Pins", type: "General Hospital", distanceKm: 8, phone: "+33 4 97 24 77 77", emergency: true },
      { name: "Pharmacie de Biot", type: "Pharmacy", distanceKm: 1, phone: "+33 4 93 65 01 02", emergency: false },
      { name: "SOS M\u00e9decins C\u00f4te d'Azur", type: "Emergency Doctor", distanceKm: 10, phone: "+33 4 93 85 01 01", emergency: true }
    ],
    costOfLiving: { rent1Bed: 1000, meal: 15, monthlyFood: 350, transport: 50, currency: "EUR", summary: "The French Riviera is an upscale area with higher costs than average France, but excellent quality of life." },
    scholarships: { available: true, details: "The Mouratoglou Foundation provides scholarships to talented players from underprivileged backgrounds." },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: "EU/EEA citizens can live and work freely. US, Canada, Australia, and many others can visit visa-free for 90 days.", notes: "France is part of the Schengen Area. Long-stay student visas available." },
    airportTransfers: [
      { mode: "Private Transfer", duration: "25 min", cost: "\u20ac50-70", notes: "Academy arranges transfers from Nice airport" },
      { mode: "Taxi", duration: "25 min", cost: "\u20ac40-55", notes: "Available at Nice airport" },
      { mode: "Bus (Envibus)", duration: "50 min", cost: "\u20ac1.50", notes: "Local bus service with connections" }
    ],
    nearbyTournaments: [
      { name: "Rolex Monte-Carlo Masters", level: "ATP 1000", surface: "Clay", month: "April", venue: "Monte Carlo" },
      { name: "Open de Nice C\u00f4te d'Azur", level: "ATP 250", surface: "Clay", month: "May", venue: "Nice" },
      { name: "Roland Garros", level: "Grand Slam", surface: "Clay", month: "June", venue: "Paris" }
    ],
    videoTour: "https://www.youtube.com/watch?v=mouratoglou"
  },
  {
    id: "tennis-club-paris",
    name: "Tennis Club de Paris",
    country: "France",
    countryFlag: "\u{1F1EB}\u{1F1F7}",
    city: "Paris",
    lat: 48.8566, lng: 2.3522,
    website: "https://www.tennisclubdeparis.fr",
    contact: "+33 1 42 24 36 36",
    individualLessons: true,
    boarding: false,
    level: "All levels",
    starred: false,
    airport: { name: "Paris Charles de Gaulle Airport", code: "CDG", distance: "30 km", driveTime: "40 min" },
    beach: { distance: "200 km", description: "Normandy beaches accessible by train; Paris offers riverside activities along the Seine" },
    climate: "paris",
    priceRange: { from: 500, to: 2000, unit: "week", display: "\u20ac500 - \u20ac2,000 / week" },
    programs: [
      { name: "Individual Coaching", price: "\u20ac100/hour", desc: "One-on-one coaching with experienced professionals" },
      { name: "Group Training", price: "\u20ac500/week", desc: "Intensive group training sessions" },
      { name: "Competition Preparation", price: "\u20ac2,000/month", desc: "Focused training for tournament-bound players" }
    ],
    coaches: [
      { name: "Nicolas Escud\u00e9", credential: "Former ATP Player", background: "Former French Davis Cup hero and ATP professional with coaching expertise.", atpWta: "ATP", bestRanking: 17, rankingNote: "Career-high ATP No. 17", languages: ["French", "English", "Spanish"], instagram: null },
      { name: "Nathalie Dechy", credential: "Former WTA Top 15", background: "Former WTA No. 11 with extensive Grand Slam experience. Now coaches at the club.", atpWta: "WTA", bestRanking: 11, rankingNote: "Career-high WTA No. 11", languages: ["French", "English"], instagram: null }
    ],
    bestCoachRanking: 11,
    facilities: "Historic Parisian tennis club with 12 courts (clay, hard, covered), clubhouse, pro shop, restaurant, and fitness area.",
    courtSurfaces: ["Clay", "Hard", "Indoor Hard"],
    notableAlumni: [],
    description: "Tennis Club de Paris is one of the most prestigious tennis clubs in the French capital, offering top-level coaching in the heart of Paris. Its central location and excellent facilities make it ideal for visiting players.",
    nearbyHotels: [
      { name: "H\u00f4tel Lutetia", stars: 5, distanceKm: 2, features: ["Luxury", "Historic"], pool: true, wifi: true, pricePerNight: 500 },
      { name: "Novotel Paris Centre Tour Eiffel", stars: 4, distanceKm: 3, features: ["Tower views", "Modern"], pool: false, wifi: true, pricePerNight: 180 },
      { name: "Ibis Paris Gare Montparnasse", stars: 2, distanceKm: 2, features: ["Budget", "Central"], pool: false, wifi: true, pricePerNight: 90 },
      { name: "Mercure Paris Centre Eiffel Tower", stars: 4, distanceKm: 3, features: ["Central", "Restaurant"], pool: false, wifi: true, pricePerNight: 160 },
      { name: "Generator Paris", stars: 2, distanceKm: 5, features: ["Social", "Young vibe"], pool: false, wifi: true, pricePerNight: 50 }
    ],
    nearbyRestaurants: [
      { name: "Le Relais de l'Entrec\u00f4te", cuisine: "French", distanceKm: 2, priceRange: "\u20ac\u20ac\u20ac", rating: 4.3, vegetarian: false, outdoor: true },
      { name: "Caf\u00e9 de Flore", cuisine: "French Brasserie", distanceKm: 2, priceRange: "\u20ac\u20ac\u20ac", rating: 4.2, vegetarian: true, outdoor: true },
      { name: "L'As du Fallafel", cuisine: "Middle Eastern", distanceKm: 4, priceRange: "\u20ac", rating: 4.5, vegetarian: true, outdoor: false },
      { name: "Bouillon Chartier", cuisine: "French Traditional", distanceKm: 5, priceRange: "\u20ac", rating: 4.4, vegetarian: true, outdoor: false },
      { name: "Le Comptoir du Panth\u00e9on", cuisine: "French", distanceKm: 3, priceRange: "\u20ac\u20ac", rating: 4.3, vegetarian: true, outdoor: true }
    ],
    nearbyMedical: [
      { name: "H\u00f4pital Necker-Enfants Malades", type: "General Hospital", distanceKm: 2, phone: "+33 1 44 49 40 00", emergency: true },
      { name: "Pharmacie des Invalides", type: "Pharmacy", distanceKm: 1, phone: "+33 1 47 05 51 06", emergency: false },
      { name: "SOS M\u00e9decins Paris", type: "Emergency Doctor", distanceKm: 0, phone: "+33 1 47 07 77 77", emergency: true }
    ],
    costOfLiving: { rent1Bed: 1300, meal: 15, monthlyFood: 400, transport: 75, currency: "EUR", summary: "Paris is one of Europe's most expensive cities, but offers unmatched cultural and culinary experiences." },
    scholarships: { available: false, details: "No formal scholarship program. Contact the club for potential arrangements." },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: "EU/EEA citizens can live and work freely. US, Canada, Australia, and many others can visit visa-free for 90 days.", notes: "France is part of the Schengen Area. Various visa options available for long-term stays." },
    airportTransfers: [
      { mode: "RER B Train", duration: "35 min", cost: "\u20ac11", notes: "Direct train from CDG to central Paris" },
      { mode: "Taxi", duration: "40 min", cost: "\u20ac50-65", notes: "Flat rate from CDG to Paris" },
      { mode: "Roissybus", duration: "60 min", cost: "\u20ac16", notes: "Direct bus from CDG to Op\u00e9ra" }
    ],
    nearbyTournaments: [
      { name: "Roland Garros", level: "Grand Slam", surface: "Clay", month: "June", venue: "Stade Roland Garros, Paris" },
      { name: "Rolex Paris Masters", level: "ATP 1000", surface: "Hard (Indoor)", month: "November", venue: "Accor Arena, Paris" }
    ],
    videoTour: null
  },
  {
    id: "lta-national-academy",
    name: "LTA National Tennis Academy",
    country: "United Kingdom",
    countryFlag: "\u{1F1EC}\u{1F1E7}",
    city: "London",
    lat: 51.4500, lng: -0.2470,
    website: "https://www.lta.org.uk",
    contact: "+44 20 8487 7000",
    individualLessons: true,
    boarding: false,
    level: "Elite",
    starred: false,
    airport: { name: "London Heathrow Airport", code: "LHR", distance: "15 km", driveTime: "30 min" },
    beach: { distance: "100 km", description: "South coast beaches accessible by train from London" },
    climate: "london",
    priceRange: { from: 800, to: 3000, unit: "week", display: "\u00a3800 - \u00a33,000 / week" },
    programs: [
      { name: "Pro Scholarship Programme", price: "\u00a33,000/month", desc: "Elite development for top British players" },
      { name: "National Age Group Camp", price: "\u00a3800/week", desc: "Training camps for nationally ranked juniors" },
      { name: "Coach Education", price: "\u00a31,500/course", desc: "LTA certified coaching qualifications" }
    ],
    coaches: [
      { name: "Leon Smith", credential: "LTA Head of Men's Tennis", background: "Led Great Britain to Davis Cup victory in 2015. Extensive experience in player development.", atpWta: "ATP", bestRanking: null, rankingNote: "Davis Cup Captain - GB victory 2015", languages: ["English"], instagram: null },
      { name: "Iain Bates", credential: "LTA National Coach", background: "Senior performance coach with decades of experience developing British talent.", atpWta: "ATP", bestRanking: null, rankingNote: null, languages: ["English"], instagram: null }
    ],
    bestCoachRanking: null,
    facilities: "National Tennis Centre at Roehampton with 16 courts (indoor and outdoor hard, clay), high-performance gym, sports science suite, and recovery facilities.",
    courtSurfaces: ["Hard", "Clay", "Indoor Hard"],
    notableAlumni: ["Emma Raducanu", "Cameron Norrie", "Jack Draper"],
    description: "The LTA National Tennis Academy at Roehampton is the home of British tennis excellence. It serves as the primary training base for Great Britain's top players and provides elite development programs for the nation's most promising juniors.",
    nearbyHotels: [
      { name: "Hotel Nox Roehampton", stars: 3, distanceKm: 1, features: ["Close", "Modern"], pool: false, wifi: true, pricePerNight: 90 },
      { name: "Richmond Hill Hotel", stars: 4, distanceKm: 4, features: ["Views", "Historic"], pool: false, wifi: true, pricePerNight: 150 },
      { name: "Premier Inn Putney Bridge", stars: 3, distanceKm: 3, features: ["Budget", "Reliable"], pool: false, wifi: true, pricePerNight: 85 },
      { name: "The Petersham Hotel", stars: 4, distanceKm: 5, features: ["Riverside", "Gardens"], pool: false, wifi: true, pricePerNight: 200 },
      { name: "Travelodge Battersea", stars: 2, distanceKm: 6, features: ["Budget", "Central"], pool: false, wifi: true, pricePerNight: 65 }
    ],
    nearbyRestaurants: [
      { name: "The Roehampton Club Restaurant", cuisine: "British", distanceKm: 0.5, priceRange: "\u00a3\u00a3\u00a3", rating: 4.2, vegetarian: true, outdoor: true },
      { name: "Chez Bruce", cuisine: "French-British", distanceKm: 4, priceRange: "\u00a3\u00a3\u00a3\u00a3", rating: 4.7, vegetarian: true, outdoor: false },
      { name: "The Bingham Riverhouse", cuisine: "Modern British", distanceKm: 5, priceRange: "\u00a3\u00a3\u00a3", rating: 4.5, vegetarian: true, outdoor: true },
      { name: "Pizza Express Putney", cuisine: "Italian", distanceKm: 3, priceRange: "\u00a3\u00a3", rating: 4.0, vegetarian: true, outdoor: false },
      { name: "Nando's Roehampton", cuisine: "Portuguese", distanceKm: 1, priceRange: "\u00a3\u00a3", rating: 4.0, vegetarian: true, outdoor: false }
    ],
    nearbyMedical: [
      { name: "Queen Mary's Hospital", type: "General Hospital", distanceKm: 1, phone: "+44 20 8487 6000", emergency: true },
      { name: "Boots Pharmacy Roehampton", type: "Pharmacy", distanceKm: 1, phone: "+44 20 8789 1234", emergency: false },
      { name: "Kingston Hospital", type: "General Hospital", distanceKm: 6, phone: "+44 20 8546 7711", emergency: true }
    ],
    costOfLiving: { rent1Bed: 1500, meal: 15, monthlyFood: 400, transport: 150, currency: "GBP", summary: "London is one of the world's most expensive cities, but offers unparalleled access to culture and sport." },
    scholarships: { available: true, details: "LTA provides funding and support for talented British players through its Pro Scholarship Programme." },
    visaInfo: { schengen: false, eu: false, visaFreeCountries: "EU/EEA citizens can visit visa-free for 6 months. US, Canada, Australia citizens can visit for up to 6 months.", notes: "UK is not part of the Schengen Area or EU. Standard Visitor visa or Student visa required for long stays." },
    airportTransfers: [
      { mode: "Underground (Tube)", duration: "45 min", cost: "\u00a36-10", notes: "Piccadilly Line from Heathrow, then bus" },
      { mode: "Taxi/Uber", duration: "30 min", cost: "\u00a340-60", notes: "Available at all London airports" },
      { mode: "Heathrow Express + Taxi", duration: "35 min", cost: "\u00a330-45", notes: "Express to Paddington, then taxi" }
    ],
    nearbyTournaments: [
      { name: "Wimbledon", level: "Grand Slam", surface: "Grass", month: "July", venue: "All England Club, London" },
      { name: "Queen's Club Championships", level: "ATP 500", surface: "Grass", month: "June", venue: "Queen's Club, London" }
    ],
    videoTour: null
  },
  {
    id: "annabel-croft-academy",
    name: "Annabel Croft Tennis Academy",
    country: "United Kingdom",
    countryFlag: "\u{1F1EC}\u{1F1E7}",
    city: "Surrey",
    lat: 51.3148, lng: -0.5600,
    website: "https://www.annabelcroftacademy.com",
    contact: "+44 1483 555 123",
    individualLessons: true,
    boarding: false,
    level: "All levels",
    starred: false,
    airport: { name: "London Heathrow Airport", code: "LHR", distance: "25 km", driveTime: "35 min" },
    beach: { distance: "80 km", description: "South coast beaches including Brighton and West Wittering" },
    climate: "surrey",
    priceRange: { from: 600, to: 2500, unit: "week", display: "\u00a3600 - \u00a32,500 / week" },
    programs: [
      { name: "Junior Development", price: "\u00a3600/week", desc: "Structured development program for young players" },
      { name: "Adult Intensive", price: "\u00a3800/week", desc: "Intensive coaching for adult players of all levels" },
      { name: "Performance Pathway", price: "\u00a32,500/month", desc: "Competition-focused training for aspiring players" }
    ],
    coaches: [
      { name: "Annabel Croft", credential: "Former WTA Player & BBC Commentator", background: "Former British No. 1 and WTA professional. Well-known BBC tennis commentator and Wimbledon expert.", atpWta: "WTA", bestRanking: 21, rankingNote: "Career-high WTA No. 21", languages: ["English"], instagram: "@annaborelcroft" },
      { name: "Mark Mayfield", credential: "LTA Senior Performance Coach", background: "Experienced LTA-certified coach with expertise in junior development.", atpWta: null, bestRanking: null, rankingNote: null, languages: ["English"], instagram: null }
    ],
    bestCoachRanking: 21,
    facilities: "Beautiful Surrey countryside tennis center with 8 courts (grass, hard, clay), clubhouse, fitness room, and pro shop.",
    courtSurfaces: ["Grass", "Hard", "Clay"],
    notableAlumni: [],
    description: "The Annabel Croft Tennis Academy in Surrey offers high-quality coaching in a picturesque English countryside setting. Led by former British No. 1 Annabel Croft, it provides programs for all ages and levels.",
    nearbyHotels: [
      { name: "Pennyhill Park Hotel & Spa", stars: 5, distanceKm: 5, features: ["Spa", "Gardens"], pool: true, wifi: true, pricePerNight: 280 },
      { name: "Brooklands Hotel", stars: 4, distanceKm: 10, features: ["Modern", "Lakeside"], pool: true, wifi: true, pricePerNight: 150 },
      { name: "Premier Inn Guildford", stars: 3, distanceKm: 8, features: ["Budget", "Reliable"], pool: false, wifi: true, pricePerNight: 70 },
      { name: "The Manor House Hotel", stars: 3, distanceKm: 6, features: ["Countryside", "Charming"], pool: false, wifi: true, pricePerNight: 95 },
      { name: "Holiday Inn Guildford", stars: 3, distanceKm: 8, features: ["Family", "Restaurant"], pool: true, wifi: true, pricePerNight: 85 }
    ],
    nearbyRestaurants: [
      { name: "The Stag on the River", cuisine: "British Gastropub", distanceKm: 3, priceRange: "\u00a3\u00a3\u00a3", rating: 4.4, vegetarian: true, outdoor: true },
      { name: "Sorrel Restaurant", cuisine: "Modern European", distanceKm: 8, priceRange: "\u00a3\u00a3\u00a3\u00a3", rating: 4.8, vegetarian: true, outdoor: false },
      { name: "The Ivy Castle View", cuisine: "British", distanceKm: 8, priceRange: "\u00a3\u00a3\u00a3", rating: 4.3, vegetarian: true, outdoor: true },
      { name: "Wagamama Guildford", cuisine: "Asian", distanceKm: 8, priceRange: "\u00a3\u00a3", rating: 4.1, vegetarian: true, outdoor: false },
      { name: "The Anchor Pub", cuisine: "Pub Food", distanceKm: 4, priceRange: "\u00a3\u00a3", rating: 4.2, vegetarian: true, outdoor: true }
    ],
    nearbyMedical: [
      { name: "Royal Surrey County Hospital", type: "General Hospital", distanceKm: 8, phone: "+44 1483 571 122", emergency: true },
      { name: "Nuffield Health Guildford", type: "Private Hospital", distanceKm: 8, phone: "+44 1483 555 800", emergency: false },
      { name: "Boots Pharmacy", type: "Pharmacy", distanceKm: 3, phone: "+44 1483 555 456", emergency: false }
    ],
    costOfLiving: { rent1Bed: 1000, meal: 13, monthlyFood: 350, transport: 100, currency: "GBP", summary: "Surrey is an affluent area with moderate-to-high living costs, lower than central London." },
    scholarships: { available: false, details: "No formal scholarship program currently available." },
    visaInfo: { schengen: false, eu: false, visaFreeCountries: "EU/EEA citizens can visit visa-free for 6 months. US, Canada, Australia citizens can visit for up to 6 months.", notes: "UK is not part of the Schengen Area or EU. Standard Visitor visa or Student visa required for long stays." },
    airportTransfers: [
      { mode: "Private Transfer", duration: "35 min", cost: "\u00a350-70", notes: "Pre-bookable transfer service" },
      { mode: "Taxi", duration: "35 min", cost: "\u00a345-60", notes: "Available at Heathrow" },
      { mode: "Train + Taxi", duration: "1h", cost: "\u00a320-30", notes: "Train to Guildford, then local taxi" }
    ],
    nearbyTournaments: [
      { name: "Wimbledon", level: "Grand Slam", surface: "Grass", month: "July", venue: "All England Club, London" },
      { name: "Surbiton Trophy", level: "ATP Challenger", surface: "Grass", month: "June", venue: "Surbiton" }
    ],
    videoTour: null
  },
  {
    id: "waske-tennis-university",
    name: "Alexander Waske Tennis University",
    country: "Germany",
    countryFlag: "\u{1F1E9}\u{1F1EA}",
    city: "Offenbach",
    lat: 50.0956, lng: 8.7761,
    website: "https://www.waske-tennis-university.de",
    contact: "+49 69 800 800 60",
    individualLessons: true,
    boarding: true,
    level: "Elite",
    starred: false,
    airport: { name: "Frankfurt Airport", code: "FRA", distance: "15 km", driveTime: "20 min" },
    beach: { distance: "500 km", description: "North Sea and Baltic Sea beaches; local lake swimming available" },
    climate: "offenbach",
    priceRange: { from: 800, to: 3500, unit: "week", display: "\u20ac800 - \u20ac3,500 / week" },
    programs: [
      { name: "Full-Time Academy", price: "\u20ac2,500/month", desc: "Comprehensive full-time training for competitive players" },
      { name: "Pro Training", price: "\u20ac3,500/month", desc: "Elite program for professional tour players" },
      { name: "Weekly Training Camp", price: "\u20ac800/week", desc: "Intensive short-term training camps" }
    ],
    coaches: [
      { name: "Alexander Waske", credential: "Former ATP Player & Elite Coach", background: "Former ATP professional who has coached multiple top-100 players. Known for developing German tennis talent.", atpWta: "ATP", bestRanking: 158, rankingNote: "Career-high ATP No. 158; coached multiple top-100 players", languages: ["German", "English"], instagram: null },
      { name: "Boris Becker (advisor)", credential: "Former World No. 1", background: "Six-time Grand Slam champion and youngest-ever Wimbledon winner. Serves as advisor and occasional coach.", atpWta: "ATP", bestRanking: 1, rankingNote: "Former World No. 1, 6 Grand Slams", languages: ["German", "English"], instagram: null }
    ],
    bestCoachRanking: 1,
    coachedTopPlayer: true,
    facilities: "Modern indoor/outdoor tennis facility with 12 courts (hard, clay, indoor), fitness center, video analysis suite, and player lounge.",
    courtSurfaces: ["Hard", "Clay", "Indoor Hard"],
    notableAlumni: ["Alexander Zverev (trained)", "Andrea Petkovic (trained)"],
    description: "Alexander Waske Tennis University near Frankfurt is one of Germany's premier tennis academies. It has been instrumental in developing German tennis talent, with a focus on combining technical excellence with mental toughness.",
    nearbyHotels: [
      { name: "Sheraton Offenbach", stars: 4, distanceKm: 2, features: ["Business", "Modern"], pool: true, wifi: true, pricePerNight: 120 },
      { name: "Holiday Inn Frankfurt Airport", stars: 4, distanceKm: 12, features: ["Airport", "Shuttle"], pool: true, wifi: true, pricePerNight: 110 },
      { name: "B&B Hotel Frankfurt-Hbf", stars: 2, distanceKm: 10, features: ["Budget", "Central"], pool: false, wifi: true, pricePerNight: 55 },
      { name: "NH Frankfurt City", stars: 4, distanceKm: 10, features: ["City center", "Restaurant"], pool: false, wifi: true, pricePerNight: 100 },
      { name: "Achat Hotel Offenbach", stars: 3, distanceKm: 1, features: ["Local", "Comfortable"], pool: false, wifi: true, pricePerNight: 70 }
    ],
    nearbyRestaurants: [
      { name: "Apfelwein Wagner", cuisine: "German", distanceKm: 10, priceRange: "\u20ac\u20ac", rating: 4.4, vegetarian: true, outdoor: true },
      { name: "Zum Gemalten Haus", cuisine: "German Traditional", distanceKm: 10, priceRange: "\u20ac\u20ac", rating: 4.3, vegetarian: false, outdoor: true },
      { name: "Maxie Eisen", cuisine: "Jewish Deli", distanceKm: 10, priceRange: "\u20ac\u20ac\u20ac", rating: 4.5, vegetarian: true, outdoor: false },
      { name: "Restaurant Hafenk\u00fcche", cuisine: "Modern German", distanceKm: 8, priceRange: "\u20ac\u20ac\u20ac", rating: 4.4, vegetarian: true, outdoor: true },
      { name: "Pizzeria Da Cimino", cuisine: "Italian", distanceKm: 2, priceRange: "\u20ac", rating: 4.6, vegetarian: true, outdoor: false }
    ],
    nearbyMedical: [
      { name: "Sana Klinikum Offenbach", type: "General Hospital", distanceKm: 3, phone: "+49 69 8405 0", emergency: true },
      { name: "Universit\u00e4tsklinikum Frankfurt", type: "University Hospital", distanceKm: 10, phone: "+49 69 6301 0", emergency: true },
      { name: "Apotheke Offenbach Marktplatz", type: "Pharmacy", distanceKm: 2, phone: "+49 69 812 345", emergency: false }
    ],
    costOfLiving: { rent1Bed: 800, meal: 10, monthlyFood: 300, transport: 90, currency: "EUR", summary: "Offenbach is more affordable than nearby Frankfurt, with good transport links to the city." },
    scholarships: { available: true, details: "Limited scholarships available for exceptional German and international tennis talents." },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: "EU/EEA citizens can live and work freely. US, Canada, Australia, and many others can visit visa-free for 90 days.", notes: "Germany is part of the Schengen Area. Student and training visas available for long-term programs." },
    airportTransfers: [
      { mode: "S-Bahn Train", duration: "20 min", cost: "\u20ac5-8", notes: "Direct S-Bahn from Frankfurt Airport to Offenbach" },
      { mode: "Taxi", duration: "20 min", cost: "\u20ac30-40", notes: "Available at Frankfurt Airport" },
      { mode: "Private Transfer", duration: "20 min", cost: "\u20ac40-50", notes: "Pre-bookable transfer service" }
    ],
    nearbyTournaments: [
      { name: "Hamburg European Open", level: "ATP 500", surface: "Clay", month: "July", venue: "Hamburg" },
      { name: "Halle Open", level: "ATP 500", surface: "Grass", month: "June", venue: "Halle" }
    ],
    videoTour: null
  },
  {
    id: "tennis-base-oberhaching",
    name: "Tennis Base Oberhaching",
    country: "Germany",
    countryFlag: "\u{1F1E9}\u{1F1EA}",
    city: "Oberhaching",
    lat: 48.0200, lng: 11.5900,
    website: "https://www.tennisbase-oberhaching.de",
    contact: "+49 89 613 470",
    individualLessons: true,
    boarding: true,
    level: "Elite",
    starred: false,
    airport: { name: "Munich Airport", code: "MUC", distance: "45 km", driveTime: "40 min" },
    beach: { distance: "100 km", description: "Bavarian lakes including Starnberger See and Tegernsee for swimming" },
    climate: "oberhaching",
    priceRange: { from: 700, to: 3000, unit: "week", display: "\u20ac700 - \u20ac3,000 / week" },
    programs: [
      { name: "Bundesst\u00fctzpunkt Training", price: "\u20ac2,000/month", desc: "National training base program for top German players" },
      { name: "Junior Development", price: "\u20ac700/week", desc: "Development program for talented young players" },
      { name: "Pro Player Support", price: "\u20ac3,000/month", desc: "Comprehensive support for touring professionals" }
    ],
    coaches: [
      { name: "Jan de Witt", credential: "German Tennis Federation Coach", background: "DTB national coach who has developed multiple top-100 German players. Key figure in German tennis development.", atpWta: "ATP", bestRanking: null, rankingNote: "Coached multiple top-100 German players", languages: ["German", "English", "Dutch"], instagram: null },
      { name: "Barbara Rittner", credential: "Former WTA Player & Fed Cup Captain", background: "Former German Fed Cup captain and WTA player. Instrumental in developing women's tennis in Germany.", atpWta: "WTA", bestRanking: 24, rankingNote: "Career-high WTA No. 24", languages: ["German", "English"], instagram: null }
    ],
    bestCoachRanking: 24,
    facilities: "German Tennis Federation training base with 14 courts (clay, hard, indoor), sports science center, gym, and athlete housing.",
    courtSurfaces: ["Clay", "Hard", "Indoor Hard"],
    notableAlumni: ["Alexander Zverev", "Angelique Kerber (trained)", "Julia G\u00f6rges (trained)"],
    description: "Tennis Base Oberhaching is the Bundesst\u00fctzpunkt (national training center) of the German Tennis Federation near Munich. It serves as a key development center for Germany's top tennis talents.",
    nearbyHotels: [
      { name: "Hotel Lichtblick", stars: 3, distanceKm: 1, features: ["Local", "Quiet"], pool: false, wifi: true, pricePerNight: 80 },
      { name: "Holiday Inn Munich South", stars: 4, distanceKm: 8, features: ["Modern", "Restaurant"], pool: true, wifi: true, pricePerNight: 100 },
      { name: "Hotel Grenzw\u00e4lder Hof", stars: 3, distanceKm: 5, features: ["Bavarian style", "Garden"], pool: false, wifi: true, pricePerNight: 75 },
      { name: "Hilton Munich Park", stars: 4, distanceKm: 15, features: ["City views", "Spa"], pool: true, wifi: true, pricePerNight: 160 },
      { name: "ibis M\u00fcnchen City Süd", stars: 2, distanceKm: 12, features: ["Budget", "Metro access"], pool: false, wifi: true, pricePerNight: 60 }
    ],
    nearbyRestaurants: [
      { name: "Gasthof zur Post", cuisine: "Bavarian", distanceKm: 1, priceRange: "\u20ac\u20ac", rating: 4.3, vegetarian: true, outdoor: true },
      { name: "Brauerei Aying", cuisine: "Bavarian", distanceKm: 5, priceRange: "\u20ac\u20ac", rating: 4.5, vegetarian: true, outdoor: true },
      { name: "Augustiner-Keller", cuisine: "German Beer Garden", distanceKm: 15, priceRange: "\u20ac\u20ac", rating: 4.6, vegetarian: true, outdoor: true },
      { name: "Hofbr\u00e4uhaus", cuisine: "Traditional Bavarian", distanceKm: 15, priceRange: "\u20ac\u20ac", rating: 4.2, vegetarian: true, outdoor: true },
      { name: "Tantris", cuisine: "Fine Dining", distanceKm: 15, priceRange: "\u20ac\u20ac\u20ac\u20ac", rating: 4.8, vegetarian: true, outdoor: false }
    ],
    nearbyMedical: [
      { name: "Klinikum M\u00fcnchen S\u00fcd", type: "General Hospital", distanceKm: 10, phone: "+49 89 6210 0", emergency: true },
      { name: "Sportmedizin Oberhaching", type: "Sports Medicine", distanceKm: 1, phone: "+49 89 613 555", emergency: false },
      { name: "Apotheke Oberhaching", type: "Pharmacy", distanceKm: 1, phone: "+49 89 613 222", emergency: false }
    ],
    costOfLiving: { rent1Bed: 900, meal: 11, monthlyFood: 300, transport: 80, currency: "EUR", summary: "Oberhaching is a suburban area near Munich with moderate costs compared to the city center." },
    scholarships: { available: true, details: "German Tennis Federation provides support and funding for selected national-level players." },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: "EU/EEA citizens can live and work freely. US, Canada, Australia, and many others can visit visa-free for 90 days.", notes: "Germany is part of the Schengen Area. Student and training visas available." },
    airportTransfers: [
      { mode: "S-Bahn + Bus", duration: "50 min", cost: "\u20ac12", notes: "S-Bahn from Munich Airport, then local bus" },
      { mode: "Taxi", duration: "40 min", cost: "\u20ac70-90", notes: "Available at Munich Airport" },
      { mode: "Private Transfer", duration: "40 min", cost: "\u20ac80-100", notes: "Pre-bookable shuttle service" }
    ],
    nearbyTournaments: [
      { name: "BMW Open Munich", level: "ATP 250", surface: "Clay", month: "April", venue: "Munich" },
      { name: "Halle Open", level: "ATP 500", surface: "Grass", month: "June", venue: "Halle" }
    ],
    videoTour: null
  },
  {
    id: "piatti-tennis-center",
    name: "Piatti Tennis Center",
    country: "Italy",
    countryFlag: "\u{1F1EE}\u{1F1F9}",
    city: "Bordighera",
    lat: 43.7814, lng: 7.6731,
    website: "https://www.piatti.com",
    contact: "+39 0184 264 490",
    individualLessons: true,
    boarding: true,
    level: "Elite",
    starred: true,
    airport: { name: "Nice C\u00f4te d'Azur Airport", code: "NCE", distance: "40 km", driveTime: "35 min" },
    beach: { distance: "1 km", description: "Beautiful Ligurian Riviera beaches with Mediterranean charm" },
    climate: "bordighera",
    priceRange: { from: 1000, to: 4500, unit: "week", display: "\u20ac1,000 - \u20ac4,500 / week" },
    programs: [
      { name: "Weekly Intensive", price: "\u20ac1,000/week", desc: "Intensive training week for competitive players" },
      { name: "Full-Time Academy", price: "\u20ac3,500/month", desc: "Year-round professional training program" },
      { name: "Pro Tour Support", price: "\u20ac4,500/month", desc: "Complete support package for touring professionals" }
    ],
    coaches: [
      { name: "Riccardo Piatti", credential: "Elite Tennis Coach", background: "One of the most renowned coaches in world tennis. Coached Novak Djokovic, Jannik Sinner, Milos Raonic, and many other top players.", atpWta: "ATP", bestRanking: 1, rankingNote: "Coached Novak Djokovic (World No. 1) and Jannik Sinner (World No. 1)", languages: ["Italian", "English", "French"], instagram: null },
      { name: "Cristian Brandi", credential: "Head Coach", background: "Senior coach at Piatti Tennis Center with extensive experience in developing elite junior and professional players.", atpWta: "ATP", bestRanking: null, rankingNote: null, languages: ["Italian", "English"], instagram: null }
    ],
    bestCoachRanking: 1,
    coachedTopPlayer: true,
    facilities: "Mediterranean training center with 12 courts (clay, hard), fitness center, physiotherapy clinic, video analysis, and nearby accommodation.",
    courtSurfaces: ["Clay", "Hard"],
    notableAlumni: ["Jannik Sinner", "Novak Djokovic (trained)", "Milos Raonic (trained)", "Borna Coric (trained)"],
    description: "The Piatti Tennis Center in Bordighera is one of the world's most respected tennis academies. Under the guidance of legendary coach Riccardo Piatti, it has produced and trained numerous top-10 players, including World No. 1 Jannik Sinner.",
    nearbyHotels: [
      { name: "Hotel Parigi", stars: 4, distanceKm: 0.5, features: ["Sea views", "Garden"], pool: true, wifi: true, pricePerNight: 130 },
      { name: "Hotel Villa Elisa", stars: 3, distanceKm: 1, features: ["Central", "Charming"], pool: false, wifi: true, pricePerNight: 80 },
      { name: "Grand Hotel del Mare", stars: 5, distanceKm: 2, features: ["Luxury", "Beachfront"], pool: true, wifi: true, pricePerNight: 250 },
      { name: "Hotel Primavera", stars: 3, distanceKm: 0.5, features: ["Quiet", "Family-run"], pool: false, wifi: true, pricePerNight: 70 },
      { name: "Hotel Aurora", stars: 3, distanceKm: 1, features: ["Sea views", "Terrace"], pool: false, wifi: true, pricePerNight: 75 }
    ],
    nearbyRestaurants: [
      { name: "Ristorante Magiarg\u00e9", cuisine: "Ligurian", distanceKm: 0.5, priceRange: "\u20ac\u20ac\u20ac", rating: 4.6, vegetarian: true, outdoor: true },
      { name: "La Via Romana", cuisine: "Italian", distanceKm: 1, priceRange: "\u20ac\u20ac", rating: 4.4, vegetarian: true, outdoor: true },
      { name: "Ristorante Chez Louis", cuisine: "Seafood", distanceKm: 1.5, priceRange: "\u20ac\u20ac\u20ac", rating: 4.5, vegetarian: false, outdoor: true },
      { name: "Pizzeria La Piazzetta", cuisine: "Italian Pizza", distanceKm: 0.5, priceRange: "\u20ac", rating: 4.3, vegetarian: true, outdoor: true },
      { name: "Trattoria del Porto", cuisine: "Mediterranean Seafood", distanceKm: 2, priceRange: "\u20ac\u20ac\u20ac", rating: 4.5, vegetarian: false, outdoor: true }
    ],
    nearbyMedical: [
      { name: "Ospedale di Bordighera", type: "General Hospital", distanceKm: 1, phone: "+39 0184 275 111", emergency: true },
      { name: "Farmacia Centrale Bordighera", type: "Pharmacy", distanceKm: 0.5, phone: "+39 0184 261 234", emergency: false },
      { name: "Guardia Medica", type: "Emergency Doctor", distanceKm: 1, phone: "+39 0184 275 555", emergency: true }
    ],
    costOfLiving: { rent1Bed: 600, meal: 12, monthlyFood: 300, transport: 35, currency: "EUR", summary: "Bordighera offers a pleasant Riviera lifestyle at lower costs than the French Riviera nearby." },
    scholarships: { available: true, details: "Selective scholarships for exceptionally talented junior players with competitive results." },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: "EU/EEA citizens can live and work freely. US, Canada, Australia, and many others can visit visa-free for 90 days.", notes: "Italy is part of the Schengen Area. Student visas available for long-term training." },
    airportTransfers: [
      { mode: "Private Transfer", duration: "35 min", cost: "\u20ac50-70", notes: "Transfer from Nice airport to Bordighera" },
      { mode: "Train", duration: "50 min", cost: "\u20ac10-15", notes: "Train from Nice to Bordighera station" },
      { mode: "Taxi", duration: "35 min", cost: "\u20ac60-80", notes: "Available at Nice airport" }
    ],
    nearbyTournaments: [
      { name: "Rolex Monte-Carlo Masters", level: "ATP 1000", surface: "Clay", month: "April", venue: "Monte Carlo" },
      { name: "Internazionali BNL d'Italia", level: "ATP 1000", surface: "Clay", month: "May", venue: "Rome" }
    ],
    videoTour: "https://www.youtube.com/watch?v=piattitenniscenter"
  },
  {
    id: "tennis-club-parioli",
    name: "Tennis Club Parioli",
    country: "Italy",
    countryFlag: "\u{1F1EE}\u{1F1F9}",
    city: "Rome",
    lat: 41.9241, lng: 12.4922,
    website: "https://www.tennisclubparioli.it",
    contact: "+39 06 808 3104",
    individualLessons: true,
    boarding: false,
    level: "All levels",
    starred: false,
    airport: { name: "Rome Fiumicino Airport", code: "FCO", distance: "30 km", driveTime: "40 min" },
    beach: { distance: "25 km", description: "Ostia and Fregene beaches on the Tyrrhenian Sea" },
    climate: "rome",
    priceRange: { from: 500, to: 2000, unit: "week", display: "\u20ac500 - \u20ac2,000 / week" },
    programs: [
      { name: "Private Coaching", price: "\u20ac80/hour", desc: "One-on-one coaching with top Italian coaches" },
      { name: "Group Intensive", price: "\u20ac500/week", desc: "Intensive group training for all levels" },
      { name: "Competition Program", price: "\u20ac2,000/month", desc: "Tournament preparation for competitive players" }
    ],
    coaches: [
      { name: "Vincenzo Santopadre", credential: "Coach of Matteo Berrettini", background: "Developed Matteo Berrettini into a Wimbledon finalist and top-10 player. One of Italy's most successful modern coaches.", atpWta: "ATP", bestRanking: 6, rankingNote: "Coached Berrettini to career-high No. 6", languages: ["Italian", "English"], instagram: null },
      { name: "Marco Panichi", credential: "Fitness & Tennis Coach", background: "Former fitness coach for Novak Djokovic. Expert in physical preparation for elite tennis.", atpWta: "ATP", bestRanking: 1, rankingNote: "Fitness coach for Djokovic (World No. 1)", languages: ["Italian", "English", "Serbian"], instagram: null }
    ],
    bestCoachRanking: 1,
    coachedTopPlayer: true,
    facilities: "Historic Roman tennis club with 10 courts (clay, hard), clubhouse, restaurant, fitness area, and pro shop in the elegant Parioli neighborhood.",
    courtSurfaces: ["Clay", "Hard"],
    notableAlumni: ["Matteo Berrettini"],
    description: "Tennis Club Parioli is one of Rome's most prestigious tennis clubs, located in the upscale Parioli neighborhood. It is best known as the home club of Matteo Berrettini and features excellent clay court facilities in the heart of the Italian capital.",
    nearbyHotels: [
      { name: "Hotel Lord Byron", stars: 5, distanceKm: 1, features: ["Art Deco", "Restaurant"], pool: false, wifi: true, pricePerNight: 300 },
      { name: "Hotel Parco dei Principi", stars: 5, distanceKm: 1.5, features: ["Park views", "Pool"], pool: true, wifi: true, pricePerNight: 250 },
      { name: "Rome Cavalieri Waldorf Astoria", stars: 5, distanceKm: 4, features: ["Hilltop", "Spa"], pool: true, wifi: true, pricePerNight: 400 },
      { name: "Hotel Villa Mangili", stars: 4, distanceKm: 0.5, features: ["Boutique", "Quiet"], pool: false, wifi: true, pricePerNight: 150 },
      { name: "Hotel Parioli", stars: 3, distanceKm: 0.3, features: ["Local", "Convenient"], pool: false, wifi: true, pricePerNight: 90 }
    ],
    nearbyRestaurants: [
      { name: "Metamorfosi", cuisine: "Modern Italian", distanceKm: 1, priceRange: "\u20ac\u20ac\u20ac\u20ac", rating: 4.7, vegetarian: true, outdoor: false },
      { name: "Trattoria Pennestri", cuisine: "Roman", distanceKm: 5, priceRange: "\u20ac\u20ac", rating: 4.5, vegetarian: true, outdoor: true },
      { name: "Pizzeria La Montecarlo", cuisine: "Pizza", distanceKm: 4, priceRange: "\u20ac", rating: 4.4, vegetarian: true, outdoor: true },
      { name: "Da Enzo al 29", cuisine: "Roman Trattoria", distanceKm: 5, priceRange: "\u20ac\u20ac", rating: 4.7, vegetarian: true, outdoor: true },
      { name: "Il Pagliaccio", cuisine: "Fine Dining", distanceKm: 4, priceRange: "\u20ac\u20ac\u20ac\u20ac", rating: 4.8, vegetarian: true, outdoor: false }
    ],
    nearbyMedical: [
      { name: "Policlinico Umberto I", type: "University Hospital", distanceKm: 3, phone: "+39 06 499 71", emergency: true },
      { name: "Farmacia Parioli", type: "Pharmacy", distanceKm: 0.3, phone: "+39 06 807 1234", emergency: false },
      { name: "Ospedale Sant'Andrea", type: "General Hospital", distanceKm: 8, phone: "+39 06 3377 1", emergency: true }
    ],
    costOfLiving: { rent1Bed: 1000, meal: 12, monthlyFood: 350, transport: 35, currency: "EUR", summary: "Rome offers a relatively affordable Mediterranean capital city experience with excellent food and culture." },
    scholarships: { available: false, details: "No formal scholarship program. Contact the club for potential arrangements." },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: "EU/EEA citizens can live and work freely. US, Canada, Australia, and many others can visit visa-free for 90 days.", notes: "Italy is part of the Schengen Area. Student and athlete visas available." },
    airportTransfers: [
      { mode: "Leonardo Express", duration: "30 min", cost: "\u20ac14", notes: "Direct train from Fiumicino to Termini station" },
      { mode: "Taxi", duration: "40 min", cost: "\u20ac48", notes: "Flat rate from Fiumicino to central Rome" },
      { mode: "Bus (SIT Shuttle)", duration: "50 min", cost: "\u20ac7", notes: "Shuttle bus from airport to city center" }
    ],
    nearbyTournaments: [
      { name: "Internazionali BNL d'Italia", level: "ATP/WTA 1000", surface: "Clay", month: "May", venue: "Foro Italico, Rome" },
      { name: "Sardegna Open", level: "ATP 250", surface: "Clay", month: "April", venue: "Cagliari" }
    ],
    videoTour: null
  },
  {
    id: "knltb-national-centre",
    name: "KNLTB National Tennis Centre",
    country: "Netherlands",
    countryFlag: "\u{1F1F3}\u{1F1F1}",
    city: "Amstelveen",
    lat: 52.3013, lng: 4.8580,
    website: "https://www.knltb.nl",
    contact: "+31 20 545 5000",
    individualLessons: true,
    boarding: false,
    level: "Elite",
    starred: false,
    airport: { name: "Amsterdam Schiphol Airport", code: "AMS", distance: "8 km", driveTime: "15 min" },
    beach: { distance: "30 km", description: "North Sea beaches at Zandvoort and Bloemendaal" },
    climate: "amstelveen",
    priceRange: { from: 700, to: 3000, unit: "week", display: "\u20ac700 - \u20ac3,000 / week" },
    programs: [
      { name: "National Training Program", price: "\u20ac2,500/month", desc: "Elite training for nationally ranked Dutch players" },
      { name: "International Training Week", price: "\u20ac700/week", desc: "Open training week for visiting international players" },
      { name: "Junior High Performance", price: "\u20ac3,000/month", desc: "Full-time high performance program for top juniors" }
    ],
    coaches: [
      { name: "Sven Groeneveld", credential: "Elite Tennis Coach", background: "Coached multiple Grand Slam champions including Maria Sharapova, Ana Ivanovic, and Caroline Wozniacki.", atpWta: "WTA", bestRanking: 1, rankingNote: "Coached Maria Sharapova (World No. 1)", languages: ["Dutch", "English", "German"], instagram: null },
      { name: "Dennis Schenk", credential: "KNLTB Head of Performance", background: "Head of performance tennis at the Dutch Tennis Federation with extensive coaching experience.", atpWta: null, bestRanking: null, rankingNote: null, languages: ["Dutch", "English"], instagram: null }
    ],
    bestCoachRanking: 1,
    coachedTopPlayer: true,
    facilities: "State-of-the-art national tennis center with 20 courts (indoor and outdoor hard, clay), sports science lab, fitness center, and recovery facilities.",
    courtSurfaces: ["Hard", "Clay", "Indoor Hard"],
    notableAlumni: ["Kiki Bertens", "Tim van Rijthoven"],
    description: "The KNLTB National Tennis Centre in Amstelveen is the home of Dutch tennis. It serves as the primary training and development facility for the Netherlands' top tennis players and is the base for the national team programs.",
    nearbyHotels: [
      { name: "NH Amsterdam Schiphol Airport", stars: 4, distanceKm: 7, features: ["Airport", "Modern"], pool: true, wifi: true, pricePerNight: 120 },
      { name: "citizenM Amstelveen", stars: 4, distanceKm: 2, features: ["Design", "Tech-savvy"], pool: false, wifi: true, pricePerNight: 100 },
      { name: "Ibis Amsterdam Centre", stars: 2, distanceKm: 10, features: ["Central", "Budget"], pool: false, wifi: true, pricePerNight: 80 },
      { name: "Hotel Okura Amsterdam", stars: 5, distanceKm: 8, features: ["Luxury", "Japanese"], pool: true, wifi: true, pricePerNight: 300 },
      { name: "Bastion Hotel Amstelveen", stars: 3, distanceKm: 1, features: ["Local", "Practical"], pool: false, wifi: true, pricePerNight: 75 }
    ],
    nearbyRestaurants: [
      { name: "De Jonge Dansen", cuisine: "Dutch", distanceKm: 2, priceRange: "\u20ac\u20ac\u20ac", rating: 4.4, vegetarian: true, outdoor: true },
      { name: "Restaurant Aan de Poel", cuisine: "French-Dutch", distanceKm: 2, priceRange: "\u20ac\u20ac\u20ac\u20ac", rating: 4.7, vegetarian: true, outdoor: true },
      { name: "Wok to Walk", cuisine: "Asian", distanceKm: 2, priceRange: "\u20ac", rating: 4.0, vegetarian: true, outdoor: false },
      { name: "De Kas", cuisine: "Farm-to-Table", distanceKm: 10, priceRange: "\u20ac\u20ac\u20ac\u20ac", rating: 4.8, vegetarian: true, outdoor: true },
      { name: "Pasta e Basta", cuisine: "Italian", distanceKm: 10, priceRange: "\u20ac\u20ac\u20ac", rating: 4.5, vegetarian: true, outdoor: false }
    ],
    nearbyMedical: [
      { name: "Ziekenhuis Amstelland", type: "General Hospital", distanceKm: 2, phone: "+31 20 755 0000", emergency: true },
      { name: "Apotheek Amstelveen", type: "Pharmacy", distanceKm: 1, phone: "+31 20 643 1234", emergency: false },
      { name: "VU Medisch Centrum", type: "University Hospital", distanceKm: 8, phone: "+31 20 444 4444", emergency: true }
    ],
    costOfLiving: { rent1Bed: 1100, meal: 13, monthlyFood: 350, transport: 90, currency: "EUR", summary: "Amstelveen is slightly more affordable than Amsterdam but well-connected to the capital." },
    scholarships: { available: true, details: "KNLTB provides support for talented Dutch players through its national development programs." },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: "EU/EEA citizens can live and work freely. US, Canada, Australia, and many others can visit visa-free for 90 days.", notes: "Netherlands is part of the Schengen Area. MVV and residence permits available for long-term stays." },
    airportTransfers: [
      { mode: "Bus/Tram", duration: "20 min", cost: "\u20ac4-5", notes: "Direct bus from Schiphol to Amstelveen" },
      { mode: "Taxi", duration: "15 min", cost: "\u20ac25-35", notes: "Available at Schiphol" },
      { mode: "Train + Bus", duration: "30 min", cost: "\u20ac5-8", notes: "Train to Amsterdam Zuid, then bus" }
    ],
    nearbyTournaments: [
      { name: "ABN AMRO Open", level: "ATP 500", surface: "Hard (Indoor)", month: "February", venue: "Rotterdam" },
      { name: "Libema Open", level: "ATP/WTA 250", surface: "Grass", month: "June", venue: "'s-Hertogenbosch" }
    ],
    videoTour: null
  },
  {
    id: "good-to-great-academy",
    name: "Good to Great Tennis Academy",
    country: "Sweden",
    countryFlag: "\u{1F1F8}\u{1F1EA}",
    city: "Stockholm",
    lat: 59.3293, lng: 18.0686,
    website: "https://www.goodtogreattennis.com",
    contact: "+46 8 545 678 90",
    individualLessons: true,
    boarding: true,
    level: "All levels",
    starred: false,
    airport: { name: "Stockholm Arlanda Airport", code: "ARN", distance: "40 km", driveTime: "35 min" },
    beach: { distance: "5 km", description: "Stockholm archipelago beaches and lakeside swimming spots" },
    climate: "stockholm",
    priceRange: { from: 900, to: 4000, unit: "week", display: "\u20ac900 - \u20ac4,000 / week" },
    programs: [
      { name: "Weekly Training Camp", price: "\u20ac900/week", desc: "Intensive training camps for visiting players" },
      { name: "Full-Time Academy", price: "\u20ac3,000/month", desc: "Year-round training combining tennis and academics" },
      { name: "Pro Development", price: "\u20ac4,000/month", desc: "Elite program for aspiring tour professionals" }
    ],
    coaches: [
      { name: "Magnus Norman", credential: "Former ATP No. 2", background: "Former World No. 2 and Roland Garros finalist. Successfully coached Robin S\u00f6derling and Stan Wawrinka to Grand Slam titles.", atpWta: "ATP", bestRanking: 2, rankingNote: "Former World No. 2, coached Wawrinka to 3 Grand Slams", languages: ["Swedish", "English"], instagram: null },
      { name: "Nicklas Kulti", credential: "Former ATP Player", background: "Former ATP professional and Swedish Davis Cup player. Experienced in developing Scandinavian tennis talent.", atpWta: "ATP", bestRanking: 40, rankingNote: "Career-high ATP No. 40", languages: ["Swedish", "English"], instagram: null }
    ],
    bestCoachRanking: 2,
    coachedTopPlayer: true,
    facilities: "Indoor/outdoor tennis facility with 14 courts (hard, clay, indoor), gym, sports science support, and player accommodation.",
    courtSurfaces: ["Hard", "Clay", "Indoor Hard"],
    notableAlumni: ["Robin S\u00f6derling (coached)", "Stan Wawrinka (coached)", "Elias Ymer"],
    description: "Good to Great Tennis Academy in Stockholm continues Sweden's rich tennis tradition. Led by former World No. 2 Magnus Norman, it has become one of Scandinavia's premier tennis development centers.",
    nearbyHotels: [
      { name: "Radisson Blu Waterfront", stars: 4, distanceKm: 5, features: ["Waterfront", "Modern"], pool: true, wifi: true, pricePerNight: 160 },
      { name: "Hotel Skeppsholmen", stars: 4, distanceKm: 5, features: ["Island", "Design"], pool: false, wifi: true, pricePerNight: 200 },
      { name: "Generator Stockholm", stars: 2, distanceKm: 5, features: ["Social", "Budget"], pool: false, wifi: true, pricePerNight: 50 },
      { name: "Scandic Anglais", stars: 4, distanceKm: 4, features: ["Central", "Restaurant"], pool: false, wifi: true, pricePerNight: 140 },
      { name: "Nordic Light Hotel", stars: 4, distanceKm: 5, features: ["Design", "Central"], pool: false, wifi: true, pricePerNight: 150 }
    ],
    nearbyRestaurants: [
      { name: "Ekstedt", cuisine: "Nordic", distanceKm: 5, priceRange: "\u20ac\u20ac\u20ac\u20ac", rating: 4.8, vegetarian: true, outdoor: false },
      { name: "Meatballs for the People", cuisine: "Swedish", distanceKm: 5, priceRange: "\u20ac\u20ac", rating: 4.4, vegetarian: true, outdoor: false },
      { name: "Fem Sm\u00e5 Hus", cuisine: "Swedish Traditional", distanceKm: 5, priceRange: "\u20ac\u20ac\u20ac", rating: 4.5, vegetarian: true, outdoor: false },
      { name: "Fotografiska Restaurant", cuisine: "Vegetarian", distanceKm: 4, priceRange: "\u20ac\u20ac\u20ac", rating: 4.6, vegetarian: true, outdoor: true },
      { name: "Eataly Stockholm", cuisine: "Italian", distanceKm: 5, priceRange: "\u20ac\u20ac", rating: 4.3, vegetarian: true, outdoor: false }
    ],
    nearbyMedical: [
      { name: "S\u00f6dersjukhuset", type: "General Hospital", distanceKm: 4, phone: "+46 8 616 1000", emergency: true },
      { name: "Apotek Hj\u00e4rtat", type: "Pharmacy", distanceKm: 1, phone: "+46 771 405 405", emergency: false },
      { name: "Karolinska Universitetssjukhuset", type: "University Hospital", distanceKm: 8, phone: "+46 8 517 700 00", emergency: true }
    ],
    costOfLiving: { rent1Bed: 1200, meal: 15, monthlyFood: 400, transport: 90, currency: "SEK", summary: "Stockholm is an expensive Scandinavian capital with high quality of life. Prices in SEK (1 EUR ~ 11 SEK)." },
    scholarships: { available: true, details: "Scholarships available through the Swedish Tennis Federation for nationally ranked players." },
    visaInfo: { schengen: true, eu: true, visaFreeCountries: "EU/EEA citizens can live and work freely. US, Canada, Australia, and many others can visit visa-free for 90 days.", notes: "Sweden is part of the Schengen Area. Residence permits available for long-term stays." },
    airportTransfers: [
      { mode: "Arlanda Express", duration: "20 min", cost: "\u20ac28", notes: "High-speed train from Arlanda to central Stockholm" },
      { mode: "Flygbussarna", duration: "45 min", cost: "\u20ac12", notes: "Airport coach to City Terminal" },
      { mode: "Taxi", duration: "35 min", cost: "\u20ac55-70", notes: "Fixed price taxi from Arlanda" }
    ],
    nearbyTournaments: [
      { name: "Stockholm Open", level: "ATP 250", surface: "Hard (Indoor)", month: "October", venue: "Stockholm" },
      { name: "Nordea Open", level: "ATP 250", surface: "Clay", month: "July", venue: "B\u00e5stad" }
    ],
    videoTour: null
  },
