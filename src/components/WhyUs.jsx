const reasons = [
  {
    icon: '🌱',
    title: 'Naturally Raised Cows',
    body: 'Our cows graze on open fields and eat natural grass — no hormones, no artificial feed. Healthier cows mean better, purer milk.',
  },
  {
    icon: '⏰',
    title: 'Freshest Every Morning',
    body: 'Milk is collected at dawn and delivered within hours. We never store milk overnight — you always get the same-day freshness.',
  },
  {
    icon: '🧑‍🌾',
    title: 'Family You Can Trust',
    body: 'We are your neighbours, not a corporation. You know us, we know you. Our reputation is built on trust within our community.',
  },
  {
    icon: '💧',
    title: 'No Adulteration — Ever',
    body: 'Pure milk, nothing added. We take pride in honest farming and will never compromise on the quality we deliver to your family.',
  },
  {
    icon: '📦',
    title: 'Reliable Supply',
    body: 'Rain or shine, festival or weekday — we never miss a delivery. Your daily milk supply is our daily commitment.',
  },
  {
    icon: '🤝',
    title: 'Support Local Farming',
    body: 'Choosing us means supporting a small village family farm. Every litre you buy keeps traditional, ethical dairy farming alive.',
  },
];

export default function WhyUs() {
  return (
    <section className="bg-cream brutal-border border-b-0 px-4 py-16">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="inline-block bg-neo brutal-border brutal-shadow-sm px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4">
            Why Families Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-black">
            The Pathireddy <span className="bg-neo px-1">Promise</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {reasons.map((r) => (
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
