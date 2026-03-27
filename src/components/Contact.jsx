import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const c = t.contact;
  const phone = '8096459872';
  const whatsappMsg = encodeURIComponent('Hello! I would like to order milk from Pathireddy Dairy Farm.');

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

        <div className="grid md:grid-cols-2 gap-6 mb-10">
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
                  <a href={`tel:${phone}`} className="text-xl font-black hover:underline">
                    {phone}
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
                href={`tel:${phone}`}
                className="brutal-btn bg-cream text-black px-6 py-4 text-base inline-flex items-center justify-center gap-2"
              >
                <span>📞</span> {c.btnCall}: {phone}
              </a>
            </div>
          </div>
        </div>

        {/* Share note */}
        <div className="brutal-border brutal-shadow bg-cream p-6 text-center">
          <p className="text-base font-bold">{c.shareNote}</p>
        </div>
      </div>
    </section>
  );
}
