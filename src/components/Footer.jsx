import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-black text-cream brutal-border px-4 py-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <p className="text-lg font-black">🐄 Pathireddy Dairy Farm</p>
          <p className="text-sm font-medium text-cream/60 mt-1">{t.footer.tagline}</p>
        </div>
        <div className="text-center md:text-right">
          <p className="text-sm font-bold text-cream/60">📞 8096459872</p>
          <p className="text-xs font-medium text-cream/40 mt-1">
            © {new Date().getFullYear()} Pathireddy Dairy Farm. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
