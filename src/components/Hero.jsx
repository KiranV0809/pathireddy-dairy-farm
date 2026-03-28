import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  const h = t.hero;
  const phone = '8096459872';
  const whatsappMsg = encodeURIComponent('Hello! I would like to order milk from Pathireddy Dairy Farm.');

  return (
    <section className="bg-neo px-4 py-12 md:py-24 brutal-border border-b-0 relative overflow-hidden">
      {/* Background dot pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)',
          backgroundSize: '12px 12px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-block bg-cream brutal-border brutal-shadow-sm px-4 py-1.5 mb-8 text-sm font-bold uppercase tracking-widest">
          {h.badge}
        </div>

        {/* Cow row — capped at 5 on mobile, 10 on desktop */}
        <div className="mb-8 md:mb-10">
          <div className="flex justify-center gap-1 md:gap-2 text-3xl md:text-4xl">
            {Array.from({ length: 10 }).map((_, i) => (
              <span
                key={i}
                className={`animate-bounce ${i >= 5 ? 'hidden md:inline' : ''}`}
                style={{ animationDelay: `${i * 0.1}s`, animationDuration: '2s' }}
              >
                🐄
              </span>
            ))}
          </div>
        </div>

        {/* Heading — leading-snug gives proper Telugu glyph breathing room */}
        <h1 className="text-5xl md:text-7xl font-black leading-snug mb-6 text-black">
          {h.heading1}
          <br />
          <span className="bg-cream brutal-border px-3 py-1 inline-block mt-2">
            {h.heading2}
          </span>
        </h1>

        <p className="text-lg md:text-2xl font-semibold text-black mb-4 max-w-xl mx-auto px-2">
          {h.subheading}
        </p>
        <p className="text-base md:text-lg font-medium text-black/80 mb-10 max-w-lg mx-auto px-2">
          {h.body}
        </p>

        {/* CTA Buttons — full width on mobile */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center px-2">
          <a
            href={`https://wa.me/91${phone}?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="brutal-btn bg-black text-cream px-6 py-4 text-base md:text-lg rounded-none inline-flex items-center gap-2 justify-center w-full sm:w-auto"
          >
            <span>💬</span> {h.btnWhatsapp}
          </a>
          <a
            href={`tel:${phone}`}
            className="brutal-btn bg-cream text-black px-6 py-4 text-base md:text-lg rounded-none inline-flex items-center gap-2 justify-center w-full sm:w-auto"
          >
            <span>📞</span> {h.btnCall}: {phone}
          </a>
        </div>
      </div>
    </section>
  );
}
