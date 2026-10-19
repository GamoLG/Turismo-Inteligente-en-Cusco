import React, { useState } from 'react';
import { 
  User, 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Heart, 
  Globe, 
  DownloadCloud, 
  LogOut, 
  Check, 
  Hotel,
  Languages,
  ArrowLeft
} from 'lucide-react';
import { CuscoSunLogo } from '../CuscoSunLogo';

interface PerfilScreenProps {
  userEmail: string;
  onLogout: () => void;
  onBack?: () => void;
}

export const PerfilScreen: React.FC<PerfilScreenProps> = ({ userEmail, onLogout, onBack }) => {
  const [offlineDownloaded, setOfflineDownloaded] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState<'es' | 'qu' | 'en'>('es');
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleToggleOffline = () => {
    setOfflineDownloaded(!offlineDownloaded);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2000);
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

      {/* Profile Header */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-sm mb-4">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-2xl bg-[#132238] flex items-center justify-center text-white shrink-0 shadow-md">
            <User className="w-7 h-7 text-amber-400" />
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <h2 className="font-extrabold text-base text-slate-900">Elena Martínez Rivera</h2>
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
            </div>
            <p className="text-xs text-slate-500">{userEmail}</p>
            <div className="flex items-center gap-2 mt-1 text-[11px] text-slate-600">
              <span className="font-mono bg-slate-100 px-1.5 py-0.5 rounded text-[10px] text-slate-700">
                PAS: ESP-882194
              </span>
              <span>· Nacionalidad: España</span>
            </div>
          </div>
        </div>

        {/* Accommodation in Cusco */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-start gap-2.5 text-xs text-slate-600">
          <Hotel className="w-4 h-4 text-[#0070ba] shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-slate-800 block text-xs">Alojamiento Registrado en Cusco:</span>
            <span>Hotel Palacio del Inka (Plazoleta Santo Domingo 259, Centro Histórico)</span>
          </div>
        </div>
      </div>

      {/* Altitude & Medical Safety Card */}
      <div className="bg-rose-50/60 rounded-2xl border border-rose-200/80 p-4 mb-4">
        <div className="flex items-center gap-2 text-rose-950 font-extrabold text-xs mb-2">
          <Heart className="w-4 h-4 text-rose-600" />
          <span>Ficha Preventiva para Mal de Altura (Soroche)</span>
        </div>
        <p className="text-[11px] text-rose-900 leading-relaxed mb-3">
          Cusco se ubica a 3,399 m.s.n.m. En caso de cefalea o fatiga extrema, acuda a las carpas de auxilio rápido en la Plaza de Armas o llame a SAMU 106.
        </p>

        <div className="grid grid-cols-2 gap-2 text-xs bg-white p-2.5 rounded-xl border border-rose-100">
          <div>
            <span className="text-[10px] text-slate-400 block font-semibold">SEGURO DE VIAJE</span>
            <span className="font-bold text-slate-800 text-[11px]">Assist Card Internacional</span>
          </div>
          <div>
            <span className="text-[10px] text-slate-400 block font-semibold">GRUPO SANGUÍNEO</span>
            <span className="font-bold text-slate-800 text-[11px]">O Positivo (O+)</span>
          </div>
        </div>
      </div>

      {/* Offline Mode Cache */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-sm mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-sky-50 text-sky-700">
              <DownloadCloud className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-xs text-slate-900">Mapas y Datos Sin Conexión</h3>
              <p className="text-[11px] text-slate-500">
                {offlineDownloaded ? 'Descargado (42 MB) · Listo para Valle Sagrado' : 'No descargado'}
              </p>
            </div>
          </div>

          <button
            onClick={handleToggleOffline}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold cursor-pointer transition-all ${
              offlineDownloaded
                ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {offlineDownloaded ? 'Activo ✓' : 'Descargar'}
          </button>
        </div>
      </div>

      {/* Language Selector */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-sm mb-4">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-800 mb-2">
          <Languages className="w-4 h-4 text-slate-600" />
          <span>Idioma de la Plataforma / Simi Akllana</span>
        </div>
        <div className="grid grid-cols-3 gap-1.5 text-xs">
          <button
            onClick={() => setSelectedLanguage('es')}
            className={`py-2 px-2 rounded-xl font-semibold border transition-all cursor-pointer ${
              selectedLanguage === 'es'
                ? 'bg-[#1b2f4a] text-white border-[#1b2f4a]'
                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
          >
            Español
          </button>
          <button
            onClick={() => setSelectedLanguage('qu')}
            className={`py-2 px-2 rounded-xl font-semibold border transition-all cursor-pointer ${
              selectedLanguage === 'qu'
                ? 'bg-[#1b2f4a] text-white border-[#1b2f4a]'
                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
          >
            Quechua (Qusqu)
          </button>
          <button
            onClick={() => setSelectedLanguage('en')}
            className={`py-2 px-2 rounded-xl font-semibold border transition-all cursor-pointer ${
              selectedLanguage === 'en'
                ? 'bg-[#1b2f4a] text-white border-[#1b2f4a]'
                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
          >
            English
          </button>
        </div>
      </div>

      {/* Logout Action */}
      <div className="pt-2">
        <button
          onClick={onLogout}
          className="w-full bg-slate-100 hover:bg-rose-50 hover:text-rose-700 hover:border-rose-200 text-slate-700 border border-slate-200 py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
        >
          <LogOut className="w-4 h-4" />
          <span>Cerrar Sesión / Cambiar Usuario</span>
        </button>
      </div>

      {/* Footer Institution Brand */}
      <footer className="mt-6 text-center select-none">
        <CuscoSunLogo size="sm" className="mx-auto mb-2 opacity-80" />
        <p className="text-[9px] font-bold tracking-widest text-slate-400 uppercase">
          DIRCETUR CUSCO · POLTUR · MUNICIPALIDAD PROVINCIAL
        </p>
      </footer>
    </div>
  );
};
