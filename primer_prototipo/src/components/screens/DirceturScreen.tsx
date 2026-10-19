import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ShieldCheck, 
  Search, 
  Award, 
  CheckCircle, 
  Phone, 
  ExternalLink,
  QrCode,
  Building2
} from 'lucide-react';

interface DirceturScreenProps {
  onBack: () => void;
}

export const DirceturScreen: React.FC<DirceturScreenProps> = ({ onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const operators = [
    {
      id: 'op-1',
      name: 'Explora Cusco Expediciones',
      type: 'Agencia de Viajes y Turismo Minorista',
      dirceturCode: 'DIR-CUS-2026-4412',
      license: 'Vigente hasta 2027',
      address: 'Portal de Carnicerías 238, Int. 3',
      phone: '(084) 240182',
      verified: true
    },
    {
      id: 'op-2',
      name: 'Inka Trail Adventures SAC',
      type: 'Operador de Camino Inca y Salkantay',
      dirceturCode: 'DIR-CUS-2026-1089',
      license: 'Vigente hasta 2026',
      address: 'Calle Santa Teresa 316',
      phone: '(084) 228910',
      verified: true
    },
    {
      id: 'op-3',
      name: 'Asociación de Guías Oficiales (COLITUR)',
      type: 'Colegio de Licenciados en Turismo Cusco',
      dirceturCode: 'COLITUR-REG-081',
      license: 'Acreditación Oficial Activa',
      address: 'Av. Huascar 224',
      phone: '(084) 231140',
      verified: true
    }
  ];

  const filtered = operators.filter(o => 
    o.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    o.dirceturCode.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          <h2 className="text-base font-extrabold text-slate-900">DIRCETUR Operadores Validados</h2>
          <p className="text-[11px] text-slate-500">Registro Nacional de Prestadores Turísticos Calificados</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative mb-3">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar agencia, guía o código DIRCETUR..."
          className="w-full bg-white border border-slate-200 rounded-xl py-2 pl-9 pr-3 text-xs outline-none focus:border-[#0070ba] shadow-2xs"
        />
        <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
      </div>

      {/* Operators List */}
      <div className="space-y-3">
        {filtered.map((op) => (
          <div key={op.id} className="bg-white rounded-2xl border border-slate-200 p-3.5 shadow-2xs">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[9.5px] font-mono font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-200">
                  {op.dirceturCode}
                </span>
                <h3 className="text-xs font-bold text-slate-900 mt-1">{op.name}</h3>
                <p className="text-[10px] text-slate-500">{op.type}</p>
              </div>

              <div className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full text-[10px] font-bold border border-emerald-200 shrink-0">
                <CheckCircle className="w-3 h-3" />
                <span>Validado</span>
              </div>
            </div>

            <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-600">
              <span>{op.address}</span>
              <span className="font-semibold text-slate-800">{op.phone}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Warning Anti-Piracy */}
      <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-2xl text-xs text-amber-900">
        <strong className="block font-bold">Consejo de Protección al Consumidor:</strong>
        <p className="text-[11px] text-amber-800 mt-0.5">
          Nunca contrate excursiones en la vía pública con &quot;jaladores&quot; no identificados. Verifique siempre el código QR en la credencial del guía emitida por DIRCETUR.
        </p>
      </div>
    </div>
  );
};
