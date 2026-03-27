const services = [
  {
    icon: '🥛',
    title: 'Daily Milk Supply',
    description:
      'Get fresh milk delivered to your doorstep every morning. We ensure the milk you receive is collected the same day — never stored overnight.',
    highlight: 'Daily Morning Delivery',
    bg: 'bg-neo',
  },
  {
    icon: '🎊',
    title: 'Bulk Event Orders',
    description:
      'Planning a wedding, function, or festival? We supply large quantities of fresh milk for any occasion. Just give us 24 hours notice.',
    highlight: 'Weddings · Functions · Festivals',
    bg: 'bg-cream-dark',
  },
  {
    icon: '🏡',
    title: 'Family Subscriptions',
    description:
      'Subscribe for a regular daily or weekly supply. We maintain consistency in quantity and quality — no more running to the store.',
    highlight: 'Daily · Weekly Plans Available',
    bg: 'bg-white',
  },
];

export default function Services() {
  return (
    <section className="bg-cream-dark brutal-border border-b-0 px-4 py-16">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="inline-block bg-black text-cream brutal-border brutal-shadow-sm px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-black">
            Our Services
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
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
