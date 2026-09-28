import React from 'react';
import { 
  ArrowLeft, 
  Map, 
  CheckCircle2, 
  Clock, 
  AlertTriangle, 
  Compass, 
  Footprints,
  Navigation
} from 'lucide-react';

interface RutasAlternasScreenProps {
  onBack: () => void;
}

export const RutasAlternasScreen: React.FC<RutasAlternasScreenProps> = ({ onBack }) => {
  return (
    <div className="pb-24 px-4 pt-3 text-slate-800">
      {/* Screen Title Bar */}
      <div className="flex items-center gap-2 mb-3">
        <button
          onClick={onBack}
          className="p-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <div>
          <h2 className="text-base font-extrabold text-slate-900">Rutas Alternas de Descongestión</h2>
          <p className="text-[11px] text-slate-500">Plan de Mitigación de Flujo Peatonal DIRCETUR</p>
        </div>
      </div>

      {/* Alert Context */}
      <div className="bg-rose-50 border border-rose-200 rounded-2xl p-3.5 mb-4 text-xs">
        <div className="flex items-center gap-2 text-rose-800 font-extrabold mb-1">
          <AlertTriangle className="w-4 h-4 text-rose-600" />
          <span>Saturación en Hatun Rumiyoc (92% de Aforo)</span>
        </div>
        <p className="text-[11px] text-rose-700 leading-relaxed">
          Para evitar empujones, preservar los muros incas y optimizar su tiempo, la Municipalidad del Cusco recomienda usar los corredores alternos libres:
        </p>
      </div>

      {/* Recommended Routes */}
      <div className="space-y-3">
        {/* Route 1 */}
        <div className="bg-white rounded-2xl border border-emerald-200 p-4 shadow-2xs">
          <div className="flex items-start justify-between">
            <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase">
              Ruta 1 · Despejada
            </span>
            <span className="text-[11px] font-bold text-emerald-700 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> 5 min a San Blas
            </span>
          </div>
          <h3 className="font-extrabold text-slate-900 text-sm mt-1.5">
            Por Calle San Agustín y Choquechaka
          </h3>
          <p className="text-xs text-slate-600 mt-1">
            Plaza de Armas → Calle San Agustín → Calle Maruri → Choquechaka.
          </p>
          <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
            <span className="text-emerald-700 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Tránsito peatonal óptimo
            </span>
            <span>Ancho de vereda: 1.80m</span>
          </div>
        </div>

        {/* Route 2 */}
        <div className="bg-white rounded-2xl border border-emerald-200 p-4 shadow-2xs">
          <div className="flex items-start justify-between">
            <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase">
              Ruta 2 · Despejada
            </span>
            <span className="text-[11px] font-bold text-emerald-700 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> 7 min a Mirador
            </span>
          </div>
          <h3 className="font-extrabold text-slate-900 text-sm mt-1.5">
            Por Cuesta del Almirante y Purgatorio
          </h3>
          <p className="text-xs text-slate-600 mt-1">
            Desde la Plaza de Armas subiendo por Museo Inka hacia la Plazoleta de las Nazarenas.
          </p>
          <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
            <span className="text-emerald-700 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Adoquinado patrimonial firme
            </span>
            <span>Vigilancia POLTUR: Fija</span>
          </div>
        </div>

        {/* Route 3 */}
        <div className="bg-white rounded-2xl border border-emerald-200 p-4 shadow-2xs">
          <div className="flex items-start justify-between">
            <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase">
              Ruta 3 · Despejada
            </span>
            <span className="text-[11px] font-bold text-emerald-700 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> 4 min a Qorikancha
            </span>
          </div>
          <h3 className="font-extrabold text-slate-900 text-sm mt-1.5">
            Boulevard Peatonal Calle Loreto / Intikijllu
          </h3>
          <p className="text-xs text-slate-600 mt-1">
            Callejón inca flanqueado por los muros del Acllahuasi y Amarucancha.
          </p>
          <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
            <span className="text-emerald-700 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Flujo unidireccional
            </span>
            <span>Iluminación LED patrimonial</span>
          </div>
        </div>
      </div>

      <button
        onClick={onBack}
        className="w-full mt-4 bg-[#101b2b] text-white py-2.5 rounded-xl font-bold text-xs cursor-pointer"
      >
        Regresar al Menú Principal
      </button>
    </div>
  );
};
