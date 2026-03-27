import { useLanguage } from '../context/LanguageContext';

export default function LanguageToggle() {
  const { lang, toggle } = useLanguage();

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={toggle}
        className="brutal-btn bg-black text-cream px-4 py-2 text-sm flex items-center gap-2"
        title={lang === 'en' ? 'తెలుగులో చదవండి' : 'Read in English'}
      >
        <span className="text-base">{lang === 'en' ? '🇮🇳' : '🇬🇧'}</span>
        <span className="font-black">{lang === 'en' ? 'తెలుగు' : 'English'}</span>
      </button>
    </div>
  );
}
