import React from 'react';

interface CuscoSunLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showBackground?: boolean;
}

export const CuscoSunLogo: React.FC<CuscoSunLogoProps> = ({
  size = 'md',
  className = '',
  showBackground = true
}) => {
  const sizeMap = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20'
  };

  const iconSizes = {
    sm: 24,
    md: 32,
    lg: 40,
    xl: 48
  };

  const currentIconSize = iconSizes[size];

  const svgContent = (
    <svg
      width={currentIconSize}
      height={currentIconSize}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-amber-400 drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
    >
      {/* Central 8-pointed Incan Solar Star */}
      <path
        d="M50 18 L57 39 L78 32 L67 50 L78 68 L57 61 L50 82 L43 61 L22 68 L33 50 L22 32 L43 39 Z"
        fill="#FACC15"
      />
      {/* Inner Central Diamond / Inti core */}
      <polygon
        points="50,34 62,50 50,66 38,50"
        fill="#CA8A04"
      />
      <circle cx="50" cy="50" r="5" fill="#FEF08A" />

      {/* 8 Radiant Solar Corona Orbs / Dots */}
      {/* Top, Bottom, Left, Right */}
      <circle cx="50" cy="7" r="4.2" fill="#FACC15" />
      <circle cx="50" cy="93" r="4.2" fill="#FACC15" />
      <circle cx="7" cy="50" r="4.2" fill="#FACC15" />
      <circle cx="93" cy="50" r="4.2" fill="#FACC15" />

      {/* Diagonal Orbs */}
      <circle cx="20" cy="20" r="4.2" fill="#FACC15" />
      <circle cx="80" cy="20" r="4.2" fill="#FACC15" />
      <circle cx="20" cy="80" r="4.2" fill="#FACC15" />
      <circle cx="80" cy="80" r="4.2" fill="#FACC15" />
    </svg>
  );

  if (!showBackground) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        {svgContent}
      </div>
    );
  }

  return (
    <div
      className={`${sizeMap[size]} rounded-2xl bg-[#132238] border border-slate-700/40 flex items-center justify-center shadow-lg shadow-slate-950/20 group select-none ${className}`}
    >
      {svgContent}
    </div>
  );
};
