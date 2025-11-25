'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Users, Star, ArrowRight, Search } from 'lucide-react';
import { useState } from 'react';

const tourPackages = [
  { slug: "5-day-essence", title: "5-Day Essence of Sri Lanka", days: 5, price: "From $690", category: "Classic", popular: false, summary: "Sigiriya, Dambulla Caves, Kandy Temple – perfect short cultural trip", image: "https://images.unsplash.com/photo-1588672782809-3ad17b2059d2?w=1200&h=900&fit=crop" },
  { slug: "7-day-highlights", title: "7-Day Sri Lanka Highlights", days: 7, price: "From $890", category: "Classic", popular: true, summary: "Cultural Triangle, Kandy, tea country, short safari", image: "https://images.unsplash.com/photo-1571752729323-57a4e2c02e41?w=1200&h=900&fit=crop" },
  { slug: "10-day-classic-sri-lanka", title: "10-Day Classic Sri Lanka", days: 10, price: "From $1,290", category: "Classic", popular: true, summary: "Sigiriya, Polonnaruwa, Kandy, Ella train, Yala safari, Galle Fort", image: "https://images.unsplash.com/photo-1588672782809-dd6d878c3f29?w=1200&h=900&fit=crop" },
  { slug: "12-day-best-of-sri-lanka", title: "12-Day Best of Sri Lanka", days: 12, price: "From $1,590", category: "Classic", popular: false, summary: "Complete cultural loop + south coast beaches + whale watching", image: "https://images.unsplash.com/photo-1564769724755-61b100505518?w=1200&h=900&fit=crop" },
  { slug: "14-day-grand-tour", title: "14-Day Grand Tour of Ceylon", days: 14, price: "From $1,990", category: "Classic", popular: true, summary: "Full island including Jaffna, east coast & ancient cities", image: "https://images.unsplash.com/photo-1597672780005-1b84d7a9b3f8?w=1200&h=900&fit=crop" },

  { slug: "8-day-culture-beach", title: "8-Day Culture & Beach Relax", days: 8, price: "From $1,150", category: "Beach & Culture", popular: false, summary: "Ancient sites then relax on south coast beaches", image: "https://images.unsplash.com/photo-1580065061502-3c693fad6916?w=1200&h=900&fit=crop" },
  { slug: "10-day-culture-and-south-coast", title: "10-Day Culture + South Coast", days: 10, price: "From $1,390", category: "Beach & Culture", popular: false, summary: "Galle Fort, Mirissa whales, turtle beach", image: "https://images.unsplash.com/photo-1571757767414-93a9c7b8c2a3?w=1200&h=900&fit=crop" },
  { slug: "14-day-beach-and-culture", title: "14-Day Beach & Culture Escape", days: 14, price: "From $1,890", category: "Beach & Culture", popular: true, summary: "Full culture tour + 5 nights beach relaxation", image: "https://images.unsplash.com/photo-1519449556851-57256c687c6a?w=1200&h=900&fit=crop" },

  { slug: "10-day-safari-express", title: "10-Day Safari Express", days: 10, price: "From $1,550", category: "Wildlife & Adventure", popular: false, summary: "Yala, Udawalawe, Minneriya – maximum wildlife", image: "https://images.unsplash.com/photo-1547471080-7a8d3c2c6c3d?w=1200&h=900&fit=crop" },
  { slug: "15-day-ultimate-safari-tour", title: "15-Day Ultimate Safari Tour", days: 15, price: "From $2,490", category: "Wildlife & Adventure", popular: true, summary: "All major parks, leopards, elephants, whales", image: "https://images.unsplash.com/photo-1570213489059-0a331c6e7c9e?w=1200&h=900&fit=crop" },

  { slug: "9-day-hill-country-and-tea-trails", title: "9-Day Hill Country & Tea Trails", days: 9, price: "From $1,490", category: "Hill Country & Tea", popular: true, summary: "Scenic train, tea estates, hiking trails", image: "https://images.unsplash.com/photo-1590523278191-96627902f9b8?w=1200&h=900&fit=crop" },
  { slug: "11-day-tea-mountains-beaches", title: "11-Day Tea, Mountains & Beaches", days: 11, price: "From $1,690", category: "Hill Country & Tea", popular: false, summary: "Ella, Nine Arches, Adam’s Peak option", image: "https://images.unsplash.com/photo-1588672782809-dd6d878c3f29?w=1200&h=900&fit=crop" },

  { slug: "10-day-luxury-honeymoon", title: "10-Day Luxury Honeymoon", days: 10, price: "From $2,990", category: "Luxury & Honeymoon", popular: true, summary: "5-star resorts, private pools, romantic dinners", image: "https://images.unsplash.com/photo-1582719471384-8940378d7a34?w=1200&h=900&fit=crop" },
  { slug: "14-day-ultra-luxury-sri-lanka", title: "14-Day Ultra Luxury Journey", days: 14, price: "From $4,900", category: "Luxury & Honeymoon", popular: true, summary: "Amanwella, Cape Weligama, helicopter transfers", image: "https://images.unsplash.com/photo-1540979382850-9de4f4e4e8a1?w=1200&h=900&fit=crop" },
];

const categories = ["Classic", "Beach & Culture", "Wildlife & Adventure", "Hill Country & Tea", "Luxury & Honeymoon"];

export default function FullToursPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTours = tourPackages.filter(tour =>
    tour.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tour.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tour.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tour.days.toString().includes(searchTerm)
  );

  return (
    <>
      {/* This fixes the black bar forever */}
      <div className="fixed inset-0 bg-gradient-to-b from-emerald-50 via-white to-teal-50 -z-10" />

      {/* Navbar safe space – now perfectly light */}
      <div className="h-20 md:h-24 lg:h-32" aria-hidden="true" />

      <div className="relative min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-12">

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-black text-emerald-800 mb-4">
              All Private Round Tours
            </h1>
            <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
              Private driver-guide • Boutique hotels • All entrances included • 100% customizable
            </p>

            {/* Search */}
            <div className="max-w-3xl mx-auto relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-500" />
              <input
                type="text"
                placeholder="Search: 'beach', '7 days', 'safari', 'honeymoon', 'tea'..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-16 pr-8 py-6 rounded-full border-2 border-emerald-200 focus:border-emerald-600 focus:outline-none text-lg shadow-xl transition-all placeholder-gray-500 text-black"
              />
            </div>
          </div>

          {/* Search Results */}
          {searchTerm ? (
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-emerald-700 mb-10">
                {filteredTours.length} tour{filteredTours.length !== 1 ? 's' : ''} found
              </h2>
              <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                {filteredTours.map(tour => (
                  <TourCard key={tour.slug} tour={tour} />
                ))}
              </div>
            </div>
          ) : (
            /* All Categories */
            categories.map(category => (
              <section key={category} className="mb-20">
                <h2 className="text-4xl font-bold text-emerald-700 mb-10 border-b-4 border-emerald-500 inline-block pb-2">
                  {category}
                  <span className="ml-4 text-xl font-normal text-gray-600">
                    ({tourPackages.filter(t => t.category === category).length} tours)
                  </span>
                </h2>
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                  {tourPackages
                    .filter(t => t.category === category)
                    .map(tour => (
                      <TourCard key={tour.slug} tour={tour} />
                    ))}
                </div>
              </section>
            ))
          )}
        </div>
      </div>
    </>
  );
}

function TourCard({ tour }: { tour: any }) {
  return (
    <Link href={`/tours/full-tours/${tour.slug}`} className="group block bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-emerald-100">
      <div className="relative h-64 bg-gray-100">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          unoptimized // Remove this line after adding next.config.js (optional)
        />
        {tour.popular && (
          <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-rose-500 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-xl">
            <Star className="w-4 h-4 fill-white" /> Most Popular
          </div>
        )}
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-emerald-700 transition-colors">
          {tour.title}
        </h3>
        <p className="text-gray-600 mb-6 line-clamp-2 text-sm leading-relaxed">
          {tour.summary}
        </p>

        <div className="flex items-center gap-6 text-gray-600 mb-6">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-emerald-600" />
            <span className="font-medium">{tour.days} days</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-emerald-600" />
            <span className="font-medium">Private Tour</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-3xl font-black text-emerald-600">{tour.price}</p>
          <div className="flex items-center text-emerald-600 font-bold group-hover:gap-4 transition-all">
            View Details <ArrowRight className="w-6 h-6" />
          </div>
        </div>
      </div>
    </Link>
  );
}