import React from 'react';

interface GigspaceLogoProps {
  variant?: 'full' | 'horizontal' | 'icon' | 'appIcon' | 'hero' | 'simple';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'hero';
  theme?: 'dark' | 'light' | 'color';
  showTagline?: boolean;
  className?: string;
}

export const GigspaceEmblem: React.FC<{ size?: number; className?: string; glow?: boolean }> = ({
  size = 64,
  className = '',
  glow = false,
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Ambient background glow if enabled */}
      {glow && (
        <div
          className="absolute inset-0 rounded-full blur-xl opacity-60 animate-pulse-slow pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(255,91,61,0.6) 0%, rgba(255,198,46,0.4) 40%, rgba(24,183,200,0.3) 70%, transparent 100%)',
          }}
        />
      )}

      <svg
        viewBox="0 0 200 200"
        className="w-full h-full drop-shadow-md transition-transform duration-300 hover:scale-105"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Main outer ring gradient: Red-Orange -> Warm Yellow -> Cyan -> Teal -> Hint of Purple */}
          <linearGradient id="gigRingGrad" x1="15%" y1="10%" x2="85%" y2="90%">
            <stop offset="0%" stopColor="#FF3820" />
            <stop offset="25%" stopColor="#FF5B3D" />
            <stop offset="50%" stopColor="#FFC62E" />
            <stop offset="75%" stopColor="#18B7C8" />
            <stop offset="90%" stopColor="#0B98A8" />
            <stop offset="100%" stopColor="#7E5CE3" />
          </linearGradient>

          {/* Secondary sweep for organic color flow */}
          <linearGradient id="gigInnerSweep" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0F97A6" />
            <stop offset="35%" stopColor="#18B7C8" />
            <stop offset="65%" stopColor="#FFC62E" />
            <stop offset="100%" stopColor="#FF5B3D" />
          </linearGradient>

          {/* Stylized 'G' gradient */}
          <linearGradient id="gigLetterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF3B26" />
            <stop offset="50%" stopColor="#FF5B3D" />
            <stop offset="100%" stopColor="#FFB800" />
          </linearGradient>

          {/* Soft 3D lighting gradient */}
          <radialGradient id="gigHighlight" cx="35%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
            <stop offset="60%" stopColor="#FFFFFF" stopOpacity="0" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.3" />
          </radialGradient>

          {/* Bevel drop shadow filter */}
          <filter id="gigShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="4" floodOpacity="0.35" floodColor="#000000" />
          </filter>
        </defs>

        {/* Outer Organic Scalloped / Sunburst Shape */}
        {/* 10-petal organic curve with smooth sinusoidal contours matching the official GIGSPACE logo */}
        <path
          d="M 100,10 
             C 118,10 125,28 139,23 
             C 153,18 162,35 174,45 
             C 186,55 186,72 192,87 
             C 198,102 186,117 186,133 
             C 186,149 171,159 160,172 
             C 149,185 132,185 117,192 
             C 102,199 88,187 72,189 
             C 56,191 44,177 34,166 
             C 24,155 12,142 10,126 
             C 8,110 21,97 19,81 
             C 17,65 29,51 39,40 
             C 49,29 60,18 76,14 
             C 92,10 82,10 100,10 Z"
          fill="url(#gigRingGrad)"
          stroke="url(#gigInnerSweep)"
          strokeWidth="3"
          filter="url(#gigShadow)"
        />

        {/* 3D Highlight sheen on the organic ring */}
        <path
          d="M 100,10 
             C 118,10 125,28 139,23 
             C 153,18 162,35 174,45 
             C 186,55 186,72 192,87 
             C 198,102 186,117 186,133 
             C 186,149 171,159 160,172 
             C 149,185 132,185 117,192 
             C 102,199 88,187 72,189 
             C 56,191 44,177 34,166 
             C 24,155 12,142 10,126 
             C 8,110 21,97 19,81 
             C 17,65 29,51 39,40 
             C 49,29 60,18 76,14 
             C 92,10 82,10 100,10 Z"
          fill="url(#gigHighlight)"
          opacity="0.5"
        />

        {/* Inner white circular cutout creating the iconic badge ring */}
        <circle cx="100" cy="100" r="62" fill="#FFFFFF" />
        
        {/* Inner soft bevel gradient for depth */}
        <circle cx="100" cy="100" r="62" fill="url(#gigHighlight)" opacity="0.15" />

        {/* Large stylized 'G' letterform with precision geometric curves matching the GIGSPACE mark */}
        <g filter="url(#gigShadow)">
          <path
            d="M 134,70 
               C 126,56 114,48 98,48 
               C 70,48 50,70 50,100 
               C 50,130 70,152 99,152 
               C 124,152 141,135 144,111 
               L 98,111 
               L 98,92 
               L 165,92 
               C 166,97 166,103 166,109 
               C 166,145 138,172 98,172 
               C 56,172 28,141 28,100 
               C 28,59 58,28 99,28 
               C 124,28 143,39 155,57 
               L 134,70 Z"
            fill="url(#gigLetterGrad)"
          />
        </g>
      </svg>
    </div>
  );
};

export const GigspaceLogo: React.FC<GigspaceLogoProps> = ({
  variant = 'horizontal',
  size = 'md',
  theme = 'dark',
  showTagline = true,
  className = '',
}) => {
  // Size mapping
  const sizeConfig = {
    xs: { emblem: 28, text: 'text-base', subText: 'text-[9px]', tracking: 'tracking-widest' },
    sm: { emblem: 36, text: 'text-lg', subText: 'text-[10px]', tracking: 'tracking-widest' },
    md: { emblem: 48, text: 'text-2xl', subText: 'text-xs', tracking: 'tracking-[0.25em]' },
    lg: { emblem: 64, text: 'text-3xl', subText: 'text-sm', tracking: 'tracking-[0.25em]' },
    xl: { emblem: 96, text: 'text-4xl md:text-5xl', subText: 'text-sm md:text-base', tracking: 'tracking-[0.3em]' },
    '2xl': { emblem: 140, text: 'text-5xl md:text-6xl', subText: 'text-base md:text-lg', tracking: 'tracking-[0.35em]' },
    hero: { emblem: 180, text: 'text-5xl md:text-7xl', subText: 'text-sm md:text-lg', tracking: 'tracking-[0.35em]' },
  }[size];

  const textColor = theme === 'light' ? 'text-[#11151B]' : 'text-white';
  const taglineColor = theme === 'light' ? 'text-slate-600' : 'text-slate-300';

  if (variant === 'icon') {
    return <GigspaceEmblem size={sizeConfig.emblem} className={className} glow={size === 'hero' || size === 'xl'} />;
  }

  if (variant === 'appIcon') {
    return (
      <div
        className={`relative rounded-2xl flex items-center justify-center p-3 shadow-xl ${
          theme === 'light'
            ? 'bg-white border border-slate-200 shadow-slate-200/80'
            : theme === 'simple'
            ? 'bg-gig-gradient shadow-orange-500/20'
            : 'bg-[#181E26] border border-slate-700/60 shadow-black/60'
        } ${className}`}
        style={{ width: sizeConfig.emblem * 1.35, height: sizeConfig.emblem * 1.35 }}
      >
        <GigspaceEmblem size={sizeConfig.emblem} />
      </div>
    );
  }

  if (variant === 'hero' || variant === 'full') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <GigspaceEmblem
          size={sizeConfig.emblem}
          className="mb-4 transform transition-transform duration-500 hover:scale-105"
          glow
        />
        <div className="flex flex-col items-center">
          <h1
            className={`font-black font-heading ${sizeConfig.text} ${textColor} tracking-tight uppercase leading-none`}
            style={{ textShadow: theme === 'dark' ? '0 4px 16px rgba(0,0,0,0.8)' : '0 2px 8px rgba(0,0,0,0.1)' }}
          >
            GIGSPACE
          </h1>

          {showTagline && (
            <div className={`flex items-center gap-2 mt-2 font-bold uppercase ${sizeConfig.subText} ${sizeConfig.tracking} ${taglineColor}`}>
              <span className="hover:text-[#FF5B3D] transition-colors">CREATE</span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#FF5B3D]" />
              <span className="hover:text-[#FFC62E] transition-colors">DESIGN</span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#FFC62E]" />
              <span className="hover:text-[#18B7C8] transition-colors">INSPIRE</span>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Default: Horizontal Lockup (Navbar, Footer, Headers)
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <GigspaceEmblem size={sizeConfig.emblem} />
      <div className="flex flex-col justify-center">
        <span className={`font-black font-heading ${sizeConfig.text} ${textColor} tracking-tight leading-none`}>
          GIGSPACE
        </span>
        {showTagline && (
          <div className={`flex items-center gap-1.5 mt-1 font-bold uppercase ${sizeConfig.subText} ${sizeConfig.tracking} ${taglineColor}`}>
            <span>CREATE</span>
            <span className="w-1 h-1 rounded-full bg-[#FF5B3D]" />
            <span>DESIGN</span>
            <span className="w-1 h-1 rounded-full bg-[#FFC62E]" />
            <span>INSPIRE</span>
          </div>
        )}
      </div>
    </div>
  );
};
