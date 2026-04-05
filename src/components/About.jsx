import { useLanguage } from '../context/LanguageContext';
import { useInView } from '../hooks/useInView';

export default function About() {
  const { t } = useLanguage();
  const a = t.about;
  const [ref, inView] = useInView();

  return (
    <section
      ref={ref}
      className={`bg-cream brutal-border border-b-0 px-4 py-16 fade-section ${inView ? 'in-view' : ''}`}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="mb-12 text-center">
          <span className="inline-block bg-neo brutal-border brutal-shadow-sm rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-widest mb-4 text-neo-dark">
            {a.badge}
          </span>
          <h2 className="text-3xl md:text-5xl font-black leading-tight">
            {a.heading.split('Real,').length > 1 ? (
              <>A Family That <span className="bg-neo px-1">Believes in</span><br />Real, Fresh Milk</>
            ) : (
              a.heading
            )}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div className="brutal-border brutal-shadow bg-white rounded-2xl p-5 md:p-8 stagger-card stagger-1">
            <p className="text-lg font-medium leading-relaxed mb-4">{a.p1}</p>
            <p className="text-lg font-medium leading-relaxed mb-4">{a.p2}</p>
            <p className="text-lg font-medium leading-relaxed">{a.p3}</p>
          </div>
          <div className="brutal-border brutal-shadow bg-neo rounded-2xl p-5 md:p-8 flex flex-col items-center justify-center min-h-48 md:min-h-64 text-center stagger-card stagger-2">
            <div className="text-6xl md:text-8xl mb-4">🌾</div>
            <p className="text-2xl font-black">{a.farmLabel}</p>
            <p className="text-base font-semibold mt-2 opacity-80">{a.farmSub}</p>
          </div>
        </div>

        {/* Stats — staggered */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {a.stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`brutal-border brutal-shadow bg-white rounded-2xl p-4 md:p-6 text-center stagger-card stagger-${i + 3}`}
            >
              <div className="text-3xl md:text-4xl mb-2">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-black text-neo-dark mb-1">{stat.value}</div>
              <div className="text-xs md:text-sm font-bold uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
