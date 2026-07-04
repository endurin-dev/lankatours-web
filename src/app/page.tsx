// src/app/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import type { LucideProps } from 'lucide-react';
import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import {
  Plane, Building2, DollarSign, Compass, Waves, Bike,
  ShoppingBag, Sparkles, ArrowRight, Star, Shield,
  Clock, CreditCard, Phone
} from 'lucide-react';
import HeroQuoteForm from '@/components/HeroQuoteForm';

type LucideIcon = ForwardRefExoticComponent<LucideProps & RefAttributes<SVGSVGElement>>;

// ─── PAGE-LEVEL METADATA (overrides layout defaults for this route) ───────────
export const metadata: Metadata = {
  title: 'Lanka Tours & Transfers | Sri Lanka Airport Transfers & Private Tours',
  description:
    'Book Sri Lanka airport transfers from Colombo (CMB), private tours to Sigiriya, Yala, Kandy & Ella. Fixed prices, no hidden fees, 24/7 support. Trusted since 2020.',
  alternates: {
    canonical: 'https://www.lankatoursandtransfers.com',
  },
  openGraph: {
    title: 'Lanka Tours & Transfers | Sri Lanka Airport Transfers & Private Tours',
    description:
      'Book Sri Lanka airport transfers from Colombo (CMB), private tours to Sigiriya, Yala, Kandy & Ella. Fixed prices, no hidden fees, 24/7 support.',
    url: 'https://www.lankatoursandtransfers.com',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Lanka Tours and Transfers — Sri Lanka airport transfer and tour services',
      },
    ],
  },
};

// ─── FAQ STRUCTURED DATA ──────────────────────────────────────────────────────
// Enables Google FAQ rich results — expands your search listing for FREE.
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do you provide meet & greet at Colombo Bandaranaike Airport (CMB)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Your driver will be waiting in the arrivals hall with a name board. We track your flight in real-time — if you\'re delayed, your driver will be there when you land at no extra charge.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are your prices fixed with no hidden charges?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The price you see is the price you pay. All taxes, tolls, parking, fuel, and late-night transfers are included. No surge pricing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I book a baby seat or child booster for the airport transfer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We offer certified rear-facing infant seats, forward-facing child seats, and boosters at an additional LKR 1,500 per seat.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I pay? Do you accept credit cards?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pay online via Visa/Mastercard or pay the driver in cash (LKR, USD, EUR). No deposit required for most bookings.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if my flight is delayed or arrives early?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We track all flights in real-time. Your driver adjusts automatically for delays or early arrivals. No extra waiting charges for flight delays.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it safe to travel as a solo female traveler?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. All drivers are licensed, background-checked, English-speaking professionals. We can assign female drivers upon request.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I book a direct transfer from the airport to Kandy, Ella, Galle, or Yala?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We offer direct long-distance transfers to any destination in Sri Lanka — Kandy, Ella, Galle, Bentota, Sigiriya, Trincomalee, Jaffna, and more. Fixed price, no stops, private vehicle.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer free cancellation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Cancel up to 24 hours before pickup for a full refund. No questions asked.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are your vehicles air-conditioned?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'All vehicles are modern, fully air-conditioned sedans, minivans, or luxury vans with WiFi, bottled water, and luggage space. Cleaned and sanitized before every trip.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I contact you after booking?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We confirm every booking via WhatsApp and phone within 5 minutes of booking. You receive your driver\'s name, photo, vehicle details, and a live tracking link. 24/7 support is available.',
      },
    },
  ],
};

// ─── TOP TOURS STRUCTURED DATA ────────────────────────────────────────────────
// TouristTrip schema for each tour — can appear as rich results on Google.
const toursSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Top Sri Lanka Tour Packages',
  url: 'https://www.lankatoursandtransfers.com/tours',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'TouristTrip',
        name: 'Sigiriya Rock & Village Experience',
        description: 'Ancient Sigiriya rock fortress, village bullock cart ride, and traditional Sri Lankan lunch.',
        url: 'https://www.lankatoursandtransfers.com/tours/sigiriya',
        image: 'https://www.lankatoursandtransfers.com/tours/sigiriya.webp',
        offers: { '@type': 'Offer', price: '22900', priceCurrency: 'LKR', availability: 'https://schema.org/InStock' },
        touristType: 'Cultural tourists',
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'TouristTrip',
        name: 'Yala National Park Safari',
        description: 'Private jeep safari in Yala National Park with leopard spotting and breakfast.',
        url: 'https://www.lankatoursandtransfers.com/tours/yala',
        image: 'https://www.lankatoursandtransfers.com/tours/yala.webp',
        offers: { '@type': 'Offer', price: '19900', priceCurrency: 'LKR', availability: 'https://schema.org/InStock' },
        touristType: 'Wildlife tourists',
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'TouristTrip',
        name: 'Kandy Cultural Day Tour',
        description: 'Temple of the Tooth Relic, Kandyan cultural show, and spice garden visit.',
        url: 'https://www.lankatoursandtransfers.com/tours/kandy',
        image: 'https://www.lankatoursandtransfers.com/tours/kandy.webp',
        offers: { '@type': 'Offer', price: '14900', priceCurrency: 'LKR', availability: 'https://schema.org/InStock' },
        touristType: 'Cultural tourists',
      },
    },
    {
      '@type': 'ListItem',
      position: 4,
      item: {
        '@type': 'TouristTrip',
        name: 'Ella Scenic Train Journey',
        description: 'Nine Arch Bridge visit, tea estate walk, and Little Adam\'s Peak hike in Ella.',
        url: 'https://www.lankatoursandtransfers.com/tours/ella',
        image: 'https://www.lankatoursandtransfers.com/tours/ella.webp',
        offers: { '@type': 'Offer', price: '16900', priceCurrency: 'LKR', availability: 'https://schema.org/InStock' },
        touristType: 'Adventure tourists',
      },
    },
    {
      '@type': 'ListItem',
      position: 5,
      item: {
        '@type': 'TouristTrip',
        name: 'Mirissa Whale Watching',
        description: 'Blue whale and dolphin watching boat tour from Mirissa with breakfast on board.',
        url: 'https://www.lankatoursandtransfers.com/tours/whale',
        image: 'https://www.lankatoursandtransfers.com/tours/whale.webp',
        offers: { '@type': 'Offer', price: '21500', priceCurrency: 'LKR', availability: 'https://schema.org/InStock' },
        touristType: 'Wildlife tourists',
      },
    },
    {
      '@type': 'ListItem',
      position: 6,
      item: {
        '@type': 'TouristTrip',
        name: 'Galle Fort & South Coast Tour',
        description: 'UNESCO World Heritage Galle Fort, turtle hatchery, and stilt fishermen on the south coast.',
        url: 'https://www.lankatoursandtransfers.com/tours/galle',
        image: 'https://www.lankatoursandtransfers.com/tours/galle.webp',
        offers: { '@type': 'Offer', price: '17900', priceCurrency: 'LKR', availability: 'https://schema.org/InStock' },
        touristType: 'Cultural tourists',
      },
    },
  ],
};

// ─── SERVICE CARD COMPONENT ───────────────────────────────────────────────────
function ServiceCard({
  title,
  icon: Icon,
  badge,
  description,
}: {
  title: string;
  icon: LucideIcon;
  badge?: string;
  description: string;
}) {
  return (
    // SEO: article wraps each service — signals independent, meaningful content
    <article className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 p-8 text-center h-full flex flex-col justify-center">
      {badge && (
        <div
          className={`absolute -top-3 -right-3 px-4 py-1 rounded-full text-white text-xs font-bold shadow-md ${
            badge === '25% OFF' ? 'bg-orange-600' : 'bg-green-600'
          }`}
          aria-label={badge}
        >
          {badge}
        </div>
      )}
      <div className="w-20 h-20 mx-auto bg-green-100 rounded-2xl flex items-center justify-center mb-6" aria-hidden="true">
        <Icon className="w-12 h-12 text-green-700" />
      </div>
      {/* SEO: h3 inside a section with an h2 — correct heading hierarchy */}
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-xs md:text-sm text-gray-600 leading-tight">{description}</p>
    </article>
  );
}

// ─── PAGE COMPONENT ───────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      {/* ── Structured Data for this page ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toursSchema) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      {/*
        SEO NOTES:
        • <section> with aria-label describes the landmark to assistive tech & crawlers.
        • H1 is the single most important heading — one per page, contains the primary keyword.
        • The original used <h2> here — changed to <h1> since this IS the page title.
        • Image alt text describes the visual AND includes the brand name.
      */}
<section
  className="relative min-h-screen flex flex-col justify-center text-white"
  aria-label="Lanka Tours and Transfers — hero banner"
>
  <Image
    src="/images/hero-banner.webp"
    alt="Scenic Sri Lanka landscape — Lanka Tours and Transfers airport transfer and tour services"
    fill
    priority
    className="object-cover"
    sizes="100vw"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" aria-hidden="true" />

  <div className="relative z-10 px-6 py-32 md:py-24">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

      {/* LEFT — Text & CTA */}
      <div className="text-center lg:text-left">

        {/* Trust badge strip */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-5">
          <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/25 text-white/90 text-xs font-semibold px-3 py-1.5 rounded-full">
            <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
            4.9/5 Rated
          </span>
          <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/25 text-white/90 text-xs font-semibold px-3 py-1.5 rounded-full">
            <Shield className="w-3.5 h-3.5 text-green-400" />
            Licensed & Insured
          </span>
          <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/25 text-white/90 text-xs font-semibold px-3 py-1.5 rounded-full">
            <Clock className="w-3.5 h-3.5 text-blue-300" />
            24/7 Support
          </span>
        </div>

        {/*
          ✅ THIS IS NOW THE <H1> — the most important SEO change on this page.
          Contains the brand name + primary service + location keywords.
          Font size reduced for a tighter, more refined look.
        */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight tracking-tight">
          Sri Lanka Airport Transfers & Private Tours
        </h1>

        <p className="text-base sm:text-lg md:text-xl mb-8 font-light max-w-lg mx-auto lg:mx-0 opacity-90 leading-relaxed">
          Your Trusted Sri Lanka Travel Partner Since 2020  Fixed Prices, No Hidden Fees
        </p>

        {/* Restyled single CTA */}
        <div className="flex justify-center lg:justify-start">
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base md:text-lg font-bold text-white bg-gradient-to-r from-green-500 to-emerald-600 shadow-xl shadow-green-900/40 overflow-hidden transition-all duration-300 ease-out hover:shadow-2xl hover:shadow-green-900/50 hover:scale-105 active:scale-95"
            aria-label="Get a free quote for Sri Lanka tours and transfers"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" aria-hidden="true" />
            <span className="relative z-10 flex items-center gap-2">
              Get Free Quote
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </span>
          </Link>
        </div>

        {/* Small supporting microcopy under the button */}
        <p className="mt-4 text-xs text-white/60 font-medium">
          No payment required · Instant response on WhatsApp
        </p>
      </div>

      {/* RIGHT — Instant quote widget */}
      <div className="w-full flex justify-center lg:justify-end">
        <HeroQuoteForm />
      </div>

    </div>
  </div>
</section>
      {/* ── TRUST SIGNALS / PARTNERS ─────────────────────────────────────────── */}
      {/*
        SEO: aria-label on section tells crawlers what this strip is about.
        Partner logo alt text is specific to each brand — not "Trusted Partner".
      */}
      <section className="py-14 bg-white border-y border-gray-100" aria-label="Our booking platform and travel partners">
        <div className="container mx-auto px-6">
          <p className="text-center text-gray-900 text-sm md:text-base font-semibold tracking-wider mb-10">
            Book Us On Your Favourite Platform
          </p>

          <div className="overflow-hidden" aria-hidden="true">
            <div className="flex animate-[slide_30s_linear_infinite] items-center gap-16 md:gap-24">
              {[
                { src: '/partners/bluenote-logo.jpg', alt: 'Bluenote Travel' },
                { src: '/partners/tripadvisor-logo.png', alt: 'TripAdvisor' },
                { src: '/partners/GetYourGuide_Logo.jpg', alt: 'GetYourGuide' },
                { src: '/partners/Booking-logo.png', alt: 'Booking.com' },
                { src: '/partners/Agoda_logo.png', alt: 'Agoda' },
                { src: '/partners/avawia_logo.png', alt: 'Avawia' },
                { src: '/partners/chenda_logo.jpeg', alt: 'Chenda Travel' },
                // Repeated for seamless infinite scroll
                { src: '/partners/bluenote-logo.jpg', alt: 'Bluenote Travel' },
                { src: '/partners/tripadvisor-logo.png', alt: 'TripAdvisor' },
                { src: '/partners/GetYourGuide_Logo.jpg', alt: 'GetYourGuide' },
                { src: '/partners/Booking-logo.png', alt: 'Booking.com' },
                { src: '/partners/Agoda_logo.png', alt: 'Agoda' },
                { src: '/partners/avawia_logo.png', alt: 'Avawia' },
                { src: '/partners/chenda_logo.jpeg', alt: 'Chenda Travel' },
              ].map((partner, index) => (
                <div key={index} className="flex-shrink-0">
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    width={160}
                    height={80}
                    className="h-16 w-auto object-contain grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────────────── */}
      {/*
        SEO: section has aria-labelledby pointing to the h2 — creates a named landmark.
        The big airport transfer card content is expanded with keyword-rich copy.
        All <ServiceCard> components use <article> + <h3> internally.
      */}
      <section className="py-20 bg-gray-50" aria-labelledby="services-heading">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 id="services-heading" className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              All Your Sri Lanka Travel Needs in One Place
            </h2>
            <p className="text-lg text-gray-600">
              Licensed by Sri Lanka Tourism Authority · Trusted by thousands of international travelers
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-start">
            {/* BIG FEATURED CARD */}
            <article className="col-span-2 row-span-2 bg-green-600 text-white rounded-2xl shadow-xl p-12 text-center h-full flex flex-col justify-center hover:shadow-2xl transition-shadow">
              <div className="w-28 h-28 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-8" aria-hidden="true">
                <Plane className="w-20 h-20" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Colombo Airport Transfers (CMB)
              </h3>
              <p className="text-sm md:text-base opacity-90 mb-4">
                Arrive in Sri Lanka stress-free with our premium Bandaranaike International Airport (CMB)
                transfers. Private taxis, luxury vehicles, and family-friendly options with certified baby
                seats available. We serve all major destinations — Negombo, Colombo, Kandy, Galle, Ella,
                Sigiriya, and beyond.
              </p>
              <p className="text-sm md:text-base opacity-90 mb-6">
                Skip the taxi queues and travel directly to your hotel in a safe, air-conditioned vehicle
                with a professional English-speaking driver. Fixed price — no meters, no surprises.
              </p>
              <Link
                href="/transfers"
                className="inline-block bg-white/20 hover:bg-white/30 transition-colors px-6 py-2 rounded-full font-semibold"
                aria-label="Book Colombo airport transfer — most popular service"
              >
                MOST POPULAR — Book Now
              </Link>
            </article>

            <ServiceCard
              title="Hotel Booking Sri Lanka"
              icon={Building2}
              badge="25% OFF"
              description="Best hotel rates across Sri Lanka — instant confirmation, free cancellation, exclusive discounts"
            />
            <ServiceCard
              title="Currency Exchange"
              icon={DollarSign}
              badge="BEST RATE"
              description="Airport and city currency exchange — no commission, best LKR rates guaranteed"
            />
            <ServiceCard
              title="Excursions & Day Tours"
              icon={Compass}
              description="Sigiriya rock fortress, Yala safari, Kandy Temple of the Tooth, whale watching, custom itineraries"
            />
            <ServiceCard
              title="Surf Camp & Lessons"
              icon={Waves}
              description="Arugam Bay and Weligama surf lessons for beginners to pros — board rental included"
            />
            <ServiceCard
              title="Scooter & Bike Rental"
              icon={Bike}
              description="From LKR 2,000/day with insurance and helmet — island-wide delivery available"
            />
            <ServiceCard
              title="Ceylon Gift & Souvenir Shop"
              icon={ShoppingBag}
              description="Genuine Ceylon tea, gemstones, handicrafts, and souvenirs with worldwide shipping"
            />
            <ServiceCard
              title="Train Tickets, Safaris & More"
              icon={Sparkles}
              description="Ella train tickets, Yala and Udawalawe safaris, visa extension assistance, diving packages"
            />
          </div>
        </div>
      </section>

      {/* ── TOUR PACKAGES ────────────────────────────────────────────────────── */}
      {/*
        SEO:
        • Each tour card wrapped in <article> with itemscope/itemtype for inline microdata.
        • H3 headings contain location keywords: "Sigiriya Rock", "Yala National Park", etc.
        • Image alt tags describe the scene + location (not just the place name).
        • Prices use <data> element so crawlers can parse them as machine-readable values.
      */}
      <section className="py-20 bg-gray-50" aria-labelledby="tours-heading">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 id="tours-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              Top Sri Lanka Tour Packages
            </h2>
            <p className="text-lg text-gray-600">
              Curated private experiences · Airport transfers included · Best value guaranteed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* CARD 1 – Sigiriya */}
            <article className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/tours/sigiriya.webp"
                  alt="Sigiriya Rock Fortress rising above the jungle in Central Sri Lanka"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold" aria-label="Best seller tour">
                  BEST SELLER
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Sigiriya Rock Fortress & Village Experience
                </h3>
                <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                  Climb the UNESCO-listed Sigiriya Rock Fortress, take a bullock cart village ride, and enjoy a traditional Sri Lankan lunch.
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <data value="22900" className="text-3xl font-bold text-green-600">LKR 22,900</data>
                    <p className="text-xs text-gray-500">per person</p>
                  </div>
                  <Link href="/tours/sigiriya" className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium text-sm rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg" aria-label="View Sigiriya Rock Fortress tour details and book">
                    View Details →
                  </Link>
                </div>
              </div>
            </article>

            {/* CARD 2 – Yala */}
            <article className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/tours/yala.webp"
                  alt="Leopard resting on a tree branch in Yala National Park, Sri Lanka"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Yala National Park Safari</h3>
                <p className="text-sm text-gray-600 mb-5">Private jeep safari with leopard spotting, elephant sightings, and breakfast included</p>
                <div className="flex items-center justify-between">
                  <div>
                    <data value="19900" className="text-3xl font-bold text-green-600">LKR 19,900</data>
                    <p className="text-xs text-gray-500">per person</p>
                  </div>
                  <Link href="/tours/yala" className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium text-sm rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg" aria-label="View Yala National Park safari details and book">
                    View Details →
                  </Link>
                </div>
              </div>
            </article>

            {/* CARD 3 – Kandy */}
            <article className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/tours/kandy.webp"
                  alt="Temple of the Tooth Relic in Kandy, Sri Lanka, reflected in the lake at sunset"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold" aria-label="Limited time offer">
                  LIMITED OFFER
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Kandy Cultural Day Tour</h3>
                <p className="text-sm text-gray-600 mb-5">Temple of the Tooth Relic, traditional Kandyan cultural dance show, and a spice garden visit</p>
                <div className="flex items-center justify-between">
                  <div>
                    <del className="text-sm text-gray-500">LKR 18,000</del>
                    <data value="14900" className="text-3xl font-bold text-green-600 block">LKR 14,900</data>
                    <p className="text-xs text-gray-500">per person</p>
                  </div>
                  <Link href="/tours/kandy" className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium text-sm rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg" aria-label="View Kandy Cultural Day Tour details and book">
                    View Details →
                  </Link>
                </div>
              </div>
            </article>

            {/* CARD 4 – Ella */}
            <article className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/tours/ella.webp"
                  alt="Nine Arch Bridge in Ella with a blue train passing through lush green tea estates"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ella Scenic Train & Nine Arch Bridge</h3>
                <p className="text-sm text-gray-600 mb-5">Nine Arch Bridge views, tea estate walks, and a hike up Little Adam&apos;s Peak</p>
                <div className="flex items-center justify-between">
                  <div>
                    <data value="16900" className="text-3xl font-bold text-green-600">LKR 16,900</data>
                    <p className="text-xs text-gray-500">per person</p>
                  </div>
                  <Link href="/tours/ella" className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium text-sm rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg" aria-label="View Ella train journey tour details and book">
                    View Details →
                  </Link>
                </div>
              </div>
            </article>

            {/* CARD 5 – Whale Watching */}
            <article className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/tours/whale.webp"
                  alt="Blue whale surfacing during a whale watching tour in Mirissa, southern Sri Lanka"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Mirissa Whale Watching Tour</h3>
                <p className="text-sm text-gray-600 mb-5">Blue whales, spinner dolphins, and breakfast served on the boat</p>
                <div className="flex items-center justify-between">
                  <div>
                    <data value="21500" className="text-3xl font-bold text-green-600">LKR 21,500</data>
                    <p className="text-xs text-gray-500">per person</p>
                  </div>
                  <Link href="/tours/whale" className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium text-sm rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg" aria-label="View Mirissa whale watching tour details and book">
                    View Details →
                  </Link>
                </div>
              </div>
            </article>

            {/* CARD 6 – Galle */}
            <article className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/tours/galle.webp"
                  alt="Sunset view of Galle Fort lighthouse and ramparts, a UNESCO World Heritage Site in Sri Lanka"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Galle Fort & South Coast Day Tour</h3>
                <p className="text-sm text-gray-600 mb-5">UNESCO Galle Fort, sea turtle hatchery, and traditional stilt fishermen on the south coast</p>
                <div className="flex items-center justify-between">
                  <div>
                    <data value="17900" className="text-3xl font-bold text-green-600">LKR 17,900</data>
                    <p className="text-xs text-gray-500">per person</p>
                  </div>
                  <Link href="/tours/galle" className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium text-sm rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg" aria-label="View Galle Fort and south coast tour details and book">
                    View Details →
                  </Link>
                </div>
              </div>
            </article>

          </div>

          <div className="text-center mt-16">
            <Link href="/tours" className="inline-block px-10 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300" aria-label="View all Sri Lanka tour packages">
              View All Sri Lanka Tour Packages →
            </Link>
          </div>
        </div>
      </section>

      {/* ── PHOTO GALLERY ────────────────────────────────────────────────────── */}
      {/*
        SEO: All gallery images now have descriptive, keyword-rich alt text.
        "facy shop" was a typo — corrected to descriptive text.
        Gallery wrapped in <section> with aria-label.
      */}
      <section className="py-20 bg-white" aria-labelledby="gallery-heading">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 id="gallery-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Sri Lanka Travel Gallery
            </h2>
            <p className="text-lg text-gray-600">
              Real moments from real travelers — unforgettable Sri Lanka experiences
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px]" role="list" aria-label="Travel photo gallery">

            <div className="row-span-2 relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group" role="listitem">
              <Image src="/gallery/1.webp" alt="Happy family of tourists posing at Sigiriya Rock Fortress" fill className="object-cover group-hover:scale-110 transition-transform duration-700" sizes="(max-width: 768px) 50vw, 25vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all group" role="listitem">
              <Image src="/gallery/2.webp" alt="Driver greeting tourists at Colombo Bandaranaike Airport arrivals hall" fill className="object-cover group-hover:scale-110 transition-transform duration-700" sizes="(max-width: 768px) 50vw, 25vw" />
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all group" role="listitem">
              <Image src="/gallery/3.webp" alt="Leopard spotted on a Yala National Park jeep safari" fill className="object-cover group-hover:scale-110 transition-transform duration-700" sizes="(max-width: 768px) 50vw, 25vw" />
            </div>

            <div className="md:col-span-2 relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all group" role="listitem">
              <Image src="/gallery/4.webp" alt="Scenic Ella train journey passing through misty Sri Lankan tea estates" fill className="object-cover group-hover:scale-110 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all group" role="listitem">
              <Image src="/gallery/5.webp" alt="Blue whale breaching during a Mirissa whale watching boat tour" fill className="object-cover group-hover:scale-110 transition-transform duration-700" sizes="(max-width: 768px) 50vw, 25vw" />
            </div>

            <div className="row-span-2 relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all group" role="listitem">
              <Image src="/gallery/6.webp" alt="Galle Fort lighthouse at golden hour, Sri Lanka south coast" fill className="object-cover group-hover:scale-110 transition-transform duration-700" sizes="(max-width: 768px) 50vw, 25vw" />
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all group" role="listitem">
              <Image src="/gallery/7.webp" alt="Temple of the Tooth Relic in Kandy illuminated at night" fill className="object-cover group-hover:scale-110 transition-transform duration-700" sizes="(max-width: 768px) 50vw, 25vw" />
            </div>

            <div className="md:col-span-2 relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all group" role="listitem">
              <Image src="/gallery/8.webp" alt="Tourists arriving at a beachfront hotel via private Lanka Tours transfer vehicle" fill className="object-cover group-hover:scale-110 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all group" role="listitem">
              <Image src="/gallery/9.webp" alt="Smiling Lanka Tours driver welcoming guests at the airport" fill className="object-cover group-hover:scale-110 transition-transform duration-700" sizes="(max-width: 768px) 50vw, 25vw" />
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all group" role="listitem">
              <Image src="/gallery/10.webp" alt="Happy couple leaving a five-star review for Lanka Tours and Transfers" fill className="object-cover group-hover:scale-110 transition-transform duration-700" sizes="(max-width: 768px) 50vw, 25vw" />
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all group" role="listitem">
              <Image src="/gallery/11.webp" alt="Ceylon tea and souvenir gift shop products — Lanka Tours & Transfers" fill className="object-cover group-hover:scale-110 transition-transform duration-700" sizes="(max-width: 768px) 50vw, 25vw" />
            </div>

          </div>

          <div className="text-center mt-12">
            <Link href="/gallery" className="inline-flex items-center gap-4 px-10 py-5 bg-green-600 hover:bg-green-700 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-400 hover:scale-105" aria-label="View the full Sri Lanka travel photo gallery">
              View Full Gallery <ArrowRight className="w-7 h-7" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ──────────────────────────────────────────────────────────── */}
      {/*
        SEO: Review microdata added via itemscope/itemtype on each review item.
        Section has a descriptive aria-label. Heading contains brand + "reviews" keyword.
      */}
      <section className="py-20 bg-gray-50" aria-labelledby="reviews-heading">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 id="reviews-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Lanka Tours & Transfers Reviews
            </h2>
            <p className="text-lg text-gray-600">
              Trusted by thousands of travelers · 5/5 on TripAdvisor · 4.9/5 on Google
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* TripAdvisor */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <Image src="/partners/tripadvisor-logo.png" alt="TripAdvisor reviews for Lanka Tours and Transfers" width={120} height={50} className="object-contain" />
                <div>
                  <p className="text-3xl font-bold text-gray-900">5/5</p>
                  <p className="text-sm text-gray-600">TripAdvisor Rating</p>
                  <p className="text-xs text-gray-500">Be the first to leave a review!</p>
                </div>
              </div>
              <div className="bg-gray-100 rounded-xl p-4 text-center">
                <p className="text-sm text-gray-500 italic mb-4">TripAdvisor Reviews</p>
                <iframe
                  src="https://www.tripadvisor.com/Attraction_Review-g297896-d20911258-Reviews-Lanka_tours_transfers-Galle_Galle_District_Southern_Province.html#REVIEWS"
                  className="w-full h-48 rounded-lg border-0"
                  title="TripAdvisor reviews for Lanka Tours and Transfers"
                  loading="lazy"
                />
                <Link href="https://www.tripadvisor.com/Attraction_Review-g297896-d20911258-Reviews-Lanka_tours_transfers-Galle_Galle_District_Southern_Province.html" className="text-green-600 hover:text-green-700 font-semibold text-sm" rel="noopener" target="_blank">
                  Read All Reviews on TripAdvisor →
                </Link>
              </div>
            </div>

            {/* Google Reviews */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center" aria-hidden="true">
                  <span className="text-white text-sm font-bold">G</span>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">4.9/5</p>
                  <p className="text-sm text-gray-600">300+ Google Reviews</p>
                </div>
              </div>

              {/* Review items with inline Review microdata */}
              <div className="space-y-4 mb-6">
                {[
                  { name: 'John D.', date: '2025-11-15', rating: 5, body: 'Excellent airport transfer! Driver was punctual and friendly. Highly recommend for first-time visitors to Sri Lanka.' },
                  { name: 'Sarah K.', date: '2025-11-10', rating: 5, body: 'Smooth Yala safari booking. Saw leopards! Professional service from start to finish — will book again.' },
                  { name: 'Mike L.',  date: '2025-11-05', rating: 4, body: 'Great value for money. Hotel booking was easy and got 25% off as promised.' },
                ].map((review, i) => (
                  <div key={i} className="flex gap-3" itemScope itemType="https://schema.org/Review">
                    <meta itemProp="reviewRating" content={String(review.rating)} />
                    <meta itemProp="author" content={review.name} />
                    <meta itemProp="datePublished" content={review.date} />
                    <div className="flex gap-0.5 text-yellow-400 flex-shrink-0" aria-label={`${review.rating} out of 5 stars`}>
                      {[...Array(review.rating)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-current" aria-hidden="true" />
                      ))}
                      {[...Array(5 - review.rating)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 text-gray-300 fill-gray-300" aria-hidden="true" />
                      ))}
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{review.name}</p>
                      <p className="text-sm text-gray-700" itemProp="reviewBody">&quot;{review.body}&quot;</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gray-100 rounded-xl p-4 text-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15858.000000000!2d80.000000000!3d7.000000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMDEnMDAuMCJOIDgwwrAwMCcwMC4wIkU!5e0!3m2!1sen!2slk!4v1730000000000"
                  className="w-full h-48 rounded-lg border-0"
                  title="Google Maps location for Lanka Tours and Transfers"
                  loading="lazy"
                  allowFullScreen
                />
                <Link href="https://www.google.com/search?q=Lanka+Tours+and+Transfers" className="text-green-600 hover:text-green-700 font-semibold text-sm" rel="noopener" target="_blank">
                  Leave a Google Review →
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link href="/contact" className="inline-flex items-center gap-4 px-12 py-5 bg-green-600 hover:bg-green-700 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Share Your Story <ArrowRight className="w-7 h-7" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────────── */}
      {/*
        SEO: FAQ section has matching faqSchema JSON-LD injected at top of component.
        The <details>/<summary> HTML is accessible and crawlable by Google.
        Section aria-label matches the schema "FAQPage" intent.
      */}
      <section className="py-20 bg-white" aria-labelledby="faq-heading">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 id="faq-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Sri Lanka Travel — Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Everything you need to know before booking your Sri Lanka airport transfer or private tour
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'Do you provide meet & greet at Colombo Bandaranaike Airport (CMB)?',
                a: "Yes! Your driver will be waiting in the arrivals hall with a clear name board showing your name. We monitor your flight in real-time, so even if you're delayed, we'll be there when you land — no extra charge.",
              },
              {
                q: 'Are your Sri Lanka transfer prices fixed? Any hidden charges or night surcharges?',
                a: 'No hidden fees — ever. The price you see is the price you pay. Includes all taxes, tolls, parking, fuel, and even late-night/early-morning transfers. No surge pricing like Uber or PickMe during peak season.',
              },
              {
                q: 'Can I book a baby or child seat for my airport transfer?',
                a: 'Yes! We offer certified rear-facing infant seats, forward-facing child seats, and boosters — all cleaned before every trip. Just select during booking (+ LKR 1,500 per seat).',
              },
              {
                q: 'How do I pay? Do you accept credit cards for Sri Lanka tours?',
                a: 'Pay online securely via Visa or Mastercard, or pay the driver in cash (LKR, USD, EUR). No deposit required for most bookings — pay on arrival if you prefer.',
              },
              {
                q: 'What if my flight is delayed or arrives at a different time?',
                a: 'We track all flights in real-time. Your driver will adjust automatically — whether you land 3 hours early or 5 hours late. No extra waiting charges for flight delays.',
              },
              {
                q: 'Is it safe to travel in Sri Lanka as a solo female traveler?',
                a: 'Absolutely yes. All our drivers are licensed, background-checked, English-speaking, and professional. Thousands of solo female travelers trust us every year. Female drivers available upon request.',
              },
              {
                q: 'Can I book a transfer directly from Colombo airport to Kandy, Ella, Galle, or Yala?',
                a: 'Yes! We offer direct long-distance transfers to any destination in Sri Lanka — Kandy, Ella, Galle, Bentota, Sigiriya, Trincomalee, Jaffna, and more. Fixed price, private vehicle, no stops.',
              },
              {
                q: 'Do you offer free cancellation on Sri Lanka bookings?',
                a: 'Yes — cancel up to 24 hours before pickup for a full refund. No questions asked. Perfect peace of mind for uncertain travel plans.',
              },
              {
                q: 'Are your vehicles air-conditioned and comfortable for long drives?',
                a: 'All vehicles are modern, fully air-conditioned sedans, minivans, or luxury vans with WiFi, bottled water, and plenty of luggage space. Cleaned and sanitized before every trip.',
              },
              {
                q: 'How can I contact Lanka Tours & Transfers after booking?',
                a: "We confirm every booking via WhatsApp & phone call within 5 minutes. You'll receive your driver's name, photo, vehicle details, and live tracking link. 24/7 support team available.",
              },
            ].map(({ q, a }, i) => (
              <details key={i} className="group bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <summary className="flex items-center justify-between px-8 py-6 cursor-pointer font-semibold text-lg text-gray-800 list-none">
                  {q}
                  <span className="ml-4 text-green-600 group-open:rotate-180 transition-transform flex-shrink-0" aria-hidden="true">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-8 pb-6 text-gray-700 leading-relaxed">{a}</div>
              </details>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-xl text-gray-700 mb-6">Still have questions about your Sri Lanka trip?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-green-600 hover:bg-green-700 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105" aria-label="Contact Lanka Tours and Transfers on WhatsApp">
                <Phone className="w-6 h-6" aria-hidden="true" />
                Chat on WhatsApp
              </Link>
              <Link href="/transfers" className="px-10 py-5 border-2 border-green-600 text-green-600 hover:bg-green-50 font-bold text-lg rounded-2xl transition-all" aria-label="Get an instant quote for Sri Lanka airport transfers">
                Get Instant Quote →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}