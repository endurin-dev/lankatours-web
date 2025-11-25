// src/app/tours/excursions/[slug]/page.tsx

import Link from 'next/link';

export default function ExcursionDetail({ 
  params 
}: { 
  params: { slug?: string } 
}) {
  // Safe fallback if slug is missing
  const rawSlug = params?.slug || '';
  
  // Convert "sigiriya-dambulla" → "Sigiriya Dambulla"
  const title = rawSlug
    ? rawSlug
        .replace(/-/g, ' ')
        .replace(/\b\w/g, (char) => char.toUpperCase())
    : 'Excursion Details';

  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Space for your navbar */}
      <div className="h-20 md:h-24 lg:h-28" aria-hidden="true" />

      <section className="py-24">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h1 className="text-5xl md:text-7xl font-black text-emerald-800 mb-8">
            {title}
          </h1>

          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-emerald-100">
            <p className="text-xl text-gray-700 mb-10 leading-relaxed">
              Full itinerary, inclusions, pricing, and photos coming very soon!
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="https://wa.me/94771234567?text=Hi!%20I'd%20like%20details%20for%20the%20"
                className="inline-flex items-center justify-center gap-4 px-12 py-6 bg-emerald-600 text-white font-black text-xl rounded-full shadow-xl hover:bg-emerald-700 hover:scale-110 transition-all duration-300"
              >
                Book via WhatsApp
              </Link>

              <Link
                href="/tours/excursions"
                className="inline-flex items-center justify-center gap-3 px-10 py-6 border-4 border-emerald-600 text-emerald-600 font-bold text-xl rounded-full hover:bg-emerald-600 hover:text-white transition-all duration-300"
              >
                ← Back to Excursions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}