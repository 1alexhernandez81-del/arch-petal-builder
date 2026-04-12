export const PrimaryWordmark = ({ className = "", fill = "#1A1A1A" }: { className?: string; fill?: string }) => (
  <svg viewBox="0 0 600 80" xmlns="http://www.w3.org/2000/svg" className={className}>
    <text x="300" y="48" textAnchor="middle" fontFamily="'Cormorant Garamond', Georgia, serif" fontSize="44" fontWeight="400" letterSpacing="8" fill={fill}>ARCH  &amp;  PETAL</text>
    <text x="300" y="74" textAnchor="middle" fontFamily="'Cormorant Garamond', Georgia, serif" fontSize="15" fontWeight="300" letterSpacing="12" fill={fill}>CO.</text>
  </svg>
);

export const TaglineWordmark = ({ className = "", fill = "#1A1A1A" }: { className?: string; fill?: string }) => (
  <svg viewBox="0 0 600 115" xmlns="http://www.w3.org/2000/svg" className={className}>
    <text x="300" y="42" textAnchor="middle" fontFamily="'Cormorant Garamond', Georgia, serif" fontSize="44" fontWeight="400" letterSpacing="8" fill={fill}>ARCH  &amp;  PETAL</text>
    <text x="300" y="66" textAnchor="middle" fontFamily="'Cormorant Garamond', Georgia, serif" fontSize="15" fontWeight="300" letterSpacing="12" fill={fill}>CO.</text>
    <line x1="150" y1="82" x2="450" y2="82" stroke={fill} strokeWidth="0.4" opacity="0.3"/>
    <text x="300" y="102" textAnchor="middle" fontFamily="'Raleway', sans-serif" fontSize="10.5" fontWeight="200" letterSpacing="4" fill={fill} opacity="0.65">BEAUTIFUL BACKDROPS FOR UNFORGETTABLE EVENTS</text>
  </svg>
);

export const CircleMonogram = ({ className = "", fill = "#1A1A1A" }: { className?: string; fill?: string }) => (
  <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="60" cy="60" r="55" fill="none" stroke={fill} strokeWidth="0.8"/>
    <text x="60" y="57" textAnchor="middle" fontFamily="'Cormorant Garamond', Georgia, serif" fontSize="28" fontWeight="400" letterSpacing="3" fill={fill}>A&amp;P</text>
    <text x="60" y="77" textAnchor="middle" fontFamily="'Cormorant Garamond', Georgia, serif" fontSize="10" fontWeight="300" letterSpacing="6" fill={fill}>CO.</text>
  </svg>
);
