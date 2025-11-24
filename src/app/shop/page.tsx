'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  ShoppingBag, Package, MapPin, Clock, Phone, Star,
  ChevronDown, ArrowRight, Gift, Sparkles
} from 'lucide-react';

export default function GiftShopPage() {
  return (
    <>
      {/* HERO – Warm & Inviting */}
      <section className="relative h-[70vh] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="/images/giftshop-hero.webp" // Replace with your beautiful shop interior/exterior
          alt="Lanka Treasures - Authentic Sri Lankan Handicrafts & Gifts"
          fill
          priority
          className="object-cover brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/60" />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-tight"
            style={{ 
              textShadow: '0 6px 20px rgba(0,0,0,0.95), 0 12px 40px rgba(0,0,0,0.8)' 
            }}
          >
            Lanka Treasures
          </h1>
          <p 
            className="text-xl md:text-2xl mb-10 font-medium opacity-95"
            style={{ textShadow: '0 4px 15px rgba(0,0,0,0.9)' }}
          >
            Authentic Ceylon Handicrafts • Gems • Tea • Souvenirs • Worldwide Shipping
          </p>
          <Link
  href="#visit"
  className="
    group relative inline-flex items-center gap-4
    px-10 py-5 
    bg-white/20 backdrop-blur-xl               /* Glass effect */
    border-2 border-white/40 
    text-white font-bold text-lg rounded-2xl 
    shadow-2xl hover:shadow-orange-500/30
    overflow-hidden
    transition-all duration-500
    hover:scale-110 active:scale-95
  "
>
  {/* Subtle inner glow */}
  <span className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/20 to-white/10 
                   opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

  {/* Ripple effect on hover */}
  <span className="absolute inset-0 scale-0 group-hover:scale-150 
                   bg-white/30 rounded-full transition-transform duration-700" />

  <ShoppingBag className="w-7 h-7 relative z-10 
    drop-shadow-lg group-hover:scale-110 transition-transform duration-300" />

  <span className="relative z-10">
    Visit Our Shop
  </span>

  {/* Arrow that slides in */}
  <ArrowRight className="w-6 h-6 ml-2 opacity-0 translate-x-4 
    group-hover:opacity-100 group-hover:translate-x-0 
    transition-all duration-500" />
</Link>
        </div>
      </section>

      {/* SHOP INFO & LOCATION */}
      <section id="visit" className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Your One-Stop Souvenir Shop in Sri Lanka
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Located in the heart of Hikkaduwa, <strong>Lanka Treasures</strong> offers the finest handpicked Sri Lankan handicrafts, 
                genuine Ceylon tea, precious gems, wooden masks, batik clothing, spices, and unique souvenirs — 
                all at fair prices with authenticity guaranteed.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <MapPin className="w-8 h-8 text-orange-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Location</p>
                    <p className="text-gray-700">No. 52, Galle Road, Hikkaduwa (Opposite Coral Sands Hotel)</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="w-8 h-8 text-orange-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Open Daily</p>
                    <p className="text-gray-700">8:00 AM – 9:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-8 h-8 text-orange-600" />
                  <div>
                    <p className="font-semibold text-gray-900">WhatsApp / Call</p>
                    <a href="tel:+94771234567" className="text-orange-600 font-bold">+94 77 123 4567</a>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <Link
                  href="https://wa.me/94771234567?text=Hi!%20I'm%20interested%20in%20your%20gift%20shop%20items"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl shadow-lg transition-all hover:scale-105"
                >
                  <Gift className="w-6 h-6" />
                  Send Inquiry on WhatsApp
                </Link>
              </div>
            </div>
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.7165494194815!2d80.23418997581543!3d6.033583028660869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae17fc358cc75ed%3A0x1be3fa21f8792a46!2sLanka%20Tours%20%26%20Transfer%20official%20%2Fmoney%20exchange%20%2Fsurf%2Chandicraft%2CGift%20Shop%20%2FScooter%20%26%20bike%20Rent%20%2FSurf%20camp!5e0!3m2!1sen!2slk!4v1763659276973!5m2!1sen!2slk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            What We Offer
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Sparkles, title: "Ceylon Tea & Spices", desc: "Pure loose leaf & gift packs" },
              { icon: Package, title: "Handicrafts", desc: "Wooden masks, elephant carvings" },
              { icon: Gift, title: "Gemstones", desc: "Blue sapphires, moonstones" },
              { icon: ShoppingBag, title: "Batik & Clothing", desc: "Sarongs, dresses, shirts" },
              { icon: Package, title: "Souvenirs", desc: "Keychains, magnets, postcards" },
              { icon: Gift, title: "Ayurvedic Products", desc: "Oils, balms, herbal tea" },
              { icon: Sparkles, title: "Jewelry", desc: "Silver & gemstone pieces" },
              { icon: Package, title: "Home Decor", desc: "Coconut shell bowls, lanterns" }
            ].map((item, i) => (
              <div key={i} className="group bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all hover:scale-105">
                <div className="w-20 h-20 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-6">
                  <item.icon className="w-12 h-12 text-orange-700" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY – Beautiful Asymmetric Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Inside Lanka Treasures
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
            <div className="row-span-2 relative overflow-hidden rounded-2xl shadow-xl group">
              <Image src="/giftshop/1.jpg" alt="Shop interior" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-xl group">
              <Image src="/giftshop/2.jpg" alt="Ceylon tea display" fill className="object-cover group-hover:scale-110 transition-transform" />
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-xl group">
              <Image src="/giftshop/3.jpg" alt="Gemstones" fill className="object-cover group-hover:scale-110 transition-transform" />
            </div>
            <div className="md:col-span-2 relative overflow-hidden rounded-2xl shadow-xl group">
              <Image src="/giftshop/4.jpg" alt="Handicrafts" fill className="object-cover group-hover:scale-110 transition-transform" />
            </div>
            <div className="row-span-2 relative overflow-hidden rounded-2xl shadow-xl group">
              <Image src="/giftshop/5.jpg" alt="Wooden masks" fill className="object-cover group-hover:scale-110 transition-transform" />
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-xl group">
              <Image src="/giftshop/6.jpg" alt="Happy customer" fill className="object-cover group-hover:scale-110 transition-transform" />
            </div>
            <div className="md:col-span-2 relative overflow-hidden rounded-2xl shadow-xl group">
              <Image src="/giftshop/7.jpg" alt="Shop exterior" fill className="object-cover group-hover:scale-110 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* WORLDWIDE SHIPPING & TRUST */}
      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
            We Ship Worldwide – Bring Sri Lanka Home
          </h2>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
            Can’t carry everything? We pack and ship safely to your country. 
            Trusted by thousands of tourists since 2020.
          </p>
          <div className="flex flex in-center gap-10 justify-center flex-wrap">
            <div className="flex items-center gap-3">
              <Package className="w-10 h-10 text-orange-600" />
              <span className="text-lg font-semibold">Secure Packing</span>
            </div>
            <div className="flex items-center gap-3">
              <Star className="w-10 h-10 text-orange-600" />
              <span className="text-lg font-semibold">Authenticity Guaranteed</span>
            </div>
            <div className="flex items-center gap-3">
              <Gift className="w-10 h-10 text-orange-600" />
              <span className="text-lg font-semibold">Gift Wrapping Available</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-orange-600 text-white text-center">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Visit Us Today or Order Online
          </h2>
          <p className="text-xl mb-10">
            Best prices • Fixed rates • No bargaining needed
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="https://wa.me/94771234567" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-orange-600 font-bold text-lg rounded-2xl shadow-2xl hover:scale-105 transition-all">
              <Phone className="w-7 h-7" />
              WhatsApp Now
            </Link>
            <Link href="#visit" className="inline-flex items-center gap-3 px-10 py-5 bg-transparent border-2 border-white text-white font-bold text-lg rounded-2xl hover:bg-white/10 transition-all">
              Get Directions <ArrowRight className="w-7 h-7" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}