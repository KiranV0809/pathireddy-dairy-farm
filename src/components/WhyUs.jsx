import { useLanguage } from '../context/LanguageContext';
import { useInView } from '../hooks/useInView';
import MilkTruck from './MilkTruck';

export default function WhyUs() {
  const { t } = useLanguage();
  const w = t.whyus;
  const [ref, inView] = useInView();

  return (
    <section
      ref={ref}
      className={`bg-cream brutal-border border-b-0 px-4 py-16 fade-section ${inView ? 'in-view' : ''}`}
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <span className="inline-block bg-neo brutal-border brutal-shadow-sm rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-widest mb-4 text-neo-dark">
            {w.badge}
          </span>
          <h2 className="text-3xl md:text-5xl font-black">
            {w.heading} <span className="bg-neo rounded px-2">{w.headingHighlight}</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {w.items.map((r, i) => (
            <div
              key={r.title}
              className={`brutal-border brutal-shadow bg-white rounded-2xl p-6 hover:translate-y-[-3px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-150 stagger-card stagger-${i + 1}`}
            >
              <div className="text-4xl mb-3">
                {r.icon === '__truck__' ? <MilkTruck /> : r.icon}
              </div>
              <h3 className="text-lg font-black mb-2">{r.title}</h3>
              <p className="text-sm font-medium text-black/70 leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
