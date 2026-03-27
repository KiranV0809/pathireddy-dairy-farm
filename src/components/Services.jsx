import { useLanguage } from '../context/LanguageContext';

export default function Services() {
  const { t } = useLanguage();
  const s = t.services;

  return (
    <section className="bg-cream-dark brutal-border border-b-0 px-4 py-16">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="inline-block bg-black text-cream brutal-border brutal-shadow-sm px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4">
            {s.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-black">{s.heading}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {s.items.map((service) => (
            <div
              key={service.title}
              className={`brutal-border brutal-shadow ${service.bg} p-8 flex flex-col`}
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-black mb-3">{service.title}</h3>
              <p className="text-base font-medium leading-relaxed flex-1 mb-4 text-black/80">
                {service.description}
              </p>
              <div className="inline-block bg-black text-cream text-xs font-bold px-3 py-1 uppercase tracking-wide self-start">
                {service.highlight}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
