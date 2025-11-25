// app/tours/excursions/page.tsx  (or wherever you keep it)
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const excursions = [
  {
    slug: "sigiriya-dambulla",
    title: "Sigiriya Rock & Dambulla Caves",
    duration: "Full Day",
    from: "Colombo • Kandy • Habarana • Dambulla",
    image: "/images/excursions/sigiriya.jpg",
  },
  {
    slug: "yala-safari",
    title: "Yala National Park Leopard Safari",
    duration: "Full Day (4x4 Jeep)",
    from: "Mirissa • Tangalle • Yala • Tissamaharama",
    image: "/images/excursions/yala.jpg",
  },
  {
    slug: "whale-watching",
    title: "Mirissa Whale & Dolphin Watching",
    duration: "Morning Trip (3–4 hours)",
    from: "Mirissa • Weligama • Galle • Unawatuna",
    image: "/images/excursions/whale.jpg",
  },
  {
    slug: "kandy-temple",
    title: "Kandy Temple of the Tooth & Cultural Show",
    duration: "Full Day",
    from: "Colombo • Kandy • Nuwara Eliya",
    image: "/images/excursions/kandy.jpg",
  },
  {
    slug: "galle-fort",
    title: "Galle Fort & Turtle Hatchery",
    duration: "Half Day",
    from: "Galle • Unawatuna • Hikkaduwa • Bentota",
    image: "/images/excursions/galle.jpg",
  },
  {
    slug: "ella-train",
    title: "Ella Scenic Train Ride & Little Adam’s Peak",
    duration: "Full Day",
    from: "Ella • Nuwara Eliya • Bandarawela",
    image: "/images/excursions/ella.jpg",
  },
];

export default function ExcursionsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-white">
      {/* Proper top padding instead of empty div → navbar stays transparent on load */}
      <section className="pt-28 md:pt-36 pb-20 md:pb-32 px-6">
        <div className="container mx-auto max-w-7xl text-center">
          {/* Hero */}
          <h1 className="text-5xl md:text-7xl font-black text-emerald-800 leading-tight">
            Day Excursions in Sri Lanka
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto">
            The best one-day adventures, hand-picked and perfectly timed from your hotel
          </p>

          {/* Cards Grid */}
          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
            {excursions.map((tour) => (
              <Link
                key={tour.slug}
                href={`/tours/excursions/${tour.slug}`}
                className="group block transform transition-all duration-500 hover:-translate-y-6"
              >
                <article className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-3xl border border-emerald-100 hover:border-emerald-300 transition-all">
                  {/* Optional: Add real images later */}
                  <div className="h-48 bg-gradient-to-br from-emerald-400 to-teal-600 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-sm font-semibold opacity-90">{tour.duration}</p>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition">
                      {tour.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      Starting from: <span className="font-semibold text-emerald-600">{tour.from}</span>
                    </p>

                    <div className="flex items-center gap-3 text-emerald-600 font-bold text-lg group-hover:gap-5 transition-all">
                      View Details & Book
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Trust CTA */}
          <div className="mt-24 bg-emerald-50 rounded-3xl p-12 max-w-5xl mx-auto">
            <p className="text-2xl md:text-3xl font-bold text-emerald-800">
              Private • English-Speaking Driver • All Entrance Fees Included
            </p>
            <p className="mt-4 text-lg text-gray-700">
              Instant confirmation • Free cancellation up to 24 hours
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}