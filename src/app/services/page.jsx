'use client';

import Link from 'next/link';
import useSWR from 'swr';
import { DollarSign, Plane, Car, Hotel, Compass, Map, Bed, Sparkles, Ticket, Globe, Flower2, ArrowRight, Phone, RefreshCw } from 'lucide-react';

const fetcher = (url) => fetch(url).then(res => res.json());

export default function ServicesPage() {
  const { data, isLoading, error } = useSWR(
    'https://api.exchangerate-api.com/v4/latest/USD',
    fetcher,
    { refreshInterval: 60000 }
  );

  const rates = data?.rates || {};
  const lkrRate = rates.LKR || 302.5;

  const liveRates = [
    { from: "USD", rate: lkrRate.toFixed(2), highlight: true },
    { from: "EUR", rate: (lkrRate / rates.EUR).toFixed(2) },
    { from: "GBP", rate: (lkrRate / rates.GBP).toFixed(2), highlight: true },
    { from: "AUD", rate: (lkrRate / rates.AUD).toFixed(2) },
    { from: "CAD", rate: (lkrRate / rates.CAD).toFixed(2) },
    { from: "SGD", rate: (lkrRate / rates.SGD).toFixed(2) },
    { from: "JPY", rate: ((lkrRate / rates.JPY) * 100).toFixed(1), note: "per 100 JPY" },
    { from: "CHF", rate: (lkrRate / rates.CHF).toFixed(2) },
  ];

  const services = [
    { icon: Plane, title: "Airport Transfer", desc: "Private meet & greet at CMB Airport. Direct to Colombo, Negombo, Bentota, Galle, Kandy or anywhere in Sri Lanka." },
    { icon: Car, title: "Tourist Taxi & Driver", desc: "Full-day or multi-day private car hire with experienced English-speaking driver. Explore at your own pace." },
    { icon: Hotel, title: "Hotel-to-Hotel Transfers", desc: "Seamless transfers between hotels island-wide. Popular routes: Bentota → Kandy → Ella → Mirissa → Yala." },
    { icon: Compass, title: "Day Excursions", desc: "Sigiriya & Dambulla, Kandy Temple, Yala Safari, Galle Fort, Mirissa Whale Watching — all with guide and transport." },
    { icon: Map, title: "Round Tours", desc: "Custom 5–21 day private tours covering Cultural Triangle, Hill Country, beaches and wildlife. Fully planned and guided." },
    { icon: Bed, title: "Hotel & Villa Booking", desc: "Best rates on boutique hotels, luxury resorts, eco-lodges and Ayurveda retreats across Sri Lanka." },
    { icon: Sparkles, title: "Activities & Adventures", desc: "Surfing, diving, hiking, cooking classes, hot air balloon rides, village tours — we organize everything." },
    { icon: Ticket, title: "Train & Bus Tickets", desc: "Reserved seats on the famous Kandy–Ella scenic train and premium AC buses. Guaranteed booking." },
    { icon: Globe, title: "Visa & ETA Assistance", desc: "Fast ETA applications and visa extensions. Support for all nationalities with same-day processing." },
    { icon: Flower2, title: "Yoga & Wellness Retreats", desc: "Daily yoga, meditation, Ayurvedic treatments and organic meals in serene locations like Ulpotha and Talalla." },
  ];

  return (
    <main className="bg-gradient-to-b from-amber-50 via-white to-teal-50 min-h-screen">

      {/* TOP SPACE FOR YOUR FIXED NAVBAR */}
      <div className="h-20 md:h-24 lg:h-28" aria-hidden="true" /> {/* Adjust this height to match your navbar */}

      {/* MONEY EXCHANGE – FIRST VISIBLE SECTION */}
      <section className="py-20 bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 text-white -mt-20 md:-mt-24 lg:-mt-28 pt-32 md:pt-36 lg:pt-40">
        {/* Negative margin + extra padding pulls this section up under the navbar */}
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <DollarSign className="w-20 h-20" />
            <h1 className="text-5xl md:text-7xl font-black">Best Live Exchange Rates</h1>
            {isLoading && <RefreshCw className="w-10 h-10 animate-spin" />}
          </div>
          <p className="text-2xl mb-12 opacity-95">
            Better than Airport • Banks • Hotels • No Commission • Updated Every Minute
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {liveRates.map((item, i) => (
              <div
                key={i}
                className={`p-8 rounded-3xl text-center backdrop-blur-md transition-all hover:scale-110 ${
                  item.highlight ? 'bg-white/30 border-4 border-white shadow-2xl' : 'bg-white/15'
                }`}
              >
                <p className="text-lg font-medium mb-2">
                  {item.from} → LKR {item.note && <span className="text-sm block">{item.note}</span>}
                </p>
                <p className="text-4xl font-black">
                  {item.rate} <span className="text-xl">LKR</span>
                </p>
                {item.highlight && (
                  <div className="mt-4 px-6 py-2 bg-white/40 rounded-full text-sm font-bold">
                    BEST RATE
                  </div>
                )}
              </div>
            ))}
          </div>

          {error && <p className="mt-8 text-red-200">Live rates offline — WhatsApp for current rate</p>}

          <div className="mt-16">
           <Link
  href="https://wa.me/94771234567?text=Hi!%20Please%20send%20today's%20live%20exchange%20rates"
  target="_blank"
  rel="noopener noreferrer"
  className="
    group relative inline-flex items-center gap-5
    px-14 py-7
    bg-white/20 backdrop-blur-xl
    border-2 border-white/40
    text-white font-black text-2xl
    rounded-full shadow-2xl
    hover:shadow-orange-500/50
    overflow-hidden
    transition-all duration-500
    hover:scale-110 active:scale-105
  "
>
  {/* Inner glow */}
  <span className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/40 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

  {/* Ripple shine */}
  <span className="absolute inset-0 scale-0 group-hover:scale-150 bg-white/30 rounded-full transition-transform duration-700" />

  {/* Icon */}
  <DollarSign className="w-12 h-12 relative z-10 drop-shadow-lg group-hover:scale-110 transition-transform duration-300" />

  {/* Text */}
  <span className="relative z-10 drop-shadow-lg">
    Get Our Rate on WhatsApp
  </span>
</Link>
          </div>
        </div>
      </section>

      {/* ALL OTHER SERVICES */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-emerald-800">
            Complete Sri Lanka Travel Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, i) => (
              <div
                key={i}
                className="group bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl border border-emerald-100 hover:border-emerald-300 transition-all hover:-translate-y-3"
              >
                <div className="w-20 h-20 mx-auto mb-8 bg-emerald-100 rounded-2xl flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                  <service.icon className="w-12 h-12 text-emerald-700" />
                </div>
                <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">{service.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{service.desc}</p>
                <div className="mt-8 text-center">
                  <Link href="/contact" className="text-emerald-600 font-bold hover:text-emerald-700 inline-flex items-center gap-2">
                    Contact Us <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 bg-emerald-700 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-black mb-8">One Message = Everything Arranged</h2>
          <Link
            href="https://wa.me/94771234567"
            className="inline-flex items-center gap-6 px-16 py-8 bg-white text-emerald-700 font-black text-2xl rounded-full shadow-2xl hover:scale-110 transition-all"
          >
            <Phone className="w-12 h-12" />
            WhatsApp Now – Reply in 2 Minutes
          </Link>
        </div>
      </section>
    </main>
  );
}