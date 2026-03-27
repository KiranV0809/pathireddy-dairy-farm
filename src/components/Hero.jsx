export default function Hero() {
  const phone = '8096459872';
  const whatsappMsg = encodeURIComponent('Hello! I would like to order milk from Pathireddy Dairy Farm.');

  return (
    <section className="bg-neo px-4 py-16 md:py-24 brutal-border border-b-0 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)',
          backgroundSize: '12px 12px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-block bg-cream brutal-border brutal-shadow-sm px-4 py-1 mb-6 text-sm font-bold uppercase tracking-widest">
          Est. in Our Village — 100% Natural
        </div>

        {/* Cow emoji row */}
        <div className="flex justify-center gap-2 text-4xl mb-6">
          {['🐄', '🐄', '🐄', '🐄', '🐄', '🐄', '🐄', '🐄', '🐄', '🐄'].map((c, i) => (
            <span key={i} className="animate-bounce" style={{ animationDelay: `${i * 0.1}s`, animationDuration: '2s' }}>
              {c}
            </span>
          ))}
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-4 text-black">
          Pathireddy<br />
          <span className="bg-cream brutal-border px-2">Dairy Farm</span>
        </h1>

        <p className="text-xl md:text-2xl font-semibold text-black mb-3 max-w-xl mx-auto">
          Fresh, Pure Milk — Straight from Our Family Farm to Your Home
        </p>
        <p className="text-base md:text-lg font-medium text-black/80 mb-10 max-w-lg mx-auto">
          A small village family with 10 happy cows and a big heart. We supply fresh milk daily and handle bulk orders for your special events.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`https://wa.me/91${phone}?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="brutal-btn bg-black text-cream px-8 py-4 text-lg rounded-none inline-flex items-center gap-2 justify-center"
          >
            <span>💬</span> Order via WhatsApp
          </a>
          <a
            href={`tel:${phone}`}
            className="brutal-btn bg-cream text-black px-8 py-4 text-lg rounded-none inline-flex items-center gap-2 justify-center"
          >
            <span>📞</span> Call Now: {phone}
          </a>
        </div>
      </div>
    </section>
  );
}
