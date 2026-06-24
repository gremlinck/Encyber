interface EncyberLogoProps {
  size?: number
  darkBg?: boolean
}

export default function EncyberLogo({ size = 36, darkBg = false }: EncyberLogoProps) {
  const s = size / 36
  return (
    <svg
      width={size}
      height={Math.round(size * 1.15)}
      viewBox="0 0 36 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="ENCYBER logo symbol"
    >
      {/* Amber top node */}
      <circle cx="18" cy="1.5" r="2" fill="#E1873C" />
      {/* Amber mid-top connector */}
      <circle cx="13.5" cy="6.5" r="1.6" fill="#E1873C" />
      <circle cx="19.5" cy="8.5" r="2.5" fill="#E1873C" />
      <line x1="14.5" y1="7.2" x2="18.5" y2="9.2" stroke="#E1873C" strokeWidth="2.2" strokeLinecap="round" />
      {/* Red dot top-right */}
      <circle cx="23" cy="9.5" r="2" fill="#DC283C" />
      {/* Red wave top */}
      <path d="M10 15 Q13 12.5 16 15 Q19 17.5 22 15" stroke="#DC283C" strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* Side dots */}
      <circle cx="2" cy="20" r="2" fill="#DC283C" />
      <circle cx="34" cy="20" r="2" fill="#DC283C" />
      {/* Magenta center wave — the axis */}
      <path d="M6 20 Q9 17 12 20 Q15 23 18 20 Q21 17 24 20 Q27 23 30 20" stroke="#B4005A" strokeWidth="3.8" strokeLinecap="round" fill="none" />
      {/* Red wave bottom */}
      <path d="M10 25 Q13 27.5 16 25 Q19 22.5 22 25" stroke="#DC283C" strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* Red dot bottom */}
      <circle cx="15" cy="30" r="1.8" fill="#DC283C" />
      {/* Amber bottom connector */}
      <circle cx="21" cy="31" r="2.2" fill="#E1873C" />
      <line x1="16" y1="30.5" x2="20" y2="32" stroke="#E1873C" strokeWidth="2" strokeLinecap="round" />
      <circle cx="15.5" cy="35" r="1.5" fill="#E1873C" />
      {/* Amber bottom node */}
      <circle cx="18" cy="39.5" r="2" fill="#E1873C" />
    </svg>
  )
}
