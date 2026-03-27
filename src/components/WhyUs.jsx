import { useLanguage } from '../context/LanguageContext';

export default function WhyUs() {
  const { t } = useLanguage();
  const w = t.whyus;

  return (
    <section className="bg-cream brutal-border border-b-0 px-4 py-16">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="inline-block bg-neo brutal-border brutal-shadow-sm px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4">
            {w.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-black">
            {w.heading} <span className="bg-neo px-1">{w.headingHighlight}</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {w.items.map((r) => (
            <div
              key={r.title}
              className="brutal-border brutal-shadow bg-white p-6 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#000] transition-all duration-150"
            >
              <div className="text-4xl mb-3">{r.icon}</div>
              <h3 className="text-lg font-black mb-2">{r.title}</h3>
              <p className="text-sm font-medium text-black/70 leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
