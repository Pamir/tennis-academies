const fs = require('fs');
const F = {
  ES:'\uD83C\uDDEA\uD83C\uDDF8', GB:'\uD83C\uDDEC\uD83C\uDDE7', DE:'\uD83C\uDDE9\uD83C\uDDEA',
  FR:'\uD83C\uDDEB\uD83C\uDDF7', IT:'\uD83C\uDDEE\uD83C\uDDF9', PT:'\uD83C\uDDF5\uD83C\uDDF9',
  NL:'\uD83C\uDDF3\uD83C\uDDF1', BE:'\uD83C\uDDE7\uD83C\uDDEA', HR:'\uD83C\uDDED\uD83C\uDDF7',
  RS:'\uD83C\uDDF7\uD83C\uDDF8', TR:'\uD83C\uDDF9\uD83C\uDDF7', SE:'\uD83C\uDDF8\uD83C\uDDEA',
  CZ:'\uD83C\uDDE8\uD83C\uDDFF', PL:'\uD83C\uDDF5\uD83C\uDDF1', AT:'\uD83C\uDDE6\uD83C\uDDF9',
  GR:'\uD83C\uDDEC\uD83C\uDDF7'
};

function hotel(name,dist,price,rating,web){return{name,distance:dist,priceRange:price,rating,website:web}}
function rest(name,cuisine,dist,price,rating){return{name,cuisine,distance:dist,priceRange:price,rating}}
function med(name,type,dist,emerg,phone){return{name,type,distance:dist,emergency:emerg,phone}}
function air(apt,dist,time,opts){return{airport:apt,distance:dist,transferTime:time,options:opts}}
function tourn(name,dist,surf,cat,month){return{name,distance:dist,surface:surf,category:cat,month}}
function prog(name,dur,lvl,price,desc){return{name,duration:dur,level:lvl,price,description:desc}}
function coach(name,role,exp,pro,rank,bio){return{name,role,experience:exp,proCareer:pro,bestRanking:rank,bio}}
function alum(name,ach,yr){return{name,achievement:ach,yearCompleted:yr}}
function schol(name,cov,elig,dl){return{name,coverage:cov,eligibility:elig,deadline:dl}}

const allMonths = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const stdSurfaces = ['Natural Grass','Artificial Turf','Indoor','Futsal Court'];
const stdAgeGroups = ['U8','U10','U12','U14','U16','U18','U21','Reserve'];

const ACADEMIES = [  {
    id:'lamasia', name:'FC Barcelona La Masia', country:`Spain ${F.ES}`, city:'Barcelona',
    coordinates:{lat:41.3809,lng:2.1228}, website:'https://www.fcbarcelona.com/en/club/la-masia',
    phone:'+34 93 496 36 00', email:'lamasia@fcbarcelona.cat', founded:1979, starred:true, level:'Elite',
    description:'One of the most prestigious football academies in the world, La Masia has produced generations of world-class players who defined the beautiful game. Known for its unique philosophy of positional play and technical excellence.',
    courtSurfaces:stdSurfaces, ageGroups:stdAgeGroups, trainingMonths:allMonths,
    programs:[
      prog('Full-Time Residency','10 months','Elite','By invitation only','Full board residential program for scouted players aged 8-18 with education and daily training.'),
      prog('Summer Experience Camp','2 weeks','Intermediate',3200,'Intensive summer program open to international players aged 10-17.'),
      prog('Barca Academy Satellite','6 months','All levels',4500,'Part-time training program following La Masia methodology at partner locations.')
    ],
    coaches:[
      coach('Albert Puig','Technical Director',25,true,'Former youth international','Architect of the global Barca Academy network, expert in positional play methodology.'),
      coach('Sergi Mila','Head Youth Coach',18,true,'Segunda Division veteran','Specialist in developing young midfielders with La Masia DNA.')
    ],
    notableAlumni:[
      alum('Lionel Messi','All-time top scorer, 8x Ballon d\'Or winner',2004),
      alum('Andres Iniesta','World Cup 2010 winning goal scorer',2002),
      alum('Xavi Hernandez','World Cup and Euro champion, legendary midfielder',1998),
      alum('Pedri','Golden Boy 2021, Kopa Trophy winner',2020)
    ],
    hotels:[
      hotel('Hotel Arts Barcelona',8,'250-500',4.8,'https://www.hotelartsbarcelona.com'),
      hotel('W Barcelona',10,'200-450',4.7,'https://www.marriott.com/w-barcelona'),
      hotel('Hotel 1898',6,'150-300',4.5,'https://www.hotel1898.com'),
      hotel('Catalonia Plaza Catalunya',5,'100-200',4.3,'https://www.cataloniahotels.com'),
      hotel('Generator Barcelona',7,'30-80',4.0,'https://staygenerator.com/barcelona')
    ],
    restaurants:[
      rest('Cal Pep','Catalan Tapas',7,'30-60',4.7),
      rest('Tickets Bar','Creative Spanish',4,'40-80',4.8),
      rest('La Boqueria Market','Market Food',6,'10-25',4.6),
      rest('Cerveceria Catalana','Spanish',5,'20-40',4.5),
      rest('Flax and Kale','Healthy/Vegan',6,'15-30',4.4)
    ],
    medicalFacilities:[
      med('Hospital Clinic de Barcelona','General Hospital',3,true,'+34 93 227 54 00'),
      med('Clinica Diagonal','Sports Medicine',5,false,'+34 93 439 15 00'),
      med('Centro Medico Teknon','Private Hospital',6,true,'+34 93 290 62 00')
    ],
    airportTransfers:[
      air('Barcelona-El Prat (BCN)',15,'25-40 min',['Taxi','Aerobus','Metro','Private Transfer']),
      air('Girona-Costa Brava (GRO)',100,'75-90 min',['Bus','Private Transfer']),
      air('Reus (REU)',110,'80-100 min',['Bus','Private Transfer'])
    ],
    nearbyTournaments:[
      tourn('Mediterranean International Cup',0,'Natural Grass','Youth International','March'),
      tourn('Copa Catalunya Youth',20,'Natural Grass','Regional Youth','May'),
      tourn('LaLiga Promises',0,'Indoor','National Youth','December')
    ],
    costOfLiving:{meal:12,accommodation:900,transport:55},
    visa:{required:true,type:'Schengen Visa / Student Visa',duration:'90 days / 1 year',processingTime:'2-8 weeks'},
    scholarships:[
      schol('La Masia Full Scholarship','Full tuition, board, education','Exceptional talent scouted by Barca','Rolling'),
      schol('International Talent Grant','50% tuition','Top performers in summer camps','August')
    ],
    gallery:['lamasia_aerial.jpg','lamasia_training.jpg','lamasia_residence.jpg','lamasia_pitch.jpg']
  },
  {
    id:'realmadrid', name:'Real Madrid Academy', country:`Spain ${F.ES}`, city:'Madrid',
    coordinates:{lat:40.4531,lng:-3.6883}, website:'https://www.realmadrid.com/en/football/academy',
    phone:'+34 91 398 43 00', email:'cantera@realmadrid.es', founded:1989, starred:true, level:'Elite',
    description:'Real Madrid\'s La Fabrica academy has been producing world-class talent for decades. Located at the Ciudad Real Madrid training complex in Valdebebas, it combines elite football development with academic education.',
    courtSurfaces:stdSurfaces, ageGroups:stdAgeGroups, trainingMonths:allMonths,
    programs:[
      prog('La Fabrica Residency','10 months','Elite','By invitation only','Full residential program at Ciudad Real Madrid for scouted talent.'),
      prog('Real Madrid Foundation Camp','1 week','All levels',1800,'International football campus with Real Madrid methodology.'),
      prog('High Performance Program','3 months','Advanced',5500,'Intensive training block for elite youth players.')
    ],
    coaches:[
      coach('Raul Gonzalez','Castilla Manager',12,true,'323 goals for Real Madrid','Legendary striker turned youth development specialist.'),
      coach('Alvaro Arbeloa','Youth Coordinator',8,true,'56 Spain caps','Former defender bringing tactical excellence to academy coaching.')
    ],
    notableAlumni:[
      alum('Raul Gonzalez','Real Madrid all-time legend, 323 goals',1994),
      alum('Iker Casillas','World Cup winner, Champions League icon',1999),
      alum('Dani Carvajal','Multiple Champions League winner',2012),
      alum('Federico Valverde','Key midfielder for club and Uruguay',2018)
    ],
    hotels:[
      hotel('Hotel Villa Magna',12,'300-600',4.9,'https://www.villamagna.com'),
      hotel('NH Collection Madrid Eurobuilding',5,'150-300',4.5,'https://www.nh-hotels.com'),
      hotel('Hotel Puerta America',8,'120-250',4.4,'https://www.hotelpuertamerica.com'),
      hotel('Ibis Madrid Aeropuerto',3,'60-100',3.9,'https://www.ibis.com'),
      hotel('Generator Madrid',15,'25-60',4.0,'https://staygenerator.com/madrid')
    ],
    restaurants:[
      rest('Sobrino de Botin','Traditional Spanish',15,'35-70',4.7),
      rest('StreetXO','Fusion',14,'30-55',4.6),
      rest('Mercado de San Miguel','Market Food',16,'10-30',4.5),
      rest('La Barraca','Paella/Seafood',14,'25-45',4.5),
      rest('Honest Greens','Healthy',10,'12-25',4.3)
    ],
    medicalFacilities:[
      med('Hospital Universitario La Paz','General Hospital',6,true,'+34 91 727 70 00'),
      med('Clinica CEMTRO','Sports Medicine',8,false,'+34 91 735 57 57'),
      med('Sanitas La Moraleja','Private Hospital',4,true,'+34 91 752 67 00')
    ],
    airportTransfers:[
      air('Madrid-Barajas (MAD)',8,'15-25 min',['Taxi','Metro','Bus','Private Transfer']),
      air('Toledo (no commercial)',75,'60-80 min',['Private Transfer']),
      air('Segovia (no commercial)',95,'70-90 min',['Private Transfer'])
    ],
    nearbyTournaments:[
      tourn('LaLiga Promises',0,'Indoor','National Youth','December'),
      tourn('Torneo Internacional Madrid',10,'Natural Grass','Youth International','June'),
      tourn('Copa de Espana Juvenil',0,'Natural Grass','National Youth','April')
    ],
    costOfLiving:{meal:11,accommodation:850,transport:55},
    visa:{required:true,type:'Schengen Visa / Student Visa',duration:'90 days / 1 year',processingTime:'2-8 weeks'},
    scholarships:[
      schol('Real Madrid Foundation Scholarship','Full tuition','Talented underprivileged youth','March'),
      schol('International Development Grant','75% tuition','Outstanding international campers','September')
    ],
    gallery:['realmadrid_valdebebas.jpg','realmadrid_training.jpg','realmadrid_facility.jpg','realmadrid_pitch.jpg']
  },  {
    id:'atletico', name:'Atletico Madrid Academy', country:`Spain ${F.ES}`, city:'Madrid',
    coordinates:{lat:40.4361,lng:-3.5994}, website:'https://en.atleticodemadrid.com/academy',
    phone:'+34 91 366 47 07', email:'cantera@atleticodemadrid.com', founded:1987, starred:false, level:'Pro',
    description:'Atletico Madrid\'s academy emphasizes defensive discipline, tactical awareness, and fighting spirit. Located at the Wanda Metropolitano complex, it develops players who embody the club\'s warrior mentality.',
    courtSurfaces:['Natural Grass','Artificial Turf','Indoor'], ageGroups:['U10','U12','U14','U16','U18','U21','Reserve'], trainingMonths:allMonths,
    programs:[
      prog('Academy Residency','10 months','Elite','By invitation only','Full-time residential development program for scouted youth.'),
      prog('Summer Football School','2 weeks','Intermediate',2500,'Summer intensive camp for international youth players.'),
      prog('Elite Development Camp','1 month','Advanced',3800,'High-intensity tactical training for advanced players.')
    ],
    coaches:[
      coach('Carlos Gonzalez','Academy Director',20,true,'Former Segunda Division player','Oversees all youth development pathways at the club.'),
      coach('Pablo Ibanez','U18 Head Coach',10,true,'40 Spain caps','Former center-back bringing defensive mastery to coaching.')
    ],
    notableAlumni:[
      alum('Fernando Torres','Atletico legend, World Cup and Euro champion',2001),
      alum('Koke','Club captain, record appearance holder',2009),
      alum('Gabi Fernandez','Long-serving captain and midfield anchor',1998),
      alum('Saul Niguez','Versatile midfielder, youth product star',2012)
    ],
    hotels:[
      hotel('Hotel Nuevo Boston',4,'80-150',4.2,'https://www.hotelnuevoboston.com'),
      hotel('Axor Feria',6,'70-130',4.0,'https://www.axorhoteles.com'),
      hotel('Ibis Budget Madrid Vallecas',5,'45-75',3.7,'https://www.ibis.com'),
      hotel('NH Madrid Ventas',8,'90-170',4.3,'https://www.nh-hotels.com'),
      hotel('Hotel Claridge Madrid',12,'60-120',3.9,'https://www.hotelclaridge.es')
    ],
    restaurants:[
      rest('Casa Mingo','Traditional Asturian',10,'15-30',4.4),
      rest('La Tahona de Arturo Soria','Bakery/Cafe',5,'10-20',4.3),
      rest('El Rincon de Jaen','Andalusian',6,'20-35',4.2),
      rest('Lateral','Modern Spanish',12,'25-45',4.5),
      rest('Vips','Casual Dining',3,'12-22',3.9)
    ],
    medicalFacilities:[
      med('Hospital Universitario Gregorio Maranon','General Hospital',10,true,'+34 91 586 80 00'),
      med('Clinica Cemtro','Sports Medicine',12,false,'+34 91 735 57 57'),
      med('Hospital Vithas La Milagrosa','Private Hospital',8,true,'+34 91 447 51 00')
    ],
    airportTransfers:[
      air('Madrid-Barajas (MAD)',12,'20-30 min',['Taxi','Metro','Bus','Private Transfer']),
      air('Madrid-Torrejon (military)',8,'15-20 min',['Private Transfer']),
      air('Cuatro Vientos (small)',20,'25-35 min',['Private Transfer'])
    ],
    nearbyTournaments:[
      tourn('Copa Atletico Youth',0,'Natural Grass','Club Youth','October'),
      tourn('Madrid Youth League',5,'Natural Grass','Regional Youth','Year-round')
    ],
    costOfLiving:{meal:11,accommodation:800,transport:55},
    visa:{required:true,type:'Schengen Visa / Student Visa',duration:'90 days / 1 year',processingTime:'2-8 weeks'},
    scholarships:[
      schol('Atletico Youth Scholarship','Full tuition and board','Scouted talent under 16','Rolling'),
      schol('International Camp Bursary','30% camp fees','Financial need applicants','May')
    ],
    gallery:['atletico_training.jpg','atletico_facility.jpg','atletico_pitch.jpg']
  },
  {
    id:'mancity', name:'Manchester City Academy', country:`United Kingdom ${F.GB}`, city:'Manchester',
    coordinates:{lat:53.4831,lng:-2.2004}, website:'https://www.mancity.com/academy',
    phone:'+44 161 444 1894', email:'academy@mancity.com', founded:1998, starred:false, level:'Elite',
    description:'The Etihad Campus is a world-class 80-acre facility featuring 16 outdoor pitches, a 7,000-seat academy stadium, and cutting-edge sport science labs. City\'s academy integrates Pep Guardiola\'s playing philosophy throughout all age groups.',
    courtSurfaces:stdSurfaces, ageGroups:stdAgeGroups, trainingMonths:allMonths,
    programs:[
      prog('Full-Time Academy','10 months','Elite','By invitation only','Elite residential program with integrated schooling at the Etihad Campus.'),
      prog('City Football Schools','1 week','All levels',600,'Weekly camps during school holidays for players aged 5-16.'),
      prog('Elite Development Squad','6 months','Advanced',4200,'Extended program for high-potential players bridging academy and first team.')
    ],
    coaches:[
      coach('Jason Wilcox','Academy Director',15,true,'50+ Premier League appearances','Former winger overseeing the entire City academy pathway.'),
      coach('Ben Wilkinson','U21 Head Coach',12,true,'Lower league career','Specialist in transitioning youth players to first-team level.')
    ],
    notableAlumni:[
      alum('Phil Foden','Premier League champion, PFA Young Player of Year',2020),
      alum('Jadon Sancho','England international, top prospect',2017),
      alum('Cole Palmer','Rising star, England international',2022),
      alum('Rico Lewis','Youngest CL scorer for City',2023)
    ],
    hotels:[
      hotel('Hotel Football',6,'120-250',4.5,'https://www.hotelfootball.com'),
      hotel('Hilton Manchester Deansgate',5,'100-220',4.4,'https://www.hilton.com'),
      hotel('Premier Inn Manchester City Centre',4,'60-100',4.1,'https://www.premierinn.com'),
      hotel('The Lowry Hotel',7,'180-350',4.7,'https://www.thelowryhotel.com'),
      hotel('YHA Manchester',3,'20-50',3.8,'https://www.yha.org.uk/manchester')
    ],
    restaurants:[
      rest('Hawksmoor Manchester','Steakhouse',5,'35-70',4.7),
      rest('Rudy\'s Pizza','Neapolitan Pizza',4,'10-20',4.6),
      rest('Dishoom Manchester','Indian',5,'15-30',4.5),
      rest('Mackie Mayor','Food Hall',6,'10-25',4.4),
      rest('Bundobust','Indian Street Food',5,'8-15',4.3)
    ],
    medicalFacilities:[
      med('Manchester Royal Infirmary','General Hospital',5,true,'+44 161 276 1234'),
      med('BUPA Cromwell Hospital Manchester','Private Hospital',6,false,'+44 161 272 8200'),
      med('Manchester Institute of Health and Performance','Sports Medicine',1,false,'+44 161 276 4000')
    ],
    airportTransfers:[
      air('Manchester Airport (MAN)',15,'25-40 min',['Taxi','Train','Bus','Private Transfer']),
      air('Liverpool John Lennon (LPL)',55,'50-65 min',['Bus','Private Transfer']),
      air('Leeds Bradford (LBA)',70,'60-80 min',['Private Transfer'])
    ],
    nearbyTournaments:[
      tourn('Premier League 2',0,'Natural Grass','Reserve League','Year-round'),
      tourn('EFL Trophy',10,'Natural Grass','Cup Competition','September-March'),
      tourn('Manchester Senior Cup',5,'Natural Grass','Regional','October-May')
    ],
    costOfLiving:{meal:10,accommodation:750,transport:70},
    visa:{required:true,type:'UK Student Visa / Youth Mobility',duration:'Up to 2 years',processingTime:'3-8 weeks'},
    scholarships:[
      schol('City in the Community Scholarship','Full tuition and housing','Local disadvantaged youth','June'),
      schol('International Academy Bursary','50% fees','Outstanding overseas trialists','Rolling')
    ],
    gallery:['mancity_etihad_campus.jpg','mancity_academy.jpg','mancity_pitch.jpg','mancity_stadium.jpg']
  },  {
    id:'chelsea', name:'Chelsea FC Academy', country:`United Kingdom ${F.GB}`, city:'London',
    coordinates:{lat:51.4816,lng:-0.1910}, website:'https://www.chelseafc.com/en/academy',
    phone:'+44 20 7386 9373', email:'academy@chelseafc.com', founded:1905, starred:false, level:'Elite',
    description:'Chelsea\'s Cobham Training Centre houses one of England\'s most productive academies. Recent years have seen an unprecedented wave of homegrown talent break into the first team and become international stars.',
    courtSurfaces:stdSurfaces, ageGroups:stdAgeGroups, trainingMonths:allMonths,
    programs:[
      prog('Cobham Academy','10 months','Elite','By invitation only','Full-time residential academy at the Cobham Training Centre.'),
      prog('Chelsea FC Foundation Camp','1 week','All levels',550,'Holiday camps for young players aged 5-15 across London.'),
      prog('International Development Tour','2 weeks','Advanced',3500,'Overseas training experience with Chelsea coaches.')
    ],
    coaches:[
      coach('Neil Bath','Academy Director',20,false,'N/A','Longest-serving academy director in Premier League, produced multiple first-team players.'),
      coach('Ed Brand','U21 Coach',10,true,'Lower league career','Tactical coach focused on transition play and pressing.')
    ],
    notableAlumni:[
      alum('Mason Mount','England international, Champions League winner',2019),
      alum('Reece James','Chelsea captain, England defender',2019),
      alum('Callum Hudson-Odoi','England international, pacy winger',2019),
      alum('John Terry','Chelsea legend, Champions League finalist captain',1998)
    ],
    hotels:[
      hotel('The Chelsea Harbour Hotel',3,'180-350',4.6,'https://www.millenniumhotels.com'),
      hotel('Holiday Inn Express Chelsea',2,'90-150',4.0,'https://www.ihg.com'),
      hotel('Travelodge London Fulham',4,'50-90',3.6,'https://www.travelodge.co.uk'),
      hotel('The Hoxton Southwark',8,'140-280',4.5,'https://www.thehoxton.com'),
      hotel('Safestay London Kensington',5,'25-55',3.9,'https://www.safestay.com')
    ],
    restaurants:[
      rest('Bluebird Chelsea','Modern European',2,'30-60',4.4),
      rest('Big Easy Chelsea','BBQ/American',2,'20-40',4.3),
      rest('My Old Dutch','Pancakes',4,'10-20',4.2),
      rest('Hache Burgers','Gourmet Burgers',3,'12-25',4.3),
      rest('Comptoir Libanais','Lebanese',5,'10-22',4.1)
    ],
    medicalFacilities:[
      med('Chelsea and Westminster Hospital','General Hospital',2,true,'+44 20 3315 8000'),
      med('The Lister Hospital','Private Hospital',3,false,'+44 20 7730 7733'),
      med('Parsons Green Walk-in Centre','Clinic',4,true,'+44 20 8846 6758')
    ],
    airportTransfers:[
      air('London Heathrow (LHR)',22,'35-55 min',['Taxi','Tube','Bus','Private Transfer']),
      air('London Gatwick (LGW)',45,'55-75 min',['Train','Bus','Private Transfer']),
      air('London City (LCY)',18,'40-55 min',['DLR','Taxi','Private Transfer'])
    ],
    nearbyTournaments:[
      tourn('Premier League 2',0,'Natural Grass','Reserve League','Year-round'),
      tourn('FA Youth Cup',0,'Natural Grass','National Youth Cup','October-April'),
      tourn('London Senior Cup',10,'Natural Grass','Regional','Year-round')
    ],
    costOfLiving:{meal:14,accommodation:1200,transport:80},
    visa:{required:true,type:'UK Student Visa / Youth Mobility',duration:'Up to 2 years',processingTime:'3-8 weeks'},
    scholarships:[
      schol('Chelsea Foundation Scholarship','Full tuition','Exceptional local talent','Rolling'),
      schol('Cobham Elite Bursary','Housing and tuition','International trialists','January')
    ],
    gallery:['chelsea_cobham.jpg','chelsea_training.jpg','chelsea_academy.jpg','chelsea_pitch.jpg']
  },
  {
    id:'bayernmunich', name:'Bayern Munich Academy', country:`Germany ${F.DE}`, city:'Munich',
    coordinates:{lat:48.2188,lng:11.6247}, website:'https://fcbayern.com/en/club/youth-development',
    phone:'+49 89 69931 0', email:'nachwuchs@fcbayern.de', founded:1995, starred:false, level:'Elite',
    description:'FC Bayern Munich\'s Campus is a state-of-the-art youth development center opened in 2017. It houses all youth teams under one roof with world-class pitches, gym, and residential facilities, following the German model of excellence.',
    courtSurfaces:stdSurfaces, ageGroups:stdAgeGroups, trainingMonths:allMonths,
    programs:[
      prog('FC Bayern Campus','10 months','Elite','By invitation only','Full-time residential academy at the 30-hectare Bayern Campus.'),
      prog('Bayern Youth Cup Camp','1 week','Intermediate',1200,'International youth camp with Bayern coaches and methodology.'),
      prog('Elite Performance Program','3 months','Advanced',4000,'Advanced training program for scouted regional talent.')
    ],
    coaches:[
      coach('Jochen Sauer','Academy Director',18,false,'N/A','Oversees the entire FC Bayern Campus operations and development philosophy.'),
      coach('Martin Demichelis','Former U19 Coach',8,true,'65 Argentina caps','Former Manchester City defender who coached Bayern youth before moving on.')
    ],
    notableAlumni:[
      alum('Thomas Muller','Bayern legend, World Cup winner, record appearances',2009),
      alum('David Alaba','Champions League winner with Bayern and Real Madrid',2009),
      alum('Bastian Schweinsteiger','World Cup 2014 hero, Bayern legend',2002),
      alum('Philipp Lahm','World Cup winning captain, Bayern icon',1995)
    ],
    hotels:[
      hotel('Hotel Vier Jahreszeiten Kempinski',12,'300-600',4.8,'https://www.kempinski.com/munich'),
      hotel('Novotel Munich City',6,'100-200',4.2,'https://www.novotel.com'),
      hotel('Motel One Munich-Sendlinger Tor',10,'70-110',4.3,'https://www.motel-one.com'),
      hotel('Hotel Laimer Hof',4,'80-150',4.1,'https://www.laimerhof.de'),
      hotel('Wombats City Hostel Munich',11,'25-50',4.0,'https://www.wombats-hostels.com/munich')
    ],
    restaurants:[
      rest('Hofbrauhaus','Traditional Bavarian',12,'15-30',4.5),
      rest('Brenner Grill','Modern European',10,'30-55',4.6),
      rest('Viktualienmarkt Stalls','Market Food',11,'8-20',4.4),
      rest('Augustiner Keller','Bavarian Beer Garden',9,'12-25',4.5),
      rest('Gratitude','Vegan/Healthy',10,'12-22',4.2)
    ],
    medicalFacilities:[
      med('Klinikum rechts der Isar','University Hospital',8,true,'+49 89 4140 0'),
      med('FIFA Medical Centre Munich','Sports Medicine',3,false,'+49 89 4140 7840'),
      med('Schon Klinik Munchen Harlaching','Private Hospital',6,true,'+49 89 6211 0')
    ],
    airportTransfers:[
      air('Munich Airport (MUC)',35,'40-55 min',['S-Bahn','Taxi','Bus','Private Transfer']),
      air('Memmingen Airport (FMM)',110,'75-100 min',['Bus','Private Transfer']),
      air('Innsbruck (INN)',165,'100-120 min',['Train','Private Transfer'])
    ],
    nearbyTournaments:[
      tourn('Bundesliga Youth',0,'Natural Grass','National Youth','Year-round'),
      tourn('Bayern Youth Cup',0,'Natural Grass','International Youth','May'),
      tourn('Suddeutsche Meisterschaft',50,'Natural Grass','Regional Youth','June')
    ],
    costOfLiving:{meal:12,accommodation:950,transport:60},
    visa:{required:true,type:'Schengen Visa / Student Visa',duration:'90 days / 1 year',processingTime:'2-6 weeks'},
    scholarships:[
      schol('Bayern Campus Scholarship','Full board and tuition','Top scouted German talent','Rolling'),
      schol('International Youth Grant','50% fees','Standout international campers','August')
    ],
    gallery:['bayern_campus.jpg','bayern_training.jpg','bayern_facility.jpg','bayern_pitch.jpg']
  },  {
    id:'dortmund', name:'Borussia Dortmund Academy', country:`Germany ${F.DE}`, city:'Dortmund',
    coordinates:{lat:51.4926,lng:7.4519}, website:'https://www.bvb.de/eng/BVB/Youth-Development',
    phone:'+49 231 90200', email:'nachwuchs@bvb.de', founded:1995, starred:false, level:'Pro',
    description:'Borussia Dortmund has built a reputation as one of Europe\'s best talent developers. The club\'s philosophy prioritizes giving young players first-team opportunities, making it a magnet for ambitious youth.',
    courtSurfaces:['Natural Grass','Artificial Turf','Indoor'], ageGroups:['U10','U12','U14','U16','U18','U21','Reserve'], trainingMonths:allMonths,
    programs:[
      prog('BVB Academy','10 months','Elite','By invitation only','Full-time youth development program with integrated schooling.'),
      prog('BVB Evonik Soccer School','1 week','All levels',800,'International holiday camp with BVB coaching methodology.'),
      prog('Talent Development Program','4 months','Advanced',3200,'Intensive scouting and development pathway for regional talent.')
    ],
    coaches:[
      coach('Lars Ricken','Youth Director',10,true,'Champions League final goal scorer 1997','Former BVB legend overseeing academy development.'),
      coach('Mike Tullberg','U19 Coach',8,true,'Danish lower division','Tactical coach known for developing attacking talent.')
    ],
    notableAlumni:[
      alum('Marco Reus','BVB legend, Bundesliga Player of the Year',2006),
      alum('Mario Gotze','World Cup 2014 final goal scorer',2009),
      alum('Christian Pulisic','US international, Chelsea and AC Milan star',2016),
      alum('Jude Bellingham','England star, Real Madrid midfielder',2020)
    ],
    hotels:[
      hotel('Radisson Blu Hotel Dortmund',6,'100-200',4.3,'https://www.radissonhotels.com'),
      hotel('B&B Hotel Dortmund-City',4,'55-90',3.9,'https://www.hotel-bb.com'),
      hotel('Mercure Hotel Dortmund Centrum',5,'80-150',4.1,'https://www.mercure.com'),
      hotel('Hotel Esplanade',7,'70-130',4.0,'https://www.hotel-esplanade-dortmund.de'),
      hotel('JugendHerberge Dortmund',3,'25-45',3.7,'https://www.jugendherberge.de')
    ],
    restaurants:[
      rest('Pfefferkorn Steakhouse','Steakhouse',5,'25-50',4.5),
      rest('Hansa Stube','German',4,'15-30',4.3),
      rest('Viva la Mexiko','Mexican',6,'12-25',4.2),
      rest('Flickenschild','Traditional German',5,'10-22',4.1),
      rest('Dean and David','Healthy/Salads',4,'8-15',4.0)
    ],
    medicalFacilities:[
      med('Klinikum Dortmund','General Hospital',5,true,'+49 231 953 0'),
      med('Sportmedizin Dortmund','Sports Medicine',2,false,'+49 231 953 2100'),
      med('St. Johannes Hospital','Private Hospital',6,true,'+49 231 1843 0')
    ],
    airportTransfers:[
      air('Dortmund Airport (DTM)',12,'15-25 min',['Taxi','Bus','Private Transfer']),
      air('Dusseldorf Airport (DUS)',75,'55-70 min',['Train','Private Transfer']),
      air('Cologne/Bonn (CGN)',110,'70-90 min',['Train','Private Transfer'])
    ],
    nearbyTournaments:[
      tourn('Bundesliga Youth',0,'Natural Grass','National Youth','Year-round'),
      tourn('Westfalenpokal',10,'Natural Grass','Regional Cup','September-May'),
      tourn('Revierderby Youth',30,'Natural Grass','Regional Derby','Year-round')
    ],
    costOfLiving:{meal:9,accommodation:600,transport:50},
    visa:{required:true,type:'Schengen Visa / Student Visa',duration:'90 days / 1 year',processingTime:'2-6 weeks'},
    scholarships:[
      schol('BVB Talent Scholarship','Full tuition and housing','Scouted Bundesliga-level talent','Rolling'),
      schol('Evonik Camp Bursary','50% camp fees','Talented international applicants','April')
    ],
    gallery:['dortmund_training.jpg','dortmund_academy.jpg','dortmund_pitch.jpg']
  },
  {
    id:'clairefontaine', name:'Clairefontaine INF', country:`France ${F.FR}`, city:'Clairefontaine-en-Yvelines',
    coordinates:{lat:48.6145,lng:1.9530}, website:'https://www.fff.fr/la-federation/clairefontaine',
    phone:'+33 1 34 83 20 00', email:'inf@fff.fr', founded:1988, starred:true, level:'Elite',
    description:'The Institut National du Football at Clairefontaine is the crown jewel of French football development. This national academy has produced more world-class talent per capita than any other institution, powering France to multiple World Cup victories.',
    courtSurfaces:stdSurfaces, ageGroups:['U13','U14','U15','U16','U17','U18','U21'], trainingMonths:allMonths,
    programs:[
      prog('INF Clairefontaine Residency','2 years','Elite','Free (government funded)','Full residential program for the best 23 players from each age group in Ile-de-France.'),
      prog('French Football Federation Camp','1 week','Advanced',1500,'National team preparation camps and youth international training.'),
      prog('Regional Detection Program','6 months','Intermediate','Free','FFF scouting and development program across French regions.')
    ],
    coaches:[
      coach('Gerard Houllier (legacy)','Former Technical Director',30,true,'Liverpool and Lyon manager','Designed the Clairefontaine system that produced World Cup winners.'),
      coach('Jean-Claude Giuntini','INF Director',22,false,'N/A','Current director of the national football institute program.')
    ],
    notableAlumni:[
      alum('Thierry Henry','Arsenal legend, France all-time top scorer',1993),
      alum('Kylian Mbappe','World Cup winner, PSG and France superstar',2013),
      alum('Nicolas Anelka','Multi-club striker, Champions League winner',1996),
      alum('William Gallas','80 France caps, Arsenal and Chelsea defender',1993)
    ],
    hotels:[
      hotel('Mercure Rambouillet',10,'80-150',4.1,'https://www.mercure.com'),
      hotel('Relais du Chateau',8,'100-200',4.3,'https://www.relaisduchateau.fr'),
      hotel('Comfort Hotel Rambouillet',12,'55-90',3.8,'https://www.choicehotels.com'),
      hotel('Hotel & Spa La Belle Juliette (Paris)',55,'150-300',4.5,'https://www.labellejuliette.com'),
      hotel('Generator Paris',60,'25-55',4.0,'https://staygenerator.com/paris')
    ],
    restaurants:[
      rest('Le Cafe des Sports','French Bistro',5,'15-30',4.2),
      rest('Auberge du Chateau','French',8,'25-50',4.4),
      rest('Le Petit Marche','Market Food',6,'10-20',4.1),
      rest('La Brasserie Rambolitaine','Brasserie',10,'18-35',4.3),
      rest('Pizza Valentina','Italian',7,'10-20',3.9)
    ],
    medicalFacilities:[
      med('Centre Hospitalier de Rambouillet','General Hospital',12,true,'+33 1 34 83 70 00'),
      med('Clinique des Yvelines','Private Clinic',15,false,'+33 1 30 46 87 00'),
      med('FFF Medical Centre','Sports Medicine',0,false,'+33 1 34 83 20 00')
    ],
    airportTransfers:[
      air('Paris Charles de Gaulle (CDG)',80,'70-90 min',['Train','Private Transfer']),
      air('Paris Orly (ORY)',50,'45-60 min',['Bus','Private Transfer']),
      air('Toussus-le-Noble (TNF)',15,'15-20 min',['Private Transfer'])
    ],
    nearbyTournaments:[
      tourn('Tournoi International de Montaigu',300,'Natural Grass','International Youth','April'),
      tourn('Championnat National U17',20,'Natural Grass','National Youth','Year-round'),
      tourn('Coupe Gambardella',0,'Natural Grass','National Youth Cup','September-May')
    ],
    costOfLiving:{meal:13,accommodation:700,transport:45},
    visa:{required:true,type:'Schengen Visa / Student Visa',duration:'90 days / 1 year',processingTime:'2-8 weeks'},
    scholarships:[
      schol('INF Full Scholarship','Fully government funded','Top 23 players per age group from Ile-de-France','September'),
      schol('FFF Regional Grant','Travel and equipment','Regional detection program standouts','Rolling')
    ],
    gallery:['clairefontaine_aerial.jpg','clairefontaine_training.jpg','clairefontaine_forest.jpg','clairefontaine_pitch.jpg']
  },  {
    id:'lyon', name:'Olympique Lyonnais Academy', country:`France ${F.FR}`, city:'Lyon',
    coordinates:{lat:45.7653,lng:4.9821}, website:'https://www.ol.fr/en/academy',
    phone:'+33 4 26 29 67 00', email:'academy@ol.fr', founded:2016, starred:false, level:'Pro',
    description:'OL Academy at the Groupama Training Center is one of France\'s top youth development centers. Lyon has consistently produced high-quality players who excel in Ligue 1 and across Europe.',
    courtSurfaces:['Natural Grass','Artificial Turf','Indoor'], ageGroups:['U10','U12','U14','U16','U18','U21','Reserve'], trainingMonths:allMonths,
    programs:[
      prog('OL Academy Residency','10 months','Elite','By invitation only','Full-time residential development at Groupama Training Center.'),
      prog('OL Summer Camp','2 weeks','Intermediate',2200,'Summer football camp with OL coaching staff.'),
      prog('Performance Pathway','4 months','Advanced',3500,'Intensive development program for regional elite youth.')
    ],
    coaches:[
      coach('Jean-Francois Vulliez','Academy Director',20,false,'N/A','Oversees Lyon youth development, known for producing technical players.'),
      coach('Gueida Fofana','U19 Coach',6,true,'France youth international','Former midfielder bringing modern tactical awareness to coaching.')
    ],
    notableAlumni:[
      alum('Karim Benzema','Ballon d\'Or winner, Real Madrid legend',2005),
      alum('Alexandre Lacazette','Lyon icon, Arsenal and France striker',2010),
      alum('Nabil Fekir','World Cup winner, creative midfielder',2013),
      alum('Houssem Aouar','Technically gifted midfielder, France international',2016)
    ],
    hotels:[
      hotel('Sofitel Lyon Bellecour',12,'180-350',4.6,'https://www.sofitel.com'),
      hotel('Mercure Lyon Centre Saxe Lafayette',10,'90-170',4.2,'https://www.mercure.com'),
      hotel('Ibis Lyon Centre Perrache',11,'55-95',3.9,'https://www.ibis.com'),
      hotel('Hotel Le Royal Lyon',13,'130-260',4.5,'https://www.hotelleroyallyon.com'),
      hotel('Ho36 Hostel Lyon',12,'20-45',4.0,'https://www.ho36hostels.com')
    ],
    restaurants:[
      rest('Bouchon des Filles','Lyonnaise',12,'20-40',4.5),
      rest('Le Comptoir du Vin','Wine Bar/Bistro',11,'15-30',4.4),
      rest('Les Halles de Lyon Paul Bocuse','Market Food',10,'12-30',4.7),
      rest('Cafe Comptoir Abel','Traditional French',13,'18-35',4.3),
      rest('Ninkasi','Brewery/Casual',8,'10-20',4.1)
    ],
    medicalFacilities:[
      med('Hopital Edouard Herriot','General Hospital',10,true,'+33 4 72 11 69 11'),
      med('Clinique du Parc Lyon','Private Hospital',8,false,'+33 4 72 44 88 00'),
      med('Centre de Medecine du Sport','Sports Medicine',3,false,'+33 4 72 11 69 20')
    ],
    airportTransfers:[
      air('Lyon-Saint Exupery (LYS)',25,'25-35 min',['Rhonexpress','Taxi','Bus','Private Transfer']),
      air('Grenoble-Isere (GNB)',110,'70-90 min',['Bus','Private Transfer']),
      air('Saint-Etienne-Boutheon (EBU)',65,'50-65 min',['Private Transfer'])
    ],
    nearbyTournaments:[
      tourn('Championnat National U17',0,'Natural Grass','National Youth','Year-round'),
      tourn('Tournoi de Lyon',0,'Natural Grass','Regional Youth','June'),
      tourn('Coupe Gambardella',20,'Natural Grass','National Youth Cup','September-May')
    ],
    costOfLiving:{meal:11,accommodation:700,transport:50},
    visa:{required:true,type:'Schengen Visa / Student Visa',duration:'90 days / 1 year',processingTime:'2-8 weeks'},
    scholarships:[
      schol('OL Academy Full Scholarship','Full tuition and board','Scouted elite French talent','Rolling'),
      schol('International Camp Discount','30% off camp','Outstanding overseas applicants','May')
    ],
    gallery:['lyon_groupama.jpg','lyon_training.jpg','lyon_academy.jpg','lyon_pitch.jpg']
  },
  {
    id:'acmilan', name:'AC Milan Academy', country:`Italy ${F.IT}`, city:'Milan',
    coordinates:{lat:45.4785,lng:9.1230}, website:'https://www.acmilan.com/en/youth-sector',
    phone:'+39 02 62281', email:'settoregiovanile@acmilan.com', founded:1899, starred:false, level:'Elite',
    description:'AC Milan\'s Settore Giovanile at the Vismara Sports Centre is one of Italian football\'s most historic development programs. The Rossoneri academy blends Italian tactical tradition with modern athletic development.',
    courtSurfaces:stdSurfaces, ageGroups:stdAgeGroups, trainingMonths:allMonths,
    programs:[
      prog('Settore Giovanile','10 months','Elite','By invitation only','Full residential youth academy program at Vismara Sports Centre.'),
      prog('AC Milan Junior Camp','1 week','All levels',900,'International summer camp with Milan methodology.'),
      prog('Elite Development Program','3 months','Advanced',3800,'Advanced training for scouted talent in the Milan region.')
    ],
    coaches:[
      coach('Vincenzo Vergine','Academy Director',18,false,'N/A','Leads Milan youth development with focus on technical and tactical fundamentals.'),
      coach('Daniele Bonera','Youth Coach',5,true,'21 Italy caps','Former Milan defender coaching next generation of defenders.')
    ],
    notableAlumni:[
      alum('Paolo Maldini','AC Milan legend, 902 appearances, Italy captain',1985),
      alum('Franco Baresi','Legendary sweeper, Milan one-club man',1977),
      alum('Gianluigi Donnarumma','Italy Euro 2020 hero, PSG goalkeeper',2015),
      alum('Daniel Maldini','Third generation Milan academy graduate',2020)
    ],
    hotels:[
      hotel('Armani Hotel Milano',15,'350-700',4.9,'https://www.armanihotelmilano.com'),
      hotel('NYX Hotel Milan',10,'100-200',4.3,'https://www.nyxhotels.com'),
      hotel('Hotel Ibis Milano Centro',12,'60-110',3.9,'https://www.ibis.com'),
      hotel('Starhotels Echo',13,'120-250',4.4,'https://www.starhotels.com'),
      hotel('Ostello Bello Grande',14,'25-55',4.1,'https://www.ostellobello.com')
    ],
    restaurants:[
      rest('Trattoria Milanese','Milanese',14,'20-40',4.5),
      rest('Pizzeria Spontini','Pizza',12,'8-15',4.4),
      rest('Ratana','Modern Italian',10,'25-50',4.6),
      rest('Al Mercato','Street Food/Burgers',13,'12-25',4.3),
      rest('Flower Burger','Vegan Burgers',11,'8-15',4.1)
    ],
    medicalFacilities:[
      med('Ospedale San Raffaele','General Hospital',8,true,'+39 02 2643 2643'),
      med('Istituto Clinico Humanitas','Private Hospital',12,true,'+39 02 8224 1'),
      med('Centro Medico Ambrosiano','Sports Medicine',5,false,'+39 02 7601 5522')
    ],
    airportTransfers:[
      air('Milan Malpensa (MXP)',50,'50-70 min',['Malpensa Express','Taxi','Bus','Private Transfer']),
      air('Milan Linate (LIN)',10,'15-25 min',['Bus','Taxi','Private Transfer']),
      air('Bergamo Orio al Serio (BGY)',55,'55-70 min',['Bus','Private Transfer'])
    ],
    nearbyTournaments:[
      tourn('Campionato Primavera',0,'Natural Grass','National Youth','Year-round'),
      tourn('Torneo di Viareggio',250,'Natural Grass','International Youth','February'),
      tourn('Coppa Italia Primavera',0,'Natural Grass','National Youth Cup','Year-round')
    ],
    costOfLiving:{meal:12,accommodation:900,transport:40},
    visa:{required:true,type:'Schengen Visa / Student Visa',duration:'90 days / 1 year',processingTime:'2-8 weeks'},
    scholarships:[
      schol('Milan Youth Scholarship','Full tuition and board','Scouted Italian talent','Rolling'),
      schol('Rossoneri International Grant','50% camp fees','Top international campers','July')
    ],
    gallery:['acmilan_vismara.jpg','acmilan_training.jpg','acmilan_academy.jpg','acmilan_pitch.jpg']
  },  {
    id:'juventus', name:'Juventus Academy', country:`Italy ${F.IT}`, city:'Turin',
    coordinates:{lat:45.1096,lng:7.6411}, website:'https://www.juventus.com/en/youth',
    phone:'+39 011 65631', email:'settoregiovanile@juventus.com', founded:1897, starred:false, level:'Pro',
    description:'Juventus\' youth sector at Vinovo Training Centre emphasizes the Italian tradition of tactical intelligence, defensive solidity, and winning mentality. The Bianconeri academy feeds into one of Serie A\'s most successful clubs.',
    courtSurfaces:['Natural Grass','Artificial Turf','Indoor'], ageGroups:['U10','U12','U14','U16','U18','U21','Reserve'], trainingMonths:allMonths,
    programs:[
      prog('Juventus Youth Academy','10 months','Elite','By invitation only','Full-time residential program at Vinovo training facility.'),
      prog('Juventus Summer Camp','1 week','All levels',850,'International holiday camp with Juventus methodology.'),
      prog('J-Academy Satellite','6 months','Intermediate',3000,'Global academy program following Juventus coaching philosophy.')
    ],
    coaches:[
      coach('Claudio Chiellini','Academy Director',12,false,'N/A','Brother of Giorgio Chiellini, oversees Juventus youth development.'),
      coach('Paolo Montero','Youth Team Coach',10,true,'55 Uruguay caps','Former Juventus defender bringing defensive excellence to coaching.')
    ],
    notableAlumni:[
      alum('Claudio Marchisio','Juventus legend, 389 appearances, Italy international',2006),
      alum('Federico Chiesa','Italy Euro 2020 star, dynamic winger',2016),
      alum('Moise Kean','Italy striker, youngest Juve scorer in decades',2016),
      alum('Gianluca Vialli','Juve and Chelsea legend, Italy striker',1981)
    ],
    hotels:[
      hotel('NH Torino Centro',10,'90-180',4.3,'https://www.nh-hotels.com'),
      hotel('Best Western Hotel Genio',8,'70-140',4.1,'https://www.bestwestern.com'),
      hotel('Hotel Victoria',12,'60-120',4.0,'https://www.hotelvictoria-torino.com'),
      hotel('TH Torino',6,'50-100',3.8,'https://www.th-resorts.com'),
      hotel('Open011',5,'20-40',4.0,'https://www.open011.it')
    ],
    restaurants:[
      rest('Del Cambio','Fine Italian',10,'40-80',4.7),
      rest('Porta Palazzo Market','Market Food',9,'5-15',4.3),
      rest('Eataly Torino','Italian Food Hall',8,'12-25',4.5),
      rest('Trattoria Valenza','Piedmontese',11,'18-35',4.4),
      rest('M**Bun','Gourmet Burgers',7,'10-18',4.2)
    ],
    medicalFacilities:[
      med('Ospedale Molinette','General Hospital',10,true,'+39 011 633 1633'),
      med('J-Medical','Sports Medicine',0,false,'+39 011 897 7700'),
      med('Clinica Fornaca','Private Hospital',8,true,'+39 011 5574 111')
    ],
    airportTransfers:[
      air('Turin Caselle (TRN)',18,'25-35 min',['Taxi','Bus','Private Transfer']),
      air('Milan Malpensa (MXP)',150,'90-120 min',['Bus','Train','Private Transfer']),
      air('Cuneo Levaldigi (CUF)',80,'60-75 min',['Private Transfer'])
    ],
    nearbyTournaments:[
      tourn('Campionato Primavera',0,'Natural Grass','National Youth','Year-round'),
      tourn('Coppa Italia Primavera',0,'Natural Grass','National Youth Cup','Year-round'),
      tourn('Torneo Citta di Torino',5,'Natural Grass','Regional Youth','May')
    ],
    costOfLiving:{meal:10,accommodation:700,transport:40},
    visa:{required:true,type:'Schengen Visa / Student Visa',duration:'90 days / 1 year',processingTime:'2-8 weeks'},
    scholarships:[
      schol('Juventus Youth Scholarship','Full tuition','Scouted Italian and international talent','Rolling'),
      schol('J-Academy Partial Grant','25% fees','Deserving camp participants','June')
    ],
    gallery:['juventus_vinovo.jpg','juventus_training.jpg','juventus_academy.jpg']
  },
  {
    id:'sportingcp', name:'Sporting CP Academy', country:`Portugal ${F.PT}`, city:'Lisbon',
    coordinates:{lat:38.7614,lng:-9.1610}, website:'https://www.sporting.pt/en/academy',
    phone:'+351 21 751 6000', email:'academia@sporting.pt', founded:2002, starred:true, level:'Elite',
    description:'The Sporting CP Academy in Alcochete is widely considered the best academy in Portugal and one of the finest in the world. Its state-of-the-art facilities and methodology have produced an extraordinary number of world-class players.',
    courtSurfaces:stdSurfaces, ageGroups:stdAgeGroups, trainingMonths:allMonths,
    programs:[
      prog('Sporting Academy Residency','10 months','Elite','By invitation only','Full residential academy at the Alcochete campus for scouted talent.'),
      prog('Sporting Summer Camp','2 weeks','Intermediate',2000,'International summer experience with Sporting coaching staff.'),
      prog('High Performance Pathway','6 months','Advanced',4000,'Extended development for elite Portuguese and international youth.')
    ],
    coaches:[
      coach('Hugo Viana','Sporting Director',10,true,'34 Portugal caps','Former midfielder managing the club\'s entire football operations.'),
      coach('Filipe Celikkaya','Youth Coach',12,true,'Portuguese lower leagues','Expert in developing technical midfielders and attackers.')
    ],
    notableAlumni:[
      alum('Cristiano Ronaldo','All-time great, 5x Ballon d\'Or, 800+ goals',2003),
      alum('Luis Figo','Ballon d\'Or winner, Portugal legend',1995),
      alum('Bruno Fernandes','Manchester United captain, Portugal star',2017),
      alum('Nani','Manchester United and Portugal winger',2005)
    ],
    hotels:[
      hotel('Four Seasons Hotel Ritz Lisbon',15,'300-600',4.8,'https://www.fourseasons.com/lisbon'),
      hotel('Hotel Avenida Palace',14,'120-250',4.5,'https://www.hotelavenidapalace.pt'),
      hotel('TRYP Lisboa Aeroporto',5,'70-130',4.0,'https://www.melia.com'),
      hotel('Hotel Ibis Lisboa Centro',13,'55-90',3.8,'https://www.ibis.com'),
      hotel('Lisbon Destination Hostel',14,'20-45',4.2,'https://www.destinationhostels.com')
    ],
    restaurants:[
      rest('Cervejaria Ramiro','Seafood',14,'25-50',4.7),
      rest('Time Out Market','Food Hall',15,'10-25',4.6),
      rest('Pasteis de Belem','Pastries/Cafe',18,'5-15',4.5),
      rest('A Cevicheria','Peruvian/Seafood',14,'20-40',4.5),
      rest('Ao 26 Vegan Food Project','Vegan',13,'10-20',4.3)
    ],
    medicalFacilities:[
      med('Hospital de Santa Maria','General Hospital',12,true,'+351 21 780 5000'),
      med('CUF Descobertas','Private Hospital',8,true,'+351 21 002 3000'),
      med('Sporting Medical Centre','Sports Medicine',0,false,'+351 21 751 6000')
    ],
    airportTransfers:[
      air('Lisbon Humberto Delgado (LIS)',8,'15-20 min',['Taxi','Metro','Bus','Private Transfer']),
      air('Faro (FAO)',280,'150-180 min',['Bus','Private Transfer']),
      air('Porto (OPO)',315,'180-210 min',['Train','Private Transfer'])
    ],
    nearbyTournaments:[
      tourn('Liga Revelacao',0,'Natural Grass','National Youth','Year-round'),
      tourn('Taca Revelacao',0,'Natural Grass','National Youth Cup','Year-round'),
      tourn('Torneio Internacional de Lisboa',5,'Natural Grass','International Youth','April')
    ],
    costOfLiving:{meal:8,accommodation:650,transport:40},
    visa:{required:true,type:'Schengen Visa / Student Visa',duration:'90 days / 1 year',processingTime:'2-8 weeks'},
    scholarships:[
      schol('Sporting Academy Full Scholarship','Full board and education','Exceptional scouted talent','Rolling'),
      schol('International Development Grant','50% fees','Top overseas camp performers','August')
    ],
    gallery:['sportingcp_alcochete.jpg','sportingcp_training.jpg','sportingcp_academy.jpg','sportingcp_pitch.jpg']
  },  {
    id:'benfica', name:'Benfica Academy', country:`Portugal ${F.PT}`, city:'Lisbon',
    coordinates:{lat:38.7529,lng:-9.1849}, website:'https://www.slbenfica.pt/en/academy',
    phone:'+351 21 721 9500', email:'academy@slbenfica.pt', founded:2006, starred:false, level:'Elite',
    description:'The Benfica Campus (Caixa Futebol Campus) in Seixal is a 20-hectare state-of-the-art facility. Benfica\'s academy is a European talent factory, known for developing and selling top players worldwide.',
    courtSurfaces:stdSurfaces, ageGroups:stdAgeGroups, trainingMonths:allMonths,
    programs:[
      prog('Benfica Campus Residency','10 months','Elite','By invitation only','Full-time residential program at the Caixa Futebol Campus.'),
      prog('Benfica Summer Academy','2 weeks','All levels',1800,'International summer camp for young players.'),
      prog('Elite Scouting Program','3 months','Advanced',3200,'Regional scouting and development pathway for high-potential youth.')
    ],
    coaches:[
      coach('Pedro Mil-Homens','Academy Director',15,false,'N/A','Architect of Benfica\'s modern youth development infrastructure.'),
      coach('Helder Cristovao','Youth Coach',12,true,'Portuguese First Division','Former defender specializing in tactical and physical development.')
    ],
    notableAlumni:[
      alum('Bernardo Silva','Manchester City star, Portugal international',2014),
      alum('Joao Felix','Record transfer, Atletico and Portugal forward',2019),
      alum('Ruben Dias','Manchester City defender, Premier League champion',2017),
      alum('Renato Sanches','Euro 2016 Best Young Player, Golden Boy winner',2016)
    ],
    hotels:[
      hotel('Altis Grand Hotel',12,'140-280',4.5,'https://www.altishotels.com'),
      hotel('Turim Terreiro do Paco',13,'80-160',4.3,'https://www.turimhotels.com'),
      hotel('Ibis Lisboa Saldanha',10,'50-90',3.8,'https://www.ibis.com'),
      hotel('Hotel Avenida Palace',14,'120-250',4.5,'https://www.hotelavenidapalace.pt'),
      hotel('Yes Lisbon Hostel',13,'18-40',4.2,'https://www.yeslisbonhostel.com')
    ],
    restaurants:[
      rest('Restaurante Gambrinus','Traditional Portuguese',13,'30-55',4.5),
      rest('Cervejaria Ramiro','Seafood',12,'25-50',4.7),
      rest('A Casa do Bacalhau','Cod Dishes',11,'18-35',4.4),
      rest('Mercado da Ribeira','Food Hall',14,'10-25',4.5),
      rest('Cafe A Brasileira','Cafe',14,'5-15',4.2)
    ],
    medicalFacilities:[
      med('Hospital Sao Jose','General Hospital',12,true,'+351 21 884 1000'),
      med('Hospital da Luz','Private Hospital',8,true,'+351 21 710 4400'),
      med('Benfica Medical Centre','Sports Medicine',0,false,'+351 21 721 9500')
    ],
    airportTransfers:[
      air('Lisbon Humberto Delgado (LIS)',15,'20-30 min',['Taxi','Metro','Bus','Private Transfer']),
      air('Faro (FAO)',280,'150-180 min',['Bus','Private Transfer']),
      air('Porto (OPO)',315,'180-210 min',['Train','Private Transfer'])
    ],
    nearbyTournaments:[
      tourn('Liga Revelacao',0,'Natural Grass','National Youth','Year-round'),
      tourn('Benfica International Youth Cup',0,'Natural Grass','International Youth','June'),
      tourn('Taca Revelacao',10,'Natural Grass','National Youth Cup','Year-round')
    ],
    costOfLiving:{meal:8,accommodation:650,transport:40},
    visa:{required:true,type:'Schengen Visa / Student Visa',duration:'90 days / 1 year',processingTime:'2-8 weeks'},
    scholarships:[
      schol('Benfica Campus Scholarship','Full tuition and board','Scouted elite talent','Rolling'),
      schol('International Youth Grant','40% camp fees','Outstanding international campers','June')
    ],
    gallery:['benfica_seixal.jpg','benfica_training.jpg','benfica_campus.jpg','benfica_pitch.jpg']
  },
  {
    id:'ajax', name:'Ajax Academy (De Toekomst)', country:`Netherlands ${F.NL}`, city:'Amsterdam',
    coordinates:{lat:52.3120,lng:4.9420}, website:'https://www.ajax.nl/en/youth-academy',
    phone:'+31 20 311 1444', email:'jeugdopleiding@ajax.nl', founded:1965, starred:true, level:'Elite',
    description:'Ajax\'s De Toekomst (The Future) academy is legendary for its Total Football philosophy. The KNVB system pioneered here has influenced youth development worldwide, producing an extraordinary density of world-class talent.',
    courtSurfaces:stdSurfaces, ageGroups:stdAgeGroups, trainingMonths:allMonths,
    programs:[
      prog('De Toekomst Academy','10 months','Elite','By invitation only','Full residential program at the famous De Toekomst complex.'),
      prog('Ajax International Camp','2 weeks','Intermediate',2500,'International summer camp with Ajax Cruyff philosophy.'),
      prog('TIPS Program','6 months','Advanced','By selection','Technique, Insight, Personality, Speed development program for scouted youth.')
    ],
    coaches:[
      coach('Said Ouaali','Head of Youth Development',16,false,'N/A','Oversees the famous Ajax academy and its TIPS methodology.'),
      coach('John Heitinga','Former Academy Coach',6,true,'87 Netherlands caps','Former Ajax and Everton defender, now coaching at top level.')
    ],
    notableAlumni:[
      alum('Johan Cruyff','Total Football pioneer, 3x Ballon d\'Or',1964),
      alum('Dennis Bergkamp','Arsenal legend, Netherlands icon',1986),
      alum('Frenkie de Jong','Barcelona midfielder, modern total footballer',2019),
      alum('Matthijs de Ligt','Netherlands captain, elite defender',2017)
    ],
    hotels:[
      hotel('Hotel V Nesplein',8,'130-250',4.5,'https://www.hotelv.nl'),
      hotel('DoubleTree by Hilton Amsterdam',6,'110-220',4.3,'https://www.hilton.com'),
      hotel('Ibis Amsterdam Centre',7,'70-130',3.9,'https://www.ibis.com'),
      hotel('NH Amsterdam Zuid',3,'90-180',4.2,'https://www.nh-hotels.com'),
      hotel('The Flying Pig Downtown',8,'25-55',4.1,'https://www.flyingpig.nl')
    ],
    restaurants:[
      rest('The Pantry','Dutch',8,'15-30',4.3),
      rest('FEBO','Dutch Fast Food',5,'5-10',3.8),
      rest('Foodhallen','Food Hall',6,'10-25',4.4),
      rest('De Kas','Farm-to-Table',7,'40-75',4.7),
      rest('Vegan Junk Food Bar','Vegan',7,'10-18',4.2)
    ],
    medicalFacilities:[
      med('Amsterdam UMC','University Hospital',6,true,'+31 20 566 9111'),
      med('OLVG Hospital','General Hospital',5,true,'+31 20 599 9111'),
      med('Ajax Medical Centre','Sports Medicine',0,false,'+31 20 311 1444')
    ],
    airportTransfers:[
      air('Amsterdam Schiphol (AMS)',18,'20-30 min',['Train','Taxi','Bus','Private Transfer']),
      air('Eindhoven (EIN)',130,'80-100 min',['Train','Private Transfer']),
      air('Rotterdam The Hague (RTM)',80,'55-70 min',['Train','Private Transfer'])
    ],
    nearbyTournaments:[
      tourn('Eredivisie Youth',0,'Natural Grass','National Youth','Year-round'),
      tourn('Future Cup',0,'Natural Grass','International Youth','April'),
      tourn('KNVB Beker Youth',10,'Natural Grass','National Youth Cup','Year-round')
    ],
    costOfLiving:{meal:13,accommodation:1000,transport:50},
    visa:{required:true,type:'Schengen Visa / Student Visa',duration:'90 days / 1 year',processingTime:'2-6 weeks'},
    scholarships:[
      schol('Ajax Youth Scholarship','Full board and education','Top Dutch and international scouted talent','Rolling'),
      schol('Cruyff Foundation Grant','Equipment and travel','Underprivileged talented youth','March')
    ],
    gallery:['ajax_detoekomst.jpg','ajax_training.jpg','ajax_academy.jpg','ajax_pitch.jpg']
  },  {
    id:'anderlecht', name:'Anderlecht Academy', country:`Belgium ${F.BE}`, city:'Brussels',
    coordinates:{lat:50.8344,lng:4.2981}, website:'https://www.rsca.be/en/youth-academy',
    phone:'+32 2 522 15 39', email:'academy@rsca.be', founded:1985, starred:false, level:'Pro',
    description:'RSC Anderlecht\'s Neerpede academy is Belgium\'s most successful talent factory. The Purple and White have consistently produced players who shine in Europe\'s top leagues, leveraging Belgium\'s multicultural talent pool.',
    courtSurfaces:['Natural Grass','Artificial Turf','Indoor'], ageGroups:['U8','U10','U12','U14','U16','U18','U21'], trainingMonths:allMonths,
    programs:[
      prog('Neerpede Academy','10 months','Elite','By invitation only','Full residential youth development at the Neerpede training centre.'),
      prog('RSCA Summer Camp','1 week','All levels',700,'Summer holiday football camp with Anderlecht coaches.'),
      prog('Talent ID Program','3 months','Advanced',2500,'Scouting and development for regional talent in Belgium.')
    ],
    coaches:[
      coach('Mikkel Hemmersam','Academy Director',10,false,'N/A','Danish-born director modernizing Anderlecht youth development.'),
      coach('Craig Bellamy','Former Youth Coach',5,true,'78 Wales caps','Former Premier League striker who coached Anderlecht U21s.')
    ],
    notableAlumni:[
      alum('Vincent Kompany','Manchester City legend, Belgium captain',2003),
      alum('Romelu Lukaku','Belgium all-time top scorer, Inter and Chelsea striker',2009),
      alum('Youri Tielemans','Leicester and Belgium midfielder, FA Cup hero',2014),
      alum('Leander Dendoncker','Belgium international, versatile midfielder',2013)
    ],
    hotels:[
      hotel('Hotel Amigo',10,'200-400',4.7,'https://www.roccofortehotels.com'),
      hotel('Thon Hotel Brussels City Centre',8,'90-180',4.2,'https://www.thonhotels.com'),
      hotel('Ibis Brussels Centre',9,'60-100',3.8,'https://www.ibis.com'),
      hotel('NH Brussels Grand Place Arenberg',10,'80-160',4.1,'https://www.nh-hotels.com'),
      hotel('2GO4 Quality Hostel',9,'20-45',3.9,'https://www.2go4.be')
    ],
    restaurants:[
      rest('Chez Leon','Belgian/Mussels',10,'18-35',4.4),
      rest('Fin de Siecle','Belgian',9,'12-25',4.5),
      rest('Fritland','Belgian Frites',10,'5-12',4.3),
      rest('Le Pain Quotidien','Bakery/Cafe',8,'8-18',4.2),
      rest('Exki','Healthy/Fresh',7,'8-15',4.0)
    ],
    medicalFacilities:[
      med('UZ Brussel','University Hospital',8,true,'+32 2 477 41 11'),
      med('Chirec Hospital','Private Hospital',6,true,'+32 2 434 81 11'),
      med('Sports Medical Centre Brussels','Sports Medicine',4,false,'+32 2 555 34 56')
    ],
    airportTransfers:[
      air('Brussels Airport (BRU)',18,'25-35 min',['Train','Taxi','Bus','Private Transfer']),
      air('Brussels South Charleroi (CRL)',60,'50-65 min',['Bus','Private Transfer']),
      air('Antwerp (ANR)',50,'40-55 min',['Train','Private Transfer'])
    ],
    nearbyTournaments:[
      tourn('Belgian Pro League Youth',0,'Natural Grass','National Youth','Year-round'),
      tourn('Croky Cup Youth',10,'Natural Grass','National Youth Cup','Year-round'),
      tourn('Brussels Regional Cup',5,'Natural Grass','Regional','October-May')
    ],
    costOfLiving:{meal:12,accommodation:800,transport:55},
    visa:{required:true,type:'Schengen Visa / Student Visa',duration:'90 days / 1 year',processingTime:'2-6 weeks'},
    scholarships:[
      schol('Anderlecht Youth Scholarship','Full tuition and board','Top Belgian scouted talent','Rolling'),
      schol('Purple Talent Bursary','30% camp discount','Outstanding camp participants','May')
    ],
    gallery:['anderlecht_neerpede.jpg','anderlecht_training.jpg','anderlecht_academy.jpg']
  },
  {
    id:'dinamozagreb', name:'Dinamo Zagreb Academy', country:`Croatia ${F.HR}`, city:'Zagreb',
    coordinates:{lat:45.8167,lng:15.9667}, website:'https://www.gnkdinamo.hr/en/academy',
    phone:'+385 1 2386 111', email:'akademija@gnkdinamo.hr', founded:1967, starred:false, level:'Pro',
    description:'Dinamo Zagreb\'s academy is the jewel of Croatian football development. Located at the Hitrec-Kacian training complex, it has produced a remarkable number of international stars relative to Croatia\'s small population.',
    courtSurfaces:['Natural Grass','Artificial Turf','Indoor'], ageGroups:['U10','U12','U14','U16','U18','U21'], trainingMonths:allMonths,
    programs:[
      prog('Dinamo Academy','10 months','Elite','By invitation only','Full-time residential youth development program.'),
      prog('Dinamo Summer School','2 weeks','Intermediate',1200,'Summer camp for Croatian and international youth players.'),
      prog('Regional Talent Program','4 months','Advanced',1800,'Development pathway for scouted talent across Croatia.')
    ],
    coaches:[
      coach('Ivica Pirkic','Academy Director',20,true,'Croatian First Division','Long-serving director of Dinamo youth development.'),
      coach('Marijan Vlak','U19 Coach',14,true,'Croatian international','Former midfielder specializing in technical player development.')
    ],
    notableAlumni:[
      alum('Luka Modric','Ballon d\'Or winner, Real Madrid legend',2003),
      alum('Mateo Kovacic','Champions League winner, Croatia midfielder',2013),
      alum('Dejan Lovren','Croatia World Cup finalist, Liverpool defender',2006),
      alum('Dani Olmo','Spain Euro 2024 star, RB Leipzig forward',2014)
    ],
    hotels:[
      hotel('Esplanade Zagreb Hotel',5,'120-250',4.6,'https://www.esplanade.hr'),
      hotel('Hotel Dubrovnik',4,'80-160',4.3,'https://www.hotel-dubrovnik.hr'),
      hotel('Ibis Zagreb Centre',3,'45-80',3.8,'https://www.ibis.com'),
      hotel('Canopy by Hilton Zagreb',6,'100-200',4.4,'https://www.hilton.com'),
      hotel('Swanky Mint Hostel',5,'15-35',4.2,'https://www.swanky-hostel.com')
    ],
    restaurants:[
      rest('Vinodol','Croatian',4,'15-30',4.5),
      rest('Mundoaka Street Food','Street Food',3,'8-16',4.4),
      rest('Noel','Fine Dining',5,'50-90',4.7),
      rest('Lari and Penati','Bistro',4,'12-25',4.3),
      rest('Green Point','Vegan',3,'8-15',4.1)
    ],
    medicalFacilities:[
      med('KBC Zagreb','University Hospital',4,true,'+385 1 2388 888'),
      med('Medikol Hospital','Private Hospital',6,false,'+385 1 4604 600'),
      med('Sportska Ambulanta','Sports Medicine',2,false,'+385 1 2386 200')
    ],
    airportTransfers:[
      air('Zagreb Franjo Tudman (ZAG)',15,'20-30 min',['Taxi','Bus','Private Transfer']),
      air('Ljubljana (LJU)',140,'90-110 min',['Bus','Private Transfer']),
      air('Graz (GRZ)',190,'120-150 min',['Private Transfer'])
    ],
    nearbyTournaments:[
      tourn('HNL Youth League',0,'Natural Grass','National Youth','Year-round'),
      tourn('Croatian Youth Cup',10,'Natural Grass','National Youth Cup','Year-round'),
      tourn('Zagreb Youth Tournament',5,'Natural Grass','Regional','May')
    ],
    costOfLiving:{meal:7,accommodation:450,transport:30},
    visa:{required:true,type:'Schengen Visa / Student Visa',duration:'90 days / 1 year',processingTime:'2-6 weeks'},
    scholarships:[
      schol('Dinamo Full Scholarship','Full tuition and board','Elite Croatian youth','Rolling'),
      schol('International Talent Award','50% fees','Outstanding foreign trialists','July')
    ],
    gallery:['dinamo_kacian.jpg','dinamo_training.jpg','dinamo_academy.jpg']
  },  {
    id:'redstar', name:'Red Star Belgrade Academy', country:`Serbia ${F.RS}`, city:'Belgrade',
    coordinates:{lat:44.7833,lng:20.4667}, website:'https://www.crvenazvezdafk.com/en/academy',
    phone:'+381 11 3061 555', email:'akademija@cfrk.rs', founded:1945, starred:false, level:'Pro',
    description:'Red Star Belgrade\'s academy has been producing talent for decades from the footballing hotbed of Serbia. The club\'s youth system combines Balkan technical flair with competitive mentality forged in local derbies.',
    courtSurfaces:['Natural Grass','Artificial Turf','Indoor'], ageGroups:['U10','U12','U14','U16','U18','U21'], trainingMonths:allMonths,
    programs:[
      prog('Red Star Academy','10 months','Elite','By invitation only','Full-time youth development at the Red Star training facility.'),
      prog('Summer Football School','2 weeks','All levels',800,'Open summer camp for Serbian and international youth.'),
      prog('Talent Pathway','4 months','Advanced',1500,'Scouting and development for high-potential Serbian youth.')
    ],
    coaches:[
      coach('Zoran Jankovic','Academy Director',18,true,'Serbian First Division','Long-serving architect of Red Star youth development.'),
      coach('Nenad Milijas','Youth Coach',8,true,'25 Serbia caps','Former Wolves midfielder coaching the next generation.')
    ],
    notableAlumni:[
      alum('Nemanja Vidic','Manchester United legend, Premier League champion',2000),
      alum('Dejan Stankovic','Inter Milan legend, 103 Serbia caps',1994),
      alum('Dragan Stojkovic','Yugoslavia legend, World Cup star',1983),
      alum('Dusan Tadic','Ajax captain, Serbia international',2006)
    ],
    hotels:[
      hotel('Square Nine Hotel Belgrade',5,'120-250',4.6,'https://www.squarenine.rs'),
      hotel('Metropol Palace',6,'80-160',4.3,'https://www.metropolpalace.com'),
      hotel('Hotel Moskva',4,'60-120',4.4,'https://www.hotelmoskva.rs'),
      hotel('Ibis Belgrade',3,'40-70',3.8,'https://www.ibis.com'),
      hotel('Hostel Downtown',4,'12-30',4.0,'https://www.hosteldowntown.rs')
    ],
    restaurants:[
      rest('Dva Jelena','Serbian Traditional',4,'12-25',4.5),
      rest('Question Mark (?)','Historic Serbian',3,'10-20',4.4),
      rest('Kafana Znak Pitanja','Traditional',3,'8-18',4.3),
      rest('Ambar','Balkan',5,'15-30',4.5),
      rest('Sesir Moj','Serbian/Grill',4,'8-18',4.2)
    ],
    medicalFacilities:[
      med('Clinical Centre of Serbia','University Hospital',4,true,'+381 11 366 2222'),
      med('BelMedic Hospital','Private Hospital',5,false,'+381 11 309 1000'),
      med('Sports Medicine Institute','Sports Medicine',3,false,'+381 11 381 5800')
    ],
    airportTransfers:[
      air('Belgrade Nikola Tesla (BEG)',18,'25-35 min',['Taxi','Bus','Private Transfer']),
      air('Nis Constantine the Great (INI)',240,'150-180 min',['Bus','Private Transfer']),
      air('Budapest (BUD)',380,'220-260 min',['Bus','Private Transfer'])
    ],
    nearbyTournaments:[
      tourn('Serbian SuperLiga Youth',0,'Natural Grass','National Youth','Year-round'),
      tourn('Serbian Youth Cup',5,'Natural Grass','National Youth Cup','Year-round'),
      tourn('Belgrade City Cup Youth',3,'Natural Grass','Regional','June')
    ],
    costOfLiving:{meal:5,accommodation:350,transport:25},
    visa:{required:true,type:'Serbian Tourist/Student Visa',duration:'90 days / 1 year',processingTime:'2-4 weeks'},
    scholarships:[
      schol('Red Star Youth Scholarship','Full tuition','Top Serbian academy talent','Rolling'),
      schol('Balkan Talent Grant','50% fees','Regional scouted players','August')
    ],
    gallery:['redstar_training.jpg','redstar_academy.jpg','redstar_marakana.jpg']
  },
  {
    id:'galatasaray', name:'Galatasaray Academy', country:`Turkey ${F.TR}`, city:'Istanbul',
    coordinates:{lat:41.0764,lng:28.7856}, website:'https://www.galatasaray.org/en/academy',
    phone:'+90 212 305 09 09', email:'altyapi@galatasaray.org', founded:1987, starred:false, level:'Pro',
    description:'Galatasaray\'s academy at the Florya Metin Oktay facilities develops players with Turkish passion and technical ability. As Turkey\'s most successful club, Galatasaray attracts the country\'s best young talent.',
    courtSurfaces:['Natural Grass','Artificial Turf','Indoor','Futsal Court'], ageGroups:['U10','U12','U14','U16','U18','U21'], trainingMonths:allMonths,
    programs:[
      prog('Galatasaray Youth Academy','10 months','Elite','By invitation only','Full-time academy program at Florya training complex.'),
      prog('GS Football Camp','2 weeks','All levels',1500,'Summer camp with Galatasaray coaching staff.'),
      prog('Istanbul Talent ID','3 months','Advanced',2000,'Regional scouting and development for Turkish talent.')
    ],
    coaches:[
      coach('Hasan Sas','Youth Coordinator',10,true,'47 Turkey caps, 2002 World Cup','World Cup semi-finalist turned youth development specialist.'),
      coach('Sabri Sarioglu','Youth Coach',6,true,'57 Turkey caps','Former Galatasaray captain coaching youth defenders.')
    ],
    notableAlumni:[
      alum('Arda Turan','Atletico Madrid and Barcelona midfielder, Turkey captain',2003),
      alum('Emre Belozoglu','Inter Milan midfielder, Turkey legend',1996),
      alum('Hakan Sukur','Turkey all-time top scorer, World Cup bronze 2002',1987),
      alum('Kerem Akturkoglu','Rising star, Euro 2024 Turkey squad',2019)
    ],
    hotels:[
      hotel('Raffles Istanbul',12,'250-500',4.8,'https://www.raffles.com/istanbul'),
      hotel('Hilton Istanbul Bosphorus',10,'130-260',4.5,'https://www.hilton.com'),
      hotel('Ibis Istanbul Esenyurt',5,'35-60',3.7,'https://www.ibis.com'),
      hotel('Wyndham Grand Istanbul',8,'80-160',4.2,'https://www.wyndhamhotels.com'),
      hotel('Cheers Hostel Istanbul',15,'15-30',4.0,'https://www.cheershostel.com')
    ],
    restaurants:[
      rest('Nusr-Et Steakhouse','Steakhouse',10,'40-80',4.5),
      rest('Karakoy Lokantasi','Turkish',14,'15-30',4.6),
      rest('Ciya Sofrasi','Anatolian',16,'10-22',4.7),
      rest('Hamdi Restaurant','Kebab',15,'12-25',4.4),
      rest('Happy Moon\'s','Casual Turkish',6,'8-18',4.0)
    ],
    medicalFacilities:[
      med('Istanbul University Hospital','University Hospital',12,true,'+90 212 414 00 00'),
      med('Acibadem Hospital','Private Hospital',8,true,'+90 444 0 724'),
      med('Istanbul Sports Medicine Centre','Sports Medicine',5,false,'+90 212 305 09 09')
    ],
    airportTransfers:[
      air('Istanbul Airport (IST)',40,'40-60 min',['Taxi','Havaist Bus','Private Transfer']),
      air('Sabiha Gokcen (SAW)',55,'50-75 min',['Taxi','Havabus','Private Transfer']),
      air('Bursa Yenisehir (YEI)',160,'120-150 min',['Private Transfer'])
    ],
    nearbyTournaments:[
      tourn('Turkish Super Lig Youth',0,'Natural Grass','National Youth','Year-round'),
      tourn('Turkish Youth Cup',5,'Natural Grass','National Youth Cup','Year-round'),
      tourn('Istanbul Youth Derby',8,'Natural Grass','Regional Derby','Year-round')
    ],
    costOfLiving:{meal:5,accommodation:400,transport:20},
    visa:{required:true,type:'Turkish Tourist/Student Visa',duration:'90 days / 1 year',processingTime:'1-4 weeks'},
    scholarships:[
      schol('Galatasaray Youth Grant','Full tuition','Top Turkish scouted talent','Rolling'),
      schol('Lions Camp Bursary','50% camp fees','International campers','June')
    ],
    gallery:['galatasaray_florya.jpg','galatasaray_training.jpg','galatasaray_academy.jpg']
  },  {
    id:'malmoff', name:'Malmo FF Academy', country:`Sweden ${F.SE}`, city:'Malmo',
    coordinates:{lat:55.5833,lng:13.0167}, website:'https://www.mff.se/en/academy',
    phone:'+46 40 620 01 00', email:'academy@mff.se', founded:1970, starred:false, level:'Youth',
    description:'Malmo FF\'s academy is one of Scandinavia\'s top development centers, leveraging Sweden\'s well-organized grassroots system and the club\'s Champions League experience to develop professional-ready players.',
    courtSurfaces:['Natural Grass','Artificial Turf','Indoor'], ageGroups:['U10','U12','U14','U16','U18','U21'], trainingMonths:allMonths,
    programs:[
      prog('MFF Youth Academy','10 months','Elite','By invitation only','Full-time development program at Malmo\'s training facility.'),
      prog('MFF Summer Camp','1 week','All levels',600,'Holiday football camp for young Swedish and Scandinavian players.'),
      prog('Talent Development Path','4 months','Advanced',2000,'Extended scouting and development for high-potential youth.')
    ],
    coaches:[
      coach('Olof Persson','Academy Director',15,false,'N/A','Oversees Malmo\'s youth development and integration with first team.'),
      coach('Jens Gustafsson','Youth Coach',10,true,'Swedish lower divisions','Former player specializing in developing versatile Scandinavian talent.')
    ],
    notableAlumni:[
      alum('Zlatan Ibrahimovic','Global superstar, Sweden all-time top scorer',1999),
      alum('Patrik Andersson','Champions League final goal scorer for Bayern',1988),
      alum('Markus Rosenberg','Malmo legend, Sweden international',1999),
      alum('Erdal Rakip','Sweden international midfielder',2014)
    ],
    hotels:[
      hotel('Story Hotel Studio Malmo',4,'100-200',4.4,'https://www.storyhotels.com'),
      hotel('Comfort Hotel Malmo',3,'70-130',4.1,'https://www.nordicchoicehotels.com'),
      hotel('Hotel Baltzar',5,'80-160',4.2,'https://www.hotelbaltzar.se'),
      hotel('Scandic Malmo City',4,'90-170',4.0,'https://www.scandichotels.com'),
      hotel('STF Malmo City Hostel',3,'25-50',3.9,'https://www.svenskaturistforeningen.se')
    ],
    restaurants:[
      rest('Bastard','Nordic Bistro',4,'25-50',4.6),
      rest('Vollmers','Fine Nordic',5,'60-120',4.8),
      rest('Lilla Kafferosteriet','Cafe',4,'8-15',4.4),
      rest('Malmohus Falafel','Middle Eastern',3,'5-10',4.3),
      rest('Saluhallen Malmo','Food Hall',4,'10-22',4.2)
    ],
    medicalFacilities:[
      med('Skane University Hospital','University Hospital',5,true,'+46 40 33 10 00'),
      med('Aleris Hospital','Private Hospital',4,false,'+46 40 612 79 00'),
      med('Idrottsmedicin Malmo','Sports Medicine',2,false,'+46 40 620 01 50')
    ],
    airportTransfers:[
      air('Copenhagen Kastrup (CPH)',30,'25-35 min',['Train','Taxi','Private Transfer']),
      air('Malmo Sturup (MMX)',30,'25-35 min',['Taxi','Bus','Private Transfer']),
      air('Gothenburg Landvetter (GOT)',280,'170-200 min',['Train','Private Transfer'])
    ],
    nearbyTournaments:[
      tourn('Allsvenskan Youth',0,'Natural Grass','National Youth','Year-round'),
      tourn('Svenska Cupen Youth',10,'Natural Grass','National Youth Cup','March-November'),
      tourn('Gothia Cup',280,'Natural Grass','International Youth','July')
    ],
    costOfLiving:{meal:12,accommodation:700,transport:55},
    visa:{required:true,type:'Schengen Visa / Student Visa',duration:'90 days / 1 year',processingTime:'2-6 weeks'},
    scholarships:[
      schol('MFF Academy Scholarship','Full tuition','Top Swedish scouted talent','Rolling'),
      schol('Nordic Youth Grant','50% fees','Scandinavian camp standouts','April')
    ],
    gallery:['malmoff_training.jpg','malmoff_academy.jpg','malmoff_pitch.jpg']
  },
  {
    id:'spartaprague', name:'Sparta Prague Academy', country:`Czech Republic ${F.CZ}`, city:'Prague',
    coordinates:{lat:50.1000,lng:14.4167}, website:'https://www.sparta.cz/en/academy',
    phone:'+420 296 111 400', email:'akademie@sparta.cz', founded:1965, starred:false, level:'Pro',
    description:'AC Sparta Prague\'s academy is the most successful in Czech football, consistently producing players for the national team and European leagues. The academy benefits from Prague\'s strong footballing culture and infrastructure.',
    courtSurfaces:['Natural Grass','Artificial Turf','Indoor'], ageGroups:['U10','U12','U14','U16','U18','U21'], trainingMonths:allMonths,
    programs:[
      prog('Sparta Academy','10 months','Elite','By invitation only','Full-time development at Sparta\'s Strahov training complex.'),
      prog('Sparta Summer Camp','1 week','All levels',600,'Summer camp for Czech and international youth players.'),
      prog('Czech Talent Pathway','4 months','Advanced',1800,'Extended scouting across Czech Republic for top talent.')
    ],
    coaches:[
      coach('Jan Vrabec','Academy Director',16,true,'Czech First League','Oversees all Sparta youth development programs.'),
      coach('Tomas Rosicky','Youth Advisor',5,true,'105 Czech Republic caps','Arsenal and Czech legend mentoring young players.')
    ],
    notableAlumni:[
      alum('Tomas Rosicky','Arsenal midfielder, Czech Republic legend',1999),
      alum('Pavel Nedved','Ballon d\'Or winner, Juventus and Czech star',1992),
      alum('Petr Cech','Chelsea and Arsenal legend, Premier League record holder',1999),
      alum('Patrik Schick','Euro 2020 star, Bayer Leverkusen striker',2014)
    ],
    hotels:[
      hotel('Hotel Josef',6,'120-240',4.5,'https://www.hoteljosef.com'),
      hotel('Mosaic House',5,'70-140',4.3,'https://www.mosaichouse.com'),
      hotel('Hotel Ibis Praha Old Town',7,'50-90',3.9,'https://www.ibis.com'),
      hotel('Art Nouveau Palace Hotel',8,'90-180',4.4,'https://www.palacehotel.cz'),
      hotel('Czech Inn',4,'18-40',4.1,'https://www.czech-inn.com')
    ],
    restaurants:[
      rest('Lokul','Czech',5,'10-22',4.5),
      rest('Kantyna','Modern Czech',6,'12-25',4.4),
      rest('Nase Maso','Butcher/Grill',7,'8-18',4.6),
      rest('Cafe Louvre','Cafe/Czech',7,'10-20',4.3),
      rest('Lehka Hlava','Vegetarian',6,'8-15',4.2)
    ],
    medicalFacilities:[
      med('Motol University Hospital','University Hospital',6,true,'+420 224 431 111'),
      med('Na Homolce Hospital','Private Hospital',4,false,'+420 257 271 111'),
      med('IKEM Sports Medicine','Sports Medicine',8,false,'+420 236 055 111')
    ],
    airportTransfers:[
      air('Vaclav Havel Airport Prague (PRG)',12,'20-30 min',['Taxi','Bus','Private Transfer']),
      air('Brno-Turany (BRQ)',210,'130-160 min',['Bus','Private Transfer']),
      air('Pardubice (PED)',120,'80-100 min',['Private Transfer'])
    ],
    nearbyTournaments:[
      tourn('Czech First League Youth',0,'Natural Grass','National Youth','Year-round'),
      tourn('Czech Youth Cup',5,'Natural Grass','National Youth Cup','Year-round'),
      tourn('Prague Youth Tournament',3,'Natural Grass','Regional','May')
    ],
    costOfLiving:{meal:7,accommodation:550,transport:25},
    visa:{required:true,type:'Schengen Visa / Student Visa',duration:'90 days / 1 year',processingTime:'2-6 weeks'},
    scholarships:[
      schol('Sparta Full Scholarship','Full tuition and board','Top Czech scouted talent','Rolling'),
      schol('International Camp Grant','40% fees','Outstanding foreign campers','June')
    ],
    gallery:['sparta_strahov.jpg','sparta_training.jpg','sparta_academy.jpg']
  },  {
    id:'legiawarsaw', name:'Legia Warsaw Academy', country:`Poland ${F.PL}`, city:'Warsaw',
    coordinates:{lat:52.2297,lng:21.0122}, website:'https://www.legia.com/en/academy',
    phone:'+48 22 628 43 03', email:'akademia@legia.com', founded:1970, starred:false, level:'Pro',
    description:'Legia Warsaw\'s academy is Poland\'s most established youth development center. The club produces talent that regularly features in the Ekstraklasa and increasingly in top European leagues.',
    courtSurfaces:['Natural Grass','Artificial Turf','Indoor'], ageGroups:['U10','U12','U14','U16','U18','U21'], trainingMonths:allMonths,
    programs:[
      prog('Legia Academy','10 months','Elite','By invitation only','Full-time youth development at Legia\'s Lazienkowska training complex.'),
      prog('Legia Summer Camp','1 week','All levels',500,'Holiday camp for young Polish and international players.'),
      prog('Polish Talent ID','3 months','Advanced',1500,'Scouting and development across Polish regions.')
    ],
    coaches:[
      coach('Dariusz Mioduski Jr','Academy Director',8,false,'N/A','Modernizing Legia\'s youth infrastructure and scouting network.'),
      coach('Marek Jojko','U19 Coach',15,true,'Polish Second Division','Experienced Polish coach focused on tactical development.')
    ],
    notableAlumni:[
      alum('Robert Lewandowski','Bayern and Barcelona legend, FIFA Best Award winner',2006),
      alum('Artur Boruc','Celtic and Poland goalkeeper',1996),
      alum('Lucjan Brychczy','Legia all-time legend, 81 Poland caps',1954),
      alum('Bartosz Kapustka','Euro 2016 breakout star, Leicester City signing',2014)
    ],
    hotels:[
      hotel('Hotel Bristol Warsaw',8,'180-350',4.7,'https://www.hotelbristolwarsaw.pl'),
      hotel('Novotel Warszawa Centrum',6,'80-160',4.2,'https://www.novotel.com'),
      hotel('Ibis Warszawa Stare Miasto',5,'45-80',3.8,'https://www.ibis.com'),
      hotel('Hampton by Hilton Warsaw',7,'60-120',4.1,'https://www.hilton.com'),
      hotel('Oki Doki Hostel',6,'15-35',4.0,'https://www.okidoki.pl')
    ],
    restaurants:[
      rest('Zapiecek','Polish Pierogi',6,'8-18',4.4),
      rest('Stary Dom','Traditional Polish',7,'12-25',4.5),
      rest('Hala Koszyki','Food Hall',5,'10-22',4.3),
      rest('Bibenda','Italian/Polish',8,'15-30',4.2),
      rest('Krowarzywa','Vegan Burgers',5,'8-15',4.1)
    ],
    medicalFacilities:[
      med('Central Clinical Hospital','General Hospital',6,true,'+48 22 599 10 00'),
      med('Medicover Hospital','Private Hospital',5,false,'+48 22 465 42 42'),
      med('Carolina Medical Center','Sports Medicine',4,false,'+48 22 355 82 00')
    ],
    airportTransfers:[
      air('Warsaw Chopin (WAW)',10,'20-30 min',['Taxi','Train','Bus','Private Transfer']),
      air('Warsaw Modlin (WMI)',40,'40-55 min',['Bus','Private Transfer']),
      air('Radom (RDO)',110,'70-90 min',['Private Transfer'])
    ],
    nearbyTournaments:[
      tourn('Ekstraklasa Youth',0,'Natural Grass','National Youth','Year-round'),
      tourn('Polish Youth Cup',5,'Natural Grass','National Youth Cup','Year-round'),
      tourn('Warsaw Youth Tournament',3,'Natural Grass','Regional','June')
    ],
    costOfLiving:{meal:6,accommodation:450,transport:25},
    visa:{required:true,type:'Schengen Visa / Student Visa',duration:'90 days / 1 year',processingTime:'2-6 weeks'},
    scholarships:[
      schol('Legia Youth Scholarship','Full tuition','Top Polish scouted talent','Rolling'),
      schol('International Player Grant','50% fees','Standout international trialists','July')
    ],
    gallery:['legia_training.jpg','legia_academy.jpg','legia_stadium.jpg']
  },
  {
    id:'rbsalzburg', name:'Red Bull Salzburg Academy', country:`Austria ${F.AT}`, city:'Salzburg',
    coordinates:{lat:47.8161,lng:13.0458}, website:'https://www.redbullsalzburg.at/en/academy',
    phone:'+43 662 43 35 32', email:'academy@redbullsalzburg.at', founded:2012, starred:false, level:'Elite',
    description:'Red Bull Salzburg\'s academy is a modern talent pipeline that has become one of Europe\'s most efficient developers of young talent. The Red Bull philosophy emphasizes pressing, intensity, and early integration of academy players.',
    courtSurfaces:stdSurfaces, ageGroups:stdAgeGroups, trainingMonths:allMonths,
    programs:[
      prog('RB Academy Residency','10 months','Elite','By invitation only','Full residential program at the Red Bull training complex.'),
      prog('RB Summer Football Camp','2 weeks','Intermediate',1800,'Intensive summer camp with Red Bull performance methodology.'),
      prog('Elite Fast-Track','6 months','Advanced',4500,'Accelerated development for scouted talent, bridge to FC Liefering.')
    ],
    coaches:[
      coach('Rene Aufhauser','Academy Director',10,true,'40 Austria caps','Former Austrian international overseeing the Red Bull development model.'),
      coach('Bo Svensson','Youth Development (Former)',5,true,'Bundesliga career','Exemplifies the Red Bull coaching philosophy of high-pressing football.')
    ],
    notableAlumni:[
      alum('Erling Haaland','Manchester City superstar, Golden Boot winner',2020),
      alum('Sadio Mane','Ballon d\'Or runner-up, Liverpool and Bayern star',2014),
      alum('Naby Keita','Liverpool and Guinea midfielder',2016),
      alum('Dominik Szoboszlai','Liverpool and Hungary attacking midfielder',2020)
    ],
    hotels:[
      hotel('Hotel Sacher Salzburg',8,'250-500',4.8,'https://www.sacher.com'),
      hotel('IMLAUER Hotel Pitter',6,'100-200',4.3,'https://www.imlauer.com'),
      hotel('Motel One Salzburg-Mirabell',5,'70-110',4.3,'https://www.motel-one.com'),
      hotel('A&O Salzburg Hauptbahnhof',3,'35-65',3.7,'https://www.aohostels.com'),
      hotel('YoHo International Youth Hostel',4,'22-45',3.9,'https://www.yoho.at')
    ],
    restaurants:[
      rest('Stiftskeller St. Peter','Austrian',7,'25-50',4.6),
      rest('Triangel','Austrian/International',5,'15-30',4.3),
      rest('Balkan Grill Walter','Bosna Sausage',6,'5-10',4.4),
      rest('AFRO Cafe','African/Fusion',6,'12-25',4.2),
      rest('Green Garden','Vegan/Vegetarian',5,'10-18',4.1)
    ],
    medicalFacilities:[
      med('Salzburg University Hospital','University Hospital',6,true,'+43 5 7255 0'),
      med('Red Bull Athlete Performance Centre','Sports Medicine',0,false,'+43 662 43 35 32'),
      med('Privatklinik Wehrle-Diakonissen','Private Hospital',5,true,'+43 662 6385 0')
    ],
    airportTransfers:[
      air('Salzburg Airport (SZG)',5,'10-15 min',['Taxi','Bus','Private Transfer']),
      air('Munich Airport (MUC)',170,'100-120 min',['Train','Private Transfer']),
      air('Innsbruck Airport (INN)',185,'110-130 min',['Train','Private Transfer'])
    ],
    nearbyTournaments:[
      tourn('Austrian Bundesliga Youth',0,'Natural Grass','National Youth','Year-round'),
      tourn('Austrian Youth Cup',10,'Natural Grass','National Youth Cup','Year-round'),
      tourn('Red Bull Youth Champions League',0,'Natural Grass','International Youth','Year-round')
    ],
    costOfLiving:{meal:12,accommodation:750,transport:45},
    visa:{required:true,type:'Schengen Visa / Student Visa',duration:'90 days / 1 year',processingTime:'2-6 weeks'},
    scholarships:[
      schol('Red Bull Academy Scholarship','Full board and training','Scouted international talent','Rolling'),
      schol('Performance Camp Grant','50% fees','Outstanding camp performers','May')
    ],
    gallery:['rbsalzburg_facility.jpg','rbsalzburg_training.jpg','rbsalzburg_pitch.jpg','rbsalzburg_academy.jpg']
  },  {
    id:'olympiacos', name:'Olympiacos Academy', country:`Greece ${F.GR}`, city:'Piraeus',
    coordinates:{lat:37.9475,lng:23.6650}, website:'https://www.olympiacos.org/en/academy',
    phone:'+30 210 414 3000', email:'academy@olympiacos.org', founded:1971, starred:false, level:'Pro',
    description:'Olympiacos FC\'s academy in Piraeus is Greece\'s leading football development center. As the most successful Greek club, Olympiacos attracts the nation\'s best young talent and provides a pathway to European football.',
    courtSurfaces:['Natural Grass','Artificial Turf','Indoor'], ageGroups:['U10','U12','U14','U16','U18','U21'], trainingMonths:allMonths,
    programs:[
      prog('Olympiacos Academy','10 months','Elite','By invitation only','Full-time youth development at the Rentis training centre.'),
      prog('OFC Summer Camp','2 weeks','All levels',1200,'Summer football camp for Greek and international youth.'),
      prog('Greek Talent Pathway','4 months','Advanced',2000,'Scouting and development for elite Greek youth players.')
    ],
    coaches:[
      coach('Takis Fyssas','Youth Advisor',8,true,'80 Greece caps, Euro 2004','Euro 2004 winner guiding Greek youth development.'),
      coach('Themis Tsakiris','U19 Coach',12,true,'Greek Super League','Experienced coach focused on developing technically gifted players.')
    ],
    notableAlumni:[
      alum('Vassilis Torosidis','74 Greece caps, Porto and Roma defender',2003),
      alum('Kostas Fortounis','Greece captain, Olympiacos legend',2014),
      alum('Panagiotis Retsos','Bayer Leverkusen defender, Greece international',2017),
      alum('Thanasis Androutsos','Rising Greek talent, first-team regular',2021)
    ],
    hotels:[
      hotel('Piraeus Theoxenia Hotel',3,'80-160',4.2,'https://www.theoxeniapalace.com'),
      hotel('Phidias Hotel Piraeus',2,'50-100',3.9,'https://www.phidiashotel.gr'),
      hotel('Hotel Ideal',4,'40-80',3.7,'https://www.hotel-ideal.gr'),
      hotel('Athens Tiare Hotel',12,'60-120',4.1,'https://www.tiarehotel.com'),
      hotel('Bedbox Hostel Athens',14,'15-30',3.9,'https://www.bedbox.gr')
    ],
    restaurants:[
      rest('Varoulko Seaside','Seafood',3,'30-60',4.6),
      rest('Margaro','Seafood Taverna',2,'15-30',4.5),
      rest('Rakadiko','Greek Meze',4,'10-22',4.3),
      rest('Pasaji','Modern Greek',12,'18-35',4.4),
      rest('Vegan Beat','Vegan',13,'8-15',4.1)
    ],
    medicalFacilities:[
      med('Tzaneio General Hospital','General Hospital',3,true,'+30 210 453 2000'),
      med('Metropolitan Hospital','Private Hospital',8,true,'+30 210 480 9000'),
      med('Olympiacos Medical Centre','Sports Medicine',0,false,'+30 210 414 3000')
    ],
    airportTransfers:[
      air('Athens International (ATH)',35,'35-50 min',['Taxi','Metro','Bus','Private Transfer']),
      air('Thessaloniki (SKG)',500,'300-360 min',['Domestic Flight','Bus','Private Transfer']),
      air('Kalamata (KLX)',250,'180-220 min',['Private Transfer'])
    ],
    nearbyTournaments:[
      tourn('Greek Super League Youth',0,'Natural Grass','National Youth','Year-round'),
      tourn('Greek Youth Cup',5,'Natural Grass','National Youth Cup','Year-round'),
      tourn('Piraeus Regional Cup',3,'Natural Grass','Regional','October-May')
    ],
    costOfLiving:{meal:8,accommodation:500,transport:30},
    visa:{required:true,type:'Schengen Visa / Student Visa',duration:'90 days / 1 year',processingTime:'2-6 weeks'},
    scholarships:[
      schol('Olympiacos Youth Scholarship','Full tuition','Top Greek scouted talent','Rolling'),
      schol('Mediterranean Camp Grant','30% fees','International campers','June')
    ],
    gallery:['olympiacos_rentis.jpg','olympiacos_training.jpg','olympiacos_academy.jpg']
  },
  {
    id:'fcporto', name:'FC Porto Academy', country:`Portugal ${F.PT}`, city:'Porto',
    coordinates:{lat:41.1621,lng:-8.5834}, website:'https://www.fcporto.pt/en/academy',
    phone:'+351 22 557 0400', email:'formacao@fcporto.pt', founded:1985, starred:false, level:'Elite',
    description:'FC Porto\'s youth academy at the PortoGaia training complex is one of Portugal\'s finest. Known for developing tough, tactically intelligent players, Porto\'s academy has been a springboard for talent heading to top European leagues.',
    courtSurfaces:stdSurfaces, ageGroups:stdAgeGroups, trainingMonths:allMonths,
    programs:[
      prog('Porto Academy Residency','10 months','Elite','By invitation only','Full residential program at the PortoGaia complex.'),
      prog('FC Porto Summer Camp','2 weeks','Intermediate',1800,'International summer camp with Porto coaching philosophy.'),
      prog('Dragon Talent Program','6 months','Advanced',3500,'Advanced development for scouted Portuguese and international talent.')
    ],
    coaches:[
      coach('Rui Barros','Academy Coordinator',12,true,'41 Portugal caps','Former Portuguese international overseeing youth development.'),
      coach('Antonio Folha','Youth Coach',15,true,'Portuguese First Division','Former midfielder, tactical specialist in youth coaching.')
    ],
    notableAlumni:[
      alum('Joao Palhinha','Bayern Munich and Portugal midfielder',2018),
      alum('Diogo Dalot','Manchester United and Portugal defender',2017),
      alum('Fabio Vieira','Arsenal midfielder, Portugal youth star',2020),
      alum('Andre Silva','Portugal striker, Bundesliga top scorer contender',2015)
    ],
    hotels:[
      hotel('The Yeatman',8,'200-400',4.8,'https://www.the-yeatman-hotel.com'),
      hotel('InterContinental Porto',5,'130-260',4.6,'https://www.ihg.com'),
      hotel('Ibis Porto Centro',4,'45-80',3.8,'https://www.ibis.com'),
      hotel('Hotel Infante Sagres',6,'100-200',4.5,'https://www.infantesagres.com'),
      hotel('Gallery Hostel Porto',5,'18-40',4.2,'https://www.gallery-hostel.com')
    ],
    restaurants:[
      rest('Cafe Santiago','Francesinha',5,'8-18',4.5),
      rest('O Gaveto','Seafood',6,'20-40',4.6),
      rest('DOP','Fine Portuguese',5,'30-55',4.5),
      rest('Mercado do Bolhao','Market Food',4,'5-15',4.3),
      rest('daTerra','Vegan Buffet',5,'10-18',4.2)
    ],
    medicalFacilities:[
      med('Hospital de Santo Antonio','General Hospital',5,true,'+351 22 207 7500'),
      med('Hospital da Luz Porto','Private Hospital',6,true,'+351 22 506 3600'),
      med('Porto Sports Medicine','Sports Medicine',2,false,'+351 22 557 0400')
    ],
    airportTransfers:[
      air('Porto Francisco Sa Carneiro (OPO)',12,'20-25 min',['Taxi','Metro','Bus','Private Transfer']),
      air('Lisbon (LIS)',315,'180-210 min',['Train','Private Transfer']),
      air('Vigo (VGO)',165,'100-120 min',['Bus','Private Transfer'])
    ],
    nearbyTournaments:[
      tourn('Liga Revelacao',0,'Natural Grass','National Youth','Year-round'),
      tourn('Taca Revelacao',0,'Natural Grass','National Youth Cup','Year-round'),
      tourn('Porto International Youth Cup',5,'Natural Grass','International Youth','June')
    ],
    costOfLiving:{meal:7,accommodation:550,transport:35},
    visa:{required:true,type:'Schengen Visa / Student Visa',duration:'90 days / 1 year',processingTime:'2-8 weeks'},
    scholarships:[
      schol('Porto Dragon Scholarship','Full tuition and board','Scouted elite Portuguese talent','Rolling'),
      schol('International Youth Award','50% fees','Top overseas camp performers','August')
    ],
    gallery:['fcporto_portogaia.jpg','fcporto_training.jpg','fcporto_academy.jpg','fcporto_pitch.jpg']
  }];

const CLIMATE_DATA = {
  barcelona: { avgTemp: [10,11,13,15,19,23,26,26,23,18,14,11], avgRain: [41,29,42,49,59,40,20,61,85,91,52,46], humidity: [73,71,70,69,69,67,67,69,72,74,73,73] },
  madrid: { avgTemp: [6,8,11,13,18,23,27,26,22,16,10,7], avgRain: [37,35,26,47,52,25,15,10,28,49,56,56], humidity: [71,65,55,52,48,38,31,34,43,58,68,74] },
  manchester: { avgTemp: [5,5,7,9,12,15,17,17,14,11,7,5], avgRain: [69,50,61,51,61,67,65,79,74,77,70,81], humidity: [86,82,79,75,73,74,76,79,81,84,86,87] },
  london: { avgTemp: [5,5,8,10,14,17,19,19,16,12,8,5], avgRain: [55,41,41,43,49,45,45,50,49,69,59,55], humidity: [81,77,72,67,66,65,65,68,72,78,81,83] },
  munich: { avgTemp: [-1,1,5,9,14,17,19,19,15,9,4,0], avgRain: [48,41,58,62,94,125,108,109,68,56,52,55], humidity: [82,78,70,67,67,68,68,70,74,79,82,84] },
  dortmund: { avgTemp: [2,3,6,10,14,17,19,19,15,11,6,3], avgRain: [63,47,57,46,65,80,74,73,57,54,57,68], humidity: [84,80,73,68,66,67,69,71,76,81,84,86] },
  clairefontaine: { avgTemp: [4,5,8,11,15,18,20,20,17,12,7,4], avgRain: [51,42,48,45,63,50,62,52,47,61,51,58], humidity: [86,82,76,71,71,70,68,71,76,83,86,88] },
  lyon: { avgTemp: [3,5,9,12,16,20,23,22,18,13,7,4], avgRain: [47,35,47,59,75,70,53,62,63,69,63,45], humidity: [82,76,68,65,64,60,56,59,66,76,82,84] },
  milan: { avgTemp: [2,5,10,14,19,23,25,24,20,14,8,3], avgRain: [64,63,82,82,96,65,68,93,69,100,101,60], humidity: [86,79,72,72,70,67,65,67,72,80,85,86] },
  turin: { avgTemp: [1,4,9,13,17,21,24,23,19,13,7,2], avgRain: [36,52,63,92,104,79,41,62,55,76,73,33], humidity: [80,73,63,62,61,58,56,58,64,74,80,82] },
  lisbon: { avgTemp: [12,13,14,16,18,21,24,24,22,19,15,12], avgRain: [110,111,69,64,44,16,6,6,33,80,114,108], humidity: [79,76,72,69,67,63,58,58,64,72,78,80] },
  amsterdam: { avgTemp: [4,4,7,10,14,17,19,19,16,12,7,5], avgRain: [68,47,66,42,55,65,81,72,78,83,85,76], humidity: [87,84,79,74,72,73,75,77,80,84,87,88] },
  brussels: { avgTemp: [3,4,7,10,14,17,19,19,16,12,7,4], avgRain: [76,63,70,51,67,78,73,79,69,74,76,81], humidity: [86,82,76,71,70,70,72,74,78,83,86,87] },
  zagreb: { avgTemp: [1,3,8,13,17,21,23,23,18,13,7,2], avgRain: [46,40,51,56,73,91,72,78,81,68,76,58], humidity: [79,73,64,60,61,62,61,63,69,76,80,82] },
  belgrade: { avgTemp: [1,3,8,14,19,22,24,24,19,13,7,2], avgRain: [47,40,49,56,58,101,63,58,55,50,55,52], humidity: [78,72,62,58,57,57,54,55,60,69,76,80] },
  istanbul: { avgTemp: [6,6,8,13,18,22,25,25,21,17,12,8], avgRain: [99,72,70,46,35,34,34,37,42,67,89,101], humidity: [78,77,75,72,71,67,65,66,69,74,77,78] },
  malmo: { avgTemp: [1,1,3,8,13,17,19,18,15,10,5,2], avgRain: [49,30,39,33,40,53,62,58,55,53,55,53], humidity: [86,84,79,72,67,68,71,74,78,82,86,87] },
  prague: { avgTemp: [-1,1,5,10,15,18,20,20,15,10,4,1], avgRain: [23,22,28,33,65,73,66,70,40,29,28,25], humidity: [82,78,69,62,62,63,62,64,70,77,83,84] },
  warsaw: { avgTemp: [-2,0,4,10,15,18,20,19,14,9,4,0], avgRain: [27,26,31,34,54,69,73,56,44,33,36,33], humidity: [84,81,73,66,63,65,66,68,74,80,85,87] },
  salzburg: { avgTemp: [-1,1,5,10,15,18,20,20,15,10,4,0], avgRain: [55,48,60,63,104,139,143,131,76,56,57,51], humidity: [80,76,68,64,64,65,65,67,72,78,80,82] },
  piraeus: { avgTemp: [10,11,13,16,21,25,28,28,24,20,15,11], avgRain: [56,47,41,26,15,6,5,6,15,48,56,69], humidity: [69,67,64,59,53,46,42,44,51,61,68,70] },
  porto: { avgTemp: [10,11,12,14,16,19,21,21,19,16,13,11], avgRain: [158,119,97,115,88,40,16,22,69,138,158,181], humidity: [82,79,76,74,73,71,70,70,73,78,81,83] }
};

const COUNTRIES = [...new Set(ACADEMIES.map(a => a.country))];

// Write the output file
let output = '// Football Academies Data - Auto-generated\n';
output += '// 24 European Football Academies with comprehensive details\n\n';

function serialize(obj, indent) {
  return JSON.stringify(obj, null, indent)
    .replace(/"(\w+)":/g, '$1:')
    .replace(/"/g, "'");
}

// Build ACADEMIES string manually for template literals
let acStr = 'const ACADEMIES = [\n';
for (const a of ACADEMIES) {
  let s = serialize(a, 2);
  // Fix template literal for country field
  const countryMatch = s.match(/country:\s*'([^']+)'/);
  if (countryMatch) {
    const val = countryMatch[1];
    for (const [code, flag] of Object.entries(F)) {
      if (val.includes(flag)) {
        const countryName = val.replace(' ' + flag, '');
        // We'll just keep the flag inline
      }
    }
  }
  acStr += '  ' + s + ',\n';
}
acStr += '];\n\n';

output += acStr;
output += 'const CLIMATE_DATA = ' + serialize(CLIMATE_DATA, 2) + ';\n\n';
output += 'const COUNTRIES = [...new Set(ACADEMIES.map(a => a.country))];\n';

fs.writeFileSync('football-data.js', output, 'utf8');
console.log('football-data.js written successfully!');
console.log('Size:', fs.statSync('football-data.js').size, 'bytes');