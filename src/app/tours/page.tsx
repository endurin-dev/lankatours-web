'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronUp, Clock, Users, Star, Car, Coffee, Camera, HeartHandshake } from "lucide-react";

export default function ToursPage() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const tours = [
    {
      id: 1,
      title: "Sigiriya Rock & Dambulla Caves",
      price: "$98",
      duration: "Full Day",
      groupSize: "1–8 persons",
      badge: "Most Popular",
      image: "/tours/sigiriya.webp",
      shortDesc: "Climb the ancient Lion Rock fortress and explore golden cave temples",
      includes: ["Private A/C vehicle", "English guide", "All entrance fees", "Village lunch", "Water & snacks"],
      itinerary: ["06:00 Pickup", "08:30 Sigiriya climb", "12:00 Village lunch", "14:00 Dambulla Caves", "18:00 Return"],
    },
    {
      id: 2,
      title: "Yala National Park Safari",
      price: "$145",
      duration: "Full Day",
      groupSize: "1–6 persons",
      badge: "Wildlife Favorite",
      image: "/tours/yala.webp",
      shortDesc: "Spot leopards, elephants, and sloth bears in Sri Lanka’s best safari park",
      includes: ["4×4 jeep safari", "Park fees", "Breakfast pack", "Binoculars", "Experienced tracker"],
      itinerary: ["05:00 Pickup", "06:00 Morning safari (3.5 hrs)", "10:00 Breakfast by lake", "14:00 Return"],
    },
    {
      id: 3,
      title: "Kandy & Temple of the Tooth",
      price: "$89",
      duration: "Full Day",
      groupSize: "1–8 persons",
      image: "/tours/kandy.webp",
      shortDesc: "Cultural capital with sacred temple, botanical gardens & tea plantation",
      includes: ["Temple entry", "Cultural dance show", "Peradeniya Gardens", "Tea factory visit"],
      itinerary: ["08:00 Pickup", "11:00 Temple of the Tooth", "13:00 Lunch", "14:30 Cultural show", "16:00 Gardens", "19:00 Return"],
    },
    {
      id: 4,
      title: "Ella Highlands & Train Journey",
      price: "$278",
      duration: "2 Days / 1 Night",
      groupSize: "1–6 persons",
      badge: "Best Seller",
      image: "/tours/ella.webp",
      shortDesc: "Scenic train ride, Nine Arch Bridge, Little Adam’s Peak & tea country",
      includes: ["Train tickets (reserved seats)", "Luxury accommodation", "All meals", "Hiking guide"],
      itinerary: ["Day 1: Train to Ella → Nine Arch → Ravana Falls", "Day 2: Little Adam’s Peak → Lipton’s Seat → Return"],
    },
    {
      id: 5,
      title: "Galle Fort & Southern Coast",
      price: "$92",
      duration: "Full Day",
      groupSize: "1–8 persons",
      image: "/tours/galle.webp",
      shortDesc: "UNESCO Dutch Fort, turtle hatchery, stilt fishermen & beach time",
      includes: ["Fort walking tour", "Turtle hatchery", "Boat safari (optional)", "Beach stop"],
      itinerary: ["08:00 Pickup", "10:30 Galle Fort", "12:30 Turtle hatchery", "14:00 Lunch by beach", "17:00 Return"],
    },
    {
      id: 6,
      title: "Whale Watching Mirissa",
      price: "$78",
      duration: "Half Day",
      groupSize: "Up to 30 (shared boat)",
      badge: "Seasonal Nov–Apr",
      image: "/tours/whale.webp",
      shortDesc: "See blue whales & dolphins — world’s best whale watching destination",
      includes: ["Shared boat", "Breakfast on board", "Marine biologist guide", "Life jackets"],
      itinerary: ["05:30 Pickup", "06:30 Depart harbor", "07:00–10:30 Whale watching", "11:30 Return"],
    },
    {
      id: 7,
      title: "Tea Country & Nuwara Eliya",
      price: "$118",
      duration: "Full Day",
      groupSize: "1–8 persons",
      image: "/tours/NuwaraEliya.webp",
      shortDesc: "Rolling tea plantations, waterfalls, and colonial hill station",
      includes: ["Tea factory tour & tasting", "Pedro Estate visit", "Gregory Lake", "Waterfall stop"],
      itinerary: ["06:00 Pickup", "09:30 Tea factory", "12:00 Lunch", "14:00 Gregory Lake", "18:00 Return"],
    },
    {
      id: 8,
      title: "Anuradhapura Ancient City",
      price: "$105",
      duration: "Full Day",
      groupSize: "1–8 persons",
      image: "/tours/anuradhapura.jpg",
      shortDesc: "Sri Lanka’s first ancient capital — 2,000+ years of history",
      includes: ["All entrance fees", "Local archaeologist guide", "Ruwanwelisaya & Jaya Sri Maha Bodhi"],
      itinerary: ["05:30 Pickup", "09:00 Ancient city tour", "13:00 Lunch", "15:00 Sacred Bo Tree", "19:00 Return"],
    },
    {
      id: 9,
      title: "Udawalawe Elephant Transit Home",
      price: "$112",
      duration: "Half Day",
      groupSize: "1–8 persons",
      image: "/tours/Udawalawe.webp",
      shortDesc: "Watch baby elephants being fed + mini safari",
      includes: ["Transit home entry", "Short jeep safari", "Donation to elephant care"],
      itinerary: ["05:30 or 13:00 Pickup", "Feeding time viewing", "Short safari", "Return after 4 hours"],
    },
    {
      id: 10,
      title: "Polonnaruwa Ancient Kingdom",
      price: "$99",
      duration: "Full Day",
      groupSize: "1–8 persons",
      image: "/tours/polonnaruwa.jpg",
      shortDesc: "Medieval capital with giant Buddha statues & royal ruins by bicycle",
      includes: ["Bicycle rental", "All entrance fees", "Guide", "Lunch by the lake"],
      itinerary: ["07:00 Pickup", "09:30 Cycle tour of ruins", "13:00 Lunch", "15:00 Gal Vihara", "18:00 Return"],
    },
  ];

  return (
    <>
      {/* Short Hero – no overlap with navbar */}
      <section className="relative h-[85vh] md:h-[80vh] flex flex-col items-center justify-center text-center px-6 pt-24 md:pt-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/coast.webp"
            alt="Sri Lanka Tours"
            fill
            priority
            className="object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />
        </div>

        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-5 drop-shadow-2xl">
            Sri Lanka Tour Packages
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto">
            Private • Customizable • Best Price Guaranteed • 24/7 Local Support
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link href="#packages" className="px-9 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl text-lg transition shadow-xl">
              View All Packages
            </Link>
           {/* Hero section – top "Get Custom Quote" button */}
<Link
  href={`mailto:hashinsaamidu@gmail.com?subject=${encodeURIComponent(
    "Custom Tour Quote Request – Lanka Tours & Transfers"
  )}&body=${encodeURIComponent(
    `Hello Lanka Tours Team,\n\n` +
    `I would like a fully customized tour quote for Sri Lanka.\n\n` +
    `Please include options and best prices based on:\n\n` +
    `Preferred Travel Dates: ___________________________\n` +
    `Number of Adults: __________    Children (0–12): __________\n` +
    `Interests (e.g. beaches, wildlife, culture, adventure, tea country, etc.): \n___________________________\n\n` +
    `Current location or arrival details (if known):\n___________________________\n\n` +
    `Any special requests (honeymoon, family-friendly, luxury, budget, etc.):\n___________________________\n\n` +
    `My Name: ___________________________\n` +
    `My Email: ___________________________\n` +
    `Phone / WhatsApp: ___________________________\n\n` +
    `Thank you! Looking forward to your reply.\n` +
    `Best regards,\n`
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  className="px-9 py-4 bg-white/20 backdrop-blur-md border-2 border-white/40 hover:bg-white/30 text-white font-bold rounded-xl text-lg transition shadow-xl"
>
  Get Custom Quote
</Link>
          </div>
        </div>
      </section>

      {/* 10 Expandable Tours */}
      <section id="packages" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Choose Your Perfect Adventure</h2>

          <div className="space-y-12">
            {tours.map((tour) => (
              <div
                key={tour.id}
                className={`bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-500 border ${
                  expandedId === tour.id ? "ring-4 ring-green-500 ring-offset-4" : "border-gray-200"
                }`}
              >
                {/* Card Header */}
                <div
                  className="grid md:grid-cols-3 gap-6 p-6 cursor-pointer select-none"
                  onClick={() => setExpandedId(expandedId === tour.id ? null : tour.id)}
                >
                  <div className="relative h-64 md:h-full rounded-2xl overflow-hidden">
                    <Image src={tour.image} alt={tour.title} fill className="object-cover hover:scale-110 transition duration-700" />
                    {tour.badge && (
                      <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
                        {tour.badge}
                      </div>
                    )}
                  </div>

                  <div className="md:col-span-2 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{tour.title}</h3>
                      <p className="text-gray-600 mb-6">{tour.shortDesc}</p>

                      <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                        <span className="flex items-center gap-2"><Clock className="w-5 h-5 text-green-600" /> {tour.duration}</span>
                        <span className="flex items-center gap-2"><Users className="w-5 h-5 text-green-600" /> {tour.groupSize}</span>
                        <span className="flex items-center gap-2"><Star className="w-5 h-5 text-yellow-500" /> 4.9+ Reviews</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-8">
                      <div>
                        <span className="text-4xl font-bold text-green-600">{tour.price}</span>
                        <span className="text-gray-500"> / person</span>
                      </div>
                      <button className="flex items-center gap-3 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition">
                        {expandedId === tour.id ? "Hide Details" : "View Details"}
                        {expandedId === tour.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Expanded Content */}
                <div className={`transition-all duration-700 ${expandedId === tour.id ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}>
                  <div className="bg-gradient-to-r from-emerald-50 to-teal-50 px-6 py-12 border-t-4 border-green-600">
                    <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                      <div>
                        <h4 className="text-2xl font-bold mb-6 text-green-800 flex items-center gap-3">
                          <HeartHandshake className="w-7 h-7" /> What's Included
                        </h4>
                        <ul className="space-y-3">
                          {tour.includes.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-gray-700">
                              <span className="text-green-600 mt-1 text-xl">✓</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-2xl font-bold mb-6 text-green-800">Typical Itinerary</h4>
                        <ol className="space-y-4">
                          {tour.itinerary.map((step, i) => (
                            <li key={i} className="flex gap-4">
                              <span className="font-bold text-green-600 min-w-24">{step.split(" ")[0]}</span>
                              <span className="text-gray-700">{step.includes("Pickup") ? step : step.split(" → ").pop()}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>

                    <div className="text-center mt-12">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-4 px-12 py-6 bg-green-600 hover:bg-green-700 text-white text-xl font-bold rounded-xl transition shadow-2xl"
                      >
                        <Car className="w-7 h-7" />
                        Book This Tour Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}