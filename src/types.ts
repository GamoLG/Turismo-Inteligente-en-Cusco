export type AppScreen = 
  | 'login' 
  | 'menu' 
  | 'aforo' 
  | 'rutas' 
  | 'mapa' 
  | 'movilidad' 
  | 'dircetur' 
  | 'boleto' 
  | 'patrimonio' 
  | 'sos' 
  | 'horas_punta' 
  | 'perfil';

export type CapacityLevel = 'optimo' | 'moderado' | 'saturado';

export interface Attraction {
  id: string;
  name: string;
  zone: 'Centro Histórico' | 'Sacsayhuamán' | 'Valle Sagrado' | 'Sur';
  currentOccupancy: number; // percentage 0-100
  capacityLevel: CapacityLevel;
  maxDailyCapacity: number;
  currentVisitors: number;
  estimatedWaitMinutes: number;
  bestTimeToVisit: string;
  closingTime: string;
  address: string;
  description: string;
  includedInBtc: boolean;
  heritageRules: string[];
}

export interface TaxiRecord {
  plate: string;
  driverName: string;
  driverDni: string;
  companyName: string;
  licenseNumber: string;
  vehicleModel: string;
  color: string;
  municipalPermit: string;
  status: 'autorizado' | 'observado' | 'no_registrado';
  expirationDate: string;
  rating: number;
  suggestedRates: {
    origin: string;
    destination: string;
    rateSol: number;
  }[];
}

export interface IncidentReport {
  id: string;
  timestamp: string;
  category: 'sobreprecio' | 'acoso' | 'falso_guia' | 'dano_patrimonio' | 'otro';
  location: string;
  description: string;
  status: 'recibido' | 'en_atencion' | 'resuelto';
  assignedEntity: 'POLTUR' | 'DIRCETUR' | 'SERENAZGO';
}

export interface TouristPass {
  code: string;
  holderName: string;
  documentNumber: string;
  nationality: string;
  type: 'Boleto Turístico Integral (10 Días)' | 'Circuito I (1 Día)' | 'Circuito II' | 'Circuito III';
  issueDate: string;
  expiryDate: string;
  remainingDays: number;
  visitedSites: string[];
}
