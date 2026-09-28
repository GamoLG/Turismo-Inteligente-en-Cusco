import React from 'react';
import { 
  ArrowLeft, 
  Clock, 
  TrendingUp, 
  Sun, 
  Moon, 
  CheckCircle, 
  AlertTriangle 
} from 'lucide-react';

interface HorasPuntaScreenProps {
  onBack: () => void;
}

export const HorasPuntaScreen: React.FC<HorasPuntaScreenProps> = ({ onBack }) => {
  const hourlyData = [
    { hour: '07:00 AM', status: 'baja', pct: 25, label: 'Muy Fluido · Excelente para fotos' },
    { hour: '09:00 AM', status: 'moderada', pct: 55, label: 'Llegada de primeros grupos de tour' },
    { hour: '11:00 AM', status: 'punta', pct: 94, label: 'HORA PUNTA · Piedra 12 Ángulos saturada' },
    { hour: '01:00 PM', status: 'moderada', pct: 60, label: 'Horario de almuerzo tradicional' },
    { hour: '03:30 PM', status: 'punta', pct: 88, label: 'HORA PUNTA · Retorno de Sacsayhuamán' },
    { hour: '06:00 PM', status: 'moderada', pct: 70, label: 'Paseo nocturno en Plaza de Armas' },
    { hour: '08:30 PM', status: 'baja', pct: 30, label: 'Tránsito libre y seguro' },
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
          <h2 className="text-base font-extrabold text-slate-900">Horas Punta · Predicción Diaria</h2>
          <p className="text-[11px] text-slate-500">Estimación basada en sensores C2 y boletos emitidos</p>
        </div>
      </div>

      {/* Summary Advice */}
      <div className="bg-sky-50 border border-sky-200 rounded-2xl p-3.5 mb-4 text-xs">
        <div className="flex items-center gap-2 text-sky-900 font-bold mb-1">
          <Clock className="w-4 h-4 text-sky-700" />
          <span>Mejor franja horaria para hoy: 07:00 a 09:00 AM</span>
        </div>
        <p className="text-[11px] text-sky-800">
          Visite los muros de la calle Hatun Rumiyoc y la Plaza de Armas a primera hora de la mañana para evitar colas de hasta 25 minutos.
        </p>
      </div>

      {/* Hourly Timeline */}
      <div className="space-y-2">
        {hourlyData.map((item, idx) => (
          <div
            key={idx}
            className={`p-3 rounded-2xl border transition-all ${
              item.status === 'punta'
                ? 'bg-rose-50/70 border-rose-200'
                : item.status === 'moderada'
                ? 'bg-amber-50/50 border-amber-200'
                : 'bg-emerald-50/50 border-emerald-200'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono font-bold text-xs text-slate-900">{item.hour}</span>
              <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full ${
                item.status === 'punta'
                  ? 'bg-rose-500 text-white'
                  : item.status === 'moderada'
                  ? 'bg-amber-200 text-amber-800'
                  : 'bg-emerald-200 text-emerald-800'
              }`}>
                {item.pct}% Ocupación
              </span>
            </div>

            <div className="w-full h-1.5 bg-white rounded-full mt-2 overflow-hidden border border-slate-200/40">
              <div
                className={`h-full rounded-full ${
                  item.status === 'punta' ? 'bg-rose-500' : item.status === 'moderada' ? 'bg-amber-500' : 'bg-emerald-500'
                }`}
                style={{ width: `${item.pct}%` }}
              />
            </div>

            <p className="text-[10px] text-slate-600 mt-1.5 font-medium">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
