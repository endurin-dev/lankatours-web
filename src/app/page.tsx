// src/app/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star, MapPin, Car, Calendar, Shield } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* HERO SECTION – Dynamic Banner + Callouts */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center text-white overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/hero-banner.webp"   // ← Put your best Sri Lanka photo here (e.g., Sigiriya, beach, tea plantation)
          alt="Welcome to Sri Lanka"
          fill
          priority
          className="object-cover brightness-75"
        />

        {/* Overlay Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl">
            Discover Sri Lanka<br />
            <span className="text-secondary">With Lanka Tours</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto drop-shadow-lg">
            Airport Transfers • Tour Packages • Scooter Rental • Hotel Bookings (25% OFF) • Currency Exchange
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/transfers"
              className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 shadow-xl"
            >
              Book Transfer Now <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-2 border-white px-8 py-4 rounded-lg text-lg font-semibold"
            >
              Get Quote
            </Link>
          </div>
        </div>

        {/* Floating Badges */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-wrap gap-4 justify-center">
          <div className="bg-white/90 text-gray-900 px-6 py-3 rounded-full font-bold shadow-lg">
            Hotel Booking – 25% OFF
          </div>
          <div className="bg-green-600 text-white px-6 py-3 rounded-full font-bold shadow-lg">
            Best Currency Rates
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Airport & Hotel Transfers", icon: Car, href: "/transfers", desc: "24/7 reliable rides" },
              { title: "Excursions & Tours", icon: MapPin, href: "/tours", desc: "Sigiriya, Kandy, Yala & more" },
              { title: "Scooter Rental", icon: Calendar, href: "/scooters", desc: "From LKR 2,000/day" },
            ].map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-8 text-center group"
              >
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition">
                  <service.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
                <span className="text-secondary font-semibold mt-4 inline-block group-hover:translate-x-2 transition">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION – Google & TripAdvisor */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">What Our Guests Say</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-10">
            {/* Google Reviews */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-3xl font-bold">4.9 / 5</p>
              <p className="text-gray-600">Based on 200+ Google Reviews</p>
            </div>

            {/* TripAdvisor */}
            <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
              <Image
                src="/images/tripadvisor.png"   // ← Put TripAdvisor logo here
                alt="TripAdvisor"
                width={120}
                height={60}
                className="mx-auto mb-4"
              />
              <p className="text-3xl font-bold text-green-600">Certificate of Excellence</p>
              <p className="text-gray-600">2023 • 2024 • 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="py-12 bg-primary text-white">
        <div className="container mx-auto px-6 flex flex-wrap justify-center items-center gap-12 text-center">
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8" />
            <span>Licensed by Sri Lanka Tourism</span>
          </div>
          <div className="flex items-center gap-3">
            <Car className="w-8 h-8" />
            <span>24/7 Customer Support</span>
          </div>
          <div className="flex items-center gap-3">
            <Image src="/images/ssl.png" alt="SSL" width={60} height={60} />
            <span>100% Secure Payments</span>
          </div>
        </div>
      </section>
    </>
  );
}