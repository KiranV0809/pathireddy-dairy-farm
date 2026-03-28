import { useLanguage } from '../context/LanguageContext';

// Rendered as a normal flow element inside a flex row in Hero —
// no absolute/fixed positioning, so it never overlaps content.
export default function LanguageToggle() {
  const { lang, toggle } = useLanguage();
  const isTe = lang === 'te';

  return (
    <div className="brutal-border flex overflow-hidden bg-black">
      <button
        onClick={() => !isTe && toggle()}
        className={`px-3 py-1.5 text-sm font-black transition-colors duration-150 ${
          isTe ? 'bg-cream text-black' : 'bg-black text-cream/50'
        }`}
        aria-pressed={isTe}
        title="తెలుగులో చదవండి"
      >
        తె
      </button>
      <div style={{ width: '2px', background: '#555' }} />
      <button
        onClick={() => isTe && toggle()}
        className={`px-3 py-1.5 text-sm font-black transition-colors duration-150 ${
          !isTe ? 'bg-cream text-black' : 'bg-black text-cream/50'
        }`}
        aria-pressed={!isTe}
        title="Read in English"
      >
        EN
      </button>
    </div>
  );
}
