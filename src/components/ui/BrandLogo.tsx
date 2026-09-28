import React from 'react';

interface BrandLogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number;
}

export function BrandLogo({ className = 'w-10 h-10', size = 120, ...props }: BrandLogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={`shrink-0 select-none ${className}`}
      aria-label="Taste of Ethiopia Logo"
      role="img"
      {...props}
    >
      <defs>
        {/* Clip path for smooth rounded badge corners */}
        <clipPath id="badgeClip">
          <rect x="2" y="2" width="116" height="116" rx="20" ry="20" />
        </clipPath>
        
        {/* Subtle drop shadow filter for text contrast on yellow */}
        <filter id="textShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="1" stdDeviation="0.8" floodColor="#000000" floodOpacity="0.35" />
        </filter>
      </defs>

      {/* Main Badge Container with rounded clip */}
      <g clipPath="url(#badgeClip)">
        {/* Top Band: Ethiopian Highland Forest Green */}
        <rect x="0" y="0" width="120" height="40" fill="#1E6B38" />

        {/* Middle Band: Warm Golden Amber */}
        <rect x="0" y="40" width="120" height="40" fill="#D49B0E" />

        {/* Bottom Band: Authentic Berbere Crimson */}
        <rect x="0" y="80" width="120" height="40" fill="#8A2C18" />

        {/* Subtle divider hairlines between color bands */}
        <line x1="0" y1="40" x2="120" y2="40" stroke="#000000" strokeOpacity="0.1" strokeWidth="1" />
        <line x1="0" y1="80" x2="120" y2="80" stroke="#000000" strokeOpacity="0.1" strokeWidth="1" />

        {/* Text Layer: TASTE */}
        <text
          x="60"
          y="27"
          textAnchor="middle"
          fill="#FFFFFF"
          fontFamily="system-ui, -apple-system, 'Plus Jakarta Sans', sans-serif"
          fontWeight="900"
          fontSize="18"
          letterSpacing="2.5"
          filter="url(#textShadow)"
        >
          TASTE
        </text>

        {/* Text Layer: OF */}
        <text
          x="60"
          y="66"
          textAnchor="middle"
          fill="#FFFFFF"
          fontFamily="system-ui, -apple-system, 'Plus Jakarta Sans', sans-serif"
          fontWeight="900"
          fontSize="15"
          letterSpacing="3"
          filter="url(#textShadow)"
        >
          OF
        </text>

        {/* Text Layer: ETHIOPIA */}
        <text
          x="60"
          y="105"
          textAnchor="middle"
          fill="#FFFFFF"
          fontFamily="system-ui, -apple-system, 'Plus Jakarta Sans', sans-serif"
          fontWeight="900"
          fontSize="15"
          letterSpacing="1.8"
          filter="url(#textShadow)"
        >
          ETHIOPIA
        </text>
      </g>

      {/* Outer tactile hairline border */}
      <rect
        x="2"
        y="2"
        width="116"
        height="116"
        rx="20"
        ry="20"
        fill="none"
        stroke="#E2D9CC"
        strokeWidth="2"
        strokeOpacity="0.9"
      />
    </svg>
  );
}
