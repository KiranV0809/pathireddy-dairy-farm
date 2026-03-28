export default function MilkTruck() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 82 56"
      width="64"
      height="64"
      className="truck-icon"
      aria-hidden="true"
    >
      {/* ── Cargo box ── */}
      <rect x="2" y="10" width="50" height="30" rx="3" fill="#EFF6FF" stroke="#000" strokeWidth="2.5" />

      {/* Milk bottle 1 */}
      <rect x="10" y="20" width="7" height="14" rx="2" fill="white" stroke="#000" strokeWidth="1.5" />
      <rect x="12" y="17" width="3" height="5" rx="1" fill="white" stroke="#000" strokeWidth="1.5" />
      <rect x="12" y="15" width="3" height="3" rx="1" fill="#60A5FA" stroke="#000" strokeWidth="1" />

      {/* Milk bottle 2 */}
      <rect x="21" y="20" width="7" height="14" rx="2" fill="white" stroke="#000" strokeWidth="1.5" />
      <rect x="23" y="17" width="3" height="5" rx="1" fill="white" stroke="#000" strokeWidth="1.5" />
      <rect x="23" y="15" width="3" height="3" rx="1" fill="#60A5FA" stroke="#000" strokeWidth="1" />

      {/* Milk carton */}
      <rect x="33" y="18" width="12" height="16" rx="1" fill="white" stroke="#000" strokeWidth="1.5" />
      <polygon points="33,18 45,18 43,14 35,14" fill="#60A5FA" stroke="#000" strokeWidth="1.5" strokeLinejoin="round" />
      <text x="39" y="29" textAnchor="middle" fontSize="4.5" fontWeight="800" fill="#1e40af" fontFamily="sans-serif">MILK</text>

      {/* ── Cab ── */}
      <rect x="52" y="17" width="26" height="23" rx="3" fill="#60A5FA" stroke="#000" strokeWidth="2.5" />

      {/* Windshield */}
      <rect x="55" y="20" width="18" height="13" rx="2" fill="white" stroke="#000" strokeWidth="1.5" />

      {/* Cute face — eyes */}
      <circle cx="61" cy="26" r="2.2" fill="#000" />
      <circle cx="69" cy="26" r="2.2" fill="#000" />
      <circle cx="61.8" cy="25.2" r="0.7" fill="white" />
      <circle cx="69.8" cy="25.2" r="0.7" fill="white" />

      {/* Smile */}
      <path d="M59 30 Q65 34 71 30" fill="none" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />

      {/* Headlight */}
      <rect x="77" y="28" width="3" height="5" rx="1" fill="#FDE68A" stroke="#000" strokeWidth="1" />

      {/* Bottom running board */}
      <rect x="6" y="38" width="70" height="3" rx="1" fill="#93C5FD" stroke="#000" strokeWidth="1" />

      {/* ── Wheels ── */}
      <circle cx="18" cy="46" r="8" fill="#1a1a1a" stroke="#000" strokeWidth="2" />
      <circle cx="18" cy="46" r="3.5" fill="#777" />
      <circle cx="18" cy="46" r="1.2" fill="#1a1a1a" />

      <circle cx="62" cy="46" r="8" fill="#1a1a1a" stroke="#000" strokeWidth="2" />
      <circle cx="62" cy="46" r="3.5" fill="#777" />
      <circle cx="62" cy="46" r="1.2" fill="#1a1a1a" />
    </svg>
  );
}
