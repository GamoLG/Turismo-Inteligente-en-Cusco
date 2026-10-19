import React, { useState } from 'react';
import { 
  Smartphone, 
  Monitor, 
  ArrowLeft, 
  ShieldCheck, 
  LogOut, 
  Layers, 
  Compass,
  CheckCircle,
  ExternalLink,
  AlertTriangle,
  X
} from 'lucide-react';
import { AppScreen } from './types';
import { PhoneFrame } from './components/PhoneFrame';
import { CuscoSunLogo } from './components/CuscoSunLogo';
import { BottomNav } from './components/BottomNav';
import { LoginScreen } from './components/screens/LoginScreen';
import { MainMenuScreen } from './components/screens/MainMenuScreen';
import { AforoScreen } from './components/screens/AforoScreen';
import { RutasAlternasScreen } from './components/screens/RutasAlternasScreen';
import { MapaOficialScreen } from './components/screens/MapaOficialScreen';
import { MovilidadScreen } from './components/screens/MovilidadScreen';
import { DirceturScreen } from './components/screens/DirceturScreen';
import { BoletoDigitalScreen } from './components/screens/BoletoDigitalScreen';
import { PatrimonioScreen } from './components/screens/PatrimonioScreen';
import { HorasPuntaScreen } from './components/screens/HorasPuntaScreen';
import { PerfilScreen } from './components/screens/PerfilScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>('menu');
  const [isDeviceMode, setIsDeviceMode] = useState(true);
  const [userEmail, setUserEmail] = useState('turista.cusco@explora.pe');
  const [showAlertModal, setShowAlertModal] = useState(false);

  const handleLoginSuccess = (email?: string) => {
    if (email) setUserEmail(email);
    setCurrentScreen('menu');
  };

  const handleLogout = () => {
    setCurrentScreen('login');
  };

  const screenTitles: Record<AppScreen, string> = {
    login: 'Inicio de Sesión',
    menu: 'Menú Principal (9 Opciones)',
    aforo: 'Aforo en Vivo',
    rutas: 'Rutas Alternas',
    mapa: 'Mapa Oficial',
    movilidad: '¿Cómo Llegar?',
    dircetur: 'DIRCETUR Operadores',
    boleto: 'Tarifas y BTC',
    patrimonio: 'Patrimonio & Templos',
    sos: 'SOS Asistencia 24h',
    horas_punta: 'Horas Punta',
    perfil: 'Perfil del Turista'
  };

  const isMenu = currentScreen === 'menu';
  const isLogin = currentScreen === 'login';

  return (
    <div className="min-h-screen bg-[#0b101b] text-slate-100 flex flex-col font-sans selection:bg-sky-500 selection:text-white">
      {/* Top Application Control Toolbar */}
      <header className="sticky top-0 z-50 bg-[#0d1524]/95 backdrop-blur-md border-b border-slate-800/80 px-4 py-2.5 flex flex-wrap items-center justify-between gap-3">
        {/* Brand Lockup */}
        <div className="flex items-center gap-2.5">
          <CuscoSunLogo size="sm" showBackground={true} />
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-xs sm:text-sm tracking-tight text-white uppercase">
                TURISMO SEGURO CUSCO
              </span>
              <span className="hidden md:inline text-[10px] text-sky-400 font-semibold bg-sky-950/60 border border-sky-800/60 px-2 py-0.5 rounded-full">
                DIRCETUR · POLTUR
              </span>
            </div>
            <p className="text-[10px] text-slate-400 hidden sm:block">
              Gestión de Aforo, Movilidad y Protección Patrimonial
            </p>
          </div>
        </div>

        {/* Screen Quick Selector (To jump directly to any view) */}
        <div className="flex items-center gap-1 overflow-x-auto py-1 scrollbar-none max-w-full">
          <button
            onClick={() => setCurrentScreen('menu')}
            className={`px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap transition-all cursor-pointer shadow-sm ${
              currentScreen === 'menu'
                ? 'bg-sky-500 text-white ring-2 ring-sky-400/40'
                : 'bg-slate-800 text-sky-300 hover:bg-slate-700'
            }`}
          >
            ★ Menú (Foto 2)
          </button>

          <button
            onClick={() => setCurrentScreen('login')}
            className={`px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              currentScreen === 'login'
                ? 'bg-sky-600 text-white'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white'
            }`}
          >
            Login (Foto 1)
          </button>

          {(['aforo', 'rutas', 'mapa', 'movilidad', 'dircetur', 'boleto', 'patrimonio', 'sos', 'horas_punta', 'perfil'] as AppScreen[]).map((scr) => (
            <button
              key={scr}
              onClick={() => setCurrentScreen(scr)}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold whitespace-nowrap transition-all cursor-pointer ${
                currentScreen === scr
                  ? 'bg-sky-600 text-white'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {screenTitles[scr]}
            </button>
          ))}
        </div>

        {/* View Mode Toggle (Device Mockup vs Full Responsive) */}
        <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 p-1 rounded-xl shrink-0">
          <button
            onClick={() => setIsDeviceMode(true)}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
              isDeviceMode
                ? 'bg-slate-800 text-sky-400 font-semibold shadow-xs'
                : 'text-slate-400 hover:text-slate-200'
            }`}
            title="Ver en marco de smartphone (como en la imagen de referencia)"
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Marco Móvil</span>
          </button>

          <button
            onClick={() => setIsDeviceMode(false)}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
              !isDeviceMode
                ? 'bg-slate-800 text-sky-400 font-semibold shadow-xs'
                : 'text-slate-400 hover:text-slate-200'
            }`}
            title="Ver en modo responsivo continuo"
          >
            <Monitor className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Completa</span>
          </button>
        </div>
      </header>

      {/* Main Canvas Area */}
      <main className="flex-1 flex flex-col items-center justify-center p-2 sm:p-4 relative overflow-hidden">
        {/* Subtle background glow effect matching dark presentation */}
        <div className="absolute w-[500px] h-[500px] bg-sky-950/20 rounded-full blur-3xl pointer-events-none -top-20 -left-20" />
        <div className="absolute w-[400px] h-[400px] bg-amber-950/10 rounded-full blur-3xl pointer-events-none -bottom-20 -right-20" />

        <PhoneFrame isDeviceMode={isDeviceMode} darkStatusBar={isLogin}>
          {/* Inner Header for in-app screens other than login and menu */}
          {!isLogin && !isMenu && (
            <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-100 px-4 py-2.5 flex items-center justify-between">
              <button
                onClick={() => setCurrentScreen('menu')}
                className="flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Menú</span>
              </button>

              <div className="text-center">
                <span className="text-xs font-extrabold text-[#132238] uppercase tracking-tight block">
                  {screenTitles[currentScreen]}
                </span>
                <span className="text-[9.5px] text-slate-400 block -mt-0.5">
                  Turismo Seguro Cusco
                </span>
              </div>

              <button
                onClick={() => setCurrentScreen('perfil')}
                className="text-slate-500 hover:text-slate-700 p-1 rounded-lg hover:bg-slate-100 cursor-pointer"
                title="Ver Perfil"
              >
                <CuscoSunLogo size="sm" showBackground={true} className="w-6 h-6 rounded-md" />
              </button>
            </div>
          )}

          {/* Screen Content Routing */}
          <div className="flex-1 flex flex-col">
            {currentScreen === 'login' && (
              <LoginScreen onLoginSuccess={handleLoginSuccess} />
            )}

            {currentScreen === 'menu' && (
              <MainMenuScreen
                onNavigate={(scr) => setCurrentScreen(scr)}
                onOpenAlert={() => setShowAlertModal(true)}
              />
            )}

            {currentScreen === 'aforo' && (
              <AforoScreen onBack={() => setCurrentScreen('menu')} />
            )}

            {currentScreen === 'rutas' && (
              <RutasAlternasScreen onBack={() => setCurrentScreen('menu')} />
            )}

            {currentScreen === 'mapa' && (
              <MapaOficialScreen onBack={() => setCurrentScreen('menu')} />
            )}

            {currentScreen === 'movilidad' && (
              <MovilidadScreen onBack={() => setCurrentScreen('menu')} />
            )}

            {currentScreen === 'dircetur' && (
              <DirceturScreen onBack={() => setCurrentScreen('menu')} />
            )}

            {currentScreen === 'boleto' && (
              <BoletoDigitalScreen onBack={() => setCurrentScreen('menu')} />
            )}

            {currentScreen === 'patrimonio' && (
              <PatrimonioScreen onBack={() => setCurrentScreen('menu')} />
            )}

            {currentScreen === 'sos' && (
              <PatrimonioScreen onBack={() => setCurrentScreen('menu')} openSosDirectly={true} />
            )}

            {currentScreen === 'horas_punta' && (
              <HorasPuntaScreen onBack={() => setCurrentScreen('menu')} />
            )}

            {currentScreen === 'perfil' && (
              <PerfilScreen 
                userEmail={userEmail} 
                onLogout={handleLogout} 
                onBack={() => setCurrentScreen('menu')} 
              />
            )}
          </div>
        </PhoneFrame>

        {/* Alert Modal for Hatun Rumiyoc */}
        {showAlertModal && (
          <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-5 max-w-sm w-full text-slate-800 shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2 text-rose-600 font-extrabold text-sm">
                  <AlertTriangle className="w-5 h-5 shrink-0" />
                  <span>Alerta de Aforo C2: Hatun Rumiyoc</span>
                </div>
                <button
                  onClick={() => setShowAlertModal(false)}
                  className="p-1 rounded-full text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="mt-3 p-3 rounded-2xl bg-rose-50 border border-rose-200 text-xs">
                <div className="flex items-center justify-between font-bold text-rose-900 mb-1">
                  <span>Piedra de los 12 Ángulos</span>
                  <span className="px-2 py-0.5 rounded-full bg-rose-500 text-white text-[9.5px]">92% SATURADO</span>
                </div>
                <p className="text-[11px] text-rose-800 leading-relaxed">
                  Tránsito peatonal severamente ralentizado por aglomeración de visitantes fotográficos. Tiempo de espera en calle: ~20 minutos.
                </p>
              </div>

              <div className="mt-3 p-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs">
                <strong className="text-emerald-900 block font-bold mb-0.5">Desvío Rápido Recomendado:</strong>
                <p className="text-[11px] text-emerald-800">
                  Tome Calle San Agustín → Choquechaka para llegar a San Blas en 5 minutos de forma fluida.
                </p>
              </div>

              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => {
                    setShowAlertModal(false);
                    setCurrentScreen('rutas');
                  }}
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2.5 rounded-xl cursor-pointer transition-colors"
                >
                  Ver Rutas Alternas
                </button>
                <button
                  onClick={() => setShowAlertModal(false)}
                  className="px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs py-2.5 rounded-xl cursor-pointer transition-colors"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer info bar */}
      <footer className="py-2.5 px-4 bg-[#0a0e18] border-t border-slate-800/60 text-center text-xs text-slate-400 flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
        <span>© 2026 Plataforma Turista Digital · Municipalidad Provincial del Cusco</span>
        <span>•</span>
        <span>DIRCETUR Gobierno Regional Cusco</span>
        <span>•</span>
        <span>POLTUR Policía de Turismo</span>
      </footer>
    </div>
  );
}
