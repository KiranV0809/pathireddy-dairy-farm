import { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import CowScene from './CowScene';

// Expose the hero ref so StickyCTA can detect when it's scrolled past
export default function Hero({ heroRef }) {
  const { t } = useLanguage();
  const h = t.hero;
  const phone = '6303894012';
  const whatsappMsg = encodeURIComponent('Hello! I would like to order milk from Patthireddy Dairy Farm.');

  return (
    <section
      ref={heroRef}
      className="bg-neo px-4 pt-12 pb-0 md:pt-20 brutal-border border-b-0 relative overflow-hidden"
    >
      {/* Background dot pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)',
          backgroundSize: '12px 12px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center pb-8 md:pb-12">
        {/* Badge */}
        <div className="inline-block bg-cream brutal-border brutal-shadow-sm px-4 py-1.5 mb-8 text-sm font-bold uppercase tracking-widest">
          {h.badge}
        </div>

        {/* Heading */}
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

        {/* CTA Buttons */}
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
            href={`tel:+91${phone}`}
            className="brutal-btn bg-cream text-black px-6 py-4 text-base md:text-lg rounded-none inline-flex items-center gap-2 justify-center w-full sm:w-auto"
          >
            <span>📞</span> {h.btnCall}: +91 {phone}
          </a>
        </div>
      </div>

      {/* Cow grazing scene sits flush at the bottom of the hero */}
      <CowScene />
    </section>
  );
}
