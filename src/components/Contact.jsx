export default function Contact() {
  const phone = '8096459872';
  const whatsappMsg = encodeURIComponent('Hello! I would like to order milk from Pathireddy Dairy Farm.');

  return (
    <section className="bg-neo brutal-border border-b-0 px-4 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="inline-block bg-cream brutal-border brutal-shadow-sm px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-black">
            Ready to Order<br />Fresh Milk?
          </h2>
          <p className="text-lg font-semibold mt-4 text-black/80">
            Call us, WhatsApp us, or just walk over — we are always here.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Contact card */}
          <div className="brutal-border brutal-shadow-lg bg-cream p-8">
            <h3 className="text-2xl font-black mb-6 flex items-center gap-2">
              <span>📍</span> Contact Details
            </h3>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <span className="text-2xl">🏷️</span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-black/50 mb-1">Farm Name</p>
                  <p className="text-xl font-black">Pathireddy Dairy Farm</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">📞</span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-black/50 mb-1">Phone / WhatsApp</p>
                  <a href={`tel:${phone}`} className="text-xl font-black hover:underline">
                    {phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">🕐</span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-black/50 mb-1">Delivery Hours</p>
                  <p className="text-xl font-black">5 AM – 9 AM Daily</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">📦</span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-black/50 mb-1">Event Orders</p>
                  <p className="text-xl font-black">Book 24 hrs in advance</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action card */}
          <div className="brutal-border brutal-shadow-lg bg-black text-cream p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-black mb-3">Order in Seconds 🚀</h3>
              <p className="text-base font-medium text-cream/80 mb-8 leading-relaxed">
                The fastest way to order your daily milk or book for an event — just send us a message on WhatsApp and we will confirm within minutes.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <a
                href={`https://wa.me/91${phone}?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-btn bg-[#25D366] text-black px-6 py-4 text-base inline-flex items-center justify-center gap-2"
              >
                <span>💬</span> WhatsApp Order
              </a>
              <a
                href={`tel:${phone}`}
                className="brutal-btn bg-cream text-black px-6 py-4 text-base inline-flex items-center justify-center gap-2"
              >
                <span>📞</span> Call: {phone}
              </a>
            </div>
          </div>
        </div>

        {/* Share prompt */}
        <div className="brutal-border brutal-shadow bg-cream p-6 text-center">
          <p className="text-base font-bold">
            🌟 Know someone who needs fresh milk? <span className="underline">Share this page with them on WhatsApp!</span>
          </p>
        </div>
      </div>
    </section>
  );
}
