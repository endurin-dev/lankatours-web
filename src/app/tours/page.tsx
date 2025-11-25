'use client';

import Link from 'next/link';
import { Compass, Map, ArrowRight } from 'lucide-react';

export default function ToursPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 to-teal-50">

      {/* Space for your navbar */}
      <div className="h-20 md:h-24" aria-hidden="true" />

      {/* Hero */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-black text-emerald-800 mb-8">
            Choose Your Sri Lanka Adventure
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-16">
            From one-day escapes to multi-week journeys — we have the perfect tour for you.
          </p>

          {/* Two Big Cards */}
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">

            {/* Day Excursions */}
            <Link href="/tours/excursions" className="group block">
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-emerald-100 hover:border-emerald-400 transition-all duration-500 hover:-translate-y-6 hover:shadow-3xl">
                <div className="w-24 h-24 mx-auto mb-8 bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-500 transition-colors">
                  <Compass className="w-14 h-14 text-emerald-700 group-hover:text-white" />
                </div>
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Day Excursions</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Perfect one-day adventures: Sigiriya Rock, Yala Safari, Whale Watching, Kandy Temple, Galle Fort & more.
                </p>
                <span className="inline-flex items-center gap-3 text-emerald-600 font-bold text-xl group-hover:gap-5 transition-all">
                  Explore Excursions <ArrowRight className="w-8 h-8" />
                </span>
              </div>
            </Link>

            {/* Full Round Tours */}
            <Link href="/tours/full-tours" className="group block">
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-emerald-100 hover:border-emerald-400 transition-all duration-500 hover:-translate-y-6 hover:shadow-3xl">
                <div className="w-24 h-24 mx-auto mb-8 bg-teal-100 rounded-full flex items-center justify-center group-hover:bg-teal-600 transition-colors">
                  <Map className="w-14 h-14 text-teal-700 group-hover:text-white" />
                </div>
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Full Round Tours</h2>
                <p className="text-lg text-gray-600 mb-8">
                  5 to 21-day private tours covering Culture, Wildlife, Hill Country, Beaches & Hidden Gems.
                </p>
                <span className="inline-flex items-center gap-3 text-teal-600 font-bold text-xl group-hover:gap-5 transition-all">
                  View Full Tours <ArrowRight className="w-8 h-8" />
                </span>
              </div>
            </Link>

          </div>
        </div>
      </section>
    </main>
  );
}