import React from 'react';
import { Users, Car, ShieldAlert, Ticket, User } from 'lucide-react';
import { AppScreen } from '../types';

interface BottomNavProps {
  currentScreen: AppScreen;
  onSelectScreen: (screen: AppScreen) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentScreen, onSelectScreen }) => {
  const tabs: { id: AppScreen; label: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'aforo', label: 'Aforo', icon: Users },
    { id: 'movilidad', label: 'Movilidad', icon: Car },
    { id: 'patrimonio', label: 'Patrimonio', icon: ShieldAlert },
    { id: 'boleto', label: 'Boleto BTC', icon: Ticket },
    { id: 'perfil', label: 'Perfil', icon: User },
  ];

  return (
    <nav
      aria-label="Navegación principal"
      className="absolute bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 py-1.5 px-2 select-none"
    >
      <div className="grid grid-cols-5 items-center max-w-md mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = currentScreen === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => onSelectScreen(tab.id)}
              className={`min-h-[46px] flex flex-col items-center justify-center rounded-xl transition-all cursor-pointer ${
                isActive
                  ? 'text-[#1b2f4a] font-bold'
                  : 'text-slate-400 hover:text-slate-600 font-medium'
              }`}
            >
              <div className="relative">
                <Icon
                  className={`w-5 h-5 transition-transform duration-200 ${
                    isActive ? 'scale-110 stroke-[2.4]' : 'scale-100 stroke-[1.8]'
                  }`}
                />
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#0284c7]" />
                )}
              </div>
              <span className={`text-[10px] tracking-tight mt-1 transition-colors ${
                isActive ? 'text-[#1b2f4a]' : 'text-slate-500'
              }`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
