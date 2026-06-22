import React from "react";

interface EnyberLogoProps {
  className?: string;
  size?: number | string;
}

export default function EnyberLogo({ className = "", size = 24 }: EnyberLogoProps) {
  // Orange: #E89D42, Red: #DC283C, Maroon: #B30046
  return (
    <svg
      viewBox="0 0 102 110"
      width={size}
      height={size}
      className={`select-none ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Dynamic Connector Lines */}
      {/* Top Diagnosis Diagonal Orange */}
      <line
        x1="46"
        y1="34"
        x2="56"
        y2="23.5"
        stroke="#E89D42"
        strokeWidth="8.2"
        strokeLinecap="round"
      />
      {/* Bottom Diagnosis Diagonal Orange */}
      <line
        x1="56"
        y1="76"
        x2="46"
        y2="86.5"
        stroke="#E89D42"
        strokeWidth="8.2"
        strokeLinecap="round"
      />

      {/* Row -1 (Red bar) */}
      <line
        x1="36"
        y1="44.5"
        x2="56"
        y2="44.5"
        stroke="#DC283C"
        strokeWidth="8.2"
        strokeLinecap="round"
      />

      {/* Row 0 (Maroon bar) */}
      <line
        x1="36"
        y1="55"
        x2="66"
        y2="55"
        stroke="#B30046"
        strokeWidth="8.2"
        strokeLinecap="round"
      />

      {/* Row 1 (Red bar) */}
      <line
        x1="46"
        y1="65.5"
        x2="66"
        y2="65.5"
        stroke="#DC283C"
        strokeWidth="8.2"
        strokeLinecap="round"
      />

      {/* Individual Node Circles to ensure crisp render and layer overlap */}
      {/* Orange Nodes */}
      <circle cx="56" cy="13" r="4.1" fill="#E89D42" />
      <circle cx="46" cy="23.5" r="4.1" fill="#E89D42" />
      <circle cx="56" cy="23.5" r="4.1" fill="#E89D42" />
      <circle cx="46" cy="34" r="4.1" fill="#E89D42" />

      {/* Red Nodes (Upper half) */}
      <circle cx="56" cy="34" r="4.1" fill="#DC283C" />
      <circle cx="36" cy="44.5" r="4.1" fill="#DC283C" />
      <circle cx="46" cy="44.5" r="4.1" fill="#DC283C" />
      <circle cx="56" cy="44.5" r="4.1" fill="#DC283C" />

      {/* Maroon Central Nodes */}
      <circle cx="16" cy="55" r="4.1" fill="#DC283C" /> {/* Isolated Left Red */}
      <circle cx="36" cy="55" r="4.1" fill="#B30046" />
      <circle cx="46" cy="55" r="4.1" fill="#B30046" />
      <circle cx="56" cy="55" r="4.1" fill="#B30046" />
      <circle cx="66" cy="55" r="4.1" fill="#B30046" />
      <circle cx="86" cy="55" r="4.1" fill="#DC283C" /> {/* Isolated Right Red */}

      {/* Red Nodes (Lower half) */}
      <circle cx="46" cy="65.5" r="4.1" fill="#DC283C" />
      <circle cx="56" cy="65.5" r="4.1" fill="#DC283C" />
      <circle cx="66" cy="65.5" r="4.1" fill="#DC283C" />
      <circle cx="46" cy="76" r="4.1" fill="#DC283C" />

      {/* Orange Nodes (Bottom) */}
      <circle cx="56" cy="76" r="4.1" fill="#E89D42" />
      <circle cx="46" cy="86.5" r="4.1" fill="#E89D42" />
      <circle cx="56" cy="86.5" r="4.1" fill="#E89D42" />
      <circle cx="46" cy="97" r="4.1" fill="#E89D42" />
    </svg>
  );
}
