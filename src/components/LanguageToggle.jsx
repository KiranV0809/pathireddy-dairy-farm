import { useLanguage } from '../context/LanguageContext';

// Rendered inside Hero (which is position:relative) so this sits
// in the hero's top-right corner and scrolls away with the page —
// no fixed overlay blocking content in other sections.
export default function LanguageToggle() {
  const { lang, toggle } = useLanguage();
  const isTe = lang === 'te';

  return (
    <div className="absolute top-4 right-4 z-20">
      <div className="brutal-border flex overflow-hidden bg-black">
        {/* Telugu segment */}
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

        {/* Divider */}
        <div style={{ width: '2px', background: '#555' }} />

        {/* English segment */}
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
    </div>
  );
}
