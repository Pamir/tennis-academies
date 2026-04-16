import json

academies_data = [
    {
        "id": "seve-ballesteros",
        "name": "Seve Ballesteros Golf Academy",
        "country": "Spain",
        "countryFlag": "\u{1f1ea}\u{1f1f8}",
        "city": "Santander",
        "lat": 43.4623,
        "lng": -3.8100,
        "website": "https://www.seveballesterosgolf.com",
        "contact": "+34 942 577 000",
        "individualLessons": True,
        "boarding": True,
        "level": "All levels",
        "starred": True,
        "airport": {"name": "Santander Airport", "code": "SDR", "distance": "5 km", "driveTime": "10 min"},
        "beach": {"distance": "2 km", "description": "Playa del Sardinero, beautiful bay beaches"},
        "climate": "santander",
        "priceRange": {"from": 2000, "to": 8000, "unit": "month", "display": "\u20ac2,000\u20138,000/mo"},
        "programs": [
            {"name": "Junior Development", "price": "\u20ac2,000/mo", "desc": "Fundamentals, short game, course management for juniors"},
            {"name": "Intensive Camp", "price": "\u20ac3,500/mo", "desc": "Full-day training with video analysis and fitness"},
            {"name": "Elite Performance", "price": "\u20ac5,500/mo", "desc": "Tour-level coaching, mental game, tournament prep"},
            {"name": "VIP Private", "price": "\u20ac8,000/mo", "desc": "One-on-one coaching, custom schedule, all amenities"}
        ],
        "coaches": [
            {"name": "Carlos Rivero", "credential": "PGA Professional", "background": "Former European Tour player, 15 years coaching", "pgaTour": False, "bestRanking": None, "rankingNote": "European Tour veteran", "languages": ["Spanish", "English"], "instagram": None},
            {"name": "Maria Lopez", "credential": "PGA of Spain", "background": "Spanish national team coach, youth development specialist", "pgaTour": False, "bestRanking": None, "languages": ["Spanish", "English", "French"], "instagram": None}
        ],
        "bestCoachRanking": None,
        "facilities": "18-hole championship course, driving range, short game area, putting greens, fitness center",
        "courtSurfaces": ["18-Hole Championship", "Driving Range", "Putting Green", "Short Game Area"],
        "notableAlumni": [],
        "description": "Named after the legendary Seve Ballesteros, this academy in his hometown offers world-class golf training on the stunning Cantabrian coast.",
        "nearbyHotels": [
            {"name": "Hotel Real", "stars": 5, "distanceKm": 1.5, "features": ["Restaurant", "Spa", "Pool", "Bar"], "pool": True, "wifi": True, "pricePerNight": "\u20ac180"},
            {"name": "Hotel Bahia", "stars": 4, "distanceKm": 0.8, "features": ["Restaurant", "Bar", "Room Service"], "pool": False, "wifi": True, "pricePerNight": "\u20ac110"},
            {"name": "Silken Coliseum", "stars": 4, "distanceKm": 2, "features": ["Restaurant", "Gym", "Parking"], "pool": False, "wifi": True, "pricePerNight": "\u20ac85"},
            {"name": "Hotel Chiqui", "stars": 4, "distanceKm": 1, "features": ["Restaurant", "Pool", "Beach Access"], "pool": True, "wifi": True, "pricePerNight": "\u20ac95"},
            {"name": "Pension Plaza Porticada", "stars": 2, "distanceKm": 0.5, "features": ["Parking"], "pool": False, "wifi": True, "pricePerNight": "\u20ac45"}
        ],
        "nearbyRestaurants": [
            {"name": "El Serbal", "cuisine": "Spanish Fine Dining", "distanceKm": 1, "priceRange": "\u20ac\u20ac\u20ac\u20ac", "rating": 4.7, "vegetarian": True, "outdoor": True},
            {"name": "Bodega del Riojano", "cuisine": "Spanish Traditional", "distanceKm": 0.8, "priceRange": "\u20ac\u20ac", "rating": 4.5, "vegetarian": True, "outdoor": True},
            {"name": "La Conveniente", "cuisine": "Seafood", "distanceKm": 1.2, "priceRange": "\u20ac\u20ac\u20ac", "rating": 4.4, "vegetarian": False, "outdoor": True},
            {"name": "Canas y Tapas", "cuisine": "Tapas", "distanceKm": 0.5, "priceRange": "\u20ac", "rating": 4.2, "vegetarian": True, "outdoor": True},
            {"name": "Maremondo", "cuisine": "Mediterranean", "distanceKm": 1.5, "priceRange": "\u20ac\u20ac\u20ac", "rating": 4.3, "vegetarian": True, "outdoor": False}
        ],
        "nearbyMedical": [
            {"name": "Hospital Universitario Marques de Valdecilla", "type": "Hospital", "distanceKm": 3, "phone": "+34 942 202 520", "emergency": True},
            {"name": "Clinica Mompia", "type": "Clinic", "distanceKm": 5, "phone": "+34 942 351 100", "emergency": True},
            {"name": "FisioSport Santander", "type": "Physiotherapy", "distanceKm": 2, "phone": "+34 942 227 890", "emergency": False}
        ],
        "costOfLiving": {"rent1Bed": "\u20ac550", "meal": "\u20ac12", "monthlyFood": "\u20ac300", "transport": "\u20ac40", "currency": "EUR", "summary": "Santander offers moderate costs with excellent quality of life on the coast"},
        "scholarships": {"available": True, "details": "Merit-based scholarships for talented junior golfers. Contact academy for eligibility."},
        "visaInfo": {"schengen": True, "eu": True, "visaFreeCountries": "EU/EEA citizens free entry, US/UK/Canada/Australia visa-free up to 90 days", "notes": "Schengen zone. Non-EU citizens need Schengen visa for stays over 90 days."},
        "airportTransfers": [
            {"mode": "Taxi", "duration": "10 min", "cost": "\u20ac10\u201315", "notes": "Available at airport"},
            {"mode": "Bus", "duration": "25 min", "cost": "\u20ac2.50", "notes": "Regular service to city center"},
            {"mode": "Private Transfer", "duration": "10 min", "cost": "\u20ac20\u201330", "notes": "Pre-book online"}
        ],
        "nearbyTournaments": [
            {"name": "Santander Golf Tour", "level": "National", "surface": "Links", "month": "July", "venue": "Real Golf de Pedre\u00f1a"},
            {"name": "Spanish Amateur Championship", "level": "National", "surface": "Parkland", "month": "June", "venue": "Various"},
            {"name": "European Challenge Tour - Spain", "level": "Challenge Tour", "surface": "Parkland", "month": "September", "venue": "Various"}
        ],
        "videoTour": None
    },
]

# I'll write this as a proper generator
