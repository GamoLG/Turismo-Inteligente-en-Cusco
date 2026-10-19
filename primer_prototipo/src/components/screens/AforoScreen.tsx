import React, { useState } from 'react';
import { 
  Users, 
  Clock, 
  MapPin, 
  AlertTriangle, 
  CheckCircle2, 
  RefreshCw, 
  Compass, 
  ChevronRight, 
  SunMedium, 
  Info,
  ShieldAlert,
  ArrowLeft,
  X
} from 'lucide-react';
import { CUSCO_ATTRACTIONS } from '../../data/mockData';
import { Attraction } from '../../types';

interface AforoScreenProps {
  onBack?: () => void;
  onNavigateToMovilidad?: () => void;
  onNavigateToPatrimonio?: () => void;
}

export const AforoScreen: React.FC<AforoScreenProps> = ({ onBack }) => {
  const [selectedZone, setSelectedZone] = useState<string>('todos');
  const [selectedAttraction, setSelectedAttraction] = useState<Attraction | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [attractions, setAttractions] = useState<Attraction[]>(CUSCO_ATTRACTIONS);

  const zones = [
    { id: 'todos', label: 'Todos' },
    { id: 'Centro Histórico', label: 'Centro Histórico' },
    { id: 'Sacsayhuamán', label: 'Sacsayhuamán' },
    { id: 'Valle Sagrado', label: 'Valle Sagrado' }
  ];

  const filteredAttractions = selectedZone === 'todos' 
    ? attractions 
    : attractions.filter(a => a.zone === selectedZone);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      // Simulate slight realistic fluctuations in real-time visitors
      setAttractions(prev => prev.map(item => {
        const delta = Math.floor(Math.random() * 7) - 3;
        const newOccupancy = Math.min(98, Math.max(20, item.currentOccupancy + delta));
        let level: Attraction['capacityLevel'] = 'optimo';
        if (newOccupancy >= 80) level = 'saturado';
        else if (newOccupancy >= 60) level = 'moderado';

        return {
          ...item,
          currentOccupancy: newOccupancy,
          capacityLevel: level,
          currentVisitors: Math.round((newOccupancy / 100) * item.maxDailyCapacity)
        };
      }));
      setIsRefreshing(false);
    }, 600);
  };

  const getCapacityBadge = (level: Attraction['capacityLevel']) => {
    switch (level) {
      case 'optimo':
        return {
          bg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
          dot: 'bg-emerald-500',
          label: 'Aforo Óptimo'
        };
      case 'moderado':
        return {
          bg: 'bg-amber-50 text-amber-700 border-amber-200',
          dot: 'bg-amber-500',
          label: 'Moderado'
        };
      case 'saturado':
        return {
          bg: 'bg-rose-50 text-rose-700 border-rose-200',
          dot: 'bg-rose-500 animate-pulse',
          label: 'Congestión Alta'
        };
    }
  };

  return (
    <div className="pb-24 px-4 pt-3 text-slate-800">
      {onBack && (
        <button
          onClick={onBack}
          className="mb-2.5 flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-xl cursor-pointer transition-colors w-fit"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Volver al Menú Principal</span>
        </button>
      )}

      {/* Top Header Card */}
      <div className="bg-gradient-to-br from-[#132238] to-[#1e3a5f] rounded-2xl p-4 text-white shadow-md relative overflow-hidden mb-4">
        {/* Subtle decorative background ring */}
        <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full border-4 border-white/5 pointer-events-none" />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-sky-200">
            <SunMedium className="w-4 h-4 text-amber-400" />
            <span className="font-semibold">Cusco · 17°C Despejado</span>
            <span className="opacity-70">· 3,399 m</span>
          </div>

          <button
            onClick={handleRefresh}
            className={`p-1.5 rounded-lg bg-white/10 hover:bg-white/20 active:scale-95 transition-all text-white flex items-center gap-1 text-[11px] font-medium ${isRefreshing ? 'animate-spin' : ''}`}
            title="Actualizar datos de aforo en vivo"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="mt-3">
          <h2 className="text-lg font-bold tracking-tight">Monitoreo de Aforo en Tiempo Real</h2>
          <p className="text-xs text-slate-300 mt-0.5">
            Sensores de flujo peatonal y taquilla coordinados por DIRCETUR y Municipalidad del Cusco.
          </p>
        </div>

        {/* Global city status alert */}
        <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-xs">
          <span className="text-slate-300 text-[11px]">Tránsito peatonal histórico:</span>
          <span className="inline-flex items-center gap-1.5 font-semibold text-emerald-300 text-[11px]">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            Tránsito Fluido en Plazas
          </span>
        </div>
      </div>

      {/* Filter Tabs (Horizontal buttons with interactive handlers) */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none mb-3">
        {zones.map((zone) => (
          <button
            key={zone.id}
            onClick={() => setSelectedZone(zone.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              selectedZone === zone.id
                ? 'bg-[#1b2f4a] text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {zone.label}
          </button>
        ))}
      </div>

      {/* Attractions List */}
      <div className="space-y-3">
        {filteredAttractions.map((attraction) => {
          const badge = getCapacityBadge(attraction.capacityLevel);
          const isHighAlert = attraction.capacityLevel === 'saturado';

          return (
            <div
              key={attraction.id}
              onClick={() => setSelectedAttraction(attraction)}
              className="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-sm hover:border-sky-300 hover:shadow-md transition-all cursor-pointer group relative"
            >
              {/* Card Header */}
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                    {attraction.zone}
                  </span>
                  <h3 className="font-bold text-slate-900 text-sm group-hover:text-[#1b2f4a] transition-colors leading-tight">
                    {attraction.name}
                  </h3>
                </div>

                {/* Status Badge */}
                <div
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold border ${badge.bg}`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${badge.dot}`} />
                  <span>{badge.label}</span>
                </div>
              </div>

              {/* Occupancy Bar */}
              <div className="mt-3">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-slate-500 font-medium">Ocupación estimada</span>
                  <span className="font-bold text-slate-800 tabular-nums">
                    {attraction.currentOccupancy}% ({attraction.currentVisitors.toLocaleString()} pers.)
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      isHighAlert
                        ? 'bg-rose-500'
                        : attraction.capacityLevel === 'moderado'
                        ? 'bg-amber-500'
                        : 'bg-emerald-500'
                    }`}
                    style={{ width: `${attraction.currentOccupancy}%` }}
                  />
                </div>
              </div>

              {/* Quick Info Grid */}
              <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <div className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>Espera: <strong className="text-slate-700">{attraction.estimatedWaitMinutes} min</strong></span>
                </div>

                <div className="flex items-center gap-1 text-[#0070ba] font-semibold text-[11px] group-hover:translate-x-0.5 transition-transform">
                  <span>Ver detalles</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {isHighAlert && (
                <div className="mt-2 text-[10px] bg-rose-50 text-rose-800 p-2 rounded-lg flex items-center gap-1.5 border border-rose-100">
                  <AlertTriangle className="w-3.5 h-3.5 shrink-0 text-rose-600" />
                  <span>Se sugiere visitar: <strong>{attraction.bestTimeToVisit}</strong></span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Modal / Detail Drawer for selected attraction */}
      {selectedAttraction && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="bg-white w-full max-w-md rounded-t-3xl sm:rounded-2xl max-h-[85vh] overflow-y-auto p-5 shadow-2xl animate-in fade-in slide-in-from-bottom duration-200">
            {/* Grab handle */}
            <div className="w-10 h-1 bg-slate-200 rounded-full mx-auto mb-4" />

            <div className="flex items-start justify-between mb-2">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-sky-600">
                  {selectedAttraction.zone}
                </span>
                <h3 className="text-lg font-extrabold text-slate-900 leading-tight">
                  {selectedAttraction.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedAttraction(null)}
                className="p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-3">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>{selectedAttraction.address}</span>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              {selectedAttraction.description}
            </p>

            {/* Aforo & Wait metrics */}
            <div className="grid grid-cols-2 gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 mb-4">
              <div>
                <span className="text-[10px] text-slate-500 uppercase font-semibold block">Aforo actual</span>
                <span className="text-base font-bold text-slate-900">
                  {selectedAttraction.currentOccupancy}%
                </span>
                <span className="text-[10px] text-slate-500 block">Cap. máx: {selectedAttraction.maxDailyCapacity}</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 uppercase font-semibold block">Horario recomendado</span>
                <span className="text-xs font-bold text-emerald-700">
                  {selectedAttraction.bestTimeToVisit}
                </span>
                <span className="text-[10px] text-slate-500 block">Cierre: {selectedAttraction.closingTime}</span>
              </div>
            </div>

            {/* Heritage Rules Box */}
            <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200/70 mb-4">
              <div className="flex items-center gap-1.5 text-amber-900 text-xs font-bold mb-2">
                <ShieldAlert className="w-4 h-4 text-amber-600" />
                <span>Normas de Protección Patrimonial (UNESCO / DIRCETUR)</span>
              </div>
              <ul className="space-y-1.5 text-[11px] text-slate-700">
                {selectedAttraction.heritageRules.map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setSelectedAttraction(null)}
              className="w-full bg-[#1b2f4a] hover:bg-[#13243a] text-white py-3 rounded-xl font-semibold text-xs transition-colors cursor-pointer"
            >
              Entendido · Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
