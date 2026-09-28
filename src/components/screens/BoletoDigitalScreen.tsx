import React, { useState } from 'react';
import { 
  QrCode, 
  CheckCircle2, 
  Calendar, 
  MapPin, 
  ShieldCheck, 
  Ticket, 
  ExternalLink,
  Sparkles,
  ArrowLeft,
  Info
} from 'lucide-react';
import { INITIAL_USER_PASS, BTC_CIRCUITS } from '../../data/mockData';
import { TouristPass } from '../../types';

interface BoletoDigitalScreenProps {
  onBack?: () => void;
}

export const BoletoDigitalScreen: React.FC<BoletoDigitalScreenProps> = ({ onBack }) => {
  const [pass, setPass] = useState<TouristPass>(INITIAL_USER_PASS);
  const [selectedCircuit, setSelectedCircuit] = useState('circuito-1');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const toggleSiteVisited = (siteName: string) => {
    const isVisited = pass.visitedSites.includes(siteName.toLowerCase());
    let newVisited: string[];
    if (isVisited) {
      newVisited = pass.visitedSites.filter(s => s !== siteName.toLowerCase());
      setToastMessage(`Marcado como pendiente: ${siteName}`);
    } else {
      newVisited = [...pass.visitedSites, siteName.toLowerCase()];
      setToastMessage(`¡Visita registrada con éxito en ${siteName}!`);
    }

    setPass({
      ...pass,
      visitedSites: newVisited
    });

    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
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

      {/* Toast alert */}
      {toastMessage && (
        <div className="fixed top-12 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg border border-slate-700 animate-in fade-in slide-in-from-top duration-200">
          {toastMessage}
        </div>
      )}

      {/* Digital Pass Card */}
      <div className="bg-gradient-to-br from-[#132238] via-[#1b2f4a] to-[#25426d] rounded-3xl p-5 text-white shadow-xl relative overflow-hidden mb-4 border border-slate-700/50">
        {/* Decorative background watermark */}
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-4 translate-y-4">
          <Ticket className="w-48 h-48" />
        </div>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-[10px] font-extrabold uppercase tracking-wider border border-amber-400/30">
            <Sparkles className="w-3 h-3" />
            <span>COSITUC · DIRCETUR</span>
          </div>
          <span className="text-[10px] font-mono text-slate-300">Vigente</span>
        </div>

        <h3 className="text-lg font-black tracking-tight leading-tight">
          Boleto Turístico del Cusco (BTC)
        </h3>
        <p className="text-xs text-sky-200 mt-0.5">Boleto Integral Oficial · 16 Atractivos</p>

        {/* Tourist Pass Information */}
        <div className="mt-4 pt-3 border-t border-white/10 grid grid-cols-2 gap-2 text-xs">
          <div>
            <span className="text-[10px] text-slate-400 block uppercase font-medium">Titular</span>
            <strong className="text-white text-xs">{pass.holderName}</strong>
            <span className="text-[10px] text-slate-300 block">{pass.documentNumber}</span>
          </div>

          <div>
            <span className="text-[10px] text-slate-400 block uppercase font-medium">Vigencia</span>
            <strong className="text-amber-400 text-xs">{pass.remainingDays} Días Restantes</strong>
            <span className="text-[10px] text-slate-300 block">Hasta: {pass.expiryDate}</span>
          </div>
        </div>

        {/* Dynamic QR Code & Stamp */}
        <div className="mt-4 p-3 bg-white rounded-2xl flex items-center justify-between text-slate-900 shadow-inner">
          <div className="flex items-center gap-3">
            {/* Authentic SVG QR simulation */}
            <div className="w-16 h-16 bg-slate-900 p-1.5 rounded-xl flex items-center justify-center shrink-0">
              <QrCode className="w-full h-full text-white" />
            </div>

            <div>
              <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 block">
                CÓDIGO DE VALIDACIÓN
              </span>
              <span className="font-mono font-black text-xs text-[#132238] block tracking-wider">
                {pass.code}
              </span>
              <span className="text-[9px] text-emerald-600 font-semibold flex items-center gap-1 mt-0.5">
                <ShieldCheck className="w-3 h-3" />
                Sello Digital DIRCETUR
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Circuit Explorer */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-sm mb-4">
        <h3 className="font-extrabold text-sm text-slate-900 mb-1">Circuitos y Monumentos Incluidos</h3>
        <p className="text-xs text-slate-500 mb-3">
          Toque cualquier sitio para registrar o verificar su visita con el aforo del parque.
        </p>

        {/* Circuit Tabs */}
        <div className="flex gap-1.5 mb-3 overflow-x-auto pb-1">
          {BTC_CIRCUITS.map((circ) => (
            <button
              key={circ.id}
              onClick={() => setSelectedCircuit(circ.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCircuit === circ.id
                  ? 'bg-[#1b2f4a] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {circ.title.split(':')[0]} ({circ.validity})
            </button>
          ))}
        </div>

        {/* Sites in selected circuit */}
        {BTC_CIRCUITS.filter(c => c.id === selectedCircuit).map(circ => (
          <div key={circ.id} className="space-y-2">
            <span className="text-xs font-bold text-slate-700 block">{circ.title}</span>

            <div className="grid grid-cols-1 gap-1.5">
              {circ.sites.map((site, index) => {
                const visited = pass.visitedSites.includes(site.toLowerCase());
                return (
                  <div
                    key={index}
                    onClick={() => toggleSiteVisited(site)}
                    className={`p-2.5 rounded-xl border flex items-center justify-between transition-all cursor-pointer ${
                      visited
                        ? 'bg-emerald-50/70 border-emerald-200 text-emerald-900'
                        : 'bg-slate-50 hover:bg-slate-100/80 border-slate-200 text-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-2 text-xs font-semibold">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                        visited ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-600'
                      }`}>
                        {index + 1}
                      </span>
                      <span>{site}</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs">
                      {visited ? (
                        <span className="text-[11px] font-bold text-emerald-700 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Visitado</span>
                        </span>
                      ) : (
                        <span className="text-[11px] text-slate-400 hover:text-slate-600 font-medium">
                          Marcar Visita +
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Official COSITUC purchase info notice */}
      <div className="bg-sky-50 rounded-2xl border border-sky-200/80 p-3.5 text-xs text-sky-950 flex items-start gap-2.5">
        <Info className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
        <div>
          <strong className="block font-bold">Puntos Oficiales de Venta COSITUC:</strong>
          <p className="text-[11px] text-sky-900 mt-0.5 leading-relaxed">
            Oficina principal: Calle Maruri 340 (Galerías Turísticas), Lunes a Sábado de 08:00 a 18:00 hrs. También disponible en la puerta de Sacsayhuamán y Ollantaytambo. No compre boletos a revendedores en la calle.
          </p>
        </div>
      </div>
    </div>
  );
};
