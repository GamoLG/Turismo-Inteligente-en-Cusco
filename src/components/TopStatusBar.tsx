import React from 'react';

interface TopStatusBarProps {
  darkText?: boolean;
}

export const TopStatusBar: React.FC<TopStatusBarProps> = ({ darkText = true }) => {
  const textColor = darkText ? 'text-slate-900' : 'text-white';

  return (
    <div className={`w-full px-7 pt-3 pb-1 flex items-center justify-between text-xs font-semibold select-none ${textColor} tracking-tight`}>
      {/* Time */}
      <span className="font-bold tracking-tight text-[13px]">10:42</span>

      {/* Network & Battery Icons matching Image 1 */}
      <div className="flex items-center gap-1.5">
        {/* Cellular Signal bars */}
        <svg className="w-3.5 h-3" viewBox="0 0 16 12" fill="currentColor">
          <rect x="0" y="9" width="2.5" height="3" rx="0.5" />
          <rect x="4.5" y="6" width="2.5" height="6" rx="0.5" />
          <rect x="9" y="3" width="2.5" height="9" rx="0.5" />
          <rect x="13.5" y="0" width="2.5" height="12" rx="0.5" />
        </svg>

        {/* 5G text */}
        <span className="text-[10px] font-extrabold tracking-tighter">5G</span>

        {/* Battery Icon */}
        <div className="flex items-center">
          <div className="w-5 h-2.5 rounded-[3px] border border-current p-[1px] flex items-center">
            <div className="h-full w-3/4 bg-current rounded-[1.5px]" />
          </div>
          <div className="w-[1.5px] h-1 bg-current rounded-r-[1px] ml-[0.5px]" />
        </div>
      </div>
    </div>
  );
};
