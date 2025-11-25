'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Clock, MapPin } from 'lucide-react';

const excursions = [
  {
    slug: "sigiriya-dambulla",
    title: "Sigiriya Rock Fortress & Dambulla Caves",
    duration: "Full Day",
    from: "Kandy / Habarana / Colombo",
    description: "Climb the iconic 5th-century rock fortress with stunning frescoes, then explore the golden Buddha statues inside the ancient cave temple complex.",
    image: "https://images.unsplash.com/photo-1588672782809-3ad17b2059d2?w=1200&h=800&fit=crop"
  },
  {
    slug: "yala-safari",
    title: "Yala National Park Leopard Safari",
    duration: "Full Day (or Half Day)",
    from: "Yala / Tissamaharama / Mirissa",
    description: "Best chance in Asia to spot wild leopards! Also elephants, sloth bears, crocodiles & hundreds of bird species in Sri Lanka’s most famous national park.",
    image: "https://images.unsplash.com/photo-1571757767414-93a9c7b8c2a3?w=1200&h=800&fit=crop"
  },
  {
    slug: "whale-watching",
    title: "Mirissa Whale & Dolphin Watching",
    duration: "Morning Trip (3–5 hours)",
    from: "Mirissa / Weligama / Galle",
    description: "Witness the world’s largest animal — the blue whale — up close! Regular sightings of sperm whales, spinner dolphins, and flying fish from November to April.",
    image: "https://images.unsplash.com/photo-1571757767414-93a9c7b8c2a3?w=1200&h=800&fit=crop"
  },
  {
    slug: "kandy-temple",
    title: "Kandy Temple of the Tooth & Cultural Show",
    duration: "Full Day",
    from: "Kandy / Colombo",
    description: "Visit Sri Lanka’s most sacred Buddhist temple housing Buddha’s tooth relic, followed by a vibrant traditional Kandyan dance performance with fire walking.",
    image: "https://images.unsplash.com/photo-1588672782809-dd6d878c3f29?w=1200&h=800&fit=crop"
  },
  {
    slug: "galle-fort",
    title: "Galle Dutch Fort & Turtle Hatchery",
    duration: "Half Day",
    from: "Galle / Unawatuna / Bentota",
    description: "Walk the UNESCO-listed 300-year-old fort with colonial architecture, lighthouse, and ocean views. Visit a turtle conservation project and release baby turtles!",
    image: "https://images.unsplash.com/photo-1580065061502-3c693fad6916?w=1200&h=800&fit=crop"
  },
  {
    slug: "ella-train",
    title: "World’s Most Beautiful Train Journey to Ella",
    duration: "Full Day",
    from: "Kandy / Nuwara Eliya",
    description: "Ride the famous blue train through misty tea plantations, over Nine Arches Bridge, and into the cool hill country — voted one of the most scenic rail journeys on Earth.",
    image: "https://images.unsplash.com/photo-1590523278191-96627902f9b8?w=1200&h=800&fit=crop"
  },
  {
    slug: "udawalawe-elephants",
    title: "Udawalawe Elephant Safari & Transit Home",
    duration: "Half Day",
    from: "Udawalawe / Ella / Tangalle",
    description: "See hundreds of wild elephants in their natural habitat, then visit the Elephant Transit Home to watch rescued baby elephants being bottle-fed.",
    image: "https://images.unsplash.com/photo-1564769724755-61b100505518?w=1200&h=800&fit=crop"
  },
  {
    slug: "safari-wilpattu",
    title: "Wilpattu National Park Safari",
    duration: "Full Day",
    from: "Anuradhapura / Negombo",
    description: "Sri Lanka’s largest and oldest national park — less crowded than Yala, famous for leopards, sloth bears, and beautiful natural lakes (villu).",
    image: "https://images.unsplash.com/photo-1547471080-7a8d3c2c6c3d?w=1200&h=800&fit=crop"
  },
];

export default function ExcursionsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-teal-50">
      {/* Fixed background so navbar space is never black */}
      <div className="fixed inset-0 bg-gradient-to-b from-emerald-50 via-white to-teal-50 -z-10" />

      {/* Navbar safe space */}
      <div className="h-20 md:h-24 lg:h-32" aria-hidden="true" />

      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-emerald-800 mb-6">
            Day Excursions & Activities
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-16">
            Add unforgettable experiences to your Sri Lanka trip — perfect for a free day!
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {excursions.map((excursion) => (
              <Link
                key={excursion.slug}
                href={`/tours/excursions/${excursion.slug}`}
                className="group block"
              >
                <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl border border-emerald-100 hover:border-emerald-400 transition-all duration-500 hover:-translate-y-6 overflow-hidden">
                  {/* Image */}
                  <div className="relative h-64 bg-gray-100">
                    <Image
                      src={excursion.image}
                      alt={excursion.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      unoptimized // Remove after adding next.config.js (optional)
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-emerald-700 transition-colors">
                      {excursion.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                      {excursion.description}
                    </p>

                    <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-emerald-600" />
                        <span>{excursion.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-emerald-600" />
                        <span>From {excursion.from}</span>
                      </div>
                    </div>

                    <div className="flex items-center text-emerald-600 font-bold group-hover:gap-4 transition-all">
                      View Details <ArrowRight className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Optional CTA */}
      <section className="py-20 bg-emerald-800 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Want a custom day trip?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We can design any private excursion — just tell us where you are and what you love!
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-white text-emerald-800 px-8 py-4 rounded-full text-lg font-bold hover:bg-emerald-50 transition"
          >
            Plan My Day Trip <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </main>
  );
}