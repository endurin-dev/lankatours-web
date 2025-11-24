'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Bike, MapPin, DollarSign, Shield, Clock, Star,
  ChevronDown, ArrowRight, Phone
} from 'lucide-react';

export default function ScooterRentalPage() {
  return (
    <>
      {/* Hero Section – Inviting & Adventurous */}
<section className="relative h-[60vh] md:h-[65vh] flex items-center justify-center text-white overflow-hidden">
  <Image
    src="/images/scooter-hero.webp"
    alt="Scooter Rental in Sri Lanka - Explore Freely"
    fill
    priority
    className="object-cover"
  />

  {/* Darker overlay + stronger contrast */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/60" />

  <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
    <h1 
      className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-tight"
      style={{ 
        textShadow: `
          0 4px 15px rgba(0,0,0,0.95),
          0 10px 30px rgba(0,0,0,0.9),
          0 20px 50px rgba(0,0,0,0.85),
          0 0 80px rgba(0,0,0,0.8)
        `
      }}
    >
      Scooter Rental in Sri Lanka
    </h1>

    <p 
      className="text-xl md:text-2xl opacity-95 max-w-3xl mx-auto mb-10 font-medium"
      style={{ 
        textShadow: '0 4px 20px rgba(0,0,0,0.9)' 
      }}
    >
      Freedom to Explore • From LKR 2,000/day • Island-wide Delivery • Fully Insured
    </p>

    <Link
      href="/contact"
      className="inline-flex items-center gap-3 px-10 py-5 bg-green-600 hover:bg-green-700 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-green-900/60 transition-all hover:scale-105"
    >
      <Bike className="w-7 h-7" />
      Get Your Scooter Quote
    </Link>
  </div>
</section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Discover Sri Lanka on Two Wheels
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Rent a scooter from Lanka Tours & Transfers and experience the ultimate freedom in Sri Lanka. 
            Cruise along coastal roads in Galle, zip through tea plantations in Ella, or explore hidden beaches in Arugam Bay. 
            Our reliable, well-maintained scooters are perfect for solo adventurers, couples, or small groups. 
            Licensed by Sri Lanka Tourism Authority – safe, affordable, and hassle-free since 2020.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <div className="flex items-center gap-3 text-green-600 font-semibold">
              <Shield className="w-8 h-8" />
              Fully Insured
            </div>
            <div className="flex items-center gap-3 text-green-600 font-semibold">
              <Clock className="w-8 h-8" />
              24/7 Support
            </div>
            <div className="flex items-center gap-3 text-green-600 font-semibold">
              <MapPin className="w-8 h-8" />
              Island-wide Delivery
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Why Rent a Scooter with Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="group bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all hover:scale-105">
              <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
                <DollarSign className="w-12 h-12 text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Affordable Rates</h3>
              <p className="text-gray-700 leading-relaxed">
                Starting from LKR 2,000 per day. No hidden fees, unlimited mileage, and fuel-efficient models to keep costs low.
              </p>
            </div>
            <div className="group bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all hover:scale-105">
              <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Bike className="w-12 h-12 text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Scooters</h3>
              <p className="text-gray-700 leading-relaxed">
                Honda, Yamaha, and TVS models – automatic transmission, 100-150cc engines. Maintained daily for safety and reliability.
              </p>
            </div>
            <div className="group bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all hover:scale-105">
              <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-12 h-12 text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Full Coverage</h3>
              <p className="text-gray-700 leading-relaxed">
                Comprehensive insurance, helmets, locks, and roadside assistance included. Optional extras like GPS or panniers available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Rent Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            How to Rent a Scooter – Easy Steps
          </h2>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Choose Your Scooter & Duration</h3>
                <p className="text-gray-700 leading-relaxed">
                  Select from our fleet via WhatsApp or form. Tell us your pickup location (airport, hotel, or city) and rental period (daily, weekly, monthly).
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Provide Details & Get Quote</h3>
                <p className="text-gray-700 leading-relaxed">
                  Share your international driving license or IDP. We’ll send a fixed-price quote within 5 minutes – no deposit needed.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Delivery & Ride</h3>
                <p className="text-gray-700 leading-relaxed">
                  We deliver to your location with a full tank. Quick safety briefing, sign the agreement, and you’re off! Return anywhere on the island.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center mt-16">
            <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-green-600 hover:bg-green-700 text-white font-bold text-lg rounded-2xl shadow-2xl transition-all hover:scale-105">
              Start Your Rental <ArrowRight className="w-7 h-7" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Daily Rental</h3>
              <p className="text-4xl font-bold text-green-600 mb-6">LKR 2,000</p>
              <ul className="space-y-3 text-gray-700">
                <li>1-3 Days</li>
                <li>Unlimited Mileage</li>
                <li>Helmet + Lock</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center border-4 border-green-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Weekly Rental</h3>
              <p className="text-4xl font-bold text-green-600 mb-6">LKR 12,000</p>
              <ul className="space-y-3 text-gray-700">
                <li>7 Days (Save 15%)</li>
                <li>Free Delivery</li>
                <li>Extra Helmet Free</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Monthly Rental</h3>
              <p className="text-4xl font-bold text-green-600 mb-6">LKR 45,000</p>
              <ul className="space-y-3 text-gray-700">
                <li>30 Days (Save 25%)</li>
                <li>Roadside Assistance</li>
                <li>GPS Tracker Option</li>
              </ul>
            </div>
          </div>
          <p className="text-center text-gray-600 mt-12">
            Prices include insurance. Extras: Baby seat LKR 500/day, GPS LKR 300/day. Fuel not included.
          </p>
        </div>
      </section>

      {/* Safety & Tips Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Safety Tips & Requirements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Requirements</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3"><Star className="w-6 h-6 text-green-600" /> Valid International Driving Permit (IDP) or Sri Lanka license</li>
                <li className="flex items-start gap-3"><Star className="w-6 h-6 text-green-600" /> Minimum age 18 (21 for some models)</li>
                <li className="flex items-start gap-3"><Star className="w-6 h-6 text-green-600" /> Passport or ID copy for registration</li>
                <li className="flex items-start gap-3"><Star className="w-6 h-6 text-green-600" /> Refundable deposit LKR 10,000 (cash or card)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Safety Tips</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3"><Shield className="w-6 h-6 text-green-600" /> Always wear a helmet – it's the law!</li>
                <li className="flex items-start gap-3"><Shield className="w-6 h-6 text-green-600" /> Drive on the left; watch for buses & tuk-tuks</li>
                <li className="flex items-start gap-3"><Shield className="w-6 h-6 text-green-600" /> Avoid night riding in rural areas</li>
                <li className="flex items-start gap-3"><Shield className="w-6 h-6 text-green-600" /> Use Google Maps for navigation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Scooter Rental FAQs
          </h2>
          <div className="space-y-6">
            <details className="group bg-white rounded-2xl shadow-md p-6">
              <summary className="flex justify-between cursor-pointer font-bold text-lg text-gray-900">
                Do I need a motorcycle license?
                <ChevronDown className="w-6 h-6 text-green-600 group-open:rotate-180 transition" />
              </summary>
              <p className="mt-4 text-gray-700">For 50-125cc scooters, a standard car license with IDP is sufficient in Sri Lanka. For 150cc+, a motorcycle endorsement is recommended.</p>
            </details>
            <details className="group bg-white rounded-2xl shadow-md p-6">
              <summary className="flex justify-between cursor-pointer font-bold text-lg text-gray-900">
                Can you deliver to my hotel/airport?
                <ChevronDown className="w-6 h-6 text-green-600 group-open:rotate-180 transition" />
              </summary>
              <p className="mt-4 text-gray-700">Yes! Free delivery in major areas like Colombo, Negombo, Galle. Small fee for remote locations like Ella or Arugam Bay.</p>
            </details>
            <details className="group bg-white rounded-2xl shadow-md p-6">
              <summary className="flex justify-between cursor-pointer font-bold text-lg text-gray-900">
                What if I have an accident?
                <ChevronDown className="w-6 h-6 text-green-600 group-open:rotate-180 transition" />
              </summary>
              <p className="mt-4 text-gray-700">Our insurance covers third-party damage. You'll pay a deductible up to LKR 10,000 for repairs. Call our 24/7 hotline immediately.</p>
            </details>
            <details className="group bg-white rounded-2xl shadow-md p-6">
              <summary className="flex justify-between cursor-pointer font-bold text-lg text-gray-900">
                Can I extend my rental?
                <ChevronDown className="w-6 h-6 text-green-600 group-open:rotate-180 transition" />
              </summary>
              <p className="mt-4 text-gray-700">Absolutely! Just WhatsApp us 24 hours in advance. Extensions at the same daily rate, subject to availability.</p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white text-center">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Hit the Road?
          </h2>
          <p className="text-xl mb-10">
            Get your scooter delivered today – freedom awaits!
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-green-600 font-bold text-lg rounded-2xl shadow-2xl transition-all hover:scale-105">
            <Phone className="w-7 h-7" />
            Contact Us Now
          </Link>
        </div>
      </section>
    </>
  );
}