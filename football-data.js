const SPORT_TYPE = 'football';

const ACADEMIES = [
    {
        id: 'fc-barcelona-la-masia',
    availability: { status: 'open', nextIntake: '2025-07-01', spotsLeft: 20, responseTime: '48h', privateLessons: true, yearRound: true },
        name: 'FC Barcelona La Masia',
        country: 'Spain',
        countryFlag: '🇪🇸',
        city: 'Barcelona',
        lat: 41.3809,
        lng: 2.1228,
        website: 'https://www.fcbarcelona.com/en/club/la-masia',
        contact: '+34 934 963 600',
        individualLessons: true,
        boarding: true,
        level: 'Elite',
        starred: true,
        airport: { name: 'Barcelona-El Prat Airport', code: 'BCN', distance: '18 km', driveTime: '25 min' },
        beach: { distance: 5, description: 'Barceloneta Beach, iconic Mediterranean coast' },
        climate: 'barcelona',
        priceRange: { from: 3000, to: 10000, unit: 'month', display: '€3,000–10,000/mo' },
        programs: [
                { name: 'Youth Development', price: '€3,000/mo', desc: 'Technical skills, tactical awareness, and positional play' },
                { name: 'Intensive Camp', price: '€5,000/mo', desc: 'Full-day sessions covering all aspects of modern football' },
                { name: 'Elite Performance', price: '€7,500/mo', desc: 'Advanced tactical training with video analysis' },
                { name: 'Professional Pathway', price: '€10,000/mo', desc: 'Comprehensive program for aspiring professionals' }
            ],
        coaches: [
                {
                        name: 'Jordi Gratacos',
                        credential: 'UEFA Pro License',
                        background: 'Former La Masia director, developed multiple first-team players',
                        atpWta: false,
                        bestRanking: null,
                        rankingNote: null,
                        languages: ['Spanish', 'Catalan', 'English'],
                        instagram: null
                    },
                {
                        name: 'Albert Puig',
                        credential: 'UEFA Pro License',
                        background: 'Youth development specialist, expert in positional play',
                        atpWta: false,
                        bestRanking: null,
                        rankingNote: null,
                        languages: ['Spanish', 'Catalan', 'English'],
                        instagram: null
                    }
            ],
        bestCoachRanking: null,
        facilities: '10 full-size pitches, indoor training center, gym, recovery center, video analysis rooms, residential building',
        courtSurfaces: ['Natural Grass', 'Artificial Turf', 'Indoor'],
        notableAlumni: ['Lionel Messi', 'Xavi Hernandez', 'Andres Iniesta', 'Sergio Busquets', 'Gerard Pique'],
        photos: [
          "https://picsum.photos/seed/fc-barcelona-la-masia-1/800/500",
          "https://picsum.photos/seed/fc-barcelona-la-masia-2/800/500",
          "https://picsum.photos/seed/fc-barcelona-la-masia-3/800/500",
          "https://picsum.photos/seed/fc-barcelona-la-masia-4/800/500",
          "https://picsum.photos/seed/fc-barcelona-la-masia-5/800/500"
        ],
        description: 'La Masia is one of the most prestigious football academies in the world, renowned for producing technically gifted players who embody the Barcelona philosophy.',
        nearbyHotels: [
                {
                        name: 'Hotel Arts Barcelona',
                        stars: 5,
                        distanceKm: 6,
                        features: ['Restaurant', 'Spa', 'Pool', 'Bar'],
                        pool: true,
                        wifi: true,
                        pricePerNight: '€250'
                    },
                {
                        name: 'Hotel Miramar Barcelona',
                        stars: 5,
                        distanceKm: 4,
                        features: ['Restaurant', 'Pool', 'Spa', 'Views'],
                        pool: true,
                        wifi: true,
                        pricePerNight: '€200'
                    },
                {
                        name: 'Hotel Catalonia Barcelona 505',
                        stars: 4,
                        distanceKm: 3,
                        features: ['Restaurant', 'Pool', 'Gym'],
                        pool: true,
                        wifi: true,
                        pricePerNight: '€120'
                    },
                {
                        name: 'Generator Barcelona',
                        stars: 3,
                        distanceKm: 5,
                        features: ['Bar', 'Terrace', 'Lounge'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€55'
                    },
                {
                        name: 'Hostal Grau',
                        stars: 2,
                        distanceKm: 4,
                        features: ['Central Location'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€40'
                    }
            ],
        nearbyRestaurants: [
                {
                        name: 'Can Culleretes',
                        cuisine: 'Catalan Traditional',
                        distanceKm: 4,
                        priceRange: '€€',
                        rating: 4.5,
                        vegetarian: true,
                        outdoor: false
                    },
                {
                        name: 'La Boqueria Market',
                        cuisine: 'Market Food',
                        distanceKm: 4.5,
                        priceRange: '€',
                        rating: 4.6,
                        vegetarian: true,
                        outdoor: true
                    },
                {
                        name: 'Cal Pep',
                        cuisine: 'Seafood Tapas',
                        distanceKm: 5,
                        priceRange: '€€€',
                        rating: 4.7,
                        vegetarian: false,
                        outdoor: false
                    },
                {
                        name: 'Cerveceria Catalana',
                        cuisine: 'Spanish Tapas',
                        distanceKm: 3.5,
                        priceRange: '€€',
                        rating: 4.4,
                        vegetarian: true,
                        outdoor: true
                    },
                {
                        name: 'Bar Celta Pulperia',
                        cuisine: 'Galician',
                        distanceKm: 4,
                        priceRange: '€€',
                        rating: 4.3,
                        vegetarian: false,
                        outdoor: true
                    }
            ],
        nearbyMedical: [
                { name: 'Hospital Clinic de Barcelona', type: 'Hospital', distanceKm: 2, phone: '+34 932 275 400', emergency: true },
                { name: 'Centro Medico Teknon', type: 'Clinic', distanceKm: 1.5, phone: '+34 933 906 000', emergency: true },
                { name: 'FisioSport Barcelona', type: 'Physiotherapy', distanceKm: 3, phone: '+34 934 123 456', emergency: false }
            ],
        costOfLiving: {
                rent1Bed: '€900',
                meal: '€12',
                monthlyFood: '€350',
                transport: '€40',
                currency: 'EUR',
                summary: 'Barcelona is moderately expensive with excellent quality of life'
            },
        scholarships: { available: true, details: 'Talent-based scholarships for exceptional young players. Contact La Masia directly.' },
        visaInfo: { schengen: true, eu: true, visaFreeCountries: 'EU/EEA citizens free entry, US/UK/Canada/Australia visa-free up to 90 days', notes: 'Schengen zone. Non-EU citizens need Schengen visa for stays over 90 days.' },
        airportTransfers: [
                { mode: 'Taxi', duration: '25 min', cost: '€30–40', notes: 'Available at airport terminal' },
                { mode: 'Aerobus', duration: '35 min', cost: '€6.75', notes: 'Direct service to Placa Catalunya' },
                { mode: 'Private Transfer', duration: '25 min', cost: '€50–70', notes: 'Pre-book online' }
            ],
        nearbyTournaments: [
                { name: 'Mediterranean International Cup', level: 'International Youth', surface: 'Natural Grass', month: 'June', venue: 'Various Barcelona venues' },
                { name: 'Copa Catalunya', level: 'Regional', surface: 'Natural Grass', month: 'May', venue: 'Various Catalonia venues' },
                { name: 'LaLiga Promises', level: 'National Youth', surface: 'Artificial Turf', month: 'March', venue: 'Villarreal' }
            ],
        upcomingCamps: [
            { name: "La Masia Summer Experience", startDate: "2025-07-07", endDate: "2025-07-18", price: "€2,500", level: "Advanced" },
            { name: "Easter Football Camp", startDate: "2025-04-14", endDate: "2025-04-18", price: "€1,200", level: "All Levels" },
            { name: "Autumn Skills Clinic", startDate: "2025-10-27", endDate: "2025-10-31", price: "€900", level: "Intermediate" }
        ],
        accommodation: {
            types: [
                { type: 'private', label: 'Private Room', pricePerWeek: 430, maxOccupancy: 1, bathType: 'ensuite', mealsIncluded: true },
                { type: 'twin', label: 'Twin Room', pricePerWeek: 280, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
                { type: 'triple', label: 'Triple Room', pricePerWeek: 220, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true },
                { type: 'quad', label: 'Quad Room', pricePerWeek: 185, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true },
                { type: 'dorm', label: 'Youth Dormitory', pricePerWeek: 140, maxOccupancy: 6, bathType: 'shared', mealsIncluded: true }
            ],
            companionsAllowed: true,
            childrenAllowed: true,
            minStay: 1,
            shuttleToTraining: false,
            notes: 'Training pitch adjacent to accommodation at La Masia residence'
        },
        videoTour: null
    },
    {
        id: 'real-madrid-fabrica',
    availability: { status: 'closed', nextIntake: '2025-12-01', spotsLeft: null, responseTime: '3-5 days', privateLessons: true, yearRound: false },
        name: 'Real Madrid Fabrica',
        country: 'Spain',
        countryFlag: '🇪🇸',
        city: 'Madrid',
        lat: 40.4531,
        lng: -3.6883,
        website: 'https://www.realmadrid.com/en/football/academy',
        contact: '+34 913 984 300',
        individualLessons: true,
        boarding: true,
        level: 'Elite',
        starred: true,
        airport: { name: 'Adolfo Suarez Madrid-Barajas Airport', code: 'MAD', distance: '15 km', driveTime: '20 min' },
        beach: { distance: null, description: 'No nearby beach, urban location in central Spain' },
        climate: 'madrid',
        priceRange: { from: 3000, to: 10000, unit: 'month', display: '€3,000–10,000/mo' },
        programs: [
                { name: 'Youth Development', price: '€3,000/mo', desc: 'Fundamental skills, tactical concepts, and match play' },
                { name: 'High Performance', price: '€5,500/mo', desc: 'Intensive training with advanced technical work' },
                { name: 'Elite Squad', price: '€8,000/mo', desc: 'Top-tier program with professional pathway focus' },
                { name: 'Private Coaching', price: '€10,000/mo', desc: 'One-on-one sessions with elite coaching staff' }
            ],
        coaches: [
                {
                        name: 'Raul Gonzalez',
                        credential: 'UEFA Pro License',
                        background: 'Real Madrid legend, Castilla head coach',
                        atpWta: false,
                        bestRanking: null,
                        rankingNote: null,
                        languages: ['Spanish', 'English'],
                        instagram: null
                    },
                {
                        name: 'Alvaro Arbeloa',
                        credential: 'UEFA A License',
                        background: 'Former Real Madrid and Spain defender, youth development',
                        atpWta: false,
                        bestRanking: null,
                        rankingNote: null,
                        languages: ['Spanish', 'English'],
                        instagram: null
                    }
            ],
        bestCoachRanking: null,
        facilities: '12 training pitches, Ciudad Real Madrid complex, gym, medical center, residence, media rooms',
        courtSurfaces: ['Natural Grass', 'Artificial Turf', 'Indoor'],
        notableAlumni: ['Raul Gonzalez', 'Iker Casillas', 'Emilio Butragueno', 'Alvaro Arbeloa', 'Dani Carvajal'],
        photos: [
          "https://picsum.photos/seed/real-madrid-fabrica-1/800/500",
          "https://picsum.photos/seed/real-madrid-fabrica-2/800/500",
          "https://picsum.photos/seed/real-madrid-fabrica-3/800/500",
          "https://picsum.photos/seed/real-madrid-fabrica-4/800/500"
        ],
        description: 'Real Madrid Fabrica is the youth academy of the most decorated club in European football history, producing world-class talent at Ciudad Real Madrid.',
        nearbyHotels: [
                {
                        name: 'VP Plaza Espana Design',
                        stars: 5,
                        distanceKm: 10,
                        features: ['Restaurant', 'Rooftop Bar', 'Spa', 'Pool'],
                        pool: true,
                        wifi: true,
                        pricePerNight: '€220'
                    },
                {
                        name: 'Hotel Riu Plaza Espana',
                        stars: 4,
                        distanceKm: 10,
                        features: ['Restaurant', 'Pool', 'Gym'],
                        pool: true,
                        wifi: true,
                        pricePerNight: '€150'
                    },
                {
                        name: 'NH Madrid Ventas',
                        stars: 4,
                        distanceKm: 8,
                        features: ['Restaurant', 'Bar', 'Parking'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€90'
                    },
                {
                        name: 'Hotel Mayorazgo',
                        stars: 3,
                        distanceKm: 11,
                        features: ['Restaurant', 'Bar'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€70'
                    },
                {
                        name: 'Hostal Barrera',
                        stars: 2,
                        distanceKm: 9,
                        features: ['Central Location'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€45'
                    }
            ],
        nearbyRestaurants: [
                {
                        name: 'Sobrino de Botin',
                        cuisine: 'Spanish Traditional',
                        distanceKm: 10,
                        priceRange: '€€€',
                        rating: 4.6,
                        vegetarian: false,
                        outdoor: false
                    },
                {
                        name: 'Mercado de San Miguel',
                        cuisine: 'Market Food',
                        distanceKm: 10,
                        priceRange: '€€',
                        rating: 4.5,
                        vegetarian: true,
                        outdoor: false
                    },
                {
                        name: 'La Barraca',
                        cuisine: 'Paella / Seafood',
                        distanceKm: 9,
                        priceRange: '€€€',
                        rating: 4.4,
                        vegetarian: false,
                        outdoor: true
                    },
                {
                        name: 'Lateral Castellana',
                        cuisine: 'Mediterranean',
                        distanceKm: 7,
                        priceRange: '€€',
                        rating: 4.3,
                        vegetarian: true,
                        outdoor: true
                    },
                {
                        name: 'Casa Lucio',
                        cuisine: 'Castilian',
                        distanceKm: 10,
                        priceRange: '€€€',
                        rating: 4.5,
                        vegetarian: false,
                        outdoor: false
                    }
            ],
        nearbyMedical: [
                { name: 'Hospital Universitario La Paz', type: 'Hospital', distanceKm: 5, phone: '+34 917 277 000', emergency: true },
                { name: 'Clinica La Luz', type: 'Clinic', distanceKm: 8, phone: '+34 914 530 200', emergency: true },
                { name: 'Fisioterapia Madrid', type: 'Physiotherapy', distanceKm: 6, phone: '+34 915 678 900', emergency: false }
            ],
        costOfLiving: {
                rent1Bed: '€850',
                meal: '€12',
                monthlyFood: '€320',
                transport: '€55',
                currency: 'EUR',
                summary: 'Madrid offers a good balance of culture and affordability'
            },
        scholarships: { available: true, details: 'Performance-based scholarships available for outstanding young players.' },
        visaInfo: { schengen: true, eu: true, visaFreeCountries: 'EU/EEA citizens free entry, US/UK/Canada/Australia visa-free up to 90 days', notes: 'Schengen zone. Non-EU citizens need Schengen visa for stays over 90 days.' },
        airportTransfers: [
                { mode: 'Taxi', duration: '20 min', cost: '€25–35', notes: 'Available at all terminals' },
                { mode: 'Metro', duration: '40 min', cost: '€5', notes: 'Line 8 to city center' },
                { mode: 'Private Transfer', duration: '20 min', cost: '€40–60', notes: 'Pre-book online' }
            ],
        nearbyTournaments: [
                { name: 'LaLiga Promises', level: 'National Youth', surface: 'Artificial Turf', month: 'March', venue: 'Villarreal' },
                { name: 'Copa del Rey Juvenil', level: 'National Youth', surface: 'Natural Grass', month: 'April', venue: 'Various' }
            ],
        videoTour: null
    },
    {
        id: 'atletico-madrid-academy',
    availability: { status: 'waitlist', nextIntake: '2025-11-01', spotsLeft: null, responseTime: '48h', privateLessons: true, yearRound: false },
        name: 'Atletico Madrid Academy',
        country: 'Spain',
        countryFlag: '🇪🇸',
        city: 'Madrid',
        lat: 40.436,
        lng: -3.5995,
        website: 'https://en.atleticodemadrid.com/academy',
        contact: '+34 913 660 707',
        individualLessons: true,
        boarding: true,
        level: 'Advanced',
        starred: true,
        airport: { name: 'Adolfo Suarez Madrid-Barajas Airport', code: 'MAD', distance: '12 km', driveTime: '18 min' },
        beach: { distance: null, description: 'No nearby beach, urban location' },
        climate: 'madrid',
        priceRange: { from: 2500, to: 8000, unit: 'month', display: '€2,500–8,000/mo' },
        programs: [
                { name: 'Youth Foundation', price: '€2,500/mo', desc: 'Core skills and defensive discipline for young players' },
                { name: 'Intensive Training', price: '€4,500/mo', desc: 'Full-day tactical and physical development' },
                { name: 'Elite Program', price: '€6,500/mo', desc: 'High-intensity training with match simulation' },
                { name: 'Pro Development', price: '€8,000/mo', desc: 'Professional preparation with competition exposure' }
            ],
        coaches: [
                {
                        name: 'Carlos Gonzalez',
                        credential: 'UEFA Pro License',
                        background: 'Atletico youth coordinator, defensive tactics specialist',
                        atpWta: false,
                        bestRanking: null,
                        rankingNote: null,
                        languages: ['Spanish', 'English'],
                        instagram: null
                    },
                {
                        name: 'Luis Martinez',
                        credential: 'UEFA A License',
                        background: 'Former Atletico B team coach, fitness expert',
                        atpWta: false,
                        bestRanking: null,
                        rankingNote: null,
                        languages: ['Spanish', 'Portuguese'],
                        instagram: null
                    }
            ],
        bestCoachRanking: null,
        facilities: '8 training pitches, Ciudad Deportiva Wanda, gym, medical facility, video analysis center',
        courtSurfaces: ['Natural Grass', 'Artificial Turf', 'Indoor'],
        notableAlumni: ['Fernando Torres', 'Koke', 'Saul Niguez', 'Gabi Fernandez', 'Raul Garcia'],
        photos: [
          "https://picsum.photos/seed/atletico-madrid-academy-1/800/500",
          "https://picsum.photos/seed/atletico-madrid-academy-2/800/500",
          "https://picsum.photos/seed/atletico-madrid-academy-3/800/500"
        ],
        description: 'Atletico Madrid Academy is known for producing resilient, tactically disciplined players who embody the club fighting spirit.',
        nearbyHotels: [
                {
                        name: 'VP Plaza Espana Design',
                        stars: 5,
                        distanceKm: 12,
                        features: ['Restaurant', 'Rooftop Bar', 'Spa', 'Pool'],
                        pool: true,
                        wifi: true,
                        pricePerNight: '€220'
                    },
                {
                        name: 'Hotel Riu Plaza Espana',
                        stars: 4,
                        distanceKm: 12,
                        features: ['Restaurant', 'Pool', 'Gym'],
                        pool: true,
                        wifi: true,
                        pricePerNight: '€150'
                    },
                {
                        name: 'NH Madrid Ventas',
                        stars: 4,
                        distanceKm: 5,
                        features: ['Restaurant', 'Bar', 'Parking'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€90'
                    },
                {
                        name: 'Hotel Mayorazgo',
                        stars: 3,
                        distanceKm: 13,
                        features: ['Restaurant', 'Bar'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€70'
                    },
                {
                        name: 'Hostal Barrera',
                        stars: 2,
                        distanceKm: 11,
                        features: ['Central Location'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€45'
                    }
            ],
        nearbyRestaurants: [
                {
                        name: 'Sobrino de Botin',
                        cuisine: 'Spanish Traditional',
                        distanceKm: 12,
                        priceRange: '€€€',
                        rating: 4.6,
                        vegetarian: false,
                        outdoor: false
                    },
                {
                        name: 'Taberna La Daniela',
                        cuisine: 'Cocido Madrileno',
                        distanceKm: 10,
                        priceRange: '€€',
                        rating: 4.4,
                        vegetarian: false,
                        outdoor: false
                    },
                {
                        name: 'La Tape',
                        cuisine: 'Tapas',
                        distanceKm: 8,
                        priceRange: '€€',
                        rating: 4.3,
                        vegetarian: true,
                        outdoor: true
                    },
                {
                        name: 'Lateral Castellana',
                        cuisine: 'Mediterranean',
                        distanceKm: 9,
                        priceRange: '€€',
                        rating: 4.3,
                        vegetarian: true,
                        outdoor: true
                    },
                {
                        name: 'Casa Lucio',
                        cuisine: 'Castilian',
                        distanceKm: 12,
                        priceRange: '€€€',
                        rating: 4.5,
                        vegetarian: false,
                        outdoor: false
                    }
            ],
        nearbyMedical: [
                { name: 'Hospital Universitario La Paz', type: 'Hospital', distanceKm: 8, phone: '+34 917 277 000', emergency: true },
                { name: 'Hospital Gregorio Maranon', type: 'Hospital', distanceKm: 6, phone: '+34 915 868 000', emergency: true },
                { name: 'Fisioterapia Deportiva Madrid', type: 'Physiotherapy', distanceKm: 4, phone: '+34 916 789 012', emergency: false }
            ],
        costOfLiving: {
                rent1Bed: '€850',
                meal: '€12',
                monthlyFood: '€320',
                transport: '€55',
                currency: 'EUR',
                summary: 'Madrid offers affordable living with excellent infrastructure'
            },
        scholarships: { available: true, details: 'Scholarships for talented players showing exceptional commitment.' },
        visaInfo: { schengen: true, eu: true, visaFreeCountries: 'EU/EEA citizens free entry, US/UK/Canada/Australia visa-free up to 90 days', notes: 'Schengen zone.' },
        airportTransfers: [
                { mode: 'Taxi', duration: '18 min', cost: '€20–30', notes: 'Available at all terminals' },
                { mode: 'Metro', duration: '35 min', cost: '€5', notes: 'Metro to Estadio Metropolitano' },
                { mode: 'Private Transfer', duration: '18 min', cost: '€35–50', notes: 'Pre-book online' }
            ],
        nearbyTournaments: [
                { name: 'LaLiga Promises', level: 'National Youth', surface: 'Artificial Turf', month: 'March', venue: 'Villarreal' },
                { name: 'Copa de Campeones Juvenil', level: 'National Youth', surface: 'Natural Grass', month: 'June', venue: 'Various' }
            ],
        videoTour: null
    },
    {
        id: 'ajax-youth-academy',
    availability: { status: 'open', nextIntake: '2025-06-01', spotsLeft: 10, responseTime: '24h', privateLessons: true, yearRound: true },
        name: 'Ajax Youth Academy',
        country: 'Netherlands',
        countryFlag: '🇳🇱',
        city: 'Amsterdam',
        lat: 52.3141,
        lng: 4.9419,
        website: 'https://www.ajax.nl/en/youth-academy/',
        contact: '+31 20 311 1444',
        individualLessons: true,
        boarding: true,
        level: 'Elite',
        starred: true,
        airport: { name: 'Amsterdam Schiphol Airport', code: 'AMS', distance: '15 km', driveTime: '20 min' },
        beach: { distance: 25, description: 'Zandvoort Beach, popular North Sea resort' },
        climate: 'amsterdam',
        priceRange: { from: 2500, to: 9000, unit: 'month', display: '€2,500–9,000/mo' },
        programs: [
                { name: 'Youth Development', price: '€2,500/mo', desc: 'Technical mastery and total football philosophy' },
                { name: 'Intensive Training', price: '€4,500/mo', desc: 'Full-day program with tactical education' },
                { name: 'Elite Performance', price: '€7,000/mo', desc: 'Advanced training with match analysis' },
                { name: 'Professional Track', price: '€9,000/mo', desc: 'Top-level preparation for professional careers' }
            ],
        coaches: [
                {
                        name: 'Wim Jonk',
                        credential: 'UEFA Pro License',
                        background: 'Former Ajax and Netherlands midfielder, youth philosophy architect',
                        atpWta: false,
                        bestRanking: null,
                        rankingNote: null,
                        languages: ['Dutch', 'English', 'German'],
                        instagram: null
                    },
                {
                        name: 'Dennis Bergkamp',
                        credential: 'UEFA A License',
                        background: 'Arsenal and Netherlands legend, technical coaching specialist',
                        atpWta: false,
                        bestRanking: null,
                        rankingNote: null,
                        languages: ['Dutch', 'English'],
                        instagram: null
                    }
            ],
        bestCoachRanking: null,
        facilities: 'De Toekomst training complex, 7 pitches, indoor hall, gym, medical center, residential academy',
        courtSurfaces: ['Natural Grass', 'Artificial Turf', 'Indoor'],
        notableAlumni: ['Johan Cruyff', 'Marco van Basten', 'Dennis Bergkamp', 'Edwin van der Sar', 'Frenkie de Jong'],
        photos: [
          "https://picsum.photos/seed/ajax-youth-academy-1/800/500",
          "https://picsum.photos/seed/ajax-youth-academy-2/800/500",
          "https://picsum.photos/seed/ajax-youth-academy-3/800/500",
          "https://picsum.photos/seed/ajax-youth-academy-4/800/500"
        ],
        description: 'Ajax Youth Academy, based at De Toekomst, is the birthplace of Total Football and has produced more world-class talent than almost any other academy.',
        nearbyHotels: [
                {
                        name: 'Hotel Okura Amsterdam',
                        stars: 5,
                        distanceKm: 3,
                        features: ['Restaurant', 'Spa', 'Pool', 'Bar'],
                        pool: true,
                        wifi: true,
                        pricePerNight: '€280'
                    },
                {
                        name: 'NH Amsterdam Zuid',
                        stars: 4,
                        distanceKm: 1.5,
                        features: ['Restaurant', 'Bar', 'Gym'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€130'
                    },
                {
                        name: 'Novotel Amsterdam City',
                        stars: 4,
                        distanceKm: 4,
                        features: ['Restaurant', 'Pool', 'Gym'],
                        pool: true,
                        wifi: true,
                        pricePerNight: '€110'
                    },
                {
                        name: 'Holiday Inn Express Arena Towers',
                        stars: 3,
                        distanceKm: 0.5,
                        features: ['Bar', 'Breakfast'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€80'
                    },
                {
                        name: 'Generator Amsterdam',
                        stars: 2,
                        distanceKm: 6,
                        features: ['Bar', 'Lounge'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€40'
                    }
            ],
        nearbyRestaurants: [
                {
                        name: 'De Kas',
                        cuisine: 'Dutch Modern',
                        distanceKm: 4,
                        priceRange: '€€€€',
                        rating: 4.7,
                        vegetarian: true,
                        outdoor: true
                    },
                {
                        name: 'Foodhallen',
                        cuisine: 'International',
                        distanceKm: 5,
                        priceRange: '€€',
                        rating: 4.4,
                        vegetarian: true,
                        outdoor: true
                    },
                {
                        name: 'Cafe de Klos',
                        cuisine: 'Dutch BBQ',
                        distanceKm: 6,
                        priceRange: '€€',
                        rating: 4.5,
                        vegetarian: false,
                        outdoor: false
                    },
                {
                        name: 'Moeders',
                        cuisine: 'Dutch Traditional',
                        distanceKm: 6,
                        priceRange: '€€',
                        rating: 4.3,
                        vegetarian: true,
                        outdoor: false
                    },
                {
                        name: 'Febo',
                        cuisine: 'Dutch Snacks',
                        distanceKm: 3,
                        priceRange: '€',
                        rating: 4.0,
                        vegetarian: true,
                        outdoor: false
                    }
            ],
        nearbyMedical: [
                { name: 'AMC Academic Medical Center', type: 'Hospital', distanceKm: 3, phone: '+31 20 566 9111', emergency: true },
                { name: 'OLVG Hospital', type: 'Clinic', distanceKm: 5, phone: '+31 20 599 9111', emergency: true },
                { name: 'Fysio Amsterdam Zuid', type: 'Physiotherapy', distanceKm: 1, phone: '+31 20 345 6789', emergency: false }
            ],
        costOfLiving: {
                rent1Bed: '€1200',
                meal: '€15',
                monthlyFood: '€350',
                transport: '€90',
                currency: 'EUR',
                summary: 'Amsterdam is expensive but offers high quality of life'
            },
        scholarships: { available: true, details: 'Ajax offers scholarships to exceptional talent worldwide.' },
        visaInfo: { schengen: true, eu: true, visaFreeCountries: 'EU/EEA citizens free entry, US/UK/Canada/Australia visa-free up to 90 days', notes: 'Schengen zone.' },
        airportTransfers: [
                { mode: 'Train', duration: '15 min', cost: '€4.50', notes: 'Direct from Schiphol to Amsterdam Bijlmer ArenA' },
                { mode: 'Taxi', duration: '20 min', cost: '€35–45', notes: 'Available at Schiphol' },
                { mode: 'Private Transfer', duration: '20 min', cost: '€50–65', notes: 'Pre-book online' }
            ],
        nearbyTournaments: [
                { name: 'Ajax Future Cup', level: 'International Youth', surface: 'Natural Grass', month: 'April', venue: 'De Toekomst' },
                { name: 'KNVB Cup Youth', level: 'National Youth', surface: 'Natural Grass', month: 'May', venue: 'Various' },
                { name: 'Marveld Tournament', level: 'International Youth', surface: 'Natural Grass', month: 'August', venue: 'Groenlo' }
            ],
        upcomingCamps: [
            { name: "Ajax Summer Camp", startDate: "2025-07-14", endDate: "2025-07-25", price: "€1,800", level: "Intermediate" },
            { name: "Total Football Masterclass", startDate: "2025-08-18", endDate: "2025-08-22", price: "€1,200", level: "Advanced" }
        ],
        accommodation: {
            types: [
                { type: 'private', label: 'Private Room', pricePerWeek: 460, maxOccupancy: 1, bathType: 'ensuite', mealsIncluded: true },
                { type: 'twin', label: 'Twin Room', pricePerWeek: 300, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
                { type: 'triple', label: 'Triple Room', pricePerWeek: 230, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true },
                { type: 'dorm', label: 'Youth Dormitory', pricePerWeek: 160, maxOccupancy: 6, bathType: 'shared', mealsIncluded: true }
            ],
            companionsAllowed: true,
            childrenAllowed: true,
            minStay: 1,
            shuttleToTraining: true,
            notes: 'Located within the De Toekomst complex with full board and 24/7 supervision'
        },
        videoTour: null
    },
    {
        id: 'clairefontaine',
    availability: { status: 'open', nextIntake: '2025-06-15', spotsLeft: 7, responseTime: '48h', privateLessons: true, yearRound: true },
        name: 'INF Clairefontaine',
        country: 'France',
        countryFlag: '🇫🇷',
        city: 'Clairefontaine-en-Yvelines',
        lat: 48.6164,
        lng: 1.9383,
        website: 'https://www.fff.fr/la-fff/clairefontaine',
        contact: '+33 1 34 83 63 00',
        individualLessons: true,
        boarding: true,
        level: 'Elite',
        starred: true,
        airport: { name: 'Paris Charles de Gaulle Airport', code: 'CDG', distance: '70 km', driveTime: '60 min' },
        beach: { distance: null, description: 'No nearby beach, forest setting southwest of Paris' },
        climate: 'paris',
        priceRange: { from: 2000, to: 6000, unit: 'month', display: '€2,000–6,000/mo' },
        programs: [
                { name: 'Youth Development', price: '€2,000/mo', desc: 'Technical and tactical foundation in French style' },
                { name: 'National Program', price: '€3,500/mo', desc: 'Intensive national-level youth training' },
                { name: 'Elite Squad', price: '€5,000/mo', desc: 'Pre-professional program with match exposure' },
                { name: 'International Camp', price: '€6,000/mo', desc: 'Short-term intensive for international players' }
            ],
        coaches: [
                {
                        name: 'Gerard Houllier',
                        credential: 'UEFA Pro License',
                        background: 'Legendary French football coach and technical director',
                        atpWta: false,
                        bestRanking: null,
                        rankingNote: null,
                        languages: ['French', 'English'],
                        instagram: null
                    },
                {
                        name: 'Patrick Guillou',
                        credential: 'UEFA Pro License',
                        background: 'Former French international, youth development expert',
                        atpWta: false,
                        bestRanking: null,
                        rankingNote: null,
                        languages: ['French', 'German', 'English'],
                        instagram: null
                    }
            ],
        bestCoachRanking: null,
        facilities: '13 pitches in forested parkland, indoor complex, gym, swimming pool, medical center, residential campus',
        courtSurfaces: ['Natural Grass', 'Artificial Turf', 'Indoor'],
        notableAlumni: ['Thierry Henry', 'Nicolas Anelka', 'Kylian Mbappe', 'William Gallas', 'Louis Saha'],
        photos: [
          "https://picsum.photos/seed/clairefontaine-1/800/500",
          "https://picsum.photos/seed/clairefontaine-2/800/500",
          "https://picsum.photos/seed/clairefontaine-3/800/500",
          "https://picsum.photos/seed/clairefontaine-4/800/500",
          "https://picsum.photos/seed/clairefontaine-5/800/500"
        ],
        description: 'Clairefontaine is the French national football center, a prestigious institution nestled in forests that has produced generations of world-class French talent.',
        nearbyHotels: [
                {
                        name: 'Chateau de la Tour',
                        stars: 4,
                        distanceKm: 5,
                        features: ['Restaurant', 'Pool', 'Spa', 'Garden'],
                        pool: true,
                        wifi: true,
                        pricePerNight: '€160'
                    },
                {
                        name: 'Novotel Rambouillet',
                        stars: 4,
                        distanceKm: 10,
                        features: ['Restaurant', 'Pool', 'Gym'],
                        pool: true,
                        wifi: true,
                        pricePerNight: '€100'
                    },
                {
                        name: 'Ibis Rambouillet',
                        stars: 3,
                        distanceKm: 10,
                        features: ['Bar', 'Parking'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€65'
                    },
                {
                        name: 'Hotel & Restaurant Le Moulin',
                        stars: 3,
                        distanceKm: 8,
                        features: ['Restaurant', 'Garden'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€75'
                    },
                {
                        name: 'Premiere Classe Rambouillet',
                        stars: 2,
                        distanceKm: 12,
                        features: ['Parking'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€40'
                    }
            ],
        nearbyRestaurants: [
                {
                        name: 'Le Petit Clos',
                        cuisine: 'French Bistro',
                        distanceKm: 5,
                        priceRange: '€€',
                        rating: 4.4,
                        vegetarian: true,
                        outdoor: true
                    },
                {
                        name: 'Auberge du Chasseur',
                        cuisine: 'French Traditional',
                        distanceKm: 8,
                        priceRange: '€€€',
                        rating: 4.5,
                        vegetarian: false,
                        outdoor: true
                    },
                {
                        name: 'Le Relais de la Foret',
                        cuisine: 'French',
                        distanceKm: 6,
                        priceRange: '€€',
                        rating: 4.3,
                        vegetarian: true,
                        outdoor: true
                    },
                {
                        name: 'La Table du Roi',
                        cuisine: 'Fine Dining',
                        distanceKm: 10,
                        priceRange: '€€€€',
                        rating: 4.6,
                        vegetarian: true,
                        outdoor: true
                    },
                {
                        name: 'Creperie du Parc',
                        cuisine: 'Crepes',
                        distanceKm: 7,
                        priceRange: '€',
                        rating: 4.2,
                        vegetarian: true,
                        outdoor: true
                    }
            ],
        nearbyMedical: [
                { name: 'Centre Hospitalier de Rambouillet', type: 'Hospital', distanceKm: 12, phone: '+33 1 34 83 70 00', emergency: true },
                { name: 'Clinique de la Foret', type: 'Clinic', distanceKm: 8, phone: '+33 1 34 57 10 00', emergency: true },
                { name: 'Kinesitherapie Yvelines', type: 'Physiotherapy', distanceKm: 6, phone: '+33 1 34 83 45 00', emergency: false }
            ],
        costOfLiving: {
                rent1Bed: '€700',
                meal: '€14',
                monthlyFood: '€350',
                transport: '€75',
                currency: 'EUR',
                summary: 'Rural Yvelines area is affordable compared to central Paris'
            },
        scholarships: { available: true, details: 'Fully funded places for selected French youth talent.' },
        visaInfo: { schengen: true, eu: true, visaFreeCountries: 'EU/EEA citizens free entry, US/UK/Canada/Australia visa-free up to 90 days', notes: 'Schengen zone.' },
        airportTransfers: [
                { mode: 'Taxi', duration: '60 min', cost: '€80–120', notes: 'From CDG airport' },
                { mode: 'Train + Taxi', duration: '90 min', cost: '€25–40', notes: 'RER B to Paris, then train to Rambouillet' },
                { mode: 'Private Transfer', duration: '60 min', cost: '€100–150', notes: 'Pre-book online' }
            ],
        nearbyTournaments: [
                { name: 'Tournoi International de Montaigu', level: 'International Youth', surface: 'Natural Grass', month: 'April', venue: 'Montaigu' },
                { name: 'Coupe Gambardella', level: 'National Youth', surface: 'Natural Grass', month: 'May', venue: 'Various' }
            ],
        accommodation: {
            types: [
                { type: 'private', label: 'Private Room', pricePerWeek: 480, maxOccupancy: 1, bathType: 'ensuite', mealsIncluded: true },
                { type: 'twin', label: 'Twin Room', pricePerWeek: 320, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
                { type: 'triple', label: 'Triple Room', pricePerWeek: 245, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true },
                { type: 'dorm', label: 'Youth Dormitory', pricePerWeek: 170, maxOccupancy: 8, bathType: 'shared', mealsIncluded: true }
            ],
            companionsAllowed: true,
            childrenAllowed: true,
            minStay: 2,
            shuttleToTraining: true,
            notes: 'Nutritionist-planned meals included with dedicated sports science support'
        },
        videoTour: null
    },
    {
        id: 'bayern-munich-academy',
    availability: { status: 'open', nextIntake: '2025-09-01', spotsLeft: 18, responseTime: '24h', privateLessons: false, yearRound: true },
        name: 'Bayern Munich Academy',
        country: 'Germany',
        countryFlag: '🇩🇪',
        city: 'Munich',
        lat: 48.2188,
        lng: 11.6247,
        website: 'https://fcbayern.com/en/club/youth-development',
        contact: '+49 89 699 310',
        individualLessons: true,
        boarding: true,
        level: 'Elite',
        starred: true,
        airport: { name: 'Munich Airport', code: 'MUC', distance: '35 km', driveTime: '35 min' },
        beach: { distance: null, description: 'No nearby beach, alpine city with lakes nearby' },
        climate: 'munich',
        priceRange: { from: 2500, to: 9000, unit: 'month', display: '€2,500–9,000/mo' },
        programs: [
                { name: 'Youth Foundation', price: '€2,500/mo', desc: 'Core skills and tactical basics in German football philosophy' },
                { name: 'Development Program', price: '€4,500/mo', desc: 'Advanced training with competitive match play' },
                { name: 'Elite Performance', price: '€7,000/mo', desc: 'Professional-level preparation with sports science' },
                { name: 'Pro Pathway', price: '€9,000/mo', desc: 'Elite program bridging academy and first team' }
            ],
        coaches: [
                {
                        name: 'Hermann Gerland',
                        credential: 'UEFA Pro License',
                        background: 'Bayern Munich legend, decades of youth development experience',
                        atpWta: false,
                        bestRanking: null,
                        rankingNote: null,
                        languages: ['German', 'English'],
                        instagram: null
                    },
                {
                        name: 'Martin Demichelis',
                        credential: 'UEFA A License',
                        background: 'Former Bayern defender, tactical specialist',
                        atpWta: false,
                        bestRanking: null,
                        rankingNote: null,
                        languages: ['German', 'Spanish', 'English'],
                        instagram: null
                    }
            ],
        bestCoachRanking: null,
        facilities: 'FC Bayern Campus, 8 pitches, indoor arena, performance center, medical facility, youth residence',
        courtSurfaces: ['Natural Grass', 'Artificial Turf', 'Indoor'],
        notableAlumni: ['Thomas Muller', 'Philipp Lahm', 'Bastian Schweinsteiger', 'David Alaba', 'Owen Hargreaves'],
        description: 'Bayern Munich Academy at the FC Bayern Campus is one of the best in Germany, combining world-class facilities with a winning mentality.',
        nearbyHotels: [
                {
                        name: 'Hotel Vier Jahreszeiten Kempinski',
                        stars: 5,
                        distanceKm: 10,
                        features: ['Restaurant', 'Spa', 'Pool', 'Bar'],
                        pool: true,
                        wifi: true,
                        pricePerNight: '€300'
                    },
                {
                        name: 'Hilton Munich Park',
                        stars: 4,
                        distanceKm: 6,
                        features: ['Restaurant', 'Gym', 'Bar'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€140'
                    },
                {
                        name: 'Holiday Inn Munich City Centre',
                        stars: 4,
                        distanceKm: 8,
                        features: ['Restaurant', 'Bar', 'Gym'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€100'
                    },
                {
                        name: 'Motel One Munchen Sendlinger Tor',
                        stars: 3,
                        distanceKm: 9,
                        features: ['Bar', 'Lounge'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€75'
                    },
                {
                        name: 'Wombats City Hostel',
                        stars: 2,
                        distanceKm: 8,
                        features: ['Bar', 'Kitchen'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€35'
                    }
            ],
        nearbyRestaurants: [
                {
                        name: 'Hofbrauhaus',
                        cuisine: 'Bavarian',
                        distanceKm: 10,
                        priceRange: '€€',
                        rating: 4.3,
                        vegetarian: false,
                        outdoor: true
                    },
                {
                        name: 'Wirtshaus in der Au',
                        cuisine: 'Bavarian',
                        distanceKm: 8,
                        priceRange: '€€',
                        rating: 4.5,
                        vegetarian: true,
                        outdoor: true
                    },
                {
                        name: 'Tantris',
                        cuisine: 'Fine Dining',
                        distanceKm: 7,
                        priceRange: '€€€€',
                        rating: 4.8,
                        vegetarian: true,
                        outdoor: false
                    },
                {
                        name: 'Augustiner Klosterwirt',
                        cuisine: 'Bavarian',
                        distanceKm: 10,
                        priceRange: '€€',
                        rating: 4.4,
                        vegetarian: true,
                        outdoor: true
                    },
                {
                        name: 'Brenner Grill',
                        cuisine: 'Mediterranean',
                        distanceKm: 9,
                        priceRange: '€€€',
                        rating: 4.3,
                        vegetarian: true,
                        outdoor: true
                    }
            ],
        nearbyMedical: [
                { name: 'Klinikum rechts der Isar', type: 'Hospital', distanceKm: 7, phone: '+49 89 4140 0', emergency: true },
                { name: 'Sportorthopaedie München', type: 'Clinic', distanceKm: 5, phone: '+49 89 2060 3990', emergency: true },
                { name: 'Physiotherapie Munchen', type: 'Physiotherapy', distanceKm: 3, phone: '+49 89 1234 5678', emergency: false }
            ],
        costOfLiving: {
                rent1Bed: '€1000',
                meal: '€12',
                monthlyFood: '€300',
                transport: '€55',
                currency: 'EUR',
                summary: 'Munich is one of the more expensive German cities but offers excellent quality'
            },
        scholarships: { available: true, details: 'Performance-based scholarships for top youth talent.' },
        visaInfo: { schengen: true, eu: true, visaFreeCountries: 'EU/EEA citizens free entry, US/UK/Canada/Australia visa-free up to 90 days', notes: 'Schengen zone.' },
        airportTransfers: [
                { mode: 'S-Bahn', duration: '40 min', cost: '€12', notes: 'S1/S8 lines direct to city' },
                { mode: 'Taxi', duration: '35 min', cost: '€60–80', notes: 'Available at airport' },
                { mode: 'Private Transfer', duration: '35 min', cost: '€80–110', notes: 'Pre-book online' }
            ],
        nearbyTournaments: [
                { name: 'DFB Pokal Junioren', level: 'National Youth', surface: 'Natural Grass', month: 'May', venue: 'Various' },
                { name: 'Uli Hoeness Cup', level: 'International Youth', surface: 'Natural Grass', month: 'August', venue: 'FC Bayern Campus' }
            ],
        upcomingCamps: [
            { name: "FC Bayern Youth Camp", startDate: "2025-06-16", endDate: "2025-06-27", price: "€2,000", level: "All Levels" },
            { name: "Winter Goalkeeper Camp", startDate: "2025-12-15", endDate: "2025-12-19", price: "€800", level: "Intermediate" },
            { name: "Spring Development Camp", startDate: "2025-03-24", endDate: "2025-04-04", price: "€1,500", level: "Beginner" }
        ],
        accommodation: {
            types: [
                { type: 'private', label: 'Private Room', pricePerWeek: 420, maxOccupancy: 1, bathType: 'ensuite', mealsIncluded: true },
                { type: 'twin', label: 'Twin Room', pricePerWeek: 275, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
                { type: 'triple', label: 'Triple Room', pricePerWeek: 220, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true },
                { type: 'quad', label: 'Quad Room', pricePerWeek: 185, maxOccupancy: 4, bathType: 'shared', mealsIncluded: true }
            ],
            companionsAllowed: true,
            childrenAllowed: true,
            minStay: 1,
            shuttleToTraining: true,
            notes: 'On-site at FC Bayern Campus with access to recovery and physio facilities'
        },
        videoTour: null
    },
    {
        id: 'borussia-dortmund-academy',
    availability: { status: 'open', nextIntake: '2025-06-01', spotsLeft: 20, responseTime: '24h', privateLessons: true, yearRound: true },
        name: 'Borussia Dortmund Academy',
        country: 'Germany',
        countryFlag: '🇩🇪',
        city: 'Dortmund',
        lat: 51.4928,
        lng: 7.4519,
        website: 'https://www.bvb.de/eng/BVB/Youth',
        contact: '+49 231 902 00',
        individualLessons: true,
        boarding: true,
        level: 'Elite',
        starred: true,
        airport: { name: 'Dortmund Airport', code: 'DTM', distance: '13 km', driveTime: '20 min' },
        beach: { distance: null, description: 'No nearby beach, Ruhr industrial region' },
        climate: 'dortmund',
        priceRange: { from: 2000, to: 7500, unit: 'month', display: '€2,000–7,500/mo' },
        programs: [
                { name: 'Youth Development', price: '€2,000/mo', desc: 'Technical skills in attacking football philosophy' },
                { name: 'Talent Program', price: '€3,500/mo', desc: 'Intensive training with competitive exposure' },
                { name: 'Elite Training', price: '€5,500/mo', desc: 'Advanced program with professional coaching' },
                { name: 'Pro Academy', price: '€7,500/mo', desc: 'Top-tier development with first-team pathway' }
            ],
        coaches: [
                {
                        name: 'Lars Ricken',
                        credential: 'UEFA Pro License',
                        background: 'BVB legend, Champions League hero, youth director',
                        atpWta: false,
                        bestRanking: null,
                        rankingNote: null,
                        languages: ['German', 'English'],
                        instagram: null
                    },
                {
                        name: 'Otto Addo',
                        credential: 'UEFA Pro License',
                        background: 'Former BVB player, talent development coach',
                        atpWta: false,
                        bestRanking: null,
                        rankingNote: null,
                        languages: ['German', 'English', 'French'],
                        instagram: null
                    }
            ],
        bestCoachRanking: null,
        facilities: '6 training pitches, BVB training center, gym, analysis center, indoor facility, residence',
        courtSurfaces: ['Natural Grass', 'Artificial Turf', 'Indoor'],
        notableAlumni: ['Mario Gotze', 'Marco Reus', 'Christian Pulisic', 'Jadon Sancho', 'Jude Bellingham'],
        description: 'Borussia Dortmund Academy is famous for developing young talent into world-class players, with a philosophy focused on attacking, exciting football.',
        nearbyHotels: [
                {
                        name: 'Steigenberger Hotel Dortmund',
                        stars: 4,
                        distanceKm: 4,
                        features: ['Restaurant', 'Spa', 'Gym', 'Bar'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€130'
                    },
                {
                        name: 'Radisson Blu Hotel Dortmund',
                        stars: 4,
                        distanceKm: 3,
                        features: ['Restaurant', 'Bar', 'Gym'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€100'
                    },
                {
                        name: 'B&B Hotel Dortmund City',
                        stars: 3,
                        distanceKm: 5,
                        features: ['Bar', 'Parking'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€60'
                    },
                {
                        name: 'ibis Dortmund City',
                        stars: 3,
                        distanceKm: 4,
                        features: ['Bar', 'Restaurant'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€55'
                    },
                {
                        name: 'A&O Dortmund Hauptbahnhof',
                        stars: 2,
                        distanceKm: 5,
                        features: ['Bar', 'Kitchen'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€30'
                    }
            ],
        nearbyRestaurants: [
                {
                        name: 'Pfefferkorn',
                        cuisine: 'Steakhouse',
                        distanceKm: 4,
                        priceRange: '€€€',
                        rating: 4.5,
                        vegetarian: false,
                        outdoor: true
                    },
                {
                        name: 'Hövels Hausbrauerei',
                        cuisine: 'German',
                        distanceKm: 4,
                        priceRange: '€€',
                        rating: 4.4,
                        vegetarian: true,
                        outdoor: true
                    },
                {
                        name: 'Zum Alten Markt',
                        cuisine: 'Westphalian',
                        distanceKm: 5,
                        priceRange: '€€',
                        rating: 4.3,
                        vegetarian: true,
                        outdoor: true
                    },
                {
                        name: 'Tante Amanda',
                        cuisine: 'German Modern',
                        distanceKm: 3,
                        priceRange: '€€',
                        rating: 4.2,
                        vegetarian: true,
                        outdoor: false
                    },
                {
                        name: 'Pizzeria Viva',
                        cuisine: 'Italian',
                        distanceKm: 4,
                        priceRange: '€€',
                        rating: 4.1,
                        vegetarian: true,
                        outdoor: false
                    }
            ],
        nearbyMedical: [
                { name: 'Klinikum Dortmund', type: 'Hospital', distanceKm: 4, phone: '+49 231 953 0', emergency: true },
                { name: 'St. Johannes Hospital', type: 'Clinic', distanceKm: 3, phone: '+49 231 1843 0', emergency: true },
                { name: 'Physio Dortmund', type: 'Physiotherapy', distanceKm: 2, phone: '+49 231 567 8901', emergency: false }
            ],
        costOfLiving: {
                rent1Bed: '€550',
                meal: '€10',
                monthlyFood: '€250',
                transport: '€55',
                currency: 'EUR',
                summary: 'Dortmund is very affordable compared to other major German cities'
            },
        scholarships: { available: true, details: 'Scholarships available for outstanding talent with financial need.' },
        visaInfo: { schengen: true, eu: true, visaFreeCountries: 'EU/EEA citizens free entry, US/UK/Canada/Australia visa-free up to 90 days', notes: 'Schengen zone.' },
        airportTransfers: [
                { mode: 'Taxi', duration: '20 min', cost: '€25–35', notes: 'Available at airport' },
                { mode: 'Bus', duration: '30 min', cost: '€5', notes: 'Airport Express to Hauptbahnhof' },
                { mode: 'Private Transfer', duration: '20 min', cost: '€35–50', notes: 'Pre-book online' }
            ],
        nearbyTournaments: [
                { name: 'DFB Pokal Junioren', level: 'National Youth', surface: 'Natural Grass', month: 'May', venue: 'Various' },
                { name: 'Ruhr Youth Cup', level: 'Regional', surface: 'Natural Grass', month: 'July', venue: 'Various Ruhr venues' }
            ],
        videoTour: null
    },
    {
        id: 'chelsea-cobham-academy',
    availability: { status: 'closed', nextIntake: '2025-12-01', spotsLeft: null, responseTime: '3-5 days', privateLessons: true, yearRound: false },
        name: 'Chelsea FC Academy',
        country: 'United Kingdom',
        countryFlag: '🇬🇧',
        city: 'London',
        lat: 51.3196,
        lng: -0.41,
        website: 'https://www.chelseafc.com/en/academy',
        contact: '+44 20 7957 8000',
        individualLessons: true,
        boarding: true,
        level: 'Elite',
        starred: true,
        airport: { name: 'London Heathrow Airport', code: 'LHR', distance: '20 km', driveTime: '30 min' },
        beach: { distance: null, description: 'No nearby beach, suburban Surrey location' },
        climate: 'london',
        priceRange: { from: 3000, to: 10000, unit: 'month', display: '£3,000–10,000/mo' },
        programs: [
                { name: 'Youth Development', price: '£3,000/mo', desc: 'Foundational skills and tactical understanding' },
                { name: 'Advanced Training', price: '£5,000/mo', desc: 'Intensive coaching with competitive match play' },
                { name: 'Elite Program', price: '£7,500/mo', desc: 'Professional-level preparation and mentoring' },
                { name: 'Professional Pathway', price: '£10,000/mo', desc: 'Complete program bridging academy to first team' }
            ],
        coaches: [
                {
                        name: 'Neil Bath',
                        credential: 'UEFA Pro License',
                        background: 'Chelsea Academy Director, architect of the youth system',
                        atpWta: false,
                        bestRanking: null,
                        rankingNote: null,
                        languages: ['English'],
                        instagram: null
                    },
                {
                        name: 'Joe Edwards',
                        credential: 'UEFA Pro License',
                        background: 'Chelsea youth coach, player development specialist',
                        atpWta: false,
                        bestRanking: null,
                        rankingNote: null,
                        languages: ['English'],
                        instagram: null
                    }
            ],
        bestCoachRanking: null,
        facilities: 'Cobham Training Centre, 30 pitches, indoor dome, gym, hydrotherapy, analysis suites, accommodation',
        courtSurfaces: ['Natural Grass', 'Artificial Turf', 'Indoor'],
        notableAlumni: ['John Terry', 'Mason Mount', 'Reece James', 'Callum Hudson-Odoi', 'Tammy Abraham'],
        description: 'Chelsea FC Academy at Cobham is one of the most successful in English football, consistently producing Premier League and international players.',
        nearbyHotels: [
                {
                        name: 'Hilton Cobham',
                        stars: 4,
                        distanceKm: 2,
                        features: ['Restaurant', 'Pool', 'Gym', 'Bar'],
                        pool: true,
                        wifi: true,
                        pricePerNight: '£150'
                    },
                {
                        name: 'Brooklands Hotel',
                        stars: 4,
                        distanceKm: 5,
                        features: ['Restaurant', 'Spa', 'Pool'],
                        pool: true,
                        wifi: true,
                        pricePerNight: '£140'
                    },
                {
                        name: 'Premier Inn Cobham',
                        stars: 3,
                        distanceKm: 1,
                        features: ['Restaurant', 'Bar'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '£70'
                    },
                {
                        name: 'Holiday Inn Guildford',
                        stars: 3,
                        distanceKm: 15,
                        features: ['Restaurant', 'Pool', 'Bar'],
                        pool: true,
                        wifi: true,
                        pricePerNight: '£90'
                    },
                {
                        name: 'Travelodge Cobham',
                        stars: 2,
                        distanceKm: 3,
                        features: ['Parking'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '£45'
                    }
            ],
        nearbyRestaurants: [
                {
                        name: 'The Ivy Cobham Brasserie',
                        cuisine: 'British Modern',
                        distanceKm: 2,
                        priceRange: '£££',
                        rating: 4.4,
                        vegetarian: true,
                        outdoor: true
                    },
                {
                        name: 'Cote Brasserie Cobham',
                        cuisine: 'French',
                        distanceKm: 2,
                        priceRange: '££',
                        rating: 4.3,
                        vegetarian: true,
                        outdoor: true
                    },
                {
                        name: 'The Plough Inn',
                        cuisine: 'British Pub',
                        distanceKm: 1.5,
                        priceRange: '££',
                        rating: 4.2,
                        vegetarian: true,
                        outdoor: true
                    },
                {
                        name: 'Giggling Squid',
                        cuisine: 'Thai',
                        distanceKm: 2,
                        priceRange: '££',
                        rating: 4.3,
                        vegetarian: true,
                        outdoor: false
                    },
                {
                        name: 'The Running Mare',
                        cuisine: 'British Gastropub',
                        distanceKm: 3,
                        priceRange: '££',
                        rating: 4.1,
                        vegetarian: true,
                        outdoor: true
                    }
            ],
        nearbyMedical: [
                { name: 'St Peters Hospital', type: 'Hospital', distanceKm: 10, phone: '+44 1932 872 000', emergency: true },
                { name: 'Cobham Health Clinic', type: 'Clinic', distanceKm: 2, phone: '+44 1932 868 000', emergency: true },
                { name: 'PhysioFit Surrey', type: 'Physiotherapy', distanceKm: 3, phone: '+44 1932 345 678', emergency: false }
            ],
        costOfLiving: {
                rent1Bed: '£1200',
                meal: '£12',
                monthlyFood: '£400',
                transport: '£150',
                currency: 'GBP',
                summary: 'Surrey is expensive but Chelsea provides excellent support'
            },
        scholarships: { available: true, details: 'Full scholarships for academy players accepted into the program.' },
        visaInfo: { schengen: false, eu: false, visaFreeCountries: 'EU/EEA citizens can visit visa-free, US/Canada/Australia visa-free up to 6 months', notes: 'Post-Brexit UK. Non-UK citizens may need a visa for extended stays.' },
        airportTransfers: [
                { mode: 'Taxi', duration: '30 min', cost: '£40–60', notes: 'From Heathrow Airport' },
                { mode: 'Train + Taxi', duration: '50 min', cost: '£15–25', notes: 'Train to Cobham station then taxi' },
                { mode: 'Private Transfer', duration: '30 min', cost: '£60–90', notes: 'Pre-book online' }
            ],
        nearbyTournaments: [
                { name: 'FA Youth Cup', level: 'National Youth', surface: 'Natural Grass', month: 'January-April', venue: 'Various' },
                { name: 'Premier League 2', level: 'National Youth', surface: 'Natural Grass', month: 'August-May', venue: 'Various' },
                { name: 'UEFA Youth League', level: 'International Youth', surface: 'Natural Grass', month: 'September-May', venue: 'Various' }
            ],
        upcomingCamps: [
            { name: "Chelsea Foundation Camp", startDate: "2025-08-04", endDate: "2025-08-15", price: "€1,600", level: "Beginner" },
            { name: "Half-Term Technical Camp", startDate: "2025-05-26", endDate: "2025-05-30", price: "€700", level: "All Levels" }
        ],
        accommodation: {
            types: [
                { type: 'apartment', label: 'Private Apartment', pricePerWeek: 580, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: false },
                { type: 'private', label: 'Private Room', pricePerWeek: 520, maxOccupancy: 1, bathType: 'ensuite', mealsIncluded: true },
                { type: 'twin', label: 'Twin Room', pricePerWeek: 370, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
                { type: 'triple', label: 'Triple Room', pricePerWeek: 280, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true }
            ],
            companionsAllowed: true,
            childrenAllowed: true,
            minStay: 1,
            shuttleToTraining: true,
            notes: '24/7 security and supervision at Cobham Training Centre residence'
        },
        videoTour: null
    },
    {
        id: 'manchester-city-academy',
    availability: { status: 'open', nextIntake: '2025-07-01', spotsLeft: 18, responseTime: '48h', privateLessons: true, yearRound: true },
        name: 'Manchester City Academy',
        country: 'United Kingdom',
        countryFlag: '🇬🇧',
        city: 'Manchester',
        lat: 53.4831,
        lng: -2.2004,
        website: 'https://www.mancity.com/academy',
        contact: '+44 161 444 1894',
        individualLessons: true,
        boarding: true,
        level: 'Elite',
        starred: true,
        airport: { name: 'Manchester Airport', code: 'MAN', distance: '15 km', driveTime: '25 min' },
        beach: { distance: null, description: 'No nearby beach, northwest England urban area' },
        climate: 'london',
        priceRange: { from: 2500, to: 9000, unit: 'month', display: '£2,500–9,000/mo' },
        programs: [
                { name: 'Youth Development', price: '£2,500/mo', desc: 'Technical foundations and game intelligence' },
                { name: 'Performance Program', price: '£4,500/mo', desc: 'Advanced coaching with data-driven analysis' },
                { name: 'Elite Training', price: '£7,000/mo', desc: 'Top-tier development with professional exposure' },
                { name: 'Pro Pathway', price: '£9,000/mo', desc: 'Complete professional preparation program' }
            ],
        coaches: [
                {
                        name: 'Jason Wilcox',
                        credential: 'UEFA Pro License',
                        background: 'City Football Academy director, talent identification expert',
                        atpWta: false,
                        bestRanking: null,
                        rankingNote: null,
                        languages: ['English'],
                        instagram: null
                    },
                {
                        name: 'Brian Barry-Murphy',
                        credential: 'UEFA Pro License',
                        background: 'EDS manager, development coaching specialist',
                        atpWta: false,
                        bestRanking: null,
                        rankingNote: null,
                        languages: ['English', 'Irish'],
                        instagram: null
                    }
            ],
        bestCoachRanking: null,
        facilities: 'City Football Academy, 16 pitches, 7000-seat stadium, indoor pitches, gym, medical center, accommodation',
        courtSurfaces: ['Natural Grass', 'Artificial Turf', 'Indoor'],
        notableAlumni: ['Phil Foden', 'Jadon Sancho', 'Brahim Diaz', 'Ian Carlo Poveda', 'Cole Palmer'],
        description: 'Manchester City Academy at the Etihad Campus is a state-of-the-art facility that combines cutting-edge sports science with world-class coaching.',
        nearbyHotels: [
                {
                        name: 'Hotel Football',
                        stars: 4,
                        distanceKm: 5,
                        features: ['Restaurant', 'Rooftop Pitch', 'Bar'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '£130'
                    },
                {
                        name: 'Hilton Manchester Deansgate',
                        stars: 4,
                        distanceKm: 6,
                        features: ['Restaurant', 'Pool', 'Spa'],
                        pool: true,
                        wifi: true,
                        pricePerNight: '£120'
                    },
                {
                        name: 'Premier Inn Manchester Sportcity',
                        stars: 3,
                        distanceKm: 0.5,
                        features: ['Restaurant', 'Bar'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '£60'
                    },
                {
                        name: 'ibis Manchester Centre',
                        stars: 3,
                        distanceKm: 5,
                        features: ['Bar', 'Restaurant'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '£55'
                    },
                {
                        name: 'YHA Manchester',
                        stars: 2,
                        distanceKm: 5,
                        features: ['Kitchen', 'Lounge'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '£25'
                    }
            ],
        nearbyRestaurants: [
                {
                        name: 'Hawksmoor Manchester',
                        cuisine: 'Steakhouse',
                        distanceKm: 5,
                        priceRange: '£££',
                        rating: 4.6,
                        vegetarian: false,
                        outdoor: false
                    },
                {
                        name: 'Rudy is Pizza',
                        cuisine: 'Italian',
                        distanceKm: 4,
                        priceRange: '££',
                        rating: 4.7,
                        vegetarian: true,
                        outdoor: false
                    },
                {
                        name: 'Bundobust',
                        cuisine: 'Indian Street Food',
                        distanceKm: 5,
                        priceRange: '£',
                        rating: 4.5,
                        vegetarian: true,
                        outdoor: false
                    },
                {
                        name: 'The Refuge',
                        cuisine: 'Modern British',
                        distanceKm: 5,
                        priceRange: '£££',
                        rating: 4.4,
                        vegetarian: true,
                        outdoor: true
                    },
                {
                        name: 'Mackie Mayor',
                        cuisine: 'Food Hall',
                        distanceKm: 5,
                        priceRange: '££',
                        rating: 4.3,
                        vegetarian: true,
                        outdoor: true
                    }
            ],
        nearbyMedical: [
                { name: 'Manchester Royal Infirmary', type: 'Hospital', distanceKm: 4, phone: '+44 161 276 1234', emergency: true },
                { name: 'BMI The Alexandra Hospital', type: 'Clinic', distanceKm: 8, phone: '+44 161 428 3656', emergency: true },
                { name: 'PhysioFit Manchester', type: 'Physiotherapy', distanceKm: 2, phone: '+44 161 234 5678', emergency: false }
            ],
        costOfLiving: {
                rent1Bed: '£800',
                meal: '£10',
                monthlyFood: '£300',
                transport: '£60',
                currency: 'GBP',
                summary: 'Manchester is affordable compared to London with excellent sports infrastructure'
            },
        scholarships: { available: true, details: 'Full funding for accepted academy scholars.' },
        visaInfo: { schengen: false, eu: false, visaFreeCountries: 'EU/EEA citizens can visit visa-free, US/Canada/Australia visa-free up to 6 months', notes: 'Post-Brexit UK.' },
        airportTransfers: [
                { mode: 'Taxi', duration: '25 min', cost: '£20–30', notes: 'Available at airport' },
                { mode: 'Train', duration: '20 min', cost: '£4.50', notes: 'Train to Manchester Piccadilly' },
                { mode: 'Private Transfer', duration: '25 min', cost: '£35–50', notes: 'Pre-book online' }
            ],
        nearbyTournaments: [
                { name: 'FA Youth Cup', level: 'National Youth', surface: 'Natural Grass', month: 'January-April', venue: 'Various' },
                { name: 'Premier League 2', level: 'National Youth', surface: 'Natural Grass', month: 'August-May', venue: 'Various' }
            ],
        videoTour: null
    },
    {
        id: 'juventus-academy',
    availability: { status: 'closed', nextIntake: '2025-12-01', spotsLeft: null, responseTime: '3-5 days', privateLessons: true, yearRound: false },
        name: 'Juventus Academy',
        country: 'Italy',
        countryFlag: '🇮🇹',
        city: 'Turin',
        lat: 45.1093,
        lng: 7.6412,
        website: 'https://www.juventus.com/en/youth',
        contact: '+39 011 656 3111',
        individualLessons: true,
        boarding: true,
        level: 'Elite',
        starred: true,
        airport: { name: 'Turin Caselle Airport', code: 'TRN', distance: '16 km', driveTime: '20 min' },
        beach: { distance: null, description: 'No nearby beach, alpine city in Piedmont region' },
        climate: 'turin',
        priceRange: { from: 2000, to: 8000, unit: 'month', display: '€2,000–8,000/mo' },
        programs: [
                { name: 'Youth Development', price: '€2,000/mo', desc: 'Italian football fundamentals and tactical discipline' },
                { name: 'Intensive Camp', price: '€3,500/mo', desc: 'Full-day training with match simulation' },
                { name: 'Elite Program', price: '€5,500/mo', desc: 'Advanced tactical and physical preparation' },
                { name: 'Pro Pathway', price: '€8,000/mo', desc: 'Professional development with first-team exposure' }
            ],
        coaches: [
                {
                        name: 'Claudio Filippi',
                        credential: 'UEFA Pro License',
                        background: 'Juventus youth sector head, Italian football methodology',
                        atpWta: false,
                        bestRanking: null,
                        rankingNote: null,
                        languages: ['Italian', 'English'],
                        instagram: null
                    },
                {
                        name: 'Massimiliano Maddaloni',
                        credential: 'UEFA A License',
                        background: 'Former Juventus youth coach, defensive specialist',
                        atpWta: false,
                        bestRanking: null,
                        rankingNote: null,
                        languages: ['Italian', 'Spanish'],
                        instagram: null
                    }
            ],
        bestCoachRanking: null,
        facilities: 'Juventus Training Center Vinovo, 6 pitches, gym, medical center, video analysis, residence',
        courtSurfaces: ['Natural Grass', 'Artificial Turf', 'Indoor'],
        notableAlumni: ['Alessandro Del Piero', 'Claudio Marchisio', 'Federico Chiesa', 'Gianluca Vialli', 'Paolo Rossi'],
        description: 'Juventus Academy in Turin combines Italian tactical mastery with modern training methods, producing disciplined and technically accomplished players.',
        nearbyHotels: [
                {
                        name: 'Grand Hotel Sitea',
                        stars: 5,
                        distanceKm: 12,
                        features: ['Restaurant', 'Spa', 'Bar', 'Gym'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€200'
                    },
                {
                        name: 'NH Torino Centro',
                        stars: 4,
                        distanceKm: 10,
                        features: ['Restaurant', 'Bar', 'Gym'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€110'
                    },
                {
                        name: 'Best Western Plus Hotel Genova',
                        stars: 4,
                        distanceKm: 11,
                        features: ['Restaurant', 'Bar'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€80'
                    },
                {
                        name: 'Hotel Diplomatic',
                        stars: 3,
                        distanceKm: 12,
                        features: ['Restaurant', 'Bar'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€65'
                    },
                {
                        name: 'Open 011',
                        stars: 2,
                        distanceKm: 8,
                        features: ['Bar', 'Kitchen'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€35'
                    }
            ],
        nearbyRestaurants: [
                {
                        name: 'Del Cambio',
                        cuisine: 'Piedmontese Fine Dining',
                        distanceKm: 12,
                        priceRange: '€€€€',
                        rating: 4.7,
                        vegetarian: true,
                        outdoor: false
                    },
                {
                        name: 'Trattoria Valenza',
                        cuisine: 'Piedmontese',
                        distanceKm: 10,
                        priceRange: '€€',
                        rating: 4.5,
                        vegetarian: true,
                        outdoor: false
                    },
                {
                        name: 'Eataly Torino',
                        cuisine: 'Italian Market',
                        distanceKm: 11,
                        priceRange: '€€',
                        rating: 4.4,
                        vegetarian: true,
                        outdoor: true
                    },
                {
                        name: 'Porto di Savona',
                        cuisine: 'Italian Traditional',
                        distanceKm: 12,
                        priceRange: '€€',
                        rating: 4.3,
                        vegetarian: true,
                        outdoor: true
                    },
                {
                        name: 'Pizzeria Gennaro Esposito',
                        cuisine: 'Pizza',
                        distanceKm: 9,
                        priceRange: '€',
                        rating: 4.2,
                        vegetarian: true,
                        outdoor: false
                    }
            ],
        nearbyMedical: [
                { name: 'Ospedale Molinette', type: 'Hospital', distanceKm: 10, phone: '+39 011 633 1633', emergency: true },
                { name: 'Clinica Fornaca', type: 'Clinic', distanceKm: 12, phone: '+39 011 567 4111', emergency: true },
                { name: 'Fisioterapia Torino Sport', type: 'Physiotherapy', distanceKm: 5, phone: '+39 011 345 6789', emergency: false }
            ],
        costOfLiving: {
                rent1Bed: '€600',
                meal: '€10',
                monthlyFood: '€280',
                transport: '€35',
                currency: 'EUR',
                summary: 'Turin is one of the most affordable major Italian cities'
            },
        scholarships: { available: true, details: 'Merit-based scholarships for exceptional Italian and international talent.' },
        visaInfo: { schengen: true, eu: true, visaFreeCountries: 'EU/EEA citizens free entry, US/UK/Canada/Australia visa-free up to 90 days', notes: 'Schengen zone.' },
        airportTransfers: [
                { mode: 'Taxi', duration: '20 min', cost: '€25–35', notes: 'Available at airport' },
                { mode: 'Bus', duration: '40 min', cost: '€7', notes: 'SADEM bus to city center' },
                { mode: 'Private Transfer', duration: '20 min', cost: '€40–55', notes: 'Pre-book online' }
            ],
        nearbyTournaments: [
                { name: 'Torneo di Viareggio', level: 'International Youth', surface: 'Natural Grass', month: 'March', venue: 'Viareggio' },
                { name: 'Campionato Primavera', level: 'National Youth', surface: 'Natural Grass', month: 'August-May', venue: 'Various' }
            ],
        upcomingCamps: [
            { name: "Juventus Summer Academy", startDate: "2025-06-30", endDate: "2025-07-11", price: "€2,200", level: "Advanced" },
            { name: "Winter Technical Camp", startDate: "2025-11-03", endDate: "2025-11-14", price: "€1,400", level: "Intermediate" }
        ],
        accommodation: {
            types: [
                { type: 'apartment', label: 'Private Apartment', pricePerWeek: 430, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: false },
                { type: 'private', label: 'Private Room', pricePerWeek: 390, maxOccupancy: 1, bathType: 'ensuite', mealsIncluded: true },
                { type: 'twin', label: 'Twin Room', pricePerWeek: 260, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
                { type: 'triple', label: 'Triple Room', pricePerWeek: 210, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true }
            ],
            companionsAllowed: true,
            childrenAllowed: true,
            minStay: 1,
            shuttleToTraining: true,
            notes: 'Located near Vinovo training grounds with Italian chef-prepared meals'
        },
        videoTour: null
    },
    {
        id: 'ac-milan-academy',
    availability: { status: 'open', nextIntake: '2025-06-01', spotsLeft: 20, responseTime: '24h', privateLessons: true, yearRound: true },
        name: 'AC Milan Academy',
        country: 'Italy',
        countryFlag: '🇮🇹',
        city: 'Milan',
        lat: 45.4785,
        lng: 9.123,
        website: 'https://www.acmilan.com/en/youth-sector',
        contact: '+39 02 62281',
        individualLessons: true,
        boarding: true,
        level: 'Elite',
        starred: true,
        airport: { name: 'Milan Malpensa Airport', code: 'MXP', distance: '50 km', driveTime: '50 min' },
        beach: { distance: null, description: 'No nearby beach, Lombardy plains urban area' },
        climate: 'milan',
        priceRange: { from: 2500, to: 8500, unit: 'month', display: '€2,500–8,500/mo' },
        programs: [
                { name: 'Youth Foundation', price: '€2,500/mo', desc: 'Core skills in the Milan tradition of elegant football' },
                { name: 'Development Program', price: '€4,000/mo', desc: 'Intensive training with tactical education' },
                { name: 'Elite Squad', price: '€6,500/mo', desc: 'Advanced preparation with competitive exposure' },
                { name: 'Professional Track', price: '€8,500/mo', desc: 'Complete professional development program' }
            ],
        coaches: [
                {
                        name: 'Angelo Carbone',
                        credential: 'UEFA Pro License',
                        background: 'AC Milan youth sector coordinator, Milan legend',
                        atpWta: false,
                        bestRanking: null,
                        rankingNote: null,
                        languages: ['Italian', 'English'],
                        instagram: null
                    },
                {
                        name: 'Federico Giunti',
                        credential: 'UEFA Pro License',
                        background: 'Former AC Milan Primavera coach, attacking philosophy',
                        atpWta: false,
                        bestRanking: null,
                        rankingNote: null,
                        languages: ['Italian', 'English'],
                        instagram: null
                    }
            ],
        bestCoachRanking: null,
        facilities: 'Vismara Sports Center, 8 pitches, indoor facility, gym, medical center, analysis rooms',
        courtSurfaces: ['Natural Grass', 'Artificial Turf', 'Indoor'],
        notableAlumni: ['Paolo Maldini', 'Franco Baresi', 'Alessandro Costacurta', 'Gennaro Gattuso', 'Daniel Maldini'],
        description: 'AC Milan Academy continues the proud tradition of one of the most decorated clubs in world football, developing technically refined and tactically astute players.',
        nearbyHotels: [
                {
                        name: 'Armani Hotel Milano',
                        stars: 5,
                        distanceKm: 10,
                        features: ['Restaurant', 'Spa', 'Gym', 'Bar'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€350'
                    },
                {
                        name: 'NH Milano Touring',
                        stars: 4,
                        distanceKm: 8,
                        features: ['Restaurant', 'Bar', 'Gym'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€120'
                    },
                {
                        name: 'Hotel Berna',
                        stars: 4,
                        distanceKm: 9,
                        features: ['Restaurant', 'Bar'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€90'
                    },
                {
                        name: 'Ibis Milano Centro',
                        stars: 3,
                        distanceKm: 9,
                        features: ['Bar', 'Restaurant'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€65'
                    },
                {
                        name: 'Ostello Bello',
                        stars: 2,
                        distanceKm: 10,
                        features: ['Bar', 'Terrace', 'Kitchen'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€30'
                    }
            ],
        nearbyRestaurants: [
                {
                        name: 'Trattoria Milanese',
                        cuisine: 'Milanese',
                        distanceKm: 10,
                        priceRange: '€€',
                        rating: 4.5,
                        vegetarian: false,
                        outdoor: false
                    },
                {
                        name: 'Spontini',
                        cuisine: 'Pizza',
                        distanceKm: 9,
                        priceRange: '€',
                        rating: 4.4,
                        vegetarian: true,
                        outdoor: false
                    },
                {
                        name: 'Ratana',
                        cuisine: 'Modern Italian',
                        distanceKm: 8,
                        priceRange: '€€€',
                        rating: 4.6,
                        vegetarian: true,
                        outdoor: true
                    },
                {
                        name: 'Luini Panzerotti',
                        cuisine: 'Street Food',
                        distanceKm: 10,
                        priceRange: '€',
                        rating: 4.5,
                        vegetarian: true,
                        outdoor: false
                    },
                {
                        name: 'Osteria del Treno',
                        cuisine: 'Italian Traditional',
                        distanceKm: 9,
                        priceRange: '€€',
                        rating: 4.3,
                        vegetarian: true,
                        outdoor: false
                    }
            ],
        nearbyMedical: [
                { name: 'Ospedale Niguarda', type: 'Hospital', distanceKm: 6, phone: '+39 02 6444 1', emergency: true },
                { name: 'Humanitas Research Hospital', type: 'Clinic', distanceKm: 8, phone: '+39 02 8224 1', emergency: true },
                { name: 'Fisioterapia Milano Sport', type: 'Physiotherapy', distanceKm: 3, phone: '+39 02 456 7890', emergency: false }
            ],
        costOfLiving: {
                rent1Bed: '€900',
                meal: '€12',
                monthlyFood: '€350',
                transport: '€39',
                currency: 'EUR',
                summary: 'Milan is moderately expensive with excellent lifestyle'
            },
        scholarships: { available: true, details: 'Scholarships for talented youth players with demonstrated ability.' },
        visaInfo: { schengen: true, eu: true, visaFreeCountries: 'EU/EEA citizens free entry, US/UK/Canada/Australia visa-free up to 90 days', notes: 'Schengen zone.' },
        airportTransfers: [
                { mode: 'Malpensa Express', duration: '50 min', cost: '€13', notes: 'Direct train to Milano Centrale' },
                { mode: 'Taxi', duration: '50 min', cost: '€80–100', notes: 'Fixed rate from Malpensa' },
                { mode: 'Private Transfer', duration: '50 min', cost: '€90–120', notes: 'Pre-book online' }
            ],
        nearbyTournaments: [
                { name: 'Torneo di Viareggio', level: 'International Youth', surface: 'Natural Grass', month: 'March', venue: 'Viareggio' },
                { name: 'Campionato Primavera', level: 'National Youth', surface: 'Natural Grass', month: 'August-May', venue: 'Various' },
                { name: 'Milano Cup', level: 'International Youth', surface: 'Artificial Turf', month: 'June', venue: 'Milan' }
            ],
        videoTour: null
    },
    {
        id: 'benfica-academy',
    availability: { status: 'open', nextIntake: '2025-09-01', spotsLeft: 10, responseTime: '24h', privateLessons: false, yearRound: true },
        name: 'Benfica Academy (Caixa Futebol Campus)',
        country: 'Portugal',
        countryFlag: '🇵🇹',
        city: 'Lisbon',
        lat: 38.7528,
        lng: -9.185,
        website: 'https://www.slbenfica.pt/en-us/caixafutebolcampus',
        contact: '+351 21 721 9500',
        individualLessons: true,
        boarding: true,
        level: 'Elite',
        starred: true,
        airport: { name: 'Lisbon Humberto Delgado Airport', code: 'LIS', distance: '15 km', driveTime: '20 min' },
        beach: { distance: 15, description: 'Cascais and Estoril beaches on the Atlantic coast' },
        climate: 'lisbon',
        priceRange: { from: 1500, to: 6000, unit: 'month', display: '€1,500–6,000/mo' },
        programs: [
                { name: 'Youth Foundation', price: '€1,500/mo', desc: 'Core skills and Portuguese football philosophy' },
                { name: 'Development Program', price: '€3,000/mo', desc: 'Intensive training with match integration' },
                { name: 'Elite Performance', price: '€4,500/mo', desc: 'Advanced program with sports science support' },
                { name: 'Professional Track', price: '€6,000/mo', desc: 'Complete professional preparation pathway' }
            ],
        coaches: [
                {
                        name: 'Joao Tralhao',
                        credential: 'UEFA Pro License',
                        background: 'Benfica youth development director, renowned coach',
                        atpWta: false,
                        bestRanking: null,
                        rankingNote: null,
                        languages: ['Portuguese', 'English', 'Spanish'],
                        instagram: null
                    },
                {
                        name: 'Renato Paiva',
                        credential: 'UEFA Pro License',
                        background: 'Former Benfica B coach, tactical specialist',
                        atpWta: false,
                        bestRanking: null,
                        rankingNote: null,
                        languages: ['Portuguese', 'English', 'Spanish'],
                        instagram: null
                    }
            ],
        bestCoachRanking: null,
        facilities: 'Caixa Futebol Campus, 9 pitches, indoor arena, gym, medical center, residence, 25 hectares',
        courtSurfaces: ['Natural Grass', 'Artificial Turf', 'Indoor'],
        notableAlumni: ['Bernardo Silva', 'Joao Felix', 'Ruben Dias', 'Ederson Moraes', 'Renato Sanches'],
        description: 'Benfica Academy at Caixa Futebol Campus is widely regarded as one of the best talent factories in world football, with a stunning 25-hectare complex.',
        nearbyHotels: [
                {
                        name: 'Tivoli Avenida Liberdade',
                        stars: 5,
                        distanceKm: 12,
                        features: ['Restaurant', 'Pool', 'Spa', 'Bar'],
                        pool: true,
                        wifi: true,
                        pricePerNight: '€200'
                    },
                {
                        name: 'Hotel Florida',
                        stars: 4,
                        distanceKm: 10,
                        features: ['Restaurant', 'Bar', 'Gym'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€90'
                    },
                {
                        name: 'Hotel Alif Avenidas',
                        stars: 4,
                        distanceKm: 8,
                        features: ['Restaurant', 'Bar'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€70'
                    },
                {
                        name: 'Ibis Lisboa Saldanha',
                        stars: 3,
                        distanceKm: 9,
                        features: ['Bar', 'Restaurant'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€55'
                    },
                {
                        name: 'Lisboa Central Hostel',
                        stars: 2,
                        distanceKm: 11,
                        features: ['Kitchen', 'Terrace'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€25'
                    }
            ],
        nearbyRestaurants: [
                {
                        name: 'Cervejaria Ramiro',
                        cuisine: 'Seafood',
                        distanceKm: 10,
                        priceRange: '€€€',
                        rating: 4.7,
                        vegetarian: false,
                        outdoor: false
                    },
                {
                        name: 'Time Out Market',
                        cuisine: 'Food Hall',
                        distanceKm: 12,
                        priceRange: '€€',
                        rating: 4.5,
                        vegetarian: true,
                        outdoor: true
                    },
                {
                        name: 'Tasca do Chico',
                        cuisine: 'Portuguese',
                        distanceKm: 12,
                        priceRange: '€€',
                        rating: 4.4,
                        vegetarian: true,
                        outdoor: false
                    },
                {
                        name: 'Cafe de Sao Bento',
                        cuisine: 'Portuguese Steak',
                        distanceKm: 11,
                        priceRange: '€€€',
                        rating: 4.5,
                        vegetarian: false,
                        outdoor: false
                    },
                {
                        name: 'Pasteis de Belem',
                        cuisine: 'Pastries / Cafe',
                        distanceKm: 14,
                        priceRange: '€',
                        rating: 4.6,
                        vegetarian: true,
                        outdoor: true
                    }
            ],
        nearbyMedical: [
                { name: 'Hospital de Santa Maria', type: 'Hospital', distanceKm: 5, phone: '+351 21 780 5000', emergency: true },
                { name: 'Hospital da Luz', type: 'Clinic', distanceKm: 3, phone: '+351 21 710 4400', emergency: true },
                { name: 'Fisioterapia Lisboa', type: 'Physiotherapy', distanceKm: 6, phone: '+351 21 345 6789', emergency: false }
            ],
        costOfLiving: {
                rent1Bed: '€650',
                meal: '€8',
                monthlyFood: '€250',
                transport: '€40',
                currency: 'EUR',
                summary: 'Lisbon is very affordable for Western Europe with excellent quality of life'
            },
        scholarships: { available: true, details: 'Benfica offers scholarships to top talent from around the world.' },
        visaInfo: { schengen: true, eu: true, visaFreeCountries: 'EU/EEA citizens free entry, US/UK/Canada/Australia visa-free up to 90 days', notes: 'Schengen zone.' },
        airportTransfers: [
                { mode: 'Metro', duration: '20 min', cost: '€1.50', notes: 'Red line from airport to city' },
                { mode: 'Taxi', duration: '20 min', cost: '€15–20', notes: 'Available at airport' },
                { mode: 'Private Transfer', duration: '20 min', cost: '€25–40', notes: 'Pre-book online' }
            ],
        nearbyTournaments: [
                { name: 'Torneio Internacional de Lisboa', level: 'International Youth', surface: 'Natural Grass', month: 'June', venue: 'Lisbon' },
                { name: 'Campeonato Nacional de Juniores', level: 'National Youth', surface: 'Natural Grass', month: 'August-May', venue: 'Various' }
            ],
        upcomingCamps: [
            { name: "Benfica Summer School", startDate: "2025-07-21", endDate: "2025-08-01", price: "€1,800", level: "All Levels" },
            { name: "Spring Striker Camp", startDate: "2025-04-07", endDate: "2025-04-11", price: "€650", level: "Intermediate" },
            { name: "Autumn Elite Camp", startDate: "2025-09-15", endDate: "2025-09-26", price: "€1,500", level: "Advanced" }
        ],
        accommodation: {
            types: [
                { type: 'private', label: 'Private Room', pricePerWeek: 340, maxOccupancy: 1, bathType: 'ensuite', mealsIncluded: true },
                { type: 'twin', label: 'Twin Room', pricePerWeek: 220, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
                { type: 'triple', label: 'Triple Room', pricePerWeek: 175, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true }
            ],
            companionsAllowed: true,
            childrenAllowed: true,
            minStay: 1,
            shuttleToTraining: true,
            notes: 'Seixal training complex with ocean views and recovery pool access'
        },
        videoTour: null
    },
    {
        id: 'sporting-cp-academy',
    availability: { status: 'limited', nextIntake: '2025-10-01', spotsLeft: 5, responseTime: '48h', privateLessons: true, yearRound: true },
        name: 'Sporting CP Academy',
        country: 'Portugal',
        countryFlag: '🇵🇹',
        city: 'Lisbon',
        lat: 38.7614,
        lng: -9.1609,
        website: 'https://www.sporting.pt/en/academy',
        contact: '+351 21 751 6000',
        individualLessons: true,
        boarding: true,
        level: 'Elite',
        starred: true,
        airport: { name: 'Lisbon Humberto Delgado Airport', code: 'LIS', distance: '8 km', driveTime: '15 min' },
        beach: { distance: 15, description: 'Cascais and Costa da Caparica beaches nearby' },
        climate: 'lisbon',
        priceRange: { from: 1500, to: 5500, unit: 'month', display: '€1,500–5,500/mo' },
        programs: [
                { name: 'Youth Development', price: '€1,500/mo', desc: 'Portuguese technical style and creative play' },
                { name: 'Intensive Training', price: '€3,000/mo', desc: 'Full-day development with match exposure' },
                { name: 'Elite Program', price: '€4,500/mo', desc: 'Advanced training with professional standards' },
                { name: 'Pro Pathway', price: '€5,500/mo', desc: 'Pathway to professional football career' }
            ],
        coaches: [
                {
                        name: 'Paulo Gomes',
                        credential: 'UEFA Pro License',
                        background: 'Sporting academy coordinator, youth development expert',
                        atpWta: false,
                        bestRanking: null,
                        rankingNote: null,
                        languages: ['Portuguese', 'English', 'Spanish'],
                        instagram: null
                    },
                {
                        name: 'Tiago Fernandes',
                        credential: 'UEFA Pro License',
                        background: 'Former Sporting youth coach, technical specialist',
                        atpWta: false,
                        bestRanking: null,
                        rankingNote: null,
                        languages: ['Portuguese', 'English'],
                        instagram: null
                    }
            ],
        bestCoachRanking: null,
        facilities: 'Sporting training complex, 6 pitches, indoor facility, gym, medical center, academy residence',
        courtSurfaces: ['Natural Grass', 'Artificial Turf', 'Indoor'],
        notableAlumni: ['Cristiano Ronaldo', 'Luis Figo', 'Nani', 'Joao Moutinho', 'Bruno Fernandes'],
        description: 'Sporting CP Academy is famous as the academy that produced Cristiano Ronaldo and continues to develop world-class Portuguese talent.',
        nearbyHotels: [
                {
                        name: 'Tivoli Avenida Liberdade',
                        stars: 5,
                        distanceKm: 5,
                        features: ['Restaurant', 'Pool', 'Spa', 'Bar'],
                        pool: true,
                        wifi: true,
                        pricePerNight: '€200'
                    },
                {
                        name: 'Hotel Florida',
                        stars: 4,
                        distanceKm: 3,
                        features: ['Restaurant', 'Bar', 'Gym'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€90'
                    },
                {
                        name: 'Hotel Alif Campo Pequeno',
                        stars: 4,
                        distanceKm: 1,
                        features: ['Restaurant', 'Bar'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€65'
                    },
                {
                        name: 'Ibis Lisboa Saldanha',
                        stars: 3,
                        distanceKm: 2,
                        features: ['Bar', 'Restaurant'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€55'
                    },
                {
                        name: 'Lisboa Central Hostel',
                        stars: 2,
                        distanceKm: 4,
                        features: ['Kitchen', 'Terrace'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€25'
                    }
            ],
        nearbyRestaurants: [
                {
                        name: 'Cervejaria Ramiro',
                        cuisine: 'Seafood',
                        distanceKm: 3,
                        priceRange: '€€€',
                        rating: 4.7,
                        vegetarian: false,
                        outdoor: false
                    },
                {
                        name: 'Time Out Market',
                        cuisine: 'Food Hall',
                        distanceKm: 5,
                        priceRange: '€€',
                        rating: 4.5,
                        vegetarian: true,
                        outdoor: true
                    },
                {
                        name: 'O Velho Eurico',
                        cuisine: 'Portuguese',
                        distanceKm: 4,
                        priceRange: '€€',
                        rating: 4.3,
                        vegetarian: true,
                        outdoor: false
                    },
                {
                        name: 'Solar dos Presuntos',
                        cuisine: 'Portuguese',
                        distanceKm: 3,
                        priceRange: '€€€',
                        rating: 4.5,
                        vegetarian: false,
                        outdoor: false
                    },
                {
                        name: 'Cafe A Brasileira',
                        cuisine: 'Cafe',
                        distanceKm: 5,
                        priceRange: '€',
                        rating: 4.2,
                        vegetarian: true,
                        outdoor: true
                    }
            ],
        nearbyMedical: [
                { name: 'Hospital de Santa Maria', type: 'Hospital', distanceKm: 3, phone: '+351 21 780 5000', emergency: true },
                { name: 'Hospital CUF Descobertas', type: 'Clinic', distanceKm: 5, phone: '+351 21 002 5200', emergency: true },
                { name: 'Fisioterapia Desportiva Lisboa', type: 'Physiotherapy', distanceKm: 2, phone: '+351 21 456 7890', emergency: false }
            ],
        costOfLiving: {
                rent1Bed: '€650',
                meal: '€8',
                monthlyFood: '€250',
                transport: '€40',
                currency: 'EUR',
                summary: 'Lisbon offers great value in Western Europe'
            },
        scholarships: { available: true, details: 'Full scholarships for exceptional talent identified by scouts.' },
        visaInfo: { schengen: true, eu: true, visaFreeCountries: 'EU/EEA citizens free entry, US/UK/Canada/Australia visa-free up to 90 days', notes: 'Schengen zone.' },
        airportTransfers: [
                { mode: 'Metro', duration: '15 min', cost: '€1.50', notes: 'Green line direct connection' },
                { mode: 'Taxi', duration: '15 min', cost: '€10–15', notes: 'Available at airport' },
                { mode: 'Private Transfer', duration: '15 min', cost: '€20–30', notes: 'Pre-book online' }
            ],
        nearbyTournaments: [
                { name: 'Torneio Internacional de Lisboa', level: 'International Youth', surface: 'Natural Grass', month: 'June', venue: 'Lisbon' },
                { name: 'Campeonato Nacional de Juniores', level: 'National Youth', surface: 'Natural Grass', month: 'August-May', venue: 'Various' }
            ],
        videoTour: null
    },
    {
        id: 'red-bull-salzburg-academy',
    availability: { status: 'closed', nextIntake: '2025-12-01', spotsLeft: null, responseTime: '3-5 days', privateLessons: true, yearRound: false },
        name: 'Red Bull Salzburg Academy',
        country: 'Austria',
        countryFlag: '🇦🇹',
        city: 'Salzburg',
        lat: 47.8164,
        lng: 13.0458,
        website: 'https://www.redbullsalzburg.at/en/academy.html',
        contact: '+43 662 433 332',
        individualLessons: true,
        boarding: true,
        level: 'Advanced',
        starred: true,
        airport: { name: 'Salzburg Airport', code: 'SZG', distance: '4 km', driveTime: '10 min' },
        beach: { distance: null, description: 'No nearby beach, alpine lakeland setting' },
        climate: 'salzburg',
        priceRange: { from: 2000, to: 7000, unit: 'month', display: '€2,000–7,000/mo' },
        programs: [
                { name: 'Youth Foundation', price: '€2,000/mo', desc: 'Core skills with Red Bull high-press philosophy' },
                { name: 'Development Program', price: '€3,500/mo', desc: 'Intensive training with competitive matches' },
                { name: 'Elite Performance', price: '€5,500/mo', desc: 'Advanced program with data-driven coaching' },
                { name: 'Pro Pathway', price: '€7,000/mo', desc: 'Professional preparation with global pathway' }
            ],
        coaches: [
                {
                        name: 'Rene Aufhauser',
                        credential: 'UEFA Pro License',
                        background: 'RB Salzburg youth director, pressing philosophy expert',
                        atpWta: false,
                        bestRanking: null,
                        rankingNote: null,
                        languages: ['German', 'English'],
                        instagram: null
                    },
                {
                        name: 'Thomas Letsch',
                        credential: 'UEFA Pro License',
                        background: 'Former Red Bull development coach, tactical innovator',
                        atpWta: false,
                        bestRanking: null,
                        rankingNote: null,
                        languages: ['German', 'English', 'Dutch'],
                        instagram: null
                    }
            ],
        bestCoachRanking: null,
        facilities: 'Red Bull Academy, 6 pitches, indoor arena, gym, sports science center, player residence',
        courtSurfaces: ['Natural Grass', 'Artificial Turf', 'Indoor'],
        notableAlumni: ['Erling Haaland', 'Sadio Mane', 'Naby Keita', 'Dayot Upamecano', 'Dominik Szoboszlai'],
        description: 'Red Bull Salzburg Academy is a world-class talent development center known for its high-intensity pressing style and global talent pipeline.',
        nearbyHotels: [
                {
                        name: 'Hotel Sacher Salzburg',
                        stars: 5,
                        distanceKm: 5,
                        features: ['Restaurant', 'Spa', 'Bar'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€280'
                    },
                {
                        name: 'Austria Trend Hotel Europa',
                        stars: 4,
                        distanceKm: 4,
                        features: ['Restaurant', 'Bar', 'Gym'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€120'
                    },
                {
                        name: 'Star Inn Hotel Salzburg',
                        stars: 3,
                        distanceKm: 3,
                        features: ['Bar', 'Parking'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€75'
                    },
                {
                        name: 'MEININGER Hotel Salzburg',
                        stars: 3,
                        distanceKm: 5,
                        features: ['Bar', 'Kitchen', 'Lounge'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€55'
                    },
                {
                        name: 'Yoho International Youth Hostel',
                        stars: 2,
                        distanceKm: 5,
                        features: ['Kitchen', 'Bar'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€25'
                    }
            ],
        nearbyRestaurants: [
                {
                        name: 'Stiftskeller St. Peter',
                        cuisine: 'Austrian',
                        distanceKm: 5,
                        priceRange: '€€€',
                        rating: 4.6,
                        vegetarian: true,
                        outdoor: true
                    },
                {
                        name: 'Zum Fidelen Affen',
                        cuisine: 'Austrian',
                        distanceKm: 4,
                        priceRange: '€€',
                        rating: 4.4,
                        vegetarian: true,
                        outdoor: true
                    },
                {
                        name: 'Triangel',
                        cuisine: 'International',
                        distanceKm: 4,
                        priceRange: '€€',
                        rating: 4.3,
                        vegetarian: true,
                        outdoor: true
                    },
                {
                        name: 'Biergarten Augustiner',
                        cuisine: 'Bavarian',
                        distanceKm: 4,
                        priceRange: '€',
                        rating: 4.5,
                        vegetarian: true,
                        outdoor: true
                    },
                {
                        name: 'Cafe Tomaselli',
                        cuisine: 'Cafe',
                        distanceKm: 5,
                        priceRange: '€€',
                        rating: 4.3,
                        vegetarian: true,
                        outdoor: true
                    }
            ],
        nearbyMedical: [
                { name: 'Universitatsklinikum Salzburg', type: 'Hospital', distanceKm: 4, phone: '+43 5 7255 0', emergency: true },
                { name: 'Privatklinik Wehrle-Diakonissen', type: 'Clinic', distanceKm: 5, phone: '+43 662 6385 0', emergency: true },
                { name: 'Physiotherapie Salzburg Sport', type: 'Physiotherapy', distanceKm: 2, phone: '+43 662 123 456', emergency: false }
            ],
        costOfLiving: {
                rent1Bed: '€750',
                meal: '€12',
                monthlyFood: '€300',
                transport: '€45',
                currency: 'EUR',
                summary: 'Salzburg is moderately priced with excellent quality of life'
            },
        scholarships: { available: true, details: 'Performance scholarships through the Red Bull development system.' },
        visaInfo: { schengen: true, eu: true, visaFreeCountries: 'EU/EEA citizens free entry, US/UK/Canada/Australia visa-free up to 90 days', notes: 'Schengen zone.' },
        airportTransfers: [
                { mode: 'Trolleybus', duration: '20 min', cost: '€2.70', notes: 'Line 2 to city center' },
                { mode: 'Taxi', duration: '10 min', cost: '€15–20', notes: 'Available at airport' },
                { mode: 'Private Transfer', duration: '10 min', cost: '€25–40', notes: 'Pre-book online' }
            ],
        nearbyTournaments: [
                { name: 'Red Bull Salzburg Youth Cup', level: 'International Youth', surface: 'Natural Grass', month: 'July', venue: 'Red Bull Academy' },
                { name: 'OFB Jugend Cup', level: 'National Youth', surface: 'Natural Grass', month: 'May', venue: 'Various' }
            ],
        accommodation: {
            types: [
                { type: 'private', label: 'Private Room', pricePerWeek: 400, maxOccupancy: 1, bathType: 'ensuite', mealsIncluded: true },
                { type: 'twin', label: 'Twin Room', pricePerWeek: 260, maxOccupancy: 2, bathType: 'ensuite', mealsIncluded: true },
                { type: 'triple', label: 'Triple Room', pricePerWeek: 200, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true }
            ],
            companionsAllowed: true,
            childrenAllowed: true,
            minStay: 1,
            shuttleToTraining: true,
            notes: 'Modern Alpine-style accommodation with sports nutrition program'
        },
        videoTour: null
    },
    {
        id: 'anderlecht-academy',
    availability: { status: 'open', nextIntake: '2025-06-01', spotsLeft: 20, responseTime: '24h', privateLessons: true, yearRound: true },
        name: 'RSC Anderlecht Academy',
        country: 'Belgium',
        countryFlag: '🇧🇪',
        city: 'Brussels',
        lat: 50.834,
        lng: 4.298,
        website: 'https://www.rsca.be/en/youth-academy',
        contact: '+32 2 522 1539',
        individualLessons: true,
        boarding: true,
        level: 'Advanced',
        starred: true,
        airport: { name: 'Brussels Airport', code: 'BRU', distance: '18 km', driveTime: '25 min' },
        beach: { distance: null, description: 'No nearby beach, central Belgian urban area' },
        climate: 'brussels',
        priceRange: { from: 1500, to: 6000, unit: 'month', display: '€1,500–6,000/mo' },
        programs: [
                { name: 'Youth Foundation', price: '€1,500/mo', desc: 'Belgian football technique and creativity' },
                { name: 'Development Program', price: '€3,000/mo', desc: 'Intensive training with league competition' },
                { name: 'Elite Training', price: '€4,500/mo', desc: 'Advanced program with professional mentoring' },
                { name: 'Pro Academy', price: '€6,000/mo', desc: 'Complete professional development pathway' }
            ],
        coaches: [
                {
                        name: 'Jean Kindermans',
                        credential: 'UEFA Pro License',
                        background: 'Anderlecht youth academy director',
                        atpWta: false,
                        bestRanking: null,
                        rankingNote: null,
                        languages: ['French', 'Dutch', 'English'],
                        instagram: null
                    },
                {
                        name: 'Craig Bellamy',
                        credential: 'UEFA A License',
                        background: 'Former Premier League player, youth coaching specialist',
                        atpWta: false,
                        bestRanking: null,
                        rankingNote: null,
                        languages: ['English', 'French'],
                        instagram: null
                    }
            ],
        bestCoachRanking: null,
        facilities: 'Neerpede training complex, 8 pitches, indoor hall, gym, medical center, residential academy',
        courtSurfaces: ['Natural Grass', 'Artificial Turf', 'Indoor'],
        notableAlumni: ['Vincent Kompany', 'Romelu Lukaku', 'Youri Tielemans', 'Adrien Trebel', 'Leander Dendoncker'],
        description: 'RSC Anderlecht Academy at Neerpede is the most successful youth development program in Belgian football history.',
        nearbyHotels: [
                {
                        name: 'Steigenberger Wiltchers',
                        stars: 5,
                        distanceKm: 7,
                        features: ['Restaurant', 'Spa', 'Bar', 'Gym'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€220'
                    },
                {
                        name: 'NH Brussels Louise',
                        stars: 4,
                        distanceKm: 5,
                        features: ['Restaurant', 'Bar', 'Gym'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€110'
                    },
                {
                        name: 'Ibis Brussels Centre',
                        stars: 3,
                        distanceKm: 6,
                        features: ['Bar', 'Restaurant'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€65'
                    },
                {
                        name: 'MEININGER Hotel Brussels',
                        stars: 3,
                        distanceKm: 7,
                        features: ['Bar', 'Kitchen', 'Lounge'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€45'
                    },
                {
                        name: '2GO4 Quality Hostel',
                        stars: 2,
                        distanceKm: 7,
                        features: ['Kitchen', 'Lounge'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€25'
                    }
            ],
        nearbyRestaurants: [
                {
                        name: 'Comme Chez Soi',
                        cuisine: 'French-Belgian',
                        distanceKm: 6,
                        priceRange: '€€€€',
                        rating: 4.8,
                        vegetarian: true,
                        outdoor: false
                    },
                {
                        name: 'Chez Leon',
                        cuisine: 'Belgian Mussels',
                        distanceKm: 7,
                        priceRange: '€€',
                        rating: 4.3,
                        vegetarian: false,
                        outdoor: false
                    },
                {
                        name: 'Le Pain Quotidien',
                        cuisine: 'Bakery / Cafe',
                        distanceKm: 5,
                        priceRange: '€',
                        rating: 4.2,
                        vegetarian: true,
                        outdoor: true
                    },
                {
                        name: 'Fin de Siecle',
                        cuisine: 'Belgian Brasserie',
                        distanceKm: 7,
                        priceRange: '€€',
                        rating: 4.4,
                        vegetarian: true,
                        outdoor: false
                    },
                {
                        name: 'Fritland',
                        cuisine: 'Belgian Fries',
                        distanceKm: 7,
                        priceRange: '€',
                        rating: 4.1,
                        vegetarian: true,
                        outdoor: false
                    }
            ],
        nearbyMedical: [
                { name: 'UZ Brussel', type: 'Hospital', distanceKm: 5, phone: '+32 2 477 4111', emergency: true },
                { name: 'Clinique Saint-Jean', type: 'Clinic', distanceKm: 7, phone: '+32 2 221 9111', emergency: true },
                { name: 'Kinesitherapie Anderlecht', type: 'Physiotherapy', distanceKm: 1, phone: '+32 2 345 6789', emergency: false }
            ],
        costOfLiving: {
                rent1Bed: '€800',
                meal: '€12',
                monthlyFood: '€320',
                transport: '€49',
                currency: 'EUR',
                summary: 'Brussels is moderately priced for a European capital'
            },
        scholarships: { available: true, details: 'Scholarships for Belgian and international youth talent.' },
        visaInfo: { schengen: true, eu: true, visaFreeCountries: 'EU/EEA citizens free entry, US/UK/Canada/Australia visa-free up to 90 days', notes: 'Schengen zone.' },
        airportTransfers: [
                { mode: 'Train', duration: '20 min', cost: '€9', notes: 'Direct from airport to Bruxelles-Midi' },
                { mode: 'Taxi', duration: '25 min', cost: '€35–45', notes: 'Available at airport' },
                { mode: 'Private Transfer', duration: '25 min', cost: '€50–65', notes: 'Pre-book online' }
            ],
        nearbyTournaments: [
                { name: 'Belgian Youth Cup', level: 'National Youth', surface: 'Natural Grass', month: 'May', venue: 'Various' },
                { name: 'Brussels Youth Tournament', level: 'Regional', surface: 'Artificial Turf', month: 'June', venue: 'Brussels' }
            ],
        videoTour: null
    },
    {
        id: 'dinamo-zagreb-academy',
    availability: { status: 'limited', nextIntake: '2025-10-01', spotsLeft: 3, responseTime: '48h', privateLessons: true, yearRound: true },
        name: 'Dinamo Zagreb Academy',
        country: 'Croatia',
        countryFlag: '🇭🇷',
        city: 'Zagreb',
        lat: 45.8206,
        lng: 16.0182,
        website: 'https://gnkdinamo.hr/en/Academy',
        contact: '+385 1 2386 111',
        individualLessons: true,
        boarding: true,
        level: 'Advanced',
        starred: true,
        airport: { name: 'Franjo Tudman Airport Zagreb', code: 'ZAG', distance: '15 km', driveTime: '20 min' },
        beach: { distance: null, description: 'No nearby beach, continental Croatian capital' },
        climate: 'zagreb',
        priceRange: { from: 1000, to: 4000, unit: 'month', display: '€1,000–4,000/mo' },
        programs: [
                { name: 'Youth Development', price: '€1,000/mo', desc: 'Croatian technical style and ball mastery' },
                { name: 'Intensive Camp', price: '€2,000/mo', desc: 'Full-day training with match integration' },
                { name: 'Elite Program', price: '€3,000/mo', desc: 'Advanced training with competitive exposure' },
                { name: 'Pro Development', price: '€4,000/mo', desc: 'Professional pathway with European exposure' }
            ],
        coaches: [
                {
                        name: 'Romeo Jozak',
                        credential: 'UEFA Pro License',
                        background: 'Dinamo youth director, Croatian football philosophy',
                        atpWta: false,
                        bestRanking: null,
                        rankingNote: null,
                        languages: ['Croatian', 'English', 'German'],
                        instagram: null
                    },
                {
                        name: 'Igor Biscan',
                        credential: 'UEFA Pro License',
                        background: 'Former Liverpool player, youth development specialist',
                        atpWta: false,
                        bestRanking: null,
                        rankingNote: null,
                        languages: ['Croatian', 'English'],
                        instagram: null
                    }
            ],
        bestCoachRanking: null,
        facilities: 'Hitrec-Kacian training center, 6 pitches, indoor hall, gym, medical center, residence',
        courtSurfaces: ['Natural Grass', 'Artificial Turf', 'Indoor'],
        notableAlumni: ['Luka Modric', 'Mateo Kovacic', 'Dejan Lovren', 'Vedran Corluka', 'Marcelo Brozovic'],
        description: 'Dinamo Zagreb Academy is the most successful talent factory in Croatian football, producing numerous stars who have excelled across Europe.',
        nearbyHotels: [
                {
                        name: 'Esplanade Zagreb Hotel',
                        stars: 5,
                        distanceKm: 5,
                        features: ['Restaurant', 'Spa', 'Bar'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€180'
                    },
                {
                        name: 'Hotel Dubrovnik',
                        stars: 4,
                        distanceKm: 4,
                        features: ['Restaurant', 'Bar'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€100'
                    },
                {
                        name: 'Hotel Jadran',
                        stars: 3,
                        distanceKm: 4,
                        features: ['Restaurant', 'Bar'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€60'
                    },
                {
                        name: 'Hotel Garden',
                        stars: 3,
                        distanceKm: 5,
                        features: ['Restaurant', 'Parking'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€50'
                    },
                {
                        name: 'Hostel Bureau',
                        stars: 2,
                        distanceKm: 4,
                        features: ['Kitchen', 'Lounge'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€20'
                    }
            ],
        nearbyRestaurants: [
                {
                        name: 'Vinodol',
                        cuisine: 'Croatian',
                        distanceKm: 4,
                        priceRange: '€€',
                        rating: 4.5,
                        vegetarian: true,
                        outdoor: true
                    },
                {
                        name: 'Bistro Apetit',
                        cuisine: 'Modern Croatian',
                        distanceKm: 5,
                        priceRange: '€€€',
                        rating: 4.6,
                        vegetarian: true,
                        outdoor: true
                    },
                {
                        name: 'Lari & Penati',
                        cuisine: 'Mediterranean',
                        distanceKm: 4,
                        priceRange: '€€',
                        rating: 4.4,
                        vegetarian: true,
                        outdoor: true
                    },
                {
                        name: 'Mundoaka Street Food',
                        cuisine: 'Street Food',
                        distanceKm: 4,
                        priceRange: '€',
                        rating: 4.3,
                        vegetarian: true,
                        outdoor: false
                    },
                {
                        name: 'Pod Starim Krovovima',
                        cuisine: 'Croatian Traditional',
                        distanceKm: 4,
                        priceRange: '€€',
                        rating: 4.2,
                        vegetarian: true,
                        outdoor: true
                    }
            ],
        nearbyMedical: [
                { name: 'KBC Zagreb', type: 'Hospital', distanceKm: 4, phone: '+385 1 238 8888', emergency: true },
                { name: 'Poliklinika Sunce', type: 'Clinic', distanceKm: 3, phone: '+385 1 609 1600', emergency: true },
                { name: 'Fizioterapija Zagreb', type: 'Physiotherapy', distanceKm: 2, phone: '+385 1 345 6789', emergency: false }
            ],
        costOfLiving: {
                rent1Bed: '€450',
                meal: '€7',
                monthlyFood: '€200',
                transport: '€30',
                currency: 'EUR',
                summary: 'Zagreb is very affordable with good infrastructure'
            },
        scholarships: { available: true, details: 'Scholarships for talented Croatian and regional youth players.' },
        visaInfo: { schengen: true, eu: true, visaFreeCountries: 'EU/EEA citizens free entry, US/UK/Canada/Australia visa-free up to 90 days', notes: 'EU member, Schengen zone since 2023.' },
        airportTransfers: [
                { mode: 'Bus', duration: '30 min', cost: '€5', notes: 'Airport shuttle to city center' },
                { mode: 'Taxi', duration: '20 min', cost: '€20–30', notes: 'Available at airport' },
                { mode: 'Private Transfer', duration: '20 min', cost: '€30–45', notes: 'Pre-book online' }
            ],
        nearbyTournaments: [
                { name: 'Croatian Youth League', level: 'National Youth', surface: 'Natural Grass', month: 'August-May', venue: 'Various' },
                { name: 'Zagreb Youth Cup', level: 'International Youth', surface: 'Natural Grass', month: 'June', venue: 'Zagreb' }
            ],
        accommodation: {
            types: [
                { type: 'private', label: 'Private Room', pricePerWeek: 280, maxOccupancy: 1, bathType: 'ensuite', mealsIncluded: true },
                { type: 'twin', label: 'Twin Room', pricePerWeek: 185, maxOccupancy: 2, bathType: 'shared', mealsIncluded: true },
                { type: 'triple', label: 'Triple Room', pricePerWeek: 145, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true }
            ],
            companionsAllowed: true,
            childrenAllowed: true,
            minStay: 2,
            shuttleToTraining: true,
            notes: 'Maksimir area accommodation with easy access to training grounds and city centre'
        },
        videoTour: null
    },
    {
        id: 'red-star-belgrade-academy',
    availability: { status: 'limited', nextIntake: '2025-09-15', spotsLeft: 2, responseTime: '24h', privateLessons: true, yearRound: false },
        name: 'Red Star Belgrade Academy',
        country: 'Serbia',
        countryFlag: '🇷🇸',
        city: 'Belgrade',
        lat: 44.7833,
        lng: 20.4597,
        website: 'https://www.crvenazvezdafk.com/en/academy',
        contact: '+381 11 206 9900',
        individualLessons: true,
        boarding: true,
        level: 'Intermediate',
        starred: true,
        airport: { name: 'Belgrade Nikola Tesla Airport', code: 'BEG', distance: '18 km', driveTime: '25 min' },
        beach: { distance: null, description: 'No nearby beach, confluence of Danube and Sava rivers' },
        climate: 'belgrade',
        priceRange: { from: 800, to: 3000, unit: 'month', display: '€800–3,000/mo' },
        programs: [
                { name: 'Youth Development', price: '€800/mo', desc: 'Serbian football fundamentals and physicality' },
                { name: 'Intensive Camp', price: '€1,500/mo', desc: 'Full-day training with competitive matches' },
                { name: 'Elite Program', price: '€2,200/mo', desc: 'Advanced program with European exposure' },
                { name: 'Pro Pathway', price: '€3,000/mo', desc: 'Professional development with first-team integration' }
            ],
        coaches: [
                {
                        name: 'Marko Pantelic',
                        credential: 'UEFA Pro License',
                        background: 'Former Red Star and Ajax striker, youth director',
                        atpWta: false,
                        bestRanking: null,
                        rankingNote: null,
                        languages: ['Serbian', 'English', 'Dutch'],
                        instagram: null
                    },
                {
                        name: 'Dejan Stankovic Jr',
                        credential: 'UEFA A License',
                        background: 'Youth development coach, tactical specialist',
                        atpWta: false,
                        bestRanking: null,
                        rankingNote: null,
                        languages: ['Serbian', 'Italian', 'English'],
                        instagram: null
                    }
            ],
        bestCoachRanking: null,
        facilities: 'Red Star training center, 5 pitches, indoor hall, gym, medical room, academy building',
        courtSurfaces: ['Natural Grass', 'Artificial Turf', 'Indoor'],
        notableAlumni: ['Dejan Stankovic', 'Nemanja Vidic', 'Dragan Stojkovic', 'Vladimir Jugovic', 'Dusan Tadic'],
        description: 'Red Star Belgrade Academy has a proud tradition of developing Serbian football talent, producing numerous international stars.',
        nearbyHotels: [
                {
                        name: 'Square Nine Hotel',
                        stars: 5,
                        distanceKm: 5,
                        features: ['Restaurant', 'Spa', 'Pool', 'Bar'],
                        pool: true,
                        wifi: true,
                        pricePerNight: '€150'
                    },
                {
                        name: 'Metropol Palace',
                        stars: 4,
                        distanceKm: 4,
                        features: ['Restaurant', 'Pool', 'Spa'],
                        pool: true,
                        wifi: true,
                        pricePerNight: '€100'
                    },
                {
                        name: 'Hotel Moskva',
                        stars: 4,
                        distanceKm: 5,
                        features: ['Restaurant', 'Bar', 'Cafe'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€80'
                    },
                {
                        name: 'Hotel Rex',
                        stars: 3,
                        distanceKm: 5,
                        features: ['Restaurant', 'Bar'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€45'
                    },
                {
                        name: 'Hostel Downtown',
                        stars: 2,
                        distanceKm: 5,
                        features: ['Kitchen', 'Lounge'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€15'
                    }
            ],
        nearbyRestaurants: [
                {
                        name: 'Tri Sesira',
                        cuisine: 'Serbian',
                        distanceKm: 5,
                        priceRange: '€€',
                        rating: 4.5,
                        vegetarian: false,
                        outdoor: true
                    },
                {
                        name: 'Kalemegdanska Terasa',
                        cuisine: 'Serbian',
                        distanceKm: 4,
                        priceRange: '€€€',
                        rating: 4.4,
                        vegetarian: true,
                        outdoor: true
                    },
                {
                        name: 'Comunale Caffe e Cucina',
                        cuisine: 'Italian-Serbian',
                        distanceKm: 5,
                        priceRange: '€€',
                        rating: 4.3,
                        vegetarian: true,
                        outdoor: true
                    },
                {
                        name: 'Zaplet',
                        cuisine: 'Balkan Grill',
                        distanceKm: 6,
                        priceRange: '€',
                        rating: 4.2,
                        vegetarian: false,
                        outdoor: true
                    },
                {
                        name: 'Smokvica',
                        cuisine: 'Mediterranean',
                        distanceKm: 5,
                        priceRange: '€€',
                        rating: 4.4,
                        vegetarian: true,
                        outdoor: true
                    }
            ],
        nearbyMedical: [
                { name: 'Clinical Center of Serbia', type: 'Hospital', distanceKm: 4, phone: '+381 11 366 1122', emergency: true },
                { name: 'Acibadem Bel Medic', type: 'Clinic', distanceKm: 6, phone: '+381 11 309 1000', emergency: true },
                { name: 'Fizioterapija Beograd', type: 'Physiotherapy', distanceKm: 3, phone: '+381 11 234 5678', emergency: false }
            ],
        costOfLiving: {
                rent1Bed: '€350',
                meal: '€5',
                monthlyFood: '€180',
                transport: '€25',
                currency: 'EUR',
                summary: 'Belgrade is one of the cheapest European capitals'
            },
        scholarships: { available: true, details: 'Scholarships for talented Serbian youth players.' },
        visaInfo: { schengen: false, eu: false, visaFreeCountries: 'EU/EEA citizens visa-free, US/UK/Canada visa-free up to 90 days', notes: 'Non-EU. Most visitors need no visa for short stays.' },
        airportTransfers: [
                { mode: 'Bus', duration: '30 min', cost: '€1.50', notes: 'Bus 72 to city center' },
                { mode: 'Taxi', duration: '25 min', cost: '€15–20', notes: 'Available at airport' },
                { mode: 'Private Transfer', duration: '25 min', cost: '€20–30', notes: 'Pre-book online' }
            ],
        nearbyTournaments: [
                { name: 'Serbian Super Liga Youth', level: 'National Youth', surface: 'Natural Grass', month: 'August-May', venue: 'Various' },
                { name: 'Belgrade Youth Cup', level: 'Regional', surface: 'Artificial Turf', month: 'July', venue: 'Belgrade' }
            ],
        accommodation: {
            types: [
                { type: 'private', label: 'Private Room', pricePerWeek: 200, maxOccupancy: 1, bathType: 'ensuite', mealsIncluded: true },
                { type: 'twin', label: 'Twin Room', pricePerWeek: 135, maxOccupancy: 2, bathType: 'shared', mealsIncluded: true },
                { type: 'triple', label: 'Triple Room', pricePerWeek: 105, maxOccupancy: 3, bathType: 'shared', mealsIncluded: true },
                { type: 'dorm', label: 'Youth Dormitory', pricePerWeek: 80, maxOccupancy: 6, bathType: 'shared', mealsIncluded: true }
            ],
            companionsAllowed: true,
            childrenAllowed: true,
            minStay: 1,
            shuttleToTraining: true,
            notes: 'On-site at Marakana stadium complex with traditional Serbian cuisine included'
        },
        videoTour: null
    },
    {
        id: 'olympiacos-academy',
    availability: { status: 'open', nextIntake: '2025-06-01', spotsLeft: 6, responseTime: '24h', privateLessons: true, yearRound: true },
        name: 'Olympiacos Academy',
        country: 'Greece',
        countryFlag: '🇬🇷',
        city: 'Piraeus',
        lat: 37.9416,
        lng: 23.6362,
        website: 'https://www.olympiacos.org/en/academy',
        contact: '+30 210 414 3000',
        individualLessons: true,
        boarding: true,
        level: 'Intermediate',
        starred: true,
        airport: { name: 'Athens International Airport', code: 'ATH', distance: '40 km', driveTime: '45 min' },
        beach: { distance: 2, description: 'Piraeus coastline with several small beaches' },
        climate: 'athens',
        priceRange: { from: 1000, to: 4500, unit: 'month', display: '€1,000–4,500/mo' },
        programs: [
                { name: 'Youth Development', price: '€1,000/mo', desc: 'Greek football fundamentals and technical skills' },
                { name: 'Intensive Camp', price: '€2,000/mo', desc: 'Full-day training in Mediterranean conditions' },
                { name: 'Elite Program', price: '€3,500/mo', desc: 'Advanced program with competitive league play' },
                { name: 'Pro Development', price: '€4,500/mo', desc: 'Professional preparation with European exposure' }
            ],
        coaches: [
                {
                        name: 'Takis Gonias',
                        credential: 'UEFA Pro License',
                        background: 'Olympiacos youth director, Greek football specialist',
                        atpWta: false,
                        bestRanking: null,
                        rankingNote: null,
                        languages: ['Greek', 'English'],
                        instagram: null
                    },
                {
                        name: 'Georgios Georgiadis',
                        credential: 'UEFA A License',
                        background: 'Former Greek international, development coach',
                        atpWta: false,
                        bestRanking: null,
                        rankingNote: null,
                        languages: ['Greek', 'English', 'German'],
                        instagram: null
                    }
            ],
        bestCoachRanking: null,
        facilities: 'Rentis Training Center, 5 pitches, indoor facility, gym, medical center, youth residence',
        courtSurfaces: ['Natural Grass', 'Artificial Turf', 'Indoor'],
        notableAlumni: ['Kostas Fortounis', 'Vasilis Torosidis', 'Panagiotis Retsos', 'Sokratis Papastathopoulos', 'Manolas Kostas'],
        description: 'Olympiacos Academy in Piraeus is the most successful youth program in Greek football, developing players in the Mediterranean sun.',
        nearbyHotels: [
                {
                        name: 'Piraeus Theoxenia Hotel',
                        stars: 4,
                        distanceKm: 2,
                        features: ['Restaurant', 'Bar', 'Pool'],
                        pool: true,
                        wifi: true,
                        pricePerNight: '€120'
                    },
                {
                        name: 'Hotel Kastella',
                        stars: 3,
                        distanceKm: 1.5,
                        features: ['Restaurant', 'Bar', 'Views'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€70'
                    },
                {
                        name: 'Piraeus Port Hotel',
                        stars: 3,
                        distanceKm: 1,
                        features: ['Restaurant', 'Bar'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€55'
                    },
                {
                        name: 'Phidias Hotel',
                        stars: 3,
                        distanceKm: 3,
                        features: ['Restaurant', 'Bar'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€50'
                    },
                {
                        name: 'Athens Backpackers',
                        stars: 2,
                        distanceKm: 12,
                        features: ['Bar', 'Terrace'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€20'
                    }
            ],
        nearbyRestaurants: [
                {
                        name: 'Varoulko Seaside',
                        cuisine: 'Greek Seafood',
                        distanceKm: 1,
                        priceRange: '€€€€',
                        rating: 4.7,
                        vegetarian: false,
                        outdoor: true
                    },
                {
                        name: 'Margaro',
                        cuisine: 'Seafood Taverna',
                        distanceKm: 1.5,
                        priceRange: '€€',
                        rating: 4.5,
                        vegetarian: false,
                        outdoor: true
                    },
                {
                        name: 'Rakadiko',
                        cuisine: 'Greek Meze',
                        distanceKm: 2,
                        priceRange: '€€',
                        rating: 4.3,
                        vegetarian: true,
                        outdoor: true
                    },
                {
                        name: 'Jimmy and the Fish',
                        cuisine: 'Seafood',
                        distanceKm: 1,
                        priceRange: '€€€',
                        rating: 4.4,
                        vegetarian: false,
                        outdoor: true
                    },
                {
                        name: 'To Steki tou Ilia',
                        cuisine: 'Greek Taverna',
                        distanceKm: 2,
                        priceRange: '€',
                        rating: 4.2,
                        vegetarian: true,
                        outdoor: true
                    }
            ],
        nearbyMedical: [
                { name: 'Tzaneio General Hospital', type: 'Hospital', distanceKm: 2, phone: '+30 210 451 2111', emergency: true },
                { name: 'Metropolitan Hospital', type: 'Clinic', distanceKm: 8, phone: '+30 210 480 9000', emergency: true },
                { name: 'Physiotherapy Piraeus', type: 'Physiotherapy', distanceKm: 1, phone: '+30 210 345 6789', emergency: false }
            ],
        costOfLiving: {
                rent1Bed: '€500',
                meal: '€8',
                monthlyFood: '€220',
                transport: '€30',
                currency: 'EUR',
                summary: 'Piraeus and Athens are affordable with great climate'
            },
        scholarships: { available: true, details: 'Scholarships available for talented Greek and international players.' },
        visaInfo: { schengen: true, eu: true, visaFreeCountries: 'EU/EEA citizens free entry, US/UK/Canada/Australia visa-free up to 90 days', notes: 'Schengen zone.' },
        airportTransfers: [
                { mode: 'Metro', duration: '60 min', cost: '€10', notes: 'Metro Line 3 from airport to Piraeus' },
                { mode: 'Taxi', duration: '45 min', cost: '€40–55', notes: 'Available at airport' },
                { mode: 'Private Transfer', duration: '45 min', cost: '€55–75', notes: 'Pre-book online' }
            ],
        nearbyTournaments: [
                { name: 'Super League Youth', level: 'National Youth', surface: 'Natural Grass', month: 'August-May', venue: 'Various' },
                { name: 'Piraeus Youth Tournament', level: 'Regional', surface: 'Natural Grass', month: 'June', venue: 'Piraeus' }
            ],
        videoTour: null
    },
    {
        id: 'galatasaray-academy',
    availability: { status: 'open', nextIntake: '2025-09-01', spotsLeft: 20, responseTime: '24h', privateLessons: false, yearRound: true },
        name: 'Galatasaray Academy',
        country: 'Turkey',
        countryFlag: '🇹🇷',
        city: 'Istanbul',
        lat: 41.0765,
        lng: 28.994,
        website: 'https://www.galatasaray.org/en/academy',
        contact: '+90 212 305 1905',
        individualLessons: true,
        boarding: true,
        level: 'Advanced',
        starred: true,
        airport: { name: 'Istanbul Airport', code: 'IST', distance: '35 km', driveTime: '40 min' },
        beach: { distance: 5, description: 'Bosphorus coastline and Marmara Sea beaches' },
        climate: 'istanbul',
        priceRange: { from: 1000, to: 4000, unit: 'month', display: '€1,000–4,000/mo' },
        programs: [
                { name: 'Youth Development', price: '€1,000/mo', desc: 'Turkish football passion and technical training' },
                { name: 'Intensive Camp', price: '€2,000/mo', desc: 'Full-day program with competitive exposure' },
                { name: 'Elite Training', price: '€3,000/mo', desc: 'Advanced coaching with tactical specialization' },
                { name: 'Pro Academy', price: '€4,000/mo', desc: 'Professional pathway with Super Lig exposure' }
            ],
        coaches: [
                {
                        name: 'Hasan Sas',
                        credential: 'UEFA Pro License',
                        background: 'Galatasaray legend, 2000 UEFA Cup winner, youth coach',
                        atpWta: false,
                        bestRanking: null,
                        rankingNote: null,
                        languages: ['Turkish', 'English'],
                        instagram: null
                    },
                {
                        name: 'Tugay Kerimoglu',
                        credential: 'UEFA A License',
                        background: 'Former Turkish international and Blackburn player',
                        atpWta: false,
                        bestRanking: null,
                        rankingNote: null,
                        languages: ['Turkish', 'English'],
                        instagram: null
                    }
            ],
        bestCoachRanking: null,
        facilities: 'Florya Training Center, 6 pitches, indoor hall, gym, recovery pool, medical center, residence',
        courtSurfaces: ['Natural Grass', 'Artificial Turf', 'Indoor'],
        notableAlumni: ['Arda Turan', 'Emre Belozoglu', 'Metin Oktay', 'Fatih Terim', 'Hasan Sas'],
        description: 'Galatasaray Academy at Florya is the most successful youth development center in Turkish football, producing national team stars for decades.',
        nearbyHotels: [
                {
                        name: 'Ciragan Palace Kempinski',
                        stars: 5,
                        distanceKm: 8,
                        features: ['Restaurant', 'Pool', 'Spa', 'Bosphorus Views'],
                        pool: true,
                        wifi: true,
                        pricePerNight: '€350'
                    },
                {
                        name: 'Radisson Blu Hotel Istanbul',
                        stars: 4,
                        distanceKm: 5,
                        features: ['Restaurant', 'Pool', 'Gym'],
                        pool: true,
                        wifi: true,
                        pricePerNight: '€100'
                    },
                {
                        name: 'Holiday Inn Istanbul City',
                        stars: 4,
                        distanceKm: 6,
                        features: ['Restaurant', 'Gym', 'Bar'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€70'
                    },
                {
                        name: 'Hotel & Hostel Taksim',
                        stars: 3,
                        distanceKm: 8,
                        features: ['Bar', 'Terrace'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€35'
                    },
                {
                        name: 'Cheers Hostel',
                        stars: 2,
                        distanceKm: 9,
                        features: ['Bar', 'Kitchen', 'Terrace'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€15'
                    }
            ],
        nearbyRestaurants: [
                {
                        name: 'Mikla',
                        cuisine: 'Modern Turkish',
                        distanceKm: 8,
                        priceRange: '€€€€',
                        rating: 4.7,
                        vegetarian: true,
                        outdoor: true
                    },
                {
                        name: 'Ciya Sofrasi',
                        cuisine: 'Anatolian',
                        distanceKm: 10,
                        priceRange: '€€',
                        rating: 4.6,
                        vegetarian: true,
                        outdoor: false
                    },
                {
                        name: 'Karakoy Lokantasi',
                        cuisine: 'Turkish Brasserie',
                        distanceKm: 7,
                        priceRange: '€€',
                        rating: 4.4,
                        vegetarian: true,
                        outdoor: false
                    },
                {
                        name: 'Kebapci Iskender',
                        cuisine: 'Kebab',
                        distanceKm: 6,
                        priceRange: '€',
                        rating: 4.3,
                        vegetarian: false,
                        outdoor: false
                    },
                {
                        name: 'Hafiz Mustafa',
                        cuisine: 'Turkish Sweets / Cafe',
                        distanceKm: 8,
                        priceRange: '€',
                        rating: 4.5,
                        vegetarian: true,
                        outdoor: false
                    }
            ],
        nearbyMedical: [
                { name: 'Istanbul University Hospital', type: 'Hospital', distanceKm: 6, phone: '+90 212 414 0000', emergency: true },
                { name: 'Acibadem Hospital', type: 'Clinic', distanceKm: 5, phone: '+90 216 544 4444', emergency: true },
                { name: 'Fizyoterapi Istanbul', type: 'Physiotherapy', distanceKm: 3, phone: '+90 212 345 6789', emergency: false }
            ],
        costOfLiving: {
                rent1Bed: '€400',
                meal: '€5',
                monthlyFood: '€180',
                transport: '€30',
                currency: 'EUR',
                summary: 'Istanbul is affordable with a vibrant cultural scene'
            },
        scholarships: { available: true, details: 'Scholarships for talented Turkish and international youth.' },
        visaInfo: { schengen: false, eu: false, visaFreeCountries: 'EU citizens visa-free up to 90 days, US/UK/Canada e-visa available', notes: 'Non-EU. Many nationalities need an e-visa or visa on arrival.' },
        airportTransfers: [
                { mode: 'Havaist Bus', duration: '60 min', cost: '€5', notes: 'Direct bus from Istanbul Airport' },
                { mode: 'Taxi', duration: '40 min', cost: '€25–40', notes: 'Available at airport' },
                { mode: 'Private Transfer', duration: '40 min', cost: '€35–55', notes: 'Pre-book online' }
            ],
        nearbyTournaments: [
                { name: 'Turkish Super League Youth', level: 'National Youth', surface: 'Natural Grass', month: 'August-May', venue: 'Various' },
                { name: 'Istanbul Cup Youth', level: 'International Youth', surface: 'Artificial Turf', month: 'July', venue: 'Istanbul' }
            ],
        videoTour: null
    },
    {
        id: 'sparta-prague-academy',
    availability: { status: 'open', nextIntake: '2025-07-01', spotsLeft: 14, responseTime: '48h', privateLessons: true, yearRound: true },
        name: 'Sparta Prague Academy',
        country: 'Czech Republic',
        countryFlag: '🇨🇿',
        city: 'Prague',
        lat: 50.0997,
        lng: 14.416,
        website: 'https://www.sparta.cz/en/academy',
        contact: '+420 296 111 400',
        individualLessons: true,
        boarding: true,
        level: 'Advanced',
        starred: true,
        airport: { name: 'Vaclav Havel Airport Prague', code: 'PRG', distance: '12 km', driveTime: '20 min' },
        beach: { distance: null, description: 'No nearby beach, historic central European capital' },
        climate: 'prague',
        priceRange: { from: 1000, to: 4000, unit: 'month', display: '€1,000–4,000/mo' },
        programs: [
                { name: 'Youth Development', price: '€1,000/mo', desc: 'Czech technical tradition and creative play' },
                { name: 'Intensive Camp', price: '€2,000/mo', desc: 'Full-day training with competitive matches' },
                { name: 'Elite Program', price: '€3,000/mo', desc: 'Advanced program with European exposure' },
                { name: 'Pro Pathway', price: '€4,000/mo', desc: 'Professional preparation with first-team pathway' }
            ],
        coaches: [
                {
                        name: 'David Holoubek',
                        credential: 'UEFA Pro License',
                        background: 'Sparta Prague youth director, Czech football expert',
                        atpWta: false,
                        bestRanking: null,
                        rankingNote: null,
                        languages: ['Czech', 'English', 'German'],
                        instagram: null
                    },
                {
                        name: 'Pavel Nedved Jr',
                        credential: 'UEFA A License',
                        background: 'Youth development coach, technical specialist',
                        atpWta: false,
                        bestRanking: null,
                        rankingNote: null,
                        languages: ['Czech', 'Italian', 'English'],
                        instagram: null
                    }
            ],
        bestCoachRanking: null,
        facilities: 'Strahov training complex, 6 pitches, indoor hall, gym, medical center, analysis suite',
        courtSurfaces: ['Natural Grass', 'Artificial Turf', 'Indoor'],
        notableAlumni: ['Pavel Nedved', 'Tomas Rosicky', 'Petr Cech', 'Milan Baros', 'Adam Hlozek'],
        description: 'Sparta Prague Academy is the most prestigious youth development center in Czech football, with a rich history of producing international talent.',
        nearbyHotels: [
                {
                        name: 'Four Seasons Prague',
                        stars: 5,
                        distanceKm: 6,
                        features: ['Restaurant', 'Spa', 'Bar', 'Views'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€300'
                    },
                {
                        name: 'Hotel Paris Prague',
                        stars: 5,
                        distanceKm: 5,
                        features: ['Restaurant', 'Cafe', 'Bar'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€180'
                    },
                {
                        name: 'Hotel Duo',
                        stars: 4,
                        distanceKm: 3,
                        features: ['Restaurant', 'Pool', 'Gym'],
                        pool: true,
                        wifi: true,
                        pricePerNight: '€80'
                    },
                {
                        name: 'Hotel Manes',
                        stars: 3,
                        distanceKm: 5,
                        features: ['Restaurant', 'Bar'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€50'
                    },
                {
                        name: 'Czech Inn',
                        stars: 2,
                        distanceKm: 6,
                        features: ['Bar', 'Kitchen', 'Lounge'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€20'
                    }
            ],
        nearbyRestaurants: [
                {
                        name: 'Lokál',
                        cuisine: 'Czech',
                        distanceKm: 5,
                        priceRange: '€€',
                        rating: 4.5,
                        vegetarian: true,
                        outdoor: true
                    },
                {
                        name: 'Eska',
                        cuisine: 'Modern Czech',
                        distanceKm: 6,
                        priceRange: '€€€',
                        rating: 4.6,
                        vegetarian: true,
                        outdoor: false
                    },
                {
                        name: 'U Fleku',
                        cuisine: 'Czech Pub',
                        distanceKm: 6,
                        priceRange: '€€',
                        rating: 4.3,
                        vegetarian: true,
                        outdoor: true
                    },
                {
                        name: 'Cafe Imperial',
                        cuisine: 'Czech-International',
                        distanceKm: 5,
                        priceRange: '€€€',
                        rating: 4.4,
                        vegetarian: true,
                        outdoor: false
                    },
                {
                        name: 'Kantyna',
                        cuisine: 'Modern Czech',
                        distanceKm: 4,
                        priceRange: '€€',
                        rating: 4.2,
                        vegetarian: true,
                        outdoor: false
                    }
            ],
        nearbyMedical: [
                { name: 'Motol University Hospital', type: 'Hospital', distanceKm: 4, phone: '+420 224 431 111', emergency: true },
                { name: 'Na Homolce Hospital', type: 'Clinic', distanceKm: 5, phone: '+420 257 271 111', emergency: true },
                { name: 'Fyzioterapie Praha', type: 'Physiotherapy', distanceKm: 2, phone: '+420 234 567 890', emergency: false }
            ],
        costOfLiving: {
                rent1Bed: '€550',
                meal: '€6',
                monthlyFood: '€220',
                transport: '€22',
                currency: 'EUR',
                summary: 'Prague is very affordable with excellent cultural offerings'
            },
        scholarships: { available: true, details: 'Scholarships for promising Czech and Central European talent.' },
        visaInfo: { schengen: true, eu: true, visaFreeCountries: 'EU/EEA citizens free entry, US/UK/Canada/Australia visa-free up to 90 days', notes: 'Schengen zone.' },
        airportTransfers: [
                { mode: 'Airport Express Bus', duration: '35 min', cost: '€3', notes: 'AE bus to Praha hlavni nadrazi' },
                { mode: 'Taxi', duration: '20 min', cost: '€20–30', notes: 'Available at airport' },
                { mode: 'Private Transfer', duration: '20 min', cost: '€25–40', notes: 'Pre-book online' }
            ],
        nearbyTournaments: [
                { name: 'Czech Youth League', level: 'National Youth', surface: 'Natural Grass', month: 'August-May', venue: 'Various' },
                { name: 'Prague Youth Cup', level: 'International Youth', surface: 'Artificial Turf', month: 'June', venue: 'Prague' }
            ],
        videoTour: null
    },
    {
        id: 'legia-warsaw-academy',
    availability: { status: 'open', nextIntake: '2025-07-01', spotsLeft: 12, responseTime: '48h', privateLessons: true, yearRound: true },
        name: 'Legia Warsaw Academy',
        country: 'Poland',
        countryFlag: '🇵🇱',
        city: 'Warsaw',
        lat: 52.2191,
        lng: 21.0395,
        website: 'https://legia.com/en/academy',
        contact: '+48 22 628 2000',
        individualLessons: true,
        boarding: true,
        level: 'Intermediate',
        starred: true,
        airport: { name: 'Warsaw Chopin Airport', code: 'WAW', distance: '10 km', driveTime: '20 min' },
        beach: { distance: null, description: 'No nearby beach, central Polish plains city' },
        climate: 'warsaw',
        priceRange: { from: 800, to: 3500, unit: 'month', display: '€800–3,500/mo' },
        programs: [
                { name: 'Youth Development', price: '€800/mo', desc: 'Polish football fundamentals and competitive spirit' },
                { name: 'Intensive Camp', price: '€1,500/mo', desc: 'Full-day training with league competition' },
                { name: 'Elite Program', price: '€2,500/mo', desc: 'Advanced coaching with tactical specialization' },
                { name: 'Pro Pathway', price: '€3,500/mo', desc: 'Professional development with Ekstraklasa exposure' }
            ],
        coaches: [
                {
                        name: 'Jacek Zielinski',
                        credential: 'UEFA Pro License',
                        background: 'Legia youth director, Polish football expert',
                        atpWta: false,
                        bestRanking: null,
                        rankingNote: null,
                        languages: ['Polish', 'English'],
                        instagram: null
                    },
                {
                        name: 'Marek Saganowski',
                        credential: 'UEFA A License',
                        background: 'Former Polish international, youth coach',
                        atpWta: false,
                        bestRanking: null,
                        rankingNote: null,
                        languages: ['Polish', 'English'],
                        instagram: null
                    }
            ],
        bestCoachRanking: null,
        facilities: 'Legia Training Center, 5 pitches, indoor hall, gym, medical room, analysis center',
        courtSurfaces: ['Natural Grass', 'Artificial Turf', 'Indoor'],
        notableAlumni: ['Robert Lewandowski', 'Artur Boruc', 'Lucjan Brychczy', 'Kazimierz Deyna', 'Miroslav Radovic'],
        description: 'Legia Warsaw Academy is the most decorated youth program in Polish football, developing talent in a competitive and passionate environment.',
        nearbyHotels: [
                {
                        name: 'Hotel Bristol Warsaw',
                        stars: 5,
                        distanceKm: 4,
                        features: ['Restaurant', 'Spa', 'Pool', 'Bar'],
                        pool: true,
                        wifi: true,
                        pricePerNight: '€200'
                    },
                {
                        name: 'Radisson Blu Sobieski',
                        stars: 4,
                        distanceKm: 3,
                        features: ['Restaurant', 'Bar', 'Gym'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€90'
                    },
                {
                        name: 'ibis Warszawa Centrum',
                        stars: 3,
                        distanceKm: 3,
                        features: ['Bar', 'Restaurant'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€50'
                    },
                {
                        name: 'Hostel Helvetia',
                        stars: 3,
                        distanceKm: 4,
                        features: ['Kitchen', 'Lounge', 'Garden'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€35'
                    },
                {
                        name: 'Oki Doki Hostel',
                        stars: 2,
                        distanceKm: 4,
                        features: ['Bar', 'Kitchen'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€15'
                    }
            ],
        nearbyRestaurants: [
                {
                        name: 'U Kucharzy',
                        cuisine: 'Polish',
                        distanceKm: 4,
                        priceRange: '€€€',
                        rating: 4.6,
                        vegetarian: true,
                        outdoor: false
                    },
                {
                        name: 'Zapiecek',
                        cuisine: 'Polish Pierogi',
                        distanceKm: 4,
                        priceRange: '€',
                        rating: 4.4,
                        vegetarian: true,
                        outdoor: false
                    },
                {
                        name: 'Warszawa Wschodnia',
                        cuisine: 'Modern Polish',
                        distanceKm: 5,
                        priceRange: '€€€',
                        rating: 4.5,
                        vegetarian: true,
                        outdoor: true
                    },
                {
                        name: 'Pyzy Flaki Gorce',
                        cuisine: 'Polish Traditional',
                        distanceKm: 3,
                        priceRange: '€',
                        rating: 4.3,
                        vegetarian: true,
                        outdoor: false
                    },
                {
                        name: 'Krowarzywa',
                        cuisine: 'Vegan Burgers',
                        distanceKm: 4,
                        priceRange: '€',
                        rating: 4.2,
                        vegetarian: true,
                        outdoor: false
                    }
            ],
        nearbyMedical: [
                { name: 'Military Medical Institute', type: 'Hospital', distanceKm: 2, phone: '+48 22 681 6001', emergency: true },
                { name: 'Carolina Medical Center', type: 'Clinic', distanceKm: 5, phone: '+48 22 356 0300', emergency: true },
                { name: 'Fizjoterapia Warszawa', type: 'Physiotherapy', distanceKm: 1, phone: '+48 22 345 6789', emergency: false }
            ],
        costOfLiving: {
                rent1Bed: '€500',
                meal: '€6',
                monthlyFood: '€200',
                transport: '€22',
                currency: 'EUR',
                summary: 'Warsaw is very affordable for a European capital'
            },
        scholarships: { available: true, details: 'Scholarships for talented Polish youth players.' },
        visaInfo: { schengen: true, eu: true, visaFreeCountries: 'EU/EEA citizens free entry, US/UK/Canada/Australia visa-free up to 90 days', notes: 'Schengen zone.' },
        airportTransfers: [
                { mode: 'Bus', duration: '25 min', cost: '€1.50', notes: 'Bus 175 to city center' },
                { mode: 'Taxi', duration: '20 min', cost: '€10–15', notes: 'Available at airport' },
                { mode: 'Private Transfer', duration: '20 min', cost: '€20–30', notes: 'Pre-book online' }
            ],
        nearbyTournaments: [
                { name: 'Polish Youth League', level: 'National Youth', surface: 'Natural Grass', month: 'August-May', venue: 'Various' },
                { name: 'Warsaw Cup', level: 'International Youth', surface: 'Artificial Turf', month: 'June', venue: 'Warsaw' }
            ],
        videoTour: null
    },
    {
        id: 'molde-fk-academy',
    availability: { status: 'open', nextIntake: '2025-06-15', spotsLeft: 15, responseTime: '48h', privateLessons: true, yearRound: true },
        name: 'Molde FK Academy',
        country: 'Norway',
        countryFlag: '🇳🇴',
        city: 'Molde',
        lat: 62.7372,
        lng: 7.1598,
        website: 'https://www.moldefk.no/academy',
        contact: '+47 71 19 87 00',
        individualLessons: true,
        boarding: false,
        level: 'Intermediate',
        starred: false,
        airport: { name: 'Molde Airport Aro', code: 'MOL', distance: '5 km', driveTime: '10 min' },
        beach: { distance: 0.5, description: 'Molde sits on the Romsdal Fjord with mountain panoramas' },
        climate: 'molde',
        priceRange: { from: 1500, to: 5000, unit: 'month', display: '€1,500–5,000/mo' },
        programs: [
                { name: 'Youth Development', price: '€1,500/mo', desc: 'Norwegian football philosophy and athleticism' },
                { name: 'Intensive Camp', price: '€2,500/mo', desc: 'Full-day training in Scandinavian conditions' },
                { name: 'Elite Program', price: '€4,000/mo', desc: 'Advanced program with Eliteserien exposure' },
                { name: 'Pro Development', price: '€5,000/mo', desc: 'Professional pathway with international scouting' }
            ],
        coaches: [
                {
                        name: 'Ole Gunnar Solskjaer',
                        credential: 'UEFA Pro License',
                        background: 'Manchester United legend, former Molde manager',
                        atpWta: false,
                        bestRanking: null,
                        rankingNote: null,
                        languages: ['Norwegian', 'English'],
                        instagram: null
                    },
                {
                        name: 'Erling Moe',
                        credential: 'UEFA Pro License',
                        background: 'Molde academy director, development specialist',
                        atpWta: false,
                        bestRanking: null,
                        rankingNote: null,
                        languages: ['Norwegian', 'English'],
                        instagram: null
                    }
            ],
        bestCoachRanking: null,
        facilities: 'Aker Stadion training facility, 3 pitches, indoor hall, gym, analysis room',
        courtSurfaces: ['Natural Grass', 'Artificial Turf', 'Indoor'],
        notableAlumni: ['Erling Haaland', 'Mats Moller Daehli', 'Martin Odegaard', 'Ole Gunnar Solskjaer', 'Fredrik Aursnes'],
        description: 'Molde FK Academy, set against stunning fjord scenery, has become one of the most productive academies in Scandinavian football.',
        nearbyHotels: [
                {
                        name: 'Quality Hotel Alexandra',
                        stars: 4,
                        distanceKm: 1,
                        features: ['Restaurant', 'Pool', 'Spa', 'Bar'],
                        pool: true,
                        wifi: true,
                        pricePerNight: '€140'
                    },
                {
                        name: 'Scandic Seilet',
                        stars: 4,
                        distanceKm: 0.5,
                        features: ['Restaurant', 'Bar', 'Views'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€120'
                    },
                {
                        name: 'Thon Hotel Moldefjord',
                        stars: 3,
                        distanceKm: 1,
                        features: ['Restaurant', 'Bar'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€90'
                    },
                {
                        name: 'Comfort Hotel Nobel',
                        stars: 3,
                        distanceKm: 0.8,
                        features: ['Restaurant', 'Bar'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€80'
                    },
                {
                        name: 'Molde Vandrerhjem',
                        stars: 2,
                        distanceKm: 2,
                        features: ['Kitchen', 'Garden'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€40'
                    }
            ],
        nearbyRestaurants: [
                {
                        name: 'Glass Restaurant',
                        cuisine: 'Nordic Fine Dining',
                        distanceKm: 0.5,
                        priceRange: '€€€€',
                        rating: 4.6,
                        vegetarian: true,
                        outdoor: true
                    },
                {
                        name: 'Kompis Tapas',
                        cuisine: 'Tapas',
                        distanceKm: 1,
                        priceRange: '€€',
                        rating: 4.4,
                        vegetarian: true,
                        outdoor: true
                    },
                {
                        name: 'Roast Restaurant',
                        cuisine: 'Norwegian',
                        distanceKm: 1,
                        priceRange: '€€€',
                        rating: 4.3,
                        vegetarian: true,
                        outdoor: false
                    },
                {
                        name: 'Sjobua',
                        cuisine: 'Seafood',
                        distanceKm: 0.8,
                        priceRange: '€€€',
                        rating: 4.5,
                        vegetarian: false,
                        outdoor: true
                    },
                {
                        name: 'Bro Kafebar',
                        cuisine: 'Cafe',
                        distanceKm: 1,
                        priceRange: '€€',
                        rating: 4.2,
                        vegetarian: true,
                        outdoor: true
                    }
            ],
        nearbyMedical: [
                { name: 'Molde Hospital', type: 'Hospital', distanceKm: 2, phone: '+47 71 12 00 00', emergency: true },
                { name: 'Molde Legesenter', type: 'Clinic', distanceKm: 1, phone: '+47 71 25 00 00', emergency: true },
                { name: 'Fysioterapi Molde', type: 'Physiotherapy', distanceKm: 0.5, phone: '+47 71 21 00 00', emergency: false }
            ],
        costOfLiving: {
                rent1Bed: '€800',
                meal: '€18',
                monthlyFood: '€400',
                transport: '€50',
                currency: 'NOK',
                summary: 'Molde is moderately priced by Norwegian standards'
            },
        scholarships: { available: true, details: 'Development support for talented Norwegian youth players.' },
        visaInfo: { schengen: true, eu: false, visaFreeCountries: 'EU/EEA citizens free entry, US/UK/Canada/Australia visa-free up to 90 days', notes: 'Schengen but not EU. Norway has its own visa rules aligned with Schengen.' },
        airportTransfers: [
                { mode: 'Taxi', duration: '10 min', cost: '€15–20', notes: 'Available at airport' },
                { mode: 'Bus', duration: '15 min', cost: '€5', notes: 'Local bus to city center' },
                { mode: 'Private Transfer', duration: '10 min', cost: '€25–35', notes: 'Pre-book online' }
            ],
        nearbyTournaments: [
                { name: 'NFF Youth Cup', level: 'National Youth', surface: 'Artificial Turf', month: 'October', venue: 'Various' },
                { name: 'Norway Cup', level: 'International Youth', surface: 'Artificial Turf', month: 'July', venue: 'Oslo' }
            ],
        videoTour: null
    },
    {
        id: 'feyenoord-academy',
    availability: { status: 'open', nextIntake: '2025-06-15', spotsLeft: 17, responseTime: '48h', privateLessons: true, yearRound: false },
        name: 'Feyenoord Academy',
        country: 'Netherlands',
        countryFlag: '🇳🇱',
        city: 'Rotterdam',
        lat: 51.8939,
        lng: 4.5231,
        website: 'https://www.feyenoord.com/en/academy',
        contact: '+31 10 292 3900',
        individualLessons: true,
        boarding: true,
        level: 'Advanced',
        starred: true,
        airport: { name: 'Rotterdam The Hague Airport', code: 'RTM', distance: '8 km', driveTime: '15 min' },
        beach: { distance: 30, description: 'Hoek van Holland beach on the North Sea coast' },
        climate: 'amsterdam',
        priceRange: { from: 2000, to: 7000, unit: 'month', display: '€2,000–7,000/mo' },
        programs: [
                { name: 'Youth Development', price: '€2,000/mo', desc: 'Dutch football philosophy and street-smart style' },
                { name: 'Intensive Camp', price: '€3,500/mo', desc: 'Full-day training with match simulation' },
                { name: 'Elite Performance', price: '€5,500/mo', desc: 'Advanced program with professional mentoring' },
                { name: 'Pro Pathway', price: '€7,000/mo', desc: 'Complete professional development pathway' }
            ],
        coaches: [
                {
                        name: 'Said Bakkati',
                        credential: 'UEFA Pro License',
                        background: 'Feyenoord Academy director, youth development expert',
                        atpWta: false,
                        bestRanking: null,
                        rankingNote: null,
                        languages: ['Dutch', 'English', 'French'],
                        instagram: null
                    },
                {
                        name: 'Robin van Persie',
                        credential: 'UEFA A License',
                        background: 'Arsenal and Netherlands legend, coaching at Feyenoord',
                        atpWta: false,
                        bestRanking: null,
                        rankingNote: null,
                        languages: ['Dutch', 'English', 'French'],
                        instagram: null
                    }
            ],
        bestCoachRanking: null,
        facilities: 'Varkenoord training complex, 6 pitches, indoor facility, gym, medical center, residence',
        courtSurfaces: ['Natural Grass', 'Artificial Turf', 'Indoor'],
        notableAlumni: ['Robin van Persie', 'Virgil van Dijk', 'Georginio Wijnaldum', 'Dirk Kuyt', 'Giovanni van Bronckhorst'],
        description: 'Feyenoord Academy is renowned for developing tough, technically skilled players with a strong Rotterdam mentality.',
        nearbyHotels: [
                {
                        name: 'Mainport Design Hotel',
                        stars: 5,
                        distanceKm: 5,
                        features: ['Restaurant', 'Spa', 'Pool', 'Bar'],
                        pool: true,
                        wifi: true,
                        pricePerNight: '€200'
                    },
                {
                        name: 'NH Rotterdam',
                        stars: 4,
                        distanceKm: 4,
                        features: ['Restaurant', 'Bar', 'Gym'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€110'
                    },
                {
                        name: 'Ibis Rotterdam City Centre',
                        stars: 3,
                        distanceKm: 5,
                        features: ['Bar', 'Restaurant'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€70'
                    },
                {
                        name: 'King Kong Hostel',
                        stars: 3,
                        distanceKm: 5,
                        features: ['Bar', 'Kitchen', 'Lounge'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€30'
                    },
                {
                        name: 'Hostel Room Rotterdam',
                        stars: 2,
                        distanceKm: 5,
                        features: ['Kitchen', 'Lounge'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€25'
                    }
            ],
        nearbyRestaurants: [
                {
                        name: 'FG Restaurant',
                        cuisine: 'Fine Dining',
                        distanceKm: 5,
                        priceRange: '€€€€',
                        rating: 4.8,
                        vegetarian: true,
                        outdoor: false
                    },
                {
                        name: 'Markthal Rotterdam',
                        cuisine: 'Market Food',
                        distanceKm: 5,
                        priceRange: '€€',
                        rating: 4.5,
                        vegetarian: true,
                        outdoor: true
                    },
                {
                        name: 'Hotel New York',
                        cuisine: 'Dutch-International',
                        distanceKm: 4,
                        priceRange: '€€€',
                        rating: 4.4,
                        vegetarian: true,
                        outdoor: true
                    },
                {
                        name: 'Fenix Food Factory',
                        cuisine: 'Street Food',
                        distanceKm: 3,
                        priceRange: '€€',
                        rating: 4.3,
                        vegetarian: true,
                        outdoor: true
                    },
                {
                        name: 'De Matroos en het Meisje',
                        cuisine: 'Dutch',
                        distanceKm: 5,
                        priceRange: '€€',
                        rating: 4.2,
                        vegetarian: true,
                        outdoor: true
                    }
            ],
        nearbyMedical: [
                { name: 'Erasmus MC', type: 'Hospital', distanceKm: 4, phone: '+31 10 704 0704', emergency: true },
                { name: 'Maasstad Ziekenhuis', type: 'Clinic', distanceKm: 3, phone: '+31 10 291 1911', emergency: true },
                { name: 'Fysiotherapie Rotterdam Zuid', type: 'Physiotherapy', distanceKm: 1, phone: '+31 10 234 5678', emergency: false }
            ],
        costOfLiving: {
                rent1Bed: '€900',
                meal: '€13',
                monthlyFood: '€320',
                transport: '€85',
                currency: 'EUR',
                summary: 'Rotterdam is slightly cheaper than Amsterdam with a vibrant modern scene'
            },
        scholarships: { available: true, details: 'Feyenoord provides development scholarships for talented youth.' },
        visaInfo: { schengen: true, eu: true, visaFreeCountries: 'EU/EEA citizens free entry, US/UK/Canada/Australia visa-free up to 90 days', notes: 'Schengen zone.' },
        airportTransfers: [
                { mode: 'Taxi', duration: '15 min', cost: '€20–25', notes: 'Available at airport' },
                { mode: 'Bus', duration: '25 min', cost: '€4', notes: 'Bus 33 to city center' },
                { mode: 'Private Transfer', duration: '15 min', cost: '€30–45', notes: 'Pre-book online' }
            ],
        nearbyTournaments: [
                { name: 'KNVB Cup Youth', level: 'National Youth', surface: 'Natural Grass', month: 'May', venue: 'Various' },
                { name: 'Rotterdam Youth Tournament', level: 'International Youth', surface: 'Artificial Turf', month: 'June', venue: 'Rotterdam' }
            ],
        videoTour: null
    },
    {
        id: 'malmo-ff-academy',
    availability: { status: 'waitlist', nextIntake: '2025-11-01', spotsLeft: null, responseTime: '48h', privateLessons: true, yearRound: true },
        name: 'Malmo FF Academy',
        country: 'Sweden',
        countryFlag: '🇸🇪',
        city: 'Malmo',
        lat: 55.5833,
        lng: 13.0,
        website: 'https://www.mff.se/en/academy',
        contact: '+46 40 655 0700',
        individualLessons: true,
        boarding: true,
        level: 'Advanced',
        starred: true,
        airport: { name: 'Copenhagen Kastrup Airport', code: 'CPH', distance: '30 km', driveTime: '30 min' },
        beach: { distance: 3, description: 'Ribersborg Beach on the Oresund strait' },
        climate: 'malmo',
        priceRange: { from: 1500, to: 5000, unit: 'month', display: '€1,500–5,000/mo' },
        programs: [
                { name: 'Youth Development', price: '€1,500/mo', desc: 'Swedish football philosophy and team play' },
                { name: 'Intensive Camp', price: '€2,500/mo', desc: 'Full-day Scandinavian-style development' },
                { name: 'Elite Program', price: '€4,000/mo', desc: 'Advanced training with Allsvenskan exposure' },
                { name: 'Pro Pathway', price: '€5,000/mo', desc: 'Professional preparation with international scouting' }
            ],
        coaches: [
                {
                        name: 'Ola Toivonen',
                        credential: 'UEFA A License',
                        background: 'Former Swedish international, Malmo youth coach',
                        atpWta: false,
                        bestRanking: null,
                        rankingNote: null,
                        languages: ['Swedish', 'English', 'French'],
                        instagram: null
                    },
                {
                        name: 'Patrick Winqvist',
                        credential: 'UEFA Pro License',
                        background: 'Malmo FF academy director, youth development expert',
                        atpWta: false,
                        bestRanking: null,
                        rankingNote: null,
                        languages: ['Swedish', 'English'],
                        instagram: null
                    }
            ],
        bestCoachRanking: null,
        facilities: 'Malmo FF training facility, 5 pitches, indoor arena, gym, medical center, analysis room',
        courtSurfaces: ['Natural Grass', 'Artificial Turf', 'Indoor'],
        notableAlumni: ['Zlatan Ibrahimovic', 'Markus Rosenberg', 'Patrik Andersson', 'Bo Larsson', 'Pontus Jansson'],
        description: 'Malmo FF Academy is the most successful youth development center in Swedish football, famously producing Zlatan Ibrahimovic.',
        nearbyHotels: [
                {
                        name: 'Story Hotel Studio Malmo',
                        stars: 4,
                        distanceKm: 3,
                        features: ['Restaurant', 'Bar', 'Gym'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€130'
                    },
                {
                        name: 'Clarion Hotel & Congress Malmo Live',
                        stars: 4,
                        distanceKm: 2,
                        features: ['Restaurant', 'Pool', 'Spa'],
                        pool: true,
                        wifi: true,
                        pricePerNight: '€120'
                    },
                {
                        name: 'Comfort Hotel Malmo',
                        stars: 3,
                        distanceKm: 2,
                        features: ['Restaurant', 'Bar'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€80'
                    },
                {
                        name: 'STF Malmo City',
                        stars: 3,
                        distanceKm: 3,
                        features: ['Kitchen', 'Lounge'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€55'
                    },
                {
                        name: 'Backpackers Malmo',
                        stars: 2,
                        distanceKm: 3,
                        features: ['Kitchen', 'Lounge'],
                        pool: false,
                        wifi: true,
                        pricePerNight: '€25'
                    }
            ],
        nearbyRestaurants: [
                {
                        name: 'Bastard',
                        cuisine: 'Modern Nordic',
                        distanceKm: 2,
                        priceRange: '€€€',
                        rating: 4.6,
                        vegetarian: true,
                        outdoor: false
                    },
                {
                        name: 'Vollmers',
                        cuisine: 'Nordic Fine Dining',
                        distanceKm: 3,
                        priceRange: '€€€€',
                        rating: 4.8,
                        vegetarian: true,
                        outdoor: false
                    },
                {
                        name: 'Far i Hatten',
                        cuisine: 'Swedish',
                        distanceKm: 2,
                        priceRange: '€€',
                        rating: 4.3,
                        vegetarian: true,
                        outdoor: true
                    },
                {
                        name: 'Malmohus Falafel',
                        cuisine: 'Middle Eastern',
                        distanceKm: 2,
                        priceRange: '€',
                        rating: 4.4,
                        vegetarian: true,
                        outdoor: false
                    },
                {
                        name: 'Salt o Brygga',
                        cuisine: 'Seafood',
                        distanceKm: 3,
                        priceRange: '€€€',
                        rating: 4.5,
                        vegetarian: false,
                        outdoor: true
                    }
            ],
        nearbyMedical: [
                { name: 'Skane University Hospital Malmo', type: 'Hospital', distanceKm: 3, phone: '+46 40 331 000', emergency: true },
                { name: 'Capio Citykliniken', type: 'Clinic', distanceKm: 2, phone: '+46 40 600 2300', emergency: true },
                { name: 'Fysioterapi Malmo Sport', type: 'Physiotherapy', distanceKm: 1, phone: '+46 40 234 5678', emergency: false }
            ],
        costOfLiving: {
                rent1Bed: '€700',
                meal: '€12',
                monthlyFood: '€300',
                transport: '€50',
                currency: 'SEK',
                summary: 'Malmo is affordable by Scandinavian standards'
            },
        scholarships: { available: true, details: 'Development support and scholarships for promising Swedish talent.' },
        visaInfo: { schengen: true, eu: true, visaFreeCountries: 'EU/EEA citizens free entry, US/UK/Canada/Australia visa-free up to 90 days', notes: 'Schengen zone.' },
        airportTransfers: [
                { mode: 'Train', duration: '30 min', cost: '€12', notes: 'Oresund train from Copenhagen Airport' },
                { mode: 'Taxi', duration: '30 min', cost: '€50–70', notes: 'Available at Copenhagen Airport' },
                { mode: 'Private Transfer', duration: '30 min', cost: '€60–85', notes: 'Pre-book online' }
            ],
        nearbyTournaments: [
                { name: 'Allsvenskan Youth League', level: 'National Youth', surface: 'Artificial Turf', month: 'April-October', venue: 'Various' },
                { name: 'Gothia Cup', level: 'International Youth', surface: 'Artificial Turf', month: 'July', venue: 'Gothenburg' }
            ],
        videoTour: null
    },
];

const COUNTRIES = [...new Set(ACADEMIES.map(a => a.country))];

const CLIMATE_DATA = {
  'amsterdam': {
    city: "Amsterdam", country: "Netherlands",
    months: [
      { month: "Jan", temp: 3, rain: 68, rainyDays: 12, wind: 19 },
      { month: "Feb", temp: 3, rain: 47, rainyDays: 10, wind: 18 },
      { month: "Mar", temp: 6, rain: 55, rainyDays: 11, wind: 17 },
      { month: "Apr", temp: 9, rain: 42, rainyDays: 9, wind: 15 },
      { month: "May", temp: 13, rain: 55, rainyDays: 10, wind: 14 },
      { month: "Jun", temp: 16, rain: 60, rainyDays: 10, wind: 13 },
      { month: "Jul", temp: 18, rain: 74, rainyDays: 10, wind: 13 },
      { month: "Aug", temp: 18, rain: 81, rainyDays: 11, wind: 13 },
      { month: "Sep", temp: 15, rain: 78, rainyDays: 11, wind: 14 },
      { month: "Oct", temp: 11, rain: 83, rainyDays: 13, wind: 16 },
      { month: "Nov", temp: 7, rain: 79, rainyDays: 13, wind: 17 },
      { month: "Dec", temp: 4, rain: 75, rainyDays: 13, wind: 18 }
    ]
  },
  'athens': {
    city: "Athens", country: "Greece",
    months: [
      { month: "Jan", temp: 10, rain: 48, rainyDays: 9, wind: 10 },
      { month: "Feb", temp: 10, rain: 41, rainyDays: 8, wind: 11 },
      { month: "Mar", temp: 12, rain: 40, rainyDays: 7, wind: 11 },
      { month: "Apr", temp: 16, rain: 26, rainyDays: 6, wind: 10 },
      { month: "May", temp: 21, rain: 15, rainyDays: 4, wind: 9 },
      { month: "Jun", temp: 26, rain: 6, rainyDays: 2, wind: 9 },
      { month: "Jul", temp: 29, rain: 5, rainyDays: 1, wind: 10 },
      { month: "Aug", temp: 28, rain: 7, rainyDays: 1, wind: 10 },
      { month: "Sep", temp: 24, rain: 14, rainyDays: 3, wind: 9 },
      { month: "Oct", temp: 19, rain: 48, rainyDays: 6, wind: 9 },
      { month: "Nov", temp: 15, rain: 56, rainyDays: 8, wind: 10 },
      { month: "Dec", temp: 11, rain: 63, rainyDays: 10, wind: 10 }
    ]
  },
  'barcelona': {
    city: "Barcelona", country: "Spain",
    months: [
      { month: "Jan", temp: 10, rain: 41, rainyDays: 5, wind: 12 },
      { month: "Feb", temp: 11, rain: 29, rainyDays: 5, wind: 12 },
      { month: "Mar", temp: 13, rain: 32, rainyDays: 5, wind: 12 },
      { month: "Apr", temp: 15, rain: 47, rainyDays: 7, wind: 11 },
      { month: "May", temp: 18, rain: 54, rainyDays: 7, wind: 10 },
      { month: "Jun", temp: 22, rain: 33, rainyDays: 4, wind: 10 },
      { month: "Jul", temp: 25, rain: 19, rainyDays: 3, wind: 10 },
      { month: "Aug", temp: 25, rain: 51, rainyDays: 5, wind: 10 },
      { month: "Sep", temp: 22, rain: 87, rainyDays: 7, wind: 10 },
      { month: "Oct", temp: 18, rain: 97, rainyDays: 8, wind: 11 },
      { month: "Nov", temp: 13, rain: 52, rainyDays: 6, wind: 11 },
      { month: "Dec", temp: 10, rain: 45, rainyDays: 5, wind: 12 }
    ]
  },
  'belgrade': {
    city: "Belgrade", country: "Serbia",
    months: [
      { month: "Jan", temp: 1, rain: 46, rainyDays: 10, wind: 13 },
      { month: "Feb", temp: 3, rain: 40, rainyDays: 9, wind: 13 },
      { month: "Mar", temp: 8, rain: 44, rainyDays: 9, wind: 12 },
      { month: "Apr", temp: 13, rain: 53, rainyDays: 10, wind: 11 },
      { month: "May", temp: 18, rain: 72, rainyDays: 12, wind: 10 },
      { month: "Jun", temp: 22, rain: 86, rainyDays: 11, wind: 9 },
      { month: "Jul", temp: 24, rain: 57, rainyDays: 9, wind: 9 },
      { month: "Aug", temp: 24, rain: 48, rainyDays: 7, wind: 9 },
      { month: "Sep", temp: 19, rain: 50, rainyDays: 8, wind: 9 },
      { month: "Oct", temp: 13, rain: 49, rainyDays: 8, wind: 10 },
      { month: "Nov", temp: 7, rain: 51, rainyDays: 10, wind: 12 },
      { month: "Dec", temp: 2, rain: 52, rainyDays: 11, wind: 13 }
    ]
  },
  'brussels': {
    city: "Brussels", country: "Belgium",
    months: [
      { month: "Jan", temp: 3, rain: 68, rainyDays: 12, wind: 16 },
      { month: "Feb", temp: 4, rain: 54, rainyDays: 10, wind: 16 },
      { month: "Mar", temp: 7, rain: 55, rainyDays: 11, wind: 15 },
      { month: "Apr", temp: 10, rain: 45, rainyDays: 9, wind: 14 },
      { month: "May", temp: 14, rain: 62, rainyDays: 11, wind: 13 },
      { month: "Jun", temp: 17, rain: 65, rainyDays: 10, wind: 12 },
      { month: "Jul", temp: 19, rain: 73, rainyDays: 10, wind: 12 },
      { month: "Aug", temp: 19, rain: 70, rainyDays: 10, wind: 12 },
      { month: "Sep", temp: 16, rain: 62, rainyDays: 10, wind: 13 },
      { month: "Oct", temp: 12, rain: 68, rainyDays: 11, wind: 14 },
      { month: "Nov", temp: 7, rain: 70, rainyDays: 12, wind: 15 },
      { month: "Dec", temp: 4, rain: 72, rainyDays: 13, wind: 16 }
    ]
  },
  'dortmund': {
    city: "Dortmund", country: "Germany",
    months: [
      { month: "Jan", temp: 2, rain: 65, rainyDays: 12, wind: 15 },
      { month: "Feb", temp: 3, rain: 52, rainyDays: 10, wind: 15 },
      { month: "Mar", temp: 6, rain: 58, rainyDays: 11, wind: 14 },
      { month: "Apr", temp: 10, rain: 50, rainyDays: 9, wind: 13 },
      { month: "May", temp: 14, rain: 65, rainyDays: 11, wind: 12 },
      { month: "Jun", temp: 17, rain: 72, rainyDays: 11, wind: 11 },
      { month: "Jul", temp: 19, rain: 78, rainyDays: 11, wind: 11 },
      { month: "Aug", temp: 19, rain: 70, rainyDays: 10, wind: 11 },
      { month: "Sep", temp: 15, rain: 60, rainyDays: 9, wind: 12 },
      { month: "Oct", temp: 11, rain: 58, rainyDays: 10, wind: 13 },
      { month: "Nov", temp: 6, rain: 64, rainyDays: 11, wind: 14 },
      { month: "Dec", temp: 3, rain: 68, rainyDays: 12, wind: 15 }
    ]
  },
  'istanbul': {
    city: "Istanbul", country: "Turkey",
    months: [
      { month: "Jan", temp: 6, rain: 99, rainyDays: 13, wind: 14 },
      { month: "Feb", temp: 6, rain: 72, rainyDays: 11, wind: 15 },
      { month: "Mar", temp: 8, rain: 62, rainyDays: 10, wind: 13 },
      { month: "Apr", temp: 13, rain: 43, rainyDays: 8, wind: 11 },
      { month: "May", temp: 17, rain: 31, rainyDays: 6, wind: 10 },
      { month: "Jun", temp: 22, rain: 24, rainyDays: 5, wind: 10 },
      { month: "Jul", temp: 25, rain: 14, rainyDays: 3, wind: 11 },
      { month: "Aug", temp: 25, rain: 19, rainyDays: 3, wind: 11 },
      { month: "Sep", temp: 21, rain: 40, rainyDays: 5, wind: 10 },
      { month: "Oct", temp: 16, rain: 73, rainyDays: 9, wind: 12 },
      { month: "Nov", temp: 12, rain: 90, rainyDays: 11, wind: 13 },
      { month: "Dec", temp: 8, rain: 108, rainyDays: 14, wind: 14 }
    ]
  },
  'lisbon': {
    city: "Lisbon", country: "Portugal",
    months: [
      { month: "Jan", temp: 12, rain: 96, rainyDays: 11, wind: 13 },
      { month: "Feb", temp: 13, rain: 84, rainyDays: 10, wind: 14 },
      { month: "Mar", temp: 15, rain: 52, rainyDays: 8, wind: 13 },
      { month: "Apr", temp: 16, rain: 64, rainyDays: 9, wind: 13 },
      { month: "May", temp: 18, rain: 39, rainyDays: 6, wind: 12 },
      { month: "Jun", temp: 22, rain: 11, rainyDays: 2, wind: 12 },
      { month: "Jul", temp: 24, rain: 3, rainyDays: 1, wind: 13 },
      { month: "Aug", temp: 24, rain: 5, rainyDays: 1, wind: 12 },
      { month: "Sep", temp: 22, rain: 26, rainyDays: 4, wind: 11 },
      { month: "Oct", temp: 18, rain: 80, rainyDays: 9, wind: 11 },
      { month: "Nov", temp: 15, rain: 106, rainyDays: 11, wind: 12 },
      { month: "Dec", temp: 12, rain: 103, rainyDays: 11, wind: 13 }
    ]
  },
  'london': {
    city: "London", country: "England",
    months: [
      { month: "Jan", temp: 5, rain: 55, rainyDays: 11, wind: 15 },
      { month: "Feb", temp: 5, rain: 41, rainyDays: 9, wind: 14 },
      { month: "Mar", temp: 7, rain: 42, rainyDays: 9, wind: 13 },
      { month: "Apr", temp: 10, rain: 43, rainyDays: 9, wind: 12 },
      { month: "May", temp: 13, rain: 49, rainyDays: 9, wind: 11 },
      { month: "Jun", temp: 16, rain: 45, rainyDays: 8, wind: 10 },
      { month: "Jul", temp: 19, rain: 45, rainyDays: 8, wind: 10 },
      { month: "Aug", temp: 18, rain: 50, rainyDays: 8, wind: 10 },
      { month: "Sep", temp: 16, rain: 49, rainyDays: 8, wind: 11 },
      { month: "Oct", temp: 12, rain: 69, rainyDays: 10, wind: 13 },
      { month: "Nov", temp: 8, rain: 59, rainyDays: 10, wind: 14 },
      { month: "Dec", temp: 5, rain: 55, rainyDays: 10, wind: 14 }
    ]
  },
  'madrid': {
    city: "Madrid", country: "Spain",
    months: [
      { month: "Jan", temp: 6, rain: 33, rainyDays: 6, wind: 10 },
      { month: "Feb", temp: 8, rain: 34, rainyDays: 5, wind: 11 },
      { month: "Mar", temp: 11, rain: 25, rainyDays: 5, wind: 12 },
      { month: "Apr", temp: 13, rain: 45, rainyDays: 7, wind: 12 },
      { month: "May", temp: 17, rain: 44, rainyDays: 7, wind: 11 },
      { month: "Jun", temp: 23, rain: 21, rainyDays: 3, wind: 11 },
      { month: "Jul", temp: 27, rain: 11, rainyDays: 2, wind: 11 },
      { month: "Aug", temp: 26, rain: 12, rainyDays: 2, wind: 10 },
      { month: "Sep", temp: 22, rain: 28, rainyDays: 4, wind: 10 },
      { month: "Oct", temp: 15, rain: 50, rainyDays: 7, wind: 10 },
      { month: "Nov", temp: 10, rain: 56, rainyDays: 7, wind: 10 },
      { month: "Dec", temp: 7, rain: 42, rainyDays: 7, wind: 10 }
    ]
  },
  'malmo': {
    city: "Malmö", country: "Sweden",
    months: [
      { month: "Jan", temp: 0, rain: 49, rainyDays: 12, wind: 18 },
      { month: "Feb", temp: 0, rain: 30, rainyDays: 9, wind: 17 },
      { month: "Mar", temp: 3, rain: 38, rainyDays: 9, wind: 16 },
      { month: "Apr", temp: 7, rain: 33, rainyDays: 8, wind: 15 },
      { month: "May", temp: 12, rain: 39, rainyDays: 8, wind: 13 },
      { month: "Jun", temp: 16, rain: 48, rainyDays: 9, wind: 13 },
      { month: "Jul", temp: 18, rain: 62, rainyDays: 10, wind: 13 },
      { month: "Aug", temp: 18, rain: 60, rainyDays: 10, wind: 13 },
      { month: "Sep", temp: 14, rain: 55, rainyDays: 10, wind: 14 },
      { month: "Oct", temp: 10, rain: 54, rainyDays: 11, wind: 16 },
      { month: "Nov", temp: 5, rain: 56, rainyDays: 12, wind: 17 },
      { month: "Dec", temp: 2, rain: 52, rainyDays: 12, wind: 18 }
    ]
  },
  'milan': {
    city: "Milan", country: "Italy",
    months: [
      { month: "Jan", temp: 3, rain: 58, rainyDays: 7, wind: 8 },
      { month: "Feb", temp: 5, rain: 49, rainyDays: 6, wind: 9 },
      { month: "Mar", temp: 10, rain: 65, rainyDays: 8, wind: 9 },
      { month: "Apr", temp: 14, rain: 75, rainyDays: 10, wind: 9 },
      { month: "May", temp: 18, rain: 96, rainyDays: 11, wind: 8 },
      { month: "Jun", temp: 23, rain: 65, rainyDays: 8, wind: 8 },
      { month: "Jul", temp: 25, rain: 67, rainyDays: 6, wind: 7 },
      { month: "Aug", temp: 25, rain: 86, rainyDays: 8, wind: 7 },
      { month: "Sep", temp: 20, rain: 69, rainyDays: 7, wind: 7 },
      { month: "Oct", temp: 14, rain: 99, rainyDays: 9, wind: 8 },
      { month: "Nov", temp: 8, rain: 86, rainyDays: 9, wind: 8 },
      { month: "Dec", temp: 4, rain: 61, rainyDays: 7, wind: 8 }
    ]
  },
  'molde': {
    city: "Molde", country: "Norway",
    months: [
      { month: "Jan", temp: 1, rain: 130, rainyDays: 17, wind: 14 },
      { month: "Feb", temp: 1, rain: 95, rainyDays: 14, wind: 14 },
      { month: "Mar", temp: 3, rain: 90, rainyDays: 14, wind: 13 },
      { month: "Apr", temp: 5, rain: 70, rainyDays: 12, wind: 12 },
      { month: "May", temp: 9, rain: 60, rainyDays: 11, wind: 11 },
      { month: "Jun", temp: 12, rain: 65, rainyDays: 11, wind: 10 },
      { month: "Jul", temp: 14, rain: 80, rainyDays: 13, wind: 9 },
      { month: "Aug", temp: 14, rain: 95, rainyDays: 14, wind: 10 },
      { month: "Sep", temp: 11, rain: 130, rainyDays: 16, wind: 12 },
      { month: "Oct", temp: 8, rain: 140, rainyDays: 17, wind: 13 },
      { month: "Nov", temp: 4, rain: 120, rainyDays: 16, wind: 14 },
      { month: "Dec", temp: 2, rain: 125, rainyDays: 17, wind: 14 }
    ]
  },
  'munich': {
    city: "Munich", country: "Germany",
    months: [
      { month: "Jan", temp: -1, rain: 46, rainyDays: 10, wind: 12 },
      { month: "Feb", temp: 1, rain: 45, rainyDays: 9, wind: 12 },
      { month: "Mar", temp: 5, rain: 57, rainyDays: 10, wind: 13 },
      { month: "Apr", temp: 9, rain: 63, rainyDays: 11, wind: 12 },
      { month: "May", temp: 14, rain: 90, rainyDays: 13, wind: 11 },
      { month: "Jun", temp: 17, rain: 115, rainyDays: 14, wind: 10 },
      { month: "Jul", temp: 19, rain: 120, rainyDays: 13, wind: 10 },
      { month: "Aug", temp: 19, rain: 105, rainyDays: 12, wind: 10 },
      { month: "Sep", temp: 15, rain: 72, rainyDays: 10, wind: 10 },
      { month: "Oct", temp: 9, rain: 55, rainyDays: 9, wind: 11 },
      { month: "Nov", temp: 4, rain: 58, rainyDays: 10, wind: 12 },
      { month: "Dec", temp: 1, rain: 55, rainyDays: 11, wind: 12 }
    ]
  },
  'paris': {
    city: "Paris", country: "France",
    months: [
      { month: "Jan", temp: 5, rain: 51, rainyDays: 10, wind: 15 },
      { month: "Feb", temp: 5, rain: 41, rainyDays: 9, wind: 14 },
      { month: "Mar", temp: 9, rain: 48, rainyDays: 9, wind: 14 },
      { month: "Apr", temp: 12, rain: 45, rainyDays: 9, wind: 13 },
      { month: "May", temp: 16, rain: 63, rainyDays: 10, wind: 12 },
      { month: "Jun", temp: 19, rain: 50, rainyDays: 9, wind: 11 },
      { month: "Jul", temp: 21, rain: 56, rainyDays: 8, wind: 11 },
      { month: "Aug", temp: 21, rain: 43, rainyDays: 7, wind: 11 },
      { month: "Sep", temp: 17, rain: 47, rainyDays: 8, wind: 11 },
      { month: "Oct", temp: 13, rain: 55, rainyDays: 9, wind: 13 },
      { month: "Nov", temp: 8, rain: 51, rainyDays: 10, wind: 14 },
      { month: "Dec", temp: 5, rain: 57, rainyDays: 11, wind: 14 }
    ]
  },
  'prague': {
    city: "Prague", country: "Czech Republic",
    months: [
      { month: "Jan", temp: -1, rain: 23, rainyDays: 7, wind: 14 },
      { month: "Feb", temp: 1, rain: 22, rainyDays: 6, wind: 14 },
      { month: "Mar", temp: 5, rain: 28, rainyDays: 7, wind: 14 },
      { month: "Apr", temp: 10, rain: 32, rainyDays: 7, wind: 13 },
      { month: "May", temp: 15, rain: 62, rainyDays: 10, wind: 12 },
      { month: "Jun", temp: 18, rain: 68, rainyDays: 10, wind: 11 },
      { month: "Jul", temp: 20, rain: 72, rainyDays: 10, wind: 11 },
      { month: "Aug", temp: 20, rain: 66, rainyDays: 9, wind: 10 },
      { month: "Sep", temp: 15, rain: 40, rainyDays: 7, wind: 11 },
      { month: "Oct", temp: 10, rain: 30, rainyDays: 6, wind: 12 },
      { month: "Nov", temp: 4, rain: 29, rainyDays: 7, wind: 13 },
      { month: "Dec", temp: 1, rain: 25, rainyDays: 7, wind: 14 }
    ]
  },
  'salzburg': {
    city: "Salzburg", country: "Austria",
    months: [
      { month: "Jan", temp: -1, rain: 56, rainyDays: 10, wind: 10 },
      { month: "Feb", temp: 1, rain: 48, rainyDays: 9, wind: 11 },
      { month: "Mar", temp: 5, rain: 62, rainyDays: 10, wind: 11 },
      { month: "Apr", temp: 10, rain: 72, rainyDays: 11, wind: 10 },
      { month: "May", temp: 14, rain: 102, rainyDays: 14, wind: 9 },
      { month: "Jun", temp: 18, rain: 130, rainyDays: 15, wind: 9 },
      { month: "Jul", temp: 20, rain: 140, rainyDays: 14, wind: 8 },
      { month: "Aug", temp: 19, rain: 128, rainyDays: 13, wind: 8 },
      { month: "Sep", temp: 15, rain: 82, rainyDays: 10, wind: 9 },
      { month: "Oct", temp: 10, rain: 62, rainyDays: 9, wind: 10 },
      { month: "Nov", temp: 4, rain: 62, rainyDays: 10, wind: 10 },
      { month: "Dec", temp: 1, rain: 58, rainyDays: 10, wind: 10 }
    ]
  },
  'turin': {
    city: "Turin", country: "Italy",
    months: [
      { month: "Jan", temp: 2, rain: 37, rainyDays: 5, wind: 7 },
      { month: "Feb", temp: 4, rain: 42, rainyDays: 5, wind: 8 },
      { month: "Mar", temp: 9, rain: 55, rainyDays: 7, wind: 9 },
      { month: "Apr", temp: 13, rain: 92, rainyDays: 10, wind: 8 },
      { month: "May", temp: 17, rain: 108, rainyDays: 11, wind: 8 },
      { month: "Jun", temp: 22, rain: 78, rainyDays: 8, wind: 7 },
      { month: "Jul", temp: 24, rain: 46, rainyDays: 5, wind: 7 },
      { month: "Aug", temp: 24, rain: 68, rainyDays: 7, wind: 7 },
      { month: "Sep", temp: 19, rain: 65, rainyDays: 6, wind: 7 },
      { month: "Oct", temp: 13, rain: 86, rainyDays: 8, wind: 7 },
      { month: "Nov", temp: 7, rain: 72, rainyDays: 7, wind: 7 },
      { month: "Dec", temp: 3, rain: 42, rainyDays: 5, wind: 7 }
    ]
  },
  'warsaw': {
    city: "Warsaw", country: "Poland",
    months: [
      { month: "Jan", temp: -2, rain: 27, rainyDays: 9, wind: 14 },
      { month: "Feb", temp: -1, rain: 26, rainyDays: 8, wind: 14 },
      { month: "Mar", temp: 3, rain: 28, rainyDays: 7, wind: 14 },
      { month: "Apr", temp: 9, rain: 37, rainyDays: 8, wind: 13 },
      { month: "May", temp: 15, rain: 52, rainyDays: 9, wind: 12 },
      { month: "Jun", temp: 18, rain: 68, rainyDays: 10, wind: 11 },
      { month: "Jul", temp: 20, rain: 73, rainyDays: 10, wind: 11 },
      { month: "Aug", temp: 19, rain: 56, rainyDays: 9, wind: 10 },
      { month: "Sep", temp: 14, rain: 43, rainyDays: 8, wind: 11 },
      { month: "Oct", temp: 9, rain: 32, rainyDays: 7, wind: 12 },
      { month: "Nov", temp: 4, rain: 36, rainyDays: 9, wind: 13 },
      { month: "Dec", temp: 0, rain: 31, rainyDays: 9, wind: 14 }
    ]
  },
  'zagreb': {
    city: "Zagreb", country: "Croatia",
    months: [
      { month: "Jan", temp: 1, rain: 48, rainyDays: 9, wind: 11 },
      { month: "Feb", temp: 3, rain: 40, rainyDays: 8, wind: 12 },
      { month: "Mar", temp: 8, rain: 50, rainyDays: 9, wind: 12 },
      { month: "Apr", temp: 12, rain: 60, rainyDays: 10, wind: 11 },
      { month: "May", temp: 17, rain: 75, rainyDays: 12, wind: 10 },
      { month: "Jun", temp: 21, rain: 90, rainyDays: 12, wind: 9 },
      { month: "Jul", temp: 23, rain: 72, rainyDays: 9, wind: 9 },
      { month: "Aug", temp: 22, rain: 80, rainyDays: 9, wind: 9 },
      { month: "Sep", temp: 18, rain: 82, rainyDays: 9, wind: 9 },
      { month: "Oct", temp: 12, rain: 72, rainyDays: 9, wind: 10 },
      { month: "Nov", temp: 7, rain: 75, rainyDays: 11, wind: 11 },
      { month: "Dec", temp: 2, rain: 60, rainyDays: 10, wind: 11 }
    ]
  }
};

const NEWS_ITEMS = [
  { date: "2026-04-12", text: "La Masia graduates three players to FC Barcelona first team for Champions League campaign", academy: "fc-barcelona-la-masia" },
  { date: "2026-04-07", text: "Ajax Youth Academy unveils new scouting partnership with five African football federations", academy: "ajax-youth-academy" },
  { date: "2026-03-30", text: "Clairefontaine announces expansion of its elite youth development program to 120 places", academy: "clairefontaine" },
  { date: "2026-03-24", text: "Benfica Academy prospect earns call-up to Portugal U-21 squad ahead of European Championship qualifiers", academy: "benfica-academy" },
  { date: "2026-03-17", text: "Red Bull Salzburg Academy launches data-driven performance analysis program for youth players", academy: "red-bull-salzburg-academy" },
  { date: "2026-03-10", text: "UEFA announces record investment in grassroots youth football development across Europe", academy: null }
];
