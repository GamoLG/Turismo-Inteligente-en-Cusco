import React from 'react';
import { TopStatusBar } from './TopStatusBar';

interface PhoneFrameProps {
  children: React.ReactNode;
  isDeviceMode: boolean;
  darkStatusBar?: boolean;
}

export const PhoneFrame: React.FC<PhoneFrameProps> = ({
  children,
  isDeviceMode,
  darkStatusBar = true,
}) => {
  if (!isDeviceMode) {
    // Responsive view without phone bezel
    return (
      <div className="w-full min-h-screen bg-slate-100 flex justify-center">
        <div className="w-full max-w-md min-h-screen bg-white shadow-xl relative flex flex-col">
          {/* Virtual Mobile Status Bar */}
          <TopStatusBar darkText={darkStatusBar} />
          <div className="flex-1 overflow-y-auto">{children}</div>
        </div>
      </div>
    );
  }

  // Device Mockup View (faithfully replicating Image 1)
  return (
    <div className="flex items-center justify-center py-6 px-2 sm:px-4">
      {/* Smartphone Chassis */}
      <div className="relative w-full max-w-[395px] h-[815px] max-h-[94vh] bg-white rounded-[50px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7),0_0_0_12px_#182335,0_0_0_14px_#273750] flex flex-col overflow-hidden border border-slate-700/20">
        {/* Dynamic Island / Speaker cutout */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-4 bg-[#182335] rounded-full z-50 pointer-events-none flex items-center justify-center">
          <div className="w-12 h-1 bg-slate-600 rounded-full mr-2 opacity-40" />
          <div className="w-2.5 h-2.5 bg-slate-700 rounded-full opacity-60" />
        </div>

        {/* Top Status Bar (Image 1 replica: 10:42, 5G, Battery) */}
        <div className={`pt-2 z-40 shrink-0 transition-colors ${darkStatusBar ? 'bg-white' : 'bg-[#101b2b]'}`}>
          <TopStatusBar darkText={darkStatusBar} />
        </div>

        {/* Inner Scrollable Screen Content */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden relative bg-white scrollbar-none flex flex-col">
          {children}
        </div>

        {/* iPhone home indicator bar */}
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1 bg-slate-300 rounded-full z-50 pointer-events-none opacity-80" />
      </div>
    </div>
  );
};
