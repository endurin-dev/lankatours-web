// src/app/tours/full-tours/[slug]/page.tsx

import Link from 'next/link';
import { Map, Calendar, Users, Car } from 'lucide-react';

export default function FullTourDetail({ 
  params 
}: { 
  params: { slug?: string } 
}) {
  // Safe slug handling (never crashes)
  const rawSlug = params?.slug || '';
  
  // Convert "10-day-classic-sri-lanka" → "10 Day Classic Sri Lanka"
  const title = rawSlug
    ? rawSlug
        .replace(/-/g, ' ')
        .replace(/\b\w/g, (char) => char.toUpperCase())
    : 'Full Tour Details';

  return (
    <main className="min-h-screen bg-gradient-to-b from-teal-50 via-white to-emerald-50">
      {/* Space for your fixed navbar */}
      <div className="h-20 md:h-24 lg:h-28" aria-hidden="true" />

      <section className="py-24">
        <div className="container mx-auto px-6 max-w-5xl">

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-black text-emerald-800 text-center mb-12">
            {title}
          </h1>

          {/* Glass Card */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-10 md:p-16 shadow-2xl border border-emerald-100">

            {/* Tour Highlights */}
            <div className="grid md:grid-cols-4 gap-8 mb-12 text-center">
              <div className="flex flex-col items-center">
                <Calendar className="w-12 h-12 text-emerald-600 mb-3" />
                <p className="font-bold text-gray-800">Duration</p>
                <p className="text-2xl font-black text-emerald-600">7–21 Days</p>
              </div>
              <div className="flex flex-col items-center">
                <Users className="w-12 h-12 text-teal-600 mb-3" />
                <p className="font-bold text-gray-800">Group</p>
                <p className="text-2xl font-black text-teal-600">Private Only</p>
              </div>
              <div className="flex flex-col items-center">
                <Car className="w-12 h-12 text-emerald-600 mb-3" />
                <p className="font-bold text-gray-800">Transport</p>
                <p className="text-2xl font-black text-emerald-600">A/C Vehicle</p>
              </div>
              <div className="flex flex-col items-center">
                <Map className="w-12 h-12 text-teal-600 mb-3" />
                <p className="font-bold text-gray-800">Guide</p>
                <p className="text-2xl font-black text-teal-600">English Speaking</p>
              </div>
            </div>

            {/* Description */}
            <div className="text-center mb-12">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                A complete private journey across Sri Lanka’s ancient cities, tea plantations, wildlife safaris, and pristine beaches. 
                Includes luxury vehicle, licensed driver-guide, 4–5 star hotels, all entrance fees, and daily breakfast.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href={`https://wa.me/94771234567?text=Hi!%20I'd%20like%20the%20full%20itinerary%20for%20${encodeURIComponent(title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-4 px-12 py-6 bg-emerald-600 text-white font-black text-xl rounded-full shadow-2xl hover:bg-emerald-700 hover:scale-110 transition-all duration-300"
              >
                <Map className="w-8 h-8" />
                Get Full Itinerary on WhatsApp
              </Link>

              <Link
                href="/tours/full-tours"
                className="inline-flex items-center justify-center gap-3 px-10 py-6 border-4 border-emerald-600 text-emerald-600 font-bold text-xl rounded-full hover:bg-emerald-600 hover:text-white transition-all duration-300"
              >
                ← All Full Tours
              </Link>
            </div>

            {/* Coming Soon Note */}
            <p className="text-center text-gray-500 mt-12 text-lg">
              Detailed day-by-day itinerary, photos & inclusions coming very soon!
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}