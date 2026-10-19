import React, { useState } from 'react';
import { 
  ArrowLeft, 
  MapPin, 
  Shield, 
  Compass, 
  Layers, 
  Crosshair, 
  Eye, 
  Camera,
  Check
} from 'lucide-react';

interface MapaOficialScreenProps {
  onBack: () => void;
}

export const MapaOficialScreen: React.FC<MapaOficialScreenProps> = ({ onBack }) => {
  const [selectedLayer, setSelectedLayer] = useState<'todos' | 'seguridad' | 'peatonal'>('todos');
  const [activePoi, setActivePoi] = useState<string | null>('Plaza de Armas');

  const pois = [
    { id: '1', name: 'Plaza de Armas', type: 'monument', status: 'Seguro · 6 Cámaras C2', coords: 'Centro' },
    { id: '2', name: 'Hatun Rumiyoc', type: 'crowded', status: 'Congestión 92% · Desvío sugerido', coords: 'Este' },
    { id: '3', name: 'Puesto POLTUR Saphy', type: 'police', status: 'Patrullaje Permanente 24h', coords: 'Norte' },
    { id: '4', name: 'San Blas Plazoleta', type: 'safe', status: 'Aforo Óptimo · Artesanías', coords: 'Noreste' },
    { id: '5', name: 'Calle Loreto (Inca)', type: 'safe', status: 'Tránsito Peatonal Fluido', coords: 'Sur' },
  ];

  return (
    <div className="pb-24 px-4 pt-3 text-slate-800">
      {/* Title Bar */}
      <div className="flex items-center gap-2 mb-3">
        <button
          onClick={onBack}
          className="p-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <div>
          <h2 className="text-base font-extrabold text-slate-900">Mapa Oficial y Zonificación</h2>
          <p className="text-[11px] text-slate-500">Georreferenciación de Seguridad UNESCO / Municipalidad</p>
        </div>
      </div>

      {/* Simulated Interactive Map Canvas */}
      <div className="relative w-full h-52 bg-slate-900 rounded-3xl overflow-hidden border border-slate-700 shadow-md mb-3 flex flex-col justify-between p-3">
        {/* Map Grid Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] opacity-25" />

        {/* Map Overlay Badge */}
        <div className="relative z-10 flex items-center justify-between">
          <span className="px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-sky-300 text-[10px] font-black border border-sky-400/30 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            GPS Activo · Precisión 3m
          </span>

          <span className="text-[10px] text-slate-300 font-mono bg-slate-800/80 px-2 py-0.5 rounded">
            -13.5170° S, -71.9785° W
          </span>
        </div>

        {/* Map Nodes Pins */}
        <div className="relative z-10 my-auto flex justify-around items-center px-4">
          <button
            onClick={() => setActivePoi('Puesto POLTUR Saphy')}
            className="flex flex-col items-center group cursor-pointer"
          >
            <div className="w-7 h-7 rounded-full bg-sky-500 text-white flex items-center justify-center shadow-lg group-hover:scale-125 transition-transform">
              <Shield className="w-3.5 h-3.5" />
            </div>
            <span className="text-[9px] font-bold text-sky-200 mt-1">Saphy</span>
          </button>

          <button
            onClick={() => setActivePoi('Plaza de Armas')}
            className="flex flex-col items-center group cursor-pointer"
          >
            <div className="w-9 h-9 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shadow-xl ring-4 ring-amber-400/20 group-hover:scale-125 transition-transform">
              <Compass className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-extrabold text-white mt-1 bg-black/60 px-1.5 py-0.5 rounded">Plaza Mayor</span>
          </button>

          <button
            onClick={() => setActivePoi('Hatun Rumiyoc')}
            className="flex flex-col items-center group cursor-pointer"
          >
            <div className="w-7 h-7 rounded-full bg-rose-500 text-white flex items-center justify-center shadow-lg animate-bounce">
              <MapPin className="w-3.5 h-3.5" />
            </div>
            <span className="text-[9px] font-bold text-rose-300 mt-1">12 Ángulos</span>
          </button>
        </div>

        {/* Bottom map status */}
        <div className="relative z-10 flex items-center justify-between text-[10px] text-slate-300">
          <span>Corredor Turístico Seguro Activo</span>
          <span>Red C2: 38 Cámaras</span>
        </div>
      </div>

      {/* Layer Filter Chips */}
      <div className="flex gap-1.5 mb-3">
        <button
          onClick={() => setSelectedLayer('todos')}
          className={`px-3 py-1 rounded-xl text-xs font-semibold cursor-pointer ${
            selectedLayer === 'todos' ? 'bg-[#101b2b] text-white' : 'bg-slate-100 text-slate-600'
          }`}
        >
          Todos los Puntos
        </button>
        <button
          onClick={() => setSelectedLayer('seguridad')}
          className={`px-3 py-1 rounded-xl text-xs font-semibold cursor-pointer ${
            selectedLayer === 'seguridad' ? 'bg-[#101b2b] text-white' : 'bg-slate-100 text-slate-600'
          }`}
        >
          Puntos Seguros POLTUR
        </button>
      </div>

      {/* Points of Interest Directory */}
      <div className="space-y-2">
        {pois.map((poi) => (
          <div
            key={poi.id}
            onClick={() => setActivePoi(poi.name)}
            className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
              activePoi === poi.name ? 'bg-sky-50 border-sky-400' : 'bg-white border-slate-200'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700">
                <MapPin className="w-4 h-4 text-sky-600" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">{poi.name}</h4>
                <p className="text-[10px] text-slate-500">{poi.status}</p>
              </div>
            </div>
            <span className="text-[10px] font-bold text-slate-400">{poi.coords}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
