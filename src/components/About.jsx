export default function About() {
  const stats = [
    { value: '10', label: 'Happy Cows', icon: '🐄' },
    { value: '100%', label: 'Pure & Natural', icon: '🥛' },
    { value: 'Daily', label: 'Fresh Delivery', icon: '🌅' },
    { value: '24/7', label: 'Event Supply', icon: '🎉' },
  ];

  return (
    <section className="bg-cream brutal-border border-b-0 px-4 py-16">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="mb-12 text-center">
          <span className="inline-block bg-neo brutal-border brutal-shadow-sm px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4">
            Our Story
          </span>
          <h2 className="text-4xl md:text-5xl font-black leading-tight">
            A Family That <span className="bg-neo px-1">Believes in</span><br />Real, Fresh Milk
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          {/* Story text */}
          <div className="brutal-border brutal-shadow bg-white p-8">
            <p className="text-lg font-medium leading-relaxed mb-4">
              We are the <strong>Pathireddy family</strong> — a small dairy farming family from our village. What started as caring for a few cows grew into a mission: bringing the purest, freshest milk to every home around us.
            </p>
            <p className="text-lg font-medium leading-relaxed mb-4">
              Our <strong>10 cows</strong> are raised with love, fed on natural grass, and milked fresh every morning. No preservatives, no additives — just milk the way it was always meant to be.
            </p>
            <p className="text-lg font-medium leading-relaxed">
              From daily doorstep deliveries to supplying bulk milk for <strong>weddings, festivals, and major events</strong> — we are your trusted village dairy.
            </p>
          </div>

          {/* Farm image placeholder */}
          <div className="brutal-border brutal-shadow bg-neo p-8 flex flex-col items-center justify-center min-h-64 text-center">
            <div className="text-8xl mb-4">🌾</div>
            <p className="text-2xl font-black">Our Village Farm</p>
            <p className="text-base font-semibold mt-2 opacity-80">Where every drop of milk comes with love</p>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="brutal-border brutal-shadow bg-white p-6 text-center"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-black text-neo-dark mb-1">{stat.value}</div>
              <div className="text-sm font-bold uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
