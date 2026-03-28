import { useLanguage } from '../context/LanguageContext';

function ShareButton({ t }) {
  const handleShare = async () => {
    const shareData = {
      title: t.shareTitle,
      text: t.shareText,
      url: window.location.href,
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback for desktop browsers without Web Share API
        await navigator.clipboard.writeText(window.location.href);
        alert(t.shareCopied);
      }
    } catch {
      // User cancelled — do nothing
    }
  };

  return (
    <div className="brutal-border brutal-shadow bg-cream p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-base font-bold text-center sm:text-left">{t.shareNote}</p>
      <button
        onClick={handleShare}
        className="brutal-btn bg-black text-cream px-5 py-3 text-sm inline-flex items-center gap-2 whitespace-nowrap flex-shrink-0"
      >
        {/* Share icon SVG */}
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
        </svg>
        {t.shareBtn}
      </button>
    </div>
  );
}

export default function Contact() {
  const { t } = useLanguage();
  const c = t.contact;
  const phone = '6303894012';
  const whatsappMsg = encodeURIComponent('Hello! I would like to order milk from Patthireddy Dairy Farm.');

  return (
    <section className="bg-neo brutal-border border-b-0 px-4 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="inline-block bg-cream brutal-border brutal-shadow-sm px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4">
            {c.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-black whitespace-pre-line">
            {c.heading}
          </h2>
          <p className="text-lg font-semibold mt-4 text-black/80">{c.subheading}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Contact details card */}
          <div className="brutal-border brutal-shadow-lg bg-cream p-8">
            <h3 className="text-2xl font-black mb-6 flex items-center gap-2">
              <span>📍</span> {c.detailsTitle}
            </h3>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <span className="text-2xl">🏷️</span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-black/50 mb-1">{c.labels.name}</p>
                  <p className="text-xl font-black">{c.farmName}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">📞</span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-black/50 mb-1">{c.labels.phone}</p>
                  <a href={`tel:+91${phone}`} className="text-xl font-black hover:underline">
                    +91 {phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">🕐</span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-black/50 mb-1">{c.labels.hours}</p>
                  <p className="text-xl font-black">{c.labels.hoursValue}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">📦</span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-black/50 mb-1">{c.labels.event}</p>
                  <p className="text-xl font-black">{c.labels.eventValue}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Order action card */}
          <div className="brutal-border brutal-shadow-lg bg-black text-cream p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-black mb-3">{c.orderTitle}</h3>
              <p className="text-base font-medium text-cream/80 mb-8 leading-relaxed">{c.orderBody}</p>
            </div>
            <div className="flex flex-col gap-4">
              <a
                href={`https://wa.me/91${phone}?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-btn bg-[#25D366] text-black px-6 py-4 text-base inline-flex items-center justify-center gap-2"
              >
                <span>💬</span> {c.btnWhatsapp}
              </a>
              <a
                href={`tel:+91${phone}`}
                className="brutal-btn bg-cream text-black px-6 py-4 text-base inline-flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <span>📞</span> +91 {phone}
              </a>
            </div>
          </div>
        </div>

        {/* Share row */}
        <ShareButton t={c} />
      </div>
    </section>
  );
}
