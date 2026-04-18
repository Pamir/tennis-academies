const SPORT_TYPE = 'art';

const ACADEMIES = [
  {
    "id": "florence-art-academy",
    "name": "Florence Academy of Art",
    "country": "Italy",
    "countryFlag": "🇮🇹",
    "city": "Florence",
    "lat": 43.7696,
    "lng": 11.2558,
    "website": "https://www.florenceacademyofart.com",
    "contact": "+39 055 245 444",
    "contactEmail": "info@florenceacademyofart.com",
    "description": "Nestled in the heart of Renaissance art, the Florence Academy of Art offers immersive classical training in drawing, painting, and sculpture. Students learn time-honored techniques in a city that has inspired artists for centuries.",
    "ageGroups": [
      "Adults",
      "Teens (14-17)",
      "Seniors (55+)"
    ],
    "level": "Beginner to Advanced",
    "individualLessons": true,
    "boarding": true,
    "beach": false,
    "priceRange": {
      "from": 800,
      "to": 2200,
      "unit": "week",
      "display": "€800–€2,200/week"
    },
    "socialMedia": {
      "instagram": "@florenceartacademy",
      "facebook": "florenceacademyofart",
      "twitter": "@FlorenceArtAcad"
    },
    "climate": "florence",
    "facilities": "Painting studios, Sculpture workshop, Life drawing room, Fresco laboratory, Exhibition gallery, Library, Plein air terrace",
    "courtSurfaces": [
      "Oil Painting",
      "Drawing",
      "Sculpture",
      "Fresco"
    ],
    "programs": [
      {
        "name": "Classical Drawing Intensive",
        "price": "€1200/week",
        "desc": "Master anatomical drawing and perspective using traditional Renaissance methods."
      },
      {
        "name": "Oil Painting Masterclass",
        "price": "€1500/week",
        "desc": "Explore glazing, impasto, and alla prima techniques under guidance of experienced figurative painters."
      },
      {
        "name": "Sculpture Foundation",
        "price": "€1800/week",
        "desc": "Work in clay and marble with expert sculptors, learning classical proportion and form."
      }
    ],
    "coaches": [
      {
        "name": "Marco Rinaldi",
        "credential": "MFA, Accademia di Belle Arti",
        "background": "Award-winning figurative painter with 20 years of teaching experience in classical methods.",
        "atpWta": false,
        "bestRanking": null,
        "rankingNote": null,
        "languages": [
          "Italian",
          "English",
          "French"
        ],
        "instagram": null
      },
      {
        "name": "Elena Bianchi",
        "credential": "Royal Academy Fellow",
        "background": "Sculptor exhibited in major European galleries, specializing in bronze and marble figurative work.",
        "atpWta": false,
        "bestRanking": null,
        "rankingNote": null,
        "languages": [
          "Italian",
          "English"
        ],
        "instagram": null
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800",
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800",
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800"
    ],
    "upcomingCamps": [
      {
        "name": "Renaissance Drawing Retreat",
        "startDate": "2026-03-15",
        "endDate": "2026-03-28",
        "price": "€2400",
        "level": "Intermediate"
      },
      {
        "name": "Summer Plein Air Workshop",
        "startDate": "2026-06-20",
        "endDate": "2026-07-04",
        "price": "€2800",
        "level": "All Levels"
      },
      {
        "name": "Winter Portrait Intensive",
        "startDate": "2027-01-10",
        "endDate": "2027-01-24",
        "price": "€2600",
        "level": "Advanced"
      }
    ],
    "accommodation": {
      "types": [
        {
          "type": "shared",
          "label": "Shared Studio Apartment",
          "pricePerWeek": 450,
          "maxOccupancy": 2,
          "bathType": "shared",
          "mealsIncluded": false
        },
        {
          "type": "private",
          "label": "Private Room in Historic Palazzo",
          "pricePerWeek": 750,
          "maxOccupancy": 1,
          "bathType": "private",
          "mealsIncluded": true
        }
      ],
      "companionsAllowed": true,
      "childrenAllowed": true,
      "minStay": "1 week",
      "shuttleToTraining": false,
      "notes": "Accommodation within walking distance of the studio in central Florence."
    },
    "availability": {
      "status": "open",
      "nextIntake": "2026-03-01",
      "spotsLeft": 12,
      "responseTime": "48 hours",
      "privateLessons": true,
      "yearRound": true
    },
    "juniorInfo": {
      "minAge": 14,
      "maxAge": 17,
      "supervision": "24/7 on-site supervision with dedicated youth coordinator",
      "guardianStay": true,
      "schooling": "Partnership with local international school",
      "medicalStaff": true,
      "safeguarding": "Full DBS-checked staff, CCTV in common areas, strict visitor policy",
      "airportPickup": true,
      "mealPlan": "Full board with Italian cuisine, dietary requirements accommodated",
      "curfew": "21:00 weekdays, 22:00 weekends",
      "roommatePairing": "Age and gender appropriate, preferences considered",
      "languageSupport": [
        "English",
        "Italian",
        "French",
        "Spanish"
      ],
      "emergencyProtocol": "24/7 emergency line, nearest hospital 10 minutes away"
    }
  },
  {
    "id": "paris-atelier-beaux-arts",
    "name": "Paris Atelier des Beaux-Arts",
    "country": "France",
    "countryFlag": "🇫🇷",
    "city": "Paris",
    "lat": 48.8566,
    "lng": 2.3522,
    "website": "https://www.parisatelierbeauxarts.fr",
    "contact": "+33 1 42 86 57 30",
    "contactEmail": "contact@parisatelierbeauxarts.fr",
    "description": "Set in the artistic heart of Paris, this prestigious atelier offers comprehensive training in fine arts within the French academic tradition. Students benefit from proximity to the Louvre and vibrant gallery scene.",
    "ageGroups": [
      "Adults",
      "Teens (14-17)",
      "Seniors (55+)"
    ],
    "level": "Beginner to Advanced",
    "individualLessons": true,
    "boarding": true,
    "beach": false,
    "priceRange": {
      "from": 900,
      "to": 2500,
      "unit": "week",
      "display": "€900–€2,500/week"
    },
    "socialMedia": {
      "instagram": "@parisatelierba",
      "facebook": "parisatelierbeauxarts",
      "twitter": "@ParisAtelierBA"
    },
    "climate": "paris",
    "facilities": "Drawing studios, Painting ateliers, Printmaking workshop, Photography darkroom, Exhibition space, Art history library",
    "courtSurfaces": [
      "Oil Painting",
      "Watercolor",
      "Drawing",
      "Printmaking"
    ],
    "programs": [
      {
        "name": "Atelier Drawing Program",
        "price": "€1300/week",
        "desc": "Intensive figure drawing and compositional studies in the French academic tradition."
      },
      {
        "name": "Impressionist Painting Workshop",
        "price": "€1600/week",
        "desc": "Paint en plein air at iconic Parisian locations, studying light and color theory."
      },
      {
        "name": "Printmaking & Etching Course",
        "price": "€1400/week",
        "desc": "Learn intaglio, lithography, and relief printing techniques in a professional studio."
      }
    ],
    "coaches": [
      {
        "name": "Jean-Pierre Moreau",
        "credential": "Diplome National des Beaux-Arts",
        "background": "Former instructor at Ecole des Beaux-Arts with extensive exhibition history across Europe.",
        "atpWta": false,
        "bestRanking": null,
        "rankingNote": null,
        "languages": [
          "French",
          "English",
          "German"
        ],
        "instagram": null
      },
      {
        "name": "Sophie Laurent",
        "credential": "MFA, Sorbonne University",
        "background": "Contemporary painter and printmaker whose work explores the intersection of tradition and modernity.",
        "atpWta": false,
        "bestRanking": null,
        "rankingNote": null,
        "languages": [
          "French",
          "English"
        ],
        "instagram": null
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800",
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800",
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800"
    ],
    "upcomingCamps": [
      {
        "name": "Parisian Plein Air Spring",
        "startDate": "2026-04-05",
        "endDate": "2026-04-19",
        "price": "€3000",
        "level": "All Levels"
      },
      {
        "name": "Summer Figure Drawing Intensive",
        "startDate": "2026-07-06",
        "endDate": "2026-07-20",
        "price": "€3200",
        "level": "Intermediate"
      },
      {
        "name": "Autumn Printmaking Residency",
        "startDate": "2026-10-01",
        "endDate": "2026-10-15",
        "price": "€2800",
        "level": "Advanced"
      }
    ],
    "accommodation": {
      "types": [
        {
          "type": "shared",
          "label": "Shared Artist Residence",
          "pricePerWeek": 550,
          "maxOccupancy": 2,
          "bathType": "shared",
          "mealsIncluded": false
        },
        {
          "type": "private",
          "label": "Private Studio Apartment",
          "pricePerWeek": 900,
          "maxOccupancy": 1,
          "bathType": "private",
          "mealsIncluded": true
        }
      ],
      "companionsAllowed": true,
      "childrenAllowed": true,
      "minStay": "1 week",
      "shuttleToTraining": true,
      "notes": "Residences in the artistic Montmartre and Saint-Germain districts."
    },
    "availability": {
      "status": "limited",
      "nextIntake": "2026-04-01",
      "spotsLeft": 8,
      "responseTime": "24 hours",
      "privateLessons": true,
      "yearRound": true
    },
    "juniorInfo": {
      "minAge": 14,
      "maxAge": 17,
      "supervision": "Dedicated youth supervisors with art education backgrounds",
      "guardianStay": true,
      "schooling": "Arrangement with nearby bilingual lycee",
      "medicalStaff": true,
      "safeguarding": "Enhanced DBS checks, secure premises, registered with local authorities",
      "airportPickup": true,
      "mealPlan": "Full board with French cuisine, vegetarian and halal options",
      "curfew": "21:00 weekdays, 22:00 weekends",
      "roommatePairing": "Age-appropriate groupings with preferences honored",
      "languageSupport": [
        "French",
        "English",
        "Spanish",
        "Mandarin"
      ],
      "emergencyProtocol": "24/7 emergency contact, hospital within 5 minutes"
    }
  },
  {
    "id": "barcelona-art-centre",
    "name": "Barcelona Centre for Contemporary Art",
    "country": "Spain",
    "countryFlag": "🇪🇸",
    "city": "Barcelona",
    "lat": 41.3851,
    "lng": 2.1734,
    "website": "https://www.barcelonaartcentre.es",
    "contact": "+34 93 412 7890",
    "contactEmail": "info@barcelonaartcentre.es",
    "description": "Located in the vibrant Catalan capital, this center blends traditional Mediterranean art traditions with cutting-edge contemporary practice. The city that inspired Picasso and Miro continues to fuel creative exploration.",
    "ageGroups": [
      "Adults",
      "Teens (14-17)",
      "Seniors (55+)"
    ],
    "level": "Beginner to Advanced",
    "individualLessons": true,
    "boarding": true,
    "beach": {
      "distance": 2,
      "description": "Barceloneta Beach, 2 km from studio"
    },
    "priceRange": {
      "from": 700,
      "to": 1900,
      "unit": "week",
      "display": "€700–€1,900/week"
    },
    "socialMedia": {
      "instagram": "@bcnartcentre",
      "facebook": "barcelonaartcentre",
      "twitter": "@BCNArtCentre"
    },
    "climate": "barcelona",
    "facilities": "Contemporary art studios, Digital art lab, Ceramics workshop, Open-air sculpture garden, Gallery space, Multimedia room",
    "courtSurfaces": [
      "Mixed Media",
      "Digital Art",
      "Ceramics",
      "Drawing"
    ],
    "programs": [
      {
        "name": "Contemporary Mixed Media",
        "price": "€1000/week",
        "desc": "Explore collage, assemblage, and installation art using diverse materials and found objects."
      },
      {
        "name": "Digital Art & New Media",
        "price": "€1200/week",
        "desc": "Introduction to digital painting, generative art, and interactive installations."
      },
      {
        "name": "Mediterranean Ceramics",
        "price": "€900/week",
        "desc": "Learn wheel-throwing, hand-building, and glazing in the Catalan ceramic tradition."
      }
    ],
    "coaches": [
      {
        "name": "Carlos Vega",
        "credential": "MFA, University of Barcelona",
        "background": "Mixed media artist whose installations have been featured at major international biennials.",
        "atpWta": false,
        "bestRanking": null,
        "rankingNote": null,
        "languages": [
          "Spanish",
          "Catalan",
          "English"
        ],
        "instagram": null
      },
      {
        "name": "Maria Torres",
        "credential": "PhD, Art History, Complutense Madrid",
        "background": "Ceramicist and art theorist combining ancient techniques with modern conceptual frameworks.",
        "atpWta": false,
        "bestRanking": null,
        "rankingNote": null,
        "languages": [
          "Spanish",
          "English",
          "Portuguese"
        ],
        "instagram": null
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800",
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800",
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800"
    ],
    "upcomingCamps": [
      {
        "name": "Mediterranean Art Summer",
        "startDate": "2026-06-15",
        "endDate": "2026-06-29",
        "price": "€2200",
        "level": "All Levels"
      },
      {
        "name": "Digital Art Boot Camp",
        "startDate": "2026-09-01",
        "endDate": "2026-09-14",
        "price": "€2400",
        "level": "Intermediate"
      },
      {
        "name": "Winter Ceramics Residency",
        "startDate": "2027-02-01",
        "endDate": "2027-02-15",
        "price": "€2000",
        "level": "All Levels"
      }
    ],
    "accommodation": {
      "types": [
        {
          "type": "shared",
          "label": "Shared Apartment in Eixample",
          "pricePerWeek": 400,
          "maxOccupancy": 2,
          "bathType": "shared",
          "mealsIncluded": false
        },
        {
          "type": "private",
          "label": "Private Room near La Rambla",
          "pricePerWeek": 650,
          "maxOccupancy": 1,
          "bathType": "private",
          "mealsIncluded": true
        }
      ],
      "companionsAllowed": true,
      "childrenAllowed": true,
      "minStay": "1 week",
      "shuttleToTraining": true,
      "notes": "Accommodation in central Barcelona with easy metro access to the studio."
    },
    "availability": {
      "status": "open",
      "nextIntake": "2026-06-01",
      "spotsLeft": 15,
      "responseTime": "48 hours",
      "privateLessons": true,
      "yearRound": true
    },
    "juniorInfo": {
      "minAge": 14,
      "maxAge": 17,
      "supervision": "Bilingual supervisors with first-aid training",
      "guardianStay": true,
      "schooling": "Collaboration with local international schools",
      "medicalStaff": true,
      "safeguarding": "Safeguarding policy aligned with Spanish child protection laws",
      "airportPickup": true,
      "mealPlan": "Full board with Mediterranean diet, allergies accommodated",
      "curfew": "21:30 weekdays, 22:30 weekends",
      "roommatePairing": "Mixed nationality groupings to encourage cultural exchange",
      "languageSupport": [
        "Spanish",
        "English",
        "Catalan",
        "French"
      ],
      "emergencyProtocol": "24/7 emergency line, Hospital del Mar 10 minutes away"
    }
  },
  {
    "id": "amsterdam-rijks-art-school",
    "name": "Amsterdam Rijks Art School",
    "country": "Netherlands",
    "countryFlag": "🇳🇱",
    "city": "Amsterdam",
    "lat": 52.3676,
    "lng": 4.9041,
    "website": "https://www.rijksartschool.nl",
    "contact": "+31 20 674 5000",
    "contactEmail": "info@rijksartschool.nl",
    "description": "Inspired by the Dutch Golden Age masters, this school offers rigorous training in painting and drawing with a focus on light, color, and realism. Steps from the Rijksmuseum and Van Gogh Museum.",
    "ageGroups": [
      "Adults",
      "Teens (14-17)",
      "Seniors (55+)"
    ],
    "level": "Beginner to Advanced",
    "individualLessons": true,
    "boarding": true,
    "beach": false,
    "priceRange": {
      "from": 850,
      "to": 2100,
      "unit": "week",
      "display": "€850–€2,100/week"
    },
    "socialMedia": {
      "instagram": "@rijksartschool",
      "facebook": "rijksartschool",
      "twitter": "@RijksArtSchool"
    },
    "climate": "amsterdam",
    "facilities": "Painting studios, Darkroom, Print studio, Life drawing hall, Digital lab, Canal-side plein air deck",
    "courtSurfaces": [
      "Oil Painting",
      "Watercolor",
      "Photography",
      "Drawing"
    ],
    "programs": [
      {
        "name": "Dutch Masters Painting",
        "price": "€1100/week",
        "desc": "Study light, shadow, and color through techniques of Rembrandt, Vermeer, and the Golden Age."
      },
      {
        "name": "Fine Art Photography",
        "price": "€1300/week",
        "desc": "Analog and digital photography with emphasis on composition, narrative, and darkroom techniques."
      },
      {
        "name": "Watercolor Landscapes",
        "price": "€1000/week",
        "desc": "Capture the Dutch countryside and cityscapes in watercolor with guided plein air sessions."
      }
    ],
    "coaches": [
      {
        "name": "Willem de Groot",
        "credential": "MFA, Gerrit Rietveld Academie",
        "background": "Realist painter specializing in Dutch light studies and still life compositions.",
        "atpWta": false,
        "bestRanking": null,
        "rankingNote": null,
        "languages": [
          "Dutch",
          "English",
          "German"
        ],
        "instagram": null
      },
      {
        "name": "Anke Vermeer",
        "credential": "MA, Royal Academy of Art, The Hague",
        "background": "Photographer and mixed media artist exploring urban landscapes and documentary storytelling.",
        "atpWta": false,
        "bestRanking": null,
        "rankingNote": null,
        "languages": [
          "Dutch",
          "English",
          "French"
        ],
        "instagram": null
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800",
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800",
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800"
    ],
    "upcomingCamps": [
      {
        "name": "Golden Age Painting Retreat",
        "startDate": "2026-04-10",
        "endDate": "2026-04-24",
        "price": "€2600",
        "level": "Intermediate"
      },
      {
        "name": "Summer Photography Intensive",
        "startDate": "2026-07-15",
        "endDate": "2026-07-29",
        "price": "€2400",
        "level": "All Levels"
      },
      {
        "name": "Autumn Watercolor Workshop",
        "startDate": "2026-10-05",
        "endDate": "2026-10-19",
        "price": "€2200",
        "level": "Beginner"
      }
    ],
    "accommodation": {
      "types": [
        {
          "type": "shared",
          "label": "Shared Canal House Room",
          "pricePerWeek": 500,
          "maxOccupancy": 2,
          "bathType": "shared",
          "mealsIncluded": false
        },
        {
          "type": "private",
          "label": "Private Studio on Prinsengracht",
          "pricePerWeek": 800,
          "maxOccupancy": 1,
          "bathType": "private",
          "mealsIncluded": true
        }
      ],
      "companionsAllowed": true,
      "childrenAllowed": true,
      "minStay": "1 week",
      "shuttleToTraining": true,
      "notes": "Historic canal house accommodation in the Jordaan district."
    },
    "availability": {
      "status": "open",
      "nextIntake": "2026-04-01",
      "spotsLeft": 10,
      "responseTime": "24 hours",
      "privateLessons": true,
      "yearRound": true
    },
    "juniorInfo": {
      "minAge": 14,
      "maxAge": 17,
      "supervision": "Experienced youth mentors fluent in English and Dutch",
      "guardianStay": true,
      "schooling": "Connections with Amsterdam International Community School",
      "medicalStaff": true,
      "safeguarding": "Strict safeguarding protocols per Dutch child welfare standards",
      "airportPickup": true,
      "mealPlan": "Full board with Dutch and international cuisine",
      "curfew": "21:00 weekdays, 22:00 weekends",
      "roommatePairing": "Nationality-balanced room assignments",
      "languageSupport": [
        "Dutch",
        "English",
        "German",
        "French"
      ],
      "emergencyProtocol": "24/7 emergency support, VU Medical Center 15 minutes away"
    }
  },
  {
    "id": "berlin-kunstakademie",
    "name": "Berlin Kunstakademie",
    "country": "Germany",
    "countryFlag": "🇩🇪",
    "city": "Berlin",
    "lat": 52.52,
    "lng": 13.405,
    "website": "https://www.berlinkunstakademie.de",
    "contact": "+49 30 2093 4567",
    "contactEmail": "info@berlinkunstakademie.de",
    "description": "In the heart of Europe's most dynamic art scene, the Berlin Kunstakademie offers bold contemporary training. From street art to conceptual installations, students engage with cutting-edge creative practice.",
    "ageGroups": [
      "Adults",
      "Teens (14-17)",
      "Seniors (55+)"
    ],
    "level": "Beginner to Advanced",
    "individualLessons": true,
    "boarding": true,
    "beach": false,
    "priceRange": {
      "from": 600,
      "to": 1800,
      "unit": "week",
      "display": "€600–€1,800/week"
    },
    "socialMedia": {
      "instagram": "@berlinkuakademie",
      "facebook": "berlinkunstakademie",
      "twitter": "@BerlinKunstAk"
    },
    "climate": "berlin",
    "facilities": "Industrial art studios, Spray booth, Installation hall, Video editing suite, 3D printing lab, Rooftop gallery",
    "courtSurfaces": [
      "Street Art",
      "Installation Art",
      "Digital Art",
      "Mixed Media"
    ],
    "programs": [
      {
        "name": "Urban Art & Muralism",
        "price": "€900/week",
        "desc": "Design and execute large-scale murals using spray paint, wheat paste, and stencil techniques."
      },
      {
        "name": "Conceptual Installation Art",
        "price": "€1100/week",
        "desc": "Create site-specific installations exploring space, materials, and audience interaction."
      },
      {
        "name": "Digital Art & Video",
        "price": "€1200/week",
        "desc": "Produce video art, motion graphics, and interactive digital experiences."
      }
    ],
    "coaches": [
      {
        "name": "Felix Schneider",
        "credential": "MFA, Universitat der Kunste Berlin",
        "background": "Installation artist and muralist whose large-scale works appear in public spaces across Europe.",
        "atpWta": false,
        "bestRanking": null,
        "rankingNote": null,
        "languages": [
          "German",
          "English",
          "Polish"
        ],
        "instagram": null
      },
      {
        "name": "Lena Hoffmann",
        "credential": "MA, Weissensee Academy of Art",
        "background": "Digital artist and filmmaker working at the intersection of technology and social commentary.",
        "atpWta": false,
        "bestRanking": null,
        "rankingNote": null,
        "languages": [
          "German",
          "English"
        ],
        "instagram": null
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800",
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800",
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800"
    ],
    "upcomingCamps": [
      {
        "name": "Berlin Street Art Festival",
        "startDate": "2026-05-10",
        "endDate": "2026-05-24",
        "price": "€2000",
        "level": "All Levels"
      },
      {
        "name": "Summer Installation Lab",
        "startDate": "2026-08-01",
        "endDate": "2026-08-15",
        "price": "€2200",
        "level": "Intermediate"
      },
      {
        "name": "Winter Digital Art Sprint",
        "startDate": "2027-01-15",
        "endDate": "2027-01-29",
        "price": "€1800",
        "level": "Beginner"
      }
    ],
    "accommodation": {
      "types": [
        {
          "type": "shared",
          "label": "Shared Loft in Kreuzberg",
          "pricePerWeek": 380,
          "maxOccupancy": 2,
          "bathType": "shared",
          "mealsIncluded": false
        },
        {
          "type": "private",
          "label": "Private Studio in Mitte",
          "pricePerWeek": 620,
          "maxOccupancy": 1,
          "bathType": "private",
          "mealsIncluded": true
        }
      ],
      "companionsAllowed": true,
      "childrenAllowed": true,
      "minStay": "1 week",
      "shuttleToTraining": true,
      "notes": "Accommodation in vibrant Kreuzberg and Mitte neighborhoods."
    },
    "availability": {
      "status": "open",
      "nextIntake": "2026-05-01",
      "spotsLeft": 18,
      "responseTime": "24 hours",
      "privateLessons": true,
      "yearRound": true
    },
    "juniorInfo": {
      "minAge": 14,
      "maxAge": 17,
      "supervision": "Youth program coordinators with arts education experience",
      "guardianStay": true,
      "schooling": "Partnership with Berlin International School",
      "medicalStaff": true,
      "safeguarding": "Enhanced safeguarding per German youth protection regulations",
      "airportPickup": true,
      "mealPlan": "Full board with diverse international cuisine",
      "curfew": "21:00 weekdays, 22:00 weekends",
      "roommatePairing": "Interest-based pairing with creative mentoring",
      "languageSupport": [
        "German",
        "English",
        "Turkish",
        "Polish"
      ],
      "emergencyProtocol": "24/7 emergency contact, Charite Hospital 10 minutes away"
    }
  },
  {
    "id": "vienna-fine-arts-institute",
    "name": "Vienna Fine Arts Institute",
    "country": "Austria",
    "countryFlag": "🇦🇹",
    "city": "Vienna",
    "lat": 48.2082,
    "lng": 16.3738,
    "website": "https://www.viennafinearts.at",
    "contact": "+43 1 588 16 100",
    "contactEmail": "info@viennafinearts.at",
    "description": "Steeped in the tradition of Klimt, Schiele, and the Secession movement, the Vienna Fine Arts Institute blends classical European technique with expressive modern approaches in one of the world's great cultural capitals.",
    "ageGroups": [
      "Adults",
      "Teens (14-17)",
      "Seniors (55+)"
    ],
    "level": "Beginner to Advanced",
    "individualLessons": true,
    "boarding": true,
    "beach": false,
    "priceRange": {
      "from": 750,
      "to": 2000,
      "unit": "week",
      "display": "€750–€2,000/week"
    },
    "socialMedia": {
      "instagram": "@viennafinearts",
      "facebook": "viennafineartsinstitute",
      "twitter": "@ViennaFineArts"
    },
    "climate": "vienna",
    "facilities": "Painting ateliers, Gilding workshop, Life drawing studio, Art nouveau gallery, Printmaking press, Lecture hall",
    "courtSurfaces": [
      "Oil Painting",
      "Drawing",
      "Gilding",
      "Printmaking"
    ],
    "programs": [
      {
        "name": "Viennese Classical Painting",
        "price": "€1100/week",
        "desc": "Study portraiture and figurative painting drawing on the rich tradition of Austrian art."
      },
      {
        "name": "Art Nouveau Drawing & Design",
        "price": "€1000/week",
        "desc": "Explore decorative arts and drawing inspired by Klimt and the Secession movement."
      },
      {
        "name": "Fine Art Printmaking",
        "price": "€1200/week",
        "desc": "Master etching, woodcut, and screen printing in a well-equipped professional studio."
      }
    ],
    "coaches": [
      {
        "name": "Hans Gruber",
        "credential": "MFA, Academy of Fine Arts Vienna",
        "background": "Classical painter specializing in portraiture and figure composition in the Viennese tradition.",
        "atpWta": false,
        "bestRanking": null,
        "rankingNote": null,
        "languages": [
          "German",
          "English",
          "Hungarian"
        ],
        "instagram": null
      },
      {
        "name": "Katarina Novak",
        "credential": "PhD, Art History, University of Vienna",
        "background": "Printmaker and art historian whose research focuses on Secession-era techniques and aesthetics.",
        "atpWta": false,
        "bestRanking": null,
        "rankingNote": null,
        "languages": [
          "German",
          "English",
          "Czech"
        ],
        "instagram": null
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800",
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800",
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800"
    ],
    "upcomingCamps": [
      {
        "name": "Secession Art Retreat",
        "startDate": "2026-03-20",
        "endDate": "2026-04-03",
        "price": "€2400",
        "level": "Intermediate"
      },
      {
        "name": "Summer Portrait Intensive",
        "startDate": "2026-07-10",
        "endDate": "2026-07-24",
        "price": "€2600",
        "level": "Advanced"
      },
      {
        "name": "Winter Drawing Workshop",
        "startDate": "2027-01-20",
        "endDate": "2027-02-03",
        "price": "€2200",
        "level": "All Levels"
      }
    ],
    "accommodation": {
      "types": [
        {
          "type": "shared",
          "label": "Shared Room in Pension",
          "pricePerWeek": 420,
          "maxOccupancy": 2,
          "bathType": "shared",
          "mealsIncluded": false
        },
        {
          "type": "private",
          "label": "Private Apartment in Innere Stadt",
          "pricePerWeek": 700,
          "maxOccupancy": 1,
          "bathType": "private",
          "mealsIncluded": true
        }
      ],
      "companionsAllowed": true,
      "childrenAllowed": true,
      "minStay": "1 week",
      "shuttleToTraining": true,
      "notes": "Accommodation in Vienna's historic First District."
    },
    "availability": {
      "status": "open",
      "nextIntake": "2026-03-01",
      "spotsLeft": 14,
      "responseTime": "48 hours",
      "privateLessons": true,
      "yearRound": true
    },
    "juniorInfo": {
      "minAge": 14,
      "maxAge": 17,
      "supervision": "Qualified youth coordinators with multilingual capabilities",
      "guardianStay": true,
      "schooling": "Access to Vienna International School programs",
      "medicalStaff": true,
      "safeguarding": "Austrian child protection certified, regular audits",
      "airportPickup": true,
      "mealPlan": "Full board featuring Viennese and international cuisine",
      "curfew": "21:00 weekdays, 22:00 weekends",
      "roommatePairing": "Interest and age-matched pairing",
      "languageSupport": [
        "German",
        "English",
        "Hungarian",
        "Czech"
      ],
      "emergencyProtocol": "24/7 emergency line, AKH Vienna Hospital 10 minutes away"
    }
  },
  {
    "id": "london-royal-art-workshop",
    "name": "London Royal Art Workshop",
    "country": "United Kingdom",
    "countryFlag": "🇬🇧",
    "city": "London",
    "lat": 51.5074,
    "lng": -0.1278,
    "website": "https://www.londonroyalartworkshop.co.uk",
    "contact": "+44 20 7946 0958",
    "contactEmail": "admissions@londonroyalartworkshop.co.uk",
    "description": "Based in South Kensington near the V&A and Natural History Museum, this workshop provides world-class fine art training in the British tradition. Students benefit from London's unparalleled gallery and museum access.",
    "ageGroups": [
      "Adults",
      "Teens (14-17)",
      "Seniors (55+)"
    ],
    "level": "Beginner to Advanced",
    "individualLessons": true,
    "boarding": true,
    "beach": false,
    "priceRange": {
      "from": 1000,
      "to": 2500,
      "unit": "week",
      "display": "€1000–€2,500/week"
    },
    "socialMedia": {
      "instagram": "@londonroyalart",
      "facebook": "londonroyalartworkshop",
      "twitter": "@LondonRoyalArt"
    },
    "climate": "london",
    "facilities": "Oil painting studios, Watercolor room, Sculpture atelier, Life drawing hall, Print workshop, Exhibition gallery",
    "courtSurfaces": [
      "Oil Painting",
      "Watercolor",
      "Sculpture",
      "Life Drawing"
    ],
    "programs": [
      {
        "name": "Portrait Painting Masterclass",
        "price": "€1500/week",
        "desc": "Develop portraiture skills from observation, learning color mixing and likeness capture."
      },
      {
        "name": "Classical Sculpture Workshop",
        "price": "€1800/week",
        "desc": "Model figures in clay and cast in bronze using time-honored sculptural techniques."
      },
      {
        "name": "British Watercolor Tradition",
        "price": "€1200/week",
        "desc": "Study the luminous watercolor methods of Turner and Constable in studio and on location."
      }
    ],
    "coaches": [
      {
        "name": "James Crawford",
        "credential": "RA, Royal Academy of Arts",
        "background": "Portrait painter and Royal Academician with works in the National Portrait Gallery collection.",
        "atpWta": false,
        "bestRanking": null,
        "rankingNote": null,
        "languages": [
          "English"
        ],
        "instagram": null
      },
      {
        "name": "Sarah Mitchell",
        "credential": "MFA, Royal College of Art",
        "background": "Sculptor working in bronze and stone, exhibited at Frieze and the Serpentine Gallery.",
        "atpWta": false,
        "bestRanking": null,
        "rankingNote": null,
        "languages": [
          "English",
          "French"
        ],
        "instagram": null
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800",
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800",
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800"
    ],
    "upcomingCamps": [
      {
        "name": "Spring Portrait Intensive",
        "startDate": "2026-04-15",
        "endDate": "2026-04-29",
        "price": "€3200",
        "level": "Intermediate"
      },
      {
        "name": "Summer Sculpture Residency",
        "startDate": "2026-07-05",
        "endDate": "2026-07-19",
        "price": "€3500",
        "level": "Advanced"
      },
      {
        "name": "Autumn Watercolor Retreat",
        "startDate": "2026-10-10",
        "endDate": "2026-10-24",
        "price": "€2800",
        "level": "All Levels"
      }
    ],
    "accommodation": {
      "types": [
        {
          "type": "shared",
          "label": "Shared Room in Chelsea Residence",
          "pricePerWeek": 600,
          "maxOccupancy": 2,
          "bathType": "shared",
          "mealsIncluded": false
        },
        {
          "type": "private",
          "label": "Private Studio Flat in Kensington",
          "pricePerWeek": 950,
          "maxOccupancy": 1,
          "bathType": "private",
          "mealsIncluded": true
        }
      ],
      "companionsAllowed": true,
      "childrenAllowed": true,
      "minStay": "1 week",
      "shuttleToTraining": true,
      "notes": "Residences in Chelsea and South Kensington, close to major museums."
    },
    "availability": {
      "status": "limited",
      "nextIntake": "2026-04-01",
      "spotsLeft": 6,
      "responseTime": "24 hours",
      "privateLessons": true,
      "yearRound": true
    },
    "juniorInfo": {
      "minAge": 14,
      "maxAge": 17,
      "supervision": "Experienced pastoral care team with Ofsted-registered supervision",
      "guardianStay": true,
      "schooling": "Access to local independent school for academic studies",
      "medicalStaff": true,
      "safeguarding": "Full Ofsted compliance, enhanced DBS checks for all staff",
      "airportPickup": true,
      "mealPlan": "Full board with British and international menus",
      "curfew": "21:00 weekdays, 22:00 weekends",
      "roommatePairing": "Carefully matched by age, interests, and nationality",
      "languageSupport": [
        "English",
        "French",
        "Spanish",
        "Arabic"
      ],
      "emergencyProtocol": "24/7 emergency line, Chelsea & Westminster Hospital nearby"
    }
  },
  {
    "id": "prague-art-studio",
    "name": "Prague Art Studio",
    "country": "Czech Republic",
    "countryFlag": "🇨🇿",
    "city": "Prague",
    "lat": 50.0755,
    "lng": 14.4378,
    "website": "https://www.pragueartsstudio.cz",
    "contact": "+420 224 301 122",
    "contactEmail": "info@pragueartsstudio.cz",
    "description": "Set against the backdrop of Prague's stunning Gothic and Baroque architecture, this studio offers an inspiring environment for classical and contemporary art training at exceptional value.",
    "ageGroups": [
      "Adults",
      "Teens (14-17)",
      "Seniors (55+)"
    ],
    "level": "Beginner to Advanced",
    "individualLessons": true,
    "boarding": true,
    "beach": false,
    "priceRange": {
      "from": 500,
      "to": 1400,
      "unit": "week",
      "display": "€500–€1,400/week"
    },
    "socialMedia": {
      "instagram": "@pragueartsstudio",
      "facebook": "pragueartsstudio",
      "twitter": "@PragueArtStudio"
    },
    "climate": "prague",
    "facilities": "Painting studios, Illustration lab, Animation suite, Photography studio, Outdoor sketching pavilion, Student gallery",
    "courtSurfaces": [
      "Oil Painting",
      "Illustration",
      "Animation",
      "Photography"
    ],
    "programs": [
      {
        "name": "Classical Oil Painting",
        "price": "€800/week",
        "desc": "Foundational oil painting course covering color theory, composition, and technique."
      },
      {
        "name": "Illustration & Graphic Arts",
        "price": "€900/week",
        "desc": "Develop a personal illustration style through editorial, book, and concept art projects."
      },
      {
        "name": "Stop-Motion Animation",
        "price": "€1000/week",
        "desc": "Create animated short films using puppets, clay, and mixed media techniques."
      }
    ],
    "coaches": [
      {
        "name": "Jakub Novotny",
        "credential": "MFA, Academy of Fine Arts Prague",
        "background": "Illustrator and painter whose graphic novels have won international awards.",
        "atpWta": false,
        "bestRanking": null,
        "rankingNote": null,
        "languages": [
          "Czech",
          "English",
          "Slovak"
        ],
        "instagram": null
      },
      {
        "name": "Petra Kralova",
        "credential": "MA, FAMU Prague",
        "background": "Photographer and animator blending traditional techniques with digital storytelling.",
        "atpWta": false,
        "bestRanking": null,
        "rankingNote": null,
        "languages": [
          "Czech",
          "English",
          "German"
        ],
        "instagram": null
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800",
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800",
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800"
    ],
    "upcomingCamps": [
      {
        "name": "Prague Spring Art Festival",
        "startDate": "2026-04-20",
        "endDate": "2026-05-04",
        "price": "€1800",
        "level": "All Levels"
      },
      {
        "name": "Summer Illustration Boot Camp",
        "startDate": "2026-07-20",
        "endDate": "2026-08-03",
        "price": "€2000",
        "level": "Intermediate"
      },
      {
        "name": "Winter Animation Workshop",
        "startDate": "2027-02-10",
        "endDate": "2027-02-24",
        "price": "€1600",
        "level": "Beginner"
      }
    ],
    "accommodation": {
      "types": [
        {
          "type": "shared",
          "label": "Shared Apartment in Vinohrady",
          "pricePerWeek": 300,
          "maxOccupancy": 2,
          "bathType": "shared",
          "mealsIncluded": false
        },
        {
          "type": "private",
          "label": "Private Room in Old Town",
          "pricePerWeek": 500,
          "maxOccupancy": 1,
          "bathType": "private",
          "mealsIncluded": true
        }
      ],
      "companionsAllowed": true,
      "childrenAllowed": true,
      "minStay": "1 week",
      "shuttleToTraining": true,
      "notes": "Accommodation in charming Vinohrady and Old Town neighborhoods."
    },
    "availability": {
      "status": "open",
      "nextIntake": "2026-04-01",
      "spotsLeft": 20,
      "responseTime": "48 hours",
      "privateLessons": true,
      "yearRound": true
    },
    "juniorInfo": {
      "minAge": 14,
      "maxAge": 17,
      "supervision": "Czech and English-speaking youth supervisors on site",
      "guardianStay": true,
      "schooling": "Partnership with Prague British International School",
      "medicalStaff": true,
      "safeguarding": "Czech child protection standards fully implemented",
      "airportPickup": true,
      "mealPlan": "Full board with Czech and international cuisine",
      "curfew": "21:00 weekdays, 22:00 weekends",
      "roommatePairing": "Age-appropriate pairing with cultural mixing",
      "languageSupport": [
        "Czech",
        "English",
        "German",
        "Russian"
      ],
      "emergencyProtocol": "24/7 emergency contact, Motol University Hospital 15 minutes away"
    }
  },
  {
    "id": "lisbon-art-atelier",
    "name": "Lisbon Art Atelier",
    "country": "Portugal",
    "countryFlag": "🇵🇹",
    "city": "Lisbon",
    "lat": 38.7223,
    "lng": -9.1393,
    "website": "https://www.lisbonartelier.pt",
    "contact": "+351 21 346 7890",
    "contactEmail": "info@lisbonartelier.pt",
    "description": "Bathed in the golden light of the Atlantic coast, the Lisbon Art Atelier combines Portuguese azulejo traditions with modern fine art practice. The vibrant cultural scene and affordable living make it ideal for artists.",
    "ageGroups": [
      "Adults",
      "Teens (14-17)",
      "Seniors (55+)"
    ],
    "level": "Beginner to Advanced",
    "individualLessons": true,
    "boarding": true,
    "beach": {
      "distance": 5,
      "description": "Cascais beaches, accessible by train"
    },
    "priceRange": {
      "from": 500,
      "to": 1500,
      "unit": "week",
      "display": "€500–€1,500/week"
    },
    "socialMedia": {
      "instagram": "@lisbonartelier",
      "facebook": "lisbonartelier",
      "twitter": "@LisbonArtelier"
    },
    "climate": "lisbon",
    "facilities": "Tile painting studio, Painting ateliers, Ceramics kiln, Outdoor terrace, Exhibition hall, Digital lab",
    "courtSurfaces": [
      "Oil Painting",
      "Ceramics",
      "Tile Art",
      "Drawing"
    ],
    "programs": [
      {
        "name": "Azulejo Tile Painting",
        "price": "€800/week",
        "desc": "Learn the traditional Portuguese art of hand-painted ceramic tiles from master craftspeople."
      },
      {
        "name": "Contemporary Painting",
        "price": "€900/week",
        "desc": "Develop your painting practice exploring color, abstraction, and narrative."
      },
      {
        "name": "Ceramics & Pottery",
        "price": "€700/week",
        "desc": "Wheel-throwing, hand-building, and glazing techniques for functional and sculptural ceramics."
      }
    ],
    "coaches": [
      {
        "name": "Joao Silva",
        "credential": "MFA, Faculty of Fine Arts, Lisbon",
        "background": "Azulejo master and contemporary painter bridging traditional Portuguese craft with modern art.",
        "atpWta": false,
        "bestRanking": null,
        "rankingNote": null,
        "languages": [
          "Portuguese",
          "English",
          "Spanish"
        ],
        "instagram": null
      },
      {
        "name": "Ana Costa",
        "credential": "MA, IADE Lisbon",
        "background": "Ceramicist and sculptor exploring organic forms and sustainable art practices.",
        "atpWta": false,
        "bestRanking": null,
        "rankingNote": null,
        "languages": [
          "Portuguese",
          "English",
          "French"
        ],
        "instagram": null
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800",
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800",
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800"
    ],
    "upcomingCamps": [
      {
        "name": "Lisbon Light Painting Retreat",
        "startDate": "2026-05-01",
        "endDate": "2026-05-15",
        "price": "€1800",
        "level": "All Levels"
      },
      {
        "name": "Summer Azulejo Workshop",
        "startDate": "2026-07-10",
        "endDate": "2026-07-24",
        "price": "€1600",
        "level": "Beginner"
      },
      {
        "name": "Autumn Ceramics Residency",
        "startDate": "2026-10-15",
        "endDate": "2026-10-29",
        "price": "€1400",
        "level": "Intermediate"
      }
    ],
    "accommodation": {
      "types": [
        {
          "type": "shared",
          "label": "Shared Flat in Alfama",
          "pricePerWeek": 320,
          "maxOccupancy": 2,
          "bathType": "shared",
          "mealsIncluded": false
        },
        {
          "type": "private",
          "label": "Private Studio in Bairro Alto",
          "pricePerWeek": 520,
          "maxOccupancy": 1,
          "bathType": "private",
          "mealsIncluded": true
        }
      ],
      "companionsAllowed": true,
      "childrenAllowed": true,
      "minStay": "1 week",
      "shuttleToTraining": true,
      "notes": "Accommodation in historic Alfama and trendy Bairro Alto neighborhoods."
    },
    "availability": {
      "status": "open",
      "nextIntake": "2026-05-01",
      "spotsLeft": 16,
      "responseTime": "48 hours",
      "privateLessons": true,
      "yearRound": true
    },
    "juniorInfo": {
      "minAge": 14,
      "maxAge": 17,
      "supervision": "Bilingual supervisors with youth arts education experience",
      "guardianStay": true,
      "schooling": "Links with St. Julian's School Lisbon",
      "medicalStaff": true,
      "safeguarding": "Portuguese child welfare regulations fully met",
      "airportPickup": true,
      "mealPlan": "Full board featuring Portuguese cuisine",
      "curfew": "21:00 weekdays, 22:30 weekends",
      "roommatePairing": "Cultural diversity prioritized in pairings",
      "languageSupport": [
        "Portuguese",
        "English",
        "Spanish",
        "French"
      ],
      "emergencyProtocol": "24/7 emergency line, Hospital de Santa Maria 15 minutes away"
    }
  },
  {
    "id": "copenhagen-design-art-school",
    "name": "Copenhagen Design & Art School",
    "country": "Denmark",
    "countryFlag": "🇩🇰",
    "city": "Copenhagen",
    "lat": 55.6761,
    "lng": 12.5683,
    "website": "https://www.copenhagendesignart.dk",
    "contact": "+45 33 74 4600",
    "contactEmail": "info@copenhagendesignart.dk",
    "description": "Rooted in Scandinavian design philosophy, this school merges fine art with functional design thinking. The emphasis on minimalism, sustainability, and craftsmanship reflects Denmark's design heritage.",
    "ageGroups": [
      "Adults",
      "Teens (14-17)",
      "Seniors (55+)"
    ],
    "level": "Beginner to Advanced",
    "individualLessons": true,
    "boarding": true,
    "beach": false,
    "priceRange": {
      "from": 900,
      "to": 2300,
      "unit": "week",
      "display": "€900–€2,300/week"
    },
    "socialMedia": {
      "instagram": "@cphdesignart",
      "facebook": "copenhagendesignartschool",
      "twitter": "@CPHDesignArt"
    },
    "climate": "copenhagen",
    "facilities": "Design studios, Woodworking shop, Textile lab, Digital fabrication lab, Photography studio, Exhibition space",
    "courtSurfaces": [
      "Drawing",
      "Design",
      "Textile Art",
      "Photography"
    ],
    "programs": [
      {
        "name": "Scandinavian Design Drawing",
        "price": "€1200/week",
        "desc": "Learn design thinking through drawing, form studies, and material exploration."
      },
      {
        "name": "Textile Art & Sustainability",
        "price": "€1100/week",
        "desc": "Create fiber art and woven works using sustainable materials and traditional techniques."
      },
      {
        "name": "Art Photography & Visual Storytelling",
        "price": "€1300/week",
        "desc": "Documentary and fine art photography with emphasis on narrative and Nordic light."
      }
    ],
    "coaches": [
      {
        "name": "Lars Andersen",
        "credential": "MFA, Royal Danish Academy of Fine Arts",
        "background": "Designer and artist working at the intersection of Scandinavian minimalism and contemporary art.",
        "atpWta": false,
        "bestRanking": null,
        "rankingNote": null,
        "languages": [
          "Danish",
          "English",
          "Swedish"
        ],
        "instagram": null
      },
      {
        "name": "Maja Nielsen",
        "credential": "MA, Design School Kolding",
        "background": "Textile artist and sustainability advocate creating works from recycled and natural materials.",
        "atpWta": false,
        "bestRanking": null,
        "rankingNote": null,
        "languages": [
          "Danish",
          "English",
          "Norwegian"
        ],
        "instagram": null
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800",
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800",
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800"
    ],
    "upcomingCamps": [
      {
        "name": "Nordic Design Spring",
        "startDate": "2026-04-01",
        "endDate": "2026-04-15",
        "price": "€2800",
        "level": "All Levels"
      },
      {
        "name": "Midsummer Art Festival",
        "startDate": "2026-06-20",
        "endDate": "2026-07-04",
        "price": "€3000",
        "level": "Intermediate"
      },
      {
        "name": "Winter Hygge Art Retreat",
        "startDate": "2027-01-15",
        "endDate": "2027-01-29",
        "price": "€2600",
        "level": "Beginner"
      }
    ],
    "accommodation": {
      "types": [
        {
          "type": "shared",
          "label": "Shared Apartment in Norrebro",
          "pricePerWeek": 520,
          "maxOccupancy": 2,
          "bathType": "shared",
          "mealsIncluded": false
        },
        {
          "type": "private",
          "label": "Private Room in Christianshavn",
          "pricePerWeek": 850,
          "maxOccupancy": 1,
          "bathType": "private",
          "mealsIncluded": true
        }
      ],
      "companionsAllowed": true,
      "childrenAllowed": true,
      "minStay": "1 week",
      "shuttleToTraining": true,
      "notes": "Accommodation in creative Norrebro and waterfront Christianshavn districts."
    },
    "availability": {
      "status": "limited",
      "nextIntake": "2026-04-01",
      "spotsLeft": 8,
      "responseTime": "24 hours",
      "privateLessons": true,
      "yearRound": true
    },
    "juniorInfo": {
      "minAge": 14,
      "maxAge": 17,
      "supervision": "Danish and English-speaking youth program leaders",
      "guardianStay": true,
      "schooling": "Collaboration with Copenhagen International School",
      "medicalStaff": true,
      "safeguarding": "Full compliance with Danish child protection legislation",
      "airportPickup": true,
      "mealPlan": "Full board with organic Scandinavian cuisine",
      "curfew": "21:00 weekdays, 22:00 weekends",
      "roommatePairing": "Interest-matched pairing with creative mentoring",
      "languageSupport": [
        "Danish",
        "English",
        "Swedish",
        "German"
      ],
      "emergencyProtocol": "24/7 emergency support, Rigshospitalet 10 minutes away"
    }
  },
  {
    "id": "athens-classical-art-school",
    "name": "Athens Classical Art School",
    "country": "Greece",
    "countryFlag": "🇬🇷",
    "city": "Athens",
    "lat": 37.9838,
    "lng": 23.7275,
    "website": "https://www.athensclassicalart.gr",
    "contact": "+30 210 325 8900",
    "contactEmail": "info@athensclassicalart.gr",
    "description": "At the cradle of Western art, the Athens Classical Art School offers training inspired by ancient Greek aesthetics combined with modern Mediterranean artistic practice. The Acropolis serves as a daily source of inspiration.",
    "ageGroups": [
      "Adults",
      "Teens (14-17)",
      "Seniors (55+)"
    ],
    "level": "Beginner to Advanced",
    "individualLessons": true,
    "boarding": true,
    "beach": {
      "distance": 8,
      "description": "Athens Riviera beaches via metro"
    },
    "priceRange": {
      "from": 500,
      "to": 1400,
      "unit": "week",
      "display": "€500–€1,400/week"
    },
    "socialMedia": {
      "instagram": "@athensclassicalart",
      "facebook": "athensclassicalartschool",
      "twitter": "@AthensClassArt"
    },
    "climate": "athens",
    "facilities": "Sculpture studio, Mosaic workshop, Painting ateliers, Plein air rooftop, Ceramics kiln, Ancient art library",
    "courtSurfaces": [
      "Sculpture",
      "Mosaic Art",
      "Oil Painting",
      "Drawing"
    ],
    "programs": [
      {
        "name": "Classical Sculpture",
        "price": "€1000/week",
        "desc": "Carve marble and model clay following ancient Greek proportional systems and techniques."
      },
      {
        "name": "Byzantine Mosaic Art",
        "price": "€800/week",
        "desc": "Create stunning mosaics using traditional tesserae and contemporary designs."
      },
      {
        "name": "Mediterranean Landscape Painting",
        "price": "€900/week",
        "desc": "Capture the dramatic light and color of the Greek landscape in oil and watercolor."
      }
    ],
    "coaches": [
      {
        "name": "Dimitris Papadopoulos",
        "credential": "MFA, Athens School of Fine Arts",
        "background": "Sculptor specializing in marble and bronze with works in major Greek public collections.",
        "atpWta": false,
        "bestRanking": null,
        "rankingNote": null,
        "languages": [
          "Greek",
          "English",
          "French"
        ],
        "instagram": null
      },
      {
        "name": "Eleni Karamanlis",
        "credential": "PhD, Art History, University of Athens",
        "background": "Mosaic artist and painter preserving ancient Greek artistic techniques for contemporary expression.",
        "atpWta": false,
        "bestRanking": null,
        "rankingNote": null,
        "languages": [
          "Greek",
          "English",
          "Italian"
        ],
        "instagram": null
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800",
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800",
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800"
    ],
    "upcomingCamps": [
      {
        "name": "Acropolis Art Retreat",
        "startDate": "2026-04-15",
        "endDate": "2026-04-29",
        "price": "€1800",
        "level": "All Levels"
      },
      {
        "name": "Summer Sculpture Symposium",
        "startDate": "2026-07-01",
        "endDate": "2026-07-15",
        "price": "€2000",
        "level": "Intermediate"
      },
      {
        "name": "Autumn Mosaic Workshop",
        "startDate": "2026-10-01",
        "endDate": "2026-10-15",
        "price": "€1600",
        "level": "Beginner"
      }
    ],
    "accommodation": {
      "types": [
        {
          "type": "shared",
          "label": "Shared Apartment in Plaka",
          "pricePerWeek": 300,
          "maxOccupancy": 2,
          "bathType": "shared",
          "mealsIncluded": false
        },
        {
          "type": "private",
          "label": "Private Room near Acropolis",
          "pricePerWeek": 500,
          "maxOccupancy": 1,
          "bathType": "private",
          "mealsIncluded": true
        }
      ],
      "companionsAllowed": true,
      "childrenAllowed": true,
      "minStay": "1 week",
      "shuttleToTraining": false,
      "notes": "Accommodation in the historic Plaka neighborhood beneath the Acropolis."
    },
    "availability": {
      "status": "open",
      "nextIntake": "2026-04-01",
      "spotsLeft": 20,
      "responseTime": "48 hours",
      "privateLessons": true,
      "yearRound": true
    },
    "juniorInfo": {
      "minAge": 14,
      "maxAge": 17,
      "supervision": "Greek and English-speaking supervisors with youth experience",
      "guardianStay": true,
      "schooling": "Partnership with Athens International School",
      "medicalStaff": true,
      "safeguarding": "Greek child protection standards fully implemented",
      "airportPickup": true,
      "mealPlan": "Full board with Mediterranean cuisine, dietary needs met",
      "curfew": "21:00 weekdays, 22:30 weekends",
      "roommatePairing": "Cultural mixing prioritized in room assignments",
      "languageSupport": [
        "Greek",
        "English",
        "French",
        "German"
      ],
      "emergencyProtocol": "24/7 emergency line, Evangelismos Hospital 10 minutes away"
    }
  },
  {
    "id": "stockholm-art-institute",
    "name": "Stockholm Art Institute",
    "country": "Sweden",
    "countryFlag": "🇸🇪",
    "city": "Stockholm",
    "lat": 59.3293,
    "lng": 18.0686,
    "website": "https://www.stockholmartinstitute.se",
    "contact": "+46 8 519 264 00",
    "contactEmail": "info@stockholmartinstitute.se",
    "description": "Set among Stockholm's islands, this institute combines Nordic artistic traditions with progressive contemporary methods. The dramatic seasonal light changes provide unique inspiration for artists.",
    "ageGroups": [
      "Adults",
      "Teens (14-17)",
      "Seniors (55+)"
    ],
    "level": "Beginner to Advanced",
    "individualLessons": true,
    "boarding": true,
    "beach": false,
    "priceRange": {
      "from": 900,
      "to": 2200,
      "unit": "week",
      "display": "€900–€2,200/week"
    },
    "socialMedia": {
      "instagram": "@stockholmart",
      "facebook": "stockholmartinstitute",
      "twitter": "@SthlmArtInst"
    },
    "climate": "stockholm",
    "facilities": "Glass-walled studios, Printmaking press, Textile workshop, Photography darkroom, Waterfront plein air deck, Gallery",
    "courtSurfaces": [
      "Oil Painting",
      "Printmaking",
      "Textile Art",
      "Drawing"
    ],
    "programs": [
      {
        "name": "Nordic Light Painting",
        "price": "€1200/week",
        "desc": "Explore the unique qualities of Scandinavian light through landscape and still life painting."
      },
      {
        "name": "Textile & Fiber Art",
        "price": "€1100/week",
        "desc": "Weaving, felting, and textile sculpture using natural Nordic materials."
      },
      {
        "name": "Printmaking Techniques",
        "price": "€1000/week",
        "desc": "Woodcut, linocut, and screen printing with emphasis on Nordic graphic traditions."
      }
    ],
    "coaches": [
      {
        "name": "Erik Lindqvist",
        "credential": "MFA, Royal Institute of Art Stockholm",
        "background": "Landscape painter known for capturing the unique quality of Nordic light across seasons.",
        "atpWta": false,
        "bestRanking": null,
        "rankingNote": null,
        "languages": [
          "Swedish",
          "English",
          "Finnish"
        ],
        "instagram": null
      },
      {
        "name": "Astrid Bergman",
        "credential": "MA, Konstfack University",
        "background": "Textile artist creating large-scale woven installations exploring nature and sustainability.",
        "atpWta": false,
        "bestRanking": null,
        "rankingNote": null,
        "languages": [
          "Swedish",
          "English",
          "Norwegian"
        ],
        "instagram": null
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800",
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800",
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800"
    ],
    "upcomingCamps": [
      {
        "name": "Spring Light Painting",
        "startDate": "2026-03-20",
        "endDate": "2026-04-03",
        "price": "€2600",
        "level": "All Levels"
      },
      {
        "name": "Midsummer Art Intensive",
        "startDate": "2026-06-15",
        "endDate": "2026-06-29",
        "price": "€2800",
        "level": "Intermediate"
      },
      {
        "name": "Dark Season Drawing",
        "startDate": "2026-11-15",
        "endDate": "2026-11-29",
        "price": "€2400",
        "level": "Advanced"
      }
    ],
    "accommodation": {
      "types": [
        {
          "type": "shared",
          "label": "Shared Room in Sodermalm",
          "pricePerWeek": 500,
          "maxOccupancy": 2,
          "bathType": "shared",
          "mealsIncluded": false
        },
        {
          "type": "private",
          "label": "Private Studio on Kungsholmen",
          "pricePerWeek": 820,
          "maxOccupancy": 1,
          "bathType": "private",
          "mealsIncluded": true
        }
      ],
      "companionsAllowed": true,
      "childrenAllowed": true,
      "minStay": "1 week",
      "shuttleToTraining": true,
      "notes": "Accommodation on Stockholm's islands with water views."
    },
    "availability": {
      "status": "open",
      "nextIntake": "2026-03-01",
      "spotsLeft": 12,
      "responseTime": "48 hours",
      "privateLessons": true,
      "yearRound": true
    },
    "juniorInfo": {
      "minAge": 14,
      "maxAge": 17,
      "supervision": "Bilingual Swedish/English youth coordinators",
      "guardianStay": true,
      "schooling": "Partnership with Stockholm International School",
      "medicalStaff": true,
      "safeguarding": "Swedish child welfare standards fully met",
      "airportPickup": true,
      "mealPlan": "Full board with Scandinavian cuisine, organic options",
      "curfew": "21:00 weekdays, 22:00 weekends",
      "roommatePairing": "Interest and age-based matching",
      "languageSupport": [
        "Swedish",
        "English",
        "Finnish",
        "Norwegian"
      ],
      "emergencyProtocol": "24/7 emergency support, Karolinska Hospital 15 minutes away"
    }
  },
  {
    "id": "dublin-art-collective",
    "name": "Dublin Art Collective",
    "country": "Ireland",
    "countryFlag": "🇮🇪",
    "city": "Dublin",
    "lat": 53.3498,
    "lng": -6.2603,
    "website": "https://www.dublinartcollective.ie",
    "contact": "+353 1 661 5933",
    "contactEmail": "hello@dublinartcollective.ie",
    "description": "Located in Dublin's creative quarter, this collective fosters collaborative art-making in a supportive community. The rich literary and visual arts heritage of Ireland infuses every aspect of the program.",
    "ageGroups": [
      "Adults",
      "Teens (14-17)",
      "Seniors (55+)"
    ],
    "level": "Beginner to Advanced",
    "individualLessons": true,
    "boarding": true,
    "beach": {
      "distance": 12,
      "description": "Sandymount Strand, 12 km by DART train"
    },
    "priceRange": {
      "from": 600,
      "to": 1600,
      "unit": "week",
      "display": "€600–€1,600/week"
    },
    "socialMedia": {
      "instagram": "@dublinartcoll",
      "facebook": "dublinartcollective",
      "twitter": "@DublinArtColl"
    },
    "climate": "dublin",
    "facilities": "Open-plan studios, Letterpress workshop, Bookbinding room, Screen printing lab, Community gallery, Garden studio",
    "courtSurfaces": [
      "Drawing",
      "Printmaking",
      "Book Arts",
      "Mixed Media"
    ],
    "programs": [
      {
        "name": "Printmaking & Book Arts",
        "price": "€900/week",
        "desc": "Create limited edition prints and artist books using letterpress, etching, and bookbinding."
      },
      {
        "name": "Drawing & Observational Studies",
        "price": "€800/week",
        "desc": "Develop core drawing skills through life drawing, urban sketching, and landscape studies."
      },
      {
        "name": "Mixed Media Exploration",
        "price": "€1000/week",
        "desc": "Combine painting, collage, found objects, and text in experimental mixed media works."
      }
    ],
    "coaches": [
      {
        "name": "Ciaran Murphy",
        "credential": "MFA, National College of Art and Design",
        "background": "Printmaker and book artist whose handmade editions are held in major library collections.",
        "atpWta": false,
        "bestRanking": null,
        "rankingNote": null,
        "languages": [
          "English",
          "Irish"
        ],
        "instagram": null
      },
      {
        "name": "Aoife Brennan",
        "credential": "MA, Crawford College of Art",
        "background": "Mixed media artist and community arts practitioner with 15 years of teaching experience.",
        "atpWta": false,
        "bestRanking": null,
        "rankingNote": null,
        "languages": [
          "English",
          "Irish",
          "French"
        ],
        "instagram": null
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800",
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800",
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800"
    ],
    "upcomingCamps": [
      {
        "name": "Dublin Spring Drawing",
        "startDate": "2026-04-10",
        "endDate": "2026-04-24",
        "price": "€2000",
        "level": "All Levels"
      },
      {
        "name": "Summer Printmaking Festival",
        "startDate": "2026-07-15",
        "endDate": "2026-07-29",
        "price": "€2200",
        "level": "Intermediate"
      },
      {
        "name": "Autumn Book Arts Residency",
        "startDate": "2026-10-15",
        "endDate": "2026-10-29",
        "price": "€1800",
        "level": "Advanced"
      }
    ],
    "accommodation": {
      "types": [
        {
          "type": "shared",
          "label": "Shared House in Temple Bar",
          "pricePerWeek": 420,
          "maxOccupancy": 2,
          "bathType": "shared",
          "mealsIncluded": false
        },
        {
          "type": "private",
          "label": "Private Room in Georgian Quarter",
          "pricePerWeek": 680,
          "maxOccupancy": 1,
          "bathType": "private",
          "mealsIncluded": true
        }
      ],
      "companionsAllowed": true,
      "childrenAllowed": true,
      "minStay": "1 week",
      "shuttleToTraining": false,
      "notes": "Accommodation in central Dublin near galleries and cultural venues."
    },
    "availability": {
      "status": "open",
      "nextIntake": "2026-04-01",
      "spotsLeft": 14,
      "responseTime": "48 hours",
      "privateLessons": true,
      "yearRound": true
    },
    "juniorInfo": {
      "minAge": 14,
      "maxAge": 17,
      "supervision": "Youth mentors with Garda-vetted backgrounds",
      "guardianStay": true,
      "schooling": "Links with local secondary schools for academic support",
      "medicalStaff": true,
      "safeguarding": "Full Garda vetting, Tusla child safeguarding compliance",
      "airportPickup": true,
      "mealPlan": "Full board with Irish and international cuisine",
      "curfew": "21:00 weekdays, 22:00 weekends",
      "roommatePairing": "Age-appropriate with shared interest matching",
      "languageSupport": [
        "English",
        "Irish",
        "French",
        "Spanish"
      ],
      "emergencyProtocol": "24/7 emergency contact, St James Hospital 10 minutes away"
    }
  },
  {
    "id": "krakow-art-academy",
    "name": "Krakow Academy of Fine Arts",
    "country": "Poland",
    "countryFlag": "🇵🇱",
    "city": "Krakow",
    "lat": 50.0647,
    "lng": 19.945,
    "website": "https://www.krakowartacademy.pl",
    "contact": "+48 12 422 2450",
    "contactEmail": "info@krakowartacademy.pl",
    "description": "In one of Europe's best-preserved medieval cities, the Krakow Academy offers outstanding classical training at remarkable value. Poland's rich artistic heritage provides endless inspiration for students.",
    "ageGroups": [
      "Adults",
      "Teens (14-17)",
      "Seniors (55+)"
    ],
    "level": "Beginner to Advanced",
    "individualLessons": true,
    "boarding": true,
    "beach": false,
    "priceRange": {
      "from": 400,
      "to": 1200,
      "unit": "week",
      "display": "€400–€1,200/week"
    },
    "socialMedia": {
      "instagram": "@krakowartacad",
      "facebook": "krakowartacademy",
      "twitter": "@KrakowArtAcad"
    },
    "climate": "krakow",
    "facilities": "Painting ateliers, Icon painting studio, Sculpture hall, Engraving workshop, Student gallery, Art library",
    "courtSurfaces": [
      "Oil Painting",
      "Icon Painting",
      "Sculpture",
      "Engraving"
    ],
    "programs": [
      {
        "name": "Classical Polish Painting",
        "price": "€700/week",
        "desc": "Study figurative and landscape painting in the tradition of Polish academic masters."
      },
      {
        "name": "Byzantine Icon Painting",
        "price": "€600/week",
        "desc": "Learn the sacred art of icon writing using traditional materials and techniques."
      },
      {
        "name": "Stone & Wood Sculpture",
        "price": "€800/week",
        "desc": "Carve and model in various materials with guidance from master sculptors."
      }
    ],
    "coaches": [
      {
        "name": "Tomasz Kowalski",
        "credential": "MFA, Jan Matejko Academy of Fine Arts",
        "background": "History painter and iconographer preserving Polish and Eastern European art traditions.",
        "atpWta": false,
        "bestRanking": null,
        "rankingNote": null,
        "languages": [
          "Polish",
          "English",
          "Ukrainian"
        ],
        "instagram": null
      },
      {
        "name": "Magdalena Wojcik",
        "credential": "MA, Academy of Fine Arts Krakow",
        "background": "Sculptor and engraver working in wood, stone, and metal with exhibition experience across Europe.",
        "atpWta": false,
        "bestRanking": null,
        "rankingNote": null,
        "languages": [
          "Polish",
          "English",
          "German"
        ],
        "instagram": null
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800",
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800",
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800"
    ],
    "upcomingCamps": [
      {
        "name": "Krakow Art Spring",
        "startDate": "2026-04-10",
        "endDate": "2026-04-24",
        "price": "€1400",
        "level": "All Levels"
      },
      {
        "name": "Summer Icon Painting Retreat",
        "startDate": "2026-07-01",
        "endDate": "2026-07-15",
        "price": "€1200",
        "level": "Beginner"
      },
      {
        "name": "Autumn Sculpture Symposium",
        "startDate": "2026-10-05",
        "endDate": "2026-10-19",
        "price": "€1600",
        "level": "Intermediate"
      }
    ],
    "accommodation": {
      "types": [
        {
          "type": "shared",
          "label": "Shared Apartment in Kazimierz",
          "pricePerWeek": 250,
          "maxOccupancy": 2,
          "bathType": "shared",
          "mealsIncluded": false
        },
        {
          "type": "private",
          "label": "Private Room in Old Town",
          "pricePerWeek": 400,
          "maxOccupancy": 1,
          "bathType": "private",
          "mealsIncluded": true
        }
      ],
      "companionsAllowed": true,
      "childrenAllowed": true,
      "minStay": "1 week",
      "shuttleToTraining": false,
      "notes": "Accommodation in historic Kazimierz and Old Town districts."
    },
    "availability": {
      "status": "open",
      "nextIntake": "2026-04-01",
      "spotsLeft": 22,
      "responseTime": "48 hours",
      "privateLessons": true,
      "yearRound": true
    },
    "juniorInfo": {
      "minAge": 14,
      "maxAge": 17,
      "supervision": "Polish and English-speaking youth supervisors",
      "guardianStay": true,
      "schooling": "Partnership with Krakow International School",
      "medicalStaff": true,
      "safeguarding": "Full compliance with Polish child protection regulations",
      "airportPickup": true,
      "mealPlan": "Full board with Polish and European cuisine",
      "curfew": "21:00 weekdays, 22:00 weekends",
      "roommatePairing": "Age and language-matched room assignments",
      "languageSupport": [
        "Polish",
        "English",
        "Ukrainian",
        "German"
      ],
      "emergencyProtocol": "24/7 emergency line, University Hospital 10 minutes away"
    }
  },
  {
    "id": "helsinki-art-lab",
    "name": "Helsinki Art Lab",
    "country": "Finland",
    "countryFlag": "🇫🇮",
    "city": "Helsinki",
    "lat": 60.1699,
    "lng": 24.9384,
    "website": "https://www.helsinkiartlab.fi",
    "contact": "+358 9 310 36200",
    "contactEmail": "info@helsinkiartlab.fi",
    "description": "At the crossroads of Nordic and Eastern European cultures, the Helsinki Art Lab champions experimental approaches and new media. Finland's design-forward culture and dramatic landscapes fuel artistic innovation.",
    "ageGroups": [
      "Adults",
      "Teens (14-17)",
      "Seniors (55+)"
    ],
    "level": "Beginner to Advanced",
    "individualLessons": true,
    "boarding": true,
    "beach": false,
    "priceRange": {
      "from": 800,
      "to": 2000,
      "unit": "week",
      "display": "€800–€2,000/week"
    },
    "socialMedia": {
      "instagram": "@helsinkiartlab",
      "facebook": "helsinkiartlab",
      "twitter": "@HelsinkiArtLab"
    },
    "climate": "helsinki",
    "facilities": "New media lab, Glass blowing studio, Painting studios, 3D printing facility, Sound art room, Sauna gallery",
    "courtSurfaces": [
      "Digital Art",
      "Glass Art",
      "Drawing",
      "New Media"
    ],
    "programs": [
      {
        "name": "New Media & Interactive Art",
        "price": "€1200/week",
        "desc": "Create sensor-based installations, generative art, and interactive digital experiences."
      },
      {
        "name": "Glass Art & Design",
        "price": "€1100/week",
        "desc": "Blown and kiln-formed glass techniques for sculptural and functional art objects."
      },
      {
        "name": "Experimental Drawing",
        "price": "€900/week",
        "desc": "Push the boundaries of drawing through unconventional materials, scale, and process."
      }
    ],
    "coaches": [
      {
        "name": "Mikko Virtanen",
        "credential": "MFA, University of the Arts Helsinki",
        "background": "New media artist creating interactive installations that blend technology and nature.",
        "atpWta": false,
        "bestRanking": null,
        "rankingNote": null,
        "languages": [
          "Finnish",
          "English",
          "Swedish"
        ],
        "instagram": null
      },
      {
        "name": "Sanna Lehto",
        "credential": "MA, Aalto University",
        "background": "Glass artist and designer whose work has been featured at Milan Design Week and Helsinki Design Museum.",
        "atpWta": false,
        "bestRanking": null,
        "rankingNote": null,
        "languages": [
          "Finnish",
          "English",
          "Estonian"
        ],
        "instagram": null
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800",
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800",
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800"
    ],
    "upcomingCamps": [
      {
        "name": "Nordic Light Art Lab",
        "startDate": "2026-03-15",
        "endDate": "2026-03-29",
        "price": "€2400",
        "level": "Intermediate"
      },
      {
        "name": "Midnight Sun Creative Sprint",
        "startDate": "2026-06-15",
        "endDate": "2026-06-29",
        "price": "€2600",
        "level": "All Levels"
      },
      {
        "name": "Dark Season New Media",
        "startDate": "2026-11-01",
        "endDate": "2026-11-15",
        "price": "€2200",
        "level": "Advanced"
      }
    ],
    "accommodation": {
      "types": [
        {
          "type": "shared",
          "label": "Shared Apartment in Kallio",
          "pricePerWeek": 460,
          "maxOccupancy": 2,
          "bathType": "shared",
          "mealsIncluded": false
        },
        {
          "type": "private",
          "label": "Private Studio in Design District",
          "pricePerWeek": 760,
          "maxOccupancy": 1,
          "bathType": "private",
          "mealsIncluded": true
        }
      ],
      "companionsAllowed": true,
      "childrenAllowed": true,
      "minStay": "1 week",
      "shuttleToTraining": true,
      "notes": "Accommodation in trendy Kallio and the Helsinki Design District."
    },
    "availability": {
      "status": "open",
      "nextIntake": "2026-03-01",
      "spotsLeft": 10,
      "responseTime": "24 hours",
      "privateLessons": true,
      "yearRound": true
    },
    "juniorInfo": {
      "minAge": 14,
      "maxAge": 17,
      "supervision": "Bilingual Finnish/English youth program staff",
      "guardianStay": true,
      "schooling": "Partnership with International School of Helsinki",
      "medicalStaff": true,
      "safeguarding": "Finnish child welfare standards fully implemented",
      "airportPickup": true,
      "mealPlan": "Full board with Nordic cuisine, dietary needs accommodated",
      "curfew": "21:00 weekdays, 22:00 weekends",
      "roommatePairing": "Interest-based matching with creative mentoring",
      "languageSupport": [
        "Finnish",
        "English",
        "Swedish",
        "Russian"
      ],
      "emergencyProtocol": "24/7 emergency support, HUS Helsinki Hospital 10 minutes away"
    }
  },
  {
    "id": "budapest-art-workshop",
    "name": "Budapest Art Workshop",
    "country": "Hungary",
    "countryFlag": "🇭🇺",
    "city": "Budapest",
    "lat": 47.4979,
    "lng": 19.0402,
    "website": "https://www.budapestartworkshop.hu",
    "contact": "+48 1 266 1100",
    "contactEmail": "info@budapestartworkshop.hu",
    "description": "Straddling the Danube in one of Europe's most photogenic capitals, this workshop offers exceptional art training at outstanding value. The thermal bath culture and Art Nouveau architecture provide unique creative inspiration.",
    "ageGroups": [
      "Adults",
      "Teens (14-17)",
      "Seniors (55+)"
    ],
    "level": "Beginner to Advanced",
    "individualLessons": true,
    "boarding": true,
    "beach": false,
    "priceRange": {
      "from": 450,
      "to": 1300,
      "unit": "week",
      "display": "€450–€1,300/week"
    },
    "socialMedia": {
      "instagram": "@budapestartws",
      "facebook": "budapestartworkshop",
      "twitter": "@BudapestArtWS"
    },
    "climate": "budapest",
    "facilities": "Painting studios, Porcelain workshop, Life drawing room, Photography lab, Ruin bar gallery, Outdoor sketching terrace",
    "courtSurfaces": [
      "Oil Painting",
      "Porcelain Art",
      "Drawing",
      "Photography"
    ],
    "programs": [
      {
        "name": "Hungarian Decorative Arts",
        "price": "€800/week",
        "desc": "Explore Zsolnay porcelain, Herend techniques, and Hungarian folk art motifs."
      },
      {
        "name": "Urban Sketching & Drawing",
        "price": "€700/week",
        "desc": "Capture Budapest's stunning architecture and street life through on-location drawing."
      },
      {
        "name": "Art Photography & Documentary",
        "price": "€900/week",
        "desc": "Documentary and street photography exploring Budapest's cultural layers."
      }
    ],
    "coaches": [
      {
        "name": "Gabor Nagy",
        "credential": "MFA, Hungarian University of Fine Arts",
        "background": "Painter and porcelain artist preserving Hungary's rich decorative arts traditions.",
        "atpWta": false,
        "bestRanking": null,
        "rankingNote": null,
        "languages": [
          "Hungarian",
          "English",
          "German"
        ],
        "instagram": null
      },
      {
        "name": "Reka Molnar",
        "credential": "MA, Moholy-Nagy University",
        "background": "Photographer and mixed media artist documenting Budapest's evolving urban landscape.",
        "atpWta": false,
        "bestRanking": null,
        "rankingNote": null,
        "languages": [
          "Hungarian",
          "English",
          "Romanian"
        ],
        "instagram": null
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800",
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800",
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800"
    ],
    "upcomingCamps": [
      {
        "name": "Danube Art Spring",
        "startDate": "2026-04-01",
        "endDate": "2026-04-15",
        "price": "€1600",
        "level": "All Levels"
      },
      {
        "name": "Summer Porcelain Intensive",
        "startDate": "2026-07-10",
        "endDate": "2026-07-24",
        "price": "€1400",
        "level": "Intermediate"
      },
      {
        "name": "Autumn Photo Documentary",
        "startDate": "2026-10-10",
        "endDate": "2026-10-24",
        "price": "€1200",
        "level": "Advanced"
      }
    ],
    "accommodation": {
      "types": [
        {
          "type": "shared",
          "label": "Shared Flat in Jewish Quarter",
          "pricePerWeek": 280,
          "maxOccupancy": 2,
          "bathType": "shared",
          "mealsIncluded": false
        },
        {
          "type": "private",
          "label": "Private Room on Andrassy Avenue",
          "pricePerWeek": 450,
          "maxOccupancy": 1,
          "bathType": "private",
          "mealsIncluded": true
        }
      ],
      "companionsAllowed": true,
      "childrenAllowed": true,
      "minStay": "1 week",
      "shuttleToTraining": true,
      "notes": "Accommodation in the vibrant Jewish Quarter and elegant Andrassy Avenue area."
    },
    "availability": {
      "status": "open",
      "nextIntake": "2026-04-01",
      "spotsLeft": 18,
      "responseTime": "48 hours",
      "privateLessons": true,
      "yearRound": true
    },
    "juniorInfo": {
      "minAge": 14,
      "maxAge": 17,
      "supervision": "Hungarian and English-speaking youth coordinators",
      "guardianStay": true,
      "schooling": "Links with Budapest International School",
      "medicalStaff": true,
      "safeguarding": "Hungarian child protection standards fully met",
      "airportPickup": true,
      "mealPlan": "Full board with Hungarian and international cuisine",
      "curfew": "21:00 weekdays, 22:00 weekends",
      "roommatePairing": "Age and interest-matched room assignments",
      "languageSupport": [
        "Hungarian",
        "English",
        "German",
        "Romanian"
      ],
      "emergencyProtocol": "24/7 emergency contact, Semmelweis Hospital 10 minutes away"
    }
  },
  {
    "id": "edinburgh-art-school",
    "name": "Edinburgh School of Art",
    "country": "United Kingdom",
    "countryFlag": "🇬🇧",
    "city": "Edinburgh",
    "lat": 55.9533,
    "lng": -3.1883,
    "website": "https://www.edinburghschoolofart.co.uk",
    "contact": "+44 131 221 6000",
    "contactEmail": "admissions@edinburghschoolofart.co.uk",
    "description": "Set in Scotland's historic capital with its dramatic castle and medieval Old Town, this school offers rigorous training in traditional and contemporary art. The annual Edinburgh Festival Fringe provides unmatched creative energy.",
    "ageGroups": [
      "Adults",
      "Teens (14-17)",
      "Seniors (55+)"
    ],
    "level": "Beginner to Advanced",
    "individualLessons": true,
    "boarding": true,
    "beach": false,
    "priceRange": {
      "from": 700,
      "to": 1900,
      "unit": "week",
      "display": "€700–€1,900/week"
    },
    "socialMedia": {
      "instagram": "@edinartschool",
      "facebook": "edinburghschoolofart",
      "twitter": "@EdinArtSchool"
    },
    "climate": "edinburgh",
    "facilities": "Painting studios, Tapestry workshop, Jewelry studio, Stained glass workshop, Gallery, Highland plein air excursions",
    "courtSurfaces": [
      "Oil Painting",
      "Textile Art",
      "Jewelry",
      "Stained Glass"
    ],
    "programs": [
      {
        "name": "Scottish Landscape Painting",
        "price": "€1000/week",
        "desc": "Paint the dramatic Highlands, coastlines, and cityscapes of Scotland in oil and acrylic."
      },
      {
        "name": "Art Jewelry & Metalwork",
        "price": "€1100/week",
        "desc": "Design and create jewelry using precious metals, stones, and mixed media techniques."
      },
      {
        "name": "Stained Glass & Light Art",
        "price": "€1200/week",
        "desc": "Traditional and contemporary stained glass design, cutting, and assembly."
      }
    ],
    "coaches": [
      {
        "name": "Alistair MacLeod",
        "credential": "MFA, Edinburgh College of Art",
        "background": "Landscape painter renowned for atmospheric Scottish Highland and coastal scenes.",
        "atpWta": false,
        "bestRanking": null,
        "rankingNote": null,
        "languages": [
          "English",
          "Scots Gaelic"
        ],
        "instagram": null
      },
      {
        "name": "Fiona Campbell",
        "credential": "MA, Glasgow School of Art",
        "background": "Jewelry designer and metalsmith whose pieces are held in the V&A and National Museum of Scotland.",
        "atpWta": false,
        "bestRanking": null,
        "rankingNote": null,
        "languages": [
          "English",
          "French"
        ],
        "instagram": null
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800",
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800",
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800"
    ],
    "upcomingCamps": [
      {
        "name": "Edinburgh Spring Landscape",
        "startDate": "2026-04-05",
        "endDate": "2026-04-19",
        "price": "€2200",
        "level": "All Levels"
      },
      {
        "name": "Festival Fringe Art Camp",
        "startDate": "2026-08-01",
        "endDate": "2026-08-15",
        "price": "€2600",
        "level": "Intermediate"
      },
      {
        "name": "Highland Winter Retreat",
        "startDate": "2027-01-10",
        "endDate": "2027-01-24",
        "price": "€2000",
        "level": "Advanced"
      }
    ],
    "accommodation": {
      "types": [
        {
          "type": "shared",
          "label": "Shared Flat in Stockbridge",
          "pricePerWeek": 440,
          "maxOccupancy": 2,
          "bathType": "shared",
          "mealsIncluded": false
        },
        {
          "type": "private",
          "label": "Private Room in New Town",
          "pricePerWeek": 720,
          "maxOccupancy": 1,
          "bathType": "private",
          "mealsIncluded": true
        }
      ],
      "companionsAllowed": true,
      "childrenAllowed": true,
      "minStay": "1 week",
      "shuttleToTraining": false,
      "notes": "Accommodation in charming Stockbridge and elegant New Town."
    },
    "availability": {
      "status": "open",
      "nextIntake": "2026-04-01",
      "spotsLeft": 14,
      "responseTime": "48 hours",
      "privateLessons": true,
      "yearRound": true
    },
    "juniorInfo": {
      "minAge": 14,
      "maxAge": 17,
      "supervision": "PVG-checked youth supervisors with arts backgrounds",
      "guardianStay": true,
      "schooling": "Access to local schools for academic continuity",
      "medicalStaff": true,
      "safeguarding": "Full PVG disclosure, Scottish child protection compliant",
      "airportPickup": true,
      "mealPlan": "Full board with Scottish and international menus",
      "curfew": "21:00 weekdays, 22:00 weekends",
      "roommatePairing": "Carefully matched by age and interests",
      "languageSupport": [
        "English",
        "French",
        "German",
        "Spanish"
      ],
      "emergencyProtocol": "24/7 emergency line, Royal Infirmary Edinburgh 10 minutes away"
    }
  },
  {
    "id": "oslo-contemporary-art-school",
    "name": "Oslo Contemporary Art School",
    "country": "Norway",
    "countryFlag": "🇳🇴",
    "city": "Oslo",
    "lat": 59.9139,
    "lng": 10.7522,
    "website": "https://www.oslocontemporaryart.no",
    "contact": "+47 22 86 22 00",
    "contactEmail": "info@oslocontemporaryart.no",
    "description": "Housed in a converted waterfront warehouse in Oslo's Bjorvika district, this school pushes boundaries in contemporary and environmental art. Norway's dramatic nature and progressive culture inspire innovative practice.",
    "ageGroups": [
      "Adults",
      "Teens (14-17)",
      "Seniors (55+)"
    ],
    "level": "Beginner to Advanced",
    "individualLessons": true,
    "boarding": true,
    "beach": false,
    "priceRange": {
      "from": 950,
      "to": 2400,
      "unit": "week",
      "display": "€950–€2,400/week"
    },
    "socialMedia": {
      "instagram": "@oslocontempart",
      "facebook": "oslocontemporaryartschool",
      "twitter": "@OsloContempArt"
    },
    "climate": "oslo",
    "facilities": "Multimedia studios, Environmental art workshop, Sound studio, Video editing lab, Fjord-side outdoor space, Gallery",
    "courtSurfaces": [
      "Installation Art",
      "Environmental Art",
      "Video Art",
      "Drawing"
    ],
    "programs": [
      {
        "name": "Environmental Art & Land Art",
        "price": "€1300/week",
        "desc": "Create site-specific works using natural materials in Norwegian landscapes."
      },
      {
        "name": "Video Art & Documentary",
        "price": "€1200/week",
        "desc": "Produce video art and short documentaries exploring identity, place, and culture."
      },
      {
        "name": "Contemporary Drawing",
        "price": "€1000/week",
        "desc": "Experimental approaches to drawing using unconventional materials and digital tools."
      }
    ],
    "coaches": [
      {
        "name": "Olav Henriksen",
        "credential": "MFA, Oslo National Academy of the Arts",
        "background": "Environmental artist creating large-scale works from natural and recycled materials in Norwegian landscapes.",
        "atpWta": false,
        "bestRanking": null,
        "rankingNote": null,
        "languages": [
          "Norwegian",
          "English",
          "Swedish"
        ],
        "instagram": null
      },
      {
        "name": "Ingrid Dahl",
        "credential": "MA, Kunsthogskolen i Oslo",
        "background": "Video artist and filmmaker whose documentaries on Nordic identity have screened at major festivals.",
        "atpWta": false,
        "bestRanking": null,
        "rankingNote": null,
        "languages": [
          "Norwegian",
          "English",
          "Danish"
        ],
        "instagram": null
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800",
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800",
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800"
    ],
    "upcomingCamps": [
      {
        "name": "Fjord Environmental Art",
        "startDate": "2026-05-01",
        "endDate": "2026-05-15",
        "price": "€2800",
        "level": "Intermediate"
      },
      {
        "name": "Midnight Sun Video Project",
        "startDate": "2026-06-20",
        "endDate": "2026-07-04",
        "price": "€3000",
        "level": "All Levels"
      },
      {
        "name": "Winter Light Installation",
        "startDate": "2027-01-20",
        "endDate": "2027-02-03",
        "price": "€2600",
        "level": "Advanced"
      }
    ],
    "accommodation": {
      "types": [
        {
          "type": "shared",
          "label": "Shared Apartment in Grunerlokka",
          "pricePerWeek": 550,
          "maxOccupancy": 2,
          "bathType": "shared",
          "mealsIncluded": false
        },
        {
          "type": "private",
          "label": "Private Studio in Bjorvika",
          "pricePerWeek": 880,
          "maxOccupancy": 1,
          "bathType": "private",
          "mealsIncluded": true
        }
      ],
      "companionsAllowed": true,
      "childrenAllowed": true,
      "minStay": "1 week",
      "shuttleToTraining": true,
      "notes": "Accommodation in vibrant Grunerlokka and waterfront Bjorvika."
    },
    "availability": {
      "status": "limited",
      "nextIntake": "2026-05-01",
      "spotsLeft": 8,
      "responseTime": "24 hours",
      "privateLessons": true,
      "yearRound": true
    },
    "juniorInfo": {
      "minAge": 14,
      "maxAge": 17,
      "supervision": "Norwegian and English-speaking youth program leaders",
      "guardianStay": true,
      "schooling": "Connection with Oslo International School",
      "medicalStaff": true,
      "safeguarding": "Full compliance with Norwegian child welfare regulations",
      "airportPickup": true,
      "mealPlan": "Full board with Norwegian and international cuisine",
      "curfew": "21:00 weekdays, 22:00 weekends",
      "roommatePairing": "Interest-matched with creative collaboration focus",
      "languageSupport": [
        "Norwegian",
        "English",
        "Swedish",
        "Danish"
      ],
      "emergencyProtocol": "24/7 emergency support, Oslo University Hospital 10 minutes away"
    }
  },
  {
    "id": "zurich-art-zentrum",
    "name": "Zurich Art Zentrum",
    "country": "Switzerland",
    "countryFlag": "🇨🇭",
    "city": "Zurich",
    "lat": 47.3769,
    "lng": 8.5417,
    "website": "https://www.zurichartzentrum.ch",
    "contact": "+41 44 446 3600",
    "contactEmail": "info@zurichartzentrum.ch",
    "description": "Nestled between the Alps and Lake Zurich, this center offers precision-focused art training reflecting Swiss excellence. The multilingual environment and world-class museums create an ideal artistic laboratory.",
    "ageGroups": [
      "Adults",
      "Teens (14-17)",
      "Seniors (55+)"
    ],
    "level": "Beginner to Advanced",
    "individualLessons": true,
    "boarding": true,
    "beach": false,
    "priceRange": {
      "from": 1000,
      "to": 2500,
      "unit": "week",
      "display": "€1000–€2,500/week"
    },
    "socialMedia": {
      "instagram": "@zurichartzent",
      "facebook": "zurichartzentrum",
      "twitter": "@ZurichArtZent"
    },
    "climate": "zurich",
    "facilities": "Precision drawing lab, Painting studios, Digital art suite, Alpine plein air excursions, Exhibition hall, Workshop space",
    "courtSurfaces": [
      "Oil Painting",
      "Drawing",
      "Digital Art",
      "Watercolor"
    ],
    "programs": [
      {
        "name": "Precision Drawing & Realism",
        "price": "€1400/week",
        "desc": "Develop hyper-realistic drawing skills with meticulous attention to detail and technique."
      },
      {
        "name": "Alpine Landscape Painting",
        "price": "€1300/week",
        "desc": "Paint the Swiss Alps and lakescapes en plein air and in the studio."
      },
      {
        "name": "Digital & Generative Art",
        "price": "€1500/week",
        "desc": "Create algorithmic art, data visualization, and interactive digital works."
      }
    ],
    "coaches": [
      {
        "name": "Adrian Keller",
        "credential": "MFA, Zurich University of the Arts",
        "background": "Hyperrealist painter whose meticulous works explore Swiss landscapes and urban environments.",
        "atpWta": false,
        "bestRanking": null,
        "rankingNote": null,
        "languages": [
          "German",
          "French",
          "English"
        ],
        "instagram": null
      },
      {
        "name": "Caroline Favre",
        "credential": "MA, ECAL Lausanne",
        "background": "Digital artist and designer bridging fine art and technology in interactive installations.",
        "atpWta": false,
        "bestRanking": null,
        "rankingNote": null,
        "languages": [
          "French",
          "German",
          "English"
        ],
        "instagram": null
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800",
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800",
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800"
    ],
    "upcomingCamps": [
      {
        "name": "Alpine Art Spring",
        "startDate": "2026-04-10",
        "endDate": "2026-04-24",
        "price": "€3200",
        "level": "Intermediate"
      },
      {
        "name": "Summer Lake Painting",
        "startDate": "2026-07-15",
        "endDate": "2026-07-29",
        "price": "€3000",
        "level": "All Levels"
      },
      {
        "name": "Winter Digital Art Residency",
        "startDate": "2027-02-01",
        "endDate": "2027-02-15",
        "price": "€2800",
        "level": "Advanced"
      }
    ],
    "accommodation": {
      "types": [
        {
          "type": "shared",
          "label": "Shared Apartment near ETH",
          "pricePerWeek": 600,
          "maxOccupancy": 2,
          "bathType": "shared",
          "mealsIncluded": false
        },
        {
          "type": "private",
          "label": "Private Studio in Niederdorf",
          "pricePerWeek": 980,
          "maxOccupancy": 1,
          "bathType": "private",
          "mealsIncluded": true
        }
      ],
      "companionsAllowed": true,
      "childrenAllowed": true,
      "minStay": "1 week",
      "shuttleToTraining": true,
      "notes": "Accommodation in the university quarter and historic Niederdorf."
    },
    "availability": {
      "status": "limited",
      "nextIntake": "2026-04-01",
      "spotsLeft": 6,
      "responseTime": "24 hours",
      "privateLessons": true,
      "yearRound": true
    },
    "juniorInfo": {
      "minAge": 14,
      "maxAge": 17,
      "supervision": "Trilingual supervisors with Swiss education certification",
      "guardianStay": true,
      "schooling": "Partnership with Zurich International School",
      "medicalStaff": true,
      "safeguarding": "Swiss child protection standards fully met",
      "airportPickup": true,
      "mealPlan": "Full board with Swiss cuisine, dietary accommodations",
      "curfew": "21:00 weekdays, 22:00 weekends",
      "roommatePairing": "Language and interest-matched pairing",
      "languageSupport": [
        "German",
        "French",
        "English",
        "Italian"
      ],
      "emergencyProtocol": "24/7 emergency line, University Hospital Zurich 10 minutes away"
    }
  },
  {
    "id": "bruges-art-guild",
    "name": "Bruges Art Guild",
    "country": "Belgium",
    "countryFlag": "🇧🇪",
    "city": "Bruges",
    "lat": 51.2093,
    "lng": 3.2247,
    "website": "https://www.brugesartguild.be",
    "contact": "+32 50 44 8700",
    "contactEmail": "info@brugesartguild.be",
    "description": "In the perfectly preserved medieval city of Bruges, this guild-style school teaches oil painting techniques pioneered by the Flemish masters. The canals, belfries, and cobblestone streets provide endless subjects.",
    "ageGroups": [
      "Adults",
      "Teens (14-17)",
      "Seniors (55+)"
    ],
    "level": "Beginner to Advanced",
    "individualLessons": true,
    "boarding": true,
    "beach": {
      "distance": 15,
      "description": "North Sea beaches at Zeebrugge, 15 km"
    },
    "priceRange": {
      "from": 650,
      "to": 1700,
      "unit": "week",
      "display": "€650–€1,700/week"
    },
    "socialMedia": {
      "instagram": "@brugesartguild",
      "facebook": "brugesartguild",
      "twitter": "@BrugesArtGuild"
    },
    "climate": "bruges",
    "facilities": "Flemish painting studio, Egg tempera lab, Lacemaking workshop, Gilding room, Canal-side plein air terrace, Gallery",
    "courtSurfaces": [
      "Oil Painting",
      "Egg Tempera",
      "Drawing",
      "Gilding"
    ],
    "programs": [
      {
        "name": "Flemish Oil Painting Technique",
        "price": "€1100/week",
        "desc": "Master the layered glazing and detail techniques of the Flemish Primitives."
      },
      {
        "name": "Egg Tempera & Medieval Methods",
        "price": "€900/week",
        "desc": "Paint on wood panels using egg tempera and gold leaf in the medieval tradition."
      },
      {
        "name": "Plein Air Canal Painting",
        "price": "€800/week",
        "desc": "Paint Bruges's iconic canals, bridges, and architecture on location."
      }
    ],
    "coaches": [
      {
        "name": "Philippe Van der Berg",
        "credential": "MFA, Royal Academy of Fine Arts Ghent",
        "background": "Flemish oil painting specialist recreating and teaching the layered glazing techniques of Van Eyck.",
        "atpWta": false,
        "bestRanking": null,
        "rankingNote": null,
        "languages": [
          "Dutch",
          "French",
          "English"
        ],
        "instagram": null
      },
      {
        "name": "Isabelle Mercier",
        "credential": "MA, La Cambre Brussels",
        "background": "Egg tempera artist and gilder preserving medieval Flemish craft traditions.",
        "atpWta": false,
        "bestRanking": null,
        "rankingNote": null,
        "languages": [
          "French",
          "Dutch",
          "English"
        ],
        "instagram": null
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800",
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800",
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800"
    ],
    "upcomingCamps": [
      {
        "name": "Flemish Masters Spring",
        "startDate": "2026-04-15",
        "endDate": "2026-04-29",
        "price": "€2200",
        "level": "Intermediate"
      },
      {
        "name": "Summer Canal Painting",
        "startDate": "2026-07-10",
        "endDate": "2026-07-24",
        "price": "€2000",
        "level": "All Levels"
      },
      {
        "name": "Winter Tempera Workshop",
        "startDate": "2027-01-15",
        "endDate": "2027-01-29",
        "price": "€1800",
        "level": "Beginner"
      }
    ],
    "accommodation": {
      "types": [
        {
          "type": "shared",
          "label": "Shared Room in Historic Center",
          "pricePerWeek": 350,
          "maxOccupancy": 2,
          "bathType": "shared",
          "mealsIncluded": false
        },
        {
          "type": "private",
          "label": "Private Room near Markt Square",
          "pricePerWeek": 580,
          "maxOccupancy": 1,
          "bathType": "private",
          "mealsIncluded": true
        }
      ],
      "companionsAllowed": true,
      "childrenAllowed": true,
      "minStay": "1 week",
      "shuttleToTraining": false,
      "notes": "Accommodation in Bruges's UNESCO-listed historic center."
    },
    "availability": {
      "status": "open",
      "nextIntake": "2026-04-01",
      "spotsLeft": 12,
      "responseTime": "48 hours",
      "privateLessons": true,
      "yearRound": true
    },
    "juniorInfo": {
      "minAge": 14,
      "maxAge": 17,
      "supervision": "Trilingual youth supervisors (Dutch/French/English)",
      "guardianStay": true,
      "schooling": "Partnership with Bruges International School",
      "medicalStaff": true,
      "safeguarding": "Belgian child protection standards fully compliant",
      "airportPickup": true,
      "mealPlan": "Full board with Belgian and French cuisine",
      "curfew": "21:00 weekdays, 22:00 weekends",
      "roommatePairing": "Language and age-appropriate groupings",
      "languageSupport": [
        "Dutch",
        "French",
        "English",
        "German"
      ],
      "emergencyProtocol": "24/7 emergency contact, AZ Sint-Jan Hospital 5 minutes away"
    }
  },
  {
    "id": "dubrovnik-art-retreat",
    "name": "Dubrovnik Art Retreat",
    "country": "Croatia",
    "countryFlag": "🇭🇷",
    "city": "Dubrovnik",
    "lat": 42.6507,
    "lng": 18.0944,
    "website": "https://www.dubrovnikartretreat.hr",
    "contact": "+385 20 321 500",
    "contactEmail": "info@dubrovnikartretreat.hr",
    "description": "Perched on the stunning Adriatic coast within sight of Dubrovnik's ancient walls, this retreat offers Mediterranean-inspired art training. The dramatic coastline, terracotta rooftops, and crystal waters provide unrivaled subjects.",
    "ageGroups": [
      "Adults",
      "Teens (14-17)",
      "Seniors (55+)"
    ],
    "level": "Beginner to Advanced",
    "individualLessons": true,
    "boarding": true,
    "beach": {
      "distance": 1,
      "description": "Banje Beach, steps from the Old Town"
    },
    "priceRange": {
      "from": 550,
      "to": 1500,
      "unit": "week",
      "display": "€550–€1,500/week"
    },
    "socialMedia": {
      "instagram": "@dubrovnikart",
      "facebook": "dubrovnikartretreat",
      "twitter": "@DubrovnikArtRt"
    },
    "climate": "dubrovnik",
    "facilities": "Watercolor studio, Plein air terraces, Ceramics workshop, Photography darkroom, Seaside gallery, Courtyard atelier",
    "courtSurfaces": [
      "Watercolor",
      "Oil Painting",
      "Ceramics",
      "Photography"
    ],
    "programs": [
      {
        "name": "Adriatic Watercolor",
        "price": "€800/week",
        "desc": "Paint the stunning Dalmatian coast and Old Town architecture in watercolor."
      },
      {
        "name": "Mediterranean Oil Painting",
        "price": "€900/week",
        "desc": "Capture the warmth, color, and light of the Adriatic in oil on canvas."
      },
      {
        "name": "Coastal Ceramics",
        "price": "€700/week",
        "desc": "Create sea-inspired ceramics using local clays and traditional Dalmatian techniques."
      }
    ],
    "coaches": [
      {
        "name": "Ivan Petrovic",
        "credential": "MFA, Academy of Fine Arts Zagreb",
        "background": "Watercolorist capturing the Adriatic light and Dalmatian architecture in luminous detail.",
        "atpWta": false,
        "bestRanking": null,
        "rankingNote": null,
        "languages": [
          "Croatian",
          "English",
          "Italian"
        ],
        "instagram": null
      },
      {
        "name": "Maja Horvat",
        "credential": "MA, Academy of Applied Arts Belgrade",
        "background": "Ceramicist and photographer combining Mediterranean craft traditions with contemporary vision.",
        "atpWta": false,
        "bestRanking": null,
        "rankingNote": null,
        "languages": [
          "Croatian",
          "English",
          "Serbian"
        ],
        "instagram": null
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800",
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800",
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800"
    ],
    "upcomingCamps": [
      {
        "name": "Adriatic Spring Painting",
        "startDate": "2026-04-20",
        "endDate": "2026-05-04",
        "price": "€1800",
        "level": "All Levels"
      },
      {
        "name": "Summer Watercolor Festival",
        "startDate": "2026-07-15",
        "endDate": "2026-07-29",
        "price": "€2000",
        "level": "Intermediate"
      },
      {
        "name": "Autumn Photography Retreat",
        "startDate": "2026-10-01",
        "endDate": "2026-10-15",
        "price": "€1600",
        "level": "Advanced"
      }
    ],
    "accommodation": {
      "types": [
        {
          "type": "shared",
          "label": "Shared Apartment in Old Town",
          "pricePerWeek": 350,
          "maxOccupancy": 2,
          "bathType": "shared",
          "mealsIncluded": false
        },
        {
          "type": "private",
          "label": "Private Room with Sea View",
          "pricePerWeek": 580,
          "maxOccupancy": 1,
          "bathType": "private",
          "mealsIncluded": true
        }
      ],
      "companionsAllowed": true,
      "childrenAllowed": true,
      "minStay": "1 week",
      "shuttleToTraining": false,
      "notes": "Accommodation within and near Dubrovnik's Old Town walls."
    },
    "availability": {
      "status": "open",
      "nextIntake": "2026-04-01",
      "spotsLeft": 16,
      "responseTime": "48 hours",
      "privateLessons": true,
      "yearRound": true
    },
    "juniorInfo": {
      "minAge": 14,
      "maxAge": 17,
      "supervision": "Croatian and English-speaking youth supervisors",
      "guardianStay": true,
      "schooling": "Links with Dubrovnik International School",
      "medicalStaff": true,
      "safeguarding": "Croatian child protection standards fully implemented",
      "airportPickup": true,
      "mealPlan": "Full board with Dalmatian cuisine, dietary needs met",
      "curfew": "21:00 weekdays, 22:30 weekends",
      "roommatePairing": "Cultural mixing prioritized in room assignments",
      "languageSupport": [
        "Croatian",
        "English",
        "Italian",
        "German"
      ],
      "emergencyProtocol": "24/7 emergency line, Dubrovnik General Hospital 10 minutes away"
    }
  },
  {
    "id": "nice-art-studio",
    "name": "Nice Mediterranean Art Studio",
    "country": "France",
    "countryFlag": "🇫🇷",
    "city": "Nice",
    "lat": 43.7102,
    "lng": 7.262,
    "website": "https://www.nicemedart.fr",
    "contact": "+33 4 93 62 3100",
    "contactEmail": "info@nicemedart.fr",
    "description": "On the sun-drenched Cote d'Azur where Matisse and Chagall found inspiration, this studio offers vibrant color-focused training. The legendary Mediterranean light and coastal landscapes provide a painter's paradise.",
    "ageGroups": [
      "Adults",
      "Teens (14-17)",
      "Seniors (55+)"
    ],
    "level": "Beginner to Advanced",
    "individualLessons": true,
    "boarding": true,
    "beach": {
      "distance": 1,
      "description": "Promenade des Anglais beach, steps from studio"
    },
    "priceRange": {
      "from": 700,
      "to": 1800,
      "unit": "week",
      "display": "€700–€1,800/week"
    },
    "socialMedia": {
      "instagram": "@nicemedart",
      "facebook": "nicemediterraneanart",
      "twitter": "@NiceMedArt"
    },
    "climate": "nice",
    "facilities": "Sunlit painting studios, Outdoor terrace easels, Sculpture garden, Color mixing lab, Exhibition gallery, Plein air excursion transport",
    "courtSurfaces": [
      "Oil Painting",
      "Watercolor",
      "Drawing",
      "Pastel"
    ],
    "programs": [
      {
        "name": "Fauvist Color Workshop",
        "price": "€1000/week",
        "desc": "Explore bold color theory inspired by Matisse and the Fauvist movement on the Riviera."
      },
      {
        "name": "Mediterranean Plein Air",
        "price": "€900/week",
        "desc": "Paint coastal landscapes, harbors, and hillside villages in the legendary Cote d Azur light."
      },
      {
        "name": "Pastel & Watercolor",
        "price": "€800/week",
        "desc": "Capture Mediterranean scenes in pastel and watercolor with emphasis on light and atmosphere."
      }
    ],
    "coaches": [
      {
        "name": "Antoine Duval",
        "credential": "MFA, Villa Arson Nice",
        "background": "Colorist painter whose vibrant Mediterranean landscapes are exhibited in galleries across southern France.",
        "atpWta": false,
        "bestRanking": null,
        "rankingNote": null,
        "languages": [
          "French",
          "English",
          "Italian"
        ],
        "instagram": null
      },
      {
        "name": "Claire Beaumont",
        "credential": "Diplome National des Beaux-Arts",
        "background": "Watercolorist and pastel artist specializing in coastal scenes and plein air instruction.",
        "atpWta": false,
        "bestRanking": null,
        "rankingNote": null,
        "languages": [
          "French",
          "English"
        ],
        "instagram": null
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800",
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800",
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800"
    ],
    "upcomingCamps": [
      {
        "name": "Riviera Spring Color",
        "startDate": "2026-04-01",
        "endDate": "2026-04-15",
        "price": "€2200",
        "level": "All Levels"
      },
      {
        "name": "Summer Plein Air Festival",
        "startDate": "2026-07-10",
        "endDate": "2026-07-24",
        "price": "€2400",
        "level": "Intermediate"
      },
      {
        "name": "Autumn Mediterranean Light",
        "startDate": "2026-10-05",
        "endDate": "2026-10-19",
        "price": "€2000",
        "level": "Beginner"
      }
    ],
    "accommodation": {
      "types": [
        {
          "type": "shared",
          "label": "Shared Apartment in Vieux Nice",
          "pricePerWeek": 400,
          "maxOccupancy": 2,
          "bathType": "shared",
          "mealsIncluded": false
        },
        {
          "type": "private",
          "label": "Private Studio near Promenade",
          "pricePerWeek": 680,
          "maxOccupancy": 1,
          "bathType": "private",
          "mealsIncluded": true
        }
      ],
      "companionsAllowed": true,
      "childrenAllowed": true,
      "minStay": "1 week",
      "shuttleToTraining": false,
      "notes": "Accommodation in the charming Old Nice and seafront areas."
    },
    "availability": {
      "status": "open",
      "nextIntake": "2026-04-01",
      "spotsLeft": 14,
      "responseTime": "48 hours",
      "privateLessons": true,
      "yearRound": true
    },
    "juniorInfo": {
      "minAge": 14,
      "maxAge": 17,
      "supervision": "French and English-speaking youth supervisors",
      "guardianStay": true,
      "schooling": "Partnership with International School of Nice",
      "medicalStaff": true,
      "safeguarding": "French child protection standards fully implemented",
      "airportPickup": true,
      "mealPlan": "Full board with Provencal cuisine, dietary needs met",
      "curfew": "21:00 weekdays, 22:30 weekends",
      "roommatePairing": "Age and language-matched pairings",
      "languageSupport": [
        "French",
        "English",
        "Italian",
        "Russian"
      ],
      "emergencyProtocol": "24/7 emergency line, CHU de Nice 10 minutes away"
    }
  },
  {
    "id": "brussels-surrealist-art-school",
    "name": "Brussels Surrealist Art School",
    "country": "Belgium",
    "countryFlag": "🇧🇪",
    "city": "Brussels",
    "lat": 50.8503,
    "lng": 4.3517,
    "website": "https://www.brusselssurrealistart.be",
    "contact": "+32 2 507 8200",
    "contactEmail": "info@brusselssurrealistart.be",
    "description": "In the city of Magritte, this school channels Belgium's rich surrealist heritage into contemporary creative practice. Students explore the boundaries between reality and imagination through diverse media.",
    "ageGroups": [
      "Adults",
      "Teens (14-17)",
      "Seniors (55+)"
    ],
    "level": "Beginner to Advanced",
    "individualLessons": true,
    "boarding": true,
    "beach": false,
    "priceRange": {
      "from": 650,
      "to": 1700,
      "unit": "week",
      "display": "€650–€1,700/week"
    },
    "socialMedia": {
      "instagram": "@brusselssurreal",
      "facebook": "brusselssurrealistart",
      "twitter": "@BxlSurrealArt"
    },
    "climate": "brussels",
    "facilities": "Mixed media studios, Darkroom, Printmaking workshop, Video lab, Surrealist library, Exhibition hall",
    "courtSurfaces": [
      "Mixed Media",
      "Oil Painting",
      "Printmaking",
      "Photography"
    ],
    "programs": [
      {
        "name": "Surrealist Techniques",
        "price": "€1000/week",
        "desc": "Explore automatic drawing, frottage, and other surrealist methods pioneered by Magritte and Ernst."
      },
      {
        "name": "Mixed Media & Collage",
        "price": "€900/week",
        "desc": "Create layered works combining painting, photography, found objects, and text."
      },
      {
        "name": "Experimental Printmaking",
        "price": "€1100/week",
        "desc": "Push printmaking boundaries with monotype, collagraph, and experimental techniques."
      }
    ],
    "coaches": [
      {
        "name": "Marc Desmet",
        "credential": "MFA, La Cambre Brussels",
        "background": "Surrealist painter and installation artist whose work has been shown at BOZAR and the Magritte Museum.",
        "atpWta": false,
        "bestRanking": null,
        "rankingNote": null,
        "languages": [
          "French",
          "Dutch",
          "English"
        ],
        "instagram": null
      },
      {
        "name": "Nathalie Janssen",
        "credential": "MA, Royal Academy of Fine Arts Antwerp",
        "background": "Printmaker and collage artist exploring dreamlike imagery and subconscious narratives.",
        "atpWta": false,
        "bestRanking": null,
        "rankingNote": null,
        "languages": [
          "Dutch",
          "French",
          "English",
          "German"
        ],
        "instagram": null
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800",
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800",
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800"
    ],
    "upcomingCamps": [
      {
        "name": "Surrealist Spring Workshop",
        "startDate": "2026-03-20",
        "endDate": "2026-04-03",
        "price": "€2000",
        "level": "All Levels"
      },
      {
        "name": "Summer Mixed Media Lab",
        "startDate": "2026-07-05",
        "endDate": "2026-07-19",
        "price": "€2200",
        "level": "Intermediate"
      },
      {
        "name": "Autumn Printmaking Residency",
        "startDate": "2026-10-10",
        "endDate": "2026-10-24",
        "price": "€1800",
        "level": "Advanced"
      }
    ],
    "accommodation": {
      "types": [
        {
          "type": "shared",
          "label": "Shared Apartment in Ixelles",
          "pricePerWeek": 380,
          "maxOccupancy": 2,
          "bathType": "shared",
          "mealsIncluded": false
        },
        {
          "type": "private",
          "label": "Private Room in Saint-Gilles",
          "pricePerWeek": 620,
          "maxOccupancy": 1,
          "bathType": "private",
          "mealsIncluded": true
        }
      ],
      "companionsAllowed": true,
      "childrenAllowed": true,
      "minStay": "1 week",
      "shuttleToTraining": true,
      "notes": "Accommodation in artistic Ixelles and Saint-Gilles neighborhoods."
    },
    "availability": {
      "status": "open",
      "nextIntake": "2026-03-01",
      "spotsLeft": 16,
      "responseTime": "48 hours",
      "privateLessons": true,
      "yearRound": true
    },
    "juniorInfo": {
      "minAge": 14,
      "maxAge": 17,
      "supervision": "Trilingual youth supervisors (French/Dutch/English)",
      "guardianStay": true,
      "schooling": "Partnership with Brussels International School",
      "medicalStaff": true,
      "safeguarding": "Belgian child protection standards fully implemented",
      "airportPickup": true,
      "mealPlan": "Full board with Belgian and international cuisine",
      "curfew": "21:00 weekdays, 22:00 weekends",
      "roommatePairing": "Language and interest-matched groupings",
      "languageSupport": [
        "French",
        "Dutch",
        "English",
        "German"
      ],
      "emergencyProtocol": "24/7 emergency contact, UZ Brussel Hospital 10 minutes away"
    }
  },
  {
    "id": "tallinn-digital-art-hub",
    "name": "Tallinn Digital Art Hub",
    "country": "Estonia",
    "countryFlag": "🇪🇪",
    "city": "Tallinn",
    "lat": 59.437,
    "lng": 24.7536,
    "website": "https://www.tallinndigitalart.ee",
    "contact": "+372 6 409 200",
    "contactEmail": "info@tallinndigitalart.ee",
    "description": "In one of Europe's most digitally advanced cities, this hub pioneers the fusion of technology and fine art. The medieval Old Town and cutting-edge digital culture create a unique creative environment.",
    "ageGroups": [
      "Adults",
      "Teens (14-17)",
      "Seniors (55+)"
    ],
    "level": "Beginner to Advanced",
    "individualLessons": true,
    "boarding": true,
    "beach": false,
    "priceRange": {
      "from": 500,
      "to": 1400,
      "unit": "week",
      "display": "€500–€1,400/week"
    },
    "socialMedia": {
      "instagram": "@tallinndigart",
      "facebook": "tallinndigitalarthub",
      "twitter": "@TallinnDigArt"
    },
    "climate": "tallinn",
    "facilities": "Digital studios, VR lab, Motion capture room, Painting ateliers, 3D printing facility, Exhibition space",
    "courtSurfaces": [
      "Digital Art",
      "New Media",
      "Drawing",
      "Photography"
    ],
    "programs": [
      {
        "name": "Digital Art & Creative Coding",
        "price": "€1000/week",
        "desc": "Create generative art, interactive installations, and creative coding projects."
      },
      {
        "name": "VR & Immersive Art",
        "price": "€1100/week",
        "desc": "Design virtual reality art experiences and immersive digital environments."
      },
      {
        "name": "New Media & Video Art",
        "price": "€900/week",
        "desc": "Produce video art, motion graphics, and multimedia installations."
      }
    ],
    "coaches": [
      {
        "name": "Andres Tamm",
        "credential": "MFA, Estonian Academy of Arts",
        "background": "New media artist and creative coder whose interactive installations have been featured at Ars Electronica.",
        "atpWta": false,
        "bestRanking": null,
        "rankingNote": null,
        "languages": [
          "Estonian",
          "English",
          "Finnish"
        ],
        "instagram": null
      },
      {
        "name": "Karin Rebane",
        "credential": "MA, Estonian Academy of Arts",
        "background": "Video artist and VR designer exploring digital identity and virtual spaces.",
        "atpWta": false,
        "bestRanking": null,
        "rankingNote": null,
        "languages": [
          "Estonian",
          "English",
          "Russian"
        ],
        "instagram": null
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800",
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800",
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800"
    ],
    "upcomingCamps": [
      {
        "name": "Digital Art Spring",
        "startDate": "2026-04-01",
        "endDate": "2026-04-15",
        "price": "€1600",
        "level": "All Levels"
      },
      {
        "name": "Summer Immersive Art Lab",
        "startDate": "2026-07-10",
        "endDate": "2026-07-24",
        "price": "€1800",
        "level": "Intermediate"
      },
      {
        "name": "Winter Creative Coding",
        "startDate": "2027-01-15",
        "endDate": "2027-01-29",
        "price": "€1400",
        "level": "Beginner"
      }
    ],
    "accommodation": {
      "types": [
        {
          "type": "shared",
          "label": "Shared Apartment in Kalamaja",
          "pricePerWeek": 300,
          "maxOccupancy": 2,
          "bathType": "shared",
          "mealsIncluded": false
        },
        {
          "type": "private",
          "label": "Private Room in Old Town",
          "pricePerWeek": 500,
          "maxOccupancy": 1,
          "bathType": "private",
          "mealsIncluded": true
        }
      ],
      "companionsAllowed": true,
      "childrenAllowed": true,
      "minStay": "1 week",
      "shuttleToTraining": true,
      "notes": "Accommodation in trendy Kalamaja and the medieval Old Town."
    },
    "availability": {
      "status": "open",
      "nextIntake": "2026-04-01",
      "spotsLeft": 18,
      "responseTime": "24 hours",
      "privateLessons": true,
      "yearRound": true
    },
    "juniorInfo": {
      "minAge": 14,
      "maxAge": 17,
      "supervision": "Estonian and English-speaking youth coordinators",
      "guardianStay": true,
      "schooling": "Partnership with Tallinn International School",
      "medicalStaff": true,
      "safeguarding": "Estonian child protection standards fully implemented",
      "airportPickup": true,
      "mealPlan": "Full board with Estonian and international cuisine",
      "curfew": "21:00 weekdays, 22:00 weekends",
      "roommatePairing": "Interest-based matching with creative mentoring",
      "languageSupport": [
        "Estonian",
        "English",
        "Russian",
        "Finnish"
      ],
      "emergencyProtocol": "24/7 emergency line, North Estonia Medical Centre 10 minutes away"
    }
  }
];

const CLIMATE_DATA = {
  "florence": {
    "spring": {
      "tempHigh": 20,
      "tempLow": 10,
      "rainDays": 9,
      "sunshine": 6
    },
    "summer": {
      "tempHigh": 31,
      "tempLow": 18,
      "rainDays": 5,
      "sunshine": 10
    },
    "autumn": {
      "tempHigh": 19,
      "tempLow": 10,
      "rainDays": 9,
      "sunshine": 5
    },
    "winter": {
      "tempHigh": 10,
      "tempLow": 2,
      "rainDays": 9,
      "sunshine": 4
    }
  },
  "paris": {
    "spring": {
      "tempHigh": 16,
      "tempLow": 7,
      "rainDays": 11,
      "sunshine": 5
    },
    "summer": {
      "tempHigh": 25,
      "tempLow": 15,
      "rainDays": 8,
      "sunshine": 8
    },
    "autumn": {
      "tempHigh": 15,
      "tempLow": 8,
      "rainDays": 11,
      "sunshine": 4
    },
    "winter": {
      "tempHigh": 7,
      "tempLow": 2,
      "rainDays": 11,
      "sunshine": 2
    }
  },
  "barcelona": {
    "spring": {
      "tempHigh": 18,
      "tempLow": 11,
      "rainDays": 8,
      "sunshine": 7
    },
    "summer": {
      "tempHigh": 28,
      "tempLow": 21,
      "rainDays": 4,
      "sunshine": 10
    },
    "autumn": {
      "tempHigh": 20,
      "tempLow": 13,
      "rainDays": 8,
      "sunshine": 6
    },
    "winter": {
      "tempHigh": 13,
      "tempLow": 5,
      "rainDays": 6,
      "sunshine": 5
    }
  },
  "amsterdam": {
    "spring": {
      "tempHigh": 13,
      "tempLow": 5,
      "rainDays": 10,
      "sunshine": 5
    },
    "summer": {
      "tempHigh": 22,
      "tempLow": 13,
      "rainDays": 10,
      "sunshine": 7
    },
    "autumn": {
      "tempHigh": 14,
      "tempLow": 7,
      "rainDays": 12,
      "sunshine": 3
    },
    "winter": {
      "tempHigh": 6,
      "tempLow": 1,
      "rainDays": 12,
      "sunshine": 2
    }
  },
  "berlin": {
    "spring": {
      "tempHigh": 14,
      "tempLow": 4,
      "rainDays": 9,
      "sunshine": 5
    },
    "summer": {
      "tempHigh": 24,
      "tempLow": 14,
      "rainDays": 9,
      "sunshine": 8
    },
    "autumn": {
      "tempHigh": 13,
      "tempLow": 5,
      "rainDays": 9,
      "sunshine": 4
    },
    "winter": {
      "tempHigh": 3,
      "tempLow": -2,
      "rainDays": 10,
      "sunshine": 2
    }
  },
  "vienna": {
    "spring": {
      "tempHigh": 16,
      "tempLow": 6,
      "rainDays": 9,
      "sunshine": 6
    },
    "summer": {
      "tempHigh": 26,
      "tempLow": 16,
      "rainDays": 9,
      "sunshine": 8
    },
    "autumn": {
      "tempHigh": 15,
      "tempLow": 6,
      "rainDays": 8,
      "sunshine": 4
    },
    "winter": {
      "tempHigh": 3,
      "tempLow": -2,
      "rainDays": 8,
      "sunshine": 2
    }
  },
  "london": {
    "spring": {
      "tempHigh": 14,
      "tempLow": 6,
      "rainDays": 11,
      "sunshine": 5
    },
    "summer": {
      "tempHigh": 23,
      "tempLow": 14,
      "rainDays": 8,
      "sunshine": 7
    },
    "autumn": {
      "tempHigh": 15,
      "tempLow": 8,
      "rainDays": 11,
      "sunshine": 3
    },
    "winter": {
      "tempHigh": 8,
      "tempLow": 2,
      "rainDays": 11,
      "sunshine": 2
    }
  },
  "prague": {
    "spring": {
      "tempHigh": 14,
      "tempLow": 4,
      "rainDays": 9,
      "sunshine": 5
    },
    "summer": {
      "tempHigh": 24,
      "tempLow": 14,
      "rainDays": 10,
      "sunshine": 7
    },
    "autumn": {
      "tempHigh": 13,
      "tempLow": 5,
      "rainDays": 8,
      "sunshine": 4
    },
    "winter": {
      "tempHigh": 2,
      "tempLow": -3,
      "rainDays": 8,
      "sunshine": 2
    }
  },
  "lisbon": {
    "spring": {
      "tempHigh": 20,
      "tempLow": 12,
      "rainDays": 8,
      "sunshine": 7
    },
    "summer": {
      "tempHigh": 28,
      "tempLow": 18,
      "rainDays": 2,
      "sunshine": 11
    },
    "autumn": {
      "tempHigh": 21,
      "tempLow": 14,
      "rainDays": 9,
      "sunshine": 6
    },
    "winter": {
      "tempHigh": 15,
      "tempLow": 8,
      "rainDays": 10,
      "sunshine": 5
    }
  },
  "copenhagen": {
    "spring": {
      "tempHigh": 11,
      "tempLow": 3,
      "rainDays": 9,
      "sunshine": 5
    },
    "summer": {
      "tempHigh": 21,
      "tempLow": 13,
      "rainDays": 10,
      "sunshine": 8
    },
    "autumn": {
      "tempHigh": 12,
      "tempLow": 6,
      "rainDays": 12,
      "sunshine": 3
    },
    "winter": {
      "tempHigh": 4,
      "tempLow": 0,
      "rainDays": 11,
      "sunshine": 1
    }
  },
  "athens": {
    "spring": {
      "tempHigh": 20,
      "tempLow": 11,
      "rainDays": 7,
      "sunshine": 8
    },
    "summer": {
      "tempHigh": 33,
      "tempLow": 22,
      "rainDays": 1,
      "sunshine": 12
    },
    "autumn": {
      "tempHigh": 22,
      "tempLow": 14,
      "rainDays": 6,
      "sunshine": 7
    },
    "winter": {
      "tempHigh": 13,
      "tempLow": 6,
      "rainDays": 10,
      "sunshine": 4
    }
  },
  "stockholm": {
    "spring": {
      "tempHigh": 11,
      "tempLow": 2,
      "rainDays": 8,
      "sunshine": 6
    },
    "summer": {
      "tempHigh": 22,
      "tempLow": 13,
      "rainDays": 9,
      "sunshine": 9
    },
    "autumn": {
      "tempHigh": 10,
      "tempLow": 4,
      "rainDays": 10,
      "sunshine": 3
    },
    "winter": {
      "tempHigh": 1,
      "tempLow": -4,
      "rainDays": 9,
      "sunshine": 1
    }
  },
  "dublin": {
    "spring": {
      "tempHigh": 12,
      "tempLow": 5,
      "rainDays": 12,
      "sunshine": 5
    },
    "summer": {
      "tempHigh": 19,
      "tempLow": 11,
      "rainDays": 11,
      "sunshine": 6
    },
    "autumn": {
      "tempHigh": 13,
      "tempLow": 7,
      "rainDays": 13,
      "sunshine": 3
    },
    "winter": {
      "tempHigh": 8,
      "tempLow": 3,
      "rainDays": 13,
      "sunshine": 2
    }
  },
  "krakow": {
    "spring": {
      "tempHigh": 14,
      "tempLow": 4,
      "rainDays": 10,
      "sunshine": 5
    },
    "summer": {
      "tempHigh": 24,
      "tempLow": 13,
      "rainDays": 12,
      "sunshine": 7
    },
    "autumn": {
      "tempHigh": 13,
      "tempLow": 4,
      "rainDays": 9,
      "sunshine": 4
    },
    "winter": {
      "tempHigh": 1,
      "tempLow": -5,
      "rainDays": 9,
      "sunshine": 2
    }
  },
  "helsinki": {
    "spring": {
      "tempHigh": 9,
      "tempLow": 0,
      "rainDays": 8,
      "sunshine": 6
    },
    "summer": {
      "tempHigh": 21,
      "tempLow": 12,
      "rainDays": 9,
      "sunshine": 10
    },
    "autumn": {
      "tempHigh": 8,
      "tempLow": 2,
      "rainDays": 11,
      "sunshine": 3
    },
    "winter": {
      "tempHigh": -1,
      "tempLow": -7,
      "rainDays": 10,
      "sunshine": 1
    }
  },
  "budapest": {
    "spring": {
      "tempHigh": 17,
      "tempLow": 7,
      "rainDays": 9,
      "sunshine": 6
    },
    "summer": {
      "tempHigh": 28,
      "tempLow": 17,
      "rainDays": 8,
      "sunshine": 9
    },
    "autumn": {
      "tempHigh": 16,
      "tempLow": 7,
      "rainDays": 7,
      "sunshine": 5
    },
    "winter": {
      "tempHigh": 4,
      "tempLow": -2,
      "rainDays": 8,
      "sunshine": 2
    }
  },
  "edinburgh": {
    "spring": {
      "tempHigh": 11,
      "tempLow": 4,
      "rainDays": 11,
      "sunshine": 5
    },
    "summer": {
      "tempHigh": 18,
      "tempLow": 10,
      "rainDays": 10,
      "sunshine": 6
    },
    "autumn": {
      "tempHigh": 12,
      "tempLow": 6,
      "rainDays": 12,
      "sunshine": 3
    },
    "winter": {
      "tempHigh": 7,
      "tempLow": 1,
      "rainDays": 12,
      "sunshine": 2
    }
  },
  "oslo": {
    "spring": {
      "tempHigh": 10,
      "tempLow": 1,
      "rainDays": 8,
      "sunshine": 6
    },
    "summer": {
      "tempHigh": 22,
      "tempLow": 12,
      "rainDays": 10,
      "sunshine": 8
    },
    "autumn": {
      "tempHigh": 9,
      "tempLow": 3,
      "rainDays": 11,
      "sunshine": 3
    },
    "winter": {
      "tempHigh": 0,
      "tempLow": -5,
      "rainDays": 9,
      "sunshine": 1
    }
  },
  "zurich": {
    "spring": {
      "tempHigh": 15,
      "tempLow": 5,
      "rainDays": 12,
      "sunshine": 5
    },
    "summer": {
      "tempHigh": 25,
      "tempLow": 14,
      "rainDays": 12,
      "sunshine": 7
    },
    "autumn": {
      "tempHigh": 14,
      "tempLow": 6,
      "rainDays": 10,
      "sunshine": 4
    },
    "winter": {
      "tempHigh": 4,
      "tempLow": -1,
      "rainDays": 10,
      "sunshine": 2
    }
  },
  "bruges": {
    "spring": {
      "tempHigh": 13,
      "tempLow": 5,
      "rainDays": 11,
      "sunshine": 5
    },
    "summer": {
      "tempHigh": 21,
      "tempLow": 13,
      "rainDays": 10,
      "sunshine": 6
    },
    "autumn": {
      "tempHigh": 14,
      "tempLow": 7,
      "rainDays": 12,
      "sunshine": 3
    },
    "winter": {
      "tempHigh": 7,
      "tempLow": 2,
      "rainDays": 12,
      "sunshine": 2
    }
  },
  "dubrovnik": {
    "spring": {
      "tempHigh": 18,
      "tempLow": 11,
      "rainDays": 9,
      "sunshine": 7
    },
    "summer": {
      "tempHigh": 29,
      "tempLow": 21,
      "rainDays": 4,
      "sunshine": 11
    },
    "autumn": {
      "tempHigh": 20,
      "tempLow": 13,
      "rainDays": 9,
      "sunshine": 6
    },
    "winter": {
      "tempHigh": 12,
      "tempLow": 5,
      "rainDays": 11,
      "sunshine": 4
    }
  },
  "nice": {
    "spring": {
      "tempHigh": 17,
      "tempLow": 10,
      "rainDays": 7,
      "sunshine": 7
    },
    "summer": {
      "tempHigh": 27,
      "tempLow": 20,
      "rainDays": 3,
      "sunshine": 11
    },
    "autumn": {
      "tempHigh": 19,
      "tempLow": 12,
      "rainDays": 7,
      "sunshine": 6
    },
    "winter": {
      "tempHigh": 12,
      "tempLow": 5,
      "rainDays": 7,
      "sunshine": 5
    }
  },
  "brussels": {
    "spring": {
      "tempHigh": 13,
      "tempLow": 5,
      "rainDays": 11,
      "sunshine": 5
    },
    "summer": {
      "tempHigh": 22,
      "tempLow": 13,
      "rainDays": 10,
      "sunshine": 6
    },
    "autumn": {
      "tempHigh": 14,
      "tempLow": 7,
      "rainDays": 12,
      "sunshine": 3
    },
    "winter": {
      "tempHigh": 6,
      "tempLow": 1,
      "rainDays": 12,
      "sunshine": 2
    }
  },
  "tallinn": {
    "spring": {
      "tempHigh": 9,
      "tempLow": 1,
      "rainDays": 8,
      "sunshine": 6
    },
    "summer": {
      "tempHigh": 20,
      "tempLow": 12,
      "rainDays": 10,
      "sunshine": 9
    },
    "autumn": {
      "tempHigh": 9,
      "tempLow": 3,
      "rainDays": 11,
      "sunshine": 3
    },
    "winter": {
      "tempHigh": 0,
      "tempLow": -5,
      "rainDays": 11,
      "sunshine": 1
    }
  }
};

const NEWS_ITEMS = [
  {
    "date": "2025-12-15",
    "title": "European Art Schools See Record Enrollment",
    "summary": "Art academies across Europe report a 25% increase in international applications, driven by growing interest in classical techniques and digital art fusion."
  },
  {
    "date": "2025-11-20",
    "title": "AI and Traditional Art: Finding the Balance",
    "summary": "Leading European art schools integrate AI tools into curricula while maintaining focus on foundational hand skills and traditional craftsmanship."
  },
  {
    "date": "2025-10-10",
    "title": "Plein Air Painting Revival Sweeps the Continent",
    "summary": "Outdoor painting experiences see unprecedented demand as students seek authentic engagement with European landscapes and architecture."
  },
  {
    "date": "2025-09-05",
    "title": "New EU Funding for Arts Education Programs",
    "summary": "The European Commission announces expanded grants supporting cross-border art residencies and student exchange programs at accredited academies."
  },
  {
    "date": "2025-08-01",
    "title": "Sustainability Focus Reshapes Art Materials",
    "summary": "European art schools lead the shift to eco-friendly pigments, recycled canvases, and sustainable studio practices across the continent."
  }
];

const COUNTRIES = ["Austria","Belgium","Croatia","Czech Republic","Denmark","Estonia","Finland","France","Germany","Greece","Hungary","Ireland","Italy","Netherlands","Norway","Poland","Portugal","Spain","Sweden","Switzerland","United Kingdom"];
