import { Attraction, TaxiRecord, TouristPass, IncidentReport } from '../types';

export const CUSCO_ATTRACTIONS: Attraction[] = [
  {
    id: 'plaza-armas',
    name: 'Plaza de Armas del Cusco',
    zone: 'Centro Histórico',
    currentOccupancy: 68,
    capacityLevel: 'moderado',
    maxDailyCapacity: 5000,
    currentVisitors: 3400,
    estimatedWaitMinutes: 0,
    bestTimeToVisit: '07:30 - 10:00 o 17:30 en adelante',
    closingTime: 'Espacio público abierto 24h',
    address: 'Portal de Panes, Portal Belén, Centro Histórico',
    description: 'Corazón urbano del Cusco incaico y virreinal. Espacio protegido con vigilancia permanente de POLTUR y Serenazgo.',
    includedInBtc: false,
    heritageRules: [
      'Prohibido el comercio ambulatorio no autorizado',
      'No pisar las áreas verdes y jardines ornamentales',
      'Prohibido el sobrevuelo de drones sin permiso municipal'
    ]
  },
  {
    id: 'piedra-12-angulos',
    name: 'Piedra de los 12 Ángulos',
    zone: 'Centro Histórico',
    currentOccupancy: 89,
    capacityLevel: 'saturado',
    maxDailyCapacity: 1200,
    currentVisitors: 1068,
    estimatedWaitMinutes: 15,
    bestTimeToVisit: '06:30 - 08:30 (luz matutina y sin afluencia)',
    closingTime: 'Acceso peatonal permanente',
    address: 'Calle Hatun Rumiyoc s/n (Palacio Arzobispal)',
    description: 'Joya de la mampostería inca en el muro del Palacio de Inca Roca. Área de tránsito peatonal estrecho.',
    includedInBtc: false,
    heritageRules: [
      'TERMINANTEMENTE PROHIBIDO TOCAR o apoyar las manos en la piedra (la grasa cutánea erosiona la andesita)',
      'Mantener circulación fluida por la calle Hatun Rumiyoc',
      'Respetar el cordón perimétrico de seguridad patrimonial'
    ]
  },
  {
    id: 'sacsayhuaman',
    name: 'Parque Arqueológico Sacsayhuamán',
    zone: 'Sacsayhuamán',
    currentOccupancy: 42,
    capacityLevel: 'optimo',
    maxDailyCapacity: 3500,
    currentVisitors: 1470,
    estimatedWaitMinutes: 5,
    bestTimeToVisit: '07:00 - 11:00',
    closingTime: 'Cierre de ingreso: 17:00',
    address: 'A 2 km al norte de la Plaza de Armas de Cusco',
    description: 'Impresionante fortaleza y centro ceremonial inca con bloques megalíticos de hasta 128 toneladas.',
    includedInBtc: true,
    heritageRules: [
      'Caminar únicamente por los senderos señalizados',
      'Prohibido subirse o escalar los baluartes de piedra',
      'No arrojar residuos ni plásticos de un solo uso'
    ]
  },
  {
    id: 'san-blas',
    name: 'Barrio Tradicional de San Blas',
    zone: 'Centro Histórico',
    currentOccupancy: 54,
    capacityLevel: 'optimo',
    maxDailyCapacity: 2500,
    currentVisitors: 1350,
    estimatedWaitMinutes: 0,
    bestTimeToVisit: '10:00 - 14:00 (Talleres de artesanos abiertos)',
    closingTime: 'Calles abiertas / Templos hasta las 18:00',
    address: 'Cuesta de San Blas, Plazoleta San Blas',
    description: 'Barrio de artesanos tradicionales (familias Mendívil, Mérida y Olave), calles empedradas y mirador de la ciudad.',
    includedInBtc: false,
    heritageRules: [
      'Callejones de pendiente pronunciada; circular con precaución',
      'Respetar la tranquilidad y el descanso de los vecinos residentes',
      'Adquirir artesanías solo en talleres formales debidamente registrados'
    ]
  },
  {
    id: 'qorikancha',
    name: 'Templo del Qorikancha (Santo Domingo)',
    zone: 'Centro Histórico',
    currentOccupancy: 62,
    capacityLevel: 'moderado',
    maxDailyCapacity: 2800,
    currentVisitors: 1736,
    estimatedWaitMinutes: 10,
    bestTimeToVisit: '08:30 - 10:30 o 14:00 - 15:30',
    closingTime: 'Lunes a sábado hasta 17:30 / Domingo 14:00-17:00',
    address: 'Plazoleta Santo Domingo, Av. El Sol s/n',
    description: 'Antiguo Templo del Sol de los Incas sobre el cual se edificó el convento colonial de Santo Domingo.',
    includedInBtc: false,
    heritageRules: [
      'Ingreso con boleto de taquilla Qorikancha',
      'Silencio dentro de las salas de culto y recintos coloniales',
      'Fotografía sin flash dentro de las galerías interiores'
    ]
  },
  {
    id: 'ollantaytambo',
    name: 'Parque Arqueológico de Ollantaytambo',
    zone: 'Valle Sagrado',
    currentOccupancy: 48,
    capacityLevel: 'optimo',
    maxDailyCapacity: 3000,
    currentVisitors: 1440,
    estimatedWaitMinutes: 8,
    bestTimeToVisit: '07:00 - 09:30 (previo al arribo de buses del Valle)',
    closingTime: 'Ingreso hasta las 16:30',
    address: 'Ollantaytambo, Valle Sagrado de los Incas (a 72 km de Cusco)',
    description: 'Pueblo vivo inca y colosal fortaleza con el Templo del Sol y andenería ceremonial.',
    includedInBtc: true,
    heritageRules: [
      'Subir las terrazas a ritmo pausado para prevenir el mal de altura',
      'No ingresar con mochilas grandes o bastones de trekking sin punta de goma',
      'Uso obligatorio de calzado adecuado de trekking'
    ]
  }
];

export const MOCK_TAXIS: Record<string, TaxiRecord> = {
  'X2A-412': {
    plate: 'X2A-412',
    driverName: 'Carlos Quispe Mamani',
    driverDni: '44892104',
    companyName: 'Asociación Taxi Imperial Cusco',
    licenseNumber: 'Q44892104 (A-IIb Profesional)',
    vehicleModel: 'Toyota Probox 2022',
    color: 'Blanco con franja municipal reflectiva',
    municipalPermit: 'REG-SETAME-CUSCO-2026-0849',
    status: 'autorizado',
    expirationDate: '15/12/2026',
    rating: 4.9,
    suggestedRates: [
      { origin: 'Aeropuerto Velasco Astete', destination: 'Plaza de Armas / Centro', rateSol: 15 },
      { origin: 'Centro Histórico', destination: 'Sacsayhuamán (Ida)', rateSol: 12 },
      { origin: 'Centro Histórico', destination: 'Terminal Terrestre Cusco', rateSol: 10 },
      { origin: 'Centro Histórico', destination: 'Estación de Tren Wanchaq', rateSol: 8 }
    ]
  },
  'V3B-891': {
    plate: 'V3B-891',
    driverName: 'Edgar Huamán Ttito',
    driverDni: '23940182',
    companyName: 'Turismo Seguro Express Cusco',
    licenseNumber: 'H23940182 (A-IIb Profesional)',
    vehicleModel: 'Hyundai Elantra 2023',
    color: 'Plata metálico',
    municipalPermit: 'REG-SETAME-CUSCO-2026-1120',
    status: 'autorizado',
    expirationDate: '30/11/2026',
    rating: 4.8,
    suggestedRates: [
      { origin: 'Aeropuerto Velasco Astete', destination: 'Plaza de Armas / Centro', rateSol: 15 },
      { origin: 'Centro Histórico', destination: 'Valle Sagrado (Pisac)', rateSol: 60 }
    ]
  },
  'Z1X-900': {
    plate: 'Z1X-900',
    driverName: 'Vehículo en Fiscalización',
    driverDni: '---',
    companyName: 'Sin registro formal en DIRCETUR',
    licenseNumber: 'Sin acreditación turística',
    vehicleModel: 'Sedan Gris',
    color: 'Gris oscuro',
    municipalPermit: 'Vencido o No Registrado',
    status: 'no_registrado',
    expirationDate: 'No vigente',
    rating: 2.1,
    suggestedRates: []
  }
};

export const INITIAL_USER_PASS: TouristPass = {
  code: 'BTC-2026-98421-PE',
  holderName: 'Elena Martínez Rivera',
  documentNumber: 'PAS-ESP-882194',
  nationality: 'España',
  type: 'Boleto Turístico Integral (10 Días)',
  issueDate: '26/09/2026',
  expiryDate: '06/10/2026',
  remainingDays: 8,
  visitedSites: ['sacsayhuaman', 'san-blas']
};

export const EMERGENCY_CONTACTS = [
  {
    name: 'POLTUR - Policía de Turismo Cusco',
    description: 'Atención 24h al turista nacional y extranjero',
    phone: '(084) 581560',
    mobile: '+51 984 012 345',
    address: 'Calle Saphy N° 510, Centro Histórico',
    type: 'police'
  },
  {
    name: 'DIRCETUR Cusco (Asistencia al Turista)',
    description: 'Reclamaciones, agencias y guías autorizados',
    phone: '(084) 222032',
    mobile: '+51 984 821 990',
    address: 'Plaza Túpac Amaru s/n, Wanchaq',
    type: 'authority'
  },
  {
    name: 'Central Serenazgo Cusco',
    description: 'Seguridad ciudadana y monitoreo por cámaras',
    phone: '(084) 221118',
    mobile: '105',
    address: 'Av. El Sol 103, Centro Histórico',
    type: 'serenazgo'
  },
  {
    name: 'SAMU Cusco (Emergencias Médicas / Soroche)',
    description: 'Ambulancias y asistencia por mal de altura',
    phone: '106',
    mobile: '(084) 243322',
    address: 'Red de Salud Cusco - Atención inmediata',
    type: 'medical'
  }
];

export const INITIAL_INCIDENTS: IncidentReport[] = [
  {
    id: 'INC-2026-042',
    timestamp: 'Hoy, 09:15 AM',
    category: 'sobreprecio',
    location: 'Exterior Estación San Pedro',
    description: 'Cobro de tarifa excesiva en transporte no rotulado a Ollantaytambo.',
    status: 'en_atencion',
    assignedEntity: 'DIRCETUR'
  },
  {
    id: 'INC-2026-039',
    timestamp: 'Ayer, 16:40 PM',
    category: 'falso_guia',
    location: 'Calle Triunfo - Muros incas',
    description: 'Persona sin credencial oficial DIRCETUR ofreciendo guiado irregular.',
    status: 'resuelto',
    assignedEntity: 'POLTUR'
  }
];

export const BTC_CIRCUITS = [
  {
    id: 'circuito-1',
    title: 'Circuito I: Sitios Arqueológicos Cusco',
    validity: '1 Día',
    sites: ['Sacsayhuamán', 'Q\'enqo', 'Puka Pukara', 'Tambomachay'],
    color: 'from-amber-600 to-amber-700'
  },
  {
    id: 'circuito-2',
    title: 'Circuito II: Ciudad y Museos Históricos',
    validity: '2 Días',
    sites: [
      'Museo Histórico Regional',
      'Museo de Arte Contemporáneo',
      'Monumento al Inca Pachacútec',
      'Centro Qosqo de Arte Nativo',
      'Tipón',
      'Pikillacta'
    ],
    color: 'from-sky-700 to-blue-800'
  },
  {
    id: 'circuito-3',
    title: 'Circuito III: Valle Sagrado de los Incas',
    validity: '2 Días',
    sites: ['Pisac', 'Ollantaytambo', 'Chinchero', 'Moray'],
    color: 'from-emerald-700 to-teal-800'
  }
];
