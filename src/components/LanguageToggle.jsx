import { useLanguage } from '../context/LanguageContext';

// Rendered as a normal flow element inside a flex row in Hero —
// no absolute/fixed positioning, so it never overlaps content.
export default function LanguageToggle() {
  const { lang, toggle } = useLanguage();
  const isTe = lang === 'te';

  return (
    <div className="flex items-center gap-1 bg-white/80 backdrop-blur-sm brutal-border brutal-shadow-sm rounded-full px-1 py-1">
      <button
        onClick={() => !isTe && toggle()}
        className={`px-3 py-1 text-sm font-bold rounded-full transition-all duration-150 ${
          isTe ? 'bg-[#1A1A1A] text-white' : 'text-[#888]'
        }`}
        aria-pressed={isTe}
        title="తెలుగులో చదవండి"
      >
        తె
      </button>
      <button
        onClick={() => isTe && toggle()}
        className={`px-3 py-1 text-sm font-bold rounded-full transition-all duration-150 ${
          !isTe ? 'bg-[#1A1A1A] text-white' : 'text-[#888]'
        }`}
        aria-pressed={!isTe}
        title="Read in English"
      >
        EN
      </button>
    </div>
  );
}
