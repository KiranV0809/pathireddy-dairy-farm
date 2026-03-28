import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function StickyCTA({ heroRef }) {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);
  const phone = '6303894012';
  const whatsappMsg = encodeURIComponent('Hello! I would like to order milk from Patthireddy Dairy Farm.');

  useEffect(() => {
    const hero = heroRef?.current;
    if (!hero) return;

    // Show sticky bar once the hero section is scrolled fully out of view
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, [heroRef]);

  if (!visible) return null;

  return (
    // md:hidden — only show on mobile/tablet, hide on desktop
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 animate-slide-up">
      <div
        className="flex items-center gap-3 bg-black px-4 py-3"
        style={{ borderTop: '3px solid #000', boxShadow: '0 -4px 0 0 #000' }}
      >
        <a
          href={`https://wa.me/91${phone}?text=${whatsappMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="brutal-btn bg-[#25D366] text-black px-4 py-3 text-sm flex-1 inline-flex items-center justify-center gap-2 whitespace-nowrap"
        >
          <span>💬</span>
          <span className="font-black">{t.contact.btnWhatsapp}</span>
        </a>
        <a
          href={`tel:+91${phone}`}
          className="brutal-btn bg-cream text-black px-4 py-3 text-sm flex-1 inline-flex items-center justify-center gap-2 whitespace-nowrap"
        >
          <span>📞</span>
          <span className="font-black">+91 {phone}</span>
        </a>
      </div>
    </div>
  );
}
