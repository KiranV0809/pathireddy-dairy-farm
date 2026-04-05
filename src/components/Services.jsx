import { useLanguage } from '../context/LanguageContext';
import { useInView } from '../hooks/useInView';

export default function Services() {
  const { t } = useLanguage();
  const s = t.services;
  const [ref, inView] = useInView();

  return (
    <section
      ref={ref}
      className={`bg-cream-dark brutal-border border-b-0 px-4 py-16 fade-section ${inView ? 'in-view' : ''}`}
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <span className="inline-block bg-[#1A1A1A] text-cream brutal-border brutal-shadow-sm rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-widest mb-4">
            {s.badge}
          </span>
          <h2 className="text-3xl md:text-5xl font-black">{s.heading}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {s.items.map((service, i) => (
            <div
              key={service.title}
              className={`brutal-border brutal-shadow rounded-2xl ${service.bg} p-5 md:p-8 flex flex-col stagger-card stagger-${i + 1}`}
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-black mb-3">{service.title}</h3>
              <p className="text-base font-medium leading-relaxed flex-1 mb-4 text-black/80">
                {service.description}
              </p>
              <div className="inline-block bg-[#1A1A1A] text-cream text-xs font-semibold rounded-full px-3 py-1 uppercase tracking-wide self-start">
                {service.highlight}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
