const SPORT_TYPE = 'rugby';

const ACADEMIES = [
  {
    "id": "leinster-rugby-academy",
    "name": "Leinster Rugby Development Academy",
    "country": "Ireland",
    "countryFlag": "🇮🇪",
    "city": "Dublin",
    "lat": 53.335,
    "lng": -6.229,
    "website": "https://www.leinsterrugby.ie/academy",
    "contact": "+353 1 269 3224",
    "contactEmail": "academy@leinsterrugby.ie",
    "individualLessons": true,
    "boarding": {
      "available": true,
      "ageRequirement": "16+"
    },
    "level": "Elite / Professional Pathway",
    "starred": true,
    "airport": {
      "name": "Dublin Airport",
      "code": "DUB",
      "distance": "12 km",
      "driveTime": "25 min"
    },
    "beach": {
      "distance": 8,
      "description": "Sandymount Strand, great for endurance runs"
    },
    "climate": "dublin",
    "priceRange": {
      "from": 1800,
      "to": 3200,
      "unit": "month",
      "display": "€1,800 - €3,200/month"
    },
    "socialMedia": {
      "instagram": "",
      "facebook": "",
      "twitter": ""
    },
    "programs": [
      {
        "name": "Elite Development Programme",
        "price": "€3,200/month",
        "desc": "Full-time professional pathway with positional coaching, video analysis, and S&C"
      },
      {
        "name": "Skills Intensive Camp",
        "price": "€1,800/month",
        "desc": "Technical skills development: passing, tackling, kicking, and game awareness"
      },
      {
        "name": "Junior Academy",
        "price": "€1,200/month",
        "desc": "Youth development for ages 12-17 with age-appropriate training"
      }
    ],
    "coaches": [
      {
        "name": "Ciarán Fitzgerald",
        "credential": "World Rugby Level 3",
        "background": "Former Leinster and Ireland A back row, 45 provincial caps",
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
        "name": "Sarah O’Brien",
        "credential": "IRFU High Performance Coach",
        "background": "Former Ireland Women’s captain, 52 international caps, World Cup 2014",
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
    "bestCoachRanking": null,
    "facilities": "4 full-size World Rugby compliant pitches including 1 floodlit 4G surface, indoor training barn, scrummage machine area, lineout practice tower, professional gym with rugby-specific S&C equipment, video analysis suite with multiple camera angles, hydrotherapy pool, cryotherapy chamber",
    "courtSurfaces": [
      "Natural grass",
      "4G artificial",
      "Indoor surface"
    ],
    "notableAlumni": [
      "Garry Ringrose",
      "James Ryan",
      "Dan Leavy"
    ],
    "photos": [
      "https://picsum.photos/seed/leinster-1/800/500",
      "https://picsum.photos/seed/leinster-2/800/500",
      "https://picsum.photos/seed/leinster-3/800/500"
    ],
    "description": "The Leinster Rugby Development Academy in Dublin offers world-class rugby training in the heartland of Irish rugby. Affiliated with one of Europe’s most successful provincial teams, the academy provides direct pathways into professional rugby through the URC and Champions Cup systems. Players benefit from coaching staff with extensive international experience and facilities that mirror those used by the senior Leinster squad.",
    "ageGroups": [
      "Junior",
      "Adult",
      "Senior"
    ],
    "nearbyHotels": [
      {
        "name": "The Herbert Park Hotel",
        "distance": "1.2 km",
        "priceRange": "€140-220/night"
      },
      {
        "name": "Clayton Hotel Ballsbridge",
        "distance": "0.8 km",
        "priceRange": "€120-200/night"
      }
    ],
    "nearbyRestaurants": [
      {
        "name": "The Old Spot",
        "distance": "0.5 km",
        "cuisine": "Irish Gastropub"
      },
      {
        "name": "Roly’s Bistro",
        "distance": "1.0 km",
        "cuisine": "French-Irish"
      }
    ],
    "nearbyMedical": [
      {
        "name": "St Vincent’s University Hospital",
        "distance": "2.0 km",
        "type": "Hospital"
      },
      {
        "name": "UPMC Sports Surgery Clinic",
        "distance": "5.0 km",
        "type": "Sports Medicine"
      }
    ],
    "costOfLiving": {
      "rent1Bed": 1800,
      "meal": 16,
      "monthlyFood": 350,
      "transport": 120,
      "currency": "EUR",
      "summary": "Dublin is one of Europe’s more expensive cities but offers excellent rugby infrastructure"
    },
    "scholarships": {
      "available": true,
      "details": "IRFU talent bursaries for identified provincial talent; need-based grants available for international students"
    },
    "visaInfo": {
      "schengen": false,
      "eu": true,
      "visaFreeCountries": "EU/EEA citizens; others require student visa",
      "notes": "Ireland is not in Schengen but is in the EU. Non-EU players need a student or athlete visa."
    },
    "airportTransfers": [
      {
        "from": "Dublin Airport (DUB)",
        "method": "Academy shuttle",
        "cost": "Free for residential students"
      }
    ],
    "nearbyTournaments": [
      {
        "name": "Leinster Schools Cup",
        "distance": "Various venues",
        "level": "Provincial Youth"
      },
      {
        "name": "Aviva Stadium Internationals",
        "distance": "3 km",
        "level": "International"
      }
    ],
    "upcomingCamps": [
      {
        "name": "Easter Skills Camp",
        "startDate": "2025-04-14",
        "endDate": "2025-04-18",
        "price": "€650",
        "level": "Intermediate-Advanced"
      },
      {
        "name": "Summer Elite Development",
        "startDate": "2025-07-07",
        "endDate": "2025-07-25",
        "price": "€2,400",
        "level": "Advanced"
      }
    ],
    "accommodation": {
      "types": [
        {
          "type": "residence",
          "label": "Academy Residence",
          "pricePerWeek": 350,
          "maxOccupancy": 2,
          "bathType": "ensuite",
          "mealsIncluded": true
        },
        {
          "type": "homestay",
          "label": "Irish Host Family",
          "pricePerWeek": 280,
          "maxOccupancy": 1,
          "bathType": "shared",
          "mealsIncluded": true
        }
      ],
      "companionsAllowed": true,
      "childrenAllowed": true,
      "minStay": "2 weeks",
      "shuttleToTraining": true,
      "notes": "Homestay families vetted by IRFU safeguarding. Residential option available for over 16s."
    },
    "videoTour": null,
    "juniorInfo": {
      "minAge": 12,
      "maxAge": 17,
      "supervision": "24/7",
      "guardianStay": true,
      "schooling": "Partnered with local secondary schools for academic continuity",
      "medicalStaff": true,
      "safeguarding": "IRFU Safeguarding Level 2 certified staff",
      "airportPickup": true,
      "mealPlan": "Full board for residential, lunch for day students",
      "curfew": "22:00 weekdays, 23:00 weekends",
      "roommatePairing": "Age and position based",
      "languageSupport": [
        "English primary; Irish available"
      ],
      "emergencyProtocol": "24/7 emergency line, on-site physio and doctor on call"
    },
    "availability": {
      "status": "limited spots",
      "nextIntake": "2025-09-01",
      "spotsLeft": 6,
      "responseTime": "48h",
      "privateLessons": true,
      "yearRound": true
    }
  },
  {
    "id": "munster-rugby-performance",
    "name": "Munster Rugby Performance Centre",
    "country": "Ireland",
    "countryFlag": "🇮🇪",
    "city": "Limerick",
    "lat": 52.6638,
    "lng": -8.6267,
    "website": "https://www.munsterrugby.ie/performance",
    "contact": "+353 61 331 423",
    "contactEmail": "performance@munsterrugby.ie",
    "individualLessons": true,
    "boarding": {
      "available": true,
      "ageRequirement": "15+"
    },
    "level": "Elite / Provincial Pathway",
    "starred": true,
    "airport": {
      "name": "Shannon Airport",
      "code": "SNN",
      "distance": "24 km",
      "driveTime": "30 min"
    },
    "beach": {
      "distance": 45,
      "description": "Lahinch Beach, popular surfing destination on the Wild Atlantic Way"
    },
    "climate": "limerick",
    "priceRange": {
      "from": 1500,
      "to": 2800,
      "unit": "month",
      "display": "€1,500 - €2,800/month"
    },
    "socialMedia": {
      "instagram": "",
      "facebook": "",
      "twitter": ""
    },
    "programs": [
      {
        "name": "Professional Pathway Programme",
        "price": "€2,800/month",
        "desc": "Full-time elite training with direct links to Munster senior squad coaching"
      },
      {
        "name": "Forward Specialist Camp",
        "price": "€1,800/month",
        "desc": "Scrum, lineout, and breakdown mastery for props, hookers, locks, and back rows"
      },
      {
        "name": "Youth Development",
        "price": "€1,500/month",
        "desc": "Structured development for aspiring provincial-level players aged 13-17"
      }
    ],
    "coaches": [
      {
        "name": "Declan Murphy",
        "credential": "World Rugby Level 3",
        "background": "Former Munster hooker, 120+ provincial caps, Heineken Cup winner 2006 and 2008",
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
        "name": "Aoife Doyle",
        "credential": "IRFU Performance Coach",
        "background": "Former Ireland Women’s winger, 35 international caps",
        "atpWta": false,
        "bestRanking": null,
        "rankingNote": null,
        "languages": [
          "English",
          "Irish"
        ],
        "instagram": null
      }
    ],
    "bestCoachRanking": null,
    "facilities": "3 full-size pitches at the University of Limerick campus, dedicated scrummage area with live and machine options, lineout tower, indoor arena for wet-weather training, Munster-standard gym, video analysis room, physio and rehab suite",
    "courtSurfaces": [
      "Natural grass",
      "3G artificial"
    ],
    "notableAlumni": [
      "Peter O’Mahony",
      "Conor Murray",
      "Keith Earls"
    ],
    "photos": [
      "https://picsum.photos/seed/munster-1/800/500",
      "https://picsum.photos/seed/munster-2/800/500",
      "https://picsum.photos/seed/munster-3/800/500"
    ],
    "description": "Based at the University of Limerick’s world-class sports campus, the Munster Rugby Performance Centre embodies the famous Munster spirit. Known for producing tough, passionate forwards and creative backs, this academy combines the province’s legendary rugby culture with modern performance science. The partnership with UL ensures academic and sporting excellence go hand in hand.",
    "ageGroups": [
      "Junior",
      "Adult",
      "Senior"
    ],
    "nearbyHotels": [
      {
        "name": "Castletroy Park Hotel",
        "distance": "1.5 km",
        "priceRange": "€100-170/night"
      },
      {
        "name": "The Strand Hotel",
        "distance": "6 km",
        "priceRange": "€120-200/night"
      }
    ],
    "nearbyRestaurants": [
      {
        "name": "The Scholars Club",
        "distance": "0.3 km",
        "cuisine": "Irish Pub Grub"
      },
      {
        "name": "Freddy’s Bistro",
        "distance": "5 km",
        "cuisine": "Modern Irish"
      }
    ],
    "nearbyMedical": [
      {
        "name": "University Hospital Limerick",
        "distance": "1.5 km",
        "type": "Hospital"
      },
      {
        "name": "Sports Medicine Clinic UL",
        "distance": "0.5 km",
        "type": "Sports Medicine"
      }
    ],
    "costOfLiving": {
      "rent1Bed": 1200,
      "meal": 14,
      "monthlyFood": 300,
      "transport": 80,
      "currency": "EUR",
      "summary": "Limerick is significantly more affordable than Dublin with excellent rugby culture"
    },
    "scholarships": {
      "available": true,
      "details": "Munster Branch development scholarships; UL sports scholarships for combined academic-rugby programmes"
    },
    "visaInfo": {
      "schengen": false,
      "eu": true,
      "visaFreeCountries": "EU/EEA citizens; others require student visa",
      "notes": "Ireland is not in Schengen but is in the EU."
    },
    "airportTransfers": [
      {
        "from": "Shannon Airport (SNN)",
        "method": "Shuttle bus",
        "cost": "€15 one way"
      }
    ],
    "nearbyTournaments": [
      {
        "name": "Munster Schools Senior Cup",
        "distance": "Various",
        "level": "Provincial Youth"
      },
      {
        "name": "Thomond Park URC Matches",
        "distance": "5 km",
        "level": "Professional"
      }
    ],
    "upcomingCamps": [
      {
        "name": "Munster Forward Factory",
        "startDate": "2025-06-16",
        "endDate": "2025-06-27",
        "price": "€1,600",
        "level": "Advanced"
      },
      {
        "name": "Summer Rugby Camp",
        "startDate": "2025-07-14",
        "endDate": "2025-07-25",
        "price": "€1,400",
        "level": "Intermediate"
      }
    ],
    "accommodation": {
      "types": [
        {
          "type": "campus",
          "label": "UL Campus Accommodation",
          "pricePerWeek": 250,
          "maxOccupancy": 2,
          "bathType": "shared",
          "mealsIncluded": true
        },
        {
          "type": "homestay",
          "label": "Host Family",
          "pricePerWeek": 240,
          "maxOccupancy": 1,
          "bathType": "shared",
          "mealsIncluded": true
        }
      ],
      "companionsAllowed": true,
      "childrenAllowed": true,
      "minStay": "2 weeks",
      "shuttleToTraining": true,
      "notes": "UL campus provides a safe, student-friendly environment with all amenities on site."
    },
    "videoTour": null,
    "juniorInfo": {
      "minAge": 13,
      "maxAge": 17,
      "supervision": "24/7",
      "guardianStay": true,
      "schooling": "Links with local schools; study support available",
      "medicalStaff": true,
      "safeguarding": "IRFU and UL dual safeguarding protocols",
      "airportPickup": true,
      "mealPlan": "Full board",
      "curfew": "21:30 weekdays, 22:30 weekends",
      "roommatePairing": "Age-based",
      "languageSupport": [
        "English"
      ],
      "emergencyProtocol": "On-call medical team and 24hr reception"
    },
    "availability": {
      "status": "open",
      "nextIntake": "2025-09-01",
      "spotsLeft": 12,
      "responseTime": "48h",
      "privateLessons": true,
      "yearRound": true
    }
  },
  {
    "id": "ulster-rugby-academy",
    "name": "Ulster Rugby Academy Belfast",
    "country": "Ireland",
    "countryFlag": "🇮🇪",
    "city": "Belfast",
    "lat": 54.5812,
    "lng": -5.937,
    "website": "https://www.ulsterrugby.com/academy",
    "contact": "+44 28 9049 3222",
    "contactEmail": "academy@ulsterrugby.com",
    "individualLessons": true,
    "boarding": false,
    "level": "Provincial Development",
    "starred": false,
    "airport": {
      "name": "Belfast City Airport",
      "code": "BHD",
      "distance": "5 km",
      "driveTime": "10 min"
    },
    "beach": {
      "distance": 15,
      "description": "Helen’s Bay, scenic North Down coastline"
    },
    "climate": "belfast",
    "priceRange": {
      "from": 1400,
      "to": 2400,
      "unit": "month",
      "display": "£1,400 - £2,400/month"
    },
    "socialMedia": {
      "instagram": "",
      "facebook": "",
      "twitter": ""
    },
    "programs": [
      {
        "name": "Provincial Development Programme",
        "price": "£2,400/month",
        "desc": "Pathway into Ulster Rugby underage and senior squads"
      },
      {
        "name": "Back Play Masterclass",
        "price": "£1,800/month",
        "desc": "Specialist training for backs: decision-making, attacking lines, defensive reads"
      },
      {
        "name": "Foundation Skills",
        "price": "£1,400/month",
        "desc": "Core rugby skills for developing players aged 14-18"
      }
    ],
    "coaches": [
      {
        "name": "Rory Best Jr",
        "credential": "World Rugby Level 2",
        "background": "Former Ulster Academy player, specialises in forward play and set piece",
        "atpWta": false,
        "bestRanking": null,
        "rankingNote": null,
        "languages": [
          "English"
        ],
        "instagram": null
      }
    ],
    "bestCoachRanking": null,
    "facilities": "2 full-size pitches at Kingspan Stadium training grounds, scrummage machine, portable lineout equipment, gym, video review room, physiotherapy clinic",
    "courtSurfaces": [
      "Natural grass",
      "3G artificial"
    ],
    "notableAlumni": [
      "Jacob Stockdale",
      "Iain Henderson",
      "Stuart McCloskey"
    ],
    "photos": [
      "https://picsum.photos/seed/ulster-1/800/500",
      "https://picsum.photos/seed/ulster-2/800/500",
      "https://picsum.photos/seed/ulster-3/800/500"
    ],
    "description": "The Ulster Rugby Academy in Belfast provides an excellent development environment in Northern Ireland. With strong links to schools rugby and the Ulster senior setup, players receive coaching that emphasises the physical and tactical demands of modern rugby. The programme has a strong track record of producing Ireland internationals.",
    "ageGroups": [
      "Junior",
      "Adult",
      "Senior"
    ],
    "nearbyHotels": [
      {
        "name": "Maldron Hotel Belfast",
        "distance": "1.0 km",
        "priceRange": "£90-150/night"
      },
      {
        "name": "Europa Hotel",
        "distance": "3.0 km",
        "priceRange": "£100-180/night"
      }
    ],
    "nearbyRestaurants": [
      {
        "name": "The Ramore",
        "distance": "0.8 km",
        "cuisine": "Seafood"
      },
      {
        "name": "Ox Belfast",
        "distance": "3.5 km",
        "cuisine": "Modern Irish"
      }
    ],
    "nearbyMedical": [
      {
        "name": "Royal Victoria Hospital",
        "distance": "4 km",
        "type": "Hospital"
      }
    ],
    "costOfLiving": {
      "rent1Bed": 800,
      "meal": 12,
      "monthlyFood": 280,
      "transport": 65,
      "currency": "GBP",
      "summary": "Belfast is very affordable by UK and Irish standards with a strong rugby community"
    },
    "scholarships": {
      "available": true,
      "details": "Ulster Branch development grants; Queens University Belfast sports scholarships"
    },
    "visaInfo": {
      "schengen": false,
      "eu": false,
      "visaFreeCountries": "UK/Irish citizens; others require UK student visa",
      "notes": "Belfast is in Northern Ireland (UK). Irish citizens have full rights under Common Travel Area."
    },
    "airportTransfers": [
      {
        "from": "Belfast City Airport (BHD)",
        "method": "Taxi",
        "cost": "£10-15"
      }
    ],
    "nearbyTournaments": [
      {
        "name": "Ulster Schools Cup",
        "distance": "Various",
        "level": "Provincial Youth"
      },
      {
        "name": "Kingspan Stadium URC",
        "distance": "0 km",
        "level": "Professional"
      }
    ],
    "upcomingCamps": [],
    "accommodation": {
      "types": [
        {
          "type": "apartment",
          "label": "City Centre Apartment",
          "pricePerWeek": 200,
          "maxOccupancy": 2,
          "bathType": "ensuite",
          "mealsIncluded": false
        }
      ],
      "companionsAllowed": true,
      "childrenAllowed": false,
      "minStay": "1 month",
      "shuttleToTraining": false,
      "notes": "Day programme only; accommodation recommendations provided but not managed by academy."
    },
    "videoTour": null,
    "juniorInfo": {
      "minAge": 14,
      "maxAge": 18,
      "supervision": "daytime",
      "guardianStay": false,
      "schooling": "Links with local grammar schools",
      "medicalStaff": true,
      "safeguarding": "IRFU and UK safeguarding certified",
      "airportPickup": false,
      "mealPlan": "Lunch provided on training days",
      "curfew": null,
      "roommatePairing": null,
      "languageSupport": [
        "English"
      ],
      "emergencyProtocol": "On-site first aider and emergency contacts"
    },
    "availability": {
      "status": "open",
      "nextIntake": "2026-01-01",
      "spotsLeft": 18,
      "responseTime": "3-5 days",
      "privateLessons": true,
      "yearRound": false
    }
  },
  {
    "id": "toulouse-rugby-elite",
    "name": "Stade Toulousain École de Rugby",
    "country": "France",
    "countryFlag": "🇫🇷",
    "city": "Toulouse",
    "lat": 43.5833,
    "lng": 1.4333,
    "website": "https://www.stadetoulousain.fr/ecole-rugby",
    "contact": "+33 5 61 21 60 60",
    "contactEmail": "ecole@stadetoulousain.fr",
    "individualLessons": true,
    "boarding": {
      "available": true,
      "ageRequirement": "14+"
    },
    "level": "Elite / Professional",
    "starred": true,
    "airport": {
      "name": "Toulouse-Blagnac Airport",
      "code": "TLS",
      "distance": "10 km",
      "driveTime": "20 min"
    },
    "beach": {
      "distance": null,
      "description": "No nearby beach; Canal du Midi for outdoor recovery sessions"
    },
    "climate": "toulouse",
    "priceRange": {
      "from": 2000,
      "to": 3500,
      "unit": "month",
      "display": "€2,000 - €3,500/month"
    },
    "socialMedia": {
      "instagram": "",
      "facebook": "",
      "twitter": ""
    },
    "programs": [
      {
        "name": "Centre de Formation Elite",
        "price": "€3,500/month",
        "desc": "Professional formation pathway modelled on the Stade Toulousain senior programme"
      },
      {
        "name": "Stage de Perfectionnement",
        "price": "€2,000/month",
        "desc": "Technical and tactical improvement camp for competitive players"
      },
      {
        "name": "Découverte Rugby",
        "price": "€1,200/month",
        "desc": "Introduction to French rugby methodology for international players"
      }
    ],
    "coaches": [
      {
        "name": "Jean-Baptiste Lacroix",
        "credential": "Brevet d’État Niveau 3",
        "background": "Former Top 14 scrum-half with Toulouse and Castres, 180+ professional appearances",
        "atpWta": false,
        "bestRanking": null,
        "rankingNote": null,
        "languages": [
          "French",
          "English",
          "Spanish"
        ],
        "instagram": null
      },
      {
        "name": "Marie Duval",
        "credential": "FFR Elite Coach Certificate",
        "background": "Former France Women’s fly-half, 40 international caps, World Cup 2017",
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
    "bestCoachRanking": null,
    "facilities": "6 pitches including Ernest-Wallon training complex, professional-grade scrummage machines, lineout practice area with hydraulic platform, indoor training facility, state-of-the-art gym, GPS tracking and video analysis lab, hydrotherapy and recovery centre, medical suite",
    "courtSurfaces": [
      "Natural grass",
      "Hybrid pitch",
      "Indoor synthetic"
    ],
    "notableAlumni": [
      "Antoine Dupont",
      "Thomas Ramos",
      "Julien Marchand"
    ],
    "photos": [
      "https://picsum.photos/seed/toulouse-r-1/800/500",
      "https://picsum.photos/seed/toulouse-r-2/800/500",
      "https://picsum.photos/seed/toulouse-r-3/800/500"
    ],
    "description": "Train at the most successful club in European rugby history. The Stade Toulousain École de Rugby offers unparalleled access to French rugby’s finest coaching methodology in the pink city of Toulouse. With a legacy that includes numerous Top 14 and Champions Cup titles, the academy’s philosophy emphasises flair, creativity, and technical excellence – the hallmarks of Toulouse rugby.",
    "ageGroups": [
      "Junior",
      "Adult",
      "Senior"
    ],
    "nearbyHotels": [
      {
        "name": "Hôtel Crowne Plaza",
        "distance": "2.0 km",
        "priceRange": "€110-190/night"
      },
      {
        "name": "Citiz Hotel",
        "distance": "3.5 km",
        "priceRange": "€70-120/night"
      }
    ],
    "nearbyRestaurants": [
      {
        "name": "Le Bibent",
        "distance": "4 km",
        "cuisine": "French Brasserie"
      },
      {
        "name": "Chez Navarre",
        "distance": "3 km",
        "cuisine": "Southwest French"
      }
    ],
    "nearbyMedical": [
      {
        "name": "Clinique du Sport",
        "distance": "3 km",
        "type": "Sports Medicine"
      },
      {
        "name": "CHU Toulouse",
        "distance": "5 km",
        "type": "Hospital"
      }
    ],
    "costOfLiving": {
      "rent1Bed": 700,
      "meal": 13,
      "monthlyFood": 280,
      "transport": 55,
      "currency": "EUR",
      "summary": "Toulouse offers excellent value for a major French city with a vibrant student culture"
    },
    "scholarships": {
      "available": true,
      "details": "FFR talent detection bursaries; club-funded scholarships for exceptional prospects"
    },
    "visaInfo": {
      "schengen": true,
      "eu": true,
      "visaFreeCountries": "EU/EEA/Schengen zone citizens",
      "notes": "Non-EU players require a long-stay student visa (VLS-TS) for programmes over 90 days"
    },
    "airportTransfers": [
      {
        "from": "Toulouse-Blagnac (TLS)",
        "method": "Tram + shuttle",
        "cost": "€5-10"
      }
    ],
    "nearbyTournaments": [
      {
        "name": "Top 14 Matches at Ernest-Wallon",
        "distance": "0 km",
        "level": "Professional"
      },
      {
        "name": "France U20 Selections",
        "distance": "Regional",
        "level": "International Youth"
      }
    ],
    "upcomingCamps": [
      {
        "name": "Stage Pâques",
        "startDate": "2025-04-07",
        "endDate": "2025-04-18",
        "price": "€1,800",
        "level": "Advanced"
      },
      {
        "name": "Été Rugby Camp",
        "startDate": "2025-07-01",
        "endDate": "2025-07-18",
        "price": "€2,800",
        "level": "Elite"
      }
    ],
    "accommodation": {
      "types": [
        {
          "type": "residence",
          "label": "Centre de Formation Residence",
          "pricePerWeek": 300,
          "maxOccupancy": 2,
          "bathType": "ensuite",
          "mealsIncluded": true
        },
        {
          "type": "apartment",
          "label": "City Apartment",
          "pricePerWeek": 220,
          "maxOccupancy": 2,
          "bathType": "ensuite",
          "mealsIncluded": false
        }
      ],
      "companionsAllowed": false,
      "childrenAllowed": true,
      "minStay": "1 month",
      "shuttleToTraining": true,
      "notes": "Centre de Formation residence priority for full-time academy players. French language support included."
    },
    "videoTour": null,
    "juniorInfo": {
      "minAge": 14,
      "maxAge": 18,
      "supervision": "24/7",
      "guardianStay": false,
      "schooling": "Integrated schooling at lycée partenaire with adjusted timetable",
      "medicalStaff": true,
      "safeguarding": "FFR safeguarding certification; monitored environment",
      "airportPickup": true,
      "mealPlan": "Full board with nutritionist-designed menus",
      "curfew": "21:30 weekdays, 22:30 weekends",
      "roommatePairing": "Age and position based",
      "languageSupport": [
        "French primary; English and Spanish available"
      ],
      "emergencyProtocol": "24/7 medical team; hospital 5 min by car"
    },
    "availability": {
      "status": "waitlist",
      "nextIntake": "2025-09-01",
      "spotsLeft": 3,
      "responseTime": "1 week",
      "privateLessons": true,
      "yearRound": true
    }
  },
  {
    "id": "racing-metro-academy",
    "name": "Racing 92 Rugby Academy",
    "country": "France",
    "countryFlag": "🇫🇷",
    "city": "Paris",
    "lat": 48.8925,
    "lng": 2.2244,
    "website": "https://www.racing92.fr/academy",
    "contact": "+33 1 46 91 02 02",
    "contactEmail": "academy@racing92.fr",
    "individualLessons": true,
    "boarding": {
      "available": true,
      "ageRequirement": "16+"
    },
    "level": "Elite / Professional",
    "starred": false,
    "airport": {
      "name": "Paris Charles de Gaulle",
      "code": "CDG",
      "distance": "35 km",
      "driveTime": "45 min"
    },
    "beach": {
      "distance": null,
      "description": "No nearby beach; Seine riverside recovery runs available"
    },
    "climate": "paris",
    "priceRange": {
      "from": 2200,
      "to": 3800,
      "unit": "month",
      "display": "€2,200 - €3,800/month"
    },
    "socialMedia": {
      "instagram": "",
      "facebook": "",
      "twitter": ""
    },
    "programs": [
      {
        "name": "Formation Professionnelle",
        "price": "€3,800/month",
        "desc": "Full professional development programme with Top 14 coaching staff involvement"
      },
      {
        "name": "International Player Programme",
        "price": "€2,500/month",
        "desc": "Tailored for overseas players integrating into French rugby system"
      },
      {
        "name": "Back Line Excellence",
        "price": "€2,200/month",
        "desc": "Specialist backs coaching: running lines, distribution, tactical kicking"
      }
    ],
    "coaches": [
      {
        "name": "Maxime Delporte",
        "credential": "Brevet d’État Niveau 3",
        "background": "Former Racing 92 centre, Top 14 champion, 15 years coaching experience",
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
    "bestCoachRanking": null,
    "facilities": "Training centre at Le Plessis-Robinson, 3 pitches, Paris La Défense Arena access for select sessions, modern gym, scrummage machines, video analysis lab, recovery pool",
    "courtSurfaces": [
      "Natural grass",
      "Hybrid pitch"
    ],
    "notableAlumni": [
      "Virimi Vakatawa",
      "Camille Chat",
      "Teddy Thomas"
    ],
    "photos": [
      "https://picsum.photos/seed/racing92-1/800/500",
      "https://picsum.photos/seed/racing92-2/800/500",
      "https://picsum.photos/seed/racing92-3/800/500"
    ],
    "description": "Racing 92’s academy in Paris offers a unique blend of elite rugby and cosmopolitan city life. Based near the futuristic Paris La Défense Arena, the academy attracts international talent and provides a multicultural training environment with world-class facilities and coaching.",
    "ageGroups": [
      "Junior",
      "Adult",
      "Senior"
    ],
    "nearbyHotels": [
      {
        "name": "Citadines La Défense",
        "distance": "3 km",
        "priceRange": "€100-180/night"
      },
      {
        "name": "Hotel Mercure Paris",
        "distance": "5 km",
        "priceRange": "€120-200/night"
      }
    ],
    "nearbyRestaurants": [
      {
        "name": "Les Deux Magots",
        "distance": "10 km",
        "cuisine": "French Classic"
      },
      {
        "name": "Le Petit Cler",
        "distance": "8 km",
        "cuisine": "French Bistro"
      }
    ],
    "nearbyMedical": [
      {
        "name": "Hôpital Ambroise Paré",
        "distance": "3 km",
        "type": "Hospital"
      }
    ],
    "costOfLiving": {
      "rent1Bed": 1400,
      "meal": 15,
      "monthlyFood": 350,
      "transport": 75,
      "currency": "EUR",
      "summary": "Paris is expensive but the western suburbs where training is based are more affordable"
    },
    "scholarships": {
      "available": false,
      "details": "No formal scholarship programme; individual sponsorship arrangements considered"
    },
    "visaInfo": {
      "schengen": true,
      "eu": true,
      "visaFreeCountries": "EU/EEA/Schengen zone citizens",
      "notes": "Long-stay visa required for non-EU nationals"
    },
    "airportTransfers": [
      {
        "from": "Paris CDG (CDG)",
        "method": "RER train + shuttle",
        "cost": "€12-15"
      },
      {
        "from": "Paris Orly (ORY)",
        "method": "Shuttle",
        "cost": "€20"
      }
    ],
    "nearbyTournaments": [
      {
        "name": "Top 14 at La Défense Arena",
        "distance": "2 km",
        "level": "Professional"
      },
      {
        "name": "Six Nations at Stade de France",
        "distance": "15 km",
        "level": "International"
      }
    ],
    "upcomingCamps": [
      {
        "name": "International Integration Camp",
        "startDate": "2025-08-18",
        "endDate": "2025-08-29",
        "price": "€2,200",
        "level": "Advanced"
      }
    ],
    "accommodation": {
      "types": [
        {
          "type": "residence",
          "label": "Academy Residence",
          "pricePerWeek": 380,
          "maxOccupancy": 1,
          "bathType": "ensuite",
          "mealsIncluded": true
        }
      ],
      "companionsAllowed": false,
      "childrenAllowed": false,
      "minStay": "1 month",
      "shuttleToTraining": true,
      "notes": "Limited residential spots; early application recommended."
    },
    "videoTour": null,
    "juniorInfo": {
      "minAge": 16,
      "maxAge": 18,
      "supervision": "daytime",
      "guardianStay": false,
      "schooling": "Partnership with local lycée",
      "medicalStaff": true,
      "safeguarding": "FFR certified",
      "airportPickup": true,
      "mealPlan": "Full board",
      "curfew": "22:00",
      "roommatePairing": "Single rooms",
      "languageSupport": [
        "French and English"
      ],
      "emergencyProtocol": "Hospital 3km; on-site doctor during training"
    },
    "availability": {
      "status": "open",
      "nextIntake": "2025-09-01",
      "spotsLeft": 8,
      "responseTime": "1 week",
      "privateLessons": true,
      "yearRound": true
    }
  },
  {
    "id": "asm-clermont-academy",
    "name": "ASM Clermont Auvergne Academy",
    "country": "France",
    "countryFlag": "🇫🇷",
    "city": "Clermont-Ferrand",
    "lat": 45.7867,
    "lng": 3.1017,
    "website": "https://www.asm-rugby.com/academy",
    "contact": "+33 4 73 42 12 12",
    "contactEmail": "academy@asm-rugby.com",
    "individualLessons": true,
    "boarding": {
      "available": true,
      "ageRequirement": "15+"
    },
    "level": "Professional Academy",
    "starred": false,
    "airport": {
      "name": "Clermont-Ferrand Auvergne Airport",
      "code": "CFE",
      "distance": "7 km",
      "driveTime": "15 min"
    },
    "beach": {
      "distance": null,
      "description": "No nearby beach; volcanic lakes for outdoor training"
    },
    "climate": "clermont-ferrand",
    "priceRange": {
      "from": 1600,
      "to": 2800,
      "unit": "month",
      "display": "€1,600 - €2,800/month"
    },
    "socialMedia": {
      "instagram": "",
      "facebook": "",
      "twitter": ""
    },
    "programs": [
      {
        "name": "Centre de Formation",
        "price": "€2,800/month",
        "desc": "Full professional pathway within the ASM system, known for producing powerful forwards"
      },
      {
        "name": "Athletic Development",
        "price": "€1,600/month",
        "desc": "S&C focused programme leveraging Clermont’s famous physicality philosophy"
      }
    ],
    "coaches": [
      {
        "name": "Julien Bonnaire",
        "credential": "Brevet d’État Niveau 2",
        "background": "Former ASM and France flanker, 46 international caps, renowned for breakdown expertise",
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
    "bestCoachRanking": null,
    "facilities": "Marcel-Michelin training complex, 4 pitches, altitude training capability, scrummage area, weights room, video analysis, hydrotherapy pool, physiotherapy suite",
    "courtSurfaces": [
      "Natural grass",
      "4G artificial"
    ],
    "notableAlumni": [
      "Wesley Fofana",
      "Morgan Parra",
      "Alivereti Raka"
    ],
    "photos": [
      "https://picsum.photos/seed/asm-1/800/500",
      "https://picsum.photos/seed/asm-2/800/500",
      "https://picsum.photos/seed/asm-3/800/500"
    ],
    "description": "Nestled in the heart of volcanic Auvergne, ASM Clermont’s academy reflects the club’s reputation for raw power and relentless physicality. The unique altitude environment provides natural conditioning benefits, while the passionate local rugby culture creates an immersive development experience unlike any other in France.",
    "ageGroups": [
      "Junior",
      "Adult",
      "Senior"
    ],
    "nearbyHotels": [
      {
        "name": "Hotel Oceania",
        "distance": "2 km",
        "priceRange": "€80-130/night"
      },
      {
        "name": "Novotel Clermont-Ferrand",
        "distance": "3 km",
        "priceRange": "€90-150/night"
      }
    ],
    "nearbyRestaurants": [
      {
        "name": "L’Alambic",
        "distance": "2 km",
        "cuisine": "Auvergnat"
      },
      {
        "name": "Le Chardonnay",
        "distance": "2.5 km",
        "cuisine": "French Bistro"
      }
    ],
    "nearbyMedical": [
      {
        "name": "CHU Clermont-Ferrand",
        "distance": "3 km",
        "type": "Hospital"
      }
    ],
    "costOfLiving": {
      "rent1Bed": 550,
      "meal": 12,
      "monthlyFood": 250,
      "transport": 45,
      "currency": "EUR",
      "summary": "Very affordable city with a tight-knit rugby community and excellent quality of life"
    },
    "scholarships": {
      "available": true,
      "details": "Club-funded bursaries for French federation identified talent"
    },
    "visaInfo": {
      "schengen": true,
      "eu": true,
      "visaFreeCountries": "EU/EEA/Schengen zone citizens",
      "notes": "Standard French visa requirements for non-EU nationals"
    },
    "airportTransfers": [
      {
        "from": "Clermont-Ferrand Airport (CFE)",
        "method": "Shuttle",
        "cost": "€8"
      }
    ],
    "nearbyTournaments": [
      {
        "name": "Top 14 at Stade Marcel-Michelin",
        "distance": "0 km",
        "level": "Professional"
      }
    ],
    "upcomingCamps": [
      {
        "name": "Volcanic Power Camp",
        "startDate": "2025-07-07",
        "endDate": "2025-07-18",
        "price": "€1,500",
        "level": "Intermediate-Advanced"
      }
    ],
    "accommodation": {
      "types": [
        {
          "type": "residence",
          "label": "Centre de Formation Housing",
          "pricePerWeek": 220,
          "maxOccupancy": 2,
          "bathType": "shared",
          "mealsIncluded": true
        }
      ],
      "companionsAllowed": false,
      "childrenAllowed": true,
      "minStay": "1 month",
      "shuttleToTraining": true,
      "notes": "Residential life centred around team culture and structured daily routine."
    },
    "videoTour": null,
    "juniorInfo": {
      "minAge": 15,
      "maxAge": 18,
      "supervision": "24/7",
      "guardianStay": false,
      "schooling": "Integrated with local lycée",
      "medicalStaff": true,
      "safeguarding": "FFR standards",
      "airportPickup": true,
      "mealPlan": "Full board",
      "curfew": "21:30",
      "roommatePairing": "Age-based pairs",
      "languageSupport": [
        "French primary; basic English support"
      ],
      "emergencyProtocol": "CHU hospital 3km; team doctor on call"
    },
    "availability": {
      "status": "open",
      "nextIntake": "2025-08-01",
      "spotsLeft": 10,
      "responseTime": "1 week",
      "privateLessons": false,
      "yearRound": true
    }
  },
  {
    "id": "bath-rugby-academy",
    "name": "Bath Rugby Academy",
    "country": "England",
    "countryFlag": "🇬🇧",
    "city": "Bath",
    "lat": 51.3811,
    "lng": -2.359,
    "website": "https://www.bathrugby.com/academy",
    "contact": "+44 1225 325 200",
    "contactEmail": "academy@bathrugby.com",
    "individualLessons": true,
    "boarding": {
      "available": true,
      "ageRequirement": "16+"
    },
    "level": "Premiership Academy",
    "starred": true,
    "airport": {
      "name": "Bristol Airport",
      "code": "BRS",
      "distance": "30 km",
      "driveTime": "35 min"
    },
    "beach": {
      "distance": 50,
      "description": "Weston-super-Mare, classic English seaside"
    },
    "climate": "bath",
    "priceRange": {
      "from": 2000,
      "to": 3500,
      "unit": "month",
      "display": "£2,000 - £3,500/month"
    },
    "socialMedia": {
      "instagram": "",
      "facebook": "",
      "twitter": ""
    },
    "programs": [
      {
        "name": "Premiership Pathway",
        "price": "£3,500/month",
        "desc": "Full-time professional academy programme aligned with Bath Rugby first team"
      },
      {
        "name": "Performance Rugby Camp",
        "price": "£2,000/month",
        "desc": "Intensive skills and conditioning camp for aspiring professional players"
      },
      {
        "name": "International Experience Programme",
        "price": "£2,500/month",
        "desc": "Designed for overseas players wanting exposure to English Premiership rugby"
      }
    ],
    "coaches": [
      {
        "name": "Tom Harrison",
        "credential": "RFU Level 4",
        "background": "Former Bath and England Saxons hooker, 150+ Premiership appearances, lineout specialist",
        "atpWta": false,
        "bestRanking": null,
        "rankingNote": null,
        "languages": [
          "English"
        ],
        "instagram": null
      },
      {
        "name": "Emily Campbell",
        "credential": "World Rugby Educator",
        "background": "Former England Women’s flanker, 30 caps, specialises in breakdown coaching",
        "atpWta": false,
        "bestRanking": null,
        "rankingNote": null,
        "languages": [
          "English",
          "Welsh"
        ],
        "instagram": null
      }
    ],
    "bestCoachRanking": null,
    "facilities": "Farleigh House training ground with 5 pitches, Rec adjacent training area, professional scrummage machines, lineout platform, cutting-edge gym, video analysis suite, cryotherapy, hydrotherapy pool, medical centre",
    "courtSurfaces": [
      "Natural grass",
      "4G artificial",
      "Indoor surface"
    ],
    "notableAlumni": [
      "Sam Underhill",
      "Anthony Watson",
      "Freddie Burns"
    ],
    "photos": [
      "https://picsum.photos/seed/bath-r-1/800/500",
      "https://picsum.photos/seed/bath-r-2/800/500",
      "https://picsum.photos/seed/bath-r-3/800/500"
    ],
    "description": "Bath Rugby Academy operates from the historic city of Bath, combining centuries of sporting tradition with modern elite player development. The Farleigh House facility provides a secluded, professional environment where players can focus entirely on their development. Bath’s academy has a proud history of producing England internationals and British & Irish Lions.",
    "ageGroups": [
      "Junior",
      "Adult",
      "Senior"
    ],
    "nearbyHotels": [
      {
        "name": "The Royal Crescent Hotel",
        "distance": "3 km",
        "priceRange": "£180-350/night"
      },
      {
        "name": "Travelodge Bath",
        "distance": "2 km",
        "priceRange": "£60-100/night"
      }
    ],
    "nearbyRestaurants": [
      {
        "name": "The Pump Room",
        "distance": "3 km",
        "cuisine": "English Fine Dining"
      },
      {
        "name": "Sotto Sotto",
        "distance": "3 km",
        "cuisine": "Italian"
      }
    ],
    "nearbyMedical": [
      {
        "name": "Royal United Hospital Bath",
        "distance": "4 km",
        "type": "Hospital"
      },
      {
        "name": "Bath Sports Injury Clinic",
        "distance": "2 km",
        "type": "Sports Medicine"
      }
    ],
    "costOfLiving": {
      "rent1Bed": 1000,
      "meal": 14,
      "monthlyFood": 300,
      "transport": 65,
      "currency": "GBP",
      "summary": "Bath is a beautiful but moderately expensive city; good transport links to Bristol and London"
    },
    "scholarships": {
      "available": true,
      "details": "RFU funded places for England pathway players; limited bursaries for overseas applicants"
    },
    "visaInfo": {
      "schengen": false,
      "eu": false,
      "visaFreeCountries": "UK citizens and settled residents",
      "notes": "International players require a UK Student Visa or Sportsperson Visa"
    },
    "airportTransfers": [
      {
        "from": "Bristol Airport (BRS)",
        "method": "Coach service",
        "cost": "£15-20"
      }
    ],
    "nearbyTournaments": [
      {
        "name": "Premiership at The Rec",
        "distance": "0 km",
        "level": "Professional"
      },
      {
        "name": "Premiership Rugby Cup",
        "distance": "Various",
        "level": "Professional"
      }
    ],
    "upcomingCamps": [
      {
        "name": "Easter Rugby Intensive",
        "startDate": "2025-04-07",
        "endDate": "2025-04-17",
        "price": "£1,200",
        "level": "Advanced"
      },
      {
        "name": "Summer Academy Experience",
        "startDate": "2025-07-14",
        "endDate": "2025-08-01",
        "price": "£2,800",
        "level": "Elite"
      }
    ],
    "accommodation": {
      "types": [
        {
          "type": "residence",
          "label": "Farleigh House Residence",
          "pricePerWeek": 400,
          "maxOccupancy": 2,
          "bathType": "ensuite",
          "mealsIncluded": true
        },
        {
          "type": "homestay",
          "label": "Bath Host Family",
          "pricePerWeek": 300,
          "maxOccupancy": 1,
          "bathType": "shared",
          "mealsIncluded": true
        }
      ],
      "companionsAllowed": true,
      "childrenAllowed": true,
      "minStay": "2 weeks",
      "shuttleToTraining": true,
      "notes": "Farleigh House is set in stunning countryside 10 minutes from Bath city centre."
    },
    "videoTour": null,
    "juniorInfo": {
      "minAge": 14,
      "maxAge": 18,
      "supervision": "24/7",
      "guardianStay": true,
      "schooling": "Partnership with Bath schools; flexible scheduling",
      "medicalStaff": true,
      "safeguarding": "RFU and DBS certified staff",
      "airportPickup": true,
      "mealPlan": "Full board",
      "curfew": "21:30 weekdays, 22:30 weekends",
      "roommatePairing": "Age and position",
      "languageSupport": [
        "English; EAL support available"
      ],
      "emergencyProtocol": "RUH Bath 4km; on-site physio and doctor"
    },
    "availability": {
      "status": "limited spots",
      "nextIntake": "2025-09-01",
      "spotsLeft": 5,
      "responseTime": "48h",
      "privateLessons": true,
      "yearRound": true
    }
  },
  {
    "id": "northampton-saints-academy",
    "name": "Northampton Saints Rugby Academy",
    "country": "England",
    "countryFlag": "🇬🇧",
    "city": "Northampton",
    "lat": 52.235,
    "lng": -0.895,
    "website": "https://www.northamptonsaints.co.uk/academy",
    "contact": "+44 1604 751 543",
    "contactEmail": "academy@northamptonsaints.co.uk",
    "individualLessons": true,
    "boarding": false,
    "level": "Premiership Academy",
    "starred": false,
    "airport": {
      "name": "Birmingham Airport",
      "code": "BHX",
      "distance": "75 km",
      "driveTime": "60 min"
    },
    "beach": {
      "distance": null,
      "description": "No nearby beach; landlocked Midlands location"
    },
    "climate": "northampton",
    "priceRange": {
      "from": 1600,
      "to": 2800,
      "unit": "month",
      "display": "£1,600 - £2,800/month"
    },
    "socialMedia": {
      "instagram": "",
      "facebook": "",
      "twitter": ""
    },
    "programs": [
      {
        "name": "Saints Academy Programme",
        "price": "£2,800/month",
        "desc": "Structured development programme feeding into Northampton Saints senior squad"
      },
      {
        "name": "Set Piece Mastery",
        "price": "£1,600/month",
        "desc": "Specialist scrum and lineout training, a Saints trademark"
      }
    ],
    "coaches": [
      {
        "name": "Phil Dowson",
        "credential": "RFU Level 4",
        "background": "Former Northampton Saints and England back row, 200+ Premiership caps, forwards specialist",
        "atpWta": false,
        "bestRanking": null,
        "rankingNote": null,
        "languages": [
          "English"
        ],
        "instagram": null
      }
    ],
    "bestCoachRanking": null,
    "facilities": "Franklin’s Gardens training complex, 3 pitches, indoor training barn, professional scrummage machines, gym, video analysis room, physio suite",
    "courtSurfaces": [
      "Natural grass",
      "3G artificial"
    ],
    "notableAlumni": [
      "Courtney Lawes",
      "Lewis Ludlam",
      "George Furbank"
    ],
    "photos": [
      "https://picsum.photos/seed/saints-1/800/500",
      "https://picsum.photos/seed/saints-2/800/500",
      "https://picsum.photos/seed/saints-3/800/500"
    ],
    "description": "Northampton Saints have one of the most respected academies in English rugby, producing a consistent pipeline of Premiership and international players. Based at the iconic Franklin’s Gardens, the academy benefits from the club’s strong community roots and reputation for developing powerful, intelligent forwards.",
    "ageGroups": [
      "Junior",
      "Adult",
      "Senior"
    ],
    "nearbyHotels": [
      {
        "name": "Hilton Northampton",
        "distance": "2 km",
        "priceRange": "£80-140/night"
      },
      {
        "name": "Park Inn by Radisson",
        "distance": "1.5 km",
        "priceRange": "£70-120/night"
      }
    ],
    "nearbyRestaurants": [
      {
        "name": "The Church Bar",
        "distance": "1 km",
        "cuisine": "British Gastropub"
      },
      {
        "name": "Becketts",
        "distance": "1.5 km",
        "cuisine": "Modern British"
      }
    ],
    "nearbyMedical": [
      {
        "name": "Northampton General Hospital",
        "distance": "3 km",
        "type": "Hospital"
      }
    ],
    "costOfLiving": {
      "rent1Bed": 750,
      "meal": 12,
      "monthlyFood": 270,
      "transport": 60,
      "currency": "GBP",
      "summary": "Northampton is affordable by English standards with excellent transport links to London"
    },
    "scholarships": {
      "available": true,
      "details": "RFU pathway funding; limited club bursaries"
    },
    "visaInfo": {
      "schengen": false,
      "eu": false,
      "visaFreeCountries": "UK citizens",
      "notes": "UK Student or Sportsperson Visa required for international players"
    },
    "airportTransfers": [
      {
        "from": "Birmingham Airport (BHX)",
        "method": "Train + taxi",
        "cost": "£30-40"
      }
    ],
    "nearbyTournaments": [
      {
        "name": "Premiership at Franklin’s Gardens",
        "distance": "0 km",
        "level": "Professional"
      }
    ],
    "upcomingCamps": [],
    "accommodation": {
      "types": [
        {
          "type": "apartment",
          "label": "Town Centre Flat",
          "pricePerWeek": 200,
          "maxOccupancy": 2,
          "bathType": "ensuite",
          "mealsIncluded": false
        }
      ],
      "companionsAllowed": true,
      "childrenAllowed": false,
      "minStay": "1 month",
      "shuttleToTraining": false,
      "notes": "Day programme; housing assistance provided for relocating players."
    },
    "videoTour": null,
    "juniorInfo": {
      "minAge": 14,
      "maxAge": 18,
      "supervision": "daytime",
      "guardianStay": false,
      "schooling": "Links with Northampton School for Boys and other local schools",
      "medicalStaff": true,
      "safeguarding": "RFU and DBS checked",
      "airportPickup": false,
      "mealPlan": "Lunch on training days",
      "curfew": null,
      "roommatePairing": null,
      "languageSupport": [
        "English"
      ],
      "emergencyProtocol": "NGH 3km; club physio on site"
    },
    "availability": {
      "status": "open",
      "nextIntake": "2025-09-01",
      "spotsLeft": 15,
      "responseTime": "3-5 days",
      "privateLessons": true,
      "yearRound": false
    }
  },
  {
    "id": "cardiff-rugby-academy",
    "name": "Cardiff Rugby Academy",
    "country": "Wales",
    "countryFlag": "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
    "city": "Cardiff",
    "lat": 51.4784,
    "lng": -3.1825,
    "website": "https://www.cardiffrugby.wales/academy",
    "contact": "+44 29 2030 2000",
    "contactEmail": "academy@cardiffrugby.wales",
    "individualLessons": true,
    "boarding": {
      "available": true,
      "ageRequirement": "16+"
    },
    "level": "Regional Academy / WRU Pathway",
    "starred": false,
    "airport": {
      "name": "Cardiff Airport",
      "code": "CWL",
      "distance": "20 km",
      "driveTime": "30 min"
    },
    "beach": {
      "distance": 25,
      "description": "Barry Island, popular Welsh seaside destination"
    },
    "climate": "cardiff",
    "priceRange": {
      "from": 1400,
      "to": 2600,
      "unit": "month",
      "display": "£1,400 - £2,600/month"
    },
    "socialMedia": {
      "instagram": "",
      "facebook": "",
      "twitter": ""
    },
    "programs": [
      {
        "name": "WRU Regional Pathway",
        "price": "£2,600/month",
        "desc": "Welsh Rugby Union endorsed development programme feeding into regional and national squads"
      },
      {
        "name": "Contact Skills Programme",
        "price": "£1,800/month",
        "desc": "Tackling technique, breakdown work, and defensive systems"
      },
      {
        "name": "Development Programme",
        "price": "£1,400/month",
        "desc": "General rugby development for aspiring players aged 14-18"
      }
    ],
    "coaches": [
      {
        "name": "Gethin Jenkins",
        "credential": "WRU Level 3",
        "background": "Former Wales and Lions loosehead prop, 129 Welsh caps, 5 Lions caps, 3 World Cups",
        "atpWta": false,
        "bestRanking": null,
        "rankingNote": null,
        "languages": [
          "English",
          "Welsh"
        ],
        "instagram": null
      },
      {
        "name": "Elinor Snowsill",
        "credential": "World Rugby Coach Educator",
        "background": "Former Wales Women’s fly-half, 30+ caps, World Cup experience",
        "atpWta": false,
        "bestRanking": null,
        "rankingNote": null,
        "languages": [
          "English",
          "Welsh"
        ],
        "instagram": null
      }
    ],
    "bestCoachRanking": null,
    "facilities": "Cardiff Arms Park training facilities, 3 pitches, indoor training area, scrummage machines, lineout practice, gym, video analysis, recovery pool, medical room adjacent to Principality Stadium",
    "courtSurfaces": [
      "Natural grass",
      "4G artificial"
    ],
    "notableAlumni": [
      "Gareth Anscombe",
      "Josh Adams",
      "Tomos Williams"
    ],
    "photos": [
      "https://picsum.photos/seed/cardiff-r-1/800/500",
      "https://picsum.photos/seed/cardiff-r-2/800/500",
      "https://picsum.photos/seed/cardiff-r-3/800/500"
    ],
    "description": "Cardiff Rugby Academy sits at the heart of Welsh rugby, just steps from the iconic Principality Stadium. As one of the four WRU regional academies, it provides a direct pathway into Welsh professional rugby and international selection. The city’s deep rugby heritage and passionate fanbase create an inspiring environment for player development.",
    "ageGroups": [
      "Junior",
      "Adult",
      "Senior"
    ],
    "nearbyHotels": [
      {
        "name": "Clayton Hotel Cardiff",
        "distance": "0.5 km",
        "priceRange": "£90-160/night"
      },
      {
        "name": "Mercure Cardiff Holland House",
        "distance": "0.8 km",
        "priceRange": "£80-140/night"
      }
    ],
    "nearbyRestaurants": [
      {
        "name": "Potted Pig",
        "distance": "0.3 km",
        "cuisine": "Modern Welsh"
      },
      {
        "name": "Chai Street",
        "distance": "0.5 km",
        "cuisine": "Indian Street Food"
      }
    ],
    "nearbyMedical": [
      {
        "name": "University Hospital of Wales",
        "distance": "3 km",
        "type": "Hospital"
      },
      {
        "name": "Cardiff Sports Medicine Clinic",
        "distance": "1.5 km",
        "type": "Sports Medicine"
      }
    ],
    "costOfLiving": {
      "rent1Bed": 800,
      "meal": 12,
      "monthlyFood": 270,
      "transport": 60,
      "currency": "GBP",
      "summary": "Cardiff is one of the most affordable UK capitals with vibrant nightlife and strong rugby culture"
    },
    "scholarships": {
      "available": true,
      "details": "WRU funded pathway places; limited bursaries for international applicants"
    },
    "visaInfo": {
      "schengen": false,
      "eu": false,
      "visaFreeCountries": "UK citizens",
      "notes": "Wales is in the UK; standard UK visa requirements apply"
    },
    "airportTransfers": [
      {
        "from": "Cardiff Airport (CWL)",
        "method": "Bus T9",
        "cost": "£5-8"
      },
      {
        "from": "Bristol Airport (BRS)",
        "method": "Coach",
        "cost": "£20"
      }
    ],
    "nearbyTournaments": [
      {
        "name": "URC at Cardiff Arms Park",
        "distance": "0 km",
        "level": "Professional"
      },
      {
        "name": "Six Nations at Principality Stadium",
        "distance": "0.2 km",
        "level": "International"
      }
    ],
    "upcomingCamps": [
      {
        "name": "Half-Term Skills Camp",
        "startDate": "2025-05-26",
        "endDate": "2025-05-30",
        "price": "£550",
        "level": "All levels"
      },
      {
        "name": "Summer Development Camp",
        "startDate": "2025-07-21",
        "endDate": "2025-08-01",
        "price": "£1,600",
        "level": "Intermediate-Advanced"
      }
    ],
    "accommodation": {
      "types": [
        {
          "type": "residence",
          "label": "City Centre Residence",
          "pricePerWeek": 250,
          "maxOccupancy": 2,
          "bathType": "ensuite",
          "mealsIncluded": false
        },
        {
          "type": "homestay",
          "label": "Welsh Host Family",
          "pricePerWeek": 220,
          "maxOccupancy": 1,
          "bathType": "shared",
          "mealsIncluded": true
        }
      ],
      "companionsAllowed": true,
      "childrenAllowed": true,
      "minStay": "2 weeks",
      "shuttleToTraining": false,
      "notes": "City centre location makes most accommodation walkable to training."
    },
    "videoTour": null,
    "juniorInfo": {
      "minAge": 14,
      "maxAge": 18,
      "supervision": "24/7",
      "guardianStay": true,
      "schooling": "Partnership with Cardiff schools; bilingual options",
      "medicalStaff": true,
      "safeguarding": "WRU safeguarding certified",
      "airportPickup": true,
      "mealPlan": "Full board for residential",
      "curfew": "21:30 weekdays, 22:30 weekends",
      "roommatePairing": "Age-based",
      "languageSupport": [
        "English and Welsh"
      ],
      "emergencyProtocol": "UHW 3km; matchday medical team available"
    },
    "availability": {
      "status": "open",
      "nextIntake": "2025-09-01",
      "spotsLeft": 10,
      "responseTime": "48h",
      "privateLessons": true,
      "yearRound": true
    }
  },
  {
    "id": "edinburgh-rugby-academy",
    "name": "Edinburgh Rugby Performance Academy",
    "country": "Scotland",
    "countryFlag": "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    "city": "Edinburgh",
    "lat": 55.9413,
    "lng": -3.2406,
    "website": "https://www.edinburghrugby.org/academy",
    "contact": "+44 131 346 5150",
    "contactEmail": "academy@edinburghrugby.org",
    "individualLessons": true,
    "boarding": false,
    "level": "SRU Professional Pathway",
    "starred": false,
    "airport": {
      "name": "Edinburgh Airport",
      "code": "EDI",
      "distance": "13 km",
      "driveTime": "25 min"
    },
    "beach": {
      "distance": 10,
      "description": "Portobello Beach, Edinburgh’s seaside promenade"
    },
    "climate": "edinburgh",
    "priceRange": {
      "from": 1500,
      "to": 2600,
      "unit": "month",
      "display": "£1,500 - £2,600/month"
    },
    "socialMedia": {
      "instagram": "",
      "facebook": "",
      "twitter": ""
    },
    "programs": [
      {
        "name": "SRU Elite Development",
        "price": "£2,600/month",
        "desc": "Scottish Rugby Union endorsed programme for future professional players"
      },
      {
        "name": "Sevens Specialist Programme",
        "price": "£1,800/month",
        "desc": "Rugby sevens development leveraging Scotland’s World Series expertise"
      },
      {
        "name": "Core Skills Programme",
        "price": "£1,500/month",
        "desc": "Fundamental skills development for competitive players"
      }
    ],
    "coaches": [
      {
        "name": "Allan Jacobsen",
        "credential": "SRU Elite Coach",
        "background": "Former Scotland and Edinburgh loosehead prop, 65 Scottish caps, World Cup 2007 and 2011",
        "atpWta": false,
        "bestRanking": null,
        "rankingNote": null,
        "languages": [
          "English"
        ],
        "instagram": null
      }
    ],
    "bestCoachRanking": null,
    "facilities": "DAM Health Stadium training complex, 2 pitches, indoor facility at BT Murrayfield, scrummage machines, gym, video analysis, physio suite with cryotherapy",
    "courtSurfaces": [
      "Natural grass",
      "4G artificial"
    ],
    "notableAlumni": [
      "Duhan van der Merwe",
      "Hamish Watson",
      "Blair Kinghorn"
    ],
    "photos": [
      "https://picsum.photos/seed/edinburgh-r-1/800/500",
      "https://picsum.photos/seed/edinburgh-r-2/800/500",
      "https://picsum.photos/seed/edinburgh-r-3/800/500"
    ],
    "description": "Edinburgh Rugby’s academy offers a unique pathway into professional rugby in Scotland’s stunning capital city. With access to BT Murrayfield’s facilities and the Scottish Rugby Union’s development infrastructure, players benefit from a system that has produced numerous internationals and Lions tourists.",
    "ageGroups": [
      "Junior",
      "Adult",
      "Senior"
    ],
    "nearbyHotels": [
      {
        "name": "Hilton Edinburgh Carlton",
        "distance": "4 km",
        "priceRange": "£110-200/night"
      },
      {
        "name": "Motel One Edinburgh",
        "distance": "3 km",
        "priceRange": "£70-110/night"
      }
    ],
    "nearbyRestaurants": [
      {
        "name": "The Scran & Scallie",
        "distance": "2 km",
        "cuisine": "Scottish Gastropub"
      },
      {
        "name": "Aizle",
        "distance": "3.5 km",
        "cuisine": "Modern Scottish"
      }
    ],
    "nearbyMedical": [
      {
        "name": "Royal Infirmary of Edinburgh",
        "distance": "5 km",
        "type": "Hospital"
      }
    ],
    "costOfLiving": {
      "rent1Bed": 900,
      "meal": 13,
      "monthlyFood": 290,
      "transport": 55,
      "currency": "GBP",
      "summary": "Edinburgh is a beautiful, mid-priced city with a growing rugby scene and excellent cultural life"
    },
    "scholarships": {
      "available": true,
      "details": "SRU pathway funding; Edinburgh University sports scholarships"
    },
    "visaInfo": {
      "schengen": false,
      "eu": false,
      "visaFreeCountries": "UK citizens",
      "notes": "Scotland is in the UK; standard UK visa rules apply"
    },
    "airportTransfers": [
      {
        "from": "Edinburgh Airport (EDI)",
        "method": "Tram",
        "cost": "£7"
      }
    ],
    "nearbyTournaments": [
      {
        "name": "URC at DAM Health Stadium",
        "distance": "0 km",
        "level": "Professional"
      },
      {
        "name": "Six Nations at BT Murrayfield",
        "distance": "2 km",
        "level": "International"
      }
    ],
    "upcomingCamps": [
      {
        "name": "Sevens Summer Camp",
        "startDate": "2025-06-23",
        "endDate": "2025-07-04",
        "price": "£1,200",
        "level": "Intermediate-Advanced"
      }
    ],
    "accommodation": {
      "types": [
        {
          "type": "apartment",
          "label": "Murrayfield Area Flat",
          "pricePerWeek": 280,
          "maxOccupancy": 2,
          "bathType": "ensuite",
          "mealsIncluded": false
        }
      ],
      "companionsAllowed": true,
      "childrenAllowed": false,
      "minStay": "1 month",
      "shuttleToTraining": false,
      "notes": "Day programme only; accommodation guidance provided."
    },
    "videoTour": null,
    "juniorInfo": {
      "minAge": 15,
      "maxAge": 18,
      "supervision": "daytime",
      "guardianStay": false,
      "schooling": "Links with Edinburgh schools",
      "medicalStaff": true,
      "safeguarding": "SRU safeguarding Level 2",
      "airportPickup": false,
      "mealPlan": "Lunch on training days",
      "curfew": null,
      "roommatePairing": null,
      "languageSupport": [
        "English"
      ],
      "emergencyProtocol": "Royal Infirmary 5km; on-site first aid"
    },
    "availability": {
      "status": "open",
      "nextIntake": "2025-08-01",
      "spotsLeft": 14,
      "responseTime": "3-5 days",
      "privateLessons": true,
      "yearRound": false
    }
  },
  {
    "id": "benetton-rugby-treviso",
    "name": "Benetton Rugby Academy Treviso",
    "country": "Italy",
    "countryFlag": "🇮🇹",
    "city": "Treviso",
    "lat": 45.6669,
    "lng": 12.243,
    "website": "https://www.benettonrugby.it/academy",
    "contact": "+39 0422 230 111",
    "contactEmail": "academy@benettonrugby.it",
    "individualLessons": true,
    "boarding": {
      "available": true,
      "ageRequirement": "16+"
    },
    "level": "FIR National Academy",
    "starred": false,
    "airport": {
      "name": "Venice Marco Polo Airport",
      "code": "VCE",
      "distance": "35 km",
      "driveTime": "40 min"
    },
    "beach": {
      "distance": 40,
      "description": "Jesolo Beach, popular Adriatic coastal resort"
    },
    "climate": "treviso",
    "priceRange": {
      "from": 1200,
      "to": 2200,
      "unit": "month",
      "display": "€1,200 - €2,200/month"
    },
    "socialMedia": {
      "instagram": "",
      "facebook": "",
      "twitter": ""
    },
    "programs": [
      {
        "name": "Accademia Elite",
        "price": "€2,200/month",
        "desc": "Professional pathway within the Italian rugby system and URC competition"
      },
      {
        "name": "Technical Development",
        "price": "€1,200/month",
        "desc": "Skills-focused programme emphasising Italian rugby’s evolving attacking style"
      }
    ],
    "coaches": [
      {
        "name": "Marco Bortolami",
        "credential": "FIR Elite Coach",
        "background": "Former Italy captain, 112 caps, 4 World Cups, renowned lineout specialist",
        "atpWta": false,
        "bestRanking": null,
        "rankingNote": null,
        "languages": [
          "Italian",
          "English",
          "French"
        ],
        "instagram": null
      }
    ],
    "bestCoachRanking": null,
    "facilities": "Stadio Monigo training complex, 3 pitches, scrummage area, gym, video analysis, physio room, recovery pool",
    "courtSurfaces": [
      "Natural grass",
      "Synthetic training pitch"
    ],
    "notableAlumni": [
      "Michele Lamaro",
      "Ange Capuozzo",
      "Lorenzo Cannone"
    ],
    "photos": [
      "https://picsum.photos/seed/benetton-1/800/500",
      "https://picsum.photos/seed/benetton-2/800/500",
      "https://picsum.photos/seed/benetton-3/800/500"
    ],
    "description": "Benetton Rugby’s academy in Treviso is at the heart of Italian rugby’s resurgence. Located in the Veneto region, the academy combines Italian flair with the competitive edge gained from URC participation. The beautiful surroundings of Treviso – close to Venice, the Dolomites, and the Adriatic – make it an attractive destination for international players.",
    "ageGroups": [
      "Junior",
      "Adult",
      "Senior"
    ],
    "nearbyHotels": [
      {
        "name": "Hotel Carlton",
        "distance": "2 km",
        "priceRange": "€70-120/night"
      },
      {
        "name": "Best Western Premier BHR",
        "distance": "3 km",
        "priceRange": "€90-150/night"
      }
    ],
    "nearbyRestaurants": [
      {
        "name": "Toni del Spin",
        "distance": "1.5 km",
        "cuisine": "Venetian"
      },
      {
        "name": "Osteria Muscoli’s",
        "distance": "2 km",
        "cuisine": "Italian Seafood"
      }
    ],
    "nearbyMedical": [
      {
        "name": "Ospedale Ca’ Foncello",
        "distance": "2 km",
        "type": "Hospital"
      }
    ],
    "costOfLiving": {
      "rent1Bed": 550,
      "meal": 10,
      "monthlyFood": 230,
      "transport": 35,
      "currency": "EUR",
      "summary": "Treviso is very affordable with exceptional food, wine, and quality of life near Venice"
    },
    "scholarships": {
      "available": true,
      "details": "FIR development grants for Italian-eligible players; limited international spots"
    },
    "visaInfo": {
      "schengen": true,
      "eu": true,
      "visaFreeCountries": "EU/EEA/Schengen zone citizens",
      "notes": "Standard Italian visa requirements for non-EU nationals"
    },
    "airportTransfers": [
      {
        "from": "Venice Marco Polo (VCE)",
        "method": "Bus + train",
        "cost": "€10-15"
      }
    ],
    "nearbyTournaments": [
      {
        "name": "URC at Stadio Monigo",
        "distance": "0 km",
        "level": "Professional"
      },
      {
        "name": "Six Nations (Rome)",
        "distance": "500 km",
        "level": "International"
      }
    ],
    "upcomingCamps": [
      {
        "name": "Summer Rugby Italiano",
        "startDate": "2025-06-16",
        "endDate": "2025-06-27",
        "price": "€1,100",
        "level": "Intermediate"
      }
    ],
    "accommodation": {
      "types": [
        {
          "type": "apartment",
          "label": "Treviso City Apartment",
          "pricePerWeek": 180,
          "maxOccupancy": 2,
          "bathType": "shared",
          "mealsIncluded": false
        },
        {
          "type": "residence",
          "label": "Academy Residence",
          "pricePerWeek": 250,
          "maxOccupancy": 2,
          "bathType": "ensuite",
          "mealsIncluded": true
        }
      ],
      "companionsAllowed": true,
      "childrenAllowed": true,
      "minStay": "2 weeks",
      "shuttleToTraining": true,
      "notes": "Treviso is a small, walkable city. Residence includes Italian language basics course."
    },
    "videoTour": null,
    "juniorInfo": {
      "minAge": 14,
      "maxAge": 18,
      "supervision": "24/7",
      "guardianStay": true,
      "schooling": "Links with local schools; Italian language immersion available",
      "medicalStaff": true,
      "safeguarding": "FIR safeguarding protocols",
      "airportPickup": true,
      "mealPlan": "Full board with Mediterranean cuisine",
      "curfew": "22:00",
      "roommatePairing": "Age-based",
      "languageSupport": [
        "Italian and English"
      ],
      "emergencyProtocol": "Hospital 2km; club doctor on call"
    },
    "availability": {
      "status": "open",
      "nextIntake": "2025-09-01",
      "spotsLeft": 12,
      "responseTime": "1 week",
      "privateLessons": true,
      "yearRound": true
    }
  },
  {
    "id": "georgia-rugby-tbilisi",
    "name": "Georgian Rugby Academy Tbilisi",
    "country": "Georgia",
    "countryFlag": "🇬🇪",
    "city": "Tbilisi",
    "lat": 41.7151,
    "lng": 44.8271,
    "website": "https://www.rugby.ge/academy",
    "contact": "+995 32 225 0050",
    "contactEmail": "academy@rugby.ge",
    "individualLessons": true,
    "boarding": {
      "available": true,
      "ageRequirement": "14+"
    },
    "level": "National Development",
    "starred": false,
    "airport": {
      "name": "Tbilisi International Airport",
      "code": "TBS",
      "distance": "18 km",
      "driveTime": "30 min"
    },
    "beach": {
      "distance": null,
      "description": "No nearby beach; Tbilisi Sea (reservoir) used for outdoor conditioning"
    },
    "climate": "tbilisi",
    "priceRange": {
      "from": 600,
      "to": 1200,
      "unit": "month",
      "display": "€600 - €1,200/month"
    },
    "socialMedia": {
      "instagram": "",
      "facebook": "",
      "twitter": ""
    },
    "programs": [
      {
        "name": "National Development Programme",
        "price": "€1,200/month",
        "desc": "Georgian Rugby Union pathway programme emphasising the legendary Georgian scrum"
      },
      {
        "name": "Forward Power Programme",
        "price": "€900/month",
        "desc": "Specialist front-five development – scrummaging and mauling the Georgian way"
      },
      {
        "name": "Rugby Fundamentals",
        "price": "€600/month",
        "desc": "Core skills and physical development for aspiring players"
      }
    ],
    "coaches": [
      {
        "name": "Mamuka Gorgodze",
        "credential": "World Rugby Level 2",
        "background": "Legendary Georgia and Toulon number 8, 75 international caps, 3 World Cups, Chevalier of Georgia",
        "atpWta": false,
        "bestRanking": null,
        "rankingNote": null,
        "languages": [
          "Georgian",
          "French",
          "English",
          "Russian"
        ],
        "instagram": null
      }
    ],
    "bestCoachRanking": null,
    "facilities": "Georgian Rugby Union training centre, 2 pitches, outdoor scrummage area with reinforced machines, basic gym, video room, physio area",
    "courtSurfaces": [
      "Natural grass",
      "Hardened training surface"
    ],
    "notableAlumni": [
      "Lasha Jaiani",
      "Beka Gorgadze",
      "Davit Niniashvili"
    ],
    "photos": [
      "https://picsum.photos/seed/georgia-r-1/800/500",
      "https://picsum.photos/seed/georgia-r-2/800/500",
      "https://picsum.photos/seed/georgia-r-3/800/500"
    ],
    "description": "The Georgian Rugby Academy in Tbilisi offers a unique and affordable rugby experience in one of the sport’s most passionate emerging nations. Georgia’s legendary scrummaging prowess and warrior spirit are woven into every training session. The academy provides a gateway to understanding Eastern European rugby culture while benefiting from Tbilisi’s incredible hospitality and low cost of living.",
    "ageGroups": [
      "Junior",
      "Adult",
      "Senior"
    ],
    "nearbyHotels": [
      {
        "name": "Rooms Hotel Tbilisi",
        "distance": "5 km",
        "priceRange": "€60-120/night"
      },
      {
        "name": "Ibis Styles Tbilisi",
        "distance": "4 km",
        "priceRange": "€35-70/night"
      }
    ],
    "nearbyRestaurants": [
      {
        "name": "Shavi Lomi",
        "distance": "4 km",
        "cuisine": "Modern Georgian"
      },
      {
        "name": "Pasanauri",
        "distance": "5 km",
        "cuisine": "Traditional Georgian"
      }
    ],
    "nearbyMedical": [
      {
        "name": "Aversi Clinic",
        "distance": "3 km",
        "type": "Private Clinic"
      },
      {
        "name": "Tbilisi Central Hospital",
        "distance": "6 km",
        "type": "Hospital"
      }
    ],
    "costOfLiving": {
      "rent1Bed": 350,
      "meal": 6,
      "monthlyFood": 150,
      "transport": 20,
      "currency": "EUR",
      "summary": "Tbilisi is extremely affordable with outstanding food and a warm, welcoming rugby culture"
    },
    "scholarships": {
      "available": true,
      "details": "Georgian Rugby Union fully funds places for nationally identified talent; limited subsidies for international players"
    },
    "visaInfo": {
      "schengen": false,
      "eu": false,
      "visaFreeCountries": "Many countries get 1-year visa-free entry to Georgia",
      "notes": "Georgia offers very liberal visa policies. Most nationalities can enter visa-free for up to 365 days."
    },
    "airportTransfers": [
      {
        "from": "Tbilisi Airport (TBS)",
        "method": "Taxi",
        "cost": "€10-15"
      }
    ],
    "nearbyTournaments": [
      {
        "name": "Rugby Europe Championship",
        "distance": "Various",
        "level": "International"
      },
      {
        "name": "Georgian Didi 10 League",
        "distance": "Various",
        "level": "National"
      }
    ],
    "upcomingCamps": [
      {
        "name": "Scrum Academy Intensive",
        "startDate": "2025-06-02",
        "endDate": "2025-06-13",
        "price": "€500",
        "level": "All levels"
      },
      {
        "name": "Summer Rugby Camp",
        "startDate": "2025-07-14",
        "endDate": "2025-07-25",
        "price": "€700",
        "level": "Intermediate"
      }
    ],
    "accommodation": {
      "types": [
        {
          "type": "residence",
          "label": "Academy Dormitory",
          "pricePerWeek": 100,
          "maxOccupancy": 3,
          "bathType": "shared",
          "mealsIncluded": true
        },
        {
          "type": "apartment",
          "label": "Tbilisi Apartment",
          "pricePerWeek": 120,
          "maxOccupancy": 2,
          "bathType": "ensuite",
          "mealsIncluded": false
        }
      ],
      "companionsAllowed": true,
      "childrenAllowed": true,
      "minStay": "1 week",
      "shuttleToTraining": true,
      "notes": "Georgian hospitality is legendary – expect a welcoming and communal living environment."
    },
    "videoTour": null,
    "juniorInfo": {
      "minAge": 12,
      "maxAge": 18,
      "supervision": "24/7",
      "guardianStay": true,
      "schooling": "Partnership with local schools; English-medium options available",
      "medicalStaff": true,
      "safeguarding": "Georgian Rugby Union safeguarding policy",
      "airportPickup": true,
      "mealPlan": "Full board with traditional Georgian cuisine",
      "curfew": "21:00 weekdays, 22:00 weekends",
      "roommatePairing": "Age-based groups",
      "languageSupport": [
        "Georgian",
        "Russian",
        "English",
        "French"
      ],
      "emergencyProtocol": "Private clinic 3km; coach accompanies to hospital"
    },
    "availability": {
      "status": "open",
      "nextIntake": "2025-06-01",
      "spotsLeft": 25,
      "responseTime": "48h",
      "privateLessons": true,
      "yearRound": true
    }
  },
  {
    "id": "spain-rugby-madrid",
    "name": "Alcobendas Rugby Academy",
    "country": "Spain",
    "countryFlag": "🇪🇸",
    "city": "Madrid",
    "lat": 40.533,
    "lng": -3.6364,
    "website": "https://www.alcobendasrugby.com/academy",
    "contact": "+34 91 661 3300",
    "contactEmail": "academy@alcobendasrugby.com",
    "individualLessons": true,
    "boarding": false,
    "level": "National Division / Development",
    "starred": false,
    "airport": {
      "name": "Adolfo Suárez Madrid-Barajas",
      "code": "MAD",
      "distance": "15 km",
      "driveTime": "20 min"
    },
    "beach": {
      "distance": null,
      "description": "No nearby beach; Madrid is inland. Outdoor pools available for recovery."
    },
    "climate": "madrid",
    "priceRange": {
      "from": 900,
      "to": 1800,
      "unit": "month",
      "display": "€900 - €1,800/month"
    },
    "socialMedia": {
      "instagram": "",
      "facebook": "",
      "twitter": ""
    },
    "programs": [
      {
        "name": "Elite Español",
        "price": "€1,800/month",
        "desc": "Top-level Spanish rugby development feeding into national squad selection"
      },
      {
        "name": "Rugby y Sol",
        "price": "€900/month",
        "desc": "Combine rugby training with Spanish language and culture immersion"
      }
    ],
    "coaches": [
      {
        "name": "Pablo Feijoo",
        "credential": "FER Level 3",
        "background": "Former Spain Sevens coach, multiple World Series campaigns, developed Spain’s sevens programme",
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
    "bestCoachRanking": null,
    "facilities": "Alcobendas Rugby Club ground, 2 pitches, basic scrummage machine, gym, clubhouse with video review area",
    "courtSurfaces": [
      "Natural grass",
      "Dry earth training area"
    ],
    "notableAlumni": [
      "Gonzalo Vinuesa",
      "Manuel Ordas"
    ],
    "photos": [
      "https://picsum.photos/seed/spain-r-1/800/500",
      "https://picsum.photos/seed/spain-r-2/800/500",
      "https://picsum.photos/seed/spain-r-3/800/500"
    ],
    "description": "Alcobendas Rugby Academy, based in northern Madrid, represents the growing rugby movement in Spain. As one of Spain’s most successful clubs, Alcobendas provides a development environment that combines the passion of Spanish sport with rugby’s values. The year-round sunshine and affordable lifestyle make it an attractive option for players seeking something different.",
    "ageGroups": [
      "Junior",
      "Adult",
      "Senior"
    ],
    "nearbyHotels": [
      {
        "name": "Hotel Ciudad de Alcobendas",
        "distance": "1 km",
        "priceRange": "€60-100/night"
      },
      {
        "name": "NH Madrid Airport",
        "distance": "8 km",
        "priceRange": "€80-130/night"
      }
    ],
    "nearbyRestaurants": [
      {
        "name": "Casa Paco",
        "distance": "1 km",
        "cuisine": "Spanish"
      },
      {
        "name": "El Club Allard",
        "distance": "15 km",
        "cuisine": "Michelin-starred Spanish"
      }
    ],
    "nearbyMedical": [
      {
        "name": "Hospital Universitario Infanta Sofía",
        "distance": "2 km",
        "type": "Hospital"
      }
    ],
    "costOfLiving": {
      "rent1Bed": 800,
      "meal": 11,
      "monthlyFood": 250,
      "transport": 55,
      "currency": "EUR",
      "summary": "Madrid suburb pricing is reasonable; excellent public transport connections to city centre"
    },
    "scholarships": {
      "available": false,
      "details": "No formal scholarship programme currently available"
    },
    "visaInfo": {
      "schengen": true,
      "eu": true,
      "visaFreeCountries": "EU/EEA/Schengen zone citizens",
      "notes": "Standard Spanish visa requirements for non-EU nationals"
    },
    "airportTransfers": [
      {
        "from": "Madrid Barajas (MAD)",
        "method": "Metro + bus",
        "cost": "€5-8"
      }
    ],
    "nearbyTournaments": [
      {
        "name": "División de Honor matches",
        "distance": "Various",
        "level": "National"
      },
      {
        "name": "Rugby Europe fixtures",
        "distance": "Various",
        "level": "International"
      }
    ],
    "upcomingCamps": [],
    "accommodation": {
      "types": [
        {
          "type": "apartment",
          "label": "Alcobendas Apartment",
          "pricePerWeek": 200,
          "maxOccupancy": 2,
          "bathType": "ensuite",
          "mealsIncluded": false
        }
      ],
      "companionsAllowed": true,
      "childrenAllowed": false,
      "minStay": "1 month",
      "shuttleToTraining": false,
      "notes": "Day programme; accommodation support provided for relocating players."
    },
    "videoTour": null,
    "juniorInfo": {
      "minAge": 14,
      "maxAge": 18,
      "supervision": "daytime",
      "guardianStay": false,
      "schooling": "Links with bilingual schools in Alcobendas",
      "medicalStaff": false,
      "safeguarding": "FER safeguarding standards",
      "airportPickup": false,
      "mealPlan": "Post-training meal provided",
      "curfew": null,
      "roommatePairing": null,
      "languageSupport": [
        "Spanish and English"
      ],
      "emergencyProtocol": "Hospital 2km; first aid on site"
    },
    "availability": {
      "status": "open",
      "nextIntake": "2025-09-01",
      "spotsLeft": 20,
      "responseTime": "1 week",
      "privateLessons": true,
      "yearRound": true
    }
  },
  {
    "id": "portugal-rugby-lisbon",
    "name": "Lisbon Rugby Academy - Os Belenenses",
    "country": "Portugal",
    "countryFlag": "🇵🇹",
    "city": "Lisbon",
    "lat": 38.7025,
    "lng": -9.2097,
    "website": "https://www.belenensesrugby.pt/academy",
    "contact": "+351 21 301 4900",
    "contactEmail": "academy@belenensesrugby.pt",
    "individualLessons": true,
    "boarding": false,
    "level": "National Development",
    "starred": false,
    "airport": {
      "name": "Lisbon Humberto Delgado Airport",
      "code": "LIS",
      "distance": "12 km",
      "driveTime": "20 min"
    },
    "beach": {
      "distance": 3,
      "description": "Praia de Carcavelos, popular surfing beach just minutes away"
    },
    "climate": "lisbon",
    "priceRange": {
      "from": 800,
      "to": 1600,
      "unit": "month",
      "display": "€800 - €1,600/month"
    },
    "socialMedia": {
      "instagram": "",
      "facebook": "",
      "twitter": ""
    },
    "programs": [
      {
        "name": "Portuguese Rugby Pathway",
        "price": "€1,600/month",
        "desc": "Development programme within Portugal’s growing rugby scene"
      },
      {
        "name": "Rugby & Surf Programme",
        "price": "€1,200/month",
        "desc": "Unique combination of rugby training and Atlantic coast surfing for fitness and balance"
      },
      {
        "name": "Foundation Skills",
        "price": "€800/month",
        "desc": "Core rugby development in a relaxed, supportive environment"
      }
    ],
    "coaches": [
      {
        "name": "Gonçalo Uva",
        "credential": "FPR Elite Coach",
        "background": "Former Portugal captain, 60+ international caps, World Cup 2007, retired Top 14 player",
        "atpWta": false,
        "bestRanking": null,
        "rankingNote": null,
        "languages": [
          "Portuguese",
          "English",
          "French",
          "Spanish"
        ],
        "instagram": null
      }
    ],
    "bestCoachRanking": null,
    "facilities": "Estádio do Restélo grounds, 2 pitches, basic gym, scrummage machine, outdoor conditioning area with ocean views, video analysis room",
    "courtSurfaces": [
      "Natural grass",
      "Sandy training area"
    ],
    "notableAlumni": [
      "Raffaele Storti",
      "Tomás Appleton"
    ],
    "photos": [
      "https://picsum.photos/seed/lisbon-r-1/800/500",
      "https://picsum.photos/seed/lisbon-r-2/800/500",
      "https://picsum.photos/seed/lisbon-r-3/800/500"
    ],
    "description": "The Lisbon Rugby Academy at Os Belenenses offers an unbeatable combination of rugby development, Atlantic coastline, and Portuguese culture. Perfect for players who want quality coaching in a stunning location at an affordable price. Portugal’s rugby is on the rise following their World Cup qualification, making this an exciting time to join their development system.",
    "ageGroups": [
      "Junior",
      "Adult",
      "Senior"
    ],
    "nearbyHotels": [
      {
        "name": "Altis Belém Hotel",
        "distance": "1 km",
        "priceRange": "€100-180/night"
      },
      {
        "name": "Hotel Jerónimos 8",
        "distance": "1.5 km",
        "priceRange": "€80-140/night"
      }
    ],
    "nearbyRestaurants": [
      {
        "name": "Ponto Final",
        "distance": "3 km",
        "cuisine": "Portuguese Seafood"
      },
      {
        "name": "Pasteis de Belém",
        "distance": "0.5 km",
        "cuisine": "Portuguese Pastry"
      }
    ],
    "nearbyMedical": [
      {
        "name": "Hospital São Francisco Xavier",
        "distance": "2 km",
        "type": "Hospital"
      }
    ],
    "costOfLiving": {
      "rent1Bed": 800,
      "meal": 9,
      "monthlyFood": 220,
      "transport": 40,
      "currency": "EUR",
      "summary": "Lisbon is affordable by Western European standards with exceptional food, climate, and lifestyle"
    },
    "scholarships": {
      "available": false,
      "details": "No formal scholarship programme; club subsidies for promising Portuguese-eligible players"
    },
    "visaInfo": {
      "schengen": true,
      "eu": true,
      "visaFreeCountries": "EU/EEA/Schengen zone citizens",
      "notes": "Standard Portuguese visa for non-EU nationals; D7 visa option for longer stays"
    },
    "airportTransfers": [
      {
        "from": "Lisbon Airport (LIS)",
        "method": "Metro + bus",
        "cost": "€3-5"
      }
    ],
    "nearbyTournaments": [
      {
        "name": "Campeonato Nacional matches",
        "distance": "Various",
        "level": "National"
      },
      {
        "name": "Rugby Europe Trophy",
        "distance": "Various",
        "level": "International"
      }
    ],
    "upcomingCamps": [
      {
        "name": "Atlantic Rugby & Surf Camp",
        "startDate": "2025-07-07",
        "endDate": "2025-07-18",
        "price": "€900",
        "level": "All levels"
      }
    ],
    "accommodation": {
      "types": [
        {
          "type": "apartment",
          "label": "Belém Apartment",
          "pricePerWeek": 200,
          "maxOccupancy": 2,
          "bathType": "ensuite",
          "mealsIncluded": false
        },
        {
          "type": "hostel",
          "label": "Lisbon Sports Hostel",
          "pricePerWeek": 120,
          "maxOccupancy": 4,
          "bathType": "shared",
          "mealsIncluded": false
        }
      ],
      "companionsAllowed": true,
      "childrenAllowed": true,
      "minStay": "1 week",
      "shuttleToTraining": false,
      "notes": "Excellent public transport; most accommodation within walking distance of training."
    },
    "videoTour": null,
    "juniorInfo": {
      "minAge": 13,
      "maxAge": 18,
      "supervision": "daytime",
      "guardianStay": true,
      "schooling": "International schools available nearby",
      "medicalStaff": false,
      "safeguarding": "FPR child protection policy",
      "airportPickup": true,
      "mealPlan": "Post-training meal",
      "curfew": null,
      "roommatePairing": null,
      "languageSupport": [
        "Portuguese",
        "English",
        "Spanish"
      ],
      "emergencyProtocol": "Hospital 2km; first aid on site"
    },
    "availability": {
      "status": "open",
      "nextIntake": "2025-06-01",
      "spotsLeft": 20,
      "responseTime": "48h",
      "privateLessons": true,
      "yearRound": true
    }
  },
  {
    "id": "romania-rugby-bucharest",
    "name": "Romanian Rugby Academy - Steaua Bucharest",
    "country": "Romania",
    "countryFlag": "🇷🇴",
    "city": "Bucharest",
    "lat": 44.4413,
    "lng": 26.0775,
    "website": "https://www.stearugby.ro/academy",
    "contact": "+40 21 315 6700",
    "contactEmail": "academy@stearugby.ro",
    "individualLessons": true,
    "boarding": {
      "available": true,
      "ageRequirement": "14+"
    },
    "level": "National Development",
    "starred": false,
    "airport": {
      "name": "Henri Coandă International Airport",
      "code": "OTP",
      "distance": "18 km",
      "driveTime": "30 min"
    },
    "beach": {
      "distance": null,
      "description": "No nearby beach; Black Sea coast is 230km east"
    },
    "climate": "bucharest",
    "priceRange": {
      "from": 600,
      "to": 1100,
      "unit": "month",
      "display": "€600 - €1,100/month"
    },
    "socialMedia": {
      "instagram": "",
      "facebook": "",
      "twitter": ""
    },
    "programs": [
      {
        "name": "Romanian Elite Programme",
        "price": "€1,100/month",
        "desc": "Full development programme within Romania’s proud rugby tradition"
      },
      {
        "name": "Pack Power Programme",
        "price": "€800/month",
        "desc": "Forward play specialisation inspired by Romania’s famous scrummaging heritage"
      },
      {
        "name": "Youth Development",
        "price": "€600/month",
        "desc": "Grassroots rugby development for young players"
      }
    ],
    "coaches": [
      {
        "name": "Florin Vlaicu",
        "credential": "FRR Level 3",
        "background": "Former Romania fly-half, 76 international caps, 3 World Cups, all-time leading scorer for Romania",
        "atpWta": false,
        "bestRanking": null,
        "rankingNote": null,
        "languages": [
          "Romanian",
          "French",
          "English",
          "Italian"
        ],
        "instagram": null
      }
    ],
    "bestCoachRanking": null,
    "facilities": "Stadionul Ghencea complex, 2 pitches, outdoor scrummage machines, basic gym, clubhouse with video equipment, physio room",
    "courtSurfaces": [
      "Natural grass",
      "Hard-packed training surface"
    ],
    "notableAlumni": [
      "Mihai Macovei",
      "Florin Surugiu"
    ],
    "photos": [
      "https://picsum.photos/seed/romania-r-1/800/500",
      "https://picsum.photos/seed/romania-r-2/800/500",
      "https://picsum.photos/seed/romania-r-3/800/500"
    ],
    "description": "The Romanian Rugby Academy at Steaua Bucharest draws on Romania’s rich rugby heritage – one of the oldest rugby nations in continental Europe. Known for producing fearsome forwards and disciplined team play, the academy offers exceptional value with coaching from former internationals. Bucharest’s vibrant culture and very low costs make it ideal for budget-conscious players seeking serious rugby development.",
    "ageGroups": [
      "Junior",
      "Adult",
      "Senior"
    ],
    "nearbyHotels": [
      {
        "name": "Radisson Blu Bucharest",
        "distance": "5 km",
        "priceRange": "€60-110/night"
      },
      {
        "name": "Ibis Bucharest Gara de Nord",
        "distance": "4 km",
        "priceRange": "€35-60/night"
      }
    ],
    "nearbyRestaurants": [
      {
        "name": "Caru’ cu Bere",
        "distance": "6 km",
        "cuisine": "Traditional Romanian"
      },
      {
        "name": "Lacrimi și Sfinți",
        "distance": "5 km",
        "cuisine": "Modern Romanian"
      }
    ],
    "nearbyMedical": [
      {
        "name": "Spitalul Universitar de Urgență",
        "distance": "5 km",
        "type": "Hospital"
      }
    ],
    "costOfLiving": {
      "rent1Bed": 400,
      "meal": 7,
      "monthlyFood": 180,
      "transport": 20,
      "currency": "EUR",
      "summary": "Bucharest is one of Europe’s most affordable capitals with rapidly improving infrastructure"
    },
    "scholarships": {
      "available": true,
      "details": "FRR national development scholarships for Romanian-eligible players"
    },
    "visaInfo": {
      "schengen": true,
      "eu": true,
      "visaFreeCountries": "EU/EEA citizens",
      "notes": "Romania joined Schengen air borders in 2024. Standard EU visa rules apply for non-EU nationals."
    },
    "airportTransfers": [
      {
        "from": "Bucharest OTP (OTP)",
        "method": "Express bus 783",
        "cost": "€2-3"
      }
    ],
    "nearbyTournaments": [
      {
        "name": "SuperLiga matches",
        "distance": "Various",
        "level": "National"
      },
      {
        "name": "Rugby Europe Championship",
        "distance": "Various",
        "level": "International"
      }
    ],
    "upcomingCamps": [
      {
        "name": "Carpathian Rugby Camp",
        "startDate": "2025-07-21",
        "endDate": "2025-08-01",
        "price": "€500",
        "level": "All levels"
      }
    ],
    "accommodation": {
      "types": [
        {
          "type": "residence",
          "label": "Academy Dormitory",
          "pricePerWeek": 80,
          "maxOccupancy": 3,
          "bathType": "shared",
          "mealsIncluded": true
        },
        {
          "type": "apartment",
          "label": "Bucharest City Apartment",
          "pricePerWeek": 120,
          "maxOccupancy": 2,
          "bathType": "ensuite",
          "mealsIncluded": false
        }
      ],
      "companionsAllowed": true,
      "childrenAllowed": true,
      "minStay": "1 week",
      "shuttleToTraining": true,
      "notes": "Dormitory provides a communal, team-oriented living experience."
    },
    "videoTour": null,
    "juniorInfo": {
      "minAge": 12,
      "maxAge": 18,
      "supervision": "24/7",
      "guardianStay": true,
      "schooling": "Links with Bucharest international schools",
      "medicalStaff": true,
      "safeguarding": "FRR child protection standards",
      "airportPickup": true,
      "mealPlan": "Full board with traditional Romanian meals",
      "curfew": "21:00 weekdays, 22:00 weekends",
      "roommatePairing": "Age-based groups",
      "languageSupport": [
        "Romanian",
        "English",
        "French"
      ],
      "emergencyProtocol": "University Emergency Hospital 5km; first aider on site"
    },
    "availability": {
      "status": "open",
      "nextIntake": "2025-06-01",
      "spotsLeft": 30,
      "responseTime": "48h",
      "privateLessons": true,
      "yearRound": true
    }
  },
  {
    "id": "istanbul-rugby-academy",
    "name": "Istanbul Rugby Academy",
    "country": "Turkey",
    "countryFlag": "🇹🇷",
    "city": "Istanbul",
    "lat": 41.0082,
    "lng": 28.9784,
    "website": "https://www.istanbulrugby.com.tr",
    "contact": "+90 212 456 7890",
    "contactEmail": "info@istanbulrugby.com.tr",
    "individualLessons": true,
    "boarding": true,
    "level": "All levels",
    "ageGroups": ["Junior", "Adult"],
    "beach": { "distance": 10, "description": "Bosphorus shoreline and Black Sea beaches accessible" },
    "priceRange": { "from": 500, "to": 1200, "unit": "week", "display": "€500 - €1,200/week" },
    "socialMedia": { "instagram": "@istanbulrugby", "facebook": "https://facebook.com/istanbulrugbyacademy", "twitter": "@istanbulrugby" },
    "climate": "istanbul",
    "facilities": "Full-size rugby pitch, training pitch, gym, video analysis room, recovery pool, physiotherapy",
    "courtSurfaces": ["Natural grass", "Artificial turf"],
    "programs": [
      { "name": "Development Programme", "price": "€700/week", "desc": "Structured rugby development for aspiring players with positional coaching and game understanding" },
      { "name": "Youth Rugby Camp", "price": "€500/week", "desc": "Fun and skills-focused camps for juniors aged 8-16" },
      { "name": "Performance Squad", "price": "€1,200/week", "desc": "Elite performance training with conditioning, analysis and match preparation" }
    ],
    "coaches": [
      { "name": "Burak Özkan", "credential": "World Rugby Level 3 Coach", "background": "Former Turkish national team captain with international coaching experience across Europe", "atpWta": false, "bestRanking": null, "rankingNote": null, "languages": ["Turkish", "English"], "instagram": null }
    ],
    "photos": ["https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800"],
    "upcomingCamps": [
      { "name": "Summer Rugby Camp", "startDate": "2026-07-06", "endDate": "2026-07-13", "price": "€700", "level": "All Levels" },
      { "name": "Autumn Skills Clinic", "startDate": "2026-10-19", "endDate": "2026-10-23", "price": "€500", "level": "Beginner" },
      { "name": "Winter Conditioning Camp", "startDate": "2027-01-11", "endDate": "2027-01-18", "price": "€900", "level": "Intermediate" }
    ],
    "accommodation": {
      "types": [
        { "type": "hotel", "label": "Partner Hotel Istanbul", "pricePerWeek": 400, "maxOccupancy": 2, "bathType": "ensuite", "mealsIncluded": true },
        { "type": "shared", "label": "Shared Athlete Apartment", "pricePerWeek": 220, "maxOccupancy": 4, "bathType": "shared", "mealsIncluded": true }
      ],
      "companionsAllowed": true,
      "childrenAllowed": true,
      "minStay": "1 week",
      "shuttleToTraining": true,
      "notes": "Accommodation in Istanbul with easy access to training grounds and cultural attractions"
    },
    "availability": {
      "status": "open",
      "nextIntake": "2026-06-01",
      "spotsLeft": 20,
      "responseTime": "24h",
      "privateLessons": true,
      "yearRound": true
    },
    "description": "Turkey's leading rugby academy in Istanbul, developing the next generation of Turkish rugby players while hosting international camps on the Bosphorus.",
    "juniorInfo": {
      "minAge": 8,
      "maxAge": 18,
      "supervision": "24/7",
      "guardianStay": true,
      "schooling": "Partnership with Istanbul international schools",
      "medicalStaff": true,
      "safeguarding": "Turkish Rugby Federation safeguarding protocols",
      "airportPickup": true,
      "mealPlan": "Full board with Turkish and international cuisine",
      "curfew": "21:00 weekdays, 22:00 weekends",
      "roommatePairing": "Age-based groups",
      "languageSupport": ["Turkish", "English"],
      "emergencyProtocol": "On-site first aid, Istanbul University Hospital 15 minutes"
    }
  }
]

const CLIMATE_DATA = {
  "dublin": {
    city: "Dublin",
    country: "Ireland",
    months: [
      { month: "Jan", temp: 5, rain: 67, rainyDays: 17, wind: 22 },
      { month: "Feb", temp: 5, rain: 50, rainyDays: 14, wind: 21 },
      { month: "Mar", temp: 7, rain: 53, rainyDays: 14, wind: 20 },
      { month: "Apr", temp: 9, rain: 51, rainyDays: 13, wind: 18 },
      { month: "May", temp: 11, rain: 56, rainyDays: 13, wind: 16 },
      { month: "Jun", temp: 14, rain: 57, rainyDays: 12, wind: 15 },
      { month: "Jul", temp: 16, rain: 50, rainyDays: 13, wind: 15 },
      { month: "Aug", temp: 16, rain: 65, rainyDays: 14, wind: 15 },
      { month: "Sep", temp: 14, rain: 58, rainyDays: 13, wind: 17 },
      { month: "Oct", temp: 11, rain: 70, rainyDays: 15, wind: 19 },
      { month: "Nov", temp: 7, rain: 65, rainyDays: 16, wind: 20 },
      { month: "Dec", temp: 5, rain: 72, rainyDays: 17, wind: 22 }
    ]
  },
  "limerick": {
    city: "Limerick",
    country: "Ireland",
    months: [
      { month: "Jan", temp: 6, rain: 93, rainyDays: 19, wind: 24 },
      { month: "Feb", temp: 6, rain: 68, rainyDays: 16, wind: 23 },
      { month: "Mar", temp: 8, rain: 72, rainyDays: 17, wind: 21 },
      { month: "Apr", temp: 9, rain: 60, rainyDays: 14, wind: 18 },
      { month: "May", temp: 12, rain: 63, rainyDays: 14, wind: 16 },
      { month: "Jun", temp: 14, rain: 60, rainyDays: 13, wind: 15 },
      { month: "Jul", temp: 16, rain: 55, rainyDays: 14, wind: 15 },
      { month: "Aug", temp: 16, rain: 72, rainyDays: 15, wind: 16 },
      { month: "Sep", temp: 14, rain: 68, rainyDays: 14, wind: 18 },
      { month: "Oct", temp: 11, rain: 88, rainyDays: 17, wind: 20 },
      { month: "Nov", temp: 8, rain: 85, rainyDays: 18, wind: 22 },
      { month: "Dec", temp: 6, rain: 95, rainyDays: 19, wind: 24 }
    ]
  },
  "belfast": {
    city: "Belfast",
    country: "Northern Ireland",
    months: [
      { month: "Jan", temp: 4, rain: 80, rainyDays: 18, wind: 23 },
      { month: "Feb", temp: 5, rain: 57, rainyDays: 15, wind: 22 },
      { month: "Mar", temp: 6, rain: 63, rainyDays: 16, wind: 20 },
      { month: "Apr", temp: 8, rain: 53, rainyDays: 14, wind: 18 },
      { month: "May", temp: 11, rain: 55, rainyDays: 14, wind: 16 },
      { month: "Jun", temp: 13, rain: 58, rainyDays: 13, wind: 15 },
      { month: "Jul", temp: 15, rain: 52, rainyDays: 14, wind: 14 },
      { month: "Aug", temp: 15, rain: 68, rainyDays: 15, wind: 15 },
      { month: "Sep", temp: 13, rain: 65, rainyDays: 14, wind: 17 },
      { month: "Oct", temp: 10, rain: 78, rainyDays: 17, wind: 19 },
      { month: "Nov", temp: 7, rain: 72, rainyDays: 17, wind: 21 },
      { month: "Dec", temp: 5, rain: 82, rainyDays: 18, wind: 23 }
    ]
  },
  "toulouse": {
    city: "Toulouse",
    country: "France",
    months: [
      { month: "Jan", temp: 5, rain: 48, rainyDays: 10, wind: 12 },
      { month: "Feb", temp: 7, rain: 45, rainyDays: 9, wind: 13 },
      { month: "Mar", temp: 10, rain: 50, rainyDays: 10, wind: 14 },
      { month: "Apr", temp: 12, rain: 64, rainyDays: 12, wind: 13 },
      { month: "May", temp: 16, rain: 68, rainyDays: 12, wind: 12 },
      { month: "Jun", temp: 20, rain: 52, rainyDays: 9, wind: 11 },
      { month: "Jul", temp: 23, rain: 32, rainyDays: 6, wind: 10 },
      { month: "Aug", temp: 23, rain: 38, rainyDays: 7, wind: 10 },
      { month: "Sep", temp: 19, rain: 45, rainyDays: 8, wind: 11 },
      { month: "Oct", temp: 14, rain: 52, rainyDays: 10, wind: 12 },
      { month: "Nov", temp: 9, rain: 50, rainyDays: 10, wind: 12 },
      { month: "Dec", temp: 6, rain: 48, rainyDays: 10, wind: 12 }
    ]
  },
  "paris": {
    city: "Paris",
    country: "France",
    months: [
      { month: "Jan", temp: 4, rain: 47, rainyDays: 11, wind: 16 },
      { month: "Feb", temp: 5, rain: 40, rainyDays: 10, wind: 16 },
      { month: "Mar", temp: 8, rain: 45, rainyDays: 10, wind: 15 },
      { month: "Apr", temp: 11, rain: 46, rainyDays: 10, wind: 14 },
      { month: "May", temp: 15, rain: 58, rainyDays: 11, wind: 13 },
      { month: "Jun", temp: 18, rain: 50, rainyDays: 9, wind: 12 },
      { month: "Jul", temp: 20, rain: 55, rainyDays: 8, wind: 12 },
      { month: "Aug", temp: 20, rain: 48, rainyDays: 8, wind: 11 },
      { month: "Sep", temp: 17, rain: 45, rainyDays: 8, wind: 12 },
      { month: "Oct", temp: 12, rain: 55, rainyDays: 10, wind: 14 },
      { month: "Nov", temp: 7, rain: 50, rainyDays: 11, wind: 15 },
      { month: "Dec", temp: 5, rain: 52, rainyDays: 11, wind: 16 }
    ]
  },
  "clermont-ferrand": {
    city: "Clermont-Ferrand",
    country: "France",
    months: [
      { month: "Jan", temp: 3, rain: 25, rainyDays: 8, wind: 14 },
      { month: "Feb", temp: 4, rain: 23, rainyDays: 7, wind: 14 },
      { month: "Mar", temp: 8, rain: 28, rainyDays: 8, wind: 15 },
      { month: "Apr", temp: 10, rain: 45, rainyDays: 10, wind: 13 },
      { month: "May", temp: 14, rain: 60, rainyDays: 12, wind: 12 },
      { month: "Jun", temp: 18, rain: 55, rainyDays: 10, wind: 11 },
      { month: "Jul", temp: 21, rain: 42, rainyDays: 7, wind: 10 },
      { month: "Aug", temp: 20, rain: 48, rainyDays: 8, wind: 10 },
      { month: "Sep", temp: 17, rain: 45, rainyDays: 8, wind: 11 },
      { month: "Oct", temp: 12, rain: 42, rainyDays: 9, wind: 13 },
      { month: "Nov", temp: 7, rain: 32, rainyDays: 8, wind: 14 },
      { month: "Dec", temp: 4, rain: 28, rainyDays: 8, wind: 14 }
    ]
  },
  "bath": {
    city: "Bath",
    country: "England",
    months: [
      { month: "Jan", temp: 5, rain: 75, rainyDays: 14, wind: 18 },
      { month: "Feb", temp: 5, rain: 55, rainyDays: 12, wind: 17 },
      { month: "Mar", temp: 7, rain: 55, rainyDays: 12, wind: 16 },
      { month: "Apr", temp: 9, rain: 50, rainyDays: 11, wind: 14 },
      { month: "May", temp: 13, rain: 52, rainyDays: 11, wind: 13 },
      { month: "Jun", temp: 16, rain: 48, rainyDays: 10, wind: 12 },
      { month: "Jul", temp: 18, rain: 45, rainyDays: 9, wind: 11 },
      { month: "Aug", temp: 18, rain: 55, rainyDays: 10, wind: 12 },
      { month: "Sep", temp: 15, rain: 55, rainyDays: 10, wind: 13 },
      { month: "Oct", temp: 12, rain: 72, rainyDays: 13, wind: 15 },
      { month: "Nov", temp: 8, rain: 70, rainyDays: 14, wind: 17 },
      { month: "Dec", temp: 5, rain: 78, rainyDays: 14, wind: 18 }
    ]
  },
  "northampton": {
    city: "Northampton",
    country: "England",
    months: [
      { month: "Jan", temp: 4, rain: 50, rainyDays: 12, wind: 17 },
      { month: "Feb", temp: 4, rain: 38, rainyDays: 10, wind: 16 },
      { month: "Mar", temp: 7, rain: 42, rainyDays: 11, wind: 16 },
      { month: "Apr", temp: 9, rain: 45, rainyDays: 10, wind: 14 },
      { month: "May", temp: 13, rain: 48, rainyDays: 10, wind: 13 },
      { month: "Jun", temp: 16, rain: 50, rainyDays: 9, wind: 12 },
      { month: "Jul", temp: 18, rain: 45, rainyDays: 8, wind: 11 },
      { month: "Aug", temp: 18, rain: 52, rainyDays: 9, wind: 11 },
      { month: "Sep", temp: 15, rain: 48, rainyDays: 9, wind: 13 },
      { month: "Oct", temp: 11, rain: 55, rainyDays: 11, wind: 15 },
      { month: "Nov", temp: 7, rain: 52, rainyDays: 12, wind: 16 },
      { month: "Dec", temp: 4, rain: 55, rainyDays: 12, wind: 17 }
    ]
  },
  "cardiff": {
    city: "Cardiff",
    country: "Wales",
    months: [
      { month: "Jan", temp: 5, rain: 105, rainyDays: 16, wind: 20 },
      { month: "Feb", temp: 5, rain: 75, rainyDays: 13, wind: 19 },
      { month: "Mar", temp: 7, rain: 72, rainyDays: 13, wind: 18 },
      { month: "Apr", temp: 9, rain: 60, rainyDays: 11, wind: 16 },
      { month: "May", temp: 12, rain: 62, rainyDays: 12, wind: 14 },
      { month: "Jun", temp: 15, rain: 55, rainyDays: 10, wind: 13 },
      { month: "Jul", temp: 17, rain: 55, rainyDays: 10, wind: 13 },
      { month: "Aug", temp: 17, rain: 72, rainyDays: 12, wind: 13 },
      { month: "Sep", temp: 15, rain: 68, rainyDays: 12, wind: 15 },
      { month: "Oct", temp: 12, rain: 95, rainyDays: 15, wind: 17 },
      { month: "Nov", temp: 8, rain: 95, rainyDays: 16, wind: 19 },
      { month: "Dec", temp: 5, rain: 108, rainyDays: 16, wind: 20 }
    ]
  },
  "edinburgh": {
    city: "Edinburgh",
    country: "Scotland",
    months: [
      { month: "Jan", temp: 4, rain: 55, rainyDays: 14, wind: 22 },
      { month: "Feb", temp: 4, rain: 40, rainyDays: 12, wind: 21 },
      { month: "Mar", temp: 6, rain: 48, rainyDays: 13, wind: 20 },
      { month: "Apr", temp: 8, rain: 40, rainyDays: 11, wind: 18 },
      { month: "May", temp: 11, rain: 48, rainyDays: 12, wind: 16 },
      { month: "Jun", temp: 14, rain: 50, rainyDays: 11, wind: 15 },
      { month: "Jul", temp: 16, rain: 55, rainyDays: 12, wind: 14 },
      { month: "Aug", temp: 15, rain: 58, rainyDays: 12, wind: 15 },
      { month: "Sep", temp: 13, rain: 52, rainyDays: 12, wind: 17 },
      { month: "Oct", temp: 10, rain: 62, rainyDays: 14, wind: 19 },
      { month: "Nov", temp: 6, rain: 55, rainyDays: 14, wind: 20 },
      { month: "Dec", temp: 4, rain: 55, rainyDays: 14, wind: 22 }
    ]
  },
  "treviso": {
    city: "Treviso",
    country: "Italy",
    months: [
      { month: "Jan", temp: 3, rain: 55, rainyDays: 7, wind: 8 },
      { month: "Feb", temp: 5, rain: 48, rainyDays: 6, wind: 9 },
      { month: "Mar", temp: 9, rain: 58, rainyDays: 8, wind: 10 },
      { month: "Apr", temp: 13, rain: 72, rainyDays: 10, wind: 10 },
      { month: "May", temp: 18, rain: 78, rainyDays: 10, wind: 9 },
      { month: "Jun", temp: 22, rain: 82, rainyDays: 9, wind: 8 },
      { month: "Jul", temp: 24, rain: 62, rainyDays: 7, wind: 8 },
      { month: "Aug", temp: 24, rain: 72, rainyDays: 7, wind: 7 },
      { month: "Sep", temp: 19, rain: 68, rainyDays: 7, wind: 8 },
      { month: "Oct", temp: 14, rain: 78, rainyDays: 9, wind: 9 },
      { month: "Nov", temp: 8, rain: 82, rainyDays: 9, wind: 9 },
      { month: "Dec", temp: 4, rain: 58, rainyDays: 7, wind: 8 }
    ]
  },
  "tbilisi": {
    city: "Tbilisi",
    country: "Georgia",
    months: [
      { month: "Jan", temp: 2, rain: 18, rainyDays: 5, wind: 10 },
      { month: "Feb", temp: 4, rain: 22, rainyDays: 5, wind: 11 },
      { month: "Mar", temp: 8, rain: 30, rainyDays: 7, wind: 12 },
      { month: "Apr", temp: 13, rain: 48, rainyDays: 9, wind: 12 },
      { month: "May", temp: 18, rain: 68, rainyDays: 11, wind: 11 },
      { month: "Jun", temp: 22, rain: 65, rainyDays: 10, wind: 10 },
      { month: "Jul", temp: 25, rain: 38, rainyDays: 6, wind: 9 },
      { month: "Aug", temp: 25, rain: 32, rainyDays: 5, wind: 9 },
      { month: "Sep", temp: 21, rain: 35, rainyDays: 6, wind: 10 },
      { month: "Oct", temp: 15, rain: 38, rainyDays: 7, wind: 10 },
      { month: "Nov", temp: 9, rain: 30, rainyDays: 6, wind: 10 },
      { month: "Dec", temp: 4, rain: 22, rainyDays: 5, wind: 10 }
    ]
  },
  "madrid": {
    city: "Madrid",
    country: "Spain",
    months: [
      { month: "Jan", temp: 6, rain: 33, rainyDays: 6, wind: 12 },
      { month: "Feb", temp: 8, rain: 34, rainyDays: 6, wind: 13 },
      { month: "Mar", temp: 11, rain: 26, rainyDays: 5, wind: 14 },
      { month: "Apr", temp: 13, rain: 45, rainyDays: 8, wind: 13 },
      { month: "May", temp: 18, rain: 42, rainyDays: 7, wind: 12 },
      { month: "Jun", temp: 24, rain: 20, rainyDays: 3, wind: 12 },
      { month: "Jul", temp: 28, rain: 10, rainyDays: 1, wind: 11 },
      { month: "Aug", temp: 27, rain: 10, rainyDays: 2, wind: 11 },
      { month: "Sep", temp: 22, rain: 25, rainyDays: 4, wind: 11 },
      { month: "Oct", temp: 16, rain: 45, rainyDays: 7, wind: 12 },
      { month: "Nov", temp: 10, rain: 45, rainyDays: 7, wind: 12 },
      { month: "Dec", temp: 7, rain: 40, rainyDays: 7, wind: 12 }
    ]
  },
  "lisbon": {
    city: "Lisbon",
    country: "Portugal",
    months: [
      { month: "Jan", temp: 12, rain: 95, rainyDays: 11, wind: 14 },
      { month: "Feb", temp: 12, rain: 80, rainyDays: 10, wind: 14 },
      { month: "Mar", temp: 14, rain: 50, rainyDays: 8, wind: 15 },
      { month: "Apr", temp: 16, rain: 55, rainyDays: 9, wind: 14 },
      { month: "May", temp: 18, rain: 38, rainyDays: 6, wind: 13 },
      { month: "Jun", temp: 21, rain: 12, rainyDays: 3, wind: 13 },
      { month: "Jul", temp: 24, rain: 4, rainyDays: 1, wind: 14 },
      { month: "Aug", temp: 24, rain: 5, rainyDays: 1, wind: 13 },
      { month: "Sep", temp: 22, rain: 25, rainyDays: 4, wind: 12 },
      { month: "Oct", temp: 18, rain: 75, rainyDays: 9, wind: 12 },
      { month: "Nov", temp: 14, rain: 95, rainyDays: 11, wind: 13 },
      { month: "Dec", temp: 12, rain: 100, rainyDays: 11, wind: 14 }
    ]
  },
  "bucharest": {
    city: "Bucharest",
    country: "Romania",
    months: [
      { month: "Jan", temp: -1, rain: 38, rainyDays: 8, wind: 15 },
      { month: "Feb", temp: 1, rain: 32, rainyDays: 7, wind: 16 },
      { month: "Mar", temp: 6, rain: 35, rainyDays: 8, wind: 15 },
      { month: "Apr", temp: 12, rain: 45, rainyDays: 10, wind: 13 },
      { month: "May", temp: 18, rain: 62, rainyDays: 11, wind: 12 },
      { month: "Jun", temp: 22, rain: 72, rainyDays: 10, wind: 11 },
      { month: "Jul", temp: 24, rain: 55, rainyDays: 8, wind: 10 },
      { month: "Aug", temp: 24, rain: 45, rainyDays: 6, wind: 10 },
      { month: "Sep", temp: 19, rain: 38, rainyDays: 6, wind: 11 },
      { month: "Oct", temp: 13, rain: 40, rainyDays: 7, wind: 13 },
      { month: "Nov", temp: 6, rain: 42, rainyDays: 8, wind: 14 },
      { month: "Dec", temp: 1, rain: 42, rainyDays: 9, wind: 15 }
    ]
  },
  "istanbul": {
    "city": "Istanbul",
    "country": "Turkey",
    "months": [
      { "month": "Jan", "temp": 6, "rain": 99, "rainyDays": 12, "wind": 14 },
      { "month": "Feb", "temp": 6, "rain": 72, "rainyDays": 10, "wind": 14 },
      { "month": "Mar", "temp": 8, "rain": 66, "rainyDays": 10, "wind": 14 },
      { "month": "Apr", "temp": 12, "rain": 46, "rainyDays": 8, "wind": 11 },
      { "month": "May", "temp": 17, "rain": 33, "rainyDays": 6, "wind": 11 },
      { "month": "Jun", "temp": 22, "rain": 23, "rainyDays": 4, "wind": 11 },
      { "month": "Jul", "temp": 24, "rain": 14, "rainyDays": 2, "wind": 14 },
      { "month": "Aug", "temp": 24, "rain": 15, "rainyDays": 3, "wind": 14 },
      { "month": "Sep", "temp": 21, "rain": 28, "rainyDays": 4, "wind": 11 },
      { "month": "Oct", "temp": 16, "rain": 64, "rainyDays": 8, "wind": 11 },
      { "month": "Nov", "temp": 12, "rain": 93, "rainyDays": 10, "wind": 14 },
      { "month": "Dec", "temp": 8, "rain": 109, "rainyDays": 12, "wind": 14 }
    ]
  }
};

const NEWS_ITEMS = [
  { date: "2025-01-15", text: "Antoine Dupont named World Rugby Player of the Year for the third time, inspiring a new generation at Toulouse academy", academy: "toulouse-rugby-elite" },
  { date: "2025-01-10", text: "Leinster Rugby Academy announces expanded international intake for 2025-26 season with new residential facilities", academy: "leinster-rugby-academy" },
  { date: "2024-12-20", text: "Bath Rugby Academy graduate selected for England Six Nations squad ahead of 2025 Championship", academy: "bath-rugby-academy" },
  { date: "2024-12-05", text: "Georgian Rugby Union partners with World Rugby to upgrade Tbilisi academy facilities with new indoor training centre", academy: "georgia-rugby-tbilisi" },
  { date: "2024-11-18", text: "Cardiff Rugby Academy launches bilingual coaching programme in English and Welsh for 2025 intake", academy: "cardiff-rugby-academy" }
];

const COUNTRIES = [...new Set(ACADEMIES.map(a => a.country))];
