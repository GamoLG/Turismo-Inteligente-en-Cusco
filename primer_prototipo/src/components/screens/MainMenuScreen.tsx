import React from 'react';
import { 
  User, 
  AlertTriangle, 
  Users, 
  Map, 
  MapPin, 
  ArrowLeftRight, 
  ShieldCheck, 
  Ticket, 
  Landmark, 
  LifeBuoy, 
  Clock, 
  Radio, 
  ChevronRight,
  Info
} from 'lucide-react';
import { AppScreen } from '../../types';

interface MainMenuScreenProps {
  onNavigate: (screen: AppScreen) => void;
  onOpenAlert: () => void;
}

export const MainMenuScreen: React.FC<MainMenuScreenProps> = ({ onNavigate, onOpenAlert }) => {
  return (
    <div className="flex flex-col min-h-full bg-[#f1f5f9] select-none pb-4">
      {/* Top Dark Navy Header (matching image.png) */}
      <div className="bg-[#101b2b] text-white pt-2 pb-3 px-4 shadow-md">
        {/* Row 1: Profile Avatar, System Title, + SOS Button */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            {/* User Profile Avatar with rounded square border */}
            <button
              onClick={() => onNavigate('perfil')}
              className="w-10 h-10 rounded-2xl bg-sky-950/70 border border-sky-400/30 flex items-center justify-center text-sky-300 hover:border-sky-400 hover:text-white transition-all cursor-pointer shadow-inner shrink-0"
              title="Ver Perfil del Turista"
            >
              <User className="w-5 h-5" />
            </button>

            {/* Title / Subtitle */}
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#38bdf8]">
                SISTEMA OFICIAL · TURISMO SEGURO
              </span>
              <h1 className="text-[15px] font-extrabold text-white tracking-tight leading-tight">
                Centro Histórico - Cusco
              </h1>
            </div>
          </div>

          {/* + SOS Pill Button */}
          <button
            onClick={() => onNavigate('sos')}
            className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#3b1219] hover:bg-[#521822] text-[#f87171] border border-[#f87171]/50 text-xs font-black tracking-wide shadow-sm hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <span>+ SOS</span>
          </button>
        </div>

        {/* Row 2: Warning Banner (matching image.png) */}
        <div
          onClick={onOpenAlert}
          className="mt-3 bg-[#19273c] hover:bg-[#20314b] rounded-xl px-3 py-2 flex items-center justify-between border-l-4 border-l-rose-500 border border-slate-700/50 shadow-inner cursor-pointer transition-colors"
        >
          <div className="flex items-center gap-2 text-xs font-semibold text-white truncate mr-2">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="truncate text-[11px] sm:text-xs">Alta afluencia en Hatun Rumiyoc</span>
          </div>

          <div className="px-2.5 py-0.5 rounded-full bg-[#ef4444] text-white text-[9.5px] font-black tracking-wider uppercase shadow-xs shrink-0">
            SATURADO
          </div>
        </div>
      </div>

      {/* Main 3x3 Grid of Menu Cards (matching image.png) */}
      <div className="p-3 sm:p-4 grid grid-cols-3 gap-2.5 flex-1">
        {/* Card 1: Aforo en Vivo */}
        <button
          onClick={() => onNavigate('aforo')}
          className="bg-white rounded-2xl p-2.5 sm:p-3 flex flex-col justify-between h-[124px] sm:h-[132px] border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-sky-300 transition-all cursor-pointer text-left group"
        >
          <div className="flex items-start justify-between w-full">
            <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center text-rose-500 group-hover:scale-110 transition-transform">
              <Users className="w-4 h-4" />
            </div>
            <span className="px-1.5 py-0.5 rounded-full bg-[#ef4444] text-white text-[8.5px] font-black tracking-tight leading-none">
              92% CRÍTICO
            </span>
          </div>

          <div className="mt-2">
            <h3 className="text-xs font-extrabold text-slate-900 group-hover:text-sky-700 leading-tight">
              Aforo en Vivo
            </h3>
            <p className="text-[10px] text-slate-400 font-medium leading-tight mt-0.5">
              Calles Incas
            </p>
          </div>
        </button>

        {/* Card 2: Rutas Alternas */}
        <button
          onClick={() => onNavigate('rutas')}
          className="bg-white rounded-2xl p-2.5 sm:p-3 flex flex-col justify-between h-[124px] sm:h-[132px] border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-emerald-300 transition-all cursor-pointer text-left group"
        >
          <div className="flex items-start justify-between w-full">
            <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
              <Map className="w-4 h-4" />
            </div>
            <span className="px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[8.5px] font-black tracking-tight leading-none">
              3 LIBRES
            </span>
          </div>

          <div className="mt-2">
            <h3 className="text-xs font-extrabold text-slate-900 group-hover:text-emerald-700 leading-tight">
              Rutas Alternas
            </h3>
            <p className="text-[10px] text-slate-400 font-medium leading-tight mt-0.5">
              Descongestión
            </p>
          </div>
        </button>

        {/* Card 3: Mapa Oficial */}
        <button
          onClick={() => onNavigate('mapa')}
          className="bg-white rounded-2xl p-2.5 sm:p-3 flex flex-col justify-between h-[124px] sm:h-[132px] border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-sky-300 transition-all cursor-pointer text-left group"
        >
          <div className="flex items-start justify-between w-full">
            <div className="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center text-sky-600 group-hover:scale-110 transition-transform">
              <MapPin className="w-4 h-4" />
            </div>
            <span className="px-1.5 py-0.5 rounded-full bg-sky-100 text-sky-800 text-[8.5px] font-black tracking-tight leading-none">
              GPS ACTIVO
            </span>
          </div>

          <div className="mt-2">
            <h3 className="text-xs font-extrabold text-slate-900 group-hover:text-sky-700 leading-tight">
              Mapa Oficial
            </h3>
            <p className="text-[10px] text-slate-400 font-medium leading-tight mt-0.5">
              Zonificación
            </p>
          </div>
        </button>

        {/* Card 4: ¿Cómo Llegar? */}
        <button
          onClick={() => onNavigate('movilidad')}
          className="bg-white rounded-2xl p-2.5 sm:p-3 flex flex-col justify-between h-[124px] sm:h-[132px] border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-slate-400 transition-all cursor-pointer text-left group"
        >
          <div className="flex items-start justify-between w-full">
            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 group-hover:scale-110 transition-transform">
              <ArrowLeftRight className="w-4 h-4" />
            </div>
            <span className="px-1.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[8.5px] font-black tracking-tight leading-none">
              AUTORIZADO
            </span>
          </div>

          <div className="mt-2">
            <h3 className="text-xs font-extrabold text-slate-900 group-hover:text-[#1b2f4a] leading-tight">
              ¿Cómo Llegar?
            </h3>
            <p className="text-[10px] text-slate-400 font-medium leading-tight mt-0.5">
              Paraderos Seguros
            </p>
          </div>
        </button>

        {/* Card 5: DIRCETUR */}
        <button
          onClick={() => onNavigate('dircetur')}
          className="bg-white rounded-2xl p-2.5 sm:p-3 flex flex-col justify-between h-[124px] sm:h-[132px] border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-sky-300 transition-all cursor-pointer text-left group"
        >
          <div className="flex items-start justify-between w-full">
            <div className="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center text-[#0070ba] group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <span className="px-1.5 py-0.5 rounded-full bg-sky-100 text-[#0070ba] text-[8.5px] font-black tracking-tight leading-none">
              VALIDADOS
            </span>
          </div>

          <div className="mt-2">
            <h3 className="text-xs font-extrabold text-slate-900 group-hover:text-[#0070ba] leading-tight">
              DIRCETUR
            </h3>
            <p className="text-[10px] text-slate-400 font-medium leading-tight mt-0.5">
              Operadores
            </p>
          </div>
        </button>

        {/* Card 6: Tarifas y BTC */}
        <button
          onClick={() => onNavigate('boleto')}
          className="bg-white rounded-2xl p-2.5 sm:p-3 flex flex-col justify-between h-[124px] sm:h-[132px] border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-amber-300 transition-all cursor-pointer text-left group"
        >
          <div className="flex items-start justify-between w-full">
            <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 group-hover:scale-110 transition-transform">
              <Ticket className="w-4 h-4" />
            </div>
            <span className="px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[8.5px] font-black tracking-tight leading-none">
              OFICIAL
            </span>
          </div>

          <div className="mt-2">
            <h3 className="text-xs font-extrabold text-slate-900 group-hover:text-amber-800 leading-tight">
              Tarifas y BTC
            </h3>
            <p className="text-[10px] text-slate-400 font-medium leading-tight mt-0.5">
              Circuitos I, II, III
            </p>
          </div>
        </button>

        {/* Card 7: Patrimonio */}
        <button
          onClick={() => onNavigate('patrimonio')}
          className="bg-white rounded-2xl p-2.5 sm:p-3 flex flex-col justify-between h-[124px] sm:h-[132px] border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-slate-400 transition-all cursor-pointer text-left group"
        >
          <div className="flex items-start justify-between w-full">
            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 group-hover:scale-110 transition-transform">
              <Landmark className="w-4 h-4" />
            </div>
            <span className="px-1.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[8.5px] font-black tracking-tight leading-none">
              INCA
            </span>
          </div>

          <div className="mt-2">
            <h3 className="text-xs font-extrabold text-slate-900 group-hover:text-slate-800 leading-tight">
              Patrimonio
            </h3>
            <p className="text-[10px] text-slate-400 font-medium leading-tight mt-0.5">
              Muros y Templos
            </p>
          </div>
        </button>

        {/* Card 8: SOS Turismo (red accent outline matching image.png) */}
        <button
          onClick={() => onNavigate('sos')}
          className="bg-white rounded-2xl p-2.5 sm:p-3 flex flex-col justify-between h-[124px] sm:h-[132px] border-2 border-rose-300 shadow-xs hover:shadow-md hover:border-rose-500 transition-all cursor-pointer text-left group ring-2 ring-rose-100/50"
        >
          <div className="flex items-start justify-between w-full">
            <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center text-rose-600 group-hover:scale-110 transition-transform">
              <LifeBuoy className="w-4 h-4" />
            </div>
            <span className="px-1.5 py-0.5 rounded-full bg-[#ef4444] text-white text-[8.5px] font-black tracking-tight leading-none">
              24H
            </span>
          </div>

          <div className="mt-2">
            <h3 className="text-xs font-extrabold text-rose-600 group-hover:text-rose-700 leading-tight">
              SOS Turismo
            </h3>
            <p className="text-[10px] text-slate-400 font-medium leading-tight mt-0.5">
              Asistencia Rápida
            </p>
          </div>
        </button>

        {/* Card 9: Horas Punta */}
        <button
          onClick={() => onNavigate('horas_punta')}
          className="bg-white rounded-2xl p-2.5 sm:p-3 flex flex-col justify-between h-[124px] sm:h-[132px] border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-sky-300 transition-all cursor-pointer text-left group"
        >
          <div className="flex items-start justify-between w-full">
            <div className="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center text-sky-600 group-hover:scale-110 transition-transform">
              <Clock className="w-4 h-4" />
            </div>
            <span className="px-1.5 py-0.5 rounded-full bg-sky-100 text-sky-800 text-[8.5px] font-black tracking-tight leading-none">
              HOY
            </span>
          </div>

          <div className="mt-2">
            <h3 className="text-xs font-extrabold text-slate-900 group-hover:text-sky-700 leading-tight">
              Horas Punta
            </h3>
            <p className="text-[10px] text-slate-400 font-medium leading-tight mt-0.5">
              Predicción Diaria
            </p>
          </div>
        </button>
      </div>

      {/* Bottom Sensor Bar (matching image.png) */}
      <div className="px-3 sm:px-4 mt-auto">
        <div className="bg-[#e2eaf5] border border-sky-200/70 rounded-2xl py-2.5 px-3.5 flex items-center justify-between shadow-2xs">
          <div className="flex items-center gap-2 text-slate-700 text-xs font-bold">
            <div className="w-4 h-4 rounded-full border border-sky-600 flex items-center justify-center text-sky-700 shrink-0">
              <Info className="w-2.5 h-2.5" />
            </div>
            <span className="text-[11px] sm:text-xs text-slate-800">Centro de Monitoreo C2 Cusco</span>
          </div>

          <div className="text-[10.5px] font-black text-[#0284c7] tracking-wider uppercase">
            SENSORES OPERATIVOS
          </div>
        </div>
      </div>
    </div>
  );
};
